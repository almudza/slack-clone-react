// Initialize Firebase
import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/database';
import 'firebase/storage';

var config = {
  apiKey: 'AIzaSyAlLcK27HbuhdgOiSo1jN7_nwbZaHbDMVQ',
  authDomain: 'slack-clone-cdb16.firebaseapp.com',
  databaseURL: 'https://slack-clone-cdb16.firebaseio.com',
  projectId: 'slack-clone-cdb16',
  storageBucket: 'slack-clone-cdb16.appspot.com',
  messagingSenderId: '922664557522'
};
firebase.initializeApp(config);

export default firebase;
