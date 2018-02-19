export function addToCart(item){
	// console.log('inside action', item)
	return {
		type: 'ADDING_ITEM', 
		payload: item 
	}
}

export function removeFromCart(item){
	return {
		type: 'REMOVE_ITEM', 
		payload: item
	}
}