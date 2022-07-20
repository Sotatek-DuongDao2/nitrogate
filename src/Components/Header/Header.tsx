import React from "react";
import { useNavigate } from "react-router-dom";
import { Select } from "antd";
import "antd/dist/antd.min.css";

import { StyledHeader } from "./styles";
import avtImg from "../../Images/avatar.png";
import { DropdownHeader } from "@images";

const options = [
  { value: "English", label: "English" },
  { value: "Chinese", label: "Chinese" },
];

export const Header = () => {
  const navigate = useNavigate();
  return (
    <StyledHeader>
      <Select
        className="select_language"
        options={options}
        defaultValue={options[0]}
        suffixIcon={<DropdownHeader />}
      />
      <div onClick={() => navigate("/profile")} className="profile">
        <div className="avatar">
          <img src={avtImg} alt="avt" />
        </div>
        <div className="id_shop">Dan Baker</div>
        <DropdownHeader />
      </div>
    </StyledHeader>
  );
};
