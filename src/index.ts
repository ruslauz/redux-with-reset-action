import { Reducer, AnyAction } from 'redux';

const withResetAction = <T>(
  reducer: Reducer<T, AnyAction>,
  actionType: string
): Reducer<T, AnyAction> => (state, action) => {
  if (action.type === actionType) {
    return reducer(undefined, action);
  }
  return reducer(state, action);
};

export default withResetAction;
