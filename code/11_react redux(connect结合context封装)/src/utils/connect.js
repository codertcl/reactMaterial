import React, {PureComponent} from "react"
import {StoreContext} from "./context";

export function connect(mapStateToProps, mapDispatchToProps) {
    //使用高阶函数
    return function enhanceHOC(WrappedComponent) {
        class EnhanceComponent extends PureComponent {
            constructor(props, context) {
                super(props);
                this.state = {
                    storeSate: mapStateToProps(context.getState())
                }
            }

            componentDidMount() {
                this.unSubscribe = this.context.subscribe(() => {
                    this.setState({
                        storeSate: mapStateToProps(this.context.getState())
                    })
                })
            }

            componentWillUnmount() {
                this.unSubscribe()
            }

            render() {
                return <WrappedComponent
                    {...this.props}
                    {...mapStateToProps(this.context.getState())}
                    {...mapDispatchToProps(this.context.dispatch)}
                />;
            }
        }

        //此属性可以让你使用 this.context 来获取最近 Context 上的值
        // 你可以在任何生命周期中访问到它
        EnhanceComponent.contextType = StoreContext

        return EnhanceComponent
    }
}
