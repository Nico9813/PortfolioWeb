(this["webpackJsonpportfolio-web"]=this["webpackJsonpportfolio-web"]||[]).push([[0],{19:function(e,t,a){e.exports=a(36)},24:function(e,t,a){},34:function(e,t,a){},36:function(e,t,a){"use strict";a.r(t);var n=a(1),o=a.n(n),c=a(9),i=a.n(c),r=(a(24),a(8)),l=a(37),s=a(38),m=a(39),u=a(40),p=function(e){var t=e.foto;return o.a.createElement(l.a,{className:"nav-bar",ficolor:"nigth",light:!0,expand:"md"},o.a.createElement(s.a,{href:"/"},o.a.createElement("div",{className:"brand"},o.a.createElement("img",{className:"perfil",src:"/PortfolioWeb"+t,alt:"logo"}),o.a.createElement("h4",{className:"titulo"},r.d))),o.a.createElement(m.a,{className:"mr-auto",navbar:!0}),o.a.createElement(u.a,{href:r.c},"Github"),o.a.createElement(u.a,{href:r.a,download:!0},"CV"))},d=a(44),g=a(45),h=a(46),f=a(47),E=a(12),v=a(18),b=a(41),N=a(42),w=a(43),x=function(e){var t=Object(n.useState)(0),a=Object(E.a)(t,2),c=a[0],i=a[1],r=Object(n.useState)(!1),l=Object(E.a)(r,2),s=l[0],m=l[1],u=function(){if(!s){var t=c===e.imagenes.length-1?0:c+1;i(t)}},p=function(){if(!s){var t=0===c?e.imagenes.length-1:c-1;i(t)}},d=e.imagenes.map((function(e,t){return o.a.createElement(v.a,{onExiting:function(){return m(!0)},onExited:function(){return m(!1)},key:t},o.a.createElement("img",{className:"imagen_container",src:"/PortfolioWeb"+"".concat(e),height:"100%",width:"100%"}))}));return o.a.createElement(b.a,{activeIndex:c,next:u,previous:p},o.a.createElement(N.a,{items:e.imagenes,activeIndex:c,onClickHandler:function(e){s||i(e)}}),d,o.a.createElement(w.a,{direction:"prev",directionText:"Previous",onClickHandler:p}),o.a.createElement(w.a,{direction:"next",directionText:"Next",onClickHandler:u}))},y=function(e){var t=e.proyecto,a=e.contador,n=t.titulo,c=t.descripcion,i=t.tecnologias,r=t.views,l=a%2,s=(a+1)%2;return o.a.createElement("div",{className:"projectRow",style:{backgroundColor:l?"white":"#7abfff"}},o.a.createElement(d.a,{className:"project"},o.a.createElement(g.a,{xs:{size:12},lg:{size:3,order:l,offset:1},className:"projectCol"},o.a.createElement(h.a,null,o.a.createElement("h2",null,n),o.a.createElement(d.a,{style:{marginLeft:.7}},i.map((function(e){return o.a.createElement(g.a,{xs:{size:"auto"},className:"tecnologia",style:{backgroundColor:"black"}},o.a.createElement("h7",null,e))}))),o.a.createElement("p",null,c),o.a.createElement(d.a,{style:{marginLeft:.7}},r.map((function(e){return o.a.createElement(f.a,{style:{marginRight:"3px"},onClick:function(){return window.location.href=e[Object.keys(e)]},color:"primary"},"View on ",Object.keys(e))}))))),o.a.createElement(g.a,{xs:{size:12},lg:{size:7,order:s},className:"projectCol"},o.a.createElement(h.a,null,o.a.createElement(x,{imagenes:t.imagenes})))))};a(34);document.title="Nicolas Gomez | Portfolio";var k=function(){return o.a.createElement("div",{class:"App"},o.a.createElement(p,{foto:r.b}),r.e.map((function(e,t){return o.a.createElement(y,{proyecto:e,contador:t})})))};a(35),Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));i.a.render(o.a.createElement(o.a.StrictMode,null,o.a.createElement(k,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},8:function(e){e.exports=JSON.parse('{"d":"Nicolas Gomez","b":"/nico2.jpg","a":"/Cv2021.pdf","c":"https://github.com/Nico9813","e":[{"titulo":"PRELLO","descripcion":"Aplicacion de administracion de proyectos con interfaz web","imagenes":["/sala_chat_1.png","/sala_chat_2.png"],"tecnologias":["Python","React","Docker","Redis","Mysql"],"views":[{"github":"https://github.com/Nico9813/Prello"},{"live":"https://prello.vercel.app/"}]},{"titulo":"SALA CHAT","descripcion":"Sala de chat en la cual se puede editar un documento en simulteano con todas las personas conectadas","imagenes":["/sala_chat_1.png"],"tecnologias":["WebSockets","TypeScript","Auth0","NodeJS","React"],"views":[{"github":"https://github.com/Nico9813/Prello"},{"live":"https://prello.vercel.app/"}]},{"titulo":"ESTRATEGIA CURSADA UTN","descripcion":"Aplicacion de administracion de proyectos con interfaz web","imagenes":["/sala_chat_1.png"],"tecnologias":["React Native","Redux","Redux-Persist"],"views":[{"github":"https://github.com/Nico9813/Prello"},{"live":"https://prello.vercel.app/"}]},{"titulo":"PENTAMINO","descripcion":"Aplicacion de administracion de proyectos con interfaz web","imagenes":["/sala_chat_1.png"],"tecnologias":["React Native","PanResponder","Redux","Redux-Persist"],"views":[{"github":"https://github.com/Nico9813/Prello"},{"live":"https://prello.vercel.app/"}]}]}')}},[[19,1,2]]]);
//# sourceMappingURL=main.2b0186b3.chunk.js.map