import { createSelector } from 'reselect';

const selectTour = state => state.tour;

export const selectTourId = createSelector(
  [selectTour],
  tour => tour.id
);

export const selectTourName = createSelector(
  [selectTour],
  tour => tour.tour_name
);

export const selectTourPanoPhoto = createSelector(
  [selectTour],
  tour => tour.pano_photos
);

export const selectTourIdUser = createSelector(
  [selectTour],
  tour => tour.id_user
);