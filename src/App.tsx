import { initializeApp } from "firebase/app";
import "firebase/firestore";
import {
  getAuth,
  signInWithPopup,
  GoogleAuthProvider,
  User,
  UserCredential,
  signOut,
} from "firebase/auth";

import Login from "./pages/Login";
import { useState } from "react";
import Home from "./pages/Home";

const firebaseapp = initializeApp({
  apiKey: "AIzaSyB00osssVi--HNQGI8e6hhA2CE0o8fj9xs",
  authDomain: "charmr-5340b.firebaseapp.com",
  projectId: "charmr-5340b",
  storageBucket: "charmr-5340b.appspot.com",
  messagingSenderId: "803361647764",
  appId: "1:803361647764:web:2e0db27cb4fe89cd77d881",
  measurementId: "G-67X7V1ZRJF",
});
const auth = getAuth(firebaseapp);
const provider = new GoogleAuthProvider();

function App() {
  const [user, setUser] = useState<User | null>(null);

  const handleSignIn = () => {
    signInWithPopup(auth, provider)
      .then((result: UserCredential) => {
        setUser(result.user);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const handleSignOut = () => {
    signOut(auth)
      .then(() => {
        setUser(null);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return <>{user ? <Home handleSignOut={handleSignOut} /> : <Login handleSignIn={handleSignIn} />}</>;
}

export default App;
