"use strict";(self.webpackChunkpurduepal_fe=self.webpackChunkpurduepal_fe||[]).push([[169],{5489:function(e,t,n){n.d(t,{H:function(){return r}});var r="http://localhost:5000"},4169:function(e,t,n){n.r(t),n.d(t,{default:function(){return H}});var r=n(5861),o=n(9439),a=n(1413),i=n(5987),l=n(7757),s=n.n(l),c=n(890),d=n(3967),u=n(5193),h=n(1889),p=n(3400),m=n(3767),f=n(5725),x=n(5091),Z=n(6151),g=n(9952),j=n(1286),b=n(2791),v=n(5228),y=n(3896),w=n(4554),S=n(8690),C=n(748),k=n(4010),N=n(501),P=n(5489),T=n(7621),F=n(9585),O=n(3044),I=n(184),U={position:"absolute",top:"50%",left:"50%",transform:"translate(-50%, -50%)",width:400,height:"75%",bgcolor:"#000",border:"2px solid #ddd",boxShadow:24,p:4,overflowY:"scroll"},E=function(e){var t=e.name;e.bio;return(0,I.jsx)(T.Z,{children:(0,I.jsx)(F.Z,{avatar:(0,I.jsx)(O.Z,{"aria-label":"recipe"}),title:t})})},J=function(e){var t=e.name;return(0,I.jsx)(T.Z,{children:(0,I.jsx)(F.Z,{title:t})})};function W(e){var t=e.number,n=e.property,r=e.data,a=e.isTopic,i=(0,d.Z)(),l=b.useState(!1),s=(0,o.Z)(l,2),u=s[0],h=s[1];return(0,I.jsxs)("div",{children:[(0,I.jsx)(Z.Z,{onClick:function(){return h(!0)},disableRipple:!0,disableElevation:!0,children:(0,I.jsxs)(m.Z,{direction:"row",spacing:.5,children:[(0,I.jsx)(c.Z,{variant:"subtitle2",children:t||r.length}),(0,I.jsx)(c.Z,{variant:"subtitle2",color:"#c4c4c4",children:n})]})}),(0,I.jsx)(f.Z,{open:u,onClose:function(){return h(!1)},"aria-labelledby":"modal-modal-title","aria-describedby":"modal-modal-description",children:(0,I.jsx)(w.Z,{sx:U,children:(0,I.jsxs)(m.Z,{spacing:1,children:[(0,I.jsx)(c.Z,{id:"modal-modal-title",variant:"h4",component:"h2",color:i.palette.primary.main,children:(0,I.jsx)("strong",{children:n})}),a?r.map((function(e){return(0,I.jsx)(J,{name:e},e)})):r.map((function(e,t){return(0,I.jsx)(E,{name:e.name},t)}))]})})})]})}var _=["children","value","index"];function q(e){var t=e.children,n=e.value,r=e.index,o=(0,i.Z)(e,_);return(0,I.jsx)("div",(0,a.Z)((0,a.Z)({role:"tabpanel",hidden:n!==r,id:"simple-tabpanel-".concat(r),"aria-labelledby":"simple-tab-".concat(r)},o),{},{children:n===r&&(0,I.jsx)(w.Z,{sx:{p:3},children:(0,I.jsx)(c.Z,{color:"#fff",children:t})})}))}function B(e){return{id:"simple-tab-".concat(e),"aria-controls":"simple-tabpanel-".concat(e)}}function L(){var e=(0,b.useState)(0),t=(0,o.Z)(e,2),n=t[0],r=t[1];return(0,I.jsxs)(w.Z,{sx:{width:"100%"},children:[(0,I.jsx)(w.Z,{sx:{borderBottom:1,borderColor:"divider"},children:(0,I.jsxs)(v.Z,{value:n,onChange:function(e,t){r(t)},"aria-label":"basic tabs example",variant:"fullWidth",children:[(0,I.jsx)(y.Z,(0,a.Z)({label:"Posts"},B(0))),(0,I.jsx)(y.Z,(0,a.Z)({label:"Interactions"},B(1)))]})}),(0,I.jsx)(q,{value:n,index:0,children:"Posts"}),(0,I.jsx)(q,{value:n,index:1,children:"Interactions"})]})}var A={position:"absolute",top:"50%",left:"50%",transform:"translate(-50%, -50%)",width:800,bgcolor:"secondary.main",border:"2px solid #000",boxShadow:50,p:4},H=function(e){for(var t=e.data,n=(0,d.Z)(),a=(0,u.Z)(n.breakpoints.up("md")),i="calc(100vw - ".concat(a?"200":"75","px)"),l=(0,N.lr)(),v=(0,o.Z)(l,1)[0],y=(localStorage.getItem("email"),(0,b.useState)(v.get("user")===localStorage.getItem("username"))),T=(0,o.Z)(y,1)[0],F=(0,b.useContext)(k.Z),O=(0,o.Z)(F,1)[0],U=(0,b.useState)(!1),E=(0,o.Z)(U,2),J=E[0],_=E[1],q=function(){function e(){return(e=(0,r.Z)(s().mark((function e(){var t,n;return s().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=localStorage.getItem("email"),n={firstName:z,lastName:te,bio:pe,email:t},console.log(JSON.stringify(n)),e.next=5,fetch("".concat(P.H,"/updateUserInfo"),{method:"POST",body:JSON.stringify(n),headers:{"Content-Type":"application/json"}});case 5:case"end":return e.stop()}}),e)})))).apply(this,arguments)}_(!1),function(){e.apply(this,arguments)}()},B=(0,b.useState)(t.firstName),H=(0,o.Z)(B,2),z=H[0],D=H[1],R=(0,b.useState)(!1),Y=(0,o.Z)(R,2),G=Y[0],K=Y[1],M=(0,b.useState)(""),Q=(0,o.Z)(M,2),V=Q[0],X=Q[1],$=(0,b.useState)(t.lastName),ee=(0,o.Z)($,2),te=ee[0],ne=ee[1],re=(0,b.useState)(!1),oe=(0,o.Z)(re,2),ae=oe[0],ie=oe[1],le=(0,b.useState)(""),se=(0,o.Z)(le,2),ce=se[0],de=se[1],ue=(0,b.useState)(t.bio),he=(0,o.Z)(ue,2),pe=he[0],me=he[1],fe=(0,b.useState)(!1),xe=(0,o.Z)(fe,2),Ze=xe[0],ge=xe[1],je=(0,b.useState)(""),be=(0,o.Z)(je,2),ve=be[0],ye=be[1],we=(0,b.useState)(t.followingUsers),Se=(0,o.Z)(we,2),Ce=Se[0],ke=Se[1],Ne=[],Pe=0;Pe<t.followingUsers.length;Pe++)Ne.push(t.followingUsers[Pe].name);var Te=(0,b.useState)(O&&T?0:Number(t.loggedFollows)+1),Fe=(0,o.Z)(Te,2),Oe=Fe[0],Ie=Fe[1];function Ue(){return(Ue=(0,r.Z)(s().mark((function e(){var n,r,o,a;return s().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(n={follower:localStorage.getItem("email"),following:t._id},console.log(n),1!==Oe){e.next=8;break}return e.next=5,fetch("http://localhost:5000/followUser",{method:"POST",body:JSON.stringify(n),headers:{"Content-Type":"application/json"}});case 5:r=e.sent,e.next=12;break;case 8:if(2!==Oe){e.next=12;break}return e.next=11,fetch("http://localhost:5000/unfollowUser",{method:"POST",body:JSON.stringify(n),headers:{"Content-Type":"application/json"}});case 11:r=e.sent;case 12:if(r.ok){e.next=16;break}return"An error oc",console.log(r),e.abrupt("return");case 16:return e.next=18,r.json();case 18:if(o=e.sent,console.log(o),!o.message){e.next=33;break}return e.next=23,fetch("http://localhost:5000/getFollowers",{method:"POST",body:JSON.stringify({email:t._id}),headers:{"Content-Type":"application/json"}});case 23:if((r=e.sent).ok){e.next=28;break}return"An error oc",console.log(r),e.abrupt("return");case 28:return e.next=30,r.json();case 30:a=e.sent,console.log(a),ke(a.newFollowing);case 33:case"end":return e.stop()}}),e)})))).apply(this,arguments)}return console.log(Oe),(0,b.useEffect)((function(){z.length>0&&V&&(X(""),K(!1))}),[z,V]),(0,b.useEffect)((function(){te.length>0&&ce&&(de(""),ie(!1))}),[te,ce]),(0,b.useEffect)((function(){pe.length>0&&ve&&pe.length<240&&(ye(""),ge(!1))}),[pe,ve]),(0,I.jsxs)(h.ZP,{container:!0,spacing:2,children:[(0,I.jsx)(h.ZP,{width:i,justifyContent:"center",alignItems:"center",item:!0,container:!0,children:(0,I.jsxs)(h.ZP,{sm:12,mt:2,item:!0,container:!0,justifyContent:"space-around",direction:"row",spacing:4,children:[(0,I.jsx)(h.ZP,{sm:2,item:!0,children:(0,I.jsx)(p.Z,{color:"primary",children:(0,I.jsx)(g.Z,{sx:{fontSize:"100px"}})})}),(0,I.jsx)(h.ZP,{sm:7,item:!0,children:(0,I.jsxs)(m.Z,{direction:"column",children:[(0,I.jsx)(c.Z,{color:"#fff",variant:"h4",children:"".concat(z," ").concat(te)}),(0,I.jsx)(c.Z,{color:"#ddd",variant:"subtitle1",children:"@".concat(t.username)})]})}),(0,I.jsxs)(h.ZP,{sm:2,item:!0,children:[O&&T?(0,I.jsx)(p.Z,{color:"primary",variant:"outlined",onClick:function(){return _(!0)},children:(0,I.jsx)(j.Z,{})}):(0,I.jsxs)(p.Z,{color:"primary",onClick:function(){!function(){Ue.apply(this,arguments)}(),Ie(1===Oe?2:1)},children:[2===Oe?(0,I.jsx)(S.Z,{color:"primary"}):(0,I.jsx)(C.Z,{color:"primary"}),2===Oe?"Following":"Follow"]}),(0,I.jsx)(f.Z,{open:J,onClose:q,"aria-labelledby":"modal-modal-title","aria-describedby":"modal-modal-description",children:(0,I.jsxs)(w.Z,{sx:A,children:[(0,I.jsx)(c.Z,{color:"#fff",id:"modal-modal-title",variant:"h6",component:"h2",children:"Edit Profile Details"}),(0,I.jsx)(x.Z,{margin:"normal",required:!0,fullWidth:!0,id:"changeFirstName",label:"First Name",name:"changeFirstName",autoComplete:"given-name",autoFocus:!0,error:G,onChange:function(e){return D(e.target.value)},helperText:V}),(0,I.jsx)(x.Z,{margin:"normal",required:!0,fullWidth:!0,id:"changeLastName",label:"Last Name",name:"changeLastName",autoComplete:"given-name",autoFocus:!0,error:ae,onChange:function(e){return ne(e.target.value)},helperText:ce}),(0,I.jsx)(x.Z,{margin:"normal",required:!0,fullWidth:!0,id:"Bio",label:"Bio",name:"bio",autoComplete:"given-name",autoFocus:!0,error:Ze,onChange:function(e){return me(e.target.value)},helperText:ve}),(0,I.jsx)(Z.Z,{variant:"filled",color:"success",disabled:Ze||ae||G,onClick:q,children:"Submit"})]})})]})]})}),(0,I.jsx)(h.ZP,{item:!0,ml:2.5,children:(0,I.jsx)(c.Z,{variant:"h6",color:"#fff",children:"".concat(pe)})}),(0,I.jsx)(h.ZP,{item:!0,ml:2.5,sm:12,children:(0,I.jsxs)(m.Z,{direction:"row",spacing:3,children:[(0,I.jsx)(W,{property:"Followers",data:Ce,isTopic:!1}),(0,I.jsx)(W,{property:"Following",data:t.usersFollowing,isTopic:!1}),(0,I.jsx)(W,{property:"Topics",data:t.topicsFollowing,isTopic:!0})]})}),(0,I.jsx)(h.ZP,{item:!0,sm:12,children:(0,I.jsx)(L,{})})]})}}}]);
//# sourceMappingURL=169.36f1e024.chunk.js.map