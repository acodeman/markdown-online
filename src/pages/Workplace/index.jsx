import React from 'react';
import {
    HashRouter as Router, Route, Switch, Link, withRouter,
} from 'react-router-dom';
import {
    Layout, Menu, Breadcrumb, Icon, Alert,
} from 'antd';
import WorkplaceManage from './WorkplaceManage';
import DocManage from './DocManage';
import RepositoryManage from './RepositoryManage';
import TeamManage from './TeamManage';

const {Content, Sider} = Layout;

const routes = [
    {
        path: "/workplace",
        icon: 'laptop',
        menuName: '工作台',
        component: WorkplaceManage,
    },  {
        path: "/workplace/repository",
        icon: "project",
        menuName: '知识库',
        component: RepositoryManage,
    }, {

        path: "/workplace/docs",
        icon: "file-markdown",
        menuName: '文档',
        component: DocManage,
    },{
        path: "/workplace/team",
        icon: "team",
        menuName: '团队',
        component: TeamManage,
    }

];


class Workplace extends React.PureComponent {

    render() {
        return (

            <Layout>
                <Layout>
                    <Sider width={256} style={{background: '#fff'}}>
                        <Menu
                            onClick={this.handleClick}
                            style={{width: 256}}
                            defaultSelectedKeys={['laptop']}
                            mode="inline"
                        >
                            {routes.map((route, i) => (
                                <Menu.Item key={route.icon}>
                                    <Link to={route.path}> <Icon type={route.icon}/>{route.menuName}</Link>
                                </Menu.Item>
                            ))}
                        </Menu>
                    </Sider>
                    <Layout style={{padding: '0 24px 24px'}}>
                        <Breadcrumb style={{ margin: '14px 0' }}>
                            <Breadcrumb.Item>
                                <Link to='/workplace'> <Icon type="laptop"/> 工作台</Link>
                            </Breadcrumb.Item>
                            <Breadcrumb.Item href="">
                                <Link to='/workplace/docs'> <Icon type="file-markdown"/> 文档</Link>
                            </Breadcrumb.Item>
                        </Breadcrumb>
                        {routes.map((route, i) => (
                            <Route path={route.path} exact component={route.component}/>
                        ))}
                    </Layout>
                </Layout>
            </Layout>
        );
    }
}

export default Workplace;

