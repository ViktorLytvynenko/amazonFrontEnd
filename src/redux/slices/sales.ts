import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import {getSalesData} from "../../api/getSalesData";

export interface IStateSales {
    data: any;
}

const initialState: IStateSales = {
    data: {},
};

export const getData = createAsyncThunk(
    "sales/getData",
    async () => {
        const response = await getSalesData();
        const yearData = response[0].year;
        return Object.keys(yearData).map((year) => ({
           year,
            sales: parseInt(yearData[year], 10),
        }));
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