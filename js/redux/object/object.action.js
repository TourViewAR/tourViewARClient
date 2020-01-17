export const setObjectXyzCoordinate = (coordinate) => {
  return ({
    type: 'SET_XYZ_COORDINATE',
    payload: coordinate
  });
};

export const setObjectId = (id) => {
  return ({
    type: 'SET_OBJECT_ID',
    payload: id
  });
};

export const setTourId = (id) => {
  return ({
    type: 'SET_TOUR_ID',
    payload: id
  });
};

export const setObjectType = (type) => {
  return ({
    type: 'SET_OBJ_TYPE',
    payload: type
  });
};

export const setObjectScale = (scale) => {
  return ({
    type: 'SET_OBJ_SCALE',
    payload: scale
  });
};