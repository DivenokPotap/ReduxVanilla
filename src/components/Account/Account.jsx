import React, { useState } from "react";
import Balance from "../Balance/Balance";
import { useDispatch } from "react-redux";
import { deposit,withdraw } from "@/redux/actions";

const Account = () => {
  const [inputValue, setInputValue] = useState(0);
  const dispatch = useDispatch();

  const handleDeposit = () => {
    const amount = Number(inputValue);
    if (amount > 0) {
      dispatch(deposit(amount));
      setInputValue('')
    }
  };

    const handleWithdraw = () => {
    const amount = Number(inputValue);
    if (amount > 0) {
      dispatch(withdraw(amount));
      setInputValue('')
    }
    };

  return (
    <section>
      <h1>Account</h1>

      <input type="number" name="balance" value={inputValue} onChange={((e) => setInputValue(e.target.value))}/>

      <br />

      <Balance />

      <button onClick={handleDeposit} type="button">Deposit</button>
      <button onClick={handleWithdraw} type="button">Withdraw</button>
    </section>
  );
};
export default Account;
