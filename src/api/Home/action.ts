import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { RootState } from "../store";

interface TicketBook {
  id: string;
  packageType: string;
  quantity: number;
  dateUsed: string;
  fullName: string;
  phoneNumber: number;
  email: string;
}
interface DataState {
  data: TicketBook[];
  loading: boolean;
  error: string | null;
}

const initialState: DataState = {
  data: [],
  loading: false,
  error: null,
};

export const addData = createAsyncThunk(
  "data/addData",
  (newData: Omit<TicketBook, "id">) => {
    return newData;
  }
);
const dataSlice = createSlice({
  name: "data",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(addData.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(addData.fulfilled, (state: any, action) => {
        state.data = action.payload;
        console.log(state.data);
        state.loading = false;
        state.error = null;
      })
      .addCase(addData.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message || "Error occurred";
      });
  },
});

export default dataSlice.reducer;

export const selectData = (state: RootState) => state.data.data;
export const selectLoading = (state: RootState) => state.data.loading;
export const selectError = (state: RootState) => state.data.error;
