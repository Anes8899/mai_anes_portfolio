import styled from "styled-components";

const Containeer = styled.div`
  /* border: 1px solid black; */
  margin: 5em;
  display: flex;
  flex-direction: column;
  @media screen and (max-width: 425px) {
    margin: 2px;
  }
`;
const H1 = styled.h1`
  font-size: 50px;
`;
const Hr = styled.hr`
  position: relative;
  top: -35px;
  margin-left: 10em;
  height: 5px;
  background-color: var(--color-grey-900);
`;
const Paragrph = styled.p`
  /* border: 1px solid black; */
  margin: 0.5em 3em;
  font-size: 1.5em;
  @media screen and (max-width: 425px) {
    margin: 1px;
  }
`;
const Div = styled.div`
  display: flex;
  border: 1px solid black;
  justify-content: center;
  font-size: 2em;
  font-weight: bold;
  color: var(--color-brand-800);
`;
const ImgPacket = styled.div`
  /* border: 1px solid black; */
  width: 60em;
  line-height: 20px;
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  grid-template-rows: auto auto;
  margin: 5em auto;
  justify-items: center;
  align-items: center;
  gap: 7em;
  @media screen and (max-width: 1024px) {
    width: 30em;
    grid-template-columns: repeat(3, 1fr);
  }
  @media screen and (max-width: 425px) {
    width: 20em;
    grid-template-columns: repeat(2, 1fr);
    margin: auto;
  }
`;

function About() {
  return (
    <Containeer>
      <H1>about</H1>
      <Hr />
      <Paragrph>
        Hello, my name is Mai Anes. I am a 4th-year Information Technology
        Engineering student at the Royal University of Phnom Penh with a passion
        for front-end development. I have a solid foundation in HTML, CSS,
        JavaScript, Tailwind CSS, and ReactJS, with practical experience in
        building e-commerce websites using React and Tailwind technologies. I am
        eager to apply my technical skills in a professional setting and
        contribute to real-world projects. My commitment to continuous learning
        ensures that I’m always improving as a front-end developer. Alongside
        technical expertise, I value focus and productivity, which help me stay
        dedicated and efficient in my work.
      </Paragrph>
      <Div>My skills</Div>
      <ImgPacket>
        <div>
          <img src="../src/data/HTML5_logosvg.PNG" />
        </div>
        <div>
          <img src="../src/data/CSS3_logo.svg" width="70px" />
        </div>
        <div>
          <img src="../src/data/tailwindLogo.PNG" />
        </div>
        <div>
          <img src="../src/data/JavaScript-logo.PNG" />
        </div>
        <div>
          <img src="../src/data/reactLogo.PNG" />
        </div>
        <div>
          <img src="../src/data/github-mark.png" />
        </div>
        <div>
          <img src="../src/data/git.svg" />
        </div>
        <div>
          <img src="../src/data/styled-components.PNG" width={"200px"} />
        </div>
      </ImgPacket>
    </Containeer>
  );
}

export default About;
