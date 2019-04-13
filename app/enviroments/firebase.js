import firebase from '@firebase/app';
import '@firebase/auth';
import '@firebase/database';

const config = {
    apiKey: "AIzaSyAm1gVLtKalPGqaILcdsotFqQmyv7hzHJI",
    authDomain: "together-learn.firebaseapp.com",
    databaseURL: "https://together-learn.firebaseio.com",
    projectId: "together-learn",
    storageBucket: "together-learn.appspot.com",
    messagingSenderId: "981522179185"
};

let instance = null;

class FirebaseService {
  constructor() {
    if (!instance) {
      this.app = firebase.initializeApp(config);
      instance = this;
    }
    return instance;
  }
}

const firebaseService = new FirebaseService().app;
export default firebaseService;

firebase.auth().setPersistence(firebase.auth.Auth.Persistence.LOCAL)
  .then(function() {
    // Existing and future Auth states are now persisted in the current
    // session only. Closing the window would clear any existing state even
    // if a user forgets to sign out.
    // ...
    // New sign-in will be persisted with session persistence.
    return firebase.auth().signInWithEmailAndPassword(email, password);
  })
  .catch(function(error) {
    // Handle Errors here.
    var errorCode = error.code;
    var errorMessage = error.message;
  });
