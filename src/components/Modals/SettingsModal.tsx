import { useContext } from "react";
import styled from "styled-components";
import { globalContextTypes, GlobalContext } from "../../App";

const SettingsModalRoot = styled.div`
  display: flex;
  min-width: 25em;
  width: 50%;
  max-width: 90%;
  min-height: 3em;
  max-height: 90vh;
  background-color: #ffffff;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const SettingsModalTitle = styled.div`
  display: flex;
  width: 100%;
  font-size: x-large;
  justify-content: center;
  padding: 1em 0 1em 0;
`;

const Settings = styled.div`
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

function SettingsModal() {
  const { setShowModal }: globalContextTypes = useContext(GlobalContext);
  return (
    <SettingsModalRoot>
      <SettingsModalTitle>Application Settings</SettingsModalTitle>
      <Settings>
        <>
          <input type="radio" name="my-input" id="yes" value="yes" /> Dark Mode
        </>

        <>
          <input type="radio" name="my-input" id="yes" value="yes" /> Light Mode
        </>
      </Settings>

      <ModalCloseButton
        onClick={() => {
          setShowModal(false);
        }}
      >
        Close
      </ModalCloseButton>
    </SettingsModalRoot>
  );
}

export default SettingsModal;
