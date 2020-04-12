import React from 'react';
import DocumentTitle from 'react-document-title';
import { enquireScreen } from 'enquire-js';

import Banner from './Banner';
import Page1 from './Page1';
import Page2 from './Page2';
import Page3 from './Page3';
// import Footer from './Footer';
import '../../static/style';

let isMobile;

enquireScreen((b) => {
    isMobile = b;
});

export class Home extends React.PureComponent {
    state = {
        isMobile,
    }
    componentDidMount() {
        enquireScreen((b) => {
            this.setState({
                isMobile: !!b,
            });
        });
    }
    render() {
        return (
            <DocumentTitle title="abs with kevin">
                <div>

                    <div className="home-wrapper">
                        <Banner isMobile={this.state.isMobile} />
                        <Page1 isMobile={this.state.isMobile} />
                        <Page2 />
                        <Page3 />
                    </div>
                    {/*<Footer />*/}
                </div>
            </DocumentTitle>
        );
    }
}

export default Home;