import { initializeApp } from "firebase/app";
import firebaseConfig from "../Firebase/Firebaseconfig/Firebaseconfig";

const FirebaseInitial=()=>{
    initializeApp(firebaseConfig);
}


export default FirebaseInitial;