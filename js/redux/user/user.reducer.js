const INITIAL_STATE = {
  displayName: '',
  email: '',
  password: '', // assuming we dont actually want to store this in state? not sure
  profilePic: '',
  tours: [],
  userId: ''
}

const UserReducer = (state=INITIAL_STATE, action) => {
  switch (action.type) {
    case 'SET_USER_DISPLAY_NAME':
      return ({
        ...state,
        displayName: action.payload
      });
    case 'SET_USER_EMAIL':
      return ({
        ...state,
        email: action.payload
      });
    case 'SET_USER_PASSWORD':
      return ({
        ...state,
        password: action.payload
      });
    case 'SET_USER_PROFILE_PIC':
      return ({
        ...state,
        profilePic: action.payload
      });
    case 'SET_USER_TOUR':
      return ({
        ...state,
        tours: action.payload
      });
    case 'SET_USER_ID':
      return ({
        ...state,
        userId: action.payload
      })
    default:
      return state;
  }
};

export default UserReducer;