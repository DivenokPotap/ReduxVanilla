import { changeLang } from "@/redux/localeSlice";
import { getCurrentLang } from "@/redux/selectors";
import React from "react";
import { useDispatch, useSelector } from "react-redux";

const LangSwitcher = () => {
  const dispatch = useDispatch()
  const currentLang = useSelector(getCurrentLang);
  const handleChange = (event) => {
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