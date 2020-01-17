export const renderLogOut = render => {
  return {
    type: "RENDER_HOME_PAGE",
    payload: render
  };
};

export const renderLogIn = render => {
  return {
    type: "RENDER_LOGIN_PAGE",
    payload: render
  };
};
