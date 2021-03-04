import axios from 'axios/index';
export const GET_ATTENDANCE_REQUESTED = 'attendance/GET_ATTENDANCE_REQUESTED'
export const GET_ATTENDANCE_RECEIVED = 'attendance/GET_ATTENDANCE_RECEIEVED'
export const GET_DAYS_RECEIVED = 'attendance/GET_DAYS_RECEIEVED'


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

    case GET_DAYS_RECEIVED:
      console.log('GET DAYS RECEIVED');
      console.log(state)
      console.log(action)
      return {
        ...state,
        days: action.days.days
      }
    default:
      return state
  }
}

export const getAttendance = params => (dispatch) => {
  dispatch(requestAttendance);
  axios.get(`https://api.sheety.co/0c3899d6d69d5ed4a6106d839a5cc4d0/absWithKevinApi/attendance`, {
  }).then((res) => {
    dispatch(receiveAttendance(res.data));
  }).catch((err) => {
  });
};


export const getNumberDays = params => (dispatch) => {
  dispatch(requestAttendance);
  axios.get(`https://api.sheety.co/0c3899d6d69d5ed4a6106d839a5cc4d0/absWithKevinApi/days`, {
  }).then((res) => {
    dispatch(receiveDays(res.data));
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

export function receiveDays(data) {
  return {
    type: GET_DAYS_RECEIVED,
    days: data,
  };
}