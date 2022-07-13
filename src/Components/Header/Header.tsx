import React from "react";
import { useNavigate } from "react-router-dom";
import { Select } from "antd";
import "antd/dist/antd.min.css";

import { StyledHeader } from "./styles";
const options = [
  { value: "English", label: "English" },
  { value: "Chinese", label: "Chinese" },
];

export const Header = () => {
  const navigate = useNavigate();
  return (
    <StyledHeader>
      <Select className="select_language" options={options} defaultValue={options[0]} />
      <div onClick={() => navigate("/profile")} className="profile">
        <div className="avatar">avatar</div>
        <div className="id_shop">id shop</div>
      </div>
    </StyledHeader>
  );
};
