import styled from "styled-components";
import { Link } from "react-router-dom";


/* Navbar */
export const Nav = styled.div`
  background-color: #060b26;
  background: #6367F0;
  height: 60px;
  display: flex;
  justify-content: flex-start;
  align-items: center;
`;

/* Nav Icon */
export const NavIcon = styled(Link)`
  margin-left: 2rem;
  font-size: 2rem;
  height: 80px;
  display: flex;
  justify-content: flex-start;
  align-items: center;
`;

/* Sidebar */
export const SidebarNav = styled.nav`
  background-image: linear-gradient(#5E5DEF, #98D7FF);
  width: 225px;
  height: 100vh;
  display: flex;
  justify-content: center;
  position: fixed;
  top: 0;
  left: ${({ sidebar }) => (sidebar ? "0" : "-100%")};
  transition: 350ms;
  z-index: 10;
`;

export const SidebarWrap = styled.div`
  width: 100%;
`;


/* Submenu*/
export const SidebarLink = styled(Link)`
  display: flex;
  color: #f7faff;
  justify-content: space-between;
  align-items: center;
  padding: 20px;
  list-style: none;
  height: 60px;
  text-decoration: none;
  font-size: 18px;

  &:hover {
    background: rgba(255, 255, 255, 0.2);
    border-left: 4px solid #436CFF;
    cursor: pointer;
  }
`;

/* Submenu Options*/
export const SidebarLabel = styled.span`
  margin-left: 16px;
`;

/* Submenu Suboptions*/
export const DropdownLink = styled(Link)`
  height: 60px;
  padding-left: 3rem;
  display: flex;
  align-items: center;
  text-decoration: none;
  color: #f5f5f5;
  font-size: 18px;

  &:hover {
    background: rgba(94, 94, 239, 0.5);
    cursor: pointer;
  }
`;
