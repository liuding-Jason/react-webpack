
/*
* a simple redux reduce which ONLY contains a single state 
*/

module.exports = (state = 0 , action) => {
	let {type} = action ;
	switch(type){
		case "ADD_FUN" : 
			return state + 1 ;
		case "RED_FUN" :
			return state - 1 ;
		default:
			return state ;
	}
} ;
