import { FaList } from "react-icons/fa";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { Hamburger, Ul } from "./StyleOnNavBar";
import { useState } from "react";

const Nav = styled.nav`
  display: flex;
  justify-content: space-around;
  background-color: var(--color-brand-900);
  align-items: center;
  height: 90px;
  font-size: large;
`;

const StyledLink = styled(Link)`
  text-decoration: none;
  &:active {
    color: red;
  }
`;

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  function handleClick(e) {
    const id = e.target.id;
    console.log(id);
    console.log("clicked");
    // {
    //   id === "home" && (e.target.style.color = "red");
    //   id === "work" && (e.target.style.color = "red");
    // }
    // {
    //   id === "home"
    //     ? (e.target.style.color = "red")
    //     : (e.target.style.color = "white");
    // }
  }

  function handleOpen() {
    setMenuOpen(!menuOpen);
  }
  return (
    <>
      <Nav>
        <h3 style={{ color: `var(--color-grey-50)` }}>
          <span style={{ color: `red` }}>MAI </span>ANES
        </h3>
        <nav>
          <Ul open={menuOpen}>
            <li>
              <StyledLink to={"/"} id="home" onClick={handleClick}>
                Home
              </StyledLink>
            </li>
            <li>
              <StyledLink to={"/work"} id="work" onClick={handleClick}>
                Work
              </StyledLink>
            </li>
            <li>
              <StyledLink to={"/about"}>About</StyledLink>
            </li>
            <li>
              <StyledLink to={"/contact"}>Contact Me</StyledLink>
            </li>
          </Ul>
        </nav>
        <div>
          <a href="https://github.com/Anes8899" target="_blank">
            <img src="../src/data/github-mark-white.png" width={"50px"} />
          </a>
        </div>
        <Hamburger onClick={handleOpen}>
          <FaList
            style={{
              color: "var(--color-grey-50)",
              position: "relative",
            }}
          />
        </Hamburger>
      </Nav>
    </>
  );
}

export default Navbar;
