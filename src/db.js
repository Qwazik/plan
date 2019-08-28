import Vue from 'vue';
import firebase from "firebase/app";
import "firebase/storage";
import "firebase/firestore";
import { firestorePlugin } from "vuefire";

Vue.use(firestorePlugin);

const firebaseConfig = {
    apiKey: "AIzaSyAd28N52A5Nz4oRzjxml3y-IugvZVWuXZE",
    authDomain: "readplan-e52ba.firebaseapp.com",
    databaseURL: "https://readplan-e52ba.firebaseio.com",
    projectId: "readplan-e52ba",
    storageBucket: "",
    messagingSenderId: "920690455577",
    appId: "1:920690455577:web:d43f5e1f53bcf99d"
};

export const db = firebase
    .initializeApp(firebaseConfig)
    .firestore();


export const booksCollection = db.collection('books');