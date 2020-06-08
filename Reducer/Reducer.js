
const initalState ={
    login :[],
    loadingSreen:false,
}



export const Reducer = (state = initalState,action)=>{
    if(action.type=='Add_Login'){
        return{
            ...state,
            data:action.payload
        }
    }
    if(action.type=='Set_loadingSreen'){
        return{
            ...state,
            loadingSreen:action.payload
        }
    }
    return state ;

}
