import styled from "styled-components";
import Message from "./Message";
import { realTestConvo } from "../../data/MessageData";
import Masker from "./Masker";
import ChatInput from "./ChatInput";
import { useContext } from "react";
import { globalContextTypes, GlobalContext } from "../../App";
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

function ChatBox() {
  const { maskerDisplay }: globalContextTypes = useContext(GlobalContext);
  if (maskerDisplay) {
    return <Masker />;
  } else
    return (
      <ChatBoxRoot>
        <ChatDisplay>
          {realTestConvo.map((data) => {
            return <Message isUser={data.isUser} message={data.message} />;
          })}
        </ChatDisplay>
        <ChatInput />
      </ChatBoxRoot>
    );
}

export default ChatBox;
