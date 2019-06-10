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

	function on_resize(callback, init){
	    var viewport = {};

	    function set_dims(){
	        viewport.w = Math.max(document.documentElement.clientWidth, window.innerWidth || 0);
	        viewport.h = Math.max(document.documentElement.clientHeight, window.innerHeight || 0); 

	        //viewport.h = !!document.documentElement.clientHeight ? document.documentElement.clientHeight : window.innerHeight || 0; 
	    }

	    //initialize dimensions
	    set_dims();

	    //run callback right away
	    if(arguments.length > 1 && !!init){
	        callback.call(viewport);
	    }

	    function redraw(){
	        set_dims();
	        callback.call(viewport);
	    }

	    window.addEventListener("resize", redraw);

	    return redraw;
	}

	// Notes:
	// enter, exit, step occur in dom order which should not result in any unexpected behavior (enter() on element 2 is called after the enter() on element 1, etc.)
	// but, depending on how fast the user scrolls back (reversing) up the page, multiple exit events could fire in the same scroll event
	// in this instance, the exit event for content/views further down the page may fire last (as discussed below, each exit() also fires a step(0, "exit"))
	// e.g. in a page structure with views A >> B >> C >> D, quickly scolling up the page may fire exit events in this order: C(), D(), A(), B().
	// in other words, be careful about what you rely on exit() events to do. the preference is for the exit event to simply "reverse" 
	// the enter event though this may not always be practical. when not practical, you can use the step event to indicate the "active" view.
	// note the special case: when the user exits a view (reverses out of), step(0, "exit") is called. this means that a view should not be considered active when the 
	// has_stepped proportion is 0.

	function scrolly_supported(){
	    var browser_support = false;

	    try{
	        browser_support = CSS.supports('(position: sticky)') || CSS.supports('(position: -webkit-sticky)');
	    }
	    catch(e){
	        browser_support = false;
	    }   
	    
	    return browser_support;
	}

	function scrolly_dims(element, top_){
	    //record viewport dimensions
	    var vh = Math.max(document.documentElement.clientHeight, (window.innerHeight || 0));
	    var vw = document.documentElement.clientWidth && window.innerWidth ?
	            Math.min(document.documentElement.clientWidth, window.innerWidth) : 
	            document.documentElement.clientWidth || window.innerWidth; 
	    var gh;
	    var gw;

	    var top = arguments.length > 1 && top_ != null ? top_ : 0;

	    var el_box = element.getBoundingClientRect();
	    
	    try{
	        gw = el_box.right-el_box.left;
	    }
	    catch(e){
	        gw = null;
	    }

	    gh = vh - top;

	    return {vw:vw, vh:vh, gh:gh, gw:gw};
	}

	// Credit: This module was inspired by Russell Goldenberg's enter-view module [License: https://github.com/russellgoldenberg/enter-view/blob/master/LICENSE]

	function scrolly(element, top_, default_threshold_){
	    
	    var top = arguments.length > 1 && top_ != null ? top_ : 0;
	    var sticky_el = d3.select(element).style("min-height","1px")
	                     .style("position", "sticky").style("top","0px").style("padding-top", top + "px")
	                     .style("box-sizing","border-box").classed("sticky-el",true);

	    //place actual graphics here
	    var views_wrap = sticky_el.append("div").style("position","relative");

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

	    var default_threshold = default_threshold_ != null ? default_threshold_ : 0.15;

	    var current_view_id = null; //what is currently displayed
	    var active_view_id = null; //what is calculated to be (should be next) in view
	    var all_views = {};
	    function show_active_view(){

	        var av;
	        if(active_view_id === null){
	            //if no view active... a) and no view initialized -> default to v0, b) otherwise keep current view
	            av = current_view_id === null ? "v0" : current_view_id;
	        }
	        else{
	            //if an active view, show it
	            av = active_view_id;
	        }

	        if(current_view_id !== av){
	            for(var v in all_views){
	                if(all_views.hasOwnProperty(v)){
	                    if(v === av){
	                        //show
	                        all_views[v].style("position","relative").style("visibility","visible").style("z-index","10").style("top","0px").style("pointer-events",null);
	                    }
	                    else{
	                        //hide
	                        all_views[v].style("position","absolute").style("visibility","hidden").style("z-index","1").style("top","0px").style("pointer-events","none");
	                    }
	                }
	            }
	            current_view_id = av;
	        }       
	    }

	    function scroll_event(){

	        //var call_stack = [];
	        //each case, 1-4 gets a closure, fn
	        //call_stack.push({
	        //    element_order: [for normal scrolling, this is the dom order. for case 2 (exit), the reverse dom order],
	        //    event_order: [for non-mutually exclusive events, the order to sort calls into: 0) enter then 1) step. not essential for the mutually exclusive exit event],
	        //    fn: closure (e.g. for case 1, bundle both the enter and step calls into one closure)
	        //})
	        //after forEach loop, sort stack (first by element_order, then by event_order), and then call all closures sequentially

	        active_view_id = null;

	        scroll_stack.forEach(function(o){
	            var px_threshold = vh * (1 - o.threshold); 
	            var box = o.el.getBoundingClientRect();
	            var h = box.bottom - box.top;

	            var action_code = null;            
	            var en = box.top < px_threshold;
	            var ex = box.bottom < px_threshold;

	            var has_stepped;

	            //share of element that is over (above) the threshold
	            try{
	                if(h == 0){throw new Error("Zero height")}                var proportion = (px_threshold - box.top) / h;
	                //has stepped always between 0 and 1
	                has_stepped = proportion > 1 ? 1 : (proportion < 0 ? 0 : proportion);
	            }
	            catch(e){
	                has_stepped = 0;
	            }

	            //note: proportion == 1 implies box.bottom == px_threshold

	            //case 1: enter (for the first time) / re-enter (after an exit)
	            if(en && !o.has_entered){
	                action_code = "enter";
	                o.enter.call(o.el);
	                o.step.call(o.el, has_stepped, action_code);
	            }
	            //case 2: exit (scrolling back up) -- scrolling past in normal flow is not an exit
	            else if(!en && o.has_entered){
	                has_stepped = 0;
	                action_code = "exit";

	                var exit_closure = function(){
	                    o.step.call(o.el, has_stepped, action_code);
	                    o.exit.call(o.el);
	                };

	                //call immediately
	                exit_closure();
	            }

	            //case 3 (stepping): in view
	            //not mutually exclusive of case 1
	            if(en && !ex){
	                action_code = has_stepped == 1 ? "passed" : "scrolling";
	                o.step.call(o.el, has_stepped, action_code);
	            }

	            //case 4 (last step): scrolling past, run last step to finish out any transition
	            //not mutually exclusive of case 1
	            if(en && ex && o.has_stepped != 1){
	                has_stepped = 1;
	                action_code = "passed";
	                o.step.call(o.el, has_stepped, action_code);
	            }

	            //passed is useful if the user reloads page beyond the first element 
	            //(e.g. avoids flashing v0 before v1 when then scrolling back)
	            if(action_code == "scrolling" || action_code == "passed"){
	                active_view_id = o.id;
	            }

	            //record this so enter() and exit() can be refired
	            o.has_entered = en;

	            o.has_stepped = has_stepped;
	        });
	        //unused for now -- not clear it is desirable to run all exits() after all enter() and step() calls
	        // >>> to do: create a single stack that orders every call properly
	        //cycle through exit stack in reverse order -- when multiple elements exit in the same call, exit the first DOM elements last, ensuring proper "rolling back" of events
	        //while(--i >= 0){
	        //    exit_stack[i]();
	        //}

	        is_scrolling = false;

	        show_active_view();

	        //console.log(current_view_id);
	    }

	    function on_scroll(){
	        if(!is_scrolling){
	            is_scrolling = true;
	            animation_frame(scroll_event);
	        }
	    }

	    var resize_stack = [];

	    function set_dims(){

	        var viewport = scrolly_dims(element, top);
	        
	        vh = viewport.vh;

	        resize_stack.forEach(function(fn){
	            fn.call(viewport);
	        });

	        return viewport;
	    }

	    set_dims(); //initialize

	    //API exposed to user of module
	    var methods = {};

	    //add a view
	    var nviews = -1;
	    methods.view = function(){
	        var view_wrap = views_wrap.append("div");
	        
	        nviews++;
	        var id = "v" + nviews;
	        all_views[id] = view_wrap;

	        var m = {};

	        // add a waypoint/marker
	        // fns is an object with "enter", "exit", and/or "step" functions
	        m.waypoint = function(el, fns, threshold_){

	            var threshold = arguments.length < 3 || threshold_ == null ? default_threshold : threshold_;
	            var enter = fns.hasOwnProperty("enter") && typeof fns.enter === "function" ? fns.enter : function(){};
	            var exit = fns.hasOwnProperty("exit") && typeof fns.exit === "function" ? fns.exit : function(){};
	            var step = fns.hasOwnProperty("step") && typeof fns.step === "function" ? fns.step : function(){};
	    
	            var pkg = {
	                el: el,
	                threshold: threshold,
	                id: id,
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
	        };

	        m.node = function(){return view_wrap.node()};

	        m.resize = function(fn){
	            resize_stack.push(fn);
	            
	            //set and get dims
	            var vp = set_dims();
	            
	            //initialize
	            fn.call(vp);
	        };

	        return m;
	    };

	    methods.supported = function(){
	        return browser_support;
	    };

	    //update and retrieve dimensions: viewport dimensions (vh, vw) and (maximum) graphics dimensions (gh, gw)
	    methods.dims = set_dims;

	    return methods;
	    
	}

	//static methods
	scrolly.supported = scrolly_supported;

	scrolly.dims = scrolly_dims;

	// the setup function must take two arguments: setup(container, view_num)
	// if setup is called with both arguments, it should draw the requested view (view_num) of the graphic, running setup first. 
	// typically, drawing the view completely means running then enter() and then the step(1) method, if present (after first running setup), but this is left up to the design of setup().
	// if called without view_num, then the return of setup is an array of objects:
	//   [{text:_, enter:_, step:_, exit:_}]
	//   calling enter, step, or exit will alter the view of the graphic to match text
	// 
	// the first form is used to handle instances when scrollytelling is not supported by the browser (every view should be drawn)
	// the second form is used to handle scrollytelling 

	//seqs = [setup0, setup1, setup2, ..., setupN];

	function sequence(container, seqs, header_text, threshold){
	    
	    var wrap = d3.select(container).append("div").classed("sequence-wrap",true);

	    

	    if(threshold == null){
	        threshold = 0.15;
	    }

	    if(scrolly.supported()){

	        var stuck = wrap.append("div");

	        if(header_text != null){
	            var header = stuck.append("div").classed("meta-header-wrap",true).html(header_text);
	        }

	        var scr = scrolly(stuck.node(), 90);

	        seqs.forEach(function(seq){
	            var view = scr.view();

	            //each sequence returns
	            var view_setup = seq(view.node());

	            var views = view_setup.views;
	            
	            view.resize(view_setup.resize);

	            views.forEach(function(d){
	                //text [c]ontainer
	                var c = wrap.append("div").classed("scrolling-panel",true);
	                c.selectAll("p").data(d.text).enter().append("p").html(function(h){return h});

	                var fns = {};
	                fns.enter = d.hasOwnProperty("enter") ? d.enter : null;
	                fns.step = d.hasOwnProperty("step") ? d.step : null;
	                fns.exit = d.hasOwnProperty("exit") ? d.exit : null;
	            
	                view.waypoint(c.node(), fns, threshold);
	            });
	        });
	    }
	    else{
	        wrap.style("margin-bottom", null);

	        if(header_text != null){
	            var header = wrap.append("div").html(header_text);
	        }

	        function loop_to(i, views){
	            var j = -1;
	            while(++j <= i){
	                if(views[j].hasOwnProperty("enter")){
	                    views[j].enter.call({});
	                }
	                if(views[j].hasOwnProperty("step")){
	                    views[j].step.call({}, 1);
	                }
	            }
	        }

	        var resize_stack = [];
	        seqs.forEach(function(seq){
	            //draw first case
	            var wrap0 = wrap.append("div").classed("static-panel",true).style("min-height","1px");
	            var v0 = seq(wrap0.node());
	            wrap0.append("div").classed("static-panel-caption",true)
	                 .selectAll("p").data(v0.views[0].text).enter().append("p").html(function(t){return t});
	            loop_to(0, v0.views);
	            resize_stack.push(v0.resize);

	            //draw any remaining views
	            if(v0.views.length > 1){
	                d3.range(1, v0.views.length).forEach(function(i){
	                    var wrapz = wrap.append("div").classed("static-panel", true);
	                    var vz = seq(wrapz.node());
	                    wrapz.append("div").classed("static-panel-caption", true)
	                        .selectAll("p").data(vz.views[i].text).enter().append("p").html(function(t){return t});
	                    loop_to(i, vz.views);
	                    resize_stack.push(vz.resize);
	                });
	            }

	            var resize_statics = function(){
	                var dims = scrolly.dims(wrap0.node(), 90);
	                resize_stack.forEach(function(fn){
	                    fn.call(dims);
	                });
	            };

	            resize_statics();
	            window.addEventListener("resize", resize_statics);
	        });

	    }



	}

	function special_dims(thiz){
	    var w = thiz.vw < 320 ? 320 : (thiz.vw > 930 ? 930 : thiz.vw);

	    //remove padding
	    w = w - 30;

	    var h = thiz.gh - 350;

	    //enforce minimum
	    if(h < 200){h = 200;}    

	    return {h:h, w:w}
	}

	function points_circle(w){
	    var t = w/2;
	    var r = w/4;

	    var radians = ([270, 330, 30, 90, 150, 210]).map(function(d){return (d/180)*Math.PI});
	    var points = radians.map(function(d){
	        var x = r * Math.cos(d);
	        var y = r * Math.sin(d);
	        return [x+t,y+t];
	    });   
	    points.push([t,t]);
	    return points;
	}

	function points_stack(w){
	    var pcts = [1/6, 3/6, 5/6];
	    var pts = d3.range(0,9).map(function(i){
	        var row = Math.floor(i/3);
	        var col = i%3;
	        return [pcts[row]*w, pcts[col]*w];
	    });
	    return pts;
	}

	//arr = [[null, className, null, className, null, null], [className, null] ]
	//subarray should be length 7 or 9
	function pts_gen(arr, w){
	    var pts = arr.length <= 7 ? points_circle(w) : points_stack(w);
	    return pts.map(function(xy, i){return {xy:xy, d:arr[i]}});
	}

	function intro0(container, i){

	    var wrap_ = d3.select(container).attr("id", "intro-0").append("div");

	    //one time setup

	    var wrap = wrap_.append("div").classed("chart-view",true).style("opacity","1");
	    
	    wrap.append("p").classed("chart-text",true).text("The analysis covers density trends of private, non-administrative sector jobs in 94 of the nation’s largest metro areas from 2004 through 2015 (the latest year of data available). To read more about data sources, coverage, and methods, see page 7 in the report. (LINKS TK)").style("margin-top","15px");
	    var title = wrap.append("div").classed("sticky-chart-title",true).style("border-bottom","2px solid #333333").append("p").html('What is perceived job density?'); 

	    var legend = wrap.append("div").style("padding","0px 0px");

	    var legend0 = legend.append("div");
	    legend0.html('<p><span class="circle-basic"></span>= 1 job</p>');

	    var legend1 = legend.append("div").style("display","none");
	    legend1.html('<p><span class="circle-srv"></span><span>Service sector job</span> <span class="circle-mfg"></span><span>Manufacturing job</span> <span class="circle-srv-new"></span><span>New service sector job</span> <span class="circle-mfg-new"></span><span>New manufacturing job</span></p>');

	    var svg = wrap.append("svg").style("width","100%");

	    var sub_group_data = {
	        "a": [
	            [null, null, null, null, "basic", null, null, null, null],  
	            [null, null, null, null, "basic", null, null, null, null],
	            [null, null, null, null, "basic", null, null, null, null],
	            [null, null, null, null, "basic", null, null, null, null],
	            [null, null, null, null, "basic", null, null, null, null],
	            [null, null, null, null, "basic", null, null, null, null],
	            [null, null, null, null, "basic", null, null, null, null],
	            [null, null, null, null, "basic", null, null, null, null],
	            [null, null, null, null, "basic", null, null, null, null]  
	        ],
	        "b": [
	            [null, null, null, null, null, null, null, null, null],  
	            [null, null, null, null, "basic", null, null, null, null],
	            [null, null, null, null, null, null, null, null, null],
	            [null, null, null, null, null, null, null, null, null],
	            ["basic", null, "basic", null, "basic", null, null], 
	            [null, null, null, null, "basic", null, null, null, null],
	            [null, null, null, null, "basic", null, null, null, null],
	            [null, null, null, null, null, null, null, null, null],
	            ["basic", null, "basic", null, "basic", null, null] 
	        ],
	        "c": [
	            [null, null, null, null, null, null, null, null, null],  
	            [null, null, null, null, null, null, null, null, null],  
	            [null, null, null, null, null, null, null, null, null],  
	            [null, null, null, null, null, null, null, null, null],  
	            ["basic", "basic", "basic", "basic", "basic", "basic", "basic", "basic", "basic"],  
	            [null, null, null, null, null, null, null, null, null],  
	            [null, null, null, null, null, null, null, null, null],  
	            [null, null, null, null, null, null, null, null, null],  
	            [null, null, null, null, null, null, null, null, null]  
	        ],

	        "d": [
	            [null, null, null, null, null, null, null],  
	            [null, null, null, null, null, null, "mfg"],  
	            [null, null, null, null, null, null, null], 

	            [null, null, null, null, null, null, null],  
	            [null, "mfg", null, "srv", null, "srv", null],  
	            [null, null, null, null, null, null, "mfg"], 

	            [null, null, null, null, null, null, "mfg"],  
	            [null, null, null, null, null, null, null],  
	            [null, "mfg", null, "srv", null, "srv", null]  
	        ],
	        "e": [
	            [null, null, null, null, null, null, null],  
	            [null, null, "new-mfg", null, null, null, "mfg"],  
	            [null, null, null, null, null, null, null], 

	            [null, null, null, null, null, null, null],  
	            ["new-mfg", "mfg", null, "srv", null, "srv", "new-srv"],  
	            [null, null, "new-mfg", null, null, null, "mfg"], 

	            [null, "new-mfg", null, null, null, null, "mfg"],  
	            [null, null, null, null, null, null, null],  
	            ["new-mfg", "mfg", null, "srv", null, "srv", "new-srv"]  
	        ],
	        "f": [
	            [null, null, null, null, null, null, null],  
	            [null, null, "new-mfg", null, null, null, "mfg"],  
	            [null, null, null, null, null, null, null], 

	            [null, null, null, null, null, null, null],  
	            [null, "mfg", null, "srv", "new-srv", "srv", "new-srv"],  
	            [null, null, null, null, null, null, "mfg"], 

	            [null, null, null, null, null, null, "mfg"],  
	            [null, null, null, null, null, null, null],  
	            ["new-mfg", "mfg", "new-mfg", "srv", "new-mfg", "srv", "new-mfg"]  
	        ]
	    };

	    var groups0 = svg.selectAll("g").data([["a","b","c"], ["d","e","f"]]).enter().append("g").style("visibility", function(d,i){return i==0 ? "visible" : "hidden"});
	    var groups = groups0.selectAll("g").data(function(d){return d}).enter().append("g").style("opacity","0.25");
	    var subgroups = groups.selectAll("g").data(function(d){return sub_group_data[d]}).enter().append("g");
	    var lrects = subgroups.append("rect").classed("little-square",true).attr("x","0").attr("y","0").attr("stroke","#333333").attr("stroke-dasharray","2,4").attr("fill","#ffffff");
	    var brects = groups.append("rect").classed("big-square",true).attr("x","0").attr("y","0").attr("stroke","#333333").attr("stroke-width","2px").attr("fill","none").style("shape-rendering","crispEdges");
	    var dots;

	    var key = {};
	    key.g = svg.append("g");
	    key.text = key.g.append("text").text("1 mile").style("font-size","15px").attr("text-anchor","middle").attr("dy",-3);
	    key.mark = key.g.append("path").style("shape-rendering","crispEdges").attr("stroke","#333333").attr("fill","none");

	    //captions
	    key.g0 = svg.append("g").selectAll("g").data([
	        [
	            ["Low perceived density", "Standard: 1 job/sq. mile", "Perceived: 1 jobs/sq. mile"],
	            ["Medium perceived density", "Standard: 1 job/sq. mile", "Perceived: 2.3 jobs/sq. mile"],
	            ["Low perceived density", "Standard: 1 job/sq. mile", "Perceived: 9 jobs/sq. mile"]
	        ],
	        [   
	            ["Yr1. Actual job concentration", "Standard: 1 job/sq. mile", "Perceived: 2.33 job/sq. mile"],
	            ["Yr2. Expected job concentration", "Standard: 1.78 jobs/sq. mile", "Perceived: 4.67 jobs/sq. mile"],
	            ["Yr2. Actual job concentration", "Standard: 1.78 jobs/sq. mile", "Perceived: 5.00 jobs/sq. mile"]
	        ]
	    ]).enter().append("g").style("visibility","hidden");

	    key.g1 = key.g0.selectAll("g").data(function(d){return d}).enter().append("g");
	    
	    key.t0 = key.g1.selectAll("text").data(function(d){return d}).enter().append("text")
	                .text(function(d){return d})
	                .attr("x","9").attr("y", function(d,i){return i*20})
	                .attr("dy","28")
	                .style("font-size","15px")
	                .style("font-weight", function(d,i){return i==0 ? "bold" : "normal"});

	    var current_view = -1;
	    
	    function redraw(){
	        var wh = special_dims(this);
	        var w = wh.w;


	        if(w < 800){w = 800;}

	        var pad_left = 9;
	        var pad_top = 35;

	        var w_gap = Math.floor((w-pad_left-pad_left)/11);
	        var w_square = Math.floor((w - w_gap - w_gap - pad_left - pad_left)/3);

	        var w_ = w_gap + w_square;
	        var w_3 = Math.floor(w_square/3);
	        

	        svg.attr("viewBox", "0 0 " + w + " " + (w_square + 150));
	        
	        key.g.attr("transform", "translate(" + pad_left + "," + (pad_top-8) + ")");
	        key.mark.attr("d", "M0.5,5 l0,-5 l" + (w_3-0.5) + ",0 l0,5");
	        key.text.attr("x", w_3/2);

	        groups.attr("transform", function(d,i){
	            return "translate(" + ((i*w_)+pad_left+0.5) + "," + (pad_top + 0.5) + ")"
	        });

	        key.g1.attr("transform", function(d,i){
	            return "translate(" + ((i*w_)+pad_left+0.5) + "," + (pad_top + w_square) + ")"
	        });

	        subgroups.attr("transform", function(d,i){
	            var row = Math.floor(i/3);
	            var col = i%3;
	            return "translate(" + (col*w_3) + "," + (row*w_3) + ")";
	        });

	        brects.attr("width",w_square).attr("height",w_square);
	        lrects.attr("width",w_3).attr("height",w_3);

	        var dots_ = subgroups.selectAll("circle").data(function(d){return pts_gen(d, w_3)});
	        dots_.exit().remove();
	        dots = dots_.enter().append("circle").merge(dots_).attr("r",w_3/9)
	        .attr("cx", function(d){return d.xy[0]})
	        .attr("cy", function(d){return d.xy[1]})
	        .attr("class", function(d){return d.d == null ? "intro" : "intro " + d.d});
	        dots.style("display", current_view < 1 || current_view == 4 ? "none" : null);

	        key.g0.selectAll("circle").attr("r", w_3/9);

	    }

	    function step(n, s, c){
	        if(c != "exit" && n!== current_view){
	            //wrap.style("opacity", n < 0 ? null : "1");
	            groups0.style("visibility", function(d,i){
	                if(i==0){
	                    return n < 4 ? "visible" : "hidden";
	                }
	                else{
	                    return n >= 4 ? "visible" : "hidden";
	                }
	            });

	            groups.style("opacity", function(d,i){
	                var j = n%4;
	                return j > 0 && i < j ? "1" : "0.25"
	            });

	            try{
	                dots.style("display", n < 1 || n == 4 ? "none" : null);
	            }
	            catch(e){

	            }

	            if(n < 4){
	                title.text("What is perceived job density?");
	                legend0.style("display","block");
	                legend1.style("display","none");
	                key.g0.style("visibility", function(d,i){return i==0 ? "visible" : "hidden"});
	            }
	            else{
	                title.text("What is the difference between actual and expected changes in job density?");
	                legend1.style("display","block");
	                legend0.style("display","none");
	                key.g0.style("visibility", function(d,i){return i==1 ? "visible" : "hidden"});
	            }

	            current_view = n;
	        }
	    }

	    var views = [
	        {
	            text:["All the findings on job density here refer to the weighted or “perceived” density of jobs in metro areas. Perceived job density measures the job density of the place in which the average job is located, revealing how dense a metro area feels and how compactly its jobs are concentrated.", "To see how this perceived density measure compares to the standard density, consider the following examples…"],
	            step:function(s, c){step(0, s, c);},
	            exit:function(){
	                step(-1, 0, "");
	            }
	        },
	        {
	            text:["In the first example, jobs are spread evenly across the metro area, giving it the same standard and perceived job density of one job per square mile."],
	            step:function(s, c){step(1, s, c);}
	        },
	        {
	            text:["The metro area in the second example has the same number of jobs and therefore the same standard density as the first one, but here jobs are more clustered in some parts than others, which makes its perceived job density greater than its standard job density."],
	            step:function(s, c){step(2, s, c);}
	        },
	        {
	            text:["In the third example, the metro area again has the same number of jobs and therefore the same standard job density, but all the jobs are concentrated in just one part of the metro area, giving it a perceived job density nine-times greater than its standard job density.", "To read more about how we measure perceived job density, see page 8 in the report. (Jump link to PDF)"],
	            step:function(s, c){step(3, s, c);}
	        },
	        {
	            text:["To better understand the factors behind job density trends, we compare actual changes in job density to counterfactual or “expected” changes, which indicate how much a metro area’s job density would have changed if its job growth accumulated according to where its existing jobs were located."],
	            step:function(s, c){step(4, s, c);}
	        },
	        {
	            text:["For example, this metro area started with five jobs in the manufacturing sector and four jobs in the services sector for a total of nine jobs in year one."],
	            step:function(s, c){step(5, s, c);}
	        },
	        {
	            text:["From year one to two, this metro area added five new manufacturing jobs and two new services jobs. If these new manufacturing and services jobs had located according to where existing jobs in these sectors were located in year one, this metro area could have expected to see its job density increase by 100%."],
	            step:function(s, c){step(6, s, c);}
	        },
	        {
	            text:["Instead, the metro area’s new manufacturing jobs actually located in just two subareas instead of five and new services jobs located in just one subarea instead of two. As a result of this more spatially concentrated job growth, this metro’s perceived job density actually increased by 115%.","To read more about how we calculate expected trends in job density, see page 9 in the report. (Jump link to PDF)"],
	            step:function(s, c){step(7, s, c);}
	        }
	    ];

	    return {views:views, resize:redraw};

	}

	var seq0data = 
	{
	  "changes": {
	    "99997": [
	      {
	        "cbsa": 99997,
	        "year": 2004,
	        "actual": 0,
	        "expected": 0
	      },
	      {
	        "cbsa": 99997,
	        "year": 2005,
	        "actual": 0.0112,
	        "expected": 0.01784
	      },
	      {
	        "cbsa": 99997,
	        "year": 2006,
	        "actual": 0.00759,
	        "expected": 0.03381
	      },
	      {
	        "cbsa": 99997,
	        "year": 2007,
	        "actual": 0.01286,
	        "expected": 0.05936
	      },
	      {
	        "cbsa": 99997,
	        "year": 2008,
	        "actual": 0.05139,
	        "expected": 0.0883
	      },
	      {
	        "cbsa": 99997,
	        "year": 2009,
	        "actual": 0.0486,
	        "expected": 0.08464
	      },
	      {
	        "cbsa": 99997,
	        "year": 2010,
	        "actual": 0.04086,
	        "expected": 0.0875
	      },
	      {
	        "cbsa": 99997,
	        "year": 2011,
	        "actual": 0.07007,
	        "expected": 0.10982
	      },
	      {
	        "cbsa": 99997,
	        "year": 2012,
	        "actual": 0.0349,
	        "expected": 0.1238
	      },
	      {
	        "cbsa": 99997,
	        "year": 2013,
	        "actual": 0.0605,
	        "expected": 0.15127
	      },
	      {
	        "cbsa": 99997,
	        "year": 2014,
	        "actual": 0.05711,
	        "expected": 0.16038
	      },
	      {
	        "cbsa": 99997,
	        "year": 2015,
	        "actual": 0.09175,
	        "expected": 0.18359
	      }
	    ],
	    "99998": [
	      {
	        "cbsa": 99998,
	        "year": 2004,
	        "actual": 0,
	        "expected": 0
	      },
	      {
	        "cbsa": 99998,
	        "year": 2005,
	        "actual": 0.00558,
	        "expected": 0.01938
	      },
	      {
	        "cbsa": 99998,
	        "year": 2006,
	        "actual": 0.04057,
	        "expected": 0.03954
	      },
	      {
	        "cbsa": 99998,
	        "year": 2007,
	        "actual": 0.06832,
	        "expected": 0.05225
	      },
	      {
	        "cbsa": 99998,
	        "year": 2008,
	        "actual": 0.13589,
	        "expected": 0.06945
	      },
	      {
	        "cbsa": 99998,
	        "year": 2009,
	        "actual": 0.19391,
	        "expected": 0.06746
	      },
	      {
	        "cbsa": 99998,
	        "year": 2010,
	        "actual": 0.20588,
	        "expected": 0.07627
	      },
	      {
	        "cbsa": 99998,
	        "year": 2011,
	        "actual": 0.24732,
	        "expected": 0.0959
	      },
	      {
	        "cbsa": 99998,
	        "year": 2012,
	        "actual": 0.28532,
	        "expected": 0.11759
	      },
	      {
	        "cbsa": 99998,
	        "year": 2013,
	        "actual": 0.32903,
	        "expected": 0.13817
	      },
	      {
	        "cbsa": 99998,
	        "year": 2014,
	        "actual": 0.3626,
	        "expected": 0.14405
	      },
	      {
	        "cbsa": 99998,
	        "year": 2015,
	        "actual": 0.39894,
	        "expected": 0.1769
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
	        "expected": 0.01529
	      },
	      {
	        "cbsa": 99999,
	        "year": 2006,
	        "actual": 0.02343,
	        "expected": 0.03214
	      },
	      {
	        "cbsa": 99999,
	        "year": 2007,
	        "actual": 0.04194,
	        "expected": 0.04832
	      },
	      {
	        "cbsa": 99999,
	        "year": 2008,
	        "actual": 0.10398,
	        "expected": 0.0745
	      },
	      {
	        "cbsa": 99999,
	        "year": 2009,
	        "actual": 0.14919,
	        "expected": 0.07976
	      },
	      {
	        "cbsa": 99999,
	        "year": 2010,
	        "actual": 0.16013,
	        "expected": 0.09153
	      },
	      {
	        "cbsa": 99999,
	        "year": 2011,
	        "actual": 0.19533,
	        "expected": 0.11036
	      },
	      {
	        "cbsa": 99999,
	        "year": 2012,
	        "actual": 0.20541,
	        "expected": 0.12757
	      },
	      {
	        "cbsa": 99999,
	        "year": 2013,
	        "actual": 0.24287,
	        "expected": 0.1505
	      },
	      {
	        "cbsa": 99999,
	        "year": 2014,
	        "actual": 0.26152,
	        "expected": 0.15602
	      },
	      {
	        "cbsa": 99999,
	        "year": 2015,
	        "actual": 0.29531,
	        "expected": 0.18391
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
	      "expected": 0.15264
	    },
	    {
	      "cbsa": 10420,
	      "naics": "22",
	      "actual": -0.47268,
	      "expected": 0.16271
	    },
	    {
	      "cbsa": 10420,
	      "naics": "23",
	      "actual": -0.01035,
	      "expected": 0.05528
	    },
	    {
	      "cbsa": 10420,
	      "naics": "31",
	      "actual": -0.16858,
	      "expected": 0.02073
	    },
	    {
	      "cbsa": 10420,
	      "naics": "42",
	      "actual": -0.22807,
	      "expected": 0.05914
	    },
	    {
	      "cbsa": 10420,
	      "naics": "44",
	      "actual": -0.13482,
	      "expected": 0.04234
	    },
	    {
	      "cbsa": 10420,
	      "naics": "48",
	      "actual": 0.14415,
	      "expected": 0.1093
	    },
	    {
	      "cbsa": 10420,
	      "naics": "51",
	      "actual": -0.38568,
	      "expected": 0.0727
	    },
	    {
	      "cbsa": 10420,
	      "naics": "52",
	      "actual": -0.30045,
	      "expected": 0.07777
	    },
	    {
	      "cbsa": 10420,
	      "naics": "53",
	      "actual": 0.00431,
	      "expected": 0.09929
	    },
	    {
	      "cbsa": 10420,
	      "naics": "54",
	      "actual": -0.31769,
	      "expected": 0.09009
	    },
	    {
	      "cbsa": 10420,
	      "naics": "55",
	      "actual": -0.34377,
	      "expected": 0.13886
	    },
	    {
	      "cbsa": 10420,
	      "naics": "61",
	      "actual": -0.39068,
	      "expected": 0.06356
	    },
	    {
	      "cbsa": 10420,
	      "naics": "62",
	      "actual": -0.25669,
	      "expected": 0.12283
	    },
	    {
	      "cbsa": 10420,
	      "naics": "71",
	      "actual": -0.30839,
	      "expected": 0.11695
	    },
	    {
	      "cbsa": 10420,
	      "naics": "72",
	      "actual": -0.1958,
	      "expected": 0.05778
	    },
	    {
	      "cbsa": 10420,
	      "naics": "81",
	      "actual": -0.23364,
	      "expected": 0.07814
	    }
	  ],
	  "10580": [
	    {
	      "cbsa": 10580,
	      "naics": "00",
	      "actual": 0.43341,
	      "expected": 0.1834
	    },
	    {
	      "cbsa": 10580,
	      "naics": "22",
	      "actual": -0.28885,
	      "expected": 0.3822
	    },
	    {
	      "cbsa": 10580,
	      "naics": "23",
	      "actual": 0.17145,
	      "expected": 0.03967
	    },
	    {
	      "cbsa": 10580,
	      "naics": "31",
	      "actual": 1.65602,
	      "expected": 0.02113
	    },
	    {
	      "cbsa": 10580,
	      "naics": "42",
	      "actual": -0.04895,
	      "expected": 0.05102
	    },
	    {
	      "cbsa": 10580,
	      "naics": "44",
	      "actual": -0.08427,
	      "expected": 0.06767
	    },
	    {
	      "cbsa": 10580,
	      "naics": "48",
	      "actual": -0.08476,
	      "expected": 0.05796
	    },
	    {
	      "cbsa": 10580,
	      "naics": "51",
	      "actual": -0.29155,
	      "expected": 0.08326
	    },
	    {
	      "cbsa": 10580,
	      "naics": "52",
	      "actual": 0.02726,
	      "expected": 0.0886
	    },
	    {
	      "cbsa": 10580,
	      "naics": "53",
	      "actual": -0.24068,
	      "expected": 0.03984
	    },
	    {
	      "cbsa": 10580,
	      "naics": "54",
	      "actual": 0.07683,
	      "expected": 0.08906
	    },
	    {
	      "cbsa": 10580,
	      "naics": "55",
	      "actual": 2.52776,
	      "expected": 0.19082
	    },
	    {
	      "cbsa": 10580,
	      "naics": "61",
	      "actual": 1.46601,
	      "expected": 0.25484
	    },
	    {
	      "cbsa": 10580,
	      "naics": "62",
	      "actual": 0.31399,
	      "expected": 0.17459
	    },
	    {
	      "cbsa": 10580,
	      "naics": "71",
	      "actual": 0.03683,
	      "expected": 0.11721
	    },
	    {
	      "cbsa": 10580,
	      "naics": "72",
	      "actual": 0.10049,
	      "expected": 0.09427
	    },
	    {
	      "cbsa": 10580,
	      "naics": "81",
	      "actual": -0.08433,
	      "expected": 0.10055
	    }
	  ],
	  "10740": [
	    {
	      "cbsa": 10740,
	      "naics": "00",
	      "actual": -0.21248,
	      "expected": 0.10261
	    },
	    {
	      "cbsa": 10740,
	      "naics": "22",
	      "actual": 0.0758,
	      "expected": -0.10377
	    },
	    {
	      "cbsa": 10740,
	      "naics": "23",
	      "actual": -0.08203,
	      "expected": 0.03696
	    },
	    {
	      "cbsa": 10740,
	      "naics": "31",
	      "actual": -0.73081,
	      "expected": 0.20456
	    },
	    {
	      "cbsa": 10740,
	      "naics": "42",
	      "actual": -0.09791,
	      "expected": 0.02799
	    },
	    {
	      "cbsa": 10740,
	      "naics": "44",
	      "actual": -0.2333,
	      "expected": 0.05566
	    },
	    {
	      "cbsa": 10740,
	      "naics": "48",
	      "actual": -0.27122,
	      "expected": 0.09974
	    },
	    {
	      "cbsa": 10740,
	      "naics": "51",
	      "actual": -0.15432,
	      "expected": -0.00585
	    },
	    {
	      "cbsa": 10740,
	      "naics": "52",
	      "actual": -0.23185,
	      "expected": 0.04553
	    },
	    {
	      "cbsa": 10740,
	      "naics": "53",
	      "actual": -0.12787,
	      "expected": 0.07595
	    },
	    {
	      "cbsa": 10740,
	      "naics": "54",
	      "actual": -0.03872,
	      "expected": -0.07337
	    },
	    {
	      "cbsa": 10740,
	      "naics": "55",
	      "actual": -0.01951,
	      "expected": 0.03638
	    },
	    {
	      "cbsa": 10740,
	      "naics": "61",
	      "actual": -0.14706,
	      "expected": 0.03198
	    },
	    {
	      "cbsa": 10740,
	      "naics": "62",
	      "actual": -0.16422,
	      "expected": 0.07939
	    },
	    {
	      "cbsa": 10740,
	      "naics": "71",
	      "actual": 0.30725,
	      "expected": 0.09293
	    },
	    {
	      "cbsa": 10740,
	      "naics": "72",
	      "actual": -0.21792,
	      "expected": 0.06414
	    },
	    {
	      "cbsa": 10740,
	      "naics": "81",
	      "actual": -0.1293,
	      "expected": 0.0627
	    }
	  ],
	  "10900": [
	    {
	      "cbsa": 10900,
	      "naics": "00",
	      "actual": 0.04818,
	      "expected": 0.17142
	    },
	    {
	      "cbsa": 10900,
	      "naics": "22",
	      "actual": -0.47456,
	      "expected": -0.01228
	    },
	    {
	      "cbsa": 10900,
	      "naics": "23",
	      "actual": 0.0873,
	      "expected": 0.1197
	    },
	    {
	      "cbsa": 10900,
	      "naics": "31",
	      "actual": -0.25067,
	      "expected": 0.05125
	    },
	    {
	      "cbsa": 10900,
	      "naics": "42",
	      "actual": -0.06401,
	      "expected": 0.14091
	    },
	    {
	      "cbsa": 10900,
	      "naics": "44",
	      "actual": -0.24071,
	      "expected": 0.08847
	    },
	    {
	      "cbsa": 10900,
	      "naics": "48",
	      "actual": -0.25094,
	      "expected": -0.0024
	    },
	    {
	      "cbsa": 10900,
	      "naics": "51",
	      "actual": -0.20168,
	      "expected": -0.03074
	    },
	    {
	      "cbsa": 10900,
	      "naics": "52",
	      "actual": 0.18292,
	      "expected": 0.08388
	    },
	    {
	      "cbsa": 10900,
	      "naics": "53",
	      "actual": 0.13804,
	      "expected": 0.13024
	    },
	    {
	      "cbsa": 10900,
	      "naics": "54",
	      "actual": -0.00088,
	      "expected": 0.10564
	    },
	    {
	      "cbsa": 10900,
	      "naics": "55",
	      "actual": 0.15962,
	      "expected": 0.62725
	    },
	    {
	      "cbsa": 10900,
	      "naics": "61",
	      "actual": -0.21392,
	      "expected": 0.05275
	    },
	    {
	      "cbsa": 10900,
	      "naics": "62",
	      "actual": 0.35373,
	      "expected": 0.2427
	    },
	    {
	      "cbsa": 10900,
	      "naics": "71",
	      "actual": 0.24436,
	      "expected": 0.09426
	    },
	    {
	      "cbsa": 10900,
	      "naics": "72",
	      "actual": 0.05913,
	      "expected": 0.11856
	    },
	    {
	      "cbsa": 10900,
	      "naics": "81",
	      "actual": -0.16736,
	      "expected": 0.10975
	    }
	  ],
	  "12060": [
	    {
	      "cbsa": 12060,
	      "naics": "00",
	      "actual": 0.19815,
	      "expected": 0.24082
	    },
	    {
	      "cbsa": 12060,
	      "naics": "22",
	      "actual": 1.44128,
	      "expected": 0.2023
	    },
	    {
	      "cbsa": 12060,
	      "naics": "23",
	      "actual": 0.28633,
	      "expected": 0.19683
	    },
	    {
	      "cbsa": 12060,
	      "naics": "31",
	      "actual": -0.01792,
	      "expected": 0.03421
	    },
	    {
	      "cbsa": 12060,
	      "naics": "42",
	      "actual": 0.33043,
	      "expected": 0.17205
	    },
	    {
	      "cbsa": 12060,
	      "naics": "44",
	      "actual": 0.1691,
	      "expected": 0.16539
	    },
	    {
	      "cbsa": 12060,
	      "naics": "48",
	      "actual": 1.277,
	      "expected": 0.27318
	    },
	    {
	      "cbsa": 12060,
	      "naics": "51",
	      "actual": -0.10197,
	      "expected": 0.12521
	    },
	    {
	      "cbsa": 12060,
	      "naics": "52",
	      "actual": 0.23351,
	      "expected": 0.21744
	    },
	    {
	      "cbsa": 12060,
	      "naics": "53",
	      "actual": 0.14772,
	      "expected": 0.19444
	    },
	    {
	      "cbsa": 12060,
	      "naics": "54",
	      "actual": 0.16614,
	      "expected": 0.20097
	    },
	    {
	      "cbsa": 12060,
	      "naics": "55",
	      "actual": 0.2154,
	      "expected": 0.17303
	    },
	    {
	      "cbsa": 12060,
	      "naics": "61",
	      "actual": -0.0318,
	      "expected": 0.29935
	    },
	    {
	      "cbsa": 12060,
	      "naics": "62",
	      "actual": 0.23305,
	      "expected": 0.28966
	    },
	    {
	      "cbsa": 12060,
	      "naics": "71",
	      "actual": 0.08718,
	      "expected": 0.17429
	    },
	    {
	      "cbsa": 12060,
	      "naics": "72",
	      "actual": 0.05065,
	      "expected": 0.17609
	    },
	    {
	      "cbsa": 12060,
	      "naics": "81",
	      "actual": 0.02154,
	      "expected": 0.19094
	    }
	  ],
	  "12260": [
	    {
	      "cbsa": 12260,
	      "naics": "00",
	      "actual": -0.00191,
	      "expected": 0.17124
	    },
	    {
	      "cbsa": 12260,
	      "naics": "22",
	      "actual": -0.66139,
	      "expected": 0.13398
	    },
	    {
	      "cbsa": 12260,
	      "naics": "23",
	      "actual": -0.22147,
	      "expected": 0.0554
	    },
	    {
	      "cbsa": 12260,
	      "naics": "31",
	      "actual": -0.35839,
	      "expected": 0.02711
	    },
	    {
	      "cbsa": 12260,
	      "naics": "42",
	      "actual": -0.26114,
	      "expected": 0.07677
	    },
	    {
	      "cbsa": 12260,
	      "naics": "44",
	      "actual": -0.13691,
	      "expected": 0.0686
	    },
	    {
	      "cbsa": 12260,
	      "naics": "48",
	      "actual": -0.25214,
	      "expected": 0.07822
	    },
	    {
	      "cbsa": 12260,
	      "naics": "51",
	      "actual": -0.4074,
	      "expected": 0.1732
	    },
	    {
	      "cbsa": 12260,
	      "naics": "52",
	      "actual": -0.26914,
	      "expected": 0.13655
	    },
	    {
	      "cbsa": 12260,
	      "naics": "53",
	      "actual": -0.36682,
	      "expected": 0.18951
	    },
	    {
	      "cbsa": 12260,
	      "naics": "54",
	      "actual": -0.21962,
	      "expected": 0.08365
	    },
	    {
	      "cbsa": 12260,
	      "naics": "55",
	      "actual": -0.27071,
	      "expected": -0.00569
	    },
	    {
	      "cbsa": 12260,
	      "naics": "61",
	      "actual": -0.04178,
	      "expected": 0.1096
	    },
	    {
	      "cbsa": 12260,
	      "naics": "62",
	      "actual": 0.12952,
	      "expected": 0.11738
	    },
	    {
	      "cbsa": 12260,
	      "naics": "71",
	      "actual": -0.35628,
	      "expected": 0.12441
	    },
	    {
	      "cbsa": 12260,
	      "naics": "72",
	      "actual": -0.14419,
	      "expected": 0.09997
	    },
	    {
	      "cbsa": 12260,
	      "naics": "81",
	      "actual": -0.12097,
	      "expected": 0.10826
	    }
	  ],
	  "12420": [
	    {
	      "cbsa": 12420,
	      "naics": "00",
	      "actual": 0.39553,
	      "expected": 0.52626
	    },
	    {
	      "cbsa": 12420,
	      "naics": "22",
	      "actual": -0.27924,
	      "expected": 0.59177
	    },
	    {
	      "cbsa": 12420,
	      "naics": "23",
	      "actual": 0.31574,
	      "expected": 0.4776
	    },
	    {
	      "cbsa": 12420,
	      "naics": "31",
	      "actual": 0.6346,
	      "expected": 0.36134
	    },
	    {
	      "cbsa": 12420,
	      "naics": "42",
	      "actual": 0.21362,
	      "expected": 0.26255
	    },
	    {
	      "cbsa": 12420,
	      "naics": "44",
	      "actual": 0.32249,
	      "expected": 0.44873
	    },
	    {
	      "cbsa": 12420,
	      "naics": "48",
	      "actual": 0.48033,
	      "expected": 0.51861
	    },
	    {
	      "cbsa": 12420,
	      "naics": "51",
	      "actual": 0.59624,
	      "expected": 0.45334
	    },
	    {
	      "cbsa": 12420,
	      "naics": "52",
	      "actual": 0.07146,
	      "expected": 0.45139
	    },
	    {
	      "cbsa": 12420,
	      "naics": "53",
	      "actual": 0.29706,
	      "expected": 0.50342
	    },
	    {
	      "cbsa": 12420,
	      "naics": "54",
	      "actual": 0.3596,
	      "expected": 0.52451
	    },
	    {
	      "cbsa": 12420,
	      "naics": "55",
	      "actual": 0.31557,
	      "expected": 0.44431
	    },
	    {
	      "cbsa": 12420,
	      "naics": "61",
	      "actual": 0.54898,
	      "expected": 0.48667
	    },
	    {
	      "cbsa": 12420,
	      "naics": "62",
	      "actual": 0.45455,
	      "expected": 0.60767
	    },
	    {
	      "cbsa": 12420,
	      "naics": "71",
	      "actual": 0.92598,
	      "expected": 0.67044
	    },
	    {
	      "cbsa": 12420,
	      "naics": "72",
	      "actual": 0.31839,
	      "expected": 0.51969
	    },
	    {
	      "cbsa": 12420,
	      "naics": "81",
	      "actual": 0.46874,
	      "expected": 0.55296
	    }
	  ],
	  "12540": [
	    {
	      "cbsa": 12540,
	      "naics": "00",
	      "actual": 0.04182,
	      "expected": 0.24659
	    },
	    {
	      "cbsa": 12540,
	      "naics": "22",
	      "actual": -0.55323,
	      "expected": 0.1313
	    },
	    {
	      "cbsa": 12540,
	      "naics": "23",
	      "actual": 0.63802,
	      "expected": 0.24811
	    },
	    {
	      "cbsa": 12540,
	      "naics": "31",
	      "actual": -0.39447,
	      "expected": 0.13324
	    },
	    {
	      "cbsa": 12540,
	      "naics": "42",
	      "actual": -0.05314,
	      "expected": 0.18332
	    },
	    {
	      "cbsa": 12540,
	      "naics": "44",
	      "actual": -0.11932,
	      "expected": 0.17996
	    },
	    {
	      "cbsa": 12540,
	      "naics": "48",
	      "actual": -0.10703,
	      "expected": 0.19226
	    },
	    {
	      "cbsa": 12540,
	      "naics": "51",
	      "actual": 0.2332,
	      "expected": 0.20378
	    },
	    {
	      "cbsa": 12540,
	      "naics": "52",
	      "actual": 0.21966,
	      "expected": 0.19744
	    },
	    {
	      "cbsa": 12540,
	      "naics": "53",
	      "actual": 0.02773,
	      "expected": 0.22578
	    },
	    {
	      "cbsa": 12540,
	      "naics": "54",
	      "actual": -0.14003,
	      "expected": 0.21897
	    },
	    {
	      "cbsa": 12540,
	      "naics": "55",
	      "actual": 0.65627,
	      "expected": 0.21365
	    },
	    {
	      "cbsa": 12540,
	      "naics": "61",
	      "actual": 0.14463,
	      "expected": 0.26283
	    },
	    {
	      "cbsa": 12540,
	      "naics": "62",
	      "actual": -0.06482,
	      "expected": 0.29154
	    },
	    {
	      "cbsa": 12540,
	      "naics": "71",
	      "actual": 0.17542,
	      "expected": 0.20152
	    },
	    {
	      "cbsa": 12540,
	      "naics": "72",
	      "actual": 0.12015,
	      "expected": 0.22956
	    },
	    {
	      "cbsa": 12540,
	      "naics": "81",
	      "actual": 0.02217,
	      "expected": 0.32177
	    }
	  ],
	  "12580": [
	    {
	      "cbsa": 12580,
	      "naics": "00",
	      "actual": -0.01017,
	      "expected": 0.1654
	    },
	    {
	      "cbsa": 12580,
	      "naics": "22",
	      "actual": 0.17963,
	      "expected": 0.00293
	    },
	    {
	      "cbsa": 12580,
	      "naics": "23",
	      "actual": 0.28751,
	      "expected": 0.15623
	    },
	    {
	      "cbsa": 12580,
	      "naics": "31",
	      "actual": -0.19992,
	      "expected": 0.11113
	    },
	    {
	      "cbsa": 12580,
	      "naics": "42",
	      "actual": -0.12814,
	      "expected": 0.15466
	    },
	    {
	      "cbsa": 12580,
	      "naics": "44",
	      "actual": 0.07033,
	      "expected": 0.11903
	    },
	    {
	      "cbsa": 12580,
	      "naics": "48",
	      "actual": -0.04513,
	      "expected": 0.15902
	    },
	    {
	      "cbsa": 12580,
	      "naics": "51",
	      "actual": -0.13022,
	      "expected": 0.16513
	    },
	    {
	      "cbsa": 12580,
	      "naics": "52",
	      "actual": -0.19713,
	      "expected": 0.10784
	    },
	    {
	      "cbsa": 12580,
	      "naics": "53",
	      "actual": -0.06629,
	      "expected": 0.18423
	    },
	    {
	      "cbsa": 12580,
	      "naics": "54",
	      "actual": -0.17133,
	      "expected": 0.07834
	    },
	    {
	      "cbsa": 12580,
	      "naics": "55",
	      "actual": -0.10724,
	      "expected": 0.00308
	    },
	    {
	      "cbsa": 12580,
	      "naics": "61",
	      "actual": -0.36757,
	      "expected": 0.09146
	    },
	    {
	      "cbsa": 12580,
	      "naics": "62",
	      "actual": 0.34962,
	      "expected": 0.20738
	    },
	    {
	      "cbsa": 12580,
	      "naics": "71",
	      "actual": 0.25049,
	      "expected": 0.25033
	    },
	    {
	      "cbsa": 12580,
	      "naics": "72",
	      "actual": -0.04746,
	      "expected": 0.11663
	    },
	    {
	      "cbsa": 12580,
	      "naics": "81",
	      "actual": 0.05696,
	      "expected": 0.16328
	    }
	  ],
	  "12940": [
	    {
	      "cbsa": 12940,
	      "naics": "00",
	      "actual": -0.04436,
	      "expected": 0.17809
	    },
	    {
	      "cbsa": 12940,
	      "naics": "22",
	      "actual": -0.06599,
	      "expected": -0.02665
	    },
	    {
	      "cbsa": 12940,
	      "naics": "23",
	      "actual": -0.22511,
	      "expected": 0.07143
	    },
	    {
	      "cbsa": 12940,
	      "naics": "31",
	      "actual": -0.40876,
	      "expected": 0.04805
	    },
	    {
	      "cbsa": 12940,
	      "naics": "42",
	      "actual": 0.09204,
	      "expected": 0.20547
	    },
	    {
	      "cbsa": 12940,
	      "naics": "44",
	      "actual": 0.06246,
	      "expected": 0.21164
	    },
	    {
	      "cbsa": 12940,
	      "naics": "48",
	      "actual": 0.35762,
	      "expected": 0.23248
	    },
	    {
	      "cbsa": 12940,
	      "naics": "51",
	      "actual": 0.17691,
	      "expected": 0.12231
	    },
	    {
	      "cbsa": 12940,
	      "naics": "52",
	      "actual": -0.1404,
	      "expected": 0.21588
	    },
	    {
	      "cbsa": 12940,
	      "naics": "53",
	      "actual": -0.04886,
	      "expected": 0.23585
	    },
	    {
	      "cbsa": 12940,
	      "naics": "54",
	      "actual": 0.02429,
	      "expected": 0.1979
	    },
	    {
	      "cbsa": 12940,
	      "naics": "55",
	      "actual": 0.63057,
	      "expected": 0.34912
	    },
	    {
	      "cbsa": 12940,
	      "naics": "61",
	      "actual": 0.05945,
	      "expected": 0.2729
	    },
	    {
	      "cbsa": 12940,
	      "naics": "62",
	      "actual": -0.10664,
	      "expected": 0.1442
	    },
	    {
	      "cbsa": 12940,
	      "naics": "71",
	      "actual": -0.00695,
	      "expected": 0.05695
	    },
	    {
	      "cbsa": 12940,
	      "naics": "72",
	      "actual": 0.09196,
	      "expected": 0.22025
	    },
	    {
	      "cbsa": 12940,
	      "naics": "81",
	      "actual": 0.15911,
	      "expected": 0.22113
	    }
	  ],
	  "13820": [
	    {
	      "cbsa": 13820,
	      "naics": "00",
	      "actual": -0.15149,
	      "expected": 0.04801
	    },
	    {
	      "cbsa": 13820,
	      "naics": "22",
	      "actual": -0.22174,
	      "expected": 0.01974
	    },
	    {
	      "cbsa": 13820,
	      "naics": "23",
	      "actual": -0.09886,
	      "expected": 0.01741
	    },
	    {
	      "cbsa": 13820,
	      "naics": "31",
	      "actual": -0.26543,
	      "expected": -0.02737
	    },
	    {
	      "cbsa": 13820,
	      "naics": "42",
	      "actual": -0.13597,
	      "expected": 0.01754
	    },
	    {
	      "cbsa": 13820,
	      "naics": "44",
	      "actual": -0.17099,
	      "expected": 0.03927
	    },
	    {
	      "cbsa": 13820,
	      "naics": "48",
	      "actual": -0.39978,
	      "expected": -0.00629
	    },
	    {
	      "cbsa": 13820,
	      "naics": "51",
	      "actual": -0.19614,
	      "expected": -0.03603
	    },
	    {
	      "cbsa": 13820,
	      "naics": "52",
	      "actual": -0.27555,
	      "expected": 0.00337
	    },
	    {
	      "cbsa": 13820,
	      "naics": "53",
	      "actual": -0.12026,
	      "expected": 0.03178
	    },
	    {
	      "cbsa": 13820,
	      "naics": "54",
	      "actual": -0.23366,
	      "expected": 0.03252
	    },
	    {
	      "cbsa": 13820,
	      "naics": "55",
	      "actual": -0.15245,
	      "expected": -0.03157
	    },
	    {
	      "cbsa": 13820,
	      "naics": "61",
	      "actual": -0.13432,
	      "expected": 0.04933
	    },
	    {
	      "cbsa": 13820,
	      "naics": "62",
	      "actual": -0.01382,
	      "expected": 0.0579
	    },
	    {
	      "cbsa": 13820,
	      "naics": "71",
	      "actual": -0.11901,
	      "expected": 0.0117
	    },
	    {
	      "cbsa": 13820,
	      "naics": "72",
	      "actual": -0.02961,
	      "expected": 0.04528
	    },
	    {
	      "cbsa": 13820,
	      "naics": "81",
	      "actual": -0.20627,
	      "expected": 0.03264
	    }
	  ],
	  "14260": [
	    {
	      "cbsa": 14260,
	      "naics": "00",
	      "actual": 0.21377,
	      "expected": 0.32161
	    },
	    {
	      "cbsa": 14260,
	      "naics": "22",
	      "actual": 0.65994,
	      "expected": 0.99321
	    },
	    {
	      "cbsa": 14260,
	      "naics": "23",
	      "actual": -0.01884,
	      "expected": 0.22857
	    },
	    {
	      "cbsa": 14260,
	      "naics": "31",
	      "actual": -0.17324,
	      "expected": 0.08456
	    },
	    {
	      "cbsa": 14260,
	      "naics": "42",
	      "actual": 0.12267,
	      "expected": 0.19014
	    },
	    {
	      "cbsa": 14260,
	      "naics": "44",
	      "actual": -0.0161,
	      "expected": 0.21621
	    },
	    {
	      "cbsa": 14260,
	      "naics": "48",
	      "actual": -0.13123,
	      "expected": 0.15056
	    },
	    {
	      "cbsa": 14260,
	      "naics": "51",
	      "actual": 0.12767,
	      "expected": 0.2176
	    },
	    {
	      "cbsa": 14260,
	      "naics": "52",
	      "actual": 0.03993,
	      "expected": 0.23892
	    },
	    {
	      "cbsa": 14260,
	      "naics": "53",
	      "actual": -0.00934,
	      "expected": 0.26364
	    },
	    {
	      "cbsa": 14260,
	      "naics": "54",
	      "actual": 0.02885,
	      "expected": 0.2351
	    },
	    {
	      "cbsa": 14260,
	      "naics": "55",
	      "actual": 0.23673,
	      "expected": 0.19306
	    },
	    {
	      "cbsa": 14260,
	      "naics": "61",
	      "actual": 0.18204,
	      "expected": 0.20635
	    },
	    {
	      "cbsa": 14260,
	      "naics": "62",
	      "actual": 0.45371,
	      "expected": 0.34936
	    },
	    {
	      "cbsa": 14260,
	      "naics": "71",
	      "actual": 0.82543,
	      "expected": 0.28039
	    },
	    {
	      "cbsa": 14260,
	      "naics": "72",
	      "actual": 0.04299,
	      "expected": 0.24915
	    },
	    {
	      "cbsa": 14260,
	      "naics": "81",
	      "actual": -0.18479,
	      "expected": 0.21972
	    }
	  ],
	  "14860": [
	    {
	      "cbsa": 14860,
	      "naics": "00",
	      "actual": -0.06212,
	      "expected": 0.06834
	    },
	    {
	      "cbsa": 14860,
	      "naics": "22",
	      "actual": 0.68635,
	      "expected": 0.09727
	    },
	    {
	      "cbsa": 14860,
	      "naics": "23",
	      "actual": -0.00252,
	      "expected": -0.05849
	    },
	    {
	      "cbsa": 14860,
	      "naics": "31",
	      "actual": -0.06953,
	      "expected": -0.06243
	    },
	    {
	      "cbsa": 14860,
	      "naics": "42",
	      "actual": -0.00961,
	      "expected": 0.03338
	    },
	    {
	      "cbsa": 14860,
	      "naics": "44",
	      "actual": 0.03764,
	      "expected": 0.0337
	    },
	    {
	      "cbsa": 14860,
	      "naics": "48",
	      "actual": -0.16854,
	      "expected": 0.01119
	    },
	    {
	      "cbsa": 14860,
	      "naics": "51",
	      "actual": 0.32084,
	      "expected": 0.07764
	    },
	    {
	      "cbsa": 14860,
	      "naics": "52",
	      "actual": -0.16021,
	      "expected": 0.03351
	    },
	    {
	      "cbsa": 14860,
	      "naics": "53",
	      "actual": -0.1041,
	      "expected": 0.03993
	    },
	    {
	      "cbsa": 14860,
	      "naics": "54",
	      "actual": -0.23541,
	      "expected": 0.03509
	    },
	    {
	      "cbsa": 14860,
	      "naics": "55",
	      "actual": -0.14199,
	      "expected": 0.02062
	    },
	    {
	      "cbsa": 14860,
	      "naics": "61",
	      "actual": -0.08581,
	      "expected": 0.14546
	    },
	    {
	      "cbsa": 14860,
	      "naics": "62",
	      "actual": -0.04807,
	      "expected": 0.13867
	    },
	    {
	      "cbsa": 14860,
	      "naics": "71",
	      "actual": 0.00329,
	      "expected": 0.01987
	    },
	    {
	      "cbsa": 14860,
	      "naics": "72",
	      "actual": 0.01985,
	      "expected": 0.07674
	    },
	    {
	      "cbsa": 14860,
	      "naics": "81",
	      "actual": -0.10383,
	      "expected": 0.04467
	    }
	  ],
	  "15380": [
	    {
	      "cbsa": 15380,
	      "naics": "00",
	      "actual": -0.12852,
	      "expected": 0.17207
	    },
	    {
	      "cbsa": 15380,
	      "naics": "22",
	      "actual": 2.92307,
	      "expected": 2.61184
	    },
	    {
	      "cbsa": 15380,
	      "naics": "23",
	      "actual": -0.12696,
	      "expected": 0.25976
	    },
	    {
	      "cbsa": 15380,
	      "naics": "31",
	      "actual": -0.24576,
	      "expected": 0.09385
	    },
	    {
	      "cbsa": 15380,
	      "naics": "42",
	      "actual": -0.01313,
	      "expected": 0.22778
	    },
	    {
	      "cbsa": 15380,
	      "naics": "44",
	      "actual": 0.00221,
	      "expected": 0.10671
	    },
	    {
	      "cbsa": 15380,
	      "naics": "48",
	      "actual": -0.04451,
	      "expected": 0.24946
	    },
	    {
	      "cbsa": 15380,
	      "naics": "51",
	      "actual": -0.16719,
	      "expected": 0.22187
	    },
	    {
	      "cbsa": 15380,
	      "naics": "52",
	      "actual": -0.46762,
	      "expected": 0.17566
	    },
	    {
	      "cbsa": 15380,
	      "naics": "53",
	      "actual": -0.19013,
	      "expected": 0.31275
	    },
	    {
	      "cbsa": 15380,
	      "naics": "54",
	      "actual": -0.14959,
	      "expected": 0.16911
	    },
	    {
	      "cbsa": 15380,
	      "naics": "55",
	      "actual": -0.15166,
	      "expected": 0.26772
	    },
	    {
	      "cbsa": 15380,
	      "naics": "61",
	      "actual": -0.23461,
	      "expected": 0.19607
	    },
	    {
	      "cbsa": 15380,
	      "naics": "62",
	      "actual": -0.14236,
	      "expected": 0.11648
	    },
	    {
	      "cbsa": 15380,
	      "naics": "71",
	      "actual": -0.20143,
	      "expected": 0.24526
	    },
	    {
	      "cbsa": 15380,
	      "naics": "72",
	      "actual": 0.13881,
	      "expected": 0.18951
	    },
	    {
	      "cbsa": 15380,
	      "naics": "81",
	      "actual": -0.22892,
	      "expected": 0.18423
	    }
	  ],
	  "15980": [
	    {
	      "cbsa": 15980,
	      "naics": "00",
	      "actual": -0.31102,
	      "expected": -0.02583
	    },
	    {
	      "cbsa": 15980,
	      "naics": "22",
	      "actual": 0.18657,
	      "expected": -0.01464
	    },
	    {
	      "cbsa": 15980,
	      "naics": "23",
	      "actual": 0.02754,
	      "expected": 0.09794
	    },
	    {
	      "cbsa": 15980,
	      "naics": "31",
	      "actual": -0.26792,
	      "expected": 0.08522
	    },
	    {
	      "cbsa": 15980,
	      "naics": "42",
	      "actual": -0.00139,
	      "expected": 0.09801
	    },
	    {
	      "cbsa": 15980,
	      "naics": "44",
	      "actual": -0.23974,
	      "expected": 0.11446
	    },
	    {
	      "cbsa": 15980,
	      "naics": "48",
	      "actual": 0.13656,
	      "expected": 0.00922
	    },
	    {
	      "cbsa": 15980,
	      "naics": "51",
	      "actual": -0.26277,
	      "expected": 0.00813
	    },
	    {
	      "cbsa": 15980,
	      "naics": "52",
	      "actual": -0.17666,
	      "expected": 0.18846
	    },
	    {
	      "cbsa": 15980,
	      "naics": "53",
	      "actual": -0.1602,
	      "expected": 0.11343
	    },
	    {
	      "cbsa": 15980,
	      "naics": "54",
	      "actual": -0.11802,
	      "expected": 0.13599
	    },
	    {
	      "cbsa": 15980,
	      "naics": "55",
	      "actual": -0.19856,
	      "expected": 0.00617
	    },
	    {
	      "cbsa": 15980,
	      "naics": "61",
	      "actual": -0.38902,
	      "expected": 0.13922
	    },
	    {
	      "cbsa": 15980,
	      "naics": "62",
	      "actual": -0.25929,
	      "expected": 0.05804
	    },
	    {
	      "cbsa": 15980,
	      "naics": "71",
	      "actual": 0.0434,
	      "expected": 0.30731
	    },
	    {
	      "cbsa": 15980,
	      "naics": "72",
	      "actual": -0.15459,
	      "expected": 0.15224
	    },
	    {
	      "cbsa": 15980,
	      "naics": "81",
	      "actual": -0.25744,
	      "expected": 0.10926
	    }
	  ],
	  "16700": [
	    {
	      "cbsa": 16700,
	      "naics": "00",
	      "actual": 0.02588,
	      "expected": 0.23265
	    },
	    {
	      "cbsa": 16700,
	      "naics": "22",
	      "actual": -0.10053,
	      "expected": 0.08702
	    },
	    {
	      "cbsa": 16700,
	      "naics": "23",
	      "actual": 0.10317,
	      "expected": 0.16588
	    },
	    {
	      "cbsa": 16700,
	      "naics": "31",
	      "actual": 0.53233,
	      "expected": 0.13246
	    },
	    {
	      "cbsa": 16700,
	      "naics": "42",
	      "actual": 0.01593,
	      "expected": 0.18186
	    },
	    {
	      "cbsa": 16700,
	      "naics": "44",
	      "actual": 0.06525,
	      "expected": 0.19889
	    },
	    {
	      "cbsa": 16700,
	      "naics": "48",
	      "actual": -0.0212,
	      "expected": 0.17941
	    },
	    {
	      "cbsa": 16700,
	      "naics": "51",
	      "actual": -0.14388,
	      "expected": 0.16341
	    },
	    {
	      "cbsa": 16700,
	      "naics": "52",
	      "actual": 0.14153,
	      "expected": 0.21972
	    },
	    {
	      "cbsa": 16700,
	      "naics": "53",
	      "actual": 0.20296,
	      "expected": 0.1746
	    },
	    {
	      "cbsa": 16700,
	      "naics": "54",
	      "actual": -0.25001,
	      "expected": 0.14841
	    },
	    {
	      "cbsa": 16700,
	      "naics": "55",
	      "actual": -0.15318,
	      "expected": -0.28989
	    },
	    {
	      "cbsa": 16700,
	      "naics": "61",
	      "actual": 0.17757,
	      "expected": 0.18069
	    },
	    {
	      "cbsa": 16700,
	      "naics": "62",
	      "actual": -0.09778,
	      "expected": 0.16784
	    },
	    {
	      "cbsa": 16700,
	      "naics": "71",
	      "actual": -0.14889,
	      "expected": 0.14651
	    },
	    {
	      "cbsa": 16700,
	      "naics": "72",
	      "actual": -0.00265,
	      "expected": 0.21154
	    },
	    {
	      "cbsa": 16700,
	      "naics": "81",
	      "actual": -0.03921,
	      "expected": 0.1864
	    }
	  ],
	  "16740": [
	    {
	      "cbsa": 16740,
	      "naics": "00",
	      "actual": 0.44242,
	      "expected": 0.49428
	    },
	    {
	      "cbsa": 16740,
	      "naics": "22",
	      "actual": -0.40596,
	      "expected": 0.37453
	    },
	    {
	      "cbsa": 16740,
	      "naics": "23",
	      "actual": 0.55218,
	      "expected": 0.35637
	    },
	    {
	      "cbsa": 16740,
	      "naics": "31",
	      "actual": -0.46279,
	      "expected": 0.15364
	    },
	    {
	      "cbsa": 16740,
	      "naics": "42",
	      "actual": 0.35368,
	      "expected": 0.27959
	    },
	    {
	      "cbsa": 16740,
	      "naics": "44",
	      "actual": 0.14017,
	      "expected": 0.26953
	    },
	    {
	      "cbsa": 16740,
	      "naics": "48",
	      "actual": -0.16289,
	      "expected": 0.12385
	    },
	    {
	      "cbsa": 16740,
	      "naics": "51",
	      "actual": -0.07054,
	      "expected": 0.34647
	    },
	    {
	      "cbsa": 16740,
	      "naics": "52",
	      "actual": 0.47856,
	      "expected": 0.34064
	    },
	    {
	      "cbsa": 16740,
	      "naics": "53",
	      "actual": 0.2911,
	      "expected": 0.37208
	    },
	    {
	      "cbsa": 16740,
	      "naics": "54",
	      "actual": 0.26335,
	      "expected": 0.38782
	    },
	    {
	      "cbsa": 16740,
	      "naics": "55",
	      "actual": 0.58129,
	      "expected": 0.40007
	    },
	    {
	      "cbsa": 16740,
	      "naics": "61",
	      "actual": 0.73753,
	      "expected": 0.48765
	    },
	    {
	      "cbsa": 16740,
	      "naics": "62",
	      "actual": 0.2943,
	      "expected": 0.43538
	    },
	    {
	      "cbsa": 16740,
	      "naics": "71",
	      "actual": 1.45841,
	      "expected": 0.77157
	    },
	    {
	      "cbsa": 16740,
	      "naics": "72",
	      "actual": 0.33099,
	      "expected": 0.36584
	    },
	    {
	      "cbsa": 16740,
	      "naics": "81",
	      "actual": 0.22245,
	      "expected": 0.32141
	    }
	  ],
	  "16860": [
	    {
	      "cbsa": 16860,
	      "naics": "00",
	      "actual": -0.26323,
	      "expected": -0.04552
	    },
	    {
	      "cbsa": 16860,
	      "naics": "22",
	      "actual": 0.01944,
	      "expected": -0.06227
	    },
	    {
	      "cbsa": 16860,
	      "naics": "23",
	      "actual": 0.37034,
	      "expected": 0.03631
	    },
	    {
	      "cbsa": 16860,
	      "naics": "31",
	      "actual": -0.04474,
	      "expected": -0.00949
	    },
	    {
	      "cbsa": 16860,
	      "naics": "42",
	      "actual": -0.08963,
	      "expected": -0.01842
	    },
	    {
	      "cbsa": 16860,
	      "naics": "44",
	      "actual": -0.46503,
	      "expected": -0.02009
	    },
	    {
	      "cbsa": 16860,
	      "naics": "48",
	      "actual": -0.22797,
	      "expected": -0.05688
	    },
	    {
	      "cbsa": 16860,
	      "naics": "51",
	      "actual": -0.30119,
	      "expected": -0.05753
	    },
	    {
	      "cbsa": 16860,
	      "naics": "52",
	      "actual": -0.51942,
	      "expected": 0.00158
	    },
	    {
	      "cbsa": 16860,
	      "naics": "53",
	      "actual": -0.39827,
	      "expected": -0.04968
	    },
	    {
	      "cbsa": 16860,
	      "naics": "54",
	      "actual": -0.01138,
	      "expected": -0.0065
	    },
	    {
	      "cbsa": 16860,
	      "naics": "55",
	      "actual": 0.17428,
	      "expected": -0.47984
	    },
	    {
	      "cbsa": 16860,
	      "naics": "61",
	      "actual": -0.52996,
	      "expected": -0.17533
	    },
	    {
	      "cbsa": 16860,
	      "naics": "62",
	      "actual": -0.26048,
	      "expected": 0.05134
	    },
	    {
	      "cbsa": 16860,
	      "naics": "71",
	      "actual": -0.29234,
	      "expected": -0.00888
	    },
	    {
	      "cbsa": 16860,
	      "naics": "72",
	      "actual": -0.18931,
	      "expected": -0.03112
	    },
	    {
	      "cbsa": 16860,
	      "naics": "81",
	      "actual": -0.14021,
	      "expected": -0.01261
	    }
	  ],
	  "16980": [
	    {
	      "cbsa": 16980,
	      "naics": "00",
	      "actual": 0.20434,
	      "expected": 0.13376
	    },
	    {
	      "cbsa": 16980,
	      "naics": "22",
	      "actual": -0.76177,
	      "expected": 0.00303
	    },
	    {
	      "cbsa": 16980,
	      "naics": "23",
	      "actual": 0.26181,
	      "expected": 0.044
	    },
	    {
	      "cbsa": 16980,
	      "naics": "31",
	      "actual": -0.09852,
	      "expected": 0.03638
	    },
	    {
	      "cbsa": 16980,
	      "naics": "42",
	      "actual": 0.51342,
	      "expected": 0.08967
	    },
	    {
	      "cbsa": 16980,
	      "naics": "44",
	      "actual": 0.28932,
	      "expected": 0.10473
	    },
	    {
	      "cbsa": 16980,
	      "naics": "48",
	      "actual": -0.3375,
	      "expected": 0.03469
	    },
	    {
	      "cbsa": 16980,
	      "naics": "51",
	      "actual": 0.26707,
	      "expected": 0.08267
	    },
	    {
	      "cbsa": 16980,
	      "naics": "52",
	      "actual": 0.12157,
	      "expected": 0.08205
	    },
	    {
	      "cbsa": 16980,
	      "naics": "53",
	      "actual": 0.13254,
	      "expected": 0.07413
	    },
	    {
	      "cbsa": 16980,
	      "naics": "54",
	      "actual": 0.27485,
	      "expected": 0.09964
	    },
	    {
	      "cbsa": 16980,
	      "naics": "55",
	      "actual": -0.06917,
	      "expected": 0.08244
	    },
	    {
	      "cbsa": 16980,
	      "naics": "61",
	      "actual": 0.14197,
	      "expected": 0.2055
	    },
	    {
	      "cbsa": 16980,
	      "naics": "62",
	      "actual": -0.02855,
	      "expected": 0.16697
	    },
	    {
	      "cbsa": 16980,
	      "naics": "71",
	      "actual": 0.20673,
	      "expected": 0.08508
	    },
	    {
	      "cbsa": 16980,
	      "naics": "72",
	      "actual": 0.32883,
	      "expected": 0.12861
	    },
	    {
	      "cbsa": 16980,
	      "naics": "81",
	      "actual": 0.36692,
	      "expected": 0.1157
	    }
	  ],
	  "17140": [
	    {
	      "cbsa": 17140,
	      "naics": "00",
	      "actual": 0.07408,
	      "expected": 0.16494
	    },
	    {
	      "cbsa": 17140,
	      "naics": "22",
	      "actual": -0.48595,
	      "expected": 0.40689
	    },
	    {
	      "cbsa": 17140,
	      "naics": "23",
	      "actual": 0.12169,
	      "expected": 0.0838
	    },
	    {
	      "cbsa": 17140,
	      "naics": "31",
	      "actual": 0.05341,
	      "expected": 0.01711
	    },
	    {
	      "cbsa": 17140,
	      "naics": "42",
	      "actual": 0.22305,
	      "expected": 0.081
	    },
	    {
	      "cbsa": 17140,
	      "naics": "44",
	      "actual": -0.08484,
	      "expected": 0.06738
	    },
	    {
	      "cbsa": 17140,
	      "naics": "48",
	      "actual": -0.55407,
	      "expected": 0.04833
	    },
	    {
	      "cbsa": 17140,
	      "naics": "51",
	      "actual": 0.04014,
	      "expected": 0.06959
	    },
	    {
	      "cbsa": 17140,
	      "naics": "52",
	      "actual": -0.10314,
	      "expected": 0.10428
	    },
	    {
	      "cbsa": 17140,
	      "naics": "53",
	      "actual": 0.06583,
	      "expected": 0.11909
	    },
	    {
	      "cbsa": 17140,
	      "naics": "54",
	      "actual": -0.12021,
	      "expected": 0.09704
	    },
	    {
	      "cbsa": 17140,
	      "naics": "55",
	      "actual": -0.27457,
	      "expected": 0.09591
	    },
	    {
	      "cbsa": 17140,
	      "naics": "61",
	      "actual": -0.18203,
	      "expected": 0.15424
	    },
	    {
	      "cbsa": 17140,
	      "naics": "62",
	      "actual": 0.51432,
	      "expected": 0.11039
	    },
	    {
	      "cbsa": 17140,
	      "naics": "71",
	      "actual": 0.19158,
	      "expected": 0.16105
	    },
	    {
	      "cbsa": 17140,
	      "naics": "72",
	      "actual": 0.03434,
	      "expected": 0.09507
	    },
	    {
	      "cbsa": 17140,
	      "naics": "81",
	      "actual": -0.03834,
	      "expected": 0.11086
	    }
	  ],
	  "17460": [
	    {
	      "cbsa": 17460,
	      "naics": "00",
	      "actual": 0.29741,
	      "expected": 0.03878
	    },
	    {
	      "cbsa": 17460,
	      "naics": "22",
	      "actual": -0.30669,
	      "expected": 0.01148
	    },
	    {
	      "cbsa": 17460,
	      "naics": "23",
	      "actual": -0.04447,
	      "expected": -0.0341
	    },
	    {
	      "cbsa": 17460,
	      "naics": "31",
	      "actual": -0.28844,
	      "expected": -0.025
	    },
	    {
	      "cbsa": 17460,
	      "naics": "42",
	      "actual": -0.3451,
	      "expected": -0.05032
	    },
	    {
	      "cbsa": 17460,
	      "naics": "44",
	      "actual": -0.23401,
	      "expected": -0.00997
	    },
	    {
	      "cbsa": 17460,
	      "naics": "48",
	      "actual": -0.23156,
	      "expected": -0.01875
	    },
	    {
	      "cbsa": 17460,
	      "naics": "51",
	      "actual": -0.15035,
	      "expected": -0.01647
	    },
	    {
	      "cbsa": 17460,
	      "naics": "52",
	      "actual": -0.30873,
	      "expected": -0.04786
	    },
	    {
	      "cbsa": 17460,
	      "naics": "53",
	      "actual": -0.14491,
	      "expected": -0.00679
	    },
	    {
	      "cbsa": 17460,
	      "naics": "54",
	      "actual": -0.10303,
	      "expected": -0.0102
	    },
	    {
	      "cbsa": 17460,
	      "naics": "55",
	      "actual": 0.24282,
	      "expected": -0.12471
	    },
	    {
	      "cbsa": 17460,
	      "naics": "61",
	      "actual": -0.06147,
	      "expected": 0.07335
	    },
	    {
	      "cbsa": 17460,
	      "naics": "62",
	      "actual": 0.94835,
	      "expected": -0.02297
	    },
	    {
	      "cbsa": 17460,
	      "naics": "71",
	      "actual": 0.79268,
	      "expected": 0.10213
	    },
	    {
	      "cbsa": 17460,
	      "naics": "72",
	      "actual": 0.30932,
	      "expected": -0.00441
	    },
	    {
	      "cbsa": 17460,
	      "naics": "81",
	      "actual": -0.00827,
	      "expected": -0.01819
	    }
	  ],
	  "17820": [
	    {
	      "cbsa": 17820,
	      "naics": "00",
	      "actual": -0.05474,
	      "expected": 0.08756
	    },
	    {
	      "cbsa": 17820,
	      "naics": "22",
	      "actual": -0.71719,
	      "expected": 0.12551
	    },
	    {
	      "cbsa": 17820,
	      "naics": "23",
	      "actual": 0.19648,
	      "expected": -0.02401
	    },
	    {
	      "cbsa": 17820,
	      "naics": "31",
	      "actual": -0.16783,
	      "expected": -0.15448
	    },
	    {
	      "cbsa": 17820,
	      "naics": "42",
	      "actual": -0.09025,
	      "expected": -0.0055
	    },
	    {
	      "cbsa": 17820,
	      "naics": "44",
	      "actual": -0.29914,
	      "expected": 0.07417
	    },
	    {
	      "cbsa": 17820,
	      "naics": "48",
	      "actual": -0.39999,
	      "expected": -0.00128
	    },
	    {
	      "cbsa": 17820,
	      "naics": "51",
	      "actual": -0.01882,
	      "expected": -0.00811
	    },
	    {
	      "cbsa": 17820,
	      "naics": "52",
	      "actual": -0.06969,
	      "expected": 0.13036
	    },
	    {
	      "cbsa": 17820,
	      "naics": "53",
	      "actual": 0.05115,
	      "expected": 0.0546
	    },
	    {
	      "cbsa": 17820,
	      "naics": "54",
	      "actual": 0.13586,
	      "expected": 0.06822
	    },
	    {
	      "cbsa": 17820,
	      "naics": "55",
	      "actual": 0.01801,
	      "expected": 0.04909
	    },
	    {
	      "cbsa": 17820,
	      "naics": "61",
	      "actual": 0.70938,
	      "expected": 0.2051
	    },
	    {
	      "cbsa": 17820,
	      "naics": "62",
	      "actual": 0.11162,
	      "expected": 0.16132
	    },
	    {
	      "cbsa": 17820,
	      "naics": "71",
	      "actual": -0.1019,
	      "expected": 0.02424
	    },
	    {
	      "cbsa": 17820,
	      "naics": "72",
	      "actual": -0.10036,
	      "expected": 0.09059
	    },
	    {
	      "cbsa": 17820,
	      "naics": "81",
	      "actual": -0.32038,
	      "expected": 0.06702
	    }
	  ],
	  "17900": [
	    {
	      "cbsa": 17900,
	      "naics": "00",
	      "actual": -0.13207,
	      "expected": 0.11255
	    },
	    {
	      "cbsa": 17900,
	      "naics": "22",
	      "actual": -0.76972,
	      "expected": -0.00578
	    },
	    {
	      "cbsa": 17900,
	      "naics": "23",
	      "actual": -0.20804,
	      "expected": 0.13556
	    },
	    {
	      "cbsa": 17900,
	      "naics": "31",
	      "actual": -0.09626,
	      "expected": 0.10566
	    },
	    {
	      "cbsa": 17900,
	      "naics": "42",
	      "actual": -0.22108,
	      "expected": 0.1151
	    },
	    {
	      "cbsa": 17900,
	      "naics": "44",
	      "actual": -0.21115,
	      "expected": 0.0957
	    },
	    {
	      "cbsa": 17900,
	      "naics": "48",
	      "actual": -0.39154,
	      "expected": -0.00121
	    },
	    {
	      "cbsa": 17900,
	      "naics": "51",
	      "actual": 0.15135,
	      "expected": 0.05607
	    },
	    {
	      "cbsa": 17900,
	      "naics": "52",
	      "actual": -0.13644,
	      "expected": 0.00371
	    },
	    {
	      "cbsa": 17900,
	      "naics": "53",
	      "actual": -0.13461,
	      "expected": 0.02357
	    },
	    {
	      "cbsa": 17900,
	      "naics": "54",
	      "actual": -0.10215,
	      "expected": 0.0748
	    },
	    {
	      "cbsa": 17900,
	      "naics": "55",
	      "actual": 3.00894,
	      "expected": 0.08169
	    },
	    {
	      "cbsa": 17900,
	      "naics": "61",
	      "actual": -0.06243,
	      "expected": 0.0683
	    },
	    {
	      "cbsa": 17900,
	      "naics": "62",
	      "actual": -0.14964,
	      "expected": 0.12675
	    },
	    {
	      "cbsa": 17900,
	      "naics": "71",
	      "actual": -0.08039,
	      "expected": 0.08764
	    },
	    {
	      "cbsa": 17900,
	      "naics": "72",
	      "actual": -0.15068,
	      "expected": 0.08181
	    },
	    {
	      "cbsa": 17900,
	      "naics": "81",
	      "actual": 0.2359,
	      "expected": 0.08296
	    }
	  ],
	  "18140": [
	    {
	      "cbsa": 18140,
	      "naics": "00",
	      "actual": 0.30288,
	      "expected": 0.27591
	    },
	    {
	      "cbsa": 18140,
	      "naics": "22",
	      "actual": 0.22469,
	      "expected": 0.03385
	    },
	    {
	      "cbsa": 18140,
	      "naics": "23",
	      "actual": 0.23733,
	      "expected": 0.12354
	    },
	    {
	      "cbsa": 18140,
	      "naics": "31",
	      "actual": -0.21076,
	      "expected": 0.02308
	    },
	    {
	      "cbsa": 18140,
	      "naics": "42",
	      "actual": -0.16119,
	      "expected": 0.1272
	    },
	    {
	      "cbsa": 18140,
	      "naics": "44",
	      "actual": -0.02832,
	      "expected": 0.12263
	    },
	    {
	      "cbsa": 18140,
	      "naics": "48",
	      "actual": -0.04336,
	      "expected": 0.15761
	    },
	    {
	      "cbsa": 18140,
	      "naics": "51",
	      "actual": 0.12897,
	      "expected": 0.19706
	    },
	    {
	      "cbsa": 18140,
	      "naics": "52",
	      "actual": 0.82312,
	      "expected": 0.22122
	    },
	    {
	      "cbsa": 18140,
	      "naics": "53",
	      "actual": 0.42621,
	      "expected": 0.21241
	    },
	    {
	      "cbsa": 18140,
	      "naics": "54",
	      "actual": 0.04417,
	      "expected": 0.22594
	    },
	    {
	      "cbsa": 18140,
	      "naics": "55",
	      "actual": 0.00425,
	      "expected": 0.21754
	    },
	    {
	      "cbsa": 18140,
	      "naics": "61",
	      "actual": 0.05126,
	      "expected": 0.11222
	    },
	    {
	      "cbsa": 18140,
	      "naics": "62",
	      "actual": 0.37604,
	      "expected": 0.21362
	    },
	    {
	      "cbsa": 18140,
	      "naics": "71",
	      "actual": 0.4681,
	      "expected": 0.19379
	    },
	    {
	      "cbsa": 18140,
	      "naics": "72",
	      "actual": 0.12088,
	      "expected": 0.17505
	    },
	    {
	      "cbsa": 18140,
	      "naics": "81",
	      "actual": 0.1608,
	      "expected": 0.20553
	    }
	  ],
	  "19100": [
	    {
	      "cbsa": 19100,
	      "naics": "00",
	      "actual": 0.01006,
	      "expected": 0.27934
	    },
	    {
	      "cbsa": 19100,
	      "naics": "22",
	      "actual": -0.44612,
	      "expected": 0.05471
	    },
	    {
	      "cbsa": 19100,
	      "naics": "23",
	      "actual": 0.2577,
	      "expected": 0.28395
	    },
	    {
	      "cbsa": 19100,
	      "naics": "31",
	      "actual": -0.20233,
	      "expected": 0.20443
	    },
	    {
	      "cbsa": 19100,
	      "naics": "42",
	      "actual": 0.25446,
	      "expected": 0.24485
	    },
	    {
	      "cbsa": 19100,
	      "naics": "44",
	      "actual": 0.05118,
	      "expected": 0.26274
	    },
	    {
	      "cbsa": 19100,
	      "naics": "48",
	      "actual": -0.16929,
	      "expected": 0.18319
	    },
	    {
	      "cbsa": 19100,
	      "naics": "51",
	      "actual": 0.11693,
	      "expected": 0.22308
	    },
	    {
	      "cbsa": 19100,
	      "naics": "52",
	      "actual": -0.02609,
	      "expected": 0.25394
	    },
	    {
	      "cbsa": 19100,
	      "naics": "53",
	      "actual": 0.22941,
	      "expected": 0.2943
	    },
	    {
	      "cbsa": 19100,
	      "naics": "54",
	      "actual": 0.04963,
	      "expected": 0.25339
	    },
	    {
	      "cbsa": 19100,
	      "naics": "55",
	      "actual": 0.24291,
	      "expected": 0.37159
	    },
	    {
	      "cbsa": 19100,
	      "naics": "61",
	      "actual": 0.00115,
	      "expected": 0.36006
	    },
	    {
	      "cbsa": 19100,
	      "naics": "62",
	      "actual": -0.06996,
	      "expected": 0.32217
	    },
	    {
	      "cbsa": 19100,
	      "naics": "71",
	      "actual": 0.27468,
	      "expected": 0.31705
	    },
	    {
	      "cbsa": 19100,
	      "naics": "72",
	      "actual": 0.00632,
	      "expected": 0.27659
	    },
	    {
	      "cbsa": 19100,
	      "naics": "81",
	      "actual": -0.06966,
	      "expected": 0.25799
	    }
	  ],
	  "19380": [
	    {
	      "cbsa": 19380,
	      "naics": "00",
	      "actual": -0.08979,
	      "expected": 0.04299
	    },
	    {
	      "cbsa": 19380,
	      "naics": "22",
	      "actual": -0.58765,
	      "expected": 0.01848
	    },
	    {
	      "cbsa": 19380,
	      "naics": "23",
	      "actual": -0.21623,
	      "expected": -0.0903
	    },
	    {
	      "cbsa": 19380,
	      "naics": "31",
	      "actual": -0.30225,
	      "expected": -0.11109
	    },
	    {
	      "cbsa": 19380,
	      "naics": "42",
	      "actual": -0.22739,
	      "expected": -0.05378
	    },
	    {
	      "cbsa": 19380,
	      "naics": "44",
	      "actual": -0.03782,
	      "expected": -0.00764
	    },
	    {
	      "cbsa": 19380,
	      "naics": "48",
	      "actual": -0.53328,
	      "expected": -0.07512
	    },
	    {
	      "cbsa": 19380,
	      "naics": "51",
	      "actual": -0.08706,
	      "expected": 0.0177
	    },
	    {
	      "cbsa": 19380,
	      "naics": "52",
	      "actual": 0.02267,
	      "expected": -0.0195
	    },
	    {
	      "cbsa": 19380,
	      "naics": "53",
	      "actual": -0.26351,
	      "expected": -0.00808
	    },
	    {
	      "cbsa": 19380,
	      "naics": "54",
	      "actual": -0.2114,
	      "expected": 0.01455
	    },
	    {
	      "cbsa": 19380,
	      "naics": "55",
	      "actual": -0.54696,
	      "expected": 0.03581
	    },
	    {
	      "cbsa": 19380,
	      "naics": "61",
	      "actual": 4.06724,
	      "expected": 0.10289
	    },
	    {
	      "cbsa": 19380,
	      "naics": "62",
	      "actual": -0.203,
	      "expected": 0.06082
	    },
	    {
	      "cbsa": 19380,
	      "naics": "71",
	      "actual": -0.07807,
	      "expected": 0.01138
	    },
	    {
	      "cbsa": 19380,
	      "naics": "72",
	      "actual": -0.09068,
	      "expected": -0.00536
	    },
	    {
	      "cbsa": 19380,
	      "naics": "81",
	      "actual": -0.29057,
	      "expected": -0.00176
	    }
	  ],
	  "19660": [
	    {
	      "cbsa": 19660,
	      "naics": "00",
	      "actual": -0.00021,
	      "expected": 0.16707
	    },
	    {
	      "cbsa": 19660,
	      "naics": "22",
	      "actual": 1.38884,
	      "expected": 0.4041
	    },
	    {
	      "cbsa": 19660,
	      "naics": "23",
	      "actual": -0.07718,
	      "expected": 0.10971
	    },
	    {
	      "cbsa": 19660,
	      "naics": "31",
	      "actual": -0.04446,
	      "expected": 0.15998
	    },
	    {
	      "cbsa": 19660,
	      "naics": "42",
	      "actual": 0.0238,
	      "expected": 0.10322
	    },
	    {
	      "cbsa": 19660,
	      "naics": "44",
	      "actual": -0.19054,
	      "expected": 0.10934
	    },
	    {
	      "cbsa": 19660,
	      "naics": "48",
	      "actual": -0.06938,
	      "expected": 0.16185
	    },
	    {
	      "cbsa": 19660,
	      "naics": "51",
	      "actual": -0.36417,
	      "expected": -0.07195
	    },
	    {
	      "cbsa": 19660,
	      "naics": "52",
	      "actual": 0.02355,
	      "expected": 0.10904
	    },
	    {
	      "cbsa": 19660,
	      "naics": "53",
	      "actual": -0.25273,
	      "expected": 0.06211
	    },
	    {
	      "cbsa": 19660,
	      "naics": "54",
	      "actual": -0.0633,
	      "expected": 0.11952
	    },
	    {
	      "cbsa": 19660,
	      "naics": "55",
	      "actual": 0.06728,
	      "expected": 0.16032
	    },
	    {
	      "cbsa": 19660,
	      "naics": "61",
	      "actual": 0.28948,
	      "expected": 0.06007
	    },
	    {
	      "cbsa": 19660,
	      "naics": "62",
	      "actual": 0.21443,
	      "expected": 0.24739
	    },
	    {
	      "cbsa": 19660,
	      "naics": "71",
	      "actual": -0.10034,
	      "expected": 0.11052
	    },
	    {
	      "cbsa": 19660,
	      "naics": "72",
	      "actual": -0.18996,
	      "expected": 0.0513
	    },
	    {
	      "cbsa": 19660,
	      "naics": "81",
	      "actual": -0.19752,
	      "expected": 0.07045
	    }
	  ],
	  "19740": [
	    {
	      "cbsa": 19740,
	      "naics": "00",
	      "actual": 0.10759,
	      "expected": 0.29281
	    },
	    {
	      "cbsa": 19740,
	      "naics": "22",
	      "actual": 0.69431,
	      "expected": -0.22812
	    },
	    {
	      "cbsa": 19740,
	      "naics": "23",
	      "actual": 0.13015,
	      "expected": 0.21761
	    },
	    {
	      "cbsa": 19740,
	      "naics": "31",
	      "actual": -0.02912,
	      "expected": 0.14408
	    },
	    {
	      "cbsa": 19740,
	      "naics": "42",
	      "actual": 0.27575,
	      "expected": 0.20006
	    },
	    {
	      "cbsa": 19740,
	      "naics": "44",
	      "actual": 0.05351,
	      "expected": 0.21137
	    },
	    {
	      "cbsa": 19740,
	      "naics": "48",
	      "actual": -0.22067,
	      "expected": 0.10909
	    },
	    {
	      "cbsa": 19740,
	      "naics": "51",
	      "actual": -0.30002,
	      "expected": 0.26071
	    },
	    {
	      "cbsa": 19740,
	      "naics": "52",
	      "actual": 0.00924,
	      "expected": 0.23328
	    },
	    {
	      "cbsa": 19740,
	      "naics": "53",
	      "actual": 0.42327,
	      "expected": 0.24343
	    },
	    {
	      "cbsa": 19740,
	      "naics": "54",
	      "actual": 0.01176,
	      "expected": 0.23481
	    },
	    {
	      "cbsa": 19740,
	      "naics": "55",
	      "actual": 0.53427,
	      "expected": 0.37588
	    },
	    {
	      "cbsa": 19740,
	      "naics": "61",
	      "actual": 0.09635,
	      "expected": -0.01544
	    },
	    {
	      "cbsa": 19740,
	      "naics": "62",
	      "actual": -0.06511,
	      "expected": 0.25793
	    },
	    {
	      "cbsa": 19740,
	      "naics": "71",
	      "actual": 0.37314,
	      "expected": 0.20487
	    },
	    {
	      "cbsa": 19740,
	      "naics": "72",
	      "actual": 0.10182,
	      "expected": 0.23955
	    },
	    {
	      "cbsa": 19740,
	      "naics": "81",
	      "actual": 0.19238,
	      "expected": 0.26245
	    }
	  ],
	  "19780": [
	    {
	      "cbsa": 19780,
	      "naics": "00",
	      "actual": -0.15818,
	      "expected": 0.16352
	    },
	    {
	      "cbsa": 19780,
	      "naics": "22",
	      "actual": -0.38562,
	      "expected": 0.13799
	    },
	    {
	      "cbsa": 19780,
	      "naics": "23",
	      "actual": -0.11716,
	      "expected": 0.13966
	    },
	    {
	      "cbsa": 19780,
	      "naics": "31",
	      "actual": -0.36687,
	      "expected": 0.05395
	    },
	    {
	      "cbsa": 19780,
	      "naics": "42",
	      "actual": -0.14253,
	      "expected": 0.21034
	    },
	    {
	      "cbsa": 19780,
	      "naics": "44",
	      "actual": -0.15491,
	      "expected": 0.14916
	    },
	    {
	      "cbsa": 19780,
	      "naics": "48",
	      "actual": -0.30776,
	      "expected": 0.1422
	    },
	    {
	      "cbsa": 19780,
	      "naics": "51",
	      "actual": -0.04068,
	      "expected": 0.18209
	    },
	    {
	      "cbsa": 19780,
	      "naics": "52",
	      "actual": -0.20807,
	      "expected": 0.15237
	    },
	    {
	      "cbsa": 19780,
	      "naics": "53",
	      "actual": -0.30837,
	      "expected": 0.15919
	    },
	    {
	      "cbsa": 19780,
	      "naics": "54",
	      "actual": -0.29022,
	      "expected": 0.09855
	    },
	    {
	      "cbsa": 19780,
	      "naics": "55",
	      "actual": 0.77783,
	      "expected": 0.61854
	    },
	    {
	      "cbsa": 19780,
	      "naics": "61",
	      "actual": -0.02187,
	      "expected": 0.27295
	    },
	    {
	      "cbsa": 19780,
	      "naics": "62",
	      "actual": 0.01385,
	      "expected": 0.22838
	    },
	    {
	      "cbsa": 19780,
	      "naics": "71",
	      "actual": 0.13513,
	      "expected": 0.12175
	    },
	    {
	      "cbsa": 19780,
	      "naics": "72",
	      "actual": -0.08964,
	      "expected": 0.15095
	    },
	    {
	      "cbsa": 19780,
	      "naics": "81",
	      "actual": -0.17299,
	      "expected": 0.17314
	    }
	  ],
	  "19820": [
	    {
	      "cbsa": 19820,
	      "naics": "00",
	      "actual": 0.02204,
	      "expected": 0.04267
	    },
	    {
	      "cbsa": 19820,
	      "naics": "22",
	      "actual": 2.83737,
	      "expected": -0.20241
	    },
	    {
	      "cbsa": 19820,
	      "naics": "23",
	      "actual": -0.27373,
	      "expected": -0.0666
	    },
	    {
	      "cbsa": 19820,
	      "naics": "31",
	      "actual": -0.37808,
	      "expected": -0.16347
	    },
	    {
	      "cbsa": 19820,
	      "naics": "42",
	      "actual": -0.16571,
	      "expected": -0.02059
	    },
	    {
	      "cbsa": 19820,
	      "naics": "44",
	      "actual": -0.25259,
	      "expected": -0.01746
	    },
	    {
	      "cbsa": 19820,
	      "naics": "48",
	      "actual": -0.13697,
	      "expected": -0.05802
	    },
	    {
	      "cbsa": 19820,
	      "naics": "51",
	      "actual": -0.81177,
	      "expected": 0.09519
	    },
	    {
	      "cbsa": 19820,
	      "naics": "52",
	      "actual": 0.30144,
	      "expected": 0.0031
	    },
	    {
	      "cbsa": 19820,
	      "naics": "53",
	      "actual": -0.14478,
	      "expected": 0.00267
	    },
	    {
	      "cbsa": 19820,
	      "naics": "54",
	      "actual": 0.11408,
	      "expected": -0.01049
	    },
	    {
	      "cbsa": 19820,
	      "naics": "55",
	      "actual": 3.46795,
	      "expected": 0.03708
	    },
	    {
	      "cbsa": 19820,
	      "naics": "61",
	      "actual": -0.50851,
	      "expected": -0.08496
	    },
	    {
	      "cbsa": 19820,
	      "naics": "62",
	      "actual": -0.14146,
	      "expected": 0.03842
	    },
	    {
	      "cbsa": 19820,
	      "naics": "71",
	      "actual": -0.16376,
	      "expected": -0.19248
	    },
	    {
	      "cbsa": 19820,
	      "naics": "72",
	      "actual": 0.08247,
	      "expected": 0.00997
	    },
	    {
	      "cbsa": 19820,
	      "naics": "81",
	      "actual": -0.48342,
	      "expected": -0.0363
	    }
	  ],
	  "21340": [
	    {
	      "cbsa": 21340,
	      "naics": "00",
	      "actual": -0.13147,
	      "expected": 0.1744
	    },
	    {
	      "cbsa": 21340,
	      "naics": "22",
	      "actual": -0.16353,
	      "expected": 0.07052
	    },
	    {
	      "cbsa": 21340,
	      "naics": "23",
	      "actual": -0.06002,
	      "expected": 0.14647
	    },
	    {
	      "cbsa": 21340,
	      "naics": "31",
	      "actual": 0.02313,
	      "expected": -0.06785
	    },
	    {
	      "cbsa": 21340,
	      "naics": "42",
	      "actual": -0.16591,
	      "expected": 0.05952
	    },
	    {
	      "cbsa": 21340,
	      "naics": "44",
	      "actual": -0.23024,
	      "expected": 0.11621
	    },
	    {
	      "cbsa": 21340,
	      "naics": "48",
	      "actual": -0.3446,
	      "expected": 0.07631
	    },
	    {
	      "cbsa": 21340,
	      "naics": "51",
	      "actual": -0.19286,
	      "expected": 0.09967
	    },
	    {
	      "cbsa": 21340,
	      "naics": "52",
	      "actual": -0.24559,
	      "expected": 0.15494
	    },
	    {
	      "cbsa": 21340,
	      "naics": "53",
	      "actual": 0.11438,
	      "expected": 0.13579
	    },
	    {
	      "cbsa": 21340,
	      "naics": "54",
	      "actual": -0.0996,
	      "expected": 0.10076
	    },
	    {
	      "cbsa": 21340,
	      "naics": "55",
	      "actual": -0.14752,
	      "expected": -0.13682
	    },
	    {
	      "cbsa": 21340,
	      "naics": "61",
	      "actual": 0.00251,
	      "expected": 0.13224
	    },
	    {
	      "cbsa": 21340,
	      "naics": "62",
	      "actual": -0.1355,
	      "expected": 0.19208
	    },
	    {
	      "cbsa": 21340,
	      "naics": "71",
	      "actual": 0.29897,
	      "expected": 0.12736
	    },
	    {
	      "cbsa": 21340,
	      "naics": "72",
	      "actual": -0.13652,
	      "expected": 0.11828
	    },
	    {
	      "cbsa": 21340,
	      "naics": "81",
	      "actual": -0.11419,
	      "expected": 0.13609
	    }
	  ],
	  "23420": [
	    {
	      "cbsa": 23420,
	      "naics": "00",
	      "actual": 0.3513,
	      "expected": 0.22582
	    },
	    {
	      "cbsa": 23420,
	      "naics": "22",
	      "actual": 0.32764,
	      "expected": 0.3392
	    },
	    {
	      "cbsa": 23420,
	      "naics": "23",
	      "actual": 0.03205,
	      "expected": 0.06358
	    },
	    {
	      "cbsa": 23420,
	      "naics": "31",
	      "actual": -0.18772,
	      "expected": 0.04684
	    },
	    {
	      "cbsa": 23420,
	      "naics": "42",
	      "actual": -0.09967,
	      "expected": 0.09621
	    },
	    {
	      "cbsa": 23420,
	      "naics": "44",
	      "actual": 0.01292,
	      "expected": 0.1246
	    },
	    {
	      "cbsa": 23420,
	      "naics": "48",
	      "actual": -0.13612,
	      "expected": 0.13032
	    },
	    {
	      "cbsa": 23420,
	      "naics": "51",
	      "actual": -0.15706,
	      "expected": 0.1221
	    },
	    {
	      "cbsa": 23420,
	      "naics": "52",
	      "actual": -0.19295,
	      "expected": 0.15847
	    },
	    {
	      "cbsa": 23420,
	      "naics": "53",
	      "actual": -0.02972,
	      "expected": 0.1997
	    },
	    {
	      "cbsa": 23420,
	      "naics": "54",
	      "actual": -0.00924,
	      "expected": 0.13642
	    },
	    {
	      "cbsa": 23420,
	      "naics": "55",
	      "actual": 0.08528,
	      "expected": 0.32438
	    },
	    {
	      "cbsa": 23420,
	      "naics": "61",
	      "actual": -0.07154,
	      "expected": 0.25558
	    },
	    {
	      "cbsa": 23420,
	      "naics": "62",
	      "actual": 0.27771,
	      "expected": 0.14769
	    },
	    {
	      "cbsa": 23420,
	      "naics": "71",
	      "actual": 0.09513,
	      "expected": 0.15722
	    },
	    {
	      "cbsa": 23420,
	      "naics": "72",
	      "actual": 0.17683,
	      "expected": 0.17266
	    },
	    {
	      "cbsa": 23420,
	      "naics": "81",
	      "actual": -0.2397,
	      "expected": 0.34821
	    }
	  ],
	  "24340": [
	    {
	      "cbsa": 24340,
	      "naics": "00",
	      "actual": -0.2791,
	      "expected": 0.12368
	    },
	    {
	      "cbsa": 24340,
	      "naics": "22",
	      "actual": -0.54574,
	      "expected": 0.07729
	    },
	    {
	      "cbsa": 24340,
	      "naics": "23",
	      "actual": -0.25604,
	      "expected": -0.01947
	    },
	    {
	      "cbsa": 24340,
	      "naics": "31",
	      "actual": -0.64307,
	      "expected": 0.01236
	    },
	    {
	      "cbsa": 24340,
	      "naics": "42",
	      "actual": -0.36446,
	      "expected": 0.03776
	    },
	    {
	      "cbsa": 24340,
	      "naics": "44",
	      "actual": -0.37514,
	      "expected": 0.04691
	    },
	    {
	      "cbsa": 24340,
	      "naics": "48",
	      "actual": -0.44826,
	      "expected": -0.01725
	    },
	    {
	      "cbsa": 24340,
	      "naics": "51",
	      "actual": -0.56086,
	      "expected": 0.116
	    },
	    {
	      "cbsa": 24340,
	      "naics": "52",
	      "actual": -0.41459,
	      "expected": 0.04554
	    },
	    {
	      "cbsa": 24340,
	      "naics": "53",
	      "actual": 0.10403,
	      "expected": 0.09109
	    },
	    {
	      "cbsa": 24340,
	      "naics": "54",
	      "actual": -0.12666,
	      "expected": 0.09086
	    },
	    {
	      "cbsa": 24340,
	      "naics": "55",
	      "actual": -0.6759,
	      "expected": -0.29175
	    },
	    {
	      "cbsa": 24340,
	      "naics": "61",
	      "actual": -0.48549,
	      "expected": 0.00507
	    },
	    {
	      "cbsa": 24340,
	      "naics": "62",
	      "actual": -0.16712,
	      "expected": 0.09282
	    },
	    {
	      "cbsa": 24340,
	      "naics": "71",
	      "actual": -0.25798,
	      "expected": 0.08166
	    },
	    {
	      "cbsa": 24340,
	      "naics": "72",
	      "actual": -0.00875,
	      "expected": 0.06997
	    },
	    {
	      "cbsa": 24340,
	      "naics": "81",
	      "actual": -0.56528,
	      "expected": -0.00415
	    }
	  ],
	  "24660": [
	    {
	      "cbsa": 24660,
	      "naics": "00",
	      "actual": 0.00282,
	      "expected": 0.11027
	    },
	    {
	      "cbsa": 24660,
	      "naics": "22",
	      "actual": 0.11306,
	      "expected": -0.09306
	    },
	    {
	      "cbsa": 24660,
	      "naics": "23",
	      "actual": -0.11278,
	      "expected": -0.03286
	    },
	    {
	      "cbsa": 24660,
	      "naics": "31",
	      "actual": -0.16744,
	      "expected": -0.05957
	    },
	    {
	      "cbsa": 24660,
	      "naics": "42",
	      "actual": -0.56191,
	      "expected": 0.12553
	    },
	    {
	      "cbsa": 24660,
	      "naics": "44",
	      "actual": -0.05874,
	      "expected": 0.04046
	    },
	    {
	      "cbsa": 24660,
	      "naics": "48",
	      "actual": 0.05102,
	      "expected": -0.01676
	    },
	    {
	      "cbsa": 24660,
	      "naics": "51",
	      "actual": -0.32597,
	      "expected": 0.06391
	    },
	    {
	      "cbsa": 24660,
	      "naics": "52",
	      "actual": 0.45599,
	      "expected": 0.11377
	    },
	    {
	      "cbsa": 24660,
	      "naics": "53",
	      "actual": -0.14129,
	      "expected": 0.04681
	    },
	    {
	      "cbsa": 24660,
	      "naics": "54",
	      "actual": -0.09306,
	      "expected": 0.05595
	    },
	    {
	      "cbsa": 24660,
	      "naics": "55",
	      "actual": 0.0014,
	      "expected": 0.05792
	    },
	    {
	      "cbsa": 24660,
	      "naics": "61",
	      "actual": 0.4891,
	      "expected": 0.11956
	    },
	    {
	      "cbsa": 24660,
	      "naics": "62",
	      "actual": 0.21292,
	      "expected": 0.18231
	    },
	    {
	      "cbsa": 24660,
	      "naics": "71",
	      "actual": 0.0072,
	      "expected": 0.05501
	    },
	    {
	      "cbsa": 24660,
	      "naics": "72",
	      "actual": -0.0046,
	      "expected": 0.05771
	    },
	    {
	      "cbsa": 24660,
	      "naics": "81",
	      "actual": -0.14683,
	      "expected": 0.02529
	    }
	  ],
	  "24860": [
	    {
	      "cbsa": 24860,
	      "naics": "00",
	      "actual": 0.23806,
	      "expected": 0.16885
	    },
	    {
	      "cbsa": 24860,
	      "naics": "22",
	      "actual": -0.30022,
	      "expected": 0.15223
	    },
	    {
	      "cbsa": 24860,
	      "naics": "23",
	      "actual": 0.53734,
	      "expected": 0.13632
	    },
	    {
	      "cbsa": 24860,
	      "naics": "31",
	      "actual": -0.00839,
	      "expected": 0.01177
	    },
	    {
	      "cbsa": 24860,
	      "naics": "42",
	      "actual": 0.20192,
	      "expected": 0.09167
	    },
	    {
	      "cbsa": 24860,
	      "naics": "44",
	      "actual": -0.06866,
	      "expected": 0.1097
	    },
	    {
	      "cbsa": 24860,
	      "naics": "48",
	      "actual": -0.00614,
	      "expected": 0.03316
	    },
	    {
	      "cbsa": 24860,
	      "naics": "51",
	      "actual": 0.19531,
	      "expected": 0.12902
	    },
	    {
	      "cbsa": 24860,
	      "naics": "52",
	      "actual": 0.00048,
	      "expected": 0.1116
	    },
	    {
	      "cbsa": 24860,
	      "naics": "53",
	      "actual": 0.47034,
	      "expected": 0.07436
	    },
	    {
	      "cbsa": 24860,
	      "naics": "54",
	      "actual": 0.25174,
	      "expected": 0.14389
	    },
	    {
	      "cbsa": 24860,
	      "naics": "55",
	      "actual": 0.21924,
	      "expected": 0.03828
	    },
	    {
	      "cbsa": 24860,
	      "naics": "61",
	      "actual": -0.04255,
	      "expected": 0.17563
	    },
	    {
	      "cbsa": 24860,
	      "naics": "62",
	      "actual": 0.6188,
	      "expected": 0.27506
	    },
	    {
	      "cbsa": 24860,
	      "naics": "71",
	      "actual": 0.14228,
	      "expected": 0.09366
	    },
	    {
	      "cbsa": 24860,
	      "naics": "72",
	      "actual": 0.37991,
	      "expected": 0.1374
	    },
	    {
	      "cbsa": 24860,
	      "naics": "81",
	      "actual": -0.0229,
	      "expected": 0.11685
	    }
	  ],
	  "25420": [
	    {
	      "cbsa": 25420,
	      "naics": "00",
	      "actual": 0.10415,
	      "expected": 0.24578
	    },
	    {
	      "cbsa": 25420,
	      "naics": "22",
	      "actual": -0.68149,
	      "expected": -0.23019
	    },
	    {
	      "cbsa": 25420,
	      "naics": "23",
	      "actual": -0.21188,
	      "expected": 0.14188
	    },
	    {
	      "cbsa": 25420,
	      "naics": "31",
	      "actual": -0.39244,
	      "expected": 0.01671
	    },
	    {
	      "cbsa": 25420,
	      "naics": "42",
	      "actual": -0.12517,
	      "expected": 0.18416
	    },
	    {
	      "cbsa": 25420,
	      "naics": "44",
	      "actual": -0.12508,
	      "expected": 0.17049
	    },
	    {
	      "cbsa": 25420,
	      "naics": "48",
	      "actual": -0.1447,
	      "expected": 0.08813
	    },
	    {
	      "cbsa": 25420,
	      "naics": "51",
	      "actual": 0.03732,
	      "expected": 0.24877
	    },
	    {
	      "cbsa": 25420,
	      "naics": "52",
	      "actual": -0.31469,
	      "expected": 0.09293
	    },
	    {
	      "cbsa": 25420,
	      "naics": "53",
	      "actual": -0.22761,
	      "expected": 0.3096
	    },
	    {
	      "cbsa": 25420,
	      "naics": "54",
	      "actual": 0.08029,
	      "expected": 0.2701
	    },
	    {
	      "cbsa": 25420,
	      "naics": "55",
	      "actual": 0.19688,
	      "expected": 0.10298
	    },
	    {
	      "cbsa": 25420,
	      "naics": "61",
	      "actual": -0.43841,
	      "expected": 0.09688
	    },
	    {
	      "cbsa": 25420,
	      "naics": "62",
	      "actual": 0.83737,
	      "expected": 0.30036
	    },
	    {
	      "cbsa": 25420,
	      "naics": "71",
	      "actual": -0.12401,
	      "expected": -0.20293
	    },
	    {
	      "cbsa": 25420,
	      "naics": "72",
	      "actual": 0.17623,
	      "expected": 0.25542
	    },
	    {
	      "cbsa": 25420,
	      "naics": "81",
	      "actual": -0.06754,
	      "expected": 0.20924
	    }
	  ],
	  "25540": [
	    {
	      "cbsa": 25540,
	      "naics": "00",
	      "actual": 0.18427,
	      "expected": 0.15767
	    },
	    {
	      "cbsa": 25540,
	      "naics": "22",
	      "actual": 0.40964,
	      "expected": -0.2498
	    },
	    {
	      "cbsa": 25540,
	      "naics": "23",
	      "actual": -0.25984,
	      "expected": 0.07545
	    },
	    {
	      "cbsa": 25540,
	      "naics": "31",
	      "actual": -0.61919,
	      "expected": -0.06069
	    },
	    {
	      "cbsa": 25540,
	      "naics": "42",
	      "actual": -0.32319,
	      "expected": 0.09198
	    },
	    {
	      "cbsa": 25540,
	      "naics": "44",
	      "actual": -0.03079,
	      "expected": 0.08694
	    },
	    {
	      "cbsa": 25540,
	      "naics": "48",
	      "actual": -0.22891,
	      "expected": 0.00874
	    },
	    {
	      "cbsa": 25540,
	      "naics": "51",
	      "actual": -0.29221,
	      "expected": 0.10269
	    },
	    {
	      "cbsa": 25540,
	      "naics": "52",
	      "actual": 0.74797,
	      "expected": 0.12043
	    },
	    {
	      "cbsa": 25540,
	      "naics": "53",
	      "actual": 0.44618,
	      "expected": 0.11916
	    },
	    {
	      "cbsa": 25540,
	      "naics": "54",
	      "actual": 0.19275,
	      "expected": 0.11218
	    },
	    {
	      "cbsa": 25540,
	      "naics": "55",
	      "actual": -0.61294,
	      "expected": 0.07508
	    },
	    {
	      "cbsa": 25540,
	      "naics": "61",
	      "actual": 0.14675,
	      "expected": 0.28028
	    },
	    {
	      "cbsa": 25540,
	      "naics": "62",
	      "actual": -0.15559,
	      "expected": 0.109
	    },
	    {
	      "cbsa": 25540,
	      "naics": "71",
	      "actual": -0.02159,
	      "expected": 0.11869
	    },
	    {
	      "cbsa": 25540,
	      "naics": "72",
	      "actual": 0.07312,
	      "expected": 0.11704
	    },
	    {
	      "cbsa": 25540,
	      "naics": "81",
	      "actual": 0.39532,
	      "expected": 0.12979
	    }
	  ],
	  "26420": [
	    {
	      "cbsa": 26420,
	      "naics": "00",
	      "actual": 0.15529,
	      "expected": 0.38216
	    },
	    {
	      "cbsa": 26420,
	      "naics": "22",
	      "actual": 0.28477,
	      "expected": 0.3281
	    },
	    {
	      "cbsa": 26420,
	      "naics": "23",
	      "actual": -0.21555,
	      "expected": 0.2804
	    },
	    {
	      "cbsa": 26420,
	      "naics": "31",
	      "actual": -0.02587,
	      "expected": 0.3072
	    },
	    {
	      "cbsa": 26420,
	      "naics": "42",
	      "actual": 0.0033,
	      "expected": 0.28871
	    },
	    {
	      "cbsa": 26420,
	      "naics": "44",
	      "actual": -0.01116,
	      "expected": 0.31837
	    },
	    {
	      "cbsa": 26420,
	      "naics": "48",
	      "actual": -0.07013,
	      "expected": 0.32112
	    },
	    {
	      "cbsa": 26420,
	      "naics": "51",
	      "actual": 0.24372,
	      "expected": 0.26676
	    },
	    {
	      "cbsa": 26420,
	      "naics": "52",
	      "actual": 0.19914,
	      "expected": 0.34376
	    },
	    {
	      "cbsa": 26420,
	      "naics": "53",
	      "actual": 0.14497,
	      "expected": 0.32782
	    },
	    {
	      "cbsa": 26420,
	      "naics": "54",
	      "actual": 0.16318,
	      "expected": 0.33599
	    },
	    {
	      "cbsa": 26420,
	      "naics": "55",
	      "actual": 1.20357,
	      "expected": 0.51483
	    },
	    {
	      "cbsa": 26420,
	      "naics": "61",
	      "actual": -0.07077,
	      "expected": 0.22048
	    },
	    {
	      "cbsa": 26420,
	      "naics": "62",
	      "actual": 0.10875,
	      "expected": 0.33165
	    },
	    {
	      "cbsa": 26420,
	      "naics": "71",
	      "actual": 0.30893,
	      "expected": 0.35041
	    },
	    {
	      "cbsa": 26420,
	      "naics": "72",
	      "actual": 0.06588,
	      "expected": 0.32258
	    },
	    {
	      "cbsa": 26420,
	      "naics": "81",
	      "actual": 0.09216,
	      "expected": 0.3267
	    }
	  ],
	  "26900": [
	    {
	      "cbsa": 26900,
	      "naics": "00",
	      "actual": 0.41505,
	      "expected": 0.13235
	    },
	    {
	      "cbsa": 26900,
	      "naics": "22",
	      "actual": -0.29039,
	      "expected": -0.0323
	    },
	    {
	      "cbsa": 26900,
	      "naics": "23",
	      "actual": -0.04057,
	      "expected": 0.07428
	    },
	    {
	      "cbsa": 26900,
	      "naics": "31",
	      "actual": 0.91158,
	      "expected": -0.01971
	    },
	    {
	      "cbsa": 26900,
	      "naics": "42",
	      "actual": -0.07234,
	      "expected": 0.09159
	    },
	    {
	      "cbsa": 26900,
	      "naics": "44",
	      "actual": -0.03717,
	      "expected": 0.11214
	    },
	    {
	      "cbsa": 26900,
	      "naics": "48",
	      "actual": 0.06687,
	      "expected": 0.12684
	    },
	    {
	      "cbsa": 26900,
	      "naics": "51",
	      "actual": 0.08824,
	      "expected": 0.13819
	    },
	    {
	      "cbsa": 26900,
	      "naics": "52",
	      "actual": 0.57031,
	      "expected": 0.15693
	    },
	    {
	      "cbsa": 26900,
	      "naics": "53",
	      "actual": 0.27567,
	      "expected": 0.13401
	    },
	    {
	      "cbsa": 26900,
	      "naics": "54",
	      "actual": 0.68039,
	      "expected": 0.1698
	    },
	    {
	      "cbsa": 26900,
	      "naics": "55",
	      "actual": 0.47047,
	      "expected": 0.19057
	    },
	    {
	      "cbsa": 26900,
	      "naics": "61",
	      "actual": 0.23563,
	      "expected": 0.35366
	    },
	    {
	      "cbsa": 26900,
	      "naics": "62",
	      "actual": 0.27403,
	      "expected": 0.01847
	    },
	    {
	      "cbsa": 26900,
	      "naics": "71",
	      "actual": 0.2602,
	      "expected": 0.13563
	    },
	    {
	      "cbsa": 26900,
	      "naics": "72",
	      "actual": 0.47003,
	      "expected": 0.16502
	    },
	    {
	      "cbsa": 26900,
	      "naics": "81",
	      "actual": 0.31561,
	      "expected": 0.14076
	    }
	  ],
	  "27140": [
	    {
	      "cbsa": 27140,
	      "naics": "00",
	      "actual": -0.10943,
	      "expected": 0.1604
	    },
	    {
	      "cbsa": 27140,
	      "naics": "22",
	      "actual": 2.16109,
	      "expected": 0.07222
	    },
	    {
	      "cbsa": 27140,
	      "naics": "23",
	      "actual": -0.03287,
	      "expected": 0.02556
	    },
	    {
	      "cbsa": 27140,
	      "naics": "31",
	      "actual": -0.04464,
	      "expected": -0.01978
	    },
	    {
	      "cbsa": 27140,
	      "naics": "42",
	      "actual": -0.2511,
	      "expected": 0.03815
	    },
	    {
	      "cbsa": 27140,
	      "naics": "44",
	      "actual": -0.21908,
	      "expected": 0.03418
	    },
	    {
	      "cbsa": 27140,
	      "naics": "48",
	      "actual": -0.71623,
	      "expected": -0.0671
	    },
	    {
	      "cbsa": 27140,
	      "naics": "51",
	      "actual": -0.19186,
	      "expected": 0.00345
	    },
	    {
	      "cbsa": 27140,
	      "naics": "52",
	      "actual": -0.0227,
	      "expected": 0.06768
	    },
	    {
	      "cbsa": 27140,
	      "naics": "53",
	      "actual": -0.29194,
	      "expected": 0.06854
	    },
	    {
	      "cbsa": 27140,
	      "naics": "54",
	      "actual": -0.24191,
	      "expected": 0.05691
	    },
	    {
	      "cbsa": 27140,
	      "naics": "55",
	      "actual": -0.21381,
	      "expected": 0.00954
	    },
	    {
	      "cbsa": 27140,
	      "naics": "61",
	      "actual": -0.01982,
	      "expected": 0.15987
	    },
	    {
	      "cbsa": 27140,
	      "naics": "62",
	      "actual": -0.07556,
	      "expected": 0.14397
	    },
	    {
	      "cbsa": 27140,
	      "naics": "71",
	      "actual": -0.32186,
	      "expected": 0.04192
	    },
	    {
	      "cbsa": 27140,
	      "naics": "72",
	      "actual": -0.24838,
	      "expected": 0.03541
	    },
	    {
	      "cbsa": 27140,
	      "naics": "81",
	      "actual": -0.22675,
	      "expected": 0.06666
	    }
	  ],
	  "27260": [
	    {
	      "cbsa": 27260,
	      "naics": "00",
	      "actual": 0.16981,
	      "expected": 0.20312
	    },
	    {
	      "cbsa": 27260,
	      "naics": "22",
	      "actual": -0.30811,
	      "expected": -0.02084
	    },
	    {
	      "cbsa": 27260,
	      "naics": "23",
	      "actual": -0.2063,
	      "expected": 0.10666
	    },
	    {
	      "cbsa": 27260,
	      "naics": "31",
	      "actual": -0.18002,
	      "expected": 0.04259
	    },
	    {
	      "cbsa": 27260,
	      "naics": "42",
	      "actual": -0.33553,
	      "expected": 0.05655
	    },
	    {
	      "cbsa": 27260,
	      "naics": "44",
	      "actual": -0.16265,
	      "expected": 0.06717
	    },
	    {
	      "cbsa": 27260,
	      "naics": "48",
	      "actual": -0.3723,
	      "expected": 0.04057
	    },
	    {
	      "cbsa": 27260,
	      "naics": "51",
	      "actual": -0.08631,
	      "expected": 0.03117
	    },
	    {
	      "cbsa": 27260,
	      "naics": "52",
	      "actual": 0.21664,
	      "expected": 0.13083
	    },
	    {
	      "cbsa": 27260,
	      "naics": "53",
	      "actual": -0.02611,
	      "expected": 0.06726
	    },
	    {
	      "cbsa": 27260,
	      "naics": "54",
	      "actual": -0.06052,
	      "expected": 0.10906
	    },
	    {
	      "cbsa": 27260,
	      "naics": "55",
	      "actual": -0.47191,
	      "expected": 0.1057
	    },
	    {
	      "cbsa": 27260,
	      "naics": "61",
	      "actual": -0.12282,
	      "expected": 0.07509
	    },
	    {
	      "cbsa": 27260,
	      "naics": "62",
	      "actual": 0.3813,
	      "expected": 0.2109
	    },
	    {
	      "cbsa": 27260,
	      "naics": "71",
	      "actual": -0.01845,
	      "expected": 0.04563
	    },
	    {
	      "cbsa": 27260,
	      "naics": "72",
	      "actual": 0.17576,
	      "expected": 0.12642
	    },
	    {
	      "cbsa": 27260,
	      "naics": "81",
	      "actual": -0.34112,
	      "expected": 0.10207
	    }
	  ],
	  "28140": [
	    {
	      "cbsa": 28140,
	      "naics": "00",
	      "actual": -0.00704,
	      "expected": 0.15346
	    },
	    {
	      "cbsa": 28140,
	      "naics": "22",
	      "actual": -0.07911,
	      "expected": 0.0876
	    },
	    {
	      "cbsa": 28140,
	      "naics": "23",
	      "actual": 0.11821,
	      "expected": 0.06742
	    },
	    {
	      "cbsa": 28140,
	      "naics": "31",
	      "actual": -0.04333,
	      "expected": 0.03227
	    },
	    {
	      "cbsa": 28140,
	      "naics": "42",
	      "actual": 0.0071,
	      "expected": 0.08468
	    },
	    {
	      "cbsa": 28140,
	      "naics": "44",
	      "actual": -0.05856,
	      "expected": 0.06022
	    },
	    {
	      "cbsa": 28140,
	      "naics": "48",
	      "actual": -0.04128,
	      "expected": 0.05091
	    },
	    {
	      "cbsa": 28140,
	      "naics": "51",
	      "actual": -0.15095,
	      "expected": -0.04551
	    },
	    {
	      "cbsa": 28140,
	      "naics": "52",
	      "actual": -0.16442,
	      "expected": 0.1342
	    },
	    {
	      "cbsa": 28140,
	      "naics": "53",
	      "actual": 0.09469,
	      "expected": 0.10584
	    },
	    {
	      "cbsa": 28140,
	      "naics": "54",
	      "actual": -0.19186,
	      "expected": 0.08318
	    },
	    {
	      "cbsa": 28140,
	      "naics": "55",
	      "actual": -0.10254,
	      "expected": 0.12857
	    },
	    {
	      "cbsa": 28140,
	      "naics": "61",
	      "actual": -0.05684,
	      "expected": 0.1301
	    },
	    {
	      "cbsa": 28140,
	      "naics": "62",
	      "actual": 0.27114,
	      "expected": 0.14939
	    },
	    {
	      "cbsa": 28140,
	      "naics": "71",
	      "actual": -0.05444,
	      "expected": 0.04689
	    },
	    {
	      "cbsa": 28140,
	      "naics": "72",
	      "actual": -0.03084,
	      "expected": 0.08466
	    },
	    {
	      "cbsa": 28140,
	      "naics": "81",
	      "actual": -0.21614,
	      "expected": 0.1294
	    }
	  ],
	  "28940": [
	    {
	      "cbsa": 28940,
	      "naics": "00",
	      "actual": -0.1163,
	      "expected": 0.13465
	    },
	    {
	      "cbsa": 28940,
	      "naics": "22",
	      "actual": -0.26531,
	      "expected": 1.50388
	    },
	    {
	      "cbsa": 28940,
	      "naics": "23",
	      "actual": -0.00609,
	      "expected": 0.04927
	    },
	    {
	      "cbsa": 28940,
	      "naics": "31",
	      "actual": -0.13659,
	      "expected": -0.03309
	    },
	    {
	      "cbsa": 28940,
	      "naics": "42",
	      "actual": -0.07357,
	      "expected": 0.08034
	    },
	    {
	      "cbsa": 28940,
	      "naics": "44",
	      "actual": 0.01913,
	      "expected": 0.07557
	    },
	    {
	      "cbsa": 28940,
	      "naics": "48",
	      "actual": -0.07206,
	      "expected": 0.02257
	    },
	    {
	      "cbsa": 28940,
	      "naics": "51",
	      "actual": -0.30219,
	      "expected": 0.118
	    },
	    {
	      "cbsa": 28940,
	      "naics": "52",
	      "actual": -0.08358,
	      "expected": 0.07473
	    },
	    {
	      "cbsa": 28940,
	      "naics": "53",
	      "actual": -0.14426,
	      "expected": 0.09038
	    },
	    {
	      "cbsa": 28940,
	      "naics": "54",
	      "actual": -0.19726,
	      "expected": 0.0784
	    },
	    {
	      "cbsa": 28940,
	      "naics": "55",
	      "actual": 0.00399,
	      "expected": 0.1482
	    },
	    {
	      "cbsa": 28940,
	      "naics": "61",
	      "actual": 0.12717,
	      "expected": 0.24512
	    },
	    {
	      "cbsa": 28940,
	      "naics": "62",
	      "actual": -0.27136,
	      "expected": 0.13499
	    },
	    {
	      "cbsa": 28940,
	      "naics": "71",
	      "actual": -0.25221,
	      "expected": 0.12748
	    },
	    {
	      "cbsa": 28940,
	      "naics": "72",
	      "actual": -0.00134,
	      "expected": 0.0887
	    },
	    {
	      "cbsa": 28940,
	      "naics": "81",
	      "actual": -0.47644,
	      "expected": 0.10072
	    }
	  ],
	  "29460": [
	    {
	      "cbsa": 29460,
	      "naics": "00",
	      "actual": -0.00888,
	      "expected": 0.20638
	    },
	    {
	      "cbsa": 29460,
	      "naics": "22",
	      "actual": -0.75487,
	      "expected": 0.03786
	    },
	    {
	      "cbsa": 29460,
	      "naics": "23",
	      "actual": 0.01059,
	      "expected": 0.19723
	    },
	    {
	      "cbsa": 29460,
	      "naics": "31",
	      "actual": -0.35481,
	      "expected": -0.02823
	    },
	    {
	      "cbsa": 29460,
	      "naics": "42",
	      "actual": 0.07763,
	      "expected": 0.12315
	    },
	    {
	      "cbsa": 29460,
	      "naics": "44",
	      "actual": -0.25113,
	      "expected": 0.0737
	    },
	    {
	      "cbsa": 29460,
	      "naics": "48",
	      "actual": -0.03909,
	      "expected": 0.07015
	    },
	    {
	      "cbsa": 29460,
	      "naics": "51",
	      "actual": 0.1057,
	      "expected": 0.08615
	    },
	    {
	      "cbsa": 29460,
	      "naics": "52",
	      "actual": 0.97298,
	      "expected": 0.22049
	    },
	    {
	      "cbsa": 29460,
	      "naics": "53",
	      "actual": 0.08906,
	      "expected": 0.19721
	    },
	    {
	      "cbsa": 29460,
	      "naics": "54",
	      "actual": -0.40495,
	      "expected": 0.19025
	    },
	    {
	      "cbsa": 29460,
	      "naics": "55",
	      "actual": -0.01962,
	      "expected": 0.25184
	    },
	    {
	      "cbsa": 29460,
	      "naics": "61",
	      "actual": 0.46207,
	      "expected": 0.39967
	    },
	    {
	      "cbsa": 29460,
	      "naics": "62",
	      "actual": 0.03847,
	      "expected": 0.21934
	    },
	    {
	      "cbsa": 29460,
	      "naics": "71",
	      "actual": -0.61573,
	      "expected": -0.33656
	    },
	    {
	      "cbsa": 29460,
	      "naics": "72",
	      "actual": -0.08919,
	      "expected": 0.15252
	    },
	    {
	      "cbsa": 29460,
	      "naics": "81",
	      "actual": -0.26886,
	      "expected": 0.20592
	    }
	  ],
	  "29820": [
	    {
	      "cbsa": 29820,
	      "naics": "00",
	      "actual": 0.34455,
	      "expected": 0.22364
	    },
	    {
	      "cbsa": 29820,
	      "naics": "22",
	      "actual": -0.11553,
	      "expected": 1.08313
	    },
	    {
	      "cbsa": 29820,
	      "naics": "23",
	      "actual": -0.23534,
	      "expected": 0.02318
	    },
	    {
	      "cbsa": 29820,
	      "naics": "31",
	      "actual": -0.21495,
	      "expected": 0.28245
	    },
	    {
	      "cbsa": 29820,
	      "naics": "42",
	      "actual": -0.25774,
	      "expected": 0.22662
	    },
	    {
	      "cbsa": 29820,
	      "naics": "44",
	      "actual": 0.33841,
	      "expected": 0.22707
	    },
	    {
	      "cbsa": 29820,
	      "naics": "48",
	      "actual": -0.23867,
	      "expected": 0.17472
	    },
	    {
	      "cbsa": 29820,
	      "naics": "51",
	      "actual": -0.23765,
	      "expected": 0.32996
	    },
	    {
	      "cbsa": 29820,
	      "naics": "52",
	      "actual": -0.10832,
	      "expected": 0.25099
	    },
	    {
	      "cbsa": 29820,
	      "naics": "53",
	      "actual": 0.37397,
	      "expected": 0.36138
	    },
	    {
	      "cbsa": 29820,
	      "naics": "54",
	      "actual": -0.14225,
	      "expected": 0.17466
	    },
	    {
	      "cbsa": 29820,
	      "naics": "55",
	      "actual": -0.04806,
	      "expected": 0.10537
	    },
	    {
	      "cbsa": 29820,
	      "naics": "61",
	      "actual": -0.04837,
	      "expected": 1.20743
	    },
	    {
	      "cbsa": 29820,
	      "naics": "62",
	      "actual": -0.18597,
	      "expected": 0.28854
	    },
	    {
	      "cbsa": 29820,
	      "naics": "71",
	      "actual": 0.4833,
	      "expected": 0.34719
	    },
	    {
	      "cbsa": 29820,
	      "naics": "72",
	      "actual": 0.48759,
	      "expected": 0.2215
	    },
	    {
	      "cbsa": 29820,
	      "naics": "81",
	      "actual": -0.05277,
	      "expected": 0.29405
	    }
	  ],
	  "30780": [
	    {
	      "cbsa": 30780,
	      "naics": "00",
	      "actual": -0.16346,
	      "expected": 0.11673
	    },
	    {
	      "cbsa": 30780,
	      "naics": "22",
	      "actual": -0.50644,
	      "expected": -0.04828
	    },
	    {
	      "cbsa": 30780,
	      "naics": "23",
	      "actual": -0.07356,
	      "expected": 0.06006
	    },
	    {
	      "cbsa": 30780,
	      "naics": "31",
	      "actual": -0.65901,
	      "expected": 0.20449
	    },
	    {
	      "cbsa": 30780,
	      "naics": "42",
	      "actual": -0.27373,
	      "expected": 0.05053
	    },
	    {
	      "cbsa": 30780,
	      "naics": "44",
	      "actual": -0.15733,
	      "expected": 0.0934
	    },
	    {
	      "cbsa": 30780,
	      "naics": "48",
	      "actual": -0.43769,
	      "expected": 0.23811
	    },
	    {
	      "cbsa": 30780,
	      "naics": "51",
	      "actual": -0.05275,
	      "expected": -0.05799
	    },
	    {
	      "cbsa": 30780,
	      "naics": "52",
	      "actual": -0.06322,
	      "expected": 0.07761
	    },
	    {
	      "cbsa": 30780,
	      "naics": "53",
	      "actual": -0.18045,
	      "expected": 0.07599
	    },
	    {
	      "cbsa": 30780,
	      "naics": "54",
	      "actual": -0.06847,
	      "expected": 0.07971
	    },
	    {
	      "cbsa": 30780,
	      "naics": "55",
	      "actual": -0.14378,
	      "expected": 0.07638
	    },
	    {
	      "cbsa": 30780,
	      "naics": "61",
	      "actual": -0.09647,
	      "expected": 0.01487
	    },
	    {
	      "cbsa": 30780,
	      "naics": "62",
	      "actual": -0.17834,
	      "expected": 0.16583
	    },
	    {
	      "cbsa": 30780,
	      "naics": "71",
	      "actual": 0.31576,
	      "expected": 0.12062
	    },
	    {
	      "cbsa": 30780,
	      "naics": "72",
	      "actual": -0.1014,
	      "expected": 0.09513
	    },
	    {
	      "cbsa": 30780,
	      "naics": "81",
	      "actual": -0.10595,
	      "expected": 0.07195
	    }
	  ],
	  "31080": [
	    {
	      "cbsa": 31080,
	      "naics": "00",
	      "actual": 0.14937,
	      "expected": 0.22626
	    },
	    {
	      "cbsa": 31080,
	      "naics": "22",
	      "actual": 0.25373,
	      "expected": 7.13125
	    },
	    {
	      "cbsa": 31080,
	      "naics": "23",
	      "actual": 0.02135,
	      "expected": 1.74056
	    },
	    {
	      "cbsa": 31080,
	      "naics": "31",
	      "actual": -0.10949,
	      "expected": 0.54369
	    },
	    {
	      "cbsa": 31080,
	      "naics": "42",
	      "actual": 0.04291,
	      "expected": 0.89284
	    },
	    {
	      "cbsa": 31080,
	      "naics": "44",
	      "actual": 0.0719,
	      "expected": 0.58913
	    },
	    {
	      "cbsa": 31080,
	      "naics": "48",
	      "actual": 0.3503,
	      "expected": 1.7598
	    },
	    {
	      "cbsa": 31080,
	      "naics": "51",
	      "actual": 0.50804,
	      "expected": 0.35449
	    },
	    {
	      "cbsa": 31080,
	      "naics": "52",
	      "actual": 0.04685,
	      "expected": 0.60373
	    },
	    {
	      "cbsa": 31080,
	      "naics": "53",
	      "actual": 0.22323,
	      "expected": 1.81906
	    },
	    {
	      "cbsa": 31080,
	      "naics": "54",
	      "actual": 0.02667,
	      "expected": 0.36429
	    },
	    {
	      "cbsa": 31080,
	      "naics": "55",
	      "actual": 0.20847,
	      "expected": 1.66788
	    },
	    {
	      "cbsa": 31080,
	      "naics": "61",
	      "actual": -0.19533,
	      "expected": 1.62596
	    },
	    {
	      "cbsa": 31080,
	      "naics": "62",
	      "actual": -0.14687,
	      "expected": 0.46441
	    },
	    {
	      "cbsa": 31080,
	      "naics": "71",
	      "actual": 0.16233,
	      "expected": 1.20196
	    },
	    {
	      "cbsa": 31080,
	      "naics": "72",
	      "actual": 0.13391,
	      "expected": 0.55025
	    },
	    {
	      "cbsa": 31080,
	      "naics": "81",
	      "actual": -0.11193,
	      "expected": 1.16555
	    }
	  ],
	  "31140": [
	    {
	      "cbsa": 31140,
	      "naics": "00",
	      "actual": -0.0272,
	      "expected": 0.13848
	    },
	    {
	      "cbsa": 31140,
	      "naics": "22",
	      "actual": 0.46397,
	      "expected": 0.52739
	    },
	    {
	      "cbsa": 31140,
	      "naics": "23",
	      "actual": 0.31618,
	      "expected": 0.09721
	    },
	    {
	      "cbsa": 31140,
	      "naics": "31",
	      "actual": -0.12315,
	      "expected": 0.06909
	    },
	    {
	      "cbsa": 31140,
	      "naics": "42",
	      "actual": -0.11415,
	      "expected": 0.10519
	    },
	    {
	      "cbsa": 31140,
	      "naics": "44",
	      "actual": -0.06579,
	      "expected": 0.09975
	    },
	    {
	      "cbsa": 31140,
	      "naics": "48",
	      "actual": -0.13922,
	      "expected": 0.10536
	    },
	    {
	      "cbsa": 31140,
	      "naics": "51",
	      "actual": 0.07108,
	      "expected": 0.09911
	    },
	    {
	      "cbsa": 31140,
	      "naics": "52",
	      "actual": 0.46608,
	      "expected": 0.14247
	    },
	    {
	      "cbsa": 31140,
	      "naics": "53",
	      "actual": 1.48842,
	      "expected": -0.02053
	    },
	    {
	      "cbsa": 31140,
	      "naics": "54",
	      "actual": -0.01583,
	      "expected": 0.11748
	    },
	    {
	      "cbsa": 31140,
	      "naics": "55",
	      "actual": -0.14457,
	      "expected": 0.12754
	    },
	    {
	      "cbsa": 31140,
	      "naics": "61",
	      "actual": -0.24717,
	      "expected": 0.12253
	    },
	    {
	      "cbsa": 31140,
	      "naics": "62",
	      "actual": -0.34626,
	      "expected": 0.12415
	    },
	    {
	      "cbsa": 31140,
	      "naics": "71",
	      "actual": 0.57076,
	      "expected": 0.18019
	    },
	    {
	      "cbsa": 31140,
	      "naics": "72",
	      "actual": 0.33517,
	      "expected": 0.14165
	    },
	    {
	      "cbsa": 31140,
	      "naics": "81",
	      "actual": -0.10552,
	      "expected": 0.12991
	    }
	  ],
	  "32580": [
	    {
	      "cbsa": 32580,
	      "naics": "00",
	      "actual": 0.00186,
	      "expected": 0.34509
	    },
	    {
	      "cbsa": 32580,
	      "naics": "22",
	      "actual": -0.60746,
	      "expected": -0.05619
	    },
	    {
	      "cbsa": 32580,
	      "naics": "23",
	      "actual": -0.16561,
	      "expected": 0.29278
	    },
	    {
	      "cbsa": 32580,
	      "naics": "31",
	      "actual": -0.32717,
	      "expected": 0.14811
	    },
	    {
	      "cbsa": 32580,
	      "naics": "42",
	      "actual": -0.21981,
	      "expected": 0.2109
	    },
	    {
	      "cbsa": 32580,
	      "naics": "44",
	      "actual": -0.06216,
	      "expected": 0.2714
	    },
	    {
	      "cbsa": 32580,
	      "naics": "48",
	      "actual": -0.09185,
	      "expected": 0.22146
	    },
	    {
	      "cbsa": 32580,
	      "naics": "51",
	      "actual": -0.224,
	      "expected": 0.33657
	    },
	    {
	      "cbsa": 32580,
	      "naics": "52",
	      "actual": -0.01092,
	      "expected": 0.25224
	    },
	    {
	      "cbsa": 32580,
	      "naics": "53",
	      "actual": -0.20608,
	      "expected": 0.19919
	    },
	    {
	      "cbsa": 32580,
	      "naics": "54",
	      "actual": -0.20418,
	      "expected": 0.22153
	    },
	    {
	      "cbsa": 32580,
	      "naics": "55",
	      "actual": 0.08768,
	      "expected": 0.16678
	    },
	    {
	      "cbsa": 32580,
	      "naics": "61",
	      "actual": -0.48353,
	      "expected": 0.03359
	    },
	    {
	      "cbsa": 32580,
	      "naics": "62",
	      "actual": 0.13402,
	      "expected": 0.35545
	    },
	    {
	      "cbsa": 32580,
	      "naics": "71",
	      "actual": 0.50132,
	      "expected": 0.20716
	    },
	    {
	      "cbsa": 32580,
	      "naics": "72",
	      "actual": -0.09713,
	      "expected": 0.26643
	    },
	    {
	      "cbsa": 32580,
	      "naics": "81",
	      "actual": -0.06772,
	      "expected": 0.24399
	    }
	  ],
	  "32820": [
	    {
	      "cbsa": 32820,
	      "naics": "00",
	      "actual": -0.04061,
	      "expected": 0.05402
	    },
	    {
	      "cbsa": 32820,
	      "naics": "22",
	      "actual": -0.4001,
	      "expected": 4.30398
	    },
	    {
	      "cbsa": 32820,
	      "naics": "23",
	      "actual": -0.19417,
	      "expected": 0.04515
	    },
	    {
	      "cbsa": 32820,
	      "naics": "31",
	      "actual": -0.16093,
	      "expected": -0.03522
	    },
	    {
	      "cbsa": 32820,
	      "naics": "42",
	      "actual": -0.25374,
	      "expected": 0.01551
	    },
	    {
	      "cbsa": 32820,
	      "naics": "44",
	      "actual": -0.35859,
	      "expected": -0.00959
	    },
	    {
	      "cbsa": 32820,
	      "naics": "48",
	      "actual": -0.22805,
	      "expected": -0.16903
	    },
	    {
	      "cbsa": 32820,
	      "naics": "51",
	      "actual": -0.17077,
	      "expected": 0.01024
	    },
	    {
	      "cbsa": 32820,
	      "naics": "52",
	      "actual": -0.05587,
	      "expected": -0.10611
	    },
	    {
	      "cbsa": 32820,
	      "naics": "53",
	      "actual": -0.16569,
	      "expected": -0.0008
	    },
	    {
	      "cbsa": 32820,
	      "naics": "54",
	      "actual": -0.11124,
	      "expected": -0.01328
	    },
	    {
	      "cbsa": 32820,
	      "naics": "55",
	      "actual": 0.32683,
	      "expected": 0.12694
	    },
	    {
	      "cbsa": 32820,
	      "naics": "61",
	      "actual": -0.36648,
	      "expected": 0.18681
	    },
	    {
	      "cbsa": 32820,
	      "naics": "62",
	      "actual": 0.1913,
	      "expected": 0.10127
	    },
	    {
	      "cbsa": 32820,
	      "naics": "71",
	      "actual": -0.16198,
	      "expected": 0.06425
	    },
	    {
	      "cbsa": 32820,
	      "naics": "72",
	      "actual": -0.23392,
	      "expected": 0.01317
	    },
	    {
	      "cbsa": 32820,
	      "naics": "81",
	      "actual": 0.02266,
	      "expected": 0.0332
	    }
	  ],
	  "33100": [
	    {
	      "cbsa": 33100,
	      "naics": "00",
	      "actual": 0.11156,
	      "expected": 0.1739
	    },
	    {
	      "cbsa": 33100,
	      "naics": "22",
	      "actual": -0.03124,
	      "expected": 0.35252
	    },
	    {
	      "cbsa": 33100,
	      "naics": "23",
	      "actual": -0.01886,
	      "expected": 0.12882
	    },
	    {
	      "cbsa": 33100,
	      "naics": "31",
	      "actual": -0.04598,
	      "expected": 0.09181
	    },
	    {
	      "cbsa": 33100,
	      "naics": "42",
	      "actual": 0.04844,
	      "expected": 0.14083
	    },
	    {
	      "cbsa": 33100,
	      "naics": "44",
	      "actual": 0.21146,
	      "expected": 0.17906
	    },
	    {
	      "cbsa": 33100,
	      "naics": "48",
	      "actual": -0.56042,
	      "expected": 0.04272
	    },
	    {
	      "cbsa": 33100,
	      "naics": "51",
	      "actual": -0.03714,
	      "expected": 0.12851
	    },
	    {
	      "cbsa": 33100,
	      "naics": "52",
	      "actual": 0.38554,
	      "expected": 0.1656
	    },
	    {
	      "cbsa": 33100,
	      "naics": "53",
	      "actual": 0.11348,
	      "expected": 0.13802
	    },
	    {
	      "cbsa": 33100,
	      "naics": "54",
	      "actual": 0.29623,
	      "expected": 0.1748
	    },
	    {
	      "cbsa": 33100,
	      "naics": "55",
	      "actual": 0.13382,
	      "expected": 0.15828
	    },
	    {
	      "cbsa": 33100,
	      "naics": "61",
	      "actual": 0.28273,
	      "expected": 0.18454
	    },
	    {
	      "cbsa": 33100,
	      "naics": "62",
	      "actual": 0.15504,
	      "expected": 0.15646
	    },
	    {
	      "cbsa": 33100,
	      "naics": "71",
	      "actual": 0.09939,
	      "expected": 0.20146
	    },
	    {
	      "cbsa": 33100,
	      "naics": "72",
	      "actual": 0.27139,
	      "expected": 0.20642
	    },
	    {
	      "cbsa": 33100,
	      "naics": "81",
	      "actual": 0.16759,
	      "expected": 0.16339
	    }
	  ],
	  "33460": [
	    {
	      "cbsa": 33460,
	      "naics": "00",
	      "actual": 0.08258,
	      "expected": 0.07547
	    },
	    {
	      "cbsa": 33460,
	      "naics": "22",
	      "actual": 0.37624,
	      "expected": -0.73016
	    },
	    {
	      "cbsa": 33460,
	      "naics": "23",
	      "actual": 0.67109,
	      "expected": 0.08327
	    },
	    {
	      "cbsa": 33460,
	      "naics": "31",
	      "actual": -0.20458,
	      "expected": 0.06888
	    },
	    {
	      "cbsa": 33460,
	      "naics": "42",
	      "actual": -0.29795,
	      "expected": 0.09876
	    },
	    {
	      "cbsa": 33460,
	      "naics": "44",
	      "actual": -0.48652,
	      "expected": 0.06105
	    },
	    {
	      "cbsa": 33460,
	      "naics": "48",
	      "actual": -0.06662,
	      "expected": -0.0214
	    },
	    {
	      "cbsa": 33460,
	      "naics": "51",
	      "actual": -0.1088,
	      "expected": -0.08528
	    },
	    {
	      "cbsa": 33460,
	      "naics": "52",
	      "actual": -0.07394,
	      "expected": 0.07344
	    },
	    {
	      "cbsa": 33460,
	      "naics": "53",
	      "actual": 0.3634,
	      "expected": -0.35175
	    },
	    {
	      "cbsa": 33460,
	      "naics": "54",
	      "actual": 0.21425,
	      "expected": 0.07582
	    },
	    {
	      "cbsa": 33460,
	      "naics": "55",
	      "actual": 1.31458,
	      "expected": 0.1393
	    },
	    {
	      "cbsa": 33460,
	      "naics": "61",
	      "actual": 0.05861,
	      "expected": 0.14271
	    },
	    {
	      "cbsa": 33460,
	      "naics": "62",
	      "actual": 0.01584,
	      "expected": 0.18948
	    },
	    {
	      "cbsa": 33460,
	      "naics": "71",
	      "actual": 0.20539,
	      "expected": 0.18193
	    },
	    {
	      "cbsa": 33460,
	      "naics": "72",
	      "actual": -0.0923,
	      "expected": 0.04423
	    },
	    {
	      "cbsa": 33460,
	      "naics": "81",
	      "actual": -0.34774,
	      "expected": 0.10924
	    }
	  ],
	  "34980": [
	    {
	      "cbsa": 34980,
	      "naics": "00",
	      "actual": 0.4176,
	      "expected": 0.24914
	    },
	    {
	      "cbsa": 34980,
	      "naics": "22",
	      "actual": 0.80666,
	      "expected": 0.52146
	    },
	    {
	      "cbsa": 34980,
	      "naics": "23",
	      "actual": 0.0004,
	      "expected": 0.19899
	    },
	    {
	      "cbsa": 34980,
	      "naics": "31",
	      "actual": 0.00665,
	      "expected": 0.07057
	    },
	    {
	      "cbsa": 34980,
	      "naics": "42",
	      "actual": 0.09426,
	      "expected": 0.21594
	    },
	    {
	      "cbsa": 34980,
	      "naics": "44",
	      "actual": 0.0562,
	      "expected": 0.19113
	    },
	    {
	      "cbsa": 34980,
	      "naics": "48",
	      "actual": 0.03717,
	      "expected": 0.14885
	    },
	    {
	      "cbsa": 34980,
	      "naics": "51",
	      "actual": 0.30864,
	      "expected": 0.21663
	    },
	    {
	      "cbsa": 34980,
	      "naics": "52",
	      "actual": 0.04434,
	      "expected": 0.23506
	    },
	    {
	      "cbsa": 34980,
	      "naics": "53",
	      "actual": -0.11125,
	      "expected": 0.20504
	    },
	    {
	      "cbsa": 34980,
	      "naics": "54",
	      "actual": 0.30534,
	      "expected": 0.21967
	    },
	    {
	      "cbsa": 34980,
	      "naics": "55",
	      "actual": 0.62865,
	      "expected": 0.23256
	    },
	    {
	      "cbsa": 34980,
	      "naics": "61",
	      "actual": -0.57298,
	      "expected": -0.20472
	    },
	    {
	      "cbsa": 34980,
	      "naics": "62",
	      "actual": 1.39717,
	      "expected": 0.5176
	    },
	    {
	      "cbsa": 34980,
	      "naics": "71",
	      "actual": 0.26942,
	      "expected": 0.28968
	    },
	    {
	      "cbsa": 34980,
	      "naics": "72",
	      "actual": 0.27316,
	      "expected": 0.23813
	    },
	    {
	      "cbsa": 34980,
	      "naics": "81",
	      "actual": 0.02699,
	      "expected": 0.20853
	    }
	  ],
	  "35300": [
	    {
	      "cbsa": 35300,
	      "naics": "00",
	      "actual": -0.32638,
	      "expected": 0.13851
	    },
	    {
	      "cbsa": 35300,
	      "naics": "22",
	      "actual": -0.09607,
	      "expected": 0.00004
	    },
	    {
	      "cbsa": 35300,
	      "naics": "23",
	      "actual": 0.21761,
	      "expected": 0.03825
	    },
	    {
	      "cbsa": 35300,
	      "naics": "31",
	      "actual": -0.13577,
	      "expected": -0.01205
	    },
	    {
	      "cbsa": 35300,
	      "naics": "42",
	      "actual": -0.10085,
	      "expected": -0.00343
	    },
	    {
	      "cbsa": 35300,
	      "naics": "44",
	      "actual": 0.07671,
	      "expected": 0.00826
	    },
	    {
	      "cbsa": 35300,
	      "naics": "48",
	      "actual": -0.01539,
	      "expected": 0.03934
	    },
	    {
	      "cbsa": 35300,
	      "naics": "51",
	      "actual": -0.38405,
	      "expected": 0.24041
	    },
	    {
	      "cbsa": 35300,
	      "naics": "52",
	      "actual": -0.01625,
	      "expected": -0.037
	    },
	    {
	      "cbsa": 35300,
	      "naics": "53",
	      "actual": -0.25787,
	      "expected": -0.01487
	    },
	    {
	      "cbsa": 35300,
	      "naics": "54",
	      "actual": 0.08415,
	      "expected": -0.00067
	    },
	    {
	      "cbsa": 35300,
	      "naics": "55",
	      "actual": -0.51529,
	      "expected": -0.04987
	    },
	    {
	      "cbsa": 35300,
	      "naics": "61",
	      "actual": -0.46785,
	      "expected": 0.05975
	    },
	    {
	      "cbsa": 35300,
	      "naics": "62",
	      "actual": 0.0738,
	      "expected": 0.08425
	    },
	    {
	      "cbsa": 35300,
	      "naics": "71",
	      "actual": 0.50949,
	      "expected": 0.00142
	    },
	    {
	      "cbsa": 35300,
	      "naics": "72",
	      "actual": -0.01742,
	      "expected": 0.00126
	    },
	    {
	      "cbsa": 35300,
	      "naics": "81",
	      "actual": -0.50576,
	      "expected": 0.00175
	    }
	  ],
	  "35380": [
	    {
	      "cbsa": 35380,
	      "naics": "00",
	      "actual": -0.19194,
	      "expected": -0.03408
	    },
	    {
	      "cbsa": 35380,
	      "naics": "22",
	      "actual": -0.64859,
	      "expected": -0.14782
	    },
	    {
	      "cbsa": 35380,
	      "naics": "23",
	      "actual": 0.00181,
	      "expected": -0.02729
	    },
	    {
	      "cbsa": 35380,
	      "naics": "31",
	      "actual": -0.30641,
	      "expected": -0.11065
	    },
	    {
	      "cbsa": 35380,
	      "naics": "42",
	      "actual": -0.26909,
	      "expected": -0.0428
	    },
	    {
	      "cbsa": 35380,
	      "naics": "44",
	      "actual": -0.12852,
	      "expected": -0.05247
	    },
	    {
	      "cbsa": 35380,
	      "naics": "48",
	      "actual": -0.24397,
	      "expected": -0.16272
	    },
	    {
	      "cbsa": 35380,
	      "naics": "51",
	      "actual": 0.19466,
	      "expected": -0.17462
	    },
	    {
	      "cbsa": 35380,
	      "naics": "52",
	      "actual": -0.22443,
	      "expected": -0.07564
	    },
	    {
	      "cbsa": 35380,
	      "naics": "53",
	      "actual": 0.02552,
	      "expected": -0.05391
	    },
	    {
	      "cbsa": 35380,
	      "naics": "54",
	      "actual": -0.0949,
	      "expected": -0.06046
	    },
	    {
	      "cbsa": 35380,
	      "naics": "55",
	      "actual": -0.37892,
	      "expected": -0.08367
	    },
	    {
	      "cbsa": 35380,
	      "naics": "61",
	      "actual": -0.60555,
	      "expected": -0.0927
	    },
	    {
	      "cbsa": 35380,
	      "naics": "62",
	      "actual": -0.08514,
	      "expected": -0.15506
	    },
	    {
	      "cbsa": 35380,
	      "naics": "71",
	      "actual": -0.53271,
	      "expected": -0.18308
	    },
	    {
	      "cbsa": 35380,
	      "naics": "72",
	      "actual": -0.20944,
	      "expected": -0.07905
	    },
	    {
	      "cbsa": 35380,
	      "naics": "81",
	      "actual": -0.13044,
	      "expected": -0.07369
	    }
	  ],
	  "35620": [
	    {
	      "cbsa": 35620,
	      "naics": "00",
	      "actual": 0.41943,
	      "expected": 0.1769
	    },
	    {
	      "cbsa": 35620,
	      "naics": "22",
	      "actual": 0.29714,
	      "expected": 0.14543
	    },
	    {
	      "cbsa": 35620,
	      "naics": "23",
	      "actual": 0.68802,
	      "expected": 0.16037
	    },
	    {
	      "cbsa": 35620,
	      "naics": "31",
	      "actual": 0.05045,
	      "expected": 0.12462
	    },
	    {
	      "cbsa": 35620,
	      "naics": "42",
	      "actual": 0.45212,
	      "expected": 0.11876
	    },
	    {
	      "cbsa": 35620,
	      "naics": "44",
	      "actual": 0.5453,
	      "expected": 0.15562
	    },
	    {
	      "cbsa": 35620,
	      "naics": "48",
	      "actual": -0.34552,
	      "expected": 0.06313
	    },
	    {
	      "cbsa": 35620,
	      "naics": "51",
	      "actual": 0.73346,
	      "expected": 0.15505
	    },
	    {
	      "cbsa": 35620,
	      "naics": "52",
	      "actual": 0.32659,
	      "expected": 0.12655
	    },
	    {
	      "cbsa": 35620,
	      "naics": "53",
	      "actual": 0.38782,
	      "expected": 0.14928
	    },
	    {
	      "cbsa": 35620,
	      "naics": "54",
	      "actual": 0.50136,
	      "expected": 0.1691
	    },
	    {
	      "cbsa": 35620,
	      "naics": "55",
	      "actual": 0.15621,
	      "expected": 0.10653
	    },
	    {
	      "cbsa": 35620,
	      "naics": "61",
	      "actual": 0.29129,
	      "expected": 0.2441
	    },
	    {
	      "cbsa": 35620,
	      "naics": "62",
	      "actual": 0.4403,
	      "expected": 0.18891
	    },
	    {
	      "cbsa": 35620,
	      "naics": "71",
	      "actual": 0.19823,
	      "expected": 0.14812
	    },
	    {
	      "cbsa": 35620,
	      "naics": "72",
	      "actual": 0.38353,
	      "expected": 0.18064
	    },
	    {
	      "cbsa": 35620,
	      "naics": "81",
	      "actual": 0.31949,
	      "expected": 0.15978
	    }
	  ],
	  "35840": [
	    {
	      "cbsa": 35840,
	      "naics": "00",
	      "actual": -0.13948,
	      "expected": 0.14851
	    },
	    {
	      "cbsa": 35840,
	      "naics": "22",
	      "actual": -0.23212,
	      "expected": 0.1005
	    },
	    {
	      "cbsa": 35840,
	      "naics": "23",
	      "actual": -0.17467,
	      "expected": 0.15823
	    },
	    {
	      "cbsa": 35840,
	      "naics": "31",
	      "actual": -0.27636,
	      "expected": 0.03342
	    },
	    {
	      "cbsa": 35840,
	      "naics": "42",
	      "actual": -0.11665,
	      "expected": 0.14873
	    },
	    {
	      "cbsa": 35840,
	      "naics": "44",
	      "actual": -0.12672,
	      "expected": 0.12516
	    },
	    {
	      "cbsa": 35840,
	      "naics": "48",
	      "actual": 0.39888,
	      "expected": 0.11451
	    },
	    {
	      "cbsa": 35840,
	      "naics": "51",
	      "actual": -0.01065,
	      "expected": -0.00979
	    },
	    {
	      "cbsa": 35840,
	      "naics": "52",
	      "actual": -0.00334,
	      "expected": 0.18454
	    },
	    {
	      "cbsa": 35840,
	      "naics": "53",
	      "actual": 0.03591,
	      "expected": 0.24193
	    },
	    {
	      "cbsa": 35840,
	      "naics": "54",
	      "actual": -0.11413,
	      "expected": 0.19169
	    },
	    {
	      "cbsa": 35840,
	      "naics": "55",
	      "actual": -0.37988,
	      "expected": -0.04753
	    },
	    {
	      "cbsa": 35840,
	      "naics": "61",
	      "actual": -0.18199,
	      "expected": 0.23184
	    },
	    {
	      "cbsa": 35840,
	      "naics": "62",
	      "actual": -0.12821,
	      "expected": 0.12328
	    },
	    {
	      "cbsa": 35840,
	      "naics": "71",
	      "actual": -0.16723,
	      "expected": 0.19772
	    },
	    {
	      "cbsa": 35840,
	      "naics": "72",
	      "actual": -0.05808,
	      "expected": 0.20117
	    },
	    {
	      "cbsa": 35840,
	      "naics": "81",
	      "actual": -0.257,
	      "expected": 0.19224
	    }
	  ],
	  "36260": [
	    {
	      "cbsa": 36260,
	      "naics": "00",
	      "actual": 0.10285,
	      "expected": 0.23608
	    },
	    {
	      "cbsa": 36260,
	      "naics": "22",
	      "actual": 0.17596,
	      "expected": 0.18595
	    },
	    {
	      "cbsa": 36260,
	      "naics": "23",
	      "actual": 0.33007,
	      "expected": 0.20732
	    },
	    {
	      "cbsa": 36260,
	      "naics": "31",
	      "actual": 0.23349,
	      "expected": 0.10609
	    },
	    {
	      "cbsa": 36260,
	      "naics": "42",
	      "actual": 0.08595,
	      "expected": 0.17296
	    },
	    {
	      "cbsa": 36260,
	      "naics": "44",
	      "actual": -0.05338,
	      "expected": 0.19376
	    },
	    {
	      "cbsa": 36260,
	      "naics": "48",
	      "actual": 0.70885,
	      "expected": 0.12404
	    },
	    {
	      "cbsa": 36260,
	      "naics": "51",
	      "actual": 0.21931,
	      "expected": 0.18774
	    },
	    {
	      "cbsa": 36260,
	      "naics": "52",
	      "actual": 0.0018,
	      "expected": 0.24879
	    },
	    {
	      "cbsa": 36260,
	      "naics": "53",
	      "actual": 0.16879,
	      "expected": 0.2301
	    },
	    {
	      "cbsa": 36260,
	      "naics": "54",
	      "actual": -0.18571,
	      "expected": 0.20791
	    },
	    {
	      "cbsa": 36260,
	      "naics": "55",
	      "actual": -0.56433,
	      "expected": 0.10243
	    },
	    {
	      "cbsa": 36260,
	      "naics": "61",
	      "actual": 0.24843,
	      "expected": 0.23941
	    },
	    {
	      "cbsa": 36260,
	      "naics": "62",
	      "actual": 0.1396,
	      "expected": 0.29557
	    },
	    {
	      "cbsa": 36260,
	      "naics": "71",
	      "actual": -0.10397,
	      "expected": 0.17653
	    },
	    {
	      "cbsa": 36260,
	      "naics": "72",
	      "actual": 0.10082,
	      "expected": 0.22452
	    },
	    {
	      "cbsa": 36260,
	      "naics": "81",
	      "actual": -0.00894,
	      "expected": 0.20871
	    }
	  ],
	  "36420": [
	    {
	      "cbsa": 36420,
	      "naics": "00",
	      "actual": 0.04007,
	      "expected": 0.2348
	    },
	    {
	      "cbsa": 36420,
	      "naics": "22",
	      "actual": 0.68668,
	      "expected": 0.28983
	    },
	    {
	      "cbsa": 36420,
	      "naics": "23",
	      "actual": 0.06597,
	      "expected": 0.18779
	    },
	    {
	      "cbsa": 36420,
	      "naics": "31",
	      "actual": 0.03846,
	      "expected": 0.16997
	    },
	    {
	      "cbsa": 36420,
	      "naics": "42",
	      "actual": -0.00805,
	      "expected": 0.1887
	    },
	    {
	      "cbsa": 36420,
	      "naics": "44",
	      "actual": 0.00048,
	      "expected": 0.13044
	    },
	    {
	      "cbsa": 36420,
	      "naics": "48",
	      "actual": -0.04336,
	      "expected": 0.15681
	    },
	    {
	      "cbsa": 36420,
	      "naics": "51",
	      "actual": -0.25424,
	      "expected": 0.28729
	    },
	    {
	      "cbsa": 36420,
	      "naics": "52",
	      "actual": -0.22197,
	      "expected": 0.19908
	    },
	    {
	      "cbsa": 36420,
	      "naics": "53",
	      "actual": -0.43556,
	      "expected": 0.22977
	    },
	    {
	      "cbsa": 36420,
	      "naics": "54",
	      "actual": -0.07257,
	      "expected": 0.24143
	    },
	    {
	      "cbsa": 36420,
	      "naics": "55",
	      "actual": 0.11006,
	      "expected": 0.27731
	    },
	    {
	      "cbsa": 36420,
	      "naics": "61",
	      "actual": -0.11976,
	      "expected": 0.12286
	    },
	    {
	      "cbsa": 36420,
	      "naics": "62",
	      "actual": 0.01878,
	      "expected": 0.17483
	    },
	    {
	      "cbsa": 36420,
	      "naics": "71",
	      "actual": 1.13962,
	      "expected": 0.31948
	    },
	    {
	      "cbsa": 36420,
	      "naics": "72",
	      "actual": -0.08266,
	      "expected": 0.1715
	    },
	    {
	      "cbsa": 36420,
	      "naics": "81",
	      "actual": 0.01307,
	      "expected": 0.20014
	    }
	  ],
	  "36540": [
	    {
	      "cbsa": 36540,
	      "naics": "00",
	      "actual": -0.00216,
	      "expected": 0.13444
	    },
	    {
	      "cbsa": 36540,
	      "naics": "22",
	      "actual": -0.49768,
	      "expected": 0.1347
	    },
	    {
	      "cbsa": 36540,
	      "naics": "23",
	      "actual": 0.12067,
	      "expected": 0.07252
	    },
	    {
	      "cbsa": 36540,
	      "naics": "31",
	      "actual": -0.04192,
	      "expected": 0.07055
	    },
	    {
	      "cbsa": 36540,
	      "naics": "42",
	      "actual": -0.1384,
	      "expected": 0.10422
	    },
	    {
	      "cbsa": 36540,
	      "naics": "44",
	      "actual": -0.0957,
	      "expected": 0.11011
	    },
	    {
	      "cbsa": 36540,
	      "naics": "48",
	      "actual": -0.02273,
	      "expected": 0.08597
	    },
	    {
	      "cbsa": 36540,
	      "naics": "51",
	      "actual": -0.06116,
	      "expected": 0.06334
	    },
	    {
	      "cbsa": 36540,
	      "naics": "52",
	      "actual": 0.28017,
	      "expected": 0.09371
	    },
	    {
	      "cbsa": 36540,
	      "naics": "53",
	      "actual": 0.06862,
	      "expected": 0.13364
	    },
	    {
	      "cbsa": 36540,
	      "naics": "54",
	      "actual": 0.07362,
	      "expected": 0.14896
	    },
	    {
	      "cbsa": 36540,
	      "naics": "55",
	      "actual": 0.59235,
	      "expected": 0.07706
	    },
	    {
	      "cbsa": 36540,
	      "naics": "61",
	      "actual": -0.52354,
	      "expected": 0.13381
	    },
	    {
	      "cbsa": 36540,
	      "naics": "62",
	      "actual": -0.20843,
	      "expected": 0.17348
	    },
	    {
	      "cbsa": 36540,
	      "naics": "71",
	      "actual": -0.25668,
	      "expected": 0.11375
	    },
	    {
	      "cbsa": 36540,
	      "naics": "72",
	      "actual": -0.05538,
	      "expected": 0.13075
	    },
	    {
	      "cbsa": 36540,
	      "naics": "81",
	      "actual": -0.08462,
	      "expected": 0.13224
	    }
	  ],
	  "36740": [
	    {
	      "cbsa": 36740,
	      "naics": "00",
	      "actual": 0.05565,
	      "expected": 0.25087
	    },
	    {
	      "cbsa": 36740,
	      "naics": "22",
	      "actual": 0.63891,
	      "expected": 0.50838
	    },
	    {
	      "cbsa": 36740,
	      "naics": "23",
	      "actual": -0.12832,
	      "expected": 0.21351
	    },
	    {
	      "cbsa": 36740,
	      "naics": "31",
	      "actual": 0.04241,
	      "expected": 0.23677
	    },
	    {
	      "cbsa": 36740,
	      "naics": "42",
	      "actual": 0.06639,
	      "expected": 0.23316
	    },
	    {
	      "cbsa": 36740,
	      "naics": "44",
	      "actual": 0.03842,
	      "expected": 0.21278
	    },
	    {
	      "cbsa": 36740,
	      "naics": "48",
	      "actual": -0.05321,
	      "expected": 0.23312
	    },
	    {
	      "cbsa": 36740,
	      "naics": "51",
	      "actual": 0.08931,
	      "expected": 0.21491
	    },
	    {
	      "cbsa": 36740,
	      "naics": "52",
	      "actual": 0.08022,
	      "expected": 0.2336
	    },
	    {
	      "cbsa": 36740,
	      "naics": "53",
	      "actual": -0.16945,
	      "expected": 0.19642
	    },
	    {
	      "cbsa": 36740,
	      "naics": "54",
	      "actual": -0.01483,
	      "expected": 0.22073
	    },
	    {
	      "cbsa": 36740,
	      "naics": "55",
	      "actual": -0.10906,
	      "expected": 0.24428
	    },
	    {
	      "cbsa": 36740,
	      "naics": "61",
	      "actual": -0.0551,
	      "expected": 0.2088
	    },
	    {
	      "cbsa": 36740,
	      "naics": "62",
	      "actual": -0.07214,
	      "expected": 0.28391
	    },
	    {
	      "cbsa": 36740,
	      "naics": "71",
	      "actual": 0.85164,
	      "expected": 0.01221
	    },
	    {
	      "cbsa": 36740,
	      "naics": "72",
	      "actual": -0.16383,
	      "expected": 0.1321
	    },
	    {
	      "cbsa": 36740,
	      "naics": "81",
	      "actual": -0.29519,
	      "expected": 0.15774
	    }
	  ],
	  "37100": [
	    {
	      "cbsa": 37100,
	      "naics": "00",
	      "actual": 0.50514,
	      "expected": 0.21344
	    },
	    {
	      "cbsa": 37100,
	      "naics": "22",
	      "actual": -0.15644,
	      "expected": 27.06589
	    },
	    {
	      "cbsa": 37100,
	      "naics": "23",
	      "actual": 0.04225,
	      "expected": 2.68165
	    },
	    {
	      "cbsa": 37100,
	      "naics": "31",
	      "actual": 1.8604,
	      "expected": 0.69641
	    },
	    {
	      "cbsa": 37100,
	      "naics": "42",
	      "actual": 0.96505,
	      "expected": 1.89443
	    },
	    {
	      "cbsa": 37100,
	      "naics": "44",
	      "actual": 0.06025,
	      "expected": 0.79579
	    },
	    {
	      "cbsa": 37100,
	      "naics": "48",
	      "actual": -0.36748,
	      "expected": 5.67189
	    },
	    {
	      "cbsa": 37100,
	      "naics": "51",
	      "actual": -0.00183,
	      "expected": 4.68786
	    },
	    {
	      "cbsa": 37100,
	      "naics": "52",
	      "actual": 0.06311,
	      "expected": 1.6636
	    },
	    {
	      "cbsa": 37100,
	      "naics": "53",
	      "actual": 0.53486,
	      "expected": 7.12336
	    },
	    {
	      "cbsa": 37100,
	      "naics": "54",
	      "actual": 0.32233,
	      "expected": 2.05232
	    },
	    {
	      "cbsa": 37100,
	      "naics": "55",
	      "actual": 0.79146,
	      "expected": 11.70502
	    },
	    {
	      "cbsa": 37100,
	      "naics": "61",
	      "actual": 0.24411,
	      "expected": 5.91277
	    },
	    {
	      "cbsa": 37100,
	      "naics": "62",
	      "actual": -0.12522,
	      "expected": 0.77139
	    },
	    {
	      "cbsa": 37100,
	      "naics": "71",
	      "actual": 1.98771,
	      "expected": 6.24502
	    },
	    {
	      "cbsa": 37100,
	      "naics": "72",
	      "actual": 0.05401,
	      "expected": 1.03627
	    },
	    {
	      "cbsa": 37100,
	      "naics": "81",
	      "actual": 0.05178,
	      "expected": 3.19816
	    }
	  ],
	  "37340": [
	    {
	      "cbsa": 37340,
	      "naics": "00",
	      "actual": -0.08732,
	      "expected": 0.06896
	    },
	    {
	      "cbsa": 37340,
	      "naics": "22",
	      "actual": 1.38469,
	      "expected": 0.13198
	    },
	    {
	      "cbsa": 37340,
	      "naics": "23",
	      "actual": -0.16527,
	      "expected": 0.01776
	    },
	    {
	      "cbsa": 37340,
	      "naics": "31",
	      "actual": -0.12278,
	      "expected": 0.01271
	    },
	    {
	      "cbsa": 37340,
	      "naics": "42",
	      "actual": 0.09874,
	      "expected": 0.05631
	    },
	    {
	      "cbsa": 37340,
	      "naics": "44",
	      "actual": -0.04062,
	      "expected": 0.07491
	    },
	    {
	      "cbsa": 37340,
	      "naics": "48",
	      "actual": 0.02977,
	      "expected": 0.05674
	    },
	    {
	      "cbsa": 37340,
	      "naics": "51",
	      "actual": -0.37872,
	      "expected": 0.00392
	    },
	    {
	      "cbsa": 37340,
	      "naics": "52",
	      "actual": -0.0919,
	      "expected": 0.0768
	    },
	    {
	      "cbsa": 37340,
	      "naics": "53",
	      "actual": -0.18049,
	      "expected": 0.10071
	    },
	    {
	      "cbsa": 37340,
	      "naics": "54",
	      "actual": -0.17759,
	      "expected": 0.0887
	    },
	    {
	      "cbsa": 37340,
	      "naics": "55",
	      "actual": 1.24945,
	      "expected": 0.23636
	    },
	    {
	      "cbsa": 37340,
	      "naics": "61",
	      "actual": 0.02234,
	      "expected": 0.20867
	    },
	    {
	      "cbsa": 37340,
	      "naics": "62",
	      "actual": -0.11811,
	      "expected": 0.06571
	    },
	    {
	      "cbsa": 37340,
	      "naics": "71",
	      "actual": 0.01566,
	      "expected": 0.05716
	    },
	    {
	      "cbsa": 37340,
	      "naics": "72",
	      "actual": -0.00146,
	      "expected": 0.10221
	    },
	    {
	      "cbsa": 37340,
	      "naics": "81",
	      "actual": -0.14223,
	      "expected": 0.08333
	    }
	  ],
	  "37980": [
	    {
	      "cbsa": 37980,
	      "naics": "00",
	      "actual": 0.23984,
	      "expected": 0.12723
	    },
	    {
	      "cbsa": 37980,
	      "naics": "22",
	      "actual": -0.37489,
	      "expected": 0.04024
	    },
	    {
	      "cbsa": 37980,
	      "naics": "23",
	      "actual": 0.30422,
	      "expected": -0.10692
	    },
	    {
	      "cbsa": 37980,
	      "naics": "31",
	      "actual": -0.2744,
	      "expected": 0.08127
	    },
	    {
	      "cbsa": 37980,
	      "naics": "42",
	      "actual": 0.37977,
	      "expected": 0.06604
	    },
	    {
	      "cbsa": 37980,
	      "naics": "44",
	      "actual": 0.10574,
	      "expected": 0.10595
	    },
	    {
	      "cbsa": 37980,
	      "naics": "48",
	      "actual": -0.18399,
	      "expected": 0.02209
	    },
	    {
	      "cbsa": 37980,
	      "naics": "51",
	      "actual": 0.97067,
	      "expected": 0.02672
	    },
	    {
	      "cbsa": 37980,
	      "naics": "52",
	      "actual": -0.11974,
	      "expected": 0.06298
	    },
	    {
	      "cbsa": 37980,
	      "naics": "53",
	      "actual": 0.43623,
	      "expected": 0.06821
	    },
	    {
	      "cbsa": 37980,
	      "naics": "54",
	      "actual": 0.24914,
	      "expected": 0.09499
	    },
	    {
	      "cbsa": 37980,
	      "naics": "55",
	      "actual": -0.12043,
	      "expected": 0.0689
	    },
	    {
	      "cbsa": 37980,
	      "naics": "61",
	      "actual": 0.53828,
	      "expected": -0.01152
	    },
	    {
	      "cbsa": 37980,
	      "naics": "62",
	      "actual": 0.76598,
	      "expected": 0.28375
	    },
	    {
	      "cbsa": 37980,
	      "naics": "71",
	      "actual": -0.20308,
	      "expected": 0.09678
	    },
	    {
	      "cbsa": 37980,
	      "naics": "72",
	      "actual": 0.14512,
	      "expected": 0.11586
	    },
	    {
	      "cbsa": 37980,
	      "naics": "81",
	      "actual": -0.02374,
	      "expected": 0.11339
	    }
	  ],
	  "38060": [
	    {
	      "cbsa": 38060,
	      "naics": "00",
	      "actual": -0.00264,
	      "expected": 0.20865
	    },
	    {
	      "cbsa": 38060,
	      "naics": "22",
	      "actual": -0.2842,
	      "expected": -0.15669
	    },
	    {
	      "cbsa": 38060,
	      "naics": "23",
	      "actual": -0.03921,
	      "expected": 0.06125
	    },
	    {
	      "cbsa": 38060,
	      "naics": "31",
	      "actual": -0.17681,
	      "expected": 0.06526
	    },
	    {
	      "cbsa": 38060,
	      "naics": "42",
	      "actual": -0.01102,
	      "expected": 0.11925
	    },
	    {
	      "cbsa": 38060,
	      "naics": "44",
	      "actual": -0.16498,
	      "expected": 0.1504
	    },
	    {
	      "cbsa": 38060,
	      "naics": "48",
	      "actual": -0.19963,
	      "expected": 0.07392
	    },
	    {
	      "cbsa": 38060,
	      "naics": "51",
	      "actual": -0.25769,
	      "expected": 0.04325
	    },
	    {
	      "cbsa": 38060,
	      "naics": "52",
	      "actual": 0.11754,
	      "expected": 0.16843
	    },
	    {
	      "cbsa": 38060,
	      "naics": "53",
	      "actual": 0.31791,
	      "expected": 0.16793
	    },
	    {
	      "cbsa": 38060,
	      "naics": "54",
	      "actual": -0.00134,
	      "expected": 0.18457
	    },
	    {
	      "cbsa": 38060,
	      "naics": "55",
	      "actual": 0.0429,
	      "expected": 0.16114
	    },
	    {
	      "cbsa": 38060,
	      "naics": "61",
	      "actual": 0.55572,
	      "expected": 0.28739
	    },
	    {
	      "cbsa": 38060,
	      "naics": "62",
	      "actual": 0.1366,
	      "expected": 0.2965
	    },
	    {
	      "cbsa": 38060,
	      "naics": "71",
	      "actual": 0.02977,
	      "expected": 0.13568
	    },
	    {
	      "cbsa": 38060,
	      "naics": "72",
	      "actual": -0.22076,
	      "expected": 0.13048
	    },
	    {
	      "cbsa": 38060,
	      "naics": "81",
	      "actual": -0.13045,
	      "expected": 0.14718
	    }
	  ],
	  "38300": [
	    {
	      "cbsa": 38300,
	      "naics": "00",
	      "actual": -0.06894,
	      "expected": 0.25542
	    },
	    {
	      "cbsa": 38300,
	      "naics": "22",
	      "actual": -0.19726,
	      "expected": 0.23876
	    },
	    {
	      "cbsa": 38300,
	      "naics": "23",
	      "actual": -0.18242,
	      "expected": 0.07566
	    },
	    {
	      "cbsa": 38300,
	      "naics": "31",
	      "actual": -0.55094,
	      "expected": 0.15516
	    },
	    {
	      "cbsa": 38300,
	      "naics": "42",
	      "actual": -0.25582,
	      "expected": 0.15023
	    },
	    {
	      "cbsa": 38300,
	      "naics": "44",
	      "actual": -0.48136,
	      "expected": 0.11453
	    },
	    {
	      "cbsa": 38300,
	      "naics": "48",
	      "actual": -0.64149,
	      "expected": 0.09976
	    },
	    {
	      "cbsa": 38300,
	      "naics": "51",
	      "actual": -0.1959,
	      "expected": 0.14795
	    },
	    {
	      "cbsa": 38300,
	      "naics": "52",
	      "actual": -0.14782,
	      "expected": 0.12244
	    },
	    {
	      "cbsa": 38300,
	      "naics": "53",
	      "actual": 0.12736,
	      "expected": 0.0846
	    },
	    {
	      "cbsa": 38300,
	      "naics": "54",
	      "actual": -0.23873,
	      "expected": 0.11244
	    },
	    {
	      "cbsa": 38300,
	      "naics": "55",
	      "actual": -0.38985,
	      "expected": 0.07208
	    },
	    {
	      "cbsa": 38300,
	      "naics": "61",
	      "actual": 0.1402,
	      "expected": 0.16476
	    },
	    {
	      "cbsa": 38300,
	      "naics": "62",
	      "actual": -0.04197,
	      "expected": 0.19798
	    },
	    {
	      "cbsa": 38300,
	      "naics": "71",
	      "actual": 0.36385,
	      "expected": 0.17073
	    },
	    {
	      "cbsa": 38300,
	      "naics": "72",
	      "actual": 0.20345,
	      "expected": 0.13554
	    },
	    {
	      "cbsa": 38300,
	      "naics": "81",
	      "actual": -0.20096,
	      "expected": 0.12321
	    }
	  ],
	  "38900": [
	    {
	      "cbsa": 38900,
	      "naics": "00",
	      "actual": 0.22409,
	      "expected": 0.28782
	    },
	    {
	      "cbsa": 38900,
	      "naics": "22",
	      "actual": 0.01137,
	      "expected": 0.22663
	    },
	    {
	      "cbsa": 38900,
	      "naics": "23",
	      "actual": 0.45929,
	      "expected": 0.28125
	    },
	    {
	      "cbsa": 38900,
	      "naics": "31",
	      "actual": 0.16101,
	      "expected": 0.14924
	    },
	    {
	      "cbsa": 38900,
	      "naics": "42",
	      "actual": -0.07539,
	      "expected": 0.19194
	    },
	    {
	      "cbsa": 38900,
	      "naics": "44",
	      "actual": 0.08204,
	      "expected": 0.21095
	    },
	    {
	      "cbsa": 38900,
	      "naics": "48",
	      "actual": 0.01576,
	      "expected": 0.15855
	    },
	    {
	      "cbsa": 38900,
	      "naics": "51",
	      "actual": 0.01021,
	      "expected": 0.22485
	    },
	    {
	      "cbsa": 38900,
	      "naics": "52",
	      "actual": 0.12012,
	      "expected": 0.2256
	    },
	    {
	      "cbsa": 38900,
	      "naics": "53",
	      "actual": 0.23128,
	      "expected": 0.21925
	    },
	    {
	      "cbsa": 38900,
	      "naics": "54",
	      "actual": 0.28835,
	      "expected": 0.24995
	    },
	    {
	      "cbsa": 38900,
	      "naics": "55",
	      "actual": 0.39384,
	      "expected": 0.27907
	    },
	    {
	      "cbsa": 38900,
	      "naics": "61",
	      "actual": 0.16287,
	      "expected": 0.33305
	    },
	    {
	      "cbsa": 38900,
	      "naics": "62",
	      "actual": 0.17418,
	      "expected": 0.30073
	    },
	    {
	      "cbsa": 38900,
	      "naics": "71",
	      "actual": 0.29833,
	      "expected": 0.23143
	    },
	    {
	      "cbsa": 38900,
	      "naics": "72",
	      "actual": 0.22181,
	      "expected": 0.24453
	    },
	    {
	      "cbsa": 38900,
	      "naics": "81",
	      "actual": 0.03056,
	      "expected": 0.2278
	    }
	  ],
	  "39300": [
	    {
	      "cbsa": 39300,
	      "naics": "00",
	      "actual": -0.05505,
	      "expected": 0.12396
	    },
	    {
	      "cbsa": 39300,
	      "naics": "22",
	      "actual": 0.07583,
	      "expected": 0.04491
	    },
	    {
	      "cbsa": 39300,
	      "naics": "23",
	      "actual": -0.02651,
	      "expected": -0.00602
	    },
	    {
	      "cbsa": 39300,
	      "naics": "31",
	      "actual": -0.18251,
	      "expected": -0.04657
	    },
	    {
	      "cbsa": 39300,
	      "naics": "42",
	      "actual": 0.0607,
	      "expected": -0.00615
	    },
	    {
	      "cbsa": 39300,
	      "naics": "44",
	      "actual": 0.02144,
	      "expected": 0.01646
	    },
	    {
	      "cbsa": 39300,
	      "naics": "48",
	      "actual": -0.36097,
	      "expected": -0.01517
	    },
	    {
	      "cbsa": 39300,
	      "naics": "51",
	      "actual": -0.49547,
	      "expected": 0.08913
	    },
	    {
	      "cbsa": 39300,
	      "naics": "52",
	      "actual": -0.06113,
	      "expected": 0.02081
	    },
	    {
	      "cbsa": 39300,
	      "naics": "53",
	      "actual": 0.07632,
	      "expected": 0.00402
	    },
	    {
	      "cbsa": 39300,
	      "naics": "54",
	      "actual": -0.18918,
	      "expected": 0.04034
	    },
	    {
	      "cbsa": 39300,
	      "naics": "55",
	      "actual": -0.15371,
	      "expected": 0.03986
	    },
	    {
	      "cbsa": 39300,
	      "naics": "61",
	      "actual": -0.21124,
	      "expected": 0.12953
	    },
	    {
	      "cbsa": 39300,
	      "naics": "62",
	      "actual": 0.0001,
	      "expected": 0.08487
	    },
	    {
	      "cbsa": 39300,
	      "naics": "71",
	      "actual": -0.11848,
	      "expected": 0.05059
	    },
	    {
	      "cbsa": 39300,
	      "naics": "72",
	      "actual": -0.0155,
	      "expected": 0.03981
	    },
	    {
	      "cbsa": 39300,
	      "naics": "81",
	      "actual": -0.11407,
	      "expected": 0.05311
	    }
	  ],
	  "39340": [
	    {
	      "cbsa": 39340,
	      "naics": "00",
	      "actual": 0.30718,
	      "expected": 0.36381
	    },
	    {
	      "cbsa": 39340,
	      "naics": "22",
	      "actual": -0.61532,
	      "expected": 1.36838
	    },
	    {
	      "cbsa": 39340,
	      "naics": "23",
	      "actual": 2.12421,
	      "expected": 1.03796
	    },
	    {
	      "cbsa": 39340,
	      "naics": "31",
	      "actual": -0.0365,
	      "expected": 0.42696
	    },
	    {
	      "cbsa": 39340,
	      "naics": "42",
	      "actual": 0.83563,
	      "expected": 1.12678
	    },
	    {
	      "cbsa": 39340,
	      "naics": "44",
	      "actual": 0.07226,
	      "expected": 0.45588
	    },
	    {
	      "cbsa": 39340,
	      "naics": "48",
	      "actual": 0.9124,
	      "expected": 1.54296
	    },
	    {
	      "cbsa": 39340,
	      "naics": "51",
	      "actual": -0.17672,
	      "expected": 0.27348
	    },
	    {
	      "cbsa": 39340,
	      "naics": "52",
	      "actual": -0.08569,
	      "expected": 0.65178
	    },
	    {
	      "cbsa": 39340,
	      "naics": "53",
	      "actual": -0.02868,
	      "expected": 1.0032
	    },
	    {
	      "cbsa": 39340,
	      "naics": "54",
	      "actual": 0.33701,
	      "expected": 0.48465
	    },
	    {
	      "cbsa": 39340,
	      "naics": "55",
	      "actual": 0.75378,
	      "expected": 1.37844
	    },
	    {
	      "cbsa": 39340,
	      "naics": "61",
	      "actual": 0.83288,
	      "expected": 0.2521
	    },
	    {
	      "cbsa": 39340,
	      "naics": "62",
	      "actual": -0.15104,
	      "expected": 0.42816
	    },
	    {
	      "cbsa": 39340,
	      "naics": "71",
	      "actual": 0.80592,
	      "expected": 1.71214
	    },
	    {
	      "cbsa": 39340,
	      "naics": "72",
	      "actual": 0.13404,
	      "expected": 0.4925
	    },
	    {
	      "cbsa": 39340,
	      "naics": "81",
	      "actual": 0.04912,
	      "expected": 0.76329
	    }
	  ],
	  "39580": [
	    {
	      "cbsa": 39580,
	      "naics": "00",
	      "actual": 0.11922,
	      "expected": 0.36773
	    },
	    {
	      "cbsa": 39580,
	      "naics": "22",
	      "actual": -0.52899,
	      "expected": -0.15907
	    },
	    {
	      "cbsa": 39580,
	      "naics": "23",
	      "actual": 0.18491,
	      "expected": 0.39043
	    },
	    {
	      "cbsa": 39580,
	      "naics": "31",
	      "actual": 0.64705,
	      "expected": 0.33222
	    },
	    {
	      "cbsa": 39580,
	      "naics": "42",
	      "actual": 0.02156,
	      "expected": 0.29363
	    },
	    {
	      "cbsa": 39580,
	      "naics": "44",
	      "actual": -0.01336,
	      "expected": 0.33997
	    },
	    {
	      "cbsa": 39580,
	      "naics": "48",
	      "actual": 0.01,
	      "expected": 0.22572
	    },
	    {
	      "cbsa": 39580,
	      "naics": "51",
	      "actual": 0.02709,
	      "expected": 0.1936
	    },
	    {
	      "cbsa": 39580,
	      "naics": "52",
	      "actual": 0.0809,
	      "expected": 0.35155
	    },
	    {
	      "cbsa": 39580,
	      "naics": "53",
	      "actual": 0.23882,
	      "expected": 0.41266
	    },
	    {
	      "cbsa": 39580,
	      "naics": "54",
	      "actual": -0.11658,
	      "expected": 0.30404
	    },
	    {
	      "cbsa": 39580,
	      "naics": "55",
	      "actual": -0.24859,
	      "expected": 0.34768
	    },
	    {
	      "cbsa": 39580,
	      "naics": "61",
	      "actual": 0.10592,
	      "expected": 0.39767
	    },
	    {
	      "cbsa": 39580,
	      "naics": "62",
	      "actual": 0.56858,
	      "expected": 0.45566
	    },
	    {
	      "cbsa": 39580,
	      "naics": "71",
	      "actual": 0.1499,
	      "expected": 0.29356
	    },
	    {
	      "cbsa": 39580,
	      "naics": "72",
	      "actual": 0.08853,
	      "expected": 0.355
	    },
	    {
	      "cbsa": 39580,
	      "naics": "81",
	      "actual": 0.18096,
	      "expected": 0.39213
	    }
	  ],
	  "40060": [
	    {
	      "cbsa": 40060,
	      "naics": "00",
	      "actual": 0.19948,
	      "expected": 0.18152
	    },
	    {
	      "cbsa": 40060,
	      "naics": "22",
	      "actual": -0.83041,
	      "expected": -0.18104
	    },
	    {
	      "cbsa": 40060,
	      "naics": "23",
	      "actual": -0.1807,
	      "expected": 0.08836
	    },
	    {
	      "cbsa": 40060,
	      "naics": "31",
	      "actual": -0.26793,
	      "expected": -0.03189
	    },
	    {
	      "cbsa": 40060,
	      "naics": "42",
	      "actual": -0.23782,
	      "expected": 0.05122
	    },
	    {
	      "cbsa": 40060,
	      "naics": "44",
	      "actual": -0.00387,
	      "expected": 0.12065
	    },
	    {
	      "cbsa": 40060,
	      "naics": "48",
	      "actual": -0.15315,
	      "expected": 0.03038
	    },
	    {
	      "cbsa": 40060,
	      "naics": "51",
	      "actual": -0.08689,
	      "expected": 0.07138
	    },
	    {
	      "cbsa": 40060,
	      "naics": "52",
	      "actual": 0.01883,
	      "expected": 0.11424
	    },
	    {
	      "cbsa": 40060,
	      "naics": "53",
	      "actual": -0.17837,
	      "expected": 0.07671
	    },
	    {
	      "cbsa": 40060,
	      "naics": "54",
	      "actual": -0.03776,
	      "expected": 0.13769
	    },
	    {
	      "cbsa": 40060,
	      "naics": "55",
	      "actual": 0.43908,
	      "expected": 0.14305
	    },
	    {
	      "cbsa": 40060,
	      "naics": "61",
	      "actual": 0.51396,
	      "expected": -0.09664
	    },
	    {
	      "cbsa": 40060,
	      "naics": "62",
	      "actual": 0.61226,
	      "expected": 0.17444
	    },
	    {
	      "cbsa": 40060,
	      "naics": "71",
	      "actual": 0.95838,
	      "expected": 0.26194
	    },
	    {
	      "cbsa": 40060,
	      "naics": "72",
	      "actual": 0.0912,
	      "expected": 0.14079
	    },
	    {
	      "cbsa": 40060,
	      "naics": "81",
	      "actual": -0.09645,
	      "expected": 0.12869
	    }
	  ],
	  "40140": [
	    {
	      "cbsa": 40140,
	      "naics": "00",
	      "actual": -0.01685,
	      "expected": 0.24008
	    },
	    {
	      "cbsa": 40140,
	      "naics": "22",
	      "actual": 0.21653,
	      "expected": 0.23516
	    },
	    {
	      "cbsa": 40140,
	      "naics": "23",
	      "actual": -0.0875,
	      "expected": 0.07984
	    },
	    {
	      "cbsa": 40140,
	      "naics": "31",
	      "actual": -0.01902,
	      "expected": 0.08046
	    },
	    {
	      "cbsa": 40140,
	      "naics": "42",
	      "actual": -0.10906,
	      "expected": 0.07556
	    },
	    {
	      "cbsa": 40140,
	      "naics": "44",
	      "actual": -0.01631,
	      "expected": 0.1476
	    },
	    {
	      "cbsa": 40140,
	      "naics": "48",
	      "actual": -0.51874,
	      "expected": -0.13445
	    },
	    {
	      "cbsa": 40140,
	      "naics": "51",
	      "actual": -0.25374,
	      "expected": 0.16247
	    },
	    {
	      "cbsa": 40140,
	      "naics": "52",
	      "actual": -0.00388,
	      "expected": 0.20617
	    },
	    {
	      "cbsa": 40140,
	      "naics": "53",
	      "actual": -0.08655,
	      "expected": 0.18566
	    },
	    {
	      "cbsa": 40140,
	      "naics": "54",
	      "actual": -0.17163,
	      "expected": 0.14598
	    },
	    {
	      "cbsa": 40140,
	      "naics": "55",
	      "actual": -0.09236,
	      "expected": 0.03318
	    },
	    {
	      "cbsa": 40140,
	      "naics": "61",
	      "actual": 1.79486,
	      "expected": 0.34654
	    },
	    {
	      "cbsa": 40140,
	      "naics": "62",
	      "actual": -0.05867,
	      "expected": 0.21825
	    },
	    {
	      "cbsa": 40140,
	      "naics": "71",
	      "actual": -0.12101,
	      "expected": 0.26932
	    },
	    {
	      "cbsa": 40140,
	      "naics": "72",
	      "actual": -0.0746,
	      "expected": 0.17059
	    },
	    {
	      "cbsa": 40140,
	      "naics": "81",
	      "actual": -0.13824,
	      "expected": 0.33977
	    }
	  ],
	  "40380": [
	    {
	      "cbsa": 40380,
	      "naics": "00",
	      "actual": -0.3795,
	      "expected": 0.00248
	    },
	    {
	      "cbsa": 40380,
	      "naics": "22",
	      "actual": -0.92292,
	      "expected": -0.10452
	    },
	    {
	      "cbsa": 40380,
	      "naics": "23",
	      "actual": -0.1121,
	      "expected": 0.00361
	    },
	    {
	      "cbsa": 40380,
	      "naics": "31",
	      "actual": -0.79197,
	      "expected": -0.03286
	    },
	    {
	      "cbsa": 40380,
	      "naics": "42",
	      "actual": -0.5859,
	      "expected": -0.00954
	    },
	    {
	      "cbsa": 40380,
	      "naics": "44",
	      "actual": -0.26778,
	      "expected": -0.0159
	    },
	    {
	      "cbsa": 40380,
	      "naics": "48",
	      "actual": -0.2954,
	      "expected": -0.03556
	    },
	    {
	      "cbsa": 40380,
	      "naics": "51",
	      "actual": -0.48695,
	      "expected": -0.084
	    },
	    {
	      "cbsa": 40380,
	      "naics": "52",
	      "actual": -0.4272,
	      "expected": -0.02517
	    },
	    {
	      "cbsa": 40380,
	      "naics": "53",
	      "actual": -0.3438,
	      "expected": -0.04815
	    },
	    {
	      "cbsa": 40380,
	      "naics": "54",
	      "actual": -0.40811,
	      "expected": -0.04327
	    },
	    {
	      "cbsa": 40380,
	      "naics": "55",
	      "actual": -0.68981,
	      "expected": -0.09283
	    },
	    {
	      "cbsa": 40380,
	      "naics": "61",
	      "actual": -0.09622,
	      "expected": 0.09798
	    },
	    {
	      "cbsa": 40380,
	      "naics": "62",
	      "actual": -0.03199,
	      "expected": 0.02588
	    },
	    {
	      "cbsa": 40380,
	      "naics": "71",
	      "actual": -0.38322,
	      "expected": -0.04441
	    },
	    {
	      "cbsa": 40380,
	      "naics": "72",
	      "actual": -0.59349,
	      "expected": -0.03776
	    },
	    {
	      "cbsa": 40380,
	      "naics": "81",
	      "actual": -0.11446,
	      "expected": -0.01091
	    }
	  ],
	  "40900": [
	    {
	      "cbsa": 40900,
	      "naics": "00",
	      "actual": -0.44308,
	      "expected": -0.05852
	    },
	    {
	      "cbsa": 40900,
	      "naics": "22",
	      "actual": -0.03591,
	      "expected": 1.34759
	    },
	    {
	      "cbsa": 40900,
	      "naics": "23",
	      "actual": -0.19098,
	      "expected": 0.14949
	    },
	    {
	      "cbsa": 40900,
	      "naics": "31",
	      "actual": -0.23275,
	      "expected": 0.10002
	    },
	    {
	      "cbsa": 40900,
	      "naics": "42",
	      "actual": -0.09962,
	      "expected": 0.22224
	    },
	    {
	      "cbsa": 40900,
	      "naics": "44",
	      "actual": -0.11064,
	      "expected": 0.12435
	    },
	    {
	      "cbsa": 40900,
	      "naics": "48",
	      "actual": -0.10504,
	      "expected": 0.36608
	    },
	    {
	      "cbsa": 40900,
	      "naics": "51",
	      "actual": -0.38066,
	      "expected": 0.16371
	    },
	    {
	      "cbsa": 40900,
	      "naics": "52",
	      "actual": -0.18533,
	      "expected": 0.06887
	    },
	    {
	      "cbsa": 40900,
	      "naics": "53",
	      "actual": -0.20816,
	      "expected": 0.31139
	    },
	    {
	      "cbsa": 40900,
	      "naics": "54",
	      "actual": -0.22418,
	      "expected": 0.0283
	    },
	    {
	      "cbsa": 40900,
	      "naics": "55",
	      "actual": -0.09065,
	      "expected": 0.18658
	    },
	    {
	      "cbsa": 40900,
	      "naics": "61",
	      "actual": 0.15357,
	      "expected": 0.34121
	    },
	    {
	      "cbsa": 40900,
	      "naics": "62",
	      "actual": -0.08373,
	      "expected": 0.41612
	    },
	    {
	      "cbsa": 40900,
	      "naics": "71",
	      "actual": -0.23911,
	      "expected": 0.37035
	    },
	    {
	      "cbsa": 40900,
	      "naics": "72",
	      "actual": -0.21404,
	      "expected": 0.07758
	    },
	    {
	      "cbsa": 40900,
	      "naics": "81",
	      "actual": -0.86681,
	      "expected": -0.04528
	    }
	  ],
	  "41180": [
	    {
	      "cbsa": 41180,
	      "naics": "00",
	      "actual": -0.08023,
	      "expected": 0.16597
	    },
	    {
	      "cbsa": 41180,
	      "naics": "22",
	      "actual": -0.14503,
	      "expected": 0.02637
	    },
	    {
	      "cbsa": 41180,
	      "naics": "23",
	      "actual": 0.20155,
	      "expected": -0.04912
	    },
	    {
	      "cbsa": 41180,
	      "naics": "31",
	      "actual": -0.13068,
	      "expected": 0.01586
	    },
	    {
	      "cbsa": 41180,
	      "naics": "42",
	      "actual": 0.37831,
	      "expected": 0.02944
	    },
	    {
	      "cbsa": 41180,
	      "naics": "44",
	      "actual": -0.26205,
	      "expected": 0.05523
	    },
	    {
	      "cbsa": 41180,
	      "naics": "48",
	      "actual": -0.02925,
	      "expected": 0.02632
	    },
	    {
	      "cbsa": 41180,
	      "naics": "51",
	      "actual": -0.37178,
	      "expected": 0.06957
	    },
	    {
	      "cbsa": 41180,
	      "naics": "52",
	      "actual": -0.06184,
	      "expected": 0.0787
	    },
	    {
	      "cbsa": 41180,
	      "naics": "53",
	      "actual": 0.21796,
	      "expected": 0.12124
	    },
	    {
	      "cbsa": 41180,
	      "naics": "54",
	      "actual": 0.11364,
	      "expected": 0.05934
	    },
	    {
	      "cbsa": 41180,
	      "naics": "55",
	      "actual": -0.07926,
	      "expected": 0.07398
	    },
	    {
	      "cbsa": 41180,
	      "naics": "61",
	      "actual": -0.19755,
	      "expected": 0.04395
	    },
	    {
	      "cbsa": 41180,
	      "naics": "62",
	      "actual": -0.39219,
	      "expected": 0.19492
	    },
	    {
	      "cbsa": 41180,
	      "naics": "71",
	      "actual": 1.60569,
	      "expected": 0.08258
	    },
	    {
	      "cbsa": 41180,
	      "naics": "72",
	      "actual": -0.22922,
	      "expected": 0.07035
	    },
	    {
	      "cbsa": 41180,
	      "naics": "81",
	      "actual": 0.14989,
	      "expected": 0.07551
	    }
	  ],
	  "41620": [
	    {
	      "cbsa": 41620,
	      "naics": "00",
	      "actual": 0.05589,
	      "expected": 0.22563
	    },
	    {
	      "cbsa": 41620,
	      "naics": "22",
	      "actual": -0.23324,
	      "expected": 0.20446
	    },
	    {
	      "cbsa": 41620,
	      "naics": "23",
	      "actual": 0.09803,
	      "expected": 0.19568
	    },
	    {
	      "cbsa": 41620,
	      "naics": "31",
	      "actual": 0.03242,
	      "expected": 0.20137
	    },
	    {
	      "cbsa": 41620,
	      "naics": "42",
	      "actual": -0.07621,
	      "expected": 0.20263
	    },
	    {
	      "cbsa": 41620,
	      "naics": "44",
	      "actual": 0.03992,
	      "expected": 0.20317
	    },
	    {
	      "cbsa": 41620,
	      "naics": "48",
	      "actual": 0.15215,
	      "expected": 0.21019
	    },
	    {
	      "cbsa": 41620,
	      "naics": "51",
	      "actual": 0.16915,
	      "expected": 0.21667
	    },
	    {
	      "cbsa": 41620,
	      "naics": "52",
	      "actual": -0.03255,
	      "expected": 0.21454
	    },
	    {
	      "cbsa": 41620,
	      "naics": "53",
	      "actual": -0.01538,
	      "expected": 0.21317
	    },
	    {
	      "cbsa": 41620,
	      "naics": "54",
	      "actual": 0.04134,
	      "expected": 0.20851
	    },
	    {
	      "cbsa": 41620,
	      "naics": "55",
	      "actual": -0.04799,
	      "expected": 0.18736
	    },
	    {
	      "cbsa": 41620,
	      "naics": "61",
	      "actual": 0.26144,
	      "expected": 0.24121
	    },
	    {
	      "cbsa": 41620,
	      "naics": "62",
	      "actual": 0.13683,
	      "expected": 0.26441
	    },
	    {
	      "cbsa": 41620,
	      "naics": "71",
	      "actual": 0.10119,
	      "expected": 0.25805
	    },
	    {
	      "cbsa": 41620,
	      "naics": "72",
	      "actual": 0.079,
	      "expected": 0.22368
	    },
	    {
	      "cbsa": 41620,
	      "naics": "81",
	      "actual": 0.04707,
	      "expected": 0.21499
	    }
	  ],
	  "41700": [
	    {
	      "cbsa": 41700,
	      "naics": "00",
	      "actual": 0.06241,
	      "expected": 0.35023
	    },
	    {
	      "cbsa": 41700,
	      "naics": "22",
	      "actual": 1.891,
	      "expected": 0.49133
	    },
	    {
	      "cbsa": 41700,
	      "naics": "23",
	      "actual": 0.13927,
	      "expected": 0.26295
	    },
	    {
	      "cbsa": 41700,
	      "naics": "31",
	      "actual": -0.05812,
	      "expected": 0.1779
	    },
	    {
	      "cbsa": 41700,
	      "naics": "42",
	      "actual": -0.10464,
	      "expected": 0.24081
	    },
	    {
	      "cbsa": 41700,
	      "naics": "44",
	      "actual": -0.03936,
	      "expected": 0.23603
	    },
	    {
	      "cbsa": 41700,
	      "naics": "48",
	      "actual": -0.036,
	      "expected": 0.17785
	    },
	    {
	      "cbsa": 41700,
	      "naics": "51",
	      "actual": -0.19075,
	      "expected": 0.25471
	    },
	    {
	      "cbsa": 41700,
	      "naics": "52",
	      "actual": 0.20512,
	      "expected": 0.35399
	    },
	    {
	      "cbsa": 41700,
	      "naics": "53",
	      "actual": 0.11817,
	      "expected": 0.30946
	    },
	    {
	      "cbsa": 41700,
	      "naics": "54",
	      "actual": -0.18633,
	      "expected": 0.26161
	    },
	    {
	      "cbsa": 41700,
	      "naics": "55",
	      "actual": 0.96145,
	      "expected": 0.47235
	    },
	    {
	      "cbsa": 41700,
	      "naics": "61",
	      "actual": 0.80094,
	      "expected": 0.57866
	    },
	    {
	      "cbsa": 41700,
	      "naics": "62",
	      "actual": 0.06141,
	      "expected": 0.35472
	    },
	    {
	      "cbsa": 41700,
	      "naics": "71",
	      "actual": -0.04703,
	      "expected": 0.28444
	    },
	    {
	      "cbsa": 41700,
	      "naics": "72",
	      "actual": -0.0575,
	      "expected": 0.28793
	    },
	    {
	      "cbsa": 41700,
	      "naics": "81",
	      "actual": -0.031,
	      "expected": 0.27325
	    }
	  ],
	  "41740": [
	    {
	      "cbsa": 41740,
	      "naics": "00",
	      "actual": -0.02631,
	      "expected": 0.14752
	    },
	    {
	      "cbsa": 41740,
	      "naics": "22",
	      "actual": 0.24341,
	      "expected": 0.63475
	    },
	    {
	      "cbsa": 41740,
	      "naics": "23",
	      "actual": -0.11382,
	      "expected": 0.18989
	    },
	    {
	      "cbsa": 41740,
	      "naics": "31",
	      "actual": -0.33869,
	      "expected": 0.02057
	    },
	    {
	      "cbsa": 41740,
	      "naics": "42",
	      "actual": 0.1616,
	      "expected": 0.23197
	    },
	    {
	      "cbsa": 41740,
	      "naics": "44",
	      "actual": 0.01598,
	      "expected": 0.16342
	    },
	    {
	      "cbsa": 41740,
	      "naics": "48",
	      "actual": -0.21694,
	      "expected": 0.36684
	    },
	    {
	      "cbsa": 41740,
	      "naics": "51",
	      "actual": -0.15849,
	      "expected": 0.31264
	    },
	    {
	      "cbsa": 41740,
	      "naics": "52",
	      "actual": 0.22741,
	      "expected": 0.22145
	    },
	    {
	      "cbsa": 41740,
	      "naics": "53",
	      "actual": -0.00455,
	      "expected": 0.31445
	    },
	    {
	      "cbsa": 41740,
	      "naics": "54",
	      "actual": -0.05389,
	      "expected": 0.14197
	    },
	    {
	      "cbsa": 41740,
	      "naics": "55",
	      "actual": 0.29153,
	      "expected": 0.37065
	    },
	    {
	      "cbsa": 41740,
	      "naics": "61",
	      "actual": 0.16704,
	      "expected": 0.46663
	    },
	    {
	      "cbsa": 41740,
	      "naics": "62",
	      "actual": -0.05727,
	      "expected": 0.3359
	    },
	    {
	      "cbsa": 41740,
	      "naics": "71",
	      "actual": -0.59745,
	      "expected": 0.01937
	    },
	    {
	      "cbsa": 41740,
	      "naics": "72",
	      "actual": 0.03428,
	      "expected": 0.17152
	    },
	    {
	      "cbsa": 41740,
	      "naics": "81",
	      "actual": 0.37773,
	      "expected": 0.23944
	    }
	  ],
	  "41860": [
	    {
	      "cbsa": 41860,
	      "naics": "00",
	      "actual": 0.63606,
	      "expected": 0.31575
	    },
	    {
	      "cbsa": 41860,
	      "naics": "22",
	      "actual": 1.56438,
	      "expected": 0.3428
	    },
	    {
	      "cbsa": 41860,
	      "naics": "23",
	      "actual": 0.55362,
	      "expected": 0.19773
	    },
	    {
	      "cbsa": 41860,
	      "naics": "31",
	      "actual": 0.18737,
	      "expected": 0.23166
	    },
	    {
	      "cbsa": 41860,
	      "naics": "42",
	      "actual": 0.94574,
	      "expected": 0.26096
	    },
	    {
	      "cbsa": 41860,
	      "naics": "44",
	      "actual": 0.22056,
	      "expected": 0.21019
	    },
	    {
	      "cbsa": 41860,
	      "naics": "48",
	      "actual": -0.41073,
	      "expected": 0.08516
	    },
	    {
	      "cbsa": 41860,
	      "naics": "51",
	      "actual": 0.72072,
	      "expected": 0.34458
	    },
	    {
	      "cbsa": 41860,
	      "naics": "52",
	      "actual": 0.53958,
	      "expected": 0.23897
	    },
	    {
	      "cbsa": 41860,
	      "naics": "53",
	      "actual": 0.75952,
	      "expected": 0.26806
	    },
	    {
	      "cbsa": 41860,
	      "naics": "54",
	      "actual": 0.92376,
	      "expected": 0.30959
	    },
	    {
	      "cbsa": 41860,
	      "naics": "55",
	      "actual": 1.70057,
	      "expected": 0.43222
	    },
	    {
	      "cbsa": 41860,
	      "naics": "61",
	      "actual": 0.68343,
	      "expected": 0.33562
	    },
	    {
	      "cbsa": 41860,
	      "naics": "62",
	      "actual": -0.02448,
	      "expected": 0.35914
	    },
	    {
	      "cbsa": 41860,
	      "naics": "71",
	      "actual": 0.50715,
	      "expected": 0.24431
	    },
	    {
	      "cbsa": 41860,
	      "naics": "72",
	      "actual": 0.40077,
	      "expected": 0.24172
	    },
	    {
	      "cbsa": 41860,
	      "naics": "81",
	      "actual": 0.41963,
	      "expected": 0.33239
	    }
	  ],
	  "41940": [
	    {
	      "cbsa": 41940,
	      "naics": "00",
	      "actual": 0.45572,
	      "expected": 0.27434
	    },
	    {
	      "cbsa": 41940,
	      "naics": "22",
	      "actual": 0.55274,
	      "expected": 0.19385
	    },
	    {
	      "cbsa": 41940,
	      "naics": "23",
	      "actual": 0.28373,
	      "expected": 0.21173
	    },
	    {
	      "cbsa": 41940,
	      "naics": "31",
	      "actual": 0.76153,
	      "expected": 0.10864
	    },
	    {
	      "cbsa": 41940,
	      "naics": "42",
	      "actual": 0.22979,
	      "expected": 0.21375
	    },
	    {
	      "cbsa": 41940,
	      "naics": "44",
	      "actual": 0.42082,
	      "expected": 0.26309
	    },
	    {
	      "cbsa": 41940,
	      "naics": "48",
	      "actual": 0.04456,
	      "expected": 0.1754
	    },
	    {
	      "cbsa": 41940,
	      "naics": "51",
	      "actual": 0.53421,
	      "expected": 0.34966
	    },
	    {
	      "cbsa": 41940,
	      "naics": "52",
	      "actual": 0.66161,
	      "expected": 0.28156
	    },
	    {
	      "cbsa": 41940,
	      "naics": "53",
	      "actual": 0.5236,
	      "expected": 0.25318
	    },
	    {
	      "cbsa": 41940,
	      "naics": "54",
	      "actual": 0.65082,
	      "expected": 0.33787
	    },
	    {
	      "cbsa": 41940,
	      "naics": "55",
	      "actual": 0.05807,
	      "expected": 0.03462
	    },
	    {
	      "cbsa": 41940,
	      "naics": "61",
	      "actual": -0.17525,
	      "expected": 0.24534
	    },
	    {
	      "cbsa": 41940,
	      "naics": "62",
	      "actual": 0.10427,
	      "expected": 0.35236
	    },
	    {
	      "cbsa": 41940,
	      "naics": "71",
	      "actual": 0.29314,
	      "expected": 0.28856
	    },
	    {
	      "cbsa": 41940,
	      "naics": "72",
	      "actual": 0.40576,
	      "expected": 0.32503
	    },
	    {
	      "cbsa": 41940,
	      "naics": "81",
	      "actual": 0.13861,
	      "expected": 0.38251
	    }
	  ],
	  "42540": [
	    {
	      "cbsa": 42540,
	      "naics": "00",
	      "actual": -0.30743,
	      "expected": 0.07656
	    },
	    {
	      "cbsa": 42540,
	      "naics": "22",
	      "actual": -0.70862,
	      "expected": -0.09571
	    },
	    {
	      "cbsa": 42540,
	      "naics": "23",
	      "actual": -0.58775,
	      "expected": 0.0511
	    },
	    {
	      "cbsa": 42540,
	      "naics": "31",
	      "actual": -0.25718,
	      "expected": -0.02127
	    },
	    {
	      "cbsa": 42540,
	      "naics": "42",
	      "actual": -0.12723,
	      "expected": 0.04412
	    },
	    {
	      "cbsa": 42540,
	      "naics": "44",
	      "actual": -0.4101,
	      "expected": 0.04602
	    },
	    {
	      "cbsa": 42540,
	      "naics": "48",
	      "actual": -0.36139,
	      "expected": -0.01815
	    },
	    {
	      "cbsa": 42540,
	      "naics": "51",
	      "actual": -0.47494,
	      "expected": 0.00639
	    },
	    {
	      "cbsa": 42540,
	      "naics": "52",
	      "actual": -0.23466,
	      "expected": 0.06353
	    },
	    {
	      "cbsa": 42540,
	      "naics": "53",
	      "actual": -0.22027,
	      "expected": 0.03985
	    },
	    {
	      "cbsa": 42540,
	      "naics": "54",
	      "actual": -0.41668,
	      "expected": 0.05317
	    },
	    {
	      "cbsa": 42540,
	      "naics": "55",
	      "actual": -0.44772,
	      "expected": 0.08677
	    },
	    {
	      "cbsa": 42540,
	      "naics": "61",
	      "actual": -0.26119,
	      "expected": -0.03829
	    },
	    {
	      "cbsa": 42540,
	      "naics": "62",
	      "actual": -0.2351,
	      "expected": 0.10338
	    },
	    {
	      "cbsa": 42540,
	      "naics": "71",
	      "actual": -0.17711,
	      "expected": 0.21868
	    },
	    {
	      "cbsa": 42540,
	      "naics": "72",
	      "actual": -0.34734,
	      "expected": 0.02537
	    },
	    {
	      "cbsa": 42540,
	      "naics": "81",
	      "actual": -0.38184,
	      "expected": 0.04656
	    }
	  ],
	  "42660": [
	    {
	      "cbsa": 42660,
	      "naics": "00",
	      "actual": 0.28913,
	      "expected": 0.10114
	    },
	    {
	      "cbsa": 42660,
	      "naics": "22",
	      "actual": -0.43413,
	      "expected": 0.03631
	    },
	    {
	      "cbsa": 42660,
	      "naics": "23",
	      "actual": 0.18218,
	      "expected": 0.05649
	    },
	    {
	      "cbsa": 42660,
	      "naics": "31",
	      "actual": 0.99975,
	      "expected": 0.16841
	    },
	    {
	      "cbsa": 42660,
	      "naics": "42",
	      "actual": -0.05143,
	      "expected": 0.04282
	    },
	    {
	      "cbsa": 42660,
	      "naics": "44",
	      "actual": 0.80145,
	      "expected": 0.14262
	    },
	    {
	      "cbsa": 42660,
	      "naics": "48",
	      "actual": 0.17943,
	      "expected": 0.15321
	    },
	    {
	      "cbsa": 42660,
	      "naics": "51",
	      "actual": 0.30935,
	      "expected": 0.1976
	    },
	    {
	      "cbsa": 42660,
	      "naics": "52",
	      "actual": 0.05162,
	      "expected": 0.101
	    },
	    {
	      "cbsa": 42660,
	      "naics": "53",
	      "actual": 0.34582,
	      "expected": 0.15542
	    },
	    {
	      "cbsa": 42660,
	      "naics": "54",
	      "actual": 0.0982,
	      "expected": 0.12885
	    },
	    {
	      "cbsa": 42660,
	      "naics": "55",
	      "actual": 1.14676,
	      "expected": 0.22816
	    },
	    {
	      "cbsa": 42660,
	      "naics": "61",
	      "actual": 0.36121,
	      "expected": 0.19218
	    },
	    {
	      "cbsa": 42660,
	      "naics": "62",
	      "actual": 0.33773,
	      "expected": 0.24411
	    },
	    {
	      "cbsa": 42660,
	      "naics": "71",
	      "actual": 0.08287,
	      "expected": 0.12942
	    },
	    {
	      "cbsa": 42660,
	      "naics": "72",
	      "actual": 0.13239,
	      "expected": 0.10468
	    },
	    {
	      "cbsa": 42660,
	      "naics": "81",
	      "actual": -0.23756,
	      "expected": -0.13843
	    }
	  ],
	  "44060": [
	    {
	      "cbsa": 44060,
	      "naics": "00",
	      "actual": 0.06702,
	      "expected": 0.13248
	    },
	    {
	      "cbsa": 44060,
	      "naics": "22",
	      "actual": 0.19804,
	      "expected": -0.03662
	    },
	    {
	      "cbsa": 44060,
	      "naics": "23",
	      "actual": -0.19327,
	      "expected": -0.00145
	    },
	    {
	      "cbsa": 44060,
	      "naics": "31",
	      "actual": -0.187,
	      "expected": 0.079
	    },
	    {
	      "cbsa": 44060,
	      "naics": "42",
	      "actual": -0.10539,
	      "expected": 0.04348
	    },
	    {
	      "cbsa": 44060,
	      "naics": "44",
	      "actual": -0.19812,
	      "expected": 0.05762
	    },
	    {
	      "cbsa": 44060,
	      "naics": "48",
	      "actual": -0.1212,
	      "expected": 0.02305
	    },
	    {
	      "cbsa": 44060,
	      "naics": "51",
	      "actual": 0.13164,
	      "expected": -0.0594
	    },
	    {
	      "cbsa": 44060,
	      "naics": "52",
	      "actual": 0.08835,
	      "expected": 0.05232
	    },
	    {
	      "cbsa": 44060,
	      "naics": "53",
	      "actual": 0.23019,
	      "expected": 0.04162
	    },
	    {
	      "cbsa": 44060,
	      "naics": "54",
	      "actual": 0.05176,
	      "expected": 0.07705
	    },
	    {
	      "cbsa": 44060,
	      "naics": "55",
	      "actual": -0.33192,
	      "expected": -0.01649
	    },
	    {
	      "cbsa": 44060,
	      "naics": "61",
	      "actual": -0.01924,
	      "expected": 0.12997
	    },
	    {
	      "cbsa": 44060,
	      "naics": "62",
	      "actual": 0.07873,
	      "expected": 0.08571
	    },
	    {
	      "cbsa": 44060,
	      "naics": "71",
	      "actual": 0.00743,
	      "expected": 0.0219
	    },
	    {
	      "cbsa": 44060,
	      "naics": "72",
	      "actual": 0.08328,
	      "expected": 0.0488
	    },
	    {
	      "cbsa": 44060,
	      "naics": "81",
	      "actual": 0.09371,
	      "expected": 0.16272
	    }
	  ],
	  "44700": [
	    {
	      "cbsa": 44700,
	      "naics": "00",
	      "actual": -0.28082,
	      "expected": -0.01009
	    },
	    {
	      "cbsa": 44700,
	      "naics": "22",
	      "actual": 5.63408,
	      "expected": -0.12634
	    },
	    {
	      "cbsa": 44700,
	      "naics": "23",
	      "actual": -0.07348,
	      "expected": -0.00166
	    },
	    {
	      "cbsa": 44700,
	      "naics": "31",
	      "actual": -0.2239,
	      "expected": 0.05883
	    },
	    {
	      "cbsa": 44700,
	      "naics": "42",
	      "actual": 0.13618,
	      "expected": 0.04944
	    },
	    {
	      "cbsa": 44700,
	      "naics": "44",
	      "actual": -0.24755,
	      "expected": 0.06632
	    },
	    {
	      "cbsa": 44700,
	      "naics": "48",
	      "actual": -0.80024,
	      "expected": -0.2654
	    },
	    {
	      "cbsa": 44700,
	      "naics": "51",
	      "actual": -0.39896,
	      "expected": 0.15305
	    },
	    {
	      "cbsa": 44700,
	      "naics": "52",
	      "actual": -0.44812,
	      "expected": -0.00489
	    },
	    {
	      "cbsa": 44700,
	      "naics": "53",
	      "actual": -0.13949,
	      "expected": 0.04313
	    },
	    {
	      "cbsa": 44700,
	      "naics": "54",
	      "actual": -0.81811,
	      "expected": -0.34998
	    },
	    {
	      "cbsa": 44700,
	      "naics": "55",
	      "actual": 0.27468,
	      "expected": 0.06422
	    },
	    {
	      "cbsa": 44700,
	      "naics": "61",
	      "actual": -0.07995,
	      "expected": 0.17793
	    },
	    {
	      "cbsa": 44700,
	      "naics": "62",
	      "actual": 0.01518,
	      "expected": 0.27708
	    },
	    {
	      "cbsa": 44700,
	      "naics": "71",
	      "actual": -0.11602,
	      "expected": 0.03533
	    },
	    {
	      "cbsa": 44700,
	      "naics": "72",
	      "actual": -0.17255,
	      "expected": 0.05315
	    },
	    {
	      "cbsa": 44700,
	      "naics": "81",
	      "actual": -0.36921,
	      "expected": 0.11246
	    }
	  ],
	  "45060": [
	    {
	      "cbsa": 45060,
	      "naics": "00",
	      "actual": -0.17817,
	      "expected": 0.0165
	    },
	    {
	      "cbsa": 45060,
	      "naics": "22",
	      "actual": 35.27866,
	      "expected": 0.46617
	    },
	    {
	      "cbsa": 45060,
	      "naics": "23",
	      "actual": 0.09684,
	      "expected": -0.01615
	    },
	    {
	      "cbsa": 45060,
	      "naics": "31",
	      "actual": -0.68604,
	      "expected": 0.09188
	    },
	    {
	      "cbsa": 45060,
	      "naics": "42",
	      "actual": -0.22738,
	      "expected": -0.02137
	    },
	    {
	      "cbsa": 45060,
	      "naics": "44",
	      "actual": -0.09202,
	      "expected": -0.00317
	    },
	    {
	      "cbsa": 45060,
	      "naics": "48",
	      "actual": -0.19755,
	      "expected": -0.04536
	    },
	    {
	      "cbsa": 45060,
	      "naics": "51",
	      "actual": -0.4462,
	      "expected": -0.00399
	    },
	    {
	      "cbsa": 45060,
	      "naics": "52",
	      "actual": -0.54522,
	      "expected": 0.04232
	    },
	    {
	      "cbsa": 45060,
	      "naics": "53",
	      "actual": -0.15715,
	      "expected": -0.01781
	    },
	    {
	      "cbsa": 45060,
	      "naics": "54",
	      "actual": -0.24514,
	      "expected": -0.01729
	    },
	    {
	      "cbsa": 45060,
	      "naics": "55",
	      "actual": -0.15465,
	      "expected": -0.18022
	    },
	    {
	      "cbsa": 45060,
	      "naics": "61",
	      "actual": -0.30768,
	      "expected": 0.02087
	    },
	    {
	      "cbsa": 45060,
	      "naics": "62",
	      "actual": 0.29709,
	      "expected": 0.10695
	    },
	    {
	      "cbsa": 45060,
	      "naics": "71",
	      "actual": -0.30002,
	      "expected": -0.12569
	    },
	    {
	      "cbsa": 45060,
	      "naics": "72",
	      "actual": -0.22386,
	      "expected": 0.01385
	    },
	    {
	      "cbsa": 45060,
	      "naics": "81",
	      "actual": -0.25288,
	      "expected": 0.00629
	    }
	  ],
	  "45300": [
	    {
	      "cbsa": 45300,
	      "naics": "00",
	      "actual": 0.15708,
	      "expected": 0.16335
	    },
	    {
	      "cbsa": 45300,
	      "naics": "22",
	      "actual": -0.10986,
	      "expected": -0.02994
	    },
	    {
	      "cbsa": 45300,
	      "naics": "23",
	      "actual": 0.04039,
	      "expected": 0.10545
	    },
	    {
	      "cbsa": 45300,
	      "naics": "31",
	      "actual": -0.11965,
	      "expected": 0.03143
	    },
	    {
	      "cbsa": 45300,
	      "naics": "42",
	      "actual": 0.12743,
	      "expected": 0.09761
	    },
	    {
	      "cbsa": 45300,
	      "naics": "44",
	      "actual": 0.12302,
	      "expected": 0.13806
	    },
	    {
	      "cbsa": 45300,
	      "naics": "48",
	      "actual": -0.18773,
	      "expected": 0.00691
	    },
	    {
	      "cbsa": 45300,
	      "naics": "51",
	      "actual": 0.02833,
	      "expected": 0.09505
	    },
	    {
	      "cbsa": 45300,
	      "naics": "52",
	      "actual": 0.31175,
	      "expected": 0.13968
	    },
	    {
	      "cbsa": 45300,
	      "naics": "53",
	      "actual": -0.02143,
	      "expected": 0.1332
	    },
	    {
	      "cbsa": 45300,
	      "naics": "54",
	      "actual": 0.13233,
	      "expected": 0.15266
	    },
	    {
	      "cbsa": 45300,
	      "naics": "55",
	      "actual": 0.56533,
	      "expected": 0.19733
	    },
	    {
	      "cbsa": 45300,
	      "naics": "61",
	      "actual": 0.29792,
	      "expected": 0.22576
	    },
	    {
	      "cbsa": 45300,
	      "naics": "62",
	      "actual": 0.18677,
	      "expected": 0.19659
	    },
	    {
	      "cbsa": 45300,
	      "naics": "71",
	      "actual": 0.15348,
	      "expected": -0.00753
	    },
	    {
	      "cbsa": 45300,
	      "naics": "72",
	      "actual": 0.08929,
	      "expected": 0.17221
	    },
	    {
	      "cbsa": 45300,
	      "naics": "81",
	      "actual": 0.01286,
	      "expected": 0.12435
	    }
	  ],
	  "45780": [
	    {
	      "cbsa": 45780,
	      "naics": "00",
	      "actual": -0.19085,
	      "expected": 0.00456
	    },
	    {
	      "cbsa": 45780,
	      "naics": "22",
	      "actual": -0.75935,
	      "expected": -0.01513
	    },
	    {
	      "cbsa": 45780,
	      "naics": "23",
	      "actual": -0.38169,
	      "expected": -0.01714
	    },
	    {
	      "cbsa": 45780,
	      "naics": "31",
	      "actual": -0.23564,
	      "expected": -0.06694
	    },
	    {
	      "cbsa": 45780,
	      "naics": "42",
	      "actual": -0.29416,
	      "expected": -0.03305
	    },
	    {
	      "cbsa": 45780,
	      "naics": "44",
	      "actual": -0.04299,
	      "expected": -0.02139
	    },
	    {
	      "cbsa": 45780,
	      "naics": "48",
	      "actual": -0.21611,
	      "expected": -0.02389
	    },
	    {
	      "cbsa": 45780,
	      "naics": "51",
	      "actual": -0.17396,
	      "expected": -0.07253
	    },
	    {
	      "cbsa": 45780,
	      "naics": "52",
	      "actual": -0.26707,
	      "expected": 0.00052
	    },
	    {
	      "cbsa": 45780,
	      "naics": "53",
	      "actual": -0.20616,
	      "expected": 0.00444
	    },
	    {
	      "cbsa": 45780,
	      "naics": "54",
	      "actual": -0.32668,
	      "expected": -0.00821
	    },
	    {
	      "cbsa": 45780,
	      "naics": "55",
	      "actual": 0.33656,
	      "expected": 0.23891
	    },
	    {
	      "cbsa": 45780,
	      "naics": "61",
	      "actual": -0.31406,
	      "expected": -0.07535
	    },
	    {
	      "cbsa": 45780,
	      "naics": "62",
	      "actual": -0.18543,
	      "expected": 0.01778
	    },
	    {
	      "cbsa": 45780,
	      "naics": "71",
	      "actual": -0.0573,
	      "expected": 0.00331
	    },
	    {
	      "cbsa": 45780,
	      "naics": "72",
	      "actual": -0.17578,
	      "expected": -0.02453
	    },
	    {
	      "cbsa": 45780,
	      "naics": "81",
	      "actual": -0.44486,
	      "expected": -0.11
	    }
	  ],
	  "46060": [
	    {
	      "cbsa": 46060,
	      "naics": "00",
	      "actual": -0.24872,
	      "expected": 0.11861
	    },
	    {
	      "cbsa": 46060,
	      "naics": "22",
	      "actual": 1.51711,
	      "expected": -0.16345
	    },
	    {
	      "cbsa": 46060,
	      "naics": "23",
	      "actual": -0.22182,
	      "expected": -0.00693
	    },
	    {
	      "cbsa": 46060,
	      "naics": "31",
	      "actual": -0.04473,
	      "expected": -0.15451
	    },
	    {
	      "cbsa": 46060,
	      "naics": "42",
	      "actual": -0.16937,
	      "expected": -0.01606
	    },
	    {
	      "cbsa": 46060,
	      "naics": "44",
	      "actual": -0.2214,
	      "expected": 0.04569
	    },
	    {
	      "cbsa": 46060,
	      "naics": "48",
	      "actual": -0.28856,
	      "expected": -0.02372
	    },
	    {
	      "cbsa": 46060,
	      "naics": "51",
	      "actual": -0.3992,
	      "expected": 0.03638
	    },
	    {
	      "cbsa": 46060,
	      "naics": "52",
	      "actual": -0.47252,
	      "expected": 0.24133
	    },
	    {
	      "cbsa": 46060,
	      "naics": "53",
	      "actual": 0.38136,
	      "expected": 0.00544
	    },
	    {
	      "cbsa": 46060,
	      "naics": "54",
	      "actual": -0.11227,
	      "expected": 0.05489
	    },
	    {
	      "cbsa": 46060,
	      "naics": "55",
	      "actual": -0.0287,
	      "expected": -0.04243
	    },
	    {
	      "cbsa": 46060,
	      "naics": "61",
	      "actual": -0.15222,
	      "expected": 0.03514
	    },
	    {
	      "cbsa": 46060,
	      "naics": "62",
	      "actual": -0.42588,
	      "expected": 0.10656
	    },
	    {
	      "cbsa": 46060,
	      "naics": "71",
	      "actual": 0.29003,
	      "expected": 0.01965
	    },
	    {
	      "cbsa": 46060,
	      "naics": "72",
	      "actual": -0.27096,
	      "expected": 0.05875
	    },
	    {
	      "cbsa": 46060,
	      "naics": "81",
	      "actual": -0.10864,
	      "expected": 0.00598
	    }
	  ],
	  "46140": [
	    {
	      "cbsa": 46140,
	      "naics": "00",
	      "actual": -0.05748,
	      "expected": 0.15772
	    },
	    {
	      "cbsa": 46140,
	      "naics": "22",
	      "actual": 0.49397,
	      "expected": 0.16775
	    },
	    {
	      "cbsa": 46140,
	      "naics": "23",
	      "actual": -0.26674,
	      "expected": 0.07631
	    },
	    {
	      "cbsa": 46140,
	      "naics": "31",
	      "actual": -0.29007,
	      "expected": 0.07188
	    },
	    {
	      "cbsa": 46140,
	      "naics": "42",
	      "actual": -0.18716,
	      "expected": 0.10032
	    },
	    {
	      "cbsa": 46140,
	      "naics": "44",
	      "actual": 0.06482,
	      "expected": 0.13899
	    },
	    {
	      "cbsa": 46140,
	      "naics": "48",
	      "actual": 0.30916,
	      "expected": 0.09878
	    },
	    {
	      "cbsa": 46140,
	      "naics": "51",
	      "actual": -0.11827,
	      "expected": 0.14073
	    },
	    {
	      "cbsa": 46140,
	      "naics": "52",
	      "actual": -0.18242,
	      "expected": 0.12049
	    },
	    {
	      "cbsa": 46140,
	      "naics": "53",
	      "actual": -0.17297,
	      "expected": 0.06215
	    },
	    {
	      "cbsa": 46140,
	      "naics": "54",
	      "actual": -0.18863,
	      "expected": 0.11094
	    },
	    {
	      "cbsa": 46140,
	      "naics": "55",
	      "actual": -0.02637,
	      "expected": 0.06368
	    },
	    {
	      "cbsa": 46140,
	      "naics": "61",
	      "actual": -0.19139,
	      "expected": 0.11232
	    },
	    {
	      "cbsa": 46140,
	      "naics": "62",
	      "actual": -0.06962,
	      "expected": 0.18192
	    },
	    {
	      "cbsa": 46140,
	      "naics": "71",
	      "actual": 0.08336,
	      "expected": 0.07995
	    },
	    {
	      "cbsa": 46140,
	      "naics": "72",
	      "actual": 0.07052,
	      "expected": 0.13407
	    },
	    {
	      "cbsa": 46140,
	      "naics": "81",
	      "actual": -0.07232,
	      "expected": 0.13249
	    }
	  ],
	  "46520": [
	    {
	      "cbsa": 46520,
	      "naics": "00",
	      "actual": 0.55552,
	      "expected": 0.09714
	    },
	    {
	      "cbsa": 46520,
	      "naics": "22",
	      "actual": 0.31102,
	      "expected": -0.01874
	    },
	    {
	      "cbsa": 46520,
	      "naics": "23",
	      "actual": 1.06079,
	      "expected": 0.18775
	    },
	    {
	      "cbsa": 46520,
	      "naics": "31",
	      "actual": 0.57437,
	      "expected": 0.07407
	    },
	    {
	      "cbsa": 46520,
	      "naics": "42",
	      "actual": 0.08593,
	      "expected": 0.07386
	    },
	    {
	      "cbsa": 46520,
	      "naics": "44",
	      "actual": 1.86647,
	      "expected": 0.18485
	    },
	    {
	      "cbsa": 46520,
	      "naics": "48",
	      "actual": 0.2643,
	      "expected": -0.03071
	    },
	    {
	      "cbsa": 46520,
	      "naics": "51",
	      "actual": 0.25392,
	      "expected": -0.00676
	    },
	    {
	      "cbsa": 46520,
	      "naics": "52",
	      "actual": 0.12701,
	      "expected": 0.03496
	    },
	    {
	      "cbsa": 46520,
	      "naics": "53",
	      "actual": 0.6362,
	      "expected": 0.02926
	    },
	    {
	      "cbsa": 46520,
	      "naics": "54",
	      "actual": 0.05668,
	      "expected": 0.04471
	    },
	    {
	      "cbsa": 46520,
	      "naics": "55",
	      "actual": 0.0649,
	      "expected": 0.01656
	    },
	    {
	      "cbsa": 46520,
	      "naics": "61",
	      "actual": -0.28979,
	      "expected": 0.0319
	    },
	    {
	      "cbsa": 46520,
	      "naics": "62",
	      "actual": 0.26704,
	      "expected": 0.1914
	    },
	    {
	      "cbsa": 46520,
	      "naics": "71",
	      "actual": 0.11022,
	      "expected": 0.0385
	    },
	    {
	      "cbsa": 46520,
	      "naics": "72",
	      "actual": 0.58677,
	      "expected": 0.13041
	    },
	    {
	      "cbsa": 46520,
	      "naics": "81",
	      "actual": 0.77649,
	      "expected": 0.08273
	    }
	  ],
	  "47260": [
	    {
	      "cbsa": 47260,
	      "naics": "00",
	      "actual": 0.00172,
	      "expected": 0.00675
	    },
	    {
	      "cbsa": 47260,
	      "naics": "22",
	      "actual": -0.24854,
	      "expected": -0.07664
	    },
	    {
	      "cbsa": 47260,
	      "naics": "23",
	      "actual": -0.11631,
	      "expected": 0.00418
	    },
	    {
	      "cbsa": 47260,
	      "naics": "31",
	      "actual": 0.30139,
	      "expected": -0.08078
	    },
	    {
	      "cbsa": 47260,
	      "naics": "42",
	      "actual": -0.09994,
	      "expected": -0.00267
	    },
	    {
	      "cbsa": 47260,
	      "naics": "44",
	      "actual": -0.04838,
	      "expected": 0.03457
	    },
	    {
	      "cbsa": 47260,
	      "naics": "48",
	      "actual": 0.25814,
	      "expected": -0.06193
	    },
	    {
	      "cbsa": 47260,
	      "naics": "51",
	      "actual": 0.03562,
	      "expected": -0.03757
	    },
	    {
	      "cbsa": 47260,
	      "naics": "52",
	      "actual": -0.17222,
	      "expected": -0.00204
	    },
	    {
	      "cbsa": 47260,
	      "naics": "53",
	      "actual": 0.00625,
	      "expected": 0.0194
	    },
	    {
	      "cbsa": 47260,
	      "naics": "54",
	      "actual": -0.0861,
	      "expected": 0.02784
	    },
	    {
	      "cbsa": 47260,
	      "naics": "55",
	      "actual": -0.21935,
	      "expected": 0.01013
	    },
	    {
	      "cbsa": 47260,
	      "naics": "61",
	      "actual": 0.07779,
	      "expected": 0.17282
	    },
	    {
	      "cbsa": 47260,
	      "naics": "62",
	      "actual": -0.09809,
	      "expected": -0.04696
	    },
	    {
	      "cbsa": 47260,
	      "naics": "71",
	      "actual": -0.0435,
	      "expected": 0.09227
	    },
	    {
	      "cbsa": 47260,
	      "naics": "72",
	      "actual": -0.10472,
	      "expected": 0.03776
	    },
	    {
	      "cbsa": 47260,
	      "naics": "81",
	      "actual": -0.06584,
	      "expected": 0.02791
	    }
	  ],
	  "48620": [
	    {
	      "cbsa": 48620,
	      "naics": "00",
	      "actual": -0.20476,
	      "expected": 0.06483
	    },
	    {
	      "cbsa": 48620,
	      "naics": "22",
	      "actual": -0.60333,
	      "expected": 0.26224
	    },
	    {
	      "cbsa": 48620,
	      "naics": "23",
	      "actual": -0.18093,
	      "expected": 0.04638
	    },
	    {
	      "cbsa": 48620,
	      "naics": "31",
	      "actual": -0.03662,
	      "expected": -0.05876
	    },
	    {
	      "cbsa": 48620,
	      "naics": "42",
	      "actual": -0.21965,
	      "expected": 0.09104
	    },
	    {
	      "cbsa": 48620,
	      "naics": "44",
	      "actual": -0.0451,
	      "expected": 0.08438
	    },
	    {
	      "cbsa": 48620,
	      "naics": "48",
	      "actual": 0.06673,
	      "expected": 0.04093
	    },
	    {
	      "cbsa": 48620,
	      "naics": "51",
	      "actual": -0.56114,
	      "expected": 0.14035
	    },
	    {
	      "cbsa": 48620,
	      "naics": "52",
	      "actual": -0.37347,
	      "expected": 0.03197
	    },
	    {
	      "cbsa": 48620,
	      "naics": "53",
	      "actual": -0.18159,
	      "expected": 0.08725
	    },
	    {
	      "cbsa": 48620,
	      "naics": "54",
	      "actual": -0.2645,
	      "expected": 0.04059
	    },
	    {
	      "cbsa": 48620,
	      "naics": "55",
	      "actual": -0.27576,
	      "expected": 0.03189
	    },
	    {
	      "cbsa": 48620,
	      "naics": "61",
	      "actual": -0.10286,
	      "expected": 0.15723
	    },
	    {
	      "cbsa": 48620,
	      "naics": "62",
	      "actual": -0.31656,
	      "expected": 0.11199
	    },
	    {
	      "cbsa": 48620,
	      "naics": "71",
	      "actual": 0.06432,
	      "expected": 0.19523
	    },
	    {
	      "cbsa": 48620,
	      "naics": "72",
	      "actual": -0.06003,
	      "expected": 0.07769
	    },
	    {
	      "cbsa": 48620,
	      "naics": "81",
	      "actual": -0.34526,
	      "expected": 0.01054
	    }
	  ],
	  "49180": [
	    {
	      "cbsa": 49180,
	      "naics": "00",
	      "actual": -0.19709,
	      "expected": 0.14277
	    },
	    {
	      "cbsa": 49180,
	      "naics": "22",
	      "actual": -0.7784,
	      "expected": -0.06821
	    },
	    {
	      "cbsa": 49180,
	      "naics": "23",
	      "actual": -0.50248,
	      "expected": 0.01514
	    },
	    {
	      "cbsa": 49180,
	      "naics": "31",
	      "actual": -0.75395,
	      "expected": 0.08358
	    },
	    {
	      "cbsa": 49180,
	      "naics": "42",
	      "actual": -0.39323,
	      "expected": -0.00011
	    },
	    {
	      "cbsa": 49180,
	      "naics": "44",
	      "actual": -0.11004,
	      "expected": 0.08398
	    },
	    {
	      "cbsa": 49180,
	      "naics": "48",
	      "actual": -0.66018,
	      "expected": 0.15727
	    },
	    {
	      "cbsa": 49180,
	      "naics": "51",
	      "actual": -0.28433,
	      "expected": -0.17931
	    },
	    {
	      "cbsa": 49180,
	      "naics": "52",
	      "actual": -0.42186,
	      "expected": -0.07061
	    },
	    {
	      "cbsa": 49180,
	      "naics": "53",
	      "actual": -0.19675,
	      "expected": -0.04564
	    },
	    {
	      "cbsa": 49180,
	      "naics": "54",
	      "actual": 0.06389,
	      "expected": 0.06406
	    },
	    {
	      "cbsa": 49180,
	      "naics": "55",
	      "actual": 0.21102,
	      "expected": 0.09737
	    },
	    {
	      "cbsa": 49180,
	      "naics": "61",
	      "actual": -0.3209,
	      "expected": 0.13548
	    },
	    {
	      "cbsa": 49180,
	      "naics": "62",
	      "actual": -0.11073,
	      "expected": 0.11877
	    },
	    {
	      "cbsa": 49180,
	      "naics": "71",
	      "actual": 0.16801,
	      "expected": 0.09666
	    },
	    {
	      "cbsa": 49180,
	      "naics": "72",
	      "actual": -0.07778,
	      "expected": 0.07533
	    },
	    {
	      "cbsa": 49180,
	      "naics": "81",
	      "actual": -0.3738,
	      "expected": -0.01357
	    }
	  ],
	  "49660": [
	    {
	      "cbsa": 49660,
	      "naics": "00",
	      "actual": -0.53765,
	      "expected": -0.10252
	    },
	    {
	      "cbsa": 49660,
	      "naics": "22",
	      "actual": -0.54322,
	      "expected": -0.13761
	    },
	    {
	      "cbsa": 49660,
	      "naics": "23",
	      "actual": -0.3246,
	      "expected": -0.08402
	    },
	    {
	      "cbsa": 49660,
	      "naics": "31",
	      "actual": -0.79376,
	      "expected": -0.12646
	    },
	    {
	      "cbsa": 49660,
	      "naics": "42",
	      "actual": -0.27999,
	      "expected": -0.09443
	    },
	    {
	      "cbsa": 49660,
	      "naics": "44",
	      "actual": -0.27576,
	      "expected": -0.06475
	    },
	    {
	      "cbsa": 49660,
	      "naics": "48",
	      "actual": -0.48611,
	      "expected": -0.11361
	    },
	    {
	      "cbsa": 49660,
	      "naics": "51",
	      "actual": -0.14431,
	      "expected": -0.20715
	    },
	    {
	      "cbsa": 49660,
	      "naics": "52",
	      "actual": -0.45686,
	      "expected": -0.04888
	    },
	    {
	      "cbsa": 49660,
	      "naics": "53",
	      "actual": -0.21167,
	      "expected": -0.14982
	    },
	    {
	      "cbsa": 49660,
	      "naics": "54",
	      "actual": -0.28074,
	      "expected": -0.07754
	    },
	    {
	      "cbsa": 49660,
	      "naics": "55",
	      "actual": -0.52024,
	      "expected": -0.16592
	    },
	    {
	      "cbsa": 49660,
	      "naics": "61",
	      "actual": -0.351,
	      "expected": -0.07104
	    },
	    {
	      "cbsa": 49660,
	      "naics": "62",
	      "actual": -0.38098,
	      "expected": -0.00032
	    },
	    {
	      "cbsa": 49660,
	      "naics": "71",
	      "actual": -0.2569,
	      "expected": -0.10295
	    },
	    {
	      "cbsa": 49660,
	      "naics": "72",
	      "actual": -0.19672,
	      "expected": -0.08129
	    },
	    {
	      "cbsa": 49660,
	      "naics": "81",
	      "actual": -0.31432,
	      "expected": -0.0561
	    }
	  ],
	  "99999": [
	    {
	      "cbsa": 99999,
	      "naics": "00",
	      "actual": 0.29531,
	      "expected": 0.18391
	    },
	    {
	      "cbsa": 99999,
	      "naics": "22",
	      "actual": 0.30418,
	      "expected": 0.38046
	    },
	    {
	      "cbsa": 99999,
	      "naics": "23",
	      "actual": 0.41577,
	      "expected": 0.30943
	    },
	    {
	      "cbsa": 99999,
	      "naics": "31",
	      "actual": -0.02076,
	      "expected": 0.09554
	    },
	    {
	      "cbsa": 99999,
	      "naics": "42",
	      "actual": 0.24029,
	      "expected": 0.10022
	    },
	    {
	      "cbsa": 99999,
	      "naics": "44",
	      "actual": 0.33298,
	      "expected": 0.18353
	    },
	    {
	      "cbsa": 99999,
	      "naics": "48",
	      "actual": -0.27179,
	      "expected": 0.12018
	    },
	    {
	      "cbsa": 99999,
	      "naics": "51",
	      "actual": 0.59761,
	      "expected": 0.22398
	    },
	    {
	      "cbsa": 99999,
	      "naics": "52",
	      "actual": 0.19183,
	      "expected": 0.10408
	    },
	    {
	      "cbsa": 99999,
	      "naics": "53",
	      "actual": 0.3152,
	      "expected": 0.19911
	    },
	    {
	      "cbsa": 99999,
	      "naics": "54",
	      "actual": 0.35241,
	      "expected": 0.15885
	    },
	    {
	      "cbsa": 99999,
	      "naics": "55",
	      "actual": 0.20639,
	      "expected": 0.12037
	    },
	    {
	      "cbsa": 99999,
	      "naics": "61",
	      "actual": 0.07727,
	      "expected": 0.15037
	    },
	    {
	      "cbsa": 99999,
	      "naics": "62",
	      "actual": 0.20827,
	      "expected": 0.18858
	    },
	    {
	      "cbsa": 99999,
	      "naics": "71",
	      "actual": 0.25551,
	      "expected": 0.27314
	    },
	    {
	      "cbsa": 99999,
	      "naics": "72",
	      "actual": 0.32915,
	      "expected": 0.25003
	    },
	    {
	      "cbsa": 99999,
	      "naics": "81",
	      "actual": 0.22958,
	      "expected": 0.25427
	    }
	  ]
	}
	;
	var sector_counts = 
	[
	  {
	    "naics": "00",
	    "p": 48,
	    "ge": 19,
	    "n": 94
	  },
	  {
	    "naics": "22",
	    "p": 39,
	    "ge": 30,
	    "n": 94
	  },
	  {
	    "naics": "23",
	    "p": 44,
	    "ge": 29,
	    "n": 94
	  },
	  {
	    "naics": "31",
	    "p": 20,
	    "ge": 16,
	    "n": 94
	  },
	  {
	    "naics": "42",
	    "p": 34,
	    "ge": 17,
	    "n": 94
	  },
	  {
	    "naics": "44",
	    "p": 34,
	    "ge": 12,
	    "n": 94
	  },
	  {
	    "naics": "48",
	    "p": 22,
	    "ge": 12,
	    "n": 94
	  },
	  {
	    "naics": "51",
	    "p": 33,
	    "ge": 22,
	    "n": 94
	  },
	  {
	    "naics": "52",
	    "p": 42,
	    "ge": 25,
	    "n": 94
	  },
	  {
	    "naics": "53",
	    "p": 47,
	    "ge": 26,
	    "n": 94
	  },
	  {
	    "naics": "54",
	    "p": 37,
	    "ge": 18,
	    "n": 94
	  },
	  {
	    "naics": "55",
	    "p": 50,
	    "ge": 36,
	    "n": 94
	  },
	  {
	    "naics": "61",
	    "p": 42,
	    "ge": 22,
	    "n": 94
	  },
	  {
	    "naics": "62",
	    "p": 47,
	    "ge": 25,
	    "n": 94
	  },
	  {
	    "naics": "71",
	    "p": 56,
	    "ge": 37,
	    "n": 94
	  },
	  {
	    "naics": "72",
	    "p": 47,
	    "ge": 20,
	    "n": 94
	  },
	  {
	    "naics": "81",
	    "p": 30,
	    "ge": 11,
	    "n": 94
	  }
	]
	;
	var sector_names = 
	{
	    "00": "Total",
	    "11": "Agriculture",
	    "21": "Mining",
	    "22": "Utilities",
	    "23": "Construction",
	    "31": "Manufacturing",
	    "42": "Wholesale",
	    "44": "Retail",
	    "48": "Logistics",
	    "51": "Information",
	    "52": "Finance",
	    "53": "Real Estate",
	    "54": "Professional",
	    "55": "Headquarters",
	    "61": "Education",
	    "62": "Health Care",
	    "71": "Arts/Entertainment",
	    "72": "Hospitality",
	    "81": "Local Services"
	  }
	;
	var county_data = 
	{
	  "10420": [
	    {
	      "cbsa": 10420,
	      "type": "ES",
	      "actual": 0.0329,
	      "expected": 0.014
	    },
	    {
	      "cbsa": 10420,
	      "type": "MS",
	      "actual": -0.21291,
	      "expected": 0.15048
	    },
	    {
	      "cbsa": 10420,
	      "type": "TOTAL",
	      "actual": -0.21292,
	      "expected": 0.15264
	    }
	  ],
	  "10580": [
	    {
	      "cbsa": 10580,
	      "type": "ES",
	      "actual": 0.12677,
	      "expected": 0.17953
	    },
	    {
	      "cbsa": 10580,
	      "type": "EX",
	      "actual": -0.45242,
	      "expected": 0.04656
	    },
	    {
	      "cbsa": 10580,
	      "type": "MS",
	      "actual": 0.54402,
	      "expected": 0.1875
	    },
	    {
	      "cbsa": 10580,
	      "type": "TOTAL",
	      "actual": 0.43341,
	      "expected": 0.1834
	    }
	  ],
	  "10740": [
	    {
	      "cbsa": 10740,
	      "type": "ES",
	      "actual": -0.9011,
	      "expected": 0.04097
	    },
	    {
	      "cbsa": 10740,
	      "type": "EX",
	      "actual": -0.6032,
	      "expected": 0.1955
	    },
	    {
	      "cbsa": 10740,
	      "type": "MS",
	      "actual": -0.07338,
	      "expected": 0.12296
	    },
	    {
	      "cbsa": 10740,
	      "type": "TOTAL",
	      "actual": -0.21248,
	      "expected": 0.10261
	    }
	  ],
	  "10900": [
	    {
	      "cbsa": 10900,
	      "type": "ES",
	      "actual": -0.45279,
	      "expected": 0.01939
	    },
	    {
	      "cbsa": 10900,
	      "type": "MS",
	      "actual": 0.07358,
	      "expected": 0.1807
	    },
	    {
	      "cbsa": 10900,
	      "type": "TOTAL",
	      "actual": 0.04818,
	      "expected": 0.17142
	    }
	  ],
	  "12060": [
	    {
	      "cbsa": 12060,
	      "type": "ES",
	      "actual": 0.29475,
	      "expected": 0.1604
	    },
	    {
	      "cbsa": 12060,
	      "type": "EX",
	      "actual": 0.2928,
	      "expected": 0.27221
	    },
	    {
	      "cbsa": 12060,
	      "type": "MS",
	      "actual": 0.07539,
	      "expected": 0.1049
	    },
	    {
	      "cbsa": 12060,
	      "type": "TOTAL",
	      "actual": 0.19815,
	      "expected": 0.24082
	    },
	    {
	      "cbsa": 12060,
	      "type": "UC",
	      "actual": 0.21406,
	      "expected": 0.23274
	    }
	  ],
	  "12260": [
	    {
	      "cbsa": 12260,
	      "type": "ES",
	      "actual": -0.24845,
	      "expected": 0.09479
	    },
	    {
	      "cbsa": 12260,
	      "type": "EX",
	      "actual": 0.12054,
	      "expected": 0.18554
	    },
	    {
	      "cbsa": 12260,
	      "type": "TOTAL",
	      "actual": -0.00191,
	      "expected": 0.17124
	    }
	  ],
	  "12420": [
	    {
	      "cbsa": 12420,
	      "type": "ES",
	      "actual": 0.41916,
	      "expected": 0.53192
	    },
	    {
	      "cbsa": 12420,
	      "type": "EX",
	      "actual": -0.39861,
	      "expected": 0.30361
	    },
	    {
	      "cbsa": 12420,
	      "type": "TOTAL",
	      "actual": 0.39553,
	      "expected": 0.52626
	    }
	  ],
	  "12540": [
	    {
	      "cbsa": 12540,
	      "type": "ES",
	      "actual": 0.04182,
	      "expected": 0.24659
	    },
	    {
	      "cbsa": 12540,
	      "type": "TOTAL",
	      "actual": 0.04182,
	      "expected": 0.24659
	    }
	  ],
	  "12580": [
	    {
	      "cbsa": 12580,
	      "type": "ES",
	      "actual": 0.32133,
	      "expected": 0.25899
	    },
	    {
	      "cbsa": 12580,
	      "type": "EX",
	      "actual": 0.38918,
	      "expected": 0.12622
	    },
	    {
	      "cbsa": 12580,
	      "type": "MS",
	      "actual": 0.02207,
	      "expected": 0.09651
	    },
	    {
	      "cbsa": 12580,
	      "type": "TOTAL",
	      "actual": -0.01017,
	      "expected": 0.1654
	    },
	    {
	      "cbsa": 12580,
	      "type": "UC",
	      "actual": 0.00772,
	      "expected": 0.16167
	    }
	  ],
	  "12940": [
	    {
	      "cbsa": 12940,
	      "type": "ES",
	      "actual": 0.46106,
	      "expected": 0.21282
	    },
	    {
	      "cbsa": 12940,
	      "type": "EX",
	      "actual": -0.16061,
	      "expected": 0.11028
	    },
	    {
	      "cbsa": 12940,
	      "type": "MS",
	      "actual": -0.01159,
	      "expected": 0.174
	    },
	    {
	      "cbsa": 12940,
	      "type": "TOTAL",
	      "actual": -0.04436,
	      "expected": 0.17809
	    }
	  ],
	  "13820": [
	    {
	      "cbsa": 13820,
	      "type": "ES",
	      "actual": 0.40607,
	      "expected": 0.0751
	    },
	    {
	      "cbsa": 13820,
	      "type": "EX",
	      "actual": -0.09428,
	      "expected": 0.06393
	    },
	    {
	      "cbsa": 13820,
	      "type": "MS",
	      "actual": -0.16376,
	      "expected": 0.04392
	    },
	    {
	      "cbsa": 13820,
	      "type": "TOTAL",
	      "actual": -0.15149,
	      "expected": 0.04801
	    }
	  ],
	  "14260": [
	    {
	      "cbsa": 14260,
	      "type": "ES",
	      "actual": -0.37999,
	      "expected": 0.13665
	    },
	    {
	      "cbsa": 14260,
	      "type": "EX",
	      "actual": 0.12402,
	      "expected": 0.28576
	    },
	    {
	      "cbsa": 14260,
	      "type": "MS",
	      "actual": 0.29378,
	      "expected": 0.33976
	    },
	    {
	      "cbsa": 14260,
	      "type": "TOTAL",
	      "actual": 0.21377,
	      "expected": 0.32161
	    }
	  ],
	  "14860": [
	    {
	      "cbsa": 14860,
	      "type": "MS",
	      "actual": -0.06212,
	      "expected": 0.06834
	    },
	    {
	      "cbsa": 14860,
	      "type": "TOTAL",
	      "actual": -0.06212,
	      "expected": 0.06834
	    }
	  ],
	  "15380": [
	    {
	      "cbsa": 15380,
	      "type": "ES",
	      "actual": 0.02333,
	      "expected": 0.05267
	    },
	    {
	      "cbsa": 15380,
	      "type": "MS",
	      "actual": -0.13313,
	      "expected": 0.17327
	    },
	    {
	      "cbsa": 15380,
	      "type": "TOTAL",
	      "actual": -0.12852,
	      "expected": 0.17207
	    }
	  ],
	  "15980": [
	    {
	      "cbsa": 15980,
	      "type": "MS",
	      "actual": -0.31102,
	      "expected": -0.02583
	    },
	    {
	      "cbsa": 15980,
	      "type": "TOTAL",
	      "actual": -0.31102,
	      "expected": -0.02583
	    }
	  ],
	  "16700": [
	    {
	      "cbsa": 16700,
	      "type": "ES",
	      "actual": -0.111,
	      "expected": 0.14353
	    },
	    {
	      "cbsa": 16700,
	      "type": "MS",
	      "actual": 0.03662,
	      "expected": 0.23165
	    },
	    {
	      "cbsa": 16700,
	      "type": "TOTAL",
	      "actual": 0.02588,
	      "expected": 0.23265
	    }
	  ],
	  "16740": [
	    {
	      "cbsa": 16740,
	      "type": "ES",
	      "actual": 0.04214,
	      "expected": 0.30634
	    },
	    {
	      "cbsa": 16740,
	      "type": "EX",
	      "actual": -0.27902,
	      "expected": 0.19721
	    },
	    {
	      "cbsa": 16740,
	      "type": "MS",
	      "actual": 0.40669,
	      "expected": 0.46519
	    },
	    {
	      "cbsa": 16740,
	      "type": "TOTAL",
	      "actual": 0.44242,
	      "expected": 0.49428
	    }
	  ],
	  "16860": [
	    {
	      "cbsa": 16860,
	      "type": "ES",
	      "actual": -0.4846,
	      "expected": 0.14333
	    },
	    {
	      "cbsa": 16860,
	      "type": "EX",
	      "actual": -0.23216,
	      "expected": -0.02301
	    },
	    {
	      "cbsa": 16860,
	      "type": "MS",
	      "actual": -0.27358,
	      "expected": -0.05454
	    },
	    {
	      "cbsa": 16860,
	      "type": "TOTAL",
	      "actual": -0.26323,
	      "expected": -0.04552
	    }
	  ],
	  "16980": [
	    {
	      "cbsa": 16980,
	      "type": "ES",
	      "actual": -0.09409,
	      "expected": 0.12251
	    },
	    {
	      "cbsa": 16980,
	      "type": "EX",
	      "actual": -0.09563,
	      "expected": 0.19715
	    },
	    {
	      "cbsa": 16980,
	      "type": "MS",
	      "actual": 0.06539,
	      "expected": 0.13651
	    },
	    {
	      "cbsa": 16980,
	      "type": "TOTAL",
	      "actual": 0.20434,
	      "expected": 0.13376
	    },
	    {
	      "cbsa": 16980,
	      "type": "UC",
	      "actual": 0.22635,
	      "expected": 0.12996
	    }
	  ],
	  "17140": [
	    {
	      "cbsa": 17140,
	      "type": "ES",
	      "actual": 0.33508,
	      "expected": 0.04078
	    },
	    {
	      "cbsa": 17140,
	      "type": "EX",
	      "actual": -0.3581,
	      "expected": 0.0272
	    },
	    {
	      "cbsa": 17140,
	      "type": "MS",
	      "actual": -0.2562,
	      "expected": 0.03342
	    },
	    {
	      "cbsa": 17140,
	      "type": "TOTAL",
	      "actual": 0.07408,
	      "expected": 0.16494
	    },
	    {
	      "cbsa": 17140,
	      "type": "UC",
	      "actual": 0.16453,
	      "expected": 0.17193
	    }
	  ],
	  "17460": [
	    {
	      "cbsa": 17460,
	      "type": "ES",
	      "actual": -0.17849,
	      "expected": -0.00803
	    },
	    {
	      "cbsa": 17460,
	      "type": "EX",
	      "actual": -0.41825,
	      "expected": -0.21489
	    },
	    {
	      "cbsa": 17460,
	      "type": "MS",
	      "actual": -0.20524,
	      "expected": -0.01289
	    },
	    {
	      "cbsa": 17460,
	      "type": "TOTAL",
	      "actual": 0.29741,
	      "expected": 0.03878
	    },
	    {
	      "cbsa": 17460,
	      "type": "UC",
	      "actual": 0.33015,
	      "expected": 0.03884
	    }
	  ],
	  "17820": [
	    {
	      "cbsa": 17820,
	      "type": "ES",
	      "actual": -0.05602,
	      "expected": 0.09092
	    },
	    {
	      "cbsa": 17820,
	      "type": "EX",
	      "actual": 0.91322,
	      "expected": 0.13556
	    },
	    {
	      "cbsa": 17820,
	      "type": "TOTAL",
	      "actual": -0.05474,
	      "expected": 0.08756
	    }
	  ],
	  "17900": [
	    {
	      "cbsa": 17900,
	      "type": "ES",
	      "actual": 0.03847,
	      "expected": 0.11856
	    },
	    {
	      "cbsa": 17900,
	      "type": "EX",
	      "actual": -0.44474,
	      "expected": 0.137
	    },
	    {
	      "cbsa": 17900,
	      "type": "MS",
	      "actual": -0.09303,
	      "expected": 0.1095
	    },
	    {
	      "cbsa": 17900,
	      "type": "TOTAL",
	      "actual": -0.13207,
	      "expected": 0.11255
	    }
	  ],
	  "18140": [
	    {
	      "cbsa": 18140,
	      "type": "ES",
	      "actual": 0.90156,
	      "expected": 0.1275
	    },
	    {
	      "cbsa": 18140,
	      "type": "EX",
	      "actual": -0.22904,
	      "expected": -0.03235
	    },
	    {
	      "cbsa": 18140,
	      "type": "MS",
	      "actual": 0.29465,
	      "expected": 0.2743
	    },
	    {
	      "cbsa": 18140,
	      "type": "TOTAL",
	      "actual": 0.30288,
	      "expected": 0.27591
	    }
	  ],
	  "19100": [
	    {
	      "cbsa": 19100,
	      "type": "ES",
	      "actual": -0.04357,
	      "expected": 0.14166
	    },
	    {
	      "cbsa": 19100,
	      "type": "EX",
	      "actual": -0.24063,
	      "expected": 0.18446
	    },
	    {
	      "cbsa": 19100,
	      "type": "MS",
	      "actual": 0.37172,
	      "expected": 0.24302
	    },
	    {
	      "cbsa": 19100,
	      "type": "TOTAL",
	      "actual": 0.01006,
	      "expected": 0.27934
	    },
	    {
	      "cbsa": 19100,
	      "type": "UC",
	      "actual": 0.04167,
	      "expected": 0.28831
	    }
	  ],
	  "19380": [
	    {
	      "cbsa": 19380,
	      "type": "ES",
	      "actual": 0.10974,
	      "expected": -0.08164
	    },
	    {
	      "cbsa": 19380,
	      "type": "MS",
	      "actual": -0.09558,
	      "expected": 0.04249
	    },
	    {
	      "cbsa": 19380,
	      "type": "TOTAL",
	      "actual": -0.08979,
	      "expected": 0.04299
	    }
	  ],
	  "19660": [
	    {
	      "cbsa": 19660,
	      "type": "EX",
	      "actual": -0.19723,
	      "expected": -0.08652
	    },
	    {
	      "cbsa": 19660,
	      "type": "MS",
	      "actual": 0.00984,
	      "expected": 0.17179
	    },
	    {
	      "cbsa": 19660,
	      "type": "TOTAL",
	      "actual": -0.00021,
	      "expected": 0.16707
	    }
	  ],
	  "19740": [
	    {
	      "cbsa": 19740,
	      "type": "ES",
	      "actual": 0.17814,
	      "expected": 0.19283
	    },
	    {
	      "cbsa": 19740,
	      "type": "EX",
	      "actual": -0.0774,
	      "expected": 0.27548
	    },
	    {
	      "cbsa": 19740,
	      "type": "MS",
	      "actual": 0.00668,
	      "expected": 0.16996
	    },
	    {
	      "cbsa": 19740,
	      "type": "TOTAL",
	      "actual": 0.10759,
	      "expected": 0.29281
	    },
	    {
	      "cbsa": 19740,
	      "type": "UC",
	      "actual": 0.13852,
	      "expected": 0.30529
	    }
	  ],
	  "19780": [
	    {
	      "cbsa": 19780,
	      "type": "ES",
	      "actual": 0.35412,
	      "expected": 0.14711
	    },
	    {
	      "cbsa": 19780,
	      "type": "EX",
	      "actual": -0.46668,
	      "expected": 0.09167
	    },
	    {
	      "cbsa": 19780,
	      "type": "MS",
	      "actual": -0.13419,
	      "expected": 0.16459
	    },
	    {
	      "cbsa": 19780,
	      "type": "TOTAL",
	      "actual": -0.15818,
	      "expected": 0.16352
	    }
	  ],
	  "19820": [
	    {
	      "cbsa": 19820,
	      "type": "ES",
	      "actual": -0.41503,
	      "expected": 0.00636
	    },
	    {
	      "cbsa": 19820,
	      "type": "EX",
	      "actual": -0.18456,
	      "expected": -0.02306
	    },
	    {
	      "cbsa": 19820,
	      "type": "MS",
	      "actual": -0.10437,
	      "expected": 0.02308
	    },
	    {
	      "cbsa": 19820,
	      "type": "TOTAL",
	      "actual": 0.02204,
	      "expected": 0.04267
	    },
	    {
	      "cbsa": 19820,
	      "type": "UC",
	      "actual": 0.1005,
	      "expected": 0.05632
	    }
	  ],
	  "21340": [
	    {
	      "cbsa": 21340,
	      "type": "EX",
	      "actual": 4.93044,
	      "expected": 0.11091
	    },
	    {
	      "cbsa": 21340,
	      "type": "MS",
	      "actual": -0.13089,
	      "expected": 0.17436
	    },
	    {
	      "cbsa": 21340,
	      "type": "TOTAL",
	      "actual": -0.13147,
	      "expected": 0.1744
	    }
	  ],
	  "23420": [
	    {
	      "cbsa": 23420,
	      "type": "ES",
	      "actual": 0.3513,
	      "expected": 0.22582
	    },
	    {
	      "cbsa": 23420,
	      "type": "TOTAL",
	      "actual": 0.3513,
	      "expected": 0.22582
	    }
	  ],
	  "24340": [
	    {
	      "cbsa": 24340,
	      "type": "ES",
	      "actual": -0.28049,
	      "expected": 0.12451
	    },
	    {
	      "cbsa": 24340,
	      "type": "EX",
	      "actual": -0.61941,
	      "expected": -0.16885
	    },
	    {
	      "cbsa": 24340,
	      "type": "TOTAL",
	      "actual": -0.2791,
	      "expected": 0.12368
	    }
	  ],
	  "24660": [
	    {
	      "cbsa": 24660,
	      "type": "ES",
	      "actual": -0.00027,
	      "expected": 0.1036
	    },
	    {
	      "cbsa": 24660,
	      "type": "EX",
	      "actual": -0.20474,
	      "expected": 0.08506
	    },
	    {
	      "cbsa": 24660,
	      "type": "TOTAL",
	      "actual": 0.00282,
	      "expected": 0.11027
	    }
	  ],
	  "24860": [
	    {
	      "cbsa": 24860,
	      "type": "ES",
	      "actual": -0.26582,
	      "expected": 0.0888
	    },
	    {
	      "cbsa": 24860,
	      "type": "EX",
	      "actual": -0.45723,
	      "expected": 0.03312
	    },
	    {
	      "cbsa": 24860,
	      "type": "MS",
	      "actual": 0.28713,
	      "expected": 0.17102
	    },
	    {
	      "cbsa": 24860,
	      "type": "TOTAL",
	      "actual": 0.23806,
	      "expected": 0.16885
	    }
	  ],
	  "25420": [
	    {
	      "cbsa": 25420,
	      "type": "ES",
	      "actual": -0.27265,
	      "expected": 0.19649
	    },
	    {
	      "cbsa": 25420,
	      "type": "EX",
	      "actual": -0.41003,
	      "expected": 0.11033
	    },
	    {
	      "cbsa": 25420,
	      "type": "MS",
	      "actual": 0.50426,
	      "expected": 0.29281
	    },
	    {
	      "cbsa": 25420,
	      "type": "TOTAL",
	      "actual": 0.10415,
	      "expected": 0.24578
	    }
	  ],
	  "25540": [
	    {
	      "cbsa": 25540,
	      "type": "ES",
	      "actual": 0.08126,
	      "expected": 0.1526
	    },
	    {
	      "cbsa": 25540,
	      "type": "MS",
	      "actual": 0.17521,
	      "expected": 0.15632
	    },
	    {
	      "cbsa": 25540,
	      "type": "TOTAL",
	      "actual": 0.18427,
	      "expected": 0.15767
	    }
	  ],
	  "26420": [
	    {
	      "cbsa": 26420,
	      "type": "ES",
	      "actual": 0.30125,
	      "expected": 0.28443
	    },
	    {
	      "cbsa": 26420,
	      "type": "EX",
	      "actual": -0.14928,
	      "expected": 0.28638
	    },
	    {
	      "cbsa": 26420,
	      "type": "MS",
	      "actual": 0.16991,
	      "expected": 0.3858
	    },
	    {
	      "cbsa": 26420,
	      "type": "TOTAL",
	      "actual": 0.15529,
	      "expected": 0.38216
	    }
	  ],
	  "26900": [
	    {
	      "cbsa": 26900,
	      "type": "ES",
	      "actual": -0.13443,
	      "expected": 0.19084
	    },
	    {
	      "cbsa": 26900,
	      "type": "EX",
	      "actual": -0.58015,
	      "expected": 0.12115
	    },
	    {
	      "cbsa": 26900,
	      "type": "MS",
	      "actual": 0.12193,
	      "expected": 0.09206
	    },
	    {
	      "cbsa": 26900,
	      "type": "TOTAL",
	      "actual": 0.41505,
	      "expected": 0.13235
	    },
	    {
	      "cbsa": 26900,
	      "type": "UC",
	      "actual": 0.55087,
	      "expected": 0.13623
	    }
	  ],
	  "27140": [
	    {
	      "cbsa": 27140,
	      "type": "ES",
	      "actual": -0.12175,
	      "expected": 0.15469
	    },
	    {
	      "cbsa": 27140,
	      "type": "EX",
	      "actual": -0.09802,
	      "expected": 0.36637
	    },
	    {
	      "cbsa": 27140,
	      "type": "TOTAL",
	      "actual": -0.10943,
	      "expected": 0.1604
	    }
	  ],
	  "27260": [
	    {
	      "cbsa": 27260,
	      "type": "ES",
	      "actual": -0.19533,
	      "expected": 0.11266
	    },
	    {
	      "cbsa": 27260,
	      "type": "EX",
	      "actual": 0.01161,
	      "expected": 0.12705
	    },
	    {
	      "cbsa": 27260,
	      "type": "MS",
	      "actual": 0.08317,
	      "expected": 0.29119
	    },
	    {
	      "cbsa": 27260,
	      "type": "TOTAL",
	      "actual": 0.16981,
	      "expected": 0.20312
	    },
	    {
	      "cbsa": 27260,
	      "type": "UC",
	      "actual": 0.21873,
	      "expected": 0.20489
	    }
	  ],
	  "28140": [
	    {
	      "cbsa": 28140,
	      "type": "ES",
	      "actual": 0.10488,
	      "expected": 0.1208
	    },
	    {
	      "cbsa": 28140,
	      "type": "EX",
	      "actual": -0.30733,
	      "expected": 0.12704
	    },
	    {
	      "cbsa": 28140,
	      "type": "MS",
	      "actual": -0.01402,
	      "expected": 0.15582
	    },
	    {
	      "cbsa": 28140,
	      "type": "TOTAL",
	      "actual": -0.00704,
	      "expected": 0.15346
	    }
	  ],
	  "28940": [
	    {
	      "cbsa": 28940,
	      "type": "ES",
	      "actual": 0.05904,
	      "expected": 0.00181
	    },
	    {
	      "cbsa": 28940,
	      "type": "EX",
	      "actual": -0.14848,
	      "expected": 0.08476
	    },
	    {
	      "cbsa": 28940,
	      "type": "MS",
	      "actual": -0.118,
	      "expected": 0.13102
	    },
	    {
	      "cbsa": 28940,
	      "type": "TOTAL",
	      "actual": -0.1163,
	      "expected": 0.13465
	    }
	  ],
	  "29460": [
	    {
	      "cbsa": 29460,
	      "type": "ES",
	      "actual": -0.00888,
	      "expected": 0.20638
	    },
	    {
	      "cbsa": 29460,
	      "type": "TOTAL",
	      "actual": -0.00888,
	      "expected": 0.20638
	    }
	  ],
	  "29820": [
	    {
	      "cbsa": 29820,
	      "type": "MS",
	      "actual": 0.34455,
	      "expected": 0.22364
	    },
	    {
	      "cbsa": 29820,
	      "type": "TOTAL",
	      "actual": 0.34455,
	      "expected": 0.22364
	    }
	  ],
	  "30780": [
	    {
	      "cbsa": 30780,
	      "type": "ES",
	      "actual": -0.14743,
	      "expected": 0.12271
	    },
	    {
	      "cbsa": 30780,
	      "type": "EX",
	      "actual": -0.24637,
	      "expected": 0.07543
	    },
	    {
	      "cbsa": 30780,
	      "type": "TOTAL",
	      "actual": -0.16346,
	      "expected": 0.11673
	    }
	  ],
	  "31080": [
	    {
	      "cbsa": 31080,
	      "type": "TOTAL",
	      "actual": 0.14937,
	      "expected": 0.22626
	    },
	    {
	      "cbsa": 31080,
	      "type": "UC",
	      "actual": 0.14937,
	      "expected": 0.22626
	    }
	  ],
	  "31140": [
	    {
	      "cbsa": 31140,
	      "type": "ES",
	      "actual": -0.153,
	      "expected": 0.06834
	    },
	    {
	      "cbsa": 31140,
	      "type": "EX",
	      "actual": -0.26627,
	      "expected": 0.06738
	    },
	    {
	      "cbsa": 31140,
	      "type": "MS",
	      "actual": -0.11904,
	      "expected": 0.07327
	    },
	    {
	      "cbsa": 31140,
	      "type": "TOTAL",
	      "actual": -0.0272,
	      "expected": 0.13848
	    },
	    {
	      "cbsa": 31140,
	      "type": "UC",
	      "actual": -0.02278,
	      "expected": 0.13497
	    }
	  ],
	  "32580": [
	    {
	      "cbsa": 32580,
	      "type": "MS",
	      "actual": 0.00186,
	      "expected": 0.34509
	    },
	    {
	      "cbsa": 32580,
	      "type": "TOTAL",
	      "actual": 0.00186,
	      "expected": 0.34509
	    }
	  ],
	  "32820": [
	    {
	      "cbsa": 32820,
	      "type": "ES",
	      "actual": -0.04242,
	      "expected": 0.07954
	    },
	    {
	      "cbsa": 32820,
	      "type": "EX",
	      "actual": -0.28086,
	      "expected": -0.00191
	    },
	    {
	      "cbsa": 32820,
	      "type": "MS",
	      "actual": -0.03073,
	      "expected": 0.05344
	    },
	    {
	      "cbsa": 32820,
	      "type": "TOTAL",
	      "actual": -0.04061,
	      "expected": 0.05402
	    }
	  ],
	  "33100": [
	    {
	      "cbsa": 33100,
	      "type": "MS",
	      "actual": 0.14658,
	      "expected": 0.17397
	    },
	    {
	      "cbsa": 33100,
	      "type": "TOTAL",
	      "actual": 0.11156,
	      "expected": 0.1739
	    },
	    {
	      "cbsa": 33100,
	      "type": "UC",
	      "actual": 0.11098,
	      "expected": 0.17472
	    }
	  ],
	  "33460": [
	    {
	      "cbsa": 33460,
	      "type": "ES",
	      "actual": 0.04477,
	      "expected": 0.057
	    },
	    {
	      "cbsa": 33460,
	      "type": "EX",
	      "actual": -0.06503,
	      "expected": 0.10111
	    },
	    {
	      "cbsa": 33460,
	      "type": "MS",
	      "actual": -0.34357,
	      "expected": 0.01643
	    },
	    {
	      "cbsa": 33460,
	      "type": "TOTAL",
	      "actual": 0.08258,
	      "expected": 0.07547
	    },
	    {
	      "cbsa": 33460,
	      "type": "UC",
	      "actual": 0.14137,
	      "expected": 0.07764
	    }
	  ],
	  "34980": [
	    {
	      "cbsa": 34980,
	      "type": "ES",
	      "actual": 0.49145,
	      "expected": 0.3051
	    },
	    {
	      "cbsa": 34980,
	      "type": "EX",
	      "actual": -0.19701,
	      "expected": 0.29053
	    },
	    {
	      "cbsa": 34980,
	      "type": "MS",
	      "actual": 0.50007,
	      "expected": 0.23313
	    },
	    {
	      "cbsa": 34980,
	      "type": "TOTAL",
	      "actual": 0.4176,
	      "expected": 0.24914
	    }
	  ],
	  "35300": [
	    {
	      "cbsa": 35300,
	      "type": "TOTAL",
	      "actual": -0.32638,
	      "expected": 0.13851
	    },
	    {
	      "cbsa": 35300,
	      "type": "UC",
	      "actual": -0.32638,
	      "expected": 0.13851
	    }
	  ],
	  "35380": [
	    {
	      "cbsa": 35380,
	      "type": "ES",
	      "actual": 0.09224,
	      "expected": 0.03978
	    },
	    {
	      "cbsa": 35380,
	      "type": "EX",
	      "actual": 0.06281,
	      "expected": -0.01007
	    },
	    {
	      "cbsa": 35380,
	      "type": "TOTAL",
	      "actual": -0.19194,
	      "expected": -0.03408
	    },
	    {
	      "cbsa": 35380,
	      "type": "UC",
	      "actual": -0.12867,
	      "expected": -0.0218
	    }
	  ],
	  "35620": [
	    {
	      "cbsa": 35620,
	      "type": "ES",
	      "actual": -0.16067,
	      "expected": 0.16367
	    },
	    {
	      "cbsa": 35620,
	      "type": "EX",
	      "actual": -0.32071,
	      "expected": 0.13129
	    },
	    {
	      "cbsa": 35620,
	      "type": "MS",
	      "actual": 0.03672,
	      "expected": 0.07968
	    },
	    {
	      "cbsa": 35620,
	      "type": "TOTAL",
	      "actual": 0.41943,
	      "expected": 0.1769
	    },
	    {
	      "cbsa": 35620,
	      "type": "UC",
	      "actual": 0.40429,
	      "expected": 0.17105
	    }
	  ],
	  "35840": [
	    {
	      "cbsa": 35840,
	      "type": "MS",
	      "actual": -0.23998,
	      "expected": 0.04349
	    },
	    {
	      "cbsa": 35840,
	      "type": "TOTAL",
	      "actual": -0.13948,
	      "expected": 0.14851
	    },
	    {
	      "cbsa": 35840,
	      "type": "UC",
	      "actual": -0.07269,
	      "expected": 0.20258
	    }
	  ],
	  "36260": [
	    {
	      "cbsa": 36260,
	      "type": "EX",
	      "actual": -0.02624,
	      "expected": 0.15073
	    },
	    {
	      "cbsa": 36260,
	      "type": "MS",
	      "actual": 0.06407,
	      "expected": 0.25479
	    },
	    {
	      "cbsa": 36260,
	      "type": "TOTAL",
	      "actual": 0.10285,
	      "expected": 0.23608
	    },
	    {
	      "cbsa": 36260,
	      "type": "UC",
	      "actual": 0.11634,
	      "expected": 0.20879
	    }
	  ],
	  "36420": [
	    {
	      "cbsa": 36420,
	      "type": "ES",
	      "actual": -0.22559,
	      "expected": 0.1208
	    },
	    {
	      "cbsa": 36420,
	      "type": "EX",
	      "actual": -0.67444,
	      "expected": -0.02174
	    },
	    {
	      "cbsa": 36420,
	      "type": "MS",
	      "actual": 0.09459,
	      "expected": 0.25009
	    },
	    {
	      "cbsa": 36420,
	      "type": "TOTAL",
	      "actual": 0.04007,
	      "expected": 0.2348
	    }
	  ],
	  "36540": [
	    {
	      "cbsa": 36540,
	      "type": "ES",
	      "actual": -0.00873,
	      "expected": 0.16546
	    },
	    {
	      "cbsa": 36540,
	      "type": "EX",
	      "actual": 0.0497,
	      "expected": 0.17623
	    },
	    {
	      "cbsa": 36540,
	      "type": "MS",
	      "actual": -0.00735,
	      "expected": 0.13148
	    },
	    {
	      "cbsa": 36540,
	      "type": "TOTAL",
	      "actual": -0.00216,
	      "expected": 0.13444
	    }
	  ],
	  "36740": [
	    {
	      "cbsa": 36740,
	      "type": "ES",
	      "actual": -0.13451,
	      "expected": 0.23296
	    },
	    {
	      "cbsa": 36740,
	      "type": "TOTAL",
	      "actual": 0.05565,
	      "expected": 0.25087
	    },
	    {
	      "cbsa": 36740,
	      "type": "UC",
	      "actual": 0.07651,
	      "expected": 0.25756
	    }
	  ],
	  "37100": [
	    {
	      "cbsa": 37100,
	      "type": "MS",
	      "actual": 0.50514,
	      "expected": 0.21344
	    },
	    {
	      "cbsa": 37100,
	      "type": "TOTAL",
	      "actual": 0.50514,
	      "expected": 0.21344
	    }
	  ],
	  "37340": [
	    {
	      "cbsa": 37340,
	      "type": "TOTAL",
	      "actual": -0.08732,
	      "expected": 0.06896
	    },
	    {
	      "cbsa": 37340,
	      "type": "UC",
	      "actual": -0.08732,
	      "expected": 0.06896
	    }
	  ],
	  "37980": [
	    {
	      "cbsa": 37980,
	      "type": "ES",
	      "actual": 0.49789,
	      "expected": 0.00281
	    },
	    {
	      "cbsa": 37980,
	      "type": "MS",
	      "actual": -0.37455,
	      "expected": 0.08621
	    },
	    {
	      "cbsa": 37980,
	      "type": "TOTAL",
	      "actual": 0.23984,
	      "expected": 0.12723
	    },
	    {
	      "cbsa": 37980,
	      "type": "UC",
	      "actual": 0.31927,
	      "expected": 0.12062
	    }
	  ],
	  "38060": [
	    {
	      "cbsa": 38060,
	      "type": "EX",
	      "actual": -0.05037,
	      "expected": 0.35808
	    },
	    {
	      "cbsa": 38060,
	      "type": "MS",
	      "actual": 0.00148,
	      "expected": 0.20895
	    },
	    {
	      "cbsa": 38060,
	      "type": "TOTAL",
	      "actual": -0.00264,
	      "expected": 0.20865
	    }
	  ],
	  "38300": [
	    {
	      "cbsa": 38300,
	      "type": "ES",
	      "actual": -0.13477,
	      "expected": 0.10805
	    },
	    {
	      "cbsa": 38300,
	      "type": "EX",
	      "actual": -0.25225,
	      "expected": 0.08667
	    },
	    {
	      "cbsa": 38300,
	      "type": "TOTAL",
	      "actual": -0.06894,
	      "expected": 0.25542
	    },
	    {
	      "cbsa": 38300,
	      "type": "UC",
	      "actual": -0.05817,
	      "expected": 0.24397
	    }
	  ],
	  "38900": [
	    {
	      "cbsa": 38900,
	      "type": "ES",
	      "actual": 0.23896,
	      "expected": 0.27135
	    },
	    {
	      "cbsa": 38900,
	      "type": "EX",
	      "actual": 0.21024,
	      "expected": 0.28541
	    },
	    {
	      "cbsa": 38900,
	      "type": "MS",
	      "actual": 0.2154,
	      "expected": 0.28309
	    },
	    {
	      "cbsa": 38900,
	      "type": "TOTAL",
	      "actual": 0.22409,
	      "expected": 0.28782
	    }
	  ],
	  "39300": [
	    {
	      "cbsa": 39300,
	      "type": "ES",
	      "actual": 0.08134,
	      "expected": 0.0716
	    },
	    {
	      "cbsa": 39300,
	      "type": "MS",
	      "actual": -0.04502,
	      "expected": 0.12249
	    },
	    {
	      "cbsa": 39300,
	      "type": "TOTAL",
	      "actual": -0.05505,
	      "expected": 0.12396
	    },
	    {
	      "cbsa": 39300,
	      "type": "UC",
	      "actual": -0.2103,
	      "expected": -0.04456
	    }
	  ],
	  "39340": [
	    {
	      "cbsa": 39340,
	      "type": "EX",
	      "actual": -0.18279,
	      "expected": 0.42441
	    },
	    {
	      "cbsa": 39340,
	      "type": "MS",
	      "actual": 0.30464,
	      "expected": 0.36344
	    },
	    {
	      "cbsa": 39340,
	      "type": "TOTAL",
	      "actual": 0.30718,
	      "expected": 0.36381
	    }
	  ],
	  "39580": [
	    {
	      "cbsa": 39580,
	      "type": "EX",
	      "actual": -0.2144,
	      "expected": 0.29104
	    },
	    {
	      "cbsa": 39580,
	      "type": "MS",
	      "actual": 0.10871,
	      "expected": 0.36059
	    },
	    {
	      "cbsa": 39580,
	      "type": "TOTAL",
	      "actual": 0.11922,
	      "expected": 0.36773
	    }
	  ],
	  "40060": [
	    {
	      "cbsa": 40060,
	      "type": "ES",
	      "actual": 0.25128,
	      "expected": 0.14512
	    },
	    {
	      "cbsa": 40060,
	      "type": "EX",
	      "actual": 3.19058,
	      "expected": 0.22915
	    },
	    {
	      "cbsa": 40060,
	      "type": "MS",
	      "actual": 0.05586,
	      "expected": 0.17131
	    },
	    {
	      "cbsa": 40060,
	      "type": "TOTAL",
	      "actual": 0.19948,
	      "expected": 0.18152
	    },
	    {
	      "cbsa": 40060,
	      "type": "UC",
	      "actual": 0.38851,
	      "expected": 0.18949
	    }
	  ],
	  "40140": [
	    {
	      "cbsa": 40140,
	      "type": "MS",
	      "actual": -0.01685,
	      "expected": 0.24008
	    },
	    {
	      "cbsa": 40140,
	      "type": "TOTAL",
	      "actual": -0.01685,
	      "expected": 0.24008
	    }
	  ],
	  "40380": [
	    {
	      "cbsa": 40380,
	      "type": "EX",
	      "actual": 0.07645,
	      "expected": 0.03938
	    },
	    {
	      "cbsa": 40380,
	      "type": "MS",
	      "actual": -0.37526,
	      "expected": -0.00045
	    },
	    {
	      "cbsa": 40380,
	      "type": "TOTAL",
	      "actual": -0.3795,
	      "expected": 0.00248
	    }
	  ],
	  "40900": [
	    {
	      "cbsa": 40900,
	      "type": "ES",
	      "actual": 0.02929,
	      "expected": 0.17309
	    },
	    {
	      "cbsa": 40900,
	      "type": "EX",
	      "actual": 0.32284,
	      "expected": 0.1833
	    },
	    {
	      "cbsa": 40900,
	      "type": "TOTAL",
	      "actual": -0.44308,
	      "expected": -0.05852
	    },
	    {
	      "cbsa": 40900,
	      "type": "UC",
	      "actual": -0.48734,
	      "expected": -0.07957
	    }
	  ],
	  "41180": [
	    {
	      "cbsa": 41180,
	      "type": "ES",
	      "actual": -0.0496,
	      "expected": 0.05852
	    },
	    {
	      "cbsa": 41180,
	      "type": "EX",
	      "actual": -0.0617,
	      "expected": 0.03625
	    },
	    {
	      "cbsa": 41180,
	      "type": "MS",
	      "actual": -0.11052,
	      "expected": 0.03856
	    },
	    {
	      "cbsa": 41180,
	      "type": "TOTAL",
	      "actual": -0.08023,
	      "expected": 0.16597
	    },
	    {
	      "cbsa": 41180,
	      "type": "UC",
	      "actual": -0.06075,
	      "expected": 0.16462
	    }
	  ],
	  "41620": [
	    {
	      "cbsa": 41620,
	      "type": "EX",
	      "actual": -0.24852,
	      "expected": 0.14856
	    },
	    {
	      "cbsa": 41620,
	      "type": "TOTAL",
	      "actual": 0.05589,
	      "expected": 0.22563
	    },
	    {
	      "cbsa": 41620,
	      "type": "UC",
	      "actual": 0.06168,
	      "expected": 0.22643
	    }
	  ],
	  "41700": [
	    {
	      "cbsa": 41700,
	      "type": "ES",
	      "actual": 0.08609,
	      "expected": 0.354
	    },
	    {
	      "cbsa": 41700,
	      "type": "EX",
	      "actual": -0.19335,
	      "expected": 0.12445
	    },
	    {
	      "cbsa": 41700,
	      "type": "TOTAL",
	      "actual": 0.06241,
	      "expected": 0.35023
	    }
	  ],
	  "41740": [
	    {
	      "cbsa": 41740,
	      "type": "MS",
	      "actual": -0.02631,
	      "expected": 0.14752
	    },
	    {
	      "cbsa": 41740,
	      "type": "TOTAL",
	      "actual": -0.02631,
	      "expected": 0.14752
	    }
	  ],
	  "41860": [
	    {
	      "cbsa": 41860,
	      "type": "MS",
	      "actual": 0.02278,
	      "expected": 0.23033
	    },
	    {
	      "cbsa": 41860,
	      "type": "TOTAL",
	      "actual": 0.63606,
	      "expected": 0.31575
	    },
	    {
	      "cbsa": 41860,
	      "type": "UC",
	      "actual": 0.62806,
	      "expected": 0.31634
	    }
	  ],
	  "41940": [
	    {
	      "cbsa": 41940,
	      "type": "EX",
	      "actual": -0.38311,
	      "expected": 0.13072
	    },
	    {
	      "cbsa": 41940,
	      "type": "TOTAL",
	      "actual": 0.45572,
	      "expected": 0.27434
	    },
	    {
	      "cbsa": 41940,
	      "type": "UC",
	      "actual": 0.45271,
	      "expected": 0.27169
	    }
	  ],
	  "42540": [
	    {
	      "cbsa": 42540,
	      "type": "EX",
	      "actual": -0.59716,
	      "expected": 0.26676
	    },
	    {
	      "cbsa": 42540,
	      "type": "MS",
	      "actual": -0.30467,
	      "expected": 0.07526
	    },
	    {
	      "cbsa": 42540,
	      "type": "TOTAL",
	      "actual": -0.30743,
	      "expected": 0.07656
	    }
	  ],
	  "42660": [
	    {
	      "cbsa": 42660,
	      "type": "MS",
	      "actual": 0.28913,
	      "expected": 0.10114
	    },
	    {
	      "cbsa": 42660,
	      "type": "TOTAL",
	      "actual": 0.28913,
	      "expected": 0.10114
	    }
	  ],
	  "44060": [
	    {
	      "cbsa": 44060,
	      "type": "ES",
	      "actual": 0.06444,
	      "expected": 0.13241
	    },
	    {
	      "cbsa": 44060,
	      "type": "EX",
	      "actual": -0.139,
	      "expected": -0.01658
	    },
	    {
	      "cbsa": 44060,
	      "type": "TOTAL",
	      "actual": 0.06702,
	      "expected": 0.13248
	    }
	  ],
	  "44700": [
	    {
	      "cbsa": 44700,
	      "type": "MS",
	      "actual": -0.28082,
	      "expected": -0.01009
	    },
	    {
	      "cbsa": 44700,
	      "type": "TOTAL",
	      "actual": -0.28082,
	      "expected": -0.01009
	    }
	  ],
	  "45060": [
	    {
	      "cbsa": 45060,
	      "type": "EX",
	      "actual": -0.4235,
	      "expected": 0.02667
	    },
	    {
	      "cbsa": 45060,
	      "type": "MS",
	      "actual": -0.16578,
	      "expected": 0.02583
	    },
	    {
	      "cbsa": 45060,
	      "type": "TOTAL",
	      "actual": -0.17817,
	      "expected": 0.0165
	    }
	  ],
	  "45300": [
	    {
	      "cbsa": 45300,
	      "type": "ES",
	      "actual": -0.00905,
	      "expected": 0.19304
	    },
	    {
	      "cbsa": 45300,
	      "type": "MS",
	      "actual": 0.19316,
	      "expected": 0.1886
	    },
	    {
	      "cbsa": 45300,
	      "type": "TOTAL",
	      "actual": 0.15708,
	      "expected": 0.16335
	    },
	    {
	      "cbsa": 45300,
	      "type": "UC",
	      "actual": 0.07667,
	      "expected": 0.12031
	    }
	  ],
	  "45780": [
	    {
	      "cbsa": 45780,
	      "type": "ES",
	      "actual": -0.06793,
	      "expected": -0.04967
	    },
	    {
	      "cbsa": 45780,
	      "type": "EX",
	      "actual": -0.39476,
	      "expected": -0.05288
	    },
	    {
	      "cbsa": 45780,
	      "type": "MS",
	      "actual": -0.17023,
	      "expected": 0.0059
	    },
	    {
	      "cbsa": 45780,
	      "type": "TOTAL",
	      "actual": -0.19085,
	      "expected": 0.00456
	    }
	  ],
	  "46060": [
	    {
	      "cbsa": 46060,
	      "type": "ES",
	      "actual": -0.24872,
	      "expected": 0.11861
	    },
	    {
	      "cbsa": 46060,
	      "type": "TOTAL",
	      "actual": -0.24872,
	      "expected": 0.11861
	    }
	  ],
	  "46140": [
	    {
	      "cbsa": 46140,
	      "type": "ES",
	      "actual": -0.04541,
	      "expected": 0.15991
	    },
	    {
	      "cbsa": 46140,
	      "type": "EX",
	      "actual": -0.27607,
	      "expected": 0.10411
	    },
	    {
	      "cbsa": 46140,
	      "type": "TOTAL",
	      "actual": -0.05748,
	      "expected": 0.15772
	    }
	  ],
	  "46520": [
	    {
	      "cbsa": 46520,
	      "type": "TOTAL",
	      "actual": 0.55552,
	      "expected": 0.09714
	    },
	    {
	      "cbsa": 46520,
	      "type": "UC",
	      "actual": 0.55552,
	      "expected": 0.09714
	    }
	  ],
	  "47260": [
	    {
	      "cbsa": 47260,
	      "type": "ES",
	      "actual": 0.86966,
	      "expected": -0.14304
	    },
	    {
	      "cbsa": 47260,
	      "type": "EX",
	      "actual": -0.11275,
	      "expected": -0.01394
	    },
	    {
	      "cbsa": 47260,
	      "type": "MS",
	      "actual": -0.11075,
	      "expected": -0.00285
	    },
	    {
	      "cbsa": 47260,
	      "type": "TOTAL",
	      "actual": 0.00172,
	      "expected": 0.00675
	    },
	    {
	      "cbsa": 47260,
	      "type": "UC",
	      "actual": 0.02569,
	      "expected": 0.00286
	    }
	  ],
	  "48620": [
	    {
	      "cbsa": 48620,
	      "type": "ES",
	      "actual": -0.1973,
	      "expected": 0.06628
	    },
	    {
	      "cbsa": 48620,
	      "type": "EX",
	      "actual": -0.17204,
	      "expected": 0.05671
	    },
	    {
	      "cbsa": 48620,
	      "type": "TOTAL",
	      "actual": -0.20476,
	      "expected": 0.06483
	    }
	  ],
	  "49180": [
	    {
	      "cbsa": 49180,
	      "type": "ES",
	      "actual": -0.49004,
	      "expected": 0.08554
	    },
	    {
	      "cbsa": 49180,
	      "type": "EX",
	      "actual": -0.22546,
	      "expected": 0.06207
	    },
	    {
	      "cbsa": 49180,
	      "type": "MS",
	      "actual": -0.19927,
	      "expected": 0.12404
	    },
	    {
	      "cbsa": 49180,
	      "type": "TOTAL",
	      "actual": -0.19709,
	      "expected": 0.14277
	    }
	  ],
	  "49660": [
	    {
	      "cbsa": 49660,
	      "type": "ES",
	      "actual": -0.69266,
	      "expected": -0.14141
	    },
	    {
	      "cbsa": 49660,
	      "type": "MS",
	      "actual": -0.17632,
	      "expected": 0.00044
	    },
	    {
	      "cbsa": 49660,
	      "type": "TOTAL",
	      "actual": -0.53765,
	      "expected": -0.10252
	    }
	  ]
	}
	;
	var county_counts = 
	[
	  {
	    "type": "ES",
	    "p": 32,
	    "ge": 18,
	    "n": 67
	  },
	  {
	    "type": "EX",
	    "p": 13,
	    "ge": 8,
	    "n": 63
	  },
	  {
	    "type": "MS",
	    "p": 34,
	    "ge": 12,
	    "n": 69
	  },
	  {
	    "type": "TOTAL",
	    "p": 48,
	    "ge": 19,
	    "n": 94
	  },
	  {
	    "type": "UC",
	    "p": 24,
	    "ge": 13,
	    "n": 33
	  }
	]
	;
	var county_trend = 
	{
	  "ES": [
	    {
	      "type": "ES",
	      "year": 2004,
	      "value": 0
	    },
	    {
	      "type": "ES",
	      "year": 2005,
	      "value": -0.02365
	    },
	    {
	      "type": "ES",
	      "year": 2006,
	      "value": -0.00113
	    },
	    {
	      "type": "ES",
	      "year": 2007,
	      "value": -0.02858
	    },
	    {
	      "type": "ES",
	      "year": 2008,
	      "value": -0.00795
	    },
	    {
	      "type": "ES",
	      "year": 2009,
	      "value": -0.03338
	    },
	    {
	      "type": "ES",
	      "year": 2010,
	      "value": -0.0215
	    },
	    {
	      "type": "ES",
	      "year": 2011,
	      "value": -0.0215
	    },
	    {
	      "type": "ES",
	      "year": 2012,
	      "value": -0.04686
	    },
	    {
	      "type": "ES",
	      "year": 2013,
	      "value": -0.01658
	    },
	    {
	      "type": "ES",
	      "year": 2014,
	      "value": -0.01849
	    },
	    {
	      "type": "ES",
	      "year": 2015,
	      "value": 0.01008
	    }
	  ],
	  "EX": [
	    {
	      "type": "EX",
	      "year": 2004,
	      "value": 0
	    },
	    {
	      "type": "EX",
	      "year": 2005,
	      "value": -0.05587
	    },
	    {
	      "type": "EX",
	      "year": 2006,
	      "value": -0.03625
	    },
	    {
	      "type": "EX",
	      "year": 2007,
	      "value": -0.06127
	    },
	    {
	      "type": "EX",
	      "year": 2008,
	      "value": -0.05853
	    },
	    {
	      "type": "EX",
	      "year": 2009,
	      "value": -0.08908
	    },
	    {
	      "type": "EX",
	      "year": 2010,
	      "value": -0.05063
	    },
	    {
	      "type": "EX",
	      "year": 2011,
	      "value": -0.04974
	    },
	    {
	      "type": "EX",
	      "year": 2012,
	      "value": -0.19307
	    },
	    {
	      "type": "EX",
	      "year": 2013,
	      "value": -0.19183
	    },
	    {
	      "type": "EX",
	      "year": 2014,
	      "value": -0.18677
	    },
	    {
	      "type": "EX",
	      "year": 2015,
	      "value": -0.18094
	    }
	  ],
	  "MS": [
	    {
	      "type": "MS",
	      "year": 2004,
	      "value": 0
	    },
	    {
	      "type": "MS",
	      "year": 2005,
	      "value": -0.00109
	    },
	    {
	      "type": "MS",
	      "year": 2006,
	      "value": 0.01778
	    },
	    {
	      "type": "MS",
	      "year": 2007,
	      "value": 0.02555
	    },
	    {
	      "type": "MS",
	      "year": 2008,
	      "value": 0.08679
	    },
	    {
	      "type": "MS",
	      "year": 2009,
	      "value": 0.12892
	    },
	    {
	      "type": "MS",
	      "year": 2010,
	      "value": 0.1604
	    },
	    {
	      "type": "MS",
	      "year": 2011,
	      "value": 0.13713
	    },
	    {
	      "type": "MS",
	      "year": 2012,
	      "value": 0.11898
	    },
	    {
	      "type": "MS",
	      "year": 2013,
	      "value": 0.16263
	    },
	    {
	      "type": "MS",
	      "year": 2014,
	      "value": 0.2133
	    },
	    {
	      "type": "MS",
	      "year": 2015,
	      "value": 0.12631
	    }
	  ],
	  "TOTAL": [
	    {
	      "type": "TOTAL",
	      "year": 2004,
	      "value": 0
	    },
	    {
	      "type": "TOTAL",
	      "year": 2005,
	      "value": 0.00411
	    },
	    {
	      "type": "TOTAL",
	      "year": 2006,
	      "value": 0.02343
	    },
	    {
	      "type": "TOTAL",
	      "year": 2007,
	      "value": 0.04194
	    },
	    {
	      "type": "TOTAL",
	      "year": 2008,
	      "value": 0.10398
	    },
	    {
	      "type": "TOTAL",
	      "year": 2009,
	      "value": 0.14919
	    },
	    {
	      "type": "TOTAL",
	      "year": 2010,
	      "value": 0.16013
	    },
	    {
	      "type": "TOTAL",
	      "year": 2011,
	      "value": 0.19533
	    },
	    {
	      "type": "TOTAL",
	      "year": 2012,
	      "value": 0.20541
	    },
	    {
	      "type": "TOTAL",
	      "year": 2013,
	      "value": 0.24287
	    },
	    {
	      "type": "TOTAL",
	      "year": 2014,
	      "value": 0.26152
	    },
	    {
	      "type": "TOTAL",
	      "year": 2015,
	      "value": 0.29531
	    }
	  ],
	  "UC": [
	    {
	      "type": "UC",
	      "year": 2004,
	      "value": 0
	    },
	    {
	      "type": "UC",
	      "year": 2005,
	      "value": 0.01045
	    },
	    {
	      "type": "UC",
	      "year": 2006,
	      "value": 0.03736
	    },
	    {
	      "type": "UC",
	      "year": 2007,
	      "value": 0.05896
	    },
	    {
	      "type": "UC",
	      "year": 2008,
	      "value": 0.12249
	    },
	    {
	      "type": "UC",
	      "year": 2009,
	      "value": 0.16729
	    },
	    {
	      "type": "UC",
	      "year": 2010,
	      "value": 0.17229
	    },
	    {
	      "type": "UC",
	      "year": 2011,
	      "value": 0.22276
	    },
	    {
	      "type": "UC",
	      "year": 2012,
	      "value": 0.24139
	    },
	    {
	      "type": "UC",
	      "year": 2013,
	      "value": 0.27842
	    },
	    {
	      "type": "UC",
	      "year": 2014,
	      "value": 0.29544
	    },
	    {
	      "type": "UC",
	      "year": 2015,
	      "value": 0.35364
	    }
	  ]
	}
	;
	var naics00 = 
	{
	  "10420": {
	      "actual": -0.21292,
	      "expected": 0.15264
	    },
	  "10580": {
	      "actual": 0.43341,
	      "expected": 0.1834
	    },
	  "10740": {
	      "actual": -0.21248,
	      "expected": 0.10261
	    },
	  "10900": {
	      "actual": 0.04818,
	      "expected": 0.17142
	    },
	  "12060": {
	      "actual": 0.19815,
	      "expected": 0.24082
	    },
	  "12260": {
	      "actual": -0.00191,
	      "expected": 0.17124
	    },
	  "12420": {
	      "actual": 0.39553,
	      "expected": 0.52626
	    },
	  "12540": {
	      "actual": 0.04182,
	      "expected": 0.24659
	    },
	  "12580": {
	      "actual": -0.01017,
	      "expected": 0.1654
	    },
	  "12940": {
	      "actual": -0.04436,
	      "expected": 0.17809
	    },
	  "13820": {
	      "actual": -0.15149,
	      "expected": 0.04801
	    },
	  "14260": {
	      "actual": 0.21377,
	      "expected": 0.32161
	    },
	  "14860": {
	      "actual": -0.06212,
	      "expected": 0.06834
	    },
	  "15380": {
	      "actual": -0.12852,
	      "expected": 0.17207
	    },
	  "15980": {
	      "actual": -0.31102,
	      "expected": -0.02583
	    },
	  "16700": {
	      "actual": 0.02588,
	      "expected": 0.23265
	    },
	  "16740": {
	      "actual": 0.44242,
	      "expected": 0.49428
	    },
	  "16860": {
	      "actual": -0.26323,
	      "expected": -0.04552
	    },
	  "16980": {
	      "actual": 0.20434,
	      "expected": 0.13376
	    },
	  "17140": {
	      "actual": 0.07408,
	      "expected": 0.16494
	    },
	  "17460": {
	      "actual": 0.29741,
	      "expected": 0.03878
	    },
	  "17820": {
	      "actual": -0.05474,
	      "expected": 0.08756
	    },
	  "17900": {
	      "actual": -0.13207,
	      "expected": 0.11255
	    },
	  "18140": {
	      "actual": 0.30288,
	      "expected": 0.27591
	    },
	  "19100": {
	      "actual": 0.01006,
	      "expected": 0.27934
	    },
	  "19380": {
	      "actual": -0.08979,
	      "expected": 0.04299
	    },
	  "19660": {
	      "actual": -0.00021,
	      "expected": 0.16707
	    },
	  "19740": {
	      "actual": 0.10759,
	      "expected": 0.29281
	    },
	  "19780": {
	      "actual": -0.15818,
	      "expected": 0.16352
	    },
	  "19820": {
	      "actual": 0.02204,
	      "expected": 0.04267
	    },
	  "21340": {
	      "actual": -0.13147,
	      "expected": 0.1744
	    },
	  "23420": {
	      "actual": 0.3513,
	      "expected": 0.22582
	    },
	  "24340": {
	      "actual": -0.2791,
	      "expected": 0.12368
	    },
	  "24660": {
	      "actual": 0.00282,
	      "expected": 0.11027
	    },
	  "24860": {
	      "actual": 0.23806,
	      "expected": 0.16885
	    },
	  "25420": {
	      "actual": 0.10415,
	      "expected": 0.24578
	    },
	  "25540": {
	      "actual": 0.18427,
	      "expected": 0.15767
	    },
	  "26420": {
	      "actual": 0.15529,
	      "expected": 0.38216
	    },
	  "26900": {
	      "actual": 0.41505,
	      "expected": 0.13235
	    },
	  "27140": {
	      "actual": -0.10943,
	      "expected": 0.1604
	    },
	  "27260": {
	      "actual": 0.16981,
	      "expected": 0.20312
	    },
	  "28140": {
	      "actual": -0.00704,
	      "expected": 0.15346
	    },
	  "28940": {
	      "actual": -0.1163,
	      "expected": 0.13465
	    },
	  "29460": {
	      "actual": -0.00888,
	      "expected": 0.20638
	    },
	  "29820": {
	      "actual": 0.34455,
	      "expected": 0.22364
	    },
	  "30780": {
	      "actual": -0.16346,
	      "expected": 0.11673
	    },
	  "31080": {
	      "actual": 0.14937,
	      "expected": 0.22626
	    },
	  "31140": {
	      "actual": -0.0272,
	      "expected": 0.13848
	    },
	  "32580": {
	      "actual": 0.00186,
	      "expected": 0.34509
	    },
	  "32820": {
	      "actual": -0.04061,
	      "expected": 0.05402
	    },
	  "33100": {
	      "actual": 0.11156,
	      "expected": 0.1739
	    },
	  "33460": {
	      "actual": 0.08258,
	      "expected": 0.07547
	    },
	  "34980": {
	      "actual": 0.4176,
	      "expected": 0.24914
	    },
	  "35300": {
	      "actual": -0.32638,
	      "expected": 0.13851
	    },
	  "35380": {
	      "actual": -0.19194,
	      "expected": -0.03408
	    },
	  "35620": {
	      "actual": 0.41943,
	      "expected": 0.1769
	    },
	  "35840": {
	      "actual": -0.13948,
	      "expected": 0.14851
	    },
	  "36260": {
	      "actual": 0.10285,
	      "expected": 0.23608
	    },
	  "36420": {
	      "actual": 0.04007,
	      "expected": 0.2348
	    },
	  "36540": {
	      "actual": -0.00216,
	      "expected": 0.13444
	    },
	  "36740": {
	      "actual": 0.05565,
	      "expected": 0.25087
	    },
	  "37100": {
	      "actual": 0.50514,
	      "expected": 0.21344
	    },
	  "37340": {
	      "actual": -0.08732,
	      "expected": 0.06896
	    },
	  "37980": {
	      "actual": 0.23984,
	      "expected": 0.12723
	    },
	  "38060": {
	      "actual": -0.00264,
	      "expected": 0.20865
	    },
	  "38300": {
	      "actual": -0.06894,
	      "expected": 0.25542
	    },
	  "38900": {
	      "actual": 0.22409,
	      "expected": 0.28782
	    },
	  "39300": {
	      "actual": -0.05505,
	      "expected": 0.12396
	    },
	  "39340": {
	      "actual": 0.30718,
	      "expected": 0.36381
	    },
	  "39580": {
	      "actual": 0.11922,
	      "expected": 0.36773
	    },
	  "40060": {
	      "actual": 0.19948,
	      "expected": 0.18152
	    },
	  "40140": {
	      "actual": -0.01685,
	      "expected": 0.24008
	    },
	  "40380": {
	      "actual": -0.3795,
	      "expected": 0.00248
	    },
	  "40900": {
	      "actual": -0.44308,
	      "expected": -0.05852
	    },
	  "41180": {
	      "actual": -0.08023,
	      "expected": 0.16597
	    },
	  "41620": {
	      "actual": 0.05589,
	      "expected": 0.22563
	    },
	  "41700": {
	      "actual": 0.06241,
	      "expected": 0.35023
	    },
	  "41740": {
	      "actual": -0.02631,
	      "expected": 0.14752
	    },
	  "41860": {
	      "actual": 0.63606,
	      "expected": 0.31575
	    },
	  "41940": {
	      "actual": 0.45572,
	      "expected": 0.27434
	    },
	  "42540": {
	      "actual": -0.30743,
	      "expected": 0.07656
	    },
	  "42660": {
	      "actual": 0.28913,
	      "expected": 0.10114
	    },
	  "44060": {
	      "actual": 0.06702,
	      "expected": 0.13248
	    },
	  "44700": {
	      "actual": -0.28082,
	      "expected": -0.01009
	    },
	  "45060": {
	      "actual": -0.17817,
	      "expected": 0.0165
	    },
	  "45300": {
	      "actual": 0.15708,
	      "expected": 0.16335
	    },
	  "45780": {
	      "actual": -0.19085,
	      "expected": 0.00456
	    },
	  "46060": {
	      "actual": -0.24872,
	      "expected": 0.11861
	    },
	  "46140": {
	      "actual": -0.05748,
	      "expected": 0.15772
	    },
	  "46520": {
	      "actual": 0.55552,
	      "expected": 0.09714
	    },
	  "47260": {
	      "actual": 0.00172,
	      "expected": 0.00675
	    },
	  "48620": {
	      "actual": -0.20476,
	      "expected": 0.06483
	    },
	  "49180": {
	      "actual": -0.19709,
	      "expected": 0.14277
	    },
	  "49660": {
	      "actual": -0.53765,
	      "expected": -0.10252
	    },
	  "99999": {
	      "actual": 0.29531,
	      "expected": 0.18391
	    }
	}
	;
	var metro_names = 
	{
	    "10420": "Akron, OH",
	    "10580": "Albany, NY",
	    "10740": "Albuquerque, NM",
	    "10900": "Allentown, PA-NJ",
	    "12060": "Atlanta, GA",
	    "12260": "Augusta, GA-SC",
	    "12420": "Austin, TX",
	    "12540": "Bakersfield, CA",
	    "12580": "Baltimore, MD",
	    "12940": "Baton Rouge, LA",
	    "13820": "Birmingham, AL",
	    "14260": "Boise City, ID",
	    "14860": "Bridgeport, CT",
	    "15380": "Buffalo, NY",
	    "15980": "Cape Coral, FL",
	    "16700": "Charleston, SC",
	    "16740": "Charlotte, NC-SC",
	    "16860": "Chattanooga, TN-GA",
	    "16980": "Chicago, IL-IN-WI",
	    "17140": "Cincinnati, OH-KY-IN",
	    "17460": "Cleveland, OH",
	    "17820": "Colorado Springs, CO",
	    "17900": "Columbia, SC",
	    "18140": "Columbus, OH",
	    "19100": "Dallas, TX",
	    "19380": "Dayton, OH",
	    "19660": "Deltona, FL",
	    "19740": "Denver, CO",
	    "19780": "Des Moines, IA",
	    "19820": "Detroit, MI",
	    "21340": "El Paso, TX",
	    "23420": "Fresno, CA",
	    "24340": "Grand Rapids, MI",
	    "24660": "Greensboro, NC",
	    "24860": "Greenville, SC",
	    "25420": "Harrisburg, PA",
	    "25540": "Hartford, CT",
	    "26420": "Houston, TX",
	    "26900": "Indianapolis, IN",
	    "27140": "Jackson, MS",
	    "27260": "Jacksonville, FL",
	    "28140": "Kansas City, MO-KS",
	    "28940": "Knoxville, TN",
	    "29460": "Lakeland, FL",
	    "29820": "Las Vegas, NV",
	    "30780": "Little Rock, AR",
	    "31080": "Los Angeles, CA",
	    "31140": "Louisville, KY-IN",
	    "32580": "McAllen, TX",
	    "32820": "Memphis, TN-MS-AR",
	    "33100": "Miami, FL",
	    "33460": "Minneapolis, MN-WI",
	    "34980": "Nashville, TN",
	    "35300": "New Haven, CT",
	    "35380": "New Orleans, LA",
	    "35620": "New York, NY-NJ-PA",
	    "35840": "North Port, FL",
	    "36260": "Ogden, UT",
	    "36420": "Oklahoma City, OK",
	    "36540": "Omaha, NE-IA",
	    "36740": "Orlando, FL",
	    "37100": "Oxnard, CA",
	    "37340": "Palm Bay, FL",
	    "37980": "Philadelphia, PA-NJ-DE-MD",
	    "38060": "Phoenix, AZ",
	    "38300": "Pittsburgh, PA",
	    "38900": "Portland, OR-WA",
	    "39300": "Providence, RI-MA",
	    "39340": "Provo, UT",
	    "39580": "Raleigh, NC",
	    "40060": "Richmond, VA",
	    "40140": "Riverside, CA",
	    "40380": "Rochester, NY",
	    "40900": "Sacramento, CA",
	    "41180": "St. Louis, MO-IL",
	    "41620": "Salt Lake City, UT",
	    "41700": "San Antonio, TX",
	    "41740": "San Diego, CA",
	    "41860": "San Francisco, CA",
	    "41940": "San Jose, CA",
	    "42540": "Scranton, PA",
	    "42660": "Seattle, WA",
	    "44060": "Spokane, WA",
	    "44700": "Stockton, CA",
	    "45060": "Syracuse, NY",
	    "45300": "Tampa, FL",
	    "45780": "Toledo, OH",
	    "46060": "Tucson, AZ",
	    "46140": "Tulsa, OK",
	    "46520": "Urban Honolulu, HI",
	    "47260": "Virginia Beach, VA-NC",
	    "48620": "Wichita, KS",
	    "49180": "Winston, NC",
	    "49660": "Youngstown, OH-PA",
	    "99997": "All other 90 metro areas",
	    "99998": "Extremely dense 4 metro areas",
	    "99999": "U.S. 94 metro areas"
	  }
	;
	var trend_data = 
	{
	  "10420": [
	    {
	      "year": 2004,
	      "actual": 0,
	      "expected": 0
	    },
	    {
	      "year": 2005,
	      "actual": -0.00162,
	      "expected": 0.0416
	    },
	    {
	      "year": 2006,
	      "actual": 0.00344,
	      "expected": 0.07812
	    },
	    {
	      "year": 2007,
	      "actual": -0.01133,
	      "expected": 0.09316
	    },
	    {
	      "year": 2008,
	      "actual": 0.04666,
	      "expected": 0.15648
	    },
	    {
	      "year": 2009,
	      "actual": -0.12889,
	      "expected": 0.09786
	    },
	    {
	      "year": 2010,
	      "actual": 0.0471,
	      "expected": 0.11962
	    },
	    {
	      "year": 2011,
	      "actual": -0.04025,
	      "expected": 0.14265
	    },
	    {
	      "year": 2012,
	      "actual": -0.03252,
	      "expected": 0.1572
	    },
	    {
	      "year": 2013,
	      "actual": -0.03144,
	      "expected": 0.15958
	    },
	    {
	      "year": 2014,
	      "actual": -0.01835,
	      "expected": 0.19754
	    },
	    {
	      "year": 2015,
	      "actual": -0.21292,
	      "expected": 0.15264
	    }
	  ],
	  "10580": [
	    {
	      "year": 2004,
	      "actual": 0,
	      "expected": 0
	    },
	    {
	      "year": 2005,
	      "actual": 0.04791,
	      "expected": 0.02625
	    },
	    {
	      "year": 2006,
	      "actual": 0.06183,
	      "expected": 0.03999
	    },
	    {
	      "year": 2007,
	      "actual": 0.12401,
	      "expected": 0.09439
	    },
	    {
	      "year": 2008,
	      "actual": 0.15137,
	      "expected": 0.08977
	    },
	    {
	      "year": 2009,
	      "actual": 0.17925,
	      "expected": 0.13822
	    },
	    {
	      "year": 2010,
	      "actual": 0.23504,
	      "expected": 0.13862
	    },
	    {
	      "year": 2011,
	      "actual": 0.24179,
	      "expected": 0.16726
	    },
	    {
	      "year": 2012,
	      "actual": 0.30421,
	      "expected": 0.14328
	    },
	    {
	      "year": 2013,
	      "actual": 0.31751,
	      "expected": 0.13831
	    },
	    {
	      "year": 2014,
	      "actual": 0.3892,
	      "expected": 0.18237
	    },
	    {
	      "year": 2015,
	      "actual": 0.43341,
	      "expected": 0.1834
	    }
	  ],
	  "10740": [
	    {
	      "year": 2004,
	      "actual": 0,
	      "expected": 0
	    },
	    {
	      "year": 2005,
	      "actual": -0.04714,
	      "expected": 0.03483
	    },
	    {
	      "year": 2006,
	      "actual": -0.05646,
	      "expected": 0.00095
	    },
	    {
	      "year": 2007,
	      "actual": -0.15592,
	      "expected": 0.0364
	    },
	    {
	      "year": 2008,
	      "actual": -0.23163,
	      "expected": 0.03737
	    },
	    {
	      "year": 2009,
	      "actual": -0.26532,
	      "expected": 0.04184
	    },
	    {
	      "year": 2010,
	      "actual": -0.29546,
	      "expected": 0.01569
	    },
	    {
	      "year": 2011,
	      "actual": -0.2426,
	      "expected": 0.04026
	    },
	    {
	      "year": 2012,
	      "actual": -0.23746,
	      "expected": 0.06594
	    },
	    {
	      "year": 2013,
	      "actual": -0.23957,
	      "expected": 0.07562
	    },
	    {
	      "year": 2014,
	      "actual": -0.26775,
	      "expected": 0.08505
	    },
	    {
	      "year": 2015,
	      "actual": -0.21248,
	      "expected": 0.10261
	    }
	  ],
	  "10900": [
	    {
	      "year": 2004,
	      "actual": 0,
	      "expected": 0
	    },
	    {
	      "year": 2005,
	      "actual": 0.01625,
	      "expected": -0.04631
	    },
	    {
	      "year": 2006,
	      "actual": 0.04256,
	      "expected": 0.03946
	    },
	    {
	      "year": 2007,
	      "actual": 0.05007,
	      "expected": 0.05809
	    },
	    {
	      "year": 2008,
	      "actual": 0.09991,
	      "expected": 0.09757
	    },
	    {
	      "year": 2009,
	      "actual": 0.03326,
	      "expected": 0.08264
	    },
	    {
	      "year": 2010,
	      "actual": 0.04797,
	      "expected": 0.11002
	    },
	    {
	      "year": 2011,
	      "actual": 0.08405,
	      "expected": 0.11174
	    },
	    {
	      "year": 2012,
	      "actual": 0.04006,
	      "expected": 0.14028
	    },
	    {
	      "year": 2013,
	      "actual": 0.02678,
	      "expected": 0.19884
	    },
	    {
	      "year": 2014,
	      "actual": 0.02149,
	      "expected": 0.1734
	    },
	    {
	      "year": 2015,
	      "actual": 0.04818,
	      "expected": 0.17142
	    }
	  ],
	  "12060": [
	    {
	      "year": 2004,
	      "actual": 0,
	      "expected": 0
	    },
	    {
	      "year": 2005,
	      "actual": 0.00103,
	      "expected": 0.02793
	    },
	    {
	      "year": 2006,
	      "actual": 0.01453,
	      "expected": 0.06034
	    },
	    {
	      "year": 2007,
	      "actual": -0.02044,
	      "expected": 0.08102
	    },
	    {
	      "year": 2008,
	      "actual": 0.03083,
	      "expected": 0.10736
	    },
	    {
	      "year": 2009,
	      "actual": 0.07229,
	      "expected": 0.0915
	    },
	    {
	      "year": 2010,
	      "actual": 0.02886,
	      "expected": 0.08832
	    },
	    {
	      "year": 2011,
	      "actual": 0.0601,
	      "expected": 0.12028
	    },
	    {
	      "year": 2012,
	      "actual": 0.10466,
	      "expected": 0.15026
	    },
	    {
	      "year": 2013,
	      "actual": 0.13955,
	      "expected": 0.1819
	    },
	    {
	      "year": 2014,
	      "actual": 0.15686,
	      "expected": 0.21043
	    },
	    {
	      "year": 2015,
	      "actual": 0.19815,
	      "expected": 0.24082
	    }
	  ],
	  "12260": [
	    {
	      "year": 2004,
	      "actual": 0,
	      "expected": 0
	    },
	    {
	      "year": 2005,
	      "actual": -0.14018,
	      "expected": -0.03616
	    },
	    {
	      "year": 2006,
	      "actual": 0.0153,
	      "expected": 0.00173
	    },
	    {
	      "year": 2007,
	      "actual": -0.00436,
	      "expected": 0.04009
	    },
	    {
	      "year": 2008,
	      "actual": 0.01454,
	      "expected": 0.03662
	    },
	    {
	      "year": 2009,
	      "actual": 0.04036,
	      "expected": 0.07457
	    },
	    {
	      "year": 2010,
	      "actual": 0.04707,
	      "expected": 0.11185
	    },
	    {
	      "year": 2011,
	      "actual": 0.07282,
	      "expected": 0.12367
	    },
	    {
	      "year": 2012,
	      "actual": 0.01883,
	      "expected": 0.11605
	    },
	    {
	      "year": 2013,
	      "actual": 0.00047,
	      "expected": 0.1199
	    },
	    {
	      "year": 2014,
	      "actual": 0.01806,
	      "expected": 0.13252
	    },
	    {
	      "year": 2015,
	      "actual": -0.00191,
	      "expected": 0.17124
	    }
	  ],
	  "12420": [
	    {
	      "year": 2004,
	      "actual": 0,
	      "expected": 0
	    },
	    {
	      "year": 2005,
	      "actual": 0.0102,
	      "expected": 0.04461
	    },
	    {
	      "year": 2006,
	      "actual": 0.06496,
	      "expected": 0.09453
	    },
	    {
	      "year": 2007,
	      "actual": 0.07341,
	      "expected": 0.13618
	    },
	    {
	      "year": 2008,
	      "actual": 0.13743,
	      "expected": 0.18229
	    },
	    {
	      "year": 2009,
	      "actual": 0.06469,
	      "expected": 0.18664
	    },
	    {
	      "year": 2010,
	      "actual": 0.1493,
	      "expected": 0.19972
	    },
	    {
	      "year": 2011,
	      "actual": 0.14875,
	      "expected": 0.26664
	    },
	    {
	      "year": 2012,
	      "actual": 0.2563,
	      "expected": 0.31805
	    },
	    {
	      "year": 2013,
	      "actual": 0.28808,
	      "expected": 0.38192
	    },
	    {
	      "year": 2014,
	      "actual": 0.2958,
	      "expected": 0.42529
	    },
	    {
	      "year": 2015,
	      "actual": 0.39553,
	      "expected": 0.52626
	    }
	  ],
	  "12540": [
	    {
	      "year": 2004,
	      "actual": 0,
	      "expected": 0
	    },
	    {
	      "year": 2005,
	      "actual": 0.07541,
	      "expected": 0.02391
	    },
	    {
	      "year": 2006,
	      "actual": 0.07628,
	      "expected": 0.05015
	    },
	    {
	      "year": 2007,
	      "actual": 0.08633,
	      "expected": 0.07912
	    },
	    {
	      "year": 2008,
	      "actual": 0.01405,
	      "expected": 0.10037
	    },
	    {
	      "year": 2009,
	      "actual": -0.17784,
	      "expected": 0.08969
	    },
	    {
	      "year": 2010,
	      "actual": -0.06694,
	      "expected": 0.10993
	    },
	    {
	      "year": 2011,
	      "actual": -0.03866,
	      "expected": 0.14587
	    },
	    {
	      "year": 2012,
	      "actual": 0.017,
	      "expected": 0.17783
	    },
	    {
	      "year": 2013,
	      "actual": -0.0036,
	      "expected": 0.23585
	    },
	    {
	      "year": 2014,
	      "actual": 0.01018,
	      "expected": 0.23548
	    },
	    {
	      "year": 2015,
	      "actual": 0.04182,
	      "expected": 0.24659
	    }
	  ],
	  "12580": [
	    {
	      "year": 2004,
	      "actual": 0,
	      "expected": 0
	    },
	    {
	      "year": 2005,
	      "actual": -0.04747,
	      "expected": -0.00601
	    },
	    {
	      "year": 2006,
	      "actual": -0.03416,
	      "expected": 0.00645
	    },
	    {
	      "year": 2007,
	      "actual": 0.08366,
	      "expected": 0.03383
	    },
	    {
	      "year": 2008,
	      "actual": 0.10821,
	      "expected": 0.07004
	    },
	    {
	      "year": 2009,
	      "actual": 0.03818,
	      "expected": 0.09683
	    },
	    {
	      "year": 2010,
	      "actual": -0.08724,
	      "expected": 0.10897
	    },
	    {
	      "year": 2011,
	      "actual": -0.04079,
	      "expected": 0.12927
	    },
	    {
	      "year": 2012,
	      "actual": -0.04212,
	      "expected": 0.13255
	    },
	    {
	      "year": 2013,
	      "actual": -0.07403,
	      "expected": 0.13278
	    },
	    {
	      "year": 2014,
	      "actual": -0.10235,
	      "expected": 0.15506
	    },
	    {
	      "year": 2015,
	      "actual": -0.01017,
	      "expected": 0.1654
	    }
	  ],
	  "12940": [
	    {
	      "year": 2004,
	      "actual": 0,
	      "expected": 0
	    },
	    {
	      "year": 2005,
	      "actual": -0.07629,
	      "expected": 0.04517
	    },
	    {
	      "year": 2006,
	      "actual": -0.04991,
	      "expected": 0.0861
	    },
	    {
	      "year": 2007,
	      "actual": -0.09167,
	      "expected": 0.09263
	    },
	    {
	      "year": 2008,
	      "actual": -0.13643,
	      "expected": 0.08886
	    },
	    {
	      "year": 2009,
	      "actual": -0.10387,
	      "expected": 0.11137
	    },
	    {
	      "year": 2010,
	      "actual": -0.201,
	      "expected": 0.06839
	    },
	    {
	      "year": 2011,
	      "actual": -0.22197,
	      "expected": 0.09836
	    },
	    {
	      "year": 2012,
	      "actual": -0.16682,
	      "expected": 0.11282
	    },
	    {
	      "year": 2013,
	      "actual": -0.15613,
	      "expected": 0.15028
	    },
	    {
	      "year": 2014,
	      "actual": -0.06487,
	      "expected": 0.17692
	    },
	    {
	      "year": 2015,
	      "actual": -0.04436,
	      "expected": 0.17809
	    }
	  ],
	  "13820": [
	    {
	      "year": 2004,
	      "actual": 0,
	      "expected": 0
	    },
	    {
	      "year": 2005,
	      "actual": -0.06313,
	      "expected": 0.0061
	    },
	    {
	      "year": 2006,
	      "actual": -0.06538,
	      "expected": 0.01506
	    },
	    {
	      "year": 2007,
	      "actual": -0.15595,
	      "expected": 0.01385
	    },
	    {
	      "year": 2008,
	      "actual": -0.20278,
	      "expected": 0.01479
	    },
	    {
	      "year": 2009,
	      "actual": -0.18992,
	      "expected": 0.00203
	    },
	    {
	      "year": 2010,
	      "actual": -0.18716,
	      "expected": -0.00212
	    },
	    {
	      "year": 2011,
	      "actual": -0.16536,
	      "expected": 0.00734
	    },
	    {
	      "year": 2012,
	      "actual": -0.15899,
	      "expected": 0.02656
	    },
	    {
	      "year": 2013,
	      "actual": -0.12349,
	      "expected": 0.03983
	    },
	    {
	      "year": 2014,
	      "actual": -0.16079,
	      "expected": 0.03545
	    },
	    {
	      "year": 2015,
	      "actual": -0.15149,
	      "expected": 0.04801
	    }
	  ],
	  "14260": [
	    {
	      "year": 2004,
	      "actual": 0,
	      "expected": 0
	    },
	    {
	      "year": 2005,
	      "actual": -0.00194,
	      "expected": 0.04954
	    },
	    {
	      "year": 2006,
	      "actual": -0.02669,
	      "expected": 0.07479
	    },
	    {
	      "year": 2007,
	      "actual": 0.00498,
	      "expected": 0.11477
	    },
	    {
	      "year": 2008,
	      "actual": 0.01488,
	      "expected": 0.15061
	    },
	    {
	      "year": 2009,
	      "actual": -0.01379,
	      "expected": 0.13655
	    },
	    {
	      "year": 2010,
	      "actual": -0.03293,
	      "expected": 0.14297
	    },
	    {
	      "year": 2011,
	      "actual": 0.00103,
	      "expected": 0.18767
	    },
	    {
	      "year": 2012,
	      "actual": 0.01668,
	      "expected": 0.20586
	    },
	    {
	      "year": 2013,
	      "actual": 0.08275,
	      "expected": 0.24439
	    },
	    {
	      "year": 2014,
	      "actual": 0.08417,
	      "expected": 0.26983
	    },
	    {
	      "year": 2015,
	      "actual": 0.21377,
	      "expected": 0.32161
	    }
	  ],
	  "14860": [
	    {
	      "year": 2004,
	      "actual": 0,
	      "expected": 0
	    },
	    {
	      "year": 2005,
	      "actual": 0.01009,
	      "expected": 0.01024
	    },
	    {
	      "year": 2006,
	      "actual": 0.01398,
	      "expected": 0.03274
	    },
	    {
	      "year": 2007,
	      "actual": -0.06162,
	      "expected": 0.03829
	    },
	    {
	      "year": 2008,
	      "actual": 0.1201,
	      "expected": 0.06769
	    },
	    {
	      "year": 2009,
	      "actual": 0.04205,
	      "expected": 0.01817
	    },
	    {
	      "year": 2010,
	      "actual": 0.00086,
	      "expected": 0.02181
	    },
	    {
	      "year": 2011,
	      "actual": -0.0168,
	      "expected": 0.04157
	    },
	    {
	      "year": 2012,
	      "actual": -0.03519,
	      "expected": 0.03321
	    },
	    {
	      "year": 2013,
	      "actual": -0.03326,
	      "expected": 0.04887
	    },
	    {
	      "year": 2014,
	      "actual": -0.0371,
	      "expected": 0.05662
	    },
	    {
	      "year": 2015,
	      "actual": -0.06212,
	      "expected": 0.06834
	    }
	  ],
	  "15380": [
	    {
	      "year": 2004,
	      "actual": 0,
	      "expected": 0
	    },
	    {
	      "year": 2005,
	      "actual": 0.09997,
	      "expected": 0.04644
	    },
	    {
	      "year": 2006,
	      "actual": 0.04673,
	      "expected": 0.07595
	    },
	    {
	      "year": 2007,
	      "actual": 0.0807,
	      "expected": 0.06451
	    },
	    {
	      "year": 2008,
	      "actual": 0.09661,
	      "expected": 0.09727
	    },
	    {
	      "year": 2009,
	      "actual": 0.05713,
	      "expected": 0.11006
	    },
	    {
	      "year": 2010,
	      "actual": 0.06737,
	      "expected": 0.12568
	    },
	    {
	      "year": 2011,
	      "actual": 0.01481,
	      "expected": 0.13543
	    },
	    {
	      "year": 2012,
	      "actual": -0.09611,
	      "expected": 0.13966
	    },
	    {
	      "year": 2013,
	      "actual": -0.0793,
	      "expected": 0.16275
	    },
	    {
	      "year": 2014,
	      "actual": -0.06528,
	      "expected": 0.17835
	    },
	    {
	      "year": 2015,
	      "actual": -0.12852,
	      "expected": 0.17207
	    }
	  ],
	  "15980": [
	    {
	      "year": 2004,
	      "actual": 0,
	      "expected": 0
	    },
	    {
	      "year": 2005,
	      "actual": -0.09714,
	      "expected": -0.08736
	    },
	    {
	      "year": 2006,
	      "actual": -0.13047,
	      "expected": -0.05505
	    },
	    {
	      "year": 2007,
	      "actual": -0.1039,
	      "expected": -0.02585
	    },
	    {
	      "year": 2008,
	      "actual": -0.21332,
	      "expected": -0.07256
	    },
	    {
	      "year": 2009,
	      "actual": -0.24815,
	      "expected": -0.10914
	    },
	    {
	      "year": 2010,
	      "actual": -0.32682,
	      "expected": -0.11145
	    },
	    {
	      "year": 2011,
	      "actual": -0.38547,
	      "expected": -0.11459
	    },
	    {
	      "year": 2012,
	      "actual": -0.37095,
	      "expected": -0.09322
	    },
	    {
	      "year": 2013,
	      "actual": -0.36739,
	      "expected": -0.0803
	    },
	    {
	      "year": 2014,
	      "actual": -0.34878,
	      "expected": -0.06623
	    },
	    {
	      "year": 2015,
	      "actual": -0.31102,
	      "expected": -0.02583
	    }
	  ],
	  "16700": [
	    {
	      "year": 2004,
	      "actual": 0,
	      "expected": 0
	    },
	    {
	      "year": 2005,
	      "actual": -0.08456,
	      "expected": -0.00702
	    },
	    {
	      "year": 2006,
	      "actual": -0.05316,
	      "expected": 0.00793
	    },
	    {
	      "year": 2007,
	      "actual": 0.00126,
	      "expected": 0.07664
	    },
	    {
	      "year": 2008,
	      "actual": -0.03383,
	      "expected": 0.1019
	    },
	    {
	      "year": 2009,
	      "actual": -0.07915,
	      "expected": 0.09256
	    },
	    {
	      "year": 2010,
	      "actual": -0.05868,
	      "expected": 0.10414
	    },
	    {
	      "year": 2011,
	      "actual": 0.00439,
	      "expected": 0.13777
	    },
	    {
	      "year": 2012,
	      "actual": -0.01928,
	      "expected": 0.15408
	    },
	    {
	      "year": 2013,
	      "actual": 0.02582,
	      "expected": 0.16362
	    },
	    {
	      "year": 2014,
	      "actual": 0.0231,
	      "expected": 0.19144
	    },
	    {
	      "year": 2015,
	      "actual": 0.02588,
	      "expected": 0.23265
	    }
	  ],
	  "16740": [
	    {
	      "year": 2004,
	      "actual": 0,
	      "expected": 0
	    },
	    {
	      "year": 2005,
	      "actual": 0.05249,
	      "expected": 0.04689
	    },
	    {
	      "year": 2006,
	      "actual": 0.093,
	      "expected": 0.1056
	    },
	    {
	      "year": 2007,
	      "actual": 0.12324,
	      "expected": 0.1838
	    },
	    {
	      "year": 2008,
	      "actual": 0.33074,
	      "expected": 0.21816
	    },
	    {
	      "year": 2009,
	      "actual": 0.29616,
	      "expected": 0.15386
	    },
	    {
	      "year": 2010,
	      "actual": 0.0407,
	      "expected": 0.10384
	    },
	    {
	      "year": 2011,
	      "actual": 0.33729,
	      "expected": 0.27344
	    },
	    {
	      "year": 2012,
	      "actual": 0.22615,
	      "expected": 0.29146
	    },
	    {
	      "year": 2013,
	      "actual": 0.25866,
	      "expected": 0.35882
	    },
	    {
	      "year": 2014,
	      "actual": 0.29188,
	      "expected": 0.39677
	    },
	    {
	      "year": 2015,
	      "actual": 0.44242,
	      "expected": 0.49428
	    }
	  ],
	  "16860": [
	    {
	      "year": 2004,
	      "actual": 0,
	      "expected": 0
	    },
	    {
	      "year": 2005,
	      "actual": 0.0108,
	      "expected": -0.01583
	    },
	    {
	      "year": 2006,
	      "actual": 0.14217,
	      "expected": 0.03936
	    },
	    {
	      "year": 2007,
	      "actual": 0.12951,
	      "expected": -0.02932
	    },
	    {
	      "year": 2008,
	      "actual": 0.19104,
	      "expected": 0.00926
	    },
	    {
	      "year": 2009,
	      "actual": 0.23579,
	      "expected": 0.02286
	    },
	    {
	      "year": 2010,
	      "actual": 0.17886,
	      "expected": -0.00606
	    },
	    {
	      "year": 2011,
	      "actual": 0.04503,
	      "expected": -0.01842
	    },
	    {
	      "year": 2012,
	      "actual": -0.2273,
	      "expected": -0.04037
	    },
	    {
	      "year": 2013,
	      "actual": -0.27363,
	      "expected": -0.0819
	    },
	    {
	      "year": 2014,
	      "actual": -0.2563,
	      "expected": -0.06946
	    },
	    {
	      "year": 2015,
	      "actual": -0.26323,
	      "expected": -0.04552
	    }
	  ],
	  "16980": [
	    {
	      "year": 2004,
	      "actual": 0,
	      "expected": 0
	    },
	    {
	      "year": 2005,
	      "actual": -0.03847,
	      "expected": 0.01537
	    },
	    {
	      "year": 2006,
	      "actual": -0.03192,
	      "expected": 0.02705
	    },
	    {
	      "year": 2007,
	      "actual": -0.00852,
	      "expected": 0.04168
	    },
	    {
	      "year": 2008,
	      "actual": 0.07008,
	      "expected": 0.05689
	    },
	    {
	      "year": 2009,
	      "actual": 0.06701,
	      "expected": 0.0361
	    },
	    {
	      "year": 2010,
	      "actual": 0.10961,
	      "expected": 0.0448
	    },
	    {
	      "year": 2011,
	      "actual": 0.11264,
	      "expected": 0.04844
	    },
	    {
	      "year": 2012,
	      "actual": 0.13097,
	      "expected": 0.0686
	    },
	    {
	      "year": 2013,
	      "actual": 0.17886,
	      "expected": 0.1028
	    },
	    {
	      "year": 2014,
	      "actual": 0.16673,
	      "expected": 0.10736
	    },
	    {
	      "year": 2015,
	      "actual": 0.20434,
	      "expected": 0.13376
	    }
	  ],
	  "17140": [
	    {
	      "year": 2004,
	      "actual": 0,
	      "expected": 0
	    },
	    {
	      "year": 2005,
	      "actual": -0.00287,
	      "expected": 0.04606
	    },
	    {
	      "year": 2006,
	      "actual": -0.01987,
	      "expected": 0.06062
	    },
	    {
	      "year": 2007,
	      "actual": 0.00114,
	      "expected": 0.07701
	    },
	    {
	      "year": 2008,
	      "actual": 0.03469,
	      "expected": 0.10884
	    },
	    {
	      "year": 2009,
	      "actual": 0.02302,
	      "expected": 0.12762
	    },
	    {
	      "year": 2010,
	      "actual": 0.04571,
	      "expected": 0.11332
	    },
	    {
	      "year": 2011,
	      "actual": 0.03854,
	      "expected": 0.13827
	    },
	    {
	      "year": 2012,
	      "actual": -0.06383,
	      "expected": 0.14899
	    },
	    {
	      "year": 2013,
	      "actual": -0.09218,
	      "expected": 0.15384
	    },
	    {
	      "year": 2014,
	      "actual": -0.03143,
	      "expected": 0.17815
	    },
	    {
	      "year": 2015,
	      "actual": 0.07408,
	      "expected": 0.16494
	    }
	  ],
	  "17460": [
	    {
	      "year": 2004,
	      "actual": 0,
	      "expected": 0
	    },
	    {
	      "year": 2005,
	      "actual": 0.00264,
	      "expected": 0.0205
	    },
	    {
	      "year": 2006,
	      "actual": 0.02263,
	      "expected": 0.0365
	    },
	    {
	      "year": 2007,
	      "actual": 0.10289,
	      "expected": 0.05554
	    },
	    {
	      "year": 2008,
	      "actual": -0.10381,
	      "expected": -0.00147
	    },
	    {
	      "year": 2009,
	      "actual": -0.11622,
	      "expected": -0.01801
	    },
	    {
	      "year": 2010,
	      "actual": 0.09459,
	      "expected": -0.02954
	    },
	    {
	      "year": 2011,
	      "actual": 0.08654,
	      "expected": 0.00403
	    },
	    {
	      "year": 2012,
	      "actual": 0.15082,
	      "expected": 0.02193
	    },
	    {
	      "year": 2013,
	      "actual": 0.24969,
	      "expected": 0.04163
	    },
	    {
	      "year": 2014,
	      "actual": 0.23429,
	      "expected": 0.02587
	    },
	    {
	      "year": 2015,
	      "actual": 0.29741,
	      "expected": 0.03878
	    }
	  ],
	  "17820": [
	    {
	      "year": 2004,
	      "actual": 0,
	      "expected": 0
	    },
	    {
	      "year": 2005,
	      "actual": -0.04218,
	      "expected": 0.00905
	    },
	    {
	      "year": 2006,
	      "actual": -0.0321,
	      "expected": 0.01797
	    },
	    {
	      "year": 2007,
	      "actual": 0.01128,
	      "expected": 0.01515
	    },
	    {
	      "year": 2008,
	      "actual": -0.00272,
	      "expected": 0.02375
	    },
	    {
	      "year": 2009,
	      "actual": -0.05107,
	      "expected": -0.00011
	    },
	    {
	      "year": 2010,
	      "actual": -0.11823,
	      "expected": -0.02568
	    },
	    {
	      "year": 2011,
	      "actual": -0.14393,
	      "expected": 0.01044
	    },
	    {
	      "year": 2012,
	      "actual": -0.21678,
	      "expected": -0.01397
	    },
	    {
	      "year": 2013,
	      "actual": -0.12352,
	      "expected": 0.04395
	    },
	    {
	      "year": 2014,
	      "actual": -0.10899,
	      "expected": 0.06278
	    },
	    {
	      "year": 2015,
	      "actual": -0.05474,
	      "expected": 0.08756
	    }
	  ],
	  "17900": [
	    {
	      "year": 2004,
	      "actual": 0,
	      "expected": 0
	    },
	    {
	      "year": 2005,
	      "actual": 0.03848,
	      "expected": 0.02547
	    },
	    {
	      "year": 2006,
	      "actual": 0.02061,
	      "expected": 0.05
	    },
	    {
	      "year": 2007,
	      "actual": 0.0534,
	      "expected": 0.08647
	    },
	    {
	      "year": 2008,
	      "actual": 0.09316,
	      "expected": 0.09588
	    },
	    {
	      "year": 2009,
	      "actual": 0.05284,
	      "expected": 0.10327
	    },
	    {
	      "year": 2010,
	      "actual": -0.0085,
	      "expected": 0.08364
	    },
	    {
	      "year": 2011,
	      "actual": 0.05502,
	      "expected": 0.09445
	    },
	    {
	      "year": 2012,
	      "actual": -0.11731,
	      "expected": 0.12063
	    },
	    {
	      "year": 2013,
	      "actual": -0.09498,
	      "expected": 0.12922
	    },
	    {
	      "year": 2014,
	      "actual": -0.11173,
	      "expected": 0.12043
	    },
	    {
	      "year": 2015,
	      "actual": -0.13207,
	      "expected": 0.11255
	    }
	  ],
	  "18140": [
	    {
	      "year": 2004,
	      "actual": 0,
	      "expected": 0
	    },
	    {
	      "year": 2005,
	      "actual": 0.04446,
	      "expected": -0.00761
	    },
	    {
	      "year": 2006,
	      "actual": 0.08987,
	      "expected": 0.0207
	    },
	    {
	      "year": 2007,
	      "actual": 0.05995,
	      "expected": 0.02447
	    },
	    {
	      "year": 2008,
	      "actual": 0.15245,
	      "expected": 0.07083
	    },
	    {
	      "year": 2009,
	      "actual": 0.05899,
	      "expected": 0.06778
	    },
	    {
	      "year": 2010,
	      "actual": 0.18095,
	      "expected": 0.09852
	    },
	    {
	      "year": 2011,
	      "actual": 0.19085,
	      "expected": 0.15318
	    },
	    {
	      "year": 2012,
	      "actual": 0.19076,
	      "expected": 0.2095
	    },
	    {
	      "year": 2013,
	      "actual": 0.23513,
	      "expected": 0.23107
	    },
	    {
	      "year": 2014,
	      "actual": 0.24818,
	      "expected": 0.23771
	    },
	    {
	      "year": 2015,
	      "actual": 0.30288,
	      "expected": 0.27591
	    }
	  ],
	  "19100": [
	    {
	      "year": 2004,
	      "actual": 0,
	      "expected": 0
	    },
	    {
	      "year": 2005,
	      "actual": -0.02255,
	      "expected": 0.00893
	    },
	    {
	      "year": 2006,
	      "actual": -0.00127,
	      "expected": 0.04726
	    },
	    {
	      "year": 2007,
	      "actual": 0.01676,
	      "expected": 0.08447
	    },
	    {
	      "year": 2008,
	      "actual": -0.00385,
	      "expected": 0.12824
	    },
	    {
	      "year": 2009,
	      "actual": -0.07249,
	      "expected": 0.13384
	    },
	    {
	      "year": 2010,
	      "actual": -0.03518,
	      "expected": 0.14644
	    },
	    {
	      "year": 2011,
	      "actual": -0.05287,
	      "expected": 0.17461
	    },
	    {
	      "year": 2012,
	      "actual": -0.07091,
	      "expected": 0.20154
	    },
	    {
	      "year": 2013,
	      "actual": -0.02813,
	      "expected": 0.2282
	    },
	    {
	      "year": 2014,
	      "actual": -0.03098,
	      "expected": 0.25893
	    },
	    {
	      "year": 2015,
	      "actual": 0.01006,
	      "expected": 0.27934
	    }
	  ],
	  "19380": [
	    {
	      "year": 2004,
	      "actual": 0,
	      "expected": 0
	    },
	    {
	      "year": 2005,
	      "actual": 0.01676,
	      "expected": 0.0238
	    },
	    {
	      "year": 2006,
	      "actual": 0.01088,
	      "expected": 0.02587
	    },
	    {
	      "year": 2007,
	      "actual": -0.01083,
	      "expected": 0.01839
	    },
	    {
	      "year": 2008,
	      "actual": -0.01249,
	      "expected": 0.03908
	    },
	    {
	      "year": 2009,
	      "actual": -0.04268,
	      "expected": 0.02135
	    },
	    {
	      "year": 2010,
	      "actual": -0.18015,
	      "expected": -0.05876
	    },
	    {
	      "year": 2011,
	      "actual": -0.07279,
	      "expected": 0.01217
	    },
	    {
	      "year": 2012,
	      "actual": -0.07862,
	      "expected": 0.0265
	    },
	    {
	      "year": 2013,
	      "actual": -0.07679,
	      "expected": 0.03403
	    },
	    {
	      "year": 2014,
	      "actual": -0.10993,
	      "expected": 0.03896
	    },
	    {
	      "year": 2015,
	      "actual": -0.08979,
	      "expected": 0.04299
	    }
	  ],
	  "19660": [
	    {
	      "year": 2004,
	      "actual": 0,
	      "expected": 0
	    },
	    {
	      "year": 2005,
	      "actual": 0.18846,
	      "expected": 0.0606
	    },
	    {
	      "year": 2006,
	      "actual": 0.14065,
	      "expected": 0.06773
	    },
	    {
	      "year": 2007,
	      "actual": 0.52346,
	      "expected": 0.10943
	    },
	    {
	      "year": 2008,
	      "actual": 0.50737,
	      "expected": 0.11803
	    },
	    {
	      "year": 2009,
	      "actual": 0.31631,
	      "expected": 0.11377
	    },
	    {
	      "year": 2010,
	      "actual": 0.12502,
	      "expected": 0.10217
	    },
	    {
	      "year": 2011,
	      "actual": 0.02441,
	      "expected": 0.08271
	    },
	    {
	      "year": 2012,
	      "actual": -0.01977,
	      "expected": 0.11316
	    },
	    {
	      "year": 2013,
	      "actual": -0.02761,
	      "expected": 0.13065
	    },
	    {
	      "year": 2014,
	      "actual": -0.0366,
	      "expected": 0.14525
	    },
	    {
	      "year": 2015,
	      "actual": -0.00021,
	      "expected": 0.16707
	    }
	  ],
	  "19740": [
	    {
	      "year": 2004,
	      "actual": 0,
	      "expected": 0
	    },
	    {
	      "year": 2005,
	      "actual": -0.00893,
	      "expected": -0.00113
	    },
	    {
	      "year": 2006,
	      "actual": 0.02044,
	      "expected": 0.03725
	    },
	    {
	      "year": 2007,
	      "actual": 0.05142,
	      "expected": 0.08565
	    },
	    {
	      "year": 2008,
	      "actual": 0.09873,
	      "expected": 0.14069
	    },
	    {
	      "year": 2009,
	      "actual": 0.1288,
	      "expected": 0.12358
	    },
	    {
	      "year": 2010,
	      "actual": 0.06158,
	      "expected": 0.11745
	    },
	    {
	      "year": 2011,
	      "actual": 0.06552,
	      "expected": 0.14078
	    },
	    {
	      "year": 2012,
	      "actual": 0.06187,
	      "expected": 0.19187
	    },
	    {
	      "year": 2013,
	      "actual": 0.03361,
	      "expected": 0.22957
	    },
	    {
	      "year": 2014,
	      "actual": 0.06316,
	      "expected": 0.25014
	    },
	    {
	      "year": 2015,
	      "actual": 0.10759,
	      "expected": 0.29281
	    }
	  ],
	  "19780": [
	    {
	      "year": 2004,
	      "actual": 0,
	      "expected": 0
	    },
	    {
	      "year": 2005,
	      "actual": -0.08674,
	      "expected": -0.00246
	    },
	    {
	      "year": 2006,
	      "actual": -0.03375,
	      "expected": 0.04097
	    },
	    {
	      "year": 2007,
	      "actual": -0.04455,
	      "expected": 0.08077
	    },
	    {
	      "year": 2008,
	      "actual": -0.02487,
	      "expected": 0.09591
	    },
	    {
	      "year": 2009,
	      "actual": -0.08581,
	      "expected": 0.1002
	    },
	    {
	      "year": 2010,
	      "actual": -0.09091,
	      "expected": 0.09248
	    },
	    {
	      "year": 2011,
	      "actual": -0.08007,
	      "expected": 0.12518
	    },
	    {
	      "year": 2012,
	      "actual": -0.18095,
	      "expected": 0.12443
	    },
	    {
	      "year": 2013,
	      "actual": -0.17212,
	      "expected": 0.14478
	    },
	    {
	      "year": 2014,
	      "actual": -0.15299,
	      "expected": 0.14198
	    },
	    {
	      "year": 2015,
	      "actual": -0.15818,
	      "expected": 0.16352
	    }
	  ],
	  "19820": [
	    {
	      "year": 2004,
	      "actual": 0,
	      "expected": 0
	    },
	    {
	      "year": 2005,
	      "actual": -0.02264,
	      "expected": 0.0262
	    },
	    {
	      "year": 2006,
	      "actual": 0.02953,
	      "expected": 0.02905
	    },
	    {
	      "year": 2007,
	      "actual": -0.02111,
	      "expected": 0.02727
	    },
	    {
	      "year": 2008,
	      "actual": 0.04902,
	      "expected": 0.03123
	    },
	    {
	      "year": 2009,
	      "actual": 0.04861,
	      "expected": 0.01508
	    },
	    {
	      "year": 2010,
	      "actual": -0.02584,
	      "expected": 0.00349
	    },
	    {
	      "year": 2011,
	      "actual": -0.06833,
	      "expected": 0.00192
	    },
	    {
	      "year": 2012,
	      "actual": -0.12542,
	      "expected": 0.01926
	    },
	    {
	      "year": 2013,
	      "actual": -0.05115,
	      "expected": 0.02721
	    },
	    {
	      "year": 2014,
	      "actual": -0.06023,
	      "expected": 0.02419
	    },
	    {
	      "year": 2015,
	      "actual": 0.02204,
	      "expected": 0.04267
	    }
	  ],
	  "21340": [
	    {
	      "year": 2004,
	      "actual": 0,
	      "expected": 0
	    },
	    {
	      "year": 2005,
	      "actual": 0.01502,
	      "expected": 0.04745
	    },
	    {
	      "year": 2006,
	      "actual": 0.05218,
	      "expected": 0.09013
	    },
	    {
	      "year": 2007,
	      "actual": 0.0571,
	      "expected": 0.134
	    },
	    {
	      "year": 2008,
	      "actual": 0.02368,
	      "expected": 0.17617
	    },
	    {
	      "year": 2009,
	      "actual": 0.06596,
	      "expected": 0.19465
	    },
	    {
	      "year": 2010,
	      "actual": 0.0687,
	      "expected": 0.23888
	    },
	    {
	      "year": 2011,
	      "actual": -0.10574,
	      "expected": 0.1346
	    },
	    {
	      "year": 2012,
	      "actual": -0.09293,
	      "expected": 0.14064
	    },
	    {
	      "year": 2013,
	      "actual": -0.06913,
	      "expected": 0.17835
	    },
	    {
	      "year": 2014,
	      "actual": -0.02519,
	      "expected": 0.23354
	    },
	    {
	      "year": 2015,
	      "actual": -0.13147,
	      "expected": 0.1744
	    }
	  ],
	  "23420": [
	    {
	      "year": 2004,
	      "actual": 0,
	      "expected": 0
	    },
	    {
	      "year": 2005,
	      "actual": 0.02405,
	      "expected": 0.03526
	    },
	    {
	      "year": 2006,
	      "actual": 0.02326,
	      "expected": 0.05818
	    },
	    {
	      "year": 2007,
	      "actual": -0.00096,
	      "expected": 0.08251
	    },
	    {
	      "year": 2008,
	      "actual": 0.01043,
	      "expected": 0.09991
	    },
	    {
	      "year": 2009,
	      "actual": -0.01793,
	      "expected": 0.09558
	    },
	    {
	      "year": 2010,
	      "actual": -0.00698,
	      "expected": 0.0927
	    },
	    {
	      "year": 2011,
	      "actual": -0.04458,
	      "expected": 0.04417
	    },
	    {
	      "year": 2012,
	      "actual": 0.07408,
	      "expected": 0.04399
	    },
	    {
	      "year": 2013,
	      "actual": 0.13361,
	      "expected": 0.18075
	    },
	    {
	      "year": 2014,
	      "actual": 0.25155,
	      "expected": 0.19917
	    },
	    {
	      "year": 2015,
	      "actual": 0.3513,
	      "expected": 0.22582
	    }
	  ],
	  "24340": [
	    {
	      "year": 2004,
	      "actual": 0,
	      "expected": 0
	    },
	    {
	      "year": 2005,
	      "actual": -0.08246,
	      "expected": 0.03242
	    },
	    {
	      "year": 2006,
	      "actual": -0.02553,
	      "expected": 0.00292
	    },
	    {
	      "year": 2007,
	      "actual": -0.09224,
	      "expected": 0.06011
	    },
	    {
	      "year": 2008,
	      "actual": -0.00354,
	      "expected": 0.09434
	    },
	    {
	      "year": 2009,
	      "actual": -0.06453,
	      "expected": 0.03826
	    },
	    {
	      "year": 2010,
	      "actual": -0.10064,
	      "expected": 0.0723
	    },
	    {
	      "year": 2011,
	      "actual": -0.18066,
	      "expected": 0.12951
	    },
	    {
	      "year": 2012,
	      "actual": -0.38766,
	      "expected": 0.10757
	    },
	    {
	      "year": 2013,
	      "actual": -0.29831,
	      "expected": 0.14109
	    },
	    {
	      "year": 2014,
	      "actual": -0.2455,
	      "expected": 0.17482
	    },
	    {
	      "year": 2015,
	      "actual": -0.2791,
	      "expected": 0.12368
	    }
	  ],
	  "24660": [
	    {
	      "year": 2004,
	      "actual": 0,
	      "expected": 0
	    },
	    {
	      "year": 2005,
	      "actual": 0.08163,
	      "expected": 0.0454
	    },
	    {
	      "year": 2006,
	      "actual": 0.10274,
	      "expected": 0.06848
	    },
	    {
	      "year": 2007,
	      "actual": 0.0854,
	      "expected": 0.09682
	    },
	    {
	      "year": 2008,
	      "actual": 0.0678,
	      "expected": 0.1166
	    },
	    {
	      "year": 2009,
	      "actual": 0.01029,
	      "expected": 0.08518
	    },
	    {
	      "year": 2010,
	      "actual": 0.03375,
	      "expected": 0.07885
	    },
	    {
	      "year": 2011,
	      "actual": -0.00707,
	      "expected": 0.08252
	    },
	    {
	      "year": 2012,
	      "actual": -0.01753,
	      "expected": 0.09304
	    },
	    {
	      "year": 2013,
	      "actual": -0.00988,
	      "expected": 0.10314
	    },
	    {
	      "year": 2014,
	      "actual": -0.02618,
	      "expected": 0.10763
	    },
	    {
	      "year": 2015,
	      "actual": 0.00282,
	      "expected": 0.11027
	    }
	  ],
	  "24860": [
	    {
	      "year": 2004,
	      "actual": 0,
	      "expected": 0
	    },
	    {
	      "year": 2005,
	      "actual": 0.13727,
	      "expected": 0.0171
	    },
	    {
	      "year": 2006,
	      "actual": 0.07161,
	      "expected": 0.08724
	    },
	    {
	      "year": 2007,
	      "actual": 0.12919,
	      "expected": 0.11369
	    },
	    {
	      "year": 2008,
	      "actual": 0.10029,
	      "expected": 0.11675
	    },
	    {
	      "year": 2009,
	      "actual": 0.07628,
	      "expected": 0.08098
	    },
	    {
	      "year": 2010,
	      "actual": -0.02913,
	      "expected": 0.04409
	    },
	    {
	      "year": 2011,
	      "actual": 0.05464,
	      "expected": 0.06857
	    },
	    {
	      "year": 2012,
	      "actual": 0.08871,
	      "expected": 0.07404
	    },
	    {
	      "year": 2013,
	      "actual": 0.16601,
	      "expected": 0.10402
	    },
	    {
	      "year": 2014,
	      "actual": 0.18936,
	      "expected": 0.13898
	    },
	    {
	      "year": 2015,
	      "actual": 0.23806,
	      "expected": 0.16885
	    }
	  ],
	  "25420": [
	    {
	      "year": 2004,
	      "actual": 0,
	      "expected": 0
	    },
	    {
	      "year": 2005,
	      "actual": 0.16327,
	      "expected": 0.04146
	    },
	    {
	      "year": 2006,
	      "actual": 0.14693,
	      "expected": 0.07195
	    },
	    {
	      "year": 2007,
	      "actual": 0.13624,
	      "expected": 0.04705
	    },
	    {
	      "year": 2008,
	      "actual": 0.19122,
	      "expected": 0.12529
	    },
	    {
	      "year": 2009,
	      "actual": 0.16255,
	      "expected": 0.18091
	    },
	    {
	      "year": 2010,
	      "actual": 0.10223,
	      "expected": 0.20651
	    },
	    {
	      "year": 2011,
	      "actual": 0.08127,
	      "expected": 0.17105
	    },
	    {
	      "year": 2012,
	      "actual": 0.12244,
	      "expected": 0.2233
	    },
	    {
	      "year": 2013,
	      "actual": 0.03004,
	      "expected": 0.1473
	    },
	    {
	      "year": 2014,
	      "actual": 0.07992,
	      "expected": 0.2177
	    },
	    {
	      "year": 2015,
	      "actual": 0.10415,
	      "expected": 0.24578
	    }
	  ],
	  "25540": [
	    {
	      "year": 2004,
	      "actual": 0,
	      "expected": 0
	    },
	    {
	      "year": 2005,
	      "actual": -0.02912,
	      "expected": 0.0471
	    },
	    {
	      "year": 2006,
	      "actual": -0.00149,
	      "expected": 0.08204
	    },
	    {
	      "year": 2007,
	      "actual": 0.01747,
	      "expected": 0.09648
	    },
	    {
	      "year": 2008,
	      "actual": 0.04078,
	      "expected": 0.10096
	    },
	    {
	      "year": 2009,
	      "actual": 0.03853,
	      "expected": 0.11864
	    },
	    {
	      "year": 2010,
	      "actual": 0.00073,
	      "expected": 0.13108
	    },
	    {
	      "year": 2011,
	      "actual": 0.11584,
	      "expected": 0.15007
	    },
	    {
	      "year": 2012,
	      "actual": 0.06805,
	      "expected": 0.14614
	    },
	    {
	      "year": 2013,
	      "actual": 0.0806,
	      "expected": 0.15098
	    },
	    {
	      "year": 2014,
	      "actual": 0.07747,
	      "expected": 0.13554
	    },
	    {
	      "year": 2015,
	      "actual": 0.18427,
	      "expected": 0.15767
	    }
	  ],
	  "26420": [
	    {
	      "year": 2004,
	      "actual": 0,
	      "expected": 0
	    },
	    {
	      "year": 2005,
	      "actual": -0.04097,
	      "expected": 0.01509
	    },
	    {
	      "year": 2006,
	      "actual": -0.01496,
	      "expected": 0.05715
	    },
	    {
	      "year": 2007,
	      "actual": 0.01638,
	      "expected": 0.11123
	    },
	    {
	      "year": 2008,
	      "actual": 0.0138,
	      "expected": 0.15306
	    },
	    {
	      "year": 2009,
	      "actual": 0.05061,
	      "expected": 0.16929
	    },
	    {
	      "year": 2010,
	      "actual": 0.09457,
	      "expected": 0.19294
	    },
	    {
	      "year": 2011,
	      "actual": 0.05341,
	      "expected": 0.23297
	    },
	    {
	      "year": 2012,
	      "actual": -0.01091,
	      "expected": 0.26021
	    },
	    {
	      "year": 2013,
	      "actual": -0.00201,
	      "expected": 0.29453
	    },
	    {
	      "year": 2014,
	      "actual": 0.09449,
	      "expected": 0.3353
	    },
	    {
	      "year": 2015,
	      "actual": 0.15529,
	      "expected": 0.38216
	    }
	  ],
	  "26900": [
	    {
	      "year": 2004,
	      "actual": 0,
	      "expected": 0
	    },
	    {
	      "year": 2005,
	      "actual": 0.02903,
	      "expected": 0.01142
	    },
	    {
	      "year": 2006,
	      "actual": -0.13252,
	      "expected": -0.02575
	    },
	    {
	      "year": 2007,
	      "actual": -0.03235,
	      "expected": 0.0069
	    },
	    {
	      "year": 2008,
	      "actual": -0.01166,
	      "expected": 0.01018
	    },
	    {
	      "year": 2009,
	      "actual": 0.01764,
	      "expected": 0.00032
	    },
	    {
	      "year": 2010,
	      "actual": 0.01132,
	      "expected": 0.02672
	    },
	    {
	      "year": 2011,
	      "actual": 0.15997,
	      "expected": 0.05893
	    },
	    {
	      "year": 2012,
	      "actual": 0.33355,
	      "expected": 0.07568
	    },
	    {
	      "year": 2013,
	      "actual": 0.35508,
	      "expected": 0.09505
	    },
	    {
	      "year": 2014,
	      "actual": 0.30696,
	      "expected": 0.09457
	    },
	    {
	      "year": 2015,
	      "actual": 0.41505,
	      "expected": 0.13235
	    }
	  ],
	  "27140": [
	    {
	      "year": 2004,
	      "actual": 0,
	      "expected": 0
	    },
	    {
	      "year": 2005,
	      "actual": -0.00452,
	      "expected": 0.01832
	    },
	    {
	      "year": 2006,
	      "actual": 0.03123,
	      "expected": 0.03965
	    },
	    {
	      "year": 2007,
	      "actual": -0.01901,
	      "expected": 0.07239
	    },
	    {
	      "year": 2008,
	      "actual": -0.05125,
	      "expected": 0.1109
	    },
	    {
	      "year": 2009,
	      "actual": -0.04844,
	      "expected": 0.12808
	    },
	    {
	      "year": 2010,
	      "actual": -0.24146,
	      "expected": 0.08622
	    },
	    {
	      "year": 2011,
	      "actual": -0.04639,
	      "expected": 0.1262
	    },
	    {
	      "year": 2012,
	      "actual": -0.06072,
	      "expected": 0.12956
	    },
	    {
	      "year": 2013,
	      "actual": -0.08769,
	      "expected": 0.14433
	    },
	    {
	      "year": 2014,
	      "actual": -0.13212,
	      "expected": 0.0972
	    },
	    {
	      "year": 2015,
	      "actual": -0.10943,
	      "expected": 0.1604
	    }
	  ],
	  "27260": [
	    {
	      "year": 2004,
	      "actual": 0,
	      "expected": 0
	    },
	    {
	      "year": 2005,
	      "actual": -0.03903,
	      "expected": 0.01564
	    },
	    {
	      "year": 2006,
	      "actual": -0.00894,
	      "expected": 0.04647
	    },
	    {
	      "year": 2007,
	      "actual": 0.00614,
	      "expected": 0.11609
	    },
	    {
	      "year": 2008,
	      "actual": -0.01924,
	      "expected": 0.14578
	    },
	    {
	      "year": 2009,
	      "actual": -0.04034,
	      "expected": 0.13547
	    },
	    {
	      "year": 2010,
	      "actual": 0.04852,
	      "expected": 0.17146
	    },
	    {
	      "year": 2011,
	      "actual": 0.06994,
	      "expected": 0.11745
	    },
	    {
	      "year": 2012,
	      "actual": 0.13019,
	      "expected": 0.13795
	    },
	    {
	      "year": 2013,
	      "actual": 0.21814,
	      "expected": 0.19721
	    },
	    {
	      "year": 2014,
	      "actual": 0.2049,
	      "expected": 0.20591
	    },
	    {
	      "year": 2015,
	      "actual": 0.16981,
	      "expected": 0.20312
	    }
	  ],
	  "28140": [
	    {
	      "year": 2004,
	      "actual": 0,
	      "expected": 0
	    },
	    {
	      "year": 2005,
	      "actual": 0.03371,
	      "expected": 0.02879
	    },
	    {
	      "year": 2006,
	      "actual": 0.02429,
	      "expected": 0.03197
	    },
	    {
	      "year": 2007,
	      "actual": 0.06431,
	      "expected": 0.09701
	    },
	    {
	      "year": 2008,
	      "actual": 0.1004,
	      "expected": 0.09316
	    },
	    {
	      "year": 2009,
	      "actual": 0.01257,
	      "expected": 0.0688
	    },
	    {
	      "year": 2010,
	      "actual": -0.03603,
	      "expected": 0.0246
	    },
	    {
	      "year": 2011,
	      "actual": -0.1054,
	      "expected": 0.05763
	    },
	    {
	      "year": 2012,
	      "actual": -0.15885,
	      "expected": 0.06991
	    },
	    {
	      "year": 2013,
	      "actual": -0.10294,
	      "expected": 0.0986
	    },
	    {
	      "year": 2014,
	      "actual": -0.04852,
	      "expected": 0.12343
	    },
	    {
	      "year": 2015,
	      "actual": -0.00704,
	      "expected": 0.15346
	    }
	  ],
	  "28940": [
	    {
	      "year": 2004,
	      "actual": 0,
	      "expected": 0
	    },
	    {
	      "year": 2005,
	      "actual": -0.0031,
	      "expected": 0.02352
	    },
	    {
	      "year": 2006,
	      "actual": 0.01517,
	      "expected": 0.06382
	    },
	    {
	      "year": 2007,
	      "actual": 0.08595,
	      "expected": 0.05351
	    },
	    {
	      "year": 2008,
	      "actual": 0.12196,
	      "expected": 0.10448
	    },
	    {
	      "year": 2009,
	      "actual": 0.10619,
	      "expected": 0.08968
	    },
	    {
	      "year": 2010,
	      "actual": -0.00124,
	      "expected": 0.08546
	    },
	    {
	      "year": 2011,
	      "actual": -0.05416,
	      "expected": 0.10934
	    },
	    {
	      "year": 2012,
	      "actual": -0.10777,
	      "expected": 0.1063
	    },
	    {
	      "year": 2013,
	      "actual": -0.10901,
	      "expected": 0.11366
	    },
	    {
	      "year": 2014,
	      "actual": -0.12931,
	      "expected": 0.11646
	    },
	    {
	      "year": 2015,
	      "actual": -0.1163,
	      "expected": 0.13465
	    }
	  ],
	  "29460": [
	    {
	      "year": 2004,
	      "actual": 0,
	      "expected": 0
	    },
	    {
	      "year": 2005,
	      "actual": -0.05591,
	      "expected": 0.05884
	    },
	    {
	      "year": 2006,
	      "actual": 0.05966,
	      "expected": 0.06007
	    },
	    {
	      "year": 2007,
	      "actual": 0.08235,
	      "expected": 0.07407
	    },
	    {
	      "year": 2008,
	      "actual": 0.06566,
	      "expected": 0.0919
	    },
	    {
	      "year": 2009,
	      "actual": 0.01593,
	      "expected": 0.11362
	    },
	    {
	      "year": 2010,
	      "actual": -0.00589,
	      "expected": 0.14091
	    },
	    {
	      "year": 2011,
	      "actual": 0.08642,
	      "expected": 0.16877
	    },
	    {
	      "year": 2012,
	      "actual": -0.09298,
	      "expected": 0.16096
	    },
	    {
	      "year": 2013,
	      "actual": -0.05921,
	      "expected": 0.18797
	    },
	    {
	      "year": 2014,
	      "actual": -0.07906,
	      "expected": 0.19599
	    },
	    {
	      "year": 2015,
	      "actual": -0.00888,
	      "expected": 0.20638
	    }
	  ],
	  "29820": [
	    {
	      "year": 2004,
	      "actual": 0,
	      "expected": 0
	    },
	    {
	      "year": 2005,
	      "actual": 0.10825,
	      "expected": 0.06745
	    },
	    {
	      "year": 2006,
	      "actual": 0.08273,
	      "expected": 0.10887
	    },
	    {
	      "year": 2007,
	      "actual": 0.17132,
	      "expected": 0.15042
	    },
	    {
	      "year": 2008,
	      "actual": 0.08472,
	      "expected": 0.11435
	    },
	    {
	      "year": 2009,
	      "actual": 0.08461,
	      "expected": 0.06571
	    },
	    {
	      "year": 2010,
	      "actual": 0.13325,
	      "expected": 0.09655
	    },
	    {
	      "year": 2011,
	      "actual": 0.19035,
	      "expected": 0.13189
	    },
	    {
	      "year": 2012,
	      "actual": 0.18591,
	      "expected": 0.12496
	    },
	    {
	      "year": 2013,
	      "actual": 0.29214,
	      "expected": 0.14828
	    },
	    {
	      "year": 2014,
	      "actual": 0.34805,
	      "expected": 0.2041
	    },
	    {
	      "year": 2015,
	      "actual": 0.34455,
	      "expected": 0.22364
	    }
	  ],
	  "30780": [
	    {
	      "year": 2004,
	      "actual": 0,
	      "expected": 0
	    },
	    {
	      "year": 2005,
	      "actual": -0.03231,
	      "expected": 0.0011
	    },
	    {
	      "year": 2006,
	      "actual": -0.01025,
	      "expected": 0.0443
	    },
	    {
	      "year": 2007,
	      "actual": -0.07299,
	      "expected": 0.0574
	    },
	    {
	      "year": 2008,
	      "actual": -0.04035,
	      "expected": 0.07159
	    },
	    {
	      "year": 2009,
	      "actual": -0.02614,
	      "expected": 0.07841
	    },
	    {
	      "year": 2010,
	      "actual": 0.0647,
	      "expected": 0.07931
	    },
	    {
	      "year": 2011,
	      "actual": 0.0095,
	      "expected": 0.08934
	    },
	    {
	      "year": 2012,
	      "actual": -0.12994,
	      "expected": 0.09791
	    },
	    {
	      "year": 2013,
	      "actual": -0.14001,
	      "expected": 0.11113
	    },
	    {
	      "year": 2014,
	      "actual": -0.13909,
	      "expected": 0.10277
	    },
	    {
	      "year": 2015,
	      "actual": -0.16346,
	      "expected": 0.11673
	    }
	  ],
	  "31080": [
	    {
	      "year": 2004,
	      "actual": 0,
	      "expected": 0
	    },
	    {
	      "year": 2005,
	      "actual": 0.02753,
	      "expected": 0.02189
	    },
	    {
	      "year": 2006,
	      "actual": 0.0457,
	      "expected": 0.02921
	    },
	    {
	      "year": 2007,
	      "actual": -0.02451,
	      "expected": 0.06855
	    },
	    {
	      "year": 2008,
	      "actual": 0.07659,
	      "expected": 0.10768
	    },
	    {
	      "year": 2009,
	      "actual": 0.0782,
	      "expected": 0.08952
	    },
	    {
	      "year": 2010,
	      "actual": 0.0748,
	      "expected": 0.09187
	    },
	    {
	      "year": 2011,
	      "actual": 0.12703,
	      "expected": 0.11799
	    },
	    {
	      "year": 2012,
	      "actual": 0.0923,
	      "expected": 0.12538
	    },
	    {
	      "year": 2013,
	      "actual": 0.12297,
	      "expected": 0.18926
	    },
	    {
	      "year": 2014,
	      "actual": 0.14632,
	      "expected": 0.19856
	    },
	    {
	      "year": 2015,
	      "actual": 0.14937,
	      "expected": 0.22626
	    }
	  ],
	  "31140": [
	    {
	      "year": 2004,
	      "actual": 0,
	      "expected": 0
	    },
	    {
	      "year": 2005,
	      "actual": 0.00927,
	      "expected": 0.02354
	    },
	    {
	      "year": 2006,
	      "actual": 0.06222,
	      "expected": 0.02487
	    },
	    {
	      "year": 2007,
	      "actual": 0.06785,
	      "expected": 0.04192
	    },
	    {
	      "year": 2008,
	      "actual": 0.0793,
	      "expected": 0.0545
	    },
	    {
	      "year": 2009,
	      "actual": 0.13525,
	      "expected": 0.11644
	    },
	    {
	      "year": 2010,
	      "actual": 0.07358,
	      "expected": 0.14132
	    },
	    {
	      "year": 2011,
	      "actual": 0.00009,
	      "expected": 0.12713
	    },
	    {
	      "year": 2012,
	      "actual": 0.0297,
	      "expected": 0.13133
	    },
	    {
	      "year": 2013,
	      "actual": -0.0136,
	      "expected": 0.12542
	    },
	    {
	      "year": 2014,
	      "actual": -0.02431,
	      "expected": 0.13183
	    },
	    {
	      "year": 2015,
	      "actual": -0.0272,
	      "expected": 0.13848
	    }
	  ],
	  "32580": [
	    {
	      "year": 2004,
	      "actual": 0,
	      "expected": 0
	    },
	    {
	      "year": 2005,
	      "actual": 0.01006,
	      "expected": 0.06919
	    },
	    {
	      "year": 2006,
	      "actual": -0.0211,
	      "expected": 0.10868
	    },
	    {
	      "year": 2007,
	      "actual": 0.05384,
	      "expected": 0.17465
	    },
	    {
	      "year": 2008,
	      "actual": 0.08385,
	      "expected": 0.20261
	    },
	    {
	      "year": 2009,
	      "actual": 0.06652,
	      "expected": 0.22091
	    },
	    {
	      "year": 2010,
	      "actual": 0.04829,
	      "expected": 0.24909
	    },
	    {
	      "year": 2011,
	      "actual": 0.10709,
	      "expected": 0.27895
	    },
	    {
	      "year": 2012,
	      "actual": -0.00552,
	      "expected": 0.27607
	    },
	    {
	      "year": 2013,
	      "actual": -0.02401,
	      "expected": 0.29561
	    },
	    {
	      "year": 2014,
	      "actual": -0.00657,
	      "expected": 0.30796
	    },
	    {
	      "year": 2015,
	      "actual": 0.00186,
	      "expected": 0.34509
	    }
	  ],
	  "32820": [
	    {
	      "year": 2004,
	      "actual": 0,
	      "expected": 0
	    },
	    {
	      "year": 2005,
	      "actual": 0.02055,
	      "expected": 0.0261
	    },
	    {
	      "year": 2006,
	      "actual": 0.02027,
	      "expected": 0.02597
	    },
	    {
	      "year": 2007,
	      "actual": -0.08434,
	      "expected": 0.01403
	    },
	    {
	      "year": 2008,
	      "actual": -0.02436,
	      "expected": 0.03651
	    },
	    {
	      "year": 2009,
	      "actual": -0.00626,
	      "expected": 0.01792
	    },
	    {
	      "year": 2010,
	      "actual": 0.02144,
	      "expected": 0.0162
	    },
	    {
	      "year": 2011,
	      "actual": -0.00751,
	      "expected": 0.01712
	    },
	    {
	      "year": 2012,
	      "actual": -0.02168,
	      "expected": 0.03103
	    },
	    {
	      "year": 2013,
	      "actual": -0.03223,
	      "expected": 0.04002
	    },
	    {
	      "year": 2014,
	      "actual": -0.02031,
	      "expected": 0.04431
	    },
	    {
	      "year": 2015,
	      "actual": -0.04061,
	      "expected": 0.05402
	    }
	  ],
	  "33100": [
	    {
	      "year": 2004,
	      "actual": 0,
	      "expected": 0
	    },
	    {
	      "year": 2005,
	      "actual": -0.02235,
	      "expected": 0.0468
	    },
	    {
	      "year": 2006,
	      "actual": 0.00961,
	      "expected": 0.03899
	    },
	    {
	      "year": 2007,
	      "actual": -0.02236,
	      "expected": 0.08031
	    },
	    {
	      "year": 2008,
	      "actual": -0.01024,
	      "expected": 0.06821
	    },
	    {
	      "year": 2009,
	      "actual": 0.01377,
	      "expected": 0.02868
	    },
	    {
	      "year": 2010,
	      "actual": 0.00895,
	      "expected": 0.03278
	    },
	    {
	      "year": 2011,
	      "actual": 0.02639,
	      "expected": 0.09734
	    },
	    {
	      "year": 2012,
	      "actual": -0.00995,
	      "expected": 0.10078
	    },
	    {
	      "year": 2013,
	      "actual": 0.00776,
	      "expected": 0.11953
	    },
	    {
	      "year": 2014,
	      "actual": 0.03486,
	      "expected": 0.13088
	    },
	    {
	      "year": 2015,
	      "actual": 0.11156,
	      "expected": 0.1739
	    }
	  ],
	  "33460": [
	    {
	      "year": 2004,
	      "actual": 0,
	      "expected": 0
	    },
	    {
	      "year": 2005,
	      "actual": 0.06755,
	      "expected": -0.02911
	    },
	    {
	      "year": 2006,
	      "actual": -0.04332,
	      "expected": -0.03961
	    },
	    {
	      "year": 2007,
	      "actual": 0.09857,
	      "expected": 0.00106
	    },
	    {
	      "year": 2008,
	      "actual": 0.32777,
	      "expected": 0.06899
	    },
	    {
	      "year": 2009,
	      "actual": 0.16903,
	      "expected": 0.0696
	    },
	    {
	      "year": 2010,
	      "actual": 0.07519,
	      "expected": 0.04151
	    },
	    {
	      "year": 2011,
	      "actual": -0.02798,
	      "expected": 0.01243
	    },
	    {
	      "year": 2012,
	      "actual": 0.18726,
	      "expected": 0.03726
	    },
	    {
	      "year": 2013,
	      "actual": 0.23728,
	      "expected": 0.05752
	    },
	    {
	      "year": 2014,
	      "actual": 0.05902,
	      "expected": 0.0372
	    },
	    {
	      "year": 2015,
	      "actual": 0.08258,
	      "expected": 0.07547
	    }
	  ],
	  "34980": [
	    {
	      "year": 2004,
	      "actual": 0,
	      "expected": 0
	    },
	    {
	      "year": 2005,
	      "actual": 0.00436,
	      "expected": 0.0074
	    },
	    {
	      "year": 2006,
	      "actual": 0.09579,
	      "expected": 0.08294
	    },
	    {
	      "year": 2007,
	      "actual": 0.06928,
	      "expected": -0.02147
	    },
	    {
	      "year": 2008,
	      "actual": 0.32912,
	      "expected": 0.07042
	    },
	    {
	      "year": 2009,
	      "actual": 0.20399,
	      "expected": 0.095
	    },
	    {
	      "year": 2010,
	      "actual": 0.26252,
	      "expected": 0.10614
	    },
	    {
	      "year": 2011,
	      "actual": 0.34487,
	      "expected": 0.13997
	    },
	    {
	      "year": 2012,
	      "actual": 0.3961,
	      "expected": 0.16324
	    },
	    {
	      "year": 2013,
	      "actual": 0.40457,
	      "expected": 0.18233
	    },
	    {
	      "year": 2014,
	      "actual": 0.35849,
	      "expected": 0.20332
	    },
	    {
	      "year": 2015,
	      "actual": 0.4176,
	      "expected": 0.24914
	    }
	  ],
	  "35300": [
	    {
	      "year": 2004,
	      "actual": 0,
	      "expected": 0
	    },
	    {
	      "year": 2005,
	      "actual": -0.0769,
	      "expected": -0.00374
	    },
	    {
	      "year": 2006,
	      "actual": -0.14641,
	      "expected": -0.04013
	    },
	    {
	      "year": 2007,
	      "actual": -0.1292,
	      "expected": -0.00511
	    },
	    {
	      "year": 2008,
	      "actual": 0.21192,
	      "expected": 0.22553
	    },
	    {
	      "year": 2009,
	      "actual": 0.00186,
	      "expected": 0.10937
	    },
	    {
	      "year": 2010,
	      "actual": -0.34564,
	      "expected": 0.16378
	    },
	    {
	      "year": 2011,
	      "actual": -0.3363,
	      "expected": 0.15265
	    },
	    {
	      "year": 2012,
	      "actual": -0.34669,
	      "expected": 0.15151
	    },
	    {
	      "year": 2013,
	      "actual": -0.31056,
	      "expected": 0.1454
	    },
	    {
	      "year": 2014,
	      "actual": -0.31314,
	      "expected": 0.13739
	    },
	    {
	      "year": 2015,
	      "actual": -0.32638,
	      "expected": 0.13851
	    }
	  ],
	  "35380": [
	    {
	      "year": 2004,
	      "actual": 0,
	      "expected": 0
	    },
	    {
	      "year": 2005,
	      "actual": 0.00234,
	      "expected": -0.00342
	    },
	    {
	      "year": 2006,
	      "actual": -0.29855,
	      "expected": -0.23992
	    },
	    {
	      "year": 2007,
	      "actual": -0.26956,
	      "expected": -0.18575
	    },
	    {
	      "year": 2008,
	      "actual": -0.19935,
	      "expected": -0.14366
	    },
	    {
	      "year": 2009,
	      "actual": -0.17414,
	      "expected": -0.14263
	    },
	    {
	      "year": 2010,
	      "actual": -0.20043,
	      "expected": -0.12287
	    },
	    {
	      "year": 2011,
	      "actual": -0.2603,
	      "expected": -0.16034
	    },
	    {
	      "year": 2012,
	      "actual": -0.21449,
	      "expected": -0.09429
	    },
	    {
	      "year": 2013,
	      "actual": -0.19574,
	      "expected": -0.06644
	    },
	    {
	      "year": 2014,
	      "actual": -0.19841,
	      "expected": -0.05039
	    },
	    {
	      "year": 2015,
	      "actual": -0.19194,
	      "expected": -0.03408
	    }
	  ],
	  "35620": [
	    {
	      "year": 2004,
	      "actual": 0,
	      "expected": 0
	    },
	    {
	      "year": 2005,
	      "actual": 0.00936,
	      "expected": 0.01949
	    },
	    {
	      "year": 2006,
	      "actual": 0.05561,
	      "expected": 0.04286
	    },
	    {
	      "year": 2007,
	      "actual": 0.08187,
	      "expected": 0.05756
	    },
	    {
	      "year": 2008,
	      "actual": 0.1423,
	      "expected": 0.07239
	    },
	    {
	      "year": 2009,
	      "actual": 0.19963,
	      "expected": 0.06862
	    },
	    {
	      "year": 2010,
	      "actual": 0.19007,
	      "expected": 0.07321
	    },
	    {
	      "year": 2011,
	      "actual": 0.24901,
	      "expected": 0.09272
	    },
	    {
	      "year": 2012,
	      "actual": 0.29282,
	      "expected": 0.11682
	    },
	    {
	      "year": 2013,
	      "actual": 0.33126,
	      "expected": 0.13183
	    },
	    {
	      "year": 2014,
	      "actual": 0.36268,
	      "expected": 0.14486
	    },
	    {
	      "year": 2015,
	      "actual": 0.41943,
	      "expected": 0.1769
	    }
	  ],
	  "35840": [
	    {
	      "year": 2004,
	      "actual": 0,
	      "expected": 0
	    },
	    {
	      "year": 2005,
	      "actual": -0.04219,
	      "expected": -0.03635
	    },
	    {
	      "year": 2006,
	      "actual": -0.06638,
	      "expected": 0.03678
	    },
	    {
	      "year": 2007,
	      "actual": -0.06247,
	      "expected": 0.06966
	    },
	    {
	      "year": 2008,
	      "actual": -0.11947,
	      "expected": 0.0531
	    },
	    {
	      "year": 2009,
	      "actual": -0.16873,
	      "expected": 0.05346
	    },
	    {
	      "year": 2010,
	      "actual": -0.32681,
	      "expected": 0.02741
	    },
	    {
	      "year": 2011,
	      "actual": -0.19296,
	      "expected": 0.07171
	    },
	    {
	      "year": 2012,
	      "actual": -0.23407,
	      "expected": 0.07287
	    },
	    {
	      "year": 2013,
	      "actual": -0.16404,
	      "expected": 0.09473
	    },
	    {
	      "year": 2014,
	      "actual": -0.17313,
	      "expected": 0.10292
	    },
	    {
	      "year": 2015,
	      "actual": -0.13948,
	      "expected": 0.14851
	    }
	  ],
	  "36260": [
	    {
	      "year": 2004,
	      "actual": 0,
	      "expected": 0
	    },
	    {
	      "year": 2005,
	      "actual": 0.01091,
	      "expected": 0.01487
	    },
	    {
	      "year": 2006,
	      "actual": -0.00195,
	      "expected": 0.03575
	    },
	    {
	      "year": 2007,
	      "actual": 0.10284,
	      "expected": 0.09612
	    },
	    {
	      "year": 2008,
	      "actual": 0.10009,
	      "expected": 0.12263
	    },
	    {
	      "year": 2009,
	      "actual": 0.07973,
	      "expected": 0.12952
	    },
	    {
	      "year": 2010,
	      "actual": 0.00279,
	      "expected": 0.12059
	    },
	    {
	      "year": 2011,
	      "actual": 0.07298,
	      "expected": 0.1373
	    },
	    {
	      "year": 2012,
	      "actual": 0.09368,
	      "expected": 0.15929
	    },
	    {
	      "year": 2013,
	      "actual": 0.11671,
	      "expected": 0.19727
	    },
	    {
	      "year": 2014,
	      "actual": 0.11398,
	      "expected": 0.21028
	    },
	    {
	      "year": 2015,
	      "actual": 0.10285,
	      "expected": 0.23608
	    }
	  ],
	  "36420": [
	    {
	      "year": 2004,
	      "actual": 0,
	      "expected": 0
	    },
	    {
	      "year": 2005,
	      "actual": -0.04831,
	      "expected": -0.00253
	    },
	    {
	      "year": 2006,
	      "actual": -0.10299,
	      "expected": 0.0436
	    },
	    {
	      "year": 2007,
	      "actual": -0.07129,
	      "expected": 0.07922
	    },
	    {
	      "year": 2008,
	      "actual": -0.01828,
	      "expected": 0.12019
	    },
	    {
	      "year": 2009,
	      "actual": -0.13993,
	      "expected": 0.08526
	    },
	    {
	      "year": 2010,
	      "actual": -0.01805,
	      "expected": 0.11106
	    },
	    {
	      "year": 2011,
	      "actual": -0.0227,
	      "expected": 0.15137
	    },
	    {
	      "year": 2012,
	      "actual": -0.05248,
	      "expected": 0.19353
	    },
	    {
	      "year": 2013,
	      "actual": 0.00057,
	      "expected": 0.20685
	    },
	    {
	      "year": 2014,
	      "actual": -0.01579,
	      "expected": 0.22683
	    },
	    {
	      "year": 2015,
	      "actual": 0.04007,
	      "expected": 0.2348
	    }
	  ],
	  "36540": [
	    {
	      "year": 2004,
	      "actual": 0,
	      "expected": 0
	    },
	    {
	      "year": 2005,
	      "actual": -0.03699,
	      "expected": 0.0017
	    },
	    {
	      "year": 2006,
	      "actual": -0.01198,
	      "expected": 0.02553
	    },
	    {
	      "year": 2007,
	      "actual": 0.00527,
	      "expected": 0.04724
	    },
	    {
	      "year": 2008,
	      "actual": 0.03722,
	      "expected": 0.08027
	    },
	    {
	      "year": 2009,
	      "actual": 0.04192,
	      "expected": 0.07745
	    },
	    {
	      "year": 2010,
	      "actual": 0.02934,
	      "expected": 0.08665
	    },
	    {
	      "year": 2011,
	      "actual": 0.01256,
	      "expected": 0.09684
	    },
	    {
	      "year": 2012,
	      "actual": -0.0427,
	      "expected": 0.10403
	    },
	    {
	      "year": 2013,
	      "actual": -0.06783,
	      "expected": 0.12048
	    },
	    {
	      "year": 2014,
	      "actual": -0.09202,
	      "expected": 0.12318
	    },
	    {
	      "year": 2015,
	      "actual": -0.00216,
	      "expected": 0.13444
	    }
	  ],
	  "36740": [
	    {
	      "year": 2004,
	      "actual": 0,
	      "expected": 0
	    },
	    {
	      "year": 2005,
	      "actual": -0.07598,
	      "expected": -0.01404
	    },
	    {
	      "year": 2006,
	      "actual": -0.03876,
	      "expected": 0.05224
	    },
	    {
	      "year": 2007,
	      "actual": 0.01477,
	      "expected": 0.11151
	    },
	    {
	      "year": 2008,
	      "actual": -0.00456,
	      "expected": 0.12752
	    },
	    {
	      "year": 2009,
	      "actual": -0.07961,
	      "expected": 0.10709
	    },
	    {
	      "year": 2010,
	      "actual": -0.07704,
	      "expected": 0.12476
	    },
	    {
	      "year": 2011,
	      "actual": -0.04583,
	      "expected": 0.15297
	    },
	    {
	      "year": 2012,
	      "actual": -0.0209,
	      "expected": 0.19769
	    },
	    {
	      "year": 2013,
	      "actual": -0.00153,
	      "expected": 0.21335
	    },
	    {
	      "year": 2014,
	      "actual": 0.01714,
	      "expected": 0.23661
	    },
	    {
	      "year": 2015,
	      "actual": 0.05565,
	      "expected": 0.25087
	    }
	  ],
	  "37100": [
	    {
	      "year": 2004,
	      "actual": 0,
	      "expected": 0
	    },
	    {
	      "year": 2005,
	      "actual": 0.07863,
	      "expected": 0.03096
	    },
	    {
	      "year": 2006,
	      "actual": 0.066,
	      "expected": 0.04309
	    },
	    {
	      "year": 2007,
	      "actual": 0.11443,
	      "expected": 0.15026
	    },
	    {
	      "year": 2008,
	      "actual": 0.11022,
	      "expected": 0.14601
	    },
	    {
	      "year": 2009,
	      "actual": 0.09253,
	      "expected": 0.12802
	    },
	    {
	      "year": 2010,
	      "actual": 0.62181,
	      "expected": 0.13781
	    },
	    {
	      "year": 2011,
	      "actual": 0.57313,
	      "expected": 0.14405
	    },
	    {
	      "year": 2012,
	      "actual": 0.55017,
	      "expected": 0.15437
	    },
	    {
	      "year": 2013,
	      "actual": 0.56659,
	      "expected": 0.19949
	    },
	    {
	      "year": 2014,
	      "actual": 0.63546,
	      "expected": 0.21037
	    },
	    {
	      "year": 2015,
	      "actual": 0.50514,
	      "expected": 0.21344
	    }
	  ],
	  "37340": [
	    {
	      "year": 2004,
	      "actual": 0,
	      "expected": 0
	    },
	    {
	      "year": 2005,
	      "actual": 0.02949,
	      "expected": 0.07055
	    },
	    {
	      "year": 2006,
	      "actual": 0.01377,
	      "expected": 0.07515
	    },
	    {
	      "year": 2007,
	      "actual": 0.03549,
	      "expected": 0.07889
	    },
	    {
	      "year": 2008,
	      "actual": 0.02471,
	      "expected": 0.09336
	    },
	    {
	      "year": 2009,
	      "actual": -0.05651,
	      "expected": 0.03628
	    },
	    {
	      "year": 2010,
	      "actual": -0.07975,
	      "expected": 0.02166
	    },
	    {
	      "year": 2011,
	      "actual": -0.09348,
	      "expected": 0.03945
	    },
	    {
	      "year": 2012,
	      "actual": -0.01212,
	      "expected": 0.0455
	    },
	    {
	      "year": 2013,
	      "actual": -0.03362,
	      "expected": 0.04008
	    },
	    {
	      "year": 2014,
	      "actual": -0.09829,
	      "expected": 0.03883
	    },
	    {
	      "year": 2015,
	      "actual": -0.08732,
	      "expected": 0.06896
	    }
	  ],
	  "37980": [
	    {
	      "year": 2004,
	      "actual": 0,
	      "expected": 0
	    },
	    {
	      "year": 2005,
	      "actual": 0.12512,
	      "expected": 0.0297
	    },
	    {
	      "year": 2006,
	      "actual": 0.04564,
	      "expected": 0.06113
	    },
	    {
	      "year": 2007,
	      "actual": 0.15585,
	      "expected": 0.07449
	    },
	    {
	      "year": 2008,
	      "actual": 0.16423,
	      "expected": 0.10694
	    },
	    {
	      "year": 2009,
	      "actual": 0.25637,
	      "expected": 0.10501
	    },
	    {
	      "year": 2010,
	      "actual": 0.26861,
	      "expected": 0.07792
	    },
	    {
	      "year": 2011,
	      "actual": 0.36865,
	      "expected": 0.09888
	    },
	    {
	      "year": 2012,
	      "actual": 0.09824,
	      "expected": 0.11579
	    },
	    {
	      "year": 2013,
	      "actual": 0.12076,
	      "expected": 0.11943
	    },
	    {
	      "year": 2014,
	      "actual": 0.1201,
	      "expected": 0.10481
	    },
	    {
	      "year": 2015,
	      "actual": 0.23984,
	      "expected": 0.12723
	    }
	  ],
	  "38060": [
	    {
	      "year": 2004,
	      "actual": 0,
	      "expected": 0
	    },
	    {
	      "year": 2005,
	      "actual": -0.00504,
	      "expected": 0.03804
	    },
	    {
	      "year": 2006,
	      "actual": 0.002,
	      "expected": 0.08794
	    },
	    {
	      "year": 2007,
	      "actual": -0.03849,
	      "expected": 0.08598
	    },
	    {
	      "year": 2008,
	      "actual": 0.00038,
	      "expected": 0.11015
	    },
	    {
	      "year": 2009,
	      "actual": -0.02625,
	      "expected": 0.08454
	    },
	    {
	      "year": 2010,
	      "actual": -0.01896,
	      "expected": 0.07958
	    },
	    {
	      "year": 2011,
	      "actual": -0.04216,
	      "expected": 0.11083
	    },
	    {
	      "year": 2012,
	      "actual": -0.08058,
	      "expected": 0.12631
	    },
	    {
	      "year": 2013,
	      "actual": -0.0498,
	      "expected": 0.16449
	    },
	    {
	      "year": 2014,
	      "actual": -0.05347,
	      "expected": 0.1737
	    },
	    {
	      "year": 2015,
	      "actual": -0.00264,
	      "expected": 0.20865
	    }
	  ],
	  "38300": [
	    {
	      "year": 2004,
	      "actual": 0,
	      "expected": 0
	    },
	    {
	      "year": 2005,
	      "actual": 0.00416,
	      "expected": 0.03393
	    },
	    {
	      "year": 2006,
	      "actual": 0.05049,
	      "expected": 0.09675
	    },
	    {
	      "year": 2007,
	      "actual": 0.00016,
	      "expected": 0.12541
	    },
	    {
	      "year": 2008,
	      "actual": -0.07706,
	      "expected": 0.11744
	    },
	    {
	      "year": 2009,
	      "actual": 0.03789,
	      "expected": 0.16263
	    },
	    {
	      "year": 2010,
	      "actual": 0.0902,
	      "expected": 0.21417
	    },
	    {
	      "year": 2011,
	      "actual": 0.1385,
	      "expected": 0.26969
	    },
	    {
	      "year": 2012,
	      "actual": -0.00469,
	      "expected": 0.2746
	    },
	    {
	      "year": 2013,
	      "actual": 0.04661,
	      "expected": 0.27877
	    },
	    {
	      "year": 2014,
	      "actual": 0.0091,
	      "expected": 0.24618
	    },
	    {
	      "year": 2015,
	      "actual": -0.06894,
	      "expected": 0.25542
	    }
	  ],
	  "38900": [
	    {
	      "year": 2004,
	      "actual": 0,
	      "expected": 0
	    },
	    {
	      "year": 2005,
	      "actual": -0.00087,
	      "expected": 0.01993
	    },
	    {
	      "year": 2006,
	      "actual": 0.01349,
	      "expected": 0.05778
	    },
	    {
	      "year": 2007,
	      "actual": 0.03551,
	      "expected": 0.08836
	    },
	    {
	      "year": 2008,
	      "actual": 0.05976,
	      "expected": 0.10688
	    },
	    {
	      "year": 2009,
	      "actual": 0.04669,
	      "expected": 0.08364
	    },
	    {
	      "year": 2010,
	      "actual": 0.02848,
	      "expected": 0.06905
	    },
	    {
	      "year": 2011,
	      "actual": 0.07087,
	      "expected": 0.12073
	    },
	    {
	      "year": 2012,
	      "actual": 0.10268,
	      "expected": 0.13798
	    },
	    {
	      "year": 2013,
	      "actual": 0.11129,
	      "expected": 0.17685
	    },
	    {
	      "year": 2014,
	      "actual": 0.16151,
	      "expected": 0.22767
	    },
	    {
	      "year": 2015,
	      "actual": 0.22409,
	      "expected": 0.28782
	    }
	  ],
	  "39300": [
	    {
	      "year": 2004,
	      "actual": 0,
	      "expected": 0
	    },
	    {
	      "year": 2005,
	      "actual": -0.03465,
	      "expected": 0.03599
	    },
	    {
	      "year": 2006,
	      "actual": -0.07758,
	      "expected": 0.03732
	    },
	    {
	      "year": 2007,
	      "actual": 0.02074,
	      "expected": 0.07008
	    },
	    {
	      "year": 2008,
	      "actual": 0.03125,
	      "expected": 0.06072
	    },
	    {
	      "year": 2009,
	      "actual": 0.05209,
	      "expected": 0.06053
	    },
	    {
	      "year": 2010,
	      "actual": -0.06667,
	      "expected": 0.05477
	    },
	    {
	      "year": 2011,
	      "actual": -0.04183,
	      "expected": 0.07912
	    },
	    {
	      "year": 2012,
	      "actual": -0.06943,
	      "expected": 0.0896
	    },
	    {
	      "year": 2013,
	      "actual": -0.05868,
	      "expected": 0.09953
	    },
	    {
	      "year": 2014,
	      "actual": -0.05074,
	      "expected": 0.10293
	    },
	    {
	      "year": 2015,
	      "actual": -0.05505,
	      "expected": 0.12396
	    }
	  ],
	  "39340": [
	    {
	      "year": 2004,
	      "actual": 0,
	      "expected": 0
	    },
	    {
	      "year": 2005,
	      "actual": 0.01396,
	      "expected": 0.06893
	    },
	    {
	      "year": 2006,
	      "actual": 0.00927,
	      "expected": 0.13177
	    },
	    {
	      "year": 2007,
	      "actual": -0.01068,
	      "expected": 0.16731
	    },
	    {
	      "year": 2008,
	      "actual": 0.01235,
	      "expected": 0.20903
	    },
	    {
	      "year": 2009,
	      "actual": 0.01709,
	      "expected": 0.22753
	    },
	    {
	      "year": 2010,
	      "actual": -0.06245,
	      "expected": 0.24155
	    },
	    {
	      "year": 2011,
	      "actual": -0.03215,
	      "expected": 0.26714
	    },
	    {
	      "year": 2012,
	      "actual": 0.40647,
	      "expected": 0.28481
	    },
	    {
	      "year": 2013,
	      "actual": 0.44005,
	      "expected": 0.32107
	    },
	    {
	      "year": 2014,
	      "actual": -0.03197,
	      "expected": 0.3366
	    },
	    {
	      "year": 2015,
	      "actual": 0.30718,
	      "expected": 0.36381
	    }
	  ],
	  "39580": [
	    {
	      "year": 2004,
	      "actual": 0,
	      "expected": 0
	    },
	    {
	      "year": 2005,
	      "actual": -0.05615,
	      "expected": 0.06044
	    },
	    {
	      "year": 2006,
	      "actual": 0.01056,
	      "expected": 0.1115
	    },
	    {
	      "year": 2007,
	      "actual": -0.02059,
	      "expected": 0.14233
	    },
	    {
	      "year": 2008,
	      "actual": 0.05396,
	      "expected": 0.20087
	    },
	    {
	      "year": 2009,
	      "actual": 0.04108,
	      "expected": 0.16483
	    },
	    {
	      "year": 2010,
	      "actual": 0.07678,
	      "expected": 0.18121
	    },
	    {
	      "year": 2011,
	      "actual": 0.12216,
	      "expected": 0.23012
	    },
	    {
	      "year": 2012,
	      "actual": 0.06008,
	      "expected": 0.26816
	    },
	    {
	      "year": 2013,
	      "actual": 0.08809,
	      "expected": 0.29887
	    },
	    {
	      "year": 2014,
	      "actual": 0.09057,
	      "expected": 0.34092
	    },
	    {
	      "year": 2015,
	      "actual": 0.11922,
	      "expected": 0.36773
	    }
	  ],
	  "40060": [
	    {
	      "year": 2004,
	      "actual": 0,
	      "expected": 0
	    },
	    {
	      "year": 2005,
	      "actual": -0.0317,
	      "expected": 0.02358
	    },
	    {
	      "year": 2006,
	      "actual": 0.08739,
	      "expected": 0.0963
	    },
	    {
	      "year": 2007,
	      "actual": 0.12889,
	      "expected": 0.0916
	    },
	    {
	      "year": 2008,
	      "actual": 0.1407,
	      "expected": 0.11511
	    },
	    {
	      "year": 2009,
	      "actual": -0.04143,
	      "expected": 0.0976
	    },
	    {
	      "year": 2010,
	      "actual": 0.0379,
	      "expected": 0.08565
	    },
	    {
	      "year": 2011,
	      "actual": -0.06155,
	      "expected": 0.06446
	    },
	    {
	      "year": 2012,
	      "actual": 0.20152,
	      "expected": 0.13543
	    },
	    {
	      "year": 2013,
	      "actual": 0.17927,
	      "expected": 0.15566
	    },
	    {
	      "year": 2014,
	      "actual": 0.15577,
	      "expected": 0.16748
	    },
	    {
	      "year": 2015,
	      "actual": 0.19948,
	      "expected": 0.18152
	    }
	  ],
	  "40140": [
	    {
	      "year": 2004,
	      "actual": 0,
	      "expected": 0
	    },
	    {
	      "year": 2005,
	      "actual": -0.01426,
	      "expected": 0.04675
	    },
	    {
	      "year": 2006,
	      "actual": 0.01005,
	      "expected": 0.0851
	    },
	    {
	      "year": 2007,
	      "actual": -0.0989,
	      "expected": 0.09111
	    },
	    {
	      "year": 2008,
	      "actual": -0.11022,
	      "expected": 0.0864
	    },
	    {
	      "year": 2009,
	      "actual": -0.09011,
	      "expected": 0.06516
	    },
	    {
	      "year": 2010,
	      "actual": -0.04858,
	      "expected": 0.08688
	    },
	    {
	      "year": 2011,
	      "actual": -0.01888,
	      "expected": 0.10313
	    },
	    {
	      "year": 2012,
	      "actual": -0.08142,
	      "expected": 0.10294
	    },
	    {
	      "year": 2013,
	      "actual": -0.04147,
	      "expected": 0.19446
	    },
	    {
	      "year": 2014,
	      "actual": -0.02796,
	      "expected": 0.21986
	    },
	    {
	      "year": 2015,
	      "actual": -0.01685,
	      "expected": 0.24008
	    }
	  ],
	  "40380": [
	    {
	      "year": 2004,
	      "actual": 0,
	      "expected": 0
	    },
	    {
	      "year": 2005,
	      "actual": -0.11559,
	      "expected": 0.0021
	    },
	    {
	      "year": 2006,
	      "actual": -0.14759,
	      "expected": -0.013
	    },
	    {
	      "year": 2007,
	      "actual": -0.29833,
	      "expected": -0.04367
	    },
	    {
	      "year": 2008,
	      "actual": -0.34944,
	      "expected": -0.05634
	    },
	    {
	      "year": 2009,
	      "actual": -0.31304,
	      "expected": -0.02308
	    },
	    {
	      "year": 2010,
	      "actual": -0.31711,
	      "expected": -0.01751
	    },
	    {
	      "year": 2011,
	      "actual": -0.36704,
	      "expected": -0.03809
	    },
	    {
	      "year": 2012,
	      "actual": -0.3667,
	      "expected": -0.03117
	    },
	    {
	      "year": 2013,
	      "actual": -0.39548,
	      "expected": -0.03284
	    },
	    {
	      "year": 2014,
	      "actual": -0.41016,
	      "expected": -0.02197
	    },
	    {
	      "year": 2015,
	      "actual": -0.3795,
	      "expected": 0.00248
	    }
	  ],
	  "40900": [
	    {
	      "year": 2004,
	      "actual": 0,
	      "expected": 0
	    },
	    {
	      "year": 2005,
	      "actual": 0.02372,
	      "expected": 0.01915
	    },
	    {
	      "year": 2006,
	      "actual": -0.04329,
	      "expected": -0.00306
	    },
	    {
	      "year": 2007,
	      "actual": -0.44425,
	      "expected": -0.12101
	    },
	    {
	      "year": 2008,
	      "actual": -0.45042,
	      "expected": -0.10446
	    },
	    {
	      "year": 2009,
	      "actual": -0.45592,
	      "expected": -0.09935
	    },
	    {
	      "year": 2010,
	      "actual": -0.45388,
	      "expected": -0.08773
	    },
	    {
	      "year": 2011,
	      "actual": -0.35818,
	      "expected": -0.06445
	    },
	    {
	      "year": 2012,
	      "actual": -0.42718,
	      "expected": -0.08142
	    },
	    {
	      "year": 2013,
	      "actual": -0.4376,
	      "expected": -0.07738
	    },
	    {
	      "year": 2014,
	      "actual": -0.44826,
	      "expected": -0.06987
	    },
	    {
	      "year": 2015,
	      "actual": -0.44308,
	      "expected": -0.05852
	    }
	  ],
	  "41180": [
	    {
	      "year": 2004,
	      "actual": 0,
	      "expected": 0
	    },
	    {
	      "year": 2005,
	      "actual": -0.05391,
	      "expected": 0.01806
	    },
	    {
	      "year": 2006,
	      "actual": -0.0141,
	      "expected": 0.02281
	    },
	    {
	      "year": 2007,
	      "actual": -0.06627,
	      "expected": 0.06358
	    },
	    {
	      "year": 2008,
	      "actual": -0.02984,
	      "expected": 0.09093
	    },
	    {
	      "year": 2009,
	      "actual": 0.01028,
	      "expected": 0.08559
	    },
	    {
	      "year": 2010,
	      "actual": -0.00095,
	      "expected": 0.06902
	    },
	    {
	      "year": 2011,
	      "actual": -0.03306,
	      "expected": 0.0814
	    },
	    {
	      "year": 2012,
	      "actual": 0.04149,
	      "expected": 0.10217
	    },
	    {
	      "year": 2013,
	      "actual": 0.12854,
	      "expected": 0.13632
	    },
	    {
	      "year": 2014,
	      "actual": 0.03053,
	      "expected": 0.16676
	    },
	    {
	      "year": 2015,
	      "actual": -0.08023,
	      "expected": 0.16597
	    }
	  ],
	  "41620": [
	    {
	      "year": 2004,
	      "actual": 0,
	      "expected": 0
	    },
	    {
	      "year": 2005,
	      "actual": 0.0264,
	      "expected": 0.03014
	    },
	    {
	      "year": 2006,
	      "actual": 0.05131,
	      "expected": 0.08219
	    },
	    {
	      "year": 2007,
	      "actual": 0.05798,
	      "expected": 0.12553
	    },
	    {
	      "year": 2008,
	      "actual": 0.06602,
	      "expected": 0.14439
	    },
	    {
	      "year": 2009,
	      "actual": 0.00741,
	      "expected": 0.11299
	    },
	    {
	      "year": 2010,
	      "actual": 0.05083,
	      "expected": 0.0985
	    },
	    {
	      "year": 2011,
	      "actual": -0.0079,
	      "expected": 0.1148
	    },
	    {
	      "year": 2012,
	      "actual": -0.01735,
	      "expected": 0.13644
	    },
	    {
	      "year": 2013,
	      "actual": -0.00355,
	      "expected": 0.17059
	    },
	    {
	      "year": 2014,
	      "actual": 0.00188,
	      "expected": 0.19148
	    },
	    {
	      "year": 2015,
	      "actual": 0.05589,
	      "expected": 0.22563
	    }
	  ],
	  "41700": [
	    {
	      "year": 2004,
	      "actual": 0,
	      "expected": 0
	    },
	    {
	      "year": 2005,
	      "actual": -0.01855,
	      "expected": -0.00348
	    },
	    {
	      "year": 2006,
	      "actual": -0.00487,
	      "expected": 0.05468
	    },
	    {
	      "year": 2007,
	      "actual": -0.01339,
	      "expected": 0.08657
	    },
	    {
	      "year": 2008,
	      "actual": -0.01603,
	      "expected": 0.10195
	    },
	    {
	      "year": 2009,
	      "actual": -0.00085,
	      "expected": 0.14127
	    },
	    {
	      "year": 2010,
	      "actual": 0.05555,
	      "expected": 0.15337
	    },
	    {
	      "year": 2011,
	      "actual": 0.03663,
	      "expected": 0.22073
	    },
	    {
	      "year": 2012,
	      "actual": 0.08158,
	      "expected": 0.25133
	    },
	    {
	      "year": 2013,
	      "actual": 0.06436,
	      "expected": 0.29022
	    },
	    {
	      "year": 2014,
	      "actual": 0.04275,
	      "expected": 0.30291
	    },
	    {
	      "year": 2015,
	      "actual": 0.06241,
	      "expected": 0.35023
	    }
	  ],
	  "41740": [
	    {
	      "year": 2004,
	      "actual": 0,
	      "expected": 0
	    },
	    {
	      "year": 2005,
	      "actual": -0.02774,
	      "expected": 0.02309
	    },
	    {
	      "year": 2006,
	      "actual": -0.04546,
	      "expected": 0.03766
	    },
	    {
	      "year": 2007,
	      "actual": -0.06643,
	      "expected": 0.03397
	    },
	    {
	      "year": 2008,
	      "actual": -0.05075,
	      "expected": 0.05583
	    },
	    {
	      "year": 2009,
	      "actual": -0.08311,
	      "expected": 0.03408
	    },
	    {
	      "year": 2010,
	      "actual": -0.10791,
	      "expected": 0.05502
	    },
	    {
	      "year": 2011,
	      "actual": -0.08982,
	      "expected": 0.07698
	    },
	    {
	      "year": 2012,
	      "actual": -0.10254,
	      "expected": 0.08061
	    },
	    {
	      "year": 2013,
	      "actual": -0.0912,
	      "expected": 0.11127
	    },
	    {
	      "year": 2014,
	      "actual": -0.06035,
	      "expected": 0.13104
	    },
	    {
	      "year": 2015,
	      "actual": -0.02631,
	      "expected": 0.14752
	    }
	  ],
	  "41860": [
	    {
	      "year": 2004,
	      "actual": 0,
	      "expected": 0
	    },
	    {
	      "year": 2005,
	      "actual": 0.01527,
	      "expected": 0.01966
	    },
	    {
	      "year": 2006,
	      "actual": 0.01917,
	      "expected": 0.03316
	    },
	    {
	      "year": 2007,
	      "actual": 0.08375,
	      "expected": 0.05356
	    },
	    {
	      "year": 2008,
	      "actual": 0.11856,
	      "expected": 0.06107
	    },
	    {
	      "year": 2009,
	      "actual": 0.10166,
	      "expected": 0.04681
	    },
	    {
	      "year": 2010,
	      "actual": 0.11694,
	      "expected": 0.03972
	    },
	    {
	      "year": 2011,
	      "actual": 0.2125,
	      "expected": 0.10068
	    },
	    {
	      "year": 2012,
	      "actual": 0.25944,
	      "expected": 0.14856
	    },
	    {
	      "year": 2013,
	      "actual": 0.29587,
	      "expected": 0.19202
	    },
	    {
	      "year": 2014,
	      "actual": 0.41074,
	      "expected": 0.22227
	    },
	    {
	      "year": 2015,
	      "actual": 0.63606,
	      "expected": 0.31575
	    }
	  ],
	  "41940": [
	    {
	      "year": 2004,
	      "actual": 0,
	      "expected": 0
	    },
	    {
	      "year": 2005,
	      "actual": 0.04472,
	      "expected": 0.02541
	    },
	    {
	      "year": 2006,
	      "actual": 0.07837,
	      "expected": 0.06032
	    },
	    {
	      "year": 2007,
	      "actual": 0.08305,
	      "expected": 0.07974
	    },
	    {
	      "year": 2008,
	      "actual": 0.00837,
	      "expected": 0.06684
	    },
	    {
	      "year": 2009,
	      "actual": 0.12287,
	      "expected": 0.04782
	    },
	    {
	      "year": 2010,
	      "actual": 0.12918,
	      "expected": 0.05464
	    },
	    {
	      "year": 2011,
	      "actual": 0.13016,
	      "expected": 0.07296
	    },
	    {
	      "year": 2012,
	      "actual": 0.16591,
	      "expected": 0.09648
	    },
	    {
	      "year": 2013,
	      "actual": 0.23535,
	      "expected": 0.20425
	    },
	    {
	      "year": 2014,
	      "actual": 0.30032,
	      "expected": 0.24157
	    },
	    {
	      "year": 2015,
	      "actual": 0.45572,
	      "expected": 0.27434
	    }
	  ],
	  "42540": [
	    {
	      "year": 2004,
	      "actual": 0,
	      "expected": 0
	    },
	    {
	      "year": 2005,
	      "actual": -0.03421,
	      "expected": 0.03897
	    },
	    {
	      "year": 2006,
	      "actual": -0.02901,
	      "expected": 0.04719
	    },
	    {
	      "year": 2007,
	      "actual": -0.11488,
	      "expected": 0.0491
	    },
	    {
	      "year": 2008,
	      "actual": -0.00689,
	      "expected": 0.0792
	    },
	    {
	      "year": 2009,
	      "actual": -0.03676,
	      "expected": 0.06559
	    },
	    {
	      "year": 2010,
	      "actual": -0.08608,
	      "expected": 0.08579
	    },
	    {
	      "year": 2011,
	      "actual": -0.12317,
	      "expected": 0.08579
	    },
	    {
	      "year": 2012,
	      "actual": -0.2581,
	      "expected": 0.0814
	    },
	    {
	      "year": 2013,
	      "actual": -0.30023,
	      "expected": 0.06415
	    },
	    {
	      "year": 2014,
	      "actual": -0.30095,
	      "expected": 0.07748
	    },
	    {
	      "year": 2015,
	      "actual": -0.30743,
	      "expected": 0.07656
	    }
	  ],
	  "42660": [
	    {
	      "year": 2004,
	      "actual": 0,
	      "expected": 0
	    },
	    {
	      "year": 2005,
	      "actual": 0.04163,
	      "expected": -0.00423
	    },
	    {
	      "year": 2006,
	      "actual": 0.08255,
	      "expected": 0.06352
	    },
	    {
	      "year": 2007,
	      "actual": 0.13929,
	      "expected": 0.06352
	    },
	    {
	      "year": 2008,
	      "actual": 0.32868,
	      "expected": 0.12876
	    },
	    {
	      "year": 2009,
	      "actual": 0.58981,
	      "expected": 0.1332
	    },
	    {
	      "year": 2010,
	      "actual": 0.75862,
	      "expected": 0.12624
	    },
	    {
	      "year": 2011,
	      "actual": 0.59011,
	      "expected": 0.19769
	    },
	    {
	      "year": 2012,
	      "actual": 0.6377,
	      "expected": 0.19867
	    },
	    {
	      "year": 2013,
	      "actual": 0.75049,
	      "expected": 0.22409
	    },
	    {
	      "year": 2014,
	      "actual": 0.87559,
	      "expected": 0.10635
	    },
	    {
	      "year": 2015,
	      "actual": 0.28913,
	      "expected": 0.10114
	    }
	  ],
	  "44060": [
	    {
	      "year": 2004,
	      "actual": 0,
	      "expected": 0
	    },
	    {
	      "year": 2005,
	      "actual": -0.05225,
	      "expected": 0.01498
	    },
	    {
	      "year": 2006,
	      "actual": -0.04587,
	      "expected": 0.03967
	    },
	    {
	      "year": 2007,
	      "actual": -0.02754,
	      "expected": 0.06871
	    },
	    {
	      "year": 2008,
	      "actual": 0.05359,
	      "expected": 0.09216
	    },
	    {
	      "year": 2009,
	      "actual": 0.19662,
	      "expected": 0.1257
	    },
	    {
	      "year": 2010,
	      "actual": 0.13342,
	      "expected": 0.15291
	    },
	    {
	      "year": 2011,
	      "actual": 0.17959,
	      "expected": 0.16334
	    },
	    {
	      "year": 2012,
	      "actual": 0.09026,
	      "expected": 0.08865
	    },
	    {
	      "year": 2013,
	      "actual": 0.12894,
	      "expected": 0.13347
	    },
	    {
	      "year": 2014,
	      "actual": -0.11378,
	      "expected": 0.10211
	    },
	    {
	      "year": 2015,
	      "actual": 0.06702,
	      "expected": 0.13248
	    }
	  ],
	  "44700": [
	    {
	      "year": 2004,
	      "actual": 0,
	      "expected": 0
	    },
	    {
	      "year": 2005,
	      "actual": -0.22499,
	      "expected": -0.13539
	    },
	    {
	      "year": 2006,
	      "actual": -0.25291,
	      "expected": -0.11551
	    },
	    {
	      "year": 2007,
	      "actual": -0.30723,
	      "expected": -0.10946
	    },
	    {
	      "year": 2008,
	      "actual": -0.30437,
	      "expected": -0.08722
	    },
	    {
	      "year": 2009,
	      "actual": -0.30265,
	      "expected": -0.0838
	    },
	    {
	      "year": 2010,
	      "actual": -0.29726,
	      "expected": -0.09693
	    },
	    {
	      "year": 2011,
	      "actual": -0.32088,
	      "expected": -0.0766
	    },
	    {
	      "year": 2012,
	      "actual": -0.35883,
	      "expected": -0.06795
	    },
	    {
	      "year": 2013,
	      "actual": -0.36546,
	      "expected": -0.0104
	    },
	    {
	      "year": 2014,
	      "actual": -0.36428,
	      "expected": -0.01017
	    },
	    {
	      "year": 2015,
	      "actual": -0.28082,
	      "expected": -0.01009
	    }
	  ],
	  "45060": [
	    {
	      "year": 2004,
	      "actual": 0,
	      "expected": 0
	    },
	    {
	      "year": 2005,
	      "actual": 0.07477,
	      "expected": 0.00153
	    },
	    {
	      "year": 2006,
	      "actual": 0.06131,
	      "expected": -0.01002
	    },
	    {
	      "year": 2007,
	      "actual": 0.20169,
	      "expected": -0.02077
	    },
	    {
	      "year": 2008,
	      "actual": 0.06816,
	      "expected": -0.00825
	    },
	    {
	      "year": 2009,
	      "actual": -0.04311,
	      "expected": -0.01062
	    },
	    {
	      "year": 2010,
	      "actual": -0.1446,
	      "expected": -0.01361
	    },
	    {
	      "year": 2011,
	      "actual": -0.12816,
	      "expected": -0.00686
	    },
	    {
	      "year": 2012,
	      "actual": -0.17762,
	      "expected": 0.00672
	    },
	    {
	      "year": 2013,
	      "actual": -0.18628,
	      "expected": 0.0096
	    },
	    {
	      "year": 2014,
	      "actual": -0.2103,
	      "expected": 0.0187
	    },
	    {
	      "year": 2015,
	      "actual": -0.17817,
	      "expected": 0.0165
	    }
	  ],
	  "45300": [
	    {
	      "year": 2004,
	      "actual": 0,
	      "expected": 0
	    },
	    {
	      "year": 2005,
	      "actual": -0.02652,
	      "expected": 0.01423
	    },
	    {
	      "year": 2006,
	      "actual": -0.01957,
	      "expected": 0.01922
	    },
	    {
	      "year": 2007,
	      "actual": 0.10694,
	      "expected": 0.07002
	    },
	    {
	      "year": 2008,
	      "actual": 0.07806,
	      "expected": 0.0559
	    },
	    {
	      "year": 2009,
	      "actual": 0.00453,
	      "expected": 0.02605
	    },
	    {
	      "year": 2010,
	      "actual": 0.01102,
	      "expected": 0.01618
	    },
	    {
	      "year": 2011,
	      "actual": 0.04493,
	      "expected": 0.05273
	    },
	    {
	      "year": 2012,
	      "actual": -0.01635,
	      "expected": 0.05821
	    },
	    {
	      "year": 2013,
	      "actual": 0.09514,
	      "expected": 0.09854
	    },
	    {
	      "year": 2014,
	      "actual": 0.09087,
	      "expected": 0.11717
	    },
	    {
	      "year": 2015,
	      "actual": 0.15708,
	      "expected": 0.16335
	    }
	  ],
	  "45780": [
	    {
	      "year": 2004,
	      "actual": 0,
	      "expected": 0
	    },
	    {
	      "year": 2005,
	      "actual": 0.02671,
	      "expected": 0.02805
	    },
	    {
	      "year": 2006,
	      "actual": 0.05578,
	      "expected": 0.03547
	    },
	    {
	      "year": 2007,
	      "actual": -0.00861,
	      "expected": 0.02521
	    },
	    {
	      "year": 2008,
	      "actual": -0.00892,
	      "expected": 0.03527
	    },
	    {
	      "year": 2009,
	      "actual": -0.05765,
	      "expected": 0.01907
	    },
	    {
	      "year": 2010,
	      "actual": -0.06876,
	      "expected": 0.01737
	    },
	    {
	      "year": 2011,
	      "actual": -0.16944,
	      "expected": -0.02999
	    },
	    {
	      "year": 2012,
	      "actual": -0.18828,
	      "expected": 0.00725
	    },
	    {
	      "year": 2013,
	      "actual": -0.18232,
	      "expected": 0.02222
	    },
	    {
	      "year": 2014,
	      "actual": -0.20686,
	      "expected": 0.0124
	    },
	    {
	      "year": 2015,
	      "actual": -0.19085,
	      "expected": 0.00456
	    }
	  ],
	  "46060": [
	    {
	      "year": 2004,
	      "actual": 0,
	      "expected": 0
	    },
	    {
	      "year": 2005,
	      "actual": -0.02195,
	      "expected": 0.01831
	    },
	    {
	      "year": 2006,
	      "actual": 0.08212,
	      "expected": 0.11017
	    },
	    {
	      "year": 2007,
	      "actual": -0.10559,
	      "expected": 0.15251
	    },
	    {
	      "year": 2008,
	      "actual": -0.17875,
	      "expected": 0.1283
	    },
	    {
	      "year": 2009,
	      "actual": -0.1773,
	      "expected": 0.14028
	    },
	    {
	      "year": 2010,
	      "actual": -0.16834,
	      "expected": 0.14401
	    },
	    {
	      "year": 2011,
	      "actual": -0.21429,
	      "expected": 0.11475
	    },
	    {
	      "year": 2012,
	      "actual": -0.2597,
	      "expected": 0.1187
	    },
	    {
	      "year": 2013,
	      "actual": -0.19267,
	      "expected": 0.13455
	    },
	    {
	      "year": 2014,
	      "actual": -0.0726,
	      "expected": 0.14965
	    },
	    {
	      "year": 2015,
	      "actual": -0.24872,
	      "expected": 0.11861
	    }
	  ],
	  "46140": [
	    {
	      "year": 2004,
	      "actual": 0,
	      "expected": 0
	    },
	    {
	      "year": 2005,
	      "actual": -0.10688,
	      "expected": 0.01619
	    },
	    {
	      "year": 2006,
	      "actual": -0.10269,
	      "expected": 0.02707
	    },
	    {
	      "year": 2007,
	      "actual": -0.05969,
	      "expected": 0.06477
	    },
	    {
	      "year": 2008,
	      "actual": -0.02252,
	      "expected": 0.0683
	    },
	    {
	      "year": 2009,
	      "actual": -0.02384,
	      "expected": 0.0811
	    },
	    {
	      "year": 2010,
	      "actual": -0.033,
	      "expected": 0.10017
	    },
	    {
	      "year": 2011,
	      "actual": 0.01778,
	      "expected": 0.11875
	    },
	    {
	      "year": 2012,
	      "actual": -0.02559,
	      "expected": 0.13305
	    },
	    {
	      "year": 2013,
	      "actual": 0.01125,
	      "expected": 0.14944
	    },
	    {
	      "year": 2014,
	      "actual": -0.01318,
	      "expected": 0.14966
	    },
	    {
	      "year": 2015,
	      "actual": -0.05748,
	      "expected": 0.15772
	    }
	  ],
	  "46520": [
	    {
	      "year": 2004,
	      "actual": 0,
	      "expected": 0
	    },
	    {
	      "year": 2005,
	      "actual": 0.07756,
	      "expected": 0.02805
	    },
	    {
	      "year": 2006,
	      "actual": 0.18692,
	      "expected": 0.05456
	    },
	    {
	      "year": 2007,
	      "actual": 0.17306,
	      "expected": 0.05811
	    },
	    {
	      "year": 2008,
	      "actual": 0.1285,
	      "expected": 0.04844
	    },
	    {
	      "year": 2009,
	      "actual": 0.03398,
	      "expected": 0.01552
	    },
	    {
	      "year": 2010,
	      "actual": 0.06929,
	      "expected": 0.0077
	    },
	    {
	      "year": 2011,
	      "actual": 0.60045,
	      "expected": 0.0093
	    },
	    {
	      "year": 2012,
	      "actual": 0.72454,
	      "expected": 0.03748
	    },
	    {
	      "year": 2013,
	      "actual": 0.70433,
	      "expected": 0.07115
	    },
	    {
	      "year": 2014,
	      "actual": 0.58422,
	      "expected": 0.06956
	    },
	    {
	      "year": 2015,
	      "actual": 0.55552,
	      "expected": 0.09714
	    }
	  ],
	  "47260": [
	    {
	      "year": 2004,
	      "actual": 0,
	      "expected": 0
	    },
	    {
	      "year": 2005,
	      "actual": -0.08188,
	      "expected": -0.04081
	    },
	    {
	      "year": 2006,
	      "actual": -0.06515,
	      "expected": -0.04266
	    },
	    {
	      "year": 2007,
	      "actual": 0.08713,
	      "expected": -0.02889
	    },
	    {
	      "year": 2008,
	      "actual": 0.04022,
	      "expected": -0.02252
	    },
	    {
	      "year": 2009,
	      "actual": 0.0462,
	      "expected": -0.03167
	    },
	    {
	      "year": 2010,
	      "actual": 0.0388,
	      "expected": -0.07594
	    },
	    {
	      "year": 2011,
	      "actual": 0.05696,
	      "expected": -0.03299
	    },
	    {
	      "year": 2012,
	      "actual": 0.0449,
	      "expected": -0.03285
	    },
	    {
	      "year": 2013,
	      "actual": 0.02936,
	      "expected": -0.00654
	    },
	    {
	      "year": 2014,
	      "actual": 0.01696,
	      "expected": -0.00149
	    },
	    {
	      "year": 2015,
	      "actual": 0.00172,
	      "expected": 0.00675
	    }
	  ],
	  "48620": [
	    {
	      "year": 2004,
	      "actual": 0,
	      "expected": 0
	    },
	    {
	      "year": 2005,
	      "actual": -0.00106,
	      "expected": 0.01403
	    },
	    {
	      "year": 2006,
	      "actual": -0.01208,
	      "expected": 0.02185
	    },
	    {
	      "year": 2007,
	      "actual": -0.04533,
	      "expected": 0.05659
	    },
	    {
	      "year": 2008,
	      "actual": -0.04942,
	      "expected": 0.07917
	    },
	    {
	      "year": 2009,
	      "actual": -0.06632,
	      "expected": 0.06706
	    },
	    {
	      "year": 2010,
	      "actual": -0.1284,
	      "expected": 0.03059
	    },
	    {
	      "year": 2011,
	      "actual": -0.09792,
	      "expected": 0.04432
	    },
	    {
	      "year": 2012,
	      "actual": -0.10535,
	      "expected": 0.04576
	    },
	    {
	      "year": 2013,
	      "actual": -0.12176,
	      "expected": 0.05743
	    },
	    {
	      "year": 2014,
	      "actual": -0.19848,
	      "expected": 0.06027
	    },
	    {
	      "year": 2015,
	      "actual": -0.20476,
	      "expected": 0.06483
	    }
	  ],
	  "49180": [
	    {
	      "year": 2004,
	      "actual": 0,
	      "expected": 0
	    },
	    {
	      "year": 2005,
	      "actual": -0.08764,
	      "expected": 0.02892
	    },
	    {
	      "year": 2006,
	      "actual": 0.01841,
	      "expected": 0.0819
	    },
	    {
	      "year": 2007,
	      "actual": 0.0852,
	      "expected": 0.13921
	    },
	    {
	      "year": 2008,
	      "actual": -0.02918,
	      "expected": 0.08434
	    },
	    {
	      "year": 2009,
	      "actual": -0.00102,
	      "expected": 0.12637
	    },
	    {
	      "year": 2010,
	      "actual": -0.04318,
	      "expected": 0.11511
	    },
	    {
	      "year": 2011,
	      "actual": 0.00277,
	      "expected": 0.11142
	    },
	    {
	      "year": 2012,
	      "actual": -0.23188,
	      "expected": 0.14091
	    },
	    {
	      "year": 2013,
	      "actual": -0.20876,
	      "expected": 0.14591
	    },
	    {
	      "year": 2014,
	      "actual": -0.1658,
	      "expected": 0.15498
	    },
	    {
	      "year": 2015,
	      "actual": -0.19709,
	      "expected": 0.14277
	    }
	  ],
	  "49660": [
	    {
	      "year": 2004,
	      "actual": 0,
	      "expected": 0
	    },
	    {
	      "year": 2005,
	      "actual": -0.00987,
	      "expected": 0.01467
	    },
	    {
	      "year": 2006,
	      "actual": -0.18525,
	      "expected": -0.03731
	    },
	    {
	      "year": 2007,
	      "actual": -0.36922,
	      "expected": -0.07806
	    },
	    {
	      "year": 2008,
	      "actual": -0.41595,
	      "expected": -0.09179
	    },
	    {
	      "year": 2009,
	      "actual": -0.46249,
	      "expected": -0.10706
	    },
	    {
	      "year": 2010,
	      "actual": -0.48777,
	      "expected": -0.10545
	    },
	    {
	      "year": 2011,
	      "actual": -0.45255,
	      "expected": -0.10032
	    },
	    {
	      "year": 2012,
	      "actual": -0.49984,
	      "expected": -0.10496
	    },
	    {
	      "year": 2013,
	      "actual": -0.50936,
	      "expected": -0.11433
	    },
	    {
	      "year": 2014,
	      "actual": -0.53037,
	      "expected": -0.10812
	    },
	    {
	      "year": 2015,
	      "actual": -0.53765,
	      "expected": -0.10252
	    }
	  ],
	  "99997": [
	    {
	      "year": 2004,
	      "actual": 0,
	      "expected": 0
	    },
	    {
	      "year": 2005,
	      "actual": 0.0112,
	      "expected": 0.01784
	    },
	    {
	      "year": 2006,
	      "actual": 0.00759,
	      "expected": 0.03381
	    },
	    {
	      "year": 2007,
	      "actual": 0.01286,
	      "expected": 0.05936
	    },
	    {
	      "year": 2008,
	      "actual": 0.05139,
	      "expected": 0.0883
	    },
	    {
	      "year": 2009,
	      "actual": 0.0486,
	      "expected": 0.08464
	    },
	    {
	      "year": 2010,
	      "actual": 0.04086,
	      "expected": 0.0875
	    },
	    {
	      "year": 2011,
	      "actual": 0.07007,
	      "expected": 0.10982
	    },
	    {
	      "year": 2012,
	      "actual": 0.0349,
	      "expected": 0.1238
	    },
	    {
	      "year": 2013,
	      "actual": 0.0605,
	      "expected": 0.15127
	    },
	    {
	      "year": 2014,
	      "actual": 0.05711,
	      "expected": 0.16038
	    },
	    {
	      "year": 2015,
	      "actual": 0.09175,
	      "expected": 0.18359
	    }
	  ],
	  "99998": [
	    {
	      "year": 2004,
	      "actual": 0,
	      "expected": 0
	    },
	    {
	      "year": 2005,
	      "actual": 0.00558,
	      "expected": 0.01938
	    },
	    {
	      "year": 2006,
	      "actual": 0.04057,
	      "expected": 0.03954
	    },
	    {
	      "year": 2007,
	      "actual": 0.06832,
	      "expected": 0.05225
	    },
	    {
	      "year": 2008,
	      "actual": 0.13589,
	      "expected": 0.06945
	    },
	    {
	      "year": 2009,
	      "actual": 0.19391,
	      "expected": 0.06746
	    },
	    {
	      "year": 2010,
	      "actual": 0.20588,
	      "expected": 0.07627
	    },
	    {
	      "year": 2011,
	      "actual": 0.24732,
	      "expected": 0.0959
	    },
	    {
	      "year": 2012,
	      "actual": 0.28532,
	      "expected": 0.11759
	    },
	    {
	      "year": 2013,
	      "actual": 0.32903,
	      "expected": 0.13817
	    },
	    {
	      "year": 2014,
	      "actual": 0.3626,
	      "expected": 0.14405
	    },
	    {
	      "year": 2015,
	      "actual": 0.39894,
	      "expected": 0.1769
	    }
	  ],
	  "99999": [
	    {
	      "year": 2004,
	      "actual": 0,
	      "expected": 0
	    },
	    {
	      "year": 2005,
	      "actual": 0.00411,
	      "expected": 0.01529
	    },
	    {
	      "year": 2006,
	      "actual": 0.02343,
	      "expected": 0.03214
	    },
	    {
	      "year": 2007,
	      "actual": 0.04194,
	      "expected": 0.04832
	    },
	    {
	      "year": 2008,
	      "actual": 0.10398,
	      "expected": 0.0745
	    },
	    {
	      "year": 2009,
	      "actual": 0.14919,
	      "expected": 0.07976
	    },
	    {
	      "year": 2010,
	      "actual": 0.16013,
	      "expected": 0.09153
	    },
	    {
	      "year": 2011,
	      "actual": 0.19533,
	      "expected": 0.11036
	    },
	    {
	      "year": 2012,
	      "actual": 0.20541,
	      "expected": 0.12757
	    },
	    {
	      "year": 2013,
	      "actual": 0.24287,
	      "expected": 0.1505
	    },
	    {
	      "year": 2014,
	      "actual": 0.26152,
	      "expected": 0.15602
	    },
	    {
	      "year": 2015,
	      "actual": 0.29531,
	      "expected": 0.18391
	    }
	  ]
	}
	;

	function pal(d){
	    var c;
	    var n = d.length;

	    if(n < 3 || n > 7){
	        throw new Error("Data length must be between 3 and 7.")
	    }

	    if(n==3){
	        c = ['#ffc500', '#e45263', '#6800a4'];
	    }
	    else if(n==4){
	        c = ['#ffc500', '#f47859', '#d12168', '#6800a4'];
	    }
	    else if(n==5){
	        c = ['#ffc500', '#f98c50', '#e45263', '#c1006e', '#6800a4'];
	    }
	    else if(n==6){
	        c = ['#ffc500', '#fc974a', '#ee695e', '#d93767', '#b20077', '#6800a4'];
	    }
	    else if(n==7){
	        c = ['#ffc500', '#fd9e44', '#f47859', '#e45263', '#d12168', '#a7007e', '#6800a4'];
	    }

	    return d3.scaleOrdinal().domain(d).range(c);
	}

	function seq0(container){

	    var wrap_ = d3.select(container).append("div");

	    //one time setup
	    var data = seq0data.changes;

	    var wrap = wrap_.append("div").classed("chart-view",true);
	    var title = wrap.append("div").classed("sticky-chart-title",true).append("p").html("Metropolitan America saw a large increase in job density from 2004 to 2015"); 
	    
	    var svg = wrap.append("div").style("max-width","900px").append("svg").attr("viewBox", "0 0 320 240");

	    var g_y_axis = svg.append("g").classed("axis-group",true);
	    var g_x_axis = svg.append("g").classed("axis-group",true);
	    var g_back = svg.append("g");
	    var g_trend = svg.append("g");
	    var g_anno = svg.append("g");

	    var names = {
	        all:["Actual:", "94 metro areas"],
	        all_expected:["Expected:","94 metro areas"],
	        big4: ["New York", "Chicago", "San Francisco", "Seattle"],
	        other: ["Other 90"]
	    };

	    var label_pos = {
	        all:[2015, 0.3],
	        all_expected:[2015, 0.2],
	        big4:[2015, 0.4],
	        other:[2015, 0.1]
	    };
	    
	    var titles = {
	        all:"Metropolitan America actually saw an even greater increase in job density from 2004 to 2015",
	        all_expected:"Metropolitan America’s job density was expected to increase from 2004 to 2015",
	        big4:"Four extremely dense metro areas fueled much of metropolitan America’s increasing job density from 2004 to 2015",
	        other:"Other metro areas saw a smaller overall increase in job density from 2004 to 2015"       
	    };

	    //what lines to show when a given view code is selected
	    var sequence = {
	        all: {all_expected:1, all:1, big4:0, other:0},
	        all_expected:{all_expected:1, all:0, big4:0, other:0},
	        big4: {all_expected:1, all:1, big4:1, other:0},
	        other: {all_expected:1, all:1, big4:1, other:1}
	    };

	    var t_ = g_anno.selectAll("g.text-group").data(["other", "all_expected", "all", "big4"]).enter().append("g").classed("text-group",true).style("opacity","0");
	    var ts_ = t_.selectAll("text").data(function(d){return names[d]}).enter().append("text").attr("y", function(d,i){return i*16}).text(function(d){return d}).style("font-size","15px").attr("dy","8");

	    function dmap(key_){
	        var key = arguments.length == 0 || key_ == null ? "actual" : key_;
	        return function(d){
	            return {cbsa:d.cbsa, year:d.year, value:d[key]}
	        }
	    }
	    var values = {
	        big4: data["99998"].map(dmap()),
	        all: data["99999"].map(dmap()),
	        all_expected: data["99999"].map(dmap("expected")),
	        other: data["99997"].map(dmap())
	    };

	    var codes = ["big4", "all", "all_expected", "other"];
	    var cols = pal(codes);

	    var lines = g_trend.selectAll("path").data(codes)
	                       .enter().append("path")
	                       .attr("stroke-width","3px")
	                       .style("opacity","0")
	                       .attr("fill","none")
	                       .attr("stroke", function(d,i){
	                           return cols(d);
	                        })
	                        .attr("stroke-dasharray", function(d,i){return d=="all_expected" ? "2,2" : null})
	                        ;

	    var great_recession = g_back.append("rect").attr("fill","#dddddd").style("opacity","0");
	    
	    var years = d3.range(2004, 2016);
	    
	    var scale_y = d3.scaleLinear().domain([0, 0.4]).nice();
	    var scale_x = d3.scaleLinear().domain([2004, 2015]);

	    var line = d3.line().x(function(d){return scale_x(d.year)})
	                        .y(function(d){return scale_y(d.value)})
	                        ;

	    var axis_y = d3.axisLeft(scale_y).ticks(4, "+,.0%");
	    var axis_x = d3.axisBottom(scale_x).tickValues([2005, 2007, 2009, 2011, 2013, 2015]).tickFormat(function(v){return v});
	    var padding = {top:20, right:120, bottom: 40, left: 60 };

	    function redraw(){
	        var wh = special_dims(this);
	        var w = wh.w;
	        var h = wh.h;

	        svg.attr("viewBox", "0 0 " + w + " " + h);
	        
	        g_x_axis.attr("transform", "translate(0," + (h-padding.bottom) + ")");
	        g_y_axis.attr("transform", "translate(" + (padding.left) + ",0)");

	        scale_x.range([padding.left, w - padding.right]);
	        scale_y.range([h - padding.bottom, 0 + padding.top]);

	        t_.attr("transform", function(d,i){
	            var xy = label_pos[d];
	            var y = scale_y(xy[1]);
	            var x = scale_x(xy[0]);
	            return "translate(" + (x+3) + ", " + y + ")";
	        });

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
	                       .attr("height", h - padding.top - padding.bottom);

	        axis_x(g_x_axis);
	        axis_y(g_y_axis);

	        lines.attr("d", function(d){return line(values[d])});

	    }

	    var current_view = null;

	    function step(vn, s, c){
	        if(c != "exit" && vn!== current_view){
	            wrap.style("opacity",1);

	            var seq = sequence[vn];

	            lines.style("opacity", function(d,i){return seq[d]});
	            t_.style("opacity", function(d,i){return seq[d]});
	            
	            great_recession.style("opacity", function(d,i){
	                return "0";
	            });

	            title.text(titles[vn]);
	            
	            current_view = vn;
	        }
	    }

	    var views = [
	        {
	            text:["If the 94 metro areas’ job growth had accumulated according to where their existing jobs were located, we would have seen an overall increase in job density of about 18% from 2004 to 2015."],
	            step:function(s, c){step("all_expected", s, c);},
	            exit:function(){
	                lines.style("opacity","0");
	                t_.style("opacity","0");
	                current_view = null;
	                wrap.style("opacity",null);
	            }
	        },
	        {
	            text:["These 94 large metro areas actually posted a greater-than-expected increase in job density of 30%, which suggests that job growth during this period disproportionately favored already-dense parts of metro areas."],
	            step:function(s, c){step("all", s, c);}

	        },

	        {
	            text:["These job density trends were driven largely by just four especially large and extremely dense metro areas: New York, Chicago, San Francisco, and Seattle. In fact, these four metro areas accounted for about 90% of the increase in job density seen among all 94 large metro areas during this period."],
	            step:function(s, c){step("big4", s, c);}
	        },

	        {
	            text:["In contrast, overall job density in the other 90 large metro areas increased only 9%."],
	            step:function(s, c){step("other", s, c);}
	        }
	    ];

	    return {resize: redraw, views:views};

	}

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

	//palette from job density report, june 2019

	palette.job_density = {};

	palette.job_density.darkblue = "#3471B7";
	palette.job_density.growth = "#5FB7ED";
	palette.job_density.decline = "#E50374";
	palette.job_density.gray = "#767576";

	palette.job_density.blue = "#02b6ed";
	palette.job_density.orange = "#ea9706";

	palette.job_density.header0 = "#024F9C";
	palette.job_density.header1 = "#0D73D6";
	palette.job_density.header2 = "#02B6ED";
	palette.job_density.header3 = "#02E3DD";

	palette.job_density.darkline = "#333333";

	function seq1(container, i){

	    var wrap_ = d3.select(container).append("div");

	    //one time setup
	    var wrap = wrap_.append("div").classed("chart-view",true);
	    
	    var title0 = wrap.append("div").classed("sticky-chart-title",true);
	    var title = title0.append("p").html("Most sectors saw job density increase from 2004 to 2015"); 

	    var data = sector_data["99999"].slice(0).sort(function(a,b){
	        var o = 0;
	        if(a.naics == "00"){
	            o = -1;
	        }
	        else if(b.naics == "00"){
	            o = 1;
	        }
	        else{
	            o = d3.descending(a.actual, b.actual);
	        }
	        return o; 
	    });

	    var legend = wrap.append("div").classed("ae-legend",true).style("margin-left","9px").style("opacity","0");
	    var svg = wrap.append("div").append("svg").attr("viewBox", "0 0 320 240");
	    var padding = {top:50, right:25, bottom: 5, left: 165};

	    var g_main = svg.append("g").attr("transform","translate("+ padding.left + "," +padding.top + ")");
	    var g_x_axis = g_main.append("g").classed("axis-group",true);
	    var g_back = g_main.append("g");
	    var g_trend = g_main.append("g");

	    var groups = g_trend.selectAll("g").data(data).enter().append("g");

	    var group_connectors = groups.append("line").style("shape-rendering","crispEdges")
	                                .attr("stroke", function(d){return d.expected > d.actual ? palette.job_density.decline : palette.job_density.growth})
	                                .attr("stroke-width","1px")
	                                .attr("y1", 0).attr("y2", 0)
	                                ;

	    var group_circles = groups.selectAll("circle").data(function(d){return [d, d]})
	                .enter().append("circle").attr("r", 5).attr("cx","0").attr("cy","0")
	                .attr("fill", function(d,i){return i==1 ? "#ffffff" : palette.job_density.darkblue})
	                .attr("stroke", function(d,i){return i==1 ? palette.job_density.darkblue : palette.job_density.darkblue})
	                .attr("stroke-width","1.5px")
	                ;
	    
	    var min = d3.min(data.map(function(d){return Math.min(d.actual, d.expected)}));
	    var max = d3.max(data.map(function(d){return Math.max(d.actual, d.expected)}));

	    var scale_x = d3.scaleLinear().domain([-0.4, 0.6]).nice();
	    var axis_x = d3.axisTop(scale_x).ticks(5, "+,.0%");

	    var gridlines = g_back.selectAll("path").data(scale_x.ticks(5)).enter().append("path")
	                        .attr("stroke", function(d){return d==0 ? "#aaaaaa" : "#dddddd"})
	                        .style("shape-rendering","crispEdges");

	    var group_labels = groups.append("text").text(function(d){return sector_names[d.naics]})
	                              .attr("x","0").attr("y","0")
	                              .attr("dx","-5")
	                              .attr("dy","5").attr("text-anchor","end")
	                              ;

	    var group_h = 20;


	    var group_shown = "expected";

	    function show_just_expected(){
	        legend.style("opacity","0");
	        group_shown = "expected";
	        group_circles.interrupt().transition().duration(1000)
	                    .attr("cx", function(d,i){return scale_x(d.expected)})
	                    .style("opacity", function(d,i){return i==1 ? "1" : "0"})
	                    ;

	        group_connectors.interrupt().transition().duration(1000)
	                    .attr("x1", function(d){return scale_x(d.expected)})
	                    .attr("x2", function(d){return scale_x(d.expected)});
	    }

	    function show_actual(){
	        legend.style("opacity","1");
	        group_shown = "actual";
	        group_circles.style("opacity", "1")
	                    .interrupt().transition().duration(1000)
	                    .attr("cx", function(d,i){return i==1 ? scale_x(d.expected) : scale_x(d.actual)})
	                    ;

	        group_connectors.interrupt().transition().duration(1000)
	                    .attr("x1", function(d){return scale_x(d.actual)})
	                    .attr("x2", function(d){return scale_x(d.expected)});
	    }


	    function redraw(){
	        var wh = special_dims(this);
	        var w = wh.w;
	        var h = wh.h;

	        scale_x.range([0, w - padding.right - padding.left]);
	        
	        group_h = Math.floor((h-padding.top-padding.bottom)/data.length);
	        var group_h2 = Math.floor(group_h/2);

	        groups.interrupt().transition().duration(0).attr("transform", function(d,i){return "translate(0," + ((i*group_h)+group_h2) + ")"});

	        svg.attr("viewBox", "0 0 " + w + " " + h);

	        gridlines.attr("d", function(d){
	            var x = Math.floor(scale_x(d))+0.5;
	            return "M" + x + ",0 l0," + (h - padding.top - padding.bottom);
	        });

	        axis_x(g_x_axis);

	        if(group_shown == "expected"){
	            show_just_expected();
	        }
	        else{
	            show_actual();
	        }
	        
	    }    

	    var current_view = null;

	    function step(n, s, c){
	        if(c != "exit" && n!== current_view){
	            wrap.style("opacity",1);
	            if(n==0){
	                title.html("Most sectors’ jobs were expected to grow slightly denser from 2004 to 2015 in metropolitan America"); 
	                show_just_expected();
	                groups.style("opacity", "1");
	            }
	            else if(n==1){
	                title.html("Most sectors’ job density increased by more than expected from 2004 to 2015 in metropolitan America"); 
	                show_actual();
	                groups.style("opacity", "1");
	            }

	            current_view = n;
	        }
	    }




	    var views = [
	        {
	            text:["If each major industry sector’s job growth had accumulated according to where its existing jobs were located, most sectors would have slightly increased their job density from 2004 to 2015."],
	            step:function(s, c){step(0, s, c);},
	            exit:function(){
	                current_view = null;
	                wrap.style("opacity",null);
	            }
	        },
	        {
	            text:["Every sector but manufacturing and logistics did in fact post an increase in job density from 2004 to 2015. The job density of most sectors actually increased more than their growth alone would predict. Especially, in the information and construction sectors, where job density increased by more than 40%."],
	            step:function(s, c){step(1, s, c);},
	        }
	    ];

	    return {resize:redraw, views:views};

	}

	//current fork of map.js
	//used in black home devaluation and opportunity industries (late-2018)

	function map(container){
	    //one-time-setup

	    var scope = {
	        width:360,
	        width_user:null,
	        min_width:240,
	        aspect: 0.6,
	        projection: d3.geoAlbersUsa(),
	        responsive: true,
	        scalable: false,
	        translate:[0,0],
	        scale:1
	    };
	    scope.path = d3.geoPath(scope.projection);
	    scope.height = scope.width * scope.aspect;

	    //main outer wrap
	    var wrap0 = d3.select(container).append("div").classed("c-fix",true).style("padding","0px").style("position","relative").style("min-height","15px");

	    var title_box = wrap0.append("div");
	    var title = title_box.append("p").classed("map-title",true);
	    var legend_top = title_box.append("div");

	    //map dom
	    //map_panel holds map -- set dims on this panel
	    var map_panel = wrap0.append("div").style("position","relative").style("z-index","7").style("top","0px").style("left","0px");
	    var svg = map_panel.append("svg").attr("width","100%").attr("height","100%").style("overflow","visible");
	    var g_translate = svg.append("g");
	    var g_back = g_translate.append("g");
	    var g_main = g_translate.append("g");
	    var g_front = g_translate.append("g");
	    var g_anno = g_translate.append("g");

	    var panels = {root:svg, back:g_back, main:g_main, front:g_front, anno:g_anno, legend_top:legend_top};

	    //tooltip
	    var tooltip = map_panel.append("div")
	                           .style("position","absolute")
	                           .style("min-width","30px")
	                           .style("max-width","500px")
	                           .style("min-height","100px")
	                           .style("pointer-events","none")
	                           .style("padding","0px 0px 0px 11px")
	                           .style("display","none")
	                           ;

	    var tooltip_content = tooltip.append("div").style("padding","10px 15px 10px 10px").style("border","1px solid " + palette.mediumgray)
	                                .style("position","relative").style("z-index","10").style("background-color","#ffffff")
	                                .style("box-shadow","2px 3px 8px rgba(0,0,0,0.4)");

	    var tooltip_arrow_left = tooltip.append("div").style("width","12px").style("position","absolute")
	                            .style("left","0px").style("top","0px")
	                            .style("height","100px").style("z-index","11");
	        tooltip_arrow_left.append("svg").attr("width","100%").attr("height","100%")
	                            .append("path").attr("d", "M12.5,12 L1,20 L12.5,28")
	                            .attr("stroke", palette.mediumgray)
	                            .attr("fill","#ffffff")
	                            ;

	    var tooltip_arrow_right = tooltip.append("div").style("width","12px").style("position","absolute")
	                            .style("left","100%").style("top","0px")
	                            .style("height","100px").style("z-index","11");
	        tooltip_arrow_right.append("svg").attr("width","100%").attr("height","100%").style("margin-left","-1px")
	                            .append("path").attr("d", "M0,28 L11.5,20 L0,12")
	                            .attr("stroke", palette.mediumgray)
	                            .attr("fill","#ffffff")
	                            ;

	    //build svg filters
	    var defs = wrap0.append("div").style("height","0px").style("overflow","hidden").append("svg").append("defs");
	    var filter = defs.append("filter").attr("id","feBlur").attr("width","150%").attr("height","150%");
	    filter.append("feOffset").attr("result","offsetout").attr("in","SourceGraphic").attr("dx","6").attr("dy","6");
	    filter.append("feColorMatrix").attr("result","matrixout").attr("in","offsetout").attr("type","matrix").attr("values","0.25 0 0 0 0 0 0.25 0 0 0 0 0 0.25 0 0 0 0 0 1 0");
	    filter.append("feGaussianBlur").attr("result","blurout").attr("in","matrixout").attr("stdDeviation","4");
	    filter.append("feBlend").attr("in","SourceGraphic").attr("in2","blurout").attr("mode","normal");


	    var tooltip_test = wrap0.append("div").style("position","absolute").style("z-index","0")
	                            .style("top","0px").style("left","0px").style("width","100%")
	                            .style("overflow","visible").style("visibility","hidden")
	                            .append("div").style("display","inline-block").style("visibility","hidden")
	                            .classed("tooltip-test-area", true).style("padding","10px 15px 10px 10px")
	                            .style("user-select","none");

	    var tip_show_timer;
	    var tip_hide_timer;
	    var ttip_width_threshold = 500;

	    //get location of element, relative to map_panel
	    function get_centroid(el){
	        var x;
	        var y;
	        try{
	            var mnode = map_panel.node();
	            var mbox = mnode.getBoundingClientRect();
	            
	            var ebox = el.getBoundingClientRect();
	            var w = ebox.right - ebox.left;
	            var h = ebox.bottom - ebox.top;
	            
	            //element x,y
	            var x0 = ebox.left + (w/2);
	            var y0 = ebox.top + (h/2);
	            
	            x = x0 - mbox.left - mnode.clientLeft;
	            y = y0 - mbox.top - mnode.clientTop;
	        }catch(e){
	            x = 0;
	            y = 0;
	        }
	        return [x, y];
	    }

	    function show_tooltip(html, centroid){
	        clearTimeout(tip_hide_timer);
	        clearTimeout(tip_show_timer);

	        if(scope.width >= ttip_width_threshold){
	            tooltip_test.html(html);

	            tip_show_timer = setTimeout(function(){
	                //show to left or right
	                var show_right = true;
	                var left;
	                var top;
	                try{
	                    var tip_box = tooltip_test.node().getBoundingClientRect();
	                    var tip_width = tip_box.right - tip_box.left;
	                    show_right = tip_width + centroid[0] < scope.width;
	                }
	                catch(e){
	                    show_right = true;
	                }

	                if(!show_right){
	                    left = (centroid[0]-tip_width-25-3)+"px";
	                    top = (centroid[1]-20)+"px";
	                    tooltip_arrow_right.style("visibility","visible");
	                    tooltip_arrow_left.style("visibility","hidden");
	                }
	                else{
	                    left = (centroid[0]+3)+"px";
	                    top = (centroid[1]-20)+"px";
	                    tooltip_arrow_left.style("visibility","visible");
	                    tooltip_arrow_right.style("visibility","hidden");
	                }

	                tooltip.style("left",left).style("top",top).style("display", "block");
	                tooltip_content.html(html);
	            }, 10); 
	        }        
	    }

	    function hide_tooltip(callback){
	        clearTimeout(tip_hide_timer);
	        clearTimeout(tip_show_timer);

	        tip_hide_timer = setTimeout(function(){
	            tooltip.style("left","0px").style("top","0px").style("display", "none");
	            if(typeof callback === "function"){
	                callback();
	            }
	        }, 50);
	    }

	    //hold 
	    var draw_stack = [];
	    var clip_geo = null;

	    //draw, redraw, resize
	    var resize_timeout;

	    window.addEventListener("resize", function(){
	        clearTimeout(resize_timeout);
	        hide_tooltip();
	        if(scope.responsive){
	            //wrap0.style("overflow","hidden"); //avoid horizontal scroll bars while resizing
	            map_panel.style("width","auto").style("height","auto");
	            svg.style("opacity","0.25");
	            resize_timeout = setTimeout(function(){
	                draw();
	                svg.style("opacity","1");
	                //map_panel.style("background-color",null);
	            }, 375);
	        }
	    });

	    //internal draw method
	    function draw(){
	        wrap0.style("overflow","visible"); //allow tooltips to overflow
	        dims(); //if width set at any point by user--using map.print() or map.width()--dims will use that

	        map_panel.style("width", scope.scalable ? "auto" : scope.width+"px")
	                .style("height", scope.scalable ? "auto" : scope.height+"px");

	        svg.attr("viewBox", "0 0 " + scope.width + " " + scope.height);

	        if(clip_geo !== null){
	            scope.projection.fitExtent([[0, 0], [scope.width, scope.height]], clip_geo);
	        }

	        var i = -1;
	        while(++i < draw_stack.length){
	            draw_stack[i]();
	        }

	    }    

	    //map methods exposed to user for:
	    // 1) add_states(f, attrs, geokey, clip_to_this)
	    // 2) add_points(f, attrs, geokey, lonlat, clip_to_this)
	    // 3) print -- render map
	    var map_methods = {};

	    map_methods.add_states = function(f, geokey, clip_to_this){
	        var g = g_main.append("g");
	        var features = [];
	        
	        if(f.hasOwnProperty("type") && f.type=="FeatureCollection" && f.features.length > 0){
	            features = f.features;
	        }
	        else if(f instanceof Array && f.length > 0){
	            features = f;
	        }
	        else{
	            throw new Error("Argument f must be a FeatureCollection or an array of D3-supported geojson feature objects");
	        }

	  
	        //set clip_geography for projection
	        if((arguments.length > 2 && !!clip_to_this) || clip_geo === null){
	            clip_geo = {type:"FeatureCollection", features:features};
	        }

	        //selection of states
	        var selection = null;

	        //tooltip functions
	        var ttip_show;
	        
	        var ttip = function(key){
	            if(typeof ttip_show === "function" && selection !== null){
	                ttip_show(key);
	            }
	        };        

	        //hide function
	        var ttip_hide_;
	        var ttip_hide = function(){
	            hide_tooltip(ttip_hide_);
	        };

	        g.on("mousedown", ttip_hide);

	        //attributes
	        var attrs = {};

	        function draw_layer(){
	            var selection_ = g.selectAll("path").data(features, geokey);
	            selection_.exit().remove();
	            selection = selection_.enter().append("path").merge(selection_).attr("d", scope.path);
	    
	            //apply attributes
	            for(var a in attrs){
	                if(attrs.hasOwnProperty(a)){
	                    if(typeof attrs[a] === "function"){
	                        selection.attr(a, function(d){
	                            return attrs[a].call(this, geokey(d))
	                        });
	                    }
	                    else{
	                        selection.attr(a, attrs[a]);
	                    }
	                    
	                }
	            }

	            selection
	            .on("mouseenter", function(d){
	                ttip(geokey(d));
	            })
	            .on("mousedown", function(d){
	                ttip(geokey(d));
	                d3.event.stopPropagation();
	            })
	            .on("mouseleave", ttip_hide);
	        }

	        draw_stack.push(draw_layer);

	        //return object for this layer
	        var layer_methods = {};

	        layer_methods.hide = function(){g.style("visibility","hidden").style("pointer-events","none"); return layer_methods;};
	        layer_methods.show = function(){g.style("visibility",null).style("pointer-events",null); return layer_methods;};
	        layer_methods.opacity = function(o){g.style("opacity", o==null ? 0 : o); return layer_methods;};

	        layer_methods.tooltips = function(html_, hide_){
	            
	            //register fn
	            ttip_show = function(key){
	                //get target path
	                var path = selection.filter(function(d){
	                    return geokey(d) == key;
	                });

	                if(path.size()==1){
	                    var node = path.node();
	                    var html = html_(key, node);
	                    var centroid; 
	                    try{
	                        //use centroid
	                        var mnode = map_panel.node();
	                        var mbox = mnode.getBoundingClientRect();
	                        var offset_x = mbox.left + mnode.clientLeft;
	                        var offset_y = mbox.top + mnode.clientTop;
	                        var xy = scope.path.centroid(path.datum());
	                        var pt = svg.node().createSVGPoint();
	                        pt.x = xy[0];
	                        pt.y = xy[1];
	                        var pt_ctm = pt.matrixTransform(g_translate.node().getScreenCTM());
	                        centroid = [pt_ctm.x - offset_x, pt_ctm.y - offset_y];
	                    }
	                    catch(e){
	                        //fallback to getBoundingClientRect()
	                        centroid = get_centroid(node);
	                    }
	                    //var centroid = get_centroid(node);
	                    show_tooltip.call(node, html, centroid);
	                }
	                else{
	                    //would only occur if user passes an invalid geocode
	                    console.warn("Multiple or no matching points.");
	                }
	            };  
	            
	            if(arguments.length > 1){
	                ttip_hide_ = hide_;
	            }            

	            return layer_methods;
	        };

	        layer_methods.highlight = function(key){
	            if(key==null){
	                ttip_hide();
	            }
	            else{
	                ttip(key);
	            }
	        };        

	        //to do, enable adding of attrs
	        layer_methods.attr = function(a){
	            if(arguments.length > 0){
	                attrs = a;
	            }
	            return layer_methods;
	        };

	        //end state layer factory (add_states);
	        return layer_methods;    
	    };


	    map_methods.add_points = function(f, geokey, lonlat, clip_to_this){
	        var g = g_main.append("g");
	       
	        var g_voro = g.append("g"); //render voronoi here
	        var g_points = g.append("g"); //render circles here
	        var g_labels = g.append("g").style("pointer-events","none"); //labels
	        
	        var point_labeler = function(cbsa){return ""};
	        var point_label_dxdy = [0,0]; // [dx, dy]
	        var point_label_styles = {};
	        var point_labels = null;
	        
	        //set default lonlat accessor
	        if(lonlat == null || typeof lonlat == "undefined"){
	            lonlat = function(d){return [d.lon, d.lat]};
	        }
	        
	        //build a feature array of geojson points
	        var geo_features = f.map(function(d){
	            return {
	                    "type": "Feature",
	                    "geometry": {
	                        "type": "Point",
	                        "coordinates": lonlat(d)
	                    },
	                    "properties": d
	            }   
	        });        

	        //set clip_geography for projection
	        if((arguments.length > 3 && !!clip_to_this) || clip_geo === null){
	            clip_geo = {type:"FeatureCollection", features:geo_features};
	        }
	        
	        //return object for this layer
	        var layer_methods = {};

	        layer_methods.hide = function(){g.style("visibility","hidden").style("pointer-events","none"); return layer_methods;};
	        layer_methods.show = function(){g.style("visibility",null).style("pointer-events",null); return layer_methods;};
	        layer_methods.opacity = function(o){g.style("opacity", o==null ? 0 : o); return layer_methods;};
	        layer_methods.labels = function(fn, position, styles){
	            if(arguments.length > 0){
	                point_labeler = fn;
	                point_label_dxdy = position != null ? position : [0,0];
	                point_label_styles = styles != null ? styles : {};
	                return layer_methods;
	            }
	            else{
	                return point_labels;
	            }
	        };

	        //selection of points
	        var selection = null;

	        layer_methods.points = function(){
	            return selection;
	        };

	        //voronoi layer
	        var voro_selection = null;

	        //tooltip fn
	        var ttip_show;
	        var ttip = function(key){
	            if(typeof ttip_show === "function" && selection !== null){
	                ttip_show(key);
	            }
	        };

	        //hide function
	        var ttip_hide_;
	        var ttip_hide = function(){
	            hide_tooltip(ttip_hide_);
	        };

	        g.on("mousedown", ttip_hide);

	        //attributes
	        var attrs = {};

	        var is_sorted = false;

	        function draw_layer(){

	            //project features
	            var projected_features = f.map(function(d){
	                var p = scope.projection(lonlat(d));
	                return {xy:p, data:d, key:geokey(d)}
	            }).filter(function(d){
	                return d.xy != null;
	            });
	            
	            //sort data
	            if(!is_sorted && typeof attrs.r === "function"){
	                projected_features.sort(function(a, b){
	                    var ar = attrs.r(a.key);
	                    var br = attrs.r(b.key);
	                    return d3.descending(ar, br);
	                });
	                is_sorted = true;
	            }

	            var selection_ = g_points.selectAll("circle").data(projected_features, function(d){return d.key});
	            selection_.exit().remove();
	            selection = selection_.enter().append("circle").merge(selection_)
	                        .attr("cx", function(d){return d.xy[0]})
	                        .attr("cy", function(d){return d.xy[1]})
	                        .order()
	                        ;

	            var point_labels_ = g_labels.selectAll("text").data(projected_features, function(d){return d.key});
	            point_labels_.exit().remove();
	            point_labels = point_labels_.enter().append("text").merge(point_labels_)
	                                        .attr("x", function(d){return d.xy[0]})
	                                        .attr("y", function(d){return d.xy[1]})
	                                        .attr("dx", point_label_dxdy[0])
	                                        .attr("dy", point_label_dxdy[1])
	                                        .text(function(d){
	                                            return point_labeler(d.key);
	                                        })
	                                        ;
	            
	            for(var ptstyl in point_label_styles){
	                if(point_label_styles.hasOwnProperty(ptstyl)){
	                    point_labels.style(ptstyl, point_label_styles[ptstyl]);
	                }            }
	            
	            //apply attributes
	            for(var a in attrs){
	                if(attrs.hasOwnProperty(a)){
	                    if(typeof attrs[a] === "function"){
	                        selection.attr(a, function(d, i){
	                            return attrs[a].call(this, d.key)
	                        });
	                    }
	                    else{
	                        selection.attr(a, attrs[a]);
	                    }
	                    
	                }
	            }


	            //add voronoi paths
	            var voro = d3.voronoi()
	                        .extent([[0,0], [scope.width, scope.height]])
	                        .x(function(d){return d.xy[0]})
	                        .y(function(d){return d.xy[1]})
	                        .polygons(projected_features)
	                        .map(function(d, i){
	                            var path = "M0,0";
	                            var key = null;
	                            var centroid = [0,0];
	                            var data = null;

	                            if(d!=null){
	                                path = "M" + d.join("L") + "Z";
	                                key = d.data.key;
	                                centroid = d.data.xy;
	                                data = d.data;
	                            }

	                            return {path: path, key: key, centroid: centroid, data: data}
	                        })
	                        ;
	            
	            var mv_u = g_voro.selectAll("path").data(voro);
	                mv_u.exit().remove();
	            voro_selection = mv_u.enter().append("path").merge(mv_u)
	                                .attr("d", function(d){
	                                    return d.path;
	                                })
	                                .attr("stroke","none")
	                                .attr("fill","none")
	                                .style("pointer-events","all");  

	            selection.on("mouseenter", function(d){
	                        ttip(d.key);
	                    })
	                    .on("mousedown", function(d){
	                        ttip(d.key);
	                        d3.event.stopPropagation();
	                    })
	                    .on("mouseleave", ttip_hide);
	            
	            voro_selection.on("mouseenter", function(d){
	                        ttip(d.key);
	                    })
	                    .on("mousedown", function(d){
	                        ttip(d.key);
	                        d3.event.stopPropagation();
	                    })
	                    .on("mouseleave", ttip_hide);
	                                          
	        }

	        draw_stack.push(draw_layer);

	        layer_methods.tooltips = function(html_, hide_){
	            
	            //register
	            ttip_show = function(key){
	                //get circle node by filtering selection of circles
	                var dot = selection.filter(function(d){
	                    return d.key == key;
	                });

	                if(dot.size()==1){
	                    var node = dot.node();
	                    var html = html_(key, node); 
	                    //var centroid = dot.datum().xy;
	                    var centroid = get_centroid(node);
	                    show_tooltip.call(node, html, centroid);
	                }
	                else{
	                    //would only occur if user passes an invalid geocode
	                    console.warn("Multiple or no matching points.");
	                } 
	            };

	            if(arguments.length > 1){
	                ttip_hide_ = hide_;
	            }
	            
	            return layer_methods;
	        };

	        layer_methods.highlight = function(key){
	            //ttip checks that selection exists
	            if(key==null){
	                ttip_hide();
	            }
	            else{
	                ttip(key);
	            }
	        }; 


	        layer_methods.attr = function(a){
	            if(arguments.length > 0){
	                attrs = a;
	            }
	            return layer_methods;
	        };

	        //end point layer factory (add_points);
	        return layer_methods;    
	    };

	    function dims(width){
	        if(arguments.length == 0 || width == null){
	            
	            //if user passes null, switch back to auto width
	            if(width === null){
	                scope.width_user = null;
	            }

	            //infer width if not (ever) specified by user
	            if(scope.width_user == null){
	                try{
	                    var box = wrap0.node().getBoundingClientRect();
	                    width = box.right - box.left;
	                    if(width < scope.min_width){
	                        width = scope.min_width;
	                    }
	                    else if(width > 1400){
	                        width = 1400;
	                    }
	                }
	                catch(e){
	                    width = 360;
	                }  
	            }
	            else{
	                //use previously specified width
	                width = scope.width_user;
	            }
	        }
	        else{
	            scope.responsive = false;
	            scope.width_user = width;
	            if(width < scope.min_width){
	                scope.min_width = width;
	            }
	        }

	        scope.width = width;
	        scope.height = scope.aspect * scope.width;
	      
	    }

	    map_methods.width = function(width){
	        if(arguments.length > 0){
	            dims(width);
	            return map_methods;
	        }
	        else{
	            return scope.width;
	        }
	    };

	    map_methods.min_width = function(width){
	        if(arguments.length > 0){
	            scope.min_width = width;
	            return map_methods;
	        }
	        else{
	            return scope.min_width;
	        }
	    };

	    map_methods.title = function(t){
	        if(arguments.length > 0){
	            title.html(t);
	        }
	        else{
	            //return the actual p selection
	            return title;
	        }
	    };

	    map_methods.print = function(width){
	        dims(width);
	        draw();
	    };

	    map_methods.scalable = function(){
	        scope.scalable = !scope.scalable;
	        return map_methods;
	    };

	    map_methods.panels = function(){
	        return panels;
	    };

	    return map_methods;

	}

	//requires topojson

	var state_topo = {"type":"Topology","bbox":[-179.174265,18.917465999999997,-66.949895,71.352561],"transform":{"scale":[0.0011222549225492254,0.0005243561935619356],"translate":[-179.174265,18.917465999999997]},"objects":{"geos":{"type":"GeometryCollection","geometries":[{"type":"MultiPolygon","arcs":[[[0]],[[1,2]]],"properties":{"geo_id":"23","geo_name":"Maine","geo_name2":"ME"}},{"type":"MultiPolygon","arcs":[[[3]],[[4]],[[5]],[[6]],[[7]],[[8]],[[9]],[[10]]],"properties":{"geo_id":"15","geo_name":"Hawaii","geo_name2":"HI"}},{"type":"Polygon","arcs":[[11,12,13,14,15]],"properties":{"geo_id":"04","geo_name":"Arizona","geo_name2":"AZ"}},{"type":"Polygon","arcs":[[16,17,18,19,20,21]],"properties":{"geo_id":"05","geo_name":"Arkansas","geo_name2":"AR"}},{"type":"Polygon","arcs":[[22,23,24,25]],"properties":{"geo_id":"10","geo_name":"Delaware","geo_name2":"DE"}},{"type":"Polygon","arcs":[[26,27,28,29,30,31]],"properties":{"geo_id":"13","geo_name":"Georgia","geo_name2":"GA"}},{"type":"Polygon","arcs":[[32,33,34,35,36]],"properties":{"geo_id":"27","geo_name":"Minnesota","geo_name2":"MN"}},{"type":"MultiPolygon","arcs":[[[37]],[[38]],[[39]],[[40]],[[41]],[[42,43,-12,44]]],"properties":{"geo_id":"06","geo_name":"California","geo_name2":"CA"}},{"type":"Polygon","arcs":[[45,46]],"properties":{"geo_id":"11","geo_name":"District of Columbia","geo_name2":"DC"}},{"type":"MultiPolygon","arcs":[[[47]],[[48]],[[49]],[[-31,50,51]]],"properties":{"geo_id":"12","geo_name":"Florida","geo_name2":"FL"}},{"type":"Polygon","arcs":[[52,53,54,55,56,57,58]],"properties":{"geo_id":"16","geo_name":"Idaho","geo_name2":"ID"}},{"type":"Polygon","arcs":[[59,60,61,62,63,64]],"properties":{"geo_id":"17","geo_name":"Illinois","geo_name2":"IL"}},{"type":"Polygon","arcs":[[-35,65,-60,66,67,68]],"properties":{"geo_id":"19","geo_name":"Iowa","geo_name2":"IA"}},{"type":"Polygon","arcs":[[-64,69,70,71,72,73,74]],"properties":{"geo_id":"21","geo_name":"Kentucky","geo_name2":"KY"}},{"type":"Polygon","arcs":[[-20,75,76,77]],"properties":{"geo_id":"22","geo_name":"Louisiana","geo_name2":"LA"}},{"type":"MultiPolygon","arcs":[[[78]],[[79,-25,80,81,82,83,-46,84,85]]],"properties":{"geo_id":"24","geo_name":"Maryland","geo_name2":"MD"}},{"type":"MultiPolygon","arcs":[[[86]],[[87]],[[88]],[[89,90,91]],[[92]],[[93,94]]],"properties":{"geo_id":"26","geo_name":"Michigan","geo_name2":"MI"}},{"type":"Polygon","arcs":[[-67,-65,-75,95,-17,96,97,98]],"properties":{"geo_id":"29","geo_name":"Missouri","geo_name2":"MO"}},{"type":"Polygon","arcs":[[99,100,101,102,-55]],"properties":{"geo_id":"30","geo_name":"Montana","geo_name2":"MT"}},{"type":"MultiPolygon","arcs":[[[103]],[[104,105,106,107,108,109,110]]],"properties":{"geo_id":"36","geo_name":"New York","geo_name2":"NY"}},{"type":"Polygon","arcs":[[111,-59,112,-43,113]],"properties":{"geo_id":"41","geo_name":"Oregon","geo_name2":"OR"}},{"type":"Polygon","arcs":[[-96,-74,114,115,-27,116,117,-18]],"properties":{"geo_id":"47","geo_name":"Tennessee","geo_name2":"TN"}},{"type":"Polygon","arcs":[[118,-21,-78,119,120]],"properties":{"geo_id":"48","geo_name":"Texas","geo_name2":"TX"}},{"type":"MultiPolygon","arcs":[[[-82,121]],[[122,-85,-47,-84,123,124,-115,-73]]],"properties":{"geo_id":"51","geo_name":"Virginia","geo_name2":"VA"}},{"type":"MultiPolygon","arcs":[[[125]],[[126]],[[127,-95,128,-61,-66,-34]]],"properties":{"geo_id":"55","geo_name":"Wisconsin","geo_name2":"WI"}},{"type":"Polygon","arcs":[[-102,129,-36,-69,130,131]],"properties":{"geo_id":"46","geo_name":"South Dakota","geo_name2":"SD"}},{"type":"Polygon","arcs":[[-57,132,133,-14,134]],"properties":{"geo_id":"49","geo_name":"Utah","geo_name2":"UT"}},{"type":"Polygon","arcs":[[135,-91,136,-70,-63]],"properties":{"geo_id":"18","geo_name":"Indiana","geo_name2":"IN"}},{"type":"MultiPolygon","arcs":[[[137]],[[138]],[[139,140,141,142,143,-107]]],"properties":{"geo_id":"25","geo_name":"Massachusetts","geo_name2":"MA"}},{"type":"Polygon","arcs":[[-19,-118,144,145,-76]],"properties":{"geo_id":"28","geo_name":"Mississippi","geo_name2":"MS"}},{"type":"Polygon","arcs":[[-131,-68,-99,146,147,148]],"properties":{"geo_id":"31","geo_name":"Nebraska","geo_name2":"NE"}},{"type":"Polygon","arcs":[[149,150,-121,151,-15]],"properties":{"geo_id":"35","geo_name":"New Mexico","geo_name2":"NM"}},{"type":"Polygon","arcs":[[-125,152,153,-28,-116]],"properties":{"geo_id":"37","geo_name":"North Carolina","geo_name2":"NC"}},{"type":"MultiPolygon","arcs":[[[154]],[[155,-143,156]]],"properties":{"geo_id":"44","geo_name":"Rhode Island","geo_name2":"RI"}},{"type":"MultiPolygon","arcs":[[[157]],[[-90,158,159,160,-71,-137]]],"properties":{"geo_id":"39","geo_name":"Ohio","geo_name2":"OH"}},{"type":"Polygon","arcs":[[161,162,-97,-22,-119,-151]],"properties":{"geo_id":"40","geo_name":"Oklahoma","geo_name2":"OK"}},{"type":"Polygon","arcs":[[-154,163,-29]],"properties":{"geo_id":"45","geo_name":"South Carolina","geo_name2":"SC"}},{"type":"Polygon","arcs":[[164,-148,165,-162,-150,-134]],"properties":{"geo_id":"08","geo_name":"Colorado","geo_name2":"CO"}},{"type":"Polygon","arcs":[[-147,-98,-163,-166]],"properties":{"geo_id":"20","geo_name":"Kansas","geo_name2":"KS"}},{"type":"Polygon","arcs":[[-144,-156,166,-108]],"properties":{"geo_id":"09","geo_name":"Connecticut","geo_name2":"CT"}},{"type":"Polygon","arcs":[[-113,-58,-135,-13,-44]],"properties":{"geo_id":"32","geo_name":"Nevada","geo_name2":"NV"}},{"type":"MultiPolygon","arcs":[[[167]],[[-53,-112,168]]],"properties":{"geo_id":"53","geo_name":"Washington","geo_name2":"WA"}},{"type":"Polygon","arcs":[[-161,169,-86,-123,-72]],"properties":{"geo_id":"54","geo_name":"West Virginia","geo_name2":"WV"}},{"type":"Polygon","arcs":[[-132,-149,-165,-133,-56,-103]],"properties":{"geo_id":"56","geo_name":"Wyoming","geo_name2":"WY"}},{"type":"Polygon","arcs":[[-117,-32,-52,170,-145]],"properties":{"geo_id":"01","geo_name":"Alabama","geo_name2":"AL"}},{"type":"Polygon","arcs":[[171,-3,172,-141,173]],"properties":{"geo_id":"33","geo_name":"New Hampshire","geo_name2":"NH"}},{"type":"Polygon","arcs":[[174,-110,175,-23]],"properties":{"geo_id":"34","geo_name":"New Jersey","geo_name2":"NJ"}},{"type":"Polygon","arcs":[[176,-37,-130,-101]],"properties":{"geo_id":"38","geo_name":"North Dakota","geo_name2":"ND"}},{"type":"Polygon","arcs":[[177,-111,-175,-26,-80,-170,-160]],"properties":{"geo_id":"42","geo_name":"Pennsylvania","geo_name2":"PA"}},{"type":"Polygon","arcs":[[178,-174,-140,-106]],"properties":{"geo_id":"50","geo_name":"Vermont","geo_name2":"VT"}},{"type":"MultiPolygon","arcs":[[[179]],[[180]],[[181]],[[182]],[[183]],[[184]],[[185]],[[186]],[[187]],[[188]],[[189]],[[190]],[[191]],[[192]],[[193]],[[194]],[[195]],[[196]],[[197]],[[198]],[[199]],[[200]],[[201]],[[202]],[[203]],[[204]],[[205]],[[206]],[[207]],[[208]],[[209]],[[210]],[[211]],[[212]],[[213]],[[214]],[[215]],[[216]]],"properties":{"geo_id":"02","geo_name":"Alaska","geo_name2":"AK"}}],"bbox":[-179.174265,18.917465999999997,-66.949895,71.352561]}},"arcs":[[[98240,47616],[44,37],[23,-104],[-35,-88],[-50,60],[18,95]],[[96315,50325],[41,12],[23,63],[56,-26],[33,-67],[18,-109],[43,-9],[9,71],[4,29],[19,47],[-10,57],[12,67],[-18,45],[40,59],[23,-5],[23,-55],[46,-10],[39,-20],[-1,84],[-35,47],[-43,110],[31,103],[34,65],[52,62],[35,71],[94,69],[56,58],[-28,98],[17,43],[59,86],[63,71],[6,81],[-11,56],[-43,-2],[9,71],[-13,39],[10,80],[36,76],[24,79],[-46,83],[32,115],[20,73],[24,29],[-2,60],[41,57],[38,44],[35,50],[23,36],[28,275],[23,232],[159,343],[225,477],[113,238],[195,395],[57,-12],[43,-29],[61,-26],[-13,-84],[12,-253],[66,-62],[58,-65],[87,71],[114,51],[63,13],[15,61],[72,29],[42,-20],[76,12],[-8,66],[20,54],[82,-3],[58,-27],[46,-49],[62,-80],[76,-103],[41,-42],[56,-147],[89,-101],[0,-517],[1,-368],[5,-615],[2,-460],[0,-191],[27,-38],[-48,-93],[36,-75],[-36,-92],[20,-97],[-19,-101],[82,3],[32,-93],[38,-18],[87,-49],[71,17],[28,-62],[5,-134],[-53,-9],[-6,-86],[51,-149],[-30,-140],[-18,-62],[24,-51],[56,-166],[46,-54],[37,40],[24,84],[60,-37],[38,-16],[43,-97],[19,-83],[8,-75],[44,-171],[44,-69],[-8,-104],[38,-60],[-68,-94],[-42,-50],[-39,-68],[-47,-84],[-57,-48],[-53,-72],[-67,48],[-27,-42],[-44,-4],[-39,-85],[-26,-88],[16,-63],[-68,-91],[-49,111],[-17,74],[-47,-46],[-78,-13],[-39,-58],[-16,-86],[-39,-49],[-33,33],[-38,-46],[-31,6],[-32,-113],[-48,64],[-20,43],[-56,-25],[14,-87],[-17,-41],[-33,-76],[49,-78],[-118,17],[-7,-72],[-15,-171],[-95,16],[-58,-31],[-72,-54],[-30,-117],[-35,-12],[-11,139],[-98,-36],[-85,-62],[-27,99],[-27,102],[41,55],[-56,113],[-79,29],[-12,-119],[-19,-79],[39,-97],[-32,-75],[21,-64],[-29,-62],[-49,4],[-39,2],[-34,-106],[-26,-5],[-33,-75],[-37,-43],[-30,116],[-34,74],[-26,-64],[-14,-26],[-58,-137],[-44,7],[-23,-34],[-65,-37],[-59,-22],[-33,-93],[-47,-30],[-23,-51],[-20,7],[-6,103],[-48,31],[-60,-59],[-16,-64],[-62,6],[-22,-79],[-65,5],[-20,-56],[-23,-93],[9,-75],[-35,-34],[-67,-24],[-36,4],[-21,-80],[52,-55],[-51,-87],[-29,-99],[-44,-39],[-46,7],[-32,-42],[-28,-99],[7,-80],[1,-12],[-18,-111],[-24,-56],[-38,-111],[-34,-31]],[[96654,46042],[-47,38],[-64,94],[3,97],[11,71],[-53,101],[-46,104],[-54,98],[14,102],[7,85],[5,68],[-16,115],[-8,250],[-7,263],[-10,484],[-7,317],[-2,82],[-7,264],[-3,114],[-13,450],[-18,503],[-24,583]],[[20605,1646],[39,71],[27,62],[24,13],[30,57],[20,86],[33,70],[21,27],[6,82],[-22,70],[-36,116],[-11,102],[11,149],[33,31],[49,-33],[55,-60],[29,-59],[60,-74],[35,-54],[35,13],[50,-33],[102,-89],[105,-101],[92,-146],[38,-77],[34,-80],[-4,-151],[3,-92],[37,22],[35,-1],[23,-92],[6,-110],[24,-54],[84,-106],[34,-37],[-1,-56],[-54,-128],[-60,-98],[-69,-97],[-82,-77],[-41,-43],[-42,-14],[-52,25],[-43,-44],[-43,-80],[-26,-15],[-56,-94],[-46,-27],[-45,-130],[-32,-118],[-20,-71],[-22,-55],[-30,-46],[-48,99],[-71,85],[-68,43],[-29,119],[2,153],[9,151],[10,77],[2,94],[-18,129],[-14,73],[-24,62],[-16,133],[-8,99],[-17,66],[-28,14],[-4,37],[-28,117],[13,95]],[[20026,3820],[17,114],[55,91],[50,-23],[40,-117],[33,-108],[69,34],[63,58],[81,-16],[42,-87],[56,-59],[64,-97],[51,-28],[16,-98],[-15,-88],[-37,-63],[-77,-72],[-72,2],[-66,-61],[-83,-34],[-48,37],[-11,111],[-13,153],[-3,33],[-10,71],[-29,16],[-28,-40],[-15,15],[-69,67],[-50,132],[-11,57]],[[20052,3132],[54,65],[38,21],[22,-47],[3,-100],[-42,-31],[-73,-13],[-30,53],[28,52]],[[19706,3806],[44,32],[64,-9],[58,-58],[32,-60],[25,-82],[-26,-106],[-47,-38],[-16,-10],[-53,-9],[-20,78],[-1,97],[-17,53],[-43,58],[0,54]],[[19512,4274],[24,49],[-10,79],[53,-12],[65,-34],[79,-20],[23,18],[27,22],[19,0],[37,-82],[3,0],[68,-2],[88,16],[30,-34],[-27,-90],[-56,-84],[-67,-34],[-68,32],[-65,43],[-48,25],[-81,-21],[-72,-6],[-52,26],[30,109]],[[18661,5085],[95,6],[40,78],[26,83],[52,70],[22,9],[39,-118],[42,-144],[36,-87],[-8,-120],[28,-51],[44,40],[38,-4],[-2,-106],[12,-86],[53,-85],[-19,-56],[-24,-39],[-51,27],[-20,-25],[-27,-14],[-37,51],[-34,42],[-54,12],[-28,6],[-38,-13],[-57,-20],[-13,-1],[-24,89],[-9,55],[-35,59],[-3,49],[-45,110],[2,69],[-42,104],[41,10]],[[17278,6002],[34,63],[14,81],[22,37],[84,80],[27,42],[33,-4],[29,-34],[21,49],[50,-18],[26,24],[36,-35],[44,-59],[17,-115],[-22,-117],[-15,-38],[2,-81],[-4,-91],[-43,-74],[-53,-84],[-73,29],[-42,17],[-26,-1],[-41,80],[-52,52],[-42,31],[-28,79],[2,87]],[[16863,5526],[18,141],[32,64],[50,50],[14,27],[8,62],[36,15],[12,-13],[7,-29],[-17,-33],[-14,-70],[6,-59],[-40,-37],[-29,-17],[-16,-40],[-14,-47],[-14,-82],[-22,20],[-17,48]],[[57433,26320],[13,44],[34,-14],[44,13],[42,12],[35,67],[56,120],[5,108],[-12,41],[-4,93],[-27,98],[-57,24],[-47,-10],[-38,13],[-32,129],[24,103],[1,135],[3,48],[-43,62],[14,68],[0,101],[-16,54],[46,26],[34,8],[6,21],[28,109],[65,117],[-4,104],[3,105],[18,59],[8,50],[-7,79],[-14,128],[13,70],[-3,69],[-23,54],[22,54],[49,103],[17,60],[5,69],[2,27],[20,36],[51,43],[49,62],[57,38],[46,102],[34,37],[-1,88],[-29,75],[-81,107],[-63,93],[-39,1],[0,126],[-39,122],[-38,211],[-23,64],[-76,173],[-52,110],[4,133],[-3,113]],[[57510,30675],[7,127],[5,101],[19,-1],[23,34],[-13,235],[-35,281],[-34,76],[2,143],[8,165],[-32,77],[-7,157],[-6,155],[31,96],[-28,70],[-27,80],[-10,126],[-1,116],[6,64],[62,25],[35,45],[50,20],[53,-1],[22,-41],[35,-6],[28,37],[40,-5],[31,-67],[19,-86],[40,-52],[51,-38],[55,17],[12,54],[34,131],[48,138],[-2,143],[1,108],[-2,531],[-1,756]],[[58029,34486],[76,-1],[890,1],[60,0],[62,0],[254,1],[6,0],[161,0],[842,1],[6,0],[114,-2],[188,4],[282,1],[250,-10],[418,0],[450,3],[401,-1]],[[62489,34483],[0,-237],[0,-1445],[0,-452],[-1,-507],[0,-478],[0,-358],[1,-412],[0,-834],[-1,-1234],[0,-888],[0,-383],[0,-822],[-1,-670],[0,-653],[-1,-548],[-1,-885]],[[62485,23677],[-695,3],[-561,-2],[-548,-2],[-260,177],[-890,603],[-863,570],[-372,246],[-947,620],[2,55],[14,53],[-16,27],[13,55],[-9,45],[40,61],[40,132]],[[75345,33531],[229,0],[253,-1],[105,-1],[82,0],[149,1],[103,0],[140,-1],[100,-1],[19,0],[149,0],[243,0],[13,0],[60,0],[185,0],[31,0],[160,-1],[178,1],[26,0],[120,1],[280,1],[26,0],[172,-3],[38,-1],[2,0],[248,1],[97,1],[208,1],[17,0],[168,0],[73,0],[244,-5],[60,-1],[11,-68],[9,-85],[58,-55],[2,-56],[0,-103],[-46,-71],[-36,-99],[-58,-56],[-13,-86],[-53,-50],[-39,-126],[-27,-98],[71,1],[165,4],[129,1],[52,1],[150,2]],[[79698,32579],[41,-101],[31,-50],[3,-34],[1,-16],[-67,-41],[-6,-49],[5,-73],[-65,-51],[-60,-67],[-46,14],[-36,-114],[51,-85],[20,-46],[-50,-36],[-11,-90],[-12,-36],[-71,17],[-7,-103],[21,-75],[-20,-80],[-23,15],[-37,-25],[22,-89],[-31,-112],[-40,-57],[62,-47],[4,-89],[-6,-74],[8,-88],[-62,20],[-19,-72],[-14,-77],[-60,-20],[-32,-22],[-8,-63]],[[79184,30663],[58,-111],[-5,-58],[-56,-68],[-79,-69],[-55,-1],[-9,-88],[-29,-46],[-36,-119],[-3,-74],[-33,-91],[33,-91],[-17,-82],[-13,-126],[7,-83],[-59,-60],[-17,-92],[-61,54],[-32,-40],[11,-102],[-53,-19],[-25,-83],[-48,-22],[10,-76],[-10,-45],[-39,-23],[-7,-76],[40,-28],[24,-43],[-16,-86],[-45,-17],[-33,-34],[-23,-44],[-38,15],[-36,-45],[47,-33],[8,-69],[-31,-58],[8,-101],[24,-35],[-1,-81],[-52,25],[-24,-4],[-28,-52],[61,-63],[-23,-102],[-69,-18],[42,-77],[-52,-66],[-23,-90],[23,-69],[16,-58],[21,-68],[30,-64],[-25,-85],[15,-131],[35,-12],[16,-78],[-14,-99],[-18,-94],[-44,6],[-24,-70],[54,-83],[-41,-96]],[[78421,26865],[-88,1],[-153,2],[-47,1],[-344,3],[-173,1],[-137,1],[-248,6],[-198,4],[-221,6],[-15,0],[-186,1],[-37,0],[-123,1],[-101,0],[-28,1],[-180,1],[-81,0],[-204,-1]],[[75857,26893],[1,269],[-1,325],[0,201],[0,220],[-26,40],[-63,11],[-36,27],[-27,-41],[-22,12],[-58,-24],[-31,5],[-14,-20],[-30,17],[-28,23],[-59,115]],[[75463,28073],[3,289],[4,289],[2,150],[5,325],[4,324],[4,282],[3,243],[3,179],[5,308],[1,83],[4,245],[7,407],[3,179],[-16,242],[-21,271],[-19,247],[-33,419],[-18,218],[-9,114],[-22,263],[-28,381]],[[92456,39829],[-40,-69],[-16,-97],[-28,-55],[-23,-74],[-22,-33],[14,-65],[28,-34],[-13,-82],[-1,-71]],[[92355,39249],[-58,-36],[19,-77],[45,-97],[14,-33],[33,-76],[54,-126],[12,-145],[-11,-105],[10,-144],[49,-73],[31,-137],[3,-17],[-1,-49],[64,-132],[65,-103],[41,-13],[21,27],[16,-192],[16,-306],[4,-162]],[[92782,37253],[-121,-1],[-139,3],[-123,3],[-191,12],[-6,157],[-7,177],[-13,371],[-23,597],[-7,198],[-10,249],[-19,658]],[[92123,39677],[13,0],[19,68],[32,65],[48,56],[61,25],[22,9],[79,-19],[59,-52]],[[83376,30642],[117,-2],[79,-1],[19,0],[77,3],[11,1],[196,3],[58,1],[3,0],[103,1],[45,0],[31,0],[43,0],[94,1],[101,-1],[166,1]],[[84519,30649],[172,-1],[111,-1],[61,0],[282,-2],[63,5],[59,4],[143,9],[191,9]],[[85601,30672],[-14,-86],[-15,-58],[-54,-77],[-46,-59],[-28,-58],[-35,-64],[3,-57],[-29,-59],[3,-23],[8,-58],[2,-8],[54,-71],[50,-67],[60,-41],[46,-97],[5,-11],[41,-70],[2,-3],[48,-40],[3,1],[58,17],[47,-20],[28,-137],[17,-78],[38,-118],[5,-16],[27,-83],[8,-62],[18,-123],[65,-127],[42,-129],[3,-9],[26,-100],[5,-21],[39,-16],[73,-134],[95,-89],[76,-170],[21,-83],[14,-57],[34,-90],[17,-10],[25,-14],[8,-4],[69,-97],[11,-30],[22,-67],[58,-59],[6,-100],[-12,-128],[78,-76],[-1,-118],[74,-73],[1,-12],[7,-87],[86,-92],[38,-27],[12,-9],[52,-77],[37,-55],[2,-137],[32,-87],[39,-127],[6,-166],[1,-10],[17,-163],[-3,-91],[9,-13],[52,-72],[39,-27],[8,-6],[72,-150],[0,-103],[19,-50],[36,-96],[4,-111],[-22,-74],[5,-20],[25,-95],[5,-122],[67,-55],[28,32],[57,-83],[51,-44]],[[87581,25016],[38,-20],[-4,-69],[-56,-85],[-27,-58],[-53,-107],[-32,-84],[-36,-99],[-48,-73],[-8,-44],[6,-146],[-36,-128],[-3,-74],[-33,-104],[-40,-111],[-18,-102],[16,-90],[-20,-113],[-19,-73],[-57,-133],[-30,-21],[1,-101],[-17,-107],[7,-49],[3,-25],[3,-132],[-31,-166],[-17,-98],[14,-115]],[[87084,22489],[-56,25],[-19,1],[-30,-15],[-64,27],[-31,29],[-57,9],[-28,46],[-40,31],[-54,5],[-30,54],[-36,13],[-46,-79],[-34,-68],[-8,-111],[-7,-70],[30,-103],[-2,-134],[-9,-160],[-12,-84],[1,-64],[-48,-17],[-43,5],[-33,9],[-27,107],[8,95],[-25,89],[10,83],[-179,31],[-36,7],[-111,14],[-94,12],[-167,21],[-227,28],[-158,20],[-43,6],[-127,16],[-100,11],[-117,13],[-69,8],[-166,18],[-68,8],[-37,4],[-143,13],[-85,7],[-84,8],[-301,32],[-46,3],[-48,116],[-14,118],[-1,85],[-43,111],[-20,77],[3,45]],[[83913,23044],[-8,101],[-22,104],[-64,149],[0,138],[16,69],[1,26],[1,25],[-4,79],[23,130],[-5,71],[18,97],[9,48],[-14,50],[-1,94],[-60,143],[6,72],[-20,203],[25,103],[41,141],[4,47],[10,134],[4,48],[-10,93],[54,94],[60,64],[10,23],[25,62],[-57,81],[-47,59],[22,50],[2,31],[8,121],[-31,155],[-56,113],[-17,143],[-23,138],[-41,183],[-21,66],[-43,471],[-4,41],[-51,569],[-18,194],[-21,235],[-20,219],[-23,255],[-11,119],[-20,223],[-7,84],[-30,308],[-11,109],[-25,250],[-9,94],[-19,191],[-24,240],[-19,211],[-11,121],[-9,116]],[[73018,57372],[266,-2],[468,0],[383,0],[566,-2],[19,0],[148,0],[0,355],[0,237],[0,143],[85,-59],[61,30],[33,0],[66,-68],[55,-23],[17,-204],[21,-170],[21,-48],[0,-191],[28,0],[32,-221],[-2,-83],[-8,-97],[67,-99],[98,-71],[56,-14],[14,10],[37,26],[96,-13],[27,-41],[1,-52],[141,-24],[147,-24],[74,-3],[34,-113],[-9,-84],[126,-19],[100,24],[84,32],[3,88],[83,25],[21,41],[125,31],[58,-34],[48,4],[119,9],[54,-70],[148,-106],[83,7],[3,-66],[-23,-79],[73,-50],[54,14],[52,-65],[-12,-119],[48,-107],[42,-144],[48,39],[17,72],[1,87],[29,59],[89,16],[96,-8],[49,-72],[17,-140],[78,-19],[85,-61],[15,-10],[59,-3],[20,-152],[118,-21],[15,-105],[69,26],[115,5],[77,28],[84,107],[107,94],[3,2],[112,89],[56,12],[35,-126],[25,-106],[65,-50],[122,51],[85,-31],[137,-5],[162,16],[95,-47],[50,-128],[93,-58],[106,64],[111,-23],[121,6],[-59,-76],[-94,-45],[-68,-63],[-50,-51],[-116,-56],[-45,-60],[-87,-37],[-103,-63],[-121,-46],[-88,-36],[-103,-61],[-98,-89],[-79,-61],[-118,-129],[-138,-175],[-110,-159],[-103,-195],[-111,-176],[-62,-91],[-104,-94],[-64,-121],[-82,-83],[-62,-94],[-89,-81],[-95,-110],[-44,-57],[42,-186]],[[77664,52996],[-32,8],[-44,46],[-38,-6],[-35,-69],[-20,-58],[-78,-3],[0,-320],[-1,-479],[0,-324],[-40,-42],[-12,-70],[-36,7],[-51,-33],[-20,-55],[-65,-6],[-32,-45],[-67,-42],[-58,-77],[-34,-93],[-15,-86],[-44,-102],[-39,-41],[-16,-145],[6,-125],[71,-21],[39,-10],[26,-61],[37,-101],[35,-66],[-10,-80],[-36,-113],[-56,-99],[-5,-171],[21,-136],[3,-20],[-56,-91],[37,-82],[10,-154],[-16,-167],[-33,-164],[12,-18],[54,-84],[31,-48],[70,-146],[61,-67],[134,-37],[34,1],[39,-38],[3,-2],[20,-100],[41,-60],[12,-17],[108,-60],[23,-17],[108,-82],[42,-83],[21,-166],[34,-65],[34,-63],[87,-67],[64,-124],[66,-71],[13,-5],[105,-43],[15,-33],[59,-128],[60,-123],[3,-11],[38,-141],[-26,-203],[18,-126],[18,-68],[14,-123]],[[78375,46882],[-244,1],[-106,0],[-107,0],[-84,0],[-227,0],[-89,0],[-240,-1],[-93,0],[-283,-1],[-137,0],[-22,0],[-160,0],[-239,-1],[-71,0],[-64,0],[-287,1],[-247,1],[-127,0],[-47,0],[-367,0],[-53,1],[-268,0],[-154,-1],[-88,0],[-310,-1],[-24,0],[-171,1],[-129,0],[-227,0]],[[73710,46882],[0,99],[0,567],[0,662],[1,312],[-1,350],[-2,499],[-1,328],[-1,630],[-22,73],[-35,56],[-36,20],[-50,42],[-51,4],[-32,51],[-28,80],[-34,109],[-56,111],[-7,48],[22,67],[73,90],[64,59],[38,93],[38,67],[14,106],[7,121]],[[73611,51526],[-9,155],[1,10],[16,118],[-36,259],[-5,191],[-41,74],[-55,146],[-32,249],[-41,136],[3,106],[-1,162],[22,257],[-62,186],[13,136],[-7,132],[-12,241],[-16,312],[2,112],[1,139],[-25,147],[-41,183],[-60,190],[-37,169],[-28,177],[-33,125],[-36,147],[1,9],[3,39],[11,122],[-7,165],[-2,164],[-8,194],[0,17],[1,6],[4,76],[38,160],[-19,87],[-28,113],[-30,181],[-37,149],[-1,105]],[[53981,27748],[97,38],[102,-149],[75,-110],[-35,-100],[-44,40],[-81,12],[-15,83],[-72,123],[-27,63]],[[53981,26925],[48,-105],[83,-163],[83,-140],[-64,-40],[-56,83],[-83,167],[-54,162],[43,36]],[[53103,27388],[61,55],[74,-79],[-2,-72],[-31,-24],[-72,34],[-30,86]],[[52803,28875],[52,25],[105,-42],[154,8],[86,1],[25,0],[70,-6],[1,-96],[-26,-11],[-86,3],[-59,3],[-97,-23],[-52,-50],[-66,6],[-69,33],[-3,83],[-35,66]],[[52400,28910],[112,-37],[95,-59],[72,22],[63,-103],[9,-79],[-67,-53],[-65,-36],[-51,62],[-18,55],[-147,66],[-80,69],[77,93]],[[48975,44018],[188,-5],[159,-1],[147,-1],[123,8],[75,5],[78,-5],[104,11],[76,8],[89,-11],[219,1],[266,9],[189,-1],[167,-4],[227,-5],[153,-6],[203,-6],[7,0],[168,1],[193,-8],[138,0],[167,1],[171,0],[284,1],[163,0]],[[52729,44010],[0,-228],[1,-488],[-2,-830],[1,-606],[1,-276],[1,-763],[0,-372],[-1,-323],[-2,-447],[-2,-350],[-3,-472],[2,-240],[1,-101],[0,-86],[1,-129],[86,-127],[282,-417],[2,-3],[229,-341],[44,-65],[109,-163],[185,-278],[400,-610],[65,-101],[361,-560],[168,-262],[137,-213],[388,-616],[70,-113],[147,-235],[457,-741],[100,-165],[252,-414],[179,-297],[41,-69],[177,-294],[217,-366],[90,-152],[128,-217],[103,-176],[214,-367],[152,-262]],[[57433,26320],[-250,-36],[-414,-62],[-518,-83],[-53,-10],[-387,-66],[-77,-14],[-206,-36],[-238,-45],[-11,162],[-28,101],[-25,32],[-44,-37],[-8,59],[0,165],[-23,68],[-1,33],[7,23],[10,-4],[6,19],[1,77],[-23,214],[-31,155],[-42,143],[-74,191],[-91,185],[-43,40],[-44,103],[-62,38],[-10,44],[-78,131],[-24,41],[-77,61],[-65,93],[-79,144],[-39,44],[-46,-32],[-66,-62],[-53,17],[-33,37],[-37,7],[-29,74],[31,57],[-17,152],[-42,162],[-53,111],[-75,22],[-67,-11],[-59,-2],[-53,-59],[-44,63],[-90,27],[-102,80],[-36,8],[-105,128],[-26,99],[-12,75],[-38,44],[-56,86],[-76,101],[-67,41],[-72,49],[-60,-24],[-22,-25],[-68,39],[-45,0],[-34,-13],[-87,68],[-70,32],[-81,23],[-137,-6],[-139,-44],[-54,144],[-34,38],[-28,27],[-37,-6],[-20,52],[39,212],[-12,73],[-10,14],[14,230],[-54,87],[19,136],[14,110],[4,86],[-6,87],[-35,56],[-34,44],[-38,-30],[-80,84],[-45,83],[15,88],[16,127],[-20,132],[-64,45],[-42,14],[-99,211],[-47,122],[-94,59],[-37,89],[-16,133],[-67,118],[-49,78],[-21,162],[-41,84],[-38,20],[-42,142],[-52,126],[-89,118],[-41,27],[-56,117],[-13,173],[-34,175],[-26,185],[42,99],[56,-44],[41,136],[16,181],[5,72],[-19,66],[-44,156],[-40,71],[-40,5],[-67,-39],[-71,9],[-89,111],[-48,112],[-22,55],[-34,26],[-19,55],[-47,82],[-19,117],[11,127],[4,42],[-7,72],[-30,117],[-3,48],[-42,59],[-21,55],[-1,105],[19,69],[0,141],[-13,162],[41,57],[60,9],[12,-29],[7,-99],[18,-18],[-4,-27],[-28,-14],[29,-220],[103,-65],[68,-103],[35,32],[15,15],[-29,101],[-7,112],[-9,52],[-46,59],[-32,53],[-2,54],[-54,42],[-18,63],[26,38],[-27,150],[-40,-6],[-41,96],[51,43],[-1,56],[23,3],[19,2],[53,78],[-35,103],[-82,73],[-87,-68],[-7,-144],[41,-69],[-32,-56],[2,-86],[34,-54],[27,-78],[-58,-49],[-48,7],[-57,85],[-69,60],[-21,-24],[-47,79],[-38,79],[-52,76],[-74,29],[-31,-75],[-33,21],[45,209],[6,119],[-30,118],[1,68],[-16,46],[-44,4],[-13,69],[-15,105],[-72,161],[-75,69],[-73,104],[-16,59],[-82,197],[-65,80],[-51,108],[-59,87],[-19,54],[-45,78],[-20,80],[37,126],[-27,198],[-40,131],[-29,148],[-24,171],[10,163],[43,203],[-14,131],[-9,119],[-33,74],[-20,208],[-50,59],[-42,113],[-72,174],[-30,15],[-16,109],[-47,72],[-43,27],[-63,103],[-75,114],[-18,32],[9,135],[-11,82],[-39,121],[20,128],[76,295],[111,350],[52,278],[-6,113],[-26,74],[-8,98],[36,97],[28,187],[26,290],[-17,206],[-31,155],[-24,153],[-10,38],[-32,13],[-49,108],[23,103],[15,180],[-8,110]],[[90937,38174],[70,117],[34,-57],[83,-139],[-62,-105],[-53,-88]],[[91009,37902],[0,146],[-46,69],[-26,57]],[[86756,10778],[54,161],[70,88],[79,71],[12,37],[113,109],[124,-111],[55,-155],[-88,-69],[-54,-27],[-37,37],[-66,-41],[-69,-54],[-80,-66],[-114,-25],[1,45]],[[86575,10729],[28,71],[102,7],[-44,-164],[-98,1],[12,85]],[[86421,10789],[39,91],[51,-62],[-12,-108],[-70,-7],[-8,86]],[[87084,22489],[15,-22],[-14,-185],[8,-150],[4,-31],[3,-18],[13,-28],[13,-271],[20,-166],[76,-644],[16,-61],[8,-117],[5,-71],[41,-218],[42,-220],[54,-244],[50,-227],[72,-305],[52,-160],[107,-360],[53,-161],[72,-216],[56,-153],[53,-263],[-56,-93],[-17,-142],[2,-150],[13,-152],[38,-247],[89,-359],[57,-229],[47,-272],[12,-77],[57,-338],[49,-223],[40,-179],[13,-110],[19,-75],[31,-194],[32,-212],[7,-87],[4,-61],[2,-20],[-3,-182],[0,-59],[0,-62],[-3,-82],[-10,-114],[-10,-158],[-13,-202],[-9,-137],[-21,-309],[-8,-327],[3,-79],[1,-3],[4,-103],[-13,-106],[-28,-186],[-19,37],[-47,91],[-32,-141],[-32,-86],[-11,-142],[-21,-140],[24,-145],[67,62],[53,189],[11,-132],[-67,-239],[-107,-331],[-123,-293],[-138,-254],[-280,-302],[-123,-73],[-40,78],[98,118],[170,151],[211,296],[84,169],[15,117],[4,82],[-42,13],[-96,-33],[-54,-70],[-33,-10],[-57,74],[-57,-23],[-36,-63],[-83,-30],[-63,-12],[-55,122],[-26,120],[21,166],[1,142],[-55,186],[-29,179],[-44,143],[-59,57],[-25,139],[-78,77],[-127,147],[-52,-71],[-48,96],[-27,178],[-46,289],[-32,335],[-71,208],[-29,30],[-51,-1],[-54,-57],[-46,27],[-49,76],[-57,238],[-17,186],[0,111],[-45,194],[-49,167],[-74,255],[-57,245],[-21,88],[-63,180],[-33,78],[-39,91],[-46,179],[21,-4],[62,-11],[58,139],[29,94],[34,115],[33,33],[40,86],[-14,80],[-37,24],[-57,49],[-29,-60],[-32,-71],[-3,-89],[-24,-62],[-47,-143],[-25,-24],[-5,125],[-7,101],[-39,115],[-50,119],[5,158],[11,156],[0,3],[-20,157],[-8,136],[86,134],[29,154],[30,182],[6,25],[23,97],[7,115],[-10,148],[0,140],[-39,48],[-1,152],[-15,95],[37,105],[-32,92],[-31,101],[-1,91],[-57,85],[23,30],[-26,84],[-89,20],[-61,17],[-18,-100],[-33,10],[-23,126],[4,97],[-29,40],[-56,41],[-5,104],[-24,95],[-34,74],[-48,9],[-12,59],[-83,103],[-4,138],[-8,143],[-62,54],[-48,46],[-40,123],[-38,133],[-48,117],[-97,112],[-128,118],[-61,109],[-56,10],[-55,-21],[-48,-33],[-26,22],[-73,-52],[-68,-93],[22,-89],[0,-2],[7,-71],[-14,-51],[-66,12],[-42,41],[-58,-28],[-37,-42],[11,-148],[-35,-47],[-79,-43],[-75,-136],[-89,-69],[-150,-131],[-100,106],[-91,74],[-83,-41],[-45,188],[-12,160],[28,150],[-36,55],[-55,22],[-75,124],[-26,57],[-86,77],[-102,156],[-168,176],[-80,62],[-118,77],[-156,64],[-13,6],[-197,30],[-149,-22],[-45,-7],[-61,-23],[-210,-78],[-101,-24],[-46,5],[-89,-40],[-88,-32]],[[81671,21670],[59,122],[18,112],[58,64],[-42,40],[-27,95],[12,82],[27,103],[0,101],[-37,67],[-72,87],[-17,56],[-83,188],[39,163],[-7,88],[71,0],[84,1],[101,1],[133,1],[209,-3],[86,0],[41,-1],[87,-2],[111,-2],[156,-1],[21,0],[158,-1],[136,0],[126,-1],[128,4],[152,3],[72,2],[9,0],[138,3],[167,2],[102,0],[26,0]],[[55476,51640],[-24,125],[-35,46],[42,110],[10,54],[-35,55],[-1,102],[-29,95],[-59,97],[25,107],[-4,118],[0,1302],[-1,403],[-1,705],[0,461],[0,130],[1,152],[5,568],[1,446],[1,362],[0,291]],[[55372,57369],[246,1],[302,1],[328,1]],[[56248,57372],[0,-951],[0,-40],[1,-327],[0,-179],[0,-173],[-1,-239],[10,-29],[7,-22],[63,-143],[53,-105],[49,-54],[9,-103],[99,-122],[-11,-80],[38,-60],[-24,-90],[3,-83],[74,-97],[-52,-47],[-16,-75],[118,-97],[41,-101],[55,-56],[88,-37],[40,-18],[31,-88],[32,-67],[60,-83],[61,-133],[44,-75],[35,-96],[63,-74],[30,-35],[-14,-89],[56,-107],[80,-63],[21,-76],[61,3],[19,-16],[45,-36],[5,-105],[27,-10],[39,-16],[84,9],[82,38],[22,-26],[14,-16],[-10,-132],[-18,-133],[-46,-18],[17,-166],[-34,-47],[-8,-145],[-9,-71],[-7,-70],[3,-120],[-61,-12],[-6,-81],[54,-54],[-18,-127],[35,-80],[35,-51],[-10,-96],[22,-55],[-31,-52],[-83,-37],[-41,-107],[52,-110],[4,-101],[-32,-35],[-2,-84],[13,-41],[15,-50],[44,-29],[79,-97],[80,-23],[24,109],[58,14],[92,112],[61,95],[-1,81],[40,8],[20,-34],[44,-73],[34,-40],[49,-41],[3,-150],[38,-81],[-3,-101],[28,-82],[-3,-114],[76,-172],[67,-203],[57,-54],[53,-78],[12,-100],[-10,-102],[-22,-81],[46,-130],[40,-15],[68,-68],[48,45],[103,-111],[27,-107],[46,-151],[-10,-99],[48,-112],[0,-89],[50,-105],[62,-70],[49,48],[4,4],[-5,67],[83,108],[24,7],[94,-23],[115,-21],[76,-61],[26,154],[65,76],[57,-48],[86,-28],[81,17],[146,51],[56,-100],[92,92],[78,-6],[48,-3],[39,53],[45,183],[10,32],[17,47],[48,66],[7,-7],[47,-51],[49,-108],[40,-85],[20,-91],[52,-76],[18,-81],[66,-37]],[[60704,48739],[0,-189],[0,-496],[1,-251],[1,-143],[0,-420],[1,-357],[1,-353],[0,-464],[1,-667],[-2,-398],[-1,-314],[0,-663]],[[60706,44024],[-292,-2],[-86,-2],[-33,0],[-216,-1],[-320,-3],[-44,2],[-95,5],[-341,-2],[-314,-4],[-222,-4],[-220,-5],[-286,-9],[-200,10]],[[58037,44009],[-214,1],[-282,0],[-268,11],[-124,-3],[-245,-5],[-278,3],[-218,-1],[-412,1],[-261,0],[-350,4],[-7,1]],[[55378,44021],[0,722],[0,818],[-1,415],[0,1089],[1,160],[2,274],[34,109],[9,28],[14,166],[20,89],[-36,107],[71,128],[2,3],[-6,48],[-56,28],[-6,79],[-78,3],[-55,77],[-44,-35],[-41,56],[4,15],[18,62],[-22,60],[-23,59],[25,69],[-10,99],[52,84],[22,65],[43,180],[29,144],[43,56],[73,58],[38,102],[21,57],[28,112],[-22,95],[16,99],[51,88],[0,1],[26,69],[52,269],[5,27],[14,86],[77,246],[76,236],[35,93],[-57,126],[-7,100],[-51,85],[-65,6],[-63,85],[-45,26],[-65,128],[-24,98],[-26,70]],[[78195,40928],[42,40],[-7,101],[11,111],[-24,46],[18,92],[31,58],[82,48],[54,-2],[2,1],[57,67],[2,51],[3,48],[21,104],[-1,79],[43,91],[53,83],[29,80],[7,124],[-11,175],[-36,99],[-39,6],[-36,93],[-29,67],[36,160],[0,1],[2,10],[6,57],[33,103],[55,13],[37,-14],[51,48],[72,9],[76,4],[74,58],[42,59],[52,6],[46,8],[40,75],[46,32],[22,36],[3,126],[19,58],[3,64],[1,26],[55,72],[6,5],[55,56],[-1,62],[15,75],[6,88],[1,16],[15,110],[-21,85],[2,126],[-41,81],[-55,49],[-61,54],[-56,69],[-27,74],[12,80],[-26,71],[-63,87],[-43,68],[-22,17],[-50,47],[3,69]],[[78887,44990],[183,-2],[10,0],[181,1],[264,-4],[80,-1],[306,-7],[82,-2],[32,-1],[288,-7],[45,-1],[46,0],[146,-3],[62,-1],[178,3],[181,1],[78,0],[15,0],[269,-5],[87,-2]],[[81420,44959],[-3,-136],[-15,-113],[-13,-114],[1,-7],[30,-172],[1,-3],[35,-103],[16,-46],[47,-88],[6,-12],[12,-89],[31,-183],[8,-50],[1,-5],[11,-21],[-2,-17],[-2,-25],[6,-49],[19,-66],[1,-4],[5,-17],[19,-64],[26,-34],[6,-47],[0,-30]],[[81666,43464],[-1,-340],[-1,-442],[0,-252],[0,-269],[0,-28],[0,-219],[0,-686],[-3,-543],[-2,-456],[-1,-662],[1,-109],[0,-249],[0,-14],[0,-232],[-41,-15],[-20,-52],[5,-102],[1,-23],[15,-69],[-57,-85],[2,-17],[12,-106],[47,-85],[-6,-107],[44,-56],[2,-123],[-18,-61],[11,-44],[12,-49],[20,-132],[-41,-152],[-66,-73],[-16,-97],[-21,-91],[6,-55],[-53,-62],[-24,-84],[-35,-123],[-46,-122],[-68,-73],[-54,-60],[-6,-75],[43,-88],[-31,-99],[-24,-85],[-37,-47],[12,-132],[-21,-133],[-24,-68],[35,-109]],[[81217,36009],[-28,-108],[-65,-86],[-25,-82],[25,-152],[1,-3],[53,-84],[5,-47],[4,-31],[-85,-40],[-111,-28],[-68,-91],[-54,33],[-42,-41],[-19,-116],[-25,-93],[39,-135],[42,-134],[-18,-98],[-28,-58],[-50,-2],[-71,87],[-73,54],[-53,26],[-73,80],[-86,59],[-62,-6],[-51,-68],[-36,-91],[-62,-127],[1,-4],[34,-104],[-3,-68]],[[80233,34451],[-56,15],[-56,49],[-90,51],[-22,116],[-64,162],[-13,124],[-42,55],[20,82],[19,19],[40,40],[2,98],[-40,113],[-37,121],[10,55],[3,21],[4,20],[-11,85],[-14,136],[-62,52],[-68,69],[-26,104],[-76,78],[-61,93],[-65,-63],[-45,92],[17,91],[-48,6],[-64,87],[-40,67],[-83,83],[-30,64],[-62,103],[-37,104],[-8,166],[20,103],[6,13],[3,6],[46,97],[15,110],[9,43],[5,24],[6,26],[57,128],[4,91],[-13,54],[-13,73],[38,88],[1,1],[43,63],[4,83],[-84,94],[-20,23],[-61,24],[-87,70],[-64,4],[-29,-98],[-49,-76],[-36,8],[-55,86],[-17,122],[-33,133],[29,89],[-24,96],[-20,200],[-98,162],[-86,115],[-90,91],[-23,88],[-33,84],[-42,13],[-23,88],[-91,141],[-27,39],[-55,82],[3,56],[3,55],[-33,64],[-34,47],[7,119],[-8,73],[-41,139],[-13,113],[-12,176],[5,57],[8,92],[4,40],[20,100],[45,107]],[[78375,46882],[-13,-94],[19,-60],[10,-32],[-7,-56],[47,-74],[42,-40],[44,-114],[-26,-61],[-42,-91],[-36,-75],[0,-104],[0,-79],[14,-98],[3,-22],[16,-138],[35,-75],[25,-169],[47,-107],[68,-68],[40,-18],[39,-18],[97,-37],[38,-37],[25,-95],[27,-130]],[[78195,40928],[-70,45],[-19,59],[-40,54],[-39,74],[-10,75],[-46,22],[-13,54],[-39,66],[-187,-14],[-214,-11],[-153,-6],[-92,-4],[-164,-8],[-43,-3],[-25,0],[-202,-4],[-139,-7],[-34,-2],[-187,-4],[-26,-1],[-163,-1],[-36,0],[-157,-4],[-60,-1],[-155,-6],[-68,-2],[-125,-2],[-70,-1],[-143,-1],[-56,0],[-88,2],[-167,4],[-85,2],[-137,4],[-119,3],[-118,2],[-35,1],[-142,4],[-207,6]],[[74322,41323],[16,34],[-30,95],[-57,56],[-38,103],[48,89],[-6,119],[27,79],[-24,72],[8,91],[-33,86],[1,67],[1,59],[-4,78],[6,68],[4,51],[-47,-5],[-2,102],[19,77],[-31,84],[-3,91],[1,38],[5,126],[-54,27],[-20,141],[-67,-30],[-10,63],[-24,100],[6,105],[3,15],[18,87],[21,135],[-39,90],[-45,133],[23,123],[-81,92],[-44,47],[4,126],[-70,102],[9,91],[1,8],[0,88],[-64,138],[-3,140],[27,97],[-57,55]],[[73717,44956],[-29,37],[-14,14],[15,74],[-45,163],[-58,89],[-29,71],[2,103],[40,92],[35,97],[-3,84],[37,70],[-18,35],[25,53],[-17,66],[47,53],[6,28],[11,60],[-17,56],[-15,148],[-42,0],[-27,50],[-23,84],[43,17],[5,90],[3,73],[-65,93],[9,67],[-13,59],[130,0]],[[81217,36009],[52,-33],[30,15],[29,54],[-31,101],[12,55],[3,16],[44,25],[57,-88],[75,32],[10,-17],[28,-51],[49,-8],[16,89],[51,51],[58,-10],[33,26],[27,21],[77,-70],[25,-28],[30,-34],[14,-16],[67,-49],[38,-65],[28,-76],[43,114],[13,91],[29,85],[29,12],[44,17],[47,69],[55,48],[3,2],[27,-78],[52,-121],[57,-45],[10,-8],[28,-23],[14,102],[80,-7],[-14,125],[3,133],[30,11],[15,4],[33,78],[1,1],[41,71],[28,20],[31,23],[38,-93],[64,-146],[99,-25],[55,-73],[33,40],[19,23],[21,22],[26,26],[16,157],[8,131],[1,17],[49,98],[21,82],[19,-10],[39,-19],[60,53],[33,90],[11,68],[11,74],[30,63],[80,34],[22,69],[36,37],[0,1],[16,42],[-18,99],[-3,117],[-9,103],[43,43],[53,-4],[8,2],[51,12],[33,-36],[32,-48],[13,-18],[36,15],[67,88],[45,32],[53,37],[94,23],[39,-8],[9,124],[4,16],[11,44],[-40,28],[-42,45],[40,78],[-15,75],[-42,98],[32,49],[36,53]],[[84075,38501],[62,79],[33,-28],[33,-65],[49,-38],[13,-10],[50,50],[40,4],[6,1],[5,1],[12,27],[17,10],[15,-14],[11,-58],[28,-72],[66,-36],[5,-13],[21,-59],[9,-65],[49,-144],[-1,-72],[7,-24],[12,-46],[69,-31],[73,-34],[1,-1],[65,30],[45,-23],[21,-14],[47,-31],[16,-67],[45,-39],[10,-72],[59,-38],[24,-15],[29,22],[3,3],[15,69],[83,43],[83,-62],[57,-15],[50,-74],[30,-45],[20,27],[22,29],[60,-16],[38,38],[15,60],[63,70],[10,16],[17,26],[61,25],[48,24],[6,-27],[10,-45],[2,-76],[16,-141],[35,-61],[10,-18],[68,-10],[43,-81],[11,-14],[40,-59],[22,-105]],[[86059,37197],[-3,-147],[23,-55],[-9,-129],[-15,-90],[-25,-127],[69,-136],[75,-165],[-20,-114],[61,-85],[18,-56],[26,-79],[38,-75],[6,-31],[22,-114],[62,-63],[75,-111],[69,-96],[86,-13]],[[86617,35511],[-208,-310],[-96,-144],[-41,-66],[-84,-41],[-97,-84],[-6,-7],[-144,-160],[4,-103],[-26,-65],[-57,-32],[-48,-63],[3,-102],[-26,-74],[-105,-66],[-56,6],[-35,-104],[-19,-101],[-89,-31],[-134,-76],[-45,-39],[-80,-1],[-78,-61],[-54,-63]],[[85096,33724],[-14,-35],[-182,8],[-83,6],[-213,4],[-31,2],[-212,7],[-248,12],[-7,1],[-141,17],[-27,4],[-108,15],[-161,7],[-13,1],[-130,-16],[-46,-6],[-217,10],[-50,3],[-76,3],[-91,10],[-95,10],[-110,10],[-184,17],[-85,8],[-39,-27],[-49,27],[-140,-7],[-44,-2],[-221,-5],[-48,-1],[-197,-5],[-11,-1],[-261,-6],[-47,-2],[-142,-7],[3,58],[-144,25],[-53,2],[13,-91],[20,-150],[-15,-98],[-68,-3],[-323,5],[-20,0],[-4,0],[-268,1],[-131,1],[-220,6],[-120,-8],[-64,-4],[-109,-2]],[[79870,33528],[-28,76],[24,70],[58,-16],[63,-7],[27,114],[45,3],[3,0],[40,-88],[46,-16],[26,107],[20,49],[10,21],[-33,104],[40,75],[1,58],[0,5],[7,111],[25,85],[15,101],[4,25],[-30,46]],[[78421,26865],[28,-45],[56,-82],[1,-94],[-60,-75],[-21,-70],[3,-69],[40,-69],[50,-28],[-37,-76],[17,-162],[22,-41],[5,-10],[0,-2],[34,-107],[-44,-8],[7,-141],[77,-26],[-18,-139],[58,-19],[-24,-112],[-38,-131],[-105,-12],[62,-191],[4,-14],[-40,-96],[-1,-52],[-33,-69],[-53,-26],[-4,-102],[-47,-82],[-50,-83],[-49,18],[-13,-83],[35,-98],[2,-5],[-56,-25],[-13,-168],[-60,-45],[5,-63],[18,-79],[-46,-22],[-25,-69],[6,-113],[-20,-93],[-3,-99],[24,-89],[-49,-57],[-51,11],[-20,-63],[48,-78],[-28,-108],[24,-87],[31,-80],[-69,-96],[368,0],[43,0],[103,0],[209,1],[60,0],[170,1],[18,0],[178,0],[2,0],[77,1],[322,2],[55,1],[96,0],[-19,-170],[-38,-177],[-39,-178],[9,-111],[4,-47],[27,-177],[70,-141],[11,-45],[19,-76],[40,-202],[24,-173],[74,-70]],[[79884,21480],[-72,-72],[-46,-47],[-24,-81],[-88,-58],[-56,-51],[-7,-126],[51,-35],[46,-32],[38,-83],[48,-20],[44,34],[21,195],[72,110],[44,38],[91,-4],[35,62],[62,83],[45,27],[-3,-163],[-26,-134],[-14,-130],[-5,-92],[-50,-141],[19,-89],[-114,27],[-4,-169],[-55,-58],[-35,-38],[-27,32],[-60,-73],[34,-127],[-5,-94],[34,-114],[44,-54],[91,-27],[61,-8],[48,-97],[51,14],[59,-124],[16,-114],[81,-8],[10,-92],[-46,-146],[-45,-31],[-29,-85],[6,-73],[-68,59],[-36,69],[-56,-92],[-70,-146],[-3,159],[38,104],[-26,99],[-38,49],[-44,126],[-73,52],[-38,18],[-29,73],[-77,26],[-104,28],[-36,-22],[-65,-102],[-91,-133],[-57,-75],[-90,-113],[-100,-41],[-96,-15],[-40,5],[-146,-2],[-86,-33],[-57,4],[-49,26],[-9,93],[-57,110],[-52,14],[-84,34],[-57,58],[-108,57],[-50,97],[52,59],[10,60],[-61,58],[-26,56],[14,45],[-42,100],[-59,-51],[-22,55],[-40,62],[-6,66],[-4,54],[-52,70],[-39,-1],[18,131],[-39,89],[-62,7],[-63,-47],[-40,-42],[-18,-144],[62,-60],[82,-51],[-51,-150],[-47,-32],[-84,85],[-102,104],[-31,24],[-84,-7],[-83,-81],[-63,-15],[-77,31],[-57,25],[-84,32],[-44,22],[-60,30],[-174,144],[-101,83],[-85,48],[-79,41],[-106,9],[-103,-15],[-113,-8],[-181,-51],[-51,-41],[-35,-47]],[[76040,20545],[-22,64],[-25,72],[-34,79],[50,93],[18,39],[20,42],[20,115],[59,128],[31,58],[2,4],[2,111],[-1,117],[-9,98],[2,36],[4,60],[-48,104],[14,128],[6,10],[32,52],[-7,146],[-17,74],[40,91],[-1,62],[49,104],[11,112],[43,123],[10,127],[4,15],[21,90],[-17,81],[9,79],[7,82],[-8,147],[5,109],[-60,-6],[-10,146],[-55,80],[6,141],[-26,102],[-46,76],[21,68],[-55,44],[-42,113],[16,69],[12,149],[-45,200],[-50,167],[-60,63],[-58,126],[0,278],[0,430],[-1,383],[0,867]],[[91894,36441],[34,21],[25,-60],[-5,-128],[-55,30],[1,137]],[[88837,39675],[75,0],[309,3],[102,0],[109,0],[76,0],[306,0],[33,0],[217,-1],[21,0],[274,-2],[267,-2],[8,0],[196,0],[20,0],[194,0],[8,0],[181,2],[64,0],[130,0],[134,0],[160,1],[6,0],[87,0],[288,1],[21,0]],[[92782,37253],[-32,-242],[-16,-25],[-36,-173],[-30,-173],[-15,-65],[-43,-131]],[[92610,36444],[-340,-63],[-41,-83]],[[92229,36298],[-47,40],[-55,2],[-68,-103],[-29,-3],[-5,110],[37,122],[-1,41],[-5,78],[-65,44],[-5,120],[70,26],[-22,78],[-50,14],[-84,11],[6,-128],[18,-125],[6,-86],[-39,19],[-41,73],[6,129],[-42,75],[-73,140],[-36,37],[7,71],[-27,78],[-50,170],[53,95],[-12,52],[10,77],[43,8],[25,-6],[33,-1],[-8,120],[-23,-4],[-34,80],[-32,0],[-43,-64],[-22,13],[6,84],[-44,51],[9,60],[62,16],[35,105],[46,-75],[26,33],[-13,120],[1,68],[-42,0],[-60,-33],[-14,-97],[-37,-19],[12,169],[36,129],[18,63],[33,-21],[29,-19],[-1,139],[-12,53],[-28,50],[31,129],[29,108],[29,55],[17,71],[43,69],[44,30],[18,12],[31,39],[-5,74],[-44,-2],[-76,-90],[-69,-100],[-65,-98],[-47,-100],[-41,-33],[-26,-49],[-34,0],[-31,-2],[-25,-51],[87,-88],[6,-96],[1,-75],[24,-59],[-49,-54],[-20,-51],[19,-29],[-17,-64],[-19,-43],[-24,-64],[24,-24],[-33,-99],[-28,-58],[29,-61],[-3,-116],[16,-91],[-5,-146],[22,-108],[37,-77],[51,-101],[6,-54],[-14,-95],[25,-29],[-16,-108],[35,-117],[30,-76],[-10,-74],[8,-120],[-45,82],[-52,76],[-45,-7],[-53,71],[-45,117],[-73,38],[-60,2],[-58,32],[-52,32],[-52,81],[-47,69],[-24,142],[-13,45],[-53,-40],[-42,-27],[-78,-57],[-44,105],[12,196],[56,119],[49,26],[-1,39]],[[90928,37603],[-2,74],[41,60],[6,8],[23,1],[11,54],[0,16],[2,74],[0,12]],[[90937,38174],[-24,57],[-50,7],[-42,35],[1,78],[-55,48],[-44,19],[-91,27],[-17,56],[-35,29],[-1,77],[32,46],[23,63],[-33,62],[-50,54],[-31,43],[-70,29],[-47,8]],[[90403,38912],[-24,61],[5,92],[-52,142],[-22,95],[-6,117],[-85,39],[-72,-12],[-68,133],[-127,-23],[-78,-53],[-63,-17],[-49,-112],[-20,-71],[-116,8],[-57,27],[-46,21],[-29,103],[-28,55],[-72,-161],[-81,-142],[-13,-75],[-70,63],[-50,-2],[-67,-136],[-85,-142],[-19,-32],[-63,-60],[-63,-95],[-55,-43],[2,264],[2,357],[5,362]],[[84257,51448],[88,-126],[87,-55],[57,-53],[-34,-84],[-80,6],[-92,144],[-57,101],[31,67]],[[83290,51146],[44,13],[114,166],[146,-24],[-15,-92],[-118,-329],[-46,-47],[-55,27],[-66,212],[-4,74]],[[82901,49824],[84,222],[49,-16],[31,-61],[-20,-107],[-93,-139],[-66,24],[15,77]],[[85293,43511],[-117,-8],[-159,-10],[-104,-6],[-226,-14],[-202,-11],[-69,-4],[-328,-17]],[[84088,43441],[0,122],[-17,0],[-331,0],[-32,0],[-53,0],[-328,-1],[-117,-1],[-242,1],[-145,1],[-246,-1],[-20,0],[-103,0],[-165,1]],[[82289,43563],[117,144],[85,158],[86,317],[32,95],[89,207],[9,21],[64,268],[6,47],[33,231],[10,170],[2,30],[17,224],[-6,231],[-10,199],[-26,182],[-17,67],[-38,146],[-81,273],[-37,179],[-27,159],[-45,149],[-10,97],[27,103],[59,139],[8,92],[4,40],[-15,148],[-14,101],[-34,97],[-11,69],[50,78],[25,39],[34,103],[4,10],[32,96],[74,221],[15,107],[2,156],[11,67],[14,93],[-29,155],[5,97],[78,56],[64,25],[9,70],[11,83],[7,170],[70,-9],[43,119],[69,-58],[66,76],[30,140],[58,79],[43,149],[73,76],[18,-64],[-31,-255],[10,-31],[31,-102],[40,33],[39,49],[45,56],[12,106],[-12,151],[3,51],[5,121],[68,86],[88,85],[90,4],[36,2],[86,23],[41,64],[-61,38],[-53,14],[-61,162],[-9,90],[51,135],[81,89],[-39,141],[132,-16],[84,71],[36,-16],[12,-6],[147,-151],[82,-88],[43,33],[75,-10],[105,-73],[14,-9],[62,-123],[27,-114],[87,-11],[79,-11],[60,-96],[129,-74],[87,-84],[99,7],[92,-156],[-18,-90],[18,-38],[62,-128],[44,-216],[-66,28],[-52,55],[-39,-37],[6,-97],[-3,-113],[77,-104],[29,-11],[4,-42],[17,-191],[18,-131],[-34,-154],[-3,-234],[-17,-292],[-58,-59],[-36,-70],[-73,-7],[-39,-202],[-14,-189],[-85,-39],[-12,-91],[-85,-6],[-72,-47],[-37,-129],[-17,-221],[-16,-80],[34,-119],[82,2],[77,-96],[28,-42],[14,-21],[137,245],[16,28],[5,22],[24,92],[42,175],[23,66],[111,35],[18,67],[113,38],[79,43],[19,56],[86,46],[121,-88],[74,-143],[68,-223],[19,-174],[5,-94],[11,-208],[48,-304],[15,-375],[15,-108],[18,-127],[63,-185],[-12,-102],[-36,-123],[2,-239],[-38,-238],[-66,-159],[-85,-60],[-24,188],[59,77],[-60,27],[-83,-88],[31,-56],[9,-68],[-92,-43],[-10,-173],[-48,-189],[-58,-37],[-96,-81],[-17,-113],[-16,-107],[0,-165],[-46,-69],[-28,-121],[-47,-95],[-50,-26],[-14,-86],[-49,-52],[-40,-84],[15,-130],[-26,-15]],[[80154,55288],[37,51],[144,110],[69,52],[42,29],[69,42],[78,86],[86,88],[76,51],[108,68],[-2,-84],[-109,-123],[-26,-117],[-124,-87],[-120,-57],[-41,-123],[-130,-86],[-101,-60],[-39,50],[-47,49],[30,61]],[[79087,52729],[81,79],[80,32],[171,84],[114,137],[30,49],[47,73],[99,50],[70,-10],[64,13],[63,18],[75,5],[167,131],[76,137],[101,31],[62,14],[23,48],[8,17],[32,111],[66,78],[103,121],[102,71],[64,84],[11,14],[73,148],[119,98],[60,50],[118,39],[139,18],[114,-10],[108,-34],[79,-60],[-12,-68],[-174,7],[-126,-4],[-2,-103],[-65,-57],[-71,-85],[-87,-100],[-41,-133],[-89,-112],[-41,-145],[-47,-119],[-15,-36],[-20,-139],[94,42],[114,109],[90,71],[70,-92],[18,-2],[129,-15],[110,-63],[80,-67],[82,-112],[19,-119],[63,-139],[108,-129],[13,-138],[171,-19],[52,16],[125,39],[65,-115],[83,-31],[54,56],[48,145],[61,-41],[62,-88],[87,123],[243,194],[44,36],[128,2],[116,24],[21,5],[320,-16],[200,139],[17,4],[58,15],[186,18],[-57,-186],[1,-232],[51,-148],[107,-30],[153,52],[63,-59],[102,-31],[28,50],[37,66],[113,-16],[89,90],[67,-43],[-6,-90],[-12,-187],[36,-221],[-9,-29],[-6,-128],[79,-81],[46,-95],[82,-76],[59,127],[86,-14],[108,-21],[105,-179],[-41,-148],[-50,-5],[-67,56],[-127,-15],[-98,54],[-151,9],[-31,-5],[-125,-23],[-108,-46],[-93,88],[-77,-58],[-59,7],[-90,-84],[25,-112],[-77,20],[-111,137],[-77,144],[-132,85],[-102,29],[-103,31],[-142,-5],[-96,-183],[-43,-45],[-101,38],[-49,-62],[-43,-54],[-141,88],[-184,-44],[-63,-206],[-81,-140],[-90,-101],[-68,-166],[-17,-150],[-68,131],[7,153],[51,79],[-112,150],[-58,-169],[-112,-95],[-95,88],[-90,-109],[-73,-213],[-31,-92],[-56,-179],[-101,-257],[-75,-156],[-37,-183]],[[81607,49924],[-51,21],[-42,84],[-42,89],[27,92],[39,135],[9,100],[-44,29],[-39,-55],[-44,-3],[-56,-1],[6,77],[8,97],[37,55],[1,99],[16,95],[8,66],[-42,84],[39,39],[-21,57],[-67,98],[-78,17],[-25,60],[-47,-25],[-51,31],[-26,44],[54,103],[-37,89],[-56,47],[-60,31],[-57,-7],[-63,61],[-26,-23],[-104,79],[-60,-11],[-17,-47],[-40,-2],[-19,46],[-54,26],[-64,-11],[-108,97],[-52,46],[-90,80],[-487,201],[-259,107],[-170,71],[-34,159],[-51,152],[-63,36],[-41,65],[-49,-37],[-28,62]],[[79870,33528],[17,-69],[-19,-80],[28,-79],[-11,-64],[-69,-4],[-10,-64],[51,-60],[-43,-76],[-67,20],[-13,-45],[58,-75],[3,-5],[28,-90],[-45,-61],[-33,-41],[-11,-118],[-36,-38]],[[75345,33531],[0,215],[0,294],[0,443]],[[75345,34483],[0,308],[0,340],[0,49],[0,89],[0,517],[3,583],[0,94],[1,44],[1,339],[0,457],[0,134],[3,363],[0,5],[0,203],[1,257],[0,118],[0,133],[14,79],[-28,3],[-51,53],[-54,-27],[-52,68],[-23,68],[-28,62],[-45,95],[17,131],[-52,14],[-32,78],[-60,102],[-57,114],[33,43],[27,35],[2,36],[6,75],[59,63],[0,71],[64,1],[35,49],[-10,45],[-6,102],[-45,95],[-20,46],[-60,-6],[-56,-68],[-54,64],[-79,92],[-69,108]],[[74730,40207],[-36,55],[-31,-4],[-28,82],[18,73],[-34,62],[-43,91],[8,91],[-67,44],[-5,61],[-41,35],[-49,25],[11,83],[-7,57],[-31,128],[-9,58],[-18,64],[-38,-2],[-8,113]],[[56248,57372],[489,0],[261,-3],[429,3],[43,0],[269,1],[175,-3],[100,-1],[143,-1],[191,-2],[282,2],[232,-1],[822,1],[44,0],[259,-1],[314,-2],[206,0],[237,1],[233,1],[188,0],[83,2],[238,0],[598,2],[9,0],[213,-1],[223,-1],[408,0],[273,1],[474,0],[235,-1],[69,1],[164,0],[501,0],[341,-1],[109,0],[55,0],[245,1],[374,-1],[81,0],[185,0],[162,-1],[296,2],[441,0]],[[66942,57370],[-1,-291],[1,-407],[1,-266],[0,-200],[1,-282],[2,-468],[0,-47],[1,-321],[-1,-381],[-1,-518],[0,-3],[0,-387],[-1,-369],[0,-419],[1,-138],[0,-192],[0,-60],[0,-353],[0,-85],[0,-638]],[[66945,51545],[1,-121],[0,-33],[1,-219],[1,-366],[0,-128],[1,-295],[0,-235],[0,-168],[1,-241],[-16,-2]],[[66934,49737],[-863,6],[-45,0],[-688,0],[-157,-6],[-213,-7],[-557,4],[-412,11],[-499,0],[-77,0],[-224,-2],[-224,-2],[-108,0],[-393,0],[-36,12],[-420,-6],[-200,1],[-175,0],[-293,-8],[-340,-13],[-71,21],[-231,-3],[-11,-257],[1,-270],[0,-112],[0,-79],[6,-288]],[[95482,42636],[82,31],[9,-74],[-105,-32],[14,75]],[[88583,44535],[119,105],[155,165],[64,105],[88,86],[80,66],[49,35],[2,9],[22,84],[43,60],[13,85],[68,51],[60,58],[48,87],[-13,66],[-15,78],[-26,36],[3,90],[-17,37],[-30,9],[-52,71],[13,119],[-12,17],[-50,22],[13,90],[4,17],[10,37],[-8,131],[-15,77],[210,105],[256,100],[73,2],[121,4],[164,5],[134,-20],[159,-41],[8,-1],[42,-4],[89,-110],[98,-91],[44,28],[112,45],[31,13],[68,-6],[120,16],[116,-27],[42,-2],[99,66],[65,25],[41,37],[34,28],[48,116],[12,13],[90,97],[88,96],[41,8],[2,1],[44,-26],[75,32],[28,87],[7,143],[-15,198],[-15,96],[-60,101],[-57,30],[-72,20],[27,81],[118,89],[-25,101],[-61,12],[12,79],[-8,53],[14,62],[19,60],[42,75],[72,20],[37,48],[3,78],[57,36],[86,92],[46,3],[78,107],[25,33],[23,93],[37,85],[177,272],[128,186],[80,96],[70,98],[100,81],[69,57],[54,54],[11,36],[76,11],[65,60],[80,-46],[17,2],[72,10],[30,4],[156,-5],[180,-8],[184,10],[137,7],[209,5],[264,14]],[[94302,49763],[-1,-77],[5,-101],[-36,-116],[12,-58],[21,-35],[7,-11],[-21,-98],[-7,-97],[-22,-153],[21,-100],[4,-9],[13,-31],[31,-75],[17,-127],[-24,-110],[-12,-49],[9,-90],[6,-89],[1,-10],[-30,-53],[-40,-121],[-19,-128],[-18,-109],[27,-59],[-4,-69],[3,-87],[30,-103],[-15,-111],[7,-18],[28,-72],[-38,-136],[-18,-78],[-10,-113],[26,-59],[61,110],[32,-78],[44,-95],[-9,-327],[-3,-93],[-12,-532],[-8,-386],[-11,-60],[23,-107]],[[94372,45443],[-38,-216],[-40,-234],[-28,-161],[-24,-140],[-87,-507],[17,-62],[2,-8]],[[94174,44115],[-16,-430],[-13,-349],[-9,-217],[-6,-164],[-13,-278],[61,-158],[-190,-186],[-29,-27],[61,-158],[0,-27],[2,-35],[0,-1]],[[94022,42085],[-36,-87],[-52,-51],[-9,-60],[23,-10],[24,-11],[53,15],[33,38],[104,39],[3,9],[10,44],[44,-22],[39,39],[55,-49],[85,-43],[6,-3],[71,45],[4,51],[31,31],[62,-14],[161,3],[135,22],[109,38],[73,87],[52,82],[50,42],[31,61],[57,30],[90,72],[7,-29],[-65,-129],[-25,-82],[58,-52],[49,24],[32,118],[38,-26],[-10,-90],[39,-64],[82,96],[36,18],[56,-19],[-72,-123],[-143,-90],[-179,-106],[-87,-70],[-322,-195],[-148,-97],[-79,-64],[-119,-64],[-56,-29],[-87,-20],[-40,19],[-65,-33],[-74,-38],[-119,-20],[-98,12],[-22,3],[-45,-28],[-102,-63],[-45,52],[-59,52],[-49,-95],[-78,-69],[-54,-17]],[[93485,41165],[10,81],[29,26],[11,65],[2,73],[2,2],[26,25],[9,2],[66,10],[14,30],[3,6],[18,38],[0,2],[5,21],[9,39],[2,5],[5,23],[9,36],[26,79],[12,35],[2,9],[2,7],[17,63],[8,33],[3,15],[11,61],[2,7],[12,63],[11,87],[-131,118],[-152,141],[-20,19],[-60,57],[-58,60],[-81,84],[-211,208]],[[93098,42795],[-36,131],[-58,10],[-80,46],[-83,78],[-54,150],[-5,128],[-4,211],[-18,94],[-35,74],[-69,41],[-65,44],[-25,118],[-44,87],[-121,13],[-68,-1],[-283,-1],[-210,1],[-35,0],[-282,0],[-86,2],[-328,1],[-72,0],[-537,-3],[-125,-1],[-73,0],[-177,2],[-156,-1],[-58,0],[-33,0],[-257,1],[-287,-1],[-57,0],[-70,-1],[-366,-1],[-124,1],[-134,0],[-1,253],[1,264]],[[49567,52143],[60,19],[47,-75],[-3,-91],[53,-68],[7,0],[74,-3],[60,50],[42,35],[45,-8],[99,-98],[37,-55],[52,-40],[43,-132],[38,-102],[2,-92],[23,-86],[-9,-110],[30,-97],[-11,-150],[16,-35],[16,-35],[84,-65],[135,-51],[48,-37],[52,23],[43,-52],[62,-8],[12,11],[58,53],[73,11],[88,62],[46,55],[25,18],[20,15],[30,59],[50,26],[68,-24],[59,21],[121,41],[8,-6],[74,-47],[15,-9],[77,20],[109,-64],[28,-123],[55,18],[33,61],[126,16],[27,-16],[16,-10],[36,55],[148,84],[33,39],[15,18],[39,2],[76,-89],[16,0],[75,-1],[109,42],[63,8],[62,90],[63,23],[63,51],[31,24],[86,27],[59,17],[118,18],[62,120],[26,11],[74,-37],[50,14],[60,16],[96,35],[117,-14],[57,49],[66,79],[1,0],[275,2],[63,0],[213,-1],[331,-1],[17,0],[232,0],[102,-2],[110,-3],[112,-2],[390,-2]],[[55378,44021],[-153,0],[-183,-2],[-197,-1],[-222,0],[-289,-3],[-270,-3],[-245,-5],[-201,2],[-185,-1],[-103,1],[-32,0],[-326,5],[-243,-4]],[[48975,44018],[-52,90],[-39,42],[-33,118],[-9,97],[-20,89],[-24,45],[0,108],[-13,85],[-9,168],[32,190],[-1,110],[-11,115],[-34,35],[2,26],[-55,86],[-38,202],[64,211],[1,6],[39,223],[22,169],[14,122],[12,88],[-16,61],[42,77],[59,179],[48,230],[13,103],[22,181],[30,301],[9,90],[25,369],[10,249],[-4,98],[28,247],[0,163],[17,250],[1,135],[-9,181],[9,71],[36,218],[12,182],[0,4],[31,187],[2,136],[9,121],[-15,129],[17,159],[-14,112],[25,143],[8,185],[0,90],[-26,92],[2,49],[4,103],[-5,135],[-24,74],[50,59],[8,123],[-27,190],[-73,107],[38,72],[77,-107],[65,25],[73,39],[35,-45],[51,52],[66,23],[35,58]],[[85096,33724],[181,-3],[174,-2],[260,-6],[137,-3],[198,3],[108,1],[172,-1],[46,0],[61,-1],[25,0],[189,-1],[10,42],[86,-3],[160,-5],[-27,-45]],[[86876,33700],[-20,-98],[4,-132],[-35,-104],[8,-45],[17,-97],[-56,5],[-57,12],[-67,-87],[-46,-141],[-61,-198],[-46,-35],[-42,-3],[-12,61],[-63,43],[-48,-60],[-29,12],[-44,-35],[-55,-61],[-50,-146],[-38,-47],[-45,-54],[-47,39],[14,99],[-30,69],[-86,-84],[-48,-49],[-7,-77],[-26,-54],[-40,45],[-44,-39],[10,-100],[-34,-90],[-36,-85],[-63,9],[-43,-22],[-58,-24],[-32,-72],[-51,-18],[-37,-112],[-45,6],[-66,-94],[-28,-16],[-41,-76],[-79,7],[-59,3],[-105,-12],[-69,-82],[-61,-87],[-50,-40],[-43,-86],[13,-68],[-28,-45],[13,-100],[-66,-92],[-72,-13],[-40,54],[-53,-81],[-3,-40],[-32,-414]],[[83376,30642],[-231,4],[-398,8],[-140,-1],[-281,3],[-47,1],[-334,12],[-5,0],[-7,1],[-340,8],[-17,0],[-202,4],[-132,0],[-181,4],[3,-23]],[[81064,30663],[-52,-1],[-94,1],[-95,0],[-282,-1],[-32,0],[-173,-1],[-9,0],[-153,-1],[-137,0],[-74,-1],[-186,1],[-71,0],[-64,0],[-458,3]],[[67874,33532],[748,0],[116,0],[184,-1],[180,0],[480,-1],[117,1],[62,0],[260,0],[42,0],[209,0],[274,0],[3,0],[0,-2802],[0,-542],[0,-354],[2,1],[61,30],[78,-133],[21,-37],[48,-100],[61,-103],[86,-13],[14,63],[97,-20],[4,-1],[45,-31],[22,118],[40,-10],[67,-96],[48,-117],[9,-21],[19,-190],[52,-10],[65,-15],[50,14],[45,-8],[11,-2],[60,-82],[58,-9],[62,-47],[42,4],[38,60],[34,-16],[29,-14],[44,-103],[47,-59],[46,34],[8,6],[14,83],[31,55],[40,-21],[84,-36],[50,-25],[27,51],[13,26],[22,-96],[0,-106],[15,-88],[68,-13],[52,-9],[-5,-127],[1,-64],[1,-24],[76,-55],[56,58],[38,86],[79,126],[56,-44],[11,-88],[31,-44],[3,-3],[64,38],[2,-6],[29,-82],[7,-90],[63,-8],[49,87],[64,67],[36,26],[35,-127],[-35,-72],[50,-167],[52,25],[3,74],[8,74],[21,82],[62,58],[-3,61],[33,50],[7,1],[9,1],[26,3],[7,-84],[42,-106],[50,41],[15,-51],[58,-20],[27,86],[20,76],[58,-64],[4,-5],[-3,-95],[18,-22],[44,-2],[19,-85],[59,12],[29,-64],[21,-59],[15,-40],[50,78],[26,66],[43,-42],[50,101],[19,59],[79,19],[114,64],[43,-22],[38,-6],[21,-4],[28,27],[46,45],[61,18],[59,41],[41,0],[28,-79],[70,-32],[85,-2],[37,11],[24,8],[27,99],[24,61],[63,-44],[5,-5],[49,-60],[43,-80],[58,-20],[37,-79],[34,-66],[54,-70],[67,16],[30,-51],[16,-26],[75,-65],[51,-7],[39,-91],[39,30]],[[76040,20545],[-21,-22],[-89,6],[-85,-21],[-93,-66],[-172,-142],[-15,-12],[-116,-96],[-83,-71],[-68,-71],[-54,-118],[8,-71],[-72,-100],[-199,-250],[-88,-154],[-59,-85],[-94,-169],[-76,-129],[-51,-14],[-60,-66],[-73,-79],[-85,-94],[-114,-132],[-168,-146],[-173,-164],[-119,-150],[-55,-80],[-47,-122],[-169,-181],[-78,-111],[-64,-103],[-54,-97],[-30,-55],[-105,-234],[-37,-140],[-40,-93],[-45,-132],[-64,-229],[-40,-164],[-34,-159],[-36,-209],[-20,-158],[-18,-333],[11,-333],[39,-351],[31,-193],[30,-185],[24,-175],[27,-202],[34,-425],[6,-124],[6,-89],[-10,-42],[-45,23],[-63,-49],[-54,-24],[-25,-39],[6,-64],[-12,-55],[-44,1],[-29,74],[-37,1],[-41,77],[-36,34],[-54,131],[-48,32],[-55,16],[-32,44],[-68,6],[-65,3],[-59,8],[-26,-43],[-46,34],[-52,-6],[-42,0],[-46,33],[-49,70],[-74,91],[-50,79],[-54,30],[-65,39],[-33,32],[-37,-31],[-39,57],[-73,116],[-24,82],[-75,-23],[-60,70],[-65,34],[-45,-30],[-25,57],[17,97],[-12,44],[-59,95],[-26,203],[-8,130],[-30,121],[-23,105],[-54,70],[-28,94],[-24,102],[-53,83],[4,154],[11,100],[-13,122],[-17,86],[-21,51],[-38,21],[38,203],[-7,74],[-2,94],[-27,-3],[-2,155],[-24,65],[-60,38],[-72,39],[-48,119],[-38,47],[-38,70],[-30,87],[-24,97],[-11,82],[-13,95],[-47,44],[-39,157],[-42,98],[-88,105],[-21,33],[-62,102],[-18,97],[-29,116],[-15,124],[-28,95],[-18,74],[-8,114],[-46,79],[-46,86],[-5,104],[-24,89],[-2,81],[-37,58],[-45,129],[-17,102],[-12,141],[-13,131],[-47,56],[-40,75],[-21,113],[-47,83],[-34,70],[-97,105],[-57,182],[-69,28],[-50,90],[-55,0],[-45,110],[-2,119],[-53,45],[-30,141],[-47,41],[-44,10],[-52,57],[-83,-56],[-53,4],[-85,43],[-59,8],[-81,25],[-49,-9],[-46,-30],[-38,11],[-41,51],[-59,46],[-65,65],[-44,-29],[-17,-80],[-21,-105],[-68,28],[-39,1],[-34,-54],[-55,-8],[-57,-19],[-15,-117],[-40,-105],[-35,-124],[-27,-65],[-20,-149],[5,-86],[-42,-90],[-17,-124],[18,-87],[-42,-97],[-69,-56],[-36,-111],[-36,-33],[-21,-112],[-24,-86],[-90,18],[-47,-18],[-72,70],[-91,92],[-54,103],[-61,56],[-60,39],[-58,40],[-57,125],[-60,47],[-106,27],[-72,66],[-78,100],[-34,82],[-42,105],[-71,82],[-56,36],[-72,116],[-78,138],[-23,180],[-48,141],[-47,127],[-12,150],[-16,66],[10,158],[-9,199],[-34,91],[-19,80],[-55,132],[-32,38],[-9,130],[-17,146],[-32,133],[-42,10],[-26,119],[-55,26],[-32,63],[-55,72],[-52,85],[-86,30],[-70,68],[-5,69],[-79,103],[-62,90],[-19,86],[-43,121],[-73,72],[-57,58],[-19,67],[-67,165],[-61,57],[-14,88],[-45,53],[-68,12],[-85,110],[-54,109],[-39,93],[-21,111],[-43,127],[-16,45],[-43,79],[-44,14],[-15,-22],[-39,67]],[[64732,24536],[-47,59],[-49,110],[11,81],[-6,109],[11,56],[215,1],[157,1],[181,0],[220,1],[532,-3],[210,0],[63,0],[182,0],[551,-1],[40,0],[229,0],[353,0],[234,1],[0,165],[0,110],[-1,720],[0,125],[0,499],[2,209],[3,496],[3,323],[3,347],[5,485],[3,485],[0,573],[1,458],[0,243],[0,395],[0,363],[0,73],[1,838],[0,223],[1,602],[-1,849],[35,0]],[[92610,36444],[-86,-252],[-37,-83],[-52,34],[-45,-70],[-56,-161],[-36,-162],[-20,-103],[6,-92],[-58,-147],[7,-32],[6,-29],[-55,-150],[-14,-72],[-38,-73],[-15,-96],[-19,-102],[-72,-144],[-40,-54],[-33,21],[-17,168],[-22,191],[32,152],[10,146],[27,198],[4,29],[38,136],[35,129],[42,89],[-5,80],[73,47],[30,64],[-49,103],[78,89]],[[86617,35511],[32,-49],[-47,-110],[43,-66],[3,-59],[33,-109],[41,-89],[67,-20],[28,-61],[4,-6],[54,-71],[105,8],[24,32],[45,52],[49,39],[59,127],[122,-196],[100,83],[104,40],[14,3],[54,10],[75,55],[-42,93],[16,69],[6,2],[1,0],[18,6],[59,-99],[94,80],[107,116],[66,-86],[5,-7],[58,69],[97,141],[8,94],[52,72],[-61,115],[2,5],[29,65],[35,120],[17,84],[60,119],[68,119],[17,30],[58,146],[8,37],[21,91],[20,139],[59,93],[47,65],[9,12],[-15,77],[62,82],[40,142],[-1,62],[19,90],[18,153],[95,-73],[59,-183],[95,-57],[52,-17],[12,-3],[59,109],[3,12],[24,91],[42,150],[55,101],[4,58],[28,136],[30,71],[21,79],[116,-147],[43,130],[43,120],[81,61],[55,108],[52,51],[26,83],[22,68],[84,134],[-13,54],[21,97],[3,74],[54,147],[3,106],[-9,108],[105,-144],[38,-50],[137,-190],[183,-252],[17,69],[27,116],[53,175]],[[90928,37603],[-104,1],[-43,-140],[-25,-181],[5,-159],[31,-64],[15,-32],[92,24],[61,13],[41,14],[24,-59],[-5,-50],[27,-45],[5,-10],[29,-59],[-4,-55],[46,-33],[64,-64],[80,-3],[58,-10],[63,-15],[11,-74],[58,-77],[23,-57],[16,-43],[58,-76],[98,-81],[72,-87],[-13,-107],[-53,-73],[-2,-142],[-14,-94],[44,-101],[-17,-115],[8,-41],[14,-78],[21,-140],[1,-89],[-24,-125],[-81,123],[-24,41],[-39,-31],[44,-137],[23,-71],[-28,-86],[41,-68],[4,-6],[29,-92],[16,-46],[19,-57],[-29,-158],[6,-15],[14,-30],[12,-25],[70,-64],[11,-5],[79,-38],[40,36],[42,-10],[31,-233],[36,-206],[27,-117],[21,-153]],[[92053,33628],[-142,0],[-85,0],[-170,0],[-159,0],[-45,1],[-175,0],[-160,-10],[-220,1],[-23,0],[-97,-1],[-401,-1],[-16,0],[-118,-1],[-131,-1],[-77,-1],[-170,-2],[-119,-2],[-47,-1],[-199,1],[-56,0],[-130,1],[-175,-1],[-71,0],[-111,-1],[-113,0],[-36,-1],[-182,2],[-158,1],[-121,1],[-23,0],[-216,3],[-121,11],[-161,16],[-83,8],[-120,-1],[-55,-1],[-143,10],[-102,10],[-157,8],[-131,7],[-158,16]],[[82192,50545],[87,56],[27,-72],[-55,-114],[-29,-110],[-50,108],[20,132]],[[78768,53603],[32,22],[80,35],[80,-33],[14,-38],[30,-106],[-11,-49],[-22,-39],[-79,-17],[-38,94],[-29,56],[-49,33],[-8,42]],[[77664,52996],[48,-45],[66,14],[60,0],[156,85],[63,44],[21,0],[35,0],[89,61],[45,16],[41,55],[52,19],[40,57],[39,-42],[34,48],[38,18],[47,45],[45,43],[-5,108],[58,38],[64,-75],[41,-46],[55,-84],[-48,-136],[-55,-110],[-18,-49],[25,-77],[-56,-78],[-15,-79],[-21,-47],[27,-9],[24,-9],[62,63],[31,17],[35,41],[16,87],[66,-89],[87,-115],[15,2],[38,7],[61,-54],[17,9]],[[81607,49924],[-31,-96],[-5,-130],[-59,-5],[-58,-22],[-45,-17],[-27,-56],[4,-96],[-14,-31],[-45,-75],[-33,-119],[-37,-69],[-17,-107],[3,-104],[-38,-70],[32,-64],[55,-18],[40,85],[29,65],[81,59],[13,28],[11,25],[10,19],[16,31],[-1,60],[66,141],[58,101],[45,11],[14,23],[61,32],[48,92],[50,151],[64,129],[24,164],[56,11],[48,70],[11,90],[46,68],[36,13],[35,-17],[-1,-120],[-58,-77],[-2,-100],[-15,-106],[-68,-127],[-44,-123],[-16,-119],[-62,-100],[-38,-118],[-50,-183],[-24,-84],[-40,-86],[-46,-240],[-42,-265],[21,-117],[13,-94],[-29,-98],[-54,-53],[-49,-95],[-39,-221],[-33,-176],[9,-121],[23,-82],[-7,-85],[2,-82],[-75,-222],[-3,-134],[-42,-138],[-43,-215],[-7,-211],[-3,-136],[27,-117],[-23,-93],[47,-137],[7,-166],[3,-7],[9,-21],[49,-109],[-16,-161],[-27,-108],[1,-124],[12,-166]],[[66945,51545],[342,0],[202,0],[192,0],[199,-1],[48,0],[55,0],[156,0],[137,0],[199,0],[214,-1],[78,0],[1,0],[182,0],[212,0],[171,-1],[230,0],[307,0],[234,0],[183,-1],[127,-2],[242,-1],[144,-2],[96,1],[107,-2],[130,0],[225,0],[77,0],[251,-3],[88,-1],[188,-3],[307,-1],[55,0],[26,0],[180,-1],[209,0],[280,0],[130,1],[462,-1]],[[73717,44956],[-50,-15],[-21,53],[-77,-8],[-42,115],[-46,71],[11,106],[-72,7],[-21,68],[-93,67],[-53,-18],[-53,73],[-95,18],[-73,92],[-21,63],[-58,24],[-35,-19],[-67,19],[-31,-38],[-57,15],[-75,5],[-90,-24],[-90,27],[-50,14],[-17,-24],[-25,-103],[-40,-56],[-76,-10],[-62,85],[-39,60],[-74,40],[-43,26],[-25,22],[-70,61],[-43,21],[-39,65],[-18,67],[-311,-1],[-362,0],[-250,0],[-281,0],[-311,0],[-714,-1],[-203,1],[-761,2],[-291,1],[-342,1],[-186,0],[-423,1],[-26,0],[-488,0]],[[66938,45929],[-1,551],[-1,513],[0,562],[0,549],[0,75],[0,133],[-1,841],[-1,584]],[[60706,44024],[1,-805],[0,-27],[-1,-391],[0,-691],[452,-3],[372,1],[65,0],[43,1],[254,1],[414,6],[179,-1]],[[62485,42115],[2,-333],[0,-312],[0,-17],[-3,-902],[1,-583],[-1,-969],[0,-459],[-8,-1194],[0,-428],[16,-212],[0,-540],[-1,-756],[-2,-927]],[[58029,34486],[-1,168],[0,374],[-1,396],[1,215],[0,269],[2,258],[0,510],[0,193],[0,295],[0,321],[0,199],[2,384],[-1,242],[1,943],[0,561],[0,213],[1,366],[0,37],[0,536],[1,186],[2,440],[1,521],[0,397],[2,541],[0,500],[-2,458]],[[81666,43464],[48,-67],[49,29],[44,-112],[93,-17],[35,16],[86,41],[87,46],[85,80],[21,20],[75,63]],[[84088,43441],[1,-316],[1,-199],[0,-34],[0,-261],[0,-36],[1,-250],[0,-252],[0,-127],[1,-371],[-1,-431],[-1,-285],[-4,-468],[-3,-363],[-2,-363],[-3,-638],[-3,-314],[0,-232]],[[97036,42706],[73,6],[102,11],[26,138],[58,-63],[22,-180],[-49,-51],[-73,6],[-102,15],[-57,118]],[[96538,42788],[68,23],[63,144],[74,79],[45,-57],[51,-53],[29,-11],[14,-125],[-115,-8],[-104,-13],[-67,-74],[-47,-101],[-10,126],[-1,70]],[[94372,45443],[109,-4],[106,-5],[4,0],[79,-4],[59,-2],[49,-3],[261,-15],[51,-3]],[[95090,45407],[7,0],[35,-3],[115,-6],[71,-5],[70,-4],[39,-2],[135,-8],[27,-1],[83,-5],[54,-3],[97,-5],[254,-13],[51,-2],[34,75],[1,0],[8,0],[57,2],[-4,102],[33,47],[29,-7],[47,-11],[14,48],[15,53],[58,19],[32,30],[59,-28],[42,4]],[[96553,45684],[11,-172],[29,-135],[38,-79],[43,-14],[32,52],[38,-23],[8,-81],[-54,-101],[-39,-9],[-94,-30],[-40,-22],[11,-114],[-45,-39],[-24,-81],[-62,-7],[1,-7],[6,-123],[-20,-66],[4,-16],[23,-85],[17,27],[28,45],[32,-10],[27,-62],[13,-6],[42,-21],[7,-10],[45,-72],[41,-149],[5,-12],[36,-86],[-5,-68],[-31,-77],[15,-85],[48,-38],[22,17],[33,-63],[19,-111],[-14,-82],[4,-8],[38,-72],[47,-40],[105,-32],[46,-28],[50,42],[83,30],[87,54],[19,41],[-2,83],[-56,62],[-5,103],[-8,140],[-60,27],[-36,-12],[-48,83],[49,36],[45,20],[80,-54],[49,-125],[13,-101],[5,-40],[34,-221],[7,-224],[-2,-132],[-31,-136],[-41,-14],[0,145],[4,98],[-43,-12],[-92,-28],[-99,-62],[-46,24],[-71,-46],[-40,-28],[-27,-63],[-75,-20],[-84,-56],[-71,-62],[-50,-76],[-60,-39],[-81,-32],[12,87],[114,82],[72,87],[25,30],[3,83],[-63,74],[-50,-112],[-28,9],[-51,-20],[-28,-70],[-36,-58],[-48,-21],[-44,20],[-31,-23]],[[96283,43062],[-15,201],[4,109],[-56,29],[-59,147],[-60,58],[-10,94],[1,117],[-38,0],[0,112],[0,63],[0,65],[-68,-4],[-90,-5],[-42,-2],[-172,-10]],[[95678,44036],[-1,30],[-75,3],[-92,3],[-102,3],[-86,3],[-106,4],[-71,1],[-117,3],[-71,-7],[-113,11],[-28,-64],[-39,-8],[-33,73],[-136,3],[-48,3],[-65,4],[-93,5],[-228,9]],[[81064,30663],[40,-140],[51,-58],[-33,-514],[-18,-304],[-16,-271],[-27,-447],[-4,-54],[-36,-598],[-6,-88],[-18,-314],[-26,-468],[-12,-199],[-20,-368],[-7,-119],[-23,-414],[-14,-255],[-28,-514],[-7,-111],[-22,-376],[-14,-229],[0,-271],[5,-177],[4,-146],[9,-354],[0,-28],[15,-585],[5,-222],[12,-501],[1,-7],[7,-359],[8,-332]],[[80890,21840],[-13,-52],[-33,11],[-22,-53],[-46,38],[-53,-17],[-27,44],[-45,15],[-33,-35],[-42,7],[-64,25],[-67,63],[-68,-5],[-100,-43],[-93,-71],[-95,-45],[-45,-27],[-71,-92],[-21,-76],[-25,-26],[-43,-21]],[[74730,40207],[-28,0],[-397,0],[-201,1],[-12,0],[-116,-1],[-76,1],[-205,0],[-299,1],[-61,0],[-38,0],[-83,0],[-321,1],[-41,0],[-322,1],[-40,0],[-98,0],[-128,0],[-177,0],[-205,0],[-97,0],[-101,0],[-303,0],[-100,0],[-288,-1],[-112,0],[-165,-1],[-325,0],[-14,1],[-253,0],[-233,1],[-18,0],[-269,0],[-208,0],[-104,0],[-117,0],[-258,1],[-196,0]],[[68721,40212],[0,640],[0,21],[0,173],[0,491],[0,99],[0,482],[-450,0],[-86,0],[-377,0],[-273,-1],[-171,0],[-426,-1]],[[66938,42116],[0,216],[0,312],[0,220],[0,420],[0,518],[0,222],[0,28],[0,445],[0,477],[0,213],[0,37],[0,705]],[[62489,34483],[379,1],[215,0],[337,1],[463,0],[54,0],[484,0],[7,-14],[351,2],[118,1],[300,2],[8,0],[249,1],[164,0],[102,0],[150,0],[27,0],[59,0],[30,-1],[347,-3],[350,0],[295,5],[245,3],[576,4],[75,0]],[[67874,34485],[0,-172],[0,-447],[0,-138],[0,-196]],[[64732,24536],[-3,2],[-411,-1],[-271,0],[-111,0],[-701,0],[0,-541],[0,-318],[-445,0],[-136,-2],[-169,1]],[[92053,33628],[26,-220],[37,-276],[23,-111],[47,-226],[53,-178],[79,-300],[45,-179],[21,-78],[33,-251],[-25,-391],[-42,-316],[-90,-11],[-110,-71],[-138,-121],[-89,-110],[-111,-141],[-85,-157],[-69,-102],[-68,-129],[-57,-134],[-76,-240],[-16,76],[-58,85],[-96,46],[-160,-27],[-184,-85],[-21,-10],[-93,-87],[-73,-99],[-125,-122],[-46,-65],[-107,-148],[-70,-133],[-45,-85],[-58,-158],[-77,-364],[-17,-98],[-23,-128],[-41,10],[-11,57],[-105,45],[-124,1],[-96,-20],[-140,-97]],[[89671,28480],[-67,123],[-31,56],[-144,259],[-231,417],[-256,469],[-92,162],[-190,333],[-16,0],[-206,6],[-136,3],[-217,8],[-215,7],[-210,12],[14,214],[-52,125],[-57,134],[-28,68],[-95,-120],[-14,55],[19,94],[-6,51],[-254,25],[-35,3],[-113,11],[-244,19],[-94,7],[-85,6],[-63,5],[-157,8],[-71,3],[-51,7],[-52,7],[-40,-48],[-68,-41],[-40,-18],[-97,-41],[-54,-87],[-33,12],[-101,-56],[-99,-56],[-89,-50]],[[95827,42431],[34,135],[43,11],[10,-117],[13,-61],[-66,-6],[-34,38]],[[95623,42724],[22,65],[-3,111],[37,8],[6,246],[2,98],[-1,244],[-2,157],[-6,383]],[[96283,43062],[-18,-22],[-47,-53],[-47,45],[-35,12],[-25,-70],[-34,-1],[-34,19],[-35,-12],[-24,-88],[-25,-69],[-64,3],[-61,-24],[-69,-46],[-75,-21],[-69,-31],[2,20]],[[85819,43437],[34,55],[38,-55],[-6,-97],[-47,-28],[-19,125]],[[85293,43511],[39,-79],[74,20],[85,-110],[60,-38],[87,-55],[34,-76],[84,-78],[67,118],[22,21],[104,-87],[24,-86],[2,-8],[64,-122],[74,-71],[65,-10],[88,77],[12,1],[71,7],[78,78],[98,48],[68,34],[23,-20],[8,-7],[20,-17],[103,7],[10,1],[38,-8],[26,-6],[94,99],[129,180],[20,28],[69,110],[91,101],[91,51],[118,101],[44,18],[91,38],[89,77],[195,92],[56,38]],[[87908,43978],[0,-244],[0,-343],[0,-324],[0,-21],[0,-296],[0,-193],[-1,-621],[0,-8],[0,-4],[0,-94],[1,-405]],[[87908,41425],[-58,-45],[-38,9],[-37,-72],[41,-118],[16,-141],[-24,-116],[22,-156],[-34,-100],[-35,-123],[-20,-67],[-27,-137],[-3,-208],[-22,-39],[-34,-60],[-19,-137],[-1,-88],[-40,-71],[31,-85],[5,-14],[-32,-94],[-69,-106],[-84,-131],[-34,-55],[-47,-115],[-51,-35],[-56,-78],[-88,-84],[-41,11],[-17,82],[-39,28],[-42,-69],[-50,-81],[-5,-104],[-44,-1],[-57,-4],[-30,-103],[-36,-66],[0,-7],[8,-142],[-57,-43],[13,-84],[15,-113],[-46,-67],[-63,-31],[-39,122],[-58,69],[-31,-22],[-42,-80],[-41,-135],[-24,-154],[-42,-42],[7,-81],[14,-192],[9,-97],[-39,-32],[-49,4],[-17,-64],[-10,-122],[-17,-90],[-52,-28],[-58,-14],[-55,-24],[-46,-20],[-30,34]],[[67874,34485],[143,-1],[128,-8],[306,-1],[279,-3]],[[68730,34472],[12,0],[112,1],[309,3],[63,1],[244,3],[129,1],[108,1],[80,1],[198,3],[72,1],[413,1],[77,0],[7,0],[300,-2],[104,-1],[76,0],[44,-1],[247,0],[115,0],[186,0],[220,-2],[170,-1],[6,0],[210,1],[59,0],[217,1],[29,0],[273,0],[69,0],[212,0],[42,0],[312,0],[200,0],[23,0],[252,0],[193,1],[32,0],[33,0],[126,0],[189,0],[46,0],[102,0],[76,0],[222,0],[59,0],[11,0],[252,-1],[84,0]],[[89671,28480],[-117,-64],[-90,-94],[-80,-119],[-67,-126],[-52,-129],[-29,-74],[-50,-95],[-45,-152],[-24,-146],[-16,-170],[7,-60],[-38,-98],[-68,-87],[-34,-38],[-9,-75],[-18,-83],[-57,16],[-53,-27],[-35,65],[-52,-55],[-23,-65],[33,-87],[-28,-54],[-84,-91],[-28,-85],[-82,-76],[-44,-60],[-15,-96],[-74,-85],[-29,-65],[-68,-5],[-64,-47],[-37,-60],[-50,-30],[-82,-100],[-67,-15],[-46,46],[-17,-65],[24,-97],[21,-67],[-19,-93],[-75,-75],[-51,-26],[-43,35],[-62,65],[-46,-63],[35,-52],[51,-93],[-46,-107],[-81,-97],[-42,-19],[-24,-124]],[[62485,42115],[712,-1],[296,2],[491,3],[45,0],[407,-4],[481,-5],[92,-1],[24,0],[814,1],[297,0],[79,0],[319,7],[396,-1]],[[68721,40212],[0,-351],[2,-467],[0,-11],[1,-371],[1,-459],[1,-164],[0,-666],[1,-158],[0,-440],[0,-220],[0,-12],[1,-285],[2,-714],[0,-28],[0,-888],[0,-290],[0,-136],[0,-80]],[[95623,42724],[-23,31],[-62,-12],[-58,-25],[-65,-5],[-36,-28],[-59,31],[-31,-29],[-51,-39],[-50,-5],[-33,-30],[-18,32],[-59,-16],[-67,-38],[-45,35],[-50,-5],[-32,-37],[-62,-10],[-23,45],[-85,-43],[-49,31],[-45,-48],[-30,-52],[-53,-23],[-26,-77],[-19,-13],[-65,21],[-53,-77],[-61,-15],[-37,-11],[16,-35],[-29,-52],[-31,-21],[-41,8],[-44,-25],[-40,-41],[-30,-2],[-55,-59]],[[49844,56767],[148,31],[45,41],[36,115],[37,17],[107,-88],[67,-157],[-50,-109],[25,-81],[-7,-102],[-35,-48],[13,-105],[-63,-20],[-48,41],[-99,39],[-91,86],[-55,162],[-30,178]],[[49567,52143],[-109,15],[-28,73],[-52,-57],[-42,16],[-61,-84],[-30,11],[-41,60],[-13,28],[-99,-46],[14,114],[7,317],[-11,262],[97,11],[33,69],[-46,79],[-94,40],[-18,144],[-33,181],[-38,40],[10,130],[-17,311],[-7,31],[-36,216],[-74,130],[-32,363],[-50,277],[-54,145],[-60,133],[-77,98],[-41,145],[-12,162],[-1,94],[-31,104],[28,127],[18,146],[-50,171],[65,9],[95,-70],[147,-132],[116,-38],[133,-91],[46,-75],[152,-32],[134,4],[51,0],[108,-22],[97,-52],[114,-20],[67,9],[84,110],[70,-106],[55,-57],[52,15],[31,22],[69,47],[65,16],[56,-76],[-4,-166],[1,-82],[45,-99],[15,4],[15,4],[39,49],[24,31],[3,55],[-57,66],[8,152],[-31,101],[-70,57],[-37,127],[41,106],[36,185],[1,8],[-21,115],[34,101],[7,111],[-25,109],[-35,147],[-9,127],[-11,94],[-55,86],[-24,111],[56,116],[452,0],[136,0],[310,-10],[316,5],[240,3],[245,-1],[120,-1],[304,1],[334,-3],[484,2],[290,0],[264,0],[569,0],[174,0],[352,1],[158,-1],[144,-1],[210,-1]],[[87908,41425],[0,-566],[0,-621],[0,-563],[87,0],[308,0],[30,0],[112,0],[136,-1],[256,1]],[[81671,21670],[-123,-58],[-145,-41],[-66,21],[77,77],[9,85],[-61,113],[-43,119],[-18,79],[29,121],[-12,67],[-15,127],[-68,62],[-48,-77],[-3,-108],[-15,-80],[-19,-86],[-2,-189],[-27,-155],[-53,1],[-56,-4],[-48,95],[-46,36],[-28,-35]],[[95944,49768],[2,107],[44,75],[27,117],[12,53],[-30,78],[70,59],[68,61],[35,-65],[55,-51],[39,3],[27,75],[22,45]],[[96654,46042],[-28,-91],[-27,-70],[-29,-98],[-17,-99]],[[95090,45407],[-17,65],[-55,84],[-14,117],[21,60],[0,109],[35,24],[43,70],[-16,76],[24,81],[-15,128],[2,14],[8,103],[7,34],[10,58],[17,109],[-9,81],[14,126],[15,123],[1,154],[41,60],[3,5],[40,214],[56,75],[10,25],[25,67],[12,125],[57,144],[-10,82],[33,72],[0,1],[4,8],[34,131],[-22,156],[7,118],[7,86],[39,62],[51,25],[62,-1],[34,20],[16,10],[36,89],[14,8],[64,33],[40,91],[59,63],[-7,88],[39,60],[-7,92],[-29,72],[-38,156],[51,111],[43,144],[25,59],[-34,122],[28,72]],[[92456,39829],[4,5],[18,23],[35,45],[8,11],[43,5],[31,11],[34,13],[9,10],[25,29],[37,23],[7,5],[-2,97],[15,35],[52,50],[1,1],[62,86],[15,17],[36,42],[61,26],[34,80],[50,10],[41,45],[2,2],[-35,86],[-56,81],[-29,69],[-42,72],[-38,80],[-21,81],[-49,7],[-28,24],[-13,75],[7,50],[-14,127],[-52,52],[-45,-12],[-3,131],[-2,149],[14,92],[59,49],[2,2],[16,111],[23,70],[-29,78],[-32,102],[56,73],[49,81],[21,61],[8,25],[3,8],[66,86],[34,138],[46,130],[49,85],[59,32]],[[93485,41165],[-1,-72],[33,-31],[16,-15],[44,13],[43,-7],[54,-48],[26,100],[19,11],[18,-130],[5,-116],[-9,-131],[-17,-119],[-26,-179],[-30,-274],[-12,-130],[-12,-212],[-9,-83],[-80,-250],[-90,-224],[-11,-69],[-56,-133],[-41,-78],[-97,-90],[-53,-82],[-58,-112],[-22,-62],[-39,-114],[8,-32],[-65,-153],[-26,-70],[-50,-87],[-62,-23],[-30,9],[11,130],[46,164],[16,107],[-18,60],[-82,31],[-45,46],[-38,-9],[-41,-55],[-27,78],[-41,77],[-28,43],[-36,13],[-37,76],[-26,30],[-39,60],[-38,44],[-21,69],[-63,42],[7,71]],[[66942,57370],[600,-2],[389,1],[78,0],[565,-1],[174,0],[353,1],[115,0],[330,0],[619,0],[221,0],[240,0],[346,0],[133,0],[336,1],[116,1],[819,0],[155,1],[487,0]],[[87908,43978],[169,112],[156,150],[16,67],[43,44],[60,-19],[86,85],[71,53],[74,65]],[[94302,49763],[135,4],[20,0],[108,3],[100,-1],[315,-5],[25,-4],[20,-3],[163,-4],[290,2],[97,2],[15,0],[184,7],[73,2],[97,2]],[[0,61717],[159,258],[61,-59],[16,-82],[-145,-171],[-49,-59],[-42,113]],[[254,62272],[188,106],[113,-30],[-30,-88],[-133,-41],[-82,9],[-56,44]],[[871,62911],[95,27],[123,-8],[58,-123],[115,-7],[127,15],[-30,-101],[-94,-56],[-65,-115],[-36,-63],[-37,-157],[-121,63],[-65,91],[57,52],[65,20],[-12,126],[-81,51],[-123,108],[24,77]],[[265,62783],[87,26],[41,-129],[-53,-73],[-92,64],[17,112]],[[1340,62602],[159,52],[159,15],[76,49],[26,203],[16,62],[73,-13],[48,-72],[-48,-131],[-5,-211],[-76,-42],[-76,-32],[-65,31],[-121,-27],[-149,-55],[-50,95],[33,76]],[[1982,62494],[29,211],[121,67],[17,68],[-43,113],[33,74],[67,-3],[106,74],[27,-91],[-5,-87],[-19,-129],[129,36],[107,21],[123,20],[4,125],[-13,97],[-25,125],[55,101],[84,-16],[43,-82],[107,-136],[71,-10],[128,8],[190,36],[23,-77],[-192,-74],[-133,-27],[-155,-139],[-31,-86],[-142,-62],[-118,-52],[-158,-29],[-68,-53],[-100,-77],[-53,-72],[-83,-8],[-116,-48],[-43,30],[33,152]],[[5847,63677],[60,97],[86,64],[109,-47],[22,-70],[-101,-102],[-101,-42],[-100,-18],[25,118]],[[7005,64033],[50,67],[54,-55],[-27,-125],[-69,30],[-8,83]],[[3451,63198],[241,69],[128,70],[153,-2],[143,63],[82,100],[6,192],[113,114],[128,84],[105,-52],[74,-139],[-55,-155],[21,-195],[110,12],[219,12],[110,25],[138,-98],[179,35],[202,-37],[-29,-82],[-168,-39],[-200,-29],[-106,-6],[-163,57],[-112,-23],[-71,12],[-177,43],[-159,33],[-93,-15],[-24,-131],[-131,46],[-161,-56],[-139,23],[-109,-24],[-125,9],[-150,-8],[20,92]],[[7446,64305],[130,118],[125,-35],[-47,-176],[-90,-12],[-92,-78],[-47,34],[21,149]],[[8023,64589],[70,256],[58,49],[151,-70],[84,133],[-51,169],[65,51],[60,-111],[16,-159],[-4,-167],[-33,-166],[-102,27],[-119,-5],[-112,-130],[-116,-22],[33,145]],[[10143,65639],[86,100],[92,10],[119,94],[79,15],[81,53],[80,87],[47,52],[-23,104],[48,52],[32,62],[27,81],[32,91],[-82,84],[-39,52],[0,76],[98,149],[135,83],[122,51],[88,-1],[51,-105],[70,-68],[64,60],[71,89],[82,-47],[35,17],[48,22],[86,-54],[-77,-65],[-44,-37],[-35,-75],[-62,-14],[-76,-115],[61,-42],[123,93],[76,34],[14,-51],[-36,-183],[-94,-39],[-68,-69],[-111,-64],[-57,-109],[-65,-102],[-67,-82],[-82,-88],[-115,-21],[-104,-2],[-72,-8],[-81,-23],[-112,-93],[-15,-57],[-97,-8],[-63,-116],[-45,17],[-74,-53],[-112,45],[-93,66],[54,52]],[[12094,66992],[119,66],[167,68],[125,30],[118,7],[111,117],[53,56],[54,-5],[-47,-122],[-125,-187],[-118,22],[-177,-65],[-239,-28],[-41,41]],[[11684,67259],[91,68],[82,-11],[216,160],[131,-7],[84,-188],[-147,-161],[-210,-82],[-81,-63],[-23,51],[-129,-36],[-59,150],[45,119]],[[8811,64588],[215,209],[76,81],[88,152],[67,55],[-17,143],[37,119],[161,198],[122,-40],[22,109],[23,143],[47,150],[93,87],[188,78],[100,-76],[112,-7],[-17,-86],[-43,-87],[12,-80],[-104,-85],[-118,-102],[-182,-117],[-42,-108],[-62,-114],[-39,-105],[-140,-89],[-66,-81],[-60,-113],[-85,1],[-138,-148],[-147,-102],[-81,-42],[-22,57]],[[5435,79692],[145,-191],[58,-167],[268,-199],[147,-57],[127,-87],[-14,-75],[-144,32],[-191,39],[-237,221],[-149,99],[-46,298],[36,87]],[[6538,85147],[40,106],[-10,183],[53,127],[116,4],[27,-133],[27,-94],[217,-86],[320,-97],[81,33],[226,163],[105,46],[128,-5],[69,-35],[81,-96],[71,-25],[42,-142],[37,-119],[134,-64],[179,-23],[80,-79],[93,-54],[334,-37],[134,-14],[224,-71],[-59,-149],[-80,-123],[-87,-31],[-121,77],[-138,-9],[-184,-114],[-88,-74],[-37,-91],[8,-95],[-63,-75],[-106,43],[-28,158],[-82,120],[-150,109],[-122,35],[-69,-5],[-36,114],[-113,144],[-207,118],[-208,80],[-153,13],[-141,-57],[-53,-54],[-131,-113],[-85,34],[-124,59],[-83,49],[-80,197],[12,152]],[[22791,77179],[96,54],[68,0],[58,-71],[-35,-90],[-114,-19],[-28,20],[-45,106]],[[10464,78724],[101,66],[182,0],[156,-32],[85,-8],[27,75],[-21,36],[109,112],[87,-16],[60,82],[52,52],[106,-65],[116,64],[82,91],[41,-132],[59,-91],[137,45],[181,-97],[-38,-107],[35,-72],[-36,-66],[51,-75],[-38,-112],[67,-88],[91,-126],[-45,-86],[-110,-48],[-57,33],[-77,-59],[-112,4],[-92,-61],[1,-122],[-95,-49],[-72,117],[-81,52],[-134,15],[-136,60],[-115,67],[-129,100],[-113,43],[-142,100],[-96,50],[-9,113],[-78,135]],[[24157,79144],[99,178],[101,-47],[-46,-87],[-58,-138],[-110,-51],[14,145]],[[14551,67879],[231,-119],[214,-89],[-39,-64],[-70,-48],[-126,51],[-135,6],[-91,100],[16,163]],[[15815,69226],[62,9],[23,-4],[-12,-116],[-96,38],[23,73]],[[15573,69288],[155,43],[-33,-123],[-117,-16],[-5,96]],[[16860,68648],[54,238],[5,153],[44,101],[100,62],[138,154],[24,-67],[24,-136],[130,8],[133,135],[29,-123],[134,-271],[120,-251],[-61,-97],[-33,3],[-124,144],[-50,164],[-116,19],[-105,55],[-54,-74],[-191,-12],[-64,-111],[-114,-188],[-23,94]],[[16322,69420],[43,99],[108,61],[151,-43],[164,109],[65,51],[110,-24],[-15,-140],[-136,-142],[-31,-98],[-113,71],[-53,-62],[37,-142],[-35,-99],[-116,58],[-70,-17],[-77,-64],[-19,165],[-13,217]],[[7801,73033],[104,48],[142,9],[9,-117],[-136,-101],[-121,63],[2,98]],[[21683,71522],[120,192],[171,158],[270,11],[102,15],[64,-86],[130,-13],[-8,-61],[-119,-99],[-218,28],[-235,12],[-84,-53],[-106,-140],[-87,36]],[[19501,71800],[104,61],[72,-33],[103,-77],[-63,-39],[-109,19],[-140,-9],[33,78]],[[8337,71928],[182,-20],[124,4],[19,-79],[-115,-89],[-92,5],[-118,179]],[[21737,73326],[77,152],[67,131],[86,120],[98,40],[106,87],[85,39],[181,-15],[57,76],[-4,222],[137,121],[53,27],[65,-20],[122,55],[-19,61],[43,68],[88,-77],[77,94],[-59,102],[-48,39],[51,90],[41,64],[83,42],[18,87],[90,95],[51,93],[106,63],[38,116],[85,21],[48,94],[83,17],[-23,142],[45,110],[50,34],[95,-2],[88,38],[16,-94],[-45,-127],[-71,-88],[-41,-94],[13,-105],[59,-32],[40,8],[38,61],[-10,61],[48,10],[66,-100],[88,38],[35,-55],[96,-37],[147,-161],[19,-100],[-59,-82],[-153,30],[-70,-67],[-136,-25],[-98,-30],[-96,19],[-41,-69],[-114,-62],[-98,-60],[39,-81],[-26,-103],[-47,-65],[13,-78],[33,-45],[64,78],[41,82],[97,-10],[84,120],[8,-53],[88,-61],[-24,-156],[124,-82],[-77,-87],[-126,-37],[47,-112],[65,-60],[136,-25],[2,-57],[-89,-126],[-57,-114],[62,-159],[-62,-79],[-135,174],[-85,28],[-28,-127],[-26,-113],[-58,-79],[-109,-31],[-112,-16],[-5,-132],[62,-43],[-18,-63],[-146,-54],[-121,-118],[-60,-80],[-67,-33],[-55,187],[-74,10],[-84,-70],[34,-103],[1,-205],[-55,-1],[-85,-61],[-69,-47],[-56,-16],[-56,-97],[-62,-50],[-40,-106],[-122,-15],[22,116],[-158,199],[-6,137],[-84,95],[-108,64],[4,242],[-63,245],[-87,51],[-91,9],[13,148]],[[39397,75304],[85,-88],[69,-130],[46,-104],[11,-48],[21,-92],[82,20],[131,-24],[117,-46],[66,18],[73,-37],[-9,-91],[41,-58],[45,-96],[78,-156],[85,-205],[7,-232],[79,-145],[-8,-79],[-48,-160],[4,-222],[71,-108],[-48,-77],[-31,-6],[-96,67],[-104,-70],[-83,-155],[-98,-92],[-67,-41],[-7,-53],[-51,-48],[-48,-59],[-61,-15],[-61,165],[-5,248],[75,319],[-46,202],[-79,328],[-12,182],[-38,302],[-28,273],[-72,188],[-84,270],[-2,155]],[[40311,70569],[106,83],[75,123],[65,105],[14,84],[-26,181],[14,111],[0,88],[66,48],[146,-38],[198,1],[34,-35],[71,-129],[35,-15],[65,-28],[70,-98],[48,-132],[-56,-8],[33,-90],[20,-53],[195,-216],[132,-246],[7,-207],[71,-16],[73,-218],[141,-178],[-103,-79],[118,-244],[79,-25],[53,-180],[-44,-145],[38,-147],[1,-248],[23,-203],[-37,-113],[-27,-59],[-121,-13],[-56,59],[-71,-12],[-52,62],[-33,63],[-95,-6],[-115,-54],[-32,-149],[-70,-3],[-101,52],[-9,101],[-37,57],[-64,72],[-97,187],[-59,110],[-29,108],[-37,112],[22,85],[-16,118],[-44,35],[-53,-22],[-56,18],[-60,62],[3,65],[-106,52],[-9,-173],[-54,28],[-29,137],[51,108],[2,105],[-60,73],[-81,6],[32,165],[22,93],[11,128],[65,131],[-52,107],[1,100],[-143,22],[-53,22],[-13,115]],[[20872,70380],[56,82],[73,122],[67,-31],[-21,-126],[-11,-108],[-22,-53],[-114,20],[-28,94]],[[19996,70868],[45,41],[61,-65],[-3,-90],[-57,-45],[-47,54],[1,105]],[[39903,72368],[109,136],[68,-3],[42,44],[89,-65],[36,-136],[57,-88],[66,77],[-47,221],[-114,129],[36,86],[108,45],[132,-49],[181,-64],[180,-69],[15,0],[190,6],[110,-149],[69,-236],[95,-51],[48,-121],[110,-101],[8,-116],[-54,-108],[-121,-72],[-112,32],[-97,-7],[-126,-123],[-105,16],[-102,-11],[-40,-5],[-174,-22],[-148,-97],[-11,-137],[-38,-84],[-4,-100],[-54,-82],[13,-66],[-30,-104],[-51,-6],[-62,13],[-30,-124],[19,-87],[-16,-133],[-80,-72],[-42,-61],[-51,-62],[-29,65],[-27,157],[74,-5],[80,208],[-51,190],[-20,229],[-11,155],[45,114],[-7,93],[48,165],[-39,47],[-70,-2],[17,125],[-67,92],[-38,293],[23,80]],[[37969,74601],[22,112],[82,37],[72,68],[-19,198],[86,-2],[102,26],[127,22],[139,-32],[84,51],[63,-104],[191,-121],[198,-137],[149,-16],[141,-98],[22,-220],[-70,-71],[47,-190],[11,-40],[102,-503],[-1,-244],[-26,-205],[104,-551],[38,-143],[29,-183],[30,-182],[12,-138],[-10,-159],[-38,-56],[25,-150],[6,-191],[1,-152],[-17,-129],[-18,-60],[-80,83],[-42,66],[-26,123],[-68,98],[-55,146],[-72,176],[-58,140],[-47,143],[-35,-24],[-80,116],[-51,62],[-93,24],[-75,133],[39,48],[27,48],[31,97],[79,150],[-93,94],[-101,68],[-30,-114],[-28,-69],[-169,-40],[-27,13],[10,168],[80,77],[2,82],[-71,7],[-34,97],[30,115],[-19,75],[-30,165],[-46,97],[-92,105],[-36,79],[-67,7],[-67,128],[-11,112],[-48,165],[-61,117],[-77,41],[-23,81],[-79,58],[9,206]],[[16124,75746],[20,127],[123,86],[194,134],[19,-71],[-179,-379],[-72,-53],[-102,-7],[-3,163]],[[9842,89135],[133,137],[294,130],[327,193],[458,327],[651,383],[562,288],[527,199],[370,107],[4,1],[510,20],[196,-65],[-111,-113],[-62,-118],[-67,-91],[22,-155],[5,-91],[-73,-67],[8,-66],[100,-172],[97,-77],[177,49],[111,-1],[201,-48],[133,33],[219,25],[115,-96],[177,18],[82,-34],[173,90],[267,-107],[55,98],[144,196],[59,121],[57,43],[127,-14],[19,-60],[108,-25],[183,45],[-85,154],[-208,102],[-225,54],[-106,-1],[-198,-89],[47,209],[-10,100],[-206,211],[-62,125],[-155,74],[-135,30],[-112,223],[39,86],[103,89],[-1,56],[-149,34],[-185,-14],[-150,74],[-256,59],[-261,60],[-98,33],[-35,192],[-123,393],[-153,286],[-183,163],[-248,141],[-499,394],[-228,179],[-41,17],[-260,106],[-164,37],[-92,59],[-102,153],[-199,130],[-256,85],[-212,6],[220,131],[234,70],[41,150],[47,177],[33,215],[-28,280],[268,-9],[358,-24],[494,51],[393,67],[244,25],[290,133],[315,235],[293,347],[83,237],[1,348],[70,238],[74,167],[179,198],[254,327],[179,198],[377,238],[265,-50],[262,-11],[423,152],[533,348],[308,281],[197,167],[424,154],[51,-110],[233,-47],[249,5],[185,47],[298,24],[235,83],[310,192],[218,227],[240,275],[86,90],[215,125],[33,-107],[198,-70],[209,-33],[27,-110],[133,17],[274,-40],[60,-134],[-11,-66],[-154,-91],[-50,-66],[-170,-39],[-24,-89],[49,-125],[172,-41],[168,30],[51,74],[-25,104],[133,103],[91,162],[180,126],[105,-37],[322,-226],[-24,-124],[32,-222],[126,10],[125,-19],[145,-82],[211,205],[200,-5],[214,13],[167,62],[169,-18],[129,-56],[185,-3],[244,-45],[178,-65],[27,-56],[-138,-97],[-4,-89],[-108,-27],[35,-127],[123,-28],[194,-34],[92,-40],[248,-30],[-33,-84],[-5,-129],[210,-9],[184,-58],[109,-48],[138,111],[104,52],[104,4],[204,35],[128,-42],[100,-79],[203,40],[185,137],[113,-24],[248,38],[252,-62],[222,-112],[234,6],[169,-136],[10,-86],[102,-18],[132,84],[216,-65],[87,-40],[88,-140],[297,-59],[176,35],[64,-99],[152,-15],[94,73],[337,0],[337,-51],[110,-36],[132,49],[209,-156],[168,-90],[231,-86],[243,-52],[98,29],[107,-25],[194,131],[161,25],[321,128],[354,44],[82,-26],[127,50],[252,-120],[225,-87],[262,-161],[43,-80],[147,-38],[200,-111],[269,-93],[252,-180],[196,-21],[185,-73],[0,-2188],[0,-5070],[0,-1],[1,-7509],[0,-2880],[0,-164],[416,-156],[56,165],[430,-239],[260,296],[545,33],[4,-65],[-106,-444],[137,-177],[307,-168],[53,-224],[52,-77],[873,-971],[95,-489],[-25,-152],[1,0],[69,5],[163,177],[357,260],[33,37],[219,13],[83,186],[19,42],[-7,343],[104,-28],[110,143],[-2,65],[-101,77],[142,78],[218,45],[200,124],[218,135],[219,-195],[15,-63],[89,-78],[78,-114],[1,-169],[-37,-101],[51,-77],[-17,-69],[60,-124],[231,-62],[34,-127],[87,-101],[76,0],[91,-178],[-19,-112],[65,-24],[-1,-84],[70,-117],[365,-248],[126,-231],[285,-342],[-73,-80],[105,-219],[149,-230],[89,-287],[185,-299],[100,-263],[90,-197],[86,-187],[170,-296],[104,-254],[-107,-229],[286,-84],[-61,-305],[-6,-32],[227,-133],[-27,-99],[59,-288],[226,22],[107,-125],[262,-190],[71,-78],[2,-2],[245,-67],[62,-54],[106,-143],[138,-54],[37,-189],[73,-25],[88,-58],[127,38],[88,-236],[-8,-146],[-64,-177],[-35,-32],[-23,-152],[34,-86],[-8,-226],[31,-138],[41,-118],[14,-174],[37,-69],[-17,-71],[-92,-145],[-57,-159],[-47,-151],[-105,-200],[-169,-211],[-96,-61],[8,-75],[-52,-43],[-46,70],[-48,60],[-47,-37],[-20,7],[-59,72],[-13,152],[-11,90],[-13,78],[-33,41],[13,91],[-14,88],[-35,53],[-32,86],[-5,54],[-60,12],[-27,-171],[1,-124],[-50,-102],[0,-93],[45,-40],[-52,-101],[-66,-15],[-94,72],[-52,64],[-91,2],[-25,29],[10,75],[5,35],[-37,60],[51,102],[-14,35],[-128,40],[-71,134],[-30,173],[7,251],[9,68],[-114,79],[-127,100],[-61,72],[-16,96],[-20,120],[-37,116],[120,93],[56,122],[-91,84],[-98,11],[-39,-139],[-66,51],[-47,148],[-38,210],[-90,-85],[-102,172],[-9,201],[-112,41],[-30,2],[-44,50],[-30,57],[-61,37],[-36,29],[0,30],[8,23],[75,155],[72,35],[93,-17],[146,26],[88,126],[70,67],[-70,141],[-12,122],[-13,105],[-210,189],[-89,261],[-40,105],[-200,73],[-76,96],[-67,-46],[-129,89],[-69,159],[49,119],[16,121],[-39,200],[-4,109],[-90,92],[-50,89],[20,168],[-43,150],[-5,11],[-125,262],[-179,242],[-26,171],[-61,90],[-78,-4],[-126,22],[-79,36],[-148,38],[-107,275],[-166,126],[-113,-12],[-36,-4],[32,-143],[17,-124],[-46,-32],[12,-176],[-125,70],[-70,12],[-91,190],[-42,-8],[-79,-16],[-94,-11],[-70,139],[-169,-31],[-110,-2],[-63,-71],[-137,-54],[-153,-23],[-95,27],[-29,-74],[8,-62],[-21,-52],[-98,3],[-14,103],[-125,82],[-48,102],[-67,65],[-82,-13],[-143,107],[-104,74],[-189,183],[-77,38],[-24,92],[-138,163],[-94,100],[3,18],[12,77],[-24,80],[-102,136],[-141,143],[-119,71],[-248,116],[-152,150],[-101,75],[-135,74],[-178,96],[-133,81],[-189,153],[-204,165],[106,147],[140,36],[-3,126],[-17,216],[-150,23],[-85,-60],[-186,-88],[-85,-39],[-59,-92],[-151,23],[-339,55],[-116,44],[-209,118],[-210,108],[-83,105],[-98,70],[-125,0],[-157,91],[-134,27],[-324,90],[-284,44],[-146,-7],[-143,-42],[-177,-19],[-318,-40],[-140,-52],[-103,-46],[-97,51],[-41,55],[-52,109],[-68,35],[-144,-50],[-72,109],[-112,58],[-89,50],[-245,45],[-25,114],[-117,61],[-42,-46],[-106,29],[-111,79],[-117,-65],[-114,-32],[-171,93],[-140,70],[-89,-42],[-97,-32],[-32,-18],[-143,-22],[-87,-62],[-104,-103],[-39,4],[-38,70],[-198,21],[-69,-97],[-135,-131],[-100,-121],[-106,-175],[33,-103],[-101,-15],[-16,-90],[70,-56],[-104,-68],[-122,-46],[-106,-42],[-100,-61],[-47,38],[14,102],[52,66],[-90,167],[-129,-13],[-136,-38],[30,83],[-84,110],[-78,-107],[-68,-80],[-139,-38],[-49,55],[-100,15],[-52,-54],[-68,56],[-89,-22],[-78,51],[-87,-57],[-44,-127],[-94,-69],[-86,129],[-89,-98],[-20,-104],[79,-51],[-19,-123],[-88,53],[-94,-53],[-13,-132],[-86,122],[-68,-18],[-74,-117],[-117,-141],[-131,-171],[-15,-81],[-55,-47],[-23,-110],[-40,2],[-43,150],[-18,66],[-74,-21],[-25,-113],[-64,-154],[-36,-26],[-90,74],[-80,-49],[22,-71],[-48,-66],[-53,-17],[-111,-27],[-144,18],[-48,5],[-115,39],[33,-204],[-204,-87],[-175,103],[-51,159],[-61,98],[19,126],[68,145],[128,90],[202,106],[168,94],[109,109],[-82,127],[-135,-92],[-173,-3],[-92,75],[-110,158],[50,144],[50,139],[35,176],[99,171],[165,217],[36,160],[13,144],[54,28],[22,208],[-19,124],[-42,140],[-54,146],[36,43],[97,69],[177,33],[149,126],[169,161],[182,134],[89,54],[54,-23],[131,-235],[76,-20],[110,-22],[76,116],[41,52],[90,62],[32,22],[-102,124],[-154,119],[-54,24],[-179,-45],[33,67],[8,66],[14,119],[-197,-27],[-98,46],[-129,-7],[-131,-72],[-100,-34],[-29,-29],[-67,-66],[-66,-147],[-40,-71],[-77,-12],[-86,-57],[-117,1],[-107,-86],[-107,-117],[-71,-96],[20,-83],[66,-149],[-11,-42],[-162,22],[-126,-117],[-86,-156],[-112,-77],[-62,-123],[26,-113],[60,-39],[-127,-92],[-30,-110],[-115,-89],[-31,-67],[-4,-70],[26,-107],[-23,-124],[-92,-153],[-19,-91],[-143,-87],[-95,13],[-37,-97],[-7,-152],[-31,-114],[-92,-71],[-76,-41],[-61,-13],[-90,20],[-118,-12],[-10,-63],[-22,-78],[-95,-6],[-69,-18],[56,-152],[-43,-65],[-102,-11],[-57,-36],[-65,-39],[-29,-110],[-81,-75],[-17,-136],[-28,-84],[-7,-94],[104,-97],[117,-18],[123,17],[88,5],[88,-141],[104,-10],[78,-84],[62,-82],[50,-78],[-91,-87],[-30,-150],[-38,-64],[-96,-42],[-34,-90],[-124,-61],[-108,7],[-52,-96],[-18,-122],[-64,-10],[-61,-100],[76,-93],[-79,-73],[-26,-138],[-38,-132],[-68,-150],[-106,-79],[-122,-74],[-92,-63],[-164,-30],[-99,46],[-134,-54],[-82,-87],[51,-94],[-32,-74],[-156,-79],[-11,-125],[-62,-83],[-136,87],[-91,32],[-5,-171],[-13,-60],[-84,-44],[-8,-159],[-163,-28],[-117,-18],[30,-142],[-70,-22],[-114,10],[-127,-85],[23,-123],[-6,-168],[8,-125],[-36,-44],[-61,-76],[-32,-97],[-64,-160],[-78,18],[-59,-13],[-108,-171],[-98,43],[-88,-68],[-35,-88],[-98,-132],[-95,68],[-108,-50],[-106,-47],[-30,-96],[100,-115],[-40,-50],[-97,8],[-61,-22],[-40,83],[-65,33],[-113,-52],[44,-146],[46,-100],[-46,-110],[-91,38],[-139,-30],[-106,10],[-34,29],[-78,-27],[-59,-76],[-46,-163],[67,-11],[113,-38],[72,-42],[80,-121],[-148,-110],[-81,-73],[-18,-133],[-33,-134],[-70,-29],[-114,29],[-13,-69],[-85,2],[-134,-16],[-176,-69],[9,-153],[-275,-229],[-123,-73],[-35,-93],[-111,-104],[-33,-6],[-24,86],[72,78],[6,181],[40,100],[-46,68],[-81,26],[-69,-95],[-79,1],[-80,-21],[-29,-135],[-64,-76],[-133,-77],[-100,-73],[-64,-133],[1,-51],[-52,-61],[-118,73],[-12,-101],[-102,-15],[-49,40],[-125,0],[-92,-123],[-155,-100],[-207,6],[-25,50],[32,105],[8,108],[83,139],[-14,111],[-80,11],[-94,-26],[-63,-114],[-37,-88],[12,-203],[-81,-150],[-77,-119],[41,-172],[88,-43],[127,-96],[23,-73],[-125,25],[-91,-50],[-101,91],[-45,23],[-86,-72],[-58,54],[-64,-68],[-26,-73],[-15,-126],[-1,-155],[-41,-77],[-59,-10],[-70,114],[-7,64],[20,205],[-52,29],[-87,-90],[-17,-62],[-107,-26],[-112,-60],[-71,44],[-43,83],[-92,-129],[-75,-77],[-94,-89],[-87,-55],[64,-64],[86,-3],[103,-119],[28,-125],[-166,57],[-150,-35],[-161,-68],[-206,26],[-209,-23],[-195,-99],[-72,-92],[-13,-113],[-93,-86],[-163,-55],[-93,6],[-104,71],[-38,129],[-37,64],[-3,90],[75,77],[109,48],[60,109],[87,232],[1,135],[125,72],[82,-74],[124,71],[76,73],[111,26],[89,107],[108,31],[220,-28],[87,-164],[76,37],[56,112],[-30,178],[163,102],[89,-15],[152,50],[-35,103],[78,90],[153,178],[68,141],[178,263],[130,203],[88,73],[62,79],[135,82],[82,111],[85,23],[233,96],[262,110],[171,22],[140,1],[-3,-147],[16,-116],[204,-43],[49,11],[46,91],[-68,82],[-50,44],[90,179],[74,250],[18,137],[145,128],[68,101],[143,95],[141,179],[261,158],[281,215],[220,196],[71,-63],[35,-31],[97,4],[79,29],[8,70],[-35,124],[6,147],[132,273],[188,285],[81,76],[130,68],[136,227],[141,136],[84,32],[-5,88],[-22,90],[23,184],[36,219],[41,419],[36,114],[68,132],[-60,115],[6,190],[53,197],[149,161],[61,85],[98,136],[65,113],[61,184],[-20,51],[-89,8],[-33,-16],[-210,-103],[-163,-104],[-184,-90],[-322,-169],[-82,10],[-89,86],[-40,158],[-42,41],[-126,63],[40,104],[-89,103],[-132,-89],[-20,-114],[9,-97],[-72,-111],[30,-132],[110,-274],[-81,-143],[-76,-33],[-163,62],[-147,343],[-162,326],[-109,114],[-99,22],[37,75],[-12,90],[-86,-4],[-32,-102],[-40,-99],[-103,-84],[-63,106],[-153,58],[-73,67],[-80,101],[59,77],[-55,145],[-177,-113],[-191,-172],[-82,-175],[-44,94],[-115,-55],[-75,-53],[-121,-84],[-104,-67],[-30,-146],[-159,-105],[-180,-113],[-44,115],[-201,-10],[-129,79],[158,77],[152,87],[53,213],[-35,278],[-95,194],[-77,153],[-46,153],[50,161],[128,179],[52,68],[78,44],[-62,143],[-90,159],[-11,93],[-143,289],[-56,134],[-30,91],[-76,169],[-128,211],[-71,14],[-38,-84],[-1,-98],[7,-97],[-25,-99],[-95,-8],[-103,1],[-63,-73],[-108,-50],[-217,-120],[-254,-67],[-280,-27],[-141,15],[-181,80],[-67,170],[27,52],[42,56],[-126,105],[-123,98],[-95,194],[-91,68],[-71,117],[-69,-5],[-185,107],[-129,160],[53,51],[49,21],[52,107],[-27,28],[-96,-20],[-86,-65],[-75,2],[-78,15],[-51,84],[47,58],[143,55],[119,141],[73,28],[-17,88],[-27,53],[9,125],[-49,144],[-21,25],[-77,90],[55,71],[68,93],[-73,63],[-57,109],[-109,37],[-53,-172],[-66,8],[-85,17],[-76,87],[6,171],[9,97],[-146,60],[-40,-6],[-80,183],[40,54],[76,36],[40,75],[-106,87],[-42,40],[-77,-31],[-68,-89],[-66,39],[-56,181],[61,221],[83,81],[-39,90],[137,67],[122,-45],[146,41],[-9,52],[-83,168],[-10,178],[73,161],[191,272],[168,276],[154,181],[40,145],[80,114],[111,52],[-24,127],[-10,103],[56,187],[114,225],[69,173],[147,171],[208,93],[127,21],[162,-76],[135,-17],[104,-138],[77,-11],[191,-186],[233,39],[120,118],[67,65],[21,98],[86,17],[114,126],[62,69],[94,176],[61,86],[-186,158],[-130,77],[107,91],[166,18],[132,-177],[160,-53],[81,-129],[273,36],[227,-10],[205,57],[105,137],[259,365],[15,144],[-120,324],[-36,129],[-19,295],[-192,234],[-76,104],[-215,48],[31,159],[71,79],[171,-98],[183,85],[178,149],[8,187],[-136,200],[-128,90],[-47,55],[-72,-28],[-102,-102],[-43,-109],[-126,-38],[-114,45],[-113,-52],[-94,-76],[-162,-32],[-114,-39],[-42,-101],[-272,-169],[-56,-97],[-26,-179],[-121,-100],[-61,197],[-19,120],[-74,81],[-82,-44],[5,-79],[-57,-76],[-37,-107],[-104,142],[-146,131],[-243,84],[-128,11],[-129,-45],[-154,26],[-143,-6],[-214,-86],[-232,-128],[-173,-30],[-258,90],[-470,113],[-372,83],[-158,129],[-61,198],[3,80],[64,105],[-22,59],[-137,139],[-100,67],[-35,70],[-155,187],[22,25],[225,-25],[137,79],[26,131],[93,77],[-82,82],[-141,32],[-137,-6],[-133,53],[-149,46],[-251,25],[-111,28],[-188,146],[-148,93],[-175,59],[-73,166]]]};
	var geos_state = topojson.feature(state_topo, state_topo.objects.geos);
	var geos_state_mesh = topojson.mesh(state_topo, state_topo.objects.geos);

	var geos_cbsa = 
	[{"cbsa":"10100","name":"Aberdeen, SD","lon":-98.69611,"lat":45.52156},{"cbsa":"10140","name":"Aberdeen, WA","lon":-123.77322,"lat":47.14989},{"cbsa":"10180","name":"Abilene, TX","lon":-99.71764,"lat":32.44975},{"cbsa":"10220","name":"Ada, OK","lon":-96.68419,"lat":34.72796},{"cbsa":"10260","name":"Adjuntas, PR","lon":-66.75352,"lat":18.17966},{"cbsa":"10300","name":"Adrian, MI","lon":-84.06638,"lat":41.89466},{"cbsa":"10380","name":"Aguadilla-Isabela, PR","lon":-66.95323,"lat":18.33543},{"cbsa":"10420","name":"Akron, OH","lon":-81.34942,"lat":41.14883},{"cbsa":"10460","name":"Alamogordo, NM","lon":-105.7416,"lat":32.61323},{"cbsa":"10500","name":"Albany, GA","lon":-84.17349,"lat":31.58975},{"cbsa":"10540","name":"Albany, OR","lon":-122.53518,"lat":44.48911},{"cbsa":"10580","name":"Albany-Schenectady-Troy, NY","lon":-73.94196,"lat":42.78845},{"cbsa":"10620","name":"Albemarle, NC","lon":-80.25104,"lat":35.31172},{"cbsa":"10660","name":"Albert Lea, MN","lon":-93.34886,"lat":43.67383},{"cbsa":"10700","name":"Albertville, AL","lon":-86.30632,"lat":34.36703},{"cbsa":"10740","name":"Albuquerque, NM","lon":-106.47157,"lat":35.12232},{"cbsa":"10760","name":"Alexander City, AL","lon":-85.7975,"lat":32.86234},{"cbsa":"10780","name":"Alexandria, LA","lon":-92.54155,"lat":31.33055},{"cbsa":"10820","name":"Alexandria, MN","lon":-95.45407,"lat":45.93379},{"cbsa":"10860","name":"Alice, TX","lon":-98.08998,"lat":27.73123},{"cbsa":"10900","name":"Allentown-Bethlehem-Easton, PA-NJ","lon":-75.40372,"lat":40.78934},{"cbsa":"10940","name":"Alma, MI","lon":-84.60472,"lat":43.29295},{"cbsa":"10980","name":"Alpena, MI","lon":-83.62607,"lat":45.03458},{"cbsa":"11020","name":"Altoona, PA","lon":-78.34882,"lat":40.48092},{"cbsa":"11060","name":"Altus, OK","lon":-99.41522,"lat":34.58805},{"cbsa":"11100","name":"Amarillo, TX","lon":-101.91041,"lat":35.24882},{"cbsa":"11140","name":"Americus, GA","lon":-84.22672,"lat":32.09704},{"cbsa":"11180","name":"Ames, IA","lon":-93.46507,"lat":42.0362},{"cbsa":"11220","name":"Amsterdam, NY","lon":-74.43992,"lat":42.9022},{"cbsa":"11260","name":"Anchorage, AK","lon":-149.54302,"lat":62.24288},{"cbsa":"11380","name":"Andrews, TX","lon":-102.63763,"lat":32.30471},{"cbsa":"11420","name":"Angola, IN","lon":-85.00108,"lat":41.64392},{"cbsa":"11460","name":"Ann Arbor, MI","lon":-83.83851,"lat":42.25283},{"cbsa":"11500","name":"Anniston-Oxford-Jacksonville, AL","lon":-85.82552,"lat":33.77144},{"cbsa":"11540","name":"Appleton, WI","lon":-88.37113,"lat":44.2888},{"cbsa":"11580","name":"Arcadia, FL","lon":-81.8098,"lat":27.18691},{"cbsa":"11620","name":"Ardmore, OK","lon":-97.28593,"lat":34.25089},{"cbsa":"11640","name":"Arecibo, PR","lon":-66.75706,"lat":18.41289},{"cbsa":"11660","name":"Arkadelphia, AR","lon":-93.17655,"lat":34.05084},{"cbsa":"11680","name":"Arkansas City-Winfield, KS","lon":-96.83768,"lat":37.23783},{"cbsa":"11700","name":"Asheville, NC","lon":-82.68276,"lat":35.60065},{"cbsa":"11740","name":"Ashland, OH","lon":-82.27062,"lat":40.84594},{"cbsa":"11780","name":"Ashtabula, OH","lon":-80.74857,"lat":41.70756},{"cbsa":"11820","name":"Astoria, OR","lon":-123.65622,"lat":45.99476},{"cbsa":"11860","name":"Atchison, KS","lon":-95.31388,"lat":39.53168},{"cbsa":"11900","name":"Athens, OH","lon":-82.04518,"lat":39.33403},{"cbsa":"11940","name":"Athens, TN","lon":-84.61783,"lat":35.42435},{"cbsa":"11980","name":"Athens, TX","lon":-95.85481,"lat":32.21246},{"cbsa":"12020","name":"Athens-Clarke County, GA","lon":-83.2137,"lat":33.94927},{"cbsa":"12060","name":"Atlanta-Sandy Springs-Roswell, GA","lon":-84.39952,"lat":33.69269},{"cbsa":"12100","name":"Atlantic City-Hammonton, NJ","lon":-74.66031,"lat":39.47788},{"cbsa":"12120","name":"Atmore, AL","lon":-87.16149,"lat":31.12624},{"cbsa":"12140","name":"Auburn, IN","lon":-84.99901,"lat":41.39773},{"cbsa":"12180","name":"Auburn, NY","lon":-76.55479,"lat":42.91772},{"cbsa":"12220","name":"Auburn-Opelika, AL","lon":-85.3549,"lat":32.60106},{"cbsa":"12260","name":"Augusta-Richmond County, GA-SC","lon":-81.98323,"lat":33.46099},{"cbsa":"12300","name":"Augusta-Waterville, ME","lon":-69.7675,"lat":44.40892},{"cbsa":"12380","name":"Austin, MN","lon":-92.75238,"lat":43.67141},{"cbsa":"12420","name":"Austin-Round Rock, TX","lon":-97.65448,"lat":30.26257},{"cbsa":"12460","name":"Bainbridge, GA","lon":-84.5792,"lat":30.8782},{"cbsa":"12540","name":"Bakersfield, CA","lon":-118.72976,"lat":35.34281},{"cbsa":"12580","name":"Baltimore-Columbia-Towson, MD","lon":-76.57961,"lat":39.33718},{"cbsa":"12620","name":"Bangor, ME","lon":-68.64947,"lat":45.40071},{"cbsa":"12660","name":"Baraboo, WI","lon":-89.94793,"lat":43.42637},{"cbsa":"12680","name":"Bardstown, KY","lon":-85.46602,"lat":37.80489},{"cbsa":"12700","name":"Barnstable Town, MA","lon":-70.28986,"lat":41.72331},{"cbsa":"12740","name":"Barre, VT","lon":-72.61427,"lat":44.27377},{"cbsa":"12780","name":"Bartlesville, OK","lon":-95.90445,"lat":36.71527},{"cbsa":"12820","name":"Bastrop, LA","lon":-91.80211,"lat":32.8201},{"cbsa":"12860","name":"Batavia, NY","lon":-78.19388,"lat":43.00081},{"cbsa":"12900","name":"Batesville, AR","lon":-91.57025,"lat":35.74167},{"cbsa":"12940","name":"Baton Rouge, LA","lon":-91.13268,"lat":30.57116},{"cbsa":"12980","name":"Battle Creek, MI","lon":-85.00576,"lat":42.24631},{"cbsa":"13020","name":"Bay City, MI","lon":-83.98995,"lat":43.70716},{"cbsa":"13060","name":"Bay City, TX","lon":-96.01141,"lat":28.82109},{"cbsa":"13100","name":"Beatrice, NE","lon":-96.68942,"lat":40.26177},{"cbsa":"13140","name":"Beaumont-Port Arthur, TX","lon":-94.0707,"lat":30.30488},{"cbsa":"13180","name":"Beaver Dam, WI","lon":-88.7075,"lat":43.41622},{"cbsa":"13220","name":"Beckley, WV","lon":-81.1608,"lat":37.90613},{"cbsa":"13260","name":"Bedford, IN","lon":-86.48326,"lat":38.84108},{"cbsa":"13300","name":"Beeville, TX","lon":-97.74104,"lat":28.41725},{"cbsa":"13340","name":"Bellefontaine, OH","lon":-83.7663,"lat":40.38849},{"cbsa":"13380","name":"Bellingham, WA","lon":-121.72064,"lat":48.82564},{"cbsa":"13420","name":"Bemidji, MN","lon":-94.93726,"lat":47.97354},{"cbsa":"13460","name":"Bend-Redmond, OR","lon":-121.22819,"lat":43.91487},{"cbsa":"13500","name":"Bennettsville, SC","lon":-79.67861,"lat":34.60201},{"cbsa":"13540","name":"Bennington, VT","lon":-73.0929,"lat":43.03553},{"cbsa":"13620","name":"Berlin, NH-VT","lon":-71.42158,"lat":44.69982},{"cbsa":"13660","name":"Big Rapids, MI","lon":-85.32462,"lat":43.64059},{"cbsa":"13700","name":"Big Spring, TX","lon":-101.47806,"lat":32.0886},{"cbsa":"13720","name":"Big Stone Gap, VA","lon":-82.50048,"lat":37.04223},{"cbsa":"13740","name":"Billings, MT","lon":-108.71755,"lat":45.78055},{"cbsa":"13780","name":"Binghamton, NY","lon":-76.02544,"lat":42.16483},{"cbsa":"13820","name":"Birmingham-Hoover, AL","lon":-86.81376,"lat":33.46376},{"cbsa":"13900","name":"Bismarck, ND","lon":-100.99104,"lat":46.72692},{"cbsa":"13940","name":"Blackfoot, ID","lon":-112.39831,"lat":43.21657},{"cbsa":"13980","name":"Blacksburg-Christiansburg-Radford, VA","lon":-80.53258,"lat":37.12094},{"cbsa":"14010","name":"Bloomington, IL","lon":-88.86174,"lat":40.41053},{"cbsa":"14020","name":"Bloomington, IN","lon":-86.67617,"lat":39.23479},{"cbsa":"14100","name":"Bloomsburg-Berwick, PA","lon":-76.45904,"lat":41.04438},{"cbsa":"14140","name":"Bluefield, WV-VA","lon":-81.35873,"lat":37.25095},{"cbsa":"14180","name":"Blytheville, AR","lon":-90.05431,"lat":35.7642},{"cbsa":"14220","name":"Bogalusa, LA","lon":-90.04029,"lat":30.85346},{"cbsa":"14260","name":"Boise City, ID","lon":-116.14315,"lat":43.01602},{"cbsa":"14300","name":"Bonham, TX","lon":-96.1067,"lat":33.59388},{"cbsa":"14340","name":"Boone, IA","lon":-93.9315,"lat":42.03652},{"cbsa":"14380","name":"Boone, NC","lon":-81.69595,"lat":36.23087},{"cbsa":"14420","name":"Borger, TX","lon":-101.35466,"lat":35.84007},{"cbsa":"14460","name":"Boston-Cambridge-Newton, MA-NH","lon":-71.1002,"lat":42.55728},{"cbsa":"14500","name":"Boulder, CO","lon":-105.35765,"lat":40.09252},{"cbsa":"14540","name":"Bowling Green, KY","lon":-86.40695,"lat":37.03849},{"cbsa":"14580","name":"Bozeman, MT","lon":-111.16985,"lat":45.54105},{"cbsa":"14620","name":"Bradford, PA","lon":-78.56888,"lat":41.80787},{"cbsa":"14660","name":"Brainerd, MN","lon":-94.24418,"lat":46.79924},{"cbsa":"14700","name":"Branson, MO","lon":-93.22353,"lat":36.69531},{"cbsa":"14720","name":"Breckenridge, CO","lon":-106.11674,"lat":39.63479},{"cbsa":"14740","name":"Bremerton-Silverdale, WA","lon":-122.67345,"lat":47.61333},{"cbsa":"14780","name":"Brenham, TX","lon":-96.40341,"lat":30.21436},{"cbsa":"14820","name":"Brevard, NC","lon":-82.79828,"lat":35.20172},{"cbsa":"14860","name":"Bridgeport-Stamford-Norwalk, CT","lon":-73.38906,"lat":41.26981},{"cbsa":"15020","name":"Brookhaven, MS","lon":-90.45401,"lat":31.53249},{"cbsa":"15060","name":"Brookings, OR","lon":-124.15629,"lat":42.45766},{"cbsa":"15100","name":"Brookings, SD","lon":-96.79061,"lat":44.36975},{"cbsa":"15140","name":"Brownsville, TN","lon":-89.28411,"lat":35.58312},{"cbsa":"15180","name":"Brownsville-Harlingen, TX","lon":-97.51395,"lat":26.13431},{"cbsa":"15220","name":"Brownwood, TX","lon":-98.99874,"lat":31.77453},{"cbsa":"15260","name":"Brunswick, GA","lon":-81.63477,"lat":31.31135},{"cbsa":"15340","name":"Bucyrus, OH","lon":-82.91997,"lat":40.85062},{"cbsa":"15380","name":"Buffalo-Cheektowaga-Niagara Falls, NY","lon":-78.73685,"lat":42.91121},{"cbsa":"15420","name":"Burley, ID","lon":-113.60951,"lat":42.41463},{"cbsa":"15460","name":"Burlington, IA-IL","lon":-91.05889,"lat":40.87266},{"cbsa":"15500","name":"Burlington, NC","lon":-79.39933,"lat":36.04357},{"cbsa":"15540","name":"Burlington-South Burlington, VT","lon":-73.03069,"lat":44.68734},{"cbsa":"15580","name":"Butte-Silver Bow, MT","lon":-112.65643,"lat":45.90252},{"cbsa":"15620","name":"Cadillac, MI","lon":-85.33644,"lat":44.33806},{"cbsa":"15660","name":"Calhoun, GA","lon":-84.87538,"lat":34.50349},{"cbsa":"15680","name":"California-Lexington Park, MD","lon":-76.60594,"lat":38.3014},{"cbsa":"15700","name":"Cambridge, MD","lon":-76.02339,"lat":38.46911},{"cbsa":"15740","name":"Cambridge, OH","lon":-81.494,"lat":40.05192},{"cbsa":"15780","name":"Camden, AR","lon":-92.70723,"lat":33.57697},{"cbsa":"15820","name":"Campbellsville, KY","lon":-85.3279,"lat":37.36659},{"cbsa":"15860","name":"Cañon City, CO","lon":-105.43984,"lat":38.47309},{"cbsa":"15900","name":"Canton, IL","lon":-90.20744,"lat":40.47252},{"cbsa":"15940","name":"Canton-Massillon, OH","lon":-81.2536,"lat":40.7187},{"cbsa":"15980","name":"Cape Coral-Fort Myers, FL","lon":-81.84071,"lat":26.57793},{"cbsa":"16020","name":"Cape Girardeau, MO-IL","lon":-89.76924,"lat":37.32424},{"cbsa":"16060","name":"Carbondale-Marion, IL","lon":-89.1906,"lat":37.76182},{"cbsa":"16100","name":"Carlsbad-Artesia, NM","lon":-104.30428,"lat":32.4715},{"cbsa":"16140","name":"Carroll, IA","lon":-94.86033,"lat":42.03617},{"cbsa":"16180","name":"Carson City, NV","lon":-119.74705,"lat":39.15134},{"cbsa":"16220","name":"Casper, WY","lon":-106.79853,"lat":42.96194},{"cbsa":"16260","name":"Cedar City, UT","lon":-113.28948,"lat":37.85919},{"cbsa":"16300","name":"Cedar Rapids, IA","lon":-91.6314,"lat":42.09143},{"cbsa":"16340","name":"Cedartown, GA","lon":-85.18802,"lat":34.00173},{"cbsa":"16380","name":"Celina, OH","lon":-84.6293,"lat":40.54031},{"cbsa":"16420","name":"Central City, KY","lon":-87.14269,"lat":37.21592},{"cbsa":"16460","name":"Centralia, IL","lon":-88.91886,"lat":38.64964},{"cbsa":"16500","name":"Centralia, WA","lon":-122.39194,"lat":46.57749},{"cbsa":"16540","name":"Chambersburg-Waynesboro, PA","lon":-77.7216,"lat":39.92734},{"cbsa":"16580","name":"Champaign-Urbana, IL","lon":-88.29454,"lat":40.22673},{"cbsa":"16620","name":"Charleston, WV","lon":-81.4915,"lat":38.27174},{"cbsa":"16660","name":"Charleston-Mattoon, IL","lon":-88.22912,"lat":39.42087},{"cbsa":"16700","name":"Charleston-North Charleston, SC","lon":-80.04338,"lat":33.0421},{"cbsa":"16740","name":"Charlotte-Concord-Gastonia, NC-SC","lon":-80.86706,"lat":35.18901},{"cbsa":"16820","name":"Charlottesville, VA","lon":-78.5764,"lat":37.8519},{"cbsa":"16860","name":"Chattanooga, TN-GA","lon":-85.35885,"lat":35.05192},{"cbsa":"16940","name":"Cheyenne, WY","lon":-104.68967,"lat":41.30713},{"cbsa":"16980","name":"Chicago-Naperville-Elgin, IL-IN-WI","lon":-87.96261,"lat":41.70249},{"cbsa":"17020","name":"Chico, CA","lon":-121.6006,"lat":39.66669},{"cbsa":"17060","name":"Chillicothe, OH","lon":-83.05697,"lat":39.33762},{"cbsa":"17140","name":"Cincinnati, OH-KY-IN","lon":-84.42713,"lat":39.0716},{"cbsa":"17200","name":"Claremont-Lebanon, NH-VT","lon":-72.16134,"lat":43.78357},{"cbsa":"17220","name":"Clarksburg, WV","lon":-80.43091,"lat":39.2886},{"cbsa":"17260","name":"Clarksdale, MS","lon":-90.60265,"lat":34.22915},{"cbsa":"17300","name":"Clarksville, TN-KY","lon":-87.56255,"lat":36.74656},{"cbsa":"17340","name":"Clearlake, CA","lon":-122.75343,"lat":39.09955},{"cbsa":"17380","name":"Cleveland, MS","lon":-90.8804,"lat":33.79552},{"cbsa":"17420","name":"Cleveland, TN","lon":-84.66704,"lat":35.13442},{"cbsa":"17460","name":"Cleveland-Elyria, OH","lon":-81.68389,"lat":41.37552},{"cbsa":"17500","name":"Clewiston, FL","lon":-81.16538,"lat":26.5537},{"cbsa":"17540","name":"Clinton, IA","lon":-90.5323,"lat":41.89791},{"cbsa":"17580","name":"Clovis, NM","lon":-103.34686,"lat":34.57426},{"cbsa":"17620","name":"Coamo, PR","lon":-66.36074,"lat":18.09732},{"cbsa":"17640","name":"Coco, PR","lon":-66.25547,"lat":18.00783},{"cbsa":"17660","name":"Coeur d'Alene, ID","lon":-116.7018,"lat":47.67442},{"cbsa":"17700","name":"Coffeyville, KS","lon":-95.74281,"lat":37.19253},{"cbsa":"17740","name":"Coldwater, MI","lon":-85.05923,"lat":41.91589},{"cbsa":"17780","name":"College Station-Bryan, TX","lon":-96.48901,"lat":30.75642},{"cbsa":"17820","name":"Colorado Springs, CO","lon":-104.65833,"lat":38.84265},{"cbsa":"17860","name":"Columbia, MO","lon":-92.30973,"lat":38.9914},{"cbsa":"17900","name":"Columbia, SC","lon":-81.04303,"lat":34.09188},{"cbsa":"17980","name":"Columbus, GA-AL","lon":-84.90867,"lat":32.44113},{"cbsa":"18020","name":"Columbus, IN","lon":-85.89741,"lat":39.20594},{"cbsa":"18060","name":"Columbus, MS","lon":-88.44329,"lat":33.47306},{"cbsa":"18100","name":"Columbus, NE","lon":-97.52076,"lat":41.57115},{"cbsa":"18140","name":"Columbus, OH","lon":-82.83679,"lat":39.96767},{"cbsa":"18180","name":"Concord, NH","lon":-71.68038,"lat":43.29741},{"cbsa":"18220","name":"Connersville, IN","lon":-85.17845,"lat":39.63997},{"cbsa":"18260","name":"Cookeville, TN","lon":-85.46678,"lat":36.27795},{"cbsa":"18300","name":"Coos Bay, OR","lon":-124.05941,"lat":43.17431},{"cbsa":"18380","name":"Cordele, GA","lon":-83.7673,"lat":31.92285},{"cbsa":"18420","name":"Corinth, MS","lon":-88.58013,"lat":34.88086},{"cbsa":"18460","name":"Cornelia, GA","lon":-83.53061,"lat":34.63081},{"cbsa":"18500","name":"Corning, NY","lon":-77.38378,"lat":42.26787},{"cbsa":"18580","name":"Corpus Christi, TX","lon":-97.47282,"lat":27.89768},{"cbsa":"18620","name":"Corsicana, TX","lon":-96.473,"lat":32.04687},{"cbsa":"18660","name":"Cortland, NY","lon":-76.07037,"lat":42.59514},{"cbsa":"18700","name":"Corvallis, OR","lon":-123.42891,"lat":44.49124},{"cbsa":"18740","name":"Coshocton, OH","lon":-81.91988,"lat":40.30199},{"cbsa":"18780","name":"Craig, CO","lon":-108.20751,"lat":40.61835},{"cbsa":"18820","name":"Crawfordsville, IN","lon":-86.89351,"lat":40.04049},{"cbsa":"18860","name":"Crescent City, CA","lon":-123.89715,"lat":41.74324},{"cbsa":"18880","name":"Crestview-Fort Walton Beach-Destin, FL","lon":-86.36549,"lat":30.6656},{"cbsa":"18900","name":"Crossville, TN","lon":-84.99839,"lat":35.95066},{"cbsa":"18980","name":"Cullman, AL","lon":-86.86746,"lat":34.13171},{"cbsa":"19000","name":"Cullowhee, NC","lon":-83.1409,"lat":35.28779},{"cbsa":"19060","name":"Cumberland, MD-WV","lon":-78.80379,"lat":39.53191},{"cbsa":"19100","name":"Dallas-Fort Worth-Arlington, TX","lon":-97.02543,"lat":32.81841},{"cbsa":"19140","name":"Dalton, GA","lon":-84.84808,"lat":34.79651},{"cbsa":"19180","name":"Danville, IL","lon":-87.73282,"lat":40.18341},{"cbsa":"19220","name":"Danville, KY","lon":-84.73357,"lat":37.51506},{"cbsa":"19260","name":"Danville, VA","lon":-79.39763,"lat":36.81103},{"cbsa":"19300","name":"Daphne-Fairhope-Foley, AL","lon":-87.72274,"lat":30.72767},{"cbsa":"19340","name":"Davenport-Moline-Rock Island, IA-IL","lon":-90.46572,"lat":41.39668},{"cbsa":"19380","name":"Dayton, OH","lon":-84.14203,"lat":39.8295},{"cbsa":"19420","name":"Dayton, TN","lon":-84.92414,"lat":35.60924},{"cbsa":"19460","name":"Decatur, AL","lon":-87.10223,"lat":34.491},{"cbsa":"19500","name":"Decatur, IL","lon":-88.96166,"lat":39.86004},{"cbsa":"19540","name":"Decatur, IN","lon":-84.93658,"lat":40.74578},{"cbsa":"19580","name":"Defiance, OH","lon":-84.49072,"lat":41.32399},{"cbsa":"19620","name":"Del Rio, TX","lon":-101.15216,"lat":29.89249},{"cbsa":"19660","name":"Deltona-Daytona Beach-Ormond Beach, FL","lon":-81.21979,"lat":29.17403},{"cbsa":"19700","name":"Deming, NM","lon":-107.74983,"lat":32.18217},{"cbsa":"19740","name":"Denver-Aurora-Lakewood, CO","lon":-104.89496,"lat":39.43385},{"cbsa":"19760","name":"DeRidder, LA","lon":-93.34346,"lat":30.64829},{"cbsa":"19780","name":"Des Moines-West Des Moines, IA","lon":-93.9404,"lat":41.5478},{"cbsa":"19820","name":"Detroit-Warren-Dearborn, MI","lon":-83.23208,"lat":42.71913},{"cbsa":"19860","name":"Dickinson, ND","lon":-102.6551,"lat":46.81074},{"cbsa":"19940","name":"Dixon, IL","lon":-89.2997,"lat":41.74623},{"cbsa":"19980","name":"Dodge City, KS","lon":-99.88813,"lat":37.6918},{"cbsa":"20020","name":"Dothan, AL","lon":-85.46145,"lat":31.25288},{"cbsa":"20060","name":"Douglas, GA","lon":-82.84958,"lat":31.54917},{"cbsa":"20100","name":"Dover, DE","lon":-75.56832,"lat":39.0862},{"cbsa":"20140","name":"Dublin, GA","lon":-82.85073,"lat":32.52853},{"cbsa":"20180","name":"DuBois, PA","lon":-78.47424,"lat":41.00001},{"cbsa":"20220","name":"Dubuque, IA","lon":-90.8818,"lat":42.46858},{"cbsa":"20260","name":"Duluth, MN-WI","lon":-92.40817,"lat":47.33378},{"cbsa":"20300","name":"Dumas, TX","lon":-101.89303,"lat":35.83769},{"cbsa":"20340","name":"Duncan, OK","lon":-97.8515,"lat":34.48551},{"cbsa":"20380","name":"Dunn, NC","lon":-78.87007,"lat":35.36856},{"cbsa":"20420","name":"Durango, CO","lon":-107.84332,"lat":37.28654},{"cbsa":"20460","name":"Durant, OK","lon":-96.26023,"lat":33.96235},{"cbsa":"20500","name":"Durham-Chapel Hill, NC","lon":-79.09953,"lat":35.99098},{"cbsa":"20540","name":"Dyersburg, TN","lon":-89.41394,"lat":36.05918},{"cbsa":"20580","name":"Eagle Pass, TX","lon":-100.31471,"lat":28.74263},{"cbsa":"20660","name":"Easton, MD","lon":-76.10358,"lat":38.77025},{"cbsa":"20700","name":"East Stroudsburg, PA","lon":-75.33949,"lat":41.05822},{"cbsa":"20740","name":"Eau Claire, WI","lon":-91.28237,"lat":44.93898},{"cbsa":"20780","name":"Edwards, CO","lon":-106.69538,"lat":39.62802},{"cbsa":"20820","name":"Effingham, IL","lon":-88.58981,"lat":39.05974},{"cbsa":"20900","name":"El Campo, TX","lon":-96.22231,"lat":29.27793},{"cbsa":"20940","name":"El Centro, CA","lon":-115.36578,"lat":33.03934},{"cbsa":"20980","name":"El Dorado, AR","lon":-92.59733,"lat":33.17126},{"cbsa":"21020","name":"Elizabeth City, NC","lon":-76.31105,"lat":36.29474},{"cbsa":"21060","name":"Elizabethtown-Fort Knox, KY","lon":-85.97391,"lat":37.73761},{"cbsa":"21120","name":"Elk City, OK","lon":-99.68124,"lat":35.26874},{"cbsa":"21140","name":"Elkhart-Goshen, IN","lon":-85.85873,"lat":41.59748},{"cbsa":"21180","name":"Elkins, WV","lon":-79.87555,"lat":38.775},{"cbsa":"21220","name":"Elko, NV","lon":-115.53379,"lat":40.92168},{"cbsa":"21260","name":"Ellensburg, WA","lon":-120.67935,"lat":47.12446},{"cbsa":"21300","name":"Elmira, NY","lon":-76.75963,"lat":42.14101},{"cbsa":"21340","name":"El Paso, TX","lon":-105.54166,"lat":31.51334},{"cbsa":"21380","name":"Emporia, KS","lon":-96.15259,"lat":38.45593},{"cbsa":"21420","name":"Enid, OK","lon":-97.78266,"lat":36.37911},{"cbsa":"21460","name":"Enterprise, AL","lon":-85.98807,"lat":31.40201},{"cbsa":"21500","name":"Erie, PA","lon":-80.03295,"lat":41.99255},{"cbsa":"21540","name":"Escanaba, MI","lon":-86.92335,"lat":45.91745},{"cbsa":"21580","name":"Española, NM","lon":-106.69301,"lat":36.50954},{"cbsa":"21640","name":"Eufaula, AL-GA","lon":-85.33693,"lat":31.86914},{"cbsa":"21660","name":"Eugene, OR","lon":-122.84641,"lat":43.9388},{"cbsa":"21700","name":"Eureka-Arcata-Fortuna, CA","lon":-123.8756,"lat":40.69935},{"cbsa":"21740","name":"Evanston, WY","lon":-110.54734,"lat":41.28767},{"cbsa":"21780","name":"Evansville, IN-KY","lon":-87.57949,"lat":37.97129},{"cbsa":"21820","name":"Fairbanks, AK","lon":-146.56414,"lat":64.80774},{"cbsa":"21840","name":"Fairfield, IA","lon":-91.94871,"lat":41.03182},{"cbsa":"21860","name":"Fairmont, MN","lon":-94.551,"lat":43.6743},{"cbsa":"21900","name":"Fairmont, WV","lon":-80.24294,"lat":39.50962},{"cbsa":"21980","name":"Fallon, NV","lon":-118.33626,"lat":39.58048},{"cbsa":"22020","name":"Fargo, ND-MN","lon":-96.96577,"lat":46.91776},{"cbsa":"22060","name":"Faribault-Northfield, MN","lon":-93.29667,"lat":44.35434},{"cbsa":"22100","name":"Farmington, MO","lon":-90.47232,"lat":37.81029},{"cbsa":"22140","name":"Farmington, NM","lon":-108.32062,"lat":36.50856},{"cbsa":"22180","name":"Fayetteville, NC","lon":-78.98014,"lat":35.03719},{"cbsa":"22220","name":"Fayetteville-Springdale-Rogers, AR-MO","lon":-94.12164,"lat":36.19617},{"cbsa":"22260","name":"Fergus Falls, MN","lon":-95.70781,"lat":46.40872},{"cbsa":"22280","name":"Fernley, NV","lon":-119.18938,"lat":39.02061},{"cbsa":"22300","name":"Findlay, OH","lon":-83.66634,"lat":41.00177},{"cbsa":"22340","name":"Fitzgerald, GA","lon":-83.22029,"lat":31.75973},{"cbsa":"22380","name":"Flagstaff, AZ","lon":-111.77053,"lat":35.8387},{"cbsa":"22420","name":"Flint, MI","lon":-83.70686,"lat":43.02167},{"cbsa":"22500","name":"Florence, SC","lon":-79.80825,"lat":34.15198},{"cbsa":"22520","name":"Florence-Muscle Shoals, AL","lon":-87.72399,"lat":34.80845},{"cbsa":"22540","name":"Fond du Lac, WI","lon":-88.4888,"lat":43.75366},{"cbsa":"22580","name":"Forest City, NC","lon":-81.92018,"lat":35.40242},{"cbsa":"22620","name":"Forrest City, AR","lon":-90.74868,"lat":35.02206},{"cbsa":"22660","name":"Fort Collins, CO","lon":-105.46135,"lat":40.66655},{"cbsa":"22700","name":"Fort Dodge, IA","lon":-94.18174,"lat":42.42792},{"cbsa":"22780","name":"Fort Leonard Wood, MO","lon":-92.20761,"lat":37.82451},{"cbsa":"22800","name":"Fort Madison-Keokuk, IA-IL-MO","lon":-91.41339,"lat":40.47423},{"cbsa":"22820","name":"Fort Morgan, CO","lon":-103.8089,"lat":40.2628},{"cbsa":"22840","name":"Fort Payne, AL","lon":-85.80421,"lat":34.45996},{"cbsa":"22860","name":"Fort Polk South, LA","lon":-93.18374,"lat":31.1081},{"cbsa":"22900","name":"Fort Smith, AR-OK","lon":-94.56609,"lat":35.19042},{"cbsa":"23060","name":"Fort Wayne, IN","lon":-85.21669,"lat":41.00539},{"cbsa":"23140","name":"Frankfort, IN","lon":-86.47523,"lat":40.30204},{"cbsa":"23180","name":"Frankfort, KY","lon":-84.9329,"lat":38.12411},{"cbsa":"23240","name":"Fredericksburg, TX","lon":-98.94677,"lat":30.31824},{"cbsa":"23300","name":"Freeport, IL","lon":-89.66268,"lat":42.35167},{"cbsa":"23340","name":"Fremont, NE","lon":-96.6539,"lat":41.57782},{"cbsa":"23380","name":"Fremont, OH","lon":-83.14405,"lat":41.35728},{"cbsa":"23420","name":"Fresno, CA","lon":-119.64847,"lat":36.75833},{"cbsa":"23460","name":"Gadsden, AL","lon":-86.03446,"lat":34.04498},{"cbsa":"23500","name":"Gaffney, SC","lon":-81.62027,"lat":35.04869},{"cbsa":"23540","name":"Gainesville, FL","lon":-82.47616,"lat":29.68841},{"cbsa":"23580","name":"Gainesville, GA","lon":-83.82026,"lat":34.31729},{"cbsa":"23620","name":"Gainesville, TX","lon":-97.21276,"lat":33.63938},{"cbsa":"23660","name":"Galesburg, IL","lon":-90.21327,"lat":40.93154},{"cbsa":"23700","name":"Gallup, NM","lon":-108.26175,"lat":35.58061},{"cbsa":"23780","name":"Garden City, KS","lon":-100.9708,"lat":38.02654},{"cbsa":"23820","name":"Gardnerville Ranchos, NV","lon":-119.6167,"lat":38.91215},{"cbsa":"23860","name":"Georgetown, SC","lon":-79.33266,"lat":33.43325},{"cbsa":"23900","name":"Gettysburg, PA","lon":-77.21764,"lat":39.87157},{"cbsa":"23940","name":"Gillette, WY","lon":-105.54826,"lat":44.24844},{"cbsa":"23980","name":"Glasgow, KY","lon":-85.82172,"lat":36.97466},{"cbsa":"24020","name":"Glens Falls, NY","lon":-73.64887,"lat":43.4434},{"cbsa":"24060","name":"Glenwood Springs, CO","lon":-107.66001,"lat":39.50515},{"cbsa":"24100","name":"Gloversville, NY","lon":-74.42156,"lat":43.11353},{"cbsa":"24140","name":"Goldsboro, NC","lon":-78.00395,"lat":35.36401},{"cbsa":"24220","name":"Grand Forks, ND-MN","lon":-96.84424,"lat":47.83586},{"cbsa":"24260","name":"Grand Island, NE","lon":-98.27912,"lat":41.03312},{"cbsa":"24300","name":"Grand Junction, CO","lon":-108.46665,"lat":39.01829},{"cbsa":"24330","name":"Grand Rapids, MN","lon":-93.63168,"lat":47.50942},{"cbsa":"24340","name":"Grand Rapids-Wyoming, MI","lon":-85.48822,"lat":42.99886},{"cbsa":"24380","name":"Grants, NM","lon":-107.99945,"lat":34.91257},{"cbsa":"24420","name":"Grants Pass, OR","lon":-123.55513,"lat":42.36582},{"cbsa":"24460","name":"Great Bend, KS","lon":-98.75638,"lat":38.47894},{"cbsa":"24500","name":"Great Falls, MT","lon":-111.34714,"lat":47.30822},{"cbsa":"24540","name":"Greeley, CO","lon":-104.39287,"lat":40.55482},{"cbsa":"24580","name":"Green Bay, WI","lon":-88.07661,"lat":44.77303},{"cbsa":"24620","name":"Greeneville, TN","lon":-82.84559,"lat":36.17587},{"cbsa":"24640","name":"Greenfield Town, MA","lon":-72.59182,"lat":42.58326},{"cbsa":"24660","name":"Greensboro-High Point, NC","lon":-79.79155,"lat":36.02574},{"cbsa":"24700","name":"Greensburg, IN","lon":-85.50102,"lat":39.3071},{"cbsa":"24740","name":"Greenville, MS","lon":-90.94785,"lat":33.28373},{"cbsa":"24780","name":"Greenville, NC","lon":-77.37476,"lat":35.59392},{"cbsa":"24820","name":"Greenville, OH","lon":-84.61946,"lat":40.13382},{"cbsa":"24860","name":"Greenville-Anderson-Mauldin, SC","lon":-82.41344,"lat":34.68514},{"cbsa":"24900","name":"Greenwood, MS","lon":-90.107,"lat":33.4982},{"cbsa":"24940","name":"Greenwood, SC","lon":-82.30178,"lat":34.19039},{"cbsa":"24980","name":"Grenada, MS","lon":-89.8016,"lat":33.76989},{"cbsa":"25020","name":"Guayama, PR","lon":-66.08334,"lat":18.01304},{"cbsa":"25060","name":"Gulfport-Biloxi-Pascagoula, MS","lon":-89.01322,"lat":30.49385},{"cbsa":"25100","name":"Guymon, OK","lon":-101.49011,"lat":36.74789},{"cbsa":"25180","name":"Hagerstown-Martinsburg, MD-WV","lon":-77.90017,"lat":39.54712},{"cbsa":"25200","name":"Hailey, ID","lon":-114.1989,"lat":43.32359},{"cbsa":"25220","name":"Hammond, LA","lon":-90.4055,"lat":30.62678},{"cbsa":"25260","name":"Hanford-Corcoran, CA","lon":-119.81552,"lat":36.07509},{"cbsa":"25300","name":"Hannibal, MO","lon":-91.57002,"lat":39.6608},{"cbsa":"25420","name":"Harrisburg-Carlisle, PA","lon":-77.1013,"lat":40.32659},{"cbsa":"25460","name":"Harrison, AR","lon":-93.16434,"lat":36.08471},{"cbsa":"25500","name":"Harrisonburg, VA","lon":-78.87587,"lat":38.51059},{"cbsa":"25540","name":"Hartford-West Hartford-East Hartford, CT","lon":-72.57729,"lat":41.7347},{"cbsa":"25580","name":"Hastings, NE","lon":-98.50118,"lat":40.52449},{"cbsa":"25620","name":"Hattiesburg, MS","lon":-89.22872,"lat":31.18744},{"cbsa":"25700","name":"Hays, KS","lon":-99.3172,"lat":38.91462},{"cbsa":"25720","name":"Heber, UT","lon":-111.16812,"lat":40.33093},{"cbsa":"25740","name":"Helena, MT","lon":-112.29605,"lat":46.81271},{"cbsa":"25760","name":"Helena-West Helena, AR","lon":-90.84819,"lat":34.42825},{"cbsa":"25780","name":"Henderson, NC","lon":-78.40791,"lat":36.36486},{"cbsa":"25820","name":"Hereford, TX","lon":-102.60528,"lat":34.96515},{"cbsa":"25840","name":"Hermiston-Pendleton, OR","lon":-119.06561,"lat":45.52476},{"cbsa":"25860","name":"Hickory-Lenoir-Morganton, NC","lon":-81.45451,"lat":35.81278},{"cbsa":"25880","name":"Hillsdale, MI","lon":-84.59302,"lat":41.88778},{"cbsa":"25900","name":"Hilo, HI","lon":-155.52117,"lat":19.60124},{"cbsa":"25940","name":"Hilton Head Island-Bluffton-Beaufort, SC","lon":-80.87709,"lat":32.41027},{"cbsa":"25980","name":"Hinesville, GA","lon":-81.6014,"lat":31.79568},{"cbsa":"26020","name":"Hobbs, NM","lon":-103.41247,"lat":32.79208},{"cbsa":"26090","name":"Holland, MI","lon":-85.88824,"lat":42.59139},{"cbsa":"26140","name":"Homosassa Springs, FL","lon":-82.47809,"lat":28.84868},{"cbsa":"26220","name":"Hood River, OR","lon":-121.65133,"lat":45.51927},{"cbsa":"26260","name":"Hope, AR","lon":-93.50425,"lat":33.70257},{"cbsa":"26300","name":"Hot Springs, AR","lon":-93.15037,"lat":34.57665},{"cbsa":"26340","name":"Houghton, MI","lon":-88.59584,"lat":47.16337},{"cbsa":"26380","name":"Houma-Thibodaux, LA","lon":-90.66096,"lat":29.47707},{"cbsa":"26420","name":"Houston-The Woodlands-Sugar Land, TX","lon":-95.3995,"lat":29.78605},{"cbsa":"26460","name":"Hudson, NY","lon":-73.63225,"lat":42.24991},{"cbsa":"26500","name":"Huntingdon, PA","lon":-77.98131,"lat":40.41702},{"cbsa":"26540","name":"Huntington, IN","lon":-85.48809,"lat":40.8294},{"cbsa":"26580","name":"Huntington-Ashland, WV-KY-OH","lon":-82.37909,"lat":38.3813},{"cbsa":"26620","name":"Huntsville, AL","lon":-86.7343,"lat":34.78308},{"cbsa":"26660","name":"Huntsville, TX","lon":-95.36579,"lat":30.90389},{"cbsa":"26700","name":"Huron, SD","lon":-98.27794,"lat":44.41462},{"cbsa":"26740","name":"Hutchinson, KS","lon":-98.08603,"lat":37.953},{"cbsa":"26780","name":"Hutchinson, MN","lon":-94.27235,"lat":44.82372},{"cbsa":"26820","name":"Idaho Falls, ID","lon":-112.42765,"lat":43.62261},{"cbsa":"26860","name":"Indiana, PA","lon":-79.08699,"lat":40.65221},{"cbsa":"26900","name":"Indianapolis-Carmel-Anderson, IN","lon":-86.20622,"lat":39.7475},{"cbsa":"26940","name":"Indianola, MS","lon":-90.58873,"lat":33.60218},{"cbsa":"26960","name":"Ionia, MI","lon":-85.07433,"lat":42.9452},{"cbsa":"26980","name":"Iowa City, IA","lon":-91.64941,"lat":41.5107},{"cbsa":"27020","name":"Iron Mountain, MI-WI","lon":-88.07613,"lat":45.94619},{"cbsa":"27060","name":"Ithaca, NY","lon":-76.47357,"lat":42.45182},{"cbsa":"27100","name":"Jackson, MI","lon":-84.42306,"lat":42.24866},{"cbsa":"27140","name":"Jackson, MS","lon":-90.22039,"lat":32.31733},{"cbsa":"27160","name":"Jackson, OH","lon":-82.61834,"lat":39.01968},{"cbsa":"27180","name":"Jackson, TN","lon":-88.85309,"lat":35.60981},{"cbsa":"27220","name":"Jackson, WY-ID","lon":-110.64922,"lat":43.91777},{"cbsa":"27260","name":"Jacksonville, FL","lon":-81.79216,"lat":30.23653},{"cbsa":"27300","name":"Jacksonville, IL","lon":-90.28483,"lat":39.69382},{"cbsa":"27340","name":"Jacksonville, NC","lon":-77.42755,"lat":34.73032},{"cbsa":"27380","name":"Jacksonville, TX","lon":-95.16557,"lat":31.83741},{"cbsa":"27420","name":"Jamestown, ND","lon":-98.95893,"lat":46.97922},{"cbsa":"27460","name":"Jamestown-Dunkirk-Fredonia, NY","lon":-79.36664,"lat":42.22818},{"cbsa":"27500","name":"Janesville-Beloit, WI","lon":-89.07194,"lat":42.6712},{"cbsa":"27540","name":"Jasper, IN","lon":-87.03477,"lat":38.37938},{"cbsa":"27580","name":"Jayuya, PR","lon":-66.58807,"lat":18.21051},{"cbsa":"27600","name":"Jefferson, GA","lon":-83.56664,"lat":34.13409},{"cbsa":"27620","name":"Jefferson City, MO","lon":-92.09182,"lat":38.64006},{"cbsa":"27660","name":"Jennings, LA","lon":-92.81399,"lat":30.2682},{"cbsa":"27700","name":"Jesup, GA","lon":-81.91676,"lat":31.55147},{"cbsa":"27740","name":"Johnson City, TN","lon":-82.33452,"lat":36.25354},{"cbsa":"27780","name":"Johnstown, PA","lon":-78.71378,"lat":40.49468},{"cbsa":"27860","name":"Jonesboro, AR","lon":-90.64838,"lat":35.69824},{"cbsa":"27900","name":"Joplin, MO","lon":-94.33998,"lat":37.05685},{"cbsa":"27920","name":"Junction City, KS","lon":-96.75245,"lat":39.00241},{"cbsa":"27940","name":"Juneau, AK","lon":-134.173,"lat":58.44909},{"cbsa":"27980","name":"Kahului-Wailuku-Lahaina, HI","lon":-156.57335,"lat":20.86738},{"cbsa":"28020","name":"Kalamazoo-Portage, MI","lon":-85.78393,"lat":42.24867},{"cbsa":"28060","name":"Kalispell, MT","lon":-114.04932,"lat":48.29491},{"cbsa":"28100","name":"Kankakee, IL","lon":-87.86175,"lat":41.13763},{"cbsa":"28140","name":"Kansas City, MO-KS","lon":-94.44446,"lat":38.93693},{"cbsa":"28180","name":"Kapaa, HI","lon":-159.59575,"lat":22.03978},{"cbsa":"28260","name":"Kearney, NE","lon":-99.03123,"lat":40.73492},{"cbsa":"28300","name":"Keene, NH","lon":-72.25118,"lat":42.9195},{"cbsa":"28340","name":"Kendallville, IN","lon":-85.41741,"lat":41.39852},{"cbsa":"28380","name":"Kennett, MO","lon":-90.09066,"lat":36.27256},{"cbsa":"28420","name":"Kennewick-Richland, WA","lon":-119.25406,"lat":46.36373},{"cbsa":"28500","name":"Kerrville, TX","lon":-99.34928,"lat":30.06116},{"cbsa":"28540","name":"Ketchikan, AK","lon":-130.93635,"lat":55.58658},{"cbsa":"28580","name":"Key West, FL","lon":-81.12008,"lat":25.27257},{"cbsa":"28620","name":"Kill Devil Hills, NC","lon":-75.98464,"lat":35.78909},{"cbsa":"28660","name":"Killeen-Temple, TX","lon":-97.78769,"lat":31.20812},{"cbsa":"28700","name":"Kingsport-Bristol-Bristol, TN-VA","lon":-82.4428,"lat":36.60768},{"cbsa":"28740","name":"Kingston, NY","lon":-74.25829,"lat":41.88819},{"cbsa":"28780","name":"Kingsville, TX","lon":-97.70789,"lat":27.11762},{"cbsa":"28820","name":"Kinston, NC","lon":-77.64153,"lat":35.23838},{"cbsa":"28860","name":"Kirksville, MO","lon":-92.57255,"lat":40.28915},{"cbsa":"28900","name":"Klamath Falls, OR","lon":-121.65006,"lat":42.68626},{"cbsa":"28940","name":"Knoxville, TN","lon":-84.1374,"lat":36.04461},{"cbsa":"29020","name":"Kokomo, IN","lon":-86.11685,"lat":40.48364},{"cbsa":"29060","name":"Laconia, NH","lon":-71.42258,"lat":43.51766},{"cbsa":"29100","name":"La Crosse-Onalaska, WI-MN","lon":-91.31956,"lat":43.7793},{"cbsa":"29180","name":"Lafayette, LA","lon":-92.06019,"lat":30.02399},{"cbsa":"29200","name":"Lafayette-West Lafayette, IN","lon":-86.92974,"lat":40.51439},{"cbsa":"29260","name":"La Grande, OR","lon":-118.00895,"lat":45.31042},{"cbsa":"29300","name":"LaGrange, GA","lon":-85.0285,"lat":33.03334},{"cbsa":"29340","name":"Lake Charles, LA","lon":-93.25955,"lat":30.01725},{"cbsa":"29380","name":"Lake City, FL","lon":-82.62169,"lat":30.22449},{"cbsa":"29420","name":"Lake Havasu City-Kingman, AZ","lon":-113.75819,"lat":35.70465},{"cbsa":"29460","name":"Lakeland-Winter Haven, FL","lon":-81.69736,"lat":27.94868},{"cbsa":"29500","name":"Lamesa, TX","lon":-101.94772,"lat":32.74256},{"cbsa":"29540","name":"Lancaster, PA","lon":-76.24767,"lat":40.04262},{"cbsa":"29620","name":"Lansing-East Lansing, MI","lon":-84.60661,"lat":42.71369},{"cbsa":"29660","name":"Laramie, WY","lon":-105.72403,"lat":41.65475},{"cbsa":"29700","name":"Laredo, TX","lon":-99.33174,"lat":27.76103},{"cbsa":"29740","name":"Las Cruces, NM","lon":-106.83282,"lat":32.35263},{"cbsa":"29780","name":"Las Vegas, NM","lon":-104.81569,"lat":35.48039},{"cbsa":"29820","name":"Las Vegas-Henderson-Paradise, NV","lon":-115.01459,"lat":36.21513},{"cbsa":"29860","name":"Laurel, MS","lon":-89.14416,"lat":31.81807},{"cbsa":"29900","name":"Laurinburg, NC","lon":-79.48029,"lat":34.84123},{"cbsa":"29940","name":"Lawrence, KS","lon":-95.29269,"lat":38.88476},{"cbsa":"29980","name":"Lawrenceburg, TN","lon":-87.39535,"lat":35.21759},{"cbsa":"30020","name":"Lawton, OK","lon":-98.43473,"lat":34.52391},{"cbsa":"30060","name":"Lebanon, MO","lon":-92.59056,"lat":37.65865},{"cbsa":"30140","name":"Lebanon, PA","lon":-76.45785,"lat":40.36719},{"cbsa":"30220","name":"Levelland, TX","lon":-102.34317,"lat":33.60771},{"cbsa":"30260","name":"Lewisburg, PA","lon":-77.06211,"lat":40.96303},{"cbsa":"30280","name":"Lewisburg, TN","lon":-86.76551,"lat":35.46809},{"cbsa":"30300","name":"Lewiston, ID-WA","lon":-116.94325,"lat":46.26923},{"cbsa":"30340","name":"Lewiston-Auburn, ME","lon":-70.20688,"lat":44.16584},{"cbsa":"30380","name":"Lewistown, PA","lon":-77.61686,"lat":40.61038},{"cbsa":"30420","name":"Lexington, NE","lon":-99.82269,"lat":40.75919},{"cbsa":"30460","name":"Lexington-Fayette, KY","lon":-84.4325,"lat":38.09057},{"cbsa":"30580","name":"Liberal, KS","lon":-100.85108,"lat":37.1933},{"cbsa":"30620","name":"Lima, OH","lon":-84.10584,"lat":40.77152},{"cbsa":"30660","name":"Lincoln, IL","lon":-89.36774,"lat":40.12466},{"cbsa":"30700","name":"Lincoln, NE","lon":-96.87075,"lat":40.81986},{"cbsa":"30780","name":"Little Rock-North Little Rock-Conway, AR","lon":-92.39722,"lat":34.75725},{"cbsa":"30820","name":"Lock Haven, PA","lon":-77.63798,"lat":41.234},{"cbsa":"30860","name":"Logan, UT-ID","lon":-111.76907,"lat":41.8898},{"cbsa":"30880","name":"Logan, WV","lon":-81.93538,"lat":37.83144},{"cbsa":"30900","name":"Logansport, IN","lon":-86.34637,"lat":40.76155},{"cbsa":"30940","name":"London, KY","lon":-84.04739,"lat":36.92143},{"cbsa":"30980","name":"Longview, TX","lon":-94.82934,"lat":32.37249},{"cbsa":"31020","name":"Longview, WA","lon":-122.68102,"lat":46.19325},{"cbsa":"31060","name":"Los Alamos, NM","lon":-106.30732,"lat":35.8695},{"cbsa":"31080","name":"Los Angeles-Long Beach-Anaheim, CA","lon":-118.14932,"lat":34.22097},{"cbsa":"31140","name":"Louisville/Jefferson County, KY-IN","lon":-85.67089,"lat":38.3367},{"cbsa":"31180","name":"Lubbock, TX","lon":-101.64478,"lat":33.46829},{"cbsa":"31220","name":"Ludington, MI","lon":-86.25,"lat":43.99519},{"cbsa":"31260","name":"Lufkin, TX","lon":-94.61101,"lat":31.25458},{"cbsa":"31300","name":"Lumberton, NC","lon":-79.1038,"lat":34.64034},{"cbsa":"31340","name":"Lynchburg, VA","lon":-79.21981,"lat":37.36511},{"cbsa":"31380","name":"Macomb, IL","lon":-90.67776,"lat":40.45675},{"cbsa":"31420","name":"Macon-Bibb County, GA","lon":-83.71483,"lat":32.85762},{"cbsa":"31460","name":"Madera, CA","lon":-119.76243,"lat":37.21816},{"cbsa":"31500","name":"Madison, IN","lon":-85.4378,"lat":38.7855},{"cbsa":"31540","name":"Madison, WI","lon":-89.59212,"lat":43.0801},{"cbsa":"31580","name":"Madisonville, KY","lon":-87.54113,"lat":37.30841},{"cbsa":"31620","name":"Magnolia, AR","lon":-93.22721,"lat":33.21412},{"cbsa":"31660","name":"Malone, NY","lon":-74.30372,"lat":44.59276},{"cbsa":"31680","name":"Malvern, AR","lon":-92.9458,"lat":34.31756},{"cbsa":"31700","name":"Manchester-Nashua, NH","lon":-71.71595,"lat":42.91532},{"cbsa":"31740","name":"Manhattan, KS","lon":-96.50669,"lat":39.34437},{"cbsa":"31820","name":"Manitowoc, WI","lon":-87.80959,"lat":44.11992},{"cbsa":"31860","name":"Mankato-North Mankato, MN","lon":-94.1357,"lat":44.15456},{"cbsa":"31900","name":"Mansfield, OH","lon":-82.53677,"lat":40.77482},{"cbsa":"31930","name":"Marietta, OH","lon":-81.4953,"lat":39.45554},{"cbsa":"31940","name":"Marinette, WI-MI","lon":-87.83104,"lat":45.46655},{"cbsa":"31980","name":"Marion, IN","lon":-85.6547,"lat":40.5159},{"cbsa":"32000","name":"Marion, NC","lon":-82.04908,"lat":35.68159},{"cbsa":"32020","name":"Marion, OH","lon":-83.15984,"lat":40.58744},{"cbsa":"32100","name":"Marquette, MI","lon":-87.64141,"lat":46.43141},{"cbsa":"32140","name":"Marshall, MN","lon":-95.83861,"lat":44.41367},{"cbsa":"32180","name":"Marshall, MO","lon":-93.2019,"lat":39.13678},{"cbsa":"32220","name":"Marshall, TX","lon":-94.37076,"lat":32.54791},{"cbsa":"32260","name":"Marshalltown, IA","lon":-92.99895,"lat":42.03583},{"cbsa":"32280","name":"Martin, TN","lon":-88.71807,"lat":36.29818},{"cbsa":"32300","name":"Martinsville, VA","lon":-79.87391,"lat":36.68266},{"cbsa":"32340","name":"Maryville, MO","lon":-94.88335,"lat":40.36098},{"cbsa":"32380","name":"Mason City, IA","lon":-93.26107,"lat":43.20363},{"cbsa":"32420","name":"Mayagüez, PR","lon":-67.30675,"lat":18.17488},{"cbsa":"32460","name":"Mayfield, KY","lon":-88.6511,"lat":36.72319},{"cbsa":"32500","name":"Maysville, KY","lon":-83.82396,"lat":38.59511},{"cbsa":"32540","name":"McAlester, OK","lon":-95.74803,"lat":34.92378},{"cbsa":"32580","name":"McAllen-Edinburg-Mission, TX","lon":-98.18139,"lat":26.39669},{"cbsa":"32620","name":"McComb, MS","lon":-90.66051,"lat":31.17449},{"cbsa":"32660","name":"McMinnville, TN","lon":-85.77915,"lat":35.67837},{"cbsa":"32700","name":"McPherson, KS","lon":-97.64783,"lat":38.39174},{"cbsa":"32740","name":"Meadville, PA","lon":-80.10621,"lat":41.68474},{"cbsa":"32780","name":"Medford, OR","lon":-122.72834,"lat":42.43214},{"cbsa":"32820","name":"Memphis, TN-MS-AR","lon":-89.81543,"lat":35.00766},{"cbsa":"32860","name":"Menomonie, WI","lon":-91.89644,"lat":44.94661},{"cbsa":"32900","name":"Merced, CA","lon":-120.71732,"lat":37.19198},{"cbsa":"32940","name":"Meridian, MS","lon":-88.66346,"lat":32.41302},{"cbsa":"32980","name":"Merrill, WI","lon":-89.73465,"lat":45.33748},{"cbsa":"33020","name":"Mexico, MO","lon":-91.84162,"lat":39.21595},{"cbsa":"33060","name":"Miami, OK","lon":-94.81044,"lat":36.83558},{"cbsa":"33100","name":"Miami-Fort Lauderdale-West Palm Beach, FL","lon":-80.50479,"lat":26.15622},{"cbsa":"33140","name":"Michigan City-La Porte, IN","lon":-86.73998,"lat":41.54606},{"cbsa":"33180","name":"Middlesborough, KY","lon":-83.67436,"lat":36.73071},{"cbsa":"33220","name":"Midland, MI","lon":-84.38794,"lat":43.64682},{"cbsa":"33260","name":"Midland, TX","lon":-101.99107,"lat":32.08965},{"cbsa":"33300","name":"Milledgeville, GA","lon":-83.08996,"lat":33.19833},{"cbsa":"33340","name":"Milwaukee-Waukesha-West Allis, WI","lon":-88.17279,"lat":43.17655},{"cbsa":"33420","name":"Mineral Wells, TX","lon":-98.31319,"lat":32.75311},{"cbsa":"33460","name":"Minneapolis-St. Paul-Bloomington, MN-WI","lon":-93.34557,"lat":45.06504},{"cbsa":"33500","name":"Minot, ND","lon":-101.20777,"lat":48.31874},{"cbsa":"33540","name":"Missoula, MT","lon":-113.92336,"lat":47.03648},{"cbsa":"33580","name":"Mitchell, SD","lon":-97.96673,"lat":43.67467},{"cbsa":"33620","name":"Moberly, MO","lon":-92.49704,"lat":39.44013},{"cbsa":"33660","name":"Mobile, AL","lon":-88.20662,"lat":30.77909},{"cbsa":"33700","name":"Modesto, CA","lon":-120.99799,"lat":37.55867},{"cbsa":"33740","name":"Monroe, LA","lon":-92.28456,"lat":32.68675},{"cbsa":"33780","name":"Monroe, MI","lon":-83.53778,"lat":41.9283},{"cbsa":"33860","name":"Montgomery, AL","lon":-86.40308,"lat":32.36077},{"cbsa":"33940","name":"Montrose, CO","lon":-108.26876,"lat":38.40245},{"cbsa":"33980","name":"Morehead City, NC","lon":-76.65454,"lat":34.82731},{"cbsa":"34020","name":"Morgan City, LA","lon":-91.4442,"lat":29.70498},{"cbsa":"34060","name":"Morgantown, WV","lon":-79.80398,"lat":39.52716},{"cbsa":"34100","name":"Morristown, TN","lon":-83.38196,"lat":36.11082},{"cbsa":"34140","name":"Moscow, ID","lon":-116.71169,"lat":46.81563},{"cbsa":"34180","name":"Moses Lake, WA","lon":-119.45153,"lat":47.20589},{"cbsa":"34220","name":"Moultrie, GA","lon":-83.76883,"lat":31.18843},{"cbsa":"34260","name":"Mountain Home, AR","lon":-92.33692,"lat":36.28722},{"cbsa":"34300","name":"Mountain Home, ID","lon":-115.46951,"lat":43.35382},{"cbsa":"34340","name":"Mount Airy, NC","lon":-80.68768,"lat":36.41477},{"cbsa":"34380","name":"Mount Pleasant, MI","lon":-84.84663,"lat":43.64065},{"cbsa":"34420","name":"Mount Pleasant, TX","lon":-94.96656,"lat":33.21677},{"cbsa":"34460","name":"Mount Sterling, KY","lon":-83.74878,"lat":38.05163},{"cbsa":"34500","name":"Mount Vernon, IL","lon":-88.92403,"lat":38.30018},{"cbsa":"34540","name":"Mount Vernon, OH","lon":-82.42289,"lat":40.39903},{"cbsa":"34580","name":"Mount Vernon-Anacortes, WA","lon":-121.73276,"lat":48.47939},{"cbsa":"34620","name":"Muncie, IN","lon":-85.39705,"lat":40.22764},{"cbsa":"34660","name":"Murray, KY","lon":-88.27217,"lat":36.62088},{"cbsa":"34700","name":"Muscatine, IA","lon":-91.11276,"lat":41.4839},{"cbsa":"34740","name":"Muskegon, MI","lon":-86.15193,"lat":43.29129},{"cbsa":"34780","name":"Muskogee, OK","lon":-95.37967,"lat":35.61629},{"cbsa":"34820","name":"Myrtle Beach-Conway-North Myrtle Beach, SC-NC","lon":-78.66396,"lat":33.98657},{"cbsa":"34860","name":"Nacogdoches, TX","lon":-94.61595,"lat":31.61617},{"cbsa":"34900","name":"Napa, CA","lon":-122.33057,"lat":38.50633},{"cbsa":"34940","name":"Naples-Immokalee-Marco Island, FL","lon":-81.3476,"lat":26.11067},{"cbsa":"34980","name":"Nashville-Davidson--Murfreesboro--Franklin, TN","lon":-86.72449,"lat":36.08915},{"cbsa":"35020","name":"Natchez, MS-LA","lon":-91.52671,"lat":31.46015},{"cbsa":"35060","name":"Natchitoches, LA","lon":-93.09626,"lat":31.72319},{"cbsa":"35100","name":"New Bern, NC","lon":-77.08091,"lat":35.0995},{"cbsa":"35140","name":"Newberry, SC","lon":-81.59948,"lat":34.28987},{"cbsa":"35220","name":"New Castle, IN","lon":-85.3965,"lat":39.93108},{"cbsa":"35260","name":"New Castle, PA","lon":-80.33428,"lat":40.99126},{"cbsa":"35300","name":"New Haven-Milford, CT","lon":-72.93139,"lat":41.41054},{"cbsa":"35380","name":"New Orleans-Metairie, LA","lon":-89.94768,"lat":29.90479},{"cbsa":"35420","name":"New Philadelphia-Dover, OH","lon":-81.47451,"lat":40.44137},{"cbsa":"35440","name":"Newport, OR","lon":-123.86805,"lat":44.64191},{"cbsa":"35460","name":"Newport, TN","lon":-83.1215,"lat":35.92543},{"cbsa":"35500","name":"Newton, IA","lon":-93.05376,"lat":41.68603},{"cbsa":"35580","name":"New Ulm, MN","lon":-94.72759,"lat":44.24215},{"cbsa":"35620","name":"New York-Newark-Jersey City, NY-NJ-PA","lon":-74.08437,"lat":40.92033},{"cbsa":"35660","name":"Niles-Benton Harbor, MI","lon":-86.41227,"lat":41.95464},{"cbsa":"35700","name":"Nogales, AZ","lon":-110.84651,"lat":31.52596},{"cbsa":"35740","name":"Norfolk, NE","lon":-97.49019,"lat":42.0435},{"cbsa":"35820","name":"North Platte, NE","lon":-100.77551,"lat":41.23429},{"cbsa":"35840","name":"North Port-Sarasota-Bradenton, FL","lon":-82.32249,"lat":27.34777},{"cbsa":"35860","name":"North Vernon, IN","lon":-85.62769,"lat":38.99683},{"cbsa":"35900","name":"North Wilkesboro, NC","lon":-81.16367,"lat":36.20583},{"cbsa":"35940","name":"Norwalk, OH","lon":-82.59857,"lat":41.14653},{"cbsa":"35980","name":"Norwich-New London, CT","lon":-72.10182,"lat":41.48707},{"cbsa":"36020","name":"Oak Harbor, WA","lon":-122.5494,"lat":48.16376},{"cbsa":"36100","name":"Ocala, FL","lon":-82.05677,"lat":29.21034},{"cbsa":"36140","name":"Ocean City, NJ","lon":-74.80056,"lat":39.14891},{"cbsa":"36220","name":"Odessa, TX","lon":-102.54294,"lat":31.86899},{"cbsa":"36260","name":"Ogden-Clearfield, UT","lon":-112.81593,"lat":41.43261},{"cbsa":"36300","name":"Ogdensburg-Massena, NY","lon":-75.06871,"lat":44.49648},{"cbsa":"36340","name":"Oil City, PA","lon":-79.75784,"lat":41.40116},{"cbsa":"36380","name":"Okeechobee, FL","lon":-80.88887,"lat":27.38676},{"cbsa":"36420","name":"Oklahoma City, OK","lon":-97.50404,"lat":35.4296},{"cbsa":"36460","name":"Olean, NY","lon":-78.67895,"lat":42.24842},{"cbsa":"36500","name":"Olympia-Tumwater, WA","lon":-122.83314,"lat":46.92673},{"cbsa":"36540","name":"Omaha-Council Bluffs, NE-IA","lon":-95.99907,"lat":41.29025},{"cbsa":"36580","name":"Oneonta, NY","lon":-75.03246,"lat":42.63433},{"cbsa":"36620","name":"Ontario, OR-ID","lon":-117.58842,"lat":43.22611},{"cbsa":"36660","name":"Opelousas, LA","lon":-92.00552,"lat":30.59882},{"cbsa":"36700","name":"Orangeburg, SC","lon":-80.80032,"lat":33.43909},{"cbsa":"36740","name":"Orlando-Kissimmee-Sanford, FL","lon":-81.3632,"lat":28.43452},{"cbsa":"36780","name":"Oshkosh-Neenah, WI","lon":-88.64469,"lat":44.06887},{"cbsa":"36820","name":"Oskaloosa, IA","lon":-92.64093,"lat":41.33523},{"cbsa":"36830","name":"Othello, WA","lon":-118.56054,"lat":46.98345},{"cbsa":"36840","name":"Ottawa, KS","lon":-95.28624,"lat":38.56427},{"cbsa":"36860","name":"Ottawa-Peru, IL","lon":-89.17364,"lat":41.3571},{"cbsa":"36900","name":"Ottumwa, IA","lon":-92.40982,"lat":40.87922},{"cbsa":"36940","name":"Owatonna, MN","lon":-93.22602,"lat":44.02235},{"cbsa":"36980","name":"Owensboro, KY","lon":-87.06986,"lat":37.69953},{"cbsa":"37020","name":"Owosso, MI","lon":-84.14688,"lat":42.95348},{"cbsa":"37060","name":"Oxford, MS","lon":-89.48479,"lat":34.35668},{"cbsa":"37080","name":"Oxford, NC","lon":-78.65275,"lat":36.3041},{"cbsa":"37100","name":"Oxnard-Thousand Oaks-Ventura, CA","lon":-119.08493,"lat":34.45473},{"cbsa":"37120","name":"Ozark, AL","lon":-85.61096,"lat":31.43172},{"cbsa":"37140","name":"Paducah, KY-IL","lon":-88.67213,"lat":37.13811},{"cbsa":"37220","name":"Pahrump, NV","lon":-116.47175,"lat":38.04213},{"cbsa":"37260","name":"Palatka, FL","lon":-81.74419,"lat":29.60884},{"cbsa":"37300","name":"Palestine, TX","lon":-95.6525,"lat":31.81346},{"cbsa":"37340","name":"Palm Bay-Melbourne-Titusville, FL","lon":-80.73227,"lat":28.29348},{"cbsa":"37420","name":"Pampa, TX","lon":-100.81292,"lat":35.40082},{"cbsa":"37460","name":"Panama City, FL","lon":-85.46522,"lat":30.14017},{"cbsa":"37500","name":"Paragould, AR","lon":-90.55876,"lat":36.11754},{"cbsa":"37540","name":"Paris, TN","lon":-88.301,"lat":36.33177},{"cbsa":"37580","name":"Paris, TX","lon":-95.57095,"lat":33.66709},{"cbsa":"37620","name":"Parkersburg-Vienna, WV","lon":-81.46288,"lat":39.13907},{"cbsa":"37660","name":"Parsons, KS","lon":-95.29766,"lat":37.1913},{"cbsa":"37740","name":"Payson, AZ","lon":-110.8118,"lat":33.79994},{"cbsa":"37780","name":"Pecos, TX","lon":-103.693,"lat":31.32294},{"cbsa":"37800","name":"Pella, IA","lon":-93.09946,"lat":41.33445},{"cbsa":"37860","name":"Pensacola-Ferry Pass-Brent, FL","lon":-87.15592,"lat":30.68746},{"cbsa":"37900","name":"Peoria, IL","lon":-89.51593,"lat":40.78913},{"cbsa":"37940","name":"Peru, IN","lon":-86.04533,"lat":40.76951},{"cbsa":"37980","name":"Philadelphia-Camden-Wilmington, PA-NJ-DE-MD","lon":-75.30339,"lat":39.9047},{"cbsa":"38060","name":"Phoenix-Mesa-Scottsdale, AZ","lon":-112.07055,"lat":33.1858},{"cbsa":"38100","name":"Picayune, MS","lon":-89.58948,"lat":30.76896},{"cbsa":"38180","name":"Pierre, SD","lon":-100.37006,"lat":44.50302},{"cbsa":"38220","name":"Pine Bluff, AR","lon":-91.94989,"lat":34.07735},{"cbsa":"38240","name":"Pinehurst-Southern Pines, NC","lon":-79.48204,"lat":35.31104},{"cbsa":"38260","name":"Pittsburg, KS","lon":-94.85186,"lat":37.50731},{"cbsa":"38300","name":"Pittsburgh, PA","lon":-79.83104,"lat":40.43901},{"cbsa":"38340","name":"Pittsfield, MA","lon":-73.20618,"lat":42.37061},{"cbsa":"38380","name":"Plainview, TX","lon":-101.82681,"lat":34.07045},{"cbsa":"38420","name":"Platteville, WI","lon":-90.70611,"lat":42.86764},{"cbsa":"38460","name":"Plattsburgh, NY","lon":-73.67828,"lat":44.74607},{"cbsa":"38500","name":"Plymouth, IN","lon":-86.26179,"lat":41.32486},{"cbsa":"38540","name":"Pocatello, ID","lon":-112.22466,"lat":42.66862},{"cbsa":"38580","name":"Point Pleasant, WV-OH","lon":-82.17606,"lat":38.79809},{"cbsa":"38620","name":"Ponca City, OK","lon":-97.1438,"lat":36.81803},{"cbsa":"38660","name":"Ponce, PR","lon":-66.6836,"lat":18.05798},{"cbsa":"38700","name":"Pontiac, IL","lon":-88.5578,"lat":40.89169},{"cbsa":"38740","name":"Poplar Bluff, MO","lon":-90.40673,"lat":36.71645},{"cbsa":"38780","name":"Portales, NM","lon":-103.48007,"lat":34.02121},{"cbsa":"38820","name":"Port Angeles, WA","lon":-123.92772,"lat":48.04912},{"cbsa":"38840","name":"Port Clinton, OH","lon":-83.10987,"lat":41.53728},{"cbsa":"38860","name":"Portland-South Portland, ME","lon":-70.45614,"lat":43.69739},{"cbsa":"38900","name":"Portland-Vancouver-Hillsboro, OR-WA","lon":-122.47859,"lat":45.59817},{"cbsa":"38920","name":"Port Lavaca, TX","lon":-96.60474,"lat":28.5035},{"cbsa":"38940","name":"Port St. Lucie, FL","lon":-80.45022,"lat":27.22018},{"cbsa":"39020","name":"Portsmouth, OH","lon":-82.99329,"lat":38.80404},{"cbsa":"39060","name":"Pottsville, PA","lon":-76.21629,"lat":40.70571},{"cbsa":"39140","name":"Prescott, AZ","lon":-112.55398,"lat":34.5997},{"cbsa":"39220","name":"Price, UT","lon":-110.58851,"lat":39.64818},{"cbsa":"39260","name":"Prineville, OR","lon":-120.3565,"lat":44.14227},{"cbsa":"39300","name":"Providence-Warwick, RI-MA","lon":-71.39976,"lat":41.7181},{"cbsa":"39340","name":"Provo-Orem, UT","lon":-112.35233,"lat":39.86453},{"cbsa":"39380","name":"Pueblo, CO","lon":-104.51255,"lat":38.17346},{"cbsa":"39420","name":"Pullman, WA","lon":-117.52303,"lat":46.90132},{"cbsa":"39460","name":"Punta Gorda, FL","lon":-81.91193,"lat":26.90578},{"cbsa":"39500","name":"Quincy, IL-MO","lon":-91.38586,"lat":40.02828},{"cbsa":"39540","name":"Racine, WI","lon":-88.06146,"lat":42.74743},{"cbsa":"39580","name":"Raleigh, NC","lon":-78.46069,"lat":35.75726},{"cbsa":"39660","name":"Rapid City, SD","lon":-102.89979,"lat":44.19174},{"cbsa":"39700","name":"Raymondville, TX","lon":-97.65711,"lat":26.47044},{"cbsa":"39740","name":"Reading, PA","lon":-75.92604,"lat":40.41626},{"cbsa":"39780","name":"Red Bluff, CA","lon":-122.23383,"lat":40.12551},{"cbsa":"39820","name":"Redding, CA","lon":-122.04054,"lat":40.76385},{"cbsa":"39860","name":"Red Wing, MN","lon":-92.72251,"lat":44.4098},{"cbsa":"39900","name":"Reno, NV","lon":-119.65916,"lat":40.61906},{"cbsa":"39940","name":"Rexburg, ID","lon":-111.51728,"lat":44.14067},{"cbsa":"39980","name":"Richmond, IN","lon":-85.00995,"lat":39.86416},{"cbsa":"40060","name":"Richmond, VA","lon":-77.47333,"lat":37.46197},{"cbsa":"40080","name":"Richmond-Berea, KY","lon":-84.29348,"lat":37.57251},{"cbsa":"40100","name":"Rio Grande City, TX","lon":-98.73826,"lat":26.56224},{"cbsa":"40140","name":"Riverside-San Bernardino-Ontario, CA","lon":-116.12967,"lat":34.5517},{"cbsa":"40180","name":"Riverton, WY","lon":-108.63043,"lat":43.04055},{"cbsa":"40220","name":"Roanoke, VA","lon":-79.94619,"lat":37.28623},{"cbsa":"40260","name":"Roanoke Rapids, NC","lon":-77.54164,"lat":36.32643},{"cbsa":"40300","name":"Rochelle, IL","lon":-89.32036,"lat":42.04259},{"cbsa":"40340","name":"Rochester, MN","lon":-92.33803,"lat":43.95601},{"cbsa":"40380","name":"Rochester, NY","lon":-77.50784,"lat":42.96589},{"cbsa":"40420","name":"Rockford, IL","lon":-89.04237,"lat":42.33164},{"cbsa":"40460","name":"Rockingham, NC","lon":-79.74757,"lat":35.00605},{"cbsa":"40540","name":"Rock Springs, WY","lon":-108.87931,"lat":41.65972},{"cbsa":"40580","name":"Rocky Mount, NC","lon":-77.79857,"lat":35.94134},{"cbsa":"40620","name":"Rolla, MO","lon":-91.79241,"lat":37.87732},{"cbsa":"40660","name":"Rome, GA","lon":-85.2144,"lat":34.26309},{"cbsa":"40700","name":"Roseburg, OR","lon":-123.16639,"lat":43.27975},{"cbsa":"40740","name":"Roswell, NM","lon":-104.46695,"lat":33.36319},{"cbsa":"40760","name":"Ruidoso, NM","lon":-105.45907,"lat":33.74529},{"cbsa":"40780","name":"Russellville, AR","lon":-93.23461,"lat":35.21106},{"cbsa":"40820","name":"Ruston, LA","lon":-92.66457,"lat":32.60158},{"cbsa":"40860","name":"Rutland, VT","lon":-73.03686,"lat":43.58029},{"cbsa":"40900","name":"Sacramento--Roseville--Arden-Arcade, CA","lon":-120.99745,"lat":38.78034},{"cbsa":"40940","name":"Safford, AZ","lon":-109.88748,"lat":32.93232},{"cbsa":"40980","name":"Saginaw, MI","lon":-84.05291,"lat":43.33494},{"cbsa":"41060","name":"St. Cloud, MN","lon":-94.47216,"lat":45.58578},{"cbsa":"41100","name":"St. George, UT","lon":-113.50475,"lat":37.28037},{"cbsa":"41140","name":"St. Joseph, MO-KS","lon":-94.7835,"lat":39.83394},{"cbsa":"41180","name":"St. Louis, MO-IL","lon":-90.35019,"lat":38.73514},{"cbsa":"41220","name":"St. Marys, GA","lon":-81.67036,"lat":30.93042},{"cbsa":"41260","name":"St. Marys, PA","lon":-78.64919,"lat":41.42543},{"cbsa":"41400","name":"Salem, OH","lon":-80.77709,"lat":40.76853},{"cbsa":"41420","name":"Salem, OR","lon":-122.90307,"lat":44.90326},{"cbsa":"41460","name":"Salina, KS","lon":-97.64995,"lat":38.95854},{"cbsa":"41500","name":"Salinas, CA","lon":-121.23835,"lat":36.21693},{"cbsa":"41540","name":"Salisbury, MD-DE","lon":-75.47305,"lat":38.41345},{"cbsa":"41620","name":"Salt Lake City, UT","lon":-113.01057,"lat":40.47052},{"cbsa":"41660","name":"San Angelo, TX","lon":-100.67259,"lat":31.36382},{"cbsa":"41700","name":"San Antonio-New Braunfels, TX","lon":-98.60216,"lat":29.42863},{"cbsa":"41740","name":"San Diego-Carlsbad, CA","lon":-116.73547,"lat":33.03388},{"cbsa":"41760","name":"Sandpoint, ID","lon":-116.6013,"lat":48.30007},{"cbsa":"41780","name":"Sandusky, OH","lon":-82.63822,"lat":41.37433},{"cbsa":"41820","name":"Sanford, NC","lon":-79.17165,"lat":35.4749},{"cbsa":"41860","name":"San Francisco-Oakland-Hayward, CA","lon":-122.16705,"lat":37.78109},{"cbsa":"41900","name":"San Germán, PR","lon":-67.06203,"lat":18.05662},{"cbsa":"41940","name":"San Jose-Sunnyvale-Santa Clara, CA","lon":-121.37506,"lat":36.9093},{"cbsa":"41980","name":"San Juan-Carolina-Caguas, PR","lon":-66.10929,"lat":18.27608},{"cbsa":"42020","name":"San Luis Obispo-Paso Robles-Arroyo Grande, CA","lon":-120.4042,"lat":35.38696},{"cbsa":"42100","name":"Santa Cruz-Watsonville, CA","lon":-122.00108,"lat":37.05609},{"cbsa":"42140","name":"Santa Fe, NM","lon":-105.97636,"lat":35.50697},{"cbsa":"42180","name":"Santa Isabel, PR","lon":-66.38862,"lat":17.99548},{"cbsa":"42200","name":"Santa Maria-Santa Barbara, CA","lon":-120.0151,"lat":34.67137},{"cbsa":"42220","name":"Santa Rosa, CA","lon":-122.88737,"lat":38.52852},{"cbsa":"42300","name":"Sault Ste. Marie, MI","lon":-84.56283,"lat":46.30033},{"cbsa":"42340","name":"Savannah, GA","lon":-81.3018,"lat":32.13058},{"cbsa":"42380","name":"Sayre, PA","lon":-76.51549,"lat":41.78868},{"cbsa":"42420","name":"Scottsbluff, NE","lon":-103.73837,"lat":42.15949},{"cbsa":"42460","name":"Scottsboro, AL","lon":-85.99902,"lat":34.77967},{"cbsa":"42540","name":"Scranton--Wilkes-Barre--Hazleton, PA","lon":-75.89558,"lat":41.32306},{"cbsa":"42620","name":"Searcy, AR","lon":-91.74548,"lat":35.25601},{"cbsa":"42660","name":"Seattle-Tacoma-Bellevue, WA","lon":-121.85418,"lat":47.55648},{"cbsa":"42680","name":"Sebastian-Vero Beach, FL","lon":-80.60675,"lat":27.6941},{"cbsa":"42700","name":"Sebring, FL","lon":-81.34103,"lat":27.34279},{"cbsa":"42740","name":"Sedalia, MO","lon":-93.28506,"lat":38.72819},{"cbsa":"42780","name":"Selinsgrove, PA","lon":-77.07043,"lat":40.77005},{"cbsa":"42820","name":"Selma, AL","lon":-87.10652,"lat":32.32607},{"cbsa":"42860","name":"Seneca, SC","lon":-83.0661,"lat":34.75341},{"cbsa":"42900","name":"Seneca Falls, NY","lon":-76.82368,"lat":42.78048},{"cbsa":"42940","name":"Sevierville, TN","lon":-83.52395,"lat":35.78462},{"cbsa":"42980","name":"Seymour, IN","lon":-86.0374,"lat":38.90622},{"cbsa":"43020","name":"Shawano, WI","lon":-88.7491,"lat":44.85092},{"cbsa":"43060","name":"Shawnee, OK","lon":-96.94843,"lat":35.20677},{"cbsa":"43100","name":"Sheboygan, WI","lon":-87.94566,"lat":43.72109},{"cbsa":"43140","name":"Shelby, NC","lon":-81.55597,"lat":35.33404},{"cbsa":"43180","name":"Shelbyville, TN","lon":-86.45908,"lat":35.51412},{"cbsa":"43220","name":"Shelton, WA","lon":-123.19207,"lat":47.34801},{"cbsa":"43260","name":"Sheridan, WY","lon":-106.87974,"lat":44.7903},{"cbsa":"43300","name":"Sherman-Denison, TX","lon":-96.67775,"lat":33.62703},{"cbsa":"43320","name":"Show Low, AZ","lon":-110.3214,"lat":35.39973},{"cbsa":"43340","name":"Shreveport-Bossier City, LA","lon":-93.66893,"lat":32.48952},{"cbsa":"43380","name":"Sidney, OH","lon":-84.20473,"lat":40.33147},{"cbsa":"43420","name":"Sierra Vista-Douglas, AZ","lon":-109.75104,"lat":31.87909},{"cbsa":"43460","name":"Sikeston, MO","lon":-89.56857,"lat":37.05285},{"cbsa":"43500","name":"Silver City, NM","lon":-108.38262,"lat":32.73875},{"cbsa":"43580","name":"Sioux City, IA-NE-SD","lon":-96.37276,"lat":42.57887},{"cbsa":"43620","name":"Sioux Falls, SD","lon":-96.99004,"lat":43.49965},{"cbsa":"43660","name":"Snyder, TX","lon":-100.91627,"lat":32.74614},{"cbsa":"43700","name":"Somerset, KY","lon":-84.57716,"lat":37.10381},{"cbsa":"43740","name":"Somerset, PA","lon":-79.02837,"lat":39.97257},{"cbsa":"43760","name":"Sonora, CA","lon":-119.95513,"lat":38.02749},{"cbsa":"43780","name":"South Bend-Mishawaka, IN-MI","lon":-86.13424,"lat":41.77364},{"cbsa":"43900","name":"Spartanburg, SC","lon":-81.84713,"lat":34.83816},{"cbsa":"43940","name":"Spearfish, SD","lon":-103.79211,"lat":44.35863},{"cbsa":"43980","name":"Spencer, IA","lon":-95.15096,"lat":43.08247},{"cbsa":"44020","name":"Spirit Lake, IA","lon":-95.15088,"lat":43.37783},{"cbsa":"44060","name":"Spokane-Spokane Valley, WA","lon":-117.57181,"lat":48.19372},{"cbsa":"44100","name":"Springfield, IL","lon":-89.6967,"lat":39.82939},{"cbsa":"44140","name":"Springfield, MA","lon":-72.64598,"lat":42.23017},{"cbsa":"44180","name":"Springfield, MO","lon":-93.17707,"lat":37.3618},{"cbsa":"44220","name":"Springfield, OH","lon":-83.7838,"lat":39.91674},{"cbsa":"44260","name":"Starkville, MS","lon":-88.87932,"lat":33.42499},{"cbsa":"44300","name":"State College, PA","lon":-77.82023,"lat":40.91939},{"cbsa":"44340","name":"Statesboro, GA","lon":-81.74289,"lat":32.39695},{"cbsa":"44420","name":"Staunton-Waynesboro, VA","lon":-79.12931,"lat":38.16325},{"cbsa":"44460","name":"Steamboat Springs, CO","lon":-106.99151,"lat":40.4855},{"cbsa":"44500","name":"Stephenville, TX","lon":-98.21778,"lat":32.23607},{"cbsa":"44540","name":"Sterling, CO","lon":-103.11011,"lat":40.72464},{"cbsa":"44580","name":"Sterling, IL","lon":-89.91394,"lat":41.75634},{"cbsa":"44620","name":"Stevens Point, WI","lon":-89.5017,"lat":44.47615},{"cbsa":"44660","name":"Stillwater, OK","lon":-96.97543,"lat":36.07718},{"cbsa":"44700","name":"Stockton-Lodi, CA","lon":-121.27113,"lat":37.93459},{"cbsa":"44740","name":"Storm Lake, IA","lon":-95.151,"lat":42.73546},{"cbsa":"44780","name":"Sturgis, MI","lon":-85.5281,"lat":41.91446},{"cbsa":"44860","name":"Sulphur Springs, TX","lon":-95.56432,"lat":33.14946},{"cbsa":"44900","name":"Summerville, GA","lon":-85.34525,"lat":34.47524},{"cbsa":"44920","name":"Summit Park, UT","lon":-110.95621,"lat":40.86832},{"cbsa":"44940","name":"Sumter, SC","lon":-80.38213,"lat":33.91598},{"cbsa":"44980","name":"Sunbury, PA","lon":-76.70913,"lat":40.85185},{"cbsa":"45000","name":"Susanville, CA","lon":-120.59439,"lat":40.6734},{"cbsa":"45020","name":"Sweetwater, TX","lon":-100.40618,"lat":32.3037},{"cbsa":"45060","name":"Syracuse, NY","lon":-76.03362,"lat":43.15451},{"cbsa":"45140","name":"Tahlequah, OK","lon":-94.99949,"lat":35.90657},{"cbsa":"45180","name":"Talladega-Sylacauga, AL","lon":-86.20387,"lat":33.17346},{"cbsa":"45220","name":"Tallahassee, FL","lon":-84.2862,"lat":30.40418},{"cbsa":"45300","name":"Tampa-St. Petersburg-Clearwater, FL","lon":-82.40829,"lat":28.15426},{"cbsa":"45340","name":"Taos, NM","lon":-105.63096,"lat":36.57824},{"cbsa":"45380","name":"Taylorville, IL","lon":-89.27752,"lat":39.54591},{"cbsa":"45460","name":"Terre Haute, IN","lon":-87.34342,"lat":39.39315},{"cbsa":"45500","name":"Texarkana, TX-AR","lon":-94.21429,"lat":33.4738},{"cbsa":"45520","name":"The Dalles, OR","lon":-121.16765,"lat":45.15986},{"cbsa":"45540","name":"The Villages, FL","lon":-82.08086,"lat":28.70478},{"cbsa":"45580","name":"Thomaston, GA","lon":-84.29969,"lat":32.88089},{"cbsa":"45620","name":"Thomasville, GA","lon":-83.91932,"lat":30.86395},{"cbsa":"45660","name":"Tiffin, OH","lon":-83.12768,"lat":41.12379},{"cbsa":"45700","name":"Tifton, GA","lon":-83.52672,"lat":31.45712},{"cbsa":"45740","name":"Toccoa, GA","lon":-83.29303,"lat":34.55398},{"cbsa":"45780","name":"Toledo, OH","lon":-83.78176,"lat":41.49878},{"cbsa":"45820","name":"Topeka, KS","lon":-95.80296,"lat":39.04374},{"cbsa":"45860","name":"Torrington, CT","lon":-73.24536,"lat":41.79242},{"cbsa":"45900","name":"Traverse City, MI","lon":-85.55172,"lat":44.72556},{"cbsa":"45940","name":"Trenton, NJ","lon":-74.70201,"lat":40.2831},{"cbsa":"45980","name":"Troy, AL","lon":-85.94087,"lat":31.8023},{"cbsa":"46020","name":"Truckee-Grass Valley, CA","lon":-120.76823,"lat":39.30153},{"cbsa":"46060","name":"Tucson, AZ","lon":-111.78953,"lat":32.09746},{"cbsa":"46100","name":"Tullahoma-Manchester, TN","lon":-86.11595,"lat":35.29788},{"cbsa":"46140","name":"Tulsa, OK","lon":-96.16629,"lat":36.25036},{"cbsa":"46180","name":"Tupelo, MS","lon":-88.68458,"lat":34.26468},{"cbsa":"46220","name":"Tuscaloosa, AL","lon":-87.72173,"lat":33.16794},{"cbsa":"46300","name":"Twin Falls, ID","lon":-114.5714,"lat":42.43611},{"cbsa":"46340","name":"Tyler, TX","lon":-95.26922,"lat":32.37533},{"cbsa":"46380","name":"Ukiah, CA","lon":-123.39147,"lat":39.44028},{"cbsa":"46460","name":"Union City, TN-KY","lon":-89.15997,"lat":36.41581},{"cbsa":"46500","name":"Urbana, OH","lon":-83.76966,"lat":40.13776},{"cbsa":"46520","name":"Urban Honolulu, HI","lon":-157.97469,"lat":21.4588},{"cbsa":"46540","name":"Utica-Rome, NY","lon":-75.18136,"lat":43.33742},{"cbsa":"46620","name":"Uvalde, TX","lon":-99.76229,"lat":29.3574},{"cbsa":"46660","name":"Valdosta, GA","lon":-83.24198,"lat":30.82925},{"cbsa":"46700","name":"Vallejo-Fairfield, CA","lon":-121.93306,"lat":38.27022},{"cbsa":"46740","name":"Valley, AL","lon":-85.39185,"lat":32.91366},{"cbsa":"46780","name":"Van Wert, OH","lon":-84.58608,"lat":40.85554},{"cbsa":"46820","name":"Vermillion, SD","lon":-96.9756,"lat":42.91462},{"cbsa":"46860","name":"Vernal, UT","lon":-109.5182,"lat":40.12632},{"cbsa":"46900","name":"Vernon, TX","lon":-99.24102,"lat":34.08086},{"cbsa":"46980","name":"Vicksburg, MS","lon":-90.87861,"lat":32.18522},{"cbsa":"47020","name":"Victoria, TX","lon":-97.19505,"lat":28.72782},{"cbsa":"47080","name":"Vidalia, GA","lon":-82.41209,"lat":32.14222},{"cbsa":"47180","name":"Vincennes, IN","lon":-87.41827,"lat":38.69086},{"cbsa":"47220","name":"Vineland-Bridgeton, NJ","lon":-75.11105,"lat":39.37346},{"cbsa":"47240","name":"Vineyard Haven, MA","lon":-70.65383,"lat":41.39791},{"cbsa":"47260","name":"Virginia Beach-Norfolk-Newport News, VA-NC","lon":-76.45292,"lat":36.83444},{"cbsa":"47300","name":"Visalia-Porterville, CA","lon":-118.8008,"lat":36.21987},{"cbsa":"47340","name":"Wabash, IN","lon":-85.79407,"lat":40.84571},{"cbsa":"47380","name":"Waco, TX","lon":-97.08998,"lat":31.42643},{"cbsa":"47420","name":"Wahpeton, ND-MN","lon":-96.78393,"lat":46.29627},{"cbsa":"47460","name":"Walla Walla, WA","lon":-118.24896,"lat":46.25715},{"cbsa":"47540","name":"Wapakoneta, OH","lon":-84.22214,"lat":40.56096},{"cbsa":"47580","name":"Warner Robins, GA","lon":-83.63682,"lat":32.40769},{"cbsa":"47620","name":"Warren, PA","lon":-79.27404,"lat":41.81381},{"cbsa":"47660","name":"Warrensburg, MO","lon":-93.80632,"lat":38.744},{"cbsa":"47700","name":"Warsaw, IN","lon":-85.86068,"lat":41.24415},{"cbsa":"47780","name":"Washington, IN","lon":-87.07252,"lat":38.70254},{"cbsa":"47820","name":"Washington, NC","lon":-76.85923,"lat":35.49406},{"cbsa":"47900","name":"Washington-Arlington-Alexandria, DC-VA-MD-WV","lon":-77.47405,"lat":38.83342},{"cbsa":"47920","name":"Washington Court House, OH","lon":-83.45609,"lat":39.56024},{"cbsa":"47940","name":"Waterloo-Cedar Falls, IA","lon":-92.47111,"lat":42.53623},{"cbsa":"47980","name":"Watertown, SD","lon":-97.1886,"lat":44.97791},{"cbsa":"48020","name":"Watertown-Fort Atkinson, WI","lon":-88.7758,"lat":43.02077},{"cbsa":"48060","name":"Watertown-Fort Drum, NY","lon":-75.93115,"lat":44.04805},{"cbsa":"48100","name":"Wauchula, FL","lon":-81.80968,"lat":27.4932},{"cbsa":"48140","name":"Wausau, WI","lon":-89.75908,"lat":44.8983},{"cbsa":"48180","name":"Waycross, GA","lon":-82.36589,"lat":31.1375},{"cbsa":"48220","name":"Weatherford, OK","lon":-99.0014,"lat":35.63865},{"cbsa":"48260","name":"Weirton-Steubenville, WV-OH","lon":-80.70446,"lat":40.38786},{"cbsa":"48300","name":"Wenatchee, WA","lon":-120.26596,"lat":47.81863},{"cbsa":"48460","name":"West Plains, MO","lon":-91.88654,"lat":36.77419},{"cbsa":"48500","name":"West Point, MS","lon":-88.7819,"lat":33.65582},{"cbsa":"48540","name":"Wheeling, WV-OH","lon":-80.84121,"lat":39.97449},{"cbsa":"48580","name":"Whitewater-Elkhorn, WI","lon":-88.54226,"lat":42.66847},{"cbsa":"48620","name":"Wichita, KS","lon":-97.3982,"lat":37.62506},{"cbsa":"48660","name":"Wichita Falls, TX","lon":-98.49148,"lat":33.77493},{"cbsa":"48700","name":"Williamsport, PA","lon":-77.06521,"lat":41.34388},{"cbsa":"48780","name":"Williston, ND","lon":-103.48009,"lat":48.34351},{"cbsa":"48820","name":"Willmar, MN","lon":-95.00455,"lat":45.15265},{"cbsa":"48900","name":"Wilmington, NC","lon":-77.90124,"lat":34.46634},{"cbsa":"48940","name":"Wilmington, OH","lon":-83.80826,"lat":39.4149},{"cbsa":"48980","name":"Wilson, NC","lon":-77.91896,"lat":35.7052},{"cbsa":"49020","name":"Winchester, VA-WV","lon":-78.47395,"lat":39.27227},{"cbsa":"49080","name":"Winnemucca, NV","lon":-118.11181,"lat":41.40638},{"cbsa":"49100","name":"Winona, MN","lon":-91.77917,"lat":43.98685},{"cbsa":"49180","name":"Winston-Salem, NC","lon":-80.34551,"lat":36.07623},{"cbsa":"49220","name":"Wisconsin Rapids-Marshfield, WI","lon":-90.04153,"lat":44.45535},{"cbsa":"49260","name":"Woodward, OK","lon":-99.26488,"lat":36.4227},{"cbsa":"49300","name":"Wooster, OH","lon":-81.8878,"lat":40.82902},{"cbsa":"49340","name":"Worcester, MA-CT","lon":-71.92734,"lat":42.22282},{"cbsa":"49380","name":"Worthington, MN","lon":-95.75328,"lat":43.6742},{"cbsa":"49420","name":"Yakima, WA","lon":-120.73844,"lat":46.45709},{"cbsa":"49460","name":"Yankton, SD","lon":-97.39494,"lat":43.00895},{"cbsa":"49620","name":"York-Hanover, PA","lon":-76.726,"lat":39.91997},{"cbsa":"49660","name":"Youngstown-Warren-Boardman, OH-PA","lon":-80.56792,"lat":41.238},{"cbsa":"49700","name":"Yuba City, CA","lon":-121.51849,"lat":39.15473},{"cbsa":"49740","name":"Yuma, AZ","lon":-113.9059,"lat":32.76931},{"cbsa":"49780","name":"Zanesville, OH","lon":-81.94454,"lat":39.96587},{"cbsa":"49820","name":"Zapata, TX","lon":-99.16859,"lat":27.00077}]
	;

	function seq4(container, i){

	    //one time setup
	    var wrap = d3.select(container).attr("id","sequence-1").append("div").classed("chart-view big-chart",true);

	    wrap.append("div").classed("sticky-chart-title",true).append("p").html("Job density trends varied among large metro areas from 2004 to 2015");

	    var t94 = geos_cbsa.filter(function(d){return naics00.hasOwnProperty(d.cbsa)});

	    var plus = d3.interpolateRgb("#ffffff", "#3461B7");
	    var minus = d3.interpolateRgb("#ffffff", "#E50374");

	    var main_fill = function(d){
	        var col = "#dddddd";
	        try{
	            var v = naics00[d].actual;
	            if(v >= 0.3){
	                col = plus(1);
	            }
	            else if(v >= 0.1){
	                col = plus(0.6);
	            }
	            else if(v >= 0){
	                col = plus(0.25);
	            }
	            else if(v >= -0.1){
	                col = minus(0.25);
	            }
	            else if(v >= -0.3){
	                col = minus(0.6);
	            }
	            else if(v < -0.3){
	                col = minus(1);
	            }
	        }
	        catch(e){
	            col = "#dddddd";
	        }
	        
	        return col;
	    };    

	    var main_map = map(wrap.append("div").node());
	    wrap.append("div").classed("legend",true).append("div").classed("map-legend",true);

	    var state_layer = main_map.add_states(geos_state, function(d){return d.properties.geo_id}).attr({fill:"#ffffff", stroke:"#aaaaaa"});
	    
	    var cbsa_layer = main_map.add_points(t94, function(d){return d.cbsa}, function(d){return [d.lon, d.lat]})
	                                .attr({fill:main_fill, "fill-opacity":"0.85", "stroke-width":"1", stroke: function(c){return d3.color(main_fill(c)).darker()}, r:"6", "pointer-events":"all"})
	                                .labels(function(cbsa){return metro_names[cbsa]}, [7,5], {"font-size":"15px", "opacity":"0"});

	    main_map.print();

	    var labels = cbsa_layer.labels();
	    var points = cbsa_layer.points();
	    var mapaspect = 1.8;
	    var vpw;

	    function redraw(){
	        vpw = this.vw;
	        var h = this.gh - 250;
	        if(h < 300){h = 300;}
	        var w0 = h*mapaspect;
	        var w1 = this.vw > 900 ? 900 : this.vw;
	        w1 = w1 - 30; //subtract padding

	        var w = Math.min(w0, w1);

	        main_map.print(w);
	    }

	    var current_view = null;

	    function step(vn, s, c){
	        if(c != "exit" && vn!== current_view){
	            wrap.style("opacity",1);

	            if(vn == 0){
	                points.style("opacity", function(d){return naics00[d.key].actual >= 0 ? 1 : 1});
	            }
	            else if(vn == 1){
	                points.style("opacity", function(d){return naics00[d.key].actual >= 0 ? 1 : 0.25});
	                labels.style("opacity", function(d){return d.key in {41860:1, 46520:1, 16740:1, 37100:1, 10580:1} && vpw > 925 ? 1 : 0});
	            }
	            else if(vn == 2){
	                points.style("opacity", function(d){return naics00[d.key].actual >= 0 ? 0.25 : 1});
	                labels.style("opacity", function(d){return d.key in {15980:1, 42540:1, 35300:1, 40380:1, 40900:1, 49660:1} && vpw >= 925 ? 1 : 0});
	            }
	            
	            current_view = vn;
	        }
	    }


	    var views = [
	        {
	            text:["Although metropolitan America as a whole saw a notable and greater-than-expected increase in job density, trends across individual metro areas varied considerably."],
	            step: function(s, c){step(0, s, c);},
	            exit:function(){
	                wrap.style("opacity",null);
	                current_view = null;
	            }
	        },
	        {
	            text:["Out of the 94 large metro areas in our study, only 48 posted an increase in job density from 2004 to 2015. Of those, 14 metro areas saw job density increases that exceeded the 94-metro area average, led by San Francisco, Honolulu, Oxnard, Calif., Charlotte, N.C., and Albany, N.Y.", "For instance, Charlotte’s job density increased by 44% to 8,092 jobs per square mile. Most of this increase was driven by job growth patterns in already dense parts of the metro." ],
	            step: function(s, c){step(1, s, c);}
	        },
	        {
	            text: ["Meanwhile, 46 metro areas saw job density decline, though most declines were relatively modest. However, six metro areas saw declines greater than 30%, including Scranton, Pa., Cape Coral, Fla., New Haven, Conn., Rochester, N.Y., Sacramento, Calif., and Youngstown, Ohio.", "From 2004 to 2015, Cape Coral saw its job density decline by about 31% to 1,694 jobs per square mile. This decrease was largely driven by new jobs that spread out to less-dense parts of the metro area."],
	            step: function(s, c){step(2, s, c);}
	        }

	    ];

	    return {resize:redraw, views:views};

	}

	function seq5(container, i){

	    var data = sector_counts.slice(0).filter(function(d){return d.naics != "00"}).sort(function(a,b){return d3.descending(a.p, b.p)});

	    //one time setup
	    var wrap = d3.select(container).append("div").classed("chart-view",true);

	    var title = wrap.append("div").classed("sticky-chart-title",true).append("p").html("Most sectors’ job density increases were driven by a minority of metro areas ");

	    var svg = wrap.append("div").style("margin","0px auto").append("svg").attr("viewBox", "0 0 320 240");
	    var padding = {top:55, right:25, bottom: 5, left: 165 };

	    var g_main = svg.append("g").attr("transform", "translate(" + padding.left + ", " + padding.top + ")");

	    var g_x_axis = g_main.append("g").classed("axis-group",true);
	    var g_back = g_main.append("g");
	    var g_trend = g_main.append("g");
	    
	    var groups = g_trend.selectAll("g").data(data).enter().append("g");

	    var rects = groups.selectAll("rect").data(function(d){return [d]})
	                                .enter().append("rect").attr("height",10).attr("x","0").attr("y","0")
	                                .attr("fill", palette.job_density.darkblue).style("shape-rendering","crispEdges")
	                                ;

	    var scale_x = d3.scaleLinear().domain([0, 1]);
	    var axis_x = d3.axisTop(scale_x).ticks(5).tickFormat(function(v){return Math.round(v*100)+"%"});

	    var axis_title = svg.append("text").attr("y",15).attr("text-anchor","end").style("font-size","15px").style("fill","#555555");
	    axis_title.append("tspan").text("% of metro areas where job density increased");

	    var gridlines = g_back.selectAll("path").data(scale_x.ticks(5)).enter().append("path")
	                        .attr("stroke", function(d){return d==0 ? "#aaaaaa" : "#dddddd"})
	                        .style("shape-rendering","crispEdges");

	    var group_labels = groups.append("text").text(function(d){return sector_names[d.naics]})
	                              .attr("x", "0")
	                              .attr("dx","-5")
	                              .attr("dy","5").attr("text-anchor","end")
	                              ;

	    var group_h;

	    function redraw(){
	        var wh = special_dims(this);
	        var w = wh.w;
	        var h = wh.h;

	        scale_x.range([0, w - padding.right - padding.left]);
	        
	        group_h = Math.floor((h-padding.top-padding.bottom)/data.length);
	        var group_h2 = Math.floor(group_h/2) + 0.5;

	        groups.interrupt().transition().duration(0).attr("transform", function(d,i){return "translate(0," + ((i*group_h)+group_h2) + ")"});

	        svg.attr("viewBox", "0 0 " + w + " " + h);

	        gridlines.attr("d", function(d){
	            var x = Math.floor(scale_x(d))+0.5;
	            return "M" + x + "," + "0" + " l0," + (h - padding.bottom);
	        });

	        axis_x(g_x_axis);

	        axis_title.attr("x", 150 + scale_x(1));

	        var half_height = Math.floor(group_h/2);

	        rects.attr("height", half_height).attr("width", function(d){return scale_x(d.p / d.n)});
	        group_labels.attr("dy", half_height-2);
	        
	    }
	    var current_view = null;

	    function step(vn, s, c){

	        if(c != "exit" && vn!== current_view){
	            wrap.style("opacity",1);
	            groups.style("opacity", function(d,i){
	                if(vn == 0);
	                else if(vn == 1){
	                    return d.p >= 50 ? 1 : 0.25;
	                }
	                else if(vn == 2){
	                    return d.naics == 51 || d.naics == 31 || d.naics == 48 ? 1 : 0.25;
	                }
	            });

	            //title.text(titles[0])
	            current_view = vn;
	        }
	    }


	    var views = [
	        {
	            text:["In most sectors, the job density increases seen across metropolitan America as a whole were driven by a rather narrow set of metro areas."],
	            step:function(s, c){step(0, s, c);},
	            exit:function(){
	                wrap.style("opacity",0.25);
	                current_view = null;
	            }
	        },
	        {
	            text:["Across the 94 large metro areas, only two sectors of the economy saw widespread increases in perceived job density from 2004 to 2015. The density of jobs in the arts and entertainment and corporate headquarters sectors increased in 56 (or 60%) and 50 (53% of) metro areas, respectively."],
	            step:function(s, c){step(1, s, c);},   
	        },
	        {
	            text:["The 60% overall increase in the information sector’s job density across the 94 metro areas was driven largely by the increasing concentration of information jobs in a small number of large and dense metro areas, such as San Francisco, New York, and Seattle. Gains in job density were least widespread in the manufacturing and logistics sectors—less than 30 (or 30% of) metro areas saw job density increase in these sectors. "],
	            step:function(s, c){step(2, s, c);},
	        }
	    ];

	    return {views:views, resize:redraw};

	}

	function seq6(container, i){

	    var wrap_ = d3.select(container).attr("id", "sequence-0").append("div");

	    //what lines to show when a given view code is selected

	    var sequence = {
	        TOTAL: {TOTAL:1, UC:0, MS: 0, ES:0, EX:0},
	        UC:{TOTAL:1, UC:1, MS: 0, ES:0, EX:0},
	        MS:{TOTAL:1, UC:1, MS: 1, ES:1, EX:0},
	        ES:{TOTAL:1, UC:1, MS: 1, ES:1, EX:0},
	        EX:{TOTAL:1, UC:1, MS: 1, ES:1, EX:1},
	    };

	    //one time setup
	    var types = ["UC", "TOTAL", "MS", "ES", "EX"];
	    var names = {TOTAL: "Total", UC: "Core urban", MS: "Mature suburban", ES: "Emerging suburban", EX: "Exurban"};
	    var pchanges = {TOTAL: 0.295310915, UC: 0.353635699, MS: 0.126305595, ES: 0.010075171, EX: -0.180935696};

	    var cols = pal(types);

	    var wrap = wrap_.append("div").classed("chart-view",true);
	    var title = wrap.append("div").classed("sticky-chart-title",true).append("p").html("Metropolitan America’s more-urbanized counties posted larger increases in job density"); 
	    
	    var svg = wrap.append("div").style("max-width","900px").append("svg").attr("viewBox", "0 0 320 240");

	    var g_y_axis = svg.append("g").classed("axis-group",true);
	    var g_x_axis = svg.append("g").classed("axis-group",true);
	    var g_back = svg.append("g");
	    var g_trend = svg.append("g");
	    var g_anno = svg.append("g");

	    var t_ = g_anno.selectAll("text").data(["TOTAL", "UC", "MS", "ES", "EX"]).enter().append("text").style("opacity","0")
	                                                .text(function(d){return names[d]}).style("font-size","15px").attr("dy","8");


	    var lines = g_trend.selectAll("path").data(types)
	                       .enter().append("path")
	                       .attr("stroke-width","2px")
	                       .style("opacity","0")
	                       .attr("fill","none")
	                       .attr("stroke", function(d,i){return cols(d)})
	                        ;

	    var great_recession = g_back.append("rect").attr("fill","#dddddd").style("opacity","0");
	    
	    var years = d3.range(2004, 2016);
	    
	    var scale_y = d3.scaleLinear().domain([-0.2, 0.4]).nice();
	    var scale_x = d3.scaleLinear().domain([2004, 2015]);

	    var line = d3.line().x(function(d){return scale_x(d.year)})
	                        .y(function(d){return scale_y(d.value)})
	                        ;

	    var axis_y = d3.axisLeft(scale_y).ticks(4, "+,.0%");
	    var axis_x = d3.axisBottom(scale_x).tickValues([2005, 2007, 2009, 2011, 2013, 2015]).tickFormat(function(v){return v});
	    var padding = {top:20, right:120, bottom: 40, left: 60 };

	    function redraw(){
	        var wh = special_dims(this);
	        var w = wh.w;
	        var h = wh.h;

	        svg.attr("viewBox", "0 0 " + w + " " + h);
	        
	        g_x_axis.attr("transform", "translate(0," + (h-padding.bottom) + ")");
	        g_y_axis.attr("transform", "translate(" + (padding.left) + ",0)");

	        scale_x.range([padding.left, w - padding.right]);
	        scale_y.range([h - padding.bottom, 0 + padding.top]);

	        t_.attr("y", function(d){
	            return scale_y(pchanges[d]);
	        })
	        .attr("x", function(d){
	            return scale_x(2015);
	        });

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
	                       .attr("height", h - padding.top - padding.bottom);

	        axis_x(g_x_axis);
	        axis_y(g_y_axis);

	        lines.attr("d", function(d){return line(county_trend[d])});

	    }

	    var current_view = null;

	    function step(vn, s, c){

	        if(c != "exit" && vn!== current_view){
	            wrap.style("opacity",1);

	            var seq = sequence[vn];

	            lines.style("opacity", function(d,i){return seq[d]});
	            t_.style("opacity", function(d,i){return seq[d]});
	            
	            //title.text(titles[vn])
	            
	            current_view = vn;
	        }
	    }

	    var views = [
	        {
	            text:["Job density trends not only varied among individual metro areas, but also within them."],
	            step:function(s, c){step("TOTAL", s, c);},
	            exit:function(){
	                lines.style("opacity","0");
	                t_.style("opacity","0");
	                current_view = null;
	                wrap.style("opacity",null);
	            }
	        },
	        {
	            text:["The core urban counties within metro areas—defined as counties where at least 95% of residents lived in an urbanized area in 2000—collectively saw job density"],
	            step:function(s, c){step("UC", s, c);}
	        },

	        {
	            text:["Meanwhile, less-urbanized counties posted more modest increases in job density. Mature suburban counties (where 75% to 95% of residents lived in an urbanized area in 2000) collectively saw an increase in job density of 13% from 2004 to 2015.", "Emerging suburban counties (where 25% to 75% of residents lived in an urbanized area in 2000) collectively saw a small increase in job density of 1%."],
	            step:function(s, c){step("MS", s, c);}
	        },

	        {
	            text:["Exurban counties (where less than 25% of residents lived in urbanized areas in 2000) collectively saw job density decline by more than 18% from 2004 to 2015, largely as a result of new jobs spreading to less-dense parts of these counties."],
	            step:function(s, c){step("EX", s, c);}
	        }
	    ];

	    //static, non-scrollytelling -- deprecated here
	    //if(arguments.length > 1){
	        //panel_number.style("display","block");
	    //    var p = wrap.append("p").classed("chart-view-caption",true).html(views[i].text).node();
	    //    var j = -1;
	    //    while(++j <= i){
	    //        if(views[j].hasOwnProperty("enter")){
	    //            views[j].enter.call(p);
	    //        }
	    //        if(views[j].hasOwnProperty("step")){
	    //            views[j].step.call(p, 1);
	    //        }
	    //    }
	    //}

	    return {views:views, resize:redraw};

	}

	seq6.nviews = 5;

	function seq7(container, i){

	    //one time setup
	    var names = {TOTAL: "Total", UC: "Core urban", MS: "Mature suburban", ES: "Emerging suburban", EX: "Exurban"};
	    var ordering = {TOTAL: "4", UC: "0", MS: "1", ES: "2", EX: "3"};

	    var types = ["UC", "TOTAL", "MS", "ES", "EX"];
	    var cols = pal(types);

	    var data = county_counts.slice(0).sort(function(a, b){
	        return ordering[a.type] - ordering[b.type];
	    });


	    //one time setup
	    var wrap = d3.select(container).append("div").classed("chart-view",true);

	    wrap.append("div").classed("sticky-chart-title",true).append("p").html("Job densification trends varied among counties of similar levels of urbanization across metro areas");

	    var svg = wrap.append("div").style("margin","0px auto").append("svg").attr("viewBox", "0 0 320 240");
	    var padding = {top:55, right:25, bottom: 5, left: 165 };

	    var g_main = svg.append("g").attr("transform", "translate(" + padding.left + ", " + padding.top + ")");

	    var g_x_axis = g_main.append("g").classed("axis-group",true);
	    var g_back = g_main.append("g");
	    var g_trend = g_main.append("g");
	    
	    var groups = g_trend.selectAll("g").data(data).enter().append("g");

	    var rects = groups.selectAll("rect").data(function(d){return [d]})
	                                .enter().append("rect").attr("height",10).attr("x","0").attr("y","0")
	                                .style("shape-rendering","crispEdges")
	                                .attr("fill", palette.job_density.darkblue)
	                                //.attr("fill", function(d){return cols(d.type)})
	                                ;

	    var scale_x = d3.scaleLinear().domain([0, 1]);
	    var axis_x = d3.axisTop(scale_x).ticks(5).tickFormat(function(v){return Math.round(v*100)+"%"});


	    var axis_title = svg.append("text").attr("y",15).attr("text-anchor","end").style("font-size","15px").style("fill","#555555");
	    axis_title.append("tspan").text("% of metro areas where job density increased");

	    var gridlines = g_back.selectAll("path").data(scale_x.ticks(5)).enter().append("path")
	                        .attr("stroke", function(d){return d==0 ? "#aaaaaa" : "#dddddd"})
	                        .style("shape-rendering","crispEdges");

	    var group_labels = groups.append("text").text(function(d){return names[d.type]})
	                              .attr("x", "0")
	                              .attr("dx","-5")
	                              .attr("dy","5").attr("text-anchor","end")
	                              ;

	    var group_h;

	    function redraw(){
	        var wh = special_dims(this);
	        var w = wh.w;
	        var h = wh.h;

	        scale_x.range([0, w - padding.right - padding.left]);
	        
	        group_h = Math.floor((h-padding.top-padding.bottom)/data.length);
	        var group_h2 = Math.floor(group_h/2) + 0.5;
	        var group_h4 = Math.floor(group_h/4) + 0.5;

	        groups.interrupt().transition().duration(0).attr("transform", function(d,i){return "translate(0," + ((i*group_h) + group_h4) + ")"});

	        svg.attr("viewBox", "0 0 " + w + " " + h);

	        gridlines.attr("d", function(d){
	            var x = Math.floor(scale_x(d))+0.5;
	            return "M" + x + "," + "0" + " l0," + (h - padding.bottom);
	        });

	        axis_x(g_x_axis);

	        axis_title.attr("x", 150 + scale_x(1));

	        rects.attr("height", group_h2).attr("width", function(d){return scale_x(d.p / d.n)});
	        group_labels.attr("dy", group_h2/1.5);
	        
	    }

	    var current_view = null;

	    function step(vn, s, c){

	        if(c != "exit" && vn!== current_view){
	            wrap.style("opacity",1);
	            groups.style("opacity", function(d){
	                if(vn=="TOTAL"){
	                    return "1";
	                }
	                else if(vn=="UC"){
	                    return d.type=="UC" || d.type=="EX" ? "1" : "0.25";
	                }
	            });          
	            current_view = vn;
	        }
	    }

	    var views = [
	        {
	            text:["The job densification trends of similarly urbanized counties also varied among metro areas, and suggest that much of metropolitan America’s increasing job density during this period was driven by its most urbanized areas."],
	            step: function(s, c){step("TOTAL", s, c);},
	            exit:function(){
	                wrap.style("opacity",0.25);
	                current_view = null;
	            }
	        },
	        {
	            text:["While 73% of metro areas with core urban counties (where at least 95% of the residents live in an urbanized area) saw an increase in perceived job density in such counties, just 21% of metro areas saw perceived job density increase in their exurban counties."],
	            step: function(s, c){step("UC", s, c);},
	        },
	        {
	            text:["These trends in job density therefore suggest that jobs densified and sprawled from 2004 to 2015, growing both upwards and outwards: Almost every metro area had at least one county where jobs grew denser and almost every metro area also had at least one county in which job density declined."],
	            step: function(s, c){step("TOTAL", s, c);},
	        }

	    ];

	    return {views:views, resize:redraw};

	}

	function dashboard(container){
	//one-time setup
	var wrap = d3.select(container).classed("c-fix", true).classed("dashboard-container", true);

	//////////////////////////////////////// ------------------------------------------------

	//sectors
	function dash_sector(container){

	    //setup
	    var wrap = d3.select(container);
	    var title = wrap.append("div").classed("sticky-chart-title",true);
	    title.append("p").html('Actual versus expected change in perceived job density by industry sector, <span style="white-space:nowrap;">2004 to 2015</span>');
	    title.append("div").classed("ae-legend",true);

	    var svg = wrap.append("div").append("svg").attr("viewBox", "0 0 640 480");

	    var padding = {top:25, right:25, bottom: 5, left: 170};

	    var g_main = svg.append("g").attr("transform","translate("+ padding.left + "," +padding.top + ")");
	    
	    var g_x_axis = g_main.append("g").classed("axis-group",true);
	    var g_back = g_main.append("g");
	    var g_trend = g_main.append("g");

	    var scale_x = d3.scaleLinear().domain([-0.4, 0.6]).nice();
	    var axis_x = d3.axisTop(scale_x).ticks(5, "+,.0%");

	    var group_h = 30;
	    var group_h2 = Math.floor(group_h/2);


	    function redraw(cbsa){
	        var data = sector_data[cbsa].slice(0).sort(function(a,b){
	            var o = 0;
	            if(a.naics == "00"){
	                o = -1;
	            }
	            else if(b.naics == "00"){
	                o = 1;
	            }
	            else{
	                o = d3.descending(a.actual, b.actual);
	            }
	            return o;         
	        });

	        var min = d3.min(data.map(function(d){return Math.min(d.actual, d.expected)}));
	        var max = d3.max(data.map(function(d){return Math.max(d.actual, d.expected)}));
	        
	        var box = wrap.node().getBoundingClientRect();
	        var w = Math.floor(box.right - box.left);
	        if(w < 320){w = 320;}
	        else if(w > 900){w = 900;}

	        var width = w;
	        var height0 = (group_h * data.length) ;
	        var height = height0 + padding.top + padding.bottom + group_h2;
	        scale_x.range([0, width - padding.left - padding.right]);

	        svg.attr("viewBox", "0 0 " + width + " " + height).style("width","100%").style("height", height);

	        if(min > 0){
	            min = 0;
	        }
	        else if(max < 0){
	            max = 0;
	        }

	        scale_x.domain([min, max]).nice();

	        var groups_ = g_trend.selectAll("g.top-level-group").data(data, function(d){return d.naics});
	        groups_.exit().remove();
	        var groups_en = groups_.enter().append("g").classed("top-level-group",true);
	            groups_en.append("text").attr("x","0").attr("y","0").attr("dx","-5").attr("dy","5").attr("text-anchor","end");
	        var groups = groups_en.merge(groups_);

	        groups.interrupt().transition().duration(400).attr("transform", function(d,i){return "translate(0," + ((i*group_h)+group_h2) + ")"});
	    
	        var group_connectors_ = groups.selectAll("line").data(function(d){return [d]});
	        group_connectors_.exit().remove();
	        var group_connectors = group_connectors_.enter().append("line").merge(group_connectors_).style("shape-rendering","crispEdges")
	                                    .attr("stroke", function(d){return d.expected > d.actual ? palette.job_density.decline : palette.job_density.growth})
	                                    .attr("stroke-width","1px").attr("y1",0).attr("y2",0)
	                                    .attr("x1", function(d){return scale_x(d.expected)})
	                                    .attr("x2", function(d){return scale_x(d.actual)})
	                                    ;
	    
	        var group_circles_ = groups.selectAll("circle").data(function(d){return [d, d]});
	        group_circles_.exit().remove();
	        var group_circles = group_circles_.enter().append("circle").merge(group_circles_)
	                    .attr("r",5).attr("cy","0")
	                    .attr("cx", function(d,i){return scale_x(i == 0 ? d.expected : d.actual);})
	                    .attr("fill", function(d,i){return i==0 ? "#ffffff" : palette.job_density.darkblue})
	                    .attr("stroke", function(d,i){return i==0 ? palette.job_density.darkblue : palette.job_density.darkblue})
	                    .attr("stroke-width","1.5px")
	                    ;
	        
	        var gridlines_ = g_back.selectAll("path").data(scale_x.ticks(5));
	        gridlines_.exit().remove();
	        gridlines_.enter().append("path").merge(gridlines_)
	                        .attr("stroke", function(d){return d==0 ? "#aaaaaa" : "#dddddd"})
	                        .attr("d", function(d){
	                            var x = Math.floor(scale_x(d))+0.5;
	                            return "M" + x + ",0 l0," + height0;
	                        })
	                        .style("shape-rendering","crispEdges")
	                        ;
	    
	        //update text labels
	        groups.select("text").text(function(d){return sector_names[d.naics]});

	        axis_x(g_x_axis);
	    }

	    return redraw;
	}

	//////////////////////////////////////// ------------------------------------------------

	function trend_lines(container){

	    //setup
	    var wrap = d3.select(container);
	    var title = wrap.append("div").classed("sticky-chart-title",true).append("p").html('Change, <span style="white-space:nowrap;">2004 to 2015</span>'); 
	    var svg = wrap.append("div").append("svg").attr("viewBox", "0 0 640 480");

	    var padding = {top:25, right:25, bottom: 5, left: 150};

	    var g_y_axis = svg.append("g").classed("axis-group",true);
	    var g_x_axis = svg.append("g").classed("axis-group",true);
	    var g_back = svg.append("g");
	    var g_trend = svg.append("g");
	    var g_anno = svg.append("g");

	    var scale_x = d3.scaleLinear().domain([-0.4, 0.6]).nice();
	    var axis_x = d3.axisTop(scale_x).ticks(5, "+,.0%");

	    var years = d3.range(2004, 2016);
	    
	    var scale_y = d3.scaleLinear().domain([0, 0.4]).nice();
	    var scale_x = d3.scaleLinear().domain([2004, 2015]);

	    var line = d3.line().x(function(d){return scale_x(d.year)})
	                        .y(function(d){return scale_y(d.value)})
	                        ;

	    var axis_y = d3.axisLeft(scale_y).ticks(4, "+,.0%");
	    var axis_x = d3.axisBottom(scale_x).tickValues([2005, 2007, 2009, 2011, 2013, 2015]).tickFormat(function(v){return v});

	    var padding = {top:20, right:100, bottom: 40, left: 50};

	    function dmap(data, key){
	        return data.map(function(obs){
	            return {year:obs.year, value:obs[key]} 
	        })
	    }

	    function redraw(cbsa, domain){
	        var data = trend_data[cbsa];

	        var min = d3.min(data.map(function(d){return Math.min(d.actual, d.expected)}));
	        var max = d3.max(data.map(function(d){return Math.max(d.actual, d.expected)}));
	        if(min > 0){
	            min = 0;
	        }
	        else if(max < 0){
	            max = 0;
	        }

	        var box = wrap.node().getBoundingClientRect();
	        var w = Math.floor(box.right - box.left);
	        if(w < 320){w = 320;}
	        else if(w > 900){w = 900;}

	        var width = w;
	        var height = w*0.35;
	        
	        svg.attr("viewBox", "0 0 " + width + " " + height).style("width","100%").style("height", height);
	        
	        g_x_axis.attr("transform", "translate(0," + (height-padding.bottom) + ")");
	        g_y_axis.attr("transform", "translate(" + (padding.left) + ",0)");

	        scale_x.range([padding.left, width - padding.right]);
	        scale_y.range([height - padding.bottom, 0 + padding.top]).domain([min, max]).nice();

	        var lines_ = g_trend.selectAll("path").data(["expected", "actual"]);
	        lines_.exit().remove();
	        var lines = lines_.enter().append("path").merge(lines_)
	                        .attr("stroke-width","3px")
	                        .attr("fill","none")
	                        .attr("stroke", function(d,i){
	                            return palette.job_density.darkblue;
	                        })
	                        .attr("stroke-dasharray", function(d,i){return d=="expected" ? "2,2" : null})
	                        ;

	        var grid_lines_ = g_back.selectAll("line").data(scale_y.ticks(4));
	        grid_lines_.exit().remove();
	        var grid_lines = grid_lines_.enter().append("line").merge(grid_lines_).attr("stroke","#bbbbbb")
	                                            .attr("x1", scale_x(2004)-4).attr("x2", scale_x(2015))
	                                            .attr("y1", function(d){return Math.floor(scale_y(d))+0.5})
	                                            .attr("y2", function(d){return Math.floor(scale_y(d))+0.5})
	                                            .style("shape-rendering","crispEdges")
	                                            ;
	        
	        var txt_data = [];
	        data.forEach(function(d){
	            if(d.year == 2015){
	                if(d.expected != null){txt_data.push({label:"Expected", value:d.expected, above:d.actual==null || d.expected >= d.actual});}
	                if(d.actual != null){txt_data.push({label:"Actual", value:d.actual, above: d.expected==null || d.actual >= d.expected});}
	            }
	        });

	        var txt_ = g_anno.selectAll("text").data(txt_data);
	        txt_.exit().remove();
	        var txt = txt_.enter().append("text").merge(txt_).text(function(d){return d.label})
	                        .attr("x", scale_x(2015) + 1)
	                        .attr("y", function(d){return scale_y(d.value)})
	                        .attr("dy", function(d){return d.above ? 1 : 12})
	                        ;

	        axis_x(g_x_axis);
	        axis_y(g_y_axis);

	        lines.attr("d", function(key){return line(dmap(data, key))});

	    }

	    return redraw;
	}

	//////////////////////////////////////// ------------------------------------------------


	function types(container){
	    //setup
	     var names = {TOTAL: "Total", UC: "Core urban", MS: "Mature suburban", ES: "Emerging suburban", EX: "Exurban"};
	     var ordering = {TOTAL: 0, UC: 1, MS: 2, ES: 3, EX: 4};
	 
	     var types = ["UC", "MS", "ES", "EX", "TOTAL"];
	     var cols = pal(types);

	    //setup
	    var wrap = d3.select(container);
	    var title = wrap.append("div").classed("sticky-chart-title",true);
	    title.append("p").html('Actual versus expected change in perceived job density by county type, <span style="white-space:nowrap;">2004 to 2015</span>'); 
	    title.append("div").classed("ae-legend",true);
	    
	    var svg = wrap.append("div").append("svg").attr("viewBox", "0 0 640 480");

	    var padding = {top:25, right:25, bottom: 5, left: 170};

	    var g_main = svg.append("g").attr("transform","translate("+ padding.left + "," +padding.top + ")");

	    var g_x_axis = g_main.append("g").classed("axis-group",true);
	    var g_back = g_main.append("g");
	    var g_trend = g_main.append("g");

	    var scale_x = d3.scaleLinear().domain([-0.4, 0.6]).nice();
	    var axis_x = d3.axisTop(scale_x).ticks(5, "+,.0%");

	    var group_h = 30;
	    var group_h2 = Math.floor(group_h/2);

	    function redraw(cbsa){
	        var data = county_data[cbsa].slice(0).sort(function(a,b){
	            var o;
	            try{
	                o = ordering[a.type] - ordering[b.type];
	            }
	            catch(e){
	                o = 0;
	            }
	            return o;
	        });
	        var lookup = {TOTAL: null, UC: null, MS: null, ES: null, EX: null};
	        data.forEach(function(d){
	            lookup[d.type] = d;
	        });

	        var min = d3.min(data.map(function(d){return Math.min(d.actual, d.expected)}));
	        var max = d3.max(data.map(function(d){return Math.max(d.actual, d.expected)}));
	        
	        var box = wrap.node().getBoundingClientRect();
	        var w = Math.floor(box.right - box.left);
	        if(w < 320){w = 320;}
	        else if(w > 900){w = 900;}

	        var width = w;
	        var height0 = (group_h * data.length) ;
	        var height = height0 + padding.top + padding.bottom + group_h2;
	        scale_x.range([0, width - padding.left - padding.right]);

	        svg.attr("viewBox", "0 0 " + width + " " + height).style("width","100%").style("height", height);

	        if(min > 0){
	            min = 0;
	        }
	        else if(max < 0){
	            max = 0;
	        }

	        scale_x.domain([min, max]).nice();

	        var groups_ = g_trend.selectAll("g.top-level-group").data(data, function(d){return d.type});
	        groups_.exit().remove();
	        var groups_en = groups_.enter().append("g").classed("top-level-group",true);
	            groups_en.append("text").attr("x","0").attr("y","0").attr("dx","-5").attr("dy","5").attr("text-anchor","end");
	        var groups = groups_en.merge(groups_); //.style("opacity", function(d){return lookup[d] === null ? 0.25 : 1});

	        groups.interrupt().transition().duration(400).attr("transform", function(d,i){return "translate(0," + ((i*group_h)+group_h2) + ")"});

	        var group_connectors_ = groups.selectAll("line").data(function(d){
	            return [d];
	            //var D = lookup[d];
	            //return D===null ? [] : [D];
	        });
	        group_connectors_.exit().remove();
	        var group_connectors = group_connectors_.enter().append("line").merge(group_connectors_).style("shape-rendering","crispEdges")
	                                    .attr("stroke", function(d){return d.expected > d.actual ? palette.job_density.decline : palette.job_density.growth})
	                                    .attr("stroke-width","1px").attr("y1",0).attr("y2",0)
	                                    .attr("x1", function(d){return scale_x(d.expected)})
	                                    .attr("x2", function(d){return scale_x(d.actual)})
	                                    ;

	        var group_circles_ = groups.selectAll("circle").data(function(d){
	            //var D = lookup[d];
	            //return D===null ? [] : [D, D];
	            return [d,d];
	        });
	        group_circles_.exit().remove();
	        var group_circles = group_circles_.enter().append("circle").merge(group_circles_)
	                    .attr("r",4.5).attr("cy","0")
	                    .attr("cx", function(d,i){return scale_x(i == 0 ? d.expected : d.actual);})
	                    .attr("fill", function(d,i){return i==0 ? "#ffffff" : palette.job_density.darkblue})
	                    .attr("stroke", function(d,i){return i==0 ? palette.job_density.darkblue : palette.job_density.darkblue})
	                    .attr("stroke-width","1.5px")
	                    ;
	        
	        var gridlines_ = g_back.selectAll("path").data(scale_x.ticks(5));
	        gridlines_.exit().remove();
	        gridlines_.enter().append("path").merge(gridlines_)
	                        .attr("stroke", function(d){return d==0 ? "#aaaaaa" : "#dddddd"})
	                        .attr("d", function(d){
	                            var x = Math.floor(scale_x(d))+0.5;
	                            return "M" + x + ",0 l0," + height0;
	                        })
	                        .style("shape-rendering","crispEdges")
	                        ;

	        //update text labels
	        groups.select("text").text(function(d){return names[d.type]});

	        axis_x(g_x_axis);
	    }

	return redraw;


	}

	//setup
	var panel0 = wrap.append("div").classed("dashboard-panel",true);
	var panel1 = wrap.append("div").classed("dashboard-panel",true);

	var redraw_sectors = dash_sector(panel1.append("div").node());

	var redraw_lines = trend_lines(panel0.append("div").node());
	var redraw_types = types(panel0.append("div").node());


	//redraw
	var current_cbsa = "10420";
	function redraw(){
	    redraw_sectors(current_cbsa);
	    redraw_lines(current_cbsa);
	    redraw_types(current_cbsa);
	}

	setTimeout(redraw, 0);

	window.addEventListener("resize", redraw);

	var sel = d3.select("#dashboard-select").append("select");
	var opt_data = [];
	for(var met in metro_names){
	    if(metro_names.hasOwnProperty(met)){
	        if(met !== "99997" && met !== "99998" && met !== "99999"){
	            opt_data.push({value:met, name:metro_names[met]});
	        }
	    }
	}
	var sel_opt = sel.selectAll("option").data(opt_data).enter().append("option")
	.text(function(d){return d.name})
	.attr("value", function(d){return d.value});

	sel.on("change", function(){
	    var v = this.value;
	    if(metro_names.hasOwnProperty(v)){
	        current_cbsa = v;
	        redraw();
	    }
	});


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

	  on_resize(get_dims, true);

	  //browser degradation
	  if(compat.browser()){
	    sequence(container, [intro0], '<p class="meta-header meta-header-i"><span>Data and measures</span></p>');

	    sequence(container, [seq0, seq1], '<p id="group-seqs-1" class="meta-header meta-header-0"><span>Job density increased in metropolitan America</span></p>');
	    
	    sequence(container, [seq4, seq5], '<p id="group-seqs-2" class="meta-header meta-header-1"><span>Job density trends varied among metropolitan areas</span></p>');
	  
	    sequence(container, [seq6, seq7], '<p id="group-seqs-3" class="meta-header meta-header-2"><span>Job density trends varied within metropolitan areas</span></p>');

	    wrap.append("div").classed("sequence-wrap",true).append("div").classed("center-col",true).html("<p>This analysis helps leaders understand how economic activity has been clustering and dispersing across and within metropolitan areas—and where new land use and placemaking solutions may be most needed, and most ripe. When coupled with good design and programming driven by the vision and values of local stakeholders, efforts to advance density can not only promote economic and social benefits but also help address urgent fiscal and environmental challenges facing many U.S. cities and metropolitan regions today.</p><p>Read more about our findings. (Jump link to PDF, page 12)</p>");

	    dashboard(d3.select("#metro-dashboard").append("div").node());
	  
	  }


	} //close main()


	document.addEventListener("DOMContentLoaded", main);

}());
