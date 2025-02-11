import { jwtDecode } from 'jwt-decode';
import{ createContext, useEffect, useState } from 'react';



export const AuthContext = createContext();

export default function AuthContextProvider({ children }) {
    const [token, setToken] = useState(null);
    const [userId, setUserId] = useState(null);

    useEffect(() => {
        const storedToken = localStorage.getItem('token');

        if (storedToken) {
            setToken(storedToken);
            const decode = jwtDecode(storedToken);
            console.log(decode.id);
            setUserId(decode.id)
            
        }
    }, []);

    return (
        <AuthContext.Provider value={{ token, setToken, userId }}>
            {children}
        </AuthContext.Provider>
    );
}
