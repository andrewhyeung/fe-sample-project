export default function(state = [], action){
	switch(action.type){	
		case 'ADDING_ITEM': 
			// console.log('inside reducer', action.payload)
			return [
				...state,
				action.payload
			]; 
	}
	return state
}