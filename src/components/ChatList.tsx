import styled from "styled-components";

const ChatListRoot = styled.div`
  display: flex;
  flex-direction: column;
  height: 90%;
  width: 20em;
  background: transparent;
  border: 0.1em solid rgba(255, 255, 255, 0.5);
  padding: 1em 0 1em 0;
  align-items:center;
`;

const ChatListItem = styled.div`
  display: flex;
  height: 6em;
  width: 90%;
  border: 0.1em solid rgba(255, 255, 255, 0.5);
`;

function ChatList() {
  return (
    <ChatListRoot>
      <ChatListItem />
      <ChatListItem />
      <ChatListItem />
      <ChatListItem />
      <ChatListItem />
    </ChatListRoot>
  );
}

export default ChatList;
