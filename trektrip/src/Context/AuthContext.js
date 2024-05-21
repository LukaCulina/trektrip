import { createContext, useContext, useEffect, useState } from "react";
import { auth, db } from '../firebase';
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut, onAuthStateChanged } from 'firebase/auth';
import { setDoc, doc } from "firebase/firestore";

const AuthContext = createContext()

export function AuthContextProvider({ children }) {
    const [user, setUser] = useState({});

    useEffect(() => {
        // Simulate fetching user data from an API or local storage
        const fetchUser = async () => {
          try {
            const response = await fetch('/api/auth/user'); // Endpoint to get authenticated user info
            const data = await response.json();
            setUser(data);
          } catch (error) {
            console.error('Error fetching user:', error);
          }
        };
    
        fetchUser();
      }, []);

    async function signUp(email, password, displayName) {
        const userLogin = await createUserWithEmailAndPassword(auth, email, password);
        const user = userLogin.user;
        user.displayName = displayName;
        setDoc(doc(db, 'users', email), {
            Favorites: []
        })
    }
    function login(email, password) {
        return signInWithEmailAndPassword(auth, email, password);
    }

    function logout() {
        return signOut(auth);
    }

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
            setUser(currentUser);
        });
        return () => {
            unsubscribe();
        };
    });

    return (
        <AuthContext.Provider value={{ signUp, login, logout, user }}>
            {children}
        </AuthContext.Provider>
    );
}

export function UserAuth() {
  return useContext(AuthContext);
}

