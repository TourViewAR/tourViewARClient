const INITIAL_STATE = {
  xyzCoordinate: [],
  objectId: '',
  tourId: '', // id from the tours schema should we rename this sceneId??
  type: '',
  scale: []
}

const ObjectReducer = (state=INITIAL_STATE, action) => {
  switch (action.type) {
    case 'SET_XYZ_COORDINATE':
      return ({
        ...state,
        xyzCoordinate: action.payload
      });
    case 'SET_OBJECT_ID':
      return ({
        ...state,
        objectId: action.payload
      });
    case 'SET_TOUR_ID':
      return ({
        ...state,
        tourId: action.payload
      });
    case 'SET_OBJ_TYPE': // should rename this to just SET_TYPE?
      return ({
        ...state,
        type: action.payload
      });
    case 'SET_OBJ_SCALE':
      return ({
        ...state,
        scale: action.payload
      })
    default:
      return state;
  }
};

export default ObjectReducer;