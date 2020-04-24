import React from 'react';
import ReactDOM from 'react-dom';
import 'antd/dist/antd.css';
import '@/assets/style/index.scss';
import '@/web-config/myReactPrototype';
import { BrowserRouter , Route , Switch , Redirect , withRouter } from "react-router-dom";
import App from '@/views/welcome/App';
import Login from '@/views/welcome/Login';
import Page404 from '@/views/welcome/404';
import { Modal } from 'antd';
// import routes from '@/web-config/react-route-js';
//
// let ROOT = [];
// const routesForEach = item => {
//     if ( item.hasOwnProperty ( "childRoutes" ) && item.childRoutes.length > 0 ) {
//         item.childRoutes.forEach ( routesForEach );
//     } else {
//         pushROOT ( item );
//     }
// }
// const pushROOT = item => {
//     ROOT.push ( <Route path={ item.path } name={ item.name } component={ item.component } key={ item.name }/> )
// }
// routes.forEach ( routesForEach );
// import * as serviceWorker from './serviceWorker';

//BrowserRouter  目前我理解为跟vue中router-view一样的组件 routes则是配置
// vue中是将路由注册成实例组件好挂载在vue的生命周期的
// react中 目前猜测BrowserRouter配置ROOT就直接相当于挂载或者注册路由的效果
//禁用浏览器返回
function fobidden_back () {
    //防止页面后退
    console.log ( "防止页面后退" );
    history.pushState ( null , null , document.URL );
    window.addEventListener ( 'popstate' , back_common )
}

//启用浏览器返回
function enable_back () {
    history.go ( -1 );
    // closeWinPage ();
    window.removeEventListener ( 'popstate' , back_common )
}

function closeWinPage () {
    if ( navigator.userAgent.indexOf ( 'MSIE' ) > 0 ) { // close IE
        console.log ( "IE===close" )
        if ( navigator.userAgent.indexOf ( 'MSIE 6.0' ) > 0 ) {
            window.opener = null;
            window.close ();
        } else {
            window.open ( '' , '_top' );
            window.top.close ();
        }
    } else { // close chrome;It is effective when it is only one.
        console.log ( "chrome===close" )
        window.opener = null;
        window.open ( 'about:blank' , '_self' );
        window.close ();
    }
}

function back_common () {
    console.log ( "用户点击后退按钮了" )
    history.pushState ( null , null , document.URL );
    // Modal.confirm ( {
    //     centered : true ,
    //     title : "确定要关闭退出吗?" ,
    //     content : "后退将关闭退出本页面,点击'确定'将继续退出本页面,点击'继续浏览页面'我就当什么也没发生过." ,
    //     cancelText : "确定" ,
    //     okText : "继续浏览页面" ,
    //     onCancel : () => {
    //         enable_back ();
    //         history.pushState ( null , null , document.URL );
    //     } ,
    //     onOk : () => {
    //         console.log ( "继续浏览页面" )
    //         history.pushState ( null , null , document.URL );
    //     }
    // } )
}

fobidden_back ();
console.log ( "index===========rootFromPathname==========" , window.location.pathname )
ReactDOM.render (
    <BrowserRouter>
        <Switch>
            <Route exact path="/App" name="App" component={ App } key="App"/>
            <Route exact path="/Login" name="Login" component={ Login } key="Login"/>
            <Route exact path="/404" name="404" component={ Page404 } key="404"/>
            <Redirect exact to="/Login" from='/'/>
            <Redirect exact to={ { pathname : "/App" , state : { rootFromPathname : window.location.pathname } } } from='/*'/>
        </Switch>
    </BrowserRouter>
    , document.getElementById ( 'root' ) );

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA

// serviceWorker.unregister();
