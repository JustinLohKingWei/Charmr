import styled from "styled-components";
import Contact from "./Contact";
import { useContext, useEffect, useState } from "react";
import { globalContextTypes, GlobalContext, db } from "../App";
import { doc, getDoc } from "firebase/firestore";

const ChatListRoot = styled.div`
  display: flex;
  flex-direction: column;
  height: 90%;
  width: 20em;
  background: transparent;
  border: 0.1em solid rgba(255, 255, 255, 0.5);
  padding: 1em 0 1em 0;
  align-items: center;
`;

const NewChat = styled.div`
  display: flex;
  height: 6em;
  width: 90%;
  border: 0.1em solid rgba(255, 255, 255, 0.5);
  background: rgba(255, 255, 255, 0.426);
  justify-content: center;
  align-items: center;
  &:hover {
    background: rgba(255, 255, 255, 0.08);
  }
`;

function ChatList() {
  const { user, setmaskerDisplay }: globalContextTypes =
    useContext(GlobalContext);

  //Finds contact List
  const [contactList, setContactList] = useState<string[]>([]);

  useEffect(() => {
    const fetchContactList = async () => {
      try {
        const userDocRef = doc(db, "users", user?.uid ?? "UserID");
        const userDocSnapshot = await getDoc(userDocRef);

        if (userDocSnapshot.exists()) {
          const userData = userDocSnapshot.data();
          setContactList(userData.contactList);
        }
      } catch (error) {
        console.error("Error fetching contact list:", error);
      }
    };

    fetchContactList();
  }, [contactList]);

  //Finds Chat according to given UID

  return (
    <ChatListRoot>
      <NewChat
        onClick={() => {
          setmaskerDisplay(true);
        }}
      >
        {" "}
        Meet someone new !
      </NewChat>
      {contactList.map((data) => {
        return <Contact name={data} />;
      })}
    </ChatListRoot>
  );
}

export default ChatList;
