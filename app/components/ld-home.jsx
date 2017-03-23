
import React , {Component} from 'react' ;

module.exports = class Home extends React.Component {

	constructor(props){
		// 继承父组件传过来的属性
		super(props);
	}

	init(){

	}

	/*
	* 声明周期函数
	*/
	componentWillMount(){

	}

	componentDidMount(){
		console.log("Home Page");
	}

	render(){
		return (
			<div>
				<h1>Home</h1>
			</div>
		)
	}
}
