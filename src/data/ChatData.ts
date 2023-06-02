import { addDoc, collection, getDocs } from "firebase/firestore";
import { GlobalContext, db, globalContextTypes } from "../App";
import { useContext } from "react";

export type Chat = {
  users: string[];
};

export const SearchForMatch = async function () {
  const { user }: globalContextTypes = useContext(GlobalContext);

  const usersSnapshot = await getDocs(collection(db, "users"));

  const userIds = usersSnapshot.docs.map((doc) => doc.id);

  const randomIndex = Math.floor(Math.random() * userIds.length);

  let selectedUserId = userIds[randomIndex];

  while (selectedUserId === user?.uid) {
    const randomIndex = Math.floor(Math.random() * userIds.length);
    selectedUserId = userIds[randomIndex];
    console.log("selected:" + selectedUserId);
  }

  const users = [selectedUserId, user?.uid];

  await addDoc(collection(db, "chats"), {
    users: users,
  });
};
