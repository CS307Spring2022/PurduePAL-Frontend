"use strict";(self.webpackChunkpurduepal_fe=self.webpackChunkpurduepal_fe||[]).push([[169],{4169:function(e,t,n){n.r(t),n.d(t,{default:function(){return z}});var o=n(5861),r=n(9439),a=n(1413),i=n(5987),l=n(7757),s=n.n(l),c=n(890),u=n(3967),d=n(5193),p=n(7630),f=n(1889),h=n(3400),m=n(3767),x=n(5725),g=n(5091),Z=n(6151),j=n(9952),b=n(1286),w=n(2791),y=n(5228),v=n(3896),S=n(4554),C=n(8690),k=n(748),P=n(4010),T=n(501),N=n(5489),F=n(7621),U=n(9585),O=n(3044),I=n(2363),E=n(184),J={position:"absolute",top:"50%",left:"50%",transform:"translate(-50%, -50%)",width:400,height:"75%",bgcolor:"#000",border:"2px solid #ddd",boxShadow:24,p:4,overflowY:"scroll"},W=function(e){var t=e.name,n=e.username,r=e.showUnfollow;return(0,E.jsxs)(F.Z,{children:[(0,E.jsx)(U.Z,{avatar:(0,E.jsx)(O.Z,{"aria-label":"recipe"}),title:t}),r?(0,E.jsx)(I.Z,{children:(0,E.jsx)(Z.Z,{onClick:function(){!function(e){function t(){return(t=(0,o.Z)(s().mark((function t(){var n;return s().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n={follower:localStorage.getItem("email"),username:e},t.next=3,fetch("http://localhost:5000/unfollowUser",{method:"POST",body:JSON.stringify(n),headers:{"Content-Type":"application/json"}});case 3:window.location.reload();case 4:case"end":return t.stop()}}),t)})))).apply(this,arguments)}console.log(e),function(){t.apply(this,arguments)}()}(n)},children:"Unfollow"})}):null]})},_=function(e){var t=e.name,n=e.showUnfollow;return(0,E.jsxs)(F.Z,{children:[(0,E.jsx)(U.Z,{title:t}),n?(0,E.jsx)(I.Z,{children:(0,E.jsx)(Z.Z,{onClick:function(){!function(e){function t(){return(t=(0,o.Z)(s().mark((function t(){var n;return s().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n={email:localStorage.getItem("email"),topic:e},t.next=3,fetch("http://localhost:5000/unfollowTopic",{method:"POST",body:JSON.stringify(n),headers:{"Content-Type":"application/json"}});case 3:window.location.reload();case 4:case"end":return t.stop()}}),t)})))).apply(this,arguments)}console.log(e),function(){t.apply(this,arguments)}()}(t)},children:"Unfollow"})}):null]})};function q(e){var t=e.number,n=e.property,o=e.data,a=e.isTopic;console.log(o);var i=(0,u.Z)(),l=w.useState(!1),s=(0,r.Z)(l,2),d=s[0],p=s[1],f=(0,T.lr)(),h=(0,r.Z)(f,1)[0],g=(0,w.useState)(h.get("user")===localStorage.getItem("username")),j=(0,r.Z)(g,1)[0],b=(0,w.useContext)(P.Z),y=(0,r.Z)(b,1)[0];return(0,E.jsxs)("div",{children:[(0,E.jsx)(Z.Z,{onClick:function(){return p(!0)},disableRipple:!0,disableElevation:!0,children:(0,E.jsxs)(m.Z,{direction:"row",spacing:.5,children:[(0,E.jsx)(c.Z,{variant:"subtitle2",children:t||o.length}),(0,E.jsx)(c.Z,{variant:"subtitle2",color:"#c4c4c4",children:n})]})}),(0,E.jsx)(x.Z,{open:d,onClose:function(){return p(!1)},"aria-labelledby":"modal-modal-title","aria-describedby":"modal-modal-description",children:(0,E.jsx)(S.Z,{sx:J,children:(0,E.jsxs)(m.Z,{spacing:1,children:[(0,E.jsx)(c.Z,{id:"modal-modal-title",variant:"h4",component:"h2",color:i.palette.primary.main,children:(0,E.jsx)("strong",{children:n})}),a?o.map((function(e){return(0,E.jsx)(_,{name:e,showUnfollow:y&&j},e)})):o.map((function(e,t){return(0,E.jsx)(W,{name:e.name,username:e.username,showUnfollow:y&&j},t)}))]})})})]})}var B=["children","value","index"];function D(e){var t=e.children,n=e.value,o=e.index,r=(0,i.Z)(e,B);return(0,E.jsx)("div",(0,a.Z)((0,a.Z)({role:"tabpanel",hidden:n!==o,id:"simple-tabpanel-".concat(o),"aria-labelledby":"simple-tab-".concat(o)},r),{},{children:n===o&&(0,E.jsx)(S.Z,{sx:{p:3},children:(0,E.jsx)(c.Z,{color:"#fff",children:t})})}))}function H(e){return{id:"simple-tab-".concat(e),"aria-controls":"simple-tabpanel-".concat(e)}}function L(){var e=(0,w.useState)(0),t=(0,r.Z)(e,2),n=t[0],o=t[1];return(0,E.jsxs)(S.Z,{sx:{width:"100%"},children:[(0,E.jsx)(S.Z,{sx:{borderBottom:1,borderColor:"divider"},children:(0,E.jsxs)(y.Z,{value:n,onChange:function(e,t){o(t)},"aria-label":"basic tabs example",variant:"fullWidth",children:[(0,E.jsx)(v.Z,(0,a.Z)({label:"Posts"},H(0))),(0,E.jsx)(v.Z,(0,a.Z)({label:"Interactions"},H(1)))]})}),(0,E.jsx)(D,{value:n,index:0,children:"Posts"}),(0,E.jsx)(D,{value:n,index:1,children:"Interactions"})]})}var R={position:"absolute",top:"50%",left:"50%",transform:"translate(-50%, -50%)",width:800,bgcolor:"secondary.main",border:"2px solid #000",boxShadow:50,p:4},z=function(e){var t=e.data,n=(0,u.Z)(),a=(0,d.Z)(n.breakpoints.up("md")),i="calc(100vw - ".concat(a?"200":"75","px)"),l=(0,T.lr)(),y=(0,r.Z)(l,1)[0],v=(0,w.useState)(y.get("user")===localStorage.getItem("username")),F=(0,r.Z)(v,1)[0],U=(0,w.useContext)(P.Z),O=(0,r.Z)(U,1)[0],I=(0,w.useState)(!1),J=(0,r.Z)(I,2),W=J[0],_=J[1],B=function(){function e(){return(e=(0,o.Z)(s().mark((function e(){var t,n;return s().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=localStorage.getItem("email"),n={firstName:z,lastName:ne,bio:he,email:t},console.log(JSON.stringify(n)),e.next=5,fetch("".concat(N.H,"/updateUserInfo"),{method:"POST",body:JSON.stringify(n),headers:{"Content-Type":"application/json"}});case 5:case"end":return e.stop()}}),e)})))).apply(this,arguments)}_(!1),function(){e.apply(this,arguments)}()},D=(0,w.useState)(t.firstName),H=(0,r.Z)(D,2),z=H[0],Y=H[1],A=(0,w.useState)(!1),G=(0,r.Z)(A,2),K=G[0],M=G[1],Q=(0,w.useState)(""),V=(0,r.Z)(Q,2),X=V[0],$=V[1],ee=(0,w.useState)(t.lastName),te=(0,r.Z)(ee,2),ne=te[0],oe=te[1],re=(0,w.useState)(!1),ae=(0,r.Z)(re,2),ie=ae[0],le=ae[1],se=(0,w.useState)(""),ce=(0,r.Z)(se,2),ue=ce[0],de=ce[1],pe=(0,w.useState)(t.bio),fe=(0,r.Z)(pe,2),he=fe[0],me=fe[1],xe=(0,w.useState)(!0),ge=(0,r.Z)(xe,2),Ze=ge[0],je=ge[1],be=(0,w.useState)(""),we=(0,r.Z)(be,2),ye=we[0],ve=we[1];(0,w.useEffect)((function(){function e(){return(e=(0,o.Z)(s().mark((function e(){var t,n,o;return s().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=localStorage.getItem("email"),n=localStorage.getItem("username"),o=y.get("user"),console.log({loggedEmail:t,loggedUser:n,profileUser:o}),e.next=6,fetch("".concat(N.H,"/getUser"),{method:"POST",body:JSON.stringify({loggedEmail:t,loggedUser:n,profileUser:o}),headers:{"Content-Type":"application/json"}});case 6:case"end":return e.stop()}}),e)})))).apply(this,arguments)}!function(){e.apply(this,arguments)}()}),[y]);for(var Se=(0,p.ZP)("input")({display:"none"}),Ce=(0,w.useState)(t.followingUsers),ke=(0,r.Z)(Ce,2),Pe=ke[0],Te=ke[1],Ne=[],Fe=0;Fe<t.followingUsers.length;Fe++)Ne.push(t.followingUsers[Fe].name);var Ue=(0,w.useState)(O&&F?0:Number(t.loggedFollows)+1),Oe=(0,r.Z)(Ue,2),Ie=Oe[0],Ee=Oe[1];function Je(){return(Je=(0,o.Z)(s().mark((function e(){var n,o,r,a;return s().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(n={follower:localStorage.getItem("email"),following:t._id},console.log(n),1!==Ie){e.next=8;break}return e.next=5,fetch("http://localhost:5000/followUser",{method:"POST",body:JSON.stringify(n),headers:{"Content-Type":"application/json"}});case 5:o=e.sent,e.next=12;break;case 8:if(2!==Ie){e.next=12;break}return e.next=11,fetch("http://localhost:5000/unfollowUser",{method:"POST",body:JSON.stringify(n),headers:{"Content-Type":"application/json"}});case 11:o=e.sent;case 12:if(o.ok){e.next=15;break}return console.log(o),e.abrupt("return");case 15:return e.next=17,o.json();case 17:if(r=e.sent,console.log(r),!r.message){e.next=31;break}return e.next=22,fetch("http://localhost:5000/getFollowers",{method:"POST",body:JSON.stringify({email:t._id}),headers:{"Content-Type":"application/json"}});case 22:if((o=e.sent).ok){e.next=26;break}return console.log(o),e.abrupt("return");case 26:return e.next=28,o.json();case 28:a=e.sent,console.log("New Following:"+a),Te(a.newFollowing);case 31:case"end":return e.stop()}}),e)})))).apply(this,arguments)}return console.log(Ie),(0,w.useEffect)((function(){z.length>0&&X?($(""),M(!1)):je(!0)}),[z,X]),(0,w.useEffect)((function(){ne.length>0&&ue?(de(""),le(!1)):je(!0)}),[ne,ue]),(0,w.useEffect)((function(){he.length>0&&he.length<240?(ve(""),je(!1)):je(!0)}),[he,ye]),(0,E.jsxs)(f.ZP,{container:!0,spacing:2,children:[(0,E.jsx)(f.ZP,{width:i,justifyContent:"center",alignItems:"center",item:!0,container:!0,children:(0,E.jsxs)(f.ZP,{sm:12,mt:2,item:!0,container:!0,justifyContent:"space-around",direction:"row",spacing:4,children:[(0,E.jsx)(f.ZP,{sm:2,item:!0,children:(0,E.jsxs)("label",{htmlFor:"upload-profile-picture",children:[(0,E.jsx)(Se,{accept:"image/png",id:"upload-profile-picture",type:"file",onChange:function(e){return function(e){e.preventDefault();var t=new FormData;function n(){return(n=(0,o.Z)(s().mark((function e(){return s().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("".concat(N.H,"/addProfileImage"),{method:"POST",body:t});case 2:window.location.reload();case 3:case"end":return e.stop()}}),e)})))).apply(this,arguments)}t.append("profileImage",e.target.files[0]),t.append("email",localStorage.getItem("email")),function(){n.apply(this,arguments)}()}(e)},disabled:!(O&&F)}),(0,E.jsx)(h.Z,{color:"primary",component:"span","aria-label":"upload profile picture",disabled:!(O&&F),children:t.profilePic.length>"data:image/png;base64,".length?(0,E.jsx)("img",{src:t.profilePic,alt:"profile pic of user",width:100,height:100,style:{borderRadius:"50%"}}):(0,E.jsx)(j.Z,{sx:{fontSize:"100px"}})})]})}),(0,E.jsx)(f.ZP,{sm:7,item:!0,children:(0,E.jsxs)(m.Z,{direction:"column",children:[(0,E.jsx)(c.Z,{color:"#fff",variant:"h4",children:"".concat(z," ").concat(ne)}),(0,E.jsx)(c.Z,{color:"#ddd",variant:"subtitle1",children:"@".concat(t.username)})]})}),(0,E.jsxs)(f.ZP,{sm:2,item:!0,children:[O&&F?(0,E.jsx)(h.Z,{color:"primary",variant:"outlined",onClick:function(){return _(!0)},children:(0,E.jsx)(b.Z,{})}):(0,E.jsxs)(h.Z,{color:"primary",onClick:function(){!function(){Je.apply(this,arguments)}(),Ee(1===Ie?2:1)},children:[2===Ie?(0,E.jsx)(C.Z,{color:"primary"}):(0,E.jsx)(k.Z,{color:"primary"}),2===Ie?"Following":"Follow"]}),(0,E.jsx)(x.Z,{open:W,onClose:B,"aria-labelledby":"modal-modal-title","aria-describedby":"modal-modal-description",children:(0,E.jsxs)(S.Z,{sx:R,children:[(0,E.jsx)(c.Z,{color:"#fff",id:"modal-modal-title",variant:"h6",component:"h2",children:"Edit Profile Details"}),(0,E.jsx)(g.Z,{margin:"normal",required:!0,fullWidth:!0,id:"changeFirstName",label:"First Name",name:"changeFirstName",autoComplete:"given-name",autoFocus:!0,error:K,onChange:function(e){return Y(e.target.value)},helperText:X}),(0,E.jsx)(g.Z,{margin:"normal",required:!0,fullWidth:!0,id:"changeLastName",label:"Last Name",name:"changeLastName",autoComplete:"given-name",autoFocus:!0,error:ie,onChange:function(e){return oe(e.target.value)},helperText:ue}),(0,E.jsx)(g.Z,{margin:"normal",required:!0,fullWidth:!0,id:"Bio",label:"Bio",name:"bio",autoComplete:"given-name",autoFocus:!0,error:Ze,onChange:function(e){return me(e.target.value)},helperText:ye}),(0,E.jsx)(Z.Z,{variant:"filled",color:"success",disabled:Ze||ie||K,onClick:B,children:"Submit"})]})})]})]})}),(0,E.jsx)(f.ZP,{item:!0,ml:2.5,children:(0,E.jsx)(c.Z,{variant:"h6",color:"#fff",children:"".concat(he)})}),(0,E.jsx)(f.ZP,{item:!0,ml:2.5,sm:12,children:(0,E.jsxs)(m.Z,{direction:"row",spacing:3,children:[(0,E.jsx)(q,{property:"Followers",data:Pe,isTopic:!1}),(0,E.jsx)(q,{property:"Following",data:t.usersFollowing,isTopic:!1}),(0,E.jsx)(q,{property:"Topics",data:t.topicsFollowing,isTopic:!0})]})}),(0,E.jsx)(f.ZP,{item:!0,sm:12,children:(0,E.jsx)(L,{})})]})}}}]);
//# sourceMappingURL=169.c04f866a.chunk.js.map