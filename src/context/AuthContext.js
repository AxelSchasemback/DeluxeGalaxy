import { createContext, useContext, useEffect, useState } from "react";
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, onAuthStateChanged, signOut, GoogleAuthProvider, signInWithPopup} from "firebase/auth";
import { auth } from "../Firebase/firebase";

export const authContext = createContext()

export const useAuth = () => useContext(authContext)

export const AuthProvider = ({ children }) => {

    const [user, setUser] = useState(null)

    const signUp = async(email, password) => {
        createUserWithEmailAndPassword(auth, email, password)
    }

    const login = (email, password) => signInWithEmailAndPassword(auth, email, password)

    const logOut = () => signOut(auth)

    const loginWhithgoogle = () => {
        const GoogleProvider = new GoogleAuthProvider()
        return signInWithPopup(auth, GoogleProvider)
    }
    
    useEffect(() => {
        onAuthStateChanged(auth, currentUser => { 
            setUser(currentUser)
        })
    }, [])
    
    console.log(user)

    return (
        <authContext.Provider
            value={{
                signUp,
                login,
                user,
                logOut,
                loginWhithgoogle
            }}>
            {children}
        </authContext.Provider>
    )
}