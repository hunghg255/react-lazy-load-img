(this["webpackJsonplazy-load-img"]=this["webpackJsonplazy-load-img"]||[]).push([[0],[,,,,,,,,function(e,t){e.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAqIAAAGAAQMAAABMQ5IQAAAAA1BMVEX///+nxBvIAAAANklEQVR42u3BAQEAAACCoP6vbojAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAIC8A4EAAAFVQt90AAAAAElFTkSuQmCC"},,,,function(e,t,n){e.exports=n(21)},,,,,function(e,t,n){},,function(e,t,n){},function(e,t,n){},function(e,t,n){"use strict";n.r(t);var a=n(0),o=n.n(a),i=n(4),r=n.n(i),c=(n(17),n(2)),l=n.n(c),A=n(5),s=n(9),u=(n(19),n(6)),d=n(7),m=n(1),h=n(11),p=n(10),g=(n(20),n(8)),f=n.n(g),v=function(e){Object(h.a)(n,e);var t=Object(p.a)(n);function n(e){var a;return Object(u.a)(this,n),(a=t.call(this,e)).state={loaded:!1},a.handleScrollPage=a.handleScrollPage.bind(Object(m.a)(a)),a}return Object(d.a)(n,[{key:"componentDidMount",value:function(){this.handleScrollPage(),window.addEventListener("scroll",this.handleScrollPage)}},{key:"componentWillUnmount",value:function(){window.removeEventListener("scroll",this.handleScrollPage)}},{key:"handleScrollPage",value:function(){var e=this;if(!this.state.loaded&&function(e){var t=e.getBoundingClientRect();return t.top<=0&&t.bottom>=0||t.bottom>=(window.innerHeight||document.documentElement.clientHeight)&&t.top<=(window.innerHeight||document.documentElement.clientHeight)||t.top>=0&&t.bottom<=(window.innerHeight||document.documentElement.clientHeight)}(this.imgEle)){var t=new Image;t.src=this.props.src,t.onload=function(){var n=t.width/t.height;e.imgEle.setAttribute("src",e.props.src),e.props.keepRatio&&e.imgEle.setAttribute("height","".concat(e.props.width/n)),e.imgEle.classList.add("opacity"),e.setState({loaded:!0})}}}},{key:"render",value:function(){var e=this,t=this.props.width||"100%",n=this.props.height||"100%";return o.a.createElement("img",{src:f.a,width:t,height:n,ref:function(t){return e.imgEle=t},className:"lazy-image",alt:this.props.alt})}}]),n}(a.Component);var E=function(){var e=Object(a.useState)([]),t=Object(s.a)(e,2),n=t[0],i=t[1];return Object(a.useEffect)((function(){(function(){var e=Object(A.a)(l.a.mark((function e(){var t;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("https://picsum.photos/v2/list").then((function(e){return e.json()}));case 2:t=e.sent,i(t);case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}})()()}),[]),o.a.createElement("div",{className:"App"},o.a.createElement("div",{className:"scroll"},o.a.createElement("h1",null,"Lazyload image")),o.a.createElement("div",{className:"img"},n.map((function(e,t){return o.a.createElement("div",{key:t,className:"box"},o.a.createElement(v,{src:e.download_url,alt:e.author}))}))))};r.a.render(o.a.createElement(o.a.StrictMode,null,o.a.createElement(E,null)),document.getElementById("root"))}],[[12,1,2]]]);
//# sourceMappingURL=main.1d1415eb.chunk.js.map