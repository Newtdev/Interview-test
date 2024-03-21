import { combineReducers } from "@reduxjs/toolkit";

import { KrextQueryApi } from "apis/QueryApi";
import globalSlice from "./StoreSlice";

export const reducers = combineReducers({
  // [stateQueryApi.reducerPath]: stateQueryApi.reducer,
  [globalSlice.name]: globalSlice.reducer,
  [KrextQueryApi.reducerPath]: KrextQueryApi.reducer,
});
