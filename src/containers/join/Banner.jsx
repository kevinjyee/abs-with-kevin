import React from 'react';
import PropTypes from 'prop-types';
import GitHubButton from 'react-github-button';
import QueueAnim from 'rc-queue-anim';
import TweenOne from 'rc-tween-one';
import { Button } from 'antd';
import BannerSVGAnim from './BannerSVGAnim';
import { Link } from 'react-router-dom';

function Banner(props) {
    return (
        <div className="banner-wrapper">
            {props.isMobile && (
                <TweenOne animation={{ opacity: 1 }} className="banner-image-wrapper">
                    <div className="home-banner-image">
                        <img
                            alt="banner"
                            src="https://gw.alipayobjects.com/zos/rmsportal/rqKQOpnMxeJKngVvulsF.svg"
                            width="100%"
                        />
                    </div>
                </TweenOne>
            )}
            <QueueAnim className="banner-title-wrapper" type={props.isMobile ? 'bottom' : 'right'}>
                <div key="line" className="title-line-wrapper">
                    <div
                        className="title-line"
                        style={{ transform: 'translateX(-64px)' }}
                    />
                </div>
                <h1 key="h1">ABS WITH KEVIN</h1>
                <p key="content">
                    A comprehensive 6-pack solution during quarantine.
                </p>
                <div key="button" className="button-wrapper">
                    <Link to='/abs-with-kevin/todays-workout'>
                        <Button type="primary">
                            Join Now
                        </Button>
                    </Link>
                    <Link to='/abs-with-kevin/past-workouts'>
                        <Button style={{ margin: '0 16px' }} type="primary" ghost>
                            Past Workouts
                        </Button>
                    </Link>
                </div>
            </QueueAnim>
            {!props.isMobile && (
                <TweenOne animation={{ opacity: 1 }} className="banner-image-wrapper">
                    <BannerSVGAnim />
                </TweenOne>
            )}
        </div>
    );
}


export default Banner;