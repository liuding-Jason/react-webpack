
import { Router, Route, hashHistory } from 'react-router';

import React , {Component} from 'react';
import {render} from 'react-dom';

import Home        from "./home" ;
import List        from "./list";

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