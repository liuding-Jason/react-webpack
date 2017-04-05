
/*
* Counter Component
*/

import React , {Component} from "react" ;
import reduce from "../redux/reduce" ;

import {createStore} from "redux" ;
const store = createStore(reduce) ;

module.exports = class Counter extends React.Component {

	constructor(props){
		super(props) ;
		this.state = {
			value : store.getState()
		}

	}

	componentDidMount(){
		store.subscribe(this._onChange.bind(this)) ;
	}

	_onChange(){
		this.setState({
			value : store.getState() 
		});
	}

	addFun(){
		store.dispatch({type : "ADD_FUN"}) ;
	}

	redFun(){
		store.dispatch({type : "RED_FUN"});
	}

	render(){
		return (
			<div>
				<h1 className="cal-head">{this.state.value}</h1>
				<button className="cal-btn" onClick={this.addFun}>增加</button>
				<button className="cal-btn" onClick={this.redFun}>减少</button>
			</div>
		)
	}
}

