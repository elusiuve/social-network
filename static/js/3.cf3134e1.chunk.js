(this["webpackJsonpmy-app"]=this["webpackJsonpmy-app"]||[]).push([[3],{289:function(e,t,a){"use strict";a.d(t,"a",(function(){return m}));var n=a(50),r=a(51),o=a(53),l=a(52),s=a(0),i=a.n(s),c=a(10),u=a(20),m=function(e){var t=function(t){Object(o.a)(s,t);var a=Object(l.a)(s);function s(){return Object(n.a)(this,s),a.apply(this,arguments)}return Object(r.a)(s,[{key:"render",value:function(){return!1===this.props.isAuth?i.a.createElement(c.a,{to:"/login"}):i.a.createElement(e,this.props)}}]),s}(i.a.Component);return Object(u.b)((function(e){return{isAuth:e.auth.isAuth}}))(t)}},290:function(e,t,a){e.exports=a.p+"static/media/user.f8a15e74.png"},291:function(e,t,a){e.exports={descriptionBlock:"ProfileInfo_descriptionBlock__1cvHl",sunnyDay:"ProfileInfo_sunnyDay__2yfhB",contacts:"ProfileInfo_contacts__3D_BV",formSummeryError:"ProfileInfo_formSummeryError__3DCNz"}},295:function(e,t,a){e.exports={postsBlock:"MyPosts_postsBlock__1Y-8I",posts:"MyPosts_posts__1Yv_d"}},296:function(e,t,a){e.exports={item:"Post_item__-bUGf"}},298:function(e,t,a){"use strict";a.r(t);var n=a(50),r=a(51),o=a(53),l=a(52),s=a(0),i=a.n(s);var c=a(125);function u(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){if("undefined"!==typeof Symbol&&Symbol.iterator in Object(e)){var a=[],n=!0,r=!1,o=void 0;try{for(var l,s=e[Symbol.iterator]();!(n=(l=s.next()).done)&&(a.push(l.value),!t||a.length!==t);n=!0);}catch(i){r=!0,o=i}finally{try{n||null==s.return||s.return()}finally{if(r)throw o}}return a}}(e,t)||Object(c.a)(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}var m=a(291),f=a.n(m),p=a(92),d=function(e){var t=u(Object(s.useState)(!1),2),a=t[0],n=t[1],r=u(Object(s.useState)(e.status),2),o=r[0],l=r[1];Object(s.useEffect)((function(){l(e.status)}),[e.status]);return i.a.createElement("div",null,!a&&i.a.createElement("div",null,i.a.createElement("b",null,"Status: "),i.a.createElement("span",{onDoubleClick:function(){n(!0)}},e.status||"---")),a&&i.a.createElement("div",null,i.a.createElement("input",{onChange:function(e){l(e.currentTarget.value)},autoFocus:!0,onBlur:function(){n(!1),e.updateStatus(o)},value:o})))},b=a(290),E=a.n(b),v=a(36),h=a(128),y=Object(h.a)({form:"edit-profile"})((function(e){var t=e.handleSubmit,a=e.profile,n=e.error;return i.a.createElement("form",{onSubmit:t},i.a.createElement("div",null,i.a.createElement("button",null,"Save")),n&&i.a.createElement("div",{className:f.a.formSummeryError},"Incorrect email or password"),i.a.createElement("div",null,i.a.createElement("b",null,"Full name "),": ",Object(v.c)("Full name","fullName",[],v.a)),i.a.createElement("div",null,i.a.createElement("b",null,"Looking for a job "),": ",Object(v.c)("","lookingForAJob",[],v.a,{type:"checkbox"})),i.a.createElement("div",null,i.a.createElement("b",null,"My professional skills "),": ",Object(v.c)("My professional skills","lookingForAJobDescription",[],v.b)),i.a.createElement("div",null,i.a.createElement("b",null,"About me")," : ",Object(v.c)("About me","AboutMe",[],v.b)),i.a.createElement("div",{className:f.a.contacts},i.a.createElement("b",null,"Contacts")," : ",Object.keys(a.contacts).map((function(e){return i.a.createElement("div",{key:e,className:f.a.contacts},i.a.createElement("b",null,e,": ",Object(v.c)(e,"contacts."+e,[],v.a)))}))))})),g=function(e){var t=e.profile,a=e.isOwner,n=e.goToEditMode;return i.a.createElement("div",null,a&&i.a.createElement("div",null,i.a.createElement("button",{onClick:n},"Edit")),i.a.createElement("div",null,i.a.createElement("b",null,"Full name "),": ",t.fullName),i.a.createElement("div",null,i.a.createElement("b",null,"Looking for a job "),": ",t.lookingForAJob?"yes":"no"),t.lookingForAJob&&i.a.createElement("div",null,i.a.createElement("b",null,"My professional skills "),": ",t.lookingForAJobDescription),i.a.createElement("div",null,i.a.createElement("b",null,"About me")," : ",t.aboutMe),i.a.createElement("div",{className:f.a.contacts},i.a.createElement("b",null,"Contacts")," : ",Object.keys(t.contacts).map((function(e){return i.a.createElement(O,{key:e,contactTitle:e,ContactValue:t.contacts[e]})}))))},O=function(e){var t=e.contactTitle,a=e.ContactValue;return i.a.createElement("div",null,i.a.createElement("b",null,t),": ",a)},k=function(e){var t=u(Object(s.useState)(!1),2),a=t[0],n=t[1];if(!e.profile)return i.a.createElement(p.a,null);return i.a.createElement("div",null,i.a.createElement("div",null,i.a.createElement("img",{className:f.a.sunnyDay,src:"https://cs7.pikabu.ru/post_img/big/2017/12/27/6/1514366899147280970.jpg"})),i.a.createElement("div",{className:f.a.descriptionBlock},i.a.createElement("img",{src:e.profile.photos.large||E.a}),e.isOwner&&i.a.createElement("input",{type:"file",onChange:function(t){t.target.files.length&&e.savePhoto(t.target.files[0])}}),i.a.createElement("div",null," ",a?i.a.createElement(y,{initialValues:e.profile,profile:e.profile,onSubmit:function(t){e.saveProfile(t).then((function(){n(!1)}))}}):i.a.createElement(g,{goToEditMode:function(){n(!0)},profile:e.profile,isOwner:e.isOwner})),i.a.createElement("div",null,i.a.createElement(d,{status:e.status,updateStatus:e.updateStatus}))))},P=a(93),j=a(295),S=a.n(j),_=a(296),w=a.n(_),A=function(e){return i.a.createElement("div",{className:w.a.item},i.a.createElement("img",{src:"https://s1.iconbird.com/ico/2013/12/505/w450h4001385925286User.png"}),e.message,i.a.createElement("div",null,"likes"),e.likesCount)},I=a(83),C=a(43),N=Object(C.a)(10),M=Object(h.a)({form:"ProfileAddNewPostForm"})((function(e){return i.a.createElement("form",{onSubmit:e.handleSubmit},i.a.createElement("div",null,i.a.createElement(I.a,{component:v.b,name:"newPostText",validate:[C.b,N],placeholder:"Enter your messague"})),i.a.createElement("div",null,i.a.createElement("button",null,"Add post")))})),x=function(e){var t=e.posts.map((function(e){return i.a.createElement(A,{message:e.message,id:e.id,likesCount:e.likesCount})}));return i.a.createElement("div",{className:S.a.postsBlock},i.a.createElement("h3",null,"My posts"),i.a.createElement("div",null,i.a.createElement(M,{onSubmit:function(t){e.addPost(t.newPostText)}})),i.a.createElement("div",{className:S.a.posts},t))},D=a(20),F=Object(D.b)((function(e){return{posts:e.profilePage.posts,newPostText:e.profilePage.newPostText}}),(function(e){return{addPost:function(t){e(Object(P.a)(t))}}}))(x),T=function(e){return i.a.createElement("div",null,i.a.createElement(k,{savePhoto:e.savePhoto,isOwner:e.isOwner,profile:e.profile,status:e.status,updateStatus:e.updateStatus,saveProfile:e.saveProfile}),i.a.createElement(F,{store:e.store}))},B=a(10),J=(a(289),a(9)),U=function(e){Object(o.a)(a,e);var t=Object(l.a)(a);function a(){return Object(n.a)(this,a),t.apply(this,arguments)}return Object(r.a)(a,[{key:"refreshProfile",value:function(){var e=this.props.match.params.userId;e||(e=this.props.userId),this.props.getUserProfile(e),this.props.getStatus(e)}},{key:"componentDidMount",value:function(){this.refreshProfile()}},{key:"componentDidUpdate",value:function(e,t,a){this.props.match.params.userId!=e.match.params.userId&&this.refreshProfile()}},{key:"render",value:function(){return i.a.createElement(T,Object.assign({},this.props,{isOwner:!this.props.match.params.userId,profile:this.props.profile,status:this.props.status,updateStatus:this.props.updateStatus,savePhoto:this.props.savePhoto}))}}]),a}(i.a.Component);t.default=Object(J.d)(Object(D.b)((function(e){return{profile:e.profilePage.profile,status:e.profilePage.status,userId:e.auth.userId,isAuth:e.auth.isAuth}}),{getUserProfile:P.d,getStatus:P.c,updateStatus:P.h,savePhoto:P.e,setUserProfile:P.g,saveProfile:P.f}),B.f)(U)}}]);
//# sourceMappingURL=3.cf3134e1.chunk.js.map