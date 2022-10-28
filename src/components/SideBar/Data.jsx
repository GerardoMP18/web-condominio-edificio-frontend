import React from "react";
import * as AiIcons from "react-icons/ai";
import * as RiIcons from "react-icons/ri";
import * as HiIcons from "react-icons/hi";
import * as FaIcons from "react-icons/fa";
import * as IoIcons from "react-icons/io";
import * as MdIcons from "react-icons/md";

const Data = [
  {
    title: "Home",
    path: "/home",
    icon: <AiIcons.AiFillHome />,
    iconClosed: <RiIcons.RiArrowDownSFill />,
    iconOpened: <RiIcons.RiArrowUpSFill />,
  },
  {
    title: "Admin",
    icon: <FaIcons.FaUserCog />,
    iconClosed: <RiIcons.RiArrowDownSFill />,
    iconOpened: <RiIcons.RiArrowUpSFill />,
    subNav: [
      {
        title: "Ingresos",
        path: "/admin/ingresos",
        icon: <FaIcons.FaMoneyBill />,
      },
      {
        title: "Egresos",
        path: "/admin/egresos",
        icon: <FaIcons.FaMoneyCheck />,
      },
      {
        title: "Gastos",
        path: "/admin/gastos",
        icon: <FaIcons.FaGratipay />,
      },
    ]
  },
  {
    title: "Condominios",
    icon: <FaIcons.FaBuilding />,
    iconClosed: <RiIcons.RiArrowDownSFill />,
    iconOpened: <RiIcons.RiArrowUpSFill />,
    subNav: [
      {
        title: "Crear",
        path: "/condominios/crear-condominio",
        icon: <IoIcons.IoMdCreate />,
      },
      {
        title: "Listar",
        path: "/condominios/c2",
        icon: <FaIcons.FaListUl />,
      },
    ],
  },
  {
    title: "Edificios",
    icon: <HiIcons.HiOfficeBuilding />,
    iconClosed: <RiIcons.RiArrowDownSFill />,
    iconOpened: <RiIcons.RiArrowUpSFill />,
    subNav: [
      {
        title: "Crear",
        path: "/edificios/crear-edificio",
        icon: <IoIcons.IoMdCreate />,
      },
      {
        title: "Listar",
        path: "/edificios/e2",
        icon: <FaIcons.FaListUl />,
      },
    ],
  },
  {
    title: "Propietario",
    icon: <FaIcons.FaUserShield />,
    iconClosed: <RiIcons.RiArrowDownSFill />,
    iconOpened: <RiIcons.RiArrowUpSFill />,
    subNav: [
      {
        title: "Crear",
        path: "/propietario/crear-propietario",
        icon: <FaIcons.FaUserEdit/>,
      },
      {
        title: "Listar",
        path: "/propietario/p2",
        icon: <FaIcons.FaUsers />,
      },
    ],
  },
  {
    title: "Inquilino",
    icon: <FaIcons.FaUserFriends />,
    iconClosed: <RiIcons.RiArrowDownSFill />,
    iconOpened: <RiIcons.RiArrowUpSFill />,
    subNav: [
      {
        title: "Crear",
        path: "/inquilino/crear-inquilino",
        icon: <AiIcons.AiFillHome />,
      },
      {
        title: "Listar",
        path: "/inquilino/I2",
        icon: <FaIcons.FaUsers />,
      },
    ],
  },
  {
    title: "Carga Masiva",
    path: "/cargamasiva",
    icon: <MdIcons.MdOutlineViewList />,
    iconClosed: <RiIcons.RiArrowDownSFill />,
    iconOpened: <RiIcons.RiArrowUpSFill />,
  },
  {
    title: "Configuracion",
    path: "/configuracion",
    icon: <FaIcons.FaCog/>,
    iconClosed: <RiIcons.RiArrowDownSFill />,
    iconOpened: <RiIcons.RiArrowUpSFill />,
  },
];

export default Data;