

import React , {Component} from "react" ;
import Tappable from 'react-tappable';

class ListItem extends React.Component {

	constructor(props){
		super(props);
	}

	init(){

	}

	componentWillMount(){

	}
	
	componentDidMount(){


	}

	_handleClickEvent(value){
		console.log("click");
		console.log(value);
	}

	render(){
		return (
			<Tappable onTap={this._handleClickEvent.bind(this)} moveThreshold={10}>
				<div class="ld-ll-con">
					
				</div>
			</Tappable>
		)
	}
}

module.exports = ListItem ;