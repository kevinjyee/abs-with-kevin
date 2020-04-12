import React from 'react'
import { push } from 'connected-react-router'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import 'antd/dist/antd.css';
import '../../index.css'
import { Table } from 'antd';
import { css } from '@emotion/core'
import kevindesign from '../../assets/abswithkevin.svg'
import fitnessguy from '../../assets/fitness-svgrepo-com.svg'

import {
  getAttendance
} from '../../modules/attendance'
import {Link} from "react-router-dom";
import { SmileTwoTone, HeartTwoTone, CheckCircleTwoTone, TrophyTwoTone } from '@ant-design/icons';
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
        key: 'workout',
        dataIndex: 'workout',
        width: 40,
    },
    {
        title: ' ',
        width: 40,
        key: 'image',
        dataIndex: 'image',
        render:  (image) => {

            return(
                <img className='hundred_x_hundred' src={image}/>
            )


        }
    }
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
                    <div className='top-info'>
                        <div className='center_title'>
                            <div>
                                <img  className="brandLogo" src={fitnessguy}/>
                                abs with kevin #12
                            </div>
                        </div>
                    </div>
                    <div className='page_grid'>
                        <div className='half_page_ish'>
                            <span>
                                <div className='center_title'> <TrophyTwoTone  twoToneColor="#faad14"/> <h3> <u> Leaderboard  </u> </h3></div>
                            <Table columns={columns} dataSource={data} className={tableStyle} pagination={{ pageSize: 50 }} scroll={{ y: 700 }} />
                            </span>

                        </div>
                        <div className='half_page_ish'>
                            <span>
                                <div className='center_title'> <HeartTwoTone twoToneColor="#eb2f96" /> <h3> <u> Workout  </u> </h3></div>
                            <Table columns={workoutColumns} dataSource={workoutData} className={tableStyle} pagination={{ pageSize: 50 }} scroll={{ y: 700 }} />
                            </span>

                        </div>
                    </div>

                </div>
            )
        }
        else
        {
            return(
                <div className='half_page_ish'>
                    <Table columns={columns} dataSource={[]} pagination={{ pageSize: 50 }} scroll={{ y: 700 }} />
                </div>
            )
        }

    }
}

