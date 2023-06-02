import { initializeApp } from "firebase/app";
import { doc, getDoc, getFirestore, setDoc } from "firebase/firestore";
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
import Modal from "./components/Modals/Modal";
import { Chat } from "./data/ChatData";

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
  showModal: boolean;
  setShowModal: React.Dispatch<React.SetStateAction<boolean>>;
  currentModal: JSX.Element;
  setCurrentModal: React.Dispatch<React.SetStateAction<JSX.Element>>;
  user: User | null;
  setUser: React.Dispatch<React.SetStateAction<User | null>>;
  currentChat: Chat | null;
  setcurrentChat: React.Dispatch<React.SetStateAction<Chat | null>>;
};

function App() {
  const [user, setUser] = useState<User | null>(null);
  const [navBarOpen, setnavBarOpen] = useState(false);
  const [maskerDisplay, setmaskerDisplay] = useState(true);
  const [showModal, setShowModal] = useState(false);
  const [currentModal, setCurrentModal] = useState(<Modal />);
  const [currentChat, setcurrentChat] = useState<Chat | null>(null);

  const handleAddUser = async (uid: string, displayName?: string) => {
    const userRef = doc(db, "users", uid);
    const userDoc = await getDoc(userRef);

    if (!userDoc.exists()) {
      const userData = {
        uid,
        displayName,
      };

      await setDoc(userRef, userData);
    }
  };

  const handleSignIn = async () => {
    signInWithPopup(auth, provider)
      .then((result: UserCredential) => {
        setUser(result.user);

        const { uid, displayName } = result.user;
        handleAddUser(uid, displayName ?? "No name found");
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
    maskerDisplay: maskerDisplay,
    setmaskerDisplay: setmaskerDisplay,
    showModal,
    setShowModal,
    currentModal,
    setCurrentModal,
    user,
    setUser,
    currentChat,
    setcurrentChat,
  };
  return (
    <GlobalContext.Provider value={globalContextValues}>
      {user ? (
        <>
          {showModal ? currentModal : <></>}
          <Home></Home>
        </>
      ) : (
        <Login handleSignIn={handleSignIn} />
      )}
    </GlobalContext.Provider>
  );
}

export default App;
