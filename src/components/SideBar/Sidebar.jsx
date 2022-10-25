import React, { useState } from "react";
import { Nav, NavIcon, SidebarNav, SidebarWrap } from "./someStyle";
import { IconContext } from "react-icons";
import * as FaIcons from "react-icons/fa";
import Data from "./Data";
import SubMenu from "./SubMenu";

function Sidebar() {
  const [sidebar, setSidebar] = useState(false);
  const showSidebar = () => setSidebar(!sidebar);

  return (
    <>
      <IconContext.Provider value={{ color: "#fff" }}>
        <Nav>
          <NavIcon to="#">
            <FaIcons.FaBars onClick={showSidebar} />
          </NavIcon>
        </Nav>
        <SidebarNav sidebar={sidebar}>
          <SidebarWrap>
            <NavIcon to="#">
              <FaIcons.FaBars onClick={showSidebar} />
            </NavIcon>
            {Data.map((element, index) => {
              return <SubMenu element={element} key={index} />;
            })}
          </SidebarWrap>
        </SidebarNav>
      </IconContext.Provider>
    </>
  );
}

export default Sidebar;
