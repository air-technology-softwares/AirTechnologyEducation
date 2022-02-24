import firebase from 'firebase';

const firebaseConfig = {
    apiKey: "AIzaSyDDTCy4QhOfr2p66moFqoVqxmJAt7NxgrI",
    authDomain: "air-technology-education.firebaseapp.com",
    databaseURL: "https://air-technology-education-default-rtdb.firebaseio.com",
    projectId: "air-technology-education",
    storageBucket: "air-technology-education.appspot.com",
    messagingSenderId: "524849959120",
    appId: "1:524849959120:web:86fa14bb300c5347fb0ed5"
  };

  firebase.initializeApp(firebaseConfig);

  export default firebase.database();