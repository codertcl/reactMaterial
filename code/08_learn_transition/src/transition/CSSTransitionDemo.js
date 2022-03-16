import React, {PureComponent} from "react";
import {CSSTransition} from "react-transition-group"
import {Avatar, Card} from 'antd';
import './CSSTransition.css'
import {EditOutlined, EllipsisOutlined, SettingOutlined} from '@ant-design/icons';

const {Meta} = Card;
export default class CSSTransitionDemo extends PureComponent {
    constructor(props) {
        super(props);
        this.state = {
            isShow: true
        }
    }

    render() {
        const {isShow} = this.state
        //in：in值的变化决定了动画是enter还是exit，in值的变化是触发动画的扳机。
        // timeout：动画持续时间（ms）
        // classNames：css类名
        // unmountOnExit默认值为false 表示组件exit时仍占据原来位置
        // 添加该属性或者设置为true表示组件执行exit动画效果后 从dom中删除组件
        // appear添加该属性或者设置为true表示 可以为组件添加appear出现时的动画效果
        // exit和exter默认值为true
        return (
            <>
                <button onClick={e => this.setState({isShow: !isShow})}>按钮</button>
                <CSSTransition
                    in={isShow}
                    timeout={1000}
                    unmountOnExit
                    appear
                    classNames="card"
                    onEnter={el=>console.log('开始进入',el)}
                    onEntering={el=>console.log('正在进入',el)}
                    onEntered={el=>console.log('进入完成',el)}
                    onExit={el=>console.log('开始退出',el)}
                    onExiting={el=>console.log('正在退出',el)}
                    onExited={el=>console.log('退出完成',el)}
                >
                    <Card
                        style={{width: 300}}
                        cover={
                            <img
                                alt="example"
                                src="https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png"
                            />
                        }
                        actions={[
                            <SettingOutlined key="setting"/>,
                            <EditOutlined key="edit"/>,
                            <EllipsisOutlined key="ellipsis"/>,
                        ]}
                    >
                        <Meta
                            avatar={<Avatar src="https://joeschmoe.io/api/v1/random"/>}
                            title="Card title"
                            description="This is the description"
                        />
                    </Card>
                </CSSTransition>
            </>
        )
    }
}
