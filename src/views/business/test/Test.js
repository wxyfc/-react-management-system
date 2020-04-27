import React from 'react'
import BaseContext from '@/assets/base/BaseContext'
import { Button } from 'antd'
import { Link } from 'react-router-dom';
import { store } from 'redux';

class thisContext extends BaseContext {
    // displayName = 'app';
    defaultPrivateName = 'app2'
    
    constructor ( props ) {
        super ( props )
        // super.post ( 1 , 2 , 3 , 4 )
        this.state = store.getState ();
        store.subscribe ( this.StoreChange )
    }
    
    state = {}
    StoreChange = () => {
        this.setState ( store.getState () );
        console.log ( "store发生改变了" )
        // 感知store发生变化之后，从store里获取最新的数据，然后进行设置
    };
    
    UNSAFE_componentWillMount () {
    }
    
    render () {
        
        return (
            <>
                <Button type="primary" onClick={ this.domClick }>测试</Button>
                <Link to="/Welcome" replace>Welcome</Link>
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
        store.dispatch ( { type : "TEST_DIS" , value : { ttt : 1111 , rrr : 222 } } );
    }
    
    componentWillUnmount () { // 组件的卸载
    }
}

export default thisContext;