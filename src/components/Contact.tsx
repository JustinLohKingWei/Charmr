import styled from "styled-components";
import { MdFace } from "react-icons/md";
import { collection, query, where, getDocs } from "firebase/firestore";
import { useContext } from "react";
import { globalContextTypes, GlobalContext, db } from "../App";
import { Chat } from "../data/ChatData";

const ContactRoot = styled.div`
  display: flex;
  height: 6em;
  width: 90%;
  border: 0.1em solid rgba(255, 255, 255, 0.5);
  align-items: center;
  &:hover {
    background: rgba(255, 255, 255, 0.08);
  }
`;

const ContactImage = styled.div`
  display: flex;
  height: 4em;
  width: 4em;
  border: 0.1em solid rgba(255, 255, 255, 0.5);
  margin: 0.5em;
  justify-content: center;
  align-items: center;
`;

const ContactInfo = styled.div`
  display: flex;
  height: 4em;
  width: 12em;
  margin: 0.5em;
  justify-content: center;
  align-items: center;
`;

type ContactProps = {
  name: string;
};

function Contact({ name }: ContactProps) {
  const { user, setcurrentChat, setmaskerDisplay }: globalContextTypes =
    useContext(GlobalContext);
  const fetchChat = async () => {
    try {
      const chatsRef = collection(db, "chats");
      const q = query(chatsRef, where("users", "array-contains", user?.uid));
      const querySnapshot = await getDocs(q);

      if (!querySnapshot.empty) {
        let chatData = null;
        querySnapshot.forEach((doc) => {
          const chatIterator = doc.data() as Chat;
          if (chatIterator.users.includes(name)) {
            chatData = chatIterator;
          }
        });
        console.log("Chat data is");
        console.log(chatData);
        setcurrentChat(chatData);
      } else {
        setcurrentChat(null);
      }
    } catch (error: any) {
      console.error("Error fetching chat:", error);
    }
    setmaskerDisplay(false);
  };

  return (
    <ContactRoot
      onClick={async () => {
        await fetchChat();
      }}
    >
      <ContactImage>
        <MdFace size="2.5em" />
      </ContactImage>
      <ContactInfo> {name}</ContactInfo>
    </ContactRoot>
  );
}

export default Contact;
