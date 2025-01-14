const dotenv = require("dotenv");
const express = require("express")
const cors = require('cors');

const app = express();

app.use(express.json());
app.use(cors());

dotenv.config();

const PORT = process.env.PORT

app.get('/',(req, res) => {
    res.send('Hello World')
});

const iiotController = require('./src/iiot/iiot.controller')

app.use('/home', iiotController)

app.listen(PORT, () => {
  console.log(`App listening to http://localhost:${PORT}`);
})