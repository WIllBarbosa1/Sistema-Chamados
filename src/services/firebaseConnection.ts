import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

interface IFireConfig {
    apiKey: string;
    authDomain: string;
    projectId: string;
    storageBucket: string;
    messagingSenderId: string;
    appId: string;
    measurementId: string;
}

let firebaseConfig: IFireConfig = {

}

if (!firebase.apps.length) {
    firebase.initializeApp(firebaseConfig);
}

export default firebase;
