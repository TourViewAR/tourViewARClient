const INITIAL_STATE = {
  logout: true
};

const RenderReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case "RENDER_HOME_PAGE":
      return {
        ...state,
        logout: true
      };
    case "RENDER_LOGIN_PAGE":
      return {
        ...state,
        logout: false
      };
    default:
      return state;
  }
};

export default RenderReducer;
