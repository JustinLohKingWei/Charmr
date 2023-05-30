import styled from "styled-components";

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
`;

const ChatInput = styled.div`
  display: flex;
  height: 3em;
  width: 95%;
  border: 0.1em solid rgba(255, 255, 255, 0.5);
`;

const InputBox = styled.input`
  display:flex;
  height:100%;
  width:100%;
  background: rgba(255, 255, 255, 0.141);
  font-size: 1em;
`

function ChatBox() {
  return (
    <ChatBoxRoot>
      <ChatDisplay />
      <ChatInput>
        <InputBox/>
      </ChatInput>
    </ChatBoxRoot>
  );
}

export default ChatBox;