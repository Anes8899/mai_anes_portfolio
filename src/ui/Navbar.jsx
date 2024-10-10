import { Link } from "react-router-dom";
import styled from "styled-components";

const Nav = styled.nav`
  display: flex;
  justify-content: space-around;
  background-color: wheat;
  align-items: center;
  height: 90px;
  font-size: large;
`;
const Title = styled.ul`
  display: flex;
  width: 25rem;
  height: 30px;
  align-items: center;
  justify-content: space-between;
  list-style: none;
  text-decoration: none;
  border: 1px solid black;
`;
const StyledLink = styled(Link)`
  text-decoration: none;
`;

function Navbar() {
  return (
    <>
      <Nav>
        <div>
          <span style={{ color: `red` }}>MAI </span>ANES
        </div>
        <nav>
          <ul>
            <Title>
              <li>
                <StyledLink to={"/"}>Home</StyledLink>
              </li>
              <li>
                <StyledLink to={"/work"}>Work</StyledLink>
              </li>
              <li>
                <StyledLink to={"/about"}>About</StyledLink>
              </li>
              <li>
                <StyledLink to={"/contact"}>Contact Me</StyledLink>
              </li>
            </Title>
          </ul>
        </nav>
        <div>
          <div>1</div>
          <div>1</div>
          <div>1</div>
          <div>1</div>
        </div>
      </Nav>
    </>
  );
}

export default Navbar;
