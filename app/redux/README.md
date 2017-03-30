![redux](../lib/redux.png)

# React Redux

> ***Redux*** is a perfect state manager of React . With redux , you could manage all your states of your app . In **Flux** , you can create one or more store of states , but ONLY a store should be created in Redux . 

## Store 

**Store** is a store of states . Always remeber that you can ONLY cteate one state in your app .
```bash
	import {createStore} from "redux" ;
	const store = createStore(reduce) ;
```

## Action

**Action** is an object describing a way to change the state . In a action , **type** must be declared .
```bash
{type : "ADD_FUN"}
```  

## Reduce

**Reduce** is a pure function .
```bash
/*
* a simple redux reduce which ONLY contains a single state 
*/

module.exports = (state = 0 , action) => {
	let {type} = action ;
	switch(type){
		case "ADD_FUN" : 
			return state + 1 ;
		case "RED_FUN" :
			return state - 1 ;
		default:
			return state ;
	}
} ;

```

## Dispatch

**Dispatch** is a trigger of a action . 

```bash
store.dispatch({type : "ADD_FUN"}) ;
```


## View

```bash
<div>
	<h1 className="cal-head">{this.state.value}</h1>
	<button className="cal-btn" onClick={this.addFun}>增加</button>
	<button className="cal-btn" onClick={this.redFun}>减少</button>
</div>
```

## To See Result

> note : If you would not install all the rely packages , please do it follow [Build Guide](../../README.md) .

```bash
location:3000/counter
```
