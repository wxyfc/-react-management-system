import React from 'react'
import BaseContext from '@/assets/base/BaseContext'
import { Carousel } from 'antd';

class thisContext extends BaseContext {
    // displayName = 'new';
    defaultPrivateName = 'Login'
    
    constructor ( props ) {
        super ( props )
    }
    
    state = {
        name : "yun"
    }
    
    UNSAFE_componentWillMount () {
        // this.$log ( 'render前执行' );1
    }
    
    render () {
        // this.$log ( 'render 方法' )2
        return (
            <React.Fragment>
                <div className="login">
                    <div className="login-item-1"></div>
                    <div className="login-item-2">
                        <div className="carusel-div">
                            <Carousel afterChange={ this.carouselOnChange }>
                                <div>
                                    <h3>1</h3>
                                </div>
                                <div>
                                    <h3>2</h3>
                                </div>
                                <div>
                                    <h3>3</h3>
                                </div>
                                <div>
                                    <h3>4</h3>
                                </div>
                            </Carousel>
                        </div>
                    </div>
                    <div className="login-item-3">
                        <button onClick={ this.domClick }>{ this.state.name }</button>
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
    
    carouselOnChange = () => {
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