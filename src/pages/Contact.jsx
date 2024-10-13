import emailjs from "@emailjs/browser";
import { useRef } from "react";
import styled from "styled-components";

const Container = styled.div`
  border: 1px solid black;
  height: 90vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Form = styled.form`
  border: 1px solid black;
  border-radius: 10px;
  width: 50em;
  height: 50vh;
  line-height: 40px;
  display: grid;
  overflow: hidden;
  padding: 2em;
  background-color: var(--color-grey-50);
  @media screen and (max-width: 768px) {
    width: 25em;
    margin: auto;
  }
`;
const Span = styled.span`
  font-size: 2em;
  display: flex;
  justify-content: center;
  color: var(--color-red-200);
`;
const Button = styled.button`
  height: 50px;
  margin-top: 20px;
  border-radius: 10px;
  border: none;
  color: var(--color-grey-50);
  background-color: var(--color-brand-700);
  &:hover {
    background-color: var(--color-red-200);
    border: none;
  }
`;

function Contact() {
  const form = useRef();

  const sendEmail = (e) => {
    e.persist();
    e.preventDefault();
    // setIsSubmitting(true);
    emailjs
      .sendForm(
        "service_rnli2zj",
        "template_uli8pok",
        e.target,
        "fEv1MhyUlo8HrSsJ0"
      )
      .then(
        (response) => {
          console.log("SUCCESS!", response.status, response.text);
        },
        (error) => {
          console.log("FAILED...", error);
        }
      ),
      // Clears the form after sending the email
      e.target.reset();
  };
  return (
    <Container>
      <Form ref={form} onSubmit={sendEmail}>
        <Span>Contact Me</Span>
        <label>Name</label>
        <input type="text" name="user_name" />
        <label>Email</label>
        <input type="email" name="user_email" />
        <label>Message</label>
        <textarea name="message" />
        <Button type="submit" value="Send">
          Send
        </Button>
      </Form>
    </Container>
  );
}

export default Contact;
