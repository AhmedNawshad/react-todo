(this.webpackJsonptodolist=this.webpackJsonptodolist||[]).push([[0],{16:function(e,t,a){e.exports=a(29)},21:function(e,t,a){},27:function(e,t,a){},28:function(e,t,a){},29:function(e,t,a){"use strict";a.r(t);var n=a(0),c=a.n(n),i=a(3),r=a.n(i),s=(a(21),a(13)),l=a(8),o=a(9),d=a(2),u=a(15),m=a(14),h=a(10),p=a(11);a(7),a(27);var f=function(e){var t=e.items.map((function(t){return c.a.createElement("div",{class:"list-inline",key:t.key},c.a.createElement("p",null,c.a.createElement("input",{class:"card",type:"text",id:t.text,value:t.text,onChange:function(a){e.setUpdate(a.target.value,t.key)}}),c.a.createElement("span",{class:"input-group-addon"},c.a.createElement(h.a,{className:"faicons",icon:"trash",onClick:function(){return e.deleteItem(t.key)}}))))}));return c.a.createElement("div",null,c.a.createElement(p.a,{duration:300,easing:"ease-in-out"},t))},v=a(4),E=a(12);a(28);v.b.add(E.a);var b=function(e){Object(u.a)(a,e);var t=Object(m.a)(a);function a(e){var n;return Object(l.a)(this,a),(n=t.call(this,e)).state={items:[],currentItem:{text:"",key:""}},n.handleInput=n.handleInput.bind(Object(d.a)(n)),n.addItem=n.addItem.bind(Object(d.a)(n)),n.deleteItem=n.deleteItem.bind(Object(d.a)(n)),n.setUpdate=n.setUpdate.bind(Object(d.a)(n)),n}return Object(o.a)(a,[{key:"handleInput",value:function(e){this.setState({currentItem:{text:e.target.value,key:Date.now()}})}},{key:"addItem",value:function(e){e.preventDefault();var t=this.state.currentItem;if(console.log(t),""!==t.text){var a=[].concat(Object(s.a)(this.state.items),[t]);this.setState({items:a,currentItem:{text:"",key:""}})}}},{key:"deleteItem",value:function(e){var t=this.state.items.filter((function(t){return t.key!==e}));this.setState({items:t})}},{key:"setUpdate",value:function(e,t){var a=this.state.items;a.map((function(a){a.key===t&&(a.text=e)})),this.setState({items:a})}},{key:"render",value:function(){return c.a.createElement("div",{class:"page-content page-container",id:"page-content"},c.a.createElement("div",{class:"padding"},c.a.createElement("div",{class:"row container d-flex justify-content-center"},c.a.createElement("div",{class:"col-lg-18"},c.a.createElement("div",{class:"card px-3"},c.a.createElement("div",{class:"card-body"},c.a.createElement("header",null,c.a.createElement("h1",null,"Todo List"),c.a.createElement("form",{id:"to-do-form",class:"form-inline col-sm-offset-3",onSubmit:this.addItem},c.a.createElement("input",{type:"text",class:"form-control",placeholder:"Enter Text",value:this.state.currentItem.text,onChange:this.handleInput}),c.a.createElement("button",{type:"submit",class:"btn btn-info"},"Add"))),c.a.createElement("div",null,c.a.createElement(f,{items:this.state.items,deleteItem:this.deleteItem,setUpdate:this.setUpdate}))))))))}}]),a}(c.a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));r.a.render(c.a.createElement(c.a.StrictMode,null,c.a.createElement(b,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[16,1,2]]]);
//# sourceMappingURL=main.743a44a1.chunk.js.map