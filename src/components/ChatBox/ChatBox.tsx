import styled from "styled-components";
import Message from "./Message";
import Masker from "./Masker";
import ChatInput from "./ChatInput";
import { useContext, useEffect, useState } from "react";
import { globalContextTypes, GlobalContext, db } from "../../App";
import {
  onSnapshot,
  collection,
  query,
  orderBy,
  getDocs,
  where,
} from "firebase/firestore";
const ChatBoxRoot = styled.div`
  display: flex;
  height: 95%;
  width: 65%;
  background: transparent;
  border: 0.1em solid rgba(255, 255, 255, 0.5);
  flex-direction: column;
  align-items: center;
`;

const ChatHeader = styled.div`
  display: flex;
  height: 3em;
  align-items: center;
`;

const ChatDisplay = styled.div`
  display: flex;
  height: 45em;
  width: 95%;
  border: 0.1em solid rgba(255, 255, 255, 0.5);
  margin: 1em 0 1em 0;
  background: rgba(255, 255, 255, 0.141);
  overflow-y: auto;
  flex-direction: column;
`;

type MessageType = {
  isUser: boolean;
  message: string;
};
function ChatBox() {
  const { maskerDisplay, user, currentChat }: globalContextTypes =
    useContext(GlobalContext);
  const [messages, setMessages] = useState<MessageType[]>([]);

  useEffect(() => {
    const q = query(collection(db, "messages"), orderBy("createdAt"));
    const unsubscribe = onSnapshot(q, (snapshot) => {
      const updatedChats: MessageType[] = [];
      snapshot.forEach((doc) => {
        if (doc.data().chatUid === currentChat?.uid) {
          if (doc.data().userUid === user?.uid) {
            //important to make sure this matches the fields on the console
            updatedChats.push({ isUser: true, message: doc.data().text });
          } else {
            updatedChats.push({ isUser: false, message: doc.data().text });
          }
        }
      });
      setMessages(updatedChats);
    });

    // Cleanup the subscription
    return () => unsubscribe();
  }, [currentChat]);

  let OppUserID = currentChat?.users[0];

  if (maskerDisplay) {
    return <Masker />;
  } else {
    if (currentChat?.users[0] === user?.uid) {
      OppUserID = currentChat?.users[1];
    }

    const usersCollection = collection(db, "users");
    const userQuery = query(usersCollection, where("uid", "==", OppUserID));
    let OppUserName = "";
    getDocs(userQuery)
      .then((querySnapshot) => {
        if (!querySnapshot.empty) {
          const userDoc = querySnapshot.docs[0];
          const displayName = userDoc.data().displayName as string;
          OppUserName = displayName;
        } else {
          console.log("User not found");
        }
      })
      .catch((error) => {
        console.error("Error retrieving user:", error);
      });

    return (
      <ChatBoxRoot>
        <ChatHeader>{"Chatting With User " + OppUserName}</ChatHeader>
        <ChatDisplay>
          {messages.map((data) => {
            return <Message isUser={data.isUser} message={data.message} />;
          })}
        </ChatDisplay>
        <ChatInput />
      </ChatBoxRoot>
    );
  }
}

export default ChatBox;
