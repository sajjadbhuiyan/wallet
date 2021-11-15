import { createUserWithEmailAndPassword, getAuth, GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth";
import { useEffect, useState } from "react";
import initializeAuthentication from "../componets/Firebase/Firebase.init";
initializeAuthentication();

const useFirebase = () => {

    const [user,setUser] = useState({});
    const [authError, setAuthError] = useState('');

    const auth = getAuth();
    const signInUsingGoogle = () =>{
        const googleProvider = new GoogleAuthProvider();
        return signInWithPopup(auth, googleProvider)
        
    }

    useEffect(() =>{
        const unsubscribed = onAuthStateChanged(auth, user =>{
            if(user){
                setUser(user);
            }
            else{
                setUser({})
            }
        })
        return () => unsubscribed;
    },[])

    


    // user registration
    const handleRegistration = (email, password) =>{
        // console.log(email, password)
        // e.preventDefault();

        createUserWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
            setAuthError('');
          })
          .catch((error) => {
            setAuthError(error.message);
          });

    }


    //login system


    const handleLogin = (email, password) => {
        signInWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
            setAuthError('');
          })
          .catch((error) => {
            setAuthError(error.message);
          });

    }


    const logOut = () => {
        signOut(auth)
        .then(() =>{ });
    }

    

    return{
        user,
        handleRegistration,
        handleLogin,
        signInUsingGoogle,
        logOut,
        authError
    };
};

export default useFirebase;