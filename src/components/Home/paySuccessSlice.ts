import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { db } from "../firebase";

// Action async để gọi Firebase và lấy quantity từ id
export const fetchQuantityById = createAsyncThunk(
  "paySuccess/fetchQuantityById",
  async (id: string) => {
    try {
      // Gọi Firebase và lấy dữ liệu tương ứng với id
      const docRef = db.collection("TicketBook").doc(id);
      const doc = await docRef.get();
      const quantity = doc.exists ? doc.data()?.quantity : undefined;
      const dateUsed = doc.exists ? doc.data()?.dateUsed : undefined;
      const image = doc.exists ? doc.data()?.image : undefined;
      const namePaySuccess = doc.exists
        ? doc.data()?.namePaySuccess
        : undefined;
      // Trả về quantity và dateUsed cho payload của action
      return { quantity, dateUsed, image, namePaySuccess };
    } catch (error) {
      // Xử lý lỗi nếu có
      console.error("Error fetching quantity from Firebase:", error);
      throw error;
    }
  }
);

// Slice của Redux toolkit
const paySuccessSlice = createSlice({
  name: "paySuccess",
  initialState: {
    quantity: 0,
    dateUsed: "",
    image: "",
    namePaySuccess: "",
    loading: false,
    error: null,
  },
  reducers: {
    // Các reducers khác (nếu có)
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchQuantityById.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchQuantityById.fulfilled, (state, action) => {
        state.quantity = action.payload.quantity;
        state.dateUsed = action.payload.dateUsed;
        state.image = action.payload.image;
        state.namePaySuccess = action.payload.namePaySuccess;
        state.loading = false;
        state.error = null;
      })
      .addCase(fetchQuantityById.rejected, (state: any, action) => {
        state.loading = false;
        state.error = action.error.message;
      });
  },
});

export const { actions } = paySuccessSlice;

export default paySuccessSlice.reducer;
