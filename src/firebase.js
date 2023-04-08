import {getAuth} from 'firebase/auth'
import {initializeApp} from 'firebase/app'
import { getFirestore } from 'firebase/firestore'

const firebaseConfig = {
    apiKey: "AIzaSyCZf3Qpf8DKAiECLM5u1kYxGhrGB0b-UeA",
    authDomain: "netflix2-b1e67.firebaseapp.com",
    projectId: "netflix2-b1e67",
    storageBucket: "netflix2-b1e67.appspot.com",
    messagingSenderId: "941378954526",
    appId: "1:941378954526:web:b0e0514163fc1be574150f"
  };

  const firebaseApp =initializeApp(firebaseConfig)
  export const db = getFirestore(firebaseApp)
  const Authenticate =getAuth(firebaseApp)


  export default Authenticate;