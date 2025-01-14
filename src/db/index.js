const { initializeApp  } = require("firebase/app")

const firebaseConfig = {
    apiKey: process.env.API_KEY,
    authDomain: process.env.AUTH_DOMAIN,
    databaseURL: "https://tubes-iot-af9f0-default-rtdb.asia-southeast1.firebasedatabase.app",
    projectId: process.env.PROJECT_ID,
    storageBucket: process.env.STORAGE_BUCKET,
    messagingSenderId: process.env.MESSAGING_SENDER_ID,
    appId: process.env.APP_ID,
  };
  
// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);

module.exports = { firebaseApp }