
import  firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/database';

var firebaseConfig = {
  apiKey: "AIzaSyDs_uySX6VqNDoloWLKj6ivrj4sRM3yj5I",
  authDomain: "chatappredux-24002.firebaseapp.com",
  databaseURL: "https://chatappredux-24002.firebaseio.com",
  projectId: "chatappredux-24002",
  storageBucket: "chatappredux-24002.appspot.com",
  messagingSenderId: "395987370422",
  appId: "1:395987370422:web:f517cef9ef076c0d728117",
  measurementId: "G-EMQZ4ELZX7"
};


  firebase.initializeApp(firebaseConfig);
 export default firebase;
  