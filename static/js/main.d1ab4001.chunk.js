(this.webpackJsonpnew=this.webpackJsonpnew||[]).push([[0],{408:function(e){e.exports=JSON.parse('[{"inputs":[],"stateMutability":"nonpayable","type":"constructor"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"previousOwner","type":"address"},{"indexed":true,"internalType":"address","name":"newOwner","type":"address"}],"name":"OwnershipTransferred","type":"event"},{"inputs":[{"internalType":"address","name":"adr","type":"address"}],"name":"beanRewards","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"ref","type":"address"}],"name":"buyEggs","outputs":[],"stateMutability":"payable","type":"function"},{"inputs":[{"internalType":"uint256","name":"eth","type":"uint256"},{"internalType":"uint256","name":"contractBalance","type":"uint256"}],"name":"calculateEggBuy","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"eth","type":"uint256"}],"name":"calculateEggBuySimple","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"eggs","type":"uint256"}],"name":"calculateEggSell","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"getBalance","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"adr","type":"address"}],"name":"getEggsSinceLastHatch","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"adr","type":"address"}],"name":"getMyEggs","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"adr","type":"address"}],"name":"getMyMiners","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"ref","type":"address"}],"name":"hatchEggs","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"owner","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"renounceOwnership","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"seedMarket","outputs":[],"stateMutability":"payable","type":"function"},{"inputs":[],"name":"sellEggs","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"newOwner","type":"address"}],"name":"transferOwnership","outputs":[],"stateMutability":"nonpayable","type":"function"}]')},409:function(e){e.exports=JSON.parse('[{"q":"What happens when I buy Rings?","a":"When you buy Rings, your BNB gets locked into the SonicBNB smart contract and rewards you with 8% daily return every day."},{"q":"Can I take my initial BNB back?","a":"Over Time! Rings are not bought, Rings are collected and therefore they can\'t be sold. Once Rings are bought they collect for you indefinitely, providing you with an unlimited amount of BNB at a starting rate of 8% daily."},{"q":"How much are my fees?","a":"There is a 4% dev fee and a 4% marketing fee to boost the SonicBNB ecosystem"},{"q":"When is the best time to Buy Rings?","a":"Always!, you will begin with a return rate of 8% daily."},{"q":"How often should I Collect Rings(compound)?","a":"WE recommend that you compound at least once or twice per day but you are free to do so as often as you wish."},{"q":"How is SonicBNB sustainable?","a":"SonicBNB is sustained by continued community support, just as every other crypto coin, token or project. The difference is that since there is no token, there is no price to dump. As long as BNB is in the contract, there will be rewards!"},{"q":"How to use SonicBNB on my phone?","a":"You can either use an app with a dapp browser and choose the Metamask/Injected option or simply use any browser that you want and choose WalletConnect to connect to your wallet\'s app on your phone."},{"q":"Is it better to collect Rings or sell Rings?","a":"By design, collecting will be more profitable than selling in the long-term."},{"q":"How do referrals work?","a":"Once your BSC wallet is connected to the SonicBNB website, you will notice your referral address appear at the bottom of the page. When a new user collects rings after clicking your personal referral link, the contract will send a BNB value equal to 12% instantly to your Rings balance. Be smart, use it to collect Rings and build yourself a stream of income."},{"q":"When did SonicBNB launch?","a":"It launched 4//2022."}]')},428:function(e,t,n){},441:function(e,t){},444:function(e,t){},446:function(e,t){},450:function(e,t){},475:function(e,t){},477:function(e,t){},486:function(e,t){},488:function(e,t){},498:function(e,t){},500:function(e,t){},615:function(e,t){},617:function(e,t){},624:function(e,t){},625:function(e,t){},643:function(e,t){},651:function(e,t){},658:function(e,t){},706:function(e,t){},731:function(e,t){},764:function(e,t){},837:function(e,t){},855:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),i=n(80),c=n.n(i),o=n(905),s=(n(428),n(906)),u=n(233),d=n(16),l=n(893),b=n(909),p=n(3),h=n.n(p),j=n(7),f=n(20),m=n(394),g=n(63),y=n.n(g),A=n(396),x=n.n(A),O=n(413),v=n(901),w=n(900),B=n(1),C=Object(a.createContext)({address:null,connect:function(){return null},loading:!1,disconnect:function(){return null},chainId:null,setSnackbar:function(){return null}}),k={walletconnect:{package:O.a,options:{rpc:{56:"https://bsc-dataseed.binance.org/",97:"https://data-seed-prebsc-1-s1.binance.org:8545/"},network:"binance"}}},S=Object(a.forwardRef)((function(e,t){return Object(B.jsx)(w.a,Object(m.a)({elevation:6,ref:t,variant:"filled"},e))})),E=new x.a({cacheProvider:!0,providerOptions:k}),W=function(e){var t=e.children,n=Object(a.useState)(),r=Object(f.a)(n,2),i=r[0],c=r[1],o=Object(a.useState)(!1),s=Object(f.a)(o,2),u=s[0],d=s[1],l=Object(a.useState)(null),b=Object(f.a)(l,2),p=b[0],m=b[1],g=Object(a.useState)(null),A=Object(f.a)(g,2),x=A[0],O=A[1],w=function(e){e.on("disconnect",(function(e){console.log(e),O(null),c(null)})),e.on("accountsChanged",(function(e){c(e[0]),m({type:"info",message:"Account Changed"})})),e.on("chainChanged",(function(e){O(e)}))},k=function(){var e=Object(j.a)(h.a.mark((function e(){var t,n,a,r;return h.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!i){e.next=2;break}return e.abrupt("return");case 2:if(d(!0),e.prev=3,(t=new y.a(y.a.givenProvider)).currentProvider){e.next=8;break}return m({type:"error",message:'"No provider was found"'}),e.abrupt("return");case 8:return e.next=10,E.connect();case 10:return n=e.sent,t=new y.a(n),w(n),e.next=15,t.eth.getAccounts();case 15:return a=e.sent,e.next=18,t.eth.getChainId();case 18:r=e.sent,c(a[0]),O(r),e.next=27;break;case 23:e.prev=23,e.t0=e.catch(3),console.error(e.t0),m({type:"error",message:"Failed to connect"});case 27:d(!1);case 28:case"end":return e.stop()}}),e,null,[[3,23]])})));return function(){return e.apply(this,arguments)}}(),W=function(e,t){"clickaway"!==t&&m(null)};return Object(a.useEffect)((function(){E.cachedProvider&&k()}),[]),Object(B.jsxs)(C.Provider,{value:{address:i,loading:u,connect:k,disconnect:function(){E.clearCachedProvider(),c(null),O(null)},chainId:x,setSnackbar:m},children:[t,p&&Object(B.jsx)(v.a,{open:!!p,autoHideDuration:4e3,onClose:W,children:Object(B.jsx)(S,{onClose:W,severity:null===p||void 0===p?void 0:p.type,sx:{width:"100%"},children:null===p||void 0===p?void 0:p.message})})]})},T=function(){return Object(a.useContext)(C)},M=Object(l.a)(b.a)((function(e){var t=e.theme;return Object(d.a)({position:"fixed",right:48,top:48},t.breakpoints.down("md"),{display:"none"})})),D=Object(l.a)(b.a)((function(e){var t=e.theme;return Object(d.a)({display:"none",marginTop:-24,marginBottom:48,width:"95%",marginLeft:"auto",marginRight:"auto"},t.breakpoints.down("md"),{display:"block"})}));function U(e){var t=e.responsive,n=void 0===t||t,a=T(),r=a.address,i=a.loading,c=a.connect,o=a.disconnect;return n?Object(B.jsx)(M,{color:"secondary",variant:"contained",disabled:i,onClick:function(){return r?o():c()},children:r?"Disconnect":"Connect"}):Object(B.jsx)(D,{color:"secondary",variant:"contained",disabled:i,onClick:function(){return r?o():c()},children:r?"Disconnect":"Connect"})}var R=n(910),Q=n.p+"static/media/FullLogo.e313bec7.png",V=Object(l.a)("div")((function(e){var t=e.theme;return Object(d.a)({textAlign:"center",paddingBottom:24},t.breakpoints.down("md"),{h5:{fontSize:20,margin:0}})}));function Z(){return Object(B.jsxs)(V,{children:[Object(B.jsx)("img",{src:Q,alt:"",width:"100%",style:{marginTop:-48}}),Object(B.jsx)(U,{responsive:!1}),Object(B.jsx)(R.a,{variant:"h6",marginTop:2,color:"#f4b52d",children:"Sonic BNB - Collect rings! Earn BNB! Repeat!"})]})}var Y=n(913),F=n(911),I=n(903),L=n(912),N=n(914),H=n(25),G=Object(l.a)("input")({fontSize:24,fontWeight:500,padding:"12px 90px 12px 16px",textAlign:"right",borderRadius:0,border:"1px solid #555",background:"244 181 45",width:"100%",outline:"none","&::-webkit-outer-spin-button, &::-webkit-inner-spin-button":{WebkitAppearance:"none",margin:0,MozAppearance:"textfield"}});function q(e){var t=e.value,n=e.max,a=e.onChange,r=void 0===a?function(){}:a;return Object(B.jsxs)(s.a,{position:"relative",children:[Object(B.jsx)(G,{type:"number",min:0,max:n,value:t,onChange:function(e){return r(e.target.value)}}),Object(B.jsx)(R.a,{fontSize:24,position:"absolute",top:9,right:18,fontWeight:500,color:"black",children:"BNB"})]})}var P=n(408),z=56,J="0xEDITs",K="https://www.bscscan.com/address/edit",X=Object(a.createContext)({contract:null,web:null,wrongNetwork:!1,getBnbBalance:function(){return null},fromWei:function(){return null},toWei:function(){return null}}),_=function(e){var t=e.children,n=Object(a.useState)(),r=Object(f.a)(n,2),i=r[0],c=r[1],o=Object(a.useState)(),s=Object(f.a)(o,2),u=s[0],d=s[1],l=T(),b=l.chainId,p=l.setSnackbar,h=Object(a.useState)(!1),j=Object(f.a)(h,2),m=j[0],g=j[1];Object(a.useEffect)((function(){if(b){if(parseInt(b)!==z)return p({type:"error",message:"Wrong network"}),void g(!0);g(!1);var e=new y.a;e.setProvider(y.a.givenProvider),d(e);var t=new e.eth.Contract(P,J);c(t)}}),[b]);return Object(B.jsx)(X.Provider,{value:{web3:u,contract:i,wrongNetwork:m,getBnbBalance:function(e){return u.eth.getBalance(e)},fromWei:function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"ether";return parseFloat(y.a.utils.fromWei(e,t)).toFixed(3)},toWei:function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"ether";return y.a.utils.toWei(e,t)}},children:t})},$=Object(l.a)(F.a)({background:"rgb(244 181 45)",marginBottom:24}),ee=Object(l.a)(I.a)((function(e){var t=e.theme;return Object(d.a)({},t.breakpoints.down("sm"),{flexDirection:"column","> div":{marginLeft:0,marginRight:0}})}));function te(){var e=Object(a.useContext)(X),t=e.contract,n=e.wrongNetwork,r=e.getBnbBalance,i=e.fromWei,c=e.toWei,o=e.web3,u=T(),d=u.address,l=u.chainId,p=Object(a.useState)(0),m=Object(f.a)(p,2),g=m[0],A=m[1],x=Object(a.useState)({bnb:0,beans:0,rewards:0}),O=Object(f.a)(x,2),v=O[0],w=O[1],C=Object(a.useState)(0),k=Object(f.a)(C,2),S=k[0],E=k[1],W=Object(a.useState)(0),M=Object(f.a)(W,2),D=(M[0],M[1],Object(a.useState)(!1)),U=Object(f.a)(D,2),Q=U[0],V=U[1],Z=new URLSearchParams(Object(H.c)().search),F=function(){o&&!n?r(J).then((function(e){A(i(e))})):A(0)},G=function(){var e=Object(j.a)(h.a.mark((function e(){var a,c,s,u,l;return h.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(o&&!n&&d){e.next=3;break}return w({bnb:0,beans:0,rewards:0}),e.abrupt("return");case 3:return e.prev=3,e.next=6,Promise.all([r(d),t.methods.getMyMiners(d).call().catch((function(e){return console.error("myminers",e),0})),t.methods.beanRewards(d).call().catch((function(e){return console.error("beanrewards",e),0}))]);case 6:a=e.sent,c=Object(f.a)(a,3),s=c[0],u=c[1],l=c[2],w({bnb:i("".concat(s)),beans:u,rewards:i("".concat(l))}),e.next=18;break;case 14:e.prev=14,e.t0=e.catch(3),console.error(e.t0),w({bnb:0,beans:0,rewards:0});case 18:case"end":return e.stop()}}),e,null,[[3,14]])})));return function(){return e.apply(this,arguments)}}();Object(a.useEffect)((function(){F()}),[o,l]),Object(a.useEffect)((function(){G()}),[d,o,l]);var P=function(){return y.a.utils.isAddress(Z.get("ref"))?Z.get("ref"):"0x0000000000000000000000000000000000000000"},z=function(){var e=Object(j.a)(h.a.mark((function e(){var n;return h.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return V(!0),n=P(),e.prev=2,e.next=5,t.methods.buyEggs(n).send({from:d,value:c("".concat(S))});case 5:e.next=10;break;case 7:e.prev=7,e.t0=e.catch(2),console.error(e.t0);case 10:G(),F(),V(!1);case 13:case"end":return e.stop()}}),e,null,[[2,7]])})));return function(){return e.apply(this,arguments)}}(),K=function(){var e=Object(j.a)(h.a.mark((function e(){var n;return h.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return V(!0),n=P(),e.prev=2,e.next=5,t.methods.hatchEggs(n).send({from:d});case 5:e.next=10;break;case 7:e.prev=7,e.t0=e.catch(2),console.error(e.t0);case 10:V(!1);case 11:case"end":return e.stop()}}),e,null,[[2,7]])})));return function(){return e.apply(this,arguments)}}(),_=function(){var e=Object(j.a)(h.a.mark((function e(){return h.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return V(!0),e.prev=1,e.next=4,t.methods.sellEggs().send({from:d});case 4:e.next=9;break;case 6:e.prev=6,e.t0=e.catch(1),console.error(e.t0);case 9:G(),F(),V(!1);case 12:case"end":return e.stop()}}),e,null,[[1,6]])})));return function(){return e.apply(this,arguments)}}();return Object(B.jsxs)($,{children:[Q&&Object(B.jsx)(L.a,{color:"secondary"}),Object(B.jsxs)(Y.a,{children:[Object(B.jsxs)(I.a,{container:!0,justifyContent:"space-between",alignItems:"center",mt:3,children:[Object(B.jsx)(R.a,{variant:"body1",children:"Contract"}),Object(B.jsxs)(R.a,{variant:"h5",children:[g," BNB"]})]}),Object(B.jsxs)(I.a,{container:!0,justifyContent:"space-between",alignItems:"center",mt:3,children:[Object(B.jsx)(R.a,{variant:"body1",children:"Wallet"}),Object(B.jsxs)(R.a,{variant:"h5",children:[v.bnb," BNB"]})]}),Object(B.jsxs)(I.a,{container:!0,justifyContent:"space-between",alignItems:"center",mt:3,children:[Object(B.jsx)(R.a,{variant:"body1",children:"Your RINGS"}),Object(B.jsxs)(R.a,{variant:"h5",children:[v.beans," RINGS"]})]}),Object(B.jsxs)(s.a,{paddingTop:4,paddingBottom:3,children:[Object(B.jsx)(s.a,{children:Object(B.jsx)(q,{max:+v.bnb,value:S,onChange:function(e){return function(e){E(e)}(e)}})}),Object(B.jsx)(s.a,{marginTop:3,marginBottom:3,children:Object(B.jsx)(b.a,{variant:"contained",fullWidth:!0,disabled:n||!d||0===+S||Q,onClick:z,children:"Buy Rings"})}),Object(B.jsx)(N.a,{}),Object(B.jsxs)(I.a,{container:!0,justifyContent:"space-between",alignItems:"center",mt:3,children:[Object(B.jsx)(R.a,{variant:"body1",fontWeight:"bolder",children:"Your Rewards"}),Object(B.jsxs)(R.a,{variant:"h5",fontWeight:"bolder",children:[v.rewards," BNB"]})]}),Object(B.jsxs)(ee,{container:!0,children:[Object(B.jsx)(I.a,{item:!0,flexGrow:1,marginRight:1,marginTop:3,children:Object(B.jsx)(b.a,{variant:"contained",color:"secondary",fullWidth:!0,disabled:n||!d||Q,onClick:K,children:"COLLECT RINGS"})}),Object(B.jsx)(I.a,{item:!0,flexGrow:1,marginLeft:1,marginTop:3,children:Object(B.jsx)(b.a,{variant:"contained",color:"secondary",fullWidth:!0,disabled:n||!d||Q,onClick:_,children:"SELL RINGS"})})]})]})]})]})}var ne=Object(l.a)(F.a)({background:"rgb(244 181 45)",marginBottom:24}),ae=[{label:"Daily Return:",value:8},{label:"APR:",value:"2,920"},{label:"Dev Fee:",value:4},{label:"Marketing Fee:",value:4}];function re(){return Object(B.jsx)(ne,{children:Object(B.jsxs)(Y.a,{children:[Object(B.jsx)(R.a,{variant:"h5",borderBottom:"6px solid",paddingBottom:1,children:"SONICBNB DETAILS:"}),Object(B.jsx)(s.a,{paddingTop:2,children:ae.map((function(e){return Object(B.jsxs)(I.a,{container:!0,justifyContent:"space-between",children:[Object(B.jsx)(R.a,{variant:"body1",gutterBottom:!0,children:e.label}),Object(B.jsxs)(R.a,{gutterBottom:!0,children:[e.value,"%"]})]},e.label)}))})]})})}var ie=Object(l.a)(F.a)({background:"rgb(244 181 45)"}),ce=Object(l.a)("input")((function(e){return{fontSize:10,fontWeight:300,padding:"10px 12px",borderRadius:0,border:"1px solid #555",background:"244 181 45",width:"100%",outline:"none",color:e.theme.palette.primary.main}}));function oe(e){var t=e.address,n="".concat(window.origin,"?ref=").concat(t);return Object(B.jsx)(ie,{children:Object(B.jsxs)(Y.a,{style:{paddingLeft:8,paddingRight:8},children:[Object(B.jsx)(R.a,{gutterBottom:!0,variant:"h5",textAlign:"center",children:"Referral Link"}),Object(B.jsx)(ce,{value:t?n:"",readOnly:!0}),Object(B.jsx)(R.a,{textAlign:"center",variant:"body2",marginTop:2,paddingX:3,children:"Earn 12% of the BNB used to Collect Rings from anyone who uses your referral link"})]})})}function se(){return Object(B.jsxs)(I.a,{container:!0,justifyContent:"center",spacing:2,marginTop:4,children:[Object(B.jsx)(I.a,{item:!0,children:Object(B.jsx)("a",{href:K,target:"__blank",children:Object(B.jsx)("img",{src:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyCAYAAAAeP4ixAAAABmJLR0QA/wD/AP+gvaeTAAADWElEQVRo3u2av3HbMBSHPycunDsXcsWU4gSmJzA9ge0FaHkCyRPEnkDSBOJxActVSjFVylBdOsglOzYq0qUg7FAQSIkU+Cd3/t2pEIgD34cH4AEPhA91S0d1NWzZngP0lOIoFkHSaRBp+A1wCbgFVVdABLwAYSyCVesglu31gQFwB/QrNhMBU2B+iLcqgUiAbxLClBIJNKkCVBrEsr1HYMj2+DelFXAfiyCsBUTOgRng1ASgahKL4MEoiGV7LvBMfV7IUwRc7TPUPu0BMQAWLUBA6v2FZXs7310IkhlObcoh7chCfS6A6AM/gZOWQQC+np6d99fJ8iWvQpFHZrQznPI0sGzvphSInBduA8b5gB2L4OjtB9ySxhSdZnnzZWtoyYrfaWBIxSK4WCfLDaPXyfL36dn5F/QdeQL8WSfLUH2g88iIbg0pVUOdV3Qgd21bukM90s7OB5GTqW/wpREQyl9isN2hWnCs/L82CLAVkS3bGwFjA+33LNtzs/sxdWjdGAKZ6rYVsQgmhtrf0jtIzomuqlZ1GZxRpAWhmbhhSk+qx7Nz5HzPRhJgDrzK/5ekC0S/IQg/FsGjWpgF2deQq1gEkVpo2d6C+r3qxyK41z3YuY1XFOogpH40CWHZ3kCeViuBtCUVwkFZxv8HkIkC0UOzMz8u12ajSoCHWAS+Uv6MJm+QBVm1bXlGIelw2rDJsr0ZmwtKqAN5pSPSpYIkxEApjnQgIWnSrVOSc2KsgVhlg+L7ZC+bEDOgaE+IBfqM5oa96qo1bxBkugPCAX6RnxDciFsqSG6WwqAeSM/pfgHESEL0c6okKJ2+sfzGIvAt2xtT41G3aCsvU1DqyqTTVuZeFxCnHKaECkt5xgu7IACe1AJdQJxQLdseSoBS9xwyrzxm/+S4r7sc0iax5URT870J+khbSRLgG+V2zAnp/NrqqMJsvHwZpGv2CgOSCY5hSYA33cYimOse1HYZqhjfI40FQ6ofwArvS+q81e2RJjOuOTypkXugqgVEzi1XGu8aajaMRXC1q9Kht7ou6WrzdiXdM9kx7OGJSiByuIzYfZduQk+6JEOeSp0QM8ueUyNABFyUgYDu3bNXjlOd+fLh0EBr+lsUl38JO0dTLZGGR8ASg9+ifKhr+gvf9S3/pZ723AAAABl0RVh0U29mdHdhcmUAQWRvYmUgSW1hZ2VSZWFkeXHJZTwAAAASdEVYdEVYSUY6T3JpZW50YXRpb24AMYRY7O8AAAAASUVORK5CYII=",alt:"",width:48,height:48})})}),Object(B.jsx)(I.a,{item:!0,children:Object(B.jsx)("a",{href:"https://t.me/SonicBNB",target:"__blank",children:Object(B.jsx)("img",{src:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyCAYAAAAeP4ixAAAABmJLR0QA/wD/AP+gvaeTAAADW0lEQVRo3u2aP3KbQBSHvyQuPRNUqTScQOQG+ARWLkCsE0Tp0sU6QewTWOYCQSewbmB0AnBJtylUpEuxawVhFnYRCM3EvxmPR+Lt4316+/cBvOm09K5rh2Mv9AEfcDUmGZDkaZScFMjYCx1gClyp/6YSwBpYAXGeRmIQkLEXusAPFbxz4O8hgBhY5GmUHQVEZWCuIPrQAri1zZAViOr/v9D3/66UAbM8jdamDd5bQFwDT0eAQN3jUd3TSEYZGXvhPWDstGMt8zSaNRl9OHEIAP98NHG3YrNqDTL2wjnwfUCIIszzVmwSnYG2a429MAAehyYo6ZNuIa0EUVPssQa2jTIFI8oXdLPW/AQhUDHNqy68yohasdOhI26QV94BVGWkrxW7SWsL21cx7oEUNoDHUgZ8A0Z5Gl0Ct4btpirWnc7KBhy+ATRRDNxVbEF+G7Z3VKxLHchVj8EL4A65Umcam48W/q7qQKY9AKyBhzyNlga2voXfoPhhB6J2tl1J8K/7JMULqm87mqy4Fvdwxl7ov/gvDvYuQDJghpweZxUQN8ip/VrT3gZkz/7sACdFLZHdZ111UWX7Xv1YCRWzk9oS2cpHZv7VGLFRBjzQcJpTWXiZ9xPgUmPvHBBLK5AY+evHdUalLDRBQLuufdEGJAE+mxQHSlkwgQCYtADZyQbEBMBFZiGwhIB2Xeu5DcgUuTVIkGMjLmZHHcJ+lAIyOqYqBYZ2lSqCZIZtfPX3U0EJ5IznluyMIVQm22gXcxEkaeHI13wfW2QC2k/9u5h3C2LHtVi3vDttUNDmJsWYy+eRuCMQH1mX8g3tLwzttLGWQVbmfoxh5ga2bgv/e7FWZUR0COMgJ4XHhgEdWPoV1GVEzfWxqTcLBcBTVXYsx9KLluV1qerMvugBBPTZCSz9COQBbU+6utYN/RchlsiV+St2q/oiT6Ob8pe6lf0W+EK/ta3rFm0yNAWKupKpj6w2npK0JVPt8xHVwGZ17luzukW7thq/FZvkfDRx6eYYfIiWeRrVTkKNz0e2YrMaGMZo82n8DFE9Brs/MsTMsIxk/TA0UDBuzwAZ8jSamDZo7FpFbcUmOx9NHoA/HHgQqtECmYnMptH/+8JABZBDu1c4UMEP+wpHDZjPAC/VvOnU9BdAxzlbow3rDQAAABl0RVh0U29mdHdhcmUAQWRvYmUgSW1hZ2VSZWFkeXHJZTwAAAASdEVYdEVYSUY6T3JpZW50YXRpb24AMYRY7O8AAAAASUVORK5CYII=",alt:"",width:48,height:48})})}),Object(B.jsx)(I.a,{item:!0,children:Object(B.jsx)("a",{href:"https://twitter.com/SonicBNB",target:"__blank",children:Object(B.jsx)("img",{src:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyCAYAAAAeP4ixAAAABmJLR0QA/wD/AP+gvaeTAAAD0UlEQVRo3u2aMVbjOBjHf7BTbMF761Ru4247zAnGdNMRLuBJTsBwgiEnAE4A+AKEE+DpttvkBPJ0484UKbbbQjKjcaRYsmNIMf/3eM/Ykvz9pE9fPkmG39ovHey6wTBKAyBWf4GhSA4UpciKvQMJo3QCfAQmwNixWqWgnoBFKbLqXUBUz0+BCw/jt0HdA7ddR6oTSBilU+Aas+v01Ry48R0hL5AwSsfAHZAMAKCrAGalyHLXCn94QCTAM/D3wBAgR3p6NDp+WVerf3YGolzpEfjzDSB0fToaHY/X1eqpN4iCuHtjAF2xC8xWEOVOj+8IocMcrKtVbitgnewqvAqGiUxddWoLAIdbKj3uGQTAo+pgNxA1L5KBjCmAGRCVIjsAToEbQ7nKcC9A/n5tyOhaYZQK7L/WeQ/Iy1JkJqMJozRGhvcCeFBGf7W0EzUzgENDg9MtEEUpslNkOuGrmQ0CoBTZshTZqBTZieqsiy1tbQAeuhTStFAvnWF2B5vmpcic4FX28FV1VmEpNlXlzCBqeMfY9aL14CVwjtmXm3KCUO0WpcjOge8ttkysIMDnlvecNV66AKIWQ73XHmGUXmOZ1DZbmyBJS+VYjZoOUylXi5CZq5fRFn1xKBProfhD86FDA3fASfOm6vUr4Er5b+zYXh/FyMDwM/xq2e02VciweK9GYedytKPWvBTZFfzqWoFDxQXShR6GgPCwo9Zf9YXuWrFDxUSNRDEgiIsdG2UPPSoBjNXQD6mzLpV8QUAmbnGHeq3SgsSbgATA80AjM+laUQcpOsBY0+qOuvAsX9UX+mT3AQFDBtpHYZRe4b8/tqov9BFZejays3W8mhu+owFa57+CqA2xwqORZIeu1XU1mm+ANB84agKIMEqvu07+MErv6BapfklGmyCt+0cGBcgk78J3dBTEtEsHoNZGtTaWui3LXJNyZM6TewAEyDk26QgBcFKKbFn/88FQ4AH7KnGJDHnfkPMp77DWSBSET2c1lesQNpAbZAQJDM/GwC0y+/UFmKh2kx4AtebNG7ZdlC+0r9CWyDmVm9xKpTEx8gAoof8ZSq1cbYC0gyhD/mX4hZGvKuTcKJoPtuVaM9w2Ft5SlzaXtm5ir6vVj6PRcUm/yLJL3Zcim9sebt2NX1er5dHo+PsewLQurVvPR/YAxml/wOnE6h1hnDc5fA9DY2SCNx4YoEJO7HvXCs6HofAaAB6A/xju2GEBnPukPNDvg4ExMpWZ7hDg1hegN4gGFCiYM/xHaYnM7RZ9V5s7/ahG+6CmBvpoMPwFmTEv+35/8lv7rP8Bk+NXaD4vbEEAAAAZdEVYdFNvZnR3YXJlAEFkb2JlIEltYWdlUmVhZHlxyWU8AAAAEnRFWHRFWElGOk9yaWVudGF0aW9uADGEWOzvAAAAAElFTkSuQmCC",alt:"",width:48,height:48})})})]})}var ue=n(908),de=n(898),le=n(409),be=n(410),pe=n.n(be),he=n(411),je=n.n(he),fe={position:"absolute",top:"50%",left:"50%",transform:"translate(-50%, -50%)",maxWidth:600,maxHeight:800,bgcolor:"background.paper",boxShadow:24,px:4,py:6,borderRadius:8,overflow:"auto"};function me(){var e=a.useState(!1),t=Object(f.a)(e,2),n=t[0],r=t[1],i=function(){return r(!1)};return Object(B.jsxs)(s.a,{pt:4,children:[Object(B.jsx)(b.a,{variant:"contained",fullWidth:!0,onClick:function(){return r(!0)},startIcon:Object(B.jsx)(pe.a,{}),children:"FAQs"}),Object(B.jsx)(de.a,{open:n,onClose:i,"aria-labelledby":"modal-modal-title","aria-describedby":"modal-modal-description",children:Object(B.jsx)(s.a,{sx:fe,className:"scrollbox",children:Object(B.jsxs)(I.a,{container:!0,spacing:2,direction:"column",position:"relative",children:[le.map((function(e,t){return Object(B.jsxs)(I.a,{item:!0,children:[Object(B.jsxs)(R.a,{variant:"h5",gutterBottom:!0,children:[t+1,": ",e.q]}),Object(B.jsx)(R.a,{variant:"body1",children:e.a})]},e.q)})),Object(B.jsx)(ue.a,{color:"primary",style:{position:"absolute",right:-25,top:-24},onClick:i,children:Object(B.jsx)(je.a,{})})]})})})]})}var ge=Object(l.a)("div")((function(e){var t=e.theme;return Object(d.a)({maxWidth:400,margin:"0 auto"},t.breakpoints.down("sm"),{maxWidth:"100%"})}));function ye(){var e=T().address;return Object(B.jsxs)(ge,{children:[Object(B.jsx)(U,{}),Object(B.jsx)(Z,{}),Object(B.jsx)(te,{}),Object(B.jsx)(re,{}),Object(B.jsx)(oe,{address:e}),Object(B.jsx)(me,{}),Object(B.jsx)(se,{})]})}var Ae=function(){return Object(B.jsx)(u.a,{children:Object(B.jsx)(s.a,{paddingY:6,paddingX:2,children:Object(B.jsx)(ye,{})})})},xe=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,916)).then((function(t){var n=t.getCLS,a=t.getFID,r=t.getFCP,i=t.getLCP,c=t.getTTFB;n(e),a(e),r(e),i(e),c(e)}))},Oe=n(412),ve=n(904),we=Object(Oe.a)({palette:{primary:{main:"#f4b52d"},secondary:{main:"#f4b52d"},text:{primary:"#f4b52d"}},typography:{fontFamily:"Montserrat",body1:{fontSize:20},body2:{fontSize:16},allVariants:{color:"#000000"},h4:{fontWeight:600,fontSize:32},h5:{fontSize:24,fontWeight:500}},components:{MuiCard:{styleOverrides:{root:{boxShadow:"6px 6px 20px 6px #00000096",borderRadius:20}}},MuiCardContent:{styleOverrides:{root:{padding:"12px 24px"}}},MuiButton:{styleOverrides:{root:{borderRadius:8,fontWeight:400,fontSize:"1.2rem",padding:"10px",minWidth:138},contained:{boxShadow:"6px 6px 20px 6px #00000096"},containedSecondary:{color:"#000000"}}}}});function Be(e){var t=e.children;return Object(B.jsx)(ve.a,{theme:we,children:t})}c.a.render(Object(B.jsxs)(r.a.StrictMode,{children:[Object(B.jsx)(o.a,{}),Object(B.jsx)(Be,{children:Object(B.jsx)(W,{children:Object(B.jsx)(_,{children:Object(B.jsx)(Ae,{})})})})]}),document.getElementById("root")),xe()}},[[855,1,2]]]);
//# sourceMappingURL=main.d1ab4001.chunk.js.map
