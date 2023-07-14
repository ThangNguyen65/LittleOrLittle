import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { RootState } from "../store";
import { db } from "../firebase";
import { TicketBook } from "../TypeTicketBook";

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
  async (newData: Omit<TicketBook, "id">, { getState }) => {
    const { data } = (getState() as RootState).data;
    const newId = Date.now().toString();
    const updatedData = [...data, { ...newData, id: newId }];

    try {
      await db.collection("TicketBook").doc(newId).set(newData);
      return updatedData as TicketBook[];
    } catch (error) {
      throw error;
    }
  }
);

export const updateData = createAsyncThunk(
  "data/updateData",
  async (updatedData: TicketBook) => {
    try {
      const { id, ...dataWithoutId } = updatedData;
      await db.collection("TicketBook").doc(id).update(dataWithoutId);
      return updatedData as TicketBook;
    } catch (error) {
      throw new Error("Failed to update data.");
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
      .addCase(addData.fulfilled, (state, action) => {
        state.data = action.payload;
        state.loading = false;
        state.error = null;
      })
      .addCase(addData.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message || "Error occurred";
      })
      .addCase(updateData.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(updateData.fulfilled, (state, action) => {
        const updatedData = action.payload;
        const index = state.data.findIndex(
          (item) => item.id === updatedData.id
        );
        if (index !== -1) {
          state.data[index] = updatedData;
        }
        state.loading = false;
        state.error = null;
      })
      .addCase(updateData.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message || "Error occurred";
      });
  },
});

export default dataSlice.reducer;

export const selectData = (state: RootState) => state.data.data;
export const selectLoading = (state: RootState) => state.data.loading;
export const selectError = (state: RootState) => state.data.error;
