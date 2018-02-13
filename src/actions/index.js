export function addToCart(item){
	// console.log('inside action', item)
	return {
		type: 'ADDING_ITEM', 
		payload: item 
	}
}