import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { getSalesData } from "../../api/getSalesData";

export interface IStateSales {
    data: { [year: string]: number };
}

const initialState: IStateSales = {
    data: {},
};

export const getData = createAsyncThunk(
    "sales/getData",
    async () => {
        const response = await getSalesData();
        const yearData = response.year;
        const salesByYear: { [year: string]: number } = {};

        // Преобразуем объект year с годами и продажами в нужный формат
        Object.keys(yearData).forEach((year) => {
            salesByYear[year] = parseInt(yearData[year], 10);
        });

        return salesByYear;
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
            });
    },
});

export default salesSlice.reducer;