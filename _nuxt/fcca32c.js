(window.webpackJsonp=window.webpackJsonp||[]).push([[4,18,19],{345:function(e,t,n){var content=n(360);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,n(50).default)("24304fc0",content,!0,{sourceMap:!1})},355:function(e,t,n){var content=n(370);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,n(50).default)("7a4f4db3",content,!0,{sourceMap:!1})},359:function(e,t,n){"use strict";n(345)},360:function(e,t,n){var r=n(49)(!1);r.push([e.i,".stack[data-v-f0aca56a]{display:flex;padding-left:10px;transform:translateY(-2px)}",""]),e.exports=r},366:function(e,t,n){"use strict";n.r(t);n(1),n(16),n(45),n(2);var r=n(626),d=n(364),o={scaleLinear:r.a,rollup:d.c,sum:d.d},l={name:"App",props:{year:String,data:[]},components:{},data:function(){return{values:null,total:0,scale:null,maxRange:150,currentWidth:0,colorMap:{"มหานครปลอดภัย":"#538DFF","มหานครสีเขียวสะดวกสบาย":"#6ADC7B","มหานครสำหรับทุกคน":"#FF583E","มหานครกระชับ":"#FF9FDF","มหานครประชาธิปไตย":"#FF8310","มหานครแห่งเศรษฐกิจและเรียนรู้":"#C3DA14","การบริหารจัดการเมืองมหานคร":"#D170FF"}}},watch:{maxRange:function(){this.scale=o.scaleLinear().domain([0,this.total]).range([0,this.maxRange])}},mounted:function(){var e=this;this.$nextTick((function(){window.addEventListener("resize",this.getWindowWidth),this.getWindowWidth()}));var t=this.data.filter((function(t){return t.year==e.year}));this.values=o.rollup(t,(function(e){return o.sum(e,(function(e){return e.received}))}),(function(e){return e.strategy})),this.values.forEach((function(element){e.total+=element})),this.scale=o.scaleLinear().domain([0,this.total]).range([0,this.maxRange])},methods:{getWindowWidth:function(e){this.currentWidth=document.documentElement.clientWidth,this.currentWidth<400?this.maxRange=55:this.currentWidth<600?this.maxRange=80:this.maxRange=150}},beforeDestroy:function(){window.removeEventListener("resize",this.getWindowWidth)}},c=(n(359),n(67)),component=Object(c.a)(l,(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"stack"},e._l(e.values,(function(t){return n("div",{key:t[0]},[n("div",{style:{"background-color":e.colorMap[t[0]],height:"16px",width:e.scale(t[1])+"px"}})])})),0)}),[],!1,null,"f0aca56a",null);t.default=component.exports},369:function(e,t,n){"use strict";n(355)},370:function(e,t,n){var r=n(49)(!1);r.push([e.i,'.svg-class[data-v-6b7f0c1a]{position:relative;z-index:1;margin-top:-18px}.wrapper[data-v-6b7f0c1a]{display:flex;justify-content:center;padding-left:20px}@media (max-width:799px){.wrapper[data-v-6b7f0c1a]{flex-wrap:wrap;padding-left:0}}text[data-v-6b7f0c1a]{font-family:"KondolarThai",serif;pointer-events:none}.checkbox-legend-small[data-v-6b7f0c1a]{display:none}@media (max-width:799px){.checkbox-legend-small[data-v-6b7f0c1a]{display:flex;flex-direction:column;max-width:799px;margin:.5em 1.6em 1.5em;background:#fff;border:1px solid rgba(0,0,0,.5);justify-content:center;flex-wrap:nowrap;align-items:center;padding:5px 10px}}.checkbox-legend[data-v-6b7f0c1a]{display:flex;align-self:flex-start;margin:0 1.4em 1.4em;padding:20px;background:#eee;font-family:"KondolarThai",serif;font-size:14px;max-width:270px;flex-flow:column;align-items:top}@media (max-width:799px){.checkbox-legend[data-v-6b7f0c1a]{max-width:799px;width:800px;flex-wrap:nowrap;align-items:center;margin:1.4em 1.6em;padding:10px}}.checkbox-area[data-v-6b7f0c1a]{display:flex;flex-wrap:wrap;line-height:0;justify-content:left}@media (max-width:799px){.checkbox-area[data-v-6b7f0c1a]{max-width:599px;flex-wrap:nowrap;justify-content:center}}.symbol-explain[data-v-6b7f0c1a]{background-color:#fff;max-width:-webkit-max-content;max-width:-moz-max-content;max-width:max-content;padding:0 5px 0 10px;text-align:left}@media (max-width:799px){.symbol-explain[data-v-6b7f0c1a]{display:none}}.bold-baht[data-v-6b7f0c1a]{font-size:21px;font-weight:700}@media (max-width:799px){.bold-baht[data-v-6b7f0c1a]{font-size:16px}}.regular-baht[data-v-6b7f0c1a]{font-size:16px;padding:0 1.5px}@media (max-width:799px){.regular-baht[data-v-6b7f0c1a]{font-size:12px}}.grandparent text[data-v-6b7f0c1a],.text-explain[data-v-6b7f0c1a]{font-family:"KondolarThai",serif;font-size:14px}@media (max-width:600px){.grandparent text[data-v-6b7f0c1a],.text-explain[data-v-6b7f0c1a]{font-size:12px}}.navigate[data-v-6b7f0c1a]{display:flex;width:100%;position:relative;z-index:5;padding:10px;cursor:pointer;background:#eee;justify-content:space-between}@media (max-width:799px){.navigate[data-v-6b7f0c1a]{display:none}}.navigate-small[data-v-6b7f0c1a]{display:none}@media (max-width:799px){.navigate-small[data-v-6b7f0c1a]{display:flex;width:100%;position:relative;z-index:5;padding:10px;cursor:pointer;background:#eee;justify-content:space-between;border-left:20px solid #fff;border-right:20px solid #fff}}.navigate[data-v-6b7f0c1a]:hover{background-color:#e2e2e2}.navigate-text[data-v-6b7f0c1a],.navigate-text p[data-v-6b7f0c1a]{display:flex;flex-direction:column;font-family:"KondolarThai",serif;font-size:14px;text-align:left;padding-right:3px;margin:0}@media (max-width:600px){.navigate-text[data-v-6b7f0c1a],.navigate-text p[data-v-6b7f0c1a]{font-size:12px}}.legendTitle[data-v-6b7f0c1a]{font-weight:700;text-align:left;font-family:"KondolarThai",serif;font-size:16px;padding:10px 0 10px 5px}@media (max-width:600px){.legendTitle[data-v-6b7f0c1a]{font-size:14px}}ul[data-v-6b7f0c1a]{list-style-type:none;margin:0;padding:10px 10px 10px 0}.m-chckbox--container[data-v-6b7f0c1a]{line-height:0;margin:3px}@media (max-width:600px){.m-chckbox--container[data-v-6b7f0c1a]{margin:1px}}[data-v-6b7f0c1a] .m-chckbox--label{position:relative;padding-left:0;cursor:pointer;flex-shrink:10!important}[data-v-6b7f0c1a] .m-chckbox--group>div>svg{fill:#000;stroke:#000;stroke-width:1}.label[data-v-6b7f0c1a]{display:flex;line-height:1;transform:translateY(6px);text-align:left;padding-left:10px}rect[data-v-6b7f0c1a]{fill:none;stroke:#fff}.grandparent rect[data-v-6b7f0c1a],rect.parent[data-v-6b7f0c1a]{stroke-width:3px}.grandparent rect[data-v-6b7f0c1a]{fill:#eee}.grandparent:hover rect[data-v-6b7f0c1a]{fill:#e5e5e5}.children rect.parent[data-v-6b7f0c1a],.grandparent rect[data-v-6b7f0c1a]{cursor:pointer}.children rect.parent[data-v-6b7f0c1a]{fill:#bbb;fill-opacity:.98}.children:hover rect.child[data-v-6b7f0c1a]{fill:#000;fill-opacity:1}.children text[data-v-6b7f0c1a]{font-size:.8em}.list-enter-active[data-v-6b7f0c1a],.list-leave-active[data-v-6b7f0c1a]{transition:all .5s}.list-enter[data-v-6b7f0c1a],.list-leave-to[data-v-6b7f0c1a]{opacity:0}',""]),e.exports=r},400:function(e,t,n){"use strict";n.r(t);var r=n(20),d=(n(56),n(13),n(1),n(9),n(18),n(78),n(79),n(14),n(2),n(126),n(80),n(626)),o=n(408);const l=Symbol("implicit");function c(e){var t=0,n=e.children,i=n&&n.length;if(i)for(;--i>=0;)t+=n[i].value;else t=1;e.value=t}function h(data,e){data instanceof Map?(data=[void 0,data],void 0===e&&(e=v)):void 0===e&&(e=f);for(var t,n,r,i,d,o=new m(data),l=[o];t=l.pop();)if((r=e(t.data))&&(d=(r=Array.from(r)).length))for(t.children=r,i=d-1;i>=0;--i)l.push(n=r[i]=new m(r[i])),n.parent=t,n.depth=t.depth+1;return o.eachBefore(y)}function f(e){return e.children}function v(e){return Array.isArray(e)?e[1]:null}function x(e){void 0!==e.data.value&&(e.value=e.data.value),e.data=e.data.data}function y(e){var t=0;do{e.height=t}while((e=e.parent)&&e.height<++t)}function m(data){this.data=data,this.depth=this.height=0,this.parent=null}m.prototype=h.prototype={constructor:m,count:function(){return this.eachAfter(c)},each:function(e,t){let n=-1;for(const r of this)e.call(t,r,++n,this);return this},eachAfter:function(e,t){for(var n,i,r,d=this,o=[d],l=[],c=-1;d=o.pop();)if(l.push(d),n=d.children)for(i=0,r=n.length;i<r;++i)o.push(n[i]);for(;d=l.pop();)e.call(t,d,++c,this);return this},eachBefore:function(e,t){for(var n,i,r=this,d=[r],o=-1;r=d.pop();)if(e.call(t,r,++o,this),n=r.children)for(i=n.length-1;i>=0;--i)d.push(n[i]);return this},find:function(e,t){let n=-1;for(const r of this)if(e.call(t,r,++n,this))return r},sum:function(e){return this.eachAfter((function(t){for(var n=+e(t.data)||0,r=t.children,i=r&&r.length;--i>=0;)n+=r[i].value;t.value=n}))},sort:function(e){return this.eachBefore((function(t){t.children&&t.children.sort(e)}))},path:function(e){for(var t=this,n=function(a,b){if(a===b)return a;var e=a.ancestors(),t=b.ancestors(),n=null;a=e.pop(),b=t.pop();for(;a===b;)n=a,a=e.pop(),b=t.pop();return n}(t,e),r=[t];t!==n;)t=t.parent,r.push(t);for(var d=r.length;e!==n;)r.splice(d,0,e),e=e.parent;return r},ancestors:function(){for(var e=this,t=[e];e=e.parent;)t.push(e);return t},descendants:function(){return Array.from(this)},leaves:function(){var e=[];return this.eachBefore((function(t){t.children||e.push(t)})),e},links:function(){var e=this,t=[];return e.each((function(n){n!==e&&t.push({source:n.parent,target:n})})),t},copy:function(){return h(this).eachBefore(x)},[Symbol.iterator]:function*(){var e,t,i,n,r=this,d=[r];do{for(e=d.reverse(),d=[];r=e.pop();)if(yield r,t=r.children)for(i=0,n=t.length;i<n;++i)d.push(t[i])}while(d.length)}};var w=function(e){e.x0=Math.round(e.x0),e.y0=Math.round(e.y0),e.x1=Math.round(e.x1),e.y1=Math.round(e.y1)},k=function(e,t,n,r,d){for(var o,l=e.children,i=-1,c=l.length,h=e.value&&(r-t)/e.value;++i<c;)(o=l[i]).y0=n,o.y1=d,o.x0=t,o.x1=t+=o.value*h},_=function(e,t,n,r,d){for(var o,l=e.children,i=-1,c=l.length,h=e.value&&(d-n)/e.value;++i<c;)(o=l[i]).x0=t,o.x1=r,o.y0=n,o.y1=n+=o.value*h};var S=function e(t){function n(e,n,r,d,o){!function(e,t,n,r,d,o){for(var l,c,h,f,v,x,y,m,w,S,F,W=[],C=t.children,N=0,z=0,D=C.length,L=t.value;N<D;){h=d-n,f=o-r;do{v=C[z++].value}while(!v&&z<D);for(x=y=v,F=v*v*(S=Math.max(f/h,h/f)/(L*e)),w=Math.max(y/F,F/x);z<D;++z){if(v+=c=C[z].value,c<x&&(x=c),c>y&&(y=c),F=v*v*S,(m=Math.max(y/F,F/x))>w){v-=c;break}w=m}W.push(l={value:v,dice:h<f,children:C.slice(N,z)}),l.dice?k(l,n,r,d,L?r+=f*v/L:o):_(l,n,r,L?n+=h*v/L:d,o),L-=v,N=z}}(t,e,n,r,d,o)}return n.ratio=function(t){return e((t=+t)>1?t:1)},n}((1+Math.sqrt(5))/2);function F(e){if("function"!=typeof e)throw new Error;return e}function W(){return 0}var C=function(e){return function(){return e}},N=n(364),z={scaleLinear:d.a,scaleOrdinal:function e(){var t=new Map,n=[],r=[],d=l;function c(e){var o=e+"",i=t.get(o);if(!i){if(d!==l)return d;t.set(o,i=n.push(e))}return r[(i-1)%r.length]}return c.domain=function(e){if(!arguments.length)return n.slice();n=[],t=new Map;for(const r of e){const e=r+"";t.has(e)||t.set(e,n.push(r))}return c},c.range=function(e){return arguments.length?(r=Array.from(e),c):r.slice()},c.unknown=function(e){return arguments.length?(d=e,c):d},c.copy=function(){return e(n,r).unknown(d)},o.a.apply(c,arguments),c},hierarchy:h,treemap:function(){var e=S,t=!1,n=1,r=1,d=[0],o=W,l=W,c=W,h=W,f=W;function v(e){return e.x0=e.y0=0,e.x1=n,e.y1=r,e.eachBefore(x),d=[0],t&&e.eachBefore(w),e}function x(t){var p=d[t.depth],n=t.x0+p,r=t.y0+p,v=t.x1-p,x=t.y1-p;v<n&&(n=v=(n+v)/2),x<r&&(r=x=(r+x)/2),t.x0=n,t.y0=r,t.x1=v,t.y1=x,t.children&&(p=d[t.depth+1]=o(t)/2,n+=f(t)-p,r+=l(t)-p,(v-=c(t)-p)<n&&(n=v=(n+v)/2),(x-=h(t)-p)<r&&(r=x=(r+x)/2),e(t,n,r,v,x))}return v.round=function(e){return arguments.length?(t=!!e,v):t},v.size=function(e){return arguments.length?(n=+e[0],r=+e[1],v):[n,r]},v.tile=function(t){return arguments.length?(e=F(t),v):e},v.padding=function(e){return arguments.length?v.paddingInner(e).paddingOuter(e):v.paddingInner()},v.paddingInner=function(e){return arguments.length?(o="function"==typeof e?e:C(+e),v):o},v.paddingOuter=function(e){return arguments.length?v.paddingTop(e).paddingRight(e).paddingBottom(e).paddingLeft(e):v.paddingTop()},v.paddingTop=function(e){return arguments.length?(l="function"==typeof e?e:C(+e),v):l},v.paddingRight=function(e){return arguments.length?(c="function"==typeof e?e:C(+e),v):c},v.paddingBottom=function(e){return arguments.length?(h="function"==typeof e?e:C(+e),v):h},v.paddingLeft=function(e){return arguments.length?(f="function"==typeof e?e:C(+e),v):f},v},group:N.b,rollup:N.c,sum:N.d,csv:N.a},D={name:"Treemap",data:function(){return{url:"https://raw.githubusercontent.com/electinth/participatory-budgeting/main/assets/data/budget.csv",rawData:null,nestedData:null,outerSum:null,innerSum:null,windowWidth:0,windowHeight:0,maxWidth:1250,breakWidth:799,labelWidth:345,rootNode:{},margin:{top:20,right:0,bottom:0,left:0},selected:null,selectedYear:[],selectedStrategy:[],colorMap:{"มหานครปลอดภัย":"#538DFF","มหานครสีเขียวสะดวกสบาย":"#6ADC7B","มหานครสำหรับทุกคน":"#FF583E","มหานครกระชับ":"#FF9FDF","มหานครประชาธิปไตย":"#FF8310","มหานครแห่งเศรษฐกิจและเรียนรู้":"#C3DA14","การบริหารจัดการเมืองมหานคร":"#D170FF"}}},watch:{selectedNode:function(e,t){},selectedYearCompute:function(){0===this.selectedYear.length&&(this.selectedYear=["2561","2562","2563","2564"]),this.updateData()},selectedStrategyCompute:function(){0===this.selectedStrategy.length&&(this.selectedStrategy=["มหานครปลอดภัย","มหานครสีเขียวสะดวกสบาย","มหานครสำหรับทุกคน","มหานครกระชับ","มหานครประชาธิปไตย","มหานครแห่งเศรษฐกิจและเรียนรู้","การบริหารจัดการเมืองมหานคร"]),this.updateData()}},mounted:function(){var e=this;return Object(r.a)(regeneratorRuntime.mark((function t(){var n,r,d;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return(n=e).$nextTick((function(){window.addEventListener("resize",this.getWindowWidth),window.addEventListener("resize",this.getWindowHeight),n.getWindowWidth(),n.getWindowHeight()})),t.next=4,z.csv(n.url);case 4:r=t.sent,d=r.filter((function(e){return""!=e.year})).map((function(data){return{strategy:data.strategy,type:data.type,year:data.year,received:parseFloat(data["งบประมาณข้อบัญญัติ(ล้านบาท)"].replace(",","")),expected:parseFloat(data["งบประมาณตามแผน(ล้านบาท)"].replace(",",""))}})),e.rawData=d,n.updateData();case 8:case"end":return t.stop()}}),t)})))()},computed:{parentId:function(){return void 0===this.selectedNode.parent||null===this.selectedNode.parent?this.selectedNode.id:this.selectedNode.parent.id},x:function(){return z.scaleLinear().domain([0,this.windowWidth]).range([0,this.windowWidth])},y:function(){return z.scaleLinear().domain([0,this.windowHeight-this.margin.top-this.margin.bottom]).range([0,this.windowHeight-this.margin.top-this.margin.bottom])},treemap:function(){return z.treemap().size([this.windowWidth,this.windowHeight]).round(!1).paddingInner(0)},selectedNode:function(){var e=null;if(this.selected){var t=this.getNodeById(this.rootNode,this.selected,this);e=t._children?t:t.parent}else e=this.rootNode;return this.x.domain([e.x0,e.x0+(e.x1-e.x0)]),this.y.domain([e.y0,e.y0+(e.y1-e.y0)]),e},selectedYearCompute:function(){return this.selectedYear},selectedStrategyCompute:function(){return this.selectedStrategy}},methods:{updateData:function(){var e=this,t=this;if(this.rawData){var n=this.rawData.filter((function(t){var n=t.year,r=t.strategy;return e.selectedYear.includes(n)&&e.selectedStrategy.includes(r)})),r=[],d=[],o=[],l=this.selectedYear.join(".");n.forEach((function(e){r.includes(e.strategy)?d.includes(e.type)?o.find((function(element,t){element.strategy===e.strategy&&element.type===e.type&&(o[t]={strategy:e.strategy,type:e.type,expected:o[t].expected+=e.expected,received:o[t].received+=e.received,year:l})})):(d.push(e.type),o.push({strategy:e.strategy,type:e.type,expected:e.expected,received:e.received,year:l})):(r.push(e.strategy),d.includes(e.type)||(d.push(e.type),o.push({strategy:e.strategy,type:e.type,expected:e.expected,received:e.received,year:l})))}));var c=z.group(o,(function(data){return data.strategy}),(function(data){return data.type}));t.outerSum=z.rollup(o,(function(e){return z.sum(e,(function(e){return e.expected}))}),(function(e){return e.strategy})),t.innerSum=z.rollup(o,(function(e){return z.sum(e,(function(e){return e.expected}))}),(function(e){return e.type})),t.nestedData=c,t.initialize(),t.accumulate(t.rootNode,t),t.treemap(t.rootNode)}},initialize:function(){var e=this;e.nestedData&&(e.rootNode=z.hierarchy(e.nestedData).eachBefore((function(e){e.id=(e.parent?e.parent.id+"/ ":"")+(e.data[0]||e.data.type||"ทั้งหมด")})).sum((function(e){return e.received})).sort((function(a,b){return b.height-a.height||b.value-a.value})),e.rootNode.x=e.rootNode.y=0,e.rootNode.x1=e.windowWidth,e.rootNode.y1=e.windowHeight,e.rootNode.depth=0)},accumulate:function(e,t){return e._children=e.children,e._children?(e.value=e._children.reduce((function(p,e){return p+t.accumulate(e,t)}),0),e.value):e.value},getNodeById:function(e,t,n){if(e.id===t)return e;if(e._children)for(var i=0;i<e._children.length;i++){var r=n.getNodeById(e._children[i],t,n);if(r)return r}},selectNode:function(e){this.selected=e.target.id},navigateBack:function(){this.selected=this.selectedNode.parent?this.selectedNode.parent.id:this.selected},getWindowWidth:function(e){var t=document.documentElement.clientWidth;t>=this.maxWidth?this.windowWidth=this.maxWidth-this.labelWidth:t>this.breakWidth&&t<this.maxWidth?this.windowWidth=t-this.labelWidth:this.windowWidth=t-38},getWindowHeight:function(e){var t=document.documentElement.clientWidth,n=document.documentElement.clientHeight;n<=780&&t>=this.breakWidth?this.windowHeight=550:(this.breakWidth,this.windowHeight=n-.3*n)}},beforeDestroy:function(){window.removeEventListener("resize",this.getWindowWidth),window.removeEventListener("resize",this.getWindowHeight)}},L=(n(369),n(67)),component=Object(L.a)(D,(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"treemap"},[e._m(0),e._v(" "),n("div",{staticClass:"navigate-small",attrs:{id:e.parentId},on:{click:e.navigateBack}},[n("div",{staticClass:"navigate-text"},[n("p",[e._v(e._s(e.selectedNode.id))]),e._v(" "),n("div",[e._v("\n        "+e._s("ทั้งหมด"===e.selectedNode.id?"":"[")+"\n        "),n("strong",[e._v("\n          "+e._s("ทั้งหมด"===e.selectedNode.id?"":"฿"+(e.selectedNode.value?e.selectedNode.value.toLocaleString():""))+"\n        ")]),e._v("\n        "+e._s("ทั้งหมด"===e.selectedNode.id?"":"/ ฿"+(e.selectedNode.id?2==e.selectedNode.id.split("/ ").length?e.outerSum.get(e.selectedNode.id.split("/ ")[1]).toLocaleString():e.innerSum.get(e.selectedNode.id.split("/ ")[2]).toLocaleString():"")+" ]")+"\n      ")])]),e._v(" "),n("div",[n("svg",{attrs:{width:"17",height:"17",viewBox:"0 0 17 17",fill:"none",xmlns:"http://www.w3.org/2000/svg"}},[n("circle",{attrs:{cx:"8.49142",cy:"8.49142",r:"8.49142",fill:"black"}}),e._v(" "),n("path",{attrs:{d:"M10.6143 5.00018L5.30713 8.71518L10.6143 12.4302",stroke:"white","stroke-width":"1.5","stroke-linecap":"round","stroke-linejoin":"round"}})])])]),e._v(" "),n("div",{staticClass:"wrapper"},[n("div",[n("div",{staticClass:"navigate",attrs:{id:e.parentId},on:{click:e.navigateBack}},[n("div",{staticClass:"navigate-text"},[n("p",[e._v(e._s(e.selectedNode.id))]),e._v(" "),n("div",[e._v("\n            "+e._s("ทั้งหมด"===e.selectedNode.id?"":"[")+"\n            "),n("strong",[e._v("\n              "+e._s("ทั้งหมด"===e.selectedNode.id?"":"฿"+(e.selectedNode.value?e.selectedNode.value.toLocaleString():""))+"\n            ")]),e._v("\n            "+e._s("ทั้งหมด"===e.selectedNode.id?"":"/ ฿"+(e.selectedNode.id?2==e.selectedNode.id.split("/ ").length?e.outerSum.get(e.selectedNode.id.split("/ ")[1]).toLocaleString():e.innerSum.get(e.selectedNode.id.split("/ ")[2]).toLocaleString():"")+" ]")+"\n          ")])]),e._v(" "),n("div",[n("svg",{attrs:{width:"17",height:"17",viewBox:"0 0 17 17",fill:"none",xmlns:"http://www.w3.org/2000/svg"}},[n("circle",{attrs:{cx:"8.49142",cy:"8.49142",r:"8.49142",fill:"black"}}),e._v(" "),n("path",{attrs:{d:"M10.6143 5.00018L5.30713 8.71518L10.6143 12.4302",stroke:"white","stroke-width":"1.5","stroke-linecap":"round","stroke-linejoin":"round"}})])])]),e._v(" "),n("svg",{staticClass:"svg-class",staticStyle:{"margin-left":"0px"},attrs:{height:e.windowHeight,width:e.windowWidth}},[n("g",{staticStyle:{"shape-rendering":"crispEdges"},attrs:{transform:"translate(0,20)"}},[n("transition-group",{staticClass:"depth",attrs:{name:"list",tag:"g"}},e._l(e.selectedNode._children,(function(t){return n("g",{key:"c_"+t.id,staticClass:"children"},[e._l(t._children,(function(t){return n("rect",{key:t.id,staticClass:"child",attrs:{id:t.id,height:e.y(t.y1)-e.y(t.y0),width:e.x(t.x1)-e.x(t.x0),x:e.x(t.x0),y:e.y(t.y0)}})})),e._v(" "),n("rect",{key:t.id,staticClass:"parent",style:{fill:e.colorMap[t.id.split("/ ")[1]]},attrs:{id:t.id,x:e.x(t.x0),y:e.y(t.y0),width:e.x(t.x1-t.x0+t.parent.x0),height:e.y(t.y1-t.y0+t.parent.y0)},on:{click:e.selectNode}}),e._v(" "),n("text",{key:"t_"+t.id+(t.data[0]||t.data.type),style:{"fill-opacity":e.windowWidth>=e.breakWidth?e.y(t.y1-t.y0+t.parent.y0)>=70&&e.x(t.x1-t.x0+t.parent.x0)>=82&&2!==t.id.split(" > ").length?"1":"0":e.y(t.y1-t.y0+t.parent.y0)>=73&&e.x(t.x1-t.x0+t.parent.x0)>=50&&2!==t.id.split(" > ").length?"1":"0","font-size":e.windowWidth>=e.breakWidth?"14px":"12px"},attrs:{dy:e.y(t.y1)-e.y(t.y0)-70,x:e.x(t.x0)+10,y:e.y(t.y0)+6}},[e._v("\n                "+e._s(t.data[0]||t.data.type)+"\n              ")]),e._v(" "),n("text",{key:"t_"+t.id+t.value,style:{"fill-opacity":e.windowWidth>=e.breakWidth?e.y(t.y1-t.y0+t.parent.y0)>=70&&e.x(t.x1-t.x0+t.parent.x0)>=82?"1":"0":e.y(t.y1-t.y0+t.parent.y0)>=62&&e.x(t.x1-t.x0+t.parent.x0)>=50?"1":"0","font-size":e.windowWidth>=e.breakWidth?"21px":"16px","font-weight":"bold"},attrs:{dy:e.y(t.y1)-e.y(t.y0)-45,x:e.x(t.x0)+10,y:e.y(t.y0)+6}},[e._v("\n                ฿"+e._s(t.value.toLocaleString())+"\n              ")]),e._v(" "),n("text",{key:"t_"+t.id,style:{"fill-opacity":e.windowWidth>=e.breakWidth?e.y(t.y1-t.y0+t.parent.y0)>=70&&e.x(t.x1-t.x0+t.parent.x0)>=82?"1":"0":e.y(t.y1-t.y0+t.parent.y0)>=62&&e.x(t.x1-t.x0+t.parent.x0)>=50?"1":"0","font-size":e.windowWidth>=e.breakWidth?"16px":"12px"},attrs:{dy:e.y(t.y1)-e.y(t.y0)-25,x:e.x(t.x0)+10,y:e.y(t.y0)+6}},[e._v("\n                ฿"+e._s(e.outerSum.get(t.data[0])?e.outerSum.get(t.data[0]).toLocaleString():e.innerSum.get(t.data.type)?e.innerSum.get(t.data.type).toLocaleString():e.innerSum.get(t.data[0])?e.innerSum.get(t.data[0]).toLocaleString():"")+"\n              ")])],2)})),0)],1)])]),e._v(" "),n("client-only",[n("div",{staticClass:"checkbox-legend text-explain"},[n("div",{staticClass:"symbol-explain"},[n("ul",[n("li",[n("span",{staticClass:"bold-baht"},[e._v("฿")]),e._v(" | งบที่หน่วยงานขอได้ (ล้านบาท)\n            ")]),e._v(" "),n("li",[n("span",{staticClass:"regular-baht"},[e._v("฿")]),e._v(" | งบที่กรุงเทพตั้งไว้ในแผนฯ\n            ")])])]),e._v(" "),n("div",{staticClass:"checkbox-area"},[n("div",[n("ul",[n("div",{staticClass:"legendTitle"},[e._v("เลือกปี")]),e._v(" "),n("li",[n("Checkbox",{attrs:{value:"2561",color:"#FFFFFF",size:18,checked:""},model:{value:e.selectedYear,callback:function(t){e.selectedYear=t},expression:"selectedYear"}},[n("div",{staticClass:"label"},[e._v("\n                    2561\n                    "),n("div",{staticStyle:{"padding-left":"1.5px"}},[e.rawData?n("StackedBar",{attrs:{year:"2561",data:e.rawData}}):e._e()],1)])])],1),e._v(" "),n("li",[n("Checkbox",{attrs:{value:"2562",color:"#FFFFFF",size:18,checked:""},model:{value:e.selectedYear,callback:function(t){e.selectedYear=t},expression:"selectedYear"}},[n("div",{staticClass:"label"},[e._v("\n                    2562\n                    "),e.rawData?n("StackedBar",{attrs:{year:"2562",data:e.rawData}}):e._e()],1)])],1),e._v(" "),n("li",[n("Checkbox",{attrs:{value:"2563",color:"#FFFFFF",size:18,checked:""},model:{value:e.selectedYear,callback:function(t){e.selectedYear=t},expression:"selectedYear"}},[n("div",{staticClass:"label"},[e._v("\n                    2563\n                    "),e.rawData?n("StackedBar",{attrs:{year:"2563",data:e.rawData}}):e._e()],1)])],1),e._v(" "),n("li",[n("Checkbox",{attrs:{value:"2564",color:"#FFFFFF",size:18,checked:""},model:{value:e.selectedYear,callback:function(t){e.selectedYear=t},expression:"selectedYear"}},[n("div",{staticClass:"label"},[e._v("\n                    2564\n                    "),e.rawData?n("StackedBar",{attrs:{year:"2564",data:e.rawData}}):e._e()],1)])],1)])]),e._v(" "),n("ul",[n("div",{staticClass:"legendTitle"},[e._v("เลือกด้าน")]),e._v(" "),n("li",[n("Checkbox",{attrs:{value:"มหานครปลอดภัย",color:"#538DFF",size:18,checked:""},model:{value:e.selectedStrategy,callback:function(t){e.selectedStrategy=t},expression:"selectedStrategy"}},[n("div",{staticClass:"label"},[e._v("มหานครปลอดภัย")])])],1),e._v(" "),n("li",[n("Checkbox",{attrs:{value:"มหานครสีเขียวสะดวกสบาย",color:"#6ADC7B",size:18,checked:""},model:{value:e.selectedStrategy,callback:function(t){e.selectedStrategy=t},expression:"selectedStrategy"}},[n("div",{staticClass:"label"},[e._v("มหานครสีเขียวสะดวกสบาย")])])],1),e._v(" "),n("li",[n("Checkbox",{attrs:{value:"มหานครสำหรับทุกคน",color:"#FF583E",size:18,checked:""},model:{value:e.selectedStrategy,callback:function(t){e.selectedStrategy=t},expression:"selectedStrategy"}},[n("div",{staticClass:"label"},[e._v("มหานครสำหรับทุกคน")])])],1),e._v(" "),n("li",[n("Checkbox",{attrs:{value:"มหานครกระชับ",color:"#FF9FDF",size:18,checked:""},model:{value:e.selectedStrategy,callback:function(t){e.selectedStrategy=t},expression:"selectedStrategy"}},[n("div",{staticClass:"label"},[e._v("มหานครกระชับ")])])],1),e._v(" "),n("li",[n("Checkbox",{attrs:{value:"มหานครประชาธิปไตย",color:"#FF8310",size:18,checked:""},model:{value:e.selectedStrategy,callback:function(t){e.selectedStrategy=t},expression:"selectedStrategy"}},[n("div",{staticClass:"label"},[e._v("มหานครประชาธิปไตย")])])],1),e._v(" "),n("li",[n("Checkbox",{attrs:{value:"มหานครแห่งเศรษฐกิจและเรียนรู้",color:"#C3DA14",size:18,checked:""},model:{value:e.selectedStrategy,callback:function(t){e.selectedStrategy=t},expression:"selectedStrategy"}},[n("div",{staticClass:"label"},[e._v("มหานครแห่งเศรษฐกิจและเรียนรู้")])])],1),e._v(" "),n("li",[n("Checkbox",{attrs:{value:"การบริหารจัดการเมืองมหานคร",color:"#D170FF",size:18,checked:""},model:{value:e.selectedStrategy,callback:function(t){e.selectedStrategy=t},expression:"selectedStrategy"}},[n("div",{staticClass:"label"},[e._v("การบริหารจัดการเมืองมหานคร")])])],1)])])])])],1)])}),[function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"checkbox-legend-small text-explain"},[n("div",[n("span",{staticClass:"bold-baht"},[e._v("฿")]),e._v(" | งบที่หน่วยงานขอได้\n      "),n("span",{staticClass:"regular-baht"},[e._v("฿")]),e._v(" | งบที่กรุงเทพตั้งไว้ในแผนฯ\n    ")]),e._v(" "),n("div",[e._v("\n      (หน่วยล้านบาท)\n    ")])])}],!1,null,"6b7f0c1a",null);t.default=component.exports;installComponents(component,{StackedBar:n(366).default})}}]);