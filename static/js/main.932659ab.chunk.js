(this.webpackJsonptodos=this.webpackJsonptodos||[]).push([[0],{18:function(e,t,n){},30:function(e,t,n){},32:function(e,t,n){"use strict";n.r(t);var c=n(0),i=n.n(c),s=n(6),a=n.n(s),r=n(9),l=n(12),o=n(3),j=(n(18),n(10)),d=n.n(j),u=n(1);function b(){var e=Object(c.useState)([]),t=Object(o.a)(e,2),n=t[0],i=t[1],s=Object(c.useState)(""),a=Object(o.a)(s,2),j=a[0],b=a[1],h=Object(c.useState)("all"),m=Object(o.a)(h,2),O=m[0],f=m[1],x=Object(c.useState)([]),p=Object(o.a)(x,2),v=p[0],g=p[1];Object(c.useEffect)((function(){A(),M(),console.log("hey")}),[n,O]);var N=function(e){b(e.target.value)},y=n.filter((function(e){return!e.completed})),k=n.filter((function(e){return!0===e.completed})),w=function(e){f(e.target.name)},S=Object(c.useState)(""),C=Object(o.a)(S,2),z=C[0],V=C[1],M=function(){switch(O){case"todo":g(n.filter((function(e){return!1===e.completed})));break;case"completed":g(n.filter((function(e){return!0===e.completed})));break;default:g(n)}},A=function(){localStorage.setItem("data",JSON.stringify(n))};return Object(c.useEffect)((function(){var e=localStorage.getItem("my-data");e&&i(JSON.parse(e))}),[]),Object(c.useEffect)((function(){localStorage.setItem("my-data",JSON.stringify(n))})),Object(u.jsxs)(u.Fragment,{children:[Object(u.jsxs)("div",{className:"container title",children:[Object(u.jsx)("h1",{children:"TODOS"})," ",Object(u.jsx)("span",{children:Object(u.jsx)(d.a,{style:{fontSize:75}})})]}),Object(u.jsxs)("div",{className:"container d-flex mt-5 justify-content-center",children:[Object(u.jsx)("div",{className:"container form-container",children:Object(u.jsxs)("form",{onSubmit:function(e){if(e.preventDefault(),""===j.trim())return V("Vous n'avez pas entrer un todo"),!1;V("");var t={id:Math.random(),text:j,completed:!1,editing:!1};i(Object(l.a)(n).concat(t)),b("")},className:"form",children:[Object(u.jsx)("input",{type:"text",value:j,onChange:N}),Object(u.jsx)("button",{className:"button",type:"submit",children:"Ajouter"})]})}),""!==z&&Object(u.jsx)("p",{style:{marginLeft:"20px",color:"red",outline:"none",border:"none"},children:z})]}),Object(u.jsxs)("div",{className:"container mt-5",children:[Object(u.jsxs)("div",{className:"filter",children:[Object(u.jsx)("div",{className:"container",children:v.map((function(e){return Object(u.jsx)("div",{className:"list-group-item  listes ".concat(e.completed&&"completed"),children:Object(u.jsxs)("p",{children:[e.text," ",Object(u.jsx)("input",{checked:e.completed,className:"checkbox",onChange:function(){return function(e){var t=n.findIndex((function(t){return t.id===e.id})),c=Object.assign({},n[t]);c.completed=!c.completed;var s=Object.assign([],n);s[t]=c,i(s)}(e)},type:"checkbox"})," ",Object(u.jsxs)("span",{children:[" ",Object(u.jsx)("button",{onClick:function(){return function(e){var t=n.findIndex((function(t){return t.id===e.id})),c=Object.assign({},n[t]);c.edit=!0;var s=Object.assign([],n);s[t]=c,i(s)}(e)},className:"edit",children:Object(u.jsxs)("svg",{xmlns:"http://www.w3.org/2000/svg",root:"",width:"16",height:"16",fill:"currentColor",class:"bi bi-pencil-square",viewBox:"0 0 16 16",children:[Object(u.jsx)("path",{d:"M15.502 1.94a.5.5 0 0 1 0 .706L14.459 3.69l-2-2L13.502.646a.5.5 0 0 1 .707 0l1.293 1.293zm-1.75 2.456-2-2L4.939 9.21a.5.5 0 0 0-.121.196l-.805 2.414a.25.25 0 0 0 .316.316l2.414-.805a.5.5 0 0 0 .196-.12l6.813-6.814z"}),Object(u.jsx)("path",{"fill-rule":"evenodd",d:"M1 13.5A1.5 1.5 0 0 0 2.5 15h11a1.5 1.5 0 0 0 1.5-1.5v-6a.5.5 0 0 0-1 0v6a.5.5 0 0 1-.5.5h-11a.5.5 0 0 1-.5-.5v-11a.5.5 0 0 1 .5-.5H9a.5.5 0 0 0 0-1H2.5A1.5 1.5 0 0 0 1 2.5v11z"})]})}),Object(u.jsx)("button",{onClick:function(){return function(e){i(n.filter((function(t){return t.id!==e.id})))}(e)},className:"delete",children:Object(u.jsxs)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",fill:"currentColor",class:"bi bi-trash",viewBox:"0 0 16 16",children:[Object(u.jsx)("path",{d:"M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0V6z"}),Object(u.jsx)("path",{"fill-rule":"evenodd",d:"M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1v1zM4.118 4 4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4H4.118zM2.5 3V2h11v1h-11z"})]})})]}),e.edit&&Object(u.jsxs)("span",{children:[Object(u.jsx)("input",{type:"text",onChange:N}),Object(u.jsx)("button",{onClick:function(){return function(e){var t=n.findIndex((function(t){return t.id===e.id})),c=Object.assign({},n[t]);if(c.edit=!c.edit,c.text=j,""!==j.trim()){var s=Object.assign([],n);s[t]=c,i(s),b("")}}(e)},children:"valider"})]})]})},e.id)}))}),Object(u.jsx)("div",{className:"links",children:Object(u.jsxs)("div",{className:"row",children:[Object(u.jsx)("div",{className:"col-md-4 left",children:Object(u.jsxs)("div",{className:"mention",children:[Object(u.jsxs)("p",{children:[y.length," ",y.length>1?"T\xe2ches":"T\xe2che"," \xe0 faire /  "]}),Object(u.jsxs)("p",{children:[" ",k.length," ",k.length>1?" Achev\xe9es":"Achev\xe9e"," "]})]})}),Object(u.jsx)("div",{className:"col-md-8 right",children:Object(u.jsxs)("div",{className:"buttons",children:[Object(u.jsx)("input",{onClick:w,name:"all",type:"button",value:"Toutes"}),Object(u.jsx)("input",{onClick:w,name:"completed",type:"button",value:"Achev\xe9es"}),Object(u.jsx)("input",{onClick:w,name:"todo",type:"button",value:"\xc0 faires"})]})})]})})]}),Object(u.jsx)("button",{className:"btn btn-light btn-sm mt-3 mr-2",onClick:function(){var e=Object.assign([],n).map((function(e){return!1===e.completed?Object(r.a)(Object(r.a)({},e),{},{completed:!0}):e}));i(e)},children:"Tout s\xe9l\xe9ctioner"}),Object(u.jsx)("button",{className:"btn btn-light btn-sm mt-3 mr-2",onClick:function(){return i([])},children:"Tout supprimer"})]}),Object(u.jsx)("footer",{children:Object(u.jsx)("p",{children:"By TaxHash 2021"})})]})}n(28),n(29),n(30);a.a.render(Object(u.jsx)(i.a.StrictMode,{children:Object(u.jsx)(b,{})}),document.getElementById("root"))}},[[32,1,2]]]);
//# sourceMappingURL=main.932659ab.chunk.js.map