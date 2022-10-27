import React, { createContext, useEffect, useState } from 'react';
import { createUserWithEmailAndPassword, getAuth, GithubAuthProvider, GoogleAuthProvider, onAuthStateChanged, sendPasswordResetEmail, signInWithEmailAndPassword, signInWithPopup, signOut, updateEmail, updatePassword, updateProfile } from 'firebase/auth';
import app from '../firebase/firebase.init';


export const AuthContext = createContext();

const auth = getAuth(app);

const AuthContextComp = ({ children }) => {

  const [user, setUser] = useState({});
  const [userLoading, setUserLoading] = useState(true);

  const googleProvider = new GoogleAuthProvider();
  const githubProvider = new GithubAuthProvider();

  const userLogin = (email, password) => {
    setUserLoading(true);
    return signInWithEmailAndPassword(auth, email, password);
  }

  const userSocialLogin = (provider) => {
    setUserLoading(true);

    if (provider === 'google') {
      return signInWithPopup(auth, googleProvider);
    }
    else if (provider === 'github') {
      return signInWithPopup(auth, githubProvider);
    }

    return false;
  }

  const userRegister = (email, password) => {
    setUserLoading(true);
    return createUserWithEmailAndPassword(auth, email, password);
  }

  const userLogout = () => {
    return signOut(auth);
  }

  const updateUserProfile = arg => {
    return updateProfile(auth.currentUser, arg)
  }

  const updateUserEmail = email => {
    return updateEmail(auth.currentUser, email);
  }

  const userPasswordResetEmail = email => {
    return sendPasswordResetEmail(auth, email);
  }

  const updateUserPassword = pass => {
    return updatePassword(auth.currentUser, pass);
  }

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
      setUserLoading(false);
    })

    return () => {
      unsubscribe();
    }
  }, []);



  const authInfo = {
    user,
    userLoading,
    userLogin,
    userRegister,
    userLogout,
    updateUserProfile,
    updateUserEmail,
    updateUserPassword,
    userPasswordResetEmail,
    userSocialLogin
  }

  return (
    <AuthContext.Provider value={authInfo}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthContextComp;