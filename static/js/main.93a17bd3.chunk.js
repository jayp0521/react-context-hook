(this["webpackJsonpreact-context-hook-example"]=this["webpackJsonpreact-context-hook-example"]||[]).push([[0],[,,,function(e,t,n){e.exports=n(12)},,,,,,,function(e,t,n){},function(e,t,n){},function(e,t,n){"use strict";n.r(t);var r=n(0),o=n.n(r),a=n(2),c=n.n(a),l=(n(10),o.a.createContext());function u(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function m(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(n,!0).forEach((function(t){u(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(n).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){if(!(Symbol.iterator in Object(e)||"[object Arguments]"===Object.prototype.toString.call(e)))return;var n=[],r=!0,o=!1,a=void 0;try{for(var c,l=e[Symbol.iterator]();!(r=(c=l.next()).done)&&(n.push(c.value),!t||n.length!==t);r=!0);}catch(u){o=!0,a=u}finally{try{r||null==l.return||l.return()}finally{if(o)throw a}}return n}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance")}()}var f,h=function(e){console.group("%c react-context-hook ","background: #fcc; color: #333"),console.error("Sorry, you can't modify the [".concat(e,"] property this way.")),console.groupEnd()},p={set:function(e,t,n){return h(t),!0},deleteProperty:function(e,t){return h(t),!0}},E={listener:function(){},proxyStore:!0},b=[],g={push:function(e,t,n,r){b.push({action:t,state:e,key:n,value:r})},log:function(e){var t=b[b.length-1],n=t.action,r=t.state,o=t.key,a=t.value;console.group("%c react-context-hook","font-weight: bold"),console.info("%c ".concat("PREV STATE"," "),"background: #00e5a0;font-weight: bold",r),console.info("%c ".concat("ACTION"," %c ",n),"background: yellow;font-weight: bold","font-weight: bold;",o,a),console.info("%c ".concat("NEXT STATE"," "),"background: #00cbff;font-weight: bold",e),console.groupEnd()}};function v(){return Object(r.useContext)(l)}function y(e,t,n){var r=v();void 0===r.get(e)&&n&&r.set(e,t);var o=d(e),a=k(e);return[O(e,t),o,a]}function d(e){var t=v();return function(n){return t.set(e,n)}}function k(e){var t=v();return function(){return t.remove(e)}}function O(e,t){return v().get(e,t)}var j=function(e){var t=e.title,n=e.subtitle;return o.a.createElement("header",{className:"App-header"},o.a.createElement("nav",null,o.a.createElement("ul",null,o.a.createElement("li",null,o.a.createElement("a",{href:"docs"},"Documentation")),o.a.createElement("li",null,o.a.createElement("a",{href:"https://github.com/Spyna/react-context-hook"},"GitHub source code")))),o.a.createElement("div",null,o.a.createElement("h2",null,t),o.a.createElement("p",null,n)))},w=n(1),S=function(){var e=y("count",0),t=Object(w.a)(e,3),n=t[0],r=t[1],a=t[2];return o.a.createElement("section",null,o.a.createElement("h3",null,"Set the value ",o.a.createElement("em",null,'"count"')," in the store"),o.a.createElement("button",{onClick:function(){return r(n-1)}},"Decrement - "),o.a.createElement("span",{className:"count"},n),o.a.createElement("button",{onClick:function(){return r(n+1)}},"Increment + "),o.a.createElement("button",{onClick:function(){return a()}},'Delete "count" from store'))},C=function(){var e=y("username","spyna",!0),t=Object(w.a)(e,2),n=t[0],r=t[1],a=o.a.useState(n),c=Object(w.a)(a,2),l=c[0],u=c[1];return o.a.createElement("section",null,o.a.createElement("h3",null,"Set the value ",o.a.createElement("em",null,'"username"')," in the store"),o.a.createElement("form",{onSubmit:function(e){e.preventDefault(),r(l)}},o.a.createElement("input",{onChange:function(e){u(e.target.value)},value:l,placeholder:"type your username"}),o.a.createElement("button",null,"Change value in store")))},x=function(){f.set("count",25).then((function(){console.log("I modified the store, and I'm not a React component")})),f.set("pippo",25)},P=(n(11),"login.logged_user"),A=function(){var e=O(P,{name:"My name",surname:" surname",access_token:{type:"Bearer",token:"d293LCB5b3UgYXJlIHZlcnkgY3VyaW91cyEgZ29vZCBmb3IgeW91",expires_in:3600}}),t=d(P),n=k(P);return o.a.createElement("section",null,o.a.createElement("h3",null,"Set/Remove this object in the store with the key ",o.a.createElement("code",null,P)),o.a.createElement("pre",null,o.a.createElement("code",null,JSON.stringify(e,null," "))),o.a.createElement("button",{onClick:function(){return t(e)}},"set Object in store"),o.a.createElement("button",{onClick:function(){return n()}},"remove Object from store"))},I=function(){var e=y("price"),t=Object(w.a)(e,3),n=t[0],r=t[1],a=t[2];return o.a.createElement("section",null,o.a.createElement("h3",null,"Set/Remove the key",o.a.createElement("code",null,"price")," with the value of"," ",o.a.createElement("code",null,"99.9 $")),o.a.createElement("pre",null,o.a.createElement("code",null,n)),o.a.createElement("button",{onClick:function(){return r("99.9 $")}},"set price in store"),o.a.createElement("button",{onClick:function(){return a()}},"remove prce from store"))},N=function(){var e,t=[d(e="a-sample-key"),k(e)],n=Object(w.a)(t,2),r=n[0],a=n[1];return o.a.createElement("section",null,o.a.createElement("h3",null,"Set/Remove the key",o.a.createElement("code",null,"'a-sample-key'")," with the value"," ",o.a.createElement("code",null,"'the value'")),o.a.createElement("button",{onClick:function(){return r("the value")}},"set 'a-sample-key' in store"),o.a.createElement("button",{onClick:function(){return a()}},"remove 'a-sample-key' from store"))};var T,D,R,B=(T=function(){var e=v().getState();return o.a.createElement("div",{className:"App"},o.a.createElement(j,{title:"React context Hook",subtitle:"A 1.2kB library to manage the global state with the Context API and React hooks"}),o.a.createElement("section",null,o.a.createElement("h3",null,"This is a React App that has a global state. This is the global"," ",o.a.createElement("em",null,"store")," value."),o.a.createElement("pre",null,o.a.createElement("code",null,JSON.stringify(e,null," "))),o.a.createElement("h4",null,"You can change the global state from different components, using the buttons you find in this page"),o.a.createElement("p",null,"Uh, you can event",o.a.createElement("button",{onClick:function(){return x()}},"Modify the store")," from a ",o.a.createElement("em",null,"NON Component")," Object or function.")),o.a.createElement(S,null),o.a.createElement(C,null),o.a.createElement(A,null),o.a.createElement(I,null),o.a.createElement(N,null))},D={count:10},R={listener:function(e){console.log("state changed",e)},logging:!0},function(e){var t=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:E,t=arguments.length>1?arguments[1]:void 0,n=s(Object(r.useState)(t),2),o=n[0],a=n[1],c=Object.freeze(m({},E,{},e)),l=c.listener,u=c.proxyStore,i=c.logging;function f(e){return new Promise((function(t){var n=m({},o,{},e);a(n),t(e),i&&g.log(n),l(e)}))}i&&g.log(t);var h={get:function(e,t){var n=o[e];return void 0===n&&(n=t),n},set:function(e,t){return i&&g.push(m({},o),"set",e,t),o[e]=t,f(o)},remove:function(e){return i&&g.push(m({},o),"remove",e),delete o[e],f(o)},getState:function(){return Object.assign({},o)}};return u&&(h=new Proxy(h,p)),h}(R,D);return f=t,o.a.createElement(l.Provider,{value:t},o.a.createElement(T,e))});c.a.render(o.a.createElement(B,null),document.getElementById("root"))}],[[3,1,2]]]);
//# sourceMappingURL=main.93a17bd3.chunk.js.map