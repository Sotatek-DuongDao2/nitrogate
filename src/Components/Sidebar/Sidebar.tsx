import React, { useEffect, useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import clsx from "clsx";

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
  ArrowSideBarRight,
} from "@images";
import { StyledSidebar } from "./Styles";
import BigPrefixImg from "../../Images/BigPrefixSidebar.png";
import MiniPrefixImg from "../../Images/MiniPrefixSidebar.png";

interface ISidebar {
  className?: string;
}

export const Sidebar = (props: ISidebar) => {
  const navigate = useNavigate();
  const location = useLocation();
  const { className } = props;
  const [isDashboardActive, setIsDashboardActive] = useState<boolean>(true);
  const [isVisibleAccountDetails, setisVisibleAccountDetails] = useState<boolean>(false);
  const [isVisibleTransfer, setisVisibleTransfer] = useState<boolean>(false);
  const [isVisibleSettings, setisVisibleSettings] = useState<boolean>(false);
  const [isSidebarClose, setIsSidebarClose] = useState<boolean>(false);

  const handleLogout = () => {
    navigate("/login");
    localStorage.setItem("accessToken", "");
  };

  useEffect(() => {
    if (location.pathname === "/") {
      setIsDashboardActive(true);
    } else setIsDashboardActive(false);
  }, [location]);

  return (
    <StyledSidebar className={className}>
      {!isSidebarClose ? (
        <div className="sidebar_open">
          <div className="sidebar_logo">
            <Logo />
            <ArrowLeft onClick={() => setIsSidebarClose(true)} className="sidebar_close_icon" />
          </div>
          <div className="sidebar_list_item">
            <div className={clsx("sidebar_item", isDashboardActive && "sidebar_item_active")}>
              <div onClick={() => navigate("/")}>
                <Home />
                <h2>Dashboard</h2>
                {isDashboardActive && <img src={BigPrefixImg} alt="pre" />}
              </div>
            </div>
            <div className={clsx("sidebar_item", isVisibleAccountDetails && "sidebar_item_active")}>
              <div onClick={() => setisVisibleAccountDetails((prev) => !prev)}>
                <AccountDetail />
                <h2> Account Details</h2>
                {isVisibleAccountDetails ? (
                  <ArrowDown className="show_arrow" />
                ) : (
                  <ArrowSideBarRight className="show_arrow" />
                )}
              </div>
              {isVisibleAccountDetails ? (
                <div className="sidebar_details">
                  <div>
                    <h3 onClick={() => navigate("/account-detail")}>Account Balances</h3>
                    {location.pathname === "/account-detail" && (
                      <img src={MiniPrefixImg} alt="pre" />
                    )}
                  </div>
                  <div>
                    <h3 onClick={() => navigate("/deposits-history")}>Deposits History</h3>
                    {location.pathname === "/deposits-history" && (
                      <img src={MiniPrefixImg} alt="pre" />
                    )}
                  </div>
                  <div>
                    <h3 onClick={() => navigate("/withdrawal-history")}>Withdrawals History</h3>
                    {location.pathname === "/withdrawal-history" && (
                      <img src={MiniPrefixImg} alt="pre" />
                    )}
                  </div>
                </div>
              ) : null}
            </div>
            <div className={clsx("sidebar_item", isVisibleTransfer && "sidebar_item_active")}>
              <div onClick={() => setisVisibleTransfer((prev) => !prev)}>
                <Transfer />
                <h2>Transfers</h2>
                {isVisibleTransfer ? (
                  <ArrowDown className="show_arrow" />
                ) : (
                  <ArrowSideBarRight className="show_arrow" />
                )}
              </div>
              {isVisibleTransfer ? (
                <div className="sidebar_details">
                  <div>
                    <h3 onClick={() => navigate("/new-deposit")}>New Deposit</h3>
                    {location.pathname === "/new-deposit" && <img src={MiniPrefixImg} alt="pre" />}
                  </div>
                  <div>
                    <h3 onClick={() => navigate("/new-withdrawal")}>New Withdrawal</h3>
                    {location.pathname === "/new-withdrawal" && (
                      <img src={MiniPrefixImg} alt="pre" />
                    )}
                  </div>
                  <div>
                    <h3 onClick={() => navigate("/batch-withdrawal")}>New Batch Withdrawal</h3>
                    {location.pathname === "/batch-withdrawal" && (
                      <img src={MiniPrefixImg} alt="pre" />
                    )}
                  </div>
                </div>
              ) : null}
            </div>
            <div className={clsx("sidebar_item", isVisibleSettings && "sidebar_item_active")}>
              <div onClick={() => setisVisibleSettings((prev) => !prev)}>
                <Setting />
                <h2> Settings</h2>
                {isVisibleSettings ? (
                  <ArrowDown className="show_arrow" />
                ) : (
                  <ArrowSideBarRight className="show_arrow" />
                )}
              </div>
              {isVisibleSettings ? (
                <div className="sidebar_details">
                  <div>
                    <h3 onClick={() => navigate("/profile")}>My profile</h3>
                    {location.pathname === "/profile" && <img src={MiniPrefixImg} alt="pre" />}
                  </div>
                  <div>
                    <h3 onClick={() => navigate("/faga-authentication")}>2FA/GA Authentication</h3>
                    {location.pathname === "/faga-authentication" && (
                      <img src={MiniPrefixImg} alt="pre" />
                    )}
                  </div>
                  <div>
                    <h3 onClick={() => navigate("/api-management")}>API Management</h3>
                    {location.pathname === "/api-management" && (
                      <img src={MiniPrefixImg} alt="pre" />
                    )}
                  </div>
                  <div>
                    <h3 onClick={() => navigate("/change-password")}>Change Password</h3>
                    {location.pathname === "/change-password" && (
                      <img src={MiniPrefixImg} alt="pre" />
                    )}
                  </div>
                  <div>
                    <h3 onClick={handleLogout}>Log out</h3>
                  </div>
                </div>
              ) : null}
            </div>
          </div>
        </div>
      ) : (
        <div className="sidebar_close">
          <div className="sidebar_logo">
            <LogoNoText />
            <ArrowRight onClick={() => setIsSidebarClose(false)} className="sidebar_close_icon" />
          </div>
          <div className="sidebar_list_item">
            <div className="sidebar_item">
              <Home onClick={() => navigate("/")} />
            </div>
            <div className="sidebar_item">
              <AccountDetail onClick={() => setisVisibleAccountDetails((prev) => !prev)} />
            </div>
            <div className="sidebar_item">
              <Transfer onClick={() => setisVisibleTransfer((prev) => !prev)} />
            </div>
            <div className="sidebar_item">
              <Setting onClick={() => setisVisibleSettings((prev) => !prev)} />
            </div>
          </div>
        </div>
      )}
    </StyledSidebar>
  );
};
