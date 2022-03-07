import firebase from 'firebase/compat/app'
import 'firebase/database'

const firebaseConfig = {
    apiKey: "AIzaSyBrojChu6iQ1ES2P8cqXcFB1UBt5ig20JI",
    authDomain: "comentaki-appp.firebaseapp.com",
    projectId: "comentaki-appp",
    storageBucket: "comentaki-appp.appspot.com",
    messagingSenderId: "21761615357",
    appId: "1:21761615357:web:07e58895cdb8ac091ca594"
  };
 firebase.initializeApp(firebaseConfig)

 export default firebase
  
  