import { useContext, useState } from "react";
import styled from "styled-components";
import { globalContextTypes, GlobalContext, db } from "../../App";
import { Chat } from "../../data/ChatData";
import { getDocs, collection, addDoc, query, where } from "firebase/firestore";

const MaskerRoot = styled.div`
  display: flex;
  height: 95%;
  width: 65%;
  background: rgba(255, 255, 255, 0.178);
  border: 0.1em solid rgba(255, 255, 255, 0.611);
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const MaskerButton = styled.button`
  display: flex;
  font-size: 1.5em;
  min-width: 13em;
  min-height: 2em;
  border-radius: 1px;
  justify-content: space-evenly;
  align-items: center;
  background: transparent;
  border: 0.1em solid rgba(255, 255, 255, 0.5);
  color: rgb(255, 255, 255);
  &:hover {
    opacity: 0.8;
    background: rgba(255, 255, 255, 0.08);
  }
`;

function Masker() {
  const { setmaskerDisplay, user, setcurrentChat }: globalContextTypes =
    useContext(GlobalContext);
  const [loading, setloading] = useState(false);

  const handleChatSearch = async () => {
    setloading(true);
    try {
      const usersSnapshot = await getDocs(collection(db, "users"));

      // Get an array of user IDs
      const userIds = usersSnapshot.docs.map((doc) => doc.id);

      const randomIndex = Math.floor(Math.random() * userIds.length);

      // Get the randomly selected user ID
      let selectedUserId = userIds[randomIndex];

      while (selectedUserId === user?.uid) {
        const anotherRandomIndex = Math.floor(Math.random() * userIds.length);
        selectedUserId = userIds[anotherRandomIndex];
      }
      console.log("Final ID is" + selectedUserId);

      const users: string[] = [selectedUserId, user?.uid ?? "someone"];

      const isDuplicate = async (users: string[]) => {
        const chatCollectionRef = collection(db, "chats"); // Replace 'chats' with your collection name

        // Create a query to check if a chat with the same set of users already exists
        const q = query(chatCollectionRef, where("users", "==", users));

        const snapshot = await getDocs(q);

        return !snapshot.empty;
      };

      if (!(await isDuplicate(users))) {
        const chatRef = await addDoc(collection(db, "chats"), {
          users: users,
        });

        const newChat: Chat = {
          users: users,
          uid: chatRef.id,
        };

        setcurrentChat(newChat);
      } else {
        alert("Chat Already Exists, Cannot Create chat with this user");
      }
    } catch (error) {
      console.log(error);
    }
    setloading(false);
  };

  return (
    <MaskerRoot>
      {loading ? (
        <>Loading</>
      ) : (
        <MaskerButton
          onClick={() => {
            handleChatSearch();
            setmaskerDisplay(false);
          }}
        >
          Meet Someone New Now!
        </MaskerButton>
      )}
    </MaskerRoot>
  );
}

export default Masker;
