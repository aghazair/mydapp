(function(e){function t(t){for(var a,s,u=t[0],o=t[1],l=t[2],d=0,p=[];d<u.length;d++)s=u[d],Object.prototype.hasOwnProperty.call(i,s)&&i[s]&&p.push(i[s][0]),i[s]=0;for(a in o)Object.prototype.hasOwnProperty.call(o,a)&&(e[a]=o[a]);c&&c(t);while(p.length)p.shift()();return r.push.apply(r,l||[]),n()}function n(){for(var e,t=0;t<r.length;t++){for(var n=r[t],a=!0,u=1;u<n.length;u++){var o=n[u];0!==i[o]&&(a=!1)}a&&(r.splice(t--,1),e=s(s.s=n[0]))}return e}var a={},i={app:0},r=[];function s(t){if(a[t])return a[t].exports;var n=a[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,s),n.l=!0,n.exports}s.m=e,s.c=a,s.d=function(e,t,n){s.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},s.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},s.t=function(e,t){if(1&t&&(e=s(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(s.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var a in e)s.d(n,a,function(t){return e[t]}.bind(null,a));return n},s.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return s.d(t,"a",t),t},s.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},s.p="/myDapp/";var u=window["webpackJsonp"]=window["webpackJsonp"]||[],o=u.push.bind(u);u.push=t,u=u.slice();for(var l=0;l<u.length;l++)t(u[l]);var c=o;r.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},"034f":function(e,t,n){"use strict";n("85ec")},1:function(e,t){},10:function(e,t){},11:function(e,t){},12:function(e,t){},13:function(e,t){},14:function(e,t){},15:function(e,t){},16:function(e,t){},17:function(e,t){},18:function(e,t){},19:function(e,t){},2:function(e,t){},20:function(e,t){},21:function(e,t){},22:function(e,t){},3:function(e,t){},4:function(e,t){},5:function(e,t){},"56d7":function(e,t,n){"use strict";n.r(t);n("e260"),n("e6cf"),n("cca6"),n("a79d");var a=n("2b0e"),i=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{attrs:{id:"app"}},[n("header",[n("div",{staticClass:"d-flex flex-column flex-md-row align-items-center pb-3 mb-4 border-bottom"},[n("span",{staticClass:"fs-4"},[e._v("Learn Token")]),n("nav",{staticClass:"d-inline-flex mt-2 mt-md-0 ms-md-auto"},[n("div",{staticClass:"c_topbar"},[n("button",{staticClass:"w-100 btn btn-lg btn-primary",attrs:{id:"btn",type:"button"},on:{click:e.connect}},[e._v("Connect")]),n("div",{attrs:{id:"address"}})])]),n("div")]),n("div",{staticClass:"alert alert-danger hide",attrs:{id:"warning",role:"alert"}}),n("div",{staticClass:"alert alert-info hide",attrs:{id:"info",role:"alert"}})]),n("div",{staticClass:"container py-3"},[e._m(0),n("main",[e._m(1),n("div",{staticClass:"row row-cols-1 row-cols-md-3 mb-3 text-center"},[n("div",{staticClass:"col"},[n("div",{staticClass:"card mb-4 rounded-3 shadow-sm"},[e._m(2),n("div",{staticClass:"card-body"},[e._m(3),e._m(4),n("button",{staticClass:"w-100 btn btn-lg btn-outline-primary",attrs:{type:"button"},on:{click:e.bignner}},[e._v("Unlock")])])])]),n("div",{staticClass:"col"},[n("div",{staticClass:"card mb-4 rounded-3 shadow-sm"},[e._m(5),n("div",{staticClass:"card-body"},[e._m(6),e._m(7),n("button",{staticClass:"w-100 btn btn-lg btn-primary",attrs:{type:"button"},on:{click:e.professional}},[e._v("Unlock")])])])]),n("div",{staticClass:"col"},[n("div",{staticClass:"card mb-4 rounded-3 shadow-sm border-primary"},[e._m(8),n("div",{staticClass:"card-body"},[e._m(9),e._m(10),n("button",{staticClass:"w-100 btn btn-lg btn-primary",attrs:{type:"button"},on:{click:e.expert}},[e._v("Unlock")])])])])])])])])},r=[function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("header",[n("div",{staticClass:"pricing-header p-3 pb-md-4 mx-auto text-center"},[n("h1",{staticClass:"display-4 fw-normal"},[e._v("My First DAPP")])])])},function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("section",{staticClass:"py-5 text-center container"},[n("div",{staticClass:"row py-lg-5"},[n("div",{staticClass:"col-lg-6 col-md-8 mx-auto"},[n("h1",{staticClass:"fw-light"},[e._v("Stake Details")]),n("p",{staticClass:"lead text-muted",attrs:{id:"detail"}})])])])},function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"card-header py-3"},[n("h4",{staticClass:"my-0 fw-normal"},[e._v("Beginner")])])},function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("h1",{staticClass:"card-title pricing-card-title"},[e._v("5000"),n("small",{staticClass:"text-muted fw-light"},[e._v("LRN")])])},function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("ul",{staticClass:"list-unstyled mt-3 mb-4"},[n("li",[e._v("Feature 1")]),n("li",[e._v("Feature 2")])])},function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"card-header py-3"},[n("h4",{staticClass:"my-0 fw-normal"},[e._v("Professional")])])},function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("h1",{staticClass:"card-title pricing-card-title"},[e._v("10000"),n("small",{staticClass:"text-muted fw-light"},[e._v("LRN")])])},function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("ul",{staticClass:"list-unstyled mt-3 mb-4"},[n("li",[e._v("Feature 1")]),n("li",[e._v("Feature 2")]),n("li",[e._v("Feature 3")])])},function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"card-header py-3 text-white bg-primary border-primary"},[n("h4",{staticClass:"my-0 fw-normal"},[e._v("Expert")])])},function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("h1",{staticClass:"card-title pricing-card-title"},[e._v("25000"),n("small",{staticClass:"text-muted fw-light"},[e._v("LRN")])])},function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("ul",{staticClass:"list-unstyled mt-3 mb-4"},[n("li",[e._v("Feature 1")]),n("li",[e._v("Feature 2")]),n("li",[e._v("Feature 3")]),n("li",[e._v("Feature 4")])])}],s=n("1da1"),u=(n("b0c0"),n("d3b7"),n("25f0"),n("96cf"),n("99e5")),o=n.n(u),l=[{anonymous:!1,inputs:[{indexed:!0,internalType:"address",name:"owner",type:"address"},{indexed:!0,internalType:"address",name:"spender",type:"address"},{indexed:!1,internalType:"uint256",name:"value",type:"uint256"}],name:"Approval",type:"event"},{anonymous:!1,inputs:[{indexed:!0,internalType:"address",name:"user",type:"address"},{indexed:!1,internalType:"uint256",name:"amount",type:"uint256"},{indexed:!1,internalType:"uint256",name:"index",type:"uint256"},{indexed:!1,internalType:"uint256",name:"timestamp",type:"uint256"},{indexed:!1,internalType:"string",name:"membershipType",type:"string"}],name:"Cancelled",type:"event"},{anonymous:!1,inputs:[{indexed:!0,internalType:"address",name:"previousOwner",type:"address"},{indexed:!0,internalType:"address",name:"newOwner",type:"address"}],name:"OwnershipTransferred",type:"event"},{anonymous:!1,inputs:[{indexed:!0,internalType:"address",name:"user",type:"address"},{indexed:!1,internalType:"uint256",name:"amount",type:"uint256"},{indexed:!1,internalType:"uint256",name:"index",type:"uint256"},{indexed:!1,internalType:"uint256",name:"timestamp",type:"uint256"},{indexed:!1,internalType:"string",name:"membershipType",type:"string"}],name:"Staked",type:"event"},{anonymous:!1,inputs:[{indexed:!0,internalType:"address",name:"from",type:"address"},{indexed:!0,internalType:"address",name:"to",type:"address"},{indexed:!1,internalType:"uint256",name:"value",type:"uint256"}],name:"Transfer",type:"event"},{inputs:[{internalType:"address",name:"spender",type:"address"},{internalType:"uint256",name:"tokens",type:"uint256"}],name:"approve",outputs:[{internalType:"bool",name:"success",type:"bool"}],stateMutability:"nonpayable",type:"function"},{inputs:[{internalType:"address",name:"account",type:"address"},{internalType:"uint256",name:"amount",type:"uint256"}],name:"burn",outputs:[],stateMutability:"nonpayable",type:"function"},{inputs:[{internalType:"address",name:"spender",type:"address"},{internalType:"uint256",name:"subtractedValue",type:"uint256"}],name:"decreaseAllowance",outputs:[{internalType:"bool",name:"",type:"bool"}],stateMutability:"nonpayable",type:"function"},{inputs:[{internalType:"address",name:"spender",type:"address"},{internalType:"uint256",name:"addedValue",type:"uint256"}],name:"increaseAllowance",outputs:[{internalType:"bool",name:"",type:"bool"}],stateMutability:"nonpayable",type:"function"},{inputs:[],name:"renounceOwnership",outputs:[],stateMutability:"nonpayable",type:"function"},{inputs:[{internalType:"uint256",name:"_amount",type:"uint256"}],name:"stake",outputs:[],stateMutability:"nonpayable",type:"function"},{inputs:[{internalType:"address",name:"to",type:"address"},{internalType:"uint256",name:"tokens",type:"uint256"}],name:"transfer",outputs:[{internalType:"bool",name:"success",type:"bool"}],stateMutability:"nonpayable",type:"function"},{inputs:[{internalType:"address",name:"from",type:"address"},{internalType:"address",name:"to",type:"address"},{internalType:"uint256",name:"tokens",type:"uint256"}],name:"transferFrom",outputs:[{internalType:"bool",name:"success",type:"bool"}],stateMutability:"nonpayable",type:"function"},{inputs:[{internalType:"address",name:"newOwner",type:"address"}],name:"transferOwnership",outputs:[],stateMutability:"nonpayable",type:"function"},{inputs:[{internalType:"uint256",name:"amount",type:"uint256"}],name:"withdrawStake",outputs:[],stateMutability:"nonpayable",type:"function"},{inputs:[],stateMutability:"nonpayable",type:"constructor"},{inputs:[{internalType:"address",name:"tokenOwner",type:"address"},{internalType:"address",name:"spender",type:"address"}],name:"allowance",outputs:[{internalType:"uint256",name:"remaining",type:"uint256"}],stateMutability:"view",type:"function"},{inputs:[{internalType:"address",name:"tokenOwner",type:"address"}],name:"balanceOf",outputs:[{internalType:"uint256",name:"balance",type:"uint256"}],stateMutability:"view",type:"function"},{inputs:[{internalType:"uint256",name:"amount",type:"uint256"}],name:"convertAmount",outputs:[{internalType:"uint256",name:"",type:"uint256"}],stateMutability:"view",type:"function"},{inputs:[],name:"decimals",outputs:[{internalType:"uint8",name:"",type:"uint8"}],stateMutability:"view",type:"function"},{inputs:[],name:"getSender",outputs:[{internalType:"address",name:"",type:"address"}],stateMutability:"view",type:"function"},{inputs:[],name:"getSenderBalance",outputs:[{internalType:"uint256",name:"",type:"uint256"}],stateMutability:"view",type:"function"},{inputs:[{internalType:"address",name:"_staker",type:"address"}],name:"hasStake",outputs:[{internalType:"uint256",name:"totalStake",type:"uint256"}],stateMutability:"view",type:"function"},{inputs:[],name:"name",outputs:[{internalType:"string",name:"",type:"string"}],stateMutability:"view",type:"function"},{inputs:[],name:"owner",outputs:[{internalType:"address",name:"",type:"address"}],stateMutability:"view",type:"function"},{inputs:[],name:"symbol",outputs:[{internalType:"string",name:"",type:"string"}],stateMutability:"view",type:"function"},{inputs:[],name:"totalSupply",outputs:[{internalType:"uint256",name:"",type:"uint256"}],stateMutability:"view",type:"function"}],c=l,d="0x0E600bC9850dc8C5b915F42988f6eBCBfd475fB3",p=new o.a(window.web3.currentProvider),m=new p.eth.Contract(c,d);window.ethereum.on("accountsChanged",(function(e){w()}));var y={name:"App",components:{},data:function(){return{msg:"My First DAPP"}},methods:{bignner:function(){T(5e3,"Bigenner")},professional:function(){T(1e4,"Professional")},expert:function(){T(25e3,"Expert")},withdraw:function(){alert("withdraw")},connect:function(){try{if("Connected"==document.getElementById("btn").innerText)return void alert("Already Connected");w()}catch(e){4001===e.code?console.log("Metamask Connection Cancelled"):(console.log(e),alert("Install Metamask to Connect"))}}}};function f(e){return b.apply(this,arguments)}function b(){return b=Object(s["a"])(regeneratorRuntime.mark((function e(t){var n,a;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,window.ethereum.request({method:"eth_requestAccounts"});case 2:return n=e.sent,a=n[0],e.next=6,m.methods.withdrawStake(t).send({from:a});case 6:h(a);case 7:case"end":return e.stop()}}),e)}))),b.apply(this,arguments)}function h(e){return v.apply(this,arguments)}function v(){return v=Object(s["a"])(regeneratorRuntime.mark((function e(t){var n,a,i,r,s;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,window.ethereum.request({method:"eth_requestAccounts"});case 2:return n=e.sent,n[0]!=t&&console.log("ERROR: connect metamask again!"),e.next=6,m.methods.hasStake(t).call();case 6:return a=e.sent,e.next=9,m.methods.name().call();case 9:return i=e.sent,e.next=12,m.methods.balanceOf(t).call();case 12:r=e.sent,s="Not a Member",a>=5e3&&a<1e4?s="Beginner":a>=1e4&&a<25e3?s="Professional":a>=25e3&&(s="Expert"),document.getElementById("detail").innerHTML="Token Name : "+i+"<br/> Current Stakes: "+a+"<br /> Current Membership Type: "+s,document.getElementById("detail").innerHTML+="<br/> Account Balnce: "+p.utils.fromWei(r,"ether"),document.getElementById("detail").innerHTML+='<button id="withdraw" type="button" class="w-100 btn btn-lg btn-primary" >Withdraw Stakes</button>',document.getElementById("withdraw").addEventListener("click",(function(){f(a)}),!1);case 19:case"end":return e.stop()}}),e)}))),v.apply(this,arguments)}function w(){return g.apply(this,arguments)}function g(){return g=Object(s["a"])(regeneratorRuntime.mark((function e(){var t,n;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,window.ethereum.request({method:"eth_requestAccounts"});case 2:t=e.sent,n=t[0],document.getElementById("btn").innerText="Connected",document.getElementById("address").innerHTML="Account Connected : "+n,h(n);case 7:case"end":return e.stop()}}),e)}))),g.apply(this,arguments)}function T(e,t){return x.apply(this,arguments)}function x(){return x=Object(s["a"])(regeneratorRuntime.mark((function e(t,n){var a,i,r,s,u,o,l;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:if("Connect"!=document.getElementById("btn").innerText){e.next=5;break}document.getElementById("warning").innerHTML="First connect with MetaMask using <b>Connect</b> Button!",document.getElementById("warning").style.display="block",e.next=50;break;case 5:return e.next=7,window.ethereum.request({method:"eth_requestAccounts"});case 7:return a=e.sent,i=a[0],e.next=11,m.methods.balanceOf(i).call();case 11:if(r=e.sent,s=p.utils.fromWei(r,"ether"),!(s<t)){e.next=19;break}u=t-s,document.getElementById("warning").innerHTML="Insufficient Balance for "+n+" Membership, buy "+u+"  LRN Tokens!",document.getElementById("warning").style.display="block",e.next=49;break;case 19:return e.next=21,m.methods.hasStake(i).call();case 21:if(o=e.sent,!(o>0)){e.next=27;break}document.getElementById("info").innerHTML="Already staked "+o+" Tokens!",document.getElementById("info").style.display="block",e.next=49;break;case 27:return console.log(m),e.next=30,m.methods.getSender().call();case 30:return l=e.sent,console.log("message sender :"+l),e.next=34,m.methods.getSenderBalance().call();case 34:return e.sent,console.log("message sender balance"),console.log(t),e.prev=37,e.next=40,m.methods.stake(t).send({from:i});case 40:e.sent,document.getElementById("info").innerHTML="Membership Unlocked Successfully!",document.getElementById("info").style.display="block",e.next=48;break;case 45:e.prev=45,e.t0=e["catch"](37),console.log(e.t0);case 48:console.log(p.utils.toWei(t.toString(),"ether"));case 49:h(i);case 50:case"end":return e.stop()}}),e,null,[[37,45]])}))),x.apply(this,arguments)}var _=y,C=(n("034f"),n("2877")),k=Object(C["a"])(_,i,r,!1,null,null,null),M=k.exports;a["a"].config.productionTip=!1,new a["a"]({render:function(e){return e(M)}}).$mount("#app")},6:function(e,t){},7:function(e,t){},8:function(e,t){},"85ec":function(e,t,n){},9:function(e,t){}});
//# sourceMappingURL=app.bcd99100.js.map