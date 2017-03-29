
// React and React-Router
import { Router, Route, hashHistory } from 'react-router';
import React , {Component} from 'react';
import {render} from 'react-dom';

// Redux
import {createStore} from "redux" ;
import counter from "../reducers" ;

import Home        from "./ld-home" ;
import List        from "./ld-list";
import CalController from "./ld-calController" ;

import SetDpr from "../util/dpr" ;


// let { subscribe, dispatch, getState } = createStore(reducer);
new SetDpr().set() ;
const store = createStore(counter) ;
const rootEle = document.getElementById('myApp') ;

function initRouter (){
	render((
	  <Router history={hashHistory}>
	    <Route path="/" component={Home}/>
	    <Route path="/home" component={Home}/>
	    <Route path="/list" component={List} />
	    <Route path="/calculate" component={CalController} />
	  </Router>
	), 
	rootEle ,  
	function(){
	    console.log("项目初始化...");
		/*实现项目的初始化*/
	});
}
initRouter() ;
store.subscribe(initRouter) ;
