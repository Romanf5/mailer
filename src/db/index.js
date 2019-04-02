import firebase from 'firebase/app';
import 'firebase/database';
import 'firebase/auth';
import 'firebase/firestore';

import {FirebaseConfig} from './firebase-keys';

firebase.initializeApp(FirebaseConfig);

const db = firebase.firestore();

export const authRef = firebase.auth();
export const provider = new firebase.auth.GoogleAuthProvider();
export const getCollection = collection => db.collection(collection);
