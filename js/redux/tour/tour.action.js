export const setSceneImgs = (img) => {
  return ({
    type: 'SET_SCENE_IMGS',
    payload: img
  });
};

export const setSceneObjs = (obj) => {
  return ({
    type: 'SET_SCENE_OBJS',
    payload: obj
  });
};

export const setLatLongAlt = (coordinate) => {
  return ({
    type: 'SET_LAT_LONG_ALT',
    payload: coordinate
  });
};

export const setOwnerId = (id) => {
  return ({
    type: 'SET_OWNER_ID',
    payload: id
  });
};

export const setTourId = (id) => {
  return ({
    type: 'SET_TOUR_ID',
    payload: id
  });
};