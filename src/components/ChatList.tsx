import styled from "styled-components";

const ChatListRoot = styled.div`
  display: flex;
  height: 90%;
  width: 20em;
  background: transparent;
  border: 0.1em solid rgba(255, 255, 255, 0.5);
`;

function ChatList() {
  return (
    <ChatListRoot>
      You Dont have any chats yet!
    </ChatListRoot>
  );
}

export default ChatList;
