// 初始 state
const initState = {
    userInfo : {} ,//用户信息
    systemInfo : {} ,//系统信息
    businessInfo : {} ,//业务信息
    otherInfo : {}//其他信息
};
// reducer可以接收state，但是绝不能修改state，返回的是新的state
export default ( state = initState , action ) => {
    var newState = JSON.parse ( JSON.stringify ( state ) ); //简单的深拷贝
    console.log ( action )
    return newState;
}