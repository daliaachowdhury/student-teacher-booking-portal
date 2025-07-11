// Update with your Firebase project config
const firebaseConfig = {
  apiKey: "AIzaSyDEwySyQq61pcplsu2rWSB59zRB9O5ru3Y",
  authDomain: "student-teacher-appointm-e01e7.firebaseapp.com",
  projectId: "student-teacher-appointm-e01e7",
  storageBucket: "student-teacher-appointm-e01e7.firebasestorage.app",
  messagingSenderId: "682136948009",
  appId: "1:682136948009:web:2eca825830b9ec6407bb38",
  measurementId: "G-8R5GZCFBRF"
};
firebase.initializeApp(firebaseConfig);
const auth = firebase.auth();
const db = firebase.firestore();
