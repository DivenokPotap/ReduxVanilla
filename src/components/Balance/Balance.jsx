import React from "react";
import { useSelector } from "react-redux";

const Balance = () => {
  const balance = useSelector((state) => state.account.balance)
  return <div>Balance {balance}</div>;
};

export default Balance;