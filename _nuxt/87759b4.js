/*! For license information please see LICENSES */
(window.webpackJsonp=window.webpackJsonp||[]).push([[13],{315:function(t,e,r){"use strict";var l=r(323);function n(t){new l(t.target).share()}t.exports={bind:function(t){(t=t||this.el).addEventListener("click",n,!1)},unbind:function(t){(t=t||this.el).removeEventListener("click",n,!1)}}},323:function(t,e){var r=function(t){this.elem=t};r.prototype={getValue:function(t){var e=this.elem.getAttribute("data-"+t);return null!=e&&e},share:function(){var t=this.getValue("sharer").toLowerCase(),s={facebook:{shareUrl:"https://www.facebook.com/sharer/sharer.php",params:{u:this.getValue("url")}},googleplus:{shareUrl:"https://plus.google.com/share",params:{url:this.getValue("url")}},linkedin:{shareUrl:"https://www.linkedin.com/shareArticle",params:{url:this.getValue("url"),mini:!0}},twitter:{shareUrl:"https://twitter.com/intent/tweet/",params:{text:this.getValue("title"),url:this.getValue("url"),hashtags:this.getValue("hashtags"),via:this.getValue("via")}},email:{shareUrl:"mailto:"+this.getValue("to"),params:{subject:this.getValue("subject"),body:this.getValue("title")+"\n"+this.getValue("url")},isLink:!0},whatsapp:{shareUrl:"whatsapp://send",params:{text:this.getValue("title")+" "+this.getValue("url")},isLink:!0},telegram:{shareUrl:"tg://msg_url",params:{text:this.getValue("title")+" "+this.getValue("url")},isLink:!0},viber:{shareUrl:"viber://forward",params:{text:this.getValue("title")+" "+this.getValue("url")},isLink:!0},line:{shareUrl:"http://line.me/R/msg/text/?"+encodeURIComponent(this.getValue("title")+" "+this.getValue("url")),isLink:!0},pinterest:{shareUrl:"https://www.pinterest.com/pin/create/button/",params:{url:this.getValue("url")}},tumblr:{shareUrl:"http://tumblr.com/widgets/share/tool",params:{canonicalUrl:this.getValue("url"),content:this.getValue("url"),posttype:"link",title:this.getValue("title"),caption:this.getValue("caption"),tags:this.getValue("tags")}},hackernews:{shareUrl:"https://news.ycombinator.com/submitlink",params:{u:this.getValue("url"),t:this.getValue("title")}},reddit:{shareUrl:"https://www.reddit.com/submit",params:{url:this.getValue("url")}},vk:{shareUrl:"http://vk.com/share.php",params:{url:this.getValue("url"),title:this.getValue("title"),description:this.getValue("caption"),image:this.getValue("image")}},xing:{shareUrl:"https://www.xing.com/app/user",params:{op:"share",url:this.getValue("url"),title:this.getValue("title")}},buffer:{shareUrl:"https://buffer.com/add",params:{url:this.getValue("url"),title:this.getValue("title"),via:this.getValue("via"),picture:this.getValue("picture")}},instapaper:{shareUrl:"http://www.instapaper.com/edit",params:{url:this.getValue("url"),title:this.getValue("title"),description:this.getValue("description")}},pocket:{shareUrl:"https://getpocket.com/save",params:{url:this.getValue("url")}},digg:{shareUrl:"http://www.digg.com/submit",params:{url:this.getValue("url")}},stumbleupon:{shareUrl:"http://www.stumbleupon.com/submit",params:{url:this.getValue("url"),title:this.getValue("title")}},flipboard:{shareUrl:"https://share.flipboard.com/bookmarklet/popout",params:{v:2,title:this.getValue("title"),url:this.getValue("url"),t:Date.now()}},weibo:{shareUrl:"http://service.weibo.com/share/share.php",params:{url:this.getValue("url"),title:this.getValue("title"),language:"zh_cn"}},renren:{shareUrl:"http://share.renren.com/share/buttonshare",params:{link:this.getValue("url")}},myspace:{shareUrl:"https://myspace.com/post",params:{u:this.getValue("url"),t:this.getValue("title"),c:this.getValue("description")}},blogger:{shareUrl:"https://www.blogger.com/blog-this.g",params:{u:this.getValue("url"),n:this.getValue("title"),t:this.getValue("description")}},baidu:{shareUrl:"http://cang.baidu.com/do/add",params:{it:this.getValue("title"),iu:this.getValue("url")}},hatenabookmark:{shareUrl:"http://b.hatena.ne.jp/entry/"+this.getValue("url")}}[t];return s&&(s.width=this.getValue("width"),s.height=this.getValue("height")),void 0!==s&&this.urlSharer(s)},urlSharer:function(t){var i,p=t.params||{},e=Object.keys(p),r=e.length>0?"?":"";for(i=0;i<e.length;i++)"?"!==r&&(r+="&"),p[e[i]]&&(r+=e[i]+"="+encodeURIComponent(p[e[i]]));if(t.shareUrl+=r,t.isLink)window.location.href=t.shareUrl;else{var l=t.width||600,n=t.height||480,h=window.innerWidth/2-l/2+window.screenX,o="scrollbars=no, width="+l+", height="+n+", top="+(window.innerHeight/2-n/2+window.screenY)+", left="+h,c=window.open(t.shareUrl,"",o);window.focus&&c.focus()}}},t.exports=r},324:function(t,e,r){var content=r(364);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(49).default)("1e56445f",content,!0,{sourceMap:!1})},359:function(t,e,r){t.exports=r.p+"img/intro_pic.734a2fa.png"},360:function(t,e){t.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB4AAAAeCAYAAAA7MK6iAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAFhSURBVHgBvZeNcYMwDIVfch2AEbxBs0EzAhsknQQ2SDoBdIN2AtoJmkyANwidgEpgeoRAkAj43X1cfiw9CYwxK8gUEBsiJF4I435jFcSJOBNfxAdmECePiAtRCsldjMFEhUrDvgJ2UOrwgGGXSGqazGjakIyZRguYNhyGTPeKJHztY1xPIP6cj8SFXVNJUJsd+jWWgwsO2gGRwjTHsCTFx9qAhu4CEbp4aY6q6ycXaCDXpcfYQK5qFVzTYasIssQvbguxDqmqSZZBdooyQULp6f7hjjeYT0Y6jo0D4eDgwf9vxpZKkk6SdEKOkjsu4F8FG1v414mNv+FfZzaeZauiVMbGvF/yeZ0t8dlMrjf40zsf1u7LEX66tqhvv39jNn3F8ooxcBdx5+VCxBhRuoBpCqHiGU2PUGoP3c6kb6cRYqIM6u41BTQ70LtPqxXk4uq3xDPqZ3j7pc2iXnp5FRQtSH8BeGGDPdgVhgAAAABJRU5ErkJggg=="},361:function(t,e){t.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB4AAAAeCAYAAAA7MK6iAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAGESURBVHgBrVfRdYMwDLx0gmxQb9BsUDYoG8AGHQFvEDZINmg3SDsB6QRJJ0g3aKUHpMCzsAS+9+4H7DvLsoTZQIctcUfMic9E1z1j/BDPxC/iB/EdCcDiFfFG/FXy0s1xWIjcaBhaQAEj9isMp6y0poeEpj0PMdPKIHaDLRV7ybRUGHlihv8T3YOfvaLN65xGPjV1M5N6wy10KCNaI50K8sncwQ43Y+6HA6VBDsvhED4D96hzLDyJCnhBO+OXNdJH24MjC0XNnjghnNtUCOk3DwgfnivS4TvwzLFxqEy0paPBo6SvqrcVkCpGbHsF1iODHBgayM1jbdSS9olz/ClMcphp7ApUkLse31bE7ej5BntNx77nLzxIKvLptheKBfD7RqF1h48MHuUHk0bfQXtVGs3dwn6/Gs7VXpUuCOxabjRmwwzxj7+qRGuDiHWHPCI4GgU1PEIJn9C0hhElbPkLpSLHQji00VsWoLocbqAHrz4jPqFthcOftiva1ss/bOfu2Sz+AFOAryloMcFpAAAAAElFTkSuQmCC"},362:function(t,e){t.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB4AAAAeCAYAAAA7MK6iAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAGnSURBVHgBtVftVYNAEJxYASXQgXQgViAdkA5MB9AB6SB0oB2gFaAVQAexA90Nd8rDu709Eua9+ZHkdme/biE76JAQM2JBfCCm5jvGF/GD+El8I77iBmDnFfFM/FZyMDYpVqKIFHQFUCISzRWCS1Za0dMNRS1PIdFqA1HLxie631DUsliKppiGYa1Dtu0UPnhYEyhK3Coc7fG/cj2xJr44bOr5YVekvfntKAgf4MfB4/c368LjtF9kMTgcSEjgL30uZbTsR4q/Mtq+Sujgr9QxdKARsskgoxf8XqrpW4snTCVJsA7Sur20ST36EcgQuIJ3gjGLNliHQnMo9ARqEZ/5EPB55ozHgJMO08NeiwrhZzG/OIgLwva6hA7B3mJ2nXLlYV5/SUA0VGLLJxhnrj6zk85El0PGM/RvK8PcsPYcKOHvFwdcQF5ALtZsvJs5GeAvJQ8DD9hoPmcIby4XRuIjFgNdIC7yNSx9EYUm/BrWCKDdQLSFEvUNRY+IxB7XvYfx9VLtbBdSTNnHBHA2NuJ+30EPjj4n3mO6SvM/bSPxHdMfNnv1RPwAb9jubusjOMUAAAAASUVORK5CYII="},363:function(t,e,r){"use strict";r(324)},364:function(t,e,r){var l=r(48)(!1);l.push([t.i,".bg-main[data-v-558b9247]{background:#e8e4d8}.black-box[data-v-558b9247]{background:rgba(0,0,0,.86);color:#fff;padding:42px 86px;width:650px;border-radius:10px;margin:0 auto}",""]),t.exports=l},462:function(t,e,r){"use strict";r.r(e);var l=r(315),n={name:"App",components:{},directives:{sharer:r.n(l).a},data:function(){return{currStep:null,isShow:!0,intro_pic:r(359),icon_fb:r(360),icon_line:r(361),icon_twitter:r(362)}},methods:{}},h=(r(363),r(64)),component=Object(h.a)(n,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",[r("div",{staticClass:"min-h-screen"},[t._m(0),t._v(" "),r("div",{staticClass:"h-100vh bg-main"},[r("div",{staticClass:"h-100vh d-flex justify-content-center"},[r("img",{staticClass:"pu-logo",attrs:{src:t.intro_pic,width:""}})])]),t._v(" "),r("div",{staticClass:"h-100vh bg-main d-flex justify-content-center flex-column"},[t._m(1),t._v(" "),r("div",{staticClass:"d-flex justify-content-center mt-5 align-items-center"},[r("p",{staticClass:"btn-text-1 text mb-0 mr-2"},[t._v("Share")]),t._v(" "),r("img",{directives:[{name:"sharer",rawName:"v-sharer"}],staticClass:"mx-1",attrs:{src:t.icon_fb,width:"","data-sharer":"facebook","data-url":"https://electinth.github.io/participatory-budgeting/"}}),t._v(" "),r("img",{directives:[{name:"sharer",rawName:"v-sharer"}],staticClass:"mx-1",attrs:{src:t.icon_line,width:"","data-sharer":"line","data-url":"https://electinth.github.io/participatory-budgeting/"}}),t._v(" "),r("img",{directives:[{name:"sharer",rawName:"v-sharer"}],staticClass:"mx-1",attrs:{src:t.icon_twitter,width:"","data-sharer":"twitter","data-url":"https://electinth.github.io/participatory-budgeting/"}})])])])])}),[function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"position-absolute w-100 logo-box p-2 p-sm-4"},[e("a",{attrs:{href:"https://punchup.world/project/",target:"_blank"}})])},function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"black-box text-center"},[r("p",{staticClass:"text-1 m-0"},[t._v("\n          ทุกวันนี้เมืองที่เราใช้ชีวิต\n          ยังมีหลายอย่างไม่ได้เป็นแบบที่เราวาดฝันไว้ใช่ไหม? "),r("br"),r("br"),t._v("\n\n          เราเองในฐานะประชาชนผู้เสียภาษีทางตรงและทางอ้อม\n          ก็ควรได้ร่วมออกแบบการใช้งบประมาณของเมือง\n          เพื่อสร้างเมืองในแบบที่เราต้องการได้\n        ")]),t._v(" "),r("p",{staticClass:"header-3 mt-4 green"},[t._v("\n          ถ้างั้นขอชวนมาลองเริ่มต้นที่เมืองหลวง อย่างกรุงเทพมหานครกันก่อนเลย!!\n        ")]),t._v(" "),r("p",{staticClass:"text-4 mt-5 text-uppercase"},[t._v("\n          โปรเจกต์นี้เป็นเพียงจุดเริ่มต้นที่ตั้งใจให้ทุกคน\n          ได้ทดลองมีส่วนร่วมกับงบประมาณ"),r("br"),t._v("\n          เพื่อจะผลักดันสังคมให้ดีขึ้นได้ (Good Society)"),r("br"),t._v("\n          โดยเริ่มจากกรุงเทพมหานครเพื่อเป็นต้นแบบส่งต่อไปยังจังหวัดอื่นๆ\n        ")])])}],!1,null,"558b9247",null);e.default=component.exports}}]);