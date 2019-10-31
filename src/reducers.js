import {editUser} from './actions';
import {EDITUSER} from './constants';

const initialState={
	userInEdit:{}
}

export const setDataR=(state=initialState,action={})=>{
	switch(action.type){
		case EDITUSER:
			return Object.assign({},state,{userInEdit: action.payload});
		default:
			return state;
	}
}