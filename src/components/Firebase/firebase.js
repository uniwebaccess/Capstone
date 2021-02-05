const firebase = require("firebase/app");
require("firebase/database");

const config = {
  apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
  authDomain: 'uniwebaccess.firebaseapp.com',
  databaseURL: 'https://uniwebaccess-default-rtdb.firebaseio.com',
  projectId: 'uniwebaccess',
  storageBucket: process.env.REACT_APP_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.REACT_APP_FIREBASE_MSG_SENDER_ID,
  appId: process.env.REACT_APP_FIREBASE_APP_ID,
  measurementId: process.env.REACT_APP_FIREBASE_MEASUREMENT_ID,
};

firebase.default.initializeApp(config);

const database = firebase.default.database();

module.exports = database;
