import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { RootState } from "./store";
import { db } from "./firebase";
interface Data {
  id: string;
  name: string;
  description: string;
  description1: string;
  description2: string;
  description3: string;
  date: String;
  price: number;
  image: string;
  image1: string;
  image2: string;
}

interface DataState {
  data: Data[];
  loading: boolean;
  error: string | null;
}

const initialState: DataState = {
  data: [],
  loading: false,
  error: null,
};
export const fetchData = createAsyncThunk("data/fetchData", async () => {
  const querySnapshot = await db.collection("Even").get();
  const dataList: Data[] = [];
  querySnapshot.forEach((doc) => {
    const docData = doc.data();
    if (
      docData.name &&
      docData.price &&
      docData.image &&
      docData.image1 &&
      docData.image2 &&
      docData.description &&
      docData.description1 &&
      docData.description2 &&
      docData.description3 &&
      docData.date
    ) {
      const newItem: Data = {
        id: doc.id,
        name: docData.name,
        price: docData.price,
        image: docData.image,
        image1: docData.image1,
        image2: docData.image2,
        description: docData.description,
        description1: docData.description1,
        description2: docData.description2,
        description3: docData.description3,
        date: docData.date,
      };

      // Kiểm tra xem id đã tồn tại trong danh sách hay chưa
      const existingItem = dataList.find((item) => item.id === newItem.id);
      if (!existingItem) {
        dataList.push(newItem);
      }
    }
  });
  return dataList;
});

const dataSlice = createSlice({
  name: "data",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchData.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchData.fulfilled, (state, action) => {
        // Kiểm tra xem dữ liệu mới đã tồn tại trong state hay chưa
        const newData = action.payload.filter((newItem) => {
          return !state.data.some(
            (existingItem) => existingItem.id === newItem.id
          );
        });

        // Thêm dữ liệu mới vào state
        state.data = [...state.data, ...newData];
        state.loading = false;
        state.error = null;
      })
      .addCase(fetchData.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message || "Error occurred";
      });
  },
});

export default dataSlice.reducer;

export const selectData = (state: RootState) => state.data.data;
export const selectLoading = (state: RootState) => state.data.loading;
export const selectError = (state: RootState) => state.data.error;
