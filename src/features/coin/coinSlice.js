import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import coinService from "./coinService";

const coinSlice = createSlice({
  name: "coin",
  initialState: {
    trendingCoins: [],
    coins: [],
    coin: {},
    isLoading: false,
    isSuccess: false,
    isError: false,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder

      .addCase(getTrendingCoins.pending, (state, action) => {
        state.isLoading = true;
        state.isSuccess = false;
        state.isError = false;
      })
      .addCase(getTrendingCoins.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.trendingCoins = action.payload;
        state.isError = false;
      })
      .addCase(getTrendingCoins.rejected, (state, action) => {
        state.isLoading = false;
        state.isSuccess = false;
        state.isError = true;
      })
      .addCase(getSearchedCoins.pending, (state, action) => {
        state.isLoading = true;
        state.isSuccess = false;
        state.isError = false;
      })
      .addCase(getSearchedCoins.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.coins = action.payload;
        state.isError = false;
      })
      .addCase(getSearchedCoins.rejected, (state, action) => {
        state.isLoading = false;
        state.isSuccess = false;
        state.isError = true;
      })
       .addCase(getCoinDetails.pending, (state, action) => {
      state.isLoading = true;
      state.isSuccess = false;
      state.isError = false;
    })
      .addCase(getCoinDetails.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.coin = action.payload;
        state.isError = false;
      })
      .addCase(getCoinDetails.rejected, (state, action) => {
        state.isLoading = false;
        state.isSuccess = false;
        state.isError = true;
        
      });
  },
});

export default coinSlice.reducer;

//  get tranding coin

export const getTrendingCoins = createAsyncThunk(
  "FETCH / TRANDING_COINS",
  async () => {
    try {
      return await coinService.fetchTrendingCoins();
    } catch (error) {
      console.log(error);
    }
  }
);
//  Search coin

export const getSearchedCoins = createAsyncThunk(
  "FETCH / SEARCHED_COINS",
  async (searchTerm) => {
    try {
      return await coinService.searchCoins(searchTerm);
    } catch (error) {
      console.log(error);
    }
  }
);

//   coin deta

export const getCoinDetails = createAsyncThunk("FETCH/COIN", async (id) => {
  try {
    return await coinService.fetchCoinDetails(id);
  } catch (error) {
    console.log(error);
  }
});
