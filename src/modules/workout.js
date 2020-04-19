import axios from 'axios/index';
export const GET_WORKOUT_REQUESTED = 'Workout/GET_WORKOUT_REQUESTED'
export const GET_WORKOUT_RECEIVED = 'Workout/GET_WORKOUT_RECEIEVED'

export default (state = [], action) => {
  switch (action.type) {
    case GET_WORKOUT_REQUESTED:
      console.log('GET WORKOUT REQUESTED')
      return {
        ...state,
        loading: true,
        data: action['Workout'].workout
      }

    case GET_WORKOUT_RECEIVED:
      console.log('GET WORKOUT RECEIVED');
      console.log(state)
      console.log(action)
      return {
        ...state,
        loading: false,
        data: action['Workout'].workout
      }
    default:
      return state
  }
}

export const getWorkout = params => (dispatch) => {
  dispatch(requestWorkout);
  axios.get(`https://v2-api.sheety.co/d15b0998a5ba722b2df7464f83e6a997/absWithKevinApi/workout`, {
  }).then((res) => {
    dispatch(receiveWorkout(res.data));
  }).catch((err) => {
  });
};

export function receiveWorkout(data) {
  return {
    type: GET_WORKOUT_RECEIVED,
    Workout: data,
  };
}

export function requestWorkout() {
  return {
    type: GET_WORKOUT_REQUESTED,
  };
}



export const sendShoutOut = params => (dispatch) => {
  dispatch(requestWorkout);
  axios.post(`https://v2-api.sheety.co/d15b0998a5ba722b2df7464f83e6a997/absWithKevinApi/shoutouts`,
      params
  ).then((res) => {

  }).catch((err) => {
  });
};
