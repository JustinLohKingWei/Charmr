import { addDoc, collection, serverTimestamp } from "firebase/firestore";
import { useContext, useRef, useState } from "react";
import styled from "styled-components";
import { GlobalContext, auth, db, globalContextTypes } from "../../App";

const ChatInputRoot = styled.div`
  display: flex;
  height: 3em;
  width: 95%;
  border: 0.1em solid rgba(255, 255, 255, 0.5);
`;

const InputBox = styled.input`
  display: flex;
  height: 100%;
  width: 100%;
  background: rgba(255, 255, 255, 0.141);
  font-size: 1em;
`;

function ChatInput() {
  const { currentChat }: globalContextTypes = useContext(GlobalContext);
  const inputRef = useRef<HTMLInputElement>(null);
  const messageRef = collection(db, "messages");
  const [currentMessage, setCurrentMessage] = useState("");

  const handleSubmit = async () => {
    if (currentMessage === "") return;
    await addDoc(messageRef, {
      text: currentMessage,
      createdAt: serverTimestamp(),
      user: auth.currentUser?.displayName,
      userUid: auth.currentUser?.uid,
      chatUid:currentChat?.uid?? " ",
    });
    setCurrentMessage("");
    if (inputRef.current) {
      inputRef.current.value = "";
    }
  };

  const handleBlur = () => {
    setCurrentMessage("");
    if (inputRef.current) {
      inputRef.current.value = "";
    }
  };

  return (
    <ChatInputRoot>
      <InputBox
        ref={inputRef}
        type="text"
        placeholder="Type Your Message here"
        onChange={(e) => {
          setCurrentMessage(e.target.value);
        }}
        onKeyDown={(e) => {
          if (e.key === "Enter") {
            handleSubmit();
          }
        }}
        onBlur={() => {
          handleBlur();
        }}
      />
    </ChatInputRoot>
  );
}

export default ChatInput;
