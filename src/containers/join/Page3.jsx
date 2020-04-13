import React from 'react';
import { OverPack } from 'rc-scroll-anim';
import QueueAnim from 'rc-queue-anim';
import { Button } from 'antd';
import companyico from '../../assets/companyico.svg'

function Page3() {
    return (
        <div className="home-page page3">
            <div className="home-page-wrapper">
                <div className="title-line-wrapper page2-line">
                    <div className="title-line" />
                </div>
                <h2>Testimonials</h2>
                <OverPack>
                    <QueueAnim key="queue" type="bottom" leaveReverse className="page2-content">
                        <p key="p" className="page-content">
                            Better workout than Barry's. -Aaron Lu
                        </p>

                        <p key="p" className="page-content">
                            Cara came in to the office to check on me because she thought I was having a heart attack.
                            Those are just sounds of fat burning!! -Winston Brasor
                        </p>

                        <p key="p" className="page-content">
                            Perfect way to get off your my computer for couple minutes,
                            connect with others and get a little workout
                            in this crazy sit at home times. -Daniel Guettler
                        </p>

                        <p key="p" className="page-content">
                            I hope I can meet my Q1 OKRs after this. -Kevin Yee
                        </p>

                    </QueueAnim>
                </OverPack>
            </div>
        </div>
    );
}

export default Page3;