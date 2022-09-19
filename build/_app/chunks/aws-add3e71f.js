import{S as e,i as s,s as t,e as n,a,r,b as l,u as c,t as o,d as i,O as u,G as d,l as h,m as b,p as m,q as p,P as f,H as A,n as g}from"./index-2b079c53.js";import{w}from"./auth-d2666f70.js";let y,S;function v(e){({router:y,renderer:S}=e)}const E=async function(e,s){return y.goto(e,s,[])};const N=w(!1),P=w(!1),U=w(!1),$=w(!1),q=w(!1),O={subscribe:N.subscribe,subscribeGQL:P.subscribe,subscribeAPI:U.subscribe,subscribeAuth:$.subscribe,subscribeStorage:q.subscribe,setAwsAmplify:e=>{N.set(e)},removeAwsAmplify:()=>{N.set(null)},setAwsGraphqlOperation:e=>{P.set(e)},removeAwsGraphqlOperation:()=>{P.set(null)},setAwsAPI:e=>{U.set(e)},removeAwsAPI:()=>{U.set(null)},setAwsAuth:e=>{$.set(e)},removeAwsAuth:()=>{$.set(null)},setAwsStorage:e=>{q.set(e)},removeAwsStorage:()=>{q.set(null)}};function I(e){let s,t,n,r,c;const u=e[6].default,g=d(u,e,e[5],null);return{c(){s=h("button"),g&&g.c(),this.h()},l(e){s=b(e,"BUTTON",{class:!0,type:!0,disabled:!0});var t=m(s);g&&g.l(t),t.forEach(i),this.h()},h(){p(s,"class",t=e[2]+" "+e[3]+" svelte-1abqb0s"),p(s,"type",e[0]),s.disabled=e[4]},m(t,l){a(t,s,l),g&&g.m(s,null),n=!0,r||(c=f(s,"click",e[7]),r=!0)},p(e,a){g&&g.p&&32&a&&A(g,u,e,e[5],a,null,null),(!n||12&a&&t!==(t=e[2]+" "+e[3]+" svelte-1abqb0s"))&&p(s,"class",t),(!n||1&a)&&p(s,"type",e[0]),(!n||16&a)&&(s.disabled=e[4])},i(e){n||(o(g,e),n=!0)},o(e){l(g,e),n=!1},d(e){e&&i(s),g&&g.d(e),r=!1,c()}}}function T(e){let s,t;const n=e[6].default,r=d(n,e,e[5],null);return{c(){s=h("a"),r&&r.c(),this.h()},l(e){s=b(e,"A",{href:!0,class:!0});var t=m(s);r&&r.l(t),t.forEach(i),this.h()},h(){p(s,"href",e[1]),p(s,"class","svelte-1abqb0s")},m(e,n){a(e,s,n),r&&r.m(s,null),t=!0},p(e,a){r&&r.p&&32&a&&A(r,n,e,e[5],a,null,null),(!t||2&a)&&p(s,"href",e[1])},i(e){t||(o(r,e),t=!0)},o(e){l(r,e),t=!1},d(e){e&&i(s),r&&r.d(e)}}}function x(e){let s,t,u,d;const h=[T,I],b=[];function m(e,s){return e[1]?0:1}return s=m(e),t=b[s]=h[s](e),{c(){t.c(),u=n()},l(e){t.l(e),u=n()},m(e,t){b[s].m(e,t),a(e,u,t),d=!0},p(e,[n]){let a=s;s=m(e),s===a?b[s].p(e,n):(r(),l(b[a],1,1,(()=>{b[a]=null})),c(),t=b[s],t?t.p(e,n):(t=b[s]=h[s](e),t.c()),o(t,1),t.m(u.parentNode,u))},i(e){d||(o(t),d=!0)},o(e){l(t),d=!1},d(e){b[s].d(e),e&&i(u)}}}function R(e,s,t){let{$$slots:n={},$$scope:a}=s,{type:r="button"}=s,{href:l=null}=s,{mode:c=null}=s,{color:o=null}=s,{disabled:i=!1}=s;return e.$$set=e=>{"type"in e&&t(0,r=e.type),"href"in e&&t(1,l=e.href),"mode"in e&&t(2,c=e.mode),"color"in e&&t(3,o=e.color),"disabled"in e&&t(4,i=e.disabled),"$$scope"in e&&t(5,a=e.$$scope)},[r,l,c,o,i,a,n,function(s){u(e,s)}]}class _ extends e{constructor(e){super(),s(this,e,R,x,t,{type:0,href:1,mode:2,color:3,disabled:4})}}function F(e){let s;return{c(){s=h("div"),this.h()},l(e){s=b(e,"DIV",{class:!0}),m(s).forEach(i),this.h()},h(){p(s,"class","lds-hourglass svelte-1utu4yd")},m(e,t){a(e,s,t)},p:g,i:g,o:g,d(e){e&&i(s)}}}class G extends e{constructor(e){super(),s(this,e,null,F,t,{})}}let M;async function j(){const e=await M.currentAuthenticatedUser({});return console.log("checkUser",{currentUser:e}),e}async function C(){try{await M.signOut()}catch(e){console.log(e)}}async function D(e,s){try{await M.signUp({username:e,password:s,attributes:{email:e}})}catch(t){console.log("error signing up:",t)}}async function W(e,s,t=null){try{const n=await M.signIn(e,s);if("SMS_MFA"===n.challengeName||"SOFTWARE_TOKEN_MFA"===n.challengeName){const e=getCodeFromUserInput();await M.confirmSignIn(n,e,mfaType)}else{if("NEW_PASSWORD_REQUIRED"===n.challengeName){const{requiredAttributes:e}=n.challengeParam;if(t){return await M.completeNewPassword(n,t,{email:n.challengeParam.userAttributes.email})}return{user:n,requiredAttributes:e}}if("MFA_SETUP"!==n.challengeName)return n;M.setupTOTP(n)}}catch(n){"UserNotConfirmedException"===n.code||"PasswordResetRequiredException"===n.code||"NotAuthorizedException"===n.code?(console.log(n.message),alert(n.message)):(n.code,console.log(n.message),alert(n.message))}}async function k(e,s){try{return await M.confirmSignUp(e,s)}catch(t){console.log(t)}}O.subscribe((async e=>{})),O.subscribeAuth((async e=>{e&&(M=e,console.log("Auth/aws.js:",{Auth:M}))}));export{_ as B,k as C,G as L,W as S,O as a,D as b,j as c,E as g,v as i,C as s};