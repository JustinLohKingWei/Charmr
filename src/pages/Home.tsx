import styled from "styled-components";
import ChatBox from "../components/ChatBox/ChatBox";
import ChatList from "../components/ChatList";
import Navbar from "../components/Navbar";

const HomeRoot = styled.div`
  display: flex;
  height: 100vh;
  width: 100vw;
  background: linear-gradient(
    180deg,
    rgba(0, 7, 41, 1) 0%,
    rgba(255, 188, 188, 1) 100%
  );
  justify-content: space-evenly;
  align-items: center;
  color: white;
  z-index: 1;
`;

function Home() {
  return (
    <>
      <Navbar />
      <HomeRoot>
        <ChatList /> <ChatBox />
      </HomeRoot>
    </>
  );
}

export default Home;
