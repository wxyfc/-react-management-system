//该组件的作用就是将传进来的 class形式 或者 任何能转换成组件 但不是组件的形式的其他形式 转换成可显示组件形式
//个人理解
import React from 'react'
//接收两个参数，要渲染的组件 要显示的文案
export default ( loadComponent , placeholder = "loading" ) => {
    return class AsyncComponent extends React.Component {
        // displayName = 'AsyncComponent';
        defaultPrivateName = 'AsyncComponent'
        
        constructor ( props ) {
            super ( props )
            this.state = {
                Child : null
            }
            this.unmount = false;
        }
        
        UNSAFE_componentWillMount () {
            // this.$log ( 'render前执行' );
        }
        
        render () {
            //再重新定义一个变量Child 等于全局变量state中的Child
            const { Child } = this.state;
            //如果 Child 有组件的了就显示，没有就显示加载文案placeholder = "loading"
            //加上传值的props
            return ( Child ? <Child { ...this.props }/> : placeholder )
        }
        
        async componentDidMount () {
            // this.$log ( '第一次render后执行||this.getDOMNode()' )
            //先重新定义一个变量Child 等于传进来的组件
            const { default : Child } = await loadComponent ();
            //赋值给全局变量前判断下，如果组件卸载了就停止赋值，避免不必要的浪费
            if ( this.unmount ) return;
            //走到这里说明判断没生效，组件没有卸载，所以将传进的组件赋值给全局的参数
            //将上方定义的Child设置到state的生命周期的全局参数上
            this.setState ( { Child } )
        }
        
        UNSAFE_componentWillReceiveProps () {
            // this.$log ( '在组件接收到一个新的 prop (更新后)时被调用' )
        }
        
        // 组件自身的 state 更新了，那么会依次执行  shouldComponentUpdate 、 UNSAFE_componentWillUpdate 、render 和  componentDidUpdate 。
        shouldComponentUpdate () { // 是一个特别的方法,当方法返回  false 的时候，组件不再向下执行生命周期方法。
            // this.$log ( '在组件接收到新的props或者state时被调用' )
            return true
        }
        
        UNSAFE_componentWillUpdate () { // 不能在这里执行  setState
            // this.$log ( '在组件接收到新的props或者state但还没有render时被调用' );
        }
        
        componentDidUpdate () { // 在组件完成渲染后
            // this.$log ( '在组件完成更新后立即调用' );
        }
        
        componentWillUnmount () { // 组件的卸载
            // this.$log ( '组件的卸载' )
            this.unmount = true;
        }
    }
}