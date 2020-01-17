export const setUserDisplayName = name => {
  return {
    type: "SET_USER_DISPLAY_NAME",
    payload: name
  };
};

export const setUserEmail = email => {
  return {
    type: "SET_USER_EMAIL",
    payload: email
  };
};

export const setUserPassword = password => {
  return {
    type: "SET_USER_PASSWORD",
    payload: password
  };
};

export const setUserProfilePic = pic => {
  return {
    type: "SET_USER_PROFILE_PIC",
    payload: pic
  };
};

export const setUserTour = tour => {
  return {
    type: "SET_USER_TOUR",
    payload: tour
  };
};

export const setUserId = id => {
  return {
    type: "SET_USER_ID",
    payload: id
  };
};
