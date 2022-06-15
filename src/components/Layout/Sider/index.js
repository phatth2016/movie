import React from "react";
import { MenuData, MenuActionData, MenuLogin } from "./contant";
import { SiderComponent, MenuItem, GroupMenu } from "./styled";
import Logo from "../../base/Logo";
import { Link, useLocation } from "react-router-dom";

export default function Sider() {
  const { pathname } = useLocation();

  return (
    <SiderComponent width={250}>
      <Logo />
      <GroupMenu>
        {MenuData.map((menu, index) => {
          return (
            <Link to={menu.path} key={index}>
              <MenuItem
                key={index}
                className={pathname.includes(menu.path) ? "active" : ""}
              >
                {menu.icon}
              </MenuItem>
            </Link>
          );
        })}
      </GroupMenu>
    </SiderComponent>
  );
}
