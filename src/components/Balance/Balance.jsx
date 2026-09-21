import { getCurrentBalance } from "@/redux/selectors";
import React from "react";
import { useSelector } from "react-redux";

const Balance = () => {
  const balance = useSelector(getCurrentBalance)
  return <div>Balance {balance}</div>;
};

export default Balance;