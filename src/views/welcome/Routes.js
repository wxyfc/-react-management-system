import React from 'react'
import { BrowserRouter , Route , Switch , Redirect , Link } from "react-router-dom";
import BaseContext from '@/assets/base/BaseContext'
import routes from '@/web-config/react-route-js';
import { createBrowserHistory } from 'history';

let ROOT = [];
const routesForEach = item => {
    if ( item.hasOwnProperty ( "childRoutes" ) && item.childRoutes.length > 0 ) {
        item.childRoutes.forEach ( routesForEach );
    } else {
        pushROOT ( item );
    }
}
const pushROOT = item => {
    ROOT.push ( <Route path={ item.path } name={ item.name } component={ item.component } key={ item.name }/> )
}

class thisContext extends BaseContext {
    // displayName = 'new';
    defaultPrivateName = 'Routes'
    
    constructor ( props ) {
        super ( props )
    }
    
    UNSAFE_componentWillMount () {
        // this.$log ( 'ROOT=render前执行' );
    }
    
    render () {
        if ( routes.length > 0 ) {
            routes.forEach ( routesForEach );
            return ( <Switch>{ ROOT } </Switch> )
        } else {
            return ( <Switch></Switch> )
        }
    }
    
    componentDidMount () {
        // this.$log ( 'ROOT=第一次render后执行||this.getDOMNode()' )
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