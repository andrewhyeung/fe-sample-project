export default function(state = [], action){
	switch(action.type){	
		case 'ADDING_ITEM': 
			// console.log('inside reducer', action.payload)
			return [
				...state,
				action.payload
			]; 
		case 'REMOVE_ITEM': 
		// console.log('inside rmeove_item reducer', action)
		let index = state.findIndex((x) => x.filename === action.payload.filename); 
		console.log('index', index);
		return [
			...state.slice(0, index),
			...state.slice(index + 1)
		]
	}
	return state
}