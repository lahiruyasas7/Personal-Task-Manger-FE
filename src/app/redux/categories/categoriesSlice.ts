// redux/features/category/categorySlice.ts
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface Category {
  categoryId: string;
  categoryName: string;
  subCategoryCount: string;
  description: string;
}

interface CategoryState {
  categoryList: Category[] | null;
}

const initialState: CategoryState = {
  categoryList: null,
};

const categorySlice = createSlice({
  name: "category",
  initialState,
  reducers: {
    getAllCategory(state, action: PayloadAction<string>) {
      // optional: set loading state or clear errors
    },
    getCategoryDataSuccess(state, action: PayloadAction<Category[]>) {
      state.categoryList = action.payload;
    },
    getCategoryDataFail(state) {
      state.categoryList = [];
    },
  },
});

export const { getAllCategory, getCategoryDataSuccess, getCategoryDataFail } =
  categorySlice.actions;

export default categorySlice.reducer;
