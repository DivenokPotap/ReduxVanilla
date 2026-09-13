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

export const changeFilter = (text) => ({
  type: "filter/changeValue",
  payload: text,
});


export const increment = () => ({
  type: "count/increment",
  payload: 1,
});
export const decrement = () => ({
  type: "count/decrement",
  payload: 1,
});

export const reset = (initialState) => ({
  type: "count/reset",
  payload: initialState,
});



// actions