import styled from "styled-components";

const ModalRoot = styled.div`
  display: flex;
  position: fixed;
  min-height: 100vh;
  min-width: 100vw;
  z-index: 999;
  background: rgba(255, 255, 255, 0.698);
  justify-content: center;
  align-items: center;
`;

type ModalProps = {
  children?: React.ReactNode;
};

function Modal({ children = [] }: ModalProps) {
  const modalChildren = children;
  return <ModalRoot>{modalChildren}</ModalRoot>;
}

export default Modal;
