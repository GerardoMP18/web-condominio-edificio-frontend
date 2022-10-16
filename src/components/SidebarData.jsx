import React from "react";
import * as FaIcons from "react-icons/fa";
import * as AiIcons from "react-icons/ai";
import * as IoIcons from "react-icons/io";
import * as RiIcons from "react-icons/ri";

const SidebarData = [
  {
    title: "Home",
    path: "/",
    icon: <AiIcons.AiFillHome />,
    iconClosed: <RiIcons.RiArrowDownSFill />,
    iconOpened: <RiIcons.RiArrowUpSFill />,
  },
  {
    title: "Condominios",
    path: "/condominios",
    icon: <IoIcons.IoIosPaper />,
    iconClosed: <RiIcons.RiArrowDownSFill />,
    iconOpened: <RiIcons.RiArrowUpSFill />,
    subNav: [
      {
        title: "C1",
        path: "/condominios/c1",
        icon: <AiIcons.AiFillHome />,
      },
      {
        title: "C2",
        path: "/condominios/c2",
        icon: <AiIcons.AiFillHome />,
      },
    ],
  },
  {
    title: "Edificios",
    path: "/edificios",
    icon: <AiIcons.AiFillHome />,
    iconClosed: <RiIcons.RiArrowDownSFill />,
    iconOpened: <RiIcons.RiArrowUpSFill />,
    subNav: [
      {
        title: "E1",
        path: "/edificios/e1",
        icon: <AiIcons.AiFillHome />,
      },
      {
        title: "E2",
        path: "/edificios/e2",
        icon: <AiIcons.AiFillHome />,
      },
    ],
  },
  {
    title: "Admin",
    path: "/admin",
    icon: <FaIcons.FaEnvelopeOpenText />,
    iconClosed: <RiIcons.RiArrowDownSFill />,
    iconOpened: <RiIcons.RiArrowUpSFill />,
    subNav: [
      {
        title: "A1",
        path: "/admin/a1",
        icon: <AiIcons.AiFillHome />,
      },
      {
        title: "A2",
        path: "/admin/a2",
        icon: <AiIcons.AiFillHome />,
      },
    ],
  },
  {
    title: "Propietario",
    path: "/propietario",
    icon: <AiIcons.AiFillHome />,
    iconClosed: <RiIcons.RiArrowDownSFill />,
    iconOpened: <RiIcons.RiArrowUpSFill />,
    subNav: [
      {
        title: "P1",
        path: "/propietario/p1",
        icon: <AiIcons.AiFillHome />,
      },
      {
        title: "P2",
        path: "/propietario/p2",
        icon: <AiIcons.AiFillHome />,
      },
    ],
  },
  {
    title: "Inquilino",
    path: "/inquilino",
    icon: <AiIcons.AiFillHome />,
    iconClosed: <RiIcons.RiArrowDownSFill />,
    iconOpened: <RiIcons.RiArrowUpSFill />,
    subNav: [
      {
        title: "I1",
        path: "/inquilino/sub1",
        icon: <AiIcons.AiFillHome />,
      },
      {
        title: "I2",
        path: "/inquilino/sub2",
        icon: <AiIcons.AiFillHome />,
      },
    ],
  },
  {
    title: "Configuracion",
    path: "/configuracion",
    icon: <AiIcons.AiFillHome />,
    iconClosed: <RiIcons.RiArrowDownSFill />,
    iconOpened: <RiIcons.RiArrowUpSFill />,
  },
];

export default SidebarData;
