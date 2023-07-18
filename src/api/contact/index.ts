import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { db } from "../firebase";
import { RootState } from "../store";

interface Contact {
  nameContact: string;
  emailContact: string;
  phoneContact: number;
  addressContact: string;
  descriptionContact: string;
}

interface ContactState {
  data: Contact[];
  loading: boolean;
  error: string | null;
}

const initialState: ContactState = {
  data: [],
  loading: false,
  error: null,
};

export const addData = createAsyncThunk(
  "data/addData",
  async (newData: Omit<Contact, "id">, { getState }) => {
    const { data } = (getState() as RootState).data;
    const newId = Date.now().toString();
    const updatedData = [...data, { ...newData, id: newId }];

    try {
      // Cập nhật dữ liệu trong Firestore
      await db.collection("contact").doc(newId).set(newData);

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
