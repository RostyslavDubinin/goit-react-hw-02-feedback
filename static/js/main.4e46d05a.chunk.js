(this["webpackJsonpgoit-react-hw-02-feedback"]=this["webpackJsonpgoit-react-hw-02-feedback"]||[]).push([[0],{13:function(e,t,n){},15:function(e,t,n){"use strict";n.r(t);var c=n(1),a=n.n(c),i=n(3),r=n.n(i),o=(n(13),n(4)),s=n(5),d=n(8),b=n(7),u=n(6),l=n.n(u),j=n(0),h=function(e,t){return Object(j.jsx)("div",{children:e.map((function(e){return Object(j.jsx)("button",{className:l.a.button,onClick:function(){return t(e)},children:e},e)}))})},f=function(e){var t=e.good,n=e.neutral,c=e.bad,a=e.total,i=e.positivePercentage;return Object(j.jsx)("div",{className:"Statistics",children:Object(j.jsxs)("div",{children:[Object(j.jsxs)("p",{children:["Good: ",t]}),Object(j.jsxs)("p",{children:["Neutral: ",n]}),Object(j.jsxs)("p",{children:["Bad: ",c]}),Object(j.jsxs)("p",{children:["Total: ",a]}),i>0?Object(j.jsxs)("p",{children:["Positive feedback: ",i,"%"]}):Object(j.jsx)("p",{children:"Positive feedback: 0%"})]})})},v=function(e){var t=e.title,n=e.children;return Object(j.jsxs)("div",{className:"Statistics",children:[Object(j.jsx)("h1",{children:t}),n]})},O=function(e){var t=e.message;return Object(j.jsx)(j.Fragment,{children:Object(j.jsx)("h2",{children:t})})},g=function(e){Object(d.a)(n,e);var t=Object(b.a)(n);function n(){var e;Object(o.a)(this,n);for(var c=arguments.length,a=new Array(c),i=0;i<c;i++)a[i]=arguments[i];return(e=t.call.apply(t,[this].concat(a))).state={good:0,neutral:0,bad:0},e.onLeaveFeedback=function(){e.setState((function(e){return{good:e.good+1,neutral:e.neutral+1,bad:e.bad+1}}))},e.countTotalFeedback=function(e){return e.good+e.neutral+e.bad},e.countPositiveFeedbackPercentage=function(e){var t=e.good;return 100*t/(t+e.neutral+e.bad)},e}return Object(s.a)(n,[{key:"render",value:function(){var e=this.state,t=e.good,n=e.neutral,c=e.bad;return Object(j.jsxs)("div",{className:"Feedback",children:[Object(j.jsx)(v,{title:"Please leave feedback",children:Object(j.jsx)(h,{options:[t,n,c],onLeaveFeedback:this.onLeaveFeedback})}),Object(j.jsx)(v,{title:"Statistics",children:0===this.countTotalFeedback({good:t,neutral:n,bad:c})?Object(j.jsx)(O,{message:"No feedback given"}):Object(j.jsx)(f,{good:t,neutral:n,bad:c,total:this.countTotalFeedback({good:t,neutral:n,bad:c}),positivePercentage:this.countPositiveFeedbackPercentage({good:t,neutral:n,bad:c})})})]})}}]),n}(c.Component);g.defaultProps={initialValue:0};var x=g,p=function(){return Object(j.jsx)("div",{children:Object(j.jsx)(x,{})})},k=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,16)).then((function(t){var n=t.getCLS,c=t.getFID,a=t.getFCP,i=t.getLCP,r=t.getTTFB;n(e),c(e),a(e),i(e),r(e)}))};r.a.render(Object(j.jsx)(a.a.StrictMode,{children:Object(j.jsx)(p,{})}),document.getElementById("root")),k()},6:function(e,t,n){e.exports={button:"FeedbackOptions_button__2sxsf"}}},[[15,1,2]]]);
//# sourceMappingURL=main.4e46d05a.chunk.js.map