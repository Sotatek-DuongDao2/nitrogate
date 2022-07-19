import React from "react";
import clsx from "clsx";

import { Aggregated } from "@components";
import Us2Img from "../../Images/Us2Coint.png";
import ErcImg from "../../Images/ErcCoin.png";

const ar = [
  {
    icon: <img src={Us2Img} alt="us2" />,
    name: "USDT-TRC20",
    value: 123,
  },
  {
    icon: <img src={Us2Img} alt="us2" />,
    name: "USDT-ERC20",
    value: 111,
  },
  {
    icon: <img src={ErcImg} alt="erc" />,
    name: "USDT-ERC20",
    value: 8686,
  },
  {
    icon: <img src={Us2Img} alt="us2" />,
    name: "US2",
    value: 8888,
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
