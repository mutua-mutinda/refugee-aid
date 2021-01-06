import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyB3pAsgUKipurs7z2v77noXEEWalNgwSqg",
  authDomain: "refugee-aid-c3c70.firebaseapp.com",
  projectId: "refugee-aid-c3c70",
  storageBucket: "refugee-aid-c3c70.appspot.com",
  messagingSenderId: "333803968757",
  appId: "1:333803968757:web:6b7a959d68bcc657ec8dbc",
  measurementId: "G-5M10MV7VRS",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.database();

// const firebaseApp = firebase.initializeApp(firebaseConfig);

// const db = firebaseApp.firestore();

// const auth = firebase.auth();

export { db };
