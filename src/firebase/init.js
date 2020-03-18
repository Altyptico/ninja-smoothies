 import firebase from 'firebase'
 import firestore from 'firebase/firestore'
 
 // Your web app's Firebase configuration
 const firebaseConfig = {
  apiKey: "AIzaSyB5gHcp7QFLb8elg1zU_4a0hNsffDx7DYc",
  authDomain: "ninja-smoothies-3fcec.firebaseapp.com",
  databaseURL: "https://ninja-smoothies-3fcec.firebaseio.com",
  projectId: "ninja-smoothies-3fcec",
  storageBucket: "ninja-smoothies-3fcec.appspot.com",
  messagingSenderId: "765891553026",
  appId: "1:765891553026:web:7c328a8ea4c121168a441b",
  measurementId: "G-BYL71LPCDF"
};
  // Initialize Firebase
  const firebaseApp = firebase.initializeApp(firebaseConfig);
  // firebaseApp.firestore().settings({timestampsInSnapshots: true}) new releases automatically set to true, do not need this anymore
  firebase.analytics();

  //export firestore database

  export default firebaseApp.firestore()