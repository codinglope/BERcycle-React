(window.webpackJsonprc=window.webpackJsonprc||[]).push([[0],{111:function(e,t,a){e.exports=a.p+"static/media/bg.2749d360.png"},112:function(e,t,a){},113:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),o=a(46),c=a.n(o),l=(a(57),a(1)),i=a(5),s=a(4),u=a(7),m=a(6),p=a(8),b=a(16),h=a(19),f=function(e){var t=e.user;return r.a.createElement("nav",{className:"nav-bar"},r.a.createElement("div",{className:"container-fluid"},r.a.createElement("ul",{className:"nav-list"},r.a.createElement("li",{className:"li"},r.a.createElement(b.b,{to:"/"},"Home")),r.a.createElement("li",{className:"li"},r.a.createElement(b.b,{to:"/map"},"Edu.Points")))),r.a.createElement("div",{className:"container-fluid2"},r.a.createElement("ul",{className:"nav-list2"},t?r.a.createElement("li",{className:"right"},r.a.createElement("a",{href:"/logout",onClick:function(){}},"Logout")):r.a.createElement(n.Fragment,null,r.a.createElement("li",{className:"right"},r.a.createElement(b.b,{to:"/signup"},"SignUp")),r.a.createElement("li",{className:"right"},r.a.createElement(b.b,{to:"/login"},"Login"))))))},d=a(9),g=a(24),O=(a(62),"pk.eyJ1IjoidHViYS1rYXNhcCIsImEiOiJjanh1ZTI0YXcwMDM4M2dtbnZ6eXJuOGs2In0.L_TRnX4VuwoBAP4cSCFCVQ");function E(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),a.push.apply(a,n)}return a}var v={width:"100vw",height:"calc(100vh - 60px)",margin:"auto"},y=Object(n.forwardRef)(function(e,t){var a=e.children,o=Object(n.useState)({width:"100%",height:"100%",latitude:13.375739,longitude:52.509352,pitch:47.5,zoom:5}),c=Object(d.a)(o,2),i=c[0],s=c[1];return r.a.createElement("div",{id:"map",style:v},r.a.createElement(g.c,Object.assign({ref:t},i,{mapboxApiAccessToken:O,mapStyle:"mapbox://styles/tuba-kasap/cjxyyrvwr052p1crzfxpiu7iw/draft",onViewportChange:function(e){return s(function(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?E(a,!0).forEach(function(t){Object(l.a)(e,t,a[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):E(a).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))})}return e}({},e,{transitionDuration:3e3}))}}),a))}),j=function(e){function t(){return Object(i.a)(this,t),Object(u.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(p.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{id:"center2"},r.a.createElement(y,null),r.a.createElement("div",{className:"home"},r.a.createElement("h1",{className:"title"},"BERcycle"),r.a.createElement("p",{className:"title"},"Welcome to BERcycle"),r.a.createElement(b.b,{to:"/map",className:"btn btn-danger redbut"},"Enter your trip.")))}}]),t}(r.a.Component),w=a(18),C=a.n(w),P=a(50),k=a.n(P),N=(a(93),a(51)),S=a.n(N),D=(a(94),a(27)),x=a.n(D),A=function(e){function t(){var e,a;Object(i.a)(this,t);for(var o=arguments.length,c=new Array(o),l=0;l<o;l++)c[l]=arguments[l];return(a=Object(u.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(c)))).mapRef=Object(n.createRef)(),a.markers=null,a.componentDidMount=function(){console.log(a.mapRef),x.a.get("/api/locations").then(function(e){console.log({response:e}),console.log(a.mapRef),a.markers=e.data.map(function(e){var t=e.location.coordinates;return r.a.createElement(g.a,{latitude:t.latitude,longitude:t.latitude},r.a.createElement(g.b,null,r.a.createElement("div",{class:"popup"},"$",e.name)))})}),a.addMapControls()},a.addMapControls=function(){if(a.mapRef.current){var e=a.mapRef.current.getMap(),t=new C.a.GeolocateControl({positionOptions:{enableHighAccuracy:!0},trackUserLocation:!0});e.addControl(t,"bottom-right"),e.addControl(new C.a.NavigationControl,"bottom-right"),e.addControl(new k.a({accessToken:C.a.accessToken,mapboxgl:C.a}),"top-left"),e.addControl(new S.a({accessToken:C.a.accessToken}),"top-left")}},a}return Object(p.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){return r.a.createElement(y,{ref:this.mapRef},this.markers)}}]),t}(r.a.Component),R=r.a.createContext(null,function(e){});function M(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),a.push.apply(a,n)}return a}function T(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?M(a,!0).forEach(function(t){Object(l.a)(e,t,a[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):M(a).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))})}return e}var I=function(e){function t(){var e,a;Object(i.a)(this,t);for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return(a=Object(u.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(r)))).state={user:{name:"",username:"",password:""}},a.handleChange=function(e){var t=e.target,n=t.name,r=t.value;a.setState({user:T({},a.state.user,Object(l.a)({},n,r))})},a.doAuth=function(e){e.preventDefault();var t=window.location.pathname.includes("signup")?"register":"login";x.a.post("/api/".concat(t),a.state.user).then(function(e){localStorage.setItem("token",e.data.token),a.props.history.push("/map")}).catch(function(e){a.setState({errorMessage:e.response.data.message})})},a}return Object(p.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){var e=this,t=window.location.pathname.includes("signup"),a=this.state,o=a.errorMessage,c=a.user;return r.a.createElement(R.Consumer,null,function(a){a._,a.setUser;return r.a.createElement("form",{id:"form",action:"/signup",method:"POST",className:"access"},t&&r.a.createElement(n.Fragment,null,r.a.createElement("label",{htmlFor:"name"},"Name"),r.a.createElement("br",null),r.a.createElement("input",{type:"text",name:"name",onChange:e.handleChange,value:c.name})),r.a.createElement("label",{htmlFor:"username"},"Username"),r.a.createElement("br",null),r.a.createElement("input",{type:"text",name:"username",onChange:e.handleChange,value:c.username}),r.a.createElement("label",{htmlFor:"password"},"Password"),r.a.createElement("br",null),r.a.createElement("input",{type:"password",name:"password",onChange:e.handleChange,value:c.password}),o&&r.a.createElement("div",{className:"error-message text-danger"},o),r.a.createElement("div",{className:"signupbutton"},r.a.createElement("button",{type:"submit",className:"btn btn-dark",onClick:e.doAuth},t?"Sign Up":"Login")))})}}]),t}(r.a.Component);function F(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),a.push.apply(a,n)}return a}function B(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?F(a,!0).forEach(function(t){Object(l.a)(e,t,a[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):F(a).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))})}return e}var J=function(e){function t(){var e,a;Object(i.a)(this,t);for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return(a=Object(u.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(r)))).state={user:null},a.onAuthChange=function(e){console.log("authed",e),a.setState({user:e})},a}return Object(p.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){return r.a.createElement(R.Provider,{value:B({},this.state,{onAuthChange:this.onAuthChange})},r.a.createElement(b.a,null,r.a.createElement(f,{user:this.state.user}),r.a.createElement(h.a,{path:"/",exact:!0,component:j}),r.a.createElement(h.a,{path:"/map",component:A}),r.a.createElement(h.a,{path:"/login",component:I}),r.a.createElement(h.a,{path:"/signup",component:I})))}}]),t}(r.a.Component);a(111),a(112);var L=function(){return r.a.createElement("div",{className:"App"},r.a.createElement(J,null))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(r.a.createElement(L,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})},52:function(e,t,a){e.exports=a(113)},57:function(e,t,a){}},[[52,1,2]]]);
//# sourceMappingURL=main.da261c4a.chunk.js.map