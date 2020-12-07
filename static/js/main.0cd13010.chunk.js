(this.webpackJsonpver2=this.webpackJsonpver2||[]).push([[0],{35:function(e,n,t){"use strict";t.r(n);var r=t(0),a=t(1),o=t.n(a),i=t(20),c=t.n(i),u=t(3),s=t(2);function l(){var e=Object(u.a)(["\n* {\n  box-sizing: border-box;\n  outline: none;\n}\nhtml,\nbody,\ndiv,\nspan,\napplet,\nobject,\niframe,\nh1,\nh2,\nh3,\nh4,\nh5,\nh6,\np,\nblockquote,\npre,\na,\nabbr,\nacronym,\naddress,\nbig,\ncite,\ncode,\ndel,\ndfn,\nem,\nimg,\nins,\nkbd,\nq,\ns,\nsamp,\nsmall,\nstrike,\n/* strong, */\nsub,\nsup,\ntt,\nvar,\nb,\nu,\ni,\ncenter,\ndl,\ndt,\ndd,\nol,\nul,\nli,\nfieldset,\nform,\nlabel,\nlegend,\ntable,\ncaption,\ntbody,\ntfoot,\nthead,\ntr,\nth,\ntd,\narticle,\naside,\ncanvas,\ndetails,\nembed,\nfigure,\nfigcaption,\nfooter,\nheader,\nhgroup,\nmenu,\nnav,\noutput,\nruby,\nsection,\nsummary,\ntime,\nmark,\naudio,\nvideo {\n  margin: 0;\n  padding: 0;\n  border: 0;\n  font-size: 10px;\n  font: inherit;\n  vertical-align: baseline;\n}\n/* HTML5 display-role reset for older browsers */\narticle,\naside,\ndetails,\nfigcaption,\nfigure,\nfooter,\nheader,\nhgroup,\nmenu,\nnav,\nsection {\n  display: block;\n}\nbody {\n  line-height: 1;\n  color: #222222;\n  font-size: 1.6rem;\n  font-family: Circular, -apple-system, BlinkMacSystemFont, Roboto, Helvetica Neue, sans-serif;\n  line-height: 20px;\n}\nol,\nul {\n  list-style: none;\n}\nblockquote,\nq {\n  quotes: none;\n}\nblockquote:before,\nblockquote:after,\nq:before,\nq:after {\n  content: '';\n  content: none;\n}\ntable {\n  border-collapse: collapse;\n  border-spacing: 0;\n}\nbutton {\n  background-color: #fff;\n  cursor: pointer;\n  color: #222222;\n  border: none;\n  padding: 0;\n  margin: 0;\n  outline: none;\n}\na {\n  color: #222222;\n  cursor: pointer;\n  text-decoration: none;\n  outline: none;\n}\n.a11yHidden {\n  position: absolute;\n  width: 1px;\n  height: 1px;\n  overflow: hidden;\n  margin: -1px;\n  clip: rect(0, 0, 0, 0);\n}\nhtml {\n  font-size: 10px;\n}\n"]);return l=function(){return e},e}var m=Object(s.b)(l());function d(){var e=Object(u.a)(["\n  color: white;\n  font-size: 3rem;\n  font-weight: 700;\n  line-height: 8rem;\n  padding: 1rem;\n  border-radius: 5px;\n\n  &:focus {\n    box-shadow: 0 0 1px 2px white, 0 0 1px 5px cornflowerblue;\n  }\n\n  @media "," {\n    font-size: 2rem;\n    font-weight: 700;\n    line-height: 6rem;\n  }\n"]);return d=function(){return e},e}function b(){var e=Object(u.a)(["\n  margin: 0 auto;\n  width: fit-content;\n  height: 8rem;\n\n  @media "," {\n    height: 6rem;\n  }\n"]);return b=function(){return e},e}function f(){var e=Object(u.a)(["\n  height: 8rem;\n  width: 100vw;\n  background-color: cornflowerblue;\n\n  @media "," {\n    height: 6rem;\n  }\n"]);return f=function(){return e},e}var g=function(){return Object(r.jsx)(h,{children:Object(r.jsx)(j,{"aria-label":"\ub79c\ub364 \uc0ac\ub2e4\ub9ac \ud0c0\uae30 \ud648",children:Object(r.jsx)(p,{"aria-label":"\ud648\uc73c\ub85c \uac00\uae30",tabIndex:"1",href:"https://kimfriendship.github.io/ghost-leg/",children:"\ub79c\ub364 \uc0ac\ub2e4\ub9ac \ud0c0\uae30"})})})},h=s.d.div(f(),(function(e){return e.theme.mobile})),j=s.d.h1(b(),(function(e){return e.theme.mobile})),p=s.d.a(d(),(function(e){return e.theme.mobile}));function x(){var e=Object(u.a)([""]);return x=function(){return e},e}function O(){var e=Object(u.a)(["\n  width: 100vw;\n  position: relative;\n"]);return O=function(){return e},e}var v=function(e){var n=e.page,t=e.gameState,a=e.children,o="home"===n&&"\ud648\ud398\uc774\uc9c0: \ud50c\ub808\uc774\uc5b4 \uc218 \uc124\uc815";return"game"===n&&(o="playing"===t||"done"===t?"\uac8c\uc784 \ud398\uc774\uc9c0: \uc0ac\ub2e4\ub9ac \ud0c0\uae30":"\uac8c\uc784 \ud398\uc774\uc9c0: \ucf00\uc774\uc2a4 \uc124\uc815"),Object(r.jsxs)(w,{children:["result"!==n&&Object(r.jsx)(C,{className:"a11yHidden",children:o}),a]})},y=o.a.memo(v),w=s.d.main(O()),C=s.d.h2(x()),E=t(17),R=t(12),k=t(8),S=t(4),G={page:"home",playerCount:2,players:[],cases:{},results:{},gameState:"setting",legs:[]},P=function(e,n){switch(n.type){case"INCREASE_PLAYERS":return Object(S.a)(Object(S.a)({},e),{},{playerCount:e.playerCount+1});case"DECREASE_PLAYERS":return Object(S.a)(Object(S.a)({},e),{},{playerCount:e.playerCount-1});case"ENTER_GAME":return Object(S.a)(Object(S.a)({},e),{},{page:"game"});case"START_GAME":return Object(S.a)(Object(S.a)({},e),{},{gameState:"playing"});case"RESET_CASE":return Object(S.a)(Object(S.a)({},e),{},{cases:n.cases});case"INPUT_CASE":return Object(S.a)(Object(S.a)({},e),{},{cases:Object(S.a)(Object(S.a)({},e.cases),{},Object(k.a)({},n.idx,n.value))});case"CHECK_READY":return Object(S.a)(Object(S.a)({},e),{},{gameState:n.isReady?"ready":"notReady"});case"GET_PLAYERS":return Object(S.a)(Object(S.a)({},e),{},{players:n.players});case"GET_LEGS":return Object(S.a)(Object(S.a)({},e),{},{legs:n.legs});case"GO_HOME":return Object(S.a)(Object(S.a)({},e),{},{page:"home",gameState:"setting"});case"GO_RESULT":return Object(S.a)(Object(S.a)({},e),{},{page:"result",gameState:"setting"});case"GO_GAME":return Object(S.a)(Object(S.a)({},e),{},{page:"game",gameState:"setting",results:{}});case"UPDATE_RESULT":return Object(S.a)(Object(S.a)({},e),{},{gameState:Object.keys(e.results).length+1===e.playerCount?"done":"playing",results:Object(S.a)(Object(S.a)({},e.results),{},Object(k.a)({},n.idx,n.posX))});default:throw new Error("Unhandled action type")}},A=[{id:1,name:"\ud1a0\ub07c",src:"https://image.flaticon.com/icons/svg/3069/3069187.svg",color:"gray"},{id:2,name:"\ub3fc\uc9c0",src:"https://image.flaticon.com/icons/svg/3069/3069273.svg",color:"crimson"},{id:3,name:"\ud3ad\uadc4",src:"https://image.flaticon.com/icons/svg/3069/3069217.svg",color:"darkolivegreen"},{id:4,name:"\uce74\uba5c\ub808\uc628",src:"https://image.flaticon.com/icons/svg/3069/3069230.svg",color:"lightseagreen"},{id:5,name:"\uac15\uc544\uc9c0",src:"https://image.flaticon.com/icons/svg/3069/3069267.svg",color:"darkorange"},{id:6,name:"\uae30\ub9b0",src:"https://image.flaticon.com/icons/svg/3069/3069201.svg",color:"peru"},{id:7,name:"\ub3cc\uace0\ub798",src:"https://image.flaticon.com/icons/svg/3069/3069269.svg",color:"royalblue"},{id:8,name:"\ub9d0",src:"https://image.flaticon.com/icons/svg/3069/3069284.svg",color:"saddlebrown"},{id:9,name:"\uc5ec\uc6b0",src:"https://image.flaticon.com/icons/svg/3069/3069166.svg",color:"salmon"},{id:10,name:"\ucf54\ub07c\ub9ac",src:"https://image.flaticon.com/icons/svg/3069/3069224.svg",color:"rebeccapurple"}],z=function(){var e=Object(a.useReducer)(P,G),n=Object(R.a)(e,2),t=n[0],r=n[1],o=Object(a.useCallback)((function(){return r({type:"INCREASE_PLAYERS"})}),[]),i=Object(a.useCallback)((function(){return r({type:"DECREASE_PLAYERS"})}),[]),c=Object(a.useCallback)((function(){return r({type:"ENTER_GAME"})}),[]),u=Object(a.useCallback)((function(){return r({type:"START_GAME"})}),[]),s=Object(a.useCallback)((function(e){var n=Object.values(e).every((function(e){return""!==e.trim()}));r({type:"CHECK_READY",isReady:n})}),[]),l=Object(a.useCallback)((function(e,n){var t=e.target.value;r({type:"INPUT_CASE",idx:n,value:t})}),[]),m=function(e,n){return e=Math.ceil(e),n=Math.floor(n),Math.floor(Math.random()*(n-e))+e};return{state:t,increasePlayers:o,decreasePlayers:i,enterGame:c,startGame:u,checkReady:s,resetCase:function(e){for(var n={},t=0;t<e;t++)n[t]="";r({type:"RESET_CASE",cases:n})},inputCase:l,getRandomPlayers:function(e,n){for(var t=new Set;t.size<e;)t.add(n[m(0,10)]);r({type:"GET_PLAYERS",players:Object(E.a)(t)})},getRandomLegs:function(e){for(var n=[],t=[],a=new Set,o=0,i=1;i<e;i++)n.push(m(2,5));for(;o<e-1;){a.size===n[o]&&(t.push(Object(E.a)(a).sort()),a=new Set,o++);var c=m(0,9);if(o<1)a.add(c);else t[o-1].includes(c)||a.add(c)}r({type:"GET_LEGS",legs:t})},goHome:Object(a.useCallback)((function(){return r({type:"GO_HOME"})}),[]),goResult:Object(a.useCallback)((function(){return r({type:"GO_RESULT"})}),[]),goGame:Object(a.useCallback)((function(){return r({type:"GO_GAME"})}),[]),updateResult:Object(a.useCallback)((function(e,n){return r({type:"UPDATE_RESULT",idx:e,posX:n})}),[])}},T=o.a.createContext(null),_=function(e){var n=e.children,t=z(),a={state:t.state,increasePlayers:t.increasePlayers,decreasePlayers:t.decreasePlayers,enterGame:t.enterGame,startGame:t.startGame,checkReady:t.checkReady,resetCase:t.resetCase,inputCase:t.inputCase,getRandomLegs:t.getRandomLegs,getRandomPlayers:t.getRandomPlayers,goHome:t.goHome,goResult:t.goResult,goGame:t.goGame,updateResult:t.updateResult};return Object(r.jsx)(T.Provider,{value:a,children:n})};function L(){var e=Object(u.a)(["\n  ",";\n  color: white;\n  background-color: ",";\n  border: none;\n  display: block;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  white-space: nowrap;\n  padding: 0 1rem;\n  line-height: 4rem;\n\n  @media "," {\n    transform: ",";\n    width: ",";\n    line-height: 3rem;\n  }\n"]);return L=function(){return e},e}function H(){var e=Object(u.a)(["\n  ",";\n\n  &::placeholder {\n    text-align: center;\n    font-size: 1.6rem;\n  }\n\n  &:focus {\n    box-shadow: 0 0 1px 2px white, 0 0 1px 5px cornflowerblue;\n  }\n\n  @media "," {\n    &::placeholder {\n      font-size: 1.4rem;\n    }\n\n    &:focus {\n      box-shadow: 0 0 1px 1px white, 0 0 1px 2px cornflowerblue;\n    }\n  }\n"]);return H=function(){return e},e}function M(){var e=Object(u.a)(["\n  height: 4rem;\n  width: 100%;\n  border: 2px solid cornflowerblue;\n  border-radius: 5px;\n  font-size: 1.6rem;\n  text-align: center;\n\n  @media "," {\n    height: 3rem;\n    font-size: 1.4rem;\n  }\n"]);return M=function(){return e},e}function F(){var e=Object(u.a)(["\n  width: ",";\n  padding: 0 0.5%;\n"]);return F=function(){return e},e}function I(){var e=Object(u.a)(["\n  display: flex;\n  justify-content: space-around;\n  margin: 0 auto;\n  width: 80%;\n\n  @media "," {\n    width: 100%;\n    margin-left: ",";\n  }\n"]);return I=function(){return e},e}var q=o.a.memo((function(e){var n=e.idx,t=e.value,a=e.gameState,o=e.inputCase,i=e.resultColor,c=e.playerCount;return Object(r.jsx)(Y,{playerCount:c,children:["setting","ready","notReady"].includes(a)?Object(r.jsx)(B,{type:"text","aria-label":"case ".concat(n+1),placeholder:"case ".concat(n+1),gameState:a,onChange:function(e){return o(e,n)},value:t,tabIndex:n+2,autoFocus:!n}):Object(r.jsx)(J,{resultColor:i,playerCount:c,children:t})})})),N=function(e){var n=e.players,t=e.playerCount,o=e.gameState,i=e.results,c=e.cases,u=e.checkReady,s=e.inputCase;return Object(a.useEffect)((function(){Object.keys(c).length&&u(c)}),[c]),Object(r.jsx)(U,{playerCount:t,children:n.map((function(e,a){var u=null;for(var l in i)i[l]===a&&(u=l);return Object(r.jsx)(q,{idx:a,value:c[a],gameState:o,inputCase:s,playerCount:t,resultColor:n[u]&&n[u].color},a)}))})},U=s.d.ul(I(),(function(e){return e.theme.mobile}),(function(e){return e.playerCount>7&&"-1rem"})),Y=s.d.li(F(),(function(e){return e.playerCount<4?"30%":"20%"})),D=Object(s.c)(M(),(function(e){return e.theme.mobile})),B=s.d.input(H(),D,(function(e){return e.theme.mobile})),J=s.d.span(L(),D,(function(e){return e.resultColor||"cornflowerblue"}),(function(e){return e.theme.mobile}),(function(e){return e.playerCount>7&&"rotate(90deg)"}),(function(e){return e.playerCount>7&&"200%"})),K=function(){var e=Object(a.useContext)(T),n=e.state,t=e.checkReady,o=e.resetCase,i=e.inputCase,c=n.players,u=n.playerCount,s=n.cases,l=n.gameState,m=n.results;return Object(a.useEffect)((function(){"setting"===l&&o(u)}),[l]),Object(r.jsx)(N,{players:c,playerCount:u,cases:s,results:m,gameState:l,checkReady:t,inputCase:i})};function X(){var e=Object(u.a)(["\n  width: 100%;\n  height: 100%;\n  display: flex;\n  justify-content: center;\n"]);return X=function(){return e},e}function W(){var e=Object(u.a)(["\n  height: 10%;\n  border-bottom: ",";\n\n  @media "," {\n    border-bottom: ",";\n  }\n"]);return W=function(){return e},e}function Q(){var e=Object(u.a)(["\n  display: flex;\n  flex-direction: column;\n  width: 100%;\n  height: 100%;\n"]);return Q=function(){return e},e}function V(){var e=Object(u.a)(["\n  width: ",";\n  border-left: ",";\n  border-right: ",";\n\n  @media "," {\n    border-left: ",";\n    border-right: ",";\n  }\n"]);return V=function(){return e},e}var Z=o.a.memo((function(e){var n=e.playerCount,t=e.legs,a=e.nth;return Object(r.jsx)(ne,{playerCount:n,isRightEdge:a===n-2,isLeftEdge:0===a,children:Object(r.jsx)(te,{children:Array.from({length:10}).map((function(e,n){return Object(r.jsx)(re,{isLeg:t[a].includes(n)},n)}))})})})),$=function(e){var n=e.playerCount,t=e.legs;return Object(r.jsx)(ae,{"aria-hidden":!0,children:Array.from({length:n-1}).map((function(e,a){return Object(r.jsx)(Z,{playerCount:n,legs:t,nth:a},a)}))})},ee=o.a.memo($),ne=s.d.tbody(V(),(function(e){var n=e.playerCount;return"calc(100% / ".concat(n,")")}),(function(e){return e.isLeftEdge?"6px solid black":"3px solid black"}),(function(e){return e.isRightEdge?"6px solid black":"3px solid black"}),(function(e){return e.theme.mobile}),(function(e){return e.isLeftEdge?"4px solid black":"2px solid black"}),(function(e){return e.isRightEdge?"4px solid black":"2px solid black"})),te=s.d.tr(Q()),re=s.d.td(W(),(function(e){return e.isLeg&&"6px solid black"}),(function(e){return e.theme.mobile}),(function(e){return e.isLeg&&"4px solid black"})),ae=s.d.table(X());function oe(){var e=Object(u.a)(["\n  width: 80%;\n  height: 42rem;\n  margin: 2rem auto;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  background-color: lightgoldenrodyellow;\n\n  @media "," {\n    width: 100%;\n    height: 12rem;\n    margin: 1rem auto;\n  }\n"]);return oe=function(){return e},e}function ie(){var e=Object(u.a)(["\n  font-size: 2.5rem;\n  color: darkslategrey;\n\n  @media "," {\n    font-size: 1.5rem;\n  }\n"]);return ie=function(){return e},e}function ce(){var e=Object(u.a)(["\n  font-size: 5rem;\n  font-weight: 600;\n  color: white;\n  background-color: orange;\n  width: 25rem;\n  height: 10rem;\n  border-radius: 10px;\n  transition: 0.2s ease-in;\n\n  &:hover,\n  &:focus {\n    transition: 0.2s ease-in;\n    transform: scale(1.1);\n  }\n\n  &:focus {\n    box-shadow: 0 0 1px 2px white, 0 0 1px 5px orange;\n  }\n\n  @media "," {\n    font-size: 2rem;\n    width: 10rem;\n    height: 5rem;\n  }\n"]);return ce=function(){return e},e}var ue=function(e){var n=e.gameState,t=e.startGame;return Object(r.jsx)(r.Fragment,{children:Object(r.jsx)(de,{children:"setting"===n||"notReady"===n?Object(r.jsx)(me,{children:"\ucf00\uc774\uc2a4\ub97c \ubaa8\ub450 \uc785\ub825\ud574\uc8fc\uc138\uc694"}):Object(r.jsx)(le,{"aria-label":"\uac8c\uc784 \uc2dc\uc791","aria-live":"assertive",onClick:t,children:"START"})})})},se=o.a.memo(ue),le=s.d.button(ce(),(function(e){return e.theme.mobile})),me=s.d.h3(ie(),(function(e){return e.theme.mobile})),de=s.d.div(oe(),(function(e){return e.theme.mobile}));function be(){var e=Object(u.a)([""]);return be=function(){return e},e}var fe=function(){return Object(r.jsx)(he,{})},ge=o.a.memo(fe),he=s.d.canvas(be()),je=function(e){var n=e.idx,t=e.canvasRef,o=Object(a.useContext)(T),i=o.state,c=o.updateResult,u=i.legs,s=i.players,l=i.playerCount,m=Object(a.useState)(null),d=Object(R.a)(m,2),b=d[0],f=d[1],g=null,h=n,j=0,p=!1,x=b&&b.getContext("2d"),O=b&&b.width,v=b&&b.height,y="pc"===(window.innerWidth>812?"pc":"mobile")?2:1.5,w=O/(2*l),C=v/10,E=w*(2*n+1),k=0,S="RIGHT",G="LEFT",P="STRAIGHT",A=P,z=function(e,t){x.beginPath(),x.arc(e,t,y,0,10*Math.PI),x.fillStyle=s[n].color,x.fill(),x.closePath()},_=function(e){var n=function(e,n){var t=w*(2*e+1);return n===S?t-1:t+1}(h,e),t=e===S&&E>=n,r=e===G&&E<=n;z(E=e===S?E+1:E-1,k),(r||t)&&(p=!1,k+=1)};return Object(a.useEffect)((function(){return f(t.current),b&&(g=setInterval((function(){return function(){var e=0!==k&&k%C===0&&!p;if(k===v)return clearInterval(g),void c(n,h);if(e){var t=u[h]&&u[h].includes(j)||!1,r=u[h-1]&&u[h-1].includes(j)||!1;j++,h=t?h+1:r?h-1:h,p=(A=t?S:r?G:P)!==P}p&&_(A),p||z(E,k+=1)}()}),5)),function(){return clearInterval(g)}}),[t,b]),Object(r.jsx)(ge,{})};function pe(){var e=Object(u.a)(["\n  position: absolute;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n"]);return pe=function(){return e},e}var xe=Object(a.forwardRef)((function(e,n){var t=e.playerCount,a=e.ladderPos;return Object(r.jsx)(ve,{ref:n,top:a,children:Array.from({length:t}).map((function(e,t){return Object(r.jsx)(je,{idx:t,canvasRef:n},t)}))})})),Oe=o.a.memo(xe),ve=s.d.canvas(pe()),ye=function(){var e=Object(a.useContext)(T).state,n=e.ladderPos,t=e.playerCount,o=Object(a.useRef)(null);return Object(r.jsx)(Oe,{ladderPos:n,playerCount:t,ref:o})};function we(){var e=Object(u.a)(["\n  position: relative;\n  width: 80%;\n  height: 42rem;\n  margin: 2rem auto;\n\n  @media "," {\n    width: 100%;\n    height: 20rem;\n    margin: 1rem auto;\n  }\n"]);return we=function(){return e},e}var Ce=function(e){var n=e.children;return Object(r.jsx)(Re,{children:n})},Ee=o.a.memo(Ce),Re=s.d.div(we(),(function(e){return e.theme.mobile})),ke=function(){var e=Object(a.useContext)(T),n=e.state,t=e.startGame,o=e.getRandomLegs,i=n.legs,c=n.playerCount,u=n.gameState;return Object(a.useEffect)((function(){"setting"===u&&o(c)}),[u]),Object(r.jsx)(r.Fragment,{children:["setting","ready","notReady"].includes(u)?Object(r.jsx)(se,{gameState:u,startGame:t}):Object(r.jsxs)(Ee,{children:[Object(r.jsx)(ee,{legs:i,playerCount:c,gameState:u}),Object(r.jsx)(ye,{})]})})},Se=o.a.memo(ke);function Ge(){var e=Object(u.a)(["\n  display: block;\n  margin: 0 auto;\n  width: 70%;\n  min-height: 3rem;\n  min-width: 3rem;\n  max-width: 8rem;\n  object-fit: cover;\n"]);return Ge=function(){return e},e}function Pe(){var e=Object(u.a)(["\n  width: 20%;\n"]);return Pe=function(){return e},e}function Ae(){var e=Object(u.a)(["\n  display: flex;\n  flex-direction: row;\n  justify-content: space-around;\n  margin: 0 auto;\n  padding-top: 8rem;\n  width: 80%;\n\n  @media "," {\n    width: 100%;\n    padding-top: 7rem;\n  }\n"]);return Ae=function(){return e},e}var ze=function(e){var n=e.players;return Object(r.jsx)(_e,{children:n.map((function(e){var n=e.id,t=e.name,a=e.src;return Object(r.jsx)(Le,{children:Object(r.jsx)(He,{src:a,alt:"".concat(t," \ud50c\ub808\uc774\uc5b4")})},n)}))})},Te=o.a.memo(ze),_e=s.d.ul(Ae(),(function(e){return e.theme.mobile})),Le=s.d.li(Pe()),He=s.d.img(Ge()),Me=function(){var e=Object(a.useContext)(T),n=e.getRandomPlayers,t=e.state,o=t.players,i=t.playerCount,c=t.gameState;return Object(a.useEffect)((function(){"setting"===c&&n(i,A)}),[c]),Object(r.jsx)(Te,{players:o})},Fe=t(6),Ie=t(9);function qe(){var e=Object(u.a)(["\n  color: darkslategrey;\n  font-size: inherit;\n  margin-right: 1rem;\n"]);return qe=function(){return e},e}function Ne(){var e=Object(u.a)(["\n  padding: 0.5rem;\n  margin-bottom: 0.5rem;\n  font-size: 1.6rem;\n  transition: 0.2s ease-in;\n  width: 14rem;\n  text-align: right;\n  border-radius: 5px;\n\n  &:hover {\n    transition: 0.2s ease-in;\n    transform: scale(1.1);\n  }\n\n  @media "," {\n    font-size: 1.4rem;\n    width: 13rem;\n    padding: 0.3rem;\n    margin-bottom: 0.3rem;\n  }\n\n  &:focus {\n    box-shadow: 0 0 1px 2px darkslategrey;\n  }\n"]);return Ne=function(){return e},e}var Ue=function(e){var n=e.text,t=e.icon,a=e.label,o=e.live,i=e.event,c=e.focus;return Object(r.jsxs)(De,{"aria-label":a,"aria-live":o||"off",onClick:i,autoFocus:c||!1,children:[Object(r.jsx)(Be,{children:n}),Object(r.jsx)(Ie.a,{icon:t,color:"darkslategrey"})]})},Ye=o.a.memo(Ue),De=s.d.button(Ne(),(function(e){return e.theme.mobile})),Be=s.d.span(qe()),Je=function(e){var n=e.gameState,t=e.page,a=e.goHome;return"game"===t&&"playing"!==n&&"done"!==n||"result"===t?Object(r.jsx)(Ye,{label:"\ud648\uc73c\ub85c \uac00\uae30",text:"\ud648\uc73c\ub85c \uac00\uae30",icon:Fe.d,event:a}):null},Ke=o.a.memo(Je),Xe=function(e){var n=e.gameState,t=e.page,a=e.goGame;return"game"===t&&("playing"===n||"done"===n)||"result"===t?Object(r.jsx)(Ye,{label:"\uac8c\uc784 \ub2e4\uc2dc \ud558\uae30",text:"\ub2e4\uc2dc \ud558\uae30",icon:Fe.e,event:a}):null},We=o.a.memo(Xe),Qe=function(e){var n=e.gameState,t=e.page,a=e.goResult;return"game"===t&&"done"===n?Object(r.jsx)(Ye,{label:"\uac8c\uc784 \uc804\uccb4 \uacb0\uacfc \ubcf4\uae30",live:"assertive",text:"\uc804\uccb4 \uacb0\uacfc \ubcf4\uae30",icon:Fe.c,event:a,focus:"done"===n}):null},Ve=o.a.memo(Qe);function Ze(){var e=Object(u.a)(["\n  display: flex;\n  flex-direction: column;\n  align-items: flex-end;\n  margin-right: 10%;\n  margin-top: 7rem;\n\n  @media "," {\n    margin-top: 5rem;\n    /* position: absolute;\n    margin: 0;\n    top: ",";\n    right: 1rem; */\n  }\n"]);return Ze=function(){return e},e}var $e=function(e){var n=e.gameState,t=e.page,a=e.goHome,o=e.goResult,i=e.goGame;return Object(r.jsxs)(nn,{children:[Object(r.jsx)(Ke,{gameState:n,page:t,goHome:a}),Object(r.jsx)(We,{gameState:n,page:t,goGame:i}),Object(r.jsx)(Ve,{gameState:n,page:t,goResult:o})]})},en=o.a.memo($e),nn=s.d.div(Ze(),(function(e){return e.theme.mobile}),(function(e){return"result"===e.page?"3.5rem":"1rem"})),tn=function(){var e=Object(a.useContext)(T),n=e.state,t=e.goHome,o=e.goResult,i=e.goGame,c=n.gameState,u=n.page;return Object(r.jsx)(en,{gameState:c,page:u,goHome:t,goResult:o,goGame:i})},rn=o.a.memo(tn),an=function(){return Object(r.jsxs)(r.Fragment,{children:[Object(r.jsx)(Me,{}),Object(r.jsx)(Se,{}),Object(r.jsx)(K,{}),Object(r.jsx)(rn,{})]})},on=t(24);function cn(){var e=Object(u.a)(["\n  background-color: ",";\n  font-size: 2.3rem;\n  font-weight: 600;\n  width: 30rem;\n  height: 6rem;\n  margin: 15rem auto 0;\n  display: block;\n  border-radius: 10px;\n  transition: 0.2s ease-in;\n\n  &:hover,\n  &:focus {\n    color: white;\n    background-color: orange;\n    transition: 0.2s ease-in;\n  }\n\n  &:focus {\n    box-shadow: 0 0 1px 2px white, 0 0 1px 5px orange;\n  }\n\n  @media "," {\n    font-size: 1.5rem;\n    margin: 8rem auto 0;\n    height: 5rem;\n    width: 20rem;\n  }\n"]);return cn=function(){return e},e}var un=function(e){var n=e.enterGame;return Object(r.jsx)(ln,{"aria-label":"\uac8c\uc784 \uc785\uc7a5",onClick:n,children:"ENTER"})},sn=o.a.memo(un),ln=s.d.button(cn(),Object(on.a)(.3,"orange"),(function(e){return e.theme.mobile})),mn=function(){var e=Object(a.useContext)(T).enterGame;return Object(r.jsx)(r.Fragment,{children:Object(r.jsx)(sn,{enterGame:e})})},dn=o.a.memo(mn);function bn(){var e=Object(u.a)(["\n  font-size: 4rem;\n  width: 4rem;\n  height: 4rem;\n  line-height: 4rem;\n  border-radius: 50%;\n\n  &:disabled {\n    cursor: not-allowed;\n  }\n\n  &:focus {\n    box-shadow: 0 0 1px 2px white, 0 0 1px 5px orange;\n  }\n\n  @media "," {\n    font-size: 3.5rem;\n    line-height: 3.5rem;\n\n    &:focus {\n      box-shadow: 0 0 1px 1px white, 0 0 1px 3px orange;\n    }\n  }\n"]);return bn=function(){return e},e}var fn=function(e){var n=e.playerCount,t=e.direction,a=e.increasePlayers,o=e.decreasePlayers;return Object(r.jsx)(r.Fragment,{children:"left"===t?Object(r.jsx)(hn,{"aria-label":"\ud50c\ub808\uc774\uc5b4 \uc218 \uac10\uc18c",onClick:o,disabled:n<=2,children:Object(r.jsx)(Ie.a,{icon:Fe.a,color:n<3?"lightgray":"orange"})}):Object(r.jsx)(hn,{"aria-label":"\ud50c\ub808\uc774\uc5b4 \uc218 \uc99d\uac00",onClick:a,disabled:n>=10,children:Object(r.jsx)(Ie.a,{icon:Fe.b,color:n>9?"lightgray":"orange"})})})},gn=o.a.memo(fn),hn=s.d.button(bn(),(function(e){return e.theme.mobile})),jn=function(e){var n=e.direction,t=Object(a.useContext)(T),o=t.increasePlayers,i=t.decreasePlayers,c=t.state;return Object(r.jsx)(gn,{playerCount:c.playerCount,increasePlayers:o,decreasePlayers:i,direction:n})},pn=o.a.memo(jn);function xn(){var e=Object(u.a)(["\n  margin: 20vh auto 0;\n  width: 30rem;\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n\n  @media "," {\n    margin: 28vh auto 0;\n    width: 20rem;\n  }\n"]);return xn=function(){return e},e}function On(){var e=Object(u.a)(["\n  font-size: 6rem;\n  font-weight: 700;\n\n  @media "," {\n    font-size: 4rem;\n  }\n"]);return On=function(){return e},e}var vn=function(e){var n=e.playerCount;return Object(r.jsxs)(wn,{children:[Object(r.jsx)(pn,{direction:"left"}),Object(r.jsx)(yn,{"aria-live":"assertive",children:n}),Object(r.jsx)(pn,{direction:"right"})]})},yn=s.d.span(On(),(function(e){return e.theme.mobile})),wn=s.d.div(xn(),(function(e){return e.theme.mobile})),Cn=function(){var e=Object(a.useContext)(T).state.playerCount;return Object(r.jsx)(r.Fragment,{children:Object(r.jsx)(vn,{playerCount:e})})},En=function(){return Object(r.jsxs)(r.Fragment,{children:[Object(r.jsx)(Cn,{}),Object(r.jsx)(dn,{})]})},Rn=o.a.memo(En);function kn(){var e=Object(u.a)(["\n  font-size: 2.5rem;\n  font-weight: 600;\n  line-height: 3rem;\n  margin-top: 5rem;\n  text-align: center;\n\n  @media "," {\n    margin-top: 3rem;\n    font-size: 1.8rem;\n  }\n"]);return kn=function(){return e},e}var Sn=function(){return Object(r.jsx)(Gn,{children:"\uc804\uccb4 \uacb0\uacfc"})},Gn=s.d.h2(kn(),(function(e){return e.theme.mobile}));function Pn(){var e=Object(u.a)(["\n  font-size: 1.8rem;\n  color: white;\n  background-color: ",";\n  width: 60%;\n  height: 5rem;\n  line-height: 5rem;\n  max-width: 20rem;\n  padding: 0 1rem;\n  margin-left: 2rem;\n  border-radius: 5px;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  white-space: nowrap;\n\n  @media "," {\n    width: 50%;\n    height: 3rem;\n    line-height: 3rem;\n    font-size: 1.5rem;\n    margin-left: 1rem;\n  }\n"]);return Pn=function(){return e},e}function An(){var e=Object(u.a)(["\n  width: 70%;\n  max-width: 8rem;\n  min-width: 4.5rem;\n  min-height: 4.5rem;\n  object-fit: cover;\n\n  @media "," {\n    width: 3rem;\n    height: 3rem;\n  }\n"]);return An=function(){return e},e}function zn(){var e=Object(u.a)(["\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  width: 50%;\n  padding: 1rem 3rem;\n\n  @media "," {\n    padding: 1rem;\n  }\n"]);return zn=function(){return e},e}function Tn(){var e=Object(u.a)(["\n  width: 70%;\n  max-width: 90rem;\n  margin: 5rem auto 0;\n  display: flex;\n  justify-content: space-between;\n  flex-wrap: wrap;\n\n  @media "," {\n    margin-top: 7rem;\n    width: 100%;\n  }\n"]);return Tn=function(){return e},e}var _n=function(e){var n=e.results,t=e.players,a=e.cases;return Object(r.jsx)(Ln,{children:t.map((function(e,t){return Object(r.jsxs)(Hn,{children:[Object(r.jsx)(Mn,{src:e.src,alt:"".concat(e.name," \ud50c\ub808\uc774\uc5b4")}),Object(r.jsx)(Fn,{color:e.color,children:a[n[t]]})]},t)}))})},Ln=s.d.ul(Tn(),(function(e){return e.theme.mobile})),Hn=s.d.li(zn(),(function(e){return e.theme.mobile})),Mn=s.d.img(An(),(function(e){return e.theme.mobile})),Fn=s.d.span(Pn(),(function(e){return e.color}),(function(e){return e.theme.mobile})),In=function(){var e=Object(a.useContext)(T).state,n=e.results,t=e.players,o=e.cases;return Object(r.jsx)(_n,{results:n,players:t,cases:o})},qn=function(){return Object(r.jsxs)(r.Fragment,{children:[Object(r.jsx)(Sn,{}),Object(r.jsx)(In,{}),Object(r.jsx)(rn,{})]})},Nn=function(){var e=Object(a.useContext)(T).state,n=e.page,t=e.gameState;return Object(r.jsx)(y,{page:n,gameState:t,children:"home"===n?Object(r.jsx)(Rn,{}):"game"===n?Object(r.jsx)(an,{}):Object(r.jsx)(qn,{})})},Un=o.a.memo(Nn);var Yn=function(){return Object(r.jsxs)(r.Fragment,{children:[Object(r.jsx)(m,{}),Object(r.jsx)(g,{}),Object(r.jsx)(Un,{})]})},Dn={mobile:"screen and (max-width: 812px)"};c.a.render(Object(r.jsx)(_,{children:Object(r.jsx)(s.a,{theme:Dn,children:Object(r.jsx)(Yn,{})})}),document.getElementById("root"))}},[[35,1,2]]]);
//# sourceMappingURL=main.0cd13010.chunk.js.map