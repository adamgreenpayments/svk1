import{S as e,i as a,s as t,v as n,w as s,x as r,t as o,b as l,y as $,z as i,l as c,I as m,d as u,A as f,m as d,p,a as g,E as h,u as v,o as b,j as w,r as y,n as C,B as S,C as x,P as E,Q as P}from"../chunks/index-2b079c53.js";import{L as k,C as M,S as j,g as U,b as I,B as R}from"../chunks/aws-add3e71f.js";import{c as A}from"../chunks/auth-d2666f70.js";import{i as B,a as F,T as O}from"../chunks/validation-4fe040bf.js";function q(e){let a,t;return a=new k({}),{c(){n(a.$$.fragment)},l(e){s(a.$$.fragment,e)},m(e,n){r(a,e,n),t=!0},i(e){t||(o(a.$$.fragment,e),t=!0)},o(e){l(a.$$.fragment,e),t=!1},d(e){$(a,e)}}}function z(e){return{c:C,l:C,m:C,p:C,i:C,o:C,d:C}}function H(e){let a,t,m,v,b,w,y,C,k,M;return b=new O({props:{id:"confirmationCode",label:"Confirmation Code",type:"text",value:e[7]}}),b.$on("input",e[15]),y=new R({props:{type:"submit",disabled:!e[7],$$slots:{default:[N]},$$scope:{ctx:e}}}),{c(){a=c("h3"),t=S("Please check your email for the code."),m=i(),v=c("form"),n(b.$$.fragment),w=i(),n(y.$$.fragment)},l(e){a=d(e,"H3",{});var n=p(a);t=x(n,"Please check your email for the code."),n.forEach(u),m=f(e),v=d(e,"FORM",{});var r=p(v);s(b.$$.fragment,r),w=f(r),s(y.$$.fragment,r),r.forEach(u)},m(n,s){g(n,a,s),h(a,t),g(n,m,s),g(n,v,s),r(b,v,null),h(v,w),r(y,v,null),C=!0,k||(M=E(v,"submit",P(e[9])),k=!0)},p(e,a){const t={};128&a&&(t.value=e[7]),b.$set(t);const n={};128&a&&(n.disabled=!e[7]),262144&a&&(n.$$scope={dirty:a,ctx:e}),y.$set(n)},i(e){C||(o(b.$$.fragment,e),o(y.$$.fragment,e),C=!0)},o(e){l(b.$$.fragment,e),l(y.$$.fragment,e),C=!1},d(e){e&&u(a),e&&u(m),e&&u(v),$(b),$(y),k=!1,M()}}}function L(e){let a,t,m,v,b,w,y,C,S,x,k;return t=new O({props:{id:"email",label:"E-Mail",type:"email",valid:e[3],validityMessage:"Please enter a valid email address.",value:e[0]}}),t.$on("input",e[12]),v=new O({props:{id:"Password",label:"Password",type:"password",value:e[1],autocomplete:"on"}}),v.$on("input",e[13]),w=new O({props:{id:"Password",label:"Confirm Password",type:"password",value:e[2],autocomplete:"on"}}),w.$on("input",e[14]),C=new R({props:{type:"submit",disabled:!e[8],$$slots:{default:[Q]},$$scope:{ctx:e}}}),{c(){a=c("form"),n(t.$$.fragment),m=i(),n(v.$$.fragment),b=i(),n(w.$$.fragment),y=i(),n(C.$$.fragment)},l(e){a=d(e,"FORM",{});var n=p(a);s(t.$$.fragment,n),m=f(n),s(v.$$.fragment,n),b=f(n),s(w.$$.fragment,n),y=f(n),s(C.$$.fragment,n),n.forEach(u)},m(n,s){g(n,a,s),r(t,a,null),h(a,m),r(v,a,null),h(a,b),r(w,a,null),h(a,y),r(C,a,null),S=!0,x||(k=E(a,"submit",P(e[10])),x=!0)},p(e,a){const n={};8&a&&(n.valid=e[3]),1&a&&(n.value=e[0]),t.$set(n);const s={};2&a&&(s.value=e[1]),v.$set(s);const r={};4&a&&(r.value=e[2]),w.$set(r);const o={};256&a&&(o.disabled=!e[8]),262144&a&&(o.$$scope={dirty:a,ctx:e}),C.$set(o)},i(e){S||(o(t.$$.fragment,e),o(v.$$.fragment,e),o(w.$$.fragment,e),o(C.$$.fragment,e),S=!0)},o(e){l(t.$$.fragment,e),l(v.$$.fragment,e),l(w.$$.fragment,e),l(C.$$.fragment,e),S=!1},d(e){e&&u(a),$(t),$(v),$(w),$(C),x=!1,k()}}}function N(e){let a;return{c(){a=S("Confirm")},l(e){a=x(e,"Confirm")},m(e,t){g(e,a,t)},d(e){e&&u(a)}}}function Q(e){let a;return{c(){a=S("Sign Up")},l(e){a=x(e,"Sign Up")},m(e,t){g(e,a,t)},d(e){e&&u(a)}}}function T(e){let a,t,n,s,r,$,b=e[4]&&q();const w=[L,H,z],C=[];function S(e,a){return e[5]?0:e[6]?1:2}return s=S(e),r=C[s]=w[s](e),{c(){a=i(),t=c("main"),b&&b.c(),n=i(),r.c(),this.h()},l(e){m('[data-svelte="svelte-178dq93"]',document.head).forEach(u),a=f(e),t=d(e,"MAIN",{});var s=p(t);b&&b.l(s),n=f(s),r.l(s),s.forEach(u),this.h()},h(){document.title="MaRS Connected: Sign Up"},m(e,r){g(e,a,r),g(e,t,r),b&&b.m(t,null),h(t,n),C[s].m(t,null),$=!0},p(e,[a]){e[4]?b?16&a&&o(b,1):(b=q(),b.c(),o(b,1),b.m(t,n)):b&&(y(),l(b,1,1,(()=>{b=null})),v());let $=s;s=S(e),s===$?C[s].p(e,a):(y(),l(C[$],1,1,(()=>{C[$]=null})),v(),r=C[s],r?r.p(e,a):(r=C[s]=w[s](e),r.c()),o(r,1),r.m(t,null))},i(e){$||(o(b),o(r),$=!0)},o(e){l(b),l(r),$=!1},d(e){e&&u(a),e&&u(t),b&&b.d(),C[s].d()}}}function W(e,a,t){let n,s,r,o,l="",$="",i="",c=!1,m=!0,u=!1,f="";b((()=>{o=A.subscribe((e=>{}))})),w((()=>{o&&o()}));return e.$$.update=()=>{1&e.$$.dirty&&t(3,n=B(l)),6&e.$$.dirty&&t(11,s=F($,i)),2056&e.$$.dirty&&t(8,r=n&&s)},[l,$,i,n,c,m,u,f,r,async function(){try{t(4,c=!0);const e=await M(l,f);if(console.log({resCnf:e}),"SUCCESS"===e){const e=await j(l,$);A.setauthUser(e),console.log({resSgnIn:e}),t(4,c=!1),U("/")}else t(4,c=!1),alert("Wrong confirmation code!")}catch(e){alert(e.message),t(4,c=!0)}},async function(){t(4,c=!0);const e=await I(l,$);console.log({res:e}),t(6,u=!0),t(5,m=!1),t(4,c=!1)},s,e=>t(0,l=e.target.value),e=>t(1,$=e.target.value),e=>t(2,i=e.target.value),e=>t(7,f=e.target.value)]}export default class extends e{constructor(e){super(),a(this,e,W,T,t,{})}}