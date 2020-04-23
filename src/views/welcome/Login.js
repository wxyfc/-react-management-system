import React from 'react'
import BaseContext from '@/assets/base/BaseContext'
import { Carousel , AutoComplete , Input , Space } from 'antd';

class thisContext extends BaseContext {
    // displayName = 'new';
    defaultPrivateName = 'Login'
    
    constructor ( props ) {
        super ( props )
    }
    
    state = {
        name : "yun" ,
        carouselImgList : [
            "http://47.94.89.73:8080/zeefile/audio/banner/images/banner/banner1.png" ,
            "http://47.94.89.73:8080/zeefile/audio/banner/images/banner/banner2.png" ,
            "http://47.94.89.73:8080/zeefile/audio/banner/images/banner/banner3.png" ,
            "http://47.94.89.73:8080/zeefile/audio/banner/images/banner/banner4.png" ,
            "http://47.94.89.73:8080/zeefile/audio/banner/images/banner/banner5.png" ,
            "http://47.94.89.73:8080/zeefile/audio/banner/images/banner/banner6.png" ,
            "http://47.94.89.73:8080/zeefile/audio/banner/images/banner/banner7.png" ,
            "http://47.94.89.73:8080/zeefile/audio/banner/images/banner/banner9.png" ] ,
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
                        <div className="login-card app-radius-border">
                            <Space direction="vertical">
                                <h1></h1>
                                <AutoComplete children={ this.state.autoCompleteChildren } onSelect={ this.autoCompleteOnSelect } onSearch={ this.autoCompleteOnSearch }
                                              onChange={ this.autoCompleteOnChange } allowClear autoFocus/>
                                <button onClick={ this.domClick }>{ this.state.name }</button>
                            </Space>
                        </div>
                    </div>
                    <div className="login-item-4"></div>
                    <div className="login-item-5"></div>
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
    
    autoCompleteOnSelect = () => {
    }
    autoCompleteOnSearch = () => {
    }
    autoCompleteOnChange = () => {
    }
    carouselOnChange = ( e , ee , eee ) => {
        console.log ( e , ee , eee )
    }
    domClick = ( e ) => {
        // e.persist ();
        this.setState ( {
            name : 'yun1'
        } )
    }
    
    componentWillUnmount () { // 组件的卸载
        this.$log ( '组件的卸载' )
    }
}

export default thisContext;