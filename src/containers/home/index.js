import React from 'react'
import { push } from 'connected-react-router'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import 'antd/dist/antd.css';
import '../../index.css'
import { Table } from 'antd';
import { css } from '@emotion/core'

import {
  getAttendance
} from '../../modules/attendance'
import {Link} from "react-router-dom";
import { SmileTwoTone, HeartTwoTone, CheckCircleTwoTone } from '@ant-design/icons';
import antlogo from "../../assets/antlogo.svg";

const tableStyle = css({
    'ant-table-thead': {
        backgroundColor: 'blue'
    }
});

const columns = [
    {
        title: 'Rank',
        key: 'rank',
        dataIndex: 'rank',
        width: 30,
    },
    {
        title: 'Name',
        key: 'name',
        dataIndex: 'name',
        width: 50,
    },
    {
        title: 'Attendance',
        key: 'total',
        dataIndex: 'total',
        width: 50,
    },
    {
        title: ' ',
        width: 10,
        key: 'smiley',
        dataIndex: 'rank',
        render:  (rank) => {

            if(rank == 1 || rank ==2)
            {
                return(<SmileTwoTone twoToneColor="#faad14"/>)
            }
            else if(rank == 2 || rank == 3){
                return(<SmileTwoTone twoToneColor="#1890ff"/>)
            }
            else if(rank == 4 || rank == 5){
                return(<SmileTwoTone twoToneColor="#f759ab"/>)
            }


        }
    },

];

const workoutColumns = [

    {
        title: 'Workout',
        width: 50,
        key: 'image',
        dataIndex: 'image',
        render:  (image) => {

            return(
                <img className='hundred_x_hundred' src={image}/>
            )


        }
    },

    {
        title: 'Excercise Name',
        key: 'workout',
        dataIndex: 'workout',
        width: 40,
    },

];
export default class Home extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            attendanceList: this.props.attendance || [],
            workoutList: this.props.workout || []
        }
    }

    componentDidMount() {
        this.props.getAttendance();
        this.setState({ attendanceList: this.props.attendance });
        this.props.getWorkout();
        this.setState({ workoutList: this.props.workout });
    }

    componentDidUpdate(prevProps, prevState) {
        // Typical usage (don't forget to compare props):
        if (prevProps.attendance !== this.props.attendance) {
            this.setState({ attendanceList: this.props.attendance });
        }

        if (prevProps.workout !== this.props.workout) {
            this.setState({ workoutList: this.props.workout });
        }
    }

    render() {
        let data = this.state.attendanceList;
        let workoutData = this.state.workoutList;
        if (data && data.length > 0 && workoutData && workoutData.length) {
            return (
                <div className='homebody'>
                    <div className='schedule-leader'>
                        <div className = 'leaderboard'>
                            <div className='center_title'>
                                <h3> <u> Schedule </u> </h3>
                                <br></br>
                                <ul>
                                    <li><b>3:00 PM</b> Socialize</li>
                                    <br></br>
                                    <li><b>3:05 PM</b> ABS WITH KEVIN</li>
                                    <br></br>
                                    <li><b>3:10 PM</b> Group Photo/Farewells</li>
                                </ul>
                            </div>
                        </div>
                        <div className='leader-board-wrapper'>
                            <div className='center_title'>
                                <h3> <u> Leaderboard </u> </h3>
                                <Table columns={columns} dataSource={data} className={tableStyle} pagination={{ pageSize: 50 }} scroll={{ y: 300 }} />
                            </div>

                        </div>

                    </div>

                    <div className='center_title'>
                        <h1> <u> ABS WITH KEVIN #12 </u> </h1>
                    </div>

                    <div className='page_grid'>

                            <Table columns={workoutColumns} dataSource={workoutData} className={tableStyle} pagination={{ pageSize: 50 }} scroll={{ y: 700 }} />
                    </div>

                </div>
            )
        }
        else
        {
            return(
                <div className='half_page_ish'>
                    <Table columns={columns} dataSource={[]} pagination={{ pageSize: 50 }} scroll={{ y: 600 }} />
                </div>
            )
        }

    }
}

