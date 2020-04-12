import React from 'react';
import {CalendarOutlined, ClockCircleOutlined} from '@ant-design/icons';
import 'antd/dist/antd.css';
import '../../index.css'

import {
    Menu, Spin
} from 'antd';

import antlogo from '../../assets/antlogo.svg'
import kevindesign from '../../assets/abswithkevin.svg'
import { Link } from 'react-router-dom';

export default class NavBar extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            current: this.props.currentPage,
        }
    }

    componentDidUpdate(prevProps, prevState) {
        // Typical usage (don't forget to compare props):
        if (prevProps.currentPage !== this.props.currentPage) {
            this.setState({current: this.props.currentPage});
        }
    }

    handleClick = (e) => {
        console.log('click ', e);
        this.setState({
            current: e.key,
        });
    }

    render() {
        if (this.state.current) {
            return (
                <div>
                    <div id='header'>
                        <div
                            className="ant-col ant-col-xs-24 ant-col-sm-24 ant-col-md-5 ant-col-lg-5 ant-col-xl-5 ant-col-xxl-3">
                            <a id="logo">
                                <img className="brandLogo" src={antlogo}/>
                                <img className="brandName" src={kevindesign}/>
                            </a>
                        </div>
                        <div className='menu'>
                            <Menu
                                mode="horizontal"
                                onClick={this.handleClick}
                                selectedKeys={[this.state.current]}
                                style={{lineHeight: '64px'}}
                            >
                                <Menu.Item key="1">
                                    <Link to='/abs-with-kevin'>
                                        <CalendarOutlined />Today's Workout
                                    </Link>
                                </Menu.Item>
                                <Menu.Item key="2">
                                    <Link to='/abs-with-kevin/past-workouts'>
                                        <ClockCircleOutlined />Past Workouts
                                    </Link>
                                </Menu.Item>
                                {/*<Menu.Item key="3">*/}
                                {/*    <Link to='/administration'>*/}
                                {/*        <Icon type="menu" />Administration*/}
                                {/*    </Link>*/}
                                {/*</Menu.Item>*/}

                            </Menu>
                        </div>

                    </div>
                </div>
            )
        }
        else {
            return (
                <Spin/>
            )
        }
    }
}