
import React , { Component } from "react" ;
import Calculat from "./ld-calculat" ;

const ValueStore = require("../flux/calValue") ;
const Action     = require("../flux/actions") ;

module.exports = class CalController extends React.Component {

	constructor(props){
		super(props) ;
		this.state = {
			value : ValueStore.getValue()
		}
	}

	componentDidMount(){
		ValueStore.addChangeListener(this._onChange.bind(this));
	}

	componentWillUnmount(){
		ValueStore.removeChangeListener(this._onChange.bind(this));
	}

	addHandler(){
		Action.add() ;
	}

	redHandler(){
		Action.red() ;
	}

	_onChange(){
		this.setState({
			value : ValueStore.getValue()
		});
	}

	render(){
		return (
			<Calculat
				value={this.state.value}
				addFun={this.addHandler.bind(this)}
				redFun={this.redHandler.bind(this)}
			/>
		)
	}

}