import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

import {
  Logo,
  LogoNoText,
  Setting,
  Home,
  Transfer,
  AccountDetail,
  ArrowDown,
  ArrowLeft,
  ArrowRight,
} from "@images";
import { StyledSidebar } from "./Styles";

interface ISidebar {
  className: string;
}

export const Sidebar = (props: ISidebar) => {
  const navigate = useNavigate();
  const { className } = props;
  const [isVisibleAccountDetails, setisVisibleAccountDetails] = useState<boolean>(false);
  const [isVisibleTransfer, setisVisibleTransfer] = useState<boolean>(false);
  const [isVisibleSettings, setisVisibleSettings] = useState<boolean>(false);
  const [isSidebarClose, setIsSidebarClose] = useState<boolean>(false);

  const handleLogout = () => {
    navigate("/login");
    localStorage.setItem("accessToken", "");
  };
  return (
    <StyledSidebar className={className}>
      {!isSidebarClose ? (
        <div className="sidebar_open">
          <div>
            <Logo />
            {/* <img src={logoIMG} alt="logo" /> */}
            <ArrowLeft onClick={() => setIsSidebarClose(true)} />
          </div>
          <div>
            <div>
              <h2 onClick={() => navigate("/")}>
                <Home />
                Dashboard
              </h2>
            </div>
            <div>
              <h2 onClick={() => setisVisibleAccountDetails((prev) => !prev)}>
                <AccountDetail />
                Account Details
                <ArrowDown />
              </h2>
              {isVisibleAccountDetails ? (
                <div>
                  <h3 onClick={() => navigate("/account-detail")}>Account Balances</h3>
                  <h3 onClick={() => navigate("/deposits-history")}>Deposits History</h3>
                  <h3 onClick={() => navigate("/withdrawal-history")}>Withdrawals History</h3>
                </div>
              ) : null}
            </div>
            <div>
              <h2 onClick={() => setisVisibleTransfer((prev) => !prev)}>
                <Transfer />
                Transfers
                <ArrowDown />
              </h2>
              {isVisibleTransfer ? (
                <div>
                  <h3 onClick={() => navigate("/new-deposit")}>New Deposit</h3>
                  <h3 onClick={() => navigate("/new-withdrawal")}>New Withdrawal</h3>
                  <h3 onClick={() => navigate("/batch-withdrawal")}>New Batch Withdrawal</h3>
                </div>
              ) : null}
            </div>
            <div>
              <h2 onClick={() => setisVisibleSettings((prev) => !prev)}>
                <Setting />
                Settings
                <ArrowDown />
              </h2>
              {isVisibleSettings ? (
                <div>
                  <h3 onClick={() => navigate("/profile")}>My profile</h3>
                  <h3 onClick={() => navigate("/faga-authentication")}>2FA/GA Authentication</h3>
                  <h3 onClick={() => navigate("/api-management")}>API Management</h3>
                  <h3 onClick={() => navigate("/change-password")}>Change Password</h3>
                  <h3 onClick={handleLogout}>Log out</h3>
                </div>
              ) : null}
            </div>
          </div>
        </div>
      ) : (
        <div className="sidebar_close">
          <div>
            <LogoNoText />
            <ArrowRight onClick={() => setIsSidebarClose(false)} />
          </div>
          <div>
            <div>
              <h2 onClick={() => navigate("/")}>
                <Home />
                {/* Dashboard */}
              </h2>
            </div>
            <div>
              <h2 onClick={() => setisVisibleAccountDetails((prev) => !prev)}>
                <AccountDetail />
                {/* Account Details */}
                {/* <ArrowDown /> */}
              </h2>
              {/* {isVisibleAccountDetails ? (
              <div>
                <h3 onClick={() => navigate("/account-detail")}>Account Balances</h3>
                <h3 onClick={() => navigate("/deposits-history")}>Deposits History</h3>
                <h3 onClick={() => navigate("/withdrawal-history")}>Withdrawals History</h3>
              </div>
            ) : null} */}
            </div>
            <div>
              <h2 onClick={() => setisVisibleTransfer((prev) => !prev)}>
                <Transfer />
                {/* Transfers */}
                {/* <ArrowDown /> */}
              </h2>
              {/* {isVisibleTransfer ? (
              <div>
                <h3 onClick={() => navigate("/new-deposit")}>New Deposit</h3>
                <h3 onClick={() => navigate("/new-withdrawal")}>New Withdrawal</h3>
                <h3 onClick={() => navigate("/batch-withdrawal")}>New Batch Withdrawal</h3>
              </div>
            ) : null} */}
            </div>
            <div>
              <h2 onClick={() => setisVisibleSettings((prev) => !prev)}>
                <Setting />
                {/* Settings */}
                {/* <ArrowDown /> */}
              </h2>
              {/* {isVisibleSettings ? (
              <div>
                <h3 onClick={() => navigate("/profile")}>My profile</h3>
                <h3 onClick={() => navigate("/faga-authentication")}>2FA/GA Authentication</h3>
                <h3 onClick={() => navigate("/api-management")}>API Management</h3>
                <h3 onClick={() => navigate("/change-password")}>Change Password</h3>
                <h3 onClick={handleLogout}>Log out</h3>
              </div>
            ) : null} */}
            </div>
          </div>
        </div>
      )}
    </StyledSidebar>
  );
};
