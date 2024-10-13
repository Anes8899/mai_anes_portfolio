import { Link } from "react-router-dom";
import styled from "styled-components";

const Container = styled.section`
  display: flex;
  justify-content: center;
  gap: 10px;
  align-items: center;
  height: 90vh;
  @media screen and (max-width: 480px) {
    /* border: 1px solid black; */
    gap: 2px;
  }
`;
const Box1 = styled.div`
  /* border: 1px solid black; */
  width: 40%;
  height: auto;
  @media screen and (max-width: 768px) {
    display: flex;
    flex-direction: column;
    justify-content: center;
    width: 45%;
    height: 20rem;
  }
`;
const Box2 = styled.div`
  /* border: 1px solid black; */
  width: 25%;
  overflow: hidden;
  border-radius: 20px;
  height: auto;
  @media screen and (max-width: 480px) {
    width: 50%;
  }
`;
const Line = styled(Link)`
  font-size: 3rem;
  text-decoration: underline;
  text-decoration-color: var(--color-red-200);
  text-underline-offset: 8px;
  @media screen and (max-width: 768px) {
    font-size: small;
  }
`;
const H3 = styled.h3`
  font-size: 2.5em;
  font-family: "Roboto";
  @media screen and (max-width: 768px) {
    font-size: medium;
  }
`;
const H1 = styled.h1`
  font-size: 5em;
  color: var(--color-brand-900);
  @media screen and (max-width: 768px) {
    font-size: 1.9em;
  }
`;

function Home() {
  return (
    <>
      <Container>
        <Box1>
          <H3>Hello, I&apos;m Anes,</H3>
          <H1>Front-end Developer Intern</H1>
          <Line to={"contact"}>
            Contact Me
            {/* <span style={{ textDecoration: "none" }}></span> make emoji */}
          </Line>
        </Box1>
        <Box2>
          <img
            src="https://www.w3schools.com/w3images/avatar2.png"
            style={{ scale: "1.2" }}
          />
        </Box2>
      </Container>
    </>
  );
}

export default Home;
