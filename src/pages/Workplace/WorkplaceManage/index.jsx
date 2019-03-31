import React from 'react';
import { Row, Col, Card, List, Avatar } from 'antd';

import {
    HashRouter as Router, Route, Switch, Link, withRouter,
} from 'react-router-dom';

import styles from './Workplace.less';
class WorkplaceManage extends React.PureComponent {

    render() {
        return (
            <Row gutter={24}>
                <Col xl={24} lg={24} md={24} sm={24} xs={24}>
                    <Card
                        className={styles.projectList}
                        style={{marginBottom: 24}}
                        title="进行中的项目"
                        bordered={false}
                        extra={<Link to="/">全部项目</Link>}
                        loading={projectLoading}
                        bodyStyle={{padding: 0}}
                    >
                        {notice.map(item => (
                            <Card.Grid className={styles.projectGrid} key={item.id}>
                                <Card bodyStyle={{padding: 0}} bordered={false}>
                                    <Card.Meta
                                        title={
                                            <div className={styles.cardTitle}>
                                                <Avatar size="small" src={item.logo}/>
                                                <Link to={item.href}>{item.title}</Link>
                                            </div>
                                        }
                                        description={item.description}
                                    />
                                    <div className={styles.projectItemContent}>
                                        <Link to={item.memberLink}>{item.member || ''}</Link>
                                        {item.updatedAt && (
                                            <span className={styles.datetime} title={item.updatedAt}>
                          {moment(item.updatedAt).fromNow()}
                        </span>
                                        )}
                                    </div>
                                </Card>
                            </Card.Grid>
                        ))}
                    </Card>
                    <Card
                        bodyStyle={{padding: 0}}
                        bordered={false}
                        className={styles.activeCard}
                        title="动态"
                        loading={activitiesLoading}
                    >
                        <List loading={activitiesLoading} size="large">
                            <div className={styles.activitiesList}>{this.renderActivities()}</div>
                        </List>
                    </Card>
                </Col>
            </Row>
        );
    }
}

export default WorkplaceManage;

