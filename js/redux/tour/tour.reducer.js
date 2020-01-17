const INITIAL_STATE = {
  sceneImgs: [],
  sceneObjs: [],
  latLongAlt: [],
  ownerId: '',
  tourId: ''
}

const TourReducer = (state=INITIAL_STATE, action) => {
  switch (action.type) {
    case 'SET_SCENE_IMGS':
      return ({
        ...state,
        sceneImgs: action.payload
      });
    case 'SET_SCENE_OBJS':
      return ({
        ...state,
        sceneObjs: action.payload
      });
    case 'SET_LAT_LONG_ALT':
      return ({
        ...state,
        latLongAlt: action.payload
      });
    case 'SET_OWNER_ID':
      return ({
        ...state,
        ownerId: action.payload
      });
    case 'SET_TOUR_ID':
      return ({
        ...state,
        tourId: action.payload
      });
    default:
      return state;
  }
};

export default TourReducer;