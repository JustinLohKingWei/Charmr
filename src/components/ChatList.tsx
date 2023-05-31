import styled from "styled-components";
import Contact from "./Contact";
import { testContactList } from "../data/ContactData";

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

function ChatList() {
  return (
    <ChatListRoot>
      {testContactList.map((data) => {
        return <Contact name={data.name} />;
      })}
    </ChatListRoot>
  );
}

export default ChatList;
