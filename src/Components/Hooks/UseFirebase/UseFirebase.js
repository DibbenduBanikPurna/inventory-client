import { GoogleAuthProvider,getAuth,signInWithPopup,onAuthStateChanged, signOut,createUserWithEmailAndPassword,signInWithEmailAndPassword } from "firebase/auth";
import FirebaseInitial from "../../FirebaseInitial/FirebaseInitial";
import {useEffect, useState} from 'react'
FirebaseInitial()

const UseFirebase=()=>{
    const [user,setUser]=useState({})

    const auth = getAuth();
    const googleSignIn=()=>{
        const provider = new GoogleAuthProvider();
        signInWithPopup(auth, provider)
  .then((result) => {
    
    const user = result.user;
    setUser(user);

  }).catch((error) => {
   console.log(error.message);
  });
    }
    const logOut=()=>{
        signOut(auth).then(() => {
            setUser({})
          }).catch((error) => {
          console.log(error.message)
          });
    }

    const signUp=(email,password)=>{
        createUserWithEmailAndPassword(auth, email, password)
  .then((userCredential) => {
    
    const user = userCredential.user;
    setUser(user)
  })
  .catch((error) => {
   console.log(error.message)
  });
    }
    const signIn=(email,password)=>{
        signInWithEmailAndPassword(auth, email, password)
  .then((userCredential) => {
   
    const user = userCredential.user;
    console.log(user)
  })
  .catch((error) => {
    console.log(error.message)
  });
    }

    useEffect(()=>{
        onAuthStateChanged(auth, (user) => {
            if (user) {
            
            
              setUser(user)
            } else {
              setUser({})
            }
          });
    },[])
    return {
        googleSignIn,
        logOut,
        signUp,
        signIn,
        user,

    }
}




export default UseFirebase;