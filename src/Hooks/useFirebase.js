import { useEffect, useState } from "react";
import InitializeApp from "../Pages/Authentication/Firebase/InitializeApp";
import { getAuth, createUserWithEmailAndPassword,onAuthStateChanged, signOut,signInWithEmailAndPassword  } from "firebase/auth";

// Initialize Firebase App
InitializeApp();
const useFirebase = () =>{
    const [user, setUser] = useState({});
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState('');

    const auth = getAuth();
    // register function
    const register =(email, password)=>{
      setIsLoading(true)
        createUserWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
          // Signed in 
          const user = userCredential.user;
          // ...
        })
        .catch((error) => {
          setError(error.message);
        })
        .finally(()=> setIsLoading(false));
    }
    // LogIn User Function
    const loginUser = (email,password,location, history)=>{
      setIsLoading(true)
        signInWithEmailAndPassword(auth, email, password)
         .then((userCredential) => {
           const destination = location?.state?.from || '/';
           history.replace(destination);
         })
         .catch((error) => {
          setError(error.message);
         })
         .finally(()=> setIsLoading(false));
    }

    // On Auth State Changed
    useEffect(()=>{
        const unSubscribe = onAuthStateChanged(auth, (user) => {
            if (user) {
                setUser(user);
            } else {
                setUser({});
            }
            setIsLoading(false)
          });
          return () => unSubscribe;
    },[])

    // LogOut function
    const logOut = ()=>{
      setIsLoading(true)
        signOut(auth).then(() => {
            // Sign-out successful.
          }).catch((error) => {
            // An error happened.
          })
          .finally(()=> setIsLoading(false));
    }
    
    return {
        user,
        isLoading,
        error,
        register,
        logOut,
        loginUser,
    }
}

export default useFirebase;