(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{17:function(e,t,a){},54:function(e,t,a){e.exports=a(96)},59:function(e,t,a){},60:function(e,t,a){},84:function(e,t,a){},94:function(e,t,a){},96:function(e,t,a){"use strict";a.r(t);var n={};a.r(n),a.d(n,"loadItem",function(){return j}),a.d(n,"getItems",function(){return v}),a.d(n,"loadLogo",function(){return g}),a.d(n,"getLogo",function(){return w});var r=a(0),l=a.n(r),c=a(24),s=a.n(c),i=(a(59),a(6)),o=a(7),u=a(9),m=a(8),h=a(10),d=a(114),p=a(117),E=a(52),f=(a(60),a(21)),b=a(35),O=a.n(b),j=function(){return function(e){return O()({method:"get",url:"https://api.rss2json.com/v1/api.json?rss_url=http://www.abc.net.au/news/feed/51120/rss.xml"}).then(function(t){e(v(t.data.items))})}},v=function(e){return{type:"ITEMS",items:e}},g=function(){return function(e){return O()({method:"get",url:"https://api.rss2json.com/v1/api.json?rss_url=http://www.abc.net.au/news/feed/51120/rss.xml"}).then(function(t){e(w(t.data.feed.image))})}},w=function(e){return{type:"LOGO",logo:e}},y=function(e){function t(){return Object(i.a)(this,t),Object(u.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(h.a)(t,e),Object(o.a)(t,[{key:"componentDidMount",value:function(){this.props.loadLogo()}},{key:"render",value:function(){return l.a.createElement("div",{className:"header"},l.a.createElement("img",{src:this.props.logo,alt:"Logo"}))}}]),t}(r.Component),N=Object(f.b)(function(e){return e},n)(y),k=a(25),L=(a(84),a(116)),C=a(97),D=a(98),S=a(99),x=a(115),A=a(100),T=a(101),M=function(e){function t(e){var a;return Object(i.a)(this,t),(a=Object(u.a)(this,Object(m.a)(t).call(this,e))).toggle=a.toggle.bind(Object(k.a)(a)),a.state={isOpen:!1},a}return Object(h.a)(t,e),Object(o.a)(t,[{key:"toggle",value:function(){this.setState({isOpen:!this.state.isOpen})}},{key:"render",value:function(){return l.a.createElement("div",{className:"menu"},l.a.createElement(C.a,{color:"dark",dark:!0,expand:"md"},l.a.createElement(D.a,{href:"/"},"Home"),l.a.createElement(S.a,{onClick:this.toggle}),l.a.createElement(x.a,{isOpen:this.state.isOpen,navbar:!0},l.a.createElement(A.a,{className:"ml-auto",navbar:!0},l.a.createElement(T.a,null,l.a.createElement(L.a,{to:"/law"},"Law")),l.a.createElement(T.a,null,l.a.createElement(L.a,{to:"/business"},"Business")),l.a.createElement(T.a,null,l.a.createElement(L.a,{to:"/health"},"Health")),l.a.createElement(T.a,null,l.a.createElement(L.a,{to:"/sport"},"Sport")),l.a.createElement(T.a,null,l.a.createElement(L.a,{to:"/search"},"Search"))))))}}]),t}(r.Component),F=a(102),I=function(e){function t(){return Object(i.a)(this,t),Object(u.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(h.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){return l.a.createElement("div",null,l.a.createElement("h1",null,"Loading",l.a.createElement(F.a,{style:{width:"0.8rem",height:"0.8rem"},type:"grow"}),l.a.createElement(F.a,{style:{width:"0.8rem",height:"0.8rem"},type:"grow"}),l.a.createElement(F.a,{style:{width:"0.8rem",height:"0.8rem"},type:"grow"})))}}]),t}(r.Component),R=(a(17),a(18)),U=a.n(R),Y=(a(22),a(103)),B=a(104),H=a(105),G=a(106),J=a(107),P=a(108),W=a(109),_=a(13),$=a.n(_),q=function(e){function t(){return Object(i.a)(this,t),Object(u.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(h.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){var e=this.props,t=e.sports,a=e.className;return l.a.createElement("div",null,l.a.createElement(Y.a,{flush:!0},t.sort(function(e,t){return new Date(t.date)-new Date(e.date)}).map(function(e,t){return l.a.createElement(B.a,{tag:"a",href:e.link,key:t},l.a.createElement(H.a,{"data-aos":"fade-up","data-aos-duration":"1000"},e.enclosure.link?l.a.createElement(G.a,{top:!0,width:"100%",src:e.enclosure.link,alt:"Card image cap"}):"",l.a.createElement(J.a,{className:a},l.a.createElement(P.a,null,e.title),l.a.createElement(W.a,{className:"description"},e.description),l.a.createElement(W.a,null,l.a.createElement("small",{className:"text-muted"},$()(e.pubDate).format("L, LT")),l.a.createElement("small",{className:"text-muted"},"Author: ",e.author)))))})))}}]),t}(r.Component),z=a(110),K=a(111),Q=a(112),V=function(e){function t(){var e,a;Object(i.a)(this,t);for(var n=arguments.length,r=new Array(n),l=0;l<n;l++)r[l]=arguments[l];return(a=Object(u.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(r)))).state={sports:[]},a}return Object(h.a)(t,e),Object(o.a)(t,[{key:"componentDidMount",value:function(){var e=new Set(["Sport"]),t=this.props.items.filter(function(t){return t.categories.some(function(t){return e.has(t)})});this.setState({sports:t}),U.a.init({duration:2e3})}},{key:"render",value:function(){var e=this.state.sports;return l.a.createElement("div",null,this.props.isLoading?l.a.createElement(I,null):l.a.createElement(z.a,null,e.length?l.a.createElement(K.a,null,l.a.createElement(Q.a,{md:"8"},l.a.createElement(q,{sports:e,className:""})),l.a.createElement(Q.a,{md:"4"},l.a.createElement("h4",null,"FEATURES"),l.a.createElement(q,{sports:e,className:"featureCard"}))):l.a.createElement("h1",null,"No News Yet")))}}]),t}(r.Component),X=function(e){function t(){return Object(i.a)(this,t),Object(u.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(h.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){var e=this.props,t=e.laws,a=e.className;return l.a.createElement("div",null,l.a.createElement(Y.a,{flush:!0},t.sort(function(e,t){return new Date(t.date)-new Date(e.date)}).map(function(e,t){return l.a.createElement(B.a,{tag:"a",href:e.link,key:t},l.a.createElement(H.a,{"data-aos":"fade-up","data-aos-duration":"1000"},e.enclosure.link?l.a.createElement(G.a,{top:!0,width:"100%",src:e.enclosure.link,alt:"Card image cap"}):"",l.a.createElement(J.a,{className:a},l.a.createElement(P.a,null,e.title),l.a.createElement(W.a,{className:"description"},e.description),l.a.createElement(W.a,null,l.a.createElement("small",{className:"text-muted"},$()(e.pubDate).format("L, LT")),l.a.createElement("small",{className:"text-muted"},"Author: ",e.author)))))})))}}]),t}(r.Component),Z=function(e){function t(){var e,a;Object(i.a)(this,t);for(var n=arguments.length,r=new Array(n),l=0;l<n;l++)r[l]=arguments[l];return(a=Object(u.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(r)))).state={laws:[]},a}return Object(h.a)(t,e),Object(o.a)(t,[{key:"componentDidMount",value:function(){var e=new Set(["Law, Crime and Justice","Courts and Trials","Local Governmen","Murder and Manslaughter","Crime","Prisons and Punishment"]),t=this.props.items.filter(function(t){return t.categories.some(function(t){return e.has(t)})});this.setState({laws:t}),U.a.init({duration:2e3})}},{key:"render",value:function(){var e=this.state.laws;return l.a.createElement("div",null,this.props.isLoading?l.a.createElement(I,null):l.a.createElement(z.a,null,e.length?l.a.createElement(K.a,null,l.a.createElement(Q.a,{md:"8"},l.a.createElement(X,{laws:e,className:""})),l.a.createElement(Q.a,{md:"4"},l.a.createElement("h4",null,"FEATURES"),l.a.createElement(X,{laws:e,className:"featureCard"}))):l.a.createElement("h1",null,"No News Yet")))}}]),t}(r.Component),ee=function(e){function t(){return Object(i.a)(this,t),Object(u.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(h.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){var e=this.props,t=e.businesses,a=e.className;return l.a.createElement("div",null,l.a.createElement(Y.a,{flush:!0},t.sort(function(e,t){return new Date(t.date)-new Date(e.date)}).map(function(e,t){return l.a.createElement(B.a,{tag:"a",href:e.link,key:t},l.a.createElement(H.a,{"data-aos":"fade-up","data-aos-duration":"1000"},e.enclosure.link?l.a.createElement(G.a,{top:!0,width:"100%",src:e.enclosure.link,alt:"Card image cap"}):"",l.a.createElement(J.a,{className:a},l.a.createElement(P.a,null,e.title),l.a.createElement(W.a,{className:"description"},e.description),l.a.createElement(W.a,null,l.a.createElement("small",{className:"text-muted"},$()(e.pubDate).format("L, LT")),l.a.createElement("small",{className:"text-muted"},"Author: ",e.author)))))})))}}]),t}(r.Component),te=function(e){function t(){var e,a;Object(i.a)(this,t);for(var n=arguments.length,r=new Array(n),l=0;l<n;l++)r[l]=arguments[l];return(a=Object(u.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(r)))).state={businesses:[]},a}return Object(h.a)(t,e),Object(o.a)(t,[{key:"componentDidMount",value:function(){var e=new Set(["Business, Economics and Finance"]),t=this.props.items.filter(function(t){return t.categories.some(function(t){return e.has(t)})});this.setState({businesses:t}),U.a.init({duration:2e3})}},{key:"render",value:function(){var e=this.state.businesses;return l.a.createElement("div",null,this.props.isLoading?l.a.createElement(I,null):l.a.createElement(z.a,null,e.length?l.a.createElement(K.a,null,l.a.createElement(Q.a,{md:"8"},l.a.createElement(ee,{businesses:e,className:"featureCard"})),l.a.createElement(Q.a,{md:"4"},l.a.createElement("h4",null,"FEATURES"),l.a.createElement(ee,{businesses:e,className:"featureCard"}))):l.a.createElement("h1",null,"No News Yet")))}}]),t}(r.Component),ae=function(e){function t(){return Object(i.a)(this,t),Object(u.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(h.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){var e=this.props,t=e.healths,a=e.className;return l.a.createElement("div",null,l.a.createElement(Y.a,{flush:!0},t.sort(function(e,t){return new Date(t.date)-new Date(e.date)}).map(function(e,t){return l.a.createElement(B.a,{tag:"a",href:e.link,key:t},l.a.createElement(H.a,{"data-aos":"fade-up","data-aos-duration":"1000"},e.enclosure.link?l.a.createElement(G.a,{top:!0,width:"100%",src:e.enclosure.link,alt:"Card image cap"}):"",l.a.createElement(J.a,{className:a},l.a.createElement(P.a,null,e.title),l.a.createElement(W.a,{className:"description"},e.description),l.a.createElement(W.a,null,l.a.createElement("small",{className:"text-muted"},$()(e.pubDate).format("L, LT")),l.a.createElement("small",{className:"text-muted"},"Author: ",e.author)))))})))}}]),t}(r.Component),ne=function(e){function t(){var e,a;Object(i.a)(this,t);for(var n=arguments.length,r=new Array(n),l=0;l<n;l++)r[l]=arguments[l];return(a=Object(u.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(r)))).state={healths:[]},a}return Object(h.a)(t,e),Object(o.a)(t,[{key:"componentDidMount",value:function(){var e=new Set(["Health","Healthcare Facilities","Death","Community and Societ"]),t=this.props.items.filter(function(t){return t.categories.some(function(t){return e.has(t)})});this.setState({healths:t}),U.a.init({duration:2e3})}},{key:"render",value:function(){var e=this.state.healths;return l.a.createElement("div",null,this.props.isLoading?l.a.createElement(I,null):l.a.createElement(z.a,null,e.length?l.a.createElement(K.a,null,l.a.createElement(Q.a,{md:"8"},l.a.createElement(ae,{healths:e,className:""})),l.a.createElement(Q.a,{md:"4"},l.a.createElement("h4",null,"FEATURES"),l.a.createElement(ae,{healths:e,className:"featureCard"}))):l.a.createElement("h1",null,"No News Yet")))}}]),t}(r.Component),re=a(27),le=(a(94),a(113)),ce=function(e){function t(){var e,a;Object(i.a)(this,t);for(var n=arguments.length,r=new Array(n),l=0;l<n;l++)r[l]=arguments[l];return(a=Object(u.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(r)))).state={search:""},a}return Object(h.a)(t,e),Object(o.a)(t,[{key:"updateSearch",value:function(e){this.setState(Object(re.a)({},e.target.name,e.target.value))}},{key:"render",value:function(){var e=this.state.search,t=this.props,a=t.isLoading,n=t.items.filter(function(t){return-1!==t.title.toLowerCase().indexOf(e.toLowerCase())||-1!==t.description.toLowerCase().indexOf(e.toLowerCase())||-1!==t.author.toLowerCase().indexOf(e.toLowerCase())||-1!==$()(t.pubDate).format("L, LT").toLowerCase().indexOf(e.toLowerCase())});return l.a.createElement("div",{className:"search"},l.a.createElement(z.a,null,l.a.createElement(le.a,{type:"text",name:"search",placeholder:"Search for News",value:e,onChange:this.updateSearch.bind(this)}),a?l.a.createElement(I,null):l.a.createElement(Y.a,{flush:!0},n.sort(function(e,t){return new Date(t.date)-new Date(e.date)}).map(function(e,t){return l.a.createElement(B.a,{key:t},l.a.createElement(H.a,null,l.a.createElement(J.a,null,l.a.createElement(P.a,null,e.title),l.a.createElement(W.a,{className:"description"},e.description),l.a.createElement(W.a,null,l.a.createElement("small",{className:"text-muted"},$()(e.pubDate).format("L, LT")),l.a.createElement("small",{className:"text-muted"},"Author: ",e.author)))))}))))}}]),t}(r.Component),se=function(e){function t(){return Object(i.a)(this,t),Object(u.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(h.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){var e=this.props,t=e.items,a=e.className;return l.a.createElement(Y.a,{flush:!0},t.sort(function(e,t){return new Date(t.date)-new Date(e.date)}).map(function(e,t){return l.a.createElement(B.a,{tag:"a",href:e.link,key:t},l.a.createElement(H.a,{"data-aos":"fade-up","data-aos-duration":"1000"},e.enclosure.link?l.a.createElement(G.a,{top:!0,width:"100%",src:e.enclosure.link,alt:"Card image cap"}):"",l.a.createElement(J.a,{className:a},l.a.createElement(P.a,null,e.title),l.a.createElement(W.a,{className:"description"},e.description),l.a.createElement(W.a,null,l.a.createElement("small",{className:"text-muted"},$()(e.pubDate).format("L, LT")),l.a.createElement("small",{className:"text-muted"},"Author: ",e.author)))))}))}}]),t}(r.Component),ie=function(e){function t(){return Object(i.a)(this,t),Object(u.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(h.a)(t,e),Object(o.a)(t,[{key:"componentDidMount",value:function(){U.a.init({duration:2e3})}},{key:"render",value:function(){var e=this.props,t=e.isLoading,a=e.items;return l.a.createElement("div",null,t?l.a.createElement(I,null):l.a.createElement(z.a,null,a.length?l.a.createElement(K.a,null,l.a.createElement(Q.a,{md:"8"},l.a.createElement(se,{items:a,className:""})),l.a.createElement(Q.a,{md:"4"},l.a.createElement("h4",null,"FEATURES"),l.a.createElement(se,{items:a,className:"featureCard"}))):l.a.createElement("h1",null,"No News Yet")))}}]),t}(r.Component),oe=function(e){function t(){return Object(i.a)(this,t),Object(u.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(h.a)(t,e),Object(o.a)(t,[{key:"componentDidMount",value:function(){this.props.loadItem()}},{key:"render",value:function(){var e=this.props,t=e.isLoading,a=e.items;return l.a.createElement("div",{className:"App"},t?l.a.createElement(I,null):l.a.createElement(d.a,null,l.a.createElement("div",null,l.a.createElement(N,null),l.a.createElement(M,null),l.a.createElement(p.a,null,l.a.createElement(E.a,{exact:!0,path:"/",render:function(){return l.a.createElement(ie,{items:a,isLoading:t})}}),l.a.createElement(E.a,{path:"/sport",render:function(){return l.a.createElement(V,{items:a,isLoading:t})}}),l.a.createElement(E.a,{path:"/law",render:function(){return l.a.createElement(Z,{items:a,isLoading:t})}}),l.a.createElement(E.a,{path:"/business",render:function(){return l.a.createElement(te,{items:a,isLoading:t})}}),l.a.createElement(E.a,{path:"/health",render:function(){return l.a.createElement(ne,{items:a,isLoading:t})}}),l.a.createElement(E.a,{path:"/search",render:function(){return l.a.createElement(ce,{items:a,isLoading:t})}})))))}}]),t}(r.Component),ue=Object(f.b)(function(e){return e},n)(oe);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));a(95);var me=a(23),he=a(51),de=a(36),pe={items:[],isLoading:!0,logo:""},Ee=Object(me.c)(function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:pe,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"ITEMS":return Object(de.a)({},e,{items:t.items,isLoading:!1});case"LOGO":return Object(de.a)({},e,{logo:t.logo});default:return e}},Object(me.a)(he.a));s.a.render(l.a.createElement(f.a,{store:Ee},l.a.createElement(ue,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[54,1,2]]]);
//# sourceMappingURL=main.3cb00394.chunk.js.map