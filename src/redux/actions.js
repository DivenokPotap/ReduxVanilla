export const changeLang = (newLang) => ({
  type: "locale/changeLang",
  payload: newLang,
});

export const deposit = (amount) => ({
  type: "account/deposit",
  payload: amount,
});
export const withdraw = (amount) => ({
  type: "account/withdraw",
  payload: amount,
});


// actions