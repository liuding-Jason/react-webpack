
/*
* valueStore contains value 、addFun 、redFun 
*/

const EventEmitter = require("events").EventEmitter ;
const assign = require("object-assign") ;

module.exports = assign({} , EventEmitter.prototype , {
	// origin value
	value : 0 ,

	getValue : function(){
		return this.value
	} ,
	addFunHandler : function(){
		return this.value += 1 ;
	} ,
	redFunHandler : function(){
		return this.value -= 1 ;
	} ,
	emitChange: function () {
	    this.emit('change') ;
	},

	addChangeListener: function(callback) {
	    this.on('change', callback);
	},

	removeChangeListener: function(callback) {
		this.removeListener('change', callback);
	}
});