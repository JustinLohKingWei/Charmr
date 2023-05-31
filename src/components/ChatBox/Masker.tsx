import { useContext } from "react";
import styled from "styled-components";
import { globalContextTypes, GlobalContext } from "../../App";

const MaskerRoot = styled.div`
  display: flex;
  height: 95%;
  width: 65%;
  background: rgba(255, 255, 255, 0.178);
  border: 0.1em solid rgba(255, 255, 255, 0.611);
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const MaskerButton = styled.button`
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

function Masker() {
  const { setmaskerDisplay }: globalContextTypes = useContext(GlobalContext);
  return (
    <MaskerRoot>
      <MaskerButton
        onClick={() => {
          setmaskerDisplay(false);
        }}
      >
        Meet Someone New Now!
      </MaskerButton>
    </MaskerRoot>
  );
}

export default Masker;
