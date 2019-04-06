import React from 'react';
import {Table, Button, Layout, Card, Alert, Dropdown, Icon, Menu, Form, Row, Col, Select, Input, Divider} from 'antd';

import './style';
const { Column, ColumnGroup } = Table;



const {Content} = Layout;
const FormItem = Form.Item;
const { Option } = Select;

const columns = [{
    title: '名称',
    dataIndex: 'name',
}, {
    title: '状态',
    dataIndex: 'age',
}, {
    title: '归属',
    dataIndex: 'address',
}, {
    title: '操作',
    key: 'action',
    render: (text, record) => (
        <span>
      <a href="javascript:;">编辑</a>
    </span>
    ),
}];
const data = [];
for (let i = 0; i < 46; i++) {
    data.push({
        key: i,
        name: `Edward King ${i}`,
        age: 32,
        address: `入门到精通/java`,
    });
}

const paginationProps = {
    showSizeChanger: true,
    showQuickJumper: true
};

class DocManage extends React.PureComponent {

    state = {
        selectedRowKeys: [], // Check here to configure the default column
        loading: false,
    };

    start = () => {
        this.setState({loading: true});
        // ajax request after empty completing
        setTimeout(() => {
            this.setState({
                selectedRowKeys: [],
                loading: false,
            });
        }, 1000);
    }
    onSelectChange = (selectedRowKeys) => {
        console.log('selectedRowKeys changed: ', selectedRowKeys);
        this.setState({selectedRowKeys});
    }


    render() {
        const {loading, selectedRowKeys} = this.state;
        const rowSelection = {
            selectedRowKeys,
            onChange: this.onSelectChange,
        };
        const hasSelected = selectedRowKeys.length > 0;
        const menu = (
            <Menu >
                <Menu.Item key="1">1st menu item</Menu.Item>
                <Menu.Item key="2">2nd memu item</Menu.Item>
                <Menu.Item key="3">3rd menu item</Menu.Item>
            </Menu>
        );

        return (
            <Content style={{background: '#fff'}}>
                <Card bordered={false}>
                    <div className="tableList">
                        <div className="tableListForm">
                            <Form onSubmit={this.handleSearch} layout="inline">
                                <Row gutter={{ md: 8, lg: 24, xl: 48 }}>
                                    <Col md={8} sm={24}>
                                        <FormItem label="文档名称">
                                            <Input placeholder="" />
                                        </FormItem>
                                    </Col>
                                    <Col md={8} sm={24}>
                                        <FormItem label="归属">

                                                <Select placeholder="请选择" style={{ width: '100%' }}>
                                                    <Option value="0">关闭</Option>
                                                    <Option value="1">运行中</Option>
                                                </Select>
                                        </FormItem>
                                    </Col>
                                    <Col md={8} sm={24}>
                                    <span className="submitButtons">
                                      <Button type="primary" htmlType="submit">
                                        查询
                                      </Button>
                                      <Button style={{ marginLeft: 8 }} onClick={this.handleFormReset}>
                                        重置
                                      </Button>
                                    </span>
                                                            </Col>
                                                        </Row>
                                                    </Form>

                        </div>
                        <div className="tableListOperator">
                            <Button icon="plus" type="primary" onClick={() => this.handleModalVisible(true)}>
                                新建
                            </Button>
                            <span>
                            <Button icon="delete" type="danger">删除</Button>

                        </span>
                        </div>
                        <div className="standardTable">
                            <div className="tableAlert">
                                <Alert
                                    message="已选择 0 项  服务调用次数总计 0 万清空"
                                    type="info"
                                    showIcon
                                />
                            </div>
                            <Table rowSelection={rowSelection} columns={columns} dataSource={data}
                                   pagination={paginationProps}/>
                        </div>
                    </div>
                </Card>
            </Content>
        );
    }
}

export default DocManage;

