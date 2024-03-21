"use strict";(self.webpackChunkkrext=self.webpackChunkkrext||[]).push([[1505],{32066:function(e,s,a){var r=a(46417);s.Z=function(e){var s=e.name;return(0,r.jsx)("div",{className:"w-full",children:(0,r.jsx)("h1",{className:"font-semibold text-2xl",children:s})})}},2858:function(e,s,a){var r=a(46417);s.Z=function(e){var s=e.password,a=void 0===s?"":s,t=[{id:1,validator:"- Minimum 1 upper-case character (A-Z)",color:/^(?=.*[A-Z]).+$/.test(a)?"text-green-600":"black"},{id:2,validator:"- Minimum 1 lower-case character (a-z)",color:/^(?=.*[a-z]).+$/.test(a)?"text-green-600":"black"},{id:3,validator:"- Minimum 1 digit (0-9)",color:/\d+/.test(a)?"text-green-600":"black"},{id:4,validator:"- Minimum 1 special character (!,@,#,$)",color:/[\W_]+/.test(a)?"text-green-600":"black"},{id:5,validator:"- Minimum 8 characters or more",color:a.length>=8?"text-green-600":"black"}];return(0,r.jsxs)("div",{className:"mb-10",children:[(0,r.jsx)("h4",{className:"mt-4 mb-4 text-base font-bold",children:"Make sure your password has:"}),t.map((function(e,s){return(0,r.jsx)("div",{className:"my-2",children:(0,r.jsx)("p",{className:"".concat(e.color," text-gray-dark text-sm"),children:e.validator},e.id)},e.id)}))]})}},81505:function(e,s,a){a.r(s);var r=a(74165),t=a(1413),o=a(15861),n=a(29439),i=(a(47313),a(27356)),c=a(57406),l=a(79429),d=a(2858),u=a(32066),m=a(58467),p=a(21933),w=a(31271),h=a(61487),f=a(36059),x=a(46417);s.default=function(){var e=(0,w.Z)().toggleLoadingModal,s=h.b.useResetPasswordMutation(),a=(0,n.Z)(s,1)[0],v=(0,m.UO)(),b=(0,l.TA)({initialValues:{password:"",confirm_password:""},validationSchema:p.Ry().shape({password:p.Z_().trim().label("Password").matches(/^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})/,"Oops!, password must be at least 8 characters long and must contain at least one uppercase letter, one lowercase letter, one number and one special character").required("Password is required!"),confirm_password:p.Z_().trim().label("Confirm Password").oneOf([p.iH("password")],"Confirm Passwords must match Password").required()}),onSubmit:function(){var s=(0,o.Z)((0,r.Z)().mark((function s(o){var n;return(0,r.Z)().wrap((function(s){for(;;)switch(s.prev=s.next){case 0:return e(!0),s.prev=1,s.next=4,a((0,t.Z)((0,t.Z)({},o),{},{token:v.token})).unwrap();case 4:n=s.sent,f.ZP.success((null===n||void 0===n?void 0:n.message)||"Reset successfully"),s.next=12;break;case 8:s.prev=8,s.t0=s.catch(1),e(!1),f.ZP.error(null===s.t0||void 0===s.t0?void 0:s.t0.data.message);case 12:e(!1);case 13:case"end":return s.stop()}}),s,null,[[1,8]])})));return function(e){return s.apply(this,arguments)}}()});return(0,x.jsxs)("form",{onSubmit:b.handleSubmit,className:"p-4",children:[(0,x.jsx)(u.Z,{name:"Reset Password"}),(0,x.jsx)(i.Z,(0,t.Z)({type:"password",placeholder:"Password",password:"password"},(0,c.PW)(b,"password"))),(0,x.jsx)(i.Z,(0,t.Z)({type:"password",placeholder:"Re-enter Password",password:"password"},(0,c.PW)(b,"confirm_password"))),(0,x.jsx)(d.Z,{password:b.values.password}),(0,x.jsx)("button",{type:"submit",className:"flex items-center justify-center w-full p-3 my-3 text-white ease-linear delay-100 rounded-md bg-primary hover:bg-blue-800",children:"Reset Password"})]})}}}]);