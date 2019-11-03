const defaultState = {
    focused: false
};


//纯函数，给定固定的输入，一定有固定的输出，并且不会改变原来的值

export default (state = defaultState, action) => {
    if(action.type === 'search_focus'){
        return{
            focused:true
        }
    }
    if(action.type === 'search_blur'){
        return{
            focused:false
        }
    }
  return state
}