import styled from "styled-components";
import { FcGoogle } from "react-icons/fc";

const LoginPageRoot = styled.div`
  display: flex;
  height: 100vh;
  width: 100vw;
  background: linear-gradient(
    180deg,
    rgba(0, 7, 41, 1) 0%,
    rgba(255, 188, 188, 1) 100%
  );
  justify-content: center;
  align-items: center;
  color: white;
`;
const LoginBox = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  background: transparent;
  backdrop-filter: blur(20px);
  font-size: 1em;
  height: 40%;
  width: 40%;
  border: 0.1em solid rgba(255, 255, 255, 0.5);
`;

const LoginTitle = styled.div`
  display: flex;
  justify-content: center;
  font-size: 2em;
  height: 50%;
  align-items: center;
  font-family: "comic-sans";
`;

const LoginSection = styled.div`
  display: flex;
  justify-content: center;
`;

const GoogleLoginButton = styled.button`
  display: flex;
  font-size: 1.5em;
  min-width: 13em;
  min-height: 2em;
  border-radius: 1px;
  justify-content: space-evenly;
  align-items: center;
  background: transparent;
  border: 0.1em solid rgba(255, 255, 255, 0.5);
  color: rgb(255, 255, 255);
  &:hover {
    opacity: 0.8;
    background: rgba(255, 255, 255, 0.08);
  }
`;

type LoginProps = {
  handleSignIn: () => void;
};

function Login({ handleSignIn }: LoginProps) {
  return (
    <LoginPageRoot>
      <LoginBox>
        <LoginTitle>Charmr</LoginTitle>
        <LoginSection>
          <GoogleLoginButton onClick={handleSignIn}>
            <FcGoogle />
            Sign in With Google
          </GoogleLoginButton>
        </LoginSection>
        <LoginSection>
          Sign up for Charmr today!
        </LoginSection>
      </LoginBox>
    </LoginPageRoot>
  );
}

export default Login;
