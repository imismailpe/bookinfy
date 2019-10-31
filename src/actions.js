import {EDITUSER} from './constants';

export const editUser=(user)=>{
	return {
		type: EDITUSER,
		payload: user
	}
}