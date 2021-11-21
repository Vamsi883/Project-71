import firebase from 'firebase'
require("@firebase/firestore")

const firebaseConfig = {
  apiKey: "AIzaSyCmv71RWJhFXnfk-5whZGjKJGvY3xZ_p2w",
  authDomain: "complaint-forum-d7129.firebaseapp.com",
  projectId: "complaint-forum-d7129",
  storageBucket: "complaint-forum-d7129.appspot.com",
  messagingSenderId: "518396326420",
  appId: "1:518396326420:web:d5355951d7a467c95fad01"
};
  firebase.initializeApp(firebaseConfig);

  export default firebase.firestore()

