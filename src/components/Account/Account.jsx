import React from "react";
import Balance from "../Balance/Balance";

const Account = () => {
  return (
    <section>
      <h1>Account</h1>

      <input type="number" name="balance" />

      <br />

      <Balance />

      <button type="button">Deposit</button>
      <button type="button">Withdraw</button>
    </section>
  );
};
export default Account;
