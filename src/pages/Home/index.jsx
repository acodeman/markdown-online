import React from 'react';
import Page1 from './Page1';
import Page2 from './Page2';
import Banner from "./Banner";
import './static/style';

class Home extends React.PureComponent {

    render() {
        return (
            <div className="home-wrapper">
                <Banner isMobile={this.props.isMobile} />
                <Page1 isMobile={this.props.isMobile} />
                <Page2 />
            </div>
        );
    }
}

export default Home;
