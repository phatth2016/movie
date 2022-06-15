import React from "react";
import {
  HomeOutlined,
  HeartOutlined,
  PlusOutlined,
  UserAddOutlined,
} from "@ant-design/icons";

export const MenuData = [
  {
    icon: <HomeOutlined />,
    name: "home",
    path: "/",
  },
  {
    icon: <HeartOutlined />,
    name: "liked movies",
    path: "/liked-movies",
  },
  {
    icon: <UserAddOutlined />,
    name: "My profile",
    path: "/my-profile",
  },
];
