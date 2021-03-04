import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { getAttendance, getNumberDays } from './modules/attendance';
import { getWorkout, sendShoutOut } from "./modules/workout";

import Home from './containers/home';
import ReactGA from 'react-ga';

function mapStateToProps(state) {
    return {
        attendance: state.attendance.data,
        loading: state.attendance.loading,
        workout: state.workout.data,
        days: state.days.data
    }
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators({ getAttendance, sendShoutOut, getWorkout, getNumberDays }, dispatch);
}
export const HomeContainer = connect(mapStateToProps, mapDispatchToProps)(Home);

const trackingId = "UA-163437850-1"; // Replace with your Google Analytics tracking ID
ReactGA.initialize(trackingId);
ReactGA.set({
    page: 'Loaded'
})