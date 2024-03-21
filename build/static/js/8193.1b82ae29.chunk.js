"use strict";(self.webpackChunkkrext=self.webpackChunkkrext||[]).push([[8193],{58387:function(e,n,s){var l=s(46417);n.Z=function(e){var n=e.name;return(0,l.jsx)("div",{className:"w-full py-4",children:(0,l.jsx)("div",{children:(0,l.jsx)("h2",{className:"text-base font-semibold sm:text-lg md:text-xl lg:text-2xl",children:n})})})}},92580:function(e,n,s){s.d(n,{Z:function(){return a}});var l=s(47313),t=s(58467),i=s(46417);function a(e){var n=e.tab,s=e.onClick,a=e.type,o=void 0===a?null:a,r=(0,t.TH)(),u=(0,t.s0)(),c=(0,l.useCallback)((function(e){return r.pathname.includes(e)}),[r]);return(0,i.jsx)("div",{className:"w-full lg:min-w-56 lg:py-8  mb-6 lg:mb-0 bg-white lg:shadow rounded-2xl",children:(0,i.jsx)("ul",{className:"w-full h-full cursor-pointer flex justify-between items-center  lg:block ",children:n.map((function(e){return(0,i.jsx)("li",{onClick:function(n){return o?s(n,e):function(e,n){e.preventDefault(),u(n.value),c(n.value)}(n,e)},className:"".concat(c(e.value)?"bg-[#E5E7F4] text-primary font-bold":"bg-white"," w-full py-4 px-4 bg-[#E5E7F4] text-sm md:text-base"),children:e.name},e.id)}))})})}},27400:function(e,n,s){s.r(n),s.d(n,{default:function(){return v}});var l=s(4942),t=s(1413),i=s(29439),a=s(81676),o=s(97763),r=s(58387),u=s(92580),c=s(681),h=s(50858),d=s(14409),m=s(74460),x=s(47313),f=s(58467),w=s(37248),b=s(46417),j={showIssues:!1,showActionItem:!1,showMetrics:!1,showGoals:!1,showHeadlines:!1},p=[{id:1,name:"Action Item",value:a.s2.REPORT_ACTION_ITEM},{id:2,name:"Goals",value:a.s2.REPORT_GOALS},{id:3,name:"Topics",value:a.s2.REPORT_ISSUES},{id:5,name:"Headlines",value:a.s2.REPORT_HEADLINES},{id:4,name:"Metrics",value:a.s2.REPORT_METRICS}];function v(){var e=(0,f.V$)(T),n=(0,x.useState)(j),s=(0,i.Z)(n,2),a=s[0],w=s[1],v=(0,f.TH)(),E=(0,x.useMemo)((function(){var e;return null===(e=v.pathname.split("/")[3])||void 0===e?void 0:e.toLowerCase()}),[v]),R=(0,x.useCallback)((function(e){return function(){w((function(n){return(0,t.Z)((0,t.Z)({},n),{},(0,l.Z)({},e,!n[e]))}))}}),[]);return(0,b.jsxs)("section",{children:[(0,b.jsx)("div",{children:(0,b.jsxs)("div",{className:"w-full flex flex-row justify-between items-center text-2xl",children:[(0,b.jsx)(r.Z,{name:"Report"}),(0,b.jsxs)("div",{children:["actionitem"===E?(0,b.jsx)(o.Z,{name:"Add Action Item",onClick:R("showActionItem")}):null,"goals"===E?(0,b.jsx)(o.Z,{name:"Add Goal",onClick:R("showGoals")}):null,"metrics"===E?(0,b.jsx)(o.Z,{name:"Add Metric",onClick:R("showMetric")}):null,"issues"===E?(0,b.jsx)(o.Z,{name:"Add Topics",onClick:R("showIssues")}):null]})]})}),(0,b.jsxs)("article",{className:"flex flex-col justify-between  xl:flex-row mt-3",children:[(0,b.jsx)("div",{className:"basis-[20%]",children:(0,b.jsx)(u.Z,{tab:p})}),(0,b.jsx)("div",{className:"basis-[78%]",children:(0,b.jsx)(x.Suspense,{children:e})})]}),a.showActionItem?(0,b.jsx)(h.Z,{show:a.showActionItem,handleToggleGoal:R("showActionItem")}):null,a.showGoals?(0,b.jsx)(d.Z,{show:a.showGoals,handleToggleGoal:R("showGoals")}):null,a.showMetric?(0,b.jsx)(c.Z,{show:a.showMetric,handleToggleGoal:R("showMetric")}):null,a.showIssues?(0,b.jsx)(m.Z,{show:a.showIssues,handleToggleGoal:R("showIssues")}):null]})}var T=(0,w.W)([{path:"*",element:(0,x.lazy)((function(){return s.e(2840).then(s.bind(s,82840))}))},{path:"/",element:(0,b.jsx)(f.Fg,{to:a.s2.REPORT_ACTION_ITEM})},{path:a.s2.REPORT_ACTION_ITEM,element:(0,x.lazy)((function(){return Promise.all([s.e(4697),s.e(4157),s.e(2327),s.e(2706)]).then(s.bind(s,55810))}))},{path:a.s2.REPORT_GOALS,element:(0,x.lazy)((function(){return Promise.all([s.e(4157),s.e(3554),s.e(222),s.e(1628)]).then(s.bind(s,81628))}))},{path:a.s2.REPORT_ISSUES,element:(0,x.lazy)((function(){return Promise.all([s.e(4697),s.e(4157),s.e(2327),s.e(6030)]).then(s.bind(s,75345))}))},{path:a.s2.REPORT_HEADLINES,element:(0,x.lazy)((function(){return Promise.all([s.e(4697),s.e(4157),s.e(2327),s.e(461)]).then(s.bind(s,32156))}))},{path:a.s2.REPORT_METRICS,element:(0,x.lazy)((function(){return Promise.all([s.e(4697),s.e(4157),s.e(2327),s.e(222),s.e(4324),s.e(94)]).then(s.bind(s,62049))}))}],{excludePathPrifix:!0,pathPrifix:"/dashboard/reports/"})}}]);