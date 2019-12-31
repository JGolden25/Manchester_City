import firebase from 'firebase/app'
import 'firebase/app'
import 'firebase/database'
import 'firebase/auth'

const config = {
    apiKey: "AIzaSyA9WVEKJshbz055gcW9rVkogHvrsdJZQu4",
    authDomain: "m-city-36c66.firebaseapp.com",
    databaseURL: "https://m-city-36c66.firebaseio.com",
    projectId: "m-city-36c66",
    storageBucket: "m-city-36c66.appspot.com",
    messagingSenderId: "479052271728",
    appId: "1:479052271728:web:dc0481d18468bae39aa4b5",
    measurementId: "G-29T1H3G6F8"
  };

  firebase.initializeApp(config);

  const firebaseDB = firebase.database();
const firebaseMatches = firebaseDB.ref('matches')
const firebasePromotions = firebaseDB.ref('promotions')
const firebaseTeams = firebaseDB.ref('teams')
 export {
     firebase,
     firebaseMatches,
     firebasePromotions,
     firebaseTeams
 }