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
  "paySuccess/addData",
  async (ticketData: any, thunkAPI) => {
    try {
      const docRef = await db.collection("TicketBook").add(ticketData);
      const id = docRef.id;
      return id;
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);

const dataSlice = createSlice({
  name: "data",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(addData.pending, (state, action) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(addData.fulfilled, (state, action) => {
        const id = action.payload;
        state.data = state.data.map((item) =>
          item.id === id ? { ...item, id } : item
        );
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
