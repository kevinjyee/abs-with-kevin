import axios from 'axios/index';
export const GET_ATTENDANCE_REQUESTED = 'attendance/GET_ATTENDANCE_REQUESTED'
export const GET_ATTENDANCE_RECEIVED = 'attendance/GET_ATTENDANCE_RECEIEVED'


export default (state = [], action) => {
  switch (action.type) {
    case GET_ATTENDANCE_REQUESTED:
      console.log('GET ATTENDANCE REQUESTED')
      return {
        ...state,
        loading: true,
        data: action.attendance.attendance
      }

    case GET_ATTENDANCE_RECEIVED:
      console.log('GET ATTENDANCE RECEIVED');
      console.log(state)
      console.log(action)
      return {
        ...state,
        loading: false,
        data: action.attendance.attendance
      }
    default:
      return state
  }
}

export const getAttendance = params => (dispatch) => {
  dispatch(requestAttendance);
  axios.get(`https://v2-api.sheety.co/d15b0998a5ba722b2df7464f83e6a997/absWithKevinApi/attendance`, {
  }).then((res) => {
    dispatch(receiveAttendance(res.data));
  }).catch((err) => {
  });
};

export function receiveAttendance(data) {
  return {
    type: GET_ATTENDANCE_RECEIVED,
    attendance: data,
  };
}

export function requestAttendance() {
  return {
    type: GET_ATTENDANCE_REQUESTED,
  };
}
