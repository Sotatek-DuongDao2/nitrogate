import React, { ReactNode } from "react";
// import s from "./FlexTable.module.scss";
import c from "classnames";

import { StyledFlexTable } from "./styles";

type Props = {
  head?: ReactNode[];
  body: ReactNode[][];
  tableStyle?: React.CSSProperties;
  headStyle?: React.CSSProperties;
  bodyStyle?: React.CSSProperties;
  headClassName?: string;
  bodyClassName?: string;
  noData?: ReactNode;
};
export const FlexTable = ({
  head,
  body,
  headStyle,
  headClassName,
  bodyClassName,
  tableStyle,
  noData,
}: Props) => {
  const renderHeader = (item: ReactNode, index: number) => (
    <th className="cell" key={index}>
      {item}
    </th>
  );
  const renderCell = (item: ReactNode, index: number) => (
    <td className="cell" key={index}>
      {item}
    </td>
  );

  return (
    <StyledFlexTable>
      <table className="table" style={{ ...tableStyle }}>
        {head && (
          <thead>
            <tr className={c("head", headClassName)} style={{ ...headStyle }}>
              {head.map(renderHeader)}
            </tr>
          </thead>
        )}

        <tbody className={c("body", bodyClassName)}>
          {body.map((row, index) => (
            <tr key={index}>{row.map(renderCell)}</tr>
          ))}
        </tbody>
      </table>
      {noData}
    </StyledFlexTable>
  );
};
