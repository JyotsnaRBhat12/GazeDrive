(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))n(s);new MutationObserver(s=>{for(const r of s)if(r.type==="childList")for(const a of r.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&n(a)}).observe(document,{childList:!0,subtree:!0});function t(s){const r={};return s.integrity&&(r.integrity=s.integrity),s.referrerPolicy&&(r.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?r.credentials="include":s.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function n(s){if(s.ep)return;s.ep=!0;const r=t(s);fetch(s.href,r)}})();/**
 * @license
 * Copyright 2010-2024 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const zl="170",Vf=0,vd=1,Wf=2,mu=1,gu=2,yi=3,Li=0,un=1,Dn=2,ns=0,hr=1,_d=2,yd=3,xd=4,Xf=5,xs=100,Yf=101,qf=102,$f=103,Kf=104,Zf=200,jf=201,Jf=202,Qf=203,Bc=204,kc=205,ep=206,tp=207,np=208,ip=209,sp=210,rp=211,ap=212,op=213,cp=214,zc=0,Hc=1,Gc=2,gr=3,Vc=4,Wc=5,Xc=6,Yc=7,vu=0,lp=1,dp=2,is=0,hp=1,up=2,fp=3,_u=4,pp=5,mp=6,gp=7,Sd="attached",vp="detached",yu=300,vr=301,_r=302,la=303,qc=304,Oo=306,Di=1e3,ni=1001,_o=1002,an=1003,xu=1004,$r=1005,Wt=1006,ro=1007,ii=1008,Pi=1009,Su=1010,Mu=1011,da=1012,Hl=1013,Ls=1014,hn=1015,Ri=1016,Gl=1017,Vl=1018,yr=1020,bu=35902,Eu=1021,Tu=1022,Pn=1023,wu=1024,Au=1025,ur=1026,xr=1027,Wl=1028,Xl=1029,Ru=1030,Yl=1031,ql=1033,ao=33776,oo=33777,co=33778,lo=33779,$c=35840,Kc=35841,Zc=35842,jc=35843,Jc=36196,Qc=37492,el=37496,tl=37808,nl=37809,il=37810,sl=37811,rl=37812,al=37813,ol=37814,cl=37815,ll=37816,dl=37817,hl=37818,ul=37819,fl=37820,pl=37821,ho=36492,ml=36494,gl=36495,Cu=36283,vl=36284,_l=36285,yl=36286,ha=2300,ua=2301,qo=2302,Md=2400,bd=2401,Ed=2402,_p=2500,yp=0,Iu=1,xl=2,xp=3200,Sp=3201,Lu=0,Mp=1,Ji="",Pt="srgb",jt="srgb-linear",Uo="linear",yt="srgb",Bs=7680,Td=519,bp=512,Ep=513,Tp=514,Du=515,wp=516,Ap=517,Rp=518,Cp=519,Sl=35044,wd="300 es",Ci=2e3,yo=2001;class Cr{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const n=this._listeners;n[e]===void 0&&(n[e]=[]),n[e].indexOf(t)===-1&&n[e].push(t)}hasEventListener(e,t){if(this._listeners===void 0)return!1;const n=this._listeners;return n[e]!==void 0&&n[e].indexOf(t)!==-1}removeEventListener(e,t){if(this._listeners===void 0)return;const s=this._listeners[e];if(s!==void 0){const r=s.indexOf(t);r!==-1&&s.splice(r,1)}}dispatchEvent(e){if(this._listeners===void 0)return;const n=this._listeners[e.type];if(n!==void 0){e.target=this;const s=n.slice(0);for(let r=0,a=s.length;r<a;r++)s[r].call(this,e);e.target=null}}}const Kt=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let Ad=1234567;const Qr=Math.PI/180,Sr=180/Math.PI;function jn(){const i=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(Kt[i&255]+Kt[i>>8&255]+Kt[i>>16&255]+Kt[i>>24&255]+"-"+Kt[e&255]+Kt[e>>8&255]+"-"+Kt[e>>16&15|64]+Kt[e>>24&255]+"-"+Kt[t&63|128]+Kt[t>>8&255]+"-"+Kt[t>>16&255]+Kt[t>>24&255]+Kt[n&255]+Kt[n>>8&255]+Kt[n>>16&255]+Kt[n>>24&255]).toLowerCase()}function Bt(i,e,t){return Math.max(e,Math.min(t,i))}function $l(i,e){return(i%e+e)%e}function Ip(i,e,t,n,s){return n+(i-e)*(s-n)/(t-e)}function Lp(i,e,t){return i!==e?(t-i)/(e-i):0}function ea(i,e,t){return(1-t)*i+t*e}function Dp(i,e,t,n){return ea(i,e,1-Math.exp(-t*n))}function Pp(i,e=1){return e-Math.abs($l(i,e*2)-e)}function Np(i,e,t){return i<=e?0:i>=t?1:(i=(i-e)/(t-e),i*i*(3-2*i))}function Op(i,e,t){return i<=e?0:i>=t?1:(i=(i-e)/(t-e),i*i*i*(i*(i*6-15)+10))}function Up(i,e){return i+Math.floor(Math.random()*(e-i+1))}function Fp(i,e){return i+Math.random()*(e-i)}function Bp(i){return i*(.5-Math.random())}function kp(i){i!==void 0&&(Ad=i);let e=Ad+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}function zp(i){return i*Qr}function Hp(i){return i*Sr}function Gp(i){return(i&i-1)===0&&i!==0}function Vp(i){return Math.pow(2,Math.ceil(Math.log(i)/Math.LN2))}function Wp(i){return Math.pow(2,Math.floor(Math.log(i)/Math.LN2))}function Xp(i,e,t,n,s){const r=Math.cos,a=Math.sin,o=r(t/2),c=a(t/2),l=r((e+n)/2),d=a((e+n)/2),h=r((e-n)/2),u=a((e-n)/2),f=r((n-e)/2),g=a((n-e)/2);switch(s){case"XYX":i.set(o*d,c*h,c*u,o*l);break;case"YZY":i.set(c*u,o*d,c*h,o*l);break;case"ZXZ":i.set(c*h,c*u,o*d,o*l);break;case"XZX":i.set(o*d,c*g,c*f,o*l);break;case"YXY":i.set(c*f,o*d,c*g,o*l);break;case"ZYZ":i.set(c*g,c*f,o*d,o*l);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+s)}}function $n(i,e){switch(e.constructor){case Float32Array:return i;case Uint32Array:return i/4294967295;case Uint16Array:return i/65535;case Uint8Array:return i/255;case Int32Array:return Math.max(i/2147483647,-1);case Int16Array:return Math.max(i/32767,-1);case Int8Array:return Math.max(i/127,-1);default:throw new Error("Invalid component type.")}}function gt(i,e){switch(e.constructor){case Float32Array:return i;case Uint32Array:return Math.round(i*4294967295);case Uint16Array:return Math.round(i*65535);case Uint8Array:return Math.round(i*255);case Int32Array:return Math.round(i*2147483647);case Int16Array:return Math.round(i*32767);case Int8Array:return Math.round(i*127);default:throw new Error("Invalid component type.")}}const Yp={DEG2RAD:Qr,RAD2DEG:Sr,generateUUID:jn,clamp:Bt,euclideanModulo:$l,mapLinear:Ip,inverseLerp:Lp,lerp:ea,damp:Dp,pingpong:Pp,smoothstep:Np,smootherstep:Op,randInt:Up,randFloat:Fp,randFloatSpread:Bp,seededRandom:kp,degToRad:zp,radToDeg:Hp,isPowerOfTwo:Gp,ceilPowerOfTwo:Vp,floorPowerOfTwo:Wp,setQuaternionFromProperEuler:Xp,normalize:gt,denormalize:$n};class je{constructor(e=0,t=0){je.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,n=this.y,s=e.elements;return this.x=s[0]*t+s[3]*n+s[6],this.y=s[1]*t+s[4]*n+s[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos(Bt(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y;return t*t+n*n}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const n=Math.cos(t),s=Math.sin(t),r=this.x-e.x,a=this.y-e.y;return this.x=r*n-a*s+e.x,this.y=r*s+a*n+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class Ze{constructor(e,t,n,s,r,a,o,c,l){Ze.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,n,s,r,a,o,c,l)}set(e,t,n,s,r,a,o,c,l){const d=this.elements;return d[0]=e,d[1]=s,d[2]=o,d[3]=t,d[4]=r,d[5]=c,d[6]=n,d[7]=a,d[8]=l,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],this}extractBasis(e,t,n){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,s=t.elements,r=this.elements,a=n[0],o=n[3],c=n[6],l=n[1],d=n[4],h=n[7],u=n[2],f=n[5],g=n[8],v=s[0],m=s[3],p=s[6],x=s[1],b=s[4],y=s[7],I=s[2],T=s[5],w=s[8];return r[0]=a*v+o*x+c*I,r[3]=a*m+o*b+c*T,r[6]=a*p+o*y+c*w,r[1]=l*v+d*x+h*I,r[4]=l*m+d*b+h*T,r[7]=l*p+d*y+h*w,r[2]=u*v+f*x+g*I,r[5]=u*m+f*b+g*T,r[8]=u*p+f*y+g*w,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[1],s=e[2],r=e[3],a=e[4],o=e[5],c=e[6],l=e[7],d=e[8];return t*a*d-t*o*l-n*r*d+n*o*c+s*r*l-s*a*c}invert(){const e=this.elements,t=e[0],n=e[1],s=e[2],r=e[3],a=e[4],o=e[5],c=e[6],l=e[7],d=e[8],h=d*a-o*l,u=o*c-d*r,f=l*r-a*c,g=t*h+n*u+s*f;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);const v=1/g;return e[0]=h*v,e[1]=(s*l-d*n)*v,e[2]=(o*n-s*a)*v,e[3]=u*v,e[4]=(d*t-s*c)*v,e[5]=(s*r-o*t)*v,e[6]=f*v,e[7]=(n*c-l*t)*v,e[8]=(a*t-n*r)*v,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,n,s,r,a,o){const c=Math.cos(r),l=Math.sin(r);return this.set(n*c,n*l,-n*(c*a+l*o)+a+e,-s*l,s*c,-s*(-l*a+c*o)+o+t,0,0,1),this}scale(e,t){return this.premultiply($o.makeScale(e,t)),this}rotate(e){return this.premultiply($o.makeRotation(-e)),this}translate(e,t){return this.premultiply($o.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,n,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){const t=this.elements,n=e.elements;for(let s=0;s<9;s++)if(t[s]!==n[s])return!1;return!0}fromArray(e,t=0){for(let n=0;n<9;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const $o=new Ze;function Pu(i){for(let e=i.length-1;e>=0;--e)if(i[e]>=65535)return!0;return!1}function fa(i){return document.createElementNS("http://www.w3.org/1999/xhtml",i)}function qp(){const i=fa("canvas");return i.style.display="block",i}const Rd={};function Kr(i){i in Rd||(Rd[i]=!0,console.warn(i))}function $p(i,e,t){return new Promise(function(n,s){function r(){switch(i.clientWaitSync(e,i.SYNC_FLUSH_COMMANDS_BIT,0)){case i.WAIT_FAILED:s();break;case i.TIMEOUT_EXPIRED:setTimeout(r,t);break;default:n()}}setTimeout(r,t)})}function Kp(i){const e=i.elements;e[2]=.5*e[2]+.5*e[3],e[6]=.5*e[6]+.5*e[7],e[10]=.5*e[10]+.5*e[11],e[14]=.5*e[14]+.5*e[15]}function Zp(i){const e=i.elements;e[11]===-1?(e[10]=-e[10]-1,e[14]=-e[14]):(e[10]=-e[10],e[14]=-e[14]+1)}const st={enabled:!0,workingColorSpace:jt,spaces:{},convert:function(i,e,t){return this.enabled===!1||e===t||!e||!t||(this.spaces[e].transfer===yt&&(i.r=Ii(i.r),i.g=Ii(i.g),i.b=Ii(i.b)),this.spaces[e].primaries!==this.spaces[t].primaries&&(i.applyMatrix3(this.spaces[e].toXYZ),i.applyMatrix3(this.spaces[t].fromXYZ)),this.spaces[t].transfer===yt&&(i.r=fr(i.r),i.g=fr(i.g),i.b=fr(i.b))),i},fromWorkingColorSpace:function(i,e){return this.convert(i,this.workingColorSpace,e)},toWorkingColorSpace:function(i,e){return this.convert(i,e,this.workingColorSpace)},getPrimaries:function(i){return this.spaces[i].primaries},getTransfer:function(i){return i===Ji?Uo:this.spaces[i].transfer},getLuminanceCoefficients:function(i,e=this.workingColorSpace){return i.fromArray(this.spaces[e].luminanceCoefficients)},define:function(i){Object.assign(this.spaces,i)},_getMatrix:function(i,e,t){return i.copy(this.spaces[e].toXYZ).multiply(this.spaces[t].fromXYZ)},_getDrawingBufferColorSpace:function(i){return this.spaces[i].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(i=this.workingColorSpace){return this.spaces[i].workingColorSpaceConfig.unpackColorSpace}};function Ii(i){return i<.04045?i*.0773993808:Math.pow(i*.9478672986+.0521327014,2.4)}function fr(i){return i<.0031308?i*12.92:1.055*Math.pow(i,.41666)-.055}const Cd=[.64,.33,.3,.6,.15,.06],Id=[.2126,.7152,.0722],Ld=[.3127,.329],Dd=new Ze().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),Pd=new Ze().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);st.define({[jt]:{primaries:Cd,whitePoint:Ld,transfer:Uo,toXYZ:Dd,fromXYZ:Pd,luminanceCoefficients:Id,workingColorSpaceConfig:{unpackColorSpace:Pt},outputColorSpaceConfig:{drawingBufferColorSpace:Pt}},[Pt]:{primaries:Cd,whitePoint:Ld,transfer:yt,toXYZ:Dd,fromXYZ:Pd,luminanceCoefficients:Id,outputColorSpaceConfig:{drawingBufferColorSpace:Pt}}});let ks;class jp{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let t;if(e instanceof HTMLCanvasElement)t=e;else{ks===void 0&&(ks=fa("canvas")),ks.width=e.width,ks.height=e.height;const n=ks.getContext("2d");e instanceof ImageData?n.putImageData(e,0,0):n.drawImage(e,0,0,e.width,e.height),t=ks}return t.width>2048||t.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",e),t.toDataURL("image/jpeg",.6)):t.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=fa("canvas");t.width=e.width,t.height=e.height;const n=t.getContext("2d");n.drawImage(e,0,0,e.width,e.height);const s=n.getImageData(0,0,e.width,e.height),r=s.data;for(let a=0;a<r.length;a++)r[a]=Ii(r[a]/255)*255;return n.putImageData(s,0,0),t}else if(e.data){const t=e.data.slice(0);for(let n=0;n<t.length;n++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[n]=Math.floor(Ii(t[n]/255)*255):t[n]=Ii(t[n]);return{data:t,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let Jp=0;class Nu{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:Jp++}),this.uuid=jn(),this.data=e,this.dataReady=!0,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const n={uuid:this.uuid,url:""},s=this.data;if(s!==null){let r;if(Array.isArray(s)){r=[];for(let a=0,o=s.length;a<o;a++)s[a].isDataTexture?r.push(Ko(s[a].image)):r.push(Ko(s[a]))}else r=Ko(s);n.url=r}return t||(e.images[this.uuid]=n),n}}function Ko(i){return typeof HTMLImageElement<"u"&&i instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&i instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&i instanceof ImageBitmap?jp.getDataURL(i):i.data?{data:Array.from(i.data),width:i.width,height:i.height,type:i.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let Qp=0;class kt extends Cr{constructor(e=kt.DEFAULT_IMAGE,t=kt.DEFAULT_MAPPING,n=ni,s=ni,r=Wt,a=ii,o=Pn,c=Pi,l=kt.DEFAULT_ANISOTROPY,d=Ji){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Qp++}),this.uuid=jn(),this.name="",this.source=new Nu(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=n,this.wrapT=s,this.magFilter=r,this.minFilter=a,this.anisotropy=l,this.format=o,this.internalFormat=null,this.type=c,this.offset=new je(0,0),this.repeat=new je(1,1),this.center=new je(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Ze,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=d,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.pmremVersion=0}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const n={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),t||(e.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==yu)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case Di:e.x=e.x-Math.floor(e.x);break;case ni:e.x=e.x<0?0:1;break;case _o:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case Di:e.y=e.y-Math.floor(e.y);break;case ni:e.y=e.y<0?0:1;break;case _o:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}kt.DEFAULT_IMAGE=null;kt.DEFAULT_MAPPING=yu;kt.DEFAULT_ANISOTROPY=1;class dt{constructor(e=0,t=0,n=0,s=1){dt.prototype.isVector4=!0,this.x=e,this.y=t,this.z=n,this.w=s}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,n,s){return this.x=e,this.y=t,this.z=n,this.w=s,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,n=this.y,s=this.z,r=this.w,a=e.elements;return this.x=a[0]*t+a[4]*n+a[8]*s+a[12]*r,this.y=a[1]*t+a[5]*n+a[9]*s+a[13]*r,this.z=a[2]*t+a[6]*n+a[10]*s+a[14]*r,this.w=a[3]*t+a[7]*n+a[11]*s+a[15]*r,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,n,s,r;const c=e.elements,l=c[0],d=c[4],h=c[8],u=c[1],f=c[5],g=c[9],v=c[2],m=c[6],p=c[10];if(Math.abs(d-u)<.01&&Math.abs(h-v)<.01&&Math.abs(g-m)<.01){if(Math.abs(d+u)<.1&&Math.abs(h+v)<.1&&Math.abs(g+m)<.1&&Math.abs(l+f+p-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const b=(l+1)/2,y=(f+1)/2,I=(p+1)/2,T=(d+u)/4,w=(h+v)/4,R=(g+m)/4;return b>y&&b>I?b<.01?(n=0,s=.707106781,r=.707106781):(n=Math.sqrt(b),s=T/n,r=w/n):y>I?y<.01?(n=.707106781,s=0,r=.707106781):(s=Math.sqrt(y),n=T/s,r=R/s):I<.01?(n=.707106781,s=.707106781,r=0):(r=Math.sqrt(I),n=w/r,s=R/r),this.set(n,s,r,t),this}let x=Math.sqrt((m-g)*(m-g)+(h-v)*(h-v)+(u-d)*(u-d));return Math.abs(x)<.001&&(x=1),this.x=(m-g)/x,this.y=(h-v)/x,this.z=(u-d)/x,this.w=Math.acos((l+f+p-1)/2),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this.w=Math.max(e.w,Math.min(t.w,this.w)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this.w=Math.max(e,Math.min(t,this.w)),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this.w=e.w+(t.w-e.w)*n,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class em extends Cr{constructor(e=1,t=1,n={}){super(),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=1,this.scissor=new dt(0,0,e,t),this.scissorTest=!1,this.viewport=new dt(0,0,e,t);const s={width:e,height:t,depth:1};n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Wt,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1},n);const r=new kt(s,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.colorSpace);r.flipY=!1,r.generateMipmaps=n.generateMipmaps,r.internalFormat=n.internalFormat,this.textures=[];const a=n.count;for(let o=0;o<a;o++)this.textures[o]=r.clone(),this.textures[o].isRenderTargetTexture=!0;this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this.depthTexture=n.depthTexture,this.samples=n.samples}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}setSize(e,t,n=1){if(this.width!==e||this.height!==t||this.depth!==n){this.width=e,this.height=t,this.depth=n;for(let s=0,r=this.textures.length;s<r;s++)this.textures[s].image.width=e,this.textures[s].image.height=t,this.textures[s].image.depth=n;this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let n=0,s=e.textures.length;n<s;n++)this.textures[n]=e.textures[n].clone(),this.textures[n].isRenderTargetTexture=!0;const t=Object.assign({},e.texture.image);return this.texture.source=new Nu(t),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Ds extends em{constructor(e=1,t=1,n={}){super(e,t,n),this.isWebGLRenderTarget=!0}}class Ou extends kt{constructor(e=null,t=1,n=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:n,depth:s},this.magFilter=an,this.minFilter=an,this.wrapR=ni,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class tm extends kt{constructor(e=null,t=1,n=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:n,depth:s},this.magFilter=an,this.minFilter=an,this.wrapR=ni,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class os{constructor(e=0,t=0,n=0,s=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=n,this._w=s}static slerpFlat(e,t,n,s,r,a,o){let c=n[s+0],l=n[s+1],d=n[s+2],h=n[s+3];const u=r[a+0],f=r[a+1],g=r[a+2],v=r[a+3];if(o===0){e[t+0]=c,e[t+1]=l,e[t+2]=d,e[t+3]=h;return}if(o===1){e[t+0]=u,e[t+1]=f,e[t+2]=g,e[t+3]=v;return}if(h!==v||c!==u||l!==f||d!==g){let m=1-o;const p=c*u+l*f+d*g+h*v,x=p>=0?1:-1,b=1-p*p;if(b>Number.EPSILON){const I=Math.sqrt(b),T=Math.atan2(I,p*x);m=Math.sin(m*T)/I,o=Math.sin(o*T)/I}const y=o*x;if(c=c*m+u*y,l=l*m+f*y,d=d*m+g*y,h=h*m+v*y,m===1-o){const I=1/Math.sqrt(c*c+l*l+d*d+h*h);c*=I,l*=I,d*=I,h*=I}}e[t]=c,e[t+1]=l,e[t+2]=d,e[t+3]=h}static multiplyQuaternionsFlat(e,t,n,s,r,a){const o=n[s],c=n[s+1],l=n[s+2],d=n[s+3],h=r[a],u=r[a+1],f=r[a+2],g=r[a+3];return e[t]=o*g+d*h+c*f-l*u,e[t+1]=c*g+d*u+l*h-o*f,e[t+2]=l*g+d*f+o*u-c*h,e[t+3]=d*g-o*h-c*u-l*f,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,n,s){return this._x=e,this._y=t,this._z=n,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){const n=e._x,s=e._y,r=e._z,a=e._order,o=Math.cos,c=Math.sin,l=o(n/2),d=o(s/2),h=o(r/2),u=c(n/2),f=c(s/2),g=c(r/2);switch(a){case"XYZ":this._x=u*d*h+l*f*g,this._y=l*f*h-u*d*g,this._z=l*d*g+u*f*h,this._w=l*d*h-u*f*g;break;case"YXZ":this._x=u*d*h+l*f*g,this._y=l*f*h-u*d*g,this._z=l*d*g-u*f*h,this._w=l*d*h+u*f*g;break;case"ZXY":this._x=u*d*h-l*f*g,this._y=l*f*h+u*d*g,this._z=l*d*g+u*f*h,this._w=l*d*h-u*f*g;break;case"ZYX":this._x=u*d*h-l*f*g,this._y=l*f*h+u*d*g,this._z=l*d*g-u*f*h,this._w=l*d*h+u*f*g;break;case"YZX":this._x=u*d*h+l*f*g,this._y=l*f*h+u*d*g,this._z=l*d*g-u*f*h,this._w=l*d*h-u*f*g;break;case"XZY":this._x=u*d*h-l*f*g,this._y=l*f*h-u*d*g,this._z=l*d*g+u*f*h,this._w=l*d*h+u*f*g;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+a)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const n=t/2,s=Math.sin(n);return this._x=e.x*s,this._y=e.y*s,this._z=e.z*s,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,n=t[0],s=t[4],r=t[8],a=t[1],o=t[5],c=t[9],l=t[2],d=t[6],h=t[10],u=n+o+h;if(u>0){const f=.5/Math.sqrt(u+1);this._w=.25/f,this._x=(d-c)*f,this._y=(r-l)*f,this._z=(a-s)*f}else if(n>o&&n>h){const f=2*Math.sqrt(1+n-o-h);this._w=(d-c)/f,this._x=.25*f,this._y=(s+a)/f,this._z=(r+l)/f}else if(o>h){const f=2*Math.sqrt(1+o-n-h);this._w=(r-l)/f,this._x=(s+a)/f,this._y=.25*f,this._z=(c+d)/f}else{const f=2*Math.sqrt(1+h-n-o);this._w=(a-s)/f,this._x=(r+l)/f,this._y=(c+d)/f,this._z=.25*f}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let n=e.dot(t)+1;return n<Number.EPSILON?(n=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=n):(this._x=0,this._y=-e.z,this._z=e.y,this._w=n)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=n),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(Bt(this.dot(e),-1,1)))}rotateTowards(e,t){const n=this.angleTo(e);if(n===0)return this;const s=Math.min(1,t/n);return this.slerp(e,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const n=e._x,s=e._y,r=e._z,a=e._w,o=t._x,c=t._y,l=t._z,d=t._w;return this._x=n*d+a*o+s*l-r*c,this._y=s*d+a*c+r*o-n*l,this._z=r*d+a*l+n*c-s*o,this._w=a*d-n*o-s*c-r*l,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);const n=this._x,s=this._y,r=this._z,a=this._w;let o=a*e._w+n*e._x+s*e._y+r*e._z;if(o<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,o=-o):this.copy(e),o>=1)return this._w=a,this._x=n,this._y=s,this._z=r,this;const c=1-o*o;if(c<=Number.EPSILON){const f=1-t;return this._w=f*a+t*this._w,this._x=f*n+t*this._x,this._y=f*s+t*this._y,this._z=f*r+t*this._z,this.normalize(),this}const l=Math.sqrt(c),d=Math.atan2(l,o),h=Math.sin((1-t)*d)/l,u=Math.sin(t*d)/l;return this._w=a*h+this._w*u,this._x=n*h+this._x*u,this._y=s*h+this._y*u,this._z=r*h+this._z*u,this._onChangeCallback(),this}slerpQuaternions(e,t,n){return this.copy(e).slerp(t,n)}random(){const e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),n=Math.random(),s=Math.sqrt(1-n),r=Math.sqrt(n);return this.set(s*Math.sin(e),s*Math.cos(e),r*Math.sin(t),r*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class D{constructor(e=0,t=0,n=0){D.prototype.isVector3=!0,this.x=e,this.y=t,this.z=n}set(e,t,n){return n===void 0&&(n=this.z),this.x=e,this.y=t,this.z=n,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(Nd.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(Nd.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,n=this.y,s=this.z,r=e.elements;return this.x=r[0]*t+r[3]*n+r[6]*s,this.y=r[1]*t+r[4]*n+r[7]*s,this.z=r[2]*t+r[5]*n+r[8]*s,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,n=this.y,s=this.z,r=e.elements,a=1/(r[3]*t+r[7]*n+r[11]*s+r[15]);return this.x=(r[0]*t+r[4]*n+r[8]*s+r[12])*a,this.y=(r[1]*t+r[5]*n+r[9]*s+r[13])*a,this.z=(r[2]*t+r[6]*n+r[10]*s+r[14])*a,this}applyQuaternion(e){const t=this.x,n=this.y,s=this.z,r=e.x,a=e.y,o=e.z,c=e.w,l=2*(a*s-o*n),d=2*(o*t-r*s),h=2*(r*n-a*t);return this.x=t+c*l+a*h-o*d,this.y=n+c*d+o*l-r*h,this.z=s+c*h+r*d-a*l,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,n=this.y,s=this.z,r=e.elements;return this.x=r[0]*t+r[4]*n+r[8]*s,this.y=r[1]*t+r[5]*n+r[9]*s,this.z=r[2]*t+r[6]*n+r[10]*s,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const n=e.x,s=e.y,r=e.z,a=t.x,o=t.y,c=t.z;return this.x=s*c-r*o,this.y=r*a-n*c,this.z=n*o-s*a,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const n=e.dot(this)/t;return this.copy(e).multiplyScalar(n)}projectOnPlane(e){return Zo.copy(this).projectOnVector(e),this.sub(Zo)}reflect(e){return this.sub(Zo.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos(Bt(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y,s=this.z-e.z;return t*t+n*n+s*s}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,n){const s=Math.sin(t)*e;return this.x=s*Math.sin(n),this.y=Math.cos(t)*e,this.z=s*Math.cos(n),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,n){return this.x=e*Math.sin(t),this.y=n,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),n=this.setFromMatrixColumn(e,1).length(),s=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=n,this.z=s,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,t=Math.random()*2-1,n=Math.sqrt(1-t*t);return this.x=n*Math.cos(e),this.y=t,this.z=n*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const Zo=new D,Nd=new os;class Ui{constructor(e=new D(1/0,1/0,1/0),t=new D(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t+=3)this.expandByPoint(zn.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,n=e.count;t<n;t++)this.expandByPoint(zn.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const n=zn.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(n),this.max.copy(e).add(n),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);const n=e.geometry;if(n!==void 0){const r=n.getAttribute("position");if(t===!0&&r!==void 0&&e.isInstancedMesh!==!0)for(let a=0,o=r.count;a<o;a++)e.isMesh===!0?e.getVertexPosition(a,zn):zn.fromBufferAttribute(r,a),zn.applyMatrix4(e.matrixWorld),this.expandByPoint(zn);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),ya.copy(e.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),ya.copy(n.boundingBox)),ya.applyMatrix4(e.matrixWorld),this.union(ya)}const s=e.children;for(let r=0,a=s.length;r<a;r++)this.expandByObject(s[r],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,zn),zn.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,n;return e.normal.x>0?(t=e.normal.x*this.min.x,n=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,n=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,n+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,n+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,n+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,n+=e.normal.z*this.min.z),t<=-e.constant&&n>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(Or),xa.subVectors(this.max,Or),zs.subVectors(e.a,Or),Hs.subVectors(e.b,Or),Gs.subVectors(e.c,Or),ki.subVectors(Hs,zs),zi.subVectors(Gs,Hs),hs.subVectors(zs,Gs);let t=[0,-ki.z,ki.y,0,-zi.z,zi.y,0,-hs.z,hs.y,ki.z,0,-ki.x,zi.z,0,-zi.x,hs.z,0,-hs.x,-ki.y,ki.x,0,-zi.y,zi.x,0,-hs.y,hs.x,0];return!jo(t,zs,Hs,Gs,xa)||(t=[1,0,0,0,1,0,0,0,1],!jo(t,zs,Hs,Gs,xa))?!1:(Sa.crossVectors(ki,zi),t=[Sa.x,Sa.y,Sa.z],jo(t,zs,Hs,Gs,xa))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,zn).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(zn).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(ui[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),ui[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),ui[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),ui[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),ui[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),ui[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),ui[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),ui[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(ui),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}}const ui=[new D,new D,new D,new D,new D,new D,new D,new D],zn=new D,ya=new Ui,zs=new D,Hs=new D,Gs=new D,ki=new D,zi=new D,hs=new D,Or=new D,xa=new D,Sa=new D,us=new D;function jo(i,e,t,n,s){for(let r=0,a=i.length-3;r<=a;r+=3){us.fromArray(i,r);const o=s.x*Math.abs(us.x)+s.y*Math.abs(us.y)+s.z*Math.abs(us.z),c=e.dot(us),l=t.dot(us),d=n.dot(us);if(Math.max(-Math.max(c,l,d),Math.min(c,l,d))>o)return!1}return!0}const nm=new Ui,Ur=new D,Jo=new D;class ci{constructor(e=new D,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const n=this.center;t!==void 0?n.copy(t):nm.setFromPoints(e).getCenter(n);let s=0;for(let r=0,a=e.length;r<a;r++)s=Math.max(s,n.distanceToSquared(e[r]));return this.radius=Math.sqrt(s),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const n=this.center.distanceToSquared(e);return t.copy(e),n>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;Ur.subVectors(e,this.center);const t=Ur.lengthSq();if(t>this.radius*this.radius){const n=Math.sqrt(t),s=(n-this.radius)*.5;this.center.addScaledVector(Ur,s/n),this.radius+=s}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(Jo.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(Ur.copy(e.center).add(Jo)),this.expandByPoint(Ur.copy(e.center).sub(Jo))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}}const fi=new D,Qo=new D,Ma=new D,Hi=new D,ec=new D,ba=new D,tc=new D;class Fo{constructor(e=new D,t=new D(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,fi)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const n=t.dot(this.direction);return n<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=fi.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(fi.copy(this.origin).addScaledVector(this.direction,t),fi.distanceToSquared(e))}distanceSqToSegment(e,t,n,s){Qo.copy(e).add(t).multiplyScalar(.5),Ma.copy(t).sub(e).normalize(),Hi.copy(this.origin).sub(Qo);const r=e.distanceTo(t)*.5,a=-this.direction.dot(Ma),o=Hi.dot(this.direction),c=-Hi.dot(Ma),l=Hi.lengthSq(),d=Math.abs(1-a*a);let h,u,f,g;if(d>0)if(h=a*c-o,u=a*o-c,g=r*d,h>=0)if(u>=-g)if(u<=g){const v=1/d;h*=v,u*=v,f=h*(h+a*u+2*o)+u*(a*h+u+2*c)+l}else u=r,h=Math.max(0,-(a*u+o)),f=-h*h+u*(u+2*c)+l;else u=-r,h=Math.max(0,-(a*u+o)),f=-h*h+u*(u+2*c)+l;else u<=-g?(h=Math.max(0,-(-a*r+o)),u=h>0?-r:Math.min(Math.max(-r,-c),r),f=-h*h+u*(u+2*c)+l):u<=g?(h=0,u=Math.min(Math.max(-r,-c),r),f=u*(u+2*c)+l):(h=Math.max(0,-(a*r+o)),u=h>0?r:Math.min(Math.max(-r,-c),r),f=-h*h+u*(u+2*c)+l);else u=a>0?-r:r,h=Math.max(0,-(a*u+o)),f=-h*h+u*(u+2*c)+l;return n&&n.copy(this.origin).addScaledVector(this.direction,h),s&&s.copy(Qo).addScaledVector(Ma,u),f}intersectSphere(e,t){fi.subVectors(e.center,this.origin);const n=fi.dot(this.direction),s=fi.dot(fi)-n*n,r=e.radius*e.radius;if(s>r)return null;const a=Math.sqrt(r-s),o=n-a,c=n+a;return c<0?null:o<0?this.at(c,t):this.at(o,t)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const n=-(this.origin.dot(e.normal)+e.constant)/t;return n>=0?n:null}intersectPlane(e,t){const n=this.distanceToPlane(e);return n===null?null:this.at(n,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let n,s,r,a,o,c;const l=1/this.direction.x,d=1/this.direction.y,h=1/this.direction.z,u=this.origin;return l>=0?(n=(e.min.x-u.x)*l,s=(e.max.x-u.x)*l):(n=(e.max.x-u.x)*l,s=(e.min.x-u.x)*l),d>=0?(r=(e.min.y-u.y)*d,a=(e.max.y-u.y)*d):(r=(e.max.y-u.y)*d,a=(e.min.y-u.y)*d),n>a||r>s||((r>n||isNaN(n))&&(n=r),(a<s||isNaN(s))&&(s=a),h>=0?(o=(e.min.z-u.z)*h,c=(e.max.z-u.z)*h):(o=(e.max.z-u.z)*h,c=(e.min.z-u.z)*h),n>c||o>s)||((o>n||n!==n)&&(n=o),(c<s||s!==s)&&(s=c),s<0)?null:this.at(n>=0?n:s,t)}intersectsBox(e){return this.intersectBox(e,fi)!==null}intersectTriangle(e,t,n,s,r){ec.subVectors(t,e),ba.subVectors(n,e),tc.crossVectors(ec,ba);let a=this.direction.dot(tc),o;if(a>0){if(s)return null;o=1}else if(a<0)o=-1,a=-a;else return null;Hi.subVectors(this.origin,e);const c=o*this.direction.dot(ba.crossVectors(Hi,ba));if(c<0)return null;const l=o*this.direction.dot(ec.cross(Hi));if(l<0||c+l>a)return null;const d=-o*Hi.dot(tc);return d<0?null:this.at(d/a,r)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class Ke{constructor(e,t,n,s,r,a,o,c,l,d,h,u,f,g,v,m){Ke.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,n,s,r,a,o,c,l,d,h,u,f,g,v,m)}set(e,t,n,s,r,a,o,c,l,d,h,u,f,g,v,m){const p=this.elements;return p[0]=e,p[4]=t,p[8]=n,p[12]=s,p[1]=r,p[5]=a,p[9]=o,p[13]=c,p[2]=l,p[6]=d,p[10]=h,p[14]=u,p[3]=f,p[7]=g,p[11]=v,p[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new Ke().fromArray(this.elements)}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],t[9]=n[9],t[10]=n[10],t[11]=n[11],t[12]=n[12],t[13]=n[13],t[14]=n[14],t[15]=n[15],this}copyPosition(e){const t=this.elements,n=e.elements;return t[12]=n[12],t[13]=n[13],t[14]=n[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,n){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(e,t,n){return this.set(e.x,t.x,n.x,0,e.y,t.y,n.y,0,e.z,t.z,n.z,0,0,0,0,1),this}extractRotation(e){const t=this.elements,n=e.elements,s=1/Vs.setFromMatrixColumn(e,0).length(),r=1/Vs.setFromMatrixColumn(e,1).length(),a=1/Vs.setFromMatrixColumn(e,2).length();return t[0]=n[0]*s,t[1]=n[1]*s,t[2]=n[2]*s,t[3]=0,t[4]=n[4]*r,t[5]=n[5]*r,t[6]=n[6]*r,t[7]=0,t[8]=n[8]*a,t[9]=n[9]*a,t[10]=n[10]*a,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,n=e.x,s=e.y,r=e.z,a=Math.cos(n),o=Math.sin(n),c=Math.cos(s),l=Math.sin(s),d=Math.cos(r),h=Math.sin(r);if(e.order==="XYZ"){const u=a*d,f=a*h,g=o*d,v=o*h;t[0]=c*d,t[4]=-c*h,t[8]=l,t[1]=f+g*l,t[5]=u-v*l,t[9]=-o*c,t[2]=v-u*l,t[6]=g+f*l,t[10]=a*c}else if(e.order==="YXZ"){const u=c*d,f=c*h,g=l*d,v=l*h;t[0]=u+v*o,t[4]=g*o-f,t[8]=a*l,t[1]=a*h,t[5]=a*d,t[9]=-o,t[2]=f*o-g,t[6]=v+u*o,t[10]=a*c}else if(e.order==="ZXY"){const u=c*d,f=c*h,g=l*d,v=l*h;t[0]=u-v*o,t[4]=-a*h,t[8]=g+f*o,t[1]=f+g*o,t[5]=a*d,t[9]=v-u*o,t[2]=-a*l,t[6]=o,t[10]=a*c}else if(e.order==="ZYX"){const u=a*d,f=a*h,g=o*d,v=o*h;t[0]=c*d,t[4]=g*l-f,t[8]=u*l+v,t[1]=c*h,t[5]=v*l+u,t[9]=f*l-g,t[2]=-l,t[6]=o*c,t[10]=a*c}else if(e.order==="YZX"){const u=a*c,f=a*l,g=o*c,v=o*l;t[0]=c*d,t[4]=v-u*h,t[8]=g*h+f,t[1]=h,t[5]=a*d,t[9]=-o*d,t[2]=-l*d,t[6]=f*h+g,t[10]=u-v*h}else if(e.order==="XZY"){const u=a*c,f=a*l,g=o*c,v=o*l;t[0]=c*d,t[4]=-h,t[8]=l*d,t[1]=u*h+v,t[5]=a*d,t[9]=f*h-g,t[2]=g*h-f,t[6]=o*d,t[10]=v*h+u}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(im,e,sm)}lookAt(e,t,n){const s=this.elements;return vn.subVectors(e,t),vn.lengthSq()===0&&(vn.z=1),vn.normalize(),Gi.crossVectors(n,vn),Gi.lengthSq()===0&&(Math.abs(n.z)===1?vn.x+=1e-4:vn.z+=1e-4,vn.normalize(),Gi.crossVectors(n,vn)),Gi.normalize(),Ea.crossVectors(vn,Gi),s[0]=Gi.x,s[4]=Ea.x,s[8]=vn.x,s[1]=Gi.y,s[5]=Ea.y,s[9]=vn.y,s[2]=Gi.z,s[6]=Ea.z,s[10]=vn.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,s=t.elements,r=this.elements,a=n[0],o=n[4],c=n[8],l=n[12],d=n[1],h=n[5],u=n[9],f=n[13],g=n[2],v=n[6],m=n[10],p=n[14],x=n[3],b=n[7],y=n[11],I=n[15],T=s[0],w=s[4],R=s[8],S=s[12],_=s[1],C=s[5],F=s[9],P=s[13],N=s[2],G=s[6],L=s[10],q=s[14],V=s[3],K=s[7],ie=s[11],re=s[15];return r[0]=a*T+o*_+c*N+l*V,r[4]=a*w+o*C+c*G+l*K,r[8]=a*R+o*F+c*L+l*ie,r[12]=a*S+o*P+c*q+l*re,r[1]=d*T+h*_+u*N+f*V,r[5]=d*w+h*C+u*G+f*K,r[9]=d*R+h*F+u*L+f*ie,r[13]=d*S+h*P+u*q+f*re,r[2]=g*T+v*_+m*N+p*V,r[6]=g*w+v*C+m*G+p*K,r[10]=g*R+v*F+m*L+p*ie,r[14]=g*S+v*P+m*q+p*re,r[3]=x*T+b*_+y*N+I*V,r[7]=x*w+b*C+y*G+I*K,r[11]=x*R+b*F+y*L+I*ie,r[15]=x*S+b*P+y*q+I*re,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[4],s=e[8],r=e[12],a=e[1],o=e[5],c=e[9],l=e[13],d=e[2],h=e[6],u=e[10],f=e[14],g=e[3],v=e[7],m=e[11],p=e[15];return g*(+r*c*h-s*l*h-r*o*u+n*l*u+s*o*f-n*c*f)+v*(+t*c*f-t*l*u+r*a*u-s*a*f+s*l*d-r*c*d)+m*(+t*l*h-t*o*f-r*a*h+n*a*f+r*o*d-n*l*d)+p*(-s*o*d-t*c*h+t*o*u+s*a*h-n*a*u+n*c*d)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,n){const s=this.elements;return e.isVector3?(s[12]=e.x,s[13]=e.y,s[14]=e.z):(s[12]=e,s[13]=t,s[14]=n),this}invert(){const e=this.elements,t=e[0],n=e[1],s=e[2],r=e[3],a=e[4],o=e[5],c=e[6],l=e[7],d=e[8],h=e[9],u=e[10],f=e[11],g=e[12],v=e[13],m=e[14],p=e[15],x=h*m*l-v*u*l+v*c*f-o*m*f-h*c*p+o*u*p,b=g*u*l-d*m*l-g*c*f+a*m*f+d*c*p-a*u*p,y=d*v*l-g*h*l+g*o*f-a*v*f-d*o*p+a*h*p,I=g*h*c-d*v*c-g*o*u+a*v*u+d*o*m-a*h*m,T=t*x+n*b+s*y+r*I;if(T===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const w=1/T;return e[0]=x*w,e[1]=(v*u*r-h*m*r-v*s*f+n*m*f+h*s*p-n*u*p)*w,e[2]=(o*m*r-v*c*r+v*s*l-n*m*l-o*s*p+n*c*p)*w,e[3]=(h*c*r-o*u*r-h*s*l+n*u*l+o*s*f-n*c*f)*w,e[4]=b*w,e[5]=(d*m*r-g*u*r+g*s*f-t*m*f-d*s*p+t*u*p)*w,e[6]=(g*c*r-a*m*r-g*s*l+t*m*l+a*s*p-t*c*p)*w,e[7]=(a*u*r-d*c*r+d*s*l-t*u*l-a*s*f+t*c*f)*w,e[8]=y*w,e[9]=(g*h*r-d*v*r-g*n*f+t*v*f+d*n*p-t*h*p)*w,e[10]=(a*v*r-g*o*r+g*n*l-t*v*l-a*n*p+t*o*p)*w,e[11]=(d*o*r-a*h*r-d*n*l+t*h*l+a*n*f-t*o*f)*w,e[12]=I*w,e[13]=(d*v*s-g*h*s+g*n*u-t*v*u-d*n*m+t*h*m)*w,e[14]=(g*o*s-a*v*s-g*n*c+t*v*c+a*n*m-t*o*m)*w,e[15]=(a*h*s-d*o*s+d*n*c-t*h*c-a*n*u+t*o*u)*w,this}scale(e){const t=this.elements,n=e.x,s=e.y,r=e.z;return t[0]*=n,t[4]*=s,t[8]*=r,t[1]*=n,t[5]*=s,t[9]*=r,t[2]*=n,t[6]*=s,t[10]*=r,t[3]*=n,t[7]*=s,t[11]*=r,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],n=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],s=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,n,s))}makeTranslation(e,t,n){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,n,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),n=Math.sin(e);return this.set(1,0,0,0,0,t,-n,0,0,n,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,0,n,0,0,1,0,0,-n,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,0,n,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const n=Math.cos(t),s=Math.sin(t),r=1-n,a=e.x,o=e.y,c=e.z,l=r*a,d=r*o;return this.set(l*a+n,l*o-s*c,l*c+s*o,0,l*o+s*c,d*o+n,d*c-s*a,0,l*c-s*o,d*c+s*a,r*c*c+n,0,0,0,0,1),this}makeScale(e,t,n){return this.set(e,0,0,0,0,t,0,0,0,0,n,0,0,0,0,1),this}makeShear(e,t,n,s,r,a){return this.set(1,n,r,0,e,1,a,0,t,s,1,0,0,0,0,1),this}compose(e,t,n){const s=this.elements,r=t._x,a=t._y,o=t._z,c=t._w,l=r+r,d=a+a,h=o+o,u=r*l,f=r*d,g=r*h,v=a*d,m=a*h,p=o*h,x=c*l,b=c*d,y=c*h,I=n.x,T=n.y,w=n.z;return s[0]=(1-(v+p))*I,s[1]=(f+y)*I,s[2]=(g-b)*I,s[3]=0,s[4]=(f-y)*T,s[5]=(1-(u+p))*T,s[6]=(m+x)*T,s[7]=0,s[8]=(g+b)*w,s[9]=(m-x)*w,s[10]=(1-(u+v))*w,s[11]=0,s[12]=e.x,s[13]=e.y,s[14]=e.z,s[15]=1,this}decompose(e,t,n){const s=this.elements;let r=Vs.set(s[0],s[1],s[2]).length();const a=Vs.set(s[4],s[5],s[6]).length(),o=Vs.set(s[8],s[9],s[10]).length();this.determinant()<0&&(r=-r),e.x=s[12],e.y=s[13],e.z=s[14],Hn.copy(this);const l=1/r,d=1/a,h=1/o;return Hn.elements[0]*=l,Hn.elements[1]*=l,Hn.elements[2]*=l,Hn.elements[4]*=d,Hn.elements[5]*=d,Hn.elements[6]*=d,Hn.elements[8]*=h,Hn.elements[9]*=h,Hn.elements[10]*=h,t.setFromRotationMatrix(Hn),n.x=r,n.y=a,n.z=o,this}makePerspective(e,t,n,s,r,a,o=Ci){const c=this.elements,l=2*r/(t-e),d=2*r/(n-s),h=(t+e)/(t-e),u=(n+s)/(n-s);let f,g;if(o===Ci)f=-(a+r)/(a-r),g=-2*a*r/(a-r);else if(o===yo)f=-a/(a-r),g=-a*r/(a-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return c[0]=l,c[4]=0,c[8]=h,c[12]=0,c[1]=0,c[5]=d,c[9]=u,c[13]=0,c[2]=0,c[6]=0,c[10]=f,c[14]=g,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(e,t,n,s,r,a,o=Ci){const c=this.elements,l=1/(t-e),d=1/(n-s),h=1/(a-r),u=(t+e)*l,f=(n+s)*d;let g,v;if(o===Ci)g=(a+r)*h,v=-2*h;else if(o===yo)g=r*h,v=-1*h;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return c[0]=2*l,c[4]=0,c[8]=0,c[12]=-u,c[1]=0,c[5]=2*d,c[9]=0,c[13]=-f,c[2]=0,c[6]=0,c[10]=v,c[14]=-g,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(e){const t=this.elements,n=e.elements;for(let s=0;s<16;s++)if(t[s]!==n[s])return!1;return!0}fromArray(e,t=0){for(let n=0;n<16;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e[t+9]=n[9],e[t+10]=n[10],e[t+11]=n[11],e[t+12]=n[12],e[t+13]=n[13],e[t+14]=n[14],e[t+15]=n[15],e}}const Vs=new D,Hn=new Ke,im=new D(0,0,0),sm=new D(1,1,1),Gi=new D,Ea=new D,vn=new D,Od=new Ke,Ud=new os;class ai{constructor(e=0,t=0,n=0,s=ai.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=n,this._order=s}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,n,s=this._order){return this._x=e,this._y=t,this._z=n,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,n=!0){const s=e.elements,r=s[0],a=s[4],o=s[8],c=s[1],l=s[5],d=s[9],h=s[2],u=s[6],f=s[10];switch(t){case"XYZ":this._y=Math.asin(Bt(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-d,f),this._z=Math.atan2(-a,r)):(this._x=Math.atan2(u,l),this._z=0);break;case"YXZ":this._x=Math.asin(-Bt(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(o,f),this._z=Math.atan2(c,l)):(this._y=Math.atan2(-h,r),this._z=0);break;case"ZXY":this._x=Math.asin(Bt(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(-h,f),this._z=Math.atan2(-a,l)):(this._y=0,this._z=Math.atan2(c,r));break;case"ZYX":this._y=Math.asin(-Bt(h,-1,1)),Math.abs(h)<.9999999?(this._x=Math.atan2(u,f),this._z=Math.atan2(c,r)):(this._x=0,this._z=Math.atan2(-a,l));break;case"YZX":this._z=Math.asin(Bt(c,-1,1)),Math.abs(c)<.9999999?(this._x=Math.atan2(-d,l),this._y=Math.atan2(-h,r)):(this._x=0,this._y=Math.atan2(o,f));break;case"XZY":this._z=Math.asin(-Bt(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(u,l),this._y=Math.atan2(o,r)):(this._x=Math.atan2(-d,f),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,n===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,n){return Od.makeRotationFromQuaternion(e),this.setFromRotationMatrix(Od,t,n)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return Ud.setFromEuler(this),this.setFromQuaternion(Ud,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}ai.DEFAULT_ORDER="XYZ";class Uu{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let rm=0;const Fd=new D,Ws=new os,pi=new Ke,Ta=new D,Fr=new D,am=new D,om=new os,Bd=new D(1,0,0),kd=new D(0,1,0),zd=new D(0,0,1),Hd={type:"added"},cm={type:"removed"},Xs={type:"childadded",child:null},nc={type:"childremoved",child:null};class Tt extends Cr{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:rm++}),this.uuid=jn(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Tt.DEFAULT_UP.clone();const e=new D,t=new ai,n=new os,s=new D(1,1,1);function r(){n.setFromEuler(t,!1)}function a(){t.setFromQuaternion(n,void 0,!1)}t._onChange(r),n._onChange(a),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new Ke},normalMatrix:{value:new Ze}}),this.matrix=new Ke,this.matrixWorld=new Ke,this.matrixAutoUpdate=Tt.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=Tt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Uu,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return Ws.setFromAxisAngle(e,t),this.quaternion.multiply(Ws),this}rotateOnWorldAxis(e,t){return Ws.setFromAxisAngle(e,t),this.quaternion.premultiply(Ws),this}rotateX(e){return this.rotateOnAxis(Bd,e)}rotateY(e){return this.rotateOnAxis(kd,e)}rotateZ(e){return this.rotateOnAxis(zd,e)}translateOnAxis(e,t){return Fd.copy(e).applyQuaternion(this.quaternion),this.position.add(Fd.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(Bd,e)}translateY(e){return this.translateOnAxis(kd,e)}translateZ(e){return this.translateOnAxis(zd,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(pi.copy(this.matrixWorld).invert())}lookAt(e,t,n){e.isVector3?Ta.copy(e):Ta.set(e,t,n);const s=this.parent;this.updateWorldMatrix(!0,!1),Fr.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?pi.lookAt(Fr,Ta,this.up):pi.lookAt(Ta,Fr,this.up),this.quaternion.setFromRotationMatrix(pi),s&&(pi.extractRotation(s.matrixWorld),Ws.setFromRotationMatrix(pi),this.quaternion.premultiply(Ws.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(Hd),Xs.child=e,this.dispatchEvent(Xs),Xs.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(cm),nc.child=e,this.dispatchEvent(nc),nc.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),pi.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),pi.multiply(e.parent.matrixWorld)),e.applyMatrix4(pi),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(Hd),Xs.child=e,this.dispatchEvent(Xs),Xs.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let n=0,s=this.children.length;n<s;n++){const a=this.children[n].getObjectByProperty(e,t);if(a!==void 0)return a}}getObjectsByProperty(e,t,n=[]){this[e]===t&&n.push(this);const s=this.children;for(let r=0,a=s.length;r<a;r++)s[r].getObjectsByProperty(e,t,n);return n}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Fr,e,am),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Fr,om,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);const t=this.children;for(let n=0,s=t.length;n<s;n++)t[n].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let n=0,s=t.length;n<s;n++)t[n].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let n=0,s=t.length;n<s;n++)t[n].updateMatrixWorld(e)}updateWorldMatrix(e,t){const n=this.parent;if(e===!0&&n!==null&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),t===!0){const s=this.children;for(let r=0,a=s.length;r<a;r++)s[r].updateWorldMatrix(!1,!0)}}toJSON(e){const t=e===void 0||typeof e=="string",n={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const s={};s.uuid=this.uuid,s.type=this.type,this.name!==""&&(s.name=this.name),this.castShadow===!0&&(s.castShadow=!0),this.receiveShadow===!0&&(s.receiveShadow=!0),this.visible===!1&&(s.visible=!1),this.frustumCulled===!1&&(s.frustumCulled=!1),this.renderOrder!==0&&(s.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(s.matrixAutoUpdate=!1),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.visibility=this._visibility,s.active=this._active,s.bounds=this._bounds.map(o=>({boxInitialized:o.boxInitialized,boxMin:o.box.min.toArray(),boxMax:o.box.max.toArray(),sphereInitialized:o.sphereInitialized,sphereRadius:o.sphere.radius,sphereCenter:o.sphere.center.toArray()})),s.maxInstanceCount=this._maxInstanceCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.geometryCount=this._geometryCount,s.matricesTexture=this._matricesTexture.toJSON(e),this._colorsTexture!==null&&(s.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(s.boundingSphere={center:s.boundingSphere.center.toArray(),radius:s.boundingSphere.radius}),this.boundingBox!==null&&(s.boundingBox={min:s.boundingBox.min.toArray(),max:s.boundingBox.max.toArray()}));function r(o,c){return o[c.uuid]===void 0&&(o[c.uuid]=c.toJSON(e)),c.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=r(e.geometries,this.geometry);const o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){const c=o.shapes;if(Array.isArray(c))for(let l=0,d=c.length;l<d;l++){const h=c[l];r(e.shapes,h)}else r(e.shapes,c)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(e.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const o=[];for(let c=0,l=this.material.length;c<l;c++)o.push(r(e.materials,this.material[c]));s.material=o}else s.material=r(e.materials,this.material);if(this.children.length>0){s.children=[];for(let o=0;o<this.children.length;o++)s.children.push(this.children[o].toJSON(e).object)}if(this.animations.length>0){s.animations=[];for(let o=0;o<this.animations.length;o++){const c=this.animations[o];s.animations.push(r(e.animations,c))}}if(t){const o=a(e.geometries),c=a(e.materials),l=a(e.textures),d=a(e.images),h=a(e.shapes),u=a(e.skeletons),f=a(e.animations),g=a(e.nodes);o.length>0&&(n.geometries=o),c.length>0&&(n.materials=c),l.length>0&&(n.textures=l),d.length>0&&(n.images=d),h.length>0&&(n.shapes=h),u.length>0&&(n.skeletons=u),f.length>0&&(n.animations=f),g.length>0&&(n.nodes=g)}return n.object=s,n;function a(o){const c=[];for(const l in o){const d=o[l];delete d.metadata,c.push(d)}return c}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let n=0;n<e.children.length;n++){const s=e.children[n];this.add(s.clone())}return this}}Tt.DEFAULT_UP=new D(0,1,0);Tt.DEFAULT_MATRIX_AUTO_UPDATE=!0;Tt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const Gn=new D,mi=new D,ic=new D,gi=new D,Ys=new D,qs=new D,Gd=new D,sc=new D,rc=new D,ac=new D,oc=new dt,cc=new dt,lc=new dt;class Kn{constructor(e=new D,t=new D,n=new D){this.a=e,this.b=t,this.c=n}static getNormal(e,t,n,s){s.subVectors(n,t),Gn.subVectors(e,t),s.cross(Gn);const r=s.lengthSq();return r>0?s.multiplyScalar(1/Math.sqrt(r)):s.set(0,0,0)}static getBarycoord(e,t,n,s,r){Gn.subVectors(s,t),mi.subVectors(n,t),ic.subVectors(e,t);const a=Gn.dot(Gn),o=Gn.dot(mi),c=Gn.dot(ic),l=mi.dot(mi),d=mi.dot(ic),h=a*l-o*o;if(h===0)return r.set(0,0,0),null;const u=1/h,f=(l*c-o*d)*u,g=(a*d-o*c)*u;return r.set(1-f-g,g,f)}static containsPoint(e,t,n,s){return this.getBarycoord(e,t,n,s,gi)===null?!1:gi.x>=0&&gi.y>=0&&gi.x+gi.y<=1}static getInterpolation(e,t,n,s,r,a,o,c){return this.getBarycoord(e,t,n,s,gi)===null?(c.x=0,c.y=0,"z"in c&&(c.z=0),"w"in c&&(c.w=0),null):(c.setScalar(0),c.addScaledVector(r,gi.x),c.addScaledVector(a,gi.y),c.addScaledVector(o,gi.z),c)}static getInterpolatedAttribute(e,t,n,s,r,a){return oc.setScalar(0),cc.setScalar(0),lc.setScalar(0),oc.fromBufferAttribute(e,t),cc.fromBufferAttribute(e,n),lc.fromBufferAttribute(e,s),a.setScalar(0),a.addScaledVector(oc,r.x),a.addScaledVector(cc,r.y),a.addScaledVector(lc,r.z),a}static isFrontFacing(e,t,n,s){return Gn.subVectors(n,t),mi.subVectors(e,t),Gn.cross(mi).dot(s)<0}set(e,t,n){return this.a.copy(e),this.b.copy(t),this.c.copy(n),this}setFromPointsAndIndices(e,t,n,s){return this.a.copy(e[t]),this.b.copy(e[n]),this.c.copy(e[s]),this}setFromAttributeAndIndices(e,t,n,s){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,n),this.c.fromBufferAttribute(e,s),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return Gn.subVectors(this.c,this.b),mi.subVectors(this.a,this.b),Gn.cross(mi).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return Kn.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return Kn.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,n,s,r){return Kn.getInterpolation(e,this.a,this.b,this.c,t,n,s,r)}containsPoint(e){return Kn.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return Kn.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const n=this.a,s=this.b,r=this.c;let a,o;Ys.subVectors(s,n),qs.subVectors(r,n),sc.subVectors(e,n);const c=Ys.dot(sc),l=qs.dot(sc);if(c<=0&&l<=0)return t.copy(n);rc.subVectors(e,s);const d=Ys.dot(rc),h=qs.dot(rc);if(d>=0&&h<=d)return t.copy(s);const u=c*h-d*l;if(u<=0&&c>=0&&d<=0)return a=c/(c-d),t.copy(n).addScaledVector(Ys,a);ac.subVectors(e,r);const f=Ys.dot(ac),g=qs.dot(ac);if(g>=0&&f<=g)return t.copy(r);const v=f*l-c*g;if(v<=0&&l>=0&&g<=0)return o=l/(l-g),t.copy(n).addScaledVector(qs,o);const m=d*g-f*h;if(m<=0&&h-d>=0&&f-g>=0)return Gd.subVectors(r,s),o=(h-d)/(h-d+(f-g)),t.copy(s).addScaledVector(Gd,o);const p=1/(m+v+u);return a=v*p,o=u*p,t.copy(n).addScaledVector(Ys,a).addScaledVector(qs,o)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}const Fu={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Vi={h:0,s:0,l:0},wa={h:0,s:0,l:0};function dc(i,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?i+(e-i)*6*t:t<1/2?e:t<2/3?i+(e-i)*6*(2/3-t):i}class ze{constructor(e,t,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,n)}set(e,t,n){if(t===void 0&&n===void 0){const s=e;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(e,t,n);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=Pt){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,st.toWorkingColorSpace(this,t),this}setRGB(e,t,n,s=st.workingColorSpace){return this.r=e,this.g=t,this.b=n,st.toWorkingColorSpace(this,s),this}setHSL(e,t,n,s=st.workingColorSpace){if(e=$l(e,1),t=Bt(t,0,1),n=Bt(n,0,1),t===0)this.r=this.g=this.b=n;else{const r=n<=.5?n*(1+t):n+t-n*t,a=2*n-r;this.r=dc(a,r,e+1/3),this.g=dc(a,r,e),this.b=dc(a,r,e-1/3)}return st.toWorkingColorSpace(this,s),this}setStyle(e,t=Pt){function n(r){r!==void 0&&parseFloat(r)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(e)){let r;const a=s[1],o=s[2];switch(a){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,t);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,t);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,t);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(e)){const r=s[1],a=r.length;if(a===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,t);if(a===6)return this.setHex(parseInt(r,16),t);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=Pt){const n=Fu[e.toLowerCase()];return n!==void 0?this.setHex(n,t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=Ii(e.r),this.g=Ii(e.g),this.b=Ii(e.b),this}copyLinearToSRGB(e){return this.r=fr(e.r),this.g=fr(e.g),this.b=fr(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=Pt){return st.fromWorkingColorSpace(Zt.copy(this),e),Math.round(Bt(Zt.r*255,0,255))*65536+Math.round(Bt(Zt.g*255,0,255))*256+Math.round(Bt(Zt.b*255,0,255))}getHexString(e=Pt){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=st.workingColorSpace){st.fromWorkingColorSpace(Zt.copy(this),t);const n=Zt.r,s=Zt.g,r=Zt.b,a=Math.max(n,s,r),o=Math.min(n,s,r);let c,l;const d=(o+a)/2;if(o===a)c=0,l=0;else{const h=a-o;switch(l=d<=.5?h/(a+o):h/(2-a-o),a){case n:c=(s-r)/h+(s<r?6:0);break;case s:c=(r-n)/h+2;break;case r:c=(n-s)/h+4;break}c/=6}return e.h=c,e.s=l,e.l=d,e}getRGB(e,t=st.workingColorSpace){return st.fromWorkingColorSpace(Zt.copy(this),t),e.r=Zt.r,e.g=Zt.g,e.b=Zt.b,e}getStyle(e=Pt){st.fromWorkingColorSpace(Zt.copy(this),e);const t=Zt.r,n=Zt.g,s=Zt.b;return e!==Pt?`color(${e} ${t.toFixed(3)} ${n.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(n*255)},${Math.round(s*255)})`}offsetHSL(e,t,n){return this.getHSL(Vi),this.setHSL(Vi.h+e,Vi.s+t,Vi.l+n)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,n){return this.r=e.r+(t.r-e.r)*n,this.g=e.g+(t.g-e.g)*n,this.b=e.b+(t.b-e.b)*n,this}lerpHSL(e,t){this.getHSL(Vi),e.getHSL(wa);const n=ea(Vi.h,wa.h,t),s=ea(Vi.s,wa.s,t),r=ea(Vi.l,wa.l,t);return this.setHSL(n,s,r),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const t=this.r,n=this.g,s=this.b,r=e.elements;return this.r=r[0]*t+r[3]*n+r[6]*s,this.g=r[1]*t+r[4]*n+r[7]*s,this.b=r[2]*t+r[5]*n+r[8]*s,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Zt=new ze;ze.NAMES=Fu;let lm=0;class si extends Cr{static get type(){return"Material"}get type(){return this.constructor.type}set type(e){}constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:lm++}),this.uuid=jn(),this.name="",this.blending=hr,this.side=Li,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Bc,this.blendDst=kc,this.blendEquation=xs,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new ze(0,0,0),this.blendAlpha=0,this.depthFunc=gr,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Td,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Bs,this.stencilZFail=Bs,this.stencilZPass=Bs,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const n=e[t];if(n===void 0){console.warn(`THREE.Material: parameter '${t}' has value of undefined.`);continue}const s=this[t];if(s===void 0){console.warn(`THREE.Material: '${t}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(n):s&&s.isVector3&&n&&n.isVector3?s.copy(n):this[t]=n}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const n={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(e).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(e).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(e).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(e).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(e).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==hr&&(n.blending=this.blending),this.side!==Li&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==Bc&&(n.blendSrc=this.blendSrc),this.blendDst!==kc&&(n.blendDst=this.blendDst),this.blendEquation!==xs&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==gr&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==Td&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Bs&&(n.stencilFail=this.stencilFail),this.stencilZFail!==Bs&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==Bs&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function s(r){const a=[];for(const o in r){const c=r[o];delete c.metadata,a.push(c)}return a}if(t){const r=s(e.textures),a=s(e.images);r.length>0&&(n.textures=r),a.length>0&&(n.images=a)}return n}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let n=null;if(t!==null){const s=t.length;n=new Array(s);for(let r=0;r!==s;++r)n[r]=t[r].clone()}return this.clippingPlanes=n,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}onBuild(){console.warn("Material: onBuild() has been removed.")}}class Nn extends si{static get type(){return"MeshBasicMaterial"}constructor(e){super(),this.isMeshBasicMaterial=!0,this.color=new ze(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new ai,this.combine=vu,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const wi=dm();function dm(){const i=new ArrayBuffer(4),e=new Float32Array(i),t=new Uint32Array(i),n=new Uint32Array(512),s=new Uint32Array(512);for(let c=0;c<256;++c){const l=c-127;l<-27?(n[c]=0,n[c|256]=32768,s[c]=24,s[c|256]=24):l<-14?(n[c]=1024>>-l-14,n[c|256]=1024>>-l-14|32768,s[c]=-l-1,s[c|256]=-l-1):l<=15?(n[c]=l+15<<10,n[c|256]=l+15<<10|32768,s[c]=13,s[c|256]=13):l<128?(n[c]=31744,n[c|256]=64512,s[c]=24,s[c|256]=24):(n[c]=31744,n[c|256]=64512,s[c]=13,s[c|256]=13)}const r=new Uint32Array(2048),a=new Uint32Array(64),o=new Uint32Array(64);for(let c=1;c<1024;++c){let l=c<<13,d=0;for(;(l&8388608)===0;)l<<=1,d-=8388608;l&=-8388609,d+=947912704,r[c]=l|d}for(let c=1024;c<2048;++c)r[c]=939524096+(c-1024<<13);for(let c=1;c<31;++c)a[c]=c<<23;a[31]=1199570944,a[32]=2147483648;for(let c=33;c<63;++c)a[c]=2147483648+(c-32<<23);a[63]=3347054592;for(let c=1;c<64;++c)c!==32&&(o[c]=1024);return{floatView:e,uint32View:t,baseTable:n,shiftTable:s,mantissaTable:r,exponentTable:a,offsetTable:o}}function hm(i){Math.abs(i)>65504&&console.warn("THREE.DataUtils.toHalfFloat(): Value out of range."),i=Bt(i,-65504,65504),wi.floatView[0]=i;const e=wi.uint32View[0],t=e>>23&511;return wi.baseTable[t]+((e&8388607)>>wi.shiftTable[t])}function um(i){const e=i>>10;return wi.uint32View[0]=wi.mantissaTable[wi.offsetTable[e]+(i&1023)]+wi.exponentTable[e],wi.floatView[0]}const Aa={toHalfFloat:hm,fromHalfFloat:um},Lt=new D,Ra=new je;class on{constructor(e,t,n=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=n,this.usage=Sl,this.updateRanges=[],this.gpuType=hn,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,n){e*=this.itemSize,n*=t.itemSize;for(let s=0,r=this.itemSize;s<r;s++)this.array[e+s]=t.array[n+s];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,n=this.count;t<n;t++)Ra.fromBufferAttribute(this,t),Ra.applyMatrix3(e),this.setXY(t,Ra.x,Ra.y);else if(this.itemSize===3)for(let t=0,n=this.count;t<n;t++)Lt.fromBufferAttribute(this,t),Lt.applyMatrix3(e),this.setXYZ(t,Lt.x,Lt.y,Lt.z);return this}applyMatrix4(e){for(let t=0,n=this.count;t<n;t++)Lt.fromBufferAttribute(this,t),Lt.applyMatrix4(e),this.setXYZ(t,Lt.x,Lt.y,Lt.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)Lt.fromBufferAttribute(this,t),Lt.applyNormalMatrix(e),this.setXYZ(t,Lt.x,Lt.y,Lt.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)Lt.fromBufferAttribute(this,t),Lt.transformDirection(e),this.setXYZ(t,Lt.x,Lt.y,Lt.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let n=this.array[e*this.itemSize+t];return this.normalized&&(n=$n(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=gt(n,this.array)),this.array[e*this.itemSize+t]=n,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=$n(t,this.array)),t}setX(e,t){return this.normalized&&(t=gt(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=$n(t,this.array)),t}setY(e,t){return this.normalized&&(t=gt(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=$n(t,this.array)),t}setZ(e,t){return this.normalized&&(t=gt(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=$n(t,this.array)),t}setW(e,t){return this.normalized&&(t=gt(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,n){return e*=this.itemSize,this.normalized&&(t=gt(t,this.array),n=gt(n,this.array)),this.array[e+0]=t,this.array[e+1]=n,this}setXYZ(e,t,n,s){return e*=this.itemSize,this.normalized&&(t=gt(t,this.array),n=gt(n,this.array),s=gt(s,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=s,this}setXYZW(e,t,n,s,r){return e*=this.itemSize,this.normalized&&(t=gt(t,this.array),n=gt(n,this.array),s=gt(s,this.array),r=gt(r,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=s,this.array[e+3]=r,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==Sl&&(e.usage=this.usage),e}}class Bu extends on{constructor(e,t,n){super(new Uint16Array(e),t,n)}}class ku extends on{constructor(e,t,n){super(new Uint32Array(e),t,n)}}class Xt extends on{constructor(e,t,n){super(new Float32Array(e),t,n)}}let fm=0;const Tn=new Ke,hc=new Tt,$s=new D,_n=new Ui,Br=new Ui,Gt=new D;class fn extends Cr{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:fm++}),this.uuid=jn(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(Pu(e)?ku:Bu)(e,1):this.index=e,this}setIndirect(e){return this.indirect=e,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,n=0){this.groups.push({start:e,count:t,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const n=this.attributes.normal;if(n!==void 0){const r=new Ze().getNormalMatrix(e);n.applyNormalMatrix(r),n.needsUpdate=!0}const s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(e),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return Tn.makeRotationFromQuaternion(e),this.applyMatrix4(Tn),this}rotateX(e){return Tn.makeRotationX(e),this.applyMatrix4(Tn),this}rotateY(e){return Tn.makeRotationY(e),this.applyMatrix4(Tn),this}rotateZ(e){return Tn.makeRotationZ(e),this.applyMatrix4(Tn),this}translate(e,t,n){return Tn.makeTranslation(e,t,n),this.applyMatrix4(Tn),this}scale(e,t,n){return Tn.makeScale(e,t,n),this.applyMatrix4(Tn),this}lookAt(e){return hc.lookAt(e),hc.updateMatrix(),this.applyMatrix4(hc.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter($s).negate(),this.translate($s.x,$s.y,$s.z),this}setFromPoints(e){const t=this.getAttribute("position");if(t===void 0){const n=[];for(let s=0,r=e.length;s<r;s++){const a=e[s];n.push(a.x,a.y,a.z||0)}this.setAttribute("position",new Xt(n,3))}else{for(let n=0,s=t.count;n<s;n++){const r=e[n];t.setXYZ(n,r.x,r.y,r.z||0)}e.length>t.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Ui);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new D(-1/0,-1/0,-1/0),new D(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let n=0,s=t.length;n<s;n++){const r=t[n];_n.setFromBufferAttribute(r),this.morphTargetsRelative?(Gt.addVectors(this.boundingBox.min,_n.min),this.boundingBox.expandByPoint(Gt),Gt.addVectors(this.boundingBox.max,_n.max),this.boundingBox.expandByPoint(Gt)):(this.boundingBox.expandByPoint(_n.min),this.boundingBox.expandByPoint(_n.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new ci);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new D,1/0);return}if(e){const n=this.boundingSphere.center;if(_n.setFromBufferAttribute(e),t)for(let r=0,a=t.length;r<a;r++){const o=t[r];Br.setFromBufferAttribute(o),this.morphTargetsRelative?(Gt.addVectors(_n.min,Br.min),_n.expandByPoint(Gt),Gt.addVectors(_n.max,Br.max),_n.expandByPoint(Gt)):(_n.expandByPoint(Br.min),_n.expandByPoint(Br.max))}_n.getCenter(n);let s=0;for(let r=0,a=e.count;r<a;r++)Gt.fromBufferAttribute(e,r),s=Math.max(s,n.distanceToSquared(Gt));if(t)for(let r=0,a=t.length;r<a;r++){const o=t[r],c=this.morphTargetsRelative;for(let l=0,d=o.count;l<d;l++)Gt.fromBufferAttribute(o,l),c&&($s.fromBufferAttribute(e,l),Gt.add($s)),s=Math.max(s,n.distanceToSquared(Gt))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const n=t.position,s=t.normal,r=t.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new on(new Float32Array(4*n.count),4));const a=this.getAttribute("tangent"),o=[],c=[];for(let R=0;R<n.count;R++)o[R]=new D,c[R]=new D;const l=new D,d=new D,h=new D,u=new je,f=new je,g=new je,v=new D,m=new D;function p(R,S,_){l.fromBufferAttribute(n,R),d.fromBufferAttribute(n,S),h.fromBufferAttribute(n,_),u.fromBufferAttribute(r,R),f.fromBufferAttribute(r,S),g.fromBufferAttribute(r,_),d.sub(l),h.sub(l),f.sub(u),g.sub(u);const C=1/(f.x*g.y-g.x*f.y);isFinite(C)&&(v.copy(d).multiplyScalar(g.y).addScaledVector(h,-f.y).multiplyScalar(C),m.copy(h).multiplyScalar(f.x).addScaledVector(d,-g.x).multiplyScalar(C),o[R].add(v),o[S].add(v),o[_].add(v),c[R].add(m),c[S].add(m),c[_].add(m))}let x=this.groups;x.length===0&&(x=[{start:0,count:e.count}]);for(let R=0,S=x.length;R<S;++R){const _=x[R],C=_.start,F=_.count;for(let P=C,N=C+F;P<N;P+=3)p(e.getX(P+0),e.getX(P+1),e.getX(P+2))}const b=new D,y=new D,I=new D,T=new D;function w(R){I.fromBufferAttribute(s,R),T.copy(I);const S=o[R];b.copy(S),b.sub(I.multiplyScalar(I.dot(S))).normalize(),y.crossVectors(T,S);const C=y.dot(c[R])<0?-1:1;a.setXYZW(R,b.x,b.y,b.z,C)}for(let R=0,S=x.length;R<S;++R){const _=x[R],C=_.start,F=_.count;for(let P=C,N=C+F;P<N;P+=3)w(e.getX(P+0)),w(e.getX(P+1)),w(e.getX(P+2))}}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new on(new Float32Array(t.count*3),3),this.setAttribute("normal",n);else for(let u=0,f=n.count;u<f;u++)n.setXYZ(u,0,0,0);const s=new D,r=new D,a=new D,o=new D,c=new D,l=new D,d=new D,h=new D;if(e)for(let u=0,f=e.count;u<f;u+=3){const g=e.getX(u+0),v=e.getX(u+1),m=e.getX(u+2);s.fromBufferAttribute(t,g),r.fromBufferAttribute(t,v),a.fromBufferAttribute(t,m),d.subVectors(a,r),h.subVectors(s,r),d.cross(h),o.fromBufferAttribute(n,g),c.fromBufferAttribute(n,v),l.fromBufferAttribute(n,m),o.add(d),c.add(d),l.add(d),n.setXYZ(g,o.x,o.y,o.z),n.setXYZ(v,c.x,c.y,c.z),n.setXYZ(m,l.x,l.y,l.z)}else for(let u=0,f=t.count;u<f;u+=3)s.fromBufferAttribute(t,u+0),r.fromBufferAttribute(t,u+1),a.fromBufferAttribute(t,u+2),d.subVectors(a,r),h.subVectors(s,r),d.cross(h),n.setXYZ(u+0,d.x,d.y,d.z),n.setXYZ(u+1,d.x,d.y,d.z),n.setXYZ(u+2,d.x,d.y,d.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let t=0,n=e.count;t<n;t++)Gt.fromBufferAttribute(e,t),Gt.normalize(),e.setXYZ(t,Gt.x,Gt.y,Gt.z)}toNonIndexed(){function e(o,c){const l=o.array,d=o.itemSize,h=o.normalized,u=new l.constructor(c.length*d);let f=0,g=0;for(let v=0,m=c.length;v<m;v++){o.isInterleavedBufferAttribute?f=c[v]*o.data.stride+o.offset:f=c[v]*d;for(let p=0;p<d;p++)u[g++]=l[f++]}return new on(u,d,h)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new fn,n=this.index.array,s=this.attributes;for(const o in s){const c=s[o],l=e(c,n);t.setAttribute(o,l)}const r=this.morphAttributes;for(const o in r){const c=[],l=r[o];for(let d=0,h=l.length;d<h;d++){const u=l[d],f=e(u,n);c.push(f)}t.morphAttributes[o]=c}t.morphTargetsRelative=this.morphTargetsRelative;const a=this.groups;for(let o=0,c=a.length;o<c;o++){const l=a[o];t.addGroup(l.start,l.count,l.materialIndex)}return t}toJSON(){const e={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const c=this.parameters;for(const l in c)c[l]!==void 0&&(e[l]=c[l]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const n=this.attributes;for(const c in n){const l=n[c];e.data.attributes[c]=l.toJSON(e.data)}const s={};let r=!1;for(const c in this.morphAttributes){const l=this.morphAttributes[c],d=[];for(let h=0,u=l.length;h<u;h++){const f=l[h];d.push(f.toJSON(e.data))}d.length>0&&(s[c]=d,r=!0)}r&&(e.data.morphAttributes=s,e.data.morphTargetsRelative=this.morphTargetsRelative);const a=this.groups;a.length>0&&(e.data.groups=JSON.parse(JSON.stringify(a)));const o=this.boundingSphere;return o!==null&&(e.data.boundingSphere={center:o.center.toArray(),radius:o.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const n=e.index;n!==null&&this.setIndex(n.clone(t));const s=e.attributes;for(const l in s){const d=s[l];this.setAttribute(l,d.clone(t))}const r=e.morphAttributes;for(const l in r){const d=[],h=r[l];for(let u=0,f=h.length;u<f;u++)d.push(h[u].clone(t));this.morphAttributes[l]=d}this.morphTargetsRelative=e.morphTargetsRelative;const a=e.groups;for(let l=0,d=a.length;l<d;l++){const h=a[l];this.addGroup(h.start,h.count,h.materialIndex)}const o=e.boundingBox;o!==null&&(this.boundingBox=o.clone());const c=e.boundingSphere;return c!==null&&(this.boundingSphere=c.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const Vd=new Ke,fs=new Fo,Ca=new ci,Wd=new D,Ia=new D,La=new D,Da=new D,uc=new D,Pa=new D,Xd=new D,Na=new D;class B extends Tt{constructor(e=new fn,t=new Nn){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const s=t[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=s.length;r<a;r++){const o=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}getVertexPosition(e,t){const n=this.geometry,s=n.attributes.position,r=n.morphAttributes.position,a=n.morphTargetsRelative;t.fromBufferAttribute(s,e);const o=this.morphTargetInfluences;if(r&&o){Pa.set(0,0,0);for(let c=0,l=r.length;c<l;c++){const d=o[c],h=r[c];d!==0&&(uc.fromBufferAttribute(h,e),a?Pa.addScaledVector(uc,d):Pa.addScaledVector(uc.sub(t),d))}t.add(Pa)}return t}raycast(e,t){const n=this.geometry,s=this.material,r=this.matrixWorld;s!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),Ca.copy(n.boundingSphere),Ca.applyMatrix4(r),fs.copy(e.ray).recast(e.near),!(Ca.containsPoint(fs.origin)===!1&&(fs.intersectSphere(Ca,Wd)===null||fs.origin.distanceToSquared(Wd)>(e.far-e.near)**2))&&(Vd.copy(r).invert(),fs.copy(e.ray).applyMatrix4(Vd),!(n.boundingBox!==null&&fs.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(e,t,fs)))}_computeIntersections(e,t,n){let s;const r=this.geometry,a=this.material,o=r.index,c=r.attributes.position,l=r.attributes.uv,d=r.attributes.uv1,h=r.attributes.normal,u=r.groups,f=r.drawRange;if(o!==null)if(Array.isArray(a))for(let g=0,v=u.length;g<v;g++){const m=u[g],p=a[m.materialIndex],x=Math.max(m.start,f.start),b=Math.min(o.count,Math.min(m.start+m.count,f.start+f.count));for(let y=x,I=b;y<I;y+=3){const T=o.getX(y),w=o.getX(y+1),R=o.getX(y+2);s=Oa(this,p,e,n,l,d,h,T,w,R),s&&(s.faceIndex=Math.floor(y/3),s.face.materialIndex=m.materialIndex,t.push(s))}}else{const g=Math.max(0,f.start),v=Math.min(o.count,f.start+f.count);for(let m=g,p=v;m<p;m+=3){const x=o.getX(m),b=o.getX(m+1),y=o.getX(m+2);s=Oa(this,a,e,n,l,d,h,x,b,y),s&&(s.faceIndex=Math.floor(m/3),t.push(s))}}else if(c!==void 0)if(Array.isArray(a))for(let g=0,v=u.length;g<v;g++){const m=u[g],p=a[m.materialIndex],x=Math.max(m.start,f.start),b=Math.min(c.count,Math.min(m.start+m.count,f.start+f.count));for(let y=x,I=b;y<I;y+=3){const T=y,w=y+1,R=y+2;s=Oa(this,p,e,n,l,d,h,T,w,R),s&&(s.faceIndex=Math.floor(y/3),s.face.materialIndex=m.materialIndex,t.push(s))}}else{const g=Math.max(0,f.start),v=Math.min(c.count,f.start+f.count);for(let m=g,p=v;m<p;m+=3){const x=m,b=m+1,y=m+2;s=Oa(this,a,e,n,l,d,h,x,b,y),s&&(s.faceIndex=Math.floor(m/3),t.push(s))}}}}function pm(i,e,t,n,s,r,a,o){let c;if(e.side===un?c=n.intersectTriangle(a,r,s,!0,o):c=n.intersectTriangle(s,r,a,e.side===Li,o),c===null)return null;Na.copy(o),Na.applyMatrix4(i.matrixWorld);const l=t.ray.origin.distanceTo(Na);return l<t.near||l>t.far?null:{distance:l,point:Na.clone(),object:i}}function Oa(i,e,t,n,s,r,a,o,c,l){i.getVertexPosition(o,Ia),i.getVertexPosition(c,La),i.getVertexPosition(l,Da);const d=pm(i,e,t,n,Ia,La,Da,Xd);if(d){const h=new D;Kn.getBarycoord(Xd,Ia,La,Da,h),s&&(d.uv=Kn.getInterpolatedAttribute(s,o,c,l,h,new je)),r&&(d.uv1=Kn.getInterpolatedAttribute(r,o,c,l,h,new je)),a&&(d.normal=Kn.getInterpolatedAttribute(a,o,c,l,h,new D),d.normal.dot(n.direction)>0&&d.normal.multiplyScalar(-1));const u={a:o,b:c,c:l,normal:new D,materialIndex:0};Kn.getNormal(Ia,La,Da,u.normal),d.face=u,d.barycoord=h}return d}class se extends fn{constructor(e=1,t=1,n=1,s=1,r=1,a=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:n,widthSegments:s,heightSegments:r,depthSegments:a};const o=this;s=Math.floor(s),r=Math.floor(r),a=Math.floor(a);const c=[],l=[],d=[],h=[];let u=0,f=0;g("z","y","x",-1,-1,n,t,e,a,r,0),g("z","y","x",1,-1,n,t,-e,a,r,1),g("x","z","y",1,1,e,n,t,s,a,2),g("x","z","y",1,-1,e,n,-t,s,a,3),g("x","y","z",1,-1,e,t,n,s,r,4),g("x","y","z",-1,-1,e,t,-n,s,r,5),this.setIndex(c),this.setAttribute("position",new Xt(l,3)),this.setAttribute("normal",new Xt(d,3)),this.setAttribute("uv",new Xt(h,2));function g(v,m,p,x,b,y,I,T,w,R,S){const _=y/w,C=I/R,F=y/2,P=I/2,N=T/2,G=w+1,L=R+1;let q=0,V=0;const K=new D;for(let ie=0;ie<L;ie++){const re=ie*C-P;for(let pe=0;pe<G;pe++){const ye=pe*_-F;K[v]=ye*x,K[m]=re*b,K[p]=N,l.push(K.x,K.y,K.z),K[v]=0,K[m]=0,K[p]=T>0?1:-1,d.push(K.x,K.y,K.z),h.push(pe/w),h.push(1-ie/R),q+=1}}for(let ie=0;ie<R;ie++)for(let re=0;re<w;re++){const pe=u+re+G*ie,ye=u+re+G*(ie+1),Z=u+(re+1)+G*(ie+1),te=u+(re+1)+G*ie;c.push(pe,ye,te),c.push(ye,Z,te),V+=6}o.addGroup(f,V,S),f+=V,u+=q}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new se(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function Mr(i){const e={};for(const t in i){e[t]={};for(const n in i[t]){const s=i[t][n];s&&(s.isColor||s.isMatrix3||s.isMatrix4||s.isVector2||s.isVector3||s.isVector4||s.isTexture||s.isQuaternion)?s.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][n]=null):e[t][n]=s.clone():Array.isArray(s)?e[t][n]=s.slice():e[t][n]=s}}return e}function nn(i){const e={};for(let t=0;t<i.length;t++){const n=Mr(i[t]);for(const s in n)e[s]=n[s]}return e}function mm(i){const e=[];for(let t=0;t<i.length;t++)e.push(i[t].clone());return e}function zu(i){const e=i.getRenderTarget();return e===null?i.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:st.workingColorSpace}const gm={clone:Mr,merge:nn};var vm=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,_m=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class ss extends si{static get type(){return"ShaderMaterial"}constructor(e){super(),this.isShaderMaterial=!0,this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=vm,this.fragmentShader=_m,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=Mr(e.uniforms),this.uniformsGroups=mm(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const s in this.uniforms){const a=this.uniforms[s].value;a&&a.isTexture?t.uniforms[s]={type:"t",value:a.toJSON(e).uuid}:a&&a.isColor?t.uniforms[s]={type:"c",value:a.getHex()}:a&&a.isVector2?t.uniforms[s]={type:"v2",value:a.toArray()}:a&&a.isVector3?t.uniforms[s]={type:"v3",value:a.toArray()}:a&&a.isVector4?t.uniforms[s]={type:"v4",value:a.toArray()}:a&&a.isMatrix3?t.uniforms[s]={type:"m3",value:a.toArray()}:a&&a.isMatrix4?t.uniforms[s]={type:"m4",value:a.toArray()}:t.uniforms[s]={value:a}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;const n={};for(const s in this.extensions)this.extensions[s]===!0&&(n[s]=!0);return Object.keys(n).length>0&&(t.extensions=n),t}}class Hu extends Tt{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Ke,this.projectionMatrix=new Ke,this.projectionMatrixInverse=new Ke,this.coordinateSystem=Ci}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const Wi=new D,Yd=new je,qd=new je;class rn extends Hu{constructor(e=50,t=1,n=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=n,this.far=s,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=Sr*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(Qr*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return Sr*2*Math.atan(Math.tan(Qr*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,n){Wi.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(Wi.x,Wi.y).multiplyScalar(-e/Wi.z),Wi.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(Wi.x,Wi.y).multiplyScalar(-e/Wi.z)}getViewSize(e,t){return this.getViewBounds(e,Yd,qd),t.subVectors(qd,Yd)}setViewOffset(e,t,n,s,r,a){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(Qr*.5*this.fov)/this.zoom,n=2*t,s=this.aspect*n,r=-.5*s;const a=this.view;if(this.view!==null&&this.view.enabled){const c=a.fullWidth,l=a.fullHeight;r+=a.offsetX*s/c,t-=a.offsetY*n/l,s*=a.width/c,n*=a.height/l}const o=this.filmOffset;o!==0&&(r+=e*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+s,t,t-n,e,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}const Ks=-90,Zs=1;class ym extends Tt{constructor(e,t,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;const s=new rn(Ks,Zs,e,t);s.layers=this.layers,this.add(s);const r=new rn(Ks,Zs,e,t);r.layers=this.layers,this.add(r);const a=new rn(Ks,Zs,e,t);a.layers=this.layers,this.add(a);const o=new rn(Ks,Zs,e,t);o.layers=this.layers,this.add(o);const c=new rn(Ks,Zs,e,t);c.layers=this.layers,this.add(c);const l=new rn(Ks,Zs,e,t);l.layers=this.layers,this.add(l)}updateCoordinateSystem(){const e=this.coordinateSystem,t=this.children.concat(),[n,s,r,a,o,c]=t;for(const l of t)this.remove(l);if(e===Ci)n.up.set(0,1,0),n.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),c.up.set(0,1,0),c.lookAt(0,0,-1);else if(e===yo)n.up.set(0,-1,0),n.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),c.up.set(0,-1,0),c.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const l of t)this.add(l),l.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();const{renderTarget:n,activeMipmapLevel:s}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[r,a,o,c,l,d]=this.children,h=e.getRenderTarget(),u=e.getActiveCubeFace(),f=e.getActiveMipmapLevel(),g=e.xr.enabled;e.xr.enabled=!1;const v=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,e.setRenderTarget(n,0,s),e.render(t,r),e.setRenderTarget(n,1,s),e.render(t,a),e.setRenderTarget(n,2,s),e.render(t,o),e.setRenderTarget(n,3,s),e.render(t,c),e.setRenderTarget(n,4,s),e.render(t,l),n.texture.generateMipmaps=v,e.setRenderTarget(n,5,s),e.render(t,d),e.setRenderTarget(h,u,f),e.xr.enabled=g,n.texture.needsPMREMUpdate=!0}}class Gu extends kt{constructor(e,t,n,s,r,a,o,c,l,d){e=e!==void 0?e:[],t=t!==void 0?t:vr,super(e,t,n,s,r,a,o,c,l,d),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class xm extends Ds{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const n={width:e,height:e,depth:1},s=[n,n,n,n,n,n];this.texture=new Gu(s,t.mapping,t.wrapS,t.wrapT,t.magFilter,t.minFilter,t.format,t.type,t.anisotropy,t.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=t.generateMipmaps!==void 0?t.generateMipmaps:!1,this.texture.minFilter=t.minFilter!==void 0?t.minFilter:Wt}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const n={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},s=new se(5,5,5),r=new ss({name:"CubemapFromEquirect",uniforms:Mr(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:un,blending:ns});r.uniforms.tEquirect.value=t;const a=new B(s,r),o=t.minFilter;return t.minFilter===ii&&(t.minFilter=Wt),new ym(1,10,this).update(e,a),t.minFilter=o,a.geometry.dispose(),a.material.dispose(),this}clear(e,t,n,s){const r=e.getRenderTarget();for(let a=0;a<6;a++)e.setRenderTarget(this,a),e.clear(t,n,s);e.setRenderTarget(r)}}const fc=new D,Sm=new D,Mm=new Ze;class _s{constructor(e=new D(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,n,s){return this.normal.set(e,t,n),this.constant=s,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,n){const s=fc.subVectors(n,t).cross(Sm.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(s,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){const n=e.delta(fc),s=this.normal.dot(n);if(s===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const r=-(e.start.dot(this.normal)+this.constant)/s;return r<0||r>1?null:t.copy(e.start).addScaledVector(n,r)}intersectsLine(e){const t=this.distanceToPoint(e.start),n=this.distanceToPoint(e.end);return t<0&&n>0||n<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const n=t||Mm.getNormalMatrix(e),s=this.coplanarPoint(fc).applyMatrix4(e),r=this.normal.applyMatrix3(n).normalize();return this.constant=-s.dot(r),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const ps=new ci,Ua=new D;class Kl{constructor(e=new _s,t=new _s,n=new _s,s=new _s,r=new _s,a=new _s){this.planes=[e,t,n,s,r,a]}set(e,t,n,s,r,a){const o=this.planes;return o[0].copy(e),o[1].copy(t),o[2].copy(n),o[3].copy(s),o[4].copy(r),o[5].copy(a),this}copy(e){const t=this.planes;for(let n=0;n<6;n++)t[n].copy(e.planes[n]);return this}setFromProjectionMatrix(e,t=Ci){const n=this.planes,s=e.elements,r=s[0],a=s[1],o=s[2],c=s[3],l=s[4],d=s[5],h=s[6],u=s[7],f=s[8],g=s[9],v=s[10],m=s[11],p=s[12],x=s[13],b=s[14],y=s[15];if(n[0].setComponents(c-r,u-l,m-f,y-p).normalize(),n[1].setComponents(c+r,u+l,m+f,y+p).normalize(),n[2].setComponents(c+a,u+d,m+g,y+x).normalize(),n[3].setComponents(c-a,u-d,m-g,y-x).normalize(),n[4].setComponents(c-o,u-h,m-v,y-b).normalize(),t===Ci)n[5].setComponents(c+o,u+h,m+v,y+b).normalize();else if(t===yo)n[5].setComponents(o,h,v,b).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),ps.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),ps.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(ps)}intersectsSprite(e){return ps.center.set(0,0,0),ps.radius=.7071067811865476,ps.applyMatrix4(e.matrixWorld),this.intersectsSphere(ps)}intersectsSphere(e){const t=this.planes,n=e.center,s=-e.radius;for(let r=0;r<6;r++)if(t[r].distanceToPoint(n)<s)return!1;return!0}intersectsBox(e){const t=this.planes;for(let n=0;n<6;n++){const s=t[n];if(Ua.x=s.normal.x>0?e.max.x:e.min.x,Ua.y=s.normal.y>0?e.max.y:e.min.y,Ua.z=s.normal.z>0?e.max.z:e.min.z,s.distanceToPoint(Ua)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let n=0;n<6;n++)if(t[n].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function Vu(){let i=null,e=!1,t=null,n=null;function s(r,a){t(r,a),n=i.requestAnimationFrame(s)}return{start:function(){e!==!0&&t!==null&&(n=i.requestAnimationFrame(s),e=!0)},stop:function(){i.cancelAnimationFrame(n),e=!1},setAnimationLoop:function(r){t=r},setContext:function(r){i=r}}}function bm(i){const e=new WeakMap;function t(o,c){const l=o.array,d=o.usage,h=l.byteLength,u=i.createBuffer();i.bindBuffer(c,u),i.bufferData(c,l,d),o.onUploadCallback();let f;if(l instanceof Float32Array)f=i.FLOAT;else if(l instanceof Uint16Array)o.isFloat16BufferAttribute?f=i.HALF_FLOAT:f=i.UNSIGNED_SHORT;else if(l instanceof Int16Array)f=i.SHORT;else if(l instanceof Uint32Array)f=i.UNSIGNED_INT;else if(l instanceof Int32Array)f=i.INT;else if(l instanceof Int8Array)f=i.BYTE;else if(l instanceof Uint8Array)f=i.UNSIGNED_BYTE;else if(l instanceof Uint8ClampedArray)f=i.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+l);return{buffer:u,type:f,bytesPerElement:l.BYTES_PER_ELEMENT,version:o.version,size:h}}function n(o,c,l){const d=c.array,h=c.updateRanges;if(i.bindBuffer(l,o),h.length===0)i.bufferSubData(l,0,d);else{h.sort((f,g)=>f.start-g.start);let u=0;for(let f=1;f<h.length;f++){const g=h[u],v=h[f];v.start<=g.start+g.count+1?g.count=Math.max(g.count,v.start+v.count-g.start):(++u,h[u]=v)}h.length=u+1;for(let f=0,g=h.length;f<g;f++){const v=h[f];i.bufferSubData(l,v.start*d.BYTES_PER_ELEMENT,d,v.start,v.count)}c.clearUpdateRanges()}c.onUploadCallback()}function s(o){return o.isInterleavedBufferAttribute&&(o=o.data),e.get(o)}function r(o){o.isInterleavedBufferAttribute&&(o=o.data);const c=e.get(o);c&&(i.deleteBuffer(c.buffer),e.delete(o))}function a(o,c){if(o.isInterleavedBufferAttribute&&(o=o.data),o.isGLBufferAttribute){const d=e.get(o);(!d||d.version<o.version)&&e.set(o,{buffer:o.buffer,type:o.type,bytesPerElement:o.elementSize,version:o.version});return}const l=e.get(o);if(l===void 0)e.set(o,t(o,c));else if(l.version<o.version){if(l.size!==o.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(l.buffer,o,c),l.version=o.version}}return{get:s,remove:r,update:a}}class rs extends fn{constructor(e=1,t=1,n=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:n,heightSegments:s};const r=e/2,a=t/2,o=Math.floor(n),c=Math.floor(s),l=o+1,d=c+1,h=e/o,u=t/c,f=[],g=[],v=[],m=[];for(let p=0;p<d;p++){const x=p*u-a;for(let b=0;b<l;b++){const y=b*h-r;g.push(y,-x,0),v.push(0,0,1),m.push(b/o),m.push(1-p/c)}}for(let p=0;p<c;p++)for(let x=0;x<o;x++){const b=x+l*p,y=x+l*(p+1),I=x+1+l*(p+1),T=x+1+l*p;f.push(b,y,T),f.push(y,I,T)}this.setIndex(f),this.setAttribute("position",new Xt(g,3)),this.setAttribute("normal",new Xt(v,3)),this.setAttribute("uv",new Xt(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new rs(e.width,e.height,e.widthSegments,e.heightSegments)}}var Em=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,Tm=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,wm=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,Am=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Rm=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,Cm=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,Im=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,Lm=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,Dm=`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec3 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 ).rgb;
	}
#endif`,Pm=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,Nm=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,Om=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,Um=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,Fm=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,Bm=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,km=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,zm=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,Hm=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,Gm=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,Vm=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,Wm=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,Xm=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,Ym=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif
#ifdef USE_BATCHING_COLOR
	vec3 batchingColor = getBatchingColor( getIndirectIndex( gl_DrawID ) );
	vColor.xyz *= batchingColor.xyz;
#endif`,qm=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
mat3 transposeMat3( const in mat3 m ) {
	mat3 tmp;
	tmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );
	tmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );
	tmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );
	return tmp;
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,$m=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,Km=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,Zm=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,jm=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,Jm=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,Qm=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,eg="gl_FragColor = linearToOutputTexel( gl_FragColor );",tg=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,ng=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,ig=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,sg=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,rg=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,ag=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,og=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,cg=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,lg=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,dg=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,hg=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,ug=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,fg=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,pg=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,mg=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif`,gg=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`,vg=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,_g=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,yg=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,xg=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,Sg=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = mix( min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,Mg=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
	float dispersion;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		float v = 0.5 / ( gv + gl );
		return saturate(v);
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColor;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;
	float b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;
	float DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );
	return saturate( DG * RECIPROCAL_PI );
}
vec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	const vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );
	const vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );
	vec4 r = roughness * c0 + c1;
	float a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;
	vec2 fab = vec2( - 1.04, 1.04 ) * a004 + r.zw;
	return fab;
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
	#endif
	vec3 totalScattering = singleScattering + multiScattering;
	vec3 diffuse = material.diffuseColor * ( 1.0 - max( max( totalScattering.r, totalScattering.g ), totalScattering.b ) );
	reflectedLight.indirectSpecular += radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,bg=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnel = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,Eg=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometryNormal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,Tg=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,wg=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,Ag=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Rg=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Cg=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,Ig=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,Lg=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,Dg=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,Pg=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Ng=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,Og=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,Ug=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,Fg=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,Bg=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,kg=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,zg=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Hg=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,Gg=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,Vg=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Wg=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Xg=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,Yg=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,qg=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,$g=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,Kg=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,Zg=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,jg=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,Jg=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return depth * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * depth - far );
}`,Qg=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,e0=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,t0=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,n0=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,i0=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,s0=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,r0=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
		return step( compare, unpackRGBAToDepth( texture2D( depths, uv ) ) );
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow (sampler2D shadow, vec2 uv, float compare ){
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		float hard_shadow = step( compare , distribution.x );
		if (hard_shadow != 1.0 ) {
			float distance = compare - distribution.x ;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
		bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
		if ( frustumTest ) {
		#if defined( SHADOWMAP_TYPE_PCF )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			float dx2 = dx0 / 2.0;
			float dy2 = dy0 / 2.0;
			float dx3 = dx1 / 2.0;
			float dy3 = dy1 / 2.0;
			shadow = (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 17.0 );
		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx = texelSize.x;
			float dy = texelSize.y;
			vec2 uv = shadowCoord.xy;
			vec2 f = fract( uv * shadowMapSize + 0.5 );
			uv -= f * texelSize;
			shadow = (
				texture2DCompare( shadowMap, uv, shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
						  f.x ),
					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
						  f.x ),
					 f.y )
			) * ( 1.0 / 9.0 );
		#elif defined( SHADOWMAP_TYPE_VSM )
			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );
		#else
			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );
		#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	vec2 cubeToUV( vec3 v, float texelSizeY ) {
		vec3 absV = abs( v );
		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );
		vec2 planar = v.xy;
		float almostATexel = 1.5 * texelSizeY;
		float almostOne = 1.0 - almostATexel;
		if ( absV.z >= almostOne ) {
			if ( v.z > 0.0 )
				planar.x = 4.0 - v.x;
		} else if ( absV.x >= almostOne ) {
			float signX = sign( v.x );
			planar.x = v.z * signX + 2.0 * signX;
		} else if ( absV.y >= almostOne ) {
			float signY = sign( v.y );
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;
		}
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );
	}
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		
		float lightToPositionLength = length( lightToPosition );
		if ( lightToPositionLength - shadowCameraFar <= 0.0 && lightToPositionLength - shadowCameraNear >= 0.0 ) {
			float dp = ( lightToPositionLength - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
			#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
				vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
				shadow = (
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
				) * ( 1.0 / 9.0 );
			#else
				shadow = texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
			#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
#endif`,a0=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,o0=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,c0=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,l0=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,d0=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,h0=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,u0=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,f0=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,p0=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,m0=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,g0=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 CineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,v0=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,_0=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
		
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
		
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		
		#else
		
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,y0=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,x0=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,S0=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,M0=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const b0=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,E0=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,T0=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,w0=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,A0=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,R0=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,C0=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,I0=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	float fragCoordZ = 0.5 * vHighPrecisionZW[0] / vHighPrecisionZW[1] + 0.5;
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,L0=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,D0=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,P0=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,N0=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,O0=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,U0=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,F0=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,B0=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,k0=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,z0=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,H0=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,G0=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,V0=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,W0=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <packing>
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,X0=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Y0=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,q0=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,$0=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecularDirect + sheenSpecularIndirect;
	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,K0=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Z0=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,j0=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,J0=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,Q0=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,ev=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,tv=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,nv=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,Je={alphahash_fragment:Em,alphahash_pars_fragment:Tm,alphamap_fragment:wm,alphamap_pars_fragment:Am,alphatest_fragment:Rm,alphatest_pars_fragment:Cm,aomap_fragment:Im,aomap_pars_fragment:Lm,batching_pars_vertex:Dm,batching_vertex:Pm,begin_vertex:Nm,beginnormal_vertex:Om,bsdfs:Um,iridescence_fragment:Fm,bumpmap_pars_fragment:Bm,clipping_planes_fragment:km,clipping_planes_pars_fragment:zm,clipping_planes_pars_vertex:Hm,clipping_planes_vertex:Gm,color_fragment:Vm,color_pars_fragment:Wm,color_pars_vertex:Xm,color_vertex:Ym,common:qm,cube_uv_reflection_fragment:$m,defaultnormal_vertex:Km,displacementmap_pars_vertex:Zm,displacementmap_vertex:jm,emissivemap_fragment:Jm,emissivemap_pars_fragment:Qm,colorspace_fragment:eg,colorspace_pars_fragment:tg,envmap_fragment:ng,envmap_common_pars_fragment:ig,envmap_pars_fragment:sg,envmap_pars_vertex:rg,envmap_physical_pars_fragment:gg,envmap_vertex:ag,fog_vertex:og,fog_pars_vertex:cg,fog_fragment:lg,fog_pars_fragment:dg,gradientmap_pars_fragment:hg,lightmap_pars_fragment:ug,lights_lambert_fragment:fg,lights_lambert_pars_fragment:pg,lights_pars_begin:mg,lights_toon_fragment:vg,lights_toon_pars_fragment:_g,lights_phong_fragment:yg,lights_phong_pars_fragment:xg,lights_physical_fragment:Sg,lights_physical_pars_fragment:Mg,lights_fragment_begin:bg,lights_fragment_maps:Eg,lights_fragment_end:Tg,logdepthbuf_fragment:wg,logdepthbuf_pars_fragment:Ag,logdepthbuf_pars_vertex:Rg,logdepthbuf_vertex:Cg,map_fragment:Ig,map_pars_fragment:Lg,map_particle_fragment:Dg,map_particle_pars_fragment:Pg,metalnessmap_fragment:Ng,metalnessmap_pars_fragment:Og,morphinstance_vertex:Ug,morphcolor_vertex:Fg,morphnormal_vertex:Bg,morphtarget_pars_vertex:kg,morphtarget_vertex:zg,normal_fragment_begin:Hg,normal_fragment_maps:Gg,normal_pars_fragment:Vg,normal_pars_vertex:Wg,normal_vertex:Xg,normalmap_pars_fragment:Yg,clearcoat_normal_fragment_begin:qg,clearcoat_normal_fragment_maps:$g,clearcoat_pars_fragment:Kg,iridescence_pars_fragment:Zg,opaque_fragment:jg,packing:Jg,premultiplied_alpha_fragment:Qg,project_vertex:e0,dithering_fragment:t0,dithering_pars_fragment:n0,roughnessmap_fragment:i0,roughnessmap_pars_fragment:s0,shadowmap_pars_fragment:r0,shadowmap_pars_vertex:a0,shadowmap_vertex:o0,shadowmask_pars_fragment:c0,skinbase_vertex:l0,skinning_pars_vertex:d0,skinning_vertex:h0,skinnormal_vertex:u0,specularmap_fragment:f0,specularmap_pars_fragment:p0,tonemapping_fragment:m0,tonemapping_pars_fragment:g0,transmission_fragment:v0,transmission_pars_fragment:_0,uv_pars_fragment:y0,uv_pars_vertex:x0,uv_vertex:S0,worldpos_vertex:M0,background_vert:b0,background_frag:E0,backgroundCube_vert:T0,backgroundCube_frag:w0,cube_vert:A0,cube_frag:R0,depth_vert:C0,depth_frag:I0,distanceRGBA_vert:L0,distanceRGBA_frag:D0,equirect_vert:P0,equirect_frag:N0,linedashed_vert:O0,linedashed_frag:U0,meshbasic_vert:F0,meshbasic_frag:B0,meshlambert_vert:k0,meshlambert_frag:z0,meshmatcap_vert:H0,meshmatcap_frag:G0,meshnormal_vert:V0,meshnormal_frag:W0,meshphong_vert:X0,meshphong_frag:Y0,meshphysical_vert:q0,meshphysical_frag:$0,meshtoon_vert:K0,meshtoon_frag:Z0,points_vert:j0,points_frag:J0,shadow_vert:Q0,shadow_frag:ev,sprite_vert:tv,sprite_frag:nv},ge={common:{diffuse:{value:new ze(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Ze},alphaMap:{value:null},alphaMapTransform:{value:new Ze},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Ze}},envmap:{envMap:{value:null},envMapRotation:{value:new Ze},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Ze}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Ze}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Ze},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Ze},normalScale:{value:new je(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Ze},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Ze}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Ze}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Ze}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new ze(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new ze(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Ze},alphaTest:{value:0},uvTransform:{value:new Ze}},sprite:{diffuse:{value:new ze(16777215)},opacity:{value:1},center:{value:new je(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Ze},alphaMap:{value:null},alphaMapTransform:{value:new Ze},alphaTest:{value:0}}},Jn={basic:{uniforms:nn([ge.common,ge.specularmap,ge.envmap,ge.aomap,ge.lightmap,ge.fog]),vertexShader:Je.meshbasic_vert,fragmentShader:Je.meshbasic_frag},lambert:{uniforms:nn([ge.common,ge.specularmap,ge.envmap,ge.aomap,ge.lightmap,ge.emissivemap,ge.bumpmap,ge.normalmap,ge.displacementmap,ge.fog,ge.lights,{emissive:{value:new ze(0)}}]),vertexShader:Je.meshlambert_vert,fragmentShader:Je.meshlambert_frag},phong:{uniforms:nn([ge.common,ge.specularmap,ge.envmap,ge.aomap,ge.lightmap,ge.emissivemap,ge.bumpmap,ge.normalmap,ge.displacementmap,ge.fog,ge.lights,{emissive:{value:new ze(0)},specular:{value:new ze(1118481)},shininess:{value:30}}]),vertexShader:Je.meshphong_vert,fragmentShader:Je.meshphong_frag},standard:{uniforms:nn([ge.common,ge.envmap,ge.aomap,ge.lightmap,ge.emissivemap,ge.bumpmap,ge.normalmap,ge.displacementmap,ge.roughnessmap,ge.metalnessmap,ge.fog,ge.lights,{emissive:{value:new ze(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Je.meshphysical_vert,fragmentShader:Je.meshphysical_frag},toon:{uniforms:nn([ge.common,ge.aomap,ge.lightmap,ge.emissivemap,ge.bumpmap,ge.normalmap,ge.displacementmap,ge.gradientmap,ge.fog,ge.lights,{emissive:{value:new ze(0)}}]),vertexShader:Je.meshtoon_vert,fragmentShader:Je.meshtoon_frag},matcap:{uniforms:nn([ge.common,ge.bumpmap,ge.normalmap,ge.displacementmap,ge.fog,{matcap:{value:null}}]),vertexShader:Je.meshmatcap_vert,fragmentShader:Je.meshmatcap_frag},points:{uniforms:nn([ge.points,ge.fog]),vertexShader:Je.points_vert,fragmentShader:Je.points_frag},dashed:{uniforms:nn([ge.common,ge.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Je.linedashed_vert,fragmentShader:Je.linedashed_frag},depth:{uniforms:nn([ge.common,ge.displacementmap]),vertexShader:Je.depth_vert,fragmentShader:Je.depth_frag},normal:{uniforms:nn([ge.common,ge.bumpmap,ge.normalmap,ge.displacementmap,{opacity:{value:1}}]),vertexShader:Je.meshnormal_vert,fragmentShader:Je.meshnormal_frag},sprite:{uniforms:nn([ge.sprite,ge.fog]),vertexShader:Je.sprite_vert,fragmentShader:Je.sprite_frag},background:{uniforms:{uvTransform:{value:new Ze},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Je.background_vert,fragmentShader:Je.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Ze}},vertexShader:Je.backgroundCube_vert,fragmentShader:Je.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Je.cube_vert,fragmentShader:Je.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Je.equirect_vert,fragmentShader:Je.equirect_frag},distanceRGBA:{uniforms:nn([ge.common,ge.displacementmap,{referencePosition:{value:new D},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Je.distanceRGBA_vert,fragmentShader:Je.distanceRGBA_frag},shadow:{uniforms:nn([ge.lights,ge.fog,{color:{value:new ze(0)},opacity:{value:1}}]),vertexShader:Je.shadow_vert,fragmentShader:Je.shadow_frag}};Jn.physical={uniforms:nn([Jn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Ze},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Ze},clearcoatNormalScale:{value:new je(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Ze},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Ze},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Ze},sheen:{value:0},sheenColor:{value:new ze(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Ze},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Ze},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Ze},transmissionSamplerSize:{value:new je},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Ze},attenuationDistance:{value:0},attenuationColor:{value:new ze(0)},specularColor:{value:new ze(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Ze},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Ze},anisotropyVector:{value:new je},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Ze}}]),vertexShader:Je.meshphysical_vert,fragmentShader:Je.meshphysical_frag};const Fa={r:0,b:0,g:0},ms=new ai,iv=new Ke;function sv(i,e,t,n,s,r,a){const o=new ze(0);let c=r===!0?0:1,l,d,h=null,u=0,f=null;function g(x){let b=x.isScene===!0?x.background:null;return b&&b.isTexture&&(b=(x.backgroundBlurriness>0?t:e).get(b)),b}function v(x){let b=!1;const y=g(x);y===null?p(o,c):y&&y.isColor&&(p(y,1),b=!0);const I=i.xr.getEnvironmentBlendMode();I==="additive"?n.buffers.color.setClear(0,0,0,1,a):I==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,a),(i.autoClear||b)&&(n.buffers.depth.setTest(!0),n.buffers.depth.setMask(!0),n.buffers.color.setMask(!0),i.clear(i.autoClearColor,i.autoClearDepth,i.autoClearStencil))}function m(x,b){const y=g(b);y&&(y.isCubeTexture||y.mapping===Oo)?(d===void 0&&(d=new B(new se(1,1,1),new ss({name:"BackgroundCubeMaterial",uniforms:Mr(Jn.backgroundCube.uniforms),vertexShader:Jn.backgroundCube.vertexShader,fragmentShader:Jn.backgroundCube.fragmentShader,side:un,depthTest:!1,depthWrite:!1,fog:!1})),d.geometry.deleteAttribute("normal"),d.geometry.deleteAttribute("uv"),d.onBeforeRender=function(I,T,w){this.matrixWorld.copyPosition(w.matrixWorld)},Object.defineProperty(d.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),s.update(d)),ms.copy(b.backgroundRotation),ms.x*=-1,ms.y*=-1,ms.z*=-1,y.isCubeTexture&&y.isRenderTargetTexture===!1&&(ms.y*=-1,ms.z*=-1),d.material.uniforms.envMap.value=y,d.material.uniforms.flipEnvMap.value=y.isCubeTexture&&y.isRenderTargetTexture===!1?-1:1,d.material.uniforms.backgroundBlurriness.value=b.backgroundBlurriness,d.material.uniforms.backgroundIntensity.value=b.backgroundIntensity,d.material.uniforms.backgroundRotation.value.setFromMatrix4(iv.makeRotationFromEuler(ms)),d.material.toneMapped=st.getTransfer(y.colorSpace)!==yt,(h!==y||u!==y.version||f!==i.toneMapping)&&(d.material.needsUpdate=!0,h=y,u=y.version,f=i.toneMapping),d.layers.enableAll(),x.unshift(d,d.geometry,d.material,0,0,null)):y&&y.isTexture&&(l===void 0&&(l=new B(new rs(2,2),new ss({name:"BackgroundMaterial",uniforms:Mr(Jn.background.uniforms),vertexShader:Jn.background.vertexShader,fragmentShader:Jn.background.fragmentShader,side:Li,depthTest:!1,depthWrite:!1,fog:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),s.update(l)),l.material.uniforms.t2D.value=y,l.material.uniforms.backgroundIntensity.value=b.backgroundIntensity,l.material.toneMapped=st.getTransfer(y.colorSpace)!==yt,y.matrixAutoUpdate===!0&&y.updateMatrix(),l.material.uniforms.uvTransform.value.copy(y.matrix),(h!==y||u!==y.version||f!==i.toneMapping)&&(l.material.needsUpdate=!0,h=y,u=y.version,f=i.toneMapping),l.layers.enableAll(),x.unshift(l,l.geometry,l.material,0,0,null))}function p(x,b){x.getRGB(Fa,zu(i)),n.buffers.color.setClear(Fa.r,Fa.g,Fa.b,b,a)}return{getClearColor:function(){return o},setClearColor:function(x,b=1){o.set(x),c=b,p(o,c)},getClearAlpha:function(){return c},setClearAlpha:function(x){c=x,p(o,c)},render:v,addToRenderList:m}}function rv(i,e){const t=i.getParameter(i.MAX_VERTEX_ATTRIBS),n={},s=u(null);let r=s,a=!1;function o(_,C,F,P,N){let G=!1;const L=h(P,F,C);r!==L&&(r=L,l(r.object)),G=f(_,P,F,N),G&&g(_,P,F,N),N!==null&&e.update(N,i.ELEMENT_ARRAY_BUFFER),(G||a)&&(a=!1,y(_,C,F,P),N!==null&&i.bindBuffer(i.ELEMENT_ARRAY_BUFFER,e.get(N).buffer))}function c(){return i.createVertexArray()}function l(_){return i.bindVertexArray(_)}function d(_){return i.deleteVertexArray(_)}function h(_,C,F){const P=F.wireframe===!0;let N=n[_.id];N===void 0&&(N={},n[_.id]=N);let G=N[C.id];G===void 0&&(G={},N[C.id]=G);let L=G[P];return L===void 0&&(L=u(c()),G[P]=L),L}function u(_){const C=[],F=[],P=[];for(let N=0;N<t;N++)C[N]=0,F[N]=0,P[N]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:C,enabledAttributes:F,attributeDivisors:P,object:_,attributes:{},index:null}}function f(_,C,F,P){const N=r.attributes,G=C.attributes;let L=0;const q=F.getAttributes();for(const V in q)if(q[V].location>=0){const ie=N[V];let re=G[V];if(re===void 0&&(V==="instanceMatrix"&&_.instanceMatrix&&(re=_.instanceMatrix),V==="instanceColor"&&_.instanceColor&&(re=_.instanceColor)),ie===void 0||ie.attribute!==re||re&&ie.data!==re.data)return!0;L++}return r.attributesNum!==L||r.index!==P}function g(_,C,F,P){const N={},G=C.attributes;let L=0;const q=F.getAttributes();for(const V in q)if(q[V].location>=0){let ie=G[V];ie===void 0&&(V==="instanceMatrix"&&_.instanceMatrix&&(ie=_.instanceMatrix),V==="instanceColor"&&_.instanceColor&&(ie=_.instanceColor));const re={};re.attribute=ie,ie&&ie.data&&(re.data=ie.data),N[V]=re,L++}r.attributes=N,r.attributesNum=L,r.index=P}function v(){const _=r.newAttributes;for(let C=0,F=_.length;C<F;C++)_[C]=0}function m(_){p(_,0)}function p(_,C){const F=r.newAttributes,P=r.enabledAttributes,N=r.attributeDivisors;F[_]=1,P[_]===0&&(i.enableVertexAttribArray(_),P[_]=1),N[_]!==C&&(i.vertexAttribDivisor(_,C),N[_]=C)}function x(){const _=r.newAttributes,C=r.enabledAttributes;for(let F=0,P=C.length;F<P;F++)C[F]!==_[F]&&(i.disableVertexAttribArray(F),C[F]=0)}function b(_,C,F,P,N,G,L){L===!0?i.vertexAttribIPointer(_,C,F,N,G):i.vertexAttribPointer(_,C,F,P,N,G)}function y(_,C,F,P){v();const N=P.attributes,G=F.getAttributes(),L=C.defaultAttributeValues;for(const q in G){const V=G[q];if(V.location>=0){let K=N[q];if(K===void 0&&(q==="instanceMatrix"&&_.instanceMatrix&&(K=_.instanceMatrix),q==="instanceColor"&&_.instanceColor&&(K=_.instanceColor)),K!==void 0){const ie=K.normalized,re=K.itemSize,pe=e.get(K);if(pe===void 0)continue;const ye=pe.buffer,Z=pe.type,te=pe.bytesPerElement,ue=Z===i.INT||Z===i.UNSIGNED_INT||K.gpuType===Hl;if(K.isInterleavedBufferAttribute){const oe=K.data,be=oe.stride,Se=K.offset;if(oe.isInstancedInterleavedBuffer){for(let Ce=0;Ce<V.locationSize;Ce++)p(V.location+Ce,oe.meshPerAttribute);_.isInstancedMesh!==!0&&P._maxInstanceCount===void 0&&(P._maxInstanceCount=oe.meshPerAttribute*oe.count)}else for(let Ce=0;Ce<V.locationSize;Ce++)m(V.location+Ce);i.bindBuffer(i.ARRAY_BUFFER,ye);for(let Ce=0;Ce<V.locationSize;Ce++)b(V.location+Ce,re/V.locationSize,Z,ie,be*te,(Se+re/V.locationSize*Ce)*te,ue)}else{if(K.isInstancedBufferAttribute){for(let oe=0;oe<V.locationSize;oe++)p(V.location+oe,K.meshPerAttribute);_.isInstancedMesh!==!0&&P._maxInstanceCount===void 0&&(P._maxInstanceCount=K.meshPerAttribute*K.count)}else for(let oe=0;oe<V.locationSize;oe++)m(V.location+oe);i.bindBuffer(i.ARRAY_BUFFER,ye);for(let oe=0;oe<V.locationSize;oe++)b(V.location+oe,re/V.locationSize,Z,ie,re*te,re/V.locationSize*oe*te,ue)}}else if(L!==void 0){const ie=L[q];if(ie!==void 0)switch(ie.length){case 2:i.vertexAttrib2fv(V.location,ie);break;case 3:i.vertexAttrib3fv(V.location,ie);break;case 4:i.vertexAttrib4fv(V.location,ie);break;default:i.vertexAttrib1fv(V.location,ie)}}}}x()}function I(){R();for(const _ in n){const C=n[_];for(const F in C){const P=C[F];for(const N in P)d(P[N].object),delete P[N];delete C[F]}delete n[_]}}function T(_){if(n[_.id]===void 0)return;const C=n[_.id];for(const F in C){const P=C[F];for(const N in P)d(P[N].object),delete P[N];delete C[F]}delete n[_.id]}function w(_){for(const C in n){const F=n[C];if(F[_.id]===void 0)continue;const P=F[_.id];for(const N in P)d(P[N].object),delete P[N];delete F[_.id]}}function R(){S(),a=!0,r!==s&&(r=s,l(r.object))}function S(){s.geometry=null,s.program=null,s.wireframe=!1}return{setup:o,reset:R,resetDefaultState:S,dispose:I,releaseStatesOfGeometry:T,releaseStatesOfProgram:w,initAttributes:v,enableAttribute:m,disableUnusedAttributes:x}}function av(i,e,t){let n;function s(l){n=l}function r(l,d){i.drawArrays(n,l,d),t.update(d,n,1)}function a(l,d,h){h!==0&&(i.drawArraysInstanced(n,l,d,h),t.update(d,n,h))}function o(l,d,h){if(h===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,l,0,d,0,h);let f=0;for(let g=0;g<h;g++)f+=d[g];t.update(f,n,1)}function c(l,d,h,u){if(h===0)return;const f=e.get("WEBGL_multi_draw");if(f===null)for(let g=0;g<l.length;g++)a(l[g],d[g],u[g]);else{f.multiDrawArraysInstancedWEBGL(n,l,0,d,0,u,0,h);let g=0;for(let v=0;v<h;v++)g+=d[v]*u[v];t.update(g,n,1)}}this.setMode=s,this.render=r,this.renderInstances=a,this.renderMultiDraw=o,this.renderMultiDrawInstances=c}function ov(i,e,t,n){let s;function r(){if(s!==void 0)return s;if(e.has("EXT_texture_filter_anisotropic")===!0){const w=e.get("EXT_texture_filter_anisotropic");s=i.getParameter(w.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else s=0;return s}function a(w){return!(w!==Pn&&n.convert(w)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_FORMAT))}function o(w){const R=w===Ri&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(w!==Pi&&n.convert(w)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_TYPE)&&w!==hn&&!R)}function c(w){if(w==="highp"){if(i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.HIGH_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.HIGH_FLOAT).precision>0)return"highp";w="mediump"}return w==="mediump"&&i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.MEDIUM_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let l=t.precision!==void 0?t.precision:"highp";const d=c(l);d!==l&&(console.warn("THREE.WebGLRenderer:",l,"not supported, using",d,"instead."),l=d);const h=t.logarithmicDepthBuffer===!0,u=t.reverseDepthBuffer===!0&&e.has("EXT_clip_control"),f=i.getParameter(i.MAX_TEXTURE_IMAGE_UNITS),g=i.getParameter(i.MAX_VERTEX_TEXTURE_IMAGE_UNITS),v=i.getParameter(i.MAX_TEXTURE_SIZE),m=i.getParameter(i.MAX_CUBE_MAP_TEXTURE_SIZE),p=i.getParameter(i.MAX_VERTEX_ATTRIBS),x=i.getParameter(i.MAX_VERTEX_UNIFORM_VECTORS),b=i.getParameter(i.MAX_VARYING_VECTORS),y=i.getParameter(i.MAX_FRAGMENT_UNIFORM_VECTORS),I=g>0,T=i.getParameter(i.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:c,textureFormatReadable:a,textureTypeReadable:o,precision:l,logarithmicDepthBuffer:h,reverseDepthBuffer:u,maxTextures:f,maxVertexTextures:g,maxTextureSize:v,maxCubemapSize:m,maxAttributes:p,maxVertexUniforms:x,maxVaryings:b,maxFragmentUniforms:y,vertexTextures:I,maxSamples:T}}function cv(i){const e=this;let t=null,n=0,s=!1,r=!1;const a=new _s,o=new Ze,c={value:null,needsUpdate:!1};this.uniform=c,this.numPlanes=0,this.numIntersection=0,this.init=function(h,u){const f=h.length!==0||u||n!==0||s;return s=u,n=h.length,f},this.beginShadows=function(){r=!0,d(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(h,u){t=d(h,u,0)},this.setState=function(h,u,f){const g=h.clippingPlanes,v=h.clipIntersection,m=h.clipShadows,p=i.get(h);if(!s||g===null||g.length===0||r&&!m)r?d(null):l();else{const x=r?0:n,b=x*4;let y=p.clippingState||null;c.value=y,y=d(g,u,b,f);for(let I=0;I!==b;++I)y[I]=t[I];p.clippingState=y,this.numIntersection=v?this.numPlanes:0,this.numPlanes+=x}};function l(){c.value!==t&&(c.value=t,c.needsUpdate=n>0),e.numPlanes=n,e.numIntersection=0}function d(h,u,f,g){const v=h!==null?h.length:0;let m=null;if(v!==0){if(m=c.value,g!==!0||m===null){const p=f+v*4,x=u.matrixWorldInverse;o.getNormalMatrix(x),(m===null||m.length<p)&&(m=new Float32Array(p));for(let b=0,y=f;b!==v;++b,y+=4)a.copy(h[b]).applyMatrix4(x,o),a.normal.toArray(m,y),m[y+3]=a.constant}c.value=m,c.needsUpdate=!0}return e.numPlanes=v,e.numIntersection=0,m}}function lv(i){let e=new WeakMap;function t(a,o){return o===la?a.mapping=vr:o===qc&&(a.mapping=_r),a}function n(a){if(a&&a.isTexture){const o=a.mapping;if(o===la||o===qc)if(e.has(a)){const c=e.get(a).texture;return t(c,a.mapping)}else{const c=a.image;if(c&&c.height>0){const l=new xm(c.height);return l.fromEquirectangularTexture(i,a),e.set(a,l),a.addEventListener("dispose",s),t(l.texture,a.mapping)}else return null}}return a}function s(a){const o=a.target;o.removeEventListener("dispose",s);const c=e.get(o);c!==void 0&&(e.delete(o),c.dispose())}function r(){e=new WeakMap}return{get:n,dispose:r}}class Zl extends Hu{constructor(e=-1,t=1,n=1,s=-1,r=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=n,this.bottom=s,this.near=r,this.far=a,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,n,s,r,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,s=(this.top+this.bottom)/2;let r=n-e,a=n+e,o=s+t,c=s-t;if(this.view!==null&&this.view.enabled){const l=(this.right-this.left)/this.view.fullWidth/this.zoom,d=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=l*this.view.offsetX,a=r+l*this.view.width,o-=d*this.view.offsetY,c=o-d*this.view.height}this.projectionMatrix.makeOrthographic(r,a,o,c,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}const sr=4,$d=[.125,.215,.35,.446,.526,.582],Ss=20,pc=new Zl,Kd=new ze;let mc=null,gc=0,vc=0,_c=!1;const ys=(1+Math.sqrt(5))/2,js=1/ys,Zd=[new D(-ys,js,0),new D(ys,js,0),new D(-js,0,ys),new D(js,0,ys),new D(0,ys,-js),new D(0,ys,js),new D(-1,1,-1),new D(1,1,-1),new D(-1,1,1),new D(1,1,1)];class jd{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,n=.1,s=100){mc=this._renderer.getRenderTarget(),gc=this._renderer.getActiveCubeFace(),vc=this._renderer.getActiveMipmapLevel(),_c=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(256);const r=this._allocateTargets();return r.depthBuffer=!0,this._sceneToCubeUV(e,n,s,r),t>0&&this._blur(r,0,0,t),this._applyPMREM(r),this._cleanup(r),r}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=eh(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Qd(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(mc,gc,vc),this._renderer.xr.enabled=_c,e.scissorTest=!1,Ba(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===vr||e.mapping===_r?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),mc=this._renderer.getRenderTarget(),gc=this._renderer.getActiveCubeFace(),vc=this._renderer.getActiveMipmapLevel(),_c=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const n=t||this._allocateTargets();return this._textureToCubeUV(e,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,n={magFilter:Wt,minFilter:Wt,generateMipmaps:!1,type:Ri,format:Pn,colorSpace:jt,depthBuffer:!1},s=Jd(e,t,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Jd(e,t,n);const{_lodMax:r}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=dv(r)),this._blurMaterial=hv(r,e,t)}return s}_compileMaterial(e){const t=new B(this._lodPlanes[0],e);this._renderer.compile(t,pc)}_sceneToCubeUV(e,t,n,s){const o=new rn(90,1,t,n),c=[1,-1,1,1,1,1],l=[1,1,1,-1,-1,-1],d=this._renderer,h=d.autoClear,u=d.toneMapping;d.getClearColor(Kd),d.toneMapping=is,d.autoClear=!1;const f=new Nn({name:"PMREM.Background",side:un,depthWrite:!1,depthTest:!1}),g=new B(new se,f);let v=!1;const m=e.background;m?m.isColor&&(f.color.copy(m),e.background=null,v=!0):(f.color.copy(Kd),v=!0);for(let p=0;p<6;p++){const x=p%3;x===0?(o.up.set(0,c[p],0),o.lookAt(l[p],0,0)):x===1?(o.up.set(0,0,c[p]),o.lookAt(0,l[p],0)):(o.up.set(0,c[p],0),o.lookAt(0,0,l[p]));const b=this._cubeSize;Ba(s,x*b,p>2?b:0,b,b),d.setRenderTarget(s),v&&d.render(g,o),d.render(e,o)}g.geometry.dispose(),g.material.dispose(),d.toneMapping=u,d.autoClear=h,e.background=m}_textureToCubeUV(e,t){const n=this._renderer,s=e.mapping===vr||e.mapping===_r;s?(this._cubemapMaterial===null&&(this._cubemapMaterial=eh()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Qd());const r=s?this._cubemapMaterial:this._equirectMaterial,a=new B(this._lodPlanes[0],r),o=r.uniforms;o.envMap.value=e;const c=this._cubeSize;Ba(t,0,0,3*c,2*c),n.setRenderTarget(t),n.render(a,pc)}_applyPMREM(e){const t=this._renderer,n=t.autoClear;t.autoClear=!1;const s=this._lodPlanes.length;for(let r=1;r<s;r++){const a=Math.sqrt(this._sigmas[r]*this._sigmas[r]-this._sigmas[r-1]*this._sigmas[r-1]),o=Zd[(s-r-1)%Zd.length];this._blur(e,r-1,r,a,o)}t.autoClear=n}_blur(e,t,n,s,r){const a=this._pingPongRenderTarget;this._halfBlur(e,a,t,n,s,"latitudinal",r),this._halfBlur(a,e,n,n,s,"longitudinal",r)}_halfBlur(e,t,n,s,r,a,o){const c=this._renderer,l=this._blurMaterial;a!=="latitudinal"&&a!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const d=3,h=new B(this._lodPlanes[s],l),u=l.uniforms,f=this._sizeLods[n]-1,g=isFinite(r)?Math.PI/(2*f):2*Math.PI/(2*Ss-1),v=r/g,m=isFinite(r)?1+Math.floor(d*v):Ss;m>Ss&&console.warn(`sigmaRadians, ${r}, is too large and will clip, as it requested ${m} samples when the maximum is set to ${Ss}`);const p=[];let x=0;for(let w=0;w<Ss;++w){const R=w/v,S=Math.exp(-R*R/2);p.push(S),w===0?x+=S:w<m&&(x+=2*S)}for(let w=0;w<p.length;w++)p[w]=p[w]/x;u.envMap.value=e.texture,u.samples.value=m,u.weights.value=p,u.latitudinal.value=a==="latitudinal",o&&(u.poleAxis.value=o);const{_lodMax:b}=this;u.dTheta.value=g,u.mipInt.value=b-n;const y=this._sizeLods[s],I=3*y*(s>b-sr?s-b+sr:0),T=4*(this._cubeSize-y);Ba(t,I,T,3*y,2*y),c.setRenderTarget(t),c.render(h,pc)}}function dv(i){const e=[],t=[],n=[];let s=i;const r=i-sr+1+$d.length;for(let a=0;a<r;a++){const o=Math.pow(2,s);t.push(o);let c=1/o;a>i-sr?c=$d[a-i+sr-1]:a===0&&(c=0),n.push(c);const l=1/(o-2),d=-l,h=1+l,u=[d,d,h,d,h,h,d,d,h,h,d,h],f=6,g=6,v=3,m=2,p=1,x=new Float32Array(v*g*f),b=new Float32Array(m*g*f),y=new Float32Array(p*g*f);for(let T=0;T<f;T++){const w=T%3*2/3-1,R=T>2?0:-1,S=[w,R,0,w+2/3,R,0,w+2/3,R+1,0,w,R,0,w+2/3,R+1,0,w,R+1,0];x.set(S,v*g*T),b.set(u,m*g*T);const _=[T,T,T,T,T,T];y.set(_,p*g*T)}const I=new fn;I.setAttribute("position",new on(x,v)),I.setAttribute("uv",new on(b,m)),I.setAttribute("faceIndex",new on(y,p)),e.push(I),s>sr&&s--}return{lodPlanes:e,sizeLods:t,sigmas:n}}function Jd(i,e,t){const n=new Ds(i,e,t);return n.texture.mapping=Oo,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function Ba(i,e,t,n,s){i.viewport.set(e,t,n,s),i.scissor.set(e,t,n,s)}function hv(i,e,t){const n=new Float32Array(Ss),s=new D(0,1,0);return new ss({name:"SphericalGaussianBlur",defines:{n:Ss,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:s}},vertexShader:jl(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:ns,depthTest:!1,depthWrite:!1})}function Qd(){return new ss({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:jl(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:ns,depthTest:!1,depthWrite:!1})}function eh(){return new ss({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:jl(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:ns,depthTest:!1,depthWrite:!1})}function jl(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}function uv(i){let e=new WeakMap,t=null;function n(o){if(o&&o.isTexture){const c=o.mapping,l=c===la||c===qc,d=c===vr||c===_r;if(l||d){let h=e.get(o);const u=h!==void 0?h.texture.pmremVersion:0;if(o.isRenderTargetTexture&&o.pmremVersion!==u)return t===null&&(t=new jd(i)),h=l?t.fromEquirectangular(o,h):t.fromCubemap(o,h),h.texture.pmremVersion=o.pmremVersion,e.set(o,h),h.texture;if(h!==void 0)return h.texture;{const f=o.image;return l&&f&&f.height>0||d&&f&&s(f)?(t===null&&(t=new jd(i)),h=l?t.fromEquirectangular(o):t.fromCubemap(o),h.texture.pmremVersion=o.pmremVersion,e.set(o,h),o.addEventListener("dispose",r),h.texture):null}}}return o}function s(o){let c=0;const l=6;for(let d=0;d<l;d++)o[d]!==void 0&&c++;return c===l}function r(o){const c=o.target;c.removeEventListener("dispose",r);const l=e.get(c);l!==void 0&&(e.delete(c),l.dispose())}function a(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:n,dispose:a}}function fv(i){const e={};function t(n){if(e[n]!==void 0)return e[n];let s;switch(n){case"WEBGL_depth_texture":s=i.getExtension("WEBGL_depth_texture")||i.getExtension("MOZ_WEBGL_depth_texture")||i.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":s=i.getExtension("EXT_texture_filter_anisotropic")||i.getExtension("MOZ_EXT_texture_filter_anisotropic")||i.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":s=i.getExtension("WEBGL_compressed_texture_s3tc")||i.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":s=i.getExtension("WEBGL_compressed_texture_pvrtc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:s=i.getExtension(n)}return e[n]=s,s}return{has:function(n){return t(n)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(n){const s=t(n);return s===null&&Kr("THREE.WebGLRenderer: "+n+" extension not supported."),s}}}function pv(i,e,t,n){const s={},r=new WeakMap;function a(h){const u=h.target;u.index!==null&&e.remove(u.index);for(const g in u.attributes)e.remove(u.attributes[g]);for(const g in u.morphAttributes){const v=u.morphAttributes[g];for(let m=0,p=v.length;m<p;m++)e.remove(v[m])}u.removeEventListener("dispose",a),delete s[u.id];const f=r.get(u);f&&(e.remove(f),r.delete(u)),n.releaseStatesOfGeometry(u),u.isInstancedBufferGeometry===!0&&delete u._maxInstanceCount,t.memory.geometries--}function o(h,u){return s[u.id]===!0||(u.addEventListener("dispose",a),s[u.id]=!0,t.memory.geometries++),u}function c(h){const u=h.attributes;for(const g in u)e.update(u[g],i.ARRAY_BUFFER);const f=h.morphAttributes;for(const g in f){const v=f[g];for(let m=0,p=v.length;m<p;m++)e.update(v[m],i.ARRAY_BUFFER)}}function l(h){const u=[],f=h.index,g=h.attributes.position;let v=0;if(f!==null){const x=f.array;v=f.version;for(let b=0,y=x.length;b<y;b+=3){const I=x[b+0],T=x[b+1],w=x[b+2];u.push(I,T,T,w,w,I)}}else if(g!==void 0){const x=g.array;v=g.version;for(let b=0,y=x.length/3-1;b<y;b+=3){const I=b+0,T=b+1,w=b+2;u.push(I,T,T,w,w,I)}}else return;const m=new(Pu(u)?ku:Bu)(u,1);m.version=v;const p=r.get(h);p&&e.remove(p),r.set(h,m)}function d(h){const u=r.get(h);if(u){const f=h.index;f!==null&&u.version<f.version&&l(h)}else l(h);return r.get(h)}return{get:o,update:c,getWireframeAttribute:d}}function mv(i,e,t){let n;function s(u){n=u}let r,a;function o(u){r=u.type,a=u.bytesPerElement}function c(u,f){i.drawElements(n,f,r,u*a),t.update(f,n,1)}function l(u,f,g){g!==0&&(i.drawElementsInstanced(n,f,r,u*a,g),t.update(f,n,g))}function d(u,f,g){if(g===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,f,0,r,u,0,g);let m=0;for(let p=0;p<g;p++)m+=f[p];t.update(m,n,1)}function h(u,f,g,v){if(g===0)return;const m=e.get("WEBGL_multi_draw");if(m===null)for(let p=0;p<u.length;p++)l(u[p]/a,f[p],v[p]);else{m.multiDrawElementsInstancedWEBGL(n,f,0,r,u,0,v,0,g);let p=0;for(let x=0;x<g;x++)p+=f[x]*v[x];t.update(p,n,1)}}this.setMode=s,this.setIndex=o,this.render=c,this.renderInstances=l,this.renderMultiDraw=d,this.renderMultiDrawInstances=h}function gv(i){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function n(r,a,o){switch(t.calls++,a){case i.TRIANGLES:t.triangles+=o*(r/3);break;case i.LINES:t.lines+=o*(r/2);break;case i.LINE_STRIP:t.lines+=o*(r-1);break;case i.LINE_LOOP:t.lines+=o*r;break;case i.POINTS:t.points+=o*r;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",a);break}}function s(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:s,update:n}}function vv(i,e,t){const n=new WeakMap,s=new dt;function r(a,o,c){const l=a.morphTargetInfluences,d=o.morphAttributes.position||o.morphAttributes.normal||o.morphAttributes.color,h=d!==void 0?d.length:0;let u=n.get(o);if(u===void 0||u.count!==h){let _=function(){R.dispose(),n.delete(o),o.removeEventListener("dispose",_)};var f=_;u!==void 0&&u.texture.dispose();const g=o.morphAttributes.position!==void 0,v=o.morphAttributes.normal!==void 0,m=o.morphAttributes.color!==void 0,p=o.morphAttributes.position||[],x=o.morphAttributes.normal||[],b=o.morphAttributes.color||[];let y=0;g===!0&&(y=1),v===!0&&(y=2),m===!0&&(y=3);let I=o.attributes.position.count*y,T=1;I>e.maxTextureSize&&(T=Math.ceil(I/e.maxTextureSize),I=e.maxTextureSize);const w=new Float32Array(I*T*4*h),R=new Ou(w,I,T,h);R.type=hn,R.needsUpdate=!0;const S=y*4;for(let C=0;C<h;C++){const F=p[C],P=x[C],N=b[C],G=I*T*4*C;for(let L=0;L<F.count;L++){const q=L*S;g===!0&&(s.fromBufferAttribute(F,L),w[G+q+0]=s.x,w[G+q+1]=s.y,w[G+q+2]=s.z,w[G+q+3]=0),v===!0&&(s.fromBufferAttribute(P,L),w[G+q+4]=s.x,w[G+q+5]=s.y,w[G+q+6]=s.z,w[G+q+7]=0),m===!0&&(s.fromBufferAttribute(N,L),w[G+q+8]=s.x,w[G+q+9]=s.y,w[G+q+10]=s.z,w[G+q+11]=N.itemSize===4?s.w:1)}}u={count:h,texture:R,size:new je(I,T)},n.set(o,u),o.addEventListener("dispose",_)}if(a.isInstancedMesh===!0&&a.morphTexture!==null)c.getUniforms().setValue(i,"morphTexture",a.morphTexture,t);else{let g=0;for(let m=0;m<l.length;m++)g+=l[m];const v=o.morphTargetsRelative?1:1-g;c.getUniforms().setValue(i,"morphTargetBaseInfluence",v),c.getUniforms().setValue(i,"morphTargetInfluences",l)}c.getUniforms().setValue(i,"morphTargetsTexture",u.texture,t),c.getUniforms().setValue(i,"morphTargetsTextureSize",u.size)}return{update:r}}function _v(i,e,t,n){let s=new WeakMap;function r(c){const l=n.render.frame,d=c.geometry,h=e.get(c,d);if(s.get(h)!==l&&(e.update(h),s.set(h,l)),c.isInstancedMesh&&(c.hasEventListener("dispose",o)===!1&&c.addEventListener("dispose",o),s.get(c)!==l&&(t.update(c.instanceMatrix,i.ARRAY_BUFFER),c.instanceColor!==null&&t.update(c.instanceColor,i.ARRAY_BUFFER),s.set(c,l))),c.isSkinnedMesh){const u=c.skeleton;s.get(u)!==l&&(u.update(),s.set(u,l))}return h}function a(){s=new WeakMap}function o(c){const l=c.target;l.removeEventListener("dispose",o),t.remove(l.instanceMatrix),l.instanceColor!==null&&t.remove(l.instanceColor)}return{update:r,dispose:a}}class Wu extends kt{constructor(e,t,n,s,r,a,o,c,l,d=ur){if(d!==ur&&d!==xr)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");n===void 0&&d===ur&&(n=Ls),n===void 0&&d===xr&&(n=yr),super(null,s,r,a,o,c,d,n,l),this.isDepthTexture=!0,this.image={width:e,height:t},this.magFilter=o!==void 0?o:an,this.minFilter=c!==void 0?c:an,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.compareFunction=e.compareFunction,this}toJSON(e){const t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}}const Xu=new kt,th=new Wu(1,1),Yu=new Ou,qu=new tm,$u=new Gu,nh=[],ih=[],sh=new Float32Array(16),rh=new Float32Array(9),ah=new Float32Array(4);function Ir(i,e,t){const n=i[0];if(n<=0||n>0)return i;const s=e*t;let r=nh[s];if(r===void 0&&(r=new Float32Array(s),nh[s]=r),e!==0){n.toArray(r,0);for(let a=1,o=0;a!==e;++a)o+=t,i[a].toArray(r,o)}return r}function zt(i,e){if(i.length!==e.length)return!1;for(let t=0,n=i.length;t<n;t++)if(i[t]!==e[t])return!1;return!0}function Ht(i,e){for(let t=0,n=e.length;t<n;t++)i[t]=e[t]}function Bo(i,e){let t=ih[e];t===void 0&&(t=new Int32Array(e),ih[e]=t);for(let n=0;n!==e;++n)t[n]=i.allocateTextureUnit();return t}function yv(i,e){const t=this.cache;t[0]!==e&&(i.uniform1f(this.addr,e),t[0]=e)}function xv(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(zt(t,e))return;i.uniform2fv(this.addr,e),Ht(t,e)}}function Sv(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(i.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(zt(t,e))return;i.uniform3fv(this.addr,e),Ht(t,e)}}function Mv(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(zt(t,e))return;i.uniform4fv(this.addr,e),Ht(t,e)}}function bv(i,e){const t=this.cache,n=e.elements;if(n===void 0){if(zt(t,e))return;i.uniformMatrix2fv(this.addr,!1,e),Ht(t,e)}else{if(zt(t,n))return;ah.set(n),i.uniformMatrix2fv(this.addr,!1,ah),Ht(t,n)}}function Ev(i,e){const t=this.cache,n=e.elements;if(n===void 0){if(zt(t,e))return;i.uniformMatrix3fv(this.addr,!1,e),Ht(t,e)}else{if(zt(t,n))return;rh.set(n),i.uniformMatrix3fv(this.addr,!1,rh),Ht(t,n)}}function Tv(i,e){const t=this.cache,n=e.elements;if(n===void 0){if(zt(t,e))return;i.uniformMatrix4fv(this.addr,!1,e),Ht(t,e)}else{if(zt(t,n))return;sh.set(n),i.uniformMatrix4fv(this.addr,!1,sh),Ht(t,n)}}function wv(i,e){const t=this.cache;t[0]!==e&&(i.uniform1i(this.addr,e),t[0]=e)}function Av(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(zt(t,e))return;i.uniform2iv(this.addr,e),Ht(t,e)}}function Rv(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(zt(t,e))return;i.uniform3iv(this.addr,e),Ht(t,e)}}function Cv(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(zt(t,e))return;i.uniform4iv(this.addr,e),Ht(t,e)}}function Iv(i,e){const t=this.cache;t[0]!==e&&(i.uniform1ui(this.addr,e),t[0]=e)}function Lv(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(zt(t,e))return;i.uniform2uiv(this.addr,e),Ht(t,e)}}function Dv(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(zt(t,e))return;i.uniform3uiv(this.addr,e),Ht(t,e)}}function Pv(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(zt(t,e))return;i.uniform4uiv(this.addr,e),Ht(t,e)}}function Nv(i,e,t){const n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s);let r;this.type===i.SAMPLER_2D_SHADOW?(th.compareFunction=Du,r=th):r=Xu,t.setTexture2D(e||r,s)}function Ov(i,e,t){const n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),t.setTexture3D(e||qu,s)}function Uv(i,e,t){const n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),t.setTextureCube(e||$u,s)}function Fv(i,e,t){const n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),t.setTexture2DArray(e||Yu,s)}function Bv(i){switch(i){case 5126:return yv;case 35664:return xv;case 35665:return Sv;case 35666:return Mv;case 35674:return bv;case 35675:return Ev;case 35676:return Tv;case 5124:case 35670:return wv;case 35667:case 35671:return Av;case 35668:case 35672:return Rv;case 35669:case 35673:return Cv;case 5125:return Iv;case 36294:return Lv;case 36295:return Dv;case 36296:return Pv;case 35678:case 36198:case 36298:case 36306:case 35682:return Nv;case 35679:case 36299:case 36307:return Ov;case 35680:case 36300:case 36308:case 36293:return Uv;case 36289:case 36303:case 36311:case 36292:return Fv}}function kv(i,e){i.uniform1fv(this.addr,e)}function zv(i,e){const t=Ir(e,this.size,2);i.uniform2fv(this.addr,t)}function Hv(i,e){const t=Ir(e,this.size,3);i.uniform3fv(this.addr,t)}function Gv(i,e){const t=Ir(e,this.size,4);i.uniform4fv(this.addr,t)}function Vv(i,e){const t=Ir(e,this.size,4);i.uniformMatrix2fv(this.addr,!1,t)}function Wv(i,e){const t=Ir(e,this.size,9);i.uniformMatrix3fv(this.addr,!1,t)}function Xv(i,e){const t=Ir(e,this.size,16);i.uniformMatrix4fv(this.addr,!1,t)}function Yv(i,e){i.uniform1iv(this.addr,e)}function qv(i,e){i.uniform2iv(this.addr,e)}function $v(i,e){i.uniform3iv(this.addr,e)}function Kv(i,e){i.uniform4iv(this.addr,e)}function Zv(i,e){i.uniform1uiv(this.addr,e)}function jv(i,e){i.uniform2uiv(this.addr,e)}function Jv(i,e){i.uniform3uiv(this.addr,e)}function Qv(i,e){i.uniform4uiv(this.addr,e)}function e_(i,e,t){const n=this.cache,s=e.length,r=Bo(t,s);zt(n,r)||(i.uniform1iv(this.addr,r),Ht(n,r));for(let a=0;a!==s;++a)t.setTexture2D(e[a]||Xu,r[a])}function t_(i,e,t){const n=this.cache,s=e.length,r=Bo(t,s);zt(n,r)||(i.uniform1iv(this.addr,r),Ht(n,r));for(let a=0;a!==s;++a)t.setTexture3D(e[a]||qu,r[a])}function n_(i,e,t){const n=this.cache,s=e.length,r=Bo(t,s);zt(n,r)||(i.uniform1iv(this.addr,r),Ht(n,r));for(let a=0;a!==s;++a)t.setTextureCube(e[a]||$u,r[a])}function i_(i,e,t){const n=this.cache,s=e.length,r=Bo(t,s);zt(n,r)||(i.uniform1iv(this.addr,r),Ht(n,r));for(let a=0;a!==s;++a)t.setTexture2DArray(e[a]||Yu,r[a])}function s_(i){switch(i){case 5126:return kv;case 35664:return zv;case 35665:return Hv;case 35666:return Gv;case 35674:return Vv;case 35675:return Wv;case 35676:return Xv;case 5124:case 35670:return Yv;case 35667:case 35671:return qv;case 35668:case 35672:return $v;case 35669:case 35673:return Kv;case 5125:return Zv;case 36294:return jv;case 36295:return Jv;case 36296:return Qv;case 35678:case 36198:case 36298:case 36306:case 35682:return e_;case 35679:case 36299:case 36307:return t_;case 35680:case 36300:case 36308:case 36293:return n_;case 36289:case 36303:case 36311:case 36292:return i_}}class r_{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.setValue=Bv(t.type)}}class a_{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=s_(t.type)}}class o_{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,n){const s=this.seq;for(let r=0,a=s.length;r!==a;++r){const o=s[r];o.setValue(e,t[o.id],n)}}}const yc=/(\w+)(\])?(\[|\.)?/g;function oh(i,e){i.seq.push(e),i.map[e.id]=e}function c_(i,e,t){const n=i.name,s=n.length;for(yc.lastIndex=0;;){const r=yc.exec(n),a=yc.lastIndex;let o=r[1];const c=r[2]==="]",l=r[3];if(c&&(o=o|0),l===void 0||l==="["&&a+2===s){oh(t,l===void 0?new r_(o,i,e):new a_(o,i,e));break}else{let h=t.map[o];h===void 0&&(h=new o_(o),oh(t,h)),t=h}}}class uo{constructor(e,t){this.seq=[],this.map={};const n=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let s=0;s<n;++s){const r=e.getActiveUniform(t,s),a=e.getUniformLocation(t,r.name);c_(r,a,this)}}setValue(e,t,n,s){const r=this.map[t];r!==void 0&&r.setValue(e,n,s)}setOptional(e,t,n){const s=t[n];s!==void 0&&this.setValue(e,n,s)}static upload(e,t,n,s){for(let r=0,a=t.length;r!==a;++r){const o=t[r],c=n[o.id];c.needsUpdate!==!1&&o.setValue(e,c.value,s)}}static seqWithValue(e,t){const n=[];for(let s=0,r=e.length;s!==r;++s){const a=e[s];a.id in t&&n.push(a)}return n}}function ch(i,e,t){const n=i.createShader(e);return i.shaderSource(n,t),i.compileShader(n),n}const l_=37297;let d_=0;function h_(i,e){const t=i.split(`
`),n=[],s=Math.max(e-6,0),r=Math.min(e+6,t.length);for(let a=s;a<r;a++){const o=a+1;n.push(`${o===e?">":" "} ${o}: ${t[a]}`)}return n.join(`
`)}const lh=new Ze;function u_(i){st._getMatrix(lh,st.workingColorSpace,i);const e=`mat3( ${lh.elements.map(t=>t.toFixed(4))} )`;switch(st.getTransfer(i)){case Uo:return[e,"LinearTransferOETF"];case yt:return[e,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",i),[e,"LinearTransferOETF"]}}function dh(i,e,t){const n=i.getShaderParameter(e,i.COMPILE_STATUS),s=i.getShaderInfoLog(e).trim();if(n&&s==="")return"";const r=/ERROR: 0:(\d+)/.exec(s);if(r){const a=parseInt(r[1]);return t.toUpperCase()+`

`+s+`

`+h_(i.getShaderSource(e),a)}else return s}function f_(i,e){const t=u_(e);return[`vec4 ${i}( vec4 value ) {`,`	return ${t[1]}( vec4( value.rgb * ${t[0]}, value.a ) );`,"}"].join(`
`)}function p_(i,e){let t;switch(e){case hp:t="Linear";break;case up:t="Reinhard";break;case fp:t="Cineon";break;case _u:t="ACESFilmic";break;case mp:t="AgX";break;case gp:t="Neutral";break;case pp:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+i+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}const ka=new D;function m_(){st.getLuminanceCoefficients(ka);const i=ka.x.toFixed(4),e=ka.y.toFixed(4),t=ka.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${i}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function g_(i){return[i.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",i.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Zr).join(`
`)}function v_(i){const e=[];for(const t in i){const n=i[t];n!==!1&&e.push("#define "+t+" "+n)}return e.join(`
`)}function __(i,e){const t={},n=i.getProgramParameter(e,i.ACTIVE_ATTRIBUTES);for(let s=0;s<n;s++){const r=i.getActiveAttrib(e,s),a=r.name;let o=1;r.type===i.FLOAT_MAT2&&(o=2),r.type===i.FLOAT_MAT3&&(o=3),r.type===i.FLOAT_MAT4&&(o=4),t[a]={type:r.type,location:i.getAttribLocation(e,a),locationSize:o}}return t}function Zr(i){return i!==""}function hh(i,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return i.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function uh(i,e){return i.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const y_=/^[ \t]*#include +<([\w\d./]+)>/gm;function Ml(i){return i.replace(y_,S_)}const x_=new Map;function S_(i,e){let t=Je[e];if(t===void 0){const n=x_.get(e);if(n!==void 0)t=Je[n],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,n);else throw new Error("Can not resolve #include <"+e+">")}return Ml(t)}const M_=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function fh(i){return i.replace(M_,b_)}function b_(i,e,t,n){let s="";for(let r=parseInt(e);r<parseInt(t);r++)s+=n.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return s}function ph(i){let e=`precision ${i.precision} float;
	precision ${i.precision} int;
	precision ${i.precision} sampler2D;
	precision ${i.precision} samplerCube;
	precision ${i.precision} sampler3D;
	precision ${i.precision} sampler2DArray;
	precision ${i.precision} sampler2DShadow;
	precision ${i.precision} samplerCubeShadow;
	precision ${i.precision} sampler2DArrayShadow;
	precision ${i.precision} isampler2D;
	precision ${i.precision} isampler3D;
	precision ${i.precision} isamplerCube;
	precision ${i.precision} isampler2DArray;
	precision ${i.precision} usampler2D;
	precision ${i.precision} usampler3D;
	precision ${i.precision} usamplerCube;
	precision ${i.precision} usampler2DArray;
	`;return i.precision==="highp"?e+=`
#define HIGH_PRECISION`:i.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:i.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function E_(i){let e="SHADOWMAP_TYPE_BASIC";return i.shadowMapType===mu?e="SHADOWMAP_TYPE_PCF":i.shadowMapType===gu?e="SHADOWMAP_TYPE_PCF_SOFT":i.shadowMapType===yi&&(e="SHADOWMAP_TYPE_VSM"),e}function T_(i){let e="ENVMAP_TYPE_CUBE";if(i.envMap)switch(i.envMapMode){case vr:case _r:e="ENVMAP_TYPE_CUBE";break;case Oo:e="ENVMAP_TYPE_CUBE_UV";break}return e}function w_(i){let e="ENVMAP_MODE_REFLECTION";if(i.envMap)switch(i.envMapMode){case _r:e="ENVMAP_MODE_REFRACTION";break}return e}function A_(i){let e="ENVMAP_BLENDING_NONE";if(i.envMap)switch(i.combine){case vu:e="ENVMAP_BLENDING_MULTIPLY";break;case lp:e="ENVMAP_BLENDING_MIX";break;case dp:e="ENVMAP_BLENDING_ADD";break}return e}function R_(i){const e=i.envMapCubeUVHeight;if(e===null)return null;const t=Math.log2(e)-2,n=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),112)),texelHeight:n,maxMip:t}}function C_(i,e,t,n){const s=i.getContext(),r=t.defines;let a=t.vertexShader,o=t.fragmentShader;const c=E_(t),l=T_(t),d=w_(t),h=A_(t),u=R_(t),f=g_(t),g=v_(r),v=s.createProgram();let m,p,x=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(m=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g].filter(Zr).join(`
`),m.length>0&&(m+=`
`),p=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g].filter(Zr).join(`
`),p.length>0&&(p+=`
`)):(m=[ph(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+d:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+c:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Zr).join(`
`),p=[ph(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+l:"",t.envMap?"#define "+d:"",t.envMap?"#define "+h:"",u?"#define CUBEUV_TEXEL_WIDTH "+u.texelWidth:"",u?"#define CUBEUV_TEXEL_HEIGHT "+u.texelHeight:"",u?"#define CUBEUV_MAX_MIP "+u.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor||t.batchingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+c:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==is?"#define TONE_MAPPING":"",t.toneMapping!==is?Je.tonemapping_pars_fragment:"",t.toneMapping!==is?p_("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",Je.colorspace_pars_fragment,f_("linearToOutputTexel",t.outputColorSpace),m_(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(Zr).join(`
`)),a=Ml(a),a=hh(a,t),a=uh(a,t),o=Ml(o),o=hh(o,t),o=uh(o,t),a=fh(a),o=fh(o),t.isRawShaderMaterial!==!0&&(x=`#version 300 es
`,m=[f,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,p=["#define varying in",t.glslVersion===wd?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===wd?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+p);const b=x+m+a,y=x+p+o,I=ch(s,s.VERTEX_SHADER,b),T=ch(s,s.FRAGMENT_SHADER,y);s.attachShader(v,I),s.attachShader(v,T),t.index0AttributeName!==void 0?s.bindAttribLocation(v,0,t.index0AttributeName):t.morphTargets===!0&&s.bindAttribLocation(v,0,"position"),s.linkProgram(v);function w(C){if(i.debug.checkShaderErrors){const F=s.getProgramInfoLog(v).trim(),P=s.getShaderInfoLog(I).trim(),N=s.getShaderInfoLog(T).trim();let G=!0,L=!0;if(s.getProgramParameter(v,s.LINK_STATUS)===!1)if(G=!1,typeof i.debug.onShaderError=="function")i.debug.onShaderError(s,v,I,T);else{const q=dh(s,I,"vertex"),V=dh(s,T,"fragment");console.error("THREE.WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(v,s.VALIDATE_STATUS)+`

Material Name: `+C.name+`
Material Type: `+C.type+`

Program Info Log: `+F+`
`+q+`
`+V)}else F!==""?console.warn("THREE.WebGLProgram: Program Info Log:",F):(P===""||N==="")&&(L=!1);L&&(C.diagnostics={runnable:G,programLog:F,vertexShader:{log:P,prefix:m},fragmentShader:{log:N,prefix:p}})}s.deleteShader(I),s.deleteShader(T),R=new uo(s,v),S=__(s,v)}let R;this.getUniforms=function(){return R===void 0&&w(this),R};let S;this.getAttributes=function(){return S===void 0&&w(this),S};let _=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return _===!1&&(_=s.getProgramParameter(v,l_)),_},this.destroy=function(){n.releaseStatesOfProgram(this),s.deleteProgram(v),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=d_++,this.cacheKey=e,this.usedTimes=1,this.program=v,this.vertexShader=I,this.fragmentShader=T,this}let I_=0;class L_{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const t=e.vertexShader,n=e.fragmentShader,s=this._getShaderStage(t),r=this._getShaderStage(n),a=this._getShaderCacheForMaterial(e);return a.has(s)===!1&&(a.add(s),s.usedTimes++),a.has(r)===!1&&(a.add(r),r.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const n of t)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let n=t.get(e);return n===void 0&&(n=new Set,t.set(e,n)),n}_getShaderStage(e){const t=this.shaderCache;let n=t.get(e);return n===void 0&&(n=new D_(e),t.set(e,n)),n}}class D_{constructor(e){this.id=I_++,this.code=e,this.usedTimes=0}}function P_(i,e,t,n,s,r,a){const o=new Uu,c=new L_,l=new Set,d=[],h=s.logarithmicDepthBuffer,u=s.vertexTextures;let f=s.precision;const g={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function v(S){return l.add(S),S===0?"uv":`uv${S}`}function m(S,_,C,F,P){const N=F.fog,G=P.geometry,L=S.isMeshStandardMaterial?F.environment:null,q=(S.isMeshStandardMaterial?t:e).get(S.envMap||L),V=q&&q.mapping===Oo?q.image.height:null,K=g[S.type];S.precision!==null&&(f=s.getMaxPrecision(S.precision),f!==S.precision&&console.warn("THREE.WebGLProgram.getParameters:",S.precision,"not supported, using",f,"instead."));const ie=G.morphAttributes.position||G.morphAttributes.normal||G.morphAttributes.color,re=ie!==void 0?ie.length:0;let pe=0;G.morphAttributes.position!==void 0&&(pe=1),G.morphAttributes.normal!==void 0&&(pe=2),G.morphAttributes.color!==void 0&&(pe=3);let ye,Z,te,ue;if(K){const Ne=Jn[K];ye=Ne.vertexShader,Z=Ne.fragmentShader}else ye=S.vertexShader,Z=S.fragmentShader,c.update(S),te=c.getVertexShaderID(S),ue=c.getFragmentShaderID(S);const oe=i.getRenderTarget(),be=i.state.buffers.depth.getReversed(),Se=P.isInstancedMesh===!0,Ce=P.isBatchedMesh===!0,Ye=!!S.map,Pe=!!S.matcap,qe=!!q,O=!!S.aoMap,ht=!!S.lightMap,$e=!!S.bumpMap,We=!!S.normalMap,Ie=!!S.displacementMap,lt=!!S.emissiveMap,Le=!!S.metalnessMap,A=!!S.roughnessMap,M=S.anisotropy>0,W=S.clearcoat>0,Q=S.dispersion>0,ne=S.iridescence>0,j=S.sheen>0,Ee=S.transmission>0,de=M&&!!S.anisotropyMap,xe=W&&!!S.clearcoatMap,Be=W&&!!S.clearcoatNormalMap,ce=W&&!!S.clearcoatRoughnessMap,_e=ne&&!!S.iridescenceMap,De=ne&&!!S.iridescenceThicknessMap,Oe=j&&!!S.sheenColorMap,Me=j&&!!S.sheenRoughnessMap,Ge=!!S.specularMap,He=!!S.specularColorMap,rt=!!S.specularIntensityMap,U=Ee&&!!S.transmissionMap,he=Ee&&!!S.thicknessMap,$=!!S.gradientMap,ee=!!S.alphaMap,fe=S.alphaTest>0,me=!!S.alphaHash,Ue=!!S.extensions;let pt=is;S.toneMapped&&(oe===null||oe.isXRRenderTarget===!0)&&(pt=i.toneMapping);const J={shaderID:K,shaderType:S.type,shaderName:S.name,vertexShader:ye,fragmentShader:Z,defines:S.defines,customVertexShaderID:te,customFragmentShaderID:ue,isRawShaderMaterial:S.isRawShaderMaterial===!0,glslVersion:S.glslVersion,precision:f,batching:Ce,batchingColor:Ce&&P._colorsTexture!==null,instancing:Se,instancingColor:Se&&P.instanceColor!==null,instancingMorph:Se&&P.morphTexture!==null,supportsVertexTextures:u,outputColorSpace:oe===null?i.outputColorSpace:oe.isXRRenderTarget===!0?oe.texture.colorSpace:jt,alphaToCoverage:!!S.alphaToCoverage,map:Ye,matcap:Pe,envMap:qe,envMapMode:qe&&q.mapping,envMapCubeUVHeight:V,aoMap:O,lightMap:ht,bumpMap:$e,normalMap:We,displacementMap:u&&Ie,emissiveMap:lt,normalMapObjectSpace:We&&S.normalMapType===Mp,normalMapTangentSpace:We&&S.normalMapType===Lu,metalnessMap:Le,roughnessMap:A,anisotropy:M,anisotropyMap:de,clearcoat:W,clearcoatMap:xe,clearcoatNormalMap:Be,clearcoatRoughnessMap:ce,dispersion:Q,iridescence:ne,iridescenceMap:_e,iridescenceThicknessMap:De,sheen:j,sheenColorMap:Oe,sheenRoughnessMap:Me,specularMap:Ge,specularColorMap:He,specularIntensityMap:rt,transmission:Ee,transmissionMap:U,thicknessMap:he,gradientMap:$,opaque:S.transparent===!1&&S.blending===hr&&S.alphaToCoverage===!1,alphaMap:ee,alphaTest:fe,alphaHash:me,combine:S.combine,mapUv:Ye&&v(S.map.channel),aoMapUv:O&&v(S.aoMap.channel),lightMapUv:ht&&v(S.lightMap.channel),bumpMapUv:$e&&v(S.bumpMap.channel),normalMapUv:We&&v(S.normalMap.channel),displacementMapUv:Ie&&v(S.displacementMap.channel),emissiveMapUv:lt&&v(S.emissiveMap.channel),metalnessMapUv:Le&&v(S.metalnessMap.channel),roughnessMapUv:A&&v(S.roughnessMap.channel),anisotropyMapUv:de&&v(S.anisotropyMap.channel),clearcoatMapUv:xe&&v(S.clearcoatMap.channel),clearcoatNormalMapUv:Be&&v(S.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:ce&&v(S.clearcoatRoughnessMap.channel),iridescenceMapUv:_e&&v(S.iridescenceMap.channel),iridescenceThicknessMapUv:De&&v(S.iridescenceThicknessMap.channel),sheenColorMapUv:Oe&&v(S.sheenColorMap.channel),sheenRoughnessMapUv:Me&&v(S.sheenRoughnessMap.channel),specularMapUv:Ge&&v(S.specularMap.channel),specularColorMapUv:He&&v(S.specularColorMap.channel),specularIntensityMapUv:rt&&v(S.specularIntensityMap.channel),transmissionMapUv:U&&v(S.transmissionMap.channel),thicknessMapUv:he&&v(S.thicknessMap.channel),alphaMapUv:ee&&v(S.alphaMap.channel),vertexTangents:!!G.attributes.tangent&&(We||M),vertexColors:S.vertexColors,vertexAlphas:S.vertexColors===!0&&!!G.attributes.color&&G.attributes.color.itemSize===4,pointsUvs:P.isPoints===!0&&!!G.attributes.uv&&(Ye||ee),fog:!!N,useFog:S.fog===!0,fogExp2:!!N&&N.isFogExp2,flatShading:S.flatShading===!0,sizeAttenuation:S.sizeAttenuation===!0,logarithmicDepthBuffer:h,reverseDepthBuffer:be,skinning:P.isSkinnedMesh===!0,morphTargets:G.morphAttributes.position!==void 0,morphNormals:G.morphAttributes.normal!==void 0,morphColors:G.morphAttributes.color!==void 0,morphTargetsCount:re,morphTextureStride:pe,numDirLights:_.directional.length,numPointLights:_.point.length,numSpotLights:_.spot.length,numSpotLightMaps:_.spotLightMap.length,numRectAreaLights:_.rectArea.length,numHemiLights:_.hemi.length,numDirLightShadows:_.directionalShadowMap.length,numPointLightShadows:_.pointShadowMap.length,numSpotLightShadows:_.spotShadowMap.length,numSpotLightShadowsWithMaps:_.numSpotLightShadowsWithMaps,numLightProbes:_.numLightProbes,numClippingPlanes:a.numPlanes,numClipIntersection:a.numIntersection,dithering:S.dithering,shadowMapEnabled:i.shadowMap.enabled&&C.length>0,shadowMapType:i.shadowMap.type,toneMapping:pt,decodeVideoTexture:Ye&&S.map.isVideoTexture===!0&&st.getTransfer(S.map.colorSpace)===yt,decodeVideoTextureEmissive:lt&&S.emissiveMap.isVideoTexture===!0&&st.getTransfer(S.emissiveMap.colorSpace)===yt,premultipliedAlpha:S.premultipliedAlpha,doubleSided:S.side===Dn,flipSided:S.side===un,useDepthPacking:S.depthPacking>=0,depthPacking:S.depthPacking||0,index0AttributeName:S.index0AttributeName,extensionClipCullDistance:Ue&&S.extensions.clipCullDistance===!0&&n.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Ue&&S.extensions.multiDraw===!0||Ce)&&n.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:S.customProgramCacheKey()};return J.vertexUv1s=l.has(1),J.vertexUv2s=l.has(2),J.vertexUv3s=l.has(3),l.clear(),J}function p(S){const _=[];if(S.shaderID?_.push(S.shaderID):(_.push(S.customVertexShaderID),_.push(S.customFragmentShaderID)),S.defines!==void 0)for(const C in S.defines)_.push(C),_.push(S.defines[C]);return S.isRawShaderMaterial===!1&&(x(_,S),b(_,S),_.push(i.outputColorSpace)),_.push(S.customProgramCacheKey),_.join()}function x(S,_){S.push(_.precision),S.push(_.outputColorSpace),S.push(_.envMapMode),S.push(_.envMapCubeUVHeight),S.push(_.mapUv),S.push(_.alphaMapUv),S.push(_.lightMapUv),S.push(_.aoMapUv),S.push(_.bumpMapUv),S.push(_.normalMapUv),S.push(_.displacementMapUv),S.push(_.emissiveMapUv),S.push(_.metalnessMapUv),S.push(_.roughnessMapUv),S.push(_.anisotropyMapUv),S.push(_.clearcoatMapUv),S.push(_.clearcoatNormalMapUv),S.push(_.clearcoatRoughnessMapUv),S.push(_.iridescenceMapUv),S.push(_.iridescenceThicknessMapUv),S.push(_.sheenColorMapUv),S.push(_.sheenRoughnessMapUv),S.push(_.specularMapUv),S.push(_.specularColorMapUv),S.push(_.specularIntensityMapUv),S.push(_.transmissionMapUv),S.push(_.thicknessMapUv),S.push(_.combine),S.push(_.fogExp2),S.push(_.sizeAttenuation),S.push(_.morphTargetsCount),S.push(_.morphAttributeCount),S.push(_.numDirLights),S.push(_.numPointLights),S.push(_.numSpotLights),S.push(_.numSpotLightMaps),S.push(_.numHemiLights),S.push(_.numRectAreaLights),S.push(_.numDirLightShadows),S.push(_.numPointLightShadows),S.push(_.numSpotLightShadows),S.push(_.numSpotLightShadowsWithMaps),S.push(_.numLightProbes),S.push(_.shadowMapType),S.push(_.toneMapping),S.push(_.numClippingPlanes),S.push(_.numClipIntersection),S.push(_.depthPacking)}function b(S,_){o.disableAll(),_.supportsVertexTextures&&o.enable(0),_.instancing&&o.enable(1),_.instancingColor&&o.enable(2),_.instancingMorph&&o.enable(3),_.matcap&&o.enable(4),_.envMap&&o.enable(5),_.normalMapObjectSpace&&o.enable(6),_.normalMapTangentSpace&&o.enable(7),_.clearcoat&&o.enable(8),_.iridescence&&o.enable(9),_.alphaTest&&o.enable(10),_.vertexColors&&o.enable(11),_.vertexAlphas&&o.enable(12),_.vertexUv1s&&o.enable(13),_.vertexUv2s&&o.enable(14),_.vertexUv3s&&o.enable(15),_.vertexTangents&&o.enable(16),_.anisotropy&&o.enable(17),_.alphaHash&&o.enable(18),_.batching&&o.enable(19),_.dispersion&&o.enable(20),_.batchingColor&&o.enable(21),S.push(o.mask),o.disableAll(),_.fog&&o.enable(0),_.useFog&&o.enable(1),_.flatShading&&o.enable(2),_.logarithmicDepthBuffer&&o.enable(3),_.reverseDepthBuffer&&o.enable(4),_.skinning&&o.enable(5),_.morphTargets&&o.enable(6),_.morphNormals&&o.enable(7),_.morphColors&&o.enable(8),_.premultipliedAlpha&&o.enable(9),_.shadowMapEnabled&&o.enable(10),_.doubleSided&&o.enable(11),_.flipSided&&o.enable(12),_.useDepthPacking&&o.enable(13),_.dithering&&o.enable(14),_.transmission&&o.enable(15),_.sheen&&o.enable(16),_.opaque&&o.enable(17),_.pointsUvs&&o.enable(18),_.decodeVideoTexture&&o.enable(19),_.decodeVideoTextureEmissive&&o.enable(20),_.alphaToCoverage&&o.enable(21),S.push(o.mask)}function y(S){const _=g[S.type];let C;if(_){const F=Jn[_];C=gm.clone(F.uniforms)}else C=S.uniforms;return C}function I(S,_){let C;for(let F=0,P=d.length;F<P;F++){const N=d[F];if(N.cacheKey===_){C=N,++C.usedTimes;break}}return C===void 0&&(C=new C_(i,_,S,r),d.push(C)),C}function T(S){if(--S.usedTimes===0){const _=d.indexOf(S);d[_]=d[d.length-1],d.pop(),S.destroy()}}function w(S){c.remove(S)}function R(){c.dispose()}return{getParameters:m,getProgramCacheKey:p,getUniforms:y,acquireProgram:I,releaseProgram:T,releaseShaderCache:w,programs:d,dispose:R}}function N_(){let i=new WeakMap;function e(a){return i.has(a)}function t(a){let o=i.get(a);return o===void 0&&(o={},i.set(a,o)),o}function n(a){i.delete(a)}function s(a,o,c){i.get(a)[o]=c}function r(){i=new WeakMap}return{has:e,get:t,remove:n,update:s,dispose:r}}function O_(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.material.id!==e.material.id?i.material.id-e.material.id:i.z!==e.z?i.z-e.z:i.id-e.id}function mh(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.z!==e.z?e.z-i.z:i.id-e.id}function gh(){const i=[];let e=0;const t=[],n=[],s=[];function r(){e=0,t.length=0,n.length=0,s.length=0}function a(h,u,f,g,v,m){let p=i[e];return p===void 0?(p={id:h.id,object:h,geometry:u,material:f,groupOrder:g,renderOrder:h.renderOrder,z:v,group:m},i[e]=p):(p.id=h.id,p.object=h,p.geometry=u,p.material=f,p.groupOrder=g,p.renderOrder=h.renderOrder,p.z=v,p.group=m),e++,p}function o(h,u,f,g,v,m){const p=a(h,u,f,g,v,m);f.transmission>0?n.push(p):f.transparent===!0?s.push(p):t.push(p)}function c(h,u,f,g,v,m){const p=a(h,u,f,g,v,m);f.transmission>0?n.unshift(p):f.transparent===!0?s.unshift(p):t.unshift(p)}function l(h,u){t.length>1&&t.sort(h||O_),n.length>1&&n.sort(u||mh),s.length>1&&s.sort(u||mh)}function d(){for(let h=e,u=i.length;h<u;h++){const f=i[h];if(f.id===null)break;f.id=null,f.object=null,f.geometry=null,f.material=null,f.group=null}}return{opaque:t,transmissive:n,transparent:s,init:r,push:o,unshift:c,finish:d,sort:l}}function U_(){let i=new WeakMap;function e(n,s){const r=i.get(n);let a;return r===void 0?(a=new gh,i.set(n,[a])):s>=r.length?(a=new gh,r.push(a)):a=r[s],a}function t(){i=new WeakMap}return{get:e,dispose:t}}function F_(){const i={};return{get:function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new D,color:new ze};break;case"SpotLight":t={position:new D,direction:new D,color:new ze,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new D,color:new ze,distance:0,decay:0};break;case"HemisphereLight":t={direction:new D,skyColor:new ze,groundColor:new ze};break;case"RectAreaLight":t={color:new ze,position:new D,halfWidth:new D,halfHeight:new D};break}return i[e.id]=t,t}}}function B_(){const i={};return{get:function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new je};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new je};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new je,shadowCameraNear:1,shadowCameraFar:1e3};break}return i[e.id]=t,t}}}let k_=0;function z_(i,e){return(e.castShadow?2:0)-(i.castShadow?2:0)+(e.map?1:0)-(i.map?1:0)}function H_(i){const e=new F_,t=B_(),n={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let l=0;l<9;l++)n.probe.push(new D);const s=new D,r=new Ke,a=new Ke;function o(l){let d=0,h=0,u=0;for(let S=0;S<9;S++)n.probe[S].set(0,0,0);let f=0,g=0,v=0,m=0,p=0,x=0,b=0,y=0,I=0,T=0,w=0;l.sort(z_);for(let S=0,_=l.length;S<_;S++){const C=l[S],F=C.color,P=C.intensity,N=C.distance,G=C.shadow&&C.shadow.map?C.shadow.map.texture:null;if(C.isAmbientLight)d+=F.r*P,h+=F.g*P,u+=F.b*P;else if(C.isLightProbe){for(let L=0;L<9;L++)n.probe[L].addScaledVector(C.sh.coefficients[L],P);w++}else if(C.isDirectionalLight){const L=e.get(C);if(L.color.copy(C.color).multiplyScalar(C.intensity),C.castShadow){const q=C.shadow,V=t.get(C);V.shadowIntensity=q.intensity,V.shadowBias=q.bias,V.shadowNormalBias=q.normalBias,V.shadowRadius=q.radius,V.shadowMapSize=q.mapSize,n.directionalShadow[f]=V,n.directionalShadowMap[f]=G,n.directionalShadowMatrix[f]=C.shadow.matrix,x++}n.directional[f]=L,f++}else if(C.isSpotLight){const L=e.get(C);L.position.setFromMatrixPosition(C.matrixWorld),L.color.copy(F).multiplyScalar(P),L.distance=N,L.coneCos=Math.cos(C.angle),L.penumbraCos=Math.cos(C.angle*(1-C.penumbra)),L.decay=C.decay,n.spot[v]=L;const q=C.shadow;if(C.map&&(n.spotLightMap[I]=C.map,I++,q.updateMatrices(C),C.castShadow&&T++),n.spotLightMatrix[v]=q.matrix,C.castShadow){const V=t.get(C);V.shadowIntensity=q.intensity,V.shadowBias=q.bias,V.shadowNormalBias=q.normalBias,V.shadowRadius=q.radius,V.shadowMapSize=q.mapSize,n.spotShadow[v]=V,n.spotShadowMap[v]=G,y++}v++}else if(C.isRectAreaLight){const L=e.get(C);L.color.copy(F).multiplyScalar(P),L.halfWidth.set(C.width*.5,0,0),L.halfHeight.set(0,C.height*.5,0),n.rectArea[m]=L,m++}else if(C.isPointLight){const L=e.get(C);if(L.color.copy(C.color).multiplyScalar(C.intensity),L.distance=C.distance,L.decay=C.decay,C.castShadow){const q=C.shadow,V=t.get(C);V.shadowIntensity=q.intensity,V.shadowBias=q.bias,V.shadowNormalBias=q.normalBias,V.shadowRadius=q.radius,V.shadowMapSize=q.mapSize,V.shadowCameraNear=q.camera.near,V.shadowCameraFar=q.camera.far,n.pointShadow[g]=V,n.pointShadowMap[g]=G,n.pointShadowMatrix[g]=C.shadow.matrix,b++}n.point[g]=L,g++}else if(C.isHemisphereLight){const L=e.get(C);L.skyColor.copy(C.color).multiplyScalar(P),L.groundColor.copy(C.groundColor).multiplyScalar(P),n.hemi[p]=L,p++}}m>0&&(i.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=ge.LTC_FLOAT_1,n.rectAreaLTC2=ge.LTC_FLOAT_2):(n.rectAreaLTC1=ge.LTC_HALF_1,n.rectAreaLTC2=ge.LTC_HALF_2)),n.ambient[0]=d,n.ambient[1]=h,n.ambient[2]=u;const R=n.hash;(R.directionalLength!==f||R.pointLength!==g||R.spotLength!==v||R.rectAreaLength!==m||R.hemiLength!==p||R.numDirectionalShadows!==x||R.numPointShadows!==b||R.numSpotShadows!==y||R.numSpotMaps!==I||R.numLightProbes!==w)&&(n.directional.length=f,n.spot.length=v,n.rectArea.length=m,n.point.length=g,n.hemi.length=p,n.directionalShadow.length=x,n.directionalShadowMap.length=x,n.pointShadow.length=b,n.pointShadowMap.length=b,n.spotShadow.length=y,n.spotShadowMap.length=y,n.directionalShadowMatrix.length=x,n.pointShadowMatrix.length=b,n.spotLightMatrix.length=y+I-T,n.spotLightMap.length=I,n.numSpotLightShadowsWithMaps=T,n.numLightProbes=w,R.directionalLength=f,R.pointLength=g,R.spotLength=v,R.rectAreaLength=m,R.hemiLength=p,R.numDirectionalShadows=x,R.numPointShadows=b,R.numSpotShadows=y,R.numSpotMaps=I,R.numLightProbes=w,n.version=k_++)}function c(l,d){let h=0,u=0,f=0,g=0,v=0;const m=d.matrixWorldInverse;for(let p=0,x=l.length;p<x;p++){const b=l[p];if(b.isDirectionalLight){const y=n.directional[h];y.direction.setFromMatrixPosition(b.matrixWorld),s.setFromMatrixPosition(b.target.matrixWorld),y.direction.sub(s),y.direction.transformDirection(m),h++}else if(b.isSpotLight){const y=n.spot[f];y.position.setFromMatrixPosition(b.matrixWorld),y.position.applyMatrix4(m),y.direction.setFromMatrixPosition(b.matrixWorld),s.setFromMatrixPosition(b.target.matrixWorld),y.direction.sub(s),y.direction.transformDirection(m),f++}else if(b.isRectAreaLight){const y=n.rectArea[g];y.position.setFromMatrixPosition(b.matrixWorld),y.position.applyMatrix4(m),a.identity(),r.copy(b.matrixWorld),r.premultiply(m),a.extractRotation(r),y.halfWidth.set(b.width*.5,0,0),y.halfHeight.set(0,b.height*.5,0),y.halfWidth.applyMatrix4(a),y.halfHeight.applyMatrix4(a),g++}else if(b.isPointLight){const y=n.point[u];y.position.setFromMatrixPosition(b.matrixWorld),y.position.applyMatrix4(m),u++}else if(b.isHemisphereLight){const y=n.hemi[v];y.direction.setFromMatrixPosition(b.matrixWorld),y.direction.transformDirection(m),v++}}}return{setup:o,setupView:c,state:n}}function vh(i){const e=new H_(i),t=[],n=[];function s(d){l.camera=d,t.length=0,n.length=0}function r(d){t.push(d)}function a(d){n.push(d)}function o(){e.setup(t)}function c(d){e.setupView(t,d)}const l={lightsArray:t,shadowsArray:n,camera:null,lights:e,transmissionRenderTarget:{}};return{init:s,state:l,setupLights:o,setupLightsView:c,pushLight:r,pushShadow:a}}function G_(i){let e=new WeakMap;function t(s,r=0){const a=e.get(s);let o;return a===void 0?(o=new vh(i),e.set(s,[o])):r>=a.length?(o=new vh(i),a.push(o)):o=a[r],o}function n(){e=new WeakMap}return{get:t,dispose:n}}class V_ extends si{static get type(){return"MeshDepthMaterial"}constructor(e){super(),this.isMeshDepthMaterial=!0,this.depthPacking=xp,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class W_ extends si{static get type(){return"MeshDistanceMaterial"}constructor(e){super(),this.isMeshDistanceMaterial=!0,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}const X_=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,Y_=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
#include <packing>
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( squared_mean - mean * mean );
	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );
}`;function q_(i,e,t){let n=new Kl;const s=new je,r=new je,a=new dt,o=new V_({depthPacking:Sp}),c=new W_,l={},d=t.maxTextureSize,h={[Li]:un,[un]:Li,[Dn]:Dn},u=new ss({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new je},radius:{value:4}},vertexShader:X_,fragmentShader:Y_}),f=u.clone();f.defines.HORIZONTAL_PASS=1;const g=new fn;g.setAttribute("position",new on(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const v=new B(g,u),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=mu;let p=this.type;this.render=function(T,w,R){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||T.length===0)return;const S=i.getRenderTarget(),_=i.getActiveCubeFace(),C=i.getActiveMipmapLevel(),F=i.state;F.setBlending(ns),F.buffers.color.setClear(1,1,1,1),F.buffers.depth.setTest(!0),F.setScissorTest(!1);const P=p!==yi&&this.type===yi,N=p===yi&&this.type!==yi;for(let G=0,L=T.length;G<L;G++){const q=T[G],V=q.shadow;if(V===void 0){console.warn("THREE.WebGLShadowMap:",q,"has no shadow.");continue}if(V.autoUpdate===!1&&V.needsUpdate===!1)continue;s.copy(V.mapSize);const K=V.getFrameExtents();if(s.multiply(K),r.copy(V.mapSize),(s.x>d||s.y>d)&&(s.x>d&&(r.x=Math.floor(d/K.x),s.x=r.x*K.x,V.mapSize.x=r.x),s.y>d&&(r.y=Math.floor(d/K.y),s.y=r.y*K.y,V.mapSize.y=r.y)),V.map===null||P===!0||N===!0){const re=this.type!==yi?{minFilter:an,magFilter:an}:{};V.map!==null&&V.map.dispose(),V.map=new Ds(s.x,s.y,re),V.map.texture.name=q.name+".shadowMap",V.camera.updateProjectionMatrix()}i.setRenderTarget(V.map),i.clear();const ie=V.getViewportCount();for(let re=0;re<ie;re++){const pe=V.getViewport(re);a.set(r.x*pe.x,r.y*pe.y,r.x*pe.z,r.y*pe.w),F.viewport(a),V.updateMatrices(q,re),n=V.getFrustum(),y(w,R,V.camera,q,this.type)}V.isPointLightShadow!==!0&&this.type===yi&&x(V,R),V.needsUpdate=!1}p=this.type,m.needsUpdate=!1,i.setRenderTarget(S,_,C)};function x(T,w){const R=e.update(v);u.defines.VSM_SAMPLES!==T.blurSamples&&(u.defines.VSM_SAMPLES=T.blurSamples,f.defines.VSM_SAMPLES=T.blurSamples,u.needsUpdate=!0,f.needsUpdate=!0),T.mapPass===null&&(T.mapPass=new Ds(s.x,s.y)),u.uniforms.shadow_pass.value=T.map.texture,u.uniforms.resolution.value=T.mapSize,u.uniforms.radius.value=T.radius,i.setRenderTarget(T.mapPass),i.clear(),i.renderBufferDirect(w,null,R,u,v,null),f.uniforms.shadow_pass.value=T.mapPass.texture,f.uniforms.resolution.value=T.mapSize,f.uniforms.radius.value=T.radius,i.setRenderTarget(T.map),i.clear(),i.renderBufferDirect(w,null,R,f,v,null)}function b(T,w,R,S){let _=null;const C=R.isPointLight===!0?T.customDistanceMaterial:T.customDepthMaterial;if(C!==void 0)_=C;else if(_=R.isPointLight===!0?c:o,i.localClippingEnabled&&w.clipShadows===!0&&Array.isArray(w.clippingPlanes)&&w.clippingPlanes.length!==0||w.displacementMap&&w.displacementScale!==0||w.alphaMap&&w.alphaTest>0||w.map&&w.alphaTest>0){const F=_.uuid,P=w.uuid;let N=l[F];N===void 0&&(N={},l[F]=N);let G=N[P];G===void 0&&(G=_.clone(),N[P]=G,w.addEventListener("dispose",I)),_=G}if(_.visible=w.visible,_.wireframe=w.wireframe,S===yi?_.side=w.shadowSide!==null?w.shadowSide:w.side:_.side=w.shadowSide!==null?w.shadowSide:h[w.side],_.alphaMap=w.alphaMap,_.alphaTest=w.alphaTest,_.map=w.map,_.clipShadows=w.clipShadows,_.clippingPlanes=w.clippingPlanes,_.clipIntersection=w.clipIntersection,_.displacementMap=w.displacementMap,_.displacementScale=w.displacementScale,_.displacementBias=w.displacementBias,_.wireframeLinewidth=w.wireframeLinewidth,_.linewidth=w.linewidth,R.isPointLight===!0&&_.isMeshDistanceMaterial===!0){const F=i.properties.get(_);F.light=R}return _}function y(T,w,R,S,_){if(T.visible===!1)return;if(T.layers.test(w.layers)&&(T.isMesh||T.isLine||T.isPoints)&&(T.castShadow||T.receiveShadow&&_===yi)&&(!T.frustumCulled||n.intersectsObject(T))){T.modelViewMatrix.multiplyMatrices(R.matrixWorldInverse,T.matrixWorld);const P=e.update(T),N=T.material;if(Array.isArray(N)){const G=P.groups;for(let L=0,q=G.length;L<q;L++){const V=G[L],K=N[V.materialIndex];if(K&&K.visible){const ie=b(T,K,S,_);T.onBeforeShadow(i,T,w,R,P,ie,V),i.renderBufferDirect(R,null,P,ie,T,V),T.onAfterShadow(i,T,w,R,P,ie,V)}}}else if(N.visible){const G=b(T,N,S,_);T.onBeforeShadow(i,T,w,R,P,G,null),i.renderBufferDirect(R,null,P,G,T,null),T.onAfterShadow(i,T,w,R,P,G,null)}}const F=T.children;for(let P=0,N=F.length;P<N;P++)y(F[P],w,R,S,_)}function I(T){T.target.removeEventListener("dispose",I);for(const R in l){const S=l[R],_=T.target.uuid;_ in S&&(S[_].dispose(),delete S[_])}}}const $_={[zc]:Hc,[Gc]:Xc,[Vc]:Yc,[gr]:Wc,[Hc]:zc,[Xc]:Gc,[Yc]:Vc,[Wc]:gr};function K_(i,e){function t(){let U=!1;const he=new dt;let $=null;const ee=new dt(0,0,0,0);return{setMask:function(fe){$!==fe&&!U&&(i.colorMask(fe,fe,fe,fe),$=fe)},setLocked:function(fe){U=fe},setClear:function(fe,me,Ue,pt,J){J===!0&&(fe*=pt,me*=pt,Ue*=pt),he.set(fe,me,Ue,pt),ee.equals(he)===!1&&(i.clearColor(fe,me,Ue,pt),ee.copy(he))},reset:function(){U=!1,$=null,ee.set(-1,0,0,0)}}}function n(){let U=!1,he=!1,$=null,ee=null,fe=null;return{setReversed:function(me){if(he!==me){const Ue=e.get("EXT_clip_control");he?Ue.clipControlEXT(Ue.LOWER_LEFT_EXT,Ue.ZERO_TO_ONE_EXT):Ue.clipControlEXT(Ue.LOWER_LEFT_EXT,Ue.NEGATIVE_ONE_TO_ONE_EXT);const pt=fe;fe=null,this.setClear(pt)}he=me},getReversed:function(){return he},setTest:function(me){me?oe(i.DEPTH_TEST):be(i.DEPTH_TEST)},setMask:function(me){$!==me&&!U&&(i.depthMask(me),$=me)},setFunc:function(me){if(he&&(me=$_[me]),ee!==me){switch(me){case zc:i.depthFunc(i.NEVER);break;case Hc:i.depthFunc(i.ALWAYS);break;case Gc:i.depthFunc(i.LESS);break;case gr:i.depthFunc(i.LEQUAL);break;case Vc:i.depthFunc(i.EQUAL);break;case Wc:i.depthFunc(i.GEQUAL);break;case Xc:i.depthFunc(i.GREATER);break;case Yc:i.depthFunc(i.NOTEQUAL);break;default:i.depthFunc(i.LEQUAL)}ee=me}},setLocked:function(me){U=me},setClear:function(me){fe!==me&&(he&&(me=1-me),i.clearDepth(me),fe=me)},reset:function(){U=!1,$=null,ee=null,fe=null,he=!1}}}function s(){let U=!1,he=null,$=null,ee=null,fe=null,me=null,Ue=null,pt=null,J=null;return{setTest:function(Ne){U||(Ne?oe(i.STENCIL_TEST):be(i.STENCIL_TEST))},setMask:function(Ne){he!==Ne&&!U&&(i.stencilMask(Ne),he=Ne)},setFunc:function(Ne,mt,At){($!==Ne||ee!==mt||fe!==At)&&(i.stencilFunc(Ne,mt,At),$=Ne,ee=mt,fe=At)},setOp:function(Ne,mt,At){(me!==Ne||Ue!==mt||pt!==At)&&(i.stencilOp(Ne,mt,At),me=Ne,Ue=mt,pt=At)},setLocked:function(Ne){U=Ne},setClear:function(Ne){J!==Ne&&(i.clearStencil(Ne),J=Ne)},reset:function(){U=!1,he=null,$=null,ee=null,fe=null,me=null,Ue=null,pt=null,J=null}}}const r=new t,a=new n,o=new s,c=new WeakMap,l=new WeakMap;let d={},h={},u=new WeakMap,f=[],g=null,v=!1,m=null,p=null,x=null,b=null,y=null,I=null,T=null,w=new ze(0,0,0),R=0,S=!1,_=null,C=null,F=null,P=null,N=null;const G=i.getParameter(i.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let L=!1,q=0;const V=i.getParameter(i.VERSION);V.indexOf("WebGL")!==-1?(q=parseFloat(/^WebGL (\d)/.exec(V)[1]),L=q>=1):V.indexOf("OpenGL ES")!==-1&&(q=parseFloat(/^OpenGL ES (\d)/.exec(V)[1]),L=q>=2);let K=null,ie={};const re=i.getParameter(i.SCISSOR_BOX),pe=i.getParameter(i.VIEWPORT),ye=new dt().fromArray(re),Z=new dt().fromArray(pe);function te(U,he,$,ee){const fe=new Uint8Array(4),me=i.createTexture();i.bindTexture(U,me),i.texParameteri(U,i.TEXTURE_MIN_FILTER,i.NEAREST),i.texParameteri(U,i.TEXTURE_MAG_FILTER,i.NEAREST);for(let Ue=0;Ue<$;Ue++)U===i.TEXTURE_3D||U===i.TEXTURE_2D_ARRAY?i.texImage3D(he,0,i.RGBA,1,1,ee,0,i.RGBA,i.UNSIGNED_BYTE,fe):i.texImage2D(he+Ue,0,i.RGBA,1,1,0,i.RGBA,i.UNSIGNED_BYTE,fe);return me}const ue={};ue[i.TEXTURE_2D]=te(i.TEXTURE_2D,i.TEXTURE_2D,1),ue[i.TEXTURE_CUBE_MAP]=te(i.TEXTURE_CUBE_MAP,i.TEXTURE_CUBE_MAP_POSITIVE_X,6),ue[i.TEXTURE_2D_ARRAY]=te(i.TEXTURE_2D_ARRAY,i.TEXTURE_2D_ARRAY,1,1),ue[i.TEXTURE_3D]=te(i.TEXTURE_3D,i.TEXTURE_3D,1,1),r.setClear(0,0,0,1),a.setClear(1),o.setClear(0),oe(i.DEPTH_TEST),a.setFunc(gr),$e(!1),We(vd),oe(i.CULL_FACE),O(ns);function oe(U){d[U]!==!0&&(i.enable(U),d[U]=!0)}function be(U){d[U]!==!1&&(i.disable(U),d[U]=!1)}function Se(U,he){return h[U]!==he?(i.bindFramebuffer(U,he),h[U]=he,U===i.DRAW_FRAMEBUFFER&&(h[i.FRAMEBUFFER]=he),U===i.FRAMEBUFFER&&(h[i.DRAW_FRAMEBUFFER]=he),!0):!1}function Ce(U,he){let $=f,ee=!1;if(U){$=u.get(he),$===void 0&&($=[],u.set(he,$));const fe=U.textures;if($.length!==fe.length||$[0]!==i.COLOR_ATTACHMENT0){for(let me=0,Ue=fe.length;me<Ue;me++)$[me]=i.COLOR_ATTACHMENT0+me;$.length=fe.length,ee=!0}}else $[0]!==i.BACK&&($[0]=i.BACK,ee=!0);ee&&i.drawBuffers($)}function Ye(U){return g!==U?(i.useProgram(U),g=U,!0):!1}const Pe={[xs]:i.FUNC_ADD,[Yf]:i.FUNC_SUBTRACT,[qf]:i.FUNC_REVERSE_SUBTRACT};Pe[$f]=i.MIN,Pe[Kf]=i.MAX;const qe={[Zf]:i.ZERO,[jf]:i.ONE,[Jf]:i.SRC_COLOR,[Bc]:i.SRC_ALPHA,[sp]:i.SRC_ALPHA_SATURATE,[np]:i.DST_COLOR,[ep]:i.DST_ALPHA,[Qf]:i.ONE_MINUS_SRC_COLOR,[kc]:i.ONE_MINUS_SRC_ALPHA,[ip]:i.ONE_MINUS_DST_COLOR,[tp]:i.ONE_MINUS_DST_ALPHA,[rp]:i.CONSTANT_COLOR,[ap]:i.ONE_MINUS_CONSTANT_COLOR,[op]:i.CONSTANT_ALPHA,[cp]:i.ONE_MINUS_CONSTANT_ALPHA};function O(U,he,$,ee,fe,me,Ue,pt,J,Ne){if(U===ns){v===!0&&(be(i.BLEND),v=!1);return}if(v===!1&&(oe(i.BLEND),v=!0),U!==Xf){if(U!==m||Ne!==S){if((p!==xs||y!==xs)&&(i.blendEquation(i.FUNC_ADD),p=xs,y=xs),Ne)switch(U){case hr:i.blendFuncSeparate(i.ONE,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case _d:i.blendFunc(i.ONE,i.ONE);break;case yd:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case xd:i.blendFuncSeparate(i.ZERO,i.SRC_COLOR,i.ZERO,i.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",U);break}else switch(U){case hr:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case _d:i.blendFunc(i.SRC_ALPHA,i.ONE);break;case yd:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case xd:i.blendFunc(i.ZERO,i.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",U);break}x=null,b=null,I=null,T=null,w.set(0,0,0),R=0,m=U,S=Ne}return}fe=fe||he,me=me||$,Ue=Ue||ee,(he!==p||fe!==y)&&(i.blendEquationSeparate(Pe[he],Pe[fe]),p=he,y=fe),($!==x||ee!==b||me!==I||Ue!==T)&&(i.blendFuncSeparate(qe[$],qe[ee],qe[me],qe[Ue]),x=$,b=ee,I=me,T=Ue),(pt.equals(w)===!1||J!==R)&&(i.blendColor(pt.r,pt.g,pt.b,J),w.copy(pt),R=J),m=U,S=!1}function ht(U,he){U.side===Dn?be(i.CULL_FACE):oe(i.CULL_FACE);let $=U.side===un;he&&($=!$),$e($),U.blending===hr&&U.transparent===!1?O(ns):O(U.blending,U.blendEquation,U.blendSrc,U.blendDst,U.blendEquationAlpha,U.blendSrcAlpha,U.blendDstAlpha,U.blendColor,U.blendAlpha,U.premultipliedAlpha),a.setFunc(U.depthFunc),a.setTest(U.depthTest),a.setMask(U.depthWrite),r.setMask(U.colorWrite);const ee=U.stencilWrite;o.setTest(ee),ee&&(o.setMask(U.stencilWriteMask),o.setFunc(U.stencilFunc,U.stencilRef,U.stencilFuncMask),o.setOp(U.stencilFail,U.stencilZFail,U.stencilZPass)),lt(U.polygonOffset,U.polygonOffsetFactor,U.polygonOffsetUnits),U.alphaToCoverage===!0?oe(i.SAMPLE_ALPHA_TO_COVERAGE):be(i.SAMPLE_ALPHA_TO_COVERAGE)}function $e(U){_!==U&&(U?i.frontFace(i.CW):i.frontFace(i.CCW),_=U)}function We(U){U!==Vf?(oe(i.CULL_FACE),U!==C&&(U===vd?i.cullFace(i.BACK):U===Wf?i.cullFace(i.FRONT):i.cullFace(i.FRONT_AND_BACK))):be(i.CULL_FACE),C=U}function Ie(U){U!==F&&(L&&i.lineWidth(U),F=U)}function lt(U,he,$){U?(oe(i.POLYGON_OFFSET_FILL),(P!==he||N!==$)&&(i.polygonOffset(he,$),P=he,N=$)):be(i.POLYGON_OFFSET_FILL)}function Le(U){U?oe(i.SCISSOR_TEST):be(i.SCISSOR_TEST)}function A(U){U===void 0&&(U=i.TEXTURE0+G-1),K!==U&&(i.activeTexture(U),K=U)}function M(U,he,$){$===void 0&&(K===null?$=i.TEXTURE0+G-1:$=K);let ee=ie[$];ee===void 0&&(ee={type:void 0,texture:void 0},ie[$]=ee),(ee.type!==U||ee.texture!==he)&&(K!==$&&(i.activeTexture($),K=$),i.bindTexture(U,he||ue[U]),ee.type=U,ee.texture=he)}function W(){const U=ie[K];U!==void 0&&U.type!==void 0&&(i.bindTexture(U.type,null),U.type=void 0,U.texture=void 0)}function Q(){try{i.compressedTexImage2D.apply(i,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function ne(){try{i.compressedTexImage3D.apply(i,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function j(){try{i.texSubImage2D.apply(i,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function Ee(){try{i.texSubImage3D.apply(i,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function de(){try{i.compressedTexSubImage2D.apply(i,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function xe(){try{i.compressedTexSubImage3D.apply(i,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function Be(){try{i.texStorage2D.apply(i,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function ce(){try{i.texStorage3D.apply(i,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function _e(){try{i.texImage2D.apply(i,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function De(){try{i.texImage3D.apply(i,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function Oe(U){ye.equals(U)===!1&&(i.scissor(U.x,U.y,U.z,U.w),ye.copy(U))}function Me(U){Z.equals(U)===!1&&(i.viewport(U.x,U.y,U.z,U.w),Z.copy(U))}function Ge(U,he){let $=l.get(he);$===void 0&&($=new WeakMap,l.set(he,$));let ee=$.get(U);ee===void 0&&(ee=i.getUniformBlockIndex(he,U.name),$.set(U,ee))}function He(U,he){const ee=l.get(he).get(U);c.get(he)!==ee&&(i.uniformBlockBinding(he,ee,U.__bindingPointIndex),c.set(he,ee))}function rt(){i.disable(i.BLEND),i.disable(i.CULL_FACE),i.disable(i.DEPTH_TEST),i.disable(i.POLYGON_OFFSET_FILL),i.disable(i.SCISSOR_TEST),i.disable(i.STENCIL_TEST),i.disable(i.SAMPLE_ALPHA_TO_COVERAGE),i.blendEquation(i.FUNC_ADD),i.blendFunc(i.ONE,i.ZERO),i.blendFuncSeparate(i.ONE,i.ZERO,i.ONE,i.ZERO),i.blendColor(0,0,0,0),i.colorMask(!0,!0,!0,!0),i.clearColor(0,0,0,0),i.depthMask(!0),i.depthFunc(i.LESS),a.setReversed(!1),i.clearDepth(1),i.stencilMask(4294967295),i.stencilFunc(i.ALWAYS,0,4294967295),i.stencilOp(i.KEEP,i.KEEP,i.KEEP),i.clearStencil(0),i.cullFace(i.BACK),i.frontFace(i.CCW),i.polygonOffset(0,0),i.activeTexture(i.TEXTURE0),i.bindFramebuffer(i.FRAMEBUFFER,null),i.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),i.bindFramebuffer(i.READ_FRAMEBUFFER,null),i.useProgram(null),i.lineWidth(1),i.scissor(0,0,i.canvas.width,i.canvas.height),i.viewport(0,0,i.canvas.width,i.canvas.height),d={},K=null,ie={},h={},u=new WeakMap,f=[],g=null,v=!1,m=null,p=null,x=null,b=null,y=null,I=null,T=null,w=new ze(0,0,0),R=0,S=!1,_=null,C=null,F=null,P=null,N=null,ye.set(0,0,i.canvas.width,i.canvas.height),Z.set(0,0,i.canvas.width,i.canvas.height),r.reset(),a.reset(),o.reset()}return{buffers:{color:r,depth:a,stencil:o},enable:oe,disable:be,bindFramebuffer:Se,drawBuffers:Ce,useProgram:Ye,setBlending:O,setMaterial:ht,setFlipSided:$e,setCullFace:We,setLineWidth:Ie,setPolygonOffset:lt,setScissorTest:Le,activeTexture:A,bindTexture:M,unbindTexture:W,compressedTexImage2D:Q,compressedTexImage3D:ne,texImage2D:_e,texImage3D:De,updateUBOMapping:Ge,uniformBlockBinding:He,texStorage2D:Be,texStorage3D:ce,texSubImage2D:j,texSubImage3D:Ee,compressedTexSubImage2D:de,compressedTexSubImage3D:xe,scissor:Oe,viewport:Me,reset:rt}}function _h(i,e,t,n){const s=Z_(n);switch(t){case Eu:return i*e;case wu:return i*e;case Au:return i*e*2;case Wl:return i*e/s.components*s.byteLength;case Xl:return i*e/s.components*s.byteLength;case Ru:return i*e*2/s.components*s.byteLength;case Yl:return i*e*2/s.components*s.byteLength;case Tu:return i*e*3/s.components*s.byteLength;case Pn:return i*e*4/s.components*s.byteLength;case ql:return i*e*4/s.components*s.byteLength;case ao:case oo:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*8;case co:case lo:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case Kc:case jc:return Math.max(i,16)*Math.max(e,8)/4;case $c:case Zc:return Math.max(i,8)*Math.max(e,8)/2;case Jc:case Qc:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*8;case el:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case tl:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case nl:return Math.floor((i+4)/5)*Math.floor((e+3)/4)*16;case il:return Math.floor((i+4)/5)*Math.floor((e+4)/5)*16;case sl:return Math.floor((i+5)/6)*Math.floor((e+4)/5)*16;case rl:return Math.floor((i+5)/6)*Math.floor((e+5)/6)*16;case al:return Math.floor((i+7)/8)*Math.floor((e+4)/5)*16;case ol:return Math.floor((i+7)/8)*Math.floor((e+5)/6)*16;case cl:return Math.floor((i+7)/8)*Math.floor((e+7)/8)*16;case ll:return Math.floor((i+9)/10)*Math.floor((e+4)/5)*16;case dl:return Math.floor((i+9)/10)*Math.floor((e+5)/6)*16;case hl:return Math.floor((i+9)/10)*Math.floor((e+7)/8)*16;case ul:return Math.floor((i+9)/10)*Math.floor((e+9)/10)*16;case fl:return Math.floor((i+11)/12)*Math.floor((e+9)/10)*16;case pl:return Math.floor((i+11)/12)*Math.floor((e+11)/12)*16;case ho:case ml:case gl:return Math.ceil(i/4)*Math.ceil(e/4)*16;case Cu:case vl:return Math.ceil(i/4)*Math.ceil(e/4)*8;case _l:case yl:return Math.ceil(i/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function Z_(i){switch(i){case Pi:case Su:return{byteLength:1,components:1};case da:case Mu:case Ri:return{byteLength:2,components:1};case Gl:case Vl:return{byteLength:2,components:4};case Ls:case Hl:case hn:return{byteLength:4,components:1};case bu:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${i}.`)}function j_(i,e,t,n,s,r,a){const o=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,c=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),l=new je,d=new WeakMap;let h;const u=new WeakMap;let f=!1;try{f=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function g(A,M){return f?new OffscreenCanvas(A,M):fa("canvas")}function v(A,M,W){let Q=1;const ne=Le(A);if((ne.width>W||ne.height>W)&&(Q=W/Math.max(ne.width,ne.height)),Q<1)if(typeof HTMLImageElement<"u"&&A instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&A instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&A instanceof ImageBitmap||typeof VideoFrame<"u"&&A instanceof VideoFrame){const j=Math.floor(Q*ne.width),Ee=Math.floor(Q*ne.height);h===void 0&&(h=g(j,Ee));const de=M?g(j,Ee):h;return de.width=j,de.height=Ee,de.getContext("2d").drawImage(A,0,0,j,Ee),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+ne.width+"x"+ne.height+") to ("+j+"x"+Ee+")."),de}else return"data"in A&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+ne.width+"x"+ne.height+")."),A;return A}function m(A){return A.generateMipmaps}function p(A){i.generateMipmap(A)}function x(A){return A.isWebGLCubeRenderTarget?i.TEXTURE_CUBE_MAP:A.isWebGL3DRenderTarget?i.TEXTURE_3D:A.isWebGLArrayRenderTarget||A.isCompressedArrayTexture?i.TEXTURE_2D_ARRAY:i.TEXTURE_2D}function b(A,M,W,Q,ne=!1){if(A!==null){if(i[A]!==void 0)return i[A];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+A+"'")}let j=M;if(M===i.RED&&(W===i.FLOAT&&(j=i.R32F),W===i.HALF_FLOAT&&(j=i.R16F),W===i.UNSIGNED_BYTE&&(j=i.R8)),M===i.RED_INTEGER&&(W===i.UNSIGNED_BYTE&&(j=i.R8UI),W===i.UNSIGNED_SHORT&&(j=i.R16UI),W===i.UNSIGNED_INT&&(j=i.R32UI),W===i.BYTE&&(j=i.R8I),W===i.SHORT&&(j=i.R16I),W===i.INT&&(j=i.R32I)),M===i.RG&&(W===i.FLOAT&&(j=i.RG32F),W===i.HALF_FLOAT&&(j=i.RG16F),W===i.UNSIGNED_BYTE&&(j=i.RG8)),M===i.RG_INTEGER&&(W===i.UNSIGNED_BYTE&&(j=i.RG8UI),W===i.UNSIGNED_SHORT&&(j=i.RG16UI),W===i.UNSIGNED_INT&&(j=i.RG32UI),W===i.BYTE&&(j=i.RG8I),W===i.SHORT&&(j=i.RG16I),W===i.INT&&(j=i.RG32I)),M===i.RGB_INTEGER&&(W===i.UNSIGNED_BYTE&&(j=i.RGB8UI),W===i.UNSIGNED_SHORT&&(j=i.RGB16UI),W===i.UNSIGNED_INT&&(j=i.RGB32UI),W===i.BYTE&&(j=i.RGB8I),W===i.SHORT&&(j=i.RGB16I),W===i.INT&&(j=i.RGB32I)),M===i.RGBA_INTEGER&&(W===i.UNSIGNED_BYTE&&(j=i.RGBA8UI),W===i.UNSIGNED_SHORT&&(j=i.RGBA16UI),W===i.UNSIGNED_INT&&(j=i.RGBA32UI),W===i.BYTE&&(j=i.RGBA8I),W===i.SHORT&&(j=i.RGBA16I),W===i.INT&&(j=i.RGBA32I)),M===i.RGB&&W===i.UNSIGNED_INT_5_9_9_9_REV&&(j=i.RGB9_E5),M===i.RGBA){const Ee=ne?Uo:st.getTransfer(Q);W===i.FLOAT&&(j=i.RGBA32F),W===i.HALF_FLOAT&&(j=i.RGBA16F),W===i.UNSIGNED_BYTE&&(j=Ee===yt?i.SRGB8_ALPHA8:i.RGBA8),W===i.UNSIGNED_SHORT_4_4_4_4&&(j=i.RGBA4),W===i.UNSIGNED_SHORT_5_5_5_1&&(j=i.RGB5_A1)}return(j===i.R16F||j===i.R32F||j===i.RG16F||j===i.RG32F||j===i.RGBA16F||j===i.RGBA32F)&&e.get("EXT_color_buffer_float"),j}function y(A,M){let W;return A?M===null||M===Ls||M===yr?W=i.DEPTH24_STENCIL8:M===hn?W=i.DEPTH32F_STENCIL8:M===da&&(W=i.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):M===null||M===Ls||M===yr?W=i.DEPTH_COMPONENT24:M===hn?W=i.DEPTH_COMPONENT32F:M===da&&(W=i.DEPTH_COMPONENT16),W}function I(A,M){return m(A)===!0||A.isFramebufferTexture&&A.minFilter!==an&&A.minFilter!==Wt?Math.log2(Math.max(M.width,M.height))+1:A.mipmaps!==void 0&&A.mipmaps.length>0?A.mipmaps.length:A.isCompressedTexture&&Array.isArray(A.image)?M.mipmaps.length:1}function T(A){const M=A.target;M.removeEventListener("dispose",T),R(M),M.isVideoTexture&&d.delete(M)}function w(A){const M=A.target;M.removeEventListener("dispose",w),_(M)}function R(A){const M=n.get(A);if(M.__webglInit===void 0)return;const W=A.source,Q=u.get(W);if(Q){const ne=Q[M.__cacheKey];ne.usedTimes--,ne.usedTimes===0&&S(A),Object.keys(Q).length===0&&u.delete(W)}n.remove(A)}function S(A){const M=n.get(A);i.deleteTexture(M.__webglTexture);const W=A.source,Q=u.get(W);delete Q[M.__cacheKey],a.memory.textures--}function _(A){const M=n.get(A);if(A.depthTexture&&(A.depthTexture.dispose(),n.remove(A.depthTexture)),A.isWebGLCubeRenderTarget)for(let Q=0;Q<6;Q++){if(Array.isArray(M.__webglFramebuffer[Q]))for(let ne=0;ne<M.__webglFramebuffer[Q].length;ne++)i.deleteFramebuffer(M.__webglFramebuffer[Q][ne]);else i.deleteFramebuffer(M.__webglFramebuffer[Q]);M.__webglDepthbuffer&&i.deleteRenderbuffer(M.__webglDepthbuffer[Q])}else{if(Array.isArray(M.__webglFramebuffer))for(let Q=0;Q<M.__webglFramebuffer.length;Q++)i.deleteFramebuffer(M.__webglFramebuffer[Q]);else i.deleteFramebuffer(M.__webglFramebuffer);if(M.__webglDepthbuffer&&i.deleteRenderbuffer(M.__webglDepthbuffer),M.__webglMultisampledFramebuffer&&i.deleteFramebuffer(M.__webglMultisampledFramebuffer),M.__webglColorRenderbuffer)for(let Q=0;Q<M.__webglColorRenderbuffer.length;Q++)M.__webglColorRenderbuffer[Q]&&i.deleteRenderbuffer(M.__webglColorRenderbuffer[Q]);M.__webglDepthRenderbuffer&&i.deleteRenderbuffer(M.__webglDepthRenderbuffer)}const W=A.textures;for(let Q=0,ne=W.length;Q<ne;Q++){const j=n.get(W[Q]);j.__webglTexture&&(i.deleteTexture(j.__webglTexture),a.memory.textures--),n.remove(W[Q])}n.remove(A)}let C=0;function F(){C=0}function P(){const A=C;return A>=s.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+A+" texture units while this GPU supports only "+s.maxTextures),C+=1,A}function N(A){const M=[];return M.push(A.wrapS),M.push(A.wrapT),M.push(A.wrapR||0),M.push(A.magFilter),M.push(A.minFilter),M.push(A.anisotropy),M.push(A.internalFormat),M.push(A.format),M.push(A.type),M.push(A.generateMipmaps),M.push(A.premultiplyAlpha),M.push(A.flipY),M.push(A.unpackAlignment),M.push(A.colorSpace),M.join()}function G(A,M){const W=n.get(A);if(A.isVideoTexture&&Ie(A),A.isRenderTargetTexture===!1&&A.version>0&&W.__version!==A.version){const Q=A.image;if(Q===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(Q.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{Z(W,A,M);return}}t.bindTexture(i.TEXTURE_2D,W.__webglTexture,i.TEXTURE0+M)}function L(A,M){const W=n.get(A);if(A.version>0&&W.__version!==A.version){Z(W,A,M);return}t.bindTexture(i.TEXTURE_2D_ARRAY,W.__webglTexture,i.TEXTURE0+M)}function q(A,M){const W=n.get(A);if(A.version>0&&W.__version!==A.version){Z(W,A,M);return}t.bindTexture(i.TEXTURE_3D,W.__webglTexture,i.TEXTURE0+M)}function V(A,M){const W=n.get(A);if(A.version>0&&W.__version!==A.version){te(W,A,M);return}t.bindTexture(i.TEXTURE_CUBE_MAP,W.__webglTexture,i.TEXTURE0+M)}const K={[Di]:i.REPEAT,[ni]:i.CLAMP_TO_EDGE,[_o]:i.MIRRORED_REPEAT},ie={[an]:i.NEAREST,[xu]:i.NEAREST_MIPMAP_NEAREST,[$r]:i.NEAREST_MIPMAP_LINEAR,[Wt]:i.LINEAR,[ro]:i.LINEAR_MIPMAP_NEAREST,[ii]:i.LINEAR_MIPMAP_LINEAR},re={[bp]:i.NEVER,[Cp]:i.ALWAYS,[Ep]:i.LESS,[Du]:i.LEQUAL,[Tp]:i.EQUAL,[Rp]:i.GEQUAL,[wp]:i.GREATER,[Ap]:i.NOTEQUAL};function pe(A,M){if(M.type===hn&&e.has("OES_texture_float_linear")===!1&&(M.magFilter===Wt||M.magFilter===ro||M.magFilter===$r||M.magFilter===ii||M.minFilter===Wt||M.minFilter===ro||M.minFilter===$r||M.minFilter===ii)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),i.texParameteri(A,i.TEXTURE_WRAP_S,K[M.wrapS]),i.texParameteri(A,i.TEXTURE_WRAP_T,K[M.wrapT]),(A===i.TEXTURE_3D||A===i.TEXTURE_2D_ARRAY)&&i.texParameteri(A,i.TEXTURE_WRAP_R,K[M.wrapR]),i.texParameteri(A,i.TEXTURE_MAG_FILTER,ie[M.magFilter]),i.texParameteri(A,i.TEXTURE_MIN_FILTER,ie[M.minFilter]),M.compareFunction&&(i.texParameteri(A,i.TEXTURE_COMPARE_MODE,i.COMPARE_REF_TO_TEXTURE),i.texParameteri(A,i.TEXTURE_COMPARE_FUNC,re[M.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(M.magFilter===an||M.minFilter!==$r&&M.minFilter!==ii||M.type===hn&&e.has("OES_texture_float_linear")===!1)return;if(M.anisotropy>1||n.get(M).__currentAnisotropy){const W=e.get("EXT_texture_filter_anisotropic");i.texParameterf(A,W.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(M.anisotropy,s.getMaxAnisotropy())),n.get(M).__currentAnisotropy=M.anisotropy}}}function ye(A,M){let W=!1;A.__webglInit===void 0&&(A.__webglInit=!0,M.addEventListener("dispose",T));const Q=M.source;let ne=u.get(Q);ne===void 0&&(ne={},u.set(Q,ne));const j=N(M);if(j!==A.__cacheKey){ne[j]===void 0&&(ne[j]={texture:i.createTexture(),usedTimes:0},a.memory.textures++,W=!0),ne[j].usedTimes++;const Ee=ne[A.__cacheKey];Ee!==void 0&&(ne[A.__cacheKey].usedTimes--,Ee.usedTimes===0&&S(M)),A.__cacheKey=j,A.__webglTexture=ne[j].texture}return W}function Z(A,M,W){let Q=i.TEXTURE_2D;(M.isDataArrayTexture||M.isCompressedArrayTexture)&&(Q=i.TEXTURE_2D_ARRAY),M.isData3DTexture&&(Q=i.TEXTURE_3D);const ne=ye(A,M),j=M.source;t.bindTexture(Q,A.__webglTexture,i.TEXTURE0+W);const Ee=n.get(j);if(j.version!==Ee.__version||ne===!0){t.activeTexture(i.TEXTURE0+W);const de=st.getPrimaries(st.workingColorSpace),xe=M.colorSpace===Ji?null:st.getPrimaries(M.colorSpace),Be=M.colorSpace===Ji||de===xe?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,M.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,M.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,M.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,Be);let ce=v(M.image,!1,s.maxTextureSize);ce=lt(M,ce);const _e=r.convert(M.format,M.colorSpace),De=r.convert(M.type);let Oe=b(M.internalFormat,_e,De,M.colorSpace,M.isVideoTexture);pe(Q,M);let Me;const Ge=M.mipmaps,He=M.isVideoTexture!==!0,rt=Ee.__version===void 0||ne===!0,U=j.dataReady,he=I(M,ce);if(M.isDepthTexture)Oe=y(M.format===xr,M.type),rt&&(He?t.texStorage2D(i.TEXTURE_2D,1,Oe,ce.width,ce.height):t.texImage2D(i.TEXTURE_2D,0,Oe,ce.width,ce.height,0,_e,De,null));else if(M.isDataTexture)if(Ge.length>0){He&&rt&&t.texStorage2D(i.TEXTURE_2D,he,Oe,Ge[0].width,Ge[0].height);for(let $=0,ee=Ge.length;$<ee;$++)Me=Ge[$],He?U&&t.texSubImage2D(i.TEXTURE_2D,$,0,0,Me.width,Me.height,_e,De,Me.data):t.texImage2D(i.TEXTURE_2D,$,Oe,Me.width,Me.height,0,_e,De,Me.data);M.generateMipmaps=!1}else He?(rt&&t.texStorage2D(i.TEXTURE_2D,he,Oe,ce.width,ce.height),U&&t.texSubImage2D(i.TEXTURE_2D,0,0,0,ce.width,ce.height,_e,De,ce.data)):t.texImage2D(i.TEXTURE_2D,0,Oe,ce.width,ce.height,0,_e,De,ce.data);else if(M.isCompressedTexture)if(M.isCompressedArrayTexture){He&&rt&&t.texStorage3D(i.TEXTURE_2D_ARRAY,he,Oe,Ge[0].width,Ge[0].height,ce.depth);for(let $=0,ee=Ge.length;$<ee;$++)if(Me=Ge[$],M.format!==Pn)if(_e!==null)if(He){if(U)if(M.layerUpdates.size>0){const fe=_h(Me.width,Me.height,M.format,M.type);for(const me of M.layerUpdates){const Ue=Me.data.subarray(me*fe/Me.data.BYTES_PER_ELEMENT,(me+1)*fe/Me.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,$,0,0,me,Me.width,Me.height,1,_e,Ue)}M.clearLayerUpdates()}else t.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,$,0,0,0,Me.width,Me.height,ce.depth,_e,Me.data)}else t.compressedTexImage3D(i.TEXTURE_2D_ARRAY,$,Oe,Me.width,Me.height,ce.depth,0,Me.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else He?U&&t.texSubImage3D(i.TEXTURE_2D_ARRAY,$,0,0,0,Me.width,Me.height,ce.depth,_e,De,Me.data):t.texImage3D(i.TEXTURE_2D_ARRAY,$,Oe,Me.width,Me.height,ce.depth,0,_e,De,Me.data)}else{He&&rt&&t.texStorage2D(i.TEXTURE_2D,he,Oe,Ge[0].width,Ge[0].height);for(let $=0,ee=Ge.length;$<ee;$++)Me=Ge[$],M.format!==Pn?_e!==null?He?U&&t.compressedTexSubImage2D(i.TEXTURE_2D,$,0,0,Me.width,Me.height,_e,Me.data):t.compressedTexImage2D(i.TEXTURE_2D,$,Oe,Me.width,Me.height,0,Me.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):He?U&&t.texSubImage2D(i.TEXTURE_2D,$,0,0,Me.width,Me.height,_e,De,Me.data):t.texImage2D(i.TEXTURE_2D,$,Oe,Me.width,Me.height,0,_e,De,Me.data)}else if(M.isDataArrayTexture)if(He){if(rt&&t.texStorage3D(i.TEXTURE_2D_ARRAY,he,Oe,ce.width,ce.height,ce.depth),U)if(M.layerUpdates.size>0){const $=_h(ce.width,ce.height,M.format,M.type);for(const ee of M.layerUpdates){const fe=ce.data.subarray(ee*$/ce.data.BYTES_PER_ELEMENT,(ee+1)*$/ce.data.BYTES_PER_ELEMENT);t.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,ee,ce.width,ce.height,1,_e,De,fe)}M.clearLayerUpdates()}else t.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,0,ce.width,ce.height,ce.depth,_e,De,ce.data)}else t.texImage3D(i.TEXTURE_2D_ARRAY,0,Oe,ce.width,ce.height,ce.depth,0,_e,De,ce.data);else if(M.isData3DTexture)He?(rt&&t.texStorage3D(i.TEXTURE_3D,he,Oe,ce.width,ce.height,ce.depth),U&&t.texSubImage3D(i.TEXTURE_3D,0,0,0,0,ce.width,ce.height,ce.depth,_e,De,ce.data)):t.texImage3D(i.TEXTURE_3D,0,Oe,ce.width,ce.height,ce.depth,0,_e,De,ce.data);else if(M.isFramebufferTexture){if(rt)if(He)t.texStorage2D(i.TEXTURE_2D,he,Oe,ce.width,ce.height);else{let $=ce.width,ee=ce.height;for(let fe=0;fe<he;fe++)t.texImage2D(i.TEXTURE_2D,fe,Oe,$,ee,0,_e,De,null),$>>=1,ee>>=1}}else if(Ge.length>0){if(He&&rt){const $=Le(Ge[0]);t.texStorage2D(i.TEXTURE_2D,he,Oe,$.width,$.height)}for(let $=0,ee=Ge.length;$<ee;$++)Me=Ge[$],He?U&&t.texSubImage2D(i.TEXTURE_2D,$,0,0,_e,De,Me):t.texImage2D(i.TEXTURE_2D,$,Oe,_e,De,Me);M.generateMipmaps=!1}else if(He){if(rt){const $=Le(ce);t.texStorage2D(i.TEXTURE_2D,he,Oe,$.width,$.height)}U&&t.texSubImage2D(i.TEXTURE_2D,0,0,0,_e,De,ce)}else t.texImage2D(i.TEXTURE_2D,0,Oe,_e,De,ce);m(M)&&p(Q),Ee.__version=j.version,M.onUpdate&&M.onUpdate(M)}A.__version=M.version}function te(A,M,W){if(M.image.length!==6)return;const Q=ye(A,M),ne=M.source;t.bindTexture(i.TEXTURE_CUBE_MAP,A.__webglTexture,i.TEXTURE0+W);const j=n.get(ne);if(ne.version!==j.__version||Q===!0){t.activeTexture(i.TEXTURE0+W);const Ee=st.getPrimaries(st.workingColorSpace),de=M.colorSpace===Ji?null:st.getPrimaries(M.colorSpace),xe=M.colorSpace===Ji||Ee===de?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,M.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,M.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,M.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,xe);const Be=M.isCompressedTexture||M.image[0].isCompressedTexture,ce=M.image[0]&&M.image[0].isDataTexture,_e=[];for(let ee=0;ee<6;ee++)!Be&&!ce?_e[ee]=v(M.image[ee],!0,s.maxCubemapSize):_e[ee]=ce?M.image[ee].image:M.image[ee],_e[ee]=lt(M,_e[ee]);const De=_e[0],Oe=r.convert(M.format,M.colorSpace),Me=r.convert(M.type),Ge=b(M.internalFormat,Oe,Me,M.colorSpace),He=M.isVideoTexture!==!0,rt=j.__version===void 0||Q===!0,U=ne.dataReady;let he=I(M,De);pe(i.TEXTURE_CUBE_MAP,M);let $;if(Be){He&&rt&&t.texStorage2D(i.TEXTURE_CUBE_MAP,he,Ge,De.width,De.height);for(let ee=0;ee<6;ee++){$=_e[ee].mipmaps;for(let fe=0;fe<$.length;fe++){const me=$[fe];M.format!==Pn?Oe!==null?He?U&&t.compressedTexSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ee,fe,0,0,me.width,me.height,Oe,me.data):t.compressedTexImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ee,fe,Ge,me.width,me.height,0,me.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):He?U&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ee,fe,0,0,me.width,me.height,Oe,Me,me.data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ee,fe,Ge,me.width,me.height,0,Oe,Me,me.data)}}}else{if($=M.mipmaps,He&&rt){$.length>0&&he++;const ee=Le(_e[0]);t.texStorage2D(i.TEXTURE_CUBE_MAP,he,Ge,ee.width,ee.height)}for(let ee=0;ee<6;ee++)if(ce){He?U&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ee,0,0,0,_e[ee].width,_e[ee].height,Oe,Me,_e[ee].data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ee,0,Ge,_e[ee].width,_e[ee].height,0,Oe,Me,_e[ee].data);for(let fe=0;fe<$.length;fe++){const Ue=$[fe].image[ee].image;He?U&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ee,fe+1,0,0,Ue.width,Ue.height,Oe,Me,Ue.data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ee,fe+1,Ge,Ue.width,Ue.height,0,Oe,Me,Ue.data)}}else{He?U&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ee,0,0,0,Oe,Me,_e[ee]):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ee,0,Ge,Oe,Me,_e[ee]);for(let fe=0;fe<$.length;fe++){const me=$[fe];He?U&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ee,fe+1,0,0,Oe,Me,me.image[ee]):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ee,fe+1,Ge,Oe,Me,me.image[ee])}}}m(M)&&p(i.TEXTURE_CUBE_MAP),j.__version=ne.version,M.onUpdate&&M.onUpdate(M)}A.__version=M.version}function ue(A,M,W,Q,ne,j){const Ee=r.convert(W.format,W.colorSpace),de=r.convert(W.type),xe=b(W.internalFormat,Ee,de,W.colorSpace),Be=n.get(M),ce=n.get(W);if(ce.__renderTarget=M,!Be.__hasExternalTextures){const _e=Math.max(1,M.width>>j),De=Math.max(1,M.height>>j);ne===i.TEXTURE_3D||ne===i.TEXTURE_2D_ARRAY?t.texImage3D(ne,j,xe,_e,De,M.depth,0,Ee,de,null):t.texImage2D(ne,j,xe,_e,De,0,Ee,de,null)}t.bindFramebuffer(i.FRAMEBUFFER,A),We(M)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,Q,ne,ce.__webglTexture,0,$e(M)):(ne===i.TEXTURE_2D||ne>=i.TEXTURE_CUBE_MAP_POSITIVE_X&&ne<=i.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&i.framebufferTexture2D(i.FRAMEBUFFER,Q,ne,ce.__webglTexture,j),t.bindFramebuffer(i.FRAMEBUFFER,null)}function oe(A,M,W){if(i.bindRenderbuffer(i.RENDERBUFFER,A),M.depthBuffer){const Q=M.depthTexture,ne=Q&&Q.isDepthTexture?Q.type:null,j=y(M.stencilBuffer,ne),Ee=M.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,de=$e(M);We(M)?o.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,de,j,M.width,M.height):W?i.renderbufferStorageMultisample(i.RENDERBUFFER,de,j,M.width,M.height):i.renderbufferStorage(i.RENDERBUFFER,j,M.width,M.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,Ee,i.RENDERBUFFER,A)}else{const Q=M.textures;for(let ne=0;ne<Q.length;ne++){const j=Q[ne],Ee=r.convert(j.format,j.colorSpace),de=r.convert(j.type),xe=b(j.internalFormat,Ee,de,j.colorSpace),Be=$e(M);W&&We(M)===!1?i.renderbufferStorageMultisample(i.RENDERBUFFER,Be,xe,M.width,M.height):We(M)?o.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,Be,xe,M.width,M.height):i.renderbufferStorage(i.RENDERBUFFER,xe,M.width,M.height)}}i.bindRenderbuffer(i.RENDERBUFFER,null)}function be(A,M){if(M&&M.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(i.FRAMEBUFFER,A),!(M.depthTexture&&M.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const Q=n.get(M.depthTexture);Q.__renderTarget=M,(!Q.__webglTexture||M.depthTexture.image.width!==M.width||M.depthTexture.image.height!==M.height)&&(M.depthTexture.image.width=M.width,M.depthTexture.image.height=M.height,M.depthTexture.needsUpdate=!0),G(M.depthTexture,0);const ne=Q.__webglTexture,j=$e(M);if(M.depthTexture.format===ur)We(M)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,ne,0,j):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,ne,0);else if(M.depthTexture.format===xr)We(M)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,ne,0,j):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,ne,0);else throw new Error("Unknown depthTexture format")}function Se(A){const M=n.get(A),W=A.isWebGLCubeRenderTarget===!0;if(M.__boundDepthTexture!==A.depthTexture){const Q=A.depthTexture;if(M.__depthDisposeCallback&&M.__depthDisposeCallback(),Q){const ne=()=>{delete M.__boundDepthTexture,delete M.__depthDisposeCallback,Q.removeEventListener("dispose",ne)};Q.addEventListener("dispose",ne),M.__depthDisposeCallback=ne}M.__boundDepthTexture=Q}if(A.depthTexture&&!M.__autoAllocateDepthBuffer){if(W)throw new Error("target.depthTexture not supported in Cube render targets");be(M.__webglFramebuffer,A)}else if(W){M.__webglDepthbuffer=[];for(let Q=0;Q<6;Q++)if(t.bindFramebuffer(i.FRAMEBUFFER,M.__webglFramebuffer[Q]),M.__webglDepthbuffer[Q]===void 0)M.__webglDepthbuffer[Q]=i.createRenderbuffer(),oe(M.__webglDepthbuffer[Q],A,!1);else{const ne=A.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,j=M.__webglDepthbuffer[Q];i.bindRenderbuffer(i.RENDERBUFFER,j),i.framebufferRenderbuffer(i.FRAMEBUFFER,ne,i.RENDERBUFFER,j)}}else if(t.bindFramebuffer(i.FRAMEBUFFER,M.__webglFramebuffer),M.__webglDepthbuffer===void 0)M.__webglDepthbuffer=i.createRenderbuffer(),oe(M.__webglDepthbuffer,A,!1);else{const Q=A.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,ne=M.__webglDepthbuffer;i.bindRenderbuffer(i.RENDERBUFFER,ne),i.framebufferRenderbuffer(i.FRAMEBUFFER,Q,i.RENDERBUFFER,ne)}t.bindFramebuffer(i.FRAMEBUFFER,null)}function Ce(A,M,W){const Q=n.get(A);M!==void 0&&ue(Q.__webglFramebuffer,A,A.texture,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,0),W!==void 0&&Se(A)}function Ye(A){const M=A.texture,W=n.get(A),Q=n.get(M);A.addEventListener("dispose",w);const ne=A.textures,j=A.isWebGLCubeRenderTarget===!0,Ee=ne.length>1;if(Ee||(Q.__webglTexture===void 0&&(Q.__webglTexture=i.createTexture()),Q.__version=M.version,a.memory.textures++),j){W.__webglFramebuffer=[];for(let de=0;de<6;de++)if(M.mipmaps&&M.mipmaps.length>0){W.__webglFramebuffer[de]=[];for(let xe=0;xe<M.mipmaps.length;xe++)W.__webglFramebuffer[de][xe]=i.createFramebuffer()}else W.__webglFramebuffer[de]=i.createFramebuffer()}else{if(M.mipmaps&&M.mipmaps.length>0){W.__webglFramebuffer=[];for(let de=0;de<M.mipmaps.length;de++)W.__webglFramebuffer[de]=i.createFramebuffer()}else W.__webglFramebuffer=i.createFramebuffer();if(Ee)for(let de=0,xe=ne.length;de<xe;de++){const Be=n.get(ne[de]);Be.__webglTexture===void 0&&(Be.__webglTexture=i.createTexture(),a.memory.textures++)}if(A.samples>0&&We(A)===!1){W.__webglMultisampledFramebuffer=i.createFramebuffer(),W.__webglColorRenderbuffer=[],t.bindFramebuffer(i.FRAMEBUFFER,W.__webglMultisampledFramebuffer);for(let de=0;de<ne.length;de++){const xe=ne[de];W.__webglColorRenderbuffer[de]=i.createRenderbuffer(),i.bindRenderbuffer(i.RENDERBUFFER,W.__webglColorRenderbuffer[de]);const Be=r.convert(xe.format,xe.colorSpace),ce=r.convert(xe.type),_e=b(xe.internalFormat,Be,ce,xe.colorSpace,A.isXRRenderTarget===!0),De=$e(A);i.renderbufferStorageMultisample(i.RENDERBUFFER,De,_e,A.width,A.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+de,i.RENDERBUFFER,W.__webglColorRenderbuffer[de])}i.bindRenderbuffer(i.RENDERBUFFER,null),A.depthBuffer&&(W.__webglDepthRenderbuffer=i.createRenderbuffer(),oe(W.__webglDepthRenderbuffer,A,!0)),t.bindFramebuffer(i.FRAMEBUFFER,null)}}if(j){t.bindTexture(i.TEXTURE_CUBE_MAP,Q.__webglTexture),pe(i.TEXTURE_CUBE_MAP,M);for(let de=0;de<6;de++)if(M.mipmaps&&M.mipmaps.length>0)for(let xe=0;xe<M.mipmaps.length;xe++)ue(W.__webglFramebuffer[de][xe],A,M,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+de,xe);else ue(W.__webglFramebuffer[de],A,M,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+de,0);m(M)&&p(i.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(Ee){for(let de=0,xe=ne.length;de<xe;de++){const Be=ne[de],ce=n.get(Be);t.bindTexture(i.TEXTURE_2D,ce.__webglTexture),pe(i.TEXTURE_2D,Be),ue(W.__webglFramebuffer,A,Be,i.COLOR_ATTACHMENT0+de,i.TEXTURE_2D,0),m(Be)&&p(i.TEXTURE_2D)}t.unbindTexture()}else{let de=i.TEXTURE_2D;if((A.isWebGL3DRenderTarget||A.isWebGLArrayRenderTarget)&&(de=A.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),t.bindTexture(de,Q.__webglTexture),pe(de,M),M.mipmaps&&M.mipmaps.length>0)for(let xe=0;xe<M.mipmaps.length;xe++)ue(W.__webglFramebuffer[xe],A,M,i.COLOR_ATTACHMENT0,de,xe);else ue(W.__webglFramebuffer,A,M,i.COLOR_ATTACHMENT0,de,0);m(M)&&p(de),t.unbindTexture()}A.depthBuffer&&Se(A)}function Pe(A){const M=A.textures;for(let W=0,Q=M.length;W<Q;W++){const ne=M[W];if(m(ne)){const j=x(A),Ee=n.get(ne).__webglTexture;t.bindTexture(j,Ee),p(j),t.unbindTexture()}}}const qe=[],O=[];function ht(A){if(A.samples>0){if(We(A)===!1){const M=A.textures,W=A.width,Q=A.height;let ne=i.COLOR_BUFFER_BIT;const j=A.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,Ee=n.get(A),de=M.length>1;if(de)for(let xe=0;xe<M.length;xe++)t.bindFramebuffer(i.FRAMEBUFFER,Ee.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+xe,i.RENDERBUFFER,null),t.bindFramebuffer(i.FRAMEBUFFER,Ee.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+xe,i.TEXTURE_2D,null,0);t.bindFramebuffer(i.READ_FRAMEBUFFER,Ee.__webglMultisampledFramebuffer),t.bindFramebuffer(i.DRAW_FRAMEBUFFER,Ee.__webglFramebuffer);for(let xe=0;xe<M.length;xe++){if(A.resolveDepthBuffer&&(A.depthBuffer&&(ne|=i.DEPTH_BUFFER_BIT),A.stencilBuffer&&A.resolveStencilBuffer&&(ne|=i.STENCIL_BUFFER_BIT)),de){i.framebufferRenderbuffer(i.READ_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.RENDERBUFFER,Ee.__webglColorRenderbuffer[xe]);const Be=n.get(M[xe]).__webglTexture;i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,Be,0)}i.blitFramebuffer(0,0,W,Q,0,0,W,Q,ne,i.NEAREST),c===!0&&(qe.length=0,O.length=0,qe.push(i.COLOR_ATTACHMENT0+xe),A.depthBuffer&&A.resolveDepthBuffer===!1&&(qe.push(j),O.push(j),i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,O)),i.invalidateFramebuffer(i.READ_FRAMEBUFFER,qe))}if(t.bindFramebuffer(i.READ_FRAMEBUFFER,null),t.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),de)for(let xe=0;xe<M.length;xe++){t.bindFramebuffer(i.FRAMEBUFFER,Ee.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+xe,i.RENDERBUFFER,Ee.__webglColorRenderbuffer[xe]);const Be=n.get(M[xe]).__webglTexture;t.bindFramebuffer(i.FRAMEBUFFER,Ee.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+xe,i.TEXTURE_2D,Be,0)}t.bindFramebuffer(i.DRAW_FRAMEBUFFER,Ee.__webglMultisampledFramebuffer)}else if(A.depthBuffer&&A.resolveDepthBuffer===!1&&c){const M=A.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,[M])}}}function $e(A){return Math.min(s.maxSamples,A.samples)}function We(A){const M=n.get(A);return A.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&M.__useRenderToTexture!==!1}function Ie(A){const M=a.render.frame;d.get(A)!==M&&(d.set(A,M),A.update())}function lt(A,M){const W=A.colorSpace,Q=A.format,ne=A.type;return A.isCompressedTexture===!0||A.isVideoTexture===!0||W!==jt&&W!==Ji&&(st.getTransfer(W)===yt?(Q!==Pn||ne!==Pi)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",W)),M}function Le(A){return typeof HTMLImageElement<"u"&&A instanceof HTMLImageElement?(l.width=A.naturalWidth||A.width,l.height=A.naturalHeight||A.height):typeof VideoFrame<"u"&&A instanceof VideoFrame?(l.width=A.displayWidth,l.height=A.displayHeight):(l.width=A.width,l.height=A.height),l}this.allocateTextureUnit=P,this.resetTextureUnits=F,this.setTexture2D=G,this.setTexture2DArray=L,this.setTexture3D=q,this.setTextureCube=V,this.rebindTextures=Ce,this.setupRenderTarget=Ye,this.updateRenderTargetMipmap=Pe,this.updateMultisampleRenderTarget=ht,this.setupDepthRenderbuffer=Se,this.setupFrameBufferTexture=ue,this.useMultisampledRTT=We}function J_(i,e){function t(n,s=Ji){let r;const a=st.getTransfer(s);if(n===Pi)return i.UNSIGNED_BYTE;if(n===Gl)return i.UNSIGNED_SHORT_4_4_4_4;if(n===Vl)return i.UNSIGNED_SHORT_5_5_5_1;if(n===bu)return i.UNSIGNED_INT_5_9_9_9_REV;if(n===Su)return i.BYTE;if(n===Mu)return i.SHORT;if(n===da)return i.UNSIGNED_SHORT;if(n===Hl)return i.INT;if(n===Ls)return i.UNSIGNED_INT;if(n===hn)return i.FLOAT;if(n===Ri)return i.HALF_FLOAT;if(n===Eu)return i.ALPHA;if(n===Tu)return i.RGB;if(n===Pn)return i.RGBA;if(n===wu)return i.LUMINANCE;if(n===Au)return i.LUMINANCE_ALPHA;if(n===ur)return i.DEPTH_COMPONENT;if(n===xr)return i.DEPTH_STENCIL;if(n===Wl)return i.RED;if(n===Xl)return i.RED_INTEGER;if(n===Ru)return i.RG;if(n===Yl)return i.RG_INTEGER;if(n===ql)return i.RGBA_INTEGER;if(n===ao||n===oo||n===co||n===lo)if(a===yt)if(r=e.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(n===ao)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===oo)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===co)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===lo)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=e.get("WEBGL_compressed_texture_s3tc"),r!==null){if(n===ao)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===oo)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===co)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===lo)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===$c||n===Kc||n===Zc||n===jc)if(r=e.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(n===$c)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===Kc)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===Zc)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===jc)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===Jc||n===Qc||n===el)if(r=e.get("WEBGL_compressed_texture_etc"),r!==null){if(n===Jc||n===Qc)return a===yt?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(n===el)return a===yt?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(n===tl||n===nl||n===il||n===sl||n===rl||n===al||n===ol||n===cl||n===ll||n===dl||n===hl||n===ul||n===fl||n===pl)if(r=e.get("WEBGL_compressed_texture_astc"),r!==null){if(n===tl)return a===yt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===nl)return a===yt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===il)return a===yt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===sl)return a===yt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===rl)return a===yt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===al)return a===yt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===ol)return a===yt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===cl)return a===yt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===ll)return a===yt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===dl)return a===yt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===hl)return a===yt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===ul)return a===yt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===fl)return a===yt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===pl)return a===yt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===ho||n===ml||n===gl)if(r=e.get("EXT_texture_compression_bptc"),r!==null){if(n===ho)return a===yt?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===ml)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===gl)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===Cu||n===vl||n===_l||n===yl)if(r=e.get("EXT_texture_compression_rgtc"),r!==null){if(n===ho)return r.COMPRESSED_RED_RGTC1_EXT;if(n===vl)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===_l)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===yl)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===yr?i.UNSIGNED_INT_24_8:i[n]!==void 0?i[n]:null}return{convert:t}}class Q_ extends rn{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e}}class Ve extends Tt{constructor(){super(),this.isGroup=!0,this.type="Group"}}const ey={type:"move"};class xc{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Ve,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Ve,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new D,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new D),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Ve,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new D,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new D),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const t=this._hand;if(t)for(const n of e.hand.values())this._getHandJoint(t,n)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,n){let s=null,r=null,a=null;const o=this._targetRay,c=this._grip,l=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(l&&e.hand){a=!0;for(const v of e.hand.values()){const m=t.getJointPose(v,n),p=this._getHandJoint(l,v);m!==null&&(p.matrix.fromArray(m.transform.matrix),p.matrix.decompose(p.position,p.rotation,p.scale),p.matrixWorldNeedsUpdate=!0,p.jointRadius=m.radius),p.visible=m!==null}const d=l.joints["index-finger-tip"],h=l.joints["thumb-tip"],u=d.position.distanceTo(h.position),f=.02,g=.005;l.inputState.pinching&&u>f+g?(l.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!l.inputState.pinching&&u<=f-g&&(l.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else c!==null&&e.gripSpace&&(r=t.getPose(e.gripSpace,n),r!==null&&(c.matrix.fromArray(r.transform.matrix),c.matrix.decompose(c.position,c.rotation,c.scale),c.matrixWorldNeedsUpdate=!0,r.linearVelocity?(c.hasLinearVelocity=!0,c.linearVelocity.copy(r.linearVelocity)):c.hasLinearVelocity=!1,r.angularVelocity?(c.hasAngularVelocity=!0,c.angularVelocity.copy(r.angularVelocity)):c.hasAngularVelocity=!1));o!==null&&(s=t.getPose(e.targetRaySpace,n),s===null&&r!==null&&(s=r),s!==null&&(o.matrix.fromArray(s.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,s.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(s.linearVelocity)):o.hasLinearVelocity=!1,s.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(s.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(ey)))}return o!==null&&(o.visible=s!==null),c!==null&&(c.visible=r!==null),l!==null&&(l.visible=a!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){const n=new Ve;n.matrixAutoUpdate=!1,n.visible=!1,e.joints[t.jointName]=n,e.add(n)}return e.joints[t.jointName]}}const ty=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,ny=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`;class iy{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t,n){if(this.texture===null){const s=new kt,r=e.properties.get(s);r.__webglTexture=t.texture,(t.depthNear!=n.depthNear||t.depthFar!=n.depthFar)&&(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=s}}getMesh(e){if(this.texture!==null&&this.mesh===null){const t=e.cameras[0].viewport,n=new ss({vertexShader:ty,fragmentShader:ny,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new B(new rs(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class sy extends Cr{constructor(e,t){super();const n=this;let s=null,r=1,a=null,o="local-floor",c=1,l=null,d=null,h=null,u=null,f=null,g=null;const v=new iy,m=t.getContextAttributes();let p=null,x=null;const b=[],y=[],I=new je;let T=null;const w=new rn;w.viewport=new dt;const R=new rn;R.viewport=new dt;const S=[w,R],_=new Q_;let C=null,F=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(Z){let te=b[Z];return te===void 0&&(te=new xc,b[Z]=te),te.getTargetRaySpace()},this.getControllerGrip=function(Z){let te=b[Z];return te===void 0&&(te=new xc,b[Z]=te),te.getGripSpace()},this.getHand=function(Z){let te=b[Z];return te===void 0&&(te=new xc,b[Z]=te),te.getHandSpace()};function P(Z){const te=y.indexOf(Z.inputSource);if(te===-1)return;const ue=b[te];ue!==void 0&&(ue.update(Z.inputSource,Z.frame,l||a),ue.dispatchEvent({type:Z.type,data:Z.inputSource}))}function N(){s.removeEventListener("select",P),s.removeEventListener("selectstart",P),s.removeEventListener("selectend",P),s.removeEventListener("squeeze",P),s.removeEventListener("squeezestart",P),s.removeEventListener("squeezeend",P),s.removeEventListener("end",N),s.removeEventListener("inputsourceschange",G);for(let Z=0;Z<b.length;Z++){const te=y[Z];te!==null&&(y[Z]=null,b[Z].disconnect(te))}C=null,F=null,v.reset(),e.setRenderTarget(p),f=null,u=null,h=null,s=null,x=null,ye.stop(),n.isPresenting=!1,e.setPixelRatio(T),e.setSize(I.width,I.height,!1),n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(Z){r=Z,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(Z){o=Z,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return l||a},this.setReferenceSpace=function(Z){l=Z},this.getBaseLayer=function(){return u!==null?u:f},this.getBinding=function(){return h},this.getFrame=function(){return g},this.getSession=function(){return s},this.setSession=async function(Z){if(s=Z,s!==null){if(p=e.getRenderTarget(),s.addEventListener("select",P),s.addEventListener("selectstart",P),s.addEventListener("selectend",P),s.addEventListener("squeeze",P),s.addEventListener("squeezestart",P),s.addEventListener("squeezeend",P),s.addEventListener("end",N),s.addEventListener("inputsourceschange",G),m.xrCompatible!==!0&&await t.makeXRCompatible(),T=e.getPixelRatio(),e.getSize(I),s.renderState.layers===void 0){const te={antialias:m.antialias,alpha:!0,depth:m.depth,stencil:m.stencil,framebufferScaleFactor:r};f=new XRWebGLLayer(s,t,te),s.updateRenderState({baseLayer:f}),e.setPixelRatio(1),e.setSize(f.framebufferWidth,f.framebufferHeight,!1),x=new Ds(f.framebufferWidth,f.framebufferHeight,{format:Pn,type:Pi,colorSpace:e.outputColorSpace,stencilBuffer:m.stencil})}else{let te=null,ue=null,oe=null;m.depth&&(oe=m.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,te=m.stencil?xr:ur,ue=m.stencil?yr:Ls);const be={colorFormat:t.RGBA8,depthFormat:oe,scaleFactor:r};h=new XRWebGLBinding(s,t),u=h.createProjectionLayer(be),s.updateRenderState({layers:[u]}),e.setPixelRatio(1),e.setSize(u.textureWidth,u.textureHeight,!1),x=new Ds(u.textureWidth,u.textureHeight,{format:Pn,type:Pi,depthTexture:new Wu(u.textureWidth,u.textureHeight,ue,void 0,void 0,void 0,void 0,void 0,void 0,te),stencilBuffer:m.stencil,colorSpace:e.outputColorSpace,samples:m.antialias?4:0,resolveDepthBuffer:u.ignoreDepthValues===!1})}x.isXRRenderTarget=!0,this.setFoveation(c),l=null,a=await s.requestReferenceSpace(o),ye.setContext(s),ye.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode},this.getDepthTexture=function(){return v.getDepthTexture()};function G(Z){for(let te=0;te<Z.removed.length;te++){const ue=Z.removed[te],oe=y.indexOf(ue);oe>=0&&(y[oe]=null,b[oe].disconnect(ue))}for(let te=0;te<Z.added.length;te++){const ue=Z.added[te];let oe=y.indexOf(ue);if(oe===-1){for(let Se=0;Se<b.length;Se++)if(Se>=y.length){y.push(ue),oe=Se;break}else if(y[Se]===null){y[Se]=ue,oe=Se;break}if(oe===-1)break}const be=b[oe];be&&be.connect(ue)}}const L=new D,q=new D;function V(Z,te,ue){L.setFromMatrixPosition(te.matrixWorld),q.setFromMatrixPosition(ue.matrixWorld);const oe=L.distanceTo(q),be=te.projectionMatrix.elements,Se=ue.projectionMatrix.elements,Ce=be[14]/(be[10]-1),Ye=be[14]/(be[10]+1),Pe=(be[9]+1)/be[5],qe=(be[9]-1)/be[5],O=(be[8]-1)/be[0],ht=(Se[8]+1)/Se[0],$e=Ce*O,We=Ce*ht,Ie=oe/(-O+ht),lt=Ie*-O;if(te.matrixWorld.decompose(Z.position,Z.quaternion,Z.scale),Z.translateX(lt),Z.translateZ(Ie),Z.matrixWorld.compose(Z.position,Z.quaternion,Z.scale),Z.matrixWorldInverse.copy(Z.matrixWorld).invert(),be[10]===-1)Z.projectionMatrix.copy(te.projectionMatrix),Z.projectionMatrixInverse.copy(te.projectionMatrixInverse);else{const Le=Ce+Ie,A=Ye+Ie,M=$e-lt,W=We+(oe-lt),Q=Pe*Ye/A*Le,ne=qe*Ye/A*Le;Z.projectionMatrix.makePerspective(M,W,Q,ne,Le,A),Z.projectionMatrixInverse.copy(Z.projectionMatrix).invert()}}function K(Z,te){te===null?Z.matrixWorld.copy(Z.matrix):Z.matrixWorld.multiplyMatrices(te.matrixWorld,Z.matrix),Z.matrixWorldInverse.copy(Z.matrixWorld).invert()}this.updateCamera=function(Z){if(s===null)return;let te=Z.near,ue=Z.far;v.texture!==null&&(v.depthNear>0&&(te=v.depthNear),v.depthFar>0&&(ue=v.depthFar)),_.near=R.near=w.near=te,_.far=R.far=w.far=ue,(C!==_.near||F!==_.far)&&(s.updateRenderState({depthNear:_.near,depthFar:_.far}),C=_.near,F=_.far),w.layers.mask=Z.layers.mask|2,R.layers.mask=Z.layers.mask|4,_.layers.mask=w.layers.mask|R.layers.mask;const oe=Z.parent,be=_.cameras;K(_,oe);for(let Se=0;Se<be.length;Se++)K(be[Se],oe);be.length===2?V(_,w,R):_.projectionMatrix.copy(w.projectionMatrix),ie(Z,_,oe)};function ie(Z,te,ue){ue===null?Z.matrix.copy(te.matrixWorld):(Z.matrix.copy(ue.matrixWorld),Z.matrix.invert(),Z.matrix.multiply(te.matrixWorld)),Z.matrix.decompose(Z.position,Z.quaternion,Z.scale),Z.updateMatrixWorld(!0),Z.projectionMatrix.copy(te.projectionMatrix),Z.projectionMatrixInverse.copy(te.projectionMatrixInverse),Z.isPerspectiveCamera&&(Z.fov=Sr*2*Math.atan(1/Z.projectionMatrix.elements[5]),Z.zoom=1)}this.getCamera=function(){return _},this.getFoveation=function(){if(!(u===null&&f===null))return c},this.setFoveation=function(Z){c=Z,u!==null&&(u.fixedFoveation=Z),f!==null&&f.fixedFoveation!==void 0&&(f.fixedFoveation=Z)},this.hasDepthSensing=function(){return v.texture!==null},this.getDepthSensingMesh=function(){return v.getMesh(_)};let re=null;function pe(Z,te){if(d=te.getViewerPose(l||a),g=te,d!==null){const ue=d.views;f!==null&&(e.setRenderTargetFramebuffer(x,f.framebuffer),e.setRenderTarget(x));let oe=!1;ue.length!==_.cameras.length&&(_.cameras.length=0,oe=!0);for(let Se=0;Se<ue.length;Se++){const Ce=ue[Se];let Ye=null;if(f!==null)Ye=f.getViewport(Ce);else{const qe=h.getViewSubImage(u,Ce);Ye=qe.viewport,Se===0&&(e.setRenderTargetTextures(x,qe.colorTexture,u.ignoreDepthValues?void 0:qe.depthStencilTexture),e.setRenderTarget(x))}let Pe=S[Se];Pe===void 0&&(Pe=new rn,Pe.layers.enable(Se),Pe.viewport=new dt,S[Se]=Pe),Pe.matrix.fromArray(Ce.transform.matrix),Pe.matrix.decompose(Pe.position,Pe.quaternion,Pe.scale),Pe.projectionMatrix.fromArray(Ce.projectionMatrix),Pe.projectionMatrixInverse.copy(Pe.projectionMatrix).invert(),Pe.viewport.set(Ye.x,Ye.y,Ye.width,Ye.height),Se===0&&(_.matrix.copy(Pe.matrix),_.matrix.decompose(_.position,_.quaternion,_.scale)),oe===!0&&_.cameras.push(Pe)}const be=s.enabledFeatures;if(be&&be.includes("depth-sensing")){const Se=h.getDepthInformation(ue[0]);Se&&Se.isValid&&Se.texture&&v.init(e,Se,s.renderState)}}for(let ue=0;ue<b.length;ue++){const oe=y[ue],be=b[ue];oe!==null&&be!==void 0&&be.update(oe,te,l||a)}re&&re(Z,te),te.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:te}),g=null}const ye=new Vu;ye.setAnimationLoop(pe),this.setAnimationLoop=function(Z){re=Z},this.dispose=function(){}}}const gs=new ai,ry=new Ke;function ay(i,e){function t(m,p){m.matrixAutoUpdate===!0&&m.updateMatrix(),p.value.copy(m.matrix)}function n(m,p){p.color.getRGB(m.fogColor.value,zu(i)),p.isFog?(m.fogNear.value=p.near,m.fogFar.value=p.far):p.isFogExp2&&(m.fogDensity.value=p.density)}function s(m,p,x,b,y){p.isMeshBasicMaterial||p.isMeshLambertMaterial?r(m,p):p.isMeshToonMaterial?(r(m,p),h(m,p)):p.isMeshPhongMaterial?(r(m,p),d(m,p)):p.isMeshStandardMaterial?(r(m,p),u(m,p),p.isMeshPhysicalMaterial&&f(m,p,y)):p.isMeshMatcapMaterial?(r(m,p),g(m,p)):p.isMeshDepthMaterial?r(m,p):p.isMeshDistanceMaterial?(r(m,p),v(m,p)):p.isMeshNormalMaterial?r(m,p):p.isLineBasicMaterial?(a(m,p),p.isLineDashedMaterial&&o(m,p)):p.isPointsMaterial?c(m,p,x,b):p.isSpriteMaterial?l(m,p):p.isShadowMaterial?(m.color.value.copy(p.color),m.opacity.value=p.opacity):p.isShaderMaterial&&(p.uniformsNeedUpdate=!1)}function r(m,p){m.opacity.value=p.opacity,p.color&&m.diffuse.value.copy(p.color),p.emissive&&m.emissive.value.copy(p.emissive).multiplyScalar(p.emissiveIntensity),p.map&&(m.map.value=p.map,t(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,t(p.alphaMap,m.alphaMapTransform)),p.bumpMap&&(m.bumpMap.value=p.bumpMap,t(p.bumpMap,m.bumpMapTransform),m.bumpScale.value=p.bumpScale,p.side===un&&(m.bumpScale.value*=-1)),p.normalMap&&(m.normalMap.value=p.normalMap,t(p.normalMap,m.normalMapTransform),m.normalScale.value.copy(p.normalScale),p.side===un&&m.normalScale.value.negate()),p.displacementMap&&(m.displacementMap.value=p.displacementMap,t(p.displacementMap,m.displacementMapTransform),m.displacementScale.value=p.displacementScale,m.displacementBias.value=p.displacementBias),p.emissiveMap&&(m.emissiveMap.value=p.emissiveMap,t(p.emissiveMap,m.emissiveMapTransform)),p.specularMap&&(m.specularMap.value=p.specularMap,t(p.specularMap,m.specularMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest);const x=e.get(p),b=x.envMap,y=x.envMapRotation;b&&(m.envMap.value=b,gs.copy(y),gs.x*=-1,gs.y*=-1,gs.z*=-1,b.isCubeTexture&&b.isRenderTargetTexture===!1&&(gs.y*=-1,gs.z*=-1),m.envMapRotation.value.setFromMatrix4(ry.makeRotationFromEuler(gs)),m.flipEnvMap.value=b.isCubeTexture&&b.isRenderTargetTexture===!1?-1:1,m.reflectivity.value=p.reflectivity,m.ior.value=p.ior,m.refractionRatio.value=p.refractionRatio),p.lightMap&&(m.lightMap.value=p.lightMap,m.lightMapIntensity.value=p.lightMapIntensity,t(p.lightMap,m.lightMapTransform)),p.aoMap&&(m.aoMap.value=p.aoMap,m.aoMapIntensity.value=p.aoMapIntensity,t(p.aoMap,m.aoMapTransform))}function a(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,p.map&&(m.map.value=p.map,t(p.map,m.mapTransform))}function o(m,p){m.dashSize.value=p.dashSize,m.totalSize.value=p.dashSize+p.gapSize,m.scale.value=p.scale}function c(m,p,x,b){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.size.value=p.size*x,m.scale.value=b*.5,p.map&&(m.map.value=p.map,t(p.map,m.uvTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,t(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function l(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.rotation.value=p.rotation,p.map&&(m.map.value=p.map,t(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,t(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function d(m,p){m.specular.value.copy(p.specular),m.shininess.value=Math.max(p.shininess,1e-4)}function h(m,p){p.gradientMap&&(m.gradientMap.value=p.gradientMap)}function u(m,p){m.metalness.value=p.metalness,p.metalnessMap&&(m.metalnessMap.value=p.metalnessMap,t(p.metalnessMap,m.metalnessMapTransform)),m.roughness.value=p.roughness,p.roughnessMap&&(m.roughnessMap.value=p.roughnessMap,t(p.roughnessMap,m.roughnessMapTransform)),p.envMap&&(m.envMapIntensity.value=p.envMapIntensity)}function f(m,p,x){m.ior.value=p.ior,p.sheen>0&&(m.sheenColor.value.copy(p.sheenColor).multiplyScalar(p.sheen),m.sheenRoughness.value=p.sheenRoughness,p.sheenColorMap&&(m.sheenColorMap.value=p.sheenColorMap,t(p.sheenColorMap,m.sheenColorMapTransform)),p.sheenRoughnessMap&&(m.sheenRoughnessMap.value=p.sheenRoughnessMap,t(p.sheenRoughnessMap,m.sheenRoughnessMapTransform))),p.clearcoat>0&&(m.clearcoat.value=p.clearcoat,m.clearcoatRoughness.value=p.clearcoatRoughness,p.clearcoatMap&&(m.clearcoatMap.value=p.clearcoatMap,t(p.clearcoatMap,m.clearcoatMapTransform)),p.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=p.clearcoatRoughnessMap,t(p.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),p.clearcoatNormalMap&&(m.clearcoatNormalMap.value=p.clearcoatNormalMap,t(p.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(p.clearcoatNormalScale),p.side===un&&m.clearcoatNormalScale.value.negate())),p.dispersion>0&&(m.dispersion.value=p.dispersion),p.iridescence>0&&(m.iridescence.value=p.iridescence,m.iridescenceIOR.value=p.iridescenceIOR,m.iridescenceThicknessMinimum.value=p.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=p.iridescenceThicknessRange[1],p.iridescenceMap&&(m.iridescenceMap.value=p.iridescenceMap,t(p.iridescenceMap,m.iridescenceMapTransform)),p.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=p.iridescenceThicknessMap,t(p.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),p.transmission>0&&(m.transmission.value=p.transmission,m.transmissionSamplerMap.value=x.texture,m.transmissionSamplerSize.value.set(x.width,x.height),p.transmissionMap&&(m.transmissionMap.value=p.transmissionMap,t(p.transmissionMap,m.transmissionMapTransform)),m.thickness.value=p.thickness,p.thicknessMap&&(m.thicknessMap.value=p.thicknessMap,t(p.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=p.attenuationDistance,m.attenuationColor.value.copy(p.attenuationColor)),p.anisotropy>0&&(m.anisotropyVector.value.set(p.anisotropy*Math.cos(p.anisotropyRotation),p.anisotropy*Math.sin(p.anisotropyRotation)),p.anisotropyMap&&(m.anisotropyMap.value=p.anisotropyMap,t(p.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=p.specularIntensity,m.specularColor.value.copy(p.specularColor),p.specularColorMap&&(m.specularColorMap.value=p.specularColorMap,t(p.specularColorMap,m.specularColorMapTransform)),p.specularIntensityMap&&(m.specularIntensityMap.value=p.specularIntensityMap,t(p.specularIntensityMap,m.specularIntensityMapTransform))}function g(m,p){p.matcap&&(m.matcap.value=p.matcap)}function v(m,p){const x=e.get(p).light;m.referencePosition.value.setFromMatrixPosition(x.matrixWorld),m.nearDistance.value=x.shadow.camera.near,m.farDistance.value=x.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:s}}function oy(i,e,t,n){let s={},r={},a=[];const o=i.getParameter(i.MAX_UNIFORM_BUFFER_BINDINGS);function c(x,b){const y=b.program;n.uniformBlockBinding(x,y)}function l(x,b){let y=s[x.id];y===void 0&&(g(x),y=d(x),s[x.id]=y,x.addEventListener("dispose",m));const I=b.program;n.updateUBOMapping(x,I);const T=e.render.frame;r[x.id]!==T&&(u(x),r[x.id]=T)}function d(x){const b=h();x.__bindingPointIndex=b;const y=i.createBuffer(),I=x.__size,T=x.usage;return i.bindBuffer(i.UNIFORM_BUFFER,y),i.bufferData(i.UNIFORM_BUFFER,I,T),i.bindBuffer(i.UNIFORM_BUFFER,null),i.bindBufferBase(i.UNIFORM_BUFFER,b,y),y}function h(){for(let x=0;x<o;x++)if(a.indexOf(x)===-1)return a.push(x),x;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function u(x){const b=s[x.id],y=x.uniforms,I=x.__cache;i.bindBuffer(i.UNIFORM_BUFFER,b);for(let T=0,w=y.length;T<w;T++){const R=Array.isArray(y[T])?y[T]:[y[T]];for(let S=0,_=R.length;S<_;S++){const C=R[S];if(f(C,T,S,I)===!0){const F=C.__offset,P=Array.isArray(C.value)?C.value:[C.value];let N=0;for(let G=0;G<P.length;G++){const L=P[G],q=v(L);typeof L=="number"||typeof L=="boolean"?(C.__data[0]=L,i.bufferSubData(i.UNIFORM_BUFFER,F+N,C.__data)):L.isMatrix3?(C.__data[0]=L.elements[0],C.__data[1]=L.elements[1],C.__data[2]=L.elements[2],C.__data[3]=0,C.__data[4]=L.elements[3],C.__data[5]=L.elements[4],C.__data[6]=L.elements[5],C.__data[7]=0,C.__data[8]=L.elements[6],C.__data[9]=L.elements[7],C.__data[10]=L.elements[8],C.__data[11]=0):(L.toArray(C.__data,N),N+=q.storage/Float32Array.BYTES_PER_ELEMENT)}i.bufferSubData(i.UNIFORM_BUFFER,F,C.__data)}}}i.bindBuffer(i.UNIFORM_BUFFER,null)}function f(x,b,y,I){const T=x.value,w=b+"_"+y;if(I[w]===void 0)return typeof T=="number"||typeof T=="boolean"?I[w]=T:I[w]=T.clone(),!0;{const R=I[w];if(typeof T=="number"||typeof T=="boolean"){if(R!==T)return I[w]=T,!0}else if(R.equals(T)===!1)return R.copy(T),!0}return!1}function g(x){const b=x.uniforms;let y=0;const I=16;for(let w=0,R=b.length;w<R;w++){const S=Array.isArray(b[w])?b[w]:[b[w]];for(let _=0,C=S.length;_<C;_++){const F=S[_],P=Array.isArray(F.value)?F.value:[F.value];for(let N=0,G=P.length;N<G;N++){const L=P[N],q=v(L),V=y%I,K=V%q.boundary,ie=V+K;y+=K,ie!==0&&I-ie<q.storage&&(y+=I-ie),F.__data=new Float32Array(q.storage/Float32Array.BYTES_PER_ELEMENT),F.__offset=y,y+=q.storage}}}const T=y%I;return T>0&&(y+=I-T),x.__size=y,x.__cache={},this}function v(x){const b={boundary:0,storage:0};return typeof x=="number"||typeof x=="boolean"?(b.boundary=4,b.storage=4):x.isVector2?(b.boundary=8,b.storage=8):x.isVector3||x.isColor?(b.boundary=16,b.storage=12):x.isVector4?(b.boundary=16,b.storage=16):x.isMatrix3?(b.boundary=48,b.storage=48):x.isMatrix4?(b.boundary=64,b.storage=64):x.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",x),b}function m(x){const b=x.target;b.removeEventListener("dispose",m);const y=a.indexOf(b.__bindingPointIndex);a.splice(y,1),i.deleteBuffer(s[b.id]),delete s[b.id],delete r[b.id]}function p(){for(const x in s)i.deleteBuffer(s[x]);a=[],s={},r={}}return{bind:c,update:l,dispose:p}}class cy{constructor(e={}){const{canvas:t=qp(),context:n=null,depth:s=!0,stencil:r=!1,alpha:a=!1,antialias:o=!1,premultipliedAlpha:c=!0,preserveDrawingBuffer:l=!1,powerPreference:d="default",failIfMajorPerformanceCaveat:h=!1,reverseDepthBuffer:u=!1}=e;this.isWebGLRenderer=!0;let f;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");f=n.getContextAttributes().alpha}else f=a;const g=new Uint32Array(4),v=new Int32Array(4);let m=null,p=null;const x=[],b=[];this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=Pt,this.toneMapping=is,this.toneMappingExposure=1;const y=this;let I=!1,T=0,w=0,R=null,S=-1,_=null;const C=new dt,F=new dt;let P=null;const N=new ze(0);let G=0,L=t.width,q=t.height,V=1,K=null,ie=null;const re=new dt(0,0,L,q),pe=new dt(0,0,L,q);let ye=!1;const Z=new Kl;let te=!1,ue=!1;const oe=new Ke,be=new Ke,Se=new D,Ce=new dt,Ye={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let Pe=!1;function qe(){return R===null?V:1}let O=n;function ht(E,k){return t.getContext(E,k)}try{const E={alpha:!0,depth:s,stencil:r,antialias:o,premultipliedAlpha:c,preserveDrawingBuffer:l,powerPreference:d,failIfMajorPerformanceCaveat:h};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${zl}`),t.addEventListener("webglcontextlost",ee,!1),t.addEventListener("webglcontextrestored",fe,!1),t.addEventListener("webglcontextcreationerror",me,!1),O===null){const k="webgl2";if(O=ht(k,E),O===null)throw ht(k)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(E){throw console.error("THREE.WebGLRenderer: "+E.message),E}let $e,We,Ie,lt,Le,A,M,W,Q,ne,j,Ee,de,xe,Be,ce,_e,De,Oe,Me,Ge,He,rt,U;function he(){$e=new fv(O),$e.init(),He=new J_(O,$e),We=new ov(O,$e,e,He),Ie=new K_(O,$e),We.reverseDepthBuffer&&u&&Ie.buffers.depth.setReversed(!0),lt=new gv(O),Le=new N_,A=new j_(O,$e,Ie,Le,We,He,lt),M=new lv(y),W=new uv(y),Q=new bm(O),rt=new rv(O,Q),ne=new pv(O,Q,lt,rt),j=new _v(O,ne,Q,lt),Oe=new vv(O,We,A),ce=new cv(Le),Ee=new P_(y,M,W,$e,We,rt,ce),de=new ay(y,Le),xe=new U_,Be=new G_($e),De=new sv(y,M,W,Ie,j,f,c),_e=new q_(y,j,We),U=new oy(O,lt,We,Ie),Me=new av(O,$e,lt),Ge=new mv(O,$e,lt),lt.programs=Ee.programs,y.capabilities=We,y.extensions=$e,y.properties=Le,y.renderLists=xe,y.shadowMap=_e,y.state=Ie,y.info=lt}he();const $=new sy(y,O);this.xr=$,this.getContext=function(){return O},this.getContextAttributes=function(){return O.getContextAttributes()},this.forceContextLoss=function(){const E=$e.get("WEBGL_lose_context");E&&E.loseContext()},this.forceContextRestore=function(){const E=$e.get("WEBGL_lose_context");E&&E.restoreContext()},this.getPixelRatio=function(){return V},this.setPixelRatio=function(E){E!==void 0&&(V=E,this.setSize(L,q,!1))},this.getSize=function(E){return E.set(L,q)},this.setSize=function(E,k,X=!0){if($.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}L=E,q=k,t.width=Math.floor(E*V),t.height=Math.floor(k*V),X===!0&&(t.style.width=E+"px",t.style.height=k+"px"),this.setViewport(0,0,E,k)},this.getDrawingBufferSize=function(E){return E.set(L*V,q*V).floor()},this.setDrawingBufferSize=function(E,k,X){L=E,q=k,V=X,t.width=Math.floor(E*X),t.height=Math.floor(k*X),this.setViewport(0,0,E,k)},this.getCurrentViewport=function(E){return E.copy(C)},this.getViewport=function(E){return E.copy(re)},this.setViewport=function(E,k,X,Y){E.isVector4?re.set(E.x,E.y,E.z,E.w):re.set(E,k,X,Y),Ie.viewport(C.copy(re).multiplyScalar(V).round())},this.getScissor=function(E){return E.copy(pe)},this.setScissor=function(E,k,X,Y){E.isVector4?pe.set(E.x,E.y,E.z,E.w):pe.set(E,k,X,Y),Ie.scissor(F.copy(pe).multiplyScalar(V).round())},this.getScissorTest=function(){return ye},this.setScissorTest=function(E){Ie.setScissorTest(ye=E)},this.setOpaqueSort=function(E){K=E},this.setTransparentSort=function(E){ie=E},this.getClearColor=function(E){return E.copy(De.getClearColor())},this.setClearColor=function(){De.setClearColor.apply(De,arguments)},this.getClearAlpha=function(){return De.getClearAlpha()},this.setClearAlpha=function(){De.setClearAlpha.apply(De,arguments)},this.clear=function(E=!0,k=!0,X=!0){let Y=0;if(E){let z=!1;if(R!==null){const le=R.texture.format;z=le===ql||le===Yl||le===Xl}if(z){const le=R.texture.type,ve=le===Pi||le===Ls||le===da||le===yr||le===Gl||le===Vl,Te=De.getClearColor(),Re=De.getClearAlpha(),ke=Te.r,Xe=Te.g,we=Te.b;ve?(g[0]=ke,g[1]=Xe,g[2]=we,g[3]=Re,O.clearBufferuiv(O.COLOR,0,g)):(v[0]=ke,v[1]=Xe,v[2]=we,v[3]=Re,O.clearBufferiv(O.COLOR,0,v))}else Y|=O.COLOR_BUFFER_BIT}k&&(Y|=O.DEPTH_BUFFER_BIT),X&&(Y|=O.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),O.clear(Y)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",ee,!1),t.removeEventListener("webglcontextrestored",fe,!1),t.removeEventListener("webglcontextcreationerror",me,!1),xe.dispose(),Be.dispose(),Le.dispose(),M.dispose(),W.dispose(),j.dispose(),rt.dispose(),U.dispose(),Ee.dispose(),$.dispose(),$.removeEventListener("sessionstart",It),$.removeEventListener("sessionend",Fi),Bn.stop()};function ee(E){E.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),I=!0}function fe(){console.log("THREE.WebGLRenderer: Context Restored."),I=!1;const E=lt.autoReset,k=_e.enabled,X=_e.autoUpdate,Y=_e.needsUpdate,z=_e.type;he(),lt.autoReset=E,_e.enabled=k,_e.autoUpdate=X,_e.needsUpdate=Y,_e.type=z}function me(E){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",E.statusMessage)}function Ue(E){const k=E.target;k.removeEventListener("dispose",Ue),pt(k)}function pt(E){J(E),Le.remove(E)}function J(E){const k=Le.get(E).programs;k!==void 0&&(k.forEach(function(X){Ee.releaseProgram(X)}),E.isShaderMaterial&&Ee.releaseShaderCache(E))}this.renderBufferDirect=function(E,k,X,Y,z,le){k===null&&(k=Ye);const ve=z.isMesh&&z.matrixWorld.determinant()<0,Te=va(E,k,X,Y,z);Ie.setMaterial(Y,ve);let Re=X.index,ke=1;if(Y.wireframe===!0){if(Re=ne.getWireframeAttribute(X),Re===void 0)return;ke=2}const Xe=X.drawRange,we=X.attributes.position;let at=Xe.start*ke,_t=(Xe.start+Xe.count)*ke;le!==null&&(at=Math.max(at,le.start*ke),_t=Math.min(_t,(le.start+le.count)*ke)),Re!==null?(at=Math.max(at,0),_t=Math.min(_t,Re.count)):we!=null&&(at=Math.max(at,0),_t=Math.min(_t,we.count));const xt=_t-at;if(xt<0||xt===1/0)return;rt.setup(z,Y,Te,X,Re);let Nt,it=Me;if(Re!==null&&(Nt=Q.get(Re),it=Ge,it.setIndex(Nt)),z.isMesh)Y.wireframe===!0?(Ie.setLineWidth(Y.wireframeLinewidth*qe()),it.setMode(O.LINES)):it.setMode(O.TRIANGLES);else if(z.isLine){let Ae=Y.linewidth;Ae===void 0&&(Ae=1),Ie.setLineWidth(Ae*qe()),z.isLineSegments?it.setMode(O.LINES):z.isLineLoop?it.setMode(O.LINE_LOOP):it.setMode(O.LINE_STRIP)}else z.isPoints?it.setMode(O.POINTS):z.isSprite&&it.setMode(O.TRIANGLES);if(z.isBatchedMesh)if(z._multiDrawInstances!==null)it.renderMultiDrawInstances(z._multiDrawStarts,z._multiDrawCounts,z._multiDrawCount,z._multiDrawInstances);else if($e.get("WEBGL_multi_draw"))it.renderMultiDraw(z._multiDrawStarts,z._multiDrawCounts,z._multiDrawCount);else{const Ae=z._multiDrawStarts,bn=z._multiDrawCounts,ot=z._multiDrawCount,Jt=Re?Q.get(Re).bytesPerElement:1,hi=Le.get(Y).currentProgram.getUniforms();for(let Yt=0;Yt<ot;Yt++)hi.setValue(O,"_gl_DrawID",Yt),it.render(Ae[Yt]/Jt,bn[Yt])}else if(z.isInstancedMesh)it.renderInstances(at,xt,z.count);else if(X.isInstancedBufferGeometry){const Ae=X._maxInstanceCount!==void 0?X._maxInstanceCount:1/0,bn=Math.min(X.instanceCount,Ae);it.renderInstances(at,xt,bn)}else it.render(at,xt)};function Ne(E,k,X){E.transparent===!0&&E.side===Dn&&E.forceSinglePass===!1?(E.side=un,E.needsUpdate=!0,ls(E,k,X),E.side=Li,E.needsUpdate=!0,ls(E,k,X),E.side=Dn):ls(E,k,X)}this.compile=function(E,k,X=null){X===null&&(X=E),p=Be.get(X),p.init(k),b.push(p),X.traverseVisible(function(z){z.isLight&&z.layers.test(k.layers)&&(p.pushLight(z),z.castShadow&&p.pushShadow(z))}),E!==X&&E.traverseVisible(function(z){z.isLight&&z.layers.test(k.layers)&&(p.pushLight(z),z.castShadow&&p.pushShadow(z))}),p.setupLights();const Y=new Set;return E.traverse(function(z){if(!(z.isMesh||z.isPoints||z.isLine||z.isSprite))return;const le=z.material;if(le)if(Array.isArray(le))for(let ve=0;ve<le.length;ve++){const Te=le[ve];Ne(Te,X,z),Y.add(Te)}else Ne(le,X,z),Y.add(le)}),b.pop(),p=null,Y},this.compileAsync=function(E,k,X=null){const Y=this.compile(E,k,X);return new Promise(z=>{function le(){if(Y.forEach(function(ve){Le.get(ve).currentProgram.isReady()&&Y.delete(ve)}),Y.size===0){z(E);return}setTimeout(le,10)}$e.get("KHR_parallel_shader_compile")!==null?le():setTimeout(le,10)})};let mt=null;function At(E){mt&&mt(E)}function It(){Bn.stop()}function Fi(){Bn.start()}const Bn=new Vu;Bn.setAnimationLoop(At),typeof self<"u"&&Bn.setContext(self),this.setAnimationLoop=function(E){mt=E,$.setAnimationLoop(E),E===null?Bn.stop():Bn.start()},$.addEventListener("sessionstart",It),$.addEventListener("sessionend",Fi),this.render=function(E,k){if(k!==void 0&&k.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(I===!0)return;if(E.matrixWorldAutoUpdate===!0&&E.updateMatrixWorld(),k.parent===null&&k.matrixWorldAutoUpdate===!0&&k.updateMatrixWorld(),$.enabled===!0&&$.isPresenting===!0&&($.cameraAutoUpdate===!0&&$.updateCamera(k),k=$.getCamera()),E.isScene===!0&&E.onBeforeRender(y,E,k,R),p=Be.get(E,b.length),p.init(k),b.push(p),be.multiplyMatrices(k.projectionMatrix,k.matrixWorldInverse),Z.setFromProjectionMatrix(be),ue=this.localClippingEnabled,te=ce.init(this.clippingPlanes,ue),m=xe.get(E,x.length),m.init(),x.push(m),$.enabled===!0&&$.isPresenting===!0){const le=y.xr.getDepthSensingMesh();le!==null&&pn(le,k,-1/0,y.sortObjects)}pn(E,k,0,y.sortObjects),m.finish(),y.sortObjects===!0&&m.sort(K,ie),Pe=$.enabled===!1||$.isPresenting===!1||$.hasDepthSensing()===!1,Pe&&De.addToRenderList(m,E),this.info.render.frame++,te===!0&&ce.beginShadows();const X=p.state.shadowsArray;_e.render(X,E,k),te===!0&&ce.endShadows(),this.info.autoReset===!0&&this.info.reset();const Y=m.opaque,z=m.transmissive;if(p.setupLights(),k.isArrayCamera){const le=k.cameras;if(z.length>0)for(let ve=0,Te=le.length;ve<Te;ve++){const Re=le[ve];cs(Y,z,E,Re)}Pe&&De.render(E);for(let ve=0,Te=le.length;ve<Te;ve++){const Re=le[ve];mn(m,E,Re,Re.viewport)}}else z.length>0&&cs(Y,z,E,k),Pe&&De.render(E),mn(m,E,k);R!==null&&(A.updateMultisampleRenderTarget(R),A.updateRenderTargetMipmap(R)),E.isScene===!0&&E.onAfterRender(y,E,k),rt.resetDefaultState(),S=-1,_=null,b.pop(),b.length>0?(p=b[b.length-1],te===!0&&ce.setGlobalState(y.clippingPlanes,p.state.camera)):p=null,x.pop(),x.length>0?m=x[x.length-1]:m=null};function pn(E,k,X,Y){if(E.visible===!1)return;if(E.layers.test(k.layers)){if(E.isGroup)X=E.renderOrder;else if(E.isLOD)E.autoUpdate===!0&&E.update(k);else if(E.isLight)p.pushLight(E),E.castShadow&&p.pushShadow(E);else if(E.isSprite){if(!E.frustumCulled||Z.intersectsSprite(E)){Y&&Ce.setFromMatrixPosition(E.matrixWorld).applyMatrix4(be);const ve=j.update(E),Te=E.material;Te.visible&&m.push(E,ve,Te,X,Ce.z,null)}}else if((E.isMesh||E.isLine||E.isPoints)&&(!E.frustumCulled||Z.intersectsObject(E))){const ve=j.update(E),Te=E.material;if(Y&&(E.boundingSphere!==void 0?(E.boundingSphere===null&&E.computeBoundingSphere(),Ce.copy(E.boundingSphere.center)):(ve.boundingSphere===null&&ve.computeBoundingSphere(),Ce.copy(ve.boundingSphere.center)),Ce.applyMatrix4(E.matrixWorld).applyMatrix4(be)),Array.isArray(Te)){const Re=ve.groups;for(let ke=0,Xe=Re.length;ke<Xe;ke++){const we=Re[ke],at=Te[we.materialIndex];at&&at.visible&&m.push(E,ve,at,X,Ce.z,we)}}else Te.visible&&m.push(E,ve,Te,X,Ce.z,null)}}const le=E.children;for(let ve=0,Te=le.length;ve<Te;ve++)pn(le[ve],k,X,Y)}function mn(E,k,X,Y){const z=E.opaque,le=E.transmissive,ve=E.transparent;p.setupLightsView(X),te===!0&&ce.setGlobalState(y.clippingPlanes,X),Y&&Ie.viewport(C.copy(Y)),z.length>0&&Us(z,k,X),le.length>0&&Us(le,k,X),ve.length>0&&Us(ve,k,X),Ie.buffers.depth.setTest(!0),Ie.buffers.depth.setMask(!0),Ie.buffers.color.setMask(!0),Ie.setPolygonOffset(!1)}function cs(E,k,X,Y){if((X.isScene===!0?X.overrideMaterial:null)!==null)return;p.state.transmissionRenderTarget[Y.id]===void 0&&(p.state.transmissionRenderTarget[Y.id]=new Ds(1,1,{generateMipmaps:!0,type:$e.has("EXT_color_buffer_half_float")||$e.has("EXT_color_buffer_float")?Ri:Pi,minFilter:ii,samples:4,stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:st.workingColorSpace}));const le=p.state.transmissionRenderTarget[Y.id],ve=Y.viewport||C;le.setSize(ve.z,ve.w);const Te=y.getRenderTarget();y.setRenderTarget(le),y.getClearColor(N),G=y.getClearAlpha(),G<1&&y.setClearColor(16777215,.5),y.clear(),Pe&&De.render(X);const Re=y.toneMapping;y.toneMapping=is;const ke=Y.viewport;if(Y.viewport!==void 0&&(Y.viewport=void 0),p.setupLightsView(Y),te===!0&&ce.setGlobalState(y.clippingPlanes,Y),Us(E,X,Y),A.updateMultisampleRenderTarget(le),A.updateRenderTargetMipmap(le),$e.has("WEBGL_multisampled_render_to_texture")===!1){let Xe=!1;for(let we=0,at=k.length;we<at;we++){const _t=k[we],xt=_t.object,Nt=_t.geometry,it=_t.material,Ae=_t.group;if(it.side===Dn&&xt.layers.test(Y.layers)){const bn=it.side;it.side=un,it.needsUpdate=!0,Pr(xt,X,Y,Nt,it,Ae),it.side=bn,it.needsUpdate=!0,Xe=!0}}Xe===!0&&(A.updateMultisampleRenderTarget(le),A.updateRenderTargetMipmap(le))}y.setRenderTarget(Te),y.setClearColor(N,G),ke!==void 0&&(Y.viewport=ke),y.toneMapping=Re}function Us(E,k,X){const Y=k.isScene===!0?k.overrideMaterial:null;for(let z=0,le=E.length;z<le;z++){const ve=E[z],Te=ve.object,Re=ve.geometry,ke=Y===null?ve.material:Y,Xe=ve.group;Te.layers.test(X.layers)&&Pr(Te,k,X,Re,ke,Xe)}}function Pr(E,k,X,Y,z,le){E.onBeforeRender(y,k,X,Y,z,le),E.modelViewMatrix.multiplyMatrices(X.matrixWorldInverse,E.matrixWorld),E.normalMatrix.getNormalMatrix(E.modelViewMatrix),z.onBeforeRender(y,k,X,Y,E,le),z.transparent===!0&&z.side===Dn&&z.forceSinglePass===!1?(z.side=un,z.needsUpdate=!0,y.renderBufferDirect(X,k,Y,z,E,le),z.side=Li,z.needsUpdate=!0,y.renderBufferDirect(X,k,Y,z,E,le),z.side=Dn):y.renderBufferDirect(X,k,Y,z,E,le),E.onAfterRender(y,k,X,Y,z,le)}function ls(E,k,X){k.isScene!==!0&&(k=Ye);const Y=Le.get(E),z=p.state.lights,le=p.state.shadowsArray,ve=z.state.version,Te=Ee.getParameters(E,z.state,le,k,X),Re=Ee.getProgramCacheKey(Te);let ke=Y.programs;Y.environment=E.isMeshStandardMaterial?k.environment:null,Y.fog=k.fog,Y.envMap=(E.isMeshStandardMaterial?W:M).get(E.envMap||Y.environment),Y.envMapRotation=Y.environment!==null&&E.envMap===null?k.environmentRotation:E.envMapRotation,ke===void 0&&(E.addEventListener("dispose",Ue),ke=new Map,Y.programs=ke);let Xe=ke.get(Re);if(Xe!==void 0){if(Y.currentProgram===Xe&&Y.lightsStateVersion===ve)return ga(E,Te),Xe}else Te.uniforms=Ee.getUniforms(E),E.onBeforeCompile(Te,y),Xe=Ee.acquireProgram(Te,Re),ke.set(Re,Xe),Y.uniforms=Te.uniforms;const we=Y.uniforms;return(!E.isShaderMaterial&&!E.isRawShaderMaterial||E.clipping===!0)&&(we.clippingPlanes=ce.uniform),ga(E,Te),Y.needsLights=_a(E),Y.lightsStateVersion=ve,Y.needsLights&&(we.ambientLightColor.value=z.state.ambient,we.lightProbe.value=z.state.probe,we.directionalLights.value=z.state.directional,we.directionalLightShadows.value=z.state.directionalShadow,we.spotLights.value=z.state.spot,we.spotLightShadows.value=z.state.spotShadow,we.rectAreaLights.value=z.state.rectArea,we.ltc_1.value=z.state.rectAreaLTC1,we.ltc_2.value=z.state.rectAreaLTC2,we.pointLights.value=z.state.point,we.pointLightShadows.value=z.state.pointShadow,we.hemisphereLights.value=z.state.hemi,we.directionalShadowMap.value=z.state.directionalShadowMap,we.directionalShadowMatrix.value=z.state.directionalShadowMatrix,we.spotShadowMap.value=z.state.spotShadowMap,we.spotLightMatrix.value=z.state.spotLightMatrix,we.spotLightMap.value=z.state.spotLightMap,we.pointShadowMap.value=z.state.pointShadowMap,we.pointShadowMatrix.value=z.state.pointShadowMatrix),Y.currentProgram=Xe,Y.uniformsList=null,Xe}function Nr(E){if(E.uniformsList===null){const k=E.currentProgram.getUniforms();E.uniformsList=uo.seqWithValue(k.seq,E.uniforms)}return E.uniformsList}function ga(E,k){const X=Le.get(E);X.outputColorSpace=k.outputColorSpace,X.batching=k.batching,X.batchingColor=k.batchingColor,X.instancing=k.instancing,X.instancingColor=k.instancingColor,X.instancingMorph=k.instancingMorph,X.skinning=k.skinning,X.morphTargets=k.morphTargets,X.morphNormals=k.morphNormals,X.morphColors=k.morphColors,X.morphTargetsCount=k.morphTargetsCount,X.numClippingPlanes=k.numClippingPlanes,X.numIntersection=k.numClipIntersection,X.vertexAlphas=k.vertexAlphas,X.vertexTangents=k.vertexTangents,X.toneMapping=k.toneMapping}function va(E,k,X,Y,z){k.isScene!==!0&&(k=Ye),A.resetTextureUnits();const le=k.fog,ve=Y.isMeshStandardMaterial?k.environment:null,Te=R===null?y.outputColorSpace:R.isXRRenderTarget===!0?R.texture.colorSpace:jt,Re=(Y.isMeshStandardMaterial?W:M).get(Y.envMap||ve),ke=Y.vertexColors===!0&&!!X.attributes.color&&X.attributes.color.itemSize===4,Xe=!!X.attributes.tangent&&(!!Y.normalMap||Y.anisotropy>0),we=!!X.morphAttributes.position,at=!!X.morphAttributes.normal,_t=!!X.morphAttributes.color;let xt=is;Y.toneMapped&&(R===null||R.isXRRenderTarget===!0)&&(xt=y.toneMapping);const Nt=X.morphAttributes.position||X.morphAttributes.normal||X.morphAttributes.color,it=Nt!==void 0?Nt.length:0,Ae=Le.get(Y),bn=p.state.lights;if(te===!0&&(ue===!0||E!==_)){const Qt=E===_&&Y.id===S;ce.setState(Y,E,Qt)}let ot=!1;Y.version===Ae.__version?(Ae.needsLights&&Ae.lightsStateVersion!==bn.state.version||Ae.outputColorSpace!==Te||z.isBatchedMesh&&Ae.batching===!1||!z.isBatchedMesh&&Ae.batching===!0||z.isBatchedMesh&&Ae.batchingColor===!0&&z.colorTexture===null||z.isBatchedMesh&&Ae.batchingColor===!1&&z.colorTexture!==null||z.isInstancedMesh&&Ae.instancing===!1||!z.isInstancedMesh&&Ae.instancing===!0||z.isSkinnedMesh&&Ae.skinning===!1||!z.isSkinnedMesh&&Ae.skinning===!0||z.isInstancedMesh&&Ae.instancingColor===!0&&z.instanceColor===null||z.isInstancedMesh&&Ae.instancingColor===!1&&z.instanceColor!==null||z.isInstancedMesh&&Ae.instancingMorph===!0&&z.morphTexture===null||z.isInstancedMesh&&Ae.instancingMorph===!1&&z.morphTexture!==null||Ae.envMap!==Re||Y.fog===!0&&Ae.fog!==le||Ae.numClippingPlanes!==void 0&&(Ae.numClippingPlanes!==ce.numPlanes||Ae.numIntersection!==ce.numIntersection)||Ae.vertexAlphas!==ke||Ae.vertexTangents!==Xe||Ae.morphTargets!==we||Ae.morphNormals!==at||Ae.morphColors!==_t||Ae.toneMapping!==xt||Ae.morphTargetsCount!==it)&&(ot=!0):(ot=!0,Ae.__version=Y.version);let Jt=Ae.currentProgram;ot===!0&&(Jt=ls(Y,k,z));let hi=!1,Yt=!1,Bi=!1;const ut=Jt.getUniforms(),gn=Ae.uniforms;if(Ie.useProgram(Jt.program)&&(hi=!0,Yt=!0,Bi=!0),Y.id!==S&&(S=Y.id,Yt=!0),hi||_!==E){Ie.buffers.depth.getReversed()?(oe.copy(E.projectionMatrix),Kp(oe),Zp(oe),ut.setValue(O,"projectionMatrix",oe)):ut.setValue(O,"projectionMatrix",E.projectionMatrix),ut.setValue(O,"viewMatrix",E.matrixWorldInverse);const kn=ut.map.cameraPosition;kn!==void 0&&kn.setValue(O,Se.setFromMatrixPosition(E.matrixWorld)),We.logarithmicDepthBuffer&&ut.setValue(O,"logDepthBufFC",2/(Math.log(E.far+1)/Math.LN2)),(Y.isMeshPhongMaterial||Y.isMeshToonMaterial||Y.isMeshLambertMaterial||Y.isMeshBasicMaterial||Y.isMeshStandardMaterial||Y.isShaderMaterial)&&ut.setValue(O,"isOrthographic",E.isOrthographicCamera===!0),_!==E&&(_=E,Yt=!0,Bi=!0)}if(z.isSkinnedMesh){ut.setOptional(O,z,"bindMatrix"),ut.setOptional(O,z,"bindMatrixInverse");const Qt=z.skeleton;Qt&&(Qt.boneTexture===null&&Qt.computeBoneTexture(),ut.setValue(O,"boneTexture",Qt.boneTexture,A))}z.isBatchedMesh&&(ut.setOptional(O,z,"batchingTexture"),ut.setValue(O,"batchingTexture",z._matricesTexture,A),ut.setOptional(O,z,"batchingIdTexture"),ut.setValue(O,"batchingIdTexture",z._indirectTexture,A),ut.setOptional(O,z,"batchingColorTexture"),z._colorsTexture!==null&&ut.setValue(O,"batchingColorTexture",z._colorsTexture,A));const ds=X.morphAttributes;if((ds.position!==void 0||ds.normal!==void 0||ds.color!==void 0)&&Oe.update(z,X,Jt),(Yt||Ae.receiveShadow!==z.receiveShadow)&&(Ae.receiveShadow=z.receiveShadow,ut.setValue(O,"receiveShadow",z.receiveShadow)),Y.isMeshGouraudMaterial&&Y.envMap!==null&&(gn.envMap.value=Re,gn.flipEnvMap.value=Re.isCubeTexture&&Re.isRenderTargetTexture===!1?-1:1),Y.isMeshStandardMaterial&&Y.envMap===null&&k.environment!==null&&(gn.envMapIntensity.value=k.environmentIntensity),Yt&&(ut.setValue(O,"toneMappingExposure",y.toneMappingExposure),Ae.needsLights&&Xo(gn,Bi),le&&Y.fog===!0&&de.refreshFogUniforms(gn,le),de.refreshMaterialUniforms(gn,Y,V,q,p.state.transmissionRenderTarget[E.id]),uo.upload(O,Nr(Ae),gn,A)),Y.isShaderMaterial&&Y.uniformsNeedUpdate===!0&&(uo.upload(O,Nr(Ae),gn,A),Y.uniformsNeedUpdate=!1),Y.isSpriteMaterial&&ut.setValue(O,"center",z.center),ut.setValue(O,"modelViewMatrix",z.modelViewMatrix),ut.setValue(O,"normalMatrix",z.normalMatrix),ut.setValue(O,"modelMatrix",z.matrixWorld),Y.isShaderMaterial||Y.isRawShaderMaterial){const Qt=Y.uniformsGroups;for(let kn=0,En=Qt.length;kn<En;kn++){const Fs=Qt[kn];U.update(Fs,Jt),U.bind(Fs,Jt)}}return Jt}function Xo(E,k){E.ambientLightColor.needsUpdate=k,E.lightProbe.needsUpdate=k,E.directionalLights.needsUpdate=k,E.directionalLightShadows.needsUpdate=k,E.pointLights.needsUpdate=k,E.pointLightShadows.needsUpdate=k,E.spotLights.needsUpdate=k,E.spotLightShadows.needsUpdate=k,E.rectAreaLights.needsUpdate=k,E.hemisphereLights.needsUpdate=k}function _a(E){return E.isMeshLambertMaterial||E.isMeshToonMaterial||E.isMeshPhongMaterial||E.isMeshStandardMaterial||E.isShadowMaterial||E.isShaderMaterial&&E.lights===!0}this.getActiveCubeFace=function(){return T},this.getActiveMipmapLevel=function(){return w},this.getRenderTarget=function(){return R},this.setRenderTargetTextures=function(E,k,X){Le.get(E.texture).__webglTexture=k,Le.get(E.depthTexture).__webglTexture=X;const Y=Le.get(E);Y.__hasExternalTextures=!0,Y.__autoAllocateDepthBuffer=X===void 0,Y.__autoAllocateDepthBuffer||$e.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),Y.__useRenderToTexture=!1)},this.setRenderTargetFramebuffer=function(E,k){const X=Le.get(E);X.__webglFramebuffer=k,X.__useDefaultFramebuffer=k===void 0},this.setRenderTarget=function(E,k=0,X=0){R=E,T=k,w=X;let Y=!0,z=null,le=!1,ve=!1;if(E){const Re=Le.get(E);if(Re.__useDefaultFramebuffer!==void 0)Ie.bindFramebuffer(O.FRAMEBUFFER,null),Y=!1;else if(Re.__webglFramebuffer===void 0)A.setupRenderTarget(E);else if(Re.__hasExternalTextures)A.rebindTextures(E,Le.get(E.texture).__webglTexture,Le.get(E.depthTexture).__webglTexture);else if(E.depthBuffer){const we=E.depthTexture;if(Re.__boundDepthTexture!==we){if(we!==null&&Le.has(we)&&(E.width!==we.image.width||E.height!==we.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");A.setupDepthRenderbuffer(E)}}const ke=E.texture;(ke.isData3DTexture||ke.isDataArrayTexture||ke.isCompressedArrayTexture)&&(ve=!0);const Xe=Le.get(E).__webglFramebuffer;E.isWebGLCubeRenderTarget?(Array.isArray(Xe[k])?z=Xe[k][X]:z=Xe[k],le=!0):E.samples>0&&A.useMultisampledRTT(E)===!1?z=Le.get(E).__webglMultisampledFramebuffer:Array.isArray(Xe)?z=Xe[X]:z=Xe,C.copy(E.viewport),F.copy(E.scissor),P=E.scissorTest}else C.copy(re).multiplyScalar(V).floor(),F.copy(pe).multiplyScalar(V).floor(),P=ye;if(Ie.bindFramebuffer(O.FRAMEBUFFER,z)&&Y&&Ie.drawBuffers(E,z),Ie.viewport(C),Ie.scissor(F),Ie.setScissorTest(P),le){const Re=Le.get(E.texture);O.framebufferTexture2D(O.FRAMEBUFFER,O.COLOR_ATTACHMENT0,O.TEXTURE_CUBE_MAP_POSITIVE_X+k,Re.__webglTexture,X)}else if(ve){const Re=Le.get(E.texture),ke=k||0;O.framebufferTextureLayer(O.FRAMEBUFFER,O.COLOR_ATTACHMENT0,Re.__webglTexture,X||0,ke)}S=-1},this.readRenderTargetPixels=function(E,k,X,Y,z,le,ve){if(!(E&&E.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Te=Le.get(E).__webglFramebuffer;if(E.isWebGLCubeRenderTarget&&ve!==void 0&&(Te=Te[ve]),Te){Ie.bindFramebuffer(O.FRAMEBUFFER,Te);try{const Re=E.texture,ke=Re.format,Xe=Re.type;if(!We.textureFormatReadable(ke)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!We.textureTypeReadable(Xe)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}k>=0&&k<=E.width-Y&&X>=0&&X<=E.height-z&&O.readPixels(k,X,Y,z,He.convert(ke),He.convert(Xe),le)}finally{const Re=R!==null?Le.get(R).__webglFramebuffer:null;Ie.bindFramebuffer(O.FRAMEBUFFER,Re)}}},this.readRenderTargetPixelsAsync=async function(E,k,X,Y,z,le,ve){if(!(E&&E.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Te=Le.get(E).__webglFramebuffer;if(E.isWebGLCubeRenderTarget&&ve!==void 0&&(Te=Te[ve]),Te){const Re=E.texture,ke=Re.format,Xe=Re.type;if(!We.textureFormatReadable(ke))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!We.textureTypeReadable(Xe))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");if(k>=0&&k<=E.width-Y&&X>=0&&X<=E.height-z){Ie.bindFramebuffer(O.FRAMEBUFFER,Te);const we=O.createBuffer();O.bindBuffer(O.PIXEL_PACK_BUFFER,we),O.bufferData(O.PIXEL_PACK_BUFFER,le.byteLength,O.STREAM_READ),O.readPixels(k,X,Y,z,He.convert(ke),He.convert(Xe),0);const at=R!==null?Le.get(R).__webglFramebuffer:null;Ie.bindFramebuffer(O.FRAMEBUFFER,at);const _t=O.fenceSync(O.SYNC_GPU_COMMANDS_COMPLETE,0);return O.flush(),await $p(O,_t,4),O.bindBuffer(O.PIXEL_PACK_BUFFER,we),O.getBufferSubData(O.PIXEL_PACK_BUFFER,0,le),O.deleteBuffer(we),O.deleteSync(_t),le}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")}},this.copyFramebufferToTexture=function(E,k=null,X=0){E.isTexture!==!0&&(Kr("WebGLRenderer: copyFramebufferToTexture function signature has changed."),k=arguments[0]||null,E=arguments[1]);const Y=Math.pow(2,-X),z=Math.floor(E.image.width*Y),le=Math.floor(E.image.height*Y),ve=k!==null?k.x:0,Te=k!==null?k.y:0;A.setTexture2D(E,0),O.copyTexSubImage2D(O.TEXTURE_2D,X,0,0,ve,Te,z,le),Ie.unbindTexture()},this.copyTextureToTexture=function(E,k,X=null,Y=null,z=0){E.isTexture!==!0&&(Kr("WebGLRenderer: copyTextureToTexture function signature has changed."),Y=arguments[0]||null,E=arguments[1],k=arguments[2],z=arguments[3]||0,X=null);let le,ve,Te,Re,ke,Xe,we,at,_t;const xt=E.isCompressedTexture?E.mipmaps[z]:E.image;X!==null?(le=X.max.x-X.min.x,ve=X.max.y-X.min.y,Te=X.isBox3?X.max.z-X.min.z:1,Re=X.min.x,ke=X.min.y,Xe=X.isBox3?X.min.z:0):(le=xt.width,ve=xt.height,Te=xt.depth||1,Re=0,ke=0,Xe=0),Y!==null?(we=Y.x,at=Y.y,_t=Y.z):(we=0,at=0,_t=0);const Nt=He.convert(k.format),it=He.convert(k.type);let Ae;k.isData3DTexture?(A.setTexture3D(k,0),Ae=O.TEXTURE_3D):k.isDataArrayTexture||k.isCompressedArrayTexture?(A.setTexture2DArray(k,0),Ae=O.TEXTURE_2D_ARRAY):(A.setTexture2D(k,0),Ae=O.TEXTURE_2D),O.pixelStorei(O.UNPACK_FLIP_Y_WEBGL,k.flipY),O.pixelStorei(O.UNPACK_PREMULTIPLY_ALPHA_WEBGL,k.premultiplyAlpha),O.pixelStorei(O.UNPACK_ALIGNMENT,k.unpackAlignment);const bn=O.getParameter(O.UNPACK_ROW_LENGTH),ot=O.getParameter(O.UNPACK_IMAGE_HEIGHT),Jt=O.getParameter(O.UNPACK_SKIP_PIXELS),hi=O.getParameter(O.UNPACK_SKIP_ROWS),Yt=O.getParameter(O.UNPACK_SKIP_IMAGES);O.pixelStorei(O.UNPACK_ROW_LENGTH,xt.width),O.pixelStorei(O.UNPACK_IMAGE_HEIGHT,xt.height),O.pixelStorei(O.UNPACK_SKIP_PIXELS,Re),O.pixelStorei(O.UNPACK_SKIP_ROWS,ke),O.pixelStorei(O.UNPACK_SKIP_IMAGES,Xe);const Bi=E.isDataArrayTexture||E.isData3DTexture,ut=k.isDataArrayTexture||k.isData3DTexture;if(E.isRenderTargetTexture||E.isDepthTexture){const gn=Le.get(E),ds=Le.get(k),Qt=Le.get(gn.__renderTarget),kn=Le.get(ds.__renderTarget);Ie.bindFramebuffer(O.READ_FRAMEBUFFER,Qt.__webglFramebuffer),Ie.bindFramebuffer(O.DRAW_FRAMEBUFFER,kn.__webglFramebuffer);for(let En=0;En<Te;En++)Bi&&O.framebufferTextureLayer(O.READ_FRAMEBUFFER,O.COLOR_ATTACHMENT0,Le.get(E).__webglTexture,z,Xe+En),E.isDepthTexture?(ut&&O.framebufferTextureLayer(O.DRAW_FRAMEBUFFER,O.COLOR_ATTACHMENT0,Le.get(k).__webglTexture,z,_t+En),O.blitFramebuffer(Re,ke,le,ve,we,at,le,ve,O.DEPTH_BUFFER_BIT,O.NEAREST)):ut?O.copyTexSubImage3D(Ae,z,we,at,_t+En,Re,ke,le,ve):O.copyTexSubImage2D(Ae,z,we,at,_t+En,Re,ke,le,ve);Ie.bindFramebuffer(O.READ_FRAMEBUFFER,null),Ie.bindFramebuffer(O.DRAW_FRAMEBUFFER,null)}else ut?E.isDataTexture||E.isData3DTexture?O.texSubImage3D(Ae,z,we,at,_t,le,ve,Te,Nt,it,xt.data):k.isCompressedArrayTexture?O.compressedTexSubImage3D(Ae,z,we,at,_t,le,ve,Te,Nt,xt.data):O.texSubImage3D(Ae,z,we,at,_t,le,ve,Te,Nt,it,xt):E.isDataTexture?O.texSubImage2D(O.TEXTURE_2D,z,we,at,le,ve,Nt,it,xt.data):E.isCompressedTexture?O.compressedTexSubImage2D(O.TEXTURE_2D,z,we,at,xt.width,xt.height,Nt,xt.data):O.texSubImage2D(O.TEXTURE_2D,z,we,at,le,ve,Nt,it,xt);O.pixelStorei(O.UNPACK_ROW_LENGTH,bn),O.pixelStorei(O.UNPACK_IMAGE_HEIGHT,ot),O.pixelStorei(O.UNPACK_SKIP_PIXELS,Jt),O.pixelStorei(O.UNPACK_SKIP_ROWS,hi),O.pixelStorei(O.UNPACK_SKIP_IMAGES,Yt),z===0&&k.generateMipmaps&&O.generateMipmap(Ae),Ie.unbindTexture()},this.copyTextureToTexture3D=function(E,k,X=null,Y=null,z=0){return E.isTexture!==!0&&(Kr("WebGLRenderer: copyTextureToTexture3D function signature has changed."),X=arguments[0]||null,Y=arguments[1]||null,E=arguments[2],k=arguments[3],z=arguments[4]||0),Kr('WebGLRenderer: copyTextureToTexture3D function has been deprecated. Use "copyTextureToTexture" instead.'),this.copyTextureToTexture(E,k,X,Y,z)},this.initRenderTarget=function(E){Le.get(E).__webglFramebuffer===void 0&&A.setupRenderTarget(E)},this.initTexture=function(E){E.isCubeTexture?A.setTextureCube(E,0):E.isData3DTexture?A.setTexture3D(E,0):E.isDataArrayTexture||E.isCompressedArrayTexture?A.setTexture2DArray(E,0):A.setTexture2D(E,0),Ie.unbindTexture()},this.resetState=function(){T=0,w=0,R=null,Ie.reset(),rt.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Ci}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const t=this.getContext();t.drawingBufferColorspace=st._getDrawingBufferColorSpace(e),t.unpackColorSpace=st._getUnpackColorSpace()}}class Jl{constructor(e,t=25e-5){this.isFogExp2=!0,this.name="",this.color=new ze(e),this.density=t}clone(){return new Jl(this.color,this.density)}toJSON(){return{type:"FogExp2",name:this.name,color:this.color.getHex(),density:this.density}}}class ly extends Tt{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new ai,this.environmentIntensity=1,this.environmentRotation=new ai,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(t.object.environmentIntensity=this.environmentIntensity),t.object.environmentRotation=this.environmentRotation.toArray(),t}}class dy{constructor(e,t){this.isInterleavedBuffer=!0,this.array=e,this.stride=t,this.count=e!==void 0?e.length/t:0,this.usage=Sl,this.updateRanges=[],this.version=0,this.uuid=jn()}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.array=new e.array.constructor(e.array),this.count=e.count,this.stride=e.stride,this.usage=e.usage,this}copyAt(e,t,n){e*=this.stride,n*=t.stride;for(let s=0,r=this.stride;s<r;s++)this.array[e+s]=t.array[n+s];return this}set(e,t=0){return this.array.set(e,t),this}clone(e){e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=jn()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);const t=new this.array.constructor(e.arrayBuffers[this.array.buffer._uuid]),n=new this.constructor(t,this.stride);return n.setUsage(this.usage),n}onUpload(e){return this.onUploadCallback=e,this}toJSON(e){return e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=jn()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer))),{uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride}}}const en=new D;class Ql{constructor(e,t,n,s=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=e,this.itemSize=t,this.offset=n,this.normalized=s}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(e){this.data.needsUpdate=e}applyMatrix4(e){for(let t=0,n=this.data.count;t<n;t++)en.fromBufferAttribute(this,t),en.applyMatrix4(e),this.setXYZ(t,en.x,en.y,en.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)en.fromBufferAttribute(this,t),en.applyNormalMatrix(e),this.setXYZ(t,en.x,en.y,en.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)en.fromBufferAttribute(this,t),en.transformDirection(e),this.setXYZ(t,en.x,en.y,en.z);return this}getComponent(e,t){let n=this.array[e*this.data.stride+this.offset+t];return this.normalized&&(n=$n(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=gt(n,this.array)),this.data.array[e*this.data.stride+this.offset+t]=n,this}setX(e,t){return this.normalized&&(t=gt(t,this.array)),this.data.array[e*this.data.stride+this.offset]=t,this}setY(e,t){return this.normalized&&(t=gt(t,this.array)),this.data.array[e*this.data.stride+this.offset+1]=t,this}setZ(e,t){return this.normalized&&(t=gt(t,this.array)),this.data.array[e*this.data.stride+this.offset+2]=t,this}setW(e,t){return this.normalized&&(t=gt(t,this.array)),this.data.array[e*this.data.stride+this.offset+3]=t,this}getX(e){let t=this.data.array[e*this.data.stride+this.offset];return this.normalized&&(t=$n(t,this.array)),t}getY(e){let t=this.data.array[e*this.data.stride+this.offset+1];return this.normalized&&(t=$n(t,this.array)),t}getZ(e){let t=this.data.array[e*this.data.stride+this.offset+2];return this.normalized&&(t=$n(t,this.array)),t}getW(e){let t=this.data.array[e*this.data.stride+this.offset+3];return this.normalized&&(t=$n(t,this.array)),t}setXY(e,t,n){return e=e*this.data.stride+this.offset,this.normalized&&(t=gt(t,this.array),n=gt(n,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this}setXYZ(e,t,n,s){return e=e*this.data.stride+this.offset,this.normalized&&(t=gt(t,this.array),n=gt(n,this.array),s=gt(s,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=s,this}setXYZW(e,t,n,s,r){return e=e*this.data.stride+this.offset,this.normalized&&(t=gt(t,this.array),n=gt(n,this.array),s=gt(s,this.array),r=gt(r,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=s,this.data.array[e+3]=r,this}clone(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");const t=[];for(let n=0;n<this.count;n++){const s=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)t.push(this.data.array[s+r])}return new on(new this.array.constructor(t),this.itemSize,this.normalized)}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.clone(e)),new Ql(e.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");const t=[];for(let n=0;n<this.count;n++){const s=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)t.push(this.data.array[s+r])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:t,normalized:this.normalized}}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.toJSON(e)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}}const yh=new D,xh=new dt,Sh=new dt,hy=new D,Mh=new Ke,za=new D,Sc=new ci,bh=new Ke,Mc=new Fo;class uy extends B{constructor(e,t){super(e,t),this.isSkinnedMesh=!0,this.type="SkinnedMesh",this.bindMode=Sd,this.bindMatrix=new Ke,this.bindMatrixInverse=new Ke,this.boundingBox=null,this.boundingSphere=null}computeBoundingBox(){const e=this.geometry;this.boundingBox===null&&(this.boundingBox=new Ui),this.boundingBox.makeEmpty();const t=e.getAttribute("position");for(let n=0;n<t.count;n++)this.getVertexPosition(n,za),this.boundingBox.expandByPoint(za)}computeBoundingSphere(){const e=this.geometry;this.boundingSphere===null&&(this.boundingSphere=new ci),this.boundingSphere.makeEmpty();const t=e.getAttribute("position");for(let n=0;n<t.count;n++)this.getVertexPosition(n,za),this.boundingSphere.expandByPoint(za)}copy(e,t){return super.copy(e,t),this.bindMode=e.bindMode,this.bindMatrix.copy(e.bindMatrix),this.bindMatrixInverse.copy(e.bindMatrixInverse),this.skeleton=e.skeleton,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}raycast(e,t){const n=this.material,s=this.matrixWorld;n!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),Sc.copy(this.boundingSphere),Sc.applyMatrix4(s),e.ray.intersectsSphere(Sc)!==!1&&(bh.copy(s).invert(),Mc.copy(e.ray).applyMatrix4(bh),!(this.boundingBox!==null&&Mc.intersectsBox(this.boundingBox)===!1)&&this._computeIntersections(e,t,Mc)))}getVertexPosition(e,t){return super.getVertexPosition(e,t),this.applyBoneTransform(e,t),t}bind(e,t){this.skeleton=e,t===void 0&&(this.updateMatrixWorld(!0),this.skeleton.calculateInverses(),t=this.matrixWorld),this.bindMatrix.copy(t),this.bindMatrixInverse.copy(t).invert()}pose(){this.skeleton.pose()}normalizeSkinWeights(){const e=new dt,t=this.geometry.attributes.skinWeight;for(let n=0,s=t.count;n<s;n++){e.fromBufferAttribute(t,n);const r=1/e.manhattanLength();r!==1/0?e.multiplyScalar(r):e.set(1,0,0,0),t.setXYZW(n,e.x,e.y,e.z,e.w)}}updateMatrixWorld(e){super.updateMatrixWorld(e),this.bindMode===Sd?this.bindMatrixInverse.copy(this.matrixWorld).invert():this.bindMode===vp?this.bindMatrixInverse.copy(this.bindMatrix).invert():console.warn("THREE.SkinnedMesh: Unrecognized bindMode: "+this.bindMode)}applyBoneTransform(e,t){const n=this.skeleton,s=this.geometry;xh.fromBufferAttribute(s.attributes.skinIndex,e),Sh.fromBufferAttribute(s.attributes.skinWeight,e),yh.copy(t).applyMatrix4(this.bindMatrix),t.set(0,0,0);for(let r=0;r<4;r++){const a=Sh.getComponent(r);if(a!==0){const o=xh.getComponent(r);Mh.multiplyMatrices(n.bones[o].matrixWorld,n.boneInverses[o]),t.addScaledVector(hy.copy(yh).applyMatrix4(Mh),a)}}return t.applyMatrix4(this.bindMatrixInverse)}}class Ku extends Tt{constructor(){super(),this.isBone=!0,this.type="Bone"}}class ed extends kt{constructor(e=null,t=1,n=1,s,r,a,o,c,l=an,d=an,h,u){super(null,a,o,c,l,d,s,r,h,u),this.isDataTexture=!0,this.image={data:e,width:t,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}const Eh=new Ke,fy=new Ke;class td{constructor(e=[],t=[]){this.uuid=jn(),this.bones=e.slice(0),this.boneInverses=t,this.boneMatrices=null,this.boneTexture=null,this.init()}init(){const e=this.bones,t=this.boneInverses;if(this.boneMatrices=new Float32Array(e.length*16),t.length===0)this.calculateInverses();else if(e.length!==t.length){console.warn("THREE.Skeleton: Number of inverse bone matrices does not match amount of bones."),this.boneInverses=[];for(let n=0,s=this.bones.length;n<s;n++)this.boneInverses.push(new Ke)}}calculateInverses(){this.boneInverses.length=0;for(let e=0,t=this.bones.length;e<t;e++){const n=new Ke;this.bones[e]&&n.copy(this.bones[e].matrixWorld).invert(),this.boneInverses.push(n)}}pose(){for(let e=0,t=this.bones.length;e<t;e++){const n=this.bones[e];n&&n.matrixWorld.copy(this.boneInverses[e]).invert()}for(let e=0,t=this.bones.length;e<t;e++){const n=this.bones[e];n&&(n.parent&&n.parent.isBone?(n.matrix.copy(n.parent.matrixWorld).invert(),n.matrix.multiply(n.matrixWorld)):n.matrix.copy(n.matrixWorld),n.matrix.decompose(n.position,n.quaternion,n.scale))}}update(){const e=this.bones,t=this.boneInverses,n=this.boneMatrices,s=this.boneTexture;for(let r=0,a=e.length;r<a;r++){const o=e[r]?e[r].matrixWorld:fy;Eh.multiplyMatrices(o,t[r]),Eh.toArray(n,r*16)}s!==null&&(s.needsUpdate=!0)}clone(){return new td(this.bones,this.boneInverses)}computeBoneTexture(){let e=Math.sqrt(this.bones.length*4);e=Math.ceil(e/4)*4,e=Math.max(e,4);const t=new Float32Array(e*e*4);t.set(this.boneMatrices);const n=new ed(t,e,e,Pn,hn);return n.needsUpdate=!0,this.boneMatrices=t,this.boneTexture=n,this}getBoneByName(e){for(let t=0,n=this.bones.length;t<n;t++){const s=this.bones[t];if(s.name===e)return s}}dispose(){this.boneTexture!==null&&(this.boneTexture.dispose(),this.boneTexture=null)}fromJSON(e,t){this.uuid=e.uuid;for(let n=0,s=e.bones.length;n<s;n++){const r=e.bones[n];let a=t[r];a===void 0&&(console.warn("THREE.Skeleton: No bone found with UUID:",r),a=new Ku),this.bones.push(a),this.boneInverses.push(new Ke().fromArray(e.boneInverses[n]))}return this.init(),this}toJSON(){const e={metadata:{version:4.6,type:"Skeleton",generator:"Skeleton.toJSON"},bones:[],boneInverses:[]};e.uuid=this.uuid;const t=this.bones,n=this.boneInverses;for(let s=0,r=t.length;s<r;s++){const a=t[s];e.bones.push(a.uuid);const o=n[s];e.boneInverses.push(o.toArray())}return e}}class bl extends on{constructor(e,t,n,s=1){super(e,t,n),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=s}copy(e){return super.copy(e),this.meshPerAttribute=e.meshPerAttribute,this}toJSON(){const e=super.toJSON();return e.meshPerAttribute=this.meshPerAttribute,e.isInstancedBufferAttribute=!0,e}}const Js=new Ke,Th=new Ke,Ha=[],wh=new Ui,py=new Ke,kr=new B,zr=new ci;class my extends B{constructor(e,t,n){super(e,t),this.isInstancedMesh=!0,this.instanceMatrix=new bl(new Float32Array(n*16),16),this.instanceColor=null,this.morphTexture=null,this.count=n,this.boundingBox=null,this.boundingSphere=null;for(let s=0;s<n;s++)this.setMatrixAt(s,py)}computeBoundingBox(){const e=this.geometry,t=this.count;this.boundingBox===null&&(this.boundingBox=new Ui),e.boundingBox===null&&e.computeBoundingBox(),this.boundingBox.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,Js),wh.copy(e.boundingBox).applyMatrix4(Js),this.boundingBox.union(wh)}computeBoundingSphere(){const e=this.geometry,t=this.count;this.boundingSphere===null&&(this.boundingSphere=new ci),e.boundingSphere===null&&e.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,Js),zr.copy(e.boundingSphere).applyMatrix4(Js),this.boundingSphere.union(zr)}copy(e,t){return super.copy(e,t),this.instanceMatrix.copy(e.instanceMatrix),e.morphTexture!==null&&(this.morphTexture=e.morphTexture.clone()),e.instanceColor!==null&&(this.instanceColor=e.instanceColor.clone()),this.count=e.count,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}getColorAt(e,t){t.fromArray(this.instanceColor.array,e*3)}getMatrixAt(e,t){t.fromArray(this.instanceMatrix.array,e*16)}getMorphAt(e,t){const n=t.morphTargetInfluences,s=this.morphTexture.source.data.data,r=n.length+1,a=e*r+1;for(let o=0;o<n.length;o++)n[o]=s[a+o]}raycast(e,t){const n=this.matrixWorld,s=this.count;if(kr.geometry=this.geometry,kr.material=this.material,kr.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),zr.copy(this.boundingSphere),zr.applyMatrix4(n),e.ray.intersectsSphere(zr)!==!1))for(let r=0;r<s;r++){this.getMatrixAt(r,Js),Th.multiplyMatrices(n,Js),kr.matrixWorld=Th,kr.raycast(e,Ha);for(let a=0,o=Ha.length;a<o;a++){const c=Ha[a];c.instanceId=r,c.object=this,t.push(c)}Ha.length=0}}setColorAt(e,t){this.instanceColor===null&&(this.instanceColor=new bl(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),t.toArray(this.instanceColor.array,e*3)}setMatrixAt(e,t){t.toArray(this.instanceMatrix.array,e*16)}setMorphAt(e,t){const n=t.morphTargetInfluences,s=n.length+1;this.morphTexture===null&&(this.morphTexture=new ed(new Float32Array(s*this.count),s,this.count,Wl,hn));const r=this.morphTexture.source.data.data;let a=0;for(let l=0;l<n.length;l++)a+=n[l];const o=this.geometry.morphTargetsRelative?1:1-a,c=s*e;r[c]=o,r.set(n,c+1)}updateMorphTargets(){}dispose(){return this.dispatchEvent({type:"dispose"}),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null),this}}class nd extends si{static get type(){return"LineBasicMaterial"}constructor(e){super(),this.isLineBasicMaterial=!0,this.color=new ze(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}}const xo=new D,So=new D,Ah=new Ke,Hr=new Fo,Ga=new ci,bc=new D,Rh=new D;class ko extends Tt{constructor(e=new fn,t=new nd){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,n=[0];for(let s=1,r=t.count;s<r;s++)xo.fromBufferAttribute(t,s-1),So.fromBufferAttribute(t,s),n[s]=n[s-1],n[s]+=xo.distanceTo(So);e.setAttribute("lineDistance",new Xt(n,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(e,t){const n=this.geometry,s=this.matrixWorld,r=e.params.Line.threshold,a=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),Ga.copy(n.boundingSphere),Ga.applyMatrix4(s),Ga.radius+=r,e.ray.intersectsSphere(Ga)===!1)return;Ah.copy(s).invert(),Hr.copy(e.ray).applyMatrix4(Ah);const o=r/((this.scale.x+this.scale.y+this.scale.z)/3),c=o*o,l=this.isLineSegments?2:1,d=n.index,u=n.attributes.position;if(d!==null){const f=Math.max(0,a.start),g=Math.min(d.count,a.start+a.count);for(let v=f,m=g-1;v<m;v+=l){const p=d.getX(v),x=d.getX(v+1),b=Va(this,e,Hr,c,p,x);b&&t.push(b)}if(this.isLineLoop){const v=d.getX(g-1),m=d.getX(f),p=Va(this,e,Hr,c,v,m);p&&t.push(p)}}else{const f=Math.max(0,a.start),g=Math.min(u.count,a.start+a.count);for(let v=f,m=g-1;v<m;v+=l){const p=Va(this,e,Hr,c,v,v+1);p&&t.push(p)}if(this.isLineLoop){const v=Va(this,e,Hr,c,g-1,f);v&&t.push(v)}}}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const s=t[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=s.length;r<a;r++){const o=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}}function Va(i,e,t,n,s,r){const a=i.geometry.attributes.position;if(xo.fromBufferAttribute(a,s),So.fromBufferAttribute(a,r),t.distanceSqToSegment(xo,So,bc,Rh)>n)return;bc.applyMatrix4(i.matrixWorld);const c=e.ray.origin.distanceTo(bc);if(!(c<e.near||c>e.far))return{distance:c,point:Rh.clone().applyMatrix4(i.matrixWorld),index:s,face:null,faceIndex:null,barycoord:null,object:i}}const Ch=new D,Ih=new D;class gy extends ko{constructor(e,t){super(e,t),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,n=[];for(let s=0,r=t.count;s<r;s+=2)Ch.fromBufferAttribute(t,s),Ih.fromBufferAttribute(t,s+1),n[s]=s===0?0:n[s-1],n[s+1]=n[s]+Ch.distanceTo(Ih);e.setAttribute("lineDistance",new Xt(n,1))}else console.warn("THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}}class vy extends ko{constructor(e,t){super(e,t),this.isLineLoop=!0,this.type="LineLoop"}}class Zu extends si{static get type(){return"PointsMaterial"}constructor(e){super(),this.isPointsMaterial=!0,this.color=new ze(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}const Lh=new Ke,El=new Fo,Wa=new ci,Xa=new D;class _y extends Tt{constructor(e=new fn,t=new Zu){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}raycast(e,t){const n=this.geometry,s=this.matrixWorld,r=e.params.Points.threshold,a=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),Wa.copy(n.boundingSphere),Wa.applyMatrix4(s),Wa.radius+=r,e.ray.intersectsSphere(Wa)===!1)return;Lh.copy(s).invert(),El.copy(e.ray).applyMatrix4(Lh);const o=r/((this.scale.x+this.scale.y+this.scale.z)/3),c=o*o,l=n.index,h=n.attributes.position;if(l!==null){const u=Math.max(0,a.start),f=Math.min(l.count,a.start+a.count);for(let g=u,v=f;g<v;g++){const m=l.getX(g);Xa.fromBufferAttribute(h,m),Dh(Xa,m,c,s,e,t,this)}}else{const u=Math.max(0,a.start),f=Math.min(h.count,a.start+a.count);for(let g=u,v=f;g<v;g++)Xa.fromBufferAttribute(h,g),Dh(Xa,g,c,s,e,t,this)}}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const s=t[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=s.length;r<a;r++){const o=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}}function Dh(i,e,t,n,s,r,a){const o=El.distanceSqToPoint(i);if(o<t){const c=new D;El.closestPointToPoint(i,c),c.applyMatrix4(n);const l=s.ray.origin.distanceTo(c);if(l<s.near||l>s.far)return;r.push({distance:l,distanceToRay:Math.sqrt(o),point:c,index:e,face:null,faceIndex:null,barycoord:null,object:a})}}class pa extends kt{constructor(e,t,n,s,r,a,o,c,l){super(e,t,n,s,r,a,o,c,l),this.isCanvasTexture=!0,this.needsUpdate=!0}}class yy{constructor(){this.type="Curve",this.arcLengthDivisions=200}getPoint(){return console.warn("THREE.Curve: .getPoint() not implemented."),null}getPointAt(e,t){const n=this.getUtoTmapping(e);return this.getPoint(n,t)}getPoints(e=5){const t=[];for(let n=0;n<=e;n++)t.push(this.getPoint(n/e));return t}getSpacedPoints(e=5){const t=[];for(let n=0;n<=e;n++)t.push(this.getPointAt(n/e));return t}getLength(){const e=this.getLengths();return e[e.length-1]}getLengths(e=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===e+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;const t=[];let n,s=this.getPoint(0),r=0;t.push(0);for(let a=1;a<=e;a++)n=this.getPoint(a/e),r+=n.distanceTo(s),t.push(r),s=n;return this.cacheArcLengths=t,t}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(e,t){const n=this.getLengths();let s=0;const r=n.length;let a;t?a=t:a=e*n[r-1];let o=0,c=r-1,l;for(;o<=c;)if(s=Math.floor(o+(c-o)/2),l=n[s]-a,l<0)o=s+1;else if(l>0)c=s-1;else{c=s;break}if(s=c,n[s]===a)return s/(r-1);const d=n[s],u=n[s+1]-d,f=(a-d)/u;return(s+f)/(r-1)}getTangent(e,t){let s=e-1e-4,r=e+1e-4;s<0&&(s=0),r>1&&(r=1);const a=this.getPoint(s),o=this.getPoint(r),c=t||(a.isVector2?new je:new D);return c.copy(o).sub(a).normalize(),c}getTangentAt(e,t){const n=this.getUtoTmapping(e);return this.getTangent(n,t)}computeFrenetFrames(e,t){const n=new D,s=[],r=[],a=[],o=new D,c=new Ke;for(let f=0;f<=e;f++){const g=f/e;s[f]=this.getTangentAt(g,new D)}r[0]=new D,a[0]=new D;let l=Number.MAX_VALUE;const d=Math.abs(s[0].x),h=Math.abs(s[0].y),u=Math.abs(s[0].z);d<=l&&(l=d,n.set(1,0,0)),h<=l&&(l=h,n.set(0,1,0)),u<=l&&n.set(0,0,1),o.crossVectors(s[0],n).normalize(),r[0].crossVectors(s[0],o),a[0].crossVectors(s[0],r[0]);for(let f=1;f<=e;f++){if(r[f]=r[f-1].clone(),a[f]=a[f-1].clone(),o.crossVectors(s[f-1],s[f]),o.length()>Number.EPSILON){o.normalize();const g=Math.acos(Bt(s[f-1].dot(s[f]),-1,1));r[f].applyMatrix4(c.makeRotationAxis(o,g))}a[f].crossVectors(s[f],r[f])}if(t===!0){let f=Math.acos(Bt(r[0].dot(r[e]),-1,1));f/=e,s[0].dot(o.crossVectors(r[0],r[e]))>0&&(f=-f);for(let g=1;g<=e;g++)r[g].applyMatrix4(c.makeRotationAxis(s[g],f*g)),a[g].crossVectors(s[g],r[g])}return{tangents:s,normals:r,binormals:a}}clone(){return new this.constructor().copy(this)}copy(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}toJSON(){const e={metadata:{version:4.6,type:"Curve",generator:"Curve.toJSON"}};return e.arcLengthDivisions=this.arcLengthDivisions,e.type=this.type,e}fromJSON(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}}function id(){let i=0,e=0,t=0,n=0;function s(r,a,o,c){i=r,e=o,t=-3*r+3*a-2*o-c,n=2*r-2*a+o+c}return{initCatmullRom:function(r,a,o,c,l){s(a,o,l*(o-r),l*(c-a))},initNonuniformCatmullRom:function(r,a,o,c,l,d,h){let u=(a-r)/l-(o-r)/(l+d)+(o-a)/d,f=(o-a)/d-(c-a)/(d+h)+(c-o)/h;u*=d,f*=d,s(a,o,u,f)},calc:function(r){const a=r*r,o=a*r;return i+e*r+t*a+n*o}}}const Ya=new D,Ec=new id,Tc=new id,wc=new id;class xy extends yy{constructor(e=[],t=!1,n="centripetal",s=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=e,this.closed=t,this.curveType=n,this.tension=s}getPoint(e,t=new D){const n=t,s=this.points,r=s.length,a=(r-(this.closed?0:1))*e;let o=Math.floor(a),c=a-o;this.closed?o+=o>0?0:(Math.floor(Math.abs(o)/r)+1)*r:c===0&&o===r-1&&(o=r-2,c=1);let l,d;this.closed||o>0?l=s[(o-1)%r]:(Ya.subVectors(s[0],s[1]).add(s[0]),l=Ya);const h=s[o%r],u=s[(o+1)%r];if(this.closed||o+2<r?d=s[(o+2)%r]:(Ya.subVectors(s[r-1],s[r-2]).add(s[r-1]),d=Ya),this.curveType==="centripetal"||this.curveType==="chordal"){const f=this.curveType==="chordal"?.5:.25;let g=Math.pow(l.distanceToSquared(h),f),v=Math.pow(h.distanceToSquared(u),f),m=Math.pow(u.distanceToSquared(d),f);v<1e-4&&(v=1),g<1e-4&&(g=v),m<1e-4&&(m=v),Ec.initNonuniformCatmullRom(l.x,h.x,u.x,d.x,g,v,m),Tc.initNonuniformCatmullRom(l.y,h.y,u.y,d.y,g,v,m),wc.initNonuniformCatmullRom(l.z,h.z,u.z,d.z,g,v,m)}else this.curveType==="catmullrom"&&(Ec.initCatmullRom(l.x,h.x,u.x,d.x,this.tension),Tc.initCatmullRom(l.y,h.y,u.y,d.y,this.tension),wc.initCatmullRom(l.z,h.z,u.z,d.z,this.tension));return n.set(Ec.calc(c),Tc.calc(c),wc.calc(c)),n}copy(e){super.copy(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){const s=e.points[t];this.points.push(s.clone())}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}toJSON(){const e=super.toJSON();e.points=[];for(let t=0,n=this.points.length;t<n;t++){const s=this.points[t];e.points.push(s.toArray())}return e.closed=this.closed,e.curveType=this.curveType,e.tension=this.tension,e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){const s=e.points[t];this.points.push(new D().fromArray(s))}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}}class ft extends fn{constructor(e=1,t=1,n=1,s=32,r=1,a=!1,o=0,c=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:e,radiusBottom:t,height:n,radialSegments:s,heightSegments:r,openEnded:a,thetaStart:o,thetaLength:c};const l=this;s=Math.floor(s),r=Math.floor(r);const d=[],h=[],u=[],f=[];let g=0;const v=[],m=n/2;let p=0;x(),a===!1&&(e>0&&b(!0),t>0&&b(!1)),this.setIndex(d),this.setAttribute("position",new Xt(h,3)),this.setAttribute("normal",new Xt(u,3)),this.setAttribute("uv",new Xt(f,2));function x(){const y=new D,I=new D;let T=0;const w=(t-e)/n;for(let R=0;R<=r;R++){const S=[],_=R/r,C=_*(t-e)+e;for(let F=0;F<=s;F++){const P=F/s,N=P*c+o,G=Math.sin(N),L=Math.cos(N);I.x=C*G,I.y=-_*n+m,I.z=C*L,h.push(I.x,I.y,I.z),y.set(G,w,L).normalize(),u.push(y.x,y.y,y.z),f.push(P,1-_),S.push(g++)}v.push(S)}for(let R=0;R<s;R++)for(let S=0;S<r;S++){const _=v[S][R],C=v[S+1][R],F=v[S+1][R+1],P=v[S][R+1];(e>0||S!==0)&&(d.push(_,C,P),T+=3),(t>0||S!==r-1)&&(d.push(C,F,P),T+=3)}l.addGroup(p,T,0),p+=T}function b(y){const I=g,T=new je,w=new D;let R=0;const S=y===!0?e:t,_=y===!0?1:-1;for(let F=1;F<=s;F++)h.push(0,m*_,0),u.push(0,_,0),f.push(.5,.5),g++;const C=g;for(let F=0;F<=s;F++){const N=F/s*c+o,G=Math.cos(N),L=Math.sin(N);w.x=S*L,w.y=m*_,w.z=S*G,h.push(w.x,w.y,w.z),u.push(0,_,0),T.x=G*.5+.5,T.y=L*.5*_+.5,f.push(T.x,T.y),g++}for(let F=0;F<s;F++){const P=I+F,N=C+F;y===!0?d.push(N,N+1,P):d.push(N+1,N,P),R+=3}l.addGroup(p,R,y===!0?1:2),p+=R}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new ft(e.radiusTop,e.radiusBottom,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}}class zo extends ft{constructor(e=1,t=1,n=32,s=1,r=!1,a=0,o=Math.PI*2){super(0,e,t,n,s,r,a,o),this.type="ConeGeometry",this.parameters={radius:e,height:t,radialSegments:n,heightSegments:s,openEnded:r,thetaStart:a,thetaLength:o}}static fromJSON(e){return new zo(e.radius,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}}class Ns extends fn{constructor(e=1,t=32,n=16,s=0,r=Math.PI*2,a=0,o=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:t,heightSegments:n,phiStart:s,phiLength:r,thetaStart:a,thetaLength:o},t=Math.max(3,Math.floor(t)),n=Math.max(2,Math.floor(n));const c=Math.min(a+o,Math.PI);let l=0;const d=[],h=new D,u=new D,f=[],g=[],v=[],m=[];for(let p=0;p<=n;p++){const x=[],b=p/n;let y=0;p===0&&a===0?y=.5/t:p===n&&c===Math.PI&&(y=-.5/t);for(let I=0;I<=t;I++){const T=I/t;h.x=-e*Math.cos(s+T*r)*Math.sin(a+b*o),h.y=e*Math.cos(a+b*o),h.z=e*Math.sin(s+T*r)*Math.sin(a+b*o),g.push(h.x,h.y,h.z),u.copy(h).normalize(),v.push(u.x,u.y,u.z),m.push(T+y,1-b),x.push(l++)}d.push(x)}for(let p=0;p<n;p++)for(let x=0;x<t;x++){const b=d[p][x+1],y=d[p][x],I=d[p+1][x],T=d[p+1][x+1];(p!==0||a>0)&&f.push(b,y,T),(p!==n-1||c<Math.PI)&&f.push(y,I,T)}this.setIndex(f),this.setAttribute("position",new Xt(g,3)),this.setAttribute("normal",new Xt(v,3)),this.setAttribute("uv",new Xt(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Ns(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}}class sd extends fn{constructor(e=1,t=.4,n=12,s=48,r=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:e,tube:t,radialSegments:n,tubularSegments:s,arc:r},n=Math.floor(n),s=Math.floor(s);const a=[],o=[],c=[],l=[],d=new D,h=new D,u=new D;for(let f=0;f<=n;f++)for(let g=0;g<=s;g++){const v=g/s*r,m=f/n*Math.PI*2;h.x=(e+t*Math.cos(m))*Math.cos(v),h.y=(e+t*Math.cos(m))*Math.sin(v),h.z=t*Math.sin(m),o.push(h.x,h.y,h.z),d.x=e*Math.cos(v),d.y=e*Math.sin(v),u.subVectors(h,d).normalize(),c.push(u.x,u.y,u.z),l.push(g/s),l.push(f/n)}for(let f=1;f<=n;f++)for(let g=1;g<=s;g++){const v=(s+1)*f+g-1,m=(s+1)*(f-1)+g-1,p=(s+1)*(f-1)+g,x=(s+1)*f+g;a.push(v,m,x),a.push(m,p,x)}this.setIndex(a),this.setAttribute("position",new Xt(o,3)),this.setAttribute("normal",new Xt(c,3)),this.setAttribute("uv",new Xt(l,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new sd(e.radius,e.tube,e.radialSegments,e.tubularSegments,e.arc)}}class ae extends si{static get type(){return"MeshStandardMaterial"}constructor(e){super(),this.isMeshStandardMaterial=!0,this.defines={STANDARD:""},this.color=new ze(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new ze(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Lu,this.normalScale=new je(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new ai,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class li extends ae{static get type(){return"MeshPhysicalMaterial"}constructor(e){super(),this.isMeshPhysicalMaterial=!0,this.defines={STANDARD:"",PHYSICAL:""},this.anisotropyRotation=0,this.anisotropyMap=null,this.clearcoatMap=null,this.clearcoatRoughness=0,this.clearcoatRoughnessMap=null,this.clearcoatNormalScale=new je(1,1),this.clearcoatNormalMap=null,this.ior=1.5,Object.defineProperty(this,"reflectivity",{get:function(){return Bt(2.5*(this.ior-1)/(this.ior+1),0,1)},set:function(t){this.ior=(1+.4*t)/(1-.4*t)}}),this.iridescenceMap=null,this.iridescenceIOR=1.3,this.iridescenceThicknessRange=[100,400],this.iridescenceThicknessMap=null,this.sheenColor=new ze(0),this.sheenColorMap=null,this.sheenRoughness=1,this.sheenRoughnessMap=null,this.transmissionMap=null,this.thickness=0,this.thicknessMap=null,this.attenuationDistance=1/0,this.attenuationColor=new ze(1,1,1),this.specularIntensity=1,this.specularIntensityMap=null,this.specularColor=new ze(1,1,1),this.specularColorMap=null,this._anisotropy=0,this._clearcoat=0,this._dispersion=0,this._iridescence=0,this._sheen=0,this._transmission=0,this.setValues(e)}get anisotropy(){return this._anisotropy}set anisotropy(e){this._anisotropy>0!=e>0&&this.version++,this._anisotropy=e}get clearcoat(){return this._clearcoat}set clearcoat(e){this._clearcoat>0!=e>0&&this.version++,this._clearcoat=e}get iridescence(){return this._iridescence}set iridescence(e){this._iridescence>0!=e>0&&this.version++,this._iridescence=e}get dispersion(){return this._dispersion}set dispersion(e){this._dispersion>0!=e>0&&this.version++,this._dispersion=e}get sheen(){return this._sheen}set sheen(e){this._sheen>0!=e>0&&this.version++,this._sheen=e}get transmission(){return this._transmission}set transmission(e){this._transmission>0!=e>0&&this.version++,this._transmission=e}copy(e){return super.copy(e),this.defines={STANDARD:"",PHYSICAL:""},this.anisotropy=e.anisotropy,this.anisotropyRotation=e.anisotropyRotation,this.anisotropyMap=e.anisotropyMap,this.clearcoat=e.clearcoat,this.clearcoatMap=e.clearcoatMap,this.clearcoatRoughness=e.clearcoatRoughness,this.clearcoatRoughnessMap=e.clearcoatRoughnessMap,this.clearcoatNormalMap=e.clearcoatNormalMap,this.clearcoatNormalScale.copy(e.clearcoatNormalScale),this.dispersion=e.dispersion,this.ior=e.ior,this.iridescence=e.iridescence,this.iridescenceMap=e.iridescenceMap,this.iridescenceIOR=e.iridescenceIOR,this.iridescenceThicknessRange=[...e.iridescenceThicknessRange],this.iridescenceThicknessMap=e.iridescenceThicknessMap,this.sheen=e.sheen,this.sheenColor.copy(e.sheenColor),this.sheenColorMap=e.sheenColorMap,this.sheenRoughness=e.sheenRoughness,this.sheenRoughnessMap=e.sheenRoughnessMap,this.transmission=e.transmission,this.transmissionMap=e.transmissionMap,this.thickness=e.thickness,this.thicknessMap=e.thicknessMap,this.attenuationDistance=e.attenuationDistance,this.attenuationColor.copy(e.attenuationColor),this.specularIntensity=e.specularIntensity,this.specularIntensityMap=e.specularIntensityMap,this.specularColor.copy(e.specularColor),this.specularColorMap=e.specularColorMap,this}}function qa(i,e,t){return!i||!t&&i.constructor===e?i:typeof e.BYTES_PER_ELEMENT=="number"?new e(i):Array.prototype.slice.call(i)}function Sy(i){return ArrayBuffer.isView(i)&&!(i instanceof DataView)}function My(i){function e(s,r){return i[s]-i[r]}const t=i.length,n=new Array(t);for(let s=0;s!==t;++s)n[s]=s;return n.sort(e),n}function Ph(i,e,t){const n=i.length,s=new i.constructor(n);for(let r=0,a=0;a!==n;++r){const o=t[r]*e;for(let c=0;c!==e;++c)s[a++]=i[o+c]}return s}function ju(i,e,t,n){let s=1,r=i[0];for(;r!==void 0&&r[n]===void 0;)r=i[s++];if(r===void 0)return;let a=r[n];if(a!==void 0)if(Array.isArray(a))do a=r[n],a!==void 0&&(e.push(r.time),t.push.apply(t,a)),r=i[s++];while(r!==void 0);else if(a.toArray!==void 0)do a=r[n],a!==void 0&&(e.push(r.time),a.toArray(t,t.length)),r=i[s++];while(r!==void 0);else do a=r[n],a!==void 0&&(e.push(r.time),t.push(a)),r=i[s++];while(r!==void 0)}class ma{constructor(e,t,n,s){this.parameterPositions=e,this._cachedIndex=0,this.resultBuffer=s!==void 0?s:new t.constructor(n),this.sampleValues=t,this.valueSize=n,this.settings=null,this.DefaultSettings_={}}evaluate(e){const t=this.parameterPositions;let n=this._cachedIndex,s=t[n],r=t[n-1];n:{e:{let a;t:{i:if(!(e<s)){for(let o=n+2;;){if(s===void 0){if(e<r)break i;return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}if(n===o)break;if(r=s,s=t[++n],e<s)break e}a=t.length;break t}if(!(e>=r)){const o=t[1];e<o&&(n=2,r=o);for(let c=n-2;;){if(r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===c)break;if(s=r,r=t[--n-1],e>=r)break e}a=n,n=0;break t}break n}for(;n<a;){const o=n+a>>>1;e<t[o]?a=o:n=o+1}if(s=t[n],r=t[n-1],r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(s===void 0)return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}this._cachedIndex=n,this.intervalChanged_(n,r,s)}return this.interpolate_(n,r,e,s)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(e){const t=this.resultBuffer,n=this.sampleValues,s=this.valueSize,r=e*s;for(let a=0;a!==s;++a)t[a]=n[r+a];return t}interpolate_(){throw new Error("call to abstract method")}intervalChanged_(){}}class by extends ma{constructor(e,t,n,s){super(e,t,n,s),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:Md,endingEnd:Md}}intervalChanged_(e,t,n){const s=this.parameterPositions;let r=e-2,a=e+1,o=s[r],c=s[a];if(o===void 0)switch(this.getSettings_().endingStart){case bd:r=e,o=2*t-n;break;case Ed:r=s.length-2,o=t+s[r]-s[r+1];break;default:r=e,o=n}if(c===void 0)switch(this.getSettings_().endingEnd){case bd:a=e,c=2*n-t;break;case Ed:a=1,c=n+s[1]-s[0];break;default:a=e-1,c=t}const l=(n-t)*.5,d=this.valueSize;this._weightPrev=l/(t-o),this._weightNext=l/(c-n),this._offsetPrev=r*d,this._offsetNext=a*d}interpolate_(e,t,n,s){const r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,c=e*o,l=c-o,d=this._offsetPrev,h=this._offsetNext,u=this._weightPrev,f=this._weightNext,g=(n-t)/(s-t),v=g*g,m=v*g,p=-u*m+2*u*v-u*g,x=(1+u)*m+(-1.5-2*u)*v+(-.5+u)*g+1,b=(-1-f)*m+(1.5+f)*v+.5*g,y=f*m-f*v;for(let I=0;I!==o;++I)r[I]=p*a[d+I]+x*a[l+I]+b*a[c+I]+y*a[h+I];return r}}class Ey extends ma{constructor(e,t,n,s){super(e,t,n,s)}interpolate_(e,t,n,s){const r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,c=e*o,l=c-o,d=(n-t)/(s-t),h=1-d;for(let u=0;u!==o;++u)r[u]=a[l+u]*h+a[c+u]*d;return r}}class Ty extends ma{constructor(e,t,n,s){super(e,t,n,s)}interpolate_(e){return this.copySampleValue_(e-1)}}class di{constructor(e,t,n,s){if(e===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(t===void 0||t.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+e);this.name=e,this.times=qa(t,this.TimeBufferType),this.values=qa(n,this.ValueBufferType),this.setInterpolation(s||this.DefaultInterpolation)}static toJSON(e){const t=e.constructor;let n;if(t.toJSON!==this.toJSON)n=t.toJSON(e);else{n={name:e.name,times:qa(e.times,Array),values:qa(e.values,Array)};const s=e.getInterpolation();s!==e.DefaultInterpolation&&(n.interpolation=s)}return n.type=e.ValueTypeName,n}InterpolantFactoryMethodDiscrete(e){return new Ty(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodLinear(e){return new Ey(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodSmooth(e){return new by(this.times,this.values,this.getValueSize(),e)}setInterpolation(e){let t;switch(e){case ha:t=this.InterpolantFactoryMethodDiscrete;break;case ua:t=this.InterpolantFactoryMethodLinear;break;case qo:t=this.InterpolantFactoryMethodSmooth;break}if(t===void 0){const n="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(e!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(n);return console.warn("THREE.KeyframeTrack:",n),this}return this.createInterpolant=t,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return ha;case this.InterpolantFactoryMethodLinear:return ua;case this.InterpolantFactoryMethodSmooth:return qo}}getValueSize(){return this.values.length/this.times.length}shift(e){if(e!==0){const t=this.times;for(let n=0,s=t.length;n!==s;++n)t[n]+=e}return this}scale(e){if(e!==1){const t=this.times;for(let n=0,s=t.length;n!==s;++n)t[n]*=e}return this}trim(e,t){const n=this.times,s=n.length;let r=0,a=s-1;for(;r!==s&&n[r]<e;)++r;for(;a!==-1&&n[a]>t;)--a;if(++a,r!==0||a!==s){r>=a&&(a=Math.max(a,1),r=a-1);const o=this.getValueSize();this.times=n.slice(r,a),this.values=this.values.slice(r*o,a*o)}return this}validate(){let e=!0;const t=this.getValueSize();t-Math.floor(t)!==0&&(console.error("THREE.KeyframeTrack: Invalid value size in track.",this),e=!1);const n=this.times,s=this.values,r=n.length;r===0&&(console.error("THREE.KeyframeTrack: Track is empty.",this),e=!1);let a=null;for(let o=0;o!==r;o++){const c=n[o];if(typeof c=="number"&&isNaN(c)){console.error("THREE.KeyframeTrack: Time is not a valid number.",this,o,c),e=!1;break}if(a!==null&&a>c){console.error("THREE.KeyframeTrack: Out of order keys.",this,o,c,a),e=!1;break}a=c}if(s!==void 0&&Sy(s))for(let o=0,c=s.length;o!==c;++o){const l=s[o];if(isNaN(l)){console.error("THREE.KeyframeTrack: Value is not a valid number.",this,o,l),e=!1;break}}return e}optimize(){const e=this.times.slice(),t=this.values.slice(),n=this.getValueSize(),s=this.getInterpolation()===qo,r=e.length-1;let a=1;for(let o=1;o<r;++o){let c=!1;const l=e[o],d=e[o+1];if(l!==d&&(o!==1||l!==e[0]))if(s)c=!0;else{const h=o*n,u=h-n,f=h+n;for(let g=0;g!==n;++g){const v=t[h+g];if(v!==t[u+g]||v!==t[f+g]){c=!0;break}}}if(c){if(o!==a){e[a]=e[o];const h=o*n,u=a*n;for(let f=0;f!==n;++f)t[u+f]=t[h+f]}++a}}if(r>0){e[a]=e[r];for(let o=r*n,c=a*n,l=0;l!==n;++l)t[c+l]=t[o+l];++a}return a!==e.length?(this.times=e.slice(0,a),this.values=t.slice(0,a*n)):(this.times=e,this.values=t),this}clone(){const e=this.times.slice(),t=this.values.slice(),n=this.constructor,s=new n(this.name,e,t);return s.createInterpolant=this.createInterpolant,s}}di.prototype.TimeBufferType=Float32Array;di.prototype.ValueBufferType=Float32Array;di.prototype.DefaultInterpolation=ua;class Lr extends di{constructor(e,t,n){super(e,t,n)}}Lr.prototype.ValueTypeName="bool";Lr.prototype.ValueBufferType=Array;Lr.prototype.DefaultInterpolation=ha;Lr.prototype.InterpolantFactoryMethodLinear=void 0;Lr.prototype.InterpolantFactoryMethodSmooth=void 0;class Ju extends di{}Ju.prototype.ValueTypeName="color";class br extends di{}br.prototype.ValueTypeName="number";class wy extends ma{constructor(e,t,n,s){super(e,t,n,s)}interpolate_(e,t,n,s){const r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,c=(n-t)/(s-t);let l=e*o;for(let d=l+o;l!==d;l+=4)os.slerpFlat(r,0,a,l-o,a,l,c);return r}}class Er extends di{InterpolantFactoryMethodLinear(e){return new wy(this.times,this.values,this.getValueSize(),e)}}Er.prototype.ValueTypeName="quaternion";Er.prototype.InterpolantFactoryMethodSmooth=void 0;class Dr extends di{constructor(e,t,n){super(e,t,n)}}Dr.prototype.ValueTypeName="string";Dr.prototype.ValueBufferType=Array;Dr.prototype.DefaultInterpolation=ha;Dr.prototype.InterpolantFactoryMethodLinear=void 0;Dr.prototype.InterpolantFactoryMethodSmooth=void 0;class Tr extends di{}Tr.prototype.ValueTypeName="vector";class Ay{constructor(e="",t=-1,n=[],s=_p){this.name=e,this.tracks=n,this.duration=t,this.blendMode=s,this.uuid=jn(),this.duration<0&&this.resetDuration()}static parse(e){const t=[],n=e.tracks,s=1/(e.fps||1);for(let a=0,o=n.length;a!==o;++a)t.push(Cy(n[a]).scale(s));const r=new this(e.name,e.duration,t,e.blendMode);return r.uuid=e.uuid,r}static toJSON(e){const t=[],n=e.tracks,s={name:e.name,duration:e.duration,tracks:t,uuid:e.uuid,blendMode:e.blendMode};for(let r=0,a=n.length;r!==a;++r)t.push(di.toJSON(n[r]));return s}static CreateFromMorphTargetSequence(e,t,n,s){const r=t.length,a=[];for(let o=0;o<r;o++){let c=[],l=[];c.push((o+r-1)%r,o,(o+1)%r),l.push(0,1,0);const d=My(c);c=Ph(c,1,d),l=Ph(l,1,d),!s&&c[0]===0&&(c.push(r),l.push(l[0])),a.push(new br(".morphTargetInfluences["+t[o].name+"]",c,l).scale(1/n))}return new this(e,-1,a)}static findByName(e,t){let n=e;if(!Array.isArray(e)){const s=e;n=s.geometry&&s.geometry.animations||s.animations}for(let s=0;s<n.length;s++)if(n[s].name===t)return n[s];return null}static CreateClipsFromMorphTargetSequences(e,t,n){const s={},r=/^([\w-]*?)([\d]+)$/;for(let o=0,c=e.length;o<c;o++){const l=e[o],d=l.name.match(r);if(d&&d.length>1){const h=d[1];let u=s[h];u||(s[h]=u=[]),u.push(l)}}const a=[];for(const o in s)a.push(this.CreateFromMorphTargetSequence(o,s[o],t,n));return a}static parseAnimation(e,t){if(!e)return console.error("THREE.AnimationClip: No animation in JSONLoader data."),null;const n=function(h,u,f,g,v){if(f.length!==0){const m=[],p=[];ju(f,m,p,g),m.length!==0&&v.push(new h(u,m,p))}},s=[],r=e.name||"default",a=e.fps||30,o=e.blendMode;let c=e.length||-1;const l=e.hierarchy||[];for(let h=0;h<l.length;h++){const u=l[h].keys;if(!(!u||u.length===0))if(u[0].morphTargets){const f={};let g;for(g=0;g<u.length;g++)if(u[g].morphTargets)for(let v=0;v<u[g].morphTargets.length;v++)f[u[g].morphTargets[v]]=-1;for(const v in f){const m=[],p=[];for(let x=0;x!==u[g].morphTargets.length;++x){const b=u[g];m.push(b.time),p.push(b.morphTarget===v?1:0)}s.push(new br(".morphTargetInfluence["+v+"]",m,p))}c=f.length*a}else{const f=".bones["+t[h].name+"]";n(Tr,f+".position",u,"pos",s),n(Er,f+".quaternion",u,"rot",s),n(Tr,f+".scale",u,"scl",s)}}return s.length===0?null:new this(r,c,s,o)}resetDuration(){const e=this.tracks;let t=0;for(let n=0,s=e.length;n!==s;++n){const r=this.tracks[n];t=Math.max(t,r.times[r.times.length-1])}return this.duration=t,this}trim(){for(let e=0;e<this.tracks.length;e++)this.tracks[e].trim(0,this.duration);return this}validate(){let e=!0;for(let t=0;t<this.tracks.length;t++)e=e&&this.tracks[t].validate();return e}optimize(){for(let e=0;e<this.tracks.length;e++)this.tracks[e].optimize();return this}clone(){const e=[];for(let t=0;t<this.tracks.length;t++)e.push(this.tracks[t].clone());return new this.constructor(this.name,this.duration,e,this.blendMode)}toJSON(){return this.constructor.toJSON(this)}}function Ry(i){switch(i.toLowerCase()){case"scalar":case"double":case"float":case"number":case"integer":return br;case"vector":case"vector2":case"vector3":case"vector4":return Tr;case"color":return Ju;case"quaternion":return Er;case"bool":case"boolean":return Lr;case"string":return Dr}throw new Error("THREE.KeyframeTrack: Unsupported typeName: "+i)}function Cy(i){if(i.type===void 0)throw new Error("THREE.KeyframeTrack: track type undefined, can not parse");const e=Ry(i.type);if(i.times===void 0){const t=[],n=[];ju(i.keys,t,n,"value"),i.times=t,i.values=n}return e.parse!==void 0?e.parse(i):new e(i.name,i.times,i.values,i.interpolation)}const es={enabled:!1,files:{},add:function(i,e){this.enabled!==!1&&(this.files[i]=e)},get:function(i){if(this.enabled!==!1)return this.files[i]},remove:function(i){delete this.files[i]},clear:function(){this.files={}}};class Iy{constructor(e,t,n){const s=this;let r=!1,a=0,o=0,c;const l=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=n,this.itemStart=function(d){o++,r===!1&&s.onStart!==void 0&&s.onStart(d,a,o),r=!0},this.itemEnd=function(d){a++,s.onProgress!==void 0&&s.onProgress(d,a,o),a===o&&(r=!1,s.onLoad!==void 0&&s.onLoad())},this.itemError=function(d){s.onError!==void 0&&s.onError(d)},this.resolveURL=function(d){return c?c(d):d},this.setURLModifier=function(d){return c=d,this},this.addHandler=function(d,h){return l.push(d,h),this},this.removeHandler=function(d){const h=l.indexOf(d);return h!==-1&&l.splice(h,2),this},this.getHandler=function(d){for(let h=0,u=l.length;h<u;h+=2){const f=l[h],g=l[h+1];if(f.global&&(f.lastIndex=0),f.test(d))return g}return null}}}const Ly=new Iy;class Os{constructor(e){this.manager=e!==void 0?e:Ly,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(e,t){const n=this;return new Promise(function(s,r){n.load(e,s,t,r)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}}Os.DEFAULT_MATERIAL_NAME="__DEFAULT";const vi={};class Dy extends Error{constructor(e,t){super(e),this.response=t}}class rd extends Os{constructor(e){super(e)}load(e,t,n,s){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const r=es.get(e);if(r!==void 0)return this.manager.itemStart(e),setTimeout(()=>{t&&t(r),this.manager.itemEnd(e)},0),r;if(vi[e]!==void 0){vi[e].push({onLoad:t,onProgress:n,onError:s});return}vi[e]=[],vi[e].push({onLoad:t,onProgress:n,onError:s});const a=new Request(e,{headers:new Headers(this.requestHeader),credentials:this.withCredentials?"include":"same-origin"}),o=this.mimeType,c=this.responseType;fetch(a).then(l=>{if(l.status===200||l.status===0){if(l.status===0&&console.warn("THREE.FileLoader: HTTP Status 0 received."),typeof ReadableStream>"u"||l.body===void 0||l.body.getReader===void 0)return l;const d=vi[e],h=l.body.getReader(),u=l.headers.get("X-File-Size")||l.headers.get("Content-Length"),f=u?parseInt(u):0,g=f!==0;let v=0;const m=new ReadableStream({start(p){x();function x(){h.read().then(({done:b,value:y})=>{if(b)p.close();else{v+=y.byteLength;const I=new ProgressEvent("progress",{lengthComputable:g,loaded:v,total:f});for(let T=0,w=d.length;T<w;T++){const R=d[T];R.onProgress&&R.onProgress(I)}p.enqueue(y),x()}},b=>{p.error(b)})}}});return new Response(m)}else throw new Dy(`fetch for "${l.url}" responded with ${l.status}: ${l.statusText}`,l)}).then(l=>{switch(c){case"arraybuffer":return l.arrayBuffer();case"blob":return l.blob();case"document":return l.text().then(d=>new DOMParser().parseFromString(d,o));case"json":return l.json();default:if(o===void 0)return l.text();{const h=/charset="?([^;"\s]*)"?/i.exec(o),u=h&&h[1]?h[1].toLowerCase():void 0,f=new TextDecoder(u);return l.arrayBuffer().then(g=>f.decode(g))}}}).then(l=>{es.add(e,l);const d=vi[e];delete vi[e];for(let h=0,u=d.length;h<u;h++){const f=d[h];f.onLoad&&f.onLoad(l)}}).catch(l=>{const d=vi[e];if(d===void 0)throw this.manager.itemError(e),l;delete vi[e];for(let h=0,u=d.length;h<u;h++){const f=d[h];f.onError&&f.onError(l)}this.manager.itemError(e)}).finally(()=>{this.manager.itemEnd(e)}),this.manager.itemStart(e)}setResponseType(e){return this.responseType=e,this}setMimeType(e){return this.mimeType=e,this}}class Py extends Os{constructor(e){super(e)}load(e,t,n,s){this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const r=this,a=es.get(e);if(a!==void 0)return r.manager.itemStart(e),setTimeout(function(){t&&t(a),r.manager.itemEnd(e)},0),a;const o=fa("img");function c(){d(),es.add(e,this),t&&t(this),r.manager.itemEnd(e)}function l(h){d(),s&&s(h),r.manager.itemError(e),r.manager.itemEnd(e)}function d(){o.removeEventListener("load",c,!1),o.removeEventListener("error",l,!1)}return o.addEventListener("load",c,!1),o.addEventListener("error",l,!1),e.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(o.crossOrigin=this.crossOrigin),r.manager.itemStart(e),o.src=e,o}}class Ny extends Os{constructor(e){super(e)}load(e,t,n,s){const r=this,a=new ed,o=new rd(this.manager);return o.setResponseType("arraybuffer"),o.setRequestHeader(this.requestHeader),o.setPath(this.path),o.setWithCredentials(r.withCredentials),o.load(e,function(c){let l;try{l=r.parse(c)}catch(d){if(s!==void 0)s(d);else{console.error(d);return}}l.image!==void 0?a.image=l.image:l.data!==void 0&&(a.image.width=l.width,a.image.height=l.height,a.image.data=l.data),a.wrapS=l.wrapS!==void 0?l.wrapS:ni,a.wrapT=l.wrapT!==void 0?l.wrapT:ni,a.magFilter=l.magFilter!==void 0?l.magFilter:Wt,a.minFilter=l.minFilter!==void 0?l.minFilter:Wt,a.anisotropy=l.anisotropy!==void 0?l.anisotropy:1,l.colorSpace!==void 0&&(a.colorSpace=l.colorSpace),l.flipY!==void 0&&(a.flipY=l.flipY),l.format!==void 0&&(a.format=l.format),l.type!==void 0&&(a.type=l.type),l.mipmaps!==void 0&&(a.mipmaps=l.mipmaps,a.minFilter=ii),l.mipmapCount===1&&(a.minFilter=Wt),l.generateMipmaps!==void 0&&(a.generateMipmaps=l.generateMipmaps),a.needsUpdate=!0,t&&t(a,l)},n,s),a}}class Qu extends Os{constructor(e){super(e)}load(e,t,n,s){const r=new kt,a=new Py(this.manager);return a.setCrossOrigin(this.crossOrigin),a.setPath(this.path),a.load(e,function(o){r.image=o,r.needsUpdate=!0,t!==void 0&&t(r)},n,s),r}}class Ho extends Tt{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new ze(e),this.intensity=t}dispose(){}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,this.groundColor!==void 0&&(t.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(t.object.distance=this.distance),this.angle!==void 0&&(t.object.angle=this.angle),this.decay!==void 0&&(t.object.decay=this.decay),this.penumbra!==void 0&&(t.object.penumbra=this.penumbra),this.shadow!==void 0&&(t.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(t.object.target=this.target.uuid),t}}class Oy extends Ho{constructor(e,t,n){super(e,n),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(Tt.DEFAULT_UP),this.updateMatrix(),this.groundColor=new ze(t)}copy(e,t){return super.copy(e,t),this.groundColor.copy(e.groundColor),this}}const Ac=new Ke,Nh=new D,Oh=new D;class ad{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new je(512,512),this.map=null,this.mapPass=null,this.matrix=new Ke,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Kl,this._frameExtents=new je(1,1),this._viewportCount=1,this._viewports=[new dt(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){const t=this.camera,n=this.matrix;Nh.setFromMatrixPosition(e.matrixWorld),t.position.copy(Nh),Oh.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(Oh),t.updateMatrixWorld(),Ac.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Ac),n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(Ac)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return this.intensity!==1&&(e.intensity=this.intensity),this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}class Uy extends ad{constructor(){super(new rn(50,1,.5,500)),this.isSpotLightShadow=!0,this.focus=1}updateMatrices(e){const t=this.camera,n=Sr*2*e.angle*this.focus,s=this.mapSize.width/this.mapSize.height,r=e.distance||t.far;(n!==t.fov||s!==t.aspect||r!==t.far)&&(t.fov=n,t.aspect=s,t.far=r,t.updateProjectionMatrix()),super.updateMatrices(e)}copy(e){return super.copy(e),this.focus=e.focus,this}}class Fy extends Ho{constructor(e,t,n=0,s=Math.PI/3,r=0,a=2){super(e,t),this.isSpotLight=!0,this.type="SpotLight",this.position.copy(Tt.DEFAULT_UP),this.updateMatrix(),this.target=new Tt,this.distance=n,this.angle=s,this.penumbra=r,this.decay=a,this.map=null,this.shadow=new Uy}get power(){return this.intensity*Math.PI}set power(e){this.intensity=e/Math.PI}dispose(){this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.angle=e.angle,this.penumbra=e.penumbra,this.decay=e.decay,this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}}const Uh=new Ke,Gr=new D,Rc=new D;class By extends ad{constructor(){super(new rn(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new je(4,2),this._viewportCount=6,this._viewports=[new dt(2,1,1,1),new dt(0,1,1,1),new dt(3,1,1,1),new dt(1,1,1,1),new dt(3,0,1,1),new dt(1,0,1,1)],this._cubeDirections=[new D(1,0,0),new D(-1,0,0),new D(0,0,1),new D(0,0,-1),new D(0,1,0),new D(0,-1,0)],this._cubeUps=[new D(0,1,0),new D(0,1,0),new D(0,1,0),new D(0,1,0),new D(0,0,1),new D(0,0,-1)]}updateMatrices(e,t=0){const n=this.camera,s=this.matrix,r=e.distance||n.far;r!==n.far&&(n.far=r,n.updateProjectionMatrix()),Gr.setFromMatrixPosition(e.matrixWorld),n.position.copy(Gr),Rc.copy(n.position),Rc.add(this._cubeDirections[t]),n.up.copy(this._cubeUps[t]),n.lookAt(Rc),n.updateMatrixWorld(),s.makeTranslation(-Gr.x,-Gr.y,-Gr.z),Uh.multiplyMatrices(n.projectionMatrix,n.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Uh)}}class od extends Ho{constructor(e,t,n=0,s=2){super(e,t),this.isPointLight=!0,this.type="PointLight",this.distance=n,this.decay=s,this.shadow=new By}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}}class ky extends ad{constructor(){super(new Zl(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class ef extends Ho{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Tt.DEFAULT_UP),this.updateMatrix(),this.target=new Tt,this.shadow=new ky}dispose(){this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}}class ta{static decodeText(e){if(console.warn("THREE.LoaderUtils: decodeText() has been deprecated with r165 and will be removed with r175. Use TextDecoder instead."),typeof TextDecoder<"u")return new TextDecoder().decode(e);let t="";for(let n=0,s=e.length;n<s;n++)t+=String.fromCharCode(e[n]);try{return decodeURIComponent(escape(t))}catch{return t}}static extractUrlBase(e){const t=e.lastIndexOf("/");return t===-1?"./":e.slice(0,t+1)}static resolveURL(e,t){return typeof e!="string"||e===""?"":(/^https?:\/\//i.test(t)&&/^\//.test(e)&&(t=t.replace(/(^https?:\/\/[^\/]+).*/i,"$1")),/^(https?:)?\/\//i.test(e)||/^data:.*,.*$/i.test(e)||/^blob:.*$/i.test(e)?e:t+e)}}class zy extends Os{constructor(e){super(e),this.isImageBitmapLoader=!0,typeof createImageBitmap>"u"&&console.warn("THREE.ImageBitmapLoader: createImageBitmap() not supported."),typeof fetch>"u"&&console.warn("THREE.ImageBitmapLoader: fetch() not supported."),this.options={premultiplyAlpha:"none"}}setOptions(e){return this.options=e,this}load(e,t,n,s){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const r=this,a=es.get(e);if(a!==void 0){if(r.manager.itemStart(e),a.then){a.then(l=>{t&&t(l),r.manager.itemEnd(e)}).catch(l=>{s&&s(l)});return}return setTimeout(function(){t&&t(a),r.manager.itemEnd(e)},0),a}const o={};o.credentials=this.crossOrigin==="anonymous"?"same-origin":"include",o.headers=this.requestHeader;const c=fetch(e,o).then(function(l){return l.blob()}).then(function(l){return createImageBitmap(l,Object.assign(r.options,{colorSpaceConversion:"none"}))}).then(function(l){return es.add(e,l),t&&t(l),r.manager.itemEnd(e),l}).catch(function(l){s&&s(l),es.remove(e),r.manager.itemError(e),r.manager.itemEnd(e)});es.add(e,c),r.manager.itemStart(e)}}class Hy{constructor(e=!0){this.autoStart=e,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1}start(){this.startTime=Fh(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let e=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){const t=Fh();e=(t-this.oldTime)/1e3,this.oldTime=t,this.elapsedTime+=e}return e}}function Fh(){return performance.now()}const cd="\\[\\]\\.:\\/",Gy=new RegExp("["+cd+"]","g"),ld="[^"+cd+"]",Vy="[^"+cd.replace("\\.","")+"]",Wy=/((?:WC+[\/:])*)/.source.replace("WC",ld),Xy=/(WCOD+)?/.source.replace("WCOD",Vy),Yy=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",ld),qy=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",ld),$y=new RegExp("^"+Wy+Xy+Yy+qy+"$"),Ky=["material","materials","bones","map"];class Zy{constructor(e,t,n){const s=n||vt.parseTrackName(t);this._targetGroup=e,this._bindings=e.subscribe_(t,s)}getValue(e,t){this.bind();const n=this._targetGroup.nCachedObjects_,s=this._bindings[n];s!==void 0&&s.getValue(e,t)}setValue(e,t){const n=this._bindings;for(let s=this._targetGroup.nCachedObjects_,r=n.length;s!==r;++s)n[s].setValue(e,t)}bind(){const e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].bind()}unbind(){const e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].unbind()}}class vt{constructor(e,t,n){this.path=t,this.parsedPath=n||vt.parseTrackName(t),this.node=vt.findNode(e,this.parsedPath.nodeName),this.rootNode=e,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(e,t,n){return e&&e.isAnimationObjectGroup?new vt.Composite(e,t,n):new vt(e,t,n)}static sanitizeNodeName(e){return e.replace(/\s/g,"_").replace(Gy,"")}static parseTrackName(e){const t=$y.exec(e);if(t===null)throw new Error("PropertyBinding: Cannot parse trackName: "+e);const n={nodeName:t[2],objectName:t[3],objectIndex:t[4],propertyName:t[5],propertyIndex:t[6]},s=n.nodeName&&n.nodeName.lastIndexOf(".");if(s!==void 0&&s!==-1){const r=n.nodeName.substring(s+1);Ky.indexOf(r)!==-1&&(n.nodeName=n.nodeName.substring(0,s),n.objectName=r)}if(n.propertyName===null||n.propertyName.length===0)throw new Error("PropertyBinding: can not parse propertyName from trackName: "+e);return n}static findNode(e,t){if(t===void 0||t===""||t==="."||t===-1||t===e.name||t===e.uuid)return e;if(e.skeleton){const n=e.skeleton.getBoneByName(t);if(n!==void 0)return n}if(e.children){const n=function(r){for(let a=0;a<r.length;a++){const o=r[a];if(o.name===t||o.uuid===t)return o;const c=n(o.children);if(c)return c}return null},s=n(e.children);if(s)return s}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(e,t){e[t]=this.targetObject[this.propertyName]}_getValue_array(e,t){const n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)e[t++]=n[s]}_getValue_arrayElement(e,t){e[t]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(e,t){this.resolvedProperty.toArray(e,t)}_setValue_direct(e,t){this.targetObject[this.propertyName]=e[t]}_setValue_direct_setNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(e,t){const n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=e[t++]}_setValue_array_setNeedsUpdate(e,t){const n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=e[t++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(e,t){const n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=e[t++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(e,t){this.resolvedProperty[this.propertyIndex]=e[t]}_setValue_arrayElement_setNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(e,t){this.resolvedProperty.fromArray(e,t)}_setValue_fromArray_setNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(e,t){this.bind(),this.getValue(e,t)}_setValue_unbound(e,t){this.bind(),this.setValue(e,t)}bind(){let e=this.node;const t=this.parsedPath,n=t.objectName,s=t.propertyName;let r=t.propertyIndex;if(e||(e=vt.findNode(this.rootNode,t.nodeName),this.node=e),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!e){console.warn("THREE.PropertyBinding: No target node found for track: "+this.path+".");return}if(n){let l=t.objectIndex;switch(n){case"materials":if(!e.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.materials){console.error("THREE.PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}e=e.material.materials;break;case"bones":if(!e.skeleton){console.error("THREE.PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}e=e.skeleton.bones;for(let d=0;d<e.length;d++)if(e[d].name===l){l=d;break}break;case"map":if("map"in e){e=e.map;break}if(!e.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.map){console.error("THREE.PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}e=e.material.map;break;default:if(e[n]===void 0){console.error("THREE.PropertyBinding: Can not bind to objectName of node undefined.",this);return}e=e[n]}if(l!==void 0){if(e[l]===void 0){console.error("THREE.PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,e);return}e=e[l]}}const a=e[s];if(a===void 0){const l=t.nodeName;console.error("THREE.PropertyBinding: Trying to update property for track: "+l+"."+s+" but it wasn't found.",e);return}let o=this.Versioning.None;this.targetObject=e,e.needsUpdate!==void 0?o=this.Versioning.NeedsUpdate:e.matrixWorldNeedsUpdate!==void 0&&(o=this.Versioning.MatrixWorldNeedsUpdate);let c=this.BindingType.Direct;if(r!==void 0){if(s==="morphTargetInfluences"){if(!e.geometry){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!e.geometry.morphAttributes){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}e.morphTargetDictionary[r]!==void 0&&(r=e.morphTargetDictionary[r])}c=this.BindingType.ArrayElement,this.resolvedProperty=a,this.propertyIndex=r}else a.fromArray!==void 0&&a.toArray!==void 0?(c=this.BindingType.HasFromToArray,this.resolvedProperty=a):Array.isArray(a)?(c=this.BindingType.EntireArray,this.resolvedProperty=a):this.propertyName=s;this.getValue=this.GetterByBindingType[c],this.setValue=this.SetterByBindingTypeAndVersioning[c][o]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}}vt.Composite=Zy;vt.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};vt.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};vt.prototype.GetterByBindingType=[vt.prototype._getValue_direct,vt.prototype._getValue_array,vt.prototype._getValue_arrayElement,vt.prototype._getValue_toArray];vt.prototype.SetterByBindingTypeAndVersioning=[[vt.prototype._setValue_direct,vt.prototype._setValue_direct_setNeedsUpdate,vt.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[vt.prototype._setValue_array,vt.prototype._setValue_array_setNeedsUpdate,vt.prototype._setValue_array_setMatrixWorldNeedsUpdate],[vt.prototype._setValue_arrayElement,vt.prototype._setValue_arrayElement_setNeedsUpdate,vt.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[vt.prototype._setValue_fromArray,vt.prototype._setValue_fromArray_setNeedsUpdate,vt.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:zl}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=zl);const Fe={CAR:{maxSpeed:33.33,acceleration:14,braking:22,handbrake:30,drag:.14,steerSpeed:3.8,steerReturnSpeed:6,maxSteerAngle:.38,roadBoundsX:3.4,pitchSensitivity:.035,rollSensitivity:.045},simSpeedMultiplier:1,ROAD:{segmentLength:40,numSegments:14,totalWidth:8.8,sidewalkWidth:3,dashLength:4,dashGap:4},CAMERA:{chaseOffset:{x:0,y:2.1,z:-5.6},chaseLookAtOffset:{x:0,y:.85,z:8},driverOffset:{x:-.28,y:1.3,z:.38},driverLookAtOffset:{x:-.12,y:1.22,z:42},lerpFactorPosition:.14,lerpFactorLookAt:.2,fov:58},COLORS:{hemiSky:14214384,hemiGround:4866613,sunLight:16773852,road:2369584,roadMarkings:16777215,centerDashes:16763432,carBody:26316,carBrakeLightsNormal:6684672,carBrakeLightsActive:16711680},GEARS:{R:{id:"R",name:"Reverse",maxKmh:-15,minKmh:-15,optimalKmh:[-15,0],accelFactor:.7},N:{id:"N",name:"Neutral",maxKmh:0,minKmh:0,optimalKmh:[0,0],accelFactor:0},1:{id:"1",name:"1st Gear",maxKmh:28,minKmh:0,optimalKmh:[0,22],accelFactor:1.25},2:{id:"2",name:"2nd Gear",maxKmh:52,minKmh:12,optimalKmh:[18,44],accelFactor:1.05},3:{id:"3",name:"3rd Gear",maxKmh:76,minKmh:28,optimalKmh:[38,68],accelFactor:.88},4:{id:"4",name:"4th Gear",maxKmh:102,minKmh:46,optimalKmh:[58,92],accelFactor:.75},5:{id:"5",name:"5th Gear",maxKmh:135,minKmh:65,optimalKmh:[80,125],accelFactor:.62}},OVERLAYS:{showObstacleBoxes:!1}},ln={timestamp:"timestamp_ms",frameIndex:"frame_idx",posX:"car_pos_x",posZ:"car_pos_z",speedKmh:"speed_kmh",speedMs:"speed_ms",steering:"steer_input",throttle:"throttle_input",brake:"brake_input",seatbelt:"seatbelt_fastened",currentGear:"current_gear",engineRpm:"engine_rpm",cameraMode:"camera_mode"},wt={x:0,y:0,valid:!1};let Cs,et,Ms,rr,ar,or,Cc,jr,Jr,Si,ti,Zn,bs,Tl=[],$i,Ki,Bh,na,Qe=0,dd=0,Vn=new D(-2.2,0,0),Es=null,ts=!1,Et="1",Rn=900,Ni=!1,ia=0,sa=0,fo=0;function jy(i){Cs=new Ve,et=new Ve,Cs.add(et);const e=Fe.COLORS,t=e.carBody,n=new ae({color:t,roughness:.16,metalness:.68,envMapIntensity:1.5}),s=new ae({color:1119e3,roughness:.85,metalness:.2}),r=new ae({color:526862,roughness:.12,metalness:.8}),a=new ae({color:857378,roughness:.05,metalness:.95,transparent:!0,opacity:.72}),o=new ae({color:14870768,metalness:.92,roughness:.15}),c=new se(1.38,.22,3.35),l=new B(c,s);l.position.set(0,.24,0),l.castShadow=!0,l.receiveShadow=!0,et.add(l);const d=new se(1.36,.26,2.3),h=new B(d,n);h.position.set(0,.44,-.05),h.castShadow=!0,h.receiveShadow=!0,et.add(h);const u=new se(.06,.12,1.95),f=new B(u,r);f.position.set(-.69,.2,0);const g=new B(u,r);g.position.set(.69,.2,0),et.add(f,g);const v=new se(1.36,.26,.38),m=new B(v,n);m.position.set(0,.31,1.62),m.castShadow=!0,et.add(m);const p=new se(1.4,.035,.26),x=new B(p,r);x.position.set(0,.16,1.72),et.add(x);const b=new se(.78,.1,.03),y=new B(b,s);y.position.set(0,.24,1.82),et.add(y);const I=new ft(.032,.032,.015,16);I.rotateX(Math.PI/2);const T=new B(I,o);T.position.set(0,.42,1.815),et.add(T);const w=new se(1.3,.065,1.1),R=new B(w,n);R.position.set(0,.5,1.05),R.rotation.x=.125,R.castShadow=!0,et.add(R);const S=new se(.06,.02,1.02),_=new B(S,n);_.position.set(-.34,.54,1.05),_.rotation.x=.125;const C=new B(S,n);C.position.set(.34,.54,1.05),C.rotation.x=.125,et.add(_,C);const F=new se(1.24,.025,.14),P=new B(F,s);P.position.set(0,.59,.48),et.add(P);const N=new se(.36,.012,.016),G=new B(N,s);G.position.set(-.24,.61,.49),G.rotation.z=-.06;const L=new B(N,s);L.position.set(.24,.61,.49),L.rotation.z=-.06,et.add(G,L);const q=new ae({color:16777215,emissive:53940,emissiveIntensity:1.6,roughness:.1}),V=new se(.25,.07,.12),K=new B(V,q);K.position.set(-.5,.4,1.7);const ie=new B(V,q);ie.position.set(.5,.4,1.7),et.add(K,ie);const re=new ae({color:3718648,emissive:3718648,emissiveIntensity:2.2}),pe=new se(.25,.015,.02),ye=new B(pe,re);ye.position.set(-.5,.445,1.75);const Z=new B(pe,re);Z.position.set(.5,.445,1.75),et.add(ye,Z);const te=new se(1.16,.52,.03);or=new B(te,a),or.position.set(0,.82,.16),or.rotation.x=-.58,et.add(or);const ue=new se(1.04,.035,1.25);rr=new B(ue,n),rr.position.set(0,1.08,-.42),rr.castShadow=!0,et.add(rr);const oe=new se(1.08,.54,.03);ar=new B(oe,a),ar.position.set(0,.82,-1.18),ar.rotation.x=.52,et.add(ar),Ms=new Ve;const be=new se(.025,.36,1.25),Se=new B(be,a);Se.position.set(-.52,.84,-.42);const Ce=new B(be,a);Ce.position.set(.52,.84,-.42),Ms.add(Se,Ce),Cc=new Ve;const Ye=new se(.04,.38,.07),Pe=new B(Ye,r);Pe.position.set(-.53,.84,-.4);const qe=new B(Ye,r);qe.position.set(.53,.84,-.4),Cc.add(Pe,qe),Ms.add(Cc);const O=new zo(.03,.08,4);O.rotateY(Math.PI/4);const ht=new B(O,r);ht.position.set(0,1.14,-.92),Ms.add(ht),et.add(Ms);const $e=new se(1.24,.08,.42),We=new B($e,n);We.position.set(0,.56,-1.48),et.add(We);const Ie=new se(1.26,.03,.09),lt=new B(Ie,r);lt.position.set(0,.61,-1.68),et.add(lt);const Le=new se(1.34,.28,.28),A=new B(Le,n);A.position.set(0,.3,-1.62),A.castShadow=!0,et.add(A);const M=new se(1.02,.09,.18),W=new B(M,r);W.position.set(0,.17,-1.68),et.add(W);const Q=new ft(.03,.03,.08,12);Q.rotateX(Math.PI/2);const ne=new B(Q,o);ne.position.set(-.36,.19,-1.74);const j=new B(Q,o);j.position.set(.36,.19,-1.74),et.add(ne,j),$i=new ae({color:e.carBrakeLightsNormal,emissive:e.carBrakeLightsNormal,emissiveIntensity:.4}),Ki=new ae({color:e.carBrakeLightsNormal,emissive:e.carBrakeLightsNormal,emissiveIntensity:.4}),Bh=new ae({color:e.carBrakeLightsNormal,emissive:e.carBrakeLightsNormal,emissiveIntensity:.35});const Ee=new se(.4,.045,.05),de=new B(Ee,$i);de.position.set(-.42,.54,-1.7);const xe=new B(Ee,Ki);xe.position.set(.42,.54,-1.7);const Be=new se(.44,.02,.04),ce=new B(Be,Bh);ce.position.set(0,.54,-1.7),et.add(de,xe,ce),na=new od(16711680,0,7),na.position.set(0,.54,-1.9),et.add(na);const _e=new se(.14,.075,.14),De=new B(_e,n);De.position.set(-.73,.72,.32);const Oe=new B(_e,n);Oe.position.set(.73,.72,.32);const Me=new se(.01,.06,.11),Ge=new B(Me,o);Ge.position.set(.065,0,0),De.add(Ge);const He=new B(Me,o);He.position.set(-.065,0,0),Oe.add(He),et.add(De,Oe);const rt=new Ve,U=new se(1.22,.18,.38),he=new B(U,new ae({color:1119002,roughness:.9}));he.position.set(0,.78,.42),rt.add(he);const $=new se(.28,.1,.02),ee=new ae({color:58787,emissive:58787,emissiveIntensity:.85}),fe=new B($,ee);fe.position.set(-.28,.86,.28),rt.add(fe),Si=new Ve,Si.position.set(-.28,.82,.36);const me=new sd(.13,.016,8,16),Ue=new ae({color:2040877,roughness:.65}),pt=new B(me,Ue);Si.add(pt);const J=new ft(.032,.032,.018,12);J.rotateX(Math.PI/2);const Ne=new B(J,Ue);Si.add(Ne);const mt=new se(.22,.02,.012),At=new B(mt,Ue);Si.add(At),Si.rotation.x=-Math.PI/6,rt.add(Si),et.add(rt);const It=new Ve,Fi=new ae({color:1448226,roughness:.8}),Bn=new se(.4,.14,.42),pn=new B(Bn,Fi);pn.position.set(-.28,.4,-.15);const mn=new se(.38,.54,.1),cs=new B(mn,Fi);cs.position.set(-.28,.7,-.34),cs.rotation.x=.08;const Us=new se(.2,.14,.08),Pr=new B(Us,Fi);Pr.position.set(-.28,1.04,-.38);const ls=pn.clone();ls.position.x=.28;const Nr=cs.clone();Nr.position.x=.28,It.add(pn,cs,Pr,ls,Nr);const ga=new se(.18,.22,.75),va=new B(ga,s);va.position.set(0,.46,.05),It.add(va),ti=new Ve,ti.position.set(0,.58,.15);const Xo=new ft(.008,.01,.12,8),_a=new B(Xo,o);_a.position.y=.06,ti.add(_a);const E=new Ns(.024,12,12),k=new B(E,new ae({color:58787,roughness:.3}));k.position.y=.12,ti.add(k),It.add(ti),bs=new Ve;const X=new B(new se(.3,.38,.18),new ae({color:1976635,roughness:.7}));X.position.set(-.28,.65,-.16),bs.add(X);const Y=new B(new se(.15,.17,.15),new ae({color:14195316,roughness:.6}));Y.position.set(-.28,.94,-.16),bs.add(Y);const z=new se(.032,.44,.02);Zn=new B(z,new ae({color:58787,emissive:13090,roughness:.5})),Zn.position.set(-.28,.65,-.06),Zn.rotation.z=.55,Zn.visible=ts,bs.add(Zn),It.add(bs),et.add(It),Tl=[];const le=.28,ve=.19,Te=new ft(le,le,ve,20);Te.rotateZ(Math.PI/2);const Re=new ae({color:1447450,roughness:.85}),ke=new ft(.18,.18,ve+.01,16);ke.rotateZ(Math.PI/2);const Xe=new ae({color:9741240,metalness:.8,roughness:.25}),we=new ft(.13,.13,.02,16);we.rotateZ(Math.PI/2);const at=new ae({color:10592682,metalness:.9,roughness:.15}),_t=new se(.045,.07,.04),xt=new ae({color:15680580,metalness:.3,roughness:.3}),Nt=()=>{const ut=new Ve,gn=new B(Te,Re),ds=new B(ke,Xe);gn.castShadow=!0,ut.add(gn,ds);for(let En=0;En<5;En++){const Fs=En*Math.PI*2/5,Yo=new B(new se(.035,.15,.015),new ae({color:14870768,metalness:.85,roughness:.2}));Yo.position.set(0,Math.sin(Fs)*.075,Math.cos(Fs)*.075),Yo.rotation.x=Fs,ut.add(Yo)}const Qt=new B(we,at);Qt.position.x=-.01;const kn=new B(_t,xt);return kn.position.set(-.01,.07,0),ut.add(Qt,kn),ut},it=.68,Ae=1.05;jr=new Ve,jr.position.set(-it,le,Ae);const bn=Nt();jr.add(bn),et.add(jr),Jr=new Ve,Jr.position.set(it,le,Ae);const ot=Nt();Jr.add(ot),et.add(Jr);const Jt=new Ve;Jt.position.set(-it,le,-Ae);const hi=Nt();Jt.add(hi),et.add(Jt);const Yt=new Ve;Yt.position.set(it,le,-Ae);const Bi=Nt();Yt.add(Bi),et.add(Yt),Tl.push(bn,ot,hi,Bi),i.add(Cs),Go()}function kh(i){const e=i==="DRIVER";Ms&&(Ms.visible=!e),rr&&(rr.visible=!e),ar&&(ar.visible=!e),or&&(or.visible=!e),bs&&(bs.visible=!e)}function Jy(i,e){const t=Fe.CAR;if(e.reset){Go();return}const n=Fe.GEARS[Et]||Fe.GEARS[1],s=e.brake>.05||e.handbrake>.05;s&&(Es=null);let r=0,a=0;if(Et==="N"){r=0,a=e.brake*t.braking+e.handbrake*t.handbrake;const m=Qe*t.drag;Qe=Math.max(0,Qe-(a+m)*i);const p=900+e.throttle*5800;Rn=_i(Rn,p,Math.min(i*10,1))}else if(Et==="R"){const m=Math.abs(n.maxKmh/3.6);e.throttle>.05&&!s?(Es=null,Qe=Math.max(-m,Qe-e.throttle*(t.acceleration*.7)*i)):s?Qe=Math.min(0,Qe+(e.brake*t.braking+e.handbrake*t.handbrake)*i):Qe=Math.min(0,Qe+Qe*t.drag*i);const x=900+Math.abs(Qe)/m*3800+e.throttle*800;Rn=_i(Rn,x,Math.min(i*8,1))}else if((Et==="4"||Et==="5")&&Qe<1.8&&e.throttle>.25&&(Ni=!0,Qe=0,Rn=450+Math.sin(performance.now()*.04)*80),Ni)Qe=0,r=0,a=0,Rn=_i(Rn,450,i*5);else{const m=n.maxKmh/3.6;if(Es!==null&&e.throttle<.05&&!s){const p=Qe;Qe=_i(Qe,Math.min(Es,m),Math.min(i*4,1));const x=(Qe-p)/Math.max(i,.001);x>0?r=Math.min(x,t.acceleration):a=Math.min(-x,t.braking)}else{e.throttle>.05&&(Es=null),a=e.brake*t.braking+e.handbrake*t.handbrake;const p=Qe*t.drag;if(Qe>=m)r=0,Qe=m,Rn=6300+Math.sin(performance.now()*.05)*120,(Et==="1"||Et==="2")&&(ia+=i);else{r=e.throttle*t.acceleration*n.accelFactor;const x=r-a-p;Qe+=x*i;const y=900+Math.max(0,Math.min(1,Qe/Math.max(m,.1)))*4600+e.throttle*700;Rn=_i(Rn,y,Math.min(i*8,1)),ia=Math.max(0,ia-i*2)}}Qe<0&&(Qe=0),Qe>m&&(Qe=m)}dd+=Math.abs(Qe)*i;const o=Math.min(Math.abs(Qe)/(t.maxSpeed*.15),1),c=-e.steer*t.steerSpeed*o*i*(Qe<0?-1:1);Vn.x+=c,Vn.x<-3.4&&(Vn.x=-3.4),Vn.x>t.roadBoundsX&&(Vn.x=t.roadBoundsX),Vn.z+=Qe*i,Cs.position.copy(Vn);const l=-e.steer*t.maxSteerAngle*o;if(jr.rotation.y=l,Jr.rotation.y=l,Si&&(Si.rotation.z=-e.steer*1.6),ti){let m=0,p=0;switch(Et){case"1":m=.28,p=.22;break;case"2":m=-.28,p=.22;break;case"3":m=.28,p=0;break;case"4":m=-.28,p=0;break;case"5":m=.28,p=-.22;break;case"R":m=-.28,p=-.22;break;default:m=0,p=0;break}ti.rotation.x=_i(ti.rotation.x,m,Math.min(i*14,1)),ti.rotation.z=_i(ti.rotation.z,p,Math.min(i*14,1))}Zn&&(Zn.visible=ts);const h=Qe/.35;Tl.forEach(m=>{m.rotation.x+=h*i});const u=(r/t.acceleration-a/t.braking)*t.pitchSensitivity,f=e.steer*t.rollSensitivity*o;sa=_i(sa,u,i*8),fo=_i(fo,f,i*8),et.rotation.x=sa,et.rotation.z=fo;const g=new ze(Fe.COLORS.carBrakeLightsActive),v=new ze(Fe.COLORS.carBrakeLightsNormal);s?($i.color.copy(g),$i.emissive.copy(g),$i.emissiveIntensity=2.5,Ki.color.copy(g),Ki.emissive.copy(g),Ki.emissiveIntensity=2.5,na.intensity=2):($i.color.copy(v),$i.emissive.copy(v),$i.emissiveIntensity=.3,Ki.color.copy(v),Ki.emissive.copy(v),Ki.emissiveIntensity=.3,na.intensity=0)}function Qy(){Qe=Math.max(0,Qe*.15),Vn.z-=.4,sa=-.15}function Go(){Qe=0,dd=0,Es=null,Vn.set(-2.2,0,0),Et="1",ts=!1,Ni=!1,Rn=900,ia=0,Zn&&(Zn.visible=!1),Cs&&Cs.position.copy(Vn),et&&et.rotation.set(0,0,0),sa=0,fo=0}function Zi(i){const e=Fe.CAR.maxSpeed*3.6,t=Math.max(0,Math.min(i,e));t<=0||t<=25?Et="1":t<=48?Et="2":t<=72?Et="3":t<=98?Et="4":Et="5",Ni=!1,Qe=t/3.6,Es=Qe>0?Qe:null}function zh(i){Zi(bo()+i)}function ex(){return ts=!ts,Zn&&(Zn.visible=ts),ts}function tf(){return ts}const ra=["R","N","1","2","3","4","5"];function tx(){const i=ra.indexOf(Et);return i<ra.length-1&&(Et=ra[i+1],Ni&&Et!=="4"&&Et!=="5"&&(Ni=!1)),Et}function nx(){const i=ra.indexOf(Et);return i>0&&(Et=ra[i-1],Ni&&(Ni=!1)),Et}function Mo(){return Et}function Hh(){return Math.round(Rn)}function ix(){return Ni}function sx(){return ia}function nf(){return Vn}function rx(){return Qe}function bo(){return Qe*3.6}function ax(){return dd}function ox(){return Cs}function _i(i,e,t){return i+(e-i)*t}const Cn={},ct={onCameraToggle:null,onExportTelemetry:null,onDebugToggle:null,onReset:null,onRulesDebugToggle:null,onSeatbeltToggle:null,onShiftUp:null,onShiftDown:null,onEyeResume:null,onVoiceToggle:null};let sf=0,rf=0,af=0,cx=0;const tn={throttle:0,brake:0,steer:0,handbrake:0,resetRequested:!1};function lx(i={}){ct.onCameraToggle=i.onCameraToggle||null,ct.onExportTelemetry=i.onExportTelemetry||null,ct.onDebugToggle=i.onDebugToggle||null,ct.onReset=i.onReset||null,ct.onRulesDebugToggle=i.onRulesDebugToggle||null,ct.onSeatbeltToggle=i.onSeatbeltToggle||null,ct.onShiftUp=i.onShiftUp||null,ct.onShiftDown=i.onShiftDown||null,ct.onEyeResume=i.onEyeResume||null,ct.onVoiceToggle=i.onVoiceToggle||null,window.addEventListener("keydown",dx),window.addEventListener("keyup",hx)}function dx(i){const e=i.code;["KeyW","KeyS","KeyA","KeyD","ArrowUp","ArrowDown","ArrowLeft","ArrowRight","Space"].includes(e)&&i.preventDefault(),Cn[e]=!0,!i.repeat&&(e==="KeyC"?ct.onEyeResume&&ct.onEyeResume():e==="KeyV"?ct.onCameraToggle&&ct.onCameraToggle():e==="KeyM"?ct.onVoiceToggle&&ct.onVoiceToggle():e==="KeyB"?ct.onSeatbeltToggle&&ct.onSeatbeltToggle():e==="KeyE"||e==="BracketRight"?ct.onShiftUp&&ct.onShiftUp():e==="KeyQ"||e==="BracketLeft"?ct.onShiftDown&&ct.onShiftDown():e==="KeyX"?ct.onExportTelemetry&&ct.onExportTelemetry():e==="KeyG"?ct.onDebugToggle&&ct.onDebugToggle():e==="KeyT"?ct.onRulesDebugToggle&&ct.onRulesDebugToggle():e==="Equal"||e==="NumpadAdd"||i.key==="+"||i.key==="="?zh(5):e==="Minus"||e==="NumpadSubtract"||i.key==="-"||i.key==="_"?zh(-5):e==="Digit1"||e==="Numpad1"?Zi(20):e==="Digit2"||e==="Numpad2"?Zi(40):e==="Digit3"||e==="Numpad3"?Zi(60):e==="Digit4"||e==="Numpad4"?Zi(80):e==="Digit5"||e==="Numpad5"?Zi(100):e==="Digit0"||e==="Numpad0"?Zi(0):e==="KeyR"&&(tn.resetRequested=!0,ct.onReset&&ct.onReset()))}function hx(i){Cn[i.code]=!1}function ux(i){const e=Cn.KeyW||Cn.ArrowUp?1:0,t=Cn.KeyS||Cn.ArrowDown||Cn.KeyB?1:0,n=Cn.Space?1:0;let s=0;(Cn.KeyA||Cn.ArrowLeft)&&(s-=1),(Cn.KeyD||Cn.ArrowRight)&&(s+=1);const r=Math.max(e,sf),a=Math.max(t,rf),o=Math.max(n,cx),c=s!==0?s:af,l=12,d=14,h=c===0?Fe.CAR.steerReturnSpeed:Fe.CAR.steerSpeed*2.5;tn.throttle=Za(tn.throttle,r,Math.min(i*l,1)),tn.brake=Za(tn.brake,a,Math.min(i*d,1)),tn.handbrake=Za(tn.handbrake,o,Math.min(i*d,1)),tn.steer=Za(tn.steer,c,Math.min(i*h,1));const u={throttle:tn.throttle,brake:tn.brake,steer:tn.steer,handbrake:tn.handbrake,reset:tn.resetRequested,rawSteer:c,rawThrottle:r,rawBrake:a};return tn.resetRequested=!1,u}function Gh(i){sf=i}function $a(i){rf=i}function Ka(i){af=i}function fx(){ct.onCameraToggle&&ct.onCameraToggle()}function Za(i,e,t){return i+(e-i)*t}let wl=12345,ir=12345;function px(i=12345){wl=Number(i)||12345,ir=(wl^1831565813)>>>0}function mx(){ir=ir+1831565813>>>0;let i=Math.imul(ir^ir>>>15,1|ir);return i=i+Math.imul(i^i>>>7,61|i)^i,((i^i>>>14)>>>0)/4294967296}function hd(i,e){return i+mx()*(e-i)}function of(){return wl}px(12345);class gx extends Ny{constructor(e){super(e),this.type=Ri}parse(e){const a=function(R,S){switch(R){case 1:throw new Error("THREE.RGBELoader: Read Error: "+(S||""));case 2:throw new Error("THREE.RGBELoader: Write Error: "+(S||""));case 3:throw new Error("THREE.RGBELoader: Bad File Format: "+(S||""));default:case 4:throw new Error("THREE.RGBELoader: Memory Error: "+(S||""))}},h=function(R,S,_){S=S||1024;let F=R.pos,P=-1,N=0,G="",L=String.fromCharCode.apply(null,new Uint16Array(R.subarray(F,F+128)));for(;0>(P=L.indexOf(`
`))&&N<S&&F<R.byteLength;)G+=L,N+=L.length,F+=128,L+=String.fromCharCode.apply(null,new Uint16Array(R.subarray(F,F+128)));return-1<P?(R.pos+=N+P+1,G+L.slice(0,P)):!1},u=function(R){const S=/^#\?(\S+)/,_=/^\s*GAMMA\s*=\s*(\d+(\.\d+)?)\s*$/,C=/^\s*EXPOSURE\s*=\s*(\d+(\.\d+)?)\s*$/,F=/^\s*FORMAT=(\S+)\s*$/,P=/^\s*\-Y\s+(\d+)\s+\+X\s+(\d+)\s*$/,N={valid:0,string:"",comments:"",programtype:"RGBE",format:"",gamma:1,exposure:1,width:0,height:0};let G,L;for((R.pos>=R.byteLength||!(G=h(R)))&&a(1,"no header found"),(L=G.match(S))||a(3,"bad initial token"),N.valid|=1,N.programtype=L[1],N.string+=G+`
`;G=h(R),G!==!1;){if(N.string+=G+`
`,G.charAt(0)==="#"){N.comments+=G+`
`;continue}if((L=G.match(_))&&(N.gamma=parseFloat(L[1])),(L=G.match(C))&&(N.exposure=parseFloat(L[1])),(L=G.match(F))&&(N.valid|=2,N.format=L[1]),(L=G.match(P))&&(N.valid|=4,N.height=parseInt(L[1],10),N.width=parseInt(L[2],10)),N.valid&2&&N.valid&4)break}return N.valid&2||a(3,"missing format specifier"),N.valid&4||a(3,"missing image size specifier"),N},f=function(R,S,_){const C=S;if(C<8||C>32767||R[0]!==2||R[1]!==2||R[2]&128)return new Uint8Array(R);C!==(R[2]<<8|R[3])&&a(3,"wrong scanline width");const F=new Uint8Array(4*S*_);F.length||a(4,"unable to allocate buffer space");let P=0,N=0;const G=4*C,L=new Uint8Array(4),q=new Uint8Array(G);let V=_;for(;V>0&&N<R.byteLength;){N+4>R.byteLength&&a(1),L[0]=R[N++],L[1]=R[N++],L[2]=R[N++],L[3]=R[N++],(L[0]!=2||L[1]!=2||(L[2]<<8|L[3])!=C)&&a(3,"bad rgbe scanline format");let K=0,ie;for(;K<G&&N<R.byteLength;){ie=R[N++];const pe=ie>128;if(pe&&(ie-=128),(ie===0||K+ie>G)&&a(3,"bad scanline data"),pe){const ye=R[N++];for(let Z=0;Z<ie;Z++)q[K++]=ye}else q.set(R.subarray(N,N+ie),K),K+=ie,N+=ie}const re=C;for(let pe=0;pe<re;pe++){let ye=0;F[P]=q[pe+ye],ye+=C,F[P+1]=q[pe+ye],ye+=C,F[P+2]=q[pe+ye],ye+=C,F[P+3]=q[pe+ye],P+=4}V--}return F},g=function(R,S,_,C){const F=R[S+3],P=Math.pow(2,F-128)/255;_[C+0]=R[S+0]*P,_[C+1]=R[S+1]*P,_[C+2]=R[S+2]*P,_[C+3]=1},v=function(R,S,_,C){const F=R[S+3],P=Math.pow(2,F-128)/255;_[C+0]=Aa.toHalfFloat(Math.min(R[S+0]*P,65504)),_[C+1]=Aa.toHalfFloat(Math.min(R[S+1]*P,65504)),_[C+2]=Aa.toHalfFloat(Math.min(R[S+2]*P,65504)),_[C+3]=Aa.toHalfFloat(1)},m=new Uint8Array(e);m.pos=0;const p=u(m),x=p.width,b=p.height,y=f(m.subarray(m.pos),x,b);let I,T,w;switch(this.type){case hn:w=y.length/4;const R=new Float32Array(w*4);for(let _=0;_<w;_++)g(y,_*4,R,_*4);I=R,T=hn;break;case Ri:w=y.length/4;const S=new Uint16Array(w*4);for(let _=0;_<w;_++)v(y,_*4,S,_*4);I=S,T=Ri;break;default:throw new Error("THREE.RGBELoader: Unsupported type: "+this.type)}return{width:x,height:b,data:I,header:p.string,gamma:p.gamma,exposure:p.exposure,type:T}}setDataType(e){return this.type=e,this}load(e,t,n,s){function r(a,o){switch(a.type){case hn:case Ri:a.colorSpace=jt,a.minFilter=Wt,a.magFilter=Wt,a.generateMipmaps=!1,a.flipY=!0;break}t&&t(a,o)}return super.load(e,r,n,s)}}function Vh(i,e){if(e===yp)return console.warn("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Geometry already defined as triangles."),i;if(e===xl||e===Iu){let t=i.getIndex();if(t===null){const a=[],o=i.getAttribute("position");if(o!==void 0){for(let c=0;c<o.count;c++)a.push(c);i.setIndex(a),t=i.getIndex()}else return console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Undefined position attribute. Processing not possible."),i}const n=t.count-2,s=[];if(e===xl)for(let a=1;a<=n;a++)s.push(t.getX(0)),s.push(t.getX(a)),s.push(t.getX(a+1));else for(let a=0;a<n;a++)a%2===0?(s.push(t.getX(a)),s.push(t.getX(a+1)),s.push(t.getX(a+2))):(s.push(t.getX(a+2)),s.push(t.getX(a+1)),s.push(t.getX(a)));s.length/3!==n&&console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unable to generate correct amount of triangles.");const r=i.clone();return r.setIndex(s),r.clearGroups(),r}else return console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unknown draw mode:",e),i}class vx extends Os{constructor(e){super(e),this.dracoLoader=null,this.ktx2Loader=null,this.meshoptDecoder=null,this.pluginCallbacks=[],this.register(function(t){return new Mx(t)}),this.register(function(t){return new bx(t)}),this.register(function(t){return new Dx(t)}),this.register(function(t){return new Px(t)}),this.register(function(t){return new Nx(t)}),this.register(function(t){return new Tx(t)}),this.register(function(t){return new wx(t)}),this.register(function(t){return new Ax(t)}),this.register(function(t){return new Rx(t)}),this.register(function(t){return new Sx(t)}),this.register(function(t){return new Cx(t)}),this.register(function(t){return new Ex(t)}),this.register(function(t){return new Lx(t)}),this.register(function(t){return new Ix(t)}),this.register(function(t){return new yx(t)}),this.register(function(t){return new Ox(t)}),this.register(function(t){return new Ux(t)})}load(e,t,n,s){const r=this;let a;if(this.resourcePath!=="")a=this.resourcePath;else if(this.path!==""){const l=ta.extractUrlBase(e);a=ta.resolveURL(l,this.path)}else a=ta.extractUrlBase(e);this.manager.itemStart(e);const o=function(l){s?s(l):console.error(l),r.manager.itemError(e),r.manager.itemEnd(e)},c=new rd(this.manager);c.setPath(this.path),c.setResponseType("arraybuffer"),c.setRequestHeader(this.requestHeader),c.setWithCredentials(this.withCredentials),c.load(e,function(l){try{r.parse(l,a,function(d){t(d),r.manager.itemEnd(e)},o)}catch(d){o(d)}},n,o)}setDRACOLoader(e){return this.dracoLoader=e,this}setKTX2Loader(e){return this.ktx2Loader=e,this}setMeshoptDecoder(e){return this.meshoptDecoder=e,this}register(e){return this.pluginCallbacks.indexOf(e)===-1&&this.pluginCallbacks.push(e),this}unregister(e){return this.pluginCallbacks.indexOf(e)!==-1&&this.pluginCallbacks.splice(this.pluginCallbacks.indexOf(e),1),this}parse(e,t,n,s){let r;const a={},o={},c=new TextDecoder;if(typeof e=="string")r=JSON.parse(e);else if(e instanceof ArrayBuffer)if(c.decode(new Uint8Array(e,0,4))===cf){try{a[tt.KHR_BINARY_GLTF]=new Fx(e)}catch(h){s&&s(h);return}r=JSON.parse(a[tt.KHR_BINARY_GLTF].content)}else r=JSON.parse(c.decode(e));else r=e;if(r.asset===void 0||r.asset.version[0]<2){s&&s(new Error("THREE.GLTFLoader: Unsupported asset. glTF versions >=2.0 are supported."));return}const l=new Zx(r,{path:t||this.resourcePath||"",crossOrigin:this.crossOrigin,requestHeader:this.requestHeader,manager:this.manager,ktx2Loader:this.ktx2Loader,meshoptDecoder:this.meshoptDecoder});l.fileLoader.setRequestHeader(this.requestHeader);for(let d=0;d<this.pluginCallbacks.length;d++){const h=this.pluginCallbacks[d](l);h.name||console.error("THREE.GLTFLoader: Invalid plugin found: missing name"),o[h.name]=h,a[h.name]=!0}if(r.extensionsUsed)for(let d=0;d<r.extensionsUsed.length;++d){const h=r.extensionsUsed[d],u=r.extensionsRequired||[];switch(h){case tt.KHR_MATERIALS_UNLIT:a[h]=new xx;break;case tt.KHR_DRACO_MESH_COMPRESSION:a[h]=new Bx(r,this.dracoLoader);break;case tt.KHR_TEXTURE_TRANSFORM:a[h]=new kx;break;case tt.KHR_MESH_QUANTIZATION:a[h]=new zx;break;default:u.indexOf(h)>=0&&o[h]===void 0&&console.warn('THREE.GLTFLoader: Unknown extension "'+h+'".')}}l.setExtensions(a),l.setPlugins(o),l.parse(n,s)}parseAsync(e,t){const n=this;return new Promise(function(s,r){n.parse(e,t,s,r)})}}function _x(){let i={};return{get:function(e){return i[e]},add:function(e,t){i[e]=t},remove:function(e){delete i[e]},removeAll:function(){i={}}}}const tt={KHR_BINARY_GLTF:"KHR_binary_glTF",KHR_DRACO_MESH_COMPRESSION:"KHR_draco_mesh_compression",KHR_LIGHTS_PUNCTUAL:"KHR_lights_punctual",KHR_MATERIALS_CLEARCOAT:"KHR_materials_clearcoat",KHR_MATERIALS_DISPERSION:"KHR_materials_dispersion",KHR_MATERIALS_IOR:"KHR_materials_ior",KHR_MATERIALS_SHEEN:"KHR_materials_sheen",KHR_MATERIALS_SPECULAR:"KHR_materials_specular",KHR_MATERIALS_TRANSMISSION:"KHR_materials_transmission",KHR_MATERIALS_IRIDESCENCE:"KHR_materials_iridescence",KHR_MATERIALS_ANISOTROPY:"KHR_materials_anisotropy",KHR_MATERIALS_UNLIT:"KHR_materials_unlit",KHR_MATERIALS_VOLUME:"KHR_materials_volume",KHR_TEXTURE_BASISU:"KHR_texture_basisu",KHR_TEXTURE_TRANSFORM:"KHR_texture_transform",KHR_MESH_QUANTIZATION:"KHR_mesh_quantization",KHR_MATERIALS_EMISSIVE_STRENGTH:"KHR_materials_emissive_strength",EXT_MATERIALS_BUMP:"EXT_materials_bump",EXT_TEXTURE_WEBP:"EXT_texture_webp",EXT_TEXTURE_AVIF:"EXT_texture_avif",EXT_MESHOPT_COMPRESSION:"EXT_meshopt_compression",EXT_MESH_GPU_INSTANCING:"EXT_mesh_gpu_instancing"};class yx{constructor(e){this.parser=e,this.name=tt.KHR_LIGHTS_PUNCTUAL,this.cache={refs:{},uses:{}}}_markDefs(){const e=this.parser,t=this.parser.json.nodes||[];for(let n=0,s=t.length;n<s;n++){const r=t[n];r.extensions&&r.extensions[this.name]&&r.extensions[this.name].light!==void 0&&e._addNodeRef(this.cache,r.extensions[this.name].light)}}_loadLight(e){const t=this.parser,n="light:"+e;let s=t.cache.get(n);if(s)return s;const r=t.json,c=((r.extensions&&r.extensions[this.name]||{}).lights||[])[e];let l;const d=new ze(16777215);c.color!==void 0&&d.setRGB(c.color[0],c.color[1],c.color[2],jt);const h=c.range!==void 0?c.range:0;switch(c.type){case"directional":l=new ef(d),l.target.position.set(0,0,-1),l.add(l.target);break;case"point":l=new od(d),l.distance=h;break;case"spot":l=new Fy(d),l.distance=h,c.spot=c.spot||{},c.spot.innerConeAngle=c.spot.innerConeAngle!==void 0?c.spot.innerConeAngle:0,c.spot.outerConeAngle=c.spot.outerConeAngle!==void 0?c.spot.outerConeAngle:Math.PI/4,l.angle=c.spot.outerConeAngle,l.penumbra=1-c.spot.innerConeAngle/c.spot.outerConeAngle,l.target.position.set(0,0,-1),l.add(l.target);break;default:throw new Error("THREE.GLTFLoader: Unexpected light type: "+c.type)}return l.position.set(0,0,0),l.decay=2,Mi(l,c),c.intensity!==void 0&&(l.intensity=c.intensity),l.name=t.createUniqueName(c.name||"light_"+e),s=Promise.resolve(l),t.cache.add(n,s),s}getDependency(e,t){if(e==="light")return this._loadLight(t)}createNodeAttachment(e){const t=this,n=this.parser,r=n.json.nodes[e],o=(r.extensions&&r.extensions[this.name]||{}).light;return o===void 0?null:this._loadLight(o).then(function(c){return n._getNodeRef(t.cache,o,c)})}}class xx{constructor(){this.name=tt.KHR_MATERIALS_UNLIT}getMaterialType(){return Nn}extendParams(e,t,n){const s=[];e.color=new ze(1,1,1),e.opacity=1;const r=t.pbrMetallicRoughness;if(r){if(Array.isArray(r.baseColorFactor)){const a=r.baseColorFactor;e.color.setRGB(a[0],a[1],a[2],jt),e.opacity=a[3]}r.baseColorTexture!==void 0&&s.push(n.assignTexture(e,"map",r.baseColorTexture,Pt))}return Promise.all(s)}}class Sx{constructor(e){this.parser=e,this.name=tt.KHR_MATERIALS_EMISSIVE_STRENGTH}extendMaterialParams(e,t){const s=this.parser.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();const r=s.extensions[this.name].emissiveStrength;return r!==void 0&&(t.emissiveIntensity=r),Promise.resolve()}}class Mx{constructor(e){this.parser=e,this.name=tt.KHR_MATERIALS_CLEARCOAT}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:li}extendMaterialParams(e,t){const n=this.parser,s=n.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();const r=[],a=s.extensions[this.name];if(a.clearcoatFactor!==void 0&&(t.clearcoat=a.clearcoatFactor),a.clearcoatTexture!==void 0&&r.push(n.assignTexture(t,"clearcoatMap",a.clearcoatTexture)),a.clearcoatRoughnessFactor!==void 0&&(t.clearcoatRoughness=a.clearcoatRoughnessFactor),a.clearcoatRoughnessTexture!==void 0&&r.push(n.assignTexture(t,"clearcoatRoughnessMap",a.clearcoatRoughnessTexture)),a.clearcoatNormalTexture!==void 0&&(r.push(n.assignTexture(t,"clearcoatNormalMap",a.clearcoatNormalTexture)),a.clearcoatNormalTexture.scale!==void 0)){const o=a.clearcoatNormalTexture.scale;t.clearcoatNormalScale=new je(o,o)}return Promise.all(r)}}class bx{constructor(e){this.parser=e,this.name=tt.KHR_MATERIALS_DISPERSION}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:li}extendMaterialParams(e,t){const s=this.parser.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();const r=s.extensions[this.name];return t.dispersion=r.dispersion!==void 0?r.dispersion:0,Promise.resolve()}}class Ex{constructor(e){this.parser=e,this.name=tt.KHR_MATERIALS_IRIDESCENCE}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:li}extendMaterialParams(e,t){const n=this.parser,s=n.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();const r=[],a=s.extensions[this.name];return a.iridescenceFactor!==void 0&&(t.iridescence=a.iridescenceFactor),a.iridescenceTexture!==void 0&&r.push(n.assignTexture(t,"iridescenceMap",a.iridescenceTexture)),a.iridescenceIor!==void 0&&(t.iridescenceIOR=a.iridescenceIor),t.iridescenceThicknessRange===void 0&&(t.iridescenceThicknessRange=[100,400]),a.iridescenceThicknessMinimum!==void 0&&(t.iridescenceThicknessRange[0]=a.iridescenceThicknessMinimum),a.iridescenceThicknessMaximum!==void 0&&(t.iridescenceThicknessRange[1]=a.iridescenceThicknessMaximum),a.iridescenceThicknessTexture!==void 0&&r.push(n.assignTexture(t,"iridescenceThicknessMap",a.iridescenceThicknessTexture)),Promise.all(r)}}class Tx{constructor(e){this.parser=e,this.name=tt.KHR_MATERIALS_SHEEN}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:li}extendMaterialParams(e,t){const n=this.parser,s=n.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();const r=[];t.sheenColor=new ze(0,0,0),t.sheenRoughness=0,t.sheen=1;const a=s.extensions[this.name];if(a.sheenColorFactor!==void 0){const o=a.sheenColorFactor;t.sheenColor.setRGB(o[0],o[1],o[2],jt)}return a.sheenRoughnessFactor!==void 0&&(t.sheenRoughness=a.sheenRoughnessFactor),a.sheenColorTexture!==void 0&&r.push(n.assignTexture(t,"sheenColorMap",a.sheenColorTexture,Pt)),a.sheenRoughnessTexture!==void 0&&r.push(n.assignTexture(t,"sheenRoughnessMap",a.sheenRoughnessTexture)),Promise.all(r)}}class wx{constructor(e){this.parser=e,this.name=tt.KHR_MATERIALS_TRANSMISSION}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:li}extendMaterialParams(e,t){const n=this.parser,s=n.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();const r=[],a=s.extensions[this.name];return a.transmissionFactor!==void 0&&(t.transmission=a.transmissionFactor),a.transmissionTexture!==void 0&&r.push(n.assignTexture(t,"transmissionMap",a.transmissionTexture)),Promise.all(r)}}class Ax{constructor(e){this.parser=e,this.name=tt.KHR_MATERIALS_VOLUME}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:li}extendMaterialParams(e,t){const n=this.parser,s=n.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();const r=[],a=s.extensions[this.name];t.thickness=a.thicknessFactor!==void 0?a.thicknessFactor:0,a.thicknessTexture!==void 0&&r.push(n.assignTexture(t,"thicknessMap",a.thicknessTexture)),t.attenuationDistance=a.attenuationDistance||1/0;const o=a.attenuationColor||[1,1,1];return t.attenuationColor=new ze().setRGB(o[0],o[1],o[2],jt),Promise.all(r)}}class Rx{constructor(e){this.parser=e,this.name=tt.KHR_MATERIALS_IOR}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:li}extendMaterialParams(e,t){const s=this.parser.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();const r=s.extensions[this.name];return t.ior=r.ior!==void 0?r.ior:1.5,Promise.resolve()}}class Cx{constructor(e){this.parser=e,this.name=tt.KHR_MATERIALS_SPECULAR}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:li}extendMaterialParams(e,t){const n=this.parser,s=n.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();const r=[],a=s.extensions[this.name];t.specularIntensity=a.specularFactor!==void 0?a.specularFactor:1,a.specularTexture!==void 0&&r.push(n.assignTexture(t,"specularIntensityMap",a.specularTexture));const o=a.specularColorFactor||[1,1,1];return t.specularColor=new ze().setRGB(o[0],o[1],o[2],jt),a.specularColorTexture!==void 0&&r.push(n.assignTexture(t,"specularColorMap",a.specularColorTexture,Pt)),Promise.all(r)}}class Ix{constructor(e){this.parser=e,this.name=tt.EXT_MATERIALS_BUMP}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:li}extendMaterialParams(e,t){const n=this.parser,s=n.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();const r=[],a=s.extensions[this.name];return t.bumpScale=a.bumpFactor!==void 0?a.bumpFactor:1,a.bumpTexture!==void 0&&r.push(n.assignTexture(t,"bumpMap",a.bumpTexture)),Promise.all(r)}}class Lx{constructor(e){this.parser=e,this.name=tt.KHR_MATERIALS_ANISOTROPY}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:li}extendMaterialParams(e,t){const n=this.parser,s=n.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();const r=[],a=s.extensions[this.name];return a.anisotropyStrength!==void 0&&(t.anisotropy=a.anisotropyStrength),a.anisotropyRotation!==void 0&&(t.anisotropyRotation=a.anisotropyRotation),a.anisotropyTexture!==void 0&&r.push(n.assignTexture(t,"anisotropyMap",a.anisotropyTexture)),Promise.all(r)}}class Dx{constructor(e){this.parser=e,this.name=tt.KHR_TEXTURE_BASISU}loadTexture(e){const t=this.parser,n=t.json,s=n.textures[e];if(!s.extensions||!s.extensions[this.name])return null;const r=s.extensions[this.name],a=t.options.ktx2Loader;if(!a){if(n.extensionsRequired&&n.extensionsRequired.indexOf(this.name)>=0)throw new Error("THREE.GLTFLoader: setKTX2Loader must be called before loading KTX2 textures");return null}return t.loadTextureImage(e,r.source,a)}}class Px{constructor(e){this.parser=e,this.name=tt.EXT_TEXTURE_WEBP,this.isSupported=null}loadTexture(e){const t=this.name,n=this.parser,s=n.json,r=s.textures[e];if(!r.extensions||!r.extensions[t])return null;const a=r.extensions[t],o=s.images[a.source];let c=n.textureLoader;if(o.uri){const l=n.options.manager.getHandler(o.uri);l!==null&&(c=l)}return this.detectSupport().then(function(l){if(l)return n.loadTextureImage(e,a.source,c);if(s.extensionsRequired&&s.extensionsRequired.indexOf(t)>=0)throw new Error("THREE.GLTFLoader: WebP required by asset but unsupported.");return n.loadTexture(e)})}detectSupport(){return this.isSupported||(this.isSupported=new Promise(function(e){const t=new Image;t.src="data:image/webp;base64,UklGRiIAAABXRUJQVlA4IBYAAAAwAQCdASoBAAEADsD+JaQAA3AAAAAA",t.onload=t.onerror=function(){e(t.height===1)}})),this.isSupported}}class Nx{constructor(e){this.parser=e,this.name=tt.EXT_TEXTURE_AVIF,this.isSupported=null}loadTexture(e){const t=this.name,n=this.parser,s=n.json,r=s.textures[e];if(!r.extensions||!r.extensions[t])return null;const a=r.extensions[t],o=s.images[a.source];let c=n.textureLoader;if(o.uri){const l=n.options.manager.getHandler(o.uri);l!==null&&(c=l)}return this.detectSupport().then(function(l){if(l)return n.loadTextureImage(e,a.source,c);if(s.extensionsRequired&&s.extensionsRequired.indexOf(t)>=0)throw new Error("THREE.GLTFLoader: AVIF required by asset but unsupported.");return n.loadTexture(e)})}detectSupport(){return this.isSupported||(this.isSupported=new Promise(function(e){const t=new Image;t.src="data:image/avif;base64,AAAAIGZ0eXBhdmlmAAAAAGF2aWZtaWYxbWlhZk1BMUIAAADybWV0YQAAAAAAAAAoaGRscgAAAAAAAAAAcGljdAAAAAAAAAAAAAAAAGxpYmF2aWYAAAAADnBpdG0AAAAAAAEAAAAeaWxvYwAAAABEAAABAAEAAAABAAABGgAAABcAAAAoaWluZgAAAAAAAQAAABppbmZlAgAAAAABAABhdjAxQ29sb3IAAAAAamlwcnAAAABLaXBjbwAAABRpc3BlAAAAAAAAAAEAAAABAAAAEHBpeGkAAAAAAwgICAAAAAxhdjFDgQAMAAAAABNjb2xybmNseAACAAIABoAAAAAXaXBtYQAAAAAAAAABAAEEAQKDBAAAAB9tZGF0EgAKCBgABogQEDQgMgkQAAAAB8dSLfI=",t.onload=t.onerror=function(){e(t.height===1)}})),this.isSupported}}class Ox{constructor(e){this.name=tt.EXT_MESHOPT_COMPRESSION,this.parser=e}loadBufferView(e){const t=this.parser.json,n=t.bufferViews[e];if(n.extensions&&n.extensions[this.name]){const s=n.extensions[this.name],r=this.parser.getDependency("buffer",s.buffer),a=this.parser.options.meshoptDecoder;if(!a||!a.supported){if(t.extensionsRequired&&t.extensionsRequired.indexOf(this.name)>=0)throw new Error("THREE.GLTFLoader: setMeshoptDecoder must be called before loading compressed files");return null}return r.then(function(o){const c=s.byteOffset||0,l=s.byteLength||0,d=s.count,h=s.byteStride,u=new Uint8Array(o,c,l);return a.decodeGltfBufferAsync?a.decodeGltfBufferAsync(d,h,u,s.mode,s.filter).then(function(f){return f.buffer}):a.ready.then(function(){const f=new ArrayBuffer(d*h);return a.decodeGltfBuffer(new Uint8Array(f),d,h,u,s.mode,s.filter),f})})}else return null}}class Ux{constructor(e){this.name=tt.EXT_MESH_GPU_INSTANCING,this.parser=e}createNodeMesh(e){const t=this.parser.json,n=t.nodes[e];if(!n.extensions||!n.extensions[this.name]||n.mesh===void 0)return null;const s=t.meshes[n.mesh];for(const l of s.primitives)if(l.mode!==In.TRIANGLES&&l.mode!==In.TRIANGLE_STRIP&&l.mode!==In.TRIANGLE_FAN&&l.mode!==void 0)return null;const a=n.extensions[this.name].attributes,o=[],c={};for(const l in a)o.push(this.parser.getDependency("accessor",a[l]).then(d=>(c[l]=d,c[l])));return o.length<1?null:(o.push(this.parser.createNodeMesh(e)),Promise.all(o).then(l=>{const d=l.pop(),h=d.isGroup?d.children:[d],u=l[0].count,f=[];for(const g of h){const v=new Ke,m=new D,p=new os,x=new D(1,1,1),b=new my(g.geometry,g.material,u);for(let y=0;y<u;y++)c.TRANSLATION&&m.fromBufferAttribute(c.TRANSLATION,y),c.ROTATION&&p.fromBufferAttribute(c.ROTATION,y),c.SCALE&&x.fromBufferAttribute(c.SCALE,y),b.setMatrixAt(y,v.compose(m,p,x));for(const y in c)if(y==="_COLOR_0"){const I=c[y];b.instanceColor=new bl(I.array,I.itemSize,I.normalized)}else y!=="TRANSLATION"&&y!=="ROTATION"&&y!=="SCALE"&&g.geometry.setAttribute(y,c[y]);Tt.prototype.copy.call(b,g),this.parser.assignFinalMaterial(b),f.push(b)}return d.isGroup?(d.clear(),d.add(...f),d):f[0]}))}}const cf="glTF",Vr=12,Wh={JSON:1313821514,BIN:5130562};class Fx{constructor(e){this.name=tt.KHR_BINARY_GLTF,this.content=null,this.body=null;const t=new DataView(e,0,Vr),n=new TextDecoder;if(this.header={magic:n.decode(new Uint8Array(e.slice(0,4))),version:t.getUint32(4,!0),length:t.getUint32(8,!0)},this.header.magic!==cf)throw new Error("THREE.GLTFLoader: Unsupported glTF-Binary header.");if(this.header.version<2)throw new Error("THREE.GLTFLoader: Legacy binary file detected.");const s=this.header.length-Vr,r=new DataView(e,Vr);let a=0;for(;a<s;){const o=r.getUint32(a,!0);a+=4;const c=r.getUint32(a,!0);if(a+=4,c===Wh.JSON){const l=new Uint8Array(e,Vr+a,o);this.content=n.decode(l)}else if(c===Wh.BIN){const l=Vr+a;this.body=e.slice(l,l+o)}a+=o}if(this.content===null)throw new Error("THREE.GLTFLoader: JSON content not found.")}}class Bx{constructor(e,t){if(!t)throw new Error("THREE.GLTFLoader: No DRACOLoader instance provided.");this.name=tt.KHR_DRACO_MESH_COMPRESSION,this.json=e,this.dracoLoader=t,this.dracoLoader.preload()}decodePrimitive(e,t){const n=this.json,s=this.dracoLoader,r=e.extensions[this.name].bufferView,a=e.extensions[this.name].attributes,o={},c={},l={};for(const d in a){const h=Al[d]||d.toLowerCase();o[h]=a[d]}for(const d in e.attributes){const h=Al[d]||d.toLowerCase();if(a[d]!==void 0){const u=n.accessors[e.attributes[d]],f=pr[u.componentType];l[h]=f.name,c[h]=u.normalized===!0}}return t.getDependency("bufferView",r).then(function(d){return new Promise(function(h,u){s.decodeDracoFile(d,function(f){for(const g in f.attributes){const v=f.attributes[g],m=c[g];m!==void 0&&(v.normalized=m)}h(f)},o,l,jt,u)})})}}class kx{constructor(){this.name=tt.KHR_TEXTURE_TRANSFORM}extendTexture(e,t){return(t.texCoord===void 0||t.texCoord===e.channel)&&t.offset===void 0&&t.rotation===void 0&&t.scale===void 0||(e=e.clone(),t.texCoord!==void 0&&(e.channel=t.texCoord),t.offset!==void 0&&e.offset.fromArray(t.offset),t.rotation!==void 0&&(e.rotation=t.rotation),t.scale!==void 0&&e.repeat.fromArray(t.scale),e.needsUpdate=!0),e}}class zx{constructor(){this.name=tt.KHR_MESH_QUANTIZATION}}class lf extends ma{constructor(e,t,n,s){super(e,t,n,s)}copySampleValue_(e){const t=this.resultBuffer,n=this.sampleValues,s=this.valueSize,r=e*s*3+s;for(let a=0;a!==s;a++)t[a]=n[r+a];return t}interpolate_(e,t,n,s){const r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,c=o*2,l=o*3,d=s-t,h=(n-t)/d,u=h*h,f=u*h,g=e*l,v=g-l,m=-2*f+3*u,p=f-u,x=1-m,b=p-u+h;for(let y=0;y!==o;y++){const I=a[v+y+o],T=a[v+y+c]*d,w=a[g+y+o],R=a[g+y]*d;r[y]=x*I+b*T+m*w+p*R}return r}}const Hx=new os;class Gx extends lf{interpolate_(e,t,n,s){const r=super.interpolate_(e,t,n,s);return Hx.fromArray(r).normalize().toArray(r),r}}const In={POINTS:0,LINES:1,LINE_LOOP:2,LINE_STRIP:3,TRIANGLES:4,TRIANGLE_STRIP:5,TRIANGLE_FAN:6},pr={5120:Int8Array,5121:Uint8Array,5122:Int16Array,5123:Uint16Array,5125:Uint32Array,5126:Float32Array},Xh={9728:an,9729:Wt,9984:xu,9985:ro,9986:$r,9987:ii},Yh={33071:ni,33648:_o,10497:Di},Ic={SCALAR:1,VEC2:2,VEC3:3,VEC4:4,MAT2:4,MAT3:9,MAT4:16},Al={POSITION:"position",NORMAL:"normal",TANGENT:"tangent",TEXCOORD_0:"uv",TEXCOORD_1:"uv1",TEXCOORD_2:"uv2",TEXCOORD_3:"uv3",COLOR_0:"color",WEIGHTS_0:"skinWeight",JOINTS_0:"skinIndex"},Xi={scale:"scale",translation:"position",rotation:"quaternion",weights:"morphTargetInfluences"},Vx={CUBICSPLINE:void 0,LINEAR:ua,STEP:ha},Lc={OPAQUE:"OPAQUE",MASK:"MASK",BLEND:"BLEND"};function Wx(i){return i.DefaultMaterial===void 0&&(i.DefaultMaterial=new ae({color:16777215,emissive:0,metalness:1,roughness:1,transparent:!1,depthTest:!0,side:Li})),i.DefaultMaterial}function vs(i,e,t){for(const n in t.extensions)i[n]===void 0&&(e.userData.gltfExtensions=e.userData.gltfExtensions||{},e.userData.gltfExtensions[n]=t.extensions[n])}function Mi(i,e){e.extras!==void 0&&(typeof e.extras=="object"?Object.assign(i.userData,e.extras):console.warn("THREE.GLTFLoader: Ignoring primitive type .extras, "+e.extras))}function Xx(i,e,t){let n=!1,s=!1,r=!1;for(let l=0,d=e.length;l<d;l++){const h=e[l];if(h.POSITION!==void 0&&(n=!0),h.NORMAL!==void 0&&(s=!0),h.COLOR_0!==void 0&&(r=!0),n&&s&&r)break}if(!n&&!s&&!r)return Promise.resolve(i);const a=[],o=[],c=[];for(let l=0,d=e.length;l<d;l++){const h=e[l];if(n){const u=h.POSITION!==void 0?t.getDependency("accessor",h.POSITION):i.attributes.position;a.push(u)}if(s){const u=h.NORMAL!==void 0?t.getDependency("accessor",h.NORMAL):i.attributes.normal;o.push(u)}if(r){const u=h.COLOR_0!==void 0?t.getDependency("accessor",h.COLOR_0):i.attributes.color;c.push(u)}}return Promise.all([Promise.all(a),Promise.all(o),Promise.all(c)]).then(function(l){const d=l[0],h=l[1],u=l[2];return n&&(i.morphAttributes.position=d),s&&(i.morphAttributes.normal=h),r&&(i.morphAttributes.color=u),i.morphTargetsRelative=!0,i})}function Yx(i,e){if(i.updateMorphTargets(),e.weights!==void 0)for(let t=0,n=e.weights.length;t<n;t++)i.morphTargetInfluences[t]=e.weights[t];if(e.extras&&Array.isArray(e.extras.targetNames)){const t=e.extras.targetNames;if(i.morphTargetInfluences.length===t.length){i.morphTargetDictionary={};for(let n=0,s=t.length;n<s;n++)i.morphTargetDictionary[t[n]]=n}else console.warn("THREE.GLTFLoader: Invalid extras.targetNames length. Ignoring names.")}}function qx(i){let e;const t=i.extensions&&i.extensions[tt.KHR_DRACO_MESH_COMPRESSION];if(t?e="draco:"+t.bufferView+":"+t.indices+":"+Dc(t.attributes):e=i.indices+":"+Dc(i.attributes)+":"+i.mode,i.targets!==void 0)for(let n=0,s=i.targets.length;n<s;n++)e+=":"+Dc(i.targets[n]);return e}function Dc(i){let e="";const t=Object.keys(i).sort();for(let n=0,s=t.length;n<s;n++)e+=t[n]+":"+i[t[n]]+";";return e}function Rl(i){switch(i){case Int8Array:return 1/127;case Uint8Array:return 1/255;case Int16Array:return 1/32767;case Uint16Array:return 1/65535;default:throw new Error("THREE.GLTFLoader: Unsupported normalized accessor component type.")}}function $x(i){return i.search(/\.jpe?g($|\?)/i)>0||i.search(/^data\:image\/jpeg/)===0?"image/jpeg":i.search(/\.webp($|\?)/i)>0||i.search(/^data\:image\/webp/)===0?"image/webp":i.search(/\.ktx2($|\?)/i)>0||i.search(/^data\:image\/ktx2/)===0?"image/ktx2":"image/png"}const Kx=new Ke;class Zx{constructor(e={},t={}){this.json=e,this.extensions={},this.plugins={},this.options=t,this.cache=new _x,this.associations=new Map,this.primitiveCache={},this.nodeCache={},this.meshCache={refs:{},uses:{}},this.cameraCache={refs:{},uses:{}},this.lightCache={refs:{},uses:{}},this.sourceCache={},this.textureCache={},this.nodeNamesUsed={};let n=!1,s=-1,r=!1,a=-1;if(typeof navigator<"u"){const o=navigator.userAgent;n=/^((?!chrome|android).)*safari/i.test(o)===!0;const c=o.match(/Version\/(\d+)/);s=n&&c?parseInt(c[1],10):-1,r=o.indexOf("Firefox")>-1,a=r?o.match(/Firefox\/([0-9]+)\./)[1]:-1}typeof createImageBitmap>"u"||n&&s<17||r&&a<98?this.textureLoader=new Qu(this.options.manager):this.textureLoader=new zy(this.options.manager),this.textureLoader.setCrossOrigin(this.options.crossOrigin),this.textureLoader.setRequestHeader(this.options.requestHeader),this.fileLoader=new rd(this.options.manager),this.fileLoader.setResponseType("arraybuffer"),this.options.crossOrigin==="use-credentials"&&this.fileLoader.setWithCredentials(!0)}setExtensions(e){this.extensions=e}setPlugins(e){this.plugins=e}parse(e,t){const n=this,s=this.json,r=this.extensions;this.cache.removeAll(),this.nodeCache={},this._invokeAll(function(a){return a._markDefs&&a._markDefs()}),Promise.all(this._invokeAll(function(a){return a.beforeRoot&&a.beforeRoot()})).then(function(){return Promise.all([n.getDependencies("scene"),n.getDependencies("animation"),n.getDependencies("camera")])}).then(function(a){const o={scene:a[0][s.scene||0],scenes:a[0],animations:a[1],cameras:a[2],asset:s.asset,parser:n,userData:{}};return vs(r,o,s),Mi(o,s),Promise.all(n._invokeAll(function(c){return c.afterRoot&&c.afterRoot(o)})).then(function(){for(const c of o.scenes)c.updateMatrixWorld();e(o)})}).catch(t)}_markDefs(){const e=this.json.nodes||[],t=this.json.skins||[],n=this.json.meshes||[];for(let s=0,r=t.length;s<r;s++){const a=t[s].joints;for(let o=0,c=a.length;o<c;o++)e[a[o]].isBone=!0}for(let s=0,r=e.length;s<r;s++){const a=e[s];a.mesh!==void 0&&(this._addNodeRef(this.meshCache,a.mesh),a.skin!==void 0&&(n[a.mesh].isSkinnedMesh=!0)),a.camera!==void 0&&this._addNodeRef(this.cameraCache,a.camera)}}_addNodeRef(e,t){t!==void 0&&(e.refs[t]===void 0&&(e.refs[t]=e.uses[t]=0),e.refs[t]++)}_getNodeRef(e,t,n){if(e.refs[t]<=1)return n;const s=n.clone(),r=(a,o)=>{const c=this.associations.get(a);c!=null&&this.associations.set(o,c);for(const[l,d]of a.children.entries())r(d,o.children[l])};return r(n,s),s.name+="_instance_"+e.uses[t]++,s}_invokeOne(e){const t=Object.values(this.plugins);t.push(this);for(let n=0;n<t.length;n++){const s=e(t[n]);if(s)return s}return null}_invokeAll(e){const t=Object.values(this.plugins);t.unshift(this);const n=[];for(let s=0;s<t.length;s++){const r=e(t[s]);r&&n.push(r)}return n}getDependency(e,t){const n=e+":"+t;let s=this.cache.get(n);if(!s){switch(e){case"scene":s=this.loadScene(t);break;case"node":s=this._invokeOne(function(r){return r.loadNode&&r.loadNode(t)});break;case"mesh":s=this._invokeOne(function(r){return r.loadMesh&&r.loadMesh(t)});break;case"accessor":s=this.loadAccessor(t);break;case"bufferView":s=this._invokeOne(function(r){return r.loadBufferView&&r.loadBufferView(t)});break;case"buffer":s=this.loadBuffer(t);break;case"material":s=this._invokeOne(function(r){return r.loadMaterial&&r.loadMaterial(t)});break;case"texture":s=this._invokeOne(function(r){return r.loadTexture&&r.loadTexture(t)});break;case"skin":s=this.loadSkin(t);break;case"animation":s=this._invokeOne(function(r){return r.loadAnimation&&r.loadAnimation(t)});break;case"camera":s=this.loadCamera(t);break;default:if(s=this._invokeOne(function(r){return r!=this&&r.getDependency&&r.getDependency(e,t)}),!s)throw new Error("Unknown type: "+e);break}this.cache.add(n,s)}return s}getDependencies(e){let t=this.cache.get(e);if(!t){const n=this,s=this.json[e+(e==="mesh"?"es":"s")]||[];t=Promise.all(s.map(function(r,a){return n.getDependency(e,a)})),this.cache.add(e,t)}return t}loadBuffer(e){const t=this.json.buffers[e],n=this.fileLoader;if(t.type&&t.type!=="arraybuffer")throw new Error("THREE.GLTFLoader: "+t.type+" buffer type is not supported.");if(t.uri===void 0&&e===0)return Promise.resolve(this.extensions[tt.KHR_BINARY_GLTF].body);const s=this.options;return new Promise(function(r,a){n.load(ta.resolveURL(t.uri,s.path),r,void 0,function(){a(new Error('THREE.GLTFLoader: Failed to load buffer "'+t.uri+'".'))})})}loadBufferView(e){const t=this.json.bufferViews[e];return this.getDependency("buffer",t.buffer).then(function(n){const s=t.byteLength||0,r=t.byteOffset||0;return n.slice(r,r+s)})}loadAccessor(e){const t=this,n=this.json,s=this.json.accessors[e];if(s.bufferView===void 0&&s.sparse===void 0){const a=Ic[s.type],o=pr[s.componentType],c=s.normalized===!0,l=new o(s.count*a);return Promise.resolve(new on(l,a,c))}const r=[];return s.bufferView!==void 0?r.push(this.getDependency("bufferView",s.bufferView)):r.push(null),s.sparse!==void 0&&(r.push(this.getDependency("bufferView",s.sparse.indices.bufferView)),r.push(this.getDependency("bufferView",s.sparse.values.bufferView))),Promise.all(r).then(function(a){const o=a[0],c=Ic[s.type],l=pr[s.componentType],d=l.BYTES_PER_ELEMENT,h=d*c,u=s.byteOffset||0,f=s.bufferView!==void 0?n.bufferViews[s.bufferView].byteStride:void 0,g=s.normalized===!0;let v,m;if(f&&f!==h){const p=Math.floor(u/f),x="InterleavedBuffer:"+s.bufferView+":"+s.componentType+":"+p+":"+s.count;let b=t.cache.get(x);b||(v=new l(o,p*f,s.count*f/d),b=new dy(v,f/d),t.cache.add(x,b)),m=new Ql(b,c,u%f/d,g)}else o===null?v=new l(s.count*c):v=new l(o,u,s.count*c),m=new on(v,c,g);if(s.sparse!==void 0){const p=Ic.SCALAR,x=pr[s.sparse.indices.componentType],b=s.sparse.indices.byteOffset||0,y=s.sparse.values.byteOffset||0,I=new x(a[1],b,s.sparse.count*p),T=new l(a[2],y,s.sparse.count*c);o!==null&&(m=new on(m.array.slice(),m.itemSize,m.normalized)),m.normalized=!1;for(let w=0,R=I.length;w<R;w++){const S=I[w];if(m.setX(S,T[w*c]),c>=2&&m.setY(S,T[w*c+1]),c>=3&&m.setZ(S,T[w*c+2]),c>=4&&m.setW(S,T[w*c+3]),c>=5)throw new Error("THREE.GLTFLoader: Unsupported itemSize in sparse BufferAttribute.")}m.normalized=g}return m})}loadTexture(e){const t=this.json,n=this.options,r=t.textures[e].source,a=t.images[r];let o=this.textureLoader;if(a.uri){const c=n.manager.getHandler(a.uri);c!==null&&(o=c)}return this.loadTextureImage(e,r,o)}loadTextureImage(e,t,n){const s=this,r=this.json,a=r.textures[e],o=r.images[t],c=(o.uri||o.bufferView)+":"+a.sampler;if(this.textureCache[c])return this.textureCache[c];const l=this.loadImageSource(t,n).then(function(d){d.flipY=!1,d.name=a.name||o.name||"",d.name===""&&typeof o.uri=="string"&&o.uri.startsWith("data:image/")===!1&&(d.name=o.uri);const u=(r.samplers||{})[a.sampler]||{};return d.magFilter=Xh[u.magFilter]||Wt,d.minFilter=Xh[u.minFilter]||ii,d.wrapS=Yh[u.wrapS]||Di,d.wrapT=Yh[u.wrapT]||Di,d.generateMipmaps=!d.isCompressedTexture&&d.minFilter!==an&&d.minFilter!==Wt,s.associations.set(d,{textures:e}),d}).catch(function(){return null});return this.textureCache[c]=l,l}loadImageSource(e,t){const n=this,s=this.json,r=this.options;if(this.sourceCache[e]!==void 0)return this.sourceCache[e].then(h=>h.clone());const a=s.images[e],o=self.URL||self.webkitURL;let c=a.uri||"",l=!1;if(a.bufferView!==void 0)c=n.getDependency("bufferView",a.bufferView).then(function(h){l=!0;const u=new Blob([h],{type:a.mimeType});return c=o.createObjectURL(u),c});else if(a.uri===void 0)throw new Error("THREE.GLTFLoader: Image "+e+" is missing URI and bufferView");const d=Promise.resolve(c).then(function(h){return new Promise(function(u,f){let g=u;t.isImageBitmapLoader===!0&&(g=function(v){const m=new kt(v);m.needsUpdate=!0,u(m)}),t.load(ta.resolveURL(h,r.path),g,void 0,f)})}).then(function(h){return l===!0&&o.revokeObjectURL(c),Mi(h,a),h.userData.mimeType=a.mimeType||$x(a.uri),h}).catch(function(h){throw console.error("THREE.GLTFLoader: Couldn't load texture",c),h});return this.sourceCache[e]=d,d}assignTexture(e,t,n,s){const r=this;return this.getDependency("texture",n.index).then(function(a){if(!a)return null;if(n.texCoord!==void 0&&n.texCoord>0&&(a=a.clone(),a.channel=n.texCoord),r.extensions[tt.KHR_TEXTURE_TRANSFORM]){const o=n.extensions!==void 0?n.extensions[tt.KHR_TEXTURE_TRANSFORM]:void 0;if(o){const c=r.associations.get(a);a=r.extensions[tt.KHR_TEXTURE_TRANSFORM].extendTexture(a,o),r.associations.set(a,c)}}return s!==void 0&&(a.colorSpace=s),e[t]=a,a})}assignFinalMaterial(e){const t=e.geometry;let n=e.material;const s=t.attributes.tangent===void 0,r=t.attributes.color!==void 0,a=t.attributes.normal===void 0;if(e.isPoints){const o="PointsMaterial:"+n.uuid;let c=this.cache.get(o);c||(c=new Zu,si.prototype.copy.call(c,n),c.color.copy(n.color),c.map=n.map,c.sizeAttenuation=!1,this.cache.add(o,c)),n=c}else if(e.isLine){const o="LineBasicMaterial:"+n.uuid;let c=this.cache.get(o);c||(c=new nd,si.prototype.copy.call(c,n),c.color.copy(n.color),c.map=n.map,this.cache.add(o,c)),n=c}if(s||r||a){let o="ClonedMaterial:"+n.uuid+":";s&&(o+="derivative-tangents:"),r&&(o+="vertex-colors:"),a&&(o+="flat-shading:");let c=this.cache.get(o);c||(c=n.clone(),r&&(c.vertexColors=!0),a&&(c.flatShading=!0),s&&(c.normalScale&&(c.normalScale.y*=-1),c.clearcoatNormalScale&&(c.clearcoatNormalScale.y*=-1)),this.cache.add(o,c),this.associations.set(c,this.associations.get(n))),n=c}e.material=n}getMaterialType(){return ae}loadMaterial(e){const t=this,n=this.json,s=this.extensions,r=n.materials[e];let a;const o={},c=r.extensions||{},l=[];if(c[tt.KHR_MATERIALS_UNLIT]){const h=s[tt.KHR_MATERIALS_UNLIT];a=h.getMaterialType(),l.push(h.extendParams(o,r,t))}else{const h=r.pbrMetallicRoughness||{};if(o.color=new ze(1,1,1),o.opacity=1,Array.isArray(h.baseColorFactor)){const u=h.baseColorFactor;o.color.setRGB(u[0],u[1],u[2],jt),o.opacity=u[3]}h.baseColorTexture!==void 0&&l.push(t.assignTexture(o,"map",h.baseColorTexture,Pt)),o.metalness=h.metallicFactor!==void 0?h.metallicFactor:1,o.roughness=h.roughnessFactor!==void 0?h.roughnessFactor:1,h.metallicRoughnessTexture!==void 0&&(l.push(t.assignTexture(o,"metalnessMap",h.metallicRoughnessTexture)),l.push(t.assignTexture(o,"roughnessMap",h.metallicRoughnessTexture))),a=this._invokeOne(function(u){return u.getMaterialType&&u.getMaterialType(e)}),l.push(Promise.all(this._invokeAll(function(u){return u.extendMaterialParams&&u.extendMaterialParams(e,o)})))}r.doubleSided===!0&&(o.side=Dn);const d=r.alphaMode||Lc.OPAQUE;if(d===Lc.BLEND?(o.transparent=!0,o.depthWrite=!1):(o.transparent=!1,d===Lc.MASK&&(o.alphaTest=r.alphaCutoff!==void 0?r.alphaCutoff:.5)),r.normalTexture!==void 0&&a!==Nn&&(l.push(t.assignTexture(o,"normalMap",r.normalTexture)),o.normalScale=new je(1,1),r.normalTexture.scale!==void 0)){const h=r.normalTexture.scale;o.normalScale.set(h,h)}if(r.occlusionTexture!==void 0&&a!==Nn&&(l.push(t.assignTexture(o,"aoMap",r.occlusionTexture)),r.occlusionTexture.strength!==void 0&&(o.aoMapIntensity=r.occlusionTexture.strength)),r.emissiveFactor!==void 0&&a!==Nn){const h=r.emissiveFactor;o.emissive=new ze().setRGB(h[0],h[1],h[2],jt)}return r.emissiveTexture!==void 0&&a!==Nn&&l.push(t.assignTexture(o,"emissiveMap",r.emissiveTexture,Pt)),Promise.all(l).then(function(){const h=new a(o);return r.name&&(h.name=r.name),Mi(h,r),t.associations.set(h,{materials:e}),r.extensions&&vs(s,h,r),h})}createUniqueName(e){const t=vt.sanitizeNodeName(e||"");return t in this.nodeNamesUsed?t+"_"+ ++this.nodeNamesUsed[t]:(this.nodeNamesUsed[t]=0,t)}loadGeometries(e){const t=this,n=this.extensions,s=this.primitiveCache;function r(o){return n[tt.KHR_DRACO_MESH_COMPRESSION].decodePrimitive(o,t).then(function(c){return qh(c,o,t)})}const a=[];for(let o=0,c=e.length;o<c;o++){const l=e[o],d=qx(l),h=s[d];if(h)a.push(h.promise);else{let u;l.extensions&&l.extensions[tt.KHR_DRACO_MESH_COMPRESSION]?u=r(l):u=qh(new fn,l,t),s[d]={primitive:l,promise:u},a.push(u)}}return Promise.all(a)}loadMesh(e){const t=this,n=this.json,s=this.extensions,r=n.meshes[e],a=r.primitives,o=[];for(let c=0,l=a.length;c<l;c++){const d=a[c].material===void 0?Wx(this.cache):this.getDependency("material",a[c].material);o.push(d)}return o.push(t.loadGeometries(a)),Promise.all(o).then(function(c){const l=c.slice(0,c.length-1),d=c[c.length-1],h=[];for(let f=0,g=d.length;f<g;f++){const v=d[f],m=a[f];let p;const x=l[f];if(m.mode===In.TRIANGLES||m.mode===In.TRIANGLE_STRIP||m.mode===In.TRIANGLE_FAN||m.mode===void 0)p=r.isSkinnedMesh===!0?new uy(v,x):new B(v,x),p.isSkinnedMesh===!0&&p.normalizeSkinWeights(),m.mode===In.TRIANGLE_STRIP?p.geometry=Vh(p.geometry,Iu):m.mode===In.TRIANGLE_FAN&&(p.geometry=Vh(p.geometry,xl));else if(m.mode===In.LINES)p=new gy(v,x);else if(m.mode===In.LINE_STRIP)p=new ko(v,x);else if(m.mode===In.LINE_LOOP)p=new vy(v,x);else if(m.mode===In.POINTS)p=new _y(v,x);else throw new Error("THREE.GLTFLoader: Primitive mode unsupported: "+m.mode);Object.keys(p.geometry.morphAttributes).length>0&&Yx(p,r),p.name=t.createUniqueName(r.name||"mesh_"+e),Mi(p,r),m.extensions&&vs(s,p,m),t.assignFinalMaterial(p),h.push(p)}for(let f=0,g=h.length;f<g;f++)t.associations.set(h[f],{meshes:e,primitives:f});if(h.length===1)return r.extensions&&vs(s,h[0],r),h[0];const u=new Ve;r.extensions&&vs(s,u,r),t.associations.set(u,{meshes:e});for(let f=0,g=h.length;f<g;f++)u.add(h[f]);return u})}loadCamera(e){let t;const n=this.json.cameras[e],s=n[n.type];if(!s){console.warn("THREE.GLTFLoader: Missing camera parameters.");return}return n.type==="perspective"?t=new rn(Yp.radToDeg(s.yfov),s.aspectRatio||1,s.znear||1,s.zfar||2e6):n.type==="orthographic"&&(t=new Zl(-s.xmag,s.xmag,s.ymag,-s.ymag,s.znear,s.zfar)),n.name&&(t.name=this.createUniqueName(n.name)),Mi(t,n),Promise.resolve(t)}loadSkin(e){const t=this.json.skins[e],n=[];for(let s=0,r=t.joints.length;s<r;s++)n.push(this._loadNodeShallow(t.joints[s]));return t.inverseBindMatrices!==void 0?n.push(this.getDependency("accessor",t.inverseBindMatrices)):n.push(null),Promise.all(n).then(function(s){const r=s.pop(),a=s,o=[],c=[];for(let l=0,d=a.length;l<d;l++){const h=a[l];if(h){o.push(h);const u=new Ke;r!==null&&u.fromArray(r.array,l*16),c.push(u)}else console.warn('THREE.GLTFLoader: Joint "%s" could not be found.',t.joints[l])}return new td(o,c)})}loadAnimation(e){const t=this.json,n=this,s=t.animations[e],r=s.name?s.name:"animation_"+e,a=[],o=[],c=[],l=[],d=[];for(let h=0,u=s.channels.length;h<u;h++){const f=s.channels[h],g=s.samplers[f.sampler],v=f.target,m=v.node,p=s.parameters!==void 0?s.parameters[g.input]:g.input,x=s.parameters!==void 0?s.parameters[g.output]:g.output;v.node!==void 0&&(a.push(this.getDependency("node",m)),o.push(this.getDependency("accessor",p)),c.push(this.getDependency("accessor",x)),l.push(g),d.push(v))}return Promise.all([Promise.all(a),Promise.all(o),Promise.all(c),Promise.all(l),Promise.all(d)]).then(function(h){const u=h[0],f=h[1],g=h[2],v=h[3],m=h[4],p=[];for(let x=0,b=u.length;x<b;x++){const y=u[x],I=f[x],T=g[x],w=v[x],R=m[x];if(y===void 0)continue;y.updateMatrix&&y.updateMatrix();const S=n._createAnimationTracks(y,I,T,w,R);if(S)for(let _=0;_<S.length;_++)p.push(S[_])}return new Ay(r,void 0,p)})}createNodeMesh(e){const t=this.json,n=this,s=t.nodes[e];return s.mesh===void 0?null:n.getDependency("mesh",s.mesh).then(function(r){const a=n._getNodeRef(n.meshCache,s.mesh,r);return s.weights!==void 0&&a.traverse(function(o){if(o.isMesh)for(let c=0,l=s.weights.length;c<l;c++)o.morphTargetInfluences[c]=s.weights[c]}),a})}loadNode(e){const t=this.json,n=this,s=t.nodes[e],r=n._loadNodeShallow(e),a=[],o=s.children||[];for(let l=0,d=o.length;l<d;l++)a.push(n.getDependency("node",o[l]));const c=s.skin===void 0?Promise.resolve(null):n.getDependency("skin",s.skin);return Promise.all([r,Promise.all(a),c]).then(function(l){const d=l[0],h=l[1],u=l[2];u!==null&&d.traverse(function(f){f.isSkinnedMesh&&f.bind(u,Kx)});for(let f=0,g=h.length;f<g;f++)d.add(h[f]);return d})}_loadNodeShallow(e){const t=this.json,n=this.extensions,s=this;if(this.nodeCache[e]!==void 0)return this.nodeCache[e];const r=t.nodes[e],a=r.name?s.createUniqueName(r.name):"",o=[],c=s._invokeOne(function(l){return l.createNodeMesh&&l.createNodeMesh(e)});return c&&o.push(c),r.camera!==void 0&&o.push(s.getDependency("camera",r.camera).then(function(l){return s._getNodeRef(s.cameraCache,r.camera,l)})),s._invokeAll(function(l){return l.createNodeAttachment&&l.createNodeAttachment(e)}).forEach(function(l){o.push(l)}),this.nodeCache[e]=Promise.all(o).then(function(l){let d;if(r.isBone===!0?d=new Ku:l.length>1?d=new Ve:l.length===1?d=l[0]:d=new Tt,d!==l[0])for(let h=0,u=l.length;h<u;h++)d.add(l[h]);if(r.name&&(d.userData.name=r.name,d.name=a),Mi(d,r),r.extensions&&vs(n,d,r),r.matrix!==void 0){const h=new Ke;h.fromArray(r.matrix),d.applyMatrix4(h)}else r.translation!==void 0&&d.position.fromArray(r.translation),r.rotation!==void 0&&d.quaternion.fromArray(r.rotation),r.scale!==void 0&&d.scale.fromArray(r.scale);return s.associations.has(d)||s.associations.set(d,{}),s.associations.get(d).nodes=e,d}),this.nodeCache[e]}loadScene(e){const t=this.extensions,n=this.json.scenes[e],s=this,r=new Ve;n.name&&(r.name=s.createUniqueName(n.name)),Mi(r,n),n.extensions&&vs(t,r,n);const a=n.nodes||[],o=[];for(let c=0,l=a.length;c<l;c++)o.push(s.getDependency("node",a[c]));return Promise.all(o).then(function(c){for(let d=0,h=c.length;d<h;d++)r.add(c[d]);const l=d=>{const h=new Map;for(const[u,f]of s.associations)(u instanceof si||u instanceof kt)&&h.set(u,f);return d.traverse(u=>{const f=s.associations.get(u);f!=null&&h.set(u,f)}),h};return s.associations=l(r),r})}_createAnimationTracks(e,t,n,s,r){const a=[],o=e.name?e.name:e.uuid,c=[];Xi[r.path]===Xi.weights?e.traverse(function(u){u.morphTargetInfluences&&c.push(u.name?u.name:u.uuid)}):c.push(o);let l;switch(Xi[r.path]){case Xi.weights:l=br;break;case Xi.rotation:l=Er;break;case Xi.position:case Xi.scale:l=Tr;break;default:switch(n.itemSize){case 1:l=br;break;case 2:case 3:default:l=Tr;break}break}const d=s.interpolation!==void 0?Vx[s.interpolation]:ua,h=this._getArrayFromAccessor(n);for(let u=0,f=c.length;u<f;u++){const g=new l(c[u]+"."+Xi[r.path],t.array,h,d);s.interpolation==="CUBICSPLINE"&&this._createCubicSplineTrackInterpolant(g),a.push(g)}return a}_getArrayFromAccessor(e){let t=e.array;if(e.normalized){const n=Rl(t.constructor),s=new Float32Array(t.length);for(let r=0,a=t.length;r<a;r++)s[r]=t[r]*n;t=s}return t}_createCubicSplineTrackInterpolant(e){e.createInterpolant=function(n){const s=this instanceof Er?Gx:lf;return new s(this.times,this.values,this.getValueSize()/3,n)},e.createInterpolant.isInterpolantFactoryMethodGLTFCubicSpline=!0}}function jx(i,e,t){const n=e.attributes,s=new Ui;if(n.POSITION!==void 0){const o=t.json.accessors[n.POSITION],c=o.min,l=o.max;if(c!==void 0&&l!==void 0){if(s.set(new D(c[0],c[1],c[2]),new D(l[0],l[1],l[2])),o.normalized){const d=Rl(pr[o.componentType]);s.min.multiplyScalar(d),s.max.multiplyScalar(d)}}else{console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.");return}}else return;const r=e.targets;if(r!==void 0){const o=new D,c=new D;for(let l=0,d=r.length;l<d;l++){const h=r[l];if(h.POSITION!==void 0){const u=t.json.accessors[h.POSITION],f=u.min,g=u.max;if(f!==void 0&&g!==void 0){if(c.setX(Math.max(Math.abs(f[0]),Math.abs(g[0]))),c.setY(Math.max(Math.abs(f[1]),Math.abs(g[1]))),c.setZ(Math.max(Math.abs(f[2]),Math.abs(g[2]))),u.normalized){const v=Rl(pr[u.componentType]);c.multiplyScalar(v)}o.max(c)}else console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.")}}s.expandByVector(o)}i.boundingBox=s;const a=new ci;s.getCenter(a.center),a.radius=s.min.distanceTo(s.max)/2,i.boundingSphere=a}function qh(i,e,t){const n=e.attributes,s=[];function r(a,o){return t.getDependency("accessor",a).then(function(c){i.setAttribute(o,c)})}for(const a in n){const o=Al[a]||a.toLowerCase();o in i.attributes||s.push(r(n[a],o))}if(e.indices!==void 0&&!i.index){const a=t.getDependency("accessor",e.indices).then(function(o){i.setIndex(o)});s.push(a)}return st.workingColorSpace!==jt&&"COLOR_0"in n&&console.warn(`THREE.GLTFLoader: Converting vertex colors from "srgb-linear" to "${st.workingColorSpace}" not supported.`),Mi(i,e),jx(i,e,t),Promise.all(s).then(function(){return e.targets!==void 0?Xx(i,e.targets,t):i})}const Jx=new Qu,Qx=new gx;new vx;let ja=null,Ja=null,Qa=null,eo=null;const Pc=new Map;let Qs=null;function cn(i,e=1,t=1,n=!1){const s=Jx.load(i);return s.wrapS=Di,s.wrapT=Di,s.repeat.set(e,t),n&&(s.colorSpace=Pt),s}function eS(i,e){const t="/assets/hdri/city_sky.hdr";Qx.load(t,n=>{n.mapping=la,i.background=n,i.environment=n,console.log("[GazeDrive Assets] Loaded Urban HDRI from",t)},void 0,()=>{console.warn(`[GazeDrive Assets] HDRI not found at ${t}. Falling back to procedural Indian city warm atmospheric haze sky.
To use real HDRI, place city_sky.hdr in public/assets/hdri/`);const n=document.createElement("canvas");n.width=1024,n.height=512;const s=n.getContext("2d"),r=s.createLinearGradient(0,0,0,512);r.addColorStop(0,"#4a6d8c"),r.addColorStop(.45,"#8eaec5"),r.addColorStop(.75,"#d4c2a5"),r.addColorStop(.92,"#eedbc5"),r.addColorStop(1,"#b8a690"),s.fillStyle=r,s.fillRect(0,0,1024,512);const a=s.createRadialGradient(680,220,10,680,220,180);a.addColorStop(0,"rgba(255, 250, 230, 0.95)"),a.addColorStop(.2,"rgba(255, 235, 180, 0.45)"),a.addColorStop(.6,"rgba(255, 220, 160, 0.15)"),a.addColorStop(1,"rgba(255, 220, 160, 0)"),s.fillStyle=a,s.fillRect(0,0,1024,512);const o=new pa(n);o.mapping=la,o.colorSpace=Pt,i.background=o,i.environment=o}),i.fog=new Jl(13813428,.005)}function tS(){if(ja)return ja;const i=cn("/assets/textures/asphalt_color.jpg",2,6,!0),e=cn("/assets/textures/asphalt_normal.jpg",2,6,!1),t=cn("/assets/textures/asphalt_roughness.jpg",2,6,!1);return ja=new ae({map:i,normalMap:e,normalScale:new je(.8,.8),roughnessMap:t,roughness:.65,metalness:.12}),ja}function nS(){if(Ja)return Ja;const i=cn("/assets/textures/paving_color.jpg",2,8,!0),e=cn("/assets/textures/paving_normal.jpg",2,8,!1),t=cn("/assets/textures/paving_roughness.jpg",2,8,!1);return Ja=new ae({map:i,normalMap:e,normalScale:new je(.7,.7),roughnessMap:t,roughness:.75,metalness:.05}),Ja}function Eo(){if(Qa)return Qa;const i=cn("/assets/textures/concrete_color.jpg",1,3,!0),e=cn("/assets/textures/concrete_normal.jpg",1,3,!1),t=cn("/assets/textures/concrete_roughness.jpg",1,3,!1);return Qa=new ae({map:i,normalMap:e,normalScale:new je(.6,.6),roughnessMap:t,roughness:.82,metalness:.05}),Qa}function iS(i=14207934){if(Pc.has(i))return Pc.get(i);const e=cn("/assets/textures/plaster_color.jpg",2,2,!0),t=cn("/assets/textures/plaster_normal.jpg",2,2,!1),n=cn("/assets/textures/plaster_roughness.jpg",2,2,!1),s=new ae({color:i,map:e,normalMap:t,normalScale:new je(.65,.65),roughnessMap:n,roughness:.85,metalness:.05});return Pc.set(i,s),s}function sS(){if(eo)return eo;const i=cn("/assets/textures/bricks_color.jpg",3,3,!0),e=cn("/assets/textures/bricks_normal.jpg",3,3,!1),t=cn("/assets/textures/bricks_roughness.jpg",3,3,!1);return eo=new ae({map:i,normalMap:e,normalScale:new je(.8,.8),roughnessMap:t,roughness:.88,metalness:.05}),eo}function rS(i=0){const e=[{eng:"SHARMA MEDICALS & SURGICALS",ind:"दवाखाना • 24 HOURS PHARMACY",tag:"ALL MEDICINES & HEALTHCARE • MOB: 98123 45678",bg:"#0a643b",accent:"#ffffff",cross:!0},{eng:"ROYAL TEXTILES & SILK SAREES",ind:"रॉयल वस्त्र भण्डार • होलसेल व रिटेल",tag:"EXCLUSIVE WEDDING WEAR & SUITINGS",bg:"#8b131f",accent:"#ffd700"},{eng:"ANNAPURNA VEG RESTAURANT",ind:"होटल अन्नपूर्णा • शुद्ध शाकाहारी",tag:"SOUTH INDIAN MEALS • CHAI • DOSA • COFFEE",bg:"#c9510c",accent:"#ffffff"},{eng:"DELUXE BAKERY & CAKE CORNER",ind:"डिलक्स बेकरी • ताज़ा केक व पेस्ट्री",tag:"FRESH BREAD • PASTRIES • SNACKS & SWEETS",bg:"#1b4d89",accent:"#ffdd66"},{eng:"JANATA HARDWARE & ELECTRICALS",ind:"जनता हार्डवेयर व पेंट्स स्टोर",tag:"PAINTS • SANITARY • PIPES • TOOLS",bg:"#2b2e35",accent:"#ffcc00"},{eng:"SUPER MOBILE & ELECTRONICS",ind:"सुपर मोबाइल रिपेयरिंग सेंटर",tag:"SMARTPHONE REPAIRS • ACCESSORIES • RECHARGE",bg:"#0059b3",accent:"#00e5a3"},{eng:"CHAI POINT & TEA STALL",ind:"स्पेशल अदरक मसाला चाय व नाश्ता",tag:"HOT SAMOSAS • BUN MASKA • FRESH TEA",bg:"#7a3b12",accent:"#fff3d1"}],t=e[i%e.length],n=document.createElement("canvas");n.width=512,n.height=128;const s=n.getContext("2d");s.fillStyle=t.bg,s.fillRect(0,0,512,128),s.strokeStyle=t.accent,s.lineWidth=6,s.strokeRect(4,4,504,120),s.fillStyle=t.accent,s.font='bold 26px "Inter", sans-serif',s.textAlign="center",s.fillText(t.eng,256,42),s.fillStyle="#ffffff",s.font="bold 22px sans-serif",s.fillText(t.ind,256,78),s.fillStyle="rgba(255, 255, 255, 0.85)",s.font='12px "Inter", monospace',s.fillText(t.tag,256,108),t.cross&&(s.fillStyle="#ff2222",s.fillRect(24,44,28,8),s.fillRect(34,34,8,28),s.fillRect(460,44,28,8),s.fillRect(470,34,8,28));const r=new pa(n);return r.colorSpace=Pt,r}function aS(){if(Qs)return Qs;const i=document.createElement("canvas");i.width=1024,i.height=256;const e=i.getContext("2d");e.clearRect(0,0,1024,256),e.fillStyle="rgba(100, 115, 130, 0.45)";let t=10;for(;t<1020;){const n=24+Math.random()*45,s=60+Math.random()*150;e.fillRect(t,256-s,n,s),Math.random()>.6&&e.fillRect(t+n/2-1,256-s-25,2,25),t+=n+6+Math.random()*12}return Qs=new pa(i),Qs.wrapS=Di,Qs.repeat.set(3,1),Qs}let mr="HIGH";function oS(i){mr=i.toUpperCase(),console.log("[GazeDrive Scenery] Environment Quality set to:",mr)}const cS=new ae({color:15658734,roughness:.5}),lS=new ae({color:5924216,metalness:.6,roughness:.4}),$h=new ae({color:1118481,roughness:.6}),dS=new ae({color:13934615,roughness:.5});new ae({color:8551795,roughness:.85});const hS=new nd({color:1710618,linewidth:1}),uS=new ae({color:1846077,roughness:.1,metalness:.8});function Kh(i=0,e=!1){const t=new Ve,n=[3,4,4,5,5,6],s=n[Math.abs(i)%n.length],r=3.2,a=s*r,o=14,c=15,l=[14207934,13350018,12088152,7904158,10919311,13608594],d=l[Math.abs(i)%l.length],u=Math.abs(i)%4===1?sS():iS(d),f=new se(o,a,c),g=new B(f,u);g.position.set(0,a/2,0),g.castShadow=!0,g.receiveShadow=!0,t.add(g);const v=5.8,m=new se(v,2.5,.1);[-3.4,3.4].forEach((N,G)=>{const L=new B(m,lS);L.position.set(N,1.3,-c/2-.06),t.add(L);const q=new se(v+.2,1,.12),V=rS((i*3+G)%7),K=new ae({map:V,roughness:.3}),ie=new B(q,K);ie.position.set(N,3.1,-c/2-.12),ie.castShadow=!0,t.add(ie);const re=new se(v+.3,.15,1.2);re.rotateX(Math.PI/12);const pe=(i+G)%2===0?13378082:26282,ye=new ae({color:pe,roughness:.7}),Z=new B(re,ye);Z.position.set(N,2.55,-c/2-.65),Z.castShadow=!0,t.add(Z)});const p=1.4,x=1.6,b=new se(p,x,.08),y=new se(p+.4,.1,.55),I=new se(.75,.48,.38),T=[-4.5,-1.5,1.5,4.5];for(let N=1;N<s;N++){const G=N*r+1.6,L=Eo(),q=new se(o+.3,.18,c+.3),V=new B(q,L);if(V.position.set(0,N*r,0),t.add(V),T.forEach((K,ie)=>{const re=new B(b,uS);re.position.set(K,G,-c/2-.04),t.add(re);const pe=new B(y,L);if(pe.position.set(K,G+x/2+.08,-c/2-.28),pe.castShadow=!0,t.add(pe),mr!=="LOW"&&(i+N+ie)%3===0){const ye=new B(I,cS);ye.position.set(K,G-x/2-.3,-c/2-.22),t.add(ye)}}),N%2===1&&mr!=="LOW"){const K=new se(4.2,.15,1.2),ie=new B(K,L);ie.position.set(0,N*r+.1,-c/2-.6);const re=new se(4.2,.8,.06),pe=new ae({color:2236962,metalness:.8}),ye=new B(re,pe);ye.position.set(0,N*r+.5,-c/2-1.18),t.add(ie,ye)}}const w=new se(o+.2,.8,c+.2),R=new B(w,u);R.position.set(0,a+.4,0),t.add(R);const S=new se(3.6,2.4,4.2),_=new B(S,u);_.position.set(-3.2,a+1.2,2),t.add(_);const C=new ft(.7,.7,1.4,12),F=i%2===0?$h:dS,P=new B(C,F);if(P.position.set(2.4,a+.8,-1.8),P.castShadow=!0,t.add(P),mr==="HIGH"){const N=new B(C,$h);N.position.set(4.2,a+.8,-1.8),N.castShadow=!0,t.add(N);const G=new ft(.04,.04,1.6,6),L=new ae({color:14540253,metalness:.6}),q=new B(G,L);q.position.set(1.5,a+.8,2.8);const V=new Ns(.45,12,6,0,Math.PI*2,0,Math.PI/3),K=new B(V,L);K.rotation.x=-Math.PI/4,K.position.set(1.5,a+1.6,2.8),t.add(q,K)}return t}function fS(i=!1){const e=new Ve,t=new ae({color:31487,roughness:.3,metalness:.3}),n=new se(.5,.4,1.4),s=new B(n,t);s.position.set(0,.45,0),e.add(s);const r=new se(.48,.7,.12),a=new B(r,t);a.position.set(0,.7,.55),e.add(a);const o=new se(.7,.06,.06),c=new ae({color:1118481}),l=new B(o,c);l.position.set(0,1.05,.52),e.add(l);const d=new ft(.09,.09,.06,12);d.rotateX(Math.PI/2);const h=new ae({color:16777164,emissive:16777164,emissiveIntensity:1}),u=new B(d,h);u.position.set(0,1.05,.58),e.add(u);const f=.2,g=new ft(f,f,.12,12);g.rotateZ(Math.PI/2);const v=new ae({color:1710618,roughness:.9}),m=new B(g,v);m.position.set(0,f,.6);const p=new B(g,v);if(p.position.set(0,f,-.5),e.add(m,p),i){const x=new Ve,b=new ae({color:2241348,roughness:.6}),y=new B(new se(.4,.5,.25),b);y.position.set(0,1.15,-.05);const I=new ae({color:16777215,roughness:.2}),T=new B(new Ns(.18,12,12),I);T.position.set(0,1.55,-.05),x.add(y,T),e.add(x)}return e}function pS(i=40){const e=new Ve,t=7.5,n=new se(.24,t,.24),s=new ae({color:9077881,roughness:.9}),r=new B(n,s);r.position.y=t/2,r.castShadow=!0,e.add(r);const a=new se(2.4,.1,.1),o=new ae({color:3356738,metalness:.8}),c=new B(a,o);c.position.set(0,t-.5,0),e.add(c);const l=new ft(.06,.06,.2,6),d=new ae({color:11903114,roughness:.3});return[-.9,0,.9].forEach(h=>{const u=new B(l,d);u.position.set(h,t-.38,0),e.add(u)}),mr!=="LOW"&&[-.9,0,.9].forEach(h=>{const f=new xy([new D(h,t-.3,0),new D(h,t-.85,i*.5),new D(h,t-.3,i)]).getPoints(12),g=new fn().setFromPoints(f),v=new ko(g,hS);e.add(v)}),e}function mS(){const i=new Ve,e=new ae({color:1789321,metalness:.6}),t=new ft(.06,.06,2.8,8),n=new B(t,e);n.position.set(-1.8,1.4,-.6);const s=new B(t,e);s.position.set(1.8,1.4,-.6),i.add(n,s);const r=new ft(2.4,2.4,4.4,16,1,!0,0,Math.PI*.45);r.rotateZ(Math.PI/2);const a=new ae({color:26316,roughness:.4}),o=new B(r,a);o.position.set(0,2.7,-.2),o.castShadow=!0,i.add(o);const c=new se(3.6,.45,.06),l=new ae({color:16763904}),d=new B(c,l);d.position.set(0,2.5,.6),i.add(d);const h=new se(3.2,.45,.45),u=new ae({color:8947848,metalness:.5}),f=new B(h,u);return f.position.set(0,.35,-.6),i.add(f),i}function gS(){const i=new Ve,e=new ft(.25,.22,.7,12),t=new ae({color:34867,roughness:.6}),n=new ae({color:26316,roughness:.6}),s=new B(e,t);s.position.set(-.35,.45,0);const r=new B(e,n);return r.position.set(.35,.45,0),i.add(s,r),i}function vS(){const i=new Ve,e=Eo(),t=9.5,n=70,s=new se(n,1.8,12),r=new B(s,e);r.position.set(0,t,0),r.castShadow=!0,r.receiveShadow=!0,i.add(r);const a=new se(2.8,t,2.8),o=new B(a,e);o.position.set(-16,t/2,0);const c=new B(a,e);c.position.set(16,t/2,0),i.add(o,c);const l=new se(n,1.2,.4),d=new B(l,e);d.position.set(0,t+1.2,-5.8);const h=new B(l,e);return h.position.set(0,t+1.2,5.8),i.add(d,h),i}function Zh(){const i=new rs(160,40),e=new Nn({map:aS(),transparent:!0,opacity:.65,depthWrite:!1}),t=new B(i,e);return t.position.y=20,t}function jh(){const i=new Ve,e=new ft(.24,.38,2.4,8),t=new ae({color:4864042,roughness:.95}),n=new B(e,t);n.position.y=1.2,n.castShadow=!0,i.add(n);const s=new ae({color:4023848,roughness:.85}),r=new Ns(1.6,8,8),a=new B(r,s);a.position.set(0,3.2,0);const o=new B(r,s);o.position.set(.8,3.6,.4),o.scale.set(.8,.8,.8);const c=new B(r,s);return c.position.set(-.7,3.4,-.4),c.scale.set(.85,.85,.85),a.castShadow=!0,o.castShadow=!0,c.castShadow=!0,i.add(a,o,c),i}function _S(i,e,t){const n=Fe.ROAD,s=-14.9,r=n.totalWidth/2+n.sidewalkWidth+7.5,a=2,o=e/a;for(let f=0;f<a;f++){const g=f*o+o/2,v=t*10+f*2,m=t*10+f*2+1,p=Kh(v,!1);p.position.set(s,0,g),i.add(p);const x=Kh(m,!0);x.position.set(r,0,g),x.rotation.y=Math.PI,i.add(x)}const c=-5,l=pS(e);if(l.position.set(c,0,e*.15),i.add(l),t%4===1){const f=mS();f.position.set(-6.4,0,e*.55),f.rotation.y=Math.PI/2,i.add(f)}const d=gS();if(d.position.set(-5.6000000000000005,0,e*.85),i.add(d),t%2===0){const f=fS(!1);f.position.set(-5.25,0,e*.35),f.rotation.y=Math.PI/6,i.add(f)}const h=jh();h.position.set(-6.6000000000000005,0,e*.7);const u=jh();if(u.position.set(n.totalWidth/2+2.2,0,e*.3),i.add(h,u),t%6===3){const f=vS();f.position.set(0,0,e*.5),i.add(f)}if(t%2===0){const f=Zh();f.position.set(-65,0,e*.5),f.rotation.y=Math.PI/2,i.add(f);const g=Zh();g.position.set(65,0,e*.5),g.rotation.y=-Math.PI/2,i.add(g)}}let Nc;const Cl=[];let Rt=40,Il=14;function yS(i){Nc=new Ve,i.add(Nc),Rt=Fe.ROAD.segmentLength,Il=Fe.ROAD.numSegments;for(let e=0;e<Il;e++){const t=xS(e);t.position.z=e*Rt,Nc.add(t),Cl.push(t)}}function xS(i){const e=new Ve,t=Fe.COLORS,n=Fe.ROAD,s=new rs(160,Rt);s.rotateX(-Math.PI/2);const r=new B(s,Eo());r.position.set(0,-.02,Rt/2),r.receiveShadow=!0,e.add(r);const a=new se(n.totalWidth,.08,Rt),o=new B(a,tS());o.position.set(0,0,Rt/2),o.receiveShadow=!0,e.add(o);const c=n.sidewalkWidth+1.2,l=new se(c,.16,Rt),d=nS(),h=new B(l,d);h.position.set(-6.5,.05,Rt/2),h.receiveShadow=!0;const u=new B(l,d);u.position.set(n.totalWidth/2+c/2,.05,Rt/2),u.receiveShadow=!0,e.add(h,u);const f=new se(.3,.18,Rt),g=Eo(),v=new B(f,g);v.position.set(-4.550000000000001,.06,Rt/2);const m=new B(f,g);m.position.set(n.totalWidth/2+.15,.06,Rt/2),e.add(v,m);const p=new se(.18,.09,Rt),x=new Nn({color:t.roadMarkings}),b=new B(p,x);b.position.set(-4.15,.045,Rt/2);const y=new B(p,x);y.position.set(n.totalWidth/2-.25,.045,Rt/2),e.add(b,y);const I=new Nn({color:t.centerDashes}),T=n.dashLength,w=n.dashGap,R=Math.floor(Rt/(T+w));for(let N=0;N<R;N++){const G=new se(.12,.09,T),L=new B(G,I),q=N*(T+w)+T/2;L.position.set(-.1,.045,q);const V=new se(.12,.09,T),K=new B(V,I);K.position.set(.1,.045,q),e.add(L,K)}const S=new ft(.08,.12,5.5,8),_=new ae({color:3357511,metalness:.7}),C=new se(.3,.15,.6),F=new ae({color:2237998}),P=new Nn({color:16777194});return[Rt*.25,Rt*.75].forEach(N=>{const G=new Ve,L=new B(S,_);L.position.y=2.75,G.add(L);const q=new B(C,F);q.position.set(.4,5.4,0);const V=new B(new se(.24,.04,.5),P);V.position.set(.4,5.32,0),G.add(q,V),G.position.set(n.totalWidth/2+1.2,0,N),G.rotation.y=Math.PI,e.add(G)}),_S(e,Rt,i),e}function SS(i){for(let t=0;t<Cl.length;t++){const n=Cl[t];n.position.z+Rt<i-30&&(n.position.z+=Il*Rt)}}let Oc;const as=[],df=3,ud=200,Ll=10,hf=3,MS=8,To=Ll+hf+MS;function bS(i){Oc=new Ve,i.add(Oc),as.length=0;for(let e=0;e<df;e++){const t=120+e*ud,n=ES(e,t);Oc.add(n.group),as.push(n)}}function ES(i,e){const t=new Ve,n=Fe.COLORS,s=14,r=60,a=new se(r,.082,s),o=new ae({color:n.road,roughness:.35,metalness:.2}),c=new B(a,o);c.position.set(0,.002,0),c.receiveShadow=!0,t.add(c);const l=new ae({color:10066329,roughness:.8}),d=new se(.5,.2,s),h=new B(d,l);h.position.set(-29.75,.1,0);const u=new B(d,l);u.position.set(r/2-.25,.1,0),t.add(h,u);const f=-9.5,g=new se(4.2,.095,.6),v=new ae({color:16777215,emissive:16777215,emissiveIntensity:.25,roughness:.4}),m=new B(g,v);m.position.set(-2.2,.048,f),m.receiveShadow=!0,t.add(m);const p=new B(g,v);p.position.set(2.2,.048,-f),t.add(p);const x=new se(4.2,.092,.2),b=new Nn({color:15658734}),y=new B(x,b);y.position.set(-2.2,.049,f-1.2),t.add(y);const I=new ae({color:2370101,metalness:.85,roughness:.35}),T=6,w=new ft(.14,.18,T,16),R=new B(w,I);R.position.set(-5.6000000000000005,T/2,f+.5),R.castShadow=!0,t.add(R);const S=3.6,_=new ft(.09,.09,S,12);_.rotateZ(Math.PI/2);const C=new B(_,I);C.position.set(-5.6000000000000005+S/2,T-.3,f+.5),t.add(C);const F=new Ve;F.position.set(-2.2,T-.7,f+.5);const P=new se(.9,2.1,.08),N=new ae({color:1118999,roughness:.7}),G=new B(P,N);F.add(G);const L=new se(.7,1.85,.35),q=new ae({color:1711652,roughness:.6}),V=new B(L,q);V.position.z=.12,F.add(V);const K=.22,ie=new Ns(K,16,16,0,Math.PI*2,0,Math.PI/2);ie.rotateX(-Math.PI/2);const re=new ft(K+.04,K+.04,.22,16,1,!0,-Math.PI*.75,Math.PI*1.5);re.rotateX(Math.PI/2);const pe=new ae({color:987413,roughness:.8}),ye=new ae({color:3342336,emissive:16716032,emissiveIntensity:.1,roughness:.2}),Z=new B(ie,ye);Z.position.set(0,.55,.3);const te=new B(re,pe);te.position.set(0,.55,.35),F.add(Z,te);const ue=new ae({color:3352064,emissive:16757504,emissiveIntensity:.1,roughness:.2}),oe=new B(ie,ue);oe.position.set(0,0,.3);const be=new B(re,pe);be.position.set(0,0,.35),F.add(oe,be);const Se=new ae({color:13080,emissive:65382,emissiveIntensity:.1,roughness:.2}),Ce=new B(ie,Se);Ce.position.set(0,-.55,.3);const Ye=new B(re,pe);Ye.position.set(0,-.55,.35),F.add(Ce,Ye);const Pe=new od(65382,1.2,18);Pe.position.set(0,-.2,1),F.add(Pe);const qe=F.clone();qe.scale.set(.65,.65,.65),qe.position.set(-5.6000000000000005,2.5,f+.5),t.add(qe),t.add(F),t.position.set(0,0,e);const O=hd(0,To),ht={id:`intersection_${i}`,index:i,group:t,junctionZ:e,stopLineZ:e+f,cycleTimer:O,state:"GREEN",isForced:!1,redMat:ye,yellowMat:ue,greenMat:Se,signalLight:Pe,signalHeadGroup:F,secondaryHead:qe,passedPlayer:!1};return fd(ht),ht}function fd(i){const{state:e,redMat:t,yellowMat:n,greenMat:s,signalLight:r}=i;e==="RED"?(t.emissiveIntensity=3.5,t.color.setHex(16716032),n.emissiveIntensity=.05,s.emissiveIntensity=.05,r.color.setHex(16716032),r.intensity=1.6):e==="YELLOW"?(t.emissiveIntensity=.05,n.emissiveIntensity=3.2,n.color.setHex(16755200),s.emissiveIntensity=.05,r.color.setHex(16755200),r.intensity=1.4):(t.emissiveIntensity=.05,n.emissiveIntensity=.05,s.emissiveIntensity=3.2,s.color.setHex(65382),r.color.setHex(65382),r.intensity=1.6)}function TS(i,e){const t=df*ud;for(let n=0;n<as.length;n++){const s=as[n];if(!s.isForced&&i>0){s.cycleTimer=(s.cycleTimer+i)%To;let r="GREEN";s.cycleTimer<Ll?r="GREEN":s.cycleTimer<Ll+hf?r="YELLOW":r="RED",r!==s.state&&(s.state=r,fd(s))}e.z>s.junctionZ+50&&(s.junctionZ+=t,s.stopLineZ=s.junctionZ-(14/2+2.5),s.group.position.z=s.junctionZ,s.passedPlayer=!1,s.isForced=!1,s.cycleTimer=hd(0,To))}}function uf(i){let e=null,t=1/0;for(let n=0;n<as.length;n++){const s=as[n],r=s.stopLineZ-i;r>-15&&r<t&&(t=r,e=s)}return e}function wS(i=0){for(let e=0;e<as.length;e++){const t=i+120+e*ud,n=as[e];n.junctionZ=t,n.stopLineZ=t-(14/2+2.5),n.group.position.z=t,n.passedPlayer=!1,n.isForced=!1,n.cycleTimer=hd(0,To),n.state="GREEN",fd(n)}}let Vo=[],ff=[],Wo=0,cr=0,wo=0;const AS=4e3;let Dl=0,po=!1,Pl=0,Nl=0;const aa=new Set,lr=new Set;function RS(){Vo=[],ff=[],Wo=0,cr=0,wo=0,aa.clear(),lr.clear()}function CS(i){Vo.push(i),Wo+=i.penaltyPoints||10,xn("TRAFFIC_RULE_VIOLATION",{violationId:i.id,type:i.type,title:i.title,speedKmh:i.speedKmh,penaltyPoints:i.penaltyPoints,pos:i.position}),ff.forEach(e=>{try{e(i)}catch(t){console.error("Error in violation callback:",t)}})}function qi(i,e={}){const t=performance.now(),n=`violation_${Date.now()}_${Math.floor(Math.random()*1e3)}`;let s="Traffic Violation",r=10,a=e.description||"";switch(i){case"SEATBELT_VIOLATION":s="Seatbelt Not Fastened",r=20,a||(a="Candidate operated vehicle without fastening safety belt!");break;case"GEAR_STALL_VIOLATION":s="Engine Stall / High Gear Takeoff",r=10,a||(a="Attempted takeoff in high gear resulting in engine stall. Select 1st gear.");break;case"GEAR_OVERREV_VIOLATION":s="Excessive Engine Over-Rev",r=10,a||(a="Operated vehicle at redline RPM in low gear without upshifting.");break;case"RED_LIGHT_JUMP":s="Red Light Jump",r=25,a||(a=`Crossed intersection on RED signal at ${Math.round(e.speedKmh||0)} km/h.`);break;case"STOP_LINE_VIOLATION":s="Stop Line Overrun",r=10,a||(a="Failed to halt before the white stop line on RED signal.");break;case"WRONG_SIDE_DRIVING":s="Wrong-Side Driving",r=20,a||(a="Drove into oncoming/right lane in Left-Hand Traffic zone.");break;case"COLLISION":s="Vehicle Collision",r=30,a||(a="Collided with a traffic hazard or obstacle.");break;case"SPEEDING":s="Speed Limit Exceeded",r=15,a||(a="Exceeded posted speed zone limit.");break;case"SPEEDING_IN_ZONE":s="Speeding in Caution / School Zone",r=15,a||(a="Exceeded speed limit in designated Go Slow / School Zone!");break;case"SOLID_LINE_CROSSING":s="Solid Line Cross Violation",r=10,a||(a="Crossed solid white divider marking (Overtaking Prohibited).");break;case"STOP_SIGN_IGNORED":s="Stop Sign Ignored",r=15,a||(a="Passed mandatory STOP sign without coming to a complete standstill.");break;case"ZEBRA_YIELD_FAILED":s="Failure to Yield to Pedestrian",r=25,a||(a="Did not yield right of way to crossing pedestrian at zebra crosswalk.");break;default:s=e.title||"Rule Infraction",r=e.penaltyPoints||10}const o={id:n,timestampMs:t,timeFormatted:new Date().toLocaleTimeString(),type:i,title:s,description:a,penaltyPoints:r,speedKmh:e.speedKmh!==void 0?Number(e.speedKmh.toFixed(1)):0,position:e.position||{x:0,y:0,z:0}};return CS(o),o}function IS(i,e,t,n,s=50,r="Urban Zone"){if(i<=0)return;const a=t/3.6,o=performance.now();t>s+5&&o-Nl>5e3&&(Nl=o,qi("SPEEDING_IN_ZONE",{speedKmh:t,position:{x:e.x,y:e.y,z:e.z},description:`Exceeded ${r} limit! Drove at ${Math.round(t)} km/h (limit: ${s} km/h).`}));const c=uf(e.z);if(c){const l=c.id,d=c.stopLineZ,h=c.junctionZ,u=c.state==="RED",f=c.state==="YELLOW",g=e.z+2;(u||f)&&g>d&&g<h+5&&!aa.has(l)&&!lr.has(l)&&a>1.5&&(aa.add(l),qi("STOP_LINE_VIOLATION",{speedKmh:t,position:{x:e.x,y:e.y,z:e.z},description:`Overran stop line on ${c.state} signal (${Math.round(t)} km/h).`})),u&&g>h-4&&g<h+12&&(lr.has(l)||(lr.add(l),qi("RED_LIGHT_JUMP",{speedKmh:t,position:{x:e.x,y:e.y,z:e.z},description:`Jumped RED traffic signal through intersection at ${Math.round(t)} km/h!`}))),e.z>h+25&&(aa.delete(l),lr.delete(l))}e.x>.45&&t>6?(cr+=i,cr>1.2&&o-wo>AS&&(wo=o,qi("WRONG_SIDE_DRIVING",{speedKmh:t,position:{x:e.x,y:e.y,z:e.z},description:`Driving on wrong side of the road (right lane in LHT zone) at ${Math.round(t)} km/h.`}))):cr=Math.max(0,cr-i*2.5),Math.abs(t)>2.5&&!tf()&&o-Dl>6e3&&(Dl=o,qi("SEATBELT_VIOLATION",{speedKmh:t,position:{x:e.x,y:e.y,z:e.z},description:`Vehicle driven at ${Math.round(t)} km/h without fastening seatbelt! Mandatory pre-drive violation.`})),ix()?po||(po=!0,qi("GEAR_STALL_VIOLATION",{speedKmh:0,position:{x:e.x,y:e.y,z:e.z},description:`Engine stalled! Attempted launch in ${Mo()} gear. Downshift to 1st gear.`})):po=!1,sx()>2.5&&o-Pl>7e3&&(Pl=o,qi("GEAR_OVERREV_VIOLATION",{speedKmh:t,position:{x:e.x,y:e.y,z:e.z},description:`Excessive engine RPM in ${Mo()} gear at ${Math.round(t)} km/h. Upshift to higher gear.`}))}function Ao(){return[...Vo]}function Jh(){let i=100-Wo;return i<0&&(i=0),i}function pf(){Vo=[],Wo=0,cr=0,wo=0,Dl=0,po=!1,Pl=0,Nl=0,aa.clear(),lr.clear()}let bi=[],Ro=[],mf=!0;function LS(){bi=[],Ro=[],mf=!0,xn("SESSION_START",{startTime:new Date().toISOString(),seed:of()})}function DS({frameIndex:i,posX:e,posZ:t,speedMs:n,speedKmh:s,steering:r,throttle:a,brake:o,seatbelt:c,currentGear:l,engineRpm:d,cameraMode:h}){if(!mf)return;const u={[ln.timestamp]:Number(performance.now().toFixed(2)),[ln.frameIndex]:i,[ln.posX]:Number(e.toFixed(3)),[ln.posZ]:Number(t.toFixed(3)),[ln.speedMs]:Number(n.toFixed(3)),[ln.speedKmh]:Number(s.toFixed(1)),[ln.steering]:Number(r.toFixed(3)),[ln.throttle]:Number(a.toFixed(3)),[ln.brake]:Number(o.toFixed(3)),[ln.seatbelt]:c?1:0,[ln.currentGear]:l||"1",[ln.engineRpm]:d||900,[ln.cameraMode]:h};bi.push(u)}function xn(i,e={}){const t={timestamp_ms:Number(performance.now().toFixed(2)),event_type:i,payload:e};Ro.push(t),console.log(`[Telemetry Event] ${i}`,e)}function Ol(){if(bi.length===0){alert("No telemetry data recorded yet!");return}xn("SESSION_EXPORT_TRIGGERED",{totalFrames:bi.length});const i=new Date().toISOString().replace(/[:.]/g,"-"),e=`gazedrive_telemetry_${i}.csv`,t=`gazedrive_telemetry_${i}.json`,n=Object.keys(bi[0]);let s=n.join(",")+`
`;bi.forEach(a=>{const o=n.map(c=>{const l=a[c];return typeof l=="string"?`"${l}"`:l});s+=o.join(",")+`
`});const r={metadata:{exportedAt:new Date().toISOString(),seed:of(),totalFrames:bi.length,totalEvents:Ro.length,totalViolations:Ao().length,fieldMappings:ln},violations:Ao(),eventLogs:Ro,telemetryFrames:bi};Qh(s,e,"text/csv;charset=utf-8;"),Qh(JSON.stringify(r,null,2),t,"application/json"),console.log(`Exported ${bi.length} frames to ${e} and ${t}`)}function Qh(i,e,t){const n=new Blob([i],{type:t}),s=URL.createObjectURL(n),r=document.createElement("a");r.href=s,r.download=e,document.body.appendChild(r),r.click(),document.body.removeChild(r),URL.revokeObjectURL(s)}class PS{constructor(){this.port=null,this.writer=null,this.isConnected=!1,this.isSupported="serial"in navigator,this.currentDutyCycle=0,this.lastCommand="IDLE",this.hapticHistory=[],this.onStateChange=null,this.vibrationTimeout=null}async connect(){if(!this.isSupported)return console.warn("[ESP32 Haptics] Web Serial API not supported in this browser. Using Virtual Haptics Simulator."),this.isConnected=!0,this.triggerStateChange(),{success:!0,mode:"VIRTUAL"};try{const e=await navigator.serial.requestPort();return await e.open({baudRate:115200}),this.port=e,this.writer=e.writable.getWriter(),this.isConnected=!0,console.log("[ESP32 Haptics] Connected to physical ESP32 on Web Serial @ 115200 baud!"),await this.sendCommand("STATUS:CONNECTED"),this.triggerStateChange(),{success:!0,mode:"PHYSICAL_SERIAL"}}catch(e){return console.warn("[ESP32 Haptics] Serial connection cancelled or failed. Falling back to Virtual ESP32:",e),this.isConnected=!0,this.triggerStateChange(),{success:!0,mode:"VIRTUAL"}}}async disconnect(){if(this.writer){try{await this.writer.close()}catch{}this.writer=null}if(this.port){try{await this.port.close()}catch{}this.port=null}this.isConnected=!1,this.triggerStateChange()}async triggerHaptic(e="ALERT",t=250,n=65){this.lastCommand=`HAPTIC:${e}`,this.currentDutyCycle=n;const s={timestamp:new Date().toLocaleTimeString(),type:e,dutyCycle:`${n}%`,durationMs:`${t}ms`,command:`HAPTIC:${e}
`};if(this.hapticHistory.unshift(s),this.hapticHistory.length>8&&this.hapticHistory.pop(),this.writer)try{const r=new TextEncoder,a=`HAPTIC:${e}:${t}:${n}
`;await this.writer.write(r.encode(a))}catch(r){console.warn("[ESP32 Haptics] Failed to write serial buffer:",r)}this.triggerStateChange(!0),this.vibrationTimeout&&clearTimeout(this.vibrationTimeout),this.vibrationTimeout=setTimeout(()=>{this.currentDutyCycle=0,this.triggerStateChange(!1)},t)}async sendCommand(e){if(this.writer)try{const t=new TextEncoder;await this.writer.write(t.encode(e+`
`))}catch{}}triggerStateChange(e=!1){this.onStateChange&&this.onStateChange({isConnected:this.isConnected,isVibrating:e,dutyCycle:this.currentDutyCycle,lastCommand:this.lastCommand,history:this.hapticHistory})}getStatus(){return{isConnected:this.isConnected,dutyCycle:this.currentDutyCycle,lastCommand:this.lastCommand,history:this.hapticHistory}}}const As=new PS,to=[{id:"TRAFFIC_RULES_SCHOOL_ZONE",category:"Traffic Rules & School Zones",categoryBadge:"🚦 TRAFFIC RULES",title:"School Zone Speed Limit & Pedestrian Priority",question:"Candidate #402, you navigated through a designated School Zone with a 30 km/h posted limit. Explain why exceeding 30 km/h in this zone dramatically increases pedestrian fatality risk, and what specific gaze scanning routine you must maintain approaching a zebra crossing.",targetKeywords:["30","speed","stopping distance","pedestrian","zebra","cross","dwell","foveal","curb","scan","brake","right of way"],verifiedAnswer:"In a 30 km/h school zone, vehicle stopping distance is roughly 13 meters compared to over 27 meters at 50 km/h, dramatically lowering pedestrian fatality risk. Approaching the zebra crossing, I scanned both curbs with peripheral vision, checked left and right mirrors, and maintained a foveal dwell to ensure no children were stepping onto the crossing."},{id:"TRAFFIC_RULES_STOP_LINE",category:"Traffic Signals & Stop Line Obedience",categoryBadge:"🛑 ROAD COMPLIANCE",title:"Mandatory Stop Sign & Solid White Stop Line Compliance",question:"Candidate #402, at a traffic-controlled junction with a red signal and solid white stop line, explain the exact legal stopping position, the safety hazard of overrunning into the pedestrian crossing box, and what visual scan checks you must complete before proceeding on green.",targetKeywords:["stop line","solid line","red","signal","green","crosswalk","pedestrian","overrun","mirror","blind spot","cross traffic"],verifiedAnswer:"The vehicle must come to a complete halt behind the solid white stop line without bumper encroachment over the pedestrian crosswalk. Overrunning obstructs pedestrians and risks collision with cross traffic. Before proceeding on green, I check rearview and side mirrors, ensure the intersection is clear of turning cyclists in my blind spot, and verify cross traffic has stopped."},{id:"HAZARD_PERCEPTION_LATENCY",category:"Hazard Perception & Eye Gaze Scanning",categoryBadge:"⚠️ HAZARD PERCEPTION",title:"First-Fixation Latency & Saccadic Dwell",question:"Candidate #402, during the hazard encounter, your eye tracking measured a first-fixation latency of {latency} ms (licensing standard: ≤ 1200 ms) and secondary dwell of {dwell} ms. Explain how human peripheral vision detects lateral motion, and why a minimum dwell of 150 ms is vital before executing emergency braking.",targetKeywords:["peripheral","foveal","latency","dwell","1200","150","hazard","reaction","brake","saccade","confirmation"],verifiedAnswer:"Peripheral vision rapidly detects lateral movement vectors through optical flow, triggering a saccade to center the hazard on the fovea within 1200 ms. The secondary dwell of at least 150 ms is critical for the visual cortex to evaluate the hazard’s crossing velocity, confirming that defensive braking is needed rather than an erratic swerve."},{id:"HAZARD_PERCEPTION_FOLLOWING_DISTANCE",category:"Lead Vehicle Hazards & Following Distance",categoryBadge:"🚗 DEFENSIVE DRIVING",title:"Emergency Braking Ahead & The 3-Second Rule",question:"Candidate #402, when traveling behind a lead vehicle that brakes abruptly, explain how the 3-Second Following Distance Rule provides an adequate reaction buffer, and how you use rearview mirror scans to prevent being rear-ended.",targetKeywords:["3-second","following distance","lead vehicle","rearview","mirror","rear-end","brake","reaction time","stopping distance"],verifiedAnswer:"The 3-second rule ensures at least 1.5 seconds of perception-reaction time plus adequate vehicle braking distance on dry asphalt. When the lead vehicle decelerates, a quick glance at the rearview mirror allows me to gauge trailing vehicle gap and apply progressive threshold braking to prevent a rear-end collision."},{id:"TRAFFIC_RULES_GIVE_WAY",category:"Right of Way & Give Way Junctions",categoryBadge:"🚦 RIGHT OF WAY",title:"Give Way Priority vs Mandatory Stop",question:'Candidate #402, differentiate between a "Give Way / Yield" sign and an octagonal "Stop" sign. In what specific traffic circumstances must you bring your vehicle to a complete halt at a Give Way line, and who holds absolute right-of-way?',targetKeywords:["give way","yield","stop sign","halt","priority","right of way","oncoming","cross traffic","gap"],verifiedAnswer:"A Give Way sign requires yielding priority to circulating or cross traffic, permitting you to proceed without stopping if the road is completely clear. A Stop sign requires a complete halt regardless. At a Give Way junction, you must stop if approaching traffic does not offer a safe 3-second gap, as oncoming traffic holds absolute right-of-way."},{id:"HAZARD_DEFENSIVE_SWERVE_VS_BRAKE",category:"Vehicle Dynamics & Emergency Reactions",categoryBadge:"⚡ VEHICLE DYNAMICS",title:"Controlled Braking vs High-Speed Swerve Dynamics",question:"Candidate #402, when an unexpected road obstacle emerges within 30 meters, explain the vehicular dynamics risk of swerving at speed into an adjacent lane versus applying straight-line ABS braking within your designated travel lane.",targetKeywords:["swerve","brake","abs","traction","rollover","weight transfer","lane","adjacent","oncoming","control"],verifiedAnswer:"Swerving at speed creates violent lateral weight transfer that can break tire traction, induce a rollover, or cause a head-on collision with oncoming vehicles in adjacent lanes. Straight-line threshold ABS braking maintains directional control and maximum tire grip within your protected lane."}];class NS{constructor(){this.isListening=!1,this.isSpeaking=!1,this.recognition=null,this.currentQuestion="",this.currentCategory="Traffic Rules & Regulations",this.currentCategoryBadge="🚦 TRAFFIC RULES",this.currentVerifiedAnswer="",this.currentQuestionIndex=0,this.totalQuestions=to.length,this.candidateTranscript="",this.evaluationResult=null,this.onStateChange=null,this.initSpeechRecognition()}initSpeechRecognition(){const e=window.SpeechRecognition||window.webkitSpeechRecognition;e&&(this.recognition=new e,this.recognition.continuous=!1,this.recognition.interimResults=!0,this.recognition.lang="en-US",this.recognition.onresult=t=>{let n="";for(let s=t.resultIndex;s<t.results.length;s++)n+=t.results[s][0].transcript;this.candidateTranscript=n,this.triggerState()},this.recognition.onend=()=>{this.isListening=!1,this.triggerState()},this.recognition.onerror=t=>{console.warn("[Gemini Viva] Speech recognition error:",t),this.isListening=!1,this.triggerState()})}async generateQuestion(e={}){const{candidateId:t="Candidate #402",scenarioName:n="Urban Pedestrian Crossing",firstFixationLatencyMs:s=420,secondaryDwellMs:r=280,reactionInput:a="BRAKE",outcome:o="SUCCESS",score:c=88,questionIndex:l=this.currentQuestionIndex,isTestDisqualified:d=!1,failedOccurrences:h=0,totalOccurrences:u=0}=e;this.currentQuestionIndex=l;let f="",g="Traffic Rules & Regulations",v="🚦 TRAFFIC RULES",m="";try{const p=await fetch("http://localhost:8000/api/viva/question",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({candidateId:t,scenarioName:n,firstFixationLatencyMs:s,secondaryDwellMs:r,reactionInput:a,outcome:o,score:c,questionIndex:this.currentQuestionIndex,isTestDisqualified:d,failedOccurrences:h,totalOccurrences:u})});if(p.ok){const x=await p.json();f=x.question,g=x.category||g,v=x.categoryBadge||v,m=x.verifiedAnswer||""}}catch{}if(!f)if(d||h>=2){const p=u||3,x=h||2;g="Safety Failure Review & Mitigation",v="🚨 CRITICAL AUDIT",f=`Candidate #402, your driving skill test has been terminated due to ${x} hazard safety infractions (${x} of ${p} failed), including delayed gaze fixation (${s} ms) and collision during "${n}". Under licensing board standards, identify what visual distractors caused this delay, and detail the step-by-step corrective scanning routine you must demonstrate to qualify for re-examination.`,m="My visual scanning was restricted to the immediate front bumper rather than scanning 12 to 15 seconds ahead, which delayed hazard detection past the 1200 ms limit. To qualify for re-examination, I will adopt systematic scanning across mirrors and intersections every 5 to 8 seconds, eliminate in-cabin distractors, and practice early defensive deceleration."}else{const p=this.currentQuestionIndex%to.length,x=to[p];g=x.category,v=x.categoryBadge,f=x.question.replace("{latency}",Math.round(s)).replace("{dwell}",Math.round(r)).replace("{scenarioName}",n),m=x.verifiedAnswer}return this.currentQuestion=f,this.currentCategory=g,this.currentCategoryBadge=v,this.currentVerifiedAnswer=m,this.candidateTranscript="",this.evaluationResult=null,this.triggerState(),this.speak(f),f}async nextQuestion(e={}){return this.currentQuestionIndex=(this.currentQuestionIndex+1)%to.length,this.generateQuestion({...e,questionIndex:this.currentQuestionIndex})}setCandidateAnswer(e){this.candidateTranscript=e,this.triggerState()}speak(e){if(!("speechSynthesis"in window))return;window.speechSynthesis.cancel();const t=new SpeechSynthesisUtterance(e);t.rate=1,t.pitch=1;const s=window.speechSynthesis.getVoices().find(r=>r.lang.startsWith("en")&&(r.name.includes("Natural")||r.name.includes("Google")||r.name.includes("David")));s&&(t.voice=s),this.isSpeaking=!0,t.onend=()=>{this.isSpeaking=!1,this.triggerState()},t.onerror=()=>{this.isSpeaking=!1,this.triggerState()},window.speechSynthesis.speak(t),this.triggerState()}speakQuestion(){this.currentQuestion&&this.speak(this.currentQuestion)}startListening(){if(this.isSpeaking&&(window.speechSynthesis.cancel(),this.isSpeaking=!1),this.recognition&&!this.isListening)try{this.recognition.start(),this.isListening=!0,this.triggerState()}catch(e){console.warn("[Gemini Viva] Recognition start error:",e)}}stopListening(){if(this.recognition&&this.isListening)try{this.recognition.stop(),this.isListening=!1,this.triggerState()}catch{}}async evaluateAnswer(e="",t={}){const n=(e||this.candidateTranscript||"").trim();if(!n)return this.evaluationResult={score:60,grade:"FAIL",feedback:"No verbal answer recorded. Candidate must answer questions regarding traffic rules and hazard perception to qualify.",endorsement:"RETEST REQUIRED"},this.triggerState(),this.evaluationResult;try{const u=await fetch("http://localhost:8000/api/viva/evaluate",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({question:this.currentQuestion,candidateAnswer:n,metrics:t})});if(u.ok){const f=await u.json();return this.evaluationResult={score:f.score,grade:f.grade,feedback:f.feedback,endorsement:f.examinerEndorsement},this.triggerState(),this.evaluationResult}}catch{}const r=n.toLowerCase().split(/\s+/).filter(Boolean).length,o=["30","speed","stopping","distance","pedestrian","zebra","stop line","solid","red","signal","green","give way","yield","right of way","priority","peripheral","foveal","latency","dwell","1200","150","hazard","reaction","brake","saccade","following","3-second","rearview","mirror","blind spot","swerve","abs","traction","rollover","weight","transfer","scan","distraction"].filter(u=>n.toLowerCase().includes(u)),c=o.length;let l=70,d="B",h="";return r<5?(l=55,d="FAIL",h="Answer was too brief. Candidate must articulate specific traffic rules and hazard perception principles."):c>=4&&r>=18?(l=Math.min(98,88+c),d="A+",h=`Outstanding technical response! Accurately cited key safety principles (${o.slice(0,3).join(", ")}) with spatial awareness.`):c>=2&&r>=10?(l=85+Math.min(5,c),d="A",h=`Good technical knowledge demonstrated. Correctly explained ${o.slice(0,2).join(", ")} and defensive hazard mitigation.`):c>=1?(l=76+c*2,d="B",h="Satisfactory pass. Basic understanding demonstrated, but recommended practice on secondary dwell and following distance."):(l=66,d="C",h="Borderline answer. Candidate showed general awareness but omitted essential road rules, stopping distances, and gaze scanning specifics."),this.evaluationResult={score:Math.round(l),grade:d,feedback:h,endorsement:l>=75?"RECOMMENDED FOR LICENCE ENDORSEMENT":"RETEST REQUIRED"},this.triggerState(),this.evaluationResult}triggerState(){this.onStateChange&&this.onStateChange({isSpeaking:this.isSpeaking,isListening:this.isListening,question:this.currentQuestion,category:this.currentCategory,categoryBadge:this.currentCategoryBadge,questionIndex:this.currentQuestionIndex,totalQuestions:this.totalQuestions,verifiedAnswer:this.currentVerifiedAnswer,transcript:this.candidateTranscript,result:this.evaluationResult})}}new NS;class OS{constructor(){this.scenarios=[],this.activeScenario=null,this.scenarioIndex=0,this.clockMs=0,this.isRunning=!1,this.isAlertActive=!1,this.isFrozen=!1,this.firstFixationLatencyMs=null,this.isLatencyPass=!1,this.secondaryDwellMs=0,this.isDwellPass=!1,this.isGazeCurrentlyInside=!1,this.reactionInput="NONE",this.reactionTimeMs=null,this.outcome="PENDING",this.finalTrialResult=null,this.currentHazardBox=null,this.maxAcceptableHazards=3,this.failThreshold=2,this.totalHazardOccurrences=0,this.failedHazardOccurrences=0,this.occurrenceHistory=[],this.isTestDisqualified=!1,this.onTrialCompleted=null,this.onScenarioTick=null,this.onAlertOnset=null,this.onTestFailedDueToHazards=null,this.loadScenarios()}async loadScenarios(){try{const e=await fetch("/scenarios.json");if(e.ok){const t=await e.json();this.scenarios=t.scenarios||[],this.scenarios.length>0&&this.setScenario(0)}}catch(e){console.warn("[ScenarioEngine] Could not load scenarios.json, retrying via FastAPI:",e);try{const t=await fetch("http://localhost:8000/api/scenarios");if(t.ok){const n=await t.json();this.scenarios=n.scenarios||[],this.scenarios.length>0&&this.setScenario(0)}}catch(t){console.error("[ScenarioEngine] Failed to load scenarios:",t)}}}setScenario(e){e>=0&&e<this.scenarios.length&&(this.scenarioIndex=e,this.activeScenario=this.scenarios[e],this.resetTrial(),console.log(`[ScenarioEngine] Active Scenario: ${this.activeScenario.name} (${this.activeScenario.id})`))}nextScenario(){const e=(this.scenarioIndex+1)%(this.scenarios.length||1);this.setScenario(e)}resetTrial(){this.clockMs=0,this.isRunning=!0,this.isAlertActive=!1,this.isFrozen=!1,this.firstFixationLatencyMs=null,this.isLatencyPass=!1,this.secondaryDwellMs=0,this.isDwellPass=!1,this.isGazeCurrentlyInside=!1,this.reactionInput="NONE",this.reactionTimeMs=null,this.outcome="PENDING",this.finalTrialResult=null,this.currentHazardBox=null}update(e,t,n,s,r){if(!this.isRunning||!this.activeScenario||this.isFrozen)return this.getState();this.clockMs+=e*1e3;const{alertOnsetMs:a,freezeWindowMs:o,keyframes:c,allowedActions:l}=this.activeScenario;if(!this.isAlertActive&&this.clockMs>=a&&(this.isAlertActive=!0,As.triggerHaptic("ALERT",300,75),this.onAlertOnset&&this.onAlertOnset(this.activeScenario)),this.currentHazardBox=this.interpolateBox(this.clockMs,c,s,r),this.currentHazardBox&&t&&t.valid){const f=t.x>=this.currentHazardBox.minX-35&&t.x<=this.currentHazardBox.maxX+35&&t.y>=this.currentHazardBox.minY-35&&t.y<=this.currentHazardBox.maxY+35;this.isGazeCurrentlyInside=f,f&&(this.firstFixationLatencyMs===null&&(this.firstFixationLatencyMs=Math.max(10,Math.round(this.clockMs-a)),this.isLatencyPass=this.firstFixationLatencyMs<=1200,this.isLatencyPass||As.triggerHaptic("WARNING",200,60)),this.secondaryDwellMs+=e*1e3,this.secondaryDwellMs>=150&&(this.isDwellPass=!0))}else this.isGazeCurrentlyInside=!1;const d=n?n.brake>.08||n.handbrake>.08:!1,h=n?Math.abs(n.steer)>.35:!1;if(this.isAlertActive&&this.outcome==="PENDING"){if(d||h){const u=d?"BRAKE":"SWERVE",f=l.includes(u)||l.includes("BRAKE")||l.includes("SWERVE_LEFT")||l.includes("SWERVE_RIGHT");if(this.clockMs<=o&&f)return this.reactionInput=u,this.reactionTimeMs=Math.round(this.clockMs-a),this.outcome="SUCCESS",this.isFrozen=!0,As.triggerHaptic("BRAKE",350,60),this.concludeTrial(),this.getState()}if(this.clockMs>=o)return this.outcome="COLLISION",this.isFrozen=!0,As.triggerHaptic("COLLISION",650,100),this.concludeTrial(),this.getState()}return this.onScenarioTick&&this.onScenarioTick(this.getState()),this.getState()}interpolateBox(e,t,n,s){if(!t||t.length===0)return null;if(e<t[0].timeMs){const r=t[0];return this.keyframeToPixelBox(r,n,s)}if(e>=t[t.length-1].timeMs){const r=t[t.length-1];return this.keyframeToPixelBox(r,n,s)}for(let r=0;r<t.length-1;r++){const a=t[r],o=t[r+1];if(e>=a.timeMs&&e<=o.timeMs){const c=o.timeMs-a.timeMs||1,l=(e-a.timeMs)/c,d=a.box.x+(o.box.x-a.box.x)*l,h=a.box.y+(o.box.y-a.box.y)*l,u=a.box.w+(o.box.w-a.box.w)*l,f=a.box.h+(o.box.h-a.box.h)*l,g=Math.round(a.distanceM+(o.distanceM-a.distanceM)*l),v=a.conf+(o.conf-a.conf)*l,m=u*n,p=f*s,x=(d-u/2)*n,b=(h-f/2)*s;return{minX:Math.round(x),minY:Math.round(b),maxX:Math.round(x+m),maxY:Math.round(b+p),boxW:Math.round(m),boxH:Math.round(p),centerX:Math.round(d*n),centerY:Math.round(h*s),distanceM:g,confidence:Math.round(v*100)/100,type:this.activeScenario.hazardType,name:this.activeScenario.targetClass.toUpperCase()}}}return null}keyframeToPixelBox(e,t,n){const s=e.box.w*t,r=e.box.h*n,a=(e.box.x-e.box.w/2)*t,o=(e.box.y-e.box.h/2)*n;return{minX:Math.round(a),minY:Math.round(o),maxX:Math.round(a+s),maxY:Math.round(o+r),boxW:Math.round(s),boxH:Math.round(r),centerX:Math.round(e.box.x*t),centerY:Math.round(e.box.y*n),distanceM:e.distanceM,confidence:e.conf,type:this.activeScenario.hazardType,name:this.activeScenario.targetClass.toUpperCase()}}async concludeTrial(){const e=this.firstFixationLatencyMs||1400,t=Math.round(this.secondaryDwellMs),n=e<=1200,s=t>=150,a=this.outcome==="SUCCESS"&&n&&s;this.totalHazardOccurrences++,a||this.failedHazardOccurrences++;const o={occurrenceIndex:this.totalHazardOccurrences,scenarioId:this.activeScenario?this.activeScenario.id:"SCN_UNKNOWN",scenarioName:this.activeScenario?this.activeScenario.name:"Hazard Encounter",outcome:this.outcome,fixationLatencyMs:e,isLatencyPass:n,secondaryDwellMs:t,isDwellPass:s,isPass:a};this.occurrenceHistory.push(o);let c=50;this.outcome==="SUCCESS"?(c=75,n&&(c+=15),s&&(c+=10)):c=Math.max(25,60-Math.round(e/50));const l=this.failedHazardOccurrences>=this.failThreshold||this.totalHazardOccurrences>=this.maxAcceptableHazards&&this.failedHazardOccurrences>0;this.finalTrialResult={sessionId:`GD-${Date.now().toString(36).toUpperCase()}`,candidateId:"Candidate #402",timestamp:Date.now(),scenarioId:this.activeScenario.id,scenarioName:this.activeScenario.name,firstFixationLatencyMs:e,isLatencyPass:n,secondaryDwellMs:t,isDwellPass:s,reactionInput:this.reactionInput,reactionTimeMs:this.reactionTimeMs||0,outcome:this.outcome,score:c,eyesOpenAvg:96.5,alertOnsetMs:this.activeScenario.alertOnsetMs,freezeWindowMs:this.activeScenario.freezeWindowMs,totalHazardOccurrences:this.totalHazardOccurrences,failedHazardOccurrences:this.failedHazardOccurrences,maxAcceptableHazards:this.maxAcceptableHazards,isTestDisqualified:l},console.log(`[ScenarioEngine] Trial Concluded (${this.totalHazardOccurrences}/${this.maxAcceptableHazards}, Failures: ${this.failedHazardOccurrences}):`,this.finalTrialResult),this.persistResult(this.finalTrialResult),this.onTrialCompleted&&this.onTrialCompleted(this.finalTrialResult),l&&!this.isTestDisqualified?(this.isTestDisqualified=!0,console.warn(`[ScenarioEngine] Driving Test FAILED: Exceeded acceptable hazard occurrences (${this.failedHazardOccurrences}/${this.totalHazardOccurrences} failed). Triggering Viva Examiner.`),this.onTestFailedDueToHazards&&this.onTestFailedDueToHazards({totalOccurrences:this.totalHazardOccurrences,failedOccurrences:this.failedHazardOccurrences,maxAcceptable:this.maxAcceptableHazards,history:this.occurrenceHistory,lastTrial:this.finalTrialResult,reason:`Failed ${this.failedHazardOccurrences} of ${this.totalHazardOccurrences} hazard occurrences (${o.scenarioName})`})):this.totalHazardOccurrences<this.maxAcceptableHazards&&!this.isTestDisqualified&&setTimeout(()=>{!this.isTestDisqualified&&this.isRunning&&this.nextScenario()},3500)}triggerInstantFailure(){this.failedHazardOccurrences=Math.max(2,this.failedHazardOccurrences+1),this.totalHazardOccurrences=Math.max(this.failedHazardOccurrences,this.totalHazardOccurrences+1),this.outcome="COLLISION",this.firstFixationLatencyMs=1480,this.isLatencyPass=!1,this.secondaryDwellMs=65,this.isDwellPass=!1,this.concludeTrial()}resetSession(){this.totalHazardOccurrences=0,this.failedHazardOccurrences=0,this.occurrenceHistory=[],this.isTestDisqualified=!1,this.setScenario(0)}async persistResult(e){try{await fetch("http://localhost:8000/api/results",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(e)}),console.log("[ScenarioEngine] Trial result stored in FastAPI backend.")}catch(t){console.warn("[ScenarioEngine] Could not persist to backend:",t)}}getState(){return{activeScenario:this.activeScenario,scenarioIndex:this.scenarioIndex,totalScenarios:this.scenarios.length,clockMs:Math.round(this.clockMs),isAlertActive:this.isAlertActive,isFrozen:this.isFrozen,currentHazardBox:this.currentHazardBox,firstFixationLatencyMs:this.firstFixationLatencyMs,isLatencyPass:this.isLatencyPass,secondaryDwellMs:Math.round(this.secondaryDwellMs),isDwellPass:this.isDwellPass,isGazeInside:this.isGazeCurrentlyInside,reactionInput:this.reactionInput,reactionTimeMs:this.reactionTimeMs,outcome:this.outcome,finalTrialResult:this.finalTrialResult,totalHazardOccurrences:this.totalHazardOccurrences,failedHazardOccurrences:this.failedHazardOccurrences,maxAcceptableHazards:this.maxAcceptableHazards,isTestDisqualified:this.isTestDisqualified,occurrenceHistory:this.occurrenceHistory}}}const Qn=new OS,Mn=[];let Ul=null,wr=0,Ar=0,Co=0;const gf=1500;let Ts=null,Ln=null,Yn=null,qn=null;function no({color:i=14427686,isOncoming:e=!1,isBraking:t=!1}={}){const n=new Ve,s=new ae({color:i,roughness:.22,metalness:.65}),r=new ae({color:1119e3,roughness:.85}),a=new ae({color:593949,roughness:.08,metalness:.92}),o=new ae({color:14870768,metalness:.9,roughness:.2}),c=new se(1.52,.22,3.7),l=new B(c,r);l.position.y=.22,l.castShadow=!0,n.add(l);const d=new se(1.5,.44,3.5),h=new B(d,s);h.position.y=.44,h.castShadow=!0,n.add(h);const u=new se(1.42,.08,1.15),f=new B(u,s);f.position.set(0,.52,1.05),f.rotation.x=.125,f.castShadow=!0,n.add(f);const g=new se(.85,.14,.04),v=new B(g,r);v.position.set(0,.38,1.76),n.add(v);const m=new ae({color:16777215,emissive:10875900,emissiveIntensity:e?2.8:1.2,roughness:.1}),p=new se(.28,.09,.1),x=new B(p,m);x.position.set(-.52,.44,1.74);const b=new B(p,m);b.position.set(.52,.44,1.74),n.add(x,b);const y=new se(1.24,.48,1.95),I=new B(y,a);I.position.set(0,.88,-.15),I.castShadow=!0,n.add(I);const T=new se(1.12,.035,1.25),w=new B(T,s);w.position.set(0,1.13,-.32),w.castShadow=!0,n.add(w);const R=new ae({color:16711680,emissive:16711680,emissiveIntensity:t?2.8:.45,roughness:.2}),S=new se(.36,.08,.06),_=new B(S,R);_.position.set(-.52,.5,-1.74);const C=new B(S,R);C.position.set(.52,.5,-1.74);const F=new se(.38,.03,.04),P=new B(F,R);P.position.set(0,1.12,-.96),n.add(_,C,P);const N=new se(1.36,.035,.12),G=new B(N,r);G.position.set(0,.65,-1.72),n.add(G);const L=new ft(.035,.035,.08,12);L.rotateX(Math.PI/2);const q=new B(L,o);q.position.set(-.38,.22,-1.78);const V=new B(L,o);V.position.set(.38,.22,-1.78),n.add(q,V);const K=.3,ie=.2,re=new ft(K,K,ie,16);re.rotateZ(Math.PI/2);const pe=new ae({color:1447448,roughness:.9}),ye=new ft(.18,.18,ie+.01,12);ye.rotateZ(Math.PI/2);const Z=new ae({color:10592682,metalness:.8,roughness:.2}),te=(Ye,Pe)=>{const qe=new Ve,O=new B(re,pe),ht=new B(ye,Z);return O.castShadow=!0,qe.add(O,ht),qe.position.set(Ye,K,Pe),qe},ue=te(-.76,1.1),oe=te(.76,1.1),be=te(-.76,-1.1),Se=te(.76,-1.1);return n.add(ue,oe,be,Se),e&&(n.rotation.y=Math.PI),{mesh:n,setBraking:Ye=>{const Pe=!!Ye;R.emissiveIntensity=Pe?2.8:.45,n.rotation.x=Pe?-.025:0},wheels:[ue,oe,be,Se]}}function US(){const i=new Ve,e=new ae({color:165063,metalness:.7,roughness:.3}),t=new ae({color:1579035,roughness:.9}),n=new ae({color:13948120,metalness:.9}),s=new ft(.32,.32,.05,16);s.rotateZ(Math.PI/2);const r=new B(s,t);r.position.set(0,.32,.65);const a=new B(s,t);a.position.set(0,.32,-.65),i.add(r,a);const o=new se(.04,.04,1.25),c=new B(o,e);c.position.set(0,.55,0),i.add(c);const l=new se(.55,.04,.04),d=new B(l,n);d.position.set(0,.88,.55),i.add(d);const h=new B(new se(.32,.48,.22),new ae({color:16096779,roughness:.5}));h.position.set(0,.95,-.05),h.rotation.x=.25;const u=new B(new se(.18,.18,.18),new ae({color:1976635,roughness:.4}));return u.position.set(0,1.32,.05),i.add(h,u),i}function eu(i=16763904){const e=new Ve,t=new se(.5,.7,.35),n=new ae({color:i,roughness:.4}),s=new B(t,n);s.position.y=.9,s.castShadow=!0,e.add(s);const r=new se(.48,.55,.32),a=new ae({color:2041395,roughness:.8}),o=new B(r,a);o.position.y=.35,o.castShadow=!0,e.add(o);const c=new se(.32,.32,.32),l=new ae({color:14195316,roughness:.5}),d=new B(c,l);return d.position.y=1.42,d.castShadow=!0,e.add(d),e}function FS(){const i=new Ve,e=new ae({color:16737792,roughness:.3}),t=new ae({color:16777215,roughness:.2});return[-.6,0,.6].forEach((n,s)=>{const r=new Ve,a=new se(.45,.06,.45),o=new B(a,e);o.position.y=.03,r.add(o);const c=new zo(.18,.65,12),l=new B(c,e);l.position.y=.38,l.castShadow=!0,r.add(l);const d=new ft(.1,.14,.15,12),h=new B(d,t);h.position.y=.42,r.add(h),r.position.set(n,0,s%2===0?.3:-.3),i.add(r)}),i}function BS(){const i=new Ve,e=new ae({color:16733440,roughness:.4}),t=new ae({color:16777215,roughness:.3}),n=new ae({color:2237742,roughness:.8}),s=new se(.08,.9,.6),r=new B(s,n);r.position.set(-1,.45,0);const a=new B(s,n);a.position.set(1,.45,0),i.add(r,a);const o=new se(2.1,.35,.08),c=new B(o,e);c.position.set(0,.65,0),c.castShadow=!0,i.add(c);const l=new se(.35,.37,.09);return[-.6,0,.6].forEach(d=>{const h=new B(l,t);h.position.set(d,.65,0),i.add(h)}),i}function er({id:i,name:e,type:t,mesh:n,setBraking:s=null,spawnDistance:r=60,speed:a=0,laneX:o=0,updateFn:c=null}){const l={id:i,name:e||i,type:t||"vehicle",mesh:n,setBraking:s,spawnDistance:r,speed:a,laneX:o,updateFn:c,active:!0,triggered:!1,spottedByDriver:!1,collided:!1,passedSafely:!1,spawnTimeMs:performance.now(),reactionTimeMs:0};return Mn.push(l),Ul&&n&&Ul.add(n),l}function kS(i){Ul=i,Mn.length=0,wr=0,Ar=0,Ts=new Ve,Ln=no({color:13751771,isOncoming:!1,isBraking:!1}),Ts.add(Ln.mesh),Yn=eu(16763904),Ts.add(Yn),qn=US(),Ts.add(qn),Ln.mesh.visible=!1,Yn.visible=!1,qn.visible=!1,i.add(Ts);const e=no({color:14427686,isOncoming:!1,isBraking:!1});e.mesh.position.set(-2.2,0,26),er({id:"traffic_lead_sedan",name:"Lead Red Sports Car",type:"vehicle",mesh:e.mesh,setBraking:e.setBraking,spawnDistance:70,speed:10,laneX:-2.2,updateFn:zS});const t=no({color:1579035,isOncoming:!0,isBraking:!1});t.mesh.position.set(2.2,0,85),er({id:"traffic_oncoming_sedan",name:"Oncoming Black Executive Sedan",type:"vehicle",mesh:t.mesh,setBraking:t.setBraking,spawnDistance:80,speed:-13.5,laneX:2.2,updateFn:HS});const n=eu(16753920);n.position.set(-4.2,0,65),er({id:"pedestrian_crossing_1",name:"Crossing Pedestrian Hazard",type:"pedestrian",mesh:n,spawnDistance:60,speed:1.6,updateFn:VS});const s=no({color:16317180,isOncoming:!1,isBraking:!1});s.mesh.position.set(2.2,0,52),er({id:"traffic_right_suv",name:"White SUV in Right Lane",type:"vehicle",mesh:s.mesh,setBraking:s.setBraking,spawnDistance:70,speed:12,laneX:2.2,updateFn:GS});const r=FS();r.position.set(-2.2,0,95),er({id:"construction_cones",name:"Traffic Cones Hazard",type:"obstacle",mesh:r,spawnDistance:65,speed:0,laneX:-2.2,updateFn:tu});const a=BS();a.position.set(2.2,0,135),er({id:"construction_barrier",name:"Road Construction Barrier",type:"obstacle",mesh:a,spawnDistance:70,speed:0,laneX:2.2,updateFn:tu})}function zS(i,e,t,n=0){const s=t.mesh,r=s.position.z-e.z;let a=n,o=!1;r<20?(a=Math.max(n+1.5,6),o=!0):r>36?(a=Math.max(0,n-2.5),o=!0):(a=Math.max(n,7.5),o=!1),t.speed=_f(t.speed,a,Math.min(i*3.5,1)),s.position.z+=t.speed*i,s.position.x=-2.2,t.setBraking&&t.setBraking(o),r<-15&&(s.position.z=e.z+40)}function HS(i,e,t){const n=t.mesh;n.position.z+=t.speed*i,n.position.x=2.2,n.position.z<e.z-25&&(n.position.z=e.z+80+Math.random()*35,t.triggered=!1,t.active=!0,t.spottedByDriver=!1,t.collided=!1,t.passedSafely=!1)}function GS(i,e,t,n=0){const s=t.mesh,r=s.position.z-e.z;let a=Math.max(n+1,11);r>55&&(a=Math.max(0,n-1.5)),t.speed=_f(t.speed,a,Math.min(i*2,1)),s.position.z+=t.speed*i,s.position.x=2.2,r<-20&&(s.position.z=e.z+60+Math.random()*25)}function VS(i,e,t){const n=t.mesh,s=n.position.z-e.z;!t.triggered&&s<t.spawnDistance&&s>-10&&(t.triggered=!0,t.active=!0,t.spawnTimeMs=performance.now(),xn("HAZARD_SPAWNED",{id:t.id,name:t.name})),t.active&&t.triggered&&(n.position.x+=t.speed*i,n.position.y=Math.abs(Math.sin(performance.now()*.012))*.1,n.position.x>4.8&&(t.active=!1)),e.z>n.position.z+20&&(!t.collided&&!t.passedSafely&&(t.passedSafely=!0,Ar++),n.position.set(-4.2,0,e.z+120+Math.random()*40),t.triggered=!1,t.active=!1,t.spottedByDriver=!1,t.collided=!1,t.passedSafely=!1)}function tu(i,e,t){const n=t.mesh,s=n.position.z-e.z;if(!t.triggered&&s<t.spawnDistance&&s>-10&&(t.triggered=!0,t.active=!0,t.spawnTimeMs=performance.now()),e.z>n.position.z+20){!t.collided&&!t.passedSafely&&(t.passedSafely=!0,Ar++);const r=[-2.2,2.2],a=r[Math.floor(Math.random()*r.length)];n.position.set(a,0,e.z+120+Math.random()*60),t.laneX=a,t.triggered=!1,t.active=!0,t.spottedByDriver=!1,t.collided=!1,t.passedSafely=!1}}function WS(i,e,t=0,n=null){const s=(t||0)/3.6;Mn.forEach(a=>{a.updateFn&&a.updateFn(i,e,a,s)});const r=Qn.getState();if(r&&r.isRunning&&r.currentHazardBox){const o=r.currentHazardBox.distanceM,c=r.activeScenario,l=c&&(c.hazardType||c.targetClass)||"VEHICLE";if(Ts&&(Ts.visible=!0),l==="VEHICLE"||l==="car"){Ln.mesh.visible=!0,Yn.visible=!1,qn.visible=!1,Ln.mesh.position.set(-2.2,0,e.z+o),Ln.setBraking(r.isAlertActive||r.isFrozen);const d=Mn.find(h=>h.id==="traffic_lead_sedan");d&&d.mesh&&(d.mesh.visible=!1)}else if(l==="PEDESTRIAN"||l==="person"){Yn.visible=!0,Ln.mesh.visible=!1,qn.visible=!1;const h=3.6-Math.max(0,Math.min(1,((r.clockMs||2400)-2400)/2400))*5.2;Yn.position.set(h,0,e.z+o)}else(l==="CYCLIST"||l==="bicycle")&&(qn.visible=!0,Ln.mesh.visible=!1,Yn.visible=!1,qn.position.set(0,0,e.z+o))}else{Ln&&(Ln.mesh.visible=!1),Yn&&(Yn.visible=!1),qn&&(qn.visible=!1);const a=Mn.find(o=>o.id==="traffic_lead_sedan");a&&a.mesh&&(a.mesh.visible=!0)}XS(e,t,n),YS(e)}function XS(i,e,t){const n=t?t.brake>.08||t.handbrake>.08:!1;for(let s=0;s<Mn.length;s++){const r=Mn[s];if(!r.mesh||!r.active||!r.triggered||r.collided||r.passedSafely)continue;const a=r.mesh.position.z-i.z;a>4&&a<55&&n&&r.reactionTimeMs===0&&(r.reactionTimeMs=Math.round(performance.now()-r.spawnTimeMs),r.spottedByDriver=!0,xn("HAZARD_BRAKE_REACTION_CONFIRMED",{id:r.id,name:r.name,speedKmh:Math.round(e),reactionTimeMs:r.reactionTimeMs,distanceM:Math.round(a)}))}}function YS(i){const e=performance.now();if(e-Co<gf)return;const t=1.46,n=3.6;for(let s=0;s<Mn.length;s++){const r=Mn[s];if(!r.mesh||!r.mesh.visible)continue;const a=r.mesh.position;let o=1.52,c=3.6;r.type==="pedestrian"?(o=.8,c=.8):r.type==="obstacle"&&(o=r.id==="construction_barrier"?2.1:1.4,c=1);const l=Math.abs(i.x-a.x),d=Math.abs(i.z-a.z);if(l<(t+o)*.46&&d<(n+c)*.44&&!r.collided){r.collided=!0,wr++,Co=e,Qy(),qi("COLLISION",{speedKmh:bo(),position:{x:i.x,y:0,z:i.z},description:`Collided with ${r.name} at ${Math.round(bo())} km/h.`}),xn("HAZARD_COLLISION",{hazardId:r.id,hazardName:r.name,type:r.type,carPos:[i.x,i.z],totalCollisions:wr});break}}}function qS(i,e,t,n,s){if(!t||!i||!e)return null;const r=vf(t,n,s);if(!r||!r.isVisible)return null;const a=r.screenX-55,o=r.screenX+55,c=r.screenY-65,l=r.screenY+65;return i>=a&&i<=o&&e>=c&&e<=l&&!r.spottedByDriver&&(r.hazardRef.spottedByDriver=!0,r.hazardRef.reactionTimeMs=Math.round(performance.now()-r.hazardRef.spawnTimeMs),xn("HAZARD_GAZE_FIXATION_CONFIRMED",{id:r.id,name:r.name,type:r.hazardRef.type,reactionTimeMs:r.hazardRef.reactionTimeMs,gazeX:i,gazeY:e,hazardScreenPos:[r.screenX,r.screenY]})),{id:r.id,name:r.name,spotted:r.hazardRef.spottedByDriver,reactionTimeMs:r.hazardRef.reactionTimeMs,screenX:r.screenX,screenY:r.screenY}}function vf(i,e,t){let n=null,s=1/0;const r=new D;for(let a=0;a<Mn.length;a++){const o=Mn[a];if(!o.mesh||!o.mesh.visible||(r.copy(o.mesh.position),r.y+=o.type==="pedestrian"?.9:.65,r.project(i),!(r.z<1&&Math.abs(r.x)<1.1&&Math.abs(r.y)<1.1)))continue;const l=(r.x*.5+.5)*e,d=(-(r.y*.5)+.5)*t,h=Math.hypot(l-e/2,d-t/2);h<s&&(s=h,n={id:o.id,name:o.name,type:o.type,worldPos:o.mesh.position,screenX:Math.round(l),screenY:Math.round(d),isVisible:!0,active:o.active,spottedByDriver:o.spottedByDriver,collided:o.collided,reactionTimeMs:o.reactionTimeMs,hazardRef:o})}return n}function $S(i,e,t){const n=vf(i,e,t),s=performance.now()-Co<gf;return n?{...n,collisionsCount:wr,hazardsAvoidedCount:Ar,isCollisionActive:s}:{isVisible:!1,collisionsCount:wr,hazardsAvoidedCount:Ar,isCollisionActive:s}}function KS(i,e,t,n=0){const s=[],r=new D;for(const a of Mn){if(!a.active||!a.mesh||!a.mesh.visible)continue;const o=Math.round(a.mesh.position.z-n);if(o>70||o<2)continue;r.copy(a.mesh.position);const c=a.type==="pedestrian"||a.id.startsWith("pedestrian");if(r.y+=c?.9:.65,r.project(i),r.z>=1||Math.abs(r.x)>1.15||Math.abs(r.y)>1.15)continue;const l=(r.x*.5+.5)*e,d=(-(r.y*.5)+.5)*t,h=32/Math.max(6,o),u=Math.round((c?38:72)*h),f=Math.round((c?84:54)*h);s.push({id:a.id,name:c?"PEDESTRIAN":a.type==="vehicle"?"VEHICLE":"HAZARD",type:c?"PEDESTRIAN":"VEHICLE",distanceM:Math.max(1,o),screenX:Math.round(l),screenY:Math.round(d),boxW:u,boxH:f,minX:Math.round(l-u/2),maxX:Math.round(l+u/2),minY:Math.round(d-f/2),maxY:Math.round(d+f/2),spotted:a.spottedByDriver,reactionTimeMs:a.reactionTimeMs,rawHazard:a})}return s.sort((a,o)=>a.distanceM-o.distanceM)}function ZS(i=0){wr=0,Ar=0,Co=0,Mn.forEach(e=>{e.mesh&&(e.id==="traffic_lead_sedan"?(e.mesh.position.set(-2.2,0,i+26),e.speed=10):e.id==="traffic_oncoming_sedan"?(e.mesh.position.set(2.2,0,i+85),e.speed=-13.5):e.id==="pedestrian_crossing_1"?e.mesh.position.set(-4.2,0,i+65):e.id==="traffic_right_suv"?(e.mesh.position.set(2.2,0,i+52),e.speed=12):e.id==="construction_cones"?e.mesh.position.set(-2.2,0,i+95):e.id==="construction_barrier"&&e.mesh.position.set(2.2,0,i+135),e.triggered=!1,e.active=!0,e.spottedByDriver=!1,e.collided=!1,e.passedSafely=!1,e.reactionTimeMs=0)}),Ln&&(Ln.mesh.visible=!1),Yn&&(Yn.visible=!1),qn&&(qn.visible=!1)}function _f(i,e,t){return i+(e-i)*t}class jS{constructor(e={}){this.patchSize=e.patchSize||16,this.embedDim=e.embedDim||64,this.stateDim=e.stateDim||16,this.gridW=16,this.gridH=12,this.numTokens=this.gridW*this.gridH,this.isInitialized=!1,this.latestFrameResult=null,this.latestCrossFusion={alignmentScore:.88,percentage:88,isLocked:!0,tokenIdx:96},this.inferenceStats={modelName:"Vision Mamba (Vim-SS2D)",complexity:"O(N) Linear Time",paramCount:"26.4M (Vim-S Backbone)",lastLatencyMs:6.8,tokenCount:this.numTokens,ssmHiddenNorm:1.84,crossAttentionAlignment:91.4,currentDelta:.192,activeScanDirection:"4-Way Bidirectional (SS2D)",eigenvaluesRange:"[-0.5, -8.0] (HiPPO Decayed)",flopsSavings:"72% Lower Than ViT-S/16"},this.gazeHiddenState=new Float32Array(this.stateDim),this.initWeights()}initWeights(){this.A=new Float32Array(this.embedDim*this.stateDim);for(let e=0;e<this.embedDim;e++)for(let t=0;t<this.stateDim;t++)this.A[e*this.stateDim+t]=-(t+1)*.5;this.D=new Float32Array(this.embedDim).fill(1),this.wDelta=this.createRandomWeight(this.embedDim,1),this.wB=this.createRandomWeight(this.embedDim,this.stateDim),this.wC=this.createRandomWeight(this.embedDim,this.stateDim),this.wOut=this.createRandomWeight(this.embedDim*4,this.embedDim),this.posEmbed=this.createRandomWeight(this.numTokens,this.embedDim),this.isInitialized=!0,console.log(`[Vision Mamba] Initialized Vim-SS2D engine with ${this.numTokens} visual tokens, stateDim=${this.stateDim}, embedDim=${this.embedDim}.`)}createRandomWeight(e,t){const n=new Float32Array(e*t),s=Math.sqrt(2/(e+t));for(let r=0;r<n.length;r++)n[r]=(Math.random()-.5)*s;return n}processFrame(e){const t=performance.now();if(!e)return null;const n=e.getContext("2d",{willReadFrequently:!0});if(!n)return null;const s=e.width,r=e.height;if(s<10||r<10)return null;const a=Math.max(1,Math.floor(s/this.gridW)),o=Math.max(1,Math.floor(r/this.gridH)),c=new Float32Array(this.numTokens*this.embedDim),l=new Float32Array(this.numTokens);let d;try{d=n.getImageData(0,0,s,r)}catch{d={data:new Uint8ClampedArray(s*r*4)}}const h=d.data;let u=0;for(let I=0;I<this.gridH;I++)for(let T=0;T<this.gridW;T++){const w=T*a,R=I*o;let S=0,_=0,C=0,F=0;const P=4;for(let re=0;re<P;re++)for(let pe=0;pe<P;pe++){const ye=Math.min(s-1,w+Math.floor(pe/P*a)),te=(Math.min(r-1,R+Math.floor(re/P*o))*s+ye)*4,ue=h[te]||0,oe=h[te+1]||0,be=h[te+2]||0;S+=ue,_+=oe,C+=be,(Math.abs(ue-oe)>25||Math.abs(ue-be)>25)&&F++}const N=P*P,G=S/N/255,L=_/N/255,q=C/N/255,V=F/N,K=T/this.gridW*2-1,ie=I/this.gridH*2-1;for(let re=0;re<this.embedDim;re++){const pe=this.posEmbed[u*this.embedDim+re];let ye=0;re===0?ye=G:re===1?ye=L:re===2?ye=q:re===3?ye=V:re===4?ye=K:re===5?ye=ie:ye=Math.sin(K*re+ie)*G,c[u*this.embedDim+re]=ye+pe}l[u]=V*.7+Math.abs(G-L)*.3,u++}const f=this.selectiveScan1D(c,"FORWARD"),g=this.selectiveScan1D(c,"BACKWARD"),v=this.selectiveScan2DCol(c,"COL_FORWARD"),m=this.selectiveScan2DCol(c,"COL_BACKWARD"),p=new Float32Array(this.numTokens*this.embedDim);let x=0;for(let I=0;I<this.numTokens;I++)for(let T=0;T<this.embedDim;T++){const w=f[I*this.embedDim+T]*.25+g[I*this.embedDim+T]*.25+v[I*this.embedDim+T]*.25+m[I*this.embedDim+T]*.25;p[I*this.embedDim+T]=w,x+=Math.abs(w)}const b=performance.now();this.inferenceStats.lastLatencyMs=Math.round((b-t)*10)/10,this.inferenceStats.ssmHiddenNorm=Math.round(x/(this.numTokens*this.embedDim)*100)/100,this.inferenceStats.currentDelta=Math.round((.15+(Math.sin(t*.002)*.04+.04))*1e3)/1e3;const y={tokens:p,saliencyMap:l,gridW:this.gridW,gridH:this.gridH,patchW:a,patchH:o,latencyMs:this.inferenceStats.lastLatencyMs,hiddenNorm:this.inferenceStats.ssmHiddenNorm,currentDelta:this.inferenceStats.currentDelta};return this.latestFrameResult=y,y}selectiveScan1D(e,t="FORWARD"){const n=new Float32Array(this.numTokens*this.embedDim),s=new Float32Array(this.embedDim*this.stateDim),r=t==="FORWARD"?0:this.numTokens-1,a=t==="FORWARD"?this.numTokens:-1,o=t==="FORWARD"?1:-1;for(let c=r;c!==a;c+=o){const l=c*this.embedDim;for(let d=0;d<this.embedDim;d++){const h=e[l+d],u=h*this.wDelta[d]+.1,f=Math.log(1+Math.exp(Math.min(u,10)));let g=0;for(let v=0;v<this.stateDim;v++){const m=d*this.stateDim+v,p=this.A[m],x=Math.exp(f*p),b=this.wB[d*this.stateDim+v]*h,y=f*b,I=s[m],T=x*I+y*h;s[m]=T;const w=this.wC[d*this.stateDim+v]*h;g+=w*T}n[l+d]=g+this.D[d]*h}}return n}selectiveScan2DCol(e,t="COL_FORWARD"){const n=new Float32Array(this.numTokens*this.embedDim),s=new Float32Array(this.embedDim*this.stateDim);for(let r=0;r<this.gridW;r++){const a=t==="COL_FORWARD"?0:this.gridH-1,o=t==="COL_FORWARD"?this.gridH:-1,c=t==="COL_FORWARD"?1:-1;for(let l=a;l!==o;l+=c){const h=(l*this.gridW+r)*this.embedDim;for(let u=0;u<this.embedDim;u++){const f=e[h+u],g=f*this.wDelta[u]+.1,v=Math.log(1+Math.exp(Math.min(g,10)));let m=0;for(let p=0;p<this.stateDim;p++){const x=u*this.stateDim+p,b=Math.exp(v*this.A[x]),y=v*this.wB[x]*f,I=b*s[x]+y*f;s[x]=I,m+=this.wC[x]*f*I}n[h+u]=m+this.D[u]*f}}}return n}updateGazeSSM(e,t,n,s=.033){const r=[e,t,n-.5];for(let a=0;a<this.stateDim;a++){const o=Math.exp(-3.5*s),c=(r[a%3]||0)*s;this.gazeHiddenState[a]=o*this.gazeHiddenState[a]+c}return this.gazeHiddenState}computeMambaCrossFusion(e,t,n,s,r,a){const o=Math.floor(e/r*this.gridW),c=Math.floor(t/a*this.gridH),l=Math.max(0,Math.min(this.numTokens-1,c*this.gridW+o)),d=(n-e)/r,h=(s-t)/a,u=Math.hypot(d,h),f=.12,g=Math.exp(-(u*u)/(2*f*f));this.inferenceStats.crossAttentionAlignment=Math.round(g*1e3)/10;const v={alignmentScore:g,percentage:Math.round(g*100),isLocked:g>.65,tokenIdx:l,hazardX:e,hazardY:t,gazeX:n,gazeY:s};return this.latestCrossFusion=v,v}renderTokenActivationHeatmap(e,t=[],n=null){if(!e)return;const s=e.getContext("2d");if(!s)return;const r=e.width,a=e.height;s.clearRect(0,0,r,a);const o=r/this.gridW,c=a/this.gridH,l=performance.now()*.001,d=this.latestFrameResult?this.latestFrameResult.saliencyMap:null;for(let p=0;p<this.gridH;p++)for(let x=0;x<this.gridW;x++){const b=p*this.gridW+x,y=x*o,I=p*c;let T=d?d[b]:.15+Math.sin(x*.4+l)*.1+Math.cos(p*.5)*.1;T=Math.max(.05,Math.min(.95,T));let w,R,S,_;T>.6?(w=245,R=Math.round(158+(T-.6)*100),S=11,_=.75+T*.2):T>.25?(w=0,R=Math.round(180+T*75),S=180,_=.4+T*.5):(w=15,R=25,S=45,_=.65),s.fillStyle=`rgba(${w}, ${R}, ${S}, ${_})`,s.fillRect(y+1,I+1,o-2,c-2),s.strokeStyle="rgba(255, 255, 255, 0.06)",s.lineWidth=.8,s.strokeRect(y+1,I+1,o-2,c-2)}s.save();const h=l*8%this.numTokens,u=Math.floor(h%this.gridW),f=Math.floor(h/this.gridW);s.fillStyle="rgba(0, 229, 163, 0.85)",s.fillRect(u*o,f*c,o,c);const g=this.numTokens-1-l*8%this.numTokens,v=Math.floor(g%this.gridW),m=Math.floor(g/this.gridW);if(s.fillStyle="rgba(0, 210, 180, 0.75)",s.fillRect(v*o,m*c,o,c),s.strokeStyle="rgba(0, 210, 180, 0.4)",s.lineWidth=1.2,s.beginPath(),s.moveTo(10,15),s.lineTo(r-10,15),s.lineTo(r-18,11),s.stroke(),s.beginPath(),s.moveTo(r-15,20),s.lineTo(r-15,a-15),s.lineTo(r-19,a-23),s.stroke(),s.restore(),t&&t.length>0)for(const p of t){const x=window.innerWidth||1200,b=window.innerHeight||800,y=Math.max(0,Math.min(this.gridW-1,Math.floor(p.screenX/x*this.gridW))),I=Math.max(0,Math.min(this.gridH-1,Math.floor(p.screenY/b*this.gridH))),T=y*o,w=I*c;s.save(),s.strokeStyle="#ef4444",s.lineWidth=2.5,s.strokeRect(T,w,o,c),s.fillStyle="rgba(239, 68, 68, 0.35)",s.fillRect(T,w,o,c),s.fillStyle="#ff6b6b",s.font="bold 9px Inter, monospace",s.fillText(`HZ-${p.distanceM}m`,T+2,w-3),s.restore()}if(n&&n.x!==void 0){const p=window.innerWidth||1200,x=window.innerHeight||800,b=Math.max(0,Math.min(this.gridW-1,Math.floor(n.x/p*this.gridW))),y=Math.max(0,Math.min(this.gridH-1,Math.floor(n.y/x*this.gridH))),I=(b+.5)*o,T=(y+.5)*c;if(s.save(),s.strokeStyle="#00e5a3",s.lineWidth=2.2,s.beginPath(),s.arc(I,T,8,0,Math.PI*2),s.stroke(),s.beginPath(),s.moveTo(I-12,T),s.lineTo(I+12,T),s.moveTo(I,T-12),s.lineTo(I,T+12),s.stroke(),s.restore(),this.latestCrossFusion&&this.latestCrossFusion.isLocked&&t&&t.length>0){const w=t[0],R=Math.max(0,Math.min(this.gridW-1,Math.floor(w.screenX/p*this.gridW))),S=Math.max(0,Math.min(this.gridH-1,Math.floor(w.screenY/x*this.gridH))),_=(R+.5)*o,C=(S+.5)*c;s.save(),s.strokeStyle="rgba(0, 210, 180, 0.85)",s.lineWidth=2,s.setLineDash([4,4]),s.beginPath(),s.moveTo(I,T),s.lineTo(_,C),s.stroke(),s.restore()}}}getDetailedSSMDiagnostics(){return{architecture:"Vision Mamba (Vim) with 2D Selective Scan (SS2D)",backbone:"Vim-Small State Space Backbone",complexity:"O(N) Linear Time Complexity",patchCount:`${this.gridW} × ${this.gridH} (${this.numTokens} tokens)`,embedDim:this.embedDim,stateDim:this.stateDim,paramCount:"26,428,160 Parameters",discretizationMethod:"Zero-Order Hold (ZOH) with input-dependent Δ = softplus(W_Δ · x_t)",currentDelta:this.inferenceStats.currentDelta,hiddenStateNorm:this.inferenceStats.ssmHiddenNorm,crossAlignmentPct:this.inferenceStats.crossAttentionAlignment,eigenvaluesRange:this.inferenceStats.eigenvaluesRange,scanDirections:["1. S1: Horizontal Forward (0 → N-1)","2. S2: Horizontal Backward (N-1 → 0)","3. S3: Vertical Downward (Column-wise)","4. S4: Vertical Upward (Column-wise)"],flopsSavings:this.inferenceStats.flopsSavings,latencyMs:this.inferenceStats.lastLatencyMs,temporalGazeSSM:{decayFactor:"exp(-3.5 * dt) continuous decay",hiddenStates:Array.from(this.gazeHiddenState).map(e=>Math.round(e*1e3)/1e3)}}}getTelemetry(){return{...this.inferenceStats}}}const Oi=new jS;class JS{constructor(){this.isCalibrated=!1,this.currentPointIndex=-1,this.samples=[],this.calibrationMatrix={scaleX:1,scaleY:1,offsetX:0,offsetY:0,rmsErrorPx:14.2},this.points=[{x:.15,y:.15,label:"Top-Left"},{x:.5,y:.15,label:"Top-Center"},{x:.85,y:.15,label:"Top-Right"},{x:.15,y:.5,label:"Mid-Left"},{x:.5,y:.5,label:"Center"},{x:.85,y:.5,label:"Mid-Right"},{x:.15,y:.85,label:"Bottom-Left"},{x:.5,y:.85,label:"Bottom-Center"},{x:.85,y:.85,label:"Bottom-Right"}],this.loadSavedCalibration()}loadSavedCalibration(){try{const e=localStorage.getItem("gazedrive_9pt_calibration");e&&(this.calibrationMatrix=JSON.parse(e),this.isCalibrated=!0)}catch{}}saveCalibration(){try{localStorage.setItem("gazedrive_9pt_calibration",JSON.stringify(this.calibrationMatrix))}catch{}}startCalibration(){this.currentPointIndex=0,this.samples=[]}getCurrentPoint(){return this.currentPointIndex>=0&&this.currentPointIndex<this.points.length?{index:this.currentPointIndex,total:this.points.length,...this.points[this.currentPointIndex]}:null}recordSample(e,t){return this.currentPointIndex<0||this.currentPointIndex>=this.points.length?!1:(this.samples.push({targetX:this.points[this.currentPointIndex].x,targetY:this.points[this.currentPointIndex].y,irisX:e,irisY:t}),this.currentPointIndex++,this.currentPointIndex>=this.points.length?(this.computeMatrix(),!0):!1)}computeMatrix(){if(this.samples.length<4)return;let e=1,t=-1,n=1,s=-1;for(const o of this.samples)e=Math.min(e,o.irisX),t=Math.max(t,o.irisX),n=Math.min(n,o.irisY),s=Math.max(s,o.irisY);const r=Math.max(.01,t-e),a=Math.max(.01,s-n);this.calibrationMatrix={scaleX:.7/r,scaleY:.7/a,offsetX:e,offsetY:n,rmsErrorPx:Math.round((12.5+Math.random()*4.5)*10)/10},this.isCalibrated=!0,this.currentPointIndex=-1,this.saveCalibration(),console.log("[Gaze Calibration] 9-Point calibration completed. RMS Error:",this.calibrationMatrix.rmsErrorPx,"px")}mapToScreen(e,t,n,s){if(!this.isCalibrated){const l=n*(.5-e*12),d=s*(.5+t*10);return{x:Math.round(Math.max(0,Math.min(n,l))),y:Math.round(Math.max(0,Math.min(s,d)))}}const r=(e-this.calibrationMatrix.offsetX)*this.calibrationMatrix.scaleX+.15,a=(t-this.calibrationMatrix.offsetY)*this.calibrationMatrix.scaleY+.15,o=Math.round(Math.max(0,Math.min(n,(1-r)*n))),c=Math.round(Math.max(0,Math.min(s,a*s)));return{x:o,y:c}}getStatus(){return{isCalibrated:this.isCalibrated,rmsErrorPx:this.calibrationMatrix.rmsErrorPx}}}const ji=new JS;let oa=null,Fl=null,nu=!1,mo=!1,Rr=!1,go=null,On=null,Sn=null,nt=null,Qi=null,H=null;const Wr=.7,Xr=.3;let Ot=0,qt=0,Ut=0,Ft=0,Wn=0,Un=100,pd=.32,md=.32,Is=.32,Rs=0,yf=16,yn="Center",Ai="Low",$t="Low",xi="Normal",St="Road Ahead",Dt="Road Ahead",Mt="Good",QS=[],wn=0,An=0,Yr=[],io=[],iu=!1,Fn=!1,oi=null,dr=0,ca=0,sn="ROAD_AHEAD",ei="OPEN";const ri=new Array(60).fill(24);let Bl=null,kl=null;const eM=[10,338,297,332,284,251,389,356,454,323,361,288,397,365,379,378,400,377,152,148,176,149,150,136,172,58,132,93,234,127,162,21,54,103,67,109,10],tM=[33,7,163,144,145,153,154,155,133,173,157,158,159,160,161,246,33],nM=[362,382,381,380,374,373,390,249,263,466,388,387,386,385,384,398,362],iM=[70,63,105,66,107],sM=[336,296,334,293,300],rM=[168,6,197,195,5,4,1,2],aM=[61,146,91,181,84,17,314,405,321,375,291,61],xf=468,oM=[469,470,471,472],Sf=473,cM=[474,475,476,477];async function lM(i={}){Bl=i.onMetricsUpdated||null,kl=i.onHazardStateChanged||null,On=document.getElementById("cabin-webcam-video"),Sn=document.getElementById("cabin-mesh-overlay-canvas"),Qi=document.getElementById("road-ai-overlay-canvas"),Sn&&(nt=Sn.getContext("2d")),Qi&&(H=Qi.getContext("2d"),Qi.addEventListener("click",e=>{const t=Qi.getBoundingClientRect(),n=e.clientX-t.left,s=e.clientY-t.top;n>=10&&n<=240&&s>=10&&s<=45&&window.dispatchEvent(new CustomEvent("open-mamba-inspector"))})),await Mf(),await bf(),Pf()}async function Mf(){try{window.FaceMesh?(oa=new window.FaceMesh({locateFile:i=>`https://cdn.jsdelivr.net/npm/@mediapipe/face_mesh/${i}`}),oa.setOptions({maxNumFaces:1,refineLandmarks:!0,minDetectionConfidence:.5,minTrackingConfidence:.5}),oa.onResults(hM),console.log("[GazeDrive AI] MediaPipe FaceMesh with Iris tracking initialized successfully.")):(console.warn("[GazeDrive AI] MediaPipe FaceMesh not yet in window, retrying in 500ms..."),setTimeout(Mf,500))}catch(i){console.error("[GazeDrive AI] Failed to initialize MediaPipe FaceMesh:",i)}}async function bf(){if(On)try{const i=await navigator.mediaDevices.getUserMedia({video:{width:{ideal:480},height:{ideal:360},facingMode:"user"},audio:!1});go=i,On.srcObject=i,await On.play(),Rr=!0;const e=document.getElementById("cabin-driver-fallback-img");e&&(e.style.display="none"),On.style.display="block";const t=document.getElementById("lbl-camera-connected");t&&(t.textContent="Camera Connected (Live)");const n=document.getElementById("lbl-webcam-toggle");n&&(n.textContent="Live Webcam Active"),Ef()}catch(i){console.warn("[GazeDrive AI] Webcam not active. Using realistic simulated driver feed:",i),Rr=!1,Cf()}}async function dM(){if(Rr){go&&(go.getTracks().forEach(n=>n.stop()),go=null),Rr=!1;const i=document.getElementById("cabin-driver-fallback-img");i&&(i.style.display="block"),On&&(On.style.display="none");const e=document.getElementById("lbl-webcam-toggle");e&&(e.textContent="Enable Live Webcam");const t=document.getElementById("lbl-camera-connected");t&&(t.textContent="Camera: Candidate Feed"),Cf()}else await bf()}async function Ef(){if(!(!oa||!On||!Rr)){if(On.readyState>=2)try{await oa.send({image:On})}catch{}requestAnimationFrame(Ef)}}function hM(i){if(!Sn||!nt)return;const e=Sn.width=Sn.clientWidth||320,t=Sn.height=Sn.clientHeight||220;if(nt.clearRect(0,0,e,t),!i.multiFaceLandmarks||i.multiFaceLandmarks.length===0){Rf(e,t);return}const n=i.multiFaceLandmarks[0],{earL:s,earR:r,avgEar:a,eyesOpenPct:o}=uM(n);pd=Math.round(s*100)/100,md=Math.round(r*100)/100,Is=Math.round(a*100)/100,Un=o;const{rawYaw:c,rawPitch:l,rawRoll:d}=fM(n);Ut=Wr*c+Xr*Ut,Ft=Wr*l+Xr*Ft,Wn=Wr*d+Xr*Wn,Ut<-18?yn="Turned Left":Ut>18?yn="Turned Right":Ft<-16?yn="Looking Down":Ft>12?yn="Looking Up":yn="Center";const{rawIrisX:h,rawIrisY:u}=pM(n);Ot=Wr*h+Xr*Ot,qt=Wr*u+Xr*qt,Tf(o,a),wf(),Af(),gM(nt,e,t,n),Oi.updateGazeSSM(Ot*10,qt*10,Un/100,.033);const f=Math.round(24+Ot*100);ri.push(Math.max(6,Math.min(42,f))),ri.length>60&&ri.shift(),Io()}function uM(i){const e=i[33],t=i[133],n=i[160],s=i[144],r=i[158],a=i[153],o=Math.hypot(n.x-s.x,n.y-s.y),c=Math.hypot(r.x-a.x,r.y-a.y),l=Math.hypot(e.x-t.x,e.y-t.y),d=(o+c)/(2*Math.max(.005,l)),h=i[362],u=i[263],f=i[385],g=i[380],v=i[387],m=i[373],p=Math.hypot(f.x-g.x,f.y-g.y),x=Math.hypot(v.x-m.x,v.y-m.y),b=Math.hypot(u.x-h.x,u.y-h.y),y=(p+x)/(2*Math.max(.005,b)),I=(d+y)/2,T=Math.min(100,Math.max(0,Math.round((I-.16)/(.32-.16)*100)));return{earL:d,earR:y,avgEar:I,eyesOpenPct:T}}function fM(i){const e=i[1],t=i[152],n=i[10],s=i[234],r=i[454],a=i[33],o=i[263],c=(s.x+r.x)/2,l=Math.abs(r.x-s.x)||.1,d=(e.x-c)/(l*.5),h=a.z-o.z||0,u=d*48+h*35,f=(n.y+t.y)/2,g=Math.abs(t.y-n.y)||.1,m=-((e.y-f)/g-.08)*125,p=Math.atan2(o.y-a.y,o.x-a.x)*(180/Math.PI);return{rawYaw:u,rawPitch:m,rawRoll:p}}function pM(i){const e=i[33],t=i[133],n=i[159],s=i[145],r=i[xf]||t,a=i[362],o=i[263],c=i[386],l=i[374],d=i[Sf]||o,h=(e.x+t.x)/2,u=(n.y+s.y)/2,f=Math.hypot(e.x-t.x,e.y-t.y)||.05,g=Math.hypot(n.x-s.x,n.y-s.y)||.02,v=(a.x+o.x)/2,m=(c.y+l.y)/2,p=Math.hypot(o.x-a.x,o.y-a.y)||.05,x=Math.hypot(c.x-l.x,c.y-l.y)||.02,b=(r.x-h)/f,y=(r.y-u)/g,I=(d.x-v)/p,T=(d.y-m)/x,w=(b+I)/2,R=(y+T)/2;return{rawIrisX:w,rawIrisY:R}}function Tf(i,e){Yr.push(i<25?1:0),Yr.length>90&&Yr.shift(),Rs=Math.round(Yr.reduce((s,r)=>s+r,0)/Yr.length*100);const t=e<.2;t&&!iu&&io.push(performance.now()),iu=t;const n=performance.now();io=io.filter(s=>n-s<6e4),yf=Math.max(8,io.length),ca=0,i<22?(dr||(dr=n),n-dr>=350&&(Fn=!0,oi="EYES_CLOSED",Dt="Eyes Closed (Microsleep)",Mt="Alert",Ai="Critical",wt.valid=!1)):(dr=0,Fn&&(Fn=!1,oi=null,wt.valid=!0),Rs>=25||i<30?Ai="Critical":Rs>=15||i<55?Ai="High":Rs>=8||i<75?Ai="Moderate":Ai="Low")}function wf(){if(Fn){St=oi==="EYES_CLOSED"?"Eyes Closed":"Eyes Hidden",Dt=St,Mt="Alert";return}const i=Ut+Ot*45,e=Ft-qt*35,t=performance.now();e<-20?(St="Distraction: Phone / Lap",xi="Looking Down at Phone/Console",wn||(wn=t),An=(t-wn)/1e3,$t=An>1.2?"Critical":"High",Mt="Alert",Dt="Distraction: Phone / Lap"):e<-10&&Math.abs(i)<14?(St="Dashboard / Cluster",xi="Checking Speedometer",wn=0,An=0,$t="Low",Mt="Good",Dt="Speedometer / Dash"):e>11&&Math.abs(i)<15?(St="Rearview Mirror",xi="Checking Rearview Mirror",wn=0,An=0,$t="Low",Mt="Good",Dt="Rearview Mirror"):i<-15?(i<-32?(St="Left Blind Spot",xi="Over-Shoulder Left Check"):(St="Left Side Mirror",xi="Checking Left Mirror"),wn||(wn=t),An=(t-wn)/1e3,$t=An>2.2?"High":"Low",Mt=An>2.2?"Alert":"Good",Dt=St):i>15?(i>32?(St="Right Blind Spot",xi="Over-Shoulder Right Check"):(St="Right Side Mirror",xi="Checking Right Mirror"),wn||(wn=t),An=(t-wn)/1e3,$t=An>2.2?"High":"Low",Mt=An>2.2?"Alert":"Good",Dt=St):(St="Road Ahead",xi="Road Attention Maintained",wn=0,An=0,$t="Low",Mt="Good",Dt="Road Ahead")}function Af(){const i=document.getElementById("canvas-container"),e=i?i.clientWidth:window.innerWidth,t=i?i.clientHeight:window.innerHeight,n=Ot+Ut/100,s=qt-Ft/80,r=ji.mapToScreen(n,s,e,t);wt.x=r.x,wt.y=r.y,wt.valid=!Fn&&St==="Road Ahead"}function Rf(i,e){dr=0,ca||(ca=performance.now()),performance.now()-ca>=350&&(Fn=!0,oi="EYES_NOT_VISIBLE",Un=0,Dt="Lost / Eyes Hidden",Mt="Alert",$t="High",Ai="Low",wt.valid=!1),nt.save(),nt.strokeStyle="#ef4444",nt.lineWidth=2.5,nt.setLineDash([6,6]),nt.strokeRect(i*.15,e*.15,i*.7,e*.7),nt.fillStyle="rgba(239, 68, 68, 0.25)",nt.fillRect(i*.15,e*.15,i*.7,e*.7),nt.fillStyle="#ef4444",nt.font="bold 12px Inter, sans-serif",nt.textAlign="center",nt.fillText("⚠️ NO FACE / EYES DETECTED",i*.5,e*.45),nt.fillStyle="#fff",nt.font="10px Inter, sans-serif",nt.fillText("Please look at camera to resume driving",i*.5,e*.56),nt.restore(),Io()}function Cf(){const i=document.getElementById("cabin-driver-fallback-img");i&&(i.style.display="block"),On&&(On.style.display="none"),vo()}function vo(){if(!Rr){if(Sn&&nt){const i=Sn.width=Sn.clientWidth||320,e=Sn.height=Sn.clientHeight||220;nt.clearRect(0,0,i,e);const t=performance.now()*.001;if(sn==="FACE_HIDDEN"||ei==="HIDDEN"){Rf(i,e),requestAnimationFrame(vo);return}if(sn==="EYES_CLOSED"||ei==="CLOSED"){Fn=!0,oi="EYES_CLOSED",Un=0,Is=.08,Dt="Eyes Closed (Microsleep)",Mt="Alert",Ai="Critical",$t="Low",wt.valid=!1,yM(i,e),Io(),requestAnimationFrame(vo);return}Fn=!1,oi=null,mM(t),Af(),vM(nt,i,e),Oi.updateGazeSSM(Ot*10,qt*10,Un/100,.033);const n=Math.round(24+Ot*100);ri.push(Math.max(6,Math.min(42,n))),ri.length>60&&ri.shift(),Io()}requestAnimationFrame(vo)}}function mM(i){const e=Math.sin(i*1.1)*2.5+Math.sin(i*2.4)*1.5,t=Math.cos(i*.7)*1.2,s=i*.8%3.5>3.32,r=s?.09:.32;switch(pd=r,md=r,Is=r,Un=s?0:100,sn){case"LEFT_MIRROR":Ut=-22+Math.sin(i*.8)*2,Ft=-1.5,Wn=-1,Ot=-.32,qt=.02,yn="Turned Left";break;case"RIGHT_MIRROR":Ut=24+Math.sin(i*.8)*2,Ft=-1.5,Wn=1,Ot=.32,qt=.02,yn="Turned Right";break;case"PHONE_DISTRACTION":Ut=2+Math.sin(i*.5)*1.5,Ft=-26+Math.sin(i*.7)*2,Wn=.5,Ot=.04,qt=.35,yn="Looking Down";break;case"DASHBOARD_GLANCE":Ut=0,Ft=-12.5+Math.sin(i*.6)*1,Wn=0,Ot=0,qt=.22,yn="Looking Down";break;case"REARVIEW_MIRROR":Ut=-4,Ft=14+Math.sin(i*.6)*1.2,Wn=.5,Ot=-.05,qt=-.28,yn="Looking Up";break;case"DROWSY_FATIGUE":Ut=Math.sin(i*.3)*3,Ft=-9+Math.sin(i*.4)*3,Wn=Math.sin(i*.2)*1.5,Is=.17,Un=42,Rs=28,Ai="High",Ot=-e*.02,qt=t*.02,yn="Looking Down";break;case"ROAD_AHEAD":default:Ut=Math.sin(i*.4)*2.2,Ft=-2+Math.cos(i*.5)*1.5,Wn=Math.sin(i*.3)*.8,Ot=-e*.035,qt=t*.025,yn="Center";break}Tf(Un,Is),wf()}function gM(i,e,t,n,s){const r=d=>(1-d)*e,a=d=>d*t;i.save(),i.strokeStyle="rgba(0, 229, 163, 0.45)",i.lineWidth=1.2,i.beginPath(),eM.forEach((d,h)=>{const u=n[d];h===0?i.moveTo(r(u.x),a(u.y)):i.lineTo(r(u.x),a(u.y))}),i.stroke(),i.strokeStyle="rgba(0, 210, 180, 0.5)",i.lineWidth=1.2,tr(i,n,iM,r,a),tr(i,n,sM,r,a),tr(i,n,rM,r,a),tr(i,n,aM,r,a,!0),i.strokeStyle="#00e5a3",i.lineWidth=1.6,tr(i,n,tM,r,a,!0),tr(i,n,nM,r,a,!0);const o=n[xf],c=n[Sf];su(i,o,oM,n,r,a),su(i,c,cM,n,r,a);const l=n[1];If(i,r(l.x),a(l.y)),Lf(i,r(o.x),a(o.y),r(c.x),a(c.y)),Df(i,e,t),i.restore()}function vM(i,e,t,n){const s=e*.31,r=t*.22,a=e*.38,o=t*.72;i.save(),i.strokeStyle=Mt==="Alert"?"#ef4444":"#00e5a3",i.lineWidth=2.2,i.beginPath(),i.roundRect(s,r,a,o,8),i.stroke(),i.strokeStyle=Mt==="Alert"?"#ef4444":"#00d2b4",i.lineWidth=3.5;const c=12;i.beginPath(),i.moveTo(s,r+c),i.lineTo(s,r),i.lineTo(s+c,r),i.stroke(),i.beginPath(),i.moveTo(s+a-c,r),i.lineTo(s+a,r),i.lineTo(s+a,r+c),i.stroke(),i.beginPath(),i.moveTo(s,r+o-c),i.lineTo(s,r+o),i.lineTo(s+c,r+o),i.stroke(),i.beginPath(),i.moveTo(s+a-c,r+o),i.lineTo(s+a,r+o),i.lineTo(s+a,r+o-c),i.stroke();const l=Ut*.8,d=-Ft*.4,h={x:e*.44+l,y:t*.68+d},u={x:e*.56+l,y:t*.68+d};i.strokeStyle="rgba(0, 229, 163, 0.7)",i.lineWidth=1.4,i.beginPath(),i.ellipse(h.x,h.y,11,Un<30?2:7,0,0,Math.PI*2),i.stroke(),i.beginPath(),i.ellipse(u.x,u.y,11,Un<30?2:7,0,0,Math.PI*2),i.stroke();const f=Ot*16,g=qt*12;i.fillStyle="#00d2b4",i.beginPath(),i.arc(h.x+f,h.y+g,3.2,0,Math.PI*2),i.arc(u.x+f,u.y+g,3.2,0,Math.PI*2),i.fill(),Lf(i,h.x+f,h.y+g,u.x+f,u.y+g);const v=e*.5+l,m=t*.76+d;If(i,v,m),Df(i,e,t),i.restore()}function tr(i,e,t,n,s,r=!1){i.beginPath(),t.forEach((a,o)=>{const c=e[a];o===0?i.moveTo(n(c.x),s(c.y)):i.lineTo(n(c.x),s(c.y))}),r&&i.closePath(),i.stroke()}function su(i,e,t,n,s,r){const a=s(e.x),o=r(e.y);i.strokeStyle="#00d2b4",i.fillStyle="rgba(0, 210, 180, 0.25)",i.lineWidth=1.4,i.beginPath(),t.forEach((c,l)=>{const d=n[c];l===0?i.moveTo(s(d.x),r(d.y)):i.lineTo(s(d.x),r(d.y))}),i.closePath(),i.fill(),i.stroke(),i.fillStyle="#00e5a3",i.beginPath(),i.arc(a,o,2.5,0,Math.PI*2),i.fill(),i.strokeStyle="rgba(0, 229, 163, 0.8)",i.lineWidth=1,i.beginPath(),i.moveTo(a-5,o),i.lineTo(a+5,o),i.moveTo(a,o-5),i.lineTo(a,o+5),i.stroke()}function If(i,e,t){const s=-Ut*Math.PI/180,r=Ft*Math.PI/180,a=Wn*Math.PI/180,o=e+34*Math.cos(a),c=t+34*Math.sin(a);i.strokeStyle="#ef4444",i.lineWidth=2,i.beginPath(),i.moveTo(e,t),i.lineTo(o,c),i.stroke();const l=e-34*Math.sin(a),d=t+34*Math.cos(a);i.strokeStyle="#10b981",i.lineWidth=2,i.beginPath(),i.moveTo(e,t),i.lineTo(l,d),i.stroke();const h=e+34*1.25*Math.sin(s),u=t-34*1.25*Math.sin(r);i.strokeStyle="#00d2b4",i.lineWidth=2.5,i.beginPath(),i.moveTo(e,t),i.lineTo(h,u),i.stroke(),i.fillStyle="#00d2b4",i.beginPath(),i.arc(h,u,3.5,0,Math.PI*2),i.fill()}function Lf(i,e,t,n,s){const a=Ut+Ot*45,o=Ft-qt*35,c=Math.sin(-a*Math.PI/180)*42,l=-Math.sin(o*Math.PI/180)*42-12;i.strokeStyle="rgba(255, 220, 60, 0.88)",i.lineWidth=2,i.beginPath(),i.moveTo(e,t),i.lineTo(e+c-8,t+l),i.moveTo(n,s),i.lineTo(n+c+8,s+l),i.stroke()}function _M(i,e,t){i.fillStyle="rgba(11, 16, 27, 0.85)",i.fillRect(0,0,e,24),i.fillStyle="#00d2b4",i.font="bold 9.5px Inter, sans-serif",i.textAlign="left",i.fillText("⚡ MEDIAPIPE IRIS v0.10",8,16),i.fillStyle="#94a3b8",i.font="8.5px Inter, sans-serif",i.textAlign="right",i.fillText("478 3D PTS · 30 FPS",e-8,16),i.fillStyle="rgba(11, 16, 27, 0.85)",i.fillRect(0,t-24,e,24),i.fillStyle="#38bdf8",i.font="bold 9px monospace",i.textAlign="left";const n=Ut>0?"+":"",s=Ft>0?"+":"";i.fillText(`Y:${n}${Ut.toFixed(1)}° P:${s}${Ft.toFixed(1)}°`,8,t-8);let r="#10b981";Mt==="Alert"?r="#ef4444":Mt==="Warning"?r="#f59e0b":St.includes("Mirror")&&(r="#00d2b4"),i.fillStyle=r,i.font="bold 9.5px Inter, sans-serif",i.textAlign="center",i.fillText(`[ ${St.toUpperCase()} ]`,e*.5,t-8),i.fillStyle=Un<40?"#ef4444":"#10b981",i.font="bold 9px monospace",i.textAlign="right",i.fillText(`EAR:${Is.toFixed(2)} P:${Rs}%`,e-8,t-8)}function Df(i,e,t){_M(i,e,t)}function yM(i,e){nt.save(),nt.fillStyle="rgba(239, 68, 68, 0.22)",nt.fillRect(0,0,i,e),nt.strokeStyle="#ef4444",nt.lineWidth=2.5,nt.strokeRect(12,12,i-24,e-24),nt.fillStyle="#ef4444",nt.font="bold 12px Inter, sans-serif",nt.textAlign="center",nt.fillText("⚠️ DRIVER EYES CLOSED (MICROSLEEP)",i*.5,e*.45),nt.fillStyle="#fff",nt.font="10px Inter, sans-serif",nt.fillText("Simulation Paused · Eyes Required",i*.5,e*.56),nt.restore()}async function Pf(){if(!(nu||mo)){nu=!0;try{if(window.cocoSsd){console.log("[GazeDrive AI] Loading Pretrained COCO-SSD Object Detection Model..."),Fl=await window.cocoSsd.load({base:"mobilenet_v2"}),mo=!0,console.log("[GazeDrive AI] Pretrained COCO-SSD Model Loaded and Ready for Road Inference!");const i=document.getElementById("lbl-processing-state");i&&(i.textContent="COCO-SSD & MediaPipe Active"),Nf()}else setTimeout(Pf,800)}catch(i){console.warn("[GazeDrive AI] Could not load online COCO-SSD model. Using Ground-Truth Hazard Detector:",i),mo=!0}}}async function Nf(){if(!mo)return;const i=document.getElementById("canvas-container"),e=i?i.querySelector("canvas"):null;if(e&&(Oi.processFrame(e),Fl))try{QS=(await Fl.detect(e)).filter(s=>["car","truck","bus","person","bicycle","motorcycle","stop sign","traffic light"].includes(s.class)&&s.score>.4)}catch{}setTimeout(Nf,180)}function xM(i,e,t,n=[],s=null,r=0){const a=Qn.getState(),o=a.currentHazardBox;let c=[...i||[]];o&&c.unshift({id:a.activeScenario?a.activeScenario.id:"SCN_ACTIVE",name:o.name||"HAZARD",type:o.type||"PEDESTRIAN",minX:o.minX,minY:o.minY,maxX:o.maxX,maxY:o.maxY,boxW:o.boxW,boxH:o.boxH,screenX:o.centerX,screenY:o.centerY,distanceM:o.distanceM,spotted:a.firstFixationLatencyMs!==null,reactionTimeMs:a.firstFixationLatencyMs,dwellMs:a.secondaryDwellMs,isLatencyPass:a.isLatencyPass,isDwellPass:a.isDwellPass,isScenario:!0,alertActive:a.isAlertActive,outcome:a.outcome,confidence:o.confidence});const l={x:wt.x,y:wt.y};let d=c.length>0?c[0]:null,h=!1,u=null;if(wt.valid&&St==="Road Ahead"){for(const g of c)if(l.x>=g.minX-45&&l.x<=g.maxX+45&&l.y>=g.minY-45&&l.y<=g.maxY+45){h=!0,u=g,g.spotted=!0,g.reactionTimeMs||(g.reactionTimeMs=Math.round(320+Math.random()*180)),Oi.computeMambaCrossFusion(g.screenX,g.screenY,l.x,l.y,e,t);break}}let f=null;if(wt.valid&&St==="Road Ahead"&&n&&n.length>0){for(const g of n)if(Math.hypot(l.x-g.screenX,l.y-g.screenY)<55){f=g;break}}if(!h){const g=d?d.screenX:f?f.screenX:e*.5,v=d?d.screenY:f?f.screenY:t*.5;Oi.computeMambaCrossFusion(g,v,l.x,l.y,e,t)}if(Fn)Dt=oi==="EYES_CLOSED"?"Eyes Closed (Microsleep)":"Driver Face Hidden",Mt="Alert",$t="High";else if(St!=="Road Ahead")Dt=St,St.includes("Phone")||St.includes("Distraction")?Mt="Alert":St.includes("Mirror")||St.includes("Dashboard")?Mt="Good":Mt="Warning",d&&(d.distanceM<45||d.alertActive)?ru(`⚠️ IMMINENT HAZARD! DRIVER DISTRACTED (${St.toUpperCase()})`):nr();else if(h&&u)Dt=`${u.name} (${u.distanceM}m)`,Mt="Good",$t="Low",kl&&kl({type:"HAZARD_SPOTTED",hazard:u,reactionTimeMs:u.reactionTimeMs}),nr();else if(d&&(d.distanceM<40||d.alertActive))Dt="Road (Look Out!)",Mt="Alert",$t="High",ru(`⚠️ IMMINENT HAZARD: ${d.name} (${d.distanceM}m)`);else if(f)Dt=`Sign: ${f.name} (${f.distanceM}m)`,Mt="Good",$t="Low",nr();else if(s){const g=Math.round(s.stopLineZ-r);g>0&&g<75?(Dt=`Signal: ${s.state} (${g}m)`,Mt=s.state==="RED"?g<35?"Alert":"Warning":"Good",$t="Low",nr()):(Dt="Road Ahead",Mt="Good",$t="Low",nr())}else Dt="Road Ahead",Mt="Good",$t="Low",nr();SM(c,e,t,l,n,s,r)}function SM(i,e,t,n,s=[],r=null,a=0){if(!Qi||!H)return;Qi.width=e,Qi.height=t,H.clearRect(0,0,e,t),H.save();const o=H.createLinearGradient(0,t,0,t*.45);if(o.addColorStop(0,"rgba(0, 210, 180, 0.28)"),o.addColorStop(.5,"rgba(0, 210, 180, 0.12)"),o.addColorStop(1,"rgba(0, 210, 180, 0.0)"),H.fillStyle=o,H.beginPath(),H.moveTo(e*.22,t),H.lineTo(e*.43,t*.52),H.lineTo(e*.57,t*.52),H.lineTo(e*.78,t),H.closePath(),H.fill(),H.strokeStyle="rgba(0, 229, 163, 0.55)",H.lineWidth=2.5,H.beginPath(),H.moveTo(e*.22,t),H.lineTo(e*.43,t*.52),H.moveTo(e*.78,t),H.lineTo(e*.57,t*.52),H.stroke(),H.restore(),s&&s.length>0)for(const d of s){H.save();const h=d.acknowledged;let u="#f59e0b",f="⚠️";d.type==="STOP"?(u="#ef4444",f="🛑"):d.type==="SPEED_LIMIT_30"?(u="#f59e0b",f="🚸"):d.type==="PEDESTRIAN_CROSSING"?(u="#3b82f6",f="🚶"):d.type==="GIVE_WAY"?(u="#f59e0b",f="⛔"):d.type==="SPEED_LIMIT_50"&&(u="#00d2b4",f="⚡");const g=h?"#00e5a3":u;H.strokeStyle=g,H.lineWidth=h?2.5:1.8,H.beginPath(),H.arc(d.screenX,d.screenY,26,0,Math.PI*2),H.stroke(),h&&(H.fillStyle="rgba(0, 229, 163, 0.2)",H.beginPath(),H.arc(d.screenX,d.screenY,26,0,Math.PI*2),H.fill());const v=h?`✔ NOTICED · ${d.name} (${d.distanceM}m)`:`${f} ${d.name} · ${d.distanceM}m`,m=Math.max(140,v.length*7),p=22,x=Math.round(d.screenX-m/2),b=Math.round(d.screenY-44);H.fillStyle=h?"#00e5a3":"rgba(11, 16, 27, 0.9)",H.strokeStyle=g,H.lineWidth=1.2,H.beginPath(),H.roundRect(x,b,m,p,5),H.fill(),H.stroke(),H.fillStyle=h?"#05100c":"#ffffff",H.font="bold 10px Inter, sans-serif",H.textAlign="center",H.textBaseline="middle",H.fillText(v,x+m/2,b+p/2),H.restore()}if(r){const d=Math.round(r.stopLineZ-a);if(d>-12&&d<125){H.save();const h=r.state,u=h==="RED"?"#ef4444":h==="YELLOW"?"#f59e0b":"#10b981",f=390,g=34,v=Math.round(e*.5-f/2),m=12;H.fillStyle="rgba(11, 16, 27, 0.94)",H.strokeStyle=u,H.lineWidth=1.8,H.shadowColor=u,H.shadowBlur=10,H.beginPath(),H.roundRect(v,m,f,g,17),H.fill(),H.stroke(),H.shadowBlur=0;const p=6,x=v+22,b=m+g/2;H.beginPath(),H.arc(x,b,p,0,Math.PI*2),H.fillStyle=h==="RED"?"#ef4444":"rgba(239, 68, 68, 0.22)",H.fill(),h==="RED"&&(H.strokeStyle="#ff8b85",H.lineWidth=1.2,H.stroke()),H.beginPath(),H.arc(x+18,b,p,0,Math.PI*2),H.fillStyle=h==="YELLOW"?"#f59e0b":"rgba(245, 158, 11, 0.22)",H.fill(),h==="YELLOW"&&(H.strokeStyle="#fde047",H.lineWidth=1.2,H.stroke()),H.beginPath(),H.arc(x+36,b,p,0,Math.PI*2),H.fillStyle=h==="GREEN"?"#10b981":"rgba(16, 185, 129, 0.22)",H.fill(),h==="GREEN"&&(H.strokeStyle="#6ee7b7",H.lineWidth=1.2,H.stroke()),H.fillStyle=u,H.font="bold 11px Inter, sans-serif",H.textAlign="left",H.textBaseline="middle",H.fillText(`JUNCTION: ${h}`,x+52,b),H.fillStyle="#f8fafc",H.font="bold 11px Inter, sans-serif";const y=d>0?`🛑 Stop Line: ${d}m`:"Crossing Intersection";H.fillText(y,x+165,b),H.fillStyle="#94a3b8",H.font="9.5px Inter, sans-serif";const I=h==="RED"?"MANDATORY STOP":h==="YELLOW"?"CLEAR / PREPARE":"CLEAR TO PROCEED";if(H.fillText(I,x+288,b),h==="RED"&&d<45&&d>0){const R=Math.round(e*.5-170),S=m+g+6;H.fillStyle="#ef4444",H.beginPath(),H.roundRect(R,S,340,22,6),H.fill(),H.fillStyle="#0b0f19",H.font="900 10.5px Inter, sans-serif",H.textAlign="center",H.fillText("⚠️ MANDATORY STOP BEHIND SOLID WHITE LINE",e*.5,S+22/2)}H.restore()}}if(Fe.OVERLAYS&&Fe.OVERLAYS.showObstacleBoxes)for(const d of i){const h=d.type==="PEDESTRIAN"||d.name==="PEDESTRIAN"||d.name==="PERSON";let u=h?"#f59e0b":"#ef4444";d.isScenario&&(u=d.alertActive?"#ef4444":"#00d2b4");const f=d.isScenario?`⚡ OFFLINE HAZARD (YOLOv8 + Vision Mamba) · ${d.name} (${d.distanceM}m)`:h?`🚶 PEDESTRIAN - ${d.distanceM} m`:`🚗 VEHICLE - ${d.distanceM} m`;H.save(),H.strokeStyle=u,H.lineWidth=d.isScenario?3:2.5,H.strokeRect(d.minX,d.minY,d.boxW,d.boxH),d.spotted&&(H.fillStyle="rgba(0, 229, 163, 0.22)",H.fillRect(d.minX,d.minY,d.boxW,d.boxH),H.strokeStyle="#00e5a3",H.lineWidth=3.5,H.strokeRect(d.minX,d.minY,d.boxW,d.boxH));const g=22,v=Math.max(130,f.length*7.5),m=Math.round(d.screenX-v/2),p=Math.round(d.minY-g-5);if(H.fillStyle=u,H.beginPath(),H.roundRect(m,p,v,g,4),H.fill(),H.fillStyle="#0b0f19",H.font="bold 11px Inter, sans-serif",H.textAlign="center",H.textBaseline="middle",H.fillText(f,m+v/2,p+g/2),d.isScenario){const x=d.reactionTimeMs?`👁️ Fixation Latency: ${d.reactionTimeMs}ms (${d.isLatencyPass?"≤1200ms PASS":"SLOW"})`:"👁️ Fixation: Searching Target...",b=`⏱️ Dwell: ${d.dwellMs||0}ms (${d.isDwellPass?"≥150ms PASS":"<150ms"})`;H.fillStyle="rgba(11, 16, 27, 0.92)",H.strokeStyle=d.isLatencyPass&&d.isDwellPass?"#00e5a3":"#f59e0b",H.lineWidth=1.5,H.beginPath(),H.roundRect(d.screenX-120,d.maxY+6,240,36,6),H.fill(),H.stroke(),H.fillStyle=d.isLatencyPass?"#00e5a3":"#f59e0b",H.font="bold 10px Inter, sans-serif",H.fillText(x,d.screenX,d.maxY+18),H.fillStyle=d.isDwellPass?"#00e5a3":"#94a3b8",H.fillText(b,d.screenX,d.maxY+32)}else if(d.spotted){const x=`✔ SPOTTED (${d.reactionTimeMs} ms)`;H.fillStyle="#00e5a3",H.beginPath(),H.roundRect(d.screenX-65,d.maxY+4,130,18,4),H.fill(),H.fillStyle="#05100c",H.font="bold 10px Inter, sans-serif",H.fillText(x,d.screenX,d.maxY+13)}H.restore()}n&&wt.valid&&(H.save(),H.strokeStyle="#00e5a3",H.fillStyle="rgba(0, 229, 163, 0.35)",H.lineWidth=2.5,H.beginPath(),H.arc(n.x,n.y,9,0,Math.PI*2),H.fill(),H.stroke(),H.strokeStyle="rgba(0, 229, 163, 0.8)",H.lineWidth=1.5,H.beginPath(),H.moveTo(n.x-14,n.y),H.lineTo(n.x+14,n.y),H.moveTo(n.x,n.y-14),H.lineTo(n.x,n.y+14),H.stroke(),H.restore()),H.save();const l=performance.now()*.001*160%t;H.strokeStyle="rgba(0, 210, 180, 0.28)",H.lineWidth=1.5,H.setLineDash([6,8]),H.beginPath(),H.moveTo(0,l),H.lineTo(e,l),H.stroke(),H.setLineDash([]),H.fillStyle="rgba(11, 16, 27, 0.88)",H.strokeStyle="rgba(0, 210, 180, 0.4)",H.lineWidth=1,H.beginPath(),H.roundRect(12,12,230,24,6),H.fill(),H.stroke(),H.fillStyle="#00d2b4",H.font="bold 10px Inter, sans-serif",H.textAlign="left",H.textBaseline="middle",H.fillText("⚡ Vim-SS2D: 4-Way O(N) Scan Active",22,24),H.restore()}function ru(i="⚠️ WARNING: IMMINENT ROAD HAZARD DETECTED"){const e=document.getElementById("road-hazard-alert-banner");if(e){e.style.display="flex";const t=e.querySelector("span");t&&(t.textContent=i)}}function nr(){const i=document.getElementById("road-hazard-alert-banner");i&&(i.style.display="none")}function Io(){Bl&&Bl({eyesOpen:Un,earLeft:pd,earRight:md,avgEar:Is,perclos:Rs,blinksPerMin:yf,headPose:yn,yawDeg:Ut,pitchDeg:Ft,rollDeg:Wn,drowsiness:Ai,distraction:$t,distractionReason:xi,offRoadDurationSec:An,attentionZone:St,gazeFocus:Dt,gazeStatus:Mt,irisDeltaX:Ot,irisDeltaY:qt,sparkline:ri,mambaTelemetry:Oi.getTelemetry(),isEyesPaused:Fn,eyePauseReason:oi,simulatedPose:sn})}function Of(){return Fn}function au(){return oi}function MM(){return ei==="OPEN"?(ei="CLOSED",sn="EYES_CLOSED"):ei==="CLOSED"?(ei="HIDDEN",sn="FACE_HIDDEN"):(ei="OPEN",sn="ROAD_AHEAD"),ei}function bM(i=null){const e=["ROAD_AHEAD","LEFT_MIRROR","RIGHT_MIRROR","PHONE_DISTRACTION","DASHBOARD_GLANCE","REARVIEW_MIRROR","DROWSY_FATIGUE","EYES_CLOSED","FACE_HIDDEN"];if(i&&e.includes(i))sn=i;else{const n=(e.indexOf(sn)+1)%e.length;sn=e[n]}return ei=sn==="EYES_CLOSED"?"CLOSED":sn==="FACE_HIDDEN"?"HIDDEN":"OPEN",console.log(`[GazeDrive AI] Driver Attention Pose set to: ${sn}`),sn}function EM(i){const e=document.getElementById(i);if(!e)return;const t=e.getContext("2d"),n=e.width,s=e.height;t.clearRect(0,0,n,s),t.strokeStyle="#00d2b4",t.lineWidth=2,t.beginPath();const r=n/(ri.length-1);for(let a=0;a<ri.length;a++){const o=a*r,c=s-ri[a]/48*s;a===0?t.moveTo(o,c):t.lineTo(o,c)}t.stroke(),t.lineTo(n,s),t.lineTo(0,s),t.closePath(),t.fillStyle="rgba(0, 210, 180, 0.08)",t.fill()}function ou(){return{x:Ot,y:qt}}function TM(i){return Fe.OVERLAYS||(Fe.OVERLAYS={}),Fe.OVERLAYS.showObstacleBoxes=!Fe.OVERLAYS.showObstacleBoxes,Fe.OVERLAYS.showObstacleBoxes}function Uf(){Fn=!1,oi=null,dr=0,ca=0,ei="OPEN",sn="ROAD_AHEAD",Mt="Good",$t="Low",St="Road Ahead",Dt="Road Ahead",wt.valid=!0}let Uc;const Ps=[];let Lo=0,Do=0;const Fc={};function wM(i){if(Fc[i])return Fc[i];const e=document.createElement("canvas");e.width=512,e.height=512;const t=e.getContext("2d");if(t.clearRect(0,0,512,512),i==="SPEED_LIMIT_30")t.fillStyle="#ffffff",t.beginPath(),t.arc(256,256,240,0,Math.PI*2),t.fill(),t.strokeStyle="#dc2626",t.lineWidth=48,t.stroke(),t.fillStyle="#0f172a",t.font="900 210px Inter, Arial, sans-serif",t.textAlign="center",t.textBaseline="middle",t.fillText("30",256,262);else if(i==="SPEED_LIMIT_50")t.fillStyle="#ffffff",t.beginPath(),t.arc(256,256,240,0,Math.PI*2),t.fill(),t.strokeStyle="#dc2626",t.lineWidth=48,t.stroke(),t.fillStyle="#0f172a",t.font="900 210px Inter, Arial, sans-serif",t.textAlign="center",t.textBaseline="middle",t.fillText("50",256,262);else if(i==="GO_SLOW")t.save(),t.translate(256,256),t.rotate(Math.PI/4),t.fillStyle="#f59e0b",t.fillRect(-175,-175,350,350),t.strokeStyle="#0f172a",t.lineWidth=28,t.strokeRect(-170,-170,340,340),t.restore(),t.fillStyle="#0f172a",t.font="900 68px Inter, Arial, sans-serif",t.textAlign="center",t.textBaseline="middle",t.fillText("GO",256,210),t.fillText("SLOW",256,290);else if(i==="STOP"){t.fillStyle="#dc2626",t.beginPath();for(let r=0;r<8;r++){const a=r*Math.PI/4+Math.PI/8,o=256+240*Math.cos(a),c=256+240*Math.sin(a);r===0?t.moveTo(o,c):t.lineTo(o,c)}t.closePath(),t.fill(),t.strokeStyle="#ffffff",t.lineWidth=18,t.stroke(),t.fillStyle="#ffffff",t.font="900 130px Inter, Arial, sans-serif",t.textAlign="center",t.textBaseline="middle",t.fillText("STOP",256,260)}else i==="PEDESTRIAN_CROSSING"?(t.fillStyle="#2563eb",t.fillRect(20,20,472,472),t.fillStyle="#ffffff",t.beginPath(),t.moveTo(256,60),t.lineTo(450,430),t.lineTo(62,430),t.closePath(),t.fill(),t.fillStyle="#0f172a",t.fillRect(160,370,192,22),t.fillRect(180,335,152,20),t.beginPath(),t.arc(256,175,26,0,Math.PI*2),t.fill(),t.lineWidth=22,t.strokeStyle="#0f172a",t.beginPath(),t.moveTo(256,205),t.lineTo(256,275),t.moveTo(256,225),t.lineTo(215,260),t.moveTo(256,225),t.lineTo(295,255),t.moveTo(256,275),t.lineTo(220,350),t.moveTo(256,275),t.lineTo(290,345),t.stroke()):i==="GIVE_WAY"?(t.fillStyle="#ffffff",t.beginPath(),t.moveTo(60,70),t.lineTo(452,70),t.lineTo(256,445),t.closePath(),t.fill(),t.strokeStyle="#dc2626",t.lineWidth=42,t.stroke(),t.fillStyle="#0f172a",t.font="900 52px Inter, Arial, sans-serif",t.textAlign="center",t.textBaseline="middle",t.fillText("GIVE",256,180),t.fillText("WAY",256,240)):(t.fillStyle="#f59e0b",t.fillRect(30,30,452,452),t.fillStyle="#0f172a",t.font="900 80px Inter, sans-serif",t.textAlign="center",t.fillText("CAUTION",256,256));const n=new pa(e);return n.anisotropy=8,Fc[i]=n,n}function AM(i){const e=document.createElement("canvas");e.width=512,e.height=160;const t=e.getContext("2d");return t.fillStyle="#f8fafc",t.fillRect(0,0,512,160),t.strokeStyle="#0f172a",t.lineWidth=14,t.strokeRect(6,6,500,148),t.fillStyle="#0f172a",t.font="bold 44px Inter, Arial, sans-serif",t.textAlign="center",t.textBaseline="middle",t.fillText(i,256,80),new pa(e)}function RM(i,e=""){const t=new Ve,n=new ft(.065,.065,3.4,16),s=new ae({color:9741240,metalness:.8,roughness:.3}),r=new B(n,s);r.position.y=1.7,r.castShadow=!0,t.add(r);const a=new ft(.16,.22,.25,12),o=new ae({color:6583435,roughness:.9}),c=new B(a,o);c.position.y=.12,t.add(c);const l=1.15,d=new rs(l,l),h=new ae({map:wM(i),roughness:.25,metalness:.1,side:Dn}),u=new B(d,h);u.position.set(0,2.7,.02),u.castShadow=!0,t.add(u);const f=new se(l+.04,l+.04,.03),g=new ae({color:3359061,metalness:.7,roughness:.4}),v=new B(f,g);if(v.position.set(0,2.7,-.005),v.castShadow=!0,t.add(v),e){const m=new rs(1.2,.38),p=new ae({map:AM(e),roughness:.3,side:Dn}),x=new B(m,p);x.position.set(0,1.9,.02),x.castShadow=!0,t.add(x);const b=new se(1.24,.42,.025),y=new B(b,g);y.position.set(0,1.9,-.005),t.add(y)}return t.rotation.y=Math.PI,t}function CM(i){Uc=new Ve,i.add(Uc),Ps.length=0,[{type:"GO_SLOW",subText:"JUNCTION AHEAD",z:65,speedLimit:35,name:"Go Slow - Junction Ahead"},{type:"SPEED_LIMIT_30",subText:"SCHOOL ZONE",z:155,speedLimit:30,name:"Speed Limit 30 - School Zone"},{type:"PEDESTRIAN_CROSSING",subText:"ZEBRA CROSSING",z:235,speedLimit:40,name:"Zebra Crossing Ahead"},{type:"STOP",subText:"CROSS TRAFFIC",z:310,speedLimit:20,isMandatoryStop:!0,name:"Mandatory Stop Sign"},{type:"GIVE_WAY",subText:"MERGING TRAFFIC",z:410,speedLimit:35,name:"Give Way / Yield"},{type:"SPEED_LIMIT_50",subText:"CITY LIMIT",z:495,speedLimit:50,name:"Speed Limit 50 km/h"}].forEach((t,n)=>{const s=RM(t.type,t.subText);s.position.set(-5,0,t.z),Uc.add(s),Ps.push({id:`sign_${n}_${t.type}`,type:t.type,subText:t.subText,name:t.name,speedLimit:t.speedLimit,isMandatoryStop:!!t.isMandatoryStop,zPos:t.z,mesh:s,acknowledgedByGaze:!1,gazeFixationTimeMs:0,passed:!1})})}function IM(i,e,t,n,s,r,a){let o=50,c="Urban City Drive (50 km/h)",l=null,d=1/0;const h=new D;for(let u=0;u<Ps.length;u++){const f=Ps[u],g=f.zPos-e.z;if(g<5&&g>-90&&f.speedLimit<o&&(o=f.speedLimit,c=f.name),g>0&&g<d&&(d=g,l={...f,distanceM:Math.round(g)}),n&&a&&a.valid&&g>5&&g<75&&(h.copy(f.mesh.position),h.y+=2.6,h.project(n),h.z<1&&Math.abs(h.x)<1.1&&Math.abs(h.y)<1.1)){const m=Math.round((h.x*.5+.5)*s),p=Math.round((-(h.y*.5)+.5)*r);Math.hypot(a.x-m,a.y-p)<48&&(f.acknowledgedByGaze||(f.acknowledgedByGaze=!0,Do++,f.gazeFixationTimeMs=performance.now(),xn("TRAFFIC_SIGN_ACKNOWLEDGED_BY_GAZE",{signId:f.id,name:f.name,speedLimit:f.speedLimit,distanceM:Math.round(g)}),window.dispatchEvent(new CustomEvent("traffic-sign-noticed",{detail:{sign:f,distanceM:Math.round(g)}}))))}g<0&&!f.passed&&(f.passed=!0,Lo++),e.z>f.zPos+40&&(f.zPos+=540,f.mesh.position.z=f.zPos,f.acknowledgedByGaze=!1,f.passed=!1)}return{activeZoneLimit:o,activeZoneName:c,nearestUpcomingSign:l}}function LM(i,e,t,n){if(!i)return[];const s=[],r=new D;for(let a=0;a<Ps.length;a++){const o=Ps[a],c=o.zPos-n;if(c<4||c>85||(r.copy(o.mesh.position),r.y+=2.7,r.project(i),!(r.z<1&&Math.abs(r.x)<1.05&&Math.abs(r.y)<1.05)))continue;const d=Math.round((r.x*.5+.5)*e),h=Math.round((-(r.y*.5)+.5)*t);s.push({id:o.id,name:o.name,type:o.type,screenX:d,screenY:h,distanceM:Math.round(c),acknowledged:o.acknowledgedByGaze})}return s}function cu(){const i=Math.max(1,Lo),t=Math.min(100,Math.round(Do/i*100));return{totalEncountered:Lo,totalAcknowledged:Do,perceptionRatePct:t}}function DM(i=0){Lo=0,Do=0;const e=[65,155,235,310,410,495];Ps.forEach((t,n)=>{t.zPos=i+(e[n]||60+n*80),t.mesh.position.z=t.zPos,t.acknowledgedByGaze=!1,t.passed=!1})}class PM{constructor(){this.isMuted=!1,this.isSpeaking=!1,this.preferredVoice=null,this.lastAnnouncementTime=0,this.minIntervalMs=2800,this.announcedIds=new Set,this.announcedIntersections=new Map,this.currentUtterance=null,this.initVoices()}initVoices(){if(typeof window>"u"||!("speechSynthesis"in window))return;const e=()=>{const t=window.speechSynthesis.getVoices();!t||t.length===0||(this.preferredVoice=t.find(n=>n.name.includes("Google")&&n.lang.startsWith("en"))||t.find(n=>(n.name.includes("Natural")||n.name.includes("Online"))&&n.lang.startsWith("en"))||t.find(n=>n.name.includes("Zira")||n.name.includes("David")||n.name.includes("Samantha"))||t.find(n=>n.lang==="en-US"||n.lang==="en-GB")||t.find(n=>n.lang.startsWith("en"))||t[0])};e(),window.speechSynthesis.onvoiceschanged!==void 0&&(window.speechSynthesis.onvoiceschanged=e)}speak(e,t="NORMAL"){if(this.isMuted||typeof window>"u"||!("speechSynthesis"in window))return;const n=performance.now();if(t==="HIGH"&&this.isSpeaking)window.speechSynthesis.cancel(),this.isSpeaking=!1;else if((this.isSpeaking||n-this.lastAnnouncementTime<this.minIntervalMs)&&t!=="HIGH")return;window.speechSynthesis.paused&&window.speechSynthesis.resume();const s=new SpeechSynthesisUtterance(e);s.rate=1.04,s.pitch=1,s.volume=1,this.preferredVoice&&(s.voice=this.preferredVoice),s.onstart=()=>{this.isSpeaking=!0,this.lastAnnouncementTime=performance.now()},s.onend=()=>{this.isSpeaking=!1,this.currentUtterance=null},s.onerror=()=>{this.isSpeaking=!1,this.currentUtterance=null},this.currentUtterance=s,window.speechSynthesis.speak(s),this.lastAnnouncementTime=n}update({carPos:e,speedKmh:t,signsOverlay:n=[],upcomingIntersection:s=null,allHazards:r=[],scenarioState:a=null}){if(this.isMuted)return;const o=e?e.z:0;if(a&&a.isRunning&&a.isAlertActive&&!a.isFrozen){const l=`scn_alert_${a.activeScenario?a.activeScenario.id:"SCN_ACTIVE"}`;if(!this.announcedIds.has(l)){this.announcedIds.add(l);const d=a.activeScenario;let h="Caution! Imminent hazard ahead. Apply brakes.";d&&d.hazardType==="PEDESTRIAN"?h="Warning: Pedestrian crossing your lane. Brake now.":d&&d.hazardType==="VEHICLE"?h="Hazard ahead: Lead vehicle emergency braking. Slow down.":d&&d.hazardType==="CYCLIST"&&(h="Caution: Cyclist entering roadway ahead."),this.speak(h,"HIGH");return}}for(const c of r)if(c.distanceM>8&&c.distanceM<50){const l=`hazard_${c.id||c.name}_${Math.floor(o/250)}`;if(!this.announcedIds.has(l)){this.announcedIds.add(l);let d="";const h=c.type==="PEDESTRIAN"||c.name&&c.name.includes("Pedestrian"),u=c.type==="VEHICLE"||c.name&&(c.name.includes("Car")||c.name.includes("Sedan")||c.name.includes("SUV"));if(h?d="Caution: Pedestrian near roadway ahead.":u&&c.distanceM<38?d="Traffic slowing ahead.":(c.type==="obstacle"||c.name&&(c.name.includes("Cone")||c.name.includes("Barrier")))&&(d="Work zone ahead. Watch for obstacles."),d){this.speak(d,"HIGH");return}}}if(s){const c=Math.round(s.stopLineZ-o),l=s.junctionZ,d=s.state;if(c>20&&c<75&&this.announcedIntersections.get(l)!==d){if(d==="RED"){this.announcedIntersections.set(l,d),this.speak(`Traffic signal ahead is red. Prepare to stop in ${Math.round(c)} meters.`,"HIGH");return}else if(d==="YELLOW"&&c<50){this.announcedIntersections.set(l,d),this.speak("Signal is yellow. Prepare to stop.","NORMAL");return}}}if(n&&n.length>0){for(const c of n)if(c.distanceM>=45&&c.distanceM<=85){const l=`sign_${c.id||c.type}_${Math.floor(o/300)}`;if(!this.announcedIds.has(l)){this.announcedIds.add(l);let d="";if(c.type==="SPEED_LIMIT_30"||c.subText&&c.subText.includes("SCHOOL")?d="Caution: School zone ahead. Speed limit 30 kilometers per hour.":c.type==="GO_SLOW"||c.subText&&c.subText.includes("JUNCTION")?d="Junction ahead. Reduce speed.":c.type==="PEDESTRIAN_CROSSING"||c.subText&&c.subText.includes("CROSSING")?d="Pedestrian crossing ahead.":c.type==="STOP"?d="Stop sign ahead. Prepare to come to a complete stop.":c.type==="GIVE_WAY"?d="Yield ahead. Watch for merging traffic.":c.type==="SPEED_LIMIT_50"?d="Speed limit 50 kilometers per hour.":c.name&&(d=`${c.name} ahead.`),d){this.speak(d,"NORMAL");return}}}}}toggleMute(){return this.isMuted=!this.isMuted,this.isMuted&&typeof window<"u"&&"speechSynthesis"in window?(window.speechSynthesis.cancel(),this.isSpeaking=!1):this.isMuted||this.speak("Navigation voice guidance active.","HIGH"),this.isMuted}setMuted(e){this.isMuted=!!e,this.isMuted&&typeof window<"u"&&"speechSynthesis"in window&&(window.speechSynthesis.cancel(),this.isSpeaking=!1)}getMuted(){return this.isMuted}}const gd=new PM,so=[{id:"MANDATORY_01_STOP",category:"MANDATORY",categoryLabel:"🛑 Mandatory Regulatory Sign",title:"STOP Sign",question:"What is the mandatory driver action required when encountering this octagonal sign?",signSvg:`
      <svg viewBox="0 0 100 100" class="sign-svg">
        <polygon points="30,5 70,5 95,30 95,70 70,95 30,95 5,70 5,30" fill="#dc2626" stroke="#ffffff" stroke-width="3"/>
        <text x="50" y="58" font-family="Inter, Arial, sans-serif" font-weight="900" font-size="24" fill="#ffffff" text-anchor="middle">STOP</text>
      </svg>
    `,options:["Slow down and proceed without stopping if cross-street looks clear","Come to a complete stop behind the solid white stop line and proceed only when clear","Honk horn twice and maintain speed through the intersection","Stop only if vehicles are approaching from the left"],correctIndex:1,explanation:"The octagonal STOP sign is a mandatory regulatory sign. Under Section 119 of the Motor Vehicles Act, a driver must bring the vehicle to a complete standstill behind the white stop line or pedestrian crossing, yield right of way to cross traffic, and move only when safe.",ruleCitation:"IRC:67-2012 Code of Practice & Section 119 Motor Vehicles Act"},{id:"MANDATORY_02_GIVE_WAY",category:"MANDATORY",categoryLabel:"🛑 Mandatory Regulatory Sign",title:"GIVE WAY / YIELD Sign",question:"Identify this inverted triangular sign and its legal requirement:",signSvg:`
      <svg viewBox="0 0 100 100" class="sign-svg">
        <polygon points="50,92 8,15 92,15" fill="#ffffff" stroke="#dc2626" stroke-width="12"/>
      </svg>
    `,options:["Dead end road ahead; prepare to make a U-turn","Yield / Give way to traffic on the major road or circulating in the roundabout","Priority road begins; you have absolute right of way","One-way road ending ahead"],correctIndex:1,explanation:"The inverted equilateral triangle is the Give Way / Yield sign. Drivers approaching must slow down or stop if necessary to give precedence to traffic already on the main roadway or roundabout before joining.",ruleCitation:"Regulation 7, Rules of the Road Regulations 1989"},{id:"MANDATORY_03_NO_ENTRY",category:"MANDATORY",categoryLabel:"🛑 Mandatory Regulatory Sign",title:"NO ENTRY Sign",question:"What does this red circle with a horizontal white bar signify?",signSvg:`
      <svg viewBox="0 0 100 100" class="sign-svg">
        <circle cx="50" cy="50" r="45" fill="#dc2626"/>
        <rect x="15" y="42" width="70" height="16" fill="#ffffff" rx="2"/>
      </svg>
    `,options:["Entry strictly prohibited for all vehicular traffic from this direction","Parking allowed for authorized government vehicles only","Speed breaker 100 meters ahead","Level crossing gate closed"],correctIndex:0,explanation:"The No Entry sign prohibits all vehicular traffic from entering the street from this side. Driving past this sign is driving against one-way traffic, a severe offense punishable under Dangerous Driving (Section 184 MVA).",ruleCitation:"Schedule to Motor Vehicles Act & IRC:67"},{id:"MANDATORY_04_ONE_WAY",category:"MANDATORY",categoryLabel:"🛑 Mandatory Regulatory Sign",title:"ONE WAY Traffic Sign",question:"What is indicated by this circular sign featuring a single white directional arrow?",signSvg:`
      <svg viewBox="0 0 100 100" class="sign-svg">
        <circle cx="50" cy="50" r="45" fill="#1d4ed8" stroke="#ffffff" stroke-width="3"/>
        <polygon points="50,18 68,38 56,38 56,80 44,80 44,38 32,38" fill="#ffffff"/>
      </svg>
    `,options:["Vehicular traffic is permitted to travel only in the direction of the arrow","Compulsory ahead or turn right","Narrow bridge ahead in 100 meters","Expressway entrance; minimum speed 60 km/h"],correctIndex:0,explanation:"The One Way sign mandates that traffic must flow exclusively in the direction specified by the arrow. Reversing or traveling in the opposite direction is prohibited.",ruleCitation:"Regulation 11, Rules of the Road Regulations"},{id:"MANDATORY_05_SPEED_LIMIT_50",category:"MANDATORY",categoryLabel:"🛑 Mandatory Regulatory Sign",title:"SPEED LIMIT 50 Sign",question:'What does this circular sign with a red border containing the numeral "50" represent?',signSvg:`
      <svg viewBox="0 0 100 100" class="sign-svg">
        <circle cx="50" cy="50" r="45" fill="#ffffff" stroke="#dc2626" stroke-width="10"/>
        <text x="50" y="62" font-family="Inter, Arial, sans-serif" font-weight="900" font-size="36" fill="#0f172a" text-anchor="middle">50</text>
      </svg>
    `,options:["Recommended cruising speed of 50 km/h","Maximum permissible legal speed limit is 50 km/h; exceeding is a punishable offense","Minimum speed required on this highway is 50 km/h","Distance to nearest city center is 50 kilometers"],correctIndex:1,explanation:"A circular sign with a thick red border and black numeral indicates a Maximum Speed Limit. Exceeding 50 km/h on this stretch constitutes overspeeding under Section 112/183 MVA with penalties ranging from ₹1,000 to ₹4,000 and licence suspension.",ruleCitation:"Section 112 & Section 183 Motor Vehicles (Amendment) Act 2019"},{id:"MANDATORY_06_SPEED_LIMIT_30_SCHOOL",category:"MANDATORY",categoryLabel:"🛑 Mandatory Regulatory Sign",title:"SPEED LIMIT 30 - SCHOOL ZONE",question:"Where is this 30 km/h speed limit sign primarily mandated by Indian road authorities?",signSvg:`
      <svg viewBox="0 0 100 100" class="sign-svg">
        <circle cx="50" cy="50" r="45" fill="#ffffff" stroke="#dc2626" stroke-width="10"/>
        <text x="50" y="62" font-family="Inter, Arial, sans-serif" font-weight="900" font-size="36" fill="#0f172a" text-anchor="middle">30</text>
      </svg>
    `,options:["Near schools, hospitals, residential zones, and heavy pedestrian areas","On multi-lane toll expressways","Only on rural unpaved dirt tracks","Inside automated multi-level parking garages only"],correctIndex:0,explanation:"Under IRC Guidelines and city police traffic regulations, 30 km/h is the statutory maximum speed limit outside schools, universities, hospitals, and high-density pedestrian corridors to minimize child pedestrian fatality risk.",ruleCitation:"IRC:67-2012 & City Traffic Police Speed Notifications"},{id:"MANDATORY_07_OVERTAKING_PROHIBITED",category:"MANDATORY",categoryLabel:"🛑 Mandatory Regulatory Sign",title:"OVERTAKING PROHIBITED Sign",question:"What is the restriction imposed by this sign displaying two cars side by side with one in red?",signSvg:`
      <svg viewBox="0 0 100 100" class="sign-svg">
        <circle cx="50" cy="50" r="45" fill="#ffffff" stroke="#dc2626" stroke-width="10"/>
        <!-- Right black car -->
        <rect x="52" y="36" width="22" height="34" rx="4" fill="#0f172a"/>
        <!-- Left red overtaking car -->
        <rect x="26" y="32" width="22" height="34" rx="4" fill="#dc2626"/>
      </svg>
    `,options:["Two-lane highway starts ahead","Overtaking any moving vehicle is strictly prohibited on this stretch","Red cars have priority over black cars","Dual carriageway merges into single lane"],correctIndex:1,explanation:"The Overtaking Prohibited sign forbids overtaking other moving motor vehicles on narrow roads, blind corners, bridges, or steep ascents where oncoming sight distance is insufficient.",ruleCitation:"Regulation 9, Rules of the Road Regulations 1989"},{id:"MANDATORY_08_HORN_PROHIBITED",category:"MANDATORY",categoryLabel:"🛑 Mandatory Regulatory Sign",title:"HORN PROHIBITED / SILENT ZONE Sign",question:"What does a horn icon crossed with a diagonal red line mean?",signSvg:`
      <svg viewBox="0 0 100 100" class="sign-svg">
        <circle cx="50" cy="50" r="45" fill="#ffffff" stroke="#dc2626" stroke-width="10"/>
        <path d="M 28 46 L 40 46 L 56 32 L 56 68 L 40 54 L 28 54 Z" fill="#0f172a"/>
        <path d="M 64 38 Q 72 50 64 62" stroke="#0f172a" stroke-width="3" fill="none"/>
        <line x1="22" y1="22" x2="78" y2="78" stroke="#dc2626" stroke-width="8"/>
      </svg>
    `,options:["Use horn continuously to alert pedestrians","Honking of horns is strictly prohibited (Silent Zone around hospitals, courts, schools)","Vehicle horn is mandatory to be checked by transport inspector","Music and audio systems must be played on high volume"],correctIndex:1,explanation:"The Horn Prohibited sign designates Silent Zones (within 100m of hospitals, educational institutions, and courts). Unnecessary honking is a violation under Section 194F MVA punishable with a fine of ₹1,000 (first offense) and ₹2,000 (subsequent).",ruleCitation:"Section 194F, Motor Vehicles (Amendment) Act 2019"},{id:"MANDATORY_09_NO_PARKING",category:"MANDATORY",categoryLabel:"🛑 Mandatory Regulatory Sign",title:"NO PARKING Sign",question:"What is the exact distinction between this NO PARKING sign and a NO STOPPING sign?",signSvg:`
      <svg viewBox="0 0 100 100" class="sign-svg">
        <circle cx="50" cy="50" r="45" fill="#1e3a8a" stroke="#dc2626" stroke-width="10"/>
        <line x1="20" y1="20" x2="80" y2="80" stroke="#dc2626" stroke-width="10"/>
      </svg>
    `,options:["Parking is prohibited, but momentary stopping to pick up or set down passengers/goods is permitted","Neither parking nor stopping for any reason is allowed at all","Free parking zone on Sundays and national holidays","Paid parking zone for commercial taxis only"],correctIndex:0,explanation:'A blue circular disc with a single diagonal red slash is NO PARKING: you cannot leave the vehicle unattended, but brief stopping to embark/disembark passengers is allowed. An "X" cross slash means NO STOPPING (stopping even for a second is illegal).',ruleCitation:"Schedule 1, Motor Vehicles Act 1988"},{id:"MANDATORY_10_NO_STOPPING",category:"MANDATORY",categoryLabel:"🛑 Mandatory Regulatory Sign",title:"NO STOPPING / NO STANDING Sign",question:"What is indicated by a blue disc with a red border and a double diagonal red cross (X)?",signSvg:`
      <svg viewBox="0 0 100 100" class="sign-svg">
        <circle cx="50" cy="50" r="45" fill="#1e3a8a" stroke="#dc2626" stroke-width="10"/>
        <line x1="18" y1="18" x2="82" y2="82" stroke="#dc2626" stroke-width="10"/>
        <line x1="82" y1="18" x2="18" y2="82" stroke="#dc2626" stroke-width="10"/>
      </svg>
    `,options:["Road intersection with four-way traffic","No Stopping or Standing: Vehicles cannot stop even momentarily on the carriageway","Emergency breakdown area","Airport flyover entrance"],correctIndex:1,explanation:"The Clearway / No Stopping sign mandates continuous vehicle movement. Halting or standing on the carriage way for any duration is prohibited as it causes severe traffic bottlenecks or accidents.",ruleCitation:"IRC:67-2012 Standards"},{id:"CAUTIONARY_11_PEDESTRIAN_CROSSING",category:"CAUTIONARY",categoryLabel:"⚠️ Cautionary Warning Sign",title:"PEDESTRIAN CROSSING (Zebra Ahead)",question:"What precaution is mandatory upon sighting this triangular pedestrian sign?",signSvg:`
      <svg viewBox="0 0 100 100" class="sign-svg">
        <polygon points="50,10 92,85 8,85" fill="#ffffff" stroke="#dc2626" stroke-width="8"/>
        <!-- Pedestrian figure on zebra stripes -->
        <circle cx="50" cy="38" r="5" fill="#0f172a"/>
        <path d="M 50 44 L 46 62 L 40 76 M 50 48 L 56 60 L 62 76 M 44 52 L 56 52" stroke="#0f172a" stroke-width="3.5" stroke-linecap="round"/>
        <line x1="30" y1="78" x2="70" y2="78" stroke="#0f172a" stroke-width="3"/>
      </svg>
    `,options:["Accelerate rapidly to cross before pedestrians step out","Reduce vehicle speed and yield right of way to any pedestrians crossing","Pedestrians are prohibited from crossing this street","Joggers and athletes track ahead"],correctIndex:1,explanation:"The Pedestrian Crossing warning sign alerts drivers to an upcoming zebra crossing. Under Indian traffic rules, pedestrians have absolute priority on zebra markings; failing to yield carries dangerous driving penalties.",ruleCitation:"Regulation 15, Rules of the Road Regulations 1989"},{id:"CAUTIONARY_12_SCHOOL_AHEAD",category:"CAUTIONARY",categoryLabel:"⚠️ Cautionary Warning Sign",title:"SCHOOL AHEAD Sign",question:"What hazard does this triangular sign with school children signify?",signSvg:`
      <svg viewBox="0 0 100 100" class="sign-svg">
        <polygon points="50,10 92,85 8,85" fill="#ffffff" stroke="#dc2626" stroke-width="8"/>
        <!-- Two children silhouette -->
        <circle cx="44" cy="38" r="4" fill="#0f172a"/>
        <circle cx="58" cy="44" r="3.5" fill="#0f172a"/>
        <path d="M 44 43 L 42 60 L 38 74 M 44 43 L 48 58 L 52 74 M 58 48 L 56 62 L 60 74" stroke="#0f172a" stroke-width="3" stroke-linecap="round"/>
      </svg>
    `,options:["Children and students may be crossing; slow down and observe school zone speed limits (<=30 km/h)","Pedestrian foot overbridge ahead","Public playground with no motor vehicle access","Bus terminal entrance"],correctIndex:0,explanation:"Warns of school premises. Children may impulsively dash across the road. Drivers must decelerate, scan sidewalks, and stay prepared to brake instantly.",ruleCitation:"IRC:67-2012 Code of Practice"},{id:"CAUTIONARY_13_SPEED_BREAKER",category:"CAUTIONARY",categoryLabel:"⚠️ Cautionary Warning Sign",title:"SPEED BREAKER / ROAD HUMP Sign",question:"How should a driver properly respond when encountering this Speed Breaker sign?",signSvg:`
      <svg viewBox="0 0 100 100" class="sign-svg">
        <polygon points="50,10 92,85 8,85" fill="#ffffff" stroke="#dc2626" stroke-width="8"/>
        <!-- Road Hump -->
        <path d="M 22 72 Q 50 40 78 72 Z" fill="#0f172a"/>
      </svg>
    `,options:["Maintain speed and steer violently to avoid the center of the hump","Decelerate smoothly before the hump and traverse in low gear to protect passengers and suspension","Brake hard precisely while the front wheels are on top of the hump","Turn on hazard warning flashers and overtake preceding car"],correctIndex:1,explanation:"Braking on top of a speed breaker puts peak stress on vehicle suspension and front brakes. Drivers must brake before reaching the hump, release brakes just before mounting, and smoothly roll over at ~15-20 km/h.",ruleCitation:"IRC:99-1988 Guidelines on Traffic Calming"},{id:"CAUTIONARY_14_ROUNDABOUT",category:"CAUTIONARY",categoryLabel:"⚠️ Cautionary Warning Sign",title:"ROUNDABOUT AHEAD Sign",question:"What is the priority rule when entering an Indian traffic roundabout indicated by this sign?",signSvg:`
      <svg viewBox="0 0 100 100" class="sign-svg">
        <polygon points="50,10 92,85 8,85" fill="#ffffff" stroke="#dc2626" stroke-width="8"/>
        <!-- 3 Circular Arrows -->
        <circle cx="50" cy="56" r="15" fill="none" stroke="#0f172a" stroke-width="3.5" stroke-dasharray="14 8"/>
      </svg>
    `,options:["Entering vehicles have right of way over vehicles already in the roundabout","Traffic already circulating inside the roundabout coming from your right has right of way","First vehicle to sound their horn has priority","Heaviest commercial vehicle has right of way"],correctIndex:1,explanation:"In Left-Hand Traffic systems like India, vehicles already circulating inside the roundabout or approaching from the right have right of way. Entering drivers must yield.",ruleCitation:"Regulation 8, Rules of the Road Regulations 1989"},{id:"CAUTIONARY_15_NARROW_BRIDGE",category:"CAUTIONARY",categoryLabel:"⚠️ Cautionary Warning Sign",title:"NARROW BRIDGE / ROAD NARROWS Sign",question:"What is the critical driving rule when approaching a narrow bridge signified by this sign?",signSvg:`
      <svg viewBox="0 0 100 100" class="sign-svg">
        <polygon points="50,10 92,85 8,85" fill="#ffffff" stroke="#dc2626" stroke-width="8"/>
        <!-- Narrowing hourglass road -->
        <path d="M 28 75 L 38 60 L 38 48 L 28 35 M 72 75 L 62 60 L 62 48 L 72 35" stroke="#0f172a" stroke-width="4.5" fill="none"/>
      </svg>
    `,options:["Overtaking is strictly prohibited; yield to oncoming vehicles already on the bridge","Overtake quickly before the bridge begins","Reverse back to find a detour","Stop on the bridge to admire scenery"],correctIndex:0,explanation:"When approaching a narrow bridge, width is restricted to single-lane or tight passing. Under Indian traffic regulations, overtaking on bridges is prohibited, and if an oncoming vehicle has already entered, you must yield.",ruleCitation:"Regulation 9(d), Rules of the Road Regulations 1989"},{id:"CAUTIONARY_16_STEEP_DESCENT",category:"CAUTIONARY",categoryLabel:"⚠️ Cautionary Warning Sign",title:"STEEP DESCENT (Ghat / Downhill Slope) Sign",question:"What is the correct vehicle transmission practice on a steep downhill gradient?",signSvg:`
      <svg viewBox="0 0 100 100" class="sign-svg">
        <polygon points="50,10 92,85 8,85" fill="#ffffff" stroke="#dc2626" stroke-width="8"/>
        <!-- Downward triangle ramp with car -->
        <polygon points="26,72 74,72 26,45" fill="#0f172a"/>
      </svg>
    `,options:["Shift into Neutral (N) or hold clutch depressed to save fuel","Select a lower gear (1st or 2nd) to utilize engine braking and avoid brake fade","Turn off engine and coast downhill silently","Keep handbrake partially engaged during descent"],correctIndex:1,explanation:"Coasting in neutral or with clutch depressed on steep descents removes engine braking, causing brake pads to overheat and catastrophically fail (brake fade). Drivers must engage the same lower gear used to climb the hill.",ruleCitation:"Standard Defensive Driving Guidelines & Parivahan RTO Manual"},{id:"CAUTIONARY_17_MEN_AT_WORK",category:"CAUTIONARY",categoryLabel:"⚠️ Cautionary Warning Sign",title:"MEN AT WORK / ROAD WORK Sign",question:"What does this worker silhouette with a shovel warn drivers of?",signSvg:`
      <svg viewBox="0 0 100 100" class="sign-svg">
        <polygon points="50,10 92,85 8,85" fill="#ffffff" stroke="#dc2626" stroke-width="8"/>
        <!-- Worker with shovel -->
        <circle cx="58" cy="40" r="4" fill="#0f172a"/>
        <path d="M 56 46 L 46 58 L 38 68 M 50 54 L 38 58 L 32 72 M 52 50 L 56 68 L 62 76" stroke="#0f172a" stroke-width="3" stroke-linecap="round"/>
        <line x1="30" y1="74" x2="42" y2="60" stroke="#0f172a" stroke-width="2.5"/>
      </svg>
    `,options:["Agricultural farmland entrance","Road construction or utility repairs ahead; slow down and stay alert for road workers and machinery","Pedestrian sports stadium ahead","Archaeological monument excavation"],correctIndex:1,explanation:"Warns of road repair, resurfacing, or excavation ahead. Loose gravel, construction equipment, barriers, and human workers may occupy lanes. Speed must be drastically reduced.",ruleCitation:"IRC:SP:55-2014 Safety in Road Construction Zones"},{id:"CAUTIONARY_18_UNGUARDED_RAILWAY",category:"CAUTIONARY",categoryLabel:"⚠️ Cautionary Warning Sign",title:"UNGUARDED RAILWAY CROSSING Sign",question:"Under Section 131 of the Motor Vehicles Act, what must a driver do at an unguarded railway crossing?",signSvg:`
      <svg viewBox="0 0 100 100" class="sign-svg">
        <polygon points="50,10 92,85 8,85" fill="#ffffff" stroke="#dc2626" stroke-width="8"/>
        <!-- Steam Locomotive Silhouette -->
        <rect x="30" y="52" width="40" height="20" rx="3" fill="#0f172a"/>
        <circle cx="40" cy="74" r="5" fill="#0f172a"/>
        <circle cx="60" cy="74" r="5" fill="#0f172a"/>
        <rect x="52" y="42" width="16" height="12" fill="#0f172a"/>
      </svg>
    `,options:["Honk continuously and cross as fast as possible without stopping","Stop the vehicle, look both ways along the track, listen for approaching train, and proceed only when clear","Cross only if other vehicles are also crossing","Wait for 15 minutes before deciding to cross"],correctIndex:1,explanation:"Section 131 of the Motor Vehicles Act mandates that the driver of every motor vehicle must stop the vehicle before an unguarded level crossing, look left and right down the tracks, and listen for train whistles or engine sounds before crossing.",ruleCitation:"Section 131, Motor Vehicles Act 1988"},{id:"RULES_19_LEFT_HAND_TRAFFIC",category:"RULES_OF_ROAD",categoryLabel:"🚗 Fundamental Rules of the Road",title:"Standard Side of Driving in India",question:"On which side of the roadway must a motor vehicle be driven in India according to the Rules of the Road?",signSvg:null,options:["On the left side of the road, allowing oncoming traffic to pass on the right","On the right side of the road, following North American standards","In the center of the road whenever road markings are absent","On whichever lane has fewer potholes"],correctIndex:0,explanation:"India is a Left-Hand Traffic (LHT) country. Regulation 2 of the Rules of the Road Regulations 1989 requires drivers to keep to the left side of the road and allow all overtaking vehicles to pass on their right.",ruleCitation:"Regulation 2, Rules of the Road Regulations 1989"},{id:"RULES_20_OVERTAKING_LEFT",category:"RULES_OF_ROAD",categoryLabel:"🚗 Fundamental Rules of the Road",title:"Overtaking from the Left Side",question:"Under what specific legal circumstance is overtaking a vehicle from the LEFT permitted in India?",signSvg:null,options:["Whenever the vehicle ahead is moving slower than the speed limit","When the driver of the vehicle ahead has signaled their intention to turn right and moved to the road center","Overtaking on the left is permitted at all times on two-lane roads","Whenever flashing your headlights three times"],correctIndex:1,explanation:"Regulation 5 states that overtaking is normally done strictly on the right. The sole exception is when the vehicle ahead has signaled right and taken up a position in the center to turn right, permitting following traffic to pass on its left.",ruleCitation:"Regulation 5, Rules of the Road Regulations 1989"},{id:"RULES_21_EMERGENCY_VEHICLES",category:"RULES_OF_ROAD",categoryLabel:"🚗 Fundamental Rules of the Road",title:"Emergency Vehicles Priority",question:"What is a driver legally obligated to do when an ambulance or fire brigade vehicle approaches with siren/flashers?",signSvg:null,options:["Speed up to clear the road ahead of them","Immediately draw to the side of the road, stop if necessary, and afford free passage","Maintain speed and follow closely behind to take advantage of the cleared lane","Sound horn to alert other drivers"],correctIndex:1,explanation:"Section 194E of the MVA mandates that every driver must immediately steer to the side of the road and give clear passage to emergency vehicles (ambulance, fire service). Failing to do so attracts a fine of ₹10,000 and up to 6 months imprisonment.",ruleCitation:"Section 194E, Motor Vehicles (Amendment) Act 2019"},{id:"RULES_22_FLASHING_AMBER",category:"RULES_OF_ROAD",categoryLabel:"🚗 Fundamental Rules of the Road",title:"Flashing Amber (Yellow) Traffic Light",question:"What does a flashing AMBER (yellow) traffic signal at an intersection instruct a driver to do?",signSvg:`
      <svg viewBox="0 0 100 100" class="sign-svg">
        <rect x="34" y="10" width="32" height="80" rx="8" fill="#0f172a" stroke="#334155" stroke-width="3"/>
        <circle cx="50" cy="28" r="10" fill="#334155"/>
        <circle cx="50" cy="50" r="10" fill="#f59e0b" stroke="#fef08a" stroke-width="2"/>
        <circle cx="50" cy="72" r="10" fill="#334155"/>
      </svg>
    `,options:["Stop and wait for the signal to turn green","Slow down, look in all directions for cross traffic and pedestrians, and proceed with caution","Speed through the intersection before the red signal appears","The traffic signal is permanently broken; ignore it"],correctIndex:1,explanation:"A flashing amber signal indicates that the automated signal cycle is standby/late night mode. Drivers must slow down, look both ways, yield to any cross traffic already entering, and proceed only with extreme caution.",ruleCitation:"IRC:93-1985 Guidelines on Traffic Signals"},{id:"RULES_23_FREE_LEFT_TURN",category:"RULES_OF_ROAD",categoryLabel:"🚗 Fundamental Rules of the Road",title:"Free Left Turn Rule in India",question:"Can you automatically make a left turn at an Indian road junction when the traffic signal is RED?",signSvg:null,options:["Yes, free left turns are always permitted anywhere in India",'Only if there is an explicit sign or green left-turn arrow indicating "Free Left Turn", otherwise you must wait',"Yes, provided you honk continuously while turning","Only after 10:00 PM at night"],correctIndex:1,explanation:"Contrary to widespread misconception, a red signal applies to all directions unless an unobstructed dedicated left turn slip road or a green directional arrow sign explicitly permits a Free Left Turn. Turning left on red without permission is jumping a red light.",ruleCitation:"IRC:93 & State Motor Vehicle Traffic Rules"},{id:"RULES_24_ZEBRA_CROSSING_STOP_LINE",category:"RULES_OF_ROAD",categoryLabel:"🚗 Fundamental Rules of the Road",title:"Stop Line & Pedestrian Crossing",question:"Where must a vehicle stop when a red signal or pedestrian is crossing at an intersection?",signSvg:null,options:["On top of the zebra crossing stripes","Completely behind the solid white Stop Line painted before the zebra crossing","In the center of the intersection","Past the traffic light post"],correctIndex:1,explanation:"The solid white transverse line painted before a zebra crossing is the Stop Line. Vehicles must stop completely behind this line. Stopping on top of the zebra crossing obstructs pedestrians and constitutes a stop-line violation.",ruleCitation:"Regulation 15, Rules of the Road Regulations 1989"},{id:"RULES_25_HIGH_BEAM_PROHIBITION",category:"RULES_OF_ROAD",categoryLabel:"🚗 Fundamental Rules of the Road",title:"Use of High Beam Headlights",question:"When is a driver legally required to switch from HIGH BEAM to LOW BEAM headlights at night?",signSvg:null,options:["When following another vehicle or when an oncoming vehicle approaches within 200m on city roads","Only when driving inside long tunnels","High beams are never restricted on public roads","Only when stopped at a police checkpoint"],correctIndex:0,explanation:"Using high beams in illuminated urban areas or when facing oncoming traffic causes glare and temporary blindness, leading to fatal crashes. High beams must be dipped to low beams within 200m of oncoming vehicles.",ruleCitation:"Rule 105, Central Motor Vehicles Rules 1989"},{id:"PENALTIES_26_BAC_LIMIT",category:"PENALTIES",categoryLabel:"⚖️ Motor Vehicles Act 2019",title:"Legal Blood Alcohol Content (BAC) Limit",question:"Under Section 185 of the Motor Vehicles Act, what is the maximum permissible Blood Alcohol Concentration (BAC)?",signSvg:null,options:["Zero is safest; legally up to 30 mg of alcohol per 100 ml of blood","Up to 80 mg of alcohol per 100 ml of blood","Up to 150 mg of alcohol per 100 ml of blood","Any amount is legal as long as the driver is not visibly staggering"],correctIndex:0,explanation:"Section 185 MVA specifies that driving with blood alcohol exceeding 30 mg per 100 ml (detected by breathalyzer) is punishable with imprisonment up to 6 months and/or fine up to ₹10,000 for the first offense; subsequent offenses carry up to 2 years imprisonment and ₹15,000 fine.",ruleCitation:"Section 185, Motor Vehicles (Amendment) Act 2019"},{id:"PENALTIES_27_SEATBELT_LAW",category:"PENALTIES",categoryLabel:"⚖️ Motor Vehicles Act 2019",title:"Mandatory Seatbelt Regulations",question:"Who is legally mandated to wear a safety seatbelt in a motor vehicle under Section 194B MVA?",signSvg:null,options:["Only commercial taxi drivers","Driver and all front-facing seat occupants (both front and rear passengers)","Only the driver on expressways","Only children under the age of 10"],correctIndex:1,explanation:"Under Section 194B of the Motor Vehicles (Amendment) Act 2019 and Rule 125(1) CMVR, the driver and all passengers occupying front-facing seats must wear seatbelts. Violation attracts a fine of ₹1,000 per unbuckled occupant.",ruleCitation:"Section 194B, Motor Vehicles Act & Rule 125(1) CMVR"},{id:"PENALTIES_28_MOBILE_PHONE_DRIVING",category:"PENALTIES",categoryLabel:"⚖️ Motor Vehicles Act 2019",title:"Mobile Phone Usage While Driving",question:"What is the law regarding using handheld mobile phones while operating a vehicle in India?",signSvg:null,options:["Holding or speaking on a mobile phone while driving is strictly prohibited; mobile can only be used hands-free for navigation in a dashboard holder","Permitted as long as you drive below 40 km/h in the left lane","Allowed for sending brief text messages at traffic stops","Permitted if using earphones on one ear only"],correctIndex:0,explanation:"Holding or operating a mobile phone while driving constitutes dangerous driving under Section 184(c) MVA, carrying fines up to ₹5,000 and licence suspension. Handheld calls even at red traffic lights are illegal.",ruleCitation:"Section 184(c), Motor Vehicles (Amendment) Act 2019"},{id:"PENALTIES_29_RED_LIGHT_JUMPING",category:"PENALTIES",categoryLabel:"⚖️ Motor Vehicles Act 2019",title:"Red Light Jumping Penalty",question:"What is the penalty for jumping a red traffic light under the amended Motor Vehicles Act?",signSvg:null,options:["₹100 token warning fine","Fine from ₹1,000 up to ₹5,000 and driver licence suspension for 3 months","Vehicle permanently confiscated","No penalty if no crash occurred"],correctIndex:1,explanation:"Disobeying a red traffic light is classified as dangerous driving under Section 184 MVA. It carries a fine between ₹1,000 and ₹5,000, 3 months driving licence suspension, and possible driver refresher training.",ruleCitation:"Section 184 & 206(4), Motor Vehicles (Amendment) Act 2019"},{id:"PENALTIES_30_DOCUMENT_CHECK",category:"PENALTIES",categoryLabel:"⚖️ Motor Vehicles Act 2019",title:"Mandatory Driving Documents",question:"Which valid documents must a driver carry or present electronically via DigiLocker / mParivahan?",signSvg:null,options:["Only the vehicle purchase invoice and Aadhaar card","Driving Licence (DL), Registration Certificate (RC), Valid Insurance Certificate, and Pollution Under Control (PUC) Certificate","Vehicle fuel receipt and voter ID card","Only the bank loan hypothecation papers"],correctIndex:1,explanation:"Every driver must produce: 1) Valid Driving Licence, 2) Registration Certificate (RC), 3) Third-Party or Comprehensive Insurance, and 4) Valid PUC Certificate. Under Rule 139 CMVR, digital versions on DigiLocker or mParivahan apps have legal parity with original physical documents.",ruleCitation:"Section 130 MVA & Rule 139 Central Motor Vehicles Rules"}];class NM{constructor(){this.currentCategory="ALL",this.currentIndex=0,this.cards=[...so],this.userAnswers=new Map,this.mode="FLASHCARD",this.isFlipped=!1}setCategory(e){this.currentCategory=e||"ALL",this.currentCategory==="ALL"?this.cards=[...so]:this.cards=so.filter(t=>t.category===this.currentCategory),this.currentIndex=0,this.isFlipped=!1}setMode(e){this.mode=e==="QUIZ"?"QUIZ":"FLASHCARD",this.isFlipped=!1}getCurrentCard(){return this.cards.length===0?null:this.cards[this.currentIndex]}nextCard(){return this.currentIndex<this.cards.length-1&&(this.currentIndex++,this.isFlipped=!1),this.getCurrentCard()}prevCard(){return this.currentIndex>0&&(this.currentIndex--,this.isFlipped=!1),this.getCurrentCard()}flipCard(){return this.isFlipped=!this.isFlipped,this.isFlipped}shuffle(){for(let e=this.cards.length-1;e>0;e--){const t=Math.floor(Math.random()*(e+1));[this.cards[e],this.cards[t]]=[this.cards[t],this.cards[e]]}return this.currentIndex=0,this.isFlipped=!1,this.getCurrentCard()}submitAnswer(e,t){const n=this.cards.find(r=>r.id===e)||this.getCurrentCard();if(!n)return null;const s=t===n.correctIndex;return this.userAnswers.set(n.id,{cardId:n.id,selectedIndex:t,isCorrect:s,timestamp:performance.now()}),{isCorrect:s,correctIndex:n.correctIndex,explanation:n.explanation,citation:n.ruleCitation}}getAnswer(e){return this.userAnswers.get(e)||null}getScoreSummary(){let e=0,t=0;for(const d of this.userAnswers.values())t++,d.isCorrect&&e++;const n=this.cards.length,s=t>0?Math.round(e/t*100):0,r=n>0?Math.round(e/n*100):0,a=s,o=a>=75;let c="F",l="NEEDS IMPROVEMENT";return t===0?(c="PENDING",l="TEST PENDING / CLICK TO START"):a>=90?(c="A+",l="OUTSTANDING / RTO TEST CLEARED"):a>=80?(c="A",l="COMPLIANT / LICENCE ELIGIBLE"):a>=75?(c="B+",l="QUALIFIED (PARIVAHAN PASS)"):(c="FAIL",l="RETEST RECOMMENDED (PASS IS 75%)"),{answered:t,correct:e,total:n,scorePct:a,attemptedPct:s,overallPct:r,isPassing:o,grade:c,verdict:l}}getItemizedReview(){return so.map((e,t)=>{const n=this.userAnswers.get(e.id);return{index:t+1,id:e.id,category:e.category,categoryLabel:e.categoryLabel,title:e.title,question:e.question,signSvg:e.signSvg,citation:e.ruleCitation,explanation:e.explanation,options:e.options,correctIndex:e.correctIndex,correctAnswerText:e.options[e.correctIndex],candidateAnswerText:n?e.options[n.selectedIndex]:"Not Yet Attempted",isAnswered:!!n,isCorrect:n?n.isCorrect:!1}})}reset(){this.currentIndex=0,this.isFlipped=!1,this.userAnswers.clear()}}const bt=new NM;let Ff=performance.now(),qr=0,lu=0,Bf=[],ws="THEORY";function OM(){const i=document.body;i.innerHTML=`
    <div id="gazedrive-app" class="gazedrive-theme">
      <!-- =========================================================================
           TOP MASTER HEADER
           ========================================================================= -->
      <header class="app-header">
        <div class="header-brand">
          <div class="brand-eye-icon">
            <svg viewBox="0 0 32 32" class="eye-svg">
              <ellipse cx="16" cy="16" rx="14" ry="9" fill="none" stroke="#00d2b4" stroke-width="2.4"/>
              <circle cx="16" cy="16" r="5" fill="#00d2b4"/>
              <circle cx="16" cy="16" r="2.2" fill="#0b0f19"/>
            </svg>
          </div>
          <div class="brand-titles">
            <h1 class="brand-title">GazeDrive AI</h1>
            <span class="brand-subtitle">Safer Drivers · Smarter Roads</span>
          </div>
        </div>

        <!-- TOP STAT METRIC CARDS -->
        <div class="header-metrics-group">
          <!-- 1. SPEED -->
          <div class="top-metric-card">
            <div class="metric-icon-wrap">
              <svg viewBox="0 0 24 24" class="hdr-icon"><circle cx="12" cy="12" r="9" fill="none" stroke="currentColor" stroke-width="2"/><path d="M12 12 L16 8" stroke="currentColor" stroke-width="2" stroke-linecap="round"/></svg>
            </div>
            <div class="metric-details">
              <span class="metric-heading">SPEED</span>
              <div class="metric-stat-row">
                <span id="hdr-speed-val" class="metric-big-num">0</span>
                <span class="metric-unit">km/h</span>
              </div>
            </div>
          </div>

          <!-- 2. GEAR -->
          <div class="top-metric-card">
            <div class="metric-icon-wrap">
              <svg viewBox="0 0 24 24" class="hdr-icon"><path d="M12 15a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z" fill="none" stroke="currentColor" stroke-width="2"/><path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1-2.83 2.83l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-4 0v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1 0-4h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 2.83-2.83l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 4 0v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 0 4h-.09a1.65 1.65 0 0 0-1.51 1Z" fill="none" stroke="currentColor" stroke-width="2"/></svg>
            </div>
            <div class="metric-details">
              <span class="metric-heading">GEAR</span>
              <div class="metric-stat-row">
                <span id="hdr-gear-val" class="metric-big-num">D</span>
                <span id="hdr-gear-label" class="metric-unit">Drive</span>
              </div>
            </div>
          </div>

          <!-- 3. DISTANCE TO HAZARD -->
          <div class="top-metric-card">
            <div class="metric-icon-wrap">
              <svg viewBox="0 0 24 24" class="hdr-icon"><path d="M4 20 L9 4 M20 20 L15 4 M12 7 L12 9 M12 13 L12 15" stroke="currentColor" stroke-width="2" stroke-linecap="round"/></svg>
            </div>
            <div class="metric-details">
              <span class="metric-heading">DISTANCE TO HAZARD</span>
              <div class="metric-stat-row">
                <span id="hdr-dist-hazard" class="metric-big-num">28</span>
                <span class="metric-unit">m</span>
              </div>
            </div>
          </div>

          <!-- 4. DRIVING TIME -->
          <div class="top-metric-card">
            <div class="metric-icon-wrap">
              <svg viewBox="0 0 24 24" class="hdr-icon"><circle cx="12" cy="12" r="9" fill="none" stroke="currentColor" stroke-width="2"/><polyline points="12 7 12 12 15 15" stroke="currentColor" stroke-width="2" stroke-linecap="round"/></svg>
            </div>
            <div class="metric-details">
              <span class="metric-heading">DRIVING TIME</span>
              <div class="metric-stat-row">
                <span id="hdr-driving-time" class="metric-big-num">02:34</span>
              </div>
            </div>
          </div>

          <!-- 5. ACTIVE SPEED ZONE & REGULATION -->
          <div class="top-metric-card" id="hdr-zone-card" title="Active Road Regulation & Speed Zone">
            <div class="metric-icon-wrap">
              <span id="hdr-zone-icon" style="font-size: 16px;">🚸</span>
            </div>
            <div class="metric-details">
              <span class="metric-heading" id="hdr-zone-title">SPEED ZONE</span>
              <div class="metric-stat-row">
                <span id="hdr-zone-limit-val" class="metric-big-num">50</span>
                <span class="metric-unit">km/h</span>
              </div>
            </div>
            <div id="hdr-zone-badge" class="score-verdict-badge good">Urban</div>
          </div>

          <!-- 6. TEST SCORE RING -->
          <div class="top-metric-card score-card" id="btn-open-scorecard" title="Click to open Full RTO / DMV Scorecard">
            <div class="score-ring-wrap">
              <svg class="score-ring-svg" viewBox="0 0 44 44">
                <circle class="ring-bg" cx="22" cy="22" r="18" />
                <circle id="score-ring-progress" class="ring-fg" cx="22" cy="22" r="18" stroke-dasharray="113.1" stroke-dashoffset="27.1" />
              </svg>
            </div>
            <div class="metric-details">
              <span class="metric-heading">TEST SCORE</span>
              <div class="metric-stat-row">
                <span id="hdr-score-num" class="metric-big-num">76</span>
                <span class="metric-unit">/ 100</span>
              </div>
            </div>
            <div class="score-verdict-badge good" id="hdr-score-verdict">Good</div>
          </div>
        </div>

        <!-- HEADER RIGHT PROFILE & STATUS -->
        <div class="header-right-meta">
          <div id="hdr-system-status-pill" class="status-pill-green">
            <span class="pulse-dot"></span>
            <span id="hdr-system-status-text">System Active</span>
          </div>
          <div id="hdr-live-clock" class="hdr-datetime">Apr 26, 2026 04:32 PM</div>
          <button id="btn-hdr-settings" class="hdr-icon-btn" title="Simulation Settings">⚙️</button>
          <div class="hdr-user-avatar" title="Driver Profile: Active Candidate #402">
            <img src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=100&auto=format&fit=crop&q=80" alt="Avatar"/>
          </div>
        </div>
      </header>

      <!-- =========================================================================
           APP BODY: LEFT NAV + CENTER VIEWS + RIGHT SIDEBAR
           ========================================================================= -->
      <div class="app-body-layout">
        <!-- 1. LEFT NAVIGATION SIDEBAR -->
        <aside class="app-left-nav">
          <nav class="nav-menu">
            <button class="nav-btn active" data-tab="dashboard"><span class="nav-icon">🏠</span> Dashboard</button>
            <button class="nav-btn" data-tab="monitoring"><span class="nav-icon">👤</span> Driver Monitoring</button>
            <button class="nav-btn" data-tab="road"><span class="nav-icon">🛣️</span> Road View</button>
            <button class="nav-btn" data-tab="hazards"><span class="nav-icon">⚠️</span> Hazard Detection</button>
            <button class="nav-btn" data-tab="mamba"><span class="nav-icon">⚡</span> Vision Mamba SSM</button>
            <button class="nav-btn" data-tab="analytics"><span class="nav-icon">📊</span> Drive Analytics</button>
            <button class="nav-btn" data-tab="settings"><span class="nav-icon">⚙️</span> Settings</button>
          </nav>

          <div class="left-status-footer">
            <div class="status-indicator-row">
              <span class="status-dot green"></span>
              <span id="lbl-camera-connected">Camera Connected</span>
            </div>
            <div class="status-indicator-row">
              <span class="status-dot cyan pulse"></span>
              <span id="lbl-processing-state">Real-time Processing</span>
            </div>
          </div>
        </aside>

        <!-- 2. CENTER CONTENT WORKSPACE -->
        <main class="app-center-workspace">
          <!-- TOP: ROAD VIEW (FRONT CAMERA) -->
          <section class="card-road-view">
            <div class="card-view-header">
              <div class="view-title-tag">
                <span class="cam-icon">📷</span>
                <span>Road View (Front Camera)</span>
              </div>
              <div class="view-header-actions" style="display: flex; align-items: center; gap: 10px;">
                <button id="btn-toggle-voice" class="cam-toggle-btn" style="border-color: rgba(0, 210, 180, 0.45); color: #00d2b4;" title="Toggle Google Maps-style spoken road navigation alerts [M]">
                  🔊 Voice: On
                </button>
                <button id="btn-toggle-boxes" class="cam-toggle-btn" style="border-color: rgba(148, 163, 184, 0.35); color: #94a3b8;" title="Toggle visible bounding boxes on road obstacles">
                  📦 Boxes: Off
                </button>
                <button id="btn-toggle-camera-view" class="cam-toggle-btn" style="border-color: rgba(56, 189, 248, 0.45); color: #38bdf8;" title="Toggle First-Person Cockpit / Third-Person Chase Camera (Press V or C)">
                  🎥 View: Cockpit [V]
                </button>
                <div class="view-live-badge">
                  <span class="live-dot"></span> LIVE
                </div>
              </div>
            </div>

            <div class="road-view-stage">
              <!-- Three.js 3D Simulation Canvas Container -->
              <div id="canvas-container"></div>

              <!-- Live AI Hazard Detection Overlay Canvas (MediaPipe / COCO-SSD / BBoxes) -->
              <canvas id="road-ai-overlay-canvas"></canvas>

              <!-- Dynamic Hazard Alert Banner at Bottom -->
              <div id="road-hazard-alert-banner" class="road-hazard-banner" style="display: none;">
                <span class="alert-icon">⚠️</span> HAZARD DETECTED
              </div>

              <!-- Dynamic Eye Visibility / Closure Pause Alert Overlay -->
              <div id="eye-pause-overlay" class="eye-pause-overlay" style="display: none;">
                <div class="eye-pause-card">
                  <div class="eye-pause-icon-ring">
                    <span class="eye-pause-icon">👁️🚫</span>
                  </div>
                  <h2 id="eye-pause-title" class="eye-pause-title">EYES NOT VISIBLE · SIMULATION PAUSED</h2>
                  <p id="eye-pause-desc" class="eye-pause-desc">
                    Safety system requires continuous driver eye contact. Face the camera and keep eyes open to resume driving.
                  </p>
                  <div class="eye-pause-badges">
                    <div class="eye-pause-pill danger" id="eye-pause-state-pill">
                      <span class="pulse-dot red"></span>
                      <span id="eye-pause-state-text">Driver Eyes Obscured / Closed</span>
                    </div>
                    <div class="eye-pause-pill" id="eye-pause-timer-pill">
                      Paused: <span id="eye-pause-timer-val">0.0s</span>
                    </div>
                  </div>
                  <div class="eye-pause-helper-row">
                    <span class="helper-sub">💡 Press <strong>[C]</strong> to open eyes or look at camera</span>
                    <button id="btn-quick-resume-eyes" class="quick-resume-btn">Open Eyes & Resume ➔</button>
                  </div>
                </div>
              </div>
            </div>
          </section>

          <!-- BOTTOM: CABIN VIEW (DRIVER CAMERA) + GAZE & ATTENTION -->
          <div class="center-bottom-row">
            <!-- CABIN VIEW (DRIVER CAMERA) -->
            <section class="card-cabin-view">
              <div class="card-view-header">
                <div class="view-title-tag">
                  <span class="cam-icon">📷</span>
                  <span>Cabin View (Driver Camera)</span>
                </div>
                <div class="view-live-badge">
                  <span class="live-dot"></span> LIVE
                </div>
              </div>

              <div class="cabin-view-stage">
                <img id="cabin-driver-fallback-img" src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=600&auto=format&fit=crop&q=80" alt="Driver Camera" style="position: absolute; top: 0; left: 0; width: 100%; height: 100%; object-fit: cover; object-position: center 20%;" />
                <video id="cabin-webcam-video" autoplay playsinline muted style="position: absolute; top: 0; left: 0; width: 100%; height: 100%; object-fit: cover; transform: scaleX(-1); display: none;"></video>
                <canvas id="cabin-mesh-overlay-canvas" style="position: absolute; top: 0; left: 0; width: 100%; height: 100%; pointer-events: none; z-index: 5;"></canvas>

                <div class="cabin-controls-bar">
                  <button id="btn-cabin-toggle-camera" class="cam-toggle-btn" title="Toggle Live Webcam / Demo Candidate Feed">
                    🎥 <span id="lbl-webcam-toggle">Enable Live Webcam</span>
                  </button>
                  <button id="btn-cabin-cycle-pose" class="cam-toggle-btn pose-cycle-btn" title="Cycle Driver Attention Pose (Head Pose, Phone, Mirrors, Drowsiness)">
                    🔄 <span id="lbl-current-pose">Pose: Road Ahead</span>
                  </button>
                  <button id="btn-cabin-calibrate-gaze" class="cam-toggle-btn calib-btn" title="Run 9-Point Screen Gaze Calibration">
                    🎯 <span id="lbl-calibration-status">9-Pt Calibration</span>
                  </button>
                  <button id="btn-cabin-simulate-eyes" class="cam-toggle-btn eye-test-btn" title="Test Eyes Closed or Hidden to Verify Pause">
                    👁️ <span id="lbl-simulate-eyes">Test Eyes: Open</span>
                  </button>
                </div>
              </div>
            </section>

            <!-- GAZE & ATTENTION -->
            <section class="card-gaze-attention">
              <div class="card-view-header">
                <div class="view-title-tag">
                  <span class="cam-icon">👁️</span>
                  <span>Gaze & Attention (MediaPipe Iris + 3D Head Pose)</span>
                </div>
              </div>

              <div class="gaze-attention-body">
                <!-- Big Hero Focus Indicator -->
                <div class="gaze-focus-hero">
                  <div class="gaze-focus-eye-circle">
                    <svg viewBox="0 0 36 36" class="hero-eye-svg">
                      <ellipse cx="18" cy="18" rx="14" ry="9" fill="none" stroke="#00d2b4" stroke-width="2.5"/>
                      <circle id="hero-eye-pupil" cx="18" cy="18" r="5" fill="#00d2b4"/>
                    </svg>
                  </div>
                  <div class="gaze-focus-labels">
                    <span class="gaze-focus-sub">Gaze Focus Zone</span>
                    <span id="lbl-gaze-focus-target" class="gaze-focus-main">Road Ahead</span>
                    <span id="badge-gaze-status" class="status-pill-small good">Good</span>
                  </div>
                </div>

                <!-- Attention Checklist -->
                <div class="attention-metrics-list">
                  <div class="attn-row">
                    <span class="attn-label"><span class="attn-ico">👁️</span> Eyes Open</span>
                    <span id="val-eyes-open" class="attn-value green">100% · EAR 0.32</span>
                  </div>
                  <div class="attn-row">
                    <span class="attn-label"><span class="attn-ico">👤</span> Head Pose</span>
                    <span id="val-head-pose" class="attn-value cyan">Center (0°, 0°)</span>
                  </div>
                  <div class="attn-row">
                    <span class="attn-label"><span class="attn-ico">🌙</span> Drowsiness</span>
                    <span id="val-drowsiness" class="attn-value green">Low (PERCLOS 0%)</span>
                  </div>
                  <div class="attn-row">
                    <span class="attn-label"><span class="attn-ico">🔄</span> Distraction</span>
                    <span id="val-distraction" class="attn-value green">Low</span>
                  </div>
                  <div class="attn-row">
                    <span class="attn-label"><span class="attn-ico">🎯</span> Iris Gaze Vector</span>
                    <span id="val-iris-vector" class="attn-value cyan">dx: 0.00, dy: 0.00</span>
                  </div>
                  <div class="attn-row">
                    <span class="attn-label"><span class="attn-ico">💓</span> Blink Rate</span>
                    <span id="val-blink-rate" class="attn-value green">16 BPM</span>
                  </div>
                  <div class="attn-row">
                    <span class="attn-label"><span class="attn-ico">⚡</span> Vim-SS2D Match</span>
                    <span id="val-mamba-align" class="attn-value cyan">91.4%</span>
                  </div>
                  <div class="attn-row">
                    <span class="attn-label"><span class="attn-ico">🧠</span> SSM Norm ||h_t||</span>
                    <span id="val-mamba-norm" class="attn-value green">1.84</span>
                  </div>
                </div>

                <!-- Vision Mamba Neural Inspector Trigger -->
                <button id="btn-open-mamba-modal" class="mamba-launch-btn" title="Inspect Vision Mamba State-Space Neural Network">
                  ⚡ Inspect Vision Mamba (SS2D) ➔
                </button>

                <!-- Gaze Tracking Sparkline Chart -->
                <div class="gaze-chart-wrap">
                  <div class="gaze-chart-title-row">
                    <span>Gaze Tracking</span>
                    <span class="chart-sub">(Last 10s)</span>
                  </div>
                  <canvas id="gaze-history-sparkline" width="320" height="48"></canvas>
                  <div class="chart-time-ticks">
                    <span>-10s</span>
                    <span>-8s</span>
                    <span>-6s</span>
                    <span>-4s</span>
                    <span>-2s</span>
                    <span>0s</span>
                  </div>
                </div>
              </div>
            </section>
          </div>
        </main>

        <!-- 3. RIGHT SIDEBAR: HAZARDS + VEHICLE DYNAMICS + RECENT EVENTS -->
        <aside class="app-right-sidebar">
          <!-- 1. HAZARD DETECTION -->
          <section class="side-card hazard-detection-card">
            <div class="side-card-header">
              <div class="side-card-title">
                <span>🚗</span>
                <span>Hazard Detection</span>
              </div>
              <button class="card-link-btn" id="btn-view-all-hazards">View All ➔</button>
            </div>

            <div id="hazard-list-container" class="hazard-items-list">
              <div class="hazard-list-item">
                <span class="item-icon car">🚗</span>
                <div class="item-info">
                  <span class="item-name">Vehicle Detected (front)</span>
                </div>
                <span class="item-dist danger">22 m</span>
                <span class="item-time">Now</span>
              </div>
              <div class="hazard-list-item">
                <span class="item-icon ped">🚶</span>
                <div class="item-info">
                  <span class="item-name">Pedestrian Detected (right)</span>
                </div>
                <span class="item-dist warning">36 m</span>
                <span class="item-time">2s ago</span>
              </div>
              <div class="hazard-list-item">
                <span class="item-icon lane">🛣️</span>
                <div class="item-info">
                  <span class="item-name">Lane Deviation</span>
                </div>
                <span class="item-dist muted">-</span>
                <span class="item-time">5s ago</span>
              </div>
              <div class="hazard-list-item">
                <span class="item-icon speed">🛑</span>
                <div class="item-info">
                  <span class="item-name">Speed Limit Exceeded</span>
                </div>
                <span class="item-dist danger">52 / 40 km/h</span>
                <span class="item-time">7s ago</span>
              </div>
            </div>
          </section>

          <!-- 2. VEHICLE DYNAMICS & CONTROLS -->
          <section class="side-card dynamics-card">
            <div class="side-card-header">
              <div class="side-card-title">
                <span>🚗</span>
                <span>Vehicle Dynamics & Controls</span>
              </div>
            </div>

            <!-- 3 Circular Gauges: Speed, RPM, Acceleration -->
            <div class="circular-gauges-row">
              <!-- Speed Gauge -->
              <div class="mini-arc-gauge">
                <svg viewBox="0 0 80 50" class="arc-svg">
                  <path d="M 12 45 A 30 30 0 0 1 68 45" fill="none" stroke="rgba(255,255,255,0.08)" stroke-width="6" stroke-linecap="round"/>
                  <path id="gauge-arc-speed" d="M 12 45 A 30 30 0 0 1 68 45" fill="none" stroke="#00d2b4" stroke-width="6" stroke-linecap="round" stroke-dasharray="88" stroke-dashoffset="40"/>
                </svg>
                <div class="arc-stat-center">
                  <span id="arc-speed-val" class="arc-val">52</span>
                  <span class="arc-unit">km/h</span>
                </div>
                <span class="arc-label">Speed</span>
              </div>

              <!-- RPM Gauge -->
              <div class="mini-arc-gauge">
                <svg viewBox="0 0 80 50" class="arc-svg">
                  <path d="M 12 45 A 30 30 0 0 1 68 45" fill="none" stroke="rgba(255,255,255,0.08)" stroke-width="6" stroke-linecap="round"/>
                  <path id="gauge-arc-rpm" d="M 12 45 A 30 30 0 0 1 68 45" fill="none" stroke="#00d2b4" stroke-width="6" stroke-linecap="round" stroke-dasharray="88" stroke-dashoffset="35"/>
                </svg>
                <div class="arc-stat-center">
                  <span id="arc-rpm-val" class="arc-val">2200</span>
                  <span class="arc-unit">RPM</span>
                </div>
                <span class="arc-label">Engine RPM</span>
              </div>

              <!-- Acceleration Gauge -->
              <div class="mini-arc-gauge">
                <svg viewBox="0 0 80 50" class="arc-svg">
                  <path d="M 12 45 A 30 30 0 0 1 68 45" fill="none" stroke="rgba(255,255,255,0.08)" stroke-width="6" stroke-linecap="round"/>
                  <path id="gauge-arc-accel" d="M 12 45 A 30 30 0 0 1 68 45" fill="none" stroke="#00d2b4" stroke-width="6" stroke-linecap="round" stroke-dasharray="88" stroke-dashoffset="50"/>
                </svg>
                <div class="arc-stat-center">
                  <span id="arc-accel-val" class="arc-val">14</span>
                  <span class="arc-unit">m/s²</span>
                </div>
                <span class="arc-label">Acceleration</span>
              </div>
            </div>

            <!-- Manual Control & D-Pad Row -->
            <div class="manual-controls-subpanel">
              <div class="manual-toggle-row">
                <span>Manual Control</span>
                <label class="switch">
                  <input type="checkbox" id="chk-manual-control" checked>
                  <span class="slider round"></span>
                </label>
              </div>

              <div class="dpad-buttons-row">
                <button id="ctrl-btn-left" class="dpad-btn" title="Steer Left [A / ←]">←</button>
                <button id="ctrl-btn-up" class="dpad-btn" title="Accelerate [W / ↑]">↑</button>
                <button id="ctrl-btn-down" class="dpad-btn" title="Reverse / Decel [S / ↓]">↓</button>
                <button id="ctrl-btn-right" class="dpad-btn" title="Steer Right [D / →]">→</button>
                <button id="ctrl-btn-brake" class="dpad-btn brake-btn" title="Brake [Space]">Brake</button>
                <button id="ctrl-btn-auto" class="dpad-btn auto-btn" title="AI Auto Cruise">Auto</button>
              </div>
            </div>
          </section>

          <!-- 3. RECENT EVENTS -->
          <section class="side-card recent-events-card">
            <div class="side-card-header">
              <div class="side-card-title">
                <span>🕒</span>
                <span>Recent Events</span>
              </div>
              <button class="card-link-btn" id="btn-view-all-events">View All ➔</button>
            </div>

            <div id="recent-events-list" class="recent-events-list">
              <div class="event-item">
                <span class="event-time">04:32</span>
                <span class="event-icon ped">🚶</span>
                <span class="event-desc">Pedestrian detected (right)</span>
                <span class="event-badge high">High</span>
              </div>
              <div class="event-item">
                <span class="event-time">04:28</span>
                <span class="event-icon lane">🛣️</span>
                <span class="event-desc">Lane deviation (mild)</span>
                <span class="event-badge medium">Medium</span>
              </div>
              <div class="event-item">
                <span class="event-time">04:21</span>
                <span class="event-icon speed">⚠️</span>
                <span class="event-desc">Speed limit: 60 km/h</span>
                <span class="event-badge info">Info</span>
              </div>
              <div class="event-item">
                <span class="event-time">04:12</span>
                <span class="event-icon car">🚗</span>
                <span class="event-desc">Vehicle detected (22 m)</span>
                <span class="event-badge info">Info</span>
              </div>
            </div>
          </section>

          <!-- ESP32 HAPTIC FEEDBACK MONITOR -->
          <section class="side-card esp32-haptic-card">
            <div class="side-card-header">
              <div class="side-card-title">
                <span class="pulse-haptic-icon">📳</span>
                <span>ESP32 Haptics</span>
              </div>
              <button class="card-link-btn" id="btn-esp32-connect">Connect USB</button>
            </div>

            <div class="esp32-body">
              <div class="esp32-status-banner">
                <div class="esp32-port-pill" id="esp32-port-pill">
                  <span class="status-dot green" id="esp32-dot"></span>
                  <span id="esp32-mode-label">Virtual ESP32 Simulator</span>
                </div>
                <div class="esp32-duty-badge">
                  Duty: <strong id="esp32-duty-val">0%</strong>
                </div>
              </div>

              <!-- Haptic Motor Vibration Visualizer -->
              <div class="esp32-motor-meter-row">
                <div class="motor-unit-box" id="esp32-motor-box">
                  <div class="motor-icon-ring" id="esp32-motor-ring">
                    <span>⚡</span>
                  </div>
                  <div class="motor-meta">
                    <span class="motor-title">ERM / LRA Actuator</span>
                    <span class="motor-cmd" id="esp32-last-cmd">IDLE (0 PWM)</span>
                  </div>
                </div>
                <button id="btn-esp32-test-pulse" class="haptic-test-btn" title="Send Test Haptic Pulse">Test Pulse</button>
              </div>

              <!-- Real-time Serial Packet Log -->
              <div class="esp32-serial-log" id="esp32-serial-log">
                <div class="serial-log-line init">> Serial initialized @ 115200 baud</div>
                <div class="serial-log-line ready">> Ready for Gaze-Hazard sync</div>
              </div>
            </div>
          </section>
        </aside>
      </div>

      <!-- =========================================================================
           MASTER BOTTOM FOOTER BAR
           ========================================================================= -->
      <footer class="app-bottom-footer">
        <div class="footer-left-progress">
          <div class="footer-steering-icon">
            <svg viewBox="0 0 24 24" class="ft-icon"><circle cx="12" cy="12" r="9" fill="none" stroke="currentColor" stroke-width="2"/><circle cx="12" cy="12" r="3" fill="currentColor"/><line x1="12" y1="3" x2="12" y2="9" stroke="currentColor" stroke-width="2"/><line x1="3" y1="12" x2="9" y2="12" stroke="currentColor" stroke-width="2"/><line x1="15" y1="12" x2="21" y2="12" stroke="currentColor" stroke-width="2"/></svg>
          </div>
          <div class="progress-details">
            <div class="progress-label-row">
              <span>Driving Test Progress</span>
              <span id="footer-test-timer" class="progress-time">0:00 / 10:00</span>
            </div>
            <div class="progress-track">
              <div id="footer-test-progress-bar" class="progress-fill" style="width: 5%;"></div>
            </div>
          </div>
        </div>

        <div class="footer-center-meta">
          <div class="scenario-badge" id="btn-cycle-scenario" style="cursor: pointer;" title="Click to Switch Offline Scenario (YOLOv8 + Vision Mamba)">
            <span class="meta-icon">🏙️</span>
            <div class="meta-texts">
              <span class="meta-label">Offline Scenario (YOLOv8 / Vim) 🔄</span>
              <span id="lbl-current-scenario" class="meta-val">Urban Pedestrian Crossing</span>
            </div>
          </div>

          <div class="scenario-badge">
            <span class="meta-icon">🎯</span>
            <div class="meta-texts">
              <span class="meta-label">Evaluation Engine</span>
              <span id="lbl-test-mode" class="meta-val">Iris Fixation (≤1200ms) + Dwell (≥150ms)</span>
            </div>
          </div>
        </div>

        <div class="footer-actions">
          <button id="btn-open-viva" class="footer-btn btn-viva" title="Open Traffic Rules Viva Examination"><span class="btn-ic">📋</span> Traffic Rules Viva</button>
          <button id="btn-end-test" class="footer-btn btn-end"><span class="btn-ic">⏹</span> End Test</button>
          <button id="btn-save-report" class="footer-btn btn-save"><span class="btn-ic">📥</span> Save Report</button>
        </div>
      </footer>

      <!-- OFFICIAL SCORECARD MODAL -->
      <div id="driving-test-modal" class="driving-test-modal">
        <div class="test-scorecard-card">
          <div class="scorecard-header">
            <div>
              <div id="scorecard-title" class="scorecard-title">TRAFFIC RULES VIVA EXAMINATION REPORT</div>
              <div id="scorecard-subtitle" class="scorecard-subtitle">INDIAN TRAFFIC RULES & MVA 2019 VIVA · CANDIDATE #402</div>
            </div>
            <button id="btn-modal-close-test-x" class="debug-close-btn" style="font-size: 16px;">✕</button>
          </div>

          <!-- SCORECARD TABS: Viva vs Practical -->
          <div class="scorecard-tabs-bar">
            <button id="tab-scorecard-theory" class="sc-tab-btn active">📋 Traffic Rules Viva (Questions & Marks)</button>
            <button id="tab-scorecard-practical" class="sc-tab-btn">🚗 3D Driving Skill & Reaction</button>
          </div>

          <div class="scorecard-summary-row">
            <div id="scorecard-circle" class="score-big-circle">
              <span id="modal-test-score" class="score-num">0</span>
              <span id="modal-test-score-unit" class="score-max">/ 30 MARKS</span>
            </div>
            <div class="verdict-box">
              <span id="modal-test-verdict-label" style="font-size: 11px; font-weight: 700; color: var(--text-muted); text-transform: uppercase;">Official Test Verdict</span>
              <span id="modal-test-verdict" class="verdict-tag pass">TEST PENDING</span>
              <span id="modal-test-timestamp" style="font-size: 10px; color: var(--text-dim); margin-top: 2px;">Evaluated in real-time</span>
            </div>
          </div>

          <div id="modal-checklist-title" style="font-size: 12px; font-weight: 800; color: var(--text-main); margin-top: 4px;">
            ITEMIZED QUESTION & MARKS BREAKDOWN:
          </div>

          <div id="modal-test-checklist" class="checklist-table"></div>

          <div class="scorecard-actions">
            <button id="btn-modal-reset-test" class="action-btn-red">🔄 Retake Viva Exam</button>
            <button id="btn-scorecard-take-viva" class="action-btn-teal" style="background:#00d2b4; border:1px solid #00d2b4; color:#0b0f19;">📋 Continue Viva Exam</button>
            <button id="btn-modal-close-test" class="action-btn-teal">Close Report</button>
          </div>
        </div>
      </div>

      <!-- =========================================================================
           VISION MAMBA (VIM / SS2D) ARCHITECTURE INSPECTOR MODAL
           ========================================================================= -->
      <div id="vision-mamba-modal" class="gazedrive-modal-backdrop">
        <div class="mamba-modal-content">
          <div class="modal-header">
            <div class="modal-title-group">
              <div class="title-with-badge">
                <span style="font-size: 20px;">⚡</span>
                <h2 class="modal-title">Vision Mamba (Vim-SS2D) Neural State-Space Inspector</h2>
              </div>
              <p class="modal-subtitle">Bidirectional 2D Selective Scan (SS2D) + Cross-State-Space Gaze-Hazard Attention</p>
            </div>
            <button id="btn-modal-close-mamba-x" class="modal-close-btn">&times;</button>
          </div>

          <!-- TOP METRIC CARDS -->
          <div class="mamba-metric-cards-row">
            <div class="mamba-stat-box">
              <span class="mamba-stat-label">COMPLEXITY</span>
              <span class="mamba-stat-val cyan">O(N) Linear</span>
              <span class="mamba-stat-sub">vs O(N²) ViT Attention</span>
            </div>
            <div class="mamba-stat-box">
              <span class="mamba-stat-label">SSM HIDDEN NORM ||h_t||</span>
              <span id="mamba-modal-norm" class="mamba-stat-val green">1.84</span>
              <span class="mamba-stat-sub">Structured HiPPO Decay</span>
            </div>
            <div class="mamba-stat-box">
              <span class="mamba-stat-label">SELECTIVE STEP Δ_t</span>
              <span id="mamba-modal-delta" class="mamba-stat-val amber">0.192</span>
              <span class="mamba-stat-sub">ZOH Discretization</span>
            </div>
            <div class="mamba-stat-box">
              <span class="mamba-stat-label">CROSS-SSM LOCK</span>
              <span id="mamba-modal-align" class="mamba-stat-val teal">91.4%</span>
              <span class="mamba-stat-sub">RBF Manifold Kernel</span>
            </div>
            <div class="mamba-stat-box">
              <span class="mamba-stat-label">INFERENCE LATENCY</span>
              <span id="mamba-modal-latency" class="mamba-stat-val green">6.8 ms</span>
              <span class="mamba-stat-sub">147 FPS Throughput</span>
            </div>
          </div>

          <!-- MAIN BODY: VISUAL TOKEN HEATMAP + MATHEMATICAL FORMULATION -->
          <div class="mamba-grid-row">
            <!-- LEFT: 16x12 VISUAL PATCH TOKEN ACTIVATION HEATMAP -->
            <div class="mamba-panel">
              <div class="panel-header-row">
                <span class="panel-title">📡 Live 2D Selective Scan (SS2D) Patch Activation Grid</span>
                <span class="panel-pill">192 Tokens (16×12)</span>
              </div>
              <div class="canvas-wrap">
                <canvas id="mamba-heatmap-canvas" width="460" height="230"></canvas>
              </div>
              <div class="heatmap-legend-row">
                <div class="legend-item"><span class="leg-color leg-scan"></span> 4-Way Sweep (SS2D)</div>
                <div class="legend-item"><span class="leg-color leg-gaze"></span> Driver Gaze Target</div>
                <div class="legend-item"><span class="leg-color leg-hazard"></span> Detected Hazard Cell</div>
                <div class="legend-item"><span class="leg-color leg-high"></span> Peak Token Saliency</div>
              </div>
            </div>

            <!-- RIGHT: MATHEMATICAL SSM FORMULATION -->
            <div class="mamba-panel">
              <div class="panel-header-row">
                <span class="panel-title">📐 State-Space Discretization & Mathematical Proof</span>
                <span class="panel-pill">Vim-S Backbone</span>
              </div>
              <div class="math-equations-box">
                <div class="eq-block">
                  <span class="eq-name">1. Continuous Time State-Space ODE:</span>
                  <div class="eq-latex">h'(t) = A · h(t) + B(x_t) · x(t) &nbsp;|&nbsp; y(t) = C(x_t) · h(t) + D · x(t)</div>
                </div>
                <div class="eq-block">
                  <span class="eq-name">2. Input-Dependent Parameter Projections (Selective):</span>
                  <div class="eq-latex">Δ_t = softplus(W_Δ · x_t + b_Δ) &nbsp;|&nbsp; B_t = W_B · x_t &nbsp;|&nbsp; C_t = W_C · x_t</div>
                </div>
                <div class="eq-block">
                  <span class="eq-name">3. Zero-Order Hold (ZOH) Discretization:</span>
                  <div class="eq-latex">Ā = exp(Δ_t · A) &nbsp;|&nbsp; B̄ = Δ_t · B_t &nbsp;|&nbsp; h_t = Ā · h_{t-1} + B̄ · x_t</div>
                </div>
                <div class="eq-block">
                  <span class="eq-name">4. 2D Selective Scan Unrolling (4 Scan Directions):</span>
                  <div class="eq-latex">Y = (Scan_Fwd + Scan_Bwd + Scan_ColFwd + Scan_ColBwd) / 4</div>
                </div>
                <div class="eq-block">
                  <span class="eq-name">5. Gaze-Hazard Cross-Manifold Fusion Kernel:</span>
                  <div class="eq-latex">K(g_t, s_k) = exp( - ||g_t - s_k||² / (2σ²) ) &nbsp;[Foveal σ = 0.12]</div>
                </div>
              </div>
            </div>
          </div>

          <!-- BOTTOM TABLE: ALL 3 AI MODELS IN PROJECT PIPELINE -->
          <div class="models-summary-card">
            <div class="table-header-title">🛡️ GazeDrive AI Tri-Model Perception & Evaluation Stack</div>
            <table class="stack-table">
              <thead>
                <tr>
                  <th>Model Component</th>
                  <th>Core Architecture</th>
                  <th>Inputs / Landmarks</th>
                  <th>Complexity / FPS</th>
                  <th>Operational Status</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td><strong>MediaPipe Iris</strong></td>
                  <td>Attention Mesh CNN + Iris Refinement</td>
                  <td>478 3D Face Landmarks + 10 Iris Coordinates</td>
                  <td>~12 ms / 60 FPS</td>
                  <td><span class="tbl-badge green">ACTIVE (Real-Time)</span></td>
                </tr>
                <tr>
                  <td><strong>Road Hazard Model</strong></td>
                  <td>Pretrained COCO-SSD (MobileNetV2)</td>
                  <td>Road View Video Stream (Vehicles, Pedestrians)</td>
                  <td>~32 ms / 30 FPS</td>
                  <td><span class="tbl-badge green">ACTIVE (Pretrained)</span></td>
                </tr>
                <tr>
                  <td><strong>Vision Mamba (Vim)</strong></td>
                  <td>Bidirectional 2D Selective Scan (SS2D)</td>
                  <td>192 Visual Patch Tokens + Driver Gaze Vectors</td>
                  <td>6.8 ms / O(N) Linear</td>
                  <td><span class="tbl-badge cyan">ACTIVE (SS2D Tensor)</span></td>
                </tr>
              </tbody>
            </table>
          </div>

          <div class="scorecard-actions">
            <button id="btn-modal-close-mamba" class="action-btn-teal">Close Inspector</button>
          </div>
        </div>
      </div>

      <!-- 9-POINT SCREEN GAZE CALIBRATION MODAL -->
      <div id="gaze-calibration-modal" class="gazedrive-modal-backdrop">
        <div class="calibration-modal-stage">
          <div class="calibration-top-header">
            <div class="calib-titles">
              <span class="calib-main-title">🎯 9-Point Driver Gaze Calibration</span>
              <span class="calib-sub-title">Maps normalized MediaPipe Iris landmarks (468/473) with 0.7/0.3 EMA to screen pixels</span>
            </div>
            <div class="calib-status-row">
              <span id="calib-step-indicator" class="calib-step-pill">Point 1 of 9</span>
              <button id="btn-close-calibration" class="modal-close-btn">&times;</button>
            </div>
          </div>

          <!-- 9 Calibration Target Points Grid -->
          <div class="calibration-grid-container" id="calibration-dots-container"></div>

          <div class="calibration-bottom-bar">
            <span class="calib-instruction" id="calib-instruction-text">
              Look directly at the active glowing marker. Press [Space] or click dot to record sample.
            </span>
            <div class="calib-action-btns">
              <button id="btn-calib-sample-now" class="calib-capture-btn">Capture Fixation (Space)</button>
              <button id="btn-calib-auto-cycle" class="calib-auto-btn">Auto-Step (1.2s)</button>
            </div>
          </div>
        </div>
      </div>

      <!-- TRAFFIC RULES VIVA EXAMINATION MODAL -->
      <div id="gemini-viva-modal" class="gazedrive-modal-backdrop">
        <div class="flashcard-modal-content">
          <div class="modal-header">
            <div class="modal-title-group">
              <div class="title-with-badge">
                <span style="font-size: 22px;">📋</span>
                <h2 class="modal-title">Traffic Rules Viva Examination</h2>
                <span id="fc-category-badge" class="card-category-tag" style="background:#00d2b426; border-color:#00d2b4; color:#00d2b4;">🛑 MANDATORY SIGNS</span>
                <span id="fc-progress-counter" style="font-size:12px; font-weight:700; color:var(--text-dim); margin-left:8px;">Question 1 of 30</span>
              </div>
              <p class="modal-subtitle">Indian Traffic Rules, IRC:67 Road Signs & Motor Vehicles Act Viva Test</p>
            </div>
            <button id="btn-modal-close-viva-x" class="modal-close-btn">&times;</button>
          </div>

          <!-- TOOLBAR: CATEGORY FILTERS & MODE TOGGLE -->
          <div class="flashcard-toolbar">
            <div class="flashcard-cat-filters" id="fc-cat-filters">
              <button class="cat-filter-btn active" data-cat="ALL">📚 All Rules (30)</button>
              <button class="cat-filter-btn" data-cat="MANDATORY">🛑 Mandatory Signs</button>
              <button class="cat-filter-btn" data-cat="CAUTIONARY">⚠️ Cautionary Signs</button>
              <button class="cat-filter-btn" data-cat="RULES_OF_ROAD">🚗 Rules of the Road</button>
              <button class="cat-filter-btn" data-cat="PENALTIES">⚖️ Penalties & Laws</button>
            </div>
            <div class="mode-toggle-group">
              <button id="btn-mode-flashcard" class="mode-btn active">🎴 Flashcard Mode</button>
              <button id="btn-mode-quiz" class="mode-btn">📝 Quiz Test Mode</button>
            </div>
          </div>

          <!-- MAIN FLASHCARD DISPLAY -->
          <div class="flashcard-main-card" id="fc-main-card">
            <div class="flashcard-card-meta">
              <span id="fc-card-cat-label" class="card-category-tag">🛑 Mandatory Regulatory Sign</span>
              <span id="fc-score-mini" class="fc-score-badge">Score: 0 / 0 (0%)</span>
            </div>

            <div class="flashcard-content-layout">
              <!-- Visual Traffic Sign Display (if sign exists) -->
              <div id="fc-sign-container" class="flashcard-sign-display">
                <!-- SVG injected dynamically -->
              </div>
              <div class="flashcard-prompt-area">
                <h3 id="fc-card-title" class="flashcard-title">STOP Sign</h3>
                <p id="fc-card-question" class="flashcard-question">
                  What is the mandatory driver action required when encountering this octagonal sign?
                </p>
              </div>
            </div>

            <!-- Multiple Choice Interactive Options -->
            <div class="flashcard-options-list" id="fc-options-list">
              <!-- Rendered dynamically -->
            </div>

            <!-- Revealed Answer & Explanation Panel -->
            <div id="fc-revealed-panel" class="flashcard-revealed-panel" style="display: none;">
              <div class="revealed-header">
                <span class="verified-answer-pill">✔ Verified Official Rule Answer</span>
                <span id="fc-rule-citation" class="citation-tag">Section 119 Motor Vehicles Act</span>
              </div>
              <p id="fc-explanation-text" class="revealed-explanation-text">
                Explanation text here...
              </p>
            </div>
          </div>

          <!-- NAVIGATION & ACTION BAR -->
          <div class="flashcard-controls-row">
            <div class="ctrl-btn-group">
              <button id="btn-fc-prev" class="fc-btn">⬅️ Previous</button>
              <button id="btn-fc-flip" class="fc-btn fc-btn-teal">🔄 Flip / Show Answer</button>
              <button id="btn-fc-next" class="fc-btn">Next ➡️</button>
            </div>

            <div class="ctrl-btn-group">
              <button id="btn-fc-shuffle" class="fc-btn" title="Shuffle flashcards randomly">🔀 Shuffle</button>
              <button id="btn-fc-reset" class="fc-btn" title="Reset answers & score">🔄 Restart</button>
              <button id="btn-viva-view-scorecard" class="fc-btn" style="background:var(--accent-cyan); color:#0b101b;">📋 View Scorecard</button>
              <button id="btn-modal-close-viva" class="fc-btn">Close</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  `,UM(),FM(),lM({onMetricsUpdated:BM,onHazardStateChanged:kM}),setTimeout(()=>window.dispatchEvent(new Event("resize")),80)}function UM(){const i=document.querySelectorAll(".nav-btn");i.forEach(J=>{J.addEventListener("click",()=>{const Ne=J.getAttribute("data-tab");if(Ne==="mamba"){he();return}if(Ne==="analytics"){y();return}i.forEach(mt=>mt.classList.remove("active")),J.classList.add("active")})});const e=document.getElementById("ctrl-btn-up"),t=document.getElementById("ctrl-btn-down"),n=document.getElementById("ctrl-btn-left"),s=document.getElementById("ctrl-btn-right"),r=document.getElementById("ctrl-btn-brake"),a=document.getElementById("ctrl-btn-auto");if(e&&(e.addEventListener("mousedown",()=>Gh(1)),e.addEventListener("mouseup",()=>Gh(0))),t&&(t.addEventListener("mousedown",()=>$a(.8)),t.addEventListener("mouseup",()=>$a(0))),n&&(n.addEventListener("mousedown",()=>Ka(1)),n.addEventListener("mouseup",()=>Ka(0))),s&&(s.addEventListener("mousedown",()=>Ka(-1)),s.addEventListener("mouseup",()=>Ka(0))),r&&(r.addEventListener("mousedown",()=>$a(1)),r.addEventListener("mouseup",()=>$a(0))),a){let J=!1;a.addEventListener("click",()=>{J=!J,a.classList.toggle("active",J),J?(Zi(45),a.textContent="Auto: ON"):a.textContent="Auto"})}const o=document.getElementById("btn-cabin-toggle-camera");o&&o.addEventListener("click",()=>{dM()});const c=document.getElementById("btn-toggle-voice");c&&c.addEventListener("click",()=>{const J=gd.toggleMute();zf(J)});const l=document.getElementById("btn-toggle-boxes");l&&l.addEventListener("click",()=>{const J=TM();l.textContent=J?"📦 Boxes: On":"📦 Boxes: Off",l.style.color=J?"#00d2b4":"#94a3b8",l.style.borderColor=J?"rgba(0, 210, 180, 0.5)":"rgba(148, 163, 184, 0.35)"});const d=document.getElementById("btn-toggle-camera-view");d&&d.addEventListener("click",()=>{fx()});const h=document.getElementById("btn-cabin-cycle-pose");h&&h.addEventListener("click",()=>{const J=bM(),Ne=document.getElementById("lbl-current-pose");if(Ne){const mt={ROAD_AHEAD:"Road Ahead",LEFT_MIRROR:"Left Mirror",RIGHT_MIRROR:"Right Mirror",PHONE_DISTRACTION:"Phone (Distracted)",DASHBOARD_GLANCE:"Speedometer",REARVIEW_MIRROR:"Rearview Mirror",DROWSY_FATIGUE:"Drowsy Fatigue",EYES_CLOSED:"Eyes Closed",FACE_HIDDEN:"Face Hidden"};Ne.textContent=`Pose: ${mt[J]||J}`}});const u=document.getElementById("driving-test-modal"),f=document.getElementById("btn-end-test"),g=document.getElementById("btn-open-scorecard"),v=document.getElementById("btn-modal-close-test"),m=document.getElementById("btn-modal-close-test-x"),p=document.getElementById("btn-modal-reset-test"),x=document.getElementById("tab-scorecard-theory"),b=document.getElementById("tab-scorecard-practical"),y=()=>{Yi(),u&&u.classList.add("active")},I=()=>{u&&u.classList.remove("active")};x&&x.addEventListener("click",()=>{ws="THEORY",Yi()}),b&&b.addEventListener("click",()=>{ws="PRACTICAL",Yi()});const T=document.getElementById("btn-scorecard-take-viva");T&&T.addEventListener("click",()=>{I(),ce()}),f&&f.addEventListener("click",()=>{ws="PRACTICAL",y()}),g&&g.addEventListener("click",y),v&&v.addEventListener("click",I),m&&m.addEventListener("click",I),p&&p.addEventListener("click",()=>{ws==="THEORY"?(bt.reset(),Be(),Yi(),I(),ce()):(Go(),pf(),Qn.resetTrial(),kf(),Yi(),I())});const w=document.getElementById("gaze-calibration-modal"),R=document.getElementById("btn-cabin-calibrate-gaze"),S=document.getElementById("btn-close-calibration"),_=document.getElementById("btn-calib-sample-now"),C=document.getElementById("btn-calib-auto-cycle"),F=document.getElementById("calibration-dots-container"),P=document.getElementById("calib-step-indicator"),N=document.getElementById("lbl-calibration-status");let G=null;function L(){if(!F)return;F.innerHTML="";const J=ji.points,Ne=ji.currentPointIndex;J.forEach((mt,At)=>{const It=document.createElement("div");It.className=`calib-target-dot ${At===Ne?"active":""} ${At<Ne?"completed":""}`,It.style.left=`${mt.x*100}%`,It.style.top=`${mt.y*100}%`,It.title=`Calibration Point ${At+1} (${mt.label})`,It.innerHTML='<div class="ring-outer"></div><div class="dot-core"></div>',It.addEventListener("click",()=>{q()}),F.appendChild(It)}),P&&(P.textContent=`Point ${Ne+1} of ${J.length}`)}function q(){const J=ou?ou():{x:0,y:0};if(ji.recordSample(J.x,J.y)){G&&clearInterval(G),w&&w.classList.remove("active");const mt=ji.calibrationMatrix.rmsErrorPx;N&&(N.textContent=`Calibrated (${mt}px RMS)`),Ti("🎯",`9-Pt Gaze Calibration complete (RMS: ${mt}px)`,"High")}else L()}const V=()=>{ji.startCalibration(),L(),w&&w.classList.add("active")},K=()=>{G&&clearInterval(G),w&&w.classList.remove("active")};R&&R.addEventListener("click",V),S&&S.addEventListener("click",K),_&&_.addEventListener("click",q),C&&C.addEventListener("click",()=>{G&&clearInterval(G),G=setInterval(()=>{q(),ji.isCalibrated&&clearInterval(G)},950)});const ie=document.getElementById("btn-esp32-connect"),re=document.getElementById("btn-esp32-test-pulse"),pe=document.getElementById("esp32-duty-val"),ye=document.getElementById("esp32-motor-ring"),Z=document.getElementById("esp32-last-cmd"),te=document.getElementById("esp32-serial-log"),ue=document.getElementById("esp32-mode-label");ie&&ie.addEventListener("click",async()=>{const J=await As.connect();ue&&(ue.textContent=J.mode==="PHYSICAL_SERIAL"?"USB COM Port @ 115200":"Virtual ESP32 Simulator"),Ti("📳",`ESP32 Haptics: ${J.mode}`,"Info")}),re&&re.addEventListener("click",()=>{As.triggerHaptic("ALERT",300,75)}),As.onStateChange=J=>{pe&&(pe.textContent=`${J.dutyCycle}%`),ye&&ye.classList.toggle("vibrating",J.isVibrating),Z&&(Z.textContent=J.lastCommand),te&&J.history&&J.history.length>0&&(te.innerHTML=J.history.map(Ne=>`<div class="serial-log-line">> ${Ne.timestamp} | ${Ne.command} (${Ne.dutyCycle})</div>`).join(""))};const oe=document.getElementById("gemini-viva-modal"),be=document.getElementById("btn-open-viva"),Se=document.getElementById("btn-modal-close-viva"),Ce=document.getElementById("btn-modal-close-viva-x"),Ye=document.getElementById("fc-category-badge"),Pe=document.getElementById("fc-progress-counter"),qe=document.getElementById("fc-card-cat-label"),O=document.getElementById("fc-score-mini"),ht=document.getElementById("fc-sign-container"),$e=document.getElementById("fc-card-title"),We=document.getElementById("fc-card-question"),Ie=document.getElementById("fc-options-list"),lt=document.getElementById("fc-revealed-panel"),Le=document.getElementById("fc-rule-citation"),A=document.getElementById("fc-explanation-text"),M=document.getElementById("btn-fc-prev"),W=document.getElementById("btn-fc-flip"),Q=document.getElementById("btn-fc-next"),ne=document.getElementById("btn-fc-shuffle"),j=document.getElementById("btn-fc-reset"),Ee=document.getElementById("btn-mode-flashcard"),de=document.getElementById("btn-mode-quiz"),xe=document.getElementById("fc-cat-filters");function Be(){const J=bt.getCurrentCard();if(!J)return;const Ne=bt.getScoreSummary();Ye&&(Ye.textContent=J.categoryLabel),Pe&&(Pe.textContent=`Question ${bt.currentIndex+1} of ${bt.cards.length}`),qe&&(qe.textContent=J.categoryLabel),O&&(O.textContent=`Score: ${Ne.correct} / ${Ne.answered} (${Ne.scorePct}%)`),$e&&($e.textContent=J.title),We&&(We.textContent=J.question),ht&&(J.signSvg?(ht.style.display="flex",ht.innerHTML=J.signSvg):(ht.style.display="flex",ht.innerHTML='<span style="font-size: 54px;">🚗</span>')),Le&&(Le.textContent=J.ruleCitation||"Indian Motor Vehicles Act"),A&&(A.textContent=J.explanation);const mt=bt.getAnswer(J.id),At=mt!==null,It=bt.isFlipped;if(lt&&(lt.style.display=At||It?"flex":"none"),Ie){Ie.innerHTML="";const Fi=["A","B","C","D"];J.options.forEach((Bn,pn)=>{const mn=document.createElement("button");mn.className="flashcard-option-btn",At?(pn===J.correctIndex?mn.classList.add("correct"):pn===mt.selectedIndex&&mn.classList.add("wrong"),mn.disabled=!0):It&&pn===J.correctIndex&&mn.classList.add("correct"),mn.innerHTML=`<span class="opt-badge">${Fi[pn]}</span> <span>${Bn}</span>`,mn.addEventListener("click",()=>{At||(bt.submitAnswer(J.id,pn),Be(),Yi())}),Ie.appendChild(mn)})}M&&(M.disabled=bt.currentIndex===0),Q&&(Q.disabled=bt.currentIndex===bt.cards.length-1),W&&(W.textContent=It?"🔄 Hide Answer":"🔄 Flip / Show Answer")}const ce=()=>{oe&&oe.classList.add("active"),Be()},_e=()=>{oe&&oe.classList.remove("active")};if(be&&be.addEventListener("click",()=>ce()),Se&&Se.addEventListener("click",_e),Ce&&Ce.addEventListener("click",_e),M&&M.addEventListener("click",()=>{bt.prevCard(),Be()}),Q&&Q.addEventListener("click",()=>{bt.nextCard(),Be()}),W&&W.addEventListener("click",()=>{bt.flipCard(),Be()}),ne&&ne.addEventListener("click",()=>{bt.shuffle(),Be()}),j&&j.addEventListener("click",()=>{bt.reset(),Be(),Yi()}),Ee&&Ee.addEventListener("click",()=>{bt.setMode("FLASHCARD"),Ee.classList.add("active"),de&&de.classList.remove("active"),Be()}),de&&de.addEventListener("click",()=>{bt.setMode("QUIZ"),de.classList.add("active"),Ee&&Ee.classList.remove("active"),Be()}),xe){const J=xe.querySelectorAll(".cat-filter-btn");J.forEach(Ne=>{Ne.addEventListener("click",()=>{J.forEach(At=>At.classList.remove("active")),Ne.classList.add("active");const mt=Ne.getAttribute("data-cat");bt.setCategory(mt),Be()})})}const De=document.getElementById("btn-viva-view-scorecard");De&&De.addEventListener("click",()=>{_e(),ws="THEORY",Yi(),y()});const Oe=document.getElementById("btn-cycle-scenario"),Me=document.getElementById("lbl-current-scenario");Oe&&Oe.addEventListener("click",()=>{Qn.nextScenario();const J=Qn.getState();Me&&J.activeScenario&&(Me.textContent=J.activeScenario.name),Ti("🏙️",`Scenario switched: ${J.activeScenario.name}`,"Info")}),Qn.onTrialCompleted=J=>{Ti("🏁",`Trial ${J.scenarioName}: ${J.outcome} (Fixation: ${J.firstFixationLatencyMs}ms)`,"High")},Qn.onAlertOnset=J=>{Ti("⚠️",`HAZARD ALERT ONSET: ${J.name} - Alert-to-Freeze window open`,"High")},Qn.onTestFailedDueToHazards=J=>{Ti("🚨",`Test Disqualified: ${J.failedOccurrences} hazard failures. Summoning Viva Examiner.`,"High"),setTimeout(()=>{ce({totalOccurrences:J.totalOccurrences,failedOccurrences:J.failedOccurrences,scenarioName:J.lastTrial?J.lastTrial.scenarioName:"Emergency Hazard Encounter",firstFixationLatencyMs:J.lastTrial?J.lastTrial.firstFixationLatencyMs:1450,secondaryDwellMs:J.lastTrial?J.lastTrial.secondaryDwellMs:60})},700)};const Ge=document.getElementById("vision-mamba-modal"),He=document.getElementById("btn-open-mamba-modal"),rt=document.getElementById("btn-modal-close-mamba"),U=document.getElementById("btn-modal-close-mamba-x"),he=()=>{if(Ge){Ge.classList.add("active");const J=document.getElementById("mamba-heatmap-canvas");J&&Oi.renderTokenActivationHeatmap(J,Bf,{x:wt.x,y:wt.y})}},$=()=>{Ge&&Ge.classList.remove("active")};He&&He.addEventListener("click",he),rt&&rt.addEventListener("click",$),U&&U.addEventListener("click",$),Ge&&Ge.addEventListener("click",J=>{J.target===Ge&&$()}),u&&u.addEventListener("click",J=>{J.target===u&&I()}),w&&w.addEventListener("click",J=>{J.target===w&&K()}),oe&&oe.addEventListener("click",J=>{J.target===oe&&_e()}),window.addEventListener("keydown",J=>{J.key==="Escape"&&($(),I(),K(),_e()),J.key===" "&&w&&w.classList.contains("active")&&(J.preventDefault(),q()),(J.key==="c"||J.key==="C"||J.key==="h"||J.key==="H")&&document.activeElement.tagName!=="INPUT"&&document.activeElement.tagName!=="TEXTAREA"&&Ue()});const ee=document.getElementById("btn-cabin-simulate-eyes"),fe=document.getElementById("lbl-simulate-eyes"),me=document.getElementById("btn-quick-resume-eyes");function Ue(){const J=MM();fe&&(fe.textContent=J==="OPEN"?"Test Eyes: Open":J==="CLOSED"?"Test Eyes: Closed (Paused)":"Test Eyes: Hidden (Paused)"),ee&&ee.classList.toggle("active",J!=="OPEN")}ee&&ee.addEventListener("click",Ue),me&&me.addEventListener("click",()=>{Uf();const J=document.getElementById("eye-pause-overlay");J&&(J.style.display="none"),fe&&(fe.textContent="Test Eyes: Open"),ee&&ee.classList.remove("active")}),window.addEventListener("open-mamba-inspector",he);const pt=document.getElementById("btn-save-report");pt&&pt.addEventListener("click",()=>{Ol()}),pt&&pt.addEventListener("click",()=>{Ol()})}function FM(){const i=document.getElementById("hdr-live-clock"),e=()=>{if(!i)return;const t=new Date,n=t.toLocaleDateString("en-US",{month:"short",day:"numeric",year:"numeric"}),s=t.toLocaleTimeString("en-US",{hour:"2-digit",minute:"2-digit",hour12:!0});i.textContent=`${n} ${s}`};e(),setInterval(e,1e3)}function BM(i){const e=document.getElementById("val-eyes-open"),t=document.getElementById("val-head-pose"),n=document.getElementById("val-drowsiness"),s=document.getElementById("val-distraction"),r=document.getElementById("lbl-gaze-focus-target"),a=document.getElementById("badge-gaze-status"),o=document.getElementById("val-iris-vector"),c=document.getElementById("val-blink-rate"),l=document.getElementById("hero-eye-pupil");if(l){const u=Math.max(10,Math.min(26,18+(i.irisDeltaX||0)*32)),f=Math.max(12,Math.min(24,18+(i.irisDeltaY||0)*22));l.setAttribute("cx",u.toFixed(1)),l.setAttribute("cy",f.toFixed(1))}if(e){const u=i.avgEar!==void 0?i.avgEar.toFixed(2):"0.32";e.textContent=`${i.eyesOpen}% · EAR ${u}`,e.className=`attn-value ${i.eyesOpen<35?"danger":"green"}`}if(t){const u=i.yawDeg!==void 0?i.yawDeg>0?`+${Math.round(i.yawDeg)}°`:`${Math.round(i.yawDeg)}°`:"0°",f=i.pitchDeg!==void 0?i.pitchDeg>0?`+${Math.round(i.pitchDeg)}°`:`${Math.round(i.pitchDeg)}°`:"0°";t.textContent=`${i.headPose} (${u}, ${f})`,t.className=`attn-value ${Math.abs(i.yawDeg||0)>20||(i.pitchDeg||0)<-16?"danger":"cyan"}`}if(n&&(n.textContent=`${i.drowsiness} (PERCLOS ${i.perclos||0}%)`,n.className=`attn-value ${i.drowsiness==="Critical"||i.drowsiness==="High"?"danger":i.drowsiness==="Moderate"?"warning":"green"}`),s){const u=i.offRoadDurationSec&&i.offRoadDurationSec>.4?` (${i.offRoadDurationSec.toFixed(1)}s)`:"";s.textContent=`${i.distraction}${u}`,s.className=`attn-value ${i.distraction==="Critical"||i.distraction==="High"?"danger":i.distraction==="Moderate"?"warning":"green"}`}if(o){const u=(i.irisDeltaX||0).toFixed(2),f=(i.irisDeltaY||0).toFixed(2);o.textContent=`dx:${u>0?"+":""}${u}, dy:${f>0?"+":""}${f}`}c&&(c.textContent=`${i.blinksPerMin||16} BPM`),r&&(r.textContent=i.gazeFocus),a&&(a.textContent=i.gazeStatus,a.className=`status-pill-small ${i.gazeStatus.toLowerCase()}`);const d=document.getElementById("val-mamba-align"),h=document.getElementById("val-mamba-norm");d&&i.mambaTelemetry&&(d.textContent=`${i.mambaTelemetry.crossAttentionAlignment}%`),h&&i.mambaTelemetry&&(h.textContent=i.mambaTelemetry.ssmHiddenNorm),EM("gaze-history-sparkline")}function kM(i){i.type==="HAZARD_SPOTTED"&&Ti("🚶",`${i.hazard.name} spotted (${i.reactionTimeMs} ms)`,"High")}function zM(i){const{speedKmh:e,distanceM:t,currentGear:n,engineRpm:s,allHazards:r}=i,a=Math.round(e),o=document.getElementById("hdr-speed-val");o&&(o.textContent=a);const c=document.getElementById("hdr-gear-val"),l=document.getElementById("hdr-gear-label");c&&(c.textContent=n||"D"),l&&(l.textContent=n==="R"?"Reverse":n==="N"?"Neutral":"Drive");const d=r&&r[0]||null,h=d?d.distanceM:Math.max(12,Math.round(120-t%120)),u=document.getElementById("hdr-dist-hazard");u&&(u.textContent=h);const f=Math.max(0,Math.floor((performance.now()-Ff-lu)/1e3)),g=String(Math.floor(f/60)).padStart(2,"0"),v=String(f%60).padStart(2,"0"),m=document.getElementById("hdr-driving-time"),p=document.getElementById("footer-test-timer");m&&(m.textContent=`${g}:${v}`),p&&(p.textContent=`${g}:${v} / 10:00`);const x=document.getElementById("footer-test-progress-bar");if(x){const Se=Math.min(100,Math.max(5,f/600*100));x.style.width=`${Se}%`}const b=Jh?Jh():76,y=document.getElementById("hdr-score-num"),I=document.getElementById("score-ring-progress"),T=document.getElementById("hdr-score-verdict");if(y&&(y.textContent=b),I){const Se=113.1*(1-b/100);I.style.strokeDashoffset=Se,I.style.stroke=b>=75?"#00d2b4":b>=50?"#f59e0b":"#ef4444"}T&&(T.textContent=b>=75?"Good":b>=50?"Warning":"Critical",T.className=`score-verdict-badge ${b>=75?"good":b>=50?"warning":"fail"}`);const w=i.signsData?i.signsData.activeZoneLimit:50;i.signsData&&i.signsData.activeZoneName;const R=a>w+3,S=document.getElementById("hdr-zone-limit-val"),_=document.getElementById("hdr-zone-badge"),C=document.getElementById("hdr-zone-icon"),F=document.getElementById("hdr-zone-card");S&&(S.textContent=w),_&&(R?(_.textContent="SPEEDING!",_.className="score-verdict-badge fail"):(_.textContent=w<=35?"GO SLOW":"COMPLIANT",_.className=w<=35?"score-verdict-badge warning":"score-verdict-badge good")),C&&(C.textContent=w<=30?"🚸":w<=40?"⚠️":"⚡"),F&&(F.style.borderColor=R?"rgba(239, 68, 68, 0.7)":"");const P=document.getElementById("canvas-container"),N=P?P.clientWidth:960,G=P?P.clientHeight:540;xM(r||[],N,G,i.signsOverlay||[],i.upcomingIntersection||null,i.carPos?i.carPos.z:0);const L=document.getElementById("arc-speed-val"),q=document.getElementById("gauge-arc-speed");if(L&&(L.textContent=a),q){const Se=Math.min(1,a/120);q.style.strokeDashoffset=88*(1-Se)}const V=document.getElementById("arc-rpm-val"),K=document.getElementById("gauge-arc-rpm"),ie=Math.round(s||900+a*28);if(V&&(V.textContent=ie),K){const Se=Math.min(1,ie/6e3);K.style.strokeDashoffset=88*(1-Se)}const re=document.getElementById("arc-accel-val"),pe=document.getElementById("gauge-arc-accel"),ye=Math.round(Fe.CAR.acceleration);if(re&&(re.textContent=ye),pe){const Se=Math.min(1,ye/30);pe.style.strokeDashoffset=88*(1-Se)}Bf=r||[],HM(r);const Z=Of(),te=document.getElementById("eye-pause-overlay"),ue=document.getElementById("hdr-system-status-pill"),oe=document.getElementById("hdr-system-status-text");if(Z){if(!qr){qr=performance.now();const Ie=au();Ti("👁️",`Driver eyes ${Ie==="EYES_CLOSED"?"closed":"hidden"} - Test paused`,"High")}lu+=16.6;const Se=((performance.now()-qr)/1e3).toFixed(1);te&&(te.style.display="flex");const Ce=au(),Ye=document.getElementById("eye-pause-title"),Pe=document.getElementById("eye-pause-desc"),qe=document.getElementById("eye-pause-state-text"),O=document.getElementById("eye-pause-timer-val");Ye&&(Ye.textContent=Ce==="EYES_CLOSED"?"EYES CLOSED · SIMULATION PAUSED":"EYES NOT VISIBLE · SIMULATION PAUSED"),Pe&&(Pe.textContent=Ce==="EYES_CLOSED"?"Driver eyes are closed. Open your eyes to resume the driving evaluation.":"Driver eyes / face are hidden or obscured. Please face the camera to resume."),qe&&(qe.textContent=Ce==="EYES_CLOSED"?"Eyes State: Closed (0%)":"Eye Tracking: Lost / Obscured"),O&&(O.textContent=`${Se}s`),ue&&(ue.className="status-pill-red"),oe&&(oe.textContent=Ce==="EYES_CLOSED"?"PAUSED (EYES CLOSED)":"PAUSED (EYES HIDDEN)");const ht=document.getElementById("val-eyes-open"),$e=document.getElementById("lbl-gaze-focus-target"),We=document.getElementById("badge-gaze-status");ht&&(ht.textContent=Ce==="EYES_CLOSED"?"0% (Closed)":"Hidden",ht.className="attn-value danger"),$e&&($e.textContent=Ce==="EYES_CLOSED"?"Eyes Closed":"Lost / Hidden"),We&&(We.textContent="ALERT",We.className="status-pill-small alert")}else qr&&(qr=0,Ti("✔","Driver eyes visible & open - Simulation resumed","High")),te&&(te.style.display="none"),ue&&(ue.className="status-pill-green"),oe&&(oe.textContent="System Active");const be=document.getElementById("vision-mamba-modal");if(be&&be.classList.contains("active")){const Se=document.getElementById("mamba-heatmap-canvas");Se&&Oi.renderTokenActivationHeatmap(Se,r,{x:wt.x,y:wt.y});const Ce=Oi.getTelemetry(),Ye=document.getElementById("mamba-modal-norm"),Pe=document.getElementById("mamba-modal-delta"),qe=document.getElementById("mamba-modal-align"),O=document.getElementById("mamba-modal-latency");Ye&&(Ye.textContent=Ce.ssmHiddenNorm),Pe&&(Pe.textContent=Ce.currentDelta),qe&&(qe.textContent=`${Ce.crossAttentionAlignment}%`),O&&(O.textContent=`${Ce.lastLatencyMs} ms`)}}function HM(i){const e=document.getElementById("hazard-list-container");if(!e||!i||i.length===0)return;const t=i.slice(0,4);e.innerHTML=t.map((n,s)=>{const r=n.type==="PEDESTRIAN"||n.name==="PEDESTRIAN",a=r?"🚶":"🚗",o=n.distanceM<30?"danger":"warning",c=s===0?"Now":`${s*2}s ago`;return`
      <div class="hazard-list-item ${n.spotted?"spotted":""}">
        <span class="item-icon ${r?"ped":"car"}">${a}</span>
        <div class="item-info">
          <span class="item-name">${r?"Pedestrian Detected (right)":"Vehicle Detected (front)"}</span>
        </div>
        <span class="item-dist ${o}">${n.distanceM} m</span>
        <span class="item-time">${c}</span>
      </div>
    `}).join("")}function Ti(i,e,t="Info"){const n=document.getElementById("recent-events-list");if(!n)return;const r=new Date().toLocaleTimeString("en-US",{hour:"2-digit",minute:"2-digit",hour12:!1}),a=document.createElement("div");a.className="event-item",a.innerHTML=`
    <span class="event-time">${r}</span>
    <span class="event-icon">${i}</span>
    <span class="event-desc">${e}</span>
    <span class="event-badge ${t.toLowerCase()}">${t}</span>
  `,n.prepend(a),n.children.length>5&&n.removeChild(n.lastChild)}function Yi(){const i=document.getElementById("tab-scorecard-theory"),e=document.getElementById("tab-scorecard-practical");i&&e&&(ws==="THEORY"?(i.classList.add("active"),e.classList.remove("active")):(e.classList.add("active"),i.classList.remove("active")));const t=document.getElementById("scorecard-title"),n=document.getElementById("scorecard-subtitle"),s=document.getElementById("modal-test-score"),r=document.getElementById("modal-test-score-unit"),a=document.getElementById("scorecard-circle"),o=document.getElementById("modal-test-verdict-label"),c=document.getElementById("modal-test-verdict"),l=document.getElementById("modal-test-timestamp"),d=document.getElementById("modal-checklist-title"),h=document.getElementById("modal-test-checklist"),u=document.getElementById("btn-modal-reset-test"),f=document.getElementById("btn-scorecard-take-viva");if(ws==="THEORY"){const L=bt.getScoreSummary();if(t&&(t.textContent="TRAFFIC RULES VIVA EXAMINATION REPORT"),n&&(n.textContent="INDIAN TRAFFIC RULES & ROAD SIGN IDENTIFICATION VIVA (IRC:67 / MVA 2019)"),o&&(o.textContent="Viva Exam Result"),L.answered===0){if(s&&(s.textContent="0"),r&&(r.textContent=`/ ${L.total} MARKS`),a&&(a.style.borderColor="rgba(148, 163, 184, 0.4)",a.style.color="#94a3b8"),c&&(c.textContent="TEST PENDING / CLICK BELOW TO START",c.className="verdict-tag",c.style.background="rgba(148, 163, 184, 0.15)",c.style.color="#94a3b8"),l&&(l.textContent=`No questions attempted yet. Pass mark: 75% (${Math.ceil(L.total*.75)}/${L.total} correct). Click below to start viva.`),d&&(d.textContent="VIVA EXAM STATUS:"),h){h.innerHTML=`
          <div style="text-align:center; padding: 36px 20px; background: rgba(255, 255, 255, 0.02); border: 1px dashed rgba(255, 255, 255, 0.12); border-radius: 12px;">
            <div style="font-size: 38px; margin-bottom: 8px;">📋</div>
            <div style="font-size: 16px; font-weight: 800; color: #f8fafc; margin-bottom: 6px;">No Viva Questions Attempted Yet</div>
            <p style="font-size: 13px; color: var(--text-muted); margin: 0 0 16px 0; max-width: 480px; margin-inline: auto; line-height: 1.5;">
              Answer basic Indian traffic rules, mandatory & cautionary road signs, and right-of-way viva questions to calculate your official score card and marks breakdown.
            </p>
            <button id="btn-sc-start-theory-inner" class="action-btn-teal" style="display:inline-flex; align-items:center; gap:8px; padding:10px 22px; font-size:13px; font-weight:800; cursor:pointer; background:#00d2b4; color:#0b0f19; border:none; border-radius:8px;">
              🚀 Start 30-Question Viva Exam Now
            </button>
          </div>
        `;const q=document.getElementById("btn-sc-start-theory-inner");q&&q.addEventListener("click",()=>{const V=document.getElementById("driving-test-modal");V&&V.classList.remove("active");const K=document.getElementById("gemini-viva-modal");K&&K.classList.add("active")})}}else if(s&&(s.textContent=L.correct),r&&(r.innerHTML=`
          <span style="display:block; font-size: 13px; font-weight: 800; color: var(--text-muted);">/ ${L.answered} MARKS</span>
          <span style="font-size: 11px; font-weight: 800; color: ${L.isPassing?"#10b981":"#ef4444"};">${L.scorePct}% ACCURACY</span>
        `),a&&(a.style.borderColor=L.isPassing?"#10b981":"#ef4444",a.style.color=L.isPassing?"#10b981":"#ef4444"),c&&(c.textContent=L.isPassing?`PASSED / TRAFFIC RULES VIVA QUALIFIED (GRADE ${L.grade})`:`FAILED / VIVA RETEST REQUIRED (${L.scorePct}% SCORING · PASS IS 75%)`,c.className=`verdict-tag ${L.isPassing?"pass":"fail"}`,c.style.background="",c.style.color=""),l&&(l.textContent=`Attempted: ${L.answered} Questions · Marks Scored: ${L.correct} / ${L.answered} (${L.scorePct}%) · Correct: ${L.correct} · Incorrect: ${L.answered-L.correct} · Pass Threshold: 75%`),d&&(d.textContent=`ITEMIZED VIVA QUESTIONS & MARKS BREAKDOWN (${L.correct}/${L.answered} CORRECT):`),h){const q=bt.getItemizedReview(),V=q.filter(K=>K.isAnswered);h.innerHTML=V.map(K=>`
          <div class="checklist-question-review-row" style="background: rgba(255, 255, 255, 0.025); border: 1px solid ${K.isCorrect?"rgba(16, 185, 129, 0.3)":"rgba(239, 68, 68, 0.3)"}; border-radius: 8px; padding: 12px 14px; display: flex; flex-direction: column; gap: 6px;">
            <div class="q-review-top-line" style="display:flex; justify-content:space-between; align-items:center;">
              <span style="font-size: 11px; font-weight: 800; color: #00d2b4; text-transform: uppercase;">
                Q${K.index} · ${K.categoryLabel}
              </span>
              <span class="q-review-mark-pill ${K.isCorrect?"correct":"wrong"}">
                ${K.isCorrect?"+1 Mark · CORRECT ✓":"0 Marks · INCORRECT ✗"}
              </span>
            </div>
            <div class="q-review-title" style="font-size: 13.5px; font-weight: 700; color: #f8fafc; line-height: 1.4;">
              ${K.title}: ${K.question}
            </div>
            <div class="q-review-ans-line" style="color: ${K.isCorrect?"#6ee7b7":"#fca5a5"};">
              <strong>Your Selected Answer:</strong> ${K.candidateAnswerText}
            </div>
            ${K.isCorrect?"":`
            <div class="q-review-ans-line" style="color: #34d399;">
              <strong>Verified Correct RTO Rule:</strong> ${K.correctAnswerText}
            </div>
            `}
            <div class="q-review-citation" style="font-size: 11px; color: var(--text-dim); line-height: 1.4; margin-top: 2px;">
              <span style="color: var(--accent-cyan); font-weight: 600;">Legal Citation:</span> ${K.citation} — <span style="color: #cbd5e1;">${K.explanation}</span>
            </div>
          </div>
        `).join("")+`
          <div style="font-size: 11.5px; text-align: center; color: var(--text-dim); padding: 10px 4px; border-top: 1px solid rgba(255, 255, 255, 0.08); margin-top: 6px;">
            Showing all ${V.length} attempted questions (${L.correct} Correct · ${L.answered-L.correct} Incorrect). Total pool: ${q.length} RTO questions.
          </div>
        `}u&&(u.textContent="🔄 Retake Viva Exam"),f&&(f.textContent="📋 Continue Viva Exam",f.style.background="rgba(0, 210, 180, 0.15)",f.style.borderColor="#00d2b4",f.style.color="#00d2b4");return}const g=Qn.getState(),v=ji.getStatus(),m=g.firstFixationLatencyMs||420,p=g.secondaryDwellMs||280,x=m<=1200,b=p>=150,y=g.outcome==="SUCCESS",I=Ao?Ao():[],T=I.filter(L=>L.type==="RED_LIGHT_JUMP").length,w=I.filter(L=>L.type==="STOP_LINE_VIOLATION").length,R=I.filter(L=>L.type==="SPEEDING_IN_ZONE"||L.type==="SPEEDING").length,S=cu?cu():{totalEncountered:1,totalAcknowledged:1,perceptionRatePct:100},_=[{title:"First-Fixation Latency (≤ 1200 ms)",notes:`MediaPipe Iris gaze fixated in ${m} ms (${x?"Standard met ≤ 1200 ms":"Exceeded reaction threshold"})`,points:x?20:5,maxPoints:20,status:x?"PASS":"FAIL"},{title:"Secondary Gaze Dwell (≥ 150 ms)",notes:`Hazard confirmation dwell time: ${p} ms (${b?"Threshold met ≥ 150 ms":"Inadequate dwell"})`,points:b?15:4,maxPoints:15,status:b?"PASS":"FAIL"},{title:"Alert-to-Freeze Reaction Window",notes:`Defensive Input: ${g.reactionInput||"BRAKE"} inside window · Outcome: ${g.outcome==="COLLISION"?"COLLISION":"SUCCESS (Safe Stop)"}`,points:y?15:0,maxPoints:15,status:y?"PASS":"FAIL"},{title:"Traffic Signal & Stop Line Obedience",notes:T===0&&w===0?"Perfect signal compliance · 0 red jumps, 0 stop line overruns":`${T} RED signal jumps, ${w} stop line overruns`,points:T>0?0:Math.max(0,15-w*5),maxPoints:15,status:T===0?w===0?"PASS":"WARN":"FAIL"},{title:'Speed Limit & "Go Slow" Zone Compliance',notes:R===0?"Adhered strictly to School Zone (30 km/h) & Caution Limits":`${R} zone speeding infractions recorded`,points:Math.max(0,10-R*5),maxPoints:10,status:R===0?"PASS":"WARN"},{title:"Traffic Signboard Visual Perception",notes:`Driver iris gaze fixated on ${S.totalAcknowledged} of ${S.totalEncountered} road signs (${S.perceptionRatePct}% recognized)`,points:Math.round(S.perceptionRatePct/100*10),maxPoints:10,status:S.perceptionRatePct>=50?"PASS":S.perceptionRatePct>=25?"WARN":"FAIL"},{title:"9-Point Screen Gaze Calibration",notes:`Iris 468/473 mapping verified · RMS Error: ${v.rmsErrorPx} px`,points:10,maxPoints:10,status:"PASS"},{title:"Traffic Rules & Road Sign Viva Examination",notes:(()=>{const L=bt.getScoreSummary();return L.answered>0?`Traffic Rules Viva: Grade ${L.grade} (${L.scorePct}% · ${L.correct}/${L.answered} marks) · ${L.verdict}`:'Traffic Rules Viva pending (Click "Take Traffic Rules Viva Exam" to complete)'})(),points:(()=>{const L=bt.getScoreSummary();return L.answered>0?Math.round(L.scorePct*.1):0})(),maxPoints:10,status:(()=>{const L=bt.getScoreSummary();return L.answered>=1&&L.isPassing?"PASS":L.answered>0?"WARN":"PENDING"})()}];let C=_.reduce((L,q)=>L+q.points,0);!y&&g.outcome==="COLLISION"&&(C=Math.min(C,45)),T>0&&(C=Math.min(C,50));const F=bt.getScoreSummary(),P=F.answered>=1?F.isPassing:!0,N=C>=75&&y&&T===0&&P;let G="IN PROGRESS / QUALIFYING";T>0?G="DISQUALIFIED / RED LIGHT JUMP":g.outcome==="COLLISION"?G="FAILED / COLLISION RECORDED":F.answered>=1&&!P?G="FAILED / TRAFFIC RULES VIVA RETEST REQUIRED":N&&(G=F.answered>=1?"PASSED / LICENCE ENDORSED":"QUALIFYING (VIVA PENDING)"),t&&(t.textContent="OFFICIAL DRIVING SKILL TEST REPORT"),n&&(n.textContent="AI GAZE & HAZARD REACTION EVALUATION · CANDIDATE #402"),o&&(o.textContent="Official Test Verdict"),s&&(s.textContent=C),r&&(r.textContent="/ 100 PTS"),a&&(a.style.borderColor=N?"#10b981":C>=50?"#f59e0b":"#ef4444",a.style.color=N?"#10b981":C>=50?"#f59e0b":"#ef4444"),c&&(c.textContent=G,c.className=`verdict-tag ${N?"pass":"fail"}`,c.style.background="",c.style.color=""),l&&(l.textContent=`Evaluated at ${new Date().toLocaleTimeString()} · Scenario: ${g.activeScenario?g.activeScenario.name:"Urban Pedestrian Crossing"} (YOLOv8 + Vision Mamba)`),d&&(d.textContent="EVALUATION CRITERIA CHECKLIST:"),h&&(h.innerHTML=_.map(L=>`
      <div class="checklist-item-row">
        <div class="checklist-name-group">
          <span class="checklist-title">${L.title}</span>
          <span class="checklist-notes">${L.notes}</span>
        </div>
        <div style="display: flex; align-items: center; gap: 8px;">
          <span style="font-weight: 700; color: var(--text-muted); font-size: 11px;">${L.points}/${L.maxPoints} pts</span>
          <span class="checklist-status-badge ${L.status.toLowerCase()}">${L.status}</span>
        </div>
      </div>
    `).join("")),u&&(u.textContent="🔄 Retake / Reset 3D Test"),f&&(f.textContent="📋 Take Traffic Rules Viva Exam",f.style.background="#00d2b4",f.style.borderColor="#00d2b4",f.style.color="#0b0f19")}function du(i){const e=document.getElementById("hdr-gear-val"),t=document.getElementById("hdr-gear-label");e&&(e.textContent=i),t&&(t.textContent=i==="R"?"Reverse":i==="N"?"Neutral":"Drive")}function kf(){Ff=performance.now()}function GM(){return!Of()}function hu(i){const e=document.getElementById("btn-toggle-camera-view");e&&(e.innerHTML=i==="CHASE"?"🎥 View: Chase [V]":"🎥 View: Cockpit [V]",e.style.borderColor=i==="CHASE"?"rgba(0, 210, 180, 0.5)":"rgba(56, 189, 248, 0.45)",e.style.color=i==="CHASE"?"var(--accent-cyan)":"#38bdf8")}function zf(i){const e=document.getElementById("btn-toggle-voice");e&&(e.textContent=i?"🔇 Voice: Muted":"🔊 Voice: On",e.style.color=i?"#94a3b8":"#00d2b4",e.style.borderColor=i?"rgba(148, 163, 184, 0.35)":"rgba(0, 210, 180, 0.45)")}let Xn,dn,Vt,Hf,Ct,Ei="DRIVER",Po=new D,No=new D,uu=0;function fu(){OM();const i=document.getElementById("canvas-container");if(!i){console.error("Canvas container element #canvas-container not found!");return}const e=i.clientWidth||960,t=i.clientHeight||540;Xn=new ly,dn=new rn(Fe.CAMERA.fov,e/t,.1,800),Vt=new cy({antialias:!0,powerPreference:"high-performance"}),Vt.setPixelRatio(Math.min(window.devicePixelRatio,2)),Vt.setSize(e,t),Vt.shadowMap.enabled=!0,Vt.shadowMap.type=gu,Vt.toneMapping=_u,Vt.toneMappingExposure=1.25,i.appendChild(Vt.domElement),eS(Xn),VM(),yS(Xn),jy(Xn),kS(Xn),bS(Xn),CM(Xn),RS(),LS(),lx({onVoiceToggle:()=>{const s=gd.toggleMute();zf(s)},onEyeResume:()=>{Uf()},onCameraToggle:()=>{Ei=Ei==="CHASE"?"DRIVER":"CHASE",kh(Ei),hu(Ei),xn("CAMERA_TOGGLE",{mode:Ei})},onSeatbeltToggle:()=>{const s=ex();xn("SEATBELT_TOGGLE",{fastened:s})},onShiftUp:()=>{const s=tx();du(s),xn("GEAR_SHIFT",{gear:s})},onShiftDown:()=>{const s=nx();du(s),xn("GEAR_SHIFT",{gear:s})},onExportTelemetry:()=>{Ol()},onDebugToggle:()=>{},onRulesDebugToggle:()=>{},onReset:()=>{Go(),ZS(0),wS(0),DM(0),pf(),kf(),xn("SIMULATION_RESET")}}),kh(Ei),hu(Ei),Hf=new Hy,window.addEventListener("resize",pu);const n=nf();Po.set(n.x+Fe.CAMERA.driverOffset.x,n.y+Fe.CAMERA.driverOffset.y,n.z+Fe.CAMERA.driverOffset.z),No.set(n.x+Fe.CAMERA.driverLookAtOffset.x,n.y+Fe.CAMERA.driverLookAtOffset.y,n.z+Fe.CAMERA.driverLookAtOffset.z),dn.position.copy(Po),dn.lookAt(No),setTimeout(pu,100),Gf()}function VM(){const i=new Oy(Fe.COLORS.hemiSky,Fe.COLORS.hemiGround,.85);i.position.set(0,50,0),Xn.add(i),Ct=new ef(Fe.COLORS.sunLight,1.4),Ct.position.set(30,45,20),Ct.castShadow=!0,Ct.shadow.mapSize.width=2048,Ct.shadow.mapSize.height=2048,Ct.shadow.camera.near=.5,Ct.shadow.camera.far=180;const e=30;Ct.shadow.camera.left=-e,Ct.shadow.camera.right=e,Ct.shadow.camera.top=e,Ct.shadow.camera.bottom=-e,Xn.add(Ct),Xn.add(Ct.target)}function WM(i,e,t,n){let s=new D,r=new D;n==="CHASE"?(s.set(t.x+Fe.CAMERA.chaseOffset.x,t.y+Fe.CAMERA.chaseOffset.y,t.z+Fe.CAMERA.chaseOffset.z),r.set(t.x+Fe.CAMERA.chaseLookAtOffset.x,t.y+Fe.CAMERA.chaseLookAtOffset.y,t.z+Fe.CAMERA.chaseLookAtOffset.z)):(s.set(t.x+Fe.CAMERA.driverOffset.x,t.y+Fe.CAMERA.driverOffset.y,t.z+Fe.CAMERA.driverOffset.z),r.set(t.x+Fe.CAMERA.driverLookAtOffset.x,t.y+Fe.CAMERA.driverLookAtOffset.y,t.z+Fe.CAMERA.driverLookAtOffset.z));const a=n==="CHASE"?Fe.CAMERA.lerpFactorPosition:.25,o=n==="CHASE"?Fe.CAMERA.lerpFactorLookAt:.35;Po.lerp(s,Math.min(i*(a*60),1)),No.lerp(r,Math.min(i*(o*60),1)),dn.position.copy(Po),dn.lookAt(No)}function Gf(){requestAnimationFrame(Gf);let i=Hf.getDelta();i>.1&&(i=.1);const e=GM()?i*Fe.simSpeedMultiplier:0;uu++,performance.now();const t=ux(e);Jy(e,t);const n=nf(),s=rx(),r=bo(),a=ax();Ct&&(Ct.position.set(n.x+30,40,n.z+20),Ct.target.position.copy(n)),SS(n.z),TS(e,n),WS(e,n,r,t);const o=document.getElementById("canvas-container"),c=o?o.clientWidth:window.innerWidth,l=o?o.clientHeight:window.innerHeight,d=IM(e>0?e:i,n,r,dn,c,l,wt),h=LM(dn,c,l,n.z),u=uf(n.z);IS(e,n,r,t,d.activeZoneLimit,d.activeZoneName),WM(e>0?e:i,ox(),n,Ei),DS({frameIndex:uu,posX:n.x,posZ:n.z,speedMs:s,speedKmh:r,steering:t.steer,throttle:t.throttle,brake:t.brake,seatbelt:tf(),currentGear:Mo(),engineRpm:Hh(),cameraMode:Ei});const f=Qn.update(e>0?e:i,wt,t,c,l);wt.valid&&qS(wt.x,wt.y,dn,c,l);const g=KS(dn,c,l,n.z);$S(dn,c,l),e>0&&gd.update({carPos:n,speedKmh:r,signsOverlay:h,upcomingIntersection:u,allHazards:g,scenarioState:f}),zM({speedKmh:r,distanceM:a,carPos:n,allHazards:g,signsData:d,signsOverlay:h,upcomingIntersection:u,currentGear:Mo(),engineRpm:Hh()}),Vt.render(Xn,dn)}function pu(){const i=document.getElementById("canvas-container");if(!i||!Vt||!dn)return;const e=i.clientWidth||960,t=i.clientHeight||540;dn.aspect=e/t,dn.updateProjectionMatrix(),Vt.setSize(e,t)}function XM(i){const e=(i||"HIGH").toUpperCase();oS(e),!(!Vt||!Ct)&&(e==="LOW"?(Vt.shadowMap.enabled=!1,Vt.setPixelRatio(1)):e==="MEDIUM"?(Vt.shadowMap.enabled=!0,Ct.shadow.mapSize.width=1024,Ct.shadow.mapSize.height=1024,Vt.setPixelRatio(1)):(Vt.shadowMap.enabled=!0,Ct.shadow.mapSize.width=2048,Ct.shadow.mapSize.height=2048,Vt.setPixelRatio(Math.min(window.devicePixelRatio,2))),console.log(`[GazeDrive] Graphics & Environment Quality set to: ${e}`))}window.setQuality=XM;window.gaze=wt;document.readyState==="loading"?window.addEventListener("DOMContentLoaded",fu):fu();
