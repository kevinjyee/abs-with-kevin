import React from 'react';
import { OverPack } from 'rc-scroll-anim';
import QueueAnim from 'rc-queue-anim';
import { Button } from 'antd';
import companyico from '../../assets/companyico.svg'

function Page2() {
    return (
        <div className="home-page page2">
            <div className="home-page-wrapper">
                <div className="title-line-wrapper page2-line">
                    <div className="title-line" />
                </div>
                <h2>Working with the best <span>minds</span> and <span>bodies</span> in the industry</h2>
                <OverPack>
                    <QueueAnim key="queue" type="bottom" leaveReverse className="page2-content">
                        <img src={companyico}/>
                    </QueueAnim>
                </OverPack>
            </div>
        </div>
    );
}

export default Page2;