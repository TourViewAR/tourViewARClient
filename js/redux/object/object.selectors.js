import { createSelector } from 'reselect';

const selectObject = state => state.object;

export const selectObjectXyzCoordinate = createSelector(
  [selectObject],
  object => object.xyzCoordinate
);

export const selectObjectId = createSelector(
  [selectObject],
  object => object.objectId
);

export const selectTourId = createSelector(
  [selectObject],
  object => object.tourId
);

export const selectObjectType = createSelector(
  [selectObject],
  object => object.type
);

export const selectObjectScale = createSelector(
  [selectObject],
  object => object.scale
);