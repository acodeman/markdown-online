import React from 'react';
import {List, Card, Icon, Avatar, Button,Layout} from 'antd';
import styles from './Repository.less'

const {Content} = Layout;
const {Meta} = Card;

class Repository extends React.PureComponent {


    render() {
        const data = [
            {
                title: 'Title 1',
            },
            {
                title: 'Title 2',
            },
            {
                title: 'Title 3',
            },
            {
                title: 'Title 4',
            },
            {
                title: 'Title 5',
            },
            {
                title: 'Title 6',
            },
        ];
        return (
            <Content>


                <div className={styles.cardList}>
                    <List
                        grid={{gutter: 24, lg: 3, md: 2, sm: 1, xs: 1}}
                        dataSource={['', ...data]}
                        renderItem={item =>
                            item ? (
                                <List.Item>
                                    <Card hoverable={true} className={styles.card}
                                          actions={[<Icon type="edit"/>, <Icon type="delete"/>,
                                              <Icon type="ellipsis"/>]}
                                    >
                                        <Meta
                                            avatar={<Avatar
                                                src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png"/>}
                                            title={<a>知识库名称</a>}
                                            description="在中台产品的研发过程中，会出现不同的设计规范和实现方式，但其中往往存在很多类似的页面和组件，这些类似的组件会被抽离成一套标准规范。"
                                        />
                                    </Card>
                                </List.Item>
                            ) : (
                                <List.Item>
                                    <Button type="dashed" block className={styles.newButton} style={{height: "185px"}}>
                                        <Icon type="plus"/> 新建知识库
                                    </Button>
                                </List.Item>
                            )}
                    />
                </div>
            </Content>
        );
    }
}

export default Repository;

