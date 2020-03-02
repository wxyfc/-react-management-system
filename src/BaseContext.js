import React from 'react'

class BaseContext extends React.Component {
    
    constructor ( props ) {
        super ( props )
        this.$log ( 'constructor' );
    }
    
    state = {}
    
    UNSAFE_componentWillMount () {
        this.$log ( 'render前执行' );
    }
    
    componentDidMount () {
        this.$log ( '第一次render后执行||this.getDOMNode()' )
    }
    
    UNSAFE_componentWillReceiveProps () {
        this.$log ( '在组件接收到一个新的 prop (更新后)时被调用' )
    }
    
    // 组件自身的 state 更新了，那么会依次执行  shouldComponentUpdate 、 componentWillUpdate 、render 和  componentDidUpdate 。
    shouldComponentUpdate () { // 是一个特别的方法,当方法返回  false 的时候，组件不再向下执行生命周期方法。
        this.$log ( '在组件接收到新的props或者state时被调用' )
        return true
    }
    
    UNSAFE_componentWillUpdate () { // 不能在这里执行  setState
        this.$log ( '在组件接收到新的props或者state但还没有render时被调用' );
    }
    
    componentDidUpdate () { // 在组件完成渲染后
        this.$log ( '在组件完成更新后立即调用' );
    }
    
    post ( url , param , form , feedback ) {
        this.$log ( { url , param , form , feedback } );
    }
    
    componentWillUnmount () { // 组件的卸载
        this.$log ( '组件的卸载' )
    }
}

export default BaseContext;