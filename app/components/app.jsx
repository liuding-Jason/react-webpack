
import { Router, Route, hashHistory } from 'react-router';
import React , {Component} from 'react';
import {render} from 'react-dom';

import Home        from "./ld-home" ;
import List        from "./ld-list";

import SetDpr from "../util/dpr" ;

function initRouter (){

	new SetDpr().set() ;

	render((
	  <Router history={hashHistory}>
	    <Route path="/" component={Home}/>
	    <Route path="/home" component={Home}/>
	    <Route path="/list" component={List} />
	  </Router>
	), document.getElementById('myApp') , function(){
	    console.log("项目初始化...");
		/*实现项目的初始化*/
	});
}

setTimeout(initRouter , 0);