// https://d3js.org v5.7.0 Copyright 2018 Mike Bostock
!function(t,n){"object"==typeof exports&&"undefined"!=typeof module?n(exports):"function"==typeof define&&define.amd?define(["exports"],n):n(t.d3=t.d3||{})}(this,function(t){"use strict";function n(t,n){return t<n?-1:t>n?1:t>=n?0:NaN}function e(t){var e;return 1===t.length&&(e=t,t=function(t,r){return n(e(t),r)}),{left:function(n,e,r,i){for(null==r&&(r=0),null==i&&(i=n.length);r<i;){var o=r+i>>>1;t(n[o],e)<0?r=o+1:i=o}return r},right:function(n,e,r,i){for(null==r&&(r=0),null==i&&(i=n.length);r<i;){var o=r+i>>>1;t(n[o],e)>0?i=o:r=o+1}return r}}}var r=e(n),i=r.right,o=r.left;function a(t,n){return[t,n]}function u(t){return null===t?NaN:+t}function f(t,n){var e,r,i=t.length,o=0,a=-1,f=0,c=0;if(null==n)for(;++a<i;)isNaN(e=u(t[a]))||(c+=(r=e-f)*(e-(f+=r/++o)));else for(;++a<i;)isNaN(e=u(n(t[a],a,t)))||(c+=(r=e-f)*(e-(f+=r/++o)));if(o>1)return c/(o-1)}function c(t,n){var e=f(t,n);return e?Math.sqrt(e):e}function s(t,n){var e,r,i,o=t.length,a=-1;if(null==n){for(;++a<o;)if(null!=(e=t[a])&&e>=e)for(r=i=e;++a<o;)null!=(e=t[a])&&(r>e&&(r=e),i<e&&(i=e))}else for(;++a<o;)if(null!=(e=n(t[a],a,t))&&e>=e)for(r=i=e;++a<o;)null!=(e=n(t[a],a,t))&&(r>e&&(r=e),i<e&&(i=e));return[r,i]}var l=Array.prototype,h=l.slice,d=l.map;function p(t){return function(){return t}}function v(t){return t}function g(t,n,e){t=+t,n=+n,e=(i=arguments.length)<2?(n=t,t=0,1):i<3?1:+e;for(var r=-1,i=0|Math.max(0,Math.ceil((n-t)/e)),o=new Array(i);++r<i;)o[r]=t+r*e;return o}var y=Math.sqrt(50),_=Math.sqrt(10),b=Math.sqrt(2);function m(t,n,e){var r,i,o,a,u=-1;if(e=+e,(t=+t)===(n=+n)&&e>0)return[t];if((r=n<t)&&(i=t,t=n,n=i),0===(a=x(t,n,e))||!isFinite(a))return[];if(a>0)for(t=Math.ceil(t/a),n=Math.floor(n/a),o=new Array(i=Math.ceil(n-t+1));++u<i;)o[u]=(t+u)*a;else for(t=Math.floor(t*a),n=Math.ceil(n*a),o=new Array(i=Math.ceil(t-n+1));++u<i;)o[u]=(t-u)/a;return r&&o.reverse(),o}function x(t,n,e){var r=(n-t)/Math.max(0,e),i=Math.floor(Math.log(r)/Math.LN10),o=r/Math.pow(10,i);return i>=0?(o>=y?10:o>=_?5:o>=b?2:1)*Math.pow(10,i):-Math.pow(10,-i)/(o>=y?10:o>=_?5:o>=b?2:1)}function w(t,n,e){var r=Math.abs(n-t)/Math.max(0,e),i=Math.pow(10,Math.floor(Math.log(r)/Math.LN10)),o=r/i;return o>=y?i*=10:o>=_?i*=5:o>=b&&(i*=2),n<t?-i:i}function M(t){return Math.ceil(Math.log(t.length)/Math.LN2)+1}function A(t,n,e){if(null==e&&(e=u),r=t.length){if((n=+n)<=0||r<2)return+e(t[0],0,t);if(n>=1)return+e(t[r-1],r-1,t);var r,i=(r-1)*n,o=Math.floor(i),a=+e(t[o],o,t);return a+(+e(t[o+1],o+1,t)-a)*(i-o)}}function T(t,n){var e,r,i=t.length,o=-1;if(null==n){for(;++o<i;)if(null!=(e=t[o])&&e>=e)for(r=e;++o<i;)null!=(e=t[o])&&e>r&&(r=e)}else for(;++o<i;)if(null!=(e=n(t[o],o,t))&&e>=e)for(r=e;++o<i;)null!=(e=n(t[o],o,t))&&e>r&&(r=e);return r}function N(t){for(var n,e,r,i=t.length,o=-1,a=0;++o<i;)a+=t[o].length;for(e=new Array(a);--i>=0;)for(n=(r=t[i]).length;--n>=0;)e[--a]=r[n];return e}function S(t,n){var e,r,i=t.length,o=-1;if(null==n){for(;++o<i;)if(null!=(e=t[o])&&e>=e)for(r=e;++o<i;)null!=(e=t[o])&&r>e&&(r=e)}else for(;++o<i;)if(null!=(e=n(t[o],o,t))&&e>=e)for(r=e;++o<i;)null!=(e=n(t[o],o,t))&&r>e&&(r=e);return r}function E(t){if(!(i=t.length))return[];for(var n=-1,e=S(t,k),r=new Array(e);++n<e;)for(var i,o=-1,a=r[n]=new Array(i);++o<i;)a[o]=t[o][n];return r}function k(t){return t.length}var C=Array.prototype.slice;function P(t){return t}var z=1,R=2,L=3,D=4,U=1e-6;function q(t){return"translate("+(t+.5)+",0)"}function O(t){return"translate(0,"+(t+.5)+")"}function Y(){return!this.__axis}function B(t,n){var e=[],r=null,i=null,o=6,a=6,u=3,f=t===z||t===D?-1:1,c=t===D||t===R?"x":"y",s=t===z||t===L?q:O;function l(l){var h=null==r?n.ticks?n.ticks.apply(n,e):n.domain():r,d=null==i?n.tickFormat?n.tickFormat.apply(n,e):P:i,p=Math.max(o,0)+u,v=n.range(),g=+v[0]+.5,y=+v[v.length-1]+.5,_=(n.bandwidth?function(t){var n=Math.max(0,t.bandwidth()-1)/2;return t.round()&&(n=Math.round(n)),function(e){return+t(e)+n}}:function(t){return function(n){return+t(n)}})(n.copy()),b=l.selection?l.selection():l,m=b.selectAll(".domain").data([null]),x=b.selectAll(".tick").data(h,n).order(),w=x.exit(),M=x.enter().append("g").attr("class","tick"),A=x.select("line"),T=x.select("text");m=m.merge(m.enter().insert("path",".tick").attr("class","domain").attr("stroke","currentColor")),x=x.merge(M),A=A.merge(M.append("line").attr("stroke","currentColor").attr(c+"2",f*o)),T=T.merge(M.append("text").attr("fill","currentColor").attr(c,f*p).attr("dy",t===z?"0em":t===L?"0.71em":"0.32em")),l!==b&&(m=m.transition(l),x=x.transition(l),A=A.transition(l),T=T.transition(l),w=w.transition(l).attr("opacity",U).attr("transform",function(t){return isFinite(t=_(t))?s(t):this.getAttribute("transform")}),M.attr("opacity",U).attr("transform",function(t){var n=this.parentNode.__axis;return s(n&&isFinite(n=n(t))?n:_(t))})),w.remove(),m.attr("d",t===D||t==R?a?"M"+f*a+","+g+"H0.5V"+y+"H"+f*a:"M0.5,"+g+"V"+y:a?"M"+g+","+f*a+"V0.5H"+y+"V"+f*a:"M"+g+",0.5H"+y),x.attr("opacity",1).attr("transform",function(t){return s(_(t))}),A.attr(c+"2",f*o),T.attr(c,f*p).text(d),b.filter(Y).attr("fill","none").attr("font-size",10).attr("font-family","sans-serif").attr("text-anchor",t===R?"start":t===D?"end":"middle"),b.each(function(){this.__axis=_})}return l.scale=function(t){return arguments.length?(n=t,l):n},l.ticks=function(){return e=C.call(arguments),l},l.tickArguments=function(t){return arguments.length?(e=null==t?[]:C.call(t),l):e.slice()},l.tickValues=function(t){return arguments.length?(r=null==t?null:C.call(t),l):r&&r.slice()},l.tickFormat=function(t){return arguments.length?(i=t,l):i},l.tickSize=function(t){return arguments.length?(o=a=+t,l):o},l.tickSizeInner=function(t){return arguments.length?(o=+t,l):o},l.tickSizeOuter=function(t){return arguments.length?(a=+t,l):a},l.tickPadding=function(t){return arguments.length?(u=+t,l):u},l}var F={value:function(){}};function I(){for(var t,n=0,e=arguments.length,r={};n<e;++n){if(!(t=arguments[n]+"")||t in r)throw new Error("illegal type: "+t);r[t]=[]}return new H(r)}function H(t){this._=t}function j(t,n){for(var e,r=0,i=t.length;r<i;++r)if((e=t[r]).name===n)return e.value}function X(t,n,e){for(var r=0,i=t.length;r<i;++r)if(t[r].name===n){t[r]=F,t=t.slice(0,r).concat(t.slice(r+1));break}return null!=e&&t.push({name:n,value:e}),t}H.prototype=I.prototype={constructor:H,on:function(t,n){var e,r,i=this._,o=(r=i,(t+"").trim().split(/^|\s+/).map(function(t){var n="",e=t.indexOf(".");if(e>=0&&(n=t.slice(e+1),t=t.slice(0,e)),t&&!r.hasOwnProperty(t))throw new Error("unknown type: "+t);return{type:t,name:n}})),a=-1,u=o.length;if(!(arguments.length<2)){if(null!=n&&"function"!=typeof n)throw new Error("invalid callback: "+n);for(;++a<u;)if(e=(t=o[a]).type)i[e]=X(i[e],t.name,n);else if(null==n)for(e in i)i[e]=X(i[e],t.name,null);return this}for(;++a<u;)if((e=(t=o[a]).type)&&(e=j(i[e],t.name)))return e},copy:function(){var t={},n=this._;for(var e in n)t[e]=n[e].slice();return new H(t)},call:function(t,n){if((e=arguments.length-2)>0)for(var e,r,i=new Array(e),o=0;o<e;++o)i[o]=arguments[o+2];if(!this._.hasOwnProperty(t))throw new Error("unknown type: "+t);for(o=0,e=(r=this._[t]).length;o<e;++o)r[o].value.apply(n,i)},apply:function(t,n,e){if(!this._.hasOwnProperty(t))throw new Error("unknown type: "+t);for(var r=this._[t],i=0,o=r.length;i<o;++i)r[i].value.apply(n,e)}};var G="http://www.w3.org/1999/xhtml",V={svg:"http://www.w3.org/2000/svg",xhtml:G,xlink:"http://www.w3.org/1999/xlink",xml:"http://www.w3.org/XML/1998/namespace",xmlns:"http://www.w3.org/2000/xmlns/"};function $(t){var n=t+="",e=n.indexOf(":");return e>=0&&"xmlns"!==(n=t.slice(0,e))&&(t=t.slice(e+1)),V.hasOwnProperty(n)?{space:V[n],local:t}:t}function W(t){var n=$(t);return(n.local?function(t){return function(){return this.ownerDocument.createElementNS(t.space,t.local)}}:function(t){return function(){var n=this.ownerDocument,e=this.namespaceURI;return e===G&&n.documentElement.namespaceURI===G?n.createElement(t):n.createElementNS(e,t)}})(n)}function Z(){}function Q(t){return null==t?Z:function(){return this.querySelector(t)}}function J(){return[]}function K(t){return null==t?J:function(){return this.querySelectorAll(t)}}var tt=function(t){return function(){return this.matches(t)}};if("undefined"!=typeof document){var nt=document.documentElement;if(!nt.matches){var et=nt.webkitMatchesSelector||nt.msMatchesSelector||nt.mozMatchesSelector||nt.oMatchesSelector;tt=function(t){return function(){return et.call(this,t)}}}}var rt=tt;function it(t){return new Array(t.length)}function ot(t,n){this.ownerDocument=t.ownerDocument,this.namespaceURI=t.namespaceURI,this._next=null,this._parent=t,this.__data__=n}ot.prototype={constructor:ot,appendChild:function(t){return this._parent.insertBefore(t,this._next)},insertBefore:function(t,n){return this._parent.insertBefore(t,n)},querySelector:function(t){return this._parent.querySelector(t)},querySelectorAll:function(t){return this._parent.querySelectorAll(t)}};var at="$";function ut(t,n,e,r,i,o){for(var a,u=0,f=n.length,c=o.length;u<c;++u)(a=n[u])?(a.__data__=o[u],r[u]=a):e[u]=new ot(t,o[u]);for(;u<f;++u)(a=n[u])&&(i[u]=a)}function ft(t,n,e,r,i,o,a){var u,f,c,s={},l=n.length,h=o.length,d=new Array(l);for(u=0;u<l;++u)(f=n[u])&&(d[u]=c=at+a.call(f,f.__data__,u,n),c in s?i[u]=f:s[c]=f);for(u=0;u<h;++u)(f=s[c=at+a.call(t,o[u],u,o)])?(r[u]=f,f.__data__=o[u],s[c]=null):e[u]=new ot(t,o[u]);for(u=0;u<l;++u)(f=n[u])&&s[d[u]]===f&&(i[u]=f)}function ct(t,n){return t<n?-1:t>n?1:t>=n?0:NaN}function st(t){return t.ownerDocument&&t.ownerDocument.defaultView||t.document&&t||t.defaultView}function lt(t,n){return t.style.getPropertyValue(n)||st(t).getComputedStyle(t,null).getPropertyValue(n)}function ht(t){return t.trim().split(/^|\s+/)}function dt(t){return t.classList||new pt(t)}function pt(t){this._node=t,this._names=ht(t.getAttribute("class")||"")}function vt(t,n){for(var e=dt(t),r=-1,i=n.length;++r<i;)e.add(n[r])}function gt(t,n){for(var e=dt(t),r=-1,i=n.length;++r<i;)e.remove(n[r])}function yt(){this.textContent=""}function _t(){this.innerHTML=""}function bt(){this.nextSibling&&this.parentNode.appendChild(this)}function mt(){this.previousSibling&&this.parentNode.insertBefore(this,this.parentNode.firstChild)}function xt(){return null}function wt(){var t=this.parentNode;t&&t.removeChild(this)}function Mt(){return this.parentNode.insertBefore(this.cloneNode(!1),this.nextSibling)}function At(){return this.parentNode.insertBefore(this.cloneNode(!0),this.nextSibling)}pt.prototype={add:function(t){this._names.indexOf(t)<0&&(this._names.push(t),this._node.setAttribute("class",this._names.join(" ")))},remove:function(t){var n=this._names.indexOf(t);n>=0&&(this._names.splice(n,1),this._node.setAttribute("class",this._names.join(" ")))},contains:function(t){return this._names.indexOf(t)>=0}};var Tt={};(t.event=null,"undefined"!=typeof document)&&("onmouseenter"in document.documentElement||(Tt={mouseenter:"mouseover",mouseleave:"mouseout"}));function Nt(t,n,e){return t=St(t,n,e),function(n){var e=n.relatedTarget;e&&(e===this||8&e.compareDocumentPosition(this))||t.call(this,n)}}function St(n,e,r){return function(i){var o=t.event;t.event=i;try{n.call(this,this.__data__,e,r)}finally{t.event=o}}}function Et(t){return function(){var n=this.__on;if(n){for(var e,r=0,i=-1,o=n.length;r<o;++r)e=n[r],t.type&&e.type!==t.type||e.name!==t.name?n[++i]=e:this.removeEventListener(e.type,e.listener,e.capture);++i?n.length=i:delete this.__on}}}function kt(t,n,e){var r=Tt.hasOwnProperty(t.type)?Nt:St;return function(i,o,a){var u,f=this.__on,c=r(n,o,a);if(f)for(var s=0,l=f.length;s<l;++s)if((u=f[s]).type===t.type&&u.name===t.name)return this.removeEventListener(u.type,u.listener,u.capture),this.addEventListener(u.type,u.listener=c,u.capture=e),void(u.value=n);this.addEventListener(t.type,c,e),u={type:t.type,name:t.name,value:n,listener:c,capture:e},f?f.push(u):this.__on=[u]}}function Ct(n,e,r,i){var o=t.event;n.sourceEvent=t.event,t.event=n;try{return e.apply(r,i)}finally{t.event=o}}function Pt(t,n,e){var r=st(t),i=r.CustomEvent;"function"==typeof i?i=new i(n,e):(i=r.document.createEvent("Event"),e?(i.initEvent(n,e.bubbles,e.cancelable),i.detail=e.detail):i.initEvent(n,!1,!1)),t.dispatchEvent(i)}var zt=[null];function Rt(t,n){this._groups=t,this._parents=n}function Lt(){return new Rt([[document.documentElement]],zt)}function Dt(t){return"string"==typeof t?new Rt([[document.querySelector(t)]],[document.documentElement]):new Rt([[t]],zt)}Rt.prototype=Lt.prototype={constructor:Rt,select:function(t){"function"!=typeof t&&(t=Q(t));for(var n=this._groups,e=n.length,r=new Array(e),i=0;i<e;++i)for(var o,a,u=n[i],f=u.length,c=r[i]=new Array(f),s=0;s<f;++s)(o=u[s])&&(a=t.call(o,o.__data__,s,u))&&("__data__"in o&&(a.__data__=o.__data__),c[s]=a);return new Rt(r,this._parents)},selectAll:function(t){"function"!=typeof t&&(t=K(t));for(var n=this._groups,e=n.length,r=[],i=[],o=0;o<e;++o)for(var a,u=n[o],f=u.length,c=0;c<f;++c)(a=u[c])&&(r.push(t.call(a,a.__data__,c,u)),i.push(a));return new Rt(r,i)},filter:function(t){"function"!=typeof t&&(t=rt(t));for(var n=this._groups,e=n.length,r=new Array(e),i=0;i<e;++i)for(var o,a=n[i],u=a.length,f=r[i]=[],c=0;c<u;++c)(o=a[c])&&t.call(o,o.__data__,c,a)&&f.push(o);return new Rt(r,this._parents)},data:function(t,n){if(!t)return p=new Array(this.size()),s=-1,this.each(function(t){p[++s]=t}),p;var e,r=n?ft:ut,i=this._parents,o=this._groups;"function"!=typeof t&&(e=t,t=function(){return e});for(var a=o.length,u=new Array(a),f=new Array(a),c=new Array(a),s=0;s<a;++s){var l=i[s],h=o[s],d=h.length,p=t.call(l,l&&l.__data__,s,i),v=p.length,g=f[s]=new Array(v),y=u[s]=new Array(v);r(l,h,g,y,c[s]=new Array(d),p,n);for(var _,b,m=0,x=0;m<v;++m)if(_=g[m]){for(m>=x&&(x=m+1);!(b=y[x])&&++x<v;);_._next=b||null}}return(u=new Rt(u,i))._enter=f,u._exit=c,u},enter:function(){return new Rt(this._enter||this._groups.map(it),this._parents)},exit:function(){return new Rt(this._exit||this._groups.map(it),this._parents)},merge:function(t){for(var n=this._groups,e=t._groups,r=n.length,i=e.length,o=Math.min(r,i),a=new Array(r),u=0;u<o;++u)for(var f,c=n[u],s=e[u],l=c.length,h=a[u]=new Array(l),d=0;d<l;++d)(f=c[d]||s[d])&&(h[d]=f);for(;u<r;++u)a[u]=n[u];return new Rt(a,this._parents)},order:function(){for(var t=this._groups,n=-1,e=t.length;++n<e;)for(var r,i=t[n],o=i.length-1,a=i[o];--o>=0;)(r=i[o])&&(a&&a!==r.nextSibling&&a.parentNode.insertBefore(r,a),a=r);return this},sort:function(t){function n(n,e){return n&&e?t(n.__data__,e.__data__):!n-!e}t||(t=ct);for(var e=this._groups,r=e.length,i=new Array(r),o=0;o<r;++o){for(var a,u=e[o],f=u.length,c=i[o]=new Array(f),s=0;s<f;++s)(a=u[s])&&(c[s]=a);c.sort(n)}return new Rt(i,this._parents).order()},call:function(){var t=arguments[0];return arguments[0]=this,t.apply(null,arguments),this},nodes:function(){var t=new Array(this.size()),n=-1;return this.each(function(){t[++n]=this}),t},node:function(){for(var t=this._groups,n=0,e=t.length;n<e;++n)for(var r=t[n],i=0,o=r.length;i<o;++i){var a=r[i];if(a)return a}return null},size:function(){var t=0;return this.each(function(){++t}),t},empty:function(){return!this.node()},each:function(t){for(var n=this._groups,e=0,r=n.length;e<r;++e)for(var i,o=n[e],a=0,u=o.length;a<u;++a)(i=o[a])&&t.call(i,i.__data__,a,o);return this},attr:function(t,n){var e=$(t);if(arguments.length<2){var r=this.node();return e.local?r.getAttributeNS(e.space,e.local):r.getAttribute(e)}return this.each((null==n?e.local?function(t){return function(){this.removeAttributeNS(t.space,t.local)}}:function(t){return function(){this.removeAttribute(t)}}:"function"==typeof n?e.local?function(t,n){return function(){var e=n.apply(this,arguments);null==e?this.removeAttributeNS(t.space,t.local):this.setAttributeNS(t.space,t.local,e)}}:function(t,n){return function(){var e=n.apply(this,arguments);null==e?this.removeAttribute(t):this.setAttribute(t,e)}}:e.local?function(t,n){return function(){this.setAttributeNS(t.space,t.local,n)}}:function(t,n){return function(){this.setAttribute(t,n)}})(e,n))},style:function(t,n,e){return arguments.length>1?this.each((null==n?function(t){return function(){this.style.removeProperty(t)}}:"function"==typeof n?function(t,n,e){return function(){var r=n.apply(this,arguments);null==r?this.style.removeProperty(t):this.style.setProperty(t,r,e)}}:function(t,n,e){return function(){this.style.setProperty(t,n,e)}})(t,n,null==e?"":e)):lt(this.node(),t)},property:function(t,n){return arguments.length>1?this.each((null==n?function(t){return function(){delete this[t]}}:"function"==typeof n?function(t,n){return function(){var e=n.apply(this,arguments);null==e?delete this[t]:this[t]=e}}:function(t,n){return function(){this[t]=n}})(t,n)):this.node()[t]},classed:function(t,n){var e=ht(t+"");if(arguments.length<2){for(var r=dt(this.node()),i=-1,o=e.length;++i<o;)if(!r.contains(e[i]))return!1;return!0}return this.each(("function"==typeof n?function(t,n){return function(){(n.apply(this,arguments)?vt:gt)(this,t)}}:n?function(t){return function(){vt(this,t)}}:function(t){return function(){gt(this,t)}})(e,n))},text:function(t){return arguments.length?this.each(null==t?yt:("function"==typeof t?function(t){return function(){var n=t.apply(this,arguments);this.textContent=null==n?"":n}}:function(t){return function(){this.textContent=t}})(t)):this.node().textContent},html:function(t){return arguments.length?this.each(null==t?_t:("function"==typeof t?function(t){return function(){var n=t.apply(this,arguments);this.innerHTML=null==n?"":n}}:function(t){return function(){this.innerHTML=t}})(t)):this.node().innerHTML},raise:function(){return this.each(bt)},lower:function(){return this.each(mt)},append:function(t){var n="function"==typeof t?t:W(t);return this.select(function(){return this.appendChild(n.apply(this,arguments))})},insert:function(t,n){var e="function"==typeof t?t:W(t),r=null==n?xt:"function"==typeof n?n:Q(n);return this.select(function(){return this.insertBefore(e.apply(this,arguments),r.apply(this,arguments)||null)})},remove:function(){return this.each(wt)},clone:function(t){return this.select(t?At:Mt)},datum:function(t){return arguments.length?this.property("__data__",t):this.node().__data__},on:function(t,n,e){var r,i,o=function(t){return t.trim().split(/^|\s+/).map(function(t){var n="",e=t.indexOf(".");return e>=0&&(n=t.slice(e+1),t=t.slice(0,e)),{type:t,name:n}})}(t+""),a=o.length;if(!(arguments.length<2)){for(u=n?kt:Et,null==e&&(e=!1),r=0;r<a;++r)this.each(u(o[r],n,e));return this}var u=this.node().__on;if(u)for(var f,c=0,s=u.length;c<s;++c)for(r=0,f=u[c];r<a;++r)if((i=o[r]).type===f.type&&i.name===f.name)return f.value},dispatch:function(t,n){return this.each(("function"==typeof n?function(t,n){return function(){return Pt(this,t,n.apply(this,arguments))}}:function(t,n){return function(){return Pt(this,t,n)}})(t,n))}};var Ut=0;function qt(){return new Ot}function Ot(){this._="@"+(++Ut).toString(36)}function Yt(){for(var n,e=t.event;n=e.sourceEvent;)e=n;return e}function Bt(t,n){var e=t.ownerSVGElement||t;if(e.createSVGPoint){var r=e.createSVGPoint();return r.x=n.clientX,r.y=n.clientY,[(r=r.matrixTransform(t.getScreenCTM().inverse())).x,r.y]}var i=t.getBoundingClientRect();return[n.clientX-i.left-t.clientLeft,n.clientY-i.top-t.clientTop]}function Ft(t){var n=Yt();return n.changedTouches&&(n=n.changedTouches[0]),Bt(t,n)}function It(t,n,e){arguments.length<3&&(e=n,n=Yt().changedTouches);for(var r,i=0,o=n?n.length:0;i<o;++i)if((r=n[i]).identifier===e)return Bt(t,r);return null}function Ht(){t.event.stopImmediatePropagation()}function jt(){t.event.preventDefault(),t.event.stopImmediatePropagation()}function Xt(t){var n=t.document.documentElement,e=Dt(t).on("dragstart.drag",jt,!0);"onselectstart"in n?e.on("selectstart.drag",jt,!0):(n.__noselect=n.style.MozUserSelect,n.style.MozUserSelect="none")}function Gt(t,n){var e=t.document.documentElement,r=Dt(t).on("dragstart.drag",null);n&&(r.on("click.drag",jt,!0),setTimeout(function(){r.on("click.drag",null)},0)),"onselectstart"in e?r.on("selectstart.drag",null):(e.style.MozUserSelect=e.__noselect,delete e.__noselect)}function Vt(t){return function(){return t}}function $t(t,n,e,r,i,o,a,u,f,c){this.target=t,this.type=n,this.subject=e,this.identifier=r,this.active=i,this.x=o,this.y=a,this.dx=u,this.dy=f,this._=c}function Wt(){return!t.event.button}function Zt(){return this.parentNode}function Qt(n){return null==n?{x:t.event.x,y:t.event.y}:n}function Jt(){return"ontouchstart"in this}function Kt(t,n,e){t.prototype=n.prototype=e,e.constructor=t}function tn(t,n){var e=Object.create(t.prototype);for(var r in n)e[r]=n[r];return e}function nn(){}Ot.prototype=qt.prototype={constructor:Ot,get:function(t){for(var n=this._;!(n in t);)if(!(t=t.parentNode))return;return t[n]},set:function(t,n){return t[this._]=n},remove:function(t){return this._ in t&&delete t[this._]},toString:function(){return this._}},$t.prototype.on=function(){var t=this._.on.apply(this._,arguments);return t===this._?this:t};var en="\\s*([+-]?\\d+)\\s*",rn="\\s*([+-]?\\d*\\.?\\d+(?:[eE][+-]?\\d+)?)\\s*",on="\\s*([+-]?\\d*\\.?\\d+(?:[eE][+-]?\\d+)?)%\\s*",an=/^#([0-9a-f]{3})$/,un=/^#([0-9a-f]{6})$/,fn=new RegExp("^rgb\\("+[en,en,en]+"\\)$"),cn=new RegExp("^rgb\\("+[on,on,on]+"\\)$"),sn=new RegExp("^rgba\\("+[en,en,en,rn]+"\\)$"),ln=new RegExp("^rgba\\("+[on,on,on,rn]+"\\)$"),hn=new RegExp("^hsl\\("+[rn,on,on]+"\\)$"),dn=new RegExp("^hsla\\("+[rn,on,on,rn]+"\\)$"),pn={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074};function vn(t){var n;return t=(t+"").trim().toLowerCase(),(n=an.exec(t))?new mn((n=parseInt(n[1],16))>>8&15|n>>4&240,n>>4&15|240&n,(15&n)<<4|15&n,1):(n=un.exec(t))?gn(parseInt(n[1],16)):(n=fn.exec(t))?new mn(n[1],n[2],n[3],1):(n=cn.exec(t))?new mn(255*n[1]/100,255*n[2]/100,255*n[3]/100,1):(n=sn.exec(t))?yn(n[1],n[2],n[3],n[4]):(n=ln.exec(t))?yn(255*n[1]/100,255*n[2]/100,255*n[3]/100,n[4]):(n=hn.exec(t))?wn(n[1],n[2]/100,n[3]/100,1):(n=dn.exec(t))?wn(n[1],n[2]/100,n[3]/100,n[4]):pn.hasOwnProperty(t)?gn(pn[t]):"transparent"===t?new mn(NaN,NaN,NaN,0):null}function gn(t){return new mn(t>>16&255,t>>8&255,255&t,1)}function yn(t,n,e,r){return r<=0&&(t=n=e=NaN),new mn(t,n,e,r)}function _n(t){return t instanceof nn||(t=vn(t)),t?new mn((t=t.rgb()).r,t.g,t.b,t.opacity):new mn}function bn(t,n,e,r){return 1===arguments.length?_n(t):new mn(t,n,e,null==r?1:r)}function mn(t,n,e,r){this.r=+t,this.g=+n,this.b=+e,this.opacity=+r}function xn(t){return((t=Math.max(0,Math.min(255,Math.round(t)||0)))<16?"0":"")+t.toString(16)}function wn(t,n,e,r){return r<=0?t=n=e=NaN:e<=0||e>=1?t=n=NaN:n<=0&&(t=NaN),new An(t,n,e,r)}function Mn(t,n,e,r){return 1===arguments.length?function(t){if(t instanceof An)return new An(t.h,t.s,t.l,t.opacity);if(t instanceof nn||(t=vn(t)),!t)return new An;if(t instanceof An)return t;var n=(t=t.rgb()).r/255,e=t.g/255,r=t.b/255,i=Math.min(n,e,r),o=Math.max(n,e,r),a=NaN,u=o-i,f=(o+i)/2;return u?(a=n===o?(e-r)/u+6*(e<r):e===o?(r-n)/u+2:(n-e)/u+4,u/=f<.5?o+i:2-o-i,a*=60):u=f>0&&f<1?0:a,new An(a,u,f,t.opacity)}(t):new An(t,n,e,null==r?1:r)}function An(t,n,e,r){this.h=+t,this.s=+n,this.l=+e,this.opacity=+r}function Tn(t,n,e){return 255*(t<60?n+(e-n)*t/60:t<180?e:t<240?n+(e-n)*(240-t)/60:n)}Kt(nn,vn,{displayable:function(){return this.rgb().displayable()},hex:function(){return this.rgb().hex()},toString:function(){return this.rgb()+""}}),Kt(mn,bn,tn(nn,{brighter:function(t){return t=null==t?1/.7:Math.pow(1/.7,t),new mn(this.r*t,this.g*t,this.b*t,this.opacity)},darker:function(t){return t=null==t?.7:Math.pow(.7,t),new mn(this.r*t,this.g*t,this.b*t,this.opacity)},rgb:function(){return this},displayable:function(){return 0<=this.r&&this.r<=255&&0<=this.g&&this.g<=255&&0<=this.b&&this.b<=255&&0<=this.opacity&&this.opacity<=1},hex:function(){return"#"+xn(this.r)+xn(this.g)+xn(this.b)},toString:function(){var t=this.opacity;return(1===(t=isNaN(t)?1:Math.max(0,Math.min(1,t)))?"rgb(":"rgba(")+Math.max(0,Math.min(255,Math.round(this.r)||0))+", "+Math.max(0,Math.min(255,Math.round(this.g)||0))+", "+Math.max(0,Math.min(255,Math.round(this.b)||0))+(1===t?")":", "+t+")")}})),Kt(An,Mn,tn(nn,{brighter:function(t){return t=null==t?1/.7:Math.pow(1/.7,t),new An(this.h,this.s,this.l*t,this.opacity)},darker:function(t){return t=null==t?.7:Math.pow(.7,t),new An(this.h,this.s,this.l*t,this.opacity)},rgb:function(){var t=this.h%360+360*(this.h<0),n=isNaN(t)||isNaN(this.s)?0:this.s,e=this.l,r=e+(e<.5?e:1-e)*n,i=2*e-r;return new mn(Tn(t>=240?t-240:t+120,i,r),Tn(t,i,r),Tn(t<120?t+240:t-120,i,r),this.opacity)},displayable:function(){return(0<=this.s&&this.s<=1||isNaN(this.s))&&0<=this.l&&this.l<=1&&0<=this.opacity&&this.opacity<=1}}));var Nn=Math.PI/180,Sn=180/Math.PI,En=.96422,kn=1,Cn=.82521,Pn=4/29,zn=6/29,Rn=3*zn*zn,Ln=zn*zn*zn;function Dn(t){if(t instanceof qn)return new qn(t.l,t.a,t.b,t.opacity);if(t instanceof jn){if(isNaN(t.h))return new qn(t.l,0,0,t.opacity);var n=t.h*Nn;return new qn(t.l,Math.cos(n)*t.c,Math.sin(n)*t.c,t.opacity)}t instanceof mn||(t=_n(t));var e,r,i=Fn(t.r),o=Fn(t.g),a=Fn(t.b),u=On((.2225045*i+.7168786*o+.0606169*a)/kn);return i===o&&o===a?e=r=u:(e=On((.4360747*i+.3850649*o+.1430804*a)/En),r=On((.0139322*i+.0971045*o+.7141733*a)/Cn)),new qn(116*u-16,500*(e-u),200*(u-r),t.opacity)}function Un(t,n,e,r){return 1===arguments.length?Dn(t):new qn(t,n,e,null==r?1:r)}function qn(t,n,e,r){this.l=+t,this.a=+n,this.b=+e,this.opacity=+r}function On(t){return t>Ln?Math.pow(t,1/3):t/Rn+Pn}function Yn(t){return t>zn?t*t*t:Rn*(t-Pn)}function Bn(t){return 255*(t<=.0031308?12.92*t:1.055*Math.pow(t,1/2.4)-.055)}function Fn(t){return(t/=255)<=.04045?t/12.92:Math.pow((t+.055)/1.055,2.4)}function In(t){if(t instanceof jn)return new jn(t.h,t.c,t.l,t.opacity);if(t instanceof qn||(t=Dn(t)),0===t.a&&0===t.b)return new jn(NaN,0,t.l,t.opacity);var n=Math.atan2(t.b,t.a)*Sn;return new jn(n<0?n+360:n,Math.sqrt(t.a*t.a+t.b*t.b),t.l,t.opacity)}function Hn(t,n,e,r){return 1===arguments.length?In(t):new jn(t,n,e,null==r?1:r)}function jn(t,n,e,r){this.h=+t,this.c=+n,this.l=+e,this.opacity=+r}Kt(qn,Un,tn(nn,{brighter:function(t){return new qn(this.l+18*(null==t?1:t),this.a,this.b,this.opacity)},darker:function(t){return new qn(this.l-18*(null==t?1:t),this.a,this.b,this.opacity)},rgb:function(){var t=(this.l+16)/116,n=isNaN(this.a)?t:t+this.a/500,e=isNaN(this.b)?t:t-this.b/200;return new mn(Bn(3.1338561*(n=En*Yn(n))-1.6168667*(t=kn*Yn(t))-.4906146*(e=Cn*Yn(e))),Bn(-.9787684*n+1.9161415*t+.033454*e),Bn(.0719453*n-.2289914*t+1.4052427*e),this.opacity)}})),Kt(jn,Hn,tn(nn,{brighter:function(t){return new jn(this.h,this.c,this.l+18*(null==t?1:t),this.opacity)},darker:function(t){return new jn(this.h,this.c,this.l-18*(null==t?1:t),this.opacity)},rgb:function(){return Dn(this).rgb()}}));var Xn=-.14861,Gn=1.78277,Vn=-.29227,$n=-.90649,Wn=1.97294,Zn=Wn*$n,Qn=Wn*Gn,Jn=Gn*Vn-$n*Xn;function Kn(t,n,e,r){return 1===arguments.length?function(t){if(t instanceof te)return new te(t.h,t.s,t.l,t.opacity);t instanceof mn||(t=_n(t));var n=t.r/255,e=t.g/255,r=t.b/255,i=(Jn*r+Zn*n-Qn*e)/(Jn+Zn-Qn),o=r-i,a=(Wn*(e-i)-Vn*o)/$n,u=Math.sqrt(a*a+o*o)/(Wn*i*(1-i)),f=u?Math.atan2(a,o)*Sn-120:NaN;return new te(f<0?f+360:f,u,i,t.opacity)}(t):new te(t,n,e,null==r?1:r)}function te(t,n,e,r){this.h=+t,this.s=+n,this.l=+e,this.opacity=+r}function ne(t,n,e,r,i){var o=t*t,a=o*t;return((1-3*t+3*o-a)*n+(4-6*o+3*a)*e+(1+3*t+3*o-3*a)*r+a*i)/6}function ee(t){var n=t.length-1;return function(e){var r=e<=0?e=0:e>=1?(e=1,n-1):Math.floor(e*n),i=t[r],o=t[r+1],a=r>0?t[r-1]:2*i-o,u=r<n-1?t[r+2]:2*o-i;return ne((e-r/n)*n,a,i,o,u)}}function re(t){var n=t.length;return function(e){var r=Math.floor(((e%=1)<0?++e:e)*n),i=t[(r+n-1)%n],o=t[r%n],a=t[(r+1)%n],u=t[(r+2)%n];return ne((e-r/n)*n,i,o,a,u)}}function ie(t){return function(){return t}}function oe(t,n){return function(e){return t+e*n}}function ae(t,n){var e=n-t;return e?oe(t,e>180||e<-180?e-360*Math.round(e/360):e):ie(isNaN(t)?n:t)}function ue(t){return 1==(t=+t)?fe:function(n,e){return e-n?function(t,n,e){return t=Math.pow(t,e),n=Math.pow(n,e)-t,e=1/e,function(r){return Math.pow(t+r*n,e)}}(n,e,t):ie(isNaN(n)?e:n)}}function fe(t,n){var e=n-t;return e?oe(t,e):ie(isNaN(t)?n:t)}Kt(te,Kn,tn(nn,{brighter:function(t){return t=null==t?1/.7:Math.pow(1/.7,t),new te(this.h,this.s,this.l*t,this.opacity)},darker:function(t){return t=null==t?.7:Math.pow(.7,t),new te(this.h,this.s,this.l*t,this.opacity)},rgb:function(){var t=isNaN(this.h)?0:(this.h+120)*Nn,n=+this.l,e=isNaN(this.s)?0:this.s*n*(1-n),r=Math.cos(t),i=Math.sin(t);return new mn(255*(n+e*(Xn*r+Gn*i)),255*(n+e*(Vn*r+$n*i)),255*(n+e*(Wn*r)),this.opacity)}}));var ce=function t(n){var e=ue(n);function r(t,n){var r=e((t=bn(t)).r,(n=bn(n)).r),i=e(t.g,n.g),o=e(t.b,n.b),a=fe(t.opacity,n.opacity);return function(n){return t.r=r(n),t.g=i(n),t.b=o(n),t.opacity=a(n),t+""}}return r.gamma=t,r}(1);function se(t){return function(n){var e,r,i=n.length,o=new Array(i),a=new Array(i),u=new Array(i);for(e=0;e<i;++e)r=bn(n[e]),o[e]=r.r||0,a[e]=r.g||0,u[e]=r.b||0;return o=t(o),a=t(a),u=t(u),r.opacity=1,function(t){return r.r=o(t),r.g=a(t),r.b=u(t),r+""}}}var le=se(ee),he=se(re);function de(t,n){var e,r=n?n.length:0,i=t?Math.min(r,t.length):0,o=new Array(i),a=new Array(r);for(e=0;e<i;++e)o[e]=me(t[e],n[e]);for(;e<r;++e)a[e]=n[e];return function(t){for(e=0;e<i;++e)a[e]=o[e](t);return a}}function pe(t,n){var e=new Date;return n-=t=+t,function(r){return e.setTime(t+n*r),e}}function ve(t,n){return n-=t=+t,function(e){return t+n*e}}function ge(t,n){var e,r={},i={};for(e in null!==t&&"object"==typeof t||(t={}),null!==n&&"object"==typeof n||(n={}),n)e in t?r[e]=me(t[e],n[e]):i[e]=n[e];return function(t){for(e in r)i[e]=r[e](t);return i}}var ye=/[-+]?(?:\d+\.?\d*|\.?\d+)(?:[eE][-+]?\d+)?/g,_e=new RegExp(ye.source,"g");function be(t,n){var e,r,i,o=ye.lastIndex=_e.lastIndex=0,a=-1,u=[],f=[];for(t+="",n+="";(e=ye.exec(t))&&(r=_e.exec(n));)(i=r.index)>o&&(i=n.slice(o,i),u[a]?u[a]+=i:u[++a]=i),(e=e[0])===(r=r[0])?u[a]?u[a]+=r:u[++a]=r:(u[++a]=null,f.push({i:a,x:ve(e,r)})),o=_e.lastIndex;return o<n.length&&(i=n.slice(o),u[a]?u[a]+=i:u[++a]=i),u.length<2?f[0]?function(t){return function(n){return t(n)+""}}(f[0].x):function(t){return function(){return t}}(n):(n=f.length,function(t){for(var e,r=0;r<n;++r)u[(e=f[r]).i]=e.x(t);return u.join("")})}function me(t,n){var e,r=typeof n;return null==n||"boolean"===r?ie(n):("number"===r?ve:"string"===r?(e=vn(n))?(n=e,ce):be:n instanceof vn?ce:n instanceof Date?pe:Array.isArray(n)?de:"function"!=typeof n.valueOf&&"function"!=typeof n.toString||isNaN(n)?ge:ve)(t,n)}function xe(t,n){return n-=t=+t,function(e){return Math.round(t+n*e)}}var we,Me,Ae,Te,Ne=180/Math.PI,Se={translateX:0,translateY:0,rotate:0,skewX:0,scaleX:1,scaleY:1};function Ee(t,n,e,r,i,o){var a,u,f;return(a=Math.sqrt(t*t+n*n))&&(t/=a,n/=a),(f=t*e+n*r)&&(e-=t*f,r-=n*f),(u=Math.sqrt(e*e+r*r))&&(e/=u,r/=u,f/=u),t*r<n*e&&(t=-t,n=-n,f=-f,a=-a),{translateX:i,translateY:o,rotate:Math.atan2(n,t)*Ne,skewX:Math.atan(f)*Ne,scaleX:a,scaleY:u}}function ke(t,n,e,r){function i(t){return t.length?t.pop()+" ":""}return function(o,a){var u=[],f=[];return o=t(o),a=t(a),function(t,r,i,o,a,u){if(t!==i||r!==o){var f=a.push("translate(",null,n,null,e);u.push({i:f-4,x:ve(t,i)},{i:f-2,x:ve(r,o)})}else(i||o)&&a.push("translate("+i+n+o+e)}(o.translateX,o.translateY,a.translateX,a.translateY,u,f),function(t,n,e,o){t!==n?(t-n>180?n+=360:n-t>180&&(t+=360),o.push({i:e.push(i(e)+"rotate(",null,r)-2,x:ve(t,n)})):n&&e.push(i(e)+"rotate("+n+r)}(o.rotate,a.rotate,u,f),function(t,n,e,o){t!==n?o.push({i:e.push(i(e)+"skewX(",null,r)-2,x:ve(t,n)}):n&&e.push(i(e)+"skewX("+n+r)}(o.skewX,a.skewX,u,f),function(t,n,e,r,o,a){if(t!==e||n!==r){var u=o.push(i(o)+"scale(",null,",",null,")");a.push({i:u-4,x:ve(t,e)},{i:u-2,x:ve(n,r)})}else 1===e&&1===r||o.push(i(o)+"scale("+e+","+r+")")}(o.scaleX,o.scaleY,a.scaleX,a.scaleY,u,f),o=a=null,function(t){for(var n,e=-1,r=f.length;++e<r;)u[(n=f[e]).i]=n.x(t);return u.join("")}}}var Ce=ke(function(t){return"none"===t?Se:(we||(we=document.createElement("DIV"),Me=document.documentElement,Ae=document.defaultView),we.style.transform=t,t=Ae.getComputedStyle(Me.appendChild(we),null).getPropertyValue("transform"),Me.removeChild(we),Ee(+(t=t.slice(7,-1).split(","))[0],+t[1],+t[2],+t[3],+t[4],+t[5]))},"px, ","px)","deg)"),Pe=ke(function(t){return null==t?Se:(Te||(Te=document.createElementNS("http://www.w3.org/2000/svg","g")),Te.setAttribute("transform",t),(t=Te.transform.baseVal.consolidate())?Ee((t=t.matrix).a,t.b,t.c,t.d,t.e,t.f):Se)},", ",")",")"),ze=Math.SQRT2,Re=2,Le=4,De=1e-12;function Ue(t){return((t=Math.exp(t))+1/t)/2}function qe(t,n){var e,r,i=t[0],o=t[1],a=t[2],u=n[0],f=n[1],c=n[2],s=u-i,l=f-o,h=s*s+l*l;if(h<De)r=Math.log(c/a)/ze,e=function(t){return[i+t*s,o+t*l,a*Math.exp(ze*t*r)]};else{var d=Math.sqrt(h),p=(c*c-a*a+Le*h)/(2*a*Re*d),v=(c*c-a*a-Le*h)/(2*c*Re*d),g=Math.log(Math.sqrt(p*p+1)-p),y=Math.log(Math.sqrt(v*v+1)-v);r=(y-g)/ze,e=function(t){var n,e=t*r,u=Ue(g),f=a/(Re*d)*(u*(n=ze*e+g,((n=Math.exp(2*n))-1)/(n+1))-function(t){return((t=Math.exp(t))-1/t)/2}(g));return[i+f*s,o+f*l,a*u/Ue(ze*e+g)]}}return e.duration=1e3*r,e}function Oe(t){return function(n,e){var r=t((n=Mn(n)).h,(e=Mn(e)).h),i=fe(n.s,e.s),o=fe(n.l,e.l),a=fe(n.opacity,e.opacity);return function(t){return n.h=r(t),n.s=i(t),n.l=o(t),n.opacity=a(t),n+""}}}var Ye=Oe(ae),Be=Oe(fe);function Fe(t){return function(n,e){var r=t((n=Hn(n)).h,(e=Hn(e)).h),i=fe(n.c,e.c),o=fe(n.l,e.l),a=fe(n.opacity,e.opacity);return function(t){return n.h=r(t),n.c=i(t),n.l=o(t),n.opacity=a(t),n+""}}}var Ie=Fe(ae),He=Fe(fe);function je(t){return function n(e){function r(n,r){var i=t((n=Kn(n)).h,(r=Kn(r)).h),o=fe(n.s,r.s),a=fe(n.l,r.l),u=fe(n.opacity,r.opacity);return function(t){return n.h=i(t),n.s=o(t),n.l=a(Math.pow(t,e)),n.opacity=u(t),n+""}}return e=+e,r.gamma=n,r}(1)}var Xe=je(ae),Ge=je(fe);var Ve,$e,We=0,Ze=0,Qe=0,Je=1e3,Ke=0,tr=0,nr=0,er="object"==typeof performance&&performance.now?performance:Date,rr="object"==typeof window&&window.requestAnimationFrame?window.requestAnimationFrame.bind(window):function(t){setTimeout(t,17)};function ir(){return tr||(rr(or),tr=er.now()+nr)}function or(){tr=0}function ar(){this._call=this._time=this._next=null}function ur(t,n,e){var r=new ar;return r.restart(t,n,e),r}function fr(){ir(),++We;for(var t,n=Ve;n;)(t=tr-n._time)>=0&&n._call.call(null,t),n=n._next;--We}function cr(){tr=(Ke=er.now())+nr,We=Ze=0;try{fr()}finally{We=0,function(){var t,n,e=Ve,r=1/0;for(;e;)e._call?(r>e._time&&(r=e._time),t=e,e=e._next):(n=e._next,e._next=null,e=t?t._next=n:Ve=n);$e=t,lr(r)}(),tr=0}}function sr(){var t=er.now(),n=t-Ke;n>Je&&(nr-=n,Ke=t)}function lr(t){We||(Ze&&(Ze=clearTimeout(Ze)),t-tr>24?(t<1/0&&(Ze=setTimeout(cr,t-er.now()-nr)),Qe&&(Qe=clearInterval(Qe))):(Qe||(Ke=er.now(),Qe=setInterval(sr,Je)),We=1,rr(cr)))}function hr(t,n,e){var r=new ar;return n=null==n?0:+n,r.restart(function(e){r.stop(),t(e+n)},n,e),r}ar.prototype=ur.prototype={constructor:ar,restart:function(t,n,e){if("function"!=typeof t)throw new TypeError("callback is not a function");e=(null==e?ir():+e)+(null==n?0:+n),this._next||$e===this||($e?$e._next=this:Ve=this,$e=this),this._call=t,this._time=e,lr()},stop:function(){this._call&&(this._call=null,this._time=1/0,lr())}};var dr=I("start","end","interrupt"),pr=[],vr=0,gr=1,yr=2,_r=3,br=4,mr=5,xr=6;function wr(t,n,e,r,i,o){var a=t.__transition;if(a){if(e in a)return}else t.__transition={};!function(t,n,e){var r,i=t.__transition;function o(f){var c,s,l,h;if(e.state!==gr)return u();for(c in i)if((h=i[c]).name===e.name){if(h.state===_r)return hr(o);h.state===br?(h.state=xr,h.timer.stop(),h.on.call("interrupt",t,t.__data__,h.index,h.group),delete i[c]):+c<n&&(h.state=xr,h.timer.stop(),delete i[c])}if(hr(function(){e.state===_r&&(e.state=br,e.timer.restart(a,e.delay,e.time),a(f))}),e.state=yr,e.on.call("start",t,t.__data__,e.index,e.group),e.state===yr){for(e.state=_r,r=new Array(l=e.tween.length),c=0,s=-1;c<l;++c)(h=e.tween[c].value.call(t,t.__data__,e.index,e.group))&&(r[++s]=h);r.length=s+1}}function a(n){for(var i=n<e.duration?e.ease.call(null,n/e.duration):(e.timer.restart(u),e.state=mr,1),o=-1,a=r.length;++o<a;)r[o].call(null,i);e.state===mr&&(e.on.call("end",t,t.__data__,e.index,e.group),u())}function u(){for(var r in e.state=xr,e.timer.stop(),delete i[n],i)return;delete t.__transition}i[n]=e,e.timer=ur(function(t){e.state=gr,e.timer.restart(o,e.delay,e.time),e.delay<=t&&o(t-e.delay)},0,e.time)}(t,e,{name:n,index:r,group:i,on:dr,tween:pr,time:o.time,delay:o.delay,duration:o.duration,ease:o.ease,timer:null,state:vr})}function Mr(t,n){var e=Tr(t,n);if(e.state>vr)throw new Error("too late; already scheduled");return e}function Ar(t,n){var e=Tr(t,n);if(e.state>yr)throw new Error("too late; already started");return e}function Tr(t,n){var e=t.__transition;if(!e||!(e=e[n]))throw new Error("transition not found");return e}function Nr(t,n){var e,r,i,o=t.__transition,a=!0;if(o){for(i in n=null==n?null:n+"",o)(e=o[i]).name===n?(r=e.state>yr&&e.state<mr,e.state=xr,e.timer.stop(),r&&e.on.call("interrupt",t,t.__data__,e.index,e.group),delete o[i]):a=!1;a&&delete t.__transition}}function Sr(t,n,e){var r=t._id;return t.each(function(){var t=Ar(this,r);(t.value||(t.value={}))[n]=e.apply(this,arguments)}),function(t){return Tr(t,r).value[n]}}function Er(t,n){var e;return("number"==typeof n?ve:n instanceof vn?ce:(e=vn(n))?(n=e,ce):be)(t,n)}var kr=Lt.prototype.constructor;var Cr=0;function Pr(t,n,e,r){this._groups=t,this._parents=n,this._name=e,this._id=r}function zr(t){return Lt().transition(t)}function Rr(){return++Cr}var Lr=Lt.prototype;function Dr(t){return((t*=2)<=1?t*t:--t*(2-t)+1)/2}function Ur(t){return((t*=2)<=1?t*t*t:(t-=2)*t*t+2)/2}Pr.prototype=zr.prototype={constructor:Pr,select:function(t){var n=this._name,e=this._id;"function"!=typeof t&&(t=Q(t));for(var r=this._groups,i=r.length,o=new Array(i),a=0;a<i;++a)for(var u,f,c=r[a],s=c.length,l=o[a]=new Array(s),h=0;h<s;++h)(u=c[h])&&(f=t.call(u,u.__data__,h,c))&&("__data__"in u&&(f.__data__=u.__data__),l[h]=f,wr(l[h],n,e,h,l,Tr(u,e)));return new Pr(o,this._parents,n,e)},selectAll:function(t){var n=this._name,e=this._id;"function"!=typeof t&&(t=K(t));for(var r=this._groups,i=r.length,o=[],a=[],u=0;u<i;++u)for(var f,c=r[u],s=c.length,l=0;l<s;++l)if(f=c[l]){for(var h,d=t.call(f,f.__data__,l,c),p=Tr(f,e),v=0,g=d.length;v<g;++v)(h=d[v])&&wr(h,n,e,v,d,p);o.push(d),a.push(f)}return new Pr(o,a,n,e)},filter:function(t){"function"!=typeof t&&(t=rt(t));for(var n=this._groups,e=n.length,r=new Array(e),i=0;i<e;++i)for(var o,a=n[i],u=a.length,f=r[i]=[],c=0;c<u;++c)(o=a[c])&&t.call(o,o.__data__,c,a)&&f.push(o);return new Pr(r,this._parents,this._name,this._id)},merge:function(t){if(t._id!==this._id)throw new Error;for(var n=this._groups,e=t._groups,r=n.length,i=e.length,o=Math.min(r,i),a=new Array(r),u=0;u<o;++u)for(var f,c=n[u],s=e[u],l=c.length,h=a[u]=new Array(l),d=0;d<l;++d)(f=c[d]||s[d])&&(h[d]=f);for(;u<r;++u)a[u]=n[u];return new Pr(a,this._parents,this._name,this._id)},selection:function(){return new kr(this._groups,this._parents)},transition:function(){for(var t=this._name,n=this._id,e=Rr(),r=this._groups,i=r.length,o=0;o<i;++o)for(var a,u=r[o],f=u.length,c=0;c<f;++c)if(a=u[c]){var s=Tr(a,n);wr(a,t,e,c,u,{time:s.time+s.delay+s.duration,delay:0,duration:s.duration,ease:s.ease})}return new Pr(r,this._parents,t,e)},call:Lr.call,nodes:Lr.nodes,node:Lr.node,size:Lr.size,empty:Lr.empty,each:Lr.each,on:function(t,n){var e=this._id;return arguments.length<2?Tr(this.node(),e).on.on(t):this.each(function(t,n,e){var r,i,o=function(t){return(t+"").trim().split(/^|\s+/).every(function(t){var n=t.indexOf(".");return n>=0&&(t=t.slice(0,n)),!t||"start"===t})}(n)?Mr:Ar;return function(){var a=o(this,t),u=a.on;u!==r&&(i=(r=u).copy()).on(n,e),a.on=i}}(e,t,n))},attr:function(t,n){var e=$(t),r="transform"===e?Pe:Er;return this.attrTween(t,"function"==typeof n?(e.local?function(t,n,e){var r,i,o;return function(){var a,u=e(this);if(null!=u)return(a=this.getAttributeNS(t.space,t.local))===u?null:a===r&&u===i?o:o=n(r=a,i=u);this.removeAttributeNS(t.space,t.local)}}:function(t,n,e){var r,i,o;return function(){var a,u=e(this);if(null!=u)return(a=this.getAttribute(t))===u?null:a===r&&u===i?o:o=n(r=a,i=u);this.removeAttribute(t)}})(e,r,Sr(this,"attr."+t,n)):null==n?(e.local?function(t){return function(){this.removeAttributeNS(t.space,t.local)}}:function(t){return function(){this.removeAttribute(t)}})(e):(e.local?function(t,n,e){var r,i;return function(){var o=this.getAttributeNS(t.space,t.local);return o===e?null:o===r?i:i=n(r=o,e)}}:function(t,n,e){var r,i;return function(){var o=this.getAttribute(t);return o===e?null:o===r?i:i=n(r=o,e)}})(e,r,n+""))},attrTween:function(t,n){var e="attr."+t;if(arguments.length<2)return(e=this.tween(e))&&e._value;if(null==n)return this.tween(e,null);if("function"!=typeof n)throw new Error;var r=$(t);return this.tween(e,(r.local?function(t,n){function e(){var e=this,r=n.apply(e,arguments);return r&&function(n){e.setAttributeNS(t.space,t.local,r(n))}}return e._value=n,e}:function(t,n){function e(){var e=this,r=n.apply(e,arguments);return r&&function(n){e.setAttribute(t,r(n))}}return e._value=n,e})(r,n))},style:function(t,n,e){var r="transform"==(t+="")?Ce:Er;return null==n?this.styleTween(t,function(t,n){var e,r,i;return function(){var o=lt(this,t),a=(this.style.removeProperty(t),lt(this,t));return o===a?null:o===e&&a===r?i:i=n(e=o,r=a)}}(t,r)).on("end.style."+t,function(t){return function(){this.style.removeProperty(t)}}(t)):this.styleTween(t,"function"==typeof n?function(t,n,e){var r,i,o;return function(){var a=lt(this,t),u=e(this);return null==u&&(this.style.removeProperty(t),u=lt(this,t)),a===u?null:a===r&&u===i?o:o=n(r=a,i=u)}}(t,r,Sr(this,"style."+t,n)):function(t,n,e){var r,i;return function(){var o=lt(this,t);return o===e?null:o===r?i:i=n(r=o,e)}}(t,r,n+""),e)},styleTween:function(t,n,e){var r="style."+(t+="");if(arguments.length<2)return(r=this.tween(r))&&r._value;if(null==n)return this.tween(r,null);if("function"!=typeof n)throw new Error;return this.tween(r,function(t,n,e){function r(){var r=this,i=n.apply(r,arguments);return i&&function(n){r.style.setProperty(t,i(n),e)}}return r._value=n,r}(t,n,null==e?"":e))},text:function(t){return this.tween("text","function"==typeof t?function(t){return function(){var n=t(this);this.textContent=null==n?"":n}}(Sr(this,"text",t)):function(t){return function(){this.textContent=t}}(null==t?"":t+""))},remove:function(){return this.on("end.remove",(t=this._id,function(){var n=this.parentNode;for(var e in this.__transition)if(+e!==t)return;n&&n.removeChild(this)}));var t},tween:function(t,n){var e=this._id;if(t+="",arguments.length<2){for(var r,i=Tr(this.node(),e).tween,o=0,a=i.length;o<a;++o)if((r=i[o]).name===t)return r.value;return null}return this.each((null==n?function(t,n){var e,r;return function(){var i=Ar(this,t),o=i.tween;if(o!==e)for(var a=0,u=(r=e=o).length;a<u;++a)if(r[a].name===n){(r=r.slice()).splice(a,1);break}i.tween=r}}:function(t,n,e){var r,i;if("function"!=typeof e)throw new Error;return function(){var o=Ar(this,t),a=o.tween;if(a!==r){i=(r=a).slice();for(var u={name:n,value:e},f=0,c=i.length;f<c;++f)if(i[f].name===n){i[f]=u;break}f===c&&i.push(u)}o.tween=i}})(e,t,n))},delay:function(t){var n=this._id;return arguments.length?this.each(("function"==typeof t?function(t,n){return function(){Mr(this,t).delay=+n.apply(this,arguments)}}:function(t,n){return n=+n,function(){Mr(this,t).delay=n}})(n,t)):Tr(this.node(),n).delay},duration:function(t){var n=this._id;return arguments.length?this.each(("function"==typeof t?function(t,n){return function(){Ar(this,t).duration=+n.apply(this,arguments)}}:function(t,n){return n=+n,function(){Ar(this,t).duration=n}})(n,t)):Tr(this.node(),n).duration},ease:function(t){var n=this._id;return arguments.length?this.each(function(t,n){if("function"!=typeof n)throw new Error;return function(){Ar(this,t).ease=n}}(n,t)):Tr(this.node(),n).ease}};var qr=function t(n){function e(t){return Math.pow(t,n)}return n=+n,e.exponent=t,e}(3),Or=function t(n){function e(t){return 1-Math.pow(1-t,n)}return n=+n,e.exponent=t,e}(3),Yr=function t(n){function e(t){return((t*=2)<=1?Math.pow(t,n):2-Math.pow(2-t,n))/2}return n=+n,e.exponent=t,e}(3),Br=Math.PI,Fr=Br/2;function Ir(t){return(1-Math.cos(Br*t))/2}function Hr(t){return((t*=2)<=1?Math.pow(2,10*t-10):2-Math.pow(2,10-10*t))/2}function jr(t){return((t*=2)<=1?1-Math.sqrt(1-t*t):Math.sqrt(1-(t-=2)*t)+1)/2}var Xr=4/11,Gr=6/11,Vr=8/11,$r=.75,Wr=9/11,Zr=10/11,Qr=.9375,Jr=21/22,Kr=63/64,ti=1/Xr/Xr;function ni(t){return(t=+t)<Xr?ti*t*t:t<Vr?ti*(t-=Gr)*t+$r:t<Zr?ti*(t-=Wr)*t+Qr:ti*(t-=Jr)*t+Kr}var ei=function t(n){function e(t){return t*t*((n+1)*t-n)}return n=+n,e.overshoot=t,e}(1.70158),ri=function t(n){function e(t){return--t*t*((n+1)*t+n)+1}return n=+n,e.overshoot=t,e}(1.70158),ii=function t(n){function e(t){return((t*=2)<1?t*t*((n+1)*t-n):(t-=2)*t*((n+1)*t+n)+2)/2}return n=+n,e.overshoot=t,e}(1.70158),oi=2*Math.PI,ai=function t(n,e){var r=Math.asin(1/(n=Math.max(1,n)))*(e/=oi);function i(t){return n*Math.pow(2,10*--t)*Math.sin((r-t)/e)}return i.amplitude=function(n){return t(n,e*oi)},i.period=function(e){return t(n,e)},i}(1,.3),ui=function t(n,e){var r=Math.asin(1/(n=Math.max(1,n)))*(e/=oi);function i(t){return 1-n*Math.pow(2,-10*(t=+t))*Math.sin((t+r)/e)}return i.amplitude=function(n){return t(n,e*oi)},i.period=function(e){return t(n,e)},i}(1,.3),fi=function t(n,e){var r=Math.asin(1/(n=Math.max(1,n)))*(e/=oi);function i(t){return((t=2*t-1)<0?n*Math.pow(2,10*t)*Math.sin((r-t)/e):2-n*Math.pow(2,-10*t)*Math.sin((r+t)/e))/2}return i.amplitude=function(n){return t(n,e*oi)},i.period=function(e){return t(n,e)},i}(1,.3),ci={time:null,delay:0,duration:250,ease:Ur};function si(t,n){for(var e;!(e=t.__transition)||!(e=e[n]);)if(!(t=t.parentNode))return ci.time=ir(),ci;return e}Lt.prototype.interrupt=function(t){return this.each(function(){Nr(this,t)})},Lt.prototype.transition=function(t){var n,e;t instanceof Pr?(n=t._id,t=t._name):(n=Rr(),(e=ci).time=ir(),t=null==t?null:t+"");for(var r=this._groups,i=r.length,o=0;o<i;++o)for(var a,u=r[o],f=u.length,c=0;c<f;++c)(a=u[c])&&wr(a,t,n,c,u,e||si(a,n));return new Pr(r,this._parents,t,n)};var li=[null];function hi(t){return function(){return t}}function di(t,n,e){this.target=t,this.type=n,this.selection=e}function pi(){t.event.stopImmediatePropagation()}function vi(){t.event.preventDefault(),t.event.stopImmediatePropagation()}var gi={name:"drag"},yi={name:"space"},_i={name:"handle"},bi={name:"center"},mi={name:"x",handles:["e","w"].map(Ei),input:function(t,n){return t&&[[t[0],n[0][1]],[t[1],n[1][1]]]},output:function(t){return t&&[t[0][0],t[1][0]]}},xi={name:"y",handles:["n","s"].map(Ei),input:function(t,n){return t&&[[n[0][0],t[0]],[n[1][0],t[1]]]},output:function(t){return t&&[t[0][1],t[1][1]]}},wi={name:"xy",handles:["n","e","s","w","nw","ne","se","sw"].map(Ei),input:function(t){return t},output:function(t){return t}},Mi={overlay:"crosshair",selection:"move",n:"ns-resize",e:"ew-resize",s:"ns-resize",w:"ew-resize",nw:"nwse-resize",ne:"nesw-resize",se:"nwse-resize",sw:"nesw-resize"},Ai={e:"w",w:"e",nw:"ne",ne:"nw",se:"sw",sw:"se"},Ti={n:"s",s:"n",nw:"sw",ne:"se",se:"ne",sw:"nw"},Ni={overlay:1,selection:1,n:null,e:1,s:null,w:-1,nw:-1,ne:1,se:1,sw:-1},Si={overlay:1,selection:1,n:-1,e:null,s:1,w:null,nw:-1,ne:-1,se:1,sw:1};function Ei(t){return{type:t}}function ki(){return!t.event.button}function Ci(){var t=this.ownerSVGElement||this;return[[0,0],[t.width.baseVal.value,t.height.baseVal.value]]}function Pi(t){for(;!t.__brush;)if(!(t=t.parentNode))return;return t.__brush}function zi(t){return t[0][0]===t[1][0]||t[0][1]===t[1][1]}function Ri(n){var e,r=Ci,i=ki,o=I(u,"start","brush","end"),a=6;function u(t){var e=t.property("__brush",h).selectAll(".overlay").data([Ei("overlay")]);e.enter().append("rect").attr("class","overlay").attr("pointer-events","all").attr("cursor",Mi.overlay).merge(e).each(function(){var t=Pi(this).extent;Dt(this).attr("x",t[0][0]).attr("y",t[0][1]).attr("width",t[1][0]-t[0][0]).attr("height",t[1][1]-t[0][1])}),t.selectAll(".selection").data([Ei("selection")]).enter().append("rect").attr("class","selection").attr("cursor",Mi.selection).attr("fill","#777").attr("fill-opacity",.3).attr("stroke","#fff").attr("shape-rendering","crispEdges");var r=t.selectAll(".handle").data(n.handles,function(t){return t.type});r.exit().remove(),r.enter().append("rect").attr("class",function(t){return"handle handle--"+t.type}).attr("cursor",function(t){return Mi[t.type]}),t.each(f).attr("fill","none").attr("pointer-events","all").style("-webkit-tap-highlight-color","rgba(0,0,0,0)").on("mousedown.brush touchstart.brush",l)}function f(){var t=Dt(this),n=Pi(this).selection;n?(t.selectAll(".selection").style("display",null).attr("x",n[0][0]).attr("y",n[0][1]).attr("width",n[1][0]-n[0][0]).attr("height",n[1][1]-n[0][1]),t.selectAll(".handle").style("display",null).attr("x",function(t){return"e"===t.type[t.type.length-1]?n[1][0]-a/2:n[0][0]-a/2}).attr("y",function(t){return"s"===t.type[0]?n[1][1]-a/2:n[0][1]-a/2}).attr("width",function(t){return"n"===t.type||"s"===t.type?n[1][0]-n[0][0]+a:a}).attr("height",function(t){return"e"===t.type||"w"===t.type?n[1][1]-n[0][1]+a:a})):t.selectAll(".selection,.handle").style("display","none").attr("x",null).attr("y",null).attr("width",null).attr("height",null)}function c(t,n){return t.__brush.emitter||new s(t,n)}function s(t,n){this.that=t,this.args=n,this.state=t.__brush,this.active=0}function l(){if(t.event.touches){if(t.event.changedTouches.length<t.event.touches.length)return vi()}else if(e)return;if(i.apply(this,arguments)){var r,o,a,u,s,l,h,d,p,v,g,y,_,b=this,m=t.event.target.__data__.type,x="selection"===(t.event.metaKey?m="overlay":m)?gi:t.event.altKey?bi:_i,w=n===xi?null:Ni[m],M=n===mi?null:Si[m],A=Pi(b),T=A.extent,N=A.selection,S=T[0][0],E=T[0][1],k=T[1][0],C=T[1][1],P=w&&M&&t.event.shiftKey,z=Ft(b),R=z,L=c(b,arguments).beforestart();"overlay"===m?A.selection=N=[[r=n===xi?S:z[0],a=n===mi?E:z[1]],[s=n===xi?k:r,h=n===mi?C:a]]:(r=N[0][0],a=N[0][1],s=N[1][0],h=N[1][1]),o=r,u=a,l=s,d=h;var D=Dt(b).attr("pointer-events","none"),U=D.selectAll(".overlay").attr("cursor",Mi[m]);if(t.event.touches)D.on("touchmove.brush",O,!0).on("touchend.brush touchcancel.brush",B,!0);else{var q=Dt(t.event.view).on("keydown.brush",function(){switch(t.event.keyCode){case 16:P=w&&M;break;case 18:x===_i&&(w&&(s=l-p*w,r=o+p*w),M&&(h=d-v*M,a=u+v*M),x=bi,Y());break;case 32:x!==_i&&x!==bi||(w<0?s=l-p:w>0&&(r=o-p),M<0?h=d-v:M>0&&(a=u-v),x=yi,U.attr("cursor",Mi.selection),Y());break;default:return}vi()},!0).on("keyup.brush",function(){switch(t.event.keyCode){case 16:P&&(y=_=P=!1,Y());break;case 18:x===bi&&(w<0?s=l:w>0&&(r=o),M<0?h=d:M>0&&(a=u),x=_i,Y());break;case 32:x===yi&&(t.event.altKey?(w&&(s=l-p*w,r=o+p*w),M&&(h=d-v*M,a=u+v*M),x=bi):(w<0?s=l:w>0&&(r=o),M<0?h=d:M>0&&(a=u),x=_i),U.attr("cursor",Mi[m]),Y());break;default:return}vi()},!0).on("mousemove.brush",O,!0).on("mouseup.brush",B,!0);Xt(t.event.view)}pi(),Nr(b),f.call(b),L.start()}function O(){var t=Ft(b);!P||y||_||(Math.abs(t[0]-R[0])>Math.abs(t[1]-R[1])?_=!0:y=!0),R=t,g=!0,vi(),Y()}function Y(){var t;switch(p=R[0]-z[0],v=R[1]-z[1],x){case yi:case gi:w&&(p=Math.max(S-r,Math.min(k-s,p)),o=r+p,l=s+p),M&&(v=Math.max(E-a,Math.min(C-h,v)),u=a+v,d=h+v);break;case _i:w<0?(p=Math.max(S-r,Math.min(k-r,p)),o=r+p,l=s):w>0&&(p=Math.max(S-s,Math.min(k-s,p)),o=r,l=s+p),M<0?(v=Math.max(E-a,Math.min(C-a,v)),u=a+v,d=h):M>0&&(v=Math.max(E-h,Math.min(C-h,v)),u=a,d=h+v);break;case bi:w&&(o=Math.max(S,Math.min(k,r-p*w)),l=Math.max(S,Math.min(k,s+p*w))),M&&(u=Math.max(E,Math.min(C,a-v*M)),d=Math.max(E,Math.min(C,h+v*M)))}l<o&&(w*=-1,t=r,r=s,s=t,t=o,o=l,l=t,m in Ai&&U.attr("cursor",Mi[m=Ai[m]])),d<u&&(M*=-1,t=a,a=h,h=t,t=u,u=d,d=t,m in Ti&&U.attr("cursor",Mi[m=Ti[m]])),A.selection&&(N=A.selection),y&&(o=N[0][0],l=N[1][0]),_&&(u=N[0][1],d=N[1][1]),N[0][0]===o&&N[0][1]===u&&N[1][0]===l&&N[1][1]===d||(A.selection=[[o,u],[l,d]],f.call(b),L.brush())}function B(){if(pi(),t.event.touches){if(t.event.touches.length)return;e&&clearTimeout(e),e=setTimeout(function(){e=null},500),D.on("touchmove.brush touchend.brush touchcancel.brush",null)}else Gt(t.event.view,g),q.on("keydown.brush keyup.brush mousemove.brush mouseup.brush",null);D.attr("pointer-events","all"),U.attr("cursor",Mi.overlay),A.selection&&(N=A.selection),zi(N)&&(A.selection=null,f.call(b)),L.end()}}function h(){var t=this.__brush||{selection:null};return t.extent=r.apply(this,arguments),t.dim=n,t}return u.move=function(t,e){t.selection?t.on("start.brush",function(){c(this,arguments).beforestart().start()}).on("interrupt.brush end.brush",function(){c(this,arguments).end()}).tween("brush",function(){var t=this,r=t.__brush,i=c(t,arguments),o=r.selection,a=n.input("function"==typeof e?e.apply(this,arguments):e,r.extent),u=me(o,a);function s(n){r.selection=1===n&&zi(a)?null:u(n),f.call(t),i.brush()}return o&&a?s:s(1)}):t.each(function(){var t=arguments,r=this.__brush,i=n.input("function"==typeof e?e.apply(this,t):e,r.extent),o=c(this,t).beforestart();Nr(this),r.selection=null==i||zi(i)?null:i,f.call(this),o.start().brush().end()})},s.prototype={beforestart:function(){return 1==++this.active&&(this.state.emitter=this,this.starting=!0),this},start:function(){return this.starting&&(this.starting=!1,this.emit("start")),this},brush:function(){return this.emit("brush"),this},end:function(){return 0==--this.active&&(delete this.state.emitter,this.emit("end")),this},emit:function(t){Ct(new di(u,t,n.output(this.state.selection)),o.apply,o,[t,this.that,this.args])}},u.extent=function(t){return arguments.length?(r="function"==typeof t?t:hi([[+t[0][0],+t[0][1]],[+t[1][0],+t[1][1]]]),u):r},u.filter=function(t){return arguments.length?(i="function"==typeof t?t:hi(!!t),u):i},u.handleSize=function(t){return arguments.length?(a=+t,u):a},u.on=function(){var t=o.on.apply(o,arguments);return t===o?u:t},u}var Li=Math.cos,Di=Math.sin,Ui=Math.PI,qi=Ui/2,Oi=2*Ui,Yi=Math.max;var Bi=Array.prototype.slice;function Fi(t){return function(){return t}}var Ii=Math.PI,Hi=2*Ii,ji=Hi-1e-6;function Xi(){this._x0=this._y0=this._x1=this._y1=null,this._=""}function Gi(){return new Xi}function Vi(t){return t.source}function $i(t){return t.target}function Wi(t){return t.radius}function Zi(t){return t.startAngle}function Qi(t){return t.endAngle}Xi.prototype=Gi.prototype={constructor:Xi,moveTo:function(t,n){this._+="M"+(this._x0=this._x1=+t)+","+(this._y0=this._y1=+n)},closePath:function(){null!==this._x1&&(this._x1=this._x0,this._y1=this._y0,this._+="Z")},lineTo:function(t,n){this._+="L"+(this._x1=+t)+","+(this._y1=+n)},quadraticCurveTo:function(t,n,e,r){this._+="Q"+ +t+","+ +n+","+(this._x1=+e)+","+(this._y1=+r)},bezierCurveTo:function(t,n,e,r,i,o){this._+="C"+ +t+","+ +n+","+ +e+","+ +r+","+(this._x1=+i)+","+(this._y1=+o)},arcTo:function(t,n,e,r,i){t=+t,n=+n,e=+e,r=+r,i=+i;var o=this._x1,a=this._y1,u=e-t,f=r-n,c=o-t,s=a-n,l=c*c+s*s;if(i<0)throw new Error("negative radius: "+i);if(null===this._x1)this._+="M"+(this._x1=t)+","+(this._y1=n);else if(l>1e-6)if(Math.abs(s*u-f*c)>1e-6&&i){var h=e-o,d=r-a,p=u*u+f*f,v=h*h+d*d,g=Math.sqrt(p),y=Math.sqrt(l),_=i*Math.tan((Ii-Math.acos((p+l-v)/(2*g*y)))/2),b=_/y,m=_/g;Math.abs(b-1)>1e-6&&(this._+="L"+(t+b*c)+","+(n+b*s)),this._+="A"+i+","+i+",0,0,"+ +(s*h>c*d)+","+(this._x1=t+m*u)+","+(this._y1=n+m*f)}else this._+="L"+(this._x1=t)+","+(this._y1=n);else;},arc:function(t,n,e,r,i,o){t=+t,n=+n;var a=(e=+e)*Math.cos(r),u=e*Math.sin(r),f=t+a,c=n+u,s=1^o,l=o?r-i:i-r;if(e<0)throw new Error("negative radius: "+e);null===this._x1?this._+="M"+f+","+c:(Math.abs(this._x1-f)>1e-6||Math.abs(this._y1-c)>1e-6)&&(this._+="L"+f+","+c),e&&(l<0&&(l=l%Hi+Hi),l>ji?this._+="A"+e+","+e+",0,1,"+s+","+(t-a)+","+(n-u)+"A"+e+","+e+",0,1,"+s+","+(this._x1=f)+","+(this._y1=c):l>1e-6&&(this._+="A"+e+","+e+",0,"+ +(l>=Ii)+","+s+","+(this._x1=t+e*Math.cos(i))+","+(this._y1=n+e*Math.sin(i))))},rect:function(t,n,e,r){this._+="M"+(this._x0=this._x1=+t)+","+(this._y0=this._y1=+n)+"h"+ +e+"v"+ +r+"h"+-e+"Z"},toString:function(){return this._}};function Ji(){}function Ki(t,n){var e=new Ji;if(t instanceof Ji)t.each(function(t,n){e.set(n,t)});else if(Array.isArray(t)){var r,i=-1,o=t.length;if(null==n)for(;++i<o;)e.set(i,t[i]);else for(;++i<o;)e.set(n(r=t[i],i,t),r)}else if(t)for(var a in t)e.set(a,t[a]);return e}function to(){return{}}function no(t,n,e){t[n]=e}function eo(){return Ki()}function ro(t,n,e){t.set(n,e)}function io(){}Ji.prototype=Ki.prototype={constructor:Ji,has:function(t){return"$"+t in this},get:function(t){return this["$"+t]},set:function(t,n){return this["$"+t]=n,this},remove:function(t){var n="$"+t;return n in this&&delete this[n]},clear:function(){for(var t in this)"$"===t[0]&&delete this[t]},keys:function(){var t=[];for(var n in this)"$"===n[0]&&t.push(n.slice(1));return t},values:function(){var t=[];for(var n in this)"$"===n[0]&&t.push(this[n]);return t},entries:function(){var t=[];for(var n in this)"$"===n[0]&&t.push({key:n.slice(1),value:this[n]});return t},size:function(){var t=0;for(var n in this)"$"===n[0]&&++t;return t},empty:function(){for(var t in this)if("$"===t[0])return!1;return!0},each:function(t){for(var n in this)"$"===n[0]&&t(this[n],n.slice(1),this)}};var oo=Ki.prototype;function ao(t,n){var e=new io;if(t instanceof io)t.each(function(t){e.add(t)});else if(t){var r=-1,i=t.length;if(null==n)for(;++r<i;)e.add(t[r]);else for(;++r<i;)e.add(n(t[r],r,t))}return e}io.prototype=ao.prototype={constructor:io,has:oo.has,add:function(t){return this["$"+(t+="")]=t,this},remove:oo.remove,clear:oo.clear,values:oo.keys,size:oo.size,empty:oo.empty,each:oo.each};var uo=Array.prototype.slice;function fo(t,n){return t-n}function co(t){return function(){return t}}function so(t,n){for(var e,r=-1,i=n.length;++r<i;)if(e=lo(t,n[r]))return e;return 0}function lo(t,n){for(var e=n[0],r=n[1],i=-1,o=0,a=t.length,u=a-1;o<a;u=o++){var f=t[o],c=f[0],s=f[1],l=t[u],h=l[0],d=l[1];if(ho(f,l,n))return 0;s>r!=d>r&&e<(h-c)*(r-s)/(d-s)+c&&(i=-i)}return i}function ho(t,n,e){var r,i,o,a;return function(t,n,e){return(n[0]-t[0])*(e[1]-t[1])==(e[0]-t[0])*(n[1]-t[1])}(t,n,e)&&(i=t[r=+(t[0]===n[0])],o=e[r],a=n[r],i<=o&&o<=a||a<=o&&o<=i)}function po(){}var vo=[[],[[[1,1.5],[.5,1]]],[[[1.5,1],[1,1.5]]],[[[1.5,1],[.5,1]]],[[[1,.5],[1.5,1]]],[[[1,1.5],[.5,1]],[[1,.5],[1.5,1]]],[[[1,.5],[1,1.5]]],[[[1,.5],[.5,1]]],[[[.5,1],[1,.5]]],[[[1,1.5],[1,.5]]],[[[.5,1],[1,.5]],[[1.5,1],[1,1.5]]],[[[1.5,1],[1,.5]]],[[[.5,1],[1.5,1]]],[[[1,1.5],[1.5,1]]],[[[.5,1],[1,1.5]]],[]];function go(){var t=1,n=1,e=M,r=u;function i(t){var n=e(t);if(Array.isArray(n))n=n.slice().sort(fo);else{var r=s(t),i=r[0],a=r[1];n=w(i,a,n),n=g(Math.floor(i/n)*n,Math.floor(a/n)*n,n)}return n.map(function(n){return o(t,n)})}function o(e,i){var o=[],u=[];return function(e,r,i){var o,u,f,c,s,l,h=new Array,d=new Array;o=u=-1,c=e[0]>=r,vo[c<<1].forEach(p);for(;++o<t-1;)f=c,c=e[o+1]>=r,vo[f|c<<1].forEach(p);vo[c<<0].forEach(p);for(;++u<n-1;){for(o=-1,c=e[u*t+t]>=r,s=e[u*t]>=r,vo[c<<1|s<<2].forEach(p);++o<t-1;)f=c,c=e[u*t+t+o+1]>=r,l=s,s=e[u*t+o+1]>=r,vo[f|c<<1|s<<2|l<<3].forEach(p);vo[c|s<<3].forEach(p)}o=-1,s=e[u*t]>=r,vo[s<<2].forEach(p);for(;++o<t-1;)l=s,s=e[u*t+o+1]>=r,vo[s<<2|l<<3].forEach(p);function p(t){var n,e,r=[t[0][0]+o,t[0][1]+u],f=[t[1][0]+o,t[1][1]+u],c=a(r),s=a(f);(n=d[c])?(e=h[s])?(delete d[n.end],delete h[e.start],n===e?(n.ring.push(f),i(n.ring)):h[n.start]=d[e.end]={start:n.start,end:e.end,ring:n.ring.concat(e.ring)}):(delete d[n.end],n.ring.push(f),d[n.end=s]=n):(n=h[s])?(e=d[c])?(delete h[n.start],delete d[e.end],n===e?(n.ring.push(f),i(n.ring)):h[e.start]=d[n.end]={start:e.start,end:n.end,ring:e.ring.concat(n.ring)}):(delete h[n.start],n.ring.unshift(r),h[n.start=c]=n):h[c]=d[s]={start:c,end:s,ring:[r,f]}}vo[s<<3].forEach(p)}(e,i,function(t){r(t,e,i),function(t){for(var n=0,e=t.length,r=t[e-1][1]*t[0][0]-t[e-1][0]*t[0][1];++n<e;)r+=t[n-1][1]*t[n][0]-t[n-1][0]*t[n][1];return r}(t)>0?o.push([t]):u.push(t)}),u.forEach(function(t){for(var n,e=0,r=o.length;e<r;++e)if(-1!==so((n=o[e])[0],t))return void n.push(t)}),{type:"MultiPolygon",value:i,coordinates:o}}function a(n){return 2*n[0]+n[1]*(t+1)*4}function u(e,r,i){e.forEach(function(e){var o,a=e[0],u=e[1],f=0|a,c=0|u,s=r[c*t+f];a>0&&a<t&&f===a&&(o=r[c*t+f-1],e[0]=a+(i-o)/(s-o)-.5),u>0&&u<n&&c===u&&(o=r[(c-1)*t+f],e[1]=u+(i-o)/(s-o)-.5)})}return i.contour=o,i.size=function(e){if(!arguments.length)return[t,n];var r=Math.ceil(e[0]),o=Math.ceil(e[1]);if(!(r>0&&o>0))throw new Error("invalid size");return t=r,n=o,i},i.thresholds=function(t){return arguments.length?(e="function"==typeof t?t:Array.isArray(t)?co(uo.call(t)):co(t),i):e},i.smooth=function(t){return arguments.length?(r=t?u:po,i):r===u},i}function yo(t,n,e){for(var r=t.width,i=t.height,o=1+(e<<1),a=0;a<i;++a)for(var u=0,f=0;u<r+e;++u)u<r&&(f+=t.data[u+a*r]),u>=e&&(u>=o&&(f-=t.data[u-o+a*r]),n.data[u-e+a*r]=f/Math.min(u+1,r-1+o-u,o))}function _o(t,n,e){for(var r=t.width,i=t.height,o=1+(e<<1),a=0;a<r;++a)for(var u=0,f=0;u<i+e;++u)u<i&&(f+=t.data[a+u*r]),u>=e&&(u>=o&&(f-=t.data[a+(u-o)*r]),n.data[a+(u-e)*r]=f/Math.min(u+1,i-1+o-u,o))}function bo(t){return t[0]}function mo(t){return t[1]}function xo(){return 1}var wo={},Mo={},Ao=34,To=10,No=13;function So(t){return new Function("d","return {"+t.map(function(t,n){return JSON.stringify(t)+": d["+n+"]"}).join(",")+"}")}function Eo(t){var n=new RegExp('["'+t+"\n\r]"),e=t.charCodeAt(0);function r(t,n){var r,i=[],o=t.length,a=0,u=0,f=o<=0,c=!1;function s(){if(f)return Mo;if(c)return c=!1,wo;var n,r,i=a;if(t.charCodeAt(i)===Ao){for(;a++<o&&t.charCodeAt(a)!==Ao||t.charCodeAt(++a)===Ao;);return(n=a)>=o?f=!0:(r=t.charCodeAt(a++))===To?c=!0:r===No&&(c=!0,t.charCodeAt(a)===To&&++a),t.slice(i+1,n-1).replace(/""/g,'"')}for(;a<o;){if((r=t.charCodeAt(n=a++))===To)c=!0;else if(r===No)c=!0,t.charCodeAt(a)===To&&++a;else if(r!==e)continue;return t.slice(i,n)}return f=!0,t.slice(i,o)}for(t.charCodeAt(o-1)===To&&--o,t.charCodeAt(o-1)===No&&--o;(r=s())!==Mo;){for(var l=[];r!==wo&&r!==Mo;)l.push(r),r=s();n&&null==(l=n(l,u++))||i.push(l)}return i}function i(n){return n.map(o).join(t)}function o(t){return null==t?"":n.test(t+="")?'"'+t.replace(/"/g,'""')+'"':t}return{parse:function(t,n){var e,i,o=r(t,function(t,r){if(e)return e(t,r-1);i=t,e=n?function(t,n){var e=So(t);return function(r,i){return n(e(r),i,t)}}(t,n):So(t)});return o.columns=i||[],o},parseRows:r,format:function(n,e){return null==e&&(e=function(t){var n=Object.create(null),e=[];return t.forEach(function(t){for(var r in t)r in n||e.push(n[r]=r)}),e}(n)),[e.map(o).join(t)].concat(n.map(function(n){return e.map(function(t){return o(n[t])}).join(t)})).join("\n")},formatRows:function(t){return t.map(i).join("\n")}}}var ko=Eo(","),Co=ko.parse,Po=ko.parseRows,zo=ko.format,Ro=ko.formatRows,Lo=Eo("\t"),Do=Lo.parse,Uo=Lo.parseRows,qo=Lo.format,Oo=Lo.formatRows;function Yo(t){if(!t.ok)throw new Error(t.status+" "+t.statusText);return t.blob()}function Bo(t){if(!t.ok)throw new Error(t.status+" "+t.statusText);return t.arrayBuffer()}function Fo(t){if(!t.ok)throw new Error(t.status+" "+t.statusText);return t.text()}function Io(t,n){return fetch(t,n).then(Fo)}function Ho(t){return function(n,e,r){return 2===arguments.length&&"function"==typeof e&&(r=e,e=void 0),Io(n,e).then(function(n){return t(n,r)})}}var jo=Ho(Co),Xo=Ho(Do);function Go(t){if(!t.ok)throw new Error(t.status+" "+t.statusText);return t.json()}function Vo(t){return function(n,e){return Io(n,e).then(function(n){return(new DOMParser).parseFromString(n,t)})}}var $o=Vo("application/xml"),Wo=Vo("text/html"),Zo=Vo("image/svg+xml");function Qo(t){return function(){return t}}function Jo(){return 1e-6*(Math.random()-.5)}function Ko(t,n,e,r){if(isNaN(n)||isNaN(e))return t;var i,o,a,u,f,c,s,l,h,d=t._root,p={data:r},v=t._x0,g=t._y0,y=t._x1,_=t._y1;if(!d)return t._root=p,t;for(;d.length;)if((c=n>=(o=(v+y)/2))?v=o:y=o,(s=e>=(a=(g+_)/2))?g=a:_=a,i=d,!(d=d[l=s<<1|c]))return i[l]=p,t;if(u=+t._x.call(null,d.data),f=+t._y.call(null,d.data),n===u&&e===f)return p.next=d,i?i[l]=p:t._root=p,t;do{i=i?i[l]=new Array(4):t._root=new Array(4),(c=n>=(o=(v+y)/2))?v=o:y=o,(s=e>=(a=(g+_)/2))?g=a:_=a}while((l=s<<1|c)==(h=(f>=a)<<1|u>=o));return i[h]=d,i[l]=p,t}function ta(t,n,e,r,i){this.node=t,this.x0=n,this.y0=e,this.x1=r,this.y1=i}function na(t){return t[0]}function ea(t){return t[1]}function ra(t,n,e){var r=new ia(null==n?na:n,null==e?ea:e,NaN,NaN,NaN,NaN);return null==t?r:r.addAll(t)}function ia(t,n,e,r,i,o){this._x=t,this._y=n,this._x0=e,this._y0=r,this._x1=i,this._y1=o,this._root=void 0}function oa(t){for(var n={data:t.data},e=n;t=t.next;)e=e.next={data:t.data};return n}var aa=ra.prototype=ia.prototype;function ua(t){return t.x+t.vx}function fa(t){return t.y+t.vy}function ca(t){return t.index}function sa(t,n){var e=t.get(n);if(!e)throw new Error("missing: "+n);return e}function la(t){return t.x}function ha(t){return t.y}aa.copy=function(){var t,n,e=new ia(this._x,this._y,this._x0,this._y0,this._x1,this._y1),r=this._root;if(!r)return e;if(!r.length)return e._root=oa(r),e;for(t=[{source:r,target:e._root=new Array(4)}];r=t.pop();)for(var i=0;i<4;++i)(n=r.source[i])&&(n.length?t.push({source:n,target:r.target[i]=new Array(4)}):r.target[i]=oa(n));return e},aa.add=function(t){var n=+this._x.call(null,t),e=+this._y.call(null,t);return Ko(this.cover(n,e),n,e,t)},aa.addAll=function(t){var n,e,r,i,o=t.length,a=new Array(o),u=new Array(o),f=1/0,c=1/0,s=-1/0,l=-1/0;for(e=0;e<o;++e)isNaN(r=+this._x.call(null,n=t[e]))||isNaN(i=+this._y.call(null,n))||(a[e]=r,u[e]=i,r<f&&(f=r),r>s&&(s=r),i<c&&(c=i),i>l&&(l=i));for(s<f&&(f=this._x0,s=this._x1),l<c&&(c=this._y0,l=this._y1),this.cover(f,c).cover(s,l),e=0;e<o;++e)Ko(this,a[e],u[e],t[e]);return this},aa.cover=function(t,n){if(isNaN(t=+t)||isNaN(n=+n))return this;var e=this._x0,r=this._y0,i=this._x1,o=this._y1;if(isNaN(e))i=(e=Math.floor(t))+1,o=(r=Math.floor(n))+1;else{if(!(e>t||t>i||r>n||n>o))return this;var a,u,f=i-e,c=this._root;switch(u=(n<(r+o)/2)<<1|t<(e+i)/2){case 0:do{(a=new Array(4))[u]=c,c=a}while(o=r+(f*=2),t>(i=e+f)||n>o);break;case 1:do{(a=new Array(4))[u]=c,c=a}while(o=r+(f*=2),(e=i-f)>t||n>o);break;case 2:do{(a=new Array(4))[u]=c,c=a}while(r=o-(f*=2),t>(i=e+f)||r>n);break;case 3:do{(a=new Array(4))[u]=c,c=a}while(r=o-(f*=2),(e=i-f)>t||r>n)}this._root&&this._root.length&&(this._root=c)}return this._x0=e,this._y0=r,this._x1=i,this._y1=o,this},aa.data=function(){var t=[];return this.visit(function(n){if(!n.length)do{t.push(n.data)}while(n=n.next)}),t},aa.extent=function(t){return arguments.length?this.cover(+t[0][0],+t[0][1]).cover(+t[1][0],+t[1][1]):isNaN(this._x0)?void 0:[[this._x0,this._y0],[this._x1,this._y1]]},aa.find=function(t,n,e){var r,i,o,a,u,f,c,s=this._x0,l=this._y0,h=this._x1,d=this._y1,p=[],v=this._root;for(v&&p.push(new ta(v,s,l,h,d)),null==e?e=1/0:(s=t-e,l=n-e,h=t+e,d=n+e,e*=e);f=p.pop();)if(!(!(v=f.node)||(i=f.x0)>h||(o=f.y0)>d||(a=f.x1)<s||(u=f.y1)<l))if(v.length){var g=(i+a)/2,y=(o+u)/2;p.push(new ta(v[3],g,y,a,u),new ta(v[2],i,y,g,u),new ta(v[1],g,o,a,y),new ta(v[0],i,o,g,y)),(c=(n>=y)<<1|t>=g)&&(f=p[p.length-1],p[p.length-1]=p[p.length-1-c],p[p.length-1-c]=f)}else{var _=t-+this._x.call(null,v.data),b=n-+this._y.call(null,v.data),m=_*_+b*b;if(m<e){var x=Math.sqrt(e=m);s=t-x,l=n-x,h=t+x,d=n+x,r=v.data}}return r},aa.remove=function(t){if(isNaN(o=+this._x.call(null,t))||isNaN(a=+this._y.call(null,t)))return this;var n,e,r,i,o,a,u,f,c,s,l,h,d=this._root,p=this._x0,v=this._y0,g=this._x1,y=this._y1;if(!d)return this;if(d.length)for(;;){if((c=o>=(u=(p+g)/2))?p=u:g=u,(s=a>=(f=(v+y)/2))?v=f:y=f,n=d,!(d=d[l=s<<1|c]))return this;if(!d.length)break;(n[l+1&3]||n[l+2&3]||n[l+3&3])&&(e=n,h=l)}for(;d.data!==t;)if(r=d,!(d=d.next))return this;return(i=d.next)&&delete d.next,r?(i?r.next=i:delete r.next,this):n?(i?n[l]=i:delete n[l],(d=n[0]||n[1]||n[2]||n[3])&&d===(n[3]||n[2]||n[1]||n[0])&&!d.length&&(e?e[h]=d:this._root=d),this):(this._root=i,this)},aa.removeAll=function(t){for(var n=0,e=t.length;n<e;++n)this.remove(t[n]);return this},aa.root=function(){return this._root},aa.size=function(){var t=0;return this.visit(function(n){if(!n.length)do{++t}while(n=n.next)}),t},aa.visit=function(t){var n,e,r,i,o,a,u=[],f=this._root;for(f&&u.push(new ta(f,this._x0,this._y0,this._x1,this._y1));n=u.pop();)if(!t(f=n.node,r=n.x0,i=n.y0,o=n.x1,a=n.y1)&&f.length){var c=(r+o)/2,s=(i+a)/2;(e=f[3])&&u.push(new ta(e,c,s,o,a)),(e=f[2])&&u.push(new ta(e,r,s,c,a)),(e=f[1])&&u.push(new ta(e,c,i,o,s)),(e=f[0])&&u.push(new ta(e,r,i,c,s))}return this},aa.visitAfter=function(t){var n,e=[],r=[];for(this._root&&e.push(new ta(this._root,this._x0,this._y0,this._x1,this._y1));n=e.pop();){var i=n.node;if(i.length){var o,a=n.x0,u=n.y0,f=n.x1,c=n.y1,s=(a+f)/2,l=(u+c)/2;(o=i[0])&&e.push(new ta(o,a,u,s,l)),(o=i[1])&&e.push(new ta(o,s,u,f,l)),(o=i[2])&&e.push(new ta(o,a,l,s,c)),(o=i[3])&&e.push(new ta(o,s,l,f,c))}r.push(n)}for(;n=r.pop();)t(n.node,n.x0,n.y0,n.x1,n.y1);return this},aa.x=function(t){return arguments.length?(this._x=t,this):this._x},aa.y=function(t){return arguments.length?(this._y=t,this):this._y};var da=10,pa=Math.PI*(3-Math.sqrt(5));function va(t,n){if((e=(t=n?t.toExponential(n-1):t.toExponential()).indexOf("e"))<0)return null;var e,r=t.slice(0,e);return[r.length>1?r[0]+r.slice(2):r,+t.slice(e+1)]}function ga(t){return(t=va(Math.abs(t)))?t[1]:NaN}var ya,_a=/^(?:(.)?([<>=^]))?([+\-( ])?([$#])?(0)?(\d+)?(,)?(\.\d+)?(~)?([a-z%])?$/i;function ba(t){return new ma(t)}function ma(t){if(!(n=_a.exec(t)))throw new Error("invalid format: "+t);var n;this.fill=n[1]||" ",this.align=n[2]||">",this.sign=n[3]||"-",this.symbol=n[4]||"",this.zero=!!n[5],this.width=n[6]&&+n[6],this.comma=!!n[7],this.precision=n[8]&&+n[8].slice(1),this.trim=!!n[9],this.type=n[10]||""}function xa(t,n){var e=va(t,n);if(!e)return t+"";var r=e[0],i=e[1];return i<0?"0."+new Array(-i).join("0")+r:r.length>i+1?r.slice(0,i+1)+"."+r.slice(i+1):r+new Array(i-r.length+2).join("0")}ba.prototype=ma.prototype,ma.prototype.toString=function(){return this.fill+this.align+this.sign+this.symbol+(this.zero?"0":"")+(null==this.width?"":Math.max(1,0|this.width))+(this.comma?",":"")+(null==this.precision?"":"."+Math.max(0,0|this.precision))+(this.trim?"~":"")+this.type};var wa={"%":function(t,n){return(100*t).toFixed(n)},b:function(t){return Math.round(t).toString(2)},c:function(t){return t+""},d:function(t){return Math.round(t).toString(10)},e:function(t,n){return t.toExponential(n)},f:function(t,n){return t.toFixed(n)},g:function(t,n){return t.toPrecision(n)},o:function(t){return Math.round(t).toString(8)},p:function(t,n){return xa(100*t,n)},r:xa,s:function(t,n){var e=va(t,n);if(!e)return t+"";var r=e[0],i=e[1],o=i-(ya=3*Math.max(-8,Math.min(8,Math.floor(i/3))))+1,a=r.length;return o===a?r:o>a?r+new Array(o-a+1).join("0"):o>0?r.slice(0,o)+"."+r.slice(o):"0."+new Array(1-o).join("0")+va(t,Math.max(0,n+o-1))[0]},X:function(t){return Math.round(t).toString(16).toUpperCase()},x:function(t){return Math.round(t).toString(16)}};function Ma(t){return t}var Aa,Ta=["y","z","a","f","p","n","µ","m","","k","M","G","T","P","E","Z","Y"];function Na(t){var n,e,r=t.grouping&&t.thousands?(n=t.grouping,e=t.thousands,function(t,r){for(var i=t.length,o=[],a=0,u=n[0],f=0;i>0&&u>0&&(f+u+1>r&&(u=Math.max(1,r-f)),o.push(t.substring(i-=u,i+u)),!((f+=u+1)>r));)u=n[a=(a+1)%n.length];return o.reverse().join(e)}):Ma,i=t.currency,o=t.decimal,a=t.numerals?function(t){return function(n){return n.replace(/[0-9]/g,function(n){return t[+n]})}}(t.numerals):Ma,u=t.percent||"%";function f(t){var n=(t=ba(t)).fill,e=t.align,f=t.sign,c=t.symbol,s=t.zero,l=t.width,h=t.comma,d=t.precision,p=t.trim,v=t.type;"n"===v?(h=!0,v="g"):wa[v]||(null==d&&(d=12),p=!0,v="g"),(s||"0"===n&&"="===e)&&(s=!0,n="0",e="=");var g="$"===c?i[0]:"#"===c&&/[boxX]/.test(v)?"0"+v.toLowerCase():"",y="$"===c?i[1]:/[%p]/.test(v)?u:"",_=wa[v],b=/[defgprs%]/.test(v);function m(t){var i,u,c,m=g,x=y;if("c"===v)x=_(t)+x,t="";else{var w=(t=+t)<0;if(t=_(Math.abs(t),d),p&&(t=function(t){t:for(var n,e=t.length,r=1,i=-1;r<e;++r)switch(t[r]){case".":i=n=r;break;case"0":0===i&&(i=r),n=r;break;default:if(i>0){if(!+t[r])break t;i=0}}return i>0?t.slice(0,i)+t.slice(n+1):t}(t)),w&&0==+t&&(w=!1),m=(w?"("===f?f:"-":"-"===f||"("===f?"":f)+m,x=("s"===v?Ta[8+ya/3]:"")+x+(w&&"("===f?")":""),b)for(i=-1,u=t.length;++i<u;)if(48>(c=t.charCodeAt(i))||c>57){x=(46===c?o+t.slice(i+1):t.slice(i))+x,t=t.slice(0,i);break}}h&&!s&&(t=r(t,1/0));var M=m.length+t.length+x.length,A=M<l?new Array(l-M+1).join(n):"";switch(h&&s&&(t=r(A+t,A.length?l-x.length:1/0),A=""),e){case"<":t=m+t+x+A;break;case"=":t=m+A+t+x;break;case"^":t=A.slice(0,M=A.length>>1)+m+t+x+A.slice(M);break;default:t=A+m+t+x}return a(t)}return d=null==d?6:/[gprs]/.test(v)?Math.max(1,Math.min(21,d)):Math.max(0,Math.min(20,d)),m.toString=function(){return t+""},m}return{format:f,formatPrefix:function(t,n){var e=f(((t=ba(t)).type="f",t)),r=3*Math.max(-8,Math.min(8,Math.floor(ga(n)/3))),i=Math.pow(10,-r),o=Ta[8+r/3];return function(t){return e(i*t)+o}}}}function Sa(n){return Aa=Na(n),t.format=Aa.format,t.formatPrefix=Aa.formatPrefix,Aa}function Ea(t){return Math.max(0,-ga(Math.abs(t)))}function ka(t,n){return Math.max(0,3*Math.max(-8,Math.min(8,Math.floor(ga(n)/3)))-ga(Math.abs(t)))}function Ca(t,n){return t=Math.abs(t),n=Math.abs(n)-t,Math.max(0,ga(n)-ga(t))+1}function Pa(){return new za}function za(){this.reset()}Sa({decimal:".",thousands:",",grouping:[3],currency:["$",""]}),za.prototype={constructor:za,reset:function(){this.s=this.t=0},add:function(t){La(Ra,t,this.t),La(this,Ra.s,this.s),this.s?this.t+=Ra.t:this.s=Ra.t},valueOf:function(){return this.s}};var Ra=new za;function La(t,n,e){var r=t.s=n+e,i=r-n,o=r-i;t.t=n-o+(e-i)}var Da=1e-6,Ua=1e-12,qa=Math.PI,Oa=qa/2,Ya=qa/4,Ba=2*qa,Fa=180/qa,Ia=qa/180,Ha=Math.abs,ja=Math.atan,Xa=Math.atan2,Ga=Math.cos,Va=Math.ceil,$a=Math.exp,Wa=Math.log,Za=Math.pow,Qa=Math.sin,Ja=Math.sign||function(t){return t>0?1:t<0?-1:0},Ka=Math.sqrt,tu=Math.tan;function nu(t){return t>1?0:t<-1?qa:Math.acos(t)}function eu(t){return t>1?Oa:t<-1?-Oa:Math.asin(t)}function ru(t){return(t=Qa(t/2))*t}function iu(){}function ou(t,n){t&&uu.hasOwnProperty(t.type)&&uu[t.type](t,n)}var au={Feature:function(t,n){ou(t.geometry,n)},FeatureCollection:function(t,n){for(var e=t.features,r=-1,i=e.length;++r<i;)ou(e[r].geometry,n)}},uu={Sphere:function(t,n){n.sphere()},Point:function(t,n){t=t.coordinates,n.point(t[0],t[1],t[2])},MultiPoint:function(t,n){for(var e=t.coordinates,r=-1,i=e.length;++r<i;)t=e[r],n.point(t[0],t[1],t[2])},LineString:function(t,n){fu(t.coordinates,n,0)},MultiLineString:function(t,n){for(var e=t.coordinates,r=-1,i=e.length;++r<i;)fu(e[r],n,0)},Polygon:function(t,n){cu(t.coordinates,n)},MultiPolygon:function(t,n){for(var e=t.coordinates,r=-1,i=e.length;++r<i;)cu(e[r],n)},GeometryCollection:function(t,n){for(var e=t.geometries,r=-1,i=e.length;++r<i;)ou(e[r],n)}};function fu(t,n,e){var r,i=-1,o=t.length-e;for(n.lineStart();++i<o;)r=t[i],n.point(r[0],r[1],r[2]);n.lineEnd()}function cu(t,n){var e=-1,r=t.length;for(n.polygonStart();++e<r;)fu(t[e],n,1);n.polygonEnd()}function su(t,n){t&&au.hasOwnProperty(t.type)?au[t.type](t,n):ou(t,n)}var lu,hu,du,pu,vu,gu=Pa(),yu=Pa(),_u={point:iu,lineStart:iu,lineEnd:iu,polygonStart:function(){gu.reset(),_u.lineStart=bu,_u.lineEnd=mu},polygonEnd:function(){var t=+gu;yu.add(t<0?Ba+t:t),this.lineStart=this.lineEnd=this.point=iu},sphere:function(){yu.add(Ba)}};function bu(){_u.point=xu}function mu(){wu(lu,hu)}function xu(t,n){_u.point=wu,lu=t,hu=n,du=t*=Ia,pu=Ga(n=(n*=Ia)/2+Ya),vu=Qa(n)}function wu(t,n){var e=(t*=Ia)-du,r=e>=0?1:-1,i=r*e,o=Ga(n=(n*=Ia)/2+Ya),a=Qa(n),u=vu*a,f=pu*o+u*Ga(i),c=u*r*Qa(i);gu.add(Xa(c,f)),du=t,pu=o,vu=a}function Mu(t){return[Xa(t[1],t[0]),eu(t[2])]}function Au(t){var n=t[0],e=t[1],r=Ga(e);return[r*Ga(n),r*Qa(n),Qa(e)]}function Tu(t,n){return t[0]*n[0]+t[1]*n[1]+t[2]*n[2]}function Nu(t,n){return[t[1]*n[2]-t[2]*n[1],t[2]*n[0]-t[0]*n[2],t[0]*n[1]-t[1]*n[0]]}function Su(t,n){t[0]+=n[0],t[1]+=n[1],t[2]+=n[2]}function Eu(t,n){return[t[0]*n,t[1]*n,t[2]*n]}function ku(t){var n=Ka(t[0]*t[0]+t[1]*t[1]+t[2]*t[2]);t[0]/=n,t[1]/=n,t[2]/=n}var Cu,Pu,zu,Ru,Lu,Du,Uu,qu,Ou,Yu,Bu,Fu,Iu,Hu,ju,Xu,Gu,Vu,$u,Wu,Zu,Qu,Ju,Ku,tf,nf,ef=Pa(),rf={point:of,lineStart:uf,lineEnd:ff,polygonStart:function(){rf.point=cf,rf.lineStart=sf,rf.lineEnd=lf,ef.reset(),_u.polygonStart()},polygonEnd:function(){_u.polygonEnd(),rf.point=of,rf.lineStart=uf,rf.lineEnd=ff,gu<0?(Cu=-(zu=180),Pu=-(Ru=90)):ef>Da?Ru=90:ef<-Da&&(Pu=-90),Yu[0]=Cu,Yu[1]=zu}};function of(t,n){Ou.push(Yu=[Cu=t,zu=t]),n<Pu&&(Pu=n),n>Ru&&(Ru=n)}function af(t,n){var e=Au([t*Ia,n*Ia]);if(qu){var r=Nu(qu,e),i=Nu([r[1],-r[0],0],r);ku(i),i=Mu(i);var o,a=t-Lu,u=a>0?1:-1,f=i[0]*Fa*u,c=Ha(a)>180;c^(u*Lu<f&&f<u*t)?(o=i[1]*Fa)>Ru&&(Ru=o):c^(u*Lu<(f=(f+360)%360-180)&&f<u*t)?(o=-i[1]*Fa)<Pu&&(Pu=o):(n<Pu&&(Pu=n),n>Ru&&(Ru=n)),c?t<Lu?hf(Cu,t)>hf(Cu,zu)&&(zu=t):hf(t,zu)>hf(Cu,zu)&&(Cu=t):zu>=Cu?(t<Cu&&(Cu=t),t>zu&&(zu=t)):t>Lu?hf(Cu,t)>hf(Cu,zu)&&(zu=t):hf(t,zu)>hf(Cu,zu)&&(Cu=t)}else Ou.push(Yu=[Cu=t,zu=t]);n<Pu&&(Pu=n),n>Ru&&(Ru=n),qu=e,Lu=t}function uf(){rf.point=af}function ff(){Yu[0]=Cu,Yu[1]=zu,rf.point=of,qu=null}function cf(t,n){if(qu){var e=t-Lu;ef.add(Ha(e)>180?e+(e>0?360:-360):e)}else Du=t,Uu=n;_u.point(t,n),af(t,n)}function sf(){_u.lineStart()}function lf(){cf(Du,Uu),_u.lineEnd(),Ha(ef)>Da&&(Cu=-(zu=180)),Yu[0]=Cu,Yu[1]=zu,qu=null}function hf(t,n){return(n-=t)<0?n+360:n}function df(t,n){return t[0]-n[0]}function pf(t,n){return t[0]<=t[1]?t[0]<=n&&n<=t[1]:n<t[0]||t[1]<n}var vf={sphere:iu,point:gf,lineStart:_f,lineEnd:xf,polygonStart:function(){vf.lineStart=wf,vf.lineEnd=Mf},polygonEnd:function(){vf.lineStart=_f,vf.lineEnd=xf}};function gf(t,n){t*=Ia;var e=Ga(n*=Ia);yf(e*Ga(t),e*Qa(t),Qa(n))}function yf(t,n,e){Iu+=(t-Iu)/++Bu,Hu+=(n-Hu)/Bu,ju+=(e-ju)/Bu}function _f(){vf.point=bf}function bf(t,n){t*=Ia;var e=Ga(n*=Ia);Ku=e*Ga(t),tf=e*Qa(t),nf=Qa(n),vf.point=mf,yf(Ku,tf,nf)}function mf(t,n){t*=Ia;var e=Ga(n*=Ia),r=e*Ga(t),i=e*Qa(t),o=Qa(n),a=Xa(Ka((a=tf*o-nf*i)*a+(a=nf*r-Ku*o)*a+(a=Ku*i-tf*r)*a),Ku*r+tf*i+nf*o);Fu+=a,Xu+=a*(Ku+(Ku=r)),Gu+=a*(tf+(tf=i)),Vu+=a*(nf+(nf=o)),yf(Ku,tf,nf)}function xf(){vf.point=gf}function wf(){vf.point=Af}function Mf(){Tf(Qu,Ju),vf.point=gf}function Af(t,n){Qu=t,Ju=n,t*=Ia,n*=Ia,vf.point=Tf;var e=Ga(n);Ku=e*Ga(t),tf=e*Qa(t),nf=Qa(n),yf(Ku,tf,nf)}function Tf(t,n){t*=Ia;var e=Ga(n*=Ia),r=e*Ga(t),i=e*Qa(t),o=Qa(n),a=tf*o-nf*i,u=nf*r-Ku*o,f=Ku*i-tf*r,c=Ka(a*a+u*u+f*f),s=eu(c),l=c&&-s/c;$u+=l*a,Wu+=l*u,Zu+=l*f,Fu+=s,Xu+=s*(Ku+(Ku=r)),Gu+=s*(tf+(tf=i)),Vu+=s*(nf+(nf=o)),yf(Ku,tf,nf)}function Nf(t){return function(){return t}}function Sf(t,n){function e(e,r){return e=t(e,r),n(e[0],e[1])}return t.invert&&n.invert&&(e.invert=function(e,r){return(e=n.invert(e,r))&&t.invert(e[0],e[1])}),e}function Ef(t,n){return[t>qa?t-Ba:t<-qa?t+Ba:t,n]}function kf(t,n,e){return(t%=Ba)?n||e?Sf(Pf(t),zf(n,e)):Pf(t):n||e?zf(n,e):Ef}function Cf(t){return function(n,e){return[(n+=t)>qa?n-Ba:n<-qa?n+Ba:n,e]}}function Pf(t){var n=Cf(t);return n.invert=Cf(-t),n}function zf(t,n){var e=Ga(t),r=Qa(t),i=Ga(n),o=Qa(n);function a(t,n){var a=Ga(n),u=Ga(t)*a,f=Qa(t)*a,c=Qa(n),s=c*e+u*r;return[Xa(f*i-s*o,u*e-c*r),eu(s*i+f*o)]}return a.invert=function(t,n){var a=Ga(n),u=Ga(t)*a,f=Qa(t)*a,c=Qa(n),s=c*i-f*o;return[Xa(f*i+c*o,u*e+s*r),eu(s*e-u*r)]},a}function Rf(t){function n(n){return(n=t(n[0]*Ia,n[1]*Ia))[0]*=Fa,n[1]*=Fa,n}return t=kf(t[0]*Ia,t[1]*Ia,t.length>2?t[2]*Ia:0),n.invert=function(n){return(n=t.invert(n[0]*Ia,n[1]*Ia))[0]*=Fa,n[1]*=Fa,n},n}function Lf(t,n,e,r,i,o){if(e){var a=Ga(n),u=Qa(n),f=r*e;null==i?(i=n+r*Ba,o=n-f/2):(i=Df(a,i),o=Df(a,o),(r>0?i<o:i>o)&&(i+=r*Ba));for(var c,s=i;r>0?s>o:s<o;s-=f)c=Mu([a,-u*Ga(s),-u*Qa(s)]),t.point(c[0],c[1])}}function Df(t,n){(n=Au(n))[0]-=t,ku(n);var e=nu(-n[1]);return((-n[2]<0?-e:e)+Ba-Da)%Ba}function Uf(){var t,n=[];return{point:function(n,e){t.push([n,e])},lineStart:function(){n.push(t=[])},lineEnd:iu,rejoin:function(){n.length>1&&n.push(n.pop().concat(n.shift()))},result:function(){var e=n;return n=[],t=null,e}}}function qf(t,n){return Ha(t[0]-n[0])<Da&&Ha(t[1]-n[1])<Da}function Of(t,n,e,r){this.x=t,this.z=n,this.o=e,this.e=r,this.v=!1,this.n=this.p=null}function Yf(t,n,e,r,i){var o,a,u=[],f=[];if(t.forEach(function(t){if(!((n=t.length-1)<=0)){var n,e,r=t[0],a=t[n];if(qf(r,a)){for(i.lineStart(),o=0;o<n;++o)i.point((r=t[o])[0],r[1]);i.lineEnd()}else u.push(e=new Of(r,t,null,!0)),f.push(e.o=new Of(r,null,e,!1)),u.push(e=new Of(a,t,null,!1)),f.push(e.o=new Of(a,null,e,!0))}}),u.length){for(f.sort(n),Bf(u),Bf(f),o=0,a=f.length;o<a;++o)f[o].e=e=!e;for(var c,s,l=u[0];;){for(var h=l,d=!0;h.v;)if((h=h.n)===l)return;c=h.z,i.lineStart();do{if(h.v=h.o.v=!0,h.e){if(d)for(o=0,a=c.length;o<a;++o)i.point((s=c[o])[0],s[1]);else r(h.x,h.n.x,1,i);h=h.n}else{if(d)for(c=h.p.z,o=c.length-1;o>=0;--o)i.point((s=c[o])[0],s[1]);else r(h.x,h.p.x,-1,i);h=h.p}c=(h=h.o).z,d=!d}while(!h.v);i.lineEnd()}}}function Bf(t){if(n=t.length){for(var n,e,r=0,i=t[0];++r<n;)i.n=e=t[r],e.p=i,i=e;i.n=e=t[0],e.p=i}}Ef.invert=Ef;var Ff=Pa();function If(t,n){var e=n[0],r=n[1],i=Qa(r),o=[Qa(e),-Ga(e),0],a=0,u=0;Ff.reset(),1===i?r=Oa+Da:-1===i&&(r=-Oa-Da);for(var f=0,c=t.length;f<c;++f)if(l=(s=t[f]).length)for(var s,l,h=s[l-1],d=h[0],p=h[1]/2+Ya,v=Qa(p),g=Ga(p),y=0;y<l;++y,d=b,v=x,g=w,h=_){var _=s[y],b=_[0],m=_[1]/2+Ya,x=Qa(m),w=Ga(m),M=b-d,A=M>=0?1:-1,T=A*M,N=T>qa,S=v*x;if(Ff.add(Xa(S*A*Qa(T),g*w+S*Ga(T))),a+=N?M+A*Ba:M,N^d>=e^b>=e){var E=Nu(Au(h),Au(_));ku(E);var k=Nu(o,E);ku(k);var C=(N^M>=0?-1:1)*eu(k[2]);(r>C||r===C&&(E[0]||E[1]))&&(u+=N^M>=0?1:-1)}}return(a<-Da||a<Da&&Ff<-Da)^1&u}function Hf(t,n,e,r){return function(i){var o,a,u,f=n(i),c=Uf(),s=n(c),l=!1,h={point:d,lineStart:v,lineEnd:g,polygonStart:function(){h.point=y,h.lineStart=_,h.lineEnd=b,a=[],o=[]},polygonEnd:function(){h.point=d,h.lineStart=v,h.lineEnd=g,a=N(a);var t=If(o,r);a.length?(l||(i.polygonStart(),l=!0),Yf(a,Xf,t,e,i)):t&&(l||(i.polygonStart(),l=!0),i.lineStart(),e(null,null,1,i),i.lineEnd()),l&&(i.polygonEnd(),l=!1),a=o=null},sphere:function(){i.polygonStart(),i.lineStart(),e(null,null,1,i),i.lineEnd(),i.polygonEnd()}};function d(n,e){t(n,e)&&i.point(n,e)}function p(t,n){f.point(t,n)}function v(){h.point=p,f.lineStart()}function g(){h.point=d,f.lineEnd()}function y(t,n){u.push([t,n]),s.point(t,n)}function _(){s.lineStart(),u=[]}function b(){y(u[0][0],u[0][1]),s.lineEnd();var t,n,e,r,f=s.clean(),h=c.result(),d=h.length;if(u.pop(),o.push(u),u=null,d)if(1&f){if((n=(e=h[0]).length-1)>0){for(l||(i.polygonStart(),l=!0),i.lineStart(),t=0;t<n;++t)i.point((r=e[t])[0],r[1]);i.lineEnd()}}else d>1&&2&f&&h.push(h.pop().concat(h.shift())),a.push(h.filter(jf))}return h}}function jf(t){return t.length>1}function Xf(t,n){return((t=t.x)[0]<0?t[1]-Oa-Da:Oa-t[1])-((n=n.x)[0]<0?n[1]-Oa-Da:Oa-n[1])}var Gf=Hf(function(){return!0},function(t){var n,e=NaN,r=NaN,i=NaN;return{lineStart:function(){t.lineStart(),n=1},point:function(o,a){var u=o>0?qa:-qa,f=Ha(o-e);Ha(f-qa)<Da?(t.point(e,r=(r+a)/2>0?Oa:-Oa),t.point(i,r),t.lineEnd(),t.lineStart(),t.point(u,r),t.point(o,r),n=0):i!==u&&f>=qa&&(Ha(e-i)<Da&&(e-=i*Da),Ha(o-u)<Da&&(o-=u*Da),r=function(t,n,e,r){var i,o,a=Qa(t-e);return Ha(a)>Da?ja((Qa(n)*(o=Ga(r))*Qa(e)-Qa(r)*(i=Ga(n))*Qa(t))/(i*o*a)):(n+r)/2}(e,r,o,a),t.point(i,r),t.lineEnd(),t.lineStart(),t.point(u,r),n=0),t.point(e=o,r=a),i=u},lineEnd:function(){t.lineEnd(),e=r=NaN},clean:function(){return 2-n}}},function(t,n,e,r){var i;if(null==t)i=e*Oa,r.point(-qa,i),r.point(0,i),r.point(qa,i),r.point(qa,0),r.point(qa,-i),r.point(0,-i),r.point(-qa,-i),r.point(-qa,0),r.point(-qa,i);else if(Ha(t[0]-n[0])>Da){var o=t[0]<n[0]?qa:-qa;i=e*o/2,r.point(-o,i),r.point(0,i),r.point(o,i)}else r.point(n[0],n[1])},[-qa,-Oa]);function Vf(t){var n=Ga(t),e=6*Ia,r=n>0,i=Ha(n)>Da;function o(t,e){return Ga(t)*Ga(e)>n}function a(t,e,r){var i=[1,0,0],o=Nu(Au(t),Au(e)),a=Tu(o,o),u=o[0],f=a-u*u;if(!f)return!r&&t;var c=n*a/f,s=-n*u/f,l=Nu(i,o),h=Eu(i,c);Su(h,Eu(o,s));var d=l,p=Tu(h,d),v=Tu(d,d),g=p*p-v*(Tu(h,h)-1);if(!(g<0)){var y=Ka(g),_=Eu(d,(-p-y)/v);if(Su(_,h),_=Mu(_),!r)return _;var b,m=t[0],x=e[0],w=t[1],M=e[1];x<m&&(b=m,m=x,x=b);var A=x-m,T=Ha(A-qa)<Da;if(!T&&M<w&&(b=w,w=M,M=b),T||A<Da?T?w+M>0^_[1]<(Ha(_[0]-m)<Da?w:M):w<=_[1]&&_[1]<=M:A>qa^(m<=_[0]&&_[0]<=x)){var N=Eu(d,(-p+y)/v);return Su(N,h),[_,Mu(N)]}}}function u(n,e){var i=r?t:qa-t,o=0;return n<-i?o|=1:n>i&&(o|=2),e<-i?o|=4:e>i&&(o|=8),o}return Hf(o,function(t){var n,e,f,c,s;return{lineStart:function(){c=f=!1,s=1},point:function(l,h){var d,p=[l,h],v=o(l,h),g=r?v?0:u(l,h):v?u(l+(l<0?qa:-qa),h):0;if(!n&&(c=f=v)&&t.lineStart(),v!==f&&(!(d=a(n,p))||qf(n,d)||qf(p,d))&&(p[0]+=Da,p[1]+=Da,v=o(p[0],p[1])),v!==f)s=0,v?(t.lineStart(),d=a(p,n),t.point(d[0],d[1])):(d=a(n,p),t.point(d[0],d[1]),t.lineEnd()),n=d;else if(i&&n&&r^v){var y;g&e||!(y=a(p,n,!0))||(s=0,r?(t.lineStart(),t.point(y[0][0],y[0][1]),t.point(y[1][0],y[1][1]),t.lineEnd()):(t.point(y[1][0],y[1][1]),t.lineEnd(),t.lineStart(),t.point(y[0][0],y[0][1])))}!v||n&&qf(n,p)||t.point(p[0],p[1]),n=p,f=v,e=g},lineEnd:function(){f&&t.lineEnd(),n=null},clean:function(){return s|(c&&f)<<1}}},function(n,r,i,o){Lf(o,t,e,i,n,r)},r?[0,-t]:[-qa,t-qa])}var $f=1e9,Wf=-$f;function Zf(t,n,e,r){function i(i,o){return t<=i&&i<=e&&n<=o&&o<=r}function o(i,o,u,c){var s=0,l=0;if(null==i||(s=a(i,u))!==(l=a(o,u))||f(i,o)<0^u>0)do{c.point(0===s||3===s?t:e,s>1?r:n)}while((s=(s+u+4)%4)!==l);else c.point(o[0],o[1])}function a(r,i){return Ha(r[0]-t)<Da?i>0?0:3:Ha(r[0]-e)<Da?i>0?2:1:Ha(r[1]-n)<Da?i>0?1:0:i>0?3:2}function u(t,n){return f(t.x,n.x)}function f(t,n){var e=a(t,1),r=a(n,1);return e!==r?e-r:0===e?n[1]-t[1]:1===e?t[0]-n[0]:2===e?t[1]-n[1]:n[0]-t[0]}return function(a){var f,c,s,l,h,d,p,v,g,y,_,b=a,m=Uf(),x={point:w,lineStart:function(){x.point=M,c&&c.push(s=[]);y=!0,g=!1,p=v=NaN},lineEnd:function(){f&&(M(l,h),d&&g&&m.rejoin(),f.push(m.result()));x.point=w,g&&b.lineEnd()},polygonStart:function(){b=m,f=[],c=[],_=!0},polygonEnd:function(){var n=function(){for(var n=0,e=0,i=c.length;e<i;++e)for(var o,a,u=c[e],f=1,s=u.length,l=u[0],h=l[0],d=l[1];f<s;++f)o=h,a=d,l=u[f],h=l[0],d=l[1],a<=r?d>r&&(h-o)*(r-a)>(d-a)*(t-o)&&++n:d<=r&&(h-o)*(r-a)<(d-a)*(t-o)&&--n;return n}(),e=_&&n,i=(f=N(f)).length;(e||i)&&(a.polygonStart(),e&&(a.lineStart(),o(null,null,1,a),a.lineEnd()),i&&Yf(f,u,n,o,a),a.polygonEnd());b=a,f=c=s=null}};function w(t,n){i(t,n)&&b.point(t,n)}function M(o,a){var u=i(o,a);if(c&&s.push([o,a]),y)l=o,h=a,d=u,y=!1,u&&(b.lineStart(),b.point(o,a));else if(u&&g)b.point(o,a);else{var f=[p=Math.max(Wf,Math.min($f,p)),v=Math.max(Wf,Math.min($f,v))],m=[o=Math.max(Wf,Math.min($f,o)),a=Math.max(Wf,Math.min($f,a))];!function(t,n,e,r,i,o){var a,u=t[0],f=t[1],c=0,s=1,l=n[0]-u,h=n[1]-f;if(a=e-u,l||!(a>0)){if(a/=l,l<0){if(a<c)return;a<s&&(s=a)}else if(l>0){if(a>s)return;a>c&&(c=a)}if(a=i-u,l||!(a<0)){if(a/=l,l<0){if(a>s)return;a>c&&(c=a)}else if(l>0){if(a<c)return;a<s&&(s=a)}if(a=r-f,h||!(a>0)){if(a/=h,h<0){if(a<c)return;a<s&&(s=a)}else if(h>0){if(a>s)return;a>c&&(c=a)}if(a=o-f,h||!(a<0)){if(a/=h,h<0){if(a>s)return;a>c&&(c=a)}else if(h>0){if(a<c)return;a<s&&(s=a)}return c>0&&(t[0]=u+c*l,t[1]=f+c*h),s<1&&(n[0]=u+s*l,n[1]=f+s*h),!0}}}}}(f,m,t,n,e,r)?u&&(b.lineStart(),b.point(o,a),_=!1):(g||(b.lineStart(),b.point(f[0],f[1])),b.point(m[0],m[1]),u||b.lineEnd(),_=!1)}p=o,v=a,g=u}return x}}var Qf,Jf,Kf,tc=Pa(),nc={sphere:iu,point:iu,lineStart:function(){nc.point=rc,nc.lineEnd=ec},lineEnd:iu,polygonStart:iu,polygonEnd:iu};function ec(){nc.point=nc.lineEnd=iu}function rc(t,n){Qf=t*=Ia,Jf=Qa(n*=Ia),Kf=Ga(n),nc.point=ic}function ic(t,n){t*=Ia;var e=Qa(n*=Ia),r=Ga(n),i=Ha(t-Qf),o=Ga(i),a=r*Qa(i),u=Kf*e-Jf*r*o,f=Jf*e+Kf*r*o;tc.add(Xa(Ka(a*a+u*u),f)),Qf=t,Jf=e,Kf=r}function oc(t){return tc.reset(),su(t,nc),+tc}var ac=[null,null],uc={type:"LineString",coordinates:ac};function fc(t,n){return ac[0]=t,ac[1]=n,oc(uc)}var cc={Feature:function(t,n){return lc(t.geometry,n)},FeatureCollection:function(t,n){for(var e=t.features,r=-1,i=e.length;++r<i;)if(lc(e[r].geometry,n))return!0;return!1}},sc={Sphere:function(){return!0},Point:function(t,n){return hc(t.coordinates,n)},MultiPoint:function(t,n){for(var e=t.coordinates,r=-1,i=e.length;++r<i;)if(hc(e[r],n))return!0;return!1},LineString:function(t,n){return dc(t.coordinates,n)},MultiLineString:function(t,n){for(var e=t.coordinates,r=-1,i=e.length;++r<i;)if(dc(e[r],n))return!0;return!1},Polygon:function(t,n){return pc(t.coordinates,n)},MultiPolygon:function(t,n){for(var e=t.coordinates,r=-1,i=e.length;++r<i;)if(pc(e[r],n))return!0;return!1},GeometryCollection:function(t,n){for(var e=t.geometries,r=-1,i=e.length;++r<i;)if(lc(e[r],n))return!0;return!1}};function lc(t,n){return!(!t||!sc.hasOwnProperty(t.type))&&sc[t.type](t,n)}function hc(t,n){return 0===fc(t,n)}function dc(t,n){var e=fc(t[0],t[1]);return fc(t[0],n)+fc(n,t[1])<=e+Da}function pc(t,n){return!!If(t.map(vc),gc(n))}function vc(t){return(t=t.map(gc)).pop(),t}function gc(t){return[t[0]*Ia,t[1]*Ia]}function yc(t,n,e){var r=g(t,n-Da,e).concat(n);return function(t){return r.map(function(n){return[t,n]})}}function _c(t,n,e){var r=g(t,n-Da,e).concat(n);return function(t){return r.map(function(n){return[n,t]})}}function bc(){var t,n,e,r,i,o,a,u,f,c,s,l,h=10,d=h,p=90,v=360,y=2.5;function _(){return{type:"MultiLineString",coordinates:b()}}function b(){return g(Va(r/p)*p,e,p).map(s).concat(g(Va(u/v)*v,a,v).map(l)).concat(g(Va(n/h)*h,t,h).filter(function(t){return Ha(t%p)>Da}).map(f)).concat(g(Va(o/d)*d,i,d).filter(function(t){return Ha(t%v)>Da}).map(c))}return _.lines=function(){return b().map(function(t){return{type:"LineString",coordinates:t}})},_.outline=function(){return{type:"Polygon",coordinates:[s(r).concat(l(a).slice(1),s(e).reverse().slice(1),l(u).reverse().slice(1))]}},_.extent=function(t){return arguments.length?_.extentMajor(t).extentMinor(t):_.extentMinor()},_.extentMajor=function(t){return arguments.length?(r=+t[0][0],e=+t[1][0],u=+t[0][1],a=+t[1][1],r>e&&(t=r,r=e,e=t),u>a&&(t=u,u=a,a=t),_.precision(y)):[[r,u],[e,a]]},_.extentMinor=function(e){return arguments.length?(n=+e[0][0],t=+e[1][0],o=+e[0][1],i=+e[1][1],n>t&&(e=n,n=t,t=e),o>i&&(e=o,o=i,i=e),_.precision(y)):[[n,o],[t,i]]},_.step=function(t){return arguments.length?_.stepMajor(t).stepMinor(t):_.stepMinor()},_.stepMajor=function(t){return arguments.length?(p=+t[0],v=+t[1],_):[p,v]},_.stepMinor=function(t){return arguments.length?(h=+t[0],d=+t[1],_):[h,d]},_.precision=function(h){return arguments.length?(y=+h,f=yc(o,i,90),c=_c(n,t,y),s=yc(u,a,90),l=_c(r,e,y),_):y},_.extentMajor([[-180,-90+Da],[180,90-Da]]).extentMinor([[-180,-80-Da],[180,80+Da]])}function mc(t){return t}var xc,wc,Mc,Ac,Tc=Pa(),Nc=Pa(),Sc={point:iu,lineStart:iu,lineEnd:iu,polygonStart:function(){Sc.lineStart=Ec,Sc.lineEnd=Pc},polygonEnd:function(){Sc.lineStart=Sc.lineEnd=Sc.point=iu,Tc.add(Ha(Nc)),Nc.reset()},result:function(){var t=Tc/2;return Tc.reset(),t}};function Ec(){Sc.point=kc}function kc(t,n){Sc.point=Cc,xc=Mc=t,wc=Ac=n}function Cc(t,n){Nc.add(Ac*t-Mc*n),Mc=t,Ac=n}function Pc(){Cc(xc,wc)}var zc=1/0,Rc=zc,Lc=-zc,Dc=Lc,Uc={point:function(t,n){t<zc&&(zc=t);t>Lc&&(Lc=t);n<Rc&&(Rc=n);n>Dc&&(Dc=n)},lineStart:iu,lineEnd:iu,polygonStart:iu,polygonEnd:iu,result:function(){var t=[[zc,Rc],[Lc,Dc]];return Lc=Dc=-(Rc=zc=1/0),t}};var qc,Oc,Yc,Bc,Fc=0,Ic=0,Hc=0,jc=0,Xc=0,Gc=0,Vc=0,$c=0,Wc=0,Zc={point:Qc,lineStart:Jc,lineEnd:ns,polygonStart:function(){Zc.lineStart=es,Zc.lineEnd=rs},polygonEnd:function(){Zc.point=Qc,Zc.lineStart=Jc,Zc.lineEnd=ns},result:function(){var t=Wc?[Vc/Wc,$c/Wc]:Gc?[jc/Gc,Xc/Gc]:Hc?[Fc/Hc,Ic/Hc]:[NaN,NaN];return Fc=Ic=Hc=jc=Xc=Gc=Vc=$c=Wc=0,t}};function Qc(t,n){Fc+=t,Ic+=n,++Hc}function Jc(){Zc.point=Kc}function Kc(t,n){Zc.point=ts,Qc(Yc=t,Bc=n)}function ts(t,n){var e=t-Yc,r=n-Bc,i=Ka(e*e+r*r);jc+=i*(Yc+t)/2,Xc+=i*(Bc+n)/2,Gc+=i,Qc(Yc=t,Bc=n)}function ns(){Zc.point=Qc}function es(){Zc.point=is}function rs(){os(qc,Oc)}function is(t,n){Zc.point=os,Qc(qc=Yc=t,Oc=Bc=n)}function os(t,n){var e=t-Yc,r=n-Bc,i=Ka(e*e+r*r);jc+=i*(Yc+t)/2,Xc+=i*(Bc+n)/2,Gc+=i,Vc+=(i=Bc*t-Yc*n)*(Yc+t),$c+=i*(Bc+n),Wc+=3*i,Qc(Yc=t,Bc=n)}function as(t){this._context=t}as.prototype={_radius:4.5,pointRadius:function(t){return this._radius=t,this},polygonStart:function(){this._line=0},polygonEnd:function(){this._line=NaN},lineStart:function(){this._point=0},lineEnd:function(){0===this._line&&this._context.closePath(),this._point=NaN},point:function(t,n){switch(this._point){case 0:this._context.moveTo(t,n),this._point=1;break;case 1:this._context.lineTo(t,n);break;default:this._context.moveTo(t+this._radius,n),this._context.arc(t,n,this._radius,0,Ba)}},result:iu};var us,fs,cs,ss,ls,hs=Pa(),ds={point:iu,lineStart:function(){ds.point=ps},lineEnd:function(){us&&vs(fs,cs),ds.point=iu},polygonStart:function(){us=!0},polygonEnd:function(){us=null},result:function(){var t=+hs;return hs.reset(),t}};function ps(t,n){ds.point=vs,fs=ss=t,cs=ls=n}function vs(t,n){ss-=t,ls-=n,hs.add(Ka(ss*ss+ls*ls)),ss=t,ls=n}function gs(){this._string=[]}function ys(t){return"m0,"+t+"a"+t+","+t+" 0 1,1 0,"+-2*t+"a"+t+","+t+" 0 1,1 0,"+2*t+"z"}function _s(t){return function(n){var e=new bs;for(var r in t)e[r]=t[r];return e.stream=n,e}}function bs(){}function ms(t,n,e){var r=t.clipExtent&&t.clipExtent();return t.scale(150).translate([0,0]),null!=r&&t.clipExtent(null),su(e,t.stream(Uc)),n(Uc.result()),null!=r&&t.clipExtent(r),t}function xs(t,n,e){return ms(t,function(e){var r=n[1][0]-n[0][0],i=n[1][1]-n[0][1],o=Math.min(r/(e[1][0]-e[0][0]),i/(e[1][1]-e[0][1])),a=+n[0][0]+(r-o*(e[1][0]+e[0][0]))/2,u=+n[0][1]+(i-o*(e[1][1]+e[0][1]))/2;t.scale(150*o).translate([a,u])},e)}function ws(t,n,e){return xs(t,[[0,0],n],e)}function Ms(t,n,e){return ms(t,function(e){var r=+n,i=r/(e[1][0]-e[0][0]),o=(r-i*(e[1][0]+e[0][0]))/2,a=-i*e[0][1];t.scale(150*i).translate([o,a])},e)}function As(t,n,e){return ms(t,function(e){var r=+n,i=r/(e[1][1]-e[0][1]),o=-i*e[0][0],a=(r-i*(e[1][1]+e[0][1]))/2;t.scale(150*i).translate([o,a])},e)}gs.prototype={_radius:4.5,_circle:ys(4.5),pointRadius:function(t){return(t=+t)!==this._radius&&(this._radius=t,this._circle=null),this},polygonStart:function(){this._line=0},polygonEnd:function(){this._line=NaN},lineStart:function(){this._point=0},lineEnd:function(){0===this._line&&this._string.push("Z"),this._point=NaN},point:function(t,n){switch(this._point){case 0:this._string.push("M",t,",",n),this._point=1;break;case 1:this._string.push("L",t,",",n);break;default:null==this._circle&&(this._circle=ys(this._radius)),this._string.push("M",t,",",n,this._circle)}},result:function(){if(this._string.length){var t=this._string.join("");return this._string=[],t}return null}},bs.prototype={constructor:bs,point:function(t,n){this.stream.point(t,n)},sphere:function(){this.stream.sphere()},lineStart:function(){this.stream.lineStart()},lineEnd:function(){this.stream.lineEnd()},polygonStart:function(){this.stream.polygonStart()},polygonEnd:function(){this.stream.polygonEnd()}};var Ts=16,Ns=Ga(30*Ia);function Ss(t,n){return+n?function(t,n){function e(r,i,o,a,u,f,c,s,l,h,d,p,v,g){var y=c-r,_=s-i,b=y*y+_*_;if(b>4*n&&v--){var m=a+h,x=u+d,w=f+p,M=Ka(m*m+x*x+w*w),A=eu(w/=M),T=Ha(Ha(w)-1)<Da||Ha(o-l)<Da?(o+l)/2:Xa(x,m),N=t(T,A),S=N[0],E=N[1],k=S-r,C=E-i,P=_*k-y*C;(P*P/b>n||Ha((y*k+_*C)/b-.5)>.3||a*h+u*d+f*p<Ns)&&(e(r,i,o,a,u,f,S,E,T,m/=M,x/=M,w,v,g),g.point(S,E),e(S,E,T,m,x,w,c,s,l,h,d,p,v,g))}}return function(n){var r,i,o,a,u,f,c,s,l,h,d,p,v={point:g,lineStart:y,lineEnd:b,polygonStart:function(){n.polygonStart(),v.lineStart=m},polygonEnd:function(){n.polygonEnd(),v.lineStart=y}};function g(e,r){e=t(e,r),n.point(e[0],e[1])}function y(){s=NaN,v.point=_,n.lineStart()}function _(r,i){var o=Au([r,i]),a=t(r,i);e(s,l,c,h,d,p,s=a[0],l=a[1],c=r,h=o[0],d=o[1],p=o[2],Ts,n),n.point(s,l)}function b(){v.point=g,n.lineEnd()}function m(){y(),v.point=x,v.lineEnd=w}function x(t,n){_(r=t,n),i=s,o=l,a=h,u=d,f=p,v.point=_}function w(){e(s,l,c,h,d,p,i,o,r,a,u,f,Ts,n),v.lineEnd=b,b()}return v}}(t,n):function(t){return _s({point:function(n,e){n=t(n,e),this.stream.point(n[0],n[1])}})}(t)}var Es=_s({point:function(t,n){this.stream.point(t*Ia,n*Ia)}});function ks(t,n,e,r){var i=Ga(r),o=Qa(r),a=i*t,u=o*t,f=i/t,c=o/t,s=(o*e-i*n)/t,l=(o*n+i*e)/t;function h(t,r){return[a*t-u*r+n,e-u*t-a*r]}return h.invert=function(t,n){return[f*t-c*n+s,l-c*t-f*n]},h}function Cs(t){return Ps(function(){return t})()}function Ps(t){var n,e,r,i,o,a,u,f,c,s,l=150,h=480,d=250,p=0,v=0,g=0,y=0,_=0,b=0,m=null,x=Gf,w=null,M=mc,A=.5;function T(t){return f(t[0]*Ia,t[1]*Ia)}function N(t){return(t=f.invert(t[0],t[1]))&&[t[0]*Fa,t[1]*Fa]}function S(){var t=ks(l,0,0,b).apply(null,n(p,v)),r=(b?ks:function(t,n,e){function r(r,i){return[n+t*r,e-t*i]}return r.invert=function(r,i){return[(r-n)/t,(e-i)/t]},r})(l,h-t[0],d-t[1],b);return e=kf(g,y,_),u=Sf(n,r),f=Sf(e,u),a=Ss(u,A),E()}function E(){return c=s=null,T}return T.stream=function(t){return c&&s===t?c:c=Es(function(t){return _s({point:function(n,e){var r=t(n,e);return this.stream.point(r[0],r[1])}})}(e)(x(a(M(s=t)))))},T.preclip=function(t){return arguments.length?(x=t,m=void 0,E()):x},T.postclip=function(t){return arguments.length?(M=t,w=r=i=o=null,E()):M},T.clipAngle=function(t){return arguments.length?(x=+t?Vf(m=t*Ia):(m=null,Gf),E()):m*Fa},T.clipExtent=function(t){return arguments.length?(M=null==t?(w=r=i=o=null,mc):Zf(w=+t[0][0],r=+t[0][1],i=+t[1][0],o=+t[1][1]),E()):null==w?null:[[w,r],[i,o]]},T.scale=function(t){return arguments.length?(l=+t,S()):l},T.translate=function(t){return arguments.length?(h=+t[0],d=+t[1],S()):[h,d]},T.center=function(t){return arguments.length?(p=t[0]%360*Ia,v=t[1]%360*Ia,S()):[p*Fa,v*Fa]},T.rotate=function(t){return arguments.length?(g=t[0]%360*Ia,y=t[1]%360*Ia,_=t.length>2?t[2]%360*Ia:0,S()):[g*Fa,y*Fa,_*Fa]},T.angle=function(t){return arguments.length?(b=t%360*Ia,S()):b*Fa},T.precision=function(t){return arguments.length?(a=Ss(u,A=t*t),E()):Ka(A)},T.fitExtent=function(t,n){return xs(T,t,n)},T.fitSize=function(t,n){return ws(T,t,n)},T.fitWidth=function(t,n){return Ms(T,t,n)},T.fitHeight=function(t,n){return As(T,t,n)},function(){return n=t.apply(this,arguments),T.invert=n.invert&&N,S()}}function zs(t){var n=0,e=qa/3,r=Ps(t),i=r(n,e);return i.parallels=function(t){return arguments.length?r(n=t[0]*Ia,e=t[1]*Ia):[n*Fa,e*Fa]},i}function Rs(t,n){var e=Qa(t),r=(e+Qa(n))/2;if(Ha(r)<Da)return function(t){var n=Ga(t);function e(t,e){return[t*n,Qa(e)/n]}return e.invert=function(t,e){return[t/n,eu(e*n)]},e}(t);var i=1+e*(2*r-e),o=Ka(i)/r;function a(t,n){var e=Ka(i-2*r*Qa(n))/r;return[e*Qa(t*=r),o-e*Ga(t)]}return a.invert=function(t,n){var e=o-n;return[Xa(t,Ha(e))/r*Ja(e),eu((i-(t*t+e*e)*r*r)/(2*r))]},a}function Ls(){return zs(Rs).scale(155.424).center([0,33.6442])}function Ds(){return Ls().parallels([29.5,45.5]).scale(1070).translate([480,250]).rotate([96,0]).center([-.6,38.7])}function Us(t){return function(n,e){var r=Ga(n),i=Ga(e),o=t(r*i);return[o*i*Qa(n),o*Qa(e)]}}function qs(t){return function(n,e){var r=Ka(n*n+e*e),i=t(r),o=Qa(i),a=Ga(i);return[Xa(n*o,r*a),eu(r&&e*o/r)]}}var Os=Us(function(t){return Ka(2/(1+t))});Os.invert=qs(function(t){return 2*eu(t/2)});var Ys=Us(function(t){return(t=nu(t))&&t/Qa(t)});function Bs(t,n){return[t,Wa(tu((Oa+n)/2))]}function Fs(t){var n,e,r,i=Cs(t),o=i.center,a=i.scale,u=i.translate,f=i.clipExtent,c=null;function s(){var o=qa*a(),u=i(Rf(i.rotate()).invert([0,0]));return f(null==c?[[u[0]-o,u[1]-o],[u[0]+o,u[1]+o]]:t===Bs?[[Math.max(u[0]-o,c),n],[Math.min(u[0]+o,e),r]]:[[c,Math.max(u[1]-o,n)],[e,Math.min(u[1]+o,r)]])}return i.scale=function(t){return arguments.length?(a(t),s()):a()},i.translate=function(t){return arguments.length?(u(t),s()):u()},i.center=function(t){return arguments.length?(o(t),s()):o()},i.clipExtent=function(t){return arguments.length?(null==t?c=n=e=r=null:(c=+t[0][0],n=+t[0][1],e=+t[1][0],r=+t[1][1]),s()):null==c?null:[[c,n],[e,r]]},s()}function Is(t){return tu((Oa+t)/2)}function Hs(t,n){var e=Ga(t),r=t===n?Qa(t):Wa(e/Ga(n))/Wa(Is(n)/Is(t)),i=e*Za(Is(t),r)/r;if(!r)return Bs;function o(t,n){i>0?n<-Oa+Da&&(n=-Oa+Da):n>Oa-Da&&(n=Oa-Da);var e=i/Za(Is(n),r);return[e*Qa(r*t),i-e*Ga(r*t)]}return o.invert=function(t,n){var e=i-n,o=Ja(r)*Ka(t*t+e*e);return[Xa(t,Ha(e))/r*Ja(e),2*ja(Za(i/o,1/r))-Oa]},o}function js(t,n){return[t,n]}function Xs(t,n){var e=Ga(t),r=t===n?Qa(t):(e-Ga(n))/(n-t),i=e/r+t;if(Ha(r)<Da)return js;function o(t,n){var e=i-n,o=r*t;return[e*Qa(o),i-e*Ga(o)]}return o.invert=function(t,n){var e=i-n;return[Xa(t,Ha(e))/r*Ja(e),i-Ja(r)*Ka(t*t+e*e)]},o}Ys.invert=qs(function(t){return t}),Bs.invert=function(t,n){return[t,2*ja($a(n))-Oa]},js.invert=js;var Gs=1.340264,Vs=-.081106,$s=893e-6,Ws=.003796,Zs=Ka(3)/2;function Qs(t,n){var e=eu(Zs*Qa(n)),r=e*e,i=r*r*r;return[t*Ga(e)/(Zs*(Gs+3*Vs*r+i*(7*$s+9*Ws*r))),e*(Gs+Vs*r+i*($s+Ws*r))]}function Js(t,n){var e=Ga(n),r=Ga(t)*e;return[e*Qa(t)/r,Qa(n)/r]}function Ks(t,n,e,r){return 1===t&&1===n&&0===e&&0===r?mc:_s({point:function(i,o){this.stream.point(i*t+e,o*n+r)}})}function tl(t,n){var e=n*n,r=e*e;return[t*(.8707-.131979*e+r*(r*(.003971*e-.001529*r)-.013791)),n*(1.007226+e*(.015085+r*(.028874*e-.044475-.005916*r)))]}function nl(t,n){return[Ga(n)*Qa(t),Qa(n)]}function el(t,n){var e=Ga(n),r=1+Ga(t)*e;return[e*Qa(t)/r,Qa(n)/r]}function rl(t,n){return[Wa(tu((Oa+n)/2)),-t]}function il(t,n){return t.parent===n.parent?1:2}function ol(t,n){return t+n.x}function al(t,n){return Math.max(t,n.y)}function ul(t){var n=0,e=t.children,r=e&&e.length;if(r)for(;--r>=0;)n+=e[r].value;else n=1;t.value=n}function fl(t,n){var e,r,i,o,a,u=new hl(t),f=+t.value&&(u.value=t.value),c=[u];for(null==n&&(n=cl);e=c.pop();)if(f&&(e.value=+e.data.value),(i=n(e.data))&&(a=i.length))for(e.children=new Array(a),o=a-1;o>=0;--o)c.push(r=e.children[o]=new hl(i[o])),r.parent=e,r.depth=e.depth+1;return u.eachBefore(ll)}function cl(t){return t.children}function sl(t){t.data=t.data.data}function ll(t){var n=0;do{t.height=n}while((t=t.parent)&&t.height<++n)}function hl(t){this.data=t,this.depth=this.height=0,this.parent=null}Qs.invert=function(t,n){for(var e,r=n,i=r*r,o=i*i*i,a=0;a<12&&(o=(i=(r-=e=(r*(Gs+Vs*i+o*($s+Ws*i))-n)/(Gs+3*Vs*i+o*(7*$s+9*Ws*i)))*r)*i*i,!(Ha(e)<Ua));++a);return[Zs*t*(Gs+3*Vs*i+o*(7*$s+9*Ws*i))/Ga(r),eu(Qa(r)/Zs)]},Js.invert=qs(ja),tl.invert=function(t,n){var e,r=n,i=25;do{var o=r*r,a=o*o;r-=e=(r*(1.007226+o*(.015085+a*(.028874*o-.044475-.005916*a)))-n)/(1.007226+o*(.045255+a*(.259866*o-.311325-.005916*11*a)))}while(Ha(e)>Da&&--i>0);return[t/(.8707+(o=r*r)*(o*(o*o*o*(.003971-.001529*o)-.013791)-.131979)),r]},nl.invert=qs(eu),el.invert=qs(function(t){return 2*ja(t)}),rl.invert=function(t,n){return[-n,2*ja($a(t))-Oa]},hl.prototype=fl.prototype={constructor:hl,count:function(){return this.eachAfter(ul)},each:function(t){var n,e,r,i,o=this,a=[o];do{for(n=a.reverse(),a=[];o=n.pop();)if(t(o),e=o.children)for(r=0,i=e.length;r<i;++r)a.push(e[r])}while(a.length);return this},eachAfter:function(t){for(var n,e,r,i=this,o=[i],a=[];i=o.pop();)if(a.push(i),n=i.children)for(e=0,r=n.length;e<r;++e)o.push(n[e]);for(;i=a.pop();)t(i);return this},eachBefore:function(t){for(var n,e,r=this,i=[r];r=i.pop();)if(t(r),n=r.children)for(e=n.length-1;e>=0;--e)i.push(n[e]);return this},sum:function(t){return this.eachAfter(function(n){for(var e=+t(n.data)||0,r=n.children,i=r&&r.length;--i>=0;)e+=r[i].value;n.value=e})},sort:function(t){return this.eachBefore(function(n){n.children&&n.children.sort(t)})},path:function(t){for(var n=this,e=function(t,n){if(t===n)return t;var e=t.ancestors(),r=n.ancestors(),i=null;for(t=e.pop(),n=r.pop();t===n;)i=t,t=e.pop(),n=r.pop();return i}(n,t),r=[n];n!==e;)n=n.parent,r.push(n);for(var i=r.length;t!==e;)r.splice(i,0,t),t=t.parent;return r},ancestors:function(){for(var t=this,n=[t];t=t.parent;)n.push(t);return n},descendants:function(){var t=[];return this.each(function(n){t.push(n)}),t},leaves:function(){var t=[];return this.eachBefore(function(n){n.children||t.push(n)}),t},links:function(){var t=this,n=[];return t.each(function(e){e!==t&&n.push({source:e.parent,target:e})}),n},copy:function(){return fl(this).eachBefore(sl)}};var dl=Array.prototype.slice;function pl(t){for(var n,e,r=0,i=(t=function(t){for(var n,e,r=t.length;r;)e=Math.random()*r--|0,n=t[r],t[r]=t[e],t[e]=n;return t}(dl.call(t))).length,o=[];r<i;)n=t[r],e&&yl(e,n)?++r:(e=bl(o=vl(o,n)),r=0);return e}function vl(t,n){var e,r;if(_l(n,t))return[n];for(e=0;e<t.length;++e)if(gl(n,t[e])&&_l(ml(t[e],n),t))return[t[e],n];for(e=0;e<t.length-1;++e)for(r=e+1;r<t.length;++r)if(gl(ml(t[e],t[r]),n)&&gl(ml(t[e],n),t[r])&&gl(ml(t[r],n),t[e])&&_l(xl(t[e],t[r],n),t))return[t[e],t[r],n];throw new Error}function gl(t,n){var e=t.r-n.r,r=n.x-t.x,i=n.y-t.y;return e<0||e*e<r*r+i*i}function yl(t,n){var e=t.r-n.r+1e-6,r=n.x-t.x,i=n.y-t.y;return e>0&&e*e>r*r+i*i}function _l(t,n){for(var e=0;e<n.length;++e)if(!yl(t,n[e]))return!1;return!0}function bl(t){switch(t.length){case 1:return{x:(n=t[0]).x,y:n.y,r:n.r};case 2:return ml(t[0],t[1]);case 3:return xl(t[0],t[1],t[2])}var n}function ml(t,n){var e=t.x,r=t.y,i=t.r,o=n.x,a=n.y,u=n.r,f=o-e,c=a-r,s=u-i,l=Math.sqrt(f*f+c*c);return{x:(e+o+f/l*s)/2,y:(r+a+c/l*s)/2,r:(l+i+u)/2}}function xl(t,n,e){var r=t.x,i=t.y,o=t.r,a=n.x,u=n.y,f=n.r,c=e.x,s=e.y,l=e.r,h=r-a,d=r-c,p=i-u,v=i-s,g=f-o,y=l-o,_=r*r+i*i-o*o,b=_-a*a-u*u+f*f,m=_-c*c-s*s+l*l,x=d*p-h*v,w=(p*m-v*b)/(2*x)-r,M=(v*g-p*y)/x,A=(d*b-h*m)/(2*x)-i,T=(h*y-d*g)/x,N=M*M+T*T-1,S=2*(o+w*M+A*T),E=w*w+A*A-o*o,k=-(N?(S+Math.sqrt(S*S-4*N*E))/(2*N):E/S);return{x:r+w+M*k,y:i+A+T*k,r:k}}function wl(t,n,e){var r,i,o,a,u=t.x-n.x,f=t.y-n.y,c=u*u+f*f;c?(i=n.r+e.r,i*=i,a=t.r+e.r,i>(a*=a)?(r=(c+a-i)/(2*c),o=Math.sqrt(Math.max(0,a/c-r*r)),e.x=t.x-r*u-o*f,e.y=t.y-r*f+o*u):(r=(c+i-a)/(2*c),o=Math.sqrt(Math.max(0,i/c-r*r)),e.x=n.x+r*u-o*f,e.y=n.y+r*f+o*u)):(e.x=n.x+e.r,e.y=n.y)}function Ml(t,n){var e=t.r+n.r-1e-6,r=n.x-t.x,i=n.y-t.y;return e>0&&e*e>r*r+i*i}function Al(t){var n=t._,e=t.next._,r=n.r+e.r,i=(n.x*e.r+e.x*n.r)/r,o=(n.y*e.r+e.y*n.r)/r;return i*i+o*o}function Tl(t){this._=t,this.next=null,this.previous=null}function Nl(t){if(!(i=t.length))return 0;var n,e,r,i,o,a,u,f,c,s,l;if((n=t[0]).x=0,n.y=0,!(i>1))return n.r;if(e=t[1],n.x=-e.r,e.x=n.r,e.y=0,!(i>2))return n.r+e.r;wl(e,n,r=t[2]),n=new Tl(n),e=new Tl(e),r=new Tl(r),n.next=r.previous=e,e.next=n.previous=r,r.next=e.previous=n;t:for(u=3;u<i;++u){wl(n._,e._,r=t[u]),r=new Tl(r),f=e.next,c=n.previous,s=e._.r,l=n._.r;do{if(s<=l){if(Ml(f._,r._)){e=f,n.next=e,e.previous=n,--u;continue t}s+=f._.r,f=f.next}else{if(Ml(c._,r._)){(n=c).next=e,e.previous=n,--u;continue t}l+=c._.r,c=c.previous}}while(f!==c.next);for(r.previous=n,r.next=e,n.next=e.previous=e=r,o=Al(n);(r=r.next)!==e;)(a=Al(r))<o&&(n=r,o=a);e=n.next}for(n=[e._],r=e;(r=r.next)!==e;)n.push(r._);for(r=pl(n),u=0;u<i;++u)(n=t[u]).x-=r.x,n.y-=r.y;return r.r}function Sl(t){if("function"!=typeof t)throw new Error;return t}function El(){return 0}function kl(t){return function(){return t}}function Cl(t){return Math.sqrt(t.value)}function Pl(t){return function(n){n.children||(n.r=Math.max(0,+t(n)||0))}}function zl(t,n){return function(e){if(r=e.children){var r,i,o,a=r.length,u=t(e)*n||0;if(u)for(i=0;i<a;++i)r[i].r+=u;if(o=Nl(r),u)for(i=0;i<a;++i)r[i].r-=u;e.r=o+u}}}function Rl(t){return function(n){var e=n.parent;n.r*=t,e&&(n.x=e.x+t*n.x,n.y=e.y+t*n.y)}}function Ll(t){t.x0=Math.round(t.x0),t.y0=Math.round(t.y0),t.x1=Math.round(t.x1),t.y1=Math.round(t.y1)}function Dl(t,n,e,r,i){for(var o,a=t.children,u=-1,f=a.length,c=t.value&&(r-n)/t.value;++u<f;)(o=a[u]).y0=e,o.y1=i,o.x0=n,o.x1=n+=o.value*c}var Ul="$",ql={depth:-1},Ol={};function Yl(t){return t.id}function Bl(t){return t.parentId}function Fl(t,n){return t.parent===n.parent?1:2}function Il(t){var n=t.children;return n?n[0]:t.t}function Hl(t){var n=t.children;return n?n[n.length-1]:t.t}function jl(t,n,e){var r=e/(n.i-t.i);n.c-=r,n.s+=e,t.c+=r,n.z+=e,n.m+=e}function Xl(t,n,e){return t.a.parent===n.parent?t.a:e}function Gl(t,n){this._=t,this.parent=null,this.children=null,this.A=null,this.a=this,this.z=0,this.m=0,this.c=0,this.s=0,this.t=null,this.i=n}function Vl(t,n,e,r,i){for(var o,a=t.children,u=-1,f=a.length,c=t.value&&(i-e)/t.value;++u<f;)(o=a[u]).x0=n,o.x1=r,o.y0=e,o.y1=e+=o.value*c}Gl.prototype=Object.create(hl.prototype);var $l=(1+Math.sqrt(5))/2;function Wl(t,n,e,r,i,o){for(var a,u,f,c,s,l,h,d,p,v,g,y=[],_=n.children,b=0,m=0,x=_.length,w=n.value;b<x;){f=i-e,c=o-r;do{s=_[m++].value}while(!s&&m<x);for(l=h=s,g=s*s*(v=Math.max(c/f,f/c)/(w*t)),p=Math.max(h/g,g/l);m<x;++m){if(s+=u=_[m].value,u<l&&(l=u),u>h&&(h=u),g=s*s*v,(d=Math.max(h/g,g/l))>p){s-=u;break}p=d}y.push(a={value:s,dice:f<c,children:_.slice(b,m)}),a.dice?Dl(a,e,r,i,w?r+=c*s/w:o):Vl(a,e,r,w?e+=f*s/w:i,o),w-=s,b=m}return y}var Zl=function t(n){function e(t,e,r,i,o){Wl(n,t,e,r,i,o)}return e.ratio=function(n){return t((n=+n)>1?n:1)},e}($l);var Ql=function t(n){function e(t,e,r,i,o){if((a=t._squarify)&&a.ratio===n)for(var a,u,f,c,s,l=-1,h=a.length,d=t.value;++l<h;){for(f=(u=a[l]).children,c=u.value=0,s=f.length;c<s;++c)u.value+=f[c].value;u.dice?Dl(u,e,r,i,r+=(o-r)*u.value/d):Vl(u,e,r,e+=(i-e)*u.value/d,o),d-=u.value}else t._squarify=a=Wl(n,t,e,r,i,o),a.ratio=n}return e.ratio=function(n){return t((n=+n)>1?n:1)},e}($l);function Jl(t,n){return t[0]-n[0]||t[1]-n[1]}function Kl(t){for(var n,e,r,i=t.length,o=[0,1],a=2,u=2;u<i;++u){for(;a>1&&(n=t[o[a-2]],e=t[o[a-1]],r=t[u],(e[0]-n[0])*(r[1]-n[1])-(e[1]-n[1])*(r[0]-n[0])<=0);)--a;o[a++]=u}return o.slice(0,a)}function th(){return Math.random()}var nh=function t(n){function e(t,e){return t=null==t?0:+t,e=null==e?1:+e,1===arguments.length?(e=t,t=0):e-=t,function(){return n()*e+t}}return e.source=t,e}(th),eh=function t(n){function e(t,e){var r,i;return t=null==t?0:+t,e=null==e?1:+e,function(){var o;if(null!=r)o=r,r=null;else do{r=2*n()-1,o=2*n()-1,i=r*r+o*o}while(!i||i>1);return t+e*o*Math.sqrt(-2*Math.log(i)/i)}}return e.source=t,e}(th),rh=function t(n){function e(){var t=eh.source(n).apply(this,arguments);return function(){return Math.exp(t())}}return e.source=t,e}(th),ih=function t(n){function e(t){return function(){for(var e=0,r=0;r<t;++r)e+=n();return e}}return e.source=t,e}(th),oh=function t(n){function e(t){var e=ih.source(n)(t);return function(){return e()/t}}return e.source=t,e}(th),ah=function t(n){function e(t){return function(){return-Math.log(1-n())/t}}return e.source=t,e}(th),uh=Array.prototype,fh=uh.map,ch=uh.slice,sh={name:"implicit"};function lh(t){var n=Ki(),e=[],r=sh;function i(i){var o=i+"",a=n.get(o);if(!a){if(r!==sh)return r;n.set(o,a=e.push(i))}return t[(a-1)%t.length]}return t=null==t?[]:ch.call(t),i.domain=function(t){if(!arguments.length)return e.slice();e=[],n=Ki();for(var r,o,a=-1,u=t.length;++a<u;)n.has(o=(r=t[a])+"")||n.set(o,e.push(r));return i},i.range=function(n){return arguments.length?(t=ch.call(n),i):t.slice()},i.unknown=function(t){return arguments.length?(r=t,i):r},i.copy=function(){return lh().domain(e).range(t).unknown(r)},i}function hh(){var t,n,e=lh().unknown(void 0),r=e.domain,i=e.range,o=[0,1],a=!1,u=0,f=0,c=.5;function s(){var e=r().length,s=o[1]<o[0],l=o[s-0],h=o[1-s];t=(h-l)/Math.max(1,e-u+2*f),a&&(t=Math.floor(t)),l+=(h-l-t*(e-u))*c,n=t*(1-u),a&&(l=Math.round(l),n=Math.round(n));var d=g(e).map(function(n){return l+t*n});return i(s?d.reverse():d)}return delete e.unknown,e.domain=function(t){return arguments.length?(r(t),s()):r()},e.range=function(t){return arguments.length?(o=[+t[0],+t[1]],s()):o.slice()},e.rangeRound=function(t){return o=[+t[0],+t[1]],a=!0,s()},e.bandwidth=function(){return n},e.step=function(){return t},e.round=function(t){return arguments.length?(a=!!t,s()):a},e.padding=function(t){return arguments.length?(u=f=Math.max(0,Math.min(1,t)),s()):u},e.paddingInner=function(t){return arguments.length?(u=Math.max(0,Math.min(1,t)),s()):u},e.paddingOuter=function(t){return arguments.length?(f=Math.max(0,Math.min(1,t)),s()):f},e.align=function(t){return arguments.length?(c=Math.max(0,Math.min(1,t)),s()):c},e.copy=function(){return hh().domain(r()).range(o).round(a).paddingInner(u).paddingOuter(f).align(c)},s()}function dh(t){return function(){return t}}function ph(t){return+t}var vh=[0,1];function gh(t,n){return(n-=t=+t)?function(e){return(e-t)/n}:dh(n)}function yh(t,n,e,r){var i=t[0],o=t[1],a=n[0],u=n[1];return o<i?(i=e(o,i),a=r(u,a)):(i=e(i,o),a=r(a,u)),function(t){return a(i(t))}}function _h(t,n,e,r){var o=Math.min(t.length,n.length)-1,a=new Array(o),u=new Array(o),f=-1;for(t[o]<t[0]&&(t=t.slice().reverse(),n=n.slice().reverse());++f<o;)a[f]=e(t[f],t[f+1]),u[f]=r(n[f],n[f+1]);return function(n){var e=i(t,n,1,o)-1;return u[e](a[e](n))}}function bh(t,n){return n.domain(t.domain()).range(t.range()).interpolate(t.interpolate()).clamp(t.clamp())}function mh(t,n){var e,r,i,o=vh,a=vh,u=me,f=!1;function c(){return e=Math.min(o.length,a.length)>2?_h:yh,r=i=null,s}function s(n){return(r||(r=e(o,a,f?function(t){return function(n,e){var r=t(n=+n,e=+e);return function(t){return t<=n?0:t>=e?1:r(t)}}}(t):t,u)))(+n)}return s.invert=function(t){return(i||(i=e(a,o,gh,f?function(t){return function(n,e){var r=t(n=+n,e=+e);return function(t){return t<=0?n:t>=1?e:r(t)}}}(n):n)))(+t)},s.domain=function(t){return arguments.length?(o=fh.call(t,ph),c()):o.slice()},s.range=function(t){return arguments.length?(a=ch.call(t),c()):a.slice()},s.rangeRound=function(t){return a=ch.call(t),u=xe,c()},s.clamp=function(t){return arguments.length?(f=!!t,c()):f},s.interpolate=function(t){return arguments.length?(u=t,c()):u},c()}function xh(n){var e=n.domain;return n.ticks=function(t){var n=e();return m(n[0],n[n.length-1],null==t?10:t)},n.tickFormat=function(n,r){return function(n,e,r){var i,o=n[0],a=n[n.length-1],u=w(o,a,null==e?10:e);switch((r=ba(null==r?",f":r)).type){case"s":var f=Math.max(Math.abs(o),Math.abs(a));return null!=r.precision||isNaN(i=ka(u,f))||(r.precision=i),t.formatPrefix(r,f);case"":case"e":case"g":case"p":case"r":null!=r.precision||isNaN(i=Ca(u,Math.max(Math.abs(o),Math.abs(a))))||(r.precision=i-("e"===r.type));break;case"f":case"%":null!=r.precision||isNaN(i=Ea(u))||(r.precision=i-2*("%"===r.type))}return t.format(r)}(e(),n,r)},n.nice=function(t){null==t&&(t=10);var r,i=e(),o=0,a=i.length-1,u=i[o],f=i[a];return f<u&&(r=u,u=f,f=r,r=o,o=a,a=r),(r=x(u,f,t))>0?r=x(u=Math.floor(u/r)*r,f=Math.ceil(f/r)*r,t):r<0&&(r=x(u=Math.ceil(u*r)/r,f=Math.floor(f*r)/r,t)),r>0?(i[o]=Math.floor(u/r)*r,i[a]=Math.ceil(f/r)*r,e(i)):r<0&&(i[o]=Math.ceil(u*r)/r,i[a]=Math.floor(f*r)/r,e(i)),n},n}function wh(t,n){var e,r=0,i=(t=t.slice()).length-1,o=t[r],a=t[i];return a<o&&(e=r,r=i,i=e,e=o,o=a,a=e),t[r]=n.floor(o),t[i]=n.ceil(a),t}function Mh(t,n){return(n=Math.log(n/t))?function(e){return Math.log(e/t)/n}:dh(n)}function Ah(t,n){return t<0?function(e){return-Math.pow(-n,e)*Math.pow(-t,1-e)}:function(e){return Math.pow(n,e)*Math.pow(t,1-e)}}function Th(t){return isFinite(t)?+("1e"+t):t<0?0:t}function Nh(t){return 10===t?Th:t===Math.E?Math.exp:function(n){return Math.pow(t,n)}}function Sh(t){return t===Math.E?Math.log:10===t&&Math.log10||2===t&&Math.log2||(t=Math.log(t),function(n){return Math.log(n)/t})}function Eh(t){return function(n){return-t(-n)}}function kh(t,n){return t<0?-Math.pow(-t,n):Math.pow(t,n)}function Ch(){var t=1,n=mh(function(n,e){return(e=kh(e,t)-(n=kh(n,t)))?function(r){return(kh(r,t)-n)/e}:dh(e)},function(n,e){return e=kh(e,t)-(n=kh(n,t)),function(r){return kh(n+e*r,1/t)}}),e=n.domain;return n.exponent=function(n){return arguments.length?(t=+n,e(e())):t},n.copy=function(){return bh(n,Ch().exponent(t))},xh(n)}var Ph=new Date,zh=new Date;function Rh(t,n,e,r){function i(n){return t(n=new Date(+n)),n}return i.floor=i,i.ceil=function(e){return t(e=new Date(e-1)),n(e,1),t(e),e},i.round=function(t){var n=i(t),e=i.ceil(t);return t-n<e-t?n:e},i.offset=function(t,e){return n(t=new Date(+t),null==e?1:Math.floor(e)),t},i.range=function(e,r,o){var a,u=[];if(e=i.ceil(e),o=null==o?1:Math.floor(o),!(e<r&&o>0))return u;do{u.push(a=new Date(+e)),n(e,o),t(e)}while(a<e&&e<r);return u},i.filter=function(e){return Rh(function(n){if(n>=n)for(;t(n),!e(n);)n.setTime(n-1)},function(t,r){if(t>=t)if(r<0)for(;++r<=0;)for(;n(t,-1),!e(t););else for(;--r>=0;)for(;n(t,1),!e(t););})},e&&(i.count=function(n,r){return Ph.setTime(+n),zh.setTime(+r),t(Ph),t(zh),Math.floor(e(Ph,zh))},i.every=function(t){return t=Math.floor(t),isFinite(t)&&t>0?t>1?i.filter(r?function(n){return r(n)%t==0}:function(n){return i.count(0,n)%t==0}):i:null}),i}var Lh=Rh(function(){},function(t,n){t.setTime(+t+n)},function(t,n){return n-t});Lh.every=function(t){return t=Math.floor(t),isFinite(t)&&t>0?t>1?Rh(function(n){n.setTime(Math.floor(n/t)*t)},function(n,e){n.setTime(+n+e*t)},function(n,e){return(e-n)/t}):Lh:null};var Dh=Lh.range,Uh=6e4,qh=6048e5,Oh=Rh(function(t){t.setTime(1e3*Math.floor(t/1e3))},function(t,n){t.setTime(+t+1e3*n)},function(t,n){return(n-t)/1e3},function(t){return t.getUTCSeconds()}),Yh=Oh.range,Bh=Rh(function(t){t.setTime(Math.floor(t/Uh)*Uh)},function(t,n){t.setTime(+t+n*Uh)},function(t,n){return(n-t)/Uh},function(t){return t.getMinutes()}),Fh=Bh.range,Ih=Rh(function(t){var n=t.getTimezoneOffset()*Uh%36e5;n<0&&(n+=36e5),t.setTime(36e5*Math.floor((+t-n)/36e5)+n)},function(t,n){t.setTime(+t+36e5*n)},function(t,n){return(n-t)/36e5},function(t){return t.getHours()}),Hh=Ih.range,jh=Rh(function(t){t.setHours(0,0,0,0)},function(t,n){t.setDate(t.getDate()+n)},function(t,n){return(n-t-(n.getTimezoneOffset()-t.getTimezoneOffset())*Uh)/864e5},function(t){return t.getDate()-1}),Xh=jh.range;function Gh(t){return Rh(function(n){n.setDate(n.getDate()-(n.getDay()+7-t)%7),n.setHours(0,0,0,0)},function(t,n){t.setDate(t.getDate()+7*n)},function(t,n){return(n-t-(n.getTimezoneOffset()-t.getTimezoneOffset())*Uh)/qh})}var Vh=Gh(0),$h=Gh(1),Wh=Gh(2),Zh=Gh(3),Qh=Gh(4),Jh=Gh(5),Kh=Gh(6),td=Vh.range,nd=$h.range,ed=Wh.range,rd=Zh.range,id=Qh.range,od=Jh.range,ad=Kh.range,ud=Rh(function(t){t.setDate(1),t.setHours(0,0,0,0)},function(t,n){t.setMonth(t.getMonth()+n)},function(t,n){return n.getMonth()-t.getMonth()+12*(n.getFullYear()-t.getFullYear())},function(t){return t.getMonth()}),fd=ud.range,cd=Rh(function(t){t.setMonth(0,1),t.setHours(0,0,0,0)},function(t,n){t.setFullYear(t.getFullYear()+n)},function(t,n){return n.getFullYear()-t.getFullYear()},function(t){return t.getFullYear()});cd.every=function(t){return isFinite(t=Math.floor(t))&&t>0?Rh(function(n){n.setFullYear(Math.floor(n.getFullYear()/t)*t),n.setMonth(0,1),n.setHours(0,0,0,0)},function(n,e){n.setFullYear(n.getFullYear()+e*t)}):null};var sd=cd.range,ld=Rh(function(t){t.setUTCSeconds(0,0)},function(t,n){t.setTime(+t+n*Uh)},function(t,n){return(n-t)/Uh},function(t){return t.getUTCMinutes()}),hd=ld.range,dd=Rh(function(t){t.setUTCMinutes(0,0,0)},function(t,n){t.setTime(+t+36e5*n)},function(t,n){return(n-t)/36e5},function(t){return t.getUTCHours()}),pd=dd.range,vd=Rh(function(t){t.setUTCHours(0,0,0,0)},function(t,n){t.setUTCDate(t.getUTCDate()+n)},function(t,n){return(n-t)/864e5},function(t){return t.getUTCDate()-1}),gd=vd.range;function yd(t){return Rh(function(n){n.setUTCDate(n.getUTCDate()-(n.getUTCDay()+7-t)%7),n.setUTCHours(0,0,0,0)},function(t,n){t.setUTCDate(t.getUTCDate()+7*n)},function(t,n){return(n-t)/qh})}var _d=yd(0),bd=yd(1),md=yd(2),xd=yd(3),wd=yd(4),Md=yd(5),Ad=yd(6),Td=_d.range,Nd=bd.range,Sd=md.range,Ed=xd.range,kd=wd.range,Cd=Md.range,Pd=Ad.range,zd=Rh(function(t){t.setUTCDate(1),t.setUTCHours(0,0,0,0)},function(t,n){t.setUTCMonth(t.getUTCMonth()+n)},function(t,n){return n.getUTCMonth()-t.getUTCMonth()+12*(n.getUTCFullYear()-t.getUTCFullYear())},function(t){return t.getUTCMonth()}),Rd=zd.range,Ld=Rh(function(t){t.setUTCMonth(0,1),t.setUTCHours(0,0,0,0)},function(t,n){t.setUTCFullYear(t.getUTCFullYear()+n)},function(t,n){return n.getUTCFullYear()-t.getUTCFullYear()},function(t){return t.getUTCFullYear()});Ld.every=function(t){return isFinite(t=Math.floor(t))&&t>0?Rh(function(n){n.setUTCFullYear(Math.floor(n.getUTCFullYear()/t)*t),n.setUTCMonth(0,1),n.setUTCHours(0,0,0,0)},function(n,e){n.setUTCFullYear(n.getUTCFullYear()+e*t)}):null};var Dd=Ld.range;function Ud(t){if(0<=t.y&&t.y<100){var n=new Date(-1,t.m,t.d,t.H,t.M,t.S,t.L);return n.setFullYear(t.y),n}return new Date(t.y,t.m,t.d,t.H,t.M,t.S,t.L)}function qd(t){if(0<=t.y&&t.y<100){var n=new Date(Date.UTC(-1,t.m,t.d,t.H,t.M,t.S,t.L));return n.setUTCFullYear(t.y),n}return new Date(Date.UTC(t.y,t.m,t.d,t.H,t.M,t.S,t.L))}function Od(t){return{y:t,m:0,d:1,H:0,M:0,S:0,L:0}}function Yd(t){var n=t.dateTime,e=t.date,r=t.time,i=t.periods,o=t.days,a=t.shortDays,u=t.months,f=t.shortMonths,c=Vd(i),s=$d(i),l=Vd(o),h=$d(o),d=Vd(a),p=$d(a),v=Vd(u),g=$d(u),y=Vd(f),_=$d(f),b={a:function(t){return a[t.getDay()]},A:function(t){return o[t.getDay()]},b:function(t){return f[t.getMonth()]},B:function(t){return u[t.getMonth()]},c:null,d:pp,e:pp,f:bp,H:vp,I:gp,j:yp,L:_p,m:mp,M:xp,p:function(t){return i[+(t.getHours()>=12)]},Q:Wp,s:Zp,S:wp,u:Mp,U:Ap,V:Tp,w:Np,W:Sp,x:null,X:null,y:Ep,Y:kp,Z:Cp,"%":$p},m={a:function(t){return a[t.getUTCDay()]},A:function(t){return o[t.getUTCDay()]},b:function(t){return f[t.getUTCMonth()]},B:function(t){return u[t.getUTCMonth()]},c:null,d:Pp,e:Pp,f:Up,H:zp,I:Rp,j:Lp,L:Dp,m:qp,M:Op,p:function(t){return i[+(t.getUTCHours()>=12)]},Q:Wp,s:Zp,S:Yp,u:Bp,U:Fp,V:Ip,w:Hp,W:jp,x:null,X:null,y:Xp,Y:Gp,Z:Vp,"%":$p},x={a:function(t,n,e){var r=d.exec(n.slice(e));return r?(t.w=p[r[0].toLowerCase()],e+r[0].length):-1},A:function(t,n,e){var r=l.exec(n.slice(e));return r?(t.w=h[r[0].toLowerCase()],e+r[0].length):-1},b:function(t,n,e){var r=y.exec(n.slice(e));return r?(t.m=_[r[0].toLowerCase()],e+r[0].length):-1},B:function(t,n,e){var r=v.exec(n.slice(e));return r?(t.m=g[r[0].toLowerCase()],e+r[0].length):-1},c:function(t,e,r){return A(t,n,e,r)},d:ip,e:ip,f:sp,H:ap,I:ap,j:op,L:cp,m:rp,M:up,p:function(t,n,e){var r=c.exec(n.slice(e));return r?(t.p=s[r[0].toLowerCase()],e+r[0].length):-1},Q:hp,s:dp,S:fp,u:Zd,U:Qd,V:Jd,w:Wd,W:Kd,x:function(t,n,r){return A(t,e,n,r)},X:function(t,n,e){return A(t,r,n,e)},y:np,Y:tp,Z:ep,"%":lp};function w(t,n){return function(e){var r,i,o,a=[],u=-1,f=0,c=t.length;for(e instanceof Date||(e=new Date(+e));++u<c;)37===t.charCodeAt(u)&&(a.push(t.slice(f,u)),null!=(i=Fd[r=t.charAt(++u)])?r=t.charAt(++u):i="e"===r?" ":"0",(o=n[r])&&(r=o(e,i)),a.push(r),f=u+1);return a.push(t.slice(f,u)),a.join("")}}function M(t,n){return function(e){var r,i,o=Od(1900);if(A(o,t,e+="",0)!=e.length)return null;if("Q"in o)return new Date(o.Q);if("p"in o&&(o.H=o.H%12+12*o.p),"V"in o){if(o.V<1||o.V>53)return null;"w"in o||(o.w=1),"Z"in o?(i=(r=qd(Od(o.y))).getUTCDay(),r=i>4||0===i?bd.ceil(r):bd(r),r=vd.offset(r,7*(o.V-1)),o.y=r.getUTCFullYear(),o.m=r.getUTCMonth(),o.d=r.getUTCDate()+(o.w+6)%7):(i=(r=n(Od(o.y))).getDay(),r=i>4||0===i?$h.ceil(r):$h(r),r=jh.offset(r,7*(o.V-1)),o.y=r.getFullYear(),o.m=r.getMonth(),o.d=r.getDate()+(o.w+6)%7)}else("W"in o||"U"in o)&&("w"in o||(o.w="u"in o?o.u%7:"W"in o?1:0),i="Z"in o?qd(Od(o.y)).getUTCDay():n(Od(o.y)).getDay(),o.m=0,o.d="W"in o?(o.w+6)%7+7*o.W-(i+5)%7:o.w+7*o.U-(i+6)%7);return"Z"in o?(o.H+=o.Z/100|0,o.M+=o.Z%100,qd(o)):n(o)}}function A(t,n,e,r){for(var i,o,a=0,u=n.length,f=e.length;a<u;){if(r>=f)return-1;if(37===(i=n.charCodeAt(a++))){if(i=n.charAt(a++),!(o=x[i in Fd?n.charAt(a++):i])||(r=o(t,e,r))<0)return-1}else if(i!=e.charCodeAt(r++))return-1}return r}return b.x=w(e,b),b.X=w(r,b),b.c=w(n,b),m.x=w(e,m),m.X=w(r,m),m.c=w(n,m),{format:function(t){var n=w(t+="",b);return n.toString=function(){return t},n},parse:function(t){var n=M(t+="",Ud);return n.toString=function(){return t},n},utcFormat:function(t){var n=w(t+="",m);return n.toString=function(){return t},n},utcParse:function(t){var n=M(t,qd);return n.toString=function(){return t},n}}}var Bd,Fd={"-":"",_:" ",0:"0"},Id=/^\s*\d+/,Hd=/^%/,jd=/[\\^$*+?|[\]().{}]/g;function Xd(t,n,e){var r=t<0?"-":"",i=(r?-t:t)+"",o=i.length;return r+(o<e?new Array(e-o+1).join(n)+i:i)}function Gd(t){return t.replace(jd,"\\$&")}function Vd(t){return new RegExp("^(?:"+t.map(Gd).join("|")+")","i")}function $d(t){for(var n={},e=-1,r=t.length;++e<r;)n[t[e].toLowerCase()]=e;return n}function Wd(t,n,e){var r=Id.exec(n.slice(e,e+1));return r?(t.w=+r[0],e+r[0].length):-1}function Zd(t,n,e){var r=Id.exec(n.slice(e,e+1));return r?(t.u=+r[0],e+r[0].length):-1}function Qd(t,n,e){var r=Id.exec(n.slice(e,e+2));return r?(t.U=+r[0],e+r[0].length):-1}function Jd(t,n,e){var r=Id.exec(n.slice(e,e+2));return r?(t.V=+r[0],e+r[0].length):-1}function Kd(t,n,e){var r=Id.exec(n.slice(e,e+2));return r?(t.W=+r[0],e+r[0].length):-1}function tp(t,n,e){var r=Id.exec(n.slice(e,e+4));return r?(t.y=+r[0],e+r[0].length):-1}function np(t,n,e){var r=Id.exec(n.slice(e,e+2));return r?(t.y=+r[0]+(+r[0]>68?1900:2e3),e+r[0].length):-1}function ep(t,n,e){var r=/^(Z)|([+-]\d\d)(?::?(\d\d))?/.exec(n.slice(e,e+6));return r?(t.Z=r[1]?0:-(r[2]+(r[3]||"00")),e+r[0].length):-1}function rp(t,n,e){var r=Id.exec(n.slice(e,e+2));return r?(t.m=r[0]-1,e+r[0].length):-1}function ip(t,n,e){var r=Id.exec(n.slice(e,e+2));return r?(t.d=+r[0],e+r[0].length):-1}function op(t,n,e){var r=Id.exec(n.slice(e,e+3));return r?(t.m=0,t.d=+r[0],e+r[0].length):-1}function ap(t,n,e){var r=Id.exec(n.slice(e,e+2));return r?(t.H=+r[0],e+r[0].length):-1}function up(t,n,e){var r=Id.exec(n.slice(e,e+2));return r?(t.M=+r[0],e+r[0].length):-1}function fp(t,n,e){var r=Id.exec(n.slice(e,e+2));return r?(t.S=+r[0],e+r[0].length):-1}function cp(t,n,e){var r=Id.exec(n.slice(e,e+3));return r?(t.L=+r[0],e+r[0].length):-1}function sp(t,n,e){var r=Id.exec(n.slice(e,e+6));return r?(t.L=Math.floor(r[0]/1e3),e+r[0].length):-1}function lp(t,n,e){var r=Hd.exec(n.slice(e,e+1));return r?e+r[0].length:-1}function hp(t,n,e){var r=Id.exec(n.slice(e));return r?(t.Q=+r[0],e+r[0].length):-1}function dp(t,n,e){var r=Id.exec(n.slice(e));return r?(t.Q=1e3*+r[0],e+r[0].length):-1}function pp(t,n){return Xd(t.getDate(),n,2)}function vp(t,n){return Xd(t.getHours(),n,2)}function gp(t,n){return Xd(t.getHours()%12||12,n,2)}function yp(t,n){return Xd(1+jh.count(cd(t),t),n,3)}function _p(t,n){return Xd(t.getMilliseconds(),n,3)}function bp(t,n){return _p(t,n)+"000"}function mp(t,n){return Xd(t.getMonth()+1,n,2)}function xp(t,n){return Xd(t.getMinutes(),n,2)}function wp(t,n){return Xd(t.getSeconds(),n,2)}function Mp(t){var n=t.getDay();return 0===n?7:n}function Ap(t,n){return Xd(Vh.count(cd(t),t),n,2)}function Tp(t,n){var e=t.getDay();return t=e>=4||0===e?Qh(t):Qh.ceil(t),Xd(Qh.count(cd(t),t)+(4===cd(t).getDay()),n,2)}function Np(t){return t.getDay()}function Sp(t,n){return Xd($h.count(cd(t),t),n,2)}function Ep(t,n){return Xd(t.getFullYear()%100,n,2)}function kp(t,n){return Xd(t.getFullYear()%1e4,n,4)}function Cp(t){var n=t.getTimezoneOffset();return(n>0?"-":(n*=-1,"+"))+Xd(n/60|0,"0",2)+Xd(n%60,"0",2)}function Pp(t,n){return Xd(t.getUTCDate(),n,2)}function zp(t,n){return Xd(t.getUTCHours(),n,2)}function Rp(t,n){return Xd(t.getUTCHours()%12||12,n,2)}function Lp(t,n){return Xd(1+vd.count(Ld(t),t),n,3)}function Dp(t,n){return Xd(t.getUTCMilliseconds(),n,3)}function Up(t,n){return Dp(t,n)+"000"}function qp(t,n){return Xd(t.getUTCMonth()+1,n,2)}function Op(t,n){return Xd(t.getUTCMinutes(),n,2)}function Yp(t,n){return Xd(t.getUTCSeconds(),n,2)}function Bp(t){var n=t.getUTCDay();return 0===n?7:n}function Fp(t,n){return Xd(_d.count(Ld(t),t),n,2)}function Ip(t,n){var e=t.getUTCDay();return t=e>=4||0===e?wd(t):wd.ceil(t),Xd(wd.count(Ld(t),t)+(4===Ld(t).getUTCDay()),n,2)}function Hp(t){return t.getUTCDay()}function jp(t,n){return Xd(bd.count(Ld(t),t),n,2)}function Xp(t,n){return Xd(t.getUTCFullYear()%100,n,2)}function Gp(t,n){return Xd(t.getUTCFullYear()%1e4,n,4)}function Vp(){return"+0000"}function $p(){return"%"}function Wp(t){return+t}function Zp(t){return Math.floor(+t/1e3)}function Qp(n){return Bd=Yd(n),t.timeFormat=Bd.format,t.timeParse=Bd.parse,t.utcFormat=Bd.utcFormat,t.utcParse=Bd.utcParse,Bd}Qp({dateTime:"%x, %X",date:"%-m/%-d/%Y",time:"%-I:%M:%S %p",periods:["AM","PM"],days:["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"],shortDays:["Sun","Mon","Tue","Wed","Thu","Fri","Sat"],months:["January","February","March","April","May","June","July","August","September","October","November","December"],shortMonths:["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"]});var Jp=Date.prototype.toISOString?function(t){return t.toISOString()}:t.utcFormat("%Y-%m-%dT%H:%M:%S.%LZ");var Kp=+new Date("2000-01-01T00:00:00.000Z")?function(t){var n=new Date(t);return isNaN(n)?null:n}:t.utcParse("%Y-%m-%dT%H:%M:%S.%LZ"),tv=1e3,nv=60*tv,ev=60*nv,rv=24*ev,iv=7*rv,ov=30*rv,av=365*rv;function uv(t){return new Date(t)}function fv(t){return t instanceof Date?+t:+new Date(+t)}function cv(t,n,r,i,o,a,u,f,c){var s=mh(gh,ve),l=s.invert,h=s.domain,d=c(".%L"),p=c(":%S"),v=c("%I:%M"),g=c("%I %p"),y=c("%a %d"),_=c("%b %d"),b=c("%B"),m=c("%Y"),x=[[u,1,tv],[u,5,5*tv],[u,15,15*tv],[u,30,30*tv],[a,1,nv],[a,5,5*nv],[a,15,15*nv],[a,30,30*nv],[o,1,ev],[o,3,3*ev],[o,6,6*ev],[o,12,12*ev],[i,1,rv],[i,2,2*rv],[r,1,iv],[n,1,ov],[n,3,3*ov],[t,1,av]];function M(e){return(u(e)<e?d:a(e)<e?p:o(e)<e?v:i(e)<e?g:n(e)<e?r(e)<e?y:_:t(e)<e?b:m)(e)}function A(n,r,i,o){if(null==n&&(n=10),"number"==typeof n){var a=Math.abs(i-r)/n,u=e(function(t){return t[2]}).right(x,a);u===x.length?(o=w(r/av,i/av,n),n=t):u?(o=(u=x[a/x[u-1][2]<x[u][2]/a?u-1:u])[1],n=u[0]):(o=Math.max(w(r,i,n),1),n=f)}return null==o?n:n.every(o)}return s.invert=function(t){return new Date(l(t))},s.domain=function(t){return arguments.length?h(fh.call(t,fv)):h().map(uv)},s.ticks=function(t,n){var e,r=h(),i=r[0],o=r[r.length-1],a=o<i;return a&&(e=i,i=o,o=e),e=(e=A(t,i,o,n))?e.range(i,o+1):[],a?e.reverse():e},s.tickFormat=function(t,n){return null==n?M:c(n)},s.nice=function(t,n){var e=h();return(t=A(t,e[0],e[e.length-1],n))?h(wh(e,t)):s},s.copy=function(){return bh(s,cv(t,n,r,i,o,a,u,f,c))},s}function sv(t){for(var n=t.length/6|0,e=new Array(n),r=0;r<n;)e[r]="#"+t.slice(6*r,6*++r);return e}var lv=sv("1f77b4ff7f0e2ca02cd627289467bd8c564be377c27f7f7fbcbd2217becf"),hv=sv("7fc97fbeaed4fdc086ffff99386cb0f0027fbf5b17666666"),dv=sv("1b9e77d95f027570b3e7298a66a61ee6ab02a6761d666666"),pv=sv("a6cee31f78b4b2df8a33a02cfb9a99e31a1cfdbf6fff7f00cab2d66a3d9affff99b15928"),vv=sv("fbb4aeb3cde3ccebc5decbe4fed9a6ffffcce5d8bdfddaecf2f2f2"),gv=sv("b3e2cdfdcdaccbd5e8f4cae4e6f5c9fff2aef1e2cccccccc"),yv=sv("e41a1c377eb84daf4a984ea3ff7f00ffff33a65628f781bf999999"),_v=sv("66c2a5fc8d628da0cbe78ac3a6d854ffd92fe5c494b3b3b3"),bv=sv("8dd3c7ffffb3bebadafb807280b1d3fdb462b3de69fccde5d9d9d9bc80bdccebc5ffed6f");function mv(t){return le(t[t.length-1])}var xv=new Array(3).concat("d8b365f5f5f55ab4ac","a6611adfc27d80cdc1018571","a6611adfc27df5f5f580cdc1018571","8c510ad8b365f6e8c3c7eae55ab4ac01665e","8c510ad8b365f6e8c3f5f5f5c7eae55ab4ac01665e","8c510abf812ddfc27df6e8c3c7eae580cdc135978f01665e","8c510abf812ddfc27df6e8c3f5f5f5c7eae580cdc135978f01665e","5430058c510abf812ddfc27df6e8c3c7eae580cdc135978f01665e003c30","5430058c510abf812ddfc27df6e8c3f5f5f5c7eae580cdc135978f01665e003c30").map(sv),wv=mv(xv),Mv=new Array(3).concat("af8dc3f7f7f77fbf7b","7b3294c2a5cfa6dba0008837","7b3294c2a5cff7f7f7a6dba0008837","762a83af8dc3e7d4e8d9f0d37fbf7b1b7837","762a83af8dc3e7d4e8f7f7f7d9f0d37fbf7b1b7837","762a839970abc2a5cfe7d4e8d9f0d3a6dba05aae611b7837","762a839970abc2a5cfe7d4e8f7f7f7d9f0d3a6dba05aae611b7837","40004b762a839970abc2a5cfe7d4e8d9f0d3a6dba05aae611b783700441b","40004b762a839970abc2a5cfe7d4e8f7f7f7d9f0d3a6dba05aae611b783700441b").map(sv),Av=mv(Mv),Tv=new Array(3).concat("e9a3c9f7f7f7a1d76a","d01c8bf1b6dab8e1864dac26","d01c8bf1b6daf7f7f7b8e1864dac26","c51b7de9a3c9fde0efe6f5d0a1d76a4d9221","c51b7de9a3c9fde0eff7f7f7e6f5d0a1d76a4d9221","c51b7dde77aef1b6dafde0efe6f5d0b8e1867fbc414d9221","c51b7dde77aef1b6dafde0eff7f7f7e6f5d0b8e1867fbc414d9221","8e0152c51b7dde77aef1b6dafde0efe6f5d0b8e1867fbc414d9221276419","8e0152c51b7dde77aef1b6dafde0eff7f7f7e6f5d0b8e1867fbc414d9221276419").map(sv),Nv=mv(Tv),Sv=new Array(3).concat("998ec3f7f7f7f1a340","5e3c99b2abd2fdb863e66101","5e3c99b2abd2f7f7f7fdb863e66101","542788998ec3d8daebfee0b6f1a340b35806","542788998ec3d8daebf7f7f7fee0b6f1a340b35806","5427888073acb2abd2d8daebfee0b6fdb863e08214b35806","5427888073acb2abd2d8daebf7f7f7fee0b6fdb863e08214b35806","2d004b5427888073acb2abd2d8daebfee0b6fdb863e08214b358067f3b08","2d004b5427888073acb2abd2d8daebf7f7f7fee0b6fdb863e08214b358067f3b08").map(sv),Ev=mv(Sv),kv=new Array(3).concat("ef8a62f7f7f767a9cf","ca0020f4a58292c5de0571b0","ca0020f4a582f7f7f792c5de0571b0","b2182bef8a62fddbc7d1e5f067a9cf2166ac","b2182bef8a62fddbc7f7f7f7d1e5f067a9cf2166ac","b2182bd6604df4a582fddbc7d1e5f092c5de4393c32166ac","b2182bd6604df4a582fddbc7f7f7f7d1e5f092c5de4393c32166ac","67001fb2182bd6604df4a582fddbc7d1e5f092c5de4393c32166ac053061","67001fb2182bd6604df4a582fddbc7f7f7f7d1e5f092c5de4393c32166ac053061").map(sv),Cv=mv(kv),Pv=new Array(3).concat("ef8a62ffffff999999","ca0020f4a582bababa404040","ca0020f4a582ffffffbababa404040","b2182bef8a62fddbc7e0e0e09999994d4d4d","b2182bef8a62fddbc7ffffffe0e0e09999994d4d4d","b2182bd6604df4a582fddbc7e0e0e0bababa8787874d4d4d","b2182bd6604df4a582fddbc7ffffffe0e0e0bababa8787874d4d4d","67001fb2182bd6604df4a582fddbc7e0e0e0bababa8787874d4d4d1a1a1a","67001fb2182bd6604df4a582fddbc7ffffffe0e0e0bababa8787874d4d4d1a1a1a").map(sv),zv=mv(Pv),Rv=new Array(3).concat("fc8d59ffffbf91bfdb","d7191cfdae61abd9e92c7bb6","d7191cfdae61ffffbfabd9e92c7bb6","d73027fc8d59fee090e0f3f891bfdb4575b4","d73027fc8d59fee090ffffbfe0f3f891bfdb4575b4","d73027f46d43fdae61fee090e0f3f8abd9e974add14575b4","d73027f46d43fdae61fee090ffffbfe0f3f8abd9e974add14575b4","a50026d73027f46d43fdae61fee090e0f3f8abd9e974add14575b4313695","a50026d73027f46d43fdae61fee090ffffbfe0f3f8abd9e974add14575b4313695").map(sv),Lv=mv(Rv),Dv=new Array(3).concat("fc8d59ffffbf91cf60","d7191cfdae61a6d96a1a9641","d7191cfdae61ffffbfa6d96a1a9641","d73027fc8d59fee08bd9ef8b91cf601a9850","d73027fc8d59fee08bffffbfd9ef8b91cf601a9850","d73027f46d43fdae61fee08bd9ef8ba6d96a66bd631a9850","d73027f46d43fdae61fee08bffffbfd9ef8ba6d96a66bd631a9850","a50026d73027f46d43fdae61fee08bd9ef8ba6d96a66bd631a9850006837","a50026d73027f46d43fdae61fee08bffffbfd9ef8ba6d96a66bd631a9850006837").map(sv),Uv=mv(Dv),qv=new Array(3).concat("fc8d59ffffbf99d594","d7191cfdae61abdda42b83ba","d7191cfdae61ffffbfabdda42b83ba","d53e4ffc8d59fee08be6f59899d5943288bd","d53e4ffc8d59fee08bffffbfe6f59899d5943288bd","d53e4ff46d43fdae61fee08be6f598abdda466c2a53288bd","d53e4ff46d43fdae61fee08bffffbfe6f598abdda466c2a53288bd","9e0142d53e4ff46d43fdae61fee08be6f598abdda466c2a53288bd5e4fa2","9e0142d53e4ff46d43fdae61fee08bffffbfe6f598abdda466c2a53288bd5e4fa2").map(sv),Ov=mv(qv),Yv=new Array(3).concat("e5f5f999d8c92ca25f","edf8fbb2e2e266c2a4238b45","edf8fbb2e2e266c2a42ca25f006d2c","edf8fbccece699d8c966c2a42ca25f006d2c","edf8fbccece699d8c966c2a441ae76238b45005824","f7fcfde5f5f9ccece699d8c966c2a441ae76238b45005824","f7fcfde5f5f9ccece699d8c966c2a441ae76238b45006d2c00441b").map(sv),Bv=mv(Yv),Fv=new Array(3).concat("e0ecf49ebcda8856a7","edf8fbb3cde38c96c688419d","edf8fbb3cde38c96c68856a7810f7c","edf8fbbfd3e69ebcda8c96c68856a7810f7c","edf8fbbfd3e69ebcda8c96c68c6bb188419d6e016b","f7fcfde0ecf4bfd3e69ebcda8c96c68c6bb188419d6e016b","f7fcfde0ecf4bfd3e69ebcda8c96c68c6bb188419d810f7c4d004b").map(sv),Iv=mv(Fv),Hv=new Array(3).concat("e0f3dba8ddb543a2ca","f0f9e8bae4bc7bccc42b8cbe","f0f9e8bae4bc7bccc443a2ca0868ac","f0f9e8ccebc5a8ddb57bccc443a2ca0868ac","f0f9e8ccebc5a8ddb57bccc44eb3d32b8cbe08589e","f7fcf0e0f3dbccebc5a8ddb57bccc44eb3d32b8cbe08589e","f7fcf0e0f3dbccebc5a8ddb57bccc44eb3d32b8cbe0868ac084081").map(sv),jv=mv(Hv),Xv=new Array(3).concat("fee8c8fdbb84e34a33","fef0d9fdcc8afc8d59d7301f","fef0d9fdcc8afc8d59e34a33b30000","fef0d9fdd49efdbb84fc8d59e34a33b30000","fef0d9fdd49efdbb84fc8d59ef6548d7301f990000","fff7ecfee8c8fdd49efdbb84fc8d59ef6548d7301f990000","fff7ecfee8c8fdd49efdbb84fc8d59ef6548d7301fb300007f0000").map(sv),Gv=mv(Xv),Vv=new Array(3).concat("ece2f0a6bddb1c9099","f6eff7bdc9e167a9cf02818a","f6eff7bdc9e167a9cf1c9099016c59","f6eff7d0d1e6a6bddb67a9cf1c9099016c59","f6eff7d0d1e6a6bddb67a9cf3690c002818a016450","fff7fbece2f0d0d1e6a6bddb67a9cf3690c002818a016450","fff7fbece2f0d0d1e6a6bddb67a9cf3690c002818a016c59014636").map(sv),$v=mv(Vv),Wv=new Array(3).concat("ece7f2a6bddb2b8cbe","f1eef6bdc9e174a9cf0570b0","f1eef6bdc9e174a9cf2b8cbe045a8d","f1eef6d0d1e6a6bddb74a9cf2b8cbe045a8d","f1eef6d0d1e6a6bddb74a9cf3690c00570b0034e7b","fff7fbece7f2d0d1e6a6bddb74a9cf3690c00570b0034e7b","fff7fbece7f2d0d1e6a6bddb74a9cf3690c00570b0045a8d023858").map(sv),Zv=mv(Wv),Qv=new Array(3).concat("e7e1efc994c7dd1c77","f1eef6d7b5d8df65b0ce1256","f1eef6d7b5d8df65b0dd1c77980043","f1eef6d4b9dac994c7df65b0dd1c77980043","f1eef6d4b9dac994c7df65b0e7298ace125691003f","f7f4f9e7e1efd4b9dac994c7df65b0e7298ace125691003f","f7f4f9e7e1efd4b9dac994c7df65b0e7298ace125698004367001f").map(sv),Jv=mv(Qv),Kv=new Array(3).concat("fde0ddfa9fb5c51b8a","feebe2fbb4b9f768a1ae017e","feebe2fbb4b9f768a1c51b8a7a0177","feebe2fcc5c0fa9fb5f768a1c51b8a7a0177","feebe2fcc5c0fa9fb5f768a1dd3497ae017e7a0177","fff7f3fde0ddfcc5c0fa9fb5f768a1dd3497ae017e7a0177","fff7f3fde0ddfcc5c0fa9fb5f768a1dd3497ae017e7a017749006a").map(sv),tg=mv(Kv),ng=new Array(3).concat("edf8b17fcdbb2c7fb8","ffffcca1dab441b6c4225ea8","ffffcca1dab441b6c42c7fb8253494","ffffccc7e9b47fcdbb41b6c42c7fb8253494","ffffccc7e9b47fcdbb41b6c41d91c0225ea80c2c84","ffffd9edf8b1c7e9b47fcdbb41b6c41d91c0225ea80c2c84","ffffd9edf8b1c7e9b47fcdbb41b6c41d91c0225ea8253494081d58").map(sv),eg=mv(ng),rg=new Array(3).concat("f7fcb9addd8e31a354","ffffccc2e69978c679238443","ffffccc2e69978c67931a354006837","ffffccd9f0a3addd8e78c67931a354006837","ffffccd9f0a3addd8e78c67941ab5d238443005a32","ffffe5f7fcb9d9f0a3addd8e78c67941ab5d238443005a32","ffffe5f7fcb9d9f0a3addd8e78c67941ab5d238443006837004529").map(sv),ig=mv(rg),og=new Array(3).concat("fff7bcfec44fd95f0e","ffffd4fed98efe9929cc4c02","ffffd4fed98efe9929d95f0e993404","ffffd4fee391fec44ffe9929d95f0e993404","ffffd4fee391fec44ffe9929ec7014cc4c028c2d04","ffffe5fff7bcfee391fec44ffe9929ec7014cc4c028c2d04","ffffe5fff7bcfee391fec44ffe9929ec7014cc4c02993404662506").map(sv),ag=mv(og),ug=new Array(3).concat("ffeda0feb24cf03b20","ffffb2fecc5cfd8d3ce31a1c","ffffb2fecc5cfd8d3cf03b20bd0026","ffffb2fed976feb24cfd8d3cf03b20bd0026","ffffb2fed976feb24cfd8d3cfc4e2ae31a1cb10026","ffffccffeda0fed976feb24cfd8d3cfc4e2ae31a1cb10026","ffffccffeda0fed976feb24cfd8d3cfc4e2ae31a1cbd0026800026").map(sv),fg=mv(ug),cg=new Array(3).concat("deebf79ecae13182bd","eff3ffbdd7e76baed62171b5","eff3ffbdd7e76baed63182bd08519c","eff3ffc6dbef9ecae16baed63182bd08519c","eff3ffc6dbef9ecae16baed64292c62171b5084594","f7fbffdeebf7c6dbef9ecae16baed64292c62171b5084594","f7fbffdeebf7c6dbef9ecae16baed64292c62171b508519c08306b").map(sv),sg=mv(cg),lg=new Array(3).concat("e5f5e0a1d99b31a354","edf8e9bae4b374c476238b45","edf8e9bae4b374c47631a354006d2c","edf8e9c7e9c0a1d99b74c47631a354006d2c","edf8e9c7e9c0a1d99b74c47641ab5d238b45005a32","f7fcf5e5f5e0c7e9c0a1d99b74c47641ab5d238b45005a32","f7fcf5e5f5e0c7e9c0a1d99b74c47641ab5d238b45006d2c00441b").map(sv),hg=mv(lg),dg=new Array(3).concat("f0f0f0bdbdbd636363","f7f7f7cccccc969696525252","f7f7f7cccccc969696636363252525","f7f7f7d9d9d9bdbdbd969696636363252525","f7f7f7d9d9d9bdbdbd969696737373525252252525","fffffff0f0f0d9d9d9bdbdbd969696737373525252252525","fffffff0f0f0d9d9d9bdbdbd969696737373525252252525000000").map(sv),pg=mv(dg),vg=new Array(3).concat("efedf5bcbddc756bb1","f2f0f7cbc9e29e9ac86a51a3","f2f0f7cbc9e29e9ac8756bb154278f","f2f0f7dadaebbcbddc9e9ac8756bb154278f","f2f0f7dadaebbcbddc9e9ac8807dba6a51a34a1486","fcfbfdefedf5dadaebbcbddc9e9ac8807dba6a51a34a1486","fcfbfdefedf5dadaebbcbddc9e9ac8807dba6a51a354278f3f007d").map(sv),gg=mv(vg),yg=new Array(3).concat("fee0d2fc9272de2d26","fee5d9fcae91fb6a4acb181d","fee5d9fcae91fb6a4ade2d26a50f15","fee5d9fcbba1fc9272fb6a4ade2d26a50f15","fee5d9fcbba1fc9272fb6a4aef3b2ccb181d99000d","fff5f0fee0d2fcbba1fc9272fb6a4aef3b2ccb181d99000d","fff5f0fee0d2fcbba1fc9272fb6a4aef3b2ccb181da50f1567000d").map(sv),_g=mv(yg),bg=new Array(3).concat("fee6cefdae6be6550d","feeddefdbe85fd8d3cd94701","feeddefdbe85fd8d3ce6550da63603","feeddefdd0a2fdae6bfd8d3ce6550da63603","feeddefdd0a2fdae6bfd8d3cf16913d948018c2d04","fff5ebfee6cefdd0a2fdae6bfd8d3cf16913d948018c2d04","fff5ebfee6cefdd0a2fdae6bfd8d3cf16913d94801a636037f2704").map(sv),mg=mv(bg),xg=Ge(Kn(300,.5,0),Kn(-240,.5,1)),wg=Ge(Kn(-100,.75,.35),Kn(80,1.5,.8)),Mg=Ge(Kn(260,.75,.35),Kn(80,1.5,.8)),Ag=Kn();var Tg=bn(),Ng=Math.PI/3,Sg=2*Math.PI/3;function Eg(t){var n=t.length;return function(e){return t[Math.max(0,Math.min(n-1,Math.floor(e*n)))]}}var kg=Eg(sv("44015444025645045745055946075a46085c460a5d460b5e470d60470e6147106347116447136548146748166848176948186a481a6c481b6d481c6e481d6f481f70482071482173482374482475482576482677482878482979472a7a472c7a472d7b472e7c472f7d46307e46327e46337f463480453581453781453882443983443a83443b84433d84433e85423f854240864241864142874144874045884046883f47883f48893e49893e4a893e4c8a3d4d8a3d4e8a3c4f8a3c508b3b518b3b528b3a538b3a548c39558c39568c38588c38598c375a8c375b8d365c8d365d8d355e8d355f8d34608d34618d33628d33638d32648e32658e31668e31678e31688e30698e306a8e2f6b8e2f6c8e2e6d8e2e6e8e2e6f8e2d708e2d718e2c718e2c728e2c738e2b748e2b758e2a768e2a778e2a788e29798e297a8e297b8e287c8e287d8e277e8e277f8e27808e26818e26828e26828e25838e25848e25858e24868e24878e23888e23898e238a8d228b8d228c8d228d8d218e8d218f8d21908d21918c20928c20928c20938c1f948c1f958b1f968b1f978b1f988b1f998a1f9a8a1e9b8a1e9c891e9d891f9e891f9f881fa0881fa1881fa1871fa28720a38620a48621a58521a68522a78522a88423a98324aa8325ab8225ac8226ad8127ad8128ae8029af7f2ab07f2cb17e2db27d2eb37c2fb47c31b57b32b67a34b67935b77937b87838b9773aba763bbb753dbc743fbc7340bd7242be7144bf7046c06f48c16e4ac16d4cc26c4ec36b50c46a52c56954c56856c66758c7655ac8645cc8635ec96260ca6063cb5f65cb5e67cc5c69cd5b6ccd5a6ece5870cf5773d05675d05477d1537ad1517cd2507fd34e81d34d84d44b86d54989d5488bd6468ed64590d74393d74195d84098d83e9bd93c9dd93ba0da39a2da37a5db36a8db34aadc32addc30b0dd2fb2dd2db5de2bb8de29bade28bddf26c0df25c2df23c5e021c8e020cae11fcde11dd0e11cd2e21bd5e21ad8e219dae319dde318dfe318e2e418e5e419e7e419eae51aece51befe51cf1e51df4e61ef6e620f8e621fbe723fde725")),Cg=Eg(sv("00000401000501010601010802010902020b02020d03030f03031204041405041606051806051a07061c08071e0907200a08220b09240c09260d0a290e0b2b100b2d110c2f120d31130d34140e36150e38160f3b180f3d19103f1a10421c10441d11471e114920114b21114e22115024125325125527125829115a2a115c2c115f2d11612f116331116533106734106936106b38106c390f6e3b0f703d0f713f0f72400f74420f75440f764510774710784910784a10794c117a4e117b4f127b51127c52137c54137d56147d57157e59157e5a167e5c167f5d177f5f187f601880621980641a80651a80671b80681c816a1c816b1d816d1d816e1e81701f81721f817320817521817621817822817922827b23827c23827e24828025828125818326818426818627818827818928818b29818c29818e2a81902a81912b81932b80942c80962c80982d80992d809b2e7f9c2e7f9e2f7fa02f7fa1307ea3307ea5317ea6317da8327daa337dab337cad347cae347bb0357bb2357bb3367ab5367ab73779b83779ba3878bc3978bd3977bf3a77c03a76c23b75c43c75c53c74c73d73c83e73ca3e72cc3f71cd4071cf4070d0416fd2426fd3436ed5446dd6456cd8456cd9466bdb476adc4869de4968df4a68e04c67e24d66e34e65e44f64e55064e75263e85362e95462ea5661eb5760ec5860ed5a5fee5b5eef5d5ef05f5ef1605df2625df2645cf3655cf4675cf4695cf56b5cf66c5cf66e5cf7705cf7725cf8745cf8765cf9785df9795df97b5dfa7d5efa7f5efa815ffb835ffb8560fb8761fc8961fc8a62fc8c63fc8e64fc9065fd9266fd9467fd9668fd9869fd9a6afd9b6bfe9d6cfe9f6dfea16efea36ffea571fea772fea973feaa74feac76feae77feb078feb27afeb47bfeb67cfeb77efeb97ffebb81febd82febf84fec185fec287fec488fec68afec88cfeca8dfecc8ffecd90fecf92fed194fed395fed597fed799fed89afdda9cfddc9efddea0fde0a1fde2a3fde3a5fde5a7fde7a9fde9aafdebacfcecaefceeb0fcf0b2fcf2b4fcf4b6fcf6b8fcf7b9fcf9bbfcfbbdfcfdbf")),Pg=Eg(sv("00000401000501010601010802010a02020c02020e03021004031204031405041706041907051b08051d09061f0a07220b07240c08260d08290e092b10092d110a30120a32140b34150b37160b39180c3c190c3e1b0c411c0c431e0c451f0c48210c4a230c4c240c4f260c51280b53290b552b0b572d0b592f0a5b310a5c320a5e340a5f3609613809623909633b09643d09653e0966400a67420a68440a68450a69470b6a490b6a4a0c6b4c0c6b4d0d6c4f0d6c510e6c520e6d540f6d550f6d57106e59106e5a116e5c126e5d126e5f136e61136e62146e64156e65156e67166e69166e6a176e6c186e6d186e6f196e71196e721a6e741a6e751b6e771c6d781c6d7a1d6d7c1d6d7d1e6d7f1e6c801f6c82206c84206b85216b87216b88226a8a226a8c23698d23698f24699025689225689326679526679727669827669a28659b29649d29649f2a63a02a63a22b62a32c61a52c60a62d60a82e5fa92e5eab2f5ead305dae305cb0315bb1325ab3325ab43359b63458b73557b93556ba3655bc3754bd3853bf3952c03a51c13a50c33b4fc43c4ec63d4dc73e4cc83f4bca404acb4149cc4248ce4347cf4446d04545d24644d34743d44842d54a41d74b3fd84c3ed94d3dda4e3cdb503bdd513ade5238df5337e05536e15635e25734e35933e45a31e55c30e65d2fe75e2ee8602de9612bea632aeb6429eb6628ec6726ed6925ee6a24ef6c23ef6e21f06f20f1711ff1731df2741cf3761bf37819f47918f57b17f57d15f67e14f68013f78212f78410f8850ff8870ef8890cf98b0bf98c0af98e09fa9008fa9207fa9407fb9606fb9706fb9906fb9b06fb9d07fc9f07fca108fca309fca50afca60cfca80dfcaa0ffcac11fcae12fcb014fcb216fcb418fbb61afbb81dfbba1ffbbc21fbbe23fac026fac228fac42afac62df9c72ff9c932f9cb35f8cd37f8cf3af7d13df7d340f6d543f6d746f5d949f5db4cf4dd4ff4df53f4e156f3e35af3e55df2e661f2e865f2ea69f1ec6df1ed71f1ef75f1f179f2f27df2f482f3f586f3f68af4f88ef5f992f6fa96f8fb9af9fc9dfafda1fcffa4")),zg=Eg(sv("0d088710078813078916078a19068c1b068d1d068e20068f2206902406912605912805922a05932c05942e05952f059631059733059735049837049938049a3a049a3c049b3e049c3f049c41049d43039e44039e46039f48039f4903a04b03a14c02a14e02a25002a25102a35302a35502a45601a45801a45901a55b01a55c01a65e01a66001a66100a76300a76400a76600a76700a86900a86a00a86c00a86e00a86f00a87100a87201a87401a87501a87701a87801a87a02a87b02a87d03a87e03a88004a88104a78305a78405a78606a68707a68808a68a09a58b0aa58d0ba58e0ca48f0da4910ea3920fa39410a29511a19613a19814a099159f9a169f9c179e9d189d9e199da01a9ca11b9ba21d9aa31e9aa51f99a62098a72197a82296aa2395ab2494ac2694ad2793ae2892b02991b12a90b22b8fb32c8eb42e8db52f8cb6308bb7318ab83289ba3388bb3488bc3587bd3786be3885bf3984c03a83c13b82c23c81c33d80c43e7fc5407ec6417dc7427cc8437bc9447aca457acb4679cc4778cc4977cd4a76ce4b75cf4c74d04d73d14e72d24f71d35171d45270d5536fd5546ed6556dd7566cd8576bd9586ada5a6ada5b69db5c68dc5d67dd5e66de5f65de6164df6263e06363e16462e26561e26660e3685fe4695ee56a5de56b5de66c5ce76e5be76f5ae87059e97158e97257ea7457eb7556eb7655ec7754ed7953ed7a52ee7b51ef7c51ef7e50f07f4ff0804ef1814df1834cf2844bf3854bf3874af48849f48948f58b47f58c46f68d45f68f44f79044f79143f79342f89441f89540f9973ff9983ef99a3efa9b3dfa9c3cfa9e3bfb9f3afba139fba238fca338fca537fca636fca835fca934fdab33fdac33fdae32fdaf31fdb130fdb22ffdb42ffdb52efeb72dfeb82cfeba2cfebb2bfebd2afebe2afec029fdc229fdc328fdc527fdc627fdc827fdca26fdcb26fccd25fcce25fcd025fcd225fbd324fbd524fbd724fad824fada24f9dc24f9dd25f8df25f8e125f7e225f7e425f6e626f6e826f5e926f5eb27f4ed27f3ee27f3f027f2f227f1f426f1f525f0f724f0f921"));function Rg(t){return function(){return t}}var Lg=Math.abs,Dg=Math.atan2,Ug=Math.cos,qg=Math.max,Og=Math.min,Yg=Math.sin,Bg=Math.sqrt,Fg=1e-12,Ig=Math.PI,Hg=Ig/2,jg=2*Ig;function Xg(t){return t>=1?Hg:t<=-1?-Hg:Math.asin(t)}function Gg(t){return t.innerRadius}function Vg(t){return t.outerRadius}function $g(t){return t.startAngle}function Wg(t){return t.endAngle}function Zg(t){return t&&t.padAngle}function Qg(t,n,e,r,i,o,a){var u=t-e,f=n-r,c=(a?o:-o)/Bg(u*u+f*f),s=c*f,l=-c*u,h=t+s,d=n+l,p=e+s,v=r+l,g=(h+p)/2,y=(d+v)/2,_=p-h,b=v-d,m=_*_+b*b,x=i-o,w=h*v-p*d,M=(b<0?-1:1)*Bg(qg(0,x*x*m-w*w)),A=(w*b-_*M)/m,T=(-w*_-b*M)/m,N=(w*b+_*M)/m,S=(-w*_+b*M)/m,E=A-g,k=T-y,C=N-g,P=S-y;return E*E+k*k>C*C+P*P&&(A=N,T=S),{cx:A,cy:T,x01:-s,y01:-l,x11:A*(i/x-1),y11:T*(i/x-1)}}function Jg(t){this._context=t}function Kg(t){return new Jg(t)}function ty(t){return t[0]}function ny(t){return t[1]}function ey(){var t=ty,n=ny,e=Rg(!0),r=null,i=Kg,o=null;function a(a){var u,f,c,s=a.length,l=!1;for(null==r&&(o=i(c=Gi())),u=0;u<=s;++u)!(u<s&&e(f=a[u],u,a))===l&&((l=!l)?o.lineStart():o.lineEnd()),l&&o.point(+t(f,u,a),+n(f,u,a));if(c)return o=null,c+""||null}return a.x=function(n){return arguments.length?(t="function"==typeof n?n:Rg(+n),a):t},a.y=function(t){return arguments.length?(n="function"==typeof t?t:Rg(+t),a):n},a.defined=function(t){return arguments.length?(e="function"==typeof t?t:Rg(!!t),a):e},a.curve=function(t){return arguments.length?(i=t,null!=r&&(o=i(r)),a):i},a.context=function(t){return arguments.length?(null==t?r=o=null:o=i(r=t),a):r},a}function ry(){var t=ty,n=null,e=Rg(0),r=ny,i=Rg(!0),o=null,a=Kg,u=null;function f(f){var c,s,l,h,d,p=f.length,v=!1,g=new Array(p),y=new Array(p);for(null==o&&(u=a(d=Gi())),c=0;c<=p;++c){if(!(c<p&&i(h=f[c],c,f))===v)if(v=!v)s=c,u.areaStart(),u.lineStart();else{for(u.lineEnd(),u.lineStart(),l=c-1;l>=s;--l)u.point(g[l],y[l]);u.lineEnd(),u.areaEnd()}v&&(g[c]=+t(h,c,f),y[c]=+e(h,c,f),u.point(n?+n(h,c,f):g[c],r?+r(h,c,f):y[c]))}if(d)return u=null,d+""||null}function c(){return ey().defined(i).curve(a).context(o)}return f.x=function(e){return arguments.length?(t="function"==typeof e?e:Rg(+e),n=null,f):t},f.x0=function(n){return arguments.length?(t="function"==typeof n?n:Rg(+n),f):t},f.x1=function(t){return arguments.length?(n=null==t?null:"function"==typeof t?t:Rg(+t),f):n},f.y=function(t){return arguments.length?(e="function"==typeof t?t:Rg(+t),r=null,f):e},f.y0=function(t){return arguments.length?(e="function"==typeof t?t:Rg(+t),f):e},f.y1=function(t){return arguments.length?(r=null==t?null:"function"==typeof t?t:Rg(+t),f):r},f.lineX0=f.lineY0=function(){return c().x(t).y(e)},f.lineY1=function(){return c().x(t).y(r)},f.lineX1=function(){return c().x(n).y(e)},f.defined=function(t){return arguments.length?(i="function"==typeof t?t:Rg(!!t),f):i},f.curve=function(t){return arguments.length?(a=t,null!=o&&(u=a(o)),f):a},f.context=function(t){return arguments.length?(null==t?o=u=null:u=a(o=t),f):o},f}function iy(t,n){return n<t?-1:n>t?1:n>=t?0:NaN}function oy(t){return t}Jg.prototype={areaStart:function(){this._line=0},areaEnd:function(){this._line=NaN},lineStart:function(){this._point=0},lineEnd:function(){(this._line||0!==this._line&&1===this._point)&&this._context.closePath(),this._line=1-this._line},point:function(t,n){switch(t=+t,n=+n,this._point){case 0:this._point=1,this._line?this._context.lineTo(t,n):this._context.moveTo(t,n);break;case 1:this._point=2;default:this._context.lineTo(t,n)}}};var ay=fy(Kg);function uy(t){this._curve=t}function fy(t){function n(n){return new uy(t(n))}return n._curve=t,n}function cy(t){var n=t.curve;return t.angle=t.x,delete t.x,t.radius=t.y,delete t.y,t.curve=function(t){return arguments.length?n(fy(t)):n()._curve},t}function sy(){return cy(ey().curve(ay))}function ly(){var t=ry().curve(ay),n=t.curve,e=t.lineX0,r=t.lineX1,i=t.lineY0,o=t.lineY1;return t.angle=t.x,delete t.x,t.startAngle=t.x0,delete t.x0,t.endAngle=t.x1,delete t.x1,t.radius=t.y,delete t.y,t.innerRadius=t.y0,delete t.y0,t.outerRadius=t.y1,delete t.y1,t.lineStartAngle=function(){return cy(e())},delete t.lineX0,t.lineEndAngle=function(){return cy(r())},delete t.lineX1,t.lineInnerRadius=function(){return cy(i())},delete t.lineY0,t.lineOuterRadius=function(){return cy(o())},delete t.lineY1,t.curve=function(t){return arguments.length?n(fy(t)):n()._curve},t}function hy(t,n){return[(n=+n)*Math.cos(t-=Math.PI/2),n*Math.sin(t)]}uy.prototype={areaStart:function(){this._curve.areaStart()},areaEnd:function(){this._curve.areaEnd()},lineStart:function(){this._curve.lineStart()},lineEnd:function(){this._curve.lineEnd()},point:function(t,n){this._curve.point(n*Math.sin(t),n*-Math.cos(t))}};var dy=Array.prototype.slice;function py(t){return t.source}function vy(t){return t.target}function gy(t){var n=py,e=vy,r=ty,i=ny,o=null;function a(){var a,u=dy.call(arguments),f=n.apply(this,u),c=e.apply(this,u);if(o||(o=a=Gi()),t(o,+r.apply(this,(u[0]=f,u)),+i.apply(this,u),+r.apply(this,(u[0]=c,u)),+i.apply(this,u)),a)return o=null,a+""||null}return a.source=function(t){return arguments.length?(n=t,a):n},a.target=function(t){return arguments.length?(e=t,a):e},a.x=function(t){return arguments.length?(r="function"==typeof t?t:Rg(+t),a):r},a.y=function(t){return arguments.length?(i="function"==typeof t?t:Rg(+t),a):i},a.context=function(t){return arguments.length?(o=null==t?null:t,a):o},a}function yy(t,n,e,r,i){t.moveTo(n,e),t.bezierCurveTo(n=(n+r)/2,e,n,i,r,i)}function _y(t,n,e,r,i){t.moveTo(n,e),t.bezierCurveTo(n,e=(e+i)/2,r,e,r,i)}function by(t,n,e,r,i){var o=hy(n,e),a=hy(n,e=(e+i)/2),u=hy(r,e),f=hy(r,i);t.moveTo(o[0],o[1]),t.bezierCurveTo(a[0],a[1],u[0],u[1],f[0],f[1])}var my={draw:function(t,n){var e=Math.sqrt(n/Ig);t.moveTo(e,0),t.arc(0,0,e,0,jg)}},xy={draw:function(t,n){var e=Math.sqrt(n/5)/2;t.moveTo(-3*e,-e),t.lineTo(-e,-e),t.lineTo(-e,-3*e),t.lineTo(e,-3*e),t.lineTo(e,-e),t.lineTo(3*e,-e),t.lineTo(3*e,e),t.lineTo(e,e),t.lineTo(e,3*e),t.lineTo(-e,3*e),t.lineTo(-e,e),t.lineTo(-3*e,e),t.closePath()}},wy=Math.sqrt(1/3),My=2*wy,Ay={draw:function(t,n){var e=Math.sqrt(n/My),r=e*wy;t.moveTo(0,-e),t.lineTo(r,0),t.lineTo(0,e),t.lineTo(-r,0),t.closePath()}},Ty=Math.sin(Ig/10)/Math.sin(7*Ig/10),Ny=Math.sin(jg/10)*Ty,Sy=-Math.cos(jg/10)*Ty,Ey={draw:function(t,n){var e=Math.sqrt(.8908130915292852*n),r=Ny*e,i=Sy*e;t.moveTo(0,-e),t.lineTo(r,i);for(var o=1;o<5;++o){var a=jg*o/5,u=Math.cos(a),f=Math.sin(a);t.lineTo(f*e,-u*e),t.lineTo(u*r-f*i,f*r+u*i)}t.closePath()}},ky={draw:function(t,n){var e=Math.sqrt(n),r=-e/2;t.rect(r,r,e,e)}},Cy=Math.sqrt(3),Py={draw:function(t,n){var e=-Math.sqrt(n/(3*Cy));t.moveTo(0,2*e),t.lineTo(-Cy*e,-e),t.lineTo(Cy*e,-e),t.closePath()}},zy=Math.sqrt(3)/2,Ry=1/Math.sqrt(12),Ly=3*(Ry/2+1),Dy={draw:function(t,n){var e=Math.sqrt(n/Ly),r=e/2,i=e*Ry,o=r,a=e*Ry+e,u=-o,f=a;t.moveTo(r,i),t.lineTo(o,a),t.lineTo(u,f),t.lineTo(-.5*r-zy*i,zy*r+-.5*i),t.lineTo(-.5*o-zy*a,zy*o+-.5*a),t.lineTo(-.5*u-zy*f,zy*u+-.5*f),t.lineTo(-.5*r+zy*i,-.5*i-zy*r),t.lineTo(-.5*o+zy*a,-.5*a-zy*o),t.lineTo(-.5*u+zy*f,-.5*f-zy*u),t.closePath()}},Uy=[my,xy,Ay,ky,Ey,Py,Dy];function qy(){}function Oy(t,n,e){t._context.bezierCurveTo((2*t._x0+t._x1)/3,(2*t._y0+t._y1)/3,(t._x0+2*t._x1)/3,(t._y0+2*t._y1)/3,(t._x0+4*t._x1+n)/6,(t._y0+4*t._y1+e)/6)}function Yy(t){this._context=t}function By(t){this._context=t}function Fy(t){this._context=t}function Iy(t,n){this._basis=new Yy(t),this._beta=n}Yy.prototype={areaStart:function(){this._line=0},areaEnd:function(){this._line=NaN},lineStart:function(){this._x0=this._x1=this._y0=this._y1=NaN,this._point=0},lineEnd:function(){switch(this._point){case 3:Oy(this,this._x1,this._y1);case 2:this._context.lineTo(this._x1,this._y1)}(this._line||0!==this._line&&1===this._point)&&this._context.closePath(),this._line=1-this._line},point:function(t,n){switch(t=+t,n=+n,this._point){case 0:this._point=1,this._line?this._context.lineTo(t,n):this._context.moveTo(t,n);break;case 1:this._point=2;break;case 2:this._point=3,this._context.lineTo((5*this._x0+this._x1)/6,(5*this._y0+this._y1)/6);default:Oy(this,t,n)}this._x0=this._x1,this._x1=t,this._y0=this._y1,this._y1=n}},By.prototype={areaStart:qy,areaEnd:qy,lineStart:function(){this._x0=this._x1=this._x2=this._x3=this._x4=this._y0=this._y1=this._y2=this._y3=this._y4=NaN,this._point=0},lineEnd:function(){switch(this._point){case 1:this._context.moveTo(this._x2,this._y2),this._context.closePath();break;case 2:this._context.moveTo((this._x2+2*this._x3)/3,(this._y2+2*this._y3)/3),this._context.lineTo((this._x3+2*this._x2)/3,(this._y3+2*this._y2)/3),this._context.closePath();break;case 3:this.point(this._x2,this._y2),this.point(this._x3,this._y3),this.point(this._x4,this._y4)}},point:function(t,n){switch(t=+t,n=+n,this._point){case 0:this._point=1,this._x2=t,this._y2=n;break;case 1:this._point=2,this._x3=t,this._y3=n;break;case 2:this._point=3,this._x4=t,this._y4=n,this._context.moveTo((this._x0+4*this._x1+t)/6,(this._y0+4*this._y1+n)/6);break;default:Oy(this,t,n)}this._x0=this._x1,this._x1=t,this._y0=this._y1,this._y1=n}},Fy.prototype={areaStart:function(){this._line=0},areaEnd:function(){this._line=NaN},lineStart:function(){this._x0=this._x1=this._y0=this._y1=NaN,this._point=0},lineEnd:function(){(this._line||0!==this._line&&3===this._point)&&this._context.closePath(),this._line=1-this._line},point:function(t,n){switch(t=+t,n=+n,this._point){case 0:this._point=1;break;case 1:this._point=2;break;case 2:this._point=3;var e=(this._x0+4*this._x1+t)/6,r=(this._y0+4*this._y1+n)/6;this._line?this._context.lineTo(e,r):this._context.moveTo(e,r);break;case 3:this._point=4;default:Oy(this,t,n)}this._x0=this._x1,this._x1=t,this._y0=this._y1,this._y1=n}},Iy.prototype={lineStart:function(){this._x=[],this._y=[],this._basis.lineStart()},lineEnd:function(){var t=this._x,n=this._y,e=t.length-1;if(e>0)for(var r,i=t[0],o=n[0],a=t[e]-i,u=n[e]-o,f=-1;++f<=e;)r=f/e,this._basis.point(this._beta*t[f]+(1-this._beta)*(i+r*a),this._beta*n[f]+(1-this._beta)*(o+r*u));this._x=this._y=null,this._basis.lineEnd()},point:function(t,n){this._x.push(+t),this._y.push(+n)}};var Hy=function t(n){function e(t){return 1===n?new Yy(t):new Iy(t,n)}return e.beta=function(n){return t(+n)},e}(.85);function jy(t,n,e){t._context.bezierCurveTo(t._x1+t._k*(t._x2-t._x0),t._y1+t._k*(t._y2-t._y0),t._x2+t._k*(t._x1-n),t._y2+t._k*(t._y1-e),t._x2,t._y2)}function Xy(t,n){this._context=t,this._k=(1-n)/6}Xy.prototype={areaStart:function(){this._line=0},areaEnd:function(){this._line=NaN},lineStart:function(){this._x0=this._x1=this._x2=this._y0=this._y1=this._y2=NaN,this._point=0},lineEnd:function(){switch(this._point){case 2:this._context.lineTo(this._x2,this._y2);break;case 3:jy(this,this._x1,this._y1)}(this._line||0!==this._line&&1===this._point)&&this._context.closePath(),this._line=1-this._line},point:function(t,n){switch(t=+t,n=+n,this._point){case 0:this._point=1,this._line?this._context.lineTo(t,n):this._context.moveTo(t,n);break;case 1:this._point=2,this._x1=t,this._y1=n;break;case 2:this._point=3;default:jy(this,t,n)}this._x0=this._x1,this._x1=this._x2,this._x2=t,this._y0=this._y1,this._y1=this._y2,this._y2=n}};var Gy=function t(n){function e(t){return new Xy(t,n)}return e.tension=function(n){return t(+n)},e}(0);function Vy(t,n){this._context=t,this._k=(1-n)/6}Vy.prototype={areaStart:qy,areaEnd:qy,lineStart:function(){this._x0=this._x1=this._x2=this._x3=this._x4=this._x5=this._y0=this._y1=this._y2=this._y3=this._y4=this._y5=NaN,this._point=0},lineEnd:function(){switch(this._point){case 1:this._context.moveTo(this._x3,this._y3),this._context.closePath();break;case 2:this._context.lineTo(this._x3,this._y3),this._context.closePath();break;case 3:this.point(this._x3,this._y3),this.point(this._x4,this._y4),this.point(this._x5,this._y5)}},point:function(t,n){switch(t=+t,n=+n,this._point){case 0:this._point=1,this._x3=t,this._y3=n;break;case 1:this._point=2,this._context.moveTo(this._x4=t,this._y4=n);break;case 2:this._point=3,this._x5=t,this._y5=n;break;default:jy(this,t,n)}this._x0=this._x1,this._x1=this._x2,this._x2=t,this._y0=this._y1,this._y1=this._y2,this._y2=n}};var $y=function t(n){function e(t){return new Vy(t,n)}return e.tension=function(n){return t(+n)},e}(0);function Wy(t,n){this._context=t,this._k=(1-n)/6}Wy.prototype={areaStart:function(){this._line=0},areaEnd:function(){this._line=NaN},lineStart:function(){this._x0=this._x1=this._x2=this._y0=this._y1=this._y2=NaN,this._point=0},lineEnd:function(){(this._line||0!==this._line&&3===this._point)&&this._context.closePath(),this._line=1-this._line},point:function(t,n){switch(t=+t,n=+n,this._point){case 0:this._point=1;break;case 1:this._point=2;break;case 2:this._point=3,this._line?this._context.lineTo(this._x2,this._y2):this._context.moveTo(this._x2,this._y2);break;case 3:this._point=4;default:jy(this,t,n)}this._x0=this._x1,this._x1=this._x2,this._x2=t,this._y0=this._y1,this._y1=this._y2,this._y2=n}};var Zy=function t(n){function e(t){return new Wy(t,n)}return e.tension=function(n){return t(+n)},e}(0);function Qy(t,n,e){var r=t._x1,i=t._y1,o=t._x2,a=t._y2;if(t._l01_a>Fg){var u=2*t._l01_2a+3*t._l01_a*t._l12_a+t._l12_2a,f=3*t._l01_a*(t._l01_a+t._l12_a);r=(r*u-t._x0*t._l12_2a+t._x2*t._l01_2a)/f,i=(i*u-t._y0*t._l12_2a+t._y2*t._l01_2a)/f}if(t._l23_a>Fg){var c=2*t._l23_2a+3*t._l23_a*t._l12_a+t._l12_2a,s=3*t._l23_a*(t._l23_a+t._l12_a);o=(o*c+t._x1*t._l23_2a-n*t._l12_2a)/s,a=(a*c+t._y1*t._l23_2a-e*t._l12_2a)/s}t._context.bezierCurveTo(r,i,o,a,t._x2,t._y2)}function Jy(t,n){this._context=t,this._alpha=n}Jy.prototype={areaStart:function(){this._line=0},areaEnd:function(){this._line=NaN},lineStart:function(){this._x0=this._x1=this._x2=this._y0=this._y1=this._y2=NaN,this._l01_a=this._l12_a=this._l23_a=this._l01_2a=this._l12_2a=this._l23_2a=this._point=0},lineEnd:function(){switch(this._point){case 2:this._context.lineTo(this._x2,this._y2);break;case 3:this.point(this._x2,this._y2)}(this._line||0!==this._line&&1===this._point)&&this._context.closePath(),this._line=1-this._line},point:function(t,n){if(t=+t,n=+n,this._point){var e=this._x2-t,r=this._y2-n;this._l23_a=Math.sqrt(this._l23_2a=Math.pow(e*e+r*r,this._alpha))}switch(this._point){case 0:this._point=1,this._line?this._context.lineTo(t,n):this._context.moveTo(t,n);break;case 1:this._point=2;break;case 2:this._point=3;default:Qy(this,t,n)}this._l01_a=this._l12_a,this._l12_a=this._l23_a,this._l01_2a=this._l12_2a,this._l12_2a=this._l23_2a,this._x0=this._x1,this._x1=this._x2,this._x2=t,this._y0=this._y1,this._y1=this._y2,this._y2=n}};var Ky=function t(n){function e(t){return n?new Jy(t,n):new Xy(t,0)}return e.alpha=function(n){return t(+n)},e}(.5);function t_(t,n){this._context=t,this._alpha=n}t_.prototype={areaStart:qy,areaEnd:qy,lineStart:function(){this._x0=this._x1=this._x2=this._x3=this._x4=this._x5=this._y0=this._y1=this._y2=this._y3=this._y4=this._y5=NaN,this._l01_a=this._l12_a=this._l23_a=this._l01_2a=this._l12_2a=this._l23_2a=this._point=0},lineEnd:function(){switch(this._point){case 1:this._context.moveTo(this._x3,this._y3),this._context.closePath();break;case 2:this._context.lineTo(this._x3,this._y3),this._context.closePath();break;case 3:this.point(this._x3,this._y3),this.point(this._x4,this._y4),this.point(this._x5,this._y5)}},point:function(t,n){if(t=+t,n=+n,this._point){var e=this._x2-t,r=this._y2-n;this._l23_a=Math.sqrt(this._l23_2a=Math.pow(e*e+r*r,this._alpha))}switch(this._point){case 0:this._point=1,this._x3=t,this._y3=n;break;case 1:this._point=2,this._context.moveTo(this._x4=t,this._y4=n);break;case 2:this._point=3,this._x5=t,this._y5=n;break;default:Qy(this,t,n)}this._l01_a=this._l12_a,this._l12_a=this._l23_a,this._l01_2a=this._l12_2a,this._l12_2a=this._l23_2a,this._x0=this._x1,this._x1=this._x2,this._x2=t,this._y0=this._y1,this._y1=this._y2,this._y2=n}};var n_=function t(n){function e(t){return n?new t_(t,n):new Vy(t,0)}return e.alpha=function(n){return t(+n)},e}(.5);function e_(t,n){this._context=t,this._alpha=n}e_.prototype={areaStart:function(){this._line=0},areaEnd:function(){this._line=NaN},lineStart:function(){this._x0=this._x1=this._x2=this._y0=this._y1=this._y2=NaN,this._l01_a=this._l12_a=this._l23_a=this._l01_2a=this._l12_2a=this._l23_2a=this._point=0},lineEnd:function(){(this._line||0!==this._line&&3===this._point)&&this._context.closePath(),this._line=1-this._line},point:function(t,n){if(t=+t,n=+n,this._point){var e=this._x2-t,r=this._y2-n;this._l23_a=Math.sqrt(this._l23_2a=Math.pow(e*e+r*r,this._alpha))}switch(this._point){case 0:this._point=1;break;case 1:this._point=2;break;case 2:this._point=3,this._line?this._context.lineTo(this._x2,this._y2):this._context.moveTo(this._x2,this._y2);break;case 3:this._point=4;default:Qy(this,t,n)}this._l01_a=this._l12_a,this._l12_a=this._l23_a,this._l01_2a=this._l12_2a,this._l12_2a=this._l23_2a,this._x0=this._x1,this._x1=this._x2,this._x2=t,this._y0=this._y1,this._y1=this._y2,this._y2=n}};var r_=function t(n){function e(t){return n?new e_(t,n):new Wy(t,0)}return e.alpha=function(n){return t(+n)},e}(.5);function i_(t){this._context=t}function o_(t){return t<0?-1:1}function a_(t,n,e){var r=t._x1-t._x0,i=n-t._x1,o=(t._y1-t._y0)/(r||i<0&&-0),a=(e-t._y1)/(i||r<0&&-0),u=(o*i+a*r)/(r+i);return(o_(o)+o_(a))*Math.min(Math.abs(o),Math.abs(a),.5*Math.abs(u))||0}function u_(t,n){var e=t._x1-t._x0;return e?(3*(t._y1-t._y0)/e-n)/2:n}function f_(t,n,e){var r=t._x0,i=t._y0,o=t._x1,a=t._y1,u=(o-r)/3;t._context.bezierCurveTo(r+u,i+u*n,o-u,a-u*e,o,a)}function c_(t){this._context=t}function s_(t){this._context=new l_(t)}function l_(t){this._context=t}function h_(t){this._context=t}function d_(t){var n,e,r=t.length-1,i=new Array(r),o=new Array(r),a=new Array(r);for(i[0]=0,o[0]=2,a[0]=t[0]+2*t[1],n=1;n<r-1;++n)i[n]=1,o[n]=4,a[n]=4*t[n]+2*t[n+1];for(i[r-1]=2,o[r-1]=7,a[r-1]=8*t[r-1]+t[r],n=1;n<r;++n)e=i[n]/o[n-1],o[n]-=e,a[n]-=e*a[n-1];for(i[r-1]=a[r-1]/o[r-1],n=r-2;n>=0;--n)i[n]=(a[n]-i[n+1])/o[n];for(o[r-1]=(t[r]+i[r-1])/2,n=0;n<r-1;++n)o[n]=2*t[n+1]-i[n+1];return[i,o]}function p_(t,n){this._context=t,this._t=n}function v_(t,n){if((i=t.length)>1)for(var e,r,i,o=1,a=t[n[0]],u=a.length;o<i;++o)for(r=a,a=t[n[o]],e=0;e<u;++e)a[e][1]+=a[e][0]=isNaN(r[e][1])?r[e][0]:r[e][1]}function g_(t){for(var n=t.length,e=new Array(n);--n>=0;)e[n]=n;return e}function y_(t,n){return t[n]}function __(t){var n=t.map(b_);return g_(t).sort(function(t,e){return n[t]-n[e]})}function b_(t){for(var n,e=0,r=-1,i=t.length;++r<i;)(n=+t[r][1])&&(e+=n);return e}function m_(t){return function(){return t}}function x_(t){return t[0]}function w_(t){return t[1]}function M_(){this._=null}function A_(t){t.U=t.C=t.L=t.R=t.P=t.N=null}function T_(t,n){var e=n,r=n.R,i=e.U;i?i.L===e?i.L=r:i.R=r:t._=r,r.U=i,e.U=r,e.R=r.L,e.R&&(e.R.U=e),r.L=e}function N_(t,n){var e=n,r=n.L,i=e.U;i?i.L===e?i.L=r:i.R=r:t._=r,r.U=i,e.U=r,e.L=r.R,e.L&&(e.L.U=e),r.R=e}function S_(t){for(;t.L;)t=t.L;return t}function E_(t,n,e,r){var i=[null,null],o=J_.push(i)-1;return i.left=t,i.right=n,e&&C_(i,t,n,e),r&&C_(i,n,t,r),Z_[t.index].halfedges.push(o),Z_[n.index].halfedges.push(o),i}function k_(t,n,e){var r=[n,e];return r.left=t,r}function C_(t,n,e,r){t[0]||t[1]?t.left===e?t[1]=r:t[0]=r:(t[0]=r,t.left=n,t.right=e)}function P_(t,n,e,r,i){var o,a=t[0],u=t[1],f=a[0],c=a[1],s=0,l=1,h=u[0]-f,d=u[1]-c;if(o=n-f,h||!(o>0)){if(o/=h,h<0){if(o<s)return;o<l&&(l=o)}else if(h>0){if(o>l)return;o>s&&(s=o)}if(o=r-f,h||!(o<0)){if(o/=h,h<0){if(o>l)return;o>s&&(s=o)}else if(h>0){if(o<s)return;o<l&&(l=o)}if(o=e-c,d||!(o>0)){if(o/=d,d<0){if(o<s)return;o<l&&(l=o)}else if(d>0){if(o>l)return;o>s&&(s=o)}if(o=i-c,d||!(o<0)){if(o/=d,d<0){if(o>l)return;o>s&&(s=o)}else if(d>0){if(o<s)return;o<l&&(l=o)}return!(s>0||l<1)||(s>0&&(t[0]=[f+s*h,c+s*d]),l<1&&(t[1]=[f+l*h,c+l*d]),!0)}}}}}function z_(t,n,e,r,i){var o=t[1];if(o)return!0;var a,u,f=t[0],c=t.left,s=t.right,l=c[0],h=c[1],d=s[0],p=s[1],v=(l+d)/2,g=(h+p)/2;if(p===h){if(v<n||v>=r)return;if(l>d){if(f){if(f[1]>=i)return}else f=[v,e];o=[v,i]}else{if(f){if(f[1]<e)return}else f=[v,i];o=[v,e]}}else if(u=g-(a=(l-d)/(p-h))*v,a<-1||a>1)if(l>d){if(f){if(f[1]>=i)return}else f=[(e-u)/a,e];o=[(i-u)/a,i]}else{if(f){if(f[1]<e)return}else f=[(i-u)/a,i];o=[(e-u)/a,e]}else if(h<p){if(f){if(f[0]>=r)return}else f=[n,a*n+u];o=[r,a*r+u]}else{if(f){if(f[0]<n)return}else f=[r,a*r+u];o=[n,a*n+u]}return t[0]=f,t[1]=o,!0}function R_(t,n){var e=t.site,r=n.left,i=n.right;return e===i&&(i=r,r=e),i?Math.atan2(i[1]-r[1],i[0]-r[0]):(e===r?(r=n[1],i=n[0]):(r=n[0],i=n[1]),Math.atan2(r[0]-i[0],i[1]-r[1]))}function L_(t,n){return n[+(n.left!==t.site)]}function D_(t,n){return n[+(n.left===t.site)]}i_.prototype={areaStart:qy,areaEnd:qy,lineStart:function(){this._point=0},lineEnd:function(){this._point&&this._context.closePath()},point:function(t,n){t=+t,n=+n,this._point?this._context.lineTo(t,n):(this._point=1,this._context.moveTo(t,n))}},c_.prototype={areaStart:function(){this._line=0},areaEnd:function(){this._line=NaN},lineStart:function(){this._x0=this._x1=this._y0=this._y1=this._t0=NaN,this._point=0},lineEnd:function(){switch(this._point){case 2:this._context.lineTo(this._x1,this._y1);break;case 3:f_(this,this._t0,u_(this,this._t0))}(this._line||0!==this._line&&1===this._point)&&this._context.closePath(),this._line=1-this._line},point:function(t,n){var e=NaN;if(n=+n,(t=+t)!==this._x1||n!==this._y1){switch(this._point){case 0:this._point=1,this._line?this._context.lineTo(t,n):this._context.moveTo(t,n);break;case 1:this._point=2;break;case 2:this._point=3,f_(this,u_(this,e=a_(this,t,n)),e);break;default:f_(this,this._t0,e=a_(this,t,n))}this._x0=this._x1,this._x1=t,this._y0=this._y1,this._y1=n,this._t0=e}}},(s_.prototype=Object.create(c_.prototype)).point=function(t,n){c_.prototype.point.call(this,n,t)},l_.prototype={moveTo:function(t,n){this._context.moveTo(n,t)},closePath:function(){this._context.closePath()},lineTo:function(t,n){this._context.lineTo(n,t)},bezierCurveTo:function(t,n,e,r,i,o){this._context.bezierCurveTo(n,t,r,e,o,i)}},h_.prototype={areaStart:function(){this._line=0},areaEnd:function(){this._line=NaN},lineStart:function(){this._x=[],this._y=[]},lineEnd:function(){var t=this._x,n=this._y,e=t.length;if(e)if(this._line?this._context.lineTo(t[0],n[0]):this._context.moveTo(t[0],n[0]),2===e)this._context.lineTo(t[1],n[1]);else for(var r=d_(t),i=d_(n),o=0,a=1;a<e;++o,++a)this._context.bezierCurveTo(r[0][o],i[0][o],r[1][o],i[1][o],t[a],n[a]);(this._line||0!==this._line&&1===e)&&this._context.closePath(),this._line=1-this._line,this._x=this._y=null},point:function(t,n){this._x.push(+t),this._y.push(+n)}},p_.prototype={areaStart:function(){this._line=0},areaEnd:function(){this._line=NaN},lineStart:function(){this._x=this._y=NaN,this._point=0},lineEnd:function(){0<this._t&&this._t<1&&2===this._point&&this._context.lineTo(this._x,this._y),(this._line||0!==this._line&&1===this._point)&&this._context.closePath(),this._line>=0&&(this._t=1-this._t,this._line=1-this._line)},point:function(t,n){switch(t=+t,n=+n,this._point){case 0:this._point=1,this._line?this._context.lineTo(t,n):this._context.moveTo(t,n);break;case 1:this._point=2;default:if(this._t<=0)this._context.lineTo(this._x,n),this._context.lineTo(t,n);else{var e=this._x*(1-this._t)+t*this._t;this._context.lineTo(e,this._y),this._context.lineTo(e,n)}}this._x=t,this._y=n}},M_.prototype={constructor:M_,insert:function(t,n){var e,r,i;if(t){if(n.P=t,n.N=t.N,t.N&&(t.N.P=n),t.N=n,t.R){for(t=t.R;t.L;)t=t.L;t.L=n}else t.R=n;e=t}else this._?(t=S_(this._),n.P=null,n.N=t,t.P=t.L=n,e=t):(n.P=n.N=null,this._=n,e=null);for(n.L=n.R=null,n.U=e,n.C=!0,t=n;e&&e.C;)e===(r=e.U).L?(i=r.R)&&i.C?(e.C=i.C=!1,r.C=!0,t=r):(t===e.R&&(T_(this,e),e=(t=e).U),e.C=!1,r.C=!0,N_(this,r)):(i=r.L)&&i.C?(e.C=i.C=!1,r.C=!0,t=r):(t===e.L&&(N_(this,e),e=(t=e).U),e.C=!1,r.C=!0,T_(this,r)),e=t.U;this._.C=!1},remove:function(t){t.N&&(t.N.P=t.P),t.P&&(t.P.N=t.N),t.N=t.P=null;var n,e,r,i=t.U,o=t.L,a=t.R;if(e=o?a?S_(a):o:a,i?i.L===t?i.L=e:i.R=e:this._=e,o&&a?(r=e.C,e.C=t.C,e.L=o,o.U=e,e!==a?(i=e.U,e.U=t.U,t=e.R,i.L=t,e.R=a,a.U=e):(e.U=i,i=e,t=e.R)):(r=t.C,t=e),t&&(t.U=i),!r)if(t&&t.C)t.C=!1;else{do{if(t===this._)break;if(t===i.L){if((n=i.R).C&&(n.C=!1,i.C=!0,T_(this,i),n=i.R),n.L&&n.L.C||n.R&&n.R.C){n.R&&n.R.C||(n.L.C=!1,n.C=!0,N_(this,n),n=i.R),n.C=i.C,i.C=n.R.C=!1,T_(this,i),t=this._;break}}else if((n=i.L).C&&(n.C=!1,i.C=!0,N_(this,i),n=i.L),n.L&&n.L.C||n.R&&n.R.C){n.L&&n.L.C||(n.R.C=!1,n.C=!0,T_(this,n),n=i.L),n.C=i.C,i.C=n.L.C=!1,N_(this,i),t=this._;break}n.C=!0,t=i,i=i.U}while(!t.C);t&&(t.C=!1)}}};var U_,q_=[];function O_(){A_(this),this.x=this.y=this.arc=this.site=this.cy=null}function Y_(t){var n=t.P,e=t.N;if(n&&e){var r=n.site,i=t.site,o=e.site;if(r!==o){var a=i[0],u=i[1],f=r[0]-a,c=r[1]-u,s=o[0]-a,l=o[1]-u,h=2*(f*l-c*s);if(!(h>=-tb)){var d=f*f+c*c,p=s*s+l*l,v=(l*d-c*p)/h,g=(f*p-s*d)/h,y=q_.pop()||new O_;y.arc=t,y.site=i,y.x=v+a,y.y=(y.cy=g+u)+Math.sqrt(v*v+g*g),t.circle=y;for(var _=null,b=Q_._;b;)if(y.y<b.y||y.y===b.y&&y.x<=b.x){if(!b.L){_=b.P;break}b=b.L}else{if(!b.R){_=b;break}b=b.R}Q_.insert(_,y),_||(U_=y)}}}}function B_(t){var n=t.circle;n&&(n.P||(U_=n.N),Q_.remove(n),q_.push(n),A_(n),t.circle=null)}var F_=[];function I_(){A_(this),this.edge=this.site=this.circle=null}function H_(t){var n=F_.pop()||new I_;return n.site=t,n}function j_(t){B_(t),W_.remove(t),F_.push(t),A_(t)}function X_(t){var n=t.circle,e=n.x,r=n.cy,i=[e,r],o=t.P,a=t.N,u=[t];j_(t);for(var f=o;f.circle&&Math.abs(e-f.circle.x)<K_&&Math.abs(r-f.circle.cy)<K_;)o=f.P,u.unshift(f),j_(f),f=o;u.unshift(f),B_(f);for(var c=a;c.circle&&Math.abs(e-c.circle.x)<K_&&Math.abs(r-c.circle.cy)<K_;)a=c.N,u.push(c),j_(c),c=a;u.push(c),B_(c);var s,l=u.length;for(s=1;s<l;++s)c=u[s],f=u[s-1],C_(c.edge,f.site,c.site,i);f=u[0],(c=u[l-1]).edge=E_(f.site,c.site,null,i),Y_(f),Y_(c)}function G_(t){for(var n,e,r,i,o=t[0],a=t[1],u=W_._;u;)if((r=V_(u,a)-o)>K_)u=u.L;else{if(!((i=o-$_(u,a))>K_)){r>-K_?(n=u.P,e=u):i>-K_?(n=u,e=u.N):n=e=u;break}if(!u.R){n=u;break}u=u.R}!function(t){Z_[t.index]={site:t,halfedges:[]}}(t);var f=H_(t);if(W_.insert(n,f),n||e){if(n===e)return B_(n),e=H_(n.site),W_.insert(f,e),f.edge=e.edge=E_(n.site,f.site),Y_(n),void Y_(e);if(e){B_(n),B_(e);var c=n.site,s=c[0],l=c[1],h=t[0]-s,d=t[1]-l,p=e.site,v=p[0]-s,g=p[1]-l,y=2*(h*g-d*v),_=h*h+d*d,b=v*v+g*g,m=[(g*_-d*b)/y+s,(h*b-v*_)/y+l];C_(e.edge,c,p,m),f.edge=E_(c,t,null,m),e.edge=E_(t,p,null,m),Y_(n),Y_(e)}else f.edge=E_(n.site,f.site)}}function V_(t,n){var e=t.site,r=e[0],i=e[1],o=i-n;if(!o)return r;var a=t.P;if(!a)return-1/0;var u=(e=a.site)[0],f=e[1],c=f-n;if(!c)return u;var s=u-r,l=1/o-1/c,h=s/c;return l?(-h+Math.sqrt(h*h-2*l*(s*s/(-2*c)-f+c/2+i-o/2)))/l+r:(r+u)/2}function $_(t,n){var e=t.N;if(e)return V_(e,n);var r=t.site;return r[1]===n?r[0]:1/0}var W_,Z_,Q_,J_,K_=1e-6,tb=1e-12;function nb(t,n){return n[1]-t[1]||n[0]-t[0]}function eb(t,n){var e,r,i,o=t.sort(nb).pop();for(J_=[],Z_=new Array(t.length),W_=new M_,Q_=new M_;;)if(i=U_,o&&(!i||o[1]<i.y||o[1]===i.y&&o[0]<i.x))o[0]===e&&o[1]===r||(G_(o),e=o[0],r=o[1]),o=t.pop();else{if(!i)break;X_(i.arc)}if(function(){for(var t,n,e,r,i=0,o=Z_.length;i<o;++i)if((t=Z_[i])&&(r=(n=t.halfedges).length)){var a=new Array(r),u=new Array(r);for(e=0;e<r;++e)a[e]=e,u[e]=R_(t,J_[n[e]]);for(a.sort(function(t,n){return u[n]-u[t]}),e=0;e<r;++e)u[e]=n[a[e]];for(e=0;e<r;++e)n[e]=u[e]}}(),n){var a=+n[0][0],u=+n[0][1],f=+n[1][0],c=+n[1][1];!function(t,n,e,r){for(var i,o=J_.length;o--;)z_(i=J_[o],t,n,e,r)&&P_(i,t,n,e,r)&&(Math.abs(i[0][0]-i[1][0])>K_||Math.abs(i[0][1]-i[1][1])>K_)||delete J_[o]}(a,u,f,c),function(t,n,e,r){var i,o,a,u,f,c,s,l,h,d,p,v,g=Z_.length,y=!0;for(i=0;i<g;++i)if(o=Z_[i]){for(a=o.site,u=(f=o.halfedges).length;u--;)J_[f[u]]||f.splice(u,1);for(u=0,c=f.length;u<c;)p=(d=D_(o,J_[f[u]]))[0],v=d[1],l=(s=L_(o,J_[f[++u%c]]))[0],h=s[1],(Math.abs(p-l)>K_||Math.abs(v-h)>K_)&&(f.splice(u,0,J_.push(k_(a,d,Math.abs(p-t)<K_&&r-v>K_?[t,Math.abs(l-t)<K_?h:r]:Math.abs(v-r)<K_&&e-p>K_?[Math.abs(h-r)<K_?l:e,r]:Math.abs(p-e)<K_&&v-n>K_?[e,Math.abs(l-e)<K_?h:n]:Math.abs(v-n)<K_&&p-t>K_?[Math.abs(h-n)<K_?l:t,n]:null))-1),++c);c&&(y=!1)}if(y){var _,b,m,x=1/0;for(i=0,y=null;i<g;++i)(o=Z_[i])&&(m=(_=(a=o.site)[0]-t)*_+(b=a[1]-n)*b)<x&&(x=m,y=o);if(y){var w=[t,n],M=[t,r],A=[e,r],T=[e,n];y.halfedges.push(J_.push(k_(a=y.site,w,M))-1,J_.push(k_(a,M,A))-1,J_.push(k_(a,A,T))-1,J_.push(k_(a,T,w))-1)}}for(i=0;i<g;++i)(o=Z_[i])&&(o.halfedges.length||delete Z_[i])}(a,u,f,c)}this.edges=J_,this.cells=Z_,W_=Q_=J_=Z_=null}function rb(t){return function(){return t}}function ib(t,n,e){this.target=t,this.type=n,this.transform=e}function ob(t,n,e){this.k=t,this.x=n,this.y=e}eb.prototype={constructor:eb,polygons:function(){var t=this.edges;return this.cells.map(function(n){var e=n.halfedges.map(function(e){return L_(n,t[e])});return e.data=n.site.data,e})},triangles:function(){var t=[],n=this.edges;return this.cells.forEach(function(e,r){if(o=(i=e.halfedges).length)for(var i,o,a,u,f,c,s=e.site,l=-1,h=n[i[o-1]],d=h.left===s?h.right:h.left;++l<o;)a=d,d=(h=n[i[l]]).left===s?h.right:h.left,a&&d&&r<a.index&&r<d.index&&(f=a,c=d,((u=s)[0]-c[0])*(f[1]-u[1])-(u[0]-f[0])*(c[1]-u[1])<0)&&t.push([s.data,a.data,d.data])}),t},links:function(){return this.edges.filter(function(t){return t.right}).map(function(t){return{source:t.left.data,target:t.right.data}})},find:function(t,n,e){for(var r,i,o=this,a=o._found||0,u=o.cells.length;!(i=o.cells[a]);)if(++a>=u)return null;var f=t-i.site[0],c=n-i.site[1],s=f*f+c*c;do{i=o.cells[r=a],a=null,i.halfedges.forEach(function(e){var r=o.edges[e],u=r.left;if(u!==i.site&&u||(u=r.right)){var f=t-u[0],c=n-u[1],l=f*f+c*c;l<s&&(s=l,a=u.index)}})}while(null!==a);return o._found=r,null==e||s<=e*e?i.site:null}},ob.prototype={constructor:ob,scale:function(t){return 1===t?this:new ob(this.k*t,this.x,this.y)},translate:function(t,n){return 0===t&0===n?this:new ob(this.k,this.x+this.k*t,this.y+this.k*n)},apply:function(t){return[t[0]*this.k+this.x,t[1]*this.k+this.y]},applyX:function(t){return t*this.k+this.x},applyY:function(t){return t*this.k+this.y},invert:function(t){return[(t[0]-this.x)/this.k,(t[1]-this.y)/this.k]},invertX:function(t){return(t-this.x)/this.k},invertY:function(t){return(t-this.y)/this.k},rescaleX:function(t){return t.copy().domain(t.range().map(this.invertX,this).map(t.invert,t))},rescaleY:function(t){return t.copy().domain(t.range().map(this.invertY,this).map(t.invert,t))},toString:function(){return"translate("+this.x+","+this.y+") scale("+this.k+")"}};var ab=new ob(1,0,0);function ub(t){return t.__zoom||ab}function fb(){t.event.stopImmediatePropagation()}function cb(){t.event.preventDefault(),t.event.stopImmediatePropagation()}function sb(){return!t.event.button}function lb(){var t,n,e=this;return e instanceof SVGElement?(t=(e=e.ownerSVGElement||e).width.baseVal.value,n=e.height.baseVal.value):(t=e.clientWidth,n=e.clientHeight),[[0,0],[t,n]]}function hb(){return this.__zoom||ab}function db(){return-t.event.deltaY*(t.event.deltaMode?120:1)/500}function pb(){return"ontouchstart"in this}function vb(t,n,e){var r=t.invertX(n[0][0])-e[0][0],i=t.invertX(n[1][0])-e[1][0],o=t.invertY(n[0][1])-e[0][1],a=t.invertY(n[1][1])-e[1][1];return t.translate(i>r?(r+i)/2:Math.min(0,r)||Math.max(0,i),a>o?(o+a)/2:Math.min(0,o)||Math.max(0,a))}ub.prototype=ob.prototype,t.version="5.7.0",t.bisect=i,t.bisectRight=i,t.bisectLeft=o,t.ascending=n,t.bisector=e,t.cross=function(t,n,e){var r,i,o,u,f=t.length,c=n.length,s=new Array(f*c);for(null==e&&(e=a),r=o=0;r<f;++r)for(u=t[r],i=0;i<c;++i,++o)s[o]=e(u,n[i]);return s},t.descending=function(t,n){return n<t?-1:n>t?1:n>=t?0:NaN},t.deviation=c,t.extent=s,t.histogram=function(){var t=v,n=s,e=M;function r(r){var o,a,u=r.length,f=new Array(u);for(o=0;o<u;++o)f[o]=t(r[o],o,r);var c=n(f),s=c[0],l=c[1],h=e(f,s,l);Array.isArray(h)||(h=w(s,l,h),h=g(Math.ceil(s/h)*h,l,h));for(var d=h.length;h[0]<=s;)h.shift(),--d;for(;h[d-1]>l;)h.pop(),--d;var p,v=new Array(d+1);for(o=0;o<=d;++o)(p=v[o]=[]).x0=o>0?h[o-1]:s,p.x1=o<d?h[o]:l;for(o=0;o<u;++o)s<=(a=f[o])&&a<=l&&v[i(h,a,0,d)].push(r[o]);return v}return r.value=function(n){return arguments.length?(t="function"==typeof n?n:p(n),r):t},r.domain=function(t){return arguments.length?(n="function"==typeof t?t:p([t[0],t[1]]),r):n},r.thresholds=function(t){return arguments.length?(e="function"==typeof t?t:Array.isArray(t)?p(h.call(t)):p(t),r):e},r},t.thresholdFreedmanDiaconis=function(t,e,r){return t=d.call(t,u).sort(n),Math.ceil((r-e)/(2*(A(t,.75)-A(t,.25))*Math.pow(t.length,-1/3)))},t.thresholdScott=function(t,n,e){return Math.ceil((e-n)/(3.5*c(t)*Math.pow(t.length,-1/3)))},t.thresholdSturges=M,t.max=T,t.mean=function(t,n){var e,r=t.length,i=r,o=-1,a=0;if(null==n)for(;++o<r;)isNaN(e=u(t[o]))?--i:a+=e;else for(;++o<r;)isNaN(e=u(n(t[o],o,t)))?--i:a+=e;if(i)return a/i},t.median=function(t,e){var r,i=t.length,o=-1,a=[];if(null==e)for(;++o<i;)isNaN(r=u(t[o]))||a.push(r);else for(;++o<i;)isNaN(r=u(e(t[o],o,t)))||a.push(r);return A(a.sort(n),.5)},t.merge=N,t.min=S,t.pairs=function(t,n){null==n&&(n=a);for(var e=0,r=t.length-1,i=t[0],o=new Array(r<0?0:r);e<r;)o[e]=n(i,i=t[++e]);return o},t.permute=function(t,n){for(var e=n.length,r=new Array(e);e--;)r[e]=t[n[e]];return r},t.quantile=A,t.range=g,t.scan=function(t,e){if(r=t.length){var r,i,o=0,a=0,u=t[a];for(null==e&&(e=n);++o<r;)(e(i=t[o],u)<0||0!==e(u,u))&&(u=i,a=o);return 0===e(u,u)?a:void 0}},t.shuffle=function(t,n,e){for(var r,i,o=(null==e?t.length:e)-(n=null==n?0:+n);o;)i=Math.random()*o--|0,r=t[o+n],t[o+n]=t[i+n],t[i+n]=r;return t},t.sum=function(t,n){var e,r=t.length,i=-1,o=0;if(null==n)for(;++i<r;)(e=+t[i])&&(o+=e);else for(;++i<r;)(e=+n(t[i],i,t))&&(o+=e);return o},t.ticks=m,t.tickIncrement=x,t.tickStep=w,t.transpose=E,t.variance=f,t.zip=function(){return E(arguments)},t.axisTop=function(t){return B(z,t)},t.axisRight=function(t){return B(R,t)},t.axisBottom=function(t){return B(L,t)},t.axisLeft=function(t){return B(D,t)},t.brush=function(){return Ri(wi)},t.brushX=function(){return Ri(mi)},t.brushY=function(){return Ri(xi)},t.brushSelection=function(t){var n=t.__brush;return n?n.dim.output(n.selection):null},t.chord=function(){var t=0,n=null,e=null,r=null;function i(i){var o,a,u,f,c,s,l=i.length,h=[],d=g(l),p=[],v=[],y=v.groups=new Array(l),_=new Array(l*l);for(o=0,c=-1;++c<l;){for(a=0,s=-1;++s<l;)a+=i[c][s];h.push(a),p.push(g(l)),o+=a}for(n&&d.sort(function(t,e){return n(h[t],h[e])}),e&&p.forEach(function(t,n){t.sort(function(t,r){return e(i[n][t],i[n][r])})}),f=(o=Yi(0,Oi-t*l)/o)?t:Oi/l,a=0,c=-1;++c<l;){for(u=a,s=-1;++s<l;){var b=d[c],m=p[b][s],x=i[b][m],w=a,M=a+=x*o;_[m*l+b]={index:b,subindex:m,startAngle:w,endAngle:M,value:x}}y[b]={index:b,startAngle:u,endAngle:a,value:h[b]},a+=f}for(c=-1;++c<l;)for(s=c-1;++s<l;){var A=_[s*l+c],T=_[c*l+s];(A.value||T.value)&&v.push(A.value<T.value?{source:T,target:A}:{source:A,target:T})}return r?v.sort(r):v}return i.padAngle=function(n){return arguments.length?(t=Yi(0,n),i):t},i.sortGroups=function(t){return arguments.length?(n=t,i):n},i.sortSubgroups=function(t){return arguments.length?(e=t,i):e},i.sortChords=function(t){return arguments.length?(null==t?r=null:(n=t,r=function(t,e){return n(t.source.value+t.target.value,e.source.value+e.target.value)})._=t,i):r&&r._;var n},i},t.ribbon=function(){var t=Vi,n=$i,e=Wi,r=Zi,i=Qi,o=null;function a(){var a,u=Bi.call(arguments),f=t.apply(this,u),c=n.apply(this,u),s=+e.apply(this,(u[0]=f,u)),l=r.apply(this,u)-qi,h=i.apply(this,u)-qi,d=s*Li(l),p=s*Di(l),v=+e.apply(this,(u[0]=c,u)),g=r.apply(this,u)-qi,y=i.apply(this,u)-qi;if(o||(o=a=Gi()),o.moveTo(d,p),o.arc(0,0,s,l,h),l===g&&h===y||(o.quadraticCurveTo(0,0,v*Li(g),v*Di(g)),o.arc(0,0,v,g,y)),o.quadraticCurveTo(0,0,d,p),o.closePath(),a)return o=null,a+""||null}return a.radius=function(t){return arguments.length?(e="function"==typeof t?t:Fi(+t),a):e},a.startAngle=function(t){return arguments.length?(r="function"==typeof t?t:Fi(+t),a):r},a.endAngle=function(t){return arguments.length?(i="function"==typeof t?t:Fi(+t),a):i},a.source=function(n){return arguments.length?(t=n,a):t},a.target=function(t){return arguments.length?(n=t,a):n},a.context=function(t){return arguments.length?(o=null==t?null:t,a):o},a},t.nest=function(){var t,n,e,r=[],i=[];function o(e,i,a,u){if(i>=r.length)return null!=t&&e.sort(t),null!=n?n(e):e;for(var f,c,s,l=-1,h=e.length,d=r[i++],p=Ki(),v=a();++l<h;)(s=p.get(f=d(c=e[l])+""))?s.push(c):p.set(f,[c]);return p.each(function(t,n){u(v,n,o(t,i,a,u))}),v}return e={object:function(t){return o(t,0,to,no)},map:function(t){return o(t,0,eo,ro)},entries:function(t){return function t(e,o){if(++o>r.length)return e;var a,u=i[o-1];return null!=n&&o>=r.length?a=e.entries():(a=[],e.each(function(n,e){a.push({key:e,values:t(n,o)})})),null!=u?a.sort(function(t,n){return u(t.key,n.key)}):a}(o(t,0,eo,ro),0)},key:function(t){return r.push(t),e},sortKeys:function(t){return i[r.length-1]=t,e},sortValues:function(n){return t=n,e},rollup:function(t){return n=t,e}}},t.set=ao,t.map=Ki,t.keys=function(t){var n=[];for(var e in t)n.push(e);return n},t.values=function(t){var n=[];for(var e in t)n.push(t[e]);return n},t.entries=function(t){var n=[];for(var e in t)n.push({key:e,value:t[e]});return n},t.color=vn,t.rgb=bn,t.hsl=Mn,t.lab=Un,t.hcl=Hn,t.lch=function(t,n,e,r){return 1===arguments.length?In(t):new jn(e,n,t,null==r?1:r)},t.gray=function(t,n){return new qn(t,0,0,null==n?1:n)},t.cubehelix=Kn,t.contours=go,t.contourDensity=function(){var t=bo,n=mo,e=xo,r=960,i=500,o=20,a=2,u=3*o,f=r+2*u>>a,c=i+2*u>>a,s=co(20);function l(r){var i=new Float32Array(f*c),l=new Float32Array(f*c);r.forEach(function(r,o,s){var l=+t(r,o,s)+u>>a,h=+n(r,o,s)+u>>a,d=+e(r,o,s);l>=0&&l<f&&h>=0&&h<c&&(i[l+h*f]+=d)}),yo({width:f,height:c,data:i},{width:f,height:c,data:l},o>>a),_o({width:f,height:c,data:l},{width:f,height:c,data:i},o>>a),yo({width:f,height:c,data:i},{width:f,height:c,data:l},o>>a),_o({width:f,height:c,data:l},{width:f,height:c,data:i},o>>a),yo({width:f,height:c,data:i},{width:f,height:c,data:l},o>>a),_o({width:f,height:c,data:l},{width:f,height:c,data:i},o>>a);var d=s(i);if(!Array.isArray(d)){var p=T(i);d=w(0,p,d),(d=g(0,Math.floor(p/d)*d,d)).shift()}return go().thresholds(d).size([f,c])(i).map(h)}function h(t){return t.value*=Math.pow(2,-2*a),t.coordinates.forEach(d),t}function d(t){t.forEach(p)}function p(t){t.forEach(v)}function v(t){t[0]=t[0]*Math.pow(2,a)-u,t[1]=t[1]*Math.pow(2,a)-u}function y(){return f=r+2*(u=3*o)>>a,c=i+2*u>>a,l}return l.x=function(n){return arguments.length?(t="function"==typeof n?n:co(+n),l):t},l.y=function(t){return arguments.length?(n="function"==typeof t?t:co(+t),l):n},l.weight=function(t){return arguments.length?(e="function"==typeof t?t:co(+t),l):e},l.size=function(t){if(!arguments.length)return[r,i];var n=Math.ceil(t[0]),e=Math.ceil(t[1]);if(!(n>=0||n>=0))throw new Error("invalid size");return r=n,i=e,y()},l.cellSize=function(t){if(!arguments.length)return 1<<a;if(!((t=+t)>=1))throw new Error("invalid cell size");return a=Math.floor(Math.log(t)/Math.LN2),y()},l.thresholds=function(t){return arguments.length?(s="function"==typeof t?t:Array.isArray(t)?co(uo.call(t)):co(t),l):s},l.bandwidth=function(t){if(!arguments.length)return Math.sqrt(o*(o+1));if(!((t=+t)>=0))throw new Error("invalid bandwidth");return o=Math.round((Math.sqrt(4*t*t+1)-1)/2),y()},l},t.dispatch=I,t.drag=function(){var n,e,r,i,o=Wt,a=Zt,u=Qt,f=Jt,c={},s=I("start","drag","end"),l=0,h=0;function d(t){t.on("mousedown.drag",p).filter(f).on("touchstart.drag",y).on("touchmove.drag",_).on("touchend.drag touchcancel.drag",b).style("touch-action","none").style("-webkit-tap-highlight-color","rgba(0,0,0,0)")}function p(){if(!i&&o.apply(this,arguments)){var u=m("mouse",a.apply(this,arguments),Ft,this,arguments);u&&(Dt(t.event.view).on("mousemove.drag",v,!0).on("mouseup.drag",g,!0),Xt(t.event.view),Ht(),r=!1,n=t.event.clientX,e=t.event.clientY,u("start"))}}function v(){if(jt(),!r){var i=t.event.clientX-n,o=t.event.clientY-e;r=i*i+o*o>h}c.mouse("drag")}function g(){Dt(t.event.view).on("mousemove.drag mouseup.drag",null),Gt(t.event.view,r),jt(),c.mouse("end")}function y(){if(o.apply(this,arguments)){var n,e,r=t.event.changedTouches,i=a.apply(this,arguments),u=r.length;for(n=0;n<u;++n)(e=m(r[n].identifier,i,It,this,arguments))&&(Ht(),e("start"))}}function _(){var n,e,r=t.event.changedTouches,i=r.length;for(n=0;n<i;++n)(e=c[r[n].identifier])&&(jt(),e("drag"))}function b(){var n,e,r=t.event.changedTouches,o=r.length;for(i&&clearTimeout(i),i=setTimeout(function(){i=null},500),n=0;n<o;++n)(e=c[r[n].identifier])&&(Ht(),e("end"))}function m(n,e,r,i,o){var a,f,h,p=r(e,n),v=s.copy();if(Ct(new $t(d,"beforestart",a,n,l,p[0],p[1],0,0,v),function(){return null!=(t.event.subject=a=u.apply(i,o))&&(f=a.x-p[0]||0,h=a.y-p[1]||0,!0)}))return function t(u){var s,g=p;switch(u){case"start":c[n]=t,s=l++;break;case"end":delete c[n],--l;case"drag":p=r(e,n),s=l}Ct(new $t(d,u,a,n,s,p[0]+f,p[1]+h,p[0]-g[0],p[1]-g[1],v),v.apply,v,[u,i,o])}}return d.filter=function(t){return arguments.length?(o="function"==typeof t?t:Vt(!!t),d):o},d.container=function(t){return arguments.length?(a="function"==typeof t?t:Vt(t),d):a},d.subject=function(t){return arguments.length?(u="function"==typeof t?t:Vt(t),d):u},d.touchable=function(t){return arguments.length?(f="function"==typeof t?t:Vt(!!t),d):f},d.on=function(){var t=s.on.apply(s,arguments);return t===s?d:t},d.clickDistance=function(t){return arguments.length?(h=(t=+t)*t,d):Math.sqrt(h)},d},t.dragDisable=Xt,t.dragEnable=Gt,t.dsvFormat=Eo,t.csvParse=Co,t.csvParseRows=Po,t.csvFormat=zo,t.csvFormatRows=Ro,t.tsvParse=Do,t.tsvParseRows=Uo,t.tsvFormat=qo,t.tsvFormatRows=Oo,t.easeLinear=function(t){return+t},t.easeQuad=Dr,t.easeQuadIn=function(t){return t*t},t.easeQuadOut=function(t){return t*(2-t)},t.easeQuadInOut=Dr,t.easeCubic=Ur,t.easeCubicIn=function(t){return t*t*t},t.easeCubicOut=function(t){return--t*t*t+1},t.easeCubicInOut=Ur,t.easePoly=Yr,t.easePolyIn=qr,t.easePolyOut=Or,t.easePolyInOut=Yr,t.easeSin=Ir,t.easeSinIn=function(t){return 1-Math.cos(t*Fr)},t.easeSinOut=function(t){return Math.sin(t*Fr)},t.easeSinInOut=Ir,t.easeExp=Hr,t.easeExpIn=function(t){return Math.pow(2,10*t-10)},t.easeExpOut=function(t){return 1-Math.pow(2,-10*t)},t.easeExpInOut=Hr,t.easeCircle=jr,t.easeCircleIn=function(t){return 1-Math.sqrt(1-t*t)},t.easeCircleOut=function(t){return Math.sqrt(1- --t*t)},t.easeCircleInOut=jr,t.easeBounce=ni,t.easeBounceIn=function(t){return 1-ni(1-t)},t.easeBounceOut=ni,t.easeBounceInOut=function(t){return((t*=2)<=1?1-ni(1-t):ni(t-1)+1)/2},t.easeBack=ii,t.easeBackIn=ei,t.easeBackOut=ri,t.easeBackInOut=ii,t.easeElastic=ui,t.easeElasticIn=ai,t.easeElasticOut=ui,t.easeElasticInOut=fi,t.blob=function(t,n){return fetch(t,n).then(Yo)},t.buffer=function(t,n){return fetch(t,n).then(Bo)},t.dsv=function(t,n,e,r){3===arguments.length&&"function"==typeof e&&(r=e,e=void 0);var i=Eo(t);return Io(n,e).then(function(t){return i.parse(t,r)})},t.csv=jo,t.tsv=Xo,t.image=function(t,n){return new Promise(function(e,r){var i=new Image;for(var o in n)i[o]=n[o];i.onerror=r,i.onload=function(){e(i)},i.src=t})},t.json=function(t,n){return fetch(t,n).then(Go)},t.text=Io,t.xml=$o,t.html=Wo,t.svg=Zo,t.forceCenter=function(t,n){var e;function r(){var r,i,o=e.length,a=0,u=0;for(r=0;r<o;++r)a+=(i=e[r]).x,u+=i.y;for(a=a/o-t,u=u/o-n,r=0;r<o;++r)(i=e[r]).x-=a,i.y-=u}return null==t&&(t=0),null==n&&(n=0),r.initialize=function(t){e=t},r.x=function(n){return arguments.length?(t=+n,r):t},r.y=function(t){return arguments.length?(n=+t,r):n},r},t.forceCollide=function(t){var n,e,r=1,i=1;function o(){for(var t,o,u,f,c,s,l,h=n.length,d=0;d<i;++d)for(o=ra(n,ua,fa).visitAfter(a),t=0;t<h;++t)u=n[t],s=e[u.index],l=s*s,f=u.x+u.vx,c=u.y+u.vy,o.visit(p);function p(t,n,e,i,o){var a=t.data,h=t.r,d=s+h;if(!a)return n>f+d||i<f-d||e>c+d||o<c-d;if(a.index>u.index){var p=f-a.x-a.vx,v=c-a.y-a.vy,g=p*p+v*v;g<d*d&&(0===p&&(g+=(p=Jo())*p),0===v&&(g+=(v=Jo())*v),g=(d-(g=Math.sqrt(g)))/g*r,u.vx+=(p*=g)*(d=(h*=h)/(l+h)),u.vy+=(v*=g)*d,a.vx-=p*(d=1-d),a.vy-=v*d)}}}function a(t){if(t.data)return t.r=e[t.data.index];for(var n=t.r=0;n<4;++n)t[n]&&t[n].r>t.r&&(t.r=t[n].r)}function u(){if(n){var r,i,o=n.length;for(e=new Array(o),r=0;r<o;++r)i=n[r],e[i.index]=+t(i,r,n)}}return"function"!=typeof t&&(t=Qo(null==t?1:+t)),o.initialize=function(t){n=t,u()},o.iterations=function(t){return arguments.length?(i=+t,o):i},o.strength=function(t){return arguments.length?(r=+t,o):r},o.radius=function(n){return arguments.length?(t="function"==typeof n?n:Qo(+n),u(),o):t},o},t.forceLink=function(t){var n,e,r,i,o,a=ca,u=function(t){return 1/Math.min(i[t.source.index],i[t.target.index])},f=Qo(30),c=1;function s(r){for(var i=0,a=t.length;i<c;++i)for(var u,f,s,l,h,d,p,v=0;v<a;++v)f=(u=t[v]).source,l=(s=u.target).x+s.vx-f.x-f.vx||Jo(),h=s.y+s.vy-f.y-f.vy||Jo(),l*=d=((d=Math.sqrt(l*l+h*h))-e[v])/d*r*n[v],h*=d,s.vx-=l*(p=o[v]),s.vy-=h*p,f.vx+=l*(p=1-p),f.vy+=h*p}function l(){if(r){var u,f,c=r.length,s=t.length,l=Ki(r,a);for(u=0,i=new Array(c);u<s;++u)(f=t[u]).index=u,"object"!=typeof f.source&&(f.source=sa(l,f.source)),"object"!=typeof f.target&&(f.target=sa(l,f.target)),i[f.source.index]=(i[f.source.index]||0)+1,i[f.target.index]=(i[f.target.index]||0)+1;for(u=0,o=new Array(s);u<s;++u)f=t[u],o[u]=i[f.source.index]/(i[f.source.index]+i[f.target.index]);n=new Array(s),h(),e=new Array(s),d()}}function h(){if(r)for(var e=0,i=t.length;e<i;++e)n[e]=+u(t[e],e,t)}function d(){if(r)for(var n=0,i=t.length;n<i;++n)e[n]=+f(t[n],n,t)}return null==t&&(t=[]),s.initialize=function(t){r=t,l()},s.links=function(n){return arguments.length?(t=n,l(),s):t},s.id=function(t){return arguments.length?(a=t,s):a},s.iterations=function(t){return arguments.length?(c=+t,s):c},s.strength=function(t){return arguments.length?(u="function"==typeof t?t:Qo(+t),h(),s):u},s.distance=function(t){return arguments.length?(f="function"==typeof t?t:Qo(+t),d(),s):f},s},t.forceManyBody=function(){var t,n,e,r,i=Qo(-30),o=1,a=1/0,u=.81;function f(r){var i,o=t.length,a=ra(t,la,ha).visitAfter(s);for(e=r,i=0;i<o;++i)n=t[i],a.visit(l)}function c(){if(t){var n,e,o=t.length;for(r=new Array(o),n=0;n<o;++n)e=t[n],r[e.index]=+i(e,n,t)}}function s(t){var n,e,i,o,a,u=0,f=0;if(t.length){for(i=o=a=0;a<4;++a)(n=t[a])&&(e=Math.abs(n.value))&&(u+=n.value,f+=e,i+=e*n.x,o+=e*n.y);t.x=i/f,t.y=o/f}else{(n=t).x=n.data.x,n.y=n.data.y;do{u+=r[n.data.index]}while(n=n.next)}t.value=u}function l(t,i,f,c){if(!t.value)return!0;var s=t.x-n.x,l=t.y-n.y,h=c-i,d=s*s+l*l;if(h*h/u<d)return d<a&&(0===s&&(d+=(s=Jo())*s),0===l&&(d+=(l=Jo())*l),d<o&&(d=Math.sqrt(o*d)),n.vx+=s*t.value*e/d,n.vy+=l*t.value*e/d),!0;if(!(t.length||d>=a)){(t.data!==n||t.next)&&(0===s&&(d+=(s=Jo())*s),0===l&&(d+=(l=Jo())*l),d<o&&(d=Math.sqrt(o*d)));do{t.data!==n&&(h=r[t.data.index]*e/d,n.vx+=s*h,n.vy+=l*h)}while(t=t.next)}}return f.initialize=function(n){t=n,c()},f.strength=function(t){return arguments.length?(i="function"==typeof t?t:Qo(+t),c(),f):i},f.distanceMin=function(t){return arguments.length?(o=t*t,f):Math.sqrt(o)},f.distanceMax=function(t){return arguments.length?(a=t*t,f):Math.sqrt(a)},f.theta=function(t){return arguments.length?(u=t*t,f):Math.sqrt(u)},f},t.forceRadial=function(t,n,e){var r,i,o,a=Qo(.1);function u(t){for(var a=0,u=r.length;a<u;++a){var f=r[a],c=f.x-n||1e-6,s=f.y-e||1e-6,l=Math.sqrt(c*c+s*s),h=(o[a]-l)*i[a]*t/l;f.vx+=c*h,f.vy+=s*h}}function f(){if(r){var n,e=r.length;for(i=new Array(e),o=new Array(e),n=0;n<e;++n)o[n]=+t(r[n],n,r),i[n]=isNaN(o[n])?0:+a(r[n],n,r)}}return"function"!=typeof t&&(t=Qo(+t)),null==n&&(n=0),null==e&&(e=0),u.initialize=function(t){r=t,f()},u.strength=function(t){return arguments.length?(a="function"==typeof t?t:Qo(+t),f(),u):a},u.radius=function(n){return arguments.length?(t="function"==typeof n?n:Qo(+n),f(),u):t},u.x=function(t){return arguments.length?(n=+t,u):n},u.y=function(t){return arguments.length?(e=+t,u):e},u},t.forceSimulation=function(t){var n,e=1,r=.001,i=1-Math.pow(r,1/300),o=0,a=.6,u=Ki(),f=ur(s),c=I("tick","end");function s(){l(),c.call("tick",n),e<r&&(f.stop(),c.call("end",n))}function l(){var n,r,f=t.length;for(e+=(o-e)*i,u.each(function(t){t(e)}),n=0;n<f;++n)null==(r=t[n]).fx?r.x+=r.vx*=a:(r.x=r.fx,r.vx=0),null==r.fy?r.y+=r.vy*=a:(r.y=r.fy,r.vy=0)}function h(){for(var n,e=0,r=t.length;e<r;++e){if((n=t[e]).index=e,isNaN(n.x)||isNaN(n.y)){var i=da*Math.sqrt(e),o=e*pa;n.x=i*Math.cos(o),n.y=i*Math.sin(o)}(isNaN(n.vx)||isNaN(n.vy))&&(n.vx=n.vy=0)}}function d(n){return n.initialize&&n.initialize(t),n}return null==t&&(t=[]),h(),n={tick:l,restart:function(){return f.restart(s),n},stop:function(){return f.stop(),n},nodes:function(e){return arguments.length?(t=e,h(),u.each(d),n):t},alpha:function(t){return arguments.length?(e=+t,n):e},alphaMin:function(t){return arguments.length?(r=+t,n):r},alphaDecay:function(t){return arguments.length?(i=+t,n):+i},alphaTarget:function(t){return arguments.length?(o=+t,n):o},velocityDecay:function(t){return arguments.length?(a=1-t,n):1-a},force:function(t,e){return arguments.length>1?(null==e?u.remove(t):u.set(t,d(e)),n):u.get(t)},find:function(n,e,r){var i,o,a,u,f,c=0,s=t.length;for(null==r?r=1/0:r*=r,c=0;c<s;++c)(a=(i=n-(u=t[c]).x)*i+(o=e-u.y)*o)<r&&(f=u,r=a);return f},on:function(t,e){return arguments.length>1?(c.on(t,e),n):c.on(t)}}},t.forceX=function(t){var n,e,r,i=Qo(.1);function o(t){for(var i,o=0,a=n.length;o<a;++o)(i=n[o]).vx+=(r[o]-i.x)*e[o]*t}function a(){if(n){var o,a=n.length;for(e=new Array(a),r=new Array(a),o=0;o<a;++o)e[o]=isNaN(r[o]=+t(n[o],o,n))?0:+i(n[o],o,n)}}return"function"!=typeof t&&(t=Qo(null==t?0:+t)),o.initialize=function(t){n=t,a()},o.strength=function(t){return arguments.length?(i="function"==typeof t?t:Qo(+t),a(),o):i},o.x=function(n){return arguments.length?(t="function"==typeof n?n:Qo(+n),a(),o):t},o},t.forceY=function(t){var n,e,r,i=Qo(.1);function o(t){for(var i,o=0,a=n.length;o<a;++o)(i=n[o]).vy+=(r[o]-i.y)*e[o]*t}function a(){if(n){var o,a=n.length;for(e=new Array(a),r=new Array(a),o=0;o<a;++o)e[o]=isNaN(r[o]=+t(n[o],o,n))?0:+i(n[o],o,n)}}return"function"!=typeof t&&(t=Qo(null==t?0:+t)),o.initialize=function(t){n=t,a()},o.strength=function(t){return arguments.length?(i="function"==typeof t?t:Qo(+t),a(),o):i},o.y=function(n){return arguments.length?(t="function"==typeof n?n:Qo(+n),a(),o):t},o},t.formatDefaultLocale=Sa,t.formatLocale=Na,t.formatSpecifier=ba,t.precisionFixed=Ea,t.precisionPrefix=ka,t.precisionRound=Ca,t.geoArea=function(t){return yu.reset(),su(t,_u),2*yu},t.geoBounds=function(t){var n,e,r,i,o,a,u;if(Ru=zu=-(Cu=Pu=1/0),Ou=[],su(t,rf),e=Ou.length){for(Ou.sort(df),n=1,o=[r=Ou[0]];n<e;++n)pf(r,(i=Ou[n])[0])||pf(r,i[1])?(hf(r[0],i[1])>hf(r[0],r[1])&&(r[1]=i[1]),hf(i[0],r[1])>hf(r[0],r[1])&&(r[0]=i[0])):o.push(r=i);for(a=-1/0,n=0,r=o[e=o.length-1];n<=e;r=i,++n)i=o[n],(u=hf(r[1],i[0]))>a&&(a=u,Cu=i[0],zu=r[1])}return Ou=Yu=null,Cu===1/0||Pu===1/0?[[NaN,NaN],[NaN,NaN]]:[[Cu,Pu],[zu,Ru]]},t.geoCentroid=function(t){Bu=Fu=Iu=Hu=ju=Xu=Gu=Vu=$u=Wu=Zu=0,su(t,vf);var n=$u,e=Wu,r=Zu,i=n*n+e*e+r*r;return i<Ua&&(n=Xu,e=Gu,r=Vu,Fu<Da&&(n=Iu,e=Hu,r=ju),(i=n*n+e*e+r*r)<Ua)?[NaN,NaN]:[Xa(e,n)*Fa,eu(r/Ka(i))*Fa]},t.geoCircle=function(){var t,n,e=Nf([0,0]),r=Nf(90),i=Nf(6),o={point:function(e,r){t.push(e=n(e,r)),e[0]*=Fa,e[1]*=Fa}};function a(){var a=e.apply(this,arguments),u=r.apply(this,arguments)*Ia,f=i.apply(this,arguments)*Ia;return t=[],n=kf(-a[0]*Ia,-a[1]*Ia,0).invert,Lf(o,u,f,1),a={type:"Polygon",coordinates:[t]},t=n=null,a}return a.center=function(t){return arguments.length?(e="function"==typeof t?t:Nf([+t[0],+t[1]]),a):e},a.radius=function(t){return arguments.length?(r="function"==typeof t?t:Nf(+t),a):r},a.precision=function(t){return arguments.length?(i="function"==typeof t?t:Nf(+t),a):i},a},t.geoClipAntimeridian=Gf,t.geoClipCircle=Vf,t.geoClipExtent=function(){var t,n,e,r=0,i=0,o=960,a=500;return e={stream:function(e){return t&&n===e?t:t=Zf(r,i,o,a)(n=e)},extent:function(u){return arguments.length?(r=+u[0][0],i=+u[0][1],o=+u[1][0],a=+u[1][1],t=n=null,e):[[r,i],[o,a]]}}},t.geoClipRectangle=Zf,t.geoContains=function(t,n){return(t&&cc.hasOwnProperty(t.type)?cc[t.type]:lc)(t,n)},t.geoDistance=fc,t.geoGraticule=bc,t.geoGraticule10=function(){return bc()()},t.geoInterpolate=function(t,n){var e=t[0]*Ia,r=t[1]*Ia,i=n[0]*Ia,o=n[1]*Ia,a=Ga(r),u=Qa(r),f=Ga(o),c=Qa(o),s=a*Ga(e),l=a*Qa(e),h=f*Ga(i),d=f*Qa(i),p=2*eu(Ka(ru(o-r)+a*f*ru(i-e))),v=Qa(p),g=p?function(t){var n=Qa(t*=p)/v,e=Qa(p-t)/v,r=e*s+n*h,i=e*l+n*d,o=e*u+n*c;return[Xa(i,r)*Fa,Xa(o,Ka(r*r+i*i))*Fa]}:function(){return[e*Fa,r*Fa]};return g.distance=p,g},t.geoLength=oc,t.geoPath=function(t,n){var e,r,i=4.5;function o(t){return t&&("function"==typeof i&&r.pointRadius(+i.apply(this,arguments)),su(t,e(r))),r.result()}return o.area=function(t){return su(t,e(Sc)),Sc.result()},o.measure=function(t){return su(t,e(ds)),ds.result()},o.bounds=function(t){return su(t,e(Uc)),Uc.result()},o.centroid=function(t){return su(t,e(Zc)),Zc.result()},o.projection=function(n){return arguments.length?(e=null==n?(t=null,mc):(t=n).stream,o):t},o.context=function(t){return arguments.length?(r=null==t?(n=null,new gs):new as(n=t),"function"!=typeof i&&r.pointRadius(i),o):n},o.pointRadius=function(t){return arguments.length?(i="function"==typeof t?t:(r.pointRadius(+t),+t),o):i},o.projection(t).context(n)},t.geoAlbers=Ds,t.geoAlbersUsa=function(){var t,n,e,r,i,o,a=Ds(),u=Ls().rotate([154,0]).center([-2,58.5]).parallels([55,65]),f=Ls().rotate([157,0]).center([-3,19.9]).parallels([8,18]),c={point:function(t,n){o=[t,n]}};function s(t){var n=t[0],a=t[1];return o=null,e.point(n,a),o||(r.point(n,a),o)||(i.point(n,a),o)}function l(){return t=n=null,s}return s.invert=function(t){var n=a.scale(),e=a.translate(),r=(t[0]-e[0])/n,i=(t[1]-e[1])/n;return(i>=.12&&i<.234&&r>=-.425&&r<-.214?u:i>=.166&&i<.234&&r>=-.214&&r<-.115?f:a).invert(t)},s.stream=function(e){return t&&n===e?t:(r=[a.stream(n=e),u.stream(e),f.stream(e)],i=r.length,t={point:function(t,n){for(var e=-1;++e<i;)r[e].point(t,n)},sphere:function(){for(var t=-1;++t<i;)r[t].sphere()},lineStart:function(){for(var t=-1;++t<i;)r[t].lineStart()},lineEnd:function(){for(var t=-1;++t<i;)r[t].lineEnd()},polygonStart:function(){for(var t=-1;++t<i;)r[t].polygonStart()},polygonEnd:function(){for(var t=-1;++t<i;)r[t].polygonEnd()}});var r,i},s.precision=function(t){return arguments.length?(a.precision(t),u.precision(t),f.precision(t),l()):a.precision()},s.scale=function(t){return arguments.length?(a.scale(t),u.scale(.35*t),f.scale(t),s.translate(a.translate())):a.scale()},s.translate=function(t){if(!arguments.length)return a.translate();var n=a.scale(),o=+t[0],s=+t[1];return e=a.translate(t).clipExtent([[o-.455*n,s-.238*n],[o+.455*n,s+.238*n]]).stream(c),r=u.translate([o-.307*n,s+.201*n]).clipExtent([[o-.425*n+Da,s+.12*n+Da],[o-.214*n-Da,s+.234*n-Da]]).stream(c),i=f.translate([o-.205*n,s+.212*n]).clipExtent([[o-.214*n+Da,s+.166*n+Da],[o-.115*n-Da,s+.234*n-Da]]).stream(c),l()},s.fitExtent=function(t,n){return xs(s,t,n)},s.fitSize=function(t,n){return ws(s,t,n)},s.fitWidth=function(t,n){return Ms(s,t,n)},s.fitHeight=function(t,n){return As(s,t,n)},s.scale(1070)},t.geoAzimuthalEqualArea=function(){return Cs(Os).scale(124.75).clipAngle(179.999)},t.geoAzimuthalEqualAreaRaw=Os,t.geoAzimuthalEquidistant=function(){return Cs(Ys).scale(79.4188).clipAngle(179.999)},t.geoAzimuthalEquidistantRaw=Ys,t.geoConicConformal=function(){return zs(Hs).scale(109.5).parallels([30,30])},t.geoConicConformalRaw=Hs,t.geoConicEqualArea=Ls,t.geoConicEqualAreaRaw=Rs,t.geoConicEquidistant=function(){return zs(Xs).scale(131.154).center([0,13.9389])},t.geoConicEquidistantRaw=Xs,t.geoEqualEarth=function(){return Cs(Qs).scale(177.158)},t.geoEqualEarthRaw=Qs,t.geoEquirectangular=function(){return Cs(js).scale(152.63)},t.geoEquirectangularRaw=js,t.geoGnomonic=function(){return Cs(Js).scale(144.049).clipAngle(60)},t.geoGnomonicRaw=Js,t.geoIdentity=function(){var t,n,e,r,i,o,a=1,u=0,f=0,c=1,s=1,l=mc,h=null,d=mc;function p(){return r=i=null,o}return o={stream:function(t){return r&&i===t?r:r=l(d(i=t))},postclip:function(r){return arguments.length?(d=r,h=t=n=e=null,p()):d},clipExtent:function(r){return arguments.length?(d=null==r?(h=t=n=e=null,mc):Zf(h=+r[0][0],t=+r[0][1],n=+r[1][0],e=+r[1][1]),p()):null==h?null:[[h,t],[n,e]]},scale:function(t){return arguments.length?(l=Ks((a=+t)*c,a*s,u,f),p()):a},translate:function(t){return arguments.length?(l=Ks(a*c,a*s,u=+t[0],f=+t[1]),p()):[u,f]},reflectX:function(t){return arguments.length?(l=Ks(a*(c=t?-1:1),a*s,u,f),p()):c<0},reflectY:function(t){return arguments.length?(l=Ks(a*c,a*(s=t?-1:1),u,f),p()):s<0},fitExtent:function(t,n){return xs(o,t,n)},fitSize:function(t,n){return ws(o,t,n)},fitWidth:function(t,n){return Ms(o,t,n)},fitHeight:function(t,n){return As(o,t,n)}}},t.geoProjection=Cs,t.geoProjectionMutator=Ps,t.geoMercator=function(){return Fs(Bs).scale(961/Ba)},t.geoMercatorRaw=Bs,t.geoNaturalEarth1=function(){return Cs(tl).scale(175.295)},t.geoNaturalEarth1Raw=tl,t.geoOrthographic=function(){return Cs(nl).scale(249.5).clipAngle(90+Da)},t.geoOrthographicRaw=nl,t.geoStereographic=function(){return Cs(el).scale(250).clipAngle(142)},t.geoStereographicRaw=el,t.geoTransverseMercator=function(){var t=Fs(rl),n=t.center,e=t.rotate;return t.center=function(t){return arguments.length?n([-t[1],t[0]]):[(t=n())[1],-t[0]]},t.rotate=function(t){return arguments.length?e([t[0],t[1],t.length>2?t[2]+90:90]):[(t=e())[0],t[1],t[2]-90]},e([0,0,90]).scale(159.155)},t.geoTransverseMercatorRaw=rl,t.geoRotation=Rf,t.geoStream=su,t.geoTransform=function(t){return{stream:_s(t)}},t.cluster=function(){var t=il,n=1,e=1,r=!1;function i(i){var o,a=0;i.eachAfter(function(n){var e=n.children;e?(n.x=function(t){return t.reduce(ol,0)/t.length}(e),n.y=function(t){return 1+t.reduce(al,0)}(e)):(n.x=o?a+=t(n,o):0,n.y=0,o=n)});var u=function(t){for(var n;n=t.children;)t=n[0];return t}(i),f=function(t){for(var n;n=t.children;)t=n[n.length-1];return t}(i),c=u.x-t(u,f)/2,s=f.x+t(f,u)/2;return i.eachAfter(r?function(t){t.x=(t.x-i.x)*n,t.y=(i.y-t.y)*e}:function(t){t.x=(t.x-c)/(s-c)*n,t.y=(1-(i.y?t.y/i.y:1))*e})}return i.separation=function(n){return arguments.length?(t=n,i):t},i.size=function(t){return arguments.length?(r=!1,n=+t[0],e=+t[1],i):r?null:[n,e]},i.nodeSize=function(t){return arguments.length?(r=!0,n=+t[0],e=+t[1],i):r?[n,e]:null},i},t.hierarchy=fl,t.pack=function(){var t=null,n=1,e=1,r=El;function i(i){return i.x=n/2,i.y=e/2,t?i.eachBefore(Pl(t)).eachAfter(zl(r,.5)).eachBefore(Rl(1)):i.eachBefore(Pl(Cl)).eachAfter(zl(El,1)).eachAfter(zl(r,i.r/Math.min(n,e))).eachBefore(Rl(Math.min(n,e)/(2*i.r))),i}return i.radius=function(n){return arguments.length?(t=null==(e=n)?null:Sl(e),i):t;var e},i.size=function(t){return arguments.length?(n=+t[0],e=+t[1],i):[n,e]},i.padding=function(t){return arguments.length?(r="function"==typeof t?t:kl(+t),i):r},i},t.packSiblings=function(t){return Nl(t),t},t.packEnclose=pl,t.partition=function(){var t=1,n=1,e=0,r=!1;function i(i){var o=i.height+1;return i.x0=i.y0=e,i.x1=t,i.y1=n/o,i.eachBefore(function(t,n){return function(r){r.children&&Dl(r,r.x0,t*(r.depth+1)/n,r.x1,t*(r.depth+2)/n);var i=r.x0,o=r.y0,a=r.x1-e,u=r.y1-e;a<i&&(i=a=(i+a)/2),u<o&&(o=u=(o+u)/2),r.x0=i,r.y0=o,r.x1=a,r.y1=u}}(n,o)),r&&i.eachBefore(Ll),i}return i.round=function(t){return arguments.length?(r=!!t,i):r},i.size=function(e){return arguments.length?(t=+e[0],n=+e[1],i):[t,n]},i.padding=function(t){return arguments.length?(e=+t,i):e},i},t.stratify=function(){var t=Yl,n=Bl;function e(e){var r,i,o,a,u,f,c,s=e.length,l=new Array(s),h={};for(i=0;i<s;++i)r=e[i],u=l[i]=new hl(r),null!=(f=t(r,i,e))&&(f+="")&&(h[c=Ul+(u.id=f)]=c in h?Ol:u);for(i=0;i<s;++i)if(u=l[i],null!=(f=n(e[i],i,e))&&(f+="")){if(!(a=h[Ul+f]))throw new Error("missing: "+f);if(a===Ol)throw new Error("ambiguous: "+f);a.children?a.children.push(u):a.children=[u],u.parent=a}else{if(o)throw new Error("multiple roots");o=u}if(!o)throw new Error("no root");if(o.parent=ql,o.eachBefore(function(t){t.depth=t.parent.depth+1,--s}).eachBefore(ll),o.parent=null,s>0)throw new Error("cycle");return o}return e.id=function(n){return arguments.length?(t=Sl(n),e):t},e.parentId=function(t){return arguments.length?(n=Sl(t),e):n},e},t.tree=function(){var t=Fl,n=1,e=1,r=null;function i(i){var f=function(t){for(var n,e,r,i,o,a=new Gl(t,0),u=[a];n=u.pop();)if(r=n._.children)for(n.children=new Array(o=r.length),i=o-1;i>=0;--i)u.push(e=n.children[i]=new Gl(r[i],i)),e.parent=n;return(a.parent=new Gl(null,0)).children=[a],a}(i);if(f.eachAfter(o),f.parent.m=-f.z,f.eachBefore(a),r)i.eachBefore(u);else{var c=i,s=i,l=i;i.eachBefore(function(t){t.x<c.x&&(c=t),t.x>s.x&&(s=t),t.depth>l.depth&&(l=t)});var h=c===s?1:t(c,s)/2,d=h-c.x,p=n/(s.x+h+d),v=e/(l.depth||1);i.eachBefore(function(t){t.x=(t.x+d)*p,t.y=t.depth*v})}return i}function o(n){var e=n.children,r=n.parent.children,i=n.i?r[n.i-1]:null;if(e){!function(t){for(var n,e=0,r=0,i=t.children,o=i.length;--o>=0;)(n=i[o]).z+=e,n.m+=e,e+=n.s+(r+=n.c)}(n);var o=(e[0].z+e[e.length-1].z)/2;i?(n.z=i.z+t(n._,i._),n.m=n.z-o):n.z=o}else i&&(n.z=i.z+t(n._,i._));n.parent.A=function(n,e,r){if(e){for(var i,o=n,a=n,u=e,f=o.parent.children[0],c=o.m,s=a.m,l=u.m,h=f.m;u=Hl(u),o=Il(o),u&&o;)f=Il(f),(a=Hl(a)).a=n,(i=u.z+l-o.z-c+t(u._,o._))>0&&(jl(Xl(u,n,r),n,i),c+=i,s+=i),l+=u.m,c+=o.m,h+=f.m,s+=a.m;u&&!Hl(a)&&(a.t=u,a.m+=l-s),o&&!Il(f)&&(f.t=o,f.m+=c-h,r=n)}return r}(n,i,n.parent.A||r[0])}function a(t){t._.x=t.z+t.parent.m,t.m+=t.parent.m}function u(t){t.x*=n,t.y=t.depth*e}return i.separation=function(n){return arguments.length?(t=n,i):t},i.size=function(t){return arguments.length?(r=!1,n=+t[0],e=+t[1],i):r?null:[n,e]},i.nodeSize=function(t){return arguments.length?(r=!0,n=+t[0],e=+t[1],i):r?[n,e]:null},i},t.treemap=function(){var t=Zl,n=!1,e=1,r=1,i=[0],o=El,a=El,u=El,f=El,c=El;function s(t){return t.x0=t.y0=0,t.x1=e,t.y1=r,t.eachBefore(l),i=[0],n&&t.eachBefore(Ll),t}function l(n){var e=i[n.depth],r=n.x0+e,s=n.y0+e,l=n.x1-e,h=n.y1-e;l<r&&(r=l=(r+l)/2),h<s&&(s=h=(s+h)/2),n.x0=r,n.y0=s,n.x1=l,n.y1=h,n.children&&(e=i[n.depth+1]=o(n)/2,r+=c(n)-e,s+=a(n)-e,(l-=u(n)-e)<r&&(r=l=(r+l)/2),(h-=f(n)-e)<s&&(s=h=(s+h)/2),t(n,r,s,l,h))}return s.round=function(t){return arguments.length?(n=!!t,s):n},s.size=function(t){return arguments.length?(e=+t[0],r=+t[1],s):[e,r]},s.tile=function(n){return arguments.length?(t=Sl(n),s):t},s.padding=function(t){return arguments.length?s.paddingInner(t).paddingOuter(t):s.paddingInner()},s.paddingInner=function(t){return arguments.length?(o="function"==typeof t?t:kl(+t),s):o},s.paddingOuter=function(t){return arguments.length?s.paddingTop(t).paddingRight(t).paddingBottom(t).paddingLeft(t):s.paddingTop()},s.paddingTop=function(t){return arguments.length?(a="function"==typeof t?t:kl(+t),s):a},s.paddingRight=function(t){return arguments.length?(u="function"==typeof t?t:kl(+t),s):u},s.paddingBottom=function(t){return arguments.length?(f="function"==typeof t?t:kl(+t),s):f},s.paddingLeft=function(t){return arguments.length?(c="function"==typeof t?t:kl(+t),s):c},s},t.treemapBinary=function(t,n,e,r,i){var o,a,u=t.children,f=u.length,c=new Array(f+1);for(c[0]=a=o=0;o<f;++o)c[o+1]=a+=u[o].value;!function t(n,e,r,i,o,a,f){if(n>=e-1){var s=u[n];return s.x0=i,s.y0=o,s.x1=a,void(s.y1=f)}for(var l=c[n],h=r/2+l,d=n+1,p=e-1;d<p;){var v=d+p>>>1;c[v]<h?d=v+1:p=v}h-c[d-1]<c[d]-h&&n+1<d&&--d;var g=c[d]-l,y=r-g;if(a-i>f-o){var _=(i*y+a*g)/r;t(n,d,g,i,o,_,f),t(d,e,y,_,o,a,f)}else{var b=(o*y+f*g)/r;t(n,d,g,i,o,a,b),t(d,e,y,i,b,a,f)}}(0,f,t.value,n,e,r,i)},t.treemapDice=Dl,t.treemapSlice=Vl,t.treemapSliceDice=function(t,n,e,r,i){(1&t.depth?Vl:Dl)(t,n,e,r,i)},t.treemapSquarify=Zl,t.treemapResquarify=Ql,t.interpolate=me,t.interpolateArray=de,t.interpolateBasis=ee,t.interpolateBasisClosed=re,t.interpolateDate=pe,t.interpolateDiscrete=function(t){var n=t.length;return function(e){return t[Math.max(0,Math.min(n-1,Math.floor(e*n)))]}},t.interpolateHue=function(t,n){var e=ae(+t,+n);return function(t){var n=e(t);return n-360*Math.floor(n/360)}},t.interpolateNumber=ve,t.interpolateObject=ge,t.interpolateRound=xe,t.interpolateString=be,t.interpolateTransformCss=Ce,t.interpolateTransformSvg=Pe,t.interpolateZoom=qe,t.interpolateRgb=ce,t.interpolateRgbBasis=le,t.interpolateRgbBasisClosed=he,t.interpolateHsl=Ye,t.interpolateHslLong=Be,t.interpolateLab=function(t,n){var e=fe((t=Un(t)).l,(n=Un(n)).l),r=fe(t.a,n.a),i=fe(t.b,n.b),o=fe(t.opacity,n.opacity);return function(n){return t.l=e(n),t.a=r(n),t.b=i(n),t.opacity=o(n),t+""}},t.interpolateHcl=Ie,t.interpolateHclLong=He,t.interpolateCubehelix=Xe,t.interpolateCubehelixLong=Ge,t.piecewise=function(t,n){for(var e=0,r=n.length-1,i=n[0],o=new Array(r<0?0:r);e<r;)o[e]=t(i,i=n[++e]);return function(t){var n=Math.max(0,Math.min(r-1,Math.floor(t*=r)));return o[n](t-n)}},t.quantize=function(t,n){for(var e=new Array(n),r=0;r<n;++r)e[r]=t(r/(n-1));return e},t.path=Gi,t.polygonArea=function(t){for(var n,e=-1,r=t.length,i=t[r-1],o=0;++e<r;)n=i,i=t[e],o+=n[1]*i[0]-n[0]*i[1];return o/2},t.polygonCentroid=function(t){for(var n,e,r=-1,i=t.length,o=0,a=0,u=t[i-1],f=0;++r<i;)n=u,u=t[r],f+=e=n[0]*u[1]-u[0]*n[1],o+=(n[0]+u[0])*e,a+=(n[1]+u[1])*e;return[o/(f*=3),a/f]},t.polygonHull=function(t){if((e=t.length)<3)return null;var n,e,r=new Array(e),i=new Array(e);for(n=0;n<e;++n)r[n]=[+t[n][0],+t[n][1],n];for(r.sort(Jl),n=0;n<e;++n)i[n]=[r[n][0],-r[n][1]];var o=Kl(r),a=Kl(i),u=a[0]===o[0],f=a[a.length-1]===o[o.length-1],c=[];for(n=o.length-1;n>=0;--n)c.push(t[r[o[n]][2]]);for(n=+u;n<a.length-f;++n)c.push(t[r[a[n]][2]]);return c},t.polygonContains=function(t,n){for(var e,r,i=t.length,o=t[i-1],a=n[0],u=n[1],f=o[0],c=o[1],s=!1,l=0;l<i;++l)e=(o=t[l])[0],(r=o[1])>u!=c>u&&a<(f-e)*(u-r)/(c-r)+e&&(s=!s),f=e,c=r;return s},t.polygonLength=function(t){for(var n,e,r=-1,i=t.length,o=t[i-1],a=o[0],u=o[1],f=0;++r<i;)n=a,e=u,n-=a=(o=t[r])[0],e-=u=o[1],f+=Math.sqrt(n*n+e*e);return f},t.quadtree=ra,t.randomUniform=nh,t.randomNormal=eh,t.randomLogNormal=rh,t.randomBates=oh,t.randomIrwinHall=ih,t.randomExponential=ah,t.scaleBand=hh,t.scalePoint=function(){return function t(n){var e=n.copy;return n.padding=n.paddingOuter,delete n.paddingInner,delete n.paddingOuter,n.copy=function(){return t(e())},n}(hh().paddingInner(1))},t.scaleIdentity=function t(){var n=[0,1];function e(t){return+t}return e.invert=e,e.domain=e.range=function(t){return arguments.length?(n=fh.call(t,ph),e):n.slice()},e.copy=function(){return t().domain(n)},xh(e)},t.scaleLinear=function t(){var n=mh(gh,ve);return n.copy=function(){return bh(n,t())},xh(n)},t.scaleLog=function n(){var e=mh(Mh,Ah).domain([1,10]),r=e.domain,i=10,o=Sh(10),a=Nh(10);function u(){return o=Sh(i),a=Nh(i),r()[0]<0&&(o=Eh(o),a=Eh(a)),e}return e.base=function(t){return arguments.length?(i=+t,u()):i},e.domain=function(t){return arguments.length?(r(t),u()):r()},e.ticks=function(t){var n,e=r(),u=e[0],f=e[e.length-1];(n=f<u)&&(h=u,u=f,f=h);var c,s,l,h=o(u),d=o(f),p=null==t?10:+t,v=[];if(!(i%1)&&d-h<p){if(h=Math.round(h)-1,d=Math.round(d)+1,u>0){for(;h<d;++h)for(s=1,c=a(h);s<i;++s)if(!((l=c*s)<u)){if(l>f)break;v.push(l)}}else for(;h<d;++h)for(s=i-1,c=a(h);s>=1;--s)if(!((l=c*s)<u)){if(l>f)break;v.push(l)}}else v=m(h,d,Math.min(d-h,p)).map(a);return n?v.reverse():v},e.tickFormat=function(n,r){if(null==r&&(r=10===i?".0e":","),"function"!=typeof r&&(r=t.format(r)),n===1/0)return r;null==n&&(n=10);var u=Math.max(1,i*n/e.ticks().length);return function(t){var n=t/a(Math.round(o(t)));return n*i<i-.5&&(n*=i),n<=u?r(t):""}},e.nice=function(){return r(wh(r(),{floor:function(t){return a(Math.floor(o(t)))},ceil:function(t){return a(Math.ceil(o(t)))}}))},e.copy=function(){return bh(e,n().base(i))},e},t.scaleOrdinal=lh,t.scaleImplicit=sh,t.scalePow=Ch,t.scaleSqrt=function(){return Ch().exponent(.5)},t.scaleQuantile=function t(){var e=[],r=[],o=[];function a(){var t=0,n=Math.max(1,r.length);for(o=new Array(n-1);++t<n;)o[t-1]=A(e,t/n);return u}function u(t){if(!isNaN(t=+t))return r[i(o,t)]}return u.invertExtent=function(t){var n=r.indexOf(t);return n<0?[NaN,NaN]:[n>0?o[n-1]:e[0],n<o.length?o[n]:e[e.length-1]]},u.domain=function(t){if(!arguments.length)return e.slice();e=[];for(var r,i=0,o=t.length;i<o;++i)null==(r=t[i])||isNaN(r=+r)||e.push(r);return e.sort(n),a()},u.range=function(t){return arguments.length?(r=ch.call(t),a()):r.slice()},u.quantiles=function(){return o.slice()},u.copy=function(){return t().domain(e).range(r)},u},t.scaleQuantize=function t(){var n=0,e=1,r=1,o=[.5],a=[0,1];function u(t){if(t<=t)return a[i(o,t,0,r)]}function f(){var t=-1;for(o=new Array(r);++t<r;)o[t]=((t+1)*e-(t-r)*n)/(r+1);return u}return u.domain=function(t){return arguments.length?(n=+t[0],e=+t[1],f()):[n,e]},u.range=function(t){return arguments.length?(r=(a=ch.call(t)).length-1,f()):a.slice()},u.invertExtent=function(t){var i=a.indexOf(t);return i<0?[NaN,NaN]:i<1?[n,o[0]]:i>=r?[o[r-1],e]:[o[i-1],o[i]]},u.copy=function(){return t().domain([n,e]).range(a)},xh(u)},t.scaleThreshold=function t(){var n=[.5],e=[0,1],r=1;function o(t){if(t<=t)return e[i(n,t,0,r)]}return o.domain=function(t){return arguments.length?(n=ch.call(t),r=Math.min(n.length,e.length-1),o):n.slice()},o.range=function(t){return arguments.length?(e=ch.call(t),r=Math.min(n.length,e.length-1),o):e.slice()},o.invertExtent=function(t){var r=e.indexOf(t);return[n[r-1],n[r]]},o.copy=function(){return t().domain(n).range(e)},o},t.scaleTime=function(){return cv(cd,ud,Vh,jh,Ih,Bh,Oh,Lh,t.timeFormat).domain([new Date(2e3,0,1),new Date(2e3,0,2)])},t.scaleUtc=function(){return cv(Ld,zd,_d,vd,dd,ld,Oh,Lh,t.utcFormat).domain([Date.UTC(2e3,0,1),Date.UTC(2e3,0,2)])},t.scaleSequential=function t(n){var e=0,r=1,i=1,o=!1;function a(t){var r=(t-e)*i;return n(o?Math.max(0,Math.min(1,r)):r)}return a.domain=function(t){return arguments.length?(e=+t[0],r=+t[1],i=e===r?0:1/(r-e),a):[e,r]},a.clamp=function(t){return arguments.length?(o=!!t,a):o},a.interpolator=function(t){return arguments.length?(n=t,a):n},a.copy=function(){return t(n).domain([e,r]).clamp(o)},xh(a)},t.scaleDiverging=function t(n){var e=0,r=.5,i=1,o=1,a=1,u=!1;function f(t){var e=.5+((t=+t)-r)*(t<r?o:a);return n(u?Math.max(0,Math.min(1,e)):e)}return f.domain=function(t){return arguments.length?(e=+t[0],r=+t[1],i=+t[2],o=e===r?0:.5/(r-e),a=r===i?0:.5/(i-r),f):[e,r,i]},f.clamp=function(t){return arguments.length?(u=!!t,f):u},f.interpolator=function(t){return arguments.length?(n=t,f):n},f.copy=function(){return t(n).domain([e,r,i]).clamp(u)},xh(f)},t.schemeCategory10=lv,t.schemeAccent=hv,t.schemeDark2=dv,t.schemePaired=pv,t.schemePastel1=vv,t.schemePastel2=gv,t.schemeSet1=yv,t.schemeSet2=_v,t.schemeSet3=bv,t.interpolateBrBG=wv,t.schemeBrBG=xv,t.interpolatePRGn=Av,t.schemePRGn=Mv,t.interpolatePiYG=Nv,t.schemePiYG=Tv,t.interpolatePuOr=Ev,t.schemePuOr=Sv,t.interpolateRdBu=Cv,t.schemeRdBu=kv,t.interpolateRdGy=zv,t.schemeRdGy=Pv,t.interpolateRdYlBu=Lv,t.schemeRdYlBu=Rv,t.interpolateRdYlGn=Uv,t.schemeRdYlGn=Dv,t.interpolateSpectral=Ov,t.schemeSpectral=qv,t.interpolateBuGn=Bv,t.schemeBuGn=Yv,t.interpolateBuPu=Iv,t.schemeBuPu=Fv,t.interpolateGnBu=jv,t.schemeGnBu=Hv,t.interpolateOrRd=Gv,t.schemeOrRd=Xv,t.interpolatePuBuGn=$v,t.schemePuBuGn=Vv,t.interpolatePuBu=Zv,t.schemePuBu=Wv,t.interpolatePuRd=Jv,t.schemePuRd=Qv,t.interpolateRdPu=tg,t.schemeRdPu=Kv,t.interpolateYlGnBu=eg,t.schemeYlGnBu=ng,t.interpolateYlGn=ig,t.schemeYlGn=rg,t.interpolateYlOrBr=ag,t.schemeYlOrBr=og,t.interpolateYlOrRd=fg,t.schemeYlOrRd=ug,t.interpolateBlues=sg,t.schemeBlues=cg,t.interpolateGreens=hg,t.schemeGreens=lg,t.interpolateGreys=pg,t.schemeGreys=dg,t.interpolatePurples=gg,t.schemePurples=vg,t.interpolateReds=_g,t.schemeReds=yg,t.interpolateOranges=mg,t.schemeOranges=bg,t.interpolateCubehelixDefault=xg,t.interpolateRainbow=function(t){(t<0||t>1)&&(t-=Math.floor(t));var n=Math.abs(t-.5);return Ag.h=360*t-100,Ag.s=1.5-1.5*n,Ag.l=.8-.9*n,Ag+""},t.interpolateWarm=wg,t.interpolateCool=Mg,t.interpolateSinebow=function(t){var n;return t=(.5-t)*Math.PI,Tg.r=255*(n=Math.sin(t))*n,Tg.g=255*(n=Math.sin(t+Ng))*n,Tg.b=255*(n=Math.sin(t+Sg))*n,Tg+""},t.interpolateViridis=kg,t.interpolateMagma=Cg,t.interpolateInferno=Pg,t.interpolatePlasma=zg,t.create=function(t){return Dt(W(t).call(document.documentElement))},t.creator=W,t.local=qt,t.matcher=rt,t.mouse=Ft,t.namespace=$,t.namespaces=V,t.clientPoint=Bt,t.select=Dt,t.selectAll=function(t){return"string"==typeof t?new Rt([document.querySelectorAll(t)],[document.documentElement]):new Rt([null==t?[]:t],zt)},t.selection=Lt,t.selector=Q,t.selectorAll=K,t.style=lt,t.touch=It,t.touches=function(t,n){null==n&&(n=Yt().touches);for(var e=0,r=n?n.length:0,i=new Array(r);e<r;++e)i[e]=Bt(t,n[e]);return i},t.window=st,t.customEvent=Ct,t.arc=function(){var t=Gg,n=Vg,e=Rg(0),r=null,i=$g,o=Wg,a=Zg,u=null;function f(){var f,c,s,l=+t.apply(this,arguments),h=+n.apply(this,arguments),d=i.apply(this,arguments)-Hg,p=o.apply(this,arguments)-Hg,v=Lg(p-d),g=p>d;if(u||(u=f=Gi()),h<l&&(c=h,h=l,l=c),h>Fg)if(v>jg-Fg)u.moveTo(h*Ug(d),h*Yg(d)),u.arc(0,0,h,d,p,!g),l>Fg&&(u.moveTo(l*Ug(p),l*Yg(p)),u.arc(0,0,l,p,d,g));else{var y,_,b=d,m=p,x=d,w=p,M=v,A=v,T=a.apply(this,arguments)/2,N=T>Fg&&(r?+r.apply(this,arguments):Bg(l*l+h*h)),S=Og(Lg(h-l)/2,+e.apply(this,arguments)),E=S,k=S;if(N>Fg){var C=Xg(N/l*Yg(T)),P=Xg(N/h*Yg(T));(M-=2*C)>Fg?(x+=C*=g?1:-1,w-=C):(M=0,x=w=(d+p)/2),(A-=2*P)>Fg?(b+=P*=g?1:-1,m-=P):(A=0,b=m=(d+p)/2)}var z=h*Ug(b),R=h*Yg(b),L=l*Ug(w),D=l*Yg(w);if(S>Fg){var U=h*Ug(m),q=h*Yg(m),O=l*Ug(x),Y=l*Yg(x);if(v<Ig){var B=M>Fg?function(t,n,e,r,i,o,a,u){var f=e-t,c=r-n,s=a-i,l=u-o,h=(s*(n-o)-l*(t-i))/(l*f-s*c);return[t+h*f,n+h*c]}(z,R,O,Y,U,q,L,D):[L,D],F=z-B[0],I=R-B[1],H=U-B[0],j=q-B[1],X=1/Yg(((s=(F*H+I*j)/(Bg(F*F+I*I)*Bg(H*H+j*j)))>1?0:s<-1?Ig:Math.acos(s))/2),G=Bg(B[0]*B[0]+B[1]*B[1]);E=Og(S,(l-G)/(X-1)),k=Og(S,(h-G)/(X+1))}}A>Fg?k>Fg?(y=Qg(O,Y,z,R,h,k,g),_=Qg(U,q,L,D,h,k,g),u.moveTo(y.cx+y.x01,y.cy+y.y01),k<S?u.arc(y.cx,y.cy,k,Dg(y.y01,y.x01),Dg(_.y01,_.x01),!g):(u.arc(y.cx,y.cy,k,Dg(y.y01,y.x01),Dg(y.y11,y.x11),!g),u.arc(0,0,h,Dg(y.cy+y.y11,y.cx+y.x11),Dg(_.cy+_.y11,_.cx+_.x11),!g),u.arc(_.cx,_.cy,k,Dg(_.y11,_.x11),Dg(_.y01,_.x01),!g))):(u.moveTo(z,R),u.arc(0,0,h,b,m,!g)):u.moveTo(z,R),l>Fg&&M>Fg?E>Fg?(y=Qg(L,D,U,q,l,-E,g),_=Qg(z,R,O,Y,l,-E,g),u.lineTo(y.cx+y.x01,y.cy+y.y01),E<S?u.arc(y.cx,y.cy,E,Dg(y.y01,y.x01),Dg(_.y01,_.x01),!g):(u.arc(y.cx,y.cy,E,Dg(y.y01,y.x01),Dg(y.y11,y.x11),!g),u.arc(0,0,l,Dg(y.cy+y.y11,y.cx+y.x11),Dg(_.cy+_.y11,_.cx+_.x11),g),u.arc(_.cx,_.cy,E,Dg(_.y11,_.x11),Dg(_.y01,_.x01),!g))):u.arc(0,0,l,w,x,g):u.lineTo(L,D)}else u.moveTo(0,0);if(u.closePath(),f)return u=null,f+""||null}return f.centroid=function(){var e=(+t.apply(this,arguments)+ +n.apply(this,arguments))/2,r=(+i.apply(this,arguments)+ +o.apply(this,arguments))/2-Ig/2;return[Ug(r)*e,Yg(r)*e]},f.innerRadius=function(n){return arguments.length?(t="function"==typeof n?n:Rg(+n),f):t},f.outerRadius=function(t){return arguments.length?(n="function"==typeof t?t:Rg(+t),f):n},f.cornerRadius=function(t){return arguments.length?(e="function"==typeof t?t:Rg(+t),f):e},f.padRadius=function(t){return arguments.length?(r=null==t?null:"function"==typeof t?t:Rg(+t),f):r},f.startAngle=function(t){return arguments.length?(i="function"==typeof t?t:Rg(+t),f):i},f.endAngle=function(t){return arguments.length?(o="function"==typeof t?t:Rg(+t),f):o},f.padAngle=function(t){return arguments.length?(a="function"==typeof t?t:Rg(+t),f):a},f.context=function(t){return arguments.length?(u=null==t?null:t,f):u},f},t.area=ry,t.line=ey,t.pie=function(){var t=oy,n=iy,e=null,r=Rg(0),i=Rg(jg),o=Rg(0);function a(a){var u,f,c,s,l,h=a.length,d=0,p=new Array(h),v=new Array(h),g=+r.apply(this,arguments),y=Math.min(jg,Math.max(-jg,i.apply(this,arguments)-g)),_=Math.min(Math.abs(y)/h,o.apply(this,arguments)),b=_*(y<0?-1:1);for(u=0;u<h;++u)(l=v[p[u]=u]=+t(a[u],u,a))>0&&(d+=l);for(null!=n?p.sort(function(t,e){return n(v[t],v[e])}):null!=e&&p.sort(function(t,n){return e(a[t],a[n])}),u=0,c=d?(y-h*b)/d:0;u<h;++u,g=s)f=p[u],s=g+((l=v[f])>0?l*c:0)+b,v[f]={data:a[f],index:u,value:l,startAngle:g,endAngle:s,padAngle:_};return v}return a.value=function(n){return arguments.length?(t="function"==typeof n?n:Rg(+n),a):t},a.sortValues=function(t){return arguments.length?(n=t,e=null,a):n},a.sort=function(t){return arguments.length?(e=t,n=null,a):e},a.startAngle=function(t){return arguments.length?(r="function"==typeof t?t:Rg(+t),a):r},a.endAngle=function(t){return arguments.length?(i="function"==typeof t?t:Rg(+t),a):i},a.padAngle=function(t){return arguments.length?(o="function"==typeof t?t:Rg(+t),a):o},a},t.areaRadial=ly,t.radialArea=ly,t.lineRadial=sy,t.radialLine=sy,t.pointRadial=hy,t.linkHorizontal=function(){return gy(yy)},t.linkVertical=function(){return gy(_y)},t.linkRadial=function(){var t=gy(by);return t.angle=t.x,delete t.x,t.radius=t.y,delete t.y,t},t.symbol=function(){var t=Rg(my),n=Rg(64),e=null;function r(){var r;if(e||(e=r=Gi()),t.apply(this,arguments).draw(e,+n.apply(this,arguments)),r)return e=null,r+""||null}return r.type=function(n){return arguments.length?(t="function"==typeof n?n:Rg(n),r):t},r.size=function(t){return arguments.length?(n="function"==typeof t?t:Rg(+t),r):n},r.context=function(t){return arguments.length?(e=null==t?null:t,r):e},r},t.symbols=Uy,t.symbolCircle=my,t.symbolCross=xy,t.symbolDiamond=Ay,t.symbolSquare=ky,t.symbolStar=Ey,t.symbolTriangle=Py,t.symbolWye=Dy,t.curveBasisClosed=function(t){return new By(t)},t.curveBasisOpen=function(t){return new Fy(t)},t.curveBasis=function(t){return new Yy(t)},t.curveBundle=Hy,t.curveCardinalClosed=$y,t.curveCardinalOpen=Zy,t.curveCardinal=Gy,t.curveCatmullRomClosed=n_,t.curveCatmullRomOpen=r_,t.curveCatmullRom=Ky,t.curveLinearClosed=function(t){return new i_(t)},t.curveLinear=Kg,t.curveMonotoneX=function(t){return new c_(t)},t.curveMonotoneY=function(t){return new s_(t)},t.curveNatural=function(t){return new h_(t)},t.curveStep=function(t){return new p_(t,.5)},t.curveStepAfter=function(t){return new p_(t,1)},t.curveStepBefore=function(t){return new p_(t,0)},t.stack=function(){var t=Rg([]),n=g_,e=v_,r=y_;function i(i){var o,a,u=t.apply(this,arguments),f=i.length,c=u.length,s=new Array(c);for(o=0;o<c;++o){for(var l,h=u[o],d=s[o]=new Array(f),p=0;p<f;++p)d[p]=l=[0,+r(i[p],h,p,i)],l.data=i[p];d.key=h}for(o=0,a=n(s);o<c;++o)s[a[o]].index=o;return e(s,a),s}return i.keys=function(n){return arguments.length?(t="function"==typeof n?n:Rg(dy.call(n)),i):t},i.value=function(t){return arguments.length?(r="function"==typeof t?t:Rg(+t),i):r},i.order=function(t){return arguments.length?(n=null==t?g_:"function"==typeof t?t:Rg(dy.call(t)),i):n},i.offset=function(t){return arguments.length?(e=null==t?v_:t,i):e},i},t.stackOffsetExpand=function(t,n){if((r=t.length)>0){for(var e,r,i,o=0,a=t[0].length;o<a;++o){for(i=e=0;e<r;++e)i+=t[e][o][1]||0;if(i)for(e=0;e<r;++e)t[e][o][1]/=i}v_(t,n)}},t.stackOffsetDiverging=function(t,n){if((u=t.length)>1)for(var e,r,i,o,a,u,f=0,c=t[n[0]].length;f<c;++f)for(o=a=0,e=0;e<u;++e)(i=(r=t[n[e]][f])[1]-r[0])>=0?(r[0]=o,r[1]=o+=i):i<0?(r[1]=a,r[0]=a+=i):r[0]=o},t.stackOffsetNone=v_,t.stackOffsetSilhouette=function(t,n){if((e=t.length)>0){for(var e,r=0,i=t[n[0]],o=i.length;r<o;++r){for(var a=0,u=0;a<e;++a)u+=t[a][r][1]||0;i[r][1]+=i[r][0]=-u/2}v_(t,n)}},t.stackOffsetWiggle=function(t,n){if((i=t.length)>0&&(r=(e=t[n[0]]).length)>0){for(var e,r,i,o=0,a=1;a<r;++a){for(var u=0,f=0,c=0;u<i;++u){for(var s=t[n[u]],l=s[a][1]||0,h=(l-(s[a-1][1]||0))/2,d=0;d<u;++d){var p=t[n[d]];h+=(p[a][1]||0)-(p[a-1][1]||0)}f+=l,c+=h*l}e[a-1][1]+=e[a-1][0]=o,f&&(o-=c/f)}e[a-1][1]+=e[a-1][0]=o,v_(t,n)}},t.stackOrderAscending=__,t.stackOrderDescending=function(t){return __(t).reverse()},t.stackOrderInsideOut=function(t){var n,e,r=t.length,i=t.map(b_),o=g_(t).sort(function(t,n){return i[n]-i[t]}),a=0,u=0,f=[],c=[];for(n=0;n<r;++n)e=o[n],a<u?(a+=i[e],f.push(e)):(u+=i[e],c.push(e));return c.reverse().concat(f)},t.stackOrderNone=g_,t.stackOrderReverse=function(t){return g_(t).reverse()},t.timeInterval=Rh,t.timeMillisecond=Lh,t.timeMilliseconds=Dh,t.utcMillisecond=Lh,t.utcMilliseconds=Dh,t.timeSecond=Oh,t.timeSeconds=Yh,t.utcSecond=Oh,t.utcSeconds=Yh,t.timeMinute=Bh,t.timeMinutes=Fh,t.timeHour=Ih,t.timeHours=Hh,t.timeDay=jh,t.timeDays=Xh,t.timeWeek=Vh,t.timeWeeks=td,t.timeSunday=Vh,t.timeSundays=td,t.timeMonday=$h,t.timeMondays=nd,t.timeTuesday=Wh,t.timeTuesdays=ed,t.timeWednesday=Zh,t.timeWednesdays=rd,t.timeThursday=Qh,t.timeThursdays=id,t.timeFriday=Jh,t.timeFridays=od,t.timeSaturday=Kh,t.timeSaturdays=ad,t.timeMonth=ud,t.timeMonths=fd,t.timeYear=cd,t.timeYears=sd,t.utcMinute=ld,t.utcMinutes=hd,t.utcHour=dd,t.utcHours=pd,t.utcDay=vd,t.utcDays=gd,t.utcWeek=_d,t.utcWeeks=Td,t.utcSunday=_d,t.utcSundays=Td,t.utcMonday=bd,t.utcMondays=Nd,t.utcTuesday=md,t.utcTuesdays=Sd,t.utcWednesday=xd,t.utcWednesdays=Ed,t.utcThursday=wd,t.utcThursdays=kd,t.utcFriday=Md,t.utcFridays=Cd,t.utcSaturday=Ad,t.utcSaturdays=Pd,t.utcMonth=zd,t.utcMonths=Rd,t.utcYear=Ld,t.utcYears=Dd,t.timeFormatDefaultLocale=Qp,t.timeFormatLocale=Yd,t.isoFormat=Jp,t.isoParse=Kp,t.now=ir,t.timer=ur,t.timerFlush=fr,t.timeout=hr,t.interval=function(t,n,e){var r=new ar,i=n;return null==n?(r.restart(t,n,e),r):(n=+n,e=null==e?ir():+e,r.restart(function o(a){a+=i,r.restart(o,i+=n,e),t(a)},n,e),r)},t.transition=zr,t.active=function(t,n){var e,r,i=t.__transition;if(i)for(r in n=null==n?null:n+"",i)if((e=i[r]).state>gr&&e.name===n)return new Pr([[t]],li,n,+r);return null},t.interrupt=Nr,t.voronoi=function(){var t=x_,n=w_,e=null;function r(r){return new eb(r.map(function(e,i){var o=[Math.round(t(e,i,r)/K_)*K_,Math.round(n(e,i,r)/K_)*K_];return o.index=i,o.data=e,o}),e)}return r.polygons=function(t){return r(t).polygons()},r.links=function(t){return r(t).links()},r.triangles=function(t){return r(t).triangles()},r.x=function(n){return arguments.length?(t="function"==typeof n?n:m_(+n),r):t},r.y=function(t){return arguments.length?(n="function"==typeof t?t:m_(+t),r):n},r.extent=function(t){return arguments.length?(e=null==t?null:[[+t[0][0],+t[0][1]],[+t[1][0],+t[1][1]]],r):e&&[[e[0][0],e[0][1]],[e[1][0],e[1][1]]]},r.size=function(t){return arguments.length?(e=null==t?null:[[0,0],[+t[0],+t[1]]],r):e&&[e[1][0]-e[0][0],e[1][1]-e[0][1]]},r},t.zoom=function(){var n,e,r=sb,i=lb,o=vb,a=db,u=pb,f=[0,1/0],c=[[-1/0,-1/0],[1/0,1/0]],s=250,l=qe,h=[],d=I("start","zoom","end"),p=500,v=150,g=0;function y(t){t.property("__zoom",hb).on("wheel.zoom",A).on("mousedown.zoom",T).on("dblclick.zoom",N).filter(u).on("touchstart.zoom",S).on("touchmove.zoom",E).on("touchend.zoom touchcancel.zoom",k).style("touch-action","none").style("-webkit-tap-highlight-color","rgba(0,0,0,0)")}function _(t,n){return(n=Math.max(f[0],Math.min(f[1],n)))===t.k?t:new ob(n,t.x,t.y)}function b(t,n,e){var r=n[0]-e[0]*t.k,i=n[1]-e[1]*t.k;return r===t.x&&i===t.y?t:new ob(t.k,r,i)}function m(t){return[(+t[0][0]+ +t[1][0])/2,(+t[0][1]+ +t[1][1])/2]}function x(t,n,e){t.on("start.zoom",function(){w(this,arguments).start()}).on("interrupt.zoom end.zoom",function(){w(this,arguments).end()}).tween("zoom",function(){var t=arguments,r=w(this,t),o=i.apply(this,t),a=e||m(o),u=Math.max(o[1][0]-o[0][0],o[1][1]-o[0][1]),f=this.__zoom,c="function"==typeof n?n.apply(this,t):n,s=l(f.invert(a).concat(u/f.k),c.invert(a).concat(u/c.k));return function(t){if(1===t)t=c;else{var n=s(t),e=u/n[2];t=new ob(e,a[0]-n[0]*e,a[1]-n[1]*e)}r.zoom(null,t)}})}function w(t,n){for(var e,r=0,i=h.length;r<i;++r)if((e=h[r]).that===t)return e;return new M(t,n)}function M(t,n){this.that=t,this.args=n,this.index=-1,this.active=0,this.extent=i.apply(t,n)}function A(){if(r.apply(this,arguments)){var t=w(this,arguments),n=this.__zoom,e=Math.max(f[0],Math.min(f[1],n.k*Math.pow(2,a.apply(this,arguments)))),i=Ft(this);if(t.wheel)t.mouse[0][0]===i[0]&&t.mouse[0][1]===i[1]||(t.mouse[1]=n.invert(t.mouse[0]=i)),clearTimeout(t.wheel);else{if(n.k===e)return;t.mouse=[i,n.invert(i)],Nr(this),t.start()}cb(),t.wheel=setTimeout(function(){t.wheel=null,t.end()},v),t.zoom("mouse",o(b(_(n,e),t.mouse[0],t.mouse[1]),t.extent,c))}}function T(){if(!e&&r.apply(this,arguments)){var n=w(this,arguments),i=Dt(t.event.view).on("mousemove.zoom",function(){if(cb(),!n.moved){var e=t.event.clientX-u,r=t.event.clientY-f;n.moved=e*e+r*r>g}n.zoom("mouse",o(b(n.that.__zoom,n.mouse[0]=Ft(n.that),n.mouse[1]),n.extent,c))},!0).on("mouseup.zoom",function(){i.on("mousemove.zoom mouseup.zoom",null),Gt(t.event.view,n.moved),cb(),n.end()},!0),a=Ft(this),u=t.event.clientX,f=t.event.clientY;Xt(t.event.view),fb(),n.mouse=[a,this.__zoom.invert(a)],Nr(this),n.start()}}function N(){if(r.apply(this,arguments)){var n=this.__zoom,e=Ft(this),a=n.invert(e),u=n.k*(t.event.shiftKey?.5:2),f=o(b(_(n,u),e,a),i.apply(this,arguments),c);cb(),s>0?Dt(this).transition().duration(s).call(x,f,e):Dt(this).call(y.transform,f)}}function S(){if(r.apply(this,arguments)){var e,i,o,a,u=w(this,arguments),f=t.event.changedTouches,c=f.length;for(fb(),i=0;i<c;++i)a=[a=It(this,f,(o=f[i]).identifier),this.__zoom.invert(a),o.identifier],u.touch0?u.touch1||(u.touch1=a):(u.touch0=a,e=!0);if(n&&(n=clearTimeout(n),!u.touch1))return u.end(),void((a=Dt(this).on("dblclick.zoom"))&&a.apply(this,arguments));e&&(n=setTimeout(function(){n=null},p),Nr(this),u.start())}}function E(){var e,r,i,a,u=w(this,arguments),f=t.event.changedTouches,s=f.length;for(cb(),n&&(n=clearTimeout(n)),e=0;e<s;++e)i=It(this,f,(r=f[e]).identifier),u.touch0&&u.touch0[2]===r.identifier?u.touch0[0]=i:u.touch1&&u.touch1[2]===r.identifier&&(u.touch1[0]=i);if(r=u.that.__zoom,u.touch1){var l=u.touch0[0],h=u.touch0[1],d=u.touch1[0],p=u.touch1[1],v=(v=d[0]-l[0])*v+(v=d[1]-l[1])*v,g=(g=p[0]-h[0])*g+(g=p[1]-h[1])*g;r=_(r,Math.sqrt(v/g)),i=[(l[0]+d[0])/2,(l[1]+d[1])/2],a=[(h[0]+p[0])/2,(h[1]+p[1])/2]}else{if(!u.touch0)return;i=u.touch0[0],a=u.touch0[1]}u.zoom("touch",o(b(r,i,a),u.extent,c))}function k(){var n,r,i=w(this,arguments),o=t.event.changedTouches,a=o.length;for(fb(),e&&clearTimeout(e),e=setTimeout(function(){e=null},p),n=0;n<a;++n)r=o[n],i.touch0&&i.touch0[2]===r.identifier?delete i.touch0:i.touch1&&i.touch1[2]===r.identifier&&delete i.touch1;i.touch1&&!i.touch0&&(i.touch0=i.touch1,delete i.touch1),i.touch0?i.touch0[1]=this.__zoom.invert(i.touch0[0]):i.end()}return y.transform=function(t,n){var e=t.selection?t.selection():t;e.property("__zoom",hb),t!==e?x(t,n):e.interrupt().each(function(){w(this,arguments).start().zoom(null,"function"==typeof n?n.apply(this,arguments):n).end()})},y.scaleBy=function(t,n){y.scaleTo(t,function(){return this.__zoom.k*("function"==typeof n?n.apply(this,arguments):n)})},y.scaleTo=function(t,n){y.transform(t,function(){var t=i.apply(this,arguments),e=this.__zoom,r=m(t),a=e.invert(r),u="function"==typeof n?n.apply(this,arguments):n;return o(b(_(e,u),r,a),t,c)})},y.translateBy=function(t,n,e){y.transform(t,function(){return o(this.__zoom.translate("function"==typeof n?n.apply(this,arguments):n,"function"==typeof e?e.apply(this,arguments):e),i.apply(this,arguments),c)})},y.translateTo=function(t,n,e){y.transform(t,function(){var t=i.apply(this,arguments),r=this.__zoom,a=m(t);return o(ab.translate(a[0],a[1]).scale(r.k).translate("function"==typeof n?-n.apply(this,arguments):-n,"function"==typeof e?-e.apply(this,arguments):-e),t,c)})},M.prototype={start:function(){return 1==++this.active&&(this.index=h.push(this)-1,this.emit("start")),this},zoom:function(t,n){return this.mouse&&"mouse"!==t&&(this.mouse[1]=n.invert(this.mouse[0])),this.touch0&&"touch"!==t&&(this.touch0[1]=n.invert(this.touch0[0])),this.touch1&&"touch"!==t&&(this.touch1[1]=n.invert(this.touch1[0])),this.that.__zoom=n,this.emit("zoom"),this},end:function(){return 0==--this.active&&(h.splice(this.index,1),this.index=-1,this.emit("end")),this},emit:function(t){Ct(new ib(y,t,this.that.__zoom),d.apply,d,[t,this.that,this.args])}},y.wheelDelta=function(t){return arguments.length?(a="function"==typeof t?t:rb(+t),y):a},y.filter=function(t){return arguments.length?(r="function"==typeof t?t:rb(!!t),y):r},y.touchable=function(t){return arguments.length?(u="function"==typeof t?t:rb(!!t),y):u},y.extent=function(t){return arguments.length?(i="function"==typeof t?t:rb([[+t[0][0],+t[0][1]],[+t[1][0],+t[1][1]]]),y):i},y.scaleExtent=function(t){return arguments.length?(f[0]=+t[0],f[1]=+t[1],y):[f[0],f[1]]},y.translateExtent=function(t){return arguments.length?(c[0][0]=+t[0][0],c[1][0]=+t[1][0],c[0][1]=+t[0][1],c[1][1]=+t[1][1],y):[[c[0][0],c[0][1]],[c[1][0],c[1][1]]]},y.constrain=function(t){return arguments.length?(o=t,y):o},y.duration=function(t){return arguments.length?(s=+t,y):s},y.interpolate=function(t){return arguments.length?(l=t,y):l},y.on=function(){var t=d.on.apply(d,arguments);return t===d?y:t},y.clickDistance=function(t){return arguments.length?(g=(t=+t)*t,y):Math.sqrt(g)},y},t.zoomTransform=ub,t.zoomIdentity=ab,Object.defineProperty(t,"__esModule",{value:!0})});


 
// https://github.com/topojson/topojson Version 3.0.2. Copyright 2017 Mike Bostock.
(function(r,n){"object"==typeof exports&&"undefined"!=typeof module?n(exports):"function"==typeof define&&define.amd?define(["exports"],n):n(r.topojson=r.topojson||{})})(this,function(r){"use strict";function n(r,n){var e=n.id,o=n.bbox,a=null==n.properties?{}:n.properties,i=t(r,n);return null==e&&null==o?{type:"Feature",properties:a,geometry:i}:null==o?{type:"Feature",id:e,properties:a,geometry:i}:{type:"Feature",id:e,bbox:o,properties:a,geometry:i}}function t(r,n){function t(r,n){n.length&&n.pop();for(var t=f[r<0?~r:r],e=0,o=t.length;e<o;++e)n.push(c(t[e],e));r<0&&C(n,o)}function e(r){return c(r)}function o(r){for(var n=[],e=0,o=r.length;e<o;++e)t(r[e],n);return n.length<2&&n.push(n[0]),n}function a(r){for(var n=o(r);n.length<4;)n.push(n[0]);return n}function i(r){return r.map(a)}function u(r){var n,t=r.type;switch(t){case"GeometryCollection":return{type:t,geometries:r.geometries.map(u)};case"Point":n=e(r.coordinates);break;case"MultiPoint":n=r.coordinates.map(e);break;case"LineString":n=o(r.arcs);break;case"MultiLineString":n=r.arcs.map(o);break;case"Polygon":n=i(r.arcs);break;case"MultiPolygon":n=r.arcs.map(i);break;default:return null}return{type:t,coordinates:n}}var c=A(r.transform),f=r.arcs;return u(n)}function e(r,n,t){var e,a,i;if(arguments.length>1)e=o(r,n,t);else for(a=0,e=new Array(i=r.arcs.length);a<i;++a)e[a]=a;return{type:"MultiLineString",arcs:G(r,e)}}function o(r,n,t){function e(r){var n=r<0?~r:r;(s[n]||(s[n]=[])).push({i:r,g:c})}function o(r){r.forEach(e)}function a(r){r.forEach(o)}function i(r){r.forEach(a)}function u(r){switch(c=r,r.type){case"GeometryCollection":r.geometries.forEach(u);break;case"LineString":o(r.arcs);break;case"MultiLineString":case"Polygon":a(r.arcs);break;case"MultiPolygon":i(r.arcs)}}var c,f=[],s=[];return u(n),s.forEach(null==t?function(r){f.push(r[0].i)}:function(r){t(r[0].g,r[r.length-1].g)&&f.push(r[0].i)}),f}function a(r){for(var n,t=-1,e=r.length,o=r[e-1],a=0;++t<e;)n=o,o=r[t],a+=n[0]*o[1]-n[1]*o[0];return Math.abs(a)}function i(r,n){function e(r){switch(r.type){case"GeometryCollection":r.geometries.forEach(e);break;case"Polygon":o(r.arcs);break;case"MultiPolygon":r.arcs.forEach(o)}}function o(r){r.forEach(function(n){n.forEach(function(n){(u[n=n<0?~n:n]||(u[n]=[])).push(r)})}),c.push(r)}function i(n){return a(t(r,{type:"Polygon",arcs:[n]}).coordinates[0])}var u={},c=[],f=[];return n.forEach(e),c.forEach(function(r){if(!r._){var n=[],t=[r];for(r._=1,f.push(n);r=t.pop();)n.push(r),r.forEach(function(r){r.forEach(function(r){u[r<0?~r:r].forEach(function(r){r._||(r._=1,t.push(r))})})})}}),c.forEach(function(r){delete r._}),{type:"MultiPolygon",arcs:f.map(function(n){var t,e=[];if(n.forEach(function(r){r.forEach(function(r){r.forEach(function(r){u[r<0?~r:r].length<2&&e.push(r)})})}),e=G(r,e),(t=e.length)>1)for(var o,a,c=1,f=i(e[0]);c<t;++c)(o=i(e[c]))>f&&(a=e[0],e[0]=e[c],e[c]=a,f=o);return e})}}function u(r,n,t,e){c(r,n,t),c(r,n,n+e),c(r,n+e,t)}function c(r,n,t){for(var e,o=n+(t---n>>1);n<o;++n,--t)e=r[n],r[n]=r[t],r[t]=e}function f(r){return null==r?{type:null}:("FeatureCollection"===r.type?s:"Feature"===r.type?l:h)(r)}function s(r){var n={type:"GeometryCollection",geometries:r.features.map(l)};return null!=r.bbox&&(n.bbox=r.bbox),n}function l(r){var n,t=h(r.geometry);null!=r.id&&(t.id=r.id),null!=r.bbox&&(t.bbox=r.bbox);for(n in r.properties){t.properties=r.properties;break}return t}function h(r){if(null==r)return{type:null};var n="GeometryCollection"===r.type?{type:"GeometryCollection",geometries:r.geometries.map(h)}:"Point"===r.type||"MultiPoint"===r.type?{type:r.type,coordinates:r.coordinates}:{type:r.type,arcs:r.coordinates};return null!=r.bbox&&(n.bbox=r.bbox),n}function p(r){var n,t=r[0],e=r[1];return e<t&&(n=t,t=e,e=n),t+31*e}function g(r,n){var t,e=r[0],o=r[1],a=n[0],i=n[1];return o<e&&(t=e,e=o,o=t),i<a&&(t=a,a=i,i=t),e===a&&o===i}function y(){return!0}function v(r){return r}function b(r){return null!=r.type}function m(r){var n=r[0],t=r[1],e=r[2];return Math.abs((n[0]-e[0])*(t[1]-n[1])-(n[0]-t[0])*(e[1]-n[1]))/2}function d(r){for(var n,t=-1,e=r.length,o=r[e-1],a=0;++t<e;)n=o,o=r[t],a+=n[0]*o[1]-n[1]*o[0];return Math.abs(a)/2}function M(r,n){return r[1][2]-n[1][2]}function E(r){return[r[0],r[1],0]}function P(r,n){if(t=r.length){if((n=+n)<=0||t<2)return r[0];if(n>=1)return r[t-1];var t,e=(t-1)*n,o=Math.floor(e),a=r[o];return a+(r[o+1]-a)*(e-o)}}function x(r,n){return n-r}function w(r,n){for(var t,e,o,a=0,i=r.length,u=0,c=r[n?a++:i-1],f=c[0]*rr,s=c[1]*rr/2+$,l=er(s),h=or(s);a<i;++a){t=f,f=(c=r[a])[0]*rr,s=c[1]*rr/2+$,e=l,l=er(s),o=h,h=or(s);var p=f-t,g=p>=0?1:-1,y=g*p,v=o*h,b=e*l+v*er(y),m=v*g*or(y);u+=tr(m,b)}return u}var k=function(r){return r},A=function(r){if(null==r)return k;var n,t,e=r.scale[0],o=r.scale[1],a=r.translate[0],i=r.translate[1];return function(r,u){u||(n=t=0);var c=2,f=r.length,s=new Array(f);for(s[0]=(n+=r[0])*e+a,s[1]=(t+=r[1])*o+i;c<f;)s[c]=r[c],++c;return s}},L=function(r){function n(r){(r=o(r))[0]<a&&(a=r[0]),r[0]>u&&(u=r[0]),r[1]<i&&(i=r[1]),r[1]>c&&(c=r[1])}function t(r){switch(r.type){case"GeometryCollection":r.geometries.forEach(t);break;case"Point":n(r.coordinates);break;case"MultiPoint":r.coordinates.forEach(n)}}var e,o=A(r.transform),a=1/0,i=a,u=-a,c=-a;r.arcs.forEach(function(r){for(var n,t=-1,e=r.length;++t<e;)(n=o(r[t],t))[0]<a&&(a=n[0]),n[0]>u&&(u=n[0]),n[1]<i&&(i=n[1]),n[1]>c&&(c=n[1])});for(e in r.objects)t(r.objects[e]);return[a,i,u,c]},C=function(r,n){for(var t,e=r.length,o=e-n;o<--e;)t=r[o],r[o++]=r[e],r[e]=t},S=function(r,t){return"GeometryCollection"===t.type?{type:"FeatureCollection",features:t.geometries.map(function(t){return n(r,t)})}:n(r,t)},G=function(r,n){function t(n){var t,e=r.arcs[n<0?~n:n],o=e[0];return r.transform?(t=[0,0],e.forEach(function(r){t[0]+=r[0],t[1]+=r[1]})):t=e[e.length-1],n<0?[t,o]:[o,t]}function e(r,n){for(var t in r){var e=r[t];delete n[e.start],delete e.start,delete e.end,e.forEach(function(r){o[r<0?~r:r]=1}),u.push(e)}}var o={},a={},i={},u=[],c=-1;return n.forEach(function(t,e){var o,a=r.arcs[t<0?~t:t];a.length<3&&!a[1][0]&&!a[1][1]&&(o=n[++c],n[c]=t,n[e]=o)}),n.forEach(function(r){var n,e,o=t(r),u=o[0],c=o[1];if(n=i[u])if(delete i[n.end],n.push(r),n.end=c,e=a[c]){delete a[e.start];var f=e===n?n:n.concat(e);a[f.start=n.start]=i[f.end=e.end]=f}else a[n.start]=i[n.end]=n;else if(n=a[c])if(delete a[n.start],n.unshift(r),n.start=u,e=i[u]){delete i[e.end];var s=e===n?n:e.concat(n);a[s.start=e.start]=i[s.end=n.end]=s}else a[n.start]=i[n.end]=n;else a[(n=[r]).start=u]=i[n.end=c]=n}),e(i,a),e(a,i),n.forEach(function(r){o[r<0?~r:r]||u.push([r])}),u},j=function(r,n){for(var t=0,e=r.length;t<e;){var o=t+e>>>1;r[o]<n?t=o+1:e=o}return t},_=function(r){if(null==r)return k;var n,t,e=r.scale[0],o=r.scale[1],a=r.translate[0],i=r.translate[1];return function(r,u){u||(n=t=0);var c=2,f=r.length,s=new Array(f),l=Math.round((r[0]-a)/e),h=Math.round((r[1]-i)/o);for(s[0]=l-n,n=l,s[1]=h-t,t=h;c<f;)s[c]=r[c],++c;return s}},I=function(r){function n(r){null!=r&&f.hasOwnProperty(r.type)&&f[r.type](r)}function t(r){var n=r[0],t=r[1];n<a&&(a=n),n>u&&(u=n),t<i&&(i=t),t>c&&(c=t)}function e(r){r.forEach(t)}function o(r){r.forEach(e)}var a=1/0,i=1/0,u=-1/0,c=-1/0,f={GeometryCollection:function(r){r.geometries.forEach(n)},Point:function(r){t(r.coordinates)},MultiPoint:function(r){r.coordinates.forEach(t)},LineString:function(r){e(r.arcs)},MultiLineString:function(r){r.arcs.forEach(e)},Polygon:function(r){r.arcs.forEach(e)},MultiPolygon:function(r){r.arcs.forEach(o)}};for(var s in r)n(r[s]);return u>=a&&c>=i?[a,i,u,c]:void 0},T=function(r,n,t,e,o){3===arguments.length&&(e=Array,o=null);for(var a=new e(r=1<<Math.max(4,Math.ceil(Math.log(r)/Math.LN2))),i=r-1,u=0;u<r;++u)a[u]=o;return{add:function(e){for(var u=n(e)&i,c=a[u],f=0;c!=o;){if(t(c,e))return!0;if(++f>=r)throw new Error("full hashset");c=a[u=u+1&i]}return a[u]=e,!0},has:function(e){for(var u=n(e)&i,c=a[u],f=0;c!=o;){if(t(c,e))return!0;if(++f>=r)break;c=a[u=u+1&i]}return!1},values:function(){for(var r=[],n=0,t=a.length;n<t;++n){var e=a[n];e!=o&&r.push(e)}return r}}},F=function(r,n,t,e,o,a){3===arguments.length&&(e=a=Array,o=null);for(var i=new e(r=1<<Math.max(4,Math.ceil(Math.log(r)/Math.LN2))),u=new a(r),c=r-1,f=0;f<r;++f)i[f]=o;return{set:function(e,a){for(var f=n(e)&c,s=i[f],l=0;s!=o;){if(t(s,e))return u[f]=a;if(++l>=r)throw new Error("full hashmap");s=i[f=f+1&c]}return i[f]=e,u[f]=a,a},maybeSet:function(e,a){for(var f=n(e)&c,s=i[f],l=0;s!=o;){if(t(s,e))return u[f];if(++l>=r)throw new Error("full hashmap");s=i[f=f+1&c]}return i[f]=e,u[f]=a,a},get:function(e,a){for(var f=n(e)&c,s=i[f],l=0;s!=o;){if(t(s,e))return u[f];if(++l>=r)break;s=i[f=f+1&c]}return a},keys:function(){for(var r=[],n=0,t=i.length;n<t;++n){var e=i[n];e!=o&&r.push(e)}return r}}},N=function(r,n){return r[0]===n[0]&&r[1]===n[1]},O=new ArrayBuffer(16),q=new Uint32Array(O),U=function(r){var n=q[0]^q[1];return 2147483647&(n=n<<5^n>>7^q[2]^q[3])},z=function(r){function n(r,n,t,e){if(h[t]!==r){h[t]=r;var o=p[t];if(o>=0){var a=g[t];o===n&&a===e||o===e&&a===n||(++v,y[t]=1)}else p[t]=n,g[t]=e}}function t(r){return U(c[r])}function e(r,n){return N(c[r],c[n])}var o,a,i,u,c=r.coordinates,f=r.lines,s=r.rings,l=function(){for(var r=F(1.4*c.length,t,e,Int32Array,-1,Int32Array),n=new Int32Array(c.length),o=0,a=c.length;o<a;++o)n[o]=r.maybeSet(o,o);return n}(),h=new Int32Array(c.length),p=new Int32Array(c.length),g=new Int32Array(c.length),y=new Int8Array(c.length),v=0;for(o=0,a=c.length;o<a;++o)h[o]=p[o]=g[o]=-1;for(o=0,a=f.length;o<a;++o){var b=f[o],m=b[0],d=b[1];for(i=l[m],u=l[++m],++v,y[i]=1;++m<=d;)n(o,i,i=u,u=l[m]);++v,y[u]=1}for(o=0,a=c.length;o<a;++o)h[o]=-1;for(o=0,a=s.length;o<a;++o){var M=s[o],E=M[0]+1,P=M[1];for(n(o,l[P-1],i=l[E-1],u=l[E]);++E<=P;)n(o,i,i=u,u=l[E])}h=p=g=null;var x,w=T(1.4*v,U,N);for(o=0,a=c.length;o<a;++o)y[x=l[o]]&&w.add(c[x]);return w},R=function(r){var n,t,e,o=z(r),a=r.coordinates,i=r.lines,c=r.rings;for(t=0,e=i.length;t<e;++t)for(var f=i[t],s=f[0],l=f[1];++s<l;)o.has(a[s])&&(n={0:s,1:f[1]},f[1]=s,f=f.next=n);for(t=0,e=c.length;t<e;++t)for(var h=c[t],p=h[0],g=p,y=h[1],v=o.has(a[p]);++g<y;)o.has(a[g])&&(v?(n={0:g,1:h[1]},h[1]=g,h=h.next=n):(u(a,p,y,y-g),a[y]=a[p],v=!0,g=p));return r},V=function(r){function n(r){var n,o,a,i,u,c,f,s;if(a=y.get(n=l[r[0]]))for(f=0,s=a.length;f<s;++f)if(i=a[f],t(i,r))return r[0]=i[0],void(r[1]=i[1]);if(u=y.get(o=l[r[1]]))for(f=0,s=u.length;f<s;++f)if(c=u[f],e(c,r))return r[1]=c[0],void(r[0]=c[1]);a?a.push(r):y.set(n,[r]),u?u.push(r):y.set(o,[r]),v.push(r)}function t(r,n){var t=r[0],e=n[0],o=r[1];if(t-o!=e-n[1])return!1;for(;t<=o;++t,++e)if(!N(l[t],l[e]))return!1;return!0}function e(r,n){var t=r[0],e=n[0],o=r[1],a=n[1];if(t-o!=e-a)return!1;for(;t<=o;++t,--a)if(!N(l[t],l[a]))return!1;return!0}function o(r,n){var t=r[0],e=n[0],o=r[1]-t;if(o!==n[1]-e)return!1;for(var a=i(r),u=i(n),c=0;c<o;++c)if(!N(l[t+(c+a)%o],l[e+(c+u)%o]))return!1;return!0}function a(r,n){var t=r[0],e=n[0],o=r[1],a=n[1],u=o-t;if(u!==a-e)return!1;for(var c=i(r),f=u-i(n),s=0;s<u;++s)if(!N(l[t+(s+c)%u],l[a-(s+f)%u]))return!1;return!0}function i(r){for(var n=r[0],t=r[1],e=n,o=e,a=l[e];++e<t;){var i=l[e];(i[0]<a[0]||i[0]===a[0]&&i[1]<a[1])&&(o=e,a=i)}return o-n}var u,c,f,s,l=r.coordinates,h=r.lines,p=r.rings,g=h.length+p.length;for(delete r.lines,delete r.rings,f=0,s=h.length;f<s;++f)for(u=h[f];u=u.next;)++g;for(f=0,s=p.length;f<s;++f)for(c=p[f];c=c.next;)++g;var y=F(2*g*1.4,U,N),v=r.arcs=[];for(f=0,s=h.length;f<s;++f){u=h[f];do{n(u)}while(u=u.next)}for(f=0,s=p.length;f<s;++f)if((c=p[f]).next)do{n(c)}while(c=c.next);else(function(r){var n,t,e,u,c;if(t=y.get(n=l[r[0]]))for(u=0,c=t.length;u<c;++u){if(e=t[u],o(e,r))return r[0]=e[0],void(r[1]=e[1]);if(a(e,r))return r[0]=e[1],void(r[1]=e[0])}if(t=y.get(n=l[r[0]+i(r)]))for(u=0,c=t.length;u<c;++u){if(e=t[u],o(e,r))return r[0]=e[0],void(r[1]=e[1]);if(a(e,r))return r[0]=e[1],void(r[1]=e[0])}t?t.push(r):y.set(n,[r]),v.push(r)})(c);return r},W=function(r){for(var n=-1,t=r.length;++n<t;){for(var e,o,a=r[n],i=0,u=1,c=a.length,f=a[0],s=f[0],l=f[1];++i<c;)e=(f=a[i])[0],o=f[1],e===s&&o===l||(a[u++]=[e-s,o-l],s=e,l=o);1===u&&(a[u++]=[0,0]),a.length=u}return r},B=function(r){function n(r){r&&f.hasOwnProperty(r.type)&&f[r.type](r)}function t(r){for(var n=0,t=r.length;n<t;++n)c[++a]=r[n];var e={0:a-t+1,1:a};return i.push(e),e}function e(r){for(var n=0,t=r.length;n<t;++n)c[++a]=r[n];var e={0:a-t+1,1:a};return u.push(e),e}function o(r){return r.map(e)}var a=-1,i=[],u=[],c=[],f={GeometryCollection:function(r){r.geometries.forEach(n)},LineString:function(r){r.arcs=t(r.arcs)},MultiLineString:function(r){r.arcs=r.arcs.map(t)},Polygon:function(r){r.arcs=r.arcs.map(e)},MultiPolygon:function(r){r.arcs=r.arcs.map(o)}};for(var s in r)n(r[s]);return{type:"Topology",coordinates:c,lines:i,rings:u,objects:r}},D=function(r){var n,t={};for(n in r)t[n]=f(r[n]);return t},H=function(r,n,t){function e(r){return[Math.round((r[0]-f)*p),Math.round((r[1]-s)*g)]}function o(r,n){for(var t,e,o,a,i,u=-1,c=0,l=r.length,h=new Array(l);++u<l;)t=r[u],a=Math.round((t[0]-f)*p),i=Math.round((t[1]-s)*g),a===e&&i===o||(h[c++]=[e=a,o=i]);for(h.length=c;c<n;)c=h.push([h[0][0],h[0][1]]);return h}function a(r){return o(r,2)}function i(r){return o(r,4)}function u(r){return r.map(i)}function c(r){null!=r&&y.hasOwnProperty(r.type)&&y[r.type](r)}var f=n[0],s=n[1],l=n[2],h=n[3],p=l-f?(t-1)/(l-f):1,g=h-s?(t-1)/(h-s):1,y={GeometryCollection:function(r){r.geometries.forEach(c)},Point:function(r){r.coordinates=e(r.coordinates)},MultiPoint:function(r){r.coordinates=r.coordinates.map(e)},LineString:function(r){r.arcs=a(r.arcs)},MultiLineString:function(r){r.arcs=r.arcs.map(a)},Polygon:function(r){r.arcs=u(r.arcs)},MultiPolygon:function(r){r.arcs=r.arcs.map(u)}};for(var v in r)c(r[v]);return{scale:[1/p,1/g],translate:[f,s]}},J=function(r){function n(r){switch(r.type){case"GeometryCollection":r.geometries.forEach(n);break;case"LineString":e(r.arcs);break;case"MultiLineString":case"Polygon":r.arcs.forEach(e);break;case"MultiPolygon":r.arcs.forEach(o)}}function t(r){r<0&&(r=~r),v[r]||(v[r]=1,++b)}function e(r){r.forEach(t)}function o(r){r.forEach(e)}function a(r){var n;switch(r.type){case"GeometryCollection":n={type:"GeometryCollection",geometries:r.geometries.map(a)};break;case"LineString":n={type:"LineString",arcs:u(r.arcs)};break;case"MultiLineString":n={type:"MultiLineString",arcs:r.arcs.map(u)};break;case"Polygon":n={type:"Polygon",arcs:r.arcs.map(u)};break;case"MultiPolygon":n={type:"MultiPolygon",arcs:r.arcs.map(c)};break;default:return r}return null!=r.id&&(n.id=r.id),null!=r.bbox&&(n.bbox=r.bbox),null!=r.properties&&(n.properties=r.properties),n}function i(r){return r<0?~v[~r]:v[r]}function u(r){return r.map(i)}function c(r){return r.map(u)}var f,s,l=r.objects,h={},p=r.arcs,g=p.length,y=-1,v=new Array(g),b=0,m=-1;for(s in l)n(l[s]);for(f=new Array(b);++y<g;)v[y]&&(v[y]=++m,f[m]=p[y]);for(s in l)h[s]=a(l[s]);return{type:"Topology",bbox:r.bbox,transform:r.transform,objects:h,arcs:f}},K=function(r){function n(r){switch(r.type){case"GeometryCollection":r.geometries.forEach(n);break;case"Polygon":t(r.arcs);break;case"MultiPolygon":r.arcs.forEach(t)}}function t(r){for(var n=0,t=r.length;n<t;++n,++a)for(var e=r[n],i=0,u=e.length;i<u;++i){var c=e[i];c<0&&(c=~c);var f=o[c];null==f?o[c]=a:f!==a&&(o[c]=-1)}}var e,o=new Array(r.arcs.length),a=0;for(e in r.objects)n(r.objects[e]);return function(r){for(var n,t=0,e=r.length;t<e;++t)if(-1===o[(n=r[t])<0?~n:n])return!0;return!1}},Q=function(r,n,t){return n=null==n?Number.MIN_VALUE:+n,null==t&&(t=d),function(e,o){return t(S(r,{type:"Polygon",arcs:[e]}).geometry.coordinates[0],o)>=n}},X=function(){function r(r,n){for(;n>0;){var t=(n+1>>1)-1,o=e[t];if(M(r,o)>=0)break;e[o._=n]=o,e[r._=n=t]=r}}function n(r,n){for(;;){var t=n+1<<1,a=t-1,i=n,u=e[i];if(a<o&&M(e[a],u)<0&&(u=e[i=a]),t<o&&M(e[t],u)<0&&(u=e[i=t]),i===n)break;e[u._=n]=u,e[r._=n=i]=r}}var t={},e=[],o=0;return t.push=function(n){return r(e[n._=o]=n,o++),o},t.pop=function(){if(!(o<=0)){var r,t=e[0];return--o>0&&(r=e[o],n(e[r._=0]=r,0)),t}},t.remove=function(t){var a,i=t._;if(e[i]===t)return i!==--o&&(a=e[o],(M(a,t)<0?r:n)(e[a._=i]=a,i)),i},t},Y=Math.PI,Z=2*Y,$=Y/4,rr=Y/180,nr=Math.abs,tr=Math.atan2,er=Math.cos,or=Math.sin;r.bbox=L,r.feature=S,r.mesh=function(r){return t(r,e.apply(this,arguments))},r.meshArcs=e,r.merge=function(r){return t(r,i.apply(this,arguments))},r.mergeArcs=i,r.neighbors=function(r){function n(r,n){r.forEach(function(r){r<0&&(r=~r);var t=o[r];t?t.push(n):o[r]=[n]})}function t(r,t){r.forEach(function(r){n(r,t)})}function e(r,n){"GeometryCollection"===r.type?r.geometries.forEach(function(r){e(r,n)}):r.type in i&&i[r.type](r.arcs,n)}var o={},a=r.map(function(){return[]}),i={LineString:n,MultiLineString:t,Polygon:t,MultiPolygon:function(r,n){r.forEach(function(r){t(r,n)})}};r.forEach(e);for(var u in o)for(var c=o[u],f=c.length,s=0;s<f;++s)for(var l=s+1;l<f;++l){var h,p=c[s],g=c[l];(h=a[p])[u=j(h,g)]!==g&&h.splice(u,0,g),(h=a[g])[u=j(h,p)]!==p&&h.splice(u,0,p)}return a},r.quantize=function(r,n){function t(r){return l(r)}function e(r){var n;switch(r.type){case"GeometryCollection":n={type:"GeometryCollection",geometries:r.geometries.map(e)};break;case"Point":n={type:"Point",coordinates:t(r.coordinates)};break;case"MultiPoint":n={type:"MultiPoint",coordinates:r.coordinates.map(t)};break;default:return r}return null!=r.id&&(n.id=r.id),null!=r.bbox&&(n.bbox=r.bbox),null!=r.properties&&(n.properties=r.properties),n}if(r.transform)throw new Error("already quantized");if(n&&n.scale)f=r.bbox;else{if(!((o=Math.floor(n))>=2))throw new Error("n must be ≥2");var o,a=(f=r.bbox||L(r))[0],i=f[1],u=f[2],c=f[3];n={scale:[u-a?(u-a)/(o-1):1,c-i?(c-i)/(o-1):1],translate:[a,i]}}var f,s,l=_(n),h=r.objects,p={};for(s in h)p[s]=e(h[s]);return{type:"Topology",bbox:f,transform:n,objects:p,arcs:r.arcs.map(function(r){var n,t=0,e=1,o=r.length,a=new Array(o);for(a[0]=l(r[0],0);++t<o;)((n=l(r[t],t))[0]||n[1])&&(a[e++]=n);return 1===e&&(a[e++]=[0,0]),a.length=e,a})}},r.transform=A,r.untransform=_,r.topology=function(r,n){function t(r){r&&s.hasOwnProperty(r.type)&&s[r.type](r)}function e(r){var n=[];do{var t=f.get(r);n.push(r[0]<r[1]?t:~t)}while(r=r.next);return n}function o(r){return r.map(e)}var a=I(r=D(r)),i=n>0&&a&&H(r,a,n),u=V(R(B(r))),c=u.coordinates,f=F(1.4*u.arcs.length,p,g);r=u.objects,u.bbox=a,u.arcs=u.arcs.map(function(r,n){return f.set(r,n),c.slice(r[0],r[1]+1)}),delete u.coordinates,c=null;var s={GeometryCollection:function(r){r.geometries.forEach(t)},LineString:function(r){r.arcs=e(r.arcs)},MultiLineString:function(r){r.arcs=r.arcs.map(e)},Polygon:function(r){r.arcs=r.arcs.map(e)},MultiPolygon:function(r){r.arcs=r.arcs.map(o)}};for(var l in r)t(r[l]);return i&&(u.transform=i,u.arcs=W(u.arcs)),u},r.filter=function(r,n){function t(r){var n,o;switch(r.type){case"Polygon":n=(o=e(r.arcs))?{type:"Polygon",arcs:o}:{type:null};break;case"MultiPolygon":n=(o=r.arcs.map(e).filter(v)).length?{type:"MultiPolygon",arcs:o}:{type:null};break;case"GeometryCollection":n=(o=r.geometries.map(t).filter(b)).length?{type:"GeometryCollection",geometries:o}:{type:null};break;default:return r}return null!=r.id&&(n.id=r.id),null!=r.bbox&&(n.bbox=r.bbox),null!=r.properties&&(n.properties=r.properties),n}function e(r){return r.length&&o(r[0])?[r[0]].concat(r.slice(1).filter(a)):null}function o(r){return n(r,!1)}function a(r){return n(r,!0)}var i,u=r.objects,c={};null==n&&(n=y);for(i in u)c[i]=t(u[i]);return J({type:"Topology",bbox:r.bbox,transform:r.transform,objects:c,arcs:r.arcs})},r.filterAttached=K,r.filterAttachedWeight=function(r,n,t){var e=K(r),o=Q(r,n,t);return function(r,n){return e(r,n)||o(r,n)}},r.filterWeight=Q,r.planarRingArea=d,r.planarTriangleArea=m,r.presimplify=function(r,n){function t(r){o.remove(r),r[1][2]=n(r),o.push(r)}var e=r.transform?A(r.transform):E,o=X();null==n&&(n=m);var a=r.arcs.map(function(r){var a,i,u,c=[],f=0;for(i=1,u=(r=r.map(e)).length-1;i<u;++i)(a=[r[i-1],r[i],r[i+1]])[1][2]=n(a),c.push(a),o.push(a);for(r[0][2]=r[u][2]=1/0,i=0,u=c.length;i<u;++i)(a=c[i]).previous=c[i-1],a.next=c[i+1];for(;a=o.pop();){var s=a.previous,l=a.next;a[1][2]<f?a[1][2]=f:f=a[1][2],s&&(s.next=l,s[2]=a[2],t(s)),l&&(l.previous=s,l[0]=a[0],t(l))}return r});return{type:"Topology",bbox:r.bbox,objects:r.objects,arcs:a}},r.quantile=function(r,n){var t=[];return r.arcs.forEach(function(r){r.forEach(function(r){isFinite(r[2])&&t.push(r[2])})}),t.length&&P(t.sort(x),n)},r.simplify=function(r,n){n=null==n?Number.MIN_VALUE:+n;var t=r.arcs.map(function(r){for(var t,e=-1,o=0,a=r.length,i=new Array(a);++e<a;)(t=r[e])[2]>=n&&(i[o++]=[t[0],t[1]]);return i.length=o,i});return{type:"Topology",transform:r.transform,bbox:r.bbox,objects:r.objects,arcs:t}},r.sphericalRingArea=function(r,n){var t=w(r,!0);return n&&(t*=-1),2*(t<0?Z+t:t)},r.sphericalTriangleArea=function(r){return 2*nr(w(r,!1))},Object.defineProperty(r,"__esModule",{value:!0})});

 
(function () {
	'use strict';

	function degradation(root){
		
		if(arguments.length==0){
			root = document.body;
		}

		var d = {};

		var browser_compat_message = "This interactive feature requires a modern browser<br />such as Chrome, Firefox, IE10+, or Safari.";

		var browser_compat_alert = function(){
			root.innerHTML = '<p style="margin:0em;text-align:center;line-height:2em;padding:2em;">' + browser_compat_message + '</p>';
		};

		//browser compatibility check
		d.browser = function(root_el){
			if(arguments.length){
				root = root_el;
			}

			if(!document.implementation.hasFeature("http://www.w3.org/TR/SVG11/feature#BasicStructure", "1.1") || 
				!Array.prototype.filter || !Array.prototype.map || !Array.prototype.forEach || !Array.prototype.indexOf){
				browser_compat_alert();
				return false;
			}
			else{
				return true;
			}
		};

		d.alert = function(container, message){
			if(message==null){
				message = "An error has occurred.<br/>Please refresh the page.";
			}
			else if(message.toLowerCase()=="browser"){
				message = browser_compat_message;
			}

			if(container!=null){
				container.innerHTML = '<p style="margin:0em;text-align:center;line-height:2em;padding:2em;">' + message + '</p>';
			}
			else{
				root.innerHTML = '<p style="margin:0em;text-align:center;line-height:2em;padding:2em;">' + message + '</p>';
			}

			return d;
		};

		return d;
	}

	function scrolly_supported(){
	    var browser_support = false;

	    try{
	        browser_support = CSS.supports('(position: sticky)');
	    }
	    catch(e){
	        browser_support = false;
	    }   
	    
	    return browser_support;
	}

	// Credit: This module was inspired by Russell Goldenberg's enter-view module [License: https://github.com/russellgoldenberg/enter-view/blob/master/LICENSE]

	function scrolly(element, top_){
	    
	    var sticky_el = d3.select(element);
	    
	    sticky_el.style("position", "sticky").style("top", arguments.length > 1 && top_ != null ? (top_+"px") : "0px").classed("sticky-el",true);

	    //harmonized requestAnimationFrame to call listener
	    var animation_frame = window.requestAnimationFrame || window.webkitRequestAnimationFrame ||
	                            window.mozRequestAnimationFrame || window.msRequestAnimationFrame ||
	                            function(listener) {
	                                return setTimeout(listener, 1000 / 60);
	                            };

	    // registered waypoints pushed onto stack                        
	    var scroll_stack = [];

	    // use for rate limiting
	    var is_scrolling = false; 
	    
	    // viewport dimensions
	    var vh;
	    var vw;

	    //to do: move px threshold outside of loop -- allow threshold to be specified as arg to scrolly

	    function scroll_event(){

	        scroll_stack.forEach(function(o){
	            var px_threshold = vh * (1 - o.threshold); 
	            var box = o.el.getBoundingClientRect();
	            var h = box.bottom - box.top;
	            
	            var en = box.top < px_threshold;
	            var ex = box.bottom < px_threshold;

	            var has_stepped;

	            //share of element that is over (above) the threshold
	            try{
	                if(h == 0){throw new Error("Zero height")}                var proportion = (px_threshold - box.top) / h;
	                has_stepped = proportion > 1 ? 1 : (proportion < 0 ? 0 : proportion);
	            }
	            catch(e){
	                has_stepped = 0;
	            }

	            //case 1: enter for the first time / re-enter after an exit
	            if(en && !o.has_entered){
	                o.enter.call(o.el);
	                o.step.call(o.el, has_stepped);
	            }
	            //case 2: exit (scrolling back up) -- scrolling past in normal flow is not an exit
	            else if(!en && o.has_entered){
	                has_stepped = 0;

	                var exit_closure = function(){
	                    o.step.call(o.el, has_stepped);
	                    o.exit.call(o.el);
	                };

	                //call immediately
	                exit_closure();
	            }

	            //case 3 (stepping): in view
	            //not mutually exclusive of case 1
	            if(en && !ex){
	                o.step.call(o.el, has_stepped);
	            }

	            //case 4 (last step): scrolling past, run last step to finish out any transition
	            //not mutually exclusive of case 1
	            if(en && ex && o.has_stepped != 1){
	                has_stepped = 1;
	                o.step.call(o.el, has_stepped);
	            }

	            //record this so enter() and exit() can be refired
	            o.has_entered = en;

	            o.has_stepped = has_stepped;
	        });
	        //unused for now -- not clear it is desirable to run all exits() after all enter() and step() calls
	        //cycle through exit stack in reverse order -- when multiple elements exit in the same call, exit the first DOM elements last, ensuring proper "rolling back" of events
	        //while(--i >= 0){
	        //    exit_stack[i]();
	        //}

	        is_scrolling = false;
	    }

	    function on_scroll(){
	        if(!is_scrolling){
	            is_scrolling = true;
	            animation_frame(scroll_event);
	        }
	    }

	    function set_dims(){
	        //record viewport dimensions
	        vh = Math.max(document.documentElement.clientHeight, (window.innerHeight || 0));
	        vw = document.documentElement.clientWidth && window.innerWidth ?
	                Math.min(document.documentElement.clientWidth, window.innerWidth) : 
	                document.documentElement.clientWidth || window.innerWidth;      
	    }

	    //API exposed to user of module
	    var methods = {};

	    // add a waypoint/marker
	    // fns is an object with "enter", "exit", and "step" functions

	    methods.marker = function(el, fns, threshold_){

	        var threshold = arguments.length < 3 || threshold_ == null ? 0 : threshold_;
	        var enter = fns.hasOwnProperty("enter") && typeof fns.enter === "function" ? fns.enter : function(){};
	        var exit = fns.hasOwnProperty("exit") && typeof fns.exit === "function" ? fns.exit : function(){};
	        var step = fns.hasOwnProperty("step") && typeof fns.step === "function" ? fns.step : function(){};

	        var pkg = {
	            el: el,
	            threshold: threshold,
	            enter: enter,
	            exit: exit,
	            step: step,
	            has_entered: false,
	            has_exited: false,
	            has_stepped: 0
	        };

	        scroll_stack.push(pkg);

	        //initialize listeners after first waypoint added
	        if(scroll_stack.length == 1){
	            set_dims();
	            window.addEventListener("scroll", on_scroll);
	            window.addEventListener("resize", set_dims);
	            window.addEventListener("load", function(){
	                //console.log("load");
	                set_dims();
	                on_scroll();
	            });
	        }

	        //run scroll listener after each waypoint added
	        on_scroll();
	        //console.log("marker added");
	    };

	    methods.supported = function(){
	        return browser_support;
	    };

	    return methods;
	    
	}

	//static method
	scrolly.supported = scrolly_supported;

	// the setup function must take two arguments: setup(container, view_num)
	// if setup is called with both arguments, it should draw the requested view (view_num) of the graphic, running setup first. 
	// typically, drawing the view completely means running then enter() and then the step(1) method, if present (after first running setup), but this is left up to the design of setup().
	// if called without view_num, then the return of setup is an array of objects:
	//   [{text:_, enter:_, step:_, exit:_}]
	//   calling enter, step, or exit will alter the view of the graphic to match text
	// 
	// the first form is used to handle instances when scrollytelling is not supported by the browser (every view should be drawn)
	// the second form is used to handle scrollytelling 

	function sequence(container, setup, num_views){
	    
	    var wrap = d3.select(container).append("div").style("margin-bottom","50vh");
	    
	    var views;

	    if(scrolly.supported()){
	        var sticky = wrap.append("div"); 
	        var scr = scrolly(sticky.node(), 110);
	        views = wrap.selectAll("div.scrolling-panel").data(setup(sticky.node())).enter().append("div").classed("scrolling-panel",true);
	                
	        views.selectAll("p").data(function(d){return d.text}).enter().append("p").html(function(d){return d});

	        views.each(function(d){            
	            var fns = {};
	            fns.enter = d.hasOwnProperty("enter") ? d.enter : null;
	            fns.step = d.hasOwnProperty("step") ? d.step : null;
	            fns.exit = d.hasOwnProperty("exit") ? d.exit : null;
	    
	            scr.marker(this, fns, 0.15);
	          });
	    }
	    else{
	        //draw all views using form setup(container, view_num)
	        views = wrap.selectAll("div.static-panel").data(d3.range(0,num_views)).enter().append("div").classed("static-panel",true);
	        views.each(function(d,i){
	            setup(this, d);
	        });
	    }

	}

	function on_resize(callback, init){
	    var viewport = {};

	    function set_dims(){
	        viewport.w = Math.max(document.documentElement.clientWidth, window.innerWidth || 0);
	        viewport.h = Math.max(document.documentElement.clientHeight, window.innerHeight || 0); 
	    }

	    //initialize dimensions
	    set_dims();

	    //run callback right away
	    if(arguments.length > 1 && !!init){
	        callback.call(viewport);
	    }

	    window.addEventListener("resize", function(){
	        set_dims();
	        callback.call(viewport);
	    });
	}

	var seq0data = 
	{
	  "changes": {
	    "99997": [
	      {
	        "cbsa": 99997,
	        "year": 2004,
	        "actual": 0,
	        "expected": null
	      },
	      {
	        "cbsa": 99997,
	        "year": 2005,
	        "actual": 0.0112,
	        "expected": null
	      },
	      {
	        "cbsa": 99997,
	        "year": 2006,
	        "actual": 0.00759,
	        "expected": null
	      },
	      {
	        "cbsa": 99997,
	        "year": 2007,
	        "actual": 0.01286,
	        "expected": null
	      },
	      {
	        "cbsa": 99997,
	        "year": 2008,
	        "actual": 0.05139,
	        "expected": null
	      },
	      {
	        "cbsa": 99997,
	        "year": 2009,
	        "actual": 0.0486,
	        "expected": null
	      },
	      {
	        "cbsa": 99997,
	        "year": 2010,
	        "actual": 0.04086,
	        "expected": null
	      },
	      {
	        "cbsa": 99997,
	        "year": 2011,
	        "actual": 0.07007,
	        "expected": null
	      },
	      {
	        "cbsa": 99997,
	        "year": 2012,
	        "actual": 0.0349,
	        "expected": null
	      },
	      {
	        "cbsa": 99997,
	        "year": 2013,
	        "actual": 0.0605,
	        "expected": null
	      },
	      {
	        "cbsa": 99997,
	        "year": 2014,
	        "actual": 0.05711,
	        "expected": null
	      },
	      {
	        "cbsa": 99997,
	        "year": 2015,
	        "actual": 0.09175,
	        "expected": null
	      }
	    ],
	    "99998": [
	      {
	        "cbsa": 99998,
	        "year": 2004,
	        "actual": 0,
	        "expected": null
	      },
	      {
	        "cbsa": 99998,
	        "year": 2005,
	        "actual": 0.00558,
	        "expected": null
	      },
	      {
	        "cbsa": 99998,
	        "year": 2006,
	        "actual": 0.04057,
	        "expected": null
	      },
	      {
	        "cbsa": 99998,
	        "year": 2007,
	        "actual": 0.06832,
	        "expected": null
	      },
	      {
	        "cbsa": 99998,
	        "year": 2008,
	        "actual": 0.13589,
	        "expected": null
	      },
	      {
	        "cbsa": 99998,
	        "year": 2009,
	        "actual": 0.19391,
	        "expected": null
	      },
	      {
	        "cbsa": 99998,
	        "year": 2010,
	        "actual": 0.20588,
	        "expected": null
	      },
	      {
	        "cbsa": 99998,
	        "year": 2011,
	        "actual": 0.24732,
	        "expected": null
	      },
	      {
	        "cbsa": 99998,
	        "year": 2012,
	        "actual": 0.28532,
	        "expected": null
	      },
	      {
	        "cbsa": 99998,
	        "year": 2013,
	        "actual": 0.32903,
	        "expected": null
	      },
	      {
	        "cbsa": 99998,
	        "year": 2014,
	        "actual": 0.3626,
	        "expected": null
	      },
	      {
	        "cbsa": 99998,
	        "year": 2015,
	        "actual": 0.39894,
	        "expected": null
	      }
	    ],
	    "99999": [
	      {
	        "cbsa": 99999,
	        "year": 2004,
	        "actual": 0,
	        "expected": 0
	      },
	      {
	        "cbsa": 99999,
	        "year": 2005,
	        "actual": 0.00411,
	        "expected": 0.01534
	      },
	      {
	        "cbsa": 99999,
	        "year": 2006,
	        "actual": 0.02342,
	        "expected": 0.03169
	      },
	      {
	        "cbsa": 99999,
	        "year": 2007,
	        "actual": 0.04194,
	        "expected": 0.04611
	      },
	      {
	        "cbsa": 99999,
	        "year": 2008,
	        "actual": 0.10397,
	        "expected": 0.07314
	      },
	      {
	        "cbsa": 99999,
	        "year": 2009,
	        "actual": 0.1492,
	        "expected": 0.07958
	      },
	      {
	        "cbsa": 99999,
	        "year": 2010,
	        "actual": 0.16013,
	        "expected": 0.09512
	      },
	      {
	        "cbsa": 99999,
	        "year": 2011,
	        "actual": 0.19535,
	        "expected": 0.11767
	      },
	      {
	        "cbsa": 99999,
	        "year": 2012,
	        "actual": 0.20543,
	        "expected": 0.136
	      },
	      {
	        "cbsa": 99999,
	        "year": 2013,
	        "actual": 0.24287,
	        "expected": 0.16298
	      },
	      {
	        "cbsa": 99999,
	        "year": 2014,
	        "actual": 0.26156,
	        "expected": 0.16756
	      },
	      {
	        "cbsa": 99999,
	        "year": 2015,
	        "actual": 0.29534,
	        "expected": 0.19896
	      }
	    ]
	  },
	  "levels": {
	    "99997": [
	      {
	        "cbsa": 99997,
	        "year": 2004,
	        "actual": 8917.2278,
	        "expected": null
	      },
	      {
	        "cbsa": 99997,
	        "year": 2005,
	        "actual": 9017.1164,
	        "expected": null
	      },
	      {
	        "cbsa": 99997,
	        "year": 2006,
	        "actual": 8984.888,
	        "expected": null
	      },
	      {
	        "cbsa": 99997,
	        "year": 2007,
	        "actual": 9031.8997,
	        "expected": null
	      },
	      {
	        "cbsa": 99997,
	        "year": 2008,
	        "actual": 9375.4446,
	        "expected": null
	      },
	      {
	        "cbsa": 99997,
	        "year": 2009,
	        "actual": 9350.63,
	        "expected": null
	      },
	      {
	        "cbsa": 99997,
	        "year": 2010,
	        "actual": 9281.5577,
	        "expected": null
	      },
	      {
	        "cbsa": 99997,
	        "year": 2011,
	        "actual": 9542.0279,
	        "expected": null
	      },
	      {
	        "cbsa": 99997,
	        "year": 2012,
	        "actual": 9228.4258,
	        "expected": null
	      },
	      {
	        "cbsa": 99997,
	        "year": 2013,
	        "actual": 9456.7321,
	        "expected": null
	      },
	      {
	        "cbsa": 99997,
	        "year": 2014,
	        "actual": 9426.5301,
	        "expected": null
	      },
	      {
	        "cbsa": 99997,
	        "year": 2015,
	        "actual": 9735.3642,
	        "expected": null
	      }
	    ],
	    "99998": [
	      {
	        "cbsa": 99998,
	        "year": 2004,
	        "actual": 65813.491,
	        "expected": null
	      },
	      {
	        "cbsa": 99998,
	        "year": 2005,
	        "actual": 66180.979,
	        "expected": null
	      },
	      {
	        "cbsa": 99998,
	        "year": 2006,
	        "actual": 68483.716,
	        "expected": null
	      },
	      {
	        "cbsa": 99998,
	        "year": 2007,
	        "actual": 70309.982,
	        "expected": null
	      },
	      {
	        "cbsa": 99998,
	        "year": 2008,
	        "actual": 74756.794,
	        "expected": null
	      },
	      {
	        "cbsa": 99998,
	        "year": 2009,
	        "actual": 78575.649,
	        "expected": null
	      },
	      {
	        "cbsa": 99998,
	        "year": 2010,
	        "actual": 79363.281,
	        "expected": null
	      },
	      {
	        "cbsa": 99998,
	        "year": 2011,
	        "actual": 82090.424,
	        "expected": null
	      },
	      {
	        "cbsa": 99998,
	        "year": 2012,
	        "actual": 84591.725,
	        "expected": null
	      },
	      {
	        "cbsa": 99998,
	        "year": 2013,
	        "actual": 87467.893,
	        "expected": null
	      },
	      {
	        "cbsa": 99998,
	        "year": 2014,
	        "actual": 89677.392,
	        "expected": null
	      },
	      {
	        "cbsa": 99998,
	        "year": 2015,
	        "actual": 92068.879,
	        "expected": null
	      }
	    ],
	    "99999": [
	      {
	        "cbsa": 99999,
	        "year": 2004,
	        "actual": 20066.14648,
	        "expected": 20066.14648
	      },
	      {
	        "cbsa": 99999,
	        "year": 2005,
	        "actual": 20148.64453,
	        "expected": 20374.03125
	      },
	      {
	        "cbsa": 99999,
	        "year": 2006,
	        "actual": 20536.01367,
	        "expected": 20702.06445
	      },
	      {
	        "cbsa": 99999,
	        "year": 2007,
	        "actual": 20907.63281,
	        "expected": 20991.31445
	      },
	      {
	        "cbsa": 99999,
	        "year": 2008,
	        "actual": 22152.37305,
	        "expected": 21533.74609
	      },
	      {
	        "cbsa": 99999,
	        "year": 2009,
	        "actual": 23060.08008,
	        "expected": 21662.94336
	      },
	      {
	        "cbsa": 99999,
	        "year": 2010,
	        "actual": 23279.40234,
	        "expected": 21974.77734
	      },
	      {
	        "cbsa": 99999,
	        "year": 2011,
	        "actual": 23986.06641,
	        "expected": 22427.23438
	      },
	      {
	        "cbsa": 99999,
	        "year": 2012,
	        "actual": 24188.29883,
	        "expected": 22795.07422
	      },
	      {
	        "cbsa": 99999,
	        "year": 2013,
	        "actual": 24939.69336,
	        "expected": 23336.54883
	      },
	      {
	        "cbsa": 99999,
	        "year": 2014,
	        "actual": 25314.63672,
	        "expected": 23428.42773
	      },
	      {
	        "cbsa": 99999,
	        "year": 2015,
	        "actual": 25992.56836,
	        "expected": 24058.55859
	      }
	    ]
	  }
	}
	;
	var sector_data = 
	{
	  "10420": [
	    {
	      "cbsa": 10420,
	      "naics": "00",
	      "actual": -0.21292,
	      "expected": 0.15659
	    },
	    {
	      "cbsa": 10420,
	      "naics": "22",
	      "actual": -0.50371,
	      "expected": 0.44763
	    },
	    {
	      "cbsa": 10420,
	      "naics": "23",
	      "actual": -0.15791,
	      "expected": -0.13608
	    },
	    {
	      "cbsa": 10420,
	      "naics": "31",
	      "actual": -0.30288,
	      "expected": -0.15018
	    },
	    {
	      "cbsa": 10420,
	      "naics": "42",
	      "actual": -0.15861,
	      "expected": 0.13945
	    },
	    {
	      "cbsa": 10420,
	      "naics": "44",
	      "actual": -0.18489,
	      "expected": -0.02181
	    },
	    {
	      "cbsa": 10420,
	      "naics": "48",
	      "actual": 0.34559,
	      "expected": 0.23401
	    },
	    {
	      "cbsa": 10420,
	      "naics": "51",
	      "actual": -0.50428,
	      "expected": -0.09106
	    },
	    {
	      "cbsa": 10420,
	      "naics": "52",
	      "actual": -0.36882,
	      "expected": -0.03134
	    },
	    {
	      "cbsa": 10420,
	      "naics": "53",
	      "actual": -0.19893,
	      "expected": -0.14505
	    },
	    {
	      "cbsa": 10420,
	      "naics": "54",
	      "actual": -0.15983,
	      "expected": 0.33651
	    },
	    {
	      "cbsa": 10420,
	      "naics": "55",
	      "actual": -0.21474,
	      "expected": 0.36381
	    },
	    {
	      "cbsa": 10420,
	      "naics": "61",
	      "actual": -0.18495,
	      "expected": 0.41721
	    },
	    {
	      "cbsa": 10420,
	      "naics": "62",
	      "actual": -0.1708,
	      "expected": 0.26848
	    },
	    {
	      "cbsa": 10420,
	      "naics": "71",
	      "actual": -0.3423,
	      "expected": 0.03946
	    },
	    {
	      "cbsa": 10420,
	      "naics": "72",
	      "actual": -0.17184,
	      "expected": 0.08864
	    },
	    {
	      "cbsa": 10420,
	      "naics": "81",
	      "actual": -0.22429,
	      "expected": 0.07841
	    }
	  ],
	  "10580": [
	    {
	      "cbsa": 10580,
	      "naics": "00",
	      "actual": 0.43341,
	      "expected": 0.21229
	    },
	    {
	      "cbsa": 10580,
	      "naics": "22",
	      "actual": 0.665,
	      "expected": 1.77929
	    },
	    {
	      "cbsa": 10580,
	      "naics": "23",
	      "actual": 0.19041,
	      "expected": 0.10158
	    },
	    {
	      "cbsa": 10580,
	      "naics": "31",
	      "actual": 1.63884,
	      "expected": 0.21498
	    },
	    {
	      "cbsa": 10580,
	      "naics": "42",
	      "actual": -0.25814,
	      "expected": -0.17939
	    },
	    {
	      "cbsa": 10580,
	      "naics": "44",
	      "actual": -0.20774,
	      "expected": -0.08338
	    },
	    {
	      "cbsa": 10580,
	      "naics": "48",
	      "actual": -0.01095,
	      "expected": 0.13416
	    },
	    {
	      "cbsa": 10580,
	      "naics": "51",
	      "actual": -0.45201,
	      "expected": -0.14229
	    },
	    {
	      "cbsa": 10580,
	      "naics": "52",
	      "actual": -0.07914,
	      "expected": 0.00097
	    },
	    {
	      "cbsa": 10580,
	      "naics": "53",
	      "actual": -0.34728,
	      "expected": -0.10057
	    },
	    {
	      "cbsa": 10580,
	      "naics": "54",
	      "actual": 0.10121,
	      "expected": 0.11547
	    },
	    {
	      "cbsa": 10580,
	      "naics": "55",
	      "actual": 3.3051,
	      "expected": 0.55807
	    },
	    {
	      "cbsa": 10580,
	      "naics": "61",
	      "actual": 2.62295,
	      "expected": 1.12111
	    },
	    {
	      "cbsa": 10580,
	      "naics": "62",
	      "actual": 0.3716,
	      "expected": 0.2256
	    },
	    {
	      "cbsa": 10580,
	      "naics": "71",
	      "actual": 0.31571,
	      "expected": 0.3598
	    },
	    {
	      "cbsa": 10580,
	      "naics": "72",
	      "actual": 0.28424,
	      "expected": 0.27283
	    },
	    {
	      "cbsa": 10580,
	      "naics": "81",
	      "actual": -0.16809,
	      "expected": -0.00424
	    }
	  ],
	  "10740": [
	    {
	      "cbsa": 10740,
	      "naics": "00",
	      "actual": -0.21248,
	      "expected": 0.12925
	    },
	    {
	      "cbsa": 10740,
	      "naics": "22",
	      "actual": 0.32477,
	      "expected": 0.16682
	    },
	    {
	      "cbsa": 10740,
	      "naics": "23",
	      "actual": -0.26103,
	      "expected": -0.17248
	    },
	    {
	      "cbsa": 10740,
	      "naics": "31",
	      "actual": -0.80656,
	      "expected": -0.03654
	    },
	    {
	      "cbsa": 10740,
	      "naics": "42",
	      "actual": -0.19547,
	      "expected": -0.07601
	    },
	    {
	      "cbsa": 10740,
	      "naics": "44",
	      "actual": -0.26224,
	      "expected": 0.02233
	    },
	    {
	      "cbsa": 10740,
	      "naics": "48",
	      "actual": -0.40117,
	      "expected": -0.11287
	    },
	    {
	      "cbsa": 10740,
	      "naics": "51",
	      "actual": -0.08526,
	      "expected": 0.09208
	    },
	    {
	      "cbsa": 10740,
	      "naics": "52",
	      "actual": -0.32148,
	      "expected": -0.06892
	    },
	    {
	      "cbsa": 10740,
	      "naics": "53",
	      "actual": -0.1655,
	      "expected": 0.04381
	    },
	    {
	      "cbsa": 10740,
	      "naics": "54",
	      "actual": -0.07075,
	      "expected": -0.03078
	    },
	    {
	      "cbsa": 10740,
	      "naics": "55",
	      "actual": 0.00819,
	      "expected": 0.12785
	    },
	    {
	      "cbsa": 10740,
	      "naics": "61",
	      "actual": 0.39803,
	      "expected": 0.67131
	    },
	    {
	      "cbsa": 10740,
	      "naics": "62",
	      "actual": 0.12171,
	      "expected": 0.52404
	    },
	    {
	      "cbsa": 10740,
	      "naics": "71",
	      "actual": 0.82523,
	      "expected": 0.61033
	    },
	    {
	      "cbsa": 10740,
	      "naics": "72",
	      "actual": -0.16968,
	      "expected": 0.12772
	    },
	    {
	      "cbsa": 10740,
	      "naics": "81",
	      "actual": -0.15718,
	      "expected": 0.05958
	    }
	  ],
	  "10900": [
	    {
	      "cbsa": 10900,
	      "naics": "00",
	      "actual": 0.04818,
	      "expected": 0.21257
	    },
	    {
	      "cbsa": 10900,
	      "naics": "22",
	      "actual": -0.76451,
	      "expected": -0.60116
	    },
	    {
	      "cbsa": 10900,
	      "naics": "23",
	      "actual": -0.15638,
	      "expected": -0.14624
	    },
	    {
	      "cbsa": 10900,
	      "naics": "31",
	      "actual": -0.47892,
	      "expected": -0.26035
	    },
	    {
	      "cbsa": 10900,
	      "naics": "42",
	      "actual": -0.00039,
	      "expected": 0.2053
	    },
	    {
	      "cbsa": 10900,
	      "naics": "44",
	      "actual": -0.25498,
	      "expected": 0.07437
	    },
	    {
	      "cbsa": 10900,
	      "naics": "48",
	      "actual": 0.27637,
	      "expected": 0.74555
	    },
	    {
	      "cbsa": 10900,
	      "naics": "51",
	      "actual": -0.47083,
	      "expected": -0.33459
	    },
	    {
	      "cbsa": 10900,
	      "naics": "52",
	      "actual": 0.01267,
	      "expected": -0.06029
	    },
	    {
	      "cbsa": 10900,
	      "naics": "53",
	      "actual": 0.06956,
	      "expected": 0.05812
	    },
	    {
	      "cbsa": 10900,
	      "naics": "54",
	      "actual": 0.00097,
	      "expected": 0.12565
	    },
	    {
	      "cbsa": 10900,
	      "naics": "55",
	      "actual": 1.0748,
	      "expected": 2.61665
	    },
	    {
	      "cbsa": 10900,
	      "naics": "61",
	      "actual": -0.24433,
	      "expected": 0.03747
	    },
	    {
	      "cbsa": 10900,
	      "naics": "62",
	      "actual": 0.65903,
	      "expected": 0.58756
	    },
	    {
	      "cbsa": 10900,
	      "naics": "71",
	      "actual": 0.45363,
	      "expected": 0.35155
	    },
	    {
	      "cbsa": 10900,
	      "naics": "72",
	      "actual": 0.18325,
	      "expected": 0.26381
	    },
	    {
	      "cbsa": 10900,
	      "naics": "81",
	      "actual": -0.28702,
	      "expected": -0.03241
	    }
	  ],
	  "12060": [
	    {
	      "cbsa": 12060,
	      "naics": "00",
	      "actual": 0.19815,
	      "expected": 0.24761
	    },
	    {
	      "cbsa": 12060,
	      "naics": "22",
	      "actual": 1.21183,
	      "expected": -0.01854
	    },
	    {
	      "cbsa": 12060,
	      "naics": "23",
	      "actual": -0.00189,
	      "expected": -0.06338
	    },
	    {
	      "cbsa": 12060,
	      "naics": "31",
	      "actual": -0.28875,
	      "expected": -0.22774
	    },
	    {
	      "cbsa": 12060,
	      "naics": "42",
	      "actual": 0.17928,
	      "expected": 0.05543
	    },
	    {
	      "cbsa": 12060,
	      "naics": "44",
	      "actual": 0.20404,
	      "expected": 0.21337
	    },
	    {
	      "cbsa": 12060,
	      "naics": "48",
	      "actual": 2.06625,
	      "expected": 0.89881
	    },
	    {
	      "cbsa": 12060,
	      "naics": "51",
	      "actual": -0.20754,
	      "expected": 0.00919
	    },
	    {
	      "cbsa": 12060,
	      "naics": "52",
	      "actual": 0.10268,
	      "expected": 0.10019
	    },
	    {
	      "cbsa": 12060,
	      "naics": "53",
	      "actual": 0.03687,
	      "expected": 0.09179
	    },
	    {
	      "cbsa": 12060,
	      "naics": "54",
	      "actual": 0.35668,
	      "expected": 0.3923
	    },
	    {
	      "cbsa": 12060,
	      "naics": "55",
	      "actual": 0.47615,
	      "expected": 0.46574
	    },
	    {
	      "cbsa": 12060,
	      "naics": "61",
	      "actual": 0.12449,
	      "expected": 0.49895
	    },
	    {
	      "cbsa": 12060,
	      "naics": "62",
	      "actual": 0.57845,
	      "expected": 0.62693
	    },
	    {
	      "cbsa": 12060,
	      "naics": "71",
	      "actual": 0.16845,
	      "expected": 0.26752
	    },
	    {
	      "cbsa": 12060,
	      "naics": "72",
	      "actual": 0.09999,
	      "expected": 0.24125
	    },
	    {
	      "cbsa": 12060,
	      "naics": "81",
	      "actual": -0.10915,
	      "expected": 0.04516
	    }
	  ],
	  "12260": [
	    {
	      "cbsa": 12260,
	      "naics": "00",
	      "actual": -0.00191,
	      "expected": 0.17845
	    },
	    {
	      "cbsa": 12260,
	      "naics": "22",
	      "actual": -0.52135,
	      "expected": 0.55494
	    },
	    {
	      "cbsa": 12260,
	      "naics": "23",
	      "actual": -0.35713,
	      "expected": -0.11275
	    },
	    {
	      "cbsa": 12260,
	      "naics": "31",
	      "actual": -0.49261,
	      "expected": -0.22665
	    },
	    {
	      "cbsa": 12260,
	      "naics": "42",
	      "actual": -0.30819,
	      "expected": -0.02868
	    },
	    {
	      "cbsa": 12260,
	      "naics": "44",
	      "actual": -0.23315,
	      "expected": -0.05254
	    },
	    {
	      "cbsa": 12260,
	      "naics": "48",
	      "actual": -0.01271,
	      "expected": 0.38649
	    },
	    {
	      "cbsa": 12260,
	      "naics": "51",
	      "actual": -0.51001,
	      "expected": 0.01108
	    },
	    {
	      "cbsa": 12260,
	      "naics": "52",
	      "actual": -0.21854,
	      "expected": 0.22732
	    },
	    {
	      "cbsa": 12260,
	      "naics": "53",
	      "actual": -0.5307,
	      "expected": -0.13009
	    },
	    {
	      "cbsa": 12260,
	      "naics": "54",
	      "actual": 0.33242,
	      "expected": 0.83488
	    },
	    {
	      "cbsa": 12260,
	      "naics": "55",
	      "actual": -0.5794,
	      "expected": -0.45915
	    },
	    {
	      "cbsa": 12260,
	      "naics": "61",
	      "actual": 0.17965,
	      "expected": 0.30777
	    },
	    {
	      "cbsa": 12260,
	      "naics": "62",
	      "actual": 0.27277,
	      "expected": 0.27757
	    },
	    {
	      "cbsa": 12260,
	      "naics": "71",
	      "actual": -0.14323,
	      "expected": 0.49222
	    },
	    {
	      "cbsa": 12260,
	      "naics": "72",
	      "actual": -0.04018,
	      "expected": 0.23323
	    },
	    {
	      "cbsa": 12260,
	      "naics": "81",
	      "actual": -0.09594,
	      "expected": 0.1558
	    }
	  ],
	  "12420": [
	    {
	      "cbsa": 12420,
	      "naics": "00",
	      "actual": 0.39553,
	      "expected": 0.55652
	    },
	    {
	      "cbsa": 12420,
	      "naics": "22",
	      "actual": -0.33808,
	      "expected": 0.70308
	    },
	    {
	      "cbsa": 12420,
	      "naics": "23",
	      "actual": 0.27972,
	      "expected": 0.47332
	    },
	    {
	      "cbsa": 12420,
	      "naics": "31",
	      "actual": 0.30922,
	      "expected": 0.1767
	    },
	    {
	      "cbsa": 12420,
	      "naics": "42",
	      "actual": 0.05504,
	      "expected": 0.12131
	    },
	    {
	      "cbsa": 12420,
	      "naics": "44",
	      "actual": 0.26259,
	      "expected": 0.42505
	    },
	    {
	      "cbsa": 12420,
	      "naics": "48",
	      "actual": 0.41747,
	      "expected": 0.50709
	    },
	    {
	      "cbsa": 12420,
	      "naics": "51",
	      "actual": 0.34729,
	      "expected": 0.29076
	    },
	    {
	      "cbsa": 12420,
	      "naics": "52",
	      "actual": -0.08287,
	      "expected": 0.2892
	    },
	    {
	      "cbsa": 12420,
	      "naics": "53",
	      "actual": 0.30036,
	      "expected": 0.53708
	    },
	    {
	      "cbsa": 12420,
	      "naics": "54",
	      "actual": 0.77855,
	      "expected": 1.01376
	    },
	    {
	      "cbsa": 12420,
	      "naics": "55",
	      "actual": 0.35584,
	      "expected": 0.53904
	    },
	    {
	      "cbsa": 12420,
	      "naics": "61",
	      "actual": 0.70924,
	      "expected": 0.70977
	    },
	    {
	      "cbsa": 12420,
	      "naics": "62",
	      "actual": 0.58232,
	      "expected": 0.78851
	    },
	    {
	      "cbsa": 12420,
	      "naics": "71",
	      "actual": 1.00087,
	      "expected": 0.79195
	    },
	    {
	      "cbsa": 12420,
	      "naics": "72",
	      "actual": 0.46563,
	      "expected": 0.70264
	    },
	    {
	      "cbsa": 12420,
	      "naics": "81",
	      "actual": 0.37623,
	      "expected": 0.48712
	    }
	  ],
	  "12540": [
	    {
	      "cbsa": 12540,
	      "naics": "00",
	      "actual": 0.04182,
	      "expected": 0.28047
	    },
	    {
	      "cbsa": 12540,
	      "naics": "22",
	      "actual": -0.69575,
	      "expected": -0.14417
	    },
	    {
	      "cbsa": 12540,
	      "naics": "23",
	      "actual": 0.62221,
	      "expected": 0.30091
	    },
	    {
	      "cbsa": 12540,
	      "naics": "31",
	      "actual": -0.73313,
	      "expected": -0.28429
	    },
	    {
	      "cbsa": 12540,
	      "naics": "42",
	      "actual": 0.08653,
	      "expected": 0.39631
	    },
	    {
	      "cbsa": 12540,
	      "naics": "44",
	      "actual": -0.18704,
	      "expected": 0.09572
	    },
	    {
	      "cbsa": 12540,
	      "naics": "48",
	      "actual": -0.05115,
	      "expected": 0.28261
	    },
	    {
	      "cbsa": 12540,
	      "naics": "51",
	      "actual": 0.27098,
	      "expected": 0.23818
	    },
	    {
	      "cbsa": 12540,
	      "naics": "52",
	      "actual": -0.0604,
	      "expected": -0.03505
	    },
	    {
	      "cbsa": 12540,
	      "naics": "53",
	      "actual": -0.08032,
	      "expected": 0.13232
	    },
	    {
	      "cbsa": 12540,
	      "naics": "54",
	      "actual": -0.04956,
	      "expected": 0.34818
	    },
	    {
	      "cbsa": 12540,
	      "naics": "55",
	      "actual": 0.87096,
	      "expected": 0.45112
	    },
	    {
	      "cbsa": 12540,
	      "naics": "61",
	      "actual": 0.28599,
	      "expected": 0.53321
	    },
	    {
	      "cbsa": 12540,
	      "naics": "62",
	      "actual": 0.25691,
	      "expected": 0.71299
	    },
	    {
	      "cbsa": 12540,
	      "naics": "71",
	      "actual": 0.36657,
	      "expected": 0.42277
	    },
	    {
	      "cbsa": 12540,
	      "naics": "72",
	      "actual": 0.26276,
	      "expected": 0.38674
	    },
	    {
	      "cbsa": 12540,
	      "naics": "81",
	      "actual": -0.34913,
	      "expected": -0.13548
	    }
	  ],
	  "12580": [
	    {
	      "cbsa": 12580,
	      "naics": "00",
	      "actual": -0.01017,
	      "expected": 0.17854
	    },
	    {
	      "cbsa": 12580,
	      "naics": "22",
	      "actual": -0.08532,
	      "expected": -0.12301
	    },
	    {
	      "cbsa": 12580,
	      "naics": "23",
	      "actual": 0.15417,
	      "expected": -0.04207
	    },
	    {
	      "cbsa": 12580,
	      "naics": "31",
	      "actual": -0.47425,
	      "expected": -0.3365
	    },
	    {
	      "cbsa": 12580,
	      "naics": "42",
	      "actual": -0.19237,
	      "expected": 0.00899
	    },
	    {
	      "cbsa": 12580,
	      "naics": "44",
	      "actual": -0.02942,
	      "expected": -0.00484
	    },
	    {
	      "cbsa": 12580,
	      "naics": "48",
	      "actual": 0.00985,
	      "expected": -0.07549
	    },
	    {
	      "cbsa": 12580,
	      "naics": "51",
	      "actual": -0.44126,
	      "expected": -0.21093
	    },
	    {
	      "cbsa": 12580,
	      "naics": "52",
	      "actual": -0.29687,
	      "expected": -0.0241
	    },
	    {
	      "cbsa": 12580,
	      "naics": "53",
	      "actual": -0.19306,
	      "expected": -0.04318
	    },
	    {
	      "cbsa": 12580,
	      "naics": "54",
	      "actual": -0.02545,
	      "expected": 0.26099
	    },
	    {
	      "cbsa": 12580,
	      "naics": "55",
	      "actual": 1.61823,
	      "expected": 1.73619
	    },
	    {
	      "cbsa": 12580,
	      "naics": "61",
	      "actual": -0.34785,
	      "expected": 0.13214
	    },
	    {
	      "cbsa": 12580,
	      "naics": "62",
	      "actual": 0.62666,
	      "expected": 0.52469
	    },
	    {
	      "cbsa": 12580,
	      "naics": "71",
	      "actual": 0.57766,
	      "expected": 0.47865
	    },
	    {
	      "cbsa": 12580,
	      "naics": "72",
	      "actual": 0.05852,
	      "expected": 0.23263
	    },
	    {
	      "cbsa": 12580,
	      "naics": "81",
	      "actual": 0.01044,
	      "expected": 0.06832
	    }
	  ],
	  "12940": [
	    {
	      "cbsa": 12940,
	      "naics": "00",
	      "actual": -0.04436,
	      "expected": 0.197
	    },
	    {
	      "cbsa": 12940,
	      "naics": "22",
	      "actual": -0.2999,
	      "expected": -0.14173
	    },
	    {
	      "cbsa": 12940,
	      "naics": "23",
	      "actual": -0.13357,
	      "expected": 0.22094
	    },
	    {
	      "cbsa": 12940,
	      "naics": "31",
	      "actual": -0.48804,
	      "expected": -0.08362
	    },
	    {
	      "cbsa": 12940,
	      "naics": "42",
	      "actual": -0.06321,
	      "expected": 0.04535
	    },
	    {
	      "cbsa": 12940,
	      "naics": "44",
	      "actual": -0.01027,
	      "expected": 0.1345
	    },
	    {
	      "cbsa": 12940,
	      "naics": "48",
	      "actual": 0.56834,
	      "expected": 0.41438
	    },
	    {
	      "cbsa": 12940,
	      "naics": "51",
	      "actual": 0.37421,
	      "expected": 0.3262
	    },
	    {
	      "cbsa": 12940,
	      "naics": "52",
	      "actual": -0.35526,
	      "expected": -0.0548
	    },
	    {
	      "cbsa": 12940,
	      "naics": "53",
	      "actual": -0.07782,
	      "expected": 0.18814
	    },
	    {
	      "cbsa": 12940,
	      "naics": "54",
	      "actual": 0.14672,
	      "expected": 0.34859
	    },
	    {
	      "cbsa": 12940,
	      "naics": "55",
	      "actual": 0.7638,
	      "expected": 0.41283
	    },
	    {
	      "cbsa": 12940,
	      "naics": "61",
	      "actual": 0.45275,
	      "expected": 0.70366
	    },
	    {
	      "cbsa": 12940,
	      "naics": "62",
	      "actual": -0.00251,
	      "expected": 0.30387
	    },
	    {
	      "cbsa": 12940,
	      "naics": "71",
	      "actual": -0.06112,
	      "expected": 0.11729
	    },
	    {
	      "cbsa": 12940,
	      "naics": "72",
	      "actual": 0.20648,
	      "expected": 0.35576
	    },
	    {
	      "cbsa": 12940,
	      "naics": "81",
	      "actual": -0.08506,
	      "expected": -0.03057
	    }
	  ],
	  "13820": [
	    {
	      "cbsa": 13820,
	      "naics": "00",
	      "actual": -0.15149,
	      "expected": 0.04696
	    },
	    {
	      "cbsa": 13820,
	      "naics": "22",
	      "actual": -0.11889,
	      "expected": 0.13212
	    },
	    {
	      "cbsa": 13820,
	      "naics": "23",
	      "actual": -0.32216,
	      "expected": -0.22167
	    },
	    {
	      "cbsa": 13820,
	      "naics": "31",
	      "actual": -0.39799,
	      "expected": -0.19799
	    },
	    {
	      "cbsa": 13820,
	      "naics": "42",
	      "actual": -0.1648,
	      "expected": -0.00892
	    },
	    {
	      "cbsa": 13820,
	      "naics": "44",
	      "actual": -0.15685,
	      "expected": 0.06124
	    },
	    {
	      "cbsa": 13820,
	      "naics": "48",
	      "actual": -0.24977,
	      "expected": 0.22209
	    },
	    {
	      "cbsa": 13820,
	      "naics": "51",
	      "actual": -0.41004,
	      "expected": -0.23187
	    },
	    {
	      "cbsa": 13820,
	      "naics": "52",
	      "actual": -0.26583,
	      "expected": 0.01671
	    },
	    {
	      "cbsa": 13820,
	      "naics": "53",
	      "actual": -0.17621,
	      "expected": -0.011
	    },
	    {
	      "cbsa": 13820,
	      "naics": "54",
	      "actual": -0.23579,
	      "expected": 0.03878
	    },
	    {
	      "cbsa": 13820,
	      "naics": "55",
	      "actual": 0.09169,
	      "expected": 0.27444
	    },
	    {
	      "cbsa": 13820,
	      "naics": "61",
	      "actual": 0.026,
	      "expected": 0.31835
	    },
	    {
	      "cbsa": 13820,
	      "naics": "62",
	      "actual": 0.07749,
	      "expected": 0.14742
	    },
	    {
	      "cbsa": 13820,
	      "naics": "71",
	      "actual": 0.36949,
	      "expected": 0.56369
	    },
	    {
	      "cbsa": 13820,
	      "naics": "72",
	      "actual": 0.1431,
	      "expected": 0.2318
	    },
	    {
	      "cbsa": 13820,
	      "naics": "81",
	      "actual": -0.22841,
	      "expected": 0.00714
	    }
	  ],
	  "14260": [
	    {
	      "cbsa": 14260,
	      "naics": "00",
	      "actual": 0.21377,
	      "expected": 0.32051
	    },
	    {
	      "cbsa": 14260,
	      "naics": "22",
	      "actual": 1.76143,
	      "expected": 2.29767
	    },
	    {
	      "cbsa": 14260,
	      "naics": "23",
	      "actual": -0.14184,
	      "expected": 0.07386
	    },
	    {
	      "cbsa": 14260,
	      "naics": "31",
	      "actual": -0.42961,
	      "expected": -0.20061
	    },
	    {
	      "cbsa": 14260,
	      "naics": "42",
	      "actual": 0.13415,
	      "expected": 0.22974
	    },
	    {
	      "cbsa": 14260,
	      "naics": "44",
	      "actual": 0.04707,
	      "expected": 0.30012
	    },
	    {
	      "cbsa": 14260,
	      "naics": "48",
	      "actual": -0.06282,
	      "expected": 0.24904
	    },
	    {
	      "cbsa": 14260,
	      "naics": "51",
	      "actual": 0.00657,
	      "expected": 0.08846
	    },
	    {
	      "cbsa": 14260,
	      "naics": "52",
	      "actual": 0.02788,
	      "expected": 0.21605
	    },
	    {
	      "cbsa": 14260,
	      "naics": "53",
	      "actual": -0.19203,
	      "expected": 0.05948
	    },
	    {
	      "cbsa": 14260,
	      "naics": "54",
	      "actual": 0.18403,
	      "expected": 0.41633
	    },
	    {
	      "cbsa": 14260,
	      "naics": "55",
	      "actual": -0.16401,
	      "expected": -0.18493
	    },
	    {
	      "cbsa": 14260,
	      "naics": "61",
	      "actual": 0.45442,
	      "expected": 0.50251
	    },
	    {
	      "cbsa": 14260,
	      "naics": "62",
	      "actual": 0.86265,
	      "expected": 0.7091
	    },
	    {
	      "cbsa": 14260,
	      "naics": "71",
	      "actual": 0.96506,
	      "expected": 0.39038
	    },
	    {
	      "cbsa": 14260,
	      "naics": "72",
	      "actual": 0.10666,
	      "expected": 0.32395
	    },
	    {
	      "cbsa": 14260,
	      "naics": "81",
	      "actual": -0.15046,
	      "expected": 0.25206
	    }
	  ],
	  "14860": [
	    {
	      "cbsa": 14860,
	      "naics": "00",
	      "actual": -0.06212,
	      "expected": 0.06938
	    },
	    {
	      "cbsa": 14860,
	      "naics": "22",
	      "actual": 0.27094,
	      "expected": -0.09147
	    },
	    {
	      "cbsa": 14860,
	      "naics": "23",
	      "actual": -0.1809,
	      "expected": -0.22843
	    },
	    {
	      "cbsa": 14860,
	      "naics": "31",
	      "actual": -0.28164,
	      "expected": -0.31514
	    },
	    {
	      "cbsa": 14860,
	      "naics": "42",
	      "actual": -0.11334,
	      "expected": -0.07421
	    },
	    {
	      "cbsa": 14860,
	      "naics": "44",
	      "actual": -0.03615,
	      "expected": -0.04115
	    },
	    {
	      "cbsa": 14860,
	      "naics": "48",
	      "actual": -0.24265,
	      "expected": -0.07364
	    },
	    {
	      "cbsa": 14860,
	      "naics": "51",
	      "actual": 0.54762,
	      "expected": 0.3205
	    },
	    {
	      "cbsa": 14860,
	      "naics": "52",
	      "actual": -0.1955,
	      "expected": -0.0131
	    },
	    {
	      "cbsa": 14860,
	      "naics": "53",
	      "actual": -0.21204,
	      "expected": -0.07321
	    },
	    {
	      "cbsa": 14860,
	      "naics": "54",
	      "actual": -0.20552,
	      "expected": 0.07328
	    },
	    {
	      "cbsa": 14860,
	      "naics": "55",
	      "actual": -0.12956,
	      "expected": 0.05053
	    },
	    {
	      "cbsa": 14860,
	      "naics": "61",
	      "actual": 0.13985,
	      "expected": 0.43602
	    },
	    {
	      "cbsa": 14860,
	      "naics": "62",
	      "actual": 0.10826,
	      "expected": 0.34556
	    },
	    {
	      "cbsa": 14860,
	      "naics": "71",
	      "actual": 0.11765,
	      "expected": 0.14804
	    },
	    {
	      "cbsa": 14860,
	      "naics": "72",
	      "actual": 0.27073,
	      "expected": 0.3316
	    },
	    {
	      "cbsa": 14860,
	      "naics": "81",
	      "actual": -0.04548,
	      "expected": 0.11507
	    }
	  ],
	  "15380": [
	    {
	      "cbsa": 15380,
	      "naics": "00",
	      "actual": -0.12852,
	      "expected": 0.16317
	    },
	    {
	      "cbsa": 15380,
	      "naics": "22",
	      "actual": 2.49035,
	      "expected": -2.32922
	    },
	    {
	      "cbsa": 15380,
	      "naics": "23",
	      "actual": -0.12117,
	      "expected": 0.09849
	    },
	    {
	      "cbsa": 15380,
	      "naics": "31",
	      "actual": -0.38815,
	      "expected": -0.22492
	    },
	    {
	      "cbsa": 15380,
	      "naics": "42",
	      "actual": -0.08671,
	      "expected": -0.02304
	    },
	    {
	      "cbsa": 15380,
	      "naics": "44",
	      "actual": -0.10231,
	      "expected": -0.06626
	    },
	    {
	      "cbsa": 15380,
	      "naics": "48",
	      "actual": -0.02265,
	      "expected": 0.03163
	    },
	    {
	      "cbsa": 15380,
	      "naics": "51",
	      "actual": -0.43086,
	      "expected": -0.20947
	    },
	    {
	      "cbsa": 15380,
	      "naics": "52",
	      "actual": -0.32869,
	      "expected": 0.47027
	    },
	    {
	      "cbsa": 15380,
	      "naics": "53",
	      "actual": -0.23002,
	      "expected": 0.05666
	    },
	    {
	      "cbsa": 15380,
	      "naics": "54",
	      "actual": -0.10288,
	      "expected": 0.21539
	    },
	    {
	      "cbsa": 15380,
	      "naics": "55",
	      "actual": 0.49903,
	      "expected": 1.14888
	    },
	    {
	      "cbsa": 15380,
	      "naics": "61",
	      "actual": -0.25984,
	      "expected": 0.0781
	    },
	    {
	      "cbsa": 15380,
	      "naics": "62",
	      "actual": -0.1305,
	      "expected": 0.11099
	    },
	    {
	      "cbsa": 15380,
	      "naics": "71",
	      "actual": -0.17122,
	      "expected": 0.14415
	    },
	    {
	      "cbsa": 15380,
	      "naics": "72",
	      "actual": 0.36159,
	      "expected": 0.38053
	    },
	    {
	      "cbsa": 15380,
	      "naics": "81",
	      "actual": -0.19264,
	      "expected": 0.13221
	    }
	  ],
	  "15980": [
	    {
	      "cbsa": 15980,
	      "naics": "00",
	      "actual": -0.31102,
	      "expected": 0.01014
	    },
	    {
	      "cbsa": 15980,
	      "naics": "22",
	      "actual": -0.05276,
	      "expected": -0.14858
	    },
	    {
	      "cbsa": 15980,
	      "naics": "23",
	      "actual": -0.22972,
	      "expected": -0.14937
	    },
	    {
	      "cbsa": 15980,
	      "naics": "31",
	      "actual": -0.50153,
	      "expected": -0.17135
	    },
	    {
	      "cbsa": 15980,
	      "naics": "42",
	      "actual": -0.08268,
	      "expected": 0.08446
	    },
	    {
	      "cbsa": 15980,
	      "naics": "44",
	      "actual": -0.18707,
	      "expected": 0.20486
	    },
	    {
	      "cbsa": 15980,
	      "naics": "48",
	      "actual": 0.46454,
	      "expected": 0.35044
	    },
	    {
	      "cbsa": 15980,
	      "naics": "51",
	      "actual": -0.45271,
	      "expected": -0.1312
	    },
	    {
	      "cbsa": 15980,
	      "naics": "52",
	      "actual": -0.36504,
	      "expected": 0.01792
	    },
	    {
	      "cbsa": 15980,
	      "naics": "53",
	      "actual": -0.31647,
	      "expected": -0.0121
	    },
	    {
	      "cbsa": 15980,
	      "naics": "54",
	      "actual": -0.00511,
	      "expected": 0.3273
	    },
	    {
	      "cbsa": 15980,
	      "naics": "55",
	      "actual": 0.27932,
	      "expected": 0.71049
	    },
	    {
	      "cbsa": 15980,
	      "naics": "61",
	      "actual": -0.35321,
	      "expected": 0.45474
	    },
	    {
	      "cbsa": 15980,
	      "naics": "62",
	      "actual": -0.21376,
	      "expected": 0.21401
	    },
	    {
	      "cbsa": 15980,
	      "naics": "71",
	      "actual": 0.30618,
	      "expected": 0.62779
	    },
	    {
	      "cbsa": 15980,
	      "naics": "72",
	      "actual": 0.13682,
	      "expected": 0.5754
	    },
	    {
	      "cbsa": 15980,
	      "naics": "81",
	      "actual": -0.25797,
	      "expected": 0.19492
	    }
	  ],
	  "16700": [
	    {
	      "cbsa": 16700,
	      "naics": "00",
	      "actual": 0.02588,
	      "expected": 0.24754
	    },
	    {
	      "cbsa": 16700,
	      "naics": "22",
	      "actual": -0.29188,
	      "expected": 0.01801
	    },
	    {
	      "cbsa": 16700,
	      "naics": "23",
	      "actual": -0.18155,
	      "expected": -0.09892
	    },
	    {
	      "cbsa": 16700,
	      "naics": "31",
	      "actual": 0.61754,
	      "expected": 0.32361
	    },
	    {
	      "cbsa": 16700,
	      "naics": "42",
	      "actual": -0.14025,
	      "expected": 0.03037
	    },
	    {
	      "cbsa": 16700,
	      "naics": "44",
	      "actual": -0.03442,
	      "expected": 0.10167
	    },
	    {
	      "cbsa": 16700,
	      "naics": "48",
	      "actual": -0.09051,
	      "expected": 0.13361
	    },
	    {
	      "cbsa": 16700,
	      "naics": "51",
	      "actual": -0.1518,
	      "expected": 0.20184
	    },
	    {
	      "cbsa": 16700,
	      "naics": "52",
	      "actual": 0.1533,
	      "expected": 0.25747
	    },
	    {
	      "cbsa": 16700,
	      "naics": "53",
	      "actual": 0.27632,
	      "expected": 0.29308
	    },
	    {
	      "cbsa": 16700,
	      "naics": "54",
	      "actual": -0.0561,
	      "expected": 0.4677
	    },
	    {
	      "cbsa": 16700,
	      "naics": "55",
	      "actual": 0.2025,
	      "expected": 0.22429
	    },
	    {
	      "cbsa": 16700,
	      "naics": "61",
	      "actual": 0.28392,
	      "expected": 0.34496
	    },
	    {
	      "cbsa": 16700,
	      "naics": "62",
	      "actual": 0.04899,
	      "expected": 0.34194
	    },
	    {
	      "cbsa": 16700,
	      "naics": "71",
	      "actual": -0.08731,
	      "expected": 0.2715
	    },
	    {
	      "cbsa": 16700,
	      "naics": "72",
	      "actual": 0.03187,
	      "expected": 0.27148
	    },
	    {
	      "cbsa": 16700,
	      "naics": "81",
	      "actual": -0.01028,
	      "expected": 0.25293
	    }
	  ],
	  "16740": [
	    {
	      "cbsa": 16740,
	      "naics": "00",
	      "actual": 0.44242,
	      "expected": 0.49257
	    },
	    {
	      "cbsa": 16740,
	      "naics": "22",
	      "actual": -0.61183,
	      "expected": -0.18679
	    },
	    {
	      "cbsa": 16740,
	      "naics": "23",
	      "actual": 0.33079,
	      "expected": 0.21848
	    },
	    {
	      "cbsa": 16740,
	      "naics": "31",
	      "actual": -0.63221,
	      "expected": -0.18287
	    },
	    {
	      "cbsa": 16740,
	      "naics": "42",
	      "actual": 0.22209,
	      "expected": 0.1626
	    },
	    {
	      "cbsa": 16740,
	      "naics": "44",
	      "actual": 0.1247,
	      "expected": 0.27992
	    },
	    {
	      "cbsa": 16740,
	      "naics": "48",
	      "actual": -0.17866,
	      "expected": 0.13314
	    },
	    {
	      "cbsa": 16740,
	      "naics": "51",
	      "actual": -0.14304,
	      "expected": 0.22489
	    },
	    {
	      "cbsa": 16740,
	      "naics": "52",
	      "actual": 0.62514,
	      "expected": 0.44969
	    },
	    {
	      "cbsa": 16740,
	      "naics": "53",
	      "actual": 0.34706,
	      "expected": 0.43731
	    },
	    {
	      "cbsa": 16740,
	      "naics": "54",
	      "actual": 0.79545,
	      "expected": 0.9856
	    },
	    {
	      "cbsa": 16740,
	      "naics": "55",
	      "actual": 0.97524,
	      "expected": 0.74515
	    },
	    {
	      "cbsa": 16740,
	      "naics": "61",
	      "actual": 1.61958,
	      "expected": 1.27419
	    },
	    {
	      "cbsa": 16740,
	      "naics": "62",
	      "actual": 0.4812,
	      "expected": 0.66299
	    },
	    {
	      "cbsa": 16740,
	      "naics": "71",
	      "actual": 2.38663,
	      "expected": 1.55145
	    },
	    {
	      "cbsa": 16740,
	      "naics": "72",
	      "actual": 0.61013,
	      "expected": 0.65611
	    },
	    {
	      "cbsa": 16740,
	      "naics": "81",
	      "actual": 0.14242,
	      "expected": 0.20858
	    }
	  ],
	  "16860": [
	    {
	      "cbsa": 16860,
	      "naics": "00",
	      "actual": -0.26323,
	      "expected": -0.0125
	    },
	    {
	      "cbsa": 16860,
	      "naics": "22",
	      "actual": -0.29528,
	      "expected": -0.37111
	    },
	    {
	      "cbsa": 16860,
	      "naics": "23",
	      "actual": 0.49562,
	      "expected": 0.11342
	    },
	    {
	      "cbsa": 16860,
	      "naics": "31",
	      "actual": -0.20286,
	      "expected": -0.18567
	    },
	    {
	      "cbsa": 16860,
	      "naics": "42",
	      "actual": -0.21849,
	      "expected": -0.1556
	    },
	    {
	      "cbsa": 16860,
	      "naics": "44",
	      "actual": -0.54513,
	      "expected": -0.17936
	    },
	    {
	      "cbsa": 16860,
	      "naics": "48",
	      "actual": -0.21579,
	      "expected": -0.0003
	    },
	    {
	      "cbsa": 16860,
	      "naics": "51",
	      "actual": -0.23303,
	      "expected": 0.09149
	    },
	    {
	      "cbsa": 16860,
	      "naics": "52",
	      "actual": -0.60644,
	      "expected": -0.13428
	    },
	    {
	      "cbsa": 16860,
	      "naics": "53",
	      "actual": -0.39917,
	      "expected": -0.08178
	    },
	    {
	      "cbsa": 16860,
	      "naics": "54",
	      "actual": 0.06219,
	      "expected": 0.10908
	    },
	    {
	      "cbsa": 16860,
	      "naics": "55",
	      "actual": -0.05875,
	      "expected": -0.52769
	    },
	    {
	      "cbsa": 16860,
	      "naics": "61",
	      "actual": -0.42557,
	      "expected": 0.05668
	    },
	    {
	      "cbsa": 16860,
	      "naics": "62",
	      "actual": 0.03189,
	      "expected": 0.58737
	    },
	    {
	      "cbsa": 16860,
	      "naics": "71",
	      "actual": -0.10631,
	      "expected": 0.32869
	    },
	    {
	      "cbsa": 16860,
	      "naics": "72",
	      "actual": -0.0532,
	      "expected": 0.17945
	    },
	    {
	      "cbsa": 16860,
	      "naics": "81",
	      "actual": -0.00818,
	      "expected": 0.17533
	    }
	  ],
	  "16980": [
	    {
	      "cbsa": 16980,
	      "naics": "00",
	      "actual": 0.20434,
	      "expected": 0.14028
	    },
	    {
	      "cbsa": 16980,
	      "naics": "22",
	      "actual": -0.70769,
	      "expected": 0.28859
	    },
	    {
	      "cbsa": 16980,
	      "naics": "23",
	      "actual": -0.00793,
	      "expected": -0.17443
	    },
	    {
	      "cbsa": 16980,
	      "naics": "31",
	      "actual": -0.29441,
	      "expected": -0.23242
	    },
	    {
	      "cbsa": 16980,
	      "naics": "42",
	      "actual": 0.44063,
	      "expected": 0.03747
	    },
	    {
	      "cbsa": 16980,
	      "naics": "44",
	      "actual": 0.28024,
	      "expected": 0.10545
	    },
	    {
	      "cbsa": 16980,
	      "naics": "48",
	      "actual": -0.29297,
	      "expected": 0.11526
	    },
	    {
	      "cbsa": 16980,
	      "naics": "51",
	      "actual": 0.11619,
	      "expected": -0.03629
	    },
	    {
	      "cbsa": 16980,
	      "naics": "52",
	      "actual": -0.0174,
	      "expected": -0.04834
	    },
	    {
	      "cbsa": 16980,
	      "naics": "53",
	      "actual": -0.01085,
	      "expected": -0.04358
	    },
	    {
	      "cbsa": 16980,
	      "naics": "54",
	      "actual": 0.4682,
	      "expected": 0.27801
	    },
	    {
	      "cbsa": 16980,
	      "naics": "55",
	      "actual": 0.04624,
	      "expected": 0.22629
	    },
	    {
	      "cbsa": 16980,
	      "naics": "61",
	      "actual": 0.43585,
	      "expected": 0.51205
	    },
	    {
	      "cbsa": 16980,
	      "naics": "62",
	      "actual": 0.13742,
	      "expected": 0.42308
	    },
	    {
	      "cbsa": 16980,
	      "naics": "71",
	      "actual": 0.23514,
	      "expected": 0.12542
	    },
	    {
	      "cbsa": 16980,
	      "naics": "72",
	      "actual": 0.52485,
	      "expected": 0.30951
	    },
	    {
	      "cbsa": 16980,
	      "naics": "81",
	      "actual": 0.40096,
	      "expected": 0.15434
	    }
	  ],
	  "17140": [
	    {
	      "cbsa": 17140,
	      "naics": "00",
	      "actual": 0.07408,
	      "expected": 0.1763
	    },
	    {
	      "cbsa": 17140,
	      "naics": "22",
	      "actual": -0.65921,
	      "expected": -0.15821
	    },
	    {
	      "cbsa": 17140,
	      "naics": "23",
	      "actual": -0.08736,
	      "expected": -0.15873
	    },
	    {
	      "cbsa": 17140,
	      "naics": "31",
	      "actual": -0.08714,
	      "expected": -0.10702
	    },
	    {
	      "cbsa": 17140,
	      "naics": "42",
	      "actual": 0.23615,
	      "expected": 0.08416
	    },
	    {
	      "cbsa": 17140,
	      "naics": "44",
	      "actual": -0.17338,
	      "expected": -0.04559
	    },
	    {
	      "cbsa": 17140,
	      "naics": "48",
	      "actual": -0.53846,
	      "expected": 0.02043
	    },
	    {
	      "cbsa": 17140,
	      "naics": "51",
	      "actual": -0.17491,
	      "expected": -0.10834
	    },
	    {
	      "cbsa": 17140,
	      "naics": "52",
	      "actual": -0.10886,
	      "expected": 0.11473
	    },
	    {
	      "cbsa": 17140,
	      "naics": "53",
	      "actual": -0.06677,
	      "expected": -0.02593
	    },
	    {
	      "cbsa": 17140,
	      "naics": "54",
	      "actual": 0.02454,
	      "expected": 0.28776
	    },
	    {
	      "cbsa": 17140,
	      "naics": "55",
	      "actual": -0.12156,
	      "expected": 0.3544
	    },
	    {
	      "cbsa": 17140,
	      "naics": "61",
	      "actual": -0.05591,
	      "expected": 0.2911
	    },
	    {
	      "cbsa": 17140,
	      "naics": "62",
	      "actual": 0.77492,
	      "expected": 0.35819
	    },
	    {
	      "cbsa": 17140,
	      "naics": "71",
	      "actual": 0.22373,
	      "expected": 0.18014
	    },
	    {
	      "cbsa": 17140,
	      "naics": "72",
	      "actual": 0.10833,
	      "expected": 0.17879
	    },
	    {
	      "cbsa": 17140,
	      "naics": "81",
	      "actual": -0.08632,
	      "expected": 0.04633
	    }
	  ],
	  "17460": [
	    {
	      "cbsa": 17460,
	      "naics": "00",
	      "actual": 0.29741,
	      "expected": 0.03136
	    },
	    {
	      "cbsa": 17460,
	      "naics": "22",
	      "actual": -0.14365,
	      "expected": 0.26093
	    },
	    {
	      "cbsa": 17460,
	      "naics": "23",
	      "actual": -0.15294,
	      "expected": -0.1606
	    },
	    {
	      "cbsa": 17460,
	      "naics": "31",
	      "actual": -0.40276,
	      "expected": -0.1905
	    },
	    {
	      "cbsa": 17460,
	      "naics": "42",
	      "actual": -0.37589,
	      "expected": -0.08914
	    },
	    {
	      "cbsa": 17460,
	      "naics": "44",
	      "actual": -0.30007,
	      "expected": -0.10316
	    },
	    {
	      "cbsa": 17460,
	      "naics": "48",
	      "actual": -0.27038,
	      "expected": -0.08291
	    },
	    {
	      "cbsa": 17460,
	      "naics": "51",
	      "actual": -0.39929,
	      "expected": -0.28157
	    },
	    {
	      "cbsa": 17460,
	      "naics": "52",
	      "actual": -0.43577,
	      "expected": -0.22118
	    },
	    {
	      "cbsa": 17460,
	      "naics": "53",
	      "actual": -0.16346,
	      "expected": -0.03436
	    },
	    {
	      "cbsa": 17460,
	      "naics": "54",
	      "actual": 0.0059,
	      "expected": 0.10889
	    },
	    {
	      "cbsa": 17460,
	      "naics": "55",
	      "actual": 0.8599,
	      "expected": 0.34164
	    },
	    {
	      "cbsa": 17460,
	      "naics": "61",
	      "actual": 0.02847,
	      "expected": 0.1875
	    },
	    {
	      "cbsa": 17460,
	      "naics": "62",
	      "actual": 1.39525,
	      "expected": 0.17399
	    },
	    {
	      "cbsa": 17460,
	      "naics": "71",
	      "actual": 1.26794,
	      "expected": 0.37191
	    },
	    {
	      "cbsa": 17460,
	      "naics": "72",
	      "actual": 0.46602,
	      "expected": 0.12171
	    },
	    {
	      "cbsa": 17460,
	      "naics": "81",
	      "actual": -0.07891,
	      "expected": -0.08918
	    }
	  ],
	  "17820": [
	    {
	      "cbsa": 17820,
	      "naics": "00",
	      "actual": -0.05474,
	      "expected": 0.08237
	    },
	    {
	      "cbsa": 17820,
	      "naics": "22",
	      "actual": -0.78406,
	      "expected": -0.07994
	    },
	    {
	      "cbsa": 17820,
	      "naics": "23",
	      "actual": 0.05653,
	      "expected": -0.16099
	    },
	    {
	      "cbsa": 17820,
	      "naics": "31",
	      "actual": -0.52971,
	      "expected": -0.51998
	    },
	    {
	      "cbsa": 17820,
	      "naics": "42",
	      "actual": -0.28626,
	      "expected": -0.20451
	    },
	    {
	      "cbsa": 17820,
	      "naics": "44",
	      "actual": -0.26836,
	      "expected": 0.12972
	    },
	    {
	      "cbsa": 17820,
	      "naics": "48",
	      "actual": -0.33945,
	      "expected": 0.11526
	    },
	    {
	      "cbsa": 17820,
	      "naics": "51",
	      "actual": -0.36983,
	      "expected": -0.57808
	    },
	    {
	      "cbsa": 17820,
	      "naics": "52",
	      "actual": -0.18736,
	      "expected": 0.00989
	    },
	    {
	      "cbsa": 17820,
	      "naics": "53",
	      "actual": -0.02895,
	      "expected": -0.0204
	    },
	    {
	      "cbsa": 17820,
	      "naics": "54",
	      "actual": 0.39175,
	      "expected": 0.3196
	    },
	    {
	      "cbsa": 17820,
	      "naics": "55",
	      "actual": 0.14892,
	      "expected": 0.27644
	    },
	    {
	      "cbsa": 17820,
	      "naics": "61",
	      "actual": 1.73654,
	      "expected": 1.26211
	    },
	    {
	      "cbsa": 17820,
	      "naics": "62",
	      "actual": 0.56373,
	      "expected": 0.65588
	    },
	    {
	      "cbsa": 17820,
	      "naics": "71",
	      "actual": 0.02289,
	      "expected": 0.16967
	    },
	    {
	      "cbsa": 17820,
	      "naics": "72",
	      "actual": -0.02527,
	      "expected": 0.19422
	    },
	    {
	      "cbsa": 17820,
	      "naics": "81",
	      "actual": -0.32303,
	      "expected": 0.06844
	    }
	  ],
	  "17900": [
	    {
	      "cbsa": 17900,
	      "naics": "00",
	      "actual": -0.13207,
	      "expected": 0.13509
	    },
	    {
	      "cbsa": 17900,
	      "naics": "22",
	      "actual": -0.75056,
	      "expected": 0.27575
	    },
	    {
	      "cbsa": 17900,
	      "naics": "23",
	      "actual": -0.45224,
	      "expected": -0.18847
	    },
	    {
	      "cbsa": 17900,
	      "naics": "31",
	      "actual": -0.17708,
	      "expected": -0.05532
	    },
	    {
	      "cbsa": 17900,
	      "naics": "42",
	      "actual": -0.24235,
	      "expected": 0.09623
	    },
	    {
	      "cbsa": 17900,
	      "naics": "44",
	      "actual": -0.24089,
	      "expected": 0.07258
	    },
	    {
	      "cbsa": 17900,
	      "naics": "48",
	      "actual": -0.20937,
	      "expected": 0.28359
	    },
	    {
	      "cbsa": 17900,
	      "naics": "51",
	      "actual": -0.09674,
	      "expected": -0.14976
	    },
	    {
	      "cbsa": 17900,
	      "naics": "52",
	      "actual": -0.22462,
	      "expected": -0.0484
	    },
	    {
	      "cbsa": 17900,
	      "naics": "53",
	      "actual": -0.11431,
	      "expected": 0.13132
	    },
	    {
	      "cbsa": 17900,
	      "naics": "54",
	      "actual": -0.00452,
	      "expected": 0.23735
	    },
	    {
	      "cbsa": 17900,
	      "naics": "55",
	      "actual": 2.10604,
	      "expected": -0.91475
	    },
	    {
	      "cbsa": 17900,
	      "naics": "61",
	      "actual": 0.43226,
	      "expected": 0.74199
	    },
	    {
	      "cbsa": 17900,
	      "naics": "62",
	      "actual": -0.05604,
	      "expected": 0.27921
	    },
	    {
	      "cbsa": 17900,
	      "naics": "71",
	      "actual": -0.0948,
	      "expected": 0.08429
	    },
	    {
	      "cbsa": 17900,
	      "naics": "72",
	      "actual": -0.00878,
	      "expected": 0.28877
	    },
	    {
	      "cbsa": 17900,
	      "naics": "81",
	      "actual": 0.2338,
	      "expected": 0.10254
	    }
	  ],
	  "18140": [
	    {
	      "cbsa": 18140,
	      "naics": "00",
	      "actual": 0.30288,
	      "expected": 0.32325
	    },
	    {
	      "cbsa": 18140,
	      "naics": "22",
	      "actual": 0.51127,
	      "expected": 0.31666
	    },
	    {
	      "cbsa": 18140,
	      "naics": "23",
	      "actual": -0.0273,
	      "expected": -0.10701
	    },
	    {
	      "cbsa": 18140,
	      "naics": "31",
	      "actual": -0.41426,
	      "expected": -0.2436
	    },
	    {
	      "cbsa": 18140,
	      "naics": "42",
	      "actual": -0.20673,
	      "expected": 0.08512
	    },
	    {
	      "cbsa": 18140,
	      "naics": "44",
	      "actual": -0.15658,
	      "expected": -0.02639
	    },
	    {
	      "cbsa": 18140,
	      "naics": "48",
	      "actual": 0.11139,
	      "expected": 0.38138
	    },
	    {
	      "cbsa": 18140,
	      "naics": "51",
	      "actual": -0.05886,
	      "expected": -0.04422
	    },
	    {
	      "cbsa": 18140,
	      "naics": "52",
	      "actual": 0.63267,
	      "expected": 0.15394
	    },
	    {
	      "cbsa": 18140,
	      "naics": "53",
	      "actual": 0.08174,
	      "expected": -0.08612
	    },
	    {
	      "cbsa": 18140,
	      "naics": "54",
	      "actual": 0.11921,
	      "expected": 0.26453
	    },
	    {
	      "cbsa": 18140,
	      "naics": "55",
	      "actual": 0.97131,
	      "expected": 1.49157
	    },
	    {
	      "cbsa": 18140,
	      "naics": "61",
	      "actual": 0.53069,
	      "expected": 0.65895
	    },
	    {
	      "cbsa": 18140,
	      "naics": "62",
	      "actual": 0.77692,
	      "expected": 0.78047
	    },
	    {
	      "cbsa": 18140,
	      "naics": "71",
	      "actual": 0.54949,
	      "expected": 0.28433
	    },
	    {
	      "cbsa": 18140,
	      "naics": "72",
	      "actual": 0.1839,
	      "expected": 0.24414
	    },
	    {
	      "cbsa": 18140,
	      "naics": "81",
	      "actual": -0.02514,
	      "expected": 0.00477
	    }
	  ],
	  "19100": [
	    {
	      "cbsa": 19100,
	      "naics": "00",
	      "actual": 0.01006,
	      "expected": 0.2858
	    },
	    {
	      "cbsa": 19100,
	      "naics": "22",
	      "actual": -0.64488,
	      "expected": -0.15601
	    },
	    {
	      "cbsa": 19100,
	      "naics": "23",
	      "actual": 0.22794,
	      "expected": 0.25415
	    },
	    {
	      "cbsa": 19100,
	      "naics": "31",
	      "actual": -0.42685,
	      "expected": -0.19337
	    },
	    {
	      "cbsa": 19100,
	      "naics": "42",
	      "actual": 0.22462,
	      "expected": 0.22874
	    },
	    {
	      "cbsa": 19100,
	      "naics": "44",
	      "actual": -0.00522,
	      "expected": 0.21264
	    },
	    {
	      "cbsa": 19100,
	      "naics": "48",
	      "actual": -0.17238,
	      "expected": 0.19993
	    },
	    {
	      "cbsa": 19100,
	      "naics": "51",
	      "actual": -0.26804,
	      "expected": -0.15607
	    },
	    {
	      "cbsa": 19100,
	      "naics": "52",
	      "actual": -0.00553,
	      "expected": 0.30259
	    },
	    {
	      "cbsa": 19100,
	      "naics": "53",
	      "actual": 0.13204,
	      "expected": 0.20459
	    },
	    {
	      "cbsa": 19100,
	      "naics": "54",
	      "actual": 0.28814,
	      "expected": 0.5483
	    },
	    {
	      "cbsa": 19100,
	      "naics": "55",
	      "actual": 1.48673,
	      "expected": 1.86371
	    },
	    {
	      "cbsa": 19100,
	      "naics": "61",
	      "actual": 0.26594,
	      "expected": 0.8799
	    },
	    {
	      "cbsa": 19100,
	      "naics": "62",
	      "actual": 0.14773,
	      "expected": 0.63765
	    },
	    {
	      "cbsa": 19100,
	      "naics": "71",
	      "actual": 0.38183,
	      "expected": 0.4753
	    },
	    {
	      "cbsa": 19100,
	      "naics": "72",
	      "actual": 0.10596,
	      "expected": 0.41758
	    },
	    {
	      "cbsa": 19100,
	      "naics": "81",
	      "actual": -0.09288,
	      "expected": 0.22615
	    }
	  ],
	  "19430": [
	    {
	      "cbsa": 19430,
	      "naics": "00",
	      "actual": -0.08979,
	      "expected": 0.03751
	    },
	    {
	      "cbsa": 19430,
	      "naics": "22",
	      "actual": -0.69718,
	      "expected": -0.14335
	    },
	    {
	      "cbsa": 19430,
	      "naics": "23",
	      "actual": -0.31968,
	      "expected": -0.19994
	    },
	    {
	      "cbsa": 19430,
	      "naics": "31",
	      "actual": -0.4851,
	      "expected": -0.32622
	    },
	    {
	      "cbsa": 19430,
	      "naics": "42",
	      "actual": -0.22608,
	      "expected": -0.05101
	    },
	    {
	      "cbsa": 19430,
	      "naics": "44",
	      "actual": -0.10202,
	      "expected": -0.07341
	    },
	    {
	      "cbsa": 19430,
	      "naics": "48",
	      "actual": -0.4516,
	      "expected": 0.0771
	    },
	    {
	      "cbsa": 19430,
	      "naics": "51",
	      "actual": -0.14575,
	      "expected": -0.01036
	    },
	    {
	      "cbsa": 19430,
	      "naics": "52",
	      "actual": 0.15538,
	      "expected": 0.09313
	    },
	    {
	      "cbsa": 19430,
	      "naics": "53",
	      "actual": -0.3333,
	      "expected": -0.0926
	    },
	    {
	      "cbsa": 19430,
	      "naics": "54",
	      "actual": -0.09255,
	      "expected": 0.16223
	    },
	    {
	      "cbsa": 19430,
	      "naics": "55",
	      "actual": -0.64394,
	      "expected": -0.17913
	    },
	    {
	      "cbsa": 19430,
	      "naics": "61",
	      "actual": 7.73966,
	      "expected": 0.40827
	    },
	    {
	      "cbsa": 19430,
	      "naics": "62",
	      "actual": -0.05372,
	      "expected": 0.26001
	    },
	    {
	      "cbsa": 19430,
	      "naics": "71",
	      "actual": -0.05021,
	      "expected": 0.05721
	    },
	    {
	      "cbsa": 19430,
	      "naics": "72",
	      "actual": 0.009,
	      "expected": 0.1108
	    },
	    {
	      "cbsa": 19430,
	      "naics": "81",
	      "actual": -0.35373,
	      "expected": -0.08762
	    }
	  ],
	  "19660": [
	    {
	      "cbsa": 19660,
	      "naics": "00",
	      "actual": -0.00021,
	      "expected": 0.21545
	    },
	    {
	      "cbsa": 19660,
	      "naics": "22",
	      "actual": 0.53837,
	      "expected": -0.61229
	    },
	    {
	      "cbsa": 19660,
	      "naics": "23",
	      "actual": -0.17459,
	      "expected": -0.09315
	    },
	    {
	      "cbsa": 19660,
	      "naics": "31",
	      "actual": -0.19031,
	      "expected": -0.0782
	    },
	    {
	      "cbsa": 19660,
	      "naics": "42",
	      "actual": -0.03347,
	      "expected": 0.07853
	    },
	    {
	      "cbsa": 19660,
	      "naics": "44",
	      "actual": -0.2569,
	      "expected": 0.06539
	    },
	    {
	      "cbsa": 19660,
	      "naics": "48",
	      "actual": -0.00372,
	      "expected": 0.21516
	    },
	    {
	      "cbsa": 19660,
	      "naics": "51",
	      "actual": -0.66136,
	      "expected": -0.53498
	    },
	    {
	      "cbsa": 19660,
	      "naics": "52",
	      "actual": -0.12097,
	      "expected": -0.03539
	    },
	    {
	      "cbsa": 19660,
	      "naics": "53",
	      "actual": -0.39014,
	      "expected": -0.16731
	    },
	    {
	      "cbsa": 19660,
	      "naics": "54",
	      "actual": -0.08863,
	      "expected": 0.07649
	    },
	    {
	      "cbsa": 19660,
	      "naics": "55",
	      "actual": 0.21166,
	      "expected": 0.16621
	    },
	    {
	      "cbsa": 19660,
	      "naics": "61",
	      "actual": 0.42762,
	      "expected": 0.11661
	    },
	    {
	      "cbsa": 19660,
	      "naics": "62",
	      "actual": 0.69585,
	      "expected": 1.01912
	    },
	    {
	      "cbsa": 19660,
	      "naics": "71",
	      "actual": -0.0217,
	      "expected": 0.24679
	    },
	    {
	      "cbsa": 19660,
	      "naics": "72",
	      "actual": -0.12267,
	      "expected": 0.16937
	    },
	    {
	      "cbsa": 19660,
	      "naics": "81",
	      "actual": -0.26837,
	      "expected": 0.01238
	    }
	  ],
	  "19740": [
	    {
	      "cbsa": 19740,
	      "naics": "00",
	      "actual": 0.10985,
	      "expected": 0.30312
	    },
	    {
	      "cbsa": 19740,
	      "naics": "22",
	      "actual": 0.35921,
	      "expected": -0.54833
	    },
	    {
	      "cbsa": 19740,
	      "naics": "23",
	      "actual": -0.00316,
	      "expected": 0.0791
	    },
	    {
	      "cbsa": 19740,
	      "naics": "31",
	      "actual": -0.16434,
	      "expected": -0.0117
	    },
	    {
	      "cbsa": 19740,
	      "naics": "42",
	      "actual": 0.20109,
	      "expected": 0.14732
	    },
	    {
	      "cbsa": 19740,
	      "naics": "44",
	      "actual": 0.06244,
	      "expected": 0.22662
	    },
	    {
	      "cbsa": 19740,
	      "naics": "48",
	      "actual": -0.36984,
	      "expected": -0.07598
	    },
	    {
	      "cbsa": 19740,
	      "naics": "51",
	      "actual": -0.50015,
	      "expected": -0.09581
	    },
	    {
	      "cbsa": 19740,
	      "naics": "52",
	      "actual": -0.11804,
	      "expected": 0.0895
	    },
	    {
	      "cbsa": 19740,
	      "naics": "53",
	      "actual": 0.15712,
	      "expected": 0.02115
	    },
	    {
	      "cbsa": 19740,
	      "naics": "54",
	      "actual": 0.23599,
	      "expected": 0.5126
	    },
	    {
	      "cbsa": 19740,
	      "naics": "55",
	      "actual": 1.05853,
	      "expected": 0.88607
	    },
	    {
	      "cbsa": 19740,
	      "naics": "61",
	      "actual": 0.25472,
	      "expected": 0.24162
	    },
	    {
	      "cbsa": 19740,
	      "naics": "62",
	      "actual": 0.1487,
	      "expected": 0.58401
	    },
	    {
	      "cbsa": 19740,
	      "naics": "71",
	      "actual": 0.42024,
	      "expected": 0.27589
	    },
	    {
	      "cbsa": 19740,
	      "naics": "72",
	      "actual": 0.17386,
	      "expected": 0.32742
	    },
	    {
	      "cbsa": 19740,
	      "naics": "81",
	      "actual": 0.17371,
	      "expected": 0.26339
	    }
	  ],
	  "19780": [
	    {
	      "cbsa": 19780,
	      "naics": "00",
	      "actual": -0.15818,
	      "expected": 0.17071
	    },
	    {
	      "cbsa": 19780,
	      "naics": "22",
	      "actual": -0.76766,
	      "expected": -0.52665
	    },
	    {
	      "cbsa": 19780,
	      "naics": "23",
	      "actual": -0.14503,
	      "expected": 0.08742
	    },
	    {
	      "cbsa": 19780,
	      "naics": "31",
	      "actual": -0.48691,
	      "expected": -0.12191
	    },
	    {
	      "cbsa": 19780,
	      "naics": "42",
	      "actual": -0.21307,
	      "expected": 0.11407
	    },
	    {
	      "cbsa": 19780,
	      "naics": "44",
	      "actual": -0.18071,
	      "expected": 0.12454
	    },
	    {
	      "cbsa": 19780,
	      "naics": "48",
	      "actual": -0.39062,
	      "expected": 0.02018
	    },
	    {
	      "cbsa": 19780,
	      "naics": "51",
	      "actual": -0.37452,
	      "expected": -0.17637
	    },
	    {
	      "cbsa": 19780,
	      "naics": "52",
	      "actual": -0.24076,
	      "expected": 0.12086
	    },
	    {
	      "cbsa": 19780,
	      "naics": "53",
	      "actual": -0.363,
	      "expected": 0.07077
	    },
	    {
	      "cbsa": 19780,
	      "naics": "54",
	      "actual": -0.04092,
	      "expected": 0.46043
	    },
	    {
	      "cbsa": 19780,
	      "naics": "55",
	      "actual": 2.13387,
	      "expected": 1.77792
	    },
	    {
	      "cbsa": 19780,
	      "naics": "61",
	      "actual": 0.14232,
	      "expected": 0.53851
	    },
	    {
	      "cbsa": 19780,
	      "naics": "62",
	      "actual": 0.17829,
	      "expected": 0.4167
	    },
	    {
	      "cbsa": 19780,
	      "naics": "71",
	      "actual": -0.01883,
	      "expected": 0.03876
	    },
	    {
	      "cbsa": 19780,
	      "naics": "72",
	      "actual": 0.01903,
	      "expected": 0.28884
	    },
	    {
	      "cbsa": 19780,
	      "naics": "81",
	      "actual": -0.17793,
	      "expected": 0.17399
	    }
	  ],
	  "19820": [
	    {
	      "cbsa": 19820,
	      "naics": "00",
	      "actual": 0.02204,
	      "expected": 0.10532
	    },
	    {
	      "cbsa": 19820,
	      "naics": "22",
	      "actual": 3.40745,
	      "expected": -0.23634
	    },
	    {
	      "cbsa": 19820,
	      "naics": "23",
	      "actual": -0.40934,
	      "expected": -0.23234
	    },
	    {
	      "cbsa": 19820,
	      "naics": "31",
	      "actual": -0.50613,
	      "expected": -0.27373
	    },
	    {
	      "cbsa": 19820,
	      "naics": "42",
	      "actual": -0.20092,
	      "expected": -0.04347
	    },
	    {
	      "cbsa": 19820,
	      "naics": "44",
	      "actual": -0.30807,
	      "expected": -0.07315
	    },
	    {
	      "cbsa": 19820,
	      "naics": "48",
	      "actual": -0.06803,
	      "expected": 0.04625
	    },
	    {
	      "cbsa": 19820,
	      "naics": "51",
	      "actual": -0.81272,
	      "expected": 0.27448
	    },
	    {
	      "cbsa": 19820,
	      "naics": "52",
	      "actual": 0.22493,
	      "expected": 0.03024
	    },
	    {
	      "cbsa": 19820,
	      "naics": "53",
	      "actual": -0.12999,
	      "expected": 0.03767
	    },
	    {
	      "cbsa": 19820,
	      "naics": "54",
	      "actual": 0.37015,
	      "expected": 0.27813
	    },
	    {
	      "cbsa": 19820,
	      "naics": "55",
	      "actual": 3.55193,
	      "expected": 0.16277
	    },
	    {
	      "cbsa": 19820,
	      "naics": "61",
	      "actual": -0.39051,
	      "expected": 0.37361
	    },
	    {
	      "cbsa": 19820,
	      "naics": "62",
	      "actual": -0.00811,
	      "expected": 0.28908
	    },
	    {
	      "cbsa": 19820,
	      "naics": "71",
	      "actual": -0.26801,
	      "expected": -0.53967
	    },
	    {
	      "cbsa": 19820,
	      "naics": "72",
	      "actual": 0.24208,
	      "expected": 0.24117
	    },
	    {
	      "cbsa": 19820,
	      "naics": "81",
	      "actual": -0.50169,
	      "expected": -0.01271
	    }
	  ],
	  "21340": [
	    {
	      "cbsa": 21340,
	      "naics": "00",
	      "actual": -0.13147,
	      "expected": 0.16072
	    },
	    {
	      "cbsa": 21340,
	      "naics": "22",
	      "actual": -0.08963,
	      "expected": 0.25354
	    },
	    {
	      "cbsa": 21340,
	      "naics": "23",
	      "actual": 0.12571,
	      "expected": 0.40757
	    },
	    {
	      "cbsa": 21340,
	      "naics": "31",
	      "actual": -0.38875,
	      "expected": -0.46758
	    },
	    {
	      "cbsa": 21340,
	      "naics": "42",
	      "actual": -0.18865,
	      "expected": 0.02073
	    },
	    {
	      "cbsa": 21340,
	      "naics": "44",
	      "actual": -0.29717,
	      "expected": 0.03987
	    },
	    {
	      "cbsa": 21340,
	      "naics": "48",
	      "actual": -0.46748,
	      "expected": -0.1223
	    },
	    {
	      "cbsa": 21340,
	      "naics": "51",
	      "actual": -0.42211,
	      "expected": -0.17809
	    },
	    {
	      "cbsa": 21340,
	      "naics": "52",
	      "actual": -0.41963,
	      "expected": -0.0422
	    },
	    {
	      "cbsa": 21340,
	      "naics": "53",
	      "actual": 0.45357,
	      "expected": 0.45525
	    },
	    {
	      "cbsa": 21340,
	      "naics": "54",
	      "actual": 0.28932,
	      "expected": 0.59492
	    },
	    {
	      "cbsa": 21340,
	      "naics": "55",
	      "actual": 0.11937,
	      "expected": 0.10939
	    },
	    {
	      "cbsa": 21340,
	      "naics": "61",
	      "actual": 0.54072,
	      "expected": 0.78519
	    },
	    {
	      "cbsa": 21340,
	      "naics": "62",
	      "actual": 0.13431,
	      "expected": 0.51014
	    },
	    {
	      "cbsa": 21340,
	      "naics": "71",
	      "actual": 0.15057,
	      "expected": 0.06106
	    },
	    {
	      "cbsa": 21340,
	      "naics": "72",
	      "actual": 0.06845,
	      "expected": 0.37934
	    },
	    {
	      "cbsa": 21340,
	      "naics": "81",
	      "actual": -0.14803,
	      "expected": 0.08161
	    }
	  ],
	  "23420": [
	    {
	      "cbsa": 23420,
	      "naics": "00",
	      "actual": 0.3513,
	      "expected": 0.4036
	    },
	    {
	      "cbsa": 23420,
	      "naics": "22",
	      "actual": 0.41245,
	      "expected": 0.17908
	    },
	    {
	      "cbsa": 23420,
	      "naics": "23",
	      "actual": -0.26996,
	      "expected": -0.28954
	    },
	    {
	      "cbsa": 23420,
	      "naics": "31",
	      "actual": -0.34665,
	      "expected": -0.17956
	    },
	    {
	      "cbsa": 23420,
	      "naics": "42",
	      "actual": -0.05035,
	      "expected": 0.1281
	    },
	    {
	      "cbsa": 23420,
	      "naics": "44",
	      "actual": -0.05168,
	      "expected": 0.05893
	    },
	    {
	      "cbsa": 23420,
	      "naics": "48",
	      "actual": -0.03032,
	      "expected": 0.20546
	    },
	    {
	      "cbsa": 23420,
	      "naics": "51",
	      "actual": -0.10911,
	      "expected": 0.18625
	    },
	    {
	      "cbsa": 23420,
	      "naics": "52",
	      "actual": -0.26476,
	      "expected": 0.05324
	    },
	    {
	      "cbsa": 23420,
	      "naics": "53",
	      "actual": -0.06602,
	      "expected": 0.09865
	    },
	    {
	      "cbsa": 23420,
	      "naics": "54",
	      "actual": 0.01963,
	      "expected": 0.17096
	    },
	    {
	      "cbsa": 23420,
	      "naics": "55",
	      "actual": -0.52719,
	      "expected": -0.51419
	    },
	    {
	      "cbsa": 23420,
	      "naics": "61",
	      "actual": 0.06139,
	      "expected": 0.4308
	    },
	    {
	      "cbsa": 23420,
	      "naics": "62",
	      "actual": 0.71757,
	      "expected": 1.06799
	    },
	    {
	      "cbsa": 23420,
	      "naics": "71",
	      "actual": 0.24901,
	      "expected": 0.2259
	    },
	    {
	      "cbsa": 23420,
	      "naics": "72",
	      "actual": 0.39843,
	      "expected": 0.41915
	    },
	    {
	      "cbsa": 23420,
	      "naics": "81",
	      "actual": -0.55064,
	      "expected": -0.07913
	    }
	  ],
	  "24340": [
	    {
	      "cbsa": 24340,
	      "naics": "00",
	      "actual": -0.2791,
	      "expected": 0.15338
	    },
	    {
	      "cbsa": 24340,
	      "naics": "22",
	      "actual": -0.50287,
	      "expected": 0.23349
	    },
	    {
	      "cbsa": 24340,
	      "naics": "23",
	      "actual": -0.36825,
	      "expected": -0.11667
	    },
	    {
	      "cbsa": 24340,
	      "naics": "31",
	      "actual": -0.68317,
	      "expected": -0.05349
	    },
	    {
	      "cbsa": 24340,
	      "naics": "42",
	      "actual": -0.32019,
	      "expected": 0.12566
	    },
	    {
	      "cbsa": 24340,
	      "naics": "44",
	      "actual": -0.44897,
	      "expected": -0.04932
	    },
	    {
	      "cbsa": 24340,
	      "naics": "48",
	      "actual": -0.36817,
	      "expected": 0.18949
	    },
	    {
	      "cbsa": 24340,
	      "naics": "51",
	      "actual": -0.66624,
	      "expected": -0.1153
	    },
	    {
	      "cbsa": 24340,
	      "naics": "52",
	      "actual": -0.37167,
	      "expected": 0.17293
	    },
	    {
	      "cbsa": 24340,
	      "naics": "53",
	      "actual": 0.01795,
	      "expected": 0.02988
	    },
	    {
	      "cbsa": 24340,
	      "naics": "54",
	      "actual": -0.02798,
	      "expected": 0.23896
	    },
	    {
	      "cbsa": 24340,
	      "naics": "55",
	      "actual": -0.53419,
	      "expected": 0.06438
	    },
	    {
	      "cbsa": 24340,
	      "naics": "61",
	      "actual": -0.39988,
	      "expected": 0.2038
	    },
	    {
	      "cbsa": 24340,
	      "naics": "62",
	      "actual": 0.0126,
	      "expected": 0.35186
	    },
	    {
	      "cbsa": 24340,
	      "naics": "71",
	      "actual": -0.22137,
	      "expected": 0.16857
	    },
	    {
	      "cbsa": 24340,
	      "naics": "72",
	      "actual": 0.01436,
	      "expected": 0.14864
	    },
	    {
	      "cbsa": 24340,
	      "naics": "81",
	      "actual": -0.5408,
	      "expected": 0.11271
	    }
	  ],
	  "24660": [
	    {
	      "cbsa": 24660,
	      "naics": "00",
	      "actual": 0.00282,
	      "expected": 0.09431
	    },
	    {
	      "cbsa": 24660,
	      "naics": "22",
	      "actual": -0.30979,
	      "expected": -0.48371
	    },
	    {
	      "cbsa": 24660,
	      "naics": "23",
	      "actual": -0.29125,
	      "expected": -0.26043
	    },
	    {
	      "cbsa": 24660,
	      "naics": "31",
	      "actual": -0.29494,
	      "expected": -0.21997
	    },
	    {
	      "cbsa": 24660,
	      "naics": "42",
	      "actual": -0.61171,
	      "expected": -0.06324
	    },
	    {
	      "cbsa": 24660,
	      "naics": "44",
	      "actual": -0.03623,
	      "expected": 0.06472
	    },
	    {
	      "cbsa": 24660,
	      "naics": "48",
	      "actual": 0.01416,
	      "expected": -0.05536
	    },
	    {
	      "cbsa": 24660,
	      "naics": "51",
	      "actual": -0.46832,
	      "expected": -0.15623
	    },
	    {
	      "cbsa": 24660,
	      "naics": "52",
	      "actual": 0.4293,
	      "expected": 0.05016
	    },
	    {
	      "cbsa": 24660,
	      "naics": "53",
	      "actual": -0.07463,
	      "expected": 0.12648
	    },
	    {
	      "cbsa": 24660,
	      "naics": "54",
	      "actual": -0.07491,
	      "expected": 0.08201
	    },
	    {
	      "cbsa": 24660,
	      "naics": "55",
	      "actual": 0.24246,
	      "expected": 0.26591
	    },
	    {
	      "cbsa": 24660,
	      "naics": "61",
	      "actual": 0.75042,
	      "expected": 0.29192
	    },
	    {
	      "cbsa": 24660,
	      "naics": "62",
	      "actual": 0.62156,
	      "expected": 0.6164
	    },
	    {
	      "cbsa": 24660,
	      "naics": "71",
	      "actual": 0.18357,
	      "expected": 0.25264
	    },
	    {
	      "cbsa": 24660,
	      "naics": "72",
	      "actual": 0.16236,
	      "expected": 0.22495
	    },
	    {
	      "cbsa": 24660,
	      "naics": "81",
	      "actual": -0.17073,
	      "expected": -0.00328
	    }
	  ],
	  "24860": [
	    {
	      "cbsa": 24860,
	      "naics": "00",
	      "actual": 0.23806,
	      "expected": 0.18881
	    },
	    {
	      "cbsa": 24860,
	      "naics": "22",
	      "actual": -0.53111,
	      "expected": -0.16471
	    },
	    {
	      "cbsa": 24860,
	      "naics": "23",
	      "actual": 0.21107,
	      "expected": -0.08814
	    },
	    {
	      "cbsa": 24860,
	      "naics": "31",
	      "actual": -0.19678,
	      "expected": -0.17775
	    },
	    {
	      "cbsa": 24860,
	      "naics": "42",
	      "actual": 0.41087,
	      "expected": 0.31258
	    },
	    {
	      "cbsa": 24860,
	      "naics": "44",
	      "actual": -0.1161,
	      "expected": 0.07426
	    },
	    {
	      "cbsa": 24860,
	      "naics": "48",
	      "actual": 0.01632,
	      "expected": 0.12275
	    },
	    {
	      "cbsa": 24860,
	      "naics": "51",
	      "actual": 0.25709,
	      "expected": 0.20735
	    },
	    {
	      "cbsa": 24860,
	      "naics": "52",
	      "actual": 0.03866,
	      "expected": 0.15762
	    },
	    {
	      "cbsa": 24860,
	      "naics": "53",
	      "actual": 0.22957,
	      "expected": -0.07366
	    },
	    {
	      "cbsa": 24860,
	      "naics": "54",
	      "actual": 0.47739,
	      "expected": 0.36036
	    },
	    {
	      "cbsa": 24860,
	      "naics": "55",
	      "actual": 0.92279,
	      "expected": 0.73373
	    },
	    {
	      "cbsa": 24860,
	      "naics": "61",
	      "actual": 0.09836,
	      "expected": 0.35814
	    },
	    {
	      "cbsa": 24860,
	      "naics": "62",
	      "actual": 1.18539,
	      "expected": 0.82713
	    },
	    {
	      "cbsa": 24860,
	      "naics": "71",
	      "actual": 0.37853,
	      "expected": 0.32132
	    },
	    {
	      "cbsa": 24860,
	      "naics": "72",
	      "actual": 0.48407,
	      "expected": 0.23683
	    },
	    {
	      "cbsa": 24860,
	      "naics": "81",
	      "actual": -0.08166,
	      "expected": 0.04749
	    }
	  ],
	  "25420": [
	    {
	      "cbsa": 25420,
	      "naics": "00",
	      "actual": 0.10415,
	      "expected": 0.33289
	    },
	    {
	      "cbsa": 25420,
	      "naics": "22",
	      "actual": -0.72991,
	      "expected": -0.08021
	    },
	    {
	      "cbsa": 25420,
	      "naics": "23",
	      "actual": -0.38993,
	      "expected": -0.14136
	    },
	    {
	      "cbsa": 25420,
	      "naics": "31",
	      "actual": -0.55317,
	      "expected": -0.21881
	    },
	    {
	      "cbsa": 25420,
	      "naics": "42",
	      "actual": -0.30839,
	      "expected": -0.04691
	    },
	    {
	      "cbsa": 25420,
	      "naics": "44",
	      "actual": -0.23994,
	      "expected": 0.00592
	    },
	    {
	      "cbsa": 25420,
	      "naics": "48",
	      "actual": -0.18563,
	      "expected": 0.04426
	    },
	    {
	      "cbsa": 25420,
	      "naics": "51",
	      "actual": -0.10033,
	      "expected": 0.11945
	    },
	    {
	      "cbsa": 25420,
	      "naics": "52",
	      "actual": -0.06752,
	      "expected": 0.76543
	    },
	    {
	      "cbsa": 25420,
	      "naics": "53",
	      "actual": -0.32951,
	      "expected": 0.06521
	    },
	    {
	      "cbsa": 25420,
	      "naics": "54",
	      "actual": 0.11167,
	      "expected": 0.31562
	    },
	    {
	      "cbsa": 25420,
	      "naics": "55",
	      "actual": 0.57843,
	      "expected": 0.52792
	    },
	    {
	      "cbsa": 25420,
	      "naics": "61",
	      "actual": -0.34951,
	      "expected": 0.41075
	    },
	    {
	      "cbsa": 25420,
	      "naics": "62",
	      "actual": 1.32222,
	      "expected": 0.91433
	    },
	    {
	      "cbsa": 25420,
	      "naics": "71",
	      "actual": -0.0679,
	      "expected": -0.07166
	    },
	    {
	      "cbsa": 25420,
	      "naics": "72",
	      "actual": 0.19613,
	      "expected": 0.26918
	    },
	    {
	      "cbsa": 25420,
	      "naics": "81",
	      "actual": -0.11737,
	      "expected": 0.16452
	    }
	  ],
	  "25540": [
	    {
	      "cbsa": 25540,
	      "naics": "00",
	      "actual": 0.18427,
	      "expected": 0.16272
	    },
	    {
	      "cbsa": 25540,
	      "naics": "22",
	      "actual": -0.54819,
	      "expected": -0.88201
	    },
	    {
	      "cbsa": 25540,
	      "naics": "23",
	      "actual": -0.31758,
	      "expected": -0.00763
	    },
	    {
	      "cbsa": 25540,
	      "naics": "31",
	      "actual": -0.6896,
	      "expected": -0.19697
	    },
	    {
	      "cbsa": 25540,
	      "naics": "42",
	      "actual": -0.41005,
	      "expected": -0.04103
	    },
	    {
	      "cbsa": 25540,
	      "naics": "44",
	      "actual": -0.08092,
	      "expected": 0.03358
	    },
	    {
	      "cbsa": 25540,
	      "naics": "48",
	      "actual": -0.16352,
	      "expected": 0.09868
	    },
	    {
	      "cbsa": 25540,
	      "naics": "51",
	      "actual": -0.35972,
	      "expected": -0.00645
	    },
	    {
	      "cbsa": 25540,
	      "naics": "52",
	      "actual": 0.68738,
	      "expected": 0.0743
	    },
	    {
	      "cbsa": 25540,
	      "naics": "53",
	      "actual": 0.36016,
	      "expected": 0.04944
	    },
	    {
	      "cbsa": 25540,
	      "naics": "54",
	      "actual": 0.41904,
	      "expected": 0.3325
	    },
	    {
	      "cbsa": 25540,
	      "naics": "55",
	      "actual": -0.38225,
	      "expected": 0.71123
	    },
	    {
	      "cbsa": 25540,
	      "naics": "61",
	      "actual": 0.44643,
	      "expected": 0.63963
	    },
	    {
	      "cbsa": 25540,
	      "naics": "62",
	      "actual": -0.02651,
	      "expected": 0.29608
	    },
	    {
	      "cbsa": 25540,
	      "naics": "71",
	      "actual": -0.03984,
	      "expected": 0.10025
	    },
	    {
	      "cbsa": 25540,
	      "naics": "72",
	      "actual": 0.15017,
	      "expected": 0.20108
	    },
	    {
	      "cbsa": 25540,
	      "naics": "81",
	      "actual": 0.42795,
	      "expected": 0.15198
	    }
	  ],
	  "26420": [
	    {
	      "cbsa": 26420,
	      "naics": "00",
	      "actual": 0.15529,
	      "expected": 0.39664
	    },
	    {
	      "cbsa": 26420,
	      "naics": "22",
	      "actual": -0.06757,
	      "expected": 0.00698
	    },
	    {
	      "cbsa": 26420,
	      "naics": "23",
	      "actual": -0.18933,
	      "expected": 0.34033
	    },
	    {
	      "cbsa": 26420,
	      "naics": "31",
	      "actual": -0.12368,
	      "expected": 0.22006
	    },
	    {
	      "cbsa": 26420,
	      "naics": "42",
	      "actual": 0.01753,
	      "expected": 0.32895
	    },
	    {
	      "cbsa": 26420,
	      "naics": "44",
	      "actual": -0.09676,
	      "expected": 0.21326
	    },
	    {
	      "cbsa": 26420,
	      "naics": "48",
	      "actual": -0.10951,
	      "expected": 0.28728
	    },
	    {
	      "cbsa": 26420,
	      "naics": "51",
	      "actual": -0.21154,
	      "expected": -0.14655
	    },
	    {
	      "cbsa": 26420,
	      "naics": "52",
	      "actual": -0.03375,
	      "expected": 0.10855
	    },
	    {
	      "cbsa": 26420,
	      "naics": "53",
	      "actual": -0.02259,
	      "expected": 0.15528
	    },
	    {
	      "cbsa": 26420,
	      "naics": "54",
	      "actual": 0.24373,
	      "expected": 0.44855
	    },
	    {
	      "cbsa": 26420,
	      "naics": "55",
	      "actual": 4.47634,
	      "expected": 2.81518
	    },
	    {
	      "cbsa": 26420,
	      "naics": "61",
	      "actual": 0.04633,
	      "expected": 0.40141
	    },
	    {
	      "cbsa": 26420,
	      "naics": "62",
	      "actual": 0.25725,
	      "expected": 0.52803
	    },
	    {
	      "cbsa": 26420,
	      "naics": "71",
	      "actual": 0.15998,
	      "expected": 0.22832
	    },
	    {
	      "cbsa": 26420,
	      "naics": "72",
	      "actual": 0.1666,
	      "expected": 0.45435
	    },
	    {
	      "cbsa": 26420,
	      "naics": "81",
	      "actual": -0.01659,
	      "expected": 0.21466
	    }
	  ],
	  "26900": [
	    {
	      "cbsa": 26900,
	      "naics": "00",
	      "actual": 0.41505,
	      "expected": 0.19592
	    },
	    {
	      "cbsa": 26900,
	      "naics": "22",
	      "actual": -0.4002,
	      "expected": -0.15722
	    },
	    {
	      "cbsa": 26900,
	      "naics": "23",
	      "actual": -0.23187,
	      "expected": -0.15007
	    },
	    {
	      "cbsa": 26900,
	      "naics": "31",
	      "actual": 0.45381,
	      "expected": -0.23075
	    },
	    {
	      "cbsa": 26900,
	      "naics": "42",
	      "actual": -0.13371,
	      "expected": 0.02616
	    },
	    {
	      "cbsa": 26900,
	      "naics": "44",
	      "actual": -0.08287,
	      "expected": 0.06593
	    },
	    {
	      "cbsa": 26900,
	      "naics": "48",
	      "actual": 0.19518,
	      "expected": 0.33556
	    },
	    {
	      "cbsa": 26900,
	      "naics": "51",
	      "actual": 0.03221,
	      "expected": 0.07635
	    },
	    {
	      "cbsa": 26900,
	      "naics": "52",
	      "actual": 0.36187,
	      "expected": -0.00615
	    },
	    {
	      "cbsa": 26900,
	      "naics": "53",
	      "actual": 0.09576,
	      "expected": -0.01909
	    },
	    {
	      "cbsa": 26900,
	      "naics": "54",
	      "actual": 1.07897,
	      "expected": 0.46711
	    },
	    {
	      "cbsa": 26900,
	      "naics": "55",
	      "actual": 0.49711,
	      "expected": 0.19974
	    },
	    {
	      "cbsa": 26900,
	      "naics": "61",
	      "actual": 0.7664,
	      "expected": 0.91525
	    },
	    {
	      "cbsa": 26900,
	      "naics": "62",
	      "actual": 0.64436,
	      "expected": 0.6057
	    },
	    {
	      "cbsa": 26900,
	      "naics": "71",
	      "actual": 0.26235,
	      "expected": 0.12001
	    },
	    {
	      "cbsa": 26900,
	      "naics": "72",
	      "actual": 0.61548,
	      "expected": 0.28272
	    },
	    {
	      "cbsa": 26900,
	      "naics": "81",
	      "actual": 0.29042,
	      "expected": 0.1222
	    }
	  ],
	  "27140": [
	    {
	      "cbsa": 27140,
	      "naics": "00",
	      "actual": -0.10943,
	      "expected": 0.15398
	    },
	    {
	      "cbsa": 27140,
	      "naics": "22",
	      "actual": 6.25866,
	      "expected": 0.78929
	    },
	    {
	      "cbsa": 27140,
	      "naics": "23",
	      "actual": -0.23098,
	      "expected": -0.18985
	    },
	    {
	      "cbsa": 27140,
	      "naics": "31",
	      "actual": -0.28762,
	      "expected": -0.22807
	    },
	    {
	      "cbsa": 27140,
	      "naics": "42",
	      "actual": -0.3169,
	      "expected": -0.04622
	    },
	    {
	      "cbsa": 27140,
	      "naics": "44",
	      "actual": -0.24924,
	      "expected": -0.00667
	    },
	    {
	      "cbsa": 27140,
	      "naics": "48",
	      "actual": -0.6926,
	      "expected": 0.00153
	    },
	    {
	      "cbsa": 27140,
	      "naics": "51",
	      "actual": -0.19982,
	      "expected": -0.00473
	    },
	    {
	      "cbsa": 27140,
	      "naics": "52",
	      "actual": -0.13897,
	      "expected": -0.05586
	    },
	    {
	      "cbsa": 27140,
	      "naics": "53",
	      "actual": -0.33902,
	      "expected": 0.00082
	    },
	    {
	      "cbsa": 27140,
	      "naics": "54",
	      "actual": -0.24385,
	      "expected": 0.07215
	    },
	    {
	      "cbsa": 27140,
	      "naics": "55",
	      "actual": -0.04717,
	      "expected": 0.25856
	    },
	    {
	      "cbsa": 27140,
	      "naics": "61",
	      "actual": 0.12658,
	      "expected": 0.31071
	    },
	    {
	      "cbsa": 27140,
	      "naics": "62",
	      "actual": 0.21768,
	      "expected": 0.48567
	    },
	    {
	      "cbsa": 27140,
	      "naics": "71",
	      "actual": -0.42359,
	      "expected": -0.07374
	    },
	    {
	      "cbsa": 27140,
	      "naics": "72",
	      "actual": -0.1376,
	      "expected": 0.18895
	    },
	    {
	      "cbsa": 27140,
	      "naics": "81",
	      "actual": -0.32135,
	      "expected": -0.05848
	    }
	  ],
	  "27260": [
	    {
	      "cbsa": 27260,
	      "naics": "00",
	      "actual": 0.16981,
	      "expected": 0.1984
	    },
	    {
	      "cbsa": 27260,
	      "naics": "22",
	      "actual": -0.55771,
	      "expected": -0.21438
	    },
	    {
	      "cbsa": 27260,
	      "naics": "23",
	      "actual": -0.26322,
	      "expected": 0.07139
	    },
	    {
	      "cbsa": 27260,
	      "naics": "31",
	      "actual": -0.35678,
	      "expected": -0.14975
	    },
	    {
	      "cbsa": 27260,
	      "naics": "42",
	      "actual": -0.46519,
	      "expected": -0.20179
	    },
	    {
	      "cbsa": 27260,
	      "naics": "44",
	      "actual": -0.33288,
	      "expected": -0.13898
	    },
	    {
	      "cbsa": 27260,
	      "naics": "48",
	      "actual": -0.35145,
	      "expected": 0.09326
	    },
	    {
	      "cbsa": 27260,
	      "naics": "51",
	      "actual": -0.07168,
	      "expected": 0.45125
	    },
	    {
	      "cbsa": 27260,
	      "naics": "52",
	      "actual": 0.17032,
	      "expected": 0.05426
	    },
	    {
	      "cbsa": 27260,
	      "naics": "53",
	      "actual": -0.11138,
	      "expected": 0.00452
	    },
	    {
	      "cbsa": 27260,
	      "naics": "54",
	      "actual": 0.21625,
	      "expected": 0.41894
	    },
	    {
	      "cbsa": 27260,
	      "naics": "55",
	      "actual": -0.69198,
	      "expected": -0.31627
	    },
	    {
	      "cbsa": 27260,
	      "naics": "61",
	      "actual": 0.28685,
	      "expected": 0.57095
	    },
	    {
	      "cbsa": 27260,
	      "naics": "62",
	      "actual": 0.70997,
	      "expected": 0.47597
	    },
	    {
	      "cbsa": 27260,
	      "naics": "71",
	      "actual": 0.54753,
	      "expected": 0.66697
	    },
	    {
	      "cbsa": 27260,
	      "naics": "72",
	      "actual": 0.40864,
	      "expected": 0.37185
	    },
	    {
	      "cbsa": 27260,
	      "naics": "81",
	      "actual": -0.3876,
	      "expected": 0.0308
	    }
	  ],
	  "28140": [
	    {
	      "cbsa": 28140,
	      "naics": "00",
	      "actual": -0.00704,
	      "expected": 0.15757
	    },
	    {
	      "cbsa": 28140,
	      "naics": "22",
	      "actual": 0.02387,
	      "expected": 0.18566
	    },
	    {
	      "cbsa": 28140,
	      "naics": "23",
	      "actual": -0.05732,
	      "expected": -0.10484
	    },
	    {
	      "cbsa": 28140,
	      "naics": "31",
	      "actual": -0.2472,
	      "expected": -0.18357
	    },
	    {
	      "cbsa": 28140,
	      "naics": "42",
	      "actual": 0.03766,
	      "expected": 0.12304
	    },
	    {
	      "cbsa": 28140,
	      "naics": "44",
	      "actual": -0.13175,
	      "expected": -0.00821
	    },
	    {
	      "cbsa": 28140,
	      "naics": "48",
	      "actual": -0.03876,
	      "expected": 0.0705
	    },
	    {
	      "cbsa": 28140,
	      "naics": "51",
	      "actual": -0.7113,
	      "expected": -0.70404
	    },
	    {
	      "cbsa": 28140,
	      "naics": "52",
	      "actual": -0.12368,
	      "expected": 0.20054
	    },
	    {
	      "cbsa": 28140,
	      "naics": "53",
	      "actual": -0.11722,
	      "expected": -0.09418
	    },
	    {
	      "cbsa": 28140,
	      "naics": "54",
	      "actual": 0.04054,
	      "expected": 0.40367
	    },
	    {
	      "cbsa": 28140,
	      "naics": "55",
	      "actual": 0.81821,
	      "expected": 1.36975
	    },
	    {
	      "cbsa": 28140,
	      "naics": "61",
	      "actual": 0.21828,
	      "expected": 0.4833
	    },
	    {
	      "cbsa": 28140,
	      "naics": "62",
	      "actual": 0.69822,
	      "expected": 0.59718
	    },
	    {
	      "cbsa": 28140,
	      "naics": "71",
	      "actual": -0.17415,
	      "expected": -0.07214
	    },
	    {
	      "cbsa": 28140,
	      "naics": "72",
	      "actual": 0.04857,
	      "expected": 0.2043
	    },
	    {
	      "cbsa": 28140,
	      "naics": "81",
	      "actual": -0.30491,
	      "expected": 0.02858
	    }
	  ],
	  "28940": [
	    {
	      "cbsa": 28940,
	      "naics": "00",
	      "actual": -0.1163,
	      "expected": 0.1368
	    },
	    {
	      "cbsa": 28940,
	      "naics": "22",
	      "actual": -0.38185,
	      "expected": -0.11615
	    },
	    {
	      "cbsa": 28940,
	      "naics": "23",
	      "actual": -0.0336,
	      "expected": 0.00144
	    },
	    {
	      "cbsa": 28940,
	      "naics": "31",
	      "actual": -0.34271,
	      "expected": -0.35425
	    },
	    {
	      "cbsa": 28940,
	      "naics": "42",
	      "actual": -0.11426,
	      "expected": 0.01671
	    },
	    {
	      "cbsa": 28940,
	      "naics": "44",
	      "actual": -0.03702,
	      "expected": 0.00985
	    },
	    {
	      "cbsa": 28940,
	      "naics": "48",
	      "actual": -0.03214,
	      "expected": 0.07848
	    },
	    {
	      "cbsa": 28940,
	      "naics": "51",
	      "actual": -0.42894,
	      "expected": -0.09927
	    },
	    {
	      "cbsa": 28940,
	      "naics": "52",
	      "actual": -0.05466,
	      "expected": 0.11447
	    },
	    {
	      "cbsa": 28940,
	      "naics": "53",
	      "actual": -0.12696,
	      "expected": 0.0888
	    },
	    {
	      "cbsa": 28940,
	      "naics": "54",
	      "actual": -0.15044,
	      "expected": 0.19968
	    },
	    {
	      "cbsa": 28940,
	      "naics": "55",
	      "actual": 0.60901,
	      "expected": 0.80735
	    },
	    {
	      "cbsa": 28940,
	      "naics": "61",
	      "actual": 0.61055,
	      "expected": 0.63902
	    },
	    {
	      "cbsa": 28940,
	      "naics": "62",
	      "actual": -0.142,
	      "expected": 0.33871
	    },
	    {
	      "cbsa": 28940,
	      "naics": "71",
	      "actual": -0.20296,
	      "expected": 0.14675
	    },
	    {
	      "cbsa": 28940,
	      "naics": "72",
	      "actual": 0.11805,
	      "expected": 0.21931
	    },
	    {
	      "cbsa": 28940,
	      "naics": "81",
	      "actual": -0.47134,
	      "expected": 0.10898
	    }
	  ],
	  "29460": [
	    {
	      "cbsa": 29460,
	      "naics": "00",
	      "actual": -0.00888,
	      "expected": 0.24922
	    },
	    {
	      "cbsa": 29460,
	      "naics": "22",
	      "actual": -0.77561,
	      "expected": 0.02828
	    },
	    {
	      "cbsa": 29460,
	      "naics": "23",
	      "actual": -0.09105,
	      "expected": 0.0519
	    },
	    {
	      "cbsa": 29460,
	      "naics": "31",
	      "actual": -0.49767,
	      "expected": -0.28319
	    },
	    {
	      "cbsa": 29460,
	      "naics": "42",
	      "actual": -0.01816,
	      "expected": 0.02092
	    },
	    {
	      "cbsa": 29460,
	      "naics": "44",
	      "actual": -0.23059,
	      "expected": 0.1452
	    },
	    {
	      "cbsa": 29460,
	      "naics": "48",
	      "actual": 0.22266,
	      "expected": 0.52881
	    },
	    {
	      "cbsa": 29460,
	      "naics": "51",
	      "actual": -0.29571,
	      "expected": -0.26488
	    },
	    {
	      "cbsa": 29460,
	      "naics": "52",
	      "actual": 0.90999,
	      "expected": 0.14812
	    },
	    {
	      "cbsa": 29460,
	      "naics": "53",
	      "actual": 0.09731,
	      "expected": 0.20586
	    },
	    {
	      "cbsa": 29460,
	      "naics": "54",
	      "actual": -0.44887,
	      "expected": 0.12809
	    },
	    {
	      "cbsa": 29460,
	      "naics": "55",
	      "actual": -0.00991,
	      "expected": 0.29632
	    },
	    {
	      "cbsa": 29460,
	      "naics": "61",
	      "actual": 1.42621,
	      "expected": 1.58844
	    },
	    {
	      "cbsa": 29460,
	      "naics": "62",
	      "actual": 0.0993,
	      "expected": 0.3393
	    },
	    {
	      "cbsa": 29460,
	      "naics": "71",
	      "actual": -0.00292,
	      "expected": 0.91244
	    },
	    {
	      "cbsa": 29460,
	      "naics": "72",
	      "actual": 0.18534,
	      "expected": 0.50938
	    },
	    {
	      "cbsa": 29460,
	      "naics": "81",
	      "actual": -0.3806,
	      "expected": -0.01909
	    }
	  ],
	  "29820": [
	    {
	      "cbsa": 29820,
	      "naics": "00",
	      "actual": 0.34455,
	      "expected": 0.2192
	    },
	    {
	      "cbsa": 29820,
	      "naics": "22",
	      "actual": -0.38543,
	      "expected": -0.18593
	    },
	    {
	      "cbsa": 29820,
	      "naics": "23",
	      "actual": -0.59913,
	      "expected": -0.66231
	    },
	    {
	      "cbsa": 29820,
	      "naics": "31",
	      "actual": -0.37205,
	      "expected": -0.17437
	    },
	    {
	      "cbsa": 29820,
	      "naics": "42",
	      "actual": -0.36714,
	      "expected": -0.10822
	    },
	    {
	      "cbsa": 29820,
	      "naics": "44",
	      "actual": 0.47789,
	      "expected": 0.33867
	    },
	    {
	      "cbsa": 29820,
	      "naics": "48",
	      "actual": -0.06293,
	      "expected": 0.35363
	    },
	    {
	      "cbsa": 29820,
	      "naics": "51",
	      "actual": -0.33425,
	      "expected": -0.02864
	    },
	    {
	      "cbsa": 29820,
	      "naics": "52",
	      "actual": -0.3385,
	      "expected": -0.1884
	    },
	    {
	      "cbsa": 29820,
	      "naics": "53",
	      "actual": 0.37596,
	      "expected": 0.15303
	    },
	    {
	      "cbsa": 29820,
	      "naics": "54",
	      "actual": -0.10079,
	      "expected": 0.1301
	    },
	    {
	      "cbsa": 29820,
	      "naics": "55",
	      "actual": 0.87532,
	      "expected": 1.20757
	    },
	    {
	      "cbsa": 29820,
	      "naics": "61",
	      "actual": 0.75488,
	      "expected": 1.16946
	    },
	    {
	      "cbsa": 29820,
	      "naics": "62",
	      "actual": 0.07483,
	      "expected": 0.58966
	    },
	    {
	      "cbsa": 29820,
	      "naics": "71",
	      "actual": 0.45782,
	      "expected": 0.17528
	    },
	    {
	      "cbsa": 29820,
	      "naics": "72",
	      "actual": 0.55856,
	      "expected": 0.28221
	    },
	    {
	      "cbsa": 29820,
	      "naics": "81",
	      "actual": 0.07752,
	      "expected": 0.28925
	    }
	  ],
	  "30780": [
	    {
	      "cbsa": 30780,
	      "naics": "00",
	      "actual": -0.16346,
	      "expected": 0.10099
	    },
	    {
	      "cbsa": 30780,
	      "naics": "22",
	      "actual": -0.22265,
	      "expected": 0.56003
	    },
	    {
	      "cbsa": 30780,
	      "naics": "23",
	      "actual": -0.14724,
	      "expected": -0.03627
	    },
	    {
	      "cbsa": 30780,
	      "naics": "31",
	      "actual": -0.74401,
	      "expected": -0.218
	    },
	    {
	      "cbsa": 30780,
	      "naics": "42",
	      "actual": -0.33817,
	      "expected": -0.04594
	    },
	    {
	      "cbsa": 30780,
	      "naics": "44",
	      "actual": -0.15726,
	      "expected": 0.10058
	    },
	    {
	      "cbsa": 30780,
	      "naics": "48",
	      "actual": -0.57316,
	      "expected": -0.09355
	    },
	    {
	      "cbsa": 30780,
	      "naics": "51",
	      "actual": -0.43395,
	      "expected": -0.40417
	    },
	    {
	      "cbsa": 30780,
	      "naics": "52",
	      "actual": -0.09441,
	      "expected": 0.04508
	    },
	    {
	      "cbsa": 30780,
	      "naics": "53",
	      "actual": -0.18052,
	      "expected": 0.07911
	    },
	    {
	      "cbsa": 30780,
	      "naics": "54",
	      "actual": 0.04534,
	      "expected": 0.20866
	    },
	    {
	      "cbsa": 30780,
	      "naics": "55",
	      "actual": -0.12363,
	      "expected": 0.13424
	    },
	    {
	      "cbsa": 30780,
	      "naics": "61",
	      "actual": 0.51504,
	      "expected": 0.76497
	    },
	    {
	      "cbsa": 30780,
	      "naics": "62",
	      "actual": -0.02878,
	      "expected": 0.35545
	    },
	    {
	      "cbsa": 30780,
	      "naics": "71",
	      "actual": 0.35399,
	      "expected": 0.13928
	    },
	    {
	      "cbsa": 30780,
	      "naics": "72",
	      "actual": 0.12886,
	      "expected": 0.37487
	    },
	    {
	      "cbsa": 30780,
	      "naics": "81",
	      "actual": -0.22337,
	      "expected": -0.06577
	    }
	  ],
	  "31080": [
	    {
	      "cbsa": 31080,
	      "naics": "00",
	      "actual": 0.14937,
	      "expected": 0.20619
	    },
	    {
	      "cbsa": 31080,
	      "naics": "22",
	      "actual": -0.06077,
	      "expected": -0.27885
	    },
	    {
	      "cbsa": 31080,
	      "naics": "23",
	      "actual": -0.07308,
	      "expected": -0.03519
	    },
	    {
	      "cbsa": 31080,
	      "naics": "31",
	      "actual": -0.36042,
	      "expected": -0.28293
	    },
	    {
	      "cbsa": 31080,
	      "naics": "42",
	      "actual": 0.01669,
	      "expected": 0.02249
	    },
	    {
	      "cbsa": 31080,
	      "naics": "44",
	      "actual": 0.03128,
	      "expected": 0.08034
	    },
	    {
	      "cbsa": 31080,
	      "naics": "48",
	      "actual": 0.31692,
	      "expected": 0.06015
	    },
	    {
	      "cbsa": 31080,
	      "naics": "51",
	      "actual": 0.69928,
	      "expected": 0.40065
	    },
	    {
	      "cbsa": 31080,
	      "naics": "52",
	      "actual": -0.14342,
	      "expected": -0.10368
	    },
	    {
	      "cbsa": 31080,
	      "naics": "53",
	      "actual": 0.19211,
	      "expected": 0.08876
	    },
	    {
	      "cbsa": 31080,
	      "naics": "54",
	      "actual": 0.18444,
	      "expected": 0.309
	    },
	    {
	      "cbsa": 31080,
	      "naics": "55",
	      "actual": -0.02553,
	      "expected": -0.12119
	    },
	    {
	      "cbsa": 31080,
	      "naics": "61",
	      "actual": -0.02315,
	      "expected": 0.51499
	    },
	    {
	      "cbsa": 31080,
	      "naics": "62",
	      "actual": 0.28406,
	      "expected": 0.87454
	    },
	    {
	      "cbsa": 31080,
	      "naics": "71",
	      "actual": 0.20989,
	      "expected": 0.17048
	    },
	    {
	      "cbsa": 31080,
	      "naics": "72",
	      "actual": 0.3377,
	      "expected": 0.36074
	    },
	    {
	      "cbsa": 31080,
	      "naics": "81",
	      "actual": -0.45156,
	      "expected": -0.12591
	    }
	  ],
	  "31140": [
	    {
	      "cbsa": 31140,
	      "naics": "00",
	      "actual": -0.0272,
	      "expected": 0.15373
	    },
	    {
	      "cbsa": 31140,
	      "naics": "22",
	      "actual": 0.65338,
	      "expected": 0.17797
	    },
	    {
	      "cbsa": 31140,
	      "naics": "23",
	      "actual": 0.17712,
	      "expected": -0.03291
	    },
	    {
	      "cbsa": 31140,
	      "naics": "31",
	      "actual": -0.18559,
	      "expected": -0.07428
	    },
	    {
	      "cbsa": 31140,
	      "naics": "42",
	      "actual": -0.21879,
	      "expected": -0.03148
	    },
	    {
	      "cbsa": 31140,
	      "naics": "44",
	      "actual": -0.09606,
	      "expected": 0.06983
	    },
	    {
	      "cbsa": 31140,
	      "naics": "48",
	      "actual": -0.01448,
	      "expected": 0.27474
	    },
	    {
	      "cbsa": 31140,
	      "naics": "51",
	      "actual": -0.13517,
	      "expected": -0.103
	    },
	    {
	      "cbsa": 31140,
	      "naics": "52",
	      "actual": 0.55409,
	      "expected": 0.21817
	    },
	    {
	      "cbsa": 31140,
	      "naics": "53",
	      "actual": 1.58556,
	      "expected": -0.05356
	    },
	    {
	      "cbsa": 31140,
	      "naics": "54",
	      "actual": 0.1572,
	      "expected": 0.3236
	    },
	    {
	      "cbsa": 31140,
	      "naics": "55",
	      "actual": -0.01915,
	      "expected": 0.30801
	    },
	    {
	      "cbsa": 31140,
	      "naics": "61",
	      "actual": -0.14417,
	      "expected": 0.21592
	    },
	    {
	      "cbsa": 31140,
	      "naics": "62",
	      "actual": -0.34312,
	      "expected": 0.17001
	    },
	    {
	      "cbsa": 31140,
	      "naics": "71",
	      "actual": 0.41881,
	      "expected": -0.0623
	    },
	    {
	      "cbsa": 31140,
	      "naics": "72",
	      "actual": 0.47413,
	      "expected": 0.27873
	    },
	    {
	      "cbsa": 31140,
	      "naics": "81",
	      "actual": -0.19923,
	      "expected": 0.0054
	    }
	  ],
	  "32580": [
	    {
	      "cbsa": 32580,
	      "naics": "00",
	      "actual": 0.00186,
	      "expected": 0.39466
	    },
	    {
	      "cbsa": 32580,
	      "naics": "22",
	      "actual": -0.62907,
	      "expected": 0.09944
	    },
	    {
	      "cbsa": 32580,
	      "naics": "23",
	      "actual": -0.41999,
	      "expected": -0.08327
	    },
	    {
	      "cbsa": 32580,
	      "naics": "31",
	      "actual": -0.59952,
	      "expected": -0.26398
	    },
	    {
	      "cbsa": 32580,
	      "naics": "42",
	      "actual": -0.2367,
	      "expected": 0.24031
	    },
	    {
	      "cbsa": 32580,
	      "naics": "44",
	      "actual": -0.03275,
	      "expected": 0.34221
	    },
	    {
	      "cbsa": 32580,
	      "naics": "48",
	      "actual": 0.0014,
	      "expected": 0.4068
	    },
	    {
	      "cbsa": 32580,
	      "naics": "51",
	      "actual": -0.56349,
	      "expected": -0.4273
	    },
	    {
	      "cbsa": 32580,
	      "naics": "52",
	      "actual": -0.13486,
	      "expected": 0.18078
	    },
	    {
	      "cbsa": 32580,
	      "naics": "53",
	      "actual": -0.28015,
	      "expected": 0.19711
	    },
	    {
	      "cbsa": 32580,
	      "naics": "54",
	      "actual": -0.29073,
	      "expected": 0.16907
	    },
	    {
	      "cbsa": 32580,
	      "naics": "55",
	      "actual": 1.24991,
	      "expected": 2.23338
	    },
	    {
	      "cbsa": 32580,
	      "naics": "61",
	      "actual": 0.25206,
	      "expected": 1.46125
	    },
	    {
	      "cbsa": 32580,
	      "naics": "62",
	      "actual": 0.41819,
	      "expected": 0.81967
	    },
	    {
	      "cbsa": 32580,
	      "naics": "71",
	      "actual": 0.50289,
	      "expected": 0.28423
	    },
	    {
	      "cbsa": 32580,
	      "naics": "72",
	      "actual": -0.03278,
	      "expected": 0.3925
	    },
	    {
	      "cbsa": 32580,
	      "naics": "81",
	      "actual": -0.24745,
	      "expected": 0.08605
	    }
	  ],
	  "32820": [
	    {
	      "cbsa": 32820,
	      "naics": "00",
	      "actual": -0.04061,
	      "expected": 0.08147
	    },
	    {
	      "cbsa": 32820,
	      "naics": "22",
	      "actual": -0.4869,
	      "expected": -0.16669
	    },
	    {
	      "cbsa": 32820,
	      "naics": "23",
	      "actual": -0.30895,
	      "expected": -0.13337
	    },
	    {
	      "cbsa": 32820,
	      "naics": "31",
	      "actual": -0.25418,
	      "expected": -0.13262
	    },
	    {
	      "cbsa": 32820,
	      "naics": "42",
	      "actual": -0.3036,
	      "expected": -0.06346
	    },
	    {
	      "cbsa": 32820,
	      "naics": "44",
	      "actual": -0.38164,
	      "expected": -0.05538
	    },
	    {
	      "cbsa": 32820,
	      "naics": "48",
	      "actual": -0.25512,
	      "expected": -0.17105
	    },
	    {
	      "cbsa": 32820,
	      "naics": "51",
	      "actual": -0.45585,
	      "expected": -0.35056
	    },
	    {
	      "cbsa": 32820,
	      "naics": "52",
	      "actual": -0.22575,
	      "expected": -0.31037
	    },
	    {
	      "cbsa": 32820,
	      "naics": "53",
	      "actual": -0.30833,
	      "expected": -0.16648
	    },
	    {
	      "cbsa": 32820,
	      "naics": "54",
	      "actual": 0.07002,
	      "expected": 0.18042
	    },
	    {
	      "cbsa": 32820,
	      "naics": "55",
	      "actual": 0.94533,
	      "expected": 0.65491
	    },
	    {
	      "cbsa": 32820,
	      "naics": "61",
	      "actual": 0.08786,
	      "expected": 0.92066
	    },
	    {
	      "cbsa": 32820,
	      "naics": "62",
	      "actual": 0.54972,
	      "expected": 0.55021
	    },
	    {
	      "cbsa": 32820,
	      "naics": "71",
	      "actual": -0.16248,
	      "expected": 0.01392
	    },
	    {
	      "cbsa": 32820,
	      "naics": "72",
	      "actual": -0.25695,
	      "expected": -0.0164
	    },
	    {
	      "cbsa": 32820,
	      "naics": "81",
	      "actual": -0.04439,
	      "expected": -0.04825
	    }
	  ],
	  "33100": [
	    {
	      "cbsa": 33100,
	      "naics": "00",
	      "actual": 0.11156,
	      "expected": 0.19153
	    },
	    {
	      "cbsa": 33100,
	      "naics": "22",
	      "actual": -0.09906,
	      "expected": 0.07224
	    },
	    {
	      "cbsa": 33100,
	      "naics": "23",
	      "actual": -0.19598,
	      "expected": -0.12425
	    },
	    {
	      "cbsa": 33100,
	      "naics": "31",
	      "actual": -0.35274,
	      "expected": -0.26487
	    },
	    {
	      "cbsa": 33100,
	      "naics": "42",
	      "actual": -0.04032,
	      "expected": 0.04539
	    },
	    {
	      "cbsa": 33100,
	      "naics": "44",
	      "actual": 0.27614,
	      "expected": 0.26498
	    },
	    {
	      "cbsa": 33100,
	      "naics": "48",
	      "actual": -0.55831,
	      "expected": 0.08992
	    },
	    {
	      "cbsa": 33100,
	      "naics": "51",
	      "actual": -0.14609,
	      "expected": -0.05046
	    },
	    {
	      "cbsa": 33100,
	      "naics": "52",
	      "actual": 0.39979,
	      "expected": 0.18991
	    },
	    {
	      "cbsa": 33100,
	      "naics": "53",
	      "actual": -0.03214,
	      "expected": 0.01465
	    },
	    {
	      "cbsa": 33100,
	      "naics": "54",
	      "actual": 0.33668,
	      "expected": 0.22505
	    },
	    {
	      "cbsa": 33100,
	      "naics": "55",
	      "actual": 0.29946,
	      "expected": 0.38536
	    },
	    {
	      "cbsa": 33100,
	      "naics": "61",
	      "actual": 0.60656,
	      "expected": 0.58012
	    },
	    {
	      "cbsa": 33100,
	      "naics": "62",
	      "actual": 0.23217,
	      "expected": 0.28032
	    },
	    {
	      "cbsa": 33100,
	      "naics": "71",
	      "actual": 0.14677,
	      "expected": 0.2305
	    },
	    {
	      "cbsa": 33100,
	      "naics": "72",
	      "actual": 0.47318,
	      "expected": 0.43888
	    },
	    {
	      "cbsa": 33100,
	      "naics": "81",
	      "actual": 0.19839,
	      "expected": 0.21419
	    }
	  ],
	  "33460": [
	    {
	      "cbsa": 33460,
	      "naics": "00",
	      "actual": 0.08258,
	      "expected": 0.03223
	    },
	    {
	      "cbsa": 33460,
	      "naics": "22",
	      "actual": -0.13503,
	      "expected": -2.09103
	    },
	    {
	      "cbsa": 33460,
	      "naics": "23",
	      "actual": 0.49433,
	      "expected": -0.05679
	    },
	    {
	      "cbsa": 33460,
	      "naics": "31",
	      "actual": -0.26942,
	      "expected": -0.00506
	    },
	    {
	      "cbsa": 33460,
	      "naics": "42",
	      "actual": -0.39029,
	      "expected": -0.05571
	    },
	    {
	      "cbsa": 33460,
	      "naics": "44",
	      "actual": -0.55671,
	      "expected": -0.09382
	    },
	    {
	      "cbsa": 33460,
	      "naics": "48",
	      "actual": -0.27857,
	      "expected": -1.92655
	    },
	    {
	      "cbsa": 33460,
	      "naics": "51",
	      "actual": -0.32384,
	      "expected": -0.23729
	    },
	    {
	      "cbsa": 33460,
	      "naics": "52",
	      "actual": -0.05343,
	      "expected": 0.10441
	    },
	    {
	      "cbsa": 33460,
	      "naics": "53",
	      "actual": 0.21963,
	      "expected": -1.84681
	    },
	    {
	      "cbsa": 33460,
	      "naics": "54",
	      "actual": 0.44635,
	      "expected": 0.28566
	    },
	    {
	      "cbsa": 33460,
	      "naics": "55",
	      "actual": 1.19328,
	      "expected": 0.15844
	    },
	    {
	      "cbsa": 33460,
	      "naics": "61",
	      "actual": 0.53511,
	      "expected": 0.6726
	    },
	    {
	      "cbsa": 33460,
	      "naics": "62",
	      "actual": 0.33906,
	      "expected": 0.58995
	    },
	    {
	      "cbsa": 33460,
	      "naics": "71",
	      "actual": 0.29127,
	      "expected": 0.27674
	    },
	    {
	      "cbsa": 33460,
	      "naics": "72",
	      "actual": -0.07666,
	      "expected": 0.06484
	    },
	    {
	      "cbsa": 33460,
	      "naics": "81",
	      "actual": -0.36037,
	      "expected": 0.08921
	    }
	  ],
	  "34980": [
	    {
	      "cbsa": 34980,
	      "naics": "00",
	      "actual": 0.4176,
	      "expected": 0.3428
	    },
	    {
	      "cbsa": 34980,
	      "naics": "22",
	      "actual": 0.47554,
	      "expected": 0.14855
	    },
	    {
	      "cbsa": 34980,
	      "naics": "23",
	      "actual": -0.09287,
	      "expected": 0.09816
	    },
	    {
	      "cbsa": 34980,
	      "naics": "31",
	      "actual": -0.28032,
	      "expected": -0.20964
	    },
	    {
	      "cbsa": 34980,
	      "naics": "42",
	      "actual": -0.02145,
	      "expected": 0.11381
	    },
	    {
	      "cbsa": 34980,
	      "naics": "44",
	      "actual": 0.02908,
	      "expected": 0.18098
	    },
	    {
	      "cbsa": 34980,
	      "naics": "48",
	      "actual": 0.08142,
	      "expected": 0.22076
	    },
	    {
	      "cbsa": 34980,
	      "naics": "51",
	      "actual": 0.14473,
	      "expected": 0.10123
	    },
	    {
	      "cbsa": 34980,
	      "naics": "52",
	      "actual": 0.04511,
	      "expected": 0.25774
	    },
	    {
	      "cbsa": 34980,
	      "naics": "53",
	      "actual": -0.08805,
	      "expected": 0.26256
	    },
	    {
	      "cbsa": 34980,
	      "naics": "54",
	      "actual": 0.73511,
	      "expected": 0.64251
	    },
	    {
	      "cbsa": 34980,
	      "naics": "55",
	      "actual": 2.51722,
	      "expected": 1.81205
	    },
	    {
	      "cbsa": 34980,
	      "naics": "61",
	      "actual": -0.65621,
	      "expected": -0.29412
	    },
	    {
	      "cbsa": 34980,
	      "naics": "62",
	      "actual": 1.84091,
	      "expected": 1.06655
	    },
	    {
	      "cbsa": 34980,
	      "naics": "71",
	      "actual": 0.4868,
	      "expected": 0.53337
	    },
	    {
	      "cbsa": 34980,
	      "naics": "72",
	      "actual": 0.38479,
	      "expected": 0.36661
	    },
	    {
	      "cbsa": 34980,
	      "naics": "81",
	      "actual": -0.03397,
	      "expected": 0.17409
	    }
	  ],
	  "35300": [
	    {
	      "cbsa": 35300,
	      "naics": "00",
	      "actual": -0.32638,
	      "expected": 0.13295
	    },
	    {
	      "cbsa": 35300,
	      "naics": "22",
	      "actual": 0.3174,
	      "expected": 0.28504
	    },
	    {
	      "cbsa": 35300,
	      "naics": "23",
	      "actual": 0.13082,
	      "expected": -0.08756
	    },
	    {
	      "cbsa": 35300,
	      "naics": "31",
	      "actual": -0.38938,
	      "expected": -0.32814
	    },
	    {
	      "cbsa": 35300,
	      "naics": "42",
	      "actual": -0.12829,
	      "expected": -0.05312
	    },
	    {
	      "cbsa": 35300,
	      "naics": "44",
	      "actual": 0.05912,
	      "expected": -0.01423
	    },
	    {
	      "cbsa": 35300,
	      "naics": "48",
	      "actual": 0.01614,
	      "expected": 0.02782
	    },
	    {
	      "cbsa": 35300,
	      "naics": "51",
	      "actual": -0.71993,
	      "expected": -0.3781
	    },
	    {
	      "cbsa": 35300,
	      "naics": "52",
	      "actual": -0.10415,
	      "expected": -0.12115
	    },
	    {
	      "cbsa": 35300,
	      "naics": "53",
	      "actual": -0.22206,
	      "expected": 0.0308
	    },
	    {
	      "cbsa": 35300,
	      "naics": "54",
	      "actual": 0.14388,
	      "expected": 0.06125
	    },
	    {
	      "cbsa": 35300,
	      "naics": "55",
	      "actual": -0.3062,
	      "expected": 0.34614
	    },
	    {
	      "cbsa": 35300,
	      "naics": "61",
	      "actual": -0.42076,
	      "expected": 0.15411
	    },
	    {
	      "cbsa": 35300,
	      "naics": "62",
	      "actual": 0.28011,
	      "expected": 0.29062
	    },
	    {
	      "cbsa": 35300,
	      "naics": "71",
	      "actual": 0.49419,
	      "expected": -0.00391
	    },
	    {
	      "cbsa": 35300,
	      "naics": "72",
	      "actual": 0.17057,
	      "expected": 0.19335
	    },
	    {
	      "cbsa": 35300,
	      "naics": "81",
	      "actual": -0.42996,
	      "expected": 0.11623
	    }
	  ],
	  "35380": [
	    {
	      "cbsa": 35380,
	      "naics": "00",
	      "actual": -0.19194,
	      "expected": -0.01096
	    },
	    {
	      "cbsa": 35380,
	      "naics": "22",
	      "actual": -0.74294,
	      "expected": -0.1585
	    },
	    {
	      "cbsa": 35380,
	      "naics": "23",
	      "actual": 0.11843,
	      "expected": 0.09916
	    },
	    {
	      "cbsa": 35380,
	      "naics": "31",
	      "actual": -0.48478,
	      "expected": -0.30847
	    },
	    {
	      "cbsa": 35380,
	      "naics": "42",
	      "actual": -0.34269,
	      "expected": -0.12576
	    },
	    {
	      "cbsa": 35380,
	      "naics": "44",
	      "actual": -0.17185,
	      "expected": -0.08653
	    },
	    {
	      "cbsa": 35380,
	      "naics": "48",
	      "actual": -0.09513,
	      "expected": 0.02097
	    },
	    {
	      "cbsa": 35380,
	      "naics": "51",
	      "actual": 0.0598,
	      "expected": -0.21697
	    },
	    {
	      "cbsa": 35380,
	      "naics": "52",
	      "actual": -0.39532,
	      "expected": -0.2562
	    },
	    {
	      "cbsa": 35380,
	      "naics": "53",
	      "actual": -0.12888,
	      "expected": -0.17358
	    },
	    {
	      "cbsa": 35380,
	      "naics": "54",
	      "actual": 0.03714,
	      "expected": 0.09268
	    },
	    {
	      "cbsa": 35380,
	      "naics": "55",
	      "actual": -0.37467,
	      "expected": -0.02108
	    },
	    {
	      "cbsa": 35380,
	      "naics": "61",
	      "actual": -0.38272,
	      "expected": 0.62414
	    },
	    {
	      "cbsa": 35380,
	      "naics": "62",
	      "actual": -0.02482,
	      "expected": -0.01738
	    },
	    {
	      "cbsa": 35380,
	      "naics": "71",
	      "actual": -0.61588,
	      "expected": -0.29699
	    },
	    {
	      "cbsa": 35380,
	      "naics": "72",
	      "actual": -0.11199,
	      "expected": 0.03623
	    },
	    {
	      "cbsa": 35380,
	      "naics": "81",
	      "actual": -0.2722,
	      "expected": -0.22095
	    }
	  ],
	  "35620": [
	    {
	      "cbsa": 35620,
	      "naics": "00",
	      "actual": 0.41943,
	      "expected": 0.19631
	    },
	    {
	      "cbsa": 35620,
	      "naics": "22",
	      "actual": 0.31485,
	      "expected": 0.30592
	    },
	    {
	      "cbsa": 35620,
	      "naics": "23",
	      "actual": 0.66653,
	      "expected": 0.16486
	    },
	    {
	      "cbsa": 35620,
	      "naics": "31",
	      "actual": -0.36767,
	      "expected": -0.32334
	    },
	    {
	      "cbsa": 35620,
	      "naics": "42",
	      "actual": 0.20624,
	      "expected": -0.07529
	    },
	    {
	      "cbsa": 35620,
	      "naics": "44",
	      "actual": 0.48739,
	      "expected": 0.12257
	    },
	    {
	      "cbsa": 35620,
	      "naics": "48",
	      "actual": -0.38511,
	      "expected": 0.02031
	    },
	    {
	      "cbsa": 35620,
	      "naics": "51",
	      "actual": 0.57533,
	      "expected": 0.0632
	    },
	    {
	      "cbsa": 35620,
	      "naics": "52",
	      "actual": 0.19994,
	      "expected": 0.01801
	    },
	    {
	      "cbsa": 35620,
	      "naics": "53",
	      "actual": 0.27114,
	      "expected": 0.06229
	    },
	    {
	      "cbsa": 35620,
	      "naics": "54",
	      "actual": 0.68877,
	      "expected": 0.34009
	    },
	    {
	      "cbsa": 35620,
	      "naics": "55",
	      "actual": 0.18609,
	      "expected": 0.16065
	    },
	    {
	      "cbsa": 35620,
	      "naics": "61",
	      "actual": 0.50963,
	      "expected": 0.51955
	    },
	    {
	      "cbsa": 35620,
	      "naics": "62",
	      "actual": 0.63075,
	      "expected": 0.44858
	    },
	    {
	      "cbsa": 35620,
	      "naics": "71",
	      "actual": 0.40465,
	      "expected": 0.4019
	    },
	    {
	      "cbsa": 35620,
	      "naics": "72",
	      "actual": 0.76869,
	      "expected": 0.55361
	    },
	    {
	      "cbsa": 35620,
	      "naics": "81",
	      "actual": 0.41078,
	      "expected": 0.2519
	    }
	  ],
	  "35840": [
	    {
	      "cbsa": 35840,
	      "naics": "00",
	      "actual": -0.13948,
	      "expected": 0.16081
	    },
	    {
	      "cbsa": 35840,
	      "naics": "22",
	      "actual": -0.38403,
	      "expected": -0.13443
	    },
	    {
	      "cbsa": 35840,
	      "naics": "23",
	      "actual": -0.29088,
	      "expected": 0.03137
	    },
	    {
	      "cbsa": 35840,
	      "naics": "31",
	      "actual": -0.46115,
	      "expected": -0.22062
	    },
	    {
	      "cbsa": 35840,
	      "naics": "42",
	      "actual": -0.23145,
	      "expected": -0.00989
	    },
	    {
	      "cbsa": 35840,
	      "naics": "44",
	      "actual": -0.15101,
	      "expected": 0.10387
	    },
	    {
	      "cbsa": 35840,
	      "naics": "48",
	      "actual": 0.93149,
	      "expected": 0.60687
	    },
	    {
	      "cbsa": 35840,
	      "naics": "51",
	      "actual": -0.30832,
	      "expected": -0.29382
	    },
	    {
	      "cbsa": 35840,
	      "naics": "52",
	      "actual": -0.14199,
	      "expected": 0.05607
	    },
	    {
	      "cbsa": 35840,
	      "naics": "53",
	      "actual": 0.11632,
	      "expected": 0.35239
	    },
	    {
	      "cbsa": 35840,
	      "naics": "54",
	      "actual": -0.04152,
	      "expected": 0.31526
	    },
	    {
	      "cbsa": 35840,
	      "naics": "55",
	      "actual": -0.65421,
	      "expected": -0.35436
	    },
	    {
	      "cbsa": 35840,
	      "naics": "61",
	      "actual": 0.79437,
	      "expected": 1.71498
	    },
	    {
	      "cbsa": 35840,
	      "naics": "62",
	      "actual": -0.06449,
	      "expected": 0.2211
	    },
	    {
	      "cbsa": 35840,
	      "naics": "71",
	      "actual": 0.17194,
	      "expected": 0.70013
	    },
	    {
	      "cbsa": 35840,
	      "naics": "72",
	      "actual": 0.21772,
	      "expected": 0.54316
	    },
	    {
	      "cbsa": 35840,
	      "naics": "81",
	      "actual": -0.28321,
	      "expected": 0.1549
	    }
	  ],
	  "36260": [
	    {
	      "cbsa": 36260,
	      "naics": "00",
	      "actual": 0.10285,
	      "expected": 0.25978
	    },
	    {
	      "cbsa": 36260,
	      "naics": "22",
	      "actual": -0.00671,
	      "expected": 0.02622
	    },
	    {
	      "cbsa": 36260,
	      "naics": "23",
	      "actual": 0.30757,
	      "expected": 0.19116
	    },
	    {
	      "cbsa": 36260,
	      "naics": "31",
	      "actual": 0.09025,
	      "expected": 0.03348
	    },
	    {
	      "cbsa": 36260,
	      "naics": "42",
	      "actual": 0.0963,
	      "expected": 0.20304
	    },
	    {
	      "cbsa": 36260,
	      "naics": "44",
	      "actual": -0.1451,
	      "expected": 0.0854
	    },
	    {
	      "cbsa": 36260,
	      "naics": "48",
	      "actual": 0.36763,
	      "expected": -0.09687
	    },
	    {
	      "cbsa": 36260,
	      "naics": "51",
	      "actual": -0.19204,
	      "expected": -0.19532
	    },
	    {
	      "cbsa": 36260,
	      "naics": "52",
	      "actual": -0.08333,
	      "expected": 0.15559
	    },
	    {
	      "cbsa": 36260,
	      "naics": "53",
	      "actual": 0.12908,
	      "expected": 0.2196
	    },
	    {
	      "cbsa": 36260,
	      "naics": "54",
	      "actual": 0.20531,
	      "expected": 0.78567
	    },
	    {
	      "cbsa": 36260,
	      "naics": "55",
	      "actual": -0.73861,
	      "expected": -0.31289
	    },
	    {
	      "cbsa": 36260,
	      "naics": "61",
	      "actual": 3.15884,
	      "expected": 2.94937
	    },
	    {
	      "cbsa": 36260,
	      "naics": "62",
	      "actual": 0.35225,
	      "expected": 0.58874
	    },
	    {
	      "cbsa": 36260,
	      "naics": "71",
	      "actual": 0.14417,
	      "expected": 0.5675
	    },
	    {
	      "cbsa": 36260,
	      "naics": "72",
	      "actual": 0.11704,
	      "expected": 0.24237
	    },
	    {
	      "cbsa": 36260,
	      "naics": "81",
	      "actual": -0.0071,
	      "expected": 0.20957
	    }
	  ],
	  "36420": [
	    {
	      "cbsa": 36420,
	      "naics": "00",
	      "actual": 0.04007,
	      "expected": 0.25003
	    },
	    {
	      "cbsa": 36420,
	      "naics": "22",
	      "actual": 1.08867,
	      "expected": 0.57773
	    },
	    {
	      "cbsa": 36420,
	      "naics": "23",
	      "actual": 0.20246,
	      "expected": 0.35468
	    },
	    {
	      "cbsa": 36420,
	      "naics": "31",
	      "actual": -0.14574,
	      "expected": -0.01383
	    },
	    {
	      "cbsa": 36420,
	      "naics": "42",
	      "actual": 0.00269,
	      "expected": 0.23046
	    },
	    {
	      "cbsa": 36420,
	      "naics": "44",
	      "actual": -0.0364,
	      "expected": 0.11457
	    },
	    {
	      "cbsa": 36420,
	      "naics": "48",
	      "actual": 0.16297,
	      "expected": 0.41855
	    },
	    {
	      "cbsa": 36420,
	      "naics": "51",
	      "actual": -0.63453,
	      "expected": -0.33004
	    },
	    {
	      "cbsa": 36420,
	      "naics": "52",
	      "actual": -0.25162,
	      "expected": 0.16384
	    },
	    {
	      "cbsa": 36420,
	      "naics": "53",
	      "actual": -0.62441,
	      "expected": -0.12854
	    },
	    {
	      "cbsa": 36420,
	      "naics": "54",
	      "actual": -0.01402,
	      "expected": 0.32639
	    },
	    {
	      "cbsa": 36420,
	      "naics": "55",
	      "actual": 0.76764,
	      "expected": 1.00587
	    },
	    {
	      "cbsa": 36420,
	      "naics": "61",
	      "actual": -0.06061,
	      "expected": 0.31081
	    },
	    {
	      "cbsa": 36420,
	      "naics": "62",
	      "actual": 0.04385,
	      "expected": 0.2071
	    },
	    {
	      "cbsa": 36420,
	      "naics": "71",
	      "actual": 1.26858,
	      "expected": 0.46393
	    },
	    {
	      "cbsa": 36420,
	      "naics": "72",
	      "actual": -0.0272,
	      "expected": 0.26255
	    },
	    {
	      "cbsa": 36420,
	      "naics": "81",
	      "actual": -0.14964,
	      "expected": 0.03349
	    }
	  ],
	  "36540": [
	    {
	      "cbsa": 36540,
	      "naics": "00",
	      "actual": -0.00216,
	      "expected": 0.15005
	    },
	    {
	      "cbsa": 36540,
	      "naics": "22",
	      "actual": -0.83602,
	      "expected": -0.60194
	    },
	    {
	      "cbsa": 36540,
	      "naics": "23",
	      "actual": 0.1321,
	      "expected": 0.09102
	    },
	    {
	      "cbsa": 36540,
	      "naics": "31",
	      "actual": -0.15761,
	      "expected": -0.05494
	    },
	    {
	      "cbsa": 36540,
	      "naics": "42",
	      "actual": -0.23781,
	      "expected": -0.0196
	    },
	    {
	      "cbsa": 36540,
	      "naics": "44",
	      "actual": -0.12805,
	      "expected": 0.07963
	    },
	    {
	      "cbsa": 36540,
	      "naics": "48",
	      "actual": -0.09958,
	      "expected": -0.00547
	    },
	    {
	      "cbsa": 36540,
	      "naics": "51",
	      "actual": -0.2423,
	      "expected": -0.12994
	    },
	    {
	      "cbsa": 36540,
	      "naics": "52",
	      "actual": 0.24304,
	      "expected": 0.08973
	    },
	    {
	      "cbsa": 36540,
	      "naics": "53",
	      "actual": -0.01623,
	      "expected": 0.05589
	    },
	    {
	      "cbsa": 36540,
	      "naics": "54",
	      "actual": 0.21353,
	      "expected": 0.30064
	    },
	    {
	      "cbsa": 36540,
	      "naics": "55",
	      "actual": 1.05385,
	      "expected": 0.51601
	    },
	    {
	      "cbsa": 36540,
	      "naics": "61",
	      "actual": -0.54231,
	      "expected": 0.09635
	    },
	    {
	      "cbsa": 36540,
	      "naics": "62",
	      "actual": -0.10489,
	      "expected": 0.35494
	    },
	    {
	      "cbsa": 36540,
	      "naics": "71",
	      "actual": -0.17474,
	      "expected": 0.26837
	    },
	    {
	      "cbsa": 36540,
	      "naics": "72",
	      "actual": 0.02674,
	      "expected": 0.22799
	    },
	    {
	      "cbsa": 36540,
	      "naics": "81",
	      "actual": -0.16837,
	      "expected": 0.0503
	    }
	  ],
	  "36740": [
	    {
	      "cbsa": 36740,
	      "naics": "00",
	      "actual": 0.05565,
	      "expected": 0.26154
	    },
	    {
	      "cbsa": 36740,
	      "naics": "22",
	      "actual": 0.21007,
	      "expected": -0.24946
	    },
	    {
	      "cbsa": 36740,
	      "naics": "23",
	      "actual": -0.33051,
	      "expected": -0.00243
	    },
	    {
	      "cbsa": 36740,
	      "naics": "31",
	      "actual": -0.21153,
	      "expected": -0.06582
	    },
	    {
	      "cbsa": 36740,
	      "naics": "42",
	      "actual": -0.07815,
	      "expected": 0.07095
	    },
	    {
	      "cbsa": 36740,
	      "naics": "44",
	      "actual": 0.13418,
	      "expected": 0.34051
	    },
	    {
	      "cbsa": 36740,
	      "naics": "48",
	      "actual": -0.04795,
	      "expected": 0.25755
	    },
	    {
	      "cbsa": 36740,
	      "naics": "51",
	      "actual": -0.13751,
	      "expected": -0.01301
	    },
	    {
	      "cbsa": 36740,
	      "naics": "52",
	      "actual": 0.10807,
	      "expected": 0.27661
	    },
	    {
	      "cbsa": 36740,
	      "naics": "53",
	      "actual": -0.06596,
	      "expected": 0.37693
	    },
	    {
	      "cbsa": 36740,
	      "naics": "54",
	      "actual": 0.02059,
	      "expected": 0.26958
	    },
	    {
	      "cbsa": 36740,
	      "naics": "55",
	      "actual": 0.12365,
	      "expected": 0.55425
	    },
	    {
	      "cbsa": 36740,
	      "naics": "61",
	      "actual": 0.37248,
	      "expected": 0.74993
	    },
	    {
	      "cbsa": 36740,
	      "naics": "62",
	      "actual": 0.06835,
	      "expected": 0.46424
	    },
	    {
	      "cbsa": 36740,
	      "naics": "71",
	      "actual": 0.57837,
	      "expected": -0.07451
	    },
	    {
	      "cbsa": 36740,
	      "naics": "72",
	      "actual": -0.08453,
	      "expected": 0.25706
	    },
	    {
	      "cbsa": 36740,
	      "naics": "81",
	      "actual": -0.26651,
	      "expected": 0.23355
	    }
	  ],
	  "37100": [
	    {
	      "cbsa": 37100,
	      "naics": "00",
	      "actual": 0.50514,
	      "expected": 0.09079
	    },
	    {
	      "cbsa": 37100,
	      "naics": "22",
	      "actual": -0.20532,
	      "expected": -0.07959
	    },
	    {
	      "cbsa": 37100,
	      "naics": "23",
	      "actual": -0.12083,
	      "expected": -0.0898
	    },
	    {
	      "cbsa": 37100,
	      "naics": "31",
	      "actual": 1.1767,
	      "expected": -0.54379
	    },
	    {
	      "cbsa": 37100,
	      "naics": "42",
	      "actual": 0.95618,
	      "expected": -0.03496
	    },
	    {
	      "cbsa": 37100,
	      "naics": "44",
	      "actual": 0.11062,
	      "expected": 0.14529
	    },
	    {
	      "cbsa": 37100,
	      "naics": "48",
	      "actual": -0.36227,
	      "expected": 0.04365
	    },
	    {
	      "cbsa": 37100,
	      "naics": "51",
	      "actual": -0.18113,
	      "expected": -0.1465
	    },
	    {
	      "cbsa": 37100,
	      "naics": "52",
	      "actual": 0.06152,
	      "expected": 0.05286
	    },
	    {
	      "cbsa": 37100,
	      "naics": "53",
	      "actual": 0.47417,
	      "expected": 0.07394
	    },
	    {
	      "cbsa": 37100,
	      "naics": "54",
	      "actual": 0.38196,
	      "expected": 0.15075
	    },
	    {
	      "cbsa": 37100,
	      "naics": "55",
	      "actual": -0.52158,
	      "expected": -1.03733
	    },
	    {
	      "cbsa": 37100,
	      "naics": "61",
	      "actual": 0.72356,
	      "expected": 0.58252
	    },
	    {
	      "cbsa": 37100,
	      "naics": "62",
	      "actual": 0.22916,
	      "expected": 0.80235
	    },
	    {
	      "cbsa": 37100,
	      "naics": "71",
	      "actual": 2.23248,
	      "expected": 0.20955
	    },
	    {
	      "cbsa": 37100,
	      "naics": "72",
	      "actual": 0.29109,
	      "expected": 0.39157
	    },
	    {
	      "cbsa": 37100,
	      "naics": "81",
	      "actual": -0.25651,
	      "expected": -0.18642
	    }
	  ],
	  "37340": [
	    {
	      "cbsa": 37340,
	      "naics": "00",
	      "actual": -0.08732,
	      "expected": 0.08084
	    },
	    {
	      "cbsa": 37340,
	      "naics": "22",
	      "actual": 0.05096,
	      "expected": -1.16317
	    },
	    {
	      "cbsa": 37340,
	      "naics": "23",
	      "actual": -0.33156,
	      "expected": -0.11076
	    },
	    {
	      "cbsa": 37340,
	      "naics": "31",
	      "actual": -0.17468,
	      "expected": -0.05863
	    },
	    {
	      "cbsa": 37340,
	      "naics": "42",
	      "actual": 0.00833,
	      "expected": -0.01237
	    },
	    {
	      "cbsa": 37340,
	      "naics": "44",
	      "actual": -0.06252,
	      "expected": 0.05758
	    },
	    {
	      "cbsa": 37340,
	      "naics": "48",
	      "actual": 0.16496,
	      "expected": 0.2349
	    },
	    {
	      "cbsa": 37340,
	      "naics": "51",
	      "actual": -0.32836,
	      "expected": 0.1935
	    },
	    {
	      "cbsa": 37340,
	      "naics": "52",
	      "actual": -0.05422,
	      "expected": 0.15128
	    },
	    {
	      "cbsa": 37340,
	      "naics": "53",
	      "actual": -0.36795,
	      "expected": -0.14188
	    },
	    {
	      "cbsa": 37340,
	      "naics": "54",
	      "actual": -0.24146,
	      "expected": 0.0208
	    },
	    {
	      "cbsa": 37340,
	      "naics": "55",
	      "actual": 3.40461,
	      "expected": 2.27275
	    },
	    {
	      "cbsa": 37340,
	      "naics": "61",
	      "actual": 0.5132,
	      "expected": 0.85931
	    },
	    {
	      "cbsa": 37340,
	      "naics": "62",
	      "actual": -0.1175,
	      "expected": 0.10403
	    },
	    {
	      "cbsa": 37340,
	      "naics": "71",
	      "actual": 0.19761,
	      "expected": 0.25915
	    },
	    {
	      "cbsa": 37340,
	      "naics": "72",
	      "actual": 0.19765,
	      "expected": 0.32826
	    },
	    {
	      "cbsa": 37340,
	      "naics": "81",
	      "actual": -0.15592,
	      "expected": 0.07014
	    }
	  ],
	  "37980": [
	    {
	      "cbsa": 37980,
	      "naics": "00",
	      "actual": 0.23984,
	      "expected": 0.17902
	    },
	    {
	      "cbsa": 37980,
	      "naics": "22",
	      "actual": -0.43081,
	      "expected": -0.03515
	    },
	    {
	      "cbsa": 37980,
	      "naics": "23",
	      "actual": 0.1612,
	      "expected": -0.2396
	    },
	    {
	      "cbsa": 37980,
	      "naics": "31",
	      "actual": -0.48093,
	      "expected": -0.25758
	    },
	    {
	      "cbsa": 37980,
	      "naics": "42",
	      "actual": 0.2128,
	      "expected": -0.07489
	    },
	    {
	      "cbsa": 37980,
	      "naics": "44",
	      "actual": 0.02223,
	      "expected": 0.02089
	    },
	    {
	      "cbsa": 37980,
	      "naics": "48",
	      "actual": -0.1763,
	      "expected": 0.02846
	    },
	    {
	      "cbsa": 37980,
	      "naics": "51",
	      "actual": 0.53759,
	      "expected": -0.22442
	    },
	    {
	      "cbsa": 37980,
	      "naics": "52",
	      "actual": -0.19645,
	      "expected": -0.01819
	    },
	    {
	      "cbsa": 37980,
	      "naics": "53",
	      "actual": 0.21056,
	      "expected": -0.09326
	    },
	    {
	      "cbsa": 37980,
	      "naics": "54",
	      "actual": 0.31502,
	      "expected": 0.16222
	    },
	    {
	      "cbsa": 37980,
	      "naics": "55",
	      "actual": 0.1219,
	      "expected": 0.38347
	    },
	    {
	      "cbsa": 37980,
	      "naics": "61",
	      "actual": 0.75074,
	      "expected": 0.42822
	    },
	    {
	      "cbsa": 37980,
	      "naics": "62",
	      "actual": 1.24636,
	      "expected": 0.91564
	    },
	    {
	      "cbsa": 37980,
	      "naics": "71",
	      "actual": -0.09675,
	      "expected": 0.25297
	    },
	    {
	      "cbsa": 37980,
	      "naics": "72",
	      "actual": 0.29932,
	      "expected": 0.26783
	    },
	    {
	      "cbsa": 37980,
	      "naics": "81",
	      "actual": -0.04002,
	      "expected": 0.09824
	    }
	  ],
	  "38060": [
	    {
	      "cbsa": 38060,
	      "naics": "00",
	      "actual": -0.00264,
	      "expected": 0.22479
	    },
	    {
	      "cbsa": 38060,
	      "naics": "22",
	      "actual": -0.39112,
	      "expected": -0.13636
	    },
	    {
	      "cbsa": 38060,
	      "naics": "23",
	      "actual": -0.39351,
	      "expected": -0.27735
	    },
	    {
	      "cbsa": 38060,
	      "naics": "31",
	      "actual": -0.35502,
	      "expected": -0.14365
	    },
	    {
	      "cbsa": 38060,
	      "naics": "42",
	      "actual": -0.14779,
	      "expected": -0.01261
	    },
	    {
	      "cbsa": 38060,
	      "naics": "44",
	      "actual": -0.15017,
	      "expected": 0.18651
	    },
	    {
	      "cbsa": 38060,
	      "naics": "48",
	      "actual": -0.14717,
	      "expected": 0.17779
	    },
	    {
	      "cbsa": 38060,
	      "naics": "51",
	      "actual": -0.36647,
	      "expected": -0.07767
	    },
	    {
	      "cbsa": 38060,
	      "naics": "52",
	      "actual": 0.13578,
	      "expected": 0.21961
	    },
	    {
	      "cbsa": 38060,
	      "naics": "53",
	      "actual": 0.24507,
	      "expected": 0.12813
	    },
	    {
	      "cbsa": 38060,
	      "naics": "54",
	      "actual": 0.05637,
	      "expected": 0.27352
	    },
	    {
	      "cbsa": 38060,
	      "naics": "55",
	      "actual": 0.19986,
	      "expected": 0.4165
	    },
	    {
	      "cbsa": 38060,
	      "naics": "61",
	      "actual": 1.70825,
	      "expected": 1.45537
	    },
	    {
	      "cbsa": 38060,
	      "naics": "62",
	      "actual": 0.54777,
	      "expected": 0.79172
	    },
	    {
	      "cbsa": 38060,
	      "naics": "71",
	      "actual": 0.21995,
	      "expected": 0.36017
	    },
	    {
	      "cbsa": 38060,
	      "naics": "72",
	      "actual": -0.17275,
	      "expected": 0.22509
	    },
	    {
	      "cbsa": 38060,
	      "naics": "81",
	      "actual": -0.15927,
	      "expected": 0.12549
	    }
	  ],
	  "38300": [
	    {
	      "cbsa": 38300,
	      "naics": "00",
	      "actual": -0.06894,
	      "expected": 0.24142
	    },
	    {
	      "cbsa": 38300,
	      "naics": "22",
	      "actual": -0.30876,
	      "expected": 0.13537
	    },
	    {
	      "cbsa": 38300,
	      "naics": "23",
	      "actual": -0.17672,
	      "expected": 0.09248
	    },
	    {
	      "cbsa": 38300,
	      "naics": "31",
	      "actual": -0.62663,
	      "expected": -0.04448
	    },
	    {
	      "cbsa": 38300,
	      "naics": "42",
	      "actual": -0.33573,
	      "expected": 0.03136
	    },
	    {
	      "cbsa": 38300,
	      "naics": "44",
	      "actual": -0.56684,
	      "expected": -0.07545
	    },
	    {
	      "cbsa": 38300,
	      "naics": "48",
	      "actual": -0.68214,
	      "expected": -0.03465
	    },
	    {
	      "cbsa": 38300,
	      "naics": "51",
	      "actual": -0.41705,
	      "expected": -0.14902
	    },
	    {
	      "cbsa": 38300,
	      "naics": "52",
	      "actual": -0.11553,
	      "expected": 0.16715
	    },
	    {
	      "cbsa": 38300,
	      "naics": "53",
	      "actual": 0.0156,
	      "expected": 0.04243
	    },
	    {
	      "cbsa": 38300,
	      "naics": "54",
	      "actual": -0.10947,
	      "expected": 0.293
	    },
	    {
	      "cbsa": 38300,
	      "naics": "55",
	      "actual": 0.17891,
	      "expected": 1.01921
	    },
	    {
	      "cbsa": 38300,
	      "naics": "61",
	      "actual": 0.25343,
	      "expected": 0.21269
	    },
	    {
	      "cbsa": 38300,
	      "naics": "62",
	      "actual": 0.05194,
	      "expected": 0.32892
	    },
	    {
	      "cbsa": 38300,
	      "naics": "71",
	      "actual": 0.56521,
	      "expected": 0.39372
	    },
	    {
	      "cbsa": 38300,
	      "naics": "72",
	      "actual": 0.23397,
	      "expected": 0.17318
	    },
	    {
	      "cbsa": 38300,
	      "naics": "81",
	      "actual": -0.26168,
	      "expected": 0.04778
	    }
	  ],
	  "38900": [
	    {
	      "cbsa": 38900,
	      "naics": "00",
	      "actual": 0.22409,
	      "expected": 0.29255
	    },
	    {
	      "cbsa": 38900,
	      "naics": "22",
	      "actual": -0.33562,
	      "expected": -0.18545
	    },
	    {
	      "cbsa": 38900,
	      "naics": "23",
	      "actual": 0.36779,
	      "expected": 0.21588
	    },
	    {
	      "cbsa": 38900,
	      "naics": "31",
	      "actual": 0.02604,
	      "expected": 0.0138
	    },
	    {
	      "cbsa": 38900,
	      "naics": "42",
	      "actual": -0.21201,
	      "expected": -0.00746
	    },
	    {
	      "cbsa": 38900,
	      "naics": "44",
	      "actual": 0.0417,
	      "expected": 0.16682
	    },
	    {
	      "cbsa": 38900,
	      "naics": "48",
	      "actual": -0.08649,
	      "expected": 0.04517
	    },
	    {
	      "cbsa": 38900,
	      "naics": "51",
	      "actual": -0.03056,
	      "expected": 0.1768
	    },
	    {
	      "cbsa": 38900,
	      "naics": "52",
	      "actual": -0.04487,
	      "expected": 0.0521
	    },
	    {
	      "cbsa": 38900,
	      "naics": "53",
	      "actual": -0.00681,
	      "expected": 0.00019
	    },
	    {
	      "cbsa": 38900,
	      "naics": "54",
	      "actual": 0.62938,
	      "expected": 0.57524
	    },
	    {
	      "cbsa": 38900,
	      "naics": "55",
	      "actual": 0.87724,
	      "expected": 0.78839
	    },
	    {
	      "cbsa": 38900,
	      "naics": "61",
	      "actual": 0.44049,
	      "expected": 0.66912
	    },
	    {
	      "cbsa": 38900,
	      "naics": "62",
	      "actual": 0.38171,
	      "expected": 0.53691
	    },
	    {
	      "cbsa": 38900,
	      "naics": "71",
	      "actual": 0.21289,
	      "expected": 0.15161
	    },
	    {
	      "cbsa": 38900,
	      "naics": "72",
	      "actual": 0.33472,
	      "expected": 0.36489
	    },
	    {
	      "cbsa": 38900,
	      "naics": "81",
	      "actual": -0.00999,
	      "expected": 0.18234
	    }
	  ],
	  "39300": [
	    {
	      "cbsa": 39300,
	      "naics": "00",
	      "actual": -0.05505,
	      "expected": 0.12179
	    },
	    {
	      "cbsa": 39300,
	      "naics": "22",
	      "actual": 0.10686,
	      "expected": 0.12193
	    },
	    {
	      "cbsa": 39300,
	      "naics": "23",
	      "actual": -0.159,
	      "expected": -0.155
	    },
	    {
	      "cbsa": 39300,
	      "naics": "31",
	      "actual": -0.41222,
	      "expected": -0.32084
	    },
	    {
	      "cbsa": 39300,
	      "naics": "42",
	      "actual": 0.09165,
	      "expected": 0.03139
	    },
	    {
	      "cbsa": 39300,
	      "naics": "44",
	      "actual": -0.06776,
	      "expected": -0.07435
	    },
	    {
	      "cbsa": 39300,
	      "naics": "48",
	      "actual": -0.33834,
	      "expected": 0.02468
	    },
	    {
	      "cbsa": 39300,
	      "naics": "51",
	      "actual": -0.59356,
	      "expected": -0.1037
	    },
	    {
	      "cbsa": 39300,
	      "naics": "52",
	      "actual": -0.12283,
	      "expected": -0.04473
	    },
	    {
	      "cbsa": 39300,
	      "naics": "53",
	      "actual": 0.00816,
	      "expected": -0.05236
	    },
	    {
	      "cbsa": 39300,
	      "naics": "54",
	      "actual": -0.00789,
	      "expected": 0.24765
	    },
	    {
	      "cbsa": 39300,
	      "naics": "55",
	      "actual": 0.2078,
	      "expected": 0.48165
	    },
	    {
	      "cbsa": 39300,
	      "naics": "61",
	      "actual": -0.04851,
	      "expected": 0.36986
	    },
	    {
	      "cbsa": 39300,
	      "naics": "62",
	      "actual": 0.14371,
	      "expected": 0.25313
	    },
	    {
	      "cbsa": 39300,
	      "naics": "71",
	      "actual": 0.08809,
	      "expected": 0.2861
	    },
	    {
	      "cbsa": 39300,
	      "naics": "72",
	      "actual": 0.09043,
	      "expected": 0.15788
	    },
	    {
	      "cbsa": 39300,
	      "naics": "81",
	      "actual": -0.15004,
	      "expected": 0.01967
	    }
	  ],
	  "39340": [
	    {
	      "cbsa": 39340,
	      "naics": "00",
	      "actual": 0.30718,
	      "expected": 0.41139
	    },
	    {
	      "cbsa": 39340,
	      "naics": "22",
	      "actual": -0.59496,
	      "expected": 0.35453
	    },
	    {
	      "cbsa": 39340,
	      "naics": "23",
	      "actual": 2.60307,
	      "expected": 1.68823
	    },
	    {
	      "cbsa": 39340,
	      "naics": "31",
	      "actual": -0.28377,
	      "expected": 0.03038
	    },
	    {
	      "cbsa": 39340,
	      "naics": "42",
	      "actual": 1.05476,
	      "expected": 1.25477
	    },
	    {
	      "cbsa": 39340,
	      "naics": "44",
	      "actual": 0.02301,
	      "expected": 0.35743
	    },
	    {
	      "cbsa": 39340,
	      "naics": "48",
	      "actual": 1.02216,
	      "expected": 0.51771
	    },
	    {
	      "cbsa": 39340,
	      "naics": "51",
	      "actual": -0.00658,
	      "expected": 0.5947
	    },
	    {
	      "cbsa": 39340,
	      "naics": "52",
	      "actual": -0.32192,
	      "expected": 0.08834
	    },
	    {
	      "cbsa": 39340,
	      "naics": "53",
	      "actual": -0.04704,
	      "expected": 0.40954
	    },
	    {
	      "cbsa": 39340,
	      "naics": "54",
	      "actual": 0.73354,
	      "expected": 0.89958
	    },
	    {
	      "cbsa": 39340,
	      "naics": "55",
	      "actual": 0.18066,
	      "expected": 0.04142
	    },
	    {
	      "cbsa": 39340,
	      "naics": "61",
	      "actual": 0.64289,
	      "expected": 0.10969
	    },
	    {
	      "cbsa": 39340,
	      "naics": "62",
	      "actual": 0.00313,
	      "expected": 0.72666
	    },
	    {
	      "cbsa": 39340,
	      "naics": "71",
	      "actual": 0.65072,
	      "expected": 0.39318
	    },
	    {
	      "cbsa": 39340,
	      "naics": "72",
	      "actual": 0.11459,
	      "expected": 0.41152
	    },
	    {
	      "cbsa": 39340,
	      "naics": "81",
	      "actual": -0.15751,
	      "expected": 0.15517
	    }
	  ],
	  "39580": [
	    {
	      "cbsa": 39580,
	      "naics": "00",
	      "actual": 0.11922,
	      "expected": 0.40817
	    },
	    {
	      "cbsa": 39580,
	      "naics": "22",
	      "actual": -0.43802,
	      "expected": 0.06189
	    },
	    {
	      "cbsa": 39580,
	      "naics": "23",
	      "actual": -0.06438,
	      "expected": 0.12103
	    },
	    {
	      "cbsa": 39580,
	      "naics": "31",
	      "actual": 0.32933,
	      "expected": 0.09839
	    },
	    {
	      "cbsa": 39580,
	      "naics": "42",
	      "actual": 0.07482,
	      "expected": 0.38972
	    },
	    {
	      "cbsa": 39580,
	      "naics": "44",
	      "actual": -0.0593,
	      "expected": 0.30035
	    },
	    {
	      "cbsa": 39580,
	      "naics": "48",
	      "actual": -0.31369,
	      "expected": -0.1545
	    },
	    {
	      "cbsa": 39580,
	      "naics": "51",
	      "actual": -0.08695,
	      "expected": 0.11
	    },
	    {
	      "cbsa": 39580,
	      "naics": "52",
	      "actual": 0.0416,
	      "expected": 0.34996
	    },
	    {
	      "cbsa": 39580,
	      "naics": "53",
	      "actual": 0.20324,
	      "expected": 0.39804
	    },
	    {
	      "cbsa": 39580,
	      "naics": "54",
	      "actual": 0.05527,
	      "expected": 0.57553
	    },
	    {
	      "cbsa": 39580,
	      "naics": "55",
	      "actual": -0.42048,
	      "expected": 0.13657
	    },
	    {
	      "cbsa": 39580,
	      "naics": "61",
	      "actual": 0.21841,
	      "expected": 0.56646
	    },
	    {
	      "cbsa": 39580,
	      "naics": "62",
	      "actual": 1.05507,
	      "expected": 1.04141
	    },
	    {
	      "cbsa": 39580,
	      "naics": "71",
	      "actual": 0.87761,
	      "expected": 1.1623
	    },
	    {
	      "cbsa": 39580,
	      "naics": "72",
	      "actual": 0.23656,
	      "expected": 0.55539
	    },
	    {
	      "cbsa": 39580,
	      "naics": "81",
	      "actual": 0.04121,
	      "expected": 0.24897
	    }
	  ],
	  "40060": [
	    {
	      "cbsa": 40060,
	      "naics": "00",
	      "actual": 0.19948,
	      "expected": 0.20134
	    },
	    {
	      "cbsa": 40060,
	      "naics": "22",
	      "actual": -0.84316,
	      "expected": -0.22618
	    },
	    {
	      "cbsa": 40060,
	      "naics": "23",
	      "actual": -0.26518,
	      "expected": -0.02601
	    },
	    {
	      "cbsa": 40060,
	      "naics": "31",
	      "actual": -0.57038,
	      "expected": -0.41481
	    },
	    {
	      "cbsa": 40060,
	      "naics": "42",
	      "actual": -0.27705,
	      "expected": 0.01062
	    },
	    {
	      "cbsa": 40060,
	      "naics": "44",
	      "actual": -0.06638,
	      "expected": 0.05422
	    },
	    {
	      "cbsa": 40060,
	      "naics": "48",
	      "actual": -0.0684,
	      "expected": 0.14505
	    },
	    {
	      "cbsa": 40060,
	      "naics": "51",
	      "actual": -0.43832,
	      "expected": -0.28078
	    },
	    {
	      "cbsa": 40060,
	      "naics": "52",
	      "actual": 0.03581,
	      "expected": 0.14049
	    },
	    {
	      "cbsa": 40060,
	      "naics": "53",
	      "actual": -0.23511,
	      "expected": 0.013
	    },
	    {
	      "cbsa": 40060,
	      "naics": "54",
	      "actual": 0.19179,
	      "expected": 0.412
	    },
	    {
	      "cbsa": 40060,
	      "naics": "55",
	      "actual": 0.34054,
	      "expected": 0.11975
	    },
	    {
	      "cbsa": 40060,
	      "naics": "61",
	      "actual": 0.6307,
	      "expected": -0.24594
	    },
	    {
	      "cbsa": 40060,
	      "naics": "62",
	      "actual": 1.2175,
	      "expected": 0.70181
	    },
	    {
	      "cbsa": 40060,
	      "naics": "71",
	      "actual": 1.0973,
	      "expected": 0.45661
	    },
	    {
	      "cbsa": 40060,
	      "naics": "72",
	      "actual": 0.28205,
	      "expected": 0.34821
	    },
	    {
	      "cbsa": 40060,
	      "naics": "81",
	      "actual": -0.1348,
	      "expected": 0.0992
	    }
	  ],
	  "40140": [
	    {
	      "cbsa": 40140,
	      "naics": "00",
	      "actual": -0.01685,
	      "expected": 0.34264
	    },
	    {
	      "cbsa": 40140,
	      "naics": "22",
	      "actual": -0.00222,
	      "expected": -0.02861
	    },
	    {
	      "cbsa": 40140,
	      "naics": "23",
	      "actual": -0.34768,
	      "expected": -0.19648
	    },
	    {
	      "cbsa": 40140,
	      "naics": "31",
	      "actual": -0.33005,
	      "expected": -0.25341
	    },
	    {
	      "cbsa": 40140,
	      "naics": "42",
	      "actual": 0.11084,
	      "expected": 0.37691
	    },
	    {
	      "cbsa": 40140,
	      "naics": "44",
	      "actual": -0.0568,
	      "expected": 0.11318
	    },
	    {
	      "cbsa": 40140,
	      "naics": "48",
	      "actual": -0.21955,
	      "expected": 0.53878
	    },
	    {
	      "cbsa": 40140,
	      "naics": "51",
	      "actual": -0.42194,
	      "expected": -0.05122
	    },
	    {
	      "cbsa": 40140,
	      "naics": "52",
	      "actual": -0.19064,
	      "expected": -0.01862
	    },
	    {
	      "cbsa": 40140,
	      "naics": "53",
	      "actual": -0.25325,
	      "expected": -0.02224
	    },
	    {
	      "cbsa": 40140,
	      "naics": "54",
	      "actual": -0.06171,
	      "expected": 0.31994
	    },
	    {
	      "cbsa": 40140,
	      "naics": "55",
	      "actual": -0.2942,
	      "expected": -0.16492
	    },
	    {
	      "cbsa": 40140,
	      "naics": "61",
	      "actual": 2.41636,
	      "expected": 1.03101
	    },
	    {
	      "cbsa": 40140,
	      "naics": "62",
	      "actual": 0.42591,
	      "expected": 1.18141
	    },
	    {
	      "cbsa": 40140,
	      "naics": "71",
	      "actual": -0.10412,
	      "expected": 0.21317
	    },
	    {
	      "cbsa": 40140,
	      "naics": "72",
	      "actual": 0.04325,
	      "expected": 0.33766
	    },
	    {
	      "cbsa": 40140,
	      "naics": "81",
	      "actual": -0.41958,
	      "expected": -0.01983
	    }
	  ],
	  "40380": [
	    {
	      "cbsa": 40380,
	      "naics": "00",
	      "actual": -0.3795,
	      "expected": 0.00952
	    },
	    {
	      "cbsa": 40380,
	      "naics": "22",
	      "actual": -0.94779,
	      "expected": -0.18192
	    },
	    {
	      "cbsa": 40380,
	      "naics": "23",
	      "actual": 0.00749,
	      "expected": 0.1381
	    },
	    {
	      "cbsa": 40380,
	      "naics": "31",
	      "actual": -0.84155,
	      "expected": -0.21061
	    },
	    {
	      "cbsa": 40380,
	      "naics": "42",
	      "actual": -0.62368,
	      "expected": -0.08943
	    },
	    {
	      "cbsa": 40380,
	      "naics": "44",
	      "actual": -0.31951,
	      "expected": -0.08046
	    },
	    {
	      "cbsa": 40380,
	      "naics": "48",
	      "actual": -0.24795,
	      "expected": 0.0303
	    },
	    {
	      "cbsa": 40380,
	      "naics": "51",
	      "actual": -0.63821,
	      "expected": -0.27268
	    },
	    {
	      "cbsa": 40380,
	      "naics": "52",
	      "actual": -0.41415,
	      "expected": 0.00117
	    },
	    {
	      "cbsa": 40380,
	      "naics": "53",
	      "actual": -0.28577,
	      "expected": 0.05211
	    },
	    {
	      "cbsa": 40380,
	      "naics": "54",
	      "actual": -0.33029,
	      "expected": 0.08591
	    },
	    {
	      "cbsa": 40380,
	      "naics": "55",
	      "actual": -0.64737,
	      "expected": 0.0178
	    },
	    {
	      "cbsa": 40380,
	      "naics": "61",
	      "actual": 0.01879,
	      "expected": 0.22402
	    },
	    {
	      "cbsa": 40380,
	      "naics": "62",
	      "actual": 0.07083,
	      "expected": 0.14365
	    },
	    {
	      "cbsa": 40380,
	      "naics": "71",
	      "actual": -0.39759,
	      "expected": -0.03898
	    },
	    {
	      "cbsa": 40380,
	      "naics": "72",
	      "actual": -0.51523,
	      "expected": 0.13226
	    },
	    {
	      "cbsa": 40380,
	      "naics": "81",
	      "actual": 0.04642,
	      "expected": 0.1793
	    }
	  ],
	  "40900": [
	    {
	      "cbsa": 40900,
	      "naics": "00",
	      "actual": -0.44308,
	      "expected": -0.02279
	    },
	    {
	      "cbsa": 40900,
	      "naics": "22",
	      "actual": 0.03808,
	      "expected": 0.05682
	    },
	    {
	      "cbsa": 40900,
	      "naics": "23",
	      "actual": -0.42302,
	      "expected": -0.2813
	    },
	    {
	      "cbsa": 40900,
	      "naics": "31",
	      "actual": -0.40822,
	      "expected": -0.26596
	    },
	    {
	      "cbsa": 40900,
	      "naics": "42",
	      "actual": -0.18226,
	      "expected": -0.07168
	    },
	    {
	      "cbsa": 40900,
	      "naics": "44",
	      "actual": -0.12443,
	      "expected": 0.07028
	    },
	    {
	      "cbsa": 40900,
	      "naics": "48",
	      "actual": -0.0721,
	      "expected": -0.00001
	    },
	    {
	      "cbsa": 40900,
	      "naics": "51",
	      "actual": -0.52126,
	      "expected": -0.1702
	    },
	    {
	      "cbsa": 40900,
	      "naics": "52",
	      "actual": -0.36058,
	      "expected": -0.16689
	    },
	    {
	      "cbsa": 40900,
	      "naics": "53",
	      "actual": -0.33372,
	      "expected": -0.09642
	    },
	    {
	      "cbsa": 40900,
	      "naics": "54",
	      "actual": -0.11223,
	      "expected": 0.11982
	    },
	    {
	      "cbsa": 40900,
	      "naics": "55",
	      "actual": 0.14116,
	      "expected": 0.18366
	    },
	    {
	      "cbsa": 40900,
	      "naics": "61",
	      "actual": 0.12843,
	      "expected": 0.04768
	    },
	    {
	      "cbsa": 40900,
	      "naics": "62",
	      "actual": 0.68405,
	      "expected": 1.65788
	    },
	    {
	      "cbsa": 40900,
	      "naics": "71",
	      "actual": -0.17947,
	      "expected": 0.1102
	    },
	    {
	      "cbsa": 40900,
	      "naics": "72",
	      "actual": -0.0836,
	      "expected": 0.19046
	    },
	    {
	      "cbsa": 40900,
	      "naics": "81",
	      "actual": -0.93374,
	      "expected": -0.38995
	    }
	  ],
	  "41180": [
	    {
	      "cbsa": 41180,
	      "naics": "00",
	      "actual": -0.08023,
	      "expected": 0.17404
	    },
	    {
	      "cbsa": 41180,
	      "naics": "22",
	      "actual": -0.19391,
	      "expected": -0.00415
	    },
	    {
	      "cbsa": 41180,
	      "naics": "23",
	      "actual": -0.05959,
	      "expected": -0.32643
	    },
	    {
	      "cbsa": 41180,
	      "naics": "31",
	      "actual": -0.38548,
	      "expected": -0.32053
	    },
	    {
	      "cbsa": 41180,
	      "naics": "42",
	      "actual": 0.39234,
	      "expected": 0.02399
	    },
	    {
	      "cbsa": 41180,
	      "naics": "44",
	      "actual": -0.32807,
	      "expected": -0.03927
	    },
	    {
	      "cbsa": 41180,
	      "naics": "48",
	      "actual": 0.04452,
	      "expected": 0.08951
	    },
	    {
	      "cbsa": 41180,
	      "naics": "51",
	      "actual": -0.43704,
	      "expected": -0.05773
	    },
	    {
	      "cbsa": 41180,
	      "naics": "52",
	      "actual": 0.01141,
	      "expected": 0.1693
	    },
	    {
	      "cbsa": 41180,
	      "naics": "53",
	      "actual": 0.17993,
	      "expected": 0.0551
	    },
	    {
	      "cbsa": 41180,
	      "naics": "54",
	      "actual": 0.2688,
	      "expected": 0.20536
	    },
	    {
	      "cbsa": 41180,
	      "naics": "55",
	      "actual": -0.08586,
	      "expected": 0.09542
	    },
	    {
	      "cbsa": 41180,
	      "naics": "61",
	      "actual": -0.21243,
	      "expected": 0.02917
	    },
	    {
	      "cbsa": 41180,
	      "naics": "62",
	      "actual": -0.19045,
	      "expected": 0.63171
	    },
	    {
	      "cbsa": 41180,
	      "naics": "71",
	      "actual": 1.50746,
	      "expected": -0.14806
	    },
	    {
	      "cbsa": 41180,
	      "naics": "72",
	      "actual": -0.15492,
	      "expected": 0.16064
	    },
	    {
	      "cbsa": 41180,
	      "naics": "81",
	      "actual": 0.06759,
	      "expected": -0.01609
	    }
	  ],
	  "41620": [
	    {
	      "cbsa": 41620,
	      "naics": "00",
	      "actual": 0.05589,
	      "expected": 0.24236
	    },
	    {
	      "cbsa": 41620,
	      "naics": "22",
	      "actual": -0.40373,
	      "expected": -0.02176
	    },
	    {
	      "cbsa": 41620,
	      "naics": "23",
	      "actual": 0.01789,
	      "expected": 0.10827
	    },
	    {
	      "cbsa": 41620,
	      "naics": "31",
	      "actual": -0.11408,
	      "expected": 0.0377
	    },
	    {
	      "cbsa": 41620,
	      "naics": "42",
	      "actual": -0.13853,
	      "expected": 0.13154
	    },
	    {
	      "cbsa": 41620,
	      "naics": "44",
	      "actual": -0.04267,
	      "expected": 0.1149
	    },
	    {
	      "cbsa": 41620,
	      "naics": "48",
	      "actual": 0.32076,
	      "expected": 0.60289
	    },
	    {
	      "cbsa": 41620,
	      "naics": "51",
	      "actual": -0.07278,
	      "expected": -0.01558
	    },
	    {
	      "cbsa": 41620,
	      "naics": "52",
	      "actual": -0.04713,
	      "expected": 0.20959
	    },
	    {
	      "cbsa": 41620,
	      "naics": "53",
	      "actual": -0.01956,
	      "expected": 0.22039
	    },
	    {
	      "cbsa": 41620,
	      "naics": "54",
	      "actual": 0.39558,
	      "expected": 0.61157
	    },
	    {
	      "cbsa": 41620,
	      "naics": "55",
	      "actual": -0.21885,
	      "expected": 0.00152
	    },
	    {
	      "cbsa": 41620,
	      "naics": "61",
	      "actual": 1.13727,
	      "expected": 1.16259
	    },
	    {
	      "cbsa": 41620,
	      "naics": "62",
	      "actual": 0.27409,
	      "expected": 0.43126
	    },
	    {
	      "cbsa": 41620,
	      "naics": "71",
	      "actual": 0.22354,
	      "expected": 0.43223
	    },
	    {
	      "cbsa": 41620,
	      "naics": "72",
	      "actual": 0.06672,
	      "expected": 0.21624
	    },
	    {
	      "cbsa": 41620,
	      "naics": "81",
	      "actual": 0.03604,
	      "expected": 0.20387
	    }
	  ],
	  "41700": [
	    {
	      "cbsa": 41700,
	      "naics": "00",
	      "actual": 0.06241,
	      "expected": 0.37429
	    },
	    {
	      "cbsa": 41700,
	      "naics": "22",
	      "actual": 1.86886,
	      "expected": 0.39564
	    },
	    {
	      "cbsa": 41700,
	      "naics": "23",
	      "actual": 0.09052,
	      "expected": 0.19657
	    },
	    {
	      "cbsa": 41700,
	      "naics": "31",
	      "actual": -0.34421,
	      "expected": -0.15005
	    },
	    {
	      "cbsa": 41700,
	      "naics": "42",
	      "actual": -0.18683,
	      "expected": 0.15828
	    },
	    {
	      "cbsa": 41700,
	      "naics": "44",
	      "actual": -0.10568,
	      "expected": 0.17144
	    },
	    {
	      "cbsa": 41700,
	      "naics": "48",
	      "actual": -0.1164,
	      "expected": 0.14687
	    },
	    {
	      "cbsa": 41700,
	      "naics": "51",
	      "actual": -0.35751,
	      "expected": 0.01328
	    },
	    {
	      "cbsa": 41700,
	      "naics": "52",
	      "actual": 0.29502,
	      "expected": 0.50899
	    },
	    {
	      "cbsa": 41700,
	      "naics": "53",
	      "actual": 0.05467,
	      "expected": 0.2432
	    },
	    {
	      "cbsa": 41700,
	      "naics": "54",
	      "actual": -0.14404,
	      "expected": 0.34537
	    },
	    {
	      "cbsa": 41700,
	      "naics": "55",
	      "actual": 3.30325,
	      "expected": 2.56525
	    },
	    {
	      "cbsa": 41700,
	      "naics": "61",
	      "actual": 1.49871,
	      "expected": 1.29669
	    },
	    {
	      "cbsa": 41700,
	      "naics": "62",
	      "actual": 0.2027,
	      "expected": 0.55723
	    },
	    {
	      "cbsa": 41700,
	      "naics": "71",
	      "actual": 0.02112,
	      "expected": 0.39667
	    },
	    {
	      "cbsa": 41700,
	      "naics": "72",
	      "actual": 0.00376,
	      "expected": 0.38712
	    },
	    {
	      "cbsa": 41700,
	      "naics": "81",
	      "actual": -0.10897,
	      "expected": 0.19092
	    }
	  ],
	  "41740": [
	    {
	      "cbsa": 41740,
	      "naics": "00",
	      "actual": -0.02631,
	      "expected": 0.15017
	    },
	    {
	      "cbsa": 41740,
	      "naics": "22",
	      "actual": 0.22084,
	      "expected": -0.17601
	    },
	    {
	      "cbsa": 41740,
	      "naics": "23",
	      "actual": -0.31549,
	      "expected": -0.14757
	    },
	    {
	      "cbsa": 41740,
	      "naics": "31",
	      "actual": -0.42544,
	      "expected": -0.13746
	    },
	    {
	      "cbsa": 41740,
	      "naics": "42",
	      "actual": 0.11468,
	      "expected": 0.04524
	    },
	    {
	      "cbsa": 41740,
	      "naics": "44",
	      "actual": -0.06413,
	      "expected": 0.03691
	    },
	    {
	      "cbsa": 41740,
	      "naics": "48",
	      "actual": -0.28379,
	      "expected": 0.01244
	    },
	    {
	      "cbsa": 41740,
	      "naics": "51",
	      "actual": -0.46248,
	      "expected": -0.23708
	    },
	    {
	      "cbsa": 41740,
	      "naics": "52",
	      "actual": -0.03189,
	      "expected": -0.08711
	    },
	    {
	      "cbsa": 41740,
	      "naics": "53",
	      "actual": -0.14972,
	      "expected": -0.0343
	    },
	    {
	      "cbsa": 41740,
	      "naics": "54",
	      "actual": 0.13808,
	      "expected": 0.34374
	    },
	    {
	      "cbsa": 41740,
	      "naics": "55",
	      "actual": 0.39163,
	      "expected": 0.24126
	    },
	    {
	      "cbsa": 41740,
	      "naics": "61",
	      "actual": 0.754,
	      "expected": 0.93675
	    },
	    {
	      "cbsa": 41740,
	      "naics": "62",
	      "actual": 0.30109,
	      "expected": 0.78418
	    },
	    {
	      "cbsa": 41740,
	      "naics": "71",
	      "actual": -0.55764,
	      "expected": 0.07345
	    },
	    {
	      "cbsa": 41740,
	      "naics": "72",
	      "actual": 0.16915,
	      "expected": 0.28888
	    },
	    {
	      "cbsa": 41740,
	      "naics": "81",
	      "actual": 0.08865,
	      "expected": -0.06109
	    }
	  ],
	  "41860": [
	    {
	      "cbsa": 41860,
	      "naics": "00",
	      "actual": 0.63606,
	      "expected": 0.33812
	    },
	    {
	      "cbsa": 41860,
	      "naics": "22",
	      "actual": 1.7615,
	      "expected": 0.53103
	    },
	    {
	      "cbsa": 41860,
	      "naics": "23",
	      "actual": 0.35051,
	      "expected": 0.04657
	    },
	    {
	      "cbsa": 41860,
	      "naics": "31",
	      "actual": -0.05582,
	      "expected": -0.03846
	    },
	    {
	      "cbsa": 41860,
	      "naics": "42",
	      "actual": 0.69386,
	      "expected": 0.10204
	    },
	    {
	      "cbsa": 41860,
	      "naics": "44",
	      "actual": 0.014,
	      "expected": 0.01461
	    },
	    {
	      "cbsa": 41860,
	      "naics": "48",
	      "actual": -0.53723,
	      "expected": -0.12465
	    },
	    {
	      "cbsa": 41860,
	      "naics": "51",
	      "actual": 1.35913,
	      "expected": 0.91567
	    },
	    {
	      "cbsa": 41860,
	      "naics": "52",
	      "actual": 0.09583,
	      "expected": -0.11697
	    },
	    {
	      "cbsa": 41860,
	      "naics": "53",
	      "actual": 0.48607,
	      "expected": 0.07893
	    },
	    {
	      "cbsa": 41860,
	      "naics": "54",
	      "actual": 1.64218,
	      "expected": 0.84648
	    },
	    {
	      "cbsa": 41860,
	      "naics": "55",
	      "actual": 1.88055,
	      "expected": 0.60948
	    },
	    {
	      "cbsa": 41860,
	      "naics": "61",
	      "actual": 1.01161,
	      "expected": 0.60631
	    },
	    {
	      "cbsa": 41860,
	      "naics": "62",
	      "actual": 0.26788,
	      "expected": 0.80165
	    },
	    {
	      "cbsa": 41860,
	      "naics": "71",
	      "actual": 0.45583,
	      "expected": 0.23065
	    },
	    {
	      "cbsa": 41860,
	      "naics": "72",
	      "actual": 0.59531,
	      "expected": 0.43692
	    },
	    {
	      "cbsa": 41860,
	      "naics": "81",
	      "actual": -0.00888,
	      "expected": -0.05394
	    }
	  ],
	  "41940": [
	    {
	      "cbsa": 41940,
	      "naics": "00",
	      "actual": 0.45572,
	      "expected": 0.28238
	    },
	    {
	      "cbsa": 41940,
	      "naics": "22",
	      "actual": 0.31904,
	      "expected": 0.05656
	    },
	    {
	      "cbsa": 41940,
	      "naics": "23",
	      "actual": 0.12231,
	      "expected": 0.0655
	    },
	    {
	      "cbsa": 41940,
	      "naics": "31",
	      "actual": 0.42258,
	      "expected": -0.15962
	    },
	    {
	      "cbsa": 41940,
	      "naics": "42",
	      "actual": 0.16219,
	      "expected": 0.16687
	    },
	    {
	      "cbsa": 41940,
	      "naics": "44",
	      "actual": 0.28011,
	      "expected": 0.13509
	    },
	    {
	      "cbsa": 41940,
	      "naics": "48",
	      "actual": -0.06851,
	      "expected": 0.04203
	    },
	    {
	      "cbsa": 41940,
	      "naics": "51",
	      "actual": 1.55658,
	      "expected": 1.40789
	    },
	    {
	      "cbsa": 41940,
	      "naics": "52",
	      "actual": 0.35797,
	      "expected": 0.01855
	    },
	    {
	      "cbsa": 41940,
	      "naics": "53",
	      "actual": 0.07044,
	      "expected": -0.12381
	    },
	    {
	      "cbsa": 41940,
	      "naics": "54",
	      "actual": 0.9153,
	      "expected": 0.58861
	    },
	    {
	      "cbsa": 41940,
	      "naics": "55",
	      "actual": -0.28632,
	      "expected": -0.26668
	    },
	    {
	      "cbsa": 41940,
	      "naics": "61",
	      "actual": 0.23861,
	      "expected": 1.18833
	    },
	    {
	      "cbsa": 41940,
	      "naics": "62",
	      "actual": 0.45017,
	      "expected": 0.79621
	    },
	    {
	      "cbsa": 41940,
	      "naics": "71",
	      "actual": 0.46049,
	      "expected": 0.46302
	    },
	    {
	      "cbsa": 41940,
	      "naics": "72",
	      "actual": 0.51732,
	      "expected": 0.444
	    },
	    {
	      "cbsa": 41940,
	      "naics": "81",
	      "actual": -0.25578,
	      "expected": -0.05832
	    }
	  ],
	  "42540": [
	    {
	      "cbsa": 42540,
	      "naics": "00",
	      "actual": -0.30743,
	      "expected": 0.09225
	    },
	    {
	      "cbsa": 42540,
	      "naics": "22",
	      "actual": -0.76584,
	      "expected": -0.28646
	    },
	    {
	      "cbsa": 42540,
	      "naics": "23",
	      "actual": -0.61016,
	      "expected": 0.0238
	    },
	    {
	      "cbsa": 42540,
	      "naics": "31",
	      "actual": -0.4552,
	      "expected": -0.26942
	    },
	    {
	      "cbsa": 42540,
	      "naics": "42",
	      "actual": -0.08077,
	      "expected": 0.11043
	    },
	    {
	      "cbsa": 42540,
	      "naics": "44",
	      "actual": -0.46737,
	      "expected": -0.03767
	    },
	    {
	      "cbsa": 42540,
	      "naics": "48",
	      "actual": 0.04522,
	      "expected": 0.75041
	    },
	    {
	      "cbsa": 42540,
	      "naics": "51",
	      "actual": -0.65012,
	      "expected": -0.1919
	    },
	    {
	      "cbsa": 42540,
	      "naics": "52",
	      "actual": -0.24933,
	      "expected": 0.04935
	    },
	    {
	      "cbsa": 42540,
	      "naics": "53",
	      "actual": -0.24794,
	      "expected": 0.01621
	    },
	    {
	      "cbsa": 42540,
	      "naics": "54",
	      "actual": -0.39158,
	      "expected": 0.10429
	    },
	    {
	      "cbsa": 42540,
	      "naics": "55",
	      "actual": 0.2085,
	      "expected": 1.62371
	    },
	    {
	      "cbsa": 42540,
	      "naics": "61",
	      "actual": -0.29217,
	      "expected": -0.0783
	    },
	    {
	      "cbsa": 42540,
	      "naics": "62",
	      "actual": -0.12354,
	      "expected": 0.28186
	    },
	    {
	      "cbsa": 42540,
	      "naics": "71",
	      "actual": -0.16234,
	      "expected": 0.27394
	    },
	    {
	      "cbsa": 42540,
	      "naics": "72",
	      "actual": -0.27113,
	      "expected": 0.15803
	    },
	    {
	      "cbsa": 42540,
	      "naics": "81",
	      "actual": -0.46898,
	      "expected": -0.09883
	    }
	  ],
	  "42660": [
	    {
	      "cbsa": 42660,
	      "naics": "00",
	      "actual": 0.28913,
	      "expected": 0.09869
	    },
	    {
	      "cbsa": 42660,
	      "naics": "22",
	      "actual": -0.36202,
	      "expected": 0.27736
	    },
	    {
	      "cbsa": 42660,
	      "naics": "23",
	      "actual": 0.15166,
	      "expected": 0.09522
	    },
	    {
	      "cbsa": 42660,
	      "naics": "31",
	      "actual": 0.86164,
	      "expected": 0.06828
	    },
	    {
	      "cbsa": 42660,
	      "naics": "42",
	      "actual": -0.13817,
	      "expected": 0.0042
	    },
	    {
	      "cbsa": 42660,
	      "naics": "44",
	      "actual": 0.81688,
	      "expected": 0.22376
	    },
	    {
	      "cbsa": 42660,
	      "naics": "48",
	      "actual": 0.06002,
	      "expected": -0.19891
	    },
	    {
	      "cbsa": 42660,
	      "naics": "51",
	      "actual": 0.43466,
	      "expected": 0.371
	    },
	    {
	      "cbsa": 42660,
	      "naics": "52",
	      "actual": -0.24816,
	      "expected": -0.23023
	    },
	    {
	      "cbsa": 42660,
	      "naics": "53",
	      "actual": 0.11539,
	      "expected": -0.14541
	    },
	    {
	      "cbsa": 42660,
	      "naics": "54",
	      "actual": 0.35494,
	      "expected": 0.43016
	    },
	    {
	      "cbsa": 42660,
	      "naics": "55",
	      "actual": 1.13212,
	      "expected": 0.12903
	    },
	    {
	      "cbsa": 42660,
	      "naics": "61",
	      "actual": 0.54359,
	      "expected": 0.45742
	    },
	    {
	      "cbsa": 42660,
	      "naics": "62",
	      "actual": 0.65648,
	      "expected": 0.3289
	    },
	    {
	      "cbsa": 42660,
	      "naics": "71",
	      "actual": -0.01574,
	      "expected": 0.03081
	    },
	    {
	      "cbsa": 42660,
	      "naics": "72",
	      "actual": 0.18159,
	      "expected": 0.1875
	    },
	    {
	      "cbsa": 42660,
	      "naics": "81",
	      "actual": -0.42136,
	      "expected": -0.54847
	    }
	  ],
	  "44060": [
	    {
	      "cbsa": 44060,
	      "naics": "00",
	      "actual": 0.06702,
	      "expected": 0.12499
	    },
	    {
	      "cbsa": 44060,
	      "naics": "22",
	      "actual": -0.09918,
	      "expected": -0.12591
	    },
	    {
	      "cbsa": 44060,
	      "naics": "23",
	      "actual": -0.21591,
	      "expected": -0.02944
	    },
	    {
	      "cbsa": 44060,
	      "naics": "31",
	      "actual": -0.30187,
	      "expected": -0.0888
	    },
	    {
	      "cbsa": 44060,
	      "naics": "42",
	      "actual": -0.13049,
	      "expected": 0.01517
	    },
	    {
	      "cbsa": 44060,
	      "naics": "44",
	      "actual": -0.2905,
	      "expected": -0.06491
	    },
	    {
	      "cbsa": 44060,
	      "naics": "48",
	      "actual": -0.14942,
	      "expected": 0.01796
	    },
	    {
	      "cbsa": 44060,
	      "naics": "51",
	      "actual": -0.17249,
	      "expected": -0.28616
	    },
	    {
	      "cbsa": 44060,
	      "naics": "52",
	      "actual": -0.02487,
	      "expected": -0.05821
	    },
	    {
	      "cbsa": 44060,
	      "naics": "53",
	      "actual": 0.1114,
	      "expected": -0.05728
	    },
	    {
	      "cbsa": 44060,
	      "naics": "54",
	      "actual": 0.33014,
	      "expected": 0.37449
	    },
	    {
	      "cbsa": 44060,
	      "naics": "55",
	      "actual": -0.2037,
	      "expected": 0.1969
	    },
	    {
	      "cbsa": 44060,
	      "naics": "61",
	      "actual": 0.22873,
	      "expected": 0.39601
	    },
	    {
	      "cbsa": 44060,
	      "naics": "62",
	      "actual": 0.39637,
	      "expected": 0.38513
	    },
	    {
	      "cbsa": 44060,
	      "naics": "71",
	      "actual": -0.10248,
	      "expected": -0.08468
	    },
	    {
	      "cbsa": 44060,
	      "naics": "72",
	      "actual": 0.11371,
	      "expected": 0.08345
	    },
	    {
	      "cbsa": 44060,
	      "naics": "81",
	      "actual": -0.29429,
	      "expected": -0.23687
	    }
	  ],
	  "44700": [
	    {
	      "cbsa": 44700,
	      "naics": "00",
	      "actual": -0.28082,
	      "expected": 0.0123
	    },
	    {
	      "cbsa": 44700,
	      "naics": "22",
	      "actual": 15.08894,
	      "expected": 1.07615
	    },
	    {
	      "cbsa": 44700,
	      "naics": "23",
	      "actual": -0.39897,
	      "expected": -0.34964
	    },
	    {
	      "cbsa": 44700,
	      "naics": "31",
	      "actual": -0.36995,
	      "expected": -0.14514
	    },
	    {
	      "cbsa": 44700,
	      "naics": "42",
	      "actual": 0.61456,
	      "expected": 0.54603
	    },
	    {
	      "cbsa": 44700,
	      "naics": "44",
	      "actual": -0.25839,
	      "expected": 0.07456
	    },
	    {
	      "cbsa": 44700,
	      "naics": "48",
	      "actual": -0.71952,
	      "expected": 0.0278
	    },
	    {
	      "cbsa": 44700,
	      "naics": "51",
	      "actual": -0.31733,
	      "expected": 0.404
	    },
	    {
	      "cbsa": 44700,
	      "naics": "52",
	      "actual": -0.6546,
	      "expected": -0.31632
	    },
	    {
	      "cbsa": 44700,
	      "naics": "53",
	      "actual": -0.3187,
	      "expected": -0.12365
	    },
	    {
	      "cbsa": 44700,
	      "naics": "54",
	      "actual": -0.90339,
	      "expected": -0.629
	    },
	    {
	      "cbsa": 44700,
	      "naics": "55",
	      "actual": 0.19369,
	      "expected": 0.017
	    },
	    {
	      "cbsa": 44700,
	      "naics": "61",
	      "actual": 0.01829,
	      "expected": 0.43719
	    },
	    {
	      "cbsa": 44700,
	      "naics": "62",
	      "actual": 0.51935,
	      "expected": 0.93814
	    },
	    {
	      "cbsa": 44700,
	      "naics": "71",
	      "actual": -0.10689,
	      "expected": 0.05645
	    },
	    {
	      "cbsa": 44700,
	      "naics": "72",
	      "actual": -0.06178,
	      "expected": 0.19438
	    },
	    {
	      "cbsa": 44700,
	      "naics": "81",
	      "actual": -0.55716,
	      "expected": -0.09661
	    }
	  ],
	  "45060": [
	    {
	      "cbsa": 45060,
	      "naics": "00",
	      "actual": -0.17817,
	      "expected": 0.0047
	    },
	    {
	      "cbsa": 45060,
	      "naics": "22",
	      "actual": 86.9215,
	      "expected": -22.1578
	    },
	    {
	      "cbsa": 45060,
	      "naics": "23",
	      "actual": 0.13933,
	      "expected": 0.02906
	    },
	    {
	      "cbsa": 45060,
	      "naics": "31",
	      "actual": -0.74875,
	      "expected": -0.1159
	    },
	    {
	      "cbsa": 45060,
	      "naics": "42",
	      "actual": -0.26443,
	      "expected": -0.06867
	    },
	    {
	      "cbsa": 45060,
	      "naics": "44",
	      "actual": -0.12964,
	      "expected": -0.04113
	    },
	    {
	      "cbsa": 45060,
	      "naics": "48",
	      "actual": -0.17569,
	      "expected": -0.00928
	    },
	    {
	      "cbsa": 45060,
	      "naics": "51",
	      "actual": -0.61402,
	      "expected": -0.32076
	    },
	    {
	      "cbsa": 45060,
	      "naics": "52",
	      "actual": -0.59099,
	      "expected": -0.03324
	    },
	    {
	      "cbsa": 45060,
	      "naics": "53",
	      "actual": -0.22263,
	      "expected": -0.0904
	    },
	    {
	      "cbsa": 45060,
	      "naics": "54",
	      "actual": -0.1313,
	      "expected": 0.13904
	    },
	    {
	      "cbsa": 45060,
	      "naics": "55",
	      "actual": -0.35926,
	      "expected": -0.43048
	    },
	    {
	      "cbsa": 45060,
	      "naics": "61",
	      "actual": -0.37685,
	      "expected": -0.12899
	    },
	    {
	      "cbsa": 45060,
	      "naics": "62",
	      "actual": 0.51526,
	      "expected": 0.34493
	    },
	    {
	      "cbsa": 45060,
	      "naics": "71",
	      "actual": -0.23844,
	      "expected": -0.01807
	    },
	    {
	      "cbsa": 45060,
	      "naics": "72",
	      "actual": -0.11447,
	      "expected": 0.15093
	    },
	    {
	      "cbsa": 45060,
	      "naics": "81",
	      "actual": -0.30851,
	      "expected": -0.06649
	    }
	  ],
	  "45300": [
	    {
	      "cbsa": 45300,
	      "naics": "00",
	      "actual": 0.15708,
	      "expected": 0.20068
	    },
	    {
	      "cbsa": 45300,
	      "naics": "22",
	      "actual": -0.42449,
	      "expected": -0.33617
	    },
	    {
	      "cbsa": 45300,
	      "naics": "23",
	      "actual": -0.09573,
	      "expected": -0.0385
	    },
	    {
	      "cbsa": 45300,
	      "naics": "31",
	      "actual": -0.35151,
	      "expected": -0.2255
	    },
	    {
	      "cbsa": 45300,
	      "naics": "42",
	      "actual": 0.04169,
	      "expected": 0.01946
	    },
	    {
	      "cbsa": 45300,
	      "naics": "44",
	      "actual": 0.13784,
	      "expected": 0.18059
	    },
	    {
	      "cbsa": 45300,
	      "naics": "48",
	      "actual": -0.30805,
	      "expected": -0.112
	    },
	    {
	      "cbsa": 45300,
	      "naics": "51",
	      "actual": -0.31914,
	      "expected": -0.24971
	    },
	    {
	      "cbsa": 45300,
	      "naics": "52",
	      "actual": 0.29001,
	      "expected": 0.14723
	    },
	    {
	      "cbsa": 45300,
	      "naics": "53",
	      "actual": -0.07427,
	      "expected": 0.09127
	    },
	    {
	      "cbsa": 45300,
	      "naics": "54",
	      "actual": 0.31243,
	      "expected": 0.37531
	    },
	    {
	      "cbsa": 45300,
	      "naics": "55",
	      "actual": 1.30334,
	      "expected": 1.19696
	    },
	    {
	      "cbsa": 45300,
	      "naics": "61",
	      "actual": 0.84231,
	      "expected": 0.7967
	    },
	    {
	      "cbsa": 45300,
	      "naics": "62",
	      "actual": 0.28787,
	      "expected": 0.35421
	    },
	    {
	      "cbsa": 45300,
	      "naics": "71",
	      "actual": 0.18961,
	      "expected": 0.06049
	    },
	    {
	      "cbsa": 45300,
	      "naics": "72",
	      "actual": 0.33398,
	      "expected": 0.44463
	    },
	    {
	      "cbsa": 45300,
	      "naics": "81",
	      "actual": -0.08845,
	      "expected": 0.04278
	    }
	  ],
	  "45780": [
	    {
	      "cbsa": 45780,
	      "naics": "00",
	      "actual": -0.19085,
	      "expected": 0.01561
	    },
	    {
	      "cbsa": 45780,
	      "naics": "22",
	      "actual": -0.77336,
	      "expected": 0.01553
	    },
	    {
	      "cbsa": 45780,
	      "naics": "23",
	      "actual": -0.47788,
	      "expected": -0.16413
	    },
	    {
	      "cbsa": 45780,
	      "naics": "31",
	      "actual": -0.25322,
	      "expected": -0.05678
	    },
	    {
	      "cbsa": 45780,
	      "naics": "42",
	      "actual": -0.29735,
	      "expected": -0.0402
	    },
	    {
	      "cbsa": 45780,
	      "naics": "44",
	      "actual": -0.09964,
	      "expected": -0.07095
	    },
	    {
	      "cbsa": 45780,
	      "naics": "48",
	      "actual": -0.0504,
	      "expected": 0.1908
	    },
	    {
	      "cbsa": 45780,
	      "naics": "51",
	      "actual": -0.43482,
	      "expected": -0.3603
	    },
	    {
	      "cbsa": 45780,
	      "naics": "52",
	      "actual": -0.38532,
	      "expected": -0.14272
	    },
	    {
	      "cbsa": 45780,
	      "naics": "53",
	      "actual": -0.40848,
	      "expected": -0.22964
	    },
	    {
	      "cbsa": 45780,
	      "naics": "54",
	      "actual": -0.27887,
	      "expected": 0.065
	    },
	    {
	      "cbsa": 45780,
	      "naics": "55",
	      "actual": 1.47728,
	      "expected": 1.39772
	    },
	    {
	      "cbsa": 45780,
	      "naics": "61",
	      "actual": -0.38379,
	      "expected": -0.18446
	    },
	    {
	      "cbsa": 45780,
	      "naics": "62",
	      "actual": -0.13865,
	      "expected": 0.09125
	    },
	    {
	      "cbsa": 45780,
	      "naics": "71",
	      "actual": 0.06899,
	      "expected": 0.12967
	    },
	    {
	      "cbsa": 45780,
	      "naics": "72",
	      "actual": -0.09674,
	      "expected": 0.07255
	    },
	    {
	      "cbsa": 45780,
	      "naics": "81",
	      "actual": -0.53445,
	      "expected": -0.25326
	    }
	  ],
	  "46060": [
	    {
	      "cbsa": 46060,
	      "naics": "00",
	      "actual": -0.24872,
	      "expected": 0.09489
	    },
	    {
	      "cbsa": 46060,
	      "naics": "22",
	      "actual": 1.43639,
	      "expected": -0.15705
	    },
	    {
	      "cbsa": 46060,
	      "naics": "23",
	      "actual": -0.50324,
	      "expected": -0.33561
	    },
	    {
	      "cbsa": 46060,
	      "naics": "31",
	      "actual": -0.24803,
	      "expected": -0.34373
	    },
	    {
	      "cbsa": 46060,
	      "naics": "42",
	      "actual": -0.26342,
	      "expected": -0.12016
	    },
	    {
	      "cbsa": 46060,
	      "naics": "44",
	      "actual": -0.203,
	      "expected": 0.06952
	    },
	    {
	      "cbsa": 46060,
	      "naics": "48",
	      "actual": -0.16986,
	      "expected": 0.12465
	    },
	    {
	      "cbsa": 46060,
	      "naics": "51",
	      "actual": -0.66035,
	      "expected": -0.39955
	    },
	    {
	      "cbsa": 46060,
	      "naics": "52",
	      "actual": -0.54325,
	      "expected": 0.05063
	    },
	    {
	      "cbsa": 46060,
	      "naics": "53",
	      "actual": 0.26511,
	      "expected": -0.0608
	    },
	    {
	      "cbsa": 46060,
	      "naics": "54",
	      "actual": 0.08241,
	      "expected": 0.27038
	    },
	    {
	      "cbsa": 46060,
	      "naics": "55",
	      "actual": -0.03767,
	      "expected": -0.05255
	    },
	    {
	      "cbsa": 46060,
	      "naics": "61",
	      "actual": 0.21882,
	      "expected": 0.47071
	    },
	    {
	      "cbsa": 46060,
	      "naics": "62",
	      "actual": -0.28715,
	      "expected": 0.32646
	    },
	    {
	      "cbsa": 46060,
	      "naics": "71",
	      "actual": 0.29527,
	      "expected": 0.0368
	    },
	    {
	      "cbsa": 46060,
	      "naics": "72",
	      "actual": -0.19233,
	      "expected": 0.15877
	    },
	    {
	      "cbsa": 46060,
	      "naics": "81",
	      "actual": -0.1835,
	      "expected": -0.05289
	    }
	  ],
	  "46140": [
	    {
	      "cbsa": 46140,
	      "naics": "00",
	      "actual": -0.05748,
	      "expected": 0.16378
	    },
	    {
	      "cbsa": 46140,
	      "naics": "22",
	      "actual": 1.10225,
	      "expected": 0.63057
	    },
	    {
	      "cbsa": 46140,
	      "naics": "23",
	      "actual": -0.2122,
	      "expected": 0.15188
	    },
	    {
	      "cbsa": 46140,
	      "naics": "31",
	      "actual": -0.31424,
	      "expected": 0.05997
	    },
	    {
	      "cbsa": 46140,
	      "naics": "42",
	      "actual": -0.24221,
	      "expected": 0.03888
	    },
	    {
	      "cbsa": 46140,
	      "naics": "44",
	      "actual": 0.08773,
	      "expected": 0.17444
	    },
	    {
	      "cbsa": 46140,
	      "naics": "48",
	      "actual": 0.38015,
	      "expected": 0.18622
	    },
	    {
	      "cbsa": 46140,
	      "naics": "51",
	      "actual": -0.44534,
	      "expected": -0.24536
	    },
	    {
	      "cbsa": 46140,
	      "naics": "52",
	      "actual": -0.26908,
	      "expected": 0.00848
	    },
	    {
	      "cbsa": 46140,
	      "naics": "53",
	      "actual": -0.35187,
	      "expected": -0.13416
	    },
	    {
	      "cbsa": 46140,
	      "naics": "54",
	      "actual": -0.16856,
	      "expected": 0.14552
	    },
	    {
	      "cbsa": 46140,
	      "naics": "55",
	      "actual": -0.11877,
	      "expected": -0.02658
	    },
	    {
	      "cbsa": 46140,
	      "naics": "61",
	      "actual": -0.24754,
	      "expected": 0.02302
	    },
	    {
	      "cbsa": 46140,
	      "naics": "62",
	      "actual": -0.00485,
	      "expected": 0.26347
	    },
	    {
	      "cbsa": 46140,
	      "naics": "71",
	      "actual": 0.22061,
	      "expected": 0.21814
	    },
	    {
	      "cbsa": 46140,
	      "naics": "72",
	      "actual": 0.13932,
	      "expected": 0.22003
	    },
	    {
	      "cbsa": 46140,
	      "naics": "81",
	      "actual": -0.1672,
	      "expected": 0.02701
	    }
	  ],
	  "46520": [
	    {
	      "cbsa": 46520,
	      "naics": "00",
	      "actual": 0.55552,
	      "expected": 0.10445
	    },
	    {
	      "cbsa": 46520,
	      "naics": "22",
	      "actual": 0.8081,
	      "expected": 0.53106
	    },
	    {
	      "cbsa": 46520,
	      "naics": "23",
	      "actual": 1.4317,
	      "expected": 0.42854
	    },
	    {
	      "cbsa": 46520,
	      "naics": "31",
	      "actual": 0.35185,
	      "expected": -0.04714
	    },
	    {
	      "cbsa": 46520,
	      "naics": "42",
	      "actual": 0.00508,
	      "expected": 0.01371
	    },
	    {
	      "cbsa": 46520,
	      "naics": "44",
	      "actual": 1.79218,
	      "expected": 0.19989
	    },
	    {
	      "cbsa": 46520,
	      "naics": "48",
	      "actual": 0.18527,
	      "expected": -0.94868
	    },
	    {
	      "cbsa": 46520,
	      "naics": "51",
	      "actual": 0.23614,
	      "expected": -0.01428
	    },
	    {
	      "cbsa": 46520,
	      "naics": "52",
	      "actual": -0.08203,
	      "expected": -0.13545
	    },
	    {
	      "cbsa": 46520,
	      "naics": "53",
	      "actual": 0.41777,
	      "expected": -0.0645
	    },
	    {
	      "cbsa": 46520,
	      "naics": "54",
	      "actual": 0.03916,
	      "expected": 0.051
	    },
	    {
	      "cbsa": 46520,
	      "naics": "55",
	      "actual": 0.09324,
	      "expected": 0.09815
	    },
	    {
	      "cbsa": 46520,
	      "naics": "61",
	      "actual": -0.33131,
	      "expected": 0.01297
	    },
	    {
	      "cbsa": 46520,
	      "naics": "62",
	      "actual": 0.45027,
	      "expected": 0.37559
	    },
	    {
	      "cbsa": 46520,
	      "naics": "71",
	      "actual": -0.05306,
	      "expected": -0.04193
	    },
	    {
	      "cbsa": 46520,
	      "naics": "72",
	      "actual": 0.61536,
	      "expected": 0.20269
	    },
	    {
	      "cbsa": 46520,
	      "naics": "81",
	      "actual": 0.80953,
	      "expected": 0.1318
	    }
	  ],
	  "47260": [
	    {
	      "cbsa": 47260,
	      "naics": "00",
	      "actual": 0.00172,
	      "expected": 0.02033
	    },
	    {
	      "cbsa": 47260,
	      "naics": "22",
	      "actual": -0.37169,
	      "expected": -0.19589
	    },
	    {
	      "cbsa": 47260,
	      "naics": "23",
	      "actual": -0.28056,
	      "expected": -0.16358
	    },
	    {
	      "cbsa": 47260,
	      "naics": "31",
	      "actual": 0.13355,
	      "expected": -0.21184
	    },
	    {
	      "cbsa": 47260,
	      "naics": "42",
	      "actual": -0.24495,
	      "expected": -0.15732
	    },
	    {
	      "cbsa": 47260,
	      "naics": "44",
	      "actual": -0.10181,
	      "expected": -0.02787
	    },
	    {
	      "cbsa": 47260,
	      "naics": "48",
	      "actual": 0.18456,
	      "expected": -0.11927
	    },
	    {
	      "cbsa": 47260,
	      "naics": "51",
	      "actual": -0.25804,
	      "expected": -0.32269
	    },
	    {
	      "cbsa": 47260,
	      "naics": "52",
	      "actual": -0.22552,
	      "expected": -0.04822
	    },
	    {
	      "cbsa": 47260,
	      "naics": "53",
	      "actual": -0.10673,
	      "expected": -0.09112
	    },
	    {
	      "cbsa": 47260,
	      "naics": "54",
	      "actual": 0.00011,
	      "expected": 0.13653
	    },
	    {
	      "cbsa": 47260,
	      "naics": "55",
	      "actual": -0.23994,
	      "expected": -0.00964
	    },
	    {
	      "cbsa": 47260,
	      "naics": "61",
	      "actual": 0.31521,
	      "expected": 0.49794
	    },
	    {
	      "cbsa": 47260,
	      "naics": "62",
	      "actual": 0.16438,
	      "expected": 0.31246
	    },
	    {
	      "cbsa": 47260,
	      "naics": "71",
	      "actual": -0.07506,
	      "expected": 0.10515
	    },
	    {
	      "cbsa": 47260,
	      "naics": "72",
	      "actual": 0.00442,
	      "expected": 0.17437
	    },
	    {
	      "cbsa": 47260,
	      "naics": "81",
	      "actual": -0.04589,
	      "expected": 0.05833
	    }
	  ],
	  "48620": [
	    {
	      "cbsa": 48620,
	      "naics": "00",
	      "actual": -0.20476,
	      "expected": 0.0484
	    },
	    {
	      "cbsa": 48620,
	      "naics": "22",
	      "actual": -0.75021,
	      "expected": -0.5104
	    },
	    {
	      "cbsa": 48620,
	      "naics": "23",
	      "actual": -0.14538,
	      "expected": 0.06562
	    },
	    {
	      "cbsa": 48620,
	      "naics": "31",
	      "actual": -0.17527,
	      "expected": -0.24981
	    },
	    {
	      "cbsa": 48620,
	      "naics": "42",
	      "actual": -0.36798,
	      "expected": -0.12505
	    },
	    {
	      "cbsa": 48620,
	      "naics": "44",
	      "actual": -0.01786,
	      "expected": 0.10653
	    },
	    {
	      "cbsa": 48620,
	      "naics": "48",
	      "actual": 0.14481,
	      "expected": 0.1258
	    },
	    {
	      "cbsa": 48620,
	      "naics": "51",
	      "actual": -0.69856,
	      "expected": -0.16147
	    },
	    {
	      "cbsa": 48620,
	      "naics": "52",
	      "actual": -0.485,
	      "expected": -0.12877
	    },
	    {
	      "cbsa": 48620,
	      "naics": "53",
	      "actual": -0.15512,
	      "expected": 0.08655
	    },
	    {
	      "cbsa": 48620,
	      "naics": "54",
	      "actual": -0.164,
	      "expected": 0.1595
	    },
	    {
	      "cbsa": 48620,
	      "naics": "55",
	      "actual": 0.14303,
	      "expected": 0.61904
	    },
	    {
	      "cbsa": 48620,
	      "naics": "61",
	      "actual": 0.18424,
	      "expected": 0.42899
	    },
	    {
	      "cbsa": 48620,
	      "naics": "62",
	      "actual": -0.23908,
	      "expected": 0.22638
	    },
	    {
	      "cbsa": 48620,
	      "naics": "71",
	      "actual": 1.34914,
	      "expected": 1.65444
	    },
	    {
	      "cbsa": 48620,
	      "naics": "72",
	      "actual": 0.03201,
	      "expected": 0.17235
	    },
	    {
	      "cbsa": 48620,
	      "naics": "81",
	      "actual": -0.4095,
	      "expected": -0.11323
	    }
	  ],
	  "49180": [
	    {
	      "cbsa": 49180,
	      "naics": "00",
	      "actual": -0.19709,
	      "expected": 0.16035
	    },
	    {
	      "cbsa": 49180,
	      "naics": "22",
	      "actual": -0.77066,
	      "expected": -0.09222
	    },
	    {
	      "cbsa": 49180,
	      "naics": "23",
	      "actual": -0.57754,
	      "expected": -0.11284
	    },
	    {
	      "cbsa": 49180,
	      "naics": "31",
	      "actual": -0.83122,
	      "expected": -0.21089
	    },
	    {
	      "cbsa": 49180,
	      "naics": "42",
	      "actual": -0.42662,
	      "expected": -0.04427
	    },
	    {
	      "cbsa": 49180,
	      "naics": "44",
	      "actual": -0.09306,
	      "expected": 0.10709
	    },
	    {
	      "cbsa": 49180,
	      "naics": "48",
	      "actual": -0.69989,
	      "expected": -0.01233
	    },
	    {
	      "cbsa": 49180,
	      "naics": "51",
	      "actual": -0.45965,
	      "expected": -0.34498
	    },
	    {
	      "cbsa": 49180,
	      "naics": "52",
	      "actual": -0.455,
	      "expected": -0.12158
	    },
	    {
	      "cbsa": 49180,
	      "naics": "53",
	      "actual": -0.10834,
	      "expected": 0.08802
	    },
	    {
	      "cbsa": 49180,
	      "naics": "54",
	      "actual": 0.24233,
	      "expected": 0.21787
	    },
	    {
	      "cbsa": 49180,
	      "naics": "55",
	      "actual": 0.86118,
	      "expected": 0.66956
	    },
	    {
	      "cbsa": 49180,
	      "naics": "61",
	      "actual": -0.2338,
	      "expected": 0.30938
	    },
	    {
	      "cbsa": 49180,
	      "naics": "62",
	      "actual": 0.0912,
	      "expected": 0.42223
	    },
	    {
	      "cbsa": 49180,
	      "naics": "71",
	      "actual": 0.41206,
	      "expected": 0.30078
	    },
	    {
	      "cbsa": 49180,
	      "naics": "72",
	      "actual": 0.13844,
	      "expected": 0.32082
	    },
	    {
	      "cbsa": 49180,
	      "naics": "81",
	      "actual": -0.31066,
	      "expected": 0.08564
	    }
	  ],
	  "49660": [
	    {
	      "cbsa": 49660,
	      "naics": "00",
	      "actual": -0.53765,
	      "expected": -0.09084
	    },
	    {
	      "cbsa": 49660,
	      "naics": "22",
	      "actual": -0.19633,
	      "expected": 0.50816
	    },
	    {
	      "cbsa": 49660,
	      "naics": "23",
	      "actual": -0.33281,
	      "expected": -0.10777
	    },
	    {
	      "cbsa": 49660,
	      "naics": "31",
	      "actual": -0.8301,
	      "expected": -0.23881
	    },
	    {
	      "cbsa": 49660,
	      "naics": "42",
	      "actual": -0.24245,
	      "expected": -0.04132
	    },
	    {
	      "cbsa": 49660,
	      "naics": "44",
	      "actual": -0.31155,
	      "expected": -0.12216
	    },
	    {
	      "cbsa": 49660,
	      "naics": "48",
	      "actual": -0.29465,
	      "expected": 0.2545
	    },
	    {
	      "cbsa": 49660,
	      "naics": "51",
	      "actual": -0.54565,
	      "expected": -0.54982
	    },
	    {
	      "cbsa": 49660,
	      "naics": "52",
	      "actual": -0.5105,
	      "expected": -0.12178
	    },
	    {
	      "cbsa": 49660,
	      "naics": "53",
	      "actual": -0.21744,
	      "expected": -0.12876
	    },
	    {
	      "cbsa": 49660,
	      "naics": "54",
	      "actual": -0.2261,
	      "expected": 0.0086
	    },
	    {
	      "cbsa": 49660,
	      "naics": "55",
	      "actual": -0.18347,
	      "expected": 0.33221
	    },
	    {
	      "cbsa": 49660,
	      "naics": "61",
	      "actual": -0.47546,
	      "expected": -0.22532
	    },
	    {
	      "cbsa": 49660,
	      "naics": "62",
	      "actual": -0.29952,
	      "expected": 0.12057
	    },
	    {
	      "cbsa": 49660,
	      "naics": "71",
	      "actual": -0.03843,
	      "expected": 0.11439
	    },
	    {
	      "cbsa": 49660,
	      "naics": "72",
	      "actual": -0.1277,
	      "expected": -0.00843
	    },
	    {
	      "cbsa": 49660,
	      "naics": "81",
	      "actual": -0.36639,
	      "expected": -0.12867
	    }
	  ],
	  "99999": [
	    {
	      "cbsa": 99999,
	      "naics": "00",
	      "actual": 0.29534,
	      "expected": 0.19896
	    },
	    {
	      "cbsa": 99999,
	      "naics": "22",
	      "actual": 0.19053,
	      "expected": 0.14501
	    },
	    {
	      "cbsa": 99999,
	      "naics": "23",
	      "actual": 0.24442,
	      "expected": 0.06012
	    },
	    {
	      "cbsa": 99999,
	      "naics": "31",
	      "actual": -0.24985,
	      "expected": -0.20809
	    },
	    {
	      "cbsa": 99999,
	      "naics": "42",
	      "actual": 0.15537,
	      "expected": -0.01744
	    },
	    {
	      "cbsa": 99999,
	      "naics": "44",
	      "actual": 0.27273,
	      "expected": 0.11191
	    },
	    {
	      "cbsa": 99999,
	      "naics": "48",
	      "actual": -0.25601,
	      "expected": 0.04787
	    },
	    {
	      "cbsa": 99999,
	      "naics": "51",
	      "actual": 0.41471,
	      "expected": 0.10011
	    },
	    {
	      "cbsa": 99999,
	      "naics": "52",
	      "actual": 0.09457,
	      "expected": 0.01064
	    },
	    {
	      "cbsa": 99999,
	      "naics": "53",
	      "actual": 0.20217,
	      "expected": 0.01594
	    },
	    {
	      "cbsa": 99999,
	      "naics": "54",
	      "actual": 0.57119,
	      "expected": 0.35681
	    },
	    {
	      "cbsa": 99999,
	      "naics": "55",
	      "actual": 0.38758,
	      "expected": 0.27799
	    },
	    {
	      "cbsa": 99999,
	      "naics": "61",
	      "actual": 0.29068,
	      "expected": 0.40719
	    },
	    {
	      "cbsa": 99999,
	      "naics": "62",
	      "actual": 0.46494,
	      "expected": 0.49033
	    },
	    {
	      "cbsa": 99999,
	      "naics": "71",
	      "actual": 0.3353,
	      "expected": 0.31409
	    },
	    {
	      "cbsa": 99999,
	      "naics": "72",
	      "actual": 0.4962,
	      "expected": 0.40754
	    },
	    {
	      "cbsa": 99999,
	      "naics": "81",
	      "actual": 0.0988,
	      "expected": 0.09077
	    }
	  ]
	}
	;

	var palette = {
		primary:{
			blue: "#053769",
			red: "#dc2a2a",
			yellow: "#ffcf1a",
			gray: "#4c4c4c",
			orange: "#ffa500",
			green: "#008000",
			purple: "#800080"
		},
		secondary:{
			blue: "#a4c7f2",
			red: "#e26f6f",
			yellow: "#ffdf66",
			gray: "#aaaaaa",
			orange: "#ffc04c",
			green: "#00b400",
			purple: "#cc00cc"
		},
		text: "#111111",
		gray: "#555555",
		mediumgray: "#aaaaaa",
		lightgray: "#eeeeee"
	};

	function seq0(container, i){

	    var data = seq0data.changes;

	    //one time setup
	    var wrap = d3.select(container).classed("chart-view",true);

	    wrap.append("div").classed("sticky-chart-title",true).append("p").html("Metropolitan America saw a large increase in job density from 2004 to 2015");

	    var svg = wrap.append("div").style("max-width","800px").style("margin","0px auto").append("svg").attr("viewBox", "0 0 320 240");

	    var g_y_axis = svg.append("g").classed("axis-group",true);
	    var g_x_axis = svg.append("g").classed("axis-group",true);
	    var g_back = svg.append("g");
	    var g_trend = svg.append("g");

	    var lines = g_trend.selectAll("path").data(["99999", "99998", "99997"])
	                       .enter().append("path")
	                       .attr("stroke-width","2px")
	                       .style("opacity","0")
	                       .attr("fill","none")
	                       .attr("stroke", function(d,i){return i==0 ? palette.primary.blue : i==1 ? palette.primary.yellow : palette.primary.green});

	    var line_all = lines.filter(function(d,i){return i==0});
	    var line_4 = lines.filter(function(d,i){return i==1});
	    var line_other = lines.filter(function(d,i){return i==2});

	    var great_recession = g_back.append("rect").attr("fill","#dddddd").style("opacity","0");
	    
	    var years = d3.range(2004, 2016);
	    var all_data_extent = d3.extent(data["99999"].concat(data["99998"], data["99997"]), function(d){return d.actual});
	    
	    var scale_y = d3.scaleLinear().domain(all_data_extent).nice();
	    var scale_x = d3.scaleLinear().domain([2004, 2015]);

	    var line = d3.line().x(function(d){return scale_x(d.year)})
	                        .y(function(d){return scale_y(d.actual)})
	                        ;

	    var axis_y = d3.axisLeft(scale_y).ticks(4, "+,.0%");
	    var axis_x = d3.axisBottom(scale_x).tickValues([2005, 2010, 2015]).tickFormat(function(v){return v});

	    var aspect = 1/2;
	    var padding = {top:20, right:25, bottom: 40, left: 60 };

	    function redraw(){
	        var w = this.w < 320 ? 320 : (this.w > 750 ? 750 : this.w);
	        var h = w < 480 ? w : w * aspect;

	        svg.attr("viewBox", "0 0 " + w + " " + h);
	        
	        g_x_axis.attr("transform", "translate(0," + (h-padding.bottom) + ")");
	        g_y_axis.attr("transform", "translate(" + (padding.left) + ",0)");

	        scale_x.range([padding.left, w - padding.right]);
	        scale_y.range([h - padding.bottom, 0 + padding.top]);

	        console.log(scale_y.ticks(4));

	        var grid_lines_ = g_back.selectAll("line").data(scale_y.ticks(4));
	        grid_lines_.exit().remove();
	        var grid_lines = grid_lines_.enter().append("line").merge(grid_lines_).attr("stroke","#bbbbbb")
	                                            .attr("x1", scale_x(2004)-4).attr("x2", scale_x(2015))
	                                            .attr("y1", function(d){return Math.floor(scale_y(d))+0.5})
	                                            .attr("y2", function(d){return Math.floor(scale_y(d))+0.5})
	                                            .style("shape-rendering","crispEdges")
	                                            ;

	        great_recession.attr("x", scale_x(2007)).attr("y", padding.top)
	                       .attr("width", scale_x(2009) - scale_x(2007))
	                       .attr("height", h - padding.top - padding.bottom + 5);

	        axis_x(g_x_axis);
	        axis_y(g_y_axis);

	        lines.attr("d", function(d){return line(data[d])});

	    }

	    //register resize callback. initialize
	    on_resize(redraw, true);

	    //set extent

	    //redraw


	    var views = [
	        {
	            text:["The perceived job density of all 94 large metro areas taken together increased nearly 30 percent, indicating job growth was highly concentrated in dense urban areas from 2004 to 2015."],
	            enter:function(){
	                wrap.style("opacity",1);
	                line_all.style("opacity", 1);
	                console.log("enter blue");
	            },
	            exit:function(){
	                line_all.style("opacity", 0);
	                console.log("exit blue");
	            }
	        },

	        {
	            text:["During the Great Recession from 2007 to 2009, the average perceived job density increased more than 10 percent as suburban and exurban areas shed their jobs faster than denser urban areas. Perceived job density has steadily increased since 2009."],
	            enter:function(){
	                wrap.style("opacity",1);
	                great_recession.style("opacity",1);
	                console.log("enter recession highlight");
	            },
	            exit:function(){
	                great_recession.style("opacity",0);
	                console.log("exit recession highlight");
	            }
	        },

	        {
	            text:["These overall trends in job density however were greatly influenced by a set of four extremely dense metro areas – New York, Chicago, San Francisco, and Seattle. These four metro areas saw an even greater increase in job density, accounting for about 90 percent of the increase in job density seen among all 94 large metro areas during this period."],
	            enter:function(){
	                wrap.style("opacity",1);
	                line_4.style("opacity", 1);
	                console.log("enter yellow");
	            },
	            exit:function(){
	                line_4.style("opacity", 0);
	                console.log("exit yellow");
	            }
	        },

	        {
	            text:["In contrast to job density trends in the four extremely dense metro areas, job density in the other 90 large metro areas increased only 9 percent on average.","However, these metro areas also show considerable variation in the direction and extent of changes in job density during this period."],
	            enter:function(){
	                wrap.style("opacity",1);
	                line_other.style("opacity", 1);
	                console.log("enter green");
	            },
	            step:function(s){

	            },
	            exit:function(){
	                line_other.style("opacity", 0);
	                console.log("exit green");
	            }
	        }
	    ];

	    //static, non-scrollytelling
	    if(arguments.length > 1){
	        views[i].enter.call(wrap.append("p").html(views[i].text).node());
	    }

	    return views;

	}

	function seq0$1(container, i){

	    var data = seq0data.changes["99999"];

	    //one time setup
	    var wrap = d3.select(container).classed("chart-view",true);

	    wrap.append("div").classed("sticky-chart-title",true).append("p").html("Jobs in metropolitan America grew denser than expected from 2004 to 2015");

	    var svg = wrap.append("div").style("max-width","800px").style("margin","0px auto").append("svg").attr("viewBox", "0 0 320 240");

	    var g_y_axis = svg.append("g").classed("axis-group",true);
	    var g_x_axis = svg.append("g").classed("axis-group",true);
	    var g_back = svg.append("g");
	    var g_trend = svg.append("g");

	    var lines = g_trend.selectAll("path").data([data.map(function(d){return {year:d.year, change:d.expected} }), 
	                                                data.map(function(d){return {year:d.year, change:d.actual  } })])
	                                        .enter().append("path")
	                                        .attr("stroke-width","2px")
	                                        .style("opacity","0")
	                                        .attr("fill","none")
	                                        .attr("stroke", function(d,i){return i==0 ? palette.secondary.blue : palette.primary.blue})
	                                        .attr("stroke-dasharray", function(d,i){return i==0 ? "3,3" : null});

	    var line_expected = lines.filter(function(d,i){return i==0});
	    var line_actual = lines.filter(function(d,i){return i==1});

	    var great_recession = g_back.append("rect").attr("fill","#cccccc").style("opacity","0");
	    
	    var years = d3.range(2004, 2016);
	    
	    var min = d3.min(data.map(function(d){return Math.min(d.actual, d.expected)}));
	    var max = d3.max(data.map(function(d){return Math.max(d.actual, d.expected)}));

	    var scale_y = d3.scaleLinear().domain([min, max]).nice();
	    var scale_x = d3.scaleLinear().domain([2004, 2015]);

	    var line = d3.line().x(function(d){return scale_x(d.year)}).y(function(d){return scale_y(d.change)});

	    var axis_y = d3.axisLeft(scale_y).ticks(4, "+,.0%");
	    var axis_x = d3.axisBottom(scale_x).tickValues([2005, 2010, 2015]).tickFormat(function(v){return v});

	    var aspect = 1/2;
	    var padding = {top:20, right:25, bottom: 40, left: 60 };

	    function redraw(){
	        var w = this.w < 320 ? 320 : (this.w > 750 ? 750 : this.w);
	        var h = w < 480 ? w : w * aspect;

	        svg.attr("viewBox", "0 0 " + w + " " + h);
	        
	        g_x_axis.attr("transform", "translate(0," + (h-padding.bottom+5) + ")");
	        g_y_axis.attr("transform", "translate(" + (padding.left-5) + ",0)");

	        scale_x.range([padding.left, w - padding.right]);
	        scale_y.range([h - padding.bottom, 0 + padding.top]);

	        var grid_lines_ = g_back.selectAll("line").data(scale_y.ticks());
	        grid_lines_.exit().remove();
	        var grid_lines = grid_lines_.enter().append("line").merge(grid_lines_).attr("stroke-dasharray","2,4").attr("stroke","#ffffff")
	                                            .attr("x1", scale_x(2004)-4).attr("x2", scale_x(2015))
	                                            .attr("y1", function(d){return Math.floor(scale_y(d))+0.5})
	                                            .attr("y2", function(d){return Math.floor(scale_y(d))+0.5})
	                                            ;

	        great_recession.attr("x", scale_x(2007)).attr("y", padding.top)
	                       .attr("width", scale_x(2009) - scale_x(2007))
	                       .attr("height", h - padding.top - padding.bottom + 5);

	        axis_x(g_x_axis);
	        axis_y(g_y_axis);

	        lines.attr("d", function(d){return line(d)});

	    }

	    //register resize callback. initialize
	    on_resize(redraw, true);

	    //set extent

	    //redraw


	    var views = [
	        {
	            text:["[This is the change in job density we would have expected to see if each office and factory added jobs at its industry-wide average rate -- <em>trying for something plainspoken</em>]"],
	            enter:function(){
	                wrap.style("opacity",1);
	                line_expected.style("opacity", 1);
	                //console.log("enter blue");
	            },
	            exit:function(){
	                line_expected.style("opacity", 0);
	                //console.log("exit blue");
	            }
	        },

	        {
	            text:["[This is what we actually saw, indicating that new and existing jobs shifted to more dense locations within metro areas -- <em>again, plainspoken</em>]"],
	            enter:function(){
	                wrap.style("opacity",1);
	                line_actual.style("opacity",1);
	            },
	            exit:function(){
	                line_actual.style("opacity", 0);
	            }
	        }
	    ];

	    //static, non-scrollytelling
	    if(arguments.length > 1){
	        views[i].enter.call(wrap.append("p").html(views[i].text).node());
	    }

	    return views;

	}

	function seq3(container, i){

	    var data = sector_data["99999"].slice().sort(function(a,b){return d3.descending(a.actual, b.actual)});

	    //one time setup
	    var wrap = d3.select(container).classed("chart-view",true);

	    wrap.append("div").classed("sticky-chart-title",true).append("p").html("Most sectors saw job density increase and exceeded expectations");

	    var svg = wrap.append("div").style("max-width","800px").style("margin","0px auto").append("svg").attr("viewBox", "0 0 320 240");

	    var g_x_axis = svg.append("g").classed("axis-group",true);
	    var g_back = svg.append("g");
	    var g_trend = svg.append("g");

	    var groups = g_trend.selectAll("g").data(data).enter().append("g");

	    var group_connectors = groups.append("line").style("shape-rendering","crispEdges")
	                                                .attr("stroke", function(d){return d.actual < d.expected ? palette.secondary.orange : palette.secondary.blue})
	                                                .attr("stroke-width","1px");
	    var group_circles = groups.selectAll("circle").data(function(d){return [d.expected, d.actual]})
	                                .enter().append("circle").attr("r",4.5)
	                                .attr("fill",function(d,i){return i==0 ? "#ffffff" : palette.primary.blue})
	                                .attr("stroke",function(d,i){return  i==0 ? palette.primary.blue : palette.primary.blue})
	                                .attr("stroke-width","1.5px")
	                                ;
	    
	    var min = d3.min(data.map(function(d){return Math.min(d.actual, d.expected)}));
	    var max = d3.max(data.map(function(d){return Math.max(d.actual, d.expected)}));

	    console.log(data);

	    var scale_x = d3.scaleLinear().domain([min, max]).nice();
	    var axis_x = d3.axisTop(scale_x).ticks(5, "+,.0%");

	    var aspect = 2/3;
	    var padding = {top:50, right:25, bottom: 5, left: 5 };

	    function redraw(){
	        var w = this.w < 320 ? 320 : (this.w > 800 ? 800 : this.w);
	        var h = w * aspect;
	        if(h < 400){h = 400;}        
	        var group_h = Math.floor((h-padding.top-padding.bottom)/data.length);
	        var group_h2 = Math.floor(group_h/2) + 0.5;
	        groups.attr("transform", function(d,i){return "translate(0," + (i*group_h) + ")"});

	        svg.attr("viewBox", "0 0 " + w + " " + h);
	        
	        g_x_axis.attr("transform", "translate(0," + padding.top + ")");
	        g_trend.attr("transform", "translate(0," + padding.top + ")");

	        scale_x.range([padding.left, w - padding.right]);

	        axis_x(g_x_axis);

	        //[expected, actual]
	        group_circles.attr("cx", function(d,i){return i==0 ? scale_x(d) : scale_x(d)}).attr("cy", group_h2);
	        group_connectors.attr("y1", group_h2).attr("y2", group_h2)
	                        .attr("x1", function(d){return scale_x(d.expected)})
	                        .attr("x2", function(d){return scale_x(d.actual)})
	                        ;
	    }

	    //register resize callback. initialize
	    on_resize(redraw, true);

	    //set extent

	    //redraw


	    var views = [
	        {
	            text:["Only manufacturing and wholesale were expected to decline in density from 2004 to 2015"],
	            enter:function(){
	                console.log("step 1 enter");
	                wrap.style("opacity","1");
	                groups.style("opacity", function(d){return d.naics == "31" || d.naics == "42" ? "1" : "0.15"});
	            },
	            exit:function(){
	                console.log("step 1 exit");
	                groups.style("opacity","1");
	            }
	        },
	        {
	            text:["In the end, it was manufacturing and logistics which became less dense"],
	            enter:function(){
	                console.log("step 2 enter");
	                wrap.style("opacity","1");
	                groups.style("opacity", function(d){return d.naics == "31" || d.naics == "48" ? "1" : "0.15"});
	            },
	            exit:function(){
	                console.log("step 2 exit");
	                groups.style("opacity", function(d){return d.naics == "31" || d.naics == "42" ? "1" : "0.15"});
	            }
	        }
	    ];

	    //static, non-scrollytelling
	    if(arguments.length > 1){
	        views[i].enter.call(wrap.append("p").html(views[i].text).node());
	    }

	    return views;

	}

	//main function
	function main(){

	  var container = document.getElementById("job-density-scrolly");
	  var wrap = d3.select(container);
	  var compat = degradation(container);

	  var dims = {w:0, h:0};
	  
	  function get_dims(){
	    dims.w = Math.max(document.documentElement.clientWidth, window.innerWidth || 0);
	    dims.h = Math.max(document.documentElement.clientHeight, window.innerHeight || 0);
	  }
	  get_dims();

	  window.addEventListener("resize", get_dims);

	  //browser degradation
	  if(compat.browser()){
	    sequence(container, seq0, 4);
	    sequence(container, seq0$1, 2);
	    sequence(container, seq3, 2);
	  }


	} //close main()


	document.addEventListener("DOMContentLoaded", main);

}());
