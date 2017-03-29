
/*
* Calculation Example of Flux
*/

import React , { Component } from "react" ;
require("./ld-calculat.css");

module.exports = class Calculat extends React.Component {

	constructor(props){
		super(props) ;
	}

	render(){
		let {
			value = 0 , 
			addFun = function(){} , 
			redFun = function(){} 
		} = this.props ;
		return (
			<div>
				<h1 className="cal-head">{value}</h1>
				<button className="cal-btn" onClick={addFun}>增加</button>
				<button className="cal-btn" onClick={redFun}>减少</button>
			</div>
		)
	}
}




