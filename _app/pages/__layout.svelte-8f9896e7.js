import{D as Y,S as K,i as U,s as P,e as d,E as z,k as I,t as D,c as p,a as u,F as N,d as l,n as B,g as S,b as t,G as C,f as M,H as r,I as Q,J as ee,K as te,j as se,m as ae,o as le,L as re,M as oe,N as ce,x as W,u as X,v as ie}from"../chunks/vendor-1d2469b0.js";const ne=()=>{const c=Y("__svelte__");return{page:{subscribe:c.page.subscribe},navigating:{subscribe:c.navigating.subscribe},get preloading(){return console.error("stores.preloading is deprecated; use stores.navigating instead"),{subscribe:c.navigating.subscribe}},session:c.session}},ue={subscribe(c){return ne().page.subscribe(c)}};function ve(c){let s,i,o,v,_,n,f,m,E,A,a,e,h,L,g,b,T,j,w,k;return{c(){s=d("header"),i=d("nav"),o=z("svg"),v=z("path"),_=I(),n=d("ul"),f=d("li"),m=d("a"),E=D("Home"),A=I(),a=d("li"),e=d("a"),h=D("About"),L=I(),g=d("li"),b=d("a"),T=D("Todos"),j=I(),w=z("svg"),k=z("path"),this.h()},l($){s=p($,"HEADER",{class:!0});var q=u(s);i=p(q,"NAV",{class:!0});var y=u(i);o=N(y,"svg",{viewBox:!0,"aria-hidden":!0,class:!0});var x=u(o);v=N(x,"path",{d:!0,class:!0}),u(v).forEach(l),x.forEach(l),_=B(y),n=p(y,"UL",{class:!0});var H=u(n);f=p(H,"LI",{class:!0});var F=u(f);m=p(F,"A",{"sveltekit:prefetch":!0,href:!0,class:!0});var O=u(m);E=S(O,"Home"),O.forEach(l),F.forEach(l),A=B(H),a=p(H,"LI",{class:!0});var R=u(a);e=p(R,"A",{"sveltekit:prefetch":!0,href:!0,class:!0});var V=u(e);h=S(V,"About"),V.forEach(l),R.forEach(l),L=B(H),g=p(H,"LI",{class:!0});var Z=u(g);b=p(Z,"A",{"sveltekit:prefetch":!0,href:!0,class:!0});var G=u(b);T=S(G,"Todos"),G.forEach(l),Z.forEach(l),H.forEach(l),j=B(y),w=N(y,"svg",{viewBox:!0,"aria-hidden":!0,class:!0});var J=u(w);k=N(J,"path",{d:!0,class:!0}),u(k).forEach(l),J.forEach(l),y.forEach(l),q.forEach(l),this.h()},h(){t(v,"d","M0,0 L1,2 C1.5,3 1.5,3 2,3 L2,0 Z"),t(v,"class","svelte-t2wq17"),t(o,"viewBox","0 0 2 3"),t(o,"aria-hidden","true"),t(o,"class","svelte-t2wq17"),t(m,"sveltekit:prefetch",""),t(m,"href","/"),t(m,"class","svelte-t2wq17"),t(f,"class","svelte-t2wq17"),C(f,"active",c[0].path==="/"),t(e,"sveltekit:prefetch",""),t(e,"href","/about"),t(e,"class","svelte-t2wq17"),t(a,"class","svelte-t2wq17"),C(a,"active",c[0].path==="/about"),t(b,"sveltekit:prefetch",""),t(b,"href","/todos"),t(b,"class","svelte-t2wq17"),t(g,"class","svelte-t2wq17"),C(g,"active",c[0].path==="/todos"),t(n,"class","svelte-t2wq17"),t(k,"d","M0,0 L0,3 C0.5,3 0.5,3 1,2 L2,0 Z"),t(k,"class","svelte-t2wq17"),t(w,"viewBox","0 0 2 3"),t(w,"aria-hidden","true"),t(w,"class","svelte-t2wq17"),t(i,"class","svelte-t2wq17"),t(s,"class","svelte-t2wq17")},m($,q){M($,s,q),r(s,i),r(i,o),r(o,v),r(i,_),r(i,n),r(n,f),r(f,m),r(m,E),r(n,A),r(n,a),r(a,e),r(e,h),r(n,L),r(n,g),r(g,b),r(b,T),r(i,j),r(i,w),r(w,k)},p($,[q]){q&1&&C(f,"active",$[0].path==="/"),q&1&&C(a,"active",$[0].path==="/about"),q&1&&C(g,"active",$[0].path==="/todos")},i:Q,o:Q,d($){$&&l(s)}}}function fe(c,s,i){let o;return ee(c,ue,v=>i(0,o=v)),[o]}class he extends K{constructor(s){super();U(this,s,fe,ve,P,{})}}function _e(c){let s,i,o,v,_,n,f,m,E;s=new he({});const A=c[1].default,a=te(A,c,c[0],null);return{c(){se(s.$$.fragment),i=I(),o=d("main"),a&&a.c(),v=I(),_=d("footer"),n=d("div"),f=d("a"),m=D("github.com/lachlanmcmillan"),this.h()},l(e){ae(s.$$.fragment,e),i=B(e),o=p(e,"MAIN",{class:!0});var h=u(o);a&&a.l(h),h.forEach(l),v=B(e),_=p(e,"FOOTER",{class:!0});var L=u(_);n=p(L,"DIV",{class:!0});var g=u(n);f=p(g,"A",{href:!0,class:!0});var b=u(f);m=S(b,"github.com/lachlanmcmillan"),b.forEach(l),g.forEach(l),L.forEach(l),this.h()},h(){t(o,"class","svelte-1izrdc8"),t(f,"href","https://github.com/lachlanmcmillan"),t(f,"class","svelte-1izrdc8"),t(n,"class","corner"),t(_,"class","svelte-1izrdc8")},m(e,h){le(s,e,h),M(e,i,h),M(e,o,h),a&&a.m(o,null),M(e,v,h),M(e,_,h),r(_,n),r(n,f),r(f,m),E=!0},p(e,[h]){a&&a.p&&(!E||h&1)&&re(a,A,e,e[0],E?ce(A,e[0],h,null):oe(e[0]),null)},i(e){E||(W(s.$$.fragment,e),W(a,e),E=!0)},o(e){X(s.$$.fragment,e),X(a,e),E=!1},d(e){ie(s,e),e&&l(i),e&&l(o),a&&a.d(e),e&&l(v),e&&l(_)}}}function de(c,s,i){let{$$slots:o={},$$scope:v}=s;return c.$$set=_=>{"$$scope"in _&&i(0,v=_.$$scope)},[v,o]}class me extends K{constructor(s){super();U(this,s,de,_e,P,{})}}export{me as default};
