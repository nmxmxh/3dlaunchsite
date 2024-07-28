import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "../store";

interface OptionsState {
  first_time: boolean;
  loading: boolean;
  show_options: "show" | "hide";
}

const initialState: OptionsState = {
  first_time: true,
  loading: true,
  show_options: "show",
};

export const optionsSlice = createSlice({
  name: "options",
  initialState,
  reducers: {
    changeOptionsState: (state, action: PayloadAction<OptionsState>) => {
      return {
        ...state,
        ...action.payload,
      };
    },
  },
});

export const { changeOptionsState } = optionsSlice.actions;
export const selectOptions = (state: RootState): OptionsState => state.options;

export default optionsSlice.reducer;
