const initialLang = { lang: "Uk" };

export default function localeReducer(state = initialLang, action) {
  switch (action.type) {
    case "locale/changeLang":
      return { ...state, lang: action.payload };
    default:
      return state;
  }
}
