import{S as a,i as s,s as e,v as t,w as n,x as r,t as o,b as l,y as i,z as $,l as m,I as u,d as c,A as d,m as f,p as g,a as p,E as h,P as v,Q as w,u as b,o as y,j as P,B as x,C as I,r as S}from"../chunks/index-2b079c53.js";import{B as j,L as E,S as k,g as M}from"../chunks/aws-add3e71f.js";import{c as U}from"../chunks/auth-d2666f70.js";import{T as A,i as B}from"../chunks/validation-4fe040bf.js";function L(a){let s,e;return s=new E({}),{c(){t(s.$$.fragment)},l(a){n(s.$$.fragment,a)},m(a,t){r(s,a,t),e=!0},i(a){e||(o(s.$$.fragment,a),e=!0)},o(a){l(s.$$.fragment,a),e=!1},d(a){i(s,a)}}}function R(a){let s;return{c(){s=x("Sign In")},l(a){s=I(a,"Sign In")},m(a,e){p(a,s,e)},d(a){a&&c(s)}}}function z(a){let s,e,y,P,x,I,E,k,M,U,B,z,C=a[3]&&L();return x=new A({props:{id:"email",label:"E-Mail",type:"email",valid:a[1],validityMessage:"Please enter a valid email address.",value:a[0]}}),x.$on("input",a[6]),E=new A({props:{id:"Password",label:"Password",type:"password",value:a[2],autocomplete:"on"}}),E.$on("input",a[7]),M=new j({props:{type:"submit",disabled:!a[4],$$slots:{default:[R]},$$scope:{ctx:a}}}),{c(){s=$(),e=m("main"),C&&C.c(),y=$(),P=m("form"),t(x.$$.fragment),I=$(),t(E.$$.fragment),k=$(),t(M.$$.fragment),this.h()},l(a){u('[data-svelte="svelte-1b10gp1"]',document.head).forEach(c),s=d(a),e=f(a,"MAIN",{});var t=g(e);C&&C.l(t),y=d(t),P=f(t,"FORM",{});var r=g(P);n(x.$$.fragment,r),I=d(r),n(E.$$.fragment,r),k=d(r),n(M.$$.fragment,r),r.forEach(c),t.forEach(c),this.h()},h(){document.title="Sign In"},m(t,n){p(t,s,n),p(t,e,n),C&&C.m(e,null),h(e,y),h(e,P),r(x,P,null),h(P,I),r(E,P,null),h(P,k),r(M,P,null),U=!0,B||(z=v(P,"submit",w(a[5])),B=!0)},p(a,[s]){a[3]?C?8&s&&o(C,1):(C=L(),C.c(),o(C,1),C.m(e,y)):C&&(S(),l(C,1,1,(()=>{C=null})),b());const t={};2&s&&(t.valid=a[1]),1&s&&(t.value=a[0]),x.$set(t);const n={};4&s&&(n.value=a[2]),E.$set(n);const r={};16&s&&(r.disabled=!a[4]),1024&s&&(r.$$scope={dirty:s,ctx:a}),M.$set(r)},i(a){U||(o(C),o(x.$$.fragment,a),o(E.$$.fragment,a),o(M.$$.fragment,a),U=!0)},o(a){l(C),l(x.$$.fragment,a),l(E.$$.fragment,a),l(M.$$.fragment,a),U=!1},d(a){a&&c(s),a&&c(e),C&&C.d(),i(x),i(E),i(M),B=!1,z()}}}function C(a,s,e){let t,n,r,o,l="",i="",$=!1;y((()=>{r=U.subscribe((a=>{o=a,console.log("signIn",{cognitoUser:o})}))})),P((()=>{r&&r()}));return a.$$.update=()=>{1&a.$$.dirty&&e(1,t=B(l)),2&a.$$.dirty&&e(4,n=t)},[l,t,i,$,n,async function(){e(3,$=!0),new URLSearchParams(window.location.search),console.log("urlParams: ",previousPage);const a=await k(l,i);U.setauthUser(a),e(3,$=!1),M("/")},a=>e(0,l=a.target.value),a=>e(2,i=a.target.value)]}export default class extends a{constructor(a){super(),s(this,a,C,z,e,{})}}