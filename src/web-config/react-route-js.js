//eslint disable next line
//引入路由配置的json文件
import AsyncComponent from "@/assets/base/AsyncHComponent";
//将class形式的组件用AsyncComponent转换成可给其他属性赋值的组件形式
let routesJSON = require ( "@/web-config/routes.json" );

//目前userRoutes是json形式，需要转换成js形式
function recuFor ( list ) {
    let rl = [];
    list.forEach ( le => {
        let childRoutes = [];
        // Object的hasOwnProperty()方法返回一个布尔值，判断对象是否包含特定的自身（非继承）属性。
        if ( le.hasOwnProperty ( "childRoutes" ) && le.childRoutes.length > 0 ) {
            childRoutes = recuFor ( le.childRoutes );
        }
        let ro;
        let lect = le.component;
        if ( lect !== undefined ) {
            let component;
            let ls = lect.split ( "/" );
            if ( ls[ 0 ] === "welcome" ) {
                //原先是直接import的，但是由于文件是class的形式所以无法变成直接引入成组件赋值到component上面
                //根据json文件加载动态路由 AsyncComponent是react的特有class组件的用法，将class的组件转换成可赋值的显示的组件状态，然后再赋值到component就可以了
                component = AsyncComponent ( () => import(`@/views/welcome/${ls[ 1 ]}`) );
                //import(`@/views/welcome/${ls[ 1 ]} 直接引入的话，只会指向这个文件，并不是组件的形式，可能是class的形式
            } else {
                component = AsyncComponent ( () => import(`@/views/business/${lect}`) );
            }
            ro = { path : le.path , name : le.name , component , meta : le.meta , childRoutes };
        } else {
            ro = { path : le.path , name : le.name , redirect : le.redirect , meta : le.meta , childRoutes };
        }
        rl.push ( ro );
    } );
    return rl;
}

let routesJS = recuFor ( routesJSON );

export default routesJS;