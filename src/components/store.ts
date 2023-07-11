// Trong tệp store.ts
import { configureStore } from "@reduxjs/toolkit";
import dataReducer from "./action";

const store = configureStore({
  reducer: {
    data: dataReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
