import React from 'react';
import DocumentTitle from 'react-document-title';
import { enquireScreen } from 'enquire-js';

import Header from './Header';
import Footer from './Footer';
import Home from '../pages/Home'

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
      <DocumentTitle title="Markdown Online">
        <div>
          <Header isMobile={this.state.isMobile} />
          <Home isMobile={this.state.isMobile}/>
          <Footer />
        </div>
      </DocumentTitle>
    );
  }
}

export default Layout;
