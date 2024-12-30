import { createSlice } from "@reduxjs/toolkit";

const searchSlice = createSlice({
  name: "search",
  initialState: {},
  reducers: {
    cacheResults: (state, action) => {
      // payload we are sending - {"ip":["iphone","iphone11","iphone12"]}
      // state = { ...state, ...action.payload };
      state = Object.assign(state, action.payload);

      //100's of search in one session is ok,make LRU or fix it 100 and start removing from top
    },
  },
});

export const { cacheResults } = searchSlice.actions;
export default searchSlice.reducer;
