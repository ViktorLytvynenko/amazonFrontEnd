import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import {getSalesData} from "../../api/getSalesData";

export interface IStateSales {
    data: any;
}

const initialState: IStateSales = {
    data: [],
};

export const getData = createAsyncThunk(
    "sales/getData",
    async () => {
        try {
            return await getSalesData();
        } catch (error) {
            throw Error("Failed to fetch sales data");
        }
    }
);

export const salesSlice = createSlice({
    name: "sales",
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(getData.fulfilled, (state, action) => {
                state.data = action.payload;
            })
    },
});

export default salesSlice.reducer;