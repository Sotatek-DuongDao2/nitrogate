import React from "react";
import { useNavigate } from "react-router-dom";

import { Logo } from "@images";
import logoIMG from "../../Images/Logo.png";
import { StyledSidebar } from "./Styles";

interface ISidebar {
  className: string;
}

export const Sidebar = (props: ISidebar) => {
  const navigate = useNavigate();
  const { className } = props;
  return (
    <StyledSidebar className={className}>
      <div>
        {/* <Logo /> */}
        <img src={logoIMG} alt="logo" />
      </div>
      <div>
        <div>
          <h2 onClick={() => navigate("/")}>Dashboard</h2>
        </div>
        <div>
          <h2>Account Details</h2>
          <h3 onClick={() => navigate("/account-detail")}>Account Balances</h3>
          <h3 onClick={() => navigate("/deposits-history")}>Deposits History</h3>
          <h3 onClick={() => navigate("/withdrawal-history")}>Withdrawals History</h3>
        </div>
        <div>
          <h2>Transfers</h2>
          <h3 onClick={() => navigate("/new-deposit")}>New Deposit</h3>
          <h3 onClick={() => navigate("/new-withdrawal")}>New Withdrawal</h3>
          <h3 onClick={() => navigate("/batch-withdrawal")}>New Batch Withdrawal</h3>
        </div>
        <div>
          <h2>Settings</h2>
          <h3 onClick={() => navigate("/profile")}>My profile</h3>
          <h3 onClick={() => navigate("/faga-authentication")}>2FA/GA Authentication</h3>
          <h3 onClick={() => navigate("/api-management")}>API Management</h3>
          <h3 onClick={() => navigate("/change-password")}>Change Password</h3>
          <h3 onClick={() => navigate("/logout")}>Log out</h3>
        </div>
      </div>
    </StyledSidebar>
  );
};
