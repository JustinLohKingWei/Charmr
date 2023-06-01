import styled from "styled-components";
import Contact from "./Contact";
import { testContactList } from "../data/ContactData";
import { useContext } from "react";
import { globalContextTypes, GlobalContext } from "../App";

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
  justify-content:center;
  align-items: center;
  &:hover {
    background: rgba(255, 255, 255, 0.08);
  }
`;

function ChatList() {
  const { setmaskerDisplay }: globalContextTypes = useContext(GlobalContext);
  return (
    <ChatListRoot>
      <NewChat onClick={()=>{setmaskerDisplay(true)}}> Meet someone new !</NewChat>
      {testContactList.map((data) => {
        return <Contact name={data.name} />;
      })}
    </ChatListRoot>
  );
}

export default ChatList;
