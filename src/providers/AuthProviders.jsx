import React, { createContext } from 'react';
export const AuthContext = createContext();

const AuthProviders = ({children}) => {
 
    const x=5;
    const shareValue = {
        x
      };
    return (
        <div>
             <AuthContext.Provider value={shareValue}>{children}</AuthContext.Provider>
        </div>
    );
};

export default AuthProviders;