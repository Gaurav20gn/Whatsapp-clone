(this["webpackJsonpwhatsapp-clone"]=this["webpackJsonpwhatsapp-clone"]||[]).push([[0],{59:function(e,a,t){e.exports=t(86)},64:function(e,a,t){},65:function(e,a,t){},66:function(e,a,t){},81:function(e,a,t){},83:function(e,a,t){},84:function(e,a,t){},85:function(e,a,t){},86:function(e,a,t){"use strict";t.r(a);var n=t(0),c=t.n(n),r=t(24),l=t.n(r),o=(t(64),t(10)),s=(t(65),t(104)),i=t(99),m=t(48),u=t.n(m),d=t(49),p=t.n(d),h=t(50),E=t.n(h),f=t(51),v=t.n(f),b=(t(66),t(27)),g=t.n(b),_=g.a.initializeApp({apiKey:"AIzaSyBqYELsFWxJwP4sXLoAmZCk_J1Yd8C5kNk",authDomain:"whatsapp-clone-9c663.firebaseapp.com",databaseURL:"https://whatsapp-clone-9c663.firebaseio.com",projectId:"whatsapp-clone-9c663",storageBucket:"whatsapp-clone-9c663.appspot.com",messagingSenderId:"158019674711",appId:"1:158019674711:web:f58f277a35b5929221f912",measurementId:"G-LV1DQGL7FN"}).firestore(),j=g.a.auth(),N=new g.a.auth.GoogleAuthProvider,O=_,w=t(28);var S=function(e){var a,t=e.id,r=e.name,l=e.addNewChat,i=Object(n.useState)(""),m=Object(o.a)(i,2),u=m[0],d=m[1],p=Object(n.useState)([]),h=Object(o.a)(p,2),E=h[0],f=h[1];return Object(n.useEffect)((function(){t&&O.collection("rooms").doc(t).collection("messages").orderBy("timestamp","desc").onSnapshot((function(e){return f(e.docs.map((function(e){return e.data()})))}))}),[t]),Object(n.useEffect)((function(){d(Math.floor(5e3*Math.random()))}),[]),l?c.a.createElement("div",{onClick:function(){var e=prompt("Please enter name for chat");e&&O.collection("rooms").add({name:e})},className:"sidebarChat"},c.a.createElement("h2",null,"Add new Chat")):c.a.createElement(w.b,{to:"/rooms/".concat(t)},c.a.createElement("div",{className:"sidebarChat"},c.a.createElement(s.a,{src:"https://avatars.dicebear.com/api/human/".concat(u,".svg")}),c.a.createElement("div",{className:"sidebarChat__info"},c.a.createElement("h2",null,r),c.a.createElement("p",null,null===(a=E[0])||void 0===a?void 0:a.message))))},y=(t(81),Object(n.createContext)()),C=function(e){var a=e.reducer,t=e.initialState,r=e.children;return c.a.createElement(y.Provider,{value:Object(n.useReducer)(a,t)},r)},k=function(){return Object(n.useContext)(y)};var I=function(){var e=Object(n.useState)([]),a=Object(o.a)(e,2),t=a[0],r=a[1],l=k(),m=Object(o.a)(l,2),d=m[0].user;return m[1],Object(n.useEffect)((function(){var e=O.collection("rooms").onSnapshot((function(e){return r(e.docs.map((function(e){return{id:e.id,data:e.data()}})))}));return function(){e()}}),[]),c.a.createElement("div",{className:"sidebar"},c.a.createElement("div",{className:"sidebar__header"},c.a.createElement(s.a,{src:null===d||void 0===d?void 0:d.photoURL}),c.a.createElement("div",{className:"sidebar__headerRight"},c.a.createElement(i.a,null,c.a.createElement(u.a,null)),c.a.createElement(i.a,null,c.a.createElement(p.a,null)),c.a.createElement(i.a,null,c.a.createElement(E.a,null)))),c.a.createElement("div",{className:"sidebar__search"},c.a.createElement("div",{className:"sidebar__searchContainer"},c.a.createElement(v.a,null),c.a.createElement("input",{placeholder:"Search or start new chat",type:"text"}))),c.a.createElement("div",{className:"sidebar__chats"},c.a.createElement(S,{addNewChat:!0}),t.map((function(e){return c.a.createElement(S,{key:e.id,id:e.id,name:e.data.name})}))))},W=t(100),x=t(101),A=t(102),D=t(52),R=t.n(D),B=t(53),L=t.n(B),T=(t(83),t(5));var U=function(){var e,a,t=Object(n.useState)(""),r=Object(o.a)(t,2),l=r[0],m=r[1],u=Object(n.useState)(""),d=Object(o.a)(u,2),p=d[0],h=d[1],E=Object(T.f)().roomId,f=Object(n.useState)(""),v=Object(o.a)(f,2),b=v[0],_=v[1],j=Object(n.useState)([]),N=Object(o.a)(j,2),w=N[0],S=N[1],y=k(),C=Object(o.a)(y,1)[0].user;Object(n.useEffect)((function(){E&&(O.collection("rooms").doc(E).onSnapshot((function(e){return _(e.data().name)})),O.collection("rooms").doc(E).collection("messages").orderBy("timestamp","asc").onSnapshot((function(e){return S(e.docs.map((function(e){return e.data()})))})))}),[E]),Object(n.useEffect)((function(){m(Math.floor(5e3*Math.random()))}),[E]);var I=function(e){e.preventDefault(),console.log("You type >>>",p),O.collection("rooms").doc(E).collection("messages").add({name:C.displayName,message:p,timestamp:g.a.firestore.FieldValue.serverTimestamp()}),h("")};return c.a.createElement("div",{className:"chat"},c.a.createElement("div",{className:"chat__header"},c.a.createElement(s.a,{src:"https://avatars.dicebear.com/api/human/".concat(l,".svg")}),c.a.createElement("div",{className:"chat__headerInfo"},c.a.createElement("h3",null,b),c.a.createElement("p",null,"last seen"," ",new Date(null===(e=w[w.length-1])||void 0===e||null===(a=e.timestamp)||void 0===a?void 0:a.toDate()).toUTCString())),c.a.createElement("div",{className:"chat__headerRight"},c.a.createElement(i.a,null,c.a.createElement(W.a,null)),c.a.createElement(i.a,null,c.a.createElement(x.a,null)),c.a.createElement(i.a,null,c.a.createElement(A.a,null)))),c.a.createElement("div",{className:"chat__body"},w.map((function(e){var a;return c.a.createElement("p",{className:"chat__message ".concat(e.name===C.displayName&&"chat__reciever")},c.a.createElement("span",{className:"chat__name"},e.name),e.message,c.a.createElement("span",{className:"chat__timestamp"},new Date(null===(a=e.timestamp)||void 0===a?void 0:a.toDate()).toUTCString()))}))),c.a.createElement("div",{className:"chat__footer"},c.a.createElement(R.a,null),c.a.createElement("form",{onSubmit:I},c.a.createElement("input",{value:p,onChange:function(e){return h(e.target.value)},placeholder:"Type a message",type:"text"}),c.a.createElement("button",{onClick:I,type:"submit"},"Send a message")),c.a.createElement(L.a,null)))},M=t(54),P=t(103);t(84);var G=function(){var e=k(),a=Object(o.a)(e,2);Object(M.a)(a[0]);var t=a[1];return c.a.createElement("div",{className:"login"},c.a.createElement("div",{className:"login__container"},c.a.createElement("img",{src:"https://upload.wikimedia.org/wikipedia/commons/thumb/6/6b/WhatsApp.svg/765px-WhatsApp.svg.png",alt:""}),c.a.createElement("div",{className:"login__text"},c.a.createElement("h1",null,"Sign in to WhatsApp")),c.a.createElement(P.a,{type:"submit",onClick:function(){j.signInWithPopup(N).then((function(e){t({type:"SET_USER",user:e.user})})).catch((function(e){return alert(e.message)}))}},"Sign In With Google")))};t(85);var J=function(){return c.a.createElement("div",{className:"homescreen"},c.a.createElement("div",{className:"homescreen__container"},c.a.createElement("div",{className:"homescreen__text"},c.a.createElement("img",{src:"https://web.whatsapp.com/img/intro-connection-hq-light_9466a20e6d2921a21ac7ab82419be157.jpg",alt:""}),c.a.createElement("h2",null,"Keep your internet connected"),c.a.createElement("p",null,"Whatsapp Web Clone connects your google account to sync the account info"))))};var F=function(){var e=k(),a=Object(o.a)(e,2),t=a[0].user;return a[1],c.a.createElement("div",{className:"app"},t?c.a.createElement("div",{className:"app__body"},c.a.createElement(w.a,null,c.a.createElement(I,null),c.a.createElement(T.c,null,c.a.createElement(T.a,{path:"/rooms/:roomId"},c.a.createElement(U,null)),c.a.createElement(T.a,{path:"/"},c.a.createElement(J,null))))):c.a.createElement(G,null))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var Y=t(41),q=function(e,a){switch(console.log(a),a.type){case"SET_USER":return Object(Y.a)(Object(Y.a)({},e),{},{user:a.user});default:return e}};l.a.render(c.a.createElement(c.a.StrictMode,null,c.a.createElement(C,{initialState:{user:null},reducer:q},c.a.createElement(F,null))),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[59,1,2]]]);
//# sourceMappingURL=main.7404097d.chunk.js.map