"use strict";(self.webpackChunkpurduepal_fe=self.webpackChunkpurduepal_fe||[]).push([[342],{9342:function(e,t,n){n.r(t),n.d(t,{default:function(){return k}});var r=n(5861),o=n(9439),a=n(7757),i=n.n(a),s=n(3967),c=n(3767),l=n(890),u=n(829),d=n(7621),p=n(9585),m=n(2169),h=n(9504),f=n(2363),x=n(3044),g=n(501),j=n(184),v=function(e){var t=e.data,n=(0,s.Z)(),r=new Intl.DateTimeFormat("en",{year:"numeric",month:"long",day:"numeric",hour:"numeric",minute:"numeric"});return(0,j.jsxs)(d.Z,{sx:{padding:"10px",width:"98vw",maxWidth:{sm:500,md:600,lg:900,xl:1200},maxHeight:"150vh",borderRadius:"15px",backgroundColor:"#121212"},children:[(0,j.jsx)(p.Z,{avatar:(0,j.jsx)(g.rU,{to:"/profile?user="+t.user.username,children:(0,j.jsx)(x.Z,{sx:{bgcolor:n.palette.primary.main},"aria-label":t.user.firstname+" "+t.user.lastName})}),action:(0,j.jsxs)(j.Fragment,{children:[(0,j.jsx)(l.Z,{variant:"body1",fontSize:15,component:"p",color:"#fff",children:t.topic}),(0,j.jsx)(l.Z,{variant:"body1",fontSize:12,component:"p",color:"#c4c4c4",children:r.format(new Date(t.timestamp))})]}),title:t.user.firstName+" "+t.user.lastName,subheader:"@".concat(t.user.username)}),t.img?(0,j.jsx)(m.Z,{component:"img",image:t.img}):null,(0,j.jsx)(h.Z,{children:(0,j.jsx)(l.Z,{variant:"body1",sx:{fontWeight:"bold",fontSize:32},color:"text.secondary",children:function(e){try{new URL(e)}catch(t){return!1}return!0}(t.content)?(0,j.jsx)("a",{href:t.content,children:t.content}):t.content})}),(0,j.jsx)(f.Z,{children:(0,j.jsx)(u.y,{up:null==t.likeCount?0:t.likeCount,down:null==t.dislikeCount?0:t.dislikeCount,uuid:t._id,initialReaction:t.reactionType,isSaved:t.isSaved})})]})},Z=n(4951),y=n(2791),b=n(6871),w=n(4010),k=function(){var e=(0,s.Z)(),t=(0,y.useContext)(w.Z),n=(0,o.Z)(t,1)[0],a=(0,g.lr)(),u=(0,o.Z)(a,1)[0],d=(0,y.useState)({}),p=(0,o.Z)(d,2),m=p[0],h=p[1],f=(0,y.useState)([]),x=(0,o.Z)(f,2),k=x[0],C=x[1];return(0,y.useEffect)((function(){function e(){return(e=(0,r.Z)(i().mark((function e(){var t,n,r;return i().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t={email:localStorage.getItem("email"),postId:u.get("postId")},e.next=3,fetch("http://localhost:5000/postThread",{method:"POST",body:JSON.stringify(t),headers:{"Content-Type":"application/json"}});case 3:if((n=e.sent).ok){e.next=8;break}return"An error oc",console.log(n),e.abrupt("return");case 8:return e.next=10,n.json();case 10:r=e.sent,console.log(r),h(r.parentPost),C(r.comments);case 14:case"end":return e.stop()}}),e)})))).apply(this,arguments)}var t=setInterval((function(){!function(){e.apply(this,arguments)}()}),650);return function(){return clearInterval(t)}}),[k.length]),n?(console.log(u.get("postId")),(0,j.jsxs)(c.Z,{width:"100vw",justifyContent:"center",alignItems:"center",spacing:2,minHeight:"100vh",overflow:"auto",mt:2,sx:{marginLeft:{xs:"0px",sm:"75px",md:"200px",lg:"200px"}},children:[0===Object.keys(m).length?null:(0,j.jsx)(v,{data:m},0),k.map((function(e,t){return(0,j.jsx)(Z.V,{data:e},t+1)})),(0,j.jsx)(l.Z,{variant:"p",sx:{fontSize:"30px"},color:"primary",children:"End of Comments!"}),(0,j.jsx)("div",{children:(0,j.jsx)("svg",{width:100,height:50,children:(0,j.jsx)("rect",{width:"100%",height:50,fill:e.palette.background.default})})})]})):(0,j.jsx)(b.Fg,{to:"/"})}}}]);
//# sourceMappingURL=342.cf88d3c6.chunk.js.map