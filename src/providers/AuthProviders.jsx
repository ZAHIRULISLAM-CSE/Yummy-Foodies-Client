import React, { createContext, useEffect, useState } from "react";
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  onAuthStateChanged,
  signOut,
  signInWithPopup,
} from "firebase/auth";
import app from "../components/config/firebase";
import { GoogleAuthProvider } from "firebase/auth";
import { GithubAuthProvider } from "firebase/auth";

export const AuthContext = createContext();

const AuthProviders = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading,setLoding]=useState(true);

  //setting up the provider
  const provider = new GoogleAuthProvider();
  const gitProvider = new GithubAuthProvider();


  const auth = getAuth(app);

  //function for sign up with email and pass
  const creatUserWithEP = (email, password) => {
    return createUserWithEmailAndPassword(auth, email, password);
  };

  //function for sign in with email and pass
  const signInWithEp = (email, password) => {
    return signInWithEmailAndPassword(auth, email, password);
  };


  const logOut = () => {
    signOut(auth)
      .then(() => {})
      .catch((error) => {});
  };
  useEffect(() => {
    const unSubscribe = onAuthStateChanged(auth, (loogedUser) => {
      setUser(loogedUser);
      setLoding(false);
    });

    return () => {
      unSubscribe();
    };
  }, []);

  //function for sign in with google

  const signUpWithGoogle = () => {
       return signInWithPopup(auth, provider)    
  };

    //function for sign in with github

  const signUpWithGit = () => {
    return signInWithPopup(auth, gitProvider)    
};



  const shareValue = {
    creatUserWithEP,
    signInWithEp,
    user,
    logOut,
    setUser,
    signUpWithGoogle,
    signUpWithGit,
    loading
  };
  return (
    <div>
      <AuthContext.Provider value={shareValue}>{children}</AuthContext.Provider>
    </div>
  );
};

export default AuthProviders;
