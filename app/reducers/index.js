
module.exports = (state = 0 , action) => {
	switch(action.type){
		case 'INCREASE' :
			return state + 1 ;
		case 'DECREASE' :
			return state - 1 ;
		default :
			return state ;
	}
}