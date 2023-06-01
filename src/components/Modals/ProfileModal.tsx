import { useContext } from "react";
import styled from "styled-components";
import { globalContextTypes, GlobalContext } from "../../App";

const ProfileModalRoot = styled.div`
  display: flex;
  min-width: 25em;
  width: 50%;
  max-width: 90%;
  min-height: 3em;
  max-height: 90vh;
  background-color: #ffffff;
  border-color: #000000;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const ProfileModalTitle = styled.div`
  display: flex;
  width: 100%;
  font-size: x-large;
  justify-content: center;
  padding: 1em 0 0 0;
`;

const Preferences = styled.div`
  display: flex
  width: 100%;
  justify-content: space-evenly;
  flex-wrap: wrap;
`;

const ModalCloseButton = styled.button`
  display: flex;
  font-size: large;
  width: 10em;
  height: 2em;
  border-radius: 0.25em;
  background-color: white
  color: black;
  justify-content: center;
  align-items: center;
  align-self: flex-end;
  justify-self: self-end;
  z-index: 5;
  &:hover {
    opacity: 0.5;
  }
`;

function ProfileModal() {
  const { setShowModal }: globalContextTypes = useContext(GlobalContext);
  return (
    <ProfileModalRoot>
      <ProfileModalTitle>Profile and Preferences</ProfileModalTitle>
      <h2>John Doe</h2>
      <Preferences>
        <>
          <input type="radio" name="my-input" id="yes" value="yes" /> Boys
        </>
        <>
          <input type="radio" name="my-input" id="yes" value="yes" /> Girls
        </>
        <>
          <input type="radio" name="my-input" id="yes" value="yes" /> Other
        </>
      </Preferences>
      <ModalCloseButton
        onClick={() => {
          setShowModal(false);
        }}
      >
        Close
      </ModalCloseButton>
    </ProfileModalRoot>
  );
}

export default ProfileModal;
