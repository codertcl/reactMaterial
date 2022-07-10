// import React, {PureComponent} from "react";
// import classNames from "classnames";
//
// // 1:classnames的使用
// export default class Classnames extends PureComponent {
//     constructor(props) {
//         super(props);
//         this.state = {
//             isActive: true,
//             isBar: false
//         }
//     }
//
//     render() {
//         const {isActive, isBar} = this.state
//         //将值转换为布尔值，为真则转换为字符串添加到元素上
//         const errorClass = 'error', warnClass = 'warn', zero = 0, one = 1, ten = 10
//         return (
//             <div>
//                 <h3 className={"foo bar active title"}>标题1</h3>
//                 <h3 className={"title " + (isActive ? 'active' : "")}>标题2</h3>
//                 <h3 className={["title", (isActive ? 'active' : "")].join(' ')}>标题3</h3>
//
//                 <hr/>
//                 {/*classnames库*/}
//                 <h3 className="foo bar active title">标题4</h3>
//                 <h3 className={classNames("foo", "bar", "active", "title")}>标题5</h3>
//                 <h3 className={classNames({"active": isActive, "bar": isBar})}>标题6</h3>
//                 <h3 className={classNames("foo", errorClass, warnClass, undefined, null, {"active": isActive})}>标题7</h3>
//                 <h3 className={classNames("undefined", zero, one, ten)}>标题8</h3>
//                 <h3 className={classNames(["title", {"active": isActive, "bar": isBar}])}>标题9</h3>
//             </div>
//         )
//     }
// }

import React, {PureComponent} from "react";
import { Button, Space } from 'antd';
import { PoweroffOutlined } from '@ant-design/icons';
import HYHomeRecommend from "components/home/childCpns/home-recommend";
export default class App extends PureComponent{
    state = {
        loadings: [],
    };

    enterLoading = index => {
        this.setState(({ loadings }) => {
            const newLoadings = [...loadings];
            newLoadings[index] = true;

            return {
                loadings: newLoadings,
            };
        });
        setTimeout(() => {
            this.setState(({ loadings }) => {
                const newLoadings = [...loadings];
                newLoadings[index] = false;

                return {
                    loadings: newLoadings,
                };
            });
        }, 6000);
    };

    render() {
        const { loadings } = this.state;
        return (
            <>
                <HYHomeRecommend/>
                <Space style={{ width: '100%' }}>
                    <Button type="primary" loading>
                        Loading
                    </Button>
                    <Button type="primary" size="small" loading>
                        Loading
                    </Button>
                    <Button type="primary" icon={<PoweroffOutlined />} loading />
                </Space>

                <Space style={{ width: '100%' }}>
                    <Button type="primary" loading={loadings[0]} onClick={() => this.enterLoading(0)}>
                        Click me!
                    </Button>
                    <Button
                        type="primary"
                        icon={<PoweroffOutlined />}
                        loading={loadings[1]}
                        onClick={() => this.enterLoading(1)}
                    >
                        Click me!
                    </Button>
                    <Button
                        type="primary"
                        icon={<PoweroffOutlined />}
                        loading={loadings[2]}
                        onClick={() => this.enterLoading(2)}
                    />
                </Space>
            </>
        );
    }
}
