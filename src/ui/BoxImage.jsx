import { NavLink } from "react-router-dom";
import styled from "styled-components";
import CountText from "../utils/CountText";
import { useState } from "react";

const Box = styled.div`
  border: 1px solid black;
  width: 1fr;
  border-radius: 15px;
  /* height: 33em; */
  /* height: auto; */
  height: ${(props) => (props.complete ? "33em" : "auto")};
  line-height: 35px;
  overflow: hidden;
`;
const Image = styled.img`
  width: 100%;
  height: 15em;
`;
const Ul = styled.ul`
  list-style: square;
`;

function BoxImage({ data }) {
  const [show, setShow] = useState(true);
  const {
    img,
    ln,
    title,
    description,
    technologies,
    contributions,
    achievements,
  } = data;
  return (
    <Box onClick={() => setShow((display) => !display)} complete={show}>
      <>
        <Image src={img} />
        <div style={{ padding: "3rem" }}>
          <h1 style={{ marginBottom: "2rem" }}>{title}</h1>
          <Ul>
            {show ? (
              <>
                <li>
                  Description: {description}
                  <span style={{ marginLeft: "2rem", color: "green" }}>
                    See more...
                  </span>
                </li>
              </>
            ) : (
              <>
                <li>Description: {description}.</li>
                <li>Technologies: {technologies}.</li>
                <li>Contributions: {contributions}.</li>
                <li>
                  Achievements: {achievements}.
                  <span
                    style={{
                      color: "var(--color-brand-500)",
                      textDecoration: "underline",
                      textUnderlineOffset: "5px",
                      marginLeft: "2rem",
                    }}
                  >
                    <NavLink to={ln} target="_blank">
                      Source Code
                    </NavLink>
                  </span>
                </li>
              </>
            )}
          </Ul>
        </div>
      </>
    </Box>
  );
}

export default BoxImage;
