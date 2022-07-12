import React from "react";
import { Routes, Route } from "react-router-dom";

import "./App.css";
import { AppLayout, LoginLayout } from "@layouts";
import {
  AccountDetail,
  APIManagement,
  ChangePassword,
  DashBoard,
  DepositsHistory,
  FAGAAuthentication,
  Login,
  MyProfile,
  NewBatchWithdrawal,
  NewDeposit,
  NewWithdrawal,
  ResetPassword,
  Transfer,
  WithdrawalHistory,
} from "@pages";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route element={<AppLayout />}>
          <Route index element={<DashBoard />} />
          <Route path="/account-detail" element={<AccountDetail />} />
          <Route path="/api-management" element={<APIManagement />} />
          <Route path="/change-password" element={<ChangePassword />} />
          <Route path="/deposits-history" element={<DepositsHistory />} />
          <Route path="/faga-authentication" element={<FAGAAuthentication />} />
          <Route path="/profile" element={<MyProfile />} />
          <Route path="/batch-withdrawal" element={<NewBatchWithdrawal />} />
          <Route path="/new-withdrawal" element={<NewWithdrawal />} />
          <Route path="/transfer" element={<Transfer />} />
          <Route path="/withdrawal-history" element={<WithdrawalHistory />} />
          <Route path="/new-deposit" element={<NewDeposit />} />
        </Route>
        <Route element={<LoginLayout />}>
          <Route path="/login" element={<Login />} />
          <Route path="/reset-password" element={<ResetPassword />} />
        </Route>
        <Route path="*" element={<>Not Found</>} />
      </Routes>
      {/* <ComponentToast /> */}
    </div>
  );
}

export default App;
