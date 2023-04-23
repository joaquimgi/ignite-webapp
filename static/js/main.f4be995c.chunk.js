(this["webpackJsonpignite-webapp"]=this["webpackJsonpignite-webapp"]||[]).push([[0],{75:function(n,e,t){"use strict";t.r(e);var a=t(1),r=t(0),c=t.n(r),i=t(22),o=t.n(i),s=t(4),d=t(5),u=t(6);function b(){var n=Object(d.a)(["\n*{\n    margin:0;\n    padding:0;\n    box-sizing:border-box;\n}\nhtml{\n    &::-webkit-scrollbar{\n        width:0.5rem;\n    }\n    &::-webkit-scrollbar-thumb{\n        background-color:darkgray;\n    }\n    &::-webkit-scrollbar-track {\n    background: white;\n  }\n}\nbody{\n    font-family:'Montserrat', sans-serif;\n    width:100%;\n    margin-bottom:5rem;\n}\nh2{\n    font-family:'Abril Fatface', cursive;\n    font-size:3rem;\n    font-weight: lighter;\n    color: #333;\n}\nh3{\n    font-size:1.3rem;\n    padding:1.5rem 0rem;\n    color: #333;\n}\np{\n    font-size:1.2rem;\n    line-height:200%;\n    color: #696969;\n}\na{\n    text-decoration:none;\n    color: #333;\n}\nimg{\n    display:block;\n}\ninput{\n    font-weight: bold;\n    font-family: \"Montserrat\", sans-serif;\n}\n\n"]);return b=function(){return n},n}var l=Object(u.a)(b()),m=t(47),j=t(3),g=t.p+"static/media/logo.3670d117.svg",p=t(16),h=t.n(p),f=t(21),O=t(17),A=t.n(O),x="https://api.rawg.io/api/games?key=".concat("1c7b7898e02648ee89f0682d2e40e87c"),v=(new Date).getFullYear(),w=function(){var n=(new Date).getMonth();return n<10?"0".concat(n):n}(),y=function(){var n=(new Date).getDate();return n<10?"0".concat(n):n}(),E="".concat(v,"-").concat(w,"-").concat(y),k="".concat(v-1,"-").concat(w,"-").concat(y),I="".concat(v+1,"-").concat(w,"-").concat(y),C="&dates=".concat(k,",").concat(E,"&ordering=-rating&page_size=9"),S="&dates=".concat(E,",").concat(I,"&ordering=-added&page_size=9"),D="&dates=".concat(k,",").concat(E,"&ordering=-released&page_size=9"),R=function(n){return"".concat(x,"/games/").concat(n,"/screenshots")},U=function(n){return"".concat(x,"/games?search=").concat(n,"&page_size=9")},T=t(13),B={hidden:{opacity:0},show:{opacity:1,transition:{duration:.75}},exit:{opacity:0,transition:{duration:.75}}},G={hidden:{opacity:0,scale:.5},show:{opacity:1,scale:1,transition:{duration:.75}},exit:{opacity:0,transition:{duration:.75}}};function L(){var n=Object(d.a)(["\n  display: flex;\n  justify-content: center;\n  padding: 1rem;\n  cursor: pointer;\n  img {\n    height: 2rem;\n    width: 2rem;\n  }\n"]);return L=function(){return n},n}function N(){var n=Object(d.a)(["\n  padding: 3rem 5rem;\n  text-align: center;\n  input {\n    width: 30%;\n    font-size: 1.5rem;\n    border: none;\n    padding: 0.5rem;\n    margin-top: 1rem;\n    box-shadow: 0px 0px 30px rgba(0, 0, 0, 0.2);\n  }\n  button {\n    font-size: 1.5rem;\n    border: none;\n    padding: 0.5rem 2rem;\n    cursor: pointer;\n    background: #ff7676;\n    color: white;\n  }\n"]);return N=function(){return n},n}var z=Object(u.b)(j.c.nav)(N()),H=Object(u.b)(j.c.div)(L()),_=function(){var n=Object(T.b)(),e=Object(r.useState)(""),t=Object(m.a)(e,2),c=t[0],i=t[1];return Object(a.jsxs)(z,{variants:B,initial:"hidden",animate:"show",children:[Object(a.jsxs)(H,{onClick:function(){n({type:"CLEAR_SEARCHED"})},children:[Object(a.jsx)("img",{src:g,alt:"logo"}),Object(a.jsx)("h1",{children:"Ignite"})]}),Object(a.jsxs)("form",{className:"search",children:[Object(a.jsx)("input",{value:c,onChange:function(n){i(n.target.value)},type:"text"}),Object(a.jsx)("button",{onClick:function(e){var t;e.preventDefault(),n((t=c,function(){var n=Object(f.a)(h.a.mark((function n(e){var a;return h.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,A.a.get(U(t));case 2:a=n.sent,e({type:"FETCH_SEARCHED",payload:{searched:a.data.results}});case 4:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}())),i("")},type:"submit",children:"Search"})]})]})},F=t(19),M=function(n,e){return n?n.match(/media\/screenshots/)?n.replace("media/screenshots","media/resize/".concat(e,"/-/screenshots")):n.replace("/media/games/","/media/resize/".concat(e,"/-/games/")):null};function Z(){var n=Object(d.a)(["\n  min-height: 30vh;\n  box-shadow: 0px 5px 20px rgba(0, 0, 0, 0.2);\n  text-align: center;\n  border-radius: 1rem;\n  cursor: pointer;\n  overflow: hidden;\n  img {\n    width: 100%;\n    height: 40vh;\n    object-fit: cover;\n  }\n"]);return Z=function(){return n},n}var P=Object(u.b)(j.c.div)(Z()),V=function(n){var e=n.name,t=n.released,r=n.image,c=n.id,i=c.toString(),o=Object(T.b)();return Object(a.jsx)(P,{layoutId:i,onClick:function(){document.body.style.overflow="hidden",o(function(n){return function(){var e=Object(f.a)(h.a.mark((function e(t){var a,r;return h.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t({type:"LOADING_DETAIL"}),e.next=3,A.a.get((c=n,"".concat(x,"/games/").concat(c)));case 3:return a=e.sent,e.next=6,A.a.get(R(n));case 6:r=e.sent,t({type:"GET_DETAIL",payload:{game:a.data,screen:r.data}});case 8:case"end":return e.stop()}var c}),e)})));return function(n){return e.apply(this,arguments)}}()}(c))},variants:G,initial:"hidden",animate:"show",children:Object(a.jsxs)(F.b,{to:"/game/".concat(c),children:[Object(a.jsx)(j.c.h3,{layoutId:"title ".concat(i),children:e}),Object(a.jsx)("p",{children:t}),Object(a.jsx)(j.c.img,{layoutId:"image ".concat(i),src:M(r,640),alt:e})]})})},X=t(43),J=t.n(X),W=t(44),Q=t.n(W),Y=t(45),K=t.n(Y),q=t.p+"static/media/playstation.18cc4b9c.svg",$=t.p+"static/media/xbox.3e7db735.svg",nn=t.p+"static/media/steam.d7b8819f.svg",en=t.p+"static/media/nintendo.f579be04.svg",tn=t.p+"static/media/apple.5757c37e.svg",an=t.p+"static/media/gamepad.c9269ef5.svg";function rn(){var n=Object(d.a)(["\n  margin-bottom: 2rem;\n"]);return rn=function(){return n},n}function cn(){var n=Object(d.a)(["\n  margin: 5rem 0rem;\n"]);return cn=function(){return n},n}function on(){var n=Object(d.a)(["\n  margin-top: 5rem;\n  img {\n    width: 100%;\n  }\n"]);return on=function(){return n},n}function sn(){var n=Object(d.a)(["\n  display: flex;\n  justify-content: space-evenly;\n  img {\n    margin-left: 3rem;\n  }\n"]);return sn=function(){return n},n}function dn(){var n=Object(d.a)(["\n  text-align: center;\n"]);return dn=function(){return n},n}function un(){var n=Object(d.a)(["\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  img {\n    width: 2rem;\n    height: 2rem;\n    display: inline;\n  }\n"]);return un=function(){return n},n}function bn(){var n=Object(d.a)(["\n  width: 80%;\n  border-radius: 1rem;\n  padding: 2rem 5rem;\n  background: white;\n  position: absolute;\n  left: 10%;\n  z-index: 10;\n  color: black;\n  img {\n    width: 100%;\n  }\n"]);return bn=function(){return n},n}function ln(){var n=Object(d.a)(["\n  width: 100%;\n  min-height: 100vh;\n  overflow-y: scroll;\n  background: rgba(0, 0, 0, 0.5);\n  position: fixed;\n  top: 0;\n  left: 0;\n  z-index: 5;\n  &::-webkit-scrollbar {\n    width: 0.5rem;\n  }\n  &::-webkit-scrollbar-tumb {\n    color: #ff7676;\n  }\n  &::-webkit-scrollbar-track {\n    background: white;\n  }\n"]);return ln=function(){return n},n}var mn=Object(u.b)(j.c.div)(ln()),jn=Object(u.b)(j.c.div)(bn()),gn=Object(u.b)(j.c.div)(un()),pn=Object(u.b)(j.c.div)(dn()),hn=Object(u.b)(j.c.div)(sn()),fn=Object(u.b)(j.c.div)(on()),On=Object(u.b)(j.c.div)(cn()),An=Object(u.b)(j.c.div)(rn()),xn=function(n){var e=n.pathId,t=Object(s.e)(),r=function(n){switch(n){case"PlayStation 4":return q;case"Xbox One":return $;case"PC":return nn;case"Nintendo Switch":return en;case"iOS":return tn;default:return an}},c=Object(T.c)((function(n){return n.detail})),i=c.screen,o=c.game,d=c.isLoading;return Object(a.jsx)(a.Fragment,{children:!d&&Object(a.jsx)(mn,{className:"shadow",onClick:function(n){n.target.classList.contains("shadow")&&(document.body.style.overflow="auto",t.push("/"))},children:Object(a.jsxs)(jn,{layoutId:e,children:[Object(a.jsxs)(gn,{children:[Object(a.jsxs)("div",{className:"rating",children:[Object(a.jsx)(j.c.h3,{layoutId:"title ".concat(e),children:o.name}),Object(a.jsxs)("p",{children:["Rating : ",o.rating]}),function(){for(var n=[],e=Math.floor(o.rating),t=1;t<=5;t++)t<=e?n.push(Object(a.jsx)("img",{alt:"starFull",src:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABoAAAAaCAYAAACpSkzOAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAGLSURBVHgBtZbbbcIwFIZ/o4pnNqiZAEbICO0EpRM0ErcHHkgfIaCGDWCStiN0A0bgmUDc4yQkAYziEyWfZCW2bH858RWogHLdDpi0wESNxwO02x9gwhZBiDmUcsGEJYqjASTJOmoyeeO05UWko8nxwMBalEWTIzlR2Ud0Hc0F67GyEhmiudBXw6EDC0RZBTWdSppl3w9EVEH9IAxfRRAcUCZKO+uj1eoginp6VsX5pHPbxalF+ywJoZ9/+l0sFnuhRqM5CTw0SRR5SURNyrRktfrMxqgRWSrRr1eToVZZQXInqk12IzGKUplLsi9U4XweiPV6d1tsXLD0NQE9AvAJTJKHohQJLnr9PaBeUbLI2aI++CIJjog2Ub5Eow/E2ezZWkQNJMzs6asdSu9I9rR7wtAxFT/BTO8mf6DOPeH7mzT/S2kbHx/JOSULdfXfsJve1NjJBLT4cDx2C5K8mu9vxXLZjevkEUpTl+aIokgPrIfTaVN2zsRC2gXorrdLr2EvsKXKBbHQVprK/wF34p3gYzo6rAAAAABJRU5ErkJggg=="},t)):n.push(Object(a.jsx)("img",{alt:"starEmpty",src:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABoAAAAaCAYAAACpSkzOAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAG/SURBVHgBtZZLbsIwEIYnD7HODWpOAEIsukJZdtkbNEWAkFi0NwCW3ZUdAkTDEXoEdtmA1BvkCHQXiVdnaFK5wQFPRH7Jsj3E83lsjzFADnme5wBTJjDVbrc927ZfgCk2yDCMPpZXYIoFomiOx6PAptPpdJ44Y1kgikbqDoAhbZAUzUnU5kSlDUpFk8C090oLlI5GUrXVarmgIevaB91uV2D1gSUrd0Sj0fgMgiC65MdInG232yrO2sEcqVBNsyUnFwBpbbCEODY0TfNUY/lCf+F4PA4N3NA+GgZQoMi/tVqtlvV6nfouFCCCzGaz4WmPioIlEGr/HYZbw2TIP9AtYWnIGSiB1Wq1b0zQB8ghHOdNp9NR2q7Mo/V6HWBkdKzvgQd5n0wmb6rfLt0MApiK8w9YoIwr5xqoygbB783AEi6dAA4IL1E2JJbT6/XutEGHw0GAWiEWd7/fP8ftM0VR5KrstsqIS1CR+7j2G7QNpGO7xOI3m03Psiz6nxLJt9in1VikfZoZIDcBUPLtdruyKjfm87mP9jJNAuIIs1ZDGVEMIcDI9/0NXBHmzhDfeotSqUTPsEfQVZ4HojRWqOw/3aTMvdEfx5AAAAAASUVORK5CYII="},t));return n}()]}),Object(a.jsxs)(pn,{children:[Object(a.jsx)("h3",{children:"Platforms"}),Object(a.jsx)(hn,{children:o.platforms.map((function(n){return Object(a.jsx)("img",{src:r(n.platform.name),alt:n.platform.name},n.platform.id)}))})]})]}),Object(a.jsx)(fn,{children:Object(a.jsx)(j.c.img,{layoutId:"image ".concat(e),src:M(o.background_image,1280),alt:o.background_image})}),Object(a.jsx)(On,{children:Object(a.jsx)("p",{children:o.description_raw})}),Object(a.jsx)(An,{children:Object(a.jsx)(J.a,{animation:"foldOutAnimation",cssModule:[Q.a,K.a],children:i.results.map((function(n){return Object(a.jsx)("div",{"data-src":M(n.image,1280),alt:n.image},n.id)}))})})]})})})};function vn(){var n=Object(d.a)(["\n  min-height: 80vh;\n  display: grid;\n  grid-template-columns: repeat(auto-fit, minmax(500px, 1fr));\n  grid-column-gap: 3rem;\n  grid-row-gap: 5rem;\n"]);return vn=function(){return n},n}function wn(){var n=Object(d.a)(["\n  padding: 0rem 5rem;\n  h2 {\n    padding: 5rem 0rem;\n  }\n"]);return wn=function(){return n},n}var yn=Object(u.b)(j.c.div)(wn()),En=Object(u.b)(j.c.div)(vn()),kn=function(){var n=Object(T.b)();Object(r.useEffect)((function(){n(function(){var n=Object(f.a)(h.a.mark((function n(e){var t,a,r;return h.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,A.a.get("".concat(x).concat(C));case 2:return t=n.sent,n.next=5,A.a.get("".concat(x).concat(S));case 5:return a=n.sent,n.next=8,A.a.get("".concat(x).concat(D));case 8:r=n.sent,e({type:"FETCH_GAMES",payload:{popular:t.data.results,upcoming:a.data.results,newGames:r.data.results}});case 10:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}())}),[n]);var e=Object(T.c)((function(n){return n.games})),t=e.popular,c=e.upcoming,i=e.newGames,o=e.searched,d=Object(s.f)().pathname.split("/")[2];return Object(a.jsx)(yn,{variants:B,initial:"hidden",animate:"show",children:Object(a.jsxs)(j.b,{type:"crossfade",children:[Object(a.jsx)(j.a,{children:d&&Object(a.jsx)(xn,{pathId:d})}),o.length?Object(a.jsxs)("div",{children:[Object(a.jsx)("h2",{children:"Searched Games"}),Object(a.jsx)(En,{children:o.map((function(n){return Object(a.jsx)(V,{name:n.name,released:n.released,id:n.id,image:n.background_image},n.id)}))})]}):"",Object(a.jsx)("h2",{children:"Upcoming Games"}),Object(a.jsx)(En,{children:c.map((function(n){return Object(a.jsx)(V,{name:n.name,released:n.released,id:n.id,image:n.background_image},n.id)}))}),Object(a.jsx)("h2",{children:"Popular Games"}),Object(a.jsx)(En,{children:t.map((function(n){return Object(a.jsx)(V,{name:n.name,released:n.released,id:n.id,image:n.background_image},n.id)}))}),Object(a.jsx)("h2",{children:"New Games"}),Object(a.jsx)(En,{children:i.map((function(n){return Object(a.jsx)(V,{name:n.name,released:n.released,id:n.id,image:n.background_image},n.id)}))})]})})};var In=function(){return Object(a.jsxs)("div",{className:"App",children:[Object(a.jsx)(l,{}),Object(a.jsx)(_,{}),Object(a.jsx)(s.a,{path:["/game/:id","/"],children:Object(a.jsx)(kn,{})})]})},Cn=function(n){n&&n instanceof Function&&t.e(3).then(t.bind(null,76)).then((function(e){var t=e.getCLS,a=e.getFID,r=e.getFCP,c=e.getLCP,i=e.getTTFB;t(n),a(n),r(n),c(n),i(n)}))},Sn=t(15),Dn=t(8),Rn={game:{platforms:[]},screen:{results:[]},isLoading:!0},Un=function(){var n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Rn,e=arguments.length>1?arguments[1]:void 0;switch(e.type){case"GET_DETAIL":return Object(Dn.a)(Object(Dn.a)({},n),{},{game:e.payload.game,screen:e.payload.screen,isLoading:!1});case"LOADING_DETAIL":return Object(Dn.a)(Object(Dn.a)({},n),{},{isLoading:!0});default:return Object(Dn.a)({},n)}},Tn={popular:[],newGames:[],upcoming:[],searched:[]},Bn=function(){var n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Tn,e=arguments.length>1?arguments[1]:void 0;switch(e.type){case"FETCH_GAMES":return Object(Dn.a)(Object(Dn.a)({},n),{},{popular:e.payload.popular,newGames:e.payload.newGames,upcoming:e.payload.upcoming});case"FETCH_SEARCHED":return Object(Dn.a)(Object(Dn.a)({},n),{},{searched:e.payload.searched});case"CLEAR_SEARCHED":return Object(Dn.a)(Object(Dn.a)({},n),{},{searched:[]});default:return Object(Dn.a)({},n)}},Gn=Object(Sn.c)({games:Bn,detail:Un}),Ln=t(46),Nn=window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__||Sn.d,zn=Object(Sn.e)(Gn,Nn(Object(Sn.a)(Ln.a)));o.a.render(Object(a.jsx)(c.a.StrictMode,{children:Object(a.jsx)(T.a,{store:zn,children:Object(a.jsx)(F.a,{basename:window.location.pathname||"",children:Object(a.jsx)(In,{})})})}),document.getElementById("root")),Cn()}},[[75,1,2]]]);
//# sourceMappingURL=main.f4be995c.chunk.js.map