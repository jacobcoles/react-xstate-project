(this["webpackJsonpxstate-react-typescript-template"]=this["webpackJsonpxstate-react-typescript-template"]||[]).push([[0],{22:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.d(__webpack_exports__,"a",(function(){return parse}));var _srgs__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(9);function LOG(t){}function clone(t){if(null==t||"object"!=typeof t)return t;var e=new t.constructor;for(var n in t)e[n]=clone(t[n]);return e}function isEmpty(t){for(var e in t)if(t.hasOwnProperty(e))return!1;return!0}function Chart(t){this.numberOfWords=t,this.passives=new Array(t),this.actives=new Array(t);for(var e=0;e<=t;e++)this.passives[e]={},this.actives[e]={};this.add=function(t){var e,n;return t.isPassive?(e=this.passives[t.start],n=t.lhs):(e=this.actives[t.end],n=t.next.content),n in e||(e[n]={}),!(t in e[n])&&(e[n][t]=t,!0)},this.resultsForRule=function(e,n,i){n=n||0,i=i||t;var r=[],o=this.passives[n][e];for(var s in o)o[s].end==i&&r.push(o[s].out);return r},this.allEdges=function(){return this.allPassiveEdges().concat(this.allActiveEdges())},this.allPassiveEdges=function(){var t=[];for(var e in this.passives)for(var n in this.passives[e])for(var i in this.passives[e][n])t.push(this.passives[e][n][i]);return t},this.allActiveEdges=function(){var t=[];for(var e in this.actives)for(var n in this.actives[e])for(var i in this.actives[e][n])t.push(this.actives[e][n][i]);return t},this.statistics=function(){var t=this.allPassiveEdges().length,e=this.allActiveEdges().length;return{nrEdges:t+e,nrPassiveEdges:t,nrActiveEdges:e}}}function PassiveEdge(t,e,n,i){this.start=t,this.end=e,this.lhs=n,this.out=i,this.isPassive=!0;var r="["+t+"-"+e+"] $"+n+" := "+i;this._string=r,this.toString=function(){return this._string}}function ActiveEdge(t,e,n,i,r,o,s,a){this.start=t,this.end=e,this.lhs=n,this.next=i,this.rest=r,this.out=o,this.rules=s,this.text=a,this.isPassive=!1;var c="<"+t+"-"+e+"> $"+n+" -> "+i+", "+r+" := "+o+" <- "+s;this._string=c,this.toString=function(){return this._string}}function parse(words,grammar,root,filter){root||(root=grammar.$root);var chart=new Chart(words.length),agenda=[],leftCornerFilter;function addToChart(inference,start,end,lhs,rhs,out,rules,text){var edge;if(rhs.length>0){var next=rhs[0],rest=rhs.slice(1);switch(next.constructor){case Array:return void addToChart(inference+",SEQUENCE",start,end,lhs,next.concat(rest),out,rules,text);case _srgs__WEBPACK_IMPORTED_MODULE_0__.g:var min=next.min,max=next.max;if(min<=0&&addToChart(inference+",SKIP",start,end,lhs,rest,out,rules,text),max>0){var content=next.content,rhs=1==max?[content]:[content,_srgs__WEBPACK_IMPORTED_MODULE_0__.f(min?min-1:min,max-1,content)];addToChart(inference+",REPEAT",start,end,lhs,rhs.concat(rest),out,rules,text)}return;case _srgs__WEBPACK_IMPORTED_MODULE_0__.c:var oneof=next.content;for(var i in oneof){var rhs=oneof[i].concat(rest);addToChart(inference+",ONEOF",start,end,lhs,rhs,out,rules,text)}return;case _srgs__WEBPACK_IMPORTED_MODULE_0__.i:return out=clone(out),rules=clone(rules),eval(next.content),void addToChart(inference+",TAG",start,end,lhs,rest,out,rules,text)}edge=new ActiveEdge(start,end,lhs,next,rest,out,rules,text)}else edge=new PassiveEdge(start,end,lhs,out);chart.add(edge)&&(LOG("+ "+inference+": "+edge),agenda.push(edge))}for(leftCornerFilter=void 0==filter?function(){return!0}:function(t,e){var n=filter[t];return!n||words[e]in n},addToChart("INIT",0,0,root,grammar[root],{},{},{});agenda.length>0;){var edge=agenda.pop(),start=edge.start,end=edge.end,lhs=edge.lhs,next=edge.next;if(LOG(edge),edge.isPassive){var actives=chart.actives[start][lhs];for(var i in actives){var active=actives[i],rules=clone(active.rules),text=active.text;text[edge.lhs]=words.slice(start,end).join(" "),"object"==typeof edge.out&&isEmpty(edge.out)?rules[edge.lhs]=text[edge.lhs]:rules[edge.lhs]=clone(edge.out),addToChart("COMBINE",active.start,end,active.lhs,active.rest,active.out,rules,text)}}else if(next.constructor==_srgs__WEBPACK_IMPORTED_MODULE_0__.e){var ref=next.content,passives=chart.passives[end][ref];for(var i in passives){var passive=passives[i],rules=clone(edge.rules),text=edge.text;rules[passive.lhs]=clone(passive.out),text[passive.lhs]=passive.text,addToChart("COMBINE",start,passive.end,lhs,edge.rest,edge.out,rules,text)}ref in grammar&&leftCornerFilter(ref,end)&&addToChart("PREDICT",end,end,ref,grammar[ref],{},{},{})}else next==words[end]&&addToChart("SCAN",start,end+1,lhs,edge.rest,edge.out,edge.rules,edge.text)}return chart}},31:function(t,e,n){},42:function(t,e,n){"use strict";n.r(e);var i=n(28),r=n(11),o=(n(31),n(7),n(25)),s=n(12),a=n(21),c=n(2),u=n(46),l=n(45),h=n(9);function g(t){for(var e=function(t){if("undefined"!=typeof DOMParser)return(new DOMParser).parseFromString(t,"application/xml");if("undefined"!=typeof ActiveXObject){var e=XML.newDocument();return e.loadXML(t),e}var n="data:text/xml;charset=utf-8,"+encodeURIComponent(t),i=new XMLHttpRequest;return i.open("GET",n,!1),i.send(null),i.responseXML}(t),n=e.getElementsByTagName("grammar")[0].getAttribute("root"),i=new h.a(n),r=e.getElementsByTagName("rule"),o=0;o<r.length;o++){var s=r[o];i[s.getAttribute("id")]=d(s)}return i}function d(t){for(var e=t.childNodes,n=[],i=0;i<e.length;i++)if(3==e[i].nodeType){var r=e[i].textContent.trim();""!=r&&n.push(r.split(/ +/))}else if(1==e[i].nodeType)if("token"==e[i].nodeName)n.push(h.h(e[i].textContent));else if("ruleref"==e[i].nodeName){var o=e[i].getAttribute("uri");n.push(h.d(o.slice(1)))}else if("tag"==e[i].nodeName)n.push(h.h(e[i].textContent.trim()));else if("one-of"==e[i].nodeName)n.push(h.b(d(e[i])));else if("item"==e[i].nodeName){var s=e[i].getAttribute("repeat");if(s){var a=s.split("-"),c=parseInt(a[0]),u=parseInt(a[1]);u=u||1/0,n.push(h.f(c,u,d(e[i])))}else n.push(d(e[i]))}else console.log(e[i]);return n}var f=n(22);const p='\n<grammar root="top_level">\n\t<rule id="top_level">\n\t\t<item repeat="0-1">\n\t\t\t<one-of>\n\t\t\t\t<item>please </item>\n\t\t\t\t<item>can you </item>\n\t\t\t\t<item>can you please </item>\n\t\t\t\t<item>would you </item>\n\t\t\t</one-of>\n\t\t</item>\n\t\t<ruleref uri="#select"/>\n\t\t<tag>out.action=rules.select.action; out.object=rules.select.object;</tag>\n\t</rule>\n\t\n\t<rule id="select">\n\t\t<one-of>\n\t\t\t<item>\n\t\t\t\t<ruleref uri="#actionA"/>\n\t\t\t\t<tag>out.action=rules.actionA</tag>\n\t\t\t\tthe\n\t\t\t\t<ruleref uri="#objectA"/>\n\t\t\t\t<tag>out.object=rules.objectA</tag>\n\t\t\t</item>\n\t\t\t<item>\n\t\t\t\t<ruleref uri="#actionB"/>\n\t\t\t\t<tag>out.action=rules.actionB</tag>\n\t\t\t\tthe\n\t\t\t\t<ruleref uri="#objectB"/>\n\t\t\t\t<tag>out.object=rules.objectB</tag>\n\t\t\t</item>\n\t\t</one-of>\n\t</rule>\n\t\n\t<rule id="object">\n\t</rule>\n\t\n\t<rule id="actionA">\n\t\t<one-of>\n\t\t\t<item> turn on <tag>out="on";</tag></item>\n\t\t\t<item> switch on <tag>out="on";</tag></item>\n\t\t\t<item> flick on <tag>out="on";</tag></item>\n\t\t\t<item> turn off <tag>out="off";</tag></item>\n\t\t\t<item> switch off <tag>out="off";</tag></item>\n\t\t\t<item> turn out <tag>out="off";</tag></item>\n\t\t</one-of>\n\t</rule>\n\t\n\t<rule id="actionB">\n\t\t<one-of>\n\t\t\t<item> open <tag>out="open";</tag></item>\n\t\t\t<item> open up <tag>out="open";</tag></item>\n\t\t\t<item> close <tag>out="close";</tag></item>\n\t\t\t<item> close down <tag>out="close";</tag></item>\n\t\t</one-of>\n\t</rule>\n\t\n\t<rule id="objectA"> \n\t\t<one-of> \n\t\t\t<item> light <tag>out="light";</tag></item> \n\t\t\t<item> lights <tag>out="light";</tag></item> \n\t\t\t<item> heat <tag>out="heat";</tag></item> \n\t\t\t<item> heating <tag>out="heat";</tag></item> \n\t\t\t<item> A C <tag> out = \'ac\'; </tag></item> \n\t\t\t<item> air conditioning <tag>out="ac";</tag></item> \n\t</one-of> \n\t</rule>\n\t\n\t<rule id="objectB"> \n\t\t<one-of> \n\t\t\t<item> window <tag>out="window";</tag></item>\n\t\t\t<item> door <tag>out="door";</tag></item> \n\t</one-of> \n\t</rule>\n\t\n</grammar>\n',m=g(p),v=Object(f.a)("please open the window".split(/\s+/),m).resultsForRule(m.$root)[0];console.log(v);Object(c.q)((t=>({type:"SPEAK",value:"Repainting to ".concat(t.recResult)})));function _(t){return Object(c.q)((e=>({type:"SPEAK",value:t})))}function E(t){const e=g(p);return Object(f.a)(t.toLowerCase().split(/\s+/),e).resultsForRule(e.$root)[0]}const b={initial:"init",id:"init",states:{init:{on:{CLICK:"ask"}},ask:Object(r.a)({id:"ask",on:{RECOGNISED:[{target:"select_task",actions:Object(c.b)((t=>({queryResp:"undefined"===typeof E(t.recResult)?{action:"",object:""}:E(t.recResult)})))}]}},(x="What can I do for you?",{initial:"prompt",states:{prompt:{entry:_(x),on:{ENDSPEECH:"ask"}},ask:{entry:Object(c.q)("LISTEN")}}})),select_task:{id:"select_task",initial:"select",states:{select:{always:[{cond:t=>"light"===t.queryResp.object,target:"#init.light"},{cond:t=>"heat"===t.queryResp.object,target:"#init.heat"},{cond:t=>"window"===t.queryResp.object,target:"#init.window"},{cond:t=>"door"===t.queryResp.object,target:"#init.door"},{target:"#init.invalid_prompt"}]}}},light:{id:"light",initial:"select",states:{select:{always:[{cond:t=>"on"===t.queryResp.action,target:"turn_light_on"},{cond:t=>"off"===t.queryResp.action,target:"turn_light_off"},{target:"#init.invalid_prompt"}]},turn_light_on:{always:{target:"#init",actions:_("Turning the light on")}},turn_light_off:{always:{target:"#init",actions:_("Turning the light off")}}}},heat:{id:"heat",initial:"select",states:{select:{always:[{cond:t=>"on"===t.queryResp.action,target:"turn_heat_on"},{cond:t=>"off"===t.queryResp.action,target:"turn_heat_off"},{target:"#init.invalid_prompt"}]},turn_heat_on:{always:{target:"#init",actions:_("Turning the heating on")}},turn_heat_off:{always:{target:"#init",actions:_("Turning the heating off")}}}},window:{id:"window",initial:"select",states:{select:{always:[{cond:t=>"open"===t.queryResp.action,target:"open_window"},{cond:t=>"close"===t.queryResp.action,target:"close_window"},{target:"#init.invalid_prompt"}]},open_window:{always:{target:"#init",actions:_("Opening the window")}},close_window:{always:{target:"#init",actions:_("Closing the window")}}}},door:{id:"door",initial:"select",states:{select:{always:[{cond:t=>"open"===t.queryResp.action,target:"open_door"},{cond:t=>"close"===t.queryResp.action,target:"close_door"},{target:"#init.invalid_prompt"}]},open_door:{always:{target:"#init",actions:_("Opening the door")}},close_door:{always:{target:"#init",actions:_("Closing the door")}}}},invalid_prompt:{entry:_("Sorry, that isn't a valid answer"),on:{ENDSPEECH:"#init"}}}};var x,y=n(24),w=n(14);const O=s.a.send,j=s.a.cancel;Object(l.a)({url:"https://statecharts.io/inspect",iframe:!1});const C=Object(a.a)({id:"root",type:"parallel",states:{dm:Object(r.a)({},b),asrtts:{initial:"idle",states:{idle:{on:{LISTEN:"recognising",SPEAK:{target:"speaking",actions:Object(c.b)(((t,e)=>({ttsAgenda:e.value})))}}},recognising:{initial:"progress",entry:"recStart",exit:"recStop",on:{ASRRESULT:{actions:["recLogResult",Object(c.b)(((t,e)=>({recResult:e.value.toLowerCase()})))],target:".match"},RECOGNISED:{actions:[j("maxspeech_cancel"),Object(c.b)(((t,e)=>({maxspeech_count:0})))],target:"idle"},MAXSPEECH:[{cond:t=>t.maxspeech_count<3,target:"idle",actions:Object(c.b)(((t,e)=>({maxspeech_count:t.maxspeech_count+1})))},{target:"idle"}]},states:{progress:{},match:{entry:O("RECOGNISED")}}},speaking:{entry:"ttsStart",on:{ENDSPEECH:"idle"}}}}}},{actions:{recLogResult:t=>{console.log("<< ASR: "+t.recResult)},test:()=>{console.log("test")},logIntent:t=>{console.log("<< NLU intent: "+t.nluData.intent.name)}}}),R=t=>{switch(!0){case t.state.matches({asrtts:"recognising"}):return Object(w.jsx)("button",Object(r.a)(Object(r.a)({type:"button",className:"glow-on-hover",style:{animation:"glowing 20s linear"}},t),{},{children:"Listening..."}));case t.state.matches({asrtts:"speaking"}):return Object(w.jsx)("button",Object(r.a)(Object(r.a)({type:"button",className:"glow-on-hover",style:{animation:"bordering 1s infinite"}},t),{},{children:"Speaking..."}));default:return Object(w.jsx)("button",Object(r.a)(Object(r.a)({type:"button",className:"glow-on-hover"},t),{},{children:"Click to start"}))}};function S(){const t=Object(y.useSpeechSynthesis)({onEnd:()=>{h("ENDSPEECH")}}),e=t.speak,n=t.cancel,r=(t.speaking,Object(y.useSpeechRecognition)({onResult:t=>{h({type:"ASRRESULT",value:t})}})),o=r.listen,s=(r.listening,r.stop),a=Object(u.b)(C,{devTools:!0,actions:{recStart:Object(u.a)((()=>{console.log("LETS GOOOOOO"),o({interimResults:!1,continuous:!0})})),recStop:Object(u.a)((()=>{console.log("Recognition stopped."),s()})),changeColour:Object(u.a)((t=>{console.log("Repainting..."),document.body.style.background=t.recResult})),ttsStart:Object(u.a)(((t,n)=>{console.log("Speaking..."),e({text:t.ttsAgenda})})),ttsCancel:Object(u.a)(((t,e)=>{console.log("TTS STOP..."),n()}))}}),c=Object(i.a)(a,3),l=c[0],h=c[1];c[2];return Object(w.jsx)("div",{className:"App",children:Object(w.jsx)(R,{state:l,onClick:()=>h("CLICK")})})}const A=document.getElementById("root");o.render(Object(w.jsx)(S,{}),A)},9:function(t,e,n){"use strict";function i(t){this.$root=t,this.VOID=[s([])],this.NULL=[],this.GARBAGE=[],this.$check=function(){for(var t in this)if("$root"!==t&&"$check"!==t)try{d(this[t])}catch(e){g("When checking grammar rule '"+t+"'",e)}}}function r(t){return new c(t)}function o(t){return new u(t)}function s(t){return new l(t)}function a(t,e,n){return new h(t,e,n)}function c(t){this.content=t,this._string="$"+t,this.toString=function(){return this._string}}function u(t){this.content=t,this._string="{"+t+"}",this.toString=function(){return this._string}}function l(t){this.content=t,this._string="("+t.join("|")+")",this.toString=function(){return this._string}}function h(t,e,n){this.min=t,this.max=e,this.content=n,this._string=this.content+"<"+this.min+"-"+(this.max==1/0?"":this.max)+">",this.toString=function(){return this._string}}function g(t,e){throw void 0==e?TypeError(t):TypeError(t+"; "+e.message)}function d(t){try{for(var e in t.constructor!==Array&&g("Expected Array, found "+t.constructor.name),t)t[e].constructor==Array?d(t[e]):t[e].constructor!=String&&t[e].checkExpansion()}catch(n){g("When checking sequence expansion",n)}}n.d(e,"a",(function(){return i})),n.d(e,"d",(function(){return r})),n.d(e,"h",(function(){return o})),n.d(e,"b",(function(){return s})),n.d(e,"f",(function(){return a})),n.d(e,"e",(function(){return c})),n.d(e,"i",(function(){return u})),n.d(e,"c",(function(){return l})),n.d(e,"g",(function(){return h})),c.prototype.checkExpansion=function(){this.content.constructor!==String&&g("When checking Ref content; Expected String, found "+this.content.constructor.name)},u.prototype.checkExpansion=function(){this.content.constructor!==String&&g("When checking Tag content; Expected String, found "+this.content.constructor.name)},l.prototype.checkExpansion=function(){try{for(var t in this.content.constructor!==Array&&g("Expected Array, found "+this.content.constructor.name),this.content)d(this.content[t])}catch(e){g("When checking OneOf content",e)}},h.prototype.checkExpansion=function(){try{this.min.constructor===Number&&this.max.constructor===Number||g("Expected min/max to be Number, found "+this.min.constructor.name+"/"+this.max.constructor.name),0<=this.min&&this.min<=this.max||g("Expected 0 <= min <= max, found "+this.min+"/"+this.max),d(this.content)}catch(t){g("When checking Repeat content",t)}}}},[[42,1,2]]]);
//# sourceMappingURL=main.db13f806.chunk.js.map