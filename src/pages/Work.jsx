import { NavLink } from "react-router-dom";
import styled from "styled-components";
import BoxImage from "../ui/BoxImage";
import { data } from "../data/data";

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
const ImgPacket = styled.div`
  /* border: 1px solid black; */
  line-height: 20px;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: auto auto;
  margin: 1em 4em;
  justify-items: center;
  align-items: center;
  gap: 7em;
  @media screen and (max-width: 1024px) {
    width: 30em;
    grid-template-columns: repeat(2, 1fr);
  }
  @media screen and (max-width: 425px) {
    width: 20em;
    grid-template-columns: repeat(1, 1fr);
    margin: auto;
    h1 {
      font-size: 20px;
    }
  }
`;

function Work() {
  return (
    <Containeer>
      <H1>Work</H1>
      <Hr />
      <Paragrph>These is projects from work and other I learning.</Paragrph>
      <ImgPacket>
        {data.map((data, id) => (
          <BoxImage data={data} key={id} />
        ))}
      </ImgPacket>
    </Containeer>
  );
}

export default Work;
