(this["webpackJsonpgoit-react-hw-02-feedback"]=this["webpackJsonpgoit-react-hw-02-feedback"]||[]).push([[0],{12:function(e,t,n){},14:function(e,t,n){},15:function(e,t,n){"use strict";n.r(t);var a=n(1),c=n.n(a),o=n(3),r=n.n(o),i=(n(12),n(4)),l=n(5),s=n(7),u=n(6),d=n(0),j=function(e){var t=e.onGood,n=e.onNeutral,a=e.onBad;return Object(d.jsxs)("div",{className:"Counter__controls",children:[Object(d.jsx)("h1",{children:"Please leave feedback"}),Object(d.jsx)("button",{type:"button",onClick:t,children:"Good"}),Object(d.jsx)("button",{type:"button",onClick:n,children:"Neutral"}),Object(d.jsx)("button",{type:"button",onClick:a,children:"Bad"})]})},b=function(e){var t=e.valueGood,n=e.valueNeutral,a=e.valueBad,c=e.valueTotal,o=e.valuePositivePercentage;return Object(d.jsx)("div",{className:"Statistics",children:Object(d.jsxs)("div",{children:[Object(d.jsx)("h1",{children:"Statistics"}),Object(d.jsxs)("p",{children:["Good: ",t]}),Object(d.jsxs)("p",{children:["Neutral: ",n]}),Object(d.jsxs)("p",{children:["Bad: ",a]}),Object(d.jsxs)("p",{children:["Total: ",c]}),Object(d.jsxs)("p",{children:["Positive feedback: ",o,"%"]})]})})},h=(n(14),function(e){Object(s.a)(n,e);var t=Object(u.a)(n);function n(){var e;Object(i.a)(this,n);for(var a=arguments.length,c=new Array(a),o=0;o<a;o++)c[o]=arguments[o];return(e=t.call.apply(t,[this].concat(c))).state={good:0,neutral:0,bad:0},e.handleGood=function(){e.setState((function(e){return{good:e.good+1}}))},e.handleNeutral=function(){e.setState((function(e){return{neutral:e.neutral+1}}))},e.handleBad=function(){e.setState((function(e){return{bad:e.bad+1}}))},e}return Object(l.a)(n,[{key:"render",value:function(){var e=this.state,t=e.good,n=e.neutral,a=e.bad,c=t+n+a,o=100*t/c;return Object(d.jsxs)("div",{className:"Feedback",children:[Object(d.jsx)(j,{onGood:this.handleGood,onNeutral:this.handleNeutral,onBad:this.handleBad}),Object(d.jsx)(b,{valueGood:t,valueNeutral:n,valueBad:a,valueTotal:c,valuePositivePercentage:o})]})}}]),n}(a.Component));h.defaultProps={initialValue:0,valuePositivePercentage:0};var v=h,f=function(){return Object(d.jsx)("div",{children:Object(d.jsx)(v,{})})},O=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,16)).then((function(t){var n=t.getCLS,a=t.getFID,c=t.getFCP,o=t.getLCP,r=t.getTTFB;n(e),a(e),c(e),o(e),r(e)}))};r.a.render(Object(d.jsx)(c.a.StrictMode,{children:Object(d.jsx)(f,{})}),document.getElementById("root")),O()}},[[15,1,2]]]);
//# sourceMappingURL=main.2bf9cd47.chunk.js.map