(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{20:function(e,n,t){e.exports=t.p+"static/media/logo.5d5d9eef.svg"},23:function(e,n,t){e.exports=t(35)},31:function(e,n,t){},32:function(e,n,t){},33:function(e,n,t){},35:function(e,n,t){"use strict";t.r(n);var o=t(1),a=t.n(o),r=t(16),i=t.n(r),c=t(10),l=t(5),s=t(22),u="OWNER_NAME";var d={ownerName:""},f=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:d,n=arguments.length>1?arguments[1]:void 0;switch(n.type){case u:return Object(s.a)({},e,{ownerName:n.payload.ownerName});default:return e}},w=Object(l.b)({ownerNameReducer:f}),p=Object(l.c)(w,window.__REDUX_DEVTOOLS_EXTENSION__&&window.__REDUX_DEVTOOLS_EXTENSION__()),h=t(40),m=(t(31),t(6)),v=t(7),g=t(11),b=t(8),E=t(12),O=t(38),N=t(39),y=t(20),j=t.n(y),k=function(e){function n(){return Object(m.a)(this,n),Object(g.a)(this,Object(b.a)(n).apply(this,arguments))}return Object(E.a)(n,e),Object(v.a)(n,[{key:"componentDidMount",value:function(){this.props.getOwnerName()}},{key:"render",value:function(){return a.a.createElement("header",{className:"App-header"},a.a.createElement("img",{src:j.a,className:"App-logo",alt:"logo"}),a.a.createElement("h1",null,"Hello world, this is react-redux-pwa-skeleton by"," ",this.props.ownerName))}}]),n}(o.Component),_=Object(c.b)(function(e){return{ownerName:e.ownerNameReducer.ownerName}},function(e){return{getOwnerName:function(){return e({type:u,payload:{ownerName:"Ilya\xe7e Regaibi"}})}}})(k),A=(t(32),t(33),function(e){function n(){return Object(m.a)(this,n),Object(g.a)(this,Object(b.a)(n).apply(this,arguments))}return Object(E.a)(n,e),Object(v.a)(n,[{key:"render",value:function(){return a.a.createElement("div",{className:"App"},a.a.createElement(O.a,null,a.a.createElement(N.a,{exact:!0,path:"/",component:_}),a.a.createElement(N.a,{component:function(){return a.a.createElement("div",null,"404 Not found ")}})))}}]),n}(o.Component)),R=Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function T(e,n){navigator.serviceWorker.register(e).then(function(e){e.onupdatefound=function(){var t=e.installing;t.onstatechange=function(){"installed"===t.state&&(navigator.serviceWorker.controller?(console.log("New content is available and will be used when all tabs for this page are closed. See http://bit.ly/CRA-PWA."),n&&n.onUpdate&&n.onUpdate(e)):(console.log("Content is cached for offline use."),n&&n.onSuccess&&n.onSuccess(e)))}}}).catch(function(e){console.error("Error during service worker registration:",e)})}i.a.render(a.a.createElement(c.a,{store:p},a.a.createElement(h.a,{basename:"/TheMovieJs-client"},a.a.createElement(A,null))),document.getElementById("root")),function(e){if("serviceWorker"in navigator){if(new URL("/TheMovieJs-client",window.location).origin!==window.location.origin)return;window.addEventListener("load",function(){var n="".concat("/TheMovieJs-client","/service-worker.js");R?(function(e,n){fetch(e).then(function(t){404===t.status||-1===t.headers.get("content-type").indexOf("javascript")?navigator.serviceWorker.ready.then(function(e){e.unregister().then(function(){window.location.reload()})}):T(e,n)}).catch(function(){console.log("No internet connection found. App is running in offline mode.")})}(n,e),navigator.serviceWorker.ready.then(function(){console.log("This web app is being served cache-first by a service worker. To learn more, visit http://bit.ly/CRA-PWA")})):T(n,e)})}}()}},[[23,1,2]]]);
//# sourceMappingURL=main.10853c8b.chunk.js.map