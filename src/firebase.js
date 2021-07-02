import firebase from "firebase/app"
import "firebase/auth"

export const auth = firebase.initializeApp({
  apiKey: "AIzaSyBMZ9a-V3qlQ87tZeiMlwRRhPVt44JanJc",
  authDomain: "firechat-ab859.firebaseapp.com",
  projectId: "firechat-ab859",
  storageBucket: "firechat-ab859.appspot.com",
  messagingSenderId: "350322889887",
  appId: "1:350322889887:web:4e17e5b108e59c72423eaa",
}).auth()
