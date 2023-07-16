import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { RootState } from "../store";
import { db } from "../firebase";

interface Pay {
  id: string;
  packageType: string;
  quantity: number;
  dateUsed: string;
  fullName: string;
  phoneNumber: number;
  email: string;
  cardNumber: string;
  cardHolder: string;
  expirationDate: string;
  cvv: string;
  price: number;
  image: string;
  namePaySuccess: string;
}

interface DataState {
  data: Pay[];
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
  async (newData: Omit<Pay, "id">, { getState }) => {
    const { data } = (getState() as RootState).data;
    const newId = Date.now().toString();
    const updatedData = [...data, { ...newData, id: newId }];

    try {
      // Cập nhật dữ liệu trong Firestore
      await db.collection("TicketBook").doc(newId).set(newData);

      // Trả về dữ liệu đã được cập nhật
      return updatedData;
    } catch (error) {
      throw error;
    }
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
