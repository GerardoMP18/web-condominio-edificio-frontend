import React, { useState } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const SidebarLink = styled(Link)`
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

const SidebarLabel = styled.span`
  margin-left: 16px;
`;

const DropdownLink = styled(Link)`
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

const SubMenu = ({ element }) => {
  const [subnav, setSubnav] = useState(false);

  const showSubnav = () => setSubnav(!subnav);

  return (
    <>
      <SidebarLink to={element.path} onClick={element.subNav && showSubnav}>
        <div>
          {element.icon}
          <SidebarLabel>{element.title}</SidebarLabel>
        </div>
        <div>
          {element.subNav && subnav
            ? element.iconOpened
            : element.subNav
            ? element.iconClosed
            : null}
        </div>
      </SidebarLink>
      {subnav &&
        element.subNav.map((element, index) => {
          return (
            <DropdownLink to={element.path} key={index}>
              {element.icon}
              <SidebarLabel>{element.title}</SidebarLabel>
            </DropdownLink>
          );
        })}
    </>
  );
};

export default SubMenu;
