import React from "react";
import styled from "styled-components";
import { useFormik } from "formik";
import { Select } from "antd";

import "antd/dist/antd.min.css";

import { StyledCard, StyledTitlePage } from "@styles";
import { validationSchemaNewWithdrawal } from "@utils";

interface IWithdrawal {
  chain: string;
  address: string;
  withdrawalAmount: string;
  actualAmount: string;
  remarks: string;
}

export const NewWithdrawal = () => {
  const { Option } = Select;
  const { handleChange, values, handleSubmit, errors, touched, setFieldValue } = useFormik({
    initialValues: {
      chain: "",
      address: "",
      withdrawalAmount: "",
      actualAmount: "",
      remarks: "",
    },
    onSubmit: (values: IWithdrawal) => {
      console.log(values);
    },
    validationSchema: validationSchemaNewWithdrawal,
  });
  return (
    <StyledNewWithdrawal>
      <StyledTitlePage>NewWithdrawal</StyledTitlePage>
      <StyledCard className="form_login_container">
        <form className="form_login" onSubmit={handleSubmit}>
          <label htmlFor="chain">Select chain</label>
          <Select
            defaultValue="all"
            onChange={(option) => setFieldValue("chain", option)}
            value={values.chain}
            id="chain"
          >
            <Option value="all">all</Option>

            <Option value="1515">1515</Option>
            <Option value="1516">1516</Option>
          </Select>
          {errors.chain && touched.chain && <h4 className="error_message">{errors.chain}</h4>}

          <label htmlFor="address">Recipient address</label>
          <input
            type="input"
            name="address"
            id="address"
            maxLength={256}
            value={values.address}
            placeholder="Enter recipient address"
            onChange={handleChange}
          />
          {errors.address && touched.address && <h4 className="error_message">{errors.address}</h4>}

          <label htmlFor="withdrawalAmount">Withdrawal amount</label>
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

          <label htmlFor="actualAmount">Actual amount (after deducting fees)</label>
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

          <label htmlFor="remarks">Remarks</label>
          <input
            type="input"
            name="remarks"
            id="remarks"
            maxLength={256}
            value={values.remarks}
            placeholder="Enter Remarks"
            onChange={handleChange}
          />
          {errors.remarks && touched.remarks && <h4 className="error_message">{errors.remarks}</h4>}

          <button type="submit">Next</button>
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
  }
`;
