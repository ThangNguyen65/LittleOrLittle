import { configureStore, ThunkAction, Action } from "@reduxjs/toolkit";
import dataReducer from "../api/action";
import paySuccessReducer from "./paySuccess/paySuccessSlice";
import Pay from "./pay/actionPay";
import Contact from "./contact/index";
const store = configureStore({
  reducer: {
    data: dataReducer,
    paySuccess: paySuccessReducer,
    pay: Pay,
    contact: Contact,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;

export default store;
