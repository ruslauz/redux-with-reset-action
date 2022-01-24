# Redux with reset action

A HOF for `Redux` reducers. It helps to add an action for resetting the Redux store.

## Installation and Setup

### Installation

NPM

```
npm i @ruslanuz/redux-with-reset-action
```

Yarn

```
yarn add @ruslanuz/redux-with-reset-action
```

### Usage

```js
import { combineReducers } from 'redux';
import withResetAction from '@ruslanuz/redux-with-reset-action';

const LOGOUT = 'LOGOUT';

const rootReducer = combineReducers({
  // Your reducers
});

export default withResetAction(rootReducer, LOGOUT);
// Resets store after logout
```
