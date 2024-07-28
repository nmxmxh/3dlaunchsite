import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import gsap from "gsap";
import { RootState } from "../store";

const initialState: gsap.core.Timeline = gsap.timeline();

export const timelineSlice = createSlice({
  name: "main-timeline",
  initialState,
  reducers: {},
});

export const {} = timelineSlice.actions;
export const mainTimelineFromRedux = (state: RootState) => state.options;

export default timelineSlice.reducer;
