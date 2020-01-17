import { createSelector } from 'reselect';

const selectUser = state => state.user;

export const selectUserDisplayName = createSelector(
  [selectUser],
  user => user.displayName
);

export const selectUserEmail = createSelector(
  [selectUser],
  user => user.email
);

export const selectUserPassword = createSelector(
  [selectUser],
  user => user.password
);

export const selectUserProfilePic = createSelector(
  [selectUser],
  user => user.profilePic
);

export const selectUserTour = createSelector(
  [selectUser],
  user => user.tours
);

export const selectUserId = createSelector(
  [selectUser],
  user => user.userId
);