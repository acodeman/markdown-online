import React from 'react';
import {BrowserRouter as Router, Route, Link} from "react-router-dom";
import {Row, Col, Icon, Menu, Popover} from 'antd';
import Home from '../pages/Home';
import Document from '../pages/Document';
import Workplace from '../pages/Workplace';

import {enquireScreen} from 'enquire-js';


class Header extends React.Component {
    state = {
        menuVisible: false,
        menuMode: 'horizontal',
    };

    componentDidMount() {
        enquireScreen((b) => {
            this.setState({menuMode: b ? 'inline' : 'horizontal'});
        });
    }


    render() {
        const {menuMode, menuVisible} = this.state;

        const menu = (
            <Menu mode={menuMode} id="nav" key="nav">
                <Menu.Item key="home">
                    <Link to="/">首页</Link>
                </Menu.Item>
                <Menu.Item key="docs">
                    <Link to="/docs"><span>我的文档</span></Link>
                </Menu.Item>
                <Menu.Item key="workplace">
                    <Link to="/workplace">工作台</Link>
                </Menu.Item>
            </Menu>
        );

        return (
            <Router>
                <div id="header" className="header">
                    {menuMode === 'inline' ? (
                        <Popover
                            overlayClassName="popover-menu"
                            placement="bottomRight"
                            content={menu}
                            trigger="click"
                            visible={menuVisible}
                            arrowPointAtCenter
                            onVisibleChange={this.onMenuVisibleChange}
                        >
                            <Icon
                                className="nav-phone-icon"
                                type="menu"
                                onClick={this.handleShowMenu}
                            />
                        </Popover>
                    ) : null}
                    <Row>
                        <Col xxl={4} xl={5} lg={8} md={8} sm={24} xs={24}>
                            <div id="logo" to="/">
                                <img src={require('../pages/Home/static/img/markdown_logo.svg')} alt="logo"/>
                                <span>Markdown Online</span>
                            </div>
                        </Col>
                        <Col xxl={20} xl={19} lg={16} md={16} sm={0} xs={0}>
                            <div className="header-meta">
                                {menuMode === 'horizontal' ? <div id="menu">{menu}</div> : null}
                            </div>
                        </Col>
                    </Row>
                </div>
                <Route path="/" exact component={Home}/>
                <Route path="/docs/" component={Document}/>
                <Route path="/workplace/" component={Workplace}/>
            </Router>
        );
    }
}

export default Header;
