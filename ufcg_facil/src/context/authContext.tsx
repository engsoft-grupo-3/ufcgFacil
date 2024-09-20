import { createContext, ReactNode, useEffect, useState } from "react";


interface AuthContextType {
    setCookieAuth: (cookie: string) => void;
    cookie: string;
}

export const AuthContext = createContext({} as AuthContextType)

interface AuthContextProviderProps {
    children: ReactNode
}

export function AuthContextProvider({ children }: AuthContextProviderProps) {

    const [cookie, setCookie] = useState<string>("");

    function setCookieAuth(cookie: string) {
        setCookie(cookie);
    }


    return (
        <AuthContext.Provider
            value={{
                setCookieAuth,
                cookie
            }}
        >
            {children}
        </AuthContext.Provider>
    )
} 