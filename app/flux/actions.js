
/*
* Flux Actions
* Using a dispatcher to dispatch a action
*/

const AppDispatcher = require("./dispatcher") ;
const ValueStore = require("./calValue")

// dispatch
let dispatch = {
	add : function(){
		AppDispatcher.dispatch({
			actionType : "ADD_FUN" 
		});
	} ,

	red : function(){
		AppDispatcher.dispatch({
			actionType : "RED_FUN" ,
			//text
		});
	}
}

// register a callback action
// note action must contain the *same* name in dispatch like actionType
AppDispatcher.register(function(action){
	let {actionType} = action ;
	switch(actionType) {
		case "ADD_FUN" :
			ValueStore.addFunHandler() ;
			ValueStore.emitChange() ;
			break ;
		case "RED_FUN" :
			ValueStore.redFunHandler() ;
			ValueStore.emitChange() ;
			break ;
		default : 
			break ;
	}
});

module.exports = dispatch ;