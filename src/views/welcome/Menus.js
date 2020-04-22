import React from 'react'
import { Link } from "react-router-dom";
import BaseContext from '@/assets/base/BaseContext';
import { Button , Layout , Menu , Breadcrumb } from 'antd';

const { SubMenu } = Menu;

class thisContext extends BaseContext {
    // displayName = 'new';
    defaultPrivateName = 'Menus'
    
    constructor ( props ) {
        super ( props )
    }
    
    UNSAFE_componentWillMount () {
        // this.$log ( 'Menus=render前执行' );
    }
    
    render () {
        // this.$log ( 'Menus=render 方法' )
        return (
            <Menu>
                <SubMenu key="sub4" title="title">
                    <Menu.Item key="7"><Link to="/App2">App2</Link></Menu.Item>
                    <Menu.Item key="8"><Link to="/App3">App3</Link></Menu.Item>
                </SubMenu>
            </Menu>
        )
    }
    
    componentDidMount () {
        // this.$log ( 'Menus=第一次render后执行||this.getDOMNode()' )
    }
    
    UNSAFE_componentWillReceiveProps () {
        this.$log ( '在组件接收到一个新的 prop (更新后)时被调用' )
    }
    
    // 组件自身的 state 更新了，那么会依次执行  shouldComponentUpdate 、 UNSAFE_componentWillUpdate 、render 和  componentDidUpdate 。
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
    
    componentWillUnmount () { // 组件的卸载
        this.$log ( '组件的卸载' )
    }
}

export default thisContext;