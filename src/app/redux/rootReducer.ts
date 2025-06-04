import { combineReducers } from '@reduxjs/toolkit';

const rootReducer = combineReducers({
  // add other reducers here
});

export type RootState = ReturnType<typeof rootReducer>;
export default rootReducer;
