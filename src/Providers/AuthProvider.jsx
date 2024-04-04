import React, { createContext, useEffect, useState } from 'react';
import app from '../Firebase/Firebase';
import { getAuth, createUserWithEmailAndPassword, onAuthStateChanged, signOut, signInWithEmailAndPassword } from 'firebase/auth';



export const AuthContext = createContext(null)

const auth = getAuth(app)

const AuthProvider = ({ children }) => {

    const [user, setuser] = useState(null)


    const createUser = (email, password) => {
        return createUserWithEmailAndPassword(auth, email, password)
            .catch((error) => {
                if (error.code === 'auth/email-already-in-use') {

                    console.error('Email is already in use. Please sign in instead.');
                } else {

                    console.error('Error creating user:', error.message);
                }
            });
    }


    const signIn = (email, password) => {
        return signInWithEmailAndPassword(auth, email, password)
    }

    const logOut = () => {
        return signOut(auth)
    }

    useEffect(() => {
        const unSubscribe = onAuthStateChanged(auth, currentUser => {
            console.log("User in the Auth sate ChannelMergerNode", currentUser)
            setuser(currentUser);
        })
        return () => {
            unSubscribe()
        }
    }, [])


    const authInfo = {
        user,
        createUser,
        signIn,
        logOut,
    }


    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;