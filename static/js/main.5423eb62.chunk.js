(this.webpackJsonpbookinfy=this.webpackJsonpbookinfy||[]).push([[0],{49:function(e,t,a){e.exports=a(87)},77:function(e,t,a){},86:function(e,t,a){},87:function(e,t,a){"use strict";a.r(t);var n=a(0),l=a.n(n),c=a(19),r=a.n(c),o=a(28),s=a(12),m=a(16),u=a(91),i=a(90),d=(a(58),a(13)),E=a(11),p=a.n(E);function b(e){var t=e.props;return l.a.createElement("tr",null,l.a.createElement("td",null,t._id),l.a.createElement("td",null,t.name),l.a.createElement("td",null,t.email),l.a.createElement("td",null,l.a.createElement(s.b,{className:"nav-link",to:"/edituser/".concat(t._id)},"Edit")))}function v(){var e=Object(n.useState)([]),t=Object(d.a)(e,2),a=t[0],c=t[1];return Object(n.useEffect)((function(){p.a.get("http://localhost:4000/users").then((function(e){c(e.data)})).catch((function(e){console.log(e)}))}),[]),l.a.createElement("div",{className:"wrapper-users"},l.a.createElement("div",{className:"container"},l.a.createElement("table",{className:"table table-striped table-dark"},l.a.createElement("thead",{className:"thead-dark"},l.a.createElement("tr",null,l.a.createElement("td",null,"ID"),l.a.createElement("td",null,"Name"),l.a.createElement("td",null,"Email"),l.a.createElement("td",null,"Action"))),l.a.createElement("tbody",null,a.map((function(e){return l.a.createElement(b,{props:e,key:e._id})}))))))}function f(){var e=h(""),t=h(""),a=h("");return l.a.createElement("div",{className:"wrapper"},l.a.createElement("form",{onSubmit:function(n){n.preventDefault();var l={name:e.value,email:t.value,password:a.value};p.a.post("http://localhost:4000/create",l).then((function(e){console.log(e.data)})).catch((function(e){console.log(e)}))}},l.a.createElement("div",{className:"form-group row"},l.a.createElement("label",{className:"col-sm-4"},"Name:"),l.a.createElement("input",Object.assign({},e,{name:"name",type:"text",className:"form-control col-sm-8"}))),l.a.createElement("div",{className:"form-group row"},l.a.createElement("label",{className:"col-sm-4"},"Email:"),l.a.createElement("input",Object.assign({},t,{type:"email",className:"form-control col-sm-8"}))),l.a.createElement("div",{className:"form-group row"},l.a.createElement("label",{className:"col-sm-4"},"Password:"),l.a.createElement("input",Object.assign({},a,{type:"password",className:"form-control col-sm-8"}))),l.a.createElement("button",{type:"submit",className:"btn btn-success"},"Submit")))}function h(e){var t=Object(n.useState)(e),a=Object(d.a)(t,2),l=a[0],c=a[1];return{value:l,onChange:function(e){c(e.target.value)}}}function g(e){var t=e.props,a=N(t.name),n=N(t.email);return l.a.createElement(l.a.Fragment,null,l.a.createElement("tr",null,l.a.createElement("td",null,"Id"),l.a.createElement("td",null,t._id)),l.a.createElement("tr",null,l.a.createElement("td",null,"Name"),l.a.createElement("td",null,l.a.createElement("input",Object.assign({},a,{type:"text"})))),l.a.createElement("tr",null,l.a.createElement("td",null,"Email"),l.a.createElement("td",null,l.a.createElement("input",Object.assign({},n,{type:"email"})))),l.a.createElement("tr",null,l.a.createElement("td",{colSpan:"2"},l.a.createElement("button",{onClick:function(){var e={name:a.value,email:n.value};console.log("submitted data is ",e),console.log("userid is ",t._id),p.a.delete("http://localhost:4000/users/delete/".concat(t._id),e).then((function(e){console.log(e)})).catch((function(e){console.log("error--",e)}))}},"Delete user"),"\xa0",l.a.createElement("button",{onClick:function(){var e={name:a.value,email:n.value};console.log("submitted data is ",e),console.log("userid is ",t._id),p.a.put("http://localhost:4000/users/update/".concat(t._id),e).then((function(e){console.log(e)})).catch((function(e){console.log("error--",e)}))}},"Update"))))}function N(e){var t=Object(n.useState)(e),a=Object(d.a)(t,2),l=a[0],c=a[1];return{value:l,onChange:function(e){c(e.target.value)}}}function w(e){var t=Object(n.useState)(),a=Object(d.a)(t,2),c=a[0],r=a[1],o=Object(n.useState)(!0),s=Object(d.a)(o,2),m=s[0],u=s[1];return Object(n.useEffect)((function(){u(!0),p.a.get("http://localhost:4000/users/edit/".concat(e.match.params.userid)).then((function(e){r(e.data),u(!1)})).catch((function(e){console.log(e)}))}),[]),l.a.createElement("div",{className:"wrapper-users"},l.a.createElement("div",{className:"container"},l.a.createElement("table",{className:"table table-striped table-dark"},l.a.createElement("thead",{className:"thead-dark"},l.a.createElement("tr",null,l.a.createElement("td",null,"Field"),l.a.createElement("td",null,"Value"))),l.a.createElement("tbody",null,!m&&l.a.createElement(g,{props:c})))))}a(77);var j={userInEdit:{}},O=a(22);a(86),Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var k=Object(O.b)((function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:j,t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};switch(t.type){case"EDITUSER":return Object.assign({},e,{userInEdit:t.payload});default:return e}}));r.a.render(l.a.createElement(o.a,{store:k},l.a.createElement((function(){return l.a.createElement(s.a,null,l.a.createElement("div",{className:"App"},l.a.createElement("header",null,l.a.createElement(u.a,{bg:"info",expand:"md"},l.a.createElement(u.a.Brand,{href:"#"},"BookInf"),l.a.createElement(u.a.Toggle,{"aria-controls":"basic-navbar-nav"}),l.a.createElement(u.a.Collapse,{id:"basic-navbar-nav"},l.a.createElement(i.a,{className:"mr-auto"},l.a.createElement(s.b,{className:"nav-link",to:"/createuser"},"Create User"),l.a.createElement(s.b,{className:"nav-link",to:"/viewusers"},"View Users"),l.a.createElement(s.b,{className:"nav-link",to:"/edituser/5db063f078c8752d54785b03"},"Edit"))))),l.a.createElement("div",{className:"container"},l.a.createElement("div",{className:"row"},l.a.createElement("div",{className:"col-md-12"},l.a.createElement(m.c,null,l.a.createElement(m.a,{path:"/createuser",component:f}),l.a.createElement(m.a,{path:"/viewusers",component:v}),l.a.createElement(m.a,{path:"/edituser/:userid/",component:w})))))))}),null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}},[[49,1,2]]]);
//# sourceMappingURL=main.5423eb62.chunk.js.map