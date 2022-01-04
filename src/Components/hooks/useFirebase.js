import {
  createUserWithEmailAndPassword,
  getAuth,
  GoogleAuthProvider,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
  updateProfile
} from "firebase/auth";
import { useEffect, useState } from "react";
import initializeFirebase from "../Authentication/Firebase/firebase.init";

initializeFirebase();
const useFirebase = () => {
  const auth = getAuth();
  const googleProvider = new GoogleAuthProvider();
  const [user, setUser] = useState({});
  const [isLoading, setIsLoading] = useState(true);
  const [authError, setAuthError] = useState("");
  // const [admin, setAdmin] = useState(false);

  //create user
  const registerUser = (email, password, name, navigate) => {
    setIsLoading(true);
    createUserWithEmailAndPassword(auth, email, password)
      .then(() => {
        setAuthError("");
        const newUser = { email, displayName: name };
        setUser(newUser);

        //send usename to firebase After creation
        updateProfile(auth.currentUser, {
          displayName: name,
        })
          .then(() => { })
          .catch((error) => {
            setUser(error.message)
          });
        navigate("/");
      })
      .catch((error) => {
        setAuthError(error.message);
      })
      .finally(() => setIsLoading(false));
  };

  //loginn
  const loginUser = (email, password, location, navigate) => {
    setIsLoading(true);
    signInWithEmailAndPassword(auth, email, password)
      .then(result => {
        setUser(result.user)

        const destination = location?.state?.from || "/";
        navigate(destination);
        setAuthError("");
      })
      .catch((error) => {
        setAuthError(error.message);
      })
      .finally(() => setIsLoading(false));
  };

  //observe user state

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        setUser(user);
      } else {
        setUser({});
      }
      setIsLoading(false);
    });
    return () => unsubscribe;
  }, [auth]);

  // logout
  const logOut = () => {
    setIsLoading(true);
    signOut(auth)
      .then(() => {
        // Sign-out successful.
      })
      .catch((error) => {
        // An error happened.
      })
      .finally(() => setIsLoading(false));
  };

  //login with google
  const signinWithGoogle = (location, navigate) => {
    setIsLoading(true);
    signInWithPopup(auth, googleProvider)
      .then((result) => {
        const user = result.user;
        setUser(user);
        // saveUser(user.email, user.displayName, 'PUT')
        setAuthError("");
        const destination = location?.state?.from || "/";
        navigate(destination);
      })
      .catch((error) => {
        setAuthError(error.email);
      })

      .finally(() => setIsLoading(false));
  };
  // const saveUser = (email, displayName, method) => {
  //     const user = { email, displayName };
  //     fetch('http://localhost:5000/users', {
  //         method: method,
  //         headers: {
  //             'content-type': 'application/json'
  //         },
  //         body: JSON.stringify(user)
  //     })
  //         .then()

  // }

  // useEffect(() => {
  //     fetch(`http://localhost:5000/users/${user.email}`)
  //         .then(res => res.json())
  //         .then(data => setAdmin(data.admin))

  // }, [user.email])
  return {
    user,
    registerUser,
    logOut,
    loginUser,
    isLoading,
    signinWithGoogle,
    authError,
  };
};

export default useFirebase;
