(this["webpackJsonppost-app"]=this["webpackJsonppost-app"]||[]).push([[0],{44:function(e,t,c){},45:function(e,t,c){"use strict";c.r(t);var n=c(1),a=c(2),r=c.n(a),s=c(28),i=c.n(s),o=c(4),l=c(20),u=c(6),d=function(){return Object(n.jsx)("h1",{children:"Inicio de sesi\xf3n"})},j={ROUTE_POSTS:"/",ROUTE_ERROR:"/error",ACTION_CREATE:"crear",ACTION_EDIT:"editar",ENDPOINT_LANG_ES:"data/lang-es.json",COLLECTION_POST:"post-test",COLLECTION_COMMENTS:"comments",COLLECTION_REACTIONS:"reactions",COLLECTION_USERS:"users",REACTION_LIKE:"like",REACTION_DISLIKE:"dislike",REACTION_AMAZING:"amazing"},O=c(3),b=function(e){var t=e.children,c=e.isLoading,a=void 0===c||c;return Object(n.jsx)(n.Fragment,{children:a?Object(n.jsxs)("div",{className:"lds-ring",children:[Object(n.jsx)("div",{}),Object(n.jsx)("div",{}),Object(n.jsx)("div",{}),Object(n.jsx)("div",{})]}):Object(n.jsx)(n.Fragment,{children:t})})},m=c(7),p=c.n(m),f=c(12),h=Object(a.createContext)([]),x=h.Provider,v=h,g=c(24);c(37);g.a.initializeApp({apiKey:"AIzaSyCNmqLe1d9z6esEbyQQ4wcIFA9EUA-Z0H4",authDomain:"publicaciones-999c8.firebaseapp.com",projectId:"publicaciones-999c8",storageBucket:"publicaciones-999c8.appspot.com",messagingSenderId:"551474545342",appId:"1:551474545342:web:09126c401dd5f503f4d4ef"});var N=g.a.firestore(),E=N.collection(j.COLLECTION_POST),S=c(13),C=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=Object(a.useState)(e),c=Object(o.a)(t,2),n=c[0],r=c[1],s=function(){r(e)},i=function(e){var t=e.target;r(Object(O.a)(Object(O.a)({},n),{},Object(S.a)({},t.name,t.value)))};return[n,i,s]},I=c.p+"static/media/userIcon.18fcee80.png",L=function(e){var t=e.nameAuthor,c=e.desc,a=e.date,r=new Date(null===a||void 0===a?void 0:a.toDate()).toLocaleDateString();return Object(n.jsxs)("div",{className:"comment",children:[Object(n.jsx)("div",{className:"item-profile",children:Object(n.jsx)("img",{className:"profile-img",src:I,alt:t})}),Object(n.jsxs)("div",{className:"comment-section",children:[Object(n.jsx)("p",{className:"title-name",children:t}),Object(n.jsx)("p",{children:c}),Object(n.jsx)("p",{className:"text-time w-100",children:r})]})]})},T=N.collection(j.COLLECTION_POST),A=c.p+"static/media/like.af5d7d6e.svg",R=c.p+"static/media/dislike.0ac9267e.svg",w=c.p+"static/media/amazing.8fe6536c.svg",_=N.collection(j.COLLECTION_POST),k=function(e){var t=e.idPost,c=e.setReactionsState,r=Object(a.useState)(""),s=Object(o.a)(r,2),i=s[0],l=s[1],u=function(e){var t=function(){try{var t=function(){var t=Object(f.a)(p.a.mark((function t(){return p.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,_.doc(e).collection(j.COLLECTION_REACTIONS).get();case 2:t.sent.forEach((function(e){c.push(e.data())})),i.current&&s(Object(O.a)(Object(O.a)({},r),{},{data:c,loading:!1,error:null}));case 5:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}(),c=[];t()}catch(n){s(Object(O.a)(Object(O.a)({},r),{},{data:null,loading:!1,error:n}))}},c=Object(a.useState)({action:t,data:[],loading:!0,error:null}),n=Object(o.a)(c,2),r=n[0],s=n[1],i=Object(a.useRef)(!0);return Object(a.useEffect)((function(){return i.current=!0,t(),function(){i.current=!1}}),[]),r}(t),d=u.action,b=u.data,m=function(){var e=Object(a.useContext)(v).setStateModal,t=Object(a.useState)({action:function(t,c){r(Object(O.a)(Object(O.a)({},n),{},{loading:!0})),_.doc(t).collection(j.COLLECTION_REACTIONS).doc(c.idAuthor).set(c).then((function(){r(Object(O.a)(Object(O.a)({},n),{},{loading:!1,error:null,isFirtsRender:!1}))})).catch((function(t){console.log(t),r(Object(O.a)(Object(O.a)({},n),{},{loading:!1,error:"Ocurrio un error",isFirtsRender:!1})),e({isShow:!0,title:"Ocurri\xf3 un error.",desc:"No fue posible reaccionar a la publicaci\xf3n, intenta m\xe1s tarde.",icon:"error"})}))},loading:!1,error:null,isFirtsRender:!0}),c=Object(o.a)(t,2),n=c[0],r=c[1];return n}(),h=m.action,x=m.loading,g=m.isFirtsRender,N=!1;Object(a.useEffect)((function(){g||x||d()}),[x]),Object(a.useEffect)((function(){var e,t=b.reduce((function(e,t){var c=t.type,n=t.idAuthor;return e[c]||(e[c]=0),e[c]+=1,"KWfShEgVFQoLdDoULkw9"===n&&l(c),e}),(e={},Object(S.a)(e,j.REACTION_AMAZING,0),Object(S.a)(e,j.REACTION_DISLIKE,0),Object(S.a)(e,j.REACTION_LIKE,0),e));c(t)}),[b]);var E=function(e){e?(N=!0,document.querySelector("#popover-".concat(t)).classList.add("active-hover")):N&&setTimeout((function(){N=!1,document.querySelector("#popover-".concat(t)).classList.remove("active-hover")}),1e3)},C=function(e){h(t,{type:e,idAuthor:"KWfShEgVFQoLdDoULkw9"})};return Object(n.jsxs)("div",{className:"post-item-buttons popover",children:[Object(n.jsxs)("p",{className:"trigger-popover",onMouseEnter:function(){E(!0)},onMouseLeave:function(){E(!1)},children:[i===j.REACTION_LIKE&&Object(n.jsxs)(n.Fragment,{children:[Object(n.jsx)("img",{src:A,alt:"like"})," Me Gusta"]}),i===j.REACTION_DISLIKE&&Object(n.jsxs)(n.Fragment,{children:[Object(n.jsx)("img",{src:R,alt:"like"})," No me Gusta"]}),i===j.REACTION_AMAZING&&Object(n.jsxs)(n.Fragment,{children:[Object(n.jsx)("img",{src:w,alt:"like"})," Asombroso"]}),!i&&"Reacccionar"]}),Object(n.jsxs)("div",{id:"popover-".concat(t),className:"popover-content",children:[Object(n.jsx)("div",{className:"arrow"}),Object(n.jsx)("img",{src:A,alt:"like",className:"ml-10",onClick:function(){return C(j.REACTION_LIKE)}}),Object(n.jsx)("img",{src:R,alt:"dislike",onClick:function(){return C(j.REACTION_DISLIKE)}}),Object(n.jsx)("img",{src:w,alt:"amazing",onClick:function(){return C(j.REACTION_AMAZING)}})]}),Object(n.jsx)("p",{children:"Comentar"})]})},F=function(e){var t,c=e.id,r=e.desc,s=e.nameAuthor,i=e.date,l=Object(a.useState)((t={},Object(S.a)(t,j.REACTION_AMAZING,0),Object(S.a)(t,j.REACTION_DISLIKE,0),Object(S.a)(t,j.REACTION_LIKE,0),t)),u=Object(o.a)(l,2),d=u[0],m=u[1],h=C({comment:""}),x=Object(o.a)(h,3),g=x[0],N=x[1],E=x[2],A=function(e){var t=function(){try{var t=function(){var t=Object(f.a)(p.a.mark((function t(){return p.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,T.doc(e).collection(j.COLLECTION_COMMENTS).orderBy("date","desc").get();case 2:t.sent.forEach((function(e){c.push(e.data())})),i.current&&s(Object(O.a)(Object(O.a)({},r),{},{data:c,loading:!1,error:null}));case 5:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}(),c=[];t()}catch(n){s(Object(O.a)(Object(O.a)({},r),{},{data:null,loading:!1,error:n}))}},c=Object(a.useState)({action:t,data:[],loading:!0,error:null}),n=Object(o.a)(c,2),r=n[0],s=n[1],i=Object(a.useRef)(!0);return Object(a.useEffect)((function(){return i.current=!0,t(),function(){i.current=!1}}),[]),r}(c),R=A.action,w=A.data,_=function(){var e=Object(a.useContext)(v).setStateModal,t=Object(a.useState)({action:function(t,c){r(Object(O.a)(Object(O.a)({},n),{},{loading:!0})),T.doc(t).collection(j.COLLECTION_COMMENTS).add(c).then((function(e){e.set({id:e.id},{merge:!0}).then((function(){r(Object(O.a)(Object(O.a)({},n),{},{loading:!1,error:null,isFirtsRender:!1}))}))})).catch((function(){r(Object(O.a)(Object(O.a)({},n),{},{loading:!1,error:"Ocurrio un error",isFirtsRender:!1})),e({isShow:!0,title:"Ocurri\xf3 un error.",desc:"No se pudo agregar el comentaro, intenta m\xe1s tarde.",icon:"error"})}))},loading:!1,error:null,isFirtsRender:!0}),c=Object(o.a)(t,2),n=c[0],r=c[1];return n}(),F=_.action,y=_.loading,D=_.isFirtsRender,P=new Date(null===i||void 0===i?void 0:i.toDate()).toLocaleDateString();Object(a.useEffect)((function(){D||y||(E(),R())}),[y]);return Object(n.jsx)(n.Fragment,{children:Object(n.jsxs)("div",{className:"post-item my-2 ",children:[Object(n.jsxs)("div",{className:"post-item-content",children:[Object(n.jsx)("div",{className:"item-profile",children:Object(n.jsx)("img",{className:"profile-img",src:I,alt:s})}),Object(n.jsxs)("div",{className:"post-item-desc",children:[Object(n.jsxs)("div",{className:"post-desc-group-name",children:[Object(n.jsx)("p",{className:"post-item-name title-name",children:s}),Object(n.jsx)("p",{className:"post-item-time text-time",children:P})]}),Object(n.jsx)("p",{children:r}),Object(n.jsx)(k,{idPost:c,setReactionsState:m})]})]}),Object(n.jsxs)("div",{className:"post-item-reaction",children:[Object(n.jsxs)("div",{className:"reactions-group-circles",children:[(null===d||void 0===d?void 0:d.like)>0&&Object(n.jsx)("div",{className:"circle-likes"}),(null===d||void 0===d?void 0:d.dislike)>0&&Object(n.jsx)("div",{className:"circle-dislike"}),(null===d||void 0===d?void 0:d.amazing)>0&&Object(n.jsx)("div",{className:"circle-amazing"}),Object(n.jsx)("p",{children:(null===d||void 0===d?void 0:d.amazing)+(null===d||void 0===d?void 0:d.like)+(null===d||void 0===d?void 0:d.dislike)})]}),Object(n.jsx)("p",{children:w.length>0&&Object(n.jsxs)(n.Fragment,{children:[w.length," comentario",w.length>1&&"s"]})})]}),Object(n.jsx)("div",{className:"comments-list",children:w&&w.map((function(e,t){return Object(n.jsx)("div",{children:Object(n.jsx)(L,Object(O.a)(Object(O.a)({},e),{},{index:t}))},e.id)}))}),Object(n.jsxs)("form",{onSubmit:function(e){e.preventDefault(),F(c,{date:new Date,desc:g.comment,idAuthor:"KWfShEgVFQoLdDoULkw8",nameAuthor:"Admin"}),E()},className:"comment-form ",children:[Object(n.jsx)("textarea",{name:"comment",placeholder:"Escribe un comentario",autoComplete:"off",rows:"1",className:"comment",value:g.comment,onChange:N}),Object(n.jsx)(b,{isLoading:!1,children:Object(n.jsx)("button",{type:"submit",disabled:!g.comment,children:Object(n.jsx)("span",{children:"Publicar"})})})]})]})})},y=N.collection(j.COLLECTION_USERS),D=function(){var e=C({userName:"",password:""}),t=Object(o.a)(e,3),c=t[0],r=t[1],s=t[2],i=function(){var e=function(){var e=Object(f.a)(p.a.mark((function e(t){var c,a,o,l;return p.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return c=t.userName,a=t.password,e.prev=1,e.next=4,y.where("userName","==",c).where("password","==",a).limit(1).get();case 4:o=e.sent,l={},o.forEach((function(e){var t=e.data();console.log(t),t&&(l={id:t.id,userName:t.userName,isAdmin:t.isAdmin})})),i.current&&(s(l),r(Object(O.a)(Object(O.a)({},n),{},{loading:!1,error:null}))),e.next=13;break;case 10:e.prev=10,e.t0=e.catch(1),i.current&&r(Object(O.a)(Object(O.a)({},n),{},{loading:!1,error:e.t0}));case 13:case"end":return e.stop()}}),e,null,[[1,10]])})));return function(t){return e.apply(this,arguments)}}(),t=Object(a.useState)({action:e,loading:!0,error:null}),c=Object(o.a)(t,2),n=c[0],r=c[1],s=Object(a.useContext)(v).setStateUser,i=Object(a.useRef)(!0);return Object(a.useEffect)((function(){return function(){i.current=!1}}),[]),n}(),l=i.action,u=i.loading;return Object(n.jsx)(n.Fragment,{children:Object(n.jsxs)("form",{onSubmit:function(e){e.preventDefault(),l(c),s()},className:"form-login",children:[Object(n.jsxs)("div",{className:"section-inputs",children:[Object(n.jsxs)("div",{className:"input-group",children:[Object(n.jsx)("label",{htmlFor:"user",children:"Usuario:"}),Object(n.jsx)("input",{type:"text",id:"user",name:"userName",autoComplete:"off",onChange:r,value:c.userName,placeholder:"Ingresa el usuario"})]}),Object(n.jsxs)("div",{className:"input-group",children:[Object(n.jsx)("label",{htmlFor:"pass",children:"Password:"}),Object(n.jsx)("input",{type:"password",id:"pass",name:"password",autoComplete:"off",onChange:r,placeholder:"Ingresa la contrase\xf1a",value:c.password})]})]}),Object(n.jsx)(b,{isLoading:!u,children:Object(n.jsxs)("div",{className:"section-buttons",children:[Object(n.jsx)("button",{type:"submit",disabled:!c.userName||!c.password,children:"Iniciar sesi\xf3n"}),Object(n.jsx)("p",{children:"o"}),Object(n.jsx)("button",{type:"submit",disabled:!c.userName||!c.password,children:"Registrarse"})]})})]})})},P=function(e){var t=e.getAllPost,c=Object(a.useContext)(v).stateUser,r=C({post:""}),s=Object(o.a)(r,3),i=s[0],l=s[1],u=s[2],d=function(){var e=function(){var e=Object(f.a)(p.a.mark((function e(c){return p.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:s(Object(O.a)(Object(O.a)({},r),{},{loading:!0})),E.add(c).then((function(e){e.set({id:e.id},{merge:!0}).then((function(){s(Object(O.a)(Object(O.a)({},r),{},{loading:!1,error:null,isFirtsRender:!1})),t({title:"Estado creado",desc:"Se ha creado la publicaci\xf3n",isShow:!0})}))})).catch((function(){s(Object(O.a)(Object(O.a)({},r),{},{loading:!1,error:"Ocurrio un error",isFirtsRender:!1})),t({isShow:!0,title:"Ocurri\xf3 un error.",desc:"No se pudo crear la publicaci\xf3n, intenta m\xe1s tarde.",icon:"error"})}));case 2:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),t=Object(a.useContext)(v).setStateModal,c=Object(a.useState)({action:e,loading:!1,error:null,isFirtsRender:!0}),n=Object(o.a)(c,2),r=n[0],s=n[1];return r}(),j=d.action,m=d.loading,h=d.isFirtsRender;Object(a.useEffect)((function(){h||m||(u(),t())}),[m]);return Object(n.jsx)(n.Fragment,{children:Object.entries(c).length?Object(n.jsxs)("form",{onSubmit:function(e){e.preventDefault(),j({date:new Date,desc:i.post,idAuthor:"e3Op7jLzPe3gJIdbmmzH",nameAuthor:"Juan 2"})},className:"post-form",children:[Object(n.jsx)("textarea",{name:"post",placeholder:"Escribe aqu\xed tu estado",autoComplete:"off",className:"post-text",value:i.post,onChange:l}),Object(n.jsx)(b,{isLoading:!1,children:Object(n.jsx)("button",{type:"submit",disabled:!i.post,children:"Publicar"})})]}):Object(n.jsx)(D,{})})},M=function(){var e=function(){var e=function(){var e=Object(f.a)(p.a.mark((function e(){var t,c;return p.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,E.orderBy("date","desc").get();case 3:t=e.sent,c=[],t.forEach((function(e){c.push(Object(O.a)({id:e.id},e.data()))})),s.current&&r(Object(O.a)(Object(O.a)({},n),{},{data:c,loading:!1,error:null})),e.next=12;break;case 9:e.prev=9,e.t0=e.catch(0),s.current&&r(Object(O.a)(Object(O.a)({},n),{},{data:null,loading:!1,error:e.t0}));case 12:case"end":return e.stop()}}),e,null,[[0,9]])})));return function(){return e.apply(this,arguments)}}(),t=Object(a.useState)({action:e,data:[],loading:!0,error:null}),c=Object(o.a)(t,2),n=c[0],r=c[1],s=Object(a.useRef)(!0);return Object(a.useEffect)((function(){return e(),function(){s.current=!1}}),[]),n}(),t=e.action,c=e.data,r=e.loading;return Object(n.jsxs)(n.Fragment,{children:[Object(n.jsx)(P,{getAllPost:t}),Object(n.jsx)("div",{className:"content-list",children:Object(n.jsx)(b,{isLoading:r,children:(null===c||void 0===c?void 0:c.length)?c.map((function(e,t){return Object(n.jsx)(F,Object(O.a)(Object(O.a)({},e),{},{index:t}),e.id)})):Object(n.jsx)("p",{children:"No hay publicaciones"})})})]})},U=function(){var e=Object(a.useContext)(v).stateUser;return Object(n.jsxs)(n.Fragment,{children:[Object(n.jsxs)("header",{className:"post-banner",children:[Object(n.jsx)(l.b,{to:j.ROUTE_POSTS,className:"post-title",children:"Publicaciones"}),Object.entries(e).length&&Object(n.jsxs)("p",{style:{marginLeft:"auto"},children:["Bienvenido, ",e.userName," "]})]}),Object(n.jsx)("section",{className:"post-section",children:Object(n.jsx)(u.d,{children:Object(n.jsx)(u.b,{exact:!0,path:j.ROUTE_POSTS,component:M})})})]})},K=function(){return Object(n.jsx)(l.a,{children:Object(n.jsx)("div",{className:"main",children:Object(n.jsxs)(u.d,{children:[Object(n.jsx)(u.b,{path:j.ROUTE_POSTS,component:U}),Object(n.jsx)(u.b,{path:j.ROUTE_LOGIN,component:d}),Object(n.jsx)(u.a,{to:j.ROUTE_POSTS})]})})})},z=c(30),G=c.n(z),B=(c(44),function(){var e=Object(a.useState)({isShow:!1,title:"",desc:"",icon:""}),t=Object(o.a)(e,2),c=t[0],r=t[1],s=Object(a.useState)({}),i=Object(o.a)(s,2),l=i[0],u=i[1],d=c.isShow,O=c.title,m=c.desc,h=c.icon;Object(a.useEffect)((function(){d&&G.a.fire({title:O,text:m,icon:h||"success",confirmButtonText:"Aceptar"})}),[c]);var v=function(e){var t=Object(a.useRef)(!0),c=Object(a.useState)({data:null,loading:!0,error:null}),n=Object(o.a)(c,2),r=n[0],s=n[1];return Object(a.useEffect)((function(){return function(){t.current=!1}}),[]),Object(a.useEffect)((function(){function c(){return(c=Object(f.a)(p.a.mark((function c(){var n,a,r;return p.a.wrap((function(c){for(;;)switch(c.prev=c.next){case 0:return c.prev=0,c.next=3,fetch(e);case 3:return n=c.sent,c.next=6,n.json();case 6:a=c.sent,r=a.data,t.current&&s({loading:!1,error:null,data:r}),c.next=14;break;case 11:c.prev=11,c.t0=c.catch(0),s({data:null,loading:!1,error:"No se pudo cargar la info"});case 14:case"end":return c.stop()}}),c,null,[[0,11]])})))).apply(this,arguments)}!function(){c.apply(this,arguments)}()}),[e]),r}(j.ENDPOINT_LANG_ES),g=v.data,N=v.loading;return Object(n.jsx)(n.Fragment,{children:Object(n.jsx)(b,{isLoading:N,children:Object(n.jsx)(x,{value:{stateModal:c,setStateModal:r,lang:g,stateUser:l,setStateUser:u},children:Object(n.jsx)(K,{})})})})});i.a.render(Object(n.jsx)(r.a.StrictMode,{children:Object(n.jsx)(B,{})}),document.getElementById("root"))}},[[45,1,2]]]);
//# sourceMappingURL=main.98bf8269.chunk.js.map