import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

const firebaseConfig= {
    apiKey: "AIzaSyDPcJfnYDA1oIz_WSt_QTDzYCbeKTWwPgA",
    authDomain: "login-auth-8ef41.firebaseapp.com",
    projectId: "login-auth-8ef41",
    storageBucket: "login-auth-8ef41.appspot.com",
    messagingSenderId: "1036143015105",
    appId: "1:1036143015105:web:78d27480e442e472b15040"
}

if (!firebase.apps.length){
    firebase.initializeApp(firebaseConfig);
}

export default firebase;
