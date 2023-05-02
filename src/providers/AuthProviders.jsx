import React, { createContext, useEffect, useState } from 'react';
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, onAuthStateChanged } from "firebase/auth";
import app from '../components/config/firebase';
export const AuthContext = createContext();

const AuthProviders = ({children}) => {

    const [user,setUser]=useState(null);


    const auth = getAuth(app);

    const creatUserWithEP=(email,password)=>{
        return createUserWithEmailAndPassword(auth,email,password);
    }

    const signInWithEp=(email,password)=>{
        return signInWithEmailAndPassword(auth,email,password);
    }

    useEffect(()=>{
     const unSubscribe=onAuthStateChanged(auth, (loogedUser) => {
        setUser(loogedUser);
    });

        return ()=>{
            unSubscribe();
        }
    },[])


    const shareValue = {
        creatUserWithEP,signInWithEp,user
      };
    return (
        <div>
             <AuthContext.Provider value={shareValue}>{children}</AuthContext.Provider>
        </div>
    );
};

export default AuthProviders;