# Redux with reset action

A HOF for `Redux` reducers. It helps to add an action for resetting the Redux store.

## Installation and Setup

### Installation

### Usage

```js
import { combineReducers } from 'redux';
import { LOGOUT } from './actionTypes';

const rootReducer = combineReducers({
  // Your reducers
});

export default withResetAction(rootReducer, LOGOUT);
// Resets store after logout
```
