import{S as e,i as o,s,e as t,a as n,n as r,d as l,B as p,C as a,D as d}from"../chunks/index-2b079c53.js";import{c}from"../chunks/auth-d2666f70.js";function i(e){let o;return{c(){o=p("poop poop")},l(e){o=a(e,"poop poop")},m(e,s){n(e,o,s)},p:r,d(e){e&&l(o)}}}function u(e){let o,s,t=e[0].email+"";return{c(){o=p("logged in poop "),s=p(t)},l(e){o=a(e,"logged in poop "),s=a(e,t)},m(e,t){n(e,o,t),n(e,s,t)},p(e,o){1&o&&t!==(t=e[0].email+"")&&d(s,t)},d(e){e&&l(o),e&&l(s)}}}function g(e){let o;function s(e,o){return e[0]?u:i}let p=s(e),a=p(e);return{c(){a.c(),o=t()},l(e){a.l(e),o=t()},m(e,s){a.m(e,s),n(e,o,s)},p(e,[t]){p===(p=s(e))&&a?a.p(e,t):(a.d(1),a=p(e),a&&(a.c(),a.m(o.parentNode,o)))},i:r,o:r,d(e){a.d(e),e&&l(o)}}}function m(e,o,s){let{loggedInUser:t}=o;return c.subscribe((e=>{e&&s(0,t=e.attributes)})),e.$$set=e=>{"loggedInUser"in e&&s(0,t=e.loggedInUser)},e.$$.update=()=>{1&e.$$.dirty&&console.log("two:",{loggedInUser:t})},[t]}export default class extends e{constructor(e){super(),o(this,e,m,g,s,{loggedInUser:0})}}