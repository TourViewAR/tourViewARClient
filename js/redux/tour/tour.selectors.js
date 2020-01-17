import { createSelector } from 'reselect';

const selectTour = state => state.tour;

export const selectSceneImgs = createSelector(
  [selectTour],
  tour => tour.sceneImgs
);

export const selectSceneObjs = createSelector(
  [selectTour],
  tour => tour.sceneObjs
);

export const selectLatLongAlt = createSelector(
  [selectTour],
  tour => tour.latLongAlt
);

export const selectOwnerId = createSelector(
  [selectTour],
  tour => tour.ownerId
);

export const selectTourId = createSelector(
  [selectTour],
  tour => tour.tourId
);