import firebase from 'firebase';

var firebaseConfig = {
    apiKey: "AIzaSyBcIcsiKPOgckF61iRIdt8gztGuodEN1JQ",
    authDomain: "managecrowd.firebaseapp.com",
    databaseURL: "https://managecrowd.firebaseio.com",
    projectId: "managecrowd",
    storageBucket: "managecrowd.appspot.com",
    messagingSenderId: "528442437054",
    appId: "1:528442437054:web:5ea0325efc9c2368999def",
    measurementId: "G-J6LQP6FD35"
  };

  const fire = firebase.initializeApp(firebaseConfig);
  export default fire;
