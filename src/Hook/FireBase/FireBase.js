import { useState } from "react";
import {
  getAuth,
  signInWithPopup,
  GoogleAuthProvider,
  onAuthStateChanged,
  signOut,
} from "firebase/auth";
import { useEffect } from "react";
import fireBaseInitFun from "../../fireBase/fireBaseInit";

fireBaseInitFun();

const useFireBase = () => {
const [loading,setLoading]=useState(true);
  const [user, setUser] = useState({});
  const auth = getAuth();
  const googleProvider = new GoogleAuthProvider();

  // Google SingIn

  const singInGoogle = () => {
    setLoading(true);
    return signInWithPopup(auth, googleProvider);
    // .then(result=>{
    //     console.log(result);
    // })
  };

  // User Profile



  const logOut = () => {
    signOut(auth).then(() => {});
    window.location.reload();

  };

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        setUser(user);
      }
    });
  }, []);


  const saveUser = (email, dispalyName)=>{

  }

  return {
    user,
    singInGoogle,
    logOut,
    loading
  };
};

export default useFireBase;
