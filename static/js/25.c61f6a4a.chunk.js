"use strict";(self.webpackChunkpurduepal_fe=self.webpackChunkpurduepal_fe||[]).push([[25],{25:function(e,r,t){t.r(r),t.d(r,{default:function(){return w}});var n=t(5861),s=t(9439),c=t(7757),o=t.n(c),a=t(7621),i=t(9585),l=t(3400),u=t(890),p=t(3967),x=t(3767),d=t(9201),f=t(184),h=(0,d.Z)((0,f.jsx)("path",{d:"M12 10.9c-.61 0-1.1.49-1.1 1.1s.49 1.1 1.1 1.1c.61 0 1.1-.49 1.1-1.1s-.49-1.1-1.1-1.1zM12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm2.19 12.19L6 18l3.81-8.19L18 6l-3.81 8.19z"}),"Explore"),m=(0,d.Z)((0,f.jsx)("path",{d:"M12 22c1.1 0 2-.9 2-2h-4c0 1.1.9 2 2 2zm6-6v-5c0-3.07-1.63-5.64-4.5-6.32V4c0-.83-.67-1.5-1.5-1.5s-1.5.67-1.5 1.5v.68C7.64 5.36 6 7.92 6 11v5l-2 2v1h16v-1l-2-2zm-2 1H8v-6c0-2.48 1.51-4.5 4-4.5s4 2.02 4 4.5v6z"}),"NotificationsOutlined"),v=t(6871),j=t(2791),g=t(4010),Z=function(e){var r=e.data;return(0,f.jsxs)(a.Z,{sx:{padding:"10px",width:"80vw",maxWidth:{sm:400,md:500,lg:600,xl:600},maxHeight:"150vh",borderRadius:"15px",backgroundColor:"#121212"},children:[(0,f.jsx)(i.Z,{title:r._id.replace(/"/g,"")}),(0,f.jsxs)(l.Z,{href:"/purduepal-fe/topicFeed?topic="+r.topicName,children:[(0,f.jsx)(h,{color:"primary"}),(0,f.jsx)(u.Z,{color:"primary",sx:{marginLeft:1},children:"Explore"})]}),(0,f.jsxs)(l.Z,{children:[(0,f.jsx)(m,{color:"primary"}),(0,f.jsx)(u.Z,{color:"primary",sx:{marginLeft:1},children:"Follow"})]})]})},w=function(){var e=(0,p.Z)(),r=(0,j.useContext)(g.Z),t=(0,s.Z)(r,1)[0],c=(0,j.useState)([]),a=(0,s.Z)(c,2),i=a[0],l=a[1];return(0,j.useEffect)((function(){function e(){return(e=(0,n.Z)(o().mark((function e(){var r,t;return o().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("http://localhost:5000/topics");case 2:if((r=e.sent).ok){e.next=7;break}return"An error oc",window.alert("An error oc"),e.abrupt("return");case 7:return e.next=9,r.json();case 9:t=e.sent,l(t),console.log(t);case 12:case"end":return e.stop()}}),e)})))).apply(this,arguments)}var r=setInterval((function(){!function(){e.apply(this,arguments)}()}),650);return function(){return clearInterval(r)}}),[i.length]),t?(0,f.jsxs)(x.Z,{width:"100vw",justifyContent:"center",alignItems:"center",spacing:2,minHeight:"100vh",overflow:"auto",mt:2,sx:{marginLeft:{xs:"0px",sm:"75px",md:"200px",lg:"200px"}},children:[(0,f.jsx)(u.Z,{sx:{fontSize:50},color:e.palette.primary.main,children:"Explore Topics"}),i&&i.map((function(e,r){return(0,f.jsx)(Z,{data:e},r)}))]}):(0,f.jsx)(v.Fg,{to:"/"})}}}]);
//# sourceMappingURL=25.c61f6a4a.chunk.js.map