(this.webpackJsonptodos=this.webpackJsonptodos||[]).push([[0],{13:function(e,t,n){},17:function(e,t,n){},18:function(e,t,n){"use strict";n.r(t);var c=n(1),i=n.n(c),s=n(7),a=n.n(s),r=n(6),l=n(8),o=n(2),d=(n(13),n(0));function j(){var e=Object(c.useState)([]),t=Object(o.a)(e,2),n=t[0],i=t[1],s=Object(c.useState)(""),a=Object(o.a)(s,2),j=a[0],u=a[1],b=Object(c.useState)("all"),h=Object(o.a)(b,2),m=h[0],O=h[1],f=Object(c.useState)([]),x=Object(o.a)(f,2),p=x[0],v=x[1];Object(c.useEffect)((function(){M(),V(),console.log("hey")}),[n,m]);var g=function(e){u(e.target.value)},N=n.filter((function(e){return!e.completed})),k=n.filter((function(e){return!0===e.completed})),w=function(e){O(e.target.name)},y=Object(c.useState)(""),S=Object(o.a)(y,2),C=S[0],z=S[1],V=function(){switch(m){case"todo":v(n.filter((function(e){return!1===e.completed})));break;case"completed":v(n.filter((function(e){return!0===e.completed})));break;default:v(n)}},M=function(){localStorage.setItem("data",JSON.stringify(n))};return Object(c.useEffect)((function(){var e=localStorage.getItem("my-data");e&&i(JSON.parse(e))}),[]),Object(c.useEffect)((function(){localStorage.setItem("my-data",JSON.stringify(n))})),Object(d.jsxs)(d.Fragment,{children:[Object(d.jsx)("div",{className:"container title",children:Object(d.jsx)("h1",{children:"TODOS"})}),Object(d.jsxs)("div",{className:"container d-flex mt-5 justify-content-center",children:[Object(d.jsxs)("form",{onSubmit:function(e){if(e.preventDefault(),""===j.trim())return z("Vous n'avez pas entrer un todo"),!1;z("");var t={id:Math.random(),text:j,completed:!1,editing:!1};i(Object(l.a)(n).concat(t)),u("")},className:"form",children:[Object(d.jsx)("input",{type:"text",value:j,onChange:g}),Object(d.jsx)("button",{className:"button",type:"submit",children:"Ajouter"})]}),""!==C&&Object(d.jsx)("p",{style:{marginLeft:"20px",color:"red",outline:"none",border:"none"},children:C})]}),Object(d.jsxs)("div",{className:"container mt-5",children:[Object(d.jsxs)("div",{className:"filter",children:[Object(d.jsx)("div",{className:"container",children:p.map((function(e){return Object(d.jsx)("div",{className:"list-group-item  listes ".concat(e.completed&&"completed"),children:Object(d.jsxs)("p",{children:[e.text," ",Object(d.jsx)("input",{checked:e.completed,className:"checkbox",onChange:function(){return function(e){var t=n.findIndex((function(t){return t.id===e.id})),c=Object.assign({},n[t]);c.completed=!c.completed;var s=Object.assign([],n);s[t]=c,i(s)}(e)},type:"checkbox"})," ",Object(d.jsxs)("span",{children:[" ",Object(d.jsx)("button",{onClick:function(){return function(e){var t=n.findIndex((function(t){return t.id===e.id})),c=Object.assign({},n[t]);c.edit=!0;var s=Object.assign([],n);s[t]=c,i(s)}(e)},className:"edit",children:Object(d.jsxs)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",fill:"currentColor",class:"bi bi-pencil-square",viewBox:"0 0 16 16",children:[Object(d.jsx)("path",{d:"M15.502 1.94a.5.5 0 0 1 0 .706L14.459 3.69l-2-2L13.502.646a.5.5 0 0 1 .707 0l1.293 1.293zm-1.75 2.456-2-2L4.939 9.21a.5.5 0 0 0-.121.196l-.805 2.414a.25.25 0 0 0 .316.316l2.414-.805a.5.5 0 0 0 .196-.12l6.813-6.814z"}),Object(d.jsx)("path",{"fill-rule":"evenodd",d:"M1 13.5A1.5 1.5 0 0 0 2.5 15h11a1.5 1.5 0 0 0 1.5-1.5v-6a.5.5 0 0 0-1 0v6a.5.5 0 0 1-.5.5h-11a.5.5 0 0 1-.5-.5v-11a.5.5 0 0 1 .5-.5H9a.5.5 0 0 0 0-1H2.5A1.5 1.5 0 0 0 1 2.5v11z"})]})}),Object(d.jsx)("button",{onClick:function(){return function(e){i(n.filter((function(t){return t.id!==e.id})))}(e)},className:"delete",children:Object(d.jsxs)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",fill:"currentColor",class:"bi bi-trash",viewBox:"0 0 16 16",children:[Object(d.jsx)("path",{d:"M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0V6z"}),Object(d.jsx)("path",{"fill-rule":"evenodd",d:"M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1v1zM4.118 4 4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4H4.118zM2.5 3V2h11v1h-11z"})]})})]}),e.edit&&Object(d.jsxs)("span",{children:[Object(d.jsx)("input",{type:"text",onChange:g}),Object(d.jsx)("button",{onClick:function(){return function(e){var t=n.findIndex((function(t){return t.id===e.id})),c=Object.assign({},n[t]);if(c.edit=!c.edit,c.text=j,""!==j.trim()){var s=Object.assign([],n);s[t]=c,i(s),u("")}}(e)},children:"valider"})]})]})},e.id)}))}),Object(d.jsx)("div",{className:"links",children:Object(d.jsxs)("div",{className:"row",children:[Object(d.jsx)("div",{className:"col-md-4 left",children:Object(d.jsxs)("div",{className:"mention",children:[Object(d.jsxs)("p",{children:[N.length," ",N.length>1?"T\xe2ches":"T\xe2che"," \xe0 faire /  "]}),Object(d.jsxs)("p",{children:[" ",k.length," ",k.length>1?" Achev\xe9es":"Achev\xe9e"," "]})]})}),Object(d.jsx)("div",{className:"col-md-8 right",children:Object(d.jsxs)("div",{className:"buttons",children:[Object(d.jsx)("input",{onClick:w,name:"all",type:"button",value:"Toutes"}),Object(d.jsx)("input",{onClick:w,name:"completed",type:"button",value:"Achev\xe9es"}),Object(d.jsx)("input",{onClick:w,name:"todo",type:"button",value:"\xc0 faires"})]})})]})})]}),Object(d.jsx)("button",{className:"btn btn-light btn-sm mt-3 mr-2",onClick:function(){var e=Object.assign([],n).map((function(e){return!1===e.completed?Object(r.a)(Object(r.a)({},e),{},{completed:!0}):e}));i(e)},children:"Tout s\xe9l\xe9ctioner"}),Object(d.jsx)("button",{className:"btn btn-light btn-sm mt-3 mr-2",onClick:function(){return i([])},children:"Tout supprimer"})]}),Object(d.jsx)("footer",{children:Object(d.jsx)("p",{children:"By TaxHash 2021"})})]})}n(15),n(16),n(17);a.a.render(Object(d.jsx)(i.a.StrictMode,{children:Object(d.jsx)(j,{})}),document.getElementById("root"))}},[[18,1,2]]]);
//# sourceMappingURL=main.9b93068f.chunk.js.map