import React from 'react';
import ReactDOM from 'react-dom';
import '@/index.css';
import '@/myReactPrototype';

import { BrowserRouter , Route , Switch , Redirect } from "react-router-dom";
import routes from '@/react-route-js';

let ROOT = [];
const routesForEach = item => {
    if ( item.hasOwnProperty ( "childRoutes" ) && item.childRoutes.length > 0 ) {
        item.childRoutes.forEach ( routesForEach );
    }
    pushROOT ( item );
}
const pushROOT = item => {
    ROOT.push ( <Route path={ item.path } name={ item.name } component={ item.component } key={ item.name }/> )
}
routes.forEach ( routesForEach );
// import * as serviceWorker from './serviceWorker';

//BrowserRouter  目前我理解为跟vue中router-view一样的组件 routes则是配置
// vue中是将路由注册成实例组件好挂载在vue的生命周期的
// react中 目前猜测BrowserRouter配置ROOT就直接相当于挂载或者注册路由的效果
ReactDOM.render (
    <BrowserRouter>
        <Switch>
            <Redirect exact to="/App" from='/'/>
            { ROOT }
        </Switch>
    </BrowserRouter> , document.getElementById ( 'root' ) );

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA

// serviceWorker.unregister();
