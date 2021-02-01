import firebase from "firebase/app";
import "firebase/database";

const config = {
  apiKey: "AIzaSyAfpyLcY4yCvumsOOieL8pBrI6xLJ5mGaQ",
  authDomain: "uniwebaccess.firebaseapp.com",
  databaseURL: "https://uniwebaccess-default-rtdb.firebaseio.com",
  projectId: "uniwebaccess",
  storageBucket: "222663379711",
  messagingSenderId: "222663379711",
  appId: "1:222663379711:web:f4bbf2f0ba9fd594495aca",
  measurementId: "G-C63Y08YQ2K",
};

firebase.initializeApp(config);

const database = firebase.database();

export default database;
