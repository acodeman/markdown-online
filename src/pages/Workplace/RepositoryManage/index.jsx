import React from 'react';
import {
    Layout, Menu, Breadcrumb, Icon,
} from 'antd';

const { Content, Sider } = Layout;


class Repository extends React.PureComponent {

    render() {
        return (
                <Layout>
                    <Layout>
                        <Sider width={256} style={{background: '#fff'}}>
                            <Menu
                                onClick={this.handleClick}
                                style={{width: 256}}
                                defaultSelectedKeys={['docs']}
                                mode="inline"
                            >
                                <Menu.Item key="workplace" >
                                    <Icon type="laptop" />
                                    工作台RepositoryRepositoryRepositoryRepository
                                </Menu.Item>
                                <Menu.Item key="docs">
                                    <Icon type="file-markdown" />
                                    文档RepositoryRepositoryRepositoryRepository
                                </Menu.Item>
                                <Menu.Item key="2">
                                    <Icon type="project" />
                                    知识库
                                </Menu.Item>
                                <Menu.Item key="3">
                                    <Icon type="team" />
                                    团队
                                </Menu.Item>
                            </Menu>
                        </Sider>
                        <Layout style={{ padding: '0 24px 24px' }}>
                            <Breadcrumb style={{ margin: '16px 0' }}>
                                <Breadcrumb.Item>Home</Breadcrumb.Item>
                                <Breadcrumb.Item>List</Breadcrumb.Item>
                                <Breadcrumb.Item>App</Breadcrumb.Item>
                            </Breadcrumb>
                            <Content style={{
                                background: '#fff', padding: 24, margin: 0, minHeight: 280,
                            }}
                            >
                                Content
                            </Content>
                        </Layout>
                    </Layout>
                </Layout>
        );
    }
}

export default Repository;

