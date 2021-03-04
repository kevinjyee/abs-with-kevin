import axios from 'axios/index';
export const GET_DAYS_RECEIVED = 'attendance/GET_DAYS_RECEIEVED'


export default (state = [], action) => {
  switch (action.type) {

    case GET_DAYS_RECEIVED:
      console.log('GET DAYS RECEIVED');
      console.log(state)
      console.log(action)
      return {
        ...state,
        data: action.days.days
      }
    default:
      return state
  }
}

export const getNumberDays = params => (dispatch) => {
  axios.get(`https://api.sheety.co/0c3899d6d69d5ed4a6106d839a5cc4d0/absWithKevinApi/days`, {
  }).then((res) => {
    dispatch(receiveDays(res.data));
  }).catch((err) => {
  });
};

export function receiveDays(data) {
  return {
    type: GET_DAYS_RECEIVED,
    days: data,
  };
}