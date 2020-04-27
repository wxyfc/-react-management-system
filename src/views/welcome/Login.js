import React , { useState } from 'react'
import BaseContext from '@/assets/base/BaseContext'
import { Carousel , AutoComplete , Input , Space , Button , message } from 'antd';
import { localStorageSetItem } from '@/assets/util/index';

class thisContext extends BaseContext {
    // displayName = 'new';
    defaultPrivateName = 'Login'
    
    constructor ( props ) {
        super ( props )
    }
    
    state = {
        username : "admin" ,
        password : "admin" ,
        carouselImgList : [
            "http://47.94.89.73:8080/zeefile/audio/reactImgBg/bg00.jpg" ,
            "http://47.94.89.73:8080/zeefile/audio/reactImgBg/bg01.jpg" ,
            "http://47.94.89.73:8080/zeefile/audio/reactImgBg/bg02.jpg" ,
            "http://47.94.89.73:8080/zeefile/audio/reactImgBg/bg03.jpg" ,
            "http://47.94.89.73:8080/zeefile/audio/reactImgBg/bg04.jpg" ,
            "http://47.94.89.73:8080/zeefile/audio/reactImgBg/bg05.jpg" ,
            "http://47.94.89.73:8080/zeefile/audio/reactImgBg/bg06.jpg" ] ,
        autoCompleteChildrenTotal : [ { value : "admin" } , { value : "user" } ] ,
        autoCompleteChildren : []
    }
    
    UNSAFE_componentWillMount () {
        // this.$log ( 'render前执行' );1
    }
    
    render () {
        // this.$log ( 'render 方法' )2
        return (
            <React.Fragment>
                <div className="login theme-linear-gradient">
                    <div className="login-item-1"></div>
                    <div className="login-item-2">
                        <div className="carusel-div severe-box-shadow">
                            <Carousel afterChange={ this.carouselOnChange } dots={ false } autoplay>
                                {
                                    this.state.carouselImgList.map ( e => {
                                        return <img src={ e } className="carusel-img" key={ e }/>
                                    } )
                                }
                            </Carousel>
                        </div>
                    </div>
                    <div className="login-item-3">
                        <div className="login-handler-center">
                            <div className="login-card app-radius-border" onKeyUp={ this.onKeyEnter }>
                                <Space direction="vertical" size="large">
                                    <h1 className="login-title">react 后台管理系统</h1>
                                    <AutoComplete
                                        value={ this.state.username }
                                        options={ this.state.autoCompleteChildren }
                                        placeholder="请输入账号"
                                        onSelect={ this.autoCompleteOnSelect }
                                        onSearch={ this.autoCompleteOnSearch }
                                        onChange={ this.autoCompleteOnChange } allowClear autoFocus/>
                                    <Input.Password value={ this.state.password } onChange={ this.passwordOnChange } placeholder="请输入密码" allowClear/>
                                    <Button type="primary" block onClick={ this.loginFun }>登录</Button>
                                </Space>
                            </div>
                        </div>
                    </div>
                    <div className="login-item-4"></div>
                </div>
            </React.Fragment>
        )
    }
    
    componentDidMount () {
        // this.$log ( '第一次render后执行||this.getDOMNode()' )3
    }
    
    UNSAFE_componentWillReceiveProps () {
        // this.$log ( '在组件接收到一个新的 prop (更新后)时被调用' )3.4有传值的时候才会有好像
    }
    
    // 组件自身的 state 更新了，那么会依次执行  shouldComponentUpdate 、 UNSAFE_componentWillUpdate 、render 和  componentDidUpdate 。
    shouldComponentUpdate () { // 是一个特别的方法,当方法返回  false 的时候，组件不再向下执行生命周期方法。
        // this.$log ( '在组件接收到新的props或者state时被调用' )4
        return true
    }
    
    UNSAFE_componentWillUpdate () { // 不能在这里执行  setState
        // this.$log ( '在组件接收到新的props或者state但还没有render时被调用' );5
    }
    
    componentDidUpdate () { // 在组件完成渲染后
        // this.$log ( '在组件完成更新后立即调用' );6
    }
    
    autoCompleteOnSelect = ( password ) => {
        //自动完成输入框进行选择
        this.setState ( { password } );
        this.$log ( "autoCompleteOnSelect" , password );
    }
    autoCompleteOnSearch = ( username ) => {
        //自动完成输入框开始搜索
        let autoCompleteChildren = this.state.autoCompleteChildrenTotal.filter ( e => {
            if ( username && e.value.includes ( username ) ) {
                return e
            }
        } )
        this.setState ( { autoCompleteChildren } );
        this.$log ( "autoCompleteOnSearch" , autoCompleteChildren );
    }
    autoCompleteOnChange = ( username ) => {
        //自动完成输入框正在输入
        this.setState ( { username } );
        this.$log ( "autoCompleteOnChange" , username );
    }
    passwordOnChange = ( e ) => {
        this.setState ( { password : e.target.value } );
        this.$log ( "autoCompleteOnSelect" , e.target.value );
    }
    carouselOnChange = ( e , ee , eee ) => {
        //轮播图切换
    }
    onKeyEnter = ( e ) => {
        // e.persist ();
        //判断键盘按下enter键
        if ( e.keyCode == 13 ) {
            this.loginFun ();
        }
    }
    loginFun = () => {
        let { username , password } = this.state;
        if ( username && password && username == password ) {
            this.$log ( "登录" );
            localStorageSetItem ( "rootFromPathname" , "/Test" );
            this.props.history.replace ( { pathname : "/App" } )
            // this.props.history.replace ( { pathname : "/App" } )
        } else {
            // message.open ( { content : "你输入的指定是有点问题!" , duration : 1000 } )
            message.error ( "你输入的指定是有点问题!" , 1000 )
        }
    }
    
    componentWillUnmount () { // 组件的卸载
        // this.$log ( '组件的卸载' )
    }
}

export default thisContext;