import React from "react";
import close from "./menu.svg";
import menu from "./x.svg";

export const CloseMenu = () => {
  return <img src={close} alt="" className="menu-icon" />;
};

export const MenuIcon = () => {
  return <img src={menu} alt="" className="menu-icon" />;
};
