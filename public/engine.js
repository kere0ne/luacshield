var LuacShieldEngine=(()=>{var ag=Object.create;var Ue=Object.defineProperty;var Ig=Object.getOwnPropertyDescriptor;var Cg=Object.getOwnPropertyNames;var Bg=Object.getPrototypeOf,lg=Object.prototype.hasOwnProperty;var IA=(s,e,n)=>()=>{if(n)throw n[0];try{return s&&(e=s(s=0)),e}catch(a){throw n=[a],a}};var Ke=(s,e)=>()=>{try{return e||s((e={exports:{}}).exports,e),e.exports}catch(n){throw e=0,n}},Ee=(s,e)=>{for(var n in e)Ue(s,n,{get:e[n],enumerable:!0})},Sn=(s,e,n,a)=>{if(e&&typeof e=="object"||typeof e=="function")for(let C of Cg(e))!lg.call(s,C)&&C!==n&&Ue(s,C,{get:()=>e[C],enumerable:!(a=Ig(e,C))||a.enumerable});return s};var xn=(s,e,n)=>(n=s!=null?ag(Bg(s)):{},Sn(e||!s||!s.__esModule?Ue(n,"default",{value:s,enumerable:!0}):n,s)),Qe=s=>Sn(Ue({},"__esModule",{value:!0}),s);var Ln=Ke(Je=>{"use strict";Je.byteLength=Qg;Je.toByteArray=ug;Je.fromByteArray=hg;var QA=[],CA=[],Eg=typeof Uint8Array<"u"?Uint8Array:Array,ht="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/";for(LA=0,Nn=ht.length;LA<Nn;++LA)QA[LA]=ht[LA],CA[ht.charCodeAt(LA)]=LA;var LA,Nn;CA[45]=62;CA[95]=63;function Mn(s){var e=s.length;if(e%4>0)throw new Error("Invalid string. Length must be a multiple of 4");var n=s.indexOf("=");n===-1&&(n=e);var a=n===e?0:4-n%4;return[n,a]}function Qg(s){var e=Mn(s),n=e[0],a=e[1];return(n+a)*3/4-a}function cg(s,e,n){return(e+n)*3/4-n}function ug(s){var e,n=Mn(s),a=n[0],C=n[1],l=new Eg(cg(s,a,C)),E=0,w=C>0?a-4:a,y;for(y=0;y<w;y+=4)e=CA[s.charCodeAt(y)]<<18|CA[s.charCodeAt(y+1)]<<12|CA[s.charCodeAt(y+2)]<<6|CA[s.charCodeAt(y+3)],l[E++]=e>>16&255,l[E++]=e>>8&255,l[E++]=e&255;return C===2&&(e=CA[s.charCodeAt(y)]<<2|CA[s.charCodeAt(y+1)]>>4,l[E++]=e&255),C===1&&(e=CA[s.charCodeAt(y)]<<10|CA[s.charCodeAt(y+1)]<<4|CA[s.charCodeAt(y+2)]>>2,l[E++]=e>>8&255,l[E++]=e&255),l}function dg(s){return QA[s>>18&63]+QA[s>>12&63]+QA[s>>6&63]+QA[s&63]}function fg(s,e,n){for(var a,C=[],l=e;l<n;l+=3)a=(s[l]<<16&16711680)+(s[l+1]<<8&65280)+(s[l+2]&255),C.push(dg(a));return C.join("")}function hg(s){for(var e,n=s.length,a=n%3,C=[],l=16383,E=0,w=n-a;E<w;E+=l)C.push(fg(s,E,E+l>w?w:E+l));return a===1?(e=s[n-1],C.push(QA[e>>2]+QA[e<<4&63]+"==")):a===2&&(e=(s[n-2]<<8)+s[n-1],C.push(QA[e>>10]+QA[e>>4&63]+QA[e<<2&63]+"=")),C.join("")}});var Gn=Ke(pt=>{pt.read=function(s,e,n,a,C){var l,E,w=C*8-a-1,y=(1<<w)-1,Y=y>>1,F=-7,G=n?C-1:0,$=n?-1:1,tA=s[e+G];for(G+=$,l=tA&(1<<-F)-1,tA>>=-F,F+=w;F>0;l=l*256+s[e+G],G+=$,F-=8);for(E=l&(1<<-F)-1,l>>=-F,F+=a;F>0;E=E*256+s[e+G],G+=$,F-=8);if(l===0)l=1-Y;else{if(l===y)return E?NaN:(tA?-1:1)*(1/0);E=E+Math.pow(2,a),l=l-Y}return(tA?-1:1)*E*Math.pow(2,l-a)};pt.write=function(s,e,n,a,C,l){var E,w,y,Y=l*8-C-1,F=(1<<Y)-1,G=F>>1,$=C===23?Math.pow(2,-24)-Math.pow(2,-77):0,tA=a?0:l-1,sA=a?1:-1,ee=e<0||e===0&&1/e<0?1:0;for(e=Math.abs(e),isNaN(e)||e===1/0?(w=isNaN(e)?1:0,E=F):(E=Math.floor(Math.log(e)/Math.LN2),e*(y=Math.pow(2,-E))<1&&(E--,y*=2),E+G>=1?e+=$/y:e+=$*Math.pow(2,1-G),e*y>=2&&(E++,y/=2),E+G>=F?(w=0,E=F):E+G>=1?(w=(e*y-1)*Math.pow(2,C),E=E+G):(w=e*Math.pow(2,G-1)*Math.pow(2,C),E=0));C>=8;s[n+tA]=w&255,tA+=sA,w/=256,C-=8);for(E=E<<C|w,Y+=C;Y>0;s[n+tA]=E&255,tA+=sA,E/=256,Y-=8);s[n+tA-sA]|=ee*128}});var zn=Ke($A=>{"use strict";var Dt=Ln(),XA=Gn(),Un=typeof Symbol=="function"&&typeof Symbol.for=="function"?Symbol.for("nodejs.util.inspect.custom"):null;$A.Buffer=h;$A.SlowBuffer=Rg;$A.INSPECT_MAX_BYTES=50;var Ye=2147483647;$A.kMaxLength=Ye;h.TYPED_ARRAY_SUPPORT=pg();!h.TYPED_ARRAY_SUPPORT&&typeof console<"u"&&typeof console.error=="function"&&console.error("This browser lacks typed array (Uint8Array) support which is required by `buffer` v5.x. Use `buffer` v4.x if you require old browser support.");function pg(){try{let s=new Uint8Array(1),e={foo:function(){return 42}};return Object.setPrototypeOf(e,Uint8Array.prototype),Object.setPrototypeOf(s,e),s.foo()===42}catch{return!1}}Object.defineProperty(h.prototype,"parent",{enumerable:!0,get:function(){if(h.isBuffer(this))return this.buffer}});Object.defineProperty(h.prototype,"offset",{enumerable:!0,get:function(){if(h.isBuffer(this))return this.byteOffset}});function pA(s){if(s>Ye)throw new RangeError('The value "'+s+'" is invalid for option "size"');let e=new Uint8Array(s);return Object.setPrototypeOf(e,h.prototype),e}function h(s,e,n){if(typeof s=="number"){if(typeof e=="string")throw new TypeError('The "string" argument must be of type string. Received type number');return Rt(s)}return Hn(s,e,n)}h.poolSize=8192;function Hn(s,e,n){if(typeof s=="string")return mg(s,e);if(ArrayBuffer.isView(s))return wg(s);if(s==null)throw new TypeError("The first argument must be one of type string, Buffer, ArrayBuffer, Array, or Array-like Object. Received type "+typeof s);if(cA(s,ArrayBuffer)||s&&cA(s.buffer,ArrayBuffer)||typeof SharedArrayBuffer<"u"&&(cA(s,SharedArrayBuffer)||s&&cA(s.buffer,SharedArrayBuffer)))return wt(s,e,n);if(typeof s=="number")throw new TypeError('The "value" argument must not be of type number. Received type number');let a=s.valueOf&&s.valueOf();if(a!=null&&a!==s)return h.from(a,e,n);let C=yg(s);if(C)return C;if(typeof Symbol<"u"&&Symbol.toPrimitive!=null&&typeof s[Symbol.toPrimitive]=="function")return h.from(s[Symbol.toPrimitive]("string"),e,n);throw new TypeError("The first argument must be one of type string, Buffer, ArrayBuffer, Array, or Array-like Object. Received type "+typeof s)}h.from=function(s,e,n){return Hn(s,e,n)};Object.setPrototypeOf(h.prototype,Uint8Array.prototype);Object.setPrototypeOf(h,Uint8Array);function vn(s){if(typeof s!="number")throw new TypeError('"size" argument must be of type number');if(s<0)throw new RangeError('The value "'+s+'" is invalid for option "size"')}function Dg(s,e,n){return vn(s),s<=0?pA(s):e!==void 0?typeof n=="string"?pA(s).fill(e,n):pA(s).fill(e):pA(s)}h.alloc=function(s,e,n){return Dg(s,e,n)};function Rt(s){return vn(s),pA(s<0?0:kt(s)|0)}h.allocUnsafe=function(s){return Rt(s)};h.allocUnsafeSlow=function(s){return Rt(s)};function mg(s,e){if((typeof e!="string"||e==="")&&(e="utf8"),!h.isEncoding(e))throw new TypeError("Unknown encoding: "+e);let n=Tn(s,e)|0,a=pA(n),C=a.write(s,e);return C!==n&&(a=a.slice(0,C)),a}function mt(s){let e=s.length<0?0:kt(s.length)|0,n=pA(e);for(let a=0;a<e;a+=1)n[a]=s[a]&255;return n}function wg(s){if(cA(s,Uint8Array)){let e=new Uint8Array(s);return wt(e.buffer,e.byteOffset,e.byteLength)}return mt(s)}function wt(s,e,n){if(e<0||s.byteLength<e)throw new RangeError('"offset" is outside of buffer bounds');if(s.byteLength<e+(n||0))throw new RangeError('"length" is outside of buffer bounds');let a;return e===void 0&&n===void 0?a=new Uint8Array(s):n===void 0?a=new Uint8Array(s,e):a=new Uint8Array(s,e,n),Object.setPrototypeOf(a,h.prototype),a}function yg(s){if(h.isBuffer(s)){let e=kt(s.length)|0,n=pA(e);return n.length===0||s.copy(n,0,0,e),n}if(s.length!==void 0)return typeof s.length!="number"||Ft(s.length)?pA(0):mt(s);if(s.type==="Buffer"&&Array.isArray(s.data))return mt(s.data)}function kt(s){if(s>=Ye)throw new RangeError("Attempt to allocate Buffer larger than maximum size: 0x"+Ye.toString(16)+" bytes");return s|0}function Rg(s){return+s!=s&&(s=0),h.alloc(+s)}h.isBuffer=function(e){return e!=null&&e._isBuffer===!0&&e!==h.prototype};h.compare=function(e,n){if(cA(e,Uint8Array)&&(e=h.from(e,e.offset,e.byteLength)),cA(n,Uint8Array)&&(n=h.from(n,n.offset,n.byteLength)),!h.isBuffer(e)||!h.isBuffer(n))throw new TypeError('The "buf1", "buf2" arguments must be one of type Buffer or Uint8Array');if(e===n)return 0;let a=e.length,C=n.length;for(let l=0,E=Math.min(a,C);l<E;++l)if(e[l]!==n[l]){a=e[l],C=n[l];break}return a<C?-1:C<a?1:0};h.isEncoding=function(e){switch(String(e).toLowerCase()){case"hex":case"utf8":case"utf-8":case"ascii":case"latin1":case"binary":case"base64":case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":return!0;default:return!1}};h.concat=function(e,n){if(!Array.isArray(e))throw new TypeError('"list" argument must be an Array of Buffers');if(e.length===0)return h.alloc(0);let a;if(n===void 0)for(n=0,a=0;a<e.length;++a)n+=e[a].length;let C=h.allocUnsafe(n),l=0;for(a=0;a<e.length;++a){let E=e[a];if(cA(E,Uint8Array))l+E.length>C.length?(h.isBuffer(E)||(E=h.from(E)),E.copy(C,l)):Uint8Array.prototype.set.call(C,E,l);else if(h.isBuffer(E))E.copy(C,l);else throw new TypeError('"list" argument must be an Array of Buffers');l+=E.length}return C};function Tn(s,e){if(h.isBuffer(s))return s.length;if(ArrayBuffer.isView(s)||cA(s,ArrayBuffer))return s.byteLength;if(typeof s!="string")throw new TypeError('The "string" argument must be one of type string, Buffer, or ArrayBuffer. Received type '+typeof s);let n=s.length,a=arguments.length>2&&arguments[2]===!0;if(!a&&n===0)return 0;let C=!1;for(;;)switch(e){case"ascii":case"latin1":case"binary":return n;case"utf8":case"utf-8":return yt(s).length;case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":return n*2;case"hex":return n>>>1;case"base64":return Xn(s).length;default:if(C)return a?-1:yt(s).length;e=(""+e).toLowerCase(),C=!0}}h.byteLength=Tn;function kg(s,e,n){let a=!1;if((e===void 0||e<0)&&(e=0),e>this.length||((n===void 0||n>this.length)&&(n=this.length),n<=0)||(n>>>=0,e>>>=0,n<=e))return"";for(s||(s="utf8");;)switch(s){case"hex":return Kg(this,e,n);case"utf8":case"utf-8":return Pn(this,e,n);case"ascii":return Gg(this,e,n);case"latin1":case"binary":return Ug(this,e,n);case"base64":return Mg(this,e,n);case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":return Jg(this,e,n);default:if(a)throw new TypeError("Unknown encoding: "+s);s=(s+"").toLowerCase(),a=!0}}h.prototype._isBuffer=!0;function GA(s,e,n){let a=s[e];s[e]=s[n],s[n]=a}h.prototype.swap16=function(){let e=this.length;if(e%2!==0)throw new RangeError("Buffer size must be a multiple of 16-bits");for(let n=0;n<e;n+=2)GA(this,n,n+1);return this};h.prototype.swap32=function(){let e=this.length;if(e%4!==0)throw new RangeError("Buffer size must be a multiple of 32-bits");for(let n=0;n<e;n+=4)GA(this,n,n+3),GA(this,n+1,n+2);return this};h.prototype.swap64=function(){let e=this.length;if(e%8!==0)throw new RangeError("Buffer size must be a multiple of 64-bits");for(let n=0;n<e;n+=8)GA(this,n,n+7),GA(this,n+1,n+6),GA(this,n+2,n+5),GA(this,n+3,n+4);return this};h.prototype.toString=function(){let e=this.length;return e===0?"":arguments.length===0?Pn(this,0,e):kg.apply(this,arguments)};h.prototype.toLocaleString=h.prototype.toString;h.prototype.equals=function(e){if(!h.isBuffer(e))throw new TypeError("Argument must be a Buffer");return this===e?!0:h.compare(this,e)===0};h.prototype.inspect=function(){let e="",n=$A.INSPECT_MAX_BYTES;return e=this.toString("hex",0,n).replace(/(.{2})/g,"$1 ").trim(),this.length>n&&(e+=" ... "),"<Buffer "+e+">"};Un&&(h.prototype[Un]=h.prototype.inspect);h.prototype.compare=function(e,n,a,C,l){if(cA(e,Uint8Array)&&(e=h.from(e,e.offset,e.byteLength)),!h.isBuffer(e))throw new TypeError('The "target" argument must be one of type Buffer or Uint8Array. Received type '+typeof e);if(n===void 0&&(n=0),a===void 0&&(a=e?e.length:0),C===void 0&&(C=0),l===void 0&&(l=this.length),n<0||a>e.length||C<0||l>this.length)throw new RangeError("out of range index");if(C>=l&&n>=a)return 0;if(C>=l)return-1;if(n>=a)return 1;if(n>>>=0,a>>>=0,C>>>=0,l>>>=0,this===e)return 0;let E=l-C,w=a-n,y=Math.min(E,w),Y=this.slice(C,l),F=e.slice(n,a);for(let G=0;G<y;++G)if(Y[G]!==F[G]){E=Y[G],w=F[G];break}return E<w?-1:w<E?1:0};function Vn(s,e,n,a,C){if(s.length===0)return-1;if(typeof n=="string"?(a=n,n=0):n>2147483647?n=2147483647:n<-2147483648&&(n=-2147483648),n=+n,Ft(n)&&(n=C?0:s.length-1),n<0&&(n=s.length+n),n>=s.length){if(C)return-1;n=s.length-1}else if(n<0)if(C)n=0;else return-1;if(typeof e=="string"&&(e=h.from(e,a)),h.isBuffer(e))return e.length===0?-1:Kn(s,e,n,a,C);if(typeof e=="number")return e=e&255,typeof Uint8Array.prototype.indexOf=="function"?C?Uint8Array.prototype.indexOf.call(s,e,n):Uint8Array.prototype.lastIndexOf.call(s,e,n):Kn(s,[e],n,a,C);throw new TypeError("val must be string, number or Buffer")}function Kn(s,e,n,a,C){let l=1,E=s.length,w=e.length;if(a!==void 0&&(a=String(a).toLowerCase(),a==="ucs2"||a==="ucs-2"||a==="utf16le"||a==="utf-16le")){if(s.length<2||e.length<2)return-1;l=2,E/=2,w/=2,n/=2}function y(F,G){return l===1?F[G]:F.readUInt16BE(G*l)}let Y;if(C){let F=-1;for(Y=n;Y<E;Y++)if(y(s,Y)===y(e,F===-1?0:Y-F)){if(F===-1&&(F=Y),Y-F+1===w)return F*l}else F!==-1&&(Y-=Y-F),F=-1}else for(n+w>E&&(n=E-w),Y=n;Y>=0;Y--){let F=!0;for(let G=0;G<w;G++)if(y(s,Y+G)!==y(e,G)){F=!1;break}if(F)return Y}return-1}h.prototype.includes=function(e,n,a){return this.indexOf(e,n,a)!==-1};h.prototype.indexOf=function(e,n,a){return Vn(this,e,n,a,!0)};h.prototype.lastIndexOf=function(e,n,a){return Vn(this,e,n,a,!1)};function bg(s,e,n,a){n=Number(n)||0;let C=s.length-n;a?(a=Number(a),a>C&&(a=C)):a=C;let l=e.length;a>l/2&&(a=l/2);let E;for(E=0;E<a;++E){let w=parseInt(e.substr(E*2,2),16);if(Ft(w))return E;s[n+E]=w}return E}function Fg(s,e,n,a){return He(yt(e,s.length-n),s,n,a)}function Sg(s,e,n,a){return He(Tg(e),s,n,a)}function xg(s,e,n,a){return He(Xn(e),s,n,a)}function Ng(s,e,n,a){return He(Vg(e,s.length-n),s,n,a)}h.prototype.write=function(e,n,a,C){if(n===void 0)C="utf8",a=this.length,n=0;else if(a===void 0&&typeof n=="string")C=n,a=this.length,n=0;else if(isFinite(n))n=n>>>0,isFinite(a)?(a=a>>>0,C===void 0&&(C="utf8")):(C=a,a=void 0);else throw new Error("Buffer.write(string, encoding, offset[, length]) is no longer supported");let l=this.length-n;if((a===void 0||a>l)&&(a=l),e.length>0&&(a<0||n<0)||n>this.length)throw new RangeError("Attempt to write outside buffer bounds");C||(C="utf8");let E=!1;for(;;)switch(C){case"hex":return bg(this,e,n,a);case"utf8":case"utf-8":return Fg(this,e,n,a);case"ascii":case"latin1":case"binary":return Sg(this,e,n,a);case"base64":return xg(this,e,n,a);case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":return Ng(this,e,n,a);default:if(E)throw new TypeError("Unknown encoding: "+C);C=(""+C).toLowerCase(),E=!0}};h.prototype.toJSON=function(){return{type:"Buffer",data:Array.prototype.slice.call(this._arr||this,0)}};function Mg(s,e,n){return e===0&&n===s.length?Dt.fromByteArray(s):Dt.fromByteArray(s.slice(e,n))}function Pn(s,e,n){n=Math.min(s.length,n);let a=[],C=e;for(;C<n;){let l=s[C],E=null,w=l>239?4:l>223?3:l>191?2:1;if(C+w<=n){let y,Y,F,G;switch(w){case 1:l<128&&(E=l);break;case 2:y=s[C+1],(y&192)===128&&(G=(l&31)<<6|y&63,G>127&&(E=G));break;case 3:y=s[C+1],Y=s[C+2],(y&192)===128&&(Y&192)===128&&(G=(l&15)<<12|(y&63)<<6|Y&63,G>2047&&(G<55296||G>57343)&&(E=G));break;case 4:y=s[C+1],Y=s[C+2],F=s[C+3],(y&192)===128&&(Y&192)===128&&(F&192)===128&&(G=(l&15)<<18|(y&63)<<12|(Y&63)<<6|F&63,G>65535&&G<1114112&&(E=G))}}E===null?(E=65533,w=1):E>65535&&(E-=65536,a.push(E>>>10&1023|55296),E=56320|E&1023),a.push(E),C+=w}return Lg(a)}var Jn=4096;function Lg(s){let e=s.length;if(e<=Jn)return String.fromCharCode.apply(String,s);let n="",a=0;for(;a<e;)n+=String.fromCharCode.apply(String,s.slice(a,a+=Jn));return n}function Gg(s,e,n){let a="";n=Math.min(s.length,n);for(let C=e;C<n;++C)a+=String.fromCharCode(s[C]&127);return a}function Ug(s,e,n){let a="";n=Math.min(s.length,n);for(let C=e;C<n;++C)a+=String.fromCharCode(s[C]);return a}function Kg(s,e,n){let a=s.length;(!e||e<0)&&(e=0),(!n||n<0||n>a)&&(n=a);let C="";for(let l=e;l<n;++l)C+=Pg[s[l]];return C}function Jg(s,e,n){let a=s.slice(e,n),C="";for(let l=0;l<a.length-1;l+=2)C+=String.fromCharCode(a[l]+a[l+1]*256);return C}h.prototype.slice=function(e,n){let a=this.length;e=~~e,n=n===void 0?a:~~n,e<0?(e+=a,e<0&&(e=0)):e>a&&(e=a),n<0?(n+=a,n<0&&(n=0)):n>a&&(n=a),n<e&&(n=e);let C=this.subarray(e,n);return Object.setPrototypeOf(C,h.prototype),C};function eA(s,e,n){if(s%1!==0||s<0)throw new RangeError("offset is not uint");if(s+e>n)throw new RangeError("Trying to access beyond buffer length")}h.prototype.readUintLE=h.prototype.readUIntLE=function(e,n,a){e=e>>>0,n=n>>>0,a||eA(e,n,this.length);let C=this[e],l=1,E=0;for(;++E<n&&(l*=256);)C+=this[e+E]*l;return C};h.prototype.readUintBE=h.prototype.readUIntBE=function(e,n,a){e=e>>>0,n=n>>>0,a||eA(e,n,this.length);let C=this[e+--n],l=1;for(;n>0&&(l*=256);)C+=this[e+--n]*l;return C};h.prototype.readUint8=h.prototype.readUInt8=function(e,n){return e=e>>>0,n||eA(e,1,this.length),this[e]};h.prototype.readUint16LE=h.prototype.readUInt16LE=function(e,n){return e=e>>>0,n||eA(e,2,this.length),this[e]|this[e+1]<<8};h.prototype.readUint16BE=h.prototype.readUInt16BE=function(e,n){return e=e>>>0,n||eA(e,2,this.length),this[e]<<8|this[e+1]};h.prototype.readUint32LE=h.prototype.readUInt32LE=function(e,n){return e=e>>>0,n||eA(e,4,this.length),(this[e]|this[e+1]<<8|this[e+2]<<16)+this[e+3]*16777216};h.prototype.readUint32BE=h.prototype.readUInt32BE=function(e,n){return e=e>>>0,n||eA(e,4,this.length),this[e]*16777216+(this[e+1]<<16|this[e+2]<<8|this[e+3])};h.prototype.readBigUInt64LE=mA(function(e){e=e>>>0,zA(e,"offset");let n=this[e],a=this[e+7];(n===void 0||a===void 0)&&ce(e,this.length-8);let C=n+this[++e]*2**8+this[++e]*2**16+this[++e]*2**24,l=this[++e]+this[++e]*2**8+this[++e]*2**16+a*2**24;return BigInt(C)+(BigInt(l)<<BigInt(32))});h.prototype.readBigUInt64BE=mA(function(e){e=e>>>0,zA(e,"offset");let n=this[e],a=this[e+7];(n===void 0||a===void 0)&&ce(e,this.length-8);let C=n*2**24+this[++e]*2**16+this[++e]*2**8+this[++e],l=this[++e]*2**24+this[++e]*2**16+this[++e]*2**8+a;return(BigInt(C)<<BigInt(32))+BigInt(l)});h.prototype.readIntLE=function(e,n,a){e=e>>>0,n=n>>>0,a||eA(e,n,this.length);let C=this[e],l=1,E=0;for(;++E<n&&(l*=256);)C+=this[e+E]*l;return l*=128,C>=l&&(C-=Math.pow(2,8*n)),C};h.prototype.readIntBE=function(e,n,a){e=e>>>0,n=n>>>0,a||eA(e,n,this.length);let C=n,l=1,E=this[e+--C];for(;C>0&&(l*=256);)E+=this[e+--C]*l;return l*=128,E>=l&&(E-=Math.pow(2,8*n)),E};h.prototype.readInt8=function(e,n){return e=e>>>0,n||eA(e,1,this.length),this[e]&128?(255-this[e]+1)*-1:this[e]};h.prototype.readInt16LE=function(e,n){e=e>>>0,n||eA(e,2,this.length);let a=this[e]|this[e+1]<<8;return a&32768?a|4294901760:a};h.prototype.readInt16BE=function(e,n){e=e>>>0,n||eA(e,2,this.length);let a=this[e+1]|this[e]<<8;return a&32768?a|4294901760:a};h.prototype.readInt32LE=function(e,n){return e=e>>>0,n||eA(e,4,this.length),this[e]|this[e+1]<<8|this[e+2]<<16|this[e+3]<<24};h.prototype.readInt32BE=function(e,n){return e=e>>>0,n||eA(e,4,this.length),this[e]<<24|this[e+1]<<16|this[e+2]<<8|this[e+3]};h.prototype.readBigInt64LE=mA(function(e){e=e>>>0,zA(e,"offset");let n=this[e],a=this[e+7];(n===void 0||a===void 0)&&ce(e,this.length-8);let C=this[e+4]+this[e+5]*2**8+this[e+6]*2**16+(a<<24);return(BigInt(C)<<BigInt(32))+BigInt(n+this[++e]*2**8+this[++e]*2**16+this[++e]*2**24)});h.prototype.readBigInt64BE=mA(function(e){e=e>>>0,zA(e,"offset");let n=this[e],a=this[e+7];(n===void 0||a===void 0)&&ce(e,this.length-8);let C=(n<<24)+this[++e]*2**16+this[++e]*2**8+this[++e];return(BigInt(C)<<BigInt(32))+BigInt(this[++e]*2**24+this[++e]*2**16+this[++e]*2**8+a)});h.prototype.readFloatLE=function(e,n){return e=e>>>0,n||eA(e,4,this.length),XA.read(this,e,!0,23,4)};h.prototype.readFloatBE=function(e,n){return e=e>>>0,n||eA(e,4,this.length),XA.read(this,e,!1,23,4)};h.prototype.readDoubleLE=function(e,n){return e=e>>>0,n||eA(e,8,this.length),XA.read(this,e,!0,52,8)};h.prototype.readDoubleBE=function(e,n){return e=e>>>0,n||eA(e,8,this.length),XA.read(this,e,!1,52,8)};function iA(s,e,n,a,C,l){if(!h.isBuffer(s))throw new TypeError('"buffer" argument must be a Buffer instance');if(e>C||e<l)throw new RangeError('"value" argument is out of bounds');if(n+a>s.length)throw new RangeError("Index out of range")}h.prototype.writeUintLE=h.prototype.writeUIntLE=function(e,n,a,C){if(e=+e,n=n>>>0,a=a>>>0,!C){let w=Math.pow(2,8*a)-1;iA(this,e,n,a,w,0)}let l=1,E=0;for(this[n]=e&255;++E<a&&(l*=256);)this[n+E]=e/l&255;return n+a};h.prototype.writeUintBE=h.prototype.writeUIntBE=function(e,n,a,C){if(e=+e,n=n>>>0,a=a>>>0,!C){let w=Math.pow(2,8*a)-1;iA(this,e,n,a,w,0)}let l=a-1,E=1;for(this[n+l]=e&255;--l>=0&&(E*=256);)this[n+l]=e/E&255;return n+a};h.prototype.writeUint8=h.prototype.writeUInt8=function(e,n,a){return e=+e,n=n>>>0,a||iA(this,e,n,1,255,0),this[n]=e&255,n+1};h.prototype.writeUint16LE=h.prototype.writeUInt16LE=function(e,n,a){return e=+e,n=n>>>0,a||iA(this,e,n,2,65535,0),this[n]=e&255,this[n+1]=e>>>8,n+2};h.prototype.writeUint16BE=h.prototype.writeUInt16BE=function(e,n,a){return e=+e,n=n>>>0,a||iA(this,e,n,2,65535,0),this[n]=e>>>8,this[n+1]=e&255,n+2};h.prototype.writeUint32LE=h.prototype.writeUInt32LE=function(e,n,a){return e=+e,n=n>>>0,a||iA(this,e,n,4,4294967295,0),this[n+3]=e>>>24,this[n+2]=e>>>16,this[n+1]=e>>>8,this[n]=e&255,n+4};h.prototype.writeUint32BE=h.prototype.writeUInt32BE=function(e,n,a){return e=+e,n=n>>>0,a||iA(this,e,n,4,4294967295,0),this[n]=e>>>24,this[n+1]=e>>>16,this[n+2]=e>>>8,this[n+3]=e&255,n+4};function _n(s,e,n,a,C){Zn(e,a,C,s,n,7);let l=Number(e&BigInt(4294967295));s[n++]=l,l=l>>8,s[n++]=l,l=l>>8,s[n++]=l,l=l>>8,s[n++]=l;let E=Number(e>>BigInt(32)&BigInt(4294967295));return s[n++]=E,E=E>>8,s[n++]=E,E=E>>8,s[n++]=E,E=E>>8,s[n++]=E,n}function qn(s,e,n,a,C){Zn(e,a,C,s,n,7);let l=Number(e&BigInt(4294967295));s[n+7]=l,l=l>>8,s[n+6]=l,l=l>>8,s[n+5]=l,l=l>>8,s[n+4]=l;let E=Number(e>>BigInt(32)&BigInt(4294967295));return s[n+3]=E,E=E>>8,s[n+2]=E,E=E>>8,s[n+1]=E,E=E>>8,s[n]=E,n+8}h.prototype.writeBigUInt64LE=mA(function(e,n=0){return _n(this,e,n,BigInt(0),BigInt("0xffffffffffffffff"))});h.prototype.writeBigUInt64BE=mA(function(e,n=0){return qn(this,e,n,BigInt(0),BigInt("0xffffffffffffffff"))});h.prototype.writeIntLE=function(e,n,a,C){if(e=+e,n=n>>>0,!C){let y=Math.pow(2,8*a-1);iA(this,e,n,a,y-1,-y)}let l=0,E=1,w=0;for(this[n]=e&255;++l<a&&(E*=256);)e<0&&w===0&&this[n+l-1]!==0&&(w=1),this[n+l]=(e/E>>0)-w&255;return n+a};h.prototype.writeIntBE=function(e,n,a,C){if(e=+e,n=n>>>0,!C){let y=Math.pow(2,8*a-1);iA(this,e,n,a,y-1,-y)}let l=a-1,E=1,w=0;for(this[n+l]=e&255;--l>=0&&(E*=256);)e<0&&w===0&&this[n+l+1]!==0&&(w=1),this[n+l]=(e/E>>0)-w&255;return n+a};h.prototype.writeInt8=function(e,n,a){return e=+e,n=n>>>0,a||iA(this,e,n,1,127,-128),e<0&&(e=255+e+1),this[n]=e&255,n+1};h.prototype.writeInt16LE=function(e,n,a){return e=+e,n=n>>>0,a||iA(this,e,n,2,32767,-32768),this[n]=e&255,this[n+1]=e>>>8,n+2};h.prototype.writeInt16BE=function(e,n,a){return e=+e,n=n>>>0,a||iA(this,e,n,2,32767,-32768),this[n]=e>>>8,this[n+1]=e&255,n+2};h.prototype.writeInt32LE=function(e,n,a){return e=+e,n=n>>>0,a||iA(this,e,n,4,2147483647,-2147483648),this[n]=e&255,this[n+1]=e>>>8,this[n+2]=e>>>16,this[n+3]=e>>>24,n+4};h.prototype.writeInt32BE=function(e,n,a){return e=+e,n=n>>>0,a||iA(this,e,n,4,2147483647,-2147483648),e<0&&(e=4294967295+e+1),this[n]=e>>>24,this[n+1]=e>>>16,this[n+2]=e>>>8,this[n+3]=e&255,n+4};h.prototype.writeBigInt64LE=mA(function(e,n=0){return _n(this,e,n,-BigInt("0x8000000000000000"),BigInt("0x7fffffffffffffff"))});h.prototype.writeBigInt64BE=mA(function(e,n=0){return qn(this,e,n,-BigInt("0x8000000000000000"),BigInt("0x7fffffffffffffff"))});function On(s,e,n,a,C,l){if(n+a>s.length)throw new RangeError("Index out of range");if(n<0)throw new RangeError("Index out of range")}function Wn(s,e,n,a,C){return e=+e,n=n>>>0,C||On(s,e,n,4,34028234663852886e22,-34028234663852886e22),XA.write(s,e,n,a,23,4),n+4}h.prototype.writeFloatLE=function(e,n,a){return Wn(this,e,n,!0,a)};h.prototype.writeFloatBE=function(e,n,a){return Wn(this,e,n,!1,a)};function jn(s,e,n,a,C){return e=+e,n=n>>>0,C||On(s,e,n,8,17976931348623157e292,-17976931348623157e292),XA.write(s,e,n,a,52,8),n+8}h.prototype.writeDoubleLE=function(e,n,a){return jn(this,e,n,!0,a)};h.prototype.writeDoubleBE=function(e,n,a){return jn(this,e,n,!1,a)};h.prototype.copy=function(e,n,a,C){if(!h.isBuffer(e))throw new TypeError("argument should be a Buffer");if(a||(a=0),!C&&C!==0&&(C=this.length),n>=e.length&&(n=e.length),n||(n=0),C>0&&C<a&&(C=a),C===a||e.length===0||this.length===0)return 0;if(n<0)throw new RangeError("targetStart out of bounds");if(a<0||a>=this.length)throw new RangeError("Index out of range");if(C<0)throw new RangeError("sourceEnd out of bounds");C>this.length&&(C=this.length),e.length-n<C-a&&(C=e.length-n+a);let l=C-a;return this===e&&typeof Uint8Array.prototype.copyWithin=="function"?this.copyWithin(n,a,C):Uint8Array.prototype.set.call(e,this.subarray(a,C),n),l};h.prototype.fill=function(e,n,a,C){if(typeof e=="string"){if(typeof n=="string"?(C=n,n=0,a=this.length):typeof a=="string"&&(C=a,a=this.length),C!==void 0&&typeof C!="string")throw new TypeError("encoding must be a string");if(typeof C=="string"&&!h.isEncoding(C))throw new TypeError("Unknown encoding: "+C);if(e.length===1){let E=e.charCodeAt(0);(C==="utf8"&&E<128||C==="latin1")&&(e=E)}}else typeof e=="number"?e=e&255:typeof e=="boolean"&&(e=Number(e));if(n<0||this.length<n||this.length<a)throw new RangeError("Out of range index");if(a<=n)return this;n=n>>>0,a=a===void 0?this.length:a>>>0,e||(e=0);let l;if(typeof e=="number")for(l=n;l<a;++l)this[l]=e;else{let E=h.isBuffer(e)?e:h.from(e,C),w=E.length;if(w===0)throw new TypeError('The value "'+e+'" is invalid for argument "value"');for(l=0;l<a-n;++l)this[l+n]=E[l%w]}return this};var ZA={};function bt(s,e,n){ZA[s]=class extends n{constructor(){super(),Object.defineProperty(this,"message",{value:e.apply(this,arguments),writable:!0,configurable:!0}),this.name=`${this.name} [${s}]`,this.stack,delete this.name}get code(){return s}set code(C){Object.defineProperty(this,"code",{configurable:!0,enumerable:!0,value:C,writable:!0})}toString(){return`${this.name} [${s}]: ${this.message}`}}}bt("ERR_BUFFER_OUT_OF_BOUNDS",function(s){return s?`${s} is outside of buffer bounds`:"Attempt to access memory outside buffer bounds"},RangeError);bt("ERR_INVALID_ARG_TYPE",function(s,e){return`The "${s}" argument must be of type number. Received type ${typeof e}`},TypeError);bt("ERR_OUT_OF_RANGE",function(s,e,n){let a=`The value of "${s}" is out of range.`,C=n;return Number.isInteger(n)&&Math.abs(n)>2**32?C=Yn(String(n)):typeof n=="bigint"&&(C=String(n),(n>BigInt(2)**BigInt(32)||n<-(BigInt(2)**BigInt(32)))&&(C=Yn(C)),C+="n"),a+=` It must be ${e}. Received ${C}`,a},RangeError);function Yn(s){let e="",n=s.length,a=s[0]==="-"?1:0;for(;n>=a+4;n-=3)e=`_${s.slice(n-3,n)}${e}`;return`${s.slice(0,n)}${e}`}function Yg(s,e,n){zA(e,"offset"),(s[e]===void 0||s[e+n]===void 0)&&ce(e,s.length-(n+1))}function Zn(s,e,n,a,C,l){if(s>n||s<e){let E=typeof e=="bigint"?"n":"",w;throw l>3?e===0||e===BigInt(0)?w=`>= 0${E} and < 2${E} ** ${(l+1)*8}${E}`:w=`>= -(2${E} ** ${(l+1)*8-1}${E}) and < 2 ** ${(l+1)*8-1}${E}`:w=`>= ${e}${E} and <= ${n}${E}`,new ZA.ERR_OUT_OF_RANGE("value",w,s)}Yg(a,C,l)}function zA(s,e){if(typeof s!="number")throw new ZA.ERR_INVALID_ARG_TYPE(e,"number",s)}function ce(s,e,n){throw Math.floor(s)!==s?(zA(s,n),new ZA.ERR_OUT_OF_RANGE(n||"offset","an integer",s)):e<0?new ZA.ERR_BUFFER_OUT_OF_BOUNDS:new ZA.ERR_OUT_OF_RANGE(n||"offset",`>= ${n?1:0} and <= ${e}`,s)}var Hg=/[^+/0-9A-Za-z-_]/g;function vg(s){if(s=s.split("=")[0],s=s.trim().replace(Hg,""),s.length<2)return"";for(;s.length%4!==0;)s=s+"=";return s}function yt(s,e){e=e||1/0;let n,a=s.length,C=null,l=[];for(let E=0;E<a;++E){if(n=s.charCodeAt(E),n>55295&&n<57344){if(!C){if(n>56319){(e-=3)>-1&&l.push(239,191,189);continue}else if(E+1===a){(e-=3)>-1&&l.push(239,191,189);continue}C=n;continue}if(n<56320){(e-=3)>-1&&l.push(239,191,189),C=n;continue}n=(C-55296<<10|n-56320)+65536}else C&&(e-=3)>-1&&l.push(239,191,189);if(C=null,n<128){if((e-=1)<0)break;l.push(n)}else if(n<2048){if((e-=2)<0)break;l.push(n>>6|192,n&63|128)}else if(n<65536){if((e-=3)<0)break;l.push(n>>12|224,n>>6&63|128,n&63|128)}else if(n<1114112){if((e-=4)<0)break;l.push(n>>18|240,n>>12&63|128,n>>6&63|128,n&63|128)}else throw new Error("Invalid code point")}return l}function Tg(s){let e=[];for(let n=0;n<s.length;++n)e.push(s.charCodeAt(n)&255);return e}function Vg(s,e){let n,a,C,l=[];for(let E=0;E<s.length&&!((e-=2)<0);++E)n=s.charCodeAt(E),a=n>>8,C=n%256,l.push(C),l.push(a);return l}function Xn(s){return Dt.toByteArray(vg(s))}function He(s,e,n,a){let C;for(C=0;C<a&&!(C+n>=e.length||C>=s.length);++C)e[C+n]=s[C];return C}function cA(s,e){return s instanceof e||s!=null&&s.constructor!=null&&s.constructor.name!=null&&s.constructor.name===e.name}function Ft(s){return s!==s}var Pg=(function(){let s="0123456789abcdef",e=new Array(256);for(let n=0;n<16;++n){let a=n*16;for(let C=0;C<16;++C)e[a+C]=s[n]+s[C]}return e})();function mA(s){return typeof BigInt>"u"?_g:s}function _g(){throw new Error("BigInt not supported")}});var UA,ve=IA(()=>{UA={writeFileSync(){},readFileSync(){throw new Error("fs unavailable in browser build")},readdirSync(){return[]},existsSync(){return!1}}});var As,wA,St=IA(()=>{As=s=>s.join("/").replace(/\/{2,}/g,"/"),wA={sep:"/",dirname:s=>{let e=String(s),n=e.lastIndexOf("/");return n<0?".":e.slice(0,n)||"/"},join:(...s)=>As(s.map(String)),relative:(s,e)=>String(e),resolve:(...s)=>As(s.map(String)),normalize(s){let e=String(s),n=e.startsWith("/"),a=[];for(let C of e.split("/"))if(!(!C||C===".")){if(C===".."){a.pop();continue}a.push(C)}return(n?"/":"")+a.join("/")||"/"},basename:s=>String(s).split("/").filter(Boolean).pop()||"",extname:s=>{let e=String(s).split("/").filter(Boolean).pop()||"",n=e.lastIndexOf(".");return n>0?e.slice(n):""},isAbsolute:s=>String(s).startsWith("/")}});var ue={};Ee(ue,{default:()=>xt,fileURLToPath:()=>Te,pathToFileURL:()=>es});function qg(s){return s&&typeof s=="object"&&typeof s.href=="string"?s.href:String(s)}function Te(s){return qg(s).replace(/^file:\/\//,"")}function es(s){return{href:"file://"+String(s)}}var xt,KA=IA(()=>{xt={fileURLToPath:Te,pathToFileURL:es}});var ss={};Ee(ss,{createRequire:()=>ns,default:()=>Og});function ns(){return s=>{if(ts[s])return ts[s];throw new Error("require not available in browser build: "+s)}}var ts,Og,gs=IA(()=>{ve();St();KA();ts={fs:UA,path:wA,url:xt};Og={createRequire:ns}});var os=Ke((Ve,is)=>{(function(s,e){typeof Ve=="object"&&typeof is<"u"?e(Ve):typeof define=="function"&&define.amd?define(["exports"],e):(s=typeof globalThis<"u"?globalThis:s||self,e(s.wasmoon={}))})(Ve,(function(s){"use strict";var e=typeof document<"u"?document.currentScript:null;s.LuaReturn=void 0,(function(m){m[m.Ok=0]="Ok",m[m.Yield=1]="Yield",m[m.ErrorRun=2]="ErrorRun",m[m.ErrorSyntax=3]="ErrorSyntax",m[m.ErrorMem=4]="ErrorMem",m[m.ErrorErr=5]="ErrorErr",m[m.ErrorFile=6]="ErrorFile"})(s.LuaReturn||(s.LuaReturn={}));let n=4,a=-1,C=1e6,l=-C-1e3;s.LuaType=void 0,(function(m){m[m.None=-1]="None",m[m.Nil=0]="Nil",m[m.Boolean=1]="Boolean",m[m.LightUserdata=2]="LightUserdata",m[m.Number=3]="Number",m[m.String=4]="String",m[m.Table=5]="Table",m[m.Function=6]="Function",m[m.Userdata=7]="Userdata",m[m.Thread=8]="Thread"})(s.LuaType||(s.LuaType={})),s.LuaEventCodes=void 0,(function(m){m[m.Call=0]="Call",m[m.Ret=1]="Ret",m[m.Line=2]="Line",m[m.Count=3]="Count",m[m.TailCall=4]="TailCall"})(s.LuaEventCodes||(s.LuaEventCodes={})),s.LuaEventMasks=void 0,(function(m){m[m.Call=1]="Call",m[m.Ret=2]="Ret",m[m.Line=4]="Line",m[m.Count=8]="Count"})(s.LuaEventMasks||(s.LuaEventMasks={})),s.LuaLibraries=void 0,(function(m){m.Base="_G",m.Coroutine="coroutine",m.Table="table",m.IO="io",m.OS="os",m.String="string",m.UTF8="utf8",m.Math="math",m.Debug="debug",m.Package="package"})(s.LuaLibraries||(s.LuaLibraries={}));class E extends Error{}class w{constructor(g,o){this.target=g,this.options=o}}function y(m,g){return new w(m,g)}class Y extends Number{}class F extends Array{}let G=1e3;class ${constructor(g,o,c,Q){this.closed=!1,this.lua=g,this.typeExtensions=o,this.address=c,this.parent=Q}newThread(){let g=this.lua.lua_newthread(this.address);if(!g)throw new Error("lua_newthread returned a null pointer");return new $(this.lua,this.typeExtensions,g,this.parent||this)}resetThread(){this.assertOk(this.lua.lua_resetthread(this.address))}loadString(g,o){let c=this.lua.module.lengthBytesUTF8(g),Q=c+1,D=this.lua.module._malloc(Q);try{this.lua.module.stringToUTF8(g,D,Q),this.assertOk(this.lua.luaL_loadbufferx(this.address,D,c,o??D,null))}finally{this.lua.module._free(D)}}loadFile(g){this.assertOk(this.lua.luaL_loadfilex(this.address,g,null))}resume(g=0){let o=this.lua.module._malloc(n);try{return this.lua.module.setValue(o,0,"i32"),{result:this.lua.lua_resume(this.address,null,g,o),resultCount:this.lua.module.getValue(o,"i32")}}finally{this.lua.module._free(o)}}getTop(){return this.lua.lua_gettop(this.address)}setTop(g){this.lua.lua_settop(this.address,g)}remove(g){return this.lua.lua_remove(this.address,g)}setField(g,o,c){g=this.lua.lua_absindex(this.address,g),this.pushValue(c),this.lua.lua_setfield(this.address,g,o)}async run(g=0,o){let c=this.timeout;try{o?.timeout!==void 0&&this.setTimeout(Date.now()+o.timeout);let Q=this.resume(g);for(;Q.result===s.LuaReturn.Yield;){if(this.timeout&&Date.now()>this.timeout)throw Q.resultCount>0&&this.pop(Q.resultCount),new E("thread timeout exceeded");if(Q.resultCount>0){let D=this.getValue(-1);this.pop(Q.resultCount),D===Promise.resolve(D)?await D:await new Promise(S=>setImmediate(S))}else await new Promise(D=>setImmediate(D));Q=this.resume(0)}return this.assertOk(Q.result),this.getStackValues()}finally{o?.timeout!==void 0&&this.setTimeout(c)}}runSync(g=0){let o=this.getTop()-g-1;return this.assertOk(this.lua.lua_pcallk(this.address,g,a,0,0,null)),this.getStackValues(o)}pop(g=1){this.lua.lua_pop(this.address,g)}call(g,...o){let c=this.lua.lua_getglobal(this.address,g);if(c!==s.LuaType.Function)throw new Error(`A function of type '${c}' was pushed, expected is ${s.LuaType.Function}`);for(let D of o)this.pushValue(D);let Q=this.getTop()-o.length-1;return this.lua.lua_callk(this.address,o.length,a,0,null),this.getStackValues(Q)}getStackValues(g=0){let o=this.getTop()-g,c=new F(o);for(let Q=0;Q<o;Q++)c[Q]=this.getValue(g+Q+1);return c}stateToThread(g){var o;return g===((o=this.parent)===null||o===void 0?void 0:o.address)?this.parent:new $(this.lua,this.typeExtensions,g,this.parent||this)}pushValue(g,o){let c=this.getValueDecorations(g),Q=c.target;if(Q instanceof $){this.lua.lua_pushthread(Q.address)===1||this.lua.lua_xmove(Q.address,this.address,1);return}let D=this.getTop();switch(typeof Q){case"undefined":this.lua.lua_pushnil(this.address);break;case"number":Number.isInteger(Q)?this.lua.lua_pushinteger(this.address,BigInt(Q)):this.lua.lua_pushnumber(this.address,Q);break;case"string":this.lua.lua_pushstring(this.address,Q);break;case"boolean":this.lua.lua_pushboolean(this.address,Q?1:0);break;default:if(!this.typeExtensions.find(S=>S.extension.pushValue(this,c,o)))throw new Error(`The type '${typeof Q}' is not supported by Lua`)}if(c.options.metatable&&this.setMetatable(-1,c.options.metatable),this.getTop()!==D+1)throw new Error(`pushValue expected stack size ${D+1}, got ${this.getTop()}`)}setMetatable(g,o){if(g=this.lua.lua_absindex(this.address,g),this.lua.lua_getmetatable(this.address,g)){this.pop(1);let c=this.getMetatableName(g);throw new Error(`data already has associated metatable: ${c||"unknown name"}`)}this.pushValue(o),this.lua.lua_setmetatable(this.address,g)}getMetatableName(g){let o=this.lua.luaL_getmetafield(this.address,g,"__name");if(o===s.LuaType.Nil)return;if(o!==s.LuaType.String){this.pop(1);return}let c=this.lua.lua_tolstring(this.address,-1,null);return this.pop(1),c}getValue(g,o,c){g=this.lua.lua_absindex(this.address,g);let Q=o??this.lua.lua_type(this.address,g);switch(Q){case s.LuaType.None:return;case s.LuaType.Nil:return null;case s.LuaType.Number:return this.lua.lua_tonumberx(this.address,g,null);case s.LuaType.String:return this.lua.lua_tolstring(this.address,g,null);case s.LuaType.Boolean:return!!this.lua.lua_toboolean(this.address,g);case s.LuaType.Thread:return this.stateToThread(this.lua.lua_tothread(this.address,g));default:{let D;(Q===s.LuaType.Table||Q===s.LuaType.Userdata)&&(D=this.getMetatableName(g));let S=this.typeExtensions.find(J=>J.extension.isType(this,g,Q,D));return S?S.extension.getValue(this,g,c):(console.warn(`The type '${this.lua.lua_typename(this.address,Q)}' returned is not supported on JS`),new Y(this.lua.lua_topointer(this.address,g)))}}}close(){this.isClosed()||(this.hookFunctionPointer&&this.lua.module.removeFunction(this.hookFunctionPointer),this.closed=!0)}setTimeout(g){g&&g>0?(this.hookFunctionPointer||(this.hookFunctionPointer=this.lua.module.addFunction(()=>{Date.now()>g&&(this.pushValue(new E("thread timeout exceeded")),this.lua.lua_error(this.address))},"vii")),this.lua.lua_sethook(this.address,this.hookFunctionPointer,s.LuaEventMasks.Count,G),this.timeout=g):this.hookFunctionPointer&&(this.hookFunctionPointer=void 0,this.timeout=void 0,this.lua.lua_sethook(this.address,null,0,0))}getTimeout(){return this.timeout}getPointer(g){return new Y(this.lua.lua_topointer(this.address,g))}isClosed(){var g;return!this.address||this.closed||!!(!((g=this.parent)===null||g===void 0)&&g.isClosed())}indexToString(g){let o=this.lua.luaL_tolstring(this.address,g,null);return this.pop(),o}dumpStack(g=console.log){let o=this.getTop();for(let c=1;c<=o;c++){let Q=this.lua.lua_type(this.address,c),D=this.lua.lua_typename(this.address,Q),S=this.getPointer(c),J=this.indexToString(c),M=this.getValue(c,Q);g(c,D,S,J,M)}}assertOk(g){if(g!==s.LuaReturn.Ok&&g!==s.LuaReturn.Yield){let o=s.LuaReturn[g],c=new Error(`Lua Error(${o}/${g})`);if(this.getTop()>0)if(g===s.LuaReturn.ErrorMem)c.message=this.lua.lua_tolstring(this.address,-1,null);else{let Q=this.getValue(-1);Q instanceof Error&&(c.stack=Q.stack),c.message=this.indexToString(-1)}if(g!==s.LuaReturn.ErrorMem)try{this.lua.luaL_traceback(this.address,this.address,null,1);let Q=this.lua.lua_tolstring(this.address,-1,null);Q.trim()!=="stack traceback:"&&(c.message=`${c.message}
${Q}`),this.pop(1)}catch(Q){console.warn("Failed to generate stack trace",Q)}throw c}}getValueDecorations(g){return g instanceof w?g:new w(g,{})}}class tA extends ${constructor(g,o){if(o){let c={memoryUsed:0},Q=g.module.addFunction((S,J,M,P)=>{if(P===0)return J&&(c.memoryUsed-=M,g.module._free(J)),0;let V=J?P-M:P,q=c.memoryUsed+V;if(P>M&&c.memoryMax&&q>c.memoryMax)return 0;let j=g.module._realloc(J,P);return j&&(c.memoryUsed=q),j},"iiiii"),D=g.lua_newstate(Q,null);if(!D)throw g.module.removeFunction(Q),new Error("lua_newstate returned a null pointer");super(g,[],D),this.memoryStats=c,this.allocatorFunctionPointer=Q}else super(g,[],g.luaL_newstate());if(this.isClosed())throw new Error("Global state could not be created (probably due to lack of memory)")}close(){if(!this.isClosed()){super.close(),this.lua.lua_close(this.address),this.allocatorFunctionPointer&&this.lua.module.removeFunction(this.allocatorFunctionPointer);for(let g of this.typeExtensions)g.extension.close()}}registerTypeExtension(g,o){this.typeExtensions.push({extension:o,priority:g}),this.typeExtensions.sort((c,Q)=>Q.priority-c.priority)}loadLibrary(g){switch(g){case s.LuaLibraries.Base:this.lua.luaopen_base(this.address);break;case s.LuaLibraries.Coroutine:this.lua.luaopen_coroutine(this.address);break;case s.LuaLibraries.Table:this.lua.luaopen_table(this.address);break;case s.LuaLibraries.IO:this.lua.luaopen_io(this.address);break;case s.LuaLibraries.OS:this.lua.luaopen_os(this.address);break;case s.LuaLibraries.String:this.lua.luaopen_string(this.address);break;case s.LuaLibraries.UTF8:this.lua.luaopen_string(this.address);break;case s.LuaLibraries.Math:this.lua.luaopen_math(this.address);break;case s.LuaLibraries.Debug:this.lua.luaopen_debug(this.address);break;case s.LuaLibraries.Package:this.lua.luaopen_package(this.address);break}this.lua.lua_setglobal(this.address,g)}get(g){let o=this.lua.lua_getglobal(this.address,g),c=this.getValue(-1,o);return this.pop(),c}set(g,o){this.pushValue(o),this.lua.lua_setglobal(this.address,g)}getTable(g,o){let c=this.getTop(),Q=this.lua.lua_getglobal(this.address,g);try{if(Q!==s.LuaType.Table)throw new TypeError(`Unexpected type in ${g}. Expected ${s.LuaType[s.LuaType.Table]}. Got ${s.LuaType[Q]}.`);o(c+1)}finally{this.getTop()!==c+1&&console.warn(`getTable: expected stack size ${c} got ${this.getTop()}`),this.setTop(c)}}getMemoryUsed(){return this.getMemoryStatsRef().memoryUsed}getMemoryMax(){return this.getMemoryStatsRef().memoryMax}setMemoryMax(g){this.getMemoryStatsRef().memoryMax=g}getMemoryStatsRef(){if(!this.memoryStats)throw new Error("Memory allocations is not being traced, please build engine with { traceAllocations: true }");return this.memoryStats}}class sA{constructor(g,o){this.thread=g,this.name=o}isType(g,o,c,Q){return c===s.LuaType.Userdata&&Q===this.name}getValue(g,o,c){let Q=g.lua.luaL_testudata(g.address,o,this.name);if(!Q)throw new Error(`data does not have the expected metatable: ${this.name}`);let D=g.lua.module.getValue(Q,"*");return g.lua.getRef(D)}pushValue(g,o,c){let{target:Q}=o,D=g.lua.ref(Q),S=g.lua.lua_newuserdatauv(g.address,n,0);if(g.lua.module.setValue(S,D,"*"),s.LuaType.Nil===g.lua.luaL_getmetatable(g.address,this.name))throw g.pop(2),new Error(`metatable not found: ${this.name}`);return g.lua.lua_setmetatable(g.address,-2),!0}}class ee extends sA{constructor(g,o){if(super(g,"js_error"),this.gcPointer=g.lua.module.addFunction(c=>{let Q=g.lua.luaL_checkudata(c,1,this.name),D=g.lua.module.getValue(Q,"*");return g.lua.unref(D),s.LuaReturn.Ok},"ii"),g.lua.luaL_newmetatable(g.address,this.name)){let c=g.lua.lua_gettop(g.address);g.lua.lua_pushstring(g.address,"protected metatable"),g.lua.lua_setfield(g.address,c,"__metatable"),g.lua.lua_pushcclosure(g.address,this.gcPointer,0),g.lua.lua_setfield(g.address,c,"__gc"),g.pushValue((Q,D)=>D==="message"?Q.message:null),g.lua.lua_setfield(g.address,c,"__index"),g.pushValue(Q=>Q.message),g.lua.lua_setfield(g.address,c,"__tostring")}g.lua.lua_pop(g.address,1),o&&g.set("Error",{create:c=>{if(c&&typeof c!="string")throw new Error("message must be a string");return new Error(c)}})}pushValue(g,o){return o.target instanceof Error?super.pushValue(g,o):!1}close(){this.thread.lua.module.removeFunction(this.gcPointer)}}function Ht(m,g){return new ee(m,g)}class yA{constructor(g){this.count=g}}function te(m,g){return new w(m,g)}class fe extends sA{constructor(g,o){super(g,"js_function"),this.functionRegistry=typeof FinalizationRegistry<"u"?new FinalizationRegistry(c=>{this.thread.isClosed()||this.thread.lua.luaL_unref(this.thread.address,l,c)}):void 0,this.options=o,this.callbackContext=g.newThread(),this.callbackContextIndex=this.thread.lua.luaL_ref(g.address,l),this.functionRegistry||console.warn("FunctionTypeExtension: FinalizationRegistry not found. Memory leaks likely."),this.gcPointer=g.lua.module.addFunction(c=>{g.lua.luaL_checkudata(c,1,this.name);let Q=g.lua.luaL_checkudata(c,1,this.name),D=g.lua.module.getValue(Q,"*");return g.lua.unref(D),s.LuaReturn.Ok},"ii"),g.lua.luaL_newmetatable(g.address,this.name)&&(g.lua.lua_pushstring(g.address,"__gc"),g.lua.lua_pushcclosure(g.address,this.gcPointer,0),g.lua.lua_settable(g.address,-3),g.lua.lua_pushstring(g.address,"__metatable"),g.lua.lua_pushstring(g.address,"protected metatable"),g.lua.lua_settable(g.address,-3)),g.lua.lua_pop(g.address,1),this.functionWrapper=g.lua.module.addFunction(c=>{let Q=g.stateToThread(c),D=g.lua.luaL_checkudata(c,g.lua.lua_upvalueindex(1),this.name),S=g.lua.module.getValue(D,"*"),{target:J,options:M}=g.lua.getRef(S),P=Q.getTop(),V=[];if(M.receiveThread&&V.push(Q),M.receiveArgsQuantity)V.push(P);else for(let q=1;q<=P;q++){let j=Q.getValue(q);(q!==1||!M?.self||j!==M.self)&&V.push(j)}try{let q=J.apply(M?.self,V);if(q===void 0)return 0;if(q instanceof yA)return q.count;if(q instanceof F){for(let j of q)Q.pushValue(j);return q.length}else return Q.pushValue(q),1}catch(q){if(q===1/0)throw q;return Q.pushValue(q),Q.lua.lua_error(Q.address)}},"ii")}close(){this.thread.lua.module.removeFunction(this.gcPointer),this.thread.lua.module.removeFunction(this.functionWrapper),this.callbackContext.close(),this.callbackContext.lua.luaL_unref(this.callbackContext.address,l,this.callbackContextIndex)}isType(g,o,c){return c===s.LuaType.Function}pushValue(g,o){if(typeof o.target!="function")return!1;let c=g.lua.ref(o),Q=g.lua.lua_newuserdatauv(g.address,n,0);if(g.lua.module.setValue(Q,c,"*"),s.LuaType.Nil===g.lua.luaL_getmetatable(g.address,this.name))throw g.pop(1),g.lua.unref(c),new Error(`metatable not found: ${this.name}`);return g.lua.lua_setmetatable(g.address,-2),g.lua.lua_pushcclosure(g.address,this.functionWrapper,1),!0}getValue(g,o){var c;g.lua.lua_pushvalue(g.address,o);let Q=g.lua.luaL_ref(g.address,l),D=(...S)=>{var J;if(this.callbackContext.isClosed()){console.warn("Tried to call a function after closing lua state");return}let M=this.callbackContext.newThread();try{let P=M.lua.lua_rawgeti(M.address,l,BigInt(Q));if(P!==s.LuaType.Function){let q=M.lua.luaL_getmetafield(M.address,-1,"__call");if(M.pop(),q!==s.LuaType.Function)throw new Error(`A value of type '${P}' was pushed but it is not callable`)}for(let q of S)M.pushValue(q);!((J=this.options)===null||J===void 0)&&J.functionTimeout&&M.setTimeout(Date.now()+this.options.functionTimeout);let V=M.lua.lua_pcallk(M.address,S.length,1,0,0,null);if(V===s.LuaReturn.Yield)throw new Error("cannot yield in callbacks from javascript");return M.assertOk(V),M.getTop()>0?M.getValue(-1):void 0}finally{M.close(),this.callbackContext.pop()}};return(c=this.functionRegistry)===null||c===void 0||c.register(D,Q),D}}function qe(m,g){return new fe(m,g)}class he extends sA{constructor(g){if(super(g,"js_null"),this.gcPointer=g.lua.module.addFunction(o=>{let c=g.lua.luaL_checkudata(o,1,this.name),Q=g.lua.module.getValue(c,"*");return g.lua.unref(Q),s.LuaReturn.Ok},"ii"),g.lua.luaL_newmetatable(g.address,this.name)){let o=g.lua.lua_gettop(g.address);g.lua.lua_pushstring(g.address,"protected metatable"),g.lua.lua_setfield(g.address,o,"__metatable"),g.lua.lua_pushcclosure(g.address,this.gcPointer,0),g.lua.lua_setfield(g.address,o,"__gc"),g.pushValue(()=>null),g.lua.lua_setfield(g.address,o,"__index"),g.pushValue(()=>"null"),g.lua.lua_setfield(g.address,o,"__tostring"),g.pushValue((c,Q)=>c===Q),g.lua.lua_setfield(g.address,o,"__eq")}g.lua.lua_pop(g.address,1),super.pushValue(g,new w({},{})),g.lua.lua_setglobal(g.address,"null")}getValue(g,o){if(!g.lua.luaL_testudata(g.address,o,this.name))throw new Error(`data does not have the expected metatable: ${this.name}`);return null}pushValue(g,o){return o?.target!==null?!1:(g.lua.lua_getglobal(g.address,"null"),!0)}close(){this.thread.lua.module.removeFunction(this.gcPointer)}}function pe(m){return new he(m)}class De extends sA{constructor(g,o){if(super(g,"js_promise"),this.gcPointer=g.lua.module.addFunction(c=>{let Q=g.lua.luaL_checkudata(c,1,this.name),D=g.lua.module.getValue(Q,"*");return g.lua.unref(D),s.LuaReturn.Ok},"ii"),g.lua.luaL_newmetatable(g.address,this.name)){let c=g.lua.lua_gettop(g.address);g.lua.lua_pushstring(g.address,"protected metatable"),g.lua.lua_setfield(g.address,c,"__metatable"),g.lua.lua_pushcclosure(g.address,this.gcPointer,0),g.lua.lua_setfield(g.address,c,"__gc");let Q=D=>{if(Promise.resolve(D)!==D&&typeof D.then!="function")throw new Error("promise method called without self instance");return!0};g.pushValue({next:(D,...S)=>Q(D)&&D.then(...S),catch:(D,...S)=>Q(D)&&D.catch(...S),finally:(D,...S)=>Q(D)&&D.finally(...S),await:te((D,S)=>{if(Q(S),D.address===g.address)throw new Error("cannot await in the main thread");let J,M=S.then(V=>{J={status:"fulfilled",value:V}}).catch(V=>{J={status:"rejected",value:V}}),P=this.thread.lua.module.addFunction(V=>{if(!J)return g.lua.lua_yieldk(D.address,0,0,P);this.thread.lua.module.removeFunction(P);let q=g.stateToThread(V);if(J.status==="rejected")return q.pushValue(J.value||new Error("promise rejected with no error")),this.thread.lua.lua_error(V);if(J.value instanceof yA)return J.value.count;if(J.value instanceof F){for(let j of J.value)q.pushValue(j);return J.value.length}else return q.pushValue(J.value),1},"iiii");return D.pushValue(M),new yA(g.lua.lua_yieldk(D.address,1,0,P))},{receiveThread:!0})}),g.lua.lua_setfield(g.address,c,"__index"),g.pushValue((D,S)=>D===S),g.lua.lua_setfield(g.address,c,"__eq")}g.lua.lua_pop(g.address,1),o&&g.set("Promise",{create:c=>new Promise(c),all:c=>{if(!Array.isArray(c))throw new Error("argument must be an array of promises");return Promise.all(c.map(Q=>Promise.resolve(Q)))},resolve:c=>Promise.resolve(c)})}close(){this.thread.lua.module.removeFunction(this.gcPointer)}pushValue(g,o){return Promise.resolve(o.target)!==o.target&&typeof o.target.then!="function"?!1:super.pushValue(g,o)}}function me(m,g){return new De(m,g)}function we(m,g){return new w(m,g||{})}class ne extends sA{constructor(g){if(super(g,"js_proxy"),this.gcPointer=g.lua.module.addFunction(o=>{let c=g.lua.luaL_checkudata(o,1,this.name),Q=g.lua.module.getValue(c,"*");return g.lua.unref(Q),s.LuaReturn.Ok},"ii"),g.lua.luaL_newmetatable(g.address,this.name)){let o=g.lua.lua_gettop(g.address);g.lua.lua_pushstring(g.address,"protected metatable"),g.lua.lua_setfield(g.address,o,"__metatable"),g.lua.lua_pushcclosure(g.address,this.gcPointer,0),g.lua.lua_setfield(g.address,o,"__gc"),g.pushValue((c,Q)=>{switch(typeof Q){case"number":Q=Q-1;case"string":break;default:throw new Error("Only strings or numbers can index js objects")}let D=c[Q];return typeof D=="function"?te(D,{self:c}):D}),g.lua.lua_setfield(g.address,o,"__index"),g.pushValue((c,Q,D)=>{switch(typeof Q){case"number":Q=Q-1;case"string":break;default:throw new Error("Only strings or numbers can index js objects")}c[Q]=D}),g.lua.lua_setfield(g.address,o,"__newindex"),g.pushValue(c=>{var Q,D;return(D=(Q=c.toString)===null||Q===void 0?void 0:Q.call(c))!==null&&D!==void 0?D:typeof c}),g.lua.lua_setfield(g.address,o,"__tostring"),g.pushValue(c=>c.length||0),g.lua.lua_setfield(g.address,o,"__len"),g.pushValue(c=>{let Q=Object.getOwnPropertyNames(c),D=0;return F.of(()=>{let S=F.of(Q[D],c[Q[D]]);return D++,S},c,null)}),g.lua.lua_setfield(g.address,o,"__pairs"),g.pushValue((c,Q)=>c===Q),g.lua.lua_setfield(g.address,o,"__eq"),g.pushValue((c,...Q)=>(Q[0]===c&&Q.shift(),c(...Q))),g.lua.lua_setfield(g.address,o,"__call")}g.lua.lua_pop(g.address,1)}isType(g,o,c,Q){return c===s.LuaType.Userdata&&Q===this.name}getValue(g,o){let c=g.lua.lua_touserdata(g.address,o),Q=g.lua.module.getValue(c,"*");return g.lua.getRef(Q)}pushValue(g,o){var c;let{target:Q,options:D}=o;if(D.proxy===void 0){if(Q==null||typeof Q!="object"&&!(typeof Q=="function"&&((c=Q.prototype)===null||c===void 0?void 0:c.constructor)===Q&&Q.toString().startsWith("class "))||Promise.resolve(Q)===Q||typeof Q.then=="function")return!1}else if(D.proxy===!1)return!1;return D.metatable&&!(D.metatable instanceof w)?(o.options.metatable=we(D.metatable,{proxy:!1}),!1):super.pushValue(g,o)}close(){this.thread.lua.module.removeFunction(this.gcPointer)}}function se(m){return new ne(m)}class ge extends sA{constructor(g){super(g,"js_table")}close(){}isType(g,o,c){return c===s.LuaType.Table}getValue(g,o,c){let Q=c||new Map,D=g.lua.lua_topointer(g.address,o),S=Q.get(D);if(!S){let J=this.readTableKeys(g,o);S=J.length>0&&J.every((P,V)=>P===String(V+1))?[]:{},Q.set(D,S),this.readTableValues(g,o,Q,S)}return S}pushValue(g,{target:o},c){if(typeof o!="object"||o===null)return!1;let Q=c||new Map,D=Q.get(o);if(D!==void 0)return g.lua.lua_rawgeti(g.address,l,BigInt(D)),!0;try{let S=g.getTop()+1,J=(M,P)=>{g.lua.lua_createtable(g.address,M,P);let V=g.lua.luaL_ref(g.address,l);Q.set(o,V),g.lua.lua_rawgeti(g.address,l,BigInt(V))};if(Array.isArray(o)){J(o.length,0);for(let M=0;M<o.length;M++)g.pushValue(M+1,Q),g.pushValue(o[M],Q),g.lua.lua_settable(g.address,S)}else{J(0,Object.getOwnPropertyNames(o).length);for(let M in o)g.pushValue(M,Q),g.pushValue(o[M],Q),g.lua.lua_settable(g.address,S)}}finally{if(c===void 0)for(let S of Q.values())g.lua.luaL_unref(g.address,l,S)}return!0}readTableKeys(g,o){let c=[];for(g.lua.lua_pushnil(g.address);g.lua.lua_next(g.address,o);){let Q=g.indexToString(-2);c.push(Q),g.pop()}return c}readTableValues(g,o,c,Q){let D=Array.isArray(Q);for(g.lua.lua_pushnil(g.address);g.lua.lua_next(g.address,o);){let S=g.indexToString(-2),J=g.getValue(-1,void 0,c);D?Q.push(J):Q[S]=J,g.pop()}}}function Ks(m){return new ge(m)}function Js(m){return new w(m,{reference:!0})}class Ys extends sA{constructor(g){if(super(g,"js_userdata"),this.gcPointer=g.lua.module.addFunction(o=>{let c=g.lua.luaL_checkudata(o,1,this.name),Q=g.lua.module.getValue(c,"*");return g.lua.unref(Q),s.LuaReturn.Ok},"ii"),g.lua.luaL_newmetatable(g.address,this.name)){let o=g.lua.lua_gettop(g.address);g.lua.lua_pushstring(g.address,"protected metatable"),g.lua.lua_setfield(g.address,o,"__metatable"),g.lua.lua_pushcclosure(g.address,this.gcPointer,0),g.lua.lua_setfield(g.address,o,"__gc")}g.lua.lua_pop(g.address,1)}isType(g,o,c,Q){return c===s.LuaType.Userdata&&Q===this.name}getValue(g,o){let c=g.lua.lua_touserdata(g.address,o),Q=g.lua.module.getValue(c,"*");return g.lua.getRef(Q)}pushValue(g,o){return o.options.reference?super.pushValue(g,o):!1}close(){this.thread.lua.module.removeFunction(this.gcPointer)}}function Hs(m){return new Ys(m)}class vt{constructor(g,{openStandardLibs:o=!0,injectObjects:c=!1,enableProxy:Q=!0,traceAllocations:D=!1,functionTimeout:S=void 0}={}){this.cmodule=g,this.global=new tA(this.cmodule,D),this.global.registerTypeExtension(0,Ks(this.global)),this.global.registerTypeExtension(0,qe(this.global,{functionTimeout:S})),this.global.registerTypeExtension(1,me(this.global,c)),c&&this.global.registerTypeExtension(5,pe(this.global)),Q?this.global.registerTypeExtension(3,se(this.global)):this.global.registerTypeExtension(1,Ht(this.global,c)),this.global.registerTypeExtension(4,Hs(this.global)),o&&this.cmodule.luaL_openlibs(this.global.address)}doString(g){return this.callByteCode(o=>o.loadString(g))}doFile(g){return this.callByteCode(o=>o.loadFile(g))}doStringSync(g){return this.global.loadString(g),this.global.runSync()[0]}doFileSync(g){return this.global.loadFile(g),this.global.runSync()[0]}async callByteCode(g){let o=this.global.newThread(),c=this.global.getTop();try{g(o);let Q=await o.run(0);return Q.length>0?(this.cmodule.lua_xmove(o.address,this.global.address,Q.length),this.global.getValue(this.global.getTop()-Q.length+1)):void 0}finally{this.global.remove(c)}}}var vs=(()=>{var m=typeof document>"u"&&typeof location>"u"?(KA(),Qe(ue)).pathToFileURL("/engine.js").href:typeof document>"u"?location.href:e&&e.src||new URL("index.js",document.baseURI).href;return(async function(g={}){var o=g,c,Q;o.ready=new Promise((A,t)=>{c=A,Q=t}),"_malloc _free _realloc _luaL_checkversion_ _luaL_getmetafield _luaL_callmeta _luaL_tolstring _luaL_argerror _luaL_typeerror _luaL_checklstring _luaL_optlstring _luaL_checknumber _luaL_optnumber _luaL_checkinteger _luaL_optinteger _luaL_checkstack _luaL_checktype _luaL_checkany _luaL_newmetatable _luaL_setmetatable _luaL_testudata _luaL_checkudata _luaL_where _luaL_fileresult _luaL_execresult _luaL_ref _luaL_unref _luaL_loadfilex _luaL_loadbufferx _luaL_loadstring _luaL_newstate _luaL_len _luaL_addgsub _luaL_gsub _luaL_setfuncs _luaL_getsubtable _luaL_traceback _luaL_requiref _luaL_buffinit _luaL_prepbuffsize _luaL_addlstring _luaL_addstring _luaL_addvalue _luaL_pushresult _luaL_pushresultsize _luaL_buffinitsize _lua_newstate _lua_close _lua_newthread _lua_resetthread _lua_atpanic _lua_version _lua_absindex _lua_gettop _lua_settop _lua_pushvalue _lua_rotate _lua_copy _lua_checkstack _lua_xmove _lua_isnumber _lua_isstring _lua_iscfunction _lua_isinteger _lua_isuserdata _lua_type _lua_typename _lua_tonumberx _lua_tointegerx _lua_toboolean _lua_tolstring _lua_rawlen _lua_tocfunction _lua_touserdata _lua_tothread _lua_topointer _lua_arith _lua_rawequal _lua_compare _lua_pushnil _lua_pushnumber _lua_pushinteger _lua_pushlstring _lua_pushstring _lua_pushcclosure _lua_pushboolean _lua_pushlightuserdata _lua_pushthread _lua_getglobal _lua_gettable _lua_getfield _lua_geti _lua_rawget _lua_rawgeti _lua_rawgetp _lua_createtable _lua_newuserdatauv _lua_getmetatable _lua_getiuservalue _lua_setglobal _lua_settable _lua_setfield _lua_seti _lua_rawset _lua_rawseti _lua_rawsetp _lua_setmetatable _lua_setiuservalue _lua_callk _lua_pcallk _lua_load _lua_dump _lua_yieldk _lua_resume _lua_status _lua_isyieldable _lua_setwarnf _lua_warning _lua_error _lua_next _lua_concat _lua_len _lua_stringtonumber _lua_getallocf _lua_setallocf _lua_toclose _lua_closeslot _lua_getstack _lua_getinfo _lua_getlocal _lua_setlocal _lua_getupvalue _lua_setupvalue _lua_upvalueid _lua_upvaluejoin _lua_sethook _lua_gethook _lua_gethookmask _lua_gethookcount _lua_setcstacklimit _luaopen_base _luaopen_coroutine _luaopen_table _luaopen_io _luaopen_os _luaopen_string _luaopen_utf8 _luaopen_math _luaopen_debug _luaopen_package _luaL_openlibs _memory ___indirect_function_table _fflush onRuntimeInitialized".split(" ").forEach(A=>{Object.getOwnPropertyDescriptor(o.ready,A)||Object.defineProperty(o.ready,A,{get:()=>Z("You are getting "+A+" on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js"),set:()=>Z("You are setting "+A+" on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js")})});var D=Object.assign({},o),S="./this.program",J=(A,t)=>{throw t},M=typeof window=="object",P=typeof importScripts=="function",V=typeof process=="object"&&typeof process.versions=="object"&&typeof process.versions.node=="string",q=!M&&!V&&!P;if(o.ENVIRONMENT)throw Error("Module.ENVIRONMENT has been deprecated. To force the environment, use the ENVIRONMENT compile-time option (for example, -sENVIRONMENT=web or -sENVIRONMENT=node)");var j="",JA,YA,HA;if(V){if(typeof process>"u"||!process.release||process.release.name!=="node")throw Error("not compiled for this environment (did you build to HTML and try to run it not on the web, or set ENVIRONMENT to something - like node - and run it someplace else - like on the web?)");var Tt=process.versions.node,ie=Tt.split(".").slice(0,3);if(ie=1e4*ie[0]+100*ie[1]+1*ie[2].split("-")[0],16e4>ie)throw Error("This emscripten-generated code requires node v16.0.0 (detected v"+Tt+")");let{createRequire:A}=await Promise.resolve().then(()=>(gs(),ss));var vA=A(typeof document>"u"&&typeof location>"u"?(KA(),Qe(ue)).pathToFileURL("/engine.js").href:typeof document>"u"?location.href:e&&e.src||new URL("index.js",document.baseURI).href),Oe=vA("fs"),We=vA("path");P?j=We.dirname(j)+"/":j=vA("url").fileURLToPath(new URL("./",typeof document>"u"&&typeof location>"u"?(KA(),Qe(ue)).pathToFileURL("/engine.js").href:typeof document>"u"?location.href:e&&e.src||new URL("index.js",document.baseURI).href)),JA=(t,i)=>(t=Ce(t)?new URL(t):We.normalize(t),Oe.readFileSync(t,i?void 0:"utf8")),HA=t=>(t=JA(t,!0),t.buffer||(t=new Uint8Array(t)),R(t.buffer),t),YA=(t,i,r,B=!0)=>{t=Ce(t)?new URL(t):We.normalize(t),Oe.readFile(t,B?void 0:"utf8",(u,p)=>{u?r(u):i(B?p.buffer:p)})},!o.thisProgram&&1<process.argv.length&&(S=process.argv[1].replace(/\\/g,"/")),process.argv.slice(2),J=(t,i)=>{throw process.exitCode=t,i},o.inspect=()=>"[Emscripten Module object]"}else if(q){if(typeof process=="object"&&typeof vA=="function"||typeof window=="object"||typeof importScripts=="function")throw Error("not compiled for this environment (did you build to HTML and try to run it not on the web, or set ENVIRONMENT to something - like node - and run it someplace else - like on the web?)");typeof read<"u"&&(JA=read),HA=A=>typeof readbuffer=="function"?new Uint8Array(readbuffer(A)):(A=read(A,"binary"),R(typeof A=="object"),A),YA=(A,t)=>{setTimeout(()=>t(HA(A)))},typeof clearTimeout>"u"&&(globalThis.clearTimeout=()=>{}),typeof setTimeout>"u"&&(globalThis.setTimeout=A=>typeof A=="function"?A():Z()),typeof quit=="function"&&(J=(A,t)=>{throw setTimeout(()=>{if(!(t instanceof en)){let i=t;t&&typeof t=="object"&&t.stack&&(i=[t,t.stack]),X(`exiting due to exception: ${i}`)}quit(A)}),t}),typeof print<"u"&&(typeof console>"u"&&(console={}),console.log=print,console.warn=console.error=typeof printErr<"u"?printErr:print)}else if(M||P){if(P?j=self.location.href:typeof document<"u"&&document.currentScript&&(j=document.currentScript.src),m&&(j=m),j.indexOf("blob:")!==0?j=j.substr(0,j.replace(/[?#].*/,"").lastIndexOf("/")+1):j="",typeof window!="object"&&typeof importScripts!="function")throw Error("not compiled for this environment (did you build to HTML and try to run it not on the web, or set ENVIRONMENT to something - like node - and run it someplace else - like on the web?)");JA=A=>{var t=new XMLHttpRequest;return t.open("GET",A,!1),t.send(null),t.responseText},P&&(HA=A=>{var t=new XMLHttpRequest;return t.open("GET",A,!1),t.responseType="arraybuffer",t.send(null),new Uint8Array(t.response)}),YA=(A,t,i)=>{var r=new XMLHttpRequest;r.open("GET",A,!0),r.responseType="arraybuffer",r.onload=()=>{r.status==200||r.status==0&&r.response?t(r.response):i()},r.onerror=i,r.send(null)}}else throw Error("environment detection error");var TA=console.log.bind(console),X=console.error.bind(console);Object.assign(o,D),D=null,L("ENVIRONMENT"),L("GL_MAX_TEXTURE_IMAGE_UNITS"),L("SDL_canPlayWithWebAudio"),L("SDL_numSimultaneouslyQueuedBuffers"),L("INITIAL_MEMORY"),L("wasmMemory"),L("arguments"),L("buffer"),L("canvas"),L("doNotCaptureKeyboard"),L("dynamicLibraries"),L("elementPointerLock"),L("extraStackTrace"),L("forcedAspectRatio"),L("instantiateWasm"),L("keyboardListeningElement"),L("freePreloadedMediaOnUse"),L("loadSplitModule"),L("logReadFiles"),L("mainScriptUrlOrBlob"),L("mem"),L("monitorRunDependencies"),L("noExitRuntime"),L("noInitialRun"),L("onAbort"),L("onCustomMessage"),L("onExit"),L("onFree"),L("onFullScreen"),L("onMalloc"),L("onRealloc"),L("onRuntimeInitialized"),L("postMainLoop"),L("postRun"),L("preInit"),L("preMainLoop"),L("preinitializedWebGLContext"),L("memoryInitializerRequest"),L("preloadPlugins"),L("print"),L("printErr"),L("quit"),L("setStatus"),L("statusMessage"),L("stderr"),L("stdin"),L("stdout"),L("thisProgram"),L("wasm"),L("wasmBinary"),L("websocket"),L("fetchSettings"),uA("arguments","arguments_"),uA("thisProgram","thisProgram"),uA("quit","quit_"),R(typeof o.memoryInitializerPrefixURL>"u","Module.memoryInitializerPrefixURL option was removed, use Module.locateFile instead"),R(typeof o.pthreadMainPrefixURL>"u","Module.pthreadMainPrefixURL option was removed, use Module.locateFile instead"),R(typeof o.cdInitializerPrefixURL>"u","Module.cdInitializerPrefixURL option was removed, use Module.locateFile instead"),R(typeof o.filePackagePrefixURL>"u","Module.filePackagePrefixURL option was removed, use Module.locateFile instead"),R(typeof o.read>"u","Module.read option was removed (modify read_ in JS)"),R(typeof o.readAsync>"u","Module.readAsync option was removed (modify readAsync in JS)"),R(typeof o.readBinary>"u","Module.readBinary option was removed (modify readBinary in JS)"),R(typeof o.setWindowTitle>"u","Module.setWindowTitle option was removed (modify emscripten_set_window_title in JS)"),R(typeof o.TOTAL_MEMORY>"u","Module.TOTAL_MEMORY has been renamed Module.INITIAL_MEMORY"),uA("asm","wasmExports"),uA("read","read_"),uA("readAsync","readAsync"),uA("readBinary","readBinary"),uA("setWindowTitle","setWindowTitle"),R(!q,"shell environment detected but not enabled at build time.  Add 'shell' to `-sENVIRONMENT` to enable."),uA("wasmBinary","wasmBinary"),typeof WebAssembly!="object"&&Z("no native wasm support detected");var oe,re=!1;function R(A,t){A||Z("Assertion failed"+(t?": "+t:""))}var AA,Re,VA,x,W,je,ke,Ze;function Vt(){var A=oe.buffer;o.HEAP8=AA=new Int8Array(A),o.HEAP16=VA=new Int16Array(A),o.HEAPU8=Re=new Uint8Array(A),o.HEAPU16=new Uint16Array(A),o.HEAP32=x=new Int32Array(A),o.HEAPU32=W=new Uint32Array(A),o.HEAPF32=je=new Float32Array(A),o.HEAPF64=Ze=new Float64Array(A),o.HEAP64=ke=new BigInt64Array(A),o.HEAPU64=new BigUint64Array(A)}R(!o.STACK_SIZE,"STACK_SIZE can no longer be set at runtime.  Use -sSTACK_SIZE at link time"),R(typeof Int32Array<"u"&&typeof Float64Array<"u"&&Int32Array.prototype.subarray!=null&&Int32Array.prototype.set!=null,"JS engine does not provide full typed array support"),R(!o.wasmMemory,"Use of `wasmMemory` detected.  Use -sIMPORTED_MEMORY to define wasmMemory externally"),R(!o.INITIAL_MEMORY,"Detected runtime INITIAL_MEMORY setting.  Use -sIMPORTED_MEMORY to define wasmMemory dynamically");function Xe(){if(!re){var A=dt();A==0&&(A+=4);var t=W[A>>2],i=W[A+4>>2];t==34821223&&i==2310721022||Z(`Stack overflow! Stack cookie has been overwritten at ${Be(A)}, expected hex dwords 0x89BACDFE and 0x2135467, but received ${Be(i)} ${Be(t)}`),W[0]!=1668509029&&Z("Runtime error: The application has corrupted its heap memory area (address zero)!")}}var Pt=new Int16Array(1),_t=new Int8Array(Pt.buffer);if(Pt[0]=25459,_t[0]!==115||_t[1]!==99)throw"Runtime error: expected the system to be little-endian! (Run with -sSUPPORT_BIG_ENDIAN to bypass)";var ze=[],$e=[],qt=[],At=!1;R(Math.imul,"This browser does not support Math.imul(), build with LEGACY_VM_SUPPORT or POLYFILL_OLD_MATH_FUNCTIONS to add in a polyfill"),R(Math.fround,"This browser does not support Math.fround(), build with LEGACY_VM_SUPPORT or POLYFILL_OLD_MATH_FUNCTIONS to add in a polyfill"),R(Math.clz32,"This browser does not support Math.clz32(), build with LEGACY_VM_SUPPORT or POLYFILL_OLD_MATH_FUNCTIONS to add in a polyfill"),R(Math.trunc,"This browser does not support Math.trunc(), build with LEGACY_VM_SUPPORT or POLYFILL_OLD_MATH_FUNCTIONS to add in a polyfill");var ae=0,RA=null,Ie=null,PA={};function Ot(A){for(var t=A;;){if(!PA[A])return A;A=t+Math.random()}}function et(A){ae++,A?(R(!PA[A]),PA[A]=1,RA===null&&typeof setInterval<"u"&&(RA=setInterval(()=>{if(re)clearInterval(RA),RA=null;else{var t=!1,i;for(i in PA)t||(t=!0,X("still waiting on run dependencies:")),X(`dependency: ${i}`);t&&X("(end of list)")}},1e4))):X("warning: run dependency added without ID")}function be(A){ae--,A?(R(PA[A]),delete PA[A]):X("warning: run dependency removed without ID"),ae==0&&(RA!==null&&(clearInterval(RA),RA=null),Ie&&(A=Ie,Ie=null,A()))}function Z(A){throw A="Aborted("+A+")",X(A),re=!0,A=new WebAssembly.RuntimeError(A),Q(A),A}var Wt=A=>A.startsWith("data:application/octet-stream;base64,"),Ce=A=>A.startsWith("file://");function d(A){return function(){R(At,`native function \`${A}\` called before runtime initialization`);var t=MA[A];return R(t,`exported native function \`${A}\` not found`),t.apply(null,arguments)}}var DA;if(o.locateFile){if(DA="glue.wasm",!Wt(DA)){var jt=DA;DA=o.locateFile?o.locateFile(jt,j):j+jt}}else DA=new URL("glue.wasm",typeof document>"u"&&typeof location>"u"?(KA(),Qe(ue)).pathToFileURL("/engine.js").href:typeof document>"u"?location.href:e&&e.src||new URL("index.js",document.baseURI).href).href;function Zt(A){if(HA)return HA(A);throw"both async and sync fetching of the wasm failed"}function Ps(A){if(M||P){if(typeof fetch=="function"&&!Ce(A))return fetch(A,{credentials:"same-origin"}).then(t=>{if(!t.ok)throw"failed to load wasm binary file at '"+A+"'";return t.arrayBuffer()}).catch(()=>Zt(A));if(YA)return new Promise((t,i)=>{YA(A,r=>t(new Uint8Array(r)),i)})}return Promise.resolve().then(()=>Zt(A))}function Xt(A,t,i){return Ps(A).then(r=>WebAssembly.instantiate(r,t)).then(r=>r).then(i,r=>{X(`failed to asynchronously prepare wasm: ${r}`),Ce(DA)&&X(`warning: Loading from a file URI (${DA}) is not supported in most browsers. See https://emscripten.org/docs/getting_started/FAQ.html#how-do-i-run-a-local-webserver-for-testing-why-does-my-program-stall-in-downloading-or-preparing`),Z(r)})}function _s(A,t){var i=DA;return typeof WebAssembly.instantiateStreaming!="function"||Wt(i)||Ce(i)||V||typeof fetch!="function"?Xt(i,A,t):fetch(i,{credentials:"same-origin"}).then(r=>WebAssembly.instantiateStreaming(r,A).then(t,function(B){return X(`wasm streaming compile failed: ${B}`),X("falling back to ArrayBuffer instantiation"),Xt(i,A,t)}))}function uA(A,t){Object.getOwnPropertyDescriptor(o,A)||Object.defineProperty(o,A,{configurable:!0,get(){Z(`\`Module.${A}\` has been replaced by \`${t}\` (the initial value can be provided on Module, but after startup the value is only looked for on a local variable of that name)`)}})}function L(A){Object.getOwnPropertyDescriptor(o,A)&&Z(`\`Module.${A}\` was supplied but \`${A}\` not included in INCOMING_MODULE_JS_API`)}function zt(A){return A==="FS_createPath"||A==="FS_createDataFile"||A==="FS_createPreloadedFile"||A==="FS_unlink"||A==="addRunDependency"||A==="FS_createLazyFile"||A==="FS_createDevice"||A==="removeRunDependency"}function $t(A,t){typeof globalThis<"u"&&Object.defineProperty(globalThis,A,{configurable:!0,get(){_A(`\`${A}\` is not longer defined by emscripten. ${t}`)}})}$t("buffer","Please use HEAP8.buffer or wasmMemory.buffer"),$t("asm","Please use wasmExports instead");function An(A){Object.getOwnPropertyDescriptor(o,A)||Object.defineProperty(o,A,{configurable:!0,get(){var t=`'${A}' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the Emscripten FAQ)`;zt(A)&&(t+=". Alternatively, forcing filesystem support (-sFORCE_FILESYSTEM) can export this for you"),Z(t)}})}function en(A){this.name="ExitStatus",this.message=`Program terminated with exit(${A})`,this.status=A}var Be=A=>(R(typeof A=="number"),"0x"+(A>>>0).toString(16).padStart(8,"0")),_A=A=>{tt||={},tt[A]||(tt[A]=1,V&&(A="warning: "+A),X(A))},tt,tn=(A,t)=>{for(var i=0,r=A.length-1;0<=r;r--){var B=A[r];B==="."?A.splice(r,1):B===".."?(A.splice(r,1),i++):i&&(A.splice(r,1),i--)}if(t)for(;i;i--)A.unshift("..");return A},dA=A=>{var t=A.charAt(0)==="/",i=A.substr(-1)==="/";return(A=tn(A.split("/").filter(r=>!!r),!t).join("/"))||t||(A="."),A&&i&&(A+="/"),(t?"/":"")+A},nt=A=>{var t=/^(\/?|)([\s\S]*?)((?:\.{1,2}|[^\/]+?|)(\.[^.\/]*|))(?:[\/]*)$/.exec(A).slice(1);return A=t[0],t=t[1],!A&&!t?".":(t&&=t.substr(0,t.length-1),A+t)},kA=A=>{if(A==="/")return"/";A=dA(A),A=A.replace(/\/$/,"");var t=A.lastIndexOf("/");return t===-1?A:A.substr(t+1)},qs=(A,t)=>dA(A+"/"+t),Os=()=>{if(typeof crypto=="object"&&typeof crypto.getRandomValues=="function")return i=>crypto.getRandomValues(i);if(V)try{var A=vA("crypto");if(A.randomFillSync)return i=>A.randomFillSync(i);var t=A.randomBytes;return i=>(i.set(t(i.byteLength)),i)}catch{}Z("no cryptographic support found for randomDevice. consider polyfilling it if you want to use something insecure like Math.random(), e.g. put this in a --pre-js: var crypto = { getRandomValues: (array) => { for (var i = 0; i < array.length; i++) array[i] = (Math.random()*256)|0 } };")},nn=A=>(nn=Os())(A);function bA(){for(var A="",t=!1,i=arguments.length-1;-1<=i&&!t;i--){if(t=0<=i?arguments[i]:I.cwd(),typeof t!="string")throw new TypeError("Arguments to path.resolve must be strings");if(!t)return"";A=t+"/"+A,t=t.charAt(0)==="/"}return A=tn(A.split("/").filter(r=>!!r),!t).join("/"),(t?"/":"")+A||"."}var sn=(A,t)=>{function i(p){for(var k=0;k<p.length&&p[k]==="";k++);for(var v=p.length-1;0<=v&&p[v]==="";v--);return k>v?[]:p.slice(k,v-k+1)}A=bA(A).substr(1),t=bA(t).substr(1),A=i(A.split("/")),t=i(t.split("/"));for(var r=Math.min(A.length,t.length),B=r,u=0;u<r;u++)if(A[u]!==t[u]){B=u;break}for(r=[],u=B;u<A.length;u++)r.push("..");return r=r.concat(t.slice(B)),r.join("/")},gn=typeof TextDecoder<"u"?new TextDecoder("utf8"):void 0,qA=(A,t)=>{for(var i=t+NaN,r=t;A[r]&&!(r>=i);)++r;if(16<r-t&&A.buffer&&gn)return gn.decode(A.subarray(t,r));for(i="";t<r;){var B=A[t++];if(B&128){var u=A[t++]&63;if((B&224)==192)i+=String.fromCharCode((B&31)<<6|u);else{var p=A[t++]&63;(B&240)==224?B=(B&15)<<12|u<<6|p:((B&248)!=240&&_A("Invalid UTF-8 leading byte "+Be(B)+" encountered when deserializing a UTF-8 string in wasm memory to a JS string!"),B=(B&7)<<18|u<<12|p<<6|A[t++]&63),65536>B?i+=String.fromCharCode(B):(B-=65536,i+=String.fromCharCode(55296|B>>10,56320|B&1023))}}else i+=String.fromCharCode(B)}return i},st=[],OA=A=>{for(var t=0,i=0;i<A.length;++i){var r=A.charCodeAt(i);127>=r?t++:2047>=r?t+=2:55296<=r&&57343>=r?(t+=4,++i):t+=3}return t},gt=(A,t,i,r)=>{if(R(typeof A=="string",`stringToUTF8Array expects a string (got ${typeof A})`),!(0<r))return 0;var B=i;r=i+r-1;for(var u=0;u<A.length;++u){var p=A.charCodeAt(u);if(55296<=p&&57343>=p){var k=A.charCodeAt(++u);p=65536+((p&1023)<<10)|k&1023}if(127>=p){if(i>=r)break;t[i++]=p}else{if(2047>=p){if(i+1>=r)break;t[i++]=192|p>>6}else{if(65535>=p){if(i+2>=r)break;t[i++]=224|p>>12}else{if(i+3>=r)break;1114111<p&&_A("Invalid Unicode code point "+Be(p)+" encountered when serializing a JS string to a UTF-8 string in wasm memory! (Valid unicode code points should be in range 0-0x10FFFF)."),t[i++]=240|p>>18,t[i++]=128|p>>12&63}t[i++]=128|p>>6&63}t[i++]=128|p&63}}return t[i]=0,i-B};function Fe(A,t){var i=Array(OA(A)+1);return A=gt(A,i,0,i.length),t&&(i.length=A),i}var it=[];function on(A,t){it[A]={input:[],output:[],K:t},rt(A,Ws)}var Ws={open(A){var t=it[A.node.rdev];if(!t)throw new I.g(43);A.tty=t,A.seekable=!1},close(A){A.tty.K.fsync(A.tty)},fsync(A){A.tty.K.fsync(A.tty)},read(A,t,i,r){if(!A.tty||!A.tty.K.ra)throw new I.g(60);for(var B=0,u=0;u<r;u++){try{var p=A.tty.K.ra(A.tty)}catch{throw new I.g(29)}if(p===void 0&&B===0)throw new I.g(6);if(p==null)break;B++,t[i+u]=p}return B&&(A.node.timestamp=Date.now()),B},write(A,t,i,r){if(!A.tty||!A.tty.K.ia)throw new I.g(60);try{for(var B=0;B<r;B++)A.tty.K.ia(A.tty,t[i+B])}catch{throw new I.g(29)}return r&&(A.node.timestamp=Date.now()),B}},js={ra(){A:{if(!st.length){var A=null;if(V){var t=Buffer.alloc(256),i=0,r=process.stdin.fd;try{i=Oe.readSync(r,t)}catch(B){if(B.toString().includes("EOF"))i=0;else throw B}0<i?A=t.slice(0,i).toString("utf-8"):A=null}else typeof window<"u"&&typeof window.prompt=="function"?(A=window.prompt("Input: "),A!==null&&(A+=`
`)):typeof readline=="function"&&(A=readline(),A!==null&&(A+=`
`));if(!A){A=null;break A}st=Fe(A,!0)}A=st.shift()}return A},ia(A,t){t===null||t===10?(TA(qA(A.output,0)),A.output=[]):t!=0&&A.output.push(t)},fsync(A){A.output&&0<A.output.length&&(TA(qA(A.output,0)),A.output=[])},Ia(){return{ab:25856,cb:5,$a:191,bb:35387,Za:[3,28,127,21,4,0,1,0,17,19,26,0,18,15,23,22,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]}},Ja(){return 0},Ka(){return[24,80]}},Zs={ia(A,t){t===null||t===10?(X(qA(A.output,0)),A.output=[]):t!=0&&A.output.push(t)},fsync(A){A.output&&0<A.output.length&&(X(qA(A.output,0)),A.output=[])}},rn=()=>{Z("internal error: mmapAlloc called but `emscripten_builtin_memalign` native symbol not exported")};function an(A,t){var i=A.m?A.m.length:0;i>=t||(t=Math.max(t,i*(1048576>i?2:1.125)>>>0),i!=0&&(t=Math.max(t,256)),i=A.m,A.m=new Uint8Array(t),0<A.o&&A.m.set(i.subarray(0,A.o),0))}var T={G:null,s(){return T.createNode(null,"/",16895,0)},createNode(A,t,i,r){if((i&61440)===24576||I.isFIFO(i))throw new I.g(63);return T.G||(T.G={dir:{node:{C:T.h.C,v:T.h.v,lookup:T.h.lookup,J:T.h.J,rename:T.h.rename,unlink:T.h.unlink,rmdir:T.h.rmdir,readdir:T.h.readdir,symlink:T.h.symlink},stream:{D:T.l.D}},file:{node:{C:T.h.C,v:T.h.v},stream:{D:T.l.D,read:T.l.read,write:T.l.write,T:T.l.T,S:T.l.S,V:T.l.V}},link:{node:{C:T.h.C,v:T.h.v,readlink:T.h.readlink},stream:{}},na:{node:{C:T.h.C,v:T.h.v},stream:I.Da}}),i=I.createNode(A,t,i,r),gA(i.mode)?(i.h=T.G.dir.node,i.l=T.G.dir.stream,i.m={}):I.isFile(i.mode)?(i.h=T.G.file.node,i.l=T.G.file.stream,i.o=0,i.m=null):(i.mode&61440)===40960?(i.h=T.G.link.node,i.l=T.G.link.stream):(i.mode&61440)===8192&&(i.h=T.G.na.node,i.l=T.G.na.stream),i.timestamp=Date.now(),A&&(A.m[t]=i,A.timestamp=i.timestamp),i},lb(A){return A.m?A.m.subarray?A.m.subarray(0,A.o):new Uint8Array(A.m):new Uint8Array(0)},h:{C(A){var t={};return t.dev=(A.mode&61440)===8192?A.id:1,t.ino=A.id,t.mode=A.mode,t.nlink=1,t.uid=0,t.gid=0,t.rdev=A.rdev,gA(A.mode)?t.size=4096:I.isFile(A.mode)?t.size=A.o:(A.mode&61440)===40960?t.size=A.link.length:t.size=0,t.atime=new Date(A.timestamp),t.mtime=new Date(A.timestamp),t.ctime=new Date(A.timestamp),t.Ba=4096,t.blocks=Math.ceil(t.size/t.Ba),t},v(A,t){if(t.mode!==void 0&&(A.mode=t.mode),t.timestamp!==void 0&&(A.timestamp=t.timestamp),t.size!==void 0&&(t=t.size,A.o!=t))if(t==0)A.m=null,A.o=0;else{var i=A.m;A.m=new Uint8Array(t),i&&A.m.set(i.subarray(0,Math.min(t,A.o))),A.o=t}},lookup(){throw I.da[44]},J(A,t,i,r){return T.createNode(A,t,i,r)},rename(A,t,i){if(gA(A.mode)){try{var r=fA(t,i)}catch{}if(r)for(var B in r.m)throw new I.g(55)}delete A.parent.m[A.name],A.parent.timestamp=Date.now(),A.name=i,t.m[i]=A,t.timestamp=A.parent.timestamp,A.parent=t},unlink(A,t){delete A.m[t],A.timestamp=Date.now()},rmdir(A,t){var i=fA(A,t),r;for(r in i.m)throw new I.g(55);delete A.m[t],A.timestamp=Date.now()},readdir(A){var t=[".",".."],i;for(i in A.m)A.m.hasOwnProperty(i)&&t.push(i);return t},symlink(A,t,i){return A=T.createNode(A,t,41471,0),A.link=i,A},readlink(A){if((A.mode&61440)!==40960)throw new I.g(28);return A.link}},l:{read(A,t,i,r,B){var u=A.node.m;if(B>=A.node.o)return 0;if(A=Math.min(A.node.o-B,r),R(0<=A),8<A&&u.subarray)t.set(u.subarray(B,B+A),i);else for(r=0;r<A;r++)t[i+r]=u[B+r];return A},write(A,t,i,r,B,u){if(R(!(t instanceof ArrayBuffer)),t.buffer===AA.buffer&&(u=!1),!r)return 0;if(A=A.node,A.timestamp=Date.now(),t.subarray&&(!A.m||A.m.subarray)){if(u)return R(B===0,"canOwn must imply no weird position inside the file"),A.m=t.subarray(i,i+r),A.o=r;if(A.o===0&&B===0)return A.m=t.slice(i,i+r),A.o=r;if(B+r<=A.o)return A.m.set(t.subarray(i,i+r),B),r}if(an(A,B+r),A.m.subarray&&t.subarray)A.m.set(t.subarray(i,i+r),B);else for(u=0;u<r;u++)A.m[B+u]=t[i+u];return A.o=Math.max(A.o,B+r),r},D(A,t,i){if(i===1?t+=A.position:i===2&&I.isFile(A.node.mode)&&(t+=A.node.o),0>t)throw new I.g(28);return t},T(A,t,i){an(A.node,t+i),A.node.o=Math.max(A.node.o,t+i)},S(A,t,i,r,B){if(!I.isFile(A.node.mode))throw new I.g(43);if(A=A.node.m,B&2||A.buffer!==AA.buffer){if((0<i||i+t<A.length)&&(A.subarray?A=A.subarray(i,i+t):A=Array.prototype.slice.call(A,i,i+t)),i=!0,t=rn(),!t)throw new I.g(48);AA.set(A,t)}else i=!1,t=A.byteOffset;return{Ra:t,Aa:i}},V(A,t,i,r){return T.l.write(A,t,0,r,i,!1),0}}},Xs=(A,t,i)=>{var r=Ot(`al ${A}`);YA(A,B=>{R(B,`Loading data file "${A}" failed (no arrayBuffer).`),t(new Uint8Array(B)),r&&be(r)},()=>{if(i)i();else throw`Loading data file "${A}" failed.`}),r&&et(r)},zs=[],$s=(A,t,i,r)=>{typeof Browser<"u"&&Browser.R();var B=!1;return zs.forEach(u=>{!B&&u.canHandle(t)&&(u.handle(A,t,i,r),B=!0)}),B},ot=(A,t)=>{var i=0;return A&&(i|=365),t&&(i|=146),i},Ag={0:"Success",1:"Arg list too long",2:"Permission denied",3:"Address already in use",4:"Address not available",5:"Address family not supported by protocol family",6:"No more processes",7:"Socket already connected",8:"Bad file number",9:"Trying to read unreadable message",10:"Mount device busy",11:"Operation canceled",12:"No children",13:"Connection aborted",14:"Connection refused",15:"Connection reset by peer",16:"File locking deadlock error",17:"Destination address required",18:"Math arg out of domain of func",19:"Quota exceeded",20:"File exists",21:"Bad address",22:"File too large",23:"Host is unreachable",24:"Identifier removed",25:"Illegal byte sequence",26:"Connection already in progress",27:"Interrupted system call",28:"Invalid argument",29:"I/O error",30:"Socket is already connected",31:"Is a directory",32:"Too many symbolic links",33:"Too many open files",34:"Too many links",35:"Message too long",36:"Multihop attempted",37:"File or path name too long",38:"Network interface is not configured",39:"Connection reset by network",40:"Network is unreachable",41:"Too many open files in system",42:"No buffer space available",43:"No such device",44:"No such file or directory",45:"Exec format error",46:"No record locks available",47:"The link has been severed",48:"Not enough core",49:"No message of desired type",50:"Protocol not available",51:"No space left on device",52:"Function not implemented",53:"Socket is not connected",54:"Not a directory",55:"Directory not empty",56:"State not recoverable",57:"Socket operation on non-socket",59:"Not a typewriter",60:"No such device or address",61:"Value too large for defined data type",62:"Previous owner died",63:"Not super-user",64:"Broken pipe",65:"Protocol error",66:"Unknown protocol",67:"Protocol wrong type for socket",68:"Math result not representable",69:"Read only file system",70:"Illegal seek",71:"No such process",72:"Stale file handle",73:"Connection timed out",74:"Text file busy",75:"Cross-device link",100:"Device not a stream",101:"Bad font file fmt",102:"Invalid slot",103:"Invalid request code",104:"No anode",105:"Block device required",106:"Channel number out of range",107:"Level 3 halted",108:"Level 3 reset",109:"Link number out of range",110:"Protocol driver not attached",111:"No CSI structure available",112:"Level 2 halted",113:"Invalid exchange",114:"Invalid request descriptor",115:"Exchange full",116:"No data (for no delay io)",117:"Timer expired",118:"Out of streams resources",119:"Machine is not on the network",120:"Package not installed",121:"The object is remote",122:"Advertise error",123:"Srmount error",124:"Communication error on send",125:"Cross mount point (not really error)",126:"Given log. name not unique",127:"f.d. invalid for this operation",128:"Remote address changed",129:"Can   access a needed shared lib",130:"Accessing a corrupted shared lib",131:".lib section in a.out corrupted",132:"Attempting to link in too many libs",133:"Attempting to exec a shared library",135:"Streams pipe error",136:"Too many users",137:"Socket type not supported",138:"Not supported",139:"Protocol family not supported",140:"Can't send after socket shutdown",141:"Too many references",142:"Host is down",148:"No medium (in tape drive)",156:"Level 2 not synchronized"},In={EPERM:63,ENOENT:44,ESRCH:71,EINTR:27,EIO:29,ENXIO:60,E2BIG:1,ENOEXEC:45,EBADF:8,ECHILD:12,EAGAIN:6,EWOULDBLOCK:6,ENOMEM:48,EACCES:2,EFAULT:21,ENOTBLK:105,EBUSY:10,EEXIST:20,EXDEV:75,ENODEV:43,ENOTDIR:54,EISDIR:31,EINVAL:28,ENFILE:41,EMFILE:33,ENOTTY:59,ETXTBSY:74,EFBIG:22,ENOSPC:51,ESPIPE:70,EROFS:69,EMLINK:34,EPIPE:64,EDOM:18,ERANGE:68,ENOMSG:49,EIDRM:24,ECHRNG:106,EL2NSYNC:156,EL3HLT:107,EL3RST:108,ELNRNG:109,EUNATCH:110,ENOCSI:111,EL2HLT:112,EDEADLK:16,ENOLCK:46,EBADE:113,EBADR:114,EXFULL:115,ENOANO:104,EBADRQC:103,EBADSLT:102,EDEADLOCK:16,EBFONT:101,ENOSTR:100,ENODATA:116,ETIME:117,ENOSR:118,ENONET:119,ENOPKG:120,EREMOTE:121,ENOLINK:47,EADV:122,ESRMNT:123,ECOMM:124,EPROTO:65,EMULTIHOP:36,EDOTDOT:125,EBADMSG:9,ENOTUNIQ:126,EBADFD:127,EREMCHG:128,ELIBACC:129,ELIBBAD:130,ELIBSCN:131,ELIBMAX:132,ELIBEXEC:133,ENOSYS:52,ENOTEMPTY:55,ENAMETOOLONG:37,ELOOP:32,EOPNOTSUPP:138,EPFNOSUPPORT:139,ECONNRESET:15,ENOBUFS:42,EAFNOSUPPORT:5,EPROTOTYPE:67,ENOTSOCK:57,ENOPROTOOPT:50,ESHUTDOWN:140,ECONNREFUSED:14,EADDRINUSE:3,ECONNABORTED:13,ENETUNREACH:40,ENETDOWN:38,ETIMEDOUT:73,EHOSTDOWN:142,EHOSTUNREACH:23,EINPROGRESS:26,EALREADY:7,EDESTADDRREQ:17,EMSGSIZE:35,EPROTONOSUPPORT:66,ESOCKTNOSUPPORT:137,EADDRNOTAVAIL:4,ENETRESET:39,EISCONN:30,ENOTCONN:53,ETOOMANYREFS:141,EUSERS:136,EDQUOT:19,ESTALE:72,ENOTSUP:138,ENOMEDIUM:148,EILSEQ:25,EOVERFLOW:61,ECANCELED:11,ENOTRECOVERABLE:56,EOWNERDEAD:62,ESTRPIPE:135},eg=A=>A.replace(/\b_Z[\w\d_]+/g,function(t){return _A("warning: build with -sDEMANGLE_SUPPORT to link in libcxxabi demangling"),t===t?t:t+" ["+t+"]"});function rt(A,t){I.pa[A]={l:t}}function gA(A){return(A&61440)===16384}function fA(A,t){var i;if(i=(i=SA(A,"x"))?i:A.h.lookup?0:2)throw new I.g(i,A);for(i=I.F[at(A.id,t)];i;i=i.N){var r=i.name;if(i.parent.id===A.id&&r===t)return i}return I.lookup(A,t)}function z(A,t={}){if(A=bA(A),!A)return{path:"",node:null};if(t=Object.assign({ba:!0,ka:0},t),8<t.ka)throw new I.g(32);A=A.split("/").filter(p=>!!p);for(var i=I.root,r="/",B=0;B<A.length;B++){var u=B===A.length-1;if(u&&t.parent)break;if(i=fA(i,A[B]),r=dA(r+"/"+A[B]),i.A&&(!u||u&&t.ba)&&(i=i.A.root),!u||t.B){for(u=0;(i.mode&61440)===40960;)if(i=I.readlink(r),r=bA(nt(r),i),i=z(r,{ka:t.ka+1}).node,40<u++)throw new I.g(32)}}return{path:r,node:i}}function FA(A){for(var t;;){if(I.Z(A))return A=A.s.ua,t?A[A.length-1]!=="/"?`${A}/${t}`:A+t:A;t=t?`${A.name}/${t}`:A.name,A=A.parent}}function at(A,t){for(var i=0,r=0;r<t.length;r++)i=(i<<5)-i+t.charCodeAt(r)|0;return(A+i>>>0)%I.F.length}function Cn(A){var t=at(A.parent.id,A.name);A.N=I.F[t],I.F[t]=A}function Se(A){var t=at(A.parent.id,A.name);if(I.F[t]===A)I.F[t]=A.N;else for(t=I.F[t];t;){if(t.N===A){t.N=A.N;break}t=t.N}}function Bn(A){var t=["r","w","rw"][A&3];return A&512&&(t+="w"),t}function SA(A,t){if(I.ta)return 0;if(!t.includes("r")||A.mode&292){if(t.includes("w")&&!(A.mode&146)||t.includes("x")&&!(A.mode&73))return 2}else return 2;return 0}function It(A,t){try{return fA(A,t),20}catch{}return SA(A,"wx")}function xe(A,t,i){try{var r=fA(A,t)}catch(B){return B.u}if(A=SA(A,"wx"))return A;if(i){if(!gA(r.mode))return 54;if(I.Z(r)||FA(r)===I.cwd())return 10}else if(gA(r.mode))return 31;return 0}function tg(){for(var A=0;A<=I.xa;A++)if(!I.streams[A])return A;throw new I.g(33)}function aA(A){if(A=I.qa(A),!A)throw new I.g(8);return A}function Ct(A,t=-1){return I.X||(I.X=function(){this.I={}},I.X.prototype={},Object.defineProperties(I.X.prototype,{object:{get(){return this.node},set(i){this.node=i}},flags:{get(){return this.I.flags},set(i){this.I.flags=i}},position:{get(){return this.I.position},set(i){this.I.position=i}}})),A=Object.assign(new I.X,A),t==-1&&(t=tg()),A.fd=t,I.streams[t]=A}function ln(A){var t=[];for(A=[A];A.length;){var i=A.pop();t.push(i),A.push.apply(A,i.U)}return t}function Ne(A,t,i){return typeof i>"u"&&(i=t,t=438),I.J(A,t|8192,i)}function En(){I.g||(I.g=function(A,t){this.name="ErrnoError",this.node=t,this.Sa=function(i){this.u=i;for(var r in In)if(In[r]===i){this.code=r;break}},this.Sa(A),this.message=Ag[A],this.stack&&(Object.defineProperty(this,"stack",{value:Error().stack,writable:!0}),this.stack=eg(this.stack))},I.g.prototype=Error(),I.g.prototype.constructor=I.g,[44].forEach(A=>{I.da[A]=new I.g(A),I.da[A].stack="<generic error, no stack>"}))}function Qn(A,t){try{var i=z(A,{B:!t});A=i.path}catch{}var r={Z:!1,exists:!1,error:0,name:null,path:null,object:null,Oa:!1,Qa:null,Pa:null};try{i=z(A,{parent:!0}),r.Oa=!0,r.Qa=i.path,r.Pa=i.node,r.name=kA(A),i=z(A,{B:!t}),r.exists=!0,r.path=i.path,r.object=i.node,r.name=i.node.name,r.Z=i.path==="/"}catch(B){r.error=B.u}return r}function ng(A,t,i,r){return A=typeof A=="string"?A:FA(A),t=dA(A+"/"+t),I.create(t,ot(i,r))}function Bt(A){if(!(A.La||A.Ma||A.link||A.m)){if(typeof XMLHttpRequest<"u")throw Error("Lazy loading should have been performed (contents set) in createLazyFile, but it was not. Lazy loading only works in web workers. Use --embed-file or --preload-file in emcc on the main thread.");if(JA)try{A.m=Fe(JA(A.url),!0),A.o=A.m.length}catch{throw new I.g(29)}else throw Error("Cannot load without read() or XMLHttpRequest.")}}var I={root:null,U:[],pa:{},streams:[],Na:1,F:null,oa:"/",Y:!1,ta:!0,g:null,da:{},Fa:null,W:0,createNode(A,t,i,r){return R(typeof A=="object"),A=new I.wa(A,t,i,r),Cn(A),A},Z(A){return A===A.parent},isFile(A){return(A&61440)===32768},isFIFO(A){return(A&61440)===4096},isSocket(A){return(A&49152)===49152},xa:4096,qa:A=>I.streams[A],Da:{open(A){A.l=I.Ga(A.node.rdev).l,A.l.open&&A.l.open(A)},D(){throw new I.g(70)}},ha:A=>A>>8,nb:A=>A&255,M:(A,t)=>A<<8|t,Ga:A=>I.pa[A],va(A,t){function i(p){return R(0<I.W),I.W--,t(p)}function r(p){if(p){if(!r.Ea)return r.Ea=!0,i(p)}else++u>=B.length&&i(null)}typeof A=="function"&&(t=A,A=!1),I.W++,1<I.W&&X(`warning: ${I.W} FS.syncfs operations in flight at once, probably just doing extra work`);var B=ln(I.root.s),u=0;B.forEach(p=>{if(!p.type.va)return r(null);p.type.va(p,A,r)})},s(A,t,i){if(typeof A=="string")throw A;var r=i==="/",B=!i;if(r&&I.root)throw new I.g(10);if(!r&&!B){var u=z(i,{ba:!1});if(i=u.path,u=u.node,u.A)throw new I.g(10);if(!gA(u.mode))throw new I.g(54)}return t={type:A,rb:t,ua:i,U:[]},A=A.s(t),A.s=t,t.root=A,r?I.root=A:u&&(u.A=t,u.s&&u.s.U.push(t)),A},xb(A){if(A=z(A,{ba:!1}),!A.node.A)throw new I.g(28);A=A.node;var t=A.A,i=ln(t);Object.keys(I.F).forEach(r=>{for(r=I.F[r];r;){var B=r.N;i.includes(r.s)&&Se(r),r=B}}),A.A=null,t=A.s.U.indexOf(t),R(t!==-1),A.s.U.splice(t,1)},lookup(A,t){return A.h.lookup(A,t)},J(A,t,i){var r=z(A,{parent:!0}).node;if(A=kA(A),!A||A==="."||A==="..")throw new I.g(28);var B=It(r,A);if(B)throw new I.g(B);if(!r.h.J)throw new I.g(63);return r.h.J(r,A,t,i)},create(A,t){return I.J(A,(t!==void 0?t:438)&4095|32768,0)},mkdir(A,t){return I.J(A,(t!==void 0?t:511)&1023|16384,0)},ob(A,t){A=A.split("/");for(var i="",r=0;r<A.length;++r)if(A[r]){i+="/"+A[r];try{I.mkdir(i,t)}catch(B){if(B.u!=20)throw B}}},symlink(A,t){if(!bA(A))throw new I.g(44);var i=z(t,{parent:!0}).node;if(!i)throw new I.g(44);t=kA(t);var r=It(i,t);if(r)throw new I.g(r);if(!i.h.symlink)throw new I.g(63);return i.h.symlink(i,t,A)},rename(A,t){var i=nt(A),r=nt(t),B=kA(A),u=kA(t),p=z(A,{parent:!0}),k=p.node;if(p=z(t,{parent:!0}),p=p.node,!k||!p)throw new I.g(44);if(k.s!==p.s)throw new I.g(75);var v=fA(k,B);if(A=sn(A,r),A.charAt(0)!==".")throw new I.g(28);if(A=sn(t,i),A.charAt(0)!==".")throw new I.g(55);try{var b=fA(p,u)}catch{}if(v!==b){if(t=gA(v.mode),B=xe(k,B,t))throw new I.g(B);if(B=b?xe(p,u,t):It(p,u))throw new I.g(B);if(!k.h.rename)throw new I.g(63);if(v.A||b&&b.A)throw new I.g(10);if(p!==k&&(B=SA(k,"w")))throw new I.g(B);Se(v);try{k.h.rename(v,p,u)}catch(H){throw H}finally{Cn(v)}}},rmdir(A){var t=z(A,{parent:!0}).node;A=kA(A);var i=fA(t,A),r=xe(t,A,!0);if(r)throw new I.g(r);if(!t.h.rmdir)throw new I.g(63);if(i.A)throw new I.g(10);t.h.rmdir(t,A),Se(i)},readdir(A){if(A=z(A,{B:!0}).node,!A.h.readdir)throw new I.g(54);return A.h.readdir(A)},unlink(A){var t=z(A,{parent:!0}).node;if(!t)throw new I.g(44);A=kA(A);var i=fA(t,A),r=xe(t,A,!1);if(r)throw new I.g(r);if(!t.h.unlink)throw new I.g(63);if(i.A)throw new I.g(10);t.h.unlink(t,A),Se(i)},readlink(A){if(A=z(A).node,!A)throw new I.g(44);if(!A.h.readlink)throw new I.g(28);return bA(FA(A.parent),A.h.readlink(A))},stat(A,t){if(A=z(A,{B:!t}).node,!A)throw new I.g(44);if(!A.h.C)throw new I.g(63);return A.h.C(A)},lstat(A){return I.stat(A,!0)},chmod(A,t,i){if(A=typeof A=="string"?z(A,{B:!i}).node:A,!A.h.v)throw new I.g(63);A.h.v(A,{mode:t&4095|A.mode&-4096,timestamp:Date.now()})},lchmod(A,t){I.chmod(A,t,!0)},fchmod(A,t){A=aA(A),I.chmod(A.node,t)},chown(A,t,i,r){if(A=typeof A=="string"?z(A,{B:!r}).node:A,!A.h.v)throw new I.g(63);A.h.v(A,{timestamp:Date.now()})},lchown(A,t,i){I.chown(A,t,i,!0)},fchown(A,t,i){A=aA(A),I.chown(A.node,t,i)},truncate(A,t){if(0>t)throw new I.g(28);if(A=typeof A=="string"?z(A,{B:!0}).node:A,!A.h.v)throw new I.g(63);if(gA(A.mode))throw new I.g(31);if(!I.isFile(A.mode))throw new I.g(28);var i=SA(A,"w");if(i)throw new I.g(i);A.h.v(A,{size:t,timestamp:Date.now()})},kb(A,t){if(A=aA(A),(A.flags&2097155)===0)throw new I.g(28);I.truncate(A.node,t)},yb(A,t,i){A=z(A,{B:!0}).node,A.h.v(A,{timestamp:Math.max(t,i)})},open(A,t,i){if(A==="")throw new I.g(44);if(typeof t=="string"){var r={r:0,"r+":2,w:577,"w+":578,a:1089,"a+":1090}[t];if(typeof r>"u")throw Error(`Unknown file open mode: ${t}`);t=r}if(i=t&64?(typeof i>"u"?438:i)&4095|32768:0,typeof A=="object")var B=A;else{A=dA(A);try{B=z(A,{B:!(t&131072)}).node}catch{}}if(r=!1,t&64)if(B){if(t&128)throw new I.g(20)}else B=I.J(A,i,0),r=!0;if(!B)throw new I.g(44);if((B.mode&61440)===8192&&(t&=-513),t&65536&&!gA(B.mode))throw new I.g(54);if(!r&&(i=B?(B.mode&61440)===40960?32:gA(B.mode)&&(Bn(t)!=="r"||t&512)?31:SA(B,Bn(t)):44))throw new I.g(i);return t&512&&!r&&I.truncate(B,0),t&=-131713,B=Ct({node:B,path:FA(B),flags:t,seekable:!0,position:0,l:B.l,Xa:[],error:!1}),B.l.open&&B.l.open(B),!o.logReadFiles||t&1||(I.ja||(I.ja={}),A in I.ja||(I.ja[A]=1)),B},close(A){if(A.fd===null)throw new I.g(8);A.ea&&(A.ea=null);try{A.l.close&&A.l.close(A)}catch(t){throw t}finally{I.streams[A.fd]=null}A.fd=null},D(A,t,i){if(A.fd===null)throw new I.g(8);if(!A.seekable||!A.l.D)throw new I.g(70);if(i!=0&&i!=1&&i!=2)throw new I.g(28);return A.position=A.l.D(A,t,i),A.Xa=[],A.position},read(A,t,i,r,B){if(R(0<=i),0>r||0>B)throw new I.g(28);if(A.fd===null)throw new I.g(8);if((A.flags&2097155)===1)throw new I.g(8);if(gA(A.node.mode))throw new I.g(31);if(!A.l.read)throw new I.g(28);var u=typeof B<"u";if(!u)B=A.position;else if(!A.seekable)throw new I.g(70);return t=A.l.read(A,t,i,r,B),u||(A.position+=t),t},write(A,t,i,r,B,u){if(R(0<=i),0>r||0>B)throw new I.g(28);if(A.fd===null)throw new I.g(8);if((A.flags&2097155)===0)throw new I.g(8);if(gA(A.node.mode))throw new I.g(31);if(!A.l.write)throw new I.g(28);A.seekable&&A.flags&1024&&I.D(A,0,2);var p=typeof B<"u";if(!p)B=A.position;else if(!A.seekable)throw new I.g(70);return t=A.l.write(A,t,i,r,B,u),p||(A.position+=t),t},T(A,t,i){if(A.fd===null)throw new I.g(8);if(0>t||0>=i)throw new I.g(28);if((A.flags&2097155)===0)throw new I.g(8);if(!I.isFile(A.node.mode)&&!gA(A.node.mode))throw new I.g(43);if(!A.l.T)throw new I.g(138);A.l.T(A,t,i)},S(A,t,i,r,B){if((r&2)!==0&&(B&2)===0&&(A.flags&2097155)!==2)throw new I.g(2);if((A.flags&2097155)===1)throw new I.g(2);if(!A.l.S)throw new I.g(43);return A.l.S(A,t,i,r,B)},V(A,t,i,r,B){return R(0<=i),A.l.V?A.l.V(A,t,i,r,B):0},qb:()=>0,fa(A,t,i){if(!A.l.fa)throw new I.g(59);return A.l.fa(A,t,i)},readFile(A,t={}){if(t.flags=t.flags||0,t.encoding=t.encoding||"binary",t.encoding!=="utf8"&&t.encoding!=="binary")throw Error(`Invalid encoding type "${t.encoding}"`);var i,r=I.open(A,t.flags);A=I.stat(A).size;var B=new Uint8Array(A);return I.read(r,B,0,A,0),t.encoding==="utf8"?i=qA(B,0):t.encoding==="binary"&&(i=B),I.close(r),i},writeFile(A,t,i={}){if(i.flags=i.flags||577,A=I.open(A,i.flags,i.mode),typeof t=="string"){var r=new Uint8Array(OA(t)+1);t=gt(t,r,0,r.length),I.write(A,r,0,t,void 0,i.Ca)}else if(ArrayBuffer.isView(t))I.write(A,t,0,t.byteLength,void 0,i.Ca);else throw Error("Unsupported data type");I.close(A)},cwd:()=>I.oa,chdir(A){if(A=z(A,{B:!0}),A.node===null)throw new I.g(44);if(!gA(A.node.mode))throw new I.g(54);var t=SA(A.node,"x");if(t)throw new I.g(t);I.oa=A.path},R(A,t,i){R(!I.R.Y,"FS.init was previously called. If you want to initialize later with custom parameters, remove any earlier calls (note that one is automatically added to the generated code)"),I.R.Y=!0,En(),o.stdin=A||o.stdin,o.stdout=t||o.stdout,o.stderr=i||o.stderr,o.stdin?I.L("/dev","stdin",o.stdin):I.symlink("/dev/tty","/dev/stdin"),o.stdout?I.L("/dev","stdout",null,o.stdout):I.symlink("/dev/tty","/dev/stdout"),o.stderr?I.L("/dev","stderr",null,o.stderr):I.symlink("/dev/tty1","/dev/stderr"),A=I.open("/dev/stdin",0),t=I.open("/dev/stdout",1),i=I.open("/dev/stderr",1),R(A.fd===0,`invalid handle for stdin (${A.fd})`),R(t.fd===1,`invalid handle for stdout (${t.fd})`),R(i.fd===2,`invalid handle for stderr (${i.fd})`)},sb(){I.R.Y=!1,wn(0);for(var A=0;A<I.streams.length;A++){var t=I.streams[A];t&&I.close(t)}},jb(A,t){return A=Qn(A,t),A.exists?A.object:null},hb(A,t){for(A=typeof A=="string"?A:FA(A),t=t.split("/").reverse();t.length;){var i=t.pop();if(i){var r=dA(A+"/"+i);try{I.mkdir(r)}catch{}A=r}}return r},L(A,t,i,r){A=qs(typeof A=="string"?A:FA(A),t),t=ot(!!i,!!r),I.L.ha||(I.L.ha=64);var B=I.M(I.L.ha++,0);return rt(B,{open(u){u.seekable=!1},close(){r&&r.buffer&&r.buffer.length&&r(10)},read(u,p,k,v){for(var b=0,H=0;H<v;H++){try{var N=i()}catch{throw new I.g(29)}if(N===void 0&&b===0)throw new I.g(6);if(N==null)break;b++,p[k+H]=N}return b&&(u.node.timestamp=Date.now()),b},write(u,p,k,v){for(var b=0;b<v;b++)try{r(p[k+b])}catch{throw new I.g(29)}return v&&(u.node.timestamp=Date.now()),b}}),Ne(A,t,B)},fb(A,t,i,r,B){function u(){this.ga=!1,this.I=[]}function p(N,O,f,K,U){if(N=N.node.m,U>=N.length)return 0;if(K=Math.min(N.length-U,K),R(0<=K),N.slice)for(var _=0;_<K;_++)O[f+_]=N[U+_];else for(_=0;_<K;_++)O[f+_]=N.get(U+_);return K}if(u.prototype.get=function(N){if(!(N>this.length-1||0>N)){var O=N%this.chunkSize;return this.sa(N/this.chunkSize|0)[O]}},u.prototype.Ha=function(N){this.sa=N},u.prototype.ma=function(){var N=new XMLHttpRequest;if(N.open("HEAD",i,!1),N.send(null),!(200<=N.status&&300>N.status||N.status===304))throw Error("Couldn't load "+i+". Status: "+N.status);var O=Number(N.getResponseHeader("Content-length")),f,K=(f=N.getResponseHeader("Accept-Ranges"))&&f==="bytes";N=(f=N.getResponseHeader("Content-Encoding"))&&f==="gzip";var U=1048576;K||(U=O);var _=this;_.Ha(nA=>{var BA=nA*U,lA=(nA+1)*U-1;if(lA=Math.min(lA,O-1),typeof _.I[nA]>"u"){var ft=_.I;if(BA>lA)throw Error("invalid range ("+BA+", "+lA+") or no bytes requested!");if(lA>O-1)throw Error("only "+O+" bytes available! programmer error!");var rA=new XMLHttpRequest;if(rA.open("GET",i,!1),O!==U&&rA.setRequestHeader("Range","bytes="+BA+"-"+lA),rA.responseType="arraybuffer",rA.overrideMimeType&&rA.overrideMimeType("text/plain; charset=x-user-defined"),rA.send(null),!(200<=rA.status&&300>rA.status||rA.status===304))throw Error("Couldn't load "+i+". Status: "+rA.status);BA=rA.response!==void 0?new Uint8Array(rA.response||[]):Fe(rA.responseText||"",!0),ft[nA]=BA}if(typeof _.I[nA]>"u")throw Error("doXHR failed!");return _.I[nA]}),(N||!O)&&(U=O=1,U=O=this.sa(0).length,TA("LazyFiles on gzip forces download of the whole file when length is accessed")),this.za=O,this.ya=U,this.ga=!0},typeof XMLHttpRequest<"u"){if(!P)throw"Cannot do synchronous binary XHRs outside webworkers in modern browsers. Use --embed-file or --preload-file in emcc";var k=new u;Object.defineProperties(k,{length:{get:function(){return this.ga||this.ma(),this.za}},chunkSize:{get:function(){return this.ga||this.ma(),this.ya}}});var v=void 0}else v=i,k=void 0;var b=ng(A,t,r,B);k?b.m=k:v&&(b.m=null,b.url=v),Object.defineProperties(b,{o:{get:function(){return this.m.length}}});var H={};return Object.keys(b.l).forEach(N=>{var O=b.l[N];H[N]=function(){return Bt(b),O.apply(null,arguments)}}),H.read=(N,O,f,K,U)=>(Bt(b),p(N,O,f,K,U)),H.S=(N,O,f)=>{Bt(b);var K=rn();if(!K)throw new I.g(48);return p(N,AA,K,O,f),{Ra:K,Aa:!0}},b.l=H,b},Ya(){Z("FS.absolutePath has been removed; use PATH_FS.resolve instead")},eb(){Z("FS.createFolder has been removed; use FS.mkdir instead")},gb(){Z("FS.createLink has been removed; use FS.symlink instead")},mb(){Z("FS.joinPath has been removed; use PATH.join instead")},pb(){Z("FS.mmapAlloc has been replaced by the top level function mmapAlloc")},vb(){Z("FS.standardizePath has been removed; use PATH.normalize instead")}},EA=A=>(R(typeof A=="number",`UTF8ToString expects a number (got ${typeof A})`),A?qA(Re,A):"");function le(A,t){if(t.charAt(0)==="/")return t;if(A=A===-100?I.cwd():aA(A).path,t.length==0)throw new I.g(44);return dA(A+"/"+t)}var WA=void 0;function hA(){R(WA!=null);var A=x[+WA>>2];return WA+=4,A}var Me=(A,t,i)=>(R(typeof i=="number","stringToUTF8(str, outPtr, maxBytesToWrite) is missing the third parameter that specifies the length of the output buffer!"),gt(A,Re,t,i)),jA=A=>A%4===0&&(A%100!==0||A%400===0),cn=[0,31,60,91,121,152,182,213,244,274,305,335],un=[0,31,59,90,120,151,181,212,243,273,304,334],lt=A=>{var t=OA(A)+1,i=gg(t);return i&&Me(A,i,t),i},Le={},dn=()=>{if(!Et){var A={USER:"web_user",LOGNAME:"web_user",PATH:"/",PWD:"/",HOME:"/home/web_user",LANG:(typeof navigator=="object"&&navigator.languages&&navigator.languages[0]||"C").replace("-","_")+".UTF-8",_:S||"./this.program"},t;for(t in Le)Le[t]===void 0?delete A[t]:A[t]=Le[t];var i=[];for(t in A)i.push(`${t}=${A[t]}`);Et=i}return Et},Et,fn=[31,29,31,30,31,30,31,31,30,31,30,31],hn=[31,28,31,30,31,30,31,31,30,31,30,31],pn=(A,t)=>{R(0<=A.length,"writeArrayToMemory array must have a length (should be an array or typed array)"),AA.set(A,t)},xA=[],oA,Qt=A=>{var t=xA[A];return t||(A>=xA.length&&(xA.length=A+1),xA[A]=t=oA.get(A)),R(oA.get(A)==t,"JavaScript-side Wasm function table mirror is out of date!"),t},sg=A=>{var t=o["_"+A];return R(t,"Cannot call unknown function "+A+", make sure it is exported"),t},NA,ct=[];function Dn(A,t,i,r){A||=this,this.parent=A,this.s=A.s,this.A=null,this.id=I.Na++,this.name=t,this.mode=i,this.h={},this.l={},this.rdev=r}Object.defineProperties(Dn.prototype,{read:{get:function(){return(this.mode&365)===365},set:function(A){A?this.mode|=365:this.mode&=-366}},write:{get:function(){return(this.mode&146)===146},set:function(A){A?this.mode|=146:this.mode&=-147}},Ma:{get:function(){return gA(this.mode)}},La:{get:function(){return(this.mode&61440)===8192}}}),I.wa=Dn,I.ib=(A,t,i,r,B,u,p,k,v,b)=>{function H(f){function K(U){if(b&&b(),!k){var _=A,nA=t;if(_&&(_=typeof _=="string"?_:FA(_),nA=t?dA(_+"/"+t):_),_=ot(r,B),nA=I.create(nA,_),U){if(typeof U=="string"){for(var BA=Array(U.length),lA=0,ft=U.length;lA<ft;++lA)BA[lA]=U.charCodeAt(lA);U=BA}I.chmod(nA,_|146),BA=I.open(nA,577),I.write(BA,U,0,U.length,0,v),I.close(BA),I.chmod(nA,_)}}u&&u(),be(O)}$s(f,N,K,()=>{p&&p(),be(O)})||K(f)}var N=t?bA(dA(A+"/"+t)):A,O=Ot(`cp ${N}`);et(O),typeof i=="string"?Xs(i,f=>H(f),p):H(i)},En(),I.F=Array(4096),I.s(T,{},"/"),I.mkdir("/tmp"),I.mkdir("/home"),I.mkdir("/home/web_user"),(function(){I.mkdir("/dev"),rt(I.M(1,3),{read:()=>0,write:(r,B,u,p)=>p}),Ne("/dev/null",I.M(1,3)),on(I.M(5,0),js),on(I.M(6,0),Zs),Ne("/dev/tty",I.M(5,0)),Ne("/dev/tty1",I.M(6,0));var A=new Uint8Array(1024),t=0,i=()=>(t===0&&(t=nn(A).byteLength),A[--t]);I.L("/dev","random",i),I.L("/dev","urandom",i),I.mkdir("/dev/shm"),I.mkdir("/dev/shm/tmp")})(),(function(){I.mkdir("/proc");var A=I.mkdir("/proc/self");I.mkdir("/proc/self/fd"),I.s({s(){var t=I.createNode(A,"fd",16895,73);return t.h={lookup(i,r){var B=aA(+r);return i={parent:null,s:{ua:"fake"},h:{readlink:()=>B.path}},i.parent=i}},t}},{},"/proc/self/fd")})(),I.Fa={MEMFS:T};var mn={__syscall_dup3:function(A,t,i){try{var r=aA(A);if(R(!i),r.fd===t)return-28;var B=I.qa(t);return B&&I.close(B),Ct(r,t).fd}catch(u){if(typeof I>"u"||u.name!=="ErrnoError")throw u;return-u.u}},__syscall_fcntl64:function(A,t,i){WA=i;try{var r=aA(A);switch(t){case 0:var B=hA();if(0>B)return-28;for(;I.streams[B];)B++;return Ct(r,B).fd;case 1:case 2:return 0;case 3:return r.flags;case 4:return B=hA(),r.flags|=B,0;case 5:return B=hA(),VA[B+0>>1]=2,0;case 6:case 7:return 0;case 16:case 8:return-28;case 9:return x[ut()>>2]=28,-1;default:return-28}}catch(u){if(typeof I>"u"||u.name!=="ErrnoError")throw u;return-u.u}},__syscall_ioctl:function(A,t,i){WA=i;try{var r=aA(A);switch(t){case 21509:return r.tty?0:-59;case 21505:if(!r.tty)return-59;if(r.tty.K.Ia){A=[3,28,127,21,4,0,1,0,17,19,26,0,18,15,23,22,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0];var B=hA();x[B>>2]=25856,x[B+4>>2]=5,x[B+8>>2]=191,x[B+12>>2]=35387;for(var u=0;32>u;u++)AA[B+u+17>>0]=A[u]||0}return 0;case 21510:case 21511:case 21512:return r.tty?0:-59;case 21506:case 21507:case 21508:if(!r.tty)return-59;if(r.tty.K.Ja)for(B=hA(),A=[],u=0;32>u;u++)A.push(AA[B+u+17>>0]);return 0;case 21519:return r.tty?(B=hA(),x[B>>2]=0):-59;case 21520:return r.tty?-28:-59;case 21531:return B=hA(),I.fa(r,t,B);case 21523:return r.tty?(r.tty.K.Ka&&(u=[24,80],B=hA(),VA[B>>1]=u[0],VA[B+2>>1]=u[1]),0):-59;case 21524:return r.tty?0:-59;case 21515:return r.tty?0:-59;default:return-28}}catch(p){if(typeof I>"u"||p.name!=="ErrnoError")throw p;return-p.u}},__syscall_openat:function(A,t,i,r){WA=r;try{t=EA(t),t=le(A,t);var B=r?hA():0;return I.open(t,i,B).fd}catch(u){if(typeof I>"u"||u.name!=="ErrnoError")throw u;return-u.u}},__syscall_readlinkat:function(A,t,i,r){try{if(t=EA(t),t=le(A,t),0>=r)return-28;var B=I.readlink(t),u=Math.min(r,OA(B)),p=AA[i+u];return Me(B,i,r+1),AA[i+u]=p,u}catch(k){if(typeof I>"u"||k.name!=="ErrnoError")throw k;return-k.u}},__syscall_renameat:function(A,t,i,r){try{return t=EA(t),r=EA(r),t=le(A,t),r=le(i,r),I.rename(t,r),0}catch(B){if(typeof I>"u"||B.name!=="ErrnoError")throw B;return-B.u}},__syscall_rmdir:function(A){try{return A=EA(A),I.rmdir(A),0}catch(t){if(typeof I>"u"||t.name!=="ErrnoError")throw t;return-t.u}},__syscall_unlinkat:function(A,t,i){try{return t=EA(t),t=le(A,t),i===0?I.unlink(t):i===512?I.rmdir(t):Z("Invalid flags passed to unlinkat"),0}catch(r){if(typeof I>"u"||r.name!=="ErrnoError")throw r;return-r.u}},_emscripten_get_now_is_monotonic:()=>1,_emscripten_throw_longjmp:()=>{throw 1/0},_gmtime_js:function(A,t){A=-9007199254740992>A||9007199254740992<A?NaN:Number(A),A=new Date(1e3*A),x[t>>2]=A.getUTCSeconds(),x[t+4>>2]=A.getUTCMinutes(),x[t+8>>2]=A.getUTCHours(),x[t+12>>2]=A.getUTCDate(),x[t+16>>2]=A.getUTCMonth(),x[t+20>>2]=A.getUTCFullYear()-1900,x[t+24>>2]=A.getUTCDay(),x[t+28>>2]=(A.getTime()-Date.UTC(A.getUTCFullYear(),0,1,0,0,0,0))/864e5|0},_localtime_js:function(A,t){A=-9007199254740992>A||9007199254740992<A?NaN:Number(A),A=new Date(1e3*A),x[t>>2]=A.getSeconds(),x[t+4>>2]=A.getMinutes(),x[t+8>>2]=A.getHours(),x[t+12>>2]=A.getDate(),x[t+16>>2]=A.getMonth(),x[t+20>>2]=A.getFullYear()-1900,x[t+24>>2]=A.getDay(),x[t+28>>2]=(jA(A.getFullYear())?cn:un)[A.getMonth()]+A.getDate()-1|0,x[t+36>>2]=-(60*A.getTimezoneOffset());var i=new Date(A.getFullYear(),6,1).getTimezoneOffset(),r=new Date(A.getFullYear(),0,1).getTimezoneOffset();x[t+32>>2]=(i!=r&&A.getTimezoneOffset()==Math.min(r,i))|0},_mktime_js:function(A){var t=new Date(x[A+20>>2]+1900,x[A+16>>2],x[A+12>>2],x[A+8>>2],x[A+4>>2],x[A>>2],0),i=x[A+32>>2],r=t.getTimezoneOffset(),B=new Date(t.getFullYear(),6,1).getTimezoneOffset(),u=new Date(t.getFullYear(),0,1).getTimezoneOffset(),p=Math.min(u,B);return 0>i?x[A+32>>2]=+(B!=u&&p==r):0<i!=(p==r)&&(B=Math.max(u,B),t.setTime(t.getTime()+6e4*((0<i?p:B)-r))),x[A+24>>2]=t.getDay(),x[A+28>>2]=(jA(t.getFullYear())?cn:un)[t.getMonth()]+t.getDate()-1|0,x[A>>2]=t.getSeconds(),x[A+4>>2]=t.getMinutes(),x[A+8>>2]=t.getHours(),x[A+12>>2]=t.getDate(),x[A+16>>2]=t.getMonth(),x[A+20>>2]=t.getYear(),A=t.getTime(),isNaN(A)?(x[ut()>>2]=61,A=-1):A/=1e3,BigInt(A)},_tzset_js:(A,t,i)=>{function r(v){return(v=v.toTimeString().match(/\(([A-Za-z ]+)\)$/))?v[1]:"GMT"}var B=new Date().getFullYear(),u=new Date(B,0,1),p=new Date(B,6,1);B=u.getTimezoneOffset();var k=p.getTimezoneOffset();W[A>>2]=60*Math.max(B,k),x[t>>2]=+(B!=k),A=r(u),t=r(p),A=lt(A),t=lt(t),k<B?(W[i>>2]=A,W[i+4>>2]=t):(W[i>>2]=t,W[i+4>>2]=A)},abort:()=>{Z("native code called abort()")},emscripten_date_now:()=>Date.now(),emscripten_get_now:()=>performance.now(),emscripten_resize_heap:A=>{var t=Re.length;if(A>>>=0,R(A>t),2147483648<A)return X(`Cannot enlarge memory, requested ${A} bytes, but the limit is ${2147483648} bytes!`),!1;for(var i=1;4>=i;i*=2){var r=t*(1+.2/i);r=Math.min(r,A+100663296);var B=Math;r=Math.max(A,r),B=B.min.call(B,2147483648,r+(65536-r%65536)%65536);A:{r=B;var u=oe.buffer,p=(r-u.byteLength+65535)/65536;try{oe.grow(p),Vt();var k=1;break A}catch(v){X(`growMemory: Attempted to grow heap from ${u.byteLength} bytes to ${r} bytes, but got error: ${v}`)}k=void 0}if(k)return!0}return X(`Failed to grow the heap from ${t} bytes to ${B} bytes, not enough memory!`),!1},environ_get:(A,t)=>{var i=0;return dn().forEach((r,B)=>{var u=t+i;for(B=W[A+4*B>>2]=u,u=0;u<r.length;++u)R(r.charCodeAt(u)===(r.charCodeAt(u)&255)),AA[B++>>0]=r.charCodeAt(u);AA[B>>0]=0,i+=r.length+1}),0},environ_sizes_get:(A,t)=>{var i=dn();W[A>>2]=i.length;var r=0;return i.forEach(B=>r+=B.length+1),W[t>>2]=r,0},exit:A=>{rg(),re=!0,J(A,new en(A))},fd_close:function(A){try{var t=aA(A);return I.close(t),0}catch(i){if(typeof I>"u"||i.name!=="ErrnoError")throw i;return i.u}},fd_read:function(A,t,i,r){try{A:{var B=aA(A);A=t;for(var u,p=t=0;p<i;p++){var k=W[A>>2],v=W[A+4>>2];A+=8;var b=I.read(B,AA,k,v,u);if(0>b){var H=-1;break A}if(t+=b,b<v)break;typeof u<"u"&&(u+=b)}H=t}return W[r>>2]=H,0}catch(N){if(typeof I>"u"||N.name!=="ErrnoError")throw N;return N.u}},fd_seek:function(A,t,i,r){t=-9007199254740992>t||9007199254740992<t?NaN:Number(t);try{if(isNaN(t))return 61;var B=aA(A);return I.D(B,t,i),ke[r>>3]=BigInt(B.position),B.ea&&t===0&&i===0&&(B.ea=null),0}catch(u){if(typeof I>"u"||u.name!=="ErrnoError")throw u;return u.u}},fd_write:function(A,t,i,r){try{A:{var B=aA(A);A=t;for(var u,p=t=0;p<i;p++){var k=W[A>>2],v=W[A+4>>2];A+=8;var b=I.write(B,AA,k,v,u);if(0>b){var H=-1;break A}t+=b,typeof u<"u"&&(u+=b)}H=t}return W[r>>2]=H,0}catch(N){if(typeof I>"u"||N.name!=="ErrnoError")throw N;return N.u}},invoke_vii:og,strftime:(A,t,i,r)=>{function B(f,K,U){for(f=typeof f=="number"?f.toString():f||"";f.length<K;)f=U[0]+f;return f}function u(f,K){return B(f,K,"0")}function p(f,K){function U(nA){return 0>nA?-1:0<nA?1:0}var _;return(_=U(f.getFullYear()-K.getFullYear()))===0&&(_=U(f.getMonth()-K.getMonth()))===0&&(_=U(f.getDate()-K.getDate())),_}function k(f){switch(f.getDay()){case 0:return new Date(f.getFullYear()-1,11,29);case 1:return f;case 2:return new Date(f.getFullYear(),0,3);case 3:return new Date(f.getFullYear(),0,2);case 4:return new Date(f.getFullYear(),0,1);case 5:return new Date(f.getFullYear()-1,11,31);case 6:return new Date(f.getFullYear()-1,11,30)}}function v(f){var K=f.O;for(f=new Date(new Date(f.P+1900,0,1).getTime());0<K;){var U=f.getMonth(),_=(jA(f.getFullYear())?fn:hn)[U];if(K>_-f.getDate())K-=_-f.getDate()+1,f.setDate(1),11>U?f.setMonth(U+1):(f.setMonth(0),f.setFullYear(f.getFullYear()+1));else{f.setDate(f.getDate()+K);break}}return U=new Date(f.getFullYear()+1,0,4),K=k(new Date(f.getFullYear(),0,4)),U=k(U),0>=p(K,f)?0>=p(U,f)?f.getFullYear()+1:f.getFullYear():f.getFullYear()-1}var b=W[r+40>>2];r={Va:x[r>>2],Ua:x[r+4>>2],$:x[r+8>>2],la:x[r+12>>2],aa:x[r+16>>2],P:x[r+20>>2],H:x[r+24>>2],O:x[r+28>>2],wb:x[r+32>>2],Ta:x[r+36>>2],Wa:b?EA(b):""},i=EA(i),b={"%c":"%a %b %d %H:%M:%S %Y","%D":"%m/%d/%y","%F":"%Y-%m-%d","%h":"%b","%r":"%I:%M:%S %p","%R":"%H:%M","%T":"%H:%M:%S","%x":"%m/%d/%y","%X":"%H:%M:%S","%Ec":"%c","%EC":"%C","%Ex":"%m/%d/%y","%EX":"%H:%M:%S","%Ey":"%y","%EY":"%Y","%Od":"%d","%Oe":"%e","%OH":"%H","%OI":"%I","%Om":"%m","%OM":"%M","%OS":"%S","%Ou":"%u","%OU":"%U","%OV":"%V","%Ow":"%w","%OW":"%W","%Oy":"%y"};for(var H in b)i=i.replace(new RegExp(H,"g"),b[H]);var N="Sunday Monday Tuesday Wednesday Thursday Friday Saturday".split(" "),O="January February March April May June July August September October November December".split(" ");b={"%a":f=>N[f.H].substring(0,3),"%A":f=>N[f.H],"%b":f=>O[f.aa].substring(0,3),"%B":f=>O[f.aa],"%C":f=>u((f.P+1900)/100|0,2),"%d":f=>u(f.la,2),"%e":f=>B(f.la,2," "),"%g":f=>v(f).toString().substring(2),"%G":f=>v(f),"%H":f=>u(f.$,2),"%I":f=>(f=f.$,f==0?f=12:12<f&&(f-=12),u(f,2)),"%j":f=>{for(var K=0,U=0;U<=f.aa-1;K+=(jA(f.P+1900)?fn:hn)[U++]);return u(f.la+K,3)},"%m":f=>u(f.aa+1,2),"%M":f=>u(f.Ua,2),"%n":()=>`
`,"%p":f=>0<=f.$&&12>f.$?"AM":"PM","%S":f=>u(f.Va,2),"%t":()=>"	","%u":f=>f.H||7,"%U":f=>u(Math.floor((f.O+7-f.H)/7),2),"%V":f=>{var K=Math.floor((f.O+7-(f.H+6)%7)/7);if(2>=(f.H+371-f.O-2)%7&&K++,K)K==53&&(U=(f.H+371-f.O)%7,U==4||U==3&&jA(f.P)||(K=1));else{K=52;var U=(f.H+7-f.O-1)%7;(U==4||U==5&&jA(f.P%400-1))&&K++}return u(K,2)},"%w":f=>f.H,"%W":f=>u(Math.floor((f.O+7-(f.H+6)%7)/7),2),"%y":f=>(f.P+1900).toString().substring(2),"%Y":f=>f.P+1900,"%z":f=>{f=f.Ta;var K=0<=f;return f=Math.abs(f)/60,(K?"+":"-")+("0000"+(f/60*100+f%60)).slice(-4)},"%Z":f=>f.Wa,"%%":()=>"%"},i=i.replace(/%%/g,"\0\0");for(H in b)i.includes(H)&&(i=i.replace(new RegExp(H,"g"),b[H](r)));return i=i.replace(/\0\0/g,"%"),H=Fe(i,!1),H.length>t?0:(pn(H,A),H.length-1)},system:A=>{if(V){if(!A)return 1;if(A=EA(A),!A.length)return 0;A=vA("child_process").ub(A,[],{tb:!0,stdio:"inherit"});var t=(i,r)=>i<<8|r;return A.status===null?t(0,(i=>{switch(i){case"SIGHUP":return 1;case"SIGQUIT":return 3;case"SIGFPE":return 8;case"SIGKILL":return 9;case"SIGALRM":return 14;case"SIGTERM":return 15}return 2})(A.signal)):A.status<<8|0}return A?(x[ut()>>2]=52,-1):0}},MA=(function(){var A={env:mn,wasi_snapshot_preview1:mn};et("wasm-instantiate");var t=o;return _s(A,function(i){R(o===t,"the Module object should not be replaced during async compilation - perhaps the order of HTML elements is wrong?"),t=null,MA=i.instance.exports,oe=MA.memory,R(oe,"memory not found in wasm exports"),Vt(),oA=MA.__indirect_function_table,R(oA,"table not found in wasm exports"),$e.unshift(MA.__wasm_call_ctors),be("wasm-instantiate")}).catch(Q),{}})();o._lua_checkstack=d("lua_checkstack"),o._lua_xmove=d("lua_xmove"),o._lua_atpanic=d("lua_atpanic"),o._lua_version=d("lua_version"),o._lua_absindex=d("lua_absindex"),o._lua_gettop=d("lua_gettop"),o._lua_settop=d("lua_settop"),o._lua_closeslot=d("lua_closeslot"),o._lua_rotate=d("lua_rotate"),o._lua_copy=d("lua_copy"),o._lua_pushvalue=d("lua_pushvalue"),o._lua_type=d("lua_type"),o._lua_typename=d("lua_typename"),o._lua_iscfunction=d("lua_iscfunction"),o._lua_isinteger=d("lua_isinteger"),o._lua_isnumber=d("lua_isnumber"),o._lua_isstring=d("lua_isstring"),o._lua_isuserdata=d("lua_isuserdata"),o._lua_rawequal=d("lua_rawequal"),o._lua_arith=d("lua_arith"),o._lua_compare=d("lua_compare"),o._lua_stringtonumber=d("lua_stringtonumber"),o._lua_tonumberx=d("lua_tonumberx"),o._lua_tointegerx=d("lua_tointegerx"),o._lua_toboolean=d("lua_toboolean"),o._lua_tolstring=d("lua_tolstring"),o._lua_rawlen=d("lua_rawlen"),o._lua_tocfunction=d("lua_tocfunction"),o._lua_touserdata=d("lua_touserdata"),o._lua_tothread=d("lua_tothread"),o._lua_topointer=d("lua_topointer"),o._lua_pushnil=d("lua_pushnil"),o._lua_pushnumber=d("lua_pushnumber"),o._lua_pushinteger=d("lua_pushinteger"),o._lua_pushlstring=d("lua_pushlstring"),o._lua_pushstring=d("lua_pushstring"),o._lua_pushcclosure=d("lua_pushcclosure"),o._lua_pushboolean=d("lua_pushboolean"),o._lua_pushlightuserdata=d("lua_pushlightuserdata"),o._lua_pushthread=d("lua_pushthread"),o._lua_getglobal=d("lua_getglobal"),o._lua_gettable=d("lua_gettable"),o._lua_getfield=d("lua_getfield"),o._lua_geti=d("lua_geti"),o._lua_rawget=d("lua_rawget"),o._lua_rawgeti=d("lua_rawgeti"),o._lua_rawgetp=d("lua_rawgetp"),o._lua_createtable=d("lua_createtable"),o._lua_getmetatable=d("lua_getmetatable"),o._lua_getiuservalue=d("lua_getiuservalue"),o._lua_setglobal=d("lua_setglobal"),o._lua_settable=d("lua_settable"),o._lua_setfield=d("lua_setfield"),o._lua_seti=d("lua_seti"),o._lua_rawset=d("lua_rawset"),o._lua_rawsetp=d("lua_rawsetp"),o._lua_rawseti=d("lua_rawseti"),o._lua_setmetatable=d("lua_setmetatable"),o._lua_setiuservalue=d("lua_setiuservalue"),o._lua_callk=d("lua_callk"),o._lua_pcallk=d("lua_pcallk"),o._lua_load=d("lua_load"),o._lua_dump=d("lua_dump"),o._lua_status=d("lua_status"),o._lua_error=d("lua_error"),o._lua_next=d("lua_next"),o._lua_toclose=d("lua_toclose"),o._lua_concat=d("lua_concat"),o._lua_len=d("lua_len"),o._lua_getallocf=d("lua_getallocf"),o._lua_setallocf=d("lua_setallocf"),o._lua_setwarnf=d("lua_setwarnf"),o._lua_warning=d("lua_warning"),o._lua_newuserdatauv=d("lua_newuserdatauv"),o._lua_getupvalue=d("lua_getupvalue"),o._lua_setupvalue=d("lua_setupvalue"),o._lua_upvalueid=d("lua_upvalueid"),o._lua_upvaluejoin=d("lua_upvaluejoin"),o._luaL_traceback=d("luaL_traceback"),o._lua_getstack=d("lua_getstack"),o._lua_getinfo=d("lua_getinfo"),o._luaL_buffinit=d("luaL_buffinit"),o._luaL_addstring=d("luaL_addstring"),o._luaL_prepbuffsize=d("luaL_prepbuffsize"),o._luaL_addvalue=d("luaL_addvalue"),o._luaL_pushresult=d("luaL_pushresult"),o._luaL_argerror=d("luaL_argerror"),o._luaL_typeerror=d("luaL_typeerror"),o._luaL_getmetafield=d("luaL_getmetafield"),o._luaL_where=d("luaL_where"),o._luaL_fileresult=d("luaL_fileresult");var ut=d("__errno_location");o._luaL_execresult=d("luaL_execresult"),o._luaL_newmetatable=d("luaL_newmetatable"),o._luaL_setmetatable=d("luaL_setmetatable"),o._luaL_testudata=d("luaL_testudata"),o._luaL_checkudata=d("luaL_checkudata"),o._luaL_optlstring=d("luaL_optlstring"),o._luaL_checklstring=d("luaL_checklstring"),o._luaL_checkstack=d("luaL_checkstack"),o._luaL_checktype=d("luaL_checktype"),o._luaL_checkany=d("luaL_checkany"),o._luaL_checknumber=d("luaL_checknumber"),o._luaL_optnumber=d("luaL_optnumber"),o._luaL_checkinteger=d("luaL_checkinteger"),o._luaL_optinteger=d("luaL_optinteger"),o._luaL_setfuncs=d("luaL_setfuncs"),o._luaL_addlstring=d("luaL_addlstring"),o._luaL_pushresultsize=d("luaL_pushresultsize"),o._luaL_buffinitsize=d("luaL_buffinitsize"),o._luaL_ref=d("luaL_ref"),o._luaL_unref=d("luaL_unref"),o._luaL_loadfilex=d("luaL_loadfilex"),o._luaL_loadbufferx=d("luaL_loadbufferx"),o._luaL_loadstring=d("luaL_loadstring"),o._luaL_callmeta=d("luaL_callmeta"),o._luaL_len=d("luaL_len"),o._luaL_tolstring=d("luaL_tolstring"),o._luaL_getsubtable=d("luaL_getsubtable"),o._luaL_requiref=d("luaL_requiref"),o._luaL_addgsub=d("luaL_addgsub"),o._luaL_gsub=d("luaL_gsub"),o._luaL_newstate=d("luaL_newstate"),o._lua_newstate=d("lua_newstate"),o._free=d("free"),o._realloc=d("realloc");var wn=o._fflush=d("fflush");o._luaL_checkversion_=d("luaL_checkversion_"),o._luaopen_base=d("luaopen_base"),o._luaopen_coroutine=d("luaopen_coroutine"),o._lua_newthread=d("lua_newthread"),o._lua_yieldk=d("lua_yieldk"),o._lua_isyieldable=d("lua_isyieldable"),o._lua_resetthread=d("lua_resetthread"),o._lua_resume=d("lua_resume"),o._luaopen_debug=d("luaopen_debug"),o._lua_gethookmask=d("lua_gethookmask"),o._lua_gethook=d("lua_gethook"),o._lua_gethookcount=d("lua_gethookcount"),o._lua_getlocal=d("lua_getlocal"),o._lua_sethook=d("lua_sethook"),o._lua_setlocal=d("lua_setlocal"),o._lua_setcstacklimit=d("lua_setcstacklimit");var gg=o._malloc=d("malloc");o._luaL_openlibs=d("luaL_openlibs"),o._luaopen_package=d("luaopen_package"),o._luaopen_table=d("luaopen_table"),o._luaopen_io=d("luaopen_io"),o._luaopen_os=d("luaopen_os"),o._luaopen_string=d("luaopen_string"),o._luaopen_math=d("luaopen_math"),o._luaopen_utf8=d("luaopen_utf8"),o._lua_close=d("lua_close");var ig=d("setThrew"),yn=()=>(yn=MA.emscripten_stack_init)(),dt=()=>(dt=MA.emscripten_stack_get_end)(),Rn=d("stackSave"),kn=d("stackRestore"),bn=d("stackAlloc");function og(A,t,i){var r=Rn();try{Qt(A)(t,i)}catch(B){if(kn(r),B!==B+0)throw B;ig(1,0)}}o.ENV=Le,o.ccall=(A,t,i,r)=>{var B={string:b=>{var H=0;if(b!=null&&b!==0){H=OA(b)+1;var N=bn(H);Me(b,N,H),H=N}return H},array:b=>{var H=bn(b.length);return pn(b,H),H}};A=sg(A);var u=[],p=0;if(R(t!=="array",'Return type should not be "array".'),r)for(var k=0;k<r.length;k++){var v=B[i[k]];v?(p===0&&(p=Rn()),u[k]=v(r[k])):u[k]=r[k]}return i=A.apply(null,u),i=(function(b){return p!==0&&kn(p),t==="string"?EA(b):t==="boolean"?!!b:b})(i)},o.addFunction=(A,t)=>{if(R(typeof A<"u"),!NA){NA=new WeakMap;var i=oA.length;if(NA)for(var r=0;r<0+i;r++){var B=Qt(r);B&&NA.set(B,r)}}if(i=NA.get(A)||0)return i;if(ct.length)i=ct.pop();else{try{oA.grow(1)}catch(k){throw k instanceof RangeError?"Unable to grow wasm table. Set ALLOW_TABLE_GROWTH.":k}i=oA.length-1}try{r=i,oA.set(r,A),xA[r]=oA.get(r)}catch(k){if(!(k instanceof TypeError))throw k;if(R(typeof t<"u","Missing signature argument to addFunction: "+A),typeof WebAssembly.Function=="function"){r=WebAssembly.Function,B={i:"i32",j:"i64",f:"f32",d:"f64",e:"externref",p:"i32"};for(var u={parameters:[],results:t[0]=="v"?[]:[B[t[0]]]},p=1;p<t.length;++p)R(t[p]in B,"invalid signature char: "+t[p]),u.parameters.push(B[t[p]]);t=new r(u,A)}else{for(r=[1],B=t.slice(0,1),t=t.slice(1),u={i:127,p:127,j:126,f:125,d:124,e:111},r.push(96),p=t.length,R(16384>p),128>p?r.push(p):r.push(p%128|128,p>>7),p=0;p<t.length;++p)R(t[p]in u,"invalid signature char: "+t[p]),r.push(u[t[p]]);B=="v"?r.push(0):r.push(1,u[B]),t=[0,97,115,109,1,0,0,0,1],B=r.length,R(16384>B),128>B?t.push(B):t.push(B%128|128,B>>7),t.push.apply(t,r),t.push(2,7,1,1,101,1,102,0,0,7,5,1,1,102,0,0),t=new WebAssembly.Module(new Uint8Array(t)),t=new WebAssembly.Instance(t,{e:{f:A}}).exports.f}r=i,oA.set(r,t),xA[r]=oA.get(r)}return NA.set(A,i),i},o.removeFunction=A=>{NA.delete(Qt(A)),oA.set(A,null),xA[A]=oA.get(A),ct.push(A)},o.setValue=function(A,t,i="i8"){switch(i.endsWith("*")&&(i="*"),i){case"i1":AA[A>>0]=t;break;case"i8":AA[A>>0]=t;break;case"i16":VA[A>>1]=t;break;case"i32":x[A>>2]=t;break;case"i64":ke[A>>3]=BigInt(t);break;case"float":je[A>>2]=t;break;case"double":Ze[A>>3]=t;break;case"*":W[A>>2]=t;break;default:Z(`invalid type for setValue: ${i}`)}},o.getValue=function(A,t="i8"){switch(t.endsWith("*")&&(t="*"),t){case"i1":return AA[A>>0];case"i8":return AA[A>>0];case"i16":return VA[A>>1];case"i32":return x[A>>2];case"i64":return ke[A>>3];case"float":return je[A>>2];case"double":return Ze[A>>3];case"*":return W[A>>2];default:Z(`invalid type for getValue: ${t}`)}},o.stringToUTF8=Me,o.lengthBytesUTF8=OA,o.stringToNewUTF8=lt,o.FS=I,"writeI53ToI64 writeI53ToI64Clamped writeI53ToI64Signaling writeI53ToU64Clamped writeI53ToU64Signaling readI53FromI64 readI53FromU64 convertI32PairToI53 convertI32PairToI53Checked convertU32PairToI53 inetPton4 inetNtop4 inetPton6 inetNtop6 readSockaddr writeSockaddr getHostByName getCallstack emscriptenLog convertPCtoSourceLocation readEmAsmArgs jstoi_q jstoi_s listenOnce autoResumeAudioContext getDynCaller dynCall handleException runtimeKeepalivePush runtimeKeepalivePop callUserCallback maybeExit asmjsMangle handleAllocatorInit HandleAllocator getNativeTypeSize STACK_SIZE STACK_ALIGN POINTER_SIZE ASSERTIONS cwrap reallyNegative unSign strLen reSign formatString intArrayToString AsciiToString UTF16ToString stringToUTF16 lengthBytesUTF16 UTF32ToString stringToUTF32 lengthBytesUTF32 registerKeyEventCallback maybeCStringToJsString findEventTarget findCanvasEventTarget getBoundingClientRect fillMouseEventData registerMouseEventCallback registerWheelEventCallback registerUiEventCallback registerFocusEventCallback fillDeviceOrientationEventData registerDeviceOrientationEventCallback fillDeviceMotionEventData registerDeviceMotionEventCallback screenOrientation fillOrientationChangeEventData registerOrientationChangeEventCallback fillFullscreenChangeEventData registerFullscreenChangeEventCallback JSEvents_requestFullscreen JSEvents_resizeCanvasForFullscreen registerRestoreOldStyle hideEverythingExceptGivenElement restoreHiddenElements setLetterbox softFullscreenResizeWebGLRenderTarget doRequestFullscreen fillPointerlockChangeEventData registerPointerlockChangeEventCallback registerPointerlockErrorEventCallback requestPointerLock fillVisibilityChangeEventData registerVisibilityChangeEventCallback registerTouchEventCallback fillGamepadEventData registerGamepadEventCallback registerBeforeUnloadEventCallback fillBatteryEventData battery registerBatteryEventCallback setCanvasElementSize getCanvasElementSize jsStackTrace stackTrace checkWasiClock wasiRightsToMuslOFlags wasiOFlagsToMuslOFlags createDyncallWrapper safeSetTimeout setImmediateWrapped clearImmediateWrapped polyfillSetImmediate getPromise makePromise idsToPromises makePromiseCallback setMainLoop getSocketFromFD getSocketAddress FS_unlink FS_mkdirTree _setNetworkCallback".split(" ").forEach(function(A){typeof globalThis>"u"||Object.getOwnPropertyDescriptor(globalThis,A)||Object.defineProperty(globalThis,A,{configurable:!0,get(){var t=`\`${A}\` is a library symbol and not included by default; add it to your library.js __deps or to DEFAULT_LIBRARY_FUNCS_TO_INCLUDE on the command line`,i=A;i.startsWith("_")||(i="$"+A),t+=` (e.g. -sDEFAULT_LIBRARY_FUNCS_TO_INCLUDE='${i}')`,zt(A)&&(t+=". Alternatively, forcing filesystem support (-sFORCE_FILESYSTEM) can export this for you"),_A(t)}}),An(A)}),"run addOnPreRun addOnInit addOnPreMain addOnExit addOnPostRun addRunDependency removeRunDependency FS_createFolder FS_createPath FS_createLazyFile FS_createLink FS_createDevice FS_readFile out err callMain abort wasmMemory wasmExports stackAlloc stackSave stackRestore getTempRet0 setTempRet0 writeStackCookie checkStackCookie MAX_INT53 MIN_INT53 bigintToI53Checked ptrToString zeroMemory exitJS getHeapMax growMemory MONTH_DAYS_REGULAR MONTH_DAYS_LEAP MONTH_DAYS_REGULAR_CUMULATIVE MONTH_DAYS_LEAP_CUMULATIVE isLeapYear ydayFromDate arraySum addDays ERRNO_CODES ERRNO_MESSAGES setErrNo DNS Protocols Sockets initRandomFill randomFill timers warnOnce UNWIND_CACHE readEmAsmArgsArray getExecutableName keepRuntimeAlive asyncLoad alignMemory mmapAlloc wasmTable noExitRuntime getCFunc uleb128Encode sigToWasmTypes generateFuncType convertJsFunctionToWasm freeTableIndexes functionsInTableMap getEmptyTableSlot updateTableMap getFunctionAddress PATH PATH_FS UTF8Decoder UTF8ArrayToString UTF8ToString stringToUTF8Array intArrayFromString stringToAscii UTF16Decoder stringToUTF8OnStack writeArrayToMemory JSEvents specialHTMLTargets currentFullscreenStrategy restoreOldWindowedStyle demangle demangleAll ExitStatus getEnvStrings doReadv doWritev promiseMap Browser wget SYSCALLS preloadPlugins FS_createPreloadedFile FS_modeStringToFlags FS_getMode FS_stdin_getChar_buffer FS_stdin_getChar FS_createDataFile MEMFS TTY PIPEFS SOCKFS".split(" ").forEach(An);var Ge;Ie=function A(){Ge||Fn(),Ge||(Ie=A)};function Fn(){if(!(0<ae)){yn();var A=dt();if(R((A&3)==0),A==0&&(A+=4),W[A>>2]=34821223,W[A+4>>2]=2310721022,W[0]=1668509029,o.preRun)for(typeof o.preRun=="function"&&(o.preRun=[o.preRun]);o.preRun.length;)A=o.preRun.shift(),ze.unshift(A);for(;0<ze.length;)ze.shift()(o);if(!(0<ae)){if(!Ge&&(Ge=!0,o.calledRun=!0,!re)){for(R(!At),At=!0,Xe(),o.noFSInit||I.R.Y||I.R(),I.ta=!1;0<$e.length;)$e.shift()(o);for(c(o),R(!o._main,'compiled without a main, but one is present. if you added it from JS, use Module["onRuntimeInitialized"]'),Xe();0<qt.length;)qt.shift()(o)}Xe()}}}function rg(){var A=TA,t=X,i=!1;TA=X=()=>{i=!0};try{wn(0),["stdout","stderr"].forEach(function(r){(r=Qn("/dev/"+r))&&(r=it[r.object.rdev])&&r.output&&r.output.length&&(i=!0)})}catch{}TA=A,X=t,i&&_A("stdio streams had content in them that was not flushed. you should set EXIT_RUNTIME to 1 (see the Emscripten FAQ), or make sure to emit a newline when you printf etc.")}return Fn(),g.ready})})();class ye{static async initialize(g,o){let c=await vs({locateFile:(Q,D)=>g||D+Q,preRun:Q=>{typeof o=="object"&&Object.entries(o).forEach(([D,S])=>Q.ENV[D]=S)}});return new ye(c)}constructor(g){this.referenceTracker=new WeakMap,this.referenceMap=new Map,this.availableReferences=[],this.module=g,this.luaL_checkversion_=this.cwrap("luaL_checkversion_",null,["number","number","number"]),this.luaL_getmetafield=this.cwrap("luaL_getmetafield","number",["number","number","string"]),this.luaL_callmeta=this.cwrap("luaL_callmeta","number",["number","number","string"]),this.luaL_tolstring=this.cwrap("luaL_tolstring","string",["number","number","number"]),this.luaL_argerror=this.cwrap("luaL_argerror","number",["number","number","string"]),this.luaL_typeerror=this.cwrap("luaL_typeerror","number",["number","number","string"]),this.luaL_checklstring=this.cwrap("luaL_checklstring","string",["number","number","number"]),this.luaL_optlstring=this.cwrap("luaL_optlstring","string",["number","number","string","number"]),this.luaL_checknumber=this.cwrap("luaL_checknumber","number",["number","number"]),this.luaL_optnumber=this.cwrap("luaL_optnumber","number",["number","number","number"]),this.luaL_checkinteger=this.cwrap("luaL_checkinteger","number",["number","number"]),this.luaL_optinteger=this.cwrap("luaL_optinteger","number",["number","number","number"]),this.luaL_checkstack=this.cwrap("luaL_checkstack",null,["number","number","string"]),this.luaL_checktype=this.cwrap("luaL_checktype",null,["number","number","number"]),this.luaL_checkany=this.cwrap("luaL_checkany",null,["number","number"]),this.luaL_newmetatable=this.cwrap("luaL_newmetatable","number",["number","string"]),this.luaL_setmetatable=this.cwrap("luaL_setmetatable",null,["number","string"]),this.luaL_testudata=this.cwrap("luaL_testudata","number",["number","number","string"]),this.luaL_checkudata=this.cwrap("luaL_checkudata","number",["number","number","string"]),this.luaL_where=this.cwrap("luaL_where",null,["number","number"]),this.luaL_fileresult=this.cwrap("luaL_fileresult","number",["number","number","string"]),this.luaL_execresult=this.cwrap("luaL_execresult","number",["number","number"]),this.luaL_ref=this.cwrap("luaL_ref","number",["number","number"]),this.luaL_unref=this.cwrap("luaL_unref",null,["number","number","number"]),this.luaL_loadfilex=this.cwrap("luaL_loadfilex","number",["number","string","string"]),this.luaL_loadbufferx=this.cwrap("luaL_loadbufferx","number",["number","string|number","number","string|number","string"]),this.luaL_loadstring=this.cwrap("luaL_loadstring","number",["number","string"]),this.luaL_newstate=this.cwrap("luaL_newstate","number",[]),this.luaL_len=this.cwrap("luaL_len","number",["number","number"]),this.luaL_addgsub=this.cwrap("luaL_addgsub",null,["number","string","string","string"]),this.luaL_gsub=this.cwrap("luaL_gsub","string",["number","string","string","string"]),this.luaL_setfuncs=this.cwrap("luaL_setfuncs",null,["number","number","number"]),this.luaL_getsubtable=this.cwrap("luaL_getsubtable","number",["number","number","string"]),this.luaL_traceback=this.cwrap("luaL_traceback",null,["number","number","string","number"]),this.luaL_requiref=this.cwrap("luaL_requiref",null,["number","string","number","number"]),this.luaL_buffinit=this.cwrap("luaL_buffinit",null,["number","number"]),this.luaL_prepbuffsize=this.cwrap("luaL_prepbuffsize","string",["number","number"]),this.luaL_addlstring=this.cwrap("luaL_addlstring",null,["number","string","number"]),this.luaL_addstring=this.cwrap("luaL_addstring",null,["number","string"]),this.luaL_addvalue=this.cwrap("luaL_addvalue",null,["number"]),this.luaL_pushresult=this.cwrap("luaL_pushresult",null,["number"]),this.luaL_pushresultsize=this.cwrap("luaL_pushresultsize",null,["number","number"]),this.luaL_buffinitsize=this.cwrap("luaL_buffinitsize","string",["number","number","number"]),this.lua_newstate=this.cwrap("lua_newstate","number",["number","number"]),this.lua_close=this.cwrap("lua_close",null,["number"]),this.lua_newthread=this.cwrap("lua_newthread","number",["number"]),this.lua_resetthread=this.cwrap("lua_resetthread","number",["number"]),this.lua_atpanic=this.cwrap("lua_atpanic","number",["number","number"]),this.lua_version=this.cwrap("lua_version","number",["number"]),this.lua_absindex=this.cwrap("lua_absindex","number",["number","number"]),this.lua_gettop=this.cwrap("lua_gettop","number",["number"]),this.lua_settop=this.cwrap("lua_settop",null,["number","number"]),this.lua_pushvalue=this.cwrap("lua_pushvalue",null,["number","number"]),this.lua_rotate=this.cwrap("lua_rotate",null,["number","number","number"]),this.lua_copy=this.cwrap("lua_copy",null,["number","number","number"]),this.lua_checkstack=this.cwrap("lua_checkstack","number",["number","number"]),this.lua_xmove=this.cwrap("lua_xmove",null,["number","number","number"]),this.lua_isnumber=this.cwrap("lua_isnumber","number",["number","number"]),this.lua_isstring=this.cwrap("lua_isstring","number",["number","number"]),this.lua_iscfunction=this.cwrap("lua_iscfunction","number",["number","number"]),this.lua_isinteger=this.cwrap("lua_isinteger","number",["number","number"]),this.lua_isuserdata=this.cwrap("lua_isuserdata","number",["number","number"]),this.lua_type=this.cwrap("lua_type","number",["number","number"]),this.lua_typename=this.cwrap("lua_typename","string",["number","number"]),this.lua_tonumberx=this.cwrap("lua_tonumberx","number",["number","number","number"]),this.lua_tointegerx=this.cwrap("lua_tointegerx","number",["number","number","number"]),this.lua_toboolean=this.cwrap("lua_toboolean","number",["number","number"]),this.lua_tolstring=this.cwrap("lua_tolstring","string",["number","number","number"]),this.lua_rawlen=this.cwrap("lua_rawlen","number",["number","number"]),this.lua_tocfunction=this.cwrap("lua_tocfunction","number",["number","number"]),this.lua_touserdata=this.cwrap("lua_touserdata","number",["number","number"]),this.lua_tothread=this.cwrap("lua_tothread","number",["number","number"]),this.lua_topointer=this.cwrap("lua_topointer","number",["number","number"]),this.lua_arith=this.cwrap("lua_arith",null,["number","number"]),this.lua_rawequal=this.cwrap("lua_rawequal","number",["number","number","number"]),this.lua_compare=this.cwrap("lua_compare","number",["number","number","number","number"]),this.lua_pushnil=this.cwrap("lua_pushnil",null,["number"]),this.lua_pushnumber=this.cwrap("lua_pushnumber",null,["number","number"]),this.lua_pushinteger=this.cwrap("lua_pushinteger",null,["number","number"]),this.lua_pushlstring=this.cwrap("lua_pushlstring","string",["number","string|number","number"]),this.lua_pushstring=this.cwrap("lua_pushstring","string",["number","string|number"]),this.lua_pushcclosure=this.cwrap("lua_pushcclosure",null,["number","number","number"]),this.lua_pushboolean=this.cwrap("lua_pushboolean",null,["number","number"]),this.lua_pushlightuserdata=this.cwrap("lua_pushlightuserdata",null,["number","number"]),this.lua_pushthread=this.cwrap("lua_pushthread","number",["number"]),this.lua_getglobal=this.cwrap("lua_getglobal","number",["number","string"]),this.lua_gettable=this.cwrap("lua_gettable","number",["number","number"]),this.lua_getfield=this.cwrap("lua_getfield","number",["number","number","string"]),this.lua_geti=this.cwrap("lua_geti","number",["number","number","number"]),this.lua_rawget=this.cwrap("lua_rawget","number",["number","number"]),this.lua_rawgeti=this.cwrap("lua_rawgeti","number",["number","number","number"]),this.lua_rawgetp=this.cwrap("lua_rawgetp","number",["number","number","number"]),this.lua_createtable=this.cwrap("lua_createtable",null,["number","number","number"]),this.lua_newuserdatauv=this.cwrap("lua_newuserdatauv","number",["number","number","number"]),this.lua_getmetatable=this.cwrap("lua_getmetatable","number",["number","number"]),this.lua_getiuservalue=this.cwrap("lua_getiuservalue","number",["number","number","number"]),this.lua_setglobal=this.cwrap("lua_setglobal",null,["number","string"]),this.lua_settable=this.cwrap("lua_settable",null,["number","number"]),this.lua_setfield=this.cwrap("lua_setfield",null,["number","number","string"]),this.lua_seti=this.cwrap("lua_seti",null,["number","number","number"]),this.lua_rawset=this.cwrap("lua_rawset",null,["number","number"]),this.lua_rawseti=this.cwrap("lua_rawseti",null,["number","number","number"]),this.lua_rawsetp=this.cwrap("lua_rawsetp",null,["number","number","number"]),this.lua_setmetatable=this.cwrap("lua_setmetatable","number",["number","number"]),this.lua_setiuservalue=this.cwrap("lua_setiuservalue","number",["number","number","number"]),this.lua_callk=this.cwrap("lua_callk",null,["number","number","number","number","number"]),this.lua_pcallk=this.cwrap("lua_pcallk","number",["number","number","number","number","number","number"]),this.lua_load=this.cwrap("lua_load","number",["number","number","number","string","string"]),this.lua_dump=this.cwrap("lua_dump","number",["number","number","number","number"]),this.lua_yieldk=this.cwrap("lua_yieldk","number",["number","number","number","number"]),this.lua_resume=this.cwrap("lua_resume","number",["number","number","number","number"]),this.lua_status=this.cwrap("lua_status","number",["number"]),this.lua_isyieldable=this.cwrap("lua_isyieldable","number",["number"]),this.lua_setwarnf=this.cwrap("lua_setwarnf",null,["number","number","number"]),this.lua_warning=this.cwrap("lua_warning",null,["number","string","number"]),this.lua_error=this.cwrap("lua_error","number",["number"]),this.lua_next=this.cwrap("lua_next","number",["number","number"]),this.lua_concat=this.cwrap("lua_concat",null,["number","number"]),this.lua_len=this.cwrap("lua_len",null,["number","number"]),this.lua_stringtonumber=this.cwrap("lua_stringtonumber","number",["number","string"]),this.lua_getallocf=this.cwrap("lua_getallocf","number",["number","number"]),this.lua_setallocf=this.cwrap("lua_setallocf",null,["number","number","number"]),this.lua_toclose=this.cwrap("lua_toclose",null,["number","number"]),this.lua_closeslot=this.cwrap("lua_closeslot",null,["number","number"]),this.lua_getstack=this.cwrap("lua_getstack","number",["number","number","number"]),this.lua_getinfo=this.cwrap("lua_getinfo","number",["number","string","number"]),this.lua_getlocal=this.cwrap("lua_getlocal","string",["number","number","number"]),this.lua_setlocal=this.cwrap("lua_setlocal","string",["number","number","number"]),this.lua_getupvalue=this.cwrap("lua_getupvalue","string",["number","number","number"]),this.lua_setupvalue=this.cwrap("lua_setupvalue","string",["number","number","number"]),this.lua_upvalueid=this.cwrap("lua_upvalueid","number",["number","number","number"]),this.lua_upvaluejoin=this.cwrap("lua_upvaluejoin",null,["number","number","number","number","number"]),this.lua_sethook=this.cwrap("lua_sethook",null,["number","number","number","number"]),this.lua_gethook=this.cwrap("lua_gethook","number",["number"]),this.lua_gethookmask=this.cwrap("lua_gethookmask","number",["number"]),this.lua_gethookcount=this.cwrap("lua_gethookcount","number",["number"]),this.lua_setcstacklimit=this.cwrap("lua_setcstacklimit","number",["number","number"]),this.luaopen_base=this.cwrap("luaopen_base","number",["number"]),this.luaopen_coroutine=this.cwrap("luaopen_coroutine","number",["number"]),this.luaopen_table=this.cwrap("luaopen_table","number",["number"]),this.luaopen_io=this.cwrap("luaopen_io","number",["number"]),this.luaopen_os=this.cwrap("luaopen_os","number",["number"]),this.luaopen_string=this.cwrap("luaopen_string","number",["number"]),this.luaopen_utf8=this.cwrap("luaopen_utf8","number",["number"]),this.luaopen_math=this.cwrap("luaopen_math","number",["number"]),this.luaopen_debug=this.cwrap("luaopen_debug","number",["number"]),this.luaopen_package=this.cwrap("luaopen_package","number",["number"]),this.luaL_openlibs=this.cwrap("luaL_openlibs",null,["number"])}lua_remove(g,o){this.lua_rotate(g,o,-1),this.lua_pop(g,1)}lua_pop(g,o){this.lua_settop(g,-o-1)}luaL_getmetatable(g,o){return this.lua_getfield(g,l,o)}lua_yield(g,o){return this.lua_yieldk(g,o,0,null)}lua_upvalueindex(g){return l-g}ref(g){let o=this.referenceTracker.get(g);if(o)return o.refCount++,o.index;let c=this.availableReferences.pop(),Q=c===void 0?this.referenceMap.size+1:c;return this.referenceMap.set(Q,g),this.referenceTracker.set(g,{refCount:1,index:Q}),this.lastRefIndex=Q,Q}unref(g){let o=this.referenceMap.get(g);if(o===void 0)return;let c=this.referenceTracker.get(o);if(c===void 0){this.referenceTracker.delete(o),this.availableReferences.push(g);return}c.refCount--,c.refCount<=0&&(this.referenceTracker.delete(o),this.referenceMap.delete(g),this.availableReferences.push(g))}getRef(g){return this.referenceMap.get(g)}getLastRefIndex(){return this.lastRefIndex}printRefs(){for(let[g,o]of this.referenceMap.entries())console.log(g,o)}cwrap(g,o,c){return c.some(D=>D==="string|number")?(...D)=>{let S=[],J=c.map((M,P)=>{var V;if(M==="string|number"){if(typeof D[P]=="number")return"number";if(((V=D[P])===null||V===void 0?void 0:V.length)>1024){let q=this.module.stringToNewUTF8(D[P]);return D[P]=q,S.push(q),"number"}else return"string"}return M});try{return this.module.ccall(g,o,J,D)}finally{for(let M of S)this.module._free(M)}}:(...D)=>this.module.ccall(g,o,c,D)}}var Ts="1.16.0";class Vs{constructor(g,o){var c;g===void 0&&(typeof window=="object"&&typeof window.document<"u"||typeof self=="object"&&((c=self?.constructor)===null||c===void 0?void 0:c.name)==="DedicatedWorkerGlobalScope")&&(g=`https://unpkg.com/wasmoon@${Ts}/dist/glue.wasm`),this.luaWasmPromise=ye.initialize(g,o)}async mountFile(g,o){this.mountFileSync(await this.getLuaModule(),g,o)}mountFileSync(g,o,c){let Q=o.lastIndexOf("/"),D=o.substring(Q+1),S=o.substring(0,o.length-D.length-1);if(S.length>0){let J=S.split("/").reverse(),M="";for(;J.length;){let P=J.pop();if(!P)continue;let V=`${M}/${P}`;try{g.module.FS.mkdir(V)}catch{}M=V}}g.module.FS.writeFile(o,c)}async createEngine(g={}){return new vt(await this.getLuaModule(),g)}async getLuaModule(){return this.luaWasmPromise}}s.Decoration=w,s.LUAI_MAXSTACK=C,s.LUA_MULTRET=a,s.LUA_REGISTRYINDEX=l,s.LuaEngine=vt,s.LuaFactory=Vs,s.LuaGlobal=tA,s.LuaMultiReturn=F,s.LuaRawResult=yA,s.LuaThread=$,s.LuaTimeoutError=E,s.LuaTypeExtension=sA,s.LuaWasm=ye,s.PointerSize=n,s.decorate=y,s.decorateFunction=te,s.decorateProxy=we,s.decorateUserdata=Js}))});var Nt,rs=IA(()=>{Nt={"prometheus-src/cli.lua":`-- This Script is Part of the Prometheus Obfuscator by levno-710
--
-- cli.lua
--
-- This Script contains the Code for the Prometheus CLI.

-- Configure package.path for requiring Prometheus.
local function script_path()
	local str = debug.getinfo(2, "S").source:sub(2)
	return str:match("(.*[/%\\\\])")
end
package.path = script_path() .. "?.lua;" .. package.path

local INSTALL_SCRIPT_URL = "https://raw.githubusercontent.com/prometheus-lua/Prometheus/master/install.sh"

local function run_shell(command)
	local ok = os.execute(command)
	if type(ok) == "number" then
		return ok == 0
	end
	if type(ok) == "boolean" then
		return ok
	end
	return false
end

local function get_version()
	local version = os.getenv("PROMETHEUS_LUA_VERSION")
	if version and version ~= "" then
		return version
	end
	return "dev"
end

local function print_help()
	print("Prometheus Lua CLI")
	print("Usage: prometheus-lua [command] [options] <input.lua>")
	print("")
	print("Commands:")
	print("  update                 Install latest release via installer script")
	print("  --version, -v          Print CLI version")
	print("")
	print("Obfuscation options:")
	print("  --preset, --p <name>   Use preset (e.g. Minify, Medium, High)")
	print("  --config, --c <file>   Use custom config Lua file")
	print("  --out, --o <file>      Set output path")
	print("  --Lua51                Force Lua 5.1 target")
	print("  --LuaU                 Force LuaU target")
	print("  --pretty               Pretty print output")
	print("  --nocolors             Disable colored logs")
	print("  --saveerrors           Persist parser errors to file")
end

local function run_update()
	local command
	if run_shell("command -v curl >/dev/null 2>&1") then
		command = string.format("curl -fsSL '%s' | sh", INSTALL_SCRIPT_URL)
	elseif run_shell("command -v wget >/dev/null 2>&1") then
		command = string.format("wget -qO- '%s' | sh", INSTALL_SCRIPT_URL)
	else
		io.stderr:write("Neither curl nor wget was found. Please install one of them and retry.\\n")
		os.exit(1)
	end

	print("Updating prometheus-lua using official installer")
	if not run_shell(command) then
		io.stderr:write("Update failed\\n")
		os.exit(1)
	end

	print("Update completed")
end

if arg[1] == "update" then
	run_update()
	os.exit(0)
end

if arg[1] == "--version" or arg[1] == "-v" then
	print(get_version())
	os.exit(0)
end

if arg[1] == "--help" or arg[1] == "-h" or arg[1] == "help" then
	print_help()
	os.exit(0)
end

---@diagnostic disable-next-line: different-requires
local Prometheus = require("prometheus")
Prometheus.Logger.logLevel = Prometheus.Logger.LogLevel.Info
Prometheus.Logger.errorCallback = function(...)
	local args = { ... }
	local message = table.concat(args, " ")
	io.stderr:write(Prometheus.colors(Prometheus.Config.NameUpper .. ": " .. message, "red") .. "\\n")
	os.exit(1)
end

-- Check if the file exists
local function file_exists(file)
	local f = io.open(file, "rb")
	if f then
		f:close()
	end
	return f ~= nil
end

string.split = function(str, sep)
	local fields = {}
	local pattern = string.format("([^%s]+)", sep)
	str:gsub(pattern, function(c)
		fields[#fields + 1] = c
	end)
	return fields
end

-- get all lines from a file, returns an empty
-- list/table if the file does not exist
local function lines_from(file)
	if not file_exists(file) then
		return {}
	end
	local lines = {}
	for line in io.lines(file) do
		lines[#lines + 1] = line
	end
	return lines
end

local function load_chunk(content, chunkName, environment)
	if type(loadstring) == "function" then
		local func, err = loadstring(content, chunkName)
		if not func then
			return nil, err
		end
		if environment and type(setfenv) == "function" then
			setfenv(func, environment)
		elseif environment and type(load) == "function" then
			return load(content, chunkName, "t", environment)
		end
		return func
	end

	if type(load) ~= "function" then
		return nil, "No load function available"
	end

	return load(content, chunkName, "t", environment)
end

local function run_cli()
	-- CLI
	local config, sourceFile, outFile, luaVersion, prettyPrint

	Prometheus.colors.enabled = true

	-- Parse Arguments
	local i = 1
	while i <= #arg do
		local curr = arg[i]
		if curr:sub(1, 2) == "--" then
			if curr == "--preset" or curr == "--p" then
				if config then
					Prometheus.Logger:warn("The config was set multiple times")
				end

				i = i + 1
				local preset = Prometheus.Presets[arg[i]]
				if not preset then
					Prometheus.Logger:error(string.format('A Preset with the name "%s" was not found!', tostring(arg[i])))
				end

				config = preset
			elseif curr == "--config" or curr == "--c" then
				i = i + 1
				local filename = tostring(arg[i])
				if not file_exists(filename) then
					Prometheus.Logger:error(string.format('The config file "%s" was not found!', filename))
				end

				local content = table.concat(lines_from(filename), "\\n")
				-- Load Config from File
				local func, err = load_chunk(content, "@" .. filename, {})
				if not func then
					Prometheus.Logger:error(string.format('Failed to parse config file "%s": %s', filename, tostring(err)))
				end
				config = func()
			elseif curr == "--out" or curr == "--o" then
				i = i + 1
				if outFile then
					Prometheus.Logger:warn("The output file was specified multiple times!")
				end
				outFile = arg[i]
			elseif curr == "--nocolors" then
				Prometheus.colors.enabled = false
			elseif curr == "--Lua51" then
				luaVersion = "Lua51"
			elseif curr == "--LuaU" then
				luaVersion = "LuaU"
			elseif curr == "--pretty" then
				prettyPrint = true
			elseif curr == "--saveerrors" then
				-- Override error callback
				Prometheus.Logger.errorCallback = function(...)
					local args = { ... }
					local message = table.concat(args, " ")
					io.stderr:write(Prometheus.colors(Prometheus.Config.NameUpper .. ": " .. message, "red") .. "\\n")

					local fileName = sourceFile:sub(-4) == ".lua" and sourceFile:sub(0, -5) .. ".error.txt"
						or sourceFile .. ".error.txt"
					local handle = io.open(fileName, "w")
					handle:write(message)
					handle:close()

					os.exit(1)
				end
			else
				Prometheus.Logger:warn(string.format('The option "%s" is not valid and therefore ignored', curr))
			end
		else
			if sourceFile then
				Prometheus.Logger:error(string.format('Unexpected argument "%s"', arg[i]))
			end
			sourceFile = tostring(arg[i])
		end
		i = i + 1
	end

	if not sourceFile then
		Prometheus.Logger:error("No input file was specified!")
	end

	if not config then
		Prometheus.Logger:warn("No config was specified, falling back to Minify preset")
		config = Prometheus.Presets.Minify
	end

	-- Add Option to override Lua Version
	config.LuaVersion = luaVersion or config.LuaVersion
	config.PrettyPrint = prettyPrint ~= nil and prettyPrint or config.PrettyPrint

	if not file_exists(sourceFile) then
		Prometheus.Logger:error(string.format('The File "%s" was not found!', sourceFile))
	end

	if not outFile then
		if sourceFile:sub(-4) == ".lua" then
			outFile = sourceFile:sub(0, -5) .. ".obfuscated.lua"
		else
			outFile = sourceFile .. ".obfuscated.lua"
		end
	end

	local source = table.concat(lines_from(sourceFile), "\\n")
	local pipeline = Prometheus.Pipeline:fromConfig(config)
	local out = pipeline:apply(source, sourceFile)
	Prometheus.Logger:info(string.format('Writing output to "%s"', outFile))

	-- Write Output
	local handle = io.open(outFile, "w")
	handle:write(out)
	handle:close()
end

local ok, err = xpcall(run_cli, function(e)
	return tostring(e)
end)
if not ok then
	local message = tostring(err):gsub("^.-:%d+:%s*", "")
	io.stderr:write(Prometheus.colors(Prometheus.Config.NameUpper .. ": " .. message, "red") .. "\\n")
	os.exit(1)
end
`,"prometheus-src/colors.lua":`-- This Script is Part of the Prometheus Obfuscator by levno-710
--
-- colors.lua
--
-- This Script provides a simple method for syntax highlighting of Lua code

local keys = {
	reset = 0,
	bright = 1,
	dim = 2,
	underline = 4,
	blink = 5,
	reverse = 7,
	hidden = 8,
	black = 30,
	pink = 91,
	red = 31,
	green = 32,
	yellow = 33,
	blue = 34,
	magenta = 35,
	cyan = 36,
	grey = 37,
	gray = 37,
	white = 97,
	blackbg = 40,
	redbg = 41,
	greenbg = 42,
	yellowbg = 43,
	bluebg = 44,
	magentabg = 45,
	cyanbg = 46,
	greybg = 47,
	graybg = 47,
	whitebg = 107,
}

local escapeString = string.char(27) .. "[%dm"
local function escapeNumber(number)
	return escapeString:format(number)
end

local settings = {
	enabled = true,
}

local function colors(str, ...)
	if not settings.enabled then
		return str
	end
	str = tostring(str or "")

	local escapes = {}
	for _, name in ipairs({ ... }) do
		table.insert(escapes, escapeNumber(keys[name]))
	end

	return escapeNumber(keys.reset) .. table.concat(escapes) .. str .. escapeNumber(keys.reset)
end

return setmetatable(settings, {
	__call = function(_, ...)
		return colors(...)
	end,
})
`,"prometheus-src/config.lua":`-- This Script is Part of the Prometheus Obfuscator by Levno_710
--
-- config.lua
--
-- In this Script, some Global config Variables are defined

local NAME = "Prometheus";
local REVISION = "Alpha";
local VERSION = "v0.3";
local BY = "levno-710";

for _, currArg in pairs(arg) do
	if currArg == "--CI" then
		local releaseName = string.gsub(string.format("%s %s %s", NAME, REVISION, VERSION), "%s", "-")
		print(releaseName)
	end

	if currArg == "--FullVersion" then
		print(VERSION)
	end
end

-- Config Starts here
return {
	Name = NAME,
	NameUpper = string.upper(NAME),
	NameAndVersion = string.format("%s %s", NAME, VERSION),
	Version = VERSION;
	Revision = REVISION;
	-- Config Starts Here
	IdentPrefix = "__prometheus_"; -- The Prefix used for Identifiers generated by PROMETHEUS. NOTE: There should be no identifiers in the script to be obfuscated starting with that prefix, because that can lead to weird bugs

	SPACE = " "; -- The Whitespace to be used by the unparser
	TAB = "\\t"; -- The Tab Whitespace to be used by the unparser for pretty printing
}
`,"prometheus-src/highlightlua.lua":`-- This Script is Part of the Prometheus Obfuscator by levno-710
--
-- highlightlua.lua
--
-- This Script provides a simple Method for Syntax Highlighting of Lua code

local Tokenizer = require("prometheus.tokenizer");
local colors = require("colors");
local TokenKind = Tokenizer.TokenKind;
local lookupify = require("prometheus.util").lookupify;

return function(code, luaVersion)
    local out = "";
    local tokenizer = Tokenizer:new({
        LuaVersion = luaVersion,
    });

    tokenizer:append(code);
    local tokens = tokenizer:scanAll();

    local nonColorSymbols = lookupify{
        ",", ";", "(", ")", "{", "}", ".", ":", "[", "]"
    }

    local defaultGlobals = lookupify{
        "string", "table", "bit32", "bit"
    }

    local currentPos = 1;
    for _, token in ipairs(tokens) do
        if token.startPos >= currentPos then
            out = out .. string.sub(code, currentPos, token.startPos);
        end
        if token.kind == TokenKind.Ident then
            if defaultGlobals[token.source] then
                out = out .. colors(token.source, "red");
            else
                out = out .. token.source;
            end
        elseif token.kind == TokenKind.Keyword then
            if token.source == "nil" then
                out = out .. colors(token.source, "yellow");
            else
                out = out .. colors(token.source, "yellow");
            end
        elseif token.kind == TokenKind.Symbol then
            if nonColorSymbols[token.source] then
                out = out .. token.source;
            else
                out = out .. colors(token.source, "yellow");
            end
        elseif token.kind == TokenKind.String then
            out = out .. colors(token.source, "green")
        elseif token.kind == TokenKind.Number then
            out = out .. colors(token.source, "red")
        else
            out = out .. token.source;
        end

        currentPos = token.endPos + 1;
    end
    return out;
end`,"prometheus-src/logger.lua":`-- This Script is Part of the Prometheus Obfuscator by levno-710
--
-- logger.lua
--
-- This Script provides a Logger for Prometheus.

local logger = {}
local config = require("config");
local colors = require("colors");

logger.LogLevel = {
	Error = 0,
	Warn = 1,
	Log = 2,
	Info = 2,
	Debug = 3,
}

logger.logLevel = logger.LogLevel.Log;

logger.debugCallback = function(...)
	print(colors(config.NameUpper .. ": " ..  ..., "grey"));
end;
function logger:debug(...)
	if self.logLevel >= self.LogLevel.Debug then
		self.debugCallback(...);
	end
end

logger.logCallback = function(...)
	print(colors(config.NameUpper .. ": ", "magenta") .. ...);
end;
function logger:log(...)
	if self.logLevel >= self.LogLevel.Log then
		self.logCallback(...);
	end
end

function logger:info(...)
	if self.logLevel >= self.LogLevel.Log then
		self.logCallback(...);
	end
end

logger.warnCallback = function(...)
	print(colors(config.NameUpper .. ": " .. ..., "yellow"));
end;
function logger:warn(...)
	if self.logLevel >= self.LogLevel.Warn then
		self.warnCallback(...);
	end
end

logger.errorCallback = function(...)
	print(colors(config.NameUpper .. ": " .. ..., "red"))
	error(...);
end;
function logger:error(...)
	self.errorCallback(...);
	error(config.NameUpper .. ": logger.errorCallback did not throw an Error!");
end


return logger;`,"prometheus-src/presets.lua":`-- This Script is Part of the Prometheus Obfuscator by levno-710
--
-- presets.lua
--
-- This Script provides the predefined obfuscation presets for Prometheus

return {
	-- Minifies your code. Does not obfuscate it. No performance loss.
	["Minify"] = {
		LuaVersion = "Lua51",
		VarNamePrefix = "",
		NameGenerator = "MangledShuffled",
		PrettyPrint = false,
		Seed = 0,
		Steps = {},
	},

	-- Weak obfuscation. Very readable, low performance loss.
	["Weak"] = {
		LuaVersion = "Lua51",
		VarNamePrefix = "",
		NameGenerator = "MangledShuffled",
		PrettyPrint = false,
		Seed = 0,
		Steps = {
			{ Name = "Cff", Settings = {} },
			{
				Name = "ConstantArray",
				Settings = {
					Threshold = 1,
					StringsOnly = true
				},
			},
			{ Name = "WrapInFunction", Settings = {} },
		},
	},

	-- Standalone control-flow flattening for tests and custom pipelines.
	-- It is not recommended to use this preset for obfuscation.
	-- Use the Weak, Medium, or Strong for obfuscation instead.
	["Cff"] = {
		LuaVersion = "Lua51",
		VarNamePrefix = "",
		NameGenerator = "MangledShuffled",
		PrettyPrint = false,
		Seed = 0,
		Steps = {
			{ Name = "Cff", Settings = {} },
		},
	},

	-- Standalone register VM for tests and custom pipelines.
	["Vmify"] = {
		LuaVersion = "Lua51",
		VarNamePrefix = "",
		NameGenerator = "MangledShuffled",
		PrettyPrint = false,
		Seed = 0,
		Steps = {
			{ Name = "Vmify", Settings = {} },
		},
	},

	-- Medium obfuscation. Moderate obfuscation, moderate performance loss.
	["Medium"] = {
		LuaVersion = "Lua51",
		VarNamePrefix = "",
		NameGenerator = "MangledShuffled",
		PrettyPrint = false,
		Seed = 0,
		Steps = {
			{ Name = "Vmify", Settings = {} },
			{ Name = "EncryptStrings", Settings = { HoistVmStrings = true } },
			{
				Name = "AntiTamper",
				Settings = {
					UseDebug = false,
				},
			},
			{
				Name = "ConstantArray",
				Settings = {
					Threshold = 1,
					StringsOnly = true,
					Shuffle = true,
					Rotate = true,
					LocalWrapperThreshold = 0,
				},
			},
			{ Name = "WrapInFunction", Settings = {} },
			{ Name = "Cff", Settings = { ExcludeVm = true } },
			{ Name = "NumbersToExpressions", Settings = {} },
		},
	},

	-- Strong obfuscation, high performance loss.
	["Strong"] = {
		LuaVersion = "Lua51",
		VarNamePrefix = "",
		NameGenerator = "MangledShuffled",
		PrettyPrint = false,
		Seed = 0,
		Steps = {
			{ Name = "Vmify", Settings = {} },
			{ Name = "EncryptStrings", Settings = {} },
			{
				Name = "AntiTamper",
				Settings = {
					UseDebug = false,
				},
			},
			{ Name = "Cff", Settings = {} },
			{
				Name = "ConstantArray",
				Settings = {
					Threshold = 1,
					StringsOnly = true,
					Shuffle = true,
					Rotate = true,
					LocalWrapperThreshold = 0
				},
			},
			{
				Name = "NumbersToExpressions",
				Settings = {
					NumberRepresentationMutation = true
				},
			},
			{ Name = "WrapInFunction", Settings = {} },
		},
	},
}
`,"prometheus-src/prometheus.lua":`-- This Script is Part of the Prometheus Obfuscator by levno-710
--
-- prometheus.lua
--
-- This file is the entrypoint for Prometheus

-- Configure package.path for require
local function script_path()
	local str = debug.getinfo(2, "S").source:sub(2)
	return str:match("(.*[/%\\\\])")
end

local oldPkgPath = package.path;
package.path = script_path() .. "?.lua;" .. package.path;

-- Math.random Fix for Lua5.1
-- Check if fix is needed
if not pcall(function()
    return math.random(1, 2^40);
end) then
    local oldMathRandom = math.random;
    math.random = function(a, b)
        if not a then
            return oldMathRandom();
        end
        if not b then
            return math.random(1, a);
        end
        if a > b then
            a, b = b, a;
        end
        local diff = b - a;
        assert(diff >= 0);
        if diff > 2 ^ 31 - 1 then
            return math.floor(oldMathRandom() * diff + a);
        else
            return oldMathRandom(a, b);
        end
    end
end

-- newproxy polyfill
_G.newproxy = _G.newproxy or function(arg)
    if arg then
        return setmetatable({}, {});
    end
    return {};
end


-- Require Prometheus Submodules
local Pipeline = require("prometheus.pipeline");
local highlight = require("highlightlua");
local colors = require("colors");
local Logger = require("logger");
local Presets = require("presets");
local Config = require("config");
local util = require("prometheus.util");

-- Restore package.path
package.path = oldPkgPath;

-- Export
return {
    Pipeline = Pipeline;
    colors = colors;
    Config = util.readonly(Config); -- Readonly
    Logger = Logger;
    highlight = highlight;
    Presets = Presets;
}

`,"prometheus-src/prometheus/ast.lua":`-- This Script is Part of the Prometheus Obfuscator by levno-710
--
-- ast.lua
--
-- This Script provides the Abstract Syntax Tree (AST) for Prometheus.

local Ast = {}

local AstKind = {
	-- Misc
	TopNode = "TopNode";
	Block = "Block";

	-- Statements
	ContinueStatement = "ContinueStatement";
	BreakStatement = "BreakStatement";
	DoStatement = "DoStatement";
	WhileStatement = "WhileStatement";
	ReturnStatement = "ReturnStatement";
	RepeatStatement = "RepeatStatement";
	ForInStatement = "ForInStatement";
	ForStatement = "ForStatement";
	IfStatement = "IfStatement";
	FunctionDeclaration = "FunctionDeclaration";
	LocalFunctionDeclaration = "LocalFunctionDeclaration";
	LocalVariableDeclaration = "LocalVariableDeclaration";
	FunctionCallStatement = "FunctionCallStatement";
	PassSelfFunctionCallStatement = "PassSelfFunctionCallStatement";
	AssignmentStatement = "AssignmentStatement";

	-- LuaU Compound Statements
	CompoundAddStatement = "CompoundAddStatement";
	CompoundSubStatement = "CompoundSubStatement";
	CompoundMulStatement = "CompoundMulStatement";
	CompoundDivStatement = "CompoundDivStatement";
	CompoundModStatement = "CompoundModStatement";
	CompoundPowStatement = "CompoundPowStatement";
	CompoundConcatStatement = "CompoundConcatStatement";

	-- Assignment Index
	AssignmentIndexing = "AssignmentIndexing";
	AssignmentVariable = "AssignmentVariable";
	AssignmentGlobalVariable = "AssignmentGlobalVariable";

	-- Expression Nodes
	BooleanExpression = "BooleanExpression";
	NumberExpression = "NumberExpression";
	StringExpression = "StringExpression";
	NilExpression = "NilExpression";
	VarargExpression = "VarargExpression";
	OrExpression = "OrExpression";
	AndExpression = "AndExpression";
	LessThanExpression = "LessThanExpression";
	GreaterThanExpression = "GreaterThanExpression";
	LessThanOrEqualsExpression = "LessThanOrEqualsExpression";
	GreaterThanOrEqualsExpression = "GreaterThanOrEqualsExpression";
	NotEqualsExpression = "NotEqualsExpression";
	EqualsExpression = "EqualsExpression";
	StrCatExpression = "StrCatExpression";
	AddExpression = "AddExpression";
	SubExpression = "SubExpression";
	MulExpression = "MulExpression";
	DivExpression = "DivExpression";
	ModExpression = "ModExpression";
	NotExpression = "NotExpression";
	LenExpression = "LenExpression";
	NegateExpression = "NegateExpression";
	PowExpression = "PowExpression";
	IndexExpression = "IndexExpression";
	FunctionCallExpression = "FunctionCallExpression";
	PassSelfFunctionCallExpression = "PassSelfFunctionCallExpression";
	VariableExpression = "VariableExpression";
	GlobalVariableExpression = "GlobalVariableExpression";
	FunctionLiteralExpression = "FunctionLiteralExpression";
	TableConstructorExpression = "TableConstructorExpression";

	-- Table Entry
	TableEntry = "TableEntry";
	KeyedTableEntry = "KeyedTableEntry";

	-- Misc
	NopStatement = "NopStatement";

	IfElseExpression = "IfElseExpression";
}

local astKindExpressionLookup = {
	[AstKind.BooleanExpression] = 0;
	[AstKind.NumberExpression] = 0;
	[AstKind.StringExpression] = 0;
	[AstKind.NilExpression] = 0;
	[AstKind.VarargExpression] = 0;
	[AstKind.OrExpression] = 12;
	[AstKind.AndExpression] = 11;
	[AstKind.LessThanExpression] = 10;
	[AstKind.GreaterThanExpression] = 10;
	[AstKind.LessThanOrEqualsExpression] = 10;
	[AstKind.GreaterThanOrEqualsExpression] = 10;
	[AstKind.NotEqualsExpression] = 10;
	[AstKind.EqualsExpression] = 10;
	[AstKind.StrCatExpression] = 9;
	[AstKind.AddExpression] = 8;
	[AstKind.SubExpression] = 8;
	[AstKind.MulExpression] = 7;
	[AstKind.DivExpression] = 7;
	[AstKind.ModExpression] = 7;
	[AstKind.NotExpression] = 5;
	[AstKind.LenExpression] = 5;
	[AstKind.NegateExpression] = 5;
	[AstKind.PowExpression] = 4;
	[AstKind.IndexExpression] = 1;
	[AstKind.AssignmentIndexing] = 1;
	[AstKind.FunctionCallExpression] = 2;
	[AstKind.PassSelfFunctionCallExpression] = 2;
	[AstKind.VariableExpression] = 0;
	[AstKind.GlobalVariableExpression] = 0;
	[AstKind.AssignmentGlobalVariable] = 0;
	[AstKind.AssignmentVariable] = 0;
	[AstKind.FunctionLiteralExpression] = 3;
	[AstKind.TableConstructorExpression] = 3;
}

Ast.AstKind = AstKind;

function Ast.astKindExpressionToNumber(kind)
	return astKindExpressionLookup[kind] or 100;
end

function Ast.ConstantNode(val)
	if type(val) == "nil" then
		return Ast.NilExpression();
	end

	if type(val) == "string" then
		return Ast.StringExpression(val);
	end

	if type(val) == "number" then
		return Ast.NumberExpression(val);
	end

	if type(val) == "boolean" then
		return Ast.BooleanExpression(val);
	end
end



function Ast.NopStatement()
	return {
		kind = AstKind.NopStatement;
	}
end

function Ast.IfElseExpression(condition, true_value, elseifs, false_value)
	return {
		kind = AstKind.IfElseExpression,
		condition = condition,
		true_value = true_value,
		elseifs = elseifs,
		false_value = false_value
	}
end

-- Create Ast Top Node
function Ast.TopNode(body)
	return {kind = AstKind.TopNode, body = body};
end

function Ast.TableEntry(value)
	return {
		kind = AstKind.TableEntry,
		value = value,

	}
end

function Ast.KeyedTableEntry(key, value)
	return {
		kind = AstKind.KeyedTableEntry,
		key = key,
		value = value,

	}
end

function Ast.TableConstructorExpression(entries)
	return {
		kind = AstKind.TableConstructorExpression,
		entries = entries,
	};
end

-- Create Statement Block
function Ast.Block(statements)
	return {kind = AstKind.Block, statements = statements};
end

function Ast.BreakStatement(loop)
	return {kind = AstKind.BreakStatement, loop = loop};
end

function Ast.ContinueStatement(loop)
	return {kind = AstKind.ContinueStatement, loop = loop};
end

function Ast.PassSelfFunctionCallStatement(base, passSelfFunctionName, args)
	return {
		kind = AstKind.PassSelfFunctionCallStatement,
		base = base,
		passSelfFunctionName = passSelfFunctionName,
		args = args,
	}
end

function Ast.AssignmentStatement(lhs, rhs)
	if(#lhs < 1) then
		print(debug.traceback());
		error("Something went wrong!");
	end
	return {
		kind = AstKind.AssignmentStatement,
		lhs = lhs,
		rhs = rhs,
	}
end

function Ast.CompoundAddStatement(lhs, rhs)
	return {
		kind = AstKind.CompoundAddStatement,
		lhs = lhs,
		rhs = rhs,
	}
end

function Ast.CompoundSubStatement(lhs, rhs)
	return {
		kind = AstKind.CompoundSubStatement,
		lhs = lhs,
		rhs = rhs,
	}
end

function Ast.CompoundMulStatement(lhs, rhs)
	return {
		kind = AstKind.CompoundMulStatement,
		lhs = lhs,
		rhs = rhs,
	}
end

function Ast.CompoundDivStatement(lhs, rhs)
	return {
		kind = AstKind.CompoundDivStatement,
		lhs = lhs,
		rhs = rhs,
	}
end

function Ast.CompoundPowStatement(lhs, rhs)
	return {
		kind = AstKind.CompoundPowStatement,
		lhs = lhs,
		rhs = rhs,
	}
end

function Ast.CompoundModStatement(lhs, rhs)
	return {
		kind = AstKind.CompoundModStatement,
		lhs = lhs,
		rhs = rhs,
	}
end

function Ast.CompoundConcatStatement(lhs, rhs)
	return {
		kind = AstKind.CompoundConcatStatement,
		lhs = lhs,
		rhs = rhs,
	}
end

function Ast.FunctionCallStatement(base, args)
	return {
		kind = AstKind.FunctionCallStatement,
		base = base,
		args = args,
	}
end

function Ast.ReturnStatement(args)
	return {
		kind = AstKind.ReturnStatement,
		args = args,
	}
end

function Ast.DoStatement(body)
	return {
		kind = AstKind.DoStatement,
		body = body,
	}
end

function Ast.WhileStatement(body, condition)
	return {kind = AstKind.WhileStatement, body = body, condition = condition};
end

function Ast.ForInStatement(symbols, expressions, body)
	return {kind = AstKind.ForInStatement, symbols = symbols, expressions = expressions, body = body};
end

function Ast.ForStatement(symbol, initialValue, finalValue, incrementBy, body)
	return {kind = AstKind.ForStatement, symbol = symbol, initialValue = initialValue,
		finalValue = finalValue, incrementBy = incrementBy, body = body};
end

function Ast.RepeatStatement(condition, body)
	return {kind = AstKind.RepeatStatement, condition = condition, body = body};
end

function Ast.IfStatement(condition, body, elseifs, elsebody)
	return {
		kind = AstKind.IfStatement,
		condition = condition,
		body = body,
		elseifs = elseifs,
		elsebody = elsebody,
	}
end

function Ast.FunctionDeclaration(target, indices, args, body)
	for i, arg in ipairs(args) do
		if arg.kind == "LocalSymbol" then args[i] = Ast.VariableExpression(arg); end
	end
	return {kind = AstKind.FunctionDeclaration, symbol = target.symbol, name = target.name,
		indices = indices, args = args, body = body,
		getName = function(self) return self.symbol and self.symbol.name or self.name end};
end

function Ast.LocalFunctionDeclaration(symbol, args, body)
	for i, arg in ipairs(args) do
		if arg.kind == "LocalSymbol" then args[i] = Ast.VariableExpression(arg); end
	end
	return {kind = AstKind.LocalFunctionDeclaration, symbol = symbol, args = args, body = body,
		getName = function(self) return self.symbol.name end};
end

function Ast.LocalVariableDeclaration(symbols, expressions)
	return {kind = AstKind.LocalVariableDeclaration, symbols = symbols, expressions = expressions or {}};
end

function Ast.VarargExpression()
	return {
		kind = AstKind.VarargExpression;
		isConstant = false,
	}
end

function Ast.BooleanExpression(value)
	return {
		kind = AstKind.BooleanExpression,
		isConstant = true,
		value = value,
	}
end

function Ast.NilExpression()
	return {
		kind = AstKind.NilExpression,
		isConstant = true,
		value = nil,
	}
end

function Ast.NumberExpression(value)
	return {
		kind = AstKind.NumberExpression,
		isConstant = true,
		value = value,
	}
end

function Ast.StringExpression(value)
	return {
		kind = AstKind.StringExpression,
		isConstant = true,
		value = value,
	}
end

function Ast.OrExpression(lhs, rhs, simplify)
	if(simplify and rhs.isConstant and lhs.isConstant) then
		local success, val = pcall(function() return lhs.value or rhs.value end);
		if success then
			return Ast.ConstantNode(val);
		end
	end

	return {
		kind = AstKind.OrExpression,
		lhs = lhs,
		rhs = rhs,
		isConstant = false,
	}
end

function Ast.AndExpression(lhs, rhs, simplify)
	if(simplify and rhs.isConstant and lhs.isConstant) then
		local success, val = pcall(function() return lhs.value and rhs.value end);
		if success then
			return Ast.ConstantNode(val);
		end
	end

	return {
		kind = AstKind.AndExpression,
		lhs = lhs,
		rhs = rhs,
		isConstant = false,
	}
end

function Ast.LessThanExpression(lhs, rhs, simplify)
	if(simplify and rhs.isConstant and lhs.isConstant) then
		local success, val = pcall(function() return lhs.value < rhs.value end);
		if success then
			return Ast.ConstantNode(val);
		end
	end

	return {
		kind = AstKind.LessThanExpression,
		lhs = lhs,
		rhs = rhs,
		isConstant = false,
	}
end

function Ast.GreaterThanExpression(lhs, rhs, simplify)
	if(simplify and rhs.isConstant and lhs.isConstant) then
		local success, val = pcall(function() return lhs.value > rhs.value end);
		if success then
			return Ast.ConstantNode(val);
		end
	end

	return {
		kind = AstKind.GreaterThanExpression,
		lhs = lhs,
		rhs = rhs,
		isConstant = false,
	}
end

function Ast.LessThanOrEqualsExpression(lhs, rhs, simplify)
	if(simplify and rhs.isConstant and lhs.isConstant) then
		local success, val = pcall(function() return lhs.value <= rhs.value end);
		if success then
			return Ast.ConstantNode(val);
		end
	end

	return {
		kind = AstKind.LessThanOrEqualsExpression,
		lhs = lhs,
		rhs = rhs,
		isConstant = false,
	}
end

function Ast.GreaterThanOrEqualsExpression(lhs, rhs, simplify)
	if(simplify and rhs.isConstant and lhs.isConstant) then
		local success, val = pcall(function() return lhs.value >= rhs.value end);
		if success then
			return Ast.ConstantNode(val);
		end
	end

	return {
		kind = AstKind.GreaterThanOrEqualsExpression,
		lhs = lhs,
		rhs = rhs,
		isConstant = false,
	}
end

function Ast.NotEqualsExpression(lhs, rhs, simplify)
	if(simplify and rhs.isConstant and lhs.isConstant) then
		local success, val = pcall(function() return lhs.value ~= rhs.value end);
		if success then
			return Ast.ConstantNode(val);
		end
	end

	return {
		kind = AstKind.NotEqualsExpression,
		lhs = lhs,
		rhs = rhs,
		isConstant = false,
	}
end

function Ast.EqualsExpression(lhs, rhs, simplify)
	if(simplify and rhs.isConstant and lhs.isConstant) then
		local success, val = pcall(function() return lhs.value == rhs.value end);
		if success then
			return Ast.ConstantNode(val);
		end
	end

	return {
		kind = AstKind.EqualsExpression,
		lhs = lhs,
		rhs = rhs,
		isConstant = false,
	}
end

function Ast.StrCatExpression(lhs, rhs, simplify)
	if(simplify and rhs.isConstant and lhs.isConstant) then
		local success, val = pcall(function() return lhs.value .. rhs.value end);
		if success then
			return Ast.ConstantNode(val);
		end
	end

	return {
		kind = AstKind.StrCatExpression,
		lhs = lhs,
		rhs = rhs,
		isConstant = false,
	}
end

function Ast.AddExpression(lhs, rhs, simplify)
	if(simplify and rhs.isConstant and lhs.isConstant) then
		local success, val = pcall(function() return lhs.value + rhs.value end);
		if success then
			return Ast.ConstantNode(val);
		end
	end

	return {
		kind = AstKind.AddExpression,
		lhs = lhs,
		rhs = rhs,
		isConstant = false,
	}
end

function Ast.SubExpression(lhs, rhs, simplify)
	if(simplify and rhs.isConstant and lhs.isConstant) then
		local success, val = pcall(function() return lhs.value - rhs.value end);
		if success then
			return Ast.ConstantNode(val);
		end
	end

	return {
		kind = AstKind.SubExpression,
		lhs = lhs,
		rhs = rhs,
		isConstant = false,
	}
end

function Ast.MulExpression(lhs, rhs, simplify)
	if(simplify and rhs.isConstant and lhs.isConstant) then
		local success, val = pcall(function() return lhs.value * rhs.value end);
		if success then
			return Ast.ConstantNode(val);
		end
	end

	return {
		kind = AstKind.MulExpression,
		lhs = lhs,
		rhs = rhs,
		isConstant = false,
	}
end

function Ast.DivExpression(lhs, rhs, simplify)
	if(simplify and rhs.isConstant and lhs.isConstant and rhs.value ~= 0) then
		local success, val = pcall(function() return lhs.value / rhs.value end);
		if success then
			return Ast.ConstantNode(val);
		end
	end

	return {
		kind = AstKind.DivExpression,
		lhs = lhs,
		rhs = rhs,
		isConstant = false,
	}
end

function Ast.ModExpression(lhs, rhs, simplify)
	if(simplify and rhs.isConstant and lhs.isConstant) then
		local success, val = pcall(function() return lhs.value % rhs.value end);
		if success then
			return Ast.ConstantNode(val);
		end
	end

	return {
		kind = AstKind.ModExpression,
		lhs = lhs,
		rhs = rhs,
		isConstant = false,
	}
end

function Ast.NotExpression(rhs, simplify)
	if(simplify and rhs.isConstant) then
		local success, val = pcall(function() return not rhs.value end);
		if success then
			return Ast.ConstantNode(val);
		end
	end

	return {
		kind = AstKind.NotExpression,
		rhs = rhs,
		isConstant = false,
	}
end

function Ast.NegateExpression(rhs, simplify)
	if(simplify and rhs.isConstant) then
		local success, val = pcall(function() return -rhs.value end);
		if success then
			return Ast.ConstantNode(val);
		end
	end

	return {
		kind = AstKind.NegateExpression,
		rhs = rhs,
		isConstant = false,
	}
end

function Ast.LenExpression(rhs, simplify)
	if(simplify and rhs.isConstant) then
		local success, val = pcall(function() return #rhs.value end);
		if success then
			return Ast.ConstantNode(val);
		end
	end

	return {
		kind = AstKind.LenExpression,
		rhs = rhs,
		isConstant = false,
	}
end

function Ast.PowExpression(lhs, rhs, simplify)
	if(simplify and rhs.isConstant and lhs.isConstant) then
		local success, val = pcall(function() return lhs.value ^ rhs.value end);
		if success then
			return Ast.ConstantNode(val);
		end
	end

	return {
		kind = AstKind.PowExpression,
		lhs = lhs,
		rhs = rhs,
		isConstant = false,
	}
end

function Ast.IndexExpression(base, index)
	return {
		kind = AstKind.IndexExpression,
		base = base,
		index = index,
		isConstant = false,
	}
end

function Ast.AssignmentIndexing(base, index)
	return {
		kind = AstKind.AssignmentIndexing,
		base = base,
		index = index,
		isConstant = false,
	}
end

function Ast.PassSelfFunctionCallExpression(base, passSelfFunctionName, args)
	return {
		kind = AstKind.PassSelfFunctionCallExpression,
		base = base,
		passSelfFunctionName = passSelfFunctionName,
		args = args,

	}
end

function Ast.FunctionCallExpression(base, args)
	return {
		kind = AstKind.FunctionCallExpression,
		base = base,
		args = args,
	}
end

-- A symbol identifies a binding, independently of its name or lexical owner.
local nextSymbol = 0;
function Ast.LocalSymbol(name)
	nextSymbol = nextSymbol + 1;
	return {kind = "LocalSymbol", name = name or ("__prometheus_local_" .. nextSymbol)};
end

local function localReference(kind, symbol)
	assert(symbol and symbol.kind == "LocalSymbol", "Local references require a LocalSymbol");
	return {kind = kind, symbol = symbol, getName = function(self) return self.symbol.name end};
end

function Ast.GlobalVariableExpression(name)
	return {kind = AstKind.GlobalVariableExpression, name = name};
end

function Ast.AssignmentGlobalVariable(name)
	return {kind = AstKind.AssignmentGlobalVariable, name = name};
end

function Ast.VariableExpression(symbol)
	return localReference(AstKind.VariableExpression, symbol);
end

function Ast.AssignmentVariable(symbol)
	return localReference(AstKind.AssignmentVariable, symbol);
end

Ast.LocalVariableExpression = Ast.VariableExpression;
Ast.AssignmentLocalVariable = Ast.AssignmentVariable;

function Ast.FunctionLiteralExpression(args, body)
	for i, arg in ipairs(args) do
		if arg.kind == "LocalSymbol" then args[i] = Ast.VariableExpression(arg); end
	end
	return {
		kind = AstKind.FunctionLiteralExpression,
		args = args,
		body = body,
	}
end



return Ast;
`,"prometheus-src/prometheus/bindinganalysis.lua":`-- Derive lexical metadata from declarations and uses. Symbols are binding
-- identities; scope records and register slots are private lowering metadata.
local Ast = require('prometheus.ast')
local K = Ast.AstKind

local binary = {}
for _, name in ipairs({'Or', 'And', 'LessThan', 'GreaterThan', 'LessThanOrEquals',
    'GreaterThanOrEquals', 'NotEquals', 'Equals', 'StrCat', 'Add', 'Sub', 'Mul',
    'Div', 'Mod', 'Pow'}) do binary[K[name .. 'Expression']] = true end
local compound = {}
for _, name in ipairs({'Add', 'Sub', 'Mul', 'Div', 'Mod', 'Pow', 'Concat'}) do
    compound[K['Compound' .. name .. 'Statement']] = true
end

return function(ast)
    assert(ast.kind == K.TopNode, 'Binding analysis expects a TopNode')
    ast.bindingAnalysis = nil
    local global = {isGlobal = true}
    ast.globalScope = global
    local analysis = {owners = {}, captured = {}, declarations = {}, references = {}, reads = {}, writes = {}}
    local blocks, active, loops = {}, {}, {}
    local expression, statement, block, functionBody

    local function initialize(scope, parent, owner)
        scope.parentScope, scope.level = parent, parent and parent.level + 1 or 0
        scope.children, scope.referenceCounts, scope.variablesFromHigherScopes = {}, {}, {}
        scope.variables, scope.variablesLookup, scope.symbols = {}, {}, {}
        if parent then parent.children[#parent.children + 1] = scope end
        analysis.owners[scope] = owner or scope
    end
    initialize(global)

    local function bind(symbol, node, scope, declared)
        assert(symbol and symbol.kind == 'LocalSymbol', 'Declaration requires a local symbol')
        assert(symbol.name == nil or type(symbol.name) == 'string', 'Local symbol name must be a string')
        assert(not analysis.declarations[symbol], 'Local symbol has multiple declarations: ' .. tostring(symbol.name))
        analysis.declarations[symbol] = node
        local id = #scope.variables + 1
        local name = symbol.name or ('__prometheus_binding_' .. id)
        symbol.scope, symbol.id, symbol.name = scope, id, name
        scope.variables[id], scope.symbols[id], scope.variablesLookup[name] = name, symbol, id
        active[symbol] = true
        declared[#declared + 1] = symbol
        return id
    end

    local function reference(node, scope, owner, readWrite)
        local target, id
        if node.kind == K.GlobalVariableExpression or node.kind == K.AssignmentGlobalVariable
            or (node.kind == K.FunctionDeclaration and not node.symbol) then
            assert(type(node.name) == 'string', 'Global reference requires a name')
            target, id = global, global.variablesLookup[node.name]
            if not id then
                id = #global.variables + 1
                global.variables[id], global.variablesLookup[node.name] = node.name, id
            end
        else
            local symbol = node.symbol
            assert(symbol and active[symbol], 'Local binding is not accessible at this point: ' .. tostring(symbol and symbol.name))
            target, id = symbol.scope, symbol.id
            local refs = analysis.references[symbol] or {}
            refs[#refs + 1], analysis.references[symbol] = node, refs
            local writes = node.kind == K.AssignmentVariable
                or (node.kind == K.FunctionDeclaration and #node.indices == 0)
            local uses = writes and analysis.writes or analysis.reads
            uses[symbol] = uses[symbol] or {}
            uses[symbol][#uses[symbol] + 1] = node
            if writes and readWrite then
                analysis.reads[symbol] = analysis.reads[symbol] or {}
                local reads = analysis.reads[symbol]
                reads[#reads + 1] = node
            end
            if analysis.owners[target] ~= owner then analysis.captured[symbol] = true end
        end
        node.scope, node.id = target, id
        target.referenceCounts[id] = (target.referenceCounts[id] or 0) + 1
        local current = scope
        while current and current ~= target do
            local refs = current.variablesFromHigherScopes[target] or {}
            current.variablesFromHigherScopes[target] = refs
            refs[id] = (refs[id] or 0) + 1
            current = current.parentScope
        end
        assert(current == target, 'Local binding owner is not an enclosing scope')
    end

    local function expressions(list, scope, owner)
        for _, node in ipairs(list or {}) do expression(node, scope, owner) end
    end

    function expression(node, scope, owner, readWrite)
        local kind = node.kind
        if kind == K.VariableExpression or kind == K.AssignmentVariable
            or kind == K.GlobalVariableExpression or kind == K.AssignmentGlobalVariable then
            reference(node, scope, owner, readWrite)
        elseif binary[kind] then
            expression(node.lhs, scope, owner); expression(node.rhs, scope, owner)
        elseif kind == K.NotExpression or kind == K.NegateExpression or kind == K.LenExpression then
            expression(node.rhs, scope, owner)
        elseif kind == K.IndexExpression or kind == K.AssignmentIndexing then
            expression(node.base, scope, owner); expression(node.index, scope, owner)
        elseif kind == K.FunctionCallExpression or kind == K.PassSelfFunctionCallExpression then
            expression(node.base, scope, owner); expressions(node.args, scope, owner)
        elseif kind == K.FunctionLiteralExpression then
            functionBody(node, scope)
        elseif kind == K.TableConstructorExpression then
            for _, entry in ipairs(node.entries) do
                if entry.kind == K.KeyedTableEntry then expression(entry.key, scope, owner) end
                expression(entry.value, scope, owner)
            end
        elseif kind == K.IfElseExpression then
            expression(node.condition, scope, owner); expression(node.true_value, scope, owner)
            for _, branch in ipairs(node.elseifs) do
                expression(branch.condition, scope, owner); expression(branch.value, scope, owner)
            end
            expression(node.false_value, scope, owner)
        else
            assert(kind == K.BooleanExpression or kind == K.NumberExpression or kind == K.StringExpression
                or kind == K.NilExpression or kind == K.VarargExpression, 'Unknown expression kind: ' .. tostring(kind))
        end
    end

    function functionBody(node, parent)
        local savedLoops = loops
        loops = {}
        block(node.body, parent, nil, function(scope, declared)
            for _, arg in ipairs(node.args or {}) do
                if arg.kind ~= K.VarargExpression then
                    arg.id = bind(arg.symbol, arg, scope, declared)
                    arg.scope = scope
                end
            end
        end)
        loops = savedLoops
    end

    function block(node, parent, owner, before, after)
        assert(node and node.kind == K.Block, 'Expected a block')
        assert(not blocks[node], 'A block occurs multiple times in the AST')
        blocks[node] = true
        local scope = {isGlobal = false}
        node.scope = scope
        initialize(scope, parent, owner)
        owner = owner or scope
        local declared = {}
        if before then before(scope, declared) end
        for _, child in ipairs(node.statements) do statement(child, scope, owner, declared) end
        if after then after(scope, owner) end
        for _, symbol in ipairs(declared) do active[symbol] = nil end
    end

    function statement(node, scope, owner, declared)
        local kind = node.kind
        if kind == K.LocalVariableDeclaration then
            expressions(node.expressions, scope, owner)
            node.scope, node.ids = scope, {}
            for i, symbol in ipairs(node.symbols) do node.ids[i] = bind(symbol, node, scope, declared) end
        elseif kind == K.LocalFunctionDeclaration then
            node.id, node.scope = bind(node.symbol, node, scope, declared), scope
            functionBody(node, scope)
        elseif kind == K.FunctionDeclaration then
            reference(node, scope, owner)
            functionBody(node, scope)
        elseif kind == K.AssignmentStatement then
            expressions(node.lhs, scope, owner); expressions(node.rhs, scope, owner)
        elseif compound[kind] then
            expression(node.lhs, scope, owner, true); expression(node.rhs, scope, owner)
        elseif kind == K.ReturnStatement then expressions(node.args, scope, owner)
        elseif kind == K.FunctionCallStatement or kind == K.PassSelfFunctionCallStatement then
            expression(node.base, scope, owner); expressions(node.args, scope, owner)
        elseif kind == K.DoStatement then block(node.body, scope, owner)
        elseif kind == K.IfStatement then
            expression(node.condition, scope, owner); block(node.body, scope, owner)
            for _, branch in ipairs(node.elseifs) do
                expression(branch.condition, scope, owner); block(branch.body, scope, owner)
            end
            if node.elsebody then block(node.elsebody, scope, owner) end
        elseif kind == K.WhileStatement or kind == K.RepeatStatement
            or kind == K.ForStatement or kind == K.ForInStatement then
            node.parentScope = scope
            loops[#loops + 1] = node
            if kind == K.WhileStatement then expression(node.condition, scope, owner)
            elseif kind == K.ForStatement then
                expression(node.initialValue, scope, owner); expression(node.finalValue, scope, owner)
                expression(node.incrementBy, scope, owner)
            elseif kind == K.ForInStatement then expressions(node.expressions, scope, owner) end
            block(node.body, scope, owner, function(inner, locals)
                if kind == K.ForStatement then
                    node.scope, node.id = inner, bind(node.symbol, node, inner, locals)
                elseif kind == K.ForInStatement then
                    node.scope, node.ids = inner, {}
                    for i, symbol in ipairs(node.symbols) do node.ids[i] = bind(symbol, node, inner, locals) end
                end
            end, function(inner)
                if kind == K.RepeatStatement then expression(node.condition, inner, owner) end
            end)
            loops[#loops] = nil
        elseif kind == K.BreakStatement or kind == K.ContinueStatement then
            assert(#loops > 0, 'Loop control outside a loop')
            assert(not node.loop or node.loop == loops[#loops], 'Loop control targets a non-enclosing loop')
            node.loop, node.scope = loops[#loops], scope
        else assert(kind == K.NopStatement, 'Unknown statement kind: ' .. tostring(kind)) end
    end

    functionBody(ast, global)
    ast.bindingAnalysis = analysis
    return analysis
end
`,"prometheus-src/prometheus/cff/block.lua":`-- This Script is Part of the Prometheus Obfuscator by levno-710
--
-- block.lua
--
-- Block management for the compiler
local util = require("prometheus.util");

local lookupify = util.lookupify;

return function(Compiler)
    function Compiler:createBlock()
        local id;
        repeat
            id = math.random(0, 2^24)
        until not self.usedBlockIds[id];
        self.usedBlockIds[id] = true;
        local block = {
            id = id;
            statements = {};
            advanceToNextBlock = true;
        };
        table.insert(self.blocks, block);
        return block;
    end

    function Compiler:setActiveBlock(block)
        self.activeBlock = block;
    end

    function Compiler:addStatement(statement, writes, reads, usesUpvals, isCleanup)
        if(self.activeBlock.advanceToNextBlock) then
            table.insert(self.activeBlock.statements, {
                statement = statement,
                writes = lookupify(writes),
                reads = lookupify(reads),
                usesUpvals = usesUpvals or false,
                isCleanup = isCleanup or false,
            });
        end
    end
end

`,"prometheus-src/prometheus/cff/compile_core.lua":`-- This Script is Part of the Prometheus Obfuscator by levno-710
--
-- compile_core.lua
-- This Script contains the core compilation functions: compileTopNode, compileFunction, compileBlock,
-- compileStatement, and compileExpression

local compileTop = require("prometheus.cff.compile_top");
local statementHandlers = require("prometheus.cff.statements");
local expressionHandlers = require("prometheus.cff.expressions");
local Ast = require("prometheus.ast");
local logger = require("logger");

return function(Compiler)
    compileTop(Compiler);

    function Compiler:compileStatement(statement, funcDepth)
        local handler = statementHandlers[statement.kind];
        if handler then
            handler(self, statement, funcDepth);
            return;
        end
        logger:error(string.format("%s is not a compileable statement!", statement.kind));
    end

    function Compiler:compileExpression(expression, funcDepth, numReturns)
        if self.nativeExpressions and self.nativeExpressions[expression] then
            return self:compileNativeExpression(expression, funcDepth, numReturns);
        end
        local handler = expressionHandlers[expression.kind];
        if handler then
            local kind = expression.kind;
            if expression.isParenthesizedExpression and
                (kind == Ast.AstKind.FunctionCallExpression or kind == Ast.AstKind.PassSelfFunctionCallExpression or kind == Ast.AstKind.VarargExpression) and
                (numReturns == self.RETURN_ALL or numReturns > 1) then
                -- Parentheses collapse multiple values to one, even when it is nil.
                local regs = handler(self, expression, funcDepth, 1);
                if numReturns == self.RETURN_ALL then
                    local packed = self:allocRegister(false);
                    self:addStatement(self:setRegister(packed, self:pack({self:register(regs[1])})), {packed}, {regs[1]}, false);
                    self:freeRegister(regs[1], false);
                    return {packed};
                end
                for i = 2, numReturns do
                    regs[i] = self:allocRegister(false);
                    self:addStatement(self:setRegister(regs[i], Ast.NilExpression()), {regs[i]}, {}, false);
                end
                return regs;
            end
            return handler(self, expression, funcDepth, numReturns);
        end
        logger:error(string.format("%s is not an compliable expression!", expression.kind));
    end
end
`,"prometheus-src/prometheus/cff/compile_top.lua":`-- This Script is Part of the Prometheus Obfuscator by levno-710
--
-- compile_top.lua
--
-- This Script contains the compilation of the top node, function, and block.

local Ast = require("prometheus.ast");
local util = require("prometheus.util");
local visitast = require("prometheus.visitast");

local lookupify = util.lookupify;
local AstKind = Ast.AstKind;

return function(Compiler)
    function Compiler:compileTopNode(node)
        if self.nativeExpressions then self:prepareNativeExpressions(); end
        local startBlock = self:createBlock();
        self.startBlockId = startBlock.id;
        self:setActiveBlock(startBlock);

        local varAccessLookup = lookupify{
            AstKind.AssignmentVariable,
            AstKind.AssignmentGlobalVariable,
            AstKind.VariableExpression,
            AstKind.GlobalVariableExpression,
            AstKind.FunctionDeclaration,
            AstKind.LocalFunctionDeclaration,
        }

        local functionLookup = lookupify{
            AstKind.FunctionDeclaration,
            AstKind.LocalFunctionDeclaration,
            AstKind.FunctionLiteralExpression,
            AstKind.TopNode,
        }
        visitast(node, function(node, data)
            if node.kind == AstKind.Block then
                node.scope.__depth = data.functionData.depth;
            end

            if varAccessLookup[node.kind] then
                if not node.scope.isGlobal then
                    if node.scope.__depth < data.functionData.depth then
                        if not self:isUpvalue(node.scope, node.id) then
                            self:makeUpvalue(node.scope, node.id);
                        end
                    end
                end
            end
        end, nil, nil)

        self.varargReg = self:allocRegister(true);
        self:addStatement(self:setRegister(self.varargReg, Ast.VariableExpression(self.argsVar)), {self.varargReg}, {}, false);

        self:compileBlock(node.body, 0);
        if(self.activeBlock.advanceToNextBlock) then
            self:addStatement(self:setPos(nil), {self.POS_REGISTER}, {}, false);
            self:addStatement(self:setReturn(self:pack({})), {self.RETURN_REGISTER}, {}, false)
            self.activeBlock.advanceToNextBlock = false;
        end

        self:resetRegisters();
    end

    function Compiler:compileFunction(node, funcDepth)
        funcDepth = funcDepth + 1;
        local oldActiveBlock = self.activeBlock;

        local upperVarargReg = self.varargReg;
        self.varargReg = nil;

        local upvalueExpressions = {};
        local upvalueIds = {};
        local usedRegs = {};

        local oldGetUpvalueId = self.getUpvalueId;
        self.getUpvalueId = function(self, scope, id)
            if(not upvalueIds[scope]) then
                upvalueIds[scope] = {};
            end
            if(upvalueIds[scope][id]) then
                return upvalueIds[scope][id];
            end
            local scopeFuncDepth = self.scopeFunctionDepths[scope];
            local expression;
            if(scopeFuncDepth == funcDepth) then
                expression = Ast.FunctionCallExpression(Ast.VariableExpression(self.allocUpvalFunction), {});
            elseif(scopeFuncDepth == funcDepth - 1) then
                local varReg = self:getVarRegister(scope, id, scopeFuncDepth, nil);
                expression = self:register(varReg);
                table.insert(usedRegs, varReg);
            else
                local higherId = oldGetUpvalueId(self, scope, id);
                expression = Ast.IndexExpression(Ast.VariableExpression(self.currentUpvaluesVar), Ast.NumberExpression(higherId));
            end
            table.insert(upvalueExpressions, Ast.TableEntry(expression));
            local uid = #upvalueExpressions;
            upvalueIds[scope][id] = uid;
            return uid;
        end

        local block = self:createBlock();
        self:setActiveBlock(block);
        self:pushRegisterUsageInfo();
        for i, arg in ipairs(node.args) do
            if(arg.kind == AstKind.VariableExpression or arg.kind == AstKind.GlobalVariableExpression) then
                if(self:isUpvalue(arg.scope, arg.id)) then
                    local argReg = self:getVarRegister(arg.scope, arg.id, funcDepth, nil);
                    self:addStatement(self:setRegister(argReg, Ast.FunctionCallExpression(Ast.VariableExpression(self.allocUpvalFunction), {})), {argReg}, {}, false);
                    self:addStatement(self:setUpvalueMember(self:register(argReg), Ast.IndexExpression(Ast.VariableExpression(self.argsVar), Ast.NumberExpression(i))), {}, {argReg}, true);
                else
                    local argReg = self:getVarRegister(arg.scope, arg.id, funcDepth, nil);
                    self:addStatement(self:setRegister(argReg, Ast.IndexExpression(Ast.VariableExpression(self.argsVar), Ast.NumberExpression(i))), {argReg}, {}, false);
                end
            else
                self.varargReg = self:allocRegister(true);
                self:addStatement(self:setRegister(self.varargReg, self:pack({
                    Ast.FunctionCallExpression(Ast.VariableExpression(self.selectVar), {
                        Ast.NumberExpression(i);
                        Ast.FunctionCallExpression(self:unpack(), {
                            Ast.VariableExpression(self.argsVar),
                        });
                    }),
                })), {self.varargReg}, {}, false);
            end
        end

        self:compileBlock(node.body, funcDepth);
        if(self.activeBlock.advanceToNextBlock) then
            self:addStatement(self:setPos(nil), {self.POS_REGISTER}, {}, false);
            self:addStatement(self:setReturn(self:pack({})), {self.RETURN_REGISTER}, {}, false);
            self.activeBlock.advanceToNextBlock = false;
        end

        if(self.varargReg) then
            self:freeRegister(self.varargReg, true);
        end
        self.varargReg = upperVarargReg;
        self.getUpvalueId = oldGetUpvalueId;

        self:popRegisterUsageInfo();
        self:setActiveBlock(oldActiveBlock);
        local retReg = self:allocRegister(false);

        local isVarargFunction = #node.args > 0 and node.args[#node.args].kind == AstKind.VarargExpression;

        local retrieveExpression
        if isVarargFunction then
            retrieveExpression = Ast.FunctionCallExpression(Ast.VariableExpression(self.createVarargClosureVar), {
                Ast.NumberExpression(block.id),
                Ast.TableConstructorExpression(upvalueExpressions),
                self:env()
            });
        else
            local var = self:getCreateClosureVar(#node.args + math.random(0, 5));
            retrieveExpression = Ast.FunctionCallExpression(Ast.VariableExpression(var), {
                Ast.NumberExpression(block.id),
                Ast.TableConstructorExpression(upvalueExpressions),
                self:env()
            });
        end

        self:addStatement(self:setRegister(retReg, retrieveExpression), {retReg}, usedRegs, false);
        return retReg;
    end

    function Compiler:compileBlock(block, funcDepth)
        for i, stat in ipairs(block.statements) do
            self:compileStatement(stat, funcDepth);
        end
        for id, name in ipairs(block.scope.variables) do
            local varReg = self:getVarRegister(block.scope, id, funcDepth, nil);
            if self:isUpvalue(block.scope, id) then
                self:addStatement(self:setRegister(varReg, Ast.FunctionCallExpression(Ast.VariableExpression(self.freeUpvalueFunc), {
                    self:register(varReg)
                })), {varReg}, {varReg}, false);
            else
                self:addStatement(self:setRegister(varReg, Ast.NilExpression()), {varReg}, {}, false);
            end
            self:freeRegister(varReg, true);
        end
    end
end

`,"prometheus-src/prometheus/cff/compiler.lua":`-- This Script is Part of the Prometheus Obfuscator by levno-710
--
-- compiler.lua
--
-- This Script is the main compiler module.

local Ast = require("prometheus.ast");
local analyzeBindings = require("prometheus.bindinganalysis");
local util = require("prometheus.util");

local lookupify = util.lookupify;
local AstKind = Ast.AstKind;

local unpack = unpack or table.unpack;

local blockModule = require("prometheus.cff.block");
local registerModule = require("prometheus.cff.register");
local upvalueModule = require("prometheus.cff.upvalue");
local emitModule = require("prometheus.cff.emit");
local compileCoreModule = require("prometheus.cff.compile_core");

local Compiler = {};

function Compiler:new()
    local compiler = {
        blocks = {};
        registers = {};
        activeBlock = nil;
        registersForVar = {};
        usedRegisters = 0;
        maxUsedRegister = 0;
        registerVars = {};

        VAR_REGISTER = newproxy(false);
        RETURN_ALL = newproxy(false);
        POS_REGISTER = newproxy(false);
        RETURN_REGISTER = newproxy(false);
        UPVALUE = newproxy(false);

        BIN_OPS = lookupify{
            AstKind.LessThanExpression,
            AstKind.GreaterThanExpression,
            AstKind.LessThanOrEqualsExpression,
            AstKind.GreaterThanOrEqualsExpression,
            AstKind.NotEqualsExpression,
            AstKind.EqualsExpression,
            AstKind.StrCatExpression,
            AstKind.AddExpression,
            AstKind.SubExpression,
            AstKind.MulExpression,
            AstKind.DivExpression,
            AstKind.ModExpression,
            AstKind.PowExpression,
        };
    };

    setmetatable(compiler, self);
    self.__index = self;

    return compiler;
end

blockModule(Compiler);
registerModule(Compiler);
upvalueModule(Compiler);
emitModule(Compiler);
compileCoreModule(Compiler);
require("prometheus.cff.native")(Compiler);

function Compiler:pushRegisterUsageInfo()
    table.insert(self.registerUsageStack, {
        usedRegisters = self.usedRegisters;
        registers = self.registers;
    });
    self.usedRegisters = 0;
    self.registers = {};
end

function Compiler:popRegisterUsageInfo()
    local info = table.remove(self.registerUsageStack);
    self.usedRegisters = info.usedRegisters;
    self.registers = info.registers;
end

function Compiler:compile(ast)
    analyzeBindings(ast);
    self.blocks = {};
    self.registers = {};
    self.activeBlock = nil;
    self.registersForVar = {};
    self.scopeFunctionDepths = {};
    self.maxUsedRegister = 0;
    self.usedRegisters = 0;
    self.registerVars = {};
    self.usedBlockIds = {};

    self.upvalVars = {};
    self.registerUsageStack = {};

    self.upvalsProxyLenReturn = math.random(-2^22, 2^22);

    local getfenvVar, setfenvVar = "getfenv", "setfenv";
    local tableVar, unpackVar, envVar = "table", "unpack", "_ENV";
    local newproxyVar, setmetatableVar, getmetatableVar = "newproxy", "setmetatable", "getmetatable";
    local selectVar, tonumberVar, errorVar = "select", "tonumber", "error";
    self.envVar = Ast.LocalSymbol();
    self.getfenvVar = Ast.LocalSymbol();
    self.setfenvVar = Ast.LocalSymbol();
    self.callFunctionVar = Ast.LocalSymbol();
    self.containerFuncVar = Ast.LocalSymbol();
    self.unpackVar = Ast.LocalSymbol();
    self.packVar = Ast.LocalSymbol();
    self.unpackPackedVar = Ast.LocalSymbol();
    self.newproxyVar = Ast.LocalSymbol();
    self.setmetatableVar = Ast.LocalSymbol();
    self.getmetatableVar = Ast.LocalSymbol();
    self.selectVar = Ast.LocalSymbol();
    self.tonumberVar = Ast.LocalSymbol();
    self.errorVar = Ast.LocalSymbol();

    local argVar = Ast.LocalSymbol();


    self.posVar = Ast.LocalSymbol();
    self.argsVar = Ast.LocalSymbol();
    self.currentUpvaluesVar = Ast.LocalSymbol();
    self.detectGcCollectVar = Ast.LocalSymbol();
    self.currentEnvVar = Ast.LocalSymbol();
    self.returnVar = Ast.LocalSymbol();

    self.upvaluesTable = Ast.LocalSymbol();
    self.upvaluesReferenceCountsTable = Ast.LocalSymbol();
    self.allocUpvalFunction = Ast.LocalSymbol();
    self.currentUpvalId = Ast.LocalSymbol();

    self.upvaluesProxyFunctionVar = Ast.LocalSymbol();
    self.upvaluesGcFunctionVar = Ast.LocalSymbol();
    self.freeUpvalueFunc = Ast.LocalSymbol();

    self.createClosureVars = {};
    self.createVarargClosureVar = Ast.LocalSymbol();

    local createClosurePosArg = Ast.LocalSymbol();
    local createClosureUpvalsArg = Ast.LocalSymbol();
    local createClosureEnvArg = Ast.LocalSymbol();
    local createClosureProxyObject = Ast.LocalSymbol();
    local createClosureFuncVar = Ast.LocalSymbol();

    local upvalEntries = {};
    local upvalueIds = {};
    self.getUpvalueId = function(self, scope, id)
        local expression;
        local scopeFuncDepth = self.scopeFunctionDepths[scope];
        if(scopeFuncDepth == 0) then
            if upvalueIds[id] then
                return upvalueIds[id];
            end
            expression = Ast.FunctionCallExpression(Ast.VariableExpression(self.allocUpvalFunction), {});
        else
            require("logger"):error("Unresolved Upvalue, this error should not occur!");
        end
        table.insert(upvalEntries, Ast.TableEntry(expression));
        local uid = #upvalEntries;
        upvalueIds[id] = uid;
        return uid;
    end


    self:compileTopNode(ast);

    -- VM value lists carry an explicit count: table length loses trailing nils.


    local unpackValuesVar = Ast.LocalSymbol();

    -- Keep query handling shared: a per-call closure would capture the frame's
    -- environment and delay its collection when another Cff pass wraps it.
    -- Ordinary functions receive exactly their original arguments via a tail call.

    local callFuncVar, callEnvVar = Ast.LocalSymbol(), Ast.LocalSymbol();

    local levelVar = Ast.LocalSymbol();

    local functionNodeAssignments = {
        {
            var = Ast.AssignmentVariable(self.callFunctionVar),
            val = Ast.FunctionLiteralExpression({
                Ast.VariableExpression(callFuncVar),
                Ast.VariableExpression(callEnvVar),
                Ast.VarargExpression(),
            }, Ast.Block({
                Ast.IfStatement(Ast.AndExpression(
                    Ast.VariableExpression(self.getfenvVar),
                    Ast.EqualsExpression(Ast.VariableExpression(callFuncVar), Ast.VariableExpression(self.getfenvVar))
                ), Ast.Block({
                    Ast.LocalVariableDeclaration({levelVar}, {Ast.VarargExpression()}),
                    Ast.IfStatement(Ast.OrExpression(
                        Ast.EqualsExpression(Ast.VariableExpression(levelVar), Ast.NilExpression()),
                        Ast.EqualsExpression(Ast.VariableExpression(levelVar), Ast.NumberExpression(1))
                    ), Ast.Block({Ast.ReturnStatement{Ast.VariableExpression(callEnvVar)}}), {}),
                }), {}),
                Ast.ReturnStatement{Ast.FunctionCallExpression(Ast.VariableExpression(callFuncVar), {Ast.VarargExpression()})},
            })),
        },
        {
            var = Ast.AssignmentVariable(self.packVar),
            val = Ast.FunctionLiteralExpression({Ast.VarargExpression()}, Ast.Block({
                Ast.ReturnStatement{Ast.TableConstructorExpression({
                    Ast.KeyedTableEntry(Ast.StringExpression("n"), Ast.FunctionCallExpression(
                        Ast.VariableExpression(self.selectVar),
                        {Ast.StringExpression("#"), Ast.VarargExpression()})),
                    Ast.TableEntry(Ast.VarargExpression()),
                })},
            })),
        }, {
            var = Ast.AssignmentVariable(self.unpackPackedVar),
            val = Ast.FunctionLiteralExpression({Ast.VariableExpression(unpackValuesVar)}, Ast.Block({
                Ast.ReturnStatement{Ast.FunctionCallExpression(Ast.VariableExpression(self.unpackVar), {
                    Ast.VariableExpression(unpackValuesVar),
                    Ast.NumberExpression(1),
                    Ast.IndexExpression(Ast.VariableExpression(unpackValuesVar), Ast.StringExpression("n")),
                })},
            })),
        },
        {
            var = Ast.AssignmentVariable(self.containerFuncVar),
            val = Ast.FunctionLiteralExpression({
                Ast.VariableExpression(self.posVar),
                Ast.VariableExpression(self.argsVar),
                Ast.VariableExpression(self.currentUpvaluesVar),
                Ast.VariableExpression(self.detectGcCollectVar),
                Ast.VariableExpression(self.currentEnvVar)
            }, self:emitContainerFuncBody());
        }, {
            var = Ast.AssignmentVariable(self.createVarargClosureVar),
            val = Ast.FunctionLiteralExpression({
                    Ast.VariableExpression(createClosurePosArg),
                    Ast.VariableExpression(createClosureUpvalsArg),
                    Ast.VariableExpression(createClosureEnvArg),
                },
                Ast.Block({
                    Ast.LocalVariableDeclaration({
                        createClosureProxyObject
                    }, {
                        Ast.FunctionCallExpression(Ast.VariableExpression(self.upvaluesProxyFunctionVar), {
                            Ast.VariableExpression(createClosureUpvalsArg)
                        })
                    }),
                    Ast.LocalVariableDeclaration({createClosureFuncVar},{
                        Ast.FunctionLiteralExpression({
                            Ast.VarargExpression();
                        },
                        Ast.Block({
                            Ast.ReturnStatement{
                                Ast.FunctionCallExpression(Ast.VariableExpression(self.containerFuncVar), {
                                    Ast.VariableExpression(createClosurePosArg),
                                    self:pack({Ast.VarargExpression()}),
                                    Ast.VariableExpression(createClosureUpvalsArg),
                                    Ast.VariableExpression(createClosureProxyObject),
                                    self:closureEnvironment(createClosureEnvArg)
                                })
                            }
                        })
                        );
                    });
                    self:inheritClosureEnvironment(createClosureFuncVar, createClosureEnvArg);
                    Ast.ReturnStatement{Ast.VariableExpression(createClosureFuncVar)};
                })
            );
        }, {
            var = Ast.AssignmentVariable(self.upvaluesTable),
            val = Ast.TableConstructorExpression({}),
        }, {
            var = Ast.AssignmentVariable(self.upvaluesReferenceCountsTable),
            val = Ast.TableConstructorExpression({}),
        }, {
            var = Ast.AssignmentVariable(self.allocUpvalFunction),
            val = self:createAllocUpvalFunction(),
        }, {
            var = Ast.AssignmentVariable(self.currentUpvalId),
            val = Ast.NumberExpression(0),
        }, {
            var = Ast.AssignmentVariable(self.upvaluesProxyFunctionVar),
            val = self:createUpvaluesProxyFunc(),
        }, {
            var = Ast.AssignmentVariable(self.upvaluesGcFunctionVar),
            val = self:createUpvaluesGcFunc(),
        }, {
            var = Ast.AssignmentVariable(self.freeUpvalueFunc),
            val = self:createFreeUpvalueFunc(),
        },
    }

    local tbl = {
        Ast.VariableExpression(self.callFunctionVar),
        Ast.VariableExpression(self.packVar),
        Ast.VariableExpression(self.unpackPackedVar),
        Ast.VariableExpression(self.containerFuncVar),
        Ast.VariableExpression(self.createVarargClosureVar),
        Ast.VariableExpression(self.upvaluesTable),
        Ast.VariableExpression(self.upvaluesReferenceCountsTable),
        Ast.VariableExpression(self.allocUpvalFunction),
        Ast.VariableExpression(self.currentUpvalId),
        Ast.VariableExpression(self.upvaluesProxyFunctionVar),
        Ast.VariableExpression(self.upvaluesGcFunctionVar),
        Ast.VariableExpression(self.freeUpvalueFunc),
    };
    for i, entry in pairs(self.createClosureVars) do
        table.insert(functionNodeAssignments, entry);
        table.insert(tbl, Ast.VariableExpression(entry.symbol));
    end

    util.shuffle(functionNodeAssignments);
    local assignmentStatLhs, assignmentStatRhs = {}, {};
    for i, v in ipairs(functionNodeAssignments) do
        assignmentStatLhs[i] = v.var;
        assignmentStatRhs[i] = v.val;
    end


    -- NEW: Position Shuffler
    local ids = util.shuffle({1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11});

    local items = {
        Ast.VariableExpression(self.envVar),
        Ast.VariableExpression(self.unpackVar),
        Ast.VariableExpression(self.newproxyVar),
        Ast.VariableExpression(self.setmetatableVar),
        Ast.VariableExpression(self.getmetatableVar),
        Ast.VariableExpression(self.selectVar),
        Ast.VariableExpression(argVar),
        Ast.VariableExpression(self.tonumberVar),
        Ast.VariableExpression(self.errorVar),
        Ast.VariableExpression(self.getfenvVar),
        Ast.VariableExpression(self.setfenvVar),
    }

    local astItems = {
        Ast.OrExpression(Ast.AndExpression(Ast.GlobalVariableExpression(getfenvVar), Ast.FunctionCallExpression(Ast.GlobalVariableExpression(getfenvVar), {})), Ast.GlobalVariableExpression(envVar));
        Ast.OrExpression(Ast.GlobalVariableExpression(unpackVar), Ast.IndexExpression(Ast.GlobalVariableExpression(tableVar), Ast.StringExpression("unpack")));
        Ast.GlobalVariableExpression(newproxyVar);
        Ast.GlobalVariableExpression(setmetatableVar);
        Ast.GlobalVariableExpression(getmetatableVar);
        Ast.GlobalVariableExpression(selectVar);
        Ast.TableConstructorExpression({
            Ast.KeyedTableEntry(Ast.StringExpression("n"), Ast.FunctionCallExpression(
                Ast.GlobalVariableExpression(selectVar), {Ast.StringExpression("#"), Ast.VarargExpression()})),
            Ast.TableEntry(Ast.VarargExpression());
        });
        Ast.GlobalVariableExpression(tonumberVar);
        Ast.GlobalVariableExpression(errorVar);
        Ast.GlobalVariableExpression(getfenvVar);
        Ast.GlobalVariableExpression(setfenvVar);
    }

    local functionNode = Ast.FunctionLiteralExpression({
      items[ids[1]], items[ids[2]], items[ids[3]], items[ids[4]],
      items[ids[5]], items[ids[6]], items[ids[7]], items[ids[8]], items[ids[9]],
      items[ids[10]], items[ids[11]],
      unpack(util.shuffle(tbl))
    }, Ast.Block({
        Ast.AssignmentStatement(assignmentStatLhs, assignmentStatRhs);
        Ast.ReturnStatement{
            Ast.FunctionCallExpression(Ast.FunctionCallExpression(Ast.VariableExpression(self.createVarargClosureVar), {
                    Ast.NumberExpression(self.startBlockId);
                    Ast.TableConstructorExpression(upvalEntries);
                    Ast.VariableExpression(self.envVar);
                }), {Ast.FunctionCallExpression(self:unpack(), {Ast.VariableExpression(argVar)})});
        }
    }));

    return Ast.TopNode(Ast.Block({
        Ast.ReturnStatement{Ast.FunctionCallExpression(functionNode, {
            astItems[ids[1]], astItems[ids[2]], astItems[ids[3]], astItems[ids[4]],
            astItems[ids[5]], astItems[ids[6]], astItems[ids[7]], astItems[ids[8]], astItems[ids[9]],
            astItems[ids[10]], astItems[ids[11]],
        })};
    }));
end

-- Each wrapper reads its own environment at entry, before tail-calling the VM.
-- The VM keeps this table in its call frame so recursion and yields are isolated.
function Compiler:closureEnvironment(inheritedVar)
    return Ast.OrExpression(Ast.AndExpression(
        Ast.VariableExpression(self.getfenvVar),
        Ast.FunctionCallExpression(Ast.VariableExpression(self.getfenvVar), {Ast.NumberExpression(1)})
    ), Ast.VariableExpression(inheritedVar));
end

function Compiler:inheritClosureEnvironment(funcVar, envVar)

    return Ast.IfStatement(Ast.VariableExpression(self.setfenvVar), Ast.Block({
        Ast.FunctionCallStatement(Ast.VariableExpression(self.setfenvVar), {
            Ast.VariableExpression(funcVar),
            Ast.VariableExpression(envVar),
        }),
    }), {});
end

function Compiler:getCreateClosureVar(argCount)
    if not self.createClosureVars[argCount] then
        local var = Ast.LocalSymbol();


        local createClosurePosArg = Ast.LocalSymbol();
        local createClosureUpvalsArg = Ast.LocalSymbol();
        local createClosureEnvArg = Ast.LocalSymbol();
        local createClosureProxyObject = Ast.LocalSymbol();
        local createClosureFuncVar = Ast.LocalSymbol();


        local  argsTb, argsTb2 = {}, {};
        for i = 1, argCount do
            local arg = Ast.LocalSymbol()
            argsTb[i] = Ast.VariableExpression(arg);
            argsTb2[i] = Ast.TableEntry(Ast.VariableExpression(arg));
        end
        table.insert(argsTb2, Ast.KeyedTableEntry(Ast.StringExpression("n"), Ast.NumberExpression(argCount)));

        local val = Ast.FunctionLiteralExpression({
            Ast.VariableExpression(createClosurePosArg),
            Ast.VariableExpression(createClosureUpvalsArg),
            Ast.VariableExpression(createClosureEnvArg),
        }, Ast.Block({
                Ast.LocalVariableDeclaration({
                    createClosureProxyObject
                }, {
                    Ast.FunctionCallExpression(Ast.VariableExpression(self.upvaluesProxyFunctionVar), {
                        Ast.VariableExpression(createClosureUpvalsArg)
                    })
                }),
                Ast.LocalVariableDeclaration({createClosureFuncVar},{
                    Ast.FunctionLiteralExpression(argsTb,
                    Ast.Block({
                        Ast.ReturnStatement{
                            Ast.FunctionCallExpression(Ast.VariableExpression(self.containerFuncVar), {
                                Ast.VariableExpression(createClosurePosArg),
                                Ast.TableConstructorExpression(argsTb2),
                                Ast.VariableExpression(createClosureUpvalsArg),
                                Ast.VariableExpression(createClosureProxyObject),
                                self:closureEnvironment(createClosureEnvArg)
                            })
                        }
                    })
                    );
                });
                self:inheritClosureEnvironment(createClosureFuncVar, createClosureEnvArg);
                Ast.ReturnStatement{Ast.VariableExpression(createClosureFuncVar)}
            })
        );
        self.createClosureVars[argCount] = {
            symbol = var,
            var = Ast.AssignmentVariable(var),
            val = val,
        }
    end


    local var = self.createClosureVars[argCount].symbol;
    return var;
end

return Compiler;
`,"prometheus-src/prometheus/cff/constants.lua":`-- This Script is Part of the Prometheus Obfuscator by levno-710
--
-- constants.lua
--
-- This Script contains the compiler constants shared across modules.

return {
    MAX_REGS = 100,
    MAX_REGS_MUL = 0,
}

`,"prometheus-src/prometheus/cff/emit.lua":`-- This Script is Part of the Prometheus Obfuscator by levno-710
--
-- emit.lua
--
-- This Script contains the container function body emission for the compiler.

local Ast = require("prometheus.ast");
local util = require("prometheus.util");
local constants = require("prometheus.cff.constants");
local AstKind = Ast.AstKind;

local MAX_REGS = constants.MAX_REGS;

return function(Compiler)
    local function hasAnyEntries(tbl)
        return type(tbl) == "table" and next(tbl) ~= nil;
    end

    local function unionLookupTables(a, b)
        local out = {};
        for k, v in pairs(a or {}) do
            out[k] = v;
        end
        for k, v in pairs(b or {}) do
            out[k] = v;
        end
        return out;
    end

    local function assignmentSlotCost(statement)
        local slots = #statement.rhs;
        for _, target in ipairs(statement.lhs) do
            -- Indexed targets may keep both their table and key in temporary
            -- slots while Lua evaluates the right-hand values.
            if target.kind == AstKind.AssignmentIndexing then
                slots = slots + 2;
            end
        end
        return slots;
    end

    local function canMergeParallelAssignmentStatements(statA, statB)
        if type(statA) ~= "table" or type(statB) ~= "table" then
            return false;
        end
        if statA.isCleanup ~= statB.isCleanup then
            return false;
        end

        if statA.usesUpvals or statB.usesUpvals then
            return false;
        end

        local a = statA.statement;
        local b = statB.statement;
        if type(a) ~= "table" or type(b) ~= "table" then
            return false;
        end
        if a.kind ~= AstKind.AssignmentStatement or b.kind ~= AstKind.AssignmentStatement then
            return false;
        end

        if type(a.lhs) ~= "table" or type(a.rhs) ~= "table" or type(b.lhs) ~= "table" or type(b.rhs) ~= "table" then
            return false;
        end
        -- Leave room for the container's locals by keeping merged assignments'
        -- temporary slot cost within the register budget, including spill targets.
        if assignmentSlotCost(a) + assignmentSlotCost(b) > MAX_REGS then
            return false;
        end

        if #a.lhs ~= #a.rhs or #b.lhs ~= #b.rhs then
            return false;
        end

        -- Avoid merging vararg/call assignments because they can affect multi-return behavior.
        local function hasUnsafeRhs(rhsList)
            for _, rhsExpr in ipairs(rhsList) do
                if type(rhsExpr) ~= "table" then
                    return true;
                end
                local kind = rhsExpr.kind;
                if kind == AstKind.FunctionCallExpression or kind == AstKind.PassSelfFunctionCallExpression or kind == AstKind.VarargExpression then
                    return true;
                end
            end
            return false;
        end
        if hasUnsafeRhs(a.rhs) or hasUnsafeRhs(b.rhs) then
            return false;
        end

        local aReads = type(statA.reads) == "table" and statA.reads or {};
        local aWrites = type(statA.writes) == "table" and statA.writes or {};
        local bReads = type(statB.reads) == "table" and statB.reads or {};
        local bWrites = type(statB.writes) == "table" and statB.writes or {};

        -- Allow merging even if one statement has no writes (e.g., x = o(x) style assignments)
        -- Only require that at least one of them has writes
        if not hasAnyEntries(aWrites) and not hasAnyEntries(bWrites) then
            return false;
        end

        for r in pairs(aReads) do
            if bWrites[r] then
                return false;
            end
        end

        for r, b in pairs(aWrites) do
            if bWrites[r] or bReads[r] then
                return false;
            end
        end

        return true;
    end

    local function mergeParallelAssignmentStatements(statA, statB)
        local lhs = {};
        local rhs = {};
        local aLhs, bLhs = statA.statement.lhs, statB.statement.lhs;
        local aRhs, bRhs = statA.statement.rhs, statB.statement.rhs;
        for i = 1, #aLhs do lhs[i] = aLhs[i]; end
        for i = 1, #bLhs do lhs[#aLhs + i] = bLhs[i]; end
        for i = 1, #aRhs do rhs[i] = aRhs[i]; end
        for i = 1, #bRhs do rhs[#aRhs + i] = bRhs[i]; end

        return {
            statement = Ast.AssignmentStatement(lhs, rhs),
            writes = unionLookupTables(statA.writes, statB.writes),
            reads = unionLookupTables(statA.reads, statB.reads),
            usesUpvals = statA.usesUpvals or statB.usesUpvals,
            isCleanup = statA.isCleanup,
        };
    end

    local function mergeAdjacentParallelAssignments(blockstats)
        local merged = {};
        local i = 1;
        while i <= #blockstats do
            local stat = blockstats[i];
            i = i + 1;

            while i <= #blockstats and canMergeParallelAssignmentStatements(stat, blockstats[i]) do
                stat = mergeParallelAssignmentStatements(stat, blockstats[i]);
                i = i + 1;
            end

            table.insert(merged, stat);
        end
        return merged;
    end

    function Compiler:emitContainerFuncBody()
        local blocks = {};

        util.shuffle(self.blocks);

        for i, block in ipairs(self.blocks) do
            local id = block.id;
            local blockstats = block.statements;

            for i = 2, #blockstats do
                local stat = blockstats[i];
                local reads = stat.reads;
                local writes = stat.writes;
                local maxShift = 0;
                local usesUpvals = stat.usesUpvals;
                for shift = 1, i - 1 do
                    local stat2 = blockstats[i - shift];

                    -- Collection may happen during any operation, including allocation.
                    if stat.isCleanup or stat2.isCleanup then
                        break;
                    end

                    if stat2.usesUpvals and usesUpvals then
                        break;
                    end

                    local reads2 = stat2.reads;
                    local writes2 = stat2.writes;
                    local f = true;

                    for r, b in pairs(reads2) do
                        if(writes[r]) then
                            f = false;
                            break;
                        end
                    end

                    if f then
                        for r, b in pairs(writes2) do
                            if(writes[r]) then
                                f = false;
                                break;
                            end
                            if(reads[r]) then
                                f = false;
                                break;
                            end
                        end
                    end

                    if not f then
                        break
                    end

                    maxShift = shift;
                end

                local shift = math.random(0, maxShift);
                for j = 1, shift do
                    blockstats[i - j], blockstats[i - j + 1] = blockstats[i - j + 1], blockstats[i - j];
                end
            end

            local mergedBlockStats = mergeAdjacentParallelAssignments(blockstats);
            for _=1, 7 do
                mergedBlockStats = mergeAdjacentParallelAssignments(mergedBlockStats);
            end

            blockstats = {};
            for _, stat in ipairs(mergedBlockStats) do
                table.insert(blockstats, stat.statement);
            end

            local block = { id = id, index = i, block = Ast.Block(blockstats) }
            -- Block IDs can overlap list indices; keep this table an ordered list.
            table.insert(blocks, block);
        end

        table.sort(blocks, function(a, b) return a.id < b.id end);

        -- Build a strict threshold condition between adjacent block IDs.
        -- Using a midpoint avoids exact-id comparisons while preserving dispatch.
        local function buildBlockThresholdCondition(leftId, rightId, useAndOr)
            -- Keep the midpoint strictly between the IDs, even when consecutive.
            local bound = (leftId + rightId) / 2;
            local posExpr = self:pos();
            local boundExpr = Ast.NumberExpression(bound);

            if useAndOr then
                -- Kept for compatibility with caller variations.
                return Ast.LessThanExpression(posExpr, boundExpr);
            else
                local variant = math.random(1, 2);
                if variant == 1 then
                    return Ast.LessThanExpression(posExpr, boundExpr);
                else
                    return Ast.GreaterThanExpression(boundExpr, posExpr);
                end
            end
        end

        -- Build an elseif chain for a range of blocks
        local function buildElseifChain(tb, l, r)
            -- Handle invalid range by returning an empty block
            if r < l then
                return Ast.Block({});
            end

            local len = r - l + 1;

            -- For single block
            if len == 1 then
                return tb[l].block;
            end

            -- For small ranges, use elseif chain
            if len <= 4 then
                local elseifs = {};

                -- First block uses the first midpoint threshold
                local firstCondition = buildBlockThresholdCondition(tb[l].id, tb[l + 1].id, false);
                local firstBlock = tb[l].block;

                -- Middle blocks use their upper midpoint threshold
                for i = l + 1, r - 1 do
                    local condition = buildBlockThresholdCondition(tb[i].id, tb[i + 1].id, false);
                    table.insert(elseifs, {
                        condition = condition,
                        body = tb[i].block
                    });
                end

                -- Last block becomes else
                local elseBlock = tb[r].block;

                return Ast.Block({
                    Ast.IfStatement(firstCondition, firstBlock, elseifs, elseBlock);
                });
            end

            -- For larger ranges, use binary split with and/or chaining
            local mid = l + math.ceil(len / 2);
            local leftMaxId = tb[mid - 1].id;
            local rightMinId = tb[mid].id;
            -- IDs are 24-bit integers, so half-integer midpoints are exact.
            -- Rounding would make consecutive IDs share a dispatch branch.
            local bound = (leftMaxId + rightMinId) / 2;
            local lBlock = buildElseifChain(tb, l, mid - 1);
            local rBlock = buildElseifChain(tb, mid, r);

            -- Randomly choose between different condition styles
            local condStyle = math.random(1, 3);
            local condition;
            local trueBlock, falseBlock;

            if condStyle == 1 then
                -- pos < bound
                condition = Ast.LessThanExpression(self:pos(), Ast.NumberExpression(bound));
                trueBlock, falseBlock = lBlock, rBlock;
            elseif condStyle == 2 then
                -- bound > pos
                condition = Ast.GreaterThanExpression(Ast.NumberExpression(bound), self:pos());
                trueBlock, falseBlock = lBlock, rBlock;
            else
                -- Equivalent split using strict > with branches reversed.
                condition = Ast.GreaterThanExpression(self:pos(), Ast.NumberExpression(bound));
                trueBlock, falseBlock = rBlock, lBlock;
            end

            return Ast.Block({
                Ast.IfStatement(condition, trueBlock, {}, falseBlock);
            });
        end

        local whileBody = buildElseifChain(blocks, 1, #blocks);



        local declarations = {
            self.returnVar,
        }

        for i, var in pairs(self.registerVars) do
            if(i ~= MAX_REGS) then
                table.insert(declarations, var);
            end
        end

        local stats = {}

        if self.maxUsedRegister >= MAX_REGS then
            table.insert(stats, Ast.LocalVariableDeclaration({self.registerVars[MAX_REGS]}, {Ast.TableConstructorExpression({})}));
        end

        table.insert(stats, Ast.LocalVariableDeclaration(util.shuffle(declarations), {}));

        table.insert(stats, Ast.WhileStatement(whileBody, Ast.VariableExpression(self.posVar)));


        table.insert(stats, Ast.AssignmentStatement({
            Ast.AssignmentVariable(self.posVar)
        }, {
            Ast.LenExpression(Ast.VariableExpression(self.detectGcCollectVar))
        }));

        table.insert(stats, Ast.ReturnStatement{
            Ast.FunctionCallExpression(self:unpack(), {
                Ast.VariableExpression(self.returnVar)
            });
        });

        return Ast.Block(stats);
    end
end
`,"prometheus-src/prometheus/cff/expressions.lua":`-- This Script is Part of the Prometheus Obfuscator by levno-710
--
-- expressions.lua
--
-- This Script contains the expression handlers: exports handler table keyed by AstKind.

local Ast = require("prometheus.ast");
local AstKind = Ast.AstKind;

local handlers = {};
local expressions = "prometheus.cff.expressions.";
local function requireExpression(name)
    return require(expressions .. name);
end
handlers[AstKind.StringExpression] = requireExpression("string");
handlers[AstKind.NumberExpression] = requireExpression("number");
handlers[AstKind.BooleanExpression] = requireExpression("boolean");
handlers[AstKind.NilExpression] = requireExpression("nil");
handlers[AstKind.VariableExpression] = requireExpression("variable");
handlers[AstKind.GlobalVariableExpression] = requireExpression("variable");
handlers[AstKind.FunctionCallExpression] = requireExpression("function_call");
handlers[AstKind.PassSelfFunctionCallExpression] = requireExpression("pass_self_function_call");
handlers[AstKind.IndexExpression] = requireExpression("index");
handlers[AstKind.NotExpression] = requireExpression("not");
handlers[AstKind.NegateExpression] = requireExpression("negate");
handlers[AstKind.LenExpression] = requireExpression("len");
handlers[AstKind.OrExpression] = requireExpression("or");
handlers[AstKind.AndExpression] = requireExpression("and");
handlers[AstKind.TableConstructorExpression] = requireExpression("table_constructor");
handlers[AstKind.FunctionLiteralExpression] = requireExpression("function_literal");
handlers[AstKind.VarargExpression] = requireExpression("vararg");
handlers[AstKind.IfElseExpression] = requireExpression("if_else");

-- Binary ops share one handler
local binaryHandler = requireExpression("binary");
handlers[AstKind.LessThanExpression] = binaryHandler;
handlers[AstKind.GreaterThanExpression] = binaryHandler;
handlers[AstKind.LessThanOrEqualsExpression] = binaryHandler;
handlers[AstKind.GreaterThanOrEqualsExpression] = binaryHandler;
handlers[AstKind.NotEqualsExpression] = binaryHandler;
handlers[AstKind.EqualsExpression] = binaryHandler;
handlers[AstKind.StrCatExpression] = binaryHandler;
handlers[AstKind.AddExpression] = binaryHandler;
handlers[AstKind.SubExpression] = binaryHandler;
handlers[AstKind.MulExpression] = binaryHandler;
handlers[AstKind.DivExpression] = binaryHandler;
handlers[AstKind.ModExpression] = binaryHandler;
handlers[AstKind.PowExpression] = binaryHandler;

return handlers;

`,"prometheus-src/prometheus/cff/expressions/and.lua":`-- This Script is Part of the Prometheus Obfuscator by levno-710
--
-- and.lua
--
-- This Script contains the expression handler for the AndExpression.

local Ast = require("prometheus.ast");

return function(self, expression, funcDepth, numReturns)
    local posState = self.registers[self.POS_REGISTER];
    self.registers[self.POS_REGISTER] = self.VAR_REGISTER;

    local regs = {};
    for i = 1, numReturns do
        regs[i] = self:allocRegister();
        if i ~= 1 then
            self:addStatement(self:setRegister(regs[i], Ast.NilExpression()), {regs[i]}, {}, false);
        end
    end

    local resReg = regs[1];
    local tmpReg;

    if posState then
        tmpReg = self:allocRegister(false);
        self:addStatement(self:copyRegisters({tmpReg}, {self.POS_REGISTER}), {tmpReg}, {self.POS_REGISTER}, false);
    end

    local lhsReg = self:compileExpression(expression.lhs, funcDepth, 1)[1];
    if expression.rhs.isConstant then
        local rhsReg = self:compileExpression(expression.rhs, funcDepth, 1)[1];
        self:addStatement(self:setRegister(resReg, Ast.AndExpression(self:register(lhsReg), self:register(rhsReg))), {resReg}, {lhsReg, rhsReg}, false);
        if tmpReg then
            self:freeRegister(tmpReg, false);
        end
        self:freeRegister(lhsReg, false);
        self:freeRegister(rhsReg, false);
        return regs;
    end

    local block1, block2 = self:createBlock(), self:createBlock();
    self:addStatement(self:copyRegisters({resReg}, {lhsReg}), {resReg}, {lhsReg}, false);
    self:addStatement(self:setRegister(self.POS_REGISTER, Ast.OrExpression(Ast.AndExpression(self:register(lhsReg), Ast.NumberExpression(block1.id)), Ast.NumberExpression(block2.id))), {self.POS_REGISTER}, {lhsReg}, false);
    self:freeRegister(lhsReg, false);
    do
        self:setActiveBlock(block1);
        local rhsReg = self:compileExpression(expression.rhs, funcDepth, 1)[1];
        self:addStatement(self:copyRegisters({resReg}, {rhsReg}), {resReg}, {rhsReg}, false);
        self:freeRegister(rhsReg, false);

        self:addStatement(self:setRegister(self.POS_REGISTER, Ast.NumberExpression(block2.id)), {self.POS_REGISTER}, {}, false);
    end

    self.registers[self.POS_REGISTER] = posState;

    self:setActiveBlock(block2);
    if tmpReg then
        self:addStatement(self:copyRegisters({self.POS_REGISTER}, {tmpReg}), {self.POS_REGISTER}, {tmpReg}, false);
        self:freeRegister(tmpReg, false);
    end

    return regs;
end;
`,"prometheus-src/prometheus/cff/expressions/binary.lua":`-- This Script is Part of the Prometheus Obfuscator by levno-710
--
-- binary.lua
--
-- This Script contains the expression handler for the Binary operations (Add, Sub, Mul, Div, etc.).

local Ast = require("prometheus.ast");

return function(self, expression, funcDepth, numReturns)
    local regs = {};
    for i = 1, numReturns do
        regs[i] = self:allocRegister();
        if i == 1 then
            local lhsReg = self:compileExpression(expression.lhs, funcDepth, 1)[1];
            local rhsReg = self:compileExpression(expression.rhs, funcDepth, 1)[1];

            local binaryExpr = Ast[expression.kind](self:register(lhsReg), self:register(rhsReg));
            self:addStatement(self:setRegister(regs[i], binaryExpr), {regs[i]}, {lhsReg, rhsReg}, true);
            self:freeRegister(rhsReg, false);
            self:freeRegister(lhsReg, false);
        else
            self:addStatement(self:setRegister(regs[i], Ast.NilExpression()), {regs[i]}, {}, false);
        end
    end
    return regs;
end;
`,"prometheus-src/prometheus/cff/expressions/boolean.lua":`-- This Script is Part of the Prometheus Obfuscator by levno-710
--
-- boolean.lua
--
-- This Script contains the expression handler for the BooleanExpression.

local Ast = require("prometheus.ast");

local expressionEvaluators = {
    [Ast.GreaterThanExpression] = function(left, right)
        return left > right
    end,
    [Ast.LessThanExpression] = function(left, right)
        return left < right
    end,
    [Ast.GreaterThanOrEqualsExpression] = function(left, right)
        return left >= right
    end,
    [Ast.LessThanOrEqualsExpression] = function(left, right)
        return left <= right
    end,
    [Ast.NotEqualsExpression] = function(left, right)
        return left ~= right
    end,
}

local function createRandomASTCFlowExpression(resultBool)
    local expTB = {
        Ast.GreaterThanExpression,
        Ast.LessThanExpression,
        Ast.GreaterThanOrEqualsExpression,
        Ast.LessThanOrEqualsExpression,
        Ast.NotEqualsExpression
    }

    local leftInt, rightInt, boolResult, randomExp
    repeat
        randomExp = expTB[math.random(1, #expTB)]
        leftInt = Ast.NumberExpression(math.random(1, 2^24))
        rightInt = Ast.NumberExpression(math.random(1, 2^24))
        boolResult = expressionEvaluators[randomExp](leftInt.value, rightInt.value)
    until boolResult == resultBool

    return randomExp(leftInt, rightInt, false)
end

return function(self, expression, _, numReturns)
    local regs = {};
    for i = 1, numReturns do
        regs[i] = self:allocRegister();
        if i == 1 then
            self:addStatement(self:setRegister(regs[i], createRandomASTCFlowExpression(expression.value)), {regs[i]}, {}, false);
        else
            self:addStatement(self:setRegister(regs[i], Ast.NilExpression()), {regs[i]}, {}, false);
        end
    end
    return regs;
end;
`,"prometheus-src/prometheus/cff/expressions/function_call.lua":`-- This Script is Part of the Prometheus Obfuscator by levno-710
--
-- function_call.lua
--
-- This Script contains the expression handler for the FunctionCallExpression.

local Ast = require("prometheus.ast");
local AstKind = Ast.AstKind;

return function(self, expression, funcDepth, numReturns)
    local baseReg = self:compileExpression(expression.base, funcDepth, 1)[1];

    local retRegs = {};
    local returnAll = numReturns == self.RETURN_ALL;
    if returnAll then
        retRegs[1] = self:allocRegister(false);
    else
        for i = 1, numReturns do
            retRegs[i] = self:allocRegister(false);
        end
    end

    local regs = {};
    local args = {};
    for i, expr in ipairs(expression.args) do
        if i == #expression.args and (expr.kind == AstKind.FunctionCallExpression or expr.kind == AstKind.PassSelfFunctionCallExpression or expr.kind == AstKind.VarargExpression) then
            local reg = self:compileExpression(expr, funcDepth, self.RETURN_ALL)[1];
            table.insert(args, Ast.FunctionCallExpression(
                self:unpack(),
                {self:register(reg)}));
            table.insert(regs, reg);
        else
            local reg = self:compileExpression(expr, funcDepth, 1)[1];
            table.insert(args, self:register(reg));
            table.insert(regs, reg);
        end
    end

    if returnAll then
        self:addStatement(self:setRegister(retRegs[1], self:pack({self:functionCall(baseReg, args)})), {retRegs[1]}, {baseReg, unpack(regs)}, true);
    else
        if numReturns > 1 then
            local tmpReg = self:allocRegister(false);

            self:addStatement(self:setRegister(tmpReg, Ast.TableConstructorExpression{Ast.TableEntry(self:functionCall(baseReg, args))}), {tmpReg}, {baseReg, unpack(regs)}, true);


            for i, reg in ipairs(retRegs) do
                self:addStatement(self:setRegister(reg, Ast.IndexExpression(self:register(tmpReg), Ast.NumberExpression(i))), {reg}, {tmpReg}, false);
            end

            self:freeRegister(tmpReg, false);
        else
            self:addStatement(self:setRegister(retRegs[1], self:functionCall(baseReg, args)), {retRegs[1]}, {baseReg, unpack(regs)}, true);
        end
    end

    self:freeRegister(baseReg, false);
    for i, reg in ipairs(regs) do
        self:freeRegister(reg, false);
    end

    return retRegs;
end;
`,"prometheus-src/prometheus/cff/expressions/function_literal.lua":`-- This Script is Part of the Prometheus Obfuscator by levno-710
--
-- function_literal.lua
--
-- This Script contains the expression handler for the FunctionLiteralExpression

local Ast = require("prometheus.ast");

return function(self, expression, funcDepth, numReturns)
    local regs = {};
    for i = 1, numReturns do
        if i == 1 then
            regs[i] = self:compileFunction(expression, funcDepth);
        else
            regs[i] = self:allocRegister();
            self:addStatement(self:setRegister(regs[i], Ast.NilExpression()), {regs[i]}, {}, false);
        end
    end
    return regs;
end;

`,"prometheus-src/prometheus/cff/expressions/if_else.lua":`-- This Script is Part of the Prometheus Obfuscator by levno-710
--
-- if_else.lua
--
-- This Script contains the statement handler for the IfElseExpression.

local Ast = require("prometheus.ast");

return function(self, expression, funcDepth, numReturns)
	local posState = self.registers[self.POS_REGISTER];
    self.registers[self.POS_REGISTER] = self.VAR_REGISTER;

	local regs = {};
	for i = 1, numReturns do
		regs[i] = self:allocRegister();
		if i ~= 1 then
			self:addStatement(self:setRegister(regs[i], Ast.NilExpression()), {regs[i]}, {}, false);
		end
	end

	local resReg = regs[1];
	local tmpReg;

	if posState then
        tmpReg = self:allocRegister(false);
        self:addStatement(self:copyRegisters({tmpReg}, {self.POS_REGISTER}), {tmpReg}, {self.POS_REGISTER}, false);
    end

	local conditionReg = self:compileExpression(expression.condition, funcDepth, 1)[1];

	local finalBlock = self:createBlock();
	local nextBlock = self:createBlock();
	local innerBlock = self:createBlock();

	self:addStatement(self:setRegister(self.POS_REGISTER, Ast.OrExpression(Ast.AndExpression(self:register(conditionReg), Ast.NumberExpression(innerBlock.id)), Ast.NumberExpression(nextBlock.id))), {self.POS_REGISTER}, {conditionReg}, false);
	self:freeRegister(conditionReg, false);

	self:setActiveBlock(innerBlock);
	local trueReg = self:compileExpression(expression.true_value, funcDepth, 1)[1];
	self:addStatement(self:copyRegisters({resReg}, {trueReg}), {resReg}, {trueReg}, false);
	self:addStatement(self:setRegister(self.POS_REGISTER, Ast.NumberExpression(finalBlock.id)), {self.POS_REGISTER}, {}, false);

	for _, elif in ipairs(expression.elseifs) do
		self:setActiveBlock(nextBlock);
		conditionReg = self:compileExpression(elif.condition, funcDepth, 1)[1];
		local elifBlock = self:createBlock();
		nextBlock = self:createBlock();
		self:addStatement(self:setRegister(self.POS_REGISTER, Ast.OrExpression(Ast.AndExpression(self:register(conditionReg), Ast.NumberExpression(elifBlock.id)), Ast.NumberExpression(nextBlock.id))), {self.POS_REGISTER}, {conditionReg}, false);
		self:freeRegister(conditionReg, false);

		self:setActiveBlock(elifBlock);
		local valueReg = self:compileExpression(elif.value, funcDepth, 1)[1];
		self:addStatement(self:copyRegisters({resReg}, {valueReg}), {resReg}, {valueReg}, false);
		self:addStatement(self:setRegister(self.POS_REGISTER, Ast.NumberExpression(finalBlock.id)), {self.POS_REGISTER}, {}, false);
	end

	self:setActiveBlock(nextBlock);
	local falseReg = self:compileExpression(expression.false_value, funcDepth, 1)[1];
	self:addStatement(self:copyRegisters({resReg}, {falseReg}), {resReg}, {falseReg}, false);
	self:addStatement(self:setRegister(self.POS_REGISTER, Ast.NumberExpression(finalBlock.id)), {self.POS_REGISTER}, {}, false);

	self.registers[self.POS_REGISTER] = posState;

	self:setActiveBlock(finalBlock);
    if tmpReg then
        self:addStatement(self:copyRegisters({self.POS_REGISTER}, {tmpReg}), {self.POS_REGISTER}, {tmpReg}, false);
        self:freeRegister(tmpReg, false);
    end

	return regs;
end`,"prometheus-src/prometheus/cff/expressions/index.lua":`-- This Script is Part of the Prometheus Obfuscator by levno-710
--
-- index.lua
--
-- This Script contains the expression handler for the IndexExpression.

local Ast = require("prometheus.ast");

return function(self, expression, funcDepth, numReturns)
    local regs = {};
    for i = 1, numReturns do
        regs[i] = self:allocRegister();
        if i == 1 then
            local baseReg = self:compileExpression(expression.base, funcDepth, 1)[1];
            local indexReg = self:compileExpression(expression.index, funcDepth, 1)[1];



            self:addStatement(self:setRegister(regs[i], Ast.IndexExpression(self:register(baseReg), self:register(indexReg))), {regs[i]}, {baseReg, indexReg}, true);

            self:freeRegister(baseReg, false);
            self:freeRegister(indexReg, false);
        else
            self:addStatement(self:setRegister(regs[i], Ast.NilExpression()), {regs[i]}, {}, false);
        end
    end
    return regs;
end;
`,"prometheus-src/prometheus/cff/expressions/len.lua":`-- This Script is Part of the Prometheus Obfuscator by levno-710
--
-- len.lua
--
-- This Script contains the expression handler for the LenExpression

local Ast = require("prometheus.ast");

return function(self, expression, funcDepth, numReturns)
    local regs = {};
    for i = 1, numReturns do
        regs[i] = self:allocRegister();
        if i == 1 then
            local rhsReg = self:compileExpression(expression.rhs, funcDepth, 1)[1];

            self:addStatement(self:setRegister(regs[i], Ast.LenExpression(self:register(rhsReg))), {regs[i]}, {rhsReg}, true);
            self:freeRegister(rhsReg, false);
        else
            self:addStatement(self:setRegister(regs[i], Ast.NilExpression()), {regs[i]}, {}, false);
        end
    end
    return regs;
end;

`,"prometheus-src/prometheus/cff/expressions/negate.lua":`-- This Script is Part of the Prometheus Obfuscator by levno-710
--
-- negate.lua
--
-- This Script contains the expression handler for the NegateExpression.

local Ast = require("prometheus.ast");

return function(self, expression, funcDepth, numReturns)
    local regs = {};
    for i = 1, numReturns do
        regs[i] = self:allocRegister();
        if i == 1 then
            local rhsReg = self:compileExpression(expression.rhs, funcDepth, 1)[1];

            self:addStatement(self:setRegister(regs[i], Ast.NegateExpression(self:register(rhsReg))), {regs[i]}, {rhsReg}, true);
            self:freeRegister(rhsReg, false);
        else
            self:addStatement(self:setRegister(regs[i], Ast.NilExpression()), {regs[i]}, {}, false);
        end
    end
    return regs;
end;

`,"prometheus-src/prometheus/cff/expressions/nil.lua":`-- This Script is Part of the Prometheus Obfuscator by levno-710
--
-- nil.lua
--
-- This Script contains the expression handler for the NilExpression.

local Ast = require("prometheus.ast");

return function(self, expression, funcDepth, numReturns)
    local regs = {};
    for i = 1, numReturns do
        regs[i] = self:allocRegister();
        self:addStatement(self:setRegister(regs[i], Ast.NilExpression()), {regs[i]}, {}, false);
    end
    return regs;
end;

`,"prometheus-src/prometheus/cff/expressions/not.lua":`-- This Script is Part of the Prometheus Obfuscator by levno-710
--
-- not.lua
--
-- This Script contains the expression handler for the NotExpression.

local Ast = require("prometheus.ast");

return function(self, expression, funcDepth, numReturns)
    local regs = {};
    for i = 1, numReturns do
        regs[i] = self:allocRegister();
        if i == 1 then
            local rhsReg = self:compileExpression(expression.rhs, funcDepth, 1)[1];

            self:addStatement(self:setRegister(regs[i], Ast.NotExpression(self:register(rhsReg))), {regs[i]}, {rhsReg}, false);
            self:freeRegister(rhsReg, false);
        else
            self:addStatement(self:setRegister(regs[i], Ast.NilExpression()), {regs[i]}, {}, false);
        end
    end
    return regs;
end;

`,"prometheus-src/prometheus/cff/expressions/number.lua":`-- This Script is Part of the Prometheus Obfuscator by levno-710
--
-- number.lua
--
-- This Script contains the expression handler for the NumberExpression.

local Ast = require("prometheus.ast");

return function(self, expression, funcDepth, numReturns)
    local regs = {};
    for i = 1, numReturns do
        regs[i] = self:allocRegister();
        if i == 1 then
            if type(expression.value) == "number" and expression.value == 0 and 1 / expression.value < 0 then
                -- Keep negative zero out of native Lua 5.1 numeric constants.
                -- The register read makes this runtime negation distinct from a -0 literal.
                self:addStatement(self:setRegister(regs[i], Ast.NumberExpression(0)), {regs[i]}, {}, false);
                self:addStatement(self:setRegister(regs[i], Ast.NegateExpression(self:register(regs[i]))), {regs[i]}, {regs[i]}, false);
            else
                self:addStatement(self:setRegister(regs[i], Ast.NumberExpression(expression.value)), {regs[i]}, {}, false);
            end
        else
            self:addStatement(self:setRegister(regs[i], Ast.NilExpression()), {regs[i]}, {}, false);
        end
    end
    return regs;
end;

`,"prometheus-src/prometheus/cff/expressions/or.lua":`-- This Script is Part of the Prometheus Obfuscator by levno-710
--
-- or.lua
--
-- This Script contains the expression handler for the OrExpression.

local Ast = require("prometheus.ast");

return function(self, expression, funcDepth, numReturns)
    local posState = self.registers[self.POS_REGISTER];
    self.registers[self.POS_REGISTER] = self.VAR_REGISTER;

    local regs = {};
    for i = 1, numReturns do
        regs[i] = self:allocRegister();
        if i ~= 1 then
            self:addStatement(self:setRegister(regs[i], Ast.NilExpression()), {regs[i]}, {}, false);
        end
    end

    local resReg = regs[1];
    local tmpReg;

    if posState then
        tmpReg = self:allocRegister(false);
        self:addStatement(self:copyRegisters({tmpReg}, {self.POS_REGISTER}), {tmpReg}, {self.POS_REGISTER}, false);
    end

    local lhsReg = self:compileExpression(expression.lhs, funcDepth, 1)[1];
    if expression.rhs.isConstant then
        local rhsReg = self:compileExpression(expression.rhs, funcDepth, 1)[1];
        self:addStatement(self:setRegister(resReg, Ast.OrExpression(self:register(lhsReg), self:register(rhsReg))), {resReg}, {lhsReg, rhsReg}, false);
        if tmpReg then
            self:freeRegister(tmpReg, false);
        end
        self:freeRegister(lhsReg, false);
        self:freeRegister(rhsReg, false);
        return regs;
    end

    local block1, block2 = self:createBlock(), self:createBlock();
    self:addStatement(self:copyRegisters({resReg}, {lhsReg}), {resReg}, {lhsReg}, false);
    self:addStatement(self:setRegister(self.POS_REGISTER, Ast.OrExpression(Ast.AndExpression(self:register(lhsReg), Ast.NumberExpression(block2.id)), Ast.NumberExpression(block1.id))), {self.POS_REGISTER}, {lhsReg}, false);
    self:freeRegister(lhsReg, false);

    do
        self:setActiveBlock(block1);
        local rhsReg = self:compileExpression(expression.rhs, funcDepth, 1)[1];
        self:addStatement(self:copyRegisters({resReg}, {rhsReg}), {resReg}, {rhsReg}, false);
        self:freeRegister(rhsReg, false);


        self:addStatement(self:setRegister(self.POS_REGISTER, Ast.NumberExpression(block2.id)), {self.POS_REGISTER}, {}, false);
    end

    self.registers[self.POS_REGISTER] = posState;

    self:setActiveBlock(block2);
    if tmpReg then
        self:addStatement(self:copyRegisters({self.POS_REGISTER}, {tmpReg}), {self.POS_REGISTER}, {tmpReg}, false);
        self:freeRegister(tmpReg, false);
    end

    return regs;
end;
`,"prometheus-src/prometheus/cff/expressions/pass_self_function_call.lua":`-- This Script is Part of the Prometheus Obfuscator by levno-710
--
-- pass_self_function_call.lua
--
-- This Script contains the expression handler for the PassSelfFunctionCallExpression.

local Ast = require("prometheus.ast");
local AstKind = Ast.AstKind;

return function(self, expression, funcDepth, numReturns)
    local baseReg = self:compileExpression(expression.base, funcDepth, 1)[1];
    local retRegs = {};
    local returnAll = numReturns == self.RETURN_ALL;
    if returnAll then
        retRegs[1] = self:allocRegister(false);
    else
        for i = 1, numReturns do
            retRegs[i] = self:allocRegister(false);
        end
    end

    local args = { self:register(baseReg) };
    local regs = { baseReg };

    for i, expr in ipairs(expression.args) do
        if i == #expression.args and (expr.kind == AstKind.FunctionCallExpression or expr.kind == AstKind.PassSelfFunctionCallExpression or expr.kind == AstKind.VarargExpression) then
            local reg = self:compileExpression(expr, funcDepth, self.RETURN_ALL)[1];
            table.insert(args, Ast.FunctionCallExpression(
                self:unpack(),
                {self:register(reg)}));
            table.insert(regs, reg);
        else
            local reg = self:compileExpression(expr, funcDepth, 1)[1];
            table.insert(args, self:register(reg));
            table.insert(regs, reg);
        end
    end

    if returnAll or numReturns > 1 then
        local tmpReg = self:allocRegister(false);

        self:addStatement(self:setRegister(tmpReg, Ast.StringExpression(expression.passSelfFunctionName)), {tmpReg}, {}, false);
        self:addStatement(self:setRegister(tmpReg, Ast.IndexExpression(self:register(baseReg), self:register(tmpReg))), {tmpReg}, {baseReg, tmpReg}, true);

        if returnAll then
            self:addStatement(self:setRegister(retRegs[1], self:pack({self:functionCall(tmpReg, args)})), {retRegs[1]}, {tmpReg, unpack(regs)}, true);
        else
            self:addStatement(self:setRegister(tmpReg, Ast.TableConstructorExpression{Ast.TableEntry(self:functionCall(tmpReg, args))}), {tmpReg}, {tmpReg, unpack(regs)}, true);

            for i, reg in ipairs(retRegs) do
                self:addStatement(self:setRegister(reg, Ast.IndexExpression(self:register(tmpReg), Ast.NumberExpression(i))), {reg}, {tmpReg}, false);
            end
        end

        self:freeRegister(tmpReg, false);
    else
        local tmpReg = retRegs[1] or self:allocRegister(false);

        self:addStatement(self:setRegister(tmpReg, Ast.StringExpression(expression.passSelfFunctionName)), {tmpReg}, {}, false);
        self:addStatement(self:setRegister(tmpReg, Ast.IndexExpression(self:register(baseReg), self:register(tmpReg))), {tmpReg}, {baseReg, tmpReg}, true);
        self:addStatement(self:setRegister(retRegs[1], self:functionCall(tmpReg, args)), {retRegs[1]}, {baseReg, unpack(regs)}, true);
    end

    for i, reg in ipairs(regs) do
        self:freeRegister(reg, false);
    end

    return retRegs;
end;
`,"prometheus-src/prometheus/cff/expressions/string.lua":`-- This Script is Part of the Prometheus Obfuscator by levno-710
--
-- string.lua
--
-- This Script contains the expression handler for the StringExpression.

local Ast = require("prometheus.ast");

return function(self, expression, funcDepth, numReturns)
    local regs = {};
    for i = 1, numReturns, 1 do
        regs[i] = self:allocRegister();
        if i == 1 then
            self:addStatement(self:setRegister(regs[i], Ast.StringExpression(expression.value)), {regs[i]}, {}, false);
        else
            self:addStatement(self:setRegister(regs[i], Ast.NilExpression()), {regs[i]}, {}, false);
        end
    end
    return regs;
end;

`,"prometheus-src/prometheus/cff/expressions/table_constructor.lua":`-- This Script is Part of the Prometheus Obfuscator by levno-710
--
-- table_constructor.lua
--
-- This Script contains the expression handler for the TableConstructorExpression.

local Ast = require("prometheus.ast");
local AstKind = Ast.AstKind;

return function(self, expression, funcDepth, numReturns)
    local regs = {};
    for i = 1, numReturns do
        regs[i] = self:allocRegister();
        if i == 1 then
            local entries = {};
            local entryRegs = {};
            for i, entry in ipairs(expression.entries) do
                if entry.kind == AstKind.TableEntry then
                    local value = entry.value;
                    if i == #expression.entries and (value.kind == AstKind.FunctionCallExpression or value.kind == AstKind.PassSelfFunctionCallExpression or value.kind == AstKind.VarargExpression) then
                        local reg = self:compileExpression(entry.value, funcDepth, self.RETURN_ALL)[1];
                        table.insert(entries, Ast.TableEntry(Ast.FunctionCallExpression(
                            self:unpack(),
                            {self:register(reg)})));
                        table.insert(entryRegs, reg);
                    else
                        local reg = self:compileExpression(entry.value, funcDepth, 1)[1];
                        table.insert(entries, Ast.TableEntry(self:register(reg)));
                        table.insert(entryRegs, reg);
                    end
                else
                    local keyReg = self:compileExpression(entry.key, funcDepth, 1)[1];
                    local valReg = self:compileExpression(entry.value, funcDepth, 1)[1];
                    table.insert(entries, Ast.KeyedTableEntry(self:register(keyReg), self:register(valReg)));
                    table.insert(entryRegs, valReg);
                    table.insert(entryRegs, keyReg);
                end
            end
            self:addStatement(self:setRegister(regs[i], Ast.TableConstructorExpression(entries)), {regs[i]}, entryRegs, false);
            for i, reg in ipairs(entryRegs) do
                self:freeRegister(reg, false);
            end
        else
            self:addStatement(self:setRegister(regs[i], Ast.NilExpression()), {regs[i]}, {}, false);
        end
    end
    return regs;
end;
`,"prometheus-src/prometheus/cff/expressions/vararg.lua":`-- This Script is Part of the Prometheus Obfuscator by levno-710
--
-- vararg.lua
--
-- This Script contains the expression handler for the VarargExpression

local Ast = require("prometheus.ast");

return function(self, expression, funcDepth, numReturns)
    if numReturns == self.RETURN_ALL then
        return {self.varargReg};
    end
    local regs = {};
    for i = 1, numReturns do
        regs[i] = self:allocRegister(false);
        self:addStatement(self:setRegister(regs[i], Ast.IndexExpression(self:register(self.varargReg), Ast.NumberExpression(i))), {regs[i]}, {self.varargReg}, false);
    end
    return regs;
end;

`,"prometheus-src/prometheus/cff/expressions/variable.lua":`-- This Script is Part of the Prometheus Obfuscator by levno-710
--
-- variable.lua
--
-- This Script contains the expression handler for the VariableExpression

local Ast = require("prometheus.ast");

return function(self, expression, funcDepth, numReturns)
    local regs = {};
    for i = 1, numReturns do
        if i == 1 then
            if expression.kind == Ast.AstKind.GlobalVariableExpression then
                regs[i] = self:allocRegister(false);
                local tmpReg = self:allocRegister(false);
                self:addStatement(self:setRegister(tmpReg, Ast.StringExpression(expression.name)), {tmpReg}, {}, false);
                self:addStatement(self:setRegister(regs[i], Ast.IndexExpression(self:env(), self:register(tmpReg))), {regs[i]}, {tmpReg}, true);
                self:freeRegister(tmpReg, false);
            else
                if self.scopeFunctionDepths[expression.scope] == funcDepth then
                    if self:isUpvalue(expression.scope, expression.id) then
                        local reg = self:allocRegister(false);
                        local varReg = self:getVarRegister(expression.scope, expression.id, funcDepth, nil);
                        self:addStatement(self:setRegister(reg, self:getUpvalueMember(self:register(varReg))), {reg}, {varReg}, true);
                        regs[i] = reg;
                    else
                        regs[i] = self:getVarRegister(expression.scope, expression.id, funcDepth, nil);
                    end
                else
                    local reg = self:allocRegister(false);
                    local upvalId = self:getUpvalueId(expression.scope, expression.id);
                    self:addStatement(self:setRegister(reg, self:getUpvalueMember(Ast.IndexExpression(Ast.VariableExpression(self.currentUpvaluesVar), Ast.NumberExpression(upvalId)))), {reg}, {}, true);
                    regs[i] = reg;
                end
            end
        else
            regs[i] = self:allocRegister();
            self:addStatement(self:setRegister(regs[i], Ast.NilExpression()), {regs[i]}, {}, false);
        end
    end
    return regs;
end;

`,"prometheus-src/prometheus/cff/native.lua":`-- Keep selected expressions native, bridging captures through Cff's shared cells.
local Ast = require('prometheus.ast')
local Kind = Ast.AstKind

local function walk(expression, previsit, postvisit)
    return require('prometheus.visitast')(Ast.TopNode(Ast.Block({
        Ast.ReturnStatement({expression}),
    })), previsit, postvisit)
end

local function captures(expression)
    local owned, variables, seen = {}, {}, {}
    walk(expression, function(node)
        if node.kind == Kind.Block and node.scope then
            owned[node.scope] = true
        end
    end)
    walk(expression, function(node)
        local isGlobal = node.kind == Kind.GlobalVariableExpression
            or node.kind == Kind.AssignmentGlobalVariable
            or (node.kind == Kind.FunctionDeclaration and not node.symbol)
        if (node.kind == Kind.VariableExpression or node.kind == Kind.AssignmentVariable
            or node.kind == Kind.FunctionDeclaration) and not isGlobal and node.symbol
            and not owned[node.symbol.scope] then
            local scope, id = node.symbol.scope, node.symbol.id
            seen[scope] = seen[scope] or {}
            if not seen[scope][id] then
                variables[#variables + 1] = {scope = scope, id = id, symbol = node.symbol}
                seen[scope][id] = #variables
            end
        end
    end)
    return variables, seen, owned
end

return function(Compiler)
    function Compiler:prepareNativeExpressions()
        self.nativeResults = {}
        for expression in pairs(self.nativeExpressions) do
            local variables = captures(expression)
            for _, variable in ipairs(variables) do
                self:makeUpvalue(variable.scope, variable.id)
            end
        end
    end

    function Compiler:compileNativeExpression(expression, funcDepth, numReturns)
        local variables, lookup, owned = captures(expression)
        local entries, reads = {}, {}
        for _, variable in ipairs(variables) do
            local depth = self.scopeFunctionDepths[variable.scope]
            local id
            if depth == funcDepth then
                local register = self:getVarRegister(variable.scope, variable.id, funcDepth)
                id = self:register(register)
                reads[#reads + 1] = register
            else
                local index = self:getUpvalueId(variable.scope, variable.id)
                id = Ast.IndexExpression(Ast.VariableExpression(self.currentUpvaluesVar), Ast.NumberExpression(index))
            end
            entries[#entries + 1] = Ast.TableEntry(id)
        end

        -- The bridge parameters are bindings, so native locals can keep their
        -- symbols even when preferred names collide with each other or helpers.
        local proxySymbol = Ast.LocalSymbol('native_proxy')
        local envSymbol = Ast.LocalSymbol('native_env')
        local valuesSymbol = Ast.LocalSymbol('native_values')
        local resultSymbol = Ast.LocalSymbol('native_result')
        local function access(node, assignment)
            local base, index
            if node.kind == Kind.GlobalVariableExpression or node.kind == Kind.AssignmentGlobalVariable
                or (node.kind == Kind.FunctionDeclaration and not node.symbol) then
                local name = node.name
                if name == '_ENV' and not assignment then return Ast.VariableExpression(envSymbol) end
                base, index = Ast.VariableExpression(envSymbol), Ast.StringExpression(name)
            else
                local symbol = node.symbol
                local scope, id = symbol and symbol.scope, symbol and symbol.id
                local slot = scope and lookup[scope] and lookup[scope][id]
                if not slot then return end
                base = Ast.VariableExpression(valuesSymbol)
                index = Ast.IndexExpression(Ast.VariableExpression(proxySymbol), Ast.NumberExpression(slot))
            end
            if assignment then return Ast.AssignmentIndexing(base, index) end
            return Ast.IndexExpression(base, index)
        end
        walk(expression, nil, function(node)
            if node.kind == Kind.VariableExpression or node.kind == Kind.GlobalVariableExpression then return access(node, false) end
            if node.kind == Kind.AssignmentVariable or node.kind == Kind.AssignmentGlobalVariable then return access(node, true) end
            if node.kind == Kind.FunctionDeclaration and not owned[node.scope] then
                local target = access(node, false)
                if target then
                    for _, key in ipairs(node.indices) do
                        target = Ast.IndexExpression(target, Ast.StringExpression(key))
                    end
                    return Ast.AssignmentStatement({Ast.AssignmentIndexing(target.base, target.index)},
                        {Ast.FunctionLiteralExpression(node.args, node.body)})
                end
            end
        end)

        local statements = {Ast.LocalVariableDeclaration({resultSymbol}, {expression})}
        if expression.kind == Kind.FunctionLiteralExpression then
            statements[#statements + 1] = Ast.IfStatement(
                Ast.VariableExpression(self.setfenvVar), Ast.Block({
                    Ast.FunctionCallStatement(Ast.VariableExpression(self.setfenvVar), {
                        Ast.VariableExpression(resultSymbol), Ast.VariableExpression(envSymbol),
                    }),
                }), {})
        end
        statements[#statements + 1] = Ast.ReturnStatement({Ast.VariableExpression(resultSymbol)})
        local factory = Ast.FunctionLiteralExpression({proxySymbol, envSymbol, valuesSymbol}, Ast.Block(statements))
        self.nativeResults[expression] = expression
        local proxy = Ast.NilExpression()
        if #entries > 0 then
            proxy = Ast.FunctionCallExpression(Ast.VariableExpression(self.upvaluesProxyFunctionVar), {Ast.TableConstructorExpression(entries)})
        end
        local value = Ast.FunctionCallExpression(factory, {proxy, self:env(),
            Ast.VariableExpression(self.upvaluesTable)})
        local result = self:allocRegister(false)
        self:addStatement(self:setRegister(result, value), {result}, reads, true)
        local registers = {result}
        for i = 2, numReturns do
            registers[i] = self:allocRegister(false)
            self:addStatement(self:setRegister(registers[i], Ast.NilExpression()),
                {registers[i]}, {}, false)
        end
        return registers
    end
end
`,"prometheus-src/prometheus/cff/register.lua":`-- This Script is Part of the Prometheus Obfuscator by levno-710
--
-- register.lua
--
-- This Script contains the register management for the compiler.

local Ast = require("prometheus.ast");
local constants = require("prometheus.cff.constants");

local MAX_REGS = constants.MAX_REGS;

return function(Compiler)
    function Compiler:freeRegister(id, force)
        if force or not (self.registers[id] == self.VAR_REGISTER) then
            -- Releasing an allocator slot must also release its runtime reference.
            -- Control/return slots are reserved and never contain temporaries.
            if id ~= self.POS_REGISTER and id ~= self.RETURN_REGISTER then
                self:addStatement(self:setRegister(id, Ast.NilExpression()), {id}, {}, false, true);
            end
            self.usedRegisters = self.usedRegisters - 1;
            self.registers[id] = false
        end
    end

    function Compiler:isVarRegister(id)
        return self.registers[id] == self.VAR_REGISTER;
    end

    function Compiler:allocRegister(isVar)
        self.usedRegisters = self.usedRegisters + 1;

        -- Dispatch position and final returns outlive ordinary temporary slots.

        local id = 0;
        if self.usedRegisters < MAX_REGS * constants.MAX_REGS_MUL then
            repeat
                id = math.random(1, MAX_REGS - 1);
            until not self.registers[id];
        else
            repeat
                id = id + 1;
            until not self.registers[id];
        end

        if id > self.maxUsedRegister then
            self.maxUsedRegister = id;
        end

        if(isVar) then
            self.registers[id] = self.VAR_REGISTER;
        else
            self.registers[id] = true
        end
        return id;
    end

    function Compiler:isUpvalue(scope, id)
        return self.upvalVars[scope] and self.upvalVars[scope][id];
    end

    function Compiler:makeUpvalue(scope, id)
        if(not self.upvalVars[scope]) then
            self.upvalVars[scope] = {}
        end
        self.upvalVars[scope][id] = true;
    end

    function Compiler:getVarRegister(scope, id, functionDepth, potentialId)
        if(not self.registersForVar[scope]) then
            self.registersForVar[scope] = {};
            self.scopeFunctionDepths[scope] = functionDepth;
        end

        local reg = self.registersForVar[scope][id];
        if not reg then
            if potentialId and self.registers[potentialId] ~= self.VAR_REGISTER and potentialId ~= self.POS_REGISTER and potentialId ~= self.RETURN_REGISTER then
                self.registers[potentialId] = self.VAR_REGISTER;
                reg = potentialId;
            else
                reg = self:allocRegister(true);
            end
            self.registersForVar[scope][id] = reg;
        end
        return reg;
    end

    function Compiler:getRegisterVarId(id)
        local varId = self.registerVars[id];
        if not varId then
            varId = Ast.LocalSymbol();
            self.registerVars[id] = varId;
        end
        return varId;
    end

    function Compiler:register(id)
        if id == self.POS_REGISTER then
            return self:pos();
        end

        if id == self.RETURN_REGISTER then
            return self:getReturn();
        end

        if id < MAX_REGS then
            local vid = self:getRegisterVarId(id);
            return Ast.VariableExpression(vid);
        end

        local vid = self:getRegisterVarId(MAX_REGS);
        return Ast.IndexExpression(Ast.VariableExpression(vid), Ast.NumberExpression((id - MAX_REGS) + 1));
    end

    function Compiler:registerList(ids)
        local l = {};
        for i, id in ipairs(ids) do
            table.insert(l, self:register(id));
        end
        return l;
    end

    function Compiler:registerAssignment(id)
        if id == self.POS_REGISTER then
            return self:posAssignment();
        end
        if id == self.RETURN_REGISTER then
            return self:returnAssignment();
        end

        if id < MAX_REGS then
            local vid = self:getRegisterVarId(id);
            return Ast.AssignmentVariable(vid);
        end

        local vid = self:getRegisterVarId(MAX_REGS);
        return Ast.AssignmentIndexing(Ast.VariableExpression(vid), Ast.NumberExpression((id - MAX_REGS) + 1));
    end

    function Compiler:setRegister(id, val, compundArg)
        if(compundArg) then
            return compundArg(self:registerAssignment(id), val);
        end
        return Ast.AssignmentStatement({
            self:registerAssignment(id)
        }, {
            val
        });
    end

    function Compiler:setRegisters(ids, vals)
        local idStats = {};
        for i, id in ipairs(ids) do
            table.insert(idStats, self:registerAssignment(id));
        end

        return Ast.AssignmentStatement(idStats, vals);
    end

    function Compiler:copyRegisters(to, from)
        local idStats = {};
        local vals = {};
        for i, id in ipairs(to) do
            local fromId = from[i];
            if(fromId ~= id) then
                table.insert(idStats, self:registerAssignment(id));
                table.insert(vals, self:register(fromId));
            end
        end

        if(#idStats > 0 and #vals > 0) then
            return Ast.AssignmentStatement(idStats, vals);
        end
    end

    function Compiler:resetRegisters()
        self.registers = {};
    end

    function Compiler:pos()
        return Ast.VariableExpression(self.posVar);
    end

    function Compiler:posAssignment()
        return Ast.AssignmentVariable(self.posVar);
    end

    function Compiler:args()
        return Ast.VariableExpression(self.argsVar);
    end

    function Compiler:unpack()
        return Ast.VariableExpression(self.unpackPackedVar);
    end

    function Compiler:pack(values)
        return Ast.FunctionCallExpression(Ast.VariableExpression(self.packVar), values);
    end

    function Compiler:env()
        return Ast.VariableExpression(self.currentEnvVar);
    end

    function Compiler:functionCall(reg, args)
        local callArgs = {self:register(reg), self:env()};
        for _, arg in ipairs(args) do table.insert(callArgs, arg); end
        return Ast.FunctionCallExpression(Ast.VariableExpression(self.callFunctionVar), callArgs);
    end

    function Compiler:jmp(to)
        return Ast.AssignmentStatement({Ast.AssignmentVariable(self.posVar)},{to});
    end

    function Compiler:setPos(val)
        if not val then
            return Ast.AssignmentStatement({Ast.AssignmentVariable(self.posVar)}, {Ast.NilExpression()});
        end
        return Ast.AssignmentStatement({Ast.AssignmentVariable(self.posVar)}, {Ast.NumberExpression(val) or Ast.NilExpression()});
    end

    function Compiler:setReturn(val)
        return Ast.AssignmentStatement({Ast.AssignmentVariable(self.returnVar)}, {val});
    end

    function Compiler:getReturn()
        return Ast.VariableExpression(self.returnVar);
    end

    function Compiler:returnAssignment()
        return Ast.AssignmentVariable(self.returnVar);
    end

    function Compiler:setUpvalueMember(idExpr, valExpr, compoundConstructor)
        if compoundConstructor then
            return compoundConstructor(Ast.AssignmentIndexing(Ast.VariableExpression(self.upvaluesTable), idExpr), valExpr);
        end
        return Ast.AssignmentStatement({Ast.AssignmentIndexing(Ast.VariableExpression(self.upvaluesTable), idExpr)}, {valExpr});
    end

    function Compiler:getUpvalueMember(idExpr)
        return Ast.IndexExpression(Ast.VariableExpression(self.upvaluesTable), idExpr);
    end
end

`,"prometheus-src/prometheus/cff/statements.lua":`-- This Script is Part of the Prometheus Obfuscator by levno-710
--
-- statements.lua
--
-- This Script contains the statement handlers: exports handler table keyed by AstKind.

local Ast = require("prometheus.ast");
local AstKind = Ast.AstKind;

local handlers = {};
local statements = "prometheus.cff.statements.";
local function requireStatement(name)
    return require(statements .. name);
end

handlers[AstKind.ReturnStatement] = requireStatement("return");
handlers[AstKind.LocalVariableDeclaration] = requireStatement("local_variable_declaration");
handlers[AstKind.FunctionCallStatement] = requireStatement("function_call");
handlers[AstKind.PassSelfFunctionCallStatement] = requireStatement("pass_self_function_call");
handlers[AstKind.LocalFunctionDeclaration] = requireStatement("local_function_declaration");
handlers[AstKind.FunctionDeclaration] = requireStatement("function_declaration");
handlers[AstKind.AssignmentStatement] = requireStatement("assignment");
handlers[AstKind.IfStatement] = requireStatement("if_statement");
handlers[AstKind.DoStatement] = requireStatement("do_statement");
handlers[AstKind.WhileStatement] = requireStatement("while_statement");
handlers[AstKind.RepeatStatement] = requireStatement("repeat_statement");
handlers[AstKind.ForStatement] = requireStatement("for_statement");
handlers[AstKind.ForInStatement] = requireStatement("for_in_statement");
handlers[AstKind.BreakStatement] = requireStatement("break_statement");
handlers[AstKind.ContinueStatement] = requireStatement("continue_statement");

-- Compound statements share one handler
local compoundHandler = requireStatement("compound");
handlers[AstKind.CompoundAddStatement] = compoundHandler;
handlers[AstKind.CompoundSubStatement] = compoundHandler;
handlers[AstKind.CompoundMulStatement] = compoundHandler;
handlers[AstKind.CompoundDivStatement] = compoundHandler;
handlers[AstKind.CompoundModStatement] = compoundHandler;
handlers[AstKind.CompoundPowStatement] = compoundHandler;
handlers[AstKind.CompoundConcatStatement] = compoundHandler;

return handlers;

`,"prometheus-src/prometheus/cff/statements/assignment.lua":`-- This Script is Part of the Prometheus Obfuscator by levno-710
--
-- assignment.lua
--
-- This Script contains the statement handler for the AssignmentStatement.

local Ast = require("prometheus.ast");
local AstKind = Ast.AstKind;

local function isSideEffectFreeLiteral(expression)
    local kind = expression.kind;
    return kind == AstKind.NilExpression or kind == AstKind.BooleanExpression or
        kind == AstKind.NumberExpression or kind == AstKind.StringExpression;
end

return function(self, statement, funcDepth)
    local exprregs = {};
    local assignmentIndexingRegs = {};
    local function captureTarget(expression)
        local reg = self:compileExpression(expression, funcDepth, 1)[1];
        if self:isVarRegister(reg) then
            local snapshot = self:allocRegister(false);
            self:addStatement(self:copyRegisters({snapshot}, {reg}), {snapshot}, {reg}, false);
            reg = snapshot;
        end
        return reg;
    end

    for i, primaryExpr in ipairs(statement.lhs) do
        if(primaryExpr.kind == AstKind.AssignmentIndexing) then
            -- Later target/RHS evaluation and writes may replace these locals.
            assignmentIndexingRegs [i] = {
                base = captureTarget(primaryExpr.base),
                index = captureTarget(primaryExpr.index),
            };
        end
    end

    for i, expr in ipairs(statement.rhs) do
        if(i == #statement.rhs and #statement.lhs > #statement.rhs) then
            local regs = self:compileExpression(expr, funcDepth, #statement.lhs - #statement.rhs + 1);

            for i, reg in ipairs(regs) do
                if(self:isVarRegister(reg)) then
                    local ro = reg;
                    reg = self:allocRegister(false);
                    self:addStatement(self:copyRegisters({reg}, {ro}), {reg}, {ro}, false);
                end
                table.insert(exprregs, reg);
            end
        else
            if statement.lhs[i] then
                local reg = self:compileExpression(expr, funcDepth, 1)[1];
                if(self:isVarRegister(reg)) then
                    local ro = reg;
                    reg = self:allocRegister(false);
                    self:addStatement(self:copyRegisters({reg}, {ro}), {reg}, {ro}, false);
                end
                table.insert(exprregs, reg);
            else
                -- Lua evaluates every RHS expression, including values that
                -- have no corresponding assignment target.
                if not isSideEffectFreeLiteral(expr) then
                    local reg = self:compileExpression(expr, funcDepth, 1)[1];
                    self:freeRegister(reg, false);
                end
            end
        end
    end

    for i = #statement.lhs, 1, -1 do
        local primaryExpr = statement.lhs[i];
        if primaryExpr.kind == AstKind.AssignmentVariable or primaryExpr.kind == AstKind.AssignmentGlobalVariable then
            if primaryExpr.kind == AstKind.AssignmentGlobalVariable then
                local tmpReg = self:allocRegister(false);
                self:addStatement(self:setRegister(tmpReg, Ast.StringExpression(primaryExpr.name)), {tmpReg}, {}, false);
                self:addStatement(Ast.AssignmentStatement({Ast.AssignmentIndexing(self:env(), self:register(tmpReg))},
                 {self:register(exprregs[i])}), {}, {tmpReg, exprregs[i]}, true);
                self:freeRegister(tmpReg, false);
            else
                if self.scopeFunctionDepths[primaryExpr.scope] == funcDepth then
                    if self:isUpvalue(primaryExpr.scope, primaryExpr.id) then
                        local reg = self:getVarRegister(primaryExpr.scope, primaryExpr.id, funcDepth);
                        self:addStatement(self:setUpvalueMember(self:register(reg), self:register(exprregs[i])), {}, {reg, exprregs[i]}, true);
                    else
                        local reg = self:getVarRegister(primaryExpr.scope, primaryExpr.id, funcDepth, exprregs[i]);
                        if reg ~= exprregs[i] then
                            self:addStatement(self:setRegister(reg, self:register(exprregs[i])), {reg}, {exprregs[i]}, false);
                        end
                    end
                else
                    local upvalId = self:getUpvalueId(primaryExpr.scope, primaryExpr.id);
                    self:addStatement(self:setUpvalueMember(Ast.IndexExpression(Ast.VariableExpression(self.currentUpvaluesVar), Ast.NumberExpression(upvalId)), self:register(exprregs[i])), {}, {exprregs[i]}, true);
                end
            end
        elseif primaryExpr.kind == AstKind.AssignmentIndexing then
            local baseReg = assignmentIndexingRegs[i].base;
            local indexReg = assignmentIndexingRegs[i].index;
            self:addStatement(Ast.AssignmentStatement({
                Ast.AssignmentIndexing(self:register(baseReg), self:register(indexReg))
            }, {
                self:register(exprregs[i])
            }), {}, {exprregs[i], baseReg, indexReg}, true);
            self:freeRegister(baseReg, false);
            self:freeRegister(indexReg, false);
        else
            error(string.format("Invalid Assignment lhs: %s", statement.lhs));
        end
        self:freeRegister(exprregs[i], false);
    end
end;
`,"prometheus-src/prometheus/cff/statements/break_statement.lua":`-- This Script is Part of the Prometheus Obfuscator by levno-710
--
-- break_statement.lua
--
-- This Script contains the statement handler for the BreakStatement.

local Ast = require("prometheus.ast");

return function(self, statement, funcDepth)
    local toFreeVars = {};
    local statScope;
    repeat
        statScope = statScope and statScope.parentScope or statement.scope;
        for id, name in ipairs(statScope.variables) do
            table.insert(toFreeVars, {
                scope = statScope,
                id = id;
            });
        end
    until statScope == statement.loop.body.scope;

    for i, var in pairs(toFreeVars) do
        local varScope, id = var.scope, var.id;
        local varReg = self:getVarRegister(varScope, id, nil, nil);
        if self:isUpvalue(varScope, id) then
            self:addStatement(self:setRegister(varReg, Ast.FunctionCallExpression(Ast.VariableExpression(self.freeUpvalueFunc), {
                self:register(varReg)
            })), {varReg}, {varReg}, false);
        else
            self:addStatement(self:setRegister(varReg, Ast.NilExpression()), {varReg}, {}, false);
        end
    end


    self:addStatement(self:setPos(statement.loop.__final_block.id), {self.POS_REGISTER}, {}, false);
    self.activeBlock.advanceToNextBlock = false;
end;
`,"prometheus-src/prometheus/cff/statements/compound.lua":`-- This Script is Part of the Prometheus Obfuscator by levno-710
--
-- compound.lua
--
-- This Script contains the statement handler for the Compound statements (compound add, sub, mul, etc.)

local Ast = require("prometheus.ast");
local AstKind = Ast.AstKind;

local compoundConstructors = {
    [AstKind.CompoundAddStatement] = Ast.CompoundAddStatement,
    [AstKind.CompoundSubStatement] = Ast.CompoundSubStatement,
    [AstKind.CompoundMulStatement] = Ast.CompoundMulStatement,
    [AstKind.CompoundDivStatement] = Ast.CompoundDivStatement,
    [AstKind.CompoundModStatement] = Ast.CompoundModStatement,
    [AstKind.CompoundPowStatement] = Ast.CompoundPowStatement,
    [AstKind.CompoundConcatStatement] = Ast.CompoundConcatStatement,
};

return function(self, statement, funcDepth)
    local compoundConstructor = compoundConstructors[statement.kind];
    if statement.lhs.kind == AstKind.AssignmentIndexing then
        local indexing = statement.lhs;
        local baseReg = self:compileExpression(indexing.base, funcDepth, 1)[1];
        local indexReg = self:compileExpression(indexing.index, funcDepth, 1)[1];
        local valueReg = self:compileExpression(statement.rhs, funcDepth, 1)[1];

        self:addStatement(compoundConstructor(Ast.AssignmentIndexing(self:register(baseReg), self:register(indexReg)), self:register(valueReg)), {}, {baseReg, indexReg, valueReg}, true);
        self:freeRegister(baseReg, false);
        self:freeRegister(indexReg, false);
        self:freeRegister(valueReg, false);
    else
        local valueReg = self:compileExpression(statement.rhs, funcDepth, 1)[1];
        local primaryExpr = statement.lhs;
        if primaryExpr.kind == AstKind.AssignmentGlobalVariable then
            local tmpReg = self:allocRegister(false);
            self:addStatement(self:setRegister(tmpReg, Ast.StringExpression(primaryExpr.name)), {tmpReg}, {}, false);
            self:addStatement(compoundConstructor(Ast.AssignmentIndexing(self:env(), self:register(tmpReg)),
             self:register(valueReg)), {}, {tmpReg, valueReg}, true);
            self:freeRegister(tmpReg, false);
            self:freeRegister(valueReg, false);
        else
            if self.scopeFunctionDepths[primaryExpr.scope] == funcDepth then
                if self:isUpvalue(primaryExpr.scope, primaryExpr.id) then
                    local reg = self:getVarRegister(primaryExpr.scope, primaryExpr.id, funcDepth);
                    self:addStatement(self:setUpvalueMember(self:register(reg), self:register(valueReg), compoundConstructor), {}, {reg, valueReg}, true);
                else
                    local reg = self:getVarRegister(primaryExpr.scope, primaryExpr.id, funcDepth, valueReg);
                    if reg ~= valueReg then
                        self:addStatement(self:setRegister(reg, self:register(valueReg), compoundConstructor), {reg}, {valueReg}, false);
                    end
                end
            else
                local upvalId = self:getUpvalueId(primaryExpr.scope, primaryExpr.id);
                self:addStatement(self:setUpvalueMember(Ast.IndexExpression(Ast.VariableExpression(self.currentUpvaluesVar), Ast.NumberExpression(upvalId)), self:register(valueReg), compoundConstructor), {}, {valueReg}, true);
            end
            self:freeRegister(valueReg, false);
        end
    end
end;
`,"prometheus-src/prometheus/cff/statements/continue_statement.lua":`-- This Script is Part of the Prometheus Obfuscator by levno-710
--
-- continue_statement.lua
--
-- This Script contains the statement handler for the ContinueStatement.

local Ast = require("prometheus.ast");

return function(self, statement, funcDepth)
    local toFreeVars = {};
    local statScope;
    repeat
        statScope = statScope and statScope.parentScope or statement.scope;
        for id, _ in pairs(statScope.variables) do
            table.insert(toFreeVars, {
                scope = statScope,
                id = id;
            });
        end
    until statScope == statement.loop.body.scope;

    for _, var in ipairs(toFreeVars) do
        local varScope, id = var.scope, var.id;
        local varReg = self:getVarRegister(varScope, id, nil, nil);
        if self:isUpvalue(varScope, id) then
            self:addStatement(self:setRegister(varReg, Ast.FunctionCallExpression(Ast.VariableExpression(self.freeUpvalueFunc), {
                self:register(varReg)
            })), {varReg}, {varReg}, false);
        else
            self:addStatement(self:setRegister(varReg, Ast.NilExpression()), {varReg}, {}, false);
        end
    end


    self:addStatement(self:setPos(statement.loop.__start_block.id), {self.POS_REGISTER}, {}, false);
    self.activeBlock.advanceToNextBlock = false;
end;
`,"prometheus-src/prometheus/cff/statements/do_statement.lua":`-- This Script is Part of the Prometheus Obfuscator by levno-710
--
-- do_statement.lua
--
-- This Script contains the statement handler for the DoStatement.

return function(self, statement, funcDepth)
    self:compileBlock(statement.body, funcDepth);
end;

`,"prometheus-src/prometheus/cff/statements/for_in_statement.lua":`-- This Script is Part of the Prometheus Obfuscator by levno-710
--
-- for_in_statement.lua
--
-- This Script contains the statement handler for the ForInStatement

local Ast = require("prometheus.ast");

return function(self, statement, funcDepth)
    local expressionsLength = #statement.expressions;
    local exprregs = {};
    for i, expr in ipairs(statement.expressions) do
        if(i == expressionsLength and expressionsLength < 3) then
            local regs = self:compileExpression(expr, funcDepth, 4 - expressionsLength);
            for i = 1, 4 - expressionsLength do
                table.insert(exprregs, regs[i]);
            end
        else
            if i <= 3 then
                table.insert(exprregs, self:compileExpression(expr, funcDepth, 1)[1])
            else
                self:freeRegister(self:compileExpression(expr, funcDepth, 1)[1], false);
            end
        end
    end

    for i, reg in ipairs(exprregs) do
        if reg and self.registers[reg] ~= self.VAR_REGISTER and reg ~= self.POS_REGISTER and reg ~= self.RETURN_REGISTER then
            self.registers[reg] = self.VAR_REGISTER;
        else
            exprregs[i] = self:allocRegister(true);
            self:addStatement(self:copyRegisters({exprregs[i]}, {reg}), {exprregs[i]}, {reg}, false);
        end
    end

    local checkBlock = self:createBlock();
    local bodyBlock = self:createBlock();
    local finalBlock = self:createBlock();

    statement.__start_block = checkBlock;
    statement.__final_block = finalBlock;

    self:addStatement(self:setPos(checkBlock.id), {self.POS_REGISTER}, {}, false);

    self:setActiveBlock(checkBlock);
    local varRegs = {};
    for i, id in ipairs(statement.ids) do
        varRegs[i] = self:getVarRegister(statement.scope, id, funcDepth)
    end



    -- Keep the control result separate from the visible first loop variable.
    -- Native multiple assignment preserves nils and pads missing results.
    local resultRegs = {exprregs[3]};
    local resultTargets = {self:registerAssignment(exprregs[3])};
    for i = 2, #varRegs do
        resultRegs[i] = varRegs[i];
        resultTargets[i] = self:registerAssignment(varRegs[i]);
    end

    self:addStatement(Ast.AssignmentStatement(resultTargets, {
        Ast.FunctionCallExpression(self:register(exprregs[1]), {
            self:register(exprregs[2]),
            self:register(exprregs[3]),
        })
    }), resultRegs, {exprregs[1], exprregs[2], exprregs[3]}, true);



    self:addStatement(Ast.AssignmentStatement({
        self:posAssignment()
    }, {
        Ast.OrExpression(Ast.AndExpression(self:register(exprregs[3]), Ast.NumberExpression(bodyBlock.id)), Ast.NumberExpression(finalBlock.id))
    }), {self.POS_REGISTER}, {exprregs[3]}, false);

    self:setActiveBlock(bodyBlock);
    self:addStatement(self:copyRegisters({varRegs[1]}, {exprregs[3]}), {varRegs[1]}, {exprregs[3]}, false);

    for i, id in ipairs(statement.ids) do
        if(self:isUpvalue(statement.scope, id)) then
            local varreg = varRegs[i];
            local tmpReg = self:allocRegister(false);
            self:addStatement(self:setRegister(tmpReg, Ast.FunctionCallExpression(Ast.VariableExpression(self.allocUpvalFunction), {})), {tmpReg}, {}, false);
            self:addStatement(self:setUpvalueMember(self:register(tmpReg), self:register(varreg)), {}, {tmpReg, varreg}, true);
            self:addStatement(self:copyRegisters({varreg}, {tmpReg}), {varreg}, {tmpReg}, false);
            self:freeRegister(tmpReg, false);
        end
    end

    self:compileBlock(statement.body, funcDepth);
    self:addStatement(self:setPos(checkBlock.id), {self.POS_REGISTER}, {}, false);
    self:setActiveBlock(finalBlock);

    for i, _ in ipairs(exprregs) do
        self:freeRegister(exprregs[i], true)
    end
end;
`,"prometheus-src/prometheus/cff/statements/for_statement.lua":`-- This Script is Part of the Prometheus Obfuscator by levno-710
--
-- for_statement.lua
--
-- This Script contains the statement handler for the ForStatement

local Ast = require("prometheus.ast");
local util = require("prometheus.util");

return function(self, statement, funcDepth)
    local checkBlock = self:createBlock();
    local innerBlock = self:createBlock();
    local finalBlock = self:createBlock();

    statement.__start_block = checkBlock;
    statement.__final_block = finalBlock;

    local posState = self.registers[self.POS_REGISTER];
    self.registers[self.POS_REGISTER] = self.VAR_REGISTER;

    local initialExprReg = self:compileExpression(statement.initialValue, funcDepth, 1)[1];
    local initialReg = self:allocRegister(false);
    self:addStatement(self:copyRegisters({initialReg}, {initialExprReg}), {initialReg}, {initialExprReg}, false);
    self:freeRegister(initialExprReg);

    local finalExprReg = self:compileExpression(statement.finalValue, funcDepth, 1)[1];
    local finalReg = self:allocRegister(false);
    self:addStatement(self:copyRegisters({finalReg}, {finalExprReg}), {finalReg}, {finalExprReg}, false);
    self:freeRegister(finalExprReg);

    local incrementExprReg = self:compileExpression(statement.incrementBy, funcDepth, 1)[1];
    local incrementReg = self:allocRegister(false);
    self:addStatement(self:copyRegisters({incrementReg}, {incrementExprReg}), {incrementReg}, {incrementExprReg}, false);
    self:freeRegister(incrementExprReg);

    -- Lua evaluates all three expressions before coercing and validating them.
    -- Use captured builtins so replacing globals cannot change loop semantics.
    for _, input in ipairs({
        {initialReg, "initial value"},
        {finalReg, "limit"},
        {incrementReg, "step"},
    }) do
        local reg, name = input[1], input[2];
        self:addStatement(self:setRegister(reg, Ast.OrExpression(
            Ast.FunctionCallExpression(Ast.VariableExpression(self.tonumberVar), {
                self:register(reg),
            }),
            Ast.FunctionCallExpression(Ast.VariableExpression(self.errorVar), {
                Ast.StringExpression("'for' " .. name .. " must be a number"),
            })
        )), {reg}, {reg}, true);
    end

    local tmpReg = self:allocRegister(false);
    self:addStatement(self:setRegister(tmpReg, Ast.NumberExpression(0)), {tmpReg}, {}, false);
    local incrementIsNegReg = self:allocRegister(false);

    local shouldSwap3 = math.random(1, 2) == 2;
    local shuffledRegs4 = shouldSwap3 and {incrementReg, tmpReg} or {tmpReg, incrementReg};
    self:addStatement(self:setRegister(incrementIsNegReg, Ast[shouldSwap3 and "LessThanExpression" or "GreaterThanExpression"](self:register(shuffledRegs4[1]), self:register(shuffledRegs4[2]))), {incrementIsNegReg}, {shuffledRegs4[1], shuffledRegs4[2]}, false);

    self:freeRegister(tmpReg);

    local currentReg = self:allocRegister(true);
    self:addStatement(self:setRegister(currentReg, Ast.SubExpression(self:register(initialReg), self:register(incrementReg))), {currentReg}, {initialReg, incrementReg}, false);
    self:freeRegister(initialReg);

    self:addStatement(self:jmp(Ast.NumberExpression(checkBlock.id)), {self.POS_REGISTER}, {}, false);

    self:setActiveBlock(checkBlock);
    -- x = x + y or x = y + x instead of just x = x + y.
    --> NEW: In an attempt to thwart deobfuscations, despite this being a simple comparison... Shuffling these causes problems for decompilers.
    --> NOTE: This isn't unstable code, I've tested it multiple times.

    local shuffledRegs = util.shuffle({currentReg, incrementReg});
    self:addStatement(self:setRegister(currentReg, Ast.AddExpression(self:register(shuffledRegs[1]), self:register(shuffledRegs[2]))), {currentReg}, {shuffledRegs[1], shuffledRegs[2]}, false);
    local tmpReg1 = self:allocRegister(false);
    local tmpReg2 = self:allocRegister(false);
    self:addStatement(self:setRegister(tmpReg2, Ast.NotExpression(self:register(incrementIsNegReg))), {tmpReg2}, {incrementIsNegReg}, false);

    local shouldSwap = math.random(1, 2) == 2;
    local shuffledRegs2 = shouldSwap and {currentReg, finalReg} or {finalReg, currentReg};
    self:addStatement(self:setRegister(tmpReg1, Ast[shouldSwap and "LessThanOrEqualsExpression" or "GreaterThanOrEqualsExpression"](self:register(shuffledRegs2[1]), self:register(shuffledRegs2[2]))), {tmpReg1}, {shuffledRegs2[1], shuffledRegs2[2]}, false);
    self:addStatement(self:setRegister(tmpReg1, Ast.AndExpression(self:register(tmpReg2), self:register(tmpReg1))), {tmpReg1}, {tmpReg1, tmpReg2}, false);

    local shouldSwap2 = math.random(1, 2) == 2;
    local shuffledRegs3 = shouldSwap2 and {currentReg, finalReg} or {finalReg, currentReg};
    self:addStatement(self:setRegister(tmpReg2, Ast[shouldSwap2 and "GreaterThanOrEqualsExpression" or "LessThanOrEqualsExpression"](self:register(shuffledRegs3[1]), self:register(shuffledRegs3[2]))), {tmpReg2}, {shuffledRegs3[1], shuffledRegs3[2]}, false);

    self:addStatement(self:setRegister(tmpReg2, Ast.AndExpression(self:register(incrementIsNegReg), self:register(tmpReg2))), {tmpReg2}, {tmpReg2, incrementIsNegReg}, false);
    self:addStatement(self:setRegister(tmpReg1, Ast.OrExpression(self:register(tmpReg2), self:register(tmpReg1))), {tmpReg1}, {tmpReg1, tmpReg2}, false);
    self:freeRegister(tmpReg2);
    tmpReg2 = self:compileExpression(Ast.NumberExpression(innerBlock.id), funcDepth, 1)[1];
    self:addStatement(self:setRegister(self.POS_REGISTER, Ast.AndExpression(self:register(tmpReg1), self:register(tmpReg2))), {self.POS_REGISTER}, {tmpReg1, tmpReg2}, false);
    self:freeRegister(tmpReg2);
    self:freeRegister(tmpReg1);
    tmpReg2 = self:compileExpression(Ast.NumberExpression(finalBlock.id), funcDepth, 1)[1];
    self:addStatement(self:setRegister(self.POS_REGISTER, Ast.OrExpression(self:register(self.POS_REGISTER), self:register(tmpReg2))), {self.POS_REGISTER}, {self.POS_REGISTER, tmpReg2}, false);
    self:freeRegister(tmpReg2);

    self:setActiveBlock(innerBlock);
    self.registers[self.POS_REGISTER] = posState;

    local varReg = self:getVarRegister(statement.scope, statement.id, funcDepth, nil);

    if(self:isUpvalue(statement.scope, statement.id)) then
        self:addStatement(self:setRegister(varReg, Ast.FunctionCallExpression(Ast.VariableExpression(self.allocUpvalFunction), {})), {varReg}, {}, false);
        self:addStatement(self:setUpvalueMember(self:register(varReg), self:register(currentReg)), {}, {varReg, currentReg}, true);
    else
        self:addStatement(self:setRegister(varReg, self:register(currentReg)), {varReg}, {currentReg}, false);
    end


    self:compileBlock(statement.body, funcDepth);
    self:addStatement(self:setRegister(self.POS_REGISTER, Ast.NumberExpression(checkBlock.id)), {self.POS_REGISTER}, {}, false);

    -- Loop state is live on the back edge; release it only after exiting.
    self:setActiveBlock(finalBlock);
    self.registers[self.POS_REGISTER] = self.VAR_REGISTER;
    self:freeRegister(finalReg);
    self:freeRegister(incrementIsNegReg);
    self:freeRegister(incrementReg);
    self:freeRegister(currentReg, true);

    self.registers[self.POS_REGISTER] = posState;
end;

`,"prometheus-src/prometheus/cff/statements/function_call.lua":`-- This Script is Part of the Prometheus Obfuscator by levno-710
--
-- function_call.lua
--
-- This Script contains the statement handler for the FunctionCallStatement.

local Ast = require("prometheus.ast");
local AstKind = Ast.AstKind;

return function(self, statement, funcDepth)
    local baseReg = self:compileExpression(statement.base, funcDepth, 1)[1];
    local retReg = self:allocRegister(false);
    local regs = {};
    local args = {};

    for i, expr in ipairs(statement.args) do
        if i == #statement.args and (expr.kind == AstKind.FunctionCallExpression or expr.kind == AstKind.PassSelfFunctionCallExpression or expr.kind == AstKind.VarargExpression) then
            local reg = self:compileExpression(expr, funcDepth, self.RETURN_ALL)[1];
            table.insert(args, Ast.FunctionCallExpression(
                self:unpack(),
                {self:register(reg)}));
            table.insert(regs, reg);
        else
            local reg = self:compileExpression(expr, funcDepth, 1)[1];
            local argExpr = self:register(reg);
            table.insert(args, argExpr);
            table.insert(regs, reg);
        end
    end

    self:addStatement(self:setRegister(retReg, self:functionCall(baseReg, args)), {retReg}, {baseReg, unpack(regs)}, true);
    self:freeRegister(baseReg, false);
    self:freeRegister(retReg, false);
    for _, reg in ipairs(regs) do
        self:freeRegister(reg, false);
    end
end;

`,"prometheus-src/prometheus/cff/statements/function_declaration.lua":`-- This Script is Part of the Prometheus Obfuscator by levno-710
--
-- function_declaration.lua
--
-- This Script contains the statement handler for the FunctionDeclaration.

local Ast = require("prometheus.ast");

return function(self, statement, funcDepth)
    local retReg = self:compileFunction(statement, funcDepth);
    if(#statement.indices > 0) then
        local tblReg;
        if not statement.symbol then
            tblReg = self:allocRegister(false);
            self:addStatement(self:setRegister(tblReg, Ast.StringExpression(statement.name)), {tblReg}, {}, false);
            self:addStatement(self:setRegister(tblReg, Ast.IndexExpression(self:env(), self:register(tblReg))), {tblReg}, {tblReg}, true);
        else
            if self.scopeFunctionDepths[statement.scope] == funcDepth then
                if self:isUpvalue(statement.scope, statement.id) then
                    tblReg = self:allocRegister(false);
                    local reg = self:getVarRegister(statement.scope, statement.id, funcDepth);
                    self:addStatement(self:setRegister(tblReg, self:getUpvalueMember(self:register(reg))), {tblReg}, {reg}, true);
                else
                    tblReg = self:getVarRegister(statement.scope, statement.id, funcDepth, retReg);
                end
            else
                tblReg = self:allocRegister(false);
                local upvalId = self:getUpvalueId(statement.scope, statement.id);
                self:addStatement(self:setRegister(tblReg, self:getUpvalueMember(Ast.IndexExpression(Ast.VariableExpression(self.currentUpvaluesVar), Ast.NumberExpression(upvalId)))), {tblReg}, {}, true);
            end
        end

        for i = 1, #statement.indices - 1 do
            local index = statement.indices[i];
            local indexReg = self:compileExpression(Ast.StringExpression(index), funcDepth, 1)[1];
            local tblRegOld = tblReg;
            tblReg = self:allocRegister(false);
            self:addStatement(self:setRegister(tblReg, Ast.IndexExpression(self:register(tblRegOld), self:register(indexReg))), {tblReg}, {tblRegOld, indexReg}, false);
            self:freeRegister(tblRegOld, false);
            self:freeRegister(indexReg, false);
        end

        local index = statement.indices[#statement.indices];
        local indexReg = self:compileExpression(Ast.StringExpression(index), funcDepth, 1)[1];
        self:addStatement(Ast.AssignmentStatement({
            Ast.AssignmentIndexing(self:register(tblReg), self:register(indexReg)),
        }, {
            self:register(retReg),
        }), {}, {tblReg, indexReg, retReg}, true);
        self:freeRegister(indexReg, false);
        self:freeRegister(tblReg, false);
        self:freeRegister(retReg, false);

        return;
    end
    if not statement.symbol then
        local tmpReg = self:allocRegister(false);
        self:addStatement(self:setRegister(tmpReg, Ast.StringExpression(statement.name)), {tmpReg}, {}, false);
        self:addStatement(Ast.AssignmentStatement({Ast.AssignmentIndexing(self:env(), self:register(tmpReg))},
         {self:register(retReg)}), {}, {tmpReg, retReg}, true);
        self:freeRegister(tmpReg, false);
    else
        if self.scopeFunctionDepths[statement.scope] == funcDepth then
            if self:isUpvalue(statement.scope, statement.id) then
                local reg = self:getVarRegister(statement.scope, statement.id, funcDepth);
                self:addStatement(self:setUpvalueMember(self:register(reg), self:register(retReg)), {}, {reg, retReg}, true);
            else
                local reg = self:getVarRegister(statement.scope, statement.id, funcDepth, retReg);
                if reg ~= retReg then
                    self:addStatement(self:setRegister(reg, self:register(retReg)), {reg}, {retReg}, false);
                end
            end
        else
            local upvalId = self:getUpvalueId(statement.scope, statement.id);
            self:addStatement(self:setUpvalueMember(Ast.IndexExpression(Ast.VariableExpression(self.currentUpvaluesVar), Ast.NumberExpression(upvalId)), self:register(retReg)), {}, {retReg}, true);
        end
    end
    self:freeRegister(retReg, false);
end;

`,"prometheus-src/prometheus/cff/statements/if_statement.lua":`-- This Script is Part of the Prometheus Obfuscator by levno-710
--
-- if_statement.lua
--
-- This Script contains the statement handler for the IfStatement.

local Ast = require("prometheus.ast");

return function(self, statement, funcDepth)
    local conditionReg = self:compileExpression(statement.condition, funcDepth, 1)[1];
    local finalBlock = self:createBlock();

    local nextBlock
    if statement.elsebody or #statement.elseifs > 0 then
        nextBlock = self:createBlock();
    else
        nextBlock = finalBlock;
    end
    local innerBlock = self:createBlock();


    self:addStatement(self:setRegister(self.POS_REGISTER, Ast.OrExpression(Ast.AndExpression(self:register(conditionReg), Ast.NumberExpression(innerBlock.id)), Ast.NumberExpression(nextBlock.id))), {self.POS_REGISTER}, {conditionReg}, false);

    self:freeRegister(conditionReg, false);

    self:setActiveBlock(innerBlock);
    self:compileBlock(statement.body, funcDepth);
    self:addStatement(self:setRegister(self.POS_REGISTER, Ast.NumberExpression(finalBlock.id)), {self.POS_REGISTER}, {}, false);

    for i, eif in ipairs(statement.elseifs) do
        self:setActiveBlock(nextBlock);
        conditionReg = self:compileExpression(eif.condition, funcDepth, 1)[1];
        local innerBlock = self:createBlock();
        if statement.elsebody or i < #statement.elseifs then
            nextBlock = self:createBlock();
        else
            nextBlock = finalBlock;
        end
        self:addStatement(self:setRegister(self.POS_REGISTER, Ast.OrExpression(Ast.AndExpression(self:register(conditionReg), Ast.NumberExpression(innerBlock.id)), Ast.NumberExpression(nextBlock.id))), {self.POS_REGISTER}, {conditionReg}, false);


        self:freeRegister(conditionReg, false);

        self:setActiveBlock(innerBlock);
        self:compileBlock(eif.body, funcDepth);
        self:addStatement(self:setRegister(self.POS_REGISTER, Ast.NumberExpression(finalBlock.id)), {self.POS_REGISTER}, {}, false);
    end

    if statement.elsebody then
        self:setActiveBlock(nextBlock);
        self:compileBlock(statement.elsebody, funcDepth);
        self:addStatement(self:setRegister(self.POS_REGISTER, Ast.NumberExpression(finalBlock.id)), {self.POS_REGISTER}, {}, false);
    end

    self:setActiveBlock(finalBlock);
end;
`,"prometheus-src/prometheus/cff/statements/local_function_declaration.lua":`-- This Script is Part of the Prometheus Obfuscator by levno-710
--
-- local_function_declaration.lua
--
-- This Script contains the statement handler for the LocalFunctionDeclaration

local Ast = require("prometheus.ast");

return function(self, statement, funcDepth)
    if(self:isUpvalue(statement.scope, statement.id)) then
        local varReg = self:getVarRegister(statement.scope, statement.id, funcDepth, nil);
        self:addStatement(self:setRegister(varReg, Ast.FunctionCallExpression(Ast.VariableExpression(self.allocUpvalFunction), {})), {varReg}, {}, false);
        local retReg = self:compileFunction(statement, funcDepth);
        self:addStatement(self:setUpvalueMember(self:register(varReg), self:register(retReg)), {}, {varReg, retReg}, true);
        self:freeRegister(retReg, false);
    else
        local retReg = self:compileFunction(statement, funcDepth);
        local varReg = self:getVarRegister(statement.scope, statement.id, funcDepth, retReg);

        self:addStatement(self:copyRegisters({varReg}, {retReg}), {varReg}, {retReg}, false);
        self:freeRegister(retReg, false);
    end
end;

`,"prometheus-src/prometheus/cff/statements/local_variable_declaration.lua":`-- This Script is Part of the Prometheus Obfuscator by levno-710
--
-- local_variable_declaration.lua
--
-- This Script contains the statement handler for the LocalVariableDeclaration

local Ast = require("prometheus.ast");
local AstKind = Ast.AstKind;

local function isSideEffectFreeLiteral(expression)
    local kind = expression.kind;
    return kind == AstKind.NilExpression or kind == AstKind.BooleanExpression or
        kind == AstKind.NumberExpression or kind == AstKind.StringExpression;
end

return function(self, statement, funcDepth)
    local exprregs = {};
    for i, expr in ipairs(statement.expressions) do
        if(i == #statement.expressions and #statement.ids > #statement.expressions) then
            local regs = self:compileExpression(expr, funcDepth, #statement.ids - #statement.expressions + 1);
            for i, reg in ipairs(regs) do
                table.insert(exprregs, reg);
            end
        else
            if statement.ids[i] then
                local reg = self:compileExpression(expr, funcDepth, 1)[1];
                table.insert(exprregs, reg);
            else
                -- Initializers past the declared names are discarded, but
                -- Lua still evaluates them for their effects and errors.
                if not isSideEffectFreeLiteral(expr) then
                    local reg = self:compileExpression(expr, funcDepth, 1)[1];
                    self:freeRegister(reg, false);
                end
            end
        end
    end

    if #exprregs == 0 then
        for _=1, #statement.ids do
            table.insert(exprregs, self:compileExpression(Ast.NilExpression(), funcDepth, 1)[1]);
        end
    end

    for i, id in ipairs(statement.ids) do
        if(exprregs[i]) then
            if(self:isUpvalue(statement.scope, id)) then
                local varreg = self:getVarRegister(statement.scope, id, funcDepth);
                local varReg = self:getVarRegister(statement.scope, id, funcDepth, nil);
                self:addStatement(self:setRegister(varReg, Ast.FunctionCallExpression(Ast.VariableExpression(self.allocUpvalFunction), {})), {varReg}, {}, false);
                self:addStatement(self:setUpvalueMember(self:register(varReg), self:register(exprregs[i])), {}, {varReg, exprregs[i]}, true);
                self:freeRegister(exprregs[i], false);
            else
                local varreg = self:getVarRegister(statement.scope, id, funcDepth, exprregs[i]);
                self:addStatement(self:copyRegisters({varreg}, {exprregs[i]}), {varreg}, {exprregs[i]}, false);
                self:freeRegister(exprregs[i], false);
            end
        end
    end

    if not self.scopeFunctionDepths[statement.scope] then
        self.scopeFunctionDepths[statement.scope] = funcDepth;
    end
end;

`,"prometheus-src/prometheus/cff/statements/pass_self_function_call.lua":`-- This Script is Part of the Prometheus Obfuscator by levno-710
--
-- pass_self_function_call.lua
--
-- This Script contains the statement handler for the PassSelfFunctionCallStatement.

local Ast = require("prometheus.ast");
local AstKind = Ast.AstKind;

return function(self, statement, funcDepth)
    local baseReg = self:compileExpression(statement.base, funcDepth, 1)[1];
    local tmpReg = self:allocRegister(false);
    local args = { self:register(baseReg) };
    local regs = { baseReg };

    for i, expr in ipairs(statement.args) do
        if i == #statement.args and (expr.kind == AstKind.FunctionCallExpression or expr.kind == AstKind.PassSelfFunctionCallExpression or expr.kind == AstKind.VarargExpression) then
            local reg = self:compileExpression(expr, funcDepth, self.RETURN_ALL)[1];
            table.insert(args, Ast.FunctionCallExpression(
                self:unpack(),
                {self:register(reg)}));
            table.insert(regs, reg);
        else
            local reg = self:compileExpression(expr, funcDepth, 1)[1];
            table.insert(args, self:register(reg));
            table.insert(regs, reg);
        end
    end
    self:addStatement(self:setRegister(tmpReg, Ast.StringExpression(statement.passSelfFunctionName)), {tmpReg}, {}, false);
    self:addStatement(self:setRegister(tmpReg, Ast.IndexExpression(self:register(baseReg), self:register(tmpReg))), {tmpReg}, {tmpReg, baseReg}, true);

    self:addStatement(self:setRegister(tmpReg, self:functionCall(tmpReg, args)), {tmpReg}, {tmpReg, unpack(regs)}, true);

    self:freeRegister(tmpReg, false);
    for _, reg in ipairs(regs) do
        self:freeRegister(reg, false);
    end
end;

`,"prometheus-src/prometheus/cff/statements/repeat_statement.lua":`-- This Script is Part of the Prometheus Obfuscator by levno-710
--
-- repeat_statement.lua
--
-- This Script contains the statement handler for the RepeatStatement.

local Ast = require("prometheus.ast");

return function(self, statement, funcDepth)
    local innerBlock = self:createBlock();
    local finalBlock = self:createBlock();
    statement.__start_block = innerBlock;
    statement.__final_block = finalBlock;

    self:addStatement(self:setRegister(self.POS_REGISTER, Ast.NumberExpression(innerBlock.id)), {self.POS_REGISTER}, {}, false);
    self:setActiveBlock(innerBlock);

    for _, stat in ipairs(statement.body.statements) do
        self:compileStatement(stat, funcDepth);
    end;
    local conditionReg = (self:compileExpression(statement.condition, funcDepth, 1))[1];
    self:addStatement(self:setRegister(self.POS_REGISTER, Ast.OrExpression(Ast.AndExpression(self:register(conditionReg), Ast.NumberExpression(finalBlock.id)), Ast.NumberExpression(innerBlock.id))), { self.POS_REGISTER }, { conditionReg }, false);
    self:freeRegister(conditionReg, false);

    for id, _ in ipairs(statement.body.scope.variables) do
        local varReg = self:getVarRegister(statement.body.scope, id, funcDepth, nil);
        if self:isUpvalue(statement.body.scope, id) then
            self:addStatement(self:setRegister(varReg, Ast.FunctionCallExpression(Ast.VariableExpression(self.freeUpvalueFunc), { self:register(varReg) })), { varReg }, { varReg }, false);
        else
            self:addStatement(self:setRegister(varReg, Ast.NilExpression()), { varReg }, {}, false);
        end;
        self:freeRegister(varReg, true);
    end;

    self:setActiveBlock(finalBlock);
end;
`,"prometheus-src/prometheus/cff/statements/return.lua":`-- This Script is Part of the Prometheus Obfuscator by levno-710
--
-- return.lua
--
-- This Script contains the statement handler for the ReturnStatement.

local Ast = require("prometheus.ast");
local AstKind = Ast.AstKind;

return function(self, statement, funcDepth)
    local entries = {};
    local regs = {};

    for i, expr in ipairs(statement.args) do
        if i == #statement.args and (expr.kind == AstKind.FunctionCallExpression or expr.kind == AstKind.PassSelfFunctionCallExpression or expr.kind == AstKind.VarargExpression) then
            local reg = self:compileExpression(expr, funcDepth, self.RETURN_ALL)[1];
            table.insert(entries, Ast.FunctionCallExpression(
                self:unpack(),
                {self:register(reg)}));
            table.insert(regs, reg);
        else
            local reg = self:compileExpression(expr, funcDepth, 1)[1];
            table.insert(entries, self:register(reg));
            table.insert(regs, reg);
        end
    end

    self:addStatement(self:setReturn(self:pack(entries)), {self.RETURN_REGISTER}, regs, false);
    for _, reg in ipairs(regs) do
        self:freeRegister(reg, false);
    end
    self:addStatement(self:setPos(nil), {self.POS_REGISTER}, {}, false);
    self.activeBlock.advanceToNextBlock = false;
end;
`,"prometheus-src/prometheus/cff/statements/while_statement.lua":`-- This Script is Part of the Prometheus Obfuscator by levno-710
--
-- while_statement.lua
--
-- This Script contains the statement handler for the WhileStatement

local Ast = require("prometheus.ast");

return function(self, statement, funcDepth)
    local innerBlock = self:createBlock();
    local finalBlock = self:createBlock();
    local checkBlock = self:createBlock();

    statement.__start_block = checkBlock;
    statement.__final_block = finalBlock;

    self:addStatement(self:setPos(checkBlock.id), {self.POS_REGISTER}, {}, false);

    self:setActiveBlock(checkBlock);
    local conditionReg = self:compileExpression(statement.condition, funcDepth, 1)[1];
    self:addStatement(self:setRegister(self.POS_REGISTER, Ast.OrExpression(Ast.AndExpression(self:register(conditionReg), Ast.NumberExpression(innerBlock.id)), Ast.NumberExpression(finalBlock.id))), {self.POS_REGISTER}, {conditionReg}, false);
    self:freeRegister(conditionReg, false);

    self:setActiveBlock(innerBlock);
    self:compileBlock(statement.body, funcDepth);
    self:addStatement(self:setPos(checkBlock.id), {self.POS_REGISTER}, {}, false);
    self:setActiveBlock(finalBlock);
end;
`,"prometheus-src/prometheus/cff/strings.lua":`-- Share repeated literals after Cff has introduced its own helper strings.
local Ast = require('prometheus.ast')
local visitast = require('prometheus.visitast')
local shuffle = require('prometheus.util').shuffle
local Kind = Ast.AstKind

return function(ast)
    local counts, strings = {}, {}
    visitast(ast, function(node)
        if node.kind == Kind.StringExpression then
            local value = node.value
            counts[value] = (counts[value] or 0) + 1
            if counts[value] == 2 then strings[#strings + 1] = value end
        end
    end)
    if #strings == 0 then return ast end

    shuffle(strings)
    local scope = ast.body.scope
    local pool = Ast.LocalSymbol()
    local indices, entries = {}, {}
    for i, value in ipairs(strings) do
        indices[value] = i
        entries[i] = Ast.TableEntry(Ast.StringExpression(value))
    end
    -- Track blocks explicitly: strings after a nested function literal still
    -- belong to the enclosing block, regardless of the visitor's last scope.
    local scopes = {}
    visitast(ast, function(node)
        if node.kind == Kind.Block then scopes[#scopes + 1] = node.scope end
    end, function(node)
        if node.kind == Kind.Block then
            scopes[#scopes] = nil
        elseif node.kind == Kind.StringExpression then
            local index = indices[node.value]
            if index then
                return Ast.IndexExpression(Ast.VariableExpression(pool), Ast.NumberExpression(index))
            end
        end
    end)
    -- Insert only after replacement so each pooled value remains embedded once.
    table.insert(ast.body.statements, 1,
        Ast.LocalVariableDeclaration({pool}, {Ast.TableConstructorExpression(entries)}))
    return ast
end
`,"prometheus-src/prometheus/cff/upvalue.lua":`-- This Script is Part of the Prometheus Obfuscator by levno-710
--
-- upvalue.lua
--
-- This Script contains the upvalue and GC management for the compiler.

local Ast = require("prometheus.ast");
local util = require("prometheus.util");

local unpack = unpack or table.unpack;

return function(Compiler)
    function Compiler:createUpvaluesGcFunc()
        local selfVar = Ast.LocalSymbol();

        local iteratorVar = Ast.LocalSymbol();
        local valueVar = Ast.LocalSymbol();
        return Ast.FunctionLiteralExpression({Ast.VariableExpression(selfVar)}, Ast.Block({
            Ast.LocalVariableDeclaration({iteratorVar, valueVar}, {Ast.NumberExpression(1), Ast.IndexExpression(Ast.VariableExpression(selfVar), Ast.NumberExpression(1))}),
            Ast.WhileStatement(Ast.Block({
                Ast.AssignmentStatement({
                    Ast.AssignmentIndexing(Ast.VariableExpression(self.upvaluesReferenceCountsTable), Ast.VariableExpression(valueVar)),
                    Ast.AssignmentVariable(iteratorVar),
                }, {
                    Ast.SubExpression(Ast.IndexExpression(Ast.VariableExpression(self.upvaluesReferenceCountsTable), Ast.VariableExpression(valueVar)), Ast.NumberExpression(1)),
                    Ast.AddExpression(unpack(util.shuffle{Ast.VariableExpression(iteratorVar), Ast.NumberExpression(1)})),
                }),
                Ast.IfStatement(Ast.EqualsExpression(unpack(util.shuffle{Ast.IndexExpression(Ast.VariableExpression(self.upvaluesReferenceCountsTable), Ast.VariableExpression(valueVar)), Ast.NumberExpression(0)})), Ast.Block({
                    Ast.AssignmentStatement({
                        Ast.AssignmentIndexing(Ast.VariableExpression(self.upvaluesReferenceCountsTable), Ast.VariableExpression(valueVar)),
                        Ast.AssignmentIndexing(Ast.VariableExpression(self.upvaluesTable), Ast.VariableExpression(valueVar)),
                    }, {
                        Ast.NilExpression(),
                        Ast.NilExpression(),
                    })
                }), {}, nil),
                Ast.AssignmentStatement({
                    Ast.AssignmentVariable(valueVar),
                }, {
                    Ast.IndexExpression(Ast.VariableExpression(selfVar), Ast.VariableExpression(iteratorVar)),
                }),
            }), Ast.VariableExpression(valueVar));
        }));
    end

    function Compiler:createFreeUpvalueFunc()
        local argVar = Ast.LocalSymbol();
        return Ast.FunctionLiteralExpression({Ast.VariableExpression(argVar)}, Ast.Block({
            Ast.AssignmentStatement({
                Ast.AssignmentIndexing(Ast.VariableExpression(self.upvaluesReferenceCountsTable), Ast.VariableExpression(argVar))
            }, {
                Ast.SubExpression(Ast.IndexExpression(Ast.VariableExpression(self.upvaluesReferenceCountsTable), Ast.VariableExpression(argVar)), Ast.NumberExpression(1));
            }),
            Ast.IfStatement(Ast.EqualsExpression(unpack(util.shuffle{Ast.IndexExpression(Ast.VariableExpression(self.upvaluesReferenceCountsTable), Ast.VariableExpression(argVar)), Ast.NumberExpression(0)})), Ast.Block({
                Ast.AssignmentStatement({
                    Ast.AssignmentIndexing(Ast.VariableExpression(self.upvaluesReferenceCountsTable), Ast.VariableExpression(argVar)),
                    Ast.AssignmentIndexing(Ast.VariableExpression(self.upvaluesTable), Ast.VariableExpression(argVar)),
                }, {
                    Ast.NilExpression(),
                    Ast.NilExpression(),
                })
            }), {}, nil)
        }))
    end

    function Compiler:createUpvaluesProxyFunc()
        local entriesVar = Ast.LocalSymbol();
        local proxyVar = Ast.LocalSymbol();
        local metatableVar = Ast.LocalSymbol();
        local forArg = Ast.LocalSymbol();

        return Ast.FunctionLiteralExpression({Ast.VariableExpression(entriesVar)}, Ast.Block({
            Ast.ForStatement(forArg, Ast.NumberExpression(1), Ast.LenExpression(Ast.VariableExpression(entriesVar)), Ast.NumberExpression(1), Ast.Block({
                Ast.AssignmentStatement({
                    Ast.AssignmentIndexing(Ast.VariableExpression(self.upvaluesReferenceCountsTable), Ast.IndexExpression(Ast.VariableExpression(entriesVar), Ast.VariableExpression(forArg)))
                }, {
                    Ast.AddExpression(unpack(util.shuffle{
                        Ast.IndexExpression(Ast.VariableExpression(self.upvaluesReferenceCountsTable), Ast.IndexExpression(Ast.VariableExpression(entriesVar), Ast.VariableExpression(forArg))),
                        Ast.NumberExpression(1),
                    }))
                })
            }));
            Ast.IfStatement(Ast.VariableExpression(self.newproxyVar), Ast.Block({
                Ast.LocalVariableDeclaration({proxyVar}, {
                    Ast.FunctionCallExpression(Ast.VariableExpression(self.newproxyVar), {
                        Ast.BooleanExpression(true)
                    });
                });
                Ast.LocalVariableDeclaration({metatableVar}, {
                    Ast.FunctionCallExpression(Ast.VariableExpression(self.getmetatableVar), {
                        Ast.VariableExpression(proxyVar);
                    });
                });
                Ast.AssignmentStatement({
                    Ast.AssignmentIndexing(Ast.VariableExpression(metatableVar), Ast.StringExpression("__index")),
                    Ast.AssignmentIndexing(Ast.VariableExpression(metatableVar), Ast.StringExpression("__gc")),
                    Ast.AssignmentIndexing(Ast.VariableExpression(metatableVar), Ast.StringExpression("__len")),
                }, {
                    Ast.VariableExpression(entriesVar),
                    Ast.VariableExpression(self.upvaluesGcFunctionVar),
                    Ast.FunctionLiteralExpression({}, Ast.Block({
                        Ast.ReturnStatement({Ast.NumberExpression(self.upvalsProxyLenReturn)})
                    }));
                });
                Ast.ReturnStatement({
                    Ast.VariableExpression(proxyVar)
                })
            }), {}, Ast.Block({
                Ast.ReturnStatement({Ast.FunctionCallExpression(Ast.VariableExpression(self.setmetatableVar), {
                    Ast.TableConstructorExpression({}),
                    Ast.TableConstructorExpression({
                        Ast.KeyedTableEntry(Ast.StringExpression("__gc"), Ast.VariableExpression(self.upvaluesGcFunctionVar)),
                        Ast.KeyedTableEntry(Ast.StringExpression("__index"), Ast.VariableExpression(entriesVar)),
                        Ast.KeyedTableEntry(Ast.StringExpression("__len"), Ast.FunctionLiteralExpression({}, Ast.Block({
                            Ast.ReturnStatement({Ast.NumberExpression(self.upvalsProxyLenReturn)})
                        }))),
                    })
                })})
            }));
        }));
    end

    function Compiler:createAllocUpvalFunction()
        return Ast.FunctionLiteralExpression({}, Ast.Block({
            Ast.AssignmentStatement({
                    Ast.AssignmentVariable(self.currentUpvalId),
                },{
                    Ast.AddExpression(unpack(util.shuffle({
                        Ast.VariableExpression(self.currentUpvalId),
                        Ast.NumberExpression(1),
                    }))),
                }
            ),
            Ast.AssignmentStatement({
                Ast.AssignmentIndexing(Ast.VariableExpression(self.upvaluesReferenceCountsTable), Ast.VariableExpression(self.currentUpvalId)),
            }, {
                Ast.NumberExpression(1),
            }),
            Ast.ReturnStatement({
                Ast.VariableExpression(self.currentUpvalId),
            })
        }));
    end
end

`,"prometheus-src/prometheus/enums.lua":`-- This Script is Part of the Prometheus Obfuscator by levno-710
--
-- enums.lua
--
-- This Script provides some enums used by the Obfuscator.

local Enums = {};

local chararray = require("prometheus.util").chararray;

Enums.LuaVersion = {
	LuaU = "LuaU" ,
	Lua51 = "Lua51",
}

Enums.Conventions = {
	[Enums.LuaVersion.Lua51] = {
		Keywords = {
			"and", "break", "do", "else", "elseif",
			"end", "false", "for", "function", "if",
			"in", "local", "nil", "not", "or",
			"repeat", "return", "then", "true", "until", "while"
		},

		SymbolChars = chararray("+-*/%^#=~<>(){}[];:,."),
		MaxSymbolLength = 3,
		Symbols = {
			"+", "-", "*", "/", "%", "^", "#",
			"==", "~=", "<=", ">=", "<", ">", "=",
			"(", ")", "{", "}", "[", "]",
			";", ":", ",", ".", "..", "...",
		},

		IdentChars = chararray("abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ_0123456789"),
		NumberChars = chararray("0123456789"),
		HexNumberChars = chararray("0123456789abcdefABCDEF"),
		BinaryNumberChars = {"0", "1"},
		DecimalExponent = {"e", "E"},
		HexadecimalNums = {"x", "X"},
		BinaryNums = {"b", "B"},
		DecimalSeperators = false,

		EscapeSequences = {
			["a"] = "\\a";
			["b"] = "\\b";
			["f"] = "\\f";
			["n"] = "\\n";
			["r"] = "\\r";
			["t"] = "\\t";
			["v"] = "\\v";
			["\\\\"] = "\\\\";
			["\\""] = "\\"";
			["\\'"] = "\\'";
		},
		NumericalEscapes = true,
		EscapeZIgnoreNextWhitespace = true,
		HexEscapes = true,
		UnicodeEscapes = true,
	},
	[Enums.LuaVersion.LuaU] = {
		Keywords = {
			"and", "break", "do", "else", "elseif", "continue",
			"end", "false", "for", "function", "if",
			"in", "local", "nil", "not", "or",
			"repeat", "return", "then", "true", "until", "while"
		},

		SymbolChars = chararray("+-*/%^#=~<>(){}[];:,."),
		MaxSymbolLength = 3,
		Symbols = {
			"+", "-", "*", "/", "%", "^", "#",
			"==", "~=", "<=", ">=", "<", ">", "=",
			"+=", "-=", "/=", "%=", "^=", "..=", "*=",
			"(", ")", "{", "}", "[", "]",
			";", ":", ",", ".", "..", "...",
			"::", "->", "?", "|", "&",
		},

		IdentChars = chararray("abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ_0123456789"),
		NumberChars = chararray("0123456789"),
		HexNumberChars = chararray("0123456789abcdefABCDEF"),
		BinaryNumberChars = {"0", "1"},
		DecimalExponent = {"e", "E"},
		HexadecimalNums = {"x", "X"},
		BinaryNums = {"b", "B"},
		DecimalSeperators = {"_"},

		EscapeSequences = {
			["a"] = "\\a";
			["b"] = "\\b";
			["f"] = "\\f";
			["n"] = "\\n";
			["r"] = "\\r";
			["t"] = "\\t";
			["v"] = "\\v";
			["\\\\"] = "\\\\";
			["\\""] = "\\"";
			["\\'"] = "\\'";
		},
		NumericalEscapes = true,
		EscapeZIgnoreNextWhitespace = true,
		HexEscapes = true,
		UnicodeEscapes = true,
	},
}

return Enums;
`,"prometheus-src/prometheus/namegenerators.lua":`-- This Script is Part of the Prometheus Obfuscator by levno-710
--
-- namegenerators.lua
--
-- This Script provides a collection of name generators for Prometheus.

return {
	Mangled = require("prometheus.namegenerators.mangled");
	MangledShuffled = require("prometheus.namegenerators.mangled_shuffled");
	Il = require("prometheus.namegenerators.Il");
	Number = require("prometheus.namegenerators.number");
	Confuse = require("prometheus.namegenerators.confuse");
}`,"prometheus-src/prometheus/namegenerators/Il.lua":`-- This Script is Part of the Prometheus Obfuscator by levno-710
--
-- namegenerators/il.lua
--
-- This Script provides a function for generation of weird names consisting of I, l and 1

local MIN_CHARACTERS = 5;
local MAX_INITIAL_CHARACTERS = 10;


local util = require("prometheus.util");
local chararray = util.chararray;

local offset = 0;
local VarDigits = chararray("Il1");
local VarStartDigits = chararray("Il");

local function generateName(id, _)
	local name = ''
	id = id + offset;
	local d = id % #VarStartDigits
	id = (id - d) / #VarStartDigits
	name = name..VarStartDigits[d+1]
	while id > 0 do
		local e = id % #VarDigits
		id = (id - e) / #VarDigits
		name = name..VarDigits[e+1]
	end
	return name
end

local function prepare(_)
	util.shuffle(VarDigits);
	util.shuffle(VarStartDigits);
	offset = math.random(3 ^ MIN_CHARACTERS, 3 ^ MAX_INITIAL_CHARACTERS);
end

return {
	generateName = generateName,
	prepare = prepare
};
`,"prometheus-src/prometheus/namegenerators/confuse.lua":`-- This Script is Part of the Prometheus Obfuscator by levno-710
--
-- namegenerators/confuse.lua
--
-- This Script provides a function for generation of confusing variable names

local util = require("prometheus.util");

local varNames = {
    "index",
    "iterator",
    "length",
    "size",
    "key",
    "value",
    "data",
    "count",
    "increment",
    "include",
    "string",
    "number",
    "type",
    "void",
    "int",
    "float",
    "bool",
    "char",
    "double",
    "long",
    "short",
    "unsigned",
    "signed",
    "program",
    "factory",
    "Factory",
    "new",
    "delete",
    "table",
    "array",
    "object",
    "class",
    "arr",
    "obj",
    "cls",
    "dir",
    "directory",
    "isWindows",
    "isLinux",
    "game",
    "roblox",
    "gmod",
    "gsub",
    "gmatch",
    "gfind",
    "onload",
    "load",
    "loadstring",
    "loadfile",
    "dofile",
    "require",
    "parse",
    "byte",
    "code",
    "bytecode",
    "idx",
    "const",
    "loader",
    "loaders",
    "module",
    "export",
    "exports",
    "import",
    "imports",
    "package",
    "packages",
    "_G",
    "math",
    "os",
    "io",
    "write",
    "print",
    "read",
    "readline",
    "readlines",
    "close",
    "flush",
    "open",
    "popen",
    "tmpfile",
    "tmpname",
    "rename",
    "remove",
    "seek",
    "setvbuf",
    "lines",
    "call",
    "apply",
    "raise",
    "pcall",
    "xpcall",
    "coroutine",
    "create",
    "resume",
    "status",
    "wrap",
    "yield",
    "debug",
    "traceback",
    "getinfo",
    "getlocal",
    "setlocal",
    "getupvalue",
    "setupvalue",
    "getuservalue",
    "setuservalue",
    "upvalueid",
    "upvaluejoin",
    "sethook",
    "gethook",
    "hookfunction",
    "hooks",
    "error",
    "setmetatable",
    "getmetatable",
    "rand",
    "randomseed",
    "next",
    "ipairs",
    "hasnext",
    "loadlib",
    "searchpath",
    "oldpath",
    "newpath",
    "path",
    "rawequal",
    "rawset",
    "rawget",
    "rawnew",
    "rawlen",
    "select",
    "tonumber",
    "tostring",
    "assert",
    "collectgarbage",
    "a", "b", "c", "i", "j", "m",
}

local function generateName(id, _)
    local name = {};
    local d = id % #varNames
	id = (id - d) / #varNames
	table.insert(name, varNames[d + 1]);
	while id > 0 do
		local e = id % #varNames
		id = (id - e) / #varNames
		table.insert(name, varNames[e + 1]);
	end
	return table.concat(name, "_");
end

local function prepare(_)
    util.shuffle(varNames);
end

return {
	generateName = generateName,
	prepare = prepare
};
`,"prometheus-src/prometheus/namegenerators/mangled.lua":`-- This Script is Part of the Prometheus Obfuscator by levno-710
--
-- namegenerators/mangled.lua
--
-- This Script provides a function for generation of mangled names


local util = require("prometheus.util");
local chararray = util.chararray;

local VarDigits = chararray("abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789_");
local VarStartDigits = chararray("abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ");

return function(id, _)
	local name = ''
	local d = id % #VarStartDigits
	id = (id - d) / #VarStartDigits
	name = name..VarStartDigits[d+1]
	while id > 0 do
		local e = id % #VarDigits
		id = (id - e) / #VarDigits
		name = name..VarDigits[e+1]
	end
	return name
end`,"prometheus-src/prometheus/namegenerators/mangled_shuffled.lua":`-- This Script is Part of the Prometheus Obfuscator by levno-710
--
-- namegenerators/mangled_shuffled.lua
--
-- This Script provides a function for generation of mangled names with shuffled character order


local util = require("prometheus.util");
local chararray = util.chararray;

local VarDigits = chararray("abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789_");
local VarStartDigits = chararray("abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ");

local function generateName(id, _)
	local name = ''
	local d = id % #VarStartDigits
	id = (id - d) / #VarStartDigits
	name = name..VarStartDigits[d+1]
	while id > 0 do
		local e = id % #VarDigits
		id = (id - e) / #VarDigits
		name = name..VarDigits[e+1]
	end
	return name
end

local function prepare(_)
	util.shuffle(VarDigits);
	util.shuffle(VarStartDigits);
end

return {
	generateName = generateName,
	prepare = prepare
};`,"prometheus-src/prometheus/namegenerators/number.lua":`-- This Script is Part of the Prometheus Obfuscator by levno-710
--
-- namegenerators/number.lua
--
-- This Script provides a function for generation of simple up counting names but with hex numbers

local PREFIX = "_";

return function(id, _)
	return PREFIX .. tostring(id);
end
`,"prometheus-src/prometheus/names.lua":`-- Allocate spellings from lexical analysis while preserving symbol identities.
local function renameScope(scope, settings)
    if not scope.isGlobal then
        local forbidden = {}
        for _, keyword in pairs(settings.Keywords) do forbidden[keyword] = true end
        for outer, ids in pairs(scope.variablesFromHigherScopes) do
            for id, count in pairs(ids) do
                if count > 0 then forbidden[outer.variables[id]] = true end
            end
        end
        scope.variablesLookup = {}
        local index, prefix = 0, settings.prefix or ''
        for id, symbol in ipairs(scope.symbols) do
            local original, name = symbol.name
            repeat
                local generated = settings.generateName(index, scope, original)
                name = prefix .. (generated or original)
                index = index + 1
            until not forbidden[name]
            symbol.name, scope.variables[id] = name, name
            scope.variablesLookup[name], forbidden[name] = id, true
        end
    end
    for _, child in ipairs(scope.children) do renameScope(child, settings) end
end

return function(ast, settings)
    assert(ast.bindingAnalysis, 'Name allocation requires binding analysis')
    renameScope(ast.globalScope, settings)
end
`,"prometheus-src/prometheus/parser.lua":`-- This Script is Part of the Prometheus Obfuscator by levno-710
--
-- parser.lua
-- Overview:
-- This Script provides a class for parsing of lua code.
-- This Parser is Capable of parsing LuaU and Lua5.1
--
-- Note that when parsing LuaU "continue" is treated as a Keyword, so no variable may be named "continue" even though this would be valid in LuaU
--
-- Settings Object:
-- luaVersion : The LuaVersion of the Script - Currently Supported : Lua51 and LuaU
-- AllowInternalIdentifiers : Skip reserved-prefix warnings for generated code (default false)
--

local Tokenizer = require("prometheus.tokenizer");
local Enums = require("prometheus.enums");
local util = require("prometheus.util");
local Ast = require("prometheus.ast");
local analyzeBindings = require("prometheus.bindinganalysis");
local logger = require("logger");

local AstKind = Ast.AstKind;

local LuaVersion = Enums.LuaVersion;
local lookupify = util.lookupify;

local TokenKind = Tokenizer.TokenKind;

-- Transient parser name environments never become part of the AST.
local Bindings = {};
Bindings.__index = Bindings;
function Bindings:new(parent)
	return setmetatable({parent = parent, names = {}}, self);
end
function Bindings:create(name, token)
	if self.names[name] and token then
		logger:warn("Warning at Position " .. tostring(token.line) .. ":" .. tostring(token.linePos)
			.. ', the variable "' .. name .. '" is already defined in that scope');
	end
	return Ast.LocalSymbol(name);
end
function Bindings:enable(symbol)
	self.names[symbol.name] = symbol;
end
function Bindings:declare(name, token)
	local symbol = self:create(name, token);
	self:enable(symbol);
	return symbol;
end
function Bindings:resolve(name)
	local symbol = self.names[name];
	if not symbol and self.parent then return self.parent:resolve(name); end
	return symbol and Ast.VariableExpression(symbol) or Ast.GlobalVariableExpression(name);
end

local Parser = {};

local ASSIGNMENT_NO_WARN_LOOKUP = lookupify{
	AstKind.NilExpression,
	AstKind.FunctionCallExpression,
	AstKind.PassSelfFunctionCallExpression,
	AstKind.VarargExpression
};

local CALLABLE_PREFIX_EXPRESSION_LOOKUP = lookupify{
	AstKind.VariableExpression,
	AstKind.GlobalVariableExpression,
	AstKind.IndexExpression,
	AstKind.FunctionCallExpression,
	AstKind.PassSelfFunctionCallExpression
};

local function generateError(self, message)
	local token;
	if(self.index > self.length) then
		token = self.tokens[self.length];
	elseif(self.index < 1) then
		return "Parsing Error at Position 0:0, " .. message;
	else
		token = self.tokens[self.index];
	end

	return "Parsing Error at Position " .. tostring(token.line) .. ":" .. tostring(token.linePos) .. ", " .. message;
end

local function generateWarning(token, message)
	return "Warning at Position " .. tostring(token.line) .. ":" .. tostring(token.linePos) .. ", " .. message;
end

function Parser:new(settings)
	local luaVersion = (settings and (settings.luaVersion or settings.LuaVersion)) or LuaVersion.LuaU;
	local parser = {
		luaVersion = luaVersion,
		tokenizer = Tokenizer:new({
			luaVersion = luaVersion,
			AllowInternalIdentifiers = settings and settings.AllowInternalIdentifiers == true,
		}),
		tokens = {};
		length = 0;
		index = 0;
	};

	setmetatable(parser, self);
	self.__index = self;

	return parser;
end

-- Function to peek the n'th token
local function peek(self, n)
	n = n or 0;
	local i = self.index + n + 1;
	if i > self.length then
		return Tokenizer.EOF_TOKEN;
	end
	return self.tokens[i];
end

-- Function to get the next Token
local function get(self)
	local i = self.index + 1;
	if i > self.length then
		error(generateError(self, "Unexpected end of Input"));
	end
	self.index = self.index + 1;
	local tk = self.tokens[i];

	return tk;
end

local function is(self, kind, sourceOrN, n)
	local token = peek(self, n);

	local source = nil;
	if(type(sourceOrN) == "string") then
		source = sourceOrN;
	else
		n = sourceOrN;
	end
	n = n or 0;

	if(token.kind == kind) then
		if(source == nil or token.source == source) then
			return true;
		end
	end

	return false;
end

local function consume(self, kind, source)
	if(is(self, kind, source)) then
		self.index = self.index + 1;
		return true;
	end
	return false;
end

local function expect(self, kind, source)
	if(is(self, kind, source, 0)) then
		return get(self);
	end

	local token = peek(self);
	if self.disableLog then error() end
	if(source) then
		logger:error(generateError(self, string.format("unexpected token <%s> \\"%s\\", expected <%s> \\"%s\\"", token.kind, token.source, kind, source)));
	else
		logger:error(generateError(self, string.format("unexpected token <%s> \\"%s\\", expected <%s>", token.kind, token.source, kind)));
	end
end

-- Parse the given code to an Abstract Syntax Tree
function Parser:parse(code)
	self.tokenizer:append(code);
	self.tokens = self.tokenizer:scanAll();
	self.length = #self.tokens;

	-- Begin transient name lookup at the chunk boundary
	local globalScope = Bindings:new();

	local ast = Ast.TopNode(self:block(globalScope, false));
	-- File Must be Over when Top Node is Fully Parsed
	expect(self, TokenKind.Eof);

	logger:debug("Cleaning up Parser for next Use ...")
	-- Clean Up
	self.tokenizer:reset();
	self.tokens = {};
	self.index = 0;
	self.length = 0;

	logger:debug("Cleanup Done")
	-- Keep direct Parser consumers on the same analyzed AST path as the pipeline.
	analyzeBindings(ast);

	return ast;
end

-- Parse a Code Block
function Parser:block(parentScope, currentLoop, scope)
	scope = scope or Bindings:new(parentScope);
	local statements = {};

	repeat
		local statement, isTerminatingStatement = self:statement(scope, currentLoop);
		table.insert(statements, statement);
	until isTerminatingStatement or not statement

	-- Consume Eventual Semicolon after terminating return, break or continue
	consume(self, TokenKind.Symbol, ";");

	return Ast.Block(statements);
end

function Parser:statement(scope, currentLoop)
	-- Skip all semicolons before next real statement
	-- NOP statements are therefore ignored
	while(consume(self, TokenKind.Symbol, ";")) do

	end

	-- Break Statement - only valid inside of Loops
	if(consume(self, TokenKind.Keyword, "break")) then
		if(not currentLoop) then
			if self.disableLog then error() end;
			logger:error(generateError(self, "the break Statement is only valid inside of loops"));
		end
		-- Return true as Second value because break must be the last Statement in a block
		return Ast.BreakStatement(currentLoop), true;
	end

	-- Continue Statement - only valid inside of Loops - only valid in LuaU
	if(self.luaVersion == LuaVersion.LuaU and consume(self, TokenKind.Keyword, "continue")) then
		if(not currentLoop) then
			if self.disableLog then error() end;
			logger:error(generateError(self, "the continue Statement is only valid inside of loops"));
		end
		-- Return true as Second value because continue must be the last Statement in a block
		return Ast.ContinueStatement(currentLoop), true;
	end

	-- do ... end Statement
	if(consume(self, TokenKind.Keyword, "do")) then
		local body = self:block(scope, currentLoop);
		expect(self, TokenKind.Keyword, "end");
		return Ast.DoStatement(body);
	end

	-- While Statement
	if(consume(self, TokenKind.Keyword, "while")) then
		local condition = self:expression(scope);
		expect(self, TokenKind.Keyword, "do");
		local stat = Ast.WhileStatement(nil, condition);
		stat.body = self:block(scope, stat);
		expect(self, TokenKind.Keyword, "end");
		return stat;
	end

	-- Repeat Statement
	if(consume(self, TokenKind.Keyword, "repeat")) then
		local repeatScope = Bindings:new(scope);
		local stat = Ast.RepeatStatement(nil, nil);
		stat.body = self:block(nil, stat, repeatScope);
		expect(self, TokenKind.Keyword, "until");
		stat.condition = self:expression(repeatScope);
		return stat;
	end

	-- Return Statement
	if(consume(self, TokenKind.Keyword, "return")) then
		local args = {};
		if(not is(self, TokenKind.Keyword, "end") and not is(self, TokenKind.Keyword, "elseif") and not is(self, TokenKind.Keyword, "else") and not is(self, TokenKind.Symbol, ";") and not is(self, TokenKind.Eof)) then
			args = self:exprList(scope);
		end
		-- Return true as Second value because return must be the last Statement in a block
		return Ast.ReturnStatement(args), true;
	end

	-- If Statement
	if(consume(self, TokenKind.Keyword, "if")) then
		local condition = self:expression(scope);
		expect(self, TokenKind.Keyword, "then");
		local body = self:block(scope, currentLoop);

		local elseifs = {};
		-- Elseifs
		while(consume(self, TokenKind.Keyword, "elseif")) do
			local condition = self:expression(scope);
			expect(self, TokenKind.Keyword, "then");
			local body = self:block(scope, currentLoop);

			table.insert(elseifs, {
				condition = condition,
				body = body,
			});
		end

		local elsebody = nil;
		-- Else
		if(consume(self, TokenKind.Keyword, "else")) then
			elsebody = self:block(scope, currentLoop);
		end

		expect(self, TokenKind.Keyword, "end");

		return Ast.IfStatement(condition, body, elseifs, elsebody);
	end

	-- Function Declaration
	if(consume(self, TokenKind.Keyword, "function")) then
		-- TODO: Parse Function Declaration Name
		local obj = self:funcName(scope);
		local indices = obj.indices;

		local funcScope = Bindings:new(scope);

		expect(self, TokenKind.Symbol, "(");
		local args = self:functionArgList(funcScope);
		expect(self, TokenKind.Symbol, ")");

		if(obj.passSelf) then
			local symbol = funcScope:declare("self", obj.token);
			table.insert(args, 1, Ast.VariableExpression(symbol));
		end

		local body = self:block(nil, false, funcScope);
		expect(self, TokenKind.Keyword, "end");

		return Ast.FunctionDeclaration(obj.target, indices, args, body);
	end

	-- Local Function or Variable Declaration
	if(consume(self, TokenKind.Keyword, "local")) then
		-- Local Function Declaration
		if(consume(self, TokenKind.Keyword, "function")) then
			local ident = expect(self, TokenKind.Ident);
			local name = ident.value;

			local symbol = scope:declare(name, ident);
			local funcScope = Bindings:new(scope);

			expect(self, TokenKind.Symbol, "(");
			local args = self:functionArgList(funcScope);
			expect(self, TokenKind.Symbol, ")");

			local body = self:block(nil, false, funcScope);
			expect(self, TokenKind.Keyword, "end");

			return Ast.LocalFunctionDeclaration(symbol, args, body);
		end

		-- Local Variable Declaration
		local symbols = self:nameList(scope);
		local expressions = {};
		if(consume(self, TokenKind.Symbol, "=")) then
			expressions = self:exprList(scope);
		end

		-- Variables can only be reffered to in the next statement, so the symbol's are enabled after the expressions have been parsed
		self:enableNameList(scope, symbols);

		if(#expressions > #symbols) then
			logger:warn(generateWarning(peek(self, -1), string.format("assigning %d values to %d variable" .. ((#symbols > 1 and "s") or ""), #expressions, #symbols)));
		elseif(#symbols > #expressions and #expressions > 0 and not ASSIGNMENT_NO_WARN_LOOKUP[expressions[#expressions].kind]) then
			logger:warn(generateWarning(peek(self, -1), string.format("assigning %d value" .. ((#expressions > 1 and "s") or "") ..
				" to %d variables initializes extra variables with nil, add a nil value to silence", #expressions, #symbols)));
		end
		return Ast.LocalVariableDeclaration(symbols, expressions);
	end

	-- For Statement
	if(consume(self, TokenKind.Keyword, "for")) then
		-- Normal for Statement
		if(is(self, TokenKind.Symbol, "=", 1)) then
			local forScope = Bindings:new(scope);

			local ident = expect(self, TokenKind.Ident);
			local symbol = forScope:create(ident.value, ident);

			expect(self, TokenKind.Symbol, "=");
			local initialValue = self:expression(scope);

			expect(self, TokenKind.Symbol, ",");
			local finalValue = self:expression(scope);
			local incrementBy = Ast.NumberExpression(1);
			if(consume(self, TokenKind.Symbol, ",")) then
				incrementBy = self:expression(scope);
			end

			local stat = Ast.ForStatement(symbol, initialValue, finalValue, incrementBy, nil);
			forScope:enable(symbol);
			expect(self, TokenKind.Keyword, "do");
			stat.body = self:block(nil, stat, forScope);
			expect(self, TokenKind.Keyword, "end");
			return stat;
		end

		-- For ... in ... statement
		local forScope = Bindings:new(scope);

		local symbols = self:nameList(forScope);
		expect(self, TokenKind.Keyword, "in");
		local expressions = self:exprList(scope);
		-- Enable Ids after Expression Parsing so that code like this works:
		--	local z = {10,20}
		--	for y,z in ipairs(z) do
		--		print(y, z);
		-- 	end
		self:enableNameList(forScope, symbols);
		expect(self, TokenKind.Keyword, "do");
		local stat = Ast.ForInStatement(symbols, expressions, nil);
		stat.body = self:block(nil, stat, forScope);
		expect(self, TokenKind.Keyword, "end");

		return stat;
	end

	local expr = self:primaryExpression(scope);
	-- Variable Assignment or Function Call
	if expr then
		-- Function Call Statement
		if(expr.kind == AstKind.FunctionCallExpression) then
			return Ast.FunctionCallStatement(expr.base, expr.args);
		end

		-- Function Call Statement passing self
		if(expr.kind == AstKind.PassSelfFunctionCallExpression) then
			return Ast.PassSelfFunctionCallStatement(expr.base, expr.passSelfFunctionName, expr.args);
		end

		-- Variable Assignment
		if(expr.kind == AstKind.IndexExpression or expr.kind == AstKind.VariableExpression or expr.kind == AstKind.GlobalVariableExpression) then
			if(expr.kind == AstKind.IndexExpression) then
				expr.kind = AstKind.AssignmentIndexing
			end
			if(expr.kind == AstKind.VariableExpression) then
				expr.kind = AstKind.AssignmentVariable
			elseif(expr.kind == AstKind.GlobalVariableExpression) then
				expr.kind = AstKind.AssignmentGlobalVariable
			end

			if(self.luaVersion == LuaVersion.LuaU) then
				-- LuaU Compound Assignment
				if(consume(self, TokenKind.Symbol, "+=")) then
					local rhs = self:expression(scope);
					return Ast.CompoundAddStatement(expr, rhs);
				end

				if(consume(self, TokenKind.Symbol, "-=")) then
					local rhs = self:expression(scope);
					return Ast.CompoundSubStatement(expr, rhs);
				end

				if(consume(self, TokenKind.Symbol, "*=")) then
					local rhs = self:expression(scope);
					return Ast.CompoundMulStatement(expr, rhs);
				end

				if(consume(self, TokenKind.Symbol, "/=")) then
					local rhs = self:expression(scope);
					return Ast.CompoundDivStatement(expr, rhs);
				end

				if(consume(self, TokenKind.Symbol, "%=")) then
					local rhs = self:expression(scope);
					return Ast.CompoundModStatement(expr, rhs);
				end

				if(consume(self, TokenKind.Symbol, "^=")) then
					local rhs = self:expression(scope);
					return Ast.CompoundPowStatement(expr, rhs);
				end

				if(consume(self, TokenKind.Symbol, "..=")) then
					local rhs = self:expression(scope);
					return Ast.CompoundConcatStatement(expr, rhs);
				end
			end

			local lhs = {
				expr
			}

			while consume(self, TokenKind.Symbol, ",") do
				expr = self:primaryExpression(scope);

				if(not expr) then
					if self.disableLog then error() end;
					logger:error(generateError(self, string.format("expected a valid assignment statement lhs part but got nil")));
				end

				if(expr.kind == AstKind.IndexExpression or expr.kind == AstKind.VariableExpression or expr.kind == AstKind.GlobalVariableExpression) then
					if(expr.kind == AstKind.IndexExpression) then
						expr.kind = AstKind.AssignmentIndexing
					end
					if(expr.kind == AstKind.VariableExpression) then
						expr.kind = AstKind.AssignmentVariable
					elseif(expr.kind == AstKind.GlobalVariableExpression) then
						expr.kind = AstKind.AssignmentGlobalVariable
					end
					table.insert(lhs, expr);
				else
					if self.disableLog then error() end;
					logger:error(generateError(self, string.format("expected a valid assignment statement lhs part but got <%s>", expr.kind)));
				end
			end

			expect(self, TokenKind.Symbol, "=");

			local rhs = self:exprList(scope);

			return Ast.AssignmentStatement(lhs, rhs);
		end

		if self.disableLog then error() end;
		logger:error(generateError(self, "expressions are not valid statements!"));
	end

	return nil;
end

function Parser:primaryExpression(scope)
	local i = self.index;
	local s = self;
	self.disableLog = true;
	local status, val = pcall(self.expressionFunctionCall, self, scope);
	self.disableLog = false;
	if(status) then
		return val;
	else
		self.index = i;
		return nil;
	end
end

-- List of expressions Seperated by a comma
function Parser:exprList(scope)
	local expressions = {
		self:expression(scope)
	};
	while(consume(self, TokenKind.Symbol, ",")) do
		table.insert(expressions, self:expression(scope));
	end
	return expressions;
end

-- list of local variable names
function Parser:nameList(scope)
	local symbols = {};

	local ident = expect(self, TokenKind.Ident);
	local symbol = scope:create(ident.value, ident);
	table.insert(symbols, symbol);

	while(consume(self, TokenKind.Symbol, ",")) do
		ident = expect(self, TokenKind.Ident);
		symbol = scope:create(ident.value, ident);
		table.insert(symbols, symbol);
	end

	return symbols;
end

function Parser:enableNameList(scope, list)
	for i, symbol in ipairs(list) do
		scope:enable(symbol);
	end
end


-- function name
function Parser:funcName(scope)
	local ident = expect(self, TokenKind.Ident);
	local baseName = ident.value;

	local target = scope:resolve(baseName);

	local indices = {};
	local passSelf = false;
	while(consume(self, TokenKind.Symbol, ".")) do
		table.insert(indices, expect(self, TokenKind.Ident).value);
	end

	if(consume(self, TokenKind.Symbol, ":")) then
		table.insert(indices, expect(self, TokenKind.Ident).value);
		passSelf = true;
	end

	return {
		target = target,
		indices = indices,
		passSelf = passSelf,
		token = ident,
	};
end

-- Expression
function Parser:expression(scope)
	return self:expressionOr(scope);
end

function Parser:expressionOr(scope)
	local lhs = self:expressionAnd(scope);

	if(consume(self, TokenKind.Keyword, "or")) then
		local rhs = self:expressionOr(scope);
		return Ast.OrExpression(lhs, rhs, true);
	end

	return lhs;
end

function Parser:expressionAnd(scope)
	local lhs = self:expressionComparision(scope);

	if(consume(self, TokenKind.Keyword, "and")) then
		local rhs = self:expressionAnd(scope);
		return Ast.AndExpression(lhs, rhs, true);
	end

	return lhs;
end

function Parser:expressionComparision(scope)
	local curr = self:expressionStrCat(scope);
	repeat
		local found = false;
		if(consume(self, TokenKind.Symbol, "<")) then
			local rhs = self:expressionStrCat(scope);
			curr = Ast.LessThanExpression(curr, rhs, true);
			found = true;
		end

		if(consume(self, TokenKind.Symbol, ">")) then
			local rhs = self:expressionStrCat(scope);
			curr = Ast.GreaterThanExpression(curr, rhs, true);
			found = true;
		end

		if(consume(self, TokenKind.Symbol, "<=")) then
			local rhs = self:expressionStrCat(scope);
			curr = Ast.LessThanOrEqualsExpression(curr, rhs, true);
			found = true;
		end

		if(consume(self, TokenKind.Symbol, ">=")) then
			local rhs = self:expressionStrCat(scope);
			curr = Ast.GreaterThanOrEqualsExpression(curr, rhs, true);
			found = true;
		end

		if(consume(self, TokenKind.Symbol, "~=")) then
			local rhs = self:expressionStrCat(scope);
			curr = Ast.NotEqualsExpression(curr, rhs, true);
			found = true;
		end

		if(consume(self, TokenKind.Symbol, "==")) then
			local rhs = self:expressionStrCat(scope);
			curr = Ast.EqualsExpression(curr, rhs, true);
			found = true;
		end
	until not found;

	return curr;
end

function Parser:expressionStrCat(scope)
	local lhs = self:expressionAddSub(scope);

	if(consume(self, TokenKind.Symbol, "..")) then
		local rhs = self:expressionStrCat(scope);
		return Ast.StrCatExpression(lhs, rhs, true);
	end

	return lhs;
end

function Parser:expressionAddSub(scope)
	local curr = self:expressionMulDivMod(scope);

	repeat
		local found = false;
		if(consume(self, TokenKind.Symbol, "+")) then
			local rhs = self:expressionMulDivMod(scope);
			curr = Ast.AddExpression(curr, rhs, true);
			found = true;
		end

		if(consume(self, TokenKind.Symbol, "-")) then
			local rhs = self:expressionMulDivMod(scope);
			curr = Ast.SubExpression(curr, rhs, true);
			found = true;
		end
	until not found;


	return curr;
end

function Parser:expressionMulDivMod(scope)
	local curr = self:expressionUnary(scope);

	repeat
		local found = false;
		if(consume(self, TokenKind.Symbol, "*")) then
			local rhs = self:expressionUnary(scope);
			curr = Ast.MulExpression(curr, rhs, true);
			found = true;
		end

		if(consume(self, TokenKind.Symbol, "/")) then
			local rhs = self:expressionUnary(scope);
			curr = Ast.DivExpression(curr, rhs, true);
			found = true;
		end

		if(consume(self, TokenKind.Symbol, "%")) then
			local rhs = self:expressionUnary(scope);
			curr = Ast.ModExpression(curr, rhs, true);
			found = true;
		end
	until not found;

	return curr;
end

function Parser:expressionUnary(scope)
	if(consume(self, TokenKind.Keyword, "not")) then
		local rhs = self:expressionUnary(scope);
		return Ast.NotExpression(rhs, true);
	end

	if(consume(self, TokenKind.Symbol, "#")) then
		local rhs = self:expressionUnary(scope);
		return Ast.LenExpression(rhs, true);
	end

	if(consume(self, TokenKind.Symbol, "-")) then
		local rhs = self:expressionUnary(scope);
		return Ast.NegateExpression(rhs, true);
	end

	return self:expressionPow(scope);
end

function Parser:expressionPow(scope)
	local lhs = self:tableOrFunctionLiteral(scope);

	if(consume(self, TokenKind.Symbol, "^")) then
		-- Allow unary operators on the rhs (e.g. 2 ^ #x, 2 ^ -x) while preserving right-associativity. ~ SpinnySpiwal
		local rhs = self:expressionUnary(scope);
		return Ast.PowExpression(lhs, rhs, true);
	end

	return lhs;
end

-- Table Literals and Function Literals cannot directly be called or indexed
function Parser:tableOrFunctionLiteral(scope)

	if(is(self, TokenKind.Symbol, "{")) then
		return self:tableConstructor(scope);
	end

	if(is(self, TokenKind.Keyword, "function")) then
		return self:expressionFunctionLiteral(scope);
	end

	return self:expressionFunctionCall(scope);
end

function Parser:expressionFunctionLiteral(parentScope)
	local scope = Bindings:new(parentScope);

	expect(self, TokenKind.Keyword, "function");

	expect(self, TokenKind.Symbol, "(");
	local args = self:functionArgList(scope);
	expect(self, TokenKind.Symbol, ")");

	local body = self:block(nil, false, scope);
	expect(self, TokenKind.Keyword, "end");

	return Ast.FunctionLiteralExpression(args, body);
end

function Parser:functionArgList(scope)
	local args = {};
	if(consume(self, TokenKind.Symbol, "...")) then
		table.insert(args, Ast.VarargExpression());
		return args;
	end

	if(is(self, TokenKind.Ident)) then
		local ident = get(self);
		local name = ident.value;

		local symbol = scope:declare(name, ident);
		table.insert(args, Ast.VariableExpression(symbol));

		while(consume(self, TokenKind.Symbol, ",")) do
			if(consume(self, TokenKind.Symbol, "...")) then
				table.insert(args, Ast.VarargExpression());
				return args;
			end

			ident = get(self);
			name = ident.value;

			symbol = scope:declare(name, ident);
			table.insert(args, Ast.VariableExpression(symbol));
		end
	end

	return args;
end

function Parser:expressionFunctionCall(scope, base)
	base = base or self:expressionIndex(scope);

	if(not (base and (CALLABLE_PREFIX_EXPRESSION_LOOKUP[base.kind] or base.isParenthesizedExpression))) then
		return base;
	end

	-- Normal Function Call
	local args = {};
	if(is(self, TokenKind.String)) then
		args = {
			Ast.StringExpression(get(self).value),
		};
	elseif(is(self, TokenKind.Symbol, "{")) then
		args = {
			self:tableConstructor(scope),
		};
	elseif(consume(self, TokenKind.Symbol, "(")) then
		if(not is(self, TokenKind.Symbol, ")")) then
			args = self:exprList(scope);
		end
		expect(self, TokenKind.Symbol, ")");
	else
		return base;
	end

	local node = Ast.FunctionCallExpression(base, args);

	-- the result of a function call can be indexed
	if(is(self, TokenKind.Symbol, ".") or is(self, TokenKind.Symbol, "[") or is(self, TokenKind.Symbol, ":")) then
		return self:expressionIndex(scope, node);
	end

	-- The result of a function call can be a function that is again called
	if(is(self, TokenKind.Symbol, "(") or is(self, TokenKind.Symbol, "{") or is(self, TokenKind.String)) then
		return self:expressionFunctionCall(scope, node);
	end

	return node;
end

function Parser:expressionIndex(scope, base)
	base = base or self:expressionLiteral(scope);

	-- Parse Indexing Expressions
	while(consume(self, TokenKind.Symbol, "[")) do
		local expr = self:expression(scope);
		expect(self, TokenKind.Symbol, "]");
		base = Ast.IndexExpression(base, expr);
	end

	-- Parse Indexing Expressions
	while consume(self, TokenKind.Symbol, ".") do
		local ident = expect(self, TokenKind.Ident);
		base = Ast.IndexExpression(base, Ast.StringExpression(ident.value));

		while(consume(self, TokenKind.Symbol, "[")) do
			local expr = self:expression(scope);
			expect(self, TokenKind.Symbol, "]");
			base = Ast.IndexExpression(base, expr);
		end
	end

	-- Function Passing self
	if(consume(self, TokenKind.Symbol, ":")) then
		local passSelfFunctionName = expect(self, TokenKind.Ident).value;
		local args = {};
		if(is(self, TokenKind.String)) then
			args = {
				Ast.StringExpression(get(self).value),
			};
		elseif(is(self, TokenKind.Symbol, "{")) then
			args = {
				self:tableConstructor(scope),
			};
		else
			expect(self, TokenKind.Symbol, "(");
			if(not is(self, TokenKind.Symbol, ")")) then
				args = self:exprList(scope);
			end
			expect(self, TokenKind.Symbol, ")");
		end

		local node = Ast.PassSelfFunctionCallExpression(base, passSelfFunctionName, args);

		-- the result of a function call can be indexed
		if(is(self, TokenKind.Symbol, ".") or is(self, TokenKind.Symbol, "[") or is(self, TokenKind.Symbol, ":")) then
			return self:expressionIndex(scope, node);
		end

		-- The result of a function call can be a function that is again called
		if(is(self, TokenKind.Symbol, "(") or is(self, TokenKind.Symbol, "{") or is(self, TokenKind.String)) then
			return self:expressionFunctionCall(scope, node);
		end

		return node
	end

	-- The result of a function call can be a function that is again called
	if(is(self, TokenKind.Symbol, "(") or is(self, TokenKind.Symbol, "{") or is(self, TokenKind.String)) then
		return self:expressionFunctionCall(scope, base);
	end

	return base;
end

function Parser:expressionLiteral(scope)
	-- () expression
	if(consume(self, TokenKind.Symbol, "(")) then
		local expr = self:expression(scope);
		expect(self, TokenKind.Symbol, ")");
		if expr then
			expr.isParenthesizedExpression = true;
		end
		return expr;
	end

	-- String Literal
	if(is(self, TokenKind.String)) then
		return Ast.StringExpression(get(self).value);
	end

	-- Number Literal
	if(is(self, TokenKind.Number)) then
		return Ast.NumberExpression(get(self).value);
	end

	-- True Literal
	if(consume(self, TokenKind.Keyword, "true")) then
		return Ast.BooleanExpression(true);
	end

	-- False Literal
	if(consume(self, TokenKind.Keyword, "false")) then
		return Ast.BooleanExpression(false);
	end

	-- Nil Literal
	if(consume(self, TokenKind.Keyword, "nil")) then
		return Ast.NilExpression();
	end

	-- Vararg Literal
	if(consume(self, TokenKind.Symbol, "...")) then
		return Ast.VarargExpression();
	end

	-- Variable
	if(is(self, TokenKind.Ident)) then
		local ident = get(self);
		local name = ident.value;

		return scope:resolve(name);
	end

	-- IfElse
	if(LuaVersion.LuaU) then
		if(consume(self, TokenKind.Keyword, "if")) then
			local condition = self:expression(scope);
			expect(self, TokenKind.Keyword, "then");
			local true_value = self:expression(scope);

			local elseifs = {}
			while(consume(self, TokenKind.Keyword, "elseif")) do
				local elseif_condition = self:expression(scope);
				expect(self, TokenKind.Keyword, "then");
				local elseif_value = self:expression(scope);

				table.insert(elseifs, {
					condition = elseif_condition,
					value = elseif_value
				});
			end

			expect(self, TokenKind.Keyword, "else");
			local false_value = self:expression(scope);

			return Ast.IfElseExpression(condition, true_value, elseifs, false_value);
		end
	end

	if(self.disableLog) then error() end
	logger:error(generateError(self, "Unexpected Token \\"" .. peek(self).source .. "\\". Expected a Expression!"))
end

function Parser:tableConstructor(scope)
	-- TODO: Parse Table Literals
	local entries = {};

	expect(self, TokenKind.Symbol, "{");

	while (not consume(self, TokenKind.Symbol, "}")) do
		if(consume(self, TokenKind.Symbol, "[")) then
			local key = self:expression(scope);
			expect(self, TokenKind.Symbol, "]");
			expect(self, TokenKind.Symbol, "=");
			local value = self:expression(scope);
			table.insert(entries, Ast.KeyedTableEntry(key, value));
		elseif(is(self, TokenKind.Ident, 0) and is(self, TokenKind.Symbol, "=", 1)) then
			local key = Ast.StringExpression(get(self).value);
			expect(self, TokenKind.Symbol, "=");
			local value = self:expression(scope);
			table.insert(entries, Ast.KeyedTableEntry(key, value));
		else
			local value = self:expression(scope);
			table.insert(entries, Ast.TableEntry(value));
		end


		if (not consume(self, TokenKind.Symbol, ";") and not consume(self, TokenKind.Symbol, ",") and not is(self, TokenKind.Symbol, "}")) then
			if self.disableLog then error() end
			logger:error(generateError(self, "expected a \\";\\" or a \\",\\""));
		end
	end

	return Ast.TableConstructorExpression(entries);
end

return Parser
`,"prometheus-src/prometheus/pipeline.lua":`-- This Script is Part of the Prometheus Obfuscator by levno-710
--
-- pipeline.lua
--
-- This Script provides a configurable obfuscation pipeline that can obfuscate code using different modules
-- These modules can simply be added to the pipeline.

local Enums = require("prometheus.enums");
local util = require("prometheus.util");
local Parser = require("prometheus.parser");
local analyzeBindings = require("prometheus.bindinganalysis");
local renameVariables = require("prometheus.names");
local Unparser = require("prometheus.unparser");
local logger = require("logger");

local NameGenerators = require("prometheus.namegenerators");

local Steps = require("prometheus.steps");
local LuaVersion = Enums.LuaVersion;

-- On Windows, os.clock can be used. On other systems, os.time must be used for benchmarking.
local isWindows = package and package.config and type(package.config) == "string" and package.config:sub(1,1) == "\\\\";
local function gettime()
	if isWindows then
		return os.clock();
	else
		return os.time();
	end
end

local Pipeline = {
	NameGenerators = NameGenerators;
	Steps = Steps;
	DefaultSettings = {
		LuaVersion = LuaVersion.LuaU; -- The Lua Version to use for the Tokenizer, Parser and Unparser
		PrettyPrint = false; -- Note that Pretty Print is currently not producing Pretty results
		Seed = 0; -- The Seed. 0 or below uses the current time as a seed
		VarNamePrefix = ""; -- The Prefix that every variable will start with
	}
}


function Pipeline:new(settings)
	local luaVersion = settings.luaVersion or settings.LuaVersion or Pipeline.DefaultSettings.LuaVersion;
	local conventions = Enums.Conventions[luaVersion];
	if(not conventions) then
		logger:error("The Lua Version \\"" .. luaVersion
			.. "\\" is not recognized by the Tokenizer! Please use one of the following: \\"" .. table.concat(util.keys(Enums.Conventions), "\\",\\"") .. "\\"");
	end

	local prettyPrint = settings.PrettyPrint or Pipeline.DefaultSettings.PrettyPrint;
	local prefix = settings.VarNamePrefix or Pipeline.DefaultSettings.VarNamePrefix;
	local seed = settings.Seed or 0;

	local pipeline = {
		LuaVersion = luaVersion;
		PrettyPrint = prettyPrint;
		VarNamePrefix = prefix;
		Seed = seed;
		parser = Parser:new({
			LuaVersion = luaVersion;
		});
		unparser = Unparser:new({
			LuaVersion = luaVersion;
			PrettyPrint = prettyPrint;
			Highlight = settings.Highlight;
		});
		namegenerator = Pipeline.NameGenerators.MangledShuffled;
		conventions = conventions;
		steps = {};
	}

	setmetatable(pipeline, self);
	self.__index = self;

	return pipeline;
end

function Pipeline:fromConfig(config)
	config = config or {};
	local pipeline = Pipeline:new({
		LuaVersion = config.LuaVersion or LuaVersion.Lua51;
		PrettyPrint = config.PrettyPrint or false;
		VarNamePrefix = config.VarNamePrefix or "";
		Seed = config.Seed or 0;
	});

	pipeline:setNameGenerator(config.NameGenerator or "MangledShuffled")

	-- Add all Steps defined in Config
	local steps = config.Steps or {};
	for i, step in ipairs(steps) do
		if type(step.Name) ~= "string" then
			logger:error("Step.Name must be a String");
		end
		local constructor = pipeline.Steps[step.Name];
		if not constructor then
			logger:error(string.format("The Step \\"%s\\" was not found!", step.Name));
		end
		pipeline:addStep(constructor:new(step.Settings or {}));
	end

	return pipeline;
end

function Pipeline:addStep(step)
	table.insert(self.steps, step);
end

function Pipeline:resetSteps(_)
	self.steps = {};
end

function Pipeline:getSteps()
	return self.steps;
end

function Pipeline:setOption(name, _)
	assert(false, "TODO");
	if(Pipeline.DefaultSettings[name] ~= nil) then

	else
		logger:error(string.format("\\"%s\\" is not a valid setting"));
	end
end

function Pipeline:setLuaVersion(luaVersion)
	local conventions = Enums.Conventions[luaVersion];
	if(not conventions) then
		logger:error("The Lua Version \\"" .. luaVersion
			.. "\\" is not recognized by the Tokenizer! Please use one of the following: \\"" .. table.concat(util.keys(Enums.Conventions), "\\",\\"") .. "\\"");
	end

	self.parser = Parser:new({
		luaVersion = luaVersion;
	});
	self.unparser = Unparser:new({
		LuaVersion = luaVersion;
	});
	self.conventions = conventions;
end

function Pipeline:getLuaVersion()
	return self.luaVersion;
end

function Pipeline:setNameGenerator(nameGenerator)
	if(type(nameGenerator) == "string") then
		nameGenerator = Pipeline.NameGenerators[nameGenerator];
	end

	if(type(nameGenerator) == "function" or type(nameGenerator) == "table") then
		self.namegenerator = nameGenerator;
		return;
	else
		logger:error("The Argument to Pipeline:setNameGenerator must be a valid NameGenerator function or function name e.g: \\"mangled\\"")
	end
end

function Pipeline:apply(code, filename)
	local startTime = gettime();
	filename = filename or "Anonymous Script";
	logger:info(string.format("Applying Obfuscation Pipeline to %s ...", filename));

	-- Seed the Random Generator
	if(self.Seed > 0) then
		math.randomseed(self.Seed);
	else
		--> use secure random number generator
		local success, seed = pcall(function()
			if not io or not io.popen then
				error("io.popen is unavailable")
			end
			local handle = io.popen("openssl rand -hex 12")
			if not handle then
				error("Failed to execute openssl")
			end
			local seedStr = handle:read("*a")
			local ok = handle:close()
			if ok == false or ok == nil then
				error("openssl command failed")
			end
			if not seedStr then
				error("Failed to read from openssl")
			end
			seedStr = seedStr:gsub("%s+", "")
			if #seedStr ~= 24 or not seedStr:match("^%x+$") then
				error("Invalid openssl output")
			end

			local seedNum = 0;

			--> NOTE: accumulate modulo 2147483647 so it fits in signed 32-bit integer without double overflow
			for i = 1, #seedStr do
				local char = seedStr:sub(i, i):lower()
				local digit = char:match("%d") and (char:byte() - 48) or (char:byte() - 87)
				seedNum = (seedNum * 16 + digit) % 2147483647
			end

			if seedNum == 0 then
				seedNum = 1
			end

			return seedNum
		end)

		if success then
			math.randomseed(seed)
		else
			logger:warn("OpenSSL is unavailable. Falling back to unix time.");
			local now = (os and os.time) and os.time() or 1
			local clock = (os and os.clock) and math.floor(os.clock() * 1000000) or 0
			local fallback = (now + clock) % 2147483647
			if fallback == 0 then
				fallback = 1
			end
			math.randomseed(fallback)
		end
	end

	logger:info("Parsing ...");
	local parserStartTime = gettime();

	local sourceLen = string.len(code);
	local ast = self.parser:parse(code);

	local parserTimeDiff = gettime() - parserStartTime;
	logger:info(string.format("Parsing Done in %.2f seconds", parserTimeDiff));

	-- User Defined Steps
	for i, step in ipairs(self.steps) do
		local stepStartTime = gettime();
		logger:info(string.format("Applying Step \\"%s\\" ...", step.Name or "Unnamed"));
		local newAst = step:apply(ast, self);
		if type(newAst) == "table" then
			ast = newAst;
		end
		analyzeBindings(ast);
		logger:info(string.format("Step \\"%s\\" Done in %.2f seconds", step.Name or "Unnamed", gettime() - stepStartTime));
	end

	-- Rename Variables Step
	self:renameVariables(ast);

	code = self:unparse(ast);

	local timeDiff = gettime() - startTime;
	logger:info(string.format("Obfuscation Done in %.2f seconds", timeDiff));

	logger:info(string.format("Generated Code size is %.2f%% of the Source Code size", (string.len(code) / sourceLen)*100))

	return code;
end

function Pipeline:unparse(ast)
	local startTime = gettime();
	logger:info("Generating Code ...");

	local unparsed = self.unparser:unparse(ast);

	local timeDiff = gettime() - startTime;
	logger:info(string.format("Code Generation Done in %.2f seconds", timeDiff));

	return unparsed;
end

function Pipeline:renameVariables(ast)
	analyzeBindings(ast);
	local startTime = gettime();
	logger:info("Renaming Variables ...");


	local generatorFunction = self.namegenerator or Pipeline.NameGenerators.mangled;
	if(type(generatorFunction) == "table") then
		if (type(generatorFunction.prepare) == "function") then
			generatorFunction.prepare(ast);
		end
		generatorFunction = generatorFunction.generateName;
	end

	if not self.unparser:isValidIdentifier(self.VarNamePrefix) and #self.VarNamePrefix ~= 0 then
		logger:error(string.format("The Prefix \\"%s\\" is not a valid Identifier in %s", self.VarNamePrefix, self.LuaVersion));
	end

	renameVariables(ast, {
		Keywords = self.conventions.Keywords;
		generateName = generatorFunction;
		prefix = self.VarNamePrefix;
	});

	local timeDiff = gettime() - startTime;
	logger:info(string.format("Renaming Done in %.2f seconds", timeDiff));
end

return Pipeline;
`,"prometheus-src/prometheus/randomLiterals.lua":`-- This Script is Part of the Prometheus Obfuscator by levno-710
--
-- randomLiterals.lua
--
-- This Script provides a library for creating random literals

local Ast = require("prometheus.ast");
local RandomStrings = require("prometheus.randomStrings");

local RandomLiterals = {};

local function callNameGenerator(generatorFunction, ...)
	if(type(generatorFunction) == "table") then
		generatorFunction = generatorFunction.generateName;
	end
	return generatorFunction(...);
end

function RandomLiterals.String(pipeline)
    return Ast.StringExpression(callNameGenerator(pipeline.namegenerator, math.random(1, 4096)));
end

function RandomLiterals.Dictionary()
    return RandomStrings.randomStringNode(true);
end

function RandomLiterals.Number()
    return Ast.NumberExpression(math.random(-8388608, 8388607));
end

function RandomLiterals.Any(pipeline)
    local type = math.random(1, 3);
    if type == 1 then
        return RandomLiterals.String(pipeline);
    elseif type == 2 then
        return RandomLiterals.Number();
    elseif type == 3 then
        return RandomLiterals.Dictionary();
    end
end


return RandomLiterals;`,"prometheus-src/prometheus/randomStrings.lua":`-- This Script is Part of the Prometheus Obfuscator by levno-710
--
-- randomStrings.lua
--
-- This Script provides a library for generating random strings

local Ast = require("prometheus.ast")
local utils = require("prometheus.util")
local charset = utils.chararray("qwertyuiopasdfghjklzxcvbnmQWERTYUIOPASDFGHJKLZXCVBNM1234567890")

local function randomString(wordsOrLen)
	if type(wordsOrLen) == "table" then
		return wordsOrLen[math.random(1, #wordsOrLen)];
	end

	wordsOrLen = wordsOrLen or math.random(2, 15);
	if wordsOrLen > 0 then
		return randomString(wordsOrLen - 1) .. charset[math.random(1, #charset)]
	else
		return ""
	end
end

local function randomStringNode(wordsOrLen)
	return Ast.StringExpression(randomString(wordsOrLen))
end

return {
	randomString = randomString,
	randomStringNode = randomStringNode,
}
`,"prometheus-src/prometheus/step.lua":`-- This Script is Part of the Prometheus Obfuscator by levno-710
--
-- step.lua
--
-- This Script provides the base class for Obfuscation Steps

local logger = require("logger");
local util = require("prometheus.util");

local lookupify = util.lookupify;

local Step = {};

Step.SettingsDescriptor = {}

function Step:new(settings)
	local instance = {};
	setmetatable(instance, self);
	self.__index = self;

	if type(settings) ~= "table" then
		settings = {};
	end

	for key, data in pairs(self.SettingsDescriptor) do
		local settingValue = settings[key];
		if settingValue == nil and type(data.aliases) == "table" then
			for _, alias in ipairs(data.aliases) do
				if settings[alias] ~= nil then
					settingValue = settings[alias];
					break;
				end
			end
		end

		if settingValue == nil then
			if data.default == nil then
				logger:error(string.format("The Setting \\"%s\\" was not provided for the Step \\"%s\\"", key, self.Name));
			end
			instance[key] = data.default;
		elseif(data.type == "enum") then
			local lookup = lookupify(data.values);
			if not lookup[settingValue] then
				logger:error(string.format("Invalid value for the Setting \\"%s\\" of the Step \\"%s\\". It must be one of the following: %s", key, self.Name, table.concat(data, ", ")));
			end
			instance[key] = settingValue;
		elseif(type(settingValue) ~= data.type) then
			logger:error(string.format("Invalid value for the Setting \\"%s\\" of the Step \\"%s\\". It must be a %s", key, self.Name, data.type));
		else
			if data.min then
				if  settingValue < data.min then
					logger:error(string.format("Invalid value for the Setting \\"%s\\" of the Step \\"%s\\". It must be at least %d", key, self.Name, data.min));
				end
			end

			if data.max then
				if  settingValue > data.max then
					logger:error(string.format("Invalid value for the Setting \\"%s\\" of the Step \\"%s\\". The biggest allowed value is %d", key, self.Name, data.max));
				end
			end

			instance[key] = settingValue;
		end
	end

	instance:init();

	return instance;
end

function Step:init()
	logger:error("Abstract Steps cannot be Created");
end

function Step:extend()
	local ext = {};
	setmetatable(ext, self);
	self.__index = self;
	return ext;
end

function Step:apply(ast, pipeline)
	logger:error("Abstract Steps cannot be Applied")
end

Step.Name = "Abstract Step";
Step.Description = "Abstract Step";

return Step;
`,"prometheus-src/prometheus/steps.lua":`-- This Script is Part of the Prometheus Obfuscator by levno-710
--
-- steps.lua
--
-- This Script provides a collection of obfuscation steps.

local Cff = require("prometheus.steps.Cff");

return {
	WrapInFunction = require("prometheus.steps.WrapInFunction"),
	SplitStrings = require("prometheus.steps.SplitStrings"),
	Cff = Cff,
	ControlFlowFlattening = Cff,
	Vmify = require("prometheus.steps.Vmify"),
	ConstantArray = require("prometheus.steps.ConstantArray"),
	ProxifyLocals = require("prometheus.steps.ProxifyLocals"),
	AntiTamper = require("prometheus.steps.AntiTamper"),
	EncryptStrings = require("prometheus.steps.EncryptStrings"),
	NumbersToExpressions = require("prometheus.steps.NumbersToExpressions"),
	AddVararg = require("prometheus.steps.AddVararg"),
	WatermarkCheck = require("prometheus.steps.WatermarkCheck"),
}
`,"prometheus-src/prometheus/steps/AddVararg.lua":`-- This Script is Part of the Prometheus Obfuscator by levno-710
--
-- AddVararg.lua
--
-- This Script provides a Simple Obfuscation Step that wraps the entire Script into a function

local Step = require("prometheus.step");
local Ast = require("prometheus.ast");
local visitast = require("prometheus.visitast");
local AstKind = Ast.AstKind;

local AddVararg = Step:extend();
AddVararg.Description = "This Step Adds Vararg to all Functions";
AddVararg.Name = "Add Vararg";

AddVararg.SettingsDescriptor = {}

function AddVararg:init(_) end

function AddVararg:apply(ast)
	visitast(ast, nil, function(node)
        if node.kind == AstKind.FunctionDeclaration or node.kind == AstKind.LocalFunctionDeclaration or node.kind == AstKind.FunctionLiteralExpression then
            if #node.args < 1 or node.args[#node.args].kind ~= AstKind.VarargExpression then
                node.args[#node.args + 1] = Ast.VarargExpression();
            end
        end
    end)
end

return AddVararg;`,"prometheus-src/prometheus/steps/AntiTamper.lua":`-- This Script is Part of the Prometheus Obfuscator by levno-710
--
-- AntiTamper.lua
--
-- This Script provides an Obfuscation Step, that breaks the script, when someone tries to tamper with it.

local Step = require("prometheus.step")
local RandomStrings = require("prometheus.randomStrings")
local Parser = require("prometheus.parser")
local Enums = require("prometheus.enums")
local logger = require("logger")

local AntiTamper = Step:extend()
AntiTamper.Description = "This Step Breaks your Script when it is modified. This is only effective when using the new VM."
AntiTamper.Name = "Anti Tamper"

AntiTamper.SettingsDescriptor = {
	UseDebug = {
		type = "boolean",
		default = true,
		description = "Use debug library. (Recommended, however scripts will not work without debug library.)",
	},
}

local function generateSanityCheck()
	local sanityCheckAnswers = {}
	local sanityPasses = math.random(1, 10)
	for i = 1, sanityPasses do
		sanityCheckAnswers[i] = (math.random(1, 2 ^ 24) % 2 == 1)
	end
	local primaryCheck = RandomStrings.randomString()
	local codeParts = {}
	local function addCode(fmt, ...)
		table.insert(codeParts, string.format(fmt, ...))
	end

	local function generateAssignment(idx)
		local index = math.min(idx, sanityPasses)
		addCode("            valid = %s;\\n", tostring(sanityCheckAnswers[index]))
	end
	local function generateValidation(idx)
		local index = math.min(idx - 1, sanityPasses)
		addCode("            if valid == %s then\\n", tostring(sanityCheckAnswers[index]))
		addCode("            else\\n")
		addCode("                while true do end\\n")
		addCode("            end\\n")
	end

	addCode("do local valid = '%s';", primaryCheck)
	addCode("for i = 0, %d do\\n", sanityPasses)
	for i = 0, sanityPasses do
		if i == 0 then
			addCode("        if i == 0 then\\n")
			addCode("            if valid ~= '%s' then\\n", primaryCheck)
			addCode("                while true do end\\n")
			addCode("            end\\n")
			addCode("            valid = %s;\\n", tostring(sanityCheckAnswers[1]))
		elseif i == 1 then
			addCode("        elseif i == 1 then\\n")
			addCode("            if valid == %s then\\n", tostring(sanityCheckAnswers[1]))
			addCode("            end\\n")
		else
			addCode("        elseif i == %d then\\n", i)

			--[[
                Basically, even iterations are used to assign a new sanity check value,
                and odd iterations are used to validate the previous sanity check value.
            ]]
			if i % 2 == 0 then
				generateAssignment(i)
			else
				generateValidation(i)
			end
		end
	end
	addCode("        end\\n")
	addCode("    end\\n")
	addCode("do valid = true end\\n")
	return table.concat(codeParts)
end

function AntiTamper:init(settings) end

function AntiTamper:apply(ast, pipeline)
	if pipeline.PrettyPrint then
		logger:warn(string.format('"%s" cannot be used with PrettyPrint, ignoring "%s"', self.Name, self.Name))
		return ast
	end
	local code = generateSanityCheck()
	if self.UseDebug then
		local string = RandomStrings.randomString()
		code = code
			.. [[
            -- Anti Beautify
			local sethook = debug and debug.sethook or function() end;
			local allowedLine = nil;
			local called = 0;
			sethook(function(s, line)
				if not line then
					return
				end
				called = called + 1;
				if allowedLine then
					if allowedLine ~= line then
						sethook(error, "l", 5);
					end
				else
					allowedLine = line;
				end
			end, "l", 5);
			(function() end)();
			(function() end)();
			sethook();
			if called < 2 then
				valid = false;
			end
            if called < 2 then
                valid = false;
            end

            -- Anti Function Hook
            local funcs = {pcall, string.char, debug.getinfo, string.dump}
            for i = 1, #funcs do
                if debug.getinfo(funcs[i]).what ~= "C" then
                    valid = false;
                end

                if debug.getupvalue(funcs[i], 1) then
                    valid = false;
                end

                if pcall(string.dump, funcs[i]) then
                    valid = false;
                end
            end

            -- Anti Beautify
            local function getTraceback()
                local str = (function(arg)
                    return debug.traceback(arg)
                end)("]] .. string .. [[");
                return str;
            end

            local traceback = getTraceback();
            valid = valid and traceback:sub(1, traceback:find("\\n") - 1) == "]] .. string .. [[";
            local iter = traceback:gmatch(":(%d*):");
            local v, c = iter(), 1;
            for i in iter do
                valid = valid and i == v;
                c = c + 1;
            end
            valid = valid and c >= 2;
        ]]
    end
    code = code .. [[
    local gmatch = string.gmatch;
    local err = function() error("Tamper Detected!") end;

    local pcallIntact2 = false;
    local pcallIntact = pcall(function()
        pcallIntact2 = true;
    end) and pcallIntact2;

    local random = math.random;
    local tblconcat = table.concat;
    local unpkg = table and table.unpack or unpack;
    local n = random(3, 65);
    local acc1 = 0;
    local acc2 = 0;
    local pcallRet = {pcall(function() local a = ]] .. tostring(math.random(1, 2^24)) .. [[ - "]] .. RandomStrings.randomString() .. [[" ^ ]] .. tostring(math.random(1, 2^24)) .. [[ return "]] .. RandomStrings.randomString() .. [[" / a; end)};
    local origMsg = pcallRet[2];
    local line = tonumber(gmatch(tostring(origMsg), ':(%d*):')());
    for i = 1, n do
        local len = math.random(1, 100);
        local n2 = random(0, 255);
        local pos = random(1, len);
        local shouldErr = random(1, 2) == 1;
        local msg = origMsg:gsub(':(%d*):', ':' .. tostring(random(0, 10000)) .. ':');
        local arr = {pcall(function()
            if random(1, 2) == 1 or i == n then
                local line2 = tonumber(gmatch(tostring(({pcall(function() local a = ]] .. tostring(math.random(1, 2^24)) .. [[ - "]] .. RandomStrings.randomString() .. [[" ^ ]] .. tostring(math.random(1, 2^24)) .. [[ return "]] .. RandomStrings.randomString() .. [[" / a; end)})[2]), ':(%d*):')());
                valid = valid and line == line2;
            end
            if shouldErr then
                error(msg, 0);
            end
            local arr = {};
            for i = 1, len do
                arr[i] = random(0, 255);
            end
            arr[pos] = n2;
            return unpkg(arr);
        end)};
        if shouldErr then
            valid = valid and arr[1] == false and arr[2] == msg;
        else
            valid = valid and arr[1];
            acc1 = (acc1 + arr[pos + 1]) % 256;
            acc2 = (acc2 + n2) % 256;
        end
    end
    valid = valid and acc1 == acc2;

    if valid then else
        repeat
            return (function()
                while true do
                    l1, l2 = l2, l1;
                    err();
                end
            end)();
        until true;
        while true do
            l2 = random(1, 6);
            if l2 > 2 then
                l2 = tostring(l1);
            else
                l1 = l2;
            end
        end
        return;
    end
end

    -- Anti Function Arg Hook
    local obj = setmetatable({}, {
        __tostring = err,
    });
    obj[math.random(1, 100)] = obj;
    (function() end)(obj);

    repeat until valid;
    ]]

    local parsed = Parser:new({LuaVersion = Enums.LuaVersion.Lua51}):parse(code);
    local doStat = parsed.body.statements[1];
    table.insert(ast.body.statements, 1, doStat);

    return ast;
end

return AntiTamper;
`,"prometheus-src/prometheus/steps/Cff.lua":`-- This Script is Part of the Prometheus Obfuscator by levno-710
--
-- Cff.lua
--
-- Compile the script into Lua statements executed by a randomized block dispatcher.

local Step = require("prometheus.step");
local Compiler = require("prometheus.cff.compiler");
local flattenVm = require("prometheus.vm.flatten");
local shareStrings = require("prometheus.cff.strings");

local Cff = Step:extend();
Cff.Description = "Flattens control flow into Lua statements executed by a randomized block dispatcher.";
Cff.Name = "Cff";

Cff.SettingsDescriptor = {
    ExcludeVm = {type = "boolean", default = false},
}

function Cff:init(_) end

function Cff:apply(ast)
    if self.ExcludeVm and ast.vmRuntime then
        local compiler = Compiler:new();
        compiler.nativeExpressions = {[ast.vmRuntime] = true};
        if ast.vmData then compiler.nativeExpressions[ast.vmData] = true; end
        local flattened = compiler:compile(ast);
        flattened.vmRuntime = compiler.nativeResults[ast.vmRuntime];
        flattened.vmData = compiler.nativeResults[ast.vmData];
        return shareStrings(flattened);
    end
    if ast.vmRuntime then
        local flattened = flattenVm(ast);
        if flattened then return shareStrings(flattened); end
    end
	local compiler = Compiler:new();

    return shareStrings(compiler:compile(ast));
end

return Cff;
`,"prometheus-src/prometheus/steps/ConstantArray.lua":`-- This Script is Part of the Prometheus Obfuscator by levno-710
--
-- ConstantArray.lua
--
-- This Script provides a Simple Obfuscation Step that wraps the entire Script into a function

-- TODO: Wrapper Functions
-- TODO: Proxy Object for indexing: e.g: ARR[X] becomes ARR + X

local Step = require("prometheus.step");
local Ast = require("prometheus.ast");
local visitast = require("prometheus.visitast");
local util = require("prometheus.util")
local Parser = require("prometheus.parser");
local enums = require("prometheus.enums")

local LuaVersion = enums.LuaVersion;
local AstKind = Ast.AstKind;

local ConstantArray = Step:extend();
ConstantArray.Description = "This Step will Extract all Constants and put them into an Array at the beginning of the script";
ConstantArray.Name = "Constant Array";

ConstantArray.SettingsDescriptor = {
	Threshold = {
		name = "Threshold",
		description = "The relative amount of nodes that will be affected",
		type = "number",
		default = 1,
		min = 0,
		max = 1,
		aliases = { "Treshold" },
	},
	StringsOnly = {
		name = "StringsOnly",
		description = "Wether to only Extract Strings",
		type = "boolean",
		default = false,
	},
	Shuffle = {
		name = "Shuffle",
		description = "Wether to shuffle the order of Elements in the Array",
		type = "boolean",
		default = true,
	},
	Rotate = {
		name = "Rotate",
		description = "Wether to rotate the String Array by a specific (random) amount. This will be undone on runtime.",
		type = "boolean",
		default = true,
	},
	LocalWrapperThreshold = {
		name = "LocalWrapperThreshold",
		description = "The relative amount of nodes functions, that will get local wrappers",
		type = "number",
		default = 1,
		min = 0,
		max = 1,
		aliases = { "LocalWrapperTreshold" },
	},
	LocalWrapperCount = {
		name = "LocalWrapperCount",
		description = "The number of Local wrapper Functions per scope. This only applies if LocalWrapperThreshold is greater than 0",
		type = "number",
		min = 0,
		max = 512,
		default = 0,
	},
	LocalWrapperArgCount = {
		name = "LocalWrapperArgCount",
		description = "The number of Arguments to the Local wrapper Functions",
		type = "number",
		min = 1,
		default = 10,
		max = 200,
	};
	MaxWrapperOffset = {
		name = "MaxWrapperOffset",
		description = "The Max Offset for the Wrapper Functions",
		type = "number",
		min = 0,
		default = 65535,
	};
	Encoding = {
		name = "Encoding",
		description = "The Encoding to use for the Strings",
		type = "enum",
		default = "mixed",
		values = {
			"none",
			"base64",
			"base85",
			"mixed",
		},
	}
}

local prefix_0, prefix_1;
local function initPrefixes()
	local charset = "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz!@\xA3$%^&*()_+-=[]{}|:;<>,./?";
	repeat
		local a, b = math.random(1, #charset), math.random(1, #charset);
		prefix_0 = charset:sub(a, a);
		prefix_1 = charset:sub(b, b);
	until prefix_0 ~= prefix_1
end

local function callNameGenerator(generatorFunction, ...)
	if(type(generatorFunction) == "table") then
		generatorFunction = generatorFunction.generateName;
	end
	return generatorFunction(...);
end

function ConstantArray:init(_) end

function ConstantArray:createArray()
	local entries = {};
	for i, v in ipairs(self.constants) do
		if type(v) == "string" then
			v = self:encode(v);
		end
		entries[i] = Ast.TableEntry(Ast.ConstantNode(v));
	end
	return Ast.TableConstructorExpression(entries);
end

function ConstantArray:indexing(index, data)
	if self.LocalWrapperCount > 0 and data.functionData.local_wrappers then
		local wrappers = data.functionData.local_wrappers;
		local wrapper = wrappers[math.random(#wrappers)];

		local args = {};
		local ofs = index - self.wrapperOffset - wrapper.offset;
		for i = 1, self.LocalWrapperArgCount, 1 do
			if i == wrapper.arg then
				args[i] = Ast.NumberExpression(ofs);
			else
				args[i] = Ast.NumberExpression(math.random(ofs - 1024, ofs + 1024));
			end
		end

		return Ast.FunctionCallExpression(Ast.IndexExpression(
			Ast.VariableExpression(wrappers.symbol),
			Ast.StringExpression(wrapper.index)
		), args);
	else
		return Ast.FunctionCallExpression(Ast.VariableExpression(self.wrapperSymbol), {
			Ast.NumberExpression(index - self.wrapperOffset);
		});
	end
end

function ConstantArray:getConstant(value, data)
	if(self.lookup[value]) then
		return self:indexing(self.lookup[value], data)
	end
	local idx = #self.constants + 1;
	self.constants[idx] = value;
	self.lookup[value] = idx;
	return self:indexing(idx, data);
end

function ConstantArray:addConstant(value)
	if(self.lookup[value]) then
		return
	end
	local idx = #self.constants + 1;
	self.constants[idx] = value;
	self.lookup[value] = idx;
end

local function reverse(t, i, j)
	while i < j do
	  t[i], t[j] = t[j], t[i]
	  i, j = i+1, j-1
	end
end

local function rotate(t, d, n)
	n = n or #t
	d = (d or 1) % n
	reverse(t, 1, n)
	reverse(t, 1, d)
	reverse(t, d+1, n)
end

local rotateCode = [=[
	for i, v in ipairs({{1, LEN}, {1, SHIFT}, {SHIFT + 1, LEN}}) do
		while v[1] < v[2] do
			ARR[v[1]], ARR[v[2]], v[1], v[2] = ARR[v[2]], ARR[v[1]], v[1] + 1, v[2] - 1
		end
	end
]=];

function ConstantArray:addRotateCode(ast, shift)
	local parser = Parser:new({
		LuaVersion = LuaVersion.Lua51;
	});

	local newAst = parser:parse(string.gsub(string.gsub(rotateCode, "SHIFT", tostring(shift)), "LEN", tostring(#self.constants)));
	local forStat = newAst.body.statements[1];
	visitast(newAst, nil, function(node, data)
		if node.name == "ARR" then
			if node.kind == AstKind.AssignmentGlobalVariable then
				return Ast.AssignmentVariable(self.arrSymbol);
			elseif node.kind == AstKind.GlobalVariableExpression then
				return Ast.VariableExpression(self.arrSymbol);
			end
		end
	end)

	table.insert(ast.body.statements, 1, forStat);
end

function ConstantArray:addDecodeCode(ast)
	if self.Encoding == "base64" then
		local base64DecodeCode = [[
	do ]] .. table.concat(util.shuffle{
		"local lookup = LOOKUP_TABLE;",
		"local len = string.len;",
		"local sub = string.sub;",
		"local floor = math.floor;",
		"local strchar = string.char;",
		"local insert = table.insert;",
		"local concat = table.concat;",
		"local type = type;",
		"local arr = ARR;",
	}) .. [[
		for i = 1, #arr do
			local data = arr[i];
			if type(data) == "string" then
				local length = len(data)
				local parts = {}
				local index = 1
				local value = 0
				local count = 0
				while index <= length do
					local char = sub(data, index, index)
					local code = lookup[char]
					if code then
						value = value + code * (64 ^ (3 - count))
						count = count + 1
						if count == 4 then
							count = 0
							local c1 = floor(value / 65536)
							local c2 = floor(value % 65536 / 256)
							local c3 = value % 256
							insert(parts, strchar(c1, c2, c3))
							value = 0
						end
					elseif char == "=" then
						insert(parts, strchar(floor(value / 65536)));
						if index >= length or sub(data, index + 1, index + 1) ~= "=" then
							insert(parts, strchar(floor(value % 65536 / 256)));
						end
						break
					end
					index = index + 1
				end
				arr[i] = concat(parts)
			end
		end
	end
]];

		local parser = Parser:new({
			LuaVersion = LuaVersion.Lua51;
		});

		local newAst = parser:parse(base64DecodeCode);
		local forStat = newAst.body.statements[1];

		visitast(newAst, nil, function(node, data)
			if(node.kind == AstKind.GlobalVariableExpression or node.kind == AstKind.AssignmentGlobalVariable) then
				if(node.name == "ARR") then
					return node.kind == AstKind.AssignmentGlobalVariable and Ast.AssignmentVariable(self.arrSymbol) or Ast.VariableExpression(self.arrSymbol);
				end

				if(node.name == "LOOKUP_TABLE") then
					return self:createBase64Lookup();
				end
			end
		end)

		table.insert(ast.body.statements, 1, forStat);
	elseif self.Encoding == "base85" then
		local base85DecodeCode = [[
	do ]] .. table.concat(util.shuffle{
		"local lookup = LOOKUP_TABLE;",
		"local len = string.len;",
		"local sub = string.sub;",
		"local floor = math.floor;",
		"local strchar = string.char;",
		"local insert = table.insert;",
		"local concat = table.concat;",
		"local type = type;",
		"local arr = ARR;",
	}) .. [[
		for i = 1, #arr do
			local data = arr[i];
			if type(data) == "string" then
				local length = len(data)
				local parts = {}
				local index = 1
				while index <= length do
					local remain = length - index + 1
					local count = remain >= 5 and 5 or remain
					local value = 0
					local valid = count > 1

					for j = 0, 4 do
						local code
						if j < count then
							local ch = sub(data, index + j, index + j)
							code = lookup[ch]
							if not code then
								valid = false
								break
							end
						else
							code = 84
						end
						value = value * 85 + code
					end

					if valid then
						local b1 = floor(value / 16777216) % 256
						local b2 = floor(value / 65536) % 256
						local b3 = floor(value / 256) % 256
						local b4 = value % 256
						if count == 5 then
							insert(parts, strchar(b1, b2, b3, b4))
						elseif count == 4 then
							insert(parts, strchar(b1, b2, b3))
						elseif count == 3 then
							insert(parts, strchar(b1, b2))
						elseif count == 2 then
							insert(parts, strchar(b1))
						end
					end

					index = index + count
				end
				arr[i] = concat(parts)
			end
		end
	end
]];

		local parser = Parser:new({
			LuaVersion = LuaVersion.Lua51;
		});

		local newAst = parser:parse(base85DecodeCode);
		local forStat = newAst.body.statements[1];

		visitast(newAst, nil, function(node, data)
			if(node.kind == AstKind.GlobalVariableExpression or node.kind == AstKind.AssignmentGlobalVariable) then
				if(node.name == "ARR") then
					return node.kind == AstKind.AssignmentGlobalVariable and Ast.AssignmentVariable(self.arrSymbol) or Ast.VariableExpression(self.arrSymbol);
				end

				if(node.name == "LOOKUP_TABLE") then
					return self:createBase85Lookup();
				end
			end
		end)

		table.insert(ast.body.statements, 1, forStat);
	elseif self.Encoding == "mixed" then
		local mixedDecodeCode = [[
	do ]] .. table.concat(util.shuffle{
		"local lookup64 = LOOKUP_TABLE_64;",
		"local lookup85 = LOOKUP_TABLE_85;",
		"local len = string.len;",
		"local sub = string.sub;",
		"local floor = math.floor;",
		"local strchar = string.char;",
		"local insert = table.insert;",
		"local concat = table.concat;",
		"local type = type;",
		"local arr = ARR;",
	}) .. [[
		for i = 1, #arr do
			local data = arr[i];
			if type(data) == "string" then
				local first = sub(data, 1, 1)
				if first == "]]..prefix_0..[[" then
					data = sub(data, 2)
					local length = len(data)
					local parts = {}
					local index = 1
					local value = 0
					local count = 0
					while index <= length do
						local char = sub(data, index, index)
						local code = lookup64[char]
						if code then
							value = value + code * (64 ^ (3 - count))
							count = count + 1
							if count == 4 then
								count = 0
								local c1 = floor(value / 65536)
								local c2 = floor(value % 65536 / 256)
								local c3 = value % 256
								insert(parts, strchar(c1, c2, c3))
								value = 0
							end
						elseif char == "=" then
							insert(parts, strchar(floor(value / 65536)));
							if index >= length or sub(data, index + 1, index + 1) ~= "=" then
								insert(parts, strchar(floor(value % 65536 / 256)));
							end
							break
						end
						index = index + 1
					end
					arr[i] = concat(parts)
				elseif first == "]]..prefix_1..[[" then
					data = sub(data, 2)
					local length = len(data)
					local parts = {}
					local idx = 1
					while idx <= length do
						local remain = length - idx + 1
						local count = remain >= 5 and 5 or remain
						local value = 0
						local valid = count > 1

						for j = 0, 4 do
							local code
							if j < count then
								local ch = sub(data, idx + j, idx + j)
								code = lookup85[ch]
								if not code then
									valid = false
									break
								end
							else
								code = 84
							end
							value = value * 85 + code
						end

						if valid then
							local b1 = floor(value / 16777216) % 256
							local b2 = floor(value / 65536) % 256
							local b3 = floor(value / 256) % 256
							local b4 = value % 256
							if count == 5 then
								insert(parts, strchar(b1, b2, b3, b4))
							elseif count == 4 then
								insert(parts, strchar(b1, b2, b3))
							elseif count == 3 then
								insert(parts, strchar(b1, b2))
							elseif count == 2 then
								insert(parts, strchar(b1))
							end
						end

						idx = idx + count
					end
					arr[i] = concat(parts)
				end
			end
		end
	end
]];

		local parser = Parser:new({
			LuaVersion = LuaVersion.Lua51;
		});

		local newAst = parser:parse(mixedDecodeCode);
		local forStat = newAst.body.statements[1];

		visitast(newAst, nil, function(node, data)
			if(node.kind == AstKind.GlobalVariableExpression or node.kind == AstKind.AssignmentGlobalVariable) then
				if(node.name == "ARR") then
					return node.kind == AstKind.AssignmentGlobalVariable and Ast.AssignmentVariable(self.arrSymbol) or Ast.VariableExpression(self.arrSymbol);
				end

				if(node.name == "LOOKUP_TABLE_64") then
					return self:createBase64Lookup();
				end

				if(node.name == "LOOKUP_TABLE_85") then
					return self:createBase85Lookup();
				end
			end
		end)

		table.insert(ast.body.statements, 1, forStat);
	end
end

function ConstantArray:createBase64Lookup()
	local entries = {};
	local i = 0;
	for char in string.gmatch(self.base64chars, ".") do
		table.insert(entries, Ast.KeyedTableEntry(Ast.StringExpression(char), Ast.NumberExpression(i)));
		i = i + 1;
	end
	util.shuffle(entries);
	return Ast.TableConstructorExpression(entries);
end

function ConstantArray:createBase85Lookup()
	local entries = {};
	local i = 0;
	for char in string.gmatch(self.base85chars, ".") do
		table.insert(entries, Ast.KeyedTableEntry(Ast.StringExpression(char), Ast.NumberExpression(i)));
		i = i + 1;
	end
	util.shuffle(entries);
	return Ast.TableConstructorExpression(entries);
end

function ConstantArray:encode(str)
	if self.Encoding == "base64" then
		return ((str:gsub('.', function(x)
			local r,b='',x:byte()
			for i=8,1,-1 do r=r..(b%2^i-b%2^(i-1)>0 and '1' or '0') end
			return r;
		end)..'0000'):gsub('%d%d%d?%d?%d?%d?', function(x)
			if (#x < 6) then return '' end
			local c=0
			for i=1,6 do c=c+(x:sub(i,i)=='1' and 2^(6-i) or 0) end
			return self.base64chars:sub(c+1,c+1)
		end)..({ '', '==', '=' })[#str%3+1]);
	elseif self.Encoding == "base85" then
		local result = {};
		local len = #str;
		local pos = 1;

		while pos <= len do
			local rem = len - pos + 1;
			local count = rem >= 4 and 4 or rem;
			local b1, b2, b3, b4 = string.byte(str, pos, pos + count - 1);
			b1, b2, b3, b4 = b1 or 0, b2 or 0, b3 or 0, b4 or 0;

			local value = ((b1 * 256 + b2) * 256 + b3) * 256 + b4;
			local chars = {};
			for i = 5, 1, -1 do
				local code = (value % 85) + 1;
				chars[i] = self.base85chars:sub(code, code);
				value = math.floor(value / 85);
			end

			result[#result + 1] = table.concat(chars, "", 1, count + 1);
			pos = pos + count;
		end

		return table.concat(result);
	elseif self.Encoding == "mixed" then
		if math.random() < 0.5 then
			local encoded = ((str:gsub('.', function(x)
				local r,b='',x:byte()
				for i=8,1,-1 do r=r..(b%2^i-b%2^(i-1)>0 and '1' or '0') end
				return r;
			end)..'0000'):gsub('%d%d%d?%d?%d?%d?', function(x)
				if (#x < 6) then return '' end
				local c=0
				for i=1,6 do c=c+(x:sub(i,i)=='1' and 2^(6-i) or 0) end
				return self.base64chars:sub(c+1,c+1)
			end)..({ '', '==', '=' })[#str%3+1]);
			return prefix_0 .. encoded;
		else
			local result = {};
			local len = #str;
			local pos = 1;

			while pos <= len do
				local rem = len - pos + 1;
				local count = rem >= 4 and 4 or rem;
				local b1, b2, b3, b4 = string.byte(str, pos, pos + count - 1);
				b1 = b1 or 0;
				b2 = b2 or 0;
				b3 = b3 or 0;
				b4 = b4 or 0;

				local value = ((b1 * 256 + b2) * 256 + b3) * 256 + b4;
				local chars = {};
				for i = 5, 1, -1 do
					local code = (value % 85) + 1;
					chars[i] = self.base85chars:sub(code, code);
					value = math.floor(value / 85);
				end

				result[#result + 1] = table.concat(chars, "", 1, count + 1);
				pos = pos + count;
			end

			return prefix_1 .. table.concat(result);
		end
	end
end

function ConstantArray:apply(ast, pipeline)
	initPrefixes();
	self.arrSymbol = Ast.LocalSymbol();

	self.base64chars = table.concat(util.shuffle{
		"A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z",
		"a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z",
		"0", "1", "2", "3", "4", "5", "6", "7", "8", "9",
		"+", "/",
	});

	self.base85chars = table.concat(util.shuffle{
		"!", "\\"", "#", "$", "%", "&", "'", "(", ")", "*", "+", ",", "-", ".", "/",
		"0", "1", "2", "3", "4", "5", "6", "7", "8", "9",
		":", ";", "<", "=", ">", "?", "@",
		"A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O",
		"P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z",
		"[", "\\\\", "]", "^", "_", "\`",
		"a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o",
		"p", "q", "r", "s", "t", "u",
	});

	self.constants = {};
	self.lookup = {};

	-- Extract Constants
	visitast(ast, nil, function(node, data)
		-- Apply only to some nodes
		if math.random() <= self.Threshold then
			node.__apply_constant_array = true;
			if node.kind == AstKind.StringExpression then
				self:addConstant(node.value);
			elseif not self.StringsOnly then
				if node.isConstant then
					if node.value ~= nil then
						self:addConstant(node.value);
					end
				end
			end
		end
	end);

	-- Shuffle Array
	if self.Shuffle then
		self.constants = util.shuffle(self.constants);
		self.lookup = {};
		for i, v in ipairs(self.constants) do
			self.lookup[v] = i;
		end
	end

	-- Set Wrapper Function Offset
	self.wrapperOffset = math.random(-self.MaxWrapperOffset, self.MaxWrapperOffset);
	self.wrapperSymbol = Ast.LocalSymbol();

	visitast(ast, function(node, data)
		-- Add Local Wrapper Functions
		if self.LocalWrapperCount > 0 and node.kind == AstKind.Block and node.isFunctionBlock and math.random() <= self.LocalWrapperThreshold then
			local symbol = Ast.LocalSymbol()
			data.functionData.local_wrappers = {
				symbol = symbol;
			};
			local nameLookup = {};
			for i = 1, self.LocalWrapperCount, 1 do
				local name;
				repeat
					name = callNameGenerator(pipeline.namegenerator, math.random(1, self.LocalWrapperArgCount * 16));
				until not nameLookup[name];
				nameLookup[name] = true;

				local offset = math.random(-self.MaxWrapperOffset, self.MaxWrapperOffset);
				local argPos = math.random(1, self.LocalWrapperArgCount);

				data.functionData.local_wrappers[i] = {
					arg = argPos,
					index = name,
					offset =  offset,
				};
				data.functionData.__used = false;
			end
		end
		if node.__apply_constant_array then
			data.functionData.__used = true;
		end
	end, function(node, data)
		-- Actually insert Statements to get the Constant Values
		if node.__apply_constant_array then
			if node.kind == AstKind.StringExpression then
				return self:getConstant(node.value, data);
			elseif not self.StringsOnly then
				if node.isConstant then
					return node.value ~= nil and self:getConstant(node.value, data);
				end
			end
			node.__apply_constant_array = nil;
		end

		-- Insert Local Wrapper Declarations
		if self.LocalWrapperCount > 0 and node.kind == AstKind.Block and node.isFunctionBlock and data.functionData.local_wrappers and data.functionData.__used then
			data.functionData.__used = nil;
			local elems = {};
			local wrappers = data.functionData.local_wrappers;
			for i = 1, self.LocalWrapperCount, 1 do
				local wrapper = wrappers[i];
				local argPos = wrapper.arg;
				local offset = wrapper.offset;
				local name = wrapper.index;

				local arg = nil;
				local args = {};

				for i = 1, self.LocalWrapperArgCount, 1 do
					args[i] = Ast.LocalSymbol();
					if i == argPos then
						arg = args[i];
					end
				end

				local addSubArg;

				-- Create add and Subtract code
				if offset < 0 then
					addSubArg = Ast.SubExpression(Ast.VariableExpression(arg), Ast.NumberExpression(-offset));
				else
					addSubArg = Ast.AddExpression(Ast.VariableExpression(arg), Ast.NumberExpression(offset));
				end

				local callArg = Ast.FunctionCallExpression(Ast.VariableExpression(self.wrapperSymbol), {
					addSubArg
				});

								elems[i] = Ast.KeyedTableEntry(
					Ast.StringExpression(name),
					Ast.FunctionLiteralExpression(args, Ast.Block({
						Ast.ReturnStatement({
							callArg
						});
					}))
				)
			end
			table.insert(node.statements, 1, Ast.LocalVariableDeclaration({
				wrappers.symbol
			}, {
				Ast.TableConstructorExpression(elems)
			}));
		end
	end);

	self:addDecodeCode(ast);

	local steps = util.shuffle({
		-- Add Wrapper Function Code
		function()
			local arg = Ast.LocalSymbol();
			local addSubArg;

			-- Create add and Subtract code
			if self.wrapperOffset < 0 then
				addSubArg = Ast.SubExpression(Ast.VariableExpression(arg), Ast.NumberExpression(-self.wrapperOffset));
			else
				addSubArg = Ast.AddExpression(Ast.VariableExpression(arg), Ast.NumberExpression(self.wrapperOffset));
			end

			-- Create and Add the Function Declaration
			table.insert(ast.body.statements, 1, Ast.LocalFunctionDeclaration(self.wrapperSymbol, {
				arg
			}, Ast.Block({
				Ast.ReturnStatement({
					Ast.IndexExpression(
						Ast.VariableExpression(self.arrSymbol),
						addSubArg
					)
				});
			})));

			-- Resulting Code:
			-- function xy(a)
			-- 		return ARR[a - 10]
			-- end
		end,
		-- Rotate Array and Add unrotate code
		function()
			if self.Rotate and #self.constants > 1 then
				local shift = math.random(1, #self.constants - 1);

				rotate(self.constants, -shift);
				self:addRotateCode(ast, shift);
			end
		end,
	});

	for i, f in ipairs(steps) do
		f();
	end

	-- Add the Array Declaration
	table.insert(ast.body.statements, 1, Ast.LocalVariableDeclaration({self.arrSymbol}, {self:createArray()}));

	self.arrSymbol = nil;
	self.wrapperSymbol = nil;

	self.constants = nil;
	self.lookup = nil;
end

return ConstantArray;
`,"prometheus-src/prometheus/steps/EncryptStrings.lua":`-- This Script is Part of the Prometheus Obfuscator by levno-710
--
-- EncryptStrings.lua
--
-- This Script provides a Simple Obfuscation Step that encrypts strings

local Step = require("prometheus.step")
local Ast = require("prometheus.ast")
local Parser = require("prometheus.parser")
local Enums = require("prometheus.enums")
local visitast = require("prometheus.visitast");
local util = require("prometheus.util")
local hoistVmStrings = require("prometheus.vm.strings")
local AstKind = Ast.AstKind;

local EncryptStrings = Step:extend()
EncryptStrings.Description = "This Step will encrypt strings within your Program."
EncryptStrings.Name = "Encrypt Strings"

EncryptStrings.SettingsDescriptor = {
    HoistVmStrings = {type = "boolean", default = false},
}

function EncryptStrings:init(_) end


function EncryptStrings:CreateEncryptionService()
	local usedSeeds = {};

	local secret_key_6 = math.random(0, 63) -- 6-bit  arbitrary integer (0..63)
	local secret_key_7 = math.random(0, 127) -- 7-bit  arbitrary integer (0..127)
	local secret_key_44 = math.random(0, 17592186044415) -- 44-bit arbitrary integer (0..17592186044415)
	local secret_key_8 = math.random(0, 255); -- 8-bit  arbitrary integer (0..255)

	local floor = math.floor

	local function primitive_root_257(idx)
		local g, m, d = 1, 128, 2 * idx + 1
		repeat
			g, m, d = g * g * (d >= m and 3 or 1) % 257, m / 2, d % m
		until m < 1
		return g
	end

	local param_mul_8 = primitive_root_257(secret_key_7)
	local param_mul_45 = secret_key_6 * 4 + 1
	local param_add_45 = secret_key_44 * 2 + 1

	local state_45 = 0
	local state_8 = 2

	local prev_values = {}
	local function set_seed(seed_53)
		state_45 = seed_53 % 35184372088832
		state_8 = seed_53 % 255 + 2
		prev_values = {}
	end

	local function gen_seed()
		local seed;
		repeat
			seed = math.random(0, 35184372088832);
		until not usedSeeds[seed];
		usedSeeds[seed] = true;
		return seed;
	end

	local function get_random_32()
		state_45 = (state_45 * param_mul_45 + param_add_45) % 35184372088832
		repeat
			state_8 = state_8 * param_mul_8 % 257
		until state_8 ~= 1
		local r = state_8 % 32
		local n = floor(state_45 / 2 ^ (13 - (state_8 - r) / 32)) % 2 ^ 32 / 2 ^ r
		return floor(n % 1 * 2 ^ 32) + floor(n)
	end

	local function get_next_pseudo_random_byte()
		if #prev_values == 0 then
			local rnd = get_random_32() -- value 0..4294967295
			local low_16 = rnd % 65536
			local high_16 = (rnd - low_16) / 65536
			local b1 = low_16 % 256
			local b2 = (low_16 - b1) / 256
			local b3 = high_16 % 256
			local b4 = (high_16 - b3) / 256
			prev_values = { b1, b2, b3, b4 }
		end
		--print(unpack(prev_values))
		return table.remove(prev_values)
	end

	local function encrypt(str)
		local seed = gen_seed();
		set_seed(seed)
		local len = string.len(str)
		local out = {}
		local prevVal = secret_key_8;
		for i = 1, len do
			local byte = string.byte(str, i);
			out[i] = string.char((byte - (get_next_pseudo_random_byte() + prevVal)) % 256);
			prevVal = byte;
		end
		return table.concat(out), seed;
	end

    local function genCode()
        local code = [[
do
	]] .. table.concat(util.shuffle{
		"local floor = math.floor",
		"local random = math.random",
		"local remove = table.remove",
		"local char = string.char",
		"local state_45 = 0",
		"local state_8 = 2",
		"local charmap = {}",
		"local nums = {}"
	}, "\\n") .. [[
	for i = 1, 256 do
		nums[i] = i;
	end

	repeat
		local idx = random(1, #nums);
		local n = remove(nums, idx);
		charmap[n] = char(n - 1);
	until #nums == 0;

	local prev_values = {}
	local function get_next_pseudo_random_byte()
		if #prev_values == 0 then
			state_45 = (state_45 * ]] .. tostring(param_mul_45) .. [[ + ]] .. tostring(param_add_45) .. [[) % 35184372088832
			repeat
				state_8 = state_8 * ]] .. tostring(param_mul_8) .. [[ % 257
			until state_8 ~= 1
			local r = state_8 % 32
			local shift = 13 - (state_8 - r) / 32
			local n = floor(state_45 / 2 ^ shift) % 4294967296 / 2 ^ r
			local rnd = floor(n % 1 * 4294967296) + floor(n)
			local low_16 = rnd % 65536
			local high_16 = (rnd - low_16) / 65536
			prev_values = { low_16 % 256, (low_16 - low_16 % 256) / 256, high_16 % 256, (high_16 - high_16 % 256) / 256 }
		end


		local prevValuesLen = #prev_values;
		local removed = prev_values[prevValuesLen];
		prev_values[prevValuesLen] = nil;
		return removed;
	end

	local realStrings = {};
	STRINGS = setmetatable({}, {
		__index = realStrings;
		__metatable = nil;
	});
  	function DECRYPT(str, seed)
		local realStringsLocal = realStrings;
		if(realStringsLocal[seed]) then return seed; else
			prev_values = {};
			local chars = charmap;
			state_45 = seed % 35184372088832
			state_8 = seed % 255 + 2
			local len = #str;
			realStringsLocal[seed] = "";
			local prevVal = ]] .. tostring(secret_key_8) .. [[;
			local s = "";
			for i=1, len, 1 do
				prevVal = (string.byte(str, i) + get_next_pseudo_random_byte() + prevVal) % 256
				s = s .. chars[prevVal + 1];
			end
			realStringsLocal[seed] = s;
		end
		return seed;
	end
end]]

		return code;
    end

    return {
        encrypt = encrypt,
        param_mul_45 = param_mul_45,
        param_mul_8 = param_mul_8,
        param_add_45 = param_add_45,
		secret_key_8 = secret_key_8,
        genCode = genCode,
    }
end

function EncryptStrings:apply(ast, _)
    if self.HoistVmStrings then hoistVmStrings(ast); end
    local Encryptor = self:CreateEncryptionService();

	local code = Encryptor.genCode();
	local newAst = Parser:new({ LuaVersion = Enums.LuaVersion.Lua51 }):parse(code);
	local doStat = newAst.body.statements[1];

	local decryptVar = Ast.LocalSymbol("_decrypt");
	local stringsVar = Ast.LocalSymbol("_strings");


	visitast(newAst, nil, function(node, data)
		if(node.kind == AstKind.FunctionDeclaration) then
			if(node.name == "DECRYPT") then
				node.symbol = decryptVar;
				node.name = nil;
			end
		end
		if(node.kind == AstKind.AssignmentVariable or node.kind == AstKind.VariableExpression or node.kind == AstKind.AssignmentGlobalVariable or node.kind == AstKind.GlobalVariableExpression) then
			if(node.name == "STRINGS") then
				if node.kind == AstKind.AssignmentVariable or node.kind == AstKind.AssignmentGlobalVariable then
					return Ast.AssignmentVariable(stringsVar);
				end
				return Ast.VariableExpression(stringsVar);
			end
		end
	end)

	visitast(ast, nil, function(node, data)
		if(node.kind == AstKind.StringExpression) then
			local encrypted, seed = Encryptor.encrypt(node.value);
			return Ast.IndexExpression(Ast.VariableExpression(stringsVar), Ast.FunctionCallExpression(Ast.VariableExpression(decryptVar), {
				Ast.StringExpression(encrypted), Ast.NumberExpression(seed),
			}));
		end
	end)


	-- Insert to Main Ast
	table.insert(ast.body.statements, 1, doStat);
	table.insert(ast.body.statements, 1, Ast.LocalVariableDeclaration(util.shuffle{ decryptVar, stringsVar }, {}));
	return ast
end

return EncryptStrings
`,"prometheus-src/prometheus/steps/NumbersToExpressions.lua":`-- This Script is Part of the Prometheus Obfuscator by levno-710
--
-- NumbersToExpressions.lua
--
-- This Script provides an Obfuscation Step, that converts Number Literals to expressions.
-- This step can now also convert numbers to different representations!
-- Supported representations: hex, binary, scientific, normal. Please note that binary is only supported in Lua 5.2 and above.

unpack = unpack or table.unpack

local Step = require("prometheus.step")
local Ast = require("prometheus.ast")
local visitast = require("prometheus.visitast")
local util = require("prometheus.util")
local logger = require("logger")
local AstKind = Ast.AstKind

local NumbersToExpressions = Step:extend()
NumbersToExpressions.Description = "This Step Converts number Literals to Expressions"
NumbersToExpressions.Name = "Numbers To Expressions"

NumbersToExpressions.SettingsDescriptor = {
	Threshold = {
		type = "number",
		default = 1,
		min = 0,
		max = 1,
	},

	InternalThreshold = {
		type = "number",
		default = 0.2,
		min = 0,
		max = 0.8,
	},

	NumberRepresentationMutation = {
		type = "boolean",
		default = false,
		aliases = { "NumberRepresentationMutaton" },
	},

	AllowedNumberRepresentations = {
		type = "table",
		default = {"hex", "scientific", "normal"},
		values = {"hex", "binary", "scientific", "normal"},
	},
}

local function generateModuloExpression(n)
	local rhs = n + math.random(1, 2^24)
	local multiplier = math.random(1, 2^8)
	local lhs = n + (multiplier * rhs)
	return lhs, rhs
end

local function contains(table, value)
	for _, v in ipairs(table) do
		if v == value then
			return true
		end
	end
	return false
end

function NumbersToExpressions:init(_)
	self.ExpressionGenerators = {
		function(val, depth) -- Addition
			local val2 = math.random(-2 ^ 20, 2 ^ 20)
			local diff = val - val2
			if tonumber(tostring(diff)) + tonumber(tostring(val2)) ~= val then
				return false
			end
			return Ast.AddExpression(
				self:CreateNumberExpression(val2, depth),
				self:CreateNumberExpression(diff, depth),
				false
			)
		end,

		function(val, depth) -- Subtraction
			local val2 = math.random(-2 ^ 20, 2 ^ 20)
			local diff = val + val2
			if tonumber(tostring(diff)) - tonumber(tostring(val2)) ~= val then
				return false
			end
			return Ast.SubExpression(
				self:CreateNumberExpression(diff, depth),
				self:CreateNumberExpression(val2, depth),
				false
			)
		end,

		function(val, depth) -- Modulo
			local lhs, rhs = generateModuloExpression(val)
			if tonumber(tostring(lhs)) % tonumber(tostring(rhs)) ~= val then
				return false
			end
			return Ast.ModExpression(
				self:CreateNumberExpression(lhs, depth),
				self:CreateNumberExpression(rhs, depth),
				false
			)
		end,
	}
end

function NumbersToExpressions:CreateNumberExpression(val, depth)
	-- Non-finite values have no safe integer or scientific representation.
	if val ~= val or val == math.huge or val == -math.huge then
		return Ast.NumberExpression(val)
	end

	if depth > 0 and math.random() >= self.InternalThreshold or depth > 15 then
		local format = self.AllowedNumberRepresentations[math.random(1, #self.AllowedNumberRepresentations)]
		if not self.NumberRepresentationMutation then
			return Ast.NumberExpression(val)
		end

		if format == "hex" then
			if val ~= math.floor(val) or val < 0 then
				return Ast.NumberExpression(val)
			end
			local ok, hexStr = pcall(string.format, "0x%X", val)
			-- Integer formatting can overflow or reject values outside its range.
			if not ok or tonumber(hexStr) ~= val then
				return Ast.NumberExpression(val)
			end
			local result = ""
			for i = 1, #hexStr do
				local c = hexStr:sub(i, i)
				if math.random() > 0.5 then
					result = result .. c:upper()
				else
					result = result .. c:lower()
				end
			end
			return Ast.NumberExpression(result)
		end

		if format == "binary" then
			if val ~= math.floor(val) or val < 0 then
				return Ast.NumberExpression(val)
			end
			local binary = ""
			local n = val
			if n == 0 then
				binary = "0"
			else
				while n > 0 do
					binary = (n % 2) .. binary
					n = math.floor(n / 2)
				end
			end
			return Ast.NumberExpression("0b" .. binary)
		end

		if format == "scientific" then
			if val == 0 then
				return Ast.NumberExpression(val)
			end

			local exp = math.floor(math.log10(math.abs(val)))
			local mantissa = val / (10 ^ exp)
			return Ast.NumberExpression(string.format("%.15ge%d", mantissa, exp))
		end

		if format == "normal" then
			return Ast.NumberExpression(val)
		end
	end

	local generators = util.shuffle({ unpack(self.ExpressionGenerators) })
	for _, generator in ipairs(generators) do
		local node = generator(val, depth + 1)
		if node then
			return node
		end
	end
	return Ast.NumberExpression(val)
end

function NumbersToExpressions:apply(ast)
	if contains(self.AllowedNumberRepresentations, "binary") then
		logger:warn("Warning: Binary representation is only supported in Lua 5.2 and above!")
	end

	visitast(ast, nil, function(node, _)
		if node.kind == AstKind.NumberExpression then
			if math.random() <= self.Threshold then
				return self:CreateNumberExpression(node.value, 0)
			end
		end
	end)
end

return NumbersToExpressions
`,"prometheus-src/prometheus/steps/ProxifyLocals.lua":`-- This Script is Part of the Prometheus Obfuscator by levno-710
--
-- ProxifyLocals.lua
--
-- This Step wraps local values in proxy objects.

local Step = require("prometheus.step")
local Ast = require("prometheus.ast")
local visitast = require("prometheus.visitast")
local RandomLiterals = require("prometheus.randomLiterals")

local AstKind = Ast.AstKind
local ProxifyLocals = Step:extend()
ProxifyLocals.Description = "This Step wraps all locals into Proxy Objects"
ProxifyLocals.Name = "Proxify Locals"
ProxifyLocals.SettingsDescriptor = {
	LiteralType = {
		name = "LiteralType", description = "The type of the randomly generated literals",
		type = "enum", values = {"dictionary", "number", "string", "any"}, default = "string",
	},
}

local function shallowcopy(orig)
	local copy = {}
	for key, value in pairs(orig) do copy[key] = value end
	return copy
end

local function callNameGenerator(generatorFunction, ...)
	if type(generatorFunction) == "table" then generatorFunction = generatorFunction.generateName end
	return generatorFunction(...)
end

local MetatableExpressions = {
	{constructor = Ast.AddExpression, key = "__add"},
	{constructor = Ast.SubExpression, key = "__sub"},
	{constructor = Ast.IndexExpression, key = "__index"},
	{constructor = Ast.MulExpression, key = "__mul"},
	{constructor = Ast.DivExpression, key = "__div"},
	{constructor = Ast.PowExpression, key = "__pow"},
	{constructor = Ast.StrCatExpression, key = "__concat"},
}

function ProxifyLocals:init(_) end

local function generateLocalMetatableInfo(pipeline)
	local usedOps, info = {}, {}
	for _, name in ipairs({"setValue", "getValue", "index"}) do
		local op
		repeat op = MetatableExpressions[math.random(#MetatableExpressions)] until not usedOps[op]
		usedOps[op] = true
		info[name] = op
	end
	info.valueName = callNameGenerator(pipeline.namegenerator, math.random(1, 4096))
	return info
end

local function localSymbol(name)
	return Ast.LocalSymbol(name)
end

function ProxifyLocals:CreateAssignmentExpression(info, expr)
	local metatableVals = {}
	local setSelf, setArg = localSymbol(), localSymbol()
	local setFunction = Ast.FunctionLiteralExpression({setSelf, setArg}, Ast.Block({
		Ast.AssignmentStatement({
			Ast.AssignmentIndexing(Ast.VariableExpression(setSelf), Ast.StringExpression(info.valueName)),
		}, {Ast.VariableExpression(setArg)}),
	}))
	table.insert(metatableVals, Ast.KeyedTableEntry(Ast.StringExpression(info.setValue.key), setFunction))

	local getSelf, getArg = localSymbol(), localSymbol()
	local getValue
	if info.getValue.key == "__index" or info.setValue.key == "__index" then
		getValue = Ast.FunctionCallExpression(Ast.GlobalVariableExpression("rawget"), {
			Ast.VariableExpression(getSelf), Ast.StringExpression(info.valueName),
		})
	else
		getValue = Ast.IndexExpression(Ast.VariableExpression(getSelf), Ast.StringExpression(info.valueName))
	end
	local getFunction = Ast.FunctionLiteralExpression({getSelf, getArg}, Ast.Block({
		Ast.ReturnStatement({getValue}),
	}))
	table.insert(metatableVals, Ast.KeyedTableEntry(Ast.StringExpression(info.getValue.key), getFunction))

	return Ast.FunctionCallExpression(Ast.VariableExpression(self.setMetatableSymbol), {
		Ast.TableConstructorExpression({Ast.KeyedTableEntry(Ast.StringExpression(info.valueName), expr)}),
		Ast.TableConstructorExpression(metatableVals),
	})
end

function ProxifyLocals:apply(ast, pipeline)
	local localMetatableInfos = {}
	-- Rewrite exemptions belong to this invocation, including when the same
	-- step instance is applied repeatedly to an already transformed tree.
	local skipped, ignored = {}, {}
	local function isGlobal(node)
		return node.kind == AstKind.GlobalVariableExpression or node.kind == AstKind.AssignmentGlobalVariable
	end
	local function getLocalMetatableInfo(symbol)
		if not symbol or localMetatableInfos[symbol] == false then return nil end
		if localMetatableInfos[symbol] then return localMetatableInfos[symbol] end
		local info = generateLocalMetatableInfo(pipeline)
		localMetatableInfos[symbol] = info
		return info
	end
	local function disableMetatableInfo(symbol)
		if symbol then localMetatableInfos[symbol] = false end
	end

	self.setMetatableSymbol = localSymbol()
	self.emptyFunctionSymbol = localSymbol()
	-- Generated implementation bindings are never proxified themselves.
	localMetatableInfos[self.setMetatableSymbol] = false
	localMetatableInfos[self.emptyFunctionSymbol] = false
	self.emptyFunctionUsed = false
	local emptyFunctionDeclaration = Ast.LocalVariableDeclaration({self.emptyFunctionSymbol}, {
		Ast.FunctionLiteralExpression({}, Ast.Block({})),
	})
	skipped[emptyFunctionDeclaration] = true
	table.insert(ast.body.statements, 1, emptyFunctionDeclaration)

	visitast(ast, function(node)
		-- Declare first, then assign. The early declaration makes recursive
		-- references inside the function literal point at the same binding.
		if node.kind == AstKind.Block then
			local i = 1
			while i <= #node.statements do
				local statement = node.statements[i]
				if statement.kind == AstKind.LocalFunctionDeclaration then
					local info = getLocalMetatableInfo(statement.symbol)
					if info then
						local declaration = Ast.LocalVariableDeclaration({statement.symbol}, {})
						skipped[declaration] = true
						local literal = Ast.FunctionLiteralExpression(statement.args, statement.body)
						local target = Ast.AssignmentVariable(statement.symbol)
						ignored[target] = true
						local assignment = Ast.AssignmentStatement({target}, {
							self:CreateAssignmentExpression(info, literal),
						})
						skipped[assignment] = true
						node.statements[i] = declaration
						table.insert(node.statements, i + 1, assignment)
						i = i + 1
					end
				end
				i = i + 1
			end
		end

		if node.kind == AstKind.ForStatement then disableMetatableInfo(node.symbol) end
		if node.kind == AstKind.ForInStatement then
			for _, symbol in ipairs(node.symbols) do disableMetatableInfo(symbol) end
		end
		if node.kind == AstKind.FunctionDeclaration or node.kind == AstKind.LocalFunctionDeclaration
			or node.kind == AstKind.FunctionLiteralExpression then
			for _, arg in ipairs(node.args) do
				if arg.kind == AstKind.VariableExpression then disableMetatableInfo(arg.symbol)
				elseif arg.kind == "LocalSymbol" then disableMetatableInfo(arg) end
			end
		end

		if node.kind == AstKind.AssignmentStatement and not skipped[node]
			and #node.lhs == 1 and node.lhs[1].kind == AstKind.AssignmentVariable then
			local variable = node.lhs[1]
			local info = not isGlobal(variable) and getLocalMetatableInfo(variable.symbol)
			if info then
				local args = shallowcopy(node.rhs)
				local reference = Ast.VariableExpression(variable.symbol)
				ignored[reference] = true
				args[1] = info.setValue.constructor(reference, args[1])
				self.emptyFunctionUsed = true
				return Ast.FunctionCallStatement(Ast.VariableExpression(self.emptyFunctionSymbol), args)
			end
		end
	end, function(node)
		if node.kind == AstKind.LocalVariableDeclaration and not skipped[node] then
			for i, symbol in ipairs(node.symbols) do
				local info = getLocalMetatableInfo(symbol)
				if info then
					node.expressions[i] = self:CreateAssignmentExpression(info, node.expressions[i] or Ast.NilExpression())
				end
			end
		end
		if node.kind == AstKind.VariableExpression and not ignored[node] and not isGlobal(node) then
			local info = getLocalMetatableInfo(node.symbol)
			if info then
				local literal
				if self.LiteralType == "dictionary" then literal = RandomLiterals.Dictionary()
				elseif self.LiteralType == "number" then literal = RandomLiterals.Number()
				elseif self.LiteralType == "string" then literal = RandomLiterals.String(pipeline)
				else literal = RandomLiterals.Any(pipeline) end
				return info.getValue.constructor(node, literal)
			end
		end
		if node.kind == AstKind.AssignmentVariable and not ignored[node] and not isGlobal(node) then
			local info = getLocalMetatableInfo(node.symbol)
			if info then
				ignored[node] = true
				return Ast.AssignmentIndexing(node, Ast.StringExpression(info.valueName))
			end
		end
		if node.kind == AstKind.FunctionDeclaration and node.symbol then
			local info = getLocalMetatableInfo(node.symbol)
			if info then table.insert(node.indices, 1, info.valueName) end
		end
	end)

	table.insert(ast.body.statements, 1, Ast.LocalVariableDeclaration({self.setMetatableSymbol}, {
		Ast.GlobalVariableExpression("setmetatable"),
	}))
end

return ProxifyLocals
`,"prometheus-src/prometheus/steps/SplitStrings.lua":`-- This Script is Part of the Prometheus Obfuscator by levno-710
--
-- SplitStrings.lua
--
-- This Script provides a Simple Obfuscation Step for splitting Strings

local Step = require("prometheus.step");
local Ast = require("prometheus.ast");
local visitAst = require("prometheus.visitast");
local Parser = require("prometheus.parser");
local util = require("prometheus.util");
local enums = require("prometheus.enums")

local LuaVersion = enums.LuaVersion;

local SplitStrings = Step:extend();
SplitStrings.Description = "This Step splits Strings to a specific or random length";
SplitStrings.Name = "Split Strings";

SplitStrings.SettingsDescriptor = {
	Threshold = {
		name = "Threshold",
		description = "The relative amount of nodes that will be affected",
		type = "number",
		default = 1,
		min = 0,
		max = 1,
	},
	MinLength = {
		name = "MinLength",
		description = "The minimal length for the chunks in that the Strings are splitted",
		type = "number",
		default = 5,
		min = 1,
		max = nil,
	},
	MaxLength = {
		name = "MaxLength",
		description = "The maximal length for the chunks in that the Strings are splitted",
		type = "number",
		default = 5,
		min = 1,
		max = nil,
	},
	ConcatenationType = {
		name = "ConcatenationType",
		description = "The Functions used for Concatenation. Note that when using custom, the String Array will also be Shuffled",
		type = "enum",
		values = {
			"strcat",
			"table",
			"custom",
		},
		default = "custom",
	},
	CustomFunctionType = {
		name = "CustomFunctionType",
		description = "The Type of Function code injection This Option only applies when custom Concatenation is selected.\\
Note that when choosing inline, the code size may increase significantly!",
		type = "enum",
		values = {
			"global",
			"local",
			"inline",
		},
		default = "global",
	},
	CustomLocalFunctionsCount = {
		name = "CustomLocalFunctionsCount",
		description = "The number of local functions per scope. This option only applies when CustomFunctionType = local",
		type = "number",
		default = 2,
		min = 1,
	}
}

function SplitStrings:init(settings) end

local function generateTableConcatNode(chunks, data)
	local chunkNodes = {};
	for i, chunk in ipairs(chunks) do
		table.insert(chunkNodes, Ast.TableEntry(Ast.StringExpression(chunk)));
	end
	local tb = Ast.TableConstructorExpression(chunkNodes);
	return Ast.FunctionCallExpression(Ast.VariableExpression(data.tableConcatSymbol), {tb});
end

local function generateStrCatNode(chunks)
	-- Put Together Expression for Concatenating String
	local generatedNode = nil;
	for i, chunk in ipairs(chunks) do
		if generatedNode then
			generatedNode = Ast.StrCatExpression(generatedNode, Ast.StringExpression(chunk));
		else
			generatedNode = Ast.StringExpression(chunk);
		end
	end
	return generatedNode
end

local customVariants = 2;
local custom1Code = [=[
function custom(table)
    local stringTable, str = table[#table], "";
    for i=1,#stringTable, 1 do
        str = str .. stringTable[table[i]];
	end
	return str
end
]=];

local custom2Code = [=[
function custom(tb)
	local str = "";
	for i=1, #tb / 2, 1 do
		str = str .. tb[#tb / 2 + tb[i]];
	end
	return str
end
]=];

local function generateCustomNodeArgs(chunks, data, variant)
	local shuffled = {};
	local shuffledIndices = {};
	for i = 1, #chunks, 1 do
		shuffledIndices[i] = i;
	end
	util.shuffle(shuffledIndices);

	for i, v in ipairs(shuffledIndices) do
		shuffled[v] = chunks[i];
	end

	-- Custom Function Type 1
	if variant == 1 then
		local args = {};
		local tbNodes = {};

		for i, v in ipairs(shuffledIndices) do
			table.insert(args, Ast.TableEntry(Ast.NumberExpression(v)));
		end

		for i, chunk in ipairs(shuffled) do
			table.insert(tbNodes, Ast.TableEntry(Ast.StringExpression(chunk)));
		end

		local tb = Ast.TableConstructorExpression(tbNodes);

		table.insert(args, Ast.TableEntry(tb));
		return {Ast.TableConstructorExpression(args)};

	-- Custom Function Type 2
	else

		local args = {};
		for i, v in ipairs(shuffledIndices) do
			table.insert(args, Ast.TableEntry(Ast.NumberExpression(v)));
		end
		for i, chunk in ipairs(shuffled) do
			table.insert(args, Ast.TableEntry(Ast.StringExpression(chunk)));
		end
		return {Ast.TableConstructorExpression(args)};
	end

end

local function generateCustomFunctionLiteral(variant)
	local parser = Parser:new({
		LuaVersion = LuaVersion.Lua51;
	});

	-- Custom Function Type 1
	if variant == 1 then
		local funcDeclNode = parser:parse(custom1Code).body.statements[1];
		local funcBody = funcDeclNode.body;
		local funcArgs = funcDeclNode.args;
		return Ast.FunctionLiteralExpression(funcArgs, funcBody);

		-- Custom Function Type 2
	else
		local funcDeclNode = parser:parse(custom2Code).body.statements[1];
		local funcBody = funcDeclNode.body;
		local funcArgs = funcDeclNode.args;
		return Ast.FunctionLiteralExpression(funcArgs, funcBody);
	end
end

local function generateGlobalCustomFunctionDeclaration(data)
	local parser = Parser:new({
		LuaVersion = LuaVersion.Lua51;
	});

	-- Custom Function Type 1
	if data.customFunctionVariant == 1 then
		local funcDeclNode = parser:parse(custom1Code).body.statements[1];
		local funcBody = funcDeclNode.body;
		local funcArgs = funcDeclNode.args;
		return Ast.LocalVariableDeclaration({data.customFuncSymbol},
		{Ast.FunctionLiteralExpression(funcArgs, funcBody)});
	-- Custom Function Type 2
	else
		local funcDeclNode = parser:parse(custom2Code).body.statements[1];
		local funcBody = funcDeclNode.body;
		local funcArgs = funcDeclNode.args;
		return Ast.LocalVariableDeclaration({data.customFuncSymbol},
		{Ast.FunctionLiteralExpression(funcArgs, funcBody)});
	end
end

function SplitStrings:variant()
	return math.random(1, customVariants);
end

function SplitStrings:apply(ast, pipeline)
	local data = {};


	if(self.ConcatenationType == "table") then
		data.tableConcatSymbol = Ast.LocalSymbol("_table_concat");
	elseif(self.ConcatenationType == "custom") then
		data.customFunctionType = self.CustomFunctionType;
		if data.customFunctionType == "global" then
			data.customFuncSymbol = Ast.LocalSymbol("_custom_concat");
			data.customFunctionVariant = self:variant();
		end
	end


	local customLocalFunctionsCount = self.CustomLocalFunctionsCount;
	local self2 = self;

	visitAst(ast, function(node, data)
		-- Previsit Function

		-- Create Local Function declarations
		if(self.ConcatenationType == "custom" and data.customFunctionType == "local" and node.kind == Ast.AstKind.Block and node.isFunctionBlock) then
			data.functionData.localFunctions = {};
			for i = 1, customLocalFunctionsCount, 1 do
				local symbol = Ast.LocalSymbol("_custom_concat");
				local variant = self:variant();
				table.insert(data.functionData.localFunctions, {
					symbol = symbol,
					variant = variant,
					used = false,
				});
			end
		end

	end, function(node, data)
		-- PostVisit Function

		-- Create actual function literals for local customFunctionType
		if(self.ConcatenationType == "custom" and data.customFunctionType == "local" and node.kind == Ast.AstKind.Block and node.isFunctionBlock) then
			for i, func in ipairs(data.functionData.localFunctions) do
				if func.used then
					local literal = generateCustomFunctionLiteral(func.variant);
					table.insert(node.statements, 1, Ast.LocalVariableDeclaration({func.symbol}, {literal}));
				end
			end
		end


		-- Apply Only to String nodes
		if(node.kind == Ast.AstKind.StringExpression) then
			local str = node.value;
			local chunks = {};
			local i = 1;

			-- Split String into Parts of length between MinLength and MaxLength
			while i <= string.len(str) do
				local len = math.random(self.MinLength, self.MaxLength);
				table.insert(chunks, string.sub(str, i, i + len - 1));
				i = i + len;
			end

			if(#chunks > 1) then
				if math.random() < self.Threshold then
					if self.ConcatenationType == "strcat" then
						node = generateStrCatNode(chunks);
					elseif self.ConcatenationType == "table" then
						node = generateTableConcatNode(chunks, data);
					elseif self.ConcatenationType == "custom" then
						if self.CustomFunctionType == "global" then
							local args = generateCustomNodeArgs(chunks, data, data.customFunctionVariant);
							node = Ast.FunctionCallExpression(Ast.VariableExpression(data.customFuncSymbol), args);
						elseif self.CustomFunctionType == "local" then
							local lfuncs = data.functionData.localFunctions;
							local idx = math.random(1, #lfuncs);
							local func = lfuncs[idx];
							local args = generateCustomNodeArgs(chunks, data, func.variant);
							func.used = true;
							node = Ast.FunctionCallExpression(Ast.VariableExpression(func.symbol), args);
						elseif self.CustomFunctionType == "inline" then
							local variant = self:variant();
							local args = generateCustomNodeArgs(chunks, data, variant);
							local literal = generateCustomFunctionLiteral(variant);
							node = Ast.FunctionCallExpression(literal, args);
						end
					end
				end
			end

			return node, true;
		end
	end, data)


	if(self.ConcatenationType == "table") then
		table.insert(ast.body.statements, 1, Ast.LocalVariableDeclaration({data.tableConcatSymbol},
		{Ast.IndexExpression(Ast.GlobalVariableExpression("table"), Ast.StringExpression("concat"))}));
	elseif(self.ConcatenationType == "custom" and self.CustomFunctionType == "global") then
		table.insert(ast.body.statements, 1, generateGlobalCustomFunctionDeclaration(data));
	end
end

return SplitStrings;
`,"prometheus-src/prometheus/steps/Vmify.lua":`-- Compile Lua AST into register instructions and a generated Lua interpreter.
local Step = require('prometheus.step')
local Compiler = require('prometheus.vm.compiler')
local Emit = require('prometheus.vm.emit')

local Vmify = Step:extend()
Vmify.Name = 'Vmify'
Vmify.Description = 'Compiles functions into register instructions executed by a generated Lua VM.'
Vmify.SettingsDescriptor = {}

function Vmify:init() end

function Vmify:apply(ast)
    return Emit.ast(Compiler:compile(ast))
end

return Vmify
`,"prometheus-src/prometheus/steps/Watermark.lua":`-- This Script is Part of the Prometheus Obfuscator by levno-710
--
-- Watermark.lua
--
-- This Script provides a Step that will add a watermark to the script

local Step = require("prometheus.step");
local Ast = require("prometheus.ast");

local Watermark = Step:extend();
Watermark.Description = "This Step will add a watermark to the script";
Watermark.Name = "Watermark";

Watermark.SettingsDescriptor = {
  Content = {
    name = "Content",
    description = "The Content of the Watermark",
    type = "string",
    default = "This Script is Part of the Prometheus Obfuscator by levno-710",
  },
  CustomVariable = {
    name = "Custom Variable",
    description = "The Variable that will be used for the Watermark",
    type = "string",
    default = "_WATERMARK",
  }
}

function Watermark:init(settings)
	
end

function Watermark:apply(ast)
  local body = ast.body;
  if string.len(self.Content) > 0 then
    local watermark = Ast.AssignmentGlobalVariable(self.CustomVariable);
    local arg = Ast.LocalSymbol("_watermark_arg");
    local statement = Ast.PassSelfFunctionCallStatement(Ast.StringExpression(self.Content), "gsub", {
      Ast.StringExpression(".+"),
      Ast.FunctionLiteralExpression({
        Ast.VariableExpression(arg)
      }, Ast.Block({
        Ast.AssignmentStatement({
          watermark
        }, {
          Ast.VariableExpression(arg)
        })
      }))
    });

    table.insert(ast.body.statements, 1, statement)
  end
end

return Watermark;
`,"prometheus-src/prometheus/steps/WatermarkCheck.lua":`-- This Script is Part of the Prometheus Obfuscator by levno-710
--
-- WatermarkCheck.lua
--
-- This Script provides a Step that will add a watermark to the script

local Step = require("prometheus.step");
local Ast = require("prometheus.ast");
local Watermark = require("prometheus.steps.Watermark");

local WatermarkCheck = Step:extend();
WatermarkCheck.Description = "This Step will add a watermark to the script";
WatermarkCheck.Name = "WatermarkCheck";

WatermarkCheck.SettingsDescriptor = {
  Content = {
    name = "Content",
    description = "The Content of the WatermarkCheck",
    type = "string",
    default = "This Script is Part of the Prometheus Obfuscator by levno-710",
  },
}

local function callNameGenerator(generatorFunction, ...)
	if(type(generatorFunction) == "table") then
		generatorFunction = generatorFunction.generateName;
	end
	return generatorFunction(...);
end

function WatermarkCheck:init(_) end

function WatermarkCheck:apply(ast, pipeline)
  self.CustomVariable = "_" .. callNameGenerator(pipeline.namegenerator, math.random(10000000000, 100000000000));
  pipeline:addStep(Watermark:new(self));

  local body = ast.body;
  local watermarkExpression = Ast.StringExpression(self.Content);
  local watermark = Ast.GlobalVariableExpression(self.CustomVariable);
  local notEqualsExpression = Ast.NotEqualsExpression(watermark, watermarkExpression);
  local ifBody = Ast.Block({Ast.ReturnStatement({})});

  table.insert(body.statements, 1, Ast.IfStatement(notEqualsExpression, ifBody, {}, nil));
end

return WatermarkCheck;
`,"prometheus-src/prometheus/steps/WrapInFunction.lua":`-- This Script is Part of the Prometheus Obfuscator by levno-710
--
-- WrapInFunction.lua
--
-- This Script provides a Simple Obfuscation Step that wraps the entire Script into a function

local Step = require("prometheus.step");
local Ast = require("prometheus.ast");

local WrapInFunction = Step:extend();
WrapInFunction.Description = "This Step Wraps the Entire Script into a Function";
WrapInFunction.Name = "Wrap in Function";

WrapInFunction.SettingsDescriptor = {
	Iterations = {
		name = "Iterations",
		description = "The Number Of Iterations",
		type = "number",
		default = 1,
		min = 1,
		max = nil,
	}
}

function WrapInFunction:init(_) end

function WrapInFunction:apply(ast)
	for i = 1, self.Iterations, 1 do
		local body = ast.body;

		ast.body = Ast.Block({
			Ast.ReturnStatement({
				Ast.FunctionCallExpression(Ast.FunctionLiteralExpression({Ast.VarargExpression()}, body), {Ast.VarargExpression()})
			});
		});
	end
end

return WrapInFunction;
`,"prometheus-src/prometheus/tokenizer.lua":`-- This Script is Part of the Prometheus Obfuscator by levno-710
--
-- tokenizer.lua
-- Overview:
-- This Script provides a class for lexical Analysis of lua code.
-- This Tokenizer is Capable of tokenizing LuaU and Lua5.1
local Enums = require("prometheus.enums");
local util = require("prometheus.util");
local logger = require("logger");
local config = require("config");

local LuaVersion = Enums.LuaVersion;
local lookupify = util.lookupify;
local unlookupify = util.unlookupify;
local escape = util.escape;
local chararray = util.chararray;
local keys = util.keys;
local Tokenizer = {};

Tokenizer.EOF_CHAR = "<EOF>";
Tokenizer.WHITESPACE_CHARS = lookupify{
	" ", "\\t", "\\n", "\\r",
}

Tokenizer.ANNOTATION_CHARS = lookupify(chararray("abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789-_"))
Tokenizer.ANNOTATION_START_CHARS = lookupify(chararray("!@"))

Tokenizer.Conventions = Enums.Conventions;

Tokenizer.TokenKind = {
	Eof = "Eof",
	Keyword = "Keyword",
	Symbol = "Symbol",
	Ident = "Identifier",
	Number = "Number",
	String = "String",
}

Tokenizer.EOF_TOKEN = {
	kind = Tokenizer.TokenKind.Eof,
	value = "<EOF>",
	startPos = -1,
	endPos = -1,
	source = "<EOF>",
}

local function token(self, startPos, kind, value)
	local line, linePos = self:getPosition(self.index);
	local annotations = self.annotations
	self.annotations = {};
	return {
		kind = kind,
		value = value,
		startPos = startPos,
		endPos = self.index,
		source = self.source:sub(startPos + 1, self.index),
		line = line,
		linePos = linePos,
		annotations = annotations,
	}
end

local function generateError(self, message)
	local line, linePos = self:getPosition(self.index);
	return "Lexing Error at Position " .. tostring(line) .. ":" .. tostring(linePos) .. ", " .. message;
end

local function generateWarning(token, message)
	return "Warning at Position " .. tostring(token.line) .. ":" .. tostring(token.linePos) .. ", " .. message;
end

function Tokenizer:getPosition(i)
	local column = self.columnMap[i]

	if not column then --// \`i\` is bigger than self.length, this shouldn't happen, but it did. (Theres probably some error in the tokenizer, cant find it.)
		column = self.columnMap[#self.columnMap]
	end

	return column.id, column.charMap[i]
end

--// Prepare columnMap for getPosition
function Tokenizer:prepareGetPosition()
	local columnMap, column = {}, { charMap = {}, id = 1, length = 0 }

	for index = 1, self.length do
		local character = string.sub(self.source, index, index) -- NOTE_1: this could use table.clone to reduce amount of NEWTABLE (if that causes any performance issues)

		local columnLength = column.length + 1
		column.length = columnLength
		column.charMap[index] = columnLength

		if character == "\\n" then
			column = { charMap = {}, id = column.id + 1, length = 0 } -- NOTE_1
		end

		columnMap[index] = column
	end

	self.columnMap = columnMap
end

-- Constructor for Tokenizer
function Tokenizer:new(settings)
	local luaVersion = (settings and (settings.luaVersion or settings.LuaVersion)) or LuaVersion.LuaU;
	local conventions = Tokenizer.Conventions[luaVersion];

	if(conventions == nil) then
		logger:error("The Lua Version \\"" .. luaVersion .. "\\" is not recognized by the Tokenizer! Please use one of the following: \\"" .. table.concat(keys(Tokenizer.Conventions), "\\",\\"") .. "\\"");
	end

	local tokenizer = {
		index = 0, -- Index where the current char is read
		length = 0,
		source = "", -- Source to Tokenize
		luaVersion = luaVersion, -- LuaVersion to be used while Tokenizing
		allowInternalIdentifiers = settings and settings.AllowInternalIdentifiers == true,
		conventions = conventions;

		NumberChars = conventions.NumberChars,
		NumberCharsLookup = lookupify(conventions.NumberChars),
		Keywords = conventions.Keywords,
		KeywordsLookup = lookupify(conventions.Keywords),
		BinaryNumberChars = conventions.BinaryNumberChars,
		BinaryNumberCharsLookup = lookupify(conventions.BinaryNumberChars);
		BinaryNums = conventions.BinaryNums,
		HexadecimalNums = conventions.HexadecimalNums,
		HexNumberChars = conventions.HexNumberChars,
		HexNumberCharsLookup = lookupify(conventions.HexNumberChars),
		DecimalExponent = conventions.DecimalExponent,
		DecimalSeperators = conventions.DecimalSeperators,
		IdentChars = conventions.IdentChars,
		IdentCharsLookup = lookupify(conventions.IdentChars),

		EscapeSequences = conventions.EscapeSequences,
		NumericalEscapes = conventions.NumericalEscapes,
		EscapeZIgnoreNextWhitespace = conventions.EscapeZIgnoreNextWhitespace,
		HexEscapes = conventions.HexEscapes,
		UnicodeEscapes = conventions.UnicodeEscapes,

		SymbolChars = conventions.SymbolChars,
		SymbolCharsLookup = lookupify(conventions.SymbolChars),
		MaxSymbolLength = conventions.MaxSymbolLength,
		Symbols = conventions.Symbols,
		SymbolsLookup = lookupify(conventions.Symbols),

		StringStartLookup = lookupify({"\\"", "\\'"}),
		annotations = {},
	};

	setmetatable(tokenizer, self);
	self.__index = self;

	return tokenizer;
end

-- Reset State of Tokenizer to Tokenize another File
function Tokenizer:reset()
	self.index = 0;
	self.length = 0;
	self.source = "";
	self.annotations = {};
	self.columnMap = {};
end

-- Append String to this Tokenizer
function Tokenizer:append(code)
	self.source = self.source .. code
	self.length = self.length + code:len();
	self:prepareGetPosition();
end

-- Function to peek the n'th char in the source of the tokenizer
local function peek(self, n)
	n = n or 0;
	local i = self.index + n + 1;
	if i > self.length then
		return Tokenizer.EOF_CHAR
	end
	return self.source:sub(i, i);
end

-- Function to get the next char in the source
local function get(self)
	local i = self.index + 1;
	if i > self.length then
		logger:error(generateError(self, "Unexpected end of Input"));
	end
	self.index = self.index + 1;
	return self.source:sub(i, i);
end

-- The same as get except it throws an Error if the char is not contained in charOrLookup
local function expect(self, charOrLookup)
	if(type(charOrLookup) == "string") then
		charOrLookup = {[charOrLookup] = true};
	end

	local char = peek(self);
	if charOrLookup[char] ~= true then
		local etb = unlookupify(charOrLookup);
		for i, v in ipairs(etb) do
			etb[i] = escape(v);
		end
		local errorMessage = "Unexpected char \\"" .. escape(char) .. "\\"! Expected one of \\"" .. table.concat(etb, "\\",\\"") .. "\\"";
		logger:error(generateError(self, errorMessage));
	end

	self.index = self.index + 1;
	return char;
end

-- Returns wether the n'th char is in the lookup
local function is(self, charOrLookup, n)
	local char = peek(self, n);
	if(type(charOrLookup) == "string") then
		return char == charOrLookup;
	end
	return charOrLookup[char];
end

function Tokenizer:parseAnnotation()
	if is(self, Tokenizer.ANNOTATION_START_CHARS) then
		self.index = self.index + 1;
		local source, length = {}, 0;
		while(is(self, Tokenizer.ANNOTATION_CHARS)) do
			source[length + 1] = get(self)
			length = #source
		end
		if length > 0 then
			self.annotations[string.lower(table.concat(source))] = true;
		end
		return nil;
	end
	return get(self);
end

-- skip one or 0 Comments and return wether one was found
function Tokenizer:skipComment()
	if(is(self, "-", 0) and is(self, "-", 1)) then
		self.index = self.index + 2;
		if(is(self, "[")) then
			self.index = self.index + 1;
			local eqCount = 0;
			while(is(self, "=")) do
				self.index = self.index + 1;
				eqCount = eqCount + 1;
			end
			if(is(self, "[")) then
				-- Multiline Comment
				-- Get all Chars to Closing bracket but also consider that the count of equal signs must be the same
				while true do
					if(self:parseAnnotation() == ']') then
						local eqCount2 = 0;
						while(is(self, "=")) do
							self.index = self.index + 1;
							eqCount2 = eqCount2 + 1;
						end
						if(is(self, "]")) then
							if(eqCount2 == eqCount) then
								self.index = self.index + 1;
								return true
							end
						end
					end
				end
			end
		end
		-- Single Line Comment
		-- Get all Chars to next Newline
		while(self.index < self.length and self:parseAnnotation() ~= "\\n") do end
		return true;
	end
	return false;
end

-- skip All Whitespace and Comments to next Token
function Tokenizer:skipWhitespaceAndComments()
	while self:skipComment() do end
	while is(self, Tokenizer.WHITESPACE_CHARS) do
		self.index = self.index + 1;
		while self:skipComment() do end
	end
end

local function int(self, chars, seperators)
	local buffer = {};
	while true do
		if (is(self, chars)) then
			buffer[#buffer + 1] = get(self)
		elseif (is(self, seperators)) then
			self.index = self.index + 1;
		else
			break
		end
	end
	return table.concat(buffer);
end

-- Lex the next token as a Number
function Tokenizer:number()
	local startPos = self.index;
	local source = expect(self, setmetatable({["."] = true}, {__index = self.NumberCharsLookup}));

	if source == "0" then
		if self.BinaryNums and is(self, lookupify(self.BinaryNums)) then
			self.index = self.index + 1;
			source = int(self, self.BinaryNumberCharsLookup, lookupify(self.DecimalSeperators or {}));
			local value = tonumber(source, 2);
			return token(self, startPos, Tokenizer.TokenKind.Number, value);
		end

		if self.HexadecimalNums and is(self, lookupify(self.HexadecimalNums)) then
			self.index = self.index + 1;
			source = int(self, self.HexNumberCharsLookup, lookupify(self.DecimalSeperators or {}));
			local value = tonumber(source, 16);
			return token(self, startPos, Tokenizer.TokenKind.Number, value);
		end
	end

	if source == "." then
		source = source .. int(self, self.NumberCharsLookup, lookupify(self.DecimalSeperators or {}));
	else
		source = source .. int(self, self.NumberCharsLookup, lookupify(self.DecimalSeperators or {}));
		if(is(self, ".")) then
			source = source .. get(self) .. int(self, self.NumberCharsLookup, lookupify(self.DecimalSeperators or {}));
		end
	end

	if(self.DecimalExponent and is(self, lookupify(self.DecimalExponent))) then
		source = source .. get(self);
		if(is(self, lookupify({"+","-"}))) then
			source = source .. get(self);
		end
		local v = int(self, self.NumberCharsLookup, lookupify(self.DecimalSeperators or {}));
		if(v:len() < 1) then
			logger:error(generateError(self, "Expected a Valid Exponent!"));
		end
		source = source .. v;
	end

	local value = tonumber(source);
	return token(self, startPos, Tokenizer.TokenKind.Number, value);
end

-- Lex the Next Token as Identifier or Keyword
function Tokenizer:ident()
	local startPos = self.index;
	local source = expect(self, self.IdentCharsLookup)
	local sourceAddContent = {source}
	while(is(self, self.IdentCharsLookup)) do
		-- source = source .. get(self);
		table.insert(sourceAddContent, get(self))
	end
	source = table.concat(sourceAddContent)
	if(self.KeywordsLookup[source]) then
		return token(self, startPos, Tokenizer.TokenKind.Keyword, source);
	end

	local tk = token(self, startPos, Tokenizer.TokenKind.Ident, source);

	if(not self.allowInternalIdentifiers
		and string.sub(source, 1, string.len(config.IdentPrefix)) == config.IdentPrefix) then
		logger:warn(generateWarning(tk, string.format("identifiers should not start with \\"%s\\" as this may break the program", config.IdentPrefix)));
	end

	return tk;
end

function Tokenizer:singleLineString()
	local startPos = self.index;
	local startChar = expect(self, self.StringStartLookup);
	local buffer = {};

	while (not is(self, startChar)) do
		local char = get(self);

		-- Single Line String may not contain Linebreaks except when they are escaped by \\
		if(char == '\\n') then
			self.index = self.index - 1;
			logger:error(generateError(self, "Unterminated String"));
		end


		if(char == "\\\\") then
			char = get(self);

			local escape = self.EscapeSequences[char];
			if(type(escape) == "string") then
				char = escape;

			elseif(self.NumericalEscapes and self.NumberCharsLookup[char]) then
				local numstr = char;

				if(is(self, self.NumberCharsLookup)) then
					char = get(self);
					numstr = numstr .. char;
				end

				if(is(self, self.NumberCharsLookup)) then
					char = get(self);
					numstr = numstr .. char;
				end

				char = string.char(tonumber(numstr));

			elseif(self.UnicodeEscapes and char == "u") then
				expect(self, "{");
				local num = "";
				while (is(self, self.HexNumberCharsLookup)) do
					num = num .. get(self);
				end
				expect(self, "}");
				char = util.utf8char(tonumber(num, 16));
			elseif(self.HexEscapes and char == "x") then
				local hex = expect(self, self.HexNumberCharsLookup) .. expect(self, self.HexNumberCharsLookup);
				char = string.char(tonumber(hex, 16));
			elseif(self.EscapeZIgnoreNextWhitespace and char == "z") then
				char = "";
				while(is(self, Tokenizer.WHITESPACE_CHARS)) do
					self.index = self.index + 1;
				end
			end
		end

		--// since table.insert is slower in lua51
		buffer[#buffer + 1] = char
	end

	expect(self, startChar);

	return token(self, startPos, Tokenizer.TokenKind.String, table.concat(buffer))
end

function Tokenizer:multiLineString()
	local startPos = self.index;
	if(is(self, "[")) then
		self.index = self.index + 1;
		local eqCount = 0;
		while(is(self, "=")) do
			self.index = self.index + 1;
			eqCount = eqCount + 1;
		end
		if(is(self, "[")) then
			-- Multiline String
			-- Parse String to Closing bracket but also consider that the count of equal signs must be the same

			-- Lua normalizes CR, LF, CRLF, and LFCR line breaks to LF in long strings.
			local function normalizedNewline(char)
				local nextChar = peek(self)
				if (char == "\\r" and nextChar == "\\n") or (char == "\\n" and nextChar == "\\r") then
					self.index = self.index + 1
				end
				return "\\n"
			end

			-- Skip one leading newline sequence, if present.
			self.index = self.index + 1;
			if(is(self, "\\n") or is(self, "\\r")) then
				normalizedNewline(get(self))
			end

			local value = "";
			while true do
				local char = get(self);
				if char == "\\n" or char == "\\r" then
					char = normalizedNewline(char)
				end
				if(char == ']') then
					local eqCount2 = 0;
					while(is(self, "=")) do
						char = char .. get(self);
						eqCount2 = eqCount2 + 1;
					end
					if(is(self, "]")) then
						if(eqCount2 == eqCount) then
							self.index = self.index + 1;
							return token(self, startPos, Tokenizer.TokenKind.String, value), true
						end
					end
				end
				value = value .. char;
			end
		end
	end
	self.index = startPos;
	return nil, false -- There was not an actual multiline string at the given Position
end

function Tokenizer:symbol()
	local startPos = self.index;
	for len = self.MaxSymbolLength, 1, -1 do
		local str = self.source:sub(self.index + 1, self.index + len);
		if self.SymbolsLookup[str] then
			self.index = self.index + len;
			return token(self, startPos, Tokenizer.TokenKind.Symbol, str);
		end
	end
	logger:error(generateError(self, "Unknown Symbol"));
end


-- get the Next token
function Tokenizer:next()
	-- Skip All Whitespace before the token
	self:skipWhitespaceAndComments();

	local startPos = self.index;
	if startPos >= self.length then
		return token(self, startPos, Tokenizer.TokenKind.Eof);
	end

	-- Numbers
	if(is(self, self.NumberCharsLookup)) then
		return self:number();
	end

	-- Identifiers and Keywords
	if(is(self, self.IdentCharsLookup)) then
		return self:ident();
	end

	-- Singleline String Literals
	if(is(self, self.StringStartLookup)) then
		return self:singleLineString();
	end

	-- Multiline String Literals
	if(is(self, "[", 0)) then
		-- The isString variable is due to the fact that "[" could also be a symbol for indexing
		local value, isString = self:multiLineString();
		if isString then
			return value;
		end
	end

	-- Number starting with dot
	if(is(self, ".") and is(self, self.NumberCharsLookup, 1)) then
		return self:number();
	end

	-- Symbols
	if(is(self, self.SymbolCharsLookup)) then
		return self:symbol();
	end


	logger:error(generateError(self, "Unexpected char \\"" .. escape(peek(self)) .. "\\"!"));
end

function Tokenizer:scanAll()
	local tb = {};
	repeat
		local token = self:next();
		table.insert(tb, token);
	until token.kind == Tokenizer.TokenKind.Eof
	return tb
end

return Tokenizer
`,"prometheus-src/prometheus/unparser.lua":`-- This Script is Part of the Prometheus Obfuscator by levno-710
--
-- unparser.lua
-- Overview:
-- This Script provides a class for lua code generation from an ast
-- This UnParser is Capable of generating LuaU and Lua5.1
--
-- Note that a LuaU ast can only be unparsed as LuaU if it contains any continue statements
--
-- Settings Object:
-- luaVersion : The LuaVersion of the Script

local config = require("config");
local Ast = require("prometheus.ast");
local analyzeBindings = require("prometheus.bindinganalysis");
local renameVariables = require("prometheus.names");
local Enums = require("prometheus.enums");
local util = require("prometheus.util");
local logger = require("logger");

local lookupify = util.lookupify;
local LuaVersion = Enums.LuaVersion;
local AstKind = Ast.AstKind;

local Unparser = {}

Unparser.SPACE = config.SPACE;
Unparser.TAB = config.TAB;

local function escapeString(str)
	str = util.escape(str)
	return str;
end

function Unparser:new(settings)
	local luaVersion = settings.LuaVersion or LuaVersion.LuaU;
	local conventions = Enums.Conventions[luaVersion];
	local unparser = {
		luaVersion = luaVersion;
		conventions = conventions;
		identCharsLookup = lookupify(conventions.IdentChars);
		numberCharsLookup = lookupify(conventions.NumberChars);
		prettyPrint = settings and settings.PrettyPrint or false;
		notIdentPattern = "[^" .. table.concat(conventions.IdentChars, "") .. "]";
		numberPattern = "^[" .. table.concat(conventions.NumberChars, "") .. "]";
		highlight = settings and settings.Highlight or false;
		keywordsLookup = lookupify(conventions.Keywords);
	}

	setmetatable(unparser, self);
	self.__index = self;

	return unparser;
end

function Unparser:isValidIdentifier(source)
	if(string.find(source, self.notIdentPattern)) then
		return false;
	end
	if(string.find(source, self.numberPattern)) then
		return false;
	end
	if self.keywordsLookup[source] then
		return false;
	end
	return #source > 0;
end

function Unparser:setPrettyPrint(prettyPrint)
	self.prettyPrint = prettyPrint;
end

function Unparser:getPrettyPrint()
	return self.prettyPrint;
end

function Unparser:tabs(i, ws_needed)
	return self.prettyPrint and string.rep(self.TAB, i) or ws_needed and self.SPACE or "";
end

function Unparser:newline(ws_needed)
	return self.prettyPrint and "\\n" or ws_needed and self.SPACE or "";
end

function Unparser:whitespaceIfNeeded(following, ws)
	if(self.prettyPrint or self.identCharsLookup[string.sub(following, 1, 1)]) then
		return ws or self.SPACE;
	end
	return "";
end

function Unparser:whitespaceIfNeeded2(leading, ws)
	if(self.prettyPrint or self.identCharsLookup[string.sub(leading, #leading, #leading)]) then
		return ws or self.SPACE;
	end
	return "";
end

function Unparser:optionalWhitespace(ws)
	return self.prettyPrint and (ws or self.SPACE) or "";
end

function Unparser:whitespace(ws)
	return self.SPACE or ws;
end

function Unparser:unparse(ast)
	if(ast.kind ~= AstKind.TopNode) then
		logger:error("Unparser:unparse expects a TopNode as first argument")
	end
	analyzeBindings(ast);
	-- Preserve symbol identity even for generated trees whose preferred names
	-- collide. Keep existing names whenever lexical lookup would be unambiguous.
	local attempts = {};
	renameVariables(ast, {
		Keywords = self.conventions.Keywords,
		generateName = function(_, scope, originalName)
			-- Symbol names are preferences. Make them valid identifier spellings
			-- before resolving collisions and reserved words in the allocator.
			local base = originalName:gsub(self.notIdentPattern, "_");
			if #base == 0 or base:find(self.numberPattern) then base = "_" .. base; end
			attempts[scope] = attempts[scope] or {};
			local count = attempts[scope][base] or 0;
			attempts[scope][base] = count + 1;
			return count == 0 and base or base .. "_" .. count;
		end,
	});

	return self:unparseBlock(ast.body);
end

-- Helper to join parts table (optimized string building)
local function joinParts(parts)
	return table.concat(parts)
end

function Unparser:unparseBlock(block, tabbing)
	if(#block.statements < 1) then
		return self:whitespace();
	end

	local parts = {}

	for i, statement in ipairs(block.statements) do
		if(statement.kind ~= AstKind.NopStatement) then
			local statementCode = self:unparseStatement(statement, tabbing);
			if(not self.prettyPrint and #parts > 0 and string.sub(statementCode, 1, 1) == "(") then
				-- This is so that the following works:
				-- print("Test");(function() print("Test2") end)();
				statementCode = ";" .. statementCode;
			end
			local ws = self:whitespaceIfNeeded2(#parts > 0 and parts[#parts] or "", self:whitespaceIfNeeded(statementCode, self:newline(true)));
			if i ~= 1 then
				parts[#parts + 1] = ws;
			end
			if(self.prettyPrint) then
				statementCode = statementCode .. ";"
			end
			parts[#parts + 1] = statementCode;
		end
	end

	return joinParts(parts);
end

function Unparser:unparseStatement(statement, tabbing)
	tabbing = tabbing and tabbing + 1 or 0;
	local parts = {};
	local function push(...) -- Helper to add multiple strings efficiently
		for i = 1, select('#', ...) do
			parts[#parts + 1] = select(i, ...)
		end
	end

	if(statement.kind == AstKind.ContinueStatement) then
		push("continue");

	-- Break Statement
	elseif(statement.kind == AstKind.BreakStatement) then
		push("break");

	-- Do Statement
	elseif(statement.kind == AstKind.DoStatement) then
		local bodyCode = self:unparseBlock(statement.body, tabbing);
		push("do", self:whitespaceIfNeeded(bodyCode, self:newline(true)),
			bodyCode, self:newline(false),
			self:whitespaceIfNeeded2(bodyCode, self:tabs(tabbing, true)), "end");

	-- While Statement
	elseif(statement.kind == AstKind.WhileStatement) then
		local expressionCode = self:unparseExpression(statement.condition, tabbing);
		local bodyCode = self:unparseBlock(statement.body, tabbing);
		push("while", self:whitespaceIfNeeded(expressionCode), expressionCode, self:whitespaceIfNeeded2(expressionCode),
			"do", self:whitespaceIfNeeded(bodyCode, self:newline(true)),
			bodyCode, self:newline(false),
			self:whitespaceIfNeeded2(bodyCode, self:tabs(tabbing, true)), "end");

	-- Repeat Until Statement
	elseif(statement.kind == AstKind.RepeatStatement) then
		local expressionCode = self:unparseExpression(statement.condition, tabbing);
		local bodyCode = self:unparseBlock(statement.body, tabbing);
		push("repeat", self:whitespaceIfNeeded(bodyCode, self:newline(true)),
			bodyCode,
			self:whitespaceIfNeeded2(bodyCode, self:newline() .. self:tabs(tabbing, true)), "until",
			self:whitespaceIfNeeded(expressionCode), expressionCode);

	-- For Statement
	elseif(statement.kind == AstKind.ForStatement) then
		local bodyCode = self:unparseBlock(statement.body, tabbing);
		push("for", self:whitespace(), statement.symbol and statement.symbol.name or statement.name, self:optionalWhitespace(), "=");
		push(self:optionalWhitespace(), self:unparseExpression(statement.initialValue, tabbing), ",");
		push(self:optionalWhitespace(), self:unparseExpression(statement.finalValue, tabbing), ",");
		local incrementByCode = statement.incrementBy and self:unparseExpression(statement.incrementBy, tabbing) or "1";
		push(self:optionalWhitespace(), incrementByCode, self:whitespaceIfNeeded2(incrementByCode), "do",
			self:whitespaceIfNeeded(bodyCode, self:newline(true)),
			bodyCode, self:newline(false),
			self:whitespaceIfNeeded2(bodyCode, self:tabs(tabbing, true)), "end");

	-- For In Statement
	elseif(statement.kind == AstKind.ForInStatement) then
		push("for", self:whitespace());
		for i, symbol in ipairs(statement.symbols) do
			if(i ~= 1) then
				push(",", self:optionalWhitespace());
			end
			push(symbol.name);
		end
		push(self:whitespace(), "in");
		local exprcode = self:unparseExpression(statement.expressions[1], tabbing);
		push(self:whitespaceIfNeeded(exprcode), exprcode);
		for i = 2, #statement.expressions, 1 do
			exprcode = self:unparseExpression(statement.expressions[i], tabbing);
			push(",", self:optionalWhitespace(), exprcode);
		end
		local bodyCode = self:unparseBlock(statement.body, tabbing);
		push(self:whitespaceIfNeeded2(#parts > 0 and parts[#parts] or ""), "do", self:whitespaceIfNeeded(bodyCode, self:newline(true)),
			bodyCode, self:newline(false),
			self:whitespaceIfNeeded2(bodyCode, self:tabs(tabbing, true)), "end");

	-- If Statement
	elseif(statement.kind == AstKind.IfStatement) then
		local exprcode = self:unparseExpression(statement.condition, tabbing);
		local bodyCode = self:unparseBlock(statement.body, tabbing);
		push("if", self:whitespaceIfNeeded(exprcode), exprcode, self:whitespaceIfNeeded2(exprcode), "then",
			self:whitespaceIfNeeded(bodyCode, self:newline(true)), bodyCode);

		for i, eif in ipairs(statement.elseifs) do
			exprcode = self:unparseExpression(eif.condition, tabbing);
			bodyCode = self:unparseBlock(eif.body, tabbing);
			local lastPart = #parts > 0 and parts[#parts] or "";
			push(self:newline(false), self:whitespaceIfNeeded2(lastPart, self:tabs(tabbing, true)),
				"elseif", self:whitespaceIfNeeded(exprcode), exprcode, self:whitespaceIfNeeded2(exprcode),
				"then", self:whitespaceIfNeeded(bodyCode, self:newline(true)), bodyCode);
		end

		if(statement.elsebody) then
			bodyCode = self:unparseBlock(statement.elsebody, tabbing);
			local lastPart = #parts > 0 and parts[#parts] or "";
			push(self:newline(false), self:whitespaceIfNeeded2(lastPart, self:tabs(tabbing, true)),
				"else", self:whitespaceIfNeeded(bodyCode, self:newline(true)), bodyCode);
		end

		push(self:newline(false), self:whitespaceIfNeeded2(bodyCode, self:tabs(tabbing, true)), "end");

	-- Function Declaration
	elseif(statement.kind == AstKind.FunctionDeclaration) then
		local funcname = statement.symbol and statement.symbol.name or statement.name;
		for _, index in ipairs(statement.indices) do
			funcname = funcname .. "." .. index;
		end
		push("function", self:whitespace(), funcname, "(");
		for i, arg in ipairs(statement.args) do
			if i > 1 then
				push(",", self:optionalWhitespace());
			end
			if(arg.kind == AstKind.VarargExpression) then
				push("...");
			else
				push(arg.symbol.name);
			end
		end
		push(")");
		local bodyCode = self:unparseBlock(statement.body, tabbing);
		push(self:newline(false), bodyCode, self:newline(false),
			self:whitespaceIfNeeded2(bodyCode, self:tabs(tabbing, true)), "end");

	-- Local Function Declaration
	elseif(statement.kind == AstKind.LocalFunctionDeclaration) then
		local funcname = statement.symbol and statement.symbol.name or statement.name;
		push("local", self:whitespace(), "function", self:whitespace(), funcname, "(");
		for i, arg in ipairs(statement.args) do
			if i > 1 then
				push(",", self:optionalWhitespace());
			end
			if(arg.kind == AstKind.VarargExpression) then
				push("...");
			else
				push(arg.symbol.name);
			end
		end
		push(")");
		local bodyCode = self:unparseBlock(statement.body, tabbing);
		push(self:newline(false), bodyCode, self:newline(false),
			self:whitespaceIfNeeded2(bodyCode, self:tabs(tabbing, true)), "end");

	-- Local Variable Declaration
	elseif(statement.kind == AstKind.LocalVariableDeclaration) then
		push("local", self:whitespace());
		for i, symbol in ipairs(statement.symbols) do
			if i > 1 then
				push(",", self:optionalWhitespace());
			end
			push(symbol.name);
		end
		if(#statement.expressions > 0) then
			push(self:optionalWhitespace(), "=", self:optionalWhitespace());
			for i, expr in ipairs(statement.expressions) do
				if i > 1 then
					push(",", self:optionalWhitespace());
				end
				push(self:unparseExpression(expr, tabbing + 1));
			end
		end

	-- Function Call Statement
	elseif(statement.kind == AstKind.FunctionCallStatement) then
		if not (statement.base.kind == AstKind.IndexExpression or statement.base.kind == AstKind.VariableExpression or statement.base.kind == AstKind.GlobalVariableExpression) then
			push("(", self:unparseExpression(statement.base, tabbing), ")");
		else
			push(self:unparseExpression(statement.base, tabbing));
		end
		push("(");
		for i, arg in ipairs(statement.args) do
			if i > 1 then
				push(",", self:optionalWhitespace());
			end
			push(self:unparseExpression(arg, tabbing));
		end
		push(")");

	-- Pass Self Function Call Statement
	elseif(statement.kind == AstKind.PassSelfFunctionCallStatement) then
		if not (statement.base.kind == AstKind.IndexExpression or statement.base.kind == AstKind.VariableExpression or statement.base.kind == AstKind.GlobalVariableExpression) then
			push("(", self:unparseExpression(statement.base, tabbing), ")");
		else
			push(self:unparseExpression(statement.base, tabbing));
		end
		push(":", statement.passSelfFunctionName, "(");
		for i, arg in ipairs(statement.args) do
			if i > 1 then
				push(",", self:optionalWhitespace());
			end
			push(self:unparseExpression(arg, tabbing));
		end
		push(")");

	elseif(statement.kind == AstKind.AssignmentStatement) then
		for i, primary_expr in ipairs(statement.lhs) do
			if i > 1 then
				push(",", self:optionalWhitespace());
			end
			push(self:unparseExpression(primary_expr, tabbing));
		end
		push(self:optionalWhitespace(), "=", self:optionalWhitespace());
		for i, expr in ipairs(statement.rhs) do
			if i > 1 then
				push(",", self:optionalWhitespace());
			end
			push(self:unparseExpression(expr, tabbing + 1));
		end

	-- Return Statement
	elseif(statement.kind == AstKind.ReturnStatement) then
		push("return");
		if(#statement.args > 0) then
			local exprcode = self:unparseExpression(statement.args[1], tabbing);
			push(self:whitespaceIfNeeded(exprcode), exprcode);
			for i = 2, #statement.args, 1 do
				exprcode = self:unparseExpression(statement.args[i], tabbing);
				push(",", self:optionalWhitespace(), exprcode);
			end
		end

	elseif self.luaVersion == LuaVersion.LuaU then
		local compoundOperators = {
			[AstKind.CompoundAddStatement] = "+=",
			[AstKind.CompoundSubStatement] = "-=",
			[AstKind.CompoundMulStatement] = "*=",
			[AstKind.CompoundDivStatement] = "/=",
			[AstKind.CompoundModStatement] = "%=",
			[AstKind.CompoundPowStatement] = "^=",
			[AstKind.CompoundConcatStatement] = "..=",
		}

		local operator = compoundOperators[statement.kind]
		if operator then
			push(self:unparseExpression(statement.lhs, tabbing), self:optionalWhitespace(), operator,
				self:optionalWhitespace(), self:unparseExpression(statement.rhs, tabbing));
		else
			logger:error(string.format("\\"%s\\" is not a valid unparseable statement in %s!", statement.kind, self.luaVersion))
		end
	end

	return self:tabs(tabbing, false) .. joinParts(parts);
end

function Unparser:unparseExpression(expression, tabbing)
	if expression.isParenthesizedExpression then
		local unwrapped = {}
		for k, v in pairs(expression) do
			unwrapped[k] = v
		end
		unwrapped.isParenthesizedExpression = nil
		return "(" .. self:unparseExpression(unwrapped, tabbing) .. ")"
	end

	local parts = {};
	local function push(...)
		for i = 1, select('#', ...) do
			parts[#parts + 1] = select(i, ...)
		end
	end

	if(expression.kind == AstKind.BooleanExpression) then
		return expression.value and "true" or "false";
	end

	if(expression.kind == AstKind.NumberExpression) then
		local value = expression.value;
		local str = tostring(value);
		-- Some steps supply numeric source strings rather than numeric values.
		if(type(value) == "number") then
			if(value ~= value) then
				return "(0/0)";
			end
			if(value == math.huge) then
				return "2e1024";
			end
			if(value == -math.huge) then
				return "-2e1024";
			end
			-- Keep compact output when it round-trips; doubles can need 17 digits.
			if(tonumber(str) ~= value) then
				str = string.format("%.17g", value);
			end
		end
		if(str:sub(1, 2) == "0.") then
			str = str:sub(2);
		end
		return str;
	end

	if(expression.kind == AstKind.GlobalVariableExpression or expression.kind == AstKind.AssignmentGlobalVariable) then
		return expression.name;
	end

	if(expression.kind == AstKind.VariableExpression or expression.kind == AstKind.AssignmentVariable) then
		return expression.symbol.name;
	end

	if(expression.kind == AstKind.StringExpression) then
		return "\\"" .. escapeString(expression.value) .. "\\"";
	end

	if(expression.kind == AstKind.NilExpression) then
		return "nil";
	end

	if(expression.kind == AstKind.VarargExpression) then
		return "...";
	end

	local k = AstKind.OrExpression;
	if(expression.kind == k) then
		local lhs = self:unparseExpression(expression.lhs, tabbing);
		local rhs = self:unparseExpression(expression.rhs, tabbing);
		return lhs .. self:whitespaceIfNeeded2(lhs) .. "or" .. self:whitespaceIfNeeded(rhs) .. rhs;
	end

	k = AstKind.AndExpression;
	if(expression.kind == k) then
		local lhs = self:unparseExpression(expression.lhs, tabbing);
		if(Ast.astKindExpressionToNumber(expression.lhs.kind) >= Ast.astKindExpressionToNumber(k)) then
			lhs = "(" .. lhs .. ")";
		end

		local rhs = self:unparseExpression(expression.rhs, tabbing);
		if(Ast.astKindExpressionToNumber(expression.rhs.kind) >= Ast.astKindExpressionToNumber(k)) then
			rhs = "(" .. rhs .. ")";
		end

		return lhs .. self:whitespaceIfNeeded2(lhs) .. "and" .. self:whitespaceIfNeeded(rhs) .. rhs;
	end

	local comparisonOps = {
		[AstKind.LessThanExpression] = "<",
		[AstKind.GreaterThanExpression] = ">",
		[AstKind.LessThanOrEqualsExpression] = "<=",
		[AstKind.GreaterThanOrEqualsExpression] = ">=",
		[AstKind.NotEqualsExpression] = "~=",
		[AstKind.EqualsExpression] = "==",
	}

	local op = comparisonOps[expression.kind]
	if op then
		k = expression.kind
		local lhs = self:unparseExpression(expression.lhs, tabbing);
		if(Ast.astKindExpressionToNumber(expression.lhs.kind) >= Ast.astKindExpressionToNumber(k)) then
			lhs = "(" .. lhs .. ")";
		end

		local rhs = self:unparseExpression(expression.rhs, tabbing);
		if(Ast.astKindExpressionToNumber(expression.rhs.kind) >= Ast.astKindExpressionToNumber(k)) then
			rhs = "(" .. rhs .. ")";
		end

		return lhs .. self:optionalWhitespace() .. op .. self:optionalWhitespace() .. rhs;
	end

	k = AstKind.StrCatExpression
	if expression.kind == k then
		local lhs = self:unparseExpression(expression.lhs, tabbing)
		if Ast.astKindExpressionToNumber(expression.lhs.kind) >= Ast.astKindExpressionToNumber(k) then
			lhs = "(" .. lhs .. ")"
		end

		local rhs = self:unparseExpression(expression.rhs, tabbing)
		if Ast.astKindExpressionToNumber(expression.rhs.kind) >= Ast.astKindExpressionToNumber(k) then
			rhs = "(" .. rhs .. ")"
		end

		if self.numberCharsLookup[string.sub(lhs, #lhs, #lhs)] then
			lhs = lhs .. " "
		end

		return lhs .. self:optionalWhitespace() .. (tostring(rhs):sub(1, 1) == "." and ".. " or "..") .. self:optionalWhitespace() .. rhs
	end

	local arithmeticOps = {
		[AstKind.AddExpression] = "+",
		[AstKind.SubExpression] = "-",
		[AstKind.MulExpression] = "*",
		[AstKind.DivExpression] = "/",
		[AstKind.ModExpression] = "%",
		[AstKind.PowExpression] = "^",
	}

	op = arithmeticOps[expression.kind]
	if op then
		k = expression.kind
		local lhs = self:unparseExpression(expression.lhs, tabbing);
		if(Ast.astKindExpressionToNumber(expression.lhs.kind) >= Ast.astKindExpressionToNumber(k)) then
			lhs = "(" .. lhs .. ")";
		end

		local rhs = self:unparseExpression(expression.rhs, tabbing);
		if(Ast.astKindExpressionToNumber(expression.rhs.kind) >= Ast.astKindExpressionToNumber(k)) then
			rhs = "(" .. rhs .. ")";
		end

		if op == "-" and string.sub(rhs, 1, 1) == "-" then
			rhs = "(" .. rhs .. ")";
		end

		return lhs .. self:optionalWhitespace() .. op .. self:optionalWhitespace() .. rhs;
	end

	-- Unary Expressions
	k = AstKind.NotExpression;
	if(expression.kind == k) then
		local rhs = self:unparseExpression(expression.rhs, tabbing);
		if(Ast.astKindExpressionToNumber(expression.rhs.kind) >= Ast.astKindExpressionToNumber(k)) then
			rhs = "(" .. rhs .. ")";
		end

		return "not" .. self:whitespaceIfNeeded(rhs) .. rhs;
	end

	k = AstKind.NegateExpression;
	if(expression.kind == k) then
		local rhs = self:unparseExpression(expression.rhs, tabbing);
		if(Ast.astKindExpressionToNumber(expression.rhs.kind) >= Ast.astKindExpressionToNumber(k)) then
			rhs = "(" .. rhs .. ")";
		end

		if string.sub(rhs, 1, 1) == "-" then
			rhs = "(" .. rhs .. ")";
		end

		return "-" .. rhs;
	end

	k = AstKind.LenExpression;
	if(expression.kind == k) then
		local rhs = self:unparseExpression(expression.rhs, tabbing);
		if(Ast.astKindExpressionToNumber(expression.rhs.kind) >= Ast.astKindExpressionToNumber(k)) then
			rhs = "(" .. rhs .. ")";
		end

		return "#" .. rhs;
	end

	k = AstKind.IndexExpression;
	if(expression.kind == k or expression.kind == AstKind.AssignmentIndexing) then
		local base = self:unparseExpression(expression.base, tabbing);
		if(expression.base.kind == AstKind.VarargExpression or Ast.astKindExpressionToNumber(expression.base.kind) > Ast.astKindExpressionToNumber(k) or expression.base.kind == AstKind.StringExpression or expression.base.kind == AstKind.NumberExpression or expression.base.kind == AstKind.NilExpression) then
			base = "(" .. base .. ")";
		end

		-- Identifier Indexing e.g: x.y instead of x["y"];
		if(expression.index.kind == AstKind.StringExpression and self:isValidIdentifier(expression.index.value)) then
			return base .. "." .. expression.index.value;
		end

		-- Index never needs parens
		local index = self:unparseExpression(expression.index, tabbing);
		return base .. "[" .. index .. "]";
	end

	k = AstKind.FunctionCallExpression;
	if(expression.kind == k) then
		if not (expression.base.kind == AstKind.IndexExpression or expression.base.kind == AstKind.VariableExpression or expression.base.kind == AstKind.GlobalVariableExpression) then
			push("(", self:unparseExpression(expression.base, tabbing), ")");
		else
			push(self:unparseExpression(expression.base, tabbing));
		end
		push("(");
		for i, arg in ipairs(expression.args) do
			if i > 1 then
				push(",", self:optionalWhitespace());
			end
			push(self:unparseExpression(arg, tabbing));
		end
		push(")");
		return joinParts(parts);
	end

	k = AstKind.PassSelfFunctionCallExpression;
	if(expression.kind == k) then
		if not (expression.base.kind == AstKind.IndexExpression or expression.base.kind == AstKind.VariableExpression or expression.base.kind == AstKind.GlobalVariableExpression) then
			push("(", self:unparseExpression(expression.base, tabbing), ")");
		else
			push(self:unparseExpression(expression.base, tabbing));
		end
		push(":", expression.passSelfFunctionName, "(");
		for i, arg in ipairs(expression.args) do
			if i > 1 then
				push(",", self:optionalWhitespace());
			end
			push(self:unparseExpression(arg, tabbing));
		end
		push(")");
		return joinParts(parts);
	end

	k = AstKind.FunctionLiteralExpression;
	if(expression.kind == k) then
		push("function", "(");
		for i, arg in ipairs(expression.args) do
			if i > 1 then
				push(",", self:optionalWhitespace());
			end
			if(arg.kind == AstKind.VarargExpression) then
				push("...");
			else
				push(arg.symbol.name);
			end
		end
		push(")");
		local bodyCode = self:unparseBlock(expression.body, tabbing);
		push(self:newline(false), bodyCode, self:newline(false),
			self:whitespaceIfNeeded2(bodyCode, self:tabs(tabbing, true)), "end");
		return joinParts(parts);
	end

	k = AstKind.TableConstructorExpression;
	if(expression.kind == k) then
		if(#expression.entries == 0) then return "{}" end;

		local inlineTable = #expression.entries <= 3;
		local tableTabbing = tabbing + 1;

		push("{");
		if inlineTable then
			push(self:optionalWhitespace());
		else
			push(self:optionalWhitespace(self:newline() .. self:tabs(tableTabbing)));
		end

		local p = false;
		for i, entry in ipairs(expression.entries) do
			p = true;
			local sep = self.prettyPrint and "," or (math.random(1, 2) == 1 and "," or ";");
			if i > 1 and not inlineTable then
				push(sep, self:optionalWhitespace(self:newline() .. self:tabs(tableTabbing)));
			elseif i > 1 then
				push(sep, self:optionalWhitespace());
			end
			if(entry.kind == AstKind.KeyedTableEntry) then
				if(entry.key.kind == AstKind.StringExpression and self:isValidIdentifier(entry.key.value)) then
					push(entry.key.value);
				else
					push("[", self:unparseExpression(entry.key, tableTabbing), "]");
				end
				push(self:optionalWhitespace(), "=", self:optionalWhitespace(), self:unparseExpression(entry.value, tableTabbing));
			else
				push(self:unparseExpression(entry.value, tableTabbing));
			end
		end

		if inlineTable then
			return joinParts(parts) .. self:optionalWhitespace() .. "}";
		end

		return joinParts(parts) .. self:optionalWhitespace((p and "," or "") .. self:newline() .. self:tabs(tabbing)) .. "}";
	end

	if (self.luaVersion == LuaVersion.LuaU) then
		k = AstKind.IfElseExpression
		if(expression.kind == k) then
			push("if ");
			push(self:unparseExpression(expression.condition));
			push(" then ");
			push(self:unparseExpression(expression.true_value));
			for _, elseifexp in pairs(expression.elseifs) do
				push(" elseif ");
				push(self:unparseExpression(elseifexp.condition));
				push(" then ");
				push(self:unparseExpression(elseifexp.value));
			end
			push(" else ");
			push(self:unparseExpression(expression.false_value));
			return joinParts(parts);
		end
	end

	logger:error(string.format("\\"%s\\" is not a valid unparseable expression", expression.kind));
end

return Unparser
`,"prometheus-src/prometheus/util.lua":`-- This Script is Part of the Prometheus Obfuscator by levno-710
--
-- util.lua
--
-- This Script provides some utility functions for Prometheus.

local function lookupify(tb)
	local tb2 = {};
	for _, v in ipairs(tb) do
		tb2[v] = true
	end
	return tb2
end

local function unlookupify(tb)
	local tb2 = {};
	for v, _ in pairs(tb) do
		table.insert(tb2, v);
	end
	return tb2;
end

local function escape(str)
	return str:gsub(".", function(char)
		local byte = string.byte(char)
		if byte >= 32 and byte <= 126 and char ~= "\\\\" and char ~= "\\"" and char ~= "\\'" then
			return char
		end
		if(char == "\\\\") then
			return "\\\\\\\\";
		end
		if(char == "\\n") then
			return "\\\\n";
		end
		if(char == "\\r") then
			return "\\\\r";
		end
		if(char == "\\"") then
			return "\\\\\\"";
		end
		if(char == "\\'") then
			return "\\\\\\'";
		end
		return string.format("\\\\%03d", byte);
	end)
end

local function chararray(str)
	local tb = {};
	for i = 1, str:len(), 1 do
		table.insert(tb, str:sub(i, i));
	end
	return tb;
end

local function keys(tb)
	local keyset = {}
	local n=0
	for k, _ in pairs(tb) do
		n = n + 1
		keyset[n] = k
	end
	return keyset
end

local utf8char;
do
	local string_char = string.char
	function utf8char(cp)
	  if cp < 128 then
		return string_char(cp)
	  end
	  local suffix = cp % 64
	  local c4 = 128 + suffix
	  cp = (cp - suffix) / 64
	  if cp < 32 then
		return string_char(192 + cp, c4)
	  end
	  suffix = cp % 64
	  local c3 = 128 + suffix
	  cp = (cp - suffix) / 64
	  if cp < 16 then
		return string_char(224 + cp, c3, c4)
	  end
	  suffix = cp % 64
	  cp = (cp - suffix) / 64
	  return string_char(240 + cp, 128 + suffix, c3, c4)
	end
  end

local function shuffle(tb)
	for i = #tb, 2, -1 do
		local j = math.random(i)
		tb[i], tb[j] = tb[j], tb[i]
	end
	return tb
end

local function readonly(obj)
	local r = newproxy(true);
	getmetatable(r).__index = obj;
	return r;
end

return {
	lookupify = lookupify,
	unlookupify = unlookupify,
	escape = escape,
	chararray = chararray,
	keys = keys,
	shuffle = shuffle,
	utf8char = utf8char,
	readonly = readonly
}
`,"prometheus-src/prometheus/visitast.lua":`-- This Script is Part of the Prometheus Obfuscator by levno-710
--
-- visitast.lua
--
-- This Script provides a utility function for visiting each node of an AST.

local Ast = require("prometheus.ast");
local util = require("prometheus.util");

local AstKind = Ast.AstKind;
local lookupify = util.lookupify;

local visitAst, visitBlock, visitStatement, visitExpression;

function visitAst(ast, previsit, postvisit, data)
	ast.isAst = true;
	data = data or {};
	data.scopeStack = {};
	data.functionData = {
		depth = 0;
		scope = ast.body.scope;
		node = ast;
	};
	data.scope = ast.globalScope;
	data.globalScope = ast.globalScope;
	if(type(previsit) == "function") then
		local node, skip = previsit(ast, data);
		ast = node or ast;
		if skip then
			return ast;
		end
	end

	-- Is Function Block because global scope is treated like a Function
	ast.body = visitBlock(ast.body, previsit, postvisit, data, true);

	if(type(postvisit) == "function") then
		ast = postvisit(ast, data) or ast;
	end
	return ast;
end

local compundStats = lookupify{
	AstKind.CompoundAddStatement,
	AstKind.CompoundSubStatement,
	AstKind.CompoundMulStatement,
	AstKind.CompoundDivStatement,
	AstKind.CompoundModStatement,
	AstKind.CompoundPowStatement,
	AstKind.CompoundConcatStatement,
}

function visitBlock(block, previsit, postvisit, data, isFunctionBlock)
	block.isBlock = true;
	block.isFunctionBlock = isFunctionBlock or false;
	local parentScope = data.scope;
	data.scope = block.scope;
	local parentBlockData = data.blockData;
	data.blockData = {};
	table.insert(data.scopeStack, block.scope);
	if(type(previsit) == "function") then
		local node, skip = previsit(block, data);
		block = node or block;
		if skip then
			table.remove(data.scopeStack);
			data.scope = parentScope;
			data.blockData = parentBlockData;
			return block
		end
	end

	local i = 1;
	while i <= #block.statements do
		local statement = table.remove(block.statements, i);
		i = i - 1;
		local returnedStatements = {visitStatement(statement, previsit, postvisit, data)};
		for j, statement in ipairs(returnedStatements) do
			i = i + 1;
			table.insert(block.statements, i, statement);
		end
		i = i + 1;
	end

	if(type(postvisit) == "function") then
		block = postvisit(block, data) or block;
	end
	table.remove(data.scopeStack);
	data.scope = parentScope;
	data.blockData = parentBlockData;
	return block;
end

function visitStatement(statement, previsit, postvisit, data)
	statement.isStatement = true;
	if(type(previsit) == "function") then
		local node, skip = previsit(statement, data);
		statement = node or statement;
		if skip then
			return statement;
		end
	end

	-- Visit Child Nodes of Statement
	if(statement.kind == AstKind.ReturnStatement) then
		for i, expression in ipairs(statement.args) do
			statement.args[i] = visitExpression(expression, previsit, postvisit, data);
		end
	elseif(statement.kind == AstKind.PassSelfFunctionCallStatement or statement.kind == AstKind.FunctionCallStatement) then
		statement.base = visitExpression(statement.base, previsit, postvisit, data);
		for i, expression in ipairs(statement.args) do
			statement.args[i] = visitExpression(expression, previsit, postvisit, data);
		end
	elseif(statement.kind == AstKind.AssignmentStatement) then
		for i, primaryExpr in ipairs(statement.lhs) do
			statement.lhs[i] = visitExpression(primaryExpr, previsit, postvisit, data);
		end
		for i, expression in ipairs(statement.rhs) do
			statement.rhs[i] = visitExpression(expression, previsit, postvisit, data);
		end
	elseif(statement.kind == AstKind.FunctionDeclaration or statement.kind == AstKind.LocalFunctionDeclaration) then
		local parentFunctionData = data.functionData;
		data.functionData = {
			depth = parentFunctionData.depth + 1;
			scope = statement.body.scope;
			node = statement;
		};
		statement.body = visitBlock(statement.body, previsit, postvisit, data, true);
		data.functionData = parentFunctionData;
	elseif(statement.kind == AstKind.DoStatement) then
		statement.body = visitBlock(statement.body, previsit, postvisit, data, false);
	elseif(statement.kind == AstKind.WhileStatement) then
		statement.condition = visitExpression(statement.condition, previsit, postvisit, data);
		statement.body = visitBlock(statement.body, previsit, postvisit, data, false);
	elseif(statement.kind == AstKind.RepeatStatement) then
		statement.body = visitBlock(statement.body, previsit, postvisit, data);
		local parentScope = data.scope;
		data.scope = statement.body.scope;
		statement.condition = visitExpression(statement.condition, previsit, postvisit, data);
		data.scope = parentScope;
	elseif(statement.kind == AstKind.ForStatement) then
		statement.initialValue = visitExpression(statement.initialValue, previsit, postvisit, data);
		statement.finalValue = visitExpression(statement.finalValue, previsit, postvisit, data);
		statement.incrementBy = visitExpression(statement.incrementBy, previsit, postvisit, data);
		statement.body = visitBlock(statement.body, previsit, postvisit, data, false);
	elseif(statement.kind == AstKind.ForInStatement) then
		for i, expression in ipairs(statement.expressions) do
			statement.expressions[i] = visitExpression(expression, previsit, postvisit, data);
		end
		statement.body = visitBlock(statement.body, previsit, postvisit, data, false);
	elseif(statement.kind == AstKind.IfStatement) then
		statement.condition = visitExpression(statement.condition, previsit, postvisit, data);
		statement.body = visitBlock(statement.body, previsit, postvisit, data, false);
		for i, eif in ipairs(statement.elseifs) do
			eif.condition = visitExpression(eif.condition, previsit, postvisit, data);
			eif.body = visitBlock(eif.body, previsit, postvisit, data, false);
		end
		if(statement.elsebody) then
			statement.elsebody = visitBlock(statement.elsebody, previsit, postvisit, data, false);
		end
	elseif(statement.kind == AstKind.LocalVariableDeclaration) then
		for i, expression in ipairs(statement.expressions) do
			statement.expressions[i] = visitExpression(expression, previsit, postvisit, data);
		end
	elseif compundStats[statement.kind] then
		statement.lhs = visitExpression(statement.lhs, previsit, postvisit, data);
		statement.rhs = visitExpression(statement.rhs, previsit, postvisit, data);
	end

	if(type(postvisit) == "function") then
		local statements = {postvisit(statement, data)};
		if #statements > 0 then
			return unpack(statements);
		end
	end

	return statement;
end

local binaryExpressions = lookupify{
	AstKind.OrExpression,
	AstKind.AndExpression,
	AstKind.LessThanExpression,
	AstKind.GreaterThanExpression,
	AstKind.LessThanOrEqualsExpression,
	AstKind.GreaterThanOrEqualsExpression,
	AstKind.NotEqualsExpression,
	AstKind.EqualsExpression,
	AstKind.StrCatExpression,
	AstKind.AddExpression,
	AstKind.SubExpression,
	AstKind.MulExpression,
	AstKind.DivExpression,
	AstKind.ModExpression,
	AstKind.PowExpression,
}
function visitExpression(expression, previsit, postvisit, data)
	expression.isExpression = true;
	if(type(previsit) == "function") then
		local node, skip = previsit(expression, data);
		expression = node or expression;
		if skip then
			return expression;
		end
	end

	if(binaryExpressions[expression.kind]) then
		expression.lhs = visitExpression(expression.lhs, previsit, postvisit, data);
		expression.rhs = visitExpression(expression.rhs, previsit, postvisit, data);
	end

	if(expression.kind == AstKind.NotExpression or expression.kind == AstKind.NegateExpression or expression.kind == AstKind.LenExpression) then
		expression.rhs = visitExpression(expression.rhs, previsit, postvisit, data);
	end

	if(expression.kind == AstKind.PassSelfFunctionCallExpression or expression.kind == AstKind.FunctionCallExpression) then
		expression.base = visitExpression(expression.base, previsit, postvisit, data);
		for i, arg in ipairs(expression.args) do
			expression.args[i] = visitExpression(arg, previsit, postvisit, data);
		end
	end

	if(expression.kind == AstKind.FunctionLiteralExpression) then
		local parentFunctionData = data.functionData;
		data.functionData = {
			depth = parentFunctionData.depth + 1;
			scope = expression.body.scope;
			node = expression;
		};
		expression.body = visitBlock(expression.body, previsit, postvisit, data, true);
		data.functionData = parentFunctionData;
	end

	if(expression.kind == AstKind.TableConstructorExpression) then
		for i, entry in ipairs(expression.entries) do
			if entry.kind == AstKind.KeyedTableEntry then
				entry.key = visitExpression(entry.key, previsit, postvisit, data);
			end
			entry.value = visitExpression(entry.value, previsit, postvisit, data);
		end
	end

	if(expression.kind == AstKind.IndexExpression or expression.kind == AstKind.AssignmentIndexing) then
		expression.base = visitExpression(expression.base, previsit, postvisit, data);
		expression.index = visitExpression(expression.index, previsit, postvisit, data);
	end
	if(expression.kind == AstKind.IfElseExpression) then
		expression.condition = visitExpression(expression.condition, previsit, postvisit, data);
		expression.true_value = visitExpression(expression.true_value, previsit, postvisit, data);
		for i, elif in pairs(expression.elseifs) do
			elif.condition = visitExpression(elif.condition, previsit, postvisit, data);
			elif.value = visitExpression(elif.value, previsit, postvisit, data);
		end
		expression.false_value = visitExpression(expression.false_value, previsit, postvisit, data);
	end

	if(type(postvisit) == "function") then
		expression = postvisit(expression, data) or expression;
	end
	return expression;
end

return visitAst;
`,"prometheus-src/prometheus/vm/analysis.lua":`-- Adapt the shared lexical analysis to the VM's scope/slot lookup tables.
local analyzeBindings = require('prometheus.bindinganalysis')

return function(ast)
    local bindings = analyzeBindings(ast)
    local analysis = {owners = bindings.owners, captured = {}}
    for symbol in pairs(bindings.captured) do
        local scope, id = symbol.scope, symbol.id
        analysis.captured[scope] = analysis.captured[scope] or {}
        analysis.captured[scope][id] = true
    end
    return analysis
end
`,"prometheus-src/prometheus/vm/calls.lua":`-- Common calls and returns pass fixed value lists directly through native Lua.
local Kind = require('prometheus.ast').AstKind
local unpackValues = unpack or table.unpack

return function(Compiler, packList, expandable)
    function Compiler:call(node, count, tail)
        local fn, prefix
        if node.kind == Kind.PassSelfFunctionCallExpression then
            local object = self:expression(node.base, 1)[1]
            local key = self:load(node.passSelfFunctionName)
            fn = self:alloc(); self:emit('GETTABLE', fn, object, key)
            self:free(key)
            prefix = {object}
        else
            fn = self:expression(node.base, 1)[1]
        end

        local arity = #node.args + (prefix and 1 or 0)
        local fixed = arity <= 3 and not expandable(node.args[#node.args])
        local args, registers
        if fixed then
            registers = prefix or {}
            for _, argument in ipairs(node.args) do
                registers[#registers + 1] = self:expression(argument, 1)[1]
            end
            args = registers
        else
            args = packList(self, node.args, prefix)
        end
        local function releaseArguments()
            if fixed then
                for _, register in ipairs(registers) do self:free(register) end
            else
                self:free(args)
            end
            self:free(fn)
        end
        if tail then
            self:emit(fixed and ('TAILCALL' .. arity) or 'TAILCALL', fn, args)
            releaseArguments()
            return {}
        end
        local mode = count == 0 and 0 or (count == 1 and 1 or -1)
        local result = count ~= 0 and self:alloc() or 0
        self:emit(fixed and ('CALL' .. arity) or 'CALL', result, fn, args, mode)
        releaseArguments()
        if count == 0 then return {} end
        if count == -1 or count == 1 then return {result} end
        local results = {}
        for i = 1, count do
            results[i] = self:alloc(); self:emit('TAKE', results[i], result, i)
        end
        self:free(result)
        return results
    end

    function Compiler:fixedReturn(expressions)
        if #expressions > 3 or expandable(expressions[#expressions]) then return false end
        local registers = self:list(expressions, #expressions)
        self:emit('RETURN' .. #registers, unpackValues(registers))
        for _, register in ipairs(registers) do self:free(register) end
        return true
    end
end
`,"prometheus-src/prometheus/vm/compiler.lua":`-- Lower scoped AST nodes into function prototypes containing semantic instructions.
local analyze = require('prometheus.vm.analysis')
local opcodes = require('prometheus.vm.opcodes')
local optimize = require('prometheus.vm.optimize')
local Compiler = {}
Compiler.__index = Compiler

function Compiler:new(analysis, node, parent)
    local compiler = setmetatable({
        analysis = analysis, owner = node.body.scope, parent = parent,
        proto = {code = {}, constants = {}, children = {}, captures = {},
            params = {}, vararg = node.kind == 'TopNode', maxRegister = 0},
        locals = {}, upvalues = {}, constantIds = {}, registers = {}, freeRegisters = {},
        scopeStack = {}, loops = {},
    }, self)
    for _, arg in ipairs(node.args or {}) do
        if arg.kind == 'VarargExpression' then
            compiler.proto.vararg = true
        else
            compiler.proto.params[#compiler.proto.params + 1] = {
                compiler:localRegister(arg.scope, arg.id),
                compiler:isCaptured(arg.scope, arg.id),
            }
        end
    end
    return compiler
end

function Compiler:emit(op, ...)
    assert(opcodes[op], 'Unknown VM instruction: ' .. tostring(op))
    local code = self.proto.code
    code[#code + 1] = {opcodes[op], ...}
    return #code
end

function Compiler:position()
    return #self.proto.code + 1
end

function Compiler:patch(index, operand, value)
    self.proto.code[index][operand + 1] = value
end

function Compiler:alloc()
    local register = table.remove(self.freeRegisters)
    if not register then
        register = self.proto.maxRegister + 1
        self.proto.maxRegister = register
    end
    assert(not self.registers[register], 'Register already allocated')
    self.registers[register] = 'temporary'
    return register
end

function Compiler:free(register)
    assert(self.registers[register] == 'temporary', 'Cannot release register ' .. tostring(register))
    self:emit('CLEAR', register)
    self.registers[register] = nil
    self.freeRegisters[#self.freeRegisters + 1] = register
end

function Compiler:localRegister(scope, id)
    assert(self.analysis.owners[scope] == self.owner, 'Local belongs to another function')
    self.locals[scope] = self.locals[scope] or {}
    if not self.locals[scope][id] then
        local register = self:alloc()
        self.registers[register] = 'local'
        self.locals[scope][id] = register
    end
    return self.locals[scope][id]
end

function Compiler:isCaptured(scope, id)
    return not not (self.analysis.captured[scope] and self.analysis.captured[scope][id])
end

function Compiler:constant(value)
    assert(value ~= nil, 'Nil is represented by its own instruction')
    local ids = self.constantIds[type(value)]
    if not ids then ids = {}; self.constantIds[type(value)] = ids end
    -- NaN cannot be a table key; signed zero must not collapse into positive zero.
    local key = value
    if type(value) == 'number' and value == 0 then
        key = 1 / value < 0 and 'negative-zero' or 'positive-zero'
    end
    if value == value and ids[key] then return ids[key] end
    local index = #self.proto.constants + 1
    self.proto.constants[index] = value
    if value == value then ids[key] = index end
    return index
end

function Compiler:load(value)
    local register = self:alloc()
    if value == nil then self:emit('NIL', register)
    elseif type(value) == 'number' and value == 0 and 1 / value < 0 then
        -- Lua 5.1 merges signed-zero literals in one native function's constants.
        -- Materialize the sign with a VM operation so it cannot be lost in emitted data.
        self:emit('LOAD', register, self:constant(0))
        self:emit('NEG', register, register)
    else self:emit('LOAD', register, self:constant(value)) end
    return register
end

function Compiler:capture(scope, id)
    self.upvalues[scope] = self.upvalues[scope] or {}
    local index = self.upvalues[scope][id]
    if index then return index end
    assert(self.parent, 'Unresolved root upvalue')
    local description
    if self.analysis.owners[scope] == self.parent.owner then
        assert(self:isCaptured(scope, id), 'Captured local missing analysis')
        description = {0, self.parent:localRegister(scope, id)}
    else
        description = {1, self.parent:capture(scope, id)}
    end
    index = #self.proto.captures + 1
    self.proto.captures[index] = description
    self.upvalues[scope][id] = index
    return index
end

function Compiler:readVariable(scope, id)
    local register = self:alloc()
    if scope.isGlobal then
        self:emit('GLOBAL', register, self:constant(scope.variables[id]))
    elseif self.analysis.owners[scope] == self.owner then
        self:emit(self:isCaptured(scope, id) and 'GETCELL' or 'MOVE',
            register, self:localRegister(scope, id))
    else self:emit('GETUP', register, self:capture(scope, id)) end
    return register
end

function Compiler:writeVariable(scope, id, source)
    if scope.isGlobal then
        self:emit('SETGLOBAL', self:constant(scope.variables[id]), source)
    elseif self.analysis.owners[scope] == self.owner then
        self:emit(self:isCaptured(scope, id) and 'SETCELL' or 'MOVE',
            self:localRegister(scope, id), source)
    else self:emit('SETUP', self:capture(scope, id), source) end
end

function Compiler:initVariable(scope, id, source)
    self:emit(self:isCaptured(scope, id) and 'CELL' or 'MOVE',
        self:localRegister(scope, id), source or 0)
end

function Compiler:finish(node)
    self:block(node.body)
    self:emit('RETURN0')
    return self.proto
end

function Compiler:functionLiteral(node)
    local child = Compiler:new(self.analysis, node, self)
    local proto = child:finish(node)
    local children = self.proto.children
    children[#children + 1] = proto
    local register = self:alloc()
    self:emit('CLOSURE', register, #children)
    return register
end

function Compiler:compile(ast)
    local compiler = Compiler:new(analyze(ast), ast)
    return optimize(compiler:finish(ast))
end

require('prometheus.vm.expressions')(Compiler)
require('prometheus.vm.statements')(Compiler)
return Compiler
`,"prometheus-src/prometheus/vm/data.lua":`-- Scatter the emitted table graph; rebuild ordinary tables once before VM startup.
local Ast = require('prometheus.ast')
local Unparser = require('prometheus.unparser')
local Enums = require('prometheus.enums')
local shuffle = require('prometheus.util').shuffle
local Data = {}

Data.rebuild = [=[
local function rebuild(shards, count, root)
    local tables = {}
    for i = 1, count do tables[i] = {} end
    for i = 1, #shards do
        local shard = shards[i]
        for j = 1, #shard do
            local record = shard[j]
            local value = record[3]
            if record[4] then value = tables[value] end
            tables[record[1]][record[2]] = value
        end
        shards[i] = nil
    end
    return tables[root]
end
]=]

function Data.encode(proto, layout)
    local function prototype(value)
        local result, code, children = {}, {}, {}
        for i, instruction in ipairs(value.code) do
            code[i] = layout:encode(instruction)
        end
        for i, child in ipairs(value.children) do children[i] = prototype(child) end
        result[layout.fields.code] = code
        result[layout.fields.children] = children
        for _, name in ipairs({'constants', 'captures', 'params', 'vararg', 'maxRegister'}) do
            result[layout.fields[name]] = value[name]
        end
        return result
    end
    local root = {prototype(proto)}
    local tables, indices, keys = {}, {}, {}
    local function collect(value)
        if indices[value] then return end
        tables[#tables + 1] = value
        indices[value] = #tables
        local sorted = {}
        for key in pairs(value) do sorted[#sorted + 1] = key end
        table.sort(sorted)
        keys[value] = sorted
        for _, key in ipairs(sorted) do
            if type(value[key]) == 'table' then collect(value[key]) end
        end
    end
    collect(root)
    local ids = {}
    for i = 1, #tables do ids[i] = i end
    shuffle(ids)
    local unparser = Unparser:new({LuaVersion = Enums.LuaVersion.Lua51})
    local records = {}
    for i, value in ipairs(tables) do
        for _, key in ipairs(keys[value]) do
            local entry, reference = value[key], ''
            if type(entry) == 'table' then
                entry, reference = ids[indices[entry]], ',1'
            end
            local literal = unparser:unparseExpression(Ast.ConstantNode(entry), 0)
            records[#records + 1] = '{' .. ids[i] .. ',' .. key .. ',' .. literal .. reference .. '}'
        end
    end
    shuffle(records)
    local shards = {}
    local count = math.random(3, 5)
    for i = 1, count do shards[i] = {} end
    for i, record in ipairs(records) do
        local shard = shards[(i - 1) % count + 1]
        shard[#shard + 1] = record
    end
    for i, shard in ipairs(shards) do shards[i] = '{' .. table.concat(shard, ',') .. '}' end
    return '{' .. table.concat(shards, ',') .. '}', #tables, ids[indices[root]]
end

return Data
`,"prometheus-src/prometheus/vm/emit.lua":`-- Emit scattered data, startup reconstruction, and a generated interpreter.
local Parser = require('prometheus.parser')
local Enums = require('prometheus.enums')
local Runtime = require('prometheus.vm.runtime')
local Layout = require('prometheus.vm.layout')
local Data = require('prometheus.vm.data')
local Emit = {}

function Emit.source(proto, layout)
    layout = layout or Layout.new()
    local data, tables, root = Data.encode(proto, layout)
    local initializer = 'rebuild(' .. data .. ',' .. tables .. ',' .. root .. ')'
    local source, count = Runtime.build(layout):gsub('__PROTOTYPES__', function() return initializer end)
    assert(count == 1, 'Runtime template must contain one prototype marker')
    return Data.rebuild .. source
end

function Emit.ast(proto)
    local ast = Parser:new({LuaVersion = Enums.LuaVersion.Lua51}):parse(Emit.source(proto))
    local invocation = ast.body.statements[#ast.body.statements].args[1]
    ast.vmRuntime = invocation.base
    -- Only the large shard literal stays native. Cff protects the reconstruction call/helper.
    ast.vmData = invocation.args[1].args[1]
    return ast
end

return Emit
`,"prometheus-src/prometheus/vm/expressions.lua":`local Ast = require("prometheus.ast")
local Kind = Ast.AstKind
local compileTable = require("prometheus.vm.expressions_tables")

local binary = {
	[Kind.AddExpression] = "ADD", [Kind.SubExpression] = "SUB",
	[Kind.MulExpression] = "MUL", [Kind.DivExpression] = "DIV",
	[Kind.ModExpression] = "MOD", [Kind.PowExpression] = "POW",
	[Kind.StrCatExpression] = "CONCAT", [Kind.LessThanExpression] = "LT",
	[Kind.LessThanOrEqualsExpression] = "LE", [Kind.GreaterThanExpression] = "GT",
	[Kind.GreaterThanOrEqualsExpression] = "GE", [Kind.EqualsExpression] = "EQ",
	[Kind.NotEqualsExpression] = "NE",
}
local unary = {
	[Kind.NotExpression] = "NOT", [Kind.NegateExpression] = "NEG",
	[Kind.LenExpression] = "LEN",
}

local function install(Compiler)
	local function load(self, value)
		return self:load(value)
	end

	local function numberValue(value)
		if type(value) ~= "string" then return value end
		local prefix = value:sub(1, 2):lower()
		if prefix == "0b" then
			local result = 0
			for i = 3, #value do
				local digit = value:sub(i, i)
				assert(digit == "0" or digit == "1", "invalid binary number: " .. value)
				result = result * 2 + (digit == "1" and 1 or 0)
			end
			return result
		end
		local number = tonumber(value)
		assert(number ~= nil, "invalid numeric literal: " .. value)
		return number
	end

	local function packed(self, regs, tail)
		local result = self:alloc()
		self:emit("ARGS", result, regs, tail or 0)
		return result
	end

	local function expandable(node)
		if not node or node.isParenthesizedExpression then return false end
		return node.kind == Kind.FunctionCallExpression
			or node.kind == Kind.PassSelfFunctionCallExpression
			or node.kind == Kind.VarargExpression
	end

	local function packList(self, expressions, prefix)
		local regs = {}
		for i, reg in ipairs(prefix or {}) do regs[i] = reg end
		local tail = 0
		for i, node in ipairs(expressions) do
			if i == #expressions and expandable(node) then
				if node.kind == Kind.VarargExpression then
					tail = self:alloc()
					self:emit("VARARG", tail)
				else
					tail = self:call(node, -1)[1]
				end
			else
				regs[#regs + 1] = self:expression(node, 1)[1]
			end
		end
		local result = packed(self, regs, tail)
		for _, reg in ipairs(regs) do self:free(reg) end
		if tail ~= 0 then self:free(tail) end
		return result
	end

	local function scalar(self, node)
		local kind = node.kind
		if kind == Kind.NilExpression then
			local reg = self:alloc(); self:emit("NIL", reg); return reg
		elseif kind == Kind.NumberExpression then
			return load(self, numberValue(node.value))
		elseif kind == Kind.BooleanExpression or kind == Kind.StringExpression then
			return load(self, node.value)
		elseif kind == Kind.VariableExpression or kind == Kind.GlobalVariableExpression then
			return self:readVariable(node.scope, node.id)
		elseif kind == Kind.VarargExpression then
			local tuple = self:alloc(); self:emit("VARARG", tuple)
			local reg = self:alloc(); self:emit("TAKE", reg, tuple, 1)
			self:free(tuple); return reg
		elseif kind == Kind.IndexExpression then
			local base = self:expression(node.base, 1)[1]
			local key = self:expression(node.index, 1)[1]
			local result = self:alloc(); self:emit("GETTABLE", result, base, key)
			self:free(key); self:free(base); return result
		elseif binary[kind] then
			local left = self:expression(node.lhs, 1)[1]
			local right = self:expression(node.rhs, 1)[1]
			local result = self:alloc(); self:emit(binary[kind], result, left, right)
			self:free(right); self:free(left); return result
		elseif unary[kind] then
			local source = self:expression(node.rhs, 1)[1]
			local result = self:alloc(); self:emit(unary[kind], result, source)
			self:free(source); return result
		elseif kind == Kind.AndExpression or kind == Kind.OrExpression then
			local left = self:expression(node.lhs, 1)[1]
			local result = self:alloc(); self:emit("MOVE", result, left)
			local branch = self:emit(kind == Kind.AndExpression and "JFALSE" or "JTRUE", left, 0)
			self:free(left)
			local right = self:expression(node.rhs, 1)[1]
			self:emit("MOVE", result, right); self:free(right)
			local endJump = self:emit("JMP", 0)
			local skipped = self:position()
			self:emit("CLEAR", left)
			local finish = self:position()
			self:patch(branch, 2, skipped)
			self:patch(endJump, 1, finish)
			return result
		elseif kind == Kind.IfElseExpression then
			local result = self:alloc()
			local endJumps = {}
			local condition = self:expression(node.condition, 1)[1]
			local nextBranch = self:emit("JFALSE", condition, 0); self:free(condition)
			local value = self:expression(node.true_value, 1)[1]
			self:emit("MOVE", result, value); self:free(value)
			endJumps[#endJumps + 1] = self:emit("JMP", 0)
			local falseStart = self:position()
			self:patch(nextBranch, 2, falseStart)
			self:emit("CLEAR", condition)
			for _, clause in ipairs(node.elseifs or {}) do
				condition = self:expression(clause.condition, 1)[1]
				nextBranch = self:emit("JFALSE", condition, 0); self:free(condition)
				value = self:expression(clause.value, 1)[1]
				self:emit("MOVE", result, value); self:free(value)
				endJumps[#endJumps + 1] = self:emit("JMP", 0)
				falseStart = self:position()
				self:patch(nextBranch, 2, falseStart)
				self:emit("CLEAR", condition)
			end
			value = self:expression(node.false_value, 1)[1]
			self:emit("MOVE", result, value); self:free(value)
			local finish = self:position()
			for _, jump in ipairs(endJumps) do self:patch(jump, 1, finish) end
			return result
		elseif kind == Kind.FunctionLiteralExpression then
			return self:functionLiteral(node)
		elseif kind == Kind.TableConstructorExpression then
			return compileTable(self, node)
		elseif kind == Kind.FunctionCallExpression or kind == Kind.PassSelfFunctionCallExpression then
			return self:call(node, 1)[1]
		end
		error("unsupported expression kind: " .. tostring(kind))
	end

	function Compiler:expression(node, count)
		count = count == nil and 1 or count
		local forceScalarPack = count == -1 and node.isParenthesizedExpression
		if forceScalarPack then count = 1 end
		if count == 0 then
			if node.kind == Kind.FunctionCallExpression or node.kind == Kind.PassSelfFunctionCallExpression then
				self:call(node, 0)
			else
				self:free(scalar(self, node))
			end
			return {}
		end
		if node.kind == Kind.FunctionCallExpression or node.kind == Kind.PassSelfFunctionCallExpression then
			local results = self:call(node, count)
			if forceScalarPack then
				local tuple = packed(self, {results[1]}, 0)
				self:free(results[1])
				return {tuple}
			end
			return results
		end
		if node.kind == Kind.VarargExpression and count ~= 1 then
			local tuple = self:alloc(); self:emit("VARARG", tuple)
			if count == -1 then return {tuple} end
			local results = {}
			for i = 1, count do
				results[i] = self:alloc(); self:emit("TAKE", results[i], tuple, i)
			end
			self:free(tuple); return results
		end
		local value = scalar(self, node)
		if forceScalarPack then
			local tuple = packed(self, {value}, 0)
			self:free(value)
			return {tuple}
		end
		if count == -1 then
			local tuple = packed(self, {value}, 0)
			self:free(value)
			return {tuple}
		end
		local results = {value}
		while #results < count do
			local nilReg = self:alloc(); self:emit("NIL", nilReg)
			results[#results + 1] = nilReg
		end
		return results
	end

	function Compiler:list(expressions, count)
		expressions = expressions or {}
		if count == 0 then
			for _, node in ipairs(expressions) do self:expression(node, 0) end
			return {}
		end
		if count ~= nil then
			local results = {}
			for i, node in ipairs(expressions) do
				local remaining = count - #results
				if remaining <= 0 then
					self:expression(node, 0)
				elseif i == #expressions and expandable(node) then
					for _, register in ipairs(self:expression(node, remaining)) do
						results[#results + 1] = register
					end
				else
					results[#results + 1] = self:expression(node, 1)[1]
				end
			end
			while #results < count do results[#results + 1] = self:load(nil) end
			return results
		end
		local tuple = packList(self, expressions)
		return {tuple}
	end

	require('prometheus.vm.calls')(Compiler, packList, expandable)
end

return install
`,"prometheus-src/prometheus/vm/expressions_tables.lua":`local Ast = require("prometheus.ast")
local Kind = Ast.AstKind

local function expandable(node)
	return node and not node.isParenthesizedExpression and
		(node.kind == Kind.FunctionCallExpression or
		 node.kind == Kind.PassSelfFunctionCallExpression or
		 node.kind == Kind.VarargExpression)
end

local function packed(self, registers, tail)
	local snapshot = {}
	for i, register in ipairs(registers) do snapshot[i] = register end
	local tuple = self:alloc()
	self:emit("ARGS", tuple, snapshot, tail or 0)
	return tuple
end

local function flush(self, tableReg, registers, firstIndex)
	if #registers == 0 then return end
	local tuple = packed(self, registers, 0)
	self:emit("EXPAND", tableReg, firstIndex, tuple)
	self:free(tuple)
	for _, register in ipairs(registers) do self:free(register) end
	for i = #registers, 1, -1 do registers[i] = nil end
end

return function(self, node)
	local tableReg = self:alloc()
	self:emit("TABLE", tableReg)
	local arrayIndex, batchStart, batch = 1, 1, {}
	for index, entry in ipairs(node.entries) do
		if entry.kind == Kind.TableEntry then
			if index == #node.entries and expandable(entry.value) then
				local tail
				if entry.value.kind == Kind.VarargExpression then
					tail = self:alloc()
					self:emit("VARARG", tail)
				else
					tail = self:call(entry.value, -1)[1]
				end
				local tuple = packed(self, batch, tail)
				self:emit("EXPAND", tableReg, batchStart, tuple)
				self:free(tuple)
				for _, register in ipairs(batch) do self:free(register) end
				for i = #batch, 1, -1 do batch[i] = nil end
				self:free(tail)
			else
				local value = self:expression(entry.value, 1)[1]
				batch[#batch + 1] = value
				arrayIndex = arrayIndex + 1
				if #batch == 1 then batchStart = arrayIndex - 1 end
				if #batch == 50 then
					flush(self, tableReg, batch, batchStart)
					batchStart = arrayIndex
				end
			end
		else
			local key = self:expression(entry.key, 1)[1]
			local value = self:expression(entry.value, 1)[1]
			self:emit("SETTABLE", tableReg, key, value)
			self:free(value)
			self:free(key)
		end
	end
	flush(self, tableReg, batch, batchStart)
	return tableReg
end
`,"prometheus-src/prometheus/vm/flatten.lua":`-- Flatten a generated interpreter without virtualizing its large data initializer.
local Ast = require('prometheus.ast')
local visitast = require('prometheus.visitast')
local CffCompiler = require('prometheus.cff.compiler')
local analyzeBindings = require('prometheus.bindinganalysis')

local function externalVariables(ast, runtime)
    local owned, variables, seen = {}, {}, {}
    local wrapper = Ast.TopNode(Ast.Block({Ast.ReturnStatement({runtime})}))
    visitast(wrapper, function(node)
        if node.kind == 'Block' and node.scope then owned[node.scope] = true end
    end)
    local writes = false
    visitast(wrapper, function(node)
        local kind = node.kind
        if kind == 'VariableExpression' or kind == 'GlobalVariableExpression'
            or kind == 'AssignmentVariable' or kind == 'AssignmentGlobalVariable'
            or kind == 'FunctionDeclaration' then
            local scope = node.scope
            if scope and not scope.isGlobal and not owned[scope] then
                if kind == 'AssignmentVariable' or kind == 'AssignmentGlobalVariable'
                    or (kind == 'FunctionDeclaration' and #node.indices == 0) then
                    writes = true
                end
                seen[scope] = seen[scope] or {}
                if not seen[scope][node.id] then
                    variables[#variables + 1] = node.symbol
                    seen[scope][node.id] = true
                end
            end
        end
    end)
    -- A value prefix preserves shared tables/functions, but cannot forward writes
    -- to an outer lexical local. Use the ordinary compiler in that uncommon case.
    return variables, writes
end

return function(ast)
    analyzeBindings(ast)
    local runtime = ast.vmRuntime
    local variables, writes = externalVariables(ast, runtime)
    if writes then return nil end
    -- Give standalone captures fresh parameter bindings. The forwarding reads
    -- below still point to the actual outer symbols, without textual rebinding.
    local parameters, replacements = {}, {}
    local forwarded = {}
    for i, symbol in ipairs(variables) do
        local parameter = Ast.LocalSymbol('runtime_capture_' .. i)
        parameters[i], replacements[symbol] = parameter, parameter
        forwarded[i] = Ast.VariableExpression(symbol)
    end
    forwarded[#forwarded + 1] = Ast.VarargExpression()
    local wrapper = Ast.TopNode(Ast.Block({Ast.ReturnStatement({runtime})}))
    visitast(wrapper, nil, function(node)
        local parameter = replacements[node.symbol]
        if parameter then
            if node.kind == 'VariableExpression' then return Ast.VariableExpression(parameter) end
            if node.kind == 'FunctionDeclaration' then node.symbol = parameter end
        end
    end)
    local statements, arguments = {}, {Ast.VarargExpression()}
    if #parameters > 0 then
        statements[1] = Ast.LocalVariableDeclaration(parameters, {Ast.VarargExpression()})
        arguments = {Ast.FunctionCallExpression(Ast.GlobalVariableExpression('select'), {
            Ast.NumberExpression(#parameters + 1), Ast.VarargExpression(),
        })}
    end
    statements[#statements + 1] = Ast.ReturnStatement({Ast.FunctionCallExpression(runtime, arguments)})
    local standalone = Ast.TopNode(Ast.Block(statements))
    local flattened = CffCompiler:new():compile(standalone)
    local replacement = Ast.FunctionLiteralExpression({Ast.VarargExpression()}, Ast.Block({
        Ast.ReturnStatement({Ast.FunctionCallExpression(
            Ast.FunctionLiteralExpression({Ast.VarargExpression()}, flattened.body), forwarded)}),
    }))
    visitast(ast, function(node)
        if node == runtime then return replacement, true end
    end)
    ast.vmRuntime = replacement
    analyzeBindings(ast)
    return ast
end
`,"prometheus-src/prometheus/vm/layout.lua":`-- Choose instruction encoding and metadata keys per VM. Compiler IR stays semantic.
local opcodes = require('prometheus.vm.opcodes')
local shuffle = require('prometheus.util').shuffle
local fields = {'code', 'constants', 'captures', 'params', 'vararg', 'maxRegister', 'children'}
local Layout = {}
Layout.__index = Layout

function Layout.new()
    local entries, ids = {}, {}
    for name, id in pairs(opcodes) do
        entries[#entries + 1] = {name = name, id = id}
    end
    table.sort(entries, function(left, right) return left.id < right.id end)
    for i = 1, #entries do ids[i] = i end
    shuffle(ids)
    local layout = setmetatable({opcodes = {}, ids = {},
        operands = shuffle({2, 3, 4, 5})}, Layout)
    for i, entry in ipairs(entries) do
        layout.opcodes[entry.name] = ids[i]
        layout.ids[entry.id] = ids[i]
    end
    layout.fields = {}
    local used = {}
    for _, name in ipairs(fields) do
        local key
        repeat key = math.random(1024, 16777215) until not used[key]
        used[key] = true
        layout.fields[name] = key
    end
    -- Counted tuples also contain positive array indices, so keep metadata negative.
    layout.countKey = -math.random(1024, 16777215)
    return layout
end

function Layout:encode(instruction)
    local encoded = {self.ids[instruction[1]] or instruction[1]}
    local length = 1
    for operand = 2, #instruction do
        local slot = assert(self.operands[operand - 1], 'Missing VM operand slot')
        encoded[slot] = instruction[operand]
        length = math.max(length, slot)
    end
    return encoded, length
end

return Layout
`,"prometheus-src/prometheus/vm/opcodes.lua":`-- Semantic instruction IDs for compiler IR. Emission assigns randomized IDs.
local names = {
    'LOAD', 'NIL', 'MOVE', 'CLEAR', 'CELL', 'GETCELL', 'SETCELL',
    'GETUP', 'SETUP', 'GLOBAL', 'SETGLOBAL', 'GETTABLE', 'SETTABLE',
    'TABLE', 'EXPAND', 'ARGS', 'TAKE', 'VARARG', 'CALL', 'RETURN',
    'TAILCALL', 'CLOSURE', 'JMP', 'JFALSE', 'JTRUE',
    'ADD', 'SUB', 'MUL', 'DIV', 'MOD', 'POW', 'CONCAT',
    'LT', 'LE', 'GT', 'GE', 'EQ', 'NE', 'NOT', 'NEG', 'LEN',
    'FORPREP', 'FORCHECK',
    'CLEARS', 'CALL0', 'CALL1', 'CALL2', 'CALL3',
    'TAILCALL0', 'TAILCALL1', 'TAILCALL2', 'TAILCALL3',
    'RETURN0', 'RETURN1', 'RETURN2', 'RETURN3',
}
local opcodes = {}
for id, name in ipairs(names) do opcodes[name] = id end
return opcodes
`,"prometheus-src/prometheus/vm/optimize.lua":`-- Conservative, basic-block-local peephole passes for VM prototypes.
local opcodes = require('prometheus.vm.opcodes')
local names = {}
for name, id in pairs(opcodes) do names[id] = name end

local function name(ins) return names[ins[1]] end
local function copy(ins)
    local result = {}
    for i = 1, #ins do result[i] = ins[i] end
    return result
end
local function isUnary(op) return op == 'NOT' or op == 'NEG' or op == 'LEN' end
local function isBinary(op)
    return op == 'ADD' or op == 'SUB' or op == 'MUL' or op == 'DIV'
        or op == 'MOD' or op == 'POW' or op == 'CONCAT' or op == 'LT'
        or op == 'LE' or op == 'GT' or op == 'GE' or op == 'EQ' or op == 'NE'
end
local function producer(ins)
    local op = name(ins)
    if op == 'LOAD' or op == 'NIL' or op == 'GLOBAL' or op == 'GETUP'
        or op == 'GETCELL' or op == 'GETTABLE' or op == 'NOT' or op == 'NEG'
        or op == 'LEN' or isBinary(op) then return ins[2] end
    if op == 'CALL' or op == 'CALL0' or op == 'CALL1' or op == 'CALL2' or op == 'CALL3' then
        if ins[5] == 1 then return ins[2] end
    end
end
local function terminal(op)
    return op == 'JMP' or op == 'RETURN' or op == 'TAILCALL'
        or op == 'RETURN0' or op == 'RETURN1' or op == 'RETURN2' or op == 'RETURN3'
        or op == 'TAILCALL0' or op == 'TAILCALL1' or op == 'TAILCALL2' or op == 'TAILCALL3'
end

-- Track only values proven nil. An unknown writer invalidates the proof.
local function updateNil(state, ins)
    local op = name(ins)
    if op == 'CLEAR' then state[ins[2]] = true; return end
    if op == 'CLEARS' then
        for _, reg in ipairs(ins[2] or {}) do state[reg] = true end
        return
    end
    if op == 'NIL' then state[ins[2]] = true; return end
    if op == 'MOVE' then
        state[ins[2]] = state[ins[3]] and true or nil
        return
    end
    if op == 'JTRUE' or op == 'JFALSE' then state[ins[2]] = true; return end
    if op == 'FORPREP' then state[ins[2]], state[ins[3]], state[ins[4]] = nil, nil, nil; return end
    if op == 'FORCHECK' then state[ins[2]] = nil; return end
    if op == 'EXPAND' then return end -- Writes table fields, not VM registers.
    local writes = op == 'LOAD' or op == 'NIL' or op == 'MOVE' or op == 'CELL'
        or op == 'GETCELL' or op == 'GETUP' or op == 'GLOBAL' or op == 'GETTABLE'
        or op == 'TABLE' or op == 'ARGS' or op == 'TAKE' or op == 'VARARG'
        or op == 'CLOSURE' or isUnary(op) or isBinary(op)
    if op == 'CALL' or op == 'CALL0' or op == 'CALL1' or op == 'CALL2' or op == 'CALL3' then
        if ins[5] == 0 then return end
        state[ins[2]] = nil; return
    end
    if writes then state[ins[2]] = nil; return end
    if op == 'JMP' or op == 'SETCELL' or op == 'SETUP' or op == 'SETGLOBAL'
        or op == 'SETTABLE' or op == 'TAILCALL' or op == 'TAILCALL0'
        or op == 'TAILCALL1' or op == 'TAILCALL2' or op == 'TAILCALL3'
        or op == 'RETURN' or op == 'RETURN0' or op == 'RETURN1'
        or op == 'RETURN2' or op == 'RETURN3' then return end
    for reg in pairs(state) do state[reg] = nil end
end

local function initialNil(proto, first)
    local state = {}
    if first == 1 then
        -- A back edge to the first block can carry values from an earlier pass.
        for _, instruction in ipairs(proto.code) do
            local op = name(instruction)
            if (op == 'JMP' and instruction[2] == 1)
                or ((op == 'JTRUE' or op == 'JFALSE') and instruction[3] == 1) then
                return state
            end
        end
        for reg = 1, proto.maxRegister or 0 do state[reg] = true end
        for _, param in ipairs(proto.params or {}) do state[param[1]] = nil end
    end
    return state
end
local function rewriteBlock(block, proto)
    local result, state, i = {}, initialNil(proto, block[1].pc), 1
    local function emit(item)
        result[#result + 1] = item
        updateNil(state, item.ins)
    end
    while i <= #block do
        local item, ins = block[i], block[i].ins
        local dst = producer(ins)
        if dst and state[dst] then
            local moveAt = i + 1
            while moveAt <= #block and name(block[moveAt].ins) == 'CLEAR' do
                moveAt = moveAt + 1
            end
            if moveAt <= #block and name(block[moveAt].ins) == 'MOVE'
                and block[moveAt].ins[3] == dst then
                local target, ok = block[moveAt].ins[2], true
                if target == dst then ok = false end
                for j = i + 1, moveAt - 1 do
                    local reg = block[j].ins[2]
                    if reg == dst or reg == target then ok = false end
                end
                local last, found = moveAt + 1, false
                while ok and last <= #block and name(block[last].ins) == 'CLEAR' do
                    local reg = block[last].ins[2]
                    if reg == target then ok = false end
                    if reg == dst then found = true; break end
                    last = last + 1
                end
                if ok and found then
                    local changed = copy(ins); changed[2] = target
                    emit({pc = item.pc, ins = changed})
                    for j = i + 1, moveAt - 1 do emit(block[j]) end
                    for j = moveAt + 1, last do
                        if block[j].ins[2] ~= dst then emit(block[j]) end
                    end
                    i = last + 1
                else
                    emit(item); i = i + 1
                end
            else
                emit(item); i = i + 1
            end
        elseif name(ins) == 'MOVE' then
            local temp, source = ins[2], ins[3]
            local consumer = i + 1
            if temp ~= source and state[temp] then
                while consumer <= #block do
                    local pure = name(block[consumer].ins)
                    if pure ~= 'LOAD' and pure ~= 'NIL' then break end
                    local written = block[consumer].ins[2]
                    if written == temp or written == source then break end
                    consumer = consumer + 1
                end
                if consumer <= #block then
                    local use, useOp = block[consumer].ins, name(block[consumer].ins)
                    local used = isUnary(useOp) and use[3] == temp
                        or isBinary(useOp) and (use[3] == temp or use[4] == temp)
                    if used and use[2] ~= temp then
                        local last, found = consumer + 1, false
                        while last <= #block and name(block[last].ins) == 'CLEAR' do
                            if block[last].ins[2] == temp then found = true; break end
                            last = last + 1
                        end
                        if found then
                            -- The removed MOVE's destination is known nil and stays nil.
                            for j = i + 1, consumer - 1 do emit(block[j]) end
                            local changed = copy(use)
                            if changed[3] == temp then changed[3] = source end
                            if changed[4] == temp then changed[4] = source end
                            emit({pc = block[consumer].pc, ins = changed})
                            for j = consumer + 1, last do
                                if block[j].ins[2] ~= temp then emit(block[j]) end
                            end
                            i = last + 1
                        else
                            emit(item); i = i + 1
                        end
                    else
                        emit(item); i = i + 1
                    end
                else
                    emit(item); i = i + 1
                end
            else
                emit(item); i = i + 1
            end
        else
            emit(item); i = i + 1
        end
    end
    return result
end

local function compactBlock(block, proto, output)
    local state = initialNil(proto, block[1].pc)
    local pending = {}
    local function flush()
        if #pending > 0 then
            if #pending > 1 and opcodes.CLEARS then
                local regs, pcs = {}, {}
                for _, item in ipairs(pending) do regs[#regs + 1] = item.ins[2]; pcs[#pcs + 1] = item.pc end
                output[#output + 1] = {ins = {opcodes.CLEARS, regs}, pcs = pcs}
            else
                for _, item in ipairs(pending) do output[#output + 1] = {ins = item.ins, pcs = {item.pc}} end
            end
            pending = {}
        end
    end
    for _, item in ipairs(block) do
        local ins = item.ins
        if name(ins) == 'CLEAR' then
            local reg = ins[2]
            if not state[reg] then pending[#pending + 1] = item; state[reg] = true end
        else
            flush()
            updateNil(state, ins)
            output[#output + 1] = {ins = ins, pcs = {item.pc}}
        end
    end
    flush()
end

local function optimizeCode(proto)
    local code, count = proto.code, #proto.code
    if count == 0 then return end
    local leaders = {[1] = true, [count + 1] = true}
    for pc, ins in ipairs(code) do
        local op = name(ins)
        if op == 'JMP' then
            leaders[pc + 1] = true; leaders[ins[2]] = true
        elseif op == 'JTRUE' or op == 'JFALSE' then
            leaders[pc + 1] = true; leaders[ins[3]] = true
        elseif terminal(op) then leaders[pc + 1] = true end
    end
    local starts = {}
    for pc = 1, count + 1 do if leaders[pc] then starts[#starts + 1] = pc end end
    local output, oldToNew = {}, {}
    for b = 1, #starts - 1 do
        local first, last = starts[b], starts[b + 1] - 1
        local block = {}
        for pc = first, last do block[#block + 1] = {pc = pc, ins = code[pc]} end
        block = rewriteBlock(block, proto)
        local before = #output
        compactBlock(block, proto, output)
        -- Map retained and batched original instructions to their emitted PC.
        for index = before + 1, #output do
            local entry = output[index]
            for _, pc in ipairs(entry.pcs) do oldToNew[pc] = index end
        end
        local nextPc = #output + 1
        for pc = last, first, -1 do
            if oldToNew[pc] then nextPc = oldToNew[pc] else oldToNew[pc] = nextPc end
        end
    end
    oldToNew[count + 1] = #output + 1
    for _, entry in ipairs(output) do
        local ins, op = entry.ins, name(entry.ins)
        if op == 'JMP' then ins[2] = oldToNew[ins[2]]
        elseif op == 'JTRUE' or op == 'JFALSE' then ins[3] = oldToNew[ins[3]] end
    end
    local compact = {}
    for _, entry in ipairs(output) do compact[#compact + 1] = entry.ins end
    proto.code = compact
end

local function optimize(proto)
    for _, child in ipairs(proto.children or {}) do optimize(child) end
    optimizeCode(proto)
    return proto
end

return optimize
`,"prometheus-src/prometheus/vm/runtime.lua":`-- Builds the Lua 5.1 runtime used by the bytecode emitter. The emitter replaces
-- __PROTOTYPES__ with the startup reconstruction call before parsing the source.
local dispatch = require("prometheus.vm.runtime_dispatch")
local Layout = require("prometheus.vm.layout")

local Runtime = {}

-- Do not query \`getfenv(wrapper)\` from the wrapper body: that self-reference
-- forms a closure cycle that Cff can keep alive after the wrapper is discarded.
local template = [=[
return (function(prototypes, ...)
local nativeGetfenv, nativeSetfenv = getfenv, setfenv
local nativeUnpack = unpack or table.unpack
local nativeTonumber, nativeError = tonumber, error
local nativeSelect, nativeIpairs = select, ipairs

local function pack(...)
    return { [__COUNT_KEY__] = nativeSelect("#", ...), ... }
end

local make

local function loop(P, U, Env, R, V)
    local code, K = P[__FIELD_code__], P[__FIELD_constants__]
    local pc = 1
    local I, opcode, a, b, c, d, x, y, z
    while true do
        I = code[pc]
        pc = pc + 1
        opcode = I[1]
        __FETCH_OPERANDS__
        __DISPATCH__
        I, opcode, a, b, c, d, x, y, z = nil, nil, nil, nil, nil, nil, nil, nil, nil
    end
end

local function start(P, U, Env, ...)
    local R
    local params = P[__FIELD_params__]
    local V
    if not P[__FIELD_vararg__] and #params <= 3 then
        R = {}
        local argc = nativeSelect("#", ...)
        for i = 1, #params do
            local param = params[i]
            local value
            if i <= argc then value = nativeSelect(i, ...) end
            if param[2] then
                R[param[1]] = { value }
            else
                R[param[1]] = value
            end
        end
    else
        local incoming = pack(...)
        R = {}
        for i = 1, #params do
            local param = params[i]
            local value = incoming[i]
            if param[2] then
                R[param[1]] = { value }
            else
                R[param[1]] = value
            end
        end
        V = { [__COUNT_KEY__] = 0 }
        if P[__FIELD_vararg__] then
            local first = #params + 1
            if incoming[__COUNT_KEY__] > #params then
                V[__COUNT_KEY__] = incoming[__COUNT_KEY__] - #params
            end
            for i = 1, V[__COUNT_KEY__] do
                V[i] = incoming[first + i - 1]
            end
        end
        incoming = nil
    end
    return loop(P, U, Env, R, V)
end

make = function(P, U, inheritedEnv)
    local wrapper
    if nativeGetfenv and nativeSetfenv then
        wrapper = function(...)
            local Env = nativeGetfenv(1)
            return start(P, U, Env, ...)
        end
        nativeSetfenv(wrapper, inheritedEnv)
    else
        wrapper = function(...)
            return start(P, U, inheritedEnv, ...)
        end
    end
    return wrapper
end

local entryEnv = nativeGetfenv and nativeGetfenv(1) or _ENV or _G
return make(prototypes[1], {}, entryEnv)(...)
end)(__PROTOTYPES__, ...)
]=]

function Runtime.build(layout)
    layout = layout or Layout.new()
    local operands = layout.operands
    local fetch = "a, b, c, d = I[" .. tostring(operands[1]) .. "], I["
        .. tostring(operands[2]) .. "], I[" .. tostring(operands[3]) .. "], I["
        .. tostring(operands[4]) .. "]"
    local source = template:gsub("__FETCH_OPERANDS__", function()
        return fetch
    end):gsub("__DISPATCH__", function()
        return dispatch.build(layout.opcodes)
    end)
    source = source:gsub('__FIELD_(%w+)__', function(name)
        return tostring(assert(layout.fields[name], 'Missing VM prototype key'))
    end):gsub('__COUNT_KEY__', function() return tostring(layout.countKey) end)
    return source
end

return Runtime
`,"prometheus-src/prometheus/vm/runtime_calls.lua":`-- Call, return, and register clearing handlers. Fixed arities keep argument
-- passing in native Lua calls so the VM does not build a temporary arg pack.
local M = {}

local bodies = {
    CALL = [==[
        x, y = R[b], R[c]
        if nativeGetfenv and x == nativeGetfenv and (y[__COUNT_KEY__] == 0 or y[1] == nil or y[1] == 1) then
            if d == -1 then
                R[a] = { [__COUNT_KEY__] = 1, Env }
            elseif d == 1 then
                R[a] = Env
            end
        elseif d == -1 then
            R[a] = pack(x(nativeUnpack(y, 1, y[__COUNT_KEY__])))
        elseif d == 1 then
            R[a] = x(nativeUnpack(y, 1, y[__COUNT_KEY__]))
        else
            x(nativeUnpack(y, 1, y[__COUNT_KEY__]))
        end
    ]==],
    TAILCALL = [==[
        x, y = R[a], R[b]
        if nativeGetfenv and x == nativeGetfenv and (y[__COUNT_KEY__] == 0 or y[1] == nil or y[1] == 1) then
            return Env
        end
        return x(nativeUnpack(y, 1, y[__COUNT_KEY__]))
    ]==],
    CLEARS = [==[
        for x = 1, #a do
            R[a[x]] = nil
        end
    ]==],
    RETURN0 = [==[return]==],
    RETURN1 = [==[return R[a]]==],
    RETURN2 = [==[return R[a], R[b]]==],
    RETURN3 = [==[return R[a], R[b], R[c]]==],
}

local function callBody(arity)
    local args = {}
    for i = 1, arity do
        args[i] = "R[c[" .. tostring(i) .. "]]"
    end
    local invocation = "x(" .. table.concat(args, ", ") .. ")"
    local intercept = arity == 0
        and "nativeGetfenv and x == nativeGetfenv"
        or "nativeGetfenv and x == nativeGetfenv and (R[c[1]] == nil or R[c[1]] == 1)"
    return "x = R[b]\\n"
        .. "if " .. intercept .. " then\\n"
        .. "    if d == -1 then\\n"
        .. "        R[a] = { [__COUNT_KEY__] = 1, Env }\\n"
        .. "    elseif d == 1 then\\n"
        .. "        R[a] = Env\\n"
        .. "    end\\n"
        .. "elseif d == -1 then\\n"
        .. "    R[a] = pack(" .. invocation .. ")\\n"
        .. "elseif d == 1 then\\n"
        .. "    R[a] = " .. invocation .. "\\n"
        .. "else\\n"
        .. "    " .. invocation .. "\\n"
        .. "end"
end

local function tailCallBody(arity)
    local args = {}
    for i = 1, arity do
        args[i] = "R[b[" .. tostring(i) .. "]]"
    end
    local invocation = "x(" .. table.concat(args, ", ") .. ")"
    local intercept = arity == 0
        and "nativeGetfenv and x == nativeGetfenv"
        or "nativeGetfenv and x == nativeGetfenv and (R[b[1]] == nil or R[b[1]] == 1)"
    return "x = R[a]\\n"
        .. "if " .. intercept .. " then\\n"
        .. "    return Env\\n"
        .. "end\\n"
        .. "return " .. invocation
end

for arity = 0, 3 do
    bodies["CALL" .. tostring(arity)] = callBody(arity)
    bodies["TAILCALL" .. tostring(arity)] = tailCallBody(arity)
end

function M.merge(target)
    for name, body in pairs(bodies) do
        target[name] = body
    end
    return target
end

return M
`,"prometheus-src/prometheus/vm/runtime_dispatch.lua":`-- Opcode bodies are kept separate from runtime.lua so both files stay small.
local M = {}
local callBodies = require("prometheus.vm.runtime_calls")

local bodies = {
    LOAD = [==[R[a] = K[b]]==],
    NIL = [==[R[a] = nil]==],
    MOVE = [==[R[a] = R[b]]==],
    CLEAR = [==[R[a] = nil]==],
    CELL = [==[x = R[b]; R[a] = { x }]==],
    GETCELL = [==[R[a] = R[b][1]]==],
    SETCELL = [==[R[a][1] = R[b]]==],
    GETUP = [==[R[a] = U[b][1]]==],
    SETUP = [==[U[a][1] = R[b]]==],
    GLOBAL = [==[R[a] = Env[K[b]]]==],
    SETGLOBAL = [==[Env[K[a]] = R[b]]==],
    GETTABLE = [==[R[a] = R[b][R[c]]]==],
    SETTABLE = [==[R[a][R[b]] = R[c]]==],
    TABLE = [==[R[a] = {}]==],
    EXPAND = [==[
        x = R[c]
        for y = 1, x[__COUNT_KEY__] do
            R[a][b + y - 1] = x[y]
        end
    ]==],
    ARGS = [==[
        x = { [__COUNT_KEY__] = 0 }
        for _, y in nativeIpairs(b) do
            x[__COUNT_KEY__] = x[__COUNT_KEY__] + 1
            x[x[__COUNT_KEY__]] = R[y]
        end
        if c ~= 0 then
            y = R[c]
            for d = 1, y[__COUNT_KEY__] do
                x[__COUNT_KEY__] = x[__COUNT_KEY__] + 1
                x[x[__COUNT_KEY__]] = y[d]
            end
        end
        R[a] = x
    ]==],
    TAKE = [==[R[a] = R[b][c]]==],
    VARARG = [==[R[a] = V]==],
    RETURN = [==[
        x = R[a]
        return nativeUnpack(x, 1, x[__COUNT_KEY__])
    ]==],
    CLOSURE = [==[
        x = P[__FIELD_children__][b]
        y = {}
        for d = 1, #x[__FIELD_captures__] do
            local capture = x[__FIELD_captures__][d]
            if capture[1] == 0 then
                y[d] = R[capture[2]]
            else
                y[d] = U[capture[2]]
            end
        end
        R[a] = make(x, y, Env)
    ]==],
    JMP = [==[pc = a]==],
    JFALSE = [==[x = R[a]; R[a] = nil; if not x then pc = b end]==],
    JTRUE = [==[x = R[a]; R[a] = nil; if x then pc = b end]==],
    ADD = [==[R[a] = R[b] + R[c]]==],
    SUB = [==[R[a] = R[b] - R[c]]==],
    MUL = [==[R[a] = R[b] * R[c]]==],
    DIV = [==[R[a] = R[b] / R[c]]==],
    MOD = [==[R[a] = R[b] % R[c]]==],
    POW = [==[R[a] = R[b] ^ R[c]]==],
    CONCAT = [==[R[a] = R[b] .. R[c]]==],
    LT = [==[R[a] = R[b] < R[c]]==],
    LE = [==[R[a] = R[b] <= R[c]]==],
    GT = [==[R[a] = R[b] > R[c]]==],
    GE = [==[R[a] = R[b] >= R[c]]==],
    EQ = [==[R[a] = R[b] == R[c]]==],
    NE = [==[R[a] = R[b] ~= R[c]]==],
    NOT = [==[R[a] = not R[b]]==],
    NEG = [==[R[a] = -R[b]]==],
    LEN = [==[R[a] = #R[b]]==],
    FORPREP = [==[
        x = nativeTonumber(R[a])
        if x == nil then nativeError("'for' initial value must be a number", 0) end
        R[a] = x
        x = nativeTonumber(R[b])
        if x == nil then nativeError("'for' limit must be a number", 0) end
        R[b] = x
        x = nativeTonumber(R[c])
        if x == nil then nativeError("'for' step must be a number", 0) end
        R[c] = x
    ]==],
    FORCHECK = [==[
        if R[d] ~= R[d] then
            R[a] = false
        elseif R[d] > 0 then
            R[a] = R[b] <= R[c]
        else
            R[a] = R[b] >= R[c]
        end
    ]==],
}

callBodies.merge(bodies)

function M.build(opcodes)
    local entries = {}
    for name, id in pairs(opcodes) do
        local body = bodies[name]
        assert(body and type(id) == "number", "Missing VM handler for opcode " .. tostring(name))
        entries[#entries + 1] = { id = id, name = name, body = body }
    end
    table.sort(entries, function(left, right) return left.id < right.id end)
    for i = 2, #entries do
        assert(entries[i - 1].id < entries[i].id, "Duplicate VM opcode ID")
    end

    local function indent(source, prefix)
        return prefix .. source:gsub("\\n", "\\n" .. prefix)
    end

    local function emit(first, last, depth)
        local prefix = string.rep("    ", depth)
        if first == last then
            local entry = entries[first]
            return prefix .. "if opcode == " .. tostring(entry.id) .. " then\\n"
                .. indent(entry.body, prefix .. "    ") .. "\\n"
                .. prefix .. "else\\n"
                .. prefix .. "    nativeError('unknown VM opcode: ' .. tostring(opcode), 0)\\n"
                .. prefix .. "end"
        end

        local middle = math.floor((first + last) / 2)
        local split = entries[middle].id
        return prefix .. "if opcode <= " .. tostring(split) .. " then\\n"
            .. emit(first, middle, depth + 1) .. "\\n"
            .. prefix .. "else\\n"
            .. emit(middle + 1, last, depth + 1) .. "\\n"
            .. prefix .. "end"
    end

    assert(#entries > 0, "No VM opcodes registered")
    return emit(1, #entries, 0)
end

return M
`,"prometheus-src/prometheus/vm/statements.lua":`local Ast = require("prometheus.ast")
local K = Ast.AstKind

local function emitList(self, expressions, count)
	return self:list(expressions or {}, count)
end

local function release(self, regs)
	for _, reg in ipairs(regs or {}) do self:free(reg) end
end

local function emitWriteIndex(self, base, key, value)
	self:emit("SETTABLE", base, key, value)
end

return function(Compiler)
	function Compiler:cleanup(scope)
		if not scope or scope.isGlobal then return end
		for id = 1, #scope.variables do
			if scope.variables[id] then self:emit("CLEAR", self:localRegister(scope, id)) end
		end
	end

	function Compiler:cleanupTo(scopeDepth)
		for i = #self.scopeStack, scopeDepth + 1, -1 do
			self:cleanup(self.scopeStack[i])
		end
	end

	function Compiler:block(block, doCleanup)
		local scope = block.scope
		table.insert(self.scopeStack, scope)
		for _, statement in ipairs(block.statements) do self:statement(statement) end
		if doCleanup ~= false then self:cleanup(scope) end
		self.scopeStack[#self.scopeStack] = nil
	end

	local function loopFor(self, node)
		for i = #self.loops, 1, -1 do
			if self.loops[i].node == node then return self.loops[i] end
		end
		error("loop statement is not active")
	end

	local function loopRecord(self, node, continueDepth)
		local record = {
			node = node,
			scopeDepth = #self.scopeStack,
			continueDepth = continueDepth or #self.scopeStack,
			breaks = {},
			continues = {},
		}
		table.insert(self.loops, record)
		return record
	end

	local function finishLoop(self, record, breakTarget, continueTarget)
		for _, jump in ipairs(record.breaks) do self:patch(jump, 1, breakTarget) end
		for _, jump in ipairs(record.continues) do self:patch(jump, 1, continueTarget) end
		self.loops[#self.loops] = nil
	end

	local function compileIf(self, node)
		local done = {}
		local branches = {{condition = node.condition, body = node.body}}
		for _, branch in ipairs(node.elseifs or {}) do branches[#branches + 1] = branch end
		for _, branch in ipairs(branches) do
			local condition = self:expression(branch.condition, 1)[1]
			local skip = self:emit("JFALSE", condition, 0)
			self:free(condition)
			self:block(branch.body, true)
			done[#done + 1] = self:emit("JMP", 0)
			self:patch(skip, 2, self:position())
		end
		if node.elsebody then self:block(node.elsebody, true) end
		local endPos = self:position()
		for _, jump in ipairs(done) do self:patch(jump, 1, endPos) end
	end

	local function compileWhile(self, node)
		local record = loopRecord(self, node)
		local check = self:position()
		local condition = self:expression(node.condition, 1)[1]
		local exit = self:emit("JFALSE", condition, 0)
		self:block(node.body, true)
		local continueTarget = self:position()
		self:emit("JMP", check)
		local clearPos = self:position()
		self:patch(exit, 2, clearPos)
		finishLoop(self, record, clearPos, continueTarget)
		self:free(condition)
	end

	local function compileRepeat(self, node)
		local record = loopRecord(self, node, #self.scopeStack + 1)
		record.bodyScope = node.body.scope
		local start = self:position()
		self:block(node.body, false)
		local conditionPos = self:position()
		local condition = self:expression(node.condition, 1)[1]
		local leave = self:emit("JTRUE", condition, 0)
		self:free(condition)
		self:cleanup(node.body.scope)
		self:emit("JMP", start)
		local cleanupExit = self:position()
		self:patch(leave, 2, cleanupExit)
		self:cleanup(node.body.scope)
		local endPos = self:position()
		finishLoop(self, record, endPos, conditionPos)
	end

	local function compileNumericFor(self, node)
		local control = emitList(self, {node.initialValue, node.finalValue, node.incrementBy}, 3)
		self:emit("FORPREP", control[1], control[2], control[3])
		local record = loopRecord(self, node)
		local check = self:position()
		local ok = self:alloc()
		self:emit("FORCHECK", ok, control[1], control[2], control[3])
		local exit = self:emit("JFALSE", ok, 0)
		self:initVariable(node.scope, node.id, control[1])
		self:block(node.body, true)
		local advance = self:position()
		local nextValue = self:alloc()
		self:emit("ADD", nextValue, control[1], control[3])
		self:emit("MOVE", control[1], nextValue)
		self:emit("CLEAR", nextValue)
		self:emit("JMP", check)
		local endPos = self:position()
		self:patch(exit, 2, endPos)
		finishLoop(self, record, endPos, advance)
		self:free(ok)
		self:free(nextValue)
		release(self, control)
	end

	local function compileGenericFor(self, node)
		local values = emitList(self, node.expressions, 3)
		local iterator, state, control = values[1], values[2], values[3]
		local record = loopRecord(self, node)
		local check = self:position()
		local results = self:alloc()
		self:emit("CALL2", results, iterator, {state, control}, -1)
		local first = self:alloc()
		self:emit("TAKE", first, results, 1)
		local nilreg, ended = self:alloc(), self:alloc()
		local iterationTemps = {results, first, nilreg, ended}
		self:emit("NIL", nilreg)
		self:emit("EQ", ended, first, nilreg)
		local exit = self:emit("JTRUE", ended, 0)
		self:emit("MOVE", control, first)
		for i, id in ipairs(node.ids) do
			local value = self:alloc()
			self:emit("TAKE", value, results, i)
			self:initVariable(node.scope, id, value)
			iterationTemps[#iterationTemps + 1] = value
		end
		for _, reg in ipairs(iterationTemps) do self:emit("CLEAR", reg) end
		self:block(node.body, true)
		local continueTarget = self:position()
		self:emit("JMP", check)
		local endPos = self:position()
		self:patch(exit, 2, endPos)
		finishLoop(self, record, endPos, continueTarget)
		release(self, iterationTemps)
		release(self, values)
	end

	local function assignmentTarget(self, target)
		if target.kind == K.AssignmentVariable or target.kind == K.AssignmentGlobalVariable then return {scope = target.scope, id = target.id} end
		if target.kind == K.AssignmentIndexing then
			local base = self:expression(target.base, 1)[1]
			local key = self:expression(target.index, 1)[1]
			return {base = base, key = key}
		end
		error("invalid assignment target: " .. tostring(target.kind))
	end

	local function storeTarget(self, target, value)
		if target.scope then self:writeVariable(target.scope, target.id, value)
		else emitWriteIndex(self, target.base, target.key, value) end
	end

	local function compileAssignment(self, node)
		local targets = {}
		for i, target in ipairs(node.lhs) do targets[i] = assignmentTarget(self, target) end
		local values = emitList(self, node.rhs, #targets)
		-- Lua stores a parallel assignment from right to left after evaluating RHSs.
		for i = #targets, 1, -1 do storeTarget(self, targets[i], values[i]) end
		release(self, values)
		for _, target in ipairs(targets) do
			if target.base then self:free(target.base); self:free(target.key) end
		end
	end

	local compoundOp = {
		[K.CompoundAddStatement] = "ADD", [K.CompoundSubStatement] = "SUB",
		[K.CompoundMulStatement] = "MUL", [K.CompoundDivStatement] = "DIV",
		[K.CompoundModStatement] = "MOD", [K.CompoundPowStatement] = "POW",
		[K.CompoundConcatStatement] = "CONCAT",
	}

	local function compileCompound(self, node)
		local target = assignmentTarget(self, node.lhs)
		local old = self:alloc()
		if target.scope then
			local value = self:readVariable(target.scope, target.id)
			self:emit("MOVE", old, value)
			self:free(value)
		else
			self:emit("GETTABLE", old, target.base, target.key)
		end
		local rhs = self:expression(node.rhs, 1)[1]
		local result = self:alloc()
		self:emit(compoundOp[node.kind], result, old, rhs)
		storeTarget(self, target, result)
		release(self, {old, rhs, result})
		if target.base then self:free(target.base); self:free(target.key) end
	end

	local function compileLocal(self, node)
		local values = emitList(self, node.expressions, #node.ids)
		for i, id in ipairs(node.ids) do self:initVariable(node.scope, id, values[i]) end
		release(self, values)
	end

	local function compileFunctionDeclaration(self, node)
		local indexed = #node.indices > 0
		local base = indexed and self:readVariable(node.scope, node.id) or nil
		if indexed then
			for i = 1, #node.indices - 1 do
				local key, nextBase = self:load(node.indices[i]), self:alloc()
				self:emit("GETTABLE", nextBase, base, key)
				self:free(base); self:free(key)
				base = nextBase
			end
		end
		local fn = self:functionLiteral(node)
		if indexed then
			local key = self:load(node.indices[#node.indices])
			self:emit("SETTABLE", base, key, fn)
			self:free(key); self:free(base)
		else
			self:writeVariable(node.scope, node.id, fn)
		end
		self:free(fn)
	end

	function Compiler:statement(node)
		local kind = node.kind
		if kind == K.NopStatement then return
		elseif kind == K.DoStatement then self:block(node.body, true)
		elseif kind == K.IfStatement then compileIf(self, node)
		elseif kind == K.WhileStatement then compileWhile(self, node)
		elseif kind == K.RepeatStatement then compileRepeat(self, node)
		elseif kind == K.ForStatement then compileNumericFor(self, node)
		elseif kind == K.ForInStatement then compileGenericFor(self, node)
		elseif kind == K.LocalVariableDeclaration then compileLocal(self, node)
		elseif kind == K.AssignmentStatement then compileAssignment(self, node)
		elseif compoundOp[kind] then compileCompound(self, node)
		elseif kind == K.LocalFunctionDeclaration then
			local nilreg = self:load(nil)
			self:initVariable(node.scope, node.id, nilreg)
			self:free(nilreg)
			local fn = self:functionLiteral(node)
			self:writeVariable(node.scope, node.id, fn)
			self:free(fn)
		elseif kind == K.FunctionDeclaration then compileFunctionDeclaration(self, node)
		elseif kind == K.BreakStatement or kind == K.ContinueStatement then
			local record = loopFor(self, node.loop)
			local depth = kind == K.ContinueStatement and record.continueDepth or record.scopeDepth
			self:cleanupTo(depth)
			local jump = self:emit("JMP", 0)
			local list = kind == K.ContinueStatement and record.continues or record.breaks
			list[#list + 1] = jump
		elseif kind == K.ReturnStatement then
			if #node.args == 1 and not node.args[1].isParenthesizedExpression
				and (node.args[1].kind == K.FunctionCallExpression or node.args[1].kind == K.PassSelfFunctionCallExpression) then
				self:call(node.args[1], -1, true)
				return
			end
			if self:fixedReturn(node.args) then return end
			local values = emitList(self, node.args, nil)
			self:emit("RETURN", values[1])
			release(self, values)
		elseif kind == K.FunctionCallStatement or kind == K.PassSelfFunctionCallStatement then
			local call = {kind = kind == K.FunctionCallStatement and K.FunctionCallExpression or K.PassSelfFunctionCallExpression,
				base = node.base, args = node.args, passSelfFunctionName = node.passSelfFunctionName}
			self:call(call, 0, false)
		else error("unsupported statement: " .. tostring(kind)) end
	end
end
`,"prometheus-src/prometheus/vm/strings.lua":`-- Cache interpreter literals at startup so protected decoders stay off its hot path.
local Ast = require('prometheus.ast')
local visitast = require('prometheus.visitast')
local Kind = Ast.AstKind

return function(ast)
    local runtime = ast.vmRuntime
    if not runtime then return end
    local data, cache
    local entries, ids, variables, values = {}, {}, {}, {}
    local wrapper = Ast.TopNode(Ast.Block({Ast.ReturnStatement({runtime})}))
    visitast(wrapper, nil, function(node, context)
        if node.kind == Kind.StringExpression then
            if not data then
                data, cache = Ast.LocalSymbol('_vm_string_data'), Ast.LocalSymbol('_vm_string_cache')
            end
            local id = ids[node.value]
            if not id then
                id = #entries + 1
                ids[node.value] = id
                entries[id] = Ast.TableEntry(Ast.StringExpression(node.value))
                variables[id] = Ast.LocalSymbol('_vm_string_value_' .. id)
                values[id] = Ast.IndexExpression(Ast.VariableExpression(cache),
                    Ast.NumberExpression(id))
            end
            return Ast.VariableExpression(variables[id])
        end
    end)
    if not data then return end
    table.insert(runtime.body.statements, 1,
        Ast.LocalVariableDeclaration({cache}, {Ast.VariableExpression(data)}))
    table.insert(runtime.body.statements, 2,
        Ast.LocalVariableDeclaration(variables, values))
    table.insert(ast.body.statements, 1,
        Ast.LocalVariableDeclaration({data}, {Ast.TableConstructorExpression(entries)}))
end
`}});var Es={};Ee(Es,{buildLuaSources:()=>Bs,createLuaEngine:()=>Zg,runLuaChunk:()=>ls,runLuaChunkB64:()=>Mt,runLuaChunkStub:()=>zg,runPipeline:()=>Ae});function jg(s){return s.split(wA.sep).join("/").replace(/^src\//,"").replace(/\.lua$/,"").split("/").join(".")}function Cs(s){let e=[];for(let n of UA.readdirSync(s,{withFileTypes:!0})){let a=wA.join(s,n.name);n.isDirectory()?e.push(...Cs(a)):n.isFile()&&n.name.endsWith(".lua")&&e.push(a)}return e}function Bs(){if(Nt)return{...Nt};let s={};for(let e of Cs(as))s[jg(wA.relative(as,e))]=UA.readFileSync(e,"utf8");return s}function Pe(s){let e=0;for(;s.includes("]"+"=".repeat(e))||s.includes("["+"=".repeat(e)+"[");)e++;let n="=".repeat(e);return`[${n}[${s}]${n}]`}async function Zg({openStandardLibs:s=!0,wasmUri:e}={}){let a=await new Is.LuaFactory(e,void 0).createEngine({openStandardLibs:s}),C=Bs(),l=Object.entries(C).map(([E,w])=>{let y=`@/src/${E.split(".").join("/")}.lua`;return`package.preload[${JSON.stringify(E)}] = function(...)
  local chunk, err = load(${Pe(w)}, ${Pe(y)}, "t")
  if not chunk then error(err) end
  return chunk(...)
end`}).join(`
`);return await a.doString(l),a}async function Ae(s,{source:e,preset:n="Strong",filename:a="script.lua",seed:C=1,luaVersion:l="Lua51"}){let E=`
_G.arg = _G.arg or {}
if not math.log10 then
  local ln = math.log
  math.log10 = function(v)
    if type(v) ~= "number" or v ~= v or v == math.huge or v <= 0 then return ln(v) / ln(10) end
    local av = v
    if av == math.floor(av) and av >= 1 and av < 1e15 then
      local d = 1
      local t = math.floor(av)
      while t >= 10 do t = math.floor(t / 10); d = d + 1 end
      -- exact integer part; fractional part from the normalized mantissa
      local m = av / 10 ^ (d - 1)
      return (d - 1) + (ln(m) / ln(10))
    end
    return ln(v) / ln(10)
  end
end
local Prometheus = require("prometheus")
Prometheus.Logger.logLevel = Prometheus.Logger.LogLevel.Info
Prometheus.colors.enabled = false
local preset = ${JSON.stringify(n)}
local source = ${Pe(e)}
local filename = ${JSON.stringify(a)}
local config = {}
for key, value in pairs(Prometheus.Presets[preset]) do config[key] = value end
config.LuaVersion = ${JSON.stringify(l)}
config.PrettyPrint = false
config.Seed = ${Math.max(1,Math.floor(C))}
local ok, out = xpcall(function()
  return Prometheus.Pipeline:fromConfig(config):apply(source, filename)
end, debug.traceback)
if not ok then error(tostring(out), 0) end
-- return the payload base64-encoded from inside Lua so high bytes survive
-- the JS boundary exactly (the raw string would be mangled to UTF-8)
local B64CH = {}
local alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/"
for i = 1, #alphabet do B64CH[i - 1] = alphabet:sub(i, i) end
local parts = {}
local n = #out
for i = 1, n, 3 do
  local b1, b2, b3 = out:byte(i, i + 2)
  local v = b1 * 65536 + (b2 or 0) * 256 + (b3 or 0)
  local pad = (b3 and 0) or (b2 and 1) or 2
  parts[#parts + 1] = B64CH[math.floor(v / 262144) % 64] .. B64CH[math.floor(v / 4096) % 64]
  if pad < 2 then parts[#parts + 1] = B64CH[math.floor(v / 64) % 64] end
  if pad < 1 then parts[#parts + 1] = B64CH[v % 64] end
  if pad > 0 then parts[#parts + 1] = string.rep("=", pad) end
end
return table.concat(parts)
`,w=await s.doString(E);return Buffer.from(w,"base64").toString("binary")}async function ls(s,e,n="chunk.lua",a={}){let l=`
${Object.entries(a).map(([E,w])=>`_G[${JSON.stringify(E)}] = ${JSON.stringify(w)}`).join(`
`)}
local logs = {}
_G.print = function(...) local parts = {} for i = 1, select("#", ...) do parts[#parts + 1] = tostring(select(i, ...)) end logs[#logs + 1] = table.concat(parts, " ") end
local ok, err = xpcall(function()
  local chunk, loadErr = load(${Pe(e)}, ${JSON.stringify(n)}, "t")
  if not chunk then error(loadErr, 0) end
  chunk()
end, debug.traceback)
if not ok then return { ok = false, error = tostring(err), logs = logs } end
return { ok = true, error = "", logs = logs }
`;return await s.doString(l)}async function Mt(s,e,n="@luacshield/validate"){let a=Buffer.from(e,"binary").toString("base64"),C=`
local alpha = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/"
local rev = {}
for i = 1, #alpha do rev[alpha:sub(i, i)] = i - 1 end
local function b64d(data)
  local out, acc, bits = {}, 0, 0
  for i = 1, #data do
    local v = rev[data:sub(i, i)]
    if v then
      acc = acc * 64 + v
      bits = bits + 6
      if bits >= 8 then
        bits = bits - 8
        out[#out + 1] = string.char(math.floor(acc / 2 ^ bits) % 256)
        acc = acc % 2 ^ bits
      end
    end
  end
  return table.concat(out)
end
local payload = b64d(${JSON.stringify(a)})
local logs = {}
_G.print = function(...) local parts = {} for i = 1, select("#", ...) do parts[#parts + 1] = tostring(select(i, ...)) end logs[#logs + 1] = table.concat(parts, " ") end
local ok, err = xpcall(function()
  local chunk, loadErr = load(payload, ${JSON.stringify(n)}, "t")
  if not chunk then error(loadErr, 0) end
  chunk()
end, debug.traceback)
if not ok then return { ok = false, error = tostring(err), logs = logs } end
return { ok = true, error = "", logs = logs }
`;return await s.doString(C)}async function zg(s,e,n){return await s.doString(Xg),await ls(s,e,n)}var Is,$g,Wg,as,Xg,Lt=IA(()=>{ve();St();KA();Is=xn(os(),1);rs();$g={},Wg=wA.dirname(Te($g.url)),as=wA.join(Wg,"prometheus-src");Xg=`
local function __any(name)
  local t
  t = setmetatable({}, { __name = name, __index = function(_, k)
    if k == "ClassName" or k == "Name" then return name end
    return function() return t end
  end })
  return t
end
game = setmetatable({ ClassName = "DataModel", PlaceId = 0, GameId = 0, JobId = "stub" }, {
  __index = function(_, k)
    if k == "GetService" then return function(_, svc) return __any(svc) end end
    return function() return nil end
  end,
})
workspace = __any("Workspace")
game.Workspace = workspace
game.Players = __any("Players")
game.ReplicatedStorage = __any("ReplicatedStorage")
Instance = { new = function(_, cls) return __any(cls) end }
task = { wait = function() end, spawn = function(f, ...) return f(...) end, defer = function(f, ...) return f(...) end }
tick = function() return 0 end
wait = function() return 0 end
typeof = function(v) return type(v) end
script = __any("Script")
`});function Ai(){let s=new Uint32Array(1);return globalThis.crypto.getRandomValues(s),s[0]>>>0}var Gt,Qs=IA(()=>{Gt={randomInt(s,e){return s+Ai()%(e-s)},randomBytes(s){let e=new Uint8Array(s);return globalThis.crypto.getRandomValues(e),Buffer.from(e)}}});var cs=IA(()=>{});var us,ds=IA(()=>{us={}});function Ut(s,e){let n=[];for(let E=0;E<256;E++)n[E]=E;let a=0;for(let E=0;E<256;E++){a=(a+n[E]+s[E%s.length])%256;let w=n[E];n[E]=n[a],n[a]=w}let C=Buffer.alloc(e.length),l=0;a=0;for(let E=0;E<e.length;E++){l=(l+1)%256,a=(a+n[l])%256;let w=n[l];n[l]=n[a],n[a]=w,C[E]=e[E]^n[(n[l]+n[a])%256]}return C}function hs(s){let e=[],n=new Map,a=257,C=-1,l=()=>{n=new Map,a=257};for(let w=0;w<s.length;w++){let y=s[w];if(C<0){C=y;continue}let Y=C*256+y,F=n.get(Y);if(F!==void 0){C=F;continue}e.push(C),a<=fs&&(n.set(Y,a),a++),a>fs&&(e.push(ei),l()),C=y}C>=0&&e.push(C);let E=Buffer.alloc(e.length*2);for(let w=0;w<e.length;w++)E[w*2]=e[w]>>8&255,E[w*2+1]=e[w]&255;return E}function ps(s){let e=0;for(let n=0;n<s.length;n++)e=(e+s[n]*(n%64+1)+1)%4294967295;return e>>>0}function Kt(s=24){let e=Buffer.alloc(s);for(let n=0;n<s;n++)e[n]=Math.floor(Math.random()*256);return e}function Jt(s,e=4){let n=[],a=Math.ceil(s.length/e);for(let C=0;C<e;C++){let l=s.slice(C*a,(C+1)*a),E=Buffer.alloc(l.length),w=Buffer.alloc(l.length);for(let y=0;y<l.length;y++)E[y]=Math.floor(Math.random()*256),w[y]=l[y]^E[y];n.push({mask:Array.from(E),x:Array.from(w)})}return n}var ei,fs,Ds=IA(()=>{ei=256,fs=65535});var Yt,ms,ws,ys,Rs,ks,bs=IA(()=>{Yt=`
local __bx = function(a, b)
  if bit32 and bit32.bxor then return bit32.bxor(a, b) end
  local r, p = 0, 1
  for _ = 1, 8 do
    local aa, bb = a % 2, b % 2
    if aa ~= bb then r = r + p end
    a = (a - aa) / 2
    b = (b - bb) / 2
    p = p * 2
  end
  return r
end
local __b64d = function(s)
  local alpha = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/"
  local rev = {}
  for i = 1, #alpha do rev[alpha:sub(i, i)] = i - 1 end
  -- "=" padding is skipped entirely; decoding it as 0 adds phantom bytes
  local out, acc, bits = {}, 0, 0
  for i = 1, #s do
    local v = rev[s:sub(i, i)]
    if v then
      acc = acc * 64 + v
      bits = bits + 6
      if bits >= 8 then
        bits = bits - 8
        out[#out + 1] = string.char(math.floor(acc / 2 ^ bits) % 256)
        acc = acc % 2 ^ bits
      end
    end
  end
  return table.concat(out)
end
local __rc4 = function(key, data)
  local s = {}
  for i = 0, 255 do s[i] = i end
  local j = 0
  local klen = #key
  for i = 0, 255 do
    j = (j + s[i] + key:byte((i % klen) + 1)) % 256
    s[i], s[j] = s[j], s[i]
  end
  local out = {}
  local i, j2 = 0, 0
  for n = 1, #data do
    i = (i + 1) % 256
    j2 = (j2 + s[i]) % 256
    s[i], s[j2] = s[j2], s[i]
    out[n] = string.char(__bx(data:byte(n), s[(s[i] + s[j2]) % 256]))
  end
  return table.concat(out)
end
local __keyjoin = function(chunks)
  local parts = {}
  for i = 1, #chunks do
    local m, x = chunks[i][1], chunks[i][2]
    local piece = {}
    for k = 1, #m do piece[k] = string.char(__bx(m[k], x[k])) end
    parts[i] = table.concat(piece)
  end
  return table.concat(parts)
end
local __verify2 = function(data)
  local sum = 0
  for i = 1, #data do
    sum = (sum + data:byte(i) * (((i - 1) % 64) + 1) + 1) % 4294967295
  end
  return sum
end
local __fail = function(msg)
  if type(error) == "function" then error(tostring(msg), 0) end
  while true do end
end
`,ms=`
local __lzw = function(data)
  local n = math.floor(#data / 2)
  local dict = {}
  local prev, out = nil, {}
  local nextCode = 257
  local CLEAR = 256
  local function resetDict()
    for i = 0, 255 do dict[i] = string.char(i) end
    nextCode = 257
    prev = nil
  end
  resetDict()
  for i = 1, n do
    local b = i * 2 - 1
    local code = string.byte(data, b) * 256 + string.byte(data, b + 1)
    if code == CLEAR then
      resetDict()
    else
      local entry
      if code < nextCode and dict[code] then
        entry = dict[code]
      elseif prev then
        entry = prev .. string.sub(prev, 1, 1)
      else
        __fail("lzw corrupt")
      end
      out[#out + 1] = entry
      if prev and nextCode <= 65535 then
        dict[nextCode] = prev .. string.sub(entry, 1, 1)
        nextCode = nextCode + 1
      end
      prev = entry
    end
  end
  return table.concat(out)
end
`,ws=`
local __antitamper = function()
  local source = debug.getinfo(1).source
  local checksum = 0
  if source then
    for i = 1, #source do
      checksum = (checksum + string.byte(source, i) * i) % 4294967295
    end
  end
  if task and task.wait then task.wait(0.1) end
  local current = debug.getinfo(1).source
  local currentsum = 0
  if current then
    for i = 1, #current do
      currentsum = (currentsum + string.byte(current, i) * i) % 4294967295
    end
  end
  if checksum == currentsum and checksum ~= 0 then
    print("good antitamper")
  else
    print("shit anti")
    __fail("luacshield: integrity check failed")
  end
end
__antitamper()
`,ys=`
do
  local envOk = pcall(function()
    if game then
      assert(game.ClassName == "DataModel")
      assert(workspace and type(workspace.GetChildren) == "function")
      assert(type(game.GetService) == "function")
    end
  end)
  if not envOk then __fail("luacshield: environment check failed") end
  if type(ishookfunction) == "function" then
    local candidates = {}
    if type(request) == "function" then candidates[#candidates + 1] = request end
    if syn and type(syn.request) == "function" then candidates[#candidates + 1] = syn.request end
    if http and type(http.request) == "function" then candidates[#candidates + 1] = http.request end
    if fluxus and type(fluxus.request) == "function" then candidates[#candidates + 1] = fluxus.request end
    if type(http_request) == "function" then candidates[#candidates + 1] = http_request end
    for _, fn in ipairs(candidates) do
      local ok, hooked = pcall(ishookfunction, fn)
      if ok and hooked then __fail("luacshield: hooked request detected") end
    end
  end
end
`,Rs=`
do
  if game then
    pcall(function()
      local Players = game:GetService("Players")
      local ok, player = pcall(function() return Players:GetPlayerFromCharacter(workspace) end)
      if ok and player == nil then
        -- clean executor
      else
        __fail("luacshield: env check 1 failed")
      end
    end)
    pcall(function()
      local GuiService = game:GetService("GuiService")
      local origSelected = GuiService.SelectedObject
      GuiService.SelectedObject = nil
      if task and task.wait then task.wait() end
      if GuiService.SelectedObject ~= nil then __fail("luacshield: env check 2 failed") end
      local fakePart = Instance.new("Part")
      local setOk = pcall(function() GuiService.SelectedObject = fakePart end)
      if setOk then __fail("luacshield: env check 2b failed") end
      GuiService.SelectedObject = origSelected
    end)
    pcall(function()
      local Tween123 = game:GetService("TweenService")
      local part21 = Instance.new("Part")
      local badGoal23 = { Position = "detected", CFrame = true, Transparency = "x" }
      local tweenOk = pcall(function() Tween123:Create(part21, TweenInfo.new(1), badGoal23) end)
      if tweenOk then __fail("luacshield: env check 3 failed") end
      local goodTween = Tween123:Create(part21, TweenInfo.new(0.1), { Transparency = 1 })
      goodTween:Play()
      if task and task.wait then task.wait() end
      goodTween:Cancel()
    end)
    pcall(function()
      local DS = game:GetService("DataStoreService")
      local dsOk, store = pcall(DS.GetDataStore, DS, "logger_trap//invalid@chars", "scope")
      if dsOk and store then __fail("luacshield: env check 4 failed") end
      if not dsOk and not tostring(store):lower():find("invalid") and not tostring(store):find("name") then
        -- clean
      else
        -- ok either way, original allowed both branches
      end
      local globalOk = pcall(DS.GetGlobalDataStore, DS)
      if not globalOk then __fail("luacshield: env check 4b failed") end
    end)
    pcall(function()
      local StarterPlayer = game:GetService("StarterPlayer")
      local sps = StarterPlayer:FindFirstChild("StarterPlayerScripts")
      if not sps then __fail("luacshield: env check 5 failed") end
      local childCount = #sps:GetChildren()
      if childCount < 2 then __fail("luacshield: env check 5b failed") end
      local testScript = Instance.new("LocalScript")
      testScript.Source = "sigma boi"
      testScript.Parent = sps
      local stillThere = sps:FindFirstChild(testScript.Name)
      testScript:Destroy()
      if not stillThere then __fail("luacshield: env check 5c failed") end
    end)
    pcall(function()
      local PromptService = game:GetService("ProximityPromptService")
      local shown, hidden = false, false
      local conShown = PromptService.PromptShown:Connect(function() shown = true end)
      local conHidden = PromptService.PromptHidden:Connect(function() hidden = true end)
      local part = Instance.new("Part")
      part.Parent = workspace
      local prompt = Instance.new("ProximityPrompt")
      prompt.Parent = part
      if task and task.wait then task.wait() end
      conShown:Disconnect()
      conHidden:Disconnect()
      prompt:Destroy()
      part:Destroy()
      if not shown or not hidden then __fail("luacshield: env check 6 failed") end
    end)
    pcall(function()
      local Teams = game:GetService("Teams")
      local neutral = Teams:FindFirstChild("Neutral")
      if neutral and neutral.TeamColor ~= BrickColor.new("Medium stone grey") then
        __fail("luacshield: env check 7 failed")
      end
    end)
    pcall(function()
      local GroupService = game:GetService("GroupService")
      local lp = game:GetService("Players").LocalPlayer
      if lp then
        local ok, groups = pcall(function() return GroupService:GetGroupsAsync(lp.UserId) end)
        if ok and groups then
          if #groups < 1 then
            -- small account, allowed
          else
            -- clean
          end
        else
          __fail("luacshield: env check 8 failed")
        end
      end
    end)
  end
end
`,ks=`
do
  pcall(function()
    if debug and type(debug.gethook) == "function" then
      local hook = debug.gethook()
      if hook then __fail("luacshield: debug hook detected") end
    end
  end)
  pcall(function()
    if type(ishookfunction) == "function" then
      local targets = {}
      if type(loadstring) == "function" then targets[#targets + 1] = loadstring end
      if type(load) == "function" then targets[#targets + 1] = load end
      if type(getrawmetatable) == "function" then targets[#targets + 1] = getrawmetatable end
      if type(getgenv) == "function" then targets[#targets + 1] = getgenv end
      for _, fn in ipairs(targets) do
        local ok, hooked = pcall(ishookfunction, fn)
        if ok and hooked then __fail("luacshield: core hook detected") end
      end
    end
  end)
  pcall(function()
    if type(getrawmetatable) == "function" and type(setreadonly) == "function" then
      local mt = getrawmetatable(_G)
      if mt and getmetatable(_G) then __fail("luacshield: metatable tamper detected") end
    end
  end)
  if not (type(loadstring) == "function" or type(load) == "function") then
    __fail("luacshield: no loader function")
  end
end
`});var Ms={};Ee(Ms,{chunkNameFor:()=>de,protect:()=>gi,scanSurfaceLeak:()=>xs,validateChunk:()=>Ns});function Fs(s){return JSON.stringify(s)}function Ss(s){return`{${s.map(n=>`{{${n.mask.join(",")}},{${n.x.join(",")}}}`).join(",")}}`}function de(s){return`@luacshield/${s}`}function ni({payload:s,key2:e,blob2:n,verify:a,seed:C,anti:l}){let E=[l.tamper&&ws,l.sandbox&&ys,l.envlog&&Rs,l.dump&&ks].filter(Boolean).join(`
`);return`-- luacshield internal layer
${Yt}
${ms}
local __blob = ${Fs(n)}
local __expect = ${a}
${E}
local __raw = __rc4(__keyjoin(${Ss(Jt(e))}), __b64d(__blob))
local __src = __lzw(__raw)
local __got = __verify2(__src)
if __got ~= __expect then __fail("luacshield: verify2 failed") end
local __load = loadstring or load
local __fn, __lerr = __load(__src, ${JSON.stringify(de("vm"))})
if not __fn then __fail("luacshield: vm load: " .. tostring(__lerr)) end
local __ok, __err = pcall(__fn)
if not __ok then __fail(tostring(__err)) end
`}function si({blob1:s,key1:e}){return`-- obfuscated by LuacShield
${Yt}
local __blob1 = ${Fs(s)}
local __load = loadstring or load
local __fn, __lerr = __load(__rc4(__keyjoin(${Ss(Jt(e))}), __b64d(__blob1)), ${JSON.stringify(de("layer1"))})
if not __fn then error("luacshield: layer1 load: " .. tostring(__lerr), 0) end
local __ok, __err = pcall(__fn)
if not __ok then error(tostring(__err), 0) end
`}function xs(s,e){let n=[],a=e.match(/(["'])(?:\\.|(?!\1)[^\\\n])*\1/g)||[];for(let C of a){let l=C.slice(1,-1);l.length>=8&&/^[\w+/=\-.:{}[\] <>,;()]*$/.test(l)&&s.includes(l)&&n.push(l.slice(0,40))}for(let C of e.split(`
`)){let l=C.trim();l.length>=24&&s.includes(l)&&n.push(l.slice(0,40))}return[...new Set(n)]}async function gi(s,{source:e,filename:n="script.lua",seed:a,level:C="maximum",anti:l={},onStep:E}={}){let w=E||(()=>{}),y=a??Gt.randomInt(1,2**30),Y=C==="maximum"?"Strong":"Medium";w("obfuscating source (prometheus pipeline: "+Y+")");let F=null,G=y,$=null,tA=0;for(let ne=0;ne<5;ne++){G=ne===0?y:Gt.randomInt(1,2**30);let se=await Ae(s,{source:e,preset:Y,filename:n,seed:G,luaVersion:"Lua51"}),ge=await Ns(s,se);if(ge.ok){F=se,G=G,$=null;break}if($&&ge.error.split(`
`)[0]===$.split(`
`)[0]&&tA++,$=ge.error,tA>=2){F=se;break}w("seed "+G+" failed validation, reseeding"),F=null}F||(F=await Ae(s,{source:e,preset:Y,filename:n,seed:G,luaVersion:"Lua51"}),w("warning: payload could not be validated"));let sA=Kt(24);w("compressing + encrypting payload into blob2");let ee=hs(Buffer.from(F,"binary")),yA=Ut(sA,ee).toString("base64"),te=ps(Buffer.from(F,"binary"));w("building layer1 (LZW shell + VERIFY2 + anti checks)");let fe=ni({payload:F,key2:sA,blob2:yA,verify:te,seed:y,anti:{tamper:!0,sandbox:l.sandbox!==!1,envlog:l.envlog!==!1,dump:l.dump!==!1}});w("obfuscating layer1");let qe=await Ae(s,{source:fe,preset:"Weak",filename:de("layer1"),seed:y+7,luaVersion:"Lua51"}),he=Kt(24);w("encrypting layer1 into blob1");let pe=Ut(he,Buffer.from(qe,"binary")).toString("base64");w("building surface loader");let De=si({blob1:pe,key1:he}),me=await Ae(s,{source:De,preset:"Minify",filename:de("surface"),seed:y+13,luaVersion:"Lua51"}),we=xs(me,e);return w("done"),{output:me,meta:{seed:y,preset:Y,payloadBytes:F.length,blob1Bytes:pe.length,blob2Bytes:yA.length,layer1Bytes:fe.length,layer0Bytes:De.length,leaks:we,layers:["surface","blob1(rc4)","lzw-shell+verify2+anti","blob2(rc4+lzw)","prometheus-vm"]}}}async function Ns(s,e){try{UA.writeFileSync(".validate_tmp.lua",e,"binary");let{stdout:n}=await ti("python3",["validate_lupa.py",".validate_tmp.lua"],{timeout:12e4,maxBuffer:1024*1024*32}),a=n.trim().split(`
`).filter(Boolean).pop();return JSON.parse(a)}catch(n){let a=String(n.stdout||"").trim().split(`
`).filter(Boolean).pop();try{return JSON.parse(a)}catch{try{return await Mt(s,e,"@luacshield/validate")}catch{return{ok:!0,fallback:!0}}}}}var ti,Ls=IA(()=>{Qs();ve();cs();ds();Lt();Ds();bs();ti=us.execFile});var ai={};Ee(ai,{default:()=>ri,luacshieldProtect:()=>Us});var Gs=xn(zn(),1);var $n="AGFzbQEAAAAB5wI2YAF/AX9gBH9/f38Bf2ADf39/AX9gAn9/AX9gAn9/AGADf39/AGABfwBgBH9/f38AYAV/f39/fwBgBX9/f39/AX9gAAF/YAV/fn5+fgBgAABgA39+fwF+YAF/AX5gAn9/AX5gA39/fgBgAXwBfGACfHwBfGAEf35+fwBgAAF8YAJ+fwBgAn98AGADf39+AX9gBn9/f39/fwF/YAJ/fwF8YAZ/f39/f38AYAd/f39/f39/AX9gAnx/AX9gA3x8fwF8YAJ8fwF8YAZ/fH9/f38Bf2AEf35/fwF/YAF/AXxgA39/fwF8YAN/f38BfmACf34AYAN/f3wBfGADf39+AX5gA398fwBgCX9/f39/f39/fwBgBH9/fn4AYAR/f35+AX5gBX9/f39/AX5gBH9/fn8AYAJ/fgF/YAJ+fgF+YAABfmADf35/AX9gAX4Bf2ACfn8Bf2AEfn5+fgF/YAN+fn4Bf2ACfn4BfAKcBRsDZW52BWFib3J0AAwDZW52Cmludm9rZV92aWkABQNlbnYIc3RyZnRpbWUAAQNlbnYGc3lzdGVtAAADZW52BGV4aXQABgNlbnYTZW1zY3JpcHRlbl9kYXRlX25vdwAUA2VudiBfZW1zY3JpcHRlbl9nZXRfbm93X2lzX21vbm90b25pYwAKA2VudhBfX3N5c2NhbGxfb3BlbmF0AAEDZW52EV9fc3lzY2FsbF9mY250bDY0AAIDZW52D19fc3lzY2FsbF9pb2N0bAACFndhc2lfc25hcHNob3RfcHJldmlldzEIZmRfd3JpdGUAARZ3YXNpX3NuYXBzaG90X3ByZXZpZXcxB2ZkX3JlYWQAARZ3YXNpX3NuYXBzaG90X3ByZXZpZXcxCGZkX2Nsb3NlAAADZW52Dl9fc3lzY2FsbF9kdXAzAAIWd2FzaV9zbmFwc2hvdF9wcmV2aWV3MRFlbnZpcm9uX3NpemVzX2dldAADFndhc2lfc25hcHNob3RfcHJldmlldzELZW52aXJvbl9nZXQAAxZ3YXNpX3NuYXBzaG90X3ByZXZpZXcxB2ZkX3NlZWsAIANlbnYKX21rdGltZV9qcwAOA2Vudg1fbG9jYWx0aW1lX2pzABUDZW52Cl9nbXRpbWVfanMAFQNlbnYSX19zeXNjYWxsX3VubGlua2F0AAIDZW52D19fc3lzY2FsbF9ybWRpcgAAA2VudhJfX3N5c2NhbGxfcmVuYW1lYXQAAQNlbnYUX19zeXNjYWxsX3JlYWRsaW5rYXQAAQNlbnYJX3R6c2V0X2pzAAUDZW52FmVtc2NyaXB0ZW5fcmVzaXplX2hlYXAAAANlbnYZX2Vtc2NyaXB0ZW5fdGhyb3dfbG9uZ2ptcAAMA5QFkgUMAwUDIQMABAQFBQQDAwMDAwMDAgQBAyIjAwIPAwMDAwYWJAIDAgUEBAADAwIXAxcCBQMCBAUEBRAEBwUQAwIIGAQJAQACAAMEBAQDBQUFAgICAggHAgMEBAMGBgICAgICBAIDAwQCAgEBAgUFBBklDwQmBQUEAgMFAgMCCQIDAg8CAgcHAQoBAAUFJwAFAAAAAAACAAAAAAACAAACAAIAAAAAAAAAAAAAAAAEAwkABQUIBAEEEAIFBAQFBQMEBAMFBAIEBQEEGigIBwcAAAACAAAAAAAAAAAAAAAEAAAAAAAAAAAAAAAAAAAHAAAAAgICAgIFAwcFAQUGBwUFAwUEAgICBgYIBAMFAQIFBQEEBAABAgQJBAUEAwQEAQACBQQEBAIFBAQDAAAEBgYABgQEAgUABAYAAAAAAAUABAAAAAAAAAIAAAACAAACAwAAAAAAAAAAAwQFAgYDBgAFAwAEAwApAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAbAQEJBgECAAAAAAAABwACAAkCAAAJKgMEAgUEAgUAAAAEAAAAAAAAAAACAAAGBgQFBgIEBQMBBAcHBAgEBAUHBAMABgYABAMDBAYGAwQCAwMAAAAAAQADAAAAAAIHAAAAAAAAAAAJAAArAwIABQAAAAAAAAAAAgcHAywAAy0DAwgOAAAEAAAAAAAABwICAgMICAkaARgFBAMAAAAAAAAAAAMDHAMICAIELgQAAgoRERIcHQovAAAAAAMSAA0CAgADAwIABAQEAh4wDgIBAAAUABECAhIxHgMDAQ0DAwMDAwAAAgMDAwALEwsOGR0GDAQJGwUABzIIHwQCAwAAAgAGAwsTMzQLBAEEFgQEEwsLCzUKBgAMCgoKBAUBcADGAQUHAQGAAoCAAgYYBH8BQcCSwgALfwFBAAt/AUEAC38BQQALB6gVpQEGbWVtb3J5AgARX193YXNtX2NhbGxfY3RvcnMAGw5sdWFfY2hlY2tzdGFjawAcCWx1YV94bW92ZQAdC2x1YV9hdHBhbmljAB4LbHVhX3ZlcnNpb24AHwxsdWFfYWJzaW5kZXgAIApsdWFfZ2V0dG9wACEKbHVhX3NldHRvcAAiDWx1YV9jbG9zZXNsb3QAIwpsdWFfcm90YXRlACQIbHVhX2NvcHkAJQ1sdWFfcHVzaHZhbHVlACYIbHVhX3R5cGUAJwxsdWFfdHlwZW5hbWUAKA9sdWFfaXNjZnVuY3Rpb24AKQ1sdWFfaXNpbnRlZ2VyACoMbHVhX2lzbnVtYmVyACsMbHVhX2lzc3RyaW5nACwObHVhX2lzdXNlcmRhdGEALQxsdWFfcmF3ZXF1YWwALglsdWFfYXJpdGgALwtsdWFfY29tcGFyZQAwEmx1YV9zdHJpbmd0b251bWJlcgAxDWx1YV90b251bWJlcngAMg5sdWFfdG9pbnRlZ2VyeAAzDWx1YV90b2Jvb2xlYW4ANA1sdWFfdG9sc3RyaW5nADUKbHVhX3Jhd2xlbgA2D2x1YV90b2NmdW5jdGlvbgA3Dmx1YV90b3VzZXJkYXRhADgMbHVhX3RvdGhyZWFkADkNbHVhX3RvcG9pbnRlcgA6C2x1YV9wdXNobmlsADsObHVhX3B1c2hudW1iZXIAPA9sdWFfcHVzaGludGVnZXIAPQ9sdWFfcHVzaGxzdHJpbmcAPg5sdWFfcHVzaHN0cmluZwA/EGx1YV9wdXNoY2Nsb3N1cmUAQQ9sdWFfcHVzaGJvb2xlYW4AQhVsdWFfcHVzaGxpZ2h0dXNlcmRhdGEAQw5sdWFfcHVzaHRocmVhZABEDWx1YV9nZXRnbG9iYWwARQxsdWFfZ2V0dGFibGUARgxsdWFfZ2V0ZmllbGQARwhsdWFfZ2V0aQBICmx1YV9yYXdnZXQASQtsdWFfcmF3Z2V0aQBKC2x1YV9yYXdnZXRwAEsPbHVhX2NyZWF0ZXRhYmxlAEwQbHVhX2dldG1ldGF0YWJsZQBNEWx1YV9nZXRpdXNlcnZhbHVlAE4NbHVhX3NldGdsb2JhbABPDGx1YV9zZXR0YWJsZQBRDGx1YV9zZXRmaWVsZABSCGx1YV9zZXRpAFMKbHVhX3Jhd3NldABUC2x1YV9yYXdzZXRwAFYLbHVhX3Jhd3NldGkAVxBsdWFfc2V0bWV0YXRhYmxlAFgRbHVhX3NldGl1c2VydmFsdWUAWQlsdWFfY2FsbGsAWgpsdWFfcGNhbGxrAFsIbHVhX2xvYWQAXQhsdWFfZHVtcABeCmx1YV9zdGF0dXMAXwlsdWFfZXJyb3IAYQhsdWFfbmV4dABiC2x1YV90b2Nsb3NlAGMKbHVhX2NvbmNhdABkB2x1YV9sZW4AZQ1sdWFfZ2V0YWxsb2NmAGYNbHVhX3NldGFsbG9jZgBnDGx1YV9zZXR3YXJuZgBoC2x1YV93YXJuaW5nAGkRbHVhX25ld3VzZXJkYXRhdXYAag5sdWFfZ2V0dXB2YWx1ZQBrDmx1YV9zZXR1cHZhbHVlAGwNbHVhX3VwdmFsdWVpZABtD2x1YV91cHZhbHVlam9pbgBuGV9faW5kaXJlY3RfZnVuY3Rpb25fdGFibGUBAA5sdWFMX3RyYWNlYmFjawBvDGx1YV9nZXRzdGFjawCJAgtsdWFfZ2V0aW5mbwCMAg1sdWFMX2J1ZmZpbml0AHIObHVhTF9hZGRzdHJpbmcAcxFsdWFMX3ByZXBidWZmc2l6ZQB0DWx1YUxfYWRkdmFsdWUAdQ9sdWFMX3B1c2hyZXN1bHQAdg1sdWFMX2FyZ2Vycm9yAHcObHVhTF90eXBlZXJyb3IAehFsdWFMX2dldG1ldGFmaWVsZAB7Cmx1YUxfd2hlcmUAfA9sdWFMX2ZpbGVyZXN1bHQAfRBfX2Vycm5vX2xvY2F0aW9uAMIED2x1YUxfZXhlY3Jlc3VsdAB+EWx1YUxfbmV3bWV0YXRhYmxlAH8RbHVhTF9zZXRtZXRhdGFibGUAgAEObHVhTF90ZXN0dWRhdGEAgQEPbHVhTF9jaGVja3VkYXRhAIIBD2x1YUxfb3B0bHN0cmluZwCEARFsdWFMX2NoZWNrbHN0cmluZwCFAQ9sdWFMX2NoZWNrc3RhY2sAhgEObHVhTF9jaGVja3R5cGUAhwENbHVhTF9jaGVja2FueQCIARBsdWFMX2NoZWNrbnVtYmVyAIkBDmx1YUxfb3B0bnVtYmVyAIoBEWx1YUxfY2hlY2tpbnRlZ2VyAIsBD2x1YUxfb3B0aW50ZWdlcgCNAQ1sdWFMX3NldGZ1bmNzAI4BD2x1YUxfYWRkbHN0cmluZwCPARNsdWFMX3B1c2hyZXN1bHRzaXplAJABEWx1YUxfYnVmZmluaXRzaXplAJEBCGx1YUxfcmVmAJIBCmx1YUxfdW5yZWYAkwEObHVhTF9sb2FkZmlsZXgAlAEQbHVhTF9sb2FkYnVmZmVyeACXAQ9sdWFMX2xvYWRzdHJpbmcAmQENbHVhTF9jYWxsbWV0YQCaAQhsdWFMX2xlbgCbAQ5sdWFMX3RvbHN0cmluZwCcARBsdWFMX2dldHN1YnRhYmxlAJ0BDWx1YUxfcmVxdWlyZWYAngEMbHVhTF9hZGRnc3ViAJ8BCWx1YUxfZ3N1YgCgAQ1sdWFMX25ld3N0YXRlAKEBDGx1YV9uZXdzdGF0ZQDdAwRmcmVlAJQFB3JlYWxsb2MAlQUGZmZsdXNoAMsEEmx1YUxfY2hlY2t2ZXJzaW9uXwCmAQxsdWFvcGVuX2Jhc2UAqQERbHVhb3Blbl9jb3JvdXRpbmUA5wENbHVhX25ld3RocmVhZADaAwpsdWFfeWllbGRrAKwCD2x1YV9pc3lpZWxkYWJsZQCrAg9sdWFfcmVzZXR0aHJlYWQA3AMKbHVhX3Jlc3VtZQCoAg1sdWFvcGVuX2RlYnVnAPIBD2x1YV9nZXRob29rbWFzawCHAgtsdWFfZ2V0aG9vawCGAhBsdWFfZ2V0aG9va2NvdW50AIgCDGx1YV9nZXRsb2NhbACKAgtsdWFfc2V0aG9vawCFAgxsdWFfc2V0bG9jYWwAiwISbHVhX3NldGNzdGFja2xpbWl0ANYDBm1hbGxvYwCTBQ1sdWFMX29wZW5saWJzAM8CD2x1YW9wZW5fcGFja2FnZQCcAw1sdWFvcGVuX3RhYmxlAJcECmx1YW9wZW5faW8A0AIKbHVhb3Blbl9vcwCzAw5sdWFvcGVuX3N0cmluZwDmAwxsdWFvcGVuX21hdGgA/AIMbHVhb3Blbl91dGY4AK4ECWx1YV9jbG9zZQDgAwhzZXRUaHJldwCbBRVlbXNjcmlwdGVuX3N0YWNrX2luaXQAqQUZZW1zY3JpcHRlbl9zdGFja19nZXRfZnJlZQCqBRllbXNjcmlwdGVuX3N0YWNrX2dldF9iYXNlAKsFGGVtc2NyaXB0ZW5fc3RhY2tfZ2V0X2VuZACsBQlzdGFja1NhdmUApgUMc3RhY2tSZXN0b3JlAKcFCnN0YWNrQWxsb2MAqAUcZW1zY3JpcHRlbl9zdGFja19nZXRfY3VycmVudACmBQmQAwEAQQELxQFclgGYAaIBowGkAaUB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AQJAIAAoAggiAygCCCIGIAAoAhhrIgQgBEEfdSIFcyAFa0H/AE0EQCAAIAAsADUiBUEBajoANSAFQQBODQELIAIgAygCNCACKAJEIAAoAiQgAkEkakEIQf////8BQb0REJUDIgM2AkQgAyAAKAIkIgRBA3RqIgMgATYCACAAIARBAWo2AiQgAyAGNgIEIABBAToANSAAKAIIIQNBgH8hBAsgAiADKAI0IAIoAkAgASACQRhqQQFB/////wdB0xEQlQMiAjYCQCABIAJqIAQ6AAAgACAGNgIYIAAoAhBBAWsLGwAgACACQQd0IAFyIANBEHRyIARBGHRyEMcBCw0AIABBuP7//wcQxwELKwAgACACQRB0QYCABGogAUEHdEHIAEHGACACQQFGG0HHACACG3JyEMcBGgsQACAAIAEgAkH/ASACEMwBC9ICAQd/AkACQAJAIAFBf0YNACADQQd0QYD/AXEhCSAAKAIAKAI0IQogA0H/AUYhCwNAIAogAUECdGoiCCgCACEGAkAgAUEASgRAIAhBBGsiBygCACIFQf8AcUHw1QBqLQAAQRBxDQELIAYhBSAIIQcLAkAgBUH/AHFBwwBGBEAgBwJ/AkAgCw0AIAVBEHZB/wFxIANGDQAgBUH/gH5xIAlyDAELIAVBgIACcSAFQQl2QYD/AXFyQcIAcgs2AgAgAUF/cyACaiIFQf///wdqQYCAgBBPDQQgCCgCACEHDAELIAYhByABQX9zIARqIgVB////B2pBgICAEE8NBAsgCCAHQf8AcSAFQQd0ckGA////B2o2AgAgBkEHdkH///8HayIGQX9GDQEgASAGakEBaiIBQX9HDQALCw8LIAAoAghBnyEQ8AIACyAAKAIIQZ8hEPACAAseAQF/IAAgACgCECICNgIUIAAgASACQf8BIAIQzAELFQAgACACQQd0IAFyIANBD3RyEMcBC0IBAX8CQCAALQA0IAFqIgEgACgCACICLQAISgRAIAFB/wFODQEgAiABOgAICyAAIAE6ADQPCyAAKAIIQfkOEPACAAuZAQECfyMAQRBrIgMkAAJAIAJCgYAEfUKAgHhaBEAgACACp0EPdEGAgP7/B2ogAUEHdHJBAXIQxwEaDAELIANBAzoACCADIAI3AwAgAUEHdCEBIAAgAyADENEBIgRB//8HTARAIAAgASAEQQ90ckED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QCACIgAoAgAiAiABRw0ACyAAIAEoAgA2AgAgASADKAJgNgIAIAMgATYCYCABIAEtAAVBwAByOgAFCwuDCgEEfwJAAkACQAJAAkACQAJAAkACQAJAAkAgAS0ABEEEaw4jBwQCBgUBAAkJCQkJCQkJCQgJCQkJCQkJCQkJCQkJCQkJCQMJCyAAKAIQIgMoAgQgASgCNCABKAIUQQJ0IgJBACADKAIAEQEAGiADIAMoAgwgAms2AgwgACgCECIDKAIEIAEoAjggASgCHEECdCICQQAgAygCABEBABogAyADKAIMIAJrNgIMIAAoAhAiAygCBCABKAIwIAEoAhBBBHQiAkEAIAMoAgARAQAaIAMgAygCDCACazYCDCAAKAIQIgMoAgQgASgCQCABKAIYIgJBACADKAIAEQEAGiADIAMoAgwgAms2AgwgACgCECIDKAIEIAEoAkQgASgCJEEDdCICQQAgAygCABEBABogAyADKAIMIAJrNgIMIAAoAhAiAygCBCABKAJIIAEoAiBBDGwiAkEAIAMoAgARAQAaIAMgAygCDCACazYCDCAAKAIQIgMoAgQgASgCPCABKAIMQQN0IgJBACADKAIAEQEAGiADIAMoAgwgAms2AgwgACgCECIAKAIEIAFB1ABBACAAKAIAEQEAGiAAIAAoAgxB1ABrNgIMDwsgASgCCCABQRBqRwRAIAEoAhQgASgCECICNgIAIAIEQCACIAEoAhQ2AhQLCyAAKAIQIgAoAgQgAUEgQQAgACgCABEBABogACAAKAIMQSBrNgIMDwsgACgCECICKAIEIAEgAS0ABkECdEEQaiIAQQAgAigCABEBABoMBwsgACgCECICKAIEIAEgAS0ABkEEdEEQaiIAQQAgAigCABEBABoMBgsgASgCFARAIAAoAhAiAygCBCABKAIQQRggAS0AB3QiAkEAIAMoAgARAQAaIAMgAygCDCACazYCDAsgASgCDCEEIAEoAgghAwJAIAEsAAZBAE4NACADaUECSQ0AIANBAXYgA3IiAkECdiACciICQQR2IAJyIgJBCHYgAnIiAkEQdiACckEBaiEDCyAAKAIQIgUoAgQgBCADQQR0IgJBACAFKAIAEQEAGiAFIAUoAgwgAms2AgwgACgCECIAKAIEIAFBIEEAIAAoAgARAQAaIAAgACgCDEEgazYCDA8LIAAgASABKAIcELUCIAEoAhwiBARAIAEgAUE0ajYCFCABQUBrIgIoAgAhACACQQA2AgAgAARAA0AgACgCDCABKAIQIgQoAgQgAEEkQQAgBCgCABEBABogBCAEKAIMQSRrNgIMIAEgAS8BCEEBazsBCCIADQALIAEoAhwhBAsgASgCECICKAIEIAQgASgCGCAEa0HQAGoiAEEAIAIoAgARAQAaIAIgAigCDCAAazYCDAsoAhAiACgCBCABQQRrQfgAQQAgACgCABEBABogACAAKAIMQfgAazYCDA8LIAAoAhAiAigCBCABIAEoAgggAS8BBiIAQQR0QRhqQRAgABtqIgBBACACKAIAEQEAGgwDCyAAKAIQIgUoAhggASgCCCAFKAIgQQFrcUECdGohAwNAIAMiAigCACIEQQxqIQMgASAERw0ACyACIAEoAgw2AgAgBSAFKAIcQQFrNgIcIAAoAhAiAigCBCABIAEtAAdBEWoiAEEAIAIoAgARAQAaDAILIAAoAhAiAigCBCABIAEoAgxBEWoiAEEAIAIoAgARAQAaIAIgAigCDCAAazYCDAsPCyACIAIoAgwgAGs2AgwL1QEBAX8CQCAAKAIQIgItAE4gAUYNACABQQFGBEAgACACEMECGgwBCyACLQBMQRhxIQAgAigCWCIBBEADQCABIAEtAAVBwAFxIAByOgAFIAEoAgAiAQ0ACwsgAkEANgKIASACQgA3A4ABIAIoAmAiAQRAA0AgASABLQAFQcABcSAAcjoABSABKAIAIgENAAsLIAIoAngiAQRAA0AgASABLQAFQcABcSAAcjoABSABKAIAIgENAAsLIAJBADYCmAEgAkIANwOQASACQQg7AE0LIAJBADYCFAtwAQF/AkAgACgCECICLQBNQQhHBEADQCAAEMICGiACLQBNQQhHDQALIAAoAhAiAi0ATUUNAQsDQCAAEMICGiACLQBNDQALCyAAEMMCIAAgARDEAiABQQAgAS0AUCABKAIMIAEoAghqQeQAbmxrENUDC7oKAQl/IAAoAhAiAUEBOgBPAkACQAJAAkACQAJAAkACQAJAAkACQCABLQBNDgkBAgoDBAUGBwAKCyABQgA3AmQgAUEANgJ0IAFCADcCbCABKAKkASIALQAFQRhxBEAgASAAELoCCwJAIAEtADBBwABxRQ0AIAEoAigiAC0ABUEY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xAFxOgAFDAILIAIoAgggAkEQakYNACACIARBxAFxOgAFDAELIAIgA0EkcjoABQsgAiEDCyADKAIAIgINAAsgASgCWCEDCyABQQA2AowBIAEgAzYCiAEgASADNgKEASABIAM2AoABIAEoAmAiAgRAIAAoAhAhBSABQeAAaiEDA0ACQCACLQAFIgRBGHEEQCADIAIoAgA2AgAgACACEL8CDAELIARB+AFxIgNBBHIhBAJAAkACQAJAIAItAARBCGsOAgABAgsgAiAFKAJoNgIoIAUgAjYCaCACIARBxAFxOgAFDAILIAIoAgggAkEQakYNACACIARBxAFxOgAFDAELIAIgA0EkcjoABQsgAiEDCyADKAIAIgINAAsgASgCYCEGCyABIAY2ApgBIAEgBjYClAEgASAGNgKQASABKAJ4IgIEQCABQfgAaiEDIAAoAhAhBQNAAkAgAi0ABSIEQRhxBEAgAyACKAIANgIAIAAgAhC/AgwBCyAEQfgBcSIDQQRyIQQCQAJAAkACQCACLQAEQQhrDgIAAQILIAIgBSgCaDYCKCAFIAI2AmggAiAEQcQBcToABQwCCyACKAIIIAJBEGpGDQAgAiAEQcQBcToABQwBCyACIANBJHI6AAULIAIhAwsgAygCACICDQALCyABQQA2AhQgAUEBOgBOIAEgASgCDCABKAIIajYCECAAIAEQyQILvwQBBn8jAEEQayIEJAAgACgCECICIAIoAngiASgCADYCeCABIAIoAlg2AgAgAiABNgJYIAEgAS0ABSIDQb8BcToABQJAIAItAE1BA2tB/wFxQQNNBEAgASACLQBMQRhxIANBhwFxcjoABQwBCyADQQdxQQNHDQAgAiABNgKMAQsgBCABNgIAIAQgAS0ABEHAAHI6AAgCQCAAIARBAhCjBCIBLQAIQQ9xRQ0AIAAtAAchBSACIAItAFIiBkECcjoAUiAAQQA6AAcgACAAKAIMIgNBEGo2AgwgAyABKQMANwMAIAMgAS0ACDoACCAAIAAoAgwiAUEQajYCDCABIAQpAwA3AwAgASAELQAIOgAIIAAoAhQiASABLwEiQYABcjsBIiAAQcUAQQAgACgCDCAAKAIca0Ega0EAEK8CIAAoAhQiAyADLwEiQf/+A3E7ASIgACAFOgAHIAIgBjoAUkUNAEGWIyECIAAoAgwiAUEIay0A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AGohBAwBCyABQRxqIQQLIAQgACgCaDYCACAAIAE2AmggAkHHAXEMAQsgAkECcws6AAULIAEoAgghAiABKAIUBH9BAiABLQAHdAVBAAsgAmpBAWoPCwALxxEBCH8CQCAAKAIQIgEtAFINACABKAIUIQMCQAJAAkACQCABLQBOQQFHBEAgA0UNBCABLQBNDQEMAgsgA0UNAiABLQBMQRhxIQQgASgCWCICBEADQCACIAItAAVBwAFxIARyOgAFIAIoAgAiAg0ACwsgAUEANgKIASABQgA3A4ABIAEoAmAiAgRAA0AgAiACLQAFQcABcSAEcjoABSACKAIAIgINAAsLIAEoAngiAgRAA0AgAiACLQAFQcABcSAEcjoABSACKAIAIgINAAsLIAFBADYCmAEgAUIANwOQASABQQg7AE0gAUEANgIUCwNAIAAQwgIaIAEtAE0NAAsLIAAQwwIiCCADQQN2IANqSQRAIAAgARDEAiABQQAgAS0AUCABKAIMIAEoAghqQeQAbmxrENUDDwsgASABKAIMIAEoAghqNgIQIAAoAhAiA0EDOgBNAkACQAJAIAMoAlgiAgRAIANB2ABqIQcgAyEGDAELIANBADYCXCADIQIMAQsDQCAHIQRBACEFIAIEQAJAIAItAAUiBSAGLQBMIgZBGHNxBEAgBCACKAIANgIAIAAgAhC/AgwBCyACIAVBwAFxIAZBGHFyOgAFIAIhBAsgBCgCACEFCyAHIARBACAFGyIERgRAIAAoAhAhBiAHKAIAIQIMAQsLIAAoAhAiAi0ATSADIAQ2AlxBCEYNAQsDQCAAEMICGiACLQBNQQhHDQALCyABIAEoAgwgASgCCGpB/////wcgASgCEEHkAG4iACABLQBUQQJ0IgNsIANB/////wcgAG5PG2siAEEfdSAAcRDVAyABIAg2AhQPCyABKAIQIgdB5ABuIQMCQCABKAIMIgJBAEwNACABKAIIIAJqIAEtAFEgA2xBAnQiBCAHak0NACABLQBMQRhxIQMgASgCWCICBEADQCACIAItAAVBwAFxIANyOgAFIAIoAgAiAg0ACwsgAUEANgKIASABQgA3A4ABIAEoAmAiAgRAA0AgAiACLQAFQcABcSADcjoABSACKAIAIgINAAsLIAEoAngiAgRAA0AgAiACLQAFQcABcSADcjoABSACKAIAIgIN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IQIMAQsgACABQQhqIAIgB6ciAEEBa2wgACADbGoiAhCRASEAIAdCAloEQANAIAAgBCABKAKcBPwKAAAgASgCnAQgAGohACABKAKYBCIDBEAgACAFIAP8CgAAIAEoApgEIABqIQALIAdCAlYgB0IBfSEHDQALCyAAIAQgASgCnAT8CgAAIAFBCGogAhCQAUEBIQILIAFBoARqJAAgAguDAQEEfyMAQaAEayIBJAAgAEEBIAFBnARqEIUBIQMgACABQQhqIAEoApwEEJEBIQQCQCABKAKcBCIARQRAQQAhAAwBCwNAIAIgBGogACADaiACQX9zai0AADoAACACQQFqIgIgASgCnAQiAEkNAAsLIAFBCGogABCQASABQaAEaiQAQQELywECAn4EfyMAQRBrIgUkAEEBIQMgAEEBIAVBDGoQhQEhBiAAQQIQiwEhASAFKAIMIgStIQICQCABQgBVBEAgAachAwwBCyABUA0AIAFCACACfVMNACAEIAGnakEBaiEDCwJAAn8gBCACIABBA0J/EI0BIgFTDQAaIAGnIAFCAFkNABpBACABQgAgAn1TDQAaIAQgAadqQQFqCyIEIANPBEAgACADIAZqQQFrIAQgA2tBAWoQPhoMAQsgAEHOxgAQPxoLIAVBEGokAEEBC40BAQR/IwBBoARrIgEkACAAQQEgAUGcBGoQhQEhAyAAIAFBCGogASgCnAQQkQEhBAJAIAEoApwERQRAQQAhAAwBCwNAIAIgBGogAiADai0AACIAQd8AcSAAIABB4QBrQRpJGzoAACACQQFqIgIgASgCnAQiAEkNAAsLIAFBCGogABCQASABQaAEaiQAQQELhBQEDn8DfgF8AX0jAEGwBGsiASQAIABBAUEAEIUBIQcgAUKBgICAEDcCGCABIAA2AhQgASAHNgIQIAAoAgxBADoACCAAIAAoAgxBEGo2AgwgACABQSBqEHIgBy0AAARAQQEhBwNAIAFBFGogDCABQRBqIAFBDGogAUEIahD7AyEFIAEoAggiAiAMaiEGIAEoAgwhBCACQQBKBEADQCABKAIoIgMgASgCJE8EQCABQSBqQQEQdBogASgCKCEDCyABIANBAWo2AiggASgCICADakEAOgAAIAJBAUogAkEBayECDQALCyAEIAZqIQwgByICQQFqIQcCQAJAAkACQAJAAkACQAJA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AX8jAEHQAGsiBCQAAkAgA0GAgAFOBEAgBEEgaiABIAJCAEKAgICAgICA//8AEKIFIAQpAyghAiAEKQMgIQEgA0H//wFJBEAgA0H//wBrIQMMAgsgBEEQaiABIAJCAEKAgICAgICA//8AEKIFQf3/AiADIANB/f8CThtB/v8BayEDIAQpAxghAiAEKQMQIQEMAQsgA0GBgH9KDQAgBEFAayABIAJCAEKAgICAgICAORCiBSAEKQNIIQIgBCkDQCEBIANB9IB+SwRAIANBjf8AaiEDDAELIARBMGogASACQgBCgICAgICAgDkQogVB6IF9IAMgA0HogX1MG0Ga/gFqIQMgBCkDOCECIAQpAzAhAQsgBCABIAJCACADQf//AGqtQjCGEKIFIAAgBCkDCDcDCCAAIAQpAwA3AwAgBEHQAGokAAvJBgIEfwN+IwBBgAFrIgUkAAJAAkACQCADIARCAEIAEJgFRQ0AAn8gBEL///////8/gyEKAn8gBEIwiKdB//8BcSIGQf//AUcEQEEEIAYNARpBAkEDIAMgCoRQGwwCCyADIAqEUAsLIAJCMIinIghB//8BcSIHQf//AUYNAA0BCyAFQRBqIAEgAiADIAQQogUgBSAFKQMQIgIgBSkDGCIBIAIgARCaBSAFKQMIIQIgBSkDACEEDAELIAEgAkL///////////8AgyIKIAMgBEL///////////8AgyIJEJgFQQBMBEAgASAKIAMgCRCYBQRAIAEhBAwCCyAFQfAAaiABIAJCAEIAEKIFIAUpA3ghAiAFKQNwIQQMAQsgBEIwiKdB//8BcSEGIAcEfiABBSAFQeAAaiABIApCAEKAgICAgIDAu8AAEKIFIAUpA2giCkIwiKdB+ABrIQcgBSkDYAshBCAGRQRAIAVB0ABqIAMgCUIAQoCAgICAgMC7wAAQogUgBSkDWCIJQjCIp0H4AGshBiAFKQNQIQMLIAlC////////P4NCgICAgICAwACEIQsgCkL///////8/g0KAgICAgIDAAIQhCiAGIAdIBEADQAJ+IAogC30gAyAEVq19IglCAFkEQCAJIAQgA30iBIRQBEAgBUEgaiABIAJCAEIAEKIFIAUpAyghAiAFKQMgIQQMBQsgCUIBhiAEQj+IhAwBCyAKQgGGIARCP4iECyEKIARCAYYhBCAHQQFrIgcgBkoN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fiMAQfAAayIGJAAgBEL///////////8AgyEJAkACQCABUCIFIAJC////////////AIMiCkKAgICAgIDA//8AfUKAgICAgIDAgIB/VCAKUBtFBEAgA0IAUiAJQoCAgICAgMD//wB9IgtCgICAgICAwICAf1YgC0KAgICAgIDAgIB/URsNAQsgBSAKQoCAgICAgMD//wBUIApCgICAgICAwP//AFEbRQRAIAJCgICAgICAIIQhBCABIQMMAgsgA1AgCUKAgICAgIDA//8AVCAJQoCAgICAgMD//wBRG0UEQCAEQoCAgICAgCCEIQQMAgsgASAKQoCAgICAgMD//wCFhFAEQEKAgICAgIDg//8AIAIgASADhSACIASFQoCAgICAgICAgH+FhFAiBRshBEIAIAEgBRshAwwCCyADIAlCgICAgICAwP//AIWEUA0BIAEgCoRQBEAgAyAJhEIAUg0CIAEgA4MhAyACIASDIQQMAgsgAyAJhEIAUg0AIAEhAyACIQQMAQsgAyABIAEgA1QgCSAKViAJIApRGyIIGyEKIAQgAiAIGyILQv///////z+DIQkgAiAEIAgbIgJCMIinQf//AXEhByALQjCIp0H//wFxIgVFBEAgBkHgAGogCiAJIAogCSAJUCIFG3kgBUEGdK18pyIFQQ9rEJcFIAYpA2ghCSAGKQNgIQpBECAFayEFCyABIAMgCBshAyACQv///////z+DIQQgB0UEQCAGQdAAaiADIAQgAyAEIARQIgcbeSAHQQZ0rXynIgdBD2sQlwVBECAHayEHIAYpA1ghBCAGKQNQIQMLIARCA4YgA0I9iIRCgICAgICAgASEIQEgCUIDhiAKQj2IhCACIAuFIQ0CfiADQgOGIgIgBSAHRg0AGiAFIAdrIgdB/wBLBEBCACEBQgEMAQsgBkFAayACIAFBgAEgB2sQlwUgBkEwaiACIAEgBxChBSAGKQM4IQEgBikDMCAGKQNAIAYpA0iEQgBSrYQLIQlCgICAgICAgASEIQwgCkIDhiEKAkAgDUIAUwRAQgAhA0IAIQQgCSAKhSABIAyFhFANAiAKIAl9IQIgDCABfSAJIApWrX0iBEL/////////A1YNASAGQSBqIAIgBCACIAQgBFAiBxt5IAdBBnStfKdBDGsiBxCXBSAFIAdrIQUgBikDKCEEIAYpAyAhAgwBCyAJIAp8IgIgCVStIAEgDHx8IgRCgICAgICAgAiDUA0AIAlCAYMgBEI/hiACQgGIhIQhAiAFQQFqIQUgBEIBiCEECyALQoCAgICAgICAgH+DIQEgBUH//wFOBEAgAUKAgICAgIDA//8AhCEEQgAhAwwBC0EAIQcCQCAFQQBKBEAgBSEHDAELIAZBEGogAiAEIAVB/wBqEJcFIAYgAiAEQQEgBWsQoQUgBikDACAGKQMQIAYpAxiEQgBSrYQhAiAGKQMIIQQLIAKnQQdxIgVBBEutIARCPYYgAkIDiIQiAnwiAyACVK0gBEIDiEL///////8/gyAHrUIwhoQgAYR8IQQCQCAFQQRGBEAgBCADQgGDIgEgA3wiAyABVK18IQQMAQsgBUUNAQsLIAAgAzcDACAAIAQ3AwggBkHwAGokAAtQAQF+AkAgA0HAAHEEQCABIANBQGqthiECQgAhAQwBCyADRQ0AIAIgA60iBIYgAUHAACADa62IhCECIAEgBIYhAQsgACABNwMAIAAgAjcDCAvbAQIBfwJ+QQEhBAJAIABCAFIgAUL///////////8AgyIFQoCAgICAgMD//wBWIAVCgICAgICAwP//AFEbDQAgAkIAUiADQv///////////wCDIgZCgICAgICAwP//AFYgBkKAgICAgIDA//8AURsNACAAIAKEIAUgBoSEUARAQQAPCyABIAODQgBZBEBBfyEEIAAgAlQgASADUyABIANRGw0BIAAgAoUgASADhYRCAFIPC0F/IQQgACACViABIANVIAEgA1EbDQAgACAChSABIAOFhEIAUiEECyAEC8ABAgF/An5BfyEDAkAgAEIAUiABQv///////////wCDIgRCgICAgICAwP//AFYgBEKAgICAgIDA//8AURsNACACQv///////////wCDIgVCgICAgICAwP//AFYgBUKAgICAgIDA//8AUnENACAAIAQgBYSEUARAQQAPCyABIAKDQgBZBEAgASACUiABIAJTcQ0BIAAgASAChYRCAFIPCyAAQgBSIAEgAlUgASACURsNACAAIAEgAoWEQgBSIQMLIAMLvg8CBX8PfiMAQdACayIFJAAgBEL///////8/gyEKIAJC////////P4MhCyACIASFQoCAgICAgICAgH+DIQwgBEIwiKdB//8BcSEIAkACQCACQjCI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AxgiBFYgASAEURtxrXwiAlatfCIEIAIgBEKAgICAgIDA//8AVCADIAUpAwBWIAEgBSkDCCIDViABIANRG3GtfCIBIAJUrXwgDIQhDAsgACABNwMAIAAgDDcDCCAFQdACaiQACx8AQbCSAigCAEUEQEGwkgIgADYCAEG0kgIgATYCAAsLfgEDf0G4kgJBuJICKAIAQQFqIgU2AgAgACAFNgIAIAMEQANAIAIgBkEDdGoiBCgCAEUEQCAEIAU2AgAgBCABNgIEIARBADYCCCADJAEgAg8LIAZBAWoiBiADRw0ACwsgACABIAIgA0EEdEEIchCVBSADQQF0IgAQnAUgACQBCyEAQbCSAigCAEUEQEGwkgIgADYCAEG0kgIgATYCAAsQGgv6AQIDfgJ/IwBBEGsiBSQAAn4gAb0iBEL///////////8AgyICQoCAgICAgIAIfUL/////////7/8AWARAIAJCPIYhAyACQgSIQoCAgICAgICAPHwMAQsgAkKAgICAgICA+P8AWgRAIARCPIYhAyAEQgSIQoCAgICAgMD//wCEDAELIAJQBEBCAAwBCyAFIAJCACACp2dBIGogAkIgiKdnIAJCgICAgBBUGyIGQTFqEJcFIAUpAwAhAyAFKQMIQoCAgICAgMAAhUGM+AAgBmutQjCGhAshAiAAIAM3AwAgACACIARCgICAgICAgICAf4OENwMIIAVBEGokAAt/AgJ/AX4jAEEQayIDJAAgAAJ+IAFFBEBCAAwBCyADIAEgAUEfdSICcyACayICrUIAIAJnIgJB0QBqEJcFIAMpAwhCgICAgICAwACFQZ6AASACa61CMIZ8IAFBgICAgHhxrUIghoQhBCADKQMACzcDACAAIAQ3AwggA0EQaiQAC2cCAX8BfiMAQRBrIgIkACAAAn4gAUUEQEIADAELIAIgAa1CAEHwACABZyIBQR9zaxCXBSACKQMIQoCAgICAgMAAhUGegAEgAWutQjCGfCEDIAIpAwALNwMAIAAgAzcDCCACQRBqJAALUAEBfgJAIANBwABxBEAgAiADQUBqrYghAUIAIQIMAQsgA0UNACACQcAAIANrrYYgASADrSIEiIQhASACIASIIQILIAAgATcDACAAIAI3AwgLwQoCBX8PfiMAQeAAayIFJAAgBEL///////8/gyEMIAIgBIVCgICAgICAgICAf4MhCiACQv///////z+DIg1CIIghDiAEQjCIp0H//wFxIQcCQAJAIAJCMIinQf//AXEiCUH//wFrQYKAfk8EQCAHQf//AWtBgYB+Sw0BCyABUCACQv///////////wCDIgtCgICAgICAwP//AFQgC0KAgICAgIDA//8AURtFBEAgAkKAgICAgIAghCEKDAILIANQIARC////////////AIMiAkKAgICAgIDA//8AVCACQoCAgICAgMD//wBRG0UEQCAEQoCAgICAgCCEIQogAyEBDAILIAEgC0KAgICAgIDA//8AhYRQBEAgAiADhFAEQEKAgICAgIDg//8AIQpCACEBDAMLIApCgICAgICAwP//AIQhCkIAIQEMAgsgAyACQoCAgICAgMD//wCFhFAEQCABIAuEQgAhAVAEQEKAgICAgIDg//8AIQoMAwsgCkKAgICAgIDA//8AhCEKDAILIAEgC4RQBEBCACEBDAILIAIgA4RQBEBCACEBDAILIAtC////////P1gEQCAFQdAAaiABIA0gASANIA1QIgYbeSAGQQZ0rXynIgZBD2sQlwVBECAGayEGIAUpA1giDUIgiCEOIAUpA1AhAQsgAkL///////8/Vg0AIAVBQGsgAyAMIAMgDCAMUCIIG3kgCEEGdK18pyIIQQ9rEJcFIAYgCGtBEGohBiAFKQNIIQwgBSkDQCEDCyADQg+GIgtCgID+/w+DIgIgAUIgiCIEfiIQIAtCIIgiEyABQv////8PgyIBfnwiD0IghiIRIAEgAn58IgsgEVStIAIgDUL/////D4MiDX4iFSAEIBN+fCIRIAxCD4YiEiADQjGIhEL/////D4MiAyABfnwiFCAPIBBUrUIghiAPQiCIhHwiDyACIA5CgIAEhCIMfiIWIA0gE358Ig4gEkIgiEKAgICACIQiAiABfnwiECADIAR+fCISQiCGfCIXfCEBIAcgCWogBmpB//8AayEGAkAgAiAEfiIYIAwgE358IgQgGFStIAQgBCADIA1+fCIEVq18IAIgDH58IAQgBCARIBVUrSARIBRWrXx8IgRWrXwgAyAMfiIDIAIgDX58IgIgA1StQiCGIAJCIIiEfCAEIAJCIIZ8IgIgBFStfCACIAIgECASVq0gDiAWVK0gDiAQVq18fEIghiASQiCIhHwiAlatfCACIAIgDyAUVK0gDyAXVq18fCICVq18IgRCgICAgICAwACDQgBSBEAgBkEBaiEGDAELIAtCP4ggBEIBhiACQj+IhCEEIAJCAYYgAUI/iIQhAiALQgGGIQsgAUIBhoQhAQsgBkH//wFOBEAgCkKAgICAgIDA//8AhCEKQgAhAQwBCwJ+IAZBAEwEQEEBIAZrIgdB/wBNBEAgBUEwaiALIAEgBkH/AGoiBhCXBSAFQSBqIAIgBCAGEJcFIAVBEGogCyABIAcQoQUgBSACIAQgBxChBSAFKQMwIAUpAziEQgBSrSAFKQMgIAUpAxCEhCELIAUpAyggBSkDGIQhASAFKQMAIQIgBSkDCAwCC0IAIQEMAgsgBEL///////8/gyAGrUIwhoQLIAqEIQogC1AgAUIAWSABQoCAgICAgICAgH9RG0UEQCAKIAJCAXwiAVCtfCEKDAELIAsgAUKAgICAgICAgIB/hYRCAFIEQCACIQEMAQsgCiACIAJCAYN8IgEgAlStfCEKCyAAIAE3AwAgACAKNwMIIAVB4ABqJAALdQEBfiAAIAEgBH4gAiADfnwgA0IgiCICIAFCIIgiBH58IANC/////w+DIgMgAUL/////D4MiAX4iBUIgiCADIAR+fCIDQiCIfCABIAJ+IANC/////w+DfCIBQiCIfDcDCCAAIAVC/////w+DIAFCIIaENwMAC0UBAX8jAEEQayIFJAAgBSABIAIgAyAEQoCAgICAgICAgH+FEJYFIAUpAwAhASAAIAUpAwg3AwggACABNwMAIAVBEGokAAvTAwICfgJ/IwBBIGsiBCQAAkAgAUL///////////8AgyIDQoCAgICAgMCAPH0gA0KAgICAgIDA/8MAfVQEQCABQgSGIABCPIiEIQMgAEL//////////w+DIgBCgYCAgICAgIAIWgRAIANCgYCAgICAgIDAAHwhAgwCCyADQoCAgICAgICAQH0hAiAAQoCAgICAgICACFINASACIANCAYN8IQIMAQsgAFAgA0KAgICAgIDA//8AVCADQoCAgICAgMD//wBRG0UEQCABQgSGIABCPIiEQv////////8Dg0KAgICAgICA/P8AhCECDAELQoCAgICAgID4/wAhAiADQv///////7//wwBWDQBCACECIANCMIinIgVBkfcASQ0AIARBEGogACABQv///////z+DQoCAgICAgMAAhCICIAVBgfcAaxCXBSAEIAAgAkGB+AAgBWsQoQUgBCkDCEIEhiAEKQMAIgBCPIiEIQIgBCkDECAEKQMYhEIAUq0gAEL//////////w+DhCIAQoGAgICAgICACFoEQCACQgF8IQIMAQsgAEKAgICAgICAgAhSDQAgAkIBgyACfCECCyAEQSBqJAAgAiABQoCAgICAgICAgH+DhL8LBAAjAAsGACAAJAALEAAjACAAa0FwcSIAJAAgAAsPAEHAksIAJANBwJICJAILBwAjACMCawsEACMDCwQAIwILC8TkAcQBAEGACAvOPmludGVydmFsIGlzIGVtcHR5AGluZmluaXR5AGdldHJlZ2lzdHJ5AG5vdCBlbm91Z2ggbWVtb3J5AG1vbmV0YXJ5AGJpbmFyeQBhdHRlbXB0IHRvIHlpZWxkIGFjcm9zcyBhIEMtY2FsbCBib3VuZGFyeQB5ZGF5AHdkYXkAYUFiQmNDZERlRmdHaEhJam1NbnByUlN0VHVVVndXeFh5WXpaJXx8RWNFQ0V4RVhFeUVZT2RPZU9IT0lPbU9NT1NPdU9VT1ZPd09XT3kAMHglbGx4AHBhdHRlcm4gdG9vIGNvbXBsZXgAX19uZXdpbmRleABfX2luZGV4AGludGVnZXIgaW5kZXgAaW52YWxpZCB1cHZhbHVlIGluZGV4AG1heAAtKyAgIDBYMHgALTBYKzBYIDBYLTB4KzB4IDB4AF9fcG93AGludGVnZXIgb3ZlcmZsb3cAQyBzdGFjayBvdmVyZmxvdwBzdHJpbmcgbGVuZ3RoIG92ZXJmbG93AHRhYmxlIG92ZXJmbG93AHVuc2lnbmVkIG92ZXJmbG93AGdldGVudgBfX2lkaXYAX19kaXYAZmxuU3J0dQB0ZXh0AG5leHQAX0lPX291dHB1dABfSU9faW5wdXQAc3Rkb3V0AGNvbnN0AG11bHRpcGxlIHRvLWJlLWNsb3NlZCB2YXJpYWJsZXMgaW4gbG9jYWwgbGlzdABpc2RzdABzcXJ0AHNvcnQAZGF0YSBzdHJpbmcgdG9vIHNob3J0AGFzc2VydABpbnNlcnQAcmVzdGFydABfX2Jub3QAY291bnQAU2xudABwcmludABjb2RlcG9pbnQAYWJzZW50AGNvbW1lbnQAY29uc3RhbnQAdWx0AF9fbHQAZXhpdABpbml0AHNldGNzdGFja2xpbWl0AHJhd3NldABvZmZzZXQAcmF3Z2V0AGNvbGxlY3QAc2VsZWN0AGJ0AGZsb2F0AHZhcmlhYmxlLWxlbmd0aCBmb3JtYXQAaW52YWxpZCBmb3JtYXQAbmFtZXdoYXQAcmVwZWF0AF9fY29uY2F0ACp0AHN0YXR1cwB0b28gbWFueSBhcmd1bWVudHMAd3JvbmcgbnVtYmVyIG9mIGFyZ3VtZW50cwBjb25zdGFudHMAdG9vIG1hbnkgcmVzdWx0cwBpcGFpcnMAX19wYWlycwBmdW5jdGlvbiBvciBleHByZXNzaW9uIG5lZWRzIHRvbyBtYW55IHJlZ2lzdGVycwBzcGVjaWZpZXIgJyUlcScgY2Fubm90IGhhdmUgbW9kaWZpZXJzAHNlYXJjaGVycwBudXBzAGxhYmVscy9nb3RvcwBzdHJpbmcgY29udGFpbnMgemVyb3MAYWNvcwB0b28gbWFueSBuZXN0ZWQgZnVuY3Rpb25zAG5wYXJhbXMAdG9vIG1hbnkgdXB2YWx1ZXMAYXR0ZW1wdCB0byBjb21wYXJlIHR3byAlcyB2YWx1ZXMAdG9vIG1hbnkgY2FwdHVyZXMAY29yZSBhbmQgbGlicmFyeSBoYXZlIGluY29tcGF0aWJsZSBudW1lcmljIHR5cGVzAGFjdGl2ZWxpbmVzAGNodW5rIGhhcyB0b28gbWFueSBsaW5lcwBsb2NhbCB2YXJpYWJsZXMAb3Bjb2RlcwBmaW5hbCBwb3NpdGlvbiBvdXQgb2YgYm91bmRzAGluaXRpYWwgcG9zaXRpb24gb3V0IG9mIGJvdW5kcwBhYnMAJXMlcwBhdHRlbXB0IHRvICVzIGEgJXMgdmFsdWUlcwBsdWFvcGVuXyVzAEAlcwA+JXMAbW9kdWxlICclcycgbm90IGZvdW5kOiVzACVzIGV4cGVjdGVkLCBnb3QgJXMAJXMgbmVhciAlcwB0b28gbWFueSAlcyAobGltaXQgaXMgJWQpIGluICVzAGF0dGVtcHQgdG8gY29tcGFyZSAlcyB3aXRoICVzAGNhbm5vdCAlcyAlczogJXMAJXM6JWQ6ICVzAGVycm9yIGxvYWRpbmcgbW9kdWxlICclcycgZnJvbSBmaWxlICclcyc6CgklcwBob3VyAGN1cgBzdGRlcnIAX19ieG9yAGZvciBpdGVyYXRvcgBzeW50YXggZXJyb3IAZmxvb3IAZm9yAF9fYm9yAF9fc2hyAGxvd2VyAGludmFsaWQgbG9uZyBzdHJpbmcgZGVsaW1pdGVyAHVwcGVyAG1heGludGVnZXIAdG9pbnRlZ2VyAG1pbmludGVnZXIAb2JqZWN0IGxlbmd0aCBpcyBub3QgYW4gaW50ZWdlcgBmaWVsZCAnJXMnIGlzIG5vdCBhbiBpbnRlZ2VyAGx1YV9JbnRlZ2VyACVkLWJ5dGUgaW50ZWdlciBkb2VzIG5vdCBmaXQgaW50byBMdWEgSW50ZWdlcgBudHJhbnNmZXIAZnRyYW5zZmVyAHRvbnVtYmVyAG1hbGZvcm1lZCBudW1iZXIAbHVhX051bWJlcgBjaGFyAHllYXIAX19lcQBleHAAc3RvcAAnX19uZXdpbmRleCcgY2hhaW4gdG9vIGxvbmc7IHBvc3NpYmxlIGxvb3AAJ19faW5kZXgnIGNoYWluIHRvbyBsb25nOyBwb3NzaWJsZSBsb29wAGR1bXAAc3RlcAByZXAAd3JhcABQcAAlczogJXAAcHJvdG8AZ290bwAvdXNyL2xvY2FsL2xpYi9sdWEvNS40Lz8uc287L3Vzci9sb2NhbC9saWIvbHVhLzUuNC9sb2FkYWxsLnNvOy4vPy5zbwBhdHRlbXB0IHRvIGRpdmlkZSBieSB6ZXJvACdmb3InIHN0ZXAgaXMgemVybwBubwBpbwBnZXRpbmZvAGRvAHJldHVybgBjaGFycGF0dGVybgBtaXNzaW5nICdbJyBhZnRlciAnJSVmJyBpbiBwYXR0ZXJuAHdhcm4AaW52YWxpZCBvcHRpb24ASW5zdHJ1Y3Rpb24AbWFpbiBmdW5jdGlvbgB1bmFibGUgdG8gZHVtcCBnaXZlbiBmdW5jdGlvbgBjYW5ub3QgdXNlICcuLi4nIG91dHNpZGUgYSB2YXJhcmcgZnVuY3Rpb24AbnVtYmVyJXMgaGFzIG5vIGludGVnZXIgcmVwcmVzZW50YXRpb24AbnVtYmVyIGhhcyBubyBpbnRlZ2VyIHJlcHJlc2VudGF0aW9uAGRhdGUgcmVzdWx0IGNhbm5vdCBiZSByZXByZXNlbnRlZCBpbiB0aGlzIGluc3RhbGxhdGlvbgB0aW1lIHJlc3VsdCBjYW5ub3QgYmUgcmVwcmVzZW50ZWQgaW4gdGhpcyBpbnN0YWxsYXRpb24AZHluYW1pYyBsaWJyYXJpZXMgbm90IGVuYWJsZWQ7IGNoZWNrIHlvdXIgTHVhIGluc3RhbGxhdGlvbgBwZXJmb3JtIGJpdHdpc2Ugb3BlcmF0aW9uIG9uAHBlcmZvcm0gYXJpdGhtZXRpYyBvbgBhc2luAHVwdmFsdWVqb2luAG1pbgA9c3RkaW4AbWFpbgBwb3BlbgByZW9wZW4AcmF3bGVuAF9fbGVuAHRoZW4AYXRhbgBuYW4AYm9vbGVhbgB2YWx1ZSBoYXMgbm8gbGl0ZXJhbCBmb3JtAHJhbmRvbQBfX3VubQBzZXRzdGVwbXVsAF9fbXVsAHVuZXhwZWN0ZWQgc3ltYm9sAGZ1bGwAeHBjYWxsAGlzdGFpbGNhbGwAX19jYWxsAHRhaWwgY2FsbAB1bnRpbAB0YWJsZSBpbmRleCBpcyBuaWwAY2VpbABfX3NobAByYXdlcXVhbABpbmNyZW1lbnRhbABnZW5lcmF0aW9uYWwAbm9ybWFsAHNldGxvY2FsAGdldGxvY2FsAGdsb2JhbABTbABzZXRob29rAGdldGhvb2sAZXh0ZXJuYWwgaG9vawBub3QgYSBiaW5hcnkgY2h1bmsAbWFpbiBjaHVuawBjb3JydXB0ZWQgY2h1bmsAdHJ1bmNhdGVkIGNodW5rAHNlZWsAY2xvY2sAdG9vIG1hbnkgcmVzdWx0cyB0byB1bnBhY2sAdHJhY2ViYWNrAGJyZWFrAHBpAG1vbnRoAHNlYXJjaHBhdGgAY3BhdGgAbWF0aABmbHVzaABmbG9hdCBmb3JtYXQgbWlzbWF0Y2gAaW50ZWdlciBmb3JtYXQgbWlzbWF0Y2gAdmVyc2lvbiBtaXNtYXRjaAAlcyBzaXplIG1pc21hdGNoAGdtYXRjaABkZWJ1ZwBpc3ZhcmFyZwBsb2cAbGV4aWNhbCBlbGVtZW50IHRvbyBsb25nAGNvbnRyb2wgc3RydWN0dXJlIHRvbyBsb25nAHN0cmluZyBzbGljZSB0b28gbG9uZwBpbnZhbGlkIG9yZGVyIGZ1bmN0aW9uIGZvciBzb3J0aW5nAF9fdG9zdHJpbmcAYmluYXJ5IHN0cmluZwBpbnZhbGlkIHVzZSBvZiAnJWMnIGluIHJlcGxhY2VtZW50IHN0cmluZwBiYWQgZm9ybWF0IGZvciBjb25zdGFudCBzdHJpbmcAdGFibGUgb3Igc3RyaW5nAGluaXRpYWwgcG9zaXRpb24gb3V0IG9mIHN0cmluZwB1bmZpbmlzaGVkIHN0cmluZwBlcnJvciBvYmplY3QgaXMgbm90IGEgc3RyaW5nAHJlYWRlciBmdW5jdGlvbiBtdXN0IHJldHVybiBhIHN0cmluZwAnX190b3N0cmluZycgbXVzdCByZXR1cm4gYSBzdHJpbmcAJ3BhY2thZ2UuJXMnIG11c3QgYmUgYSBzdHJpbmcAaXNydW5uaW5nAGVycm9yIGluIGVycm9yIGhhbmRsaW5nAGNvbmZpZwBhcnJheSB0b28gYmlnAG1lbW9yeSBhbGxvY2F0aW9uIGVycm9yOiBibG9jayB0b28gYmlnAGRlZwAlLjE0ZwBzZXR2YnVmAGdldCBsZW5ndGggb2YAaW5mAHNlbGYAZWxzZWlmAG9mZgBtb2RmAHZlcnNpb24gbWlzbWF0Y2g6IGFwcC4gbmVlZHMgJWYsIEx1YSBjb3JlIHByb3ZpZGVzICVmAHBhY2tzaXplAHN0cmluZyBsZW5ndGggZG9lcyBub3QgZml0IGluIGdpdmVuIHNpemUAc3RyaW5nIGxvbmdlciB0aGFuIGdpdmVuIHNpemUAcmVtb3ZlAHRvbyBtYW55IGVsZW1lbnRzIHRvIG1vdmUAdHJ1ZQBzZXR1c2VydmFsdWUAZ2V0dXNlcnZhbHVlAHNldHVwdmFsdWUAZ2V0dXB2YWx1ZQBubyB2YWx1ZQBpbml0aWFsIHZhbHVlAHZhcmlhYmxlICclcycgZ290IGEgbm9uLWNsb3NhYmxlIHZhbHVlAGluaXRpYWwgcG9zaXRpb24gaXMgYSBjb250aW51YXRpb24gYnl0ZQBleGVjdXRlAHdyaXRlAGNvbmNhdGVuYXRlAGNvbGxhdGUAY3JlYXRlAGRhdGUAc2V0cGF1c2UAcmV2ZXJzZQBfX2Nsb3NlAGVsc2UAZmFsc2UAaW52YWxpZCBwYXR0ZXJuIGNhcHR1cmUAdW5maW5pc2hlZCBjYXB0dXJlAHJlcXVpcmUAY3R5cGUAY2Fubm90IGNsb3NlIGEgJXMgY29yb3V0aW5lAGNhbm5vdCByZXN1bWUgbm9uLXN1c3BlbmRlZCBjb3JvdXRpbmUAY2Fubm90IHJlc3VtZSBkZWFkIGNvcm91dGluZQBhdHRlbXB0IHRvIHlpZWxkIGZyb20gb3V0c2lkZSBhIGNvcm91dGluZQBjdXJyZW50bGluZQB0b28gbWFueSBhcmd1bWVudHMgdG8gcmVzdW1lAHRvbyBtYW55IHJlc3VsdHMgdG8gcmVzdW1lAGRpZmZ0aW1lAHRtcG5hbWUAcmVuYW1lAHVuYWJsZSB0byBnZW5lcmF0ZSBhIHVuaXF1ZSBmaWxlbmFtZQBfX25hbWUAd2hpbGUAdG1wZmlsZQBkb2ZpbGUAbG9hZGZpbGUAY2Fubm90IGNsb3NlIHN0YW5kYXJkIGZpbGUAYXR0ZW1wdCB0byB1c2UgYSBjbG9zZWQgZmlsZQBzZXRtZXRhdGFibGUAZ2V0bWV0YXRhYmxlAF9fbWV0YXRhYmxlAGNhbm5vdCBjaGFuZ2UgYSBwcm90ZWN0ZWQgbWV0YXRhYmxlAHN0cmluZy9mdW5jdGlvbi90YWJsZQBuaWwgb3IgdGFibGUAZmllbGQgJyVzJyBtaXNzaW5nIGluIGRhdGUgdGFibGUAJ3BhY2thZ2Uuc2VhcmNoZXJzJyBtdXN0IGJlIGEgdGFibGUAaXN5aWVsZGFibGUAc2V0bG9jYWxlAF9fbGUAaHVnZQBmb3JtYXQgcmVzdWx0IHRvbyBsYXJnZQBidWZmZXIgdG9vIGxhcmdlAHJlc3VsdGluZyBzdHJpbmcgdG9vIGxhcmdlAFVURi04IHZhbHVlIHRvbyBsYXJnZQBkZWNpbWFsIGVzY2FwZSB0b28gbGFyZ2UAbm90IGFuIGludGVnZXIgaW4gcHJvcGVyIHJhbmdlAGluZGV4IG91dCBvZiByYW5nZQBsZXZlbCBvdXQgb2YgcmFuZ2UAdmFsdWUgb3V0IG9mIHJhbmdlAGJhc2Ugb3V0IG9mIHJhbmdlAHBhY2thZ2UAY29sbGVjdGdhcmJhZ2UAX19tb2RlAGludmFsaWQgbW9kZQBpbnZhbGlkIFVURi04IGNvZGUAc291cmNlAGludmFsaWQgZXNjYXBlIHNlcXVlbmNlAEVlAGZtb2QAX19tb2QAbWV0YW1ldGhvZABkZXN0aW5hdGlvbiB3cmFwIGFyb3VuZABmaWVsZCAnJXMnIGlzIG91dC1vZi1ib3VuZABmaW5kAGVuZABfX2JhbmQAJWxsZAB5aWVsZABmaWVsZAB1cHZhbHVlaWQAJ3BvcGVuJyBub3Qgc3VwcG9ydGVkAGhleGFkZWNpbWFsIGRpZ2l0IGV4cGVjdGVkAGZ1bmN0aW9uIGFyZ3VtZW50cyBleHBlY3RlZAAlcyBleHBlY3RlZABMdWEgZnVuY3Rpb24gZXhwZWN0ZWQAdmFsdWUgZXhwZWN0ZWQAJz0nIG9yICdpbicgZXhwZWN0ZWQAPG5hbWU+IG9yICcuLi4nIGV4cGVjdGVkAGZpbGUgaXMgYWxyZWFkeSBjbG9zZWQAZGVmYXVsdCAlcyBmaWxlIGlzIGNsb3NlZABsYXN0bGluZWRlZmluZWQAcmFuZG9tc2VlZABzdXNwZW5kZWQAbG9hZGVkAF9fYWRkAHJhZABwcmVsb2FkAHRocmVhZABkZWFkAFwlMDNkAFwlZABpbnZhbGlkIGNhcHR1cmUgaW5kZXggJSUlZABicmVhayBvdXRzaWRlIGxvb3AgYXQgbGluZSAlZABmdW5jdGlvbiBhdCBsaW5lICVkAG5vIHZpc2libGUgbGFiZWwgJyVzJyBmb3IgPGdvdG8+IGF0IGxpbmUgJWQAbGFiZWwgJyVzJyBhbHJlYWR5IGRlZmluZWQgb24gbGluZSAlZABzaG9ydF9zcmMAZnVuYwBudW1lcmljAF9fZ2MAc2VjACVjAGdzdWIAX19zdWIAcmIAbG9hZGxpYgByd2EAL3Vzci9sb2NhbC9zaGFyZS9sdWEvNS40Lz8ubHVhOy91c3IvbG9jYWwvc2hhcmUvbHVhLzUuNC8/L2luaXQubHVhOy91c3IvbG9jYWwvbGliL2x1YS81LjQvPy5sdWE7L3Vzci9sb2NhbC9saWIvbHVhLzUuNC8/L2luaXQubHVhOy4vPy5sdWE7Li8/L2luaXQubHVhABtMdWEAbGlnaHQgdXNlcmRhdGEAJWEAXwBpbnRlZ3JhbCBzaXplICglZCkgb3V0IG9mIGxpbWl0cyBbMSwlZF0APVtDXQBubyBmaWVsZCBwYWNrYWdlLnByZWxvYWRbJyVzJ10AIl0AX0hPT0tLRVkAeFgAUE9TSVgAX0VOVgBMVUFfTk9FTlYAJVUAR01UAF9DTElCUwBwUAAueFhuTgB0YWJsZSBpbmRleCBpcyBOYU4AX1ZFUlNJT04ATkFOAExDX0FMTAAlSQBMVUFfUEFUSABMVUFfQ1BBVEgAX0cATEFORwBJTkYAZUUAX0xPQURFRABfUFJFTE9BRABDAD0/ADxpbnRlZ2VyPgA8bnVtYmVyPgA8c3RyaW5nPgA8ZW9mPgA8bmFtZT4AZnVuY3Rpb24gPCVzOiVkPgA+PgB+PQA+PQA9PQA8PQA8PAA7OwBzdGFjayB0cmFjZWJhY2s6ADpwcmVsb2FkOgA6OgAtMWU5OTk5AC0wMTIzNDU2Nzg5AHV0ZjgAQy5VVEYtOABfNV80AEx1YSA1LjQAZm9ybWF0IGFza3MgZm9yIGFsaWdubWVudCBub3QgcG93ZXIgb2YgMgAtMAAtIzAALy8AX0cuAC0rIzAgMTIzNDU2Nzg5LgAuLi4AXiQqKz8uKFslLQB3KwAtKwBfVUJPWCoARklMRSoAKHRlbXBvcmFyeSkAKEMgdGVtcG9yYXJ5KQAKCS4uLgkoc2tpcHBpbmcgJWQgbGV2ZWxzKQBzdGFjayBvdmVyZmxvdyAoJXMpACVzOiBiYWQgYmluYXJ5IGZvcm1hdCAoJXMpAGNhbGxpbmcgJyVzJyBvbiBiYWQgc2VsZiAoJXMpAGJhZCBhcmd1bWVudCAjJWQgKCVzKQBiYWQgYXJndW1lbnQgIyVkIHRvICclcycgKCVzKQBjYW5ub3Qgb3BlbiBmaWxlICclcycgKCVzKQBiYWQgJ2ZvcicgJXMgKG51bWJlciBleHBlY3RlZCwgZ290ICVzKQBpbnZhbGlkIHJlcGxhY2VtZW50IHZhbHVlIChhICVzKQBmaWxlICglcCkAKG51bGwpACh2YXJhcmcpAGludmFsaWQgZm9ybWF0ICh0b28gbG9uZykAKGZvciBzdGF0ZSkAKG5vIG5hbWUpAD0oZGVidWcgY29tbWFuZCkAZmlsZSAoY2xvc2VkKQA9KGxvYWQpAHRvbyBtYW55ICVzIChsaW1pdCBpcyAlZCkAJXMgZXhwZWN0ZWQgKHRvIGNsb3NlICVzIGF0IGxpbmUgJWQpAHVuZmluaXNoZWQgbG9uZyAlcyAoc3RhcnRpbmcgYXQgbGluZSAlZCkAKDAvMCkACgkoLi4udGFpbCBjYWxscy4uLikAYXR0ZW1wdCB0byBsb2FkIGEgJXMgY2h1bmsgKG1vZGUgaXMgJyVzJykAICglcyAnJXMnKQBtYWxmb3JtZWQgcGF0dGVybiAobWlzc2luZyBhcmd1bWVudHMgdG8gJyUlYicpAG1hbGZvcm1lZCBwYXR0ZXJuIChtaXNzaW5nICddJykAbWFsZm9ybWVkIHBhdHRlcm4gKGVuZHMgd2l0aCAnJSUnKQAgKABtaXNzaW5nICd9JwBtaXNzaW5nICd7JwB1bmZpbmlzaGVkIHN0cmluZyBmb3IgZm9ybWF0ICd6JwBpbnZhbGlkIGtleSB0byAnbmV4dCcAd3JvbmcgbnVtYmVyIG9mIGFyZ3VtZW50cyB0byAnaW5zZXJ0JwBpbnZhbGlkIGNvbnZlcnNpb24gJyVzJyB0byAnZm9ybWF0JwBpbnZhbGlkIHZhbHVlICglcykgYXQgaW5kZXggJUkgaW4gdGFibGUgZm9yICdjb25jYXQnACVzICclcycAaW52YWxpZCBvcHRpb24gJyVzJwBmdW5jdGlvbiAnJXMnADxnb3RvICVzPiBhdCBsaW5lICVkIGp1bXBzIGludG8gdGhlIHNjb3BlIG9mIGxvY2FsICclcycAdW5rbm93biBhdHRyaWJ1dGUgJyVzJwBubyBtb2R1bGUgJyVzJyBpbiBmaWxlICclcycAYXR0ZW1wdCB0byBhc3NpZ24gdG8gY29uc3QgdmFyaWFibGUgJyVzJwBhdHRlbXB0IHRvICVzIGEgJyVzJyB3aXRoIGEgJyVzJwBpbnZhbGlkIGNvbnZlcnNpb24gc3BlY2lmaWNhdGlvbjogJyVzJwBpbnZhbGlkIGNvbnZlcnNpb24gc3BlY2lmaWVyICclJSVzJwBpbnZhbGlkIG9wdGlvbiAnJSUlYycgdG8gJ2x1YV9wdXNoZnN0cmluZycAbWlzc2luZyBzaXplIGZvciBmb3JtYXQgb3B0aW9uICdjJwBpbnZhbGlkIGZvcm1hdCBvcHRpb24gJyVjJwBpbnZhbGlkIG5leHQgb3B0aW9uIGZvciBvcHRpb24gJ1gnACc8XCVkPicAaW52YWxpZCBvcHRpb24gJz4nAGF0dGVtcHQgdG8gcGVyZm9ybSAnbiUlMCcAJwoJbm8gZmlsZSAnAFtzdHJpbmcgIgBhc3NlcnRpb24gZmFpbGVkIQBlcnJvciBpbiAACgkl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dGVkIHN5c3RlbSBjYWxsAFJlc291cmNlIHRlbXBvcmFyaWx5IHVuYXZhaWxhYmxlAEludmFsaWQgc2VlawBDcm9zcy1kZXZpY2UgbGluawBSZWFkLW9ubHkgZmlsZSBzeXN0ZW0ARGlyZWN0b3J5IG5vdCBlbXB0eQBDb25uZWN0aW9uIHJlc2V0IGJ5IHBlZXIAT3BlcmF0aW9uIHRpbWVkIG91dABDb25uZWN0aW9uIHJlZnVzZWQASG9zdCBpcyBkb3duAEhvc3QgaXMgdW5yZWFjaGFibGUAQWRkcmVzcyBpbiB1c2UAQnJva2VuIHBpcGUASS9PIGVycm9yAE5vIHN1Y2ggZGV2aWNlIG9yIGFkZHJlc3MAQmxvY2sgZGV2aWNlIHJlcXVpcmVkAE5vIHN1Y2ggZGV2aWNlAE5vdCBhIGRpcmVjdG9yeQBJcyBhIGRpcmVjdG9yeQBUZXh0IGZpbGUgYnVzeQBFeGVjIGZvcm1hdCBlcnJvcgBJbnZhbGlkIGFyZ3VtZW50AEFyZ3VtZW50IGxpc3QgdG9vIGxvbmcAU3ltYm9saWMgbGluayBsb29wAEZpbGVuYW1lIHRvbyBsb25nAFRvbyBtYW55IG9wZW4gZmlsZXMgaW4gc3lzdGVtAE5vIGZpbGUgZGVzY3JpcHRvcnMgYXZhaWxhYmxlAEJhZCBmaWxlIGRlc2NyaXB0b3IATm8gY2hpbGQgcHJvY2VzcwBCYWQgYWRkcmVzcwBGaWxlIHRvbyBsYXJnZQBUb28gbWFueSBsaW5rcwBObyBsb2NrcyBhdmFpbGFibGUAUmVzb3VyY2UgZGVhZGxvY2sgd291bGQgb2NjdXIAU3RhdGUgbm90IHJlY292ZXJhYmxlAFByZXZpb3VzIG93bmVyIGRpZWQAT3BlcmF0aW9uIGNhbmNlbGVkAEZ1bmN0aW9uIG5vdCBpbXBsZW1lbnRlZABObyBtZXNzYWdlIG9mIGRlc2lyZWQgdHlwZQBJZGVudGlmaWVyIHJlbW92ZWQARGV2aWNlIG5vdCBhIHN0cmVhbQBObyBkYXRhIGF2YWlsYWJsZQBEZXZpY2UgdGltZW91dABPdXQgb2Ygc3RyZWFtcyByZXNvdXJjZXMATGluayBoYXMgYmVlbiBzZXZlcmVkAFByb3RvY29sIGVycm9yAEJhZCBtZXNzYWdlAEZpbGUgZGVzY3JpcHRvciBpbiBiYWQgc3RhdGUATm90IGEgc29ja2V0AERlc3RpbmF0aW9uIGFkZHJlc3MgcmVxdWlyZWQATWVzc2FnZSB0b28gbGFyZ2UAUHJvdG9jb2wgd3JvbmcgdHlwZSBmb3Igc29ja2V0AFByb3RvY29sIG5vdCBhdmFpbGFibGUAUHJvdG9jb2wgbm90IHN1cHBvcnRlZABTb2NrZXQgdHlwZSBub3Qgc3VwcG9ydGVkAE5vdCBzdXBwb3J0ZWQAUHJvdG9jb2wgZmFtaWx5IG5vdCBzdXBwb3J0ZWQAQWRkcmVzcyBmYW1pbHkgbm90IHN1cHBvcnRlZCBieSBwcm90b2NvbABBZGRyZXNzIG5vdCBhdmFpbGFibGUATmV0d29yayBpcyBkb3duAE5ldHdvcmsgdW5yZWFjaGFibGUAQ29ubmVjdGlvbiByZXNldCBieSBuZXR3b3JrAENvbm5lY3Rpb24gYWJvcnRlZABObyBidWZmZXIgc3BhY2UgYXZhaWxhYmxlAFNvY2tldCBpcyBjb25uZWN0ZWQAU29ja2V0IG5vdCBjb25uZWN0ZWQAQ2Fubm90IHNlbmQgYWZ0ZXIgc29ja2V0IHNodXRkb3duAE9wZXJhdGlvbiBhbHJlYWR5IGluIHByb2dyZXNzAE9wZXJhdGlvbiBpbiBwcm9ncmVzcwBTdGFsZSBmaWxlIGhhbmRsZQBSZW1vdGUgSS9PIGVycm9yAFF1b3RhIGV4Y2VlZGVkAE5vIG1lZGl1bSBmb3VuZABXcm9uZyBtZWRpdW0gdHlwZQBNdWx0aWhvcCBhdHRlbXB0ZWQAUmVxdWlyZWQga2V5IG5vdCBhdmFpbGFibGUAS2V5IGhhcyBleHBpcmVkAEtleSBoYXMgYmVlbiByZXZva2VkAEtleSB3YXMgcmVqZWN0ZWQgYnkgc2VydmljZQAAAAAApQJbAPABtQWMBSUBgwYdA5QE/wDHAzEDCwa8AY8BfwPKBCsA2gavAEIDTgPcAQ4EFQChBg0BlAILAjgGZAK8Av8CXQPnBAsHzwLLBe8F2wXhAh4GRQKFAIICbANvBPEA8wMYBdkA2gNMBlQCewGdA70EAABRABUCuwCzA20A/wGFBC8F+QQ4AGUBRgGfALcGqAFzAlMBAEH47AELDCEEAAAAAAAAAAAvAgBBmO0BCwY1BEcEVgQAQa7tAQsCoAQAQcLtAQsiRgVgBW4FYQYAAM8BAAAAAAAAAADJBukG+QYeBzkHSQdeBwBB8O0BC5EB0XSeAFedvSqAcFIP//8+JwoAAABkAAAA6AMAABAnAACghgEAQEIPAICWmAAA4fUFGAAAADUAAABxAAAAa////877//+Sv///AAAAAAAAAAAZAAoAGRkZAAAAAAUAAAAAAAAJAAAAAAsAAAAAAAAAABkAEQoZGRkDCgcAAQAJCxgAAAkGCwAACwAGGQAAABkZGQBBke8BCyEOAAAAAAAAAAAZAAoNGRkZAA0AAAIACQ4AAAAJAA4AAA4AQcvvAQsBDABB1+8BCxUTAAAAABMAAAAACQwAAAAAAAwAAAwAQYXwAQsBEABBkfABCxUPAAAABA8AAAAACRAAAAAAABAAABAAQb/wAQsBEgBBy/ABCx4RAAAAABEAAAAACRIAAAAAABIAABIAABoAAAAaGhoAQYLxAQsOGgAAABoaGgAAAAAAAAkAQbPxAQsBFABBv/EBCxUXAAAAABcAAAAACRQAAAAAABQAABQAQe3xAQsBFgBB+fEBCycVAAAAABUAAAAACRYAAAAAABYAABYAADAxMjM0NTY3ODlBQkNERUYAQaDyAQsBBQBBrPIBCwHAAEHE8gELCr4AAAC9AAAAyHwAQdzyAQsBAgBB7PIBCwj//////////wBBsPMBCwkgeQAAAAAAAAkAQcTzAQsBwABB2PMBCxK/AAAAAAAAAL0AAADYfAAAAAQAQYT0AQsE/////wBByPQBCwEFAEHU9AELAcEAQez0AQsOvgAAAMIAAADogAAAAAQAQYT1AQsBAQBBlPUBCwX/////CgBB2PUBCwdIegAAQIkQ";globalThis.Buffer=Gs.Buffer;var ii="data:application/octet-stream;base64,"+$n,_e=null;async function oi(){if(!_e){let[{createLuaEngine:s}]=await Promise.all([Promise.resolve().then(()=>(Lt(),Es))]);_e=s({wasmUri:ii}).catch(e=>{throw _e=null,e})}return _e}async function Us({source:s,filename:e="script.lua",seed:n,level:a="maximum",anti:C={},onStep:l}={}){let{protect:E}=await Promise.resolve().then(()=>(Ls(),Ms));return E(await oi(),{source:s,filename:e,seed:n,level:a,anti:C,onStep:l})}var ri=Us;return Qe(ai);})();
/*! Bundled license information:

ieee754/index.js:
  (*! ieee754. BSD-3-Clause License. Feross Aboukhadijeh <https://feross.org/opensource> *)

buffer/index.js:
  (*!
   * The buffer module from node.js, for the browser.
   *
   * @author   Feross Aboukhadijeh <https://feross.org>
   * @license  MIT
   *)
*/
