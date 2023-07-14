import { configureStore, ThunkAction, Action } from "@reduxjs/toolkit";
import dataReducer from "../components/action";
import paySuccessReducer from "../components/Home/paySuccessSlice";
const store = configureStore({
  reducer: {
    data: dataReducer,
    paySuccess: paySuccessReducer,
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
