import React, { useState } from "react";
import { SidebarLink, SidebarLabel, DropdownLink } from "./someStyle";

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
