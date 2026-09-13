import { changeLang } from "@/redux/actions";
import React from "react";
import { useDispatch, useSelector } from "react-redux";

const LangSwitcher = () => {
  const dispatch = useDispatch()
  const currentLang = useSelector((state) => state.locale.lang);
  const handleChange = (event) => {
    console.log(currentLang)
    const selectedLanguage = event.target.value;
    dispatch(changeLang(selectedLanguage))
  }
  return (
    <div>

      <select value={currentLang} onChange={handleChange}>
        <option value="Uk">Uk</option>
        <option value="En">En</option>
        <option value="De">De</option>
      </select>
    </div>
  );
};

export default LangSwitcher;

// lang