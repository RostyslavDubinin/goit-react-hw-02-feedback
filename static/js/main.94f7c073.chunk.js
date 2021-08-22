(this["webpackJsonpgoit-react-hw-02-feedback"]=this["webpackJsonpgoit-react-hw-02-feedback"]||[]).push([[0],{13:function(t,e,n){},15:function(t,e,n){"use strict";n.r(e);var a=n(1),c=n.n(a),o=n(4),r=n.n(o),i=(n(13),n(5)),s=n(6),d=n(8),l=n(7),u=n(2),b=n.n(u),j=n(0),h=function(t){var e=t.onGood,n=t.onNeutral,a=t.onBad;return Object(j.jsxs)("div",{children:[Object(j.jsx)("button",{className:b.a.button,type:"button",onClick:e,children:"Good"}),Object(j.jsx)("button",{className:b.a.button,type:"button",onClick:n,children:"Neutral"}),Object(j.jsx)("button",{className:b.a.button,type:"button",onClick:a,children:"Bad"})]})},f=function(t){var e=t.good,n=t.neutral,a=t.bad,c=t.total,o=t.positivePercentage;return Object(j.jsx)("div",{className:"Statistics",children:Object(j.jsxs)("div",{children:[Object(j.jsxs)("p",{children:["Good: ",e]}),Object(j.jsxs)("p",{children:["Neutral: ",n]}),Object(j.jsxs)("p",{children:["Bad: ",a]}),Object(j.jsxs)("p",{children:["Total: ",c]}),o>0?Object(j.jsxs)("p",{children:["Positive feedback: ",o,"%"]}):Object(j.jsx)("p",{children:"Positive feedback: 0%"})]})})},O=function(t){var e=t.title,n=t.children;return Object(j.jsxs)("div",{className:"Statistics",children:[Object(j.jsx)("h1",{children:e}),n]})},g=function(t){var e=t.message;return Object(j.jsx)(j.Fragment,{children:Object(j.jsx)("h2",{children:e})})},x=function(t){Object(d.a)(n,t);var e=Object(l.a)(n);function n(){var t;Object(i.a)(this,n);for(var a=arguments.length,c=new Array(a),o=0;o<a;o++)c[o]=arguments[o];return(t=e.call.apply(e,[this].concat(c))).state={good:0,neutral:0,bad:0},t.handleGood=function(){t.setState((function(t){return{good:t.good+1}}))},t.handleNeutral=function(){t.setState((function(t){return{neutral:t.neutral+1}}))},t.handleBad=function(){t.setState((function(t){return{bad:t.bad+1}}))},t.countTotalFeedback=function(t){return t.good+t.neutral+t.bad},t.countPositiveFeedbackPercentage=function(t){var e=t.good;return 100*e/(e+t.neutral+t.bad)},t}return Object(s.a)(n,[{key:"render",value:function(){var t=this.state,e=t.good,n=t.neutral,a=t.bad;return Object(j.jsxs)("div",{className:"Feedback",children:[Object(j.jsx)(O,{title:"Please leave feedback",children:Object(j.jsx)(h,{onGood:this.handleGood,onNeutral:this.handleNeutral,onBad:this.handleBad})}),Object(j.jsx)(O,{title:"Statistics",children:0===this.countTotalFeedback({good:e,neutral:n,bad:a})?Object(j.jsx)(g,{message:"No feedback given"}):Object(j.jsx)(f,{good:e,neutral:n,bad:a,total:this.countTotalFeedback({good:e,neutral:n,bad:a}),positivePercentage:this.countPositiveFeedbackPercentage({good:e,neutral:n,bad:a})})})]})}}]),n}(a.Component);x.defaultProps={initialValue:0};var v=x,p=function(){return Object(j.jsx)("div",{children:Object(j.jsx)(v,{})})},k=function(t){t&&t instanceof Function&&n.e(3).then(n.bind(null,16)).then((function(e){var n=e.getCLS,a=e.getFID,c=e.getFCP,o=e.getLCP,r=e.getTTFB;n(t),a(t),c(t),o(t),r(t)}))};r.a.render(Object(j.jsx)(c.a.StrictMode,{children:Object(j.jsx)(p,{})}),document.getElementById("root")),k()},2:function(t,e,n){t.exports={button:"FeedbackOptions_button__2sxsf"}}},[[15,1,2]]]);
//# sourceMappingURL=main.94f7c073.chunk.js.map