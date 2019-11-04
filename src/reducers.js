import {CALLING_API,FINISHED_API} from './constants';

const initialState={
	userInEdit:{},
	isLoading: true
}

export const setDataR=(state=initialState,action={})=>{
	switch(action.type){
		case CALLING_API:
			return Object.assign({},state,{statusMessage: action.payload,isLoading: true})
		case FINISHED_API:
			return Object.assign({},state,{statusMessage: action.payload,isLoading: false})
		default:
			return state;
	}
}