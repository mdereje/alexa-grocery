import firebase from 'firebase'

const firebaseConfig = {
  apiKey: "AIzaSyCsBPXusm7XWqvh-3-aXgoIFyYQT0rbBPk",
  authDomain: "grocery-list-10cb6.firebaseapp.com",
  databaseURL: "https://grocery-list-10cb6.firebaseio.com",
  projectId: "grocery-list-10cb6",
  storageBucket: "",
  messagingSenderId: "392463767615",
  appId: "1:392463767615:web:0489d196a6c3c57fc2408a",
  measurementId: "G-HXR0JFYVDC"
};

var fire = firebase.initializeApp(firebaseConfig);
export default fire;