import styled from "styled-components";

export const Hamburger = styled.button`
  display: none;
  font-size: 24px;
  cursor: pointer;
  background: none;
  border: none;

  @media (max-width: 468px) {
    display: block; /* Show the hamburger icon on smaller screens */
  }
`;
export const Ul = styled.ul`
  display: flex;
  list-style: none;
  gap: 1.5rem;
  color: var(--color-grey-50);

  @media (max-width: 468px) {
    display: ${({ open }) =>
      open ? "flex" : "none"}; /* Show/hide based on state */
    flex-direction: column;
    position: absolute;
    top: 90px; /* Adjust positioning */
    right: 10px;
    background-color: var(--color-brand-800);
    padding: 1rem;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  }
`;
