import { Modal } from 'antd';
import { localStorageSetItem } from '@/assets/util/index';

var thisModal;

//禁用浏览器返回
function fobidden_back () {
    //防止页面后退
    history.pushState ( null , null , document.URL );
    window.addEventListener ( 'popstate' , back_common )
}

//启用浏览器返回
function enable_back () {
    history.go ( -1 );
    // closeWinPage ();
    window.removeEventListener ( 'popstate' , back_common )
}

//关闭页面
function closeWinPage () {
    if ( navigator.userAgent.indexOf ( 'MSIE' ) > 0 ) { // close IE
        if ( navigator.userAgent.indexOf ( 'MSIE 6.0' ) > 0 ) {
            window.opener = null;
            window.close ();
        } else {
            window.open ( '' , '_top' );
            window.top.close ();
        }
    } else { // close chrome;It is effective when it is only one.
        window.opener = null;
        window.open ( 'about:blank' , '_self' );
        window.close ();
    }
}

function back_common () {
    history.pushState ( null , null , document.URL );
    if ( !thisModal ) {
        thisModal = Modal.warning ( {
            centered : true ,
            title : "后退功能已被禁用" ,
            onOk : () => {
                thisModal = undefined;
            }
        } )
    }
}

function fobidden_beforeunload () {
    // 拦截判断是否离开当前页面
    window.addEventListener ( 'beforeunload' , beforeunload );
}

function enable_beforeunload () {
    // 销毁拦截判断是否离开当前页面
    window.removeEventListener ( 'beforeunload' , beforeunload );
}

function beforeunload ( e ) {
    localStorageSetItem ( "rootFromPathname" , window.location.pathname );
}

fobidden_back ();
fobidden_beforeunload ();