import{D as Y,S as K,i as U,s as P,e as d,E as D,k as B,t as N,c as p,a as v,F as S,d as l,n as C,g as T,b as s,G as M,f as z,H as r,I as Q,J as ee,K as se,j as te,m as ae,o as le,L as re,M as oe,N as ce,x as W,u as X,v as ie}from"../chunks/vendor-f2c3441d.js";const ne=()=>{const c=Y("__svelte__");return{page:{subscribe:c.page.subscribe},navigating:{subscribe:c.navigating.subscribe},get preloading(){return console.error("stores.preloading is deprecated; use stores.navigating instead"),{subscribe:c.navigating.subscribe}},session:c.session}},ve={subscribe(c){return ne().page.subscribe(c)}};function ue(c){let t,i,o,u,_,n,h,m,E,k,a,e,f,y,g,b,j,x,A,H;return{c(){t=d("header"),i=d("nav"),o=D("svg"),u=D("path"),_=B(),n=d("ul"),h=d("li"),m=d("a"),E=N("Home"),k=B(),a=d("li"),e=d("a"),f=N("About"),y=B(),g=d("li"),b=d("a"),j=N("Todos"),x=B(),A=D("svg"),H=D("path"),this.h()},l($){t=p($,"HEADER",{class:!0});var L=v(t);i=p(L,"NAV",{class:!0});var I=v(i);o=S(I,"svg",{viewBox:!0,"aria-hidden":!0,class:!0});var F=v(o);u=S(F,"path",{d:!0,class:!0}),v(u).forEach(l),F.forEach(l),_=C(I),n=p(I,"UL",{class:!0});var w=v(n);h=p(w,"LI",{class:!0});var O=v(h);m=p(O,"A",{"sveltekit:prefetch":!0,href:!0,class:!0});var R=v(m);E=T(R,"Home"),R.forEach(l),O.forEach(l),k=C(w),a=p(w,"LI",{class:!0});var V=v(a);e=p(V,"A",{"sveltekit:prefetch":!0,href:!0,class:!0});var Z=v(e);f=T(Z,"About"),Z.forEach(l),V.forEach(l),y=C(w),g=p(w,"LI",{class:!0});var q=v(g);b=p(q,"A",{"sveltekit:prefetch":!0,href:!0,class:!0});var G=v(b);j=T(G,"Todos"),G.forEach(l),q.forEach(l),w.forEach(l),x=C(I),A=S(I,"svg",{viewBox:!0,"aria-hidden":!0,class:!0});var J=v(A);H=S(J,"path",{d:!0,class:!0}),v(H).forEach(l),J.forEach(l),I.forEach(l),L.forEach(l),this.h()},h(){s(u,"d","M0,0 L1,2 C1.5,3 1.5,3 2,3 L2,0 Z"),s(u,"class","svelte-rsl0hv"),s(o,"viewBox","0 0 2 3"),s(o,"aria-hidden","true"),s(o,"class","svelte-rsl0hv"),s(m,"sveltekit:prefetch",""),s(m,"href","/"),s(m,"class","svelte-rsl0hv"),s(h,"class","svelte-rsl0hv"),M(h,"active",c[0].path==="/"),s(e,"sveltekit:prefetch",""),s(e,"href","/about"),s(e,"class","svelte-rsl0hv"),s(a,"class","svelte-rsl0hv"),M(a,"active",c[0].path==="/about"),s(b,"sveltekit:prefetch",""),s(b,"href","/todos"),s(b,"class","svelte-rsl0hv"),s(g,"class","svelte-rsl0hv"),M(g,"active",c[0].path==="/todos"),s(n,"class","svelte-rsl0hv"),s(H,"d","M0,0 L0,3 C0.5,3 0.5,3 1,2 L2,0 Z"),s(H,"class","svelte-rsl0hv"),s(A,"viewBox","0 0 2 3"),s(A,"aria-hidden","true"),s(A,"class","svelte-rsl0hv"),s(i,"class","svelte-rsl0hv"),s(t,"class","svelte-rsl0hv")},m($,L){z($,t,L),r(t,i),r(i,o),r(o,u),r(i,_),r(i,n),r(n,h),r(h,m),r(m,E),r(n,k),r(n,a),r(a,e),r(e,f),r(n,y),r(n,g),r(g,b),r(b,j),r(i,x),r(i,A),r(A,H)},p($,[L]){L&1&&M(h,"active",$[0].path==="/"),L&1&&M(a,"active",$[0].path==="/about"),L&1&&M(g,"active",$[0].path==="/todos")},i:Q,o:Q,d($){$&&l(t)}}}function he(c,t,i){let o;return ee(c,ve,u=>i(0,o=u)),[o]}class fe extends K{constructor(t){super();U(this,t,he,ue,P,{})}}function _e(c){let t,i,o,u,_,n,h,m,E;t=new fe({});const k=c[1].default,a=se(k,c,c[0],null);return{c(){te(t.$$.fragment),i=B(),o=d("main"),a&&a.c(),u=B(),_=d("footer"),n=d("div"),h=d("a"),m=N("github.com/lachlanmcmillan"),this.h()},l(e){ae(t.$$.fragment,e),i=C(e),o=p(e,"MAIN",{class:!0});var f=v(o);a&&a.l(f),f.forEach(l),u=C(e),_=p(e,"FOOTER",{class:!0});var y=v(_);n=p(y,"DIV",{class:!0});var g=v(n);h=p(g,"A",{href:!0,class:!0});var b=v(h);m=T(b,"github.com/lachlanmcmillan"),b.forEach(l),g.forEach(l),y.forEach(l),this.h()},h(){s(o,"class","svelte-1izrdc8"),s(h,"href","https://github.com/lachlanmcmillan"),s(h,"class","svelte-1izrdc8"),s(n,"class","corner"),s(_,"class","svelte-1izrdc8")},m(e,f){le(t,e,f),z(e,i,f),z(e,o,f),a&&a.m(o,null),z(e,u,f),z(e,_,f),r(_,n),r(n,h),r(h,m),E=!0},p(e,[f]){a&&a.p&&(!E||f&1)&&re(a,k,e,e[0],E?ce(k,e[0],f,null):oe(e[0]),null)},i(e){E||(W(t.$$.fragment,e),W(a,e),E=!0)},o(e){X(t.$$.fragment,e),X(a,e),E=!1},d(e){ie(t,e),e&&l(i),e&&l(o),a&&a.d(e),e&&l(u),e&&l(_)}}}function de(c,t,i){let{$$slots:o={},$$scope:u}=t;return c.$$set=_=>{"$$scope"in _&&i(0,u=_.$$scope)},[u,o]}class me extends K{constructor(t){super();U(this,t,de,_e,P,{})}}export{me as default};