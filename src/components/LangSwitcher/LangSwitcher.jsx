import React from "react";

const LangSwitcher = () => {
  return (
    <div>
      <h2>Lang Switcher</h2>

      <select value="en">
        <option value="uk">Uk</option>
        <option value="en">En</option>
        <option value="de">De</option>
      </select>
    </div>
  );
};

export default LangSwitcher;
