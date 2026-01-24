import React, { useEffect, useState } from "react";
import AuthContext from "./AuthContext";
import {
  createUserWithEmailAndPassword,
  GoogleAuthProvider,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
  updateProfile,
} from "firebase/auth";
import auth from "../firebase/firebase.init";
import useAxios from "../hooks/useAxios";

const googleProvider = new GoogleAuthProvider();

const AuthProvider = ({ children }) => {
  const [loading, setLoading] = useState(true);
  const [user, setUser] = useState(null);
  const axios = useAxios();
  const createUser = async (email, password) => {
    try {
      setLoading(true);
      return await createUserWithEmailAndPassword(auth, email, password);
    } finally {
      setLoading(false);
    }
  };

  const updateUser = (name, photoURL) => {
    return updateProfile(auth.currentUser, {
      displayName: name,
      photoURL: photoURL,
    });
  };

  const loginUser = async (email, password) => {
    try {
      setLoading(true);
      return await signInWithEmailAndPassword(auth, email, password);
    } finally {
      setLoading(false);
    }
  };

  const googleLogin = () => {
    return signInWithPopup(auth, googleProvider);
  };

  const logoutUser = async () => {
    return signOut(auth).then(() => {
      setUser(null);
      setLoading(false);
    });
  };

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      if (currentUser) {
        setUser(currentUser);
        if (currentUser) {
          const loggedUser = { email: currentUser.email };
          axios.post("/getToken", loggedUser).then((data) => {
            localStorage.setItem("token", data.data.token);
          });
        }
      } else {
        localStorage.removeItem("token");
      }
      setLoading(false);
    });

    return () => {
      unsubscribe();
    };
  }, [axios]);

  const authInfo = {
    createUser,
    updateUser,
    loginUser,
    googleLogin,
    user,
    loading,
    logoutUser,
  };

  return <AuthContext value={authInfo}>{children}</AuthContext>;
};

export default AuthProvider;
