import React from "react";
import * as AiIcons from "react-icons/ai";
import * as IoIcons from "react-icons/io";
import * as RiIcons from "react-icons/ri";

const Data = [
  {
    title: "Home",
    path: "/",
    icon: <AiIcons.AiFillHome />,
    iconClosed: <RiIcons.RiArrowDownSFill />,
    iconOpened: <RiIcons.RiArrowUpSFill />,
  },
  {
    title: "Admin",
    icon: <AiIcons.AiFillHome />,
    iconClosed: <RiIcons.RiArrowDownSFill />,
    iconOpened: <RiIcons.RiArrowUpSFill />,
    subNav: [
      {
        title: "Ingresos",
        path: "/admin/ingresos",
        icon: <AiIcons.AiFillHome />,
      },
      {
        title: "Egresos",
        path: "/admin/egresos",
        icon: <AiIcons.AiFillHome />,
      },
    ]
  },
  {
    title: "Condominios",
    path: "/condominios",
    icon: <IoIcons.IoIosPaper />,
    iconClosed: <RiIcons.RiArrowDownSFill />,
    iconOpened: <RiIcons.RiArrowUpSFill />,
    subNav: [
      {
        title: "Crear",
        path: "/condominios/crear-condominio",
        icon: <AiIcons.AiFillHome />,
      },
      {
        title: "Listar",
        path: "/condominios/c2",
        icon: <AiIcons.AiFillHome />,
      },
    ],
  },
  {
    title: "Edificios",
    icon: <AiIcons.AiFillHome />,
    iconClosed: <RiIcons.RiArrowDownSFill />,
    iconOpened: <RiIcons.RiArrowUpSFill />,
    subNav: [
      {
        title: "Crear",
        path: "/edificios/crear-edificio",
        icon: <AiIcons.AiFillHome />,
      },
      {
        title: "Listar",
        path: "/edificios/e2",
        icon: <AiIcons.AiFillHome />,
      },
    ],
  },
  {
    title: "Propietario",
    icon: <AiIcons.AiFillHome />,
    iconClosed: <RiIcons.RiArrowDownSFill />,
    iconOpened: <RiIcons.RiArrowUpSFill />,
    subNav: [
      {
        title: "Crear",
        path: "/propietario/crear-propietario",
        icon: <AiIcons.AiFillHome />,
      },
      {
        title: "Listar",
        path: "/propietario/p2",
        icon: <AiIcons.AiFillHome />,
      },
    ],
  },
  {
    title: "Inquilino",
    icon: <AiIcons.AiFillHome />,
    iconClosed: <RiIcons.RiArrowDownSFill />,
    iconOpened: <RiIcons.RiArrowUpSFill />,
    subNav: [
      {
        title: "Crear",
        path: "/inquilino/I1",
        icon: <AiIcons.AiFillHome />,
      },
      {
        title: "Listar",
        path: "/inquilino/I2",
        icon: <AiIcons.AiFillHome />,
      },
    ],
  },
  {
    title: "Carga Masiva",
    path: "/cargamasiva",
    icon: <AiIcons.AiFillHome />,
    iconClosed: <RiIcons.RiArrowDownSFill />,
    iconOpened: <RiIcons.RiArrowUpSFill />,
  },
  {
    title: "Configuracion",
    path: "/configuracion",
    icon: <AiIcons.AiFillHome />,
    iconClosed: <RiIcons.RiArrowDownSFill />,
    iconOpened: <RiIcons.RiArrowUpSFill />,
  },
];

export default Data;
