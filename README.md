# Practice vanilla redux

# QA

1. Redux is a library or framework ?
2. What is action ?
3. Who delivery action to store ?
4. Who handling actions ?
5. Where handling actions ?
6. How to combine some reducers ?
7. How to handle actions ?
8. When reducers invokes ?

## Tasks

Need to install

- redux
- @redux-devtools/extension
- react-redux

Team lead create repo and add participants

1. Connect redux to project
2. Add route /account
3. Create store with 2 key account, locale
4. Create accountReducer.js + add actions
5. Create actions.js and add all actions
6. Create localeReducer.js + add actions
7. Create reducers for accountReducer, localeReducer
8. Must be such actions:

- "account/deposit"
- "account/withdraw"
- "locale/changeLang"

9. Create Component LangSwitcher.jsx that should have a logic to change lang globally
10. Show current locale(lang) in App

11. Add re-export
12. Fix imports like this ../Balance/Balance"
13. Add lazy for AccountPage

#### Debugger
