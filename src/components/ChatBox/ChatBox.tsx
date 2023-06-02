import styled from "styled-components";
import Message from "./Message";
import Masker from "./Masker";
import ChatInput from "./ChatInput";
import { useContext, useEffect, useState } from "react";
import { globalContextTypes, GlobalContext, db } from "../../App";
import "firebase/firestore";
import { onSnapshot, collection, query, orderBy } from "firebase/firestore";
const ChatBoxRoot = styled.div`
  display: flex;
  height: 95%;
  width: 65%;
  background: transparent;
  border: 0.1em solid rgba(255, 255, 255, 0.5);
  flex-direction: column;
  align-items: center;
`;

const ChatDisplay = styled.div`
  display: flex;
  height: 48em;
  width: 95%;
  border: 0.1em solid rgba(255, 255, 255, 0.5);
  margin: 1em 0 1em 0;
  background: rgba(255, 255, 255, 0.141);
  overflow-y: auto;
  flex-direction: column;
`;

type Message = {
  isUser: boolean;
  message: string;
};
function ChatBox() {
  const { maskerDisplay, user }: globalContextTypes = useContext(GlobalContext);
  const [messages, setMessages] = useState<Message[]>([]);

  useEffect(() => {

    const q = query(collection(db, 'messages'), orderBy('createdAt'));
    const unsubscribe = onSnapshot(q, (snapshot) => {
      const updatedChats: Message[] = [];
      snapshot.forEach((doc) => {
        if (doc.data().userUid === user?.uid) {
          //important to make sure this matches the fields on the console
          updatedChats.push({ isUser: true, message: doc.data().text });
        }else{
          updatedChats.push({ isUser: false, message: doc.data().text});
        }
      });
      setMessages(updatedChats);
    });

    // Cleanup the subscription
    return () => unsubscribe();
  }, []);

  if (maskerDisplay) {
    return <Masker />;
  } else
    return (
      <ChatBoxRoot>
        <ChatDisplay>
          {messages.map((data) => {
            return <Message isUser={data.isUser} message={data.message} />;
          })}
        </ChatDisplay>
        <ChatInput />
      </ChatBoxRoot>
    );
}

export default ChatBox;
