(this["webpackJsonpgoit-react-hw-02-feedback"]=this["webpackJsonpgoit-react-hw-02-feedback"]||[]).push([[0],{12:function(e,t,n){},14:function(e,t,n){},15:function(e,t,n){"use strict";n.r(t);var c=n(1),a=n.n(c),o=n(3),i=n.n(o),r=(n(12),n(4)),d=n(5),s=n(7),l=n(6),u=n(0),b=function(e){var t=e.onGood,n=e.onNeutral,c=e.onBad;return Object(u.jsxs)("div",{className:"FeedbackOptions",children:[Object(u.jsx)("h1",{children:"Please leave feedback"}),Object(u.jsx)("button",{type:"button",onClick:t,children:"Good"}),Object(u.jsx)("button",{type:"button",onClick:n,children:"Neutral"}),Object(u.jsx)("button",{type:"button",onClick:c,children:"Bad"})]})},j=function(e){var t=e.good,n=e.neutral,c=e.bad,a=e.total,o=e.positivePercentage;return Object(u.jsx)("div",{className:"Statistics",children:Object(u.jsxs)("div",{children:[Object(u.jsx)("h1",{children:"Statistics"}),Object(u.jsxs)("p",{children:["Good: ",t]}),Object(u.jsxs)("p",{children:["Neutral: ",n]}),Object(u.jsxs)("p",{children:["Bad: ",c]}),Object(u.jsxs)("p",{children:["Total: ",a]}),o>0?Object(u.jsxs)("p",{children:["Positive feedback: ",o,"%"]}):Object(u.jsx)("p",{children:"Positive feedback: 0%"})]})})},h=function(e){var t=e.title;return Object(u.jsx)("div",{className:"Statistics",children:Object(u.jsx)("h1",{children:t})})},O=(n(14),function(e){Object(s.a)(n,e);var t=Object(l.a)(n);function n(){var e;Object(r.a)(this,n);for(var c=arguments.length,a=new Array(c),o=0;o<c;o++)a[o]=arguments[o];return(e=t.call.apply(t,[this].concat(a))).state={good:0,neutral:0,bad:0},e.handleGood=function(){e.setState((function(e){return{good:e.good+1}}))},e.handleNeutral=function(){e.setState((function(e){return{neutral:e.neutral+1}}))},e.handleBad=function(){e.setState((function(e){return{bad:e.bad+1}}))},e.countTotalFeedback=function(e){return e.good+e.neutral+e.bad},e.countPositiveFeedbackPercentage=function(e){var t=e.good;return 100*t/(t+e.neutral+e.bad)},e}return Object(d.a)(n,[{key:"render",value:function(){var e=this.state,t=e.good,n=e.neutral,c=e.bad;return Object(u.jsxs)("div",{className:"Feedback",children:[Object(u.jsx)(h,{title:"Please leave feedback",children:Object(u.jsx)(b,{onGood:this.handleGood,onNeutral:this.handleNeutral,onBad:this.handleBad})}),Object(u.jsx)(h,{title:"Statistics",children:Object(u.jsx)(j,{good:t,neutral:n,bad:c,total:this.countTotalFeedback({good:t,neutral:n,bad:c}),positivePercentage:this.countPositiveFeedbackPercentage({good:t,neutral:n,bad:c})})})]})}}]),n}(c.Component));O.defaultProps={initialValue:0};var f=O,v=function(){return Object(u.jsx)("div",{children:Object(u.jsx)(f,{})})},x=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,16)).then((function(t){var n=t.getCLS,c=t.getFID,a=t.getFCP,o=t.getLCP,i=t.getTTFB;n(e),c(e),a(e),o(e),i(e)}))};i.a.render(Object(u.jsx)(a.a.StrictMode,{children:Object(u.jsx)(v,{})}),document.getElementById("root")),x()}},[[15,1,2]]]);
//# sourceMappingURL=main.58761859.chunk.js.map