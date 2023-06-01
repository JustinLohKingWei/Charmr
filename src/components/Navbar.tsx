import styled from "styled-components";
import { GlobalContext, globalContextTypes } from "../App";
import { useContext } from "react";
import { GoThreeBars } from "react-icons/go";
import { GrLogout, GrSettingsOption } from "react-icons/gr";
import { FiUser } from "react-icons/fi";
import ProfileModal from "./Modals/ProfileModal";
import Modal from "./Modals/Modal";

const NavbarRoot = styled.div`
  display: flex;
  flex-direction: column;
  position: absolute;
  max-height: 100vh;
  width: 50px;
  z-index: 2;
  justify-content: space-evenly;
`;

const NavbarToggle = styled.div`
  display: flex;
  height: 2.5em;
  width: 100%;
  justify-content: center;
  align-items: center;
  background: rgba(255, 255, 255, 0.441);
  &:hover {
    background: #fffffff5;
  }
`;

const NavbarList = styled.div`
  display: flex;
  flex-direction: column;

  width: 100%;
`;

const NavbarListItem = styled.div`
  display: flex;
  height: 2em;
  width: 100%;
  justify-content: center;
  align-items: center;
  padding: 10px 0 10px 0;
  background: rgba(255, 255, 255, 0.441);
  &:hover {
    background: #ffffffd1;
  }
`;

function Navbar() {
  const { handleSignOut, navBarOpen, setnavBarOpen,setShowModal, setCurrentModal, }: globalContextTypes =
    useContext(GlobalContext);
    const openProfileModal = () => {
      setShowModal(true);
      setCurrentModal(
        <Modal>
          <ProfileModal/>
        </Modal>
      );
    };

    const openSettingsModal = () => {
      setShowModal(true);
      setCurrentModal(
        <Modal>
          <ProfileModal/>
        </Modal>
      );
    };


    
  return (
    <NavbarRoot>
      <NavbarToggle
        onClick={() => {
          const toggle = !navBarOpen;
          setnavBarOpen(toggle);
        }}
      >
        <GoThreeBars size="2em" />
      </NavbarToggle>
      {navBarOpen ? (
        <NavbarList>
          <NavbarListItem>
            <FiUser size="1.75em" onClick={openProfileModal}/>
          </NavbarListItem>
          <NavbarListItem>
            <GrSettingsOption size="1.75em" onClick={openSettingsModal} />
          </NavbarListItem>
          <NavbarListItem>
            <GrLogout onClick={handleSignOut} size="1.75em" />
          </NavbarListItem>
        </NavbarList>
      ) : (
        <></>
      )}
    </NavbarRoot>
  );
}
export default Navbar;
