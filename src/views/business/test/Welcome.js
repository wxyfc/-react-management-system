import React from 'react'
import BaseContext from '@/assets/base/BaseContext'
import { Button } from 'antd'
import { Link } from 'react-router-dom';

class thisContext extends BaseContext {
    // displayName = 'app3';
    defaultPrivateName = 'app3'
    
    constructor ( props ) {
        super ( props )
        // super.post ( 1 , 2 , 3 , 4 )
    }
    
    state = {}
    
    UNSAFE_componentWillMount () {
    }
    
    render () {
        
        return (
            <>
                <Button type="primary" onClick={ this.domClick }><Link to="/Test" replace>Test</Link></Button>
            </>
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
    
    domClick = ( e ) => {
        // e.persist ();
        this.$log ( e );
    }
    
    componentWillUnmount () { // 组件的卸载
    }
}

export default thisContext;