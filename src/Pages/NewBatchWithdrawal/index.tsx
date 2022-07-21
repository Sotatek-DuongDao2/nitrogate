import React, { useCallback } from "react";
import styled from "styled-components";
import { CSVLink } from "react-csv";
import { useDropzone } from "react-dropzone";

import { StyledCard, StyledTitlePage, StyledButton } from "@styles";
import uploadCsvImg from "../../Images/UploadCsv.png";
import { Generate } from "@images";

const csvData = [
  ["firstname", "lastname", "email"],
  ["Ahmed", "Tomi", "ah@smthing.co.com"],
  ["Raed", "Labes", "rl@smthing.co.com"],
  ["Yezzi", "Min l3b", "ymin@cocococo.com"],
];

export const NewBatchWithdrawal = () => {
  const onDrop = useCallback((acceptedFiles: any) => {
    // Do something with the files
    console.log(acceptedFiles);
    // acceptedFiles.forEach((file: any) => {
    //   const reader = new FileReader();

    //   reader.onabort = () => console.log("file reading was aborted");
    //   reader.onerror = () => console.log("file reading has failed");
    //   reader.onload = () => {
    //     // Do whatever you want with the file contents
    //     const binaryStr = reader.result;
    //     console.log(binaryStr);
    //   };
    //   reader.readAsArrayBuffer(file);
    // });
  }, []);
  const { getRootProps, getInputProps, isDragActive } = useDropzone({ onDrop });

  return (
    <StyledNewBatchWithdrawal>
      <StyledTitlePage>New Batch Withdrawals</StyledTitlePage>
      <StyledCard className="new_batch_container">
        <div>
          <img src={uploadCsvImg} alt="upload" />
        </div>

        <div {...getRootProps()} className="generate">
          <input {...getInputProps()} />
          {isDragActive ? (
            <>
              <Generate />
              <p>Drop here ...</p>
            </>
          ) : (
            <>
              <Generate />
              <h3> Attach completed CSV</h3>
            </>
          )}
        </div>

        <div className="generate last_generate">
          <CSVLink data={csvData} filename={"my-file.csv"} target="_blank" className="generate_csv">
            <Generate />
            <h3> Generate csv</h3>
          </CSVLink>
        </div>

        <StyledButton className="btn_submit">
          <button className="btn_next">Next</button>
        </StyledButton>
      </StyledCard>
    </StyledNewBatchWithdrawal>
  );
};

const StyledNewBatchWithdrawal = styled.div`
  .new_batch_container {
    width: 40%;
  }

  .new_batch_container > div:first-child {
    display: flex;
    align-items: center;
    justify-content: center;

    padding: 76px 0;
  }

  .generate {
    cursor: pointer;

    display: flex;
    align-items: center;

    width: 100%;
    height: 35px;
    padding-left: 125px;
    margin-bottom: 20px;

    background: #e9edf3;
    border-radius: 4px;

    h3 {
      margin: 0;

      font-weight: 700;
      font-size: 14px;
      line-height: 22px;

      letter-spacing: -0.2px;

      color: #1e87f0;
    }

    .generate_csv {
      display: flex;
    }
  }

  .last_generate {
    margin-bottom: 40px;
  }

  .btn_submit {
    input {
      cursor: pointer;
      width: 100%;
    }
  }
`;
