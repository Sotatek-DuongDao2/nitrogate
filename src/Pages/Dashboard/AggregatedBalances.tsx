import React from "react";

import { Aggregated } from "@components";
import clsx from "clsx";

const ar = [
  {
    icon: <div></div>,
    name: "USDT-TRC20",
    value: 230123123,
  },
  {
    icon: <div></div>,
    name: "USDT-TRC20",
    value: 230123123,
  },
  {
    icon: <div></div>,
    name: "USDT-TRC20",
    value: 230123123,
  },
  {
    icon: <div></div>,
    name: "USDT-TRC20",
    value: 230123123,
  },
];

interface IAggregatedBalances {
  classname?: string;
}
export const AggregatedBalances = (props: IAggregatedBalances) => {
  const { classname } = props;
  return (
    <div className={clsx(classname !== undefined && classname)}>
      <Aggregated title="Aggregated Balances" items={ar} viewmore={true} />
    </div>
  );
};
