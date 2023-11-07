import firebase from 'firebase';

const firebaseConfig = {
    apiKey: "AIzaSyB7QcFU94Zbp0_CcR8gKZZ7czCNWH_Akr0",
    authDomain: "app-frequencia-escolar-7b58f.firebaseapp.com",
    databaseURL: "https://app-frequencia-escolar-7b58f-default-rtdb.firebaseio.com",
    projectId: "app-frequencia-escolar-7b58f",
    storageBucket: "app-frequencia-escolar-7b58f.appspot.com",
    messagingSenderId: "248627989912",
    appId: "1:248627989912:web:876d737348e2aece78efed"
};

firebase.initializeApp(firebaseConfig);

export default firebase.database();