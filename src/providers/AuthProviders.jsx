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

export const AuthContext = createContext();

const AuthProviders = ({ children }) => {
  const [user, setUser] = useState(null);
  const provider = new GoogleAuthProvider();

  const auth = getAuth(app);

  const creatUserWithEP = (email, password) => {
    return createUserWithEmailAndPassword(auth, email, password);
  };

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
    });

    return () => {
      unSubscribe();
    };
  }, []);

  const signUpWithGoogle = () => {
       return signInWithPopup(auth, provider)    
  };

  const shareValue = {
    creatUserWithEP,
    signInWithEp,
    user,
    logOut,
    setUser,
    signUpWithGoogle,
    
  };
  return (
    <div>
      <AuthContext.Provider value={shareValue}>{children}</AuthContext.Provider>
    </div>
  );
};

export default AuthProviders;
