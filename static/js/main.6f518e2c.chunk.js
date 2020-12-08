(this.webpackJsonpver2=this.webpackJsonpver2||[]).push([[0],{35:function(n,e,t){"use strict";t.r(e);var r=t(0),a=t(1),i=t.n(a),o=t(20),c=t.n(o),s=t(3),u=t(2);function l(){var n=Object(s.a)(["\n* {\n  box-sizing: border-box;\n  outline: none;\n}\nhtml,\nbody,\ndiv,\nspan,\napplet,\nobject,\niframe,\nh1,\nh2,\nh3,\nh4,\nh5,\nh6,\np,\nblockquote,\npre,\na,\nabbr,\nacronym,\naddress,\nbig,\ncite,\ncode,\ndel,\ndfn,\nem,\nimg,\nins,\nkbd,\nq,\ns,\nsamp,\nsmall,\nstrike,\n/* strong, */\nsub,\nsup,\ntt,\nvar,\nb,\nu,\ni,\ncenter,\ndl,\ndt,\ndd,\nol,\nul,\nli,\nfieldset,\nform,\nlabel,\nlegend,\ntable,\ncaption,\ntbody,\ntfoot,\nthead,\ntr,\nth,\ntd,\narticle,\naside,\ncanvas,\ndetails,\nembed,\nfigure,\nfigcaption,\nfooter,\nheader,\nhgroup,\nmenu,\nnav,\noutput,\nruby,\nsection,\nsummary,\ntime,\nmark,\naudio,\nvideo {\n  margin: 0;\n  padding: 0;\n  border: 0;\n  font-size: 10px;\n  font: inherit;\n  vertical-align: baseline;\n}\n/* HTML5 display-role reset for older browsers */\narticle,\naside,\ndetails,\nfigcaption,\nfigure,\nfooter,\nheader,\nhgroup,\nmenu,\nnav,\nsection {\n  display: block;\n}\nbody {\n  line-height: 1;\n  color: #222222;\n  font-size: 1.6rem;\n  font-family: Circular, -apple-system, BlinkMacSystemFont, Roboto, Helvetica Neue, sans-serif;\n  line-height: 20px;\n}\nol,\nul {\n  list-style: none;\n}\nblockquote,\nq {\n  quotes: none;\n}\nblockquote:before,\nblockquote:after,\nq:before,\nq:after {\n  content: '';\n  content: none;\n}\ntable {\n  border-collapse: collapse;\n  border-spacing: 0;\n}\nbutton {\n  background-color: #fff;\n  cursor: pointer;\n  color: #222222;\n  border: none;\n  padding: 0;\n  margin: 0;\n  outline: none;\n}\na {\n  color: #222222;\n  cursor: pointer;\n  text-decoration: none;\n  outline: none;\n}\n.a11yHidden {\n  position: absolute;\n  width: 1px;\n  height: 1px;\n  overflow: hidden;\n  margin: -1px;\n  clip: rect(0, 0, 0, 0);\n}\nhtml {\n  font-size: 10px;\n}\n"]);return l=function(){return n},n}var d=Object(u.b)(l());function m(){var n=Object(s.a)(["\n  color: white;\n  font-size: 3rem;\n  font-weight: 700;\n  line-height: 8rem;\n  padding: 1rem;\n  border-radius: 5px;\n\n  &:focus {\n    box-shadow: 0 0 1px 2px white, 0 0 1px 5px cornflowerblue;\n  }\n\n  @media "," {\n    font-size: 2rem;\n    font-weight: 700;\n    line-height: 6rem;\n  }\n"]);return m=function(){return n},n}function b(){var n=Object(s.a)(["\n  margin: 0 auto;\n  width: fit-content;\n  height: 8rem;\n\n  @media "," {\n    height: 6rem;\n  }\n"]);return b=function(){return n},n}function f(){var n=Object(s.a)(["\n  height: 8rem;\n  width: 100vw;\n  background-color: cornflowerblue;\n\n  @media "," {\n    height: 6rem;\n  }\n"]);return f=function(){return n},n}var g=function(){return Object(r.jsx)(h,{children:Object(r.jsx)(j,{"aria-label":"\ub79c\ub364 \uc0ac\ub2e4\ub9ac \ud0c0\uae30 \ud648",children:Object(r.jsx)(p,{"aria-label":"\ud648\uc73c\ub85c \uac00\uae30",tabIndex:"1",href:"https://kimfriendship.github.io/ghost-leg/",children:"\ub79c\ub364 \uc0ac\ub2e4\ub9ac \ud0c0\uae30"})})})},h=u.d.div(f(),(function(n){return n.theme.mobile})),j=u.d.h1(b(),(function(n){return n.theme.mobile})),p=u.d.a(m(),(function(n){return n.theme.mobile}));function x(){var n=Object(s.a)([""]);return x=function(){return n},n}function O(){var n=Object(s.a)(["\n  width: 100vw;\n  height: 80vh;\n  position: relative;\n"]);return O=function(){return n},n}var v=function(n){var e=n.page,t=n.gameState,a=n.children,i="home"===e&&"\ud648\ud398\uc774\uc9c0: \ud50c\ub808\uc774\uc5b4 \uc218 \uc124\uc815";return"game"===e&&(i="playing"===t||"done"===t?"\uac8c\uc784 \ud398\uc774\uc9c0: \uc0ac\ub2e4\ub9ac \ud0c0\uae30":"\uac8c\uc784 \ud398\uc774\uc9c0: \ucf00\uc774\uc2a4 \uc124\uc815"),Object(r.jsxs)(w,{children:["result"!==e&&Object(r.jsx)(C,{className:"a11yHidden",children:i}),a]})},y=i.a.memo(v),w=u.d.main(O()),C=u.d.h2(x()),R=t(17),k=t(12),E=t(8),S=t(4),G={page:"home",playerCount:2,players:[],cases:{},results:{},gameState:"setting",legs:[]},P=function(n,e){switch(e.type){case"INC_PLAYERS":return Object(S.a)(Object(S.a)({},n),{},{playerCount:n.playerCount+1});case"DEC_PLAYERS":return Object(S.a)(Object(S.a)({},n),{},{playerCount:n.playerCount-1});case"ENTER_GAME":return Object(S.a)(Object(S.a)({},n),{},{page:"game"});case"START_GAME":return Object(S.a)(Object(S.a)({},n),{},{gameState:"playing"});case"RESET_CASE":return Object(S.a)(Object(S.a)({},n),{},{cases:e.cases});case"INPUT_CASE":return Object(S.a)(Object(S.a)({},n),{},{cases:Object(S.a)(Object(S.a)({},n.cases),{},Object(E.a)({},e.idx,e.value))});case"CHECK_READY":return Object(S.a)(Object(S.a)({},n),{},{gameState:e.isReady?"ready":"notReady"});case"GET_PLAYERS":return Object(S.a)(Object(S.a)({},n),{},{players:e.players});case"GET_LEGS":return Object(S.a)(Object(S.a)({},n),{},{legs:e.legs});case"GO_HOME":return Object(S.a)(Object(S.a)({},n),{},{page:"home",gameState:"setting"});case"GO_RESULT":return Object(S.a)(Object(S.a)({},n),{},{page:"result",gameState:"setting"});case"GO_GAME":return Object(S.a)(Object(S.a)({},n),{},{page:"game",gameState:"setting",results:{}});case"UPDATE_RESULT":return Object(S.a)(Object(S.a)({},n),{},{gameState:Object.keys(n.results).length+1===n.playerCount?"done":"playing",results:Object(S.a)(Object(S.a)({},n.results),{},Object(E.a)({},e.idx,e.posX))});default:throw new Error("Unhandled action type")}},z=[{id:1,name:"\ud1a0\ub07c",src:"https://image.flaticon.com/icons/svg/3069/3069187.svg",color:"gray"},{id:2,name:"\ub3fc\uc9c0",src:"https://image.flaticon.com/icons/svg/3069/3069273.svg",color:"crimson"},{id:3,name:"\ud3ad\uadc4",src:"https://image.flaticon.com/icons/svg/3069/3069217.svg",color:"darkolivegreen"},{id:4,name:"\uce74\uba5c\ub808\uc628",src:"https://image.flaticon.com/icons/svg/3069/3069230.svg",color:"lightseagreen"},{id:5,name:"\uac15\uc544\uc9c0",src:"https://image.flaticon.com/icons/svg/3069/3069267.svg",color:"darkorange"},{id:6,name:"\uae30\ub9b0",src:"https://image.flaticon.com/icons/svg/3069/3069201.svg",color:"peru"},{id:7,name:"\ub3cc\uace0\ub798",src:"https://image.flaticon.com/icons/svg/3069/3069269.svg",color:"royalblue"},{id:8,name:"\ub9d0",src:"https://image.flaticon.com/icons/svg/3069/3069284.svg",color:"saddlebrown"},{id:9,name:"\uc5ec\uc6b0",src:"https://image.flaticon.com/icons/svg/3069/3069166.svg",color:"salmon"},{id:10,name:"\ucf54\ub07c\ub9ac",src:"https://image.flaticon.com/icons/svg/3069/3069224.svg",color:"rebeccapurple"}],T=function(){var n=Object(a.useReducer)(P,G),e=Object(k.a)(n,2),t=e[0],r=e[1],i=Object(a.useCallback)((function(){return r({type:"INC_PLAYERS"})}),[]),o=Object(a.useCallback)((function(){return r({type:"DEC_PLAYERS"})}),[]),c=Object(a.useCallback)((function(){return r({type:"ENTER_GAME"})}),[]),s=Object(a.useCallback)((function(){return r({type:"START_GAME"})}),[]),u=Object(a.useCallback)((function(n){var e=Object.values(n).every((function(n){return""!==n.trim()}));r({type:"CHECK_READY",isReady:e})}),[]),l=Object(a.useCallback)((function(n,e){var t=n.target.value;r({type:"INPUT_CASE",idx:e,value:t})}),[]),d=function(n,e){return n=Math.ceil(n),e=Math.floor(e),Math.floor(Math.random()*(e-n))+n};return{state:t,incPlayers:i,decPlayers:o,enterGame:c,startGame:s,checkReady:u,resetCase:function(n){for(var e={},t=0;t<n;t++)e[t]="";r({type:"RESET_CASE",cases:e})},inputCase:l,getRandomPlayers:function(n,e){for(var t=new Set;t.size<n;)t.add(e[d(0,10)]);r({type:"GET_PLAYERS",players:Object(R.a)(t)})},getRandomLegs:function(n){for(var e=[],t=[],a=new Set,i=0,o=1;o<n;o++)e.push(d(2,5));for(;i<n-1;){a.size===e[i]&&(t.push(Object(R.a)(a).sort()),a=new Set,i++);var c=d(0,9);if(i<1)a.add(c);else t[i-1].includes(c)||a.add(c)}r({type:"GET_LEGS",legs:t})},goHome:Object(a.useCallback)((function(){return r({type:"GO_HOME"})}),[]),goResult:Object(a.useCallback)((function(){return r({type:"GO_RESULT"})}),[]),goGame:Object(a.useCallback)((function(){return r({type:"GO_GAME"})}),[]),updateResult:function(n,e){return r({type:"UPDATE_RESULT",idx:n,posX:e})}}},A=i.a.createContext(null),_=function(n){var e=n.children,t=T(),a={state:t.state,incPlayers:t.incPlayers,decPlayers:t.decPlayers,enterGame:t.enterGame,startGame:t.startGame,checkReady:t.checkReady,resetCase:t.resetCase,inputCase:t.inputCase,getRandomLegs:t.getRandomLegs,getRandomPlayers:t.getRandomPlayers,goHome:t.goHome,goResult:t.goResult,goGame:t.goGame,updateResult:t.updateResult};return Object(r.jsx)(A.Provider,{value:a,children:e})};function L(){var n=Object(s.a)(["\n  ",";\n  color: white;\n  background-color: ",";\n  border: none;\n  display: block;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  white-space: nowrap;\n  padding: 0 1rem;\n  line-height: 4rem;\n\n  @media "," {\n    line-height: 3rem;\n  }\n"]);return L=function(){return n},n}function H(){var n=Object(s.a)(["\n  ",";\n\n  &::placeholder {\n    text-align: center;\n    font-size: 1.6rem;\n  }\n\n  &:focus {\n    box-shadow: 0 0 1px 2px white, 0 0 1px 5px cornflowerblue;\n  }\n\n  @media "," {\n    &::placeholder {\n      font-size: 1.4rem;\n    }\n\n    &:focus {\n      box-shadow: 0 0 1px 1px white, 0 0 1px 2px cornflowerblue;\n    }\n  }\n"]);return H=function(){return n},n}function M(){var n=Object(s.a)(["\n  height: 4rem;\n  width: 100%;\n  border: 2px solid cornflowerblue;\n  border-radius: 5px;\n  font-size: 1.6rem;\n  text-align: center;\n\n  @media "," {\n    height: 3rem;\n    font-size: 1.4rem;\n  }\n"]);return M=function(){return n},n}function F(){var n=Object(s.a)(["\n  flex-basis: ",";\n  padding: 0 0.5%;\n  min-width: 0;\n"]);return F=function(){return n},n}function I(){var n=Object(s.a)(["\n  display: flex;\n  justify-content: space-around;\n  margin: 0 auto;\n  width: 80%;\n\n  @media "," {\n    width: 100%;\n  }\n"]);return I=function(){return n},n}var q=i.a.memo((function(n){var e=n.idx,t=n.value,a=n.gameState,i=n.inputCase,o=n.resultColor,c=n.playerCount;return Object(r.jsx)(Y,{playerCount:c,children:["setting","ready","notReady"].includes(a)?Object(r.jsx)(B,{type:"text","aria-label":"case ".concat(e+1),placeholder:"case ".concat(e+1),gameState:a,onChange:function(n){return i(n,e)},value:t,tabIndex:e+2,autoFocus:!e}):Object(r.jsx)(J,{resultColor:o,children:t})})})),N=function(n){var e=n.players,t=n.playerCount,i=n.gameState,o=n.results,c=n.cases,s=n.checkReady,u=n.inputCase;return Object(a.useEffect)((function(){Object.keys(c).length&&s(c)}),[c]),Object(r.jsx)(U,{children:e.map((function(n,a){var s=null;for(var l in o)o[l]===a&&(s=l);return Object(r.jsx)(q,{idx:a,value:c[a],gameState:i,inputCase:u,playerCount:t,resultColor:e[s]&&e[s].color},a)}))})},U=u.d.ul(I(),(function(n){return n.theme.mobile})),Y=u.d.li(F(),(function(n){return n.playerCount<4?"30%":"20%"})),D=Object(u.c)(M(),(function(n){return n.theme.mobile})),B=u.d.input(H(),D,(function(n){return n.theme.mobile})),J=u.d.span(L(),D,(function(n){return n.resultColor||"cornflowerblue"}),(function(n){return n.theme.mobile})),K=function(){var n=Object(a.useContext)(A),e=n.state,t=n.checkReady,i=n.resetCase,o=n.inputCase,c=e.players,s=e.playerCount,u=e.cases,l=e.gameState,d=e.results;return Object(a.useEffect)((function(){"setting"===l&&i(s)}),[l]),Object(r.jsx)(N,{players:c,playerCount:s,cases:u,results:d,gameState:l,checkReady:t,inputCase:o})};function X(){var n=Object(s.a)(["\n  width: 100%;\n  height: 100%;\n  display: flex;\n  justify-content: center;\n"]);return X=function(){return n},n}function W(){var n=Object(s.a)(["\n  height: 10%;\n  border-bottom: ",";\n\n  @media "," {\n    border-bottom: ",";\n  }\n"]);return W=function(){return n},n}function Q(){var n=Object(s.a)(["\n  display: flex;\n  flex-direction: column;\n  width: 100%;\n  height: 100%;\n"]);return Q=function(){return n},n}function V(){var n=Object(s.a)(["\n  width: ",";\n  border-left: ",";\n  border-right: ",";\n\n  @media "," {\n    border-left: ",";\n    border-right: ",";\n  }\n"]);return V=function(){return n},n}var Z=i.a.memo((function(n){var e=n.playerCount,t=n.legs,a=n.nth;return Object(r.jsx)(en,{playerCount:e,isRightEdge:a===e-2,isLeftEdge:0===a,children:Object(r.jsx)(tn,{children:Array.from({length:10}).map((function(n,e){return Object(r.jsx)(rn,{isLeg:t[a].includes(e)},e)}))})})})),$=function(n){var e=n.playerCount,t=n.legs;return Object(r.jsx)(an,{"aria-hidden":!0,children:Array.from({length:e-1}).map((function(n,a){return Object(r.jsx)(Z,{playerCount:e,legs:t,nth:a},a)}))})},nn=i.a.memo($),en=u.d.tbody(V(),(function(n){var e=n.playerCount;return"calc(100% / ".concat(e,")")}),(function(n){return n.isLeftEdge?"6px solid black":"3px solid black"}),(function(n){return n.isRightEdge?"6px solid black":"3px solid black"}),(function(n){return n.theme.mobile}),(function(n){return n.isLeftEdge?"4px solid black":"2px solid black"}),(function(n){return n.isRightEdge?"4px solid black":"2px solid black"})),tn=u.d.tr(Q()),rn=u.d.td(W(),(function(n){return n.isLeg&&"6px solid black"}),(function(n){return n.theme.mobile}),(function(n){return n.isLeg&&"4px solid black"})),an=u.d.table(X());function on(){var n=Object(s.a)(["\n  width: 80%;\n  height: 42rem;\n  margin: 2rem auto;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  background-color: lightgoldenrodyellow;\n\n  @media "," {\n    width: 100%;\n    height: 12rem;\n    margin: 1rem auto;\n  }\n"]);return on=function(){return n},n}function cn(){var n=Object(s.a)(["\n  font-size: 2.5rem;\n  color: darkslategrey;\n\n  @media "," {\n    font-size: 1.5rem;\n  }\n"]);return cn=function(){return n},n}function sn(){var n=Object(s.a)(["\n  font-size: 5rem;\n  font-weight: 600;\n  color: white;\n  background-color: orange;\n  width: 25rem;\n  height: 10rem;\n  border-radius: 10px;\n  transition: 0.2s ease-in;\n\n  &:hover,\n  &:focus {\n    transition: 0.2s ease-in;\n    transform: scale(1.1);\n  }\n\n  &:focus {\n    box-shadow: 0 0 1px 2px white, 0 0 1px 5px orange;\n  }\n\n  @media "," {\n    font-size: 2rem;\n    width: 10rem;\n    height: 5rem;\n  }\n"]);return sn=function(){return n},n}var un=function(n){var e=n.gameState,t=n.startGame;return Object(r.jsx)(r.Fragment,{children:Object(r.jsx)(bn,{children:"setting"===e||"notReady"===e?Object(r.jsx)(mn,{children:"\ucf00\uc774\uc2a4\ub97c \ubaa8\ub450 \uc785\ub825\ud574\uc8fc\uc138\uc694"}):Object(r.jsx)(dn,{"aria-label":"\uac8c\uc784 \uc2dc\uc791","aria-live":"assertive",onClick:t,children:"START"})})})},ln=i.a.memo(un),dn=u.d.button(sn(),(function(n){return n.theme.mobile})),mn=u.d.h3(cn(),(function(n){return n.theme.mobile})),bn=u.d.div(on(),(function(n){return n.theme.mobile}));function fn(){var n=Object(s.a)([""]);return fn=function(){return n},n}var gn=function(){return Object(r.jsx)(jn,{})},hn=i.a.memo(gn),jn=u.d.canvas(fn()),pn=function(n){var e=n.idx,t=n.canvasRef,i=Object(a.useContext)(A),o=i.state,c=i.updateResult,s=o.legs,u=o.players,l=o.playerCount,d=Object(a.useState)(null),m=Object(k.a)(d,2),b=m[0],f=m[1],g=null,h=e,j=0,p=!1,x=b&&b.getContext("2d"),O=window.devicePixelRatio||1,v="pc"===(window.innerWidth>812?"pc":"mobile")?3:1.8;x&&x.scale(O,O);var y=b&&b.width,w=b&&b.height,C=y/(2*l),R=w/10,E=C*(2*e+1),S=0,G="RIGHT",P="LEFT",z="STRAIGHT",T=z,_=function(n,t){x.beginPath(),x.arc(n,t,v,0,2*Math.PI),x.fillStyle=u[e].color,x.fill(),x.closePath()},L=function(n){var e=function(n,e){var t=C*(2*n+1);return e===G?t-1:t+1}(h,n),t=n===G&&E>=e,r=n===P&&E<=e;_(E=n===G?E+1:E-1,S),(r||t)&&(p=!1,S+=1)};return Object(a.useEffect)((function(){return f(t.current),b&&(g=setInterval((function(){return function(){var n=0!==S&&S%R===0&&!p;if(S===w)return clearInterval(g),void c(e,h);if(n){var t=s[h]&&s[h].includes(j)||!1,r=s[h-1]&&s[h-1].includes(j)||!1;j++,h=t?h+1:r?h-1:h,p=(T=t?G:r?P:z)!==z}p&&L(T),p||_(E,S+=1)}()}),5)),function(){return clearInterval(g)}}),[t,b]),Object(r.jsx)(hn,{})};function xn(){var n=Object(s.a)(["\n  position: absolute;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n"]);return xn=function(){return n},n}var On=Object(a.forwardRef)((function(n,e){var t=n.playerCount,a=n.ladderPos;return Object(r.jsx)(yn,{ref:e,top:a,children:Array.from({length:t}).map((function(n,t){return Object(r.jsx)(pn,{idx:t,canvasRef:e},t)}))})})),vn=i.a.memo(On),yn=u.d.canvas(xn()),wn=function(){var n=Object(a.useContext)(A).state,e=n.ladderPos,t=n.playerCount,i=Object(a.useRef)(null);return Object(r.jsx)(vn,{ladderPos:e,playerCount:t,ref:i})};function Cn(){var n=Object(s.a)(["\n  position: relative;\n  width: 80%;\n  height: 42rem;\n  margin: 2rem auto;\n\n  @media "," {\n    width: 100%;\n    height: 20rem;\n    margin: 1rem auto;\n  }\n"]);return Cn=function(){return n},n}var Rn=function(n){var e=n.children;return Object(r.jsx)(En,{children:e})},kn=i.a.memo(Rn),En=u.d.div(Cn(),(function(n){return n.theme.mobile})),Sn=function(){var n=Object(a.useContext)(A),e=n.state,t=n.startGame,i=n.getRandomLegs,o=e.legs,c=e.playerCount,s=e.gameState;return Object(a.useEffect)((function(){"setting"===s&&i(c)}),[s]),Object(r.jsx)(r.Fragment,{children:["setting","ready","notReady"].includes(s)?Object(r.jsx)(ln,{gameState:s,startGame:t}):Object(r.jsxs)(kn,{children:[Object(r.jsx)(nn,{legs:o,playerCount:c,gameState:s}),Object(r.jsx)(wn,{})]})})},Gn=i.a.memo(Sn);function Pn(){var n=Object(s.a)(["\n  display: block;\n  margin: 0 auto;\n  width: 70%;\n  min-height: 3rem;\n  min-width: 3rem;\n  max-width: 8rem;\n  object-fit: cover;\n"]);return Pn=function(){return n},n}function zn(){var n=Object(s.a)(["\n  width: 20%;\n"]);return zn=function(){return n},n}function Tn(){var n=Object(s.a)(["\n  display: flex;\n  flex-direction: row;\n  justify-content: space-around;\n  margin: 0 auto;\n  padding-top: 8rem;\n  width: 80%;\n\n  @media "," {\n    width: 100%;\n    padding-top: 7rem;\n  }\n"]);return Tn=function(){return n},n}var An=function(n){var e=n.players;return Object(r.jsx)(Ln,{children:e.map((function(n){var e=n.id,t=n.name,a=n.src;return Object(r.jsx)(Hn,{children:Object(r.jsx)(Mn,{src:a,alt:"".concat(t," \ud50c\ub808\uc774\uc5b4")})},e)}))})},_n=i.a.memo(An),Ln=u.d.ul(Tn(),(function(n){return n.theme.mobile})),Hn=u.d.li(zn()),Mn=u.d.img(Pn()),Fn=function(){var n=Object(a.useContext)(A),e=n.getRandomPlayers,t=n.state,i=t.players,o=t.playerCount,c=t.gameState;return Object(a.useEffect)((function(){"setting"===c&&e(o,z)}),[c]),Object(r.jsx)(_n,{players:i})},In=t(6),qn=t(9);function Nn(){var n=Object(s.a)(["\n  color: darkslategrey;\n  font-size: inherit;\n  margin-right: 1rem;\n"]);return Nn=function(){return n},n}function Un(){var n=Object(s.a)(["\n  padding: 0.5rem;\n  margin-bottom: 0.5rem;\n  font-size: 1.6rem;\n  transition: 0.2s ease-in;\n  width: 14rem;\n  text-align: right;\n  border-radius: 5px;\n\n  &:hover {\n    transition: 0.2s ease-in;\n    transform: scale(1.1);\n  }\n\n  @media "," {\n    font-size: 1.4rem;\n    width: 13rem;\n    padding: 0.3rem;\n    margin-bottom: 0.3rem;\n  }\n\n  &:focus {\n    box-shadow: 0 0 1px 2px darkslategrey;\n  }\n"]);return Un=function(){return n},n}var Yn=function(n){var e=n.text,t=n.icon,a=n.label,i=n.live,o=n.event,c=n.focus;return Object(r.jsxs)(Bn,{"aria-label":a,"aria-live":i||"off",onClick:o,autoFocus:c||!1,children:[Object(r.jsx)(Jn,{children:e}),Object(r.jsx)(qn.a,{icon:t,color:"darkslategrey"})]})},Dn=i.a.memo(Yn),Bn=u.d.button(Un(),(function(n){return n.theme.mobile})),Jn=u.d.span(Nn()),Kn=function(n){var e=n.gameState,t=n.page,a=n.goHome;return"game"===t&&"playing"!==e&&"done"!==e||"result"===t?Object(r.jsx)(Dn,{label:"\ud648\uc73c\ub85c \uac00\uae30",text:"\ud648\uc73c\ub85c \uac00\uae30",icon:In.d,event:a}):null},Xn=i.a.memo(Kn),Wn=function(n){var e=n.gameState,t=n.page,a=n.goGame;return"game"===t&&("playing"===e||"done"===e)||"result"===t?Object(r.jsx)(Dn,{label:"\uac8c\uc784 \ub2e4\uc2dc \ud558\uae30",text:"\ub2e4\uc2dc \ud558\uae30",icon:In.e,event:a}):null},Qn=i.a.memo(Wn),Vn=function(n){var e=n.gameState,t=n.page,a=n.goResult;return"game"===t&&"done"===e?Object(r.jsx)(Dn,{label:"\uac8c\uc784 \uc804\uccb4 \uacb0\uacfc \ubcf4\uae30",live:"assertive",text:"\uc804\uccb4 \uacb0\uacfc \ubcf4\uae30",icon:In.c,event:a,focus:"done"===e}):null},Zn=i.a.memo(Vn);function $n(){var n=Object(s.a)(["\n  display: flex;\n  flex-direction: column;\n  align-items: flex-end;\n  margin-right: 10%;\n  margin-top: 7rem;\n\n  @media "," {\n    margin-right: 1.5rem;\n    margin-top: 4rem;\n  }\n"]);return $n=function(){return n},n}var ne=function(n){var e=n.gameState,t=n.page,a=n.goHome,i=n.goResult,o=n.goGame;return Object(r.jsxs)(te,{page:t,children:[Object(r.jsx)(Xn,{gameState:e,page:t,goHome:a}),Object(r.jsx)(Qn,{gameState:e,page:t,goGame:o}),Object(r.jsx)(Zn,{gameState:e,page:t,goResult:i})]})},ee=i.a.memo(ne),te=u.d.div($n(),(function(n){return n.theme.mobile})),re=function(){var n=Object(a.useContext)(A),e=n.state,t=n.goHome,i=n.goResult,o=n.goGame,c=e.gameState,s=e.page;return Object(r.jsx)(ee,{gameState:c,page:s,goHome:t,goResult:i,goGame:o})},ae=i.a.memo(re),ie=function(){return Object(r.jsxs)(r.Fragment,{children:[Object(r.jsx)(Fn,{}),Object(r.jsx)(Gn,{}),Object(r.jsx)(K,{}),Object(r.jsx)(ae,{})]})},oe=t(24);function ce(){var n=Object(s.a)(["\n  background-color: ",";\n  font-size: 2.3rem;\n  font-weight: 600;\n  width: 30rem;\n  height: 6rem;\n  margin: 15rem auto 0;\n  display: block;\n  border-radius: 10px;\n  transition: 0.2s ease-in;\n\n  &:hover,\n  &:focus {\n    color: white;\n    background-color: orange;\n    transition: 0.2s ease-in;\n  }\n\n  &:focus {\n    box-shadow: 0 0 1px 2px white, 0 0 1px 5px orange;\n  }\n\n  @media "," {\n    font-size: 1.5rem;\n    margin: 8rem auto 0;\n    height: 5rem;\n    width: 20rem;\n  }\n"]);return ce=function(){return n},n}var se=function(n){var e=n.enterGame;return Object(r.jsx)(le,{"aria-label":"\uac8c\uc784 \uc785\uc7a5",onClick:e,children:"ENTER"})},ue=i.a.memo(se),le=u.d.button(ce(),Object(oe.a)(.3,"orange"),(function(n){return n.theme.mobile})),de=function(){var n=Object(a.useContext)(A).enterGame;return Object(r.jsx)(r.Fragment,{children:Object(r.jsx)(ue,{enterGame:n})})},me=i.a.memo(de);function be(){var n=Object(s.a)(["\n  font-size: 4rem;\n  width: 4rem;\n  height: 4rem;\n  line-height: 4rem;\n  border-radius: 50%;\n\n  &:disabled {\n    cursor: not-allowed;\n  }\n\n  &:focus {\n    box-shadow: 0 0 1px 2px white, 0 0 1px 5px orange;\n  }\n\n  @media "," {\n    font-size: 3.5rem;\n    line-height: 3.5rem;\n\n    &:focus {\n      box-shadow: 0 0 1px 1px white, 0 0 1px 3px orange;\n    }\n  }\n"]);return be=function(){return n},n}var fe=function(n){var e=n.playerCount,t=n.direction,a=n.incPlayers,i=n.decPlayers;return Object(r.jsx)(r.Fragment,{children:"left"===t?Object(r.jsx)(he,{"aria-label":"\ud50c\ub808\uc774\uc5b4 \uc218 \uac10\uc18c",onClick:i,disabled:e<=2,children:Object(r.jsx)(qn.a,{icon:In.a,color:e<3?"lightgray":"orange"})}):Object(r.jsx)(he,{"aria-label":"\ud50c\ub808\uc774\uc5b4 \uc218 \uc99d\uac00",onClick:a,disabled:e>=10,children:Object(r.jsx)(qn.a,{icon:In.b,color:e>9?"lightgray":"orange"})})})},ge=i.a.memo(fe),he=u.d.button(be(),(function(n){return n.theme.mobile})),je=function(n){var e=n.direction,t=Object(a.useContext)(A),i=t.incPlayers,o=t.decPlayers,c=t.state;return Object(r.jsx)(ge,{playerCount:c.playerCount,incPlayers:i,decPlayers:o,direction:e})},pe=i.a.memo(je);function xe(){var n=Object(s.a)(["\n  margin: 20vh auto 0;\n  width: 30rem;\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n\n  @media "," {\n    margin: 28vh auto 0;\n    width: 20rem;\n  }\n"]);return xe=function(){return n},n}function Oe(){var n=Object(s.a)(["\n  font-size: 6rem;\n  font-weight: 700;\n\n  @media "," {\n    font-size: 4rem;\n  }\n"]);return Oe=function(){return n},n}var ve=function(n){var e=n.playerCount;return Object(r.jsxs)(we,{children:[Object(r.jsx)(pe,{direction:"left"}),Object(r.jsx)(ye,{"aria-live":"assertive",children:e}),Object(r.jsx)(pe,{direction:"right"})]})},ye=u.d.span(Oe(),(function(n){return n.theme.mobile})),we=u.d.div(xe(),(function(n){return n.theme.mobile})),Ce=function(){var n=Object(a.useContext)(A).state.playerCount;return Object(r.jsx)(r.Fragment,{children:Object(r.jsx)(ve,{playerCount:n})})},Re=function(){return Object(r.jsxs)(r.Fragment,{children:[Object(r.jsx)(Ce,{}),Object(r.jsx)(me,{})]})},ke=i.a.memo(Re);function Ee(){var n=Object(s.a)(["\n  font-size: 2.5rem;\n  font-weight: 600;\n  line-height: 3rem;\n  margin-top: 5rem;\n  text-align: center;\n\n  @media "," {\n    margin-top: 3rem;\n    font-size: 1.8rem;\n  }\n"]);return Ee=function(){return n},n}var Se=function(){return Object(r.jsx)(Ge,{children:"\uc804\uccb4 \uacb0\uacfc"})},Ge=u.d.h2(Ee(),(function(n){return n.theme.mobile}));function Pe(){var n=Object(s.a)(["\n  font-size: 1.8rem;\n  color: white;\n  background-color: ",";\n  width: 60%;\n  height: 5rem;\n  line-height: 5rem;\n  max-width: 20rem;\n  padding: 0 1rem;\n  margin-left: 2rem;\n  border-radius: 5px;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  white-space: nowrap;\n\n  @media "," {\n    width: 50%;\n    height: 3rem;\n    line-height: 3rem;\n    font-size: 1.5rem;\n    margin-left: 1rem;\n  }\n"]);return Pe=function(){return n},n}function ze(){var n=Object(s.a)(["\n  width: 30%;\n  max-width: 8rem;\n  min-width: 4.5rem;\n  min-height: 4.5rem;\n  object-fit: cover;\n\n  @media "," {\n    width: 30%;\n  }\n"]);return ze=function(){return n},n}function Te(){var n=Object(s.a)(["\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  width: 50%;\n  padding: 1rem 3rem;\n\n  @media "," {\n    padding: 1rem;\n  }\n"]);return Te=function(){return n},n}function Ae(){var n=Object(s.a)(["\n  width: 70%;\n  max-width: 90rem;\n  margin: 5rem auto 0;\n  display: flex;\n  justify-content: space-between;\n  flex-wrap: wrap;\n\n  @media "," {\n    margin-top: 2rem;\n    width: 100%;\n  }\n"]);return Ae=function(){return n},n}var _e=function(n){var e=n.results,t=n.players,a=n.cases;return Object(r.jsx)(Le,{children:t.map((function(n,t){return Object(r.jsxs)(He,{children:[Object(r.jsx)(Me,{src:n.src,alt:"".concat(n.name," \ud50c\ub808\uc774\uc5b4")}),Object(r.jsx)(Fe,{color:n.color,children:a[e[t]]})]},t)}))})},Le=u.d.ul(Ae(),(function(n){return n.theme.mobile})),He=u.d.li(Te(),(function(n){return n.theme.mobile})),Me=u.d.img(ze(),(function(n){return n.theme.mobile})),Fe=u.d.span(Pe(),(function(n){return n.color}),(function(n){return n.theme.mobile})),Ie=function(){var n=Object(a.useContext)(A).state,e=n.results,t=n.players,i=n.cases;return Object(r.jsx)(_e,{results:e,players:t,cases:i})},qe=function(){return Object(r.jsxs)(r.Fragment,{children:[Object(r.jsx)(Se,{}),Object(r.jsx)(Ie,{}),Object(r.jsx)(ae,{})]})},Ne=function(){var n=Object(a.useContext)(A).state,e=n.page,t=n.gameState;return Object(r.jsx)(y,{page:e,gameState:t,children:"home"===e?Object(r.jsx)(ke,{}):"game"===e?Object(r.jsx)(ie,{}):Object(r.jsx)(qe,{})})},Ue=i.a.memo(Ne);var Ye=function(){return Object(r.jsxs)(r.Fragment,{children:[Object(r.jsx)(d,{}),Object(r.jsx)(g,{}),Object(r.jsx)(Ue,{})]})},De={mobile:"screen and (max-width: 812px)"};c.a.render(Object(r.jsx)(_,{children:Object(r.jsx)(u.a,{theme:De,children:Object(r.jsx)(Ye,{})})}),document.getElementById("root"))}},[[35,1,2]]]);
//# sourceMappingURL=main.6f518e2c.chunk.js.map