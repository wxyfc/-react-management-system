import React from 'react';
import BaseContext from '@/assets/base/BaseContext';
import { BrowserRouter , Route , Switch , Redirect , Link } from "react-router-dom";
import { createBrowserHistory } from 'history';
import Menus from './Menus';
import Routes from './Routes';
import { Layout } from 'antd';

const { Header , Content , Footer , Sider } = Layout;

class thisContext extends BaseContext {
    // displayName = 'app';
    defaultPrivateName = 'app'
    
    constructor ( props ) {
        super ( props )
        let pathname = "/App2"
        let state = props.location.state
        if ( state && state.rootFromPathname != "/" ) {
            pathname = state.rootFromPathname
        }
        // this.state = {
        //     pathname
        // }
        const history = createBrowserHistory ();
        // history.push ( { pathname } );
        history.replace ( { pathname } )
    }
    
    state = {}
    
    UNSAFE_componentWillMount () {
        // console.log ( "app开始渲染" )
    }
    
    render () {
        return (
            <BrowserRouter>
                <Layout>
                    <Sider> <Menus/> </Sider>
                    <Layout>
                        <Content>
                            <Routes/>
                        </Content>
                    </Layout>
                </Layout>
            </BrowserRouter>
        )
    }
    
    componentDidMount () {
    }
    
    UNSAFE_componentWillReceiveProps () {
    }
    
    // 组件自身的 state 更新了，那么会依次执行  shouldComponentUpdate 、 UNSAFE_componentWillUpdate 、render 和  componentDidUpdate 。
    shouldComponentUpdate () { // 是一个特别的方法,当方法返回  false 的时候，组件不再向下执行生命周期方法。
        return true
    }
    
    UNSAFE_componentWillUpdate () { // 不能在这里执行  setState
    }
    
    componentDidUpdate () { // 在组件完成渲染后
    }
    
    componentWillUnmount () { // 组件的卸载
    }
}

export default thisContext;