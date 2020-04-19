import React from 'react'
import { push } from 'connected-react-router'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import 'antd/dist/antd.css';
import '../../index.css'
import { Table } from 'antd';
import { Avatar } from 'antd';
import { css } from '@emotion/core'
import kevindesign from '../../assets/abswithkevin.svg'
import loading_ico from '../../assets/loading.gif'
import fitnessguy from '../../assets/fitness-svgrepo-com.svg'
import { Popover, Input, Button, Drawer, Divider, Col, Row, message } from 'antd';
import { Line } from '@antv/g2plot';
import ReactG2Plot from 'react-g2plot';
import {
  getAttendance
} from '../../modules/attendance'
import {Link} from "react-router-dom";
import { SmileTwoTone, HeartTwoTone, CheckCircleTwoTone, TrophyTwoTone } from '@ant-design/icons';
import antlogo from "../../assets/antlogo.svg";

const { TextArea } = Input;
const tableStyle = css({
    'ant-table-thead': {
        backgroundColor: 'blue'
    }
});


const pStyle = {
    fontSize: 16,
    lineHeight: '24px',
    display: 'block',
    marginBottom: 16,
};

const data = [
    { year: '1991', value: 3 },
    { year: '1992', value: 4 },
    { year: '1993', value: 3.5 },
    { year: '1994', value: 5 },
    { year: '1995', value: 4.9 },
    { year: '1996', value: 6 },
    { year: '1997', value: 7 },
    { year: '1998', value: 9 },
    { year: '1999', value: 13 },
];


const DescriptionItem = ({ title, content }) => (
    <div
        className="site-description-item-profile-wrapper"
        style={{
            fontSize: 14,
            lineHeight: '22px',
            marginBottom: 7,
        }}
    >
        <p
            className="site-description-item-profile-p"
            style={{
                marginRight: 8,
                display: 'inline-block',
            }}
        >
            {title}:
        </p>
        {content}
    </div>
);



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
            workoutList: this.props.workout || [],
            textValue: '',
            drawerVisible: false,
            selectedDrawerRow: null,

            columns: [
                {
                    title: 'Rank',
                    key: 'rank',
                    dataIndex: 'rank',
                    width: 30,
                },
                {
                    title: '',
                    key: 'avy',
                    dataIndex: 'avy',
                    width: 30,
                    render:  (avatar, row) => {
                        return <Popover placement="rightTop"
                                        title={"Give a shoutout to " + row.name + "!"}
                                        content={
                                            <div>
                                            <TextArea rows={2}
                                                           value={this.state.textValue}
                                                           onChange={this.handleTextChange}

                                        />

                                        <div className='shoutOutSubmit'>
                                        <Button type="primary"
                                                onClick={() => this.submitShoutOut(row.name)}
                                        >
                                            <HeartTwoTone className="submitHeart" twoToneColor="#eb2f96" />  Submit
                                            </Button>
                                        </div>
                                            </div>

                                        } trigger="click">
                            <a href="#">
                                <Avatar src={avatar} />
                            </a>
                        </Popover>

                    }
                },
                {
                    title: 'Name',
                    key: 'name',
                    dataIndex: 'name',
                    width: 50,
                    render: (name, row) => {
                        return <a onClick={() => this.showDrawer(row)} key={`a-name`}>
                            {name}
                        </a>
                    }
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

            ]
        }
    }

    componentDidMount() {
        this.props.getAttendance();
        this.setState({ attendanceList: this.props.attendance });
        this.setState({selectedDrawerRow: this.props.attendance})
        this.props.getWorkout();
        this.setState({ workoutList: this.props.workout });
    }

    hide = () => {
        this.setState({
            visible: false,
        });
    };

    handleTextChange  = (e) => {
        this.setState({textValue: e.target.value});
    }

    showDrawer = (row) => {
        this.setState({
            selectedDrawerRow: row,
            drawerVisible: true,
        });
    };

    hideDrawer = () => {
        this.setState({
            drawerVisible: false,
        });
    };

    submitShoutOut  = (name) => {
        message.success("Shoutout Submited to " + name +"!");
        console.log(this.state.textValue);
        console.log(this.name);

        let data = {
            "shoutout": {
                "name": name,
                "shoutout": this.state.textValue,
                "date": new Date(Date.now()).toLocaleString()
            }
        }

        this.props.sendShoutOut(data);

    }

    handleVisibleChange = visible => {
        this.setState({ visible });
    };

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
        let attendanceData = this.state.attendanceList;
        let workoutData = this.state.workoutList;

        if (attendanceData && attendanceData.length > 0 && workoutData && workoutData.length) {
            let selectedUser = this.state.selectedDrawerRow || attendanceData[0];
            let data= []
            for (const [key, value] of Object.entries(selectedUser)) {
                if (!['id','rank','name','avy', 'total'].includes(key)) {
                    data.push({'year': key, 'value': value})
                }
            }

            let config = {
                title: {
                    visible: true,
                    text: 'Attendance Tracker',
                },
                padding: 'auto',
                forceFit: true,
                data,
                xField: 'year',
                yField: 'value',
                height: '300'
            };


            return (
                <div className='homebody'>
                    <div className='top-info'>
                        <div className='center_title'>
                            <div>
                                <img  className="brandLogo" src={fitnessguy}/>
                                abs with kevin #{Object.keys(data[0]).length-4}
                            </div>
                        </div>
                    </div>
                    <div className='page_grid'>
                        <div className='half_page_ish'>
                            <span>
                                <div className='center_title'> <TrophyTwoTone  twoToneColor="#faad14"/> <h3> <u> Leaderboard  </u> </h3></div>
                            <Table columns={this.state.columns} dataSource={attendanceData} className={tableStyle} pagination={{ pageSize: 50 }} scroll={{ y: 700 }} />
                            </span>

                        </div>
                        <div className='half_page_ish'>
                            <span>
                                <div className='center_title'> <HeartTwoTone twoToneColor="#eb2f96" /> <h3> <u> Workout  </u> </h3></div>
                            <Table columns={workoutColumns} dataSource={workoutData} className={tableStyle} pagination={{ pageSize: 50 }} scroll={{ y: 700 }} />
                            </span>

                        </div>
                    </div>

                    <Drawer
                        width={640}
                        placement="right"
                        closable={false}
                        onClose={this.hideDrawer}
                        visible={this.state.drawerVisible}
                    >
                        <p className="site-description-item-profile-p" style={{ ...pStyle, marginBottom: 24 }}>
                            User Profile
                        </p>
                        <p className="site-description-item-profile-p" style={pStyle}>
                            Personal
                        </p>
                        <Row>
                            <Col span={12}>
                                <DescriptionItem title="Name" content={selectedUser.name} />
                            </Col>
                            <Col span={12}>
                                <DescriptionItem title="Rank" content={selectedUser.rank} />
                            </Col>
                        </Row>
                        <Row>
                            <Col span={12}>
                                <DescriptionItem title="City" content="Zoom Online" />
                            </Col>
                            <Col span={12}>
                                <DescriptionItem title="Country" content="United States" />
                            </Col>
                        </Row>
                        <Row>
                            <Col span={12}>
                                <DescriptionItem title="Birthday" content="???" />
                            </Col>
                        </Row>
                        <Row>
                            <Col span={24}>
                                <DescriptionItem
                                    title="Message"
                                    content="Abs is fun!"
                                />
                            </Col>
                        </Row>
                        <Divider />
                        <p className="site-description-item-profile-p" style={pStyle}>
                            Attendance
                        </p>
                        <Row>
                            <ReactG2Plot className="attendanceGraph" Ctor={Line} config={config}/>
                        </Row>
                        <Divider />
                    </Drawer>
                </div>
            )
        }
        else
        {
            return(
                <div >
                    <img className='loading' src={loading_ico}/>
                </div>
            )
        }

    }
}

