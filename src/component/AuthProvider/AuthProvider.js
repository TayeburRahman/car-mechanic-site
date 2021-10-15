import React, { createContext } from 'react';
import useFirebass from '../../Hooks/useFirebass';
 
export const AuthContext = createContext();
const AuthProvider = (props) => {
    const { children } = props;    
    const allContext = useFirebass();
    return (
        <AuthContext.Provider value={allContext}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;