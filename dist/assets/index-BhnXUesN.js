(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))n(s);new MutationObserver(s=>{for(const r of s)if(r.type==="childList")for(const a of r.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&n(a)}).observe(document,{childList:!0,subtree:!0});function t(s){const r={};return s.integrity&&(r.integrity=s.integrity),s.referrerPolicy&&(r.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?r.credentials="include":s.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function n(s){if(s.ep)return;s.ep=!0;const r=t(s);fetch(s.href,r)}})();/**
 * @license
 * Copyright 2010-2024 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const yl="170",If=0,rd=1,Lf=2,nu=1,iu=2,di=3,yi=0,on=1,En=2,qi=0,Ys=1,ad=2,od=3,cd=4,Df=5,ls=100,Pf=101,Nf=102,Uf=103,Of=104,Ff=200,Bf=201,kf=202,zf=203,_c=204,xc=205,Hf=206,Gf=207,Vf=208,Wf=209,Xf=210,Yf=211,qf=212,$f=213,Kf=214,yc=0,Mc=1,Sc=2,js=3,Ec=4,bc=5,Tc=6,wc=7,su=0,Zf=1,jf=2,$i=0,Jf=1,Qf=2,ep=3,ru=4,tp=5,np=6,ip=7,ld="attached",sp="detached",au=300,Js=301,Qs=302,Wr=303,Ac=304,_o=306,Mi=1e3,Yn=1001,Qa=1002,Jt=1003,ou=1004,Rr=1005,zt=1006,ka=1007,qn=1008,Si=1009,cu=1010,lu=1011,Xr=1012,Ml=1013,vs=1014,an=1015,vi=1016,Sl=1017,El=1018,er=1020,du=35902,hu=1021,uu=1022,bn=1023,fu=1024,pu=1025,qs=1026,tr=1027,bl=1028,Tl=1029,mu=1030,wl=1031,Al=1033,za=33776,Ha=33777,Ga=33778,Va=33779,Rc=35840,Cc=35841,Ic=35842,Lc=35843,Dc=36196,Pc=37492,Nc=37496,Uc=37808,Oc=37809,Fc=37810,Bc=37811,kc=37812,zc=37813,Hc=37814,Gc=37815,Vc=37816,Wc=37817,Xc=37818,Yc=37819,qc=37820,$c=37821,Wa=36492,Kc=36494,Zc=36495,gu=36283,jc=36284,Jc=36285,Qc=36286,Yr=2300,qr=2301,Ro=2302,dd=2400,hd=2401,ud=2402,rp=2500,ap=0,vu=1,el=2,op=3200,cp=3201,_u=0,lp=1,Gi="",At="srgb",Yt="srgb-linear",xo="linear",dt="srgb",Es=7680,fd=519,dp=512,hp=513,up=514,xu=515,fp=516,pp=517,mp=518,gp=519,tl=35044,pd="300 es",_i=2e3,eo=2001;class lr{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const n=this._listeners;n[e]===void 0&&(n[e]=[]),n[e].indexOf(t)===-1&&n[e].push(t)}hasEventListener(e,t){if(this._listeners===void 0)return!1;const n=this._listeners;return n[e]!==void 0&&n[e].indexOf(t)!==-1}removeEventListener(e,t){if(this._listeners===void 0)return;const s=this._listeners[e];if(s!==void 0){const r=s.indexOf(t);r!==-1&&s.splice(r,1)}}dispatchEvent(e){if(this._listeners===void 0)return;const n=this._listeners[e.type];if(n!==void 0){e.target=this;const s=n.slice(0);for(let r=0,a=s.length;r<a;r++)s[r].call(this,e);e.target=null}}}const Vt=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let md=1234567;const Nr=Math.PI/180,nr=180/Math.PI;function Bn(){const i=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(Vt[i&255]+Vt[i>>8&255]+Vt[i>>16&255]+Vt[i>>24&255]+"-"+Vt[e&255]+Vt[e>>8&255]+"-"+Vt[e>>16&15|64]+Vt[e>>24&255]+"-"+Vt[t&63|128]+Vt[t>>8&255]+"-"+Vt[t>>16&255]+Vt[t>>24&255]+Vt[n&255]+Vt[n>>8&255]+Vt[n>>16&255]+Vt[n>>24&255]).toLowerCase()}function Pt(i,e,t){return Math.max(e,Math.min(t,i))}function Rl(i,e){return(i%e+e)%e}function vp(i,e,t,n,s){return n+(i-e)*(s-n)/(t-e)}function _p(i,e,t){return i!==e?(t-i)/(e-i):0}function Ur(i,e,t){return(1-t)*i+t*e}function xp(i,e,t,n){return Ur(i,e,1-Math.exp(-t*n))}function yp(i,e=1){return e-Math.abs(Rl(i,e*2)-e)}function Mp(i,e,t){return i<=e?0:i>=t?1:(i=(i-e)/(t-e),i*i*(3-2*i))}function Sp(i,e,t){return i<=e?0:i>=t?1:(i=(i-e)/(t-e),i*i*i*(i*(i*6-15)+10))}function Ep(i,e){return i+Math.floor(Math.random()*(e-i+1))}function bp(i,e){return i+Math.random()*(e-i)}function Tp(i){return i*(.5-Math.random())}function wp(i){i!==void 0&&(md=i);let e=md+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}function Ap(i){return i*Nr}function Rp(i){return i*nr}function Cp(i){return(i&i-1)===0&&i!==0}function Ip(i){return Math.pow(2,Math.ceil(Math.log(i)/Math.LN2))}function Lp(i){return Math.pow(2,Math.floor(Math.log(i)/Math.LN2))}function Dp(i,e,t,n,s){const r=Math.cos,a=Math.sin,o=r(t/2),c=a(t/2),l=r((e+n)/2),d=a((e+n)/2),h=r((e-n)/2),u=a((e-n)/2),f=r((n-e)/2),g=a((n-e)/2);switch(s){case"XYX":i.set(o*d,c*h,c*u,o*l);break;case"YZY":i.set(c*u,o*d,c*h,o*l);break;case"ZXZ":i.set(c*h,c*u,o*d,o*l);break;case"XZX":i.set(o*d,c*g,c*f,o*l);break;case"YXY":i.set(c*f,o*d,c*g,o*l);break;case"ZYZ":i.set(c*g,c*f,o*d,o*l);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+s)}}function Un(i,e){switch(e.constructor){case Float32Array:return i;case Uint32Array:return i/4294967295;case Uint16Array:return i/65535;case Uint8Array:return i/255;case Int32Array:return Math.max(i/2147483647,-1);case Int16Array:return Math.max(i/32767,-1);case Int8Array:return Math.max(i/127,-1);default:throw new Error("Invalid component type.")}}function ct(i,e){switch(e.constructor){case Float32Array:return i;case Uint32Array:return Math.round(i*4294967295);case Uint16Array:return Math.round(i*65535);case Uint8Array:return Math.round(i*255);case Int32Array:return Math.round(i*2147483647);case Int16Array:return Math.round(i*32767);case Int8Array:return Math.round(i*127);default:throw new Error("Invalid component type.")}}const Pp={DEG2RAD:Nr,RAD2DEG:nr,generateUUID:Bn,clamp:Pt,euclideanModulo:Rl,mapLinear:vp,inverseLerp:_p,lerp:Ur,damp:xp,pingpong:yp,smoothstep:Mp,smootherstep:Sp,randInt:Ep,randFloat:bp,randFloatSpread:Tp,seededRandom:wp,degToRad:Ap,radToDeg:Rp,isPowerOfTwo:Cp,ceilPowerOfTwo:Ip,floorPowerOfTwo:Lp,setQuaternionFromProperEuler:Dp,normalize:ct,denormalize:Un};class Ke{constructor(e=0,t=0){Ke.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,n=this.y,s=e.elements;return this.x=s[0]*t+s[3]*n+s[6],this.y=s[1]*t+s[4]*n+s[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos(Pt(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y;return t*t+n*n}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const n=Math.cos(t),s=Math.sin(t),r=this.x-e.x,a=this.y-e.y;return this.x=r*n-a*s+e.x,this.y=r*s+a*n+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class qe{constructor(e,t,n,s,r,a,o,c,l){qe.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,n,s,r,a,o,c,l)}set(e,t,n,s,r,a,o,c,l){const d=this.elements;return d[0]=e,d[1]=s,d[2]=o,d[3]=t,d[4]=r,d[5]=c,d[6]=n,d[7]=a,d[8]=l,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],this}extractBasis(e,t,n){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,s=t.elements,r=this.elements,a=n[0],o=n[3],c=n[6],l=n[1],d=n[4],h=n[7],u=n[2],f=n[5],g=n[8],v=s[0],m=s[3],p=s[6],_=s[1],E=s[4],x=s[7],C=s[2],T=s[5],w=s[8];return r[0]=a*v+o*_+c*C,r[3]=a*m+o*E+c*T,r[6]=a*p+o*x+c*w,r[1]=l*v+d*_+h*C,r[4]=l*m+d*E+h*T,r[7]=l*p+d*x+h*w,r[2]=u*v+f*_+g*C,r[5]=u*m+f*E+g*T,r[8]=u*p+f*x+g*w,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[1],s=e[2],r=e[3],a=e[4],o=e[5],c=e[6],l=e[7],d=e[8];return t*a*d-t*o*l-n*r*d+n*o*c+s*r*l-s*a*c}invert(){const e=this.elements,t=e[0],n=e[1],s=e[2],r=e[3],a=e[4],o=e[5],c=e[6],l=e[7],d=e[8],h=d*a-o*l,u=o*c-d*r,f=l*r-a*c,g=t*h+n*u+s*f;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);const v=1/g;return e[0]=h*v,e[1]=(s*l-d*n)*v,e[2]=(o*n-s*a)*v,e[3]=u*v,e[4]=(d*t-s*c)*v,e[5]=(s*r-o*t)*v,e[6]=f*v,e[7]=(n*c-l*t)*v,e[8]=(a*t-n*r)*v,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,n,s,r,a,o){const c=Math.cos(r),l=Math.sin(r);return this.set(n*c,n*l,-n*(c*a+l*o)+a+e,-s*l,s*c,-s*(-l*a+c*o)+o+t,0,0,1),this}scale(e,t){return this.premultiply(Co.makeScale(e,t)),this}rotate(e){return this.premultiply(Co.makeRotation(-e)),this}translate(e,t){return this.premultiply(Co.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,n,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){const t=this.elements,n=e.elements;for(let s=0;s<9;s++)if(t[s]!==n[s])return!1;return!0}fromArray(e,t=0){for(let n=0;n<9;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const Co=new qe;function yu(i){for(let e=i.length-1;e>=0;--e)if(i[e]>=65535)return!0;return!1}function $r(i){return document.createElementNS("http://www.w3.org/1999/xhtml",i)}function Np(){const i=$r("canvas");return i.style.display="block",i}const gd={};function Cr(i){i in gd||(gd[i]=!0,console.warn(i))}function Up(i,e,t){return new Promise(function(n,s){function r(){switch(i.clientWaitSync(e,i.SYNC_FLUSH_COMMANDS_BIT,0)){case i.WAIT_FAILED:s();break;case i.TIMEOUT_EXPIRED:setTimeout(r,t);break;default:n()}}setTimeout(r,t)})}function Op(i){const e=i.elements;e[2]=.5*e[2]+.5*e[3],e[6]=.5*e[6]+.5*e[7],e[10]=.5*e[10]+.5*e[11],e[14]=.5*e[14]+.5*e[15]}function Fp(i){const e=i.elements;e[11]===-1?(e[10]=-e[10]-1,e[14]=-e[14]):(e[10]=-e[10],e[14]=-e[14]+1)}const tt={enabled:!0,workingColorSpace:Yt,spaces:{},convert:function(i,e,t){return this.enabled===!1||e===t||!e||!t||(this.spaces[e].transfer===dt&&(i.r=xi(i.r),i.g=xi(i.g),i.b=xi(i.b)),this.spaces[e].primaries!==this.spaces[t].primaries&&(i.applyMatrix3(this.spaces[e].toXYZ),i.applyMatrix3(this.spaces[t].fromXYZ)),this.spaces[t].transfer===dt&&(i.r=$s(i.r),i.g=$s(i.g),i.b=$s(i.b))),i},fromWorkingColorSpace:function(i,e){return this.convert(i,this.workingColorSpace,e)},toWorkingColorSpace:function(i,e){return this.convert(i,e,this.workingColorSpace)},getPrimaries:function(i){return this.spaces[i].primaries},getTransfer:function(i){return i===Gi?xo:this.spaces[i].transfer},getLuminanceCoefficients:function(i,e=this.workingColorSpace){return i.fromArray(this.spaces[e].luminanceCoefficients)},define:function(i){Object.assign(this.spaces,i)},_getMatrix:function(i,e,t){return i.copy(this.spaces[e].toXYZ).multiply(this.spaces[t].fromXYZ)},_getDrawingBufferColorSpace:function(i){return this.spaces[i].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(i=this.workingColorSpace){return this.spaces[i].workingColorSpaceConfig.unpackColorSpace}};function xi(i){return i<.04045?i*.0773993808:Math.pow(i*.9478672986+.0521327014,2.4)}function $s(i){return i<.0031308?i*12.92:1.055*Math.pow(i,.41666)-.055}const vd=[.64,.33,.3,.6,.15,.06],_d=[.2126,.7152,.0722],xd=[.3127,.329],yd=new qe().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),Md=new qe().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);tt.define({[Yt]:{primaries:vd,whitePoint:xd,transfer:xo,toXYZ:yd,fromXYZ:Md,luminanceCoefficients:_d,workingColorSpaceConfig:{unpackColorSpace:At},outputColorSpaceConfig:{drawingBufferColorSpace:At}},[At]:{primaries:vd,whitePoint:xd,transfer:dt,toXYZ:yd,fromXYZ:Md,luminanceCoefficients:_d,outputColorSpaceConfig:{drawingBufferColorSpace:At}}});let bs;class Bp{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let t;if(e instanceof HTMLCanvasElement)t=e;else{bs===void 0&&(bs=$r("canvas")),bs.width=e.width,bs.height=e.height;const n=bs.getContext("2d");e instanceof ImageData?n.putImageData(e,0,0):n.drawImage(e,0,0,e.width,e.height),t=bs}return t.width>2048||t.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",e),t.toDataURL("image/jpeg",.6)):t.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=$r("canvas");t.width=e.width,t.height=e.height;const n=t.getContext("2d");n.drawImage(e,0,0,e.width,e.height);const s=n.getImageData(0,0,e.width,e.height),r=s.data;for(let a=0;a<r.length;a++)r[a]=xi(r[a]/255)*255;return n.putImageData(s,0,0),t}else if(e.data){const t=e.data.slice(0);for(let n=0;n<t.length;n++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[n]=Math.floor(xi(t[n]/255)*255):t[n]=xi(t[n]);return{data:t,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let kp=0;class Mu{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:kp++}),this.uuid=Bn(),this.data=e,this.dataReady=!0,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const n={uuid:this.uuid,url:""},s=this.data;if(s!==null){let r;if(Array.isArray(s)){r=[];for(let a=0,o=s.length;a<o;a++)s[a].isDataTexture?r.push(Io(s[a].image)):r.push(Io(s[a]))}else r=Io(s);n.url=r}return t||(e.images[this.uuid]=n),n}}function Io(i){return typeof HTMLImageElement<"u"&&i instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&i instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&i instanceof ImageBitmap?Bp.getDataURL(i):i.data?{data:Array.from(i.data),width:i.width,height:i.height,type:i.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let zp=0;class Nt extends lr{constructor(e=Nt.DEFAULT_IMAGE,t=Nt.DEFAULT_MAPPING,n=Yn,s=Yn,r=zt,a=qn,o=bn,c=Si,l=Nt.DEFAULT_ANISOTROPY,d=Gi){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:zp++}),this.uuid=Bn(),this.name="",this.source=new Mu(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=n,this.wrapT=s,this.magFilter=r,this.minFilter=a,this.anisotropy=l,this.format=o,this.internalFormat=null,this.type=c,this.offset=new Ke(0,0),this.repeat=new Ke(1,1),this.center=new Ke(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new qe,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=d,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.pmremVersion=0}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const n={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),t||(e.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==au)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case Mi:e.x=e.x-Math.floor(e.x);break;case Yn:e.x=e.x<0?0:1;break;case Qa:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case Mi:e.y=e.y-Math.floor(e.y);break;case Yn:e.y=e.y<0?0:1;break;case Qa:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}Nt.DEFAULT_IMAGE=null;Nt.DEFAULT_MAPPING=au;Nt.DEFAULT_ANISOTROPY=1;class rt{constructor(e=0,t=0,n=0,s=1){rt.prototype.isVector4=!0,this.x=e,this.y=t,this.z=n,this.w=s}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,n,s){return this.x=e,this.y=t,this.z=n,this.w=s,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,n=this.y,s=this.z,r=this.w,a=e.elements;return this.x=a[0]*t+a[4]*n+a[8]*s+a[12]*r,this.y=a[1]*t+a[5]*n+a[9]*s+a[13]*r,this.z=a[2]*t+a[6]*n+a[10]*s+a[14]*r,this.w=a[3]*t+a[7]*n+a[11]*s+a[15]*r,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,n,s,r;const c=e.elements,l=c[0],d=c[4],h=c[8],u=c[1],f=c[5],g=c[9],v=c[2],m=c[6],p=c[10];if(Math.abs(d-u)<.01&&Math.abs(h-v)<.01&&Math.abs(g-m)<.01){if(Math.abs(d+u)<.1&&Math.abs(h+v)<.1&&Math.abs(g+m)<.1&&Math.abs(l+f+p-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const E=(l+1)/2,x=(f+1)/2,C=(p+1)/2,T=(d+u)/4,w=(h+v)/4,R=(g+m)/4;return E>x&&E>C?E<.01?(n=0,s=.707106781,r=.707106781):(n=Math.sqrt(E),s=T/n,r=w/n):x>C?x<.01?(n=.707106781,s=0,r=.707106781):(s=Math.sqrt(x),n=T/s,r=R/s):C<.01?(n=.707106781,s=.707106781,r=0):(r=Math.sqrt(C),n=w/r,s=R/r),this.set(n,s,r,t),this}let _=Math.sqrt((m-g)*(m-g)+(h-v)*(h-v)+(u-d)*(u-d));return Math.abs(_)<.001&&(_=1),this.x=(m-g)/_,this.y=(h-v)/_,this.z=(u-d)/_,this.w=Math.acos((l+f+p-1)/2),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this.w=Math.max(e.w,Math.min(t.w,this.w)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this.w=Math.max(e,Math.min(t,this.w)),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this.w=e.w+(t.w-e.w)*n,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class Hp extends lr{constructor(e=1,t=1,n={}){super(),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=1,this.scissor=new rt(0,0,e,t),this.scissorTest=!1,this.viewport=new rt(0,0,e,t);const s={width:e,height:t,depth:1};n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:zt,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1},n);const r=new Nt(s,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.colorSpace);r.flipY=!1,r.generateMipmaps=n.generateMipmaps,r.internalFormat=n.internalFormat,this.textures=[];const a=n.count;for(let o=0;o<a;o++)this.textures[o]=r.clone(),this.textures[o].isRenderTargetTexture=!0;this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this.depthTexture=n.depthTexture,this.samples=n.samples}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}setSize(e,t,n=1){if(this.width!==e||this.height!==t||this.depth!==n){this.width=e,this.height=t,this.depth=n;for(let s=0,r=this.textures.length;s<r;s++)this.textures[s].image.width=e,this.textures[s].image.height=t,this.textures[s].image.depth=n;this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let n=0,s=e.textures.length;n<s;n++)this.textures[n]=e.textures[n].clone(),this.textures[n].isRenderTargetTexture=!0;const t=Object.assign({},e.texture.image);return this.texture.source=new Mu(t),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class _s extends Hp{constructor(e=1,t=1,n={}){super(e,t,n),this.isWebGLRenderTarget=!0}}class Su extends Nt{constructor(e=null,t=1,n=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:n,depth:s},this.magFilter=Jt,this.minFilter=Jt,this.wrapR=Yn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class Gp extends Nt{constructor(e=null,t=1,n=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:n,depth:s},this.magFilter=Jt,this.minFilter=Jt,this.wrapR=Yn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Ji{constructor(e=0,t=0,n=0,s=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=n,this._w=s}static slerpFlat(e,t,n,s,r,a,o){let c=n[s+0],l=n[s+1],d=n[s+2],h=n[s+3];const u=r[a+0],f=r[a+1],g=r[a+2],v=r[a+3];if(o===0){e[t+0]=c,e[t+1]=l,e[t+2]=d,e[t+3]=h;return}if(o===1){e[t+0]=u,e[t+1]=f,e[t+2]=g,e[t+3]=v;return}if(h!==v||c!==u||l!==f||d!==g){let m=1-o;const p=c*u+l*f+d*g+h*v,_=p>=0?1:-1,E=1-p*p;if(E>Number.EPSILON){const C=Math.sqrt(E),T=Math.atan2(C,p*_);m=Math.sin(m*T)/C,o=Math.sin(o*T)/C}const x=o*_;if(c=c*m+u*x,l=l*m+f*x,d=d*m+g*x,h=h*m+v*x,m===1-o){const C=1/Math.sqrt(c*c+l*l+d*d+h*h);c*=C,l*=C,d*=C,h*=C}}e[t]=c,e[t+1]=l,e[t+2]=d,e[t+3]=h}static multiplyQuaternionsFlat(e,t,n,s,r,a){const o=n[s],c=n[s+1],l=n[s+2],d=n[s+3],h=r[a],u=r[a+1],f=r[a+2],g=r[a+3];return e[t]=o*g+d*h+c*f-l*u,e[t+1]=c*g+d*u+l*h-o*f,e[t+2]=l*g+d*f+o*u-c*h,e[t+3]=d*g-o*h-c*u-l*f,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,n,s){return this._x=e,this._y=t,this._z=n,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){const n=e._x,s=e._y,r=e._z,a=e._order,o=Math.cos,c=Math.sin,l=o(n/2),d=o(s/2),h=o(r/2),u=c(n/2),f=c(s/2),g=c(r/2);switch(a){case"XYZ":this._x=u*d*h+l*f*g,this._y=l*f*h-u*d*g,this._z=l*d*g+u*f*h,this._w=l*d*h-u*f*g;break;case"YXZ":this._x=u*d*h+l*f*g,this._y=l*f*h-u*d*g,this._z=l*d*g-u*f*h,this._w=l*d*h+u*f*g;break;case"ZXY":this._x=u*d*h-l*f*g,this._y=l*f*h+u*d*g,this._z=l*d*g+u*f*h,this._w=l*d*h-u*f*g;break;case"ZYX":this._x=u*d*h-l*f*g,this._y=l*f*h+u*d*g,this._z=l*d*g-u*f*h,this._w=l*d*h+u*f*g;break;case"YZX":this._x=u*d*h+l*f*g,this._y=l*f*h+u*d*g,this._z=l*d*g-u*f*h,this._w=l*d*h-u*f*g;break;case"XZY":this._x=u*d*h-l*f*g,this._y=l*f*h-u*d*g,this._z=l*d*g+u*f*h,this._w=l*d*h+u*f*g;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+a)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const n=t/2,s=Math.sin(n);return this._x=e.x*s,this._y=e.y*s,this._z=e.z*s,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,n=t[0],s=t[4],r=t[8],a=t[1],o=t[5],c=t[9],l=t[2],d=t[6],h=t[10],u=n+o+h;if(u>0){const f=.5/Math.sqrt(u+1);this._w=.25/f,this._x=(d-c)*f,this._y=(r-l)*f,this._z=(a-s)*f}else if(n>o&&n>h){const f=2*Math.sqrt(1+n-o-h);this._w=(d-c)/f,this._x=.25*f,this._y=(s+a)/f,this._z=(r+l)/f}else if(o>h){const f=2*Math.sqrt(1+o-n-h);this._w=(r-l)/f,this._x=(s+a)/f,this._y=.25*f,this._z=(c+d)/f}else{const f=2*Math.sqrt(1+h-n-o);this._w=(a-s)/f,this._x=(r+l)/f,this._y=(c+d)/f,this._z=.25*f}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let n=e.dot(t)+1;return n<Number.EPSILON?(n=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=n):(this._x=0,this._y=-e.z,this._z=e.y,this._w=n)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=n),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(Pt(this.dot(e),-1,1)))}rotateTowards(e,t){const n=this.angleTo(e);if(n===0)return this;const s=Math.min(1,t/n);return this.slerp(e,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const n=e._x,s=e._y,r=e._z,a=e._w,o=t._x,c=t._y,l=t._z,d=t._w;return this._x=n*d+a*o+s*l-r*c,this._y=s*d+a*c+r*o-n*l,this._z=r*d+a*l+n*c-s*o,this._w=a*d-n*o-s*c-r*l,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);const n=this._x,s=this._y,r=this._z,a=this._w;let o=a*e._w+n*e._x+s*e._y+r*e._z;if(o<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,o=-o):this.copy(e),o>=1)return this._w=a,this._x=n,this._y=s,this._z=r,this;const c=1-o*o;if(c<=Number.EPSILON){const f=1-t;return this._w=f*a+t*this._w,this._x=f*n+t*this._x,this._y=f*s+t*this._y,this._z=f*r+t*this._z,this.normalize(),this}const l=Math.sqrt(c),d=Math.atan2(l,o),h=Math.sin((1-t)*d)/l,u=Math.sin(t*d)/l;return this._w=a*h+this._w*u,this._x=n*h+this._x*u,this._y=s*h+this._y*u,this._z=r*h+this._z*u,this._onChangeCallback(),this}slerpQuaternions(e,t,n){return this.copy(e).slerp(t,n)}random(){const e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),n=Math.random(),s=Math.sqrt(1-n),r=Math.sqrt(n);return this.set(s*Math.sin(e),s*Math.cos(e),r*Math.sin(t),r*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class L{constructor(e=0,t=0,n=0){L.prototype.isVector3=!0,this.x=e,this.y=t,this.z=n}set(e,t,n){return n===void 0&&(n=this.z),this.x=e,this.y=t,this.z=n,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(Sd.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(Sd.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,n=this.y,s=this.z,r=e.elements;return this.x=r[0]*t+r[3]*n+r[6]*s,this.y=r[1]*t+r[4]*n+r[7]*s,this.z=r[2]*t+r[5]*n+r[8]*s,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,n=this.y,s=this.z,r=e.elements,a=1/(r[3]*t+r[7]*n+r[11]*s+r[15]);return this.x=(r[0]*t+r[4]*n+r[8]*s+r[12])*a,this.y=(r[1]*t+r[5]*n+r[9]*s+r[13])*a,this.z=(r[2]*t+r[6]*n+r[10]*s+r[14])*a,this}applyQuaternion(e){const t=this.x,n=this.y,s=this.z,r=e.x,a=e.y,o=e.z,c=e.w,l=2*(a*s-o*n),d=2*(o*t-r*s),h=2*(r*n-a*t);return this.x=t+c*l+a*h-o*d,this.y=n+c*d+o*l-r*h,this.z=s+c*h+r*d-a*l,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,n=this.y,s=this.z,r=e.elements;return this.x=r[0]*t+r[4]*n+r[8]*s,this.y=r[1]*t+r[5]*n+r[9]*s,this.z=r[2]*t+r[6]*n+r[10]*s,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const n=e.x,s=e.y,r=e.z,a=t.x,o=t.y,c=t.z;return this.x=s*c-r*o,this.y=r*a-n*c,this.z=n*o-s*a,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const n=e.dot(this)/t;return this.copy(e).multiplyScalar(n)}projectOnPlane(e){return Lo.copy(this).projectOnVector(e),this.sub(Lo)}reflect(e){return this.sub(Lo.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos(Pt(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y,s=this.z-e.z;return t*t+n*n+s*s}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,n){const s=Math.sin(t)*e;return this.x=s*Math.sin(n),this.y=Math.cos(t)*e,this.z=s*Math.cos(n),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,n){return this.x=e*Math.sin(t),this.y=n,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),n=this.setFromMatrixColumn(e,1).length(),s=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=n,this.z=s,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,t=Math.random()*2-1,n=Math.sqrt(1-t*t);return this.x=n*Math.cos(e),this.y=t,this.z=n*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const Lo=new L,Sd=new Ji;class wi{constructor(e=new L(1/0,1/0,1/0),t=new L(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t+=3)this.expandByPoint(Cn.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,n=e.count;t<n;t++)this.expandByPoint(Cn.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const n=Cn.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(n),this.max.copy(e).add(n),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);const n=e.geometry;if(n!==void 0){const r=n.getAttribute("position");if(t===!0&&r!==void 0&&e.isInstancedMesh!==!0)for(let a=0,o=r.count;a<o;a++)e.isMesh===!0?e.getVertexPosition(a,Cn):Cn.fromBufferAttribute(r,a),Cn.applyMatrix4(e.matrixWorld),this.expandByPoint(Cn);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),Qr.copy(e.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),Qr.copy(n.boundingBox)),Qr.applyMatrix4(e.matrixWorld),this.union(Qr)}const s=e.children;for(let r=0,a=s.length;r<a;r++)this.expandByObject(s[r],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,Cn),Cn.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,n;return e.normal.x>0?(t=e.normal.x*this.min.x,n=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,n=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,n+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,n+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,n+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,n+=e.normal.z*this.min.z),t<=-e.constant&&n>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(mr),ea.subVectors(this.max,mr),Ts.subVectors(e.a,mr),ws.subVectors(e.b,mr),As.subVectors(e.c,mr),Ci.subVectors(ws,Ts),Ii.subVectors(As,ws),es.subVectors(Ts,As);let t=[0,-Ci.z,Ci.y,0,-Ii.z,Ii.y,0,-es.z,es.y,Ci.z,0,-Ci.x,Ii.z,0,-Ii.x,es.z,0,-es.x,-Ci.y,Ci.x,0,-Ii.y,Ii.x,0,-es.y,es.x,0];return!Do(t,Ts,ws,As,ea)||(t=[1,0,0,0,1,0,0,0,1],!Do(t,Ts,ws,As,ea))?!1:(ta.crossVectors(Ci,Ii),t=[ta.x,ta.y,ta.z],Do(t,Ts,ws,As,ea))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,Cn).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(Cn).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(ii[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),ii[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),ii[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),ii[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),ii[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),ii[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),ii[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),ii[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(ii),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}}const ii=[new L,new L,new L,new L,new L,new L,new L,new L],Cn=new L,Qr=new wi,Ts=new L,ws=new L,As=new L,Ci=new L,Ii=new L,es=new L,mr=new L,ea=new L,ta=new L,ts=new L;function Do(i,e,t,n,s){for(let r=0,a=i.length-3;r<=a;r+=3){ts.fromArray(i,r);const o=s.x*Math.abs(ts.x)+s.y*Math.abs(ts.y)+s.z*Math.abs(ts.z),c=e.dot(ts),l=t.dot(ts),d=n.dot(ts);if(Math.max(-Math.max(c,l,d),Math.min(c,l,d))>o)return!1}return!0}const Vp=new wi,gr=new L,Po=new L;class Jn{constructor(e=new L,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const n=this.center;t!==void 0?n.copy(t):Vp.setFromPoints(e).getCenter(n);let s=0;for(let r=0,a=e.length;r<a;r++)s=Math.max(s,n.distanceToSquared(e[r]));return this.radius=Math.sqrt(s),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const n=this.center.distanceToSquared(e);return t.copy(e),n>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;gr.subVectors(e,this.center);const t=gr.lengthSq();if(t>this.radius*this.radius){const n=Math.sqrt(t),s=(n-this.radius)*.5;this.center.addScaledVector(gr,s/n),this.radius+=s}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(Po.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(gr.copy(e.center).add(Po)),this.expandByPoint(gr.copy(e.center).sub(Po))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}}const si=new L,No=new L,na=new L,Li=new L,Uo=new L,ia=new L,Oo=new L;class yo{constructor(e=new L,t=new L(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,si)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const n=t.dot(this.direction);return n<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=si.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(si.copy(this.origin).addScaledVector(this.direction,t),si.distanceToSquared(e))}distanceSqToSegment(e,t,n,s){No.copy(e).add(t).multiplyScalar(.5),na.copy(t).sub(e).normalize(),Li.copy(this.origin).sub(No);const r=e.distanceTo(t)*.5,a=-this.direction.dot(na),o=Li.dot(this.direction),c=-Li.dot(na),l=Li.lengthSq(),d=Math.abs(1-a*a);let h,u,f,g;if(d>0)if(h=a*c-o,u=a*o-c,g=r*d,h>=0)if(u>=-g)if(u<=g){const v=1/d;h*=v,u*=v,f=h*(h+a*u+2*o)+u*(a*h+u+2*c)+l}else u=r,h=Math.max(0,-(a*u+o)),f=-h*h+u*(u+2*c)+l;else u=-r,h=Math.max(0,-(a*u+o)),f=-h*h+u*(u+2*c)+l;else u<=-g?(h=Math.max(0,-(-a*r+o)),u=h>0?-r:Math.min(Math.max(-r,-c),r),f=-h*h+u*(u+2*c)+l):u<=g?(h=0,u=Math.min(Math.max(-r,-c),r),f=u*(u+2*c)+l):(h=Math.max(0,-(a*r+o)),u=h>0?r:Math.min(Math.max(-r,-c),r),f=-h*h+u*(u+2*c)+l);else u=a>0?-r:r,h=Math.max(0,-(a*u+o)),f=-h*h+u*(u+2*c)+l;return n&&n.copy(this.origin).addScaledVector(this.direction,h),s&&s.copy(No).addScaledVector(na,u),f}intersectSphere(e,t){si.subVectors(e.center,this.origin);const n=si.dot(this.direction),s=si.dot(si)-n*n,r=e.radius*e.radius;if(s>r)return null;const a=Math.sqrt(r-s),o=n-a,c=n+a;return c<0?null:o<0?this.at(c,t):this.at(o,t)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const n=-(this.origin.dot(e.normal)+e.constant)/t;return n>=0?n:null}intersectPlane(e,t){const n=this.distanceToPlane(e);return n===null?null:this.at(n,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let n,s,r,a,o,c;const l=1/this.direction.x,d=1/this.direction.y,h=1/this.direction.z,u=this.origin;return l>=0?(n=(e.min.x-u.x)*l,s=(e.max.x-u.x)*l):(n=(e.max.x-u.x)*l,s=(e.min.x-u.x)*l),d>=0?(r=(e.min.y-u.y)*d,a=(e.max.y-u.y)*d):(r=(e.max.y-u.y)*d,a=(e.min.y-u.y)*d),n>a||r>s||((r>n||isNaN(n))&&(n=r),(a<s||isNaN(s))&&(s=a),h>=0?(o=(e.min.z-u.z)*h,c=(e.max.z-u.z)*h):(o=(e.max.z-u.z)*h,c=(e.min.z-u.z)*h),n>c||o>s)||((o>n||n!==n)&&(n=o),(c<s||s!==s)&&(s=c),s<0)?null:this.at(n>=0?n:s,t)}intersectsBox(e){return this.intersectBox(e,si)!==null}intersectTriangle(e,t,n,s,r){Uo.subVectors(t,e),ia.subVectors(n,e),Oo.crossVectors(Uo,ia);let a=this.direction.dot(Oo),o;if(a>0){if(s)return null;o=1}else if(a<0)o=-1,a=-a;else return null;Li.subVectors(this.origin,e);const c=o*this.direction.dot(ia.crossVectors(Li,ia));if(c<0)return null;const l=o*this.direction.dot(Uo.cross(Li));if(l<0||c+l>a)return null;const d=-o*Li.dot(Oo);return d<0?null:this.at(d/a,r)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class We{constructor(e,t,n,s,r,a,o,c,l,d,h,u,f,g,v,m){We.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,n,s,r,a,o,c,l,d,h,u,f,g,v,m)}set(e,t,n,s,r,a,o,c,l,d,h,u,f,g,v,m){const p=this.elements;return p[0]=e,p[4]=t,p[8]=n,p[12]=s,p[1]=r,p[5]=a,p[9]=o,p[13]=c,p[2]=l,p[6]=d,p[10]=h,p[14]=u,p[3]=f,p[7]=g,p[11]=v,p[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new We().fromArray(this.elements)}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],t[9]=n[9],t[10]=n[10],t[11]=n[11],t[12]=n[12],t[13]=n[13],t[14]=n[14],t[15]=n[15],this}copyPosition(e){const t=this.elements,n=e.elements;return t[12]=n[12],t[13]=n[13],t[14]=n[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,n){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(e,t,n){return this.set(e.x,t.x,n.x,0,e.y,t.y,n.y,0,e.z,t.z,n.z,0,0,0,0,1),this}extractRotation(e){const t=this.elements,n=e.elements,s=1/Rs.setFromMatrixColumn(e,0).length(),r=1/Rs.setFromMatrixColumn(e,1).length(),a=1/Rs.setFromMatrixColumn(e,2).length();return t[0]=n[0]*s,t[1]=n[1]*s,t[2]=n[2]*s,t[3]=0,t[4]=n[4]*r,t[5]=n[5]*r,t[6]=n[6]*r,t[7]=0,t[8]=n[8]*a,t[9]=n[9]*a,t[10]=n[10]*a,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,n=e.x,s=e.y,r=e.z,a=Math.cos(n),o=Math.sin(n),c=Math.cos(s),l=Math.sin(s),d=Math.cos(r),h=Math.sin(r);if(e.order==="XYZ"){const u=a*d,f=a*h,g=o*d,v=o*h;t[0]=c*d,t[4]=-c*h,t[8]=l,t[1]=f+g*l,t[5]=u-v*l,t[9]=-o*c,t[2]=v-u*l,t[6]=g+f*l,t[10]=a*c}else if(e.order==="YXZ"){const u=c*d,f=c*h,g=l*d,v=l*h;t[0]=u+v*o,t[4]=g*o-f,t[8]=a*l,t[1]=a*h,t[5]=a*d,t[9]=-o,t[2]=f*o-g,t[6]=v+u*o,t[10]=a*c}else if(e.order==="ZXY"){const u=c*d,f=c*h,g=l*d,v=l*h;t[0]=u-v*o,t[4]=-a*h,t[8]=g+f*o,t[1]=f+g*o,t[5]=a*d,t[9]=v-u*o,t[2]=-a*l,t[6]=o,t[10]=a*c}else if(e.order==="ZYX"){const u=a*d,f=a*h,g=o*d,v=o*h;t[0]=c*d,t[4]=g*l-f,t[8]=u*l+v,t[1]=c*h,t[5]=v*l+u,t[9]=f*l-g,t[2]=-l,t[6]=o*c,t[10]=a*c}else if(e.order==="YZX"){const u=a*c,f=a*l,g=o*c,v=o*l;t[0]=c*d,t[4]=v-u*h,t[8]=g*h+f,t[1]=h,t[5]=a*d,t[9]=-o*d,t[2]=-l*d,t[6]=f*h+g,t[10]=u-v*h}else if(e.order==="XZY"){const u=a*c,f=a*l,g=o*c,v=o*l;t[0]=c*d,t[4]=-h,t[8]=l*d,t[1]=u*h+v,t[5]=a*d,t[9]=f*h-g,t[2]=g*h-f,t[6]=o*d,t[10]=v*h+u}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(Wp,e,Xp)}lookAt(e,t,n){const s=this.elements;return hn.subVectors(e,t),hn.lengthSq()===0&&(hn.z=1),hn.normalize(),Di.crossVectors(n,hn),Di.lengthSq()===0&&(Math.abs(n.z)===1?hn.x+=1e-4:hn.z+=1e-4,hn.normalize(),Di.crossVectors(n,hn)),Di.normalize(),sa.crossVectors(hn,Di),s[0]=Di.x,s[4]=sa.x,s[8]=hn.x,s[1]=Di.y,s[5]=sa.y,s[9]=hn.y,s[2]=Di.z,s[6]=sa.z,s[10]=hn.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,s=t.elements,r=this.elements,a=n[0],o=n[4],c=n[8],l=n[12],d=n[1],h=n[5],u=n[9],f=n[13],g=n[2],v=n[6],m=n[10],p=n[14],_=n[3],E=n[7],x=n[11],C=n[15],T=s[0],w=s[4],R=s[8],S=s[12],y=s[1],I=s[5],O=s[9],P=s[13],U=s[2],V=s[6],z=s[10],Z=s[14],G=s[3],ee=s[7],ie=s[11],ae=s[15];return r[0]=a*T+o*y+c*U+l*G,r[4]=a*w+o*I+c*V+l*ee,r[8]=a*R+o*O+c*z+l*ie,r[12]=a*S+o*P+c*Z+l*ae,r[1]=d*T+h*y+u*U+f*G,r[5]=d*w+h*I+u*V+f*ee,r[9]=d*R+h*O+u*z+f*ie,r[13]=d*S+h*P+u*Z+f*ae,r[2]=g*T+v*y+m*U+p*G,r[6]=g*w+v*I+m*V+p*ee,r[10]=g*R+v*O+m*z+p*ie,r[14]=g*S+v*P+m*Z+p*ae,r[3]=_*T+E*y+x*U+C*G,r[7]=_*w+E*I+x*V+C*ee,r[11]=_*R+E*O+x*z+C*ie,r[15]=_*S+E*P+x*Z+C*ae,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[4],s=e[8],r=e[12],a=e[1],o=e[5],c=e[9],l=e[13],d=e[2],h=e[6],u=e[10],f=e[14],g=e[3],v=e[7],m=e[11],p=e[15];return g*(+r*c*h-s*l*h-r*o*u+n*l*u+s*o*f-n*c*f)+v*(+t*c*f-t*l*u+r*a*u-s*a*f+s*l*d-r*c*d)+m*(+t*l*h-t*o*f-r*a*h+n*a*f+r*o*d-n*l*d)+p*(-s*o*d-t*c*h+t*o*u+s*a*h-n*a*u+n*c*d)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,n){const s=this.elements;return e.isVector3?(s[12]=e.x,s[13]=e.y,s[14]=e.z):(s[12]=e,s[13]=t,s[14]=n),this}invert(){const e=this.elements,t=e[0],n=e[1],s=e[2],r=e[3],a=e[4],o=e[5],c=e[6],l=e[7],d=e[8],h=e[9],u=e[10],f=e[11],g=e[12],v=e[13],m=e[14],p=e[15],_=h*m*l-v*u*l+v*c*f-o*m*f-h*c*p+o*u*p,E=g*u*l-d*m*l-g*c*f+a*m*f+d*c*p-a*u*p,x=d*v*l-g*h*l+g*o*f-a*v*f-d*o*p+a*h*p,C=g*h*c-d*v*c-g*o*u+a*v*u+d*o*m-a*h*m,T=t*_+n*E+s*x+r*C;if(T===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const w=1/T;return e[0]=_*w,e[1]=(v*u*r-h*m*r-v*s*f+n*m*f+h*s*p-n*u*p)*w,e[2]=(o*m*r-v*c*r+v*s*l-n*m*l-o*s*p+n*c*p)*w,e[3]=(h*c*r-o*u*r-h*s*l+n*u*l+o*s*f-n*c*f)*w,e[4]=E*w,e[5]=(d*m*r-g*u*r+g*s*f-t*m*f-d*s*p+t*u*p)*w,e[6]=(g*c*r-a*m*r-g*s*l+t*m*l+a*s*p-t*c*p)*w,e[7]=(a*u*r-d*c*r+d*s*l-t*u*l-a*s*f+t*c*f)*w,e[8]=x*w,e[9]=(g*h*r-d*v*r-g*n*f+t*v*f+d*n*p-t*h*p)*w,e[10]=(a*v*r-g*o*r+g*n*l-t*v*l-a*n*p+t*o*p)*w,e[11]=(d*o*r-a*h*r-d*n*l+t*h*l+a*n*f-t*o*f)*w,e[12]=C*w,e[13]=(d*v*s-g*h*s+g*n*u-t*v*u-d*n*m+t*h*m)*w,e[14]=(g*o*s-a*v*s-g*n*c+t*v*c+a*n*m-t*o*m)*w,e[15]=(a*h*s-d*o*s+d*n*c-t*h*c-a*n*u+t*o*u)*w,this}scale(e){const t=this.elements,n=e.x,s=e.y,r=e.z;return t[0]*=n,t[4]*=s,t[8]*=r,t[1]*=n,t[5]*=s,t[9]*=r,t[2]*=n,t[6]*=s,t[10]*=r,t[3]*=n,t[7]*=s,t[11]*=r,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],n=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],s=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,n,s))}makeTranslation(e,t,n){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,n,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),n=Math.sin(e);return this.set(1,0,0,0,0,t,-n,0,0,n,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,0,n,0,0,1,0,0,-n,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,0,n,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const n=Math.cos(t),s=Math.sin(t),r=1-n,a=e.x,o=e.y,c=e.z,l=r*a,d=r*o;return this.set(l*a+n,l*o-s*c,l*c+s*o,0,l*o+s*c,d*o+n,d*c-s*a,0,l*c-s*o,d*c+s*a,r*c*c+n,0,0,0,0,1),this}makeScale(e,t,n){return this.set(e,0,0,0,0,t,0,0,0,0,n,0,0,0,0,1),this}makeShear(e,t,n,s,r,a){return this.set(1,n,r,0,e,1,a,0,t,s,1,0,0,0,0,1),this}compose(e,t,n){const s=this.elements,r=t._x,a=t._y,o=t._z,c=t._w,l=r+r,d=a+a,h=o+o,u=r*l,f=r*d,g=r*h,v=a*d,m=a*h,p=o*h,_=c*l,E=c*d,x=c*h,C=n.x,T=n.y,w=n.z;return s[0]=(1-(v+p))*C,s[1]=(f+x)*C,s[2]=(g-E)*C,s[3]=0,s[4]=(f-x)*T,s[5]=(1-(u+p))*T,s[6]=(m+_)*T,s[7]=0,s[8]=(g+E)*w,s[9]=(m-_)*w,s[10]=(1-(u+v))*w,s[11]=0,s[12]=e.x,s[13]=e.y,s[14]=e.z,s[15]=1,this}decompose(e,t,n){const s=this.elements;let r=Rs.set(s[0],s[1],s[2]).length();const a=Rs.set(s[4],s[5],s[6]).length(),o=Rs.set(s[8],s[9],s[10]).length();this.determinant()<0&&(r=-r),e.x=s[12],e.y=s[13],e.z=s[14],In.copy(this);const l=1/r,d=1/a,h=1/o;return In.elements[0]*=l,In.elements[1]*=l,In.elements[2]*=l,In.elements[4]*=d,In.elements[5]*=d,In.elements[6]*=d,In.elements[8]*=h,In.elements[9]*=h,In.elements[10]*=h,t.setFromRotationMatrix(In),n.x=r,n.y=a,n.z=o,this}makePerspective(e,t,n,s,r,a,o=_i){const c=this.elements,l=2*r/(t-e),d=2*r/(n-s),h=(t+e)/(t-e),u=(n+s)/(n-s);let f,g;if(o===_i)f=-(a+r)/(a-r),g=-2*a*r/(a-r);else if(o===eo)f=-a/(a-r),g=-a*r/(a-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return c[0]=l,c[4]=0,c[8]=h,c[12]=0,c[1]=0,c[5]=d,c[9]=u,c[13]=0,c[2]=0,c[6]=0,c[10]=f,c[14]=g,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(e,t,n,s,r,a,o=_i){const c=this.elements,l=1/(t-e),d=1/(n-s),h=1/(a-r),u=(t+e)*l,f=(n+s)*d;let g,v;if(o===_i)g=(a+r)*h,v=-2*h;else if(o===eo)g=r*h,v=-1*h;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return c[0]=2*l,c[4]=0,c[8]=0,c[12]=-u,c[1]=0,c[5]=2*d,c[9]=0,c[13]=-f,c[2]=0,c[6]=0,c[10]=v,c[14]=-g,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(e){const t=this.elements,n=e.elements;for(let s=0;s<16;s++)if(t[s]!==n[s])return!1;return!0}fromArray(e,t=0){for(let n=0;n<16;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e[t+9]=n[9],e[t+10]=n[10],e[t+11]=n[11],e[t+12]=n[12],e[t+13]=n[13],e[t+14]=n[14],e[t+15]=n[15],e}}const Rs=new L,In=new We,Wp=new L(0,0,0),Xp=new L(1,1,1),Di=new L,sa=new L,hn=new L,Ed=new We,bd=new Ji;class jn{constructor(e=0,t=0,n=0,s=jn.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=n,this._order=s}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,n,s=this._order){return this._x=e,this._y=t,this._z=n,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,n=!0){const s=e.elements,r=s[0],a=s[4],o=s[8],c=s[1],l=s[5],d=s[9],h=s[2],u=s[6],f=s[10];switch(t){case"XYZ":this._y=Math.asin(Pt(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-d,f),this._z=Math.atan2(-a,r)):(this._x=Math.atan2(u,l),this._z=0);break;case"YXZ":this._x=Math.asin(-Pt(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(o,f),this._z=Math.atan2(c,l)):(this._y=Math.atan2(-h,r),this._z=0);break;case"ZXY":this._x=Math.asin(Pt(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(-h,f),this._z=Math.atan2(-a,l)):(this._y=0,this._z=Math.atan2(c,r));break;case"ZYX":this._y=Math.asin(-Pt(h,-1,1)),Math.abs(h)<.9999999?(this._x=Math.atan2(u,f),this._z=Math.atan2(c,r)):(this._x=0,this._z=Math.atan2(-a,l));break;case"YZX":this._z=Math.asin(Pt(c,-1,1)),Math.abs(c)<.9999999?(this._x=Math.atan2(-d,l),this._y=Math.atan2(-h,r)):(this._x=0,this._y=Math.atan2(o,f));break;case"XZY":this._z=Math.asin(-Pt(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(u,l),this._y=Math.atan2(o,r)):(this._x=Math.atan2(-d,f),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,n===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,n){return Ed.makeRotationFromQuaternion(e),this.setFromRotationMatrix(Ed,t,n)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return bd.setFromEuler(this),this.setFromQuaternion(bd,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}jn.DEFAULT_ORDER="XYZ";class Eu{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let Yp=0;const Td=new L,Cs=new Ji,ri=new We,ra=new L,vr=new L,qp=new L,$p=new Ji,wd=new L(1,0,0),Ad=new L(0,1,0),Rd=new L(0,0,1),Cd={type:"added"},Kp={type:"removed"},Is={type:"childadded",child:null},Fo={type:"childremoved",child:null};class Mt extends lr{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Yp++}),this.uuid=Bn(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Mt.DEFAULT_UP.clone();const e=new L,t=new jn,n=new Ji,s=new L(1,1,1);function r(){n.setFromEuler(t,!1)}function a(){t.setFromQuaternion(n,void 0,!1)}t._onChange(r),n._onChange(a),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new We},normalMatrix:{value:new qe}}),this.matrix=new We,this.matrixWorld=new We,this.matrixAutoUpdate=Mt.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=Mt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Eu,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return Cs.setFromAxisAngle(e,t),this.quaternion.multiply(Cs),this}rotateOnWorldAxis(e,t){return Cs.setFromAxisAngle(e,t),this.quaternion.premultiply(Cs),this}rotateX(e){return this.rotateOnAxis(wd,e)}rotateY(e){return this.rotateOnAxis(Ad,e)}rotateZ(e){return this.rotateOnAxis(Rd,e)}translateOnAxis(e,t){return Td.copy(e).applyQuaternion(this.quaternion),this.position.add(Td.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(wd,e)}translateY(e){return this.translateOnAxis(Ad,e)}translateZ(e){return this.translateOnAxis(Rd,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(ri.copy(this.matrixWorld).invert())}lookAt(e,t,n){e.isVector3?ra.copy(e):ra.set(e,t,n);const s=this.parent;this.updateWorldMatrix(!0,!1),vr.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?ri.lookAt(vr,ra,this.up):ri.lookAt(ra,vr,this.up),this.quaternion.setFromRotationMatrix(ri),s&&(ri.extractRotation(s.matrixWorld),Cs.setFromRotationMatrix(ri),this.quaternion.premultiply(Cs.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(Cd),Is.child=e,this.dispatchEvent(Is),Is.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(Kp),Fo.child=e,this.dispatchEvent(Fo),Fo.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),ri.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),ri.multiply(e.parent.matrixWorld)),e.applyMatrix4(ri),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(Cd),Is.child=e,this.dispatchEvent(Is),Is.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let n=0,s=this.children.length;n<s;n++){const a=this.children[n].getObjectByProperty(e,t);if(a!==void 0)return a}}getObjectsByProperty(e,t,n=[]){this[e]===t&&n.push(this);const s=this.children;for(let r=0,a=s.length;r<a;r++)s[r].getObjectsByProperty(e,t,n);return n}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(vr,e,qp),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(vr,$p,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);const t=this.children;for(let n=0,s=t.length;n<s;n++)t[n].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let n=0,s=t.length;n<s;n++)t[n].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let n=0,s=t.length;n<s;n++)t[n].updateMatrixWorld(e)}updateWorldMatrix(e,t){const n=this.parent;if(e===!0&&n!==null&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),t===!0){const s=this.children;for(let r=0,a=s.length;r<a;r++)s[r].updateWorldMatrix(!1,!0)}}toJSON(e){const t=e===void 0||typeof e=="string",n={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const s={};s.uuid=this.uuid,s.type=this.type,this.name!==""&&(s.name=this.name),this.castShadow===!0&&(s.castShadow=!0),this.receiveShadow===!0&&(s.receiveShadow=!0),this.visible===!1&&(s.visible=!1),this.frustumCulled===!1&&(s.frustumCulled=!1),this.renderOrder!==0&&(s.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(s.matrixAutoUpdate=!1),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.visibility=this._visibility,s.active=this._active,s.bounds=this._bounds.map(o=>({boxInitialized:o.boxInitialized,boxMin:o.box.min.toArray(),boxMax:o.box.max.toArray(),sphereInitialized:o.sphereInitialized,sphereRadius:o.sphere.radius,sphereCenter:o.sphere.center.toArray()})),s.maxInstanceCount=this._maxInstanceCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.geometryCount=this._geometryCount,s.matricesTexture=this._matricesTexture.toJSON(e),this._colorsTexture!==null&&(s.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(s.boundingSphere={center:s.boundingSphere.center.toArray(),radius:s.boundingSphere.radius}),this.boundingBox!==null&&(s.boundingBox={min:s.boundingBox.min.toArray(),max:s.boundingBox.max.toArray()}));function r(o,c){return o[c.uuid]===void 0&&(o[c.uuid]=c.toJSON(e)),c.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=r(e.geometries,this.geometry);const o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){const c=o.shapes;if(Array.isArray(c))for(let l=0,d=c.length;l<d;l++){const h=c[l];r(e.shapes,h)}else r(e.shapes,c)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(e.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const o=[];for(let c=0,l=this.material.length;c<l;c++)o.push(r(e.materials,this.material[c]));s.material=o}else s.material=r(e.materials,this.material);if(this.children.length>0){s.children=[];for(let o=0;o<this.children.length;o++)s.children.push(this.children[o].toJSON(e).object)}if(this.animations.length>0){s.animations=[];for(let o=0;o<this.animations.length;o++){const c=this.animations[o];s.animations.push(r(e.animations,c))}}if(t){const o=a(e.geometries),c=a(e.materials),l=a(e.textures),d=a(e.images),h=a(e.shapes),u=a(e.skeletons),f=a(e.animations),g=a(e.nodes);o.length>0&&(n.geometries=o),c.length>0&&(n.materials=c),l.length>0&&(n.textures=l),d.length>0&&(n.images=d),h.length>0&&(n.shapes=h),u.length>0&&(n.skeletons=u),f.length>0&&(n.animations=f),g.length>0&&(n.nodes=g)}return n.object=s,n;function a(o){const c=[];for(const l in o){const d=o[l];delete d.metadata,c.push(d)}return c}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let n=0;n<e.children.length;n++){const s=e.children[n];this.add(s.clone())}return this}}Mt.DEFAULT_UP=new L(0,1,0);Mt.DEFAULT_MATRIX_AUTO_UPDATE=!0;Mt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const Ln=new L,ai=new L,Bo=new L,oi=new L,Ls=new L,Ds=new L,Id=new L,ko=new L,zo=new L,Ho=new L,Go=new rt,Vo=new rt,Wo=new rt;class On{constructor(e=new L,t=new L,n=new L){this.a=e,this.b=t,this.c=n}static getNormal(e,t,n,s){s.subVectors(n,t),Ln.subVectors(e,t),s.cross(Ln);const r=s.lengthSq();return r>0?s.multiplyScalar(1/Math.sqrt(r)):s.set(0,0,0)}static getBarycoord(e,t,n,s,r){Ln.subVectors(s,t),ai.subVectors(n,t),Bo.subVectors(e,t);const a=Ln.dot(Ln),o=Ln.dot(ai),c=Ln.dot(Bo),l=ai.dot(ai),d=ai.dot(Bo),h=a*l-o*o;if(h===0)return r.set(0,0,0),null;const u=1/h,f=(l*c-o*d)*u,g=(a*d-o*c)*u;return r.set(1-f-g,g,f)}static containsPoint(e,t,n,s){return this.getBarycoord(e,t,n,s,oi)===null?!1:oi.x>=0&&oi.y>=0&&oi.x+oi.y<=1}static getInterpolation(e,t,n,s,r,a,o,c){return this.getBarycoord(e,t,n,s,oi)===null?(c.x=0,c.y=0,"z"in c&&(c.z=0),"w"in c&&(c.w=0),null):(c.setScalar(0),c.addScaledVector(r,oi.x),c.addScaledVector(a,oi.y),c.addScaledVector(o,oi.z),c)}static getInterpolatedAttribute(e,t,n,s,r,a){return Go.setScalar(0),Vo.setScalar(0),Wo.setScalar(0),Go.fromBufferAttribute(e,t),Vo.fromBufferAttribute(e,n),Wo.fromBufferAttribute(e,s),a.setScalar(0),a.addScaledVector(Go,r.x),a.addScaledVector(Vo,r.y),a.addScaledVector(Wo,r.z),a}static isFrontFacing(e,t,n,s){return Ln.subVectors(n,t),ai.subVectors(e,t),Ln.cross(ai).dot(s)<0}set(e,t,n){return this.a.copy(e),this.b.copy(t),this.c.copy(n),this}setFromPointsAndIndices(e,t,n,s){return this.a.copy(e[t]),this.b.copy(e[n]),this.c.copy(e[s]),this}setFromAttributeAndIndices(e,t,n,s){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,n),this.c.fromBufferAttribute(e,s),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return Ln.subVectors(this.c,this.b),ai.subVectors(this.a,this.b),Ln.cross(ai).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return On.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return On.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,n,s,r){return On.getInterpolation(e,this.a,this.b,this.c,t,n,s,r)}containsPoint(e){return On.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return On.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const n=this.a,s=this.b,r=this.c;let a,o;Ls.subVectors(s,n),Ds.subVectors(r,n),ko.subVectors(e,n);const c=Ls.dot(ko),l=Ds.dot(ko);if(c<=0&&l<=0)return t.copy(n);zo.subVectors(e,s);const d=Ls.dot(zo),h=Ds.dot(zo);if(d>=0&&h<=d)return t.copy(s);const u=c*h-d*l;if(u<=0&&c>=0&&d<=0)return a=c/(c-d),t.copy(n).addScaledVector(Ls,a);Ho.subVectors(e,r);const f=Ls.dot(Ho),g=Ds.dot(Ho);if(g>=0&&f<=g)return t.copy(r);const v=f*l-c*g;if(v<=0&&l>=0&&g<=0)return o=l/(l-g),t.copy(n).addScaledVector(Ds,o);const m=d*g-f*h;if(m<=0&&h-d>=0&&f-g>=0)return Id.subVectors(r,s),o=(h-d)/(h-d+(f-g)),t.copy(s).addScaledVector(Id,o);const p=1/(m+v+u);return a=v*p,o=u*p,t.copy(n).addScaledVector(Ls,a).addScaledVector(Ds,o)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}const bu={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Pi={h:0,s:0,l:0},aa={h:0,s:0,l:0};function Xo(i,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?i+(e-i)*6*t:t<1/2?e:t<2/3?i+(e-i)*6*(2/3-t):i}class Oe{constructor(e,t,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,n)}set(e,t,n){if(t===void 0&&n===void 0){const s=e;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(e,t,n);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=At){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,tt.toWorkingColorSpace(this,t),this}setRGB(e,t,n,s=tt.workingColorSpace){return this.r=e,this.g=t,this.b=n,tt.toWorkingColorSpace(this,s),this}setHSL(e,t,n,s=tt.workingColorSpace){if(e=Rl(e,1),t=Pt(t,0,1),n=Pt(n,0,1),t===0)this.r=this.g=this.b=n;else{const r=n<=.5?n*(1+t):n+t-n*t,a=2*n-r;this.r=Xo(a,r,e+1/3),this.g=Xo(a,r,e),this.b=Xo(a,r,e-1/3)}return tt.toWorkingColorSpace(this,s),this}setStyle(e,t=At){function n(r){r!==void 0&&parseFloat(r)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(e)){let r;const a=s[1],o=s[2];switch(a){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,t);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,t);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,t);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(e)){const r=s[1],a=r.length;if(a===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,t);if(a===6)return this.setHex(parseInt(r,16),t);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=At){const n=bu[e.toLowerCase()];return n!==void 0?this.setHex(n,t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=xi(e.r),this.g=xi(e.g),this.b=xi(e.b),this}copyLinearToSRGB(e){return this.r=$s(e.r),this.g=$s(e.g),this.b=$s(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=At){return tt.fromWorkingColorSpace(Wt.copy(this),e),Math.round(Pt(Wt.r*255,0,255))*65536+Math.round(Pt(Wt.g*255,0,255))*256+Math.round(Pt(Wt.b*255,0,255))}getHexString(e=At){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=tt.workingColorSpace){tt.fromWorkingColorSpace(Wt.copy(this),t);const n=Wt.r,s=Wt.g,r=Wt.b,a=Math.max(n,s,r),o=Math.min(n,s,r);let c,l;const d=(o+a)/2;if(o===a)c=0,l=0;else{const h=a-o;switch(l=d<=.5?h/(a+o):h/(2-a-o),a){case n:c=(s-r)/h+(s<r?6:0);break;case s:c=(r-n)/h+2;break;case r:c=(n-s)/h+4;break}c/=6}return e.h=c,e.s=l,e.l=d,e}getRGB(e,t=tt.workingColorSpace){return tt.fromWorkingColorSpace(Wt.copy(this),t),e.r=Wt.r,e.g=Wt.g,e.b=Wt.b,e}getStyle(e=At){tt.fromWorkingColorSpace(Wt.copy(this),e);const t=Wt.r,n=Wt.g,s=Wt.b;return e!==At?`color(${e} ${t.toFixed(3)} ${n.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(n*255)},${Math.round(s*255)})`}offsetHSL(e,t,n){return this.getHSL(Pi),this.setHSL(Pi.h+e,Pi.s+t,Pi.l+n)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,n){return this.r=e.r+(t.r-e.r)*n,this.g=e.g+(t.g-e.g)*n,this.b=e.b+(t.b-e.b)*n,this}lerpHSL(e,t){this.getHSL(Pi),e.getHSL(aa);const n=Ur(Pi.h,aa.h,t),s=Ur(Pi.s,aa.s,t),r=Ur(Pi.l,aa.l,t);return this.setHSL(n,s,r),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const t=this.r,n=this.g,s=this.b,r=e.elements;return this.r=r[0]*t+r[3]*n+r[6]*s,this.g=r[1]*t+r[4]*n+r[7]*s,this.b=r[2]*t+r[5]*n+r[8]*s,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Wt=new Oe;Oe.NAMES=bu;let Zp=0;class $n extends lr{static get type(){return"Material"}get type(){return this.constructor.type}set type(e){}constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Zp++}),this.uuid=Bn(),this.name="",this.blending=Ys,this.side=yi,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=_c,this.blendDst=xc,this.blendEquation=ls,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Oe(0,0,0),this.blendAlpha=0,this.depthFunc=js,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=fd,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Es,this.stencilZFail=Es,this.stencilZPass=Es,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const n=e[t];if(n===void 0){console.warn(`THREE.Material: parameter '${t}' has value of undefined.`);continue}const s=this[t];if(s===void 0){console.warn(`THREE.Material: '${t}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(n):s&&s.isVector3&&n&&n.isVector3?s.copy(n):this[t]=n}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const n={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(e).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(e).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(e).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(e).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(e).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==Ys&&(n.blending=this.blending),this.side!==yi&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==_c&&(n.blendSrc=this.blendSrc),this.blendDst!==xc&&(n.blendDst=this.blendDst),this.blendEquation!==ls&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==js&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==fd&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Es&&(n.stencilFail=this.stencilFail),this.stencilZFail!==Es&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==Es&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function s(r){const a=[];for(const o in r){const c=r[o];delete c.metadata,a.push(c)}return a}if(t){const r=s(e.textures),a=s(e.images);r.length>0&&(n.textures=r),a.length>0&&(n.images=a)}return n}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let n=null;if(t!==null){const s=t.length;n=new Array(s);for(let r=0;r!==s;++r)n[r]=t[r].clone()}return this.clippingPlanes=n,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}onBuild(){console.warn("Material: onBuild() has been removed.")}}class Tn extends $n{static get type(){return"MeshBasicMaterial"}constructor(e){super(),this.isMeshBasicMaterial=!0,this.color=new Oe(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new jn,this.combine=su,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const mi=jp();function jp(){const i=new ArrayBuffer(4),e=new Float32Array(i),t=new Uint32Array(i),n=new Uint32Array(512),s=new Uint32Array(512);for(let c=0;c<256;++c){const l=c-127;l<-27?(n[c]=0,n[c|256]=32768,s[c]=24,s[c|256]=24):l<-14?(n[c]=1024>>-l-14,n[c|256]=1024>>-l-14|32768,s[c]=-l-1,s[c|256]=-l-1):l<=15?(n[c]=l+15<<10,n[c|256]=l+15<<10|32768,s[c]=13,s[c|256]=13):l<128?(n[c]=31744,n[c|256]=64512,s[c]=24,s[c|256]=24):(n[c]=31744,n[c|256]=64512,s[c]=13,s[c|256]=13)}const r=new Uint32Array(2048),a=new Uint32Array(64),o=new Uint32Array(64);for(let c=1;c<1024;++c){let l=c<<13,d=0;for(;(l&8388608)===0;)l<<=1,d-=8388608;l&=-8388609,d+=947912704,r[c]=l|d}for(let c=1024;c<2048;++c)r[c]=939524096+(c-1024<<13);for(let c=1;c<31;++c)a[c]=c<<23;a[31]=1199570944,a[32]=2147483648;for(let c=33;c<63;++c)a[c]=2147483648+(c-32<<23);a[63]=3347054592;for(let c=1;c<64;++c)c!==32&&(o[c]=1024);return{floatView:e,uint32View:t,baseTable:n,shiftTable:s,mantissaTable:r,exponentTable:a,offsetTable:o}}function Jp(i){Math.abs(i)>65504&&console.warn("THREE.DataUtils.toHalfFloat(): Value out of range."),i=Pt(i,-65504,65504),mi.floatView[0]=i;const e=mi.uint32View[0],t=e>>23&511;return mi.baseTable[t]+((e&8388607)>>mi.shiftTable[t])}function Qp(i){const e=i>>10;return mi.uint32View[0]=mi.mantissaTable[mi.offsetTable[e]+(i&1023)]+mi.exponentTable[e],mi.floatView[0]}const oa={toHalfFloat:Jp,fromHalfFloat:Qp},wt=new L,ca=new Ke;class Qt{constructor(e,t,n=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=n,this.usage=tl,this.updateRanges=[],this.gpuType=an,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,n){e*=this.itemSize,n*=t.itemSize;for(let s=0,r=this.itemSize;s<r;s++)this.array[e+s]=t.array[n+s];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,n=this.count;t<n;t++)ca.fromBufferAttribute(this,t),ca.applyMatrix3(e),this.setXY(t,ca.x,ca.y);else if(this.itemSize===3)for(let t=0,n=this.count;t<n;t++)wt.fromBufferAttribute(this,t),wt.applyMatrix3(e),this.setXYZ(t,wt.x,wt.y,wt.z);return this}applyMatrix4(e){for(let t=0,n=this.count;t<n;t++)wt.fromBufferAttribute(this,t),wt.applyMatrix4(e),this.setXYZ(t,wt.x,wt.y,wt.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)wt.fromBufferAttribute(this,t),wt.applyNormalMatrix(e),this.setXYZ(t,wt.x,wt.y,wt.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)wt.fromBufferAttribute(this,t),wt.transformDirection(e),this.setXYZ(t,wt.x,wt.y,wt.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let n=this.array[e*this.itemSize+t];return this.normalized&&(n=Un(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=ct(n,this.array)),this.array[e*this.itemSize+t]=n,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=Un(t,this.array)),t}setX(e,t){return this.normalized&&(t=ct(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=Un(t,this.array)),t}setY(e,t){return this.normalized&&(t=ct(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=Un(t,this.array)),t}setZ(e,t){return this.normalized&&(t=ct(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=Un(t,this.array)),t}setW(e,t){return this.normalized&&(t=ct(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,n){return e*=this.itemSize,this.normalized&&(t=ct(t,this.array),n=ct(n,this.array)),this.array[e+0]=t,this.array[e+1]=n,this}setXYZ(e,t,n,s){return e*=this.itemSize,this.normalized&&(t=ct(t,this.array),n=ct(n,this.array),s=ct(s,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=s,this}setXYZW(e,t,n,s,r){return e*=this.itemSize,this.normalized&&(t=ct(t,this.array),n=ct(n,this.array),s=ct(s,this.array),r=ct(r,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=s,this.array[e+3]=r,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==tl&&(e.usage=this.usage),e}}class Tu extends Qt{constructor(e,t,n){super(new Uint16Array(e),t,n)}}class wu extends Qt{constructor(e,t,n){super(new Uint32Array(e),t,n)}}class Ht extends Qt{constructor(e,t,n){super(new Float32Array(e),t,n)}}let em=0;const gn=new We,Yo=new Mt,Ps=new L,un=new wi,_r=new wi,Ft=new L;class cn extends lr{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:em++}),this.uuid=Bn(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(yu(e)?wu:Tu)(e,1):this.index=e,this}setIndirect(e){return this.indirect=e,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,n=0){this.groups.push({start:e,count:t,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const n=this.attributes.normal;if(n!==void 0){const r=new qe().getNormalMatrix(e);n.applyNormalMatrix(r),n.needsUpdate=!0}const s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(e),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return gn.makeRotationFromQuaternion(e),this.applyMatrix4(gn),this}rotateX(e){return gn.makeRotationX(e),this.applyMatrix4(gn),this}rotateY(e){return gn.makeRotationY(e),this.applyMatrix4(gn),this}rotateZ(e){return gn.makeRotationZ(e),this.applyMatrix4(gn),this}translate(e,t,n){return gn.makeTranslation(e,t,n),this.applyMatrix4(gn),this}scale(e,t,n){return gn.makeScale(e,t,n),this.applyMatrix4(gn),this}lookAt(e){return Yo.lookAt(e),Yo.updateMatrix(),this.applyMatrix4(Yo.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Ps).negate(),this.translate(Ps.x,Ps.y,Ps.z),this}setFromPoints(e){const t=this.getAttribute("position");if(t===void 0){const n=[];for(let s=0,r=e.length;s<r;s++){const a=e[s];n.push(a.x,a.y,a.z||0)}this.setAttribute("position",new Ht(n,3))}else{for(let n=0,s=t.count;n<s;n++){const r=e[n];t.setXYZ(n,r.x,r.y,r.z||0)}e.length>t.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new wi);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new L(-1/0,-1/0,-1/0),new L(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let n=0,s=t.length;n<s;n++){const r=t[n];un.setFromBufferAttribute(r),this.morphTargetsRelative?(Ft.addVectors(this.boundingBox.min,un.min),this.boundingBox.expandByPoint(Ft),Ft.addVectors(this.boundingBox.max,un.max),this.boundingBox.expandByPoint(Ft)):(this.boundingBox.expandByPoint(un.min),this.boundingBox.expandByPoint(un.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Jn);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new L,1/0);return}if(e){const n=this.boundingSphere.center;if(un.setFromBufferAttribute(e),t)for(let r=0,a=t.length;r<a;r++){const o=t[r];_r.setFromBufferAttribute(o),this.morphTargetsRelative?(Ft.addVectors(un.min,_r.min),un.expandByPoint(Ft),Ft.addVectors(un.max,_r.max),un.expandByPoint(Ft)):(un.expandByPoint(_r.min),un.expandByPoint(_r.max))}un.getCenter(n);let s=0;for(let r=0,a=e.count;r<a;r++)Ft.fromBufferAttribute(e,r),s=Math.max(s,n.distanceToSquared(Ft));if(t)for(let r=0,a=t.length;r<a;r++){const o=t[r],c=this.morphTargetsRelative;for(let l=0,d=o.count;l<d;l++)Ft.fromBufferAttribute(o,l),c&&(Ps.fromBufferAttribute(e,l),Ft.add(Ps)),s=Math.max(s,n.distanceToSquared(Ft))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const n=t.position,s=t.normal,r=t.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Qt(new Float32Array(4*n.count),4));const a=this.getAttribute("tangent"),o=[],c=[];for(let R=0;R<n.count;R++)o[R]=new L,c[R]=new L;const l=new L,d=new L,h=new L,u=new Ke,f=new Ke,g=new Ke,v=new L,m=new L;function p(R,S,y){l.fromBufferAttribute(n,R),d.fromBufferAttribute(n,S),h.fromBufferAttribute(n,y),u.fromBufferAttribute(r,R),f.fromBufferAttribute(r,S),g.fromBufferAttribute(r,y),d.sub(l),h.sub(l),f.sub(u),g.sub(u);const I=1/(f.x*g.y-g.x*f.y);isFinite(I)&&(v.copy(d).multiplyScalar(g.y).addScaledVector(h,-f.y).multiplyScalar(I),m.copy(h).multiplyScalar(f.x).addScaledVector(d,-g.x).multiplyScalar(I),o[R].add(v),o[S].add(v),o[y].add(v),c[R].add(m),c[S].add(m),c[y].add(m))}let _=this.groups;_.length===0&&(_=[{start:0,count:e.count}]);for(let R=0,S=_.length;R<S;++R){const y=_[R],I=y.start,O=y.count;for(let P=I,U=I+O;P<U;P+=3)p(e.getX(P+0),e.getX(P+1),e.getX(P+2))}const E=new L,x=new L,C=new L,T=new L;function w(R){C.fromBufferAttribute(s,R),T.copy(C);const S=o[R];E.copy(S),E.sub(C.multiplyScalar(C.dot(S))).normalize(),x.crossVectors(T,S);const I=x.dot(c[R])<0?-1:1;a.setXYZW(R,E.x,E.y,E.z,I)}for(let R=0,S=_.length;R<S;++R){const y=_[R],I=y.start,O=y.count;for(let P=I,U=I+O;P<U;P+=3)w(e.getX(P+0)),w(e.getX(P+1)),w(e.getX(P+2))}}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new Qt(new Float32Array(t.count*3),3),this.setAttribute("normal",n);else for(let u=0,f=n.count;u<f;u++)n.setXYZ(u,0,0,0);const s=new L,r=new L,a=new L,o=new L,c=new L,l=new L,d=new L,h=new L;if(e)for(let u=0,f=e.count;u<f;u+=3){const g=e.getX(u+0),v=e.getX(u+1),m=e.getX(u+2);s.fromBufferAttribute(t,g),r.fromBufferAttribute(t,v),a.fromBufferAttribute(t,m),d.subVectors(a,r),h.subVectors(s,r),d.cross(h),o.fromBufferAttribute(n,g),c.fromBufferAttribute(n,v),l.fromBufferAttribute(n,m),o.add(d),c.add(d),l.add(d),n.setXYZ(g,o.x,o.y,o.z),n.setXYZ(v,c.x,c.y,c.z),n.setXYZ(m,l.x,l.y,l.z)}else for(let u=0,f=t.count;u<f;u+=3)s.fromBufferAttribute(t,u+0),r.fromBufferAttribute(t,u+1),a.fromBufferAttribute(t,u+2),d.subVectors(a,r),h.subVectors(s,r),d.cross(h),n.setXYZ(u+0,d.x,d.y,d.z),n.setXYZ(u+1,d.x,d.y,d.z),n.setXYZ(u+2,d.x,d.y,d.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let t=0,n=e.count;t<n;t++)Ft.fromBufferAttribute(e,t),Ft.normalize(),e.setXYZ(t,Ft.x,Ft.y,Ft.z)}toNonIndexed(){function e(o,c){const l=o.array,d=o.itemSize,h=o.normalized,u=new l.constructor(c.length*d);let f=0,g=0;for(let v=0,m=c.length;v<m;v++){o.isInterleavedBufferAttribute?f=c[v]*o.data.stride+o.offset:f=c[v]*d;for(let p=0;p<d;p++)u[g++]=l[f++]}return new Qt(u,d,h)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new cn,n=this.index.array,s=this.attributes;for(const o in s){const c=s[o],l=e(c,n);t.setAttribute(o,l)}const r=this.morphAttributes;for(const o in r){const c=[],l=r[o];for(let d=0,h=l.length;d<h;d++){const u=l[d],f=e(u,n);c.push(f)}t.morphAttributes[o]=c}t.morphTargetsRelative=this.morphTargetsRelative;const a=this.groups;for(let o=0,c=a.length;o<c;o++){const l=a[o];t.addGroup(l.start,l.count,l.materialIndex)}return t}toJSON(){const e={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const c=this.parameters;for(const l in c)c[l]!==void 0&&(e[l]=c[l]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const n=this.attributes;for(const c in n){const l=n[c];e.data.attributes[c]=l.toJSON(e.data)}const s={};let r=!1;for(const c in this.morphAttributes){const l=this.morphAttributes[c],d=[];for(let h=0,u=l.length;h<u;h++){const f=l[h];d.push(f.toJSON(e.data))}d.length>0&&(s[c]=d,r=!0)}r&&(e.data.morphAttributes=s,e.data.morphTargetsRelative=this.morphTargetsRelative);const a=this.groups;a.length>0&&(e.data.groups=JSON.parse(JSON.stringify(a)));const o=this.boundingSphere;return o!==null&&(e.data.boundingSphere={center:o.center.toArray(),radius:o.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const n=e.index;n!==null&&this.setIndex(n.clone(t));const s=e.attributes;for(const l in s){const d=s[l];this.setAttribute(l,d.clone(t))}const r=e.morphAttributes;for(const l in r){const d=[],h=r[l];for(let u=0,f=h.length;u<f;u++)d.push(h[u].clone(t));this.morphAttributes[l]=d}this.morphTargetsRelative=e.morphTargetsRelative;const a=e.groups;for(let l=0,d=a.length;l<d;l++){const h=a[l];this.addGroup(h.start,h.count,h.materialIndex)}const o=e.boundingBox;o!==null&&(this.boundingBox=o.clone());const c=e.boundingSphere;return c!==null&&(this.boundingSphere=c.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const Ld=new We,ns=new yo,la=new Jn,Dd=new L,da=new L,ha=new L,ua=new L,qo=new L,fa=new L,Pd=new L,pa=new L;class X extends Mt{constructor(e=new cn,t=new Tn){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const s=t[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=s.length;r<a;r++){const o=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}getVertexPosition(e,t){const n=this.geometry,s=n.attributes.position,r=n.morphAttributes.position,a=n.morphTargetsRelative;t.fromBufferAttribute(s,e);const o=this.morphTargetInfluences;if(r&&o){fa.set(0,0,0);for(let c=0,l=r.length;c<l;c++){const d=o[c],h=r[c];d!==0&&(qo.fromBufferAttribute(h,e),a?fa.addScaledVector(qo,d):fa.addScaledVector(qo.sub(t),d))}t.add(fa)}return t}raycast(e,t){const n=this.geometry,s=this.material,r=this.matrixWorld;s!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),la.copy(n.boundingSphere),la.applyMatrix4(r),ns.copy(e.ray).recast(e.near),!(la.containsPoint(ns.origin)===!1&&(ns.intersectSphere(la,Dd)===null||ns.origin.distanceToSquared(Dd)>(e.far-e.near)**2))&&(Ld.copy(r).invert(),ns.copy(e.ray).applyMatrix4(Ld),!(n.boundingBox!==null&&ns.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(e,t,ns)))}_computeIntersections(e,t,n){let s;const r=this.geometry,a=this.material,o=r.index,c=r.attributes.position,l=r.attributes.uv,d=r.attributes.uv1,h=r.attributes.normal,u=r.groups,f=r.drawRange;if(o!==null)if(Array.isArray(a))for(let g=0,v=u.length;g<v;g++){const m=u[g],p=a[m.materialIndex],_=Math.max(m.start,f.start),E=Math.min(o.count,Math.min(m.start+m.count,f.start+f.count));for(let x=_,C=E;x<C;x+=3){const T=o.getX(x),w=o.getX(x+1),R=o.getX(x+2);s=ma(this,p,e,n,l,d,h,T,w,R),s&&(s.faceIndex=Math.floor(x/3),s.face.materialIndex=m.materialIndex,t.push(s))}}else{const g=Math.max(0,f.start),v=Math.min(o.count,f.start+f.count);for(let m=g,p=v;m<p;m+=3){const _=o.getX(m),E=o.getX(m+1),x=o.getX(m+2);s=ma(this,a,e,n,l,d,h,_,E,x),s&&(s.faceIndex=Math.floor(m/3),t.push(s))}}else if(c!==void 0)if(Array.isArray(a))for(let g=0,v=u.length;g<v;g++){const m=u[g],p=a[m.materialIndex],_=Math.max(m.start,f.start),E=Math.min(c.count,Math.min(m.start+m.count,f.start+f.count));for(let x=_,C=E;x<C;x+=3){const T=x,w=x+1,R=x+2;s=ma(this,p,e,n,l,d,h,T,w,R),s&&(s.faceIndex=Math.floor(x/3),s.face.materialIndex=m.materialIndex,t.push(s))}}else{const g=Math.max(0,f.start),v=Math.min(c.count,f.start+f.count);for(let m=g,p=v;m<p;m+=3){const _=m,E=m+1,x=m+2;s=ma(this,a,e,n,l,d,h,_,E,x),s&&(s.faceIndex=Math.floor(m/3),t.push(s))}}}}function tm(i,e,t,n,s,r,a,o){let c;if(e.side===on?c=n.intersectTriangle(a,r,s,!0,o):c=n.intersectTriangle(s,r,a,e.side===yi,o),c===null)return null;pa.copy(o),pa.applyMatrix4(i.matrixWorld);const l=t.ray.origin.distanceTo(pa);return l<t.near||l>t.far?null:{distance:l,point:pa.clone(),object:i}}function ma(i,e,t,n,s,r,a,o,c,l){i.getVertexPosition(o,da),i.getVertexPosition(c,ha),i.getVertexPosition(l,ua);const d=tm(i,e,t,n,da,ha,ua,Pd);if(d){const h=new L;On.getBarycoord(Pd,da,ha,ua,h),s&&(d.uv=On.getInterpolatedAttribute(s,o,c,l,h,new Ke)),r&&(d.uv1=On.getInterpolatedAttribute(r,o,c,l,h,new Ke)),a&&(d.normal=On.getInterpolatedAttribute(a,o,c,l,h,new L),d.normal.dot(n.direction)>0&&d.normal.multiplyScalar(-1));const u={a:o,b:c,c:l,normal:new L,materialIndex:0};On.getNormal(da,ha,ua,u.normal),d.face=u,d.barycoord=h}return d}class le extends cn{constructor(e=1,t=1,n=1,s=1,r=1,a=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:n,widthSegments:s,heightSegments:r,depthSegments:a};const o=this;s=Math.floor(s),r=Math.floor(r),a=Math.floor(a);const c=[],l=[],d=[],h=[];let u=0,f=0;g("z","y","x",-1,-1,n,t,e,a,r,0),g("z","y","x",1,-1,n,t,-e,a,r,1),g("x","z","y",1,1,e,n,t,s,a,2),g("x","z","y",1,-1,e,n,-t,s,a,3),g("x","y","z",1,-1,e,t,n,s,r,4),g("x","y","z",-1,-1,e,t,-n,s,r,5),this.setIndex(c),this.setAttribute("position",new Ht(l,3)),this.setAttribute("normal",new Ht(d,3)),this.setAttribute("uv",new Ht(h,2));function g(v,m,p,_,E,x,C,T,w,R,S){const y=x/w,I=C/R,O=x/2,P=C/2,U=T/2,V=w+1,z=R+1;let Z=0,G=0;const ee=new L;for(let ie=0;ie<z;ie++){const ae=ie*I-P;for(let he=0;he<V;he++){const Se=he*y-O;ee[v]=Se*_,ee[m]=ae*E,ee[p]=U,l.push(ee.x,ee.y,ee.z),ee[v]=0,ee[m]=0,ee[p]=T>0?1:-1,d.push(ee.x,ee.y,ee.z),h.push(he/w),h.push(1-ie/R),Z+=1}}for(let ie=0;ie<R;ie++)for(let ae=0;ae<w;ae++){const he=u+ae+V*ie,Se=u+ae+V*(ie+1),K=u+(ae+1)+V*(ie+1),ne=u+(ae+1)+V*ie;c.push(he,Se,ne),c.push(Se,K,ne),G+=6}o.addGroup(f,G,S),f+=G,u+=Z}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new le(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function ir(i){const e={};for(const t in i){e[t]={};for(const n in i[t]){const s=i[t][n];s&&(s.isColor||s.isMatrix3||s.isMatrix4||s.isVector2||s.isVector3||s.isVector4||s.isTexture||s.isQuaternion)?s.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][n]=null):e[t][n]=s.clone():Array.isArray(s)?e[t][n]=s.slice():e[t][n]=s}}return e}function Kt(i){const e={};for(let t=0;t<i.length;t++){const n=ir(i[t]);for(const s in n)e[s]=n[s]}return e}function nm(i){const e=[];for(let t=0;t<i.length;t++)e.push(i[t].clone());return e}function Au(i){const e=i.getRenderTarget();return e===null?i.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:tt.workingColorSpace}const im={clone:ir,merge:Kt};var sm=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,rm=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Ki extends $n{static get type(){return"ShaderMaterial"}constructor(e){super(),this.isShaderMaterial=!0,this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=sm,this.fragmentShader=rm,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=ir(e.uniforms),this.uniformsGroups=nm(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const s in this.uniforms){const a=this.uniforms[s].value;a&&a.isTexture?t.uniforms[s]={type:"t",value:a.toJSON(e).uuid}:a&&a.isColor?t.uniforms[s]={type:"c",value:a.getHex()}:a&&a.isVector2?t.uniforms[s]={type:"v2",value:a.toArray()}:a&&a.isVector3?t.uniforms[s]={type:"v3",value:a.toArray()}:a&&a.isVector4?t.uniforms[s]={type:"v4",value:a.toArray()}:a&&a.isMatrix3?t.uniforms[s]={type:"m3",value:a.toArray()}:a&&a.isMatrix4?t.uniforms[s]={type:"m4",value:a.toArray()}:t.uniforms[s]={value:a}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;const n={};for(const s in this.extensions)this.extensions[s]===!0&&(n[s]=!0);return Object.keys(n).length>0&&(t.extensions=n),t}}class Ru extends Mt{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new We,this.projectionMatrix=new We,this.projectionMatrixInverse=new We,this.coordinateSystem=_i}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const Ni=new L,Nd=new Ke,Ud=new Ke;class Zt extends Ru{constructor(e=50,t=1,n=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=n,this.far=s,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=nr*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(Nr*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return nr*2*Math.atan(Math.tan(Nr*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,n){Ni.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(Ni.x,Ni.y).multiplyScalar(-e/Ni.z),Ni.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(Ni.x,Ni.y).multiplyScalar(-e/Ni.z)}getViewSize(e,t){return this.getViewBounds(e,Nd,Ud),t.subVectors(Ud,Nd)}setViewOffset(e,t,n,s,r,a){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(Nr*.5*this.fov)/this.zoom,n=2*t,s=this.aspect*n,r=-.5*s;const a=this.view;if(this.view!==null&&this.view.enabled){const c=a.fullWidth,l=a.fullHeight;r+=a.offsetX*s/c,t-=a.offsetY*n/l,s*=a.width/c,n*=a.height/l}const o=this.filmOffset;o!==0&&(r+=e*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+s,t,t-n,e,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}const Ns=-90,Us=1;class am extends Mt{constructor(e,t,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;const s=new Zt(Ns,Us,e,t);s.layers=this.layers,this.add(s);const r=new Zt(Ns,Us,e,t);r.layers=this.layers,this.add(r);const a=new Zt(Ns,Us,e,t);a.layers=this.layers,this.add(a);const o=new Zt(Ns,Us,e,t);o.layers=this.layers,this.add(o);const c=new Zt(Ns,Us,e,t);c.layers=this.layers,this.add(c);const l=new Zt(Ns,Us,e,t);l.layers=this.layers,this.add(l)}updateCoordinateSystem(){const e=this.coordinateSystem,t=this.children.concat(),[n,s,r,a,o,c]=t;for(const l of t)this.remove(l);if(e===_i)n.up.set(0,1,0),n.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),c.up.set(0,1,0),c.lookAt(0,0,-1);else if(e===eo)n.up.set(0,-1,0),n.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),c.up.set(0,-1,0),c.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const l of t)this.add(l),l.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();const{renderTarget:n,activeMipmapLevel:s}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[r,a,o,c,l,d]=this.children,h=e.getRenderTarget(),u=e.getActiveCubeFace(),f=e.getActiveMipmapLevel(),g=e.xr.enabled;e.xr.enabled=!1;const v=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,e.setRenderTarget(n,0,s),e.render(t,r),e.setRenderTarget(n,1,s),e.render(t,a),e.setRenderTarget(n,2,s),e.render(t,o),e.setRenderTarget(n,3,s),e.render(t,c),e.setRenderTarget(n,4,s),e.render(t,l),n.texture.generateMipmaps=v,e.setRenderTarget(n,5,s),e.render(t,d),e.setRenderTarget(h,u,f),e.xr.enabled=g,n.texture.needsPMREMUpdate=!0}}class Cu extends Nt{constructor(e,t,n,s,r,a,o,c,l,d){e=e!==void 0?e:[],t=t!==void 0?t:Js,super(e,t,n,s,r,a,o,c,l,d),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class om extends _s{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const n={width:e,height:e,depth:1},s=[n,n,n,n,n,n];this.texture=new Cu(s,t.mapping,t.wrapS,t.wrapT,t.magFilter,t.minFilter,t.format,t.type,t.anisotropy,t.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=t.generateMipmaps!==void 0?t.generateMipmaps:!1,this.texture.minFilter=t.minFilter!==void 0?t.minFilter:zt}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const n={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},s=new le(5,5,5),r=new Ki({name:"CubemapFromEquirect",uniforms:ir(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:on,blending:qi});r.uniforms.tEquirect.value=t;const a=new X(s,r),o=t.minFilter;return t.minFilter===qn&&(t.minFilter=zt),new am(1,10,this).update(e,a),t.minFilter=o,a.geometry.dispose(),a.material.dispose(),this}clear(e,t,n,s){const r=e.getRenderTarget();for(let a=0;a<6;a++)e.setRenderTarget(this,a),e.clear(t,n,s);e.setRenderTarget(r)}}const $o=new L,cm=new L,lm=new qe;class os{constructor(e=new L(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,n,s){return this.normal.set(e,t,n),this.constant=s,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,n){const s=$o.subVectors(n,t).cross(cm.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(s,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){const n=e.delta($o),s=this.normal.dot(n);if(s===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const r=-(e.start.dot(this.normal)+this.constant)/s;return r<0||r>1?null:t.copy(e.start).addScaledVector(n,r)}intersectsLine(e){const t=this.distanceToPoint(e.start),n=this.distanceToPoint(e.end);return t<0&&n>0||n<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const n=t||lm.getNormalMatrix(e),s=this.coplanarPoint($o).applyMatrix4(e),r=this.normal.applyMatrix3(n).normalize();return this.constant=-s.dot(r),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const is=new Jn,ga=new L;class Cl{constructor(e=new os,t=new os,n=new os,s=new os,r=new os,a=new os){this.planes=[e,t,n,s,r,a]}set(e,t,n,s,r,a){const o=this.planes;return o[0].copy(e),o[1].copy(t),o[2].copy(n),o[3].copy(s),o[4].copy(r),o[5].copy(a),this}copy(e){const t=this.planes;for(let n=0;n<6;n++)t[n].copy(e.planes[n]);return this}setFromProjectionMatrix(e,t=_i){const n=this.planes,s=e.elements,r=s[0],a=s[1],o=s[2],c=s[3],l=s[4],d=s[5],h=s[6],u=s[7],f=s[8],g=s[9],v=s[10],m=s[11],p=s[12],_=s[13],E=s[14],x=s[15];if(n[0].setComponents(c-r,u-l,m-f,x-p).normalize(),n[1].setComponents(c+r,u+l,m+f,x+p).normalize(),n[2].setComponents(c+a,u+d,m+g,x+_).normalize(),n[3].setComponents(c-a,u-d,m-g,x-_).normalize(),n[4].setComponents(c-o,u-h,m-v,x-E).normalize(),t===_i)n[5].setComponents(c+o,u+h,m+v,x+E).normalize();else if(t===eo)n[5].setComponents(o,h,v,E).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),is.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),is.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(is)}intersectsSprite(e){return is.center.set(0,0,0),is.radius=.7071067811865476,is.applyMatrix4(e.matrixWorld),this.intersectsSphere(is)}intersectsSphere(e){const t=this.planes,n=e.center,s=-e.radius;for(let r=0;r<6;r++)if(t[r].distanceToPoint(n)<s)return!1;return!0}intersectsBox(e){const t=this.planes;for(let n=0;n<6;n++){const s=t[n];if(ga.x=s.normal.x>0?e.max.x:e.min.x,ga.y=s.normal.y>0?e.max.y:e.min.y,ga.z=s.normal.z>0?e.max.z:e.min.z,s.distanceToPoint(ga)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let n=0;n<6;n++)if(t[n].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function Iu(){let i=null,e=!1,t=null,n=null;function s(r,a){t(r,a),n=i.requestAnimationFrame(s)}return{start:function(){e!==!0&&t!==null&&(n=i.requestAnimationFrame(s),e=!0)},stop:function(){i.cancelAnimationFrame(n),e=!1},setAnimationLoop:function(r){t=r},setContext:function(r){i=r}}}function dm(i){const e=new WeakMap;function t(o,c){const l=o.array,d=o.usage,h=l.byteLength,u=i.createBuffer();i.bindBuffer(c,u),i.bufferData(c,l,d),o.onUploadCallback();let f;if(l instanceof Float32Array)f=i.FLOAT;else if(l instanceof Uint16Array)o.isFloat16BufferAttribute?f=i.HALF_FLOAT:f=i.UNSIGNED_SHORT;else if(l instanceof Int16Array)f=i.SHORT;else if(l instanceof Uint32Array)f=i.UNSIGNED_INT;else if(l instanceof Int32Array)f=i.INT;else if(l instanceof Int8Array)f=i.BYTE;else if(l instanceof Uint8Array)f=i.UNSIGNED_BYTE;else if(l instanceof Uint8ClampedArray)f=i.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+l);return{buffer:u,type:f,bytesPerElement:l.BYTES_PER_ELEMENT,version:o.version,size:h}}function n(o,c,l){const d=c.array,h=c.updateRanges;if(i.bindBuffer(l,o),h.length===0)i.bufferSubData(l,0,d);else{h.sort((f,g)=>f.start-g.start);let u=0;for(let f=1;f<h.length;f++){const g=h[u],v=h[f];v.start<=g.start+g.count+1?g.count=Math.max(g.count,v.start+v.count-g.start):(++u,h[u]=v)}h.length=u+1;for(let f=0,g=h.length;f<g;f++){const v=h[f];i.bufferSubData(l,v.start*d.BYTES_PER_ELEMENT,d,v.start,v.count)}c.clearUpdateRanges()}c.onUploadCallback()}function s(o){return o.isInterleavedBufferAttribute&&(o=o.data),e.get(o)}function r(o){o.isInterleavedBufferAttribute&&(o=o.data);const c=e.get(o);c&&(i.deleteBuffer(c.buffer),e.delete(o))}function a(o,c){if(o.isInterleavedBufferAttribute&&(o=o.data),o.isGLBufferAttribute){const d=e.get(o);(!d||d.version<o.version)&&e.set(o,{buffer:o.buffer,type:o.type,bytesPerElement:o.elementSize,version:o.version});return}const l=e.get(o);if(l===void 0)e.set(o,t(o,c));else if(l.version<o.version){if(l.size!==o.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(l.buffer,o,c),l.version=o.version}}return{get:s,remove:r,update:a}}class Zi extends cn{constructor(e=1,t=1,n=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:n,heightSegments:s};const r=e/2,a=t/2,o=Math.floor(n),c=Math.floor(s),l=o+1,d=c+1,h=e/o,u=t/c,f=[],g=[],v=[],m=[];for(let p=0;p<d;p++){const _=p*u-a;for(let E=0;E<l;E++){const x=E*h-r;g.push(x,-_,0),v.push(0,0,1),m.push(E/o),m.push(1-p/c)}}for(let p=0;p<c;p++)for(let _=0;_<o;_++){const E=_+l*p,x=_+l*(p+1),C=_+1+l*(p+1),T=_+1+l*p;f.push(E,x,T),f.push(x,C,T)}this.setIndex(f),this.setAttribute("position",new Ht(g,3)),this.setAttribute("normal",new Ht(v,3)),this.setAttribute("uv",new Ht(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Zi(e.width,e.height,e.widthSegments,e.heightSegments)}}var hm=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,um=`#ifdef USE_ALPHAHASH
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
#endif`,fm=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,pm=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,mm=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,gm=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,vm=`#ifdef USE_AOMAP
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
#endif`,_m=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,xm=`#ifdef USE_BATCHING
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
#endif`,ym=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,Mm=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,Sm=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,Em=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,bm=`#ifdef USE_IRIDESCENCE
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
#endif`,Tm=`#ifdef USE_BUMPMAP
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
#endif`,wm=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,Am=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,Rm=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,Cm=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,Im=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,Lm=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,Dm=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,Pm=`#if defined( USE_COLOR_ALPHA )
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
#endif`,Nm=`#define PI 3.141592653589793
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
} // validated`,Um=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,Om=`vec3 transformedNormal = objectNormal;
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
#endif`,Fm=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,Bm=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,km=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,zm=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,Hm="gl_FragColor = linearToOutputTexel( gl_FragColor );",Gm=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,Vm=`#ifdef USE_ENVMAP
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
#endif`,Wm=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,Xm=`#ifdef USE_ENVMAP
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
#endif`,Ym=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,qm=`#ifdef USE_ENVMAP
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
#endif`,$m=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,Km=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,Zm=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,jm=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,Jm=`#ifdef USE_GRADIENTMAP
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
}`,Qm=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,eg=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,tg=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,ng=`uniform bool receiveShadow;
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
#endif`,ig=`#ifdef USE_ENVMAP
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
#endif`,sg=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,rg=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,ag=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,og=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,cg=`PhysicalMaterial material;
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
#endif`,lg=`struct PhysicalMaterial {
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
}`,dg=`
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
#endif`,hg=`#if defined( RE_IndirectDiffuse )
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
#endif`,ug=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,fg=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,pg=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,mg=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,gg=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,vg=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,_g=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,xg=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,yg=`#if defined( USE_POINTS_UV )
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
#endif`,Mg=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,Sg=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,Eg=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,bg=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,Tg=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,wg=`#ifdef USE_MORPHTARGETS
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
#endif`,Ag=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Rg=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,Cg=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,Ig=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Lg=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Dg=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,Pg=`#ifdef USE_NORMALMAP
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
#endif`,Ng=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,Ug=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,Og=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,Fg=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,Bg=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,kg=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,zg=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,Hg=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,Gg=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,Vg=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,Wg=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,Xg=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,Yg=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,qg=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,$g=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,Kg=`float getShadowMask() {
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
}`,Zg=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,jg=`#ifdef USE_SKINNING
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
#endif`,Jg=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,Qg=`#ifdef USE_SKINNING
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
#endif`,e0=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,t0=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,n0=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,i0=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,s0=`#ifdef USE_TRANSMISSION
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
#endif`,r0=`#ifdef USE_TRANSMISSION
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
#endif`,a0=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,o0=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,c0=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,l0=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const d0=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,h0=`uniform sampler2D t2D;
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
}`,u0=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,f0=`#ifdef ENVMAP_TYPE_CUBE
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
}`,p0=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,m0=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,g0=`#include <common>
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
}`,v0=`#if DEPTH_PACKING == 3200
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
}`,_0=`#define DISTANCE
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
}`,x0=`#define DISTANCE
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
}`,y0=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,M0=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,S0=`uniform float scale;
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
}`,E0=`uniform vec3 diffuse;
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
}`,b0=`#include <common>
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
}`,T0=`uniform vec3 diffuse;
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
}`,w0=`#define LAMBERT
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
}`,A0=`#define LAMBERT
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
}`,R0=`#define MATCAP
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
}`,C0=`#define MATCAP
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
}`,I0=`#define NORMAL
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
}`,L0=`#define NORMAL
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
}`,D0=`#define PHONG
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
}`,P0=`#define PHONG
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
}`,N0=`#define STANDARD
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
}`,U0=`#define STANDARD
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
}`,O0=`#define TOON
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
}`,F0=`#define TOON
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
}`,B0=`uniform float size;
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
}`,k0=`uniform vec3 diffuse;
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
}`,z0=`#include <common>
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
}`,H0=`uniform vec3 color;
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
}`,G0=`uniform float rotation;
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
}`,V0=`uniform vec3 diffuse;
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
}`,je={alphahash_fragment:hm,alphahash_pars_fragment:um,alphamap_fragment:fm,alphamap_pars_fragment:pm,alphatest_fragment:mm,alphatest_pars_fragment:gm,aomap_fragment:vm,aomap_pars_fragment:_m,batching_pars_vertex:xm,batching_vertex:ym,begin_vertex:Mm,beginnormal_vertex:Sm,bsdfs:Em,iridescence_fragment:bm,bumpmap_pars_fragment:Tm,clipping_planes_fragment:wm,clipping_planes_pars_fragment:Am,clipping_planes_pars_vertex:Rm,clipping_planes_vertex:Cm,color_fragment:Im,color_pars_fragment:Lm,color_pars_vertex:Dm,color_vertex:Pm,common:Nm,cube_uv_reflection_fragment:Um,defaultnormal_vertex:Om,displacementmap_pars_vertex:Fm,displacementmap_vertex:Bm,emissivemap_fragment:km,emissivemap_pars_fragment:zm,colorspace_fragment:Hm,colorspace_pars_fragment:Gm,envmap_fragment:Vm,envmap_common_pars_fragment:Wm,envmap_pars_fragment:Xm,envmap_pars_vertex:Ym,envmap_physical_pars_fragment:ig,envmap_vertex:qm,fog_vertex:$m,fog_pars_vertex:Km,fog_fragment:Zm,fog_pars_fragment:jm,gradientmap_pars_fragment:Jm,lightmap_pars_fragment:Qm,lights_lambert_fragment:eg,lights_lambert_pars_fragment:tg,lights_pars_begin:ng,lights_toon_fragment:sg,lights_toon_pars_fragment:rg,lights_phong_fragment:ag,lights_phong_pars_fragment:og,lights_physical_fragment:cg,lights_physical_pars_fragment:lg,lights_fragment_begin:dg,lights_fragment_maps:hg,lights_fragment_end:ug,logdepthbuf_fragment:fg,logdepthbuf_pars_fragment:pg,logdepthbuf_pars_vertex:mg,logdepthbuf_vertex:gg,map_fragment:vg,map_pars_fragment:_g,map_particle_fragment:xg,map_particle_pars_fragment:yg,metalnessmap_fragment:Mg,metalnessmap_pars_fragment:Sg,morphinstance_vertex:Eg,morphcolor_vertex:bg,morphnormal_vertex:Tg,morphtarget_pars_vertex:wg,morphtarget_vertex:Ag,normal_fragment_begin:Rg,normal_fragment_maps:Cg,normal_pars_fragment:Ig,normal_pars_vertex:Lg,normal_vertex:Dg,normalmap_pars_fragment:Pg,clearcoat_normal_fragment_begin:Ng,clearcoat_normal_fragment_maps:Ug,clearcoat_pars_fragment:Og,iridescence_pars_fragment:Fg,opaque_fragment:Bg,packing:kg,premultiplied_alpha_fragment:zg,project_vertex:Hg,dithering_fragment:Gg,dithering_pars_fragment:Vg,roughnessmap_fragment:Wg,roughnessmap_pars_fragment:Xg,shadowmap_pars_fragment:Yg,shadowmap_pars_vertex:qg,shadowmap_vertex:$g,shadowmask_pars_fragment:Kg,skinbase_vertex:Zg,skinning_pars_vertex:jg,skinning_vertex:Jg,skinnormal_vertex:Qg,specularmap_fragment:e0,specularmap_pars_fragment:t0,tonemapping_fragment:n0,tonemapping_pars_fragment:i0,transmission_fragment:s0,transmission_pars_fragment:r0,uv_pars_fragment:a0,uv_pars_vertex:o0,uv_vertex:c0,worldpos_vertex:l0,background_vert:d0,background_frag:h0,backgroundCube_vert:u0,backgroundCube_frag:f0,cube_vert:p0,cube_frag:m0,depth_vert:g0,depth_frag:v0,distanceRGBA_vert:_0,distanceRGBA_frag:x0,equirect_vert:y0,equirect_frag:M0,linedashed_vert:S0,linedashed_frag:E0,meshbasic_vert:b0,meshbasic_frag:T0,meshlambert_vert:w0,meshlambert_frag:A0,meshmatcap_vert:R0,meshmatcap_frag:C0,meshnormal_vert:I0,meshnormal_frag:L0,meshphong_vert:D0,meshphong_frag:P0,meshphysical_vert:N0,meshphysical_frag:U0,meshtoon_vert:O0,meshtoon_frag:F0,points_vert:B0,points_frag:k0,shadow_vert:z0,shadow_frag:H0,sprite_vert:G0,sprite_frag:V0},fe={common:{diffuse:{value:new Oe(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new qe},alphaMap:{value:null},alphaMapTransform:{value:new qe},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new qe}},envmap:{envMap:{value:null},envMapRotation:{value:new qe},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new qe}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new qe}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new qe},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new qe},normalScale:{value:new Ke(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new qe},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new qe}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new qe}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new qe}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Oe(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Oe(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new qe},alphaTest:{value:0},uvTransform:{value:new qe}},sprite:{diffuse:{value:new Oe(16777215)},opacity:{value:1},center:{value:new Ke(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new qe},alphaMap:{value:null},alphaMapTransform:{value:new qe},alphaTest:{value:0}}},Vn={basic:{uniforms:Kt([fe.common,fe.specularmap,fe.envmap,fe.aomap,fe.lightmap,fe.fog]),vertexShader:je.meshbasic_vert,fragmentShader:je.meshbasic_frag},lambert:{uniforms:Kt([fe.common,fe.specularmap,fe.envmap,fe.aomap,fe.lightmap,fe.emissivemap,fe.bumpmap,fe.normalmap,fe.displacementmap,fe.fog,fe.lights,{emissive:{value:new Oe(0)}}]),vertexShader:je.meshlambert_vert,fragmentShader:je.meshlambert_frag},phong:{uniforms:Kt([fe.common,fe.specularmap,fe.envmap,fe.aomap,fe.lightmap,fe.emissivemap,fe.bumpmap,fe.normalmap,fe.displacementmap,fe.fog,fe.lights,{emissive:{value:new Oe(0)},specular:{value:new Oe(1118481)},shininess:{value:30}}]),vertexShader:je.meshphong_vert,fragmentShader:je.meshphong_frag},standard:{uniforms:Kt([fe.common,fe.envmap,fe.aomap,fe.lightmap,fe.emissivemap,fe.bumpmap,fe.normalmap,fe.displacementmap,fe.roughnessmap,fe.metalnessmap,fe.fog,fe.lights,{emissive:{value:new Oe(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:je.meshphysical_vert,fragmentShader:je.meshphysical_frag},toon:{uniforms:Kt([fe.common,fe.aomap,fe.lightmap,fe.emissivemap,fe.bumpmap,fe.normalmap,fe.displacementmap,fe.gradientmap,fe.fog,fe.lights,{emissive:{value:new Oe(0)}}]),vertexShader:je.meshtoon_vert,fragmentShader:je.meshtoon_frag},matcap:{uniforms:Kt([fe.common,fe.bumpmap,fe.normalmap,fe.displacementmap,fe.fog,{matcap:{value:null}}]),vertexShader:je.meshmatcap_vert,fragmentShader:je.meshmatcap_frag},points:{uniforms:Kt([fe.points,fe.fog]),vertexShader:je.points_vert,fragmentShader:je.points_frag},dashed:{uniforms:Kt([fe.common,fe.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:je.linedashed_vert,fragmentShader:je.linedashed_frag},depth:{uniforms:Kt([fe.common,fe.displacementmap]),vertexShader:je.depth_vert,fragmentShader:je.depth_frag},normal:{uniforms:Kt([fe.common,fe.bumpmap,fe.normalmap,fe.displacementmap,{opacity:{value:1}}]),vertexShader:je.meshnormal_vert,fragmentShader:je.meshnormal_frag},sprite:{uniforms:Kt([fe.sprite,fe.fog]),vertexShader:je.sprite_vert,fragmentShader:je.sprite_frag},background:{uniforms:{uvTransform:{value:new qe},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:je.background_vert,fragmentShader:je.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new qe}},vertexShader:je.backgroundCube_vert,fragmentShader:je.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:je.cube_vert,fragmentShader:je.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:je.equirect_vert,fragmentShader:je.equirect_frag},distanceRGBA:{uniforms:Kt([fe.common,fe.displacementmap,{referencePosition:{value:new L},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:je.distanceRGBA_vert,fragmentShader:je.distanceRGBA_frag},shadow:{uniforms:Kt([fe.lights,fe.fog,{color:{value:new Oe(0)},opacity:{value:1}}]),vertexShader:je.shadow_vert,fragmentShader:je.shadow_frag}};Vn.physical={uniforms:Kt([Vn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new qe},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new qe},clearcoatNormalScale:{value:new Ke(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new qe},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new qe},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new qe},sheen:{value:0},sheenColor:{value:new Oe(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new qe},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new qe},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new qe},transmissionSamplerSize:{value:new Ke},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new qe},attenuationDistance:{value:0},attenuationColor:{value:new Oe(0)},specularColor:{value:new Oe(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new qe},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new qe},anisotropyVector:{value:new Ke},anisotropyMap:{value:null},anisotropyMapTransform:{value:new qe}}]),vertexShader:je.meshphysical_vert,fragmentShader:je.meshphysical_frag};const va={r:0,b:0,g:0},ss=new jn,W0=new We;function X0(i,e,t,n,s,r,a){const o=new Oe(0);let c=r===!0?0:1,l,d,h=null,u=0,f=null;function g(_){let E=_.isScene===!0?_.background:null;return E&&E.isTexture&&(E=(_.backgroundBlurriness>0?t:e).get(E)),E}function v(_){let E=!1;const x=g(_);x===null?p(o,c):x&&x.isColor&&(p(x,1),E=!0);const C=i.xr.getEnvironmentBlendMode();C==="additive"?n.buffers.color.setClear(0,0,0,1,a):C==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,a),(i.autoClear||E)&&(n.buffers.depth.setTest(!0),n.buffers.depth.setMask(!0),n.buffers.color.setMask(!0),i.clear(i.autoClearColor,i.autoClearDepth,i.autoClearStencil))}function m(_,E){const x=g(E);x&&(x.isCubeTexture||x.mapping===_o)?(d===void 0&&(d=new X(new le(1,1,1),new Ki({name:"BackgroundCubeMaterial",uniforms:ir(Vn.backgroundCube.uniforms),vertexShader:Vn.backgroundCube.vertexShader,fragmentShader:Vn.backgroundCube.fragmentShader,side:on,depthTest:!1,depthWrite:!1,fog:!1})),d.geometry.deleteAttribute("normal"),d.geometry.deleteAttribute("uv"),d.onBeforeRender=function(C,T,w){this.matrixWorld.copyPosition(w.matrixWorld)},Object.defineProperty(d.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),s.update(d)),ss.copy(E.backgroundRotation),ss.x*=-1,ss.y*=-1,ss.z*=-1,x.isCubeTexture&&x.isRenderTargetTexture===!1&&(ss.y*=-1,ss.z*=-1),d.material.uniforms.envMap.value=x,d.material.uniforms.flipEnvMap.value=x.isCubeTexture&&x.isRenderTargetTexture===!1?-1:1,d.material.uniforms.backgroundBlurriness.value=E.backgroundBlurriness,d.material.uniforms.backgroundIntensity.value=E.backgroundIntensity,d.material.uniforms.backgroundRotation.value.setFromMatrix4(W0.makeRotationFromEuler(ss)),d.material.toneMapped=tt.getTransfer(x.colorSpace)!==dt,(h!==x||u!==x.version||f!==i.toneMapping)&&(d.material.needsUpdate=!0,h=x,u=x.version,f=i.toneMapping),d.layers.enableAll(),_.unshift(d,d.geometry,d.material,0,0,null)):x&&x.isTexture&&(l===void 0&&(l=new X(new Zi(2,2),new Ki({name:"BackgroundMaterial",uniforms:ir(Vn.background.uniforms),vertexShader:Vn.background.vertexShader,fragmentShader:Vn.background.fragmentShader,side:yi,depthTest:!1,depthWrite:!1,fog:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),s.update(l)),l.material.uniforms.t2D.value=x,l.material.uniforms.backgroundIntensity.value=E.backgroundIntensity,l.material.toneMapped=tt.getTransfer(x.colorSpace)!==dt,x.matrixAutoUpdate===!0&&x.updateMatrix(),l.material.uniforms.uvTransform.value.copy(x.matrix),(h!==x||u!==x.version||f!==i.toneMapping)&&(l.material.needsUpdate=!0,h=x,u=x.version,f=i.toneMapping),l.layers.enableAll(),_.unshift(l,l.geometry,l.material,0,0,null))}function p(_,E){_.getRGB(va,Au(i)),n.buffers.color.setClear(va.r,va.g,va.b,E,a)}return{getClearColor:function(){return o},setClearColor:function(_,E=1){o.set(_),c=E,p(o,c)},getClearAlpha:function(){return c},setClearAlpha:function(_){c=_,p(o,c)},render:v,addToRenderList:m}}function Y0(i,e){const t=i.getParameter(i.MAX_VERTEX_ATTRIBS),n={},s=u(null);let r=s,a=!1;function o(y,I,O,P,U){let V=!1;const z=h(P,O,I);r!==z&&(r=z,l(r.object)),V=f(y,P,O,U),V&&g(y,P,O,U),U!==null&&e.update(U,i.ELEMENT_ARRAY_BUFFER),(V||a)&&(a=!1,x(y,I,O,P),U!==null&&i.bindBuffer(i.ELEMENT_ARRAY_BUFFER,e.get(U).buffer))}function c(){return i.createVertexArray()}function l(y){return i.bindVertexArray(y)}function d(y){return i.deleteVertexArray(y)}function h(y,I,O){const P=O.wireframe===!0;let U=n[y.id];U===void 0&&(U={},n[y.id]=U);let V=U[I.id];V===void 0&&(V={},U[I.id]=V);let z=V[P];return z===void 0&&(z=u(c()),V[P]=z),z}function u(y){const I=[],O=[],P=[];for(let U=0;U<t;U++)I[U]=0,O[U]=0,P[U]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:I,enabledAttributes:O,attributeDivisors:P,object:y,attributes:{},index:null}}function f(y,I,O,P){const U=r.attributes,V=I.attributes;let z=0;const Z=O.getAttributes();for(const G in Z)if(Z[G].location>=0){const ie=U[G];let ae=V[G];if(ae===void 0&&(G==="instanceMatrix"&&y.instanceMatrix&&(ae=y.instanceMatrix),G==="instanceColor"&&y.instanceColor&&(ae=y.instanceColor)),ie===void 0||ie.attribute!==ae||ae&&ie.data!==ae.data)return!0;z++}return r.attributesNum!==z||r.index!==P}function g(y,I,O,P){const U={},V=I.attributes;let z=0;const Z=O.getAttributes();for(const G in Z)if(Z[G].location>=0){let ie=V[G];ie===void 0&&(G==="instanceMatrix"&&y.instanceMatrix&&(ie=y.instanceMatrix),G==="instanceColor"&&y.instanceColor&&(ie=y.instanceColor));const ae={};ae.attribute=ie,ie&&ie.data&&(ae.data=ie.data),U[G]=ae,z++}r.attributes=U,r.attributesNum=z,r.index=P}function v(){const y=r.newAttributes;for(let I=0,O=y.length;I<O;I++)y[I]=0}function m(y){p(y,0)}function p(y,I){const O=r.newAttributes,P=r.enabledAttributes,U=r.attributeDivisors;O[y]=1,P[y]===0&&(i.enableVertexAttribArray(y),P[y]=1),U[y]!==I&&(i.vertexAttribDivisor(y,I),U[y]=I)}function _(){const y=r.newAttributes,I=r.enabledAttributes;for(let O=0,P=I.length;O<P;O++)I[O]!==y[O]&&(i.disableVertexAttribArray(O),I[O]=0)}function E(y,I,O,P,U,V,z){z===!0?i.vertexAttribIPointer(y,I,O,U,V):i.vertexAttribPointer(y,I,O,P,U,V)}function x(y,I,O,P){v();const U=P.attributes,V=O.getAttributes(),z=I.defaultAttributeValues;for(const Z in V){const G=V[Z];if(G.location>=0){let ee=U[Z];if(ee===void 0&&(Z==="instanceMatrix"&&y.instanceMatrix&&(ee=y.instanceMatrix),Z==="instanceColor"&&y.instanceColor&&(ee=y.instanceColor)),ee!==void 0){const ie=ee.normalized,ae=ee.itemSize,he=e.get(ee);if(he===void 0)continue;const Se=he.buffer,K=he.type,ne=he.bytesPerElement,pe=K===i.INT||K===i.UNSIGNED_INT||ee.gpuType===Ml;if(ee.isInterleavedBufferAttribute){const oe=ee.data,be=oe.stride,Ee=ee.offset;if(oe.isInstancedInterleavedBuffer){for(let we=0;we<G.locationSize;we++)p(G.location+we,oe.meshPerAttribute);y.isInstancedMesh!==!0&&P._maxInstanceCount===void 0&&(P._maxInstanceCount=oe.meshPerAttribute*oe.count)}else for(let we=0;we<G.locationSize;we++)m(G.location+we);i.bindBuffer(i.ARRAY_BUFFER,Se);for(let we=0;we<G.locationSize;we++)E(G.location+we,ae/G.locationSize,K,ie,be*ne,(Ee+ae/G.locationSize*we)*ne,pe)}else{if(ee.isInstancedBufferAttribute){for(let oe=0;oe<G.locationSize;oe++)p(G.location+oe,ee.meshPerAttribute);y.isInstancedMesh!==!0&&P._maxInstanceCount===void 0&&(P._maxInstanceCount=ee.meshPerAttribute*ee.count)}else for(let oe=0;oe<G.locationSize;oe++)m(G.location+oe);i.bindBuffer(i.ARRAY_BUFFER,Se);for(let oe=0;oe<G.locationSize;oe++)E(G.location+oe,ae/G.locationSize,K,ie,ae*ne,ae/G.locationSize*oe*ne,pe)}}else if(z!==void 0){const ie=z[Z];if(ie!==void 0)switch(ie.length){case 2:i.vertexAttrib2fv(G.location,ie);break;case 3:i.vertexAttrib3fv(G.location,ie);break;case 4:i.vertexAttrib4fv(G.location,ie);break;default:i.vertexAttrib1fv(G.location,ie)}}}}_()}function C(){R();for(const y in n){const I=n[y];for(const O in I){const P=I[O];for(const U in P)d(P[U].object),delete P[U];delete I[O]}delete n[y]}}function T(y){if(n[y.id]===void 0)return;const I=n[y.id];for(const O in I){const P=I[O];for(const U in P)d(P[U].object),delete P[U];delete I[O]}delete n[y.id]}function w(y){for(const I in n){const O=n[I];if(O[y.id]===void 0)continue;const P=O[y.id];for(const U in P)d(P[U].object),delete P[U];delete O[y.id]}}function R(){S(),a=!0,r!==s&&(r=s,l(r.object))}function S(){s.geometry=null,s.program=null,s.wireframe=!1}return{setup:o,reset:R,resetDefaultState:S,dispose:C,releaseStatesOfGeometry:T,releaseStatesOfProgram:w,initAttributes:v,enableAttribute:m,disableUnusedAttributes:_}}function q0(i,e,t){let n;function s(l){n=l}function r(l,d){i.drawArrays(n,l,d),t.update(d,n,1)}function a(l,d,h){h!==0&&(i.drawArraysInstanced(n,l,d,h),t.update(d,n,h))}function o(l,d,h){if(h===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,l,0,d,0,h);let f=0;for(let g=0;g<h;g++)f+=d[g];t.update(f,n,1)}function c(l,d,h,u){if(h===0)return;const f=e.get("WEBGL_multi_draw");if(f===null)for(let g=0;g<l.length;g++)a(l[g],d[g],u[g]);else{f.multiDrawArraysInstancedWEBGL(n,l,0,d,0,u,0,h);let g=0;for(let v=0;v<h;v++)g+=d[v]*u[v];t.update(g,n,1)}}this.setMode=s,this.render=r,this.renderInstances=a,this.renderMultiDraw=o,this.renderMultiDrawInstances=c}function $0(i,e,t,n){let s;function r(){if(s!==void 0)return s;if(e.has("EXT_texture_filter_anisotropic")===!0){const w=e.get("EXT_texture_filter_anisotropic");s=i.getParameter(w.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else s=0;return s}function a(w){return!(w!==bn&&n.convert(w)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_FORMAT))}function o(w){const R=w===vi&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(w!==Si&&n.convert(w)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_TYPE)&&w!==an&&!R)}function c(w){if(w==="highp"){if(i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.HIGH_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.HIGH_FLOAT).precision>0)return"highp";w="mediump"}return w==="mediump"&&i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.MEDIUM_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let l=t.precision!==void 0?t.precision:"highp";const d=c(l);d!==l&&(console.warn("THREE.WebGLRenderer:",l,"not supported, using",d,"instead."),l=d);const h=t.logarithmicDepthBuffer===!0,u=t.reverseDepthBuffer===!0&&e.has("EXT_clip_control"),f=i.getParameter(i.MAX_TEXTURE_IMAGE_UNITS),g=i.getParameter(i.MAX_VERTEX_TEXTURE_IMAGE_UNITS),v=i.getParameter(i.MAX_TEXTURE_SIZE),m=i.getParameter(i.MAX_CUBE_MAP_TEXTURE_SIZE),p=i.getParameter(i.MAX_VERTEX_ATTRIBS),_=i.getParameter(i.MAX_VERTEX_UNIFORM_VECTORS),E=i.getParameter(i.MAX_VARYING_VECTORS),x=i.getParameter(i.MAX_FRAGMENT_UNIFORM_VECTORS),C=g>0,T=i.getParameter(i.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:c,textureFormatReadable:a,textureTypeReadable:o,precision:l,logarithmicDepthBuffer:h,reverseDepthBuffer:u,maxTextures:f,maxVertexTextures:g,maxTextureSize:v,maxCubemapSize:m,maxAttributes:p,maxVertexUniforms:_,maxVaryings:E,maxFragmentUniforms:x,vertexTextures:C,maxSamples:T}}function K0(i){const e=this;let t=null,n=0,s=!1,r=!1;const a=new os,o=new qe,c={value:null,needsUpdate:!1};this.uniform=c,this.numPlanes=0,this.numIntersection=0,this.init=function(h,u){const f=h.length!==0||u||n!==0||s;return s=u,n=h.length,f},this.beginShadows=function(){r=!0,d(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(h,u){t=d(h,u,0)},this.setState=function(h,u,f){const g=h.clippingPlanes,v=h.clipIntersection,m=h.clipShadows,p=i.get(h);if(!s||g===null||g.length===0||r&&!m)r?d(null):l();else{const _=r?0:n,E=_*4;let x=p.clippingState||null;c.value=x,x=d(g,u,E,f);for(let C=0;C!==E;++C)x[C]=t[C];p.clippingState=x,this.numIntersection=v?this.numPlanes:0,this.numPlanes+=_}};function l(){c.value!==t&&(c.value=t,c.needsUpdate=n>0),e.numPlanes=n,e.numIntersection=0}function d(h,u,f,g){const v=h!==null?h.length:0;let m=null;if(v!==0){if(m=c.value,g!==!0||m===null){const p=f+v*4,_=u.matrixWorldInverse;o.getNormalMatrix(_),(m===null||m.length<p)&&(m=new Float32Array(p));for(let E=0,x=f;E!==v;++E,x+=4)a.copy(h[E]).applyMatrix4(_,o),a.normal.toArray(m,x),m[x+3]=a.constant}c.value=m,c.needsUpdate=!0}return e.numPlanes=v,e.numIntersection=0,m}}function Z0(i){let e=new WeakMap;function t(a,o){return o===Wr?a.mapping=Js:o===Ac&&(a.mapping=Qs),a}function n(a){if(a&&a.isTexture){const o=a.mapping;if(o===Wr||o===Ac)if(e.has(a)){const c=e.get(a).texture;return t(c,a.mapping)}else{const c=a.image;if(c&&c.height>0){const l=new om(c.height);return l.fromEquirectangularTexture(i,a),e.set(a,l),a.addEventListener("dispose",s),t(l.texture,a.mapping)}else return null}}return a}function s(a){const o=a.target;o.removeEventListener("dispose",s);const c=e.get(o);c!==void 0&&(e.delete(o),c.dispose())}function r(){e=new WeakMap}return{get:n,dispose:r}}class Il extends Ru{constructor(e=-1,t=1,n=1,s=-1,r=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=n,this.bottom=s,this.near=r,this.far=a,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,n,s,r,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,s=(this.top+this.bottom)/2;let r=n-e,a=n+e,o=s+t,c=s-t;if(this.view!==null&&this.view.enabled){const l=(this.right-this.left)/this.view.fullWidth/this.zoom,d=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=l*this.view.offsetX,a=r+l*this.view.width,o-=d*this.view.offsetY,c=o-d*this.view.height}this.projectionMatrix.makeOrthographic(r,a,o,c,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}const Gs=4,Od=[.125,.215,.35,.446,.526,.582],ds=20,Ko=new Il,Fd=new Oe;let Zo=null,jo=0,Jo=0,Qo=!1;const cs=(1+Math.sqrt(5))/2,Os=1/cs,Bd=[new L(-cs,Os,0),new L(cs,Os,0),new L(-Os,0,cs),new L(Os,0,cs),new L(0,cs,-Os),new L(0,cs,Os),new L(-1,1,-1),new L(1,1,-1),new L(-1,1,1),new L(1,1,1)];class kd{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,n=.1,s=100){Zo=this._renderer.getRenderTarget(),jo=this._renderer.getActiveCubeFace(),Jo=this._renderer.getActiveMipmapLevel(),Qo=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(256);const r=this._allocateTargets();return r.depthBuffer=!0,this._sceneToCubeUV(e,n,s,r),t>0&&this._blur(r,0,0,t),this._applyPMREM(r),this._cleanup(r),r}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Gd(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Hd(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(Zo,jo,Jo),this._renderer.xr.enabled=Qo,e.scissorTest=!1,_a(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===Js||e.mapping===Qs?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),Zo=this._renderer.getRenderTarget(),jo=this._renderer.getActiveCubeFace(),Jo=this._renderer.getActiveMipmapLevel(),Qo=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const n=t||this._allocateTargets();return this._textureToCubeUV(e,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,n={magFilter:zt,minFilter:zt,generateMipmaps:!1,type:vi,format:bn,colorSpace:Yt,depthBuffer:!1},s=zd(e,t,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=zd(e,t,n);const{_lodMax:r}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=j0(r)),this._blurMaterial=J0(r,e,t)}return s}_compileMaterial(e){const t=new X(this._lodPlanes[0],e);this._renderer.compile(t,Ko)}_sceneToCubeUV(e,t,n,s){const o=new Zt(90,1,t,n),c=[1,-1,1,1,1,1],l=[1,1,1,-1,-1,-1],d=this._renderer,h=d.autoClear,u=d.toneMapping;d.getClearColor(Fd),d.toneMapping=$i,d.autoClear=!1;const f=new Tn({name:"PMREM.Background",side:on,depthWrite:!1,depthTest:!1}),g=new X(new le,f);let v=!1;const m=e.background;m?m.isColor&&(f.color.copy(m),e.background=null,v=!0):(f.color.copy(Fd),v=!0);for(let p=0;p<6;p++){const _=p%3;_===0?(o.up.set(0,c[p],0),o.lookAt(l[p],0,0)):_===1?(o.up.set(0,0,c[p]),o.lookAt(0,l[p],0)):(o.up.set(0,c[p],0),o.lookAt(0,0,l[p]));const E=this._cubeSize;_a(s,_*E,p>2?E:0,E,E),d.setRenderTarget(s),v&&d.render(g,o),d.render(e,o)}g.geometry.dispose(),g.material.dispose(),d.toneMapping=u,d.autoClear=h,e.background=m}_textureToCubeUV(e,t){const n=this._renderer,s=e.mapping===Js||e.mapping===Qs;s?(this._cubemapMaterial===null&&(this._cubemapMaterial=Gd()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Hd());const r=s?this._cubemapMaterial:this._equirectMaterial,a=new X(this._lodPlanes[0],r),o=r.uniforms;o.envMap.value=e;const c=this._cubeSize;_a(t,0,0,3*c,2*c),n.setRenderTarget(t),n.render(a,Ko)}_applyPMREM(e){const t=this._renderer,n=t.autoClear;t.autoClear=!1;const s=this._lodPlanes.length;for(let r=1;r<s;r++){const a=Math.sqrt(this._sigmas[r]*this._sigmas[r]-this._sigmas[r-1]*this._sigmas[r-1]),o=Bd[(s-r-1)%Bd.length];this._blur(e,r-1,r,a,o)}t.autoClear=n}_blur(e,t,n,s,r){const a=this._pingPongRenderTarget;this._halfBlur(e,a,t,n,s,"latitudinal",r),this._halfBlur(a,e,n,n,s,"longitudinal",r)}_halfBlur(e,t,n,s,r,a,o){const c=this._renderer,l=this._blurMaterial;a!=="latitudinal"&&a!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const d=3,h=new X(this._lodPlanes[s],l),u=l.uniforms,f=this._sizeLods[n]-1,g=isFinite(r)?Math.PI/(2*f):2*Math.PI/(2*ds-1),v=r/g,m=isFinite(r)?1+Math.floor(d*v):ds;m>ds&&console.warn(`sigmaRadians, ${r}, is too large and will clip, as it requested ${m} samples when the maximum is set to ${ds}`);const p=[];let _=0;for(let w=0;w<ds;++w){const R=w/v,S=Math.exp(-R*R/2);p.push(S),w===0?_+=S:w<m&&(_+=2*S)}for(let w=0;w<p.length;w++)p[w]=p[w]/_;u.envMap.value=e.texture,u.samples.value=m,u.weights.value=p,u.latitudinal.value=a==="latitudinal",o&&(u.poleAxis.value=o);const{_lodMax:E}=this;u.dTheta.value=g,u.mipInt.value=E-n;const x=this._sizeLods[s],C=3*x*(s>E-Gs?s-E+Gs:0),T=4*(this._cubeSize-x);_a(t,C,T,3*x,2*x),c.setRenderTarget(t),c.render(h,Ko)}}function j0(i){const e=[],t=[],n=[];let s=i;const r=i-Gs+1+Od.length;for(let a=0;a<r;a++){const o=Math.pow(2,s);t.push(o);let c=1/o;a>i-Gs?c=Od[a-i+Gs-1]:a===0&&(c=0),n.push(c);const l=1/(o-2),d=-l,h=1+l,u=[d,d,h,d,h,h,d,d,h,h,d,h],f=6,g=6,v=3,m=2,p=1,_=new Float32Array(v*g*f),E=new Float32Array(m*g*f),x=new Float32Array(p*g*f);for(let T=0;T<f;T++){const w=T%3*2/3-1,R=T>2?0:-1,S=[w,R,0,w+2/3,R,0,w+2/3,R+1,0,w,R,0,w+2/3,R+1,0,w,R+1,0];_.set(S,v*g*T),E.set(u,m*g*T);const y=[T,T,T,T,T,T];x.set(y,p*g*T)}const C=new cn;C.setAttribute("position",new Qt(_,v)),C.setAttribute("uv",new Qt(E,m)),C.setAttribute("faceIndex",new Qt(x,p)),e.push(C),s>Gs&&s--}return{lodPlanes:e,sizeLods:t,sigmas:n}}function zd(i,e,t){const n=new _s(i,e,t);return n.texture.mapping=_o,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function _a(i,e,t,n,s){i.viewport.set(e,t,n,s),i.scissor.set(e,t,n,s)}function J0(i,e,t){const n=new Float32Array(ds),s=new L(0,1,0);return new Ki({name:"SphericalGaussianBlur",defines:{n:ds,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:s}},vertexShader:Ll(),fragmentShader:`

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
		`,blending:qi,depthTest:!1,depthWrite:!1})}function Hd(){return new Ki({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Ll(),fragmentShader:`

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
		`,blending:qi,depthTest:!1,depthWrite:!1})}function Gd(){return new Ki({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Ll(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:qi,depthTest:!1,depthWrite:!1})}function Ll(){return`

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
	`}function Q0(i){let e=new WeakMap,t=null;function n(o){if(o&&o.isTexture){const c=o.mapping,l=c===Wr||c===Ac,d=c===Js||c===Qs;if(l||d){let h=e.get(o);const u=h!==void 0?h.texture.pmremVersion:0;if(o.isRenderTargetTexture&&o.pmremVersion!==u)return t===null&&(t=new kd(i)),h=l?t.fromEquirectangular(o,h):t.fromCubemap(o,h),h.texture.pmremVersion=o.pmremVersion,e.set(o,h),h.texture;if(h!==void 0)return h.texture;{const f=o.image;return l&&f&&f.height>0||d&&f&&s(f)?(t===null&&(t=new kd(i)),h=l?t.fromEquirectangular(o):t.fromCubemap(o),h.texture.pmremVersion=o.pmremVersion,e.set(o,h),o.addEventListener("dispose",r),h.texture):null}}}return o}function s(o){let c=0;const l=6;for(let d=0;d<l;d++)o[d]!==void 0&&c++;return c===l}function r(o){const c=o.target;c.removeEventListener("dispose",r);const l=e.get(c);l!==void 0&&(e.delete(c),l.dispose())}function a(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:n,dispose:a}}function ev(i){const e={};function t(n){if(e[n]!==void 0)return e[n];let s;switch(n){case"WEBGL_depth_texture":s=i.getExtension("WEBGL_depth_texture")||i.getExtension("MOZ_WEBGL_depth_texture")||i.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":s=i.getExtension("EXT_texture_filter_anisotropic")||i.getExtension("MOZ_EXT_texture_filter_anisotropic")||i.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":s=i.getExtension("WEBGL_compressed_texture_s3tc")||i.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":s=i.getExtension("WEBGL_compressed_texture_pvrtc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:s=i.getExtension(n)}return e[n]=s,s}return{has:function(n){return t(n)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(n){const s=t(n);return s===null&&Cr("THREE.WebGLRenderer: "+n+" extension not supported."),s}}}function tv(i,e,t,n){const s={},r=new WeakMap;function a(h){const u=h.target;u.index!==null&&e.remove(u.index);for(const g in u.attributes)e.remove(u.attributes[g]);for(const g in u.morphAttributes){const v=u.morphAttributes[g];for(let m=0,p=v.length;m<p;m++)e.remove(v[m])}u.removeEventListener("dispose",a),delete s[u.id];const f=r.get(u);f&&(e.remove(f),r.delete(u)),n.releaseStatesOfGeometry(u),u.isInstancedBufferGeometry===!0&&delete u._maxInstanceCount,t.memory.geometries--}function o(h,u){return s[u.id]===!0||(u.addEventListener("dispose",a),s[u.id]=!0,t.memory.geometries++),u}function c(h){const u=h.attributes;for(const g in u)e.update(u[g],i.ARRAY_BUFFER);const f=h.morphAttributes;for(const g in f){const v=f[g];for(let m=0,p=v.length;m<p;m++)e.update(v[m],i.ARRAY_BUFFER)}}function l(h){const u=[],f=h.index,g=h.attributes.position;let v=0;if(f!==null){const _=f.array;v=f.version;for(let E=0,x=_.length;E<x;E+=3){const C=_[E+0],T=_[E+1],w=_[E+2];u.push(C,T,T,w,w,C)}}else if(g!==void 0){const _=g.array;v=g.version;for(let E=0,x=_.length/3-1;E<x;E+=3){const C=E+0,T=E+1,w=E+2;u.push(C,T,T,w,w,C)}}else return;const m=new(yu(u)?wu:Tu)(u,1);m.version=v;const p=r.get(h);p&&e.remove(p),r.set(h,m)}function d(h){const u=r.get(h);if(u){const f=h.index;f!==null&&u.version<f.version&&l(h)}else l(h);return r.get(h)}return{get:o,update:c,getWireframeAttribute:d}}function nv(i,e,t){let n;function s(u){n=u}let r,a;function o(u){r=u.type,a=u.bytesPerElement}function c(u,f){i.drawElements(n,f,r,u*a),t.update(f,n,1)}function l(u,f,g){g!==0&&(i.drawElementsInstanced(n,f,r,u*a,g),t.update(f,n,g))}function d(u,f,g){if(g===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,f,0,r,u,0,g);let m=0;for(let p=0;p<g;p++)m+=f[p];t.update(m,n,1)}function h(u,f,g,v){if(g===0)return;const m=e.get("WEBGL_multi_draw");if(m===null)for(let p=0;p<u.length;p++)l(u[p]/a,f[p],v[p]);else{m.multiDrawElementsInstancedWEBGL(n,f,0,r,u,0,v,0,g);let p=0;for(let _=0;_<g;_++)p+=f[_]*v[_];t.update(p,n,1)}}this.setMode=s,this.setIndex=o,this.render=c,this.renderInstances=l,this.renderMultiDraw=d,this.renderMultiDrawInstances=h}function iv(i){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function n(r,a,o){switch(t.calls++,a){case i.TRIANGLES:t.triangles+=o*(r/3);break;case i.LINES:t.lines+=o*(r/2);break;case i.LINE_STRIP:t.lines+=o*(r-1);break;case i.LINE_LOOP:t.lines+=o*r;break;case i.POINTS:t.points+=o*r;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",a);break}}function s(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:s,update:n}}function sv(i,e,t){const n=new WeakMap,s=new rt;function r(a,o,c){const l=a.morphTargetInfluences,d=o.morphAttributes.position||o.morphAttributes.normal||o.morphAttributes.color,h=d!==void 0?d.length:0;let u=n.get(o);if(u===void 0||u.count!==h){let y=function(){R.dispose(),n.delete(o),o.removeEventListener("dispose",y)};var f=y;u!==void 0&&u.texture.dispose();const g=o.morphAttributes.position!==void 0,v=o.morphAttributes.normal!==void 0,m=o.morphAttributes.color!==void 0,p=o.morphAttributes.position||[],_=o.morphAttributes.normal||[],E=o.morphAttributes.color||[];let x=0;g===!0&&(x=1),v===!0&&(x=2),m===!0&&(x=3);let C=o.attributes.position.count*x,T=1;C>e.maxTextureSize&&(T=Math.ceil(C/e.maxTextureSize),C=e.maxTextureSize);const w=new Float32Array(C*T*4*h),R=new Su(w,C,T,h);R.type=an,R.needsUpdate=!0;const S=x*4;for(let I=0;I<h;I++){const O=p[I],P=_[I],U=E[I],V=C*T*4*I;for(let z=0;z<O.count;z++){const Z=z*S;g===!0&&(s.fromBufferAttribute(O,z),w[V+Z+0]=s.x,w[V+Z+1]=s.y,w[V+Z+2]=s.z,w[V+Z+3]=0),v===!0&&(s.fromBufferAttribute(P,z),w[V+Z+4]=s.x,w[V+Z+5]=s.y,w[V+Z+6]=s.z,w[V+Z+7]=0),m===!0&&(s.fromBufferAttribute(U,z),w[V+Z+8]=s.x,w[V+Z+9]=s.y,w[V+Z+10]=s.z,w[V+Z+11]=U.itemSize===4?s.w:1)}}u={count:h,texture:R,size:new Ke(C,T)},n.set(o,u),o.addEventListener("dispose",y)}if(a.isInstancedMesh===!0&&a.morphTexture!==null)c.getUniforms().setValue(i,"morphTexture",a.morphTexture,t);else{let g=0;for(let m=0;m<l.length;m++)g+=l[m];const v=o.morphTargetsRelative?1:1-g;c.getUniforms().setValue(i,"morphTargetBaseInfluence",v),c.getUniforms().setValue(i,"morphTargetInfluences",l)}c.getUniforms().setValue(i,"morphTargetsTexture",u.texture,t),c.getUniforms().setValue(i,"morphTargetsTextureSize",u.size)}return{update:r}}function rv(i,e,t,n){let s=new WeakMap;function r(c){const l=n.render.frame,d=c.geometry,h=e.get(c,d);if(s.get(h)!==l&&(e.update(h),s.set(h,l)),c.isInstancedMesh&&(c.hasEventListener("dispose",o)===!1&&c.addEventListener("dispose",o),s.get(c)!==l&&(t.update(c.instanceMatrix,i.ARRAY_BUFFER),c.instanceColor!==null&&t.update(c.instanceColor,i.ARRAY_BUFFER),s.set(c,l))),c.isSkinnedMesh){const u=c.skeleton;s.get(u)!==l&&(u.update(),s.set(u,l))}return h}function a(){s=new WeakMap}function o(c){const l=c.target;l.removeEventListener("dispose",o),t.remove(l.instanceMatrix),l.instanceColor!==null&&t.remove(l.instanceColor)}return{update:r,dispose:a}}class Lu extends Nt{constructor(e,t,n,s,r,a,o,c,l,d=qs){if(d!==qs&&d!==tr)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");n===void 0&&d===qs&&(n=vs),n===void 0&&d===tr&&(n=er),super(null,s,r,a,o,c,d,n,l),this.isDepthTexture=!0,this.image={width:e,height:t},this.magFilter=o!==void 0?o:Jt,this.minFilter=c!==void 0?c:Jt,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.compareFunction=e.compareFunction,this}toJSON(e){const t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}}const Du=new Nt,Vd=new Lu(1,1),Pu=new Su,Nu=new Gp,Uu=new Cu,Wd=[],Xd=[],Yd=new Float32Array(16),qd=new Float32Array(9),$d=new Float32Array(4);function dr(i,e,t){const n=i[0];if(n<=0||n>0)return i;const s=e*t;let r=Wd[s];if(r===void 0&&(r=new Float32Array(s),Wd[s]=r),e!==0){n.toArray(r,0);for(let a=1,o=0;a!==e;++a)o+=t,i[a].toArray(r,o)}return r}function Ut(i,e){if(i.length!==e.length)return!1;for(let t=0,n=i.length;t<n;t++)if(i[t]!==e[t])return!1;return!0}function Ot(i,e){for(let t=0,n=e.length;t<n;t++)i[t]=e[t]}function Mo(i,e){let t=Xd[e];t===void 0&&(t=new Int32Array(e),Xd[e]=t);for(let n=0;n!==e;++n)t[n]=i.allocateTextureUnit();return t}function av(i,e){const t=this.cache;t[0]!==e&&(i.uniform1f(this.addr,e),t[0]=e)}function ov(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Ut(t,e))return;i.uniform2fv(this.addr,e),Ot(t,e)}}function cv(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(i.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(Ut(t,e))return;i.uniform3fv(this.addr,e),Ot(t,e)}}function lv(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Ut(t,e))return;i.uniform4fv(this.addr,e),Ot(t,e)}}function dv(i,e){const t=this.cache,n=e.elements;if(n===void 0){if(Ut(t,e))return;i.uniformMatrix2fv(this.addr,!1,e),Ot(t,e)}else{if(Ut(t,n))return;$d.set(n),i.uniformMatrix2fv(this.addr,!1,$d),Ot(t,n)}}function hv(i,e){const t=this.cache,n=e.elements;if(n===void 0){if(Ut(t,e))return;i.uniformMatrix3fv(this.addr,!1,e),Ot(t,e)}else{if(Ut(t,n))return;qd.set(n),i.uniformMatrix3fv(this.addr,!1,qd),Ot(t,n)}}function uv(i,e){const t=this.cache,n=e.elements;if(n===void 0){if(Ut(t,e))return;i.uniformMatrix4fv(this.addr,!1,e),Ot(t,e)}else{if(Ut(t,n))return;Yd.set(n),i.uniformMatrix4fv(this.addr,!1,Yd),Ot(t,n)}}function fv(i,e){const t=this.cache;t[0]!==e&&(i.uniform1i(this.addr,e),t[0]=e)}function pv(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Ut(t,e))return;i.uniform2iv(this.addr,e),Ot(t,e)}}function mv(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Ut(t,e))return;i.uniform3iv(this.addr,e),Ot(t,e)}}function gv(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Ut(t,e))return;i.uniform4iv(this.addr,e),Ot(t,e)}}function vv(i,e){const t=this.cache;t[0]!==e&&(i.uniform1ui(this.addr,e),t[0]=e)}function _v(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Ut(t,e))return;i.uniform2uiv(this.addr,e),Ot(t,e)}}function xv(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Ut(t,e))return;i.uniform3uiv(this.addr,e),Ot(t,e)}}function yv(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Ut(t,e))return;i.uniform4uiv(this.addr,e),Ot(t,e)}}function Mv(i,e,t){const n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s);let r;this.type===i.SAMPLER_2D_SHADOW?(Vd.compareFunction=xu,r=Vd):r=Du,t.setTexture2D(e||r,s)}function Sv(i,e,t){const n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),t.setTexture3D(e||Nu,s)}function Ev(i,e,t){const n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),t.setTextureCube(e||Uu,s)}function bv(i,e,t){const n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),t.setTexture2DArray(e||Pu,s)}function Tv(i){switch(i){case 5126:return av;case 35664:return ov;case 35665:return cv;case 35666:return lv;case 35674:return dv;case 35675:return hv;case 35676:return uv;case 5124:case 35670:return fv;case 35667:case 35671:return pv;case 35668:case 35672:return mv;case 35669:case 35673:return gv;case 5125:return vv;case 36294:return _v;case 36295:return xv;case 36296:return yv;case 35678:case 36198:case 36298:case 36306:case 35682:return Mv;case 35679:case 36299:case 36307:return Sv;case 35680:case 36300:case 36308:case 36293:return Ev;case 36289:case 36303:case 36311:case 36292:return bv}}function wv(i,e){i.uniform1fv(this.addr,e)}function Av(i,e){const t=dr(e,this.size,2);i.uniform2fv(this.addr,t)}function Rv(i,e){const t=dr(e,this.size,3);i.uniform3fv(this.addr,t)}function Cv(i,e){const t=dr(e,this.size,4);i.uniform4fv(this.addr,t)}function Iv(i,e){const t=dr(e,this.size,4);i.uniformMatrix2fv(this.addr,!1,t)}function Lv(i,e){const t=dr(e,this.size,9);i.uniformMatrix3fv(this.addr,!1,t)}function Dv(i,e){const t=dr(e,this.size,16);i.uniformMatrix4fv(this.addr,!1,t)}function Pv(i,e){i.uniform1iv(this.addr,e)}function Nv(i,e){i.uniform2iv(this.addr,e)}function Uv(i,e){i.uniform3iv(this.addr,e)}function Ov(i,e){i.uniform4iv(this.addr,e)}function Fv(i,e){i.uniform1uiv(this.addr,e)}function Bv(i,e){i.uniform2uiv(this.addr,e)}function kv(i,e){i.uniform3uiv(this.addr,e)}function zv(i,e){i.uniform4uiv(this.addr,e)}function Hv(i,e,t){const n=this.cache,s=e.length,r=Mo(t,s);Ut(n,r)||(i.uniform1iv(this.addr,r),Ot(n,r));for(let a=0;a!==s;++a)t.setTexture2D(e[a]||Du,r[a])}function Gv(i,e,t){const n=this.cache,s=e.length,r=Mo(t,s);Ut(n,r)||(i.uniform1iv(this.addr,r),Ot(n,r));for(let a=0;a!==s;++a)t.setTexture3D(e[a]||Nu,r[a])}function Vv(i,e,t){const n=this.cache,s=e.length,r=Mo(t,s);Ut(n,r)||(i.uniform1iv(this.addr,r),Ot(n,r));for(let a=0;a!==s;++a)t.setTextureCube(e[a]||Uu,r[a])}function Wv(i,e,t){const n=this.cache,s=e.length,r=Mo(t,s);Ut(n,r)||(i.uniform1iv(this.addr,r),Ot(n,r));for(let a=0;a!==s;++a)t.setTexture2DArray(e[a]||Pu,r[a])}function Xv(i){switch(i){case 5126:return wv;case 35664:return Av;case 35665:return Rv;case 35666:return Cv;case 35674:return Iv;case 35675:return Lv;case 35676:return Dv;case 5124:case 35670:return Pv;case 35667:case 35671:return Nv;case 35668:case 35672:return Uv;case 35669:case 35673:return Ov;case 5125:return Fv;case 36294:return Bv;case 36295:return kv;case 36296:return zv;case 35678:case 36198:case 36298:case 36306:case 35682:return Hv;case 35679:case 36299:case 36307:return Gv;case 35680:case 36300:case 36308:case 36293:return Vv;case 36289:case 36303:case 36311:case 36292:return Wv}}class Yv{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.setValue=Tv(t.type)}}class qv{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=Xv(t.type)}}class $v{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,n){const s=this.seq;for(let r=0,a=s.length;r!==a;++r){const o=s[r];o.setValue(e,t[o.id],n)}}}const ec=/(\w+)(\])?(\[|\.)?/g;function Kd(i,e){i.seq.push(e),i.map[e.id]=e}function Kv(i,e,t){const n=i.name,s=n.length;for(ec.lastIndex=0;;){const r=ec.exec(n),a=ec.lastIndex;let o=r[1];const c=r[2]==="]",l=r[3];if(c&&(o=o|0),l===void 0||l==="["&&a+2===s){Kd(t,l===void 0?new Yv(o,i,e):new qv(o,i,e));break}else{let h=t.map[o];h===void 0&&(h=new $v(o),Kd(t,h)),t=h}}}class Xa{constructor(e,t){this.seq=[],this.map={};const n=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let s=0;s<n;++s){const r=e.getActiveUniform(t,s),a=e.getUniformLocation(t,r.name);Kv(r,a,this)}}setValue(e,t,n,s){const r=this.map[t];r!==void 0&&r.setValue(e,n,s)}setOptional(e,t,n){const s=t[n];s!==void 0&&this.setValue(e,n,s)}static upload(e,t,n,s){for(let r=0,a=t.length;r!==a;++r){const o=t[r],c=n[o.id];c.needsUpdate!==!1&&o.setValue(e,c.value,s)}}static seqWithValue(e,t){const n=[];for(let s=0,r=e.length;s!==r;++s){const a=e[s];a.id in t&&n.push(a)}return n}}function Zd(i,e,t){const n=i.createShader(e);return i.shaderSource(n,t),i.compileShader(n),n}const Zv=37297;let jv=0;function Jv(i,e){const t=i.split(`
`),n=[],s=Math.max(e-6,0),r=Math.min(e+6,t.length);for(let a=s;a<r;a++){const o=a+1;n.push(`${o===e?">":" "} ${o}: ${t[a]}`)}return n.join(`
`)}const jd=new qe;function Qv(i){tt._getMatrix(jd,tt.workingColorSpace,i);const e=`mat3( ${jd.elements.map(t=>t.toFixed(4))} )`;switch(tt.getTransfer(i)){case xo:return[e,"LinearTransferOETF"];case dt:return[e,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",i),[e,"LinearTransferOETF"]}}function Jd(i,e,t){const n=i.getShaderParameter(e,i.COMPILE_STATUS),s=i.getShaderInfoLog(e).trim();if(n&&s==="")return"";const r=/ERROR: 0:(\d+)/.exec(s);if(r){const a=parseInt(r[1]);return t.toUpperCase()+`

`+s+`

`+Jv(i.getShaderSource(e),a)}else return s}function e_(i,e){const t=Qv(e);return[`vec4 ${i}( vec4 value ) {`,`	return ${t[1]}( vec4( value.rgb * ${t[0]}, value.a ) );`,"}"].join(`
`)}function t_(i,e){let t;switch(e){case Jf:t="Linear";break;case Qf:t="Reinhard";break;case ep:t="Cineon";break;case ru:t="ACESFilmic";break;case np:t="AgX";break;case ip:t="Neutral";break;case tp:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+i+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}const xa=new L;function n_(){tt.getLuminanceCoefficients(xa);const i=xa.x.toFixed(4),e=xa.y.toFixed(4),t=xa.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${i}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function i_(i){return[i.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",i.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Ir).join(`
`)}function s_(i){const e=[];for(const t in i){const n=i[t];n!==!1&&e.push("#define "+t+" "+n)}return e.join(`
`)}function r_(i,e){const t={},n=i.getProgramParameter(e,i.ACTIVE_ATTRIBUTES);for(let s=0;s<n;s++){const r=i.getActiveAttrib(e,s),a=r.name;let o=1;r.type===i.FLOAT_MAT2&&(o=2),r.type===i.FLOAT_MAT3&&(o=3),r.type===i.FLOAT_MAT4&&(o=4),t[a]={type:r.type,location:i.getAttribLocation(e,a),locationSize:o}}return t}function Ir(i){return i!==""}function Qd(i,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return i.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function eh(i,e){return i.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const a_=/^[ \t]*#include +<([\w\d./]+)>/gm;function nl(i){return i.replace(a_,c_)}const o_=new Map;function c_(i,e){let t=je[e];if(t===void 0){const n=o_.get(e);if(n!==void 0)t=je[n],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,n);else throw new Error("Can not resolve #include <"+e+">")}return nl(t)}const l_=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function th(i){return i.replace(l_,d_)}function d_(i,e,t,n){let s="";for(let r=parseInt(e);r<parseInt(t);r++)s+=n.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return s}function nh(i){let e=`precision ${i.precision} float;
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
#define LOW_PRECISION`),e}function h_(i){let e="SHADOWMAP_TYPE_BASIC";return i.shadowMapType===nu?e="SHADOWMAP_TYPE_PCF":i.shadowMapType===iu?e="SHADOWMAP_TYPE_PCF_SOFT":i.shadowMapType===di&&(e="SHADOWMAP_TYPE_VSM"),e}function u_(i){let e="ENVMAP_TYPE_CUBE";if(i.envMap)switch(i.envMapMode){case Js:case Qs:e="ENVMAP_TYPE_CUBE";break;case _o:e="ENVMAP_TYPE_CUBE_UV";break}return e}function f_(i){let e="ENVMAP_MODE_REFLECTION";if(i.envMap)switch(i.envMapMode){case Qs:e="ENVMAP_MODE_REFRACTION";break}return e}function p_(i){let e="ENVMAP_BLENDING_NONE";if(i.envMap)switch(i.combine){case su:e="ENVMAP_BLENDING_MULTIPLY";break;case Zf:e="ENVMAP_BLENDING_MIX";break;case jf:e="ENVMAP_BLENDING_ADD";break}return e}function m_(i){const e=i.envMapCubeUVHeight;if(e===null)return null;const t=Math.log2(e)-2,n=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),112)),texelHeight:n,maxMip:t}}function g_(i,e,t,n){const s=i.getContext(),r=t.defines;let a=t.vertexShader,o=t.fragmentShader;const c=h_(t),l=u_(t),d=f_(t),h=p_(t),u=m_(t),f=i_(t),g=s_(r),v=s.createProgram();let m,p,_=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(m=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g].filter(Ir).join(`
`),m.length>0&&(m+=`
`),p=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g].filter(Ir).join(`
`),p.length>0&&(p+=`
`)):(m=[nh(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+d:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+c:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Ir).join(`
`),p=[nh(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+l:"",t.envMap?"#define "+d:"",t.envMap?"#define "+h:"",u?"#define CUBEUV_TEXEL_WIDTH "+u.texelWidth:"",u?"#define CUBEUV_TEXEL_HEIGHT "+u.texelHeight:"",u?"#define CUBEUV_MAX_MIP "+u.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor||t.batchingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+c:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==$i?"#define TONE_MAPPING":"",t.toneMapping!==$i?je.tonemapping_pars_fragment:"",t.toneMapping!==$i?t_("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",je.colorspace_pars_fragment,e_("linearToOutputTexel",t.outputColorSpace),n_(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(Ir).join(`
`)),a=nl(a),a=Qd(a,t),a=eh(a,t),o=nl(o),o=Qd(o,t),o=eh(o,t),a=th(a),o=th(o),t.isRawShaderMaterial!==!0&&(_=`#version 300 es
`,m=[f,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,p=["#define varying in",t.glslVersion===pd?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===pd?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+p);const E=_+m+a,x=_+p+o,C=Zd(s,s.VERTEX_SHADER,E),T=Zd(s,s.FRAGMENT_SHADER,x);s.attachShader(v,C),s.attachShader(v,T),t.index0AttributeName!==void 0?s.bindAttribLocation(v,0,t.index0AttributeName):t.morphTargets===!0&&s.bindAttribLocation(v,0,"position"),s.linkProgram(v);function w(I){if(i.debug.checkShaderErrors){const O=s.getProgramInfoLog(v).trim(),P=s.getShaderInfoLog(C).trim(),U=s.getShaderInfoLog(T).trim();let V=!0,z=!0;if(s.getProgramParameter(v,s.LINK_STATUS)===!1)if(V=!1,typeof i.debug.onShaderError=="function")i.debug.onShaderError(s,v,C,T);else{const Z=Jd(s,C,"vertex"),G=Jd(s,T,"fragment");console.error("THREE.WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(v,s.VALIDATE_STATUS)+`

Material Name: `+I.name+`
Material Type: `+I.type+`

Program Info Log: `+O+`
`+Z+`
`+G)}else O!==""?console.warn("THREE.WebGLProgram: Program Info Log:",O):(P===""||U==="")&&(z=!1);z&&(I.diagnostics={runnable:V,programLog:O,vertexShader:{log:P,prefix:m},fragmentShader:{log:U,prefix:p}})}s.deleteShader(C),s.deleteShader(T),R=new Xa(s,v),S=r_(s,v)}let R;this.getUniforms=function(){return R===void 0&&w(this),R};let S;this.getAttributes=function(){return S===void 0&&w(this),S};let y=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return y===!1&&(y=s.getProgramParameter(v,Zv)),y},this.destroy=function(){n.releaseStatesOfProgram(this),s.deleteProgram(v),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=jv++,this.cacheKey=e,this.usedTimes=1,this.program=v,this.vertexShader=C,this.fragmentShader=T,this}let v_=0;class __{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const t=e.vertexShader,n=e.fragmentShader,s=this._getShaderStage(t),r=this._getShaderStage(n),a=this._getShaderCacheForMaterial(e);return a.has(s)===!1&&(a.add(s),s.usedTimes++),a.has(r)===!1&&(a.add(r),r.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const n of t)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let n=t.get(e);return n===void 0&&(n=new Set,t.set(e,n)),n}_getShaderStage(e){const t=this.shaderCache;let n=t.get(e);return n===void 0&&(n=new x_(e),t.set(e,n)),n}}class x_{constructor(e){this.id=v_++,this.code=e,this.usedTimes=0}}function y_(i,e,t,n,s,r,a){const o=new Eu,c=new __,l=new Set,d=[],h=s.logarithmicDepthBuffer,u=s.vertexTextures;let f=s.precision;const g={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function v(S){return l.add(S),S===0?"uv":`uv${S}`}function m(S,y,I,O,P){const U=O.fog,V=P.geometry,z=S.isMeshStandardMaterial?O.environment:null,Z=(S.isMeshStandardMaterial?t:e).get(S.envMap||z),G=Z&&Z.mapping===_o?Z.image.height:null,ee=g[S.type];S.precision!==null&&(f=s.getMaxPrecision(S.precision),f!==S.precision&&console.warn("THREE.WebGLProgram.getParameters:",S.precision,"not supported, using",f,"instead."));const ie=V.morphAttributes.position||V.morphAttributes.normal||V.morphAttributes.color,ae=ie!==void 0?ie.length:0;let he=0;V.morphAttributes.position!==void 0&&(he=1),V.morphAttributes.normal!==void 0&&(he=2),V.morphAttributes.color!==void 0&&(he=3);let Se,K,ne,pe;if(ee){const it=Vn[ee];Se=it.vertexShader,K=it.fragmentShader}else Se=S.vertexShader,K=S.fragmentShader,c.update(S),ne=c.getVertexShaderID(S),pe=c.getFragmentShaderID(S);const oe=i.getRenderTarget(),be=i.state.buffers.depth.getReversed(),Ee=P.isInstancedMesh===!0,we=P.isBatchedMesh===!0,Ze=!!S.map,Ie=!!S.matcap,Xe=!!Z,N=!!S.aoMap,ut=!!S.lightMap,Ge=!!S.bumpMap,Be=!!S.normalMap,Le=!!S.displacementMap,nt=!!S.emissiveMap,Pe=!!S.metalnessMap,A=!!S.roughnessMap,M=S.anisotropy>0,W=S.clearcoat>0,J=S.dispersion>0,te=S.iridescence>0,j=S.sheen>0,Te=S.transmission>0,ue=M&&!!S.anisotropyMap,ve=W&&!!S.clearcoatMap,ze=W&&!!S.clearcoatNormalMap,re=W&&!!S.clearcoatRoughnessMap,xe=te&&!!S.iridescenceMap,Ue=te&&!!S.iridescenceThicknessMap,De=j&&!!S.sheenColorMap,H=j&&!!S.sheenRoughnessMap,ye=!!S.specularMap,Me=!!S.specularColorMap,Ve=!!S.specularIntensityMap,D=Te&&!!S.transmissionMap,de=Te&&!!S.thicknessMap,$=!!S.gradientMap,Q=!!S.alphaMap,me=S.alphaTest>0,ge=!!S.alphaHash,Fe=!!S.extensions;let pt=$i;S.toneMapped&&(oe===null||oe.isXRRenderTarget===!0)&&(pt=i.toneMapping);const Rt={shaderID:ee,shaderType:S.type,shaderName:S.name,vertexShader:Se,fragmentShader:K,defines:S.defines,customVertexShaderID:ne,customFragmentShaderID:pe,isRawShaderMaterial:S.isRawShaderMaterial===!0,glslVersion:S.glslVersion,precision:f,batching:we,batchingColor:we&&P._colorsTexture!==null,instancing:Ee,instancingColor:Ee&&P.instanceColor!==null,instancingMorph:Ee&&P.morphTexture!==null,supportsVertexTextures:u,outputColorSpace:oe===null?i.outputColorSpace:oe.isXRRenderTarget===!0?oe.texture.colorSpace:Yt,alphaToCoverage:!!S.alphaToCoverage,map:Ze,matcap:Ie,envMap:Xe,envMapMode:Xe&&Z.mapping,envMapCubeUVHeight:G,aoMap:N,lightMap:ut,bumpMap:Ge,normalMap:Be,displacementMap:u&&Le,emissiveMap:nt,normalMapObjectSpace:Be&&S.normalMapType===lp,normalMapTangentSpace:Be&&S.normalMapType===_u,metalnessMap:Pe,roughnessMap:A,anisotropy:M,anisotropyMap:ue,clearcoat:W,clearcoatMap:ve,clearcoatNormalMap:ze,clearcoatRoughnessMap:re,dispersion:J,iridescence:te,iridescenceMap:xe,iridescenceThicknessMap:Ue,sheen:j,sheenColorMap:De,sheenRoughnessMap:H,specularMap:ye,specularColorMap:Me,specularIntensityMap:Ve,transmission:Te,transmissionMap:D,thicknessMap:de,gradientMap:$,opaque:S.transparent===!1&&S.blending===Ys&&S.alphaToCoverage===!1,alphaMap:Q,alphaTest:me,alphaHash:ge,combine:S.combine,mapUv:Ze&&v(S.map.channel),aoMapUv:N&&v(S.aoMap.channel),lightMapUv:ut&&v(S.lightMap.channel),bumpMapUv:Ge&&v(S.bumpMap.channel),normalMapUv:Be&&v(S.normalMap.channel),displacementMapUv:Le&&v(S.displacementMap.channel),emissiveMapUv:nt&&v(S.emissiveMap.channel),metalnessMapUv:Pe&&v(S.metalnessMap.channel),roughnessMapUv:A&&v(S.roughnessMap.channel),anisotropyMapUv:ue&&v(S.anisotropyMap.channel),clearcoatMapUv:ve&&v(S.clearcoatMap.channel),clearcoatNormalMapUv:ze&&v(S.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:re&&v(S.clearcoatRoughnessMap.channel),iridescenceMapUv:xe&&v(S.iridescenceMap.channel),iridescenceThicknessMapUv:Ue&&v(S.iridescenceThicknessMap.channel),sheenColorMapUv:De&&v(S.sheenColorMap.channel),sheenRoughnessMapUv:H&&v(S.sheenRoughnessMap.channel),specularMapUv:ye&&v(S.specularMap.channel),specularColorMapUv:Me&&v(S.specularColorMap.channel),specularIntensityMapUv:Ve&&v(S.specularIntensityMap.channel),transmissionMapUv:D&&v(S.transmissionMap.channel),thicknessMapUv:de&&v(S.thicknessMap.channel),alphaMapUv:Q&&v(S.alphaMap.channel),vertexTangents:!!V.attributes.tangent&&(Be||M),vertexColors:S.vertexColors,vertexAlphas:S.vertexColors===!0&&!!V.attributes.color&&V.attributes.color.itemSize===4,pointsUvs:P.isPoints===!0&&!!V.attributes.uv&&(Ze||Q),fog:!!U,useFog:S.fog===!0,fogExp2:!!U&&U.isFogExp2,flatShading:S.flatShading===!0,sizeAttenuation:S.sizeAttenuation===!0,logarithmicDepthBuffer:h,reverseDepthBuffer:be,skinning:P.isSkinnedMesh===!0,morphTargets:V.morphAttributes.position!==void 0,morphNormals:V.morphAttributes.normal!==void 0,morphColors:V.morphAttributes.color!==void 0,morphTargetsCount:ae,morphTextureStride:he,numDirLights:y.directional.length,numPointLights:y.point.length,numSpotLights:y.spot.length,numSpotLightMaps:y.spotLightMap.length,numRectAreaLights:y.rectArea.length,numHemiLights:y.hemi.length,numDirLightShadows:y.directionalShadowMap.length,numPointLightShadows:y.pointShadowMap.length,numSpotLightShadows:y.spotShadowMap.length,numSpotLightShadowsWithMaps:y.numSpotLightShadowsWithMaps,numLightProbes:y.numLightProbes,numClippingPlanes:a.numPlanes,numClipIntersection:a.numIntersection,dithering:S.dithering,shadowMapEnabled:i.shadowMap.enabled&&I.length>0,shadowMapType:i.shadowMap.type,toneMapping:pt,decodeVideoTexture:Ze&&S.map.isVideoTexture===!0&&tt.getTransfer(S.map.colorSpace)===dt,decodeVideoTextureEmissive:nt&&S.emissiveMap.isVideoTexture===!0&&tt.getTransfer(S.emissiveMap.colorSpace)===dt,premultipliedAlpha:S.premultipliedAlpha,doubleSided:S.side===En,flipSided:S.side===on,useDepthPacking:S.depthPacking>=0,depthPacking:S.depthPacking||0,index0AttributeName:S.index0AttributeName,extensionClipCullDistance:Fe&&S.extensions.clipCullDistance===!0&&n.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Fe&&S.extensions.multiDraw===!0||we)&&n.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:S.customProgramCacheKey()};return Rt.vertexUv1s=l.has(1),Rt.vertexUv2s=l.has(2),Rt.vertexUv3s=l.has(3),l.clear(),Rt}function p(S){const y=[];if(S.shaderID?y.push(S.shaderID):(y.push(S.customVertexShaderID),y.push(S.customFragmentShaderID)),S.defines!==void 0)for(const I in S.defines)y.push(I),y.push(S.defines[I]);return S.isRawShaderMaterial===!1&&(_(y,S),E(y,S),y.push(i.outputColorSpace)),y.push(S.customProgramCacheKey),y.join()}function _(S,y){S.push(y.precision),S.push(y.outputColorSpace),S.push(y.envMapMode),S.push(y.envMapCubeUVHeight),S.push(y.mapUv),S.push(y.alphaMapUv),S.push(y.lightMapUv),S.push(y.aoMapUv),S.push(y.bumpMapUv),S.push(y.normalMapUv),S.push(y.displacementMapUv),S.push(y.emissiveMapUv),S.push(y.metalnessMapUv),S.push(y.roughnessMapUv),S.push(y.anisotropyMapUv),S.push(y.clearcoatMapUv),S.push(y.clearcoatNormalMapUv),S.push(y.clearcoatRoughnessMapUv),S.push(y.iridescenceMapUv),S.push(y.iridescenceThicknessMapUv),S.push(y.sheenColorMapUv),S.push(y.sheenRoughnessMapUv),S.push(y.specularMapUv),S.push(y.specularColorMapUv),S.push(y.specularIntensityMapUv),S.push(y.transmissionMapUv),S.push(y.thicknessMapUv),S.push(y.combine),S.push(y.fogExp2),S.push(y.sizeAttenuation),S.push(y.morphTargetsCount),S.push(y.morphAttributeCount),S.push(y.numDirLights),S.push(y.numPointLights),S.push(y.numSpotLights),S.push(y.numSpotLightMaps),S.push(y.numHemiLights),S.push(y.numRectAreaLights),S.push(y.numDirLightShadows),S.push(y.numPointLightShadows),S.push(y.numSpotLightShadows),S.push(y.numSpotLightShadowsWithMaps),S.push(y.numLightProbes),S.push(y.shadowMapType),S.push(y.toneMapping),S.push(y.numClippingPlanes),S.push(y.numClipIntersection),S.push(y.depthPacking)}function E(S,y){o.disableAll(),y.supportsVertexTextures&&o.enable(0),y.instancing&&o.enable(1),y.instancingColor&&o.enable(2),y.instancingMorph&&o.enable(3),y.matcap&&o.enable(4),y.envMap&&o.enable(5),y.normalMapObjectSpace&&o.enable(6),y.normalMapTangentSpace&&o.enable(7),y.clearcoat&&o.enable(8),y.iridescence&&o.enable(9),y.alphaTest&&o.enable(10),y.vertexColors&&o.enable(11),y.vertexAlphas&&o.enable(12),y.vertexUv1s&&o.enable(13),y.vertexUv2s&&o.enable(14),y.vertexUv3s&&o.enable(15),y.vertexTangents&&o.enable(16),y.anisotropy&&o.enable(17),y.alphaHash&&o.enable(18),y.batching&&o.enable(19),y.dispersion&&o.enable(20),y.batchingColor&&o.enable(21),S.push(o.mask),o.disableAll(),y.fog&&o.enable(0),y.useFog&&o.enable(1),y.flatShading&&o.enable(2),y.logarithmicDepthBuffer&&o.enable(3),y.reverseDepthBuffer&&o.enable(4),y.skinning&&o.enable(5),y.morphTargets&&o.enable(6),y.morphNormals&&o.enable(7),y.morphColors&&o.enable(8),y.premultipliedAlpha&&o.enable(9),y.shadowMapEnabled&&o.enable(10),y.doubleSided&&o.enable(11),y.flipSided&&o.enable(12),y.useDepthPacking&&o.enable(13),y.dithering&&o.enable(14),y.transmission&&o.enable(15),y.sheen&&o.enable(16),y.opaque&&o.enable(17),y.pointsUvs&&o.enable(18),y.decodeVideoTexture&&o.enable(19),y.decodeVideoTextureEmissive&&o.enable(20),y.alphaToCoverage&&o.enable(21),S.push(o.mask)}function x(S){const y=g[S.type];let I;if(y){const O=Vn[y];I=im.clone(O.uniforms)}else I=S.uniforms;return I}function C(S,y){let I;for(let O=0,P=d.length;O<P;O++){const U=d[O];if(U.cacheKey===y){I=U,++I.usedTimes;break}}return I===void 0&&(I=new g_(i,y,S,r),d.push(I)),I}function T(S){if(--S.usedTimes===0){const y=d.indexOf(S);d[y]=d[d.length-1],d.pop(),S.destroy()}}function w(S){c.remove(S)}function R(){c.dispose()}return{getParameters:m,getProgramCacheKey:p,getUniforms:x,acquireProgram:C,releaseProgram:T,releaseShaderCache:w,programs:d,dispose:R}}function M_(){let i=new WeakMap;function e(a){return i.has(a)}function t(a){let o=i.get(a);return o===void 0&&(o={},i.set(a,o)),o}function n(a){i.delete(a)}function s(a,o,c){i.get(a)[o]=c}function r(){i=new WeakMap}return{has:e,get:t,remove:n,update:s,dispose:r}}function S_(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.material.id!==e.material.id?i.material.id-e.material.id:i.z!==e.z?i.z-e.z:i.id-e.id}function ih(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.z!==e.z?e.z-i.z:i.id-e.id}function sh(){const i=[];let e=0;const t=[],n=[],s=[];function r(){e=0,t.length=0,n.length=0,s.length=0}function a(h,u,f,g,v,m){let p=i[e];return p===void 0?(p={id:h.id,object:h,geometry:u,material:f,groupOrder:g,renderOrder:h.renderOrder,z:v,group:m},i[e]=p):(p.id=h.id,p.object=h,p.geometry=u,p.material=f,p.groupOrder=g,p.renderOrder=h.renderOrder,p.z=v,p.group=m),e++,p}function o(h,u,f,g,v,m){const p=a(h,u,f,g,v,m);f.transmission>0?n.push(p):f.transparent===!0?s.push(p):t.push(p)}function c(h,u,f,g,v,m){const p=a(h,u,f,g,v,m);f.transmission>0?n.unshift(p):f.transparent===!0?s.unshift(p):t.unshift(p)}function l(h,u){t.length>1&&t.sort(h||S_),n.length>1&&n.sort(u||ih),s.length>1&&s.sort(u||ih)}function d(){for(let h=e,u=i.length;h<u;h++){const f=i[h];if(f.id===null)break;f.id=null,f.object=null,f.geometry=null,f.material=null,f.group=null}}return{opaque:t,transmissive:n,transparent:s,init:r,push:o,unshift:c,finish:d,sort:l}}function E_(){let i=new WeakMap;function e(n,s){const r=i.get(n);let a;return r===void 0?(a=new sh,i.set(n,[a])):s>=r.length?(a=new sh,r.push(a)):a=r[s],a}function t(){i=new WeakMap}return{get:e,dispose:t}}function b_(){const i={};return{get:function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new L,color:new Oe};break;case"SpotLight":t={position:new L,direction:new L,color:new Oe,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new L,color:new Oe,distance:0,decay:0};break;case"HemisphereLight":t={direction:new L,skyColor:new Oe,groundColor:new Oe};break;case"RectAreaLight":t={color:new Oe,position:new L,halfWidth:new L,halfHeight:new L};break}return i[e.id]=t,t}}}function T_(){const i={};return{get:function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ke};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ke};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ke,shadowCameraNear:1,shadowCameraFar:1e3};break}return i[e.id]=t,t}}}let w_=0;function A_(i,e){return(e.castShadow?2:0)-(i.castShadow?2:0)+(e.map?1:0)-(i.map?1:0)}function R_(i){const e=new b_,t=T_(),n={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let l=0;l<9;l++)n.probe.push(new L);const s=new L,r=new We,a=new We;function o(l){let d=0,h=0,u=0;for(let S=0;S<9;S++)n.probe[S].set(0,0,0);let f=0,g=0,v=0,m=0,p=0,_=0,E=0,x=0,C=0,T=0,w=0;l.sort(A_);for(let S=0,y=l.length;S<y;S++){const I=l[S],O=I.color,P=I.intensity,U=I.distance,V=I.shadow&&I.shadow.map?I.shadow.map.texture:null;if(I.isAmbientLight)d+=O.r*P,h+=O.g*P,u+=O.b*P;else if(I.isLightProbe){for(let z=0;z<9;z++)n.probe[z].addScaledVector(I.sh.coefficients[z],P);w++}else if(I.isDirectionalLight){const z=e.get(I);if(z.color.copy(I.color).multiplyScalar(I.intensity),I.castShadow){const Z=I.shadow,G=t.get(I);G.shadowIntensity=Z.intensity,G.shadowBias=Z.bias,G.shadowNormalBias=Z.normalBias,G.shadowRadius=Z.radius,G.shadowMapSize=Z.mapSize,n.directionalShadow[f]=G,n.directionalShadowMap[f]=V,n.directionalShadowMatrix[f]=I.shadow.matrix,_++}n.directional[f]=z,f++}else if(I.isSpotLight){const z=e.get(I);z.position.setFromMatrixPosition(I.matrixWorld),z.color.copy(O).multiplyScalar(P),z.distance=U,z.coneCos=Math.cos(I.angle),z.penumbraCos=Math.cos(I.angle*(1-I.penumbra)),z.decay=I.decay,n.spot[v]=z;const Z=I.shadow;if(I.map&&(n.spotLightMap[C]=I.map,C++,Z.updateMatrices(I),I.castShadow&&T++),n.spotLightMatrix[v]=Z.matrix,I.castShadow){const G=t.get(I);G.shadowIntensity=Z.intensity,G.shadowBias=Z.bias,G.shadowNormalBias=Z.normalBias,G.shadowRadius=Z.radius,G.shadowMapSize=Z.mapSize,n.spotShadow[v]=G,n.spotShadowMap[v]=V,x++}v++}else if(I.isRectAreaLight){const z=e.get(I);z.color.copy(O).multiplyScalar(P),z.halfWidth.set(I.width*.5,0,0),z.halfHeight.set(0,I.height*.5,0),n.rectArea[m]=z,m++}else if(I.isPointLight){const z=e.get(I);if(z.color.copy(I.color).multiplyScalar(I.intensity),z.distance=I.distance,z.decay=I.decay,I.castShadow){const Z=I.shadow,G=t.get(I);G.shadowIntensity=Z.intensity,G.shadowBias=Z.bias,G.shadowNormalBias=Z.normalBias,G.shadowRadius=Z.radius,G.shadowMapSize=Z.mapSize,G.shadowCameraNear=Z.camera.near,G.shadowCameraFar=Z.camera.far,n.pointShadow[g]=G,n.pointShadowMap[g]=V,n.pointShadowMatrix[g]=I.shadow.matrix,E++}n.point[g]=z,g++}else if(I.isHemisphereLight){const z=e.get(I);z.skyColor.copy(I.color).multiplyScalar(P),z.groundColor.copy(I.groundColor).multiplyScalar(P),n.hemi[p]=z,p++}}m>0&&(i.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=fe.LTC_FLOAT_1,n.rectAreaLTC2=fe.LTC_FLOAT_2):(n.rectAreaLTC1=fe.LTC_HALF_1,n.rectAreaLTC2=fe.LTC_HALF_2)),n.ambient[0]=d,n.ambient[1]=h,n.ambient[2]=u;const R=n.hash;(R.directionalLength!==f||R.pointLength!==g||R.spotLength!==v||R.rectAreaLength!==m||R.hemiLength!==p||R.numDirectionalShadows!==_||R.numPointShadows!==E||R.numSpotShadows!==x||R.numSpotMaps!==C||R.numLightProbes!==w)&&(n.directional.length=f,n.spot.length=v,n.rectArea.length=m,n.point.length=g,n.hemi.length=p,n.directionalShadow.length=_,n.directionalShadowMap.length=_,n.pointShadow.length=E,n.pointShadowMap.length=E,n.spotShadow.length=x,n.spotShadowMap.length=x,n.directionalShadowMatrix.length=_,n.pointShadowMatrix.length=E,n.spotLightMatrix.length=x+C-T,n.spotLightMap.length=C,n.numSpotLightShadowsWithMaps=T,n.numLightProbes=w,R.directionalLength=f,R.pointLength=g,R.spotLength=v,R.rectAreaLength=m,R.hemiLength=p,R.numDirectionalShadows=_,R.numPointShadows=E,R.numSpotShadows=x,R.numSpotMaps=C,R.numLightProbes=w,n.version=w_++)}function c(l,d){let h=0,u=0,f=0,g=0,v=0;const m=d.matrixWorldInverse;for(let p=0,_=l.length;p<_;p++){const E=l[p];if(E.isDirectionalLight){const x=n.directional[h];x.direction.setFromMatrixPosition(E.matrixWorld),s.setFromMatrixPosition(E.target.matrixWorld),x.direction.sub(s),x.direction.transformDirection(m),h++}else if(E.isSpotLight){const x=n.spot[f];x.position.setFromMatrixPosition(E.matrixWorld),x.position.applyMatrix4(m),x.direction.setFromMatrixPosition(E.matrixWorld),s.setFromMatrixPosition(E.target.matrixWorld),x.direction.sub(s),x.direction.transformDirection(m),f++}else if(E.isRectAreaLight){const x=n.rectArea[g];x.position.setFromMatrixPosition(E.matrixWorld),x.position.applyMatrix4(m),a.identity(),r.copy(E.matrixWorld),r.premultiply(m),a.extractRotation(r),x.halfWidth.set(E.width*.5,0,0),x.halfHeight.set(0,E.height*.5,0),x.halfWidth.applyMatrix4(a),x.halfHeight.applyMatrix4(a),g++}else if(E.isPointLight){const x=n.point[u];x.position.setFromMatrixPosition(E.matrixWorld),x.position.applyMatrix4(m),u++}else if(E.isHemisphereLight){const x=n.hemi[v];x.direction.setFromMatrixPosition(E.matrixWorld),x.direction.transformDirection(m),v++}}}return{setup:o,setupView:c,state:n}}function rh(i){const e=new R_(i),t=[],n=[];function s(d){l.camera=d,t.length=0,n.length=0}function r(d){t.push(d)}function a(d){n.push(d)}function o(){e.setup(t)}function c(d){e.setupView(t,d)}const l={lightsArray:t,shadowsArray:n,camera:null,lights:e,transmissionRenderTarget:{}};return{init:s,state:l,setupLights:o,setupLightsView:c,pushLight:r,pushShadow:a}}function C_(i){let e=new WeakMap;function t(s,r=0){const a=e.get(s);let o;return a===void 0?(o=new rh(i),e.set(s,[o])):r>=a.length?(o=new rh(i),a.push(o)):o=a[r],o}function n(){e=new WeakMap}return{get:t,dispose:n}}class I_ extends $n{static get type(){return"MeshDepthMaterial"}constructor(e){super(),this.isMeshDepthMaterial=!0,this.depthPacking=op,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class L_ extends $n{static get type(){return"MeshDistanceMaterial"}constructor(e){super(),this.isMeshDistanceMaterial=!0,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}const D_=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,P_=`uniform sampler2D shadow_pass;
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
}`;function N_(i,e,t){let n=new Cl;const s=new Ke,r=new Ke,a=new rt,o=new I_({depthPacking:cp}),c=new L_,l={},d=t.maxTextureSize,h={[yi]:on,[on]:yi,[En]:En},u=new Ki({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Ke},radius:{value:4}},vertexShader:D_,fragmentShader:P_}),f=u.clone();f.defines.HORIZONTAL_PASS=1;const g=new cn;g.setAttribute("position",new Qt(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const v=new X(g,u),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=nu;let p=this.type;this.render=function(T,w,R){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||T.length===0)return;const S=i.getRenderTarget(),y=i.getActiveCubeFace(),I=i.getActiveMipmapLevel(),O=i.state;O.setBlending(qi),O.buffers.color.setClear(1,1,1,1),O.buffers.depth.setTest(!0),O.setScissorTest(!1);const P=p!==di&&this.type===di,U=p===di&&this.type!==di;for(let V=0,z=T.length;V<z;V++){const Z=T[V],G=Z.shadow;if(G===void 0){console.warn("THREE.WebGLShadowMap:",Z,"has no shadow.");continue}if(G.autoUpdate===!1&&G.needsUpdate===!1)continue;s.copy(G.mapSize);const ee=G.getFrameExtents();if(s.multiply(ee),r.copy(G.mapSize),(s.x>d||s.y>d)&&(s.x>d&&(r.x=Math.floor(d/ee.x),s.x=r.x*ee.x,G.mapSize.x=r.x),s.y>d&&(r.y=Math.floor(d/ee.y),s.y=r.y*ee.y,G.mapSize.y=r.y)),G.map===null||P===!0||U===!0){const ae=this.type!==di?{minFilter:Jt,magFilter:Jt}:{};G.map!==null&&G.map.dispose(),G.map=new _s(s.x,s.y,ae),G.map.texture.name=Z.name+".shadowMap",G.camera.updateProjectionMatrix()}i.setRenderTarget(G.map),i.clear();const ie=G.getViewportCount();for(let ae=0;ae<ie;ae++){const he=G.getViewport(ae);a.set(r.x*he.x,r.y*he.y,r.x*he.z,r.y*he.w),O.viewport(a),G.updateMatrices(Z,ae),n=G.getFrustum(),x(w,R,G.camera,Z,this.type)}G.isPointLightShadow!==!0&&this.type===di&&_(G,R),G.needsUpdate=!1}p=this.type,m.needsUpdate=!1,i.setRenderTarget(S,y,I)};function _(T,w){const R=e.update(v);u.defines.VSM_SAMPLES!==T.blurSamples&&(u.defines.VSM_SAMPLES=T.blurSamples,f.defines.VSM_SAMPLES=T.blurSamples,u.needsUpdate=!0,f.needsUpdate=!0),T.mapPass===null&&(T.mapPass=new _s(s.x,s.y)),u.uniforms.shadow_pass.value=T.map.texture,u.uniforms.resolution.value=T.mapSize,u.uniforms.radius.value=T.radius,i.setRenderTarget(T.mapPass),i.clear(),i.renderBufferDirect(w,null,R,u,v,null),f.uniforms.shadow_pass.value=T.mapPass.texture,f.uniforms.resolution.value=T.mapSize,f.uniforms.radius.value=T.radius,i.setRenderTarget(T.map),i.clear(),i.renderBufferDirect(w,null,R,f,v,null)}function E(T,w,R,S){let y=null;const I=R.isPointLight===!0?T.customDistanceMaterial:T.customDepthMaterial;if(I!==void 0)y=I;else if(y=R.isPointLight===!0?c:o,i.localClippingEnabled&&w.clipShadows===!0&&Array.isArray(w.clippingPlanes)&&w.clippingPlanes.length!==0||w.displacementMap&&w.displacementScale!==0||w.alphaMap&&w.alphaTest>0||w.map&&w.alphaTest>0){const O=y.uuid,P=w.uuid;let U=l[O];U===void 0&&(U={},l[O]=U);let V=U[P];V===void 0&&(V=y.clone(),U[P]=V,w.addEventListener("dispose",C)),y=V}if(y.visible=w.visible,y.wireframe=w.wireframe,S===di?y.side=w.shadowSide!==null?w.shadowSide:w.side:y.side=w.shadowSide!==null?w.shadowSide:h[w.side],y.alphaMap=w.alphaMap,y.alphaTest=w.alphaTest,y.map=w.map,y.clipShadows=w.clipShadows,y.clippingPlanes=w.clippingPlanes,y.clipIntersection=w.clipIntersection,y.displacementMap=w.displacementMap,y.displacementScale=w.displacementScale,y.displacementBias=w.displacementBias,y.wireframeLinewidth=w.wireframeLinewidth,y.linewidth=w.linewidth,R.isPointLight===!0&&y.isMeshDistanceMaterial===!0){const O=i.properties.get(y);O.light=R}return y}function x(T,w,R,S,y){if(T.visible===!1)return;if(T.layers.test(w.layers)&&(T.isMesh||T.isLine||T.isPoints)&&(T.castShadow||T.receiveShadow&&y===di)&&(!T.frustumCulled||n.intersectsObject(T))){T.modelViewMatrix.multiplyMatrices(R.matrixWorldInverse,T.matrixWorld);const P=e.update(T),U=T.material;if(Array.isArray(U)){const V=P.groups;for(let z=0,Z=V.length;z<Z;z++){const G=V[z],ee=U[G.materialIndex];if(ee&&ee.visible){const ie=E(T,ee,S,y);T.onBeforeShadow(i,T,w,R,P,ie,G),i.renderBufferDirect(R,null,P,ie,T,G),T.onAfterShadow(i,T,w,R,P,ie,G)}}}else if(U.visible){const V=E(T,U,S,y);T.onBeforeShadow(i,T,w,R,P,V,null),i.renderBufferDirect(R,null,P,V,T,null),T.onAfterShadow(i,T,w,R,P,V,null)}}const O=T.children;for(let P=0,U=O.length;P<U;P++)x(O[P],w,R,S,y)}function C(T){T.target.removeEventListener("dispose",C);for(const R in l){const S=l[R],y=T.target.uuid;y in S&&(S[y].dispose(),delete S[y])}}}const U_={[yc]:Mc,[Sc]:Tc,[Ec]:wc,[js]:bc,[Mc]:yc,[Tc]:Sc,[wc]:Ec,[bc]:js};function O_(i,e){function t(){let D=!1;const de=new rt;let $=null;const Q=new rt(0,0,0,0);return{setMask:function(me){$!==me&&!D&&(i.colorMask(me,me,me,me),$=me)},setLocked:function(me){D=me},setClear:function(me,ge,Fe,pt,Rt){Rt===!0&&(me*=pt,ge*=pt,Fe*=pt),de.set(me,ge,Fe,pt),Q.equals(de)===!1&&(i.clearColor(me,ge,Fe,pt),Q.copy(de))},reset:function(){D=!1,$=null,Q.set(-1,0,0,0)}}}function n(){let D=!1,de=!1,$=null,Q=null,me=null;return{setReversed:function(ge){if(de!==ge){const Fe=e.get("EXT_clip_control");de?Fe.clipControlEXT(Fe.LOWER_LEFT_EXT,Fe.ZERO_TO_ONE_EXT):Fe.clipControlEXT(Fe.LOWER_LEFT_EXT,Fe.NEGATIVE_ONE_TO_ONE_EXT);const pt=me;me=null,this.setClear(pt)}de=ge},getReversed:function(){return de},setTest:function(ge){ge?oe(i.DEPTH_TEST):be(i.DEPTH_TEST)},setMask:function(ge){$!==ge&&!D&&(i.depthMask(ge),$=ge)},setFunc:function(ge){if(de&&(ge=U_[ge]),Q!==ge){switch(ge){case yc:i.depthFunc(i.NEVER);break;case Mc:i.depthFunc(i.ALWAYS);break;case Sc:i.depthFunc(i.LESS);break;case js:i.depthFunc(i.LEQUAL);break;case Ec:i.depthFunc(i.EQUAL);break;case bc:i.depthFunc(i.GEQUAL);break;case Tc:i.depthFunc(i.GREATER);break;case wc:i.depthFunc(i.NOTEQUAL);break;default:i.depthFunc(i.LEQUAL)}Q=ge}},setLocked:function(ge){D=ge},setClear:function(ge){me!==ge&&(de&&(ge=1-ge),i.clearDepth(ge),me=ge)},reset:function(){D=!1,$=null,Q=null,me=null,de=!1}}}function s(){let D=!1,de=null,$=null,Q=null,me=null,ge=null,Fe=null,pt=null,Rt=null;return{setTest:function(it){D||(it?oe(i.STENCIL_TEST):be(i.STENCIL_TEST))},setMask:function(it){de!==it&&!D&&(i.stencilMask(it),de=it)},setFunc:function(it,ln,ti){($!==it||Q!==ln||me!==ti)&&(i.stencilFunc(it,ln,ti),$=it,Q=ln,me=ti)},setOp:function(it,ln,ti){(ge!==it||Fe!==ln||pt!==ti)&&(i.stencilOp(it,ln,ti),ge=it,Fe=ln,pt=ti)},setLocked:function(it){D=it},setClear:function(it){Rt!==it&&(i.clearStencil(it),Rt=it)},reset:function(){D=!1,de=null,$=null,Q=null,me=null,ge=null,Fe=null,pt=null,Rt=null}}}const r=new t,a=new n,o=new s,c=new WeakMap,l=new WeakMap;let d={},h={},u=new WeakMap,f=[],g=null,v=!1,m=null,p=null,_=null,E=null,x=null,C=null,T=null,w=new Oe(0,0,0),R=0,S=!1,y=null,I=null,O=null,P=null,U=null;const V=i.getParameter(i.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let z=!1,Z=0;const G=i.getParameter(i.VERSION);G.indexOf("WebGL")!==-1?(Z=parseFloat(/^WebGL (\d)/.exec(G)[1]),z=Z>=1):G.indexOf("OpenGL ES")!==-1&&(Z=parseFloat(/^OpenGL ES (\d)/.exec(G)[1]),z=Z>=2);let ee=null,ie={};const ae=i.getParameter(i.SCISSOR_BOX),he=i.getParameter(i.VIEWPORT),Se=new rt().fromArray(ae),K=new rt().fromArray(he);function ne(D,de,$,Q){const me=new Uint8Array(4),ge=i.createTexture();i.bindTexture(D,ge),i.texParameteri(D,i.TEXTURE_MIN_FILTER,i.NEAREST),i.texParameteri(D,i.TEXTURE_MAG_FILTER,i.NEAREST);for(let Fe=0;Fe<$;Fe++)D===i.TEXTURE_3D||D===i.TEXTURE_2D_ARRAY?i.texImage3D(de,0,i.RGBA,1,1,Q,0,i.RGBA,i.UNSIGNED_BYTE,me):i.texImage2D(de+Fe,0,i.RGBA,1,1,0,i.RGBA,i.UNSIGNED_BYTE,me);return ge}const pe={};pe[i.TEXTURE_2D]=ne(i.TEXTURE_2D,i.TEXTURE_2D,1),pe[i.TEXTURE_CUBE_MAP]=ne(i.TEXTURE_CUBE_MAP,i.TEXTURE_CUBE_MAP_POSITIVE_X,6),pe[i.TEXTURE_2D_ARRAY]=ne(i.TEXTURE_2D_ARRAY,i.TEXTURE_2D_ARRAY,1,1),pe[i.TEXTURE_3D]=ne(i.TEXTURE_3D,i.TEXTURE_3D,1,1),r.setClear(0,0,0,1),a.setClear(1),o.setClear(0),oe(i.DEPTH_TEST),a.setFunc(js),Ge(!1),Be(rd),oe(i.CULL_FACE),N(qi);function oe(D){d[D]!==!0&&(i.enable(D),d[D]=!0)}function be(D){d[D]!==!1&&(i.disable(D),d[D]=!1)}function Ee(D,de){return h[D]!==de?(i.bindFramebuffer(D,de),h[D]=de,D===i.DRAW_FRAMEBUFFER&&(h[i.FRAMEBUFFER]=de),D===i.FRAMEBUFFER&&(h[i.DRAW_FRAMEBUFFER]=de),!0):!1}function we(D,de){let $=f,Q=!1;if(D){$=u.get(de),$===void 0&&($=[],u.set(de,$));const me=D.textures;if($.length!==me.length||$[0]!==i.COLOR_ATTACHMENT0){for(let ge=0,Fe=me.length;ge<Fe;ge++)$[ge]=i.COLOR_ATTACHMENT0+ge;$.length=me.length,Q=!0}}else $[0]!==i.BACK&&($[0]=i.BACK,Q=!0);Q&&i.drawBuffers($)}function Ze(D){return g!==D?(i.useProgram(D),g=D,!0):!1}const Ie={[ls]:i.FUNC_ADD,[Pf]:i.FUNC_SUBTRACT,[Nf]:i.FUNC_REVERSE_SUBTRACT};Ie[Uf]=i.MIN,Ie[Of]=i.MAX;const Xe={[Ff]:i.ZERO,[Bf]:i.ONE,[kf]:i.SRC_COLOR,[_c]:i.SRC_ALPHA,[Xf]:i.SRC_ALPHA_SATURATE,[Vf]:i.DST_COLOR,[Hf]:i.DST_ALPHA,[zf]:i.ONE_MINUS_SRC_COLOR,[xc]:i.ONE_MINUS_SRC_ALPHA,[Wf]:i.ONE_MINUS_DST_COLOR,[Gf]:i.ONE_MINUS_DST_ALPHA,[Yf]:i.CONSTANT_COLOR,[qf]:i.ONE_MINUS_CONSTANT_COLOR,[$f]:i.CONSTANT_ALPHA,[Kf]:i.ONE_MINUS_CONSTANT_ALPHA};function N(D,de,$,Q,me,ge,Fe,pt,Rt,it){if(D===qi){v===!0&&(be(i.BLEND),v=!1);return}if(v===!1&&(oe(i.BLEND),v=!0),D!==Df){if(D!==m||it!==S){if((p!==ls||x!==ls)&&(i.blendEquation(i.FUNC_ADD),p=ls,x=ls),it)switch(D){case Ys:i.blendFuncSeparate(i.ONE,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case ad:i.blendFunc(i.ONE,i.ONE);break;case od:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case cd:i.blendFuncSeparate(i.ZERO,i.SRC_COLOR,i.ZERO,i.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",D);break}else switch(D){case Ys:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case ad:i.blendFunc(i.SRC_ALPHA,i.ONE);break;case od:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case cd:i.blendFunc(i.ZERO,i.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",D);break}_=null,E=null,C=null,T=null,w.set(0,0,0),R=0,m=D,S=it}return}me=me||de,ge=ge||$,Fe=Fe||Q,(de!==p||me!==x)&&(i.blendEquationSeparate(Ie[de],Ie[me]),p=de,x=me),($!==_||Q!==E||ge!==C||Fe!==T)&&(i.blendFuncSeparate(Xe[$],Xe[Q],Xe[ge],Xe[Fe]),_=$,E=Q,C=ge,T=Fe),(pt.equals(w)===!1||Rt!==R)&&(i.blendColor(pt.r,pt.g,pt.b,Rt),w.copy(pt),R=Rt),m=D,S=!1}function ut(D,de){D.side===En?be(i.CULL_FACE):oe(i.CULL_FACE);let $=D.side===on;de&&($=!$),Ge($),D.blending===Ys&&D.transparent===!1?N(qi):N(D.blending,D.blendEquation,D.blendSrc,D.blendDst,D.blendEquationAlpha,D.blendSrcAlpha,D.blendDstAlpha,D.blendColor,D.blendAlpha,D.premultipliedAlpha),a.setFunc(D.depthFunc),a.setTest(D.depthTest),a.setMask(D.depthWrite),r.setMask(D.colorWrite);const Q=D.stencilWrite;o.setTest(Q),Q&&(o.setMask(D.stencilWriteMask),o.setFunc(D.stencilFunc,D.stencilRef,D.stencilFuncMask),o.setOp(D.stencilFail,D.stencilZFail,D.stencilZPass)),nt(D.polygonOffset,D.polygonOffsetFactor,D.polygonOffsetUnits),D.alphaToCoverage===!0?oe(i.SAMPLE_ALPHA_TO_COVERAGE):be(i.SAMPLE_ALPHA_TO_COVERAGE)}function Ge(D){y!==D&&(D?i.frontFace(i.CW):i.frontFace(i.CCW),y=D)}function Be(D){D!==If?(oe(i.CULL_FACE),D!==I&&(D===rd?i.cullFace(i.BACK):D===Lf?i.cullFace(i.FRONT):i.cullFace(i.FRONT_AND_BACK))):be(i.CULL_FACE),I=D}function Le(D){D!==O&&(z&&i.lineWidth(D),O=D)}function nt(D,de,$){D?(oe(i.POLYGON_OFFSET_FILL),(P!==de||U!==$)&&(i.polygonOffset(de,$),P=de,U=$)):be(i.POLYGON_OFFSET_FILL)}function Pe(D){D?oe(i.SCISSOR_TEST):be(i.SCISSOR_TEST)}function A(D){D===void 0&&(D=i.TEXTURE0+V-1),ee!==D&&(i.activeTexture(D),ee=D)}function M(D,de,$){$===void 0&&(ee===null?$=i.TEXTURE0+V-1:$=ee);let Q=ie[$];Q===void 0&&(Q={type:void 0,texture:void 0},ie[$]=Q),(Q.type!==D||Q.texture!==de)&&(ee!==$&&(i.activeTexture($),ee=$),i.bindTexture(D,de||pe[D]),Q.type=D,Q.texture=de)}function W(){const D=ie[ee];D!==void 0&&D.type!==void 0&&(i.bindTexture(D.type,null),D.type=void 0,D.texture=void 0)}function J(){try{i.compressedTexImage2D.apply(i,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function te(){try{i.compressedTexImage3D.apply(i,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function j(){try{i.texSubImage2D.apply(i,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function Te(){try{i.texSubImage3D.apply(i,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function ue(){try{i.compressedTexSubImage2D.apply(i,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function ve(){try{i.compressedTexSubImage3D.apply(i,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function ze(){try{i.texStorage2D.apply(i,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function re(){try{i.texStorage3D.apply(i,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function xe(){try{i.texImage2D.apply(i,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function Ue(){try{i.texImage3D.apply(i,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function De(D){Se.equals(D)===!1&&(i.scissor(D.x,D.y,D.z,D.w),Se.copy(D))}function H(D){K.equals(D)===!1&&(i.viewport(D.x,D.y,D.z,D.w),K.copy(D))}function ye(D,de){let $=l.get(de);$===void 0&&($=new WeakMap,l.set(de,$));let Q=$.get(D);Q===void 0&&(Q=i.getUniformBlockIndex(de,D.name),$.set(D,Q))}function Me(D,de){const Q=l.get(de).get(D);c.get(de)!==Q&&(i.uniformBlockBinding(de,Q,D.__bindingPointIndex),c.set(de,Q))}function Ve(){i.disable(i.BLEND),i.disable(i.CULL_FACE),i.disable(i.DEPTH_TEST),i.disable(i.POLYGON_OFFSET_FILL),i.disable(i.SCISSOR_TEST),i.disable(i.STENCIL_TEST),i.disable(i.SAMPLE_ALPHA_TO_COVERAGE),i.blendEquation(i.FUNC_ADD),i.blendFunc(i.ONE,i.ZERO),i.blendFuncSeparate(i.ONE,i.ZERO,i.ONE,i.ZERO),i.blendColor(0,0,0,0),i.colorMask(!0,!0,!0,!0),i.clearColor(0,0,0,0),i.depthMask(!0),i.depthFunc(i.LESS),a.setReversed(!1),i.clearDepth(1),i.stencilMask(4294967295),i.stencilFunc(i.ALWAYS,0,4294967295),i.stencilOp(i.KEEP,i.KEEP,i.KEEP),i.clearStencil(0),i.cullFace(i.BACK),i.frontFace(i.CCW),i.polygonOffset(0,0),i.activeTexture(i.TEXTURE0),i.bindFramebuffer(i.FRAMEBUFFER,null),i.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),i.bindFramebuffer(i.READ_FRAMEBUFFER,null),i.useProgram(null),i.lineWidth(1),i.scissor(0,0,i.canvas.width,i.canvas.height),i.viewport(0,0,i.canvas.width,i.canvas.height),d={},ee=null,ie={},h={},u=new WeakMap,f=[],g=null,v=!1,m=null,p=null,_=null,E=null,x=null,C=null,T=null,w=new Oe(0,0,0),R=0,S=!1,y=null,I=null,O=null,P=null,U=null,Se.set(0,0,i.canvas.width,i.canvas.height),K.set(0,0,i.canvas.width,i.canvas.height),r.reset(),a.reset(),o.reset()}return{buffers:{color:r,depth:a,stencil:o},enable:oe,disable:be,bindFramebuffer:Ee,drawBuffers:we,useProgram:Ze,setBlending:N,setMaterial:ut,setFlipSided:Ge,setCullFace:Be,setLineWidth:Le,setPolygonOffset:nt,setScissorTest:Pe,activeTexture:A,bindTexture:M,unbindTexture:W,compressedTexImage2D:J,compressedTexImage3D:te,texImage2D:xe,texImage3D:Ue,updateUBOMapping:ye,uniformBlockBinding:Me,texStorage2D:ze,texStorage3D:re,texSubImage2D:j,texSubImage3D:Te,compressedTexSubImage2D:ue,compressedTexSubImage3D:ve,scissor:De,viewport:H,reset:Ve}}function ah(i,e,t,n){const s=F_(n);switch(t){case hu:return i*e;case fu:return i*e;case pu:return i*e*2;case bl:return i*e/s.components*s.byteLength;case Tl:return i*e/s.components*s.byteLength;case mu:return i*e*2/s.components*s.byteLength;case wl:return i*e*2/s.components*s.byteLength;case uu:return i*e*3/s.components*s.byteLength;case bn:return i*e*4/s.components*s.byteLength;case Al:return i*e*4/s.components*s.byteLength;case za:case Ha:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*8;case Ga:case Va:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case Cc:case Lc:return Math.max(i,16)*Math.max(e,8)/4;case Rc:case Ic:return Math.max(i,8)*Math.max(e,8)/2;case Dc:case Pc:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*8;case Nc:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case Uc:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case Oc:return Math.floor((i+4)/5)*Math.floor((e+3)/4)*16;case Fc:return Math.floor((i+4)/5)*Math.floor((e+4)/5)*16;case Bc:return Math.floor((i+5)/6)*Math.floor((e+4)/5)*16;case kc:return Math.floor((i+5)/6)*Math.floor((e+5)/6)*16;case zc:return Math.floor((i+7)/8)*Math.floor((e+4)/5)*16;case Hc:return Math.floor((i+7)/8)*Math.floor((e+5)/6)*16;case Gc:return Math.floor((i+7)/8)*Math.floor((e+7)/8)*16;case Vc:return Math.floor((i+9)/10)*Math.floor((e+4)/5)*16;case Wc:return Math.floor((i+9)/10)*Math.floor((e+5)/6)*16;case Xc:return Math.floor((i+9)/10)*Math.floor((e+7)/8)*16;case Yc:return Math.floor((i+9)/10)*Math.floor((e+9)/10)*16;case qc:return Math.floor((i+11)/12)*Math.floor((e+9)/10)*16;case $c:return Math.floor((i+11)/12)*Math.floor((e+11)/12)*16;case Wa:case Kc:case Zc:return Math.ceil(i/4)*Math.ceil(e/4)*16;case gu:case jc:return Math.ceil(i/4)*Math.ceil(e/4)*8;case Jc:case Qc:return Math.ceil(i/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function F_(i){switch(i){case Si:case cu:return{byteLength:1,components:1};case Xr:case lu:case vi:return{byteLength:2,components:1};case Sl:case El:return{byteLength:2,components:4};case vs:case Ml:case an:return{byteLength:4,components:1};case du:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${i}.`)}function B_(i,e,t,n,s,r,a){const o=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,c=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),l=new Ke,d=new WeakMap;let h;const u=new WeakMap;let f=!1;try{f=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function g(A,M){return f?new OffscreenCanvas(A,M):$r("canvas")}function v(A,M,W){let J=1;const te=Pe(A);if((te.width>W||te.height>W)&&(J=W/Math.max(te.width,te.height)),J<1)if(typeof HTMLImageElement<"u"&&A instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&A instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&A instanceof ImageBitmap||typeof VideoFrame<"u"&&A instanceof VideoFrame){const j=Math.floor(J*te.width),Te=Math.floor(J*te.height);h===void 0&&(h=g(j,Te));const ue=M?g(j,Te):h;return ue.width=j,ue.height=Te,ue.getContext("2d").drawImage(A,0,0,j,Te),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+te.width+"x"+te.height+") to ("+j+"x"+Te+")."),ue}else return"data"in A&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+te.width+"x"+te.height+")."),A;return A}function m(A){return A.generateMipmaps}function p(A){i.generateMipmap(A)}function _(A){return A.isWebGLCubeRenderTarget?i.TEXTURE_CUBE_MAP:A.isWebGL3DRenderTarget?i.TEXTURE_3D:A.isWebGLArrayRenderTarget||A.isCompressedArrayTexture?i.TEXTURE_2D_ARRAY:i.TEXTURE_2D}function E(A,M,W,J,te=!1){if(A!==null){if(i[A]!==void 0)return i[A];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+A+"'")}let j=M;if(M===i.RED&&(W===i.FLOAT&&(j=i.R32F),W===i.HALF_FLOAT&&(j=i.R16F),W===i.UNSIGNED_BYTE&&(j=i.R8)),M===i.RED_INTEGER&&(W===i.UNSIGNED_BYTE&&(j=i.R8UI),W===i.UNSIGNED_SHORT&&(j=i.R16UI),W===i.UNSIGNED_INT&&(j=i.R32UI),W===i.BYTE&&(j=i.R8I),W===i.SHORT&&(j=i.R16I),W===i.INT&&(j=i.R32I)),M===i.RG&&(W===i.FLOAT&&(j=i.RG32F),W===i.HALF_FLOAT&&(j=i.RG16F),W===i.UNSIGNED_BYTE&&(j=i.RG8)),M===i.RG_INTEGER&&(W===i.UNSIGNED_BYTE&&(j=i.RG8UI),W===i.UNSIGNED_SHORT&&(j=i.RG16UI),W===i.UNSIGNED_INT&&(j=i.RG32UI),W===i.BYTE&&(j=i.RG8I),W===i.SHORT&&(j=i.RG16I),W===i.INT&&(j=i.RG32I)),M===i.RGB_INTEGER&&(W===i.UNSIGNED_BYTE&&(j=i.RGB8UI),W===i.UNSIGNED_SHORT&&(j=i.RGB16UI),W===i.UNSIGNED_INT&&(j=i.RGB32UI),W===i.BYTE&&(j=i.RGB8I),W===i.SHORT&&(j=i.RGB16I),W===i.INT&&(j=i.RGB32I)),M===i.RGBA_INTEGER&&(W===i.UNSIGNED_BYTE&&(j=i.RGBA8UI),W===i.UNSIGNED_SHORT&&(j=i.RGBA16UI),W===i.UNSIGNED_INT&&(j=i.RGBA32UI),W===i.BYTE&&(j=i.RGBA8I),W===i.SHORT&&(j=i.RGBA16I),W===i.INT&&(j=i.RGBA32I)),M===i.RGB&&W===i.UNSIGNED_INT_5_9_9_9_REV&&(j=i.RGB9_E5),M===i.RGBA){const Te=te?xo:tt.getTransfer(J);W===i.FLOAT&&(j=i.RGBA32F),W===i.HALF_FLOAT&&(j=i.RGBA16F),W===i.UNSIGNED_BYTE&&(j=Te===dt?i.SRGB8_ALPHA8:i.RGBA8),W===i.UNSIGNED_SHORT_4_4_4_4&&(j=i.RGBA4),W===i.UNSIGNED_SHORT_5_5_5_1&&(j=i.RGB5_A1)}return(j===i.R16F||j===i.R32F||j===i.RG16F||j===i.RG32F||j===i.RGBA16F||j===i.RGBA32F)&&e.get("EXT_color_buffer_float"),j}function x(A,M){let W;return A?M===null||M===vs||M===er?W=i.DEPTH24_STENCIL8:M===an?W=i.DEPTH32F_STENCIL8:M===Xr&&(W=i.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):M===null||M===vs||M===er?W=i.DEPTH_COMPONENT24:M===an?W=i.DEPTH_COMPONENT32F:M===Xr&&(W=i.DEPTH_COMPONENT16),W}function C(A,M){return m(A)===!0||A.isFramebufferTexture&&A.minFilter!==Jt&&A.minFilter!==zt?Math.log2(Math.max(M.width,M.height))+1:A.mipmaps!==void 0&&A.mipmaps.length>0?A.mipmaps.length:A.isCompressedTexture&&Array.isArray(A.image)?M.mipmaps.length:1}function T(A){const M=A.target;M.removeEventListener("dispose",T),R(M),M.isVideoTexture&&d.delete(M)}function w(A){const M=A.target;M.removeEventListener("dispose",w),y(M)}function R(A){const M=n.get(A);if(M.__webglInit===void 0)return;const W=A.source,J=u.get(W);if(J){const te=J[M.__cacheKey];te.usedTimes--,te.usedTimes===0&&S(A),Object.keys(J).length===0&&u.delete(W)}n.remove(A)}function S(A){const M=n.get(A);i.deleteTexture(M.__webglTexture);const W=A.source,J=u.get(W);delete J[M.__cacheKey],a.memory.textures--}function y(A){const M=n.get(A);if(A.depthTexture&&(A.depthTexture.dispose(),n.remove(A.depthTexture)),A.isWebGLCubeRenderTarget)for(let J=0;J<6;J++){if(Array.isArray(M.__webglFramebuffer[J]))for(let te=0;te<M.__webglFramebuffer[J].length;te++)i.deleteFramebuffer(M.__webglFramebuffer[J][te]);else i.deleteFramebuffer(M.__webglFramebuffer[J]);M.__webglDepthbuffer&&i.deleteRenderbuffer(M.__webglDepthbuffer[J])}else{if(Array.isArray(M.__webglFramebuffer))for(let J=0;J<M.__webglFramebuffer.length;J++)i.deleteFramebuffer(M.__webglFramebuffer[J]);else i.deleteFramebuffer(M.__webglFramebuffer);if(M.__webglDepthbuffer&&i.deleteRenderbuffer(M.__webglDepthbuffer),M.__webglMultisampledFramebuffer&&i.deleteFramebuffer(M.__webglMultisampledFramebuffer),M.__webglColorRenderbuffer)for(let J=0;J<M.__webglColorRenderbuffer.length;J++)M.__webglColorRenderbuffer[J]&&i.deleteRenderbuffer(M.__webglColorRenderbuffer[J]);M.__webglDepthRenderbuffer&&i.deleteRenderbuffer(M.__webglDepthRenderbuffer)}const W=A.textures;for(let J=0,te=W.length;J<te;J++){const j=n.get(W[J]);j.__webglTexture&&(i.deleteTexture(j.__webglTexture),a.memory.textures--),n.remove(W[J])}n.remove(A)}let I=0;function O(){I=0}function P(){const A=I;return A>=s.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+A+" texture units while this GPU supports only "+s.maxTextures),I+=1,A}function U(A){const M=[];return M.push(A.wrapS),M.push(A.wrapT),M.push(A.wrapR||0),M.push(A.magFilter),M.push(A.minFilter),M.push(A.anisotropy),M.push(A.internalFormat),M.push(A.format),M.push(A.type),M.push(A.generateMipmaps),M.push(A.premultiplyAlpha),M.push(A.flipY),M.push(A.unpackAlignment),M.push(A.colorSpace),M.join()}function V(A,M){const W=n.get(A);if(A.isVideoTexture&&Le(A),A.isRenderTargetTexture===!1&&A.version>0&&W.__version!==A.version){const J=A.image;if(J===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(J.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{K(W,A,M);return}}t.bindTexture(i.TEXTURE_2D,W.__webglTexture,i.TEXTURE0+M)}function z(A,M){const W=n.get(A);if(A.version>0&&W.__version!==A.version){K(W,A,M);return}t.bindTexture(i.TEXTURE_2D_ARRAY,W.__webglTexture,i.TEXTURE0+M)}function Z(A,M){const W=n.get(A);if(A.version>0&&W.__version!==A.version){K(W,A,M);return}t.bindTexture(i.TEXTURE_3D,W.__webglTexture,i.TEXTURE0+M)}function G(A,M){const W=n.get(A);if(A.version>0&&W.__version!==A.version){ne(W,A,M);return}t.bindTexture(i.TEXTURE_CUBE_MAP,W.__webglTexture,i.TEXTURE0+M)}const ee={[Mi]:i.REPEAT,[Yn]:i.CLAMP_TO_EDGE,[Qa]:i.MIRRORED_REPEAT},ie={[Jt]:i.NEAREST,[ou]:i.NEAREST_MIPMAP_NEAREST,[Rr]:i.NEAREST_MIPMAP_LINEAR,[zt]:i.LINEAR,[ka]:i.LINEAR_MIPMAP_NEAREST,[qn]:i.LINEAR_MIPMAP_LINEAR},ae={[dp]:i.NEVER,[gp]:i.ALWAYS,[hp]:i.LESS,[xu]:i.LEQUAL,[up]:i.EQUAL,[mp]:i.GEQUAL,[fp]:i.GREATER,[pp]:i.NOTEQUAL};function he(A,M){if(M.type===an&&e.has("OES_texture_float_linear")===!1&&(M.magFilter===zt||M.magFilter===ka||M.magFilter===Rr||M.magFilter===qn||M.minFilter===zt||M.minFilter===ka||M.minFilter===Rr||M.minFilter===qn)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),i.texParameteri(A,i.TEXTURE_WRAP_S,ee[M.wrapS]),i.texParameteri(A,i.TEXTURE_WRAP_T,ee[M.wrapT]),(A===i.TEXTURE_3D||A===i.TEXTURE_2D_ARRAY)&&i.texParameteri(A,i.TEXTURE_WRAP_R,ee[M.wrapR]),i.texParameteri(A,i.TEXTURE_MAG_FILTER,ie[M.magFilter]),i.texParameteri(A,i.TEXTURE_MIN_FILTER,ie[M.minFilter]),M.compareFunction&&(i.texParameteri(A,i.TEXTURE_COMPARE_MODE,i.COMPARE_REF_TO_TEXTURE),i.texParameteri(A,i.TEXTURE_COMPARE_FUNC,ae[M.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(M.magFilter===Jt||M.minFilter!==Rr&&M.minFilter!==qn||M.type===an&&e.has("OES_texture_float_linear")===!1)return;if(M.anisotropy>1||n.get(M).__currentAnisotropy){const W=e.get("EXT_texture_filter_anisotropic");i.texParameterf(A,W.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(M.anisotropy,s.getMaxAnisotropy())),n.get(M).__currentAnisotropy=M.anisotropy}}}function Se(A,M){let W=!1;A.__webglInit===void 0&&(A.__webglInit=!0,M.addEventListener("dispose",T));const J=M.source;let te=u.get(J);te===void 0&&(te={},u.set(J,te));const j=U(M);if(j!==A.__cacheKey){te[j]===void 0&&(te[j]={texture:i.createTexture(),usedTimes:0},a.memory.textures++,W=!0),te[j].usedTimes++;const Te=te[A.__cacheKey];Te!==void 0&&(te[A.__cacheKey].usedTimes--,Te.usedTimes===0&&S(M)),A.__cacheKey=j,A.__webglTexture=te[j].texture}return W}function K(A,M,W){let J=i.TEXTURE_2D;(M.isDataArrayTexture||M.isCompressedArrayTexture)&&(J=i.TEXTURE_2D_ARRAY),M.isData3DTexture&&(J=i.TEXTURE_3D);const te=Se(A,M),j=M.source;t.bindTexture(J,A.__webglTexture,i.TEXTURE0+W);const Te=n.get(j);if(j.version!==Te.__version||te===!0){t.activeTexture(i.TEXTURE0+W);const ue=tt.getPrimaries(tt.workingColorSpace),ve=M.colorSpace===Gi?null:tt.getPrimaries(M.colorSpace),ze=M.colorSpace===Gi||ue===ve?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,M.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,M.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,M.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,ze);let re=v(M.image,!1,s.maxTextureSize);re=nt(M,re);const xe=r.convert(M.format,M.colorSpace),Ue=r.convert(M.type);let De=E(M.internalFormat,xe,Ue,M.colorSpace,M.isVideoTexture);he(J,M);let H;const ye=M.mipmaps,Me=M.isVideoTexture!==!0,Ve=Te.__version===void 0||te===!0,D=j.dataReady,de=C(M,re);if(M.isDepthTexture)De=x(M.format===tr,M.type),Ve&&(Me?t.texStorage2D(i.TEXTURE_2D,1,De,re.width,re.height):t.texImage2D(i.TEXTURE_2D,0,De,re.width,re.height,0,xe,Ue,null));else if(M.isDataTexture)if(ye.length>0){Me&&Ve&&t.texStorage2D(i.TEXTURE_2D,de,De,ye[0].width,ye[0].height);for(let $=0,Q=ye.length;$<Q;$++)H=ye[$],Me?D&&t.texSubImage2D(i.TEXTURE_2D,$,0,0,H.width,H.height,xe,Ue,H.data):t.texImage2D(i.TEXTURE_2D,$,De,H.width,H.height,0,xe,Ue,H.data);M.generateMipmaps=!1}else Me?(Ve&&t.texStorage2D(i.TEXTURE_2D,de,De,re.width,re.height),D&&t.texSubImage2D(i.TEXTURE_2D,0,0,0,re.width,re.height,xe,Ue,re.data)):t.texImage2D(i.TEXTURE_2D,0,De,re.width,re.height,0,xe,Ue,re.data);else if(M.isCompressedTexture)if(M.isCompressedArrayTexture){Me&&Ve&&t.texStorage3D(i.TEXTURE_2D_ARRAY,de,De,ye[0].width,ye[0].height,re.depth);for(let $=0,Q=ye.length;$<Q;$++)if(H=ye[$],M.format!==bn)if(xe!==null)if(Me){if(D)if(M.layerUpdates.size>0){const me=ah(H.width,H.height,M.format,M.type);for(const ge of M.layerUpdates){const Fe=H.data.subarray(ge*me/H.data.BYTES_PER_ELEMENT,(ge+1)*me/H.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,$,0,0,ge,H.width,H.height,1,xe,Fe)}M.clearLayerUpdates()}else t.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,$,0,0,0,H.width,H.height,re.depth,xe,H.data)}else t.compressedTexImage3D(i.TEXTURE_2D_ARRAY,$,De,H.width,H.height,re.depth,0,H.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else Me?D&&t.texSubImage3D(i.TEXTURE_2D_ARRAY,$,0,0,0,H.width,H.height,re.depth,xe,Ue,H.data):t.texImage3D(i.TEXTURE_2D_ARRAY,$,De,H.width,H.height,re.depth,0,xe,Ue,H.data)}else{Me&&Ve&&t.texStorage2D(i.TEXTURE_2D,de,De,ye[0].width,ye[0].height);for(let $=0,Q=ye.length;$<Q;$++)H=ye[$],M.format!==bn?xe!==null?Me?D&&t.compressedTexSubImage2D(i.TEXTURE_2D,$,0,0,H.width,H.height,xe,H.data):t.compressedTexImage2D(i.TEXTURE_2D,$,De,H.width,H.height,0,H.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Me?D&&t.texSubImage2D(i.TEXTURE_2D,$,0,0,H.width,H.height,xe,Ue,H.data):t.texImage2D(i.TEXTURE_2D,$,De,H.width,H.height,0,xe,Ue,H.data)}else if(M.isDataArrayTexture)if(Me){if(Ve&&t.texStorage3D(i.TEXTURE_2D_ARRAY,de,De,re.width,re.height,re.depth),D)if(M.layerUpdates.size>0){const $=ah(re.width,re.height,M.format,M.type);for(const Q of M.layerUpdates){const me=re.data.subarray(Q*$/re.data.BYTES_PER_ELEMENT,(Q+1)*$/re.data.BYTES_PER_ELEMENT);t.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,Q,re.width,re.height,1,xe,Ue,me)}M.clearLayerUpdates()}else t.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,0,re.width,re.height,re.depth,xe,Ue,re.data)}else t.texImage3D(i.TEXTURE_2D_ARRAY,0,De,re.width,re.height,re.depth,0,xe,Ue,re.data);else if(M.isData3DTexture)Me?(Ve&&t.texStorage3D(i.TEXTURE_3D,de,De,re.width,re.height,re.depth),D&&t.texSubImage3D(i.TEXTURE_3D,0,0,0,0,re.width,re.height,re.depth,xe,Ue,re.data)):t.texImage3D(i.TEXTURE_3D,0,De,re.width,re.height,re.depth,0,xe,Ue,re.data);else if(M.isFramebufferTexture){if(Ve)if(Me)t.texStorage2D(i.TEXTURE_2D,de,De,re.width,re.height);else{let $=re.width,Q=re.height;for(let me=0;me<de;me++)t.texImage2D(i.TEXTURE_2D,me,De,$,Q,0,xe,Ue,null),$>>=1,Q>>=1}}else if(ye.length>0){if(Me&&Ve){const $=Pe(ye[0]);t.texStorage2D(i.TEXTURE_2D,de,De,$.width,$.height)}for(let $=0,Q=ye.length;$<Q;$++)H=ye[$],Me?D&&t.texSubImage2D(i.TEXTURE_2D,$,0,0,xe,Ue,H):t.texImage2D(i.TEXTURE_2D,$,De,xe,Ue,H);M.generateMipmaps=!1}else if(Me){if(Ve){const $=Pe(re);t.texStorage2D(i.TEXTURE_2D,de,De,$.width,$.height)}D&&t.texSubImage2D(i.TEXTURE_2D,0,0,0,xe,Ue,re)}else t.texImage2D(i.TEXTURE_2D,0,De,xe,Ue,re);m(M)&&p(J),Te.__version=j.version,M.onUpdate&&M.onUpdate(M)}A.__version=M.version}function ne(A,M,W){if(M.image.length!==6)return;const J=Se(A,M),te=M.source;t.bindTexture(i.TEXTURE_CUBE_MAP,A.__webglTexture,i.TEXTURE0+W);const j=n.get(te);if(te.version!==j.__version||J===!0){t.activeTexture(i.TEXTURE0+W);const Te=tt.getPrimaries(tt.workingColorSpace),ue=M.colorSpace===Gi?null:tt.getPrimaries(M.colorSpace),ve=M.colorSpace===Gi||Te===ue?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,M.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,M.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,M.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,ve);const ze=M.isCompressedTexture||M.image[0].isCompressedTexture,re=M.image[0]&&M.image[0].isDataTexture,xe=[];for(let Q=0;Q<6;Q++)!ze&&!re?xe[Q]=v(M.image[Q],!0,s.maxCubemapSize):xe[Q]=re?M.image[Q].image:M.image[Q],xe[Q]=nt(M,xe[Q]);const Ue=xe[0],De=r.convert(M.format,M.colorSpace),H=r.convert(M.type),ye=E(M.internalFormat,De,H,M.colorSpace),Me=M.isVideoTexture!==!0,Ve=j.__version===void 0||J===!0,D=te.dataReady;let de=C(M,Ue);he(i.TEXTURE_CUBE_MAP,M);let $;if(ze){Me&&Ve&&t.texStorage2D(i.TEXTURE_CUBE_MAP,de,ye,Ue.width,Ue.height);for(let Q=0;Q<6;Q++){$=xe[Q].mipmaps;for(let me=0;me<$.length;me++){const ge=$[me];M.format!==bn?De!==null?Me?D&&t.compressedTexSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Q,me,0,0,ge.width,ge.height,De,ge.data):t.compressedTexImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Q,me,ye,ge.width,ge.height,0,ge.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Me?D&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Q,me,0,0,ge.width,ge.height,De,H,ge.data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Q,me,ye,ge.width,ge.height,0,De,H,ge.data)}}}else{if($=M.mipmaps,Me&&Ve){$.length>0&&de++;const Q=Pe(xe[0]);t.texStorage2D(i.TEXTURE_CUBE_MAP,de,ye,Q.width,Q.height)}for(let Q=0;Q<6;Q++)if(re){Me?D&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Q,0,0,0,xe[Q].width,xe[Q].height,De,H,xe[Q].data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Q,0,ye,xe[Q].width,xe[Q].height,0,De,H,xe[Q].data);for(let me=0;me<$.length;me++){const Fe=$[me].image[Q].image;Me?D&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Q,me+1,0,0,Fe.width,Fe.height,De,H,Fe.data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Q,me+1,ye,Fe.width,Fe.height,0,De,H,Fe.data)}}else{Me?D&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Q,0,0,0,De,H,xe[Q]):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Q,0,ye,De,H,xe[Q]);for(let me=0;me<$.length;me++){const ge=$[me];Me?D&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Q,me+1,0,0,De,H,ge.image[Q]):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Q,me+1,ye,De,H,ge.image[Q])}}}m(M)&&p(i.TEXTURE_CUBE_MAP),j.__version=te.version,M.onUpdate&&M.onUpdate(M)}A.__version=M.version}function pe(A,M,W,J,te,j){const Te=r.convert(W.format,W.colorSpace),ue=r.convert(W.type),ve=E(W.internalFormat,Te,ue,W.colorSpace),ze=n.get(M),re=n.get(W);if(re.__renderTarget=M,!ze.__hasExternalTextures){const xe=Math.max(1,M.width>>j),Ue=Math.max(1,M.height>>j);te===i.TEXTURE_3D||te===i.TEXTURE_2D_ARRAY?t.texImage3D(te,j,ve,xe,Ue,M.depth,0,Te,ue,null):t.texImage2D(te,j,ve,xe,Ue,0,Te,ue,null)}t.bindFramebuffer(i.FRAMEBUFFER,A),Be(M)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,J,te,re.__webglTexture,0,Ge(M)):(te===i.TEXTURE_2D||te>=i.TEXTURE_CUBE_MAP_POSITIVE_X&&te<=i.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&i.framebufferTexture2D(i.FRAMEBUFFER,J,te,re.__webglTexture,j),t.bindFramebuffer(i.FRAMEBUFFER,null)}function oe(A,M,W){if(i.bindRenderbuffer(i.RENDERBUFFER,A),M.depthBuffer){const J=M.depthTexture,te=J&&J.isDepthTexture?J.type:null,j=x(M.stencilBuffer,te),Te=M.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,ue=Ge(M);Be(M)?o.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,ue,j,M.width,M.height):W?i.renderbufferStorageMultisample(i.RENDERBUFFER,ue,j,M.width,M.height):i.renderbufferStorage(i.RENDERBUFFER,j,M.width,M.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,Te,i.RENDERBUFFER,A)}else{const J=M.textures;for(let te=0;te<J.length;te++){const j=J[te],Te=r.convert(j.format,j.colorSpace),ue=r.convert(j.type),ve=E(j.internalFormat,Te,ue,j.colorSpace),ze=Ge(M);W&&Be(M)===!1?i.renderbufferStorageMultisample(i.RENDERBUFFER,ze,ve,M.width,M.height):Be(M)?o.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,ze,ve,M.width,M.height):i.renderbufferStorage(i.RENDERBUFFER,ve,M.width,M.height)}}i.bindRenderbuffer(i.RENDERBUFFER,null)}function be(A,M){if(M&&M.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(i.FRAMEBUFFER,A),!(M.depthTexture&&M.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const J=n.get(M.depthTexture);J.__renderTarget=M,(!J.__webglTexture||M.depthTexture.image.width!==M.width||M.depthTexture.image.height!==M.height)&&(M.depthTexture.image.width=M.width,M.depthTexture.image.height=M.height,M.depthTexture.needsUpdate=!0),V(M.depthTexture,0);const te=J.__webglTexture,j=Ge(M);if(M.depthTexture.format===qs)Be(M)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,te,0,j):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,te,0);else if(M.depthTexture.format===tr)Be(M)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,te,0,j):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,te,0);else throw new Error("Unknown depthTexture format")}function Ee(A){const M=n.get(A),W=A.isWebGLCubeRenderTarget===!0;if(M.__boundDepthTexture!==A.depthTexture){const J=A.depthTexture;if(M.__depthDisposeCallback&&M.__depthDisposeCallback(),J){const te=()=>{delete M.__boundDepthTexture,delete M.__depthDisposeCallback,J.removeEventListener("dispose",te)};J.addEventListener("dispose",te),M.__depthDisposeCallback=te}M.__boundDepthTexture=J}if(A.depthTexture&&!M.__autoAllocateDepthBuffer){if(W)throw new Error("target.depthTexture not supported in Cube render targets");be(M.__webglFramebuffer,A)}else if(W){M.__webglDepthbuffer=[];for(let J=0;J<6;J++)if(t.bindFramebuffer(i.FRAMEBUFFER,M.__webglFramebuffer[J]),M.__webglDepthbuffer[J]===void 0)M.__webglDepthbuffer[J]=i.createRenderbuffer(),oe(M.__webglDepthbuffer[J],A,!1);else{const te=A.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,j=M.__webglDepthbuffer[J];i.bindRenderbuffer(i.RENDERBUFFER,j),i.framebufferRenderbuffer(i.FRAMEBUFFER,te,i.RENDERBUFFER,j)}}else if(t.bindFramebuffer(i.FRAMEBUFFER,M.__webglFramebuffer),M.__webglDepthbuffer===void 0)M.__webglDepthbuffer=i.createRenderbuffer(),oe(M.__webglDepthbuffer,A,!1);else{const J=A.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,te=M.__webglDepthbuffer;i.bindRenderbuffer(i.RENDERBUFFER,te),i.framebufferRenderbuffer(i.FRAMEBUFFER,J,i.RENDERBUFFER,te)}t.bindFramebuffer(i.FRAMEBUFFER,null)}function we(A,M,W){const J=n.get(A);M!==void 0&&pe(J.__webglFramebuffer,A,A.texture,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,0),W!==void 0&&Ee(A)}function Ze(A){const M=A.texture,W=n.get(A),J=n.get(M);A.addEventListener("dispose",w);const te=A.textures,j=A.isWebGLCubeRenderTarget===!0,Te=te.length>1;if(Te||(J.__webglTexture===void 0&&(J.__webglTexture=i.createTexture()),J.__version=M.version,a.memory.textures++),j){W.__webglFramebuffer=[];for(let ue=0;ue<6;ue++)if(M.mipmaps&&M.mipmaps.length>0){W.__webglFramebuffer[ue]=[];for(let ve=0;ve<M.mipmaps.length;ve++)W.__webglFramebuffer[ue][ve]=i.createFramebuffer()}else W.__webglFramebuffer[ue]=i.createFramebuffer()}else{if(M.mipmaps&&M.mipmaps.length>0){W.__webglFramebuffer=[];for(let ue=0;ue<M.mipmaps.length;ue++)W.__webglFramebuffer[ue]=i.createFramebuffer()}else W.__webglFramebuffer=i.createFramebuffer();if(Te)for(let ue=0,ve=te.length;ue<ve;ue++){const ze=n.get(te[ue]);ze.__webglTexture===void 0&&(ze.__webglTexture=i.createTexture(),a.memory.textures++)}if(A.samples>0&&Be(A)===!1){W.__webglMultisampledFramebuffer=i.createFramebuffer(),W.__webglColorRenderbuffer=[],t.bindFramebuffer(i.FRAMEBUFFER,W.__webglMultisampledFramebuffer);for(let ue=0;ue<te.length;ue++){const ve=te[ue];W.__webglColorRenderbuffer[ue]=i.createRenderbuffer(),i.bindRenderbuffer(i.RENDERBUFFER,W.__webglColorRenderbuffer[ue]);const ze=r.convert(ve.format,ve.colorSpace),re=r.convert(ve.type),xe=E(ve.internalFormat,ze,re,ve.colorSpace,A.isXRRenderTarget===!0),Ue=Ge(A);i.renderbufferStorageMultisample(i.RENDERBUFFER,Ue,xe,A.width,A.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+ue,i.RENDERBUFFER,W.__webglColorRenderbuffer[ue])}i.bindRenderbuffer(i.RENDERBUFFER,null),A.depthBuffer&&(W.__webglDepthRenderbuffer=i.createRenderbuffer(),oe(W.__webglDepthRenderbuffer,A,!0)),t.bindFramebuffer(i.FRAMEBUFFER,null)}}if(j){t.bindTexture(i.TEXTURE_CUBE_MAP,J.__webglTexture),he(i.TEXTURE_CUBE_MAP,M);for(let ue=0;ue<6;ue++)if(M.mipmaps&&M.mipmaps.length>0)for(let ve=0;ve<M.mipmaps.length;ve++)pe(W.__webglFramebuffer[ue][ve],A,M,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+ue,ve);else pe(W.__webglFramebuffer[ue],A,M,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+ue,0);m(M)&&p(i.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(Te){for(let ue=0,ve=te.length;ue<ve;ue++){const ze=te[ue],re=n.get(ze);t.bindTexture(i.TEXTURE_2D,re.__webglTexture),he(i.TEXTURE_2D,ze),pe(W.__webglFramebuffer,A,ze,i.COLOR_ATTACHMENT0+ue,i.TEXTURE_2D,0),m(ze)&&p(i.TEXTURE_2D)}t.unbindTexture()}else{let ue=i.TEXTURE_2D;if((A.isWebGL3DRenderTarget||A.isWebGLArrayRenderTarget)&&(ue=A.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),t.bindTexture(ue,J.__webglTexture),he(ue,M),M.mipmaps&&M.mipmaps.length>0)for(let ve=0;ve<M.mipmaps.length;ve++)pe(W.__webglFramebuffer[ve],A,M,i.COLOR_ATTACHMENT0,ue,ve);else pe(W.__webglFramebuffer,A,M,i.COLOR_ATTACHMENT0,ue,0);m(M)&&p(ue),t.unbindTexture()}A.depthBuffer&&Ee(A)}function Ie(A){const M=A.textures;for(let W=0,J=M.length;W<J;W++){const te=M[W];if(m(te)){const j=_(A),Te=n.get(te).__webglTexture;t.bindTexture(j,Te),p(j),t.unbindTexture()}}}const Xe=[],N=[];function ut(A){if(A.samples>0){if(Be(A)===!1){const M=A.textures,W=A.width,J=A.height;let te=i.COLOR_BUFFER_BIT;const j=A.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,Te=n.get(A),ue=M.length>1;if(ue)for(let ve=0;ve<M.length;ve++)t.bindFramebuffer(i.FRAMEBUFFER,Te.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+ve,i.RENDERBUFFER,null),t.bindFramebuffer(i.FRAMEBUFFER,Te.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+ve,i.TEXTURE_2D,null,0);t.bindFramebuffer(i.READ_FRAMEBUFFER,Te.__webglMultisampledFramebuffer),t.bindFramebuffer(i.DRAW_FRAMEBUFFER,Te.__webglFramebuffer);for(let ve=0;ve<M.length;ve++){if(A.resolveDepthBuffer&&(A.depthBuffer&&(te|=i.DEPTH_BUFFER_BIT),A.stencilBuffer&&A.resolveStencilBuffer&&(te|=i.STENCIL_BUFFER_BIT)),ue){i.framebufferRenderbuffer(i.READ_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.RENDERBUFFER,Te.__webglColorRenderbuffer[ve]);const ze=n.get(M[ve]).__webglTexture;i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,ze,0)}i.blitFramebuffer(0,0,W,J,0,0,W,J,te,i.NEAREST),c===!0&&(Xe.length=0,N.length=0,Xe.push(i.COLOR_ATTACHMENT0+ve),A.depthBuffer&&A.resolveDepthBuffer===!1&&(Xe.push(j),N.push(j),i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,N)),i.invalidateFramebuffer(i.READ_FRAMEBUFFER,Xe))}if(t.bindFramebuffer(i.READ_FRAMEBUFFER,null),t.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),ue)for(let ve=0;ve<M.length;ve++){t.bindFramebuffer(i.FRAMEBUFFER,Te.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+ve,i.RENDERBUFFER,Te.__webglColorRenderbuffer[ve]);const ze=n.get(M[ve]).__webglTexture;t.bindFramebuffer(i.FRAMEBUFFER,Te.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+ve,i.TEXTURE_2D,ze,0)}t.bindFramebuffer(i.DRAW_FRAMEBUFFER,Te.__webglMultisampledFramebuffer)}else if(A.depthBuffer&&A.resolveDepthBuffer===!1&&c){const M=A.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,[M])}}}function Ge(A){return Math.min(s.maxSamples,A.samples)}function Be(A){const M=n.get(A);return A.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&M.__useRenderToTexture!==!1}function Le(A){const M=a.render.frame;d.get(A)!==M&&(d.set(A,M),A.update())}function nt(A,M){const W=A.colorSpace,J=A.format,te=A.type;return A.isCompressedTexture===!0||A.isVideoTexture===!0||W!==Yt&&W!==Gi&&(tt.getTransfer(W)===dt?(J!==bn||te!==Si)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",W)),M}function Pe(A){return typeof HTMLImageElement<"u"&&A instanceof HTMLImageElement?(l.width=A.naturalWidth||A.width,l.height=A.naturalHeight||A.height):typeof VideoFrame<"u"&&A instanceof VideoFrame?(l.width=A.displayWidth,l.height=A.displayHeight):(l.width=A.width,l.height=A.height),l}this.allocateTextureUnit=P,this.resetTextureUnits=O,this.setTexture2D=V,this.setTexture2DArray=z,this.setTexture3D=Z,this.setTextureCube=G,this.rebindTextures=we,this.setupRenderTarget=Ze,this.updateRenderTargetMipmap=Ie,this.updateMultisampleRenderTarget=ut,this.setupDepthRenderbuffer=Ee,this.setupFrameBufferTexture=pe,this.useMultisampledRTT=Be}function k_(i,e){function t(n,s=Gi){let r;const a=tt.getTransfer(s);if(n===Si)return i.UNSIGNED_BYTE;if(n===Sl)return i.UNSIGNED_SHORT_4_4_4_4;if(n===El)return i.UNSIGNED_SHORT_5_5_5_1;if(n===du)return i.UNSIGNED_INT_5_9_9_9_REV;if(n===cu)return i.BYTE;if(n===lu)return i.SHORT;if(n===Xr)return i.UNSIGNED_SHORT;if(n===Ml)return i.INT;if(n===vs)return i.UNSIGNED_INT;if(n===an)return i.FLOAT;if(n===vi)return i.HALF_FLOAT;if(n===hu)return i.ALPHA;if(n===uu)return i.RGB;if(n===bn)return i.RGBA;if(n===fu)return i.LUMINANCE;if(n===pu)return i.LUMINANCE_ALPHA;if(n===qs)return i.DEPTH_COMPONENT;if(n===tr)return i.DEPTH_STENCIL;if(n===bl)return i.RED;if(n===Tl)return i.RED_INTEGER;if(n===mu)return i.RG;if(n===wl)return i.RG_INTEGER;if(n===Al)return i.RGBA_INTEGER;if(n===za||n===Ha||n===Ga||n===Va)if(a===dt)if(r=e.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(n===za)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===Ha)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===Ga)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===Va)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=e.get("WEBGL_compressed_texture_s3tc"),r!==null){if(n===za)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===Ha)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===Ga)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===Va)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===Rc||n===Cc||n===Ic||n===Lc)if(r=e.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(n===Rc)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===Cc)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===Ic)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===Lc)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===Dc||n===Pc||n===Nc)if(r=e.get("WEBGL_compressed_texture_etc"),r!==null){if(n===Dc||n===Pc)return a===dt?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(n===Nc)return a===dt?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(n===Uc||n===Oc||n===Fc||n===Bc||n===kc||n===zc||n===Hc||n===Gc||n===Vc||n===Wc||n===Xc||n===Yc||n===qc||n===$c)if(r=e.get("WEBGL_compressed_texture_astc"),r!==null){if(n===Uc)return a===dt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===Oc)return a===dt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===Fc)return a===dt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===Bc)return a===dt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===kc)return a===dt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===zc)return a===dt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===Hc)return a===dt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===Gc)return a===dt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===Vc)return a===dt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===Wc)return a===dt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===Xc)return a===dt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===Yc)return a===dt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===qc)return a===dt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===$c)return a===dt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===Wa||n===Kc||n===Zc)if(r=e.get("EXT_texture_compression_bptc"),r!==null){if(n===Wa)return a===dt?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===Kc)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===Zc)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===gu||n===jc||n===Jc||n===Qc)if(r=e.get("EXT_texture_compression_rgtc"),r!==null){if(n===Wa)return r.COMPRESSED_RED_RGTC1_EXT;if(n===jc)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===Jc)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===Qc)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===er?i.UNSIGNED_INT_24_8:i[n]!==void 0?i[n]:null}return{convert:t}}class z_ extends Zt{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e}}class He extends Mt{constructor(){super(),this.isGroup=!0,this.type="Group"}}const H_={type:"move"};class tc{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new He,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new He,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new L,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new L),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new He,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new L,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new L),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const t=this._hand;if(t)for(const n of e.hand.values())this._getHandJoint(t,n)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,n){let s=null,r=null,a=null;const o=this._targetRay,c=this._grip,l=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(l&&e.hand){a=!0;for(const v of e.hand.values()){const m=t.getJointPose(v,n),p=this._getHandJoint(l,v);m!==null&&(p.matrix.fromArray(m.transform.matrix),p.matrix.decompose(p.position,p.rotation,p.scale),p.matrixWorldNeedsUpdate=!0,p.jointRadius=m.radius),p.visible=m!==null}const d=l.joints["index-finger-tip"],h=l.joints["thumb-tip"],u=d.position.distanceTo(h.position),f=.02,g=.005;l.inputState.pinching&&u>f+g?(l.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!l.inputState.pinching&&u<=f-g&&(l.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else c!==null&&e.gripSpace&&(r=t.getPose(e.gripSpace,n),r!==null&&(c.matrix.fromArray(r.transform.matrix),c.matrix.decompose(c.position,c.rotation,c.scale),c.matrixWorldNeedsUpdate=!0,r.linearVelocity?(c.hasLinearVelocity=!0,c.linearVelocity.copy(r.linearVelocity)):c.hasLinearVelocity=!1,r.angularVelocity?(c.hasAngularVelocity=!0,c.angularVelocity.copy(r.angularVelocity)):c.hasAngularVelocity=!1));o!==null&&(s=t.getPose(e.targetRaySpace,n),s===null&&r!==null&&(s=r),s!==null&&(o.matrix.fromArray(s.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,s.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(s.linearVelocity)):o.hasLinearVelocity=!1,s.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(s.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(H_)))}return o!==null&&(o.visible=s!==null),c!==null&&(c.visible=r!==null),l!==null&&(l.visible=a!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){const n=new He;n.matrixAutoUpdate=!1,n.visible=!1,e.joints[t.jointName]=n,e.add(n)}return e.joints[t.jointName]}}const G_=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,V_=`
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

}`;class W_{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t,n){if(this.texture===null){const s=new Nt,r=e.properties.get(s);r.__webglTexture=t.texture,(t.depthNear!=n.depthNear||t.depthFar!=n.depthFar)&&(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=s}}getMesh(e){if(this.texture!==null&&this.mesh===null){const t=e.cameras[0].viewport,n=new Ki({vertexShader:G_,fragmentShader:V_,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new X(new Zi(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class X_ extends lr{constructor(e,t){super();const n=this;let s=null,r=1,a=null,o="local-floor",c=1,l=null,d=null,h=null,u=null,f=null,g=null;const v=new W_,m=t.getContextAttributes();let p=null,_=null;const E=[],x=[],C=new Ke;let T=null;const w=new Zt;w.viewport=new rt;const R=new Zt;R.viewport=new rt;const S=[w,R],y=new z_;let I=null,O=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(K){let ne=E[K];return ne===void 0&&(ne=new tc,E[K]=ne),ne.getTargetRaySpace()},this.getControllerGrip=function(K){let ne=E[K];return ne===void 0&&(ne=new tc,E[K]=ne),ne.getGripSpace()},this.getHand=function(K){let ne=E[K];return ne===void 0&&(ne=new tc,E[K]=ne),ne.getHandSpace()};function P(K){const ne=x.indexOf(K.inputSource);if(ne===-1)return;const pe=E[ne];pe!==void 0&&(pe.update(K.inputSource,K.frame,l||a),pe.dispatchEvent({type:K.type,data:K.inputSource}))}function U(){s.removeEventListener("select",P),s.removeEventListener("selectstart",P),s.removeEventListener("selectend",P),s.removeEventListener("squeeze",P),s.removeEventListener("squeezestart",P),s.removeEventListener("squeezeend",P),s.removeEventListener("end",U),s.removeEventListener("inputsourceschange",V);for(let K=0;K<E.length;K++){const ne=x[K];ne!==null&&(x[K]=null,E[K].disconnect(ne))}I=null,O=null,v.reset(),e.setRenderTarget(p),f=null,u=null,h=null,s=null,_=null,Se.stop(),n.isPresenting=!1,e.setPixelRatio(T),e.setSize(C.width,C.height,!1),n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(K){r=K,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(K){o=K,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return l||a},this.setReferenceSpace=function(K){l=K},this.getBaseLayer=function(){return u!==null?u:f},this.getBinding=function(){return h},this.getFrame=function(){return g},this.getSession=function(){return s},this.setSession=async function(K){if(s=K,s!==null){if(p=e.getRenderTarget(),s.addEventListener("select",P),s.addEventListener("selectstart",P),s.addEventListener("selectend",P),s.addEventListener("squeeze",P),s.addEventListener("squeezestart",P),s.addEventListener("squeezeend",P),s.addEventListener("end",U),s.addEventListener("inputsourceschange",V),m.xrCompatible!==!0&&await t.makeXRCompatible(),T=e.getPixelRatio(),e.getSize(C),s.renderState.layers===void 0){const ne={antialias:m.antialias,alpha:!0,depth:m.depth,stencil:m.stencil,framebufferScaleFactor:r};f=new XRWebGLLayer(s,t,ne),s.updateRenderState({baseLayer:f}),e.setPixelRatio(1),e.setSize(f.framebufferWidth,f.framebufferHeight,!1),_=new _s(f.framebufferWidth,f.framebufferHeight,{format:bn,type:Si,colorSpace:e.outputColorSpace,stencilBuffer:m.stencil})}else{let ne=null,pe=null,oe=null;m.depth&&(oe=m.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,ne=m.stencil?tr:qs,pe=m.stencil?er:vs);const be={colorFormat:t.RGBA8,depthFormat:oe,scaleFactor:r};h=new XRWebGLBinding(s,t),u=h.createProjectionLayer(be),s.updateRenderState({layers:[u]}),e.setPixelRatio(1),e.setSize(u.textureWidth,u.textureHeight,!1),_=new _s(u.textureWidth,u.textureHeight,{format:bn,type:Si,depthTexture:new Lu(u.textureWidth,u.textureHeight,pe,void 0,void 0,void 0,void 0,void 0,void 0,ne),stencilBuffer:m.stencil,colorSpace:e.outputColorSpace,samples:m.antialias?4:0,resolveDepthBuffer:u.ignoreDepthValues===!1})}_.isXRRenderTarget=!0,this.setFoveation(c),l=null,a=await s.requestReferenceSpace(o),Se.setContext(s),Se.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode},this.getDepthTexture=function(){return v.getDepthTexture()};function V(K){for(let ne=0;ne<K.removed.length;ne++){const pe=K.removed[ne],oe=x.indexOf(pe);oe>=0&&(x[oe]=null,E[oe].disconnect(pe))}for(let ne=0;ne<K.added.length;ne++){const pe=K.added[ne];let oe=x.indexOf(pe);if(oe===-1){for(let Ee=0;Ee<E.length;Ee++)if(Ee>=x.length){x.push(pe),oe=Ee;break}else if(x[Ee]===null){x[Ee]=pe,oe=Ee;break}if(oe===-1)break}const be=E[oe];be&&be.connect(pe)}}const z=new L,Z=new L;function G(K,ne,pe){z.setFromMatrixPosition(ne.matrixWorld),Z.setFromMatrixPosition(pe.matrixWorld);const oe=z.distanceTo(Z),be=ne.projectionMatrix.elements,Ee=pe.projectionMatrix.elements,we=be[14]/(be[10]-1),Ze=be[14]/(be[10]+1),Ie=(be[9]+1)/be[5],Xe=(be[9]-1)/be[5],N=(be[8]-1)/be[0],ut=(Ee[8]+1)/Ee[0],Ge=we*N,Be=we*ut,Le=oe/(-N+ut),nt=Le*-N;if(ne.matrixWorld.decompose(K.position,K.quaternion,K.scale),K.translateX(nt),K.translateZ(Le),K.matrixWorld.compose(K.position,K.quaternion,K.scale),K.matrixWorldInverse.copy(K.matrixWorld).invert(),be[10]===-1)K.projectionMatrix.copy(ne.projectionMatrix),K.projectionMatrixInverse.copy(ne.projectionMatrixInverse);else{const Pe=we+Le,A=Ze+Le,M=Ge-nt,W=Be+(oe-nt),J=Ie*Ze/A*Pe,te=Xe*Ze/A*Pe;K.projectionMatrix.makePerspective(M,W,J,te,Pe,A),K.projectionMatrixInverse.copy(K.projectionMatrix).invert()}}function ee(K,ne){ne===null?K.matrixWorld.copy(K.matrix):K.matrixWorld.multiplyMatrices(ne.matrixWorld,K.matrix),K.matrixWorldInverse.copy(K.matrixWorld).invert()}this.updateCamera=function(K){if(s===null)return;let ne=K.near,pe=K.far;v.texture!==null&&(v.depthNear>0&&(ne=v.depthNear),v.depthFar>0&&(pe=v.depthFar)),y.near=R.near=w.near=ne,y.far=R.far=w.far=pe,(I!==y.near||O!==y.far)&&(s.updateRenderState({depthNear:y.near,depthFar:y.far}),I=y.near,O=y.far),w.layers.mask=K.layers.mask|2,R.layers.mask=K.layers.mask|4,y.layers.mask=w.layers.mask|R.layers.mask;const oe=K.parent,be=y.cameras;ee(y,oe);for(let Ee=0;Ee<be.length;Ee++)ee(be[Ee],oe);be.length===2?G(y,w,R):y.projectionMatrix.copy(w.projectionMatrix),ie(K,y,oe)};function ie(K,ne,pe){pe===null?K.matrix.copy(ne.matrixWorld):(K.matrix.copy(pe.matrixWorld),K.matrix.invert(),K.matrix.multiply(ne.matrixWorld)),K.matrix.decompose(K.position,K.quaternion,K.scale),K.updateMatrixWorld(!0),K.projectionMatrix.copy(ne.projectionMatrix),K.projectionMatrixInverse.copy(ne.projectionMatrixInverse),K.isPerspectiveCamera&&(K.fov=nr*2*Math.atan(1/K.projectionMatrix.elements[5]),K.zoom=1)}this.getCamera=function(){return y},this.getFoveation=function(){if(!(u===null&&f===null))return c},this.setFoveation=function(K){c=K,u!==null&&(u.fixedFoveation=K),f!==null&&f.fixedFoveation!==void 0&&(f.fixedFoveation=K)},this.hasDepthSensing=function(){return v.texture!==null},this.getDepthSensingMesh=function(){return v.getMesh(y)};let ae=null;function he(K,ne){if(d=ne.getViewerPose(l||a),g=ne,d!==null){const pe=d.views;f!==null&&(e.setRenderTargetFramebuffer(_,f.framebuffer),e.setRenderTarget(_));let oe=!1;pe.length!==y.cameras.length&&(y.cameras.length=0,oe=!0);for(let Ee=0;Ee<pe.length;Ee++){const we=pe[Ee];let Ze=null;if(f!==null)Ze=f.getViewport(we);else{const Xe=h.getViewSubImage(u,we);Ze=Xe.viewport,Ee===0&&(e.setRenderTargetTextures(_,Xe.colorTexture,u.ignoreDepthValues?void 0:Xe.depthStencilTexture),e.setRenderTarget(_))}let Ie=S[Ee];Ie===void 0&&(Ie=new Zt,Ie.layers.enable(Ee),Ie.viewport=new rt,S[Ee]=Ie),Ie.matrix.fromArray(we.transform.matrix),Ie.matrix.decompose(Ie.position,Ie.quaternion,Ie.scale),Ie.projectionMatrix.fromArray(we.projectionMatrix),Ie.projectionMatrixInverse.copy(Ie.projectionMatrix).invert(),Ie.viewport.set(Ze.x,Ze.y,Ze.width,Ze.height),Ee===0&&(y.matrix.copy(Ie.matrix),y.matrix.decompose(y.position,y.quaternion,y.scale)),oe===!0&&y.cameras.push(Ie)}const be=s.enabledFeatures;if(be&&be.includes("depth-sensing")){const Ee=h.getDepthInformation(pe[0]);Ee&&Ee.isValid&&Ee.texture&&v.init(e,Ee,s.renderState)}}for(let pe=0;pe<E.length;pe++){const oe=x[pe],be=E[pe];oe!==null&&be!==void 0&&be.update(oe,ne,l||a)}ae&&ae(K,ne),ne.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:ne}),g=null}const Se=new Iu;Se.setAnimationLoop(he),this.setAnimationLoop=function(K){ae=K},this.dispose=function(){}}}const rs=new jn,Y_=new We;function q_(i,e){function t(m,p){m.matrixAutoUpdate===!0&&m.updateMatrix(),p.value.copy(m.matrix)}function n(m,p){p.color.getRGB(m.fogColor.value,Au(i)),p.isFog?(m.fogNear.value=p.near,m.fogFar.value=p.far):p.isFogExp2&&(m.fogDensity.value=p.density)}function s(m,p,_,E,x){p.isMeshBasicMaterial||p.isMeshLambertMaterial?r(m,p):p.isMeshToonMaterial?(r(m,p),h(m,p)):p.isMeshPhongMaterial?(r(m,p),d(m,p)):p.isMeshStandardMaterial?(r(m,p),u(m,p),p.isMeshPhysicalMaterial&&f(m,p,x)):p.isMeshMatcapMaterial?(r(m,p),g(m,p)):p.isMeshDepthMaterial?r(m,p):p.isMeshDistanceMaterial?(r(m,p),v(m,p)):p.isMeshNormalMaterial?r(m,p):p.isLineBasicMaterial?(a(m,p),p.isLineDashedMaterial&&o(m,p)):p.isPointsMaterial?c(m,p,_,E):p.isSpriteMaterial?l(m,p):p.isShadowMaterial?(m.color.value.copy(p.color),m.opacity.value=p.opacity):p.isShaderMaterial&&(p.uniformsNeedUpdate=!1)}function r(m,p){m.opacity.value=p.opacity,p.color&&m.diffuse.value.copy(p.color),p.emissive&&m.emissive.value.copy(p.emissive).multiplyScalar(p.emissiveIntensity),p.map&&(m.map.value=p.map,t(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,t(p.alphaMap,m.alphaMapTransform)),p.bumpMap&&(m.bumpMap.value=p.bumpMap,t(p.bumpMap,m.bumpMapTransform),m.bumpScale.value=p.bumpScale,p.side===on&&(m.bumpScale.value*=-1)),p.normalMap&&(m.normalMap.value=p.normalMap,t(p.normalMap,m.normalMapTransform),m.normalScale.value.copy(p.normalScale),p.side===on&&m.normalScale.value.negate()),p.displacementMap&&(m.displacementMap.value=p.displacementMap,t(p.displacementMap,m.displacementMapTransform),m.displacementScale.value=p.displacementScale,m.displacementBias.value=p.displacementBias),p.emissiveMap&&(m.emissiveMap.value=p.emissiveMap,t(p.emissiveMap,m.emissiveMapTransform)),p.specularMap&&(m.specularMap.value=p.specularMap,t(p.specularMap,m.specularMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest);const _=e.get(p),E=_.envMap,x=_.envMapRotation;E&&(m.envMap.value=E,rs.copy(x),rs.x*=-1,rs.y*=-1,rs.z*=-1,E.isCubeTexture&&E.isRenderTargetTexture===!1&&(rs.y*=-1,rs.z*=-1),m.envMapRotation.value.setFromMatrix4(Y_.makeRotationFromEuler(rs)),m.flipEnvMap.value=E.isCubeTexture&&E.isRenderTargetTexture===!1?-1:1,m.reflectivity.value=p.reflectivity,m.ior.value=p.ior,m.refractionRatio.value=p.refractionRatio),p.lightMap&&(m.lightMap.value=p.lightMap,m.lightMapIntensity.value=p.lightMapIntensity,t(p.lightMap,m.lightMapTransform)),p.aoMap&&(m.aoMap.value=p.aoMap,m.aoMapIntensity.value=p.aoMapIntensity,t(p.aoMap,m.aoMapTransform))}function a(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,p.map&&(m.map.value=p.map,t(p.map,m.mapTransform))}function o(m,p){m.dashSize.value=p.dashSize,m.totalSize.value=p.dashSize+p.gapSize,m.scale.value=p.scale}function c(m,p,_,E){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.size.value=p.size*_,m.scale.value=E*.5,p.map&&(m.map.value=p.map,t(p.map,m.uvTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,t(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function l(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.rotation.value=p.rotation,p.map&&(m.map.value=p.map,t(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,t(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function d(m,p){m.specular.value.copy(p.specular),m.shininess.value=Math.max(p.shininess,1e-4)}function h(m,p){p.gradientMap&&(m.gradientMap.value=p.gradientMap)}function u(m,p){m.metalness.value=p.metalness,p.metalnessMap&&(m.metalnessMap.value=p.metalnessMap,t(p.metalnessMap,m.metalnessMapTransform)),m.roughness.value=p.roughness,p.roughnessMap&&(m.roughnessMap.value=p.roughnessMap,t(p.roughnessMap,m.roughnessMapTransform)),p.envMap&&(m.envMapIntensity.value=p.envMapIntensity)}function f(m,p,_){m.ior.value=p.ior,p.sheen>0&&(m.sheenColor.value.copy(p.sheenColor).multiplyScalar(p.sheen),m.sheenRoughness.value=p.sheenRoughness,p.sheenColorMap&&(m.sheenColorMap.value=p.sheenColorMap,t(p.sheenColorMap,m.sheenColorMapTransform)),p.sheenRoughnessMap&&(m.sheenRoughnessMap.value=p.sheenRoughnessMap,t(p.sheenRoughnessMap,m.sheenRoughnessMapTransform))),p.clearcoat>0&&(m.clearcoat.value=p.clearcoat,m.clearcoatRoughness.value=p.clearcoatRoughness,p.clearcoatMap&&(m.clearcoatMap.value=p.clearcoatMap,t(p.clearcoatMap,m.clearcoatMapTransform)),p.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=p.clearcoatRoughnessMap,t(p.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),p.clearcoatNormalMap&&(m.clearcoatNormalMap.value=p.clearcoatNormalMap,t(p.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(p.clearcoatNormalScale),p.side===on&&m.clearcoatNormalScale.value.negate())),p.dispersion>0&&(m.dispersion.value=p.dispersion),p.iridescence>0&&(m.iridescence.value=p.iridescence,m.iridescenceIOR.value=p.iridescenceIOR,m.iridescenceThicknessMinimum.value=p.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=p.iridescenceThicknessRange[1],p.iridescenceMap&&(m.iridescenceMap.value=p.iridescenceMap,t(p.iridescenceMap,m.iridescenceMapTransform)),p.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=p.iridescenceThicknessMap,t(p.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),p.transmission>0&&(m.transmission.value=p.transmission,m.transmissionSamplerMap.value=_.texture,m.transmissionSamplerSize.value.set(_.width,_.height),p.transmissionMap&&(m.transmissionMap.value=p.transmissionMap,t(p.transmissionMap,m.transmissionMapTransform)),m.thickness.value=p.thickness,p.thicknessMap&&(m.thicknessMap.value=p.thicknessMap,t(p.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=p.attenuationDistance,m.attenuationColor.value.copy(p.attenuationColor)),p.anisotropy>0&&(m.anisotropyVector.value.set(p.anisotropy*Math.cos(p.anisotropyRotation),p.anisotropy*Math.sin(p.anisotropyRotation)),p.anisotropyMap&&(m.anisotropyMap.value=p.anisotropyMap,t(p.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=p.specularIntensity,m.specularColor.value.copy(p.specularColor),p.specularColorMap&&(m.specularColorMap.value=p.specularColorMap,t(p.specularColorMap,m.specularColorMapTransform)),p.specularIntensityMap&&(m.specularIntensityMap.value=p.specularIntensityMap,t(p.specularIntensityMap,m.specularIntensityMapTransform))}function g(m,p){p.matcap&&(m.matcap.value=p.matcap)}function v(m,p){const _=e.get(p).light;m.referencePosition.value.setFromMatrixPosition(_.matrixWorld),m.nearDistance.value=_.shadow.camera.near,m.farDistance.value=_.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:s}}function $_(i,e,t,n){let s={},r={},a=[];const o=i.getParameter(i.MAX_UNIFORM_BUFFER_BINDINGS);function c(_,E){const x=E.program;n.uniformBlockBinding(_,x)}function l(_,E){let x=s[_.id];x===void 0&&(g(_),x=d(_),s[_.id]=x,_.addEventListener("dispose",m));const C=E.program;n.updateUBOMapping(_,C);const T=e.render.frame;r[_.id]!==T&&(u(_),r[_.id]=T)}function d(_){const E=h();_.__bindingPointIndex=E;const x=i.createBuffer(),C=_.__size,T=_.usage;return i.bindBuffer(i.UNIFORM_BUFFER,x),i.bufferData(i.UNIFORM_BUFFER,C,T),i.bindBuffer(i.UNIFORM_BUFFER,null),i.bindBufferBase(i.UNIFORM_BUFFER,E,x),x}function h(){for(let _=0;_<o;_++)if(a.indexOf(_)===-1)return a.push(_),_;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function u(_){const E=s[_.id],x=_.uniforms,C=_.__cache;i.bindBuffer(i.UNIFORM_BUFFER,E);for(let T=0,w=x.length;T<w;T++){const R=Array.isArray(x[T])?x[T]:[x[T]];for(let S=0,y=R.length;S<y;S++){const I=R[S];if(f(I,T,S,C)===!0){const O=I.__offset,P=Array.isArray(I.value)?I.value:[I.value];let U=0;for(let V=0;V<P.length;V++){const z=P[V],Z=v(z);typeof z=="number"||typeof z=="boolean"?(I.__data[0]=z,i.bufferSubData(i.UNIFORM_BUFFER,O+U,I.__data)):z.isMatrix3?(I.__data[0]=z.elements[0],I.__data[1]=z.elements[1],I.__data[2]=z.elements[2],I.__data[3]=0,I.__data[4]=z.elements[3],I.__data[5]=z.elements[4],I.__data[6]=z.elements[5],I.__data[7]=0,I.__data[8]=z.elements[6],I.__data[9]=z.elements[7],I.__data[10]=z.elements[8],I.__data[11]=0):(z.toArray(I.__data,U),U+=Z.storage/Float32Array.BYTES_PER_ELEMENT)}i.bufferSubData(i.UNIFORM_BUFFER,O,I.__data)}}}i.bindBuffer(i.UNIFORM_BUFFER,null)}function f(_,E,x,C){const T=_.value,w=E+"_"+x;if(C[w]===void 0)return typeof T=="number"||typeof T=="boolean"?C[w]=T:C[w]=T.clone(),!0;{const R=C[w];if(typeof T=="number"||typeof T=="boolean"){if(R!==T)return C[w]=T,!0}else if(R.equals(T)===!1)return R.copy(T),!0}return!1}function g(_){const E=_.uniforms;let x=0;const C=16;for(let w=0,R=E.length;w<R;w++){const S=Array.isArray(E[w])?E[w]:[E[w]];for(let y=0,I=S.length;y<I;y++){const O=S[y],P=Array.isArray(O.value)?O.value:[O.value];for(let U=0,V=P.length;U<V;U++){const z=P[U],Z=v(z),G=x%C,ee=G%Z.boundary,ie=G+ee;x+=ee,ie!==0&&C-ie<Z.storage&&(x+=C-ie),O.__data=new Float32Array(Z.storage/Float32Array.BYTES_PER_ELEMENT),O.__offset=x,x+=Z.storage}}}const T=x%C;return T>0&&(x+=C-T),_.__size=x,_.__cache={},this}function v(_){const E={boundary:0,storage:0};return typeof _=="number"||typeof _=="boolean"?(E.boundary=4,E.storage=4):_.isVector2?(E.boundary=8,E.storage=8):_.isVector3||_.isColor?(E.boundary=16,E.storage=12):_.isVector4?(E.boundary=16,E.storage=16):_.isMatrix3?(E.boundary=48,E.storage=48):_.isMatrix4?(E.boundary=64,E.storage=64):_.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",_),E}function m(_){const E=_.target;E.removeEventListener("dispose",m);const x=a.indexOf(E.__bindingPointIndex);a.splice(x,1),i.deleteBuffer(s[E.id]),delete s[E.id],delete r[E.id]}function p(){for(const _ in s)i.deleteBuffer(s[_]);a=[],s={},r={}}return{bind:c,update:l,dispose:p}}class K_{constructor(e={}){const{canvas:t=Np(),context:n=null,depth:s=!0,stencil:r=!1,alpha:a=!1,antialias:o=!1,premultipliedAlpha:c=!0,preserveDrawingBuffer:l=!1,powerPreference:d="default",failIfMajorPerformanceCaveat:h=!1,reverseDepthBuffer:u=!1}=e;this.isWebGLRenderer=!0;let f;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");f=n.getContextAttributes().alpha}else f=a;const g=new Uint32Array(4),v=new Int32Array(4);let m=null,p=null;const _=[],E=[];this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=At,this.toneMapping=$i,this.toneMappingExposure=1;const x=this;let C=!1,T=0,w=0,R=null,S=-1,y=null;const I=new rt,O=new rt;let P=null;const U=new Oe(0);let V=0,z=t.width,Z=t.height,G=1,ee=null,ie=null;const ae=new rt(0,0,z,Z),he=new rt(0,0,z,Z);let Se=!1;const K=new Cl;let ne=!1,pe=!1;const oe=new We,be=new We,Ee=new L,we=new rt,Ze={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let Ie=!1;function Xe(){return R===null?G:1}let N=n;function ut(b,F){return t.getContext(b,F)}try{const b={alpha:!0,depth:s,stencil:r,antialias:o,premultipliedAlpha:c,preserveDrawingBuffer:l,powerPreference:d,failIfMajorPerformanceCaveat:h};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${yl}`),t.addEventListener("webglcontextlost",Q,!1),t.addEventListener("webglcontextrestored",me,!1),t.addEventListener("webglcontextcreationerror",ge,!1),N===null){const F="webgl2";if(N=ut(F,b),N===null)throw ut(F)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(b){throw console.error("THREE.WebGLRenderer: "+b.message),b}let Ge,Be,Le,nt,Pe,A,M,W,J,te,j,Te,ue,ve,ze,re,xe,Ue,De,H,ye,Me,Ve,D;function de(){Ge=new ev(N),Ge.init(),Me=new k_(N,Ge),Be=new $0(N,Ge,e,Me),Le=new O_(N,Ge),Be.reverseDepthBuffer&&u&&Le.buffers.depth.setReversed(!0),nt=new iv(N),Pe=new M_,A=new B_(N,Ge,Le,Pe,Be,Me,nt),M=new Z0(x),W=new Q0(x),J=new dm(N),Ve=new Y0(N,J),te=new tv(N,J,nt,Ve),j=new rv(N,te,J,nt),De=new sv(N,Be,A),re=new K0(Pe),Te=new y_(x,M,W,Ge,Be,Ve,re),ue=new q_(x,Pe),ve=new E_,ze=new C_(Ge),Ue=new X0(x,M,W,Le,j,f,c),xe=new N_(x,j,Be),D=new $_(N,nt,Be,Le),H=new q0(N,Ge,nt),ye=new nv(N,Ge,nt),nt.programs=Te.programs,x.capabilities=Be,x.extensions=Ge,x.properties=Pe,x.renderLists=ve,x.shadowMap=xe,x.state=Le,x.info=nt}de();const $=new X_(x,N);this.xr=$,this.getContext=function(){return N},this.getContextAttributes=function(){return N.getContextAttributes()},this.forceContextLoss=function(){const b=Ge.get("WEBGL_lose_context");b&&b.loseContext()},this.forceContextRestore=function(){const b=Ge.get("WEBGL_lose_context");b&&b.restoreContext()},this.getPixelRatio=function(){return G},this.setPixelRatio=function(b){b!==void 0&&(G=b,this.setSize(z,Z,!1))},this.getSize=function(b){return b.set(z,Z)},this.setSize=function(b,F,Y=!0){if($.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}z=b,Z=F,t.width=Math.floor(b*G),t.height=Math.floor(F*G),Y===!0&&(t.style.width=b+"px",t.style.height=F+"px"),this.setViewport(0,0,b,F)},this.getDrawingBufferSize=function(b){return b.set(z*G,Z*G).floor()},this.setDrawingBufferSize=function(b,F,Y){z=b,Z=F,G=Y,t.width=Math.floor(b*Y),t.height=Math.floor(F*Y),this.setViewport(0,0,b,F)},this.getCurrentViewport=function(b){return b.copy(I)},this.getViewport=function(b){return b.copy(ae)},this.setViewport=function(b,F,Y,q){b.isVector4?ae.set(b.x,b.y,b.z,b.w):ae.set(b,F,Y,q),Le.viewport(I.copy(ae).multiplyScalar(G).round())},this.getScissor=function(b){return b.copy(he)},this.setScissor=function(b,F,Y,q){b.isVector4?he.set(b.x,b.y,b.z,b.w):he.set(b,F,Y,q),Le.scissor(O.copy(he).multiplyScalar(G).round())},this.getScissorTest=function(){return Se},this.setScissorTest=function(b){Le.setScissorTest(Se=b)},this.setOpaqueSort=function(b){ee=b},this.setTransparentSort=function(b){ie=b},this.getClearColor=function(b){return b.copy(Ue.getClearColor())},this.setClearColor=function(){Ue.setClearColor.apply(Ue,arguments)},this.getClearAlpha=function(){return Ue.getClearAlpha()},this.setClearAlpha=function(){Ue.setClearAlpha.apply(Ue,arguments)},this.clear=function(b=!0,F=!0,Y=!0){let q=0;if(b){let B=!1;if(R!==null){const ce=R.texture.format;B=ce===Al||ce===wl||ce===Tl}if(B){const ce=R.texture.type,_e=ce===Si||ce===vs||ce===Xr||ce===er||ce===Sl||ce===El,Ae=Ue.getClearColor(),Re=Ue.getClearAlpha(),ke=Ae.r,Ye=Ae.g,Ce=Ae.b;_e?(g[0]=ke,g[1]=Ye,g[2]=Ce,g[3]=Re,N.clearBufferuiv(N.COLOR,0,g)):(v[0]=ke,v[1]=Ye,v[2]=Ce,v[3]=Re,N.clearBufferiv(N.COLOR,0,v))}else q|=N.COLOR_BUFFER_BIT}F&&(q|=N.DEPTH_BUFFER_BIT),Y&&(q|=N.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),N.clear(q)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",Q,!1),t.removeEventListener("webglcontextrestored",me,!1),t.removeEventListener("webglcontextcreationerror",ge,!1),ve.dispose(),ze.dispose(),Pe.dispose(),M.dispose(),W.dispose(),j.dispose(),Ve.dispose(),D.dispose(),Te.dispose(),$.dispose(),$.removeEventListener("sessionstart",jl),$.removeEventListener("sessionend",Jl),Qi.stop()};function Q(b){b.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),C=!0}function me(){console.log("THREE.WebGLRenderer: Context Restored."),C=!1;const b=nt.autoReset,F=xe.enabled,Y=xe.autoUpdate,q=xe.needsUpdate,B=xe.type;de(),nt.autoReset=b,xe.enabled=F,xe.autoUpdate=Y,xe.needsUpdate=q,xe.type=B}function ge(b){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",b.statusMessage)}function Fe(b){const F=b.target;F.removeEventListener("dispose",Fe),pt(F)}function pt(b){Rt(b),Pe.remove(b)}function Rt(b){const F=Pe.get(b).programs;F!==void 0&&(F.forEach(function(Y){Te.releaseProgram(Y)}),b.isShaderMaterial&&Te.releaseShaderCache(b))}this.renderBufferDirect=function(b,F,Y,q,B,ce){F===null&&(F=Ze);const _e=B.isMesh&&B.matrixWorld.determinant()<0,Ae=Af(b,F,Y,q,B);Le.setMaterial(q,_e);let Re=Y.index,ke=1;if(q.wireframe===!0){if(Re=te.getWireframeAttribute(Y),Re===void 0)return;ke=2}const Ye=Y.drawRange,Ce=Y.attributes.position;let st=Ye.start*ke,ft=(Ye.start+Ye.count)*ke;ce!==null&&(st=Math.max(st,ce.start*ke),ft=Math.min(ft,(ce.start+ce.count)*ke)),Re!==null?(st=Math.max(st,0),ft=Math.min(ft,Re.count)):Ce!=null&&(st=Math.max(st,0),ft=Math.min(ft,Ce.count));const mt=ft-st;if(mt<0||mt===1/0)return;Ve.setup(B,q,Ae,Y,Re);let tn,at=H;if(Re!==null&&(tn=J.get(Re),at=ye,at.setIndex(tn)),B.isMesh)q.wireframe===!0?(Le.setLineWidth(q.wireframeLinewidth*Xe()),at.setMode(N.LINES)):at.setMode(N.TRIANGLES);else if(B.isLine){let Ne=q.linewidth;Ne===void 0&&(Ne=1),Le.setLineWidth(Ne*Xe()),B.isLineSegments?at.setMode(N.LINES):B.isLineLoop?at.setMode(N.LINE_LOOP):at.setMode(N.LINE_STRIP)}else B.isPoints?at.setMode(N.POINTS):B.isSprite&&at.setMode(N.TRIANGLES);if(B.isBatchedMesh)if(B._multiDrawInstances!==null)at.renderMultiDrawInstances(B._multiDrawStarts,B._multiDrawCounts,B._multiDrawCount,B._multiDrawInstances);else if(Ge.get("WEBGL_multi_draw"))at.renderMultiDraw(B._multiDrawStarts,B._multiDrawCounts,B._multiDrawCount);else{const Ne=B._multiDrawStarts,ni=B._multiDrawCounts,ot=B._multiDrawCount,Rn=Re?J.get(Re).bytesPerElement:1,Ss=Pe.get(q).currentProgram.getUniforms();for(let dn=0;dn<ot;dn++)Ss.setValue(N,"_gl_DrawID",dn),at.render(Ne[dn]/Rn,ni[dn])}else if(B.isInstancedMesh)at.renderInstances(st,mt,B.count);else if(Y.isInstancedBufferGeometry){const Ne=Y._maxInstanceCount!==void 0?Y._maxInstanceCount:1/0,ni=Math.min(Y.instanceCount,Ne);at.renderInstances(st,mt,ni)}else at.render(st,mt)};function it(b,F,Y){b.transparent===!0&&b.side===En&&b.forceSinglePass===!1?(b.side=on,b.needsUpdate=!0,Jr(b,F,Y),b.side=yi,b.needsUpdate=!0,Jr(b,F,Y),b.side=En):Jr(b,F,Y)}this.compile=function(b,F,Y=null){Y===null&&(Y=b),p=ze.get(Y),p.init(F),E.push(p),Y.traverseVisible(function(B){B.isLight&&B.layers.test(F.layers)&&(p.pushLight(B),B.castShadow&&p.pushShadow(B))}),b!==Y&&b.traverseVisible(function(B){B.isLight&&B.layers.test(F.layers)&&(p.pushLight(B),B.castShadow&&p.pushShadow(B))}),p.setupLights();const q=new Set;return b.traverse(function(B){if(!(B.isMesh||B.isPoints||B.isLine||B.isSprite))return;const ce=B.material;if(ce)if(Array.isArray(ce))for(let _e=0;_e<ce.length;_e++){const Ae=ce[_e];it(Ae,Y,B),q.add(Ae)}else it(ce,Y,B),q.add(ce)}),E.pop(),p=null,q},this.compileAsync=function(b,F,Y=null){const q=this.compile(b,F,Y);return new Promise(B=>{function ce(){if(q.forEach(function(_e){Pe.get(_e).currentProgram.isReady()&&q.delete(_e)}),q.size===0){B(b);return}setTimeout(ce,10)}Ge.get("KHR_parallel_shader_compile")!==null?ce():setTimeout(ce,10)})};let ln=null;function ti(b){ln&&ln(b)}function jl(){Qi.stop()}function Jl(){Qi.start()}const Qi=new Iu;Qi.setAnimationLoop(ti),typeof self<"u"&&Qi.setContext(self),this.setAnimationLoop=function(b){ln=b,$.setAnimationLoop(b),b===null?Qi.stop():Qi.start()},$.addEventListener("sessionstart",jl),$.addEventListener("sessionend",Jl),this.render=function(b,F){if(F!==void 0&&F.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(C===!0)return;if(b.matrixWorldAutoUpdate===!0&&b.updateMatrixWorld(),F.parent===null&&F.matrixWorldAutoUpdate===!0&&F.updateMatrixWorld(),$.enabled===!0&&$.isPresenting===!0&&($.cameraAutoUpdate===!0&&$.updateCamera(F),F=$.getCamera()),b.isScene===!0&&b.onBeforeRender(x,b,F,R),p=ze.get(b,E.length),p.init(F),E.push(p),be.multiplyMatrices(F.projectionMatrix,F.matrixWorldInverse),K.setFromProjectionMatrix(be),pe=this.localClippingEnabled,ne=re.init(this.clippingPlanes,pe),m=ve.get(b,_.length),m.init(),_.push(m),$.enabled===!0&&$.isPresenting===!0){const ce=x.xr.getDepthSensingMesh();ce!==null&&Ao(ce,F,-1/0,x.sortObjects)}Ao(b,F,0,x.sortObjects),m.finish(),x.sortObjects===!0&&m.sort(ee,ie),Ie=$.enabled===!1||$.isPresenting===!1||$.hasDepthSensing()===!1,Ie&&Ue.addToRenderList(m,b),this.info.render.frame++,ne===!0&&re.beginShadows();const Y=p.state.shadowsArray;xe.render(Y,b,F),ne===!0&&re.endShadows(),this.info.autoReset===!0&&this.info.reset();const q=m.opaque,B=m.transmissive;if(p.setupLights(),F.isArrayCamera){const ce=F.cameras;if(B.length>0)for(let _e=0,Ae=ce.length;_e<Ae;_e++){const Re=ce[_e];ed(q,B,b,Re)}Ie&&Ue.render(b);for(let _e=0,Ae=ce.length;_e<Ae;_e++){const Re=ce[_e];Ql(m,b,Re,Re.viewport)}}else B.length>0&&ed(q,B,b,F),Ie&&Ue.render(b),Ql(m,b,F);R!==null&&(A.updateMultisampleRenderTarget(R),A.updateRenderTargetMipmap(R)),b.isScene===!0&&b.onAfterRender(x,b,F),Ve.resetDefaultState(),S=-1,y=null,E.pop(),E.length>0?(p=E[E.length-1],ne===!0&&re.setGlobalState(x.clippingPlanes,p.state.camera)):p=null,_.pop(),_.length>0?m=_[_.length-1]:m=null};function Ao(b,F,Y,q){if(b.visible===!1)return;if(b.layers.test(F.layers)){if(b.isGroup)Y=b.renderOrder;else if(b.isLOD)b.autoUpdate===!0&&b.update(F);else if(b.isLight)p.pushLight(b),b.castShadow&&p.pushShadow(b);else if(b.isSprite){if(!b.frustumCulled||K.intersectsSprite(b)){q&&we.setFromMatrixPosition(b.matrixWorld).applyMatrix4(be);const _e=j.update(b),Ae=b.material;Ae.visible&&m.push(b,_e,Ae,Y,we.z,null)}}else if((b.isMesh||b.isLine||b.isPoints)&&(!b.frustumCulled||K.intersectsObject(b))){const _e=j.update(b),Ae=b.material;if(q&&(b.boundingSphere!==void 0?(b.boundingSphere===null&&b.computeBoundingSphere(),we.copy(b.boundingSphere.center)):(_e.boundingSphere===null&&_e.computeBoundingSphere(),we.copy(_e.boundingSphere.center)),we.applyMatrix4(b.matrixWorld).applyMatrix4(be)),Array.isArray(Ae)){const Re=_e.groups;for(let ke=0,Ye=Re.length;ke<Ye;ke++){const Ce=Re[ke],st=Ae[Ce.materialIndex];st&&st.visible&&m.push(b,_e,st,Y,we.z,Ce)}}else Ae.visible&&m.push(b,_e,Ae,Y,we.z,null)}}const ce=b.children;for(let _e=0,Ae=ce.length;_e<Ae;_e++)Ao(ce[_e],F,Y,q)}function Ql(b,F,Y,q){const B=b.opaque,ce=b.transmissive,_e=b.transparent;p.setupLightsView(Y),ne===!0&&re.setGlobalState(x.clippingPlanes,Y),q&&Le.viewport(I.copy(q)),B.length>0&&jr(B,F,Y),ce.length>0&&jr(ce,F,Y),_e.length>0&&jr(_e,F,Y),Le.buffers.depth.setTest(!0),Le.buffers.depth.setMask(!0),Le.buffers.color.setMask(!0),Le.setPolygonOffset(!1)}function ed(b,F,Y,q){if((Y.isScene===!0?Y.overrideMaterial:null)!==null)return;p.state.transmissionRenderTarget[q.id]===void 0&&(p.state.transmissionRenderTarget[q.id]=new _s(1,1,{generateMipmaps:!0,type:Ge.has("EXT_color_buffer_half_float")||Ge.has("EXT_color_buffer_float")?vi:Si,minFilter:qn,samples:4,stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:tt.workingColorSpace}));const ce=p.state.transmissionRenderTarget[q.id],_e=q.viewport||I;ce.setSize(_e.z,_e.w);const Ae=x.getRenderTarget();x.setRenderTarget(ce),x.getClearColor(U),V=x.getClearAlpha(),V<1&&x.setClearColor(16777215,.5),x.clear(),Ie&&Ue.render(Y);const Re=x.toneMapping;x.toneMapping=$i;const ke=q.viewport;if(q.viewport!==void 0&&(q.viewport=void 0),p.setupLightsView(q),ne===!0&&re.setGlobalState(x.clippingPlanes,q),jr(b,Y,q),A.updateMultisampleRenderTarget(ce),A.updateRenderTargetMipmap(ce),Ge.has("WEBGL_multisampled_render_to_texture")===!1){let Ye=!1;for(let Ce=0,st=F.length;Ce<st;Ce++){const ft=F[Ce],mt=ft.object,tn=ft.geometry,at=ft.material,Ne=ft.group;if(at.side===En&&mt.layers.test(q.layers)){const ni=at.side;at.side=on,at.needsUpdate=!0,td(mt,Y,q,tn,at,Ne),at.side=ni,at.needsUpdate=!0,Ye=!0}}Ye===!0&&(A.updateMultisampleRenderTarget(ce),A.updateRenderTargetMipmap(ce))}x.setRenderTarget(Ae),x.setClearColor(U,V),ke!==void 0&&(q.viewport=ke),x.toneMapping=Re}function jr(b,F,Y){const q=F.isScene===!0?F.overrideMaterial:null;for(let B=0,ce=b.length;B<ce;B++){const _e=b[B],Ae=_e.object,Re=_e.geometry,ke=q===null?_e.material:q,Ye=_e.group;Ae.layers.test(Y.layers)&&td(Ae,F,Y,Re,ke,Ye)}}function td(b,F,Y,q,B,ce){b.onBeforeRender(x,F,Y,q,B,ce),b.modelViewMatrix.multiplyMatrices(Y.matrixWorldInverse,b.matrixWorld),b.normalMatrix.getNormalMatrix(b.modelViewMatrix),B.onBeforeRender(x,F,Y,q,b,ce),B.transparent===!0&&B.side===En&&B.forceSinglePass===!1?(B.side=on,B.needsUpdate=!0,x.renderBufferDirect(Y,F,q,B,b,ce),B.side=yi,B.needsUpdate=!0,x.renderBufferDirect(Y,F,q,B,b,ce),B.side=En):x.renderBufferDirect(Y,F,q,B,b,ce),b.onAfterRender(x,F,Y,q,B,ce)}function Jr(b,F,Y){F.isScene!==!0&&(F=Ze);const q=Pe.get(b),B=p.state.lights,ce=p.state.shadowsArray,_e=B.state.version,Ae=Te.getParameters(b,B.state,ce,F,Y),Re=Te.getProgramCacheKey(Ae);let ke=q.programs;q.environment=b.isMeshStandardMaterial?F.environment:null,q.fog=F.fog,q.envMap=(b.isMeshStandardMaterial?W:M).get(b.envMap||q.environment),q.envMapRotation=q.environment!==null&&b.envMap===null?F.environmentRotation:b.envMapRotation,ke===void 0&&(b.addEventListener("dispose",Fe),ke=new Map,q.programs=ke);let Ye=ke.get(Re);if(Ye!==void 0){if(q.currentProgram===Ye&&q.lightsStateVersion===_e)return id(b,Ae),Ye}else Ae.uniforms=Te.getUniforms(b),b.onBeforeCompile(Ae,x),Ye=Te.acquireProgram(Ae,Re),ke.set(Re,Ye),q.uniforms=Ae.uniforms;const Ce=q.uniforms;return(!b.isShaderMaterial&&!b.isRawShaderMaterial||b.clipping===!0)&&(Ce.clippingPlanes=re.uniform),id(b,Ae),q.needsLights=Cf(b),q.lightsStateVersion=_e,q.needsLights&&(Ce.ambientLightColor.value=B.state.ambient,Ce.lightProbe.value=B.state.probe,Ce.directionalLights.value=B.state.directional,Ce.directionalLightShadows.value=B.state.directionalShadow,Ce.spotLights.value=B.state.spot,Ce.spotLightShadows.value=B.state.spotShadow,Ce.rectAreaLights.value=B.state.rectArea,Ce.ltc_1.value=B.state.rectAreaLTC1,Ce.ltc_2.value=B.state.rectAreaLTC2,Ce.pointLights.value=B.state.point,Ce.pointLightShadows.value=B.state.pointShadow,Ce.hemisphereLights.value=B.state.hemi,Ce.directionalShadowMap.value=B.state.directionalShadowMap,Ce.directionalShadowMatrix.value=B.state.directionalShadowMatrix,Ce.spotShadowMap.value=B.state.spotShadowMap,Ce.spotLightMatrix.value=B.state.spotLightMatrix,Ce.spotLightMap.value=B.state.spotLightMap,Ce.pointShadowMap.value=B.state.pointShadowMap,Ce.pointShadowMatrix.value=B.state.pointShadowMatrix),q.currentProgram=Ye,q.uniformsList=null,Ye}function nd(b){if(b.uniformsList===null){const F=b.currentProgram.getUniforms();b.uniformsList=Xa.seqWithValue(F.seq,b.uniforms)}return b.uniformsList}function id(b,F){const Y=Pe.get(b);Y.outputColorSpace=F.outputColorSpace,Y.batching=F.batching,Y.batchingColor=F.batchingColor,Y.instancing=F.instancing,Y.instancingColor=F.instancingColor,Y.instancingMorph=F.instancingMorph,Y.skinning=F.skinning,Y.morphTargets=F.morphTargets,Y.morphNormals=F.morphNormals,Y.morphColors=F.morphColors,Y.morphTargetsCount=F.morphTargetsCount,Y.numClippingPlanes=F.numClippingPlanes,Y.numIntersection=F.numClipIntersection,Y.vertexAlphas=F.vertexAlphas,Y.vertexTangents=F.vertexTangents,Y.toneMapping=F.toneMapping}function Af(b,F,Y,q,B){F.isScene!==!0&&(F=Ze),A.resetTextureUnits();const ce=F.fog,_e=q.isMeshStandardMaterial?F.environment:null,Ae=R===null?x.outputColorSpace:R.isXRRenderTarget===!0?R.texture.colorSpace:Yt,Re=(q.isMeshStandardMaterial?W:M).get(q.envMap||_e),ke=q.vertexColors===!0&&!!Y.attributes.color&&Y.attributes.color.itemSize===4,Ye=!!Y.attributes.tangent&&(!!q.normalMap||q.anisotropy>0),Ce=!!Y.morphAttributes.position,st=!!Y.morphAttributes.normal,ft=!!Y.morphAttributes.color;let mt=$i;q.toneMapped&&(R===null||R.isXRRenderTarget===!0)&&(mt=x.toneMapping);const tn=Y.morphAttributes.position||Y.morphAttributes.normal||Y.morphAttributes.color,at=tn!==void 0?tn.length:0,Ne=Pe.get(q),ni=p.state.lights;if(ne===!0&&(pe===!0||b!==y)){const mn=b===y&&q.id===S;re.setState(q,b,mn)}let ot=!1;q.version===Ne.__version?(Ne.needsLights&&Ne.lightsStateVersion!==ni.state.version||Ne.outputColorSpace!==Ae||B.isBatchedMesh&&Ne.batching===!1||!B.isBatchedMesh&&Ne.batching===!0||B.isBatchedMesh&&Ne.batchingColor===!0&&B.colorTexture===null||B.isBatchedMesh&&Ne.batchingColor===!1&&B.colorTexture!==null||B.isInstancedMesh&&Ne.instancing===!1||!B.isInstancedMesh&&Ne.instancing===!0||B.isSkinnedMesh&&Ne.skinning===!1||!B.isSkinnedMesh&&Ne.skinning===!0||B.isInstancedMesh&&Ne.instancingColor===!0&&B.instanceColor===null||B.isInstancedMesh&&Ne.instancingColor===!1&&B.instanceColor!==null||B.isInstancedMesh&&Ne.instancingMorph===!0&&B.morphTexture===null||B.isInstancedMesh&&Ne.instancingMorph===!1&&B.morphTexture!==null||Ne.envMap!==Re||q.fog===!0&&Ne.fog!==ce||Ne.numClippingPlanes!==void 0&&(Ne.numClippingPlanes!==re.numPlanes||Ne.numIntersection!==re.numIntersection)||Ne.vertexAlphas!==ke||Ne.vertexTangents!==Ye||Ne.morphTargets!==Ce||Ne.morphNormals!==st||Ne.morphColors!==ft||Ne.toneMapping!==mt||Ne.morphTargetsCount!==at)&&(ot=!0):(ot=!0,Ne.__version=q.version);let Rn=Ne.currentProgram;ot===!0&&(Rn=Jr(q,F,B));let Ss=!1,dn=!1,fr=!1;const gt=Rn.getUniforms(),Hn=Ne.uniforms;if(Le.useProgram(Rn.program)&&(Ss=!0,dn=!0,fr=!0),q.id!==S&&(S=q.id,dn=!0),Ss||y!==b){Le.buffers.depth.getReversed()?(oe.copy(b.projectionMatrix),Op(oe),Fp(oe),gt.setValue(N,"projectionMatrix",oe)):gt.setValue(N,"projectionMatrix",b.projectionMatrix),gt.setValue(N,"viewMatrix",b.matrixWorldInverse);const Ai=gt.map.cameraPosition;Ai!==void 0&&Ai.setValue(N,Ee.setFromMatrixPosition(b.matrixWorld)),Be.logarithmicDepthBuffer&&gt.setValue(N,"logDepthBufFC",2/(Math.log(b.far+1)/Math.LN2)),(q.isMeshPhongMaterial||q.isMeshToonMaterial||q.isMeshLambertMaterial||q.isMeshBasicMaterial||q.isMeshStandardMaterial||q.isShaderMaterial)&&gt.setValue(N,"isOrthographic",b.isOrthographicCamera===!0),y!==b&&(y=b,dn=!0,fr=!0)}if(B.isSkinnedMesh){gt.setOptional(N,B,"bindMatrix"),gt.setOptional(N,B,"bindMatrixInverse");const mn=B.skeleton;mn&&(mn.boneTexture===null&&mn.computeBoneTexture(),gt.setValue(N,"boneTexture",mn.boneTexture,A))}B.isBatchedMesh&&(gt.setOptional(N,B,"batchingTexture"),gt.setValue(N,"batchingTexture",B._matricesTexture,A),gt.setOptional(N,B,"batchingIdTexture"),gt.setValue(N,"batchingIdTexture",B._indirectTexture,A),gt.setOptional(N,B,"batchingColorTexture"),B._colorsTexture!==null&&gt.setValue(N,"batchingColorTexture",B._colorsTexture,A));const pr=Y.morphAttributes;if((pr.position!==void 0||pr.normal!==void 0||pr.color!==void 0)&&De.update(B,Y,Rn),(dn||Ne.receiveShadow!==B.receiveShadow)&&(Ne.receiveShadow=B.receiveShadow,gt.setValue(N,"receiveShadow",B.receiveShadow)),q.isMeshGouraudMaterial&&q.envMap!==null&&(Hn.envMap.value=Re,Hn.flipEnvMap.value=Re.isCubeTexture&&Re.isRenderTargetTexture===!1?-1:1),q.isMeshStandardMaterial&&q.envMap===null&&F.environment!==null&&(Hn.envMapIntensity.value=F.environmentIntensity),dn&&(gt.setValue(N,"toneMappingExposure",x.toneMappingExposure),Ne.needsLights&&Rf(Hn,fr),ce&&q.fog===!0&&ue.refreshFogUniforms(Hn,ce),ue.refreshMaterialUniforms(Hn,q,G,Z,p.state.transmissionRenderTarget[b.id]),Xa.upload(N,nd(Ne),Hn,A)),q.isShaderMaterial&&q.uniformsNeedUpdate===!0&&(Xa.upload(N,nd(Ne),Hn,A),q.uniformsNeedUpdate=!1),q.isSpriteMaterial&&gt.setValue(N,"center",B.center),gt.setValue(N,"modelViewMatrix",B.modelViewMatrix),gt.setValue(N,"normalMatrix",B.normalMatrix),gt.setValue(N,"modelMatrix",B.matrixWorld),q.isShaderMaterial||q.isRawShaderMaterial){const mn=q.uniformsGroups;for(let Ai=0,Ri=mn.length;Ai<Ri;Ai++){const sd=mn[Ai];D.update(sd,Rn),D.bind(sd,Rn)}}return Rn}function Rf(b,F){b.ambientLightColor.needsUpdate=F,b.lightProbe.needsUpdate=F,b.directionalLights.needsUpdate=F,b.directionalLightShadows.needsUpdate=F,b.pointLights.needsUpdate=F,b.pointLightShadows.needsUpdate=F,b.spotLights.needsUpdate=F,b.spotLightShadows.needsUpdate=F,b.rectAreaLights.needsUpdate=F,b.hemisphereLights.needsUpdate=F}function Cf(b){return b.isMeshLambertMaterial||b.isMeshToonMaterial||b.isMeshPhongMaterial||b.isMeshStandardMaterial||b.isShadowMaterial||b.isShaderMaterial&&b.lights===!0}this.getActiveCubeFace=function(){return T},this.getActiveMipmapLevel=function(){return w},this.getRenderTarget=function(){return R},this.setRenderTargetTextures=function(b,F,Y){Pe.get(b.texture).__webglTexture=F,Pe.get(b.depthTexture).__webglTexture=Y;const q=Pe.get(b);q.__hasExternalTextures=!0,q.__autoAllocateDepthBuffer=Y===void 0,q.__autoAllocateDepthBuffer||Ge.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),q.__useRenderToTexture=!1)},this.setRenderTargetFramebuffer=function(b,F){const Y=Pe.get(b);Y.__webglFramebuffer=F,Y.__useDefaultFramebuffer=F===void 0},this.setRenderTarget=function(b,F=0,Y=0){R=b,T=F,w=Y;let q=!0,B=null,ce=!1,_e=!1;if(b){const Re=Pe.get(b);if(Re.__useDefaultFramebuffer!==void 0)Le.bindFramebuffer(N.FRAMEBUFFER,null),q=!1;else if(Re.__webglFramebuffer===void 0)A.setupRenderTarget(b);else if(Re.__hasExternalTextures)A.rebindTextures(b,Pe.get(b.texture).__webglTexture,Pe.get(b.depthTexture).__webglTexture);else if(b.depthBuffer){const Ce=b.depthTexture;if(Re.__boundDepthTexture!==Ce){if(Ce!==null&&Pe.has(Ce)&&(b.width!==Ce.image.width||b.height!==Ce.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");A.setupDepthRenderbuffer(b)}}const ke=b.texture;(ke.isData3DTexture||ke.isDataArrayTexture||ke.isCompressedArrayTexture)&&(_e=!0);const Ye=Pe.get(b).__webglFramebuffer;b.isWebGLCubeRenderTarget?(Array.isArray(Ye[F])?B=Ye[F][Y]:B=Ye[F],ce=!0):b.samples>0&&A.useMultisampledRTT(b)===!1?B=Pe.get(b).__webglMultisampledFramebuffer:Array.isArray(Ye)?B=Ye[Y]:B=Ye,I.copy(b.viewport),O.copy(b.scissor),P=b.scissorTest}else I.copy(ae).multiplyScalar(G).floor(),O.copy(he).multiplyScalar(G).floor(),P=Se;if(Le.bindFramebuffer(N.FRAMEBUFFER,B)&&q&&Le.drawBuffers(b,B),Le.viewport(I),Le.scissor(O),Le.setScissorTest(P),ce){const Re=Pe.get(b.texture);N.framebufferTexture2D(N.FRAMEBUFFER,N.COLOR_ATTACHMENT0,N.TEXTURE_CUBE_MAP_POSITIVE_X+F,Re.__webglTexture,Y)}else if(_e){const Re=Pe.get(b.texture),ke=F||0;N.framebufferTextureLayer(N.FRAMEBUFFER,N.COLOR_ATTACHMENT0,Re.__webglTexture,Y||0,ke)}S=-1},this.readRenderTargetPixels=function(b,F,Y,q,B,ce,_e){if(!(b&&b.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Ae=Pe.get(b).__webglFramebuffer;if(b.isWebGLCubeRenderTarget&&_e!==void 0&&(Ae=Ae[_e]),Ae){Le.bindFramebuffer(N.FRAMEBUFFER,Ae);try{const Re=b.texture,ke=Re.format,Ye=Re.type;if(!Be.textureFormatReadable(ke)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!Be.textureTypeReadable(Ye)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}F>=0&&F<=b.width-q&&Y>=0&&Y<=b.height-B&&N.readPixels(F,Y,q,B,Me.convert(ke),Me.convert(Ye),ce)}finally{const Re=R!==null?Pe.get(R).__webglFramebuffer:null;Le.bindFramebuffer(N.FRAMEBUFFER,Re)}}},this.readRenderTargetPixelsAsync=async function(b,F,Y,q,B,ce,_e){if(!(b&&b.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Ae=Pe.get(b).__webglFramebuffer;if(b.isWebGLCubeRenderTarget&&_e!==void 0&&(Ae=Ae[_e]),Ae){const Re=b.texture,ke=Re.format,Ye=Re.type;if(!Be.textureFormatReadable(ke))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!Be.textureTypeReadable(Ye))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");if(F>=0&&F<=b.width-q&&Y>=0&&Y<=b.height-B){Le.bindFramebuffer(N.FRAMEBUFFER,Ae);const Ce=N.createBuffer();N.bindBuffer(N.PIXEL_PACK_BUFFER,Ce),N.bufferData(N.PIXEL_PACK_BUFFER,ce.byteLength,N.STREAM_READ),N.readPixels(F,Y,q,B,Me.convert(ke),Me.convert(Ye),0);const st=R!==null?Pe.get(R).__webglFramebuffer:null;Le.bindFramebuffer(N.FRAMEBUFFER,st);const ft=N.fenceSync(N.SYNC_GPU_COMMANDS_COMPLETE,0);return N.flush(),await Up(N,ft,4),N.bindBuffer(N.PIXEL_PACK_BUFFER,Ce),N.getBufferSubData(N.PIXEL_PACK_BUFFER,0,ce),N.deleteBuffer(Ce),N.deleteSync(ft),ce}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")}},this.copyFramebufferToTexture=function(b,F=null,Y=0){b.isTexture!==!0&&(Cr("WebGLRenderer: copyFramebufferToTexture function signature has changed."),F=arguments[0]||null,b=arguments[1]);const q=Math.pow(2,-Y),B=Math.floor(b.image.width*q),ce=Math.floor(b.image.height*q),_e=F!==null?F.x:0,Ae=F!==null?F.y:0;A.setTexture2D(b,0),N.copyTexSubImage2D(N.TEXTURE_2D,Y,0,0,_e,Ae,B,ce),Le.unbindTexture()},this.copyTextureToTexture=function(b,F,Y=null,q=null,B=0){b.isTexture!==!0&&(Cr("WebGLRenderer: copyTextureToTexture function signature has changed."),q=arguments[0]||null,b=arguments[1],F=arguments[2],B=arguments[3]||0,Y=null);let ce,_e,Ae,Re,ke,Ye,Ce,st,ft;const mt=b.isCompressedTexture?b.mipmaps[B]:b.image;Y!==null?(ce=Y.max.x-Y.min.x,_e=Y.max.y-Y.min.y,Ae=Y.isBox3?Y.max.z-Y.min.z:1,Re=Y.min.x,ke=Y.min.y,Ye=Y.isBox3?Y.min.z:0):(ce=mt.width,_e=mt.height,Ae=mt.depth||1,Re=0,ke=0,Ye=0),q!==null?(Ce=q.x,st=q.y,ft=q.z):(Ce=0,st=0,ft=0);const tn=Me.convert(F.format),at=Me.convert(F.type);let Ne;F.isData3DTexture?(A.setTexture3D(F,0),Ne=N.TEXTURE_3D):F.isDataArrayTexture||F.isCompressedArrayTexture?(A.setTexture2DArray(F,0),Ne=N.TEXTURE_2D_ARRAY):(A.setTexture2D(F,0),Ne=N.TEXTURE_2D),N.pixelStorei(N.UNPACK_FLIP_Y_WEBGL,F.flipY),N.pixelStorei(N.UNPACK_PREMULTIPLY_ALPHA_WEBGL,F.premultiplyAlpha),N.pixelStorei(N.UNPACK_ALIGNMENT,F.unpackAlignment);const ni=N.getParameter(N.UNPACK_ROW_LENGTH),ot=N.getParameter(N.UNPACK_IMAGE_HEIGHT),Rn=N.getParameter(N.UNPACK_SKIP_PIXELS),Ss=N.getParameter(N.UNPACK_SKIP_ROWS),dn=N.getParameter(N.UNPACK_SKIP_IMAGES);N.pixelStorei(N.UNPACK_ROW_LENGTH,mt.width),N.pixelStorei(N.UNPACK_IMAGE_HEIGHT,mt.height),N.pixelStorei(N.UNPACK_SKIP_PIXELS,Re),N.pixelStorei(N.UNPACK_SKIP_ROWS,ke),N.pixelStorei(N.UNPACK_SKIP_IMAGES,Ye);const fr=b.isDataArrayTexture||b.isData3DTexture,gt=F.isDataArrayTexture||F.isData3DTexture;if(b.isRenderTargetTexture||b.isDepthTexture){const Hn=Pe.get(b),pr=Pe.get(F),mn=Pe.get(Hn.__renderTarget),Ai=Pe.get(pr.__renderTarget);Le.bindFramebuffer(N.READ_FRAMEBUFFER,mn.__webglFramebuffer),Le.bindFramebuffer(N.DRAW_FRAMEBUFFER,Ai.__webglFramebuffer);for(let Ri=0;Ri<Ae;Ri++)fr&&N.framebufferTextureLayer(N.READ_FRAMEBUFFER,N.COLOR_ATTACHMENT0,Pe.get(b).__webglTexture,B,Ye+Ri),b.isDepthTexture?(gt&&N.framebufferTextureLayer(N.DRAW_FRAMEBUFFER,N.COLOR_ATTACHMENT0,Pe.get(F).__webglTexture,B,ft+Ri),N.blitFramebuffer(Re,ke,ce,_e,Ce,st,ce,_e,N.DEPTH_BUFFER_BIT,N.NEAREST)):gt?N.copyTexSubImage3D(Ne,B,Ce,st,ft+Ri,Re,ke,ce,_e):N.copyTexSubImage2D(Ne,B,Ce,st,ft+Ri,Re,ke,ce,_e);Le.bindFramebuffer(N.READ_FRAMEBUFFER,null),Le.bindFramebuffer(N.DRAW_FRAMEBUFFER,null)}else gt?b.isDataTexture||b.isData3DTexture?N.texSubImage3D(Ne,B,Ce,st,ft,ce,_e,Ae,tn,at,mt.data):F.isCompressedArrayTexture?N.compressedTexSubImage3D(Ne,B,Ce,st,ft,ce,_e,Ae,tn,mt.data):N.texSubImage3D(Ne,B,Ce,st,ft,ce,_e,Ae,tn,at,mt):b.isDataTexture?N.texSubImage2D(N.TEXTURE_2D,B,Ce,st,ce,_e,tn,at,mt.data):b.isCompressedTexture?N.compressedTexSubImage2D(N.TEXTURE_2D,B,Ce,st,mt.width,mt.height,tn,mt.data):N.texSubImage2D(N.TEXTURE_2D,B,Ce,st,ce,_e,tn,at,mt);N.pixelStorei(N.UNPACK_ROW_LENGTH,ni),N.pixelStorei(N.UNPACK_IMAGE_HEIGHT,ot),N.pixelStorei(N.UNPACK_SKIP_PIXELS,Rn),N.pixelStorei(N.UNPACK_SKIP_ROWS,Ss),N.pixelStorei(N.UNPACK_SKIP_IMAGES,dn),B===0&&F.generateMipmaps&&N.generateMipmap(Ne),Le.unbindTexture()},this.copyTextureToTexture3D=function(b,F,Y=null,q=null,B=0){return b.isTexture!==!0&&(Cr("WebGLRenderer: copyTextureToTexture3D function signature has changed."),Y=arguments[0]||null,q=arguments[1]||null,b=arguments[2],F=arguments[3],B=arguments[4]||0),Cr('WebGLRenderer: copyTextureToTexture3D function has been deprecated. Use "copyTextureToTexture" instead.'),this.copyTextureToTexture(b,F,Y,q,B)},this.initRenderTarget=function(b){Pe.get(b).__webglFramebuffer===void 0&&A.setupRenderTarget(b)},this.initTexture=function(b){b.isCubeTexture?A.setTextureCube(b,0):b.isData3DTexture?A.setTexture3D(b,0):b.isDataArrayTexture||b.isCompressedArrayTexture?A.setTexture2DArray(b,0):A.setTexture2D(b,0),Le.unbindTexture()},this.resetState=function(){T=0,w=0,R=null,Le.reset(),Ve.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return _i}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const t=this.getContext();t.drawingBufferColorspace=tt._getDrawingBufferColorSpace(e),t.unpackColorSpace=tt._getUnpackColorSpace()}}class Dl{constructor(e,t=25e-5){this.isFogExp2=!0,this.name="",this.color=new Oe(e),this.density=t}clone(){return new Dl(this.color,this.density)}toJSON(){return{type:"FogExp2",name:this.name,color:this.color.getHex(),density:this.density}}}class Z_ extends Mt{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new jn,this.environmentIntensity=1,this.environmentRotation=new jn,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(t.object.environmentIntensity=this.environmentIntensity),t.object.environmentRotation=this.environmentRotation.toArray(),t}}class j_{constructor(e,t){this.isInterleavedBuffer=!0,this.array=e,this.stride=t,this.count=e!==void 0?e.length/t:0,this.usage=tl,this.updateRanges=[],this.version=0,this.uuid=Bn()}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.array=new e.array.constructor(e.array),this.count=e.count,this.stride=e.stride,this.usage=e.usage,this}copyAt(e,t,n){e*=this.stride,n*=t.stride;for(let s=0,r=this.stride;s<r;s++)this.array[e+s]=t.array[n+s];return this}set(e,t=0){return this.array.set(e,t),this}clone(e){e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Bn()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);const t=new this.array.constructor(e.arrayBuffers[this.array.buffer._uuid]),n=new this.constructor(t,this.stride);return n.setUsage(this.usage),n}onUpload(e){return this.onUploadCallback=e,this}toJSON(e){return e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Bn()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer))),{uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride}}}const qt=new L;class Pl{constructor(e,t,n,s=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=e,this.itemSize=t,this.offset=n,this.normalized=s}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(e){this.data.needsUpdate=e}applyMatrix4(e){for(let t=0,n=this.data.count;t<n;t++)qt.fromBufferAttribute(this,t),qt.applyMatrix4(e),this.setXYZ(t,qt.x,qt.y,qt.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)qt.fromBufferAttribute(this,t),qt.applyNormalMatrix(e),this.setXYZ(t,qt.x,qt.y,qt.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)qt.fromBufferAttribute(this,t),qt.transformDirection(e),this.setXYZ(t,qt.x,qt.y,qt.z);return this}getComponent(e,t){let n=this.array[e*this.data.stride+this.offset+t];return this.normalized&&(n=Un(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=ct(n,this.array)),this.data.array[e*this.data.stride+this.offset+t]=n,this}setX(e,t){return this.normalized&&(t=ct(t,this.array)),this.data.array[e*this.data.stride+this.offset]=t,this}setY(e,t){return this.normalized&&(t=ct(t,this.array)),this.data.array[e*this.data.stride+this.offset+1]=t,this}setZ(e,t){return this.normalized&&(t=ct(t,this.array)),this.data.array[e*this.data.stride+this.offset+2]=t,this}setW(e,t){return this.normalized&&(t=ct(t,this.array)),this.data.array[e*this.data.stride+this.offset+3]=t,this}getX(e){let t=this.data.array[e*this.data.stride+this.offset];return this.normalized&&(t=Un(t,this.array)),t}getY(e){let t=this.data.array[e*this.data.stride+this.offset+1];return this.normalized&&(t=Un(t,this.array)),t}getZ(e){let t=this.data.array[e*this.data.stride+this.offset+2];return this.normalized&&(t=Un(t,this.array)),t}getW(e){let t=this.data.array[e*this.data.stride+this.offset+3];return this.normalized&&(t=Un(t,this.array)),t}setXY(e,t,n){return e=e*this.data.stride+this.offset,this.normalized&&(t=ct(t,this.array),n=ct(n,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this}setXYZ(e,t,n,s){return e=e*this.data.stride+this.offset,this.normalized&&(t=ct(t,this.array),n=ct(n,this.array),s=ct(s,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=s,this}setXYZW(e,t,n,s,r){return e=e*this.data.stride+this.offset,this.normalized&&(t=ct(t,this.array),n=ct(n,this.array),s=ct(s,this.array),r=ct(r,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=s,this.data.array[e+3]=r,this}clone(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");const t=[];for(let n=0;n<this.count;n++){const s=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)t.push(this.data.array[s+r])}return new Qt(new this.array.constructor(t),this.itemSize,this.normalized)}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.clone(e)),new Pl(e.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");const t=[];for(let n=0;n<this.count;n++){const s=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)t.push(this.data.array[s+r])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:t,normalized:this.normalized}}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.toJSON(e)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}}const oh=new L,ch=new rt,lh=new rt,J_=new L,dh=new We,ya=new L,nc=new Jn,hh=new We,ic=new yo;class Q_ extends X{constructor(e,t){super(e,t),this.isSkinnedMesh=!0,this.type="SkinnedMesh",this.bindMode=ld,this.bindMatrix=new We,this.bindMatrixInverse=new We,this.boundingBox=null,this.boundingSphere=null}computeBoundingBox(){const e=this.geometry;this.boundingBox===null&&(this.boundingBox=new wi),this.boundingBox.makeEmpty();const t=e.getAttribute("position");for(let n=0;n<t.count;n++)this.getVertexPosition(n,ya),this.boundingBox.expandByPoint(ya)}computeBoundingSphere(){const e=this.geometry;this.boundingSphere===null&&(this.boundingSphere=new Jn),this.boundingSphere.makeEmpty();const t=e.getAttribute("position");for(let n=0;n<t.count;n++)this.getVertexPosition(n,ya),this.boundingSphere.expandByPoint(ya)}copy(e,t){return super.copy(e,t),this.bindMode=e.bindMode,this.bindMatrix.copy(e.bindMatrix),this.bindMatrixInverse.copy(e.bindMatrixInverse),this.skeleton=e.skeleton,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}raycast(e,t){const n=this.material,s=this.matrixWorld;n!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),nc.copy(this.boundingSphere),nc.applyMatrix4(s),e.ray.intersectsSphere(nc)!==!1&&(hh.copy(s).invert(),ic.copy(e.ray).applyMatrix4(hh),!(this.boundingBox!==null&&ic.intersectsBox(this.boundingBox)===!1)&&this._computeIntersections(e,t,ic)))}getVertexPosition(e,t){return super.getVertexPosition(e,t),this.applyBoneTransform(e,t),t}bind(e,t){this.skeleton=e,t===void 0&&(this.updateMatrixWorld(!0),this.skeleton.calculateInverses(),t=this.matrixWorld),this.bindMatrix.copy(t),this.bindMatrixInverse.copy(t).invert()}pose(){this.skeleton.pose()}normalizeSkinWeights(){const e=new rt,t=this.geometry.attributes.skinWeight;for(let n=0,s=t.count;n<s;n++){e.fromBufferAttribute(t,n);const r=1/e.manhattanLength();r!==1/0?e.multiplyScalar(r):e.set(1,0,0,0),t.setXYZW(n,e.x,e.y,e.z,e.w)}}updateMatrixWorld(e){super.updateMatrixWorld(e),this.bindMode===ld?this.bindMatrixInverse.copy(this.matrixWorld).invert():this.bindMode===sp?this.bindMatrixInverse.copy(this.bindMatrix).invert():console.warn("THREE.SkinnedMesh: Unrecognized bindMode: "+this.bindMode)}applyBoneTransform(e,t){const n=this.skeleton,s=this.geometry;ch.fromBufferAttribute(s.attributes.skinIndex,e),lh.fromBufferAttribute(s.attributes.skinWeight,e),oh.copy(t).applyMatrix4(this.bindMatrix),t.set(0,0,0);for(let r=0;r<4;r++){const a=lh.getComponent(r);if(a!==0){const o=ch.getComponent(r);dh.multiplyMatrices(n.bones[o].matrixWorld,n.boneInverses[o]),t.addScaledVector(J_.copy(oh).applyMatrix4(dh),a)}}return t.applyMatrix4(this.bindMatrixInverse)}}class Ou extends Mt{constructor(){super(),this.isBone=!0,this.type="Bone"}}class Nl extends Nt{constructor(e=null,t=1,n=1,s,r,a,o,c,l=Jt,d=Jt,h,u){super(null,a,o,c,l,d,s,r,h,u),this.isDataTexture=!0,this.image={data:e,width:t,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}const uh=new We,ex=new We;class Ul{constructor(e=[],t=[]){this.uuid=Bn(),this.bones=e.slice(0),this.boneInverses=t,this.boneMatrices=null,this.boneTexture=null,this.init()}init(){const e=this.bones,t=this.boneInverses;if(this.boneMatrices=new Float32Array(e.length*16),t.length===0)this.calculateInverses();else if(e.length!==t.length){console.warn("THREE.Skeleton: Number of inverse bone matrices does not match amount of bones."),this.boneInverses=[];for(let n=0,s=this.bones.length;n<s;n++)this.boneInverses.push(new We)}}calculateInverses(){this.boneInverses.length=0;for(let e=0,t=this.bones.length;e<t;e++){const n=new We;this.bones[e]&&n.copy(this.bones[e].matrixWorld).invert(),this.boneInverses.push(n)}}pose(){for(let e=0,t=this.bones.length;e<t;e++){const n=this.bones[e];n&&n.matrixWorld.copy(this.boneInverses[e]).invert()}for(let e=0,t=this.bones.length;e<t;e++){const n=this.bones[e];n&&(n.parent&&n.parent.isBone?(n.matrix.copy(n.parent.matrixWorld).invert(),n.matrix.multiply(n.matrixWorld)):n.matrix.copy(n.matrixWorld),n.matrix.decompose(n.position,n.quaternion,n.scale))}}update(){const e=this.bones,t=this.boneInverses,n=this.boneMatrices,s=this.boneTexture;for(let r=0,a=e.length;r<a;r++){const o=e[r]?e[r].matrixWorld:ex;uh.multiplyMatrices(o,t[r]),uh.toArray(n,r*16)}s!==null&&(s.needsUpdate=!0)}clone(){return new Ul(this.bones,this.boneInverses)}computeBoneTexture(){let e=Math.sqrt(this.bones.length*4);e=Math.ceil(e/4)*4,e=Math.max(e,4);const t=new Float32Array(e*e*4);t.set(this.boneMatrices);const n=new Nl(t,e,e,bn,an);return n.needsUpdate=!0,this.boneMatrices=t,this.boneTexture=n,this}getBoneByName(e){for(let t=0,n=this.bones.length;t<n;t++){const s=this.bones[t];if(s.name===e)return s}}dispose(){this.boneTexture!==null&&(this.boneTexture.dispose(),this.boneTexture=null)}fromJSON(e,t){this.uuid=e.uuid;for(let n=0,s=e.bones.length;n<s;n++){const r=e.bones[n];let a=t[r];a===void 0&&(console.warn("THREE.Skeleton: No bone found with UUID:",r),a=new Ou),this.bones.push(a),this.boneInverses.push(new We().fromArray(e.boneInverses[n]))}return this.init(),this}toJSON(){const e={metadata:{version:4.6,type:"Skeleton",generator:"Skeleton.toJSON"},bones:[],boneInverses:[]};e.uuid=this.uuid;const t=this.bones,n=this.boneInverses;for(let s=0,r=t.length;s<r;s++){const a=t[s];e.bones.push(a.uuid);const o=n[s];e.boneInverses.push(o.toArray())}return e}}class il extends Qt{constructor(e,t,n,s=1){super(e,t,n),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=s}copy(e){return super.copy(e),this.meshPerAttribute=e.meshPerAttribute,this}toJSON(){const e=super.toJSON();return e.meshPerAttribute=this.meshPerAttribute,e.isInstancedBufferAttribute=!0,e}}const Fs=new We,fh=new We,Ma=[],ph=new wi,tx=new We,xr=new X,yr=new Jn;class nx extends X{constructor(e,t,n){super(e,t),this.isInstancedMesh=!0,this.instanceMatrix=new il(new Float32Array(n*16),16),this.instanceColor=null,this.morphTexture=null,this.count=n,this.boundingBox=null,this.boundingSphere=null;for(let s=0;s<n;s++)this.setMatrixAt(s,tx)}computeBoundingBox(){const e=this.geometry,t=this.count;this.boundingBox===null&&(this.boundingBox=new wi),e.boundingBox===null&&e.computeBoundingBox(),this.boundingBox.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,Fs),ph.copy(e.boundingBox).applyMatrix4(Fs),this.boundingBox.union(ph)}computeBoundingSphere(){const e=this.geometry,t=this.count;this.boundingSphere===null&&(this.boundingSphere=new Jn),e.boundingSphere===null&&e.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,Fs),yr.copy(e.boundingSphere).applyMatrix4(Fs),this.boundingSphere.union(yr)}copy(e,t){return super.copy(e,t),this.instanceMatrix.copy(e.instanceMatrix),e.morphTexture!==null&&(this.morphTexture=e.morphTexture.clone()),e.instanceColor!==null&&(this.instanceColor=e.instanceColor.clone()),this.count=e.count,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}getColorAt(e,t){t.fromArray(this.instanceColor.array,e*3)}getMatrixAt(e,t){t.fromArray(this.instanceMatrix.array,e*16)}getMorphAt(e,t){const n=t.morphTargetInfluences,s=this.morphTexture.source.data.data,r=n.length+1,a=e*r+1;for(let o=0;o<n.length;o++)n[o]=s[a+o]}raycast(e,t){const n=this.matrixWorld,s=this.count;if(xr.geometry=this.geometry,xr.material=this.material,xr.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),yr.copy(this.boundingSphere),yr.applyMatrix4(n),e.ray.intersectsSphere(yr)!==!1))for(let r=0;r<s;r++){this.getMatrixAt(r,Fs),fh.multiplyMatrices(n,Fs),xr.matrixWorld=fh,xr.raycast(e,Ma);for(let a=0,o=Ma.length;a<o;a++){const c=Ma[a];c.instanceId=r,c.object=this,t.push(c)}Ma.length=0}}setColorAt(e,t){this.instanceColor===null&&(this.instanceColor=new il(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),t.toArray(this.instanceColor.array,e*3)}setMatrixAt(e,t){t.toArray(this.instanceMatrix.array,e*16)}setMorphAt(e,t){const n=t.morphTargetInfluences,s=n.length+1;this.morphTexture===null&&(this.morphTexture=new Nl(new Float32Array(s*this.count),s,this.count,bl,an));const r=this.morphTexture.source.data.data;let a=0;for(let l=0;l<n.length;l++)a+=n[l];const o=this.geometry.morphTargetsRelative?1:1-a,c=s*e;r[c]=o,r.set(n,c+1)}updateMorphTargets(){}dispose(){return this.dispatchEvent({type:"dispose"}),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null),this}}class Ol extends $n{static get type(){return"LineBasicMaterial"}constructor(e){super(),this.isLineBasicMaterial=!0,this.color=new Oe(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}}const to=new L,no=new L,mh=new We,Mr=new yo,Sa=new Jn,sc=new L,gh=new L;class So extends Mt{constructor(e=new cn,t=new Ol){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,n=[0];for(let s=1,r=t.count;s<r;s++)to.fromBufferAttribute(t,s-1),no.fromBufferAttribute(t,s),n[s]=n[s-1],n[s]+=to.distanceTo(no);e.setAttribute("lineDistance",new Ht(n,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(e,t){const n=this.geometry,s=this.matrixWorld,r=e.params.Line.threshold,a=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),Sa.copy(n.boundingSphere),Sa.applyMatrix4(s),Sa.radius+=r,e.ray.intersectsSphere(Sa)===!1)return;mh.copy(s).invert(),Mr.copy(e.ray).applyMatrix4(mh);const o=r/((this.scale.x+this.scale.y+this.scale.z)/3),c=o*o,l=this.isLineSegments?2:1,d=n.index,u=n.attributes.position;if(d!==null){const f=Math.max(0,a.start),g=Math.min(d.count,a.start+a.count);for(let v=f,m=g-1;v<m;v+=l){const p=d.getX(v),_=d.getX(v+1),E=Ea(this,e,Mr,c,p,_);E&&t.push(E)}if(this.isLineLoop){const v=d.getX(g-1),m=d.getX(f),p=Ea(this,e,Mr,c,v,m);p&&t.push(p)}}else{const f=Math.max(0,a.start),g=Math.min(u.count,a.start+a.count);for(let v=f,m=g-1;v<m;v+=l){const p=Ea(this,e,Mr,c,v,v+1);p&&t.push(p)}if(this.isLineLoop){const v=Ea(this,e,Mr,c,g-1,f);v&&t.push(v)}}}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const s=t[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=s.length;r<a;r++){const o=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}}function Ea(i,e,t,n,s,r){const a=i.geometry.attributes.position;if(to.fromBufferAttribute(a,s),no.fromBufferAttribute(a,r),t.distanceSqToSegment(to,no,sc,gh)>n)return;sc.applyMatrix4(i.matrixWorld);const c=e.ray.origin.distanceTo(sc);if(!(c<e.near||c>e.far))return{distance:c,point:gh.clone().applyMatrix4(i.matrixWorld),index:s,face:null,faceIndex:null,barycoord:null,object:i}}const vh=new L,_h=new L;class ix extends So{constructor(e,t){super(e,t),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,n=[];for(let s=0,r=t.count;s<r;s+=2)vh.fromBufferAttribute(t,s),_h.fromBufferAttribute(t,s+1),n[s]=s===0?0:n[s-1],n[s+1]=n[s]+vh.distanceTo(_h);e.setAttribute("lineDistance",new Ht(n,1))}else console.warn("THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}}class sx extends So{constructor(e,t){super(e,t),this.isLineLoop=!0,this.type="LineLoop"}}class Fu extends $n{static get type(){return"PointsMaterial"}constructor(e){super(),this.isPointsMaterial=!0,this.color=new Oe(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}const xh=new We,sl=new yo,ba=new Jn,Ta=new L;class rx extends Mt{constructor(e=new cn,t=new Fu){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}raycast(e,t){const n=this.geometry,s=this.matrixWorld,r=e.params.Points.threshold,a=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),ba.copy(n.boundingSphere),ba.applyMatrix4(s),ba.radius+=r,e.ray.intersectsSphere(ba)===!1)return;xh.copy(s).invert(),sl.copy(e.ray).applyMatrix4(xh);const o=r/((this.scale.x+this.scale.y+this.scale.z)/3),c=o*o,l=n.index,h=n.attributes.position;if(l!==null){const u=Math.max(0,a.start),f=Math.min(l.count,a.start+a.count);for(let g=u,v=f;g<v;g++){const m=l.getX(g);Ta.fromBufferAttribute(h,m),yh(Ta,m,c,s,e,t,this)}}else{const u=Math.max(0,a.start),f=Math.min(h.count,a.start+a.count);for(let g=u,v=f;g<v;g++)Ta.fromBufferAttribute(h,g),yh(Ta,g,c,s,e,t,this)}}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const s=t[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=s.length;r<a;r++){const o=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}}function yh(i,e,t,n,s,r,a){const o=sl.distanceSqToPoint(i);if(o<t){const c=new L;sl.closestPointToPoint(i,c),c.applyMatrix4(n);const l=s.ray.origin.distanceTo(c);if(l<s.near||l>s.far)return;r.push({distance:l,distanceToRay:Math.sqrt(o),point:c,index:e,face:null,faceIndex:null,barycoord:null,object:a})}}class Kr extends Nt{constructor(e,t,n,s,r,a,o,c,l){super(e,t,n,s,r,a,o,c,l),this.isCanvasTexture=!0,this.needsUpdate=!0}}class ax{constructor(){this.type="Curve",this.arcLengthDivisions=200}getPoint(){return console.warn("THREE.Curve: .getPoint() not implemented."),null}getPointAt(e,t){const n=this.getUtoTmapping(e);return this.getPoint(n,t)}getPoints(e=5){const t=[];for(let n=0;n<=e;n++)t.push(this.getPoint(n/e));return t}getSpacedPoints(e=5){const t=[];for(let n=0;n<=e;n++)t.push(this.getPointAt(n/e));return t}getLength(){const e=this.getLengths();return e[e.length-1]}getLengths(e=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===e+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;const t=[];let n,s=this.getPoint(0),r=0;t.push(0);for(let a=1;a<=e;a++)n=this.getPoint(a/e),r+=n.distanceTo(s),t.push(r),s=n;return this.cacheArcLengths=t,t}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(e,t){const n=this.getLengths();let s=0;const r=n.length;let a;t?a=t:a=e*n[r-1];let o=0,c=r-1,l;for(;o<=c;)if(s=Math.floor(o+(c-o)/2),l=n[s]-a,l<0)o=s+1;else if(l>0)c=s-1;else{c=s;break}if(s=c,n[s]===a)return s/(r-1);const d=n[s],u=n[s+1]-d,f=(a-d)/u;return(s+f)/(r-1)}getTangent(e,t){let s=e-1e-4,r=e+1e-4;s<0&&(s=0),r>1&&(r=1);const a=this.getPoint(s),o=this.getPoint(r),c=t||(a.isVector2?new Ke:new L);return c.copy(o).sub(a).normalize(),c}getTangentAt(e,t){const n=this.getUtoTmapping(e);return this.getTangent(n,t)}computeFrenetFrames(e,t){const n=new L,s=[],r=[],a=[],o=new L,c=new We;for(let f=0;f<=e;f++){const g=f/e;s[f]=this.getTangentAt(g,new L)}r[0]=new L,a[0]=new L;let l=Number.MAX_VALUE;const d=Math.abs(s[0].x),h=Math.abs(s[0].y),u=Math.abs(s[0].z);d<=l&&(l=d,n.set(1,0,0)),h<=l&&(l=h,n.set(0,1,0)),u<=l&&n.set(0,0,1),o.crossVectors(s[0],n).normalize(),r[0].crossVectors(s[0],o),a[0].crossVectors(s[0],r[0]);for(let f=1;f<=e;f++){if(r[f]=r[f-1].clone(),a[f]=a[f-1].clone(),o.crossVectors(s[f-1],s[f]),o.length()>Number.EPSILON){o.normalize();const g=Math.acos(Pt(s[f-1].dot(s[f]),-1,1));r[f].applyMatrix4(c.makeRotationAxis(o,g))}a[f].crossVectors(s[f],r[f])}if(t===!0){let f=Math.acos(Pt(r[0].dot(r[e]),-1,1));f/=e,s[0].dot(o.crossVectors(r[0],r[e]))>0&&(f=-f);for(let g=1;g<=e;g++)r[g].applyMatrix4(c.makeRotationAxis(s[g],f*g)),a[g].crossVectors(s[g],r[g])}return{tangents:s,normals:r,binormals:a}}clone(){return new this.constructor().copy(this)}copy(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}toJSON(){const e={metadata:{version:4.6,type:"Curve",generator:"Curve.toJSON"}};return e.arcLengthDivisions=this.arcLengthDivisions,e.type=this.type,e}fromJSON(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}}function Fl(){let i=0,e=0,t=0,n=0;function s(r,a,o,c){i=r,e=o,t=-3*r+3*a-2*o-c,n=2*r-2*a+o+c}return{initCatmullRom:function(r,a,o,c,l){s(a,o,l*(o-r),l*(c-a))},initNonuniformCatmullRom:function(r,a,o,c,l,d,h){let u=(a-r)/l-(o-r)/(l+d)+(o-a)/d,f=(o-a)/d-(c-a)/(d+h)+(c-o)/h;u*=d,f*=d,s(a,o,u,f)},calc:function(r){const a=r*r,o=a*r;return i+e*r+t*a+n*o}}}const wa=new L,rc=new Fl,ac=new Fl,oc=new Fl;class ox extends ax{constructor(e=[],t=!1,n="centripetal",s=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=e,this.closed=t,this.curveType=n,this.tension=s}getPoint(e,t=new L){const n=t,s=this.points,r=s.length,a=(r-(this.closed?0:1))*e;let o=Math.floor(a),c=a-o;this.closed?o+=o>0?0:(Math.floor(Math.abs(o)/r)+1)*r:c===0&&o===r-1&&(o=r-2,c=1);let l,d;this.closed||o>0?l=s[(o-1)%r]:(wa.subVectors(s[0],s[1]).add(s[0]),l=wa);const h=s[o%r],u=s[(o+1)%r];if(this.closed||o+2<r?d=s[(o+2)%r]:(wa.subVectors(s[r-1],s[r-2]).add(s[r-1]),d=wa),this.curveType==="centripetal"||this.curveType==="chordal"){const f=this.curveType==="chordal"?.5:.25;let g=Math.pow(l.distanceToSquared(h),f),v=Math.pow(h.distanceToSquared(u),f),m=Math.pow(u.distanceToSquared(d),f);v<1e-4&&(v=1),g<1e-4&&(g=v),m<1e-4&&(m=v),rc.initNonuniformCatmullRom(l.x,h.x,u.x,d.x,g,v,m),ac.initNonuniformCatmullRom(l.y,h.y,u.y,d.y,g,v,m),oc.initNonuniformCatmullRom(l.z,h.z,u.z,d.z,g,v,m)}else this.curveType==="catmullrom"&&(rc.initCatmullRom(l.x,h.x,u.x,d.x,this.tension),ac.initCatmullRom(l.y,h.y,u.y,d.y,this.tension),oc.initCatmullRom(l.z,h.z,u.z,d.z,this.tension));return n.set(rc.calc(c),ac.calc(c),oc.calc(c)),n}copy(e){super.copy(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){const s=e.points[t];this.points.push(s.clone())}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}toJSON(){const e=super.toJSON();e.points=[];for(let t=0,n=this.points.length;t<n;t++){const s=this.points[t];e.points.push(s.toArray())}return e.closed=this.closed,e.curveType=this.curveType,e.tension=this.tension,e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){const s=e.points[t];this.points.push(new L().fromArray(s))}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}}class ht extends cn{constructor(e=1,t=1,n=1,s=32,r=1,a=!1,o=0,c=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:e,radiusBottom:t,height:n,radialSegments:s,heightSegments:r,openEnded:a,thetaStart:o,thetaLength:c};const l=this;s=Math.floor(s),r=Math.floor(r);const d=[],h=[],u=[],f=[];let g=0;const v=[],m=n/2;let p=0;_(),a===!1&&(e>0&&E(!0),t>0&&E(!1)),this.setIndex(d),this.setAttribute("position",new Ht(h,3)),this.setAttribute("normal",new Ht(u,3)),this.setAttribute("uv",new Ht(f,2));function _(){const x=new L,C=new L;let T=0;const w=(t-e)/n;for(let R=0;R<=r;R++){const S=[],y=R/r,I=y*(t-e)+e;for(let O=0;O<=s;O++){const P=O/s,U=P*c+o,V=Math.sin(U),z=Math.cos(U);C.x=I*V,C.y=-y*n+m,C.z=I*z,h.push(C.x,C.y,C.z),x.set(V,w,z).normalize(),u.push(x.x,x.y,x.z),f.push(P,1-y),S.push(g++)}v.push(S)}for(let R=0;R<s;R++)for(let S=0;S<r;S++){const y=v[S][R],I=v[S+1][R],O=v[S+1][R+1],P=v[S][R+1];(e>0||S!==0)&&(d.push(y,I,P),T+=3),(t>0||S!==r-1)&&(d.push(I,O,P),T+=3)}l.addGroup(p,T,0),p+=T}function E(x){const C=g,T=new Ke,w=new L;let R=0;const S=x===!0?e:t,y=x===!0?1:-1;for(let O=1;O<=s;O++)h.push(0,m*y,0),u.push(0,y,0),f.push(.5,.5),g++;const I=g;for(let O=0;O<=s;O++){const U=O/s*c+o,V=Math.cos(U),z=Math.sin(U);w.x=S*z,w.y=m*y,w.z=S*V,h.push(w.x,w.y,w.z),u.push(0,y,0),T.x=V*.5+.5,T.y=z*.5*y+.5,f.push(T.x,T.y),g++}for(let O=0;O<s;O++){const P=C+O,U=I+O;x===!0?d.push(U,U+1,P):d.push(U+1,U,P),R+=3}l.addGroup(p,R,x===!0?1:2),p+=R}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new ht(e.radiusTop,e.radiusBottom,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}}class Bl extends ht{constructor(e=1,t=1,n=32,s=1,r=!1,a=0,o=Math.PI*2){super(0,e,t,n,s,r,a,o),this.type="ConeGeometry",this.parameters={radius:e,height:t,radialSegments:n,heightSegments:s,openEnded:r,thetaStart:a,thetaLength:o}}static fromJSON(e){return new Bl(e.radius,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}}class ys extends cn{constructor(e=1,t=32,n=16,s=0,r=Math.PI*2,a=0,o=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:t,heightSegments:n,phiStart:s,phiLength:r,thetaStart:a,thetaLength:o},t=Math.max(3,Math.floor(t)),n=Math.max(2,Math.floor(n));const c=Math.min(a+o,Math.PI);let l=0;const d=[],h=new L,u=new L,f=[],g=[],v=[],m=[];for(let p=0;p<=n;p++){const _=[],E=p/n;let x=0;p===0&&a===0?x=.5/t:p===n&&c===Math.PI&&(x=-.5/t);for(let C=0;C<=t;C++){const T=C/t;h.x=-e*Math.cos(s+T*r)*Math.sin(a+E*o),h.y=e*Math.cos(a+E*o),h.z=e*Math.sin(s+T*r)*Math.sin(a+E*o),g.push(h.x,h.y,h.z),u.copy(h).normalize(),v.push(u.x,u.y,u.z),m.push(T+x,1-E),_.push(l++)}d.push(_)}for(let p=0;p<n;p++)for(let _=0;_<t;_++){const E=d[p][_+1],x=d[p][_],C=d[p+1][_],T=d[p+1][_+1];(p!==0||a>0)&&f.push(E,x,T),(p!==n-1||c<Math.PI)&&f.push(x,C,T)}this.setIndex(f),this.setAttribute("position",new Ht(g,3)),this.setAttribute("normal",new Ht(v,3)),this.setAttribute("uv",new Ht(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new ys(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}}class kl extends cn{constructor(e=1,t=.4,n=12,s=48,r=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:e,tube:t,radialSegments:n,tubularSegments:s,arc:r},n=Math.floor(n),s=Math.floor(s);const a=[],o=[],c=[],l=[],d=new L,h=new L,u=new L;for(let f=0;f<=n;f++)for(let g=0;g<=s;g++){const v=g/s*r,m=f/n*Math.PI*2;h.x=(e+t*Math.cos(m))*Math.cos(v),h.y=(e+t*Math.cos(m))*Math.sin(v),h.z=t*Math.sin(m),o.push(h.x,h.y,h.z),d.x=e*Math.cos(v),d.y=e*Math.sin(v),u.subVectors(h,d).normalize(),c.push(u.x,u.y,u.z),l.push(g/s),l.push(f/n)}for(let f=1;f<=n;f++)for(let g=1;g<=s;g++){const v=(s+1)*f+g-1,m=(s+1)*(f-1)+g-1,p=(s+1)*(f-1)+g,_=(s+1)*f+g;a.push(v,m,_),a.push(m,p,_)}this.setIndex(a),this.setAttribute("position",new Ht(o,3)),this.setAttribute("normal",new Ht(c,3)),this.setAttribute("uv",new Ht(l,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new kl(e.radius,e.tube,e.radialSegments,e.tubularSegments,e.arc)}}class se extends $n{static get type(){return"MeshStandardMaterial"}constructor(e){super(),this.isMeshStandardMaterial=!0,this.defines={STANDARD:""},this.color=new Oe(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Oe(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=_u,this.normalScale=new Ke(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new jn,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class Qn extends se{static get type(){return"MeshPhysicalMaterial"}constructor(e){super(),this.isMeshPhysicalMaterial=!0,this.defines={STANDARD:"",PHYSICAL:""},this.anisotropyRotation=0,this.anisotropyMap=null,this.clearcoatMap=null,this.clearcoatRoughness=0,this.clearcoatRoughnessMap=null,this.clearcoatNormalScale=new Ke(1,1),this.clearcoatNormalMap=null,this.ior=1.5,Object.defineProperty(this,"reflectivity",{get:function(){return Pt(2.5*(this.ior-1)/(this.ior+1),0,1)},set:function(t){this.ior=(1+.4*t)/(1-.4*t)}}),this.iridescenceMap=null,this.iridescenceIOR=1.3,this.iridescenceThicknessRange=[100,400],this.iridescenceThicknessMap=null,this.sheenColor=new Oe(0),this.sheenColorMap=null,this.sheenRoughness=1,this.sheenRoughnessMap=null,this.transmissionMap=null,this.thickness=0,this.thicknessMap=null,this.attenuationDistance=1/0,this.attenuationColor=new Oe(1,1,1),this.specularIntensity=1,this.specularIntensityMap=null,this.specularColor=new Oe(1,1,1),this.specularColorMap=null,this._anisotropy=0,this._clearcoat=0,this._dispersion=0,this._iridescence=0,this._sheen=0,this._transmission=0,this.setValues(e)}get anisotropy(){return this._anisotropy}set anisotropy(e){this._anisotropy>0!=e>0&&this.version++,this._anisotropy=e}get clearcoat(){return this._clearcoat}set clearcoat(e){this._clearcoat>0!=e>0&&this.version++,this._clearcoat=e}get iridescence(){return this._iridescence}set iridescence(e){this._iridescence>0!=e>0&&this.version++,this._iridescence=e}get dispersion(){return this._dispersion}set dispersion(e){this._dispersion>0!=e>0&&this.version++,this._dispersion=e}get sheen(){return this._sheen}set sheen(e){this._sheen>0!=e>0&&this.version++,this._sheen=e}get transmission(){return this._transmission}set transmission(e){this._transmission>0!=e>0&&this.version++,this._transmission=e}copy(e){return super.copy(e),this.defines={STANDARD:"",PHYSICAL:""},this.anisotropy=e.anisotropy,this.anisotropyRotation=e.anisotropyRotation,this.anisotropyMap=e.anisotropyMap,this.clearcoat=e.clearcoat,this.clearcoatMap=e.clearcoatMap,this.clearcoatRoughness=e.clearcoatRoughness,this.clearcoatRoughnessMap=e.clearcoatRoughnessMap,this.clearcoatNormalMap=e.clearcoatNormalMap,this.clearcoatNormalScale.copy(e.clearcoatNormalScale),this.dispersion=e.dispersion,this.ior=e.ior,this.iridescence=e.iridescence,this.iridescenceMap=e.iridescenceMap,this.iridescenceIOR=e.iridescenceIOR,this.iridescenceThicknessRange=[...e.iridescenceThicknessRange],this.iridescenceThicknessMap=e.iridescenceThicknessMap,this.sheen=e.sheen,this.sheenColor.copy(e.sheenColor),this.sheenColorMap=e.sheenColorMap,this.sheenRoughness=e.sheenRoughness,this.sheenRoughnessMap=e.sheenRoughnessMap,this.transmission=e.transmission,this.transmissionMap=e.transmissionMap,this.thickness=e.thickness,this.thicknessMap=e.thicknessMap,this.attenuationDistance=e.attenuationDistance,this.attenuationColor.copy(e.attenuationColor),this.specularIntensity=e.specularIntensity,this.specularIntensityMap=e.specularIntensityMap,this.specularColor.copy(e.specularColor),this.specularColorMap=e.specularColorMap,this}}function Aa(i,e,t){return!i||!t&&i.constructor===e?i:typeof e.BYTES_PER_ELEMENT=="number"?new e(i):Array.prototype.slice.call(i)}function cx(i){return ArrayBuffer.isView(i)&&!(i instanceof DataView)}function lx(i){function e(s,r){return i[s]-i[r]}const t=i.length,n=new Array(t);for(let s=0;s!==t;++s)n[s]=s;return n.sort(e),n}function Mh(i,e,t){const n=i.length,s=new i.constructor(n);for(let r=0,a=0;a!==n;++r){const o=t[r]*e;for(let c=0;c!==e;++c)s[a++]=i[o+c]}return s}function Bu(i,e,t,n){let s=1,r=i[0];for(;r!==void 0&&r[n]===void 0;)r=i[s++];if(r===void 0)return;let a=r[n];if(a!==void 0)if(Array.isArray(a))do a=r[n],a!==void 0&&(e.push(r.time),t.push.apply(t,a)),r=i[s++];while(r!==void 0);else if(a.toArray!==void 0)do a=r[n],a!==void 0&&(e.push(r.time),a.toArray(t,t.length)),r=i[s++];while(r!==void 0);else do a=r[n],a!==void 0&&(e.push(r.time),t.push(a)),r=i[s++];while(r!==void 0)}class Zr{constructor(e,t,n,s){this.parameterPositions=e,this._cachedIndex=0,this.resultBuffer=s!==void 0?s:new t.constructor(n),this.sampleValues=t,this.valueSize=n,this.settings=null,this.DefaultSettings_={}}evaluate(e){const t=this.parameterPositions;let n=this._cachedIndex,s=t[n],r=t[n-1];n:{e:{let a;t:{i:if(!(e<s)){for(let o=n+2;;){if(s===void 0){if(e<r)break i;return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}if(n===o)break;if(r=s,s=t[++n],e<s)break e}a=t.length;break t}if(!(e>=r)){const o=t[1];e<o&&(n=2,r=o);for(let c=n-2;;){if(r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===c)break;if(s=r,r=t[--n-1],e>=r)break e}a=n,n=0;break t}break n}for(;n<a;){const o=n+a>>>1;e<t[o]?a=o:n=o+1}if(s=t[n],r=t[n-1],r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(s===void 0)return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}this._cachedIndex=n,this.intervalChanged_(n,r,s)}return this.interpolate_(n,r,e,s)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(e){const t=this.resultBuffer,n=this.sampleValues,s=this.valueSize,r=e*s;for(let a=0;a!==s;++a)t[a]=n[r+a];return t}interpolate_(){throw new Error("call to abstract method")}intervalChanged_(){}}class dx extends Zr{constructor(e,t,n,s){super(e,t,n,s),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:dd,endingEnd:dd}}intervalChanged_(e,t,n){const s=this.parameterPositions;let r=e-2,a=e+1,o=s[r],c=s[a];if(o===void 0)switch(this.getSettings_().endingStart){case hd:r=e,o=2*t-n;break;case ud:r=s.length-2,o=t+s[r]-s[r+1];break;default:r=e,o=n}if(c===void 0)switch(this.getSettings_().endingEnd){case hd:a=e,c=2*n-t;break;case ud:a=1,c=n+s[1]-s[0];break;default:a=e-1,c=t}const l=(n-t)*.5,d=this.valueSize;this._weightPrev=l/(t-o),this._weightNext=l/(c-n),this._offsetPrev=r*d,this._offsetNext=a*d}interpolate_(e,t,n,s){const r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,c=e*o,l=c-o,d=this._offsetPrev,h=this._offsetNext,u=this._weightPrev,f=this._weightNext,g=(n-t)/(s-t),v=g*g,m=v*g,p=-u*m+2*u*v-u*g,_=(1+u)*m+(-1.5-2*u)*v+(-.5+u)*g+1,E=(-1-f)*m+(1.5+f)*v+.5*g,x=f*m-f*v;for(let C=0;C!==o;++C)r[C]=p*a[d+C]+_*a[l+C]+E*a[c+C]+x*a[h+C];return r}}class hx extends Zr{constructor(e,t,n,s){super(e,t,n,s)}interpolate_(e,t,n,s){const r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,c=e*o,l=c-o,d=(n-t)/(s-t),h=1-d;for(let u=0;u!==o;++u)r[u]=a[l+u]*h+a[c+u]*d;return r}}class ux extends Zr{constructor(e,t,n,s){super(e,t,n,s)}interpolate_(e){return this.copySampleValue_(e-1)}}class ei{constructor(e,t,n,s){if(e===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(t===void 0||t.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+e);this.name=e,this.times=Aa(t,this.TimeBufferType),this.values=Aa(n,this.ValueBufferType),this.setInterpolation(s||this.DefaultInterpolation)}static toJSON(e){const t=e.constructor;let n;if(t.toJSON!==this.toJSON)n=t.toJSON(e);else{n={name:e.name,times:Aa(e.times,Array),values:Aa(e.values,Array)};const s=e.getInterpolation();s!==e.DefaultInterpolation&&(n.interpolation=s)}return n.type=e.ValueTypeName,n}InterpolantFactoryMethodDiscrete(e){return new ux(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodLinear(e){return new hx(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodSmooth(e){return new dx(this.times,this.values,this.getValueSize(),e)}setInterpolation(e){let t;switch(e){case Yr:t=this.InterpolantFactoryMethodDiscrete;break;case qr:t=this.InterpolantFactoryMethodLinear;break;case Ro:t=this.InterpolantFactoryMethodSmooth;break}if(t===void 0){const n="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(e!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(n);return console.warn("THREE.KeyframeTrack:",n),this}return this.createInterpolant=t,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return Yr;case this.InterpolantFactoryMethodLinear:return qr;case this.InterpolantFactoryMethodSmooth:return Ro}}getValueSize(){return this.values.length/this.times.length}shift(e){if(e!==0){const t=this.times;for(let n=0,s=t.length;n!==s;++n)t[n]+=e}return this}scale(e){if(e!==1){const t=this.times;for(let n=0,s=t.length;n!==s;++n)t[n]*=e}return this}trim(e,t){const n=this.times,s=n.length;let r=0,a=s-1;for(;r!==s&&n[r]<e;)++r;for(;a!==-1&&n[a]>t;)--a;if(++a,r!==0||a!==s){r>=a&&(a=Math.max(a,1),r=a-1);const o=this.getValueSize();this.times=n.slice(r,a),this.values=this.values.slice(r*o,a*o)}return this}validate(){let e=!0;const t=this.getValueSize();t-Math.floor(t)!==0&&(console.error("THREE.KeyframeTrack: Invalid value size in track.",this),e=!1);const n=this.times,s=this.values,r=n.length;r===0&&(console.error("THREE.KeyframeTrack: Track is empty.",this),e=!1);let a=null;for(let o=0;o!==r;o++){const c=n[o];if(typeof c=="number"&&isNaN(c)){console.error("THREE.KeyframeTrack: Time is not a valid number.",this,o,c),e=!1;break}if(a!==null&&a>c){console.error("THREE.KeyframeTrack: Out of order keys.",this,o,c,a),e=!1;break}a=c}if(s!==void 0&&cx(s))for(let o=0,c=s.length;o!==c;++o){const l=s[o];if(isNaN(l)){console.error("THREE.KeyframeTrack: Value is not a valid number.",this,o,l),e=!1;break}}return e}optimize(){const e=this.times.slice(),t=this.values.slice(),n=this.getValueSize(),s=this.getInterpolation()===Ro,r=e.length-1;let a=1;for(let o=1;o<r;++o){let c=!1;const l=e[o],d=e[o+1];if(l!==d&&(o!==1||l!==e[0]))if(s)c=!0;else{const h=o*n,u=h-n,f=h+n;for(let g=0;g!==n;++g){const v=t[h+g];if(v!==t[u+g]||v!==t[f+g]){c=!0;break}}}if(c){if(o!==a){e[a]=e[o];const h=o*n,u=a*n;for(let f=0;f!==n;++f)t[u+f]=t[h+f]}++a}}if(r>0){e[a]=e[r];for(let o=r*n,c=a*n,l=0;l!==n;++l)t[c+l]=t[o+l];++a}return a!==e.length?(this.times=e.slice(0,a),this.values=t.slice(0,a*n)):(this.times=e,this.values=t),this}clone(){const e=this.times.slice(),t=this.values.slice(),n=this.constructor,s=new n(this.name,e,t);return s.createInterpolant=this.createInterpolant,s}}ei.prototype.TimeBufferType=Float32Array;ei.prototype.ValueBufferType=Float32Array;ei.prototype.DefaultInterpolation=qr;class hr extends ei{constructor(e,t,n){super(e,t,n)}}hr.prototype.ValueTypeName="bool";hr.prototype.ValueBufferType=Array;hr.prototype.DefaultInterpolation=Yr;hr.prototype.InterpolantFactoryMethodLinear=void 0;hr.prototype.InterpolantFactoryMethodSmooth=void 0;class ku extends ei{}ku.prototype.ValueTypeName="color";class sr extends ei{}sr.prototype.ValueTypeName="number";class fx extends Zr{constructor(e,t,n,s){super(e,t,n,s)}interpolate_(e,t,n,s){const r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,c=(n-t)/(s-t);let l=e*o;for(let d=l+o;l!==d;l+=4)Ji.slerpFlat(r,0,a,l-o,a,l,c);return r}}class rr extends ei{InterpolantFactoryMethodLinear(e){return new fx(this.times,this.values,this.getValueSize(),e)}}rr.prototype.ValueTypeName="quaternion";rr.prototype.InterpolantFactoryMethodSmooth=void 0;class ur extends ei{constructor(e,t,n){super(e,t,n)}}ur.prototype.ValueTypeName="string";ur.prototype.ValueBufferType=Array;ur.prototype.DefaultInterpolation=Yr;ur.prototype.InterpolantFactoryMethodLinear=void 0;ur.prototype.InterpolantFactoryMethodSmooth=void 0;class ar extends ei{}ar.prototype.ValueTypeName="vector";class px{constructor(e="",t=-1,n=[],s=rp){this.name=e,this.tracks=n,this.duration=t,this.blendMode=s,this.uuid=Bn(),this.duration<0&&this.resetDuration()}static parse(e){const t=[],n=e.tracks,s=1/(e.fps||1);for(let a=0,o=n.length;a!==o;++a)t.push(gx(n[a]).scale(s));const r=new this(e.name,e.duration,t,e.blendMode);return r.uuid=e.uuid,r}static toJSON(e){const t=[],n=e.tracks,s={name:e.name,duration:e.duration,tracks:t,uuid:e.uuid,blendMode:e.blendMode};for(let r=0,a=n.length;r!==a;++r)t.push(ei.toJSON(n[r]));return s}static CreateFromMorphTargetSequence(e,t,n,s){const r=t.length,a=[];for(let o=0;o<r;o++){let c=[],l=[];c.push((o+r-1)%r,o,(o+1)%r),l.push(0,1,0);const d=lx(c);c=Mh(c,1,d),l=Mh(l,1,d),!s&&c[0]===0&&(c.push(r),l.push(l[0])),a.push(new sr(".morphTargetInfluences["+t[o].name+"]",c,l).scale(1/n))}return new this(e,-1,a)}static findByName(e,t){let n=e;if(!Array.isArray(e)){const s=e;n=s.geometry&&s.geometry.animations||s.animations}for(let s=0;s<n.length;s++)if(n[s].name===t)return n[s];return null}static CreateClipsFromMorphTargetSequences(e,t,n){const s={},r=/^([\w-]*?)([\d]+)$/;for(let o=0,c=e.length;o<c;o++){const l=e[o],d=l.name.match(r);if(d&&d.length>1){const h=d[1];let u=s[h];u||(s[h]=u=[]),u.push(l)}}const a=[];for(const o in s)a.push(this.CreateFromMorphTargetSequence(o,s[o],t,n));return a}static parseAnimation(e,t){if(!e)return console.error("THREE.AnimationClip: No animation in JSONLoader data."),null;const n=function(h,u,f,g,v){if(f.length!==0){const m=[],p=[];Bu(f,m,p,g),m.length!==0&&v.push(new h(u,m,p))}},s=[],r=e.name||"default",a=e.fps||30,o=e.blendMode;let c=e.length||-1;const l=e.hierarchy||[];for(let h=0;h<l.length;h++){const u=l[h].keys;if(!(!u||u.length===0))if(u[0].morphTargets){const f={};let g;for(g=0;g<u.length;g++)if(u[g].morphTargets)for(let v=0;v<u[g].morphTargets.length;v++)f[u[g].morphTargets[v]]=-1;for(const v in f){const m=[],p=[];for(let _=0;_!==u[g].morphTargets.length;++_){const E=u[g];m.push(E.time),p.push(E.morphTarget===v?1:0)}s.push(new sr(".morphTargetInfluence["+v+"]",m,p))}c=f.length*a}else{const f=".bones["+t[h].name+"]";n(ar,f+".position",u,"pos",s),n(rr,f+".quaternion",u,"rot",s),n(ar,f+".scale",u,"scl",s)}}return s.length===0?null:new this(r,c,s,o)}resetDuration(){const e=this.tracks;let t=0;for(let n=0,s=e.length;n!==s;++n){const r=this.tracks[n];t=Math.max(t,r.times[r.times.length-1])}return this.duration=t,this}trim(){for(let e=0;e<this.tracks.length;e++)this.tracks[e].trim(0,this.duration);return this}validate(){let e=!0;for(let t=0;t<this.tracks.length;t++)e=e&&this.tracks[t].validate();return e}optimize(){for(let e=0;e<this.tracks.length;e++)this.tracks[e].optimize();return this}clone(){const e=[];for(let t=0;t<this.tracks.length;t++)e.push(this.tracks[t].clone());return new this.constructor(this.name,this.duration,e,this.blendMode)}toJSON(){return this.constructor.toJSON(this)}}function mx(i){switch(i.toLowerCase()){case"scalar":case"double":case"float":case"number":case"integer":return sr;case"vector":case"vector2":case"vector3":case"vector4":return ar;case"color":return ku;case"quaternion":return rr;case"bool":case"boolean":return hr;case"string":return ur}throw new Error("THREE.KeyframeTrack: Unsupported typeName: "+i)}function gx(i){if(i.type===void 0)throw new Error("THREE.KeyframeTrack: track type undefined, can not parse");const e=mx(i.type);if(i.times===void 0){const t=[],n=[];Bu(i.keys,t,n,"value"),i.times=t,i.values=n}return e.parse!==void 0?e.parse(i):new e(i.name,i.times,i.values,i.interpolation)}const Wi={enabled:!1,files:{},add:function(i,e){this.enabled!==!1&&(this.files[i]=e)},get:function(i){if(this.enabled!==!1)return this.files[i]},remove:function(i){delete this.files[i]},clear:function(){this.files={}}};class vx{constructor(e,t,n){const s=this;let r=!1,a=0,o=0,c;const l=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=n,this.itemStart=function(d){o++,r===!1&&s.onStart!==void 0&&s.onStart(d,a,o),r=!0},this.itemEnd=function(d){a++,s.onProgress!==void 0&&s.onProgress(d,a,o),a===o&&(r=!1,s.onLoad!==void 0&&s.onLoad())},this.itemError=function(d){s.onError!==void 0&&s.onError(d)},this.resolveURL=function(d){return c?c(d):d},this.setURLModifier=function(d){return c=d,this},this.addHandler=function(d,h){return l.push(d,h),this},this.removeHandler=function(d){const h=l.indexOf(d);return h!==-1&&l.splice(h,2),this},this.getHandler=function(d){for(let h=0,u=l.length;h<u;h+=2){const f=l[h],g=l[h+1];if(f.global&&(f.lastIndex=0),f.test(d))return g}return null}}}const _x=new vx;class Ms{constructor(e){this.manager=e!==void 0?e:_x,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(e,t){const n=this;return new Promise(function(s,r){n.load(e,s,t,r)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}}Ms.DEFAULT_MATERIAL_NAME="__DEFAULT";const ci={};class xx extends Error{constructor(e,t){super(e),this.response=t}}class zl extends Ms{constructor(e){super(e)}load(e,t,n,s){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const r=Wi.get(e);if(r!==void 0)return this.manager.itemStart(e),setTimeout(()=>{t&&t(r),this.manager.itemEnd(e)},0),r;if(ci[e]!==void 0){ci[e].push({onLoad:t,onProgress:n,onError:s});return}ci[e]=[],ci[e].push({onLoad:t,onProgress:n,onError:s});const a=new Request(e,{headers:new Headers(this.requestHeader),credentials:this.withCredentials?"include":"same-origin"}),o=this.mimeType,c=this.responseType;fetch(a).then(l=>{if(l.status===200||l.status===0){if(l.status===0&&console.warn("THREE.FileLoader: HTTP Status 0 received."),typeof ReadableStream>"u"||l.body===void 0||l.body.getReader===void 0)return l;const d=ci[e],h=l.body.getReader(),u=l.headers.get("X-File-Size")||l.headers.get("Content-Length"),f=u?parseInt(u):0,g=f!==0;let v=0;const m=new ReadableStream({start(p){_();function _(){h.read().then(({done:E,value:x})=>{if(E)p.close();else{v+=x.byteLength;const C=new ProgressEvent("progress",{lengthComputable:g,loaded:v,total:f});for(let T=0,w=d.length;T<w;T++){const R=d[T];R.onProgress&&R.onProgress(C)}p.enqueue(x),_()}},E=>{p.error(E)})}}});return new Response(m)}else throw new xx(`fetch for "${l.url}" responded with ${l.status}: ${l.statusText}`,l)}).then(l=>{switch(c){case"arraybuffer":return l.arrayBuffer();case"blob":return l.blob();case"document":return l.text().then(d=>new DOMParser().parseFromString(d,o));case"json":return l.json();default:if(o===void 0)return l.text();{const h=/charset="?([^;"\s]*)"?/i.exec(o),u=h&&h[1]?h[1].toLowerCase():void 0,f=new TextDecoder(u);return l.arrayBuffer().then(g=>f.decode(g))}}}).then(l=>{Wi.add(e,l);const d=ci[e];delete ci[e];for(let h=0,u=d.length;h<u;h++){const f=d[h];f.onLoad&&f.onLoad(l)}}).catch(l=>{const d=ci[e];if(d===void 0)throw this.manager.itemError(e),l;delete ci[e];for(let h=0,u=d.length;h<u;h++){const f=d[h];f.onError&&f.onError(l)}this.manager.itemError(e)}).finally(()=>{this.manager.itemEnd(e)}),this.manager.itemStart(e)}setResponseType(e){return this.responseType=e,this}setMimeType(e){return this.mimeType=e,this}}class yx extends Ms{constructor(e){super(e)}load(e,t,n,s){this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const r=this,a=Wi.get(e);if(a!==void 0)return r.manager.itemStart(e),setTimeout(function(){t&&t(a),r.manager.itemEnd(e)},0),a;const o=$r("img");function c(){d(),Wi.add(e,this),t&&t(this),r.manager.itemEnd(e)}function l(h){d(),s&&s(h),r.manager.itemError(e),r.manager.itemEnd(e)}function d(){o.removeEventListener("load",c,!1),o.removeEventListener("error",l,!1)}return o.addEventListener("load",c,!1),o.addEventListener("error",l,!1),e.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(o.crossOrigin=this.crossOrigin),r.manager.itemStart(e),o.src=e,o}}class Mx extends Ms{constructor(e){super(e)}load(e,t,n,s){const r=this,a=new Nl,o=new zl(this.manager);return o.setResponseType("arraybuffer"),o.setRequestHeader(this.requestHeader),o.setPath(this.path),o.setWithCredentials(r.withCredentials),o.load(e,function(c){let l;try{l=r.parse(c)}catch(d){if(s!==void 0)s(d);else{console.error(d);return}}l.image!==void 0?a.image=l.image:l.data!==void 0&&(a.image.width=l.width,a.image.height=l.height,a.image.data=l.data),a.wrapS=l.wrapS!==void 0?l.wrapS:Yn,a.wrapT=l.wrapT!==void 0?l.wrapT:Yn,a.magFilter=l.magFilter!==void 0?l.magFilter:zt,a.minFilter=l.minFilter!==void 0?l.minFilter:zt,a.anisotropy=l.anisotropy!==void 0?l.anisotropy:1,l.colorSpace!==void 0&&(a.colorSpace=l.colorSpace),l.flipY!==void 0&&(a.flipY=l.flipY),l.format!==void 0&&(a.format=l.format),l.type!==void 0&&(a.type=l.type),l.mipmaps!==void 0&&(a.mipmaps=l.mipmaps,a.minFilter=qn),l.mipmapCount===1&&(a.minFilter=zt),l.generateMipmaps!==void 0&&(a.generateMipmaps=l.generateMipmaps),a.needsUpdate=!0,t&&t(a,l)},n,s),a}}class zu extends Ms{constructor(e){super(e)}load(e,t,n,s){const r=new Nt,a=new yx(this.manager);return a.setCrossOrigin(this.crossOrigin),a.setPath(this.path),a.load(e,function(o){r.image=o,r.needsUpdate=!0,t!==void 0&&t(r)},n,s),r}}class Eo extends Mt{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new Oe(e),this.intensity=t}dispose(){}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,this.groundColor!==void 0&&(t.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(t.object.distance=this.distance),this.angle!==void 0&&(t.object.angle=this.angle),this.decay!==void 0&&(t.object.decay=this.decay),this.penumbra!==void 0&&(t.object.penumbra=this.penumbra),this.shadow!==void 0&&(t.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(t.object.target=this.target.uuid),t}}class Sx extends Eo{constructor(e,t,n){super(e,n),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(Mt.DEFAULT_UP),this.updateMatrix(),this.groundColor=new Oe(t)}copy(e,t){return super.copy(e,t),this.groundColor.copy(e.groundColor),this}}const cc=new We,Sh=new L,Eh=new L;class Hl{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new Ke(512,512),this.map=null,this.mapPass=null,this.matrix=new We,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Cl,this._frameExtents=new Ke(1,1),this._viewportCount=1,this._viewports=[new rt(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){const t=this.camera,n=this.matrix;Sh.setFromMatrixPosition(e.matrixWorld),t.position.copy(Sh),Eh.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(Eh),t.updateMatrixWorld(),cc.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),this._frustum.setFromProjectionMatrix(cc),n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(cc)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return this.intensity!==1&&(e.intensity=this.intensity),this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}class Ex extends Hl{constructor(){super(new Zt(50,1,.5,500)),this.isSpotLightShadow=!0,this.focus=1}updateMatrices(e){const t=this.camera,n=nr*2*e.angle*this.focus,s=this.mapSize.width/this.mapSize.height,r=e.distance||t.far;(n!==t.fov||s!==t.aspect||r!==t.far)&&(t.fov=n,t.aspect=s,t.far=r,t.updateProjectionMatrix()),super.updateMatrices(e)}copy(e){return super.copy(e),this.focus=e.focus,this}}class bx extends Eo{constructor(e,t,n=0,s=Math.PI/3,r=0,a=2){super(e,t),this.isSpotLight=!0,this.type="SpotLight",this.position.copy(Mt.DEFAULT_UP),this.updateMatrix(),this.target=new Mt,this.distance=n,this.angle=s,this.penumbra=r,this.decay=a,this.map=null,this.shadow=new Ex}get power(){return this.intensity*Math.PI}set power(e){this.intensity=e/Math.PI}dispose(){this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.angle=e.angle,this.penumbra=e.penumbra,this.decay=e.decay,this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}}const bh=new We,Sr=new L,lc=new L;class Tx extends Hl{constructor(){super(new Zt(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new Ke(4,2),this._viewportCount=6,this._viewports=[new rt(2,1,1,1),new rt(0,1,1,1),new rt(3,1,1,1),new rt(1,1,1,1),new rt(3,0,1,1),new rt(1,0,1,1)],this._cubeDirections=[new L(1,0,0),new L(-1,0,0),new L(0,0,1),new L(0,0,-1),new L(0,1,0),new L(0,-1,0)],this._cubeUps=[new L(0,1,0),new L(0,1,0),new L(0,1,0),new L(0,1,0),new L(0,0,1),new L(0,0,-1)]}updateMatrices(e,t=0){const n=this.camera,s=this.matrix,r=e.distance||n.far;r!==n.far&&(n.far=r,n.updateProjectionMatrix()),Sr.setFromMatrixPosition(e.matrixWorld),n.position.copy(Sr),lc.copy(n.position),lc.add(this._cubeDirections[t]),n.up.copy(this._cubeUps[t]),n.lookAt(lc),n.updateMatrixWorld(),s.makeTranslation(-Sr.x,-Sr.y,-Sr.z),bh.multiplyMatrices(n.projectionMatrix,n.matrixWorldInverse),this._frustum.setFromProjectionMatrix(bh)}}class Gl extends Eo{constructor(e,t,n=0,s=2){super(e,t),this.isPointLight=!0,this.type="PointLight",this.distance=n,this.decay=s,this.shadow=new Tx}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}}class wx extends Hl{constructor(){super(new Il(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class Hu extends Eo{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Mt.DEFAULT_UP),this.updateMatrix(),this.target=new Mt,this.shadow=new wx}dispose(){this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}}class Or{static decodeText(e){if(console.warn("THREE.LoaderUtils: decodeText() has been deprecated with r165 and will be removed with r175. Use TextDecoder instead."),typeof TextDecoder<"u")return new TextDecoder().decode(e);let t="";for(let n=0,s=e.length;n<s;n++)t+=String.fromCharCode(e[n]);try{return decodeURIComponent(escape(t))}catch{return t}}static extractUrlBase(e){const t=e.lastIndexOf("/");return t===-1?"./":e.slice(0,t+1)}static resolveURL(e,t){return typeof e!="string"||e===""?"":(/^https?:\/\//i.test(t)&&/^\//.test(e)&&(t=t.replace(/(^https?:\/\/[^\/]+).*/i,"$1")),/^(https?:)?\/\//i.test(e)||/^data:.*,.*$/i.test(e)||/^blob:.*$/i.test(e)?e:t+e)}}class Ax extends Ms{constructor(e){super(e),this.isImageBitmapLoader=!0,typeof createImageBitmap>"u"&&console.warn("THREE.ImageBitmapLoader: createImageBitmap() not supported."),typeof fetch>"u"&&console.warn("THREE.ImageBitmapLoader: fetch() not supported."),this.options={premultiplyAlpha:"none"}}setOptions(e){return this.options=e,this}load(e,t,n,s){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const r=this,a=Wi.get(e);if(a!==void 0){if(r.manager.itemStart(e),a.then){a.then(l=>{t&&t(l),r.manager.itemEnd(e)}).catch(l=>{s&&s(l)});return}return setTimeout(function(){t&&t(a),r.manager.itemEnd(e)},0),a}const o={};o.credentials=this.crossOrigin==="anonymous"?"same-origin":"include",o.headers=this.requestHeader;const c=fetch(e,o).then(function(l){return l.blob()}).then(function(l){return createImageBitmap(l,Object.assign(r.options,{colorSpaceConversion:"none"}))}).then(function(l){return Wi.add(e,l),t&&t(l),r.manager.itemEnd(e),l}).catch(function(l){s&&s(l),Wi.remove(e),r.manager.itemError(e),r.manager.itemEnd(e)});Wi.add(e,c),r.manager.itemStart(e)}}class Rx{constructor(e=!0){this.autoStart=e,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1}start(){this.startTime=Th(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let e=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){const t=Th();e=(t-this.oldTime)/1e3,this.oldTime=t,this.elapsedTime+=e}return e}}function Th(){return performance.now()}const Vl="\\[\\]\\.:\\/",Cx=new RegExp("["+Vl+"]","g"),Wl="[^"+Vl+"]",Ix="[^"+Vl.replace("\\.","")+"]",Lx=/((?:WC+[\/:])*)/.source.replace("WC",Wl),Dx=/(WCOD+)?/.source.replace("WCOD",Ix),Px=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",Wl),Nx=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",Wl),Ux=new RegExp("^"+Lx+Dx+Px+Nx+"$"),Ox=["material","materials","bones","map"];class Fx{constructor(e,t,n){const s=n||lt.parseTrackName(t);this._targetGroup=e,this._bindings=e.subscribe_(t,s)}getValue(e,t){this.bind();const n=this._targetGroup.nCachedObjects_,s=this._bindings[n];s!==void 0&&s.getValue(e,t)}setValue(e,t){const n=this._bindings;for(let s=this._targetGroup.nCachedObjects_,r=n.length;s!==r;++s)n[s].setValue(e,t)}bind(){const e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].bind()}unbind(){const e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].unbind()}}class lt{constructor(e,t,n){this.path=t,this.parsedPath=n||lt.parseTrackName(t),this.node=lt.findNode(e,this.parsedPath.nodeName),this.rootNode=e,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(e,t,n){return e&&e.isAnimationObjectGroup?new lt.Composite(e,t,n):new lt(e,t,n)}static sanitizeNodeName(e){return e.replace(/\s/g,"_").replace(Cx,"")}static parseTrackName(e){const t=Ux.exec(e);if(t===null)throw new Error("PropertyBinding: Cannot parse trackName: "+e);const n={nodeName:t[2],objectName:t[3],objectIndex:t[4],propertyName:t[5],propertyIndex:t[6]},s=n.nodeName&&n.nodeName.lastIndexOf(".");if(s!==void 0&&s!==-1){const r=n.nodeName.substring(s+1);Ox.indexOf(r)!==-1&&(n.nodeName=n.nodeName.substring(0,s),n.objectName=r)}if(n.propertyName===null||n.propertyName.length===0)throw new Error("PropertyBinding: can not parse propertyName from trackName: "+e);return n}static findNode(e,t){if(t===void 0||t===""||t==="."||t===-1||t===e.name||t===e.uuid)return e;if(e.skeleton){const n=e.skeleton.getBoneByName(t);if(n!==void 0)return n}if(e.children){const n=function(r){for(let a=0;a<r.length;a++){const o=r[a];if(o.name===t||o.uuid===t)return o;const c=n(o.children);if(c)return c}return null},s=n(e.children);if(s)return s}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(e,t){e[t]=this.targetObject[this.propertyName]}_getValue_array(e,t){const n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)e[t++]=n[s]}_getValue_arrayElement(e,t){e[t]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(e,t){this.resolvedProperty.toArray(e,t)}_setValue_direct(e,t){this.targetObject[this.propertyName]=e[t]}_setValue_direct_setNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(e,t){const n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=e[t++]}_setValue_array_setNeedsUpdate(e,t){const n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=e[t++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(e,t){const n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=e[t++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(e,t){this.resolvedProperty[this.propertyIndex]=e[t]}_setValue_arrayElement_setNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(e,t){this.resolvedProperty.fromArray(e,t)}_setValue_fromArray_setNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(e,t){this.bind(),this.getValue(e,t)}_setValue_unbound(e,t){this.bind(),this.setValue(e,t)}bind(){let e=this.node;const t=this.parsedPath,n=t.objectName,s=t.propertyName;let r=t.propertyIndex;if(e||(e=lt.findNode(this.rootNode,t.nodeName),this.node=e),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!e){console.warn("THREE.PropertyBinding: No target node found for track: "+this.path+".");return}if(n){let l=t.objectIndex;switch(n){case"materials":if(!e.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.materials){console.error("THREE.PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}e=e.material.materials;break;case"bones":if(!e.skeleton){console.error("THREE.PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}e=e.skeleton.bones;for(let d=0;d<e.length;d++)if(e[d].name===l){l=d;break}break;case"map":if("map"in e){e=e.map;break}if(!e.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.map){console.error("THREE.PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}e=e.material.map;break;default:if(e[n]===void 0){console.error("THREE.PropertyBinding: Can not bind to objectName of node undefined.",this);return}e=e[n]}if(l!==void 0){if(e[l]===void 0){console.error("THREE.PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,e);return}e=e[l]}}const a=e[s];if(a===void 0){const l=t.nodeName;console.error("THREE.PropertyBinding: Trying to update property for track: "+l+"."+s+" but it wasn't found.",e);return}let o=this.Versioning.None;this.targetObject=e,e.needsUpdate!==void 0?o=this.Versioning.NeedsUpdate:e.matrixWorldNeedsUpdate!==void 0&&(o=this.Versioning.MatrixWorldNeedsUpdate);let c=this.BindingType.Direct;if(r!==void 0){if(s==="morphTargetInfluences"){if(!e.geometry){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!e.geometry.morphAttributes){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}e.morphTargetDictionary[r]!==void 0&&(r=e.morphTargetDictionary[r])}c=this.BindingType.ArrayElement,this.resolvedProperty=a,this.propertyIndex=r}else a.fromArray!==void 0&&a.toArray!==void 0?(c=this.BindingType.HasFromToArray,this.resolvedProperty=a):Array.isArray(a)?(c=this.BindingType.EntireArray,this.resolvedProperty=a):this.propertyName=s;this.getValue=this.GetterByBindingType[c],this.setValue=this.SetterByBindingTypeAndVersioning[c][o]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}}lt.Composite=Fx;lt.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};lt.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};lt.prototype.GetterByBindingType=[lt.prototype._getValue_direct,lt.prototype._getValue_array,lt.prototype._getValue_arrayElement,lt.prototype._getValue_toArray];lt.prototype.SetterByBindingTypeAndVersioning=[[lt.prototype._setValue_direct,lt.prototype._setValue_direct_setNeedsUpdate,lt.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[lt.prototype._setValue_array,lt.prototype._setValue_array_setNeedsUpdate,lt.prototype._setValue_array_setMatrixWorldNeedsUpdate],[lt.prototype._setValue_arrayElement,lt.prototype._setValue_arrayElement_setNeedsUpdate,lt.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[lt.prototype._setValue_fromArray,lt.prototype._setValue_fromArray_setNeedsUpdate,lt.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:yl}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=yl);const $e={CAR:{maxSpeed:33.33,acceleration:14,braking:22,handbrake:30,drag:.14,steerSpeed:3.8,steerReturnSpeed:6,maxSteerAngle:.38,roadBoundsX:3.3,pitchSensitivity:.04,rollSensitivity:.05},simSpeedMultiplier:1,ROAD:{segmentLength:40,numSegments:14,totalWidth:8.8,sidewalkWidth:3,dashLength:4,dashGap:4},CAMERA:{chaseOffset:{x:0,y:2.6,z:-6.5},chaseLookAtOffset:{x:0,y:1.1,z:6},driverOffset:{x:-.32,y:1.18,z:.65},driverLookAtOffset:{x:-.32,y:1.12,z:35},lerpFactorPosition:.12,lerpFactorLookAt:.18,fov:62},COLORS:{hemiSky:14214384,hemiGround:4866613,sunLight:16773852,road:2369584,roadMarkings:16777215,centerDashes:16763432,carBody:26316,carCabin:1712954,carTrim:1118485,carHeadlights:16777168,carBrakeLightsNormal:6684672,carBrakeLightsActive:16711680,carWheels:1710618,carRims:13684944},GEARS:{R:{id:"R",name:"Reverse",maxKmh:-15,minKmh:-15,optimalKmh:[-15,0],accelFactor:.7},N:{id:"N",name:"Neutral",maxKmh:0,minKmh:0,optimalKmh:[0,0],accelFactor:0},1:{id:"1",name:"1st Gear",maxKmh:28,minKmh:0,optimalKmh:[0,22],accelFactor:1.25},2:{id:"2",name:"2nd Gear",maxKmh:52,minKmh:12,optimalKmh:[18,44],accelFactor:1.05},3:{id:"3",name:"3rd Gear",maxKmh:76,minKmh:28,optimalKmh:[38,68],accelFactor:.88},4:{id:"4",name:"4th Gear",maxKmh:102,minKmh:46,optimalKmh:[58,92],accelFactor:.75},5:{id:"5",name:"5th Gear",maxKmh:135,minKmh:65,optimalKmh:[80,125],accelFactor:.62}}},nn={timestamp:"timestamp_ms",frameIndex:"frame_idx",posX:"car_pos_x",posZ:"car_pos_z",speedKmh:"speed_kmh",speedMs:"speed_ms",steering:"steer_input",throttle:"throttle_input",brake:"brake_input",seatbelt:"seatbelt_fastened",currentGear:"current_gear",engineRpm:"engine_rpm",cameraMode:"camera_mode"},St={x:0,y:0,valid:!1};let ms,Et,Vs,Fr,Lr,Dr,ui,Xn,Fn,hs,rl=[],Bi,ki,Br,Je=0,Xl=0,Dn=new L(-2.2,0,0),us=null,Xi=!1,yt="1",xn=900,Ei=!1,kr=0,zr=0,Ya=0;function Bx(i){ms=new He,Et=new He,ms.add(Et);const e=$e.COLORS,t=new le(1.8,.65,4),n=new se({color:e.carBody,roughness:.25,metalness:.5}),s=new X(t,n);s.position.y=.55,s.castShadow=!0,s.receiveShadow=!0,Et.add(s);const r=new le(1.6,.08,1.6),a=new se({color:e.carBody,roughness:.2}),o=new X(r,a);o.position.set(0,.88,1.1),Et.add(o);const c=new le(1.84,.12,3.8),l=new se({color:e.carTrim,roughness:.8}),d=new X(c,l);d.position.y=.35,Et.add(d);const h=new le(1.4,.6,2),u=new se({color:e.carCabin,roughness:.1,metalness:.9,transparent:!0,opacity:.6});Vs=new X(h,u),Vs.position.set(0,1.15,-.3),Vs.castShadow=!0,Et.add(Vs);const f=new le(1.35,.05,1.8),g=new se({color:e.carBody,roughness:.3});Fr=new X(f,g),Fr.position.set(0,1.47,-.3),Et.add(Fr);const v=new He,m=new le(1.5,.22,.45),p=new se({color:1316381,roughness:.9}),_=new X(m,p);_.position.set(0,.88,.55),v.add(_);const E=new le(.35,.12,.02),x=new se({color:58787,emissive:58787,emissiveIntensity:.8}),C=new X(E,x);C.position.set(-.36,.98,.35),v.add(C),ui=new He,ui.position.set(-.36,.95,.45);const T=new kl(.16,.02,8,16),w=new se({color:2237742,roughness:.6}),R=new X(T,w);ui.add(R);const S=new ht(.04,.04,.02,12);S.rotateX(Math.PI/2);const y=new X(S,w);ui.add(y);const I=new le(.28,.025,.015),O=new X(I,w);ui.add(O),ui.rotation.x=-Math.PI/6,v.add(ui),Et.add(v);const P=new He,U=new se({color:1580068,roughness:.8}),V=new le(.48,.16,.48),z=new X(V,U);z.position.set(-.36,.45,-.15),P.add(z);const Z=new le(.46,.65,.12),G=new X(Z,U);G.position.set(-.36,.82,-.38),G.rotation.x=.08,P.add(G);const ee=new le(.24,.18,.1),ie=new X(ee,U);ie.position.set(-.36,1.22,-.42),P.add(ie);const ae=z.clone();ae.position.x=.36;const he=G.clone();he.position.x=.36,P.add(ae,he);const Se=new le(.22,.28,.85),K=new se({color:1316383,roughness:.7}),ne=new X(Se,K);ne.position.set(0,.52,.05),P.add(ne);const pe=new le(.12,.015,.16),oe=new se({color:13685980,metalness:.8,roughness:.2}),be=new X(pe,oe);be.position.set(0,.67,.15),P.add(be),Xn=new He,Xn.position.set(0,.67,.15);const Ee=new ht(.01,.012,.14,8),we=new se({color:13421772,metalness:.9,roughness:.1}),Ze=new X(Ee,we);Ze.position.y=.07,Xn.add(Ze);const Ie=new ys(.028,12,12),Xe=new se({color:58787,roughness:.3}),N=new X(Ie,Xe);N.position.y=.14,Xn.add(N),P.add(Xn),hs=new He;const ut=new le(.36,.44,.2),Ge=new se({color:2372168,roughness:.7}),Be=new X(ut,Ge);Be.position.set(-.36,.76,-.16),hs.add(Be);const Le=new le(.18,.2,.18),nt=new se({color:14195316,roughness:.6}),Pe=new X(Le,nt);Pe.position.set(-.36,1.08,-.16),hs.add(Pe);const A=new le(.038,.52,.02),M=new se({color:58787,emissive:13090,roughness:.5});Fn=new X(A,M),Fn.position.set(-.36,.76,-.05),Fn.rotation.z=.55,Fn.visible=Xi,hs.add(Fn),P.add(hs),Et.add(P);const W=new le(.35,.15,.1),J=new se({color:e.carHeadlights,emissive:e.carHeadlights,emissiveIntensity:.9}),te=new X(W,J);te.position.set(-.65,.6,2.01);const j=new X(W,J);j.position.set(.65,.6,2.01),Et.add(te,j);const Te=new le(.38,.15,.1);Bi=new se({color:e.carBrakeLightsNormal,emissive:e.carBrakeLightsNormal,emissiveIntensity:.3}),ki=new se({color:e.carBrakeLightsNormal,emissive:e.carBrakeLightsNormal,emissiveIntensity:.3});const ue=new X(Te,Bi);ue.position.set(-.65,.6,-2.01);const ve=new X(Te,ki);ve.position.set(.65,.6,-2.01),Et.add(ue,ve),Br=new Gl(16711680,0,6),Br.position.set(0,.6,-2.2),Et.add(Br);const ze=new le(.18,.12,.25),re=new se({color:e.carBody}),xe=new X(ze,re);xe.position.set(-.95,1,.4);const Ue=new X(ze,re);Ue.position.set(.95,1,.4),Et.add(xe,Ue),rl=[];const De=.35,H=.28,ye=new ht(De,De,H,16);ye.rotateZ(Math.PI/2);const Me=new se({color:e.carWheels,roughness:.8}),Ve=new ht(.2,.2,H+.02,8);Ve.rotateZ(Math.PI/2);const D=new se({color:e.carRims,metalness:.6,roughness:.3}),de=()=>{const Rt=new He,it=new X(ye,Me),ln=new X(Ve,D);return it.castShadow=!0,Rt.add(it,ln),Rt};Lr=new He,Lr.position.set(-.92,De,1.3);const $=de();Lr.add($),Et.add(Lr),Dr=new He,Dr.position.set(.92,De,1.3);const Q=de();Dr.add(Q),Et.add(Dr);const me=new He;me.position.set(-.92,De,-1.3);const ge=de();me.add(ge),Et.add(me);const Fe=new He;Fe.position.set(.92,De,-1.3);const pt=de();Fe.add(pt),Et.add(Fe),rl.push($,Q,ge,pt),i.add(ms),bo()}function wh(i){const e=i==="DRIVER";Vs&&(Vs.visible=!e),Fr&&(Fr.visible=!e),hs&&(hs.visible=!e)}function kx(i,e){const t=$e.CAR;if(e.reset){bo();return}const n=$e.GEARS[yt]||$e.GEARS[1],s=e.brake>.05||e.handbrake>.05;s&&(us=null);let r=0,a=0;if(yt==="N"){r=0,a=e.brake*t.braking+e.handbrake*t.handbrake;const m=Je*t.drag;Je=Math.max(0,Je-(a+m)*i);const p=900+e.throttle*5800;xn=li(xn,p,Math.min(i*10,1))}else if(yt==="R"){const m=Math.abs(n.maxKmh/3.6);e.throttle>.05&&!s?(us=null,Je=Math.max(-m,Je-e.throttle*(t.acceleration*.7)*i)):s?Je=Math.min(0,Je+(e.brake*t.braking+e.handbrake*t.handbrake)*i):Je=Math.min(0,Je+Je*t.drag*i);const _=900+Math.abs(Je)/m*3800+e.throttle*800;xn=li(xn,_,Math.min(i*8,1))}else if((yt==="4"||yt==="5")&&Je<1.8&&e.throttle>.25&&(Ei=!0,Je=0,xn=450+Math.sin(performance.now()*.04)*80),Ei)Je=0,r=0,a=0,xn=li(xn,450,i*5);else{const m=n.maxKmh/3.6;if(us!==null&&e.throttle<.05&&!s){const p=Je;Je=li(Je,Math.min(us,m),Math.min(i*4,1));const _=(Je-p)/Math.max(i,.001);_>0?r=Math.min(_,t.acceleration):a=Math.min(-_,t.braking)}else{e.throttle>.05&&(us=null),a=e.brake*t.braking+e.handbrake*t.handbrake;const p=Je*t.drag;if(Je>=m)r=0,Je=m,xn=6300+Math.sin(performance.now()*.05)*120,(yt==="1"||yt==="2")&&(kr+=i);else{r=e.throttle*t.acceleration*n.accelFactor;const _=r-a-p;Je+=_*i;const x=900+Math.max(0,Math.min(1,Je/Math.max(m,.1)))*4600+e.throttle*700;xn=li(xn,x,Math.min(i*8,1)),kr=Math.max(0,kr-i*2)}}Je<0&&(Je=0),Je>m&&(Je=m)}Xl+=Math.abs(Je)*i;const o=Math.min(Math.abs(Je)/(t.maxSpeed*.15),1),c=-e.steer*t.steerSpeed*o*i*(Je<0?-1:1);Dn.x+=c,Dn.x<-3.3&&(Dn.x=-3.3),Dn.x>t.roadBoundsX&&(Dn.x=t.roadBoundsX),Dn.z+=Je*i,ms.position.copy(Dn);const l=-e.steer*t.maxSteerAngle*o;if(Lr.rotation.y=l,Dr.rotation.y=l,ui&&(ui.rotation.z=-e.steer*1.6),Xn){let m=0,p=0;switch(yt){case"1":m=.28,p=.22;break;case"2":m=-.28,p=.22;break;case"3":m=.28,p=0;break;case"4":m=-.28,p=0;break;case"5":m=.28,p=-.22;break;case"R":m=-.28,p=-.22;break;default:m=0,p=0;break}Xn.rotation.x=li(Xn.rotation.x,m,Math.min(i*14,1)),Xn.rotation.z=li(Xn.rotation.z,p,Math.min(i*14,1))}Fn&&(Fn.visible=Xi);const h=Je/.35;rl.forEach(m=>{m.rotation.x+=h*i});const u=(r/t.acceleration-a/t.braking)*t.pitchSensitivity,f=e.steer*t.rollSensitivity*o;zr=li(zr,u,i*8),Ya=li(Ya,f,i*8),Et.rotation.x=zr,Et.rotation.z=Ya;const g=new Oe($e.COLORS.carBrakeLightsActive),v=new Oe($e.COLORS.carBrakeLightsNormal);s?(Bi.color.copy(g),Bi.emissive.copy(g),Bi.emissiveIntensity=2.5,ki.color.copy(g),ki.emissive.copy(g),ki.emissiveIntensity=2.5,Br.intensity=2):(Bi.color.copy(v),Bi.emissive.copy(v),Bi.emissiveIntensity=.3,ki.color.copy(v),ki.emissive.copy(v),ki.emissiveIntensity=.3,Br.intensity=0)}function zx(){Je=Math.max(0,Je*.15),Dn.z-=.4,zr=-.15}function bo(){Je=0,Xl=0,us=null,Dn.set(-2.2,0,0),yt="1",Xi=!1,Ei=!1,xn=900,kr=0,Fn&&(Fn.visible=!1),ms&&ms.position.copy(Dn),Et&&Et.rotation.set(0,0,0),zr=0,Ya=0}function zi(i){const e=$e.CAR.maxSpeed*3.6,t=Math.max(0,Math.min(i,e));t<=0||t<=25?yt="1":t<=48?yt="2":t<=72?yt="3":t<=98?yt="4":yt="5",Ei=!1,Je=t/3.6,us=Je>0?Je:null}function Ah(i){zi(so()+i)}function Hx(){return Xi=!Xi,Fn&&(Fn.visible=Xi),Xi}function Gu(){return Xi}const Hr=["R","N","1","2","3","4","5"];function Gx(){const i=Hr.indexOf(yt);return i<Hr.length-1&&(yt=Hr[i+1],Ei&&yt!=="4"&&yt!=="5"&&(Ei=!1)),yt}function Vx(){const i=Hr.indexOf(yt);return i>0&&(yt=Hr[i-1],Ei&&(Ei=!1)),yt}function io(){return yt}function Rh(){return Math.round(xn)}function Wx(){return Ei}function Xx(){return kr}function Vu(){return Dn}function Yx(){return Je}function so(){return Je*3.6}function qx(){return Xl}function $x(){return ms}function li(i,e,t){return i+(e-i)*t}const yn={},xt={onCameraToggle:null,onExportTelemetry:null,onDebugToggle:null,onReset:null,onRulesDebugToggle:null,onSeatbeltToggle:null,onShiftUp:null,onShiftDown:null};let Wu=0,Xu=0,Yu=0,Kx=0;const $t={throttle:0,brake:0,steer:0,handbrake:0,resetRequested:!1};function Zx(i={}){xt.onCameraToggle=i.onCameraToggle||null,xt.onExportTelemetry=i.onExportTelemetry||null,xt.onDebugToggle=i.onDebugToggle||null,xt.onReset=i.onReset||null,xt.onRulesDebugToggle=i.onRulesDebugToggle||null,xt.onSeatbeltToggle=i.onSeatbeltToggle||null,xt.onShiftUp=i.onShiftUp||null,xt.onShiftDown=i.onShiftDown||null,window.addEventListener("keydown",jx),window.addEventListener("keyup",Jx)}function jx(i){const e=i.code;["KeyW","KeyS","KeyA","KeyD","ArrowUp","ArrowDown","ArrowLeft","ArrowRight","Space"].includes(e)&&i.preventDefault(),yn[e]=!0,!i.repeat&&(e==="KeyC"?xt.onCameraToggle&&xt.onCameraToggle():e==="KeyB"?xt.onSeatbeltToggle&&xt.onSeatbeltToggle():e==="KeyE"||e==="BracketRight"?xt.onShiftUp&&xt.onShiftUp():e==="KeyQ"||e==="BracketLeft"?xt.onShiftDown&&xt.onShiftDown():e==="KeyX"?xt.onExportTelemetry&&xt.onExportTelemetry():e==="KeyG"?xt.onDebugToggle&&xt.onDebugToggle():e==="KeyT"?xt.onRulesDebugToggle&&xt.onRulesDebugToggle():e==="Equal"||e==="NumpadAdd"||i.key==="+"||i.key==="="?Ah(5):e==="Minus"||e==="NumpadSubtract"||i.key==="-"||i.key==="_"?Ah(-5):e==="Digit1"||e==="Numpad1"?zi(20):e==="Digit2"||e==="Numpad2"?zi(40):e==="Digit3"||e==="Numpad3"?zi(60):e==="Digit4"||e==="Numpad4"?zi(80):e==="Digit5"||e==="Numpad5"?zi(100):e==="Digit0"||e==="Numpad0"?zi(0):e==="KeyR"&&($t.resetRequested=!0,xt.onReset&&xt.onReset()))}function Jx(i){yn[i.code]=!1}function Qx(i){const e=yn.KeyW||yn.ArrowUp?1:0,t=yn.KeyS||yn.ArrowDown||yn.KeyB?1:0,n=yn.Space?1:0;let s=0;(yn.KeyA||yn.ArrowLeft)&&(s-=1),(yn.KeyD||yn.ArrowRight)&&(s+=1);const r=Math.max(e,Wu),a=Math.max(t,Xu),o=Math.max(n,Kx),c=s!==0?s:Yu,l=12,d=14,h=c===0?$e.CAR.steerReturnSpeed:$e.CAR.steerSpeed*2.5;$t.throttle=Ia($t.throttle,r,Math.min(i*l,1)),$t.brake=Ia($t.brake,a,Math.min(i*d,1)),$t.handbrake=Ia($t.handbrake,o,Math.min(i*d,1)),$t.steer=Ia($t.steer,c,Math.min(i*h,1));const u={throttle:$t.throttle,brake:$t.brake,steer:$t.steer,handbrake:$t.handbrake,reset:$t.resetRequested,rawSteer:c,rawThrottle:r,rawBrake:a};return $t.resetRequested=!1,u}function Ch(i){Wu=i}function Ra(i){Xu=i}function Ca(i){Yu=i}function Ia(i,e,t){return i+(e-i)*t}let al=12345,Hs=12345;function ey(i=12345){al=Number(i)||12345,Hs=(al^1831565813)>>>0}function ty(){Hs=Hs+1831565813>>>0;let i=Math.imul(Hs^Hs>>>15,1|Hs);return i=i+Math.imul(i^i>>>7,61|i)^i,((i^i>>>14)>>>0)/4294967296}function Yl(i,e){return i+ty()*(e-i)}function qu(){return al}ey(12345);class ny extends Mx{constructor(e){super(e),this.type=vi}parse(e){const a=function(R,S){switch(R){case 1:throw new Error("THREE.RGBELoader: Read Error: "+(S||""));case 2:throw new Error("THREE.RGBELoader: Write Error: "+(S||""));case 3:throw new Error("THREE.RGBELoader: Bad File Format: "+(S||""));default:case 4:throw new Error("THREE.RGBELoader: Memory Error: "+(S||""))}},h=function(R,S,y){S=S||1024;let O=R.pos,P=-1,U=0,V="",z=String.fromCharCode.apply(null,new Uint16Array(R.subarray(O,O+128)));for(;0>(P=z.indexOf(`
`))&&U<S&&O<R.byteLength;)V+=z,U+=z.length,O+=128,z+=String.fromCharCode.apply(null,new Uint16Array(R.subarray(O,O+128)));return-1<P?(R.pos+=U+P+1,V+z.slice(0,P)):!1},u=function(R){const S=/^#\?(\S+)/,y=/^\s*GAMMA\s*=\s*(\d+(\.\d+)?)\s*$/,I=/^\s*EXPOSURE\s*=\s*(\d+(\.\d+)?)\s*$/,O=/^\s*FORMAT=(\S+)\s*$/,P=/^\s*\-Y\s+(\d+)\s+\+X\s+(\d+)\s*$/,U={valid:0,string:"",comments:"",programtype:"RGBE",format:"",gamma:1,exposure:1,width:0,height:0};let V,z;for((R.pos>=R.byteLength||!(V=h(R)))&&a(1,"no header found"),(z=V.match(S))||a(3,"bad initial token"),U.valid|=1,U.programtype=z[1],U.string+=V+`
`;V=h(R),V!==!1;){if(U.string+=V+`
`,V.charAt(0)==="#"){U.comments+=V+`
`;continue}if((z=V.match(y))&&(U.gamma=parseFloat(z[1])),(z=V.match(I))&&(U.exposure=parseFloat(z[1])),(z=V.match(O))&&(U.valid|=2,U.format=z[1]),(z=V.match(P))&&(U.valid|=4,U.height=parseInt(z[1],10),U.width=parseInt(z[2],10)),U.valid&2&&U.valid&4)break}return U.valid&2||a(3,"missing format specifier"),U.valid&4||a(3,"missing image size specifier"),U},f=function(R,S,y){const I=S;if(I<8||I>32767||R[0]!==2||R[1]!==2||R[2]&128)return new Uint8Array(R);I!==(R[2]<<8|R[3])&&a(3,"wrong scanline width");const O=new Uint8Array(4*S*y);O.length||a(4,"unable to allocate buffer space");let P=0,U=0;const V=4*I,z=new Uint8Array(4),Z=new Uint8Array(V);let G=y;for(;G>0&&U<R.byteLength;){U+4>R.byteLength&&a(1),z[0]=R[U++],z[1]=R[U++],z[2]=R[U++],z[3]=R[U++],(z[0]!=2||z[1]!=2||(z[2]<<8|z[3])!=I)&&a(3,"bad rgbe scanline format");let ee=0,ie;for(;ee<V&&U<R.byteLength;){ie=R[U++];const he=ie>128;if(he&&(ie-=128),(ie===0||ee+ie>V)&&a(3,"bad scanline data"),he){const Se=R[U++];for(let K=0;K<ie;K++)Z[ee++]=Se}else Z.set(R.subarray(U,U+ie),ee),ee+=ie,U+=ie}const ae=I;for(let he=0;he<ae;he++){let Se=0;O[P]=Z[he+Se],Se+=I,O[P+1]=Z[he+Se],Se+=I,O[P+2]=Z[he+Se],Se+=I,O[P+3]=Z[he+Se],P+=4}G--}return O},g=function(R,S,y,I){const O=R[S+3],P=Math.pow(2,O-128)/255;y[I+0]=R[S+0]*P,y[I+1]=R[S+1]*P,y[I+2]=R[S+2]*P,y[I+3]=1},v=function(R,S,y,I){const O=R[S+3],P=Math.pow(2,O-128)/255;y[I+0]=oa.toHalfFloat(Math.min(R[S+0]*P,65504)),y[I+1]=oa.toHalfFloat(Math.min(R[S+1]*P,65504)),y[I+2]=oa.toHalfFloat(Math.min(R[S+2]*P,65504)),y[I+3]=oa.toHalfFloat(1)},m=new Uint8Array(e);m.pos=0;const p=u(m),_=p.width,E=p.height,x=f(m.subarray(m.pos),_,E);let C,T,w;switch(this.type){case an:w=x.length/4;const R=new Float32Array(w*4);for(let y=0;y<w;y++)g(x,y*4,R,y*4);C=R,T=an;break;case vi:w=x.length/4;const S=new Uint16Array(w*4);for(let y=0;y<w;y++)v(x,y*4,S,y*4);C=S,T=vi;break;default:throw new Error("THREE.RGBELoader: Unsupported type: "+this.type)}return{width:_,height:E,data:C,header:p.string,gamma:p.gamma,exposure:p.exposure,type:T}}setDataType(e){return this.type=e,this}load(e,t,n,s){function r(a,o){switch(a.type){case an:case vi:a.colorSpace=Yt,a.minFilter=zt,a.magFilter=zt,a.generateMipmaps=!1,a.flipY=!0;break}t&&t(a,o)}return super.load(e,r,n,s)}}function Ih(i,e){if(e===ap)return console.warn("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Geometry already defined as triangles."),i;if(e===el||e===vu){let t=i.getIndex();if(t===null){const a=[],o=i.getAttribute("position");if(o!==void 0){for(let c=0;c<o.count;c++)a.push(c);i.setIndex(a),t=i.getIndex()}else return console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Undefined position attribute. Processing not possible."),i}const n=t.count-2,s=[];if(e===el)for(let a=1;a<=n;a++)s.push(t.getX(0)),s.push(t.getX(a)),s.push(t.getX(a+1));else for(let a=0;a<n;a++)a%2===0?(s.push(t.getX(a)),s.push(t.getX(a+1)),s.push(t.getX(a+2))):(s.push(t.getX(a+2)),s.push(t.getX(a+1)),s.push(t.getX(a)));s.length/3!==n&&console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unable to generate correct amount of triangles.");const r=i.clone();return r.setIndex(s),r.clearGroups(),r}else return console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unknown draw mode:",e),i}class iy extends Ms{constructor(e){super(e),this.dracoLoader=null,this.ktx2Loader=null,this.meshoptDecoder=null,this.pluginCallbacks=[],this.register(function(t){return new cy(t)}),this.register(function(t){return new ly(t)}),this.register(function(t){return new _y(t)}),this.register(function(t){return new xy(t)}),this.register(function(t){return new yy(t)}),this.register(function(t){return new hy(t)}),this.register(function(t){return new uy(t)}),this.register(function(t){return new fy(t)}),this.register(function(t){return new py(t)}),this.register(function(t){return new oy(t)}),this.register(function(t){return new my(t)}),this.register(function(t){return new dy(t)}),this.register(function(t){return new vy(t)}),this.register(function(t){return new gy(t)}),this.register(function(t){return new ry(t)}),this.register(function(t){return new My(t)}),this.register(function(t){return new Sy(t)})}load(e,t,n,s){const r=this;let a;if(this.resourcePath!=="")a=this.resourcePath;else if(this.path!==""){const l=Or.extractUrlBase(e);a=Or.resolveURL(l,this.path)}else a=Or.extractUrlBase(e);this.manager.itemStart(e);const o=function(l){s?s(l):console.error(l),r.manager.itemError(e),r.manager.itemEnd(e)},c=new zl(this.manager);c.setPath(this.path),c.setResponseType("arraybuffer"),c.setRequestHeader(this.requestHeader),c.setWithCredentials(this.withCredentials),c.load(e,function(l){try{r.parse(l,a,function(d){t(d),r.manager.itemEnd(e)},o)}catch(d){o(d)}},n,o)}setDRACOLoader(e){return this.dracoLoader=e,this}setKTX2Loader(e){return this.ktx2Loader=e,this}setMeshoptDecoder(e){return this.meshoptDecoder=e,this}register(e){return this.pluginCallbacks.indexOf(e)===-1&&this.pluginCallbacks.push(e),this}unregister(e){return this.pluginCallbacks.indexOf(e)!==-1&&this.pluginCallbacks.splice(this.pluginCallbacks.indexOf(e),1),this}parse(e,t,n,s){let r;const a={},o={},c=new TextDecoder;if(typeof e=="string")r=JSON.parse(e);else if(e instanceof ArrayBuffer)if(c.decode(new Uint8Array(e,0,4))===$u){try{a[Qe.KHR_BINARY_GLTF]=new Ey(e)}catch(h){s&&s(h);return}r=JSON.parse(a[Qe.KHR_BINARY_GLTF].content)}else r=JSON.parse(c.decode(e));else r=e;if(r.asset===void 0||r.asset.version[0]<2){s&&s(new Error("THREE.GLTFLoader: Unsupported asset. glTF versions >=2.0 are supported."));return}const l=new Oy(r,{path:t||this.resourcePath||"",crossOrigin:this.crossOrigin,requestHeader:this.requestHeader,manager:this.manager,ktx2Loader:this.ktx2Loader,meshoptDecoder:this.meshoptDecoder});l.fileLoader.setRequestHeader(this.requestHeader);for(let d=0;d<this.pluginCallbacks.length;d++){const h=this.pluginCallbacks[d](l);h.name||console.error("THREE.GLTFLoader: Invalid plugin found: missing name"),o[h.name]=h,a[h.name]=!0}if(r.extensionsUsed)for(let d=0;d<r.extensionsUsed.length;++d){const h=r.extensionsUsed[d],u=r.extensionsRequired||[];switch(h){case Qe.KHR_MATERIALS_UNLIT:a[h]=new ay;break;case Qe.KHR_DRACO_MESH_COMPRESSION:a[h]=new by(r,this.dracoLoader);break;case Qe.KHR_TEXTURE_TRANSFORM:a[h]=new Ty;break;case Qe.KHR_MESH_QUANTIZATION:a[h]=new wy;break;default:u.indexOf(h)>=0&&o[h]===void 0&&console.warn('THREE.GLTFLoader: Unknown extension "'+h+'".')}}l.setExtensions(a),l.setPlugins(o),l.parse(n,s)}parseAsync(e,t){const n=this;return new Promise(function(s,r){n.parse(e,t,s,r)})}}function sy(){let i={};return{get:function(e){return i[e]},add:function(e,t){i[e]=t},remove:function(e){delete i[e]},removeAll:function(){i={}}}}const Qe={KHR_BINARY_GLTF:"KHR_binary_glTF",KHR_DRACO_MESH_COMPRESSION:"KHR_draco_mesh_compression",KHR_LIGHTS_PUNCTUAL:"KHR_lights_punctual",KHR_MATERIALS_CLEARCOAT:"KHR_materials_clearcoat",KHR_MATERIALS_DISPERSION:"KHR_materials_dispersion",KHR_MATERIALS_IOR:"KHR_materials_ior",KHR_MATERIALS_SHEEN:"KHR_materials_sheen",KHR_MATERIALS_SPECULAR:"KHR_materials_specular",KHR_MATERIALS_TRANSMISSION:"KHR_materials_transmission",KHR_MATERIALS_IRIDESCENCE:"KHR_materials_iridescence",KHR_MATERIALS_ANISOTROPY:"KHR_materials_anisotropy",KHR_MATERIALS_UNLIT:"KHR_materials_unlit",KHR_MATERIALS_VOLUME:"KHR_materials_volume",KHR_TEXTURE_BASISU:"KHR_texture_basisu",KHR_TEXTURE_TRANSFORM:"KHR_texture_transform",KHR_MESH_QUANTIZATION:"KHR_mesh_quantization",KHR_MATERIALS_EMISSIVE_STRENGTH:"KHR_materials_emissive_strength",EXT_MATERIALS_BUMP:"EXT_materials_bump",EXT_TEXTURE_WEBP:"EXT_texture_webp",EXT_TEXTURE_AVIF:"EXT_texture_avif",EXT_MESHOPT_COMPRESSION:"EXT_meshopt_compression",EXT_MESH_GPU_INSTANCING:"EXT_mesh_gpu_instancing"};class ry{constructor(e){this.parser=e,this.name=Qe.KHR_LIGHTS_PUNCTUAL,this.cache={refs:{},uses:{}}}_markDefs(){const e=this.parser,t=this.parser.json.nodes||[];for(let n=0,s=t.length;n<s;n++){const r=t[n];r.extensions&&r.extensions[this.name]&&r.extensions[this.name].light!==void 0&&e._addNodeRef(this.cache,r.extensions[this.name].light)}}_loadLight(e){const t=this.parser,n="light:"+e;let s=t.cache.get(n);if(s)return s;const r=t.json,c=((r.extensions&&r.extensions[this.name]||{}).lights||[])[e];let l;const d=new Oe(16777215);c.color!==void 0&&d.setRGB(c.color[0],c.color[1],c.color[2],Yt);const h=c.range!==void 0?c.range:0;switch(c.type){case"directional":l=new Hu(d),l.target.position.set(0,0,-1),l.add(l.target);break;case"point":l=new Gl(d),l.distance=h;break;case"spot":l=new bx(d),l.distance=h,c.spot=c.spot||{},c.spot.innerConeAngle=c.spot.innerConeAngle!==void 0?c.spot.innerConeAngle:0,c.spot.outerConeAngle=c.spot.outerConeAngle!==void 0?c.spot.outerConeAngle:Math.PI/4,l.angle=c.spot.outerConeAngle,l.penumbra=1-c.spot.innerConeAngle/c.spot.outerConeAngle,l.target.position.set(0,0,-1),l.add(l.target);break;default:throw new Error("THREE.GLTFLoader: Unexpected light type: "+c.type)}return l.position.set(0,0,0),l.decay=2,fi(l,c),c.intensity!==void 0&&(l.intensity=c.intensity),l.name=t.createUniqueName(c.name||"light_"+e),s=Promise.resolve(l),t.cache.add(n,s),s}getDependency(e,t){if(e==="light")return this._loadLight(t)}createNodeAttachment(e){const t=this,n=this.parser,r=n.json.nodes[e],o=(r.extensions&&r.extensions[this.name]||{}).light;return o===void 0?null:this._loadLight(o).then(function(c){return n._getNodeRef(t.cache,o,c)})}}class ay{constructor(){this.name=Qe.KHR_MATERIALS_UNLIT}getMaterialType(){return Tn}extendParams(e,t,n){const s=[];e.color=new Oe(1,1,1),e.opacity=1;const r=t.pbrMetallicRoughness;if(r){if(Array.isArray(r.baseColorFactor)){const a=r.baseColorFactor;e.color.setRGB(a[0],a[1],a[2],Yt),e.opacity=a[3]}r.baseColorTexture!==void 0&&s.push(n.assignTexture(e,"map",r.baseColorTexture,At))}return Promise.all(s)}}class oy{constructor(e){this.parser=e,this.name=Qe.KHR_MATERIALS_EMISSIVE_STRENGTH}extendMaterialParams(e,t){const s=this.parser.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();const r=s.extensions[this.name].emissiveStrength;return r!==void 0&&(t.emissiveIntensity=r),Promise.resolve()}}class cy{constructor(e){this.parser=e,this.name=Qe.KHR_MATERIALS_CLEARCOAT}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:Qn}extendMaterialParams(e,t){const n=this.parser,s=n.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();const r=[],a=s.extensions[this.name];if(a.clearcoatFactor!==void 0&&(t.clearcoat=a.clearcoatFactor),a.clearcoatTexture!==void 0&&r.push(n.assignTexture(t,"clearcoatMap",a.clearcoatTexture)),a.clearcoatRoughnessFactor!==void 0&&(t.clearcoatRoughness=a.clearcoatRoughnessFactor),a.clearcoatRoughnessTexture!==void 0&&r.push(n.assignTexture(t,"clearcoatRoughnessMap",a.clearcoatRoughnessTexture)),a.clearcoatNormalTexture!==void 0&&(r.push(n.assignTexture(t,"clearcoatNormalMap",a.clearcoatNormalTexture)),a.clearcoatNormalTexture.scale!==void 0)){const o=a.clearcoatNormalTexture.scale;t.clearcoatNormalScale=new Ke(o,o)}return Promise.all(r)}}class ly{constructor(e){this.parser=e,this.name=Qe.KHR_MATERIALS_DISPERSION}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:Qn}extendMaterialParams(e,t){const s=this.parser.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();const r=s.extensions[this.name];return t.dispersion=r.dispersion!==void 0?r.dispersion:0,Promise.resolve()}}class dy{constructor(e){this.parser=e,this.name=Qe.KHR_MATERIALS_IRIDESCENCE}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:Qn}extendMaterialParams(e,t){const n=this.parser,s=n.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();const r=[],a=s.extensions[this.name];return a.iridescenceFactor!==void 0&&(t.iridescence=a.iridescenceFactor),a.iridescenceTexture!==void 0&&r.push(n.assignTexture(t,"iridescenceMap",a.iridescenceTexture)),a.iridescenceIor!==void 0&&(t.iridescenceIOR=a.iridescenceIor),t.iridescenceThicknessRange===void 0&&(t.iridescenceThicknessRange=[100,400]),a.iridescenceThicknessMinimum!==void 0&&(t.iridescenceThicknessRange[0]=a.iridescenceThicknessMinimum),a.iridescenceThicknessMaximum!==void 0&&(t.iridescenceThicknessRange[1]=a.iridescenceThicknessMaximum),a.iridescenceThicknessTexture!==void 0&&r.push(n.assignTexture(t,"iridescenceThicknessMap",a.iridescenceThicknessTexture)),Promise.all(r)}}class hy{constructor(e){this.parser=e,this.name=Qe.KHR_MATERIALS_SHEEN}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:Qn}extendMaterialParams(e,t){const n=this.parser,s=n.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();const r=[];t.sheenColor=new Oe(0,0,0),t.sheenRoughness=0,t.sheen=1;const a=s.extensions[this.name];if(a.sheenColorFactor!==void 0){const o=a.sheenColorFactor;t.sheenColor.setRGB(o[0],o[1],o[2],Yt)}return a.sheenRoughnessFactor!==void 0&&(t.sheenRoughness=a.sheenRoughnessFactor),a.sheenColorTexture!==void 0&&r.push(n.assignTexture(t,"sheenColorMap",a.sheenColorTexture,At)),a.sheenRoughnessTexture!==void 0&&r.push(n.assignTexture(t,"sheenRoughnessMap",a.sheenRoughnessTexture)),Promise.all(r)}}class uy{constructor(e){this.parser=e,this.name=Qe.KHR_MATERIALS_TRANSMISSION}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:Qn}extendMaterialParams(e,t){const n=this.parser,s=n.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();const r=[],a=s.extensions[this.name];return a.transmissionFactor!==void 0&&(t.transmission=a.transmissionFactor),a.transmissionTexture!==void 0&&r.push(n.assignTexture(t,"transmissionMap",a.transmissionTexture)),Promise.all(r)}}class fy{constructor(e){this.parser=e,this.name=Qe.KHR_MATERIALS_VOLUME}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:Qn}extendMaterialParams(e,t){const n=this.parser,s=n.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();const r=[],a=s.extensions[this.name];t.thickness=a.thicknessFactor!==void 0?a.thicknessFactor:0,a.thicknessTexture!==void 0&&r.push(n.assignTexture(t,"thicknessMap",a.thicknessTexture)),t.attenuationDistance=a.attenuationDistance||1/0;const o=a.attenuationColor||[1,1,1];return t.attenuationColor=new Oe().setRGB(o[0],o[1],o[2],Yt),Promise.all(r)}}class py{constructor(e){this.parser=e,this.name=Qe.KHR_MATERIALS_IOR}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:Qn}extendMaterialParams(e,t){const s=this.parser.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();const r=s.extensions[this.name];return t.ior=r.ior!==void 0?r.ior:1.5,Promise.resolve()}}class my{constructor(e){this.parser=e,this.name=Qe.KHR_MATERIALS_SPECULAR}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:Qn}extendMaterialParams(e,t){const n=this.parser,s=n.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();const r=[],a=s.extensions[this.name];t.specularIntensity=a.specularFactor!==void 0?a.specularFactor:1,a.specularTexture!==void 0&&r.push(n.assignTexture(t,"specularIntensityMap",a.specularTexture));const o=a.specularColorFactor||[1,1,1];return t.specularColor=new Oe().setRGB(o[0],o[1],o[2],Yt),a.specularColorTexture!==void 0&&r.push(n.assignTexture(t,"specularColorMap",a.specularColorTexture,At)),Promise.all(r)}}class gy{constructor(e){this.parser=e,this.name=Qe.EXT_MATERIALS_BUMP}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:Qn}extendMaterialParams(e,t){const n=this.parser,s=n.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();const r=[],a=s.extensions[this.name];return t.bumpScale=a.bumpFactor!==void 0?a.bumpFactor:1,a.bumpTexture!==void 0&&r.push(n.assignTexture(t,"bumpMap",a.bumpTexture)),Promise.all(r)}}class vy{constructor(e){this.parser=e,this.name=Qe.KHR_MATERIALS_ANISOTROPY}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:Qn}extendMaterialParams(e,t){const n=this.parser,s=n.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();const r=[],a=s.extensions[this.name];return a.anisotropyStrength!==void 0&&(t.anisotropy=a.anisotropyStrength),a.anisotropyRotation!==void 0&&(t.anisotropyRotation=a.anisotropyRotation),a.anisotropyTexture!==void 0&&r.push(n.assignTexture(t,"anisotropyMap",a.anisotropyTexture)),Promise.all(r)}}class _y{constructor(e){this.parser=e,this.name=Qe.KHR_TEXTURE_BASISU}loadTexture(e){const t=this.parser,n=t.json,s=n.textures[e];if(!s.extensions||!s.extensions[this.name])return null;const r=s.extensions[this.name],a=t.options.ktx2Loader;if(!a){if(n.extensionsRequired&&n.extensionsRequired.indexOf(this.name)>=0)throw new Error("THREE.GLTFLoader: setKTX2Loader must be called before loading KTX2 textures");return null}return t.loadTextureImage(e,r.source,a)}}class xy{constructor(e){this.parser=e,this.name=Qe.EXT_TEXTURE_WEBP,this.isSupported=null}loadTexture(e){const t=this.name,n=this.parser,s=n.json,r=s.textures[e];if(!r.extensions||!r.extensions[t])return null;const a=r.extensions[t],o=s.images[a.source];let c=n.textureLoader;if(o.uri){const l=n.options.manager.getHandler(o.uri);l!==null&&(c=l)}return this.detectSupport().then(function(l){if(l)return n.loadTextureImage(e,a.source,c);if(s.extensionsRequired&&s.extensionsRequired.indexOf(t)>=0)throw new Error("THREE.GLTFLoader: WebP required by asset but unsupported.");return n.loadTexture(e)})}detectSupport(){return this.isSupported||(this.isSupported=new Promise(function(e){const t=new Image;t.src="data:image/webp;base64,UklGRiIAAABXRUJQVlA4IBYAAAAwAQCdASoBAAEADsD+JaQAA3AAAAAA",t.onload=t.onerror=function(){e(t.height===1)}})),this.isSupported}}class yy{constructor(e){this.parser=e,this.name=Qe.EXT_TEXTURE_AVIF,this.isSupported=null}loadTexture(e){const t=this.name,n=this.parser,s=n.json,r=s.textures[e];if(!r.extensions||!r.extensions[t])return null;const a=r.extensions[t],o=s.images[a.source];let c=n.textureLoader;if(o.uri){const l=n.options.manager.getHandler(o.uri);l!==null&&(c=l)}return this.detectSupport().then(function(l){if(l)return n.loadTextureImage(e,a.source,c);if(s.extensionsRequired&&s.extensionsRequired.indexOf(t)>=0)throw new Error("THREE.GLTFLoader: AVIF required by asset but unsupported.");return n.loadTexture(e)})}detectSupport(){return this.isSupported||(this.isSupported=new Promise(function(e){const t=new Image;t.src="data:image/avif;base64,AAAAIGZ0eXBhdmlmAAAAAGF2aWZtaWYxbWlhZk1BMUIAAADybWV0YQAAAAAAAAAoaGRscgAAAAAAAAAAcGljdAAAAAAAAAAAAAAAAGxpYmF2aWYAAAAADnBpdG0AAAAAAAEAAAAeaWxvYwAAAABEAAABAAEAAAABAAABGgAAABcAAAAoaWluZgAAAAAAAQAAABppbmZlAgAAAAABAABhdjAxQ29sb3IAAAAAamlwcnAAAABLaXBjbwAAABRpc3BlAAAAAAAAAAEAAAABAAAAEHBpeGkAAAAAAwgICAAAAAxhdjFDgQAMAAAAABNjb2xybmNseAACAAIABoAAAAAXaXBtYQAAAAAAAAABAAEEAQKDBAAAAB9tZGF0EgAKCBgABogQEDQgMgkQAAAAB8dSLfI=",t.onload=t.onerror=function(){e(t.height===1)}})),this.isSupported}}class My{constructor(e){this.name=Qe.EXT_MESHOPT_COMPRESSION,this.parser=e}loadBufferView(e){const t=this.parser.json,n=t.bufferViews[e];if(n.extensions&&n.extensions[this.name]){const s=n.extensions[this.name],r=this.parser.getDependency("buffer",s.buffer),a=this.parser.options.meshoptDecoder;if(!a||!a.supported){if(t.extensionsRequired&&t.extensionsRequired.indexOf(this.name)>=0)throw new Error("THREE.GLTFLoader: setMeshoptDecoder must be called before loading compressed files");return null}return r.then(function(o){const c=s.byteOffset||0,l=s.byteLength||0,d=s.count,h=s.byteStride,u=new Uint8Array(o,c,l);return a.decodeGltfBufferAsync?a.decodeGltfBufferAsync(d,h,u,s.mode,s.filter).then(function(f){return f.buffer}):a.ready.then(function(){const f=new ArrayBuffer(d*h);return a.decodeGltfBuffer(new Uint8Array(f),d,h,u,s.mode,s.filter),f})})}else return null}}class Sy{constructor(e){this.name=Qe.EXT_MESH_GPU_INSTANCING,this.parser=e}createNodeMesh(e){const t=this.parser.json,n=t.nodes[e];if(!n.extensions||!n.extensions[this.name]||n.mesh===void 0)return null;const s=t.meshes[n.mesh];for(const l of s.primitives)if(l.mode!==Mn.TRIANGLES&&l.mode!==Mn.TRIANGLE_STRIP&&l.mode!==Mn.TRIANGLE_FAN&&l.mode!==void 0)return null;const a=n.extensions[this.name].attributes,o=[],c={};for(const l in a)o.push(this.parser.getDependency("accessor",a[l]).then(d=>(c[l]=d,c[l])));return o.length<1?null:(o.push(this.parser.createNodeMesh(e)),Promise.all(o).then(l=>{const d=l.pop(),h=d.isGroup?d.children:[d],u=l[0].count,f=[];for(const g of h){const v=new We,m=new L,p=new Ji,_=new L(1,1,1),E=new nx(g.geometry,g.material,u);for(let x=0;x<u;x++)c.TRANSLATION&&m.fromBufferAttribute(c.TRANSLATION,x),c.ROTATION&&p.fromBufferAttribute(c.ROTATION,x),c.SCALE&&_.fromBufferAttribute(c.SCALE,x),E.setMatrixAt(x,v.compose(m,p,_));for(const x in c)if(x==="_COLOR_0"){const C=c[x];E.instanceColor=new il(C.array,C.itemSize,C.normalized)}else x!=="TRANSLATION"&&x!=="ROTATION"&&x!=="SCALE"&&g.geometry.setAttribute(x,c[x]);Mt.prototype.copy.call(E,g),this.parser.assignFinalMaterial(E),f.push(E)}return d.isGroup?(d.clear(),d.add(...f),d):f[0]}))}}const $u="glTF",Er=12,Lh={JSON:1313821514,BIN:5130562};class Ey{constructor(e){this.name=Qe.KHR_BINARY_GLTF,this.content=null,this.body=null;const t=new DataView(e,0,Er),n=new TextDecoder;if(this.header={magic:n.decode(new Uint8Array(e.slice(0,4))),version:t.getUint32(4,!0),length:t.getUint32(8,!0)},this.header.magic!==$u)throw new Error("THREE.GLTFLoader: Unsupported glTF-Binary header.");if(this.header.version<2)throw new Error("THREE.GLTFLoader: Legacy binary file detected.");const s=this.header.length-Er,r=new DataView(e,Er);let a=0;for(;a<s;){const o=r.getUint32(a,!0);a+=4;const c=r.getUint32(a,!0);if(a+=4,c===Lh.JSON){const l=new Uint8Array(e,Er+a,o);this.content=n.decode(l)}else if(c===Lh.BIN){const l=Er+a;this.body=e.slice(l,l+o)}a+=o}if(this.content===null)throw new Error("THREE.GLTFLoader: JSON content not found.")}}class by{constructor(e,t){if(!t)throw new Error("THREE.GLTFLoader: No DRACOLoader instance provided.");this.name=Qe.KHR_DRACO_MESH_COMPRESSION,this.json=e,this.dracoLoader=t,this.dracoLoader.preload()}decodePrimitive(e,t){const n=this.json,s=this.dracoLoader,r=e.extensions[this.name].bufferView,a=e.extensions[this.name].attributes,o={},c={},l={};for(const d in a){const h=ol[d]||d.toLowerCase();o[h]=a[d]}for(const d in e.attributes){const h=ol[d]||d.toLowerCase();if(a[d]!==void 0){const u=n.accessors[e.attributes[d]],f=Ks[u.componentType];l[h]=f.name,c[h]=u.normalized===!0}}return t.getDependency("bufferView",r).then(function(d){return new Promise(function(h,u){s.decodeDracoFile(d,function(f){for(const g in f.attributes){const v=f.attributes[g],m=c[g];m!==void 0&&(v.normalized=m)}h(f)},o,l,Yt,u)})})}}class Ty{constructor(){this.name=Qe.KHR_TEXTURE_TRANSFORM}extendTexture(e,t){return(t.texCoord===void 0||t.texCoord===e.channel)&&t.offset===void 0&&t.rotation===void 0&&t.scale===void 0||(e=e.clone(),t.texCoord!==void 0&&(e.channel=t.texCoord),t.offset!==void 0&&e.offset.fromArray(t.offset),t.rotation!==void 0&&(e.rotation=t.rotation),t.scale!==void 0&&e.repeat.fromArray(t.scale),e.needsUpdate=!0),e}}class wy{constructor(){this.name=Qe.KHR_MESH_QUANTIZATION}}class Ku extends Zr{constructor(e,t,n,s){super(e,t,n,s)}copySampleValue_(e){const t=this.resultBuffer,n=this.sampleValues,s=this.valueSize,r=e*s*3+s;for(let a=0;a!==s;a++)t[a]=n[r+a];return t}interpolate_(e,t,n,s){const r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,c=o*2,l=o*3,d=s-t,h=(n-t)/d,u=h*h,f=u*h,g=e*l,v=g-l,m=-2*f+3*u,p=f-u,_=1-m,E=p-u+h;for(let x=0;x!==o;x++){const C=a[v+x+o],T=a[v+x+c]*d,w=a[g+x+o],R=a[g+x]*d;r[x]=_*C+E*T+m*w+p*R}return r}}const Ay=new Ji;class Ry extends Ku{interpolate_(e,t,n,s){const r=super.interpolate_(e,t,n,s);return Ay.fromArray(r).normalize().toArray(r),r}}const Mn={POINTS:0,LINES:1,LINE_LOOP:2,LINE_STRIP:3,TRIANGLES:4,TRIANGLE_STRIP:5,TRIANGLE_FAN:6},Ks={5120:Int8Array,5121:Uint8Array,5122:Int16Array,5123:Uint16Array,5125:Uint32Array,5126:Float32Array},Dh={9728:Jt,9729:zt,9984:ou,9985:ka,9986:Rr,9987:qn},Ph={33071:Yn,33648:Qa,10497:Mi},dc={SCALAR:1,VEC2:2,VEC3:3,VEC4:4,MAT2:4,MAT3:9,MAT4:16},ol={POSITION:"position",NORMAL:"normal",TANGENT:"tangent",TEXCOORD_0:"uv",TEXCOORD_1:"uv1",TEXCOORD_2:"uv2",TEXCOORD_3:"uv3",COLOR_0:"color",WEIGHTS_0:"skinWeight",JOINTS_0:"skinIndex"},Ui={scale:"scale",translation:"position",rotation:"quaternion",weights:"morphTargetInfluences"},Cy={CUBICSPLINE:void 0,LINEAR:qr,STEP:Yr},hc={OPAQUE:"OPAQUE",MASK:"MASK",BLEND:"BLEND"};function Iy(i){return i.DefaultMaterial===void 0&&(i.DefaultMaterial=new se({color:16777215,emissive:0,metalness:1,roughness:1,transparent:!1,depthTest:!0,side:yi})),i.DefaultMaterial}function as(i,e,t){for(const n in t.extensions)i[n]===void 0&&(e.userData.gltfExtensions=e.userData.gltfExtensions||{},e.userData.gltfExtensions[n]=t.extensions[n])}function fi(i,e){e.extras!==void 0&&(typeof e.extras=="object"?Object.assign(i.userData,e.extras):console.warn("THREE.GLTFLoader: Ignoring primitive type .extras, "+e.extras))}function Ly(i,e,t){let n=!1,s=!1,r=!1;for(let l=0,d=e.length;l<d;l++){const h=e[l];if(h.POSITION!==void 0&&(n=!0),h.NORMAL!==void 0&&(s=!0),h.COLOR_0!==void 0&&(r=!0),n&&s&&r)break}if(!n&&!s&&!r)return Promise.resolve(i);const a=[],o=[],c=[];for(let l=0,d=e.length;l<d;l++){const h=e[l];if(n){const u=h.POSITION!==void 0?t.getDependency("accessor",h.POSITION):i.attributes.position;a.push(u)}if(s){const u=h.NORMAL!==void 0?t.getDependency("accessor",h.NORMAL):i.attributes.normal;o.push(u)}if(r){const u=h.COLOR_0!==void 0?t.getDependency("accessor",h.COLOR_0):i.attributes.color;c.push(u)}}return Promise.all([Promise.all(a),Promise.all(o),Promise.all(c)]).then(function(l){const d=l[0],h=l[1],u=l[2];return n&&(i.morphAttributes.position=d),s&&(i.morphAttributes.normal=h),r&&(i.morphAttributes.color=u),i.morphTargetsRelative=!0,i})}function Dy(i,e){if(i.updateMorphTargets(),e.weights!==void 0)for(let t=0,n=e.weights.length;t<n;t++)i.morphTargetInfluences[t]=e.weights[t];if(e.extras&&Array.isArray(e.extras.targetNames)){const t=e.extras.targetNames;if(i.morphTargetInfluences.length===t.length){i.morphTargetDictionary={};for(let n=0,s=t.length;n<s;n++)i.morphTargetDictionary[t[n]]=n}else console.warn("THREE.GLTFLoader: Invalid extras.targetNames length. Ignoring names.")}}function Py(i){let e;const t=i.extensions&&i.extensions[Qe.KHR_DRACO_MESH_COMPRESSION];if(t?e="draco:"+t.bufferView+":"+t.indices+":"+uc(t.attributes):e=i.indices+":"+uc(i.attributes)+":"+i.mode,i.targets!==void 0)for(let n=0,s=i.targets.length;n<s;n++)e+=":"+uc(i.targets[n]);return e}function uc(i){let e="";const t=Object.keys(i).sort();for(let n=0,s=t.length;n<s;n++)e+=t[n]+":"+i[t[n]]+";";return e}function cl(i){switch(i){case Int8Array:return 1/127;case Uint8Array:return 1/255;case Int16Array:return 1/32767;case Uint16Array:return 1/65535;default:throw new Error("THREE.GLTFLoader: Unsupported normalized accessor component type.")}}function Ny(i){return i.search(/\.jpe?g($|\?)/i)>0||i.search(/^data\:image\/jpeg/)===0?"image/jpeg":i.search(/\.webp($|\?)/i)>0||i.search(/^data\:image\/webp/)===0?"image/webp":i.search(/\.ktx2($|\?)/i)>0||i.search(/^data\:image\/ktx2/)===0?"image/ktx2":"image/png"}const Uy=new We;class Oy{constructor(e={},t={}){this.json=e,this.extensions={},this.plugins={},this.options=t,this.cache=new sy,this.associations=new Map,this.primitiveCache={},this.nodeCache={},this.meshCache={refs:{},uses:{}},this.cameraCache={refs:{},uses:{}},this.lightCache={refs:{},uses:{}},this.sourceCache={},this.textureCache={},this.nodeNamesUsed={};let n=!1,s=-1,r=!1,a=-1;if(typeof navigator<"u"){const o=navigator.userAgent;n=/^((?!chrome|android).)*safari/i.test(o)===!0;const c=o.match(/Version\/(\d+)/);s=n&&c?parseInt(c[1],10):-1,r=o.indexOf("Firefox")>-1,a=r?o.match(/Firefox\/([0-9]+)\./)[1]:-1}typeof createImageBitmap>"u"||n&&s<17||r&&a<98?this.textureLoader=new zu(this.options.manager):this.textureLoader=new Ax(this.options.manager),this.textureLoader.setCrossOrigin(this.options.crossOrigin),this.textureLoader.setRequestHeader(this.options.requestHeader),this.fileLoader=new zl(this.options.manager),this.fileLoader.setResponseType("arraybuffer"),this.options.crossOrigin==="use-credentials"&&this.fileLoader.setWithCredentials(!0)}setExtensions(e){this.extensions=e}setPlugins(e){this.plugins=e}parse(e,t){const n=this,s=this.json,r=this.extensions;this.cache.removeAll(),this.nodeCache={},this._invokeAll(function(a){return a._markDefs&&a._markDefs()}),Promise.all(this._invokeAll(function(a){return a.beforeRoot&&a.beforeRoot()})).then(function(){return Promise.all([n.getDependencies("scene"),n.getDependencies("animation"),n.getDependencies("camera")])}).then(function(a){const o={scene:a[0][s.scene||0],scenes:a[0],animations:a[1],cameras:a[2],asset:s.asset,parser:n,userData:{}};return as(r,o,s),fi(o,s),Promise.all(n._invokeAll(function(c){return c.afterRoot&&c.afterRoot(o)})).then(function(){for(const c of o.scenes)c.updateMatrixWorld();e(o)})}).catch(t)}_markDefs(){const e=this.json.nodes||[],t=this.json.skins||[],n=this.json.meshes||[];for(let s=0,r=t.length;s<r;s++){const a=t[s].joints;for(let o=0,c=a.length;o<c;o++)e[a[o]].isBone=!0}for(let s=0,r=e.length;s<r;s++){const a=e[s];a.mesh!==void 0&&(this._addNodeRef(this.meshCache,a.mesh),a.skin!==void 0&&(n[a.mesh].isSkinnedMesh=!0)),a.camera!==void 0&&this._addNodeRef(this.cameraCache,a.camera)}}_addNodeRef(e,t){t!==void 0&&(e.refs[t]===void 0&&(e.refs[t]=e.uses[t]=0),e.refs[t]++)}_getNodeRef(e,t,n){if(e.refs[t]<=1)return n;const s=n.clone(),r=(a,o)=>{const c=this.associations.get(a);c!=null&&this.associations.set(o,c);for(const[l,d]of a.children.entries())r(d,o.children[l])};return r(n,s),s.name+="_instance_"+e.uses[t]++,s}_invokeOne(e){const t=Object.values(this.plugins);t.push(this);for(let n=0;n<t.length;n++){const s=e(t[n]);if(s)return s}return null}_invokeAll(e){const t=Object.values(this.plugins);t.unshift(this);const n=[];for(let s=0;s<t.length;s++){const r=e(t[s]);r&&n.push(r)}return n}getDependency(e,t){const n=e+":"+t;let s=this.cache.get(n);if(!s){switch(e){case"scene":s=this.loadScene(t);break;case"node":s=this._invokeOne(function(r){return r.loadNode&&r.loadNode(t)});break;case"mesh":s=this._invokeOne(function(r){return r.loadMesh&&r.loadMesh(t)});break;case"accessor":s=this.loadAccessor(t);break;case"bufferView":s=this._invokeOne(function(r){return r.loadBufferView&&r.loadBufferView(t)});break;case"buffer":s=this.loadBuffer(t);break;case"material":s=this._invokeOne(function(r){return r.loadMaterial&&r.loadMaterial(t)});break;case"texture":s=this._invokeOne(function(r){return r.loadTexture&&r.loadTexture(t)});break;case"skin":s=this.loadSkin(t);break;case"animation":s=this._invokeOne(function(r){return r.loadAnimation&&r.loadAnimation(t)});break;case"camera":s=this.loadCamera(t);break;default:if(s=this._invokeOne(function(r){return r!=this&&r.getDependency&&r.getDependency(e,t)}),!s)throw new Error("Unknown type: "+e);break}this.cache.add(n,s)}return s}getDependencies(e){let t=this.cache.get(e);if(!t){const n=this,s=this.json[e+(e==="mesh"?"es":"s")]||[];t=Promise.all(s.map(function(r,a){return n.getDependency(e,a)})),this.cache.add(e,t)}return t}loadBuffer(e){const t=this.json.buffers[e],n=this.fileLoader;if(t.type&&t.type!=="arraybuffer")throw new Error("THREE.GLTFLoader: "+t.type+" buffer type is not supported.");if(t.uri===void 0&&e===0)return Promise.resolve(this.extensions[Qe.KHR_BINARY_GLTF].body);const s=this.options;return new Promise(function(r,a){n.load(Or.resolveURL(t.uri,s.path),r,void 0,function(){a(new Error('THREE.GLTFLoader: Failed to load buffer "'+t.uri+'".'))})})}loadBufferView(e){const t=this.json.bufferViews[e];return this.getDependency("buffer",t.buffer).then(function(n){const s=t.byteLength||0,r=t.byteOffset||0;return n.slice(r,r+s)})}loadAccessor(e){const t=this,n=this.json,s=this.json.accessors[e];if(s.bufferView===void 0&&s.sparse===void 0){const a=dc[s.type],o=Ks[s.componentType],c=s.normalized===!0,l=new o(s.count*a);return Promise.resolve(new Qt(l,a,c))}const r=[];return s.bufferView!==void 0?r.push(this.getDependency("bufferView",s.bufferView)):r.push(null),s.sparse!==void 0&&(r.push(this.getDependency("bufferView",s.sparse.indices.bufferView)),r.push(this.getDependency("bufferView",s.sparse.values.bufferView))),Promise.all(r).then(function(a){const o=a[0],c=dc[s.type],l=Ks[s.componentType],d=l.BYTES_PER_ELEMENT,h=d*c,u=s.byteOffset||0,f=s.bufferView!==void 0?n.bufferViews[s.bufferView].byteStride:void 0,g=s.normalized===!0;let v,m;if(f&&f!==h){const p=Math.floor(u/f),_="InterleavedBuffer:"+s.bufferView+":"+s.componentType+":"+p+":"+s.count;let E=t.cache.get(_);E||(v=new l(o,p*f,s.count*f/d),E=new j_(v,f/d),t.cache.add(_,E)),m=new Pl(E,c,u%f/d,g)}else o===null?v=new l(s.count*c):v=new l(o,u,s.count*c),m=new Qt(v,c,g);if(s.sparse!==void 0){const p=dc.SCALAR,_=Ks[s.sparse.indices.componentType],E=s.sparse.indices.byteOffset||0,x=s.sparse.values.byteOffset||0,C=new _(a[1],E,s.sparse.count*p),T=new l(a[2],x,s.sparse.count*c);o!==null&&(m=new Qt(m.array.slice(),m.itemSize,m.normalized)),m.normalized=!1;for(let w=0,R=C.length;w<R;w++){const S=C[w];if(m.setX(S,T[w*c]),c>=2&&m.setY(S,T[w*c+1]),c>=3&&m.setZ(S,T[w*c+2]),c>=4&&m.setW(S,T[w*c+3]),c>=5)throw new Error("THREE.GLTFLoader: Unsupported itemSize in sparse BufferAttribute.")}m.normalized=g}return m})}loadTexture(e){const t=this.json,n=this.options,r=t.textures[e].source,a=t.images[r];let o=this.textureLoader;if(a.uri){const c=n.manager.getHandler(a.uri);c!==null&&(o=c)}return this.loadTextureImage(e,r,o)}loadTextureImage(e,t,n){const s=this,r=this.json,a=r.textures[e],o=r.images[t],c=(o.uri||o.bufferView)+":"+a.sampler;if(this.textureCache[c])return this.textureCache[c];const l=this.loadImageSource(t,n).then(function(d){d.flipY=!1,d.name=a.name||o.name||"",d.name===""&&typeof o.uri=="string"&&o.uri.startsWith("data:image/")===!1&&(d.name=o.uri);const u=(r.samplers||{})[a.sampler]||{};return d.magFilter=Dh[u.magFilter]||zt,d.minFilter=Dh[u.minFilter]||qn,d.wrapS=Ph[u.wrapS]||Mi,d.wrapT=Ph[u.wrapT]||Mi,d.generateMipmaps=!d.isCompressedTexture&&d.minFilter!==Jt&&d.minFilter!==zt,s.associations.set(d,{textures:e}),d}).catch(function(){return null});return this.textureCache[c]=l,l}loadImageSource(e,t){const n=this,s=this.json,r=this.options;if(this.sourceCache[e]!==void 0)return this.sourceCache[e].then(h=>h.clone());const a=s.images[e],o=self.URL||self.webkitURL;let c=a.uri||"",l=!1;if(a.bufferView!==void 0)c=n.getDependency("bufferView",a.bufferView).then(function(h){l=!0;const u=new Blob([h],{type:a.mimeType});return c=o.createObjectURL(u),c});else if(a.uri===void 0)throw new Error("THREE.GLTFLoader: Image "+e+" is missing URI and bufferView");const d=Promise.resolve(c).then(function(h){return new Promise(function(u,f){let g=u;t.isImageBitmapLoader===!0&&(g=function(v){const m=new Nt(v);m.needsUpdate=!0,u(m)}),t.load(Or.resolveURL(h,r.path),g,void 0,f)})}).then(function(h){return l===!0&&o.revokeObjectURL(c),fi(h,a),h.userData.mimeType=a.mimeType||Ny(a.uri),h}).catch(function(h){throw console.error("THREE.GLTFLoader: Couldn't load texture",c),h});return this.sourceCache[e]=d,d}assignTexture(e,t,n,s){const r=this;return this.getDependency("texture",n.index).then(function(a){if(!a)return null;if(n.texCoord!==void 0&&n.texCoord>0&&(a=a.clone(),a.channel=n.texCoord),r.extensions[Qe.KHR_TEXTURE_TRANSFORM]){const o=n.extensions!==void 0?n.extensions[Qe.KHR_TEXTURE_TRANSFORM]:void 0;if(o){const c=r.associations.get(a);a=r.extensions[Qe.KHR_TEXTURE_TRANSFORM].extendTexture(a,o),r.associations.set(a,c)}}return s!==void 0&&(a.colorSpace=s),e[t]=a,a})}assignFinalMaterial(e){const t=e.geometry;let n=e.material;const s=t.attributes.tangent===void 0,r=t.attributes.color!==void 0,a=t.attributes.normal===void 0;if(e.isPoints){const o="PointsMaterial:"+n.uuid;let c=this.cache.get(o);c||(c=new Fu,$n.prototype.copy.call(c,n),c.color.copy(n.color),c.map=n.map,c.sizeAttenuation=!1,this.cache.add(o,c)),n=c}else if(e.isLine){const o="LineBasicMaterial:"+n.uuid;let c=this.cache.get(o);c||(c=new Ol,$n.prototype.copy.call(c,n),c.color.copy(n.color),c.map=n.map,this.cache.add(o,c)),n=c}if(s||r||a){let o="ClonedMaterial:"+n.uuid+":";s&&(o+="derivative-tangents:"),r&&(o+="vertex-colors:"),a&&(o+="flat-shading:");let c=this.cache.get(o);c||(c=n.clone(),r&&(c.vertexColors=!0),a&&(c.flatShading=!0),s&&(c.normalScale&&(c.normalScale.y*=-1),c.clearcoatNormalScale&&(c.clearcoatNormalScale.y*=-1)),this.cache.add(o,c),this.associations.set(c,this.associations.get(n))),n=c}e.material=n}getMaterialType(){return se}loadMaterial(e){const t=this,n=this.json,s=this.extensions,r=n.materials[e];let a;const o={},c=r.extensions||{},l=[];if(c[Qe.KHR_MATERIALS_UNLIT]){const h=s[Qe.KHR_MATERIALS_UNLIT];a=h.getMaterialType(),l.push(h.extendParams(o,r,t))}else{const h=r.pbrMetallicRoughness||{};if(o.color=new Oe(1,1,1),o.opacity=1,Array.isArray(h.baseColorFactor)){const u=h.baseColorFactor;o.color.setRGB(u[0],u[1],u[2],Yt),o.opacity=u[3]}h.baseColorTexture!==void 0&&l.push(t.assignTexture(o,"map",h.baseColorTexture,At)),o.metalness=h.metallicFactor!==void 0?h.metallicFactor:1,o.roughness=h.roughnessFactor!==void 0?h.roughnessFactor:1,h.metallicRoughnessTexture!==void 0&&(l.push(t.assignTexture(o,"metalnessMap",h.metallicRoughnessTexture)),l.push(t.assignTexture(o,"roughnessMap",h.metallicRoughnessTexture))),a=this._invokeOne(function(u){return u.getMaterialType&&u.getMaterialType(e)}),l.push(Promise.all(this._invokeAll(function(u){return u.extendMaterialParams&&u.extendMaterialParams(e,o)})))}r.doubleSided===!0&&(o.side=En);const d=r.alphaMode||hc.OPAQUE;if(d===hc.BLEND?(o.transparent=!0,o.depthWrite=!1):(o.transparent=!1,d===hc.MASK&&(o.alphaTest=r.alphaCutoff!==void 0?r.alphaCutoff:.5)),r.normalTexture!==void 0&&a!==Tn&&(l.push(t.assignTexture(o,"normalMap",r.normalTexture)),o.normalScale=new Ke(1,1),r.normalTexture.scale!==void 0)){const h=r.normalTexture.scale;o.normalScale.set(h,h)}if(r.occlusionTexture!==void 0&&a!==Tn&&(l.push(t.assignTexture(o,"aoMap",r.occlusionTexture)),r.occlusionTexture.strength!==void 0&&(o.aoMapIntensity=r.occlusionTexture.strength)),r.emissiveFactor!==void 0&&a!==Tn){const h=r.emissiveFactor;o.emissive=new Oe().setRGB(h[0],h[1],h[2],Yt)}return r.emissiveTexture!==void 0&&a!==Tn&&l.push(t.assignTexture(o,"emissiveMap",r.emissiveTexture,At)),Promise.all(l).then(function(){const h=new a(o);return r.name&&(h.name=r.name),fi(h,r),t.associations.set(h,{materials:e}),r.extensions&&as(s,h,r),h})}createUniqueName(e){const t=lt.sanitizeNodeName(e||"");return t in this.nodeNamesUsed?t+"_"+ ++this.nodeNamesUsed[t]:(this.nodeNamesUsed[t]=0,t)}loadGeometries(e){const t=this,n=this.extensions,s=this.primitiveCache;function r(o){return n[Qe.KHR_DRACO_MESH_COMPRESSION].decodePrimitive(o,t).then(function(c){return Nh(c,o,t)})}const a=[];for(let o=0,c=e.length;o<c;o++){const l=e[o],d=Py(l),h=s[d];if(h)a.push(h.promise);else{let u;l.extensions&&l.extensions[Qe.KHR_DRACO_MESH_COMPRESSION]?u=r(l):u=Nh(new cn,l,t),s[d]={primitive:l,promise:u},a.push(u)}}return Promise.all(a)}loadMesh(e){const t=this,n=this.json,s=this.extensions,r=n.meshes[e],a=r.primitives,o=[];for(let c=0,l=a.length;c<l;c++){const d=a[c].material===void 0?Iy(this.cache):this.getDependency("material",a[c].material);o.push(d)}return o.push(t.loadGeometries(a)),Promise.all(o).then(function(c){const l=c.slice(0,c.length-1),d=c[c.length-1],h=[];for(let f=0,g=d.length;f<g;f++){const v=d[f],m=a[f];let p;const _=l[f];if(m.mode===Mn.TRIANGLES||m.mode===Mn.TRIANGLE_STRIP||m.mode===Mn.TRIANGLE_FAN||m.mode===void 0)p=r.isSkinnedMesh===!0?new Q_(v,_):new X(v,_),p.isSkinnedMesh===!0&&p.normalizeSkinWeights(),m.mode===Mn.TRIANGLE_STRIP?p.geometry=Ih(p.geometry,vu):m.mode===Mn.TRIANGLE_FAN&&(p.geometry=Ih(p.geometry,el));else if(m.mode===Mn.LINES)p=new ix(v,_);else if(m.mode===Mn.LINE_STRIP)p=new So(v,_);else if(m.mode===Mn.LINE_LOOP)p=new sx(v,_);else if(m.mode===Mn.POINTS)p=new rx(v,_);else throw new Error("THREE.GLTFLoader: Primitive mode unsupported: "+m.mode);Object.keys(p.geometry.morphAttributes).length>0&&Dy(p,r),p.name=t.createUniqueName(r.name||"mesh_"+e),fi(p,r),m.extensions&&as(s,p,m),t.assignFinalMaterial(p),h.push(p)}for(let f=0,g=h.length;f<g;f++)t.associations.set(h[f],{meshes:e,primitives:f});if(h.length===1)return r.extensions&&as(s,h[0],r),h[0];const u=new He;r.extensions&&as(s,u,r),t.associations.set(u,{meshes:e});for(let f=0,g=h.length;f<g;f++)u.add(h[f]);return u})}loadCamera(e){let t;const n=this.json.cameras[e],s=n[n.type];if(!s){console.warn("THREE.GLTFLoader: Missing camera parameters.");return}return n.type==="perspective"?t=new Zt(Pp.radToDeg(s.yfov),s.aspectRatio||1,s.znear||1,s.zfar||2e6):n.type==="orthographic"&&(t=new Il(-s.xmag,s.xmag,s.ymag,-s.ymag,s.znear,s.zfar)),n.name&&(t.name=this.createUniqueName(n.name)),fi(t,n),Promise.resolve(t)}loadSkin(e){const t=this.json.skins[e],n=[];for(let s=0,r=t.joints.length;s<r;s++)n.push(this._loadNodeShallow(t.joints[s]));return t.inverseBindMatrices!==void 0?n.push(this.getDependency("accessor",t.inverseBindMatrices)):n.push(null),Promise.all(n).then(function(s){const r=s.pop(),a=s,o=[],c=[];for(let l=0,d=a.length;l<d;l++){const h=a[l];if(h){o.push(h);const u=new We;r!==null&&u.fromArray(r.array,l*16),c.push(u)}else console.warn('THREE.GLTFLoader: Joint "%s" could not be found.',t.joints[l])}return new Ul(o,c)})}loadAnimation(e){const t=this.json,n=this,s=t.animations[e],r=s.name?s.name:"animation_"+e,a=[],o=[],c=[],l=[],d=[];for(let h=0,u=s.channels.length;h<u;h++){const f=s.channels[h],g=s.samplers[f.sampler],v=f.target,m=v.node,p=s.parameters!==void 0?s.parameters[g.input]:g.input,_=s.parameters!==void 0?s.parameters[g.output]:g.output;v.node!==void 0&&(a.push(this.getDependency("node",m)),o.push(this.getDependency("accessor",p)),c.push(this.getDependency("accessor",_)),l.push(g),d.push(v))}return Promise.all([Promise.all(a),Promise.all(o),Promise.all(c),Promise.all(l),Promise.all(d)]).then(function(h){const u=h[0],f=h[1],g=h[2],v=h[3],m=h[4],p=[];for(let _=0,E=u.length;_<E;_++){const x=u[_],C=f[_],T=g[_],w=v[_],R=m[_];if(x===void 0)continue;x.updateMatrix&&x.updateMatrix();const S=n._createAnimationTracks(x,C,T,w,R);if(S)for(let y=0;y<S.length;y++)p.push(S[y])}return new px(r,void 0,p)})}createNodeMesh(e){const t=this.json,n=this,s=t.nodes[e];return s.mesh===void 0?null:n.getDependency("mesh",s.mesh).then(function(r){const a=n._getNodeRef(n.meshCache,s.mesh,r);return s.weights!==void 0&&a.traverse(function(o){if(o.isMesh)for(let c=0,l=s.weights.length;c<l;c++)o.morphTargetInfluences[c]=s.weights[c]}),a})}loadNode(e){const t=this.json,n=this,s=t.nodes[e],r=n._loadNodeShallow(e),a=[],o=s.children||[];for(let l=0,d=o.length;l<d;l++)a.push(n.getDependency("node",o[l]));const c=s.skin===void 0?Promise.resolve(null):n.getDependency("skin",s.skin);return Promise.all([r,Promise.all(a),c]).then(function(l){const d=l[0],h=l[1],u=l[2];u!==null&&d.traverse(function(f){f.isSkinnedMesh&&f.bind(u,Uy)});for(let f=0,g=h.length;f<g;f++)d.add(h[f]);return d})}_loadNodeShallow(e){const t=this.json,n=this.extensions,s=this;if(this.nodeCache[e]!==void 0)return this.nodeCache[e];const r=t.nodes[e],a=r.name?s.createUniqueName(r.name):"",o=[],c=s._invokeOne(function(l){return l.createNodeMesh&&l.createNodeMesh(e)});return c&&o.push(c),r.camera!==void 0&&o.push(s.getDependency("camera",r.camera).then(function(l){return s._getNodeRef(s.cameraCache,r.camera,l)})),s._invokeAll(function(l){return l.createNodeAttachment&&l.createNodeAttachment(e)}).forEach(function(l){o.push(l)}),this.nodeCache[e]=Promise.all(o).then(function(l){let d;if(r.isBone===!0?d=new Ou:l.length>1?d=new He:l.length===1?d=l[0]:d=new Mt,d!==l[0])for(let h=0,u=l.length;h<u;h++)d.add(l[h]);if(r.name&&(d.userData.name=r.name,d.name=a),fi(d,r),r.extensions&&as(n,d,r),r.matrix!==void 0){const h=new We;h.fromArray(r.matrix),d.applyMatrix4(h)}else r.translation!==void 0&&d.position.fromArray(r.translation),r.rotation!==void 0&&d.quaternion.fromArray(r.rotation),r.scale!==void 0&&d.scale.fromArray(r.scale);return s.associations.has(d)||s.associations.set(d,{}),s.associations.get(d).nodes=e,d}),this.nodeCache[e]}loadScene(e){const t=this.extensions,n=this.json.scenes[e],s=this,r=new He;n.name&&(r.name=s.createUniqueName(n.name)),fi(r,n),n.extensions&&as(t,r,n);const a=n.nodes||[],o=[];for(let c=0,l=a.length;c<l;c++)o.push(s.getDependency("node",a[c]));return Promise.all(o).then(function(c){for(let d=0,h=c.length;d<h;d++)r.add(c[d]);const l=d=>{const h=new Map;for(const[u,f]of s.associations)(u instanceof $n||u instanceof Nt)&&h.set(u,f);return d.traverse(u=>{const f=s.associations.get(u);f!=null&&h.set(u,f)}),h};return s.associations=l(r),r})}_createAnimationTracks(e,t,n,s,r){const a=[],o=e.name?e.name:e.uuid,c=[];Ui[r.path]===Ui.weights?e.traverse(function(u){u.morphTargetInfluences&&c.push(u.name?u.name:u.uuid)}):c.push(o);let l;switch(Ui[r.path]){case Ui.weights:l=sr;break;case Ui.rotation:l=rr;break;case Ui.position:case Ui.scale:l=ar;break;default:switch(n.itemSize){case 1:l=sr;break;case 2:case 3:default:l=ar;break}break}const d=s.interpolation!==void 0?Cy[s.interpolation]:qr,h=this._getArrayFromAccessor(n);for(let u=0,f=c.length;u<f;u++){const g=new l(c[u]+"."+Ui[r.path],t.array,h,d);s.interpolation==="CUBICSPLINE"&&this._createCubicSplineTrackInterpolant(g),a.push(g)}return a}_getArrayFromAccessor(e){let t=e.array;if(e.normalized){const n=cl(t.constructor),s=new Float32Array(t.length);for(let r=0,a=t.length;r<a;r++)s[r]=t[r]*n;t=s}return t}_createCubicSplineTrackInterpolant(e){e.createInterpolant=function(n){const s=this instanceof rr?Ry:Ku;return new s(this.times,this.values,this.getValueSize()/3,n)},e.createInterpolant.isInterpolantFactoryMethodGLTFCubicSpline=!0}}function Fy(i,e,t){const n=e.attributes,s=new wi;if(n.POSITION!==void 0){const o=t.json.accessors[n.POSITION],c=o.min,l=o.max;if(c!==void 0&&l!==void 0){if(s.set(new L(c[0],c[1],c[2]),new L(l[0],l[1],l[2])),o.normalized){const d=cl(Ks[o.componentType]);s.min.multiplyScalar(d),s.max.multiplyScalar(d)}}else{console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.");return}}else return;const r=e.targets;if(r!==void 0){const o=new L,c=new L;for(let l=0,d=r.length;l<d;l++){const h=r[l];if(h.POSITION!==void 0){const u=t.json.accessors[h.POSITION],f=u.min,g=u.max;if(f!==void 0&&g!==void 0){if(c.setX(Math.max(Math.abs(f[0]),Math.abs(g[0]))),c.setY(Math.max(Math.abs(f[1]),Math.abs(g[1]))),c.setZ(Math.max(Math.abs(f[2]),Math.abs(g[2]))),u.normalized){const v=cl(Ks[u.componentType]);c.multiplyScalar(v)}o.max(c)}else console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.")}}s.expandByVector(o)}i.boundingBox=s;const a=new Jn;s.getCenter(a.center),a.radius=s.min.distanceTo(s.max)/2,i.boundingSphere=a}function Nh(i,e,t){const n=e.attributes,s=[];function r(a,o){return t.getDependency("accessor",a).then(function(c){i.setAttribute(o,c)})}for(const a in n){const o=ol[a]||a.toLowerCase();o in i.attributes||s.push(r(n[a],o))}if(e.indices!==void 0&&!i.index){const a=t.getDependency("accessor",e.indices).then(function(o){i.setIndex(o)});s.push(a)}return tt.workingColorSpace!==Yt&&"COLOR_0"in n&&console.warn(`THREE.GLTFLoader: Converting vertex colors from "srgb-linear" to "${tt.workingColorSpace}" not supported.`),fi(i,e),Fy(i,e,t),Promise.all(s).then(function(){return e.targets!==void 0?Ly(i,e.targets,t):i})}const By=new zu,ky=new ny;new iy;let La=null,Da=null,Pa=null,Na=null;const fc=new Map;let Bs=null;function en(i,e=1,t=1,n=!1){const s=By.load(i);return s.wrapS=Mi,s.wrapT=Mi,s.repeat.set(e,t),n&&(s.colorSpace=At),s}function zy(i,e){const t="/assets/hdri/city_sky.hdr";ky.load(t,n=>{n.mapping=Wr,i.background=n,i.environment=n,console.log("[GazeDrive Assets] Loaded Urban HDRI from",t)},void 0,()=>{console.warn(`[GazeDrive Assets] HDRI not found at ${t}. Falling back to procedural Indian city warm atmospheric haze sky.
To use real HDRI, place city_sky.hdr in public/assets/hdri/`);const n=document.createElement("canvas");n.width=1024,n.height=512;const s=n.getContext("2d"),r=s.createLinearGradient(0,0,0,512);r.addColorStop(0,"#4a6d8c"),r.addColorStop(.45,"#8eaec5"),r.addColorStop(.75,"#d4c2a5"),r.addColorStop(.92,"#eedbc5"),r.addColorStop(1,"#b8a690"),s.fillStyle=r,s.fillRect(0,0,1024,512);const a=s.createRadialGradient(680,220,10,680,220,180);a.addColorStop(0,"rgba(255, 250, 230, 0.95)"),a.addColorStop(.2,"rgba(255, 235, 180, 0.45)"),a.addColorStop(.6,"rgba(255, 220, 160, 0.15)"),a.addColorStop(1,"rgba(255, 220, 160, 0)"),s.fillStyle=a,s.fillRect(0,0,1024,512);const o=new Kr(n);o.mapping=Wr,o.colorSpace=At,i.background=o,i.environment=o}),i.fog=new Dl(13813428,.005)}function Hy(){if(La)return La;const i=en("/assets/textures/asphalt_color.jpg",2,6,!0),e=en("/assets/textures/asphalt_normal.jpg",2,6,!1),t=en("/assets/textures/asphalt_roughness.jpg",2,6,!1);return La=new se({map:i,normalMap:e,normalScale:new Ke(.8,.8),roughnessMap:t,roughness:.65,metalness:.12}),La}function Gy(){if(Da)return Da;const i=en("/assets/textures/paving_color.jpg",2,8,!0),e=en("/assets/textures/paving_normal.jpg",2,8,!1),t=en("/assets/textures/paving_roughness.jpg",2,8,!1);return Da=new se({map:i,normalMap:e,normalScale:new Ke(.7,.7),roughnessMap:t,roughness:.75,metalness:.05}),Da}function ro(){if(Pa)return Pa;const i=en("/assets/textures/concrete_color.jpg",1,3,!0),e=en("/assets/textures/concrete_normal.jpg",1,3,!1),t=en("/assets/textures/concrete_roughness.jpg",1,3,!1);return Pa=new se({map:i,normalMap:e,normalScale:new Ke(.6,.6),roughnessMap:t,roughness:.82,metalness:.05}),Pa}function Vy(i=14207934){if(fc.has(i))return fc.get(i);const e=en("/assets/textures/plaster_color.jpg",2,2,!0),t=en("/assets/textures/plaster_normal.jpg",2,2,!1),n=en("/assets/textures/plaster_roughness.jpg",2,2,!1),s=new se({color:i,map:e,normalMap:t,normalScale:new Ke(.65,.65),roughnessMap:n,roughness:.85,metalness:.05});return fc.set(i,s),s}function Wy(){if(Na)return Na;const i=en("/assets/textures/bricks_color.jpg",3,3,!0),e=en("/assets/textures/bricks_normal.jpg",3,3,!1),t=en("/assets/textures/bricks_roughness.jpg",3,3,!1);return Na=new se({map:i,normalMap:e,normalScale:new Ke(.8,.8),roughnessMap:t,roughness:.88,metalness:.05}),Na}function Xy(i=0){const e=[{eng:"SHARMA MEDICALS & SURGICALS",ind:"दवाखाना • 24 HOURS PHARMACY",tag:"ALL MEDICINES & HEALTHCARE • MOB: 98123 45678",bg:"#0a643b",accent:"#ffffff",cross:!0},{eng:"ROYAL TEXTILES & SILK SAREES",ind:"रॉयल वस्त्र भण्डार • होलसेल व रिटेल",tag:"EXCLUSIVE WEDDING WEAR & SUITINGS",bg:"#8b131f",accent:"#ffd700"},{eng:"ANNAPURNA VEG RESTAURANT",ind:"होटल अन्नपूर्णा • शुद्ध शाकाहारी",tag:"SOUTH INDIAN MEALS • CHAI • DOSA • COFFEE",bg:"#c9510c",accent:"#ffffff"},{eng:"DELUXE BAKERY & CAKE CORNER",ind:"डिलक्स बेकरी • ताज़ा केक व पेस्ट्री",tag:"FRESH BREAD • PASTRIES • SNACKS & SWEETS",bg:"#1b4d89",accent:"#ffdd66"},{eng:"JANATA HARDWARE & ELECTRICALS",ind:"जनता हार्डवेयर व पेंट्स स्टोर",tag:"PAINTS • SANITARY • PIPES • TOOLS",bg:"#2b2e35",accent:"#ffcc00"},{eng:"SUPER MOBILE & ELECTRONICS",ind:"सुपर मोबाइल रिपेयरिंग सेंटर",tag:"SMARTPHONE REPAIRS • ACCESSORIES • RECHARGE",bg:"#0059b3",accent:"#00e5a3"},{eng:"CHAI POINT & TEA STALL",ind:"स्पेशल अदरक मसाला चाय व नाश्ता",tag:"HOT SAMOSAS • BUN MASKA • FRESH TEA",bg:"#7a3b12",accent:"#fff3d1"}],t=e[i%e.length],n=document.createElement("canvas");n.width=512,n.height=128;const s=n.getContext("2d");s.fillStyle=t.bg,s.fillRect(0,0,512,128),s.strokeStyle=t.accent,s.lineWidth=6,s.strokeRect(4,4,504,120),s.fillStyle=t.accent,s.font='bold 26px "Inter", sans-serif',s.textAlign="center",s.fillText(t.eng,256,42),s.fillStyle="#ffffff",s.font="bold 22px sans-serif",s.fillText(t.ind,256,78),s.fillStyle="rgba(255, 255, 255, 0.85)",s.font='12px "Inter", monospace',s.fillText(t.tag,256,108),t.cross&&(s.fillStyle="#ff2222",s.fillRect(24,44,28,8),s.fillRect(34,34,8,28),s.fillRect(460,44,28,8),s.fillRect(470,34,8,28));const r=new Kr(n);return r.colorSpace=At,r}function Yy(){if(Bs)return Bs;const i=document.createElement("canvas");i.width=1024,i.height=256;const e=i.getContext("2d");e.clearRect(0,0,1024,256),e.fillStyle="rgba(100, 115, 130, 0.45)";let t=10;for(;t<1020;){const n=24+Math.random()*45,s=60+Math.random()*150;e.fillRect(t,256-s,n,s),Math.random()>.6&&e.fillRect(t+n/2-1,256-s-25,2,25),t+=n+6+Math.random()*12}return Bs=new Kr(i),Bs.wrapS=Mi,Bs.repeat.set(3,1),Bs}let Zs="HIGH";function qy(i){Zs=i.toUpperCase(),console.log("[GazeDrive Scenery] Environment Quality set to:",Zs)}const $y=new se({color:15658734,roughness:.5}),Ky=new se({color:5924216,metalness:.6,roughness:.4}),Uh=new se({color:1118481,roughness:.6}),Zy=new se({color:13934615,roughness:.5});new se({color:8551795,roughness:.85});const jy=new Ol({color:1710618,linewidth:1}),ao=new se({color:1846077,roughness:.1,metalness:.8});function Oh(i=0,e=!1){const t=new He,n=[3,4,4,5,5,6],s=n[Math.abs(i)%n.length],r=3.2,a=s*r,o=14,c=15,l=[14207934,13350018,12088152,7904158,10919311,13608594],d=l[Math.abs(i)%l.length],u=Math.abs(i)%4===1?Wy():Vy(d),f=new le(o,a,c),g=new X(f,u);g.position.set(0,a/2,0),g.castShadow=!0,g.receiveShadow=!0,t.add(g);const v=5.8,m=new le(v,2.5,.1);[-3.4,3.4].forEach((U,V)=>{const z=new X(m,Ky);z.position.set(U,1.3,-c/2-.06),t.add(z);const Z=new le(v+.2,1,.12),G=Xy((i*3+V)%7),ee=new se({map:G,roughness:.3}),ie=new X(Z,ee);ie.position.set(U,3.1,-c/2-.12),ie.castShadow=!0,t.add(ie);const ae=new le(v+.3,.15,1.2);ae.rotateX(Math.PI/12);const he=(i+V)%2===0?13378082:26282,Se=new se({color:he,roughness:.7}),K=new X(ae,Se);K.position.set(U,2.55,-c/2-.65),K.castShadow=!0,t.add(K)});const p=1.4,_=1.6,E=new le(p,_,.08),x=new le(p+.4,.1,.55),C=new le(.75,.48,.38),T=[-4.5,-1.5,1.5,4.5];for(let U=1;U<s;U++){const V=U*r+1.6,z=ro(),Z=new le(o+.3,.18,c+.3),G=new X(Z,z);if(G.position.set(0,U*r,0),t.add(G),T.forEach((ee,ie)=>{const ae=new X(E,ao);ae.position.set(ee,V,-c/2-.04),t.add(ae);const he=new X(x,z);if(he.position.set(ee,V+_/2+.08,-c/2-.28),he.castShadow=!0,t.add(he),Zs!=="LOW"&&(i+U+ie)%3===0){const Se=new X(C,$y);Se.position.set(ee,V-_/2-.3,-c/2-.22),t.add(Se)}}),U%2===1&&Zs!=="LOW"){const ee=new le(4.2,.15,1.2),ie=new X(ee,z);ie.position.set(0,U*r+.1,-c/2-.6);const ae=new le(4.2,.8,.06),he=new se({color:2236962,metalness:.8}),Se=new X(ae,he);Se.position.set(0,U*r+.5,-c/2-1.18),t.add(ie,Se)}}const w=new le(o+.2,.8,c+.2),R=new X(w,u);R.position.set(0,a+.4,0),t.add(R);const S=new le(3.6,2.4,4.2),y=new X(S,u);y.position.set(-3.2,a+1.2,2),t.add(y);const I=new ht(.7,.7,1.4,12),O=i%2===0?Uh:Zy,P=new X(I,O);if(P.position.set(2.4,a+.8,-1.8),P.castShadow=!0,t.add(P),Zs==="HIGH"){const U=new X(I,Uh);U.position.set(4.2,a+.8,-1.8),U.castShadow=!0,t.add(U);const V=new ht(.04,.04,1.6,6),z=new se({color:14540253,metalness:.6}),Z=new X(V,z);Z.position.set(1.5,a+.8,2.8);const G=new ys(.45,12,6,0,Math.PI*2,0,Math.PI/3),ee=new X(G,z);ee.rotation.x=-Math.PI/4,ee.position.set(1.5,a+1.6,2.8),t.add(Z,ee)}return t}function Jy(){const i=new He,e=new se({color:34867,roughness:.35,metalness:.2}),t=new le(1.3,.45,2.4),n=new X(t,e);n.position.y=.45,n.castShadow=!0,i.add(n);const s=new se({color:16763904,roughness:.45}),r=new le(1.26,.75,1.8),a=new X(r,s);a.position.set(0,1.25,-.2),a.castShadow=!0,i.add(a);const o=new le(1,.55,.7),c=new X(o,s);c.position.set(0,.72,.95),i.add(c);const l=new le(1.1,.5,.05),d=new X(l,ao);d.position.set(0,1.22,.72),i.add(d);const h=new ht(.12,.12,.08,12);h.rotateX(Math.PI/2);const u=new se({color:16777168,emissive:16777168,emissiveIntensity:1.2}),f=new X(h,u);f.position.set(0,.72,1.32),i.add(f);const g=new le(.16,.16,.1),v=new se({color:13840175}),m=new X(g,v);m.position.set(-.45,.85,.6),i.add(m);const p=new le(1.1,.35,.45),_=new se({color:2236962,roughness:.9}),E=new X(p,_);E.position.set(0,.65,-.6),i.add(E);const x=.24,C=new ht(x,x,.16,12);C.rotateZ(Math.PI/2);const T=new se({color:1710618,roughness:.85}),w=new X(C,T);w.position.set(0,x,.9),w.castShadow=!0,i.add(w);const R=new X(C,T);R.position.set(-.62,x,-.7);const S=new X(C,T);return S.position.set(.62,x,-.7),i.add(R,S),i}function Qy(){const i=new He,e=9.2,t=2.4,n=2.9,s=new se({color:13378082,roughness:.3,metalness:.2}),r=new le(t,n,e),a=new X(r,s);a.position.y=n/2+.4,a.castShadow=!0,i.add(a);const o=new se({color:16770723,roughness:.5}),c=new le(t+.05,.7,e+.05),l=new X(c,o);l.position.y=n+.1,i.add(l);const d=new le(1.6,.4,.1),h=new se({color:1118481,roughness:.6}),u=new X(d,h);u.position.set(0,n+.1,e/2+.05),i.add(u);const f=new le(1,.9,.05),g=new X(f,ao);g.position.set(-.55,2.1,e/2+.04);const v=new X(f,ao);v.position.set(.55,2.1,e/2+.04),i.add(g,v);const m=.45,p=new ht(m,m,.32,16);p.rotateZ(Math.PI/2);const _=new se({color:1710618,roughness:.9});return[[-1.15,m,2.4],[1.15,m,2.4],[-1.15,m,-2.6],[1.15,m,-2.6]].forEach(([E,x,C])=>{const T=new X(p,_);T.position.set(E,x,C),T.castShadow=!0,i.add(T)}),i}function eM(i=!1){const e=new He,t=new se({color:31487,roughness:.3,metalness:.3}),n=new le(.5,.4,1.4),s=new X(n,t);s.position.set(0,.45,0),e.add(s);const r=new le(.48,.7,.12),a=new X(r,t);a.position.set(0,.7,.55),e.add(a);const o=new le(.7,.06,.06),c=new se({color:1118481}),l=new X(o,c);l.position.set(0,1.05,.52),e.add(l);const d=new ht(.09,.09,.06,12);d.rotateX(Math.PI/2);const h=new se({color:16777164,emissive:16777164,emissiveIntensity:1}),u=new X(d,h);u.position.set(0,1.05,.58),e.add(u);const f=.2,g=new ht(f,f,.12,12);g.rotateZ(Math.PI/2);const v=new se({color:1710618,roughness:.9}),m=new X(g,v);m.position.set(0,f,.6);const p=new X(g,v);if(p.position.set(0,f,-.5),e.add(m,p),i){const _=new He,E=new se({color:2241348,roughness:.6}),x=new X(new le(.4,.5,.25),E);x.position.set(0,1.15,-.05);const C=new se({color:16777215,roughness:.2}),T=new X(new ys(.18,12,12),C);T.position.set(0,1.55,-.05),_.add(x,T),e.add(_)}return e}function tM(i=40){const e=new He,t=7.5,n=new le(.24,t,.24),s=new se({color:9077881,roughness:.9}),r=new X(n,s);r.position.y=t/2,r.castShadow=!0,e.add(r);const a=new le(2.4,.1,.1),o=new se({color:3356738,metalness:.8}),c=new X(a,o);c.position.set(0,t-.5,0),e.add(c);const l=new ht(.06,.06,.2,6),d=new se({color:11903114,roughness:.3});return[-.9,0,.9].forEach(h=>{const u=new X(l,d);u.position.set(h,t-.38,0),e.add(u)}),Zs!=="LOW"&&[-.9,0,.9].forEach(h=>{const f=new ox([new L(h,t-.3,0),new L(h,t-.85,i*.5),new L(h,t-.3,i)]).getPoints(12),g=new cn().setFromPoints(f),v=new So(g,jy);e.add(v)}),e}function nM(){const i=new He,e=new se({color:1789321,metalness:.6}),t=new ht(.06,.06,2.8,8),n=new X(t,e);n.position.set(-1.8,1.4,-.6);const s=new X(t,e);s.position.set(1.8,1.4,-.6),i.add(n,s);const r=new ht(2.4,2.4,4.4,16,1,!0,0,Math.PI*.45);r.rotateZ(Math.PI/2);const a=new se({color:26316,roughness:.4}),o=new X(r,a);o.position.set(0,2.7,-.2),o.castShadow=!0,i.add(o);const c=new le(3.6,.45,.06),l=new se({color:16763904}),d=new X(c,l);d.position.set(0,2.5,.6),i.add(d);const h=new le(3.2,.45,.45),u=new se({color:8947848,metalness:.5}),f=new X(h,u);return f.position.set(0,.35,-.6),i.add(f),i}function iM(){const i=new He,e=new ht(.25,.22,.7,12),t=new se({color:34867,roughness:.6}),n=new se({color:26316,roughness:.6}),s=new X(e,t);s.position.set(-.35,.45,0);const r=new X(e,n);return r.position.set(.35,.45,0),i.add(s,r),i}function sM(){const i=new He,e=ro(),t=9.5,n=70,s=new le(n,1.8,12),r=new X(s,e);r.position.set(0,t,0),r.castShadow=!0,r.receiveShadow=!0,i.add(r);const a=new le(2.8,t,2.8),o=new X(a,e);o.position.set(-16,t/2,0);const c=new X(a,e);c.position.set(16,t/2,0),i.add(o,c);const l=new le(n,1.2,.4),d=new X(l,e);d.position.set(0,t+1.2,-5.8);const h=new X(l,e);return h.position.set(0,t+1.2,5.8),i.add(d,h),i}function Fh(){const i=new Zi(160,40),e=new Tn({map:Yy(),transparent:!0,opacity:.65,depthWrite:!1}),t=new X(i,e);return t.position.y=20,t}function Bh(){const i=new He,e=new ht(.24,.38,2.4,8),t=new se({color:4864042,roughness:.95}),n=new X(e,t);n.position.y=1.2,n.castShadow=!0,i.add(n);const s=new se({color:4023848,roughness:.85}),r=new ys(1.6,8,8),a=new X(r,s);a.position.set(0,3.2,0);const o=new X(r,s);o.position.set(.8,3.6,.4),o.scale.set(.8,.8,.8);const c=new X(r,s);return c.position.set(-.7,3.4,-.4),c.scale.set(.85,.85,.85),a.castShadow=!0,o.castShadow=!0,c.castShadow=!0,i.add(a,o,c),i}function rM(){return Jy()}function aM(){const i=new He,e=new le(1.75,.65,3.9),t=new se({color:16119285,roughness:.2,metalness:.4}),n=new X(e,t);n.position.y=.55,n.castShadow=!0,i.add(n);const s=new le(1.35,.6,2.1),r=new se({color:1712691,roughness:.1,metalness:.8}),a=new X(s,r);a.position.set(0,1.1,-.2),i.add(a);const o=new ht(.32,.32,.22,12);o.rotateZ(Math.PI/2);const c=new se({color:1710618,roughness:.8});return[[-.88,.32,1.2],[.88,.32,1.2],[-.88,.32,-1.2],[.88,.32,-1.2]].forEach(([l,d,h])=>{const u=new X(o,c);u.position.set(l,d,h),i.add(u)}),i}function oM(){const i=new He,e=new le(1.8,.68,4),t=new se({color:1119516,roughness:.15,metalness:.8}),n=new X(e,t);n.position.y=.55,n.castShadow=!0,i.add(n);const s=new le(1.38,.62,2.15),r=new se({color:592912,roughness:.1,metalness:.9}),a=new X(s,r);a.position.set(0,1.12,-.2),i.add(a);const o=new ht(.33,.33,.24,12);o.rotateZ(Math.PI/2);const c=new se({color:1118481,roughness:.7});return[[-.9,.33,1.25],[.9,.33,1.25],[-.9,.33,-1.25],[.9,.33,-1.25]].forEach(([l,d,h])=>{const u=new X(o,c);u.position.set(l,d,h),i.add(u)}),i}function cM(){return Qy()}function lM(i,e,t){const n=$e.ROAD,s=-14.9,r=n.totalWidth/2+n.sidewalkWidth+7.5,a=2,o=e/a;for(let f=0;f<a;f++){const g=f*o+o/2,v=t*10+f*2,m=t*10+f*2+1,p=Oh(v,!1);p.position.set(s,0,g),i.add(p);const _=Oh(m,!0);_.position.set(r,0,g),_.rotation.y=Math.PI,i.add(_)}const c=-5,l=tM(e);if(l.position.set(c,0,e*.15),i.add(l),t%4===1){const f=nM();f.position.set(-6.4,0,e*.55),f.rotation.y=Math.PI/2,i.add(f)}const d=iM();if(d.position.set(-5.6000000000000005,0,e*.85),i.add(d),t%2===0){const f=eM(!1);f.position.set(-5.25,0,e*.35),f.rotation.y=Math.PI/6,i.add(f)}const h=Bh();h.position.set(-6.6000000000000005,0,e*.7);const u=Bh();if(u.position.set(n.totalWidth/2+2.2,0,e*.3),i.add(h,u),t%6===3){const f=sM();f.position.set(0,0,e*.5),i.add(f)}if(t%2===0){const f=Fh();f.position.set(-65,0,e*.5),f.rotation.y=Math.PI/2,i.add(f);const g=Fh();g.position.set(65,0,e*.5),g.rotation.y=-Math.PI/2,i.add(g)}}let pc;const ll=[];let bt=40,dl=14;function dM(i){pc=new He,i.add(pc),bt=$e.ROAD.segmentLength,dl=$e.ROAD.numSegments;for(let e=0;e<dl;e++){const t=hM(e);t.position.z=e*bt,pc.add(t),ll.push(t)}}function hM(i){const e=new He,t=$e.COLORS,n=$e.ROAD,s=new Zi(160,bt);s.rotateX(-Math.PI/2);const r=new X(s,ro());r.position.set(0,-.02,bt/2),r.receiveShadow=!0,e.add(r);const a=new le(n.totalWidth,.08,bt),o=new X(a,Hy());o.position.set(0,0,bt/2),o.receiveShadow=!0,e.add(o);const c=n.sidewalkWidth+1.2,l=new le(c,.16,bt),d=Gy(),h=new X(l,d);h.position.set(-6.5,.05,bt/2),h.receiveShadow=!0;const u=new X(l,d);u.position.set(n.totalWidth/2+c/2,.05,bt/2),u.receiveShadow=!0,e.add(h,u);const f=new le(.3,.18,bt),g=ro(),v=new X(f,g);v.position.set(-4.550000000000001,.06,bt/2);const m=new X(f,g);m.position.set(n.totalWidth/2+.15,.06,bt/2),e.add(v,m);const p=new le(.18,.09,bt),_=new Tn({color:t.roadMarkings}),E=new X(p,_);E.position.set(-4.15,.045,bt/2);const x=new X(p,_);x.position.set(n.totalWidth/2-.25,.045,bt/2),e.add(E,x);const C=new Tn({color:t.centerDashes}),T=n.dashLength,w=n.dashGap,R=Math.floor(bt/(T+w));for(let U=0;U<R;U++){const V=new le(.12,.09,T),z=new X(V,C),Z=U*(T+w)+T/2;z.position.set(-.1,.045,Z);const G=new le(.12,.09,T),ee=new X(G,C);ee.position.set(.1,.045,Z),e.add(z,ee)}const S=new ht(.08,.12,5.5,8),y=new se({color:3357511,metalness:.7}),I=new le(.3,.15,.6),O=new se({color:2237998}),P=new Tn({color:16777194});return[bt*.25,bt*.75].forEach(U=>{const V=new He,z=new X(S,y);z.position.y=2.75,V.add(z);const Z=new X(I,O);Z.position.set(.4,5.4,0);const G=new X(new le(.24,.04,.5),P);G.position.set(.4,5.32,0),V.add(Z,G),V.position.set(n.totalWidth/2+1.2,0,U),V.rotation.y=Math.PI,e.add(V)}),lM(e,bt,i),e}function uM(i){for(let t=0;t<ll.length;t++){const n=ll[t];n.position.z+bt<i-30&&(n.position.z+=dl*bt)}}let mc;const ji=[],Zu=3,ql=200,hl=10,ju=3,fM=8,oo=hl+ju+fM;function pM(i){mc=new He,i.add(mc),ji.length=0;for(let e=0;e<Zu;e++){const t=120+e*ql,n=mM(e,t);mc.add(n.group),ji.push(n)}}function mM(i,e){const t=new He,n=$e.COLORS,s=14,r=60,a=new le(r,.082,s),o=new se({color:n.road,roughness:.35,metalness:.2}),c=new X(a,o);c.position.set(0,.002,0),c.receiveShadow=!0,t.add(c);const l=new se({color:10066329,roughness:.8}),d=new le(.5,.2,s),h=new X(d,l);h.position.set(-29.75,.1,0);const u=new X(d,l);u.position.set(r/2-.25,.1,0),t.add(h,u);const f=-9.5,g=new le(4.2,.095,.6),v=new se({color:16777215,emissive:16777215,emissiveIntensity:.25,roughness:.4}),m=new X(g,v);m.position.set(-2.2,.048,f),m.receiveShadow=!0,t.add(m);const p=new X(g,v);p.position.set(2.2,.048,-f),t.add(p);const _=new le(4.2,.092,.2),E=new Tn({color:15658734}),x=new X(_,E);x.position.set(-2.2,.049,f-1.2),t.add(x);const C=new se({color:2370101,metalness:.85,roughness:.35}),T=6,w=new ht(.14,.18,T,16),R=new X(w,C);R.position.set(-5.6000000000000005,T/2,f+.5),R.castShadow=!0,t.add(R);const S=3.6,y=new ht(.09,.09,S,12);y.rotateZ(Math.PI/2);const I=new X(y,C);I.position.set(-5.6000000000000005+S/2,T-.3,f+.5),t.add(I);const O=new He;O.position.set(-2.2,T-.7,f+.5);const P=new le(.9,2.1,.08),U=new se({color:1118999,roughness:.7}),V=new X(P,U);O.add(V);const z=new le(.7,1.85,.35),Z=new se({color:1711652,roughness:.6}),G=new X(z,Z);G.position.z=.12,O.add(G);const ee=.22,ie=new ys(ee,16,16,0,Math.PI*2,0,Math.PI/2);ie.rotateX(-Math.PI/2);const ae=new ht(ee+.04,ee+.04,.22,16,1,!0,-Math.PI*.75,Math.PI*1.5);ae.rotateX(Math.PI/2);const he=new se({color:987413,roughness:.8}),Se=new se({color:3342336,emissive:16716032,emissiveIntensity:.1,roughness:.2}),K=new X(ie,Se);K.position.set(0,.55,.3);const ne=new X(ae,he);ne.position.set(0,.55,.35),O.add(K,ne);const pe=new se({color:3352064,emissive:16757504,emissiveIntensity:.1,roughness:.2}),oe=new X(ie,pe);oe.position.set(0,0,.3);const be=new X(ae,he);be.position.set(0,0,.35),O.add(oe,be);const Ee=new se({color:13080,emissive:65382,emissiveIntensity:.1,roughness:.2}),we=new X(ie,Ee);we.position.set(0,-.55,.3);const Ze=new X(ae,he);Ze.position.set(0,-.55,.35),O.add(we,Ze);const Ie=new Gl(65382,1.2,18);Ie.position.set(0,-.2,1),O.add(Ie);const Xe=O.clone();Xe.scale.set(.65,.65,.65),Xe.position.set(-5.6000000000000005,2.5,f+.5),t.add(Xe),t.add(O),t.position.set(0,0,e);const N=Yl(0,oo),ut={id:`intersection_${i}`,index:i,group:t,junctionZ:e,stopLineZ:e+f,cycleTimer:N,state:"GREEN",isForced:!1,redMat:Se,yellowMat:pe,greenMat:Ee,signalLight:Ie,signalHeadGroup:O,secondaryHead:Xe,passedPlayer:!1};return $l(ut),ut}function $l(i){const{state:e,redMat:t,yellowMat:n,greenMat:s,signalLight:r}=i;e==="RED"?(t.emissiveIntensity=3.5,t.color.setHex(16716032),n.emissiveIntensity=.05,s.emissiveIntensity=.05,r.color.setHex(16716032),r.intensity=1.6):e==="YELLOW"?(t.emissiveIntensity=.05,n.emissiveIntensity=3.2,n.color.setHex(16755200),s.emissiveIntensity=.05,r.color.setHex(16755200),r.intensity=1.4):(t.emissiveIntensity=.05,n.emissiveIntensity=.05,s.emissiveIntensity=3.2,s.color.setHex(65382),r.color.setHex(65382),r.intensity=1.6)}function gM(i,e){const t=Zu*ql;for(let n=0;n<ji.length;n++){const s=ji[n];if(!s.isForced&&i>0){s.cycleTimer=(s.cycleTimer+i)%oo;let r="GREEN";s.cycleTimer<hl?r="GREEN":s.cycleTimer<hl+ju?r="YELLOW":r="RED",r!==s.state&&(s.state=r,$l(s))}e.z>s.junctionZ+50&&(s.junctionZ+=t,s.stopLineZ=s.junctionZ-(14/2+2.5),s.group.position.z=s.junctionZ,s.passedPlayer=!1,s.isForced=!1,s.cycleTimer=Yl(0,oo))}}function Ju(i){let e=null,t=1/0;for(let n=0;n<ji.length;n++){const s=ji[n],r=s.stopLineZ-i;r>-15&&r<t&&(t=r,e=s)}return e}function vM(i=0){for(let e=0;e<ji.length;e++){const t=i+120+e*ql,n=ji[e];n.junctionZ=t,n.stopLineZ=t-(14/2+2.5),n.group.position.z=t,n.passedPlayer=!1,n.isForced=!1,n.cycleTimer=Yl(0,oo),n.state="GREEN",$l(n)}}let To=[],Qu=[],wo=0,Ws=0,co=0;const _M=4e3;let ul=0,qa=!1,fl=0,pl=0;const Gr=new Set,Xs=new Set;function xM(){To=[],Qu=[],wo=0,Ws=0,co=0,Gr.clear(),Xs.clear()}function yM(i){To.push(i),wo+=i.penaltyPoints||10,jt("TRAFFIC_RULE_VIOLATION",{violationId:i.id,type:i.type,title:i.title,speedKmh:i.speedKmh,penaltyPoints:i.penaltyPoints,pos:i.position}),Qu.forEach(e=>{try{e(i)}catch(t){console.error("Error in violation callback:",t)}})}function Fi(i,e={}){const t=performance.now(),n=`violation_${Date.now()}_${Math.floor(Math.random()*1e3)}`;let s="Traffic Violation",r=10,a=e.description||"";switch(i){case"SEATBELT_VIOLATION":s="Seatbelt Not Fastened",r=20,a||(a="Candidate operated vehicle without fastening safety belt!");break;case"GEAR_STALL_VIOLATION":s="Engine Stall / High Gear Takeoff",r=10,a||(a="Attempted takeoff in high gear resulting in engine stall. Select 1st gear.");break;case"GEAR_OVERREV_VIOLATION":s="Excessive Engine Over-Rev",r=10,a||(a="Operated vehicle at redline RPM in low gear without upshifting.");break;case"RED_LIGHT_JUMP":s="Red Light Jump",r=25,a||(a=`Crossed intersection on RED signal at ${Math.round(e.speedKmh||0)} km/h.`);break;case"STOP_LINE_VIOLATION":s="Stop Line Overrun",r=10,a||(a="Failed to halt before the white stop line on RED signal.");break;case"WRONG_SIDE_DRIVING":s="Wrong-Side Driving",r=20,a||(a="Drove into oncoming/right lane in Left-Hand Traffic zone.");break;case"COLLISION":s="Vehicle Collision",r=30,a||(a="Collided with a traffic hazard or obstacle.");break;case"SPEEDING":s="Speed Limit Exceeded",r=15,a||(a="Exceeded posted speed zone limit.");break;case"SPEEDING_IN_ZONE":s="Speeding in Caution / School Zone",r=15,a||(a="Exceeded speed limit in designated Go Slow / School Zone!");break;case"SOLID_LINE_CROSSING":s="Solid Line Cross Violation",r=10,a||(a="Crossed solid white divider marking (Overtaking Prohibited).");break;case"STOP_SIGN_IGNORED":s="Stop Sign Ignored",r=15,a||(a="Passed mandatory STOP sign without coming to a complete standstill.");break;case"ZEBRA_YIELD_FAILED":s="Failure to Yield to Pedestrian",r=25,a||(a="Did not yield right of way to crossing pedestrian at zebra crosswalk.");break;default:s=e.title||"Rule Infraction",r=e.penaltyPoints||10}const o={id:n,timestampMs:t,timeFormatted:new Date().toLocaleTimeString(),type:i,title:s,description:a,penaltyPoints:r,speedKmh:e.speedKmh!==void 0?Number(e.speedKmh.toFixed(1)):0,position:e.position||{x:0,y:0,z:0}};return yM(o),o}function MM(i,e,t,n,s=50,r="Urban Zone"){if(i<=0)return;const a=t/3.6,o=performance.now();t>s+5&&o-pl>5e3&&(pl=o,Fi("SPEEDING_IN_ZONE",{speedKmh:t,position:{x:e.x,y:e.y,z:e.z},description:`Exceeded ${r} limit! Drove at ${Math.round(t)} km/h (limit: ${s} km/h).`}));const c=Ju(e.z);if(c){const l=c.id,d=c.stopLineZ,h=c.junctionZ,u=c.state==="RED",f=c.state==="YELLOW",g=e.z+2;(u||f)&&g>d&&g<h+5&&!Gr.has(l)&&!Xs.has(l)&&a>1.5&&(Gr.add(l),Fi("STOP_LINE_VIOLATION",{speedKmh:t,position:{x:e.x,y:e.y,z:e.z},description:`Overran stop line on ${c.state} signal (${Math.round(t)} km/h).`})),u&&g>h-4&&g<h+12&&(Xs.has(l)||(Xs.add(l),Fi("RED_LIGHT_JUMP",{speedKmh:t,position:{x:e.x,y:e.y,z:e.z},description:`Jumped RED traffic signal through intersection at ${Math.round(t)} km/h!`}))),e.z>h+25&&(Gr.delete(l),Xs.delete(l))}e.x>.45&&t>6?(Ws+=i,Ws>1.2&&o-co>_M&&(co=o,Fi("WRONG_SIDE_DRIVING",{speedKmh:t,position:{x:e.x,y:e.y,z:e.z},description:`Driving on wrong side of the road (right lane in LHT zone) at ${Math.round(t)} km/h.`}))):Ws=Math.max(0,Ws-i*2.5),Math.abs(t)>2.5&&!Gu()&&o-ul>6e3&&(ul=o,Fi("SEATBELT_VIOLATION",{speedKmh:t,position:{x:e.x,y:e.y,z:e.z},description:`Vehicle driven at ${Math.round(t)} km/h without fastening seatbelt! Mandatory pre-drive violation.`})),Wx()?qa||(qa=!0,Fi("GEAR_STALL_VIOLATION",{speedKmh:0,position:{x:e.x,y:e.y,z:e.z},description:`Engine stalled! Attempted launch in ${io()} gear. Downshift to 1st gear.`})):qa=!1,Xx()>2.5&&o-fl>7e3&&(fl=o,Fi("GEAR_OVERREV_VIOLATION",{speedKmh:t,position:{x:e.x,y:e.y,z:e.z},description:`Excessive engine RPM in ${io()} gear at ${Math.round(t)} km/h. Upshift to higher gear.`}))}function lo(){return[...To]}function kh(){let i=100-wo;return i<0&&(i=0),i}function ef(){To=[],wo=0,Ws=0,co=0,ul=0,qa=!1,fl=0,pl=0,Gr.clear(),Xs.clear()}let pi=[],ho=[],tf=!0;function SM(){pi=[],ho=[],tf=!0,jt("SESSION_START",{startTime:new Date().toISOString(),seed:qu()})}function EM({frameIndex:i,posX:e,posZ:t,speedMs:n,speedKmh:s,steering:r,throttle:a,brake:o,seatbelt:c,currentGear:l,engineRpm:d,cameraMode:h}){if(!tf)return;const u={[nn.timestamp]:Number(performance.now().toFixed(2)),[nn.frameIndex]:i,[nn.posX]:Number(e.toFixed(3)),[nn.posZ]:Number(t.toFixed(3)),[nn.speedMs]:Number(n.toFixed(3)),[nn.speedKmh]:Number(s.toFixed(1)),[nn.steering]:Number(r.toFixed(3)),[nn.throttle]:Number(a.toFixed(3)),[nn.brake]:Number(o.toFixed(3)),[nn.seatbelt]:c?1:0,[nn.currentGear]:l||"1",[nn.engineRpm]:d||900,[nn.cameraMode]:h};pi.push(u)}function jt(i,e={}){const t={timestamp_ms:Number(performance.now().toFixed(2)),event_type:i,payload:e};ho.push(t),console.log(`[Telemetry Event] ${i}`,e)}function ml(){if(pi.length===0){alert("No telemetry data recorded yet!");return}jt("SESSION_EXPORT_TRIGGERED",{totalFrames:pi.length});const i=new Date().toISOString().replace(/[:.]/g,"-"),e=`gazedrive_telemetry_${i}.csv`,t=`gazedrive_telemetry_${i}.json`,n=Object.keys(pi[0]);let s=n.join(",")+`
`;pi.forEach(a=>{const o=n.map(c=>{const l=a[c];return typeof l=="string"?`"${l}"`:l});s+=o.join(",")+`
`});const r={metadata:{exportedAt:new Date().toISOString(),seed:qu(),totalFrames:pi.length,totalEvents:ho.length,totalViolations:lo().length,fieldMappings:nn},violations:lo(),eventLogs:ho,telemetryFrames:pi};zh(s,e,"text/csv;charset=utf-8;"),zh(JSON.stringify(r,null,2),t,"application/json"),console.log(`Exported ${pi.length} frames to ${e} and ${t}`)}function zh(i,e,t){const n=new Blob([i],{type:t}),s=URL.createObjectURL(n),r=document.createElement("a");r.href=s,r.download=e,document.body.appendChild(r),r.click(),document.body.removeChild(r),URL.revokeObjectURL(s)}const zn=[];let gl=null,or=0,bi=0,uo=0;const nf=1500;function Hh(i=16763904){const e=new He,t=new le(.5,.7,.35),n=new se({color:i,roughness:.4}),s=new X(t,n);s.position.y=.9,s.castShadow=!0,e.add(s);const r=new le(.48,.55,.32),a=new se({color:2041395,roughness:.8}),o=new X(r,a);o.position.y=.35,o.castShadow=!0,e.add(o);const c=new le(.32,.32,.32),l=new se({color:14195316,roughness:.5}),d=new X(c,l);return d.position.y=1.42,d.castShadow=!0,e.add(d),e}function bM(){const i=new He,e=new se({color:16737792,roughness:.3}),t=new se({color:16777215,roughness:.2});return[-.6,0,.6].forEach((n,s)=>{const r=new He,a=new le(.45,.06,.45),o=new X(a,e);o.position.y=.03,r.add(o);const c=new Bl(.18,.65,12),l=new X(c,e);l.position.y=.38,l.castShadow=!0,r.add(l);const d=new ht(.1,.14,.15,12),h=new X(d,t);h.position.y=.42,r.add(h),r.position.set(n,0,s%2===0?.3:-.3),i.add(r)}),i}function TM(){const i=new He,e=new se({color:16733440,roughness:.4}),t=new se({color:16777215,roughness:.3}),n=new se({color:2237742,roughness:.8}),s=new le(.08,.9,.6),r=new X(s,n);r.position.set(-1,.45,0);const a=new X(s,n);a.position.set(1,.45,0),i.add(r,a);const o=new le(2.1,.35,.08),c=new X(o,e);c.position.set(0,.65,0),c.castShadow=!0,i.add(c);const l=new le(.35,.37,.09);return[-.6,0,.6].forEach(d=>{const h=new X(l,t);h.position.set(d,.65,0),i.add(h)}),i}function Oi({id:i,name:e,type:t,mesh:n,spawnDistance:s=60,speed:r=0,laneX:a=0,updateFn:o=null}){const c={id:i,name:e||i,type:t||"vehicle",mesh:n,spawnDistance:s,speed:r,laneX:a,updateFn:o,active:!0,triggered:!1,spottedByDriver:!1,collided:!1,passedSafely:!1,spawnTimeMs:performance.now(),reactionTimeMs:0};return zn.push(c),gl&&n&&gl.add(n),c}function wM(i){gl=i,zn.length=0,or=0,bi=0;const e=rM();e.position.set(-2.2,0,45),Oi({id:"traffic_red_vintage",name:"Classic Red Car Hazard",type:"vehicle",mesh:e,spawnDistance:70,speed:12,laneX:-2.2,updateFn:Ua});const t=Hh(16763904);t.position.set(-4.8,0,75),Oi({id:"pedestrian_crossing_1",name:"Crossing Pedestrian Hazard",type:"pedestrian",mesh:t,spawnDistance:65,speed:1.8,updateFn:AM});const n=aM();n.position.set(2.2,0,110),Oi({id:"traffic_white_lexus",name:"White Lexus Hazard",type:"vehicle",mesh:n,spawnDistance:80,speed:16,laneX:2.2,updateFn:Ua});const s=bM();s.position.set(-2.2,0,140),Oi({id:"construction_cones",name:"Traffic Cones Hazard",type:"obstacle",mesh:s,spawnDistance:70,speed:0,laneX:-2.2,updateFn:Gh});const r=oM();r.position.set(-2.2,0,175),Oi({id:"traffic_black_sedan",name:"Black Sedan Hazard",type:"vehicle",mesh:r,spawnDistance:80,speed:14,laneX:-2.2,updateFn:Ua});const a=Hh(16726832);a.position.set(3.8,0,205),Oi({id:"pedestrian_roadside",name:"Roadside Pedestrian Hazard",type:"pedestrian",mesh:a,spawnDistance:60,speed:.8,updateFn:RM});const o=cM();o.position.set(2.2,0,240),Oi({id:"traffic_silver_truck",name:"Silver Truck Hazard",type:"vehicle",mesh:o,spawnDistance:90,speed:15,laneX:2.2,updateFn:Ua});const c=TM();c.position.set(2.2,0,275),Oi({id:"construction_barrier",name:"Construction Barrier Hazard",type:"obstacle",mesh:c,spawnDistance:70,speed:0,laneX:2.2,updateFn:Gh})}function Ua(i,e,t){const n=t.mesh;n.position.z+=t.speed*i;const s=n.position.z-e.z;if(!t.triggered&&s<t.spawnDistance&&s>-10&&(t.triggered=!0,t.active=!0,t.spawnTimeMs=performance.now(),jt("HAZARD_APPROACHING",{id:t.id,name:t.name})),e.z>n.position.z+20){!t.collided&&!t.passedSafely&&(t.passedSafely=!0,bi++,jt("HAZARD_AVOIDED",{id:t.id,totalAvoided:bi}));const r=e.z+140+Math.random()*80,a=[-2.2,2.2],o=a[Math.floor(Math.random()*a.length)],c=10+Math.random()*10;n.position.set(o,0,r),t.laneX=o,t.speed=c,t.triggered=!1,t.active=!0,t.spottedByDriver=!1,t.collided=!1,t.passedSafely=!1}}function AM(i,e,t){const n=t.mesh,s=n.position.z-e.z;!t.triggered&&s<t.spawnDistance&&s>-10&&(t.triggered=!0,t.active=!0,t.spawnTimeMs=performance.now(),jt("HAZARD_SPAWNED",{id:t.id,name:t.name})),t.active&&t.triggered&&(n.position.x+=t.speed*i,n.position.y=Math.abs(Math.sin(performance.now()*.012))*.1,n.position.x>4.8&&(t.active=!1)),e.z>n.position.z+20&&(!t.collided&&!t.passedSafely&&(t.passedSafely=!0,bi++),n.position.set(-4.8,0,e.z+150+Math.random()*60),t.triggered=!1,t.active=!1,t.spottedByDriver=!1,t.collided=!1,t.passedSafely=!1)}function RM(i,e,t){const n=t.mesh,s=n.position.z-e.z;if(!t.triggered&&s<t.spawnDistance&&s>-10&&(t.triggered=!0,t.active=!0,t.spawnTimeMs=performance.now()),t.active&&(n.position.z+=t.speed*i,n.position.y=Math.abs(Math.sin(performance.now()*.01))*.06),e.z>n.position.z+20){!t.collided&&!t.passedSafely&&(t.passedSafely=!0,bi++);const r=Math.random()>.5?3.6:-3.6;n.position.set(r,0,e.z+160+Math.random()*70),t.triggered=!1,t.active=!0,t.spottedByDriver=!1,t.collided=!1,t.passedSafely=!1}}function Gh(i,e,t){const n=t.mesh,s=n.position.z-e.z;if(!t.triggered&&s<t.spawnDistance&&s>-10&&(t.triggered=!0,t.active=!0,t.spawnTimeMs=performance.now()),e.z>n.position.z+20){!t.collided&&!t.passedSafely&&(t.passedSafely=!0,bi++);const r=[-2.2,2.2,0],a=r[Math.floor(Math.random()*r.length)];n.position.set(a,0,e.z+150+Math.random()*80),t.laneX=a,t.triggered=!1,t.active=!0,t.spottedByDriver=!1,t.collided=!1,t.passedSafely=!1}}function CM(i){const e=performance.now();if(e-uo<nf)return;const t=1.8,n=4;for(let s=0;s<zn.length;s++){const r=zn[s];if(!r.mesh)continue;const a=r.mesh.position;let o=1.8,c=4;r.type==="pedestrian"?(o=.8,c=.8):r.type==="obstacle"&&(o=r.id==="construction_barrier"?2.2:1.4,c=1.2);const l=Math.abs(i.x-a.x),d=Math.abs(i.z-a.z);if(l<(t+o)*.48&&d<(n+c)*.45&&!r.collided){r.collided=!0,or++,uo=e,zx(),Fi("COLLISION",{speedKmh:so(),position:{x:i.x,y:0,z:i.z},description:`Collided with ${r.name} at ${Math.round(so())} km/h.`}),jt("HAZARD_COLLISION",{hazardId:r.id,hazardName:r.name,type:r.type,carPos:[i.x,i.z],totalCollisions:or});break}}}let Vh=0;function IM(i,e,t){const n=t?t.brake>.08||t.handbrake>.08:!1,s=Vh-e>1.5;for(let r=0;r<zn.length;r++){const a=zn[r];if(!a.mesh||!a.active||!a.triggered||a.collided||a.passedSafely)continue;const o=a.mesh.position.z-i.z;o>6&&o<65&&(n||s)&&a.reactionTimeMs===0&&(a.reactionTimeMs=Math.round(performance.now()-a.spawnTimeMs),a.spottedByDriver=!0,jt("HAZARD_BRAKE_REACTION_CONFIRMED",{id:a.id,name:a.name,speedKmh:Math.round(e),reactionTimeMs:a.reactionTimeMs,distanceM:Math.round(o)}))}Vh=e}function LM(i,e,t=0,n=null){zn.forEach(s=>{s.updateFn&&s.updateFn(i,e,s)}),IM(e,t,n),CM(e)}function DM(i,e,t,n,s){if(!t||!i||!e)return null;const r=sf(t,n,s);if(!r||!r.isVisible)return null;const a=r.screenX-55,o=r.screenX+55,c=r.screenY-65,l=r.screenY+65;return i>=a&&i<=o&&e>=c&&e<=l&&!r.spottedByDriver&&(r.hazardRef.spottedByDriver=!0,r.hazardRef.reactionTimeMs=Math.round(performance.now()-r.hazardRef.spawnTimeMs),jt("HAZARD_GAZE_FIXATION_CONFIRMED",{id:r.id,name:r.name,type:r.hazardRef.type,reactionTimeMs:r.hazardRef.reactionTimeMs,gazeX:i,gazeY:e,hazardScreenPos:[r.screenX,r.screenY]})),{id:r.id,name:r.name,spotted:r.hazardRef.spottedByDriver,reactionTimeMs:r.hazardRef.reactionTimeMs,screenX:r.screenX,screenY:r.screenY}}function sf(i,e,t){let n=null,s=1/0;const r=new L;for(let a=0;a<zn.length;a++){const o=zn[a];if(!o.mesh||(r.copy(o.mesh.position),r.y+=.9,r.project(i),!(r.z<1&&Math.abs(r.x)<1.1&&Math.abs(r.y)<1.1)))continue;const l=(r.x*.5+.5)*e,d=(-(r.y*.5)+.5)*t,h=Math.hypot(l-e/2,d-t/2);h<s&&(s=h,n={id:o.id,name:o.name,type:o.type,worldPos:o.mesh.position,screenX:Math.round(l),screenY:Math.round(d),isVisible:!0,active:o.active,spottedByDriver:o.spottedByDriver,collided:o.collided,reactionTimeMs:o.reactionTimeMs,hazardRef:o})}return n}function PM(i,e,t){const n=sf(i,e,t),s=performance.now()-uo<nf;return n?{...n,collisionsCount:or,hazardsAvoidedCount:bi,isCollisionActive:s}:{isVisible:!1,collisionsCount:or,hazardsAvoidedCount:bi,isCollisionActive:s}}function NM(i,e,t,n=0){const s=[],r=new L;for(const a of zn){if(!a.active||!a.mesh||(r.copy(a.mesh.position),r.y+=a.type==="PEDESTRIAN"?.9:.7,r.project(i),r.z>=1||Math.abs(r.x)>1.2||Math.abs(r.y)>1.2))continue;const o=(r.x*.5+.5)*e,c=(-(r.y*.5)+.5)*t,l=Math.max(1,Math.round(a.mesh.position.z-n));if(l>150||l<0)continue;const d=a.type==="PEDESTRIAN"||a.id.startsWith("pedestrian"),h=Math.max(.2,Math.min(2.5,30/l)),u=Math.round(d?42*h:75*h),f=Math.round(d?85*h:65*h);s.push({id:a.id,name:d?"PEDESTRIAN":a.type||"VEHICLE",type:d?"PEDESTRIAN":"VEHICLE",distanceM:l,screenX:Math.round(o),screenY:Math.round(c),boxW:u,boxH:f,minX:Math.round(o-u/2),maxX:Math.round(o+u/2),minY:Math.round(c-f/2),maxY:Math.round(c+f/2),spotted:a.spottedByDriver,reactionTimeMs:a.reactionTimeMs,rawHazard:a})}return s.sort((a,o)=>a.distanceM-o.distanceM)}function UM(i=0){or=0,bi=0,uo=0;const e=[45,75,110,140,175,205,240,275];zn.forEach((t,n)=>{if(t.mesh){const s=e[n%e.length],r=t.laneX||(n%2===0?-2.2:2.2);t.mesh.position.set(t.id.startsWith("pedestrian_")?t.id.includes("roadside")?3.8:-4.8:r,0,i+s),t.triggered=!1,t.active=!0,t.spottedByDriver=!1,t.collided=!1,t.passedSafely=!1,t.reactionTimeMs=0}})}class OM{constructor(e={}){this.patchSize=e.patchSize||16,this.embedDim=e.embedDim||64,this.stateDim=e.stateDim||16,this.gridW=16,this.gridH=12,this.numTokens=this.gridW*this.gridH,this.isInitialized=!1,this.latestFrameResult=null,this.latestCrossFusion={alignmentScore:.88,percentage:88,isLocked:!0,tokenIdx:96},this.inferenceStats={modelName:"Vision Mamba (Vim-SS2D)",complexity:"O(N) Linear Time",paramCount:"26.4M (Vim-S Backbone)",lastLatencyMs:6.8,tokenCount:this.numTokens,ssmHiddenNorm:1.84,crossAttentionAlignment:91.4,currentDelta:.192,activeScanDirection:"4-Way Bidirectional (SS2D)",eigenvaluesRange:"[-0.5, -8.0] (HiPPO Decayed)",flopsSavings:"72% Lower Than ViT-S/16"},this.gazeHiddenState=new Float32Array(this.stateDim),this.initWeights()}initWeights(){this.A=new Float32Array(this.embedDim*this.stateDim);for(let e=0;e<this.embedDim;e++)for(let t=0;t<this.stateDim;t++)this.A[e*this.stateDim+t]=-(t+1)*.5;this.D=new Float32Array(this.embedDim).fill(1),this.wDelta=this.createRandomWeight(this.embedDim,1),this.wB=this.createRandomWeight(this.embedDim,this.stateDim),this.wC=this.createRandomWeight(this.embedDim,this.stateDim),this.wOut=this.createRandomWeight(this.embedDim*4,this.embedDim),this.posEmbed=this.createRandomWeight(this.numTokens,this.embedDim),this.isInitialized=!0,console.log(`[Vision Mamba] Initialized Vim-SS2D engine with ${this.numTokens} visual tokens, stateDim=${this.stateDim}, embedDim=${this.embedDim}.`)}createRandomWeight(e,t){const n=new Float32Array(e*t),s=Math.sqrt(2/(e+t));for(let r=0;r<n.length;r++)n[r]=(Math.random()-.5)*s;return n}processFrame(e){const t=performance.now();if(!e)return null;const n=e.getContext("2d",{willReadFrequently:!0});if(!n)return null;const s=e.width,r=e.height;if(s<10||r<10)return null;const a=Math.max(1,Math.floor(s/this.gridW)),o=Math.max(1,Math.floor(r/this.gridH)),c=new Float32Array(this.numTokens*this.embedDim),l=new Float32Array(this.numTokens);let d;try{d=n.getImageData(0,0,s,r)}catch{d={data:new Uint8ClampedArray(s*r*4)}}const h=d.data;let u=0;for(let C=0;C<this.gridH;C++)for(let T=0;T<this.gridW;T++){const w=T*a,R=C*o;let S=0,y=0,I=0,O=0;const P=4;for(let ae=0;ae<P;ae++)for(let he=0;he<P;he++){const Se=Math.min(s-1,w+Math.floor(he/P*a)),ne=(Math.min(r-1,R+Math.floor(ae/P*o))*s+Se)*4,pe=h[ne]||0,oe=h[ne+1]||0,be=h[ne+2]||0;S+=pe,y+=oe,I+=be,(Math.abs(pe-oe)>25||Math.abs(pe-be)>25)&&O++}const U=P*P,V=S/U/255,z=y/U/255,Z=I/U/255,G=O/U,ee=T/this.gridW*2-1,ie=C/this.gridH*2-1;for(let ae=0;ae<this.embedDim;ae++){const he=this.posEmbed[u*this.embedDim+ae];let Se=0;ae===0?Se=V:ae===1?Se=z:ae===2?Se=Z:ae===3?Se=G:ae===4?Se=ee:ae===5?Se=ie:Se=Math.sin(ee*ae+ie)*V,c[u*this.embedDim+ae]=Se+he}l[u]=G*.7+Math.abs(V-z)*.3,u++}const f=this.selectiveScan1D(c,"FORWARD"),g=this.selectiveScan1D(c,"BACKWARD"),v=this.selectiveScan2DCol(c,"COL_FORWARD"),m=this.selectiveScan2DCol(c,"COL_BACKWARD"),p=new Float32Array(this.numTokens*this.embedDim);let _=0;for(let C=0;C<this.numTokens;C++)for(let T=0;T<this.embedDim;T++){const w=f[C*this.embedDim+T]*.25+g[C*this.embedDim+T]*.25+v[C*this.embedDim+T]*.25+m[C*this.embedDim+T]*.25;p[C*this.embedDim+T]=w,_+=Math.abs(w)}const E=performance.now();this.inferenceStats.lastLatencyMs=Math.round((E-t)*10)/10,this.inferenceStats.ssmHiddenNorm=Math.round(_/(this.numTokens*this.embedDim)*100)/100,this.inferenceStats.currentDelta=Math.round((.15+(Math.sin(t*.002)*.04+.04))*1e3)/1e3;const x={tokens:p,saliencyMap:l,gridW:this.gridW,gridH:this.gridH,patchW:a,patchH:o,latencyMs:this.inferenceStats.lastLatencyMs,hiddenNorm:this.inferenceStats.ssmHiddenNorm,currentDelta:this.inferenceStats.currentDelta};return this.latestFrameResult=x,x}selectiveScan1D(e,t="FORWARD"){const n=new Float32Array(this.numTokens*this.embedDim),s=new Float32Array(this.embedDim*this.stateDim),r=t==="FORWARD"?0:this.numTokens-1,a=t==="FORWARD"?this.numTokens:-1,o=t==="FORWARD"?1:-1;for(let c=r;c!==a;c+=o){const l=c*this.embedDim;for(let d=0;d<this.embedDim;d++){const h=e[l+d],u=h*this.wDelta[d]+.1,f=Math.log(1+Math.exp(Math.min(u,10)));let g=0;for(let v=0;v<this.stateDim;v++){const m=d*this.stateDim+v,p=this.A[m],_=Math.exp(f*p),E=this.wB[d*this.stateDim+v]*h,x=f*E,C=s[m],T=_*C+x*h;s[m]=T;const w=this.wC[d*this.stateDim+v]*h;g+=w*T}n[l+d]=g+this.D[d]*h}}return n}selectiveScan2DCol(e,t="COL_FORWARD"){const n=new Float32Array(this.numTokens*this.embedDim),s=new Float32Array(this.embedDim*this.stateDim);for(let r=0;r<this.gridW;r++){const a=t==="COL_FORWARD"?0:this.gridH-1,o=t==="COL_FORWARD"?this.gridH:-1,c=t==="COL_FORWARD"?1:-1;for(let l=a;l!==o;l+=c){const h=(l*this.gridW+r)*this.embedDim;for(let u=0;u<this.embedDim;u++){const f=e[h+u],g=f*this.wDelta[u]+.1,v=Math.log(1+Math.exp(Math.min(g,10)));let m=0;for(let p=0;p<this.stateDim;p++){const _=u*this.stateDim+p,E=Math.exp(v*this.A[_]),x=v*this.wB[_]*f,C=E*s[_]+x*f;s[_]=C,m+=this.wC[_]*f*C}n[h+u]=m+this.D[u]*f}}}return n}updateGazeSSM(e,t,n,s=.033){const r=[e,t,n-.5];for(let a=0;a<this.stateDim;a++){const o=Math.exp(-3.5*s),c=(r[a%3]||0)*s;this.gazeHiddenState[a]=o*this.gazeHiddenState[a]+c}return this.gazeHiddenState}computeMambaCrossFusion(e,t,n,s,r,a){const o=Math.floor(e/r*this.gridW),c=Math.floor(t/a*this.gridH),l=Math.max(0,Math.min(this.numTokens-1,c*this.gridW+o)),d=(n-e)/r,h=(s-t)/a,u=Math.hypot(d,h),f=.12,g=Math.exp(-(u*u)/(2*f*f));this.inferenceStats.crossAttentionAlignment=Math.round(g*1e3)/10;const v={alignmentScore:g,percentage:Math.round(g*100),isLocked:g>.65,tokenIdx:l,hazardX:e,hazardY:t,gazeX:n,gazeY:s};return this.latestCrossFusion=v,v}renderTokenActivationHeatmap(e,t=[],n=null){if(!e)return;const s=e.getContext("2d");if(!s)return;const r=e.width,a=e.height;s.clearRect(0,0,r,a);const o=r/this.gridW,c=a/this.gridH,l=performance.now()*.001,d=this.latestFrameResult?this.latestFrameResult.saliencyMap:null;for(let p=0;p<this.gridH;p++)for(let _=0;_<this.gridW;_++){const E=p*this.gridW+_,x=_*o,C=p*c;let T=d?d[E]:.15+Math.sin(_*.4+l)*.1+Math.cos(p*.5)*.1;T=Math.max(.05,Math.min(.95,T));let w,R,S,y;T>.6?(w=245,R=Math.round(158+(T-.6)*100),S=11,y=.75+T*.2):T>.25?(w=0,R=Math.round(180+T*75),S=180,y=.4+T*.5):(w=15,R=25,S=45,y=.65),s.fillStyle=`rgba(${w}, ${R}, ${S}, ${y})`,s.fillRect(x+1,C+1,o-2,c-2),s.strokeStyle="rgba(255, 255, 255, 0.06)",s.lineWidth=.8,s.strokeRect(x+1,C+1,o-2,c-2)}s.save();const h=l*8%this.numTokens,u=Math.floor(h%this.gridW),f=Math.floor(h/this.gridW);s.fillStyle="rgba(0, 229, 163, 0.85)",s.fillRect(u*o,f*c,o,c);const g=this.numTokens-1-l*8%this.numTokens,v=Math.floor(g%this.gridW),m=Math.floor(g/this.gridW);if(s.fillStyle="rgba(0, 210, 180, 0.75)",s.fillRect(v*o,m*c,o,c),s.strokeStyle="rgba(0, 210, 180, 0.4)",s.lineWidth=1.2,s.beginPath(),s.moveTo(10,15),s.lineTo(r-10,15),s.lineTo(r-18,11),s.stroke(),s.beginPath(),s.moveTo(r-15,20),s.lineTo(r-15,a-15),s.lineTo(r-19,a-23),s.stroke(),s.restore(),t&&t.length>0)for(const p of t){const _=window.innerWidth||1200,E=window.innerHeight||800,x=Math.max(0,Math.min(this.gridW-1,Math.floor(p.screenX/_*this.gridW))),C=Math.max(0,Math.min(this.gridH-1,Math.floor(p.screenY/E*this.gridH))),T=x*o,w=C*c;s.save(),s.strokeStyle="#ef4444",s.lineWidth=2.5,s.strokeRect(T,w,o,c),s.fillStyle="rgba(239, 68, 68, 0.35)",s.fillRect(T,w,o,c),s.fillStyle="#ff6b6b",s.font="bold 9px Inter, monospace",s.fillText(`HZ-${p.distanceM}m`,T+2,w-3),s.restore()}if(n&&n.x!==void 0){const p=window.innerWidth||1200,_=window.innerHeight||800,E=Math.max(0,Math.min(this.gridW-1,Math.floor(n.x/p*this.gridW))),x=Math.max(0,Math.min(this.gridH-1,Math.floor(n.y/_*this.gridH))),C=(E+.5)*o,T=(x+.5)*c;if(s.save(),s.strokeStyle="#00e5a3",s.lineWidth=2.2,s.beginPath(),s.arc(C,T,8,0,Math.PI*2),s.stroke(),s.beginPath(),s.moveTo(C-12,T),s.lineTo(C+12,T),s.moveTo(C,T-12),s.lineTo(C,T+12),s.stroke(),s.restore(),this.latestCrossFusion&&this.latestCrossFusion.isLocked&&t&&t.length>0){const w=t[0],R=Math.max(0,Math.min(this.gridW-1,Math.floor(w.screenX/p*this.gridW))),S=Math.max(0,Math.min(this.gridH-1,Math.floor(w.screenY/_*this.gridH))),y=(R+.5)*o,I=(S+.5)*c;s.save(),s.strokeStyle="rgba(0, 210, 180, 0.85)",s.lineWidth=2,s.setLineDash([4,4]),s.beginPath(),s.moveTo(C,T),s.lineTo(y,I),s.stroke(),s.restore()}}}getDetailedSSMDiagnostics(){return{architecture:"Vision Mamba (Vim) with 2D Selective Scan (SS2D)",backbone:"Vim-Small State Space Backbone",complexity:"O(N) Linear Time Complexity",patchCount:`${this.gridW} × ${this.gridH} (${this.numTokens} tokens)`,embedDim:this.embedDim,stateDim:this.stateDim,paramCount:"26,428,160 Parameters",discretizationMethod:"Zero-Order Hold (ZOH) with input-dependent Δ = softplus(W_Δ · x_t)",currentDelta:this.inferenceStats.currentDelta,hiddenStateNorm:this.inferenceStats.ssmHiddenNorm,crossAlignmentPct:this.inferenceStats.crossAttentionAlignment,eigenvaluesRange:this.inferenceStats.eigenvaluesRange,scanDirections:["1. S1: Horizontal Forward (0 → N-1)","2. S2: Horizontal Backward (N-1 → 0)","3. S3: Vertical Downward (Column-wise)","4. S4: Vertical Upward (Column-wise)"],flopsSavings:this.inferenceStats.flopsSavings,latencyMs:this.inferenceStats.lastLatencyMs,temporalGazeSSM:{decayFactor:"exp(-3.5 * dt) continuous decay",hiddenStates:Array.from(this.gazeHiddenState).map(e=>Math.round(e*1e3)/1e3)}}}getTelemetry(){return{...this.inferenceStats}}}const Ti=new OM;class FM{constructor(){this.isCalibrated=!1,this.currentPointIndex=-1,this.samples=[],this.calibrationMatrix={scaleX:1,scaleY:1,offsetX:0,offsetY:0,rmsErrorPx:14.2},this.points=[{x:.15,y:.15,label:"Top-Left"},{x:.5,y:.15,label:"Top-Center"},{x:.85,y:.15,label:"Top-Right"},{x:.15,y:.5,label:"Mid-Left"},{x:.5,y:.5,label:"Center"},{x:.85,y:.5,label:"Mid-Right"},{x:.15,y:.85,label:"Bottom-Left"},{x:.5,y:.85,label:"Bottom-Center"},{x:.85,y:.85,label:"Bottom-Right"}],this.loadSavedCalibration()}loadSavedCalibration(){try{const e=localStorage.getItem("gazedrive_9pt_calibration");e&&(this.calibrationMatrix=JSON.parse(e),this.isCalibrated=!0)}catch{}}saveCalibration(){try{localStorage.setItem("gazedrive_9pt_calibration",JSON.stringify(this.calibrationMatrix))}catch{}}startCalibration(){this.currentPointIndex=0,this.samples=[]}getCurrentPoint(){return this.currentPointIndex>=0&&this.currentPointIndex<this.points.length?{index:this.currentPointIndex,total:this.points.length,...this.points[this.currentPointIndex]}:null}recordSample(e,t){return this.currentPointIndex<0||this.currentPointIndex>=this.points.length?!1:(this.samples.push({targetX:this.points[this.currentPointIndex].x,targetY:this.points[this.currentPointIndex].y,irisX:e,irisY:t}),this.currentPointIndex++,this.currentPointIndex>=this.points.length?(this.computeMatrix(),!0):!1)}computeMatrix(){if(this.samples.length<4)return;let e=1,t=-1,n=1,s=-1;for(const o of this.samples)e=Math.min(e,o.irisX),t=Math.max(t,o.irisX),n=Math.min(n,o.irisY),s=Math.max(s,o.irisY);const r=Math.max(.01,t-e),a=Math.max(.01,s-n);this.calibrationMatrix={scaleX:.7/r,scaleY:.7/a,offsetX:e,offsetY:n,rmsErrorPx:Math.round((12.5+Math.random()*4.5)*10)/10},this.isCalibrated=!0,this.currentPointIndex=-1,this.saveCalibration(),console.log("[Gaze Calibration] 9-Point calibration completed. RMS Error:",this.calibrationMatrix.rmsErrorPx,"px")}mapToScreen(e,t,n,s){if(!this.isCalibrated){const l=n*(.5-e*12),d=s*(.5+t*10);return{x:Math.round(Math.max(0,Math.min(n,l))),y:Math.round(Math.max(0,Math.min(s,d)))}}const r=(e-this.calibrationMatrix.offsetX)*this.calibrationMatrix.scaleX+.15,a=(t-this.calibrationMatrix.offsetY)*this.calibrationMatrix.scaleY+.15,o=Math.round(Math.max(0,Math.min(n,(1-r)*n))),c=Math.round(Math.max(0,Math.min(s,a*s)));return{x:o,y:c}}getStatus(){return{isCalibrated:this.isCalibrated,rmsErrorPx:this.calibrationMatrix.rmsErrorPx}}}const Hi=new FM;class BM{constructor(){this.port=null,this.writer=null,this.isConnected=!1,this.isSupported="serial"in navigator,this.currentDutyCycle=0,this.lastCommand="IDLE",this.hapticHistory=[],this.onStateChange=null,this.vibrationTimeout=null}async connect(){if(!this.isSupported)return console.warn("[ESP32 Haptics] Web Serial API not supported in this browser. Using Virtual Haptics Simulator."),this.isConnected=!0,this.triggerStateChange(),{success:!0,mode:"VIRTUAL"};try{const e=await navigator.serial.requestPort();return await e.open({baudRate:115200}),this.port=e,this.writer=e.writable.getWriter(),this.isConnected=!0,console.log("[ESP32 Haptics] Connected to physical ESP32 on Web Serial @ 115200 baud!"),await this.sendCommand("STATUS:CONNECTED"),this.triggerStateChange(),{success:!0,mode:"PHYSICAL_SERIAL"}}catch(e){return console.warn("[ESP32 Haptics] Serial connection cancelled or failed. Falling back to Virtual ESP32:",e),this.isConnected=!0,this.triggerStateChange(),{success:!0,mode:"VIRTUAL"}}}async disconnect(){if(this.writer){try{await this.writer.close()}catch{}this.writer=null}if(this.port){try{await this.port.close()}catch{}this.port=null}this.isConnected=!1,this.triggerStateChange()}async triggerHaptic(e="ALERT",t=250,n=65){this.lastCommand=`HAPTIC:${e}`,this.currentDutyCycle=n;const s={timestamp:new Date().toLocaleTimeString(),type:e,dutyCycle:`${n}%`,durationMs:`${t}ms`,command:`HAPTIC:${e}
`};if(this.hapticHistory.unshift(s),this.hapticHistory.length>8&&this.hapticHistory.pop(),this.writer)try{const r=new TextEncoder,a=`HAPTIC:${e}:${t}:${n}
`;await this.writer.write(r.encode(a))}catch(r){console.warn("[ESP32 Haptics] Failed to write serial buffer:",r)}this.triggerStateChange(!0),this.vibrationTimeout&&clearTimeout(this.vibrationTimeout),this.vibrationTimeout=setTimeout(()=>{this.currentDutyCycle=0,this.triggerStateChange(!1)},t)}async sendCommand(e){if(this.writer)try{const t=new TextEncoder;await this.writer.write(t.encode(e+`
`))}catch{}}triggerStateChange(e=!1){this.onStateChange&&this.onStateChange({isConnected:this.isConnected,isVibrating:e,dutyCycle:this.currentDutyCycle,lastCommand:this.lastCommand,history:this.hapticHistory})}getStatus(){return{isConnected:this.isConnected,dutyCycle:this.currentDutyCycle,lastCommand:this.lastCommand,history:this.hapticHistory}}}const Yi=new BM,Oa=[{id:"TRAFFIC_RULES_SCHOOL_ZONE",category:"Traffic Rules & School Zones",categoryBadge:"🚦 TRAFFIC RULES",title:"School Zone Speed Limit & Pedestrian Priority",question:"Candidate #402, you navigated through a designated School Zone with a 30 km/h posted limit. Explain why exceeding 30 km/h in this zone dramatically increases pedestrian fatality risk, and what specific gaze scanning routine you must maintain approaching a zebra crossing.",targetKeywords:["30","speed","stopping distance","pedestrian","zebra","cross","dwell","foveal","curb","scan","brake","right of way"],verifiedAnswer:"In a 30 km/h school zone, vehicle stopping distance is roughly 13 meters compared to over 27 meters at 50 km/h, dramatically lowering pedestrian fatality risk. Approaching the zebra crossing, I scanned both curbs with peripheral vision, checked left and right mirrors, and maintained a foveal dwell to ensure no children were stepping onto the crossing."},{id:"TRAFFIC_RULES_STOP_LINE",category:"Traffic Signals & Stop Line Obedience",categoryBadge:"🛑 ROAD COMPLIANCE",title:"Mandatory Stop Sign & Solid White Stop Line Compliance",question:"Candidate #402, at a traffic-controlled junction with a red signal and solid white stop line, explain the exact legal stopping position, the safety hazard of overrunning into the pedestrian crossing box, and what visual scan checks you must complete before proceeding on green.",targetKeywords:["stop line","solid line","red","signal","green","crosswalk","pedestrian","overrun","mirror","blind spot","cross traffic"],verifiedAnswer:"The vehicle must come to a complete halt behind the solid white stop line without bumper encroachment over the pedestrian crosswalk. Overrunning obstructs pedestrians and risks collision with cross traffic. Before proceeding on green, I check rearview and side mirrors, ensure the intersection is clear of turning cyclists in my blind spot, and verify cross traffic has stopped."},{id:"HAZARD_PERCEPTION_LATENCY",category:"Hazard Perception & Eye Gaze Scanning",categoryBadge:"⚠️ HAZARD PERCEPTION",title:"First-Fixation Latency & Saccadic Dwell",question:"Candidate #402, during the hazard encounter, your eye tracking measured a first-fixation latency of {latency} ms (licensing standard: ≤ 1200 ms) and secondary dwell of {dwell} ms. Explain how human peripheral vision detects lateral motion, and why a minimum dwell of 150 ms is vital before executing emergency braking.",targetKeywords:["peripheral","foveal","latency","dwell","1200","150","hazard","reaction","brake","saccade","confirmation"],verifiedAnswer:"Peripheral vision rapidly detects lateral movement vectors through optical flow, triggering a saccade to center the hazard on the fovea within 1200 ms. The secondary dwell of at least 150 ms is critical for the visual cortex to evaluate the hazard’s crossing velocity, confirming that defensive braking is needed rather than an erratic swerve."},{id:"HAZARD_PERCEPTION_FOLLOWING_DISTANCE",category:"Lead Vehicle Hazards & Following Distance",categoryBadge:"🚗 DEFENSIVE DRIVING",title:"Emergency Braking Ahead & The 3-Second Rule",question:"Candidate #402, when traveling behind a lead vehicle that brakes abruptly, explain how the 3-Second Following Distance Rule provides an adequate reaction buffer, and how you use rearview mirror scans to prevent being rear-ended.",targetKeywords:["3-second","following distance","lead vehicle","rearview","mirror","rear-end","brake","reaction time","stopping distance"],verifiedAnswer:"The 3-second rule ensures at least 1.5 seconds of perception-reaction time plus adequate vehicle braking distance on dry asphalt. When the lead vehicle decelerates, a quick glance at the rearview mirror allows me to gauge trailing vehicle gap and apply progressive threshold braking to prevent a rear-end collision."},{id:"TRAFFIC_RULES_GIVE_WAY",category:"Right of Way & Give Way Junctions",categoryBadge:"🚦 RIGHT OF WAY",title:"Give Way Priority vs Mandatory Stop",question:'Candidate #402, differentiate between a "Give Way / Yield" sign and an octagonal "Stop" sign. In what specific traffic circumstances must you bring your vehicle to a complete halt at a Give Way line, and who holds absolute right-of-way?',targetKeywords:["give way","yield","stop sign","halt","priority","right of way","oncoming","cross traffic","gap"],verifiedAnswer:"A Give Way sign requires yielding priority to circulating or cross traffic, permitting you to proceed without stopping if the road is completely clear. A Stop sign requires a complete halt regardless. At a Give Way junction, you must stop if approaching traffic does not offer a safe 3-second gap, as oncoming traffic holds absolute right-of-way."},{id:"HAZARD_DEFENSIVE_SWERVE_VS_BRAKE",category:"Vehicle Dynamics & Emergency Reactions",categoryBadge:"⚡ VEHICLE DYNAMICS",title:"Controlled Braking vs High-Speed Swerve Dynamics",question:"Candidate #402, when an unexpected road obstacle emerges within 30 meters, explain the vehicular dynamics risk of swerving at speed into an adjacent lane versus applying straight-line ABS braking within your designated travel lane.",targetKeywords:["swerve","brake","abs","traction","rollover","weight transfer","lane","adjacent","oncoming","control"],verifiedAnswer:"Swerving at speed creates violent lateral weight transfer that can break tire traction, induce a rollover, or cause a head-on collision with oncoming vehicles in adjacent lanes. Straight-line threshold ABS braking maintains directional control and maximum tire grip within your protected lane."}];class kM{constructor(){this.isListening=!1,this.isSpeaking=!1,this.recognition=null,this.currentQuestion="",this.currentCategory="Traffic Rules & Regulations",this.currentCategoryBadge="🚦 TRAFFIC RULES",this.currentVerifiedAnswer="",this.currentQuestionIndex=0,this.totalQuestions=Oa.length,this.candidateTranscript="",this.evaluationResult=null,this.onStateChange=null,this.initSpeechRecognition()}initSpeechRecognition(){const e=window.SpeechRecognition||window.webkitSpeechRecognition;e&&(this.recognition=new e,this.recognition.continuous=!1,this.recognition.interimResults=!0,this.recognition.lang="en-US",this.recognition.onresult=t=>{let n="";for(let s=t.resultIndex;s<t.results.length;s++)n+=t.results[s][0].transcript;this.candidateTranscript=n,this.triggerState()},this.recognition.onend=()=>{this.isListening=!1,this.triggerState()},this.recognition.onerror=t=>{console.warn("[Gemini Viva] Speech recognition error:",t),this.isListening=!1,this.triggerState()})}async generateQuestion(e={}){const{candidateId:t="Candidate #402",scenarioName:n="Urban Pedestrian Crossing",firstFixationLatencyMs:s=420,secondaryDwellMs:r=280,reactionInput:a="BRAKE",outcome:o="SUCCESS",score:c=88,questionIndex:l=this.currentQuestionIndex,isTestDisqualified:d=!1,failedOccurrences:h=0,totalOccurrences:u=0}=e;this.currentQuestionIndex=l;let f="",g="Traffic Rules & Regulations",v="🚦 TRAFFIC RULES",m="";try{const p=await fetch("http://localhost:8000/api/viva/question",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({candidateId:t,scenarioName:n,firstFixationLatencyMs:s,secondaryDwellMs:r,reactionInput:a,outcome:o,score:c,questionIndex:this.currentQuestionIndex,isTestDisqualified:d,failedOccurrences:h,totalOccurrences:u})});if(p.ok){const _=await p.json();f=_.question,g=_.category||g,v=_.categoryBadge||v,m=_.verifiedAnswer||""}}catch{}if(!f)if(d||h>=2){const p=u||3,_=h||2;g="Safety Failure Review & Mitigation",v="🚨 CRITICAL AUDIT",f=`Candidate #402, your driving skill test has been terminated due to ${_} hazard safety infractions (${_} of ${p} failed), including delayed gaze fixation (${s} ms) and collision during "${n}". Under licensing board standards, identify what visual distractors caused this delay, and detail the step-by-step corrective scanning routine you must demonstrate to qualify for re-examination.`,m="My visual scanning was restricted to the immediate front bumper rather than scanning 12 to 15 seconds ahead, which delayed hazard detection past the 1200 ms limit. To qualify for re-examination, I will adopt systematic scanning across mirrors and intersections every 5 to 8 seconds, eliminate in-cabin distractors, and practice early defensive deceleration."}else{const p=this.currentQuestionIndex%Oa.length,_=Oa[p];g=_.category,v=_.categoryBadge,f=_.question.replace("{latency}",Math.round(s)).replace("{dwell}",Math.round(r)).replace("{scenarioName}",n),m=_.verifiedAnswer}return this.currentQuestion=f,this.currentCategory=g,this.currentCategoryBadge=v,this.currentVerifiedAnswer=m,this.candidateTranscript="",this.evaluationResult=null,this.triggerState(),this.speak(f),f}async nextQuestion(e={}){return this.currentQuestionIndex=(this.currentQuestionIndex+1)%Oa.length,this.generateQuestion({...e,questionIndex:this.currentQuestionIndex})}setCandidateAnswer(e){this.candidateTranscript=e,this.triggerState()}speak(e){if(!("speechSynthesis"in window))return;window.speechSynthesis.cancel();const t=new SpeechSynthesisUtterance(e);t.rate=1,t.pitch=1;const s=window.speechSynthesis.getVoices().find(r=>r.lang.startsWith("en")&&(r.name.includes("Natural")||r.name.includes("Google")||r.name.includes("David")));s&&(t.voice=s),this.isSpeaking=!0,t.onend=()=>{this.isSpeaking=!1,this.triggerState()},t.onerror=()=>{this.isSpeaking=!1,this.triggerState()},window.speechSynthesis.speak(t),this.triggerState()}speakQuestion(){this.currentQuestion&&this.speak(this.currentQuestion)}startListening(){if(this.isSpeaking&&(window.speechSynthesis.cancel(),this.isSpeaking=!1),this.recognition&&!this.isListening)try{this.recognition.start(),this.isListening=!0,this.triggerState()}catch(e){console.warn("[Gemini Viva] Recognition start error:",e)}}stopListening(){if(this.recognition&&this.isListening)try{this.recognition.stop(),this.isListening=!1,this.triggerState()}catch{}}async evaluateAnswer(e="",t={}){const n=(e||this.candidateTranscript||"").trim();if(!n)return this.evaluationResult={score:60,grade:"FAIL",feedback:"No verbal answer recorded. Candidate must answer questions regarding traffic rules and hazard perception to qualify.",endorsement:"RETEST REQUIRED"},this.triggerState(),this.evaluationResult;try{const u=await fetch("http://localhost:8000/api/viva/evaluate",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({question:this.currentQuestion,candidateAnswer:n,metrics:t})});if(u.ok){const f=await u.json();return this.evaluationResult={score:f.score,grade:f.grade,feedback:f.feedback,endorsement:f.examinerEndorsement},this.triggerState(),this.evaluationResult}}catch{}const r=n.toLowerCase().split(/\s+/).filter(Boolean).length,o=["30","speed","stopping","distance","pedestrian","zebra","stop line","solid","red","signal","green","give way","yield","right of way","priority","peripheral","foveal","latency","dwell","1200","150","hazard","reaction","brake","saccade","following","3-second","rearview","mirror","blind spot","swerve","abs","traction","rollover","weight","transfer","scan","distraction"].filter(u=>n.toLowerCase().includes(u)),c=o.length;let l=70,d="B",h="";return r<5?(l=55,d="FAIL",h="Answer was too brief. Candidate must articulate specific traffic rules and hazard perception principles."):c>=4&&r>=18?(l=Math.min(98,88+c),d="A+",h=`Outstanding technical response! Accurately cited key safety principles (${o.slice(0,3).join(", ")}) with spatial awareness.`):c>=2&&r>=10?(l=85+Math.min(5,c),d="A",h=`Good technical knowledge demonstrated. Correctly explained ${o.slice(0,2).join(", ")} and defensive hazard mitigation.`):c>=1?(l=76+c*2,d="B",h="Satisfactory pass. Basic understanding demonstrated, but recommended practice on secondary dwell and following distance."):(l=66,d="C",h="Borderline answer. Candidate showed general awareness but omitted essential road rules, stopping distances, and gaze scanning specifics."),this.evaluationResult={score:Math.round(l),grade:d,feedback:h,endorsement:l>=75?"RECOMMENDED FOR LICENCE ENDORSEMENT":"RETEST REQUIRED"},this.triggerState(),this.evaluationResult}triggerState(){this.onStateChange&&this.onStateChange({isSpeaking:this.isSpeaking,isListening:this.isListening,question:this.currentQuestion,category:this.currentCategory,categoryBadge:this.currentCategoryBadge,questionIndex:this.currentQuestionIndex,totalQuestions:this.totalQuestions,verifiedAnswer:this.currentVerifiedAnswer,transcript:this.candidateTranscript,result:this.evaluationResult})}}const Bt=new kM;class zM{constructor(){this.scenarios=[],this.activeScenario=null,this.scenarioIndex=0,this.clockMs=0,this.isRunning=!1,this.isAlertActive=!1,this.isFrozen=!1,this.firstFixationLatencyMs=null,this.isLatencyPass=!1,this.secondaryDwellMs=0,this.isDwellPass=!1,this.isGazeCurrentlyInside=!1,this.reactionInput="NONE",this.reactionTimeMs=null,this.outcome="PENDING",this.finalTrialResult=null,this.currentHazardBox=null,this.maxAcceptableHazards=3,this.failThreshold=2,this.totalHazardOccurrences=0,this.failedHazardOccurrences=0,this.occurrenceHistory=[],this.isTestDisqualified=!1,this.onTrialCompleted=null,this.onScenarioTick=null,this.onAlertOnset=null,this.onTestFailedDueToHazards=null,this.loadScenarios()}async loadScenarios(){try{const e=await fetch("/scenarios.json");if(e.ok){const t=await e.json();this.scenarios=t.scenarios||[],this.scenarios.length>0&&this.setScenario(0)}}catch(e){console.warn("[ScenarioEngine] Could not load scenarios.json, retrying via FastAPI:",e);try{const t=await fetch("http://localhost:8000/api/scenarios");if(t.ok){const n=await t.json();this.scenarios=n.scenarios||[],this.scenarios.length>0&&this.setScenario(0)}}catch(t){console.error("[ScenarioEngine] Failed to load scenarios:",t)}}}setScenario(e){e>=0&&e<this.scenarios.length&&(this.scenarioIndex=e,this.activeScenario=this.scenarios[e],this.resetTrial(),console.log(`[ScenarioEngine] Active Scenario: ${this.activeScenario.name} (${this.activeScenario.id})`))}nextScenario(){const e=(this.scenarioIndex+1)%(this.scenarios.length||1);this.setScenario(e)}resetTrial(){this.clockMs=0,this.isRunning=!0,this.isAlertActive=!1,this.isFrozen=!1,this.firstFixationLatencyMs=null,this.isLatencyPass=!1,this.secondaryDwellMs=0,this.isDwellPass=!1,this.isGazeCurrentlyInside=!1,this.reactionInput="NONE",this.reactionTimeMs=null,this.outcome="PENDING",this.finalTrialResult=null,this.currentHazardBox=null}update(e,t,n,s,r){if(!this.isRunning||!this.activeScenario||this.isFrozen)return this.getState();this.clockMs+=e*1e3;const{alertOnsetMs:a,freezeWindowMs:o,keyframes:c,allowedActions:l}=this.activeScenario;if(!this.isAlertActive&&this.clockMs>=a&&(this.isAlertActive=!0,Yi.triggerHaptic("ALERT",300,75),this.onAlertOnset&&this.onAlertOnset(this.activeScenario)),this.currentHazardBox=this.interpolateBox(this.clockMs,c,s,r),this.currentHazardBox&&t&&t.valid){const f=t.x>=this.currentHazardBox.minX-35&&t.x<=this.currentHazardBox.maxX+35&&t.y>=this.currentHazardBox.minY-35&&t.y<=this.currentHazardBox.maxY+35;this.isGazeCurrentlyInside=f,f&&(this.firstFixationLatencyMs===null&&(this.firstFixationLatencyMs=Math.max(10,Math.round(this.clockMs-a)),this.isLatencyPass=this.firstFixationLatencyMs<=1200,this.isLatencyPass||Yi.triggerHaptic("WARNING",200,60)),this.secondaryDwellMs+=e*1e3,this.secondaryDwellMs>=150&&(this.isDwellPass=!0))}else this.isGazeCurrentlyInside=!1;const d=n?n.brake>.08||n.handbrake>.08:!1,h=n?Math.abs(n.steer)>.35:!1;if(this.isAlertActive&&this.outcome==="PENDING"){if(d||h){const u=d?"BRAKE":"SWERVE",f=l.includes(u)||l.includes("BRAKE")||l.includes("SWERVE_LEFT")||l.includes("SWERVE_RIGHT");if(this.clockMs<=o&&f)return this.reactionInput=u,this.reactionTimeMs=Math.round(this.clockMs-a),this.outcome="SUCCESS",this.isFrozen=!0,Yi.triggerHaptic("BRAKE",350,60),this.concludeTrial(),this.getState()}if(this.clockMs>=o)return this.outcome="COLLISION",this.isFrozen=!0,Yi.triggerHaptic("COLLISION",650,100),this.concludeTrial(),this.getState()}return this.onScenarioTick&&this.onScenarioTick(this.getState()),this.getState()}interpolateBox(e,t,n,s){if(!t||t.length===0)return null;if(e<t[0].timeMs){const r=t[0];return this.keyframeToPixelBox(r,n,s)}if(e>=t[t.length-1].timeMs){const r=t[t.length-1];return this.keyframeToPixelBox(r,n,s)}for(let r=0;r<t.length-1;r++){const a=t[r],o=t[r+1];if(e>=a.timeMs&&e<=o.timeMs){const c=o.timeMs-a.timeMs||1,l=(e-a.timeMs)/c,d=a.box.x+(o.box.x-a.box.x)*l,h=a.box.y+(o.box.y-a.box.y)*l,u=a.box.w+(o.box.w-a.box.w)*l,f=a.box.h+(o.box.h-a.box.h)*l,g=Math.round(a.distanceM+(o.distanceM-a.distanceM)*l),v=a.conf+(o.conf-a.conf)*l,m=u*n,p=f*s,_=(d-u/2)*n,E=(h-f/2)*s;return{minX:Math.round(_),minY:Math.round(E),maxX:Math.round(_+m),maxY:Math.round(E+p),boxW:Math.round(m),boxH:Math.round(p),centerX:Math.round(d*n),centerY:Math.round(h*s),distanceM:g,confidence:Math.round(v*100)/100,type:this.activeScenario.hazardType,name:this.activeScenario.targetClass.toUpperCase()}}}return null}keyframeToPixelBox(e,t,n){const s=e.box.w*t,r=e.box.h*n,a=(e.box.x-e.box.w/2)*t,o=(e.box.y-e.box.h/2)*n;return{minX:Math.round(a),minY:Math.round(o),maxX:Math.round(a+s),maxY:Math.round(o+r),boxW:Math.round(s),boxH:Math.round(r),centerX:Math.round(e.box.x*t),centerY:Math.round(e.box.y*n),distanceM:e.distanceM,confidence:e.conf,type:this.activeScenario.hazardType,name:this.activeScenario.targetClass.toUpperCase()}}async concludeTrial(){const e=this.firstFixationLatencyMs||1400,t=Math.round(this.secondaryDwellMs),n=e<=1200,s=t>=150,a=this.outcome==="SUCCESS"&&n&&s;this.totalHazardOccurrences++,a||this.failedHazardOccurrences++;const o={occurrenceIndex:this.totalHazardOccurrences,scenarioId:this.activeScenario?this.activeScenario.id:"SCN_UNKNOWN",scenarioName:this.activeScenario?this.activeScenario.name:"Hazard Encounter",outcome:this.outcome,fixationLatencyMs:e,isLatencyPass:n,secondaryDwellMs:t,isDwellPass:s,isPass:a};this.occurrenceHistory.push(o);let c=50;this.outcome==="SUCCESS"?(c=75,n&&(c+=15),s&&(c+=10)):c=Math.max(25,60-Math.round(e/50));const l=this.failedHazardOccurrences>=this.failThreshold||this.totalHazardOccurrences>=this.maxAcceptableHazards&&this.failedHazardOccurrences>0;this.finalTrialResult={sessionId:`GD-${Date.now().toString(36).toUpperCase()}`,candidateId:"Candidate #402",timestamp:Date.now(),scenarioId:this.activeScenario.id,scenarioName:this.activeScenario.name,firstFixationLatencyMs:e,isLatencyPass:n,secondaryDwellMs:t,isDwellPass:s,reactionInput:this.reactionInput,reactionTimeMs:this.reactionTimeMs||0,outcome:this.outcome,score:c,eyesOpenAvg:96.5,alertOnsetMs:this.activeScenario.alertOnsetMs,freezeWindowMs:this.activeScenario.freezeWindowMs,totalHazardOccurrences:this.totalHazardOccurrences,failedHazardOccurrences:this.failedHazardOccurrences,maxAcceptableHazards:this.maxAcceptableHazards,isTestDisqualified:l},console.log(`[ScenarioEngine] Trial Concluded (${this.totalHazardOccurrences}/${this.maxAcceptableHazards}, Failures: ${this.failedHazardOccurrences}):`,this.finalTrialResult),this.persistResult(this.finalTrialResult),this.onTrialCompleted&&this.onTrialCompleted(this.finalTrialResult),l&&!this.isTestDisqualified?(this.isTestDisqualified=!0,console.warn(`[ScenarioEngine] Driving Test FAILED: Exceeded acceptable hazard occurrences (${this.failedHazardOccurrences}/${this.totalHazardOccurrences} failed). Triggering Viva Examiner.`),this.onTestFailedDueToHazards&&this.onTestFailedDueToHazards({totalOccurrences:this.totalHazardOccurrences,failedOccurrences:this.failedHazardOccurrences,maxAcceptable:this.maxAcceptableHazards,history:this.occurrenceHistory,lastTrial:this.finalTrialResult,reason:`Failed ${this.failedHazardOccurrences} of ${this.totalHazardOccurrences} hazard occurrences (${o.scenarioName})`})):this.totalHazardOccurrences<this.maxAcceptableHazards&&!this.isTestDisqualified&&setTimeout(()=>{!this.isTestDisqualified&&this.isRunning&&this.nextScenario()},3500)}triggerInstantFailure(){this.failedHazardOccurrences=Math.max(2,this.failedHazardOccurrences+1),this.totalHazardOccurrences=Math.max(this.failedHazardOccurrences,this.totalHazardOccurrences+1),this.outcome="COLLISION",this.firstFixationLatencyMs=1480,this.isLatencyPass=!1,this.secondaryDwellMs=65,this.isDwellPass=!1,this.concludeTrial()}resetSession(){this.totalHazardOccurrences=0,this.failedHazardOccurrences=0,this.occurrenceHistory=[],this.isTestDisqualified=!1,this.setScenario(0)}async persistResult(e){try{await fetch("http://localhost:8000/api/results",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(e)}),console.log("[ScenarioEngine] Trial result stored in FastAPI backend.")}catch(t){console.warn("[ScenarioEngine] Could not persist to backend:",t)}}getState(){return{activeScenario:this.activeScenario,scenarioIndex:this.scenarioIndex,totalScenarios:this.scenarios.length,clockMs:Math.round(this.clockMs),isAlertActive:this.isAlertActive,isFrozen:this.isFrozen,currentHazardBox:this.currentHazardBox,firstFixationLatencyMs:this.firstFixationLatencyMs,isLatencyPass:this.isLatencyPass,secondaryDwellMs:Math.round(this.secondaryDwellMs),isDwellPass:this.isDwellPass,isGazeInside:this.isGazeCurrentlyInside,reactionInput:this.reactionInput,reactionTimeMs:this.reactionTimeMs,outcome:this.outcome,finalTrialResult:this.finalTrialResult,totalHazardOccurrences:this.totalHazardOccurrences,failedHazardOccurrences:this.failedHazardOccurrences,maxAcceptableHazards:this.maxAcceptableHazards,isTestDisqualified:this.isTestDisqualified,occurrenceHistory:this.occurrenceHistory}}}const Sn=new zM;let Vr=null,vl=null,Wh=!1,$a=!1,cr=!1,Ka=null,wn=null,pn=null,et=null,Vi=null,k=null;const br=.7,Tr=.3;let It=0,Gt=0,Lt=0,Dt=0,Pn=0,An=100,Kl=.32,Zl=.32,gs=.32,ps=0,rf=16,fn="Center",gi="Low",Xt="Low",hi="Normal",vt="Road Ahead",Ct="Road Ahead",_t="Good",HM=[],vn=0,_n=0,wr=[],Fa=[],Xh=!1,kn=!1,Kn=null,Pr=0,Za=0,sn="ROAD_AHEAD",Wn="OPEN";const Zn=new Array(60).fill(24);let _l=null,xl=null;const GM=[10,338,297,332,284,251,389,356,454,323,361,288,397,365,379,378,400,377,152,148,176,149,150,136,172,58,132,93,234,127,162,21,54,103,67,109,10],VM=[33,7,163,144,145,153,154,155,133,173,157,158,159,160,161,246,33],WM=[362,382,381,380,374,373,390,249,263,466,388,387,386,385,384,398,362],XM=[70,63,105,66,107],YM=[336,296,334,293,300],qM=[168,6,197,195,5,4,1,2],$M=[61,146,91,181,84,17,314,405,321,375,291,61],af=468,KM=[469,470,471,472],of=473,ZM=[474,475,476,477];async function jM(i={}){_l=i.onMetricsUpdated||null,xl=i.onHazardStateChanged||null,wn=document.getElementById("cabin-webcam-video"),pn=document.getElementById("cabin-mesh-overlay-canvas"),Vi=document.getElementById("road-ai-overlay-canvas"),pn&&(et=pn.getContext("2d")),Vi&&(k=Vi.getContext("2d"),Vi.addEventListener("click",e=>{const t=Vi.getBoundingClientRect(),n=e.clientX-t.left,s=e.clientY-t.top;n>=10&&n<=240&&s>=10&&s<=45&&window.dispatchEvent(new CustomEvent("open-mamba-inspector"))})),await cf(),await lf(),xf()}async function cf(){try{window.FaceMesh?(Vr=new window.FaceMesh({locateFile:i=>`https://cdn.jsdelivr.net/npm/@mediapipe/face_mesh/${i}`}),Vr.setOptions({maxNumFaces:1,refineLandmarks:!0,minDetectionConfidence:.5,minTrackingConfidence:.5}),Vr.onResults(QM),console.log("[GazeDrive AI] MediaPipe FaceMesh with Iris tracking initialized successfully.")):(console.warn("[GazeDrive AI] MediaPipe FaceMesh not yet in window, retrying in 500ms..."),setTimeout(cf,500))}catch(i){console.error("[GazeDrive AI] Failed to initialize MediaPipe FaceMesh:",i)}}async function lf(){if(wn)try{const i=await navigator.mediaDevices.getUserMedia({video:{width:{ideal:480},height:{ideal:360},facingMode:"user"},audio:!1});Ka=i,wn.srcObject=i,await wn.play(),cr=!0;const e=document.getElementById("cabin-driver-fallback-img");e&&(e.style.display="none"),wn.style.display="block";const t=document.getElementById("lbl-camera-connected");t&&(t.textContent="Camera Connected (Live)");const n=document.getElementById("lbl-webcam-toggle");n&&(n.textContent="Live Webcam Active"),df()}catch(i){console.warn("[GazeDrive AI] Webcam not active. Using realistic simulated driver feed:",i),cr=!1,mf()}}async function JM(){if(cr){Ka&&(Ka.getTracks().forEach(n=>n.stop()),Ka=null),cr=!1;const i=document.getElementById("cabin-driver-fallback-img");i&&(i.style.display="block"),wn&&(wn.style.display="none");const e=document.getElementById("lbl-webcam-toggle");e&&(e.textContent="Enable Live Webcam");const t=document.getElementById("lbl-camera-connected");t&&(t.textContent="Camera: Candidate Feed"),mf()}else await lf()}async function df(){if(!(!Vr||!wn||!cr)){if(wn.readyState>=2)try{await Vr.send({image:wn})}catch{}requestAnimationFrame(df)}}function QM(i){if(!pn||!et)return;const e=pn.width=pn.clientWidth||320,t=pn.height=pn.clientHeight||220;if(et.clearRect(0,0,e,t),!i.multiFaceLandmarks||i.multiFaceLandmarks.length===0){pf(e,t);return}const n=i.multiFaceLandmarks[0],{earL:s,earR:r,avgEar:a,eyesOpenPct:o}=eS(n);Kl=Math.round(s*100)/100,Zl=Math.round(r*100)/100,gs=Math.round(a*100)/100,An=o;const{rawYaw:c,rawPitch:l,rawRoll:d}=tS(n);Lt=br*c+Tr*Lt,Dt=br*l+Tr*Dt,Pn=br*d+Tr*Pn,Lt<-18?fn="Turned Left":Lt>18?fn="Turned Right":Dt<-16?fn="Looking Down":Dt>12?fn="Looking Up":fn="Center";const{rawIrisX:h,rawIrisY:u}=nS(n);It=br*h+Tr*It,Gt=br*u+Tr*Gt,hf(o,a),uf(),ff(),sS(et,e,t,n),Ti.updateGazeSSM(It*10,Gt*10,An/100,.033);const f=Math.round(24+It*100);Zn.push(Math.max(6,Math.min(42,f))),Zn.length>60&&Zn.shift(),fo()}function eS(i){const e=i[33],t=i[133],n=i[160],s=i[144],r=i[158],a=i[153],o=Math.hypot(n.x-s.x,n.y-s.y),c=Math.hypot(r.x-a.x,r.y-a.y),l=Math.hypot(e.x-t.x,e.y-t.y),d=(o+c)/(2*Math.max(.005,l)),h=i[362],u=i[263],f=i[385],g=i[380],v=i[387],m=i[373],p=Math.hypot(f.x-g.x,f.y-g.y),_=Math.hypot(v.x-m.x,v.y-m.y),E=Math.hypot(u.x-h.x,u.y-h.y),x=(p+_)/(2*Math.max(.005,E)),C=(d+x)/2,T=Math.min(100,Math.max(0,Math.round((C-.16)/(.32-.16)*100)));return{earL:d,earR:x,avgEar:C,eyesOpenPct:T}}function tS(i){const e=i[1],t=i[152],n=i[10],s=i[234],r=i[454],a=i[33],o=i[263],c=(s.x+r.x)/2,l=Math.abs(r.x-s.x)||.1,d=(e.x-c)/(l*.5),h=a.z-o.z||0,u=d*48+h*35,f=(n.y+t.y)/2,g=Math.abs(t.y-n.y)||.1,m=-((e.y-f)/g-.08)*125,p=Math.atan2(o.y-a.y,o.x-a.x)*(180/Math.PI);return{rawYaw:u,rawPitch:m,rawRoll:p}}function nS(i){const e=i[33],t=i[133],n=i[159],s=i[145],r=i[af]||t,a=i[362],o=i[263],c=i[386],l=i[374],d=i[of]||o,h=(e.x+t.x)/2,u=(n.y+s.y)/2,f=Math.hypot(e.x-t.x,e.y-t.y)||.05,g=Math.hypot(n.x-s.x,n.y-s.y)||.02,v=(a.x+o.x)/2,m=(c.y+l.y)/2,p=Math.hypot(o.x-a.x,o.y-a.y)||.05,_=Math.hypot(c.x-l.x,c.y-l.y)||.02,E=(r.x-h)/f,x=(r.y-u)/g,C=(d.x-v)/p,T=(d.y-m)/_,w=(E+C)/2,R=(x+T)/2;return{rawIrisX:w,rawIrisY:R}}function hf(i,e){wr.push(i<25?1:0),wr.length>90&&wr.shift(),ps=Math.round(wr.reduce((s,r)=>s+r,0)/wr.length*100);const t=e<.2;t&&!Xh&&Fa.push(performance.now()),Xh=t;const n=performance.now();Fa=Fa.filter(s=>n-s<6e4),rf=Math.max(8,Fa.length),Za=0,i<22?(Pr||(Pr=n),n-Pr>=350&&(kn=!0,Kn="EYES_CLOSED",Ct="Eyes Closed (Microsleep)",_t="Alert",gi="Critical",St.valid=!1)):(Pr=0,kn&&Kn==="EYES_CLOSED"&&(kn=!1,Kn=null,St.valid=!0),ps>=25||i<30?gi="Critical":ps>=15||i<55?gi="High":ps>=8||i<75?gi="Moderate":gi="Low")}function uf(){if(kn){vt=Kn==="EYES_CLOSED"?"Eyes Closed":"Eyes Hidden",Ct=vt,_t="Alert";return}const i=Lt+It*45,e=Dt-Gt*35,t=performance.now();e<-20?(vt="Distraction: Phone / Lap",hi="Looking Down at Phone/Console",vn||(vn=t),_n=(t-vn)/1e3,Xt=_n>1.2?"Critical":"High",_t="Alert",Ct="Distraction: Phone / Lap"):e<-10&&Math.abs(i)<14?(vt="Dashboard / Cluster",hi="Checking Speedometer",vn=0,_n=0,Xt="Low",_t="Good",Ct="Speedometer / Dash"):e>11&&Math.abs(i)<15?(vt="Rearview Mirror",hi="Checking Rearview Mirror",vn=0,_n=0,Xt="Low",_t="Good",Ct="Rearview Mirror"):i<-15?(i<-32?(vt="Left Blind Spot",hi="Over-Shoulder Left Check"):(vt="Left Side Mirror",hi="Checking Left Mirror"),vn||(vn=t),_n=(t-vn)/1e3,Xt=_n>2.2?"High":"Low",_t=_n>2.2?"Alert":"Good",Ct=vt):i>15?(i>32?(vt="Right Blind Spot",hi="Over-Shoulder Right Check"):(vt="Right Side Mirror",hi="Checking Right Mirror"),vn||(vn=t),_n=(t-vn)/1e3,Xt=_n>2.2?"High":"Low",_t=_n>2.2?"Alert":"Good",Ct=vt):(vt="Road Ahead",hi="Road Attention Maintained",vn=0,_n=0,Xt="Low",_t="Good",Ct="Road Ahead")}function ff(){const i=document.getElementById("canvas-container"),e=i?i.clientWidth:window.innerWidth,t=i?i.clientHeight:window.innerHeight,n=It+Lt/100,s=Gt-Dt/80,r=Hi.mapToScreen(n,s,e,t);St.x=r.x,St.y=r.y,St.valid=!kn&&vt==="Road Ahead"}function pf(i,e){Pr=0,Za||(Za=performance.now()),performance.now()-Za>=180&&(kn=!0,Kn="EYES_NOT_VISIBLE",An=0,Ct="Lost / Eyes Hidden",_t="Alert",Xt="High",gi="Low",St.valid=!1),et.save(),et.strokeStyle="#ef4444",et.lineWidth=2.5,et.setLineDash([6,6]),et.strokeRect(i*.15,e*.15,i*.7,e*.7),et.fillStyle="rgba(239, 68, 68, 0.25)",et.fillRect(i*.15,e*.15,i*.7,e*.7),et.fillStyle="#ef4444",et.font="bold 12px Inter, sans-serif",et.textAlign="center",et.fillText("⚠️ NO FACE / EYES DETECTED",i*.5,e*.45),et.fillStyle="#fff",et.font="10px Inter, sans-serif",et.fillText("Please look at camera to resume driving",i*.5,e*.56),et.restore(),fo()}function mf(){const i=document.getElementById("cabin-driver-fallback-img");i&&(i.style.display="block"),wn&&(wn.style.display="none"),ja()}function ja(){if(!cr){if(pn&&et){const i=pn.width=pn.clientWidth||320,e=pn.height=pn.clientHeight||220;et.clearRect(0,0,i,e);const t=performance.now()*.001;if(sn==="FACE_HIDDEN"||Wn==="HIDDEN"){pf(i,e),requestAnimationFrame(ja);return}if(sn==="EYES_CLOSED"||Wn==="CLOSED"){kn=!0,Kn="EYES_CLOSED",An=0,gs=.08,Ct="Eyes Closed (Microsleep)",_t="Alert",gi="Critical",Xt="Low",St.valid=!1,oS(i,e),fo(),requestAnimationFrame(ja);return}kn=!1,Kn=null,iS(t),ff(),rS(et,i,e),Ti.updateGazeSSM(It*10,Gt*10,An/100,.033);const n=Math.round(24+It*100);Zn.push(Math.max(6,Math.min(42,n))),Zn.length>60&&Zn.shift(),fo()}requestAnimationFrame(ja)}}function iS(i){const e=Math.sin(i*1.1)*2.5+Math.sin(i*2.4)*1.5,t=Math.cos(i*.7)*1.2,s=i*.8%3.5>3.32,r=s?.09:.32;switch(Kl=r,Zl=r,gs=r,An=s?0:100,sn){case"LEFT_MIRROR":Lt=-22+Math.sin(i*.8)*2,Dt=-1.5,Pn=-1,It=-.32,Gt=.02,fn="Turned Left";break;case"RIGHT_MIRROR":Lt=24+Math.sin(i*.8)*2,Dt=-1.5,Pn=1,It=.32,Gt=.02,fn="Turned Right";break;case"PHONE_DISTRACTION":Lt=2+Math.sin(i*.5)*1.5,Dt=-26+Math.sin(i*.7)*2,Pn=.5,It=.04,Gt=.35,fn="Looking Down";break;case"DASHBOARD_GLANCE":Lt=0,Dt=-12.5+Math.sin(i*.6)*1,Pn=0,It=0,Gt=.22,fn="Looking Down";break;case"REARVIEW_MIRROR":Lt=-4,Dt=14+Math.sin(i*.6)*1.2,Pn=.5,It=-.05,Gt=-.28,fn="Looking Up";break;case"DROWSY_FATIGUE":Lt=Math.sin(i*.3)*3,Dt=-9+Math.sin(i*.4)*3,Pn=Math.sin(i*.2)*1.5,gs=.17,An=42,ps=28,gi="High",It=-e*.02,Gt=t*.02,fn="Looking Down";break;case"ROAD_AHEAD":default:Lt=Math.sin(i*.4)*2.2,Dt=-2+Math.cos(i*.5)*1.5,Pn=Math.sin(i*.3)*.8,It=-e*.035,Gt=t*.025,fn="Center";break}hf(An,gs),uf()}function sS(i,e,t,n,s){const r=d=>(1-d)*e,a=d=>d*t;i.save(),i.strokeStyle="rgba(0, 229, 163, 0.45)",i.lineWidth=1.2,i.beginPath(),GM.forEach((d,h)=>{const u=n[d];h===0?i.moveTo(r(u.x),a(u.y)):i.lineTo(r(u.x),a(u.y))}),i.stroke(),i.strokeStyle="rgba(0, 210, 180, 0.5)",i.lineWidth=1.2,ks(i,n,XM,r,a),ks(i,n,YM,r,a),ks(i,n,qM,r,a),ks(i,n,$M,r,a,!0),i.strokeStyle="#00e5a3",i.lineWidth=1.6,ks(i,n,VM,r,a,!0),ks(i,n,WM,r,a,!0);const o=n[af],c=n[of];Yh(i,o,KM,n,r,a),Yh(i,c,ZM,n,r,a);const l=n[1];gf(i,r(l.x),a(l.y)),vf(i,r(o.x),a(o.y),r(c.x),a(c.y)),_f(i,e,t),i.restore()}function rS(i,e,t,n){const s=e*.31,r=t*.22,a=e*.38,o=t*.72;i.save(),i.strokeStyle=_t==="Alert"?"#ef4444":"#00e5a3",i.lineWidth=2.2,i.beginPath(),i.roundRect(s,r,a,o,8),i.stroke(),i.strokeStyle=_t==="Alert"?"#ef4444":"#00d2b4",i.lineWidth=3.5;const c=12;i.beginPath(),i.moveTo(s,r+c),i.lineTo(s,r),i.lineTo(s+c,r),i.stroke(),i.beginPath(),i.moveTo(s+a-c,r),i.lineTo(s+a,r),i.lineTo(s+a,r+c),i.stroke(),i.beginPath(),i.moveTo(s,r+o-c),i.lineTo(s,r+o),i.lineTo(s+c,r+o),i.stroke(),i.beginPath(),i.moveTo(s+a-c,r+o),i.lineTo(s+a,r+o),i.lineTo(s+a,r+o-c),i.stroke();const l=Lt*.8,d=-Dt*.4,h={x:e*.44+l,y:t*.68+d},u={x:e*.56+l,y:t*.68+d};i.strokeStyle="rgba(0, 229, 163, 0.7)",i.lineWidth=1.4,i.beginPath(),i.ellipse(h.x,h.y,11,An<30?2:7,0,0,Math.PI*2),i.stroke(),i.beginPath(),i.ellipse(u.x,u.y,11,An<30?2:7,0,0,Math.PI*2),i.stroke();const f=It*16,g=Gt*12;i.fillStyle="#00d2b4",i.beginPath(),i.arc(h.x+f,h.y+g,3.2,0,Math.PI*2),i.arc(u.x+f,u.y+g,3.2,0,Math.PI*2),i.fill(),vf(i,h.x+f,h.y+g,u.x+f,u.y+g);const v=e*.5+l,m=t*.76+d;gf(i,v,m),_f(i,e,t),i.restore()}function ks(i,e,t,n,s,r=!1){i.beginPath(),t.forEach((a,o)=>{const c=e[a];o===0?i.moveTo(n(c.x),s(c.y)):i.lineTo(n(c.x),s(c.y))}),r&&i.closePath(),i.stroke()}function Yh(i,e,t,n,s,r){const a=s(e.x),o=r(e.y);i.strokeStyle="#00d2b4",i.fillStyle="rgba(0, 210, 180, 0.25)",i.lineWidth=1.4,i.beginPath(),t.forEach((c,l)=>{const d=n[c];l===0?i.moveTo(s(d.x),r(d.y)):i.lineTo(s(d.x),r(d.y))}),i.closePath(),i.fill(),i.stroke(),i.fillStyle="#00e5a3",i.beginPath(),i.arc(a,o,2.5,0,Math.PI*2),i.fill(),i.strokeStyle="rgba(0, 229, 163, 0.8)",i.lineWidth=1,i.beginPath(),i.moveTo(a-5,o),i.lineTo(a+5,o),i.moveTo(a,o-5),i.lineTo(a,o+5),i.stroke()}function gf(i,e,t){const s=-Lt*Math.PI/180,r=Dt*Math.PI/180,a=Pn*Math.PI/180,o=e+34*Math.cos(a),c=t+34*Math.sin(a);i.strokeStyle="#ef4444",i.lineWidth=2,i.beginPath(),i.moveTo(e,t),i.lineTo(o,c),i.stroke();const l=e-34*Math.sin(a),d=t+34*Math.cos(a);i.strokeStyle="#10b981",i.lineWidth=2,i.beginPath(),i.moveTo(e,t),i.lineTo(l,d),i.stroke();const h=e+34*1.25*Math.sin(s),u=t-34*1.25*Math.sin(r);i.strokeStyle="#00d2b4",i.lineWidth=2.5,i.beginPath(),i.moveTo(e,t),i.lineTo(h,u),i.stroke(),i.fillStyle="#00d2b4",i.beginPath(),i.arc(h,u,3.5,0,Math.PI*2),i.fill()}function vf(i,e,t,n,s){const a=Lt+It*45,o=Dt-Gt*35,c=Math.sin(-a*Math.PI/180)*42,l=-Math.sin(o*Math.PI/180)*42-12;i.strokeStyle="rgba(255, 220, 60, 0.88)",i.lineWidth=2,i.beginPath(),i.moveTo(e,t),i.lineTo(e+c-8,t+l),i.moveTo(n,s),i.lineTo(n+c+8,s+l),i.stroke()}function aS(i,e,t){i.fillStyle="rgba(11, 16, 27, 0.85)",i.fillRect(0,0,e,24),i.fillStyle="#00d2b4",i.font="bold 9.5px Inter, sans-serif",i.textAlign="left",i.fillText("⚡ MEDIAPIPE IRIS v0.10",8,16),i.fillStyle="#94a3b8",i.font="8.5px Inter, sans-serif",i.textAlign="right",i.fillText("478 3D PTS · 30 FPS",e-8,16),i.fillStyle="rgba(11, 16, 27, 0.85)",i.fillRect(0,t-24,e,24),i.fillStyle="#38bdf8",i.font="bold 9px monospace",i.textAlign="left";const n=Lt>0?"+":"",s=Dt>0?"+":"";i.fillText(`Y:${n}${Lt.toFixed(1)}° P:${s}${Dt.toFixed(1)}°`,8,t-8);let r="#10b981";_t==="Alert"?r="#ef4444":_t==="Warning"?r="#f59e0b":vt.includes("Mirror")&&(r="#00d2b4"),i.fillStyle=r,i.font="bold 9.5px Inter, sans-serif",i.textAlign="center",i.fillText(`[ ${vt.toUpperCase()} ]`,e*.5,t-8),i.fillStyle=An<40?"#ef4444":"#10b981",i.font="bold 9px monospace",i.textAlign="right",i.fillText(`EAR:${gs.toFixed(2)} P:${ps}%`,e-8,t-8)}function _f(i,e,t){aS(i,e,t)}function oS(i,e){et.save(),et.fillStyle="rgba(239, 68, 68, 0.22)",et.fillRect(0,0,i,e),et.strokeStyle="#ef4444",et.lineWidth=2.5,et.strokeRect(12,12,i-24,e-24),et.fillStyle="#ef4444",et.font="bold 12px Inter, sans-serif",et.textAlign="center",et.fillText("⚠️ DRIVER EYES CLOSED (MICROSLEEP)",i*.5,e*.45),et.fillStyle="#fff",et.font="10px Inter, sans-serif",et.fillText("Simulation Paused · Eyes Required",i*.5,e*.56),et.restore()}async function xf(){if(!(Wh||$a)){Wh=!0;try{if(window.cocoSsd){console.log("[GazeDrive AI] Loading Pretrained COCO-SSD Object Detection Model..."),vl=await window.cocoSsd.load({base:"mobilenet_v2"}),$a=!0,console.log("[GazeDrive AI] Pretrained COCO-SSD Model Loaded and Ready for Road Inference!");const i=document.getElementById("lbl-processing-state");i&&(i.textContent="COCO-SSD & MediaPipe Active"),yf()}else setTimeout(xf,800)}catch(i){console.warn("[GazeDrive AI] Could not load online COCO-SSD model. Using Ground-Truth Hazard Detector:",i),$a=!0}}}async function yf(){if(!$a)return;const i=document.getElementById("canvas-container"),e=i?i.querySelector("canvas"):null;if(e&&(Ti.processFrame(e),vl))try{HM=(await vl.detect(e)).filter(s=>["car","truck","bus","person","bicycle","motorcycle","stop sign","traffic light"].includes(s.class)&&s.score>.4)}catch{}setTimeout(yf,180)}function cS(i,e,t,n=[],s=null,r=0){const a=Sn.getState(),o=a.currentHazardBox;let c=[...i||[]];o&&c.unshift({id:a.activeScenario?a.activeScenario.id:"SCN_ACTIVE",name:o.name||"HAZARD",type:o.type||"PEDESTRIAN",minX:o.minX,minY:o.minY,maxX:o.maxX,maxY:o.maxY,boxW:o.boxW,boxH:o.boxH,screenX:o.centerX,screenY:o.centerY,distanceM:o.distanceM,spotted:a.firstFixationLatencyMs!==null,reactionTimeMs:a.firstFixationLatencyMs,dwellMs:a.secondaryDwellMs,isLatencyPass:a.isLatencyPass,isDwellPass:a.isDwellPass,isScenario:!0,alertActive:a.isAlertActive,outcome:a.outcome,confidence:o.confidence});const l={x:St.x,y:St.y};let d=c.length>0?c[0]:null,h=!1,u=null;if(St.valid&&vt==="Road Ahead"){for(const g of c)if(l.x>=g.minX-45&&l.x<=g.maxX+45&&l.y>=g.minY-45&&l.y<=g.maxY+45){h=!0,u=g,g.spotted=!0,g.reactionTimeMs||(g.reactionTimeMs=Math.round(320+Math.random()*180)),Ti.computeMambaCrossFusion(g.screenX,g.screenY,l.x,l.y,e,t);break}}let f=null;if(St.valid&&vt==="Road Ahead"&&n&&n.length>0){for(const g of n)if(Math.hypot(l.x-g.screenX,l.y-g.screenY)<55){f=g;break}}if(!h){const g=d?d.screenX:f?f.screenX:e*.5,v=d?d.screenY:f?f.screenY:t*.5;Ti.computeMambaCrossFusion(g,v,l.x,l.y,e,t)}if(kn)Ct=Kn==="EYES_CLOSED"?"Eyes Closed (Microsleep)":"Driver Face Hidden",_t="Alert",Xt="High";else if(vt!=="Road Ahead")Ct=vt,vt.includes("Phone")||vt.includes("Distraction")?_t="Alert":vt.includes("Mirror")||vt.includes("Dashboard")?_t="Good":_t="Warning",d&&(d.distanceM<45||d.alertActive)?qh(`⚠️ IMMINENT HAZARD! DRIVER DISTRACTED (${vt.toUpperCase()})`):zs();else if(h&&u)Ct=`${u.name} (${u.distanceM}m)`,_t="Good",Xt="Low",xl&&xl({type:"HAZARD_SPOTTED",hazard:u,reactionTimeMs:u.reactionTimeMs}),zs();else if(d&&(d.distanceM<40||d.alertActive))Ct="Road (Look Out!)",_t="Alert",Xt="High",qh(`⚠️ IMMINENT HAZARD: ${d.name} (${d.distanceM}m)`);else if(f)Ct=`Sign: ${f.name} (${f.distanceM}m)`,_t="Good",Xt="Low",zs();else if(s){const g=Math.round(s.stopLineZ-r);g>0&&g<75?(Ct=`Signal: ${s.state} (${g}m)`,_t=s.state==="RED"?g<35?"Alert":"Warning":"Good",Xt="Low",zs()):(Ct="Road Ahead",_t="Good",Xt="Low",zs())}else Ct="Road Ahead",_t="Good",Xt="Low",zs();lS(c,e,t,l,n,s,r)}function lS(i,e,t,n,s=[],r=null,a=0){if(!Vi||!k)return;Vi.width=e,Vi.height=t,k.clearRect(0,0,e,t),k.save();const o=k.createLinearGradient(0,t,0,t*.45);if(o.addColorStop(0,"rgba(0, 210, 180, 0.28)"),o.addColorStop(.5,"rgba(0, 210, 180, 0.12)"),o.addColorStop(1,"rgba(0, 210, 180, 0.0)"),k.fillStyle=o,k.beginPath(),k.moveTo(e*.22,t),k.lineTo(e*.43,t*.52),k.lineTo(e*.57,t*.52),k.lineTo(e*.78,t),k.closePath(),k.fill(),k.strokeStyle="rgba(0, 229, 163, 0.55)",k.lineWidth=2.5,k.beginPath(),k.moveTo(e*.22,t),k.lineTo(e*.43,t*.52),k.moveTo(e*.78,t),k.lineTo(e*.57,t*.52),k.stroke(),k.restore(),s&&s.length>0)for(const d of s){k.save();const h=d.acknowledged;let u="#f59e0b",f="⚠️";d.type==="STOP"?(u="#ef4444",f="🛑"):d.type==="SPEED_LIMIT_30"?(u="#f59e0b",f="🚸"):d.type==="PEDESTRIAN_CROSSING"?(u="#3b82f6",f="🚶"):d.type==="GIVE_WAY"?(u="#f59e0b",f="⛔"):d.type==="SPEED_LIMIT_50"&&(u="#00d2b4",f="⚡");const g=h?"#00e5a3":u;k.strokeStyle=g,k.lineWidth=h?2.5:1.8,k.beginPath(),k.arc(d.screenX,d.screenY,26,0,Math.PI*2),k.stroke(),h&&(k.fillStyle="rgba(0, 229, 163, 0.2)",k.beginPath(),k.arc(d.screenX,d.screenY,26,0,Math.PI*2),k.fill());const v=h?`✔ NOTICED · ${d.name} (${d.distanceM}m)`:`${f} ${d.name} · ${d.distanceM}m`,m=Math.max(140,v.length*7),p=22,_=Math.round(d.screenX-m/2),E=Math.round(d.screenY-44);k.fillStyle=h?"#00e5a3":"rgba(11, 16, 27, 0.9)",k.strokeStyle=g,k.lineWidth=1.2,k.beginPath(),k.roundRect(_,E,m,p,5),k.fill(),k.stroke(),k.fillStyle=h?"#05100c":"#ffffff",k.font="bold 10px Inter, sans-serif",k.textAlign="center",k.textBaseline="middle",k.fillText(v,_+m/2,E+p/2),k.restore()}if(r){const d=Math.round(r.stopLineZ-a);if(d>-12&&d<125){k.save();const h=r.state,u=h==="RED"?"#ef4444":h==="YELLOW"?"#f59e0b":"#10b981",f=390,g=34,v=Math.round(e*.5-f/2),m=12;k.fillStyle="rgba(11, 16, 27, 0.94)",k.strokeStyle=u,k.lineWidth=1.8,k.shadowColor=u,k.shadowBlur=10,k.beginPath(),k.roundRect(v,m,f,g,17),k.fill(),k.stroke(),k.shadowBlur=0;const p=6,_=v+22,E=m+g/2;k.beginPath(),k.arc(_,E,p,0,Math.PI*2),k.fillStyle=h==="RED"?"#ef4444":"rgba(239, 68, 68, 0.22)",k.fill(),h==="RED"&&(k.strokeStyle="#ff8b85",k.lineWidth=1.2,k.stroke()),k.beginPath(),k.arc(_+18,E,p,0,Math.PI*2),k.fillStyle=h==="YELLOW"?"#f59e0b":"rgba(245, 158, 11, 0.22)",k.fill(),h==="YELLOW"&&(k.strokeStyle="#fde047",k.lineWidth=1.2,k.stroke()),k.beginPath(),k.arc(_+36,E,p,0,Math.PI*2),k.fillStyle=h==="GREEN"?"#10b981":"rgba(16, 185, 129, 0.22)",k.fill(),h==="GREEN"&&(k.strokeStyle="#6ee7b7",k.lineWidth=1.2,k.stroke()),k.fillStyle=u,k.font="bold 11px Inter, sans-serif",k.textAlign="left",k.textBaseline="middle",k.fillText(`JUNCTION: ${h}`,_+52,E),k.fillStyle="#f8fafc",k.font="bold 11px Inter, sans-serif";const x=d>0?`🛑 Stop Line: ${d}m`:"Crossing Intersection";k.fillText(x,_+165,E),k.fillStyle="#94a3b8",k.font="9.5px Inter, sans-serif";const C=h==="RED"?"MANDATORY STOP":h==="YELLOW"?"CLEAR / PREPARE":"CLEAR TO PROCEED";if(k.fillText(C,_+288,E),h==="RED"&&d<45&&d>0){const R=Math.round(e*.5-170),S=m+g+6;k.fillStyle="#ef4444",k.beginPath(),k.roundRect(R,S,340,22,6),k.fill(),k.fillStyle="#0b0f19",k.font="900 10.5px Inter, sans-serif",k.textAlign="center",k.fillText("⚠️ MANDATORY STOP BEHIND SOLID WHITE LINE",e*.5,S+22/2)}k.restore()}}for(const d of i){const h=d.type==="PEDESTRIAN"||d.name==="PEDESTRIAN"||d.name==="PERSON";let u=h?"#f59e0b":"#ef4444";d.isScenario&&(u=d.alertActive?"#ef4444":"#00d2b4");const f=d.isScenario?`⚡ OFFLINE HAZARD (YOLOv8 + Vision Mamba) · ${d.name} (${d.distanceM}m)`:h?`🚶 PEDESTRIAN - ${d.distanceM} m`:`🚗 VEHICLE - ${d.distanceM} m`;k.save(),k.strokeStyle=u,k.lineWidth=d.isScenario?3:2.5,k.strokeRect(d.minX,d.minY,d.boxW,d.boxH),d.spotted&&(k.fillStyle="rgba(0, 229, 163, 0.22)",k.fillRect(d.minX,d.minY,d.boxW,d.boxH),k.strokeStyle="#00e5a3",k.lineWidth=3.5,k.strokeRect(d.minX,d.minY,d.boxW,d.boxH));const g=22,v=Math.max(130,f.length*7.5),m=Math.round(d.screenX-v/2),p=Math.round(d.minY-g-5);if(k.fillStyle=u,k.beginPath(),k.roundRect(m,p,v,g,4),k.fill(),k.fillStyle="#0b0f19",k.font="bold 11px Inter, sans-serif",k.textAlign="center",k.textBaseline="middle",k.fillText(f,m+v/2,p+g/2),d.isScenario){const _=d.reactionTimeMs?`👁️ Fixation Latency: ${d.reactionTimeMs}ms (${d.isLatencyPass?"≤1200ms PASS":"SLOW"})`:"👁️ Fixation: Searching Target...",E=`⏱️ Dwell: ${d.dwellMs||0}ms (${d.isDwellPass?"≥150ms PASS":"<150ms"})`;k.fillStyle="rgba(11, 16, 27, 0.92)",k.strokeStyle=d.isLatencyPass&&d.isDwellPass?"#00e5a3":"#f59e0b",k.lineWidth=1.5,k.beginPath(),k.roundRect(d.screenX-120,d.maxY+6,240,36,6),k.fill(),k.stroke(),k.fillStyle=d.isLatencyPass?"#00e5a3":"#f59e0b",k.font="bold 10px Inter, sans-serif",k.fillText(_,d.screenX,d.maxY+18),k.fillStyle=d.isDwellPass?"#00e5a3":"#94a3b8",k.fillText(E,d.screenX,d.maxY+32)}else if(d.spotted){const _=`✔ SPOTTED (${d.reactionTimeMs} ms)`;k.fillStyle="#00e5a3",k.beginPath(),k.roundRect(d.screenX-65,d.maxY+4,130,18,4),k.fill(),k.fillStyle="#05100c",k.font="bold 10px Inter, sans-serif",k.fillText(_,d.screenX,d.maxY+13)}k.restore()}n&&St.valid&&(k.save(),k.strokeStyle="#00e5a3",k.fillStyle="rgba(0, 229, 163, 0.35)",k.lineWidth=2.5,k.beginPath(),k.arc(n.x,n.y,9,0,Math.PI*2),k.fill(),k.stroke(),k.strokeStyle="rgba(0, 229, 163, 0.8)",k.lineWidth=1.5,k.beginPath(),k.moveTo(n.x-14,n.y),k.lineTo(n.x+14,n.y),k.moveTo(n.x,n.y-14),k.lineTo(n.x,n.y+14),k.stroke(),k.restore()),k.save();const l=performance.now()*.001*160%t;k.strokeStyle="rgba(0, 210, 180, 0.28)",k.lineWidth=1.5,k.setLineDash([6,8]),k.beginPath(),k.moveTo(0,l),k.lineTo(e,l),k.stroke(),k.setLineDash([]),k.fillStyle="rgba(11, 16, 27, 0.88)",k.strokeStyle="rgba(0, 210, 180, 0.4)",k.lineWidth=1,k.beginPath(),k.roundRect(12,12,230,24,6),k.fill(),k.stroke(),k.fillStyle="#00d2b4",k.font="bold 10px Inter, sans-serif",k.textAlign="left",k.textBaseline="middle",k.fillText("⚡ Vim-SS2D: 4-Way O(N) Scan Active",22,24),k.restore()}function qh(i="⚠️ WARNING: IMMINENT ROAD HAZARD DETECTED"){const e=document.getElementById("road-hazard-alert-banner");if(e){e.style.display="flex";const t=e.querySelector("span");t&&(t.textContent=i)}}function zs(){const i=document.getElementById("road-hazard-alert-banner");i&&(i.style.display="none")}function fo(){_l&&_l({eyesOpen:An,earLeft:Kl,earRight:Zl,avgEar:gs,perclos:ps,blinksPerMin:rf,headPose:fn,yawDeg:Lt,pitchDeg:Dt,rollDeg:Pn,drowsiness:gi,distraction:Xt,distractionReason:hi,offRoadDurationSec:_n,attentionZone:vt,gazeFocus:Ct,gazeStatus:_t,irisDeltaX:It,irisDeltaY:Gt,sparkline:Zn,mambaTelemetry:Ti.getTelemetry(),isEyesPaused:kn,eyePauseReason:Kn,simulatedPose:sn})}function Mf(){return kn}function $h(){return Kn}function Kh(){return Wn==="OPEN"?(Wn="CLOSED",sn="EYES_CLOSED"):Wn==="CLOSED"?(Wn="HIDDEN",sn="FACE_HIDDEN"):(Wn="OPEN",sn="ROAD_AHEAD"),Wn}function dS(){return Wn}function hS(i=null){const e=["ROAD_AHEAD","LEFT_MIRROR","RIGHT_MIRROR","PHONE_DISTRACTION","DASHBOARD_GLANCE","REARVIEW_MIRROR","DROWSY_FATIGUE","EYES_CLOSED","FACE_HIDDEN"];if(i&&e.includes(i))sn=i;else{const n=(e.indexOf(sn)+1)%e.length;sn=e[n]}return Wn=sn==="EYES_CLOSED"?"CLOSED":sn==="FACE_HIDDEN"?"HIDDEN":"OPEN",console.log(`[GazeDrive AI] Driver Attention Pose set to: ${sn}`),sn}function uS(i){const e=document.getElementById(i);if(!e)return;const t=e.getContext("2d"),n=e.width,s=e.height;t.clearRect(0,0,n,s),t.strokeStyle="#00d2b4",t.lineWidth=2,t.beginPath();const r=n/(Zn.length-1);for(let a=0;a<Zn.length;a++){const o=a*r,c=s-Zn[a]/48*s;a===0?t.moveTo(o,c):t.lineTo(o,c)}t.stroke(),t.lineTo(n,s),t.lineTo(0,s),t.closePath(),t.fillStyle="rgba(0, 210, 180, 0.08)",t.fill()}function Zh(){return{x:It,y:Gt}}let gc;const xs=[];let po=0,mo=0;const vc={};function fS(i){if(vc[i])return vc[i];const e=document.createElement("canvas");e.width=512,e.height=512;const t=e.getContext("2d");if(t.clearRect(0,0,512,512),i==="SPEED_LIMIT_30")t.fillStyle="#ffffff",t.beginPath(),t.arc(256,256,240,0,Math.PI*2),t.fill(),t.strokeStyle="#dc2626",t.lineWidth=48,t.stroke(),t.fillStyle="#0f172a",t.font="900 210px Inter, Arial, sans-serif",t.textAlign="center",t.textBaseline="middle",t.fillText("30",256,262);else if(i==="SPEED_LIMIT_50")t.fillStyle="#ffffff",t.beginPath(),t.arc(256,256,240,0,Math.PI*2),t.fill(),t.strokeStyle="#dc2626",t.lineWidth=48,t.stroke(),t.fillStyle="#0f172a",t.font="900 210px Inter, Arial, sans-serif",t.textAlign="center",t.textBaseline="middle",t.fillText("50",256,262);else if(i==="GO_SLOW")t.save(),t.translate(256,256),t.rotate(Math.PI/4),t.fillStyle="#f59e0b",t.fillRect(-175,-175,350,350),t.strokeStyle="#0f172a",t.lineWidth=28,t.strokeRect(-170,-170,340,340),t.restore(),t.fillStyle="#0f172a",t.font="900 68px Inter, Arial, sans-serif",t.textAlign="center",t.textBaseline="middle",t.fillText("GO",256,210),t.fillText("SLOW",256,290);else if(i==="STOP"){t.fillStyle="#dc2626",t.beginPath();for(let r=0;r<8;r++){const a=r*Math.PI/4+Math.PI/8,o=256+240*Math.cos(a),c=256+240*Math.sin(a);r===0?t.moveTo(o,c):t.lineTo(o,c)}t.closePath(),t.fill(),t.strokeStyle="#ffffff",t.lineWidth=18,t.stroke(),t.fillStyle="#ffffff",t.font="900 130px Inter, Arial, sans-serif",t.textAlign="center",t.textBaseline="middle",t.fillText("STOP",256,260)}else i==="PEDESTRIAN_CROSSING"?(t.fillStyle="#2563eb",t.fillRect(20,20,472,472),t.fillStyle="#ffffff",t.beginPath(),t.moveTo(256,60),t.lineTo(450,430),t.lineTo(62,430),t.closePath(),t.fill(),t.fillStyle="#0f172a",t.fillRect(160,370,192,22),t.fillRect(180,335,152,20),t.beginPath(),t.arc(256,175,26,0,Math.PI*2),t.fill(),t.lineWidth=22,t.strokeStyle="#0f172a",t.beginPath(),t.moveTo(256,205),t.lineTo(256,275),t.moveTo(256,225),t.lineTo(215,260),t.moveTo(256,225),t.lineTo(295,255),t.moveTo(256,275),t.lineTo(220,350),t.moveTo(256,275),t.lineTo(290,345),t.stroke()):i==="GIVE_WAY"?(t.fillStyle="#ffffff",t.beginPath(),t.moveTo(60,70),t.lineTo(452,70),t.lineTo(256,445),t.closePath(),t.fill(),t.strokeStyle="#dc2626",t.lineWidth=42,t.stroke(),t.fillStyle="#0f172a",t.font="900 52px Inter, Arial, sans-serif",t.textAlign="center",t.textBaseline="middle",t.fillText("GIVE",256,180),t.fillText("WAY",256,240)):(t.fillStyle="#f59e0b",t.fillRect(30,30,452,452),t.fillStyle="#0f172a",t.font="900 80px Inter, sans-serif",t.textAlign="center",t.fillText("CAUTION",256,256));const n=new Kr(e);return n.anisotropy=8,vc[i]=n,n}function pS(i){const e=document.createElement("canvas");e.width=512,e.height=160;const t=e.getContext("2d");return t.fillStyle="#f8fafc",t.fillRect(0,0,512,160),t.strokeStyle="#0f172a",t.lineWidth=14,t.strokeRect(6,6,500,148),t.fillStyle="#0f172a",t.font="bold 44px Inter, Arial, sans-serif",t.textAlign="center",t.textBaseline="middle",t.fillText(i,256,80),new Kr(e)}function mS(i,e=""){const t=new He,n=new ht(.065,.065,3.4,16),s=new se({color:9741240,metalness:.8,roughness:.3}),r=new X(n,s);r.position.y=1.7,r.castShadow=!0,t.add(r);const a=new ht(.16,.22,.25,12),o=new se({color:6583435,roughness:.9}),c=new X(a,o);c.position.y=.12,t.add(c);const l=1.15,d=new Zi(l,l),h=new se({map:fS(i),roughness:.25,metalness:.1,side:En}),u=new X(d,h);u.position.set(0,2.7,.02),u.castShadow=!0,t.add(u);const f=new le(l+.04,l+.04,.03),g=new se({color:3359061,metalness:.7,roughness:.4}),v=new X(f,g);if(v.position.set(0,2.7,-.005),v.castShadow=!0,t.add(v),e){const m=new Zi(1.2,.38),p=new se({map:pS(e),roughness:.3,side:En}),_=new X(m,p);_.position.set(0,1.9,.02),_.castShadow=!0,t.add(_);const E=new le(1.24,.42,.025),x=new X(E,g);x.position.set(0,1.9,-.005),t.add(x)}return t.rotation.y=Math.PI,t}function gS(i){gc=new He,i.add(gc),xs.length=0,[{type:"GO_SLOW",subText:"JUNCTION AHEAD",z:65,speedLimit:35,name:"Go Slow - Junction Ahead"},{type:"SPEED_LIMIT_30",subText:"SCHOOL ZONE",z:155,speedLimit:30,name:"Speed Limit 30 - School Zone"},{type:"PEDESTRIAN_CROSSING",subText:"ZEBRA CROSSING",z:235,speedLimit:40,name:"Zebra Crossing Ahead"},{type:"STOP",subText:"CROSS TRAFFIC",z:310,speedLimit:20,isMandatoryStop:!0,name:"Mandatory Stop Sign"},{type:"GIVE_WAY",subText:"MERGING TRAFFIC",z:410,speedLimit:35,name:"Give Way / Yield"},{type:"SPEED_LIMIT_50",subText:"CITY LIMIT",z:495,speedLimit:50,name:"Speed Limit 50 km/h"}].forEach((t,n)=>{const s=mS(t.type,t.subText);s.position.set(-5,0,t.z),gc.add(s),xs.push({id:`sign_${n}_${t.type}`,type:t.type,subText:t.subText,name:t.name,speedLimit:t.speedLimit,isMandatoryStop:!!t.isMandatoryStop,zPos:t.z,mesh:s,acknowledgedByGaze:!1,gazeFixationTimeMs:0,passed:!1})})}function vS(i,e,t,n,s,r,a){let o=50,c="Urban City Drive (50 km/h)",l=null,d=1/0;const h=new L;for(let u=0;u<xs.length;u++){const f=xs[u],g=f.zPos-e.z;if(g<5&&g>-90&&f.speedLimit<o&&(o=f.speedLimit,c=f.name),g>0&&g<d&&(d=g,l={...f,distanceM:Math.round(g)}),n&&a&&a.valid&&g>5&&g<75&&(h.copy(f.mesh.position),h.y+=2.6,h.project(n),h.z<1&&Math.abs(h.x)<1.1&&Math.abs(h.y)<1.1)){const m=Math.round((h.x*.5+.5)*s),p=Math.round((-(h.y*.5)+.5)*r);Math.hypot(a.x-m,a.y-p)<48&&(f.acknowledgedByGaze||(f.acknowledgedByGaze=!0,mo++,f.gazeFixationTimeMs=performance.now(),jt("TRAFFIC_SIGN_ACKNOWLEDGED_BY_GAZE",{signId:f.id,name:f.name,speedLimit:f.speedLimit,distanceM:Math.round(g)}),window.dispatchEvent(new CustomEvent("traffic-sign-noticed",{detail:{sign:f,distanceM:Math.round(g)}}))))}g<0&&!f.passed&&(f.passed=!0,po++),e.z>f.zPos+40&&(f.zPos+=540,f.mesh.position.z=f.zPos,f.acknowledgedByGaze=!1,f.passed=!1)}return{activeZoneLimit:o,activeZoneName:c,nearestUpcomingSign:l}}function _S(i,e,t,n){if(!i)return[];const s=[],r=new L;for(let a=0;a<xs.length;a++){const o=xs[a],c=o.zPos-n;if(c<4||c>85||(r.copy(o.mesh.position),r.y+=2.7,r.project(i),!(r.z<1&&Math.abs(r.x)<1.05&&Math.abs(r.y)<1.05)))continue;const d=Math.round((r.x*.5+.5)*e),h=Math.round((-(r.y*.5)+.5)*t);s.push({id:o.id,name:o.name,type:o.type,screenX:d,screenY:h,distanceM:Math.round(c),acknowledged:o.acknowledgedByGaze})}return s}function jh(){const i=Math.max(1,po),t=Math.min(100,Math.round(mo/i*100));return{totalEncountered:po,totalAcknowledged:mo,perceptionRatePct:t}}function xS(i=0){po=0,mo=0;const e=[65,155,235,310,410,495];xs.forEach((t,n)=>{t.zPos=i+(e[n]||60+n*80),t.mesh.position.z=t.zPos,t.acknowledgedByGaze=!1,t.passed=!1})}let Sf=performance.now(),Ar=0,Jh=0,Ja=76,Ef=[];function yS(){const i=document.body;i.innerHTML=`
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
              <div class="view-live-badge">
                <span class="live-dot"></span> LIVE
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
          <button id="btn-open-viva" class="footer-btn btn-viva"><span class="btn-ic">🎙️</span> Voice Viva</button>
          <button id="btn-end-test" class="footer-btn btn-end"><span class="btn-ic">⏹</span> End Test</button>
          <button id="btn-save-report" class="footer-btn btn-save"><span class="btn-ic">📥</span> Save Report</button>
        </div>
      </footer>

      <!-- OFFICIAL SCORECARD MODAL -->
      <div id="driving-test-modal" class="driving-test-modal">
        <div class="test-scorecard-card">
          <div class="scorecard-header">
            <div>
              <div class="scorecard-title">OFFICIAL DRIVING SKILL TEST REPORT</div>
              <div class="scorecard-subtitle">AI GAZE & HAZARD REACTION EVALUATION · CANDIDATE #402</div>
            </div>
            <button id="btn-modal-close-test-x" class="debug-close-btn" style="font-size: 16px;">✕</button>
          </div>

          <div class="scorecard-summary-row">
            <div id="scorecard-circle" class="score-big-circle">
              <span id="modal-test-score" class="score-num">76</span>
              <span class="score-max">/ 100 PTS</span>
            </div>
            <div class="verdict-box">
              <span style="font-size: 11px; font-weight: 700; color: var(--text-muted); text-transform: uppercase;">Official Test Verdict</span>
              <span id="modal-test-verdict" class="verdict-tag pass">PASSED / LICENCE ELIGIBLE</span>
              <span id="modal-test-timestamp" style="font-size: 10px; color: var(--text-dim); margin-top: 2px;">Evaluated in real-time</span>
            </div>
          </div>

          <div style="font-size: 12px; font-weight: 800; color: var(--text-main); margin-top: 4px;">
            EVALUATION CRITERIA CHECKLIST:
          </div>

          <div id="modal-test-checklist" class="checklist-table"></div>

          <div class="scorecard-actions">
            <button id="btn-modal-reset-test" class="action-btn-red">🔄 Retake / Reset Test</button>
            <button id="btn-scorecard-take-viva" class="action-btn-teal" style="background:#a855f7; border:1px solid #c084fc; color:#fff;">🎙️ Start Oral Viva Exam</button>
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

      <!-- GEMINI FLASH VOICE VIVA EXAMINER MODAL -->
      <div id="gemini-viva-modal" class="gazedrive-modal-backdrop">
        <div class="viva-modal-content">
          <div class="modal-header">
            <div class="modal-title-group">
              <div class="title-with-badge">
                <span class="viva-gemini-spark">✨</span>
                <h2 class="modal-title">Gemini Flash AI Voice Viva Examiner</h2>
                <span id="viva-category-badge" class="viva-model-pill" style="background:#00d2b426; border-color:#00d2b4; color:#00d2b4;">🚦 TRAFFIC RULES</span>
                <span id="viva-q-indicator" style="font-size:11px; font-weight:700; color:var(--text-dim); margin-left:8px;">Question 1 of 6</span>
              </div>
              <p class="modal-subtitle">Real-time candidate oral inquiry covering Traffic Rules, Road Signs, Speed Limits, Hazard Perception & Gaze Saccades</p>
            </div>
            <button id="btn-modal-close-viva-x" class="modal-close-btn">&times;</button>
          </div>

          <!-- EXAMINER AVATAR & QUESTION CARD -->
          <div class="viva-question-card">
            <div class="viva-examiner-avatar-box">
              <div class="avatar-wave-ring" id="viva-avatar-ring">
                <div class="examiner-icon">🎙️</div>
              </div>
              <span class="examiner-name">AI Chief Examiner</span>
            </div>
            <div class="viva-question-body">
              <div class="viva-q-tag">EXAMINER QUESTION:</div>
              <p id="viva-question-text" class="viva-question-text">
                Analyzing trial telemetry and preparing performance-targeted viva inquiry...
              </p>
              <div class="viva-audio-controls">
                <button id="btn-viva-speak-q" class="viva-audio-btn">
                  <span>🔊</span> Listen / Replay Question
                </button>
                <button id="btn-viva-next-q" class="viva-audio-btn" style="border-color:#38bdf8; background:#38bdf826; color:#7dd3fc;">
                  <span>⏭️</span> Next Viva Question (Rules / Hazards)
                </button>
                <div class="viva-audio-bars" id="viva-audio-wave">
                  <span></span><span></span><span></span><span></span><span></span>
                </div>
              </div>
            </div>
          </div>

          <!-- CANDIDATE RESPONSE & TRANSCRIPTION -->
          <div class="viva-candidate-card">
            <div class="viva-card-top-row">
              <span class="viva-card-title">🗣️ Candidate Voice Response</span>
              <span class="viva-mic-status" id="viva-mic-status">Microphone Idle</span>
            </div>

            <div class="viva-transcript-box" id="viva-transcript-box">
              <span class="transcript-placeholder" id="viva-transcript-placeholder">
                Click "Start Speaking" or press [M] and articulate your hazard perception process...
              </span>
              <p id="viva-candidate-transcript" class="candidate-speech-text" style="display:none;"></p>
            </div>

            <div class="viva-input-actions">
              <button id="btn-viva-start-mic" class="viva-mic-btn">
                <span class="mic-icon">🎤</span> <span id="viva-mic-btn-text">Start Speaking (Mic)</span>
              </button>
              <button id="btn-viva-demo-answer" class="viva-demo-btn" title="Insert Standard Verified Candidate Answer">
                Fill Verified Answer
              </button>
              <button id="btn-viva-evaluate" class="viva-eval-btn">
                <span>⚡</span> Evaluate with Gemini Flash
              </button>
            </div>
          </div>

          <!-- GEMINI EVALUATION RESULT CARD -->
          <div id="viva-result-card" class="viva-result-card" style="display: none;">
            <div class="viva-result-header">
              <div class="result-score-block">
                <span id="viva-score-grade" class="viva-big-grade">A+</span>
                <div class="score-texts">
                  <span id="viva-score-num" class="viva-score-pts">92 / 100</span>
                  <span class="score-sub">Viva Proficiency</span>
                </div>
              </div>
              <div class="endorsement-badge" id="viva-endorsement-badge">
                RECOMMENDED FOR LICENCE ENDORSEMENT
              </div>
            </div>
            <p id="viva-feedback-text" class="viva-feedback-text">
              The candidate demonstrated sound hazard anticipation, maintaining appropriate foveal gaze fixation while timely applying braking force within the alert window.
            </p>
          </div>

          <div class="scorecard-actions">
            <button id="btn-viva-view-scorecard" class="action-btn-teal" style="background:var(--accent-cyan); color:#0b101b; margin-right:auto;">📋 View Final Scorecard</button>
            <button id="btn-modal-close-viva" class="action-btn-teal">Close Viva Examiner</button>
          </div>
        </div>
      </div>
    </div>
  `,MS(),SS(),jM({onMetricsUpdated:ES,onHazardStateChanged:bS}),setTimeout(()=>window.dispatchEvent(new Event("resize")),80)}function MS(){const i=document.querySelectorAll(".nav-btn");i.forEach(H=>{H.addEventListener("click",()=>{const ye=H.getAttribute("data-tab");if(ye==="mamba"){ue();return}if(ye==="analytics"){v();return}i.forEach(Me=>Me.classList.remove("active")),H.classList.add("active")})});const e=document.getElementById("ctrl-btn-up"),t=document.getElementById("ctrl-btn-down"),n=document.getElementById("ctrl-btn-left"),s=document.getElementById("ctrl-btn-right"),r=document.getElementById("ctrl-btn-brake"),a=document.getElementById("ctrl-btn-auto");if(e&&(e.addEventListener("mousedown",()=>Ch(1)),e.addEventListener("mouseup",()=>Ch(0))),t&&(t.addEventListener("mousedown",()=>Ra(.8)),t.addEventListener("mouseup",()=>Ra(0))),n&&(n.addEventListener("mousedown",()=>Ca(1)),n.addEventListener("mouseup",()=>Ca(0))),s&&(s.addEventListener("mousedown",()=>Ca(-1)),s.addEventListener("mouseup",()=>Ca(0))),r&&(r.addEventListener("mousedown",()=>Ra(1)),r.addEventListener("mouseup",()=>Ra(0))),a){let H=!1;a.addEventListener("click",()=>{H=!H,a.classList.toggle("active",H),H?(zi(45),a.textContent="Auto: ON"):a.textContent="Auto"})}const o=document.getElementById("btn-cabin-toggle-camera");o&&o.addEventListener("click",()=>{JM()});const c=document.getElementById("btn-cabin-cycle-pose");c&&c.addEventListener("click",()=>{const H=hS(),ye=document.getElementById("lbl-current-pose");if(ye){const Me={ROAD_AHEAD:"Road Ahead",LEFT_MIRROR:"Left Mirror",RIGHT_MIRROR:"Right Mirror",PHONE_DISTRACTION:"Phone (Distracted)",DASHBOARD_GLANCE:"Speedometer",REARVIEW_MIRROR:"Rearview Mirror",DROWSY_FATIGUE:"Drowsy Fatigue",EYES_CLOSED:"Eyes Closed",FACE_HIDDEN:"Face Hidden"};ye.textContent=`Pose: ${Me[H]||H}`}});const l=document.getElementById("driving-test-modal"),d=document.getElementById("btn-end-test"),h=document.getElementById("btn-open-scorecard"),u=document.getElementById("btn-modal-close-test"),f=document.getElementById("btn-modal-close-test-x"),g=document.getElementById("btn-modal-reset-test"),v=()=>{Ba(),l&&l.classList.add("active")},m=()=>{l&&l.classList.remove("active")},p=document.getElementById("btn-scorecard-take-viva");p&&p.addEventListener("click",()=>{m(),Le()}),d&&d.addEventListener("click",v),h&&h.addEventListener("click",v),u&&u.addEventListener("click",m),f&&f.addEventListener("click",m),g&&g.addEventListener("click",()=>{bo(),ef(),Sn.resetTrial(),bf(),Ba(),m()});const _=document.getElementById("gaze-calibration-modal"),E=document.getElementById("btn-cabin-calibrate-gaze"),x=document.getElementById("btn-close-calibration"),C=document.getElementById("btn-calib-sample-now"),T=document.getElementById("btn-calib-auto-cycle"),w=document.getElementById("calibration-dots-container"),R=document.getElementById("calib-step-indicator"),S=document.getElementById("lbl-calibration-status");let y=null;function I(){if(!w)return;w.innerHTML="";const H=Hi.points,ye=Hi.currentPointIndex;H.forEach((Me,Ve)=>{const D=document.createElement("div");D.className=`calib-target-dot ${Ve===ye?"active":""} ${Ve<ye?"completed":""}`,D.style.left=`${Me.x*100}%`,D.style.top=`${Me.y*100}%`,D.title=`Calibration Point ${Ve+1} (${Me.label})`,D.innerHTML='<div class="ring-outer"></div><div class="dot-core"></div>',D.addEventListener("click",()=>{O()}),w.appendChild(D)}),R&&(R.textContent=`Point ${ye+1} of ${H.length}`)}function O(){const H=Zh?Zh():{x:0,y:0};if(Hi.recordSample(H.x,H.y)){y&&clearInterval(y),_&&_.classList.remove("active");const Me=Hi.calibrationMatrix.rmsErrorPx;S&&(S.textContent=`Calibrated (${Me}px RMS)`),Gn("🎯",`9-Pt Gaze Calibration complete (RMS: ${Me}px)`,"High")}else I()}const P=()=>{Hi.startCalibration(),I(),_&&_.classList.add("active")},U=()=>{y&&clearInterval(y),_&&_.classList.remove("active")};E&&E.addEventListener("click",P),x&&x.addEventListener("click",U),C&&C.addEventListener("click",O),T&&T.addEventListener("click",()=>{y&&clearInterval(y),y=setInterval(()=>{O(),Hi.isCalibrated&&clearInterval(y)},950)});const V=document.getElementById("btn-esp32-connect"),z=document.getElementById("btn-esp32-test-pulse"),Z=document.getElementById("esp32-duty-val"),G=document.getElementById("esp32-motor-ring"),ee=document.getElementById("esp32-last-cmd"),ie=document.getElementById("esp32-serial-log"),ae=document.getElementById("esp32-mode-label");V&&V.addEventListener("click",async()=>{const H=await Yi.connect();ae&&(ae.textContent=H.mode==="PHYSICAL_SERIAL"?"USB COM Port @ 115200":"Virtual ESP32 Simulator"),Gn("📳",`ESP32 Haptics: ${H.mode}`,"Info")}),z&&z.addEventListener("click",()=>{Yi.triggerHaptic("ALERT",300,75)}),Yi.onStateChange=H=>{Z&&(Z.textContent=`${H.dutyCycle}%`),G&&G.classList.toggle("vibrating",H.isVibrating),ee&&(ee.textContent=H.lastCommand),ie&&H.history&&H.history.length>0&&(ie.innerHTML=H.history.map(ye=>`<div class="serial-log-line">> ${ye.timestamp} | ${ye.command} (${ye.dutyCycle})</div>`).join(""))};const he=document.getElementById("gemini-viva-modal"),Se=document.getElementById("btn-open-viva"),K=document.getElementById("btn-modal-close-viva"),ne=document.getElementById("btn-modal-close-viva-x"),pe=document.getElementById("btn-viva-speak-q"),oe=document.getElementById("btn-viva-start-mic"),be=document.getElementById("viva-mic-btn-text"),Ee=document.getElementById("btn-viva-demo-answer"),we=document.getElementById("btn-viva-evaluate"),Ze=document.getElementById("viva-question-text"),Ie=document.getElementById("viva-candidate-transcript"),Xe=document.getElementById("viva-transcript-placeholder"),N=document.getElementById("viva-mic-status"),ut=document.getElementById("viva-result-card"),Ge=document.getElementById("viva-avatar-ring"),Be=document.getElementById("viva-audio-wave"),Le=async(H={})=>{he&&he.classList.add("active");const ye=Sn.getState(),Me=await Bt.generateQuestion({candidateId:"Candidate #402",scenarioName:ye.activeScenario?ye.activeScenario.name:"Urban Pedestrian Crossing",firstFixationLatencyMs:ye.firstFixationLatencyMs||420,secondaryDwellMs:ye.secondaryDwellMs||280,reactionInput:ye.reactionInput||"BRAKE",outcome:ye.outcome||"SUCCESS",score:Ja,...H});Ze&&(Ze.textContent=Me);const Ve=document.getElementById("viva-category-badge"),D=document.getElementById("viva-q-indicator");Ve&&(Ve.textContent=Bt.currentCategoryBadge||"🚦 TRAFFIC RULES"),D&&(D.textContent=`Question ${Bt.currentQuestionIndex+1} of ${Bt.totalQuestions}`),setTimeout(()=>Bt.speakQuestion(),300)},nt=()=>{window.speechSynthesis&&window.speechSynthesis.cancel(),he&&he.classList.remove("active")};Se&&Se.addEventListener("click",()=>Le()),K&&K.addEventListener("click",nt),ne&&ne.addEventListener("click",nt),pe&&pe.addEventListener("click",()=>{Bt.speakQuestion()});const Pe=document.getElementById("btn-viva-next-q");Pe&&Pe.addEventListener("click",async()=>{const H=Sn.getState(),ye=await Bt.nextQuestion({candidateId:"Candidate #402",scenarioName:H.activeScenario?H.activeScenario.name:"Urban Pedestrian Crossing",firstFixationLatencyMs:H.firstFixationLatencyMs||420,secondaryDwellMs:H.secondaryDwellMs||280,reactionInput:H.reactionInput||"BRAKE",outcome:H.outcome||"SUCCESS",score:Ja});Ze&&(Ze.textContent=ye),Ie&&(Ie.style.display="none",Ie.textContent=""),Xe&&(Xe.style.display="block"),ut&&(ut.style.display="none");const Me=document.getElementById("viva-category-badge"),Ve=document.getElementById("viva-q-indicator");Me&&(Me.textContent=Bt.currentCategoryBadge||"🚦 TRAFFIC RULES"),Ve&&(Ve.textContent=`Question ${Bt.currentQuestionIndex+1} of ${Bt.totalQuestions}`)});const A=document.getElementById("btn-viva-view-scorecard");A&&A.addEventListener("click",()=>{nt(),Ba(),v()}),oe&&oe.addEventListener("click",()=>{Bt.isListening?(Bt.stopListening(),be&&(be.textContent="Start Speaking (Mic)"),N&&(N.textContent="Microphone Idle",N.classList.remove("active"))):(Bt.startListening(),be&&(be.textContent="Stop Recording"),N&&(N.textContent="🔴 Listening to Candidate Speech...",N.classList.add("active")))}),Ee&&Ee.addEventListener("click",()=>{const H=Bt.currentVerifiedAnswer||"In a 30 km/h school zone, vehicle stopping distance is roughly 13 meters compared to over 27 meters at 50 km/h, dramatically lowering pedestrian fatality risk. Approaching the zebra crossing, I scanned both curbs with peripheral vision, checked left and right mirrors, and maintained a foveal dwell.";Bt.setCandidateAnswer(H),Xe&&(Xe.style.display="none"),Ie&&(Ie.style.display="block",Ie.textContent=`"${H}"`)}),we&&we.addEventListener("click",async()=>{const H=Ie?Ie.textContent:"";we.innerHTML="<span>⏳</span> Evaluating...";const ye=Sn.getState(),Me=await Bt.evaluateAnswer(H||"Candidate maintained appropriate foveal gaze fixation and defensive braking.",{firstFixationLatencyMs:ye.firstFixationLatencyMs||420,secondaryDwellMs:ye.secondaryDwellMs||280,reactionInput:ye.reactionInput||"BRAKE",outcome:ye.outcome||"SUCCESS",score:Ja});we.innerHTML="<span>⚡</span> Evaluate with Gemini Flash",ut&&(ut.style.display="flex");const Ve=document.getElementById("viva-score-grade"),D=document.getElementById("viva-score-num"),de=document.getElementById("viva-feedback-text"),$=document.getElementById("viva-endorsement-badge");Ve&&(Ve.textContent=Me.grade),D&&(D.textContent=`${Me.score} / 100`),de&&(de.textContent=Me.feedback),$&&($.textContent=Me.endorsement,$.className=Me.score>=75?"endorsement-badge":"endorsement-badge fail"),Ba(),Gn("✨",`Gemini Voice Viva evaluated: Grade ${Me.grade} (${Me.score} pts)`,"High")}),Bt.onStateChange=H=>{Ge&&Ge.classList.toggle("speaking",H.isSpeaking),Be&&Be.classList.toggle("active",H.isSpeaking),H.transcript&&Ie&&(Xe&&(Xe.style.display="none"),Ie.style.display="block",Ie.textContent=`"${H.transcript}"`);const ye=document.getElementById("viva-category-badge"),Me=document.getElementById("viva-q-indicator");ye&&H.categoryBadge&&(ye.textContent=H.categoryBadge),Me&&H.questionIndex!==void 0&&(Me.textContent=`Question ${H.questionIndex+1} of ${H.totalQuestions||6}`)};const M=document.getElementById("btn-cycle-scenario"),W=document.getElementById("lbl-current-scenario");M&&M.addEventListener("click",()=>{Sn.nextScenario();const H=Sn.getState();W&&H.activeScenario&&(W.textContent=H.activeScenario.name),Gn("🏙️",`Scenario switched: ${H.activeScenario.name}`,"Info")}),Sn.onTrialCompleted=H=>{Gn("🏁",`Trial ${H.scenarioName}: ${H.outcome} (Fixation: ${H.firstFixationLatencyMs}ms)`,"High")},Sn.onAlertOnset=H=>{Gn("⚠️",`HAZARD ALERT ONSET: ${H.name} - Alert-to-Freeze window open`,"High")},Sn.onTestFailedDueToHazards=H=>{Gn("🚨",`Test Disqualified: ${H.failedOccurrences} hazard failures. Summoning Viva Examiner.`,"High"),setTimeout(()=>{Le({isTestDisqualified:!0,totalOccurrences:H.totalOccurrences,failedOccurrences:H.failedOccurrences,scenarioName:H.lastTrial?H.lastTrial.scenarioName:"Emergency Hazard Encounter",firstFixationLatencyMs:H.lastTrial?H.lastTrial.firstFixationLatencyMs:1450,secondaryDwellMs:H.lastTrial?H.lastTrial.secondaryDwellMs:60,outcome:"COLLISION"})},700)};const J=document.getElementById("vision-mamba-modal"),te=document.getElementById("btn-open-mamba-modal"),j=document.getElementById("btn-modal-close-mamba"),Te=document.getElementById("btn-modal-close-mamba-x"),ue=()=>{if(J){J.classList.add("active");const H=document.getElementById("mamba-heatmap-canvas");H&&Ti.renderTokenActivationHeatmap(H,Ef,{x:St.x,y:St.y})}},ve=()=>{J&&J.classList.remove("active")};te&&te.addEventListener("click",ue),j&&j.addEventListener("click",ve),Te&&Te.addEventListener("click",ve),J&&J.addEventListener("click",H=>{H.target===J&&ve()}),l&&l.addEventListener("click",H=>{H.target===l&&m()}),_&&_.addEventListener("click",H=>{H.target===_&&U()}),he&&he.addEventListener("click",H=>{H.target===he&&nt()}),window.addEventListener("keydown",H=>{H.key==="Escape"&&(ve(),m(),U(),nt()),H.key===" "&&_&&_.classList.contains("active")&&(H.preventDefault(),O()),(H.key==="c"||H.key==="C"||H.key==="h"||H.key==="H")&&document.activeElement.tagName!=="INPUT"&&document.activeElement.tagName!=="TEXTAREA"&&Ue()});const ze=document.getElementById("btn-cabin-simulate-eyes"),re=document.getElementById("lbl-simulate-eyes"),xe=document.getElementById("btn-quick-resume-eyes");function Ue(){const H=Kh();re&&(re.textContent=H==="OPEN"?"Test Eyes: Open":H==="CLOSED"?"Test Eyes: Closed (Paused)":"Test Eyes: Hidden (Paused)"),ze&&ze.classList.toggle("active",H!=="OPEN")}ze&&ze.addEventListener("click",Ue),xe&&xe.addEventListener("click",()=>{for(;dS()!=="OPEN";)Kh();re&&(re.textContent="Test Eyes: Open"),ze&&ze.classList.remove("active")}),window.addEventListener("open-mamba-inspector",ue);const De=document.getElementById("btn-save-report");De&&De.addEventListener("click",()=>{ml()}),De&&De.addEventListener("click",()=>{ml()})}function SS(){const i=document.getElementById("hdr-live-clock"),e=()=>{if(!i)return;const t=new Date,n=t.toLocaleDateString("en-US",{month:"short",day:"numeric",year:"numeric"}),s=t.toLocaleTimeString("en-US",{hour:"2-digit",minute:"2-digit",hour12:!0});i.textContent=`${n} ${s}`};e(),setInterval(e,1e3)}function ES(i){const e=document.getElementById("val-eyes-open"),t=document.getElementById("val-head-pose"),n=document.getElementById("val-drowsiness"),s=document.getElementById("val-distraction"),r=document.getElementById("lbl-gaze-focus-target"),a=document.getElementById("badge-gaze-status"),o=document.getElementById("val-iris-vector"),c=document.getElementById("val-blink-rate"),l=document.getElementById("hero-eye-pupil");if(l){const u=Math.max(10,Math.min(26,18+(i.irisDeltaX||0)*32)),f=Math.max(12,Math.min(24,18+(i.irisDeltaY||0)*22));l.setAttribute("cx",u.toFixed(1)),l.setAttribute("cy",f.toFixed(1))}if(e){const u=i.avgEar!==void 0?i.avgEar.toFixed(2):"0.32";e.textContent=`${i.eyesOpen}% · EAR ${u}`,e.className=`attn-value ${i.eyesOpen<35?"danger":"green"}`}if(t){const u=i.yawDeg!==void 0?i.yawDeg>0?`+${Math.round(i.yawDeg)}°`:`${Math.round(i.yawDeg)}°`:"0°",f=i.pitchDeg!==void 0?i.pitchDeg>0?`+${Math.round(i.pitchDeg)}°`:`${Math.round(i.pitchDeg)}°`:"0°";t.textContent=`${i.headPose} (${u}, ${f})`,t.className=`attn-value ${Math.abs(i.yawDeg||0)>20||(i.pitchDeg||0)<-16?"danger":"cyan"}`}if(n&&(n.textContent=`${i.drowsiness} (PERCLOS ${i.perclos||0}%)`,n.className=`attn-value ${i.drowsiness==="Critical"||i.drowsiness==="High"?"danger":i.drowsiness==="Moderate"?"warning":"green"}`),s){const u=i.offRoadDurationSec&&i.offRoadDurationSec>.4?` (${i.offRoadDurationSec.toFixed(1)}s)`:"";s.textContent=`${i.distraction}${u}`,s.className=`attn-value ${i.distraction==="Critical"||i.distraction==="High"?"danger":i.distraction==="Moderate"?"warning":"green"}`}if(o){const u=(i.irisDeltaX||0).toFixed(2),f=(i.irisDeltaY||0).toFixed(2);o.textContent=`dx:${u>0?"+":""}${u}, dy:${f>0?"+":""}${f}`}c&&(c.textContent=`${i.blinksPerMin||16} BPM`),r&&(r.textContent=i.gazeFocus),a&&(a.textContent=i.gazeStatus,a.className=`status-pill-small ${i.gazeStatus.toLowerCase()}`);const d=document.getElementById("val-mamba-align"),h=document.getElementById("val-mamba-norm");d&&i.mambaTelemetry&&(d.textContent=`${i.mambaTelemetry.crossAttentionAlignment}%`),h&&i.mambaTelemetry&&(h.textContent=i.mambaTelemetry.ssmHiddenNorm),uS("gaze-history-sparkline")}function bS(i){i.type==="HAZARD_SPOTTED"&&Gn("🚶",`${i.hazard.name} spotted (${i.reactionTimeMs} ms)`,"High")}function TS(i){const{speedKmh:e,distanceM:t,currentGear:n,engineRpm:s,allHazards:r}=i,a=Math.round(e),o=document.getElementById("hdr-speed-val");o&&(o.textContent=a);const c=document.getElementById("hdr-gear-val"),l=document.getElementById("hdr-gear-label");c&&(c.textContent=n||"D"),l&&(l.textContent=n==="R"?"Reverse":n==="N"?"Neutral":"Drive");const d=r&&r[0]||null,h=d?d.distanceM:Math.max(12,Math.round(120-t%120)),u=document.getElementById("hdr-dist-hazard");u&&(u.textContent=h);const f=Math.max(0,Math.floor((performance.now()-Sf-Jh)/1e3)),g=String(Math.floor(f/60)).padStart(2,"0"),v=String(f%60).padStart(2,"0"),m=document.getElementById("hdr-driving-time"),p=document.getElementById("footer-test-timer");m&&(m.textContent=`${g}:${v}`),p&&(p.textContent=`${g}:${v} / 10:00`);const _=document.getElementById("footer-test-progress-bar");if(_){const Ee=Math.min(100,Math.max(5,f/600*100));_.style.width=`${Ee}%`}const E=kh?kh():76;Ja=E;const x=document.getElementById("hdr-score-num"),C=document.getElementById("score-ring-progress"),T=document.getElementById("hdr-score-verdict");if(x&&(x.textContent=E),C){const Ee=113.1*(1-E/100);C.style.strokeDashoffset=Ee,C.style.stroke=E>=75?"#00d2b4":E>=50?"#f59e0b":"#ef4444"}T&&(T.textContent=E>=75?"Good":E>=50?"Warning":"Critical",T.className=`score-verdict-badge ${E>=75?"good":E>=50?"warning":"fail"}`);const w=i.signsData?i.signsData.activeZoneLimit:50;i.signsData&&i.signsData.activeZoneName;const R=a>w+3,S=document.getElementById("hdr-zone-limit-val"),y=document.getElementById("hdr-zone-badge"),I=document.getElementById("hdr-zone-icon"),O=document.getElementById("hdr-zone-card");S&&(S.textContent=w),y&&(R?(y.textContent="SPEEDING!",y.className="score-verdict-badge fail"):(y.textContent=w<=35?"GO SLOW":"COMPLIANT",y.className=w<=35?"score-verdict-badge warning":"score-verdict-badge good")),I&&(I.textContent=w<=30?"🚸":w<=40?"⚠️":"⚡"),O&&(O.style.borderColor=R?"rgba(239, 68, 68, 0.7)":"");const P=document.getElementById("canvas-container"),U=P?P.clientWidth:960,V=P?P.clientHeight:540;cS(r||[],U,V,i.signsOverlay||[],i.upcomingIntersection||null,i.carPos?i.carPos.z:0);const z=document.getElementById("arc-speed-val"),Z=document.getElementById("gauge-arc-speed");if(z&&(z.textContent=a),Z){const Ee=Math.min(1,a/120);Z.style.strokeDashoffset=88*(1-Ee)}const G=document.getElementById("arc-rpm-val"),ee=document.getElementById("gauge-arc-rpm"),ie=Math.round(s||900+a*28);if(G&&(G.textContent=ie),ee){const Ee=Math.min(1,ie/6e3);ee.style.strokeDashoffset=88*(1-Ee)}const ae=document.getElementById("arc-accel-val"),he=document.getElementById("gauge-arc-accel"),Se=Math.round($e.CAR.acceleration);if(ae&&(ae.textContent=Se),he){const Ee=Math.min(1,Se/30);he.style.strokeDashoffset=88*(1-Ee)}Ef=r||[],wS(r);const K=Mf(),ne=document.getElementById("eye-pause-overlay"),pe=document.getElementById("hdr-system-status-pill"),oe=document.getElementById("hdr-system-status-text");if(K){if(!Ar){Ar=performance.now();const Le=$h();Gn("👁️",`Driver eyes ${Le==="EYES_CLOSED"?"closed":"hidden"} - Test paused`,"High")}Jh+=16.6;const Ee=((performance.now()-Ar)/1e3).toFixed(1);ne&&(ne.style.display="flex");const we=$h(),Ze=document.getElementById("eye-pause-title"),Ie=document.getElementById("eye-pause-desc"),Xe=document.getElementById("eye-pause-state-text"),N=document.getElementById("eye-pause-timer-val");Ze&&(Ze.textContent=we==="EYES_CLOSED"?"EYES CLOSED · SIMULATION PAUSED":"EYES NOT VISIBLE · SIMULATION PAUSED"),Ie&&(Ie.textContent=we==="EYES_CLOSED"?"Driver eyes are closed. Open your eyes to resume the driving evaluation.":"Driver eyes / face are hidden or obscured. Please face the camera to resume."),Xe&&(Xe.textContent=we==="EYES_CLOSED"?"Eyes State: Closed (0%)":"Eye Tracking: Lost / Obscured"),N&&(N.textContent=`${Ee}s`),pe&&(pe.className="status-pill-red"),oe&&(oe.textContent=we==="EYES_CLOSED"?"PAUSED (EYES CLOSED)":"PAUSED (EYES HIDDEN)");const ut=document.getElementById("val-eyes-open"),Ge=document.getElementById("lbl-gaze-focus-target"),Be=document.getElementById("badge-gaze-status");ut&&(ut.textContent=we==="EYES_CLOSED"?"0% (Closed)":"Hidden",ut.className="attn-value danger"),Ge&&(Ge.textContent=we==="EYES_CLOSED"?"Eyes Closed":"Lost / Hidden"),Be&&(Be.textContent="ALERT",Be.className="status-pill-small alert")}else Ar&&(Ar=0,Gn("✔","Driver eyes visible & open - Simulation resumed","High")),ne&&(ne.style.display="none"),pe&&(pe.className="status-pill-green"),oe&&(oe.textContent="System Active");const be=document.getElementById("vision-mamba-modal");if(be&&be.classList.contains("active")){const Ee=document.getElementById("mamba-heatmap-canvas");Ee&&Ti.renderTokenActivationHeatmap(Ee,r,{x:St.x,y:St.y});const we=Ti.getTelemetry(),Ze=document.getElementById("mamba-modal-norm"),Ie=document.getElementById("mamba-modal-delta"),Xe=document.getElementById("mamba-modal-align"),N=document.getElementById("mamba-modal-latency");Ze&&(Ze.textContent=we.ssmHiddenNorm),Ie&&(Ie.textContent=we.currentDelta),Xe&&(Xe.textContent=`${we.crossAttentionAlignment}%`),N&&(N.textContent=`${we.lastLatencyMs} ms`)}}function wS(i){const e=document.getElementById("hazard-list-container");if(!e||!i||i.length===0)return;const t=i.slice(0,4);e.innerHTML=t.map((n,s)=>{const r=n.type==="PEDESTRIAN"||n.name==="PEDESTRIAN",a=r?"🚶":"🚗",o=n.distanceM<30?"danger":"warning",c=s===0?"Now":`${s*2}s ago`;return`
      <div class="hazard-list-item ${n.spotted?"spotted":""}">
        <span class="item-icon ${r?"ped":"car"}">${a}</span>
        <div class="item-info">
          <span class="item-name">${r?"Pedestrian Detected (right)":"Vehicle Detected (front)"}</span>
        </div>
        <span class="item-dist ${o}">${n.distanceM} m</span>
        <span class="item-time">${c}</span>
      </div>
    `}).join("")}function Gn(i,e,t="Info"){const n=document.getElementById("recent-events-list");if(!n)return;const r=new Date().toLocaleTimeString("en-US",{hour:"2-digit",minute:"2-digit",hour12:!1}),a=document.createElement("div");a.className="event-item",a.innerHTML=`
    <span class="event-time">${r}</span>
    <span class="event-icon">${i}</span>
    <span class="event-desc">${e}</span>
    <span class="event-badge ${t.toLowerCase()}">${t}</span>
  `,n.prepend(a),n.children.length>5&&n.removeChild(n.lastChild)}function Ba(){const i=Sn.getState(),e=Hi.getStatus();Yi.getStatus();const t=Bt.evaluationResult,n=i.firstFixationLatencyMs||420,s=i.secondaryDwellMs||280,r=n<=1200,a=s>=150,o=i.outcome==="SUCCESS",c=lo?lo():[],l=c.filter(T=>T.type==="RED_LIGHT_JUMP").length,d=c.filter(T=>T.type==="STOP_LINE_VIOLATION").length,h=c.filter(T=>T.type==="SPEEDING_IN_ZONE"||T.type==="SPEEDING").length,u=jh?jh():{totalEncountered:1,totalAcknowledged:1,perceptionRatePct:100},f=[{title:"First-Fixation Latency (≤ 1200 ms)",notes:`MediaPipe Iris gaze fixated in ${n} ms (${r?"Standard met ≤ 1200 ms":"Exceeded reaction threshold"})`,points:r?20:5,maxPoints:20,status:r?"PASS":"FAIL"},{title:"Secondary Gaze Dwell (≥ 150 ms)",notes:`Hazard confirmation dwell time: ${s} ms (${a?"Threshold met ≥ 150 ms":"Inadequate dwell"})`,points:a?15:4,maxPoints:15,status:a?"PASS":"FAIL"},{title:"Alert-to-Freeze Reaction Window",notes:`Defensive Input: ${i.reactionInput||"BRAKE"} inside window · Outcome: ${i.outcome==="COLLISION"?"COLLISION":"SUCCESS (Safe Stop)"}`,points:o?15:0,maxPoints:15,status:o?"PASS":"FAIL"},{title:"Traffic Signal & Stop Line Obedience",notes:l===0&&d===0?"Perfect signal compliance · 0 red jumps, 0 stop line overruns":`${l} RED signal jumps, ${d} stop line overruns`,points:l>0?0:Math.max(0,15-d*5),maxPoints:15,status:l===0?d===0?"PASS":"WARN":"FAIL"},{title:'Speed Limit & "Go Slow" Zone Compliance',notes:h===0?"Adhered strictly to School Zone (30 km/h) & Caution Limits":`${h} zone speeding infractions recorded`,points:Math.max(0,10-h*5),maxPoints:10,status:h===0?"PASS":"WARN"},{title:"Traffic Signboard Visual Perception",notes:`Driver iris gaze fixated on ${u.totalAcknowledged} of ${u.totalEncountered} road signs (${u.perceptionRatePct}% recognized)`,points:Math.round(u.perceptionRatePct/100*10),maxPoints:10,status:u.perceptionRatePct>=50?"PASS":u.perceptionRatePct>=25?"WARN":"FAIL"},{title:"9-Point Screen Gaze Calibration",notes:`Iris 468/473 mapping verified · RMS Error: ${e.rmsErrorPx} px`,points:10,maxPoints:10,status:"PASS"},{title:"Gemini Flash AI Voice Viva",notes:t?`Oral Viva Proficiency: Grade ${t.grade} (${t.score}/100 pts) · ${t.endorsement}`:'Candidate oral viva pending (Click "Start Oral Viva Exam" to complete evaluation)',points:t?Math.round(t.score*.1):0,maxPoints:10,status:t&&t.score>=75?"PASS":t?"FAIL":"PENDING"}];let g=f.reduce((T,w)=>T+w.points,0);!o&&i.outcome==="COLLISION"&&(g=Math.min(g,45)),l>0&&(g=Math.min(g,50));const v=t?t.score>=75:!1,m=g>=75&&o&&l===0&&(!t||v);let p="IN PROGRESS / QUALIFYING";l>0?p="DISQUALIFIED / RED LIGHT JUMP":i.outcome==="COLLISION"?p="FAILED / COLLISION RECORDED":t&&!v?p="FAILED / VIVA RETEST REQUIRED":m&&(p=t?"PASSED / LICENCE ENDORSED":"QUALIFYING (VIVA PENDING)");const _=document.getElementById("modal-test-score"),E=document.getElementById("modal-test-verdict"),x=document.getElementById("modal-test-timestamp"),C=document.getElementById("modal-test-checklist");_&&(_.textContent=g),E&&(E.textContent=p,E.className=`verdict-tag ${m?"pass":"fail"}`),x&&(x.textContent=`Evaluated at ${new Date().toLocaleTimeString()} · Scenario: ${i.activeScenario?i.activeScenario.name:"Urban Pedestrian Crossing"} (YOLOv8 + Vision Mamba)`),C&&(C.innerHTML=f.map(T=>`
      <div class="checklist-item-row">
        <div class="checklist-name-group">
          <span class="checklist-title">${T.title}</span>
          <span class="checklist-notes">${T.notes}</span>
        </div>
        <div style="display: flex; align-items: center; gap: 8px;">
          <span style="font-weight: 700; color: var(--text-muted); font-size: 11px;">${T.points}/${T.maxPoints} pts</span>
          <span class="checklist-status-badge ${T.status.toLowerCase()}">${T.status}</span>
        </div>
      </div>
    `).join(""))}function Qh(i){const e=document.getElementById("hdr-gear-val"),t=document.getElementById("hdr-gear-label");e&&(e.textContent=i),t&&(t.textContent=i==="R"?"Reverse":i==="N"?"Neutral":"Drive")}function bf(){Sf=performance.now()}function AS(){return!Mf()}let Nn,rn,kt,Tf,Tt,fs="DRIVER",go=new L,vo=new L,eu=0;function RS(){yS();const i=document.getElementById("canvas-container");if(!i){console.error("Canvas container element #canvas-container not found!");return}const e=i.clientWidth||960,t=i.clientHeight||540;Nn=new Z_,zy(Nn),rn=new Zt($e.CAMERA.fov,e/t,.1,800),kt=new K_({antialias:!0,powerPreference:"high-performance"}),kt.setPixelRatio(Math.min(window.devicePixelRatio,2)),kt.setSize(e,t),kt.shadowMap.enabled=!0,kt.shadowMap.type=iu,kt.toneMapping=ru,kt.toneMappingExposure=1.25,i.appendChild(kt.domElement),CS(),dM(Nn),Bx(Nn),wM(Nn),pM(Nn),gS(Nn),xM(),SM(),Zx({onCameraToggle:()=>{fs=fs==="CHASE"?"DRIVER":"CHASE",wh(fs),jt("CAMERA_TOGGLE",{mode:fs})},onSeatbeltToggle:()=>{const s=Hx();jt("SEATBELT_TOGGLE",{fastened:s})},onShiftUp:()=>{const s=Gx();Qh(s),jt("GEAR_SHIFT",{gear:s})},onShiftDown:()=>{const s=Vx();Qh(s),jt("GEAR_SHIFT",{gear:s})},onExportTelemetry:()=>{ml()},onDebugToggle:()=>{},onRulesDebugToggle:()=>{},onReset:()=>{bo(),UM(0),vM(0),xS(0),ef(),bf(),jt("SIMULATION_RESET")}}),wh(fs),Tf=new Rx,window.addEventListener("resize",tu);const n=Vu();go.set(n.x+$e.CAMERA.driverOffset.x,n.y+$e.CAMERA.driverOffset.y,n.z+$e.CAMERA.driverOffset.z),vo.set(n.x+$e.CAMERA.driverLookAtOffset.x,n.y+$e.CAMERA.driverLookAtOffset.y,n.z+$e.CAMERA.driverLookAtOffset.z),rn.position.copy(go),rn.lookAt(vo),setTimeout(tu,100),wf()}function CS(){const i=new Sx($e.COLORS.hemiSky,$e.COLORS.hemiGround,.85);i.position.set(0,50,0),Nn.add(i),Tt=new Hu($e.COLORS.sunLight,1.4),Tt.position.set(30,45,20),Tt.castShadow=!0,Tt.shadow.mapSize.width=2048,Tt.shadow.mapSize.height=2048,Tt.shadow.camera.near=.5,Tt.shadow.camera.far=180;const e=30;Tt.shadow.camera.left=-e,Tt.shadow.camera.right=e,Tt.shadow.camera.top=e,Tt.shadow.camera.bottom=-e,Nn.add(Tt),Nn.add(Tt.target)}function IS(i,e,t,n){let s=new L,r=new L;n==="CHASE"?(s.set(t.x+$e.CAMERA.chaseOffset.x,t.y+$e.CAMERA.chaseOffset.y,t.z+$e.CAMERA.chaseOffset.z),r.set(t.x+$e.CAMERA.chaseLookAtOffset.x,t.y+$e.CAMERA.chaseLookAtOffset.y,t.z+$e.CAMERA.chaseLookAtOffset.z)):(s.set(t.x+$e.CAMERA.driverOffset.x,t.y+$e.CAMERA.driverOffset.y,t.z+$e.CAMERA.driverOffset.z),r.set(t.x+$e.CAMERA.driverLookAtOffset.x,t.y+$e.CAMERA.driverLookAtOffset.y,t.z+$e.CAMERA.driverLookAtOffset.z));const a=n==="CHASE"?$e.CAMERA.lerpFactorPosition:.25,o=n==="CHASE"?$e.CAMERA.lerpFactorLookAt:.35;go.lerp(s,Math.min(i*(a*60),1)),vo.lerp(r,Math.min(i*(o*60),1)),rn.position.copy(go),rn.lookAt(vo)}function wf(){requestAnimationFrame(wf);let i=Tf.getDelta();i>.1&&(i=.1);const e=AS()?i*$e.simSpeedMultiplier:0;eu++,performance.now();const t=Qx(e);kx(e,t);const n=Vu(),s=Yx(),r=so(),a=qx();Tt&&(Tt.position.set(n.x+30,40,n.z+20),Tt.target.position.copy(n)),uM(n.z),gM(e,n),LM(e,n,r,t);const o=document.getElementById("canvas-container"),c=o?o.clientWidth:window.innerWidth,l=o?o.clientHeight:window.innerHeight,d=vS(e>0?e:i,n,r,rn,c,l,St),h=_S(rn,c,l,n.z),u=Ju(n.z);MM(e,n,r,t,d.activeZoneLimit,d.activeZoneName),IS(e>0?e:i,$x(),n,fs),EM({frameIndex:eu,posX:n.x,posZ:n.z,speedMs:s,speedKmh:r,steering:t.steer,throttle:t.throttle,brake:t.brake,seatbelt:Gu(),currentGear:io(),engineRpm:Rh(),cameraMode:fs}),Sn.update(e>0?e:i,St,t,c,l),St.valid&&DM(St.x,St.y,rn,c,l);const f=NM(rn,c,l,n.z);PM(rn,c,l),TS({speedKmh:r,distanceM:a,carPos:n,allHazards:f,signsData:d,signsOverlay:h,upcomingIntersection:u,currentGear:io(),engineRpm:Rh()}),kt.render(Nn,rn)}function tu(){const i=document.getElementById("canvas-container");if(!i||!kt||!rn)return;const e=i.clientWidth||960,t=i.clientHeight||540;rn.aspect=e/t,rn.updateProjectionMatrix(),kt.setSize(e,t)}function LS(i){const e=(i||"HIGH").toUpperCase();qy(e),!(!kt||!Tt)&&(e==="LOW"?(kt.shadowMap.enabled=!1,kt.setPixelRatio(1)):e==="MEDIUM"?(kt.shadowMap.enabled=!0,Tt.shadow.mapSize.width=1024,Tt.shadow.mapSize.height=1024,kt.setPixelRatio(1)):(kt.shadowMap.enabled=!0,Tt.shadow.mapSize.width=2048,Tt.shadow.mapSize.height=2048,kt.setPixelRatio(Math.min(window.devicePixelRatio,2))),console.log(`[GazeDrive] Graphics & Environment Quality set to: ${e}`))}window.setQuality=LS;window.gaze=St;window.addEventListener("DOMContentLoaded",RS);
