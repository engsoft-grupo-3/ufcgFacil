import { createContext, ReactNode, useEffect, useState } from "react";


interface AuthContextType {
    setCookieAuth: (cookie: string) => void;
    cookie: string;
    matricula: string;
    setMatriculaContext: (matricula: string) => void;
}

export const AuthContext = createContext({} as AuthContextType)

interface AuthContextProviderProps {
    children: ReactNode
}

export function AuthContextProvider({ children }: AuthContextProviderProps) {

    const [cookie, setCookie] = useState<string>("");
    const [matricula, setMatricula] = useState<string>("");

    function setCookieAuth(cookie: string) {
        setCookie(cookie);
    }

    function setMatriculaContext(matricula: string) {
        setMatricula(matricula)
    }


    return (
        <AuthContext.Provider
            value={{
                setCookieAuth,
                cookie,
                matricula,
                setMatriculaContext
            }}
        >
            {children}
        </AuthContext.Provider>
    )
} 