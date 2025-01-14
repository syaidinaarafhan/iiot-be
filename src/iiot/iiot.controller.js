const express = require('express');
const { db } = require("../db/index")
const { getDatabase, ref, get } = require("firebase/database");

const router = express.Router();

router.get('/getData', async(req, res) => {
    try {
        const db = getDatabase();
        const dbRef = ref(db, "tds/tdsValue");
        const snapshot = await get(dbRef);

        if (snapshot.exists()) {
            res.send({
                data: snapshot.val(),
                message: "success",
            });
        } else {
            res.send({
                data: null,
                message: "No data available in tds/tdsValue",
            });
        }
    } catch (error) {
        res.status(400).send(error.message);
    }
})

module.exports = router