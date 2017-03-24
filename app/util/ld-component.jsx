
/*
* base component of all components
*/

import React , {Component} from "react" ;

module.exports = class LdComponent extends React.Component{

	constructor(props){
		super(props) ;
	}

	ajax(url, option){
		return new Ajax().ajax(url, option);
	}

	getParamsFromUrl(){
        let { location = { } } = this.props;
        let { query } = location;
        return query;
    }

	// 判断数据
	judgeData(code , message){
        if(parseInt(code) !== 0){
            alert(message);
            return false ;
        }else{
            return true ;
        }
    }
}