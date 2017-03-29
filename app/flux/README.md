
![flux](../lib/flux.png)
# React Flux

> ***Flux*** is a state manager of React . Flux contains **View** 、**Action**、**Dispatcher**、**Store** . 

### View

**View** means views of pages .

```bash
<div>
	<h1 className="cal-head">{value}</h1>
	<button className="cal-btn" onClick={addFun}>增加</button>
	<button className="cal-btn" onClick={redFun}>减少</button>
</div>
```

### Action

**Action** is the ONLY way of changing the state of Store . A action is an object in JavaScript , it contains all kinds of actions in your App , each of them should has a dispatch . Always remeber that you should use register() of a dispatch to registe your actions .

```bash
let dispatch = {
	add : function(){
		AppDispatcher.dispatch({
			actionType : "ADD_FUN" 
		});
	} ,

	red : function(){
		AppDispatcher.dispatch({
			actionType : "RED_FUN" ,
			//text
		});
	}
} ;
```

### Dispatcher

**Dispather** is the triggers of all your action . 

```bash
AppDispatcher.register(function(action){
	let {actionType} = action ;
	switch(actionType) {
		case "ADD_FUN" :
			ValueStore.addFunHandler() ;
			ValueStore.emitChange() ;
			break ;
		case "RED_FUN" :
			ValueStore.redFunHandler() ;
			ValueStore.emitChange() ;
			break ;
		default : 
			break ;
	}
});
```
### Store

**Store** is a warehouse of all your app's states .


## To See Result

> note : If you would not install all the rely packages , please do it follow [Build Guide](../../README.md) .

```bash
location:3000/calculate
```