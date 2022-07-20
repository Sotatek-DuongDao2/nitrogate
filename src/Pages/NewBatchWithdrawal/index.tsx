import React, { useCallback } from "react";
import styled from "styled-components";
import { CSVLink } from "react-csv";
import { useDropzone } from "react-dropzone";

import { StyledCard, StyledTitlePage } from "@styles";
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
        <img src={uploadCsvImg} alt="upload" />

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
              Attach completed CSV
            </>
          )}
        </div>

        <div className="generate">
          <CSVLink data={csvData} filename={"my-file.csv"} target="_blank">
            <Generate />
            Generate csv
          </CSVLink>
        </div>

        <button className="btn_next">Next</button>
      </StyledCard>
    </StyledNewBatchWithdrawal>
  );
};

const StyledNewBatchWithdrawal = styled.div`
  .new_batch_container {
    width: 40%;
  }
  .generate {
    cursor: pointer;
    width: 100%;
    margin-bottom: 10px;
    background: #e9edf3;
    border-radius: 4px;
  }
  .btn_next {
    width: 100%;
    cursor: pointer;
  }
`;
