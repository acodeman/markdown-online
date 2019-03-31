import React from 'react';
import {Row, Col, Card, List, Avatar,Icon} from 'antd';

import {
    HashRouter as Router, Route, Switch, Link, withRouter,
} from 'react-router-dom';

import moment from 'moment';
import styles from './Workplace.less';

const { Meta } = Card;

    // {
    //     id: 'xxx6',
    //     title: titles[5],
    //     logo: avatars[5],
    //     description: '生命就像一盒巧克力，结果往往出人意料',
    //     updatedAt: new Date('2017-07-23'),
    //     member: '骗你来学计算机',
    //     href: '',
    //     memberLink: '',
    // }
const gridStyle = {
    width: '25%',
    textAlign: 'center',
};

class WorkplaceManage extends React.PureComponent {

    render() {
        return (
            <Row gutter={24}>
                <Col xl={24} lg={24} md={24} sm={24} xs={24}>
                    <Card title="Card Title">
                        <Card.Grid style={gridStyle}>
                            <Card
                                style={{ width: 300 }}
                                cover={<img alt="example" src="https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png" />}
                                actions={[<Icon type="setting" />, <Icon type="edit" />, <Icon type="ellipsis" />]}
                            >
                                <Meta
                                    avatar={<Avatar src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />}
                                    title="Card title"
                                    description="This is the description"
                                />
                            </Card>

                        </Card.Grid>
                        <Card.Grid style={gridStyle}>
                            <Card
                                style={{ width: 300 }}
                                cover={<img alt="example" src="https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png" />}
                                actions={[<Icon type="setting" />, <Icon type="edit" />, <Icon type="ellipsis" />]}
                            >
                                <Meta
                                    avatar={<Avatar src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />}
                                    title="Card title"
                                    description="This is the description"
                                />
                            </Card>
                        </Card.Grid>
                        <Card.Grid style={gridStyle}>
                            <Card
                                style={{ width: 300 }}
                                cover={<img alt="example" src="https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png" />}
                                actions={[<Icon type="setting" />, <Icon type="edit" />, <Icon type="ellipsis" />]}
                            >
                                <Meta
                                    avatar={<Avatar src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />}
                                    title="Card title"
                                    description="This is the description"
                                />
                            </Card>
                        </Card.Grid>
                        <Card.Grid style={gridStyle}>Content</Card.Grid>
                        <Card.Grid style={gridStyle}>Content</Card.Grid>
                        <Card.Grid style={gridStyle}>Content</Card.Grid>
                        <Card.Grid style={gridStyle}>Content</Card.Grid>
                    </Card>
                </Col>
            </Row>
        );
    }
}

export default WorkplaceManage;

