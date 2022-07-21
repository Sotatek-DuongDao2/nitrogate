import React from "react";
import styled from "styled-components";
import { useFormik } from "formik";
import { Select } from "antd";

import "antd/dist/antd.min.css";

import { StyledCard, StyledTitlePage, StyledInput, StyledButton } from "@styles";
import { validationSchemaNewWithdrawal } from "@utils";
import { DropdownHeader } from "@images";

interface IWithdrawal {
  chain: string;
  address: string;
  withdrawalAmount: string;
  actualAmount: string;
  remarks: string;
}

export const NewWithdrawal = () => {
  const { Option } = Select;
  const { handleChange, values, handleSubmit, errors, touched, setFieldValue, resetForm } =
    useFormik({
      initialValues: {
        chain: "",
        address: "",
        withdrawalAmount: "",
        actualAmount: "",
        remarks: "",
      },
      onSubmit: (values: IWithdrawal) => {
        console.log(values);
        resetForm();
      },
      validationSchema: validationSchemaNewWithdrawal,
    });
  return (
    <StyledNewWithdrawal>
      <StyledTitlePage>NewWithdrawal</StyledTitlePage>
      <StyledCard className="form_login_container">
        <form className="form_login" onSubmit={handleSubmit}>
          <label htmlFor="chain">Select chain</label>
          <div className="form_login_select">
            <Select
              defaultValue="all"
              onChange={(option) => setFieldValue("chain", option)}
              value={values.chain}
              id="chain"
              suffixIcon={<DropdownHeader />}
            >
              <Option value="all">all</Option>
              <Option value="1515">1515</Option>
              <Option value="1516">1516</Option>
            </Select>

            {errors.chain && touched.chain && <h4 className="error_message">{errors.chain}</h4>}
          </div>

          <label htmlFor="address">Recipient address</label>
          <StyledInput className="form_login_item">
            <input
              type="input"
              name="address"
              id="address"
              maxLength={256}
              value={values.address}
              placeholder="Enter recipient address"
              onChange={handleChange}
            />

            {errors.address && touched.address && (
              <h4 className="error_message">{errors.address}</h4>
            )}
          </StyledInput>

          <label htmlFor="withdrawalAmount">Withdrawal amount</label>
          <StyledInput className="form_login_item">
            <input
              type="input"
              name="withdrawalAmount"
              id="withdrawalAmount"
              maxLength={256}
              value={values.withdrawalAmount}
              placeholder="Enter withdrawal amount"
              onChange={handleChange}
            />

            {errors.withdrawalAmount && touched.withdrawalAmount && (
              <h4 className="error_message">{errors.withdrawalAmount}</h4>
            )}
          </StyledInput>

          <label htmlFor="actualAmount">Actual amount (after deducting fees)</label>
          <StyledInput className="form_login_item">
            <input
              type="input"
              name="actualAmount"
              id="actualAmount"
              maxLength={256}
              value={values.actualAmount}
              placeholder="Enter Actual amount"
              onChange={handleChange}
            />

            {errors.actualAmount && touched.actualAmount && (
              <h4 className="error_message">{errors.actualAmount}</h4>
            )}
          </StyledInput>

          <label htmlFor="remarks">Remarks</label>
          <StyledInput className="form_login_item">
            <input
              type="input"
              name="remarks"
              id="remarks"
              maxLength={256}
              value={values.remarks}
              placeholder="Enter Remarks"
              onChange={handleChange}
            />
            {errors.remarks && touched.remarks && (
              <h4 className="error_message">{errors.remarks}</h4>
            )}
          </StyledInput>

          <StyledButton className="form_login_submit">
            <button type="submit">Next</button>
          </StyledButton>
        </form>
      </StyledCard>
    </StyledNewWithdrawal>
  );
};

const StyledNewWithdrawal = styled.div`
  .form_login_container {
    width: 45%;
  }

  .form_login {
    display: flex;
    flex-direction: column;

    label {
      font-weight: 600;
      font-size: 14px;
      line-height: 22px;

      letter-spacing: -0.2px;

      color: #626674;
    }

    .form_login_item,
    .form_login_select {
      width: 100%;
      margin-bottom: 20px;
    }

    .form_login_select {
      .ant-select {
        display: flex;
      }
      .ant-select-selector {
        height: 46px;
        width: 100%;
        border: 2px solid #d2d5e4;
        border-radius: 8px;
        background-color: transparent;
      }

      .ant-select-focused .ant-select-selector,
      .ant-select-selector:focus,
      .ant-select-selector:active,
      .ant-select-open .ant-select-selector {
        border-color: #d2d5e4 !important;
        box-shadow: none !important;
      }

      .ant-select-selector:hover {
        border-color: #d2d5e4 !important;
        box-shadow: none !important;
      }

      .ant-select-selection-item {
        display: flex;
        justify-content: center;
        align-items: center;
      }
    }
  }

  .error_message {
    color: red;
  }
`;
