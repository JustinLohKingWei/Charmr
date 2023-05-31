import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import {
  getAuth,
  signInWithPopup,
  GoogleAuthProvider,
  User,
  UserCredential,
  signOut,
} from "firebase/auth";

import Login from "./pages/Login";
import { createContext, useState } from "react";
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
export const auth = getAuth(firebaseapp);
export const provider = new GoogleAuthProvider();
export const db = getFirestore(firebaseapp);

export const GlobalContext = createContext<any>(null);

export type globalContextTypes = {
  handleSignOut: () => void;
  navBarOpen: boolean;
  setnavBarOpen: React.Dispatch<React.SetStateAction<boolean>>;
  maskerDisplay: boolean;
  setmaskerDisplay: React.Dispatch<React.SetStateAction<boolean>>;
};

function App() {
  const [user, setUser] = useState<User | null>(null);
  const [navBarOpen, setnavBarOpen] = useState(false);
  const [maskerDisplay, setmaskerDisplay] = useState(true);

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
  const globalContextValues: globalContextTypes = {
    handleSignOut: handleSignOut,
    navBarOpen: navBarOpen,
    setnavBarOpen: setnavBarOpen,
    maskerDisplay:maskerDisplay,
    setmaskerDisplay:setmaskerDisplay,
  };
  return (
    <GlobalContext.Provider value={globalContextValues}>
      {user ? <Home /> : <Login handleSignIn={handleSignIn} />}
    </GlobalContext.Provider>
  );
}

export default App;
