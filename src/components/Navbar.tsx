import styled from "styled-components";
import { GlobalContext, globalContextTypes } from "../App";
import { useContext } from "react";
import { GoThreeBars } from "react-icons/go";
import { GrLogout, GrSettingsOption } from "react-icons/gr";
import { FiUser } from "react-icons/fi";

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
  background: #ffffff83;
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
  background: #ffffff83;
  &:hover {
    background: #ffffffd1;
  }
`;

function Navbar() {
  const { handleSignOut, navBarOpen, setnavBarOpen }: globalContextTypes =
    useContext(GlobalContext);
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
            <FiUser size="1.75em" />
          </NavbarListItem>
          <NavbarListItem>
            <GrSettingsOption size="1.75em" />
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
