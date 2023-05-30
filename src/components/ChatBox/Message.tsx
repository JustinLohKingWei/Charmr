import styled from "styled-components";

const MessageRoot = styled.div`
  display: flex;
  padding: 0.5em 1em 0.5em 1em;
  margin: 1em;
`;

const CurrentUserMessageBox = styled.div`
  display: flex;
  background: green;
  padding: 0.5em;
  margin-left: auto;
  border-radius: 0.2em;
  flex-wrap: wrap;
  max-width:40%
`;

const OtherUserMessageBox = styled.div`
  display: flex;
  background: #c5114a;
  padding: 0.5em;
  border-radius: 0.5em;
  flex-wrap: wrap;
  max-width:40%
`;

type MessageProps = {
  isUser: boolean;
  message: string;
};

function Message({ isUser, message }: MessageProps) {
  return (
    <MessageRoot>
      {isUser ? (
        <CurrentUserMessageBox>{message}</CurrentUserMessageBox>
      ) : (
        <OtherUserMessageBox>{message}</OtherUserMessageBox>
      )}
    </MessageRoot>
  );
}

export default Message;
