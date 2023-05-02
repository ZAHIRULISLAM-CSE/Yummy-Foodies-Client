import React, { createContext } from 'react';
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";
import app from '../components/config/firebase';
export const AuthContext = createContext();

const AuthProviders = ({children}) => {
    const auth = getAuth(app);

    const creatUserWithEP=(email,password)=>{
        return createUserWithEmailAndPassword(auth,email,password);
    }

    const signInWithEp=(email,password)=>{
        return signInWithEmailAndPassword(auth,email,password);
    }




    const shareValue = {
        creatUserWithEP,signInWithEp,
      };
    return (
        <div>
             <AuthContext.Provider value={shareValue}>{children}</AuthContext.Provider>
        </div>
    );
};

export default AuthProviders;