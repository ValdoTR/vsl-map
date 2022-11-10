class C{constructor(e){this.properties=e!=null?e:[]}get(e){const n=this.properties.filter(r=>r.name===e).map(r=>r.value);if(n.length>1)throw new Error('Expected only one property to be named "'+e+'"');if(n.length!==0)return n[0]}getString(e){return this.getByType(e,"string")}getNumber(e){return this.getByType(e,"number")}getBoolean(e){return this.getByType(e,"boolean")}getByType(e,n){const r=this.get(e);if(r!==void 0){if(n!=="json"&&typeof r!==n)throw new Error('Expected property "'+e+'" to have type "'+n+'"');return r}}mustGetString(e){return this.mustGetByType(e,"string")}mustGetNumber(e){return this.mustGetByType(e,"number")}mustGetBoolean(e){return this.mustGetByType(e,"boolean")}mustGetByType(e,n){const r=this.get(e);if(r===void 0)throw new Error('Property "'+e+'" is missing');if(n!=="json"&&typeof r!==n)throw new Error('Expected property "'+e+'" to have type "'+n+'"');return r}getType(e){const n=this.properties.filter(r=>r.name===e).map(r=>r.type);if(n.length>1)throw new Error('Expected only one property to be named "'+e+'"');if(n.length!==0)return n[0]}}const I="https://unpkg.com/@workadventure/scripting-api-extra@1.4.4/dist";class ee{constructor(e){this.name=e.name,this.x=e.x,this.y=e.y,this.properties=new C(e.properties)}get isReadable(){const e=this.properties.getString("readableBy");return e?WA.player.tags.includes(e):!0}get isWritable(){const e=this.properties.getString("writableBy");return e?WA.player.tags.includes(e):!0}}function O(t){const e=t?"#"+t.join():"";WA.nav.openCoWebSite(I+"/configuration.html"+e)}async function te(t,e){const n=await WA.room.getTiledMap(),r=new Map;return H(n.layers,r,t,e),r}function H(t,e,n,r){for(const o of t)if(o.type==="objectgroup"){for(const s of o.objects)if(s.type==="variable"||s.class==="variable"){if(!!n&&o.name!==n||!!r&&!r.includes(s.name))continue;e.set(s.name,new ee(s))}}else o.type==="group"&&H(o.layers,e,n,r)}let G;async function B(){return G===void 0&&(G=ne()),G}async function ne(){return re(await WA.room.getTiledMap())}function re(t){const e=new Map;return Y(t.layers,"",e),e}function Y(t,e,n){for(const r of t)r.type==="group"?Y(r.layers,e+r.name+"/",n):(r.name=e+r.name,n.set(r.name,r))}function oe(t){let e=1/0,n=1/0,r=0,o=0;const s=t.data;if(typeof s=="string")throw new Error("Unsupported tile layer data stored as string instead of CSV");for(let a=0;a<t.height;a++)for(let i=0;i<t.width;i++)s[i+a*t.width]!==0&&(e=Math.min(e,i),o=Math.max(o,i),n=Math.min(n,a),r=Math.max(r,a));return{top:n,left:e,right:o+1,bottom:r+1}}function F(t){let e=1/0,n=1/0,r=0,o=0;for(const s of t){const a=oe(s);a.left<e&&(e=a.left),a.top<n&&(n=a.top),a.right>o&&(o=a.right),a.bottom>r&&(r=a.bottom)}return{top:n,left:e,right:o,bottom:r}}/*!
 * mustache.js - Logic-less {{mustache}} templates with JavaScript
 * http://github.com/janl/mustache.js
 */var se=Object.prototype.toString,S=Array.isArray||function(e){return se.call(e)==="[object Array]"};function j(t){return typeof t=="function"}function ae(t){return S(t)?"array":typeof t}function x(t){return t.replace(/[\-\[\]{}()*+?.,\\\^$|#\s]/g,"\\$&")}function _(t,e){return t!=null&&typeof t=="object"&&e in t}function ie(t,e){return t!=null&&typeof t!="object"&&t.hasOwnProperty&&t.hasOwnProperty(e)}var ue=RegExp.prototype.test;function ce(t,e){return ue.call(t,e)}var le=/\S/;function pe(t){return!ce(le,t)}var fe={"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;","/":"&#x2F;","`":"&#x60;","=":"&#x3D;"};function me(t){return String(t).replace(/[&<>"'`=\/]/g,function(n){return fe[n]})}var ye=/\s*/,he=/\s+/,q=/\s*=/,ge=/\s*\}/,de=/#|\^|\/|>|\{|&|=|!/;function be(t,e){if(!t)return[];var n=!1,r=[],o=[],s=[],a=!1,i=!1,u="",p=0;function m(){if(a&&!i)for(;s.length;)delete o[s.pop()];else s=[];a=!1,i=!1}var b,W,T;function k(L){if(typeof L=="string"&&(L=L.split(he,2)),!S(L)||L.length!==2)throw new Error("Invalid tags: "+L);b=new RegExp(x(L[0])+"\\s*"),W=new RegExp("\\s*"+x(L[1])),T=new RegExp("\\s*"+x("}"+L[1]))}k(e||d.tags);for(var c=new M(t),v,h,A,E,V,w;!c.eos();){if(v=c.pos,A=c.scanUntil(b),A)for(var R=0,J=A.length;R<J;++R)E=A.charAt(R),pe(E)?(s.push(o.length),u+=E):(i=!0,n=!0,u+=" "),o.push(["text",E,v,v+1]),v+=1,E===`
`&&(m(),u="",p=0,n=!1);if(!c.scan(b))break;if(a=!0,h=c.scan(de)||"name",c.scan(ye),h==="="?(A=c.scanUntil(q),c.scan(q),c.scanUntil(W)):h==="{"?(A=c.scanUntil(T),c.scan(ge),c.scanUntil(W),h="&"):A=c.scanUntil(W),!c.scan(W))throw new Error("Unclosed tag at "+c.pos);if(h==">"?V=[h,A,v,c.pos,u,p,n]:V=[h,A,v,c.pos],p++,o.push(V),h==="#"||h==="^")r.push(V);else if(h==="/"){if(w=r.pop(),!w)throw new Error('Unopened section "'+A+'" at '+v);if(w[1]!==A)throw new Error('Unclosed section "'+w[1]+'" at '+v)}else h==="name"||h==="{"||h==="&"?i=!0:h==="="&&k(A)}if(m(),w=r.pop(),w)throw new Error('Unclosed section "'+w[1]+'" at '+c.pos);return We(Ae(o))}function Ae(t){for(var e=[],n,r,o=0,s=t.length;o<s;++o)n=t[o],n&&(n[0]==="text"&&r&&r[0]==="text"?(r[1]+=n[1],r[3]=n[3]):(e.push(n),r=n));return e}function We(t){for(var e=[],n=e,r=[],o,s,a=0,i=t.length;a<i;++a)switch(o=t[a],o[0]){case"#":case"^":n.push(o),r.push(o),n=o[4]=[];break;case"/":s=r.pop(),s[5]=o[2],n=r.length>0?r[r.length-1][4]:e;break;default:n.push(o)}return e}function M(t){this.string=t,this.tail=t,this.pos=0}M.prototype.eos=function(){return this.tail===""};M.prototype.scan=function(e){var n=this.tail.match(e);if(!n||n.index!==0)return"";var r=n[0];return this.tail=this.tail.substring(r.length),this.pos+=r.length,r};M.prototype.scanUntil=function(e){var n=this.tail.search(e),r;switch(n){case-1:r=this.tail,this.tail="";break;case 0:r="";break;default:r=this.tail.substring(0,n),this.tail=this.tail.substring(n)}return this.pos+=r.length,r};function P(t,e){this.view=t,this.cache={".":this.view},this.parent=e}P.prototype.push=function(e){return new P(e,this)};P.prototype.lookup=function(e){var n=this.cache,r;if(n.hasOwnProperty(e))r=n[e];else{for(var o=this,s,a,i,u=!1;o;){if(e.indexOf(".")>0)for(s=o.view,a=e.split("."),i=0;s!=null&&i<a.length;)i===a.length-1&&(u=_(s,a[i])||ie(s,a[i])),s=s[a[i++]];else s=o.view[e],u=_(o.view,e);if(u){r=s;break}o=o.parent}n[e]=r}return j(r)&&(r=r.call(this.view)),r};function y(){this.templateCache={_cache:{},set:function(e,n){this._cache[e]=n},get:function(e){return this._cache[e]},clear:function(){this._cache={}}}}y.prototype.clearCache=function(){typeof this.templateCache!="undefined"&&this.templateCache.clear()};y.prototype.parse=function(e,n){var r=this.templateCache,o=e+":"+(n||d.tags).join(":"),s=typeof r!="undefined",a=s?r.get(o):void 0;return a==null&&(a=be(e,n),s&&r.set(o,a)),a};y.prototype.render=function(e,n,r,o){var s=this.getConfigTags(o),a=this.parse(e,s),i=n instanceof P?n:new P(n,void 0);return this.renderTokens(a,i,r,e,o)};y.prototype.renderTokens=function(e,n,r,o,s){for(var a="",i,u,p,m=0,b=e.length;m<b;++m)p=void 0,i=e[m],u=i[0],u==="#"?p=this.renderSection(i,n,r,o,s):u==="^"?p=this.renderInverted(i,n,r,o,s):u===">"?p=this.renderPartial(i,n,r,s):u==="&"?p=this.unescapedValue(i,n):u==="name"?p=this.escapedValue(i,n,s):u==="text"&&(p=this.rawValue(i)),p!==void 0&&(a+=p);return a};y.prototype.renderSection=function(e,n,r,o,s){var a=this,i="",u=n.lookup(e[1]);function p(W){return a.render(W,n,r,s)}if(!!u){if(S(u))for(var m=0,b=u.length;m<b;++m)i+=this.renderTokens(e[4],n.push(u[m]),r,o,s);else if(typeof u=="object"||typeof u=="string"||typeof u=="number")i+=this.renderTokens(e[4],n.push(u),r,o,s);else if(j(u)){if(typeof o!="string")throw new Error("Cannot use higher-order sections without the original template");u=u.call(n.view,o.slice(e[3],e[5]),p),u!=null&&(i+=u)}else i+=this.renderTokens(e[4],n,r,o,s);return i}};y.prototype.renderInverted=function(e,n,r,o,s){var a=n.lookup(e[1]);if(!a||S(a)&&a.length===0)return this.renderTokens(e[4],n,r,o,s)};y.prototype.indentPartial=function(e,n,r){for(var o=n.replace(/[^ \t]/g,""),s=e.split(`
`),a=0;a<s.length;a++)s[a].length&&(a>0||!r)&&(s[a]=o+s[a]);return s.join(`
`)};y.prototype.renderPartial=function(e,n,r,o){if(!!r){var s=this.getConfigTags(o),a=j(r)?r(e[1]):r[e[1]];if(a!=null){var i=e[6],u=e[5],p=e[4],m=a;u==0&&p&&(m=this.indentPartial(a,p,i));var b=this.parse(m,s);return this.renderTokens(b,n,r,m,o)}}};y.prototype.unescapedValue=function(e,n){var r=n.lookup(e[1]);if(r!=null)return r};y.prototype.escapedValue=function(e,n,r){var o=this.getConfigEscape(r)||d.escape,s=n.lookup(e[1]);if(s!=null)return typeof s=="number"&&o===d.escape?String(s):o(s)};y.prototype.rawValue=function(e){return e[1]};y.prototype.getConfigTags=function(e){return S(e)?e:e&&typeof e=="object"?e.tags:void 0};y.prototype.getConfigEscape=function(e){if(e&&typeof e=="object"&&!S(e))return e.escape};var d={name:"mustache.js",version:"4.2.0",tags:["{{","}}"],clearCache:void 0,escape:void 0,parse:void 0,render:void 0,Scanner:void 0,Context:void 0,Writer:void 0,set templateCache(t){z.templateCache=t},get templateCache(){return z.templateCache}},z=new y;d.clearCache=function(){return z.clearCache()};d.parse=function(e,n){return z.parse(e,n)};d.render=function(e,n,r,o){if(typeof e!="string")throw new TypeError('Invalid template! Template should be a "string" but "'+ae(e)+'" was given as the first argument for mustache#render(template, view, partials)');return z.render(e,n,r,o)};d.escape=me;d.Scanner=M;d.Context=P;d.Writer=y;class ve{constructor(e,n){this.template=e,this.state=n,this.ast=d.parse(e)}getValue(){return this.value===void 0&&(this.value=d.render(this.template,this.state)),this.value}onChange(e){const n=[];for(const r of this.getUsedVariables().values())n.push(this.state.onVariableChange(r).subscribe(()=>{const o=d.render(this.template,this.state);o!==this.value&&(this.value=o,e(this.value))}));return{unsubscribe:()=>{for(const r of n)r.unsubscribe()}}}isPureString(){return this.ast.length===0||this.ast.length===1&&this.ast[0][0]==="text"}getUsedVariables(){const e=new Set;return this.recursiveGetUsedVariables(this.ast,e),e}recursiveGetUsedVariables(e,n){for(const r of e){const o=r[0],s=r[1],a=r[4];["name","&","#","^"].includes(o)&&n.add(s),a!==void 0&&typeof a!="string"&&this.recursiveGetUsedVariables(a,n)}}}async function Le(){var t;const e=await B();for(const[n,r]of e.entries()){const o=(t=r.properties)!==null&&t!==void 0?t:[];for(const s of o){if(s.type==="int"||s.type==="bool"||s.type==="object"||typeof s.value!="string")continue;const a=new ve(s.value,WA.state);if(a.isPureString())continue;const i=a.getValue();K(n,s.name,i),a.onChange(u=>{K(n,s.name,u)})}}}function K(t,e,n){WA.room.setProperty(t,e,n),e==="visible"&&(n?WA.room.showLayer(t):WA.room.hideLayer(t))}let N,D=0,U=0;function Z(t){if(WA.state[t.name]){let e=t.properties.mustGetString("openLayer");for(const n of e.split(`
`))WA.room.showLayer(n);e=t.properties.mustGetString("closeLayer");for(const n of e.split(`
`))WA.room.hideLayer(n)}else{let e=t.properties.mustGetString("openLayer");for(const n of e.split(`
`))WA.room.hideLayer(n);e=t.properties.mustGetString("closeLayer");for(const n of e.split(`
`))WA.room.showLayer(n)}}function we(t){const e=t.properties.getString("openSound"),n=t.properties.getNumber("soundRadius");let r=1;if(n){const o=X(t.properties.mustGetString("openLayer").split(`
`));if(o>n)return;r=1-o/n}e&&WA.sound.loadSound(e).play({volume:r})}function Pe(t){const e=t.properties.getString("closeSound"),n=t.properties.getNumber("soundRadius");let r=1;if(n){const o=X(t.properties.mustGetString("closeLayer").split(`
`));if(o>n)return;r=1-o/n}e&&WA.sound.loadSound(e).play({volume:r})}function Q(t){return t.map(e=>N.get(e)).filter(e=>(e==null?void 0:e.type)==="tilelayer")}function X(t){const e=Q(t),n=F(e),r=((n.right-n.left)/2+n.left)*32,o=((n.bottom-n.top)/2+n.top)*32;return Math.sqrt(Math.pow(D-r,2)+Math.pow(U-o,2))}function Se(t){WA.state.onVariableChange(t.name).subscribe(()=>{WA.state[t.name]?we(t):Pe(t),Z(t)}),Z(t)}function ke(t,e,n,r){const o=t.name;let s,a,i=!1;const u=n.getString("tag");let p=!0;u&&!WA.player.tags.includes(u)&&(p=!1);const m=!!u;function b(){var c;s&&s.remove(),s=WA.ui.displayActionMessage({message:(c=n.getString("closeTriggerMessage"))!==null&&c!==void 0?c:"Press SPACE to close the door",callback:()=>{WA.state[e.name]=!1,W()}})}function W(){var c;s&&s.remove(),s=WA.ui.displayActionMessage({message:(c=n.getString("openTriggerMessage"))!==null&&c!==void 0?c:"Press SPACE to open the door",callback:()=>{WA.state[e.name]=!0,b()}})}function T(c){const v=F(Q(e.properties.mustGetString("closeLayer").split(`
`)));a=WA.room.website.create({name:"doorKeypad"+c,url:r+"/keypad.html#"+encodeURIComponent(c),position:{x:v.right*32,y:v.top*32,width:32*3,height:32*4},allowApi:!0})}function k(){a&&(WA.room.website.delete(a.name),a=void 0)}WA.room.onEnterLayer(o).subscribe(()=>{if(i=!0,n.getBoolean("autoOpen")&&p){WA.state[e.name]=!0;return}if(!WA.state[e.name]&&(m&&!p||!m)&&(n.getString("code")||n.getString("codeVariable"))){T(o);return}!p||(WA.state[e.name]?b():W())}),WA.room.onLeaveLayer(o).subscribe(()=>{i=!1,n.getBoolean("autoClose")&&(WA.state[e.name]=!1),s&&s.remove(),k()}),WA.state.onVariableChange(e.name).subscribe(()=>{i&&(!n.getBoolean("autoClose")&&WA.state[e.name]===!0&&b(),a&&WA.state[e.name]===!0&&k(),!n.getBoolean("autoOpen")&&WA.state[e.name]===!1&&W())})}function Ee(t){const e=t.properties.mustGetString("bellSound"),n=t.properties.getNumber("soundRadius");let r=1;if(n){const o=Math.sqrt(Math.pow(t.x-D,2)+Math.pow(t.y-U,2));if(o>n)return;r=1-o/n}WA.sound.loadSound(e).play({volume:r})}function Ce(t){WA.state[t.name]===void 0&&(WA.state[t.name]=0),WA.state.onVariableChange(t.name).subscribe(()=>{WA.state[t.name]&&Ee(t)})}function ze(t,e,n){let r;const o=e.getString("bellPopup");WA.room.onEnterLayer(n).subscribe(()=>{var s;o?r=WA.ui.openPopup(o,"",[{label:(s=e.getString("bellButtonText"))!==null&&s!==void 0?s:"Ring",callback:()=>{WA.state[t]=WA.state[t]+1}}]):WA.state[t]=WA.state[t]+1}),WA.room.onLeaveLayer(n).subscribe(()=>{r&&(r.close(),r=void 0)})}async function Me(t){t=t!=null?t:I;const e=await te();N=await B();for(const n of e.values())n.properties.get("door")&&Se(n),n.properties.get("bell")&&Ce(n);for(const n of N.values()){const r=new C(n.properties),o=r.getString("doorVariable");if(o&&n.type==="tilelayer"){const a=e.get(o);if(a===void 0)throw new Error('Cannot find variable "'+o+'" referred in the "doorVariable" property of layer "'+n.name+'"');ke(n,a,r,t)}const s=r.getString("bellVariable");s&&ze(s,r,n.name)}WA.player.onPlayerMove(n=>{D=n.x,U=n.y})}function Te(t,e){const n=t.getString("bindVariable");if(n){const r=t.get("enterValue"),o=t.get("leaveValue"),s=t.getString("triggerMessage"),a=t.getString("tag");Ve(n,e,r,o,s,a)}}function Ve(t,e,n,r,o,s){s&&!WA.player.tags.includes(s)||(n!==void 0&&WA.room.onEnterLayer(e).subscribe(()=>{o||(WA.state[t]=n)}),r!==void 0&&WA.room.onLeaveLayer(e).subscribe(()=>{WA.state[t]=r}))}async function Be(){const t=await B();for(const e of t.values()){const n=new C(e.properties);Te(n,e.name)}}let $;async function Re(t){const e=await WA.room.getTiledMap();t=t!=null?t:I,$=await B();const n=e.layers.find(r=>r.name==="configuration");if(n){const o=new C(n.properties).getString("tag");(!o||WA.player.tags.includes(o))&&WA.ui.registerMenuCommand("Configure the room",()=>{WA.nav.openCoWebSite(t+"/configuration.html",!0)});for(const s of $.values()){const a=new C(s.properties),i=a.getString("openConfig");i&&s.type==="tilelayer"&&Ge(i.split(","),s.name,a)}}}function Ge(t,e,n){let r;const o=n.getString("openConfigAdminTag");let s=!0;o&&!WA.player.tags.includes(o)&&(s=!1);function a(){var u;r&&r.remove(),r=WA.ui.displayActionMessage({message:(u=n.getString("openConfigTriggerMessage"))!==null&&u!==void 0?u:"Press SPACE or touch here to configure",callback:()=>O(t)})}function i(){WA.nav.closeCoWebSite()}WA.room.onEnterLayer(e).subscribe(()=>{const u=n.getString("openConfigTrigger");s&&(u&&u==="onaction"?a():O(t))}),WA.room.onLeaveLayer(e).subscribe(()=>{r&&r.remove(),i()})}function xe(){return WA.onInit().then(()=>{Me().catch(t=>console.error(t)),Be().catch(t=>console.error(t)),Re().catch(t=>console.error(t)),Le().catch(t=>console.error(t))}).catch(t=>console.error(t))}console.log("Script started successfully");let l;WA.onInit().then(()=>{console.log("Scripting API ready"),console.log("Player tags: ",WA.player.tags),WA.room.onEnterLayer("zones/cinema1").subscribe(()=>{const t=WA.state.cinema1;l=WA.ui.openPopup("cinema1Popup","L'esprit pionnier ",[{label:"Voir le film",className:"primary",callback:()=>g(t)}])}),WA.room.onLeaveLayer("zones/cinema1").subscribe(f),WA.room.onEnterLayer("zones/cinema2").subscribe(()=>{const t=WA.state.cinema2;l=WA.ui.openPopup("cinema2Popup","Flamingo",[{label:"Voir le film",className:"primary",callback:()=>g(t)}])}),WA.room.onLeaveLayer("zones/cinema2").subscribe(f),WA.room.onEnterLayer("zones/cinema3").subscribe(()=>{const t=WA.state.cinema3;l=WA.ui.openPopup("cinema3Popup","Capita Spring",[{label:"Voir le film",className:"primary",callback:()=>g(t)}])}),WA.room.onLeaveLayer("zones/cinema3").subscribe(f),WA.room.onEnterLayer("zones/cinema4").subscribe(()=>{const t=WA.state.cinema4;l=WA.ui.openPopup("cinema4Popup","Grand Aston Hotel ",[{label:"Voir le film",className:"primary",callback:()=>g(t)}])}),WA.room.onLeaveLayer("zones/cinema4").subscribe(f),WA.room.onEnterLayer("zones/cinema5").subscribe(()=>{const t=WA.state.cinema5;l=WA.ui.openPopup("cinema5Popup","Bouygues Turkmen Major references",[{label:"Voir le film",className:"primary",callback:()=>g(t)}])}),WA.room.onLeaveLayer("zones/cinema5").subscribe(f),WA.room.onEnterLayer("zones/cinema6").subscribe(()=>{const t=WA.state.cinema6;l=WA.ui.openPopup("cinema6Popup","Mus\xE9e Yves Saint Laurent",[{label:"Voir le film",className:"primary",callback:()=>g(t)}])}),WA.room.onLeaveLayer("zones/cinema7").subscribe(f),WA.room.onEnterLayer("zones/cinema7").subscribe(()=>{const t=WA.state.cinema7;l=WA.ui.openPopup("cinema7Popup","Ocean Cay",[{label:"Voir le film",className:"primary",callback:()=>g(t)}])}),WA.room.onLeaveLayer("zones/cinema7").subscribe(f),WA.room.onEnterLayer("zones/cinema8").subscribe(()=>{const t=WA.state.cinema8;l=WA.ui.openPopup("cinema8Popup","Tour CFC",[{label:"Voir le film",className:"primary",callback:()=>g(t)}])}),WA.room.onLeaveLayer("zones/cinema8").subscribe(f),WA.room.onEnterLayer("zones/cinema9").subscribe(()=>{const t=WA.state.cinema9;l=WA.ui.openPopup("cinema9Popup","ATG Diamond",[{label:"Voir le film",className:"primary",callback:()=>g(t)}])}),WA.room.onLeaveLayer("zones/cinema9").subscribe(f),WA.room.onEnterLayer("zones/cinema10").subscribe(()=>{const t=WA.state.cinema10;l=WA.ui.openPopup("cinema10Popup","Elevate",[{label:"Voir le film",className:"primary",callback:()=>g(t)}])}),WA.room.onLeaveLayer("zones/cinema10").subscribe(f),WA.room.onEnterLayer("zones/cinema11").subscribe(()=>{const t=WA.state.cinema11;l=WA.ui.openPopup("cinema11Popup","I am a Safety leader",[{label:"Voir le film",className:"primary",callback:()=>g(t)}])}),WA.room.onLeaveLayer("zones/cinema11").subscribe(f),WA.room.onEnterLayer("zones/cinema12").subscribe(()=>{const t=WA.state.cinema12;l=WA.ui.openPopup("cinema12Popup","Notre ambition Carbone",[{label:"Voir le film",className:"primary",callback:()=>g(t)}])}),WA.room.onLeaveLayer("zones/cinema12").subscribe(f),WA.room.onEnterLayer("zones/market1").subscribe(()=>{l=WA.ui.openPopup("market1Popup","Pierre Auberger te parle",[])}),WA.room.onLeaveLayer("zones/market1").subscribe(f),WA.room.onEnterLayer("zones/market2").subscribe(()=>{l=WA.ui.openPopup("market2Popup","Les insights de DALS",[])}),WA.room.onLeaveLayer("zones/market2").subscribe(f),WA.room.onEnterLayer("zones/market3").subscribe(()=>{l=WA.ui.openPopup("market3Popup","Les bons plans Bouygues Immo pour acheter pas cher",[])}),WA.room.onLeaveLayer("zones/market3").subscribe(f),WA.room.onEnterLayer("zones/market4").subscribe(()=>{l=WA.ui.openPopup("market4Popup","Victoria, 24 ans, pilote de tunnelier sur le RER E",[])}),WA.room.onLeaveLayer("zones/market4").subscribe(f),WA.room.onEnterLayer("zones/market5").subscribe(()=>{l=WA.ui.openPopup("market5Popup","La 5G et les vaccins Pfizer",[])}),WA.room.onLeaveLayer("zones/market5").subscribe(f),WA.room.onEnterLayer("zones/market6").subscribe(()=>{l=WA.ui.openPopup("market6Popup","Les secrets de Koh Lanta",[])}),WA.room.onLeaveLayer("zones/market6").subscribe(f),WA.room.onEnterLayer("zones/market7").subscribe(()=>{l=WA.ui.openPopup("market7Popup","Le coin de ceux qui cherchent des bons artisans pas cher en Ile de France pour refaire leur salle de bain",[])}),WA.room.onLeaveLayer("zones/market7").subscribe(f),WA.room.onEnterLayer("zones/market8").subscribe(()=>{l=WA.ui.openPopup("market8Popup","Les dessous des pubs Bouygues Telecom",[])}),WA.room.onLeaveLayer("zones/market8").subscribe(f),WA.room.onEnterLayer("zones/market9").subscribe(()=>{l=WA.ui.openPopup("market9Popup","Devenir community manager chez Colas",[])}),WA.room.onLeaveLayer("zones/market9").subscribe(f),WA.room.onEnterLayer("drinkZone").subscribe(()=>{const t="https://www.750g.com/mojito-r99211.htm",e="https://www.ateliersetsaveurs.com/les-recettes/cocktails/detail/981/green-martini";l=WA.ui.openPopup("drinkZonePopup","Qu'est-ce que je vous sers ?",[{label:"Red Mojito",className:"primary",callback:()=>g(t)},{label:"Green Martini",className:"primary",callback:()=>g(e)}])}),WA.room.onLeaveLayer("drinkZone").subscribe(f),xe().then(()=>{console.log("Scripting API Extra ready")}).catch(t=>console.error(t))}).catch(t=>console.error(t));function g(t){WA.nav.openCoWebSite(t),f()}function f(){l!==void 0&&(l.close(),l=void 0)}
