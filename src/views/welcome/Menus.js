import React from 'react'
import { Link } from "react-router-dom";
import BaseContext from '@/assets/base/BaseContext';
import { Button , Layout , Menu , Breadcrumb } from 'antd';
import routes from '@/web-config/react-route-js';
import { localStorageSetItem } from '@/assets/util/index';

const { SubMenu } = Menu;

function handlerSubmenu ( forList ) {
    let list = []
    forList.forEach ( ( item ) => {
        if ( item.childRoutes.length > 1 ) {
            let childRoutes = handlerSubmenu ( item.childRoutes )
            list.push (
                <SubMenu key={ item.name } title={ item.meta.title }>
                    { childRoutes }
                </SubMenu>
            )
        } else if ( item.childRoutes.length == 1 ) {
            list.push (
                <Menu.Item key={ item.childRoutes[ 0 ].name }><Link to={ item.childRoutes[ 0 ].path } replace>{ item.childRoutes[ 0 ].meta.title }</Link></Menu.Item>
            )
        } else {
            list.push (
                <Menu.Item key={ item.name }><Link to={ item.path } replace>{ item.meta.title }</Link></Menu.Item>
            )
        }
    } );
    return list
}

let menuList = []
if ( routes.length > 0 ) {
    menuList = handlerSubmenu ( routes )
}

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
            <Menu onClick={ this.menuItemClick }>
                { menuList }
            </Menu>
        )
    }
    
    menuItemClick = ( { key } ) => {
        localStorageSetItem ( "rootFromPathname" , key )
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
        // this.$log ( '组件的卸载' )
    }
}

export default thisContext;