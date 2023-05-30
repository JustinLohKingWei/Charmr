import styled from "styled-components";
import { MdFace } from "react-icons/md";

const ContactRoot = styled.div`
  display: flex;
  height: 6em;
  width: 90%;
  border: 0.1em solid rgba(255, 255, 255, 0.5);
  align-items: center;
`;

const ContactImage = styled.div`
  display: flex;
  height: 4em;
  width: 4em;
  border: 0.1em solid rgba(255, 255, 255, 0.5);
  margin: 0.5em;
  justify-content: center;
  align-items: center;
`;

const ContactInfo = styled.div`
  display: flex;
  height: 4em;
  width: 12em;
  margin: 0.5em;
  justify-content: center;
  align-items: center;
`;

type ContactProps = {
    name:String
}

function Contact({name}:ContactProps) {
  return (
    <ContactRoot>
      <ContactImage>
        <MdFace size="2.5em" />
      </ContactImage>
      <ContactInfo> {name}</ContactInfo>
    </ContactRoot>
  );
}

export default Contact;
