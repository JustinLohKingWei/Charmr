import styled from "styled-components";

const HomeRoot = styled.div` display: flex;
height: 100vh;
width: 100vw;
background: linear-gradient(
  180deg,
  rgba(0, 7, 41, 1) 0%,
  rgba(255, 188, 188, 1) 100%
);
justify-content: center;
align-items: center;
color: white;`


type HomeProps = {
  handleSignOut : ()=>void
}

function Home({handleSignOut}:HomeProps) {
  return <HomeRoot>Home
    <button onClick={handleSignOut}>Logout</button>
  </HomeRoot>;
}

export default Home;
