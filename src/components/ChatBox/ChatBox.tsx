import styled from "styled-components";

const ChatBoxRoot = styled.div`
  display: flex;
  height: 90%;
  width: 60%;
  background: transparent;
  border: 0.1em solid rgba(255, 255, 255, 0.5);
`;

function ChatBox() {
  return <ChatBoxRoot>Chatbox</ChatBoxRoot>;
}

export default ChatBox