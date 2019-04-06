import React from 'react';
import DocumentTitle from 'react-document-title';
import {enquireScreen} from 'enquire-js';
import {LocaleProvider} from 'antd';
import zhCN from 'antd/lib/locale-provider/zh_CN';

import Header from './Header';
import Footer from './Footer';

let isMobile;

enquireScreen((b) => {
    isMobile = b;
});

class Layout extends React.PureComponent {
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
            <LocaleProvider locale={zhCN}>
                <DocumentTitle title="Markdown Online">
                    <div>
                        <Header isMobile={this.state.isMobile}/>
                        <Footer/>
                    </div>
                </DocumentTitle>
            </LocaleProvider>
        );
    }
}

export default Layout;
