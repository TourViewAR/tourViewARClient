import { createSelector } from "reselect";

const selectRender = state => state.render;

export const selectLogOutRender = createSelector(
  [selectRender],
  render => render.logout
);
