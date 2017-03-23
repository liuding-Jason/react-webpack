
/*
* set dpr
*/

class Dpr {
	constructor(opt){
		this.perFS	 		= 12;
		this.dpr 			= window.devicePixelRatio ;
		this.dprArr			= [1 , 2 , 3] ;
		this.is_android 	= false ;
		this.is_ios 		= false ;
		this.is_winPhone	= false ;
		this.is_pc			= false ;
		this.init() ; 
	}

	init(){
		this.getUserAgent() ;
		this.isDpr() ;
	}
	// judge user app version
	getUserAgent (){
		let appV = window.navigator.appVersion ;
		if(appV.toUpperCase().indexOf("IPHONE") != -1){
			this.is_ios = true
			return ;
		}
		if(appV.toUpperCase().indexOf("ANDROID") != -1){
			this.is_android = true ;
			return ;
		}
		if(appV.toUpperCase().indexOf("WINDOWS PHONE") != -1){
			this.is_winPhone = true ;
			return ;
		}
		if(appV.toUpperCase().indexOf("WINDOWS") != -1){
			this.is_pc = true ;
			return ;
		}
	} 
	// judge dpr  
	isDpr(){
		if(this.dprArr.indexOf(this.dpr) != -1){
			this.dprArr.push(this.dpr) ;
		} 
	}
	// get opt
	get (key){
		let t ;
		key && this.hasOwnProperty(key) ? t = this.key : t = null ;
		return t ;
	}
}


module.exports = class SetDpr extends Dpr{

	constructor(props){
		super(props);
	}

	set (){
		let html = document.getElementsByTagName('html')[0] ;
		if(this.dpr * 1 !== 1){
			console.log(parseInt( this.perFS * this.dpr ));
			html.setAttribute("data-dpr" , this.dpr);
			html.style.fontSize = parseInt( this.perFS * this.dpr ) + "px" ;
			return ;
		}
		let fs = 1 ;
		this.dprArr.map((item , index) => {
			fs *= item ;
		});
		html.setAttribute("data-dpr" , this.dpr);
		html.style.fontSize = parseInt( this.perFS * fs ) + "px" ;
	}
}


/*
module.exports = {
	ftSize : 72 ,
	dpr : [1 , 2 , 3] ,
	is_android : false ,
	is_ios : false ,
	is_winPhone : false ,
	is_pc : false ,
	init : function (){

	} ,
	isInDpr : function(){

	}
	getUserAgent : function(){
		let appV = window.navigator.appVersion ;
		if(appV.toUpperCase().indexOf("IPHONE") != -1){
			this.is_ios = true
			return ;
		}
		if(appV.toUpperCase().indexOf("ANDROID") != -1){
			this.is_android = true ;
			return ;
		}
		if(appV.toUpperCase().indexOf("WINDOWS PHONE") != -1){
			this.is_winPhone = true ;
			return ;
		}
		if(appV.toUpperCase().indexOf("WINDOWS") != -1){
			this.is_pc = true ;
			return ;
		}
	} ,	

	get : function(key){
		let t ;
		key && this.hasOwnProperty(key) ? t = this.key : t = null ;
		return t ;
	},

	getAll : function(){
		return { 
			is_android : this.is_android , 
			is_ios : this.is_ios , 
			is_winPhone : this.is_winPhone , 
			is_pc : this.is_pc 
		}
	} ,

	set : function(){
		this.getUserAgent();
		let dpr = window.devicePixelRatio ,
          	width = window.screen.availHeight  > window.screen.availWidth  ? window.screen.availWidth  : window.screen.availHeight  ,
          	html = document.getElementsByTagName('html')[0] ;
        html.setAttribute("data-dpr" , dpr) ;

        if(!this.is_pc){
        	html.style.fontSize = window.parseInt(width / dpr) + 'px' ;
        }else{
        	html.style.fontSize = '78px' ;
        }
	}
}*/