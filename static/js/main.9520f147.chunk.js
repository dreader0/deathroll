(this.webpackJsonpdeathroll=this.webpackJsonpdeathroll||[]).push([[0],{20:function(e){e.exports=JSON.parse('{"rules":[{"text":"really long rule test really long rule test really long rule test really long rule test really long rule test really long rule test","frequency":0},{"text":"drink","frequency":3},{"text":"make someone drink","frequency":3},{"text":"guys drink","frequency":1},{"text":"girls drink","frequency":1},{"text":"everyone drink","frequency":2},{"text":"drink twice","frequency":1},{"text":"drink with a friend","frequency":1},{"text":"pick a drinking buddy","frequency":1},{"text":"taller than 5\'8\\" drink","frequency":1},{"text":"shorter than 5\'6\\" drink","frequency":1},{"text":"players with matching socks drink","frequency":1},{"text":"never have i ever","frequency":1},{"text":"take a shot","frequency":1},{"text":"brown eyes drink","frequency":1},{"text":"blue eyes drink","frequency":1},{"text":"hazel eyes drink","frequency":1},{"text":"blondes drink","frequency":1},{"text":"brunettes drink","frequency":1},{"text":"redheads drink","frequency":1},{"text":"youngest drinks","frequency":1},{"text":"oldest drinks","frequency":1},{"text":"hands up - last one drinks","frequency":1},{"text":"single players drink","frequency":1},{"text":"non single players drink","frequency":1}]}')},28:function(e){e.exports=JSON.parse('[{"num":0,"text":"ex"},{"num":9,"text":"cat owners drink"},{"num":17,"text":"naked mile"},{"num":69,"text":"nice"},{"num":420,"text":"blaze it"},{"num":666,"text":"fireball shot OR two shots of anything else"},{"num":8008,"text":"lol it says boob"},{"num":711,"text":"order slurpees for everyone"}]')},29:function(e){e.exports=JSON.parse('{"name":"deathroll","version":"0.6.0","private":true,"homepage":"https://dreader0.github.io/deathroll","dependencies":{"@fortawesome/fontawesome-svg-core":"^1.2.30","@fortawesome/free-solid-svg-icons":"^5.14.0","@fortawesome/react-fontawesome":"^0.1.11","@popperjs/core":"^2.9.2","@testing-library/jest-dom":"^4.2.4","@testing-library/react":"^9.5.0","@testing-library/user-event":"^7.2.1","animated-number-react":"^0.1.1","bootstrap":"^4.5.0","jquery":"^3.6.0","popper.js":"^1.16.1","react":"^16.13.1","react-bootstrap":"^1.3.0","react-delay":"^0.1.0","react-dom":"^16.13.1","react-scripts":"^4.0.3","typescript":"^4.3.4"},"scripts":{"start":"react-scripts start","build":"react-scripts build","test":"react-scripts test","eject":"react-scripts eject","predeploy":"npm run build","deploy":"gh-pages -d build"},"eslintConfig":{"extends":"react-app"},"browserslist":{"production":[">0.2%","not dead","not op_mini all"],"development":["last 1 chrome version","last 1 firefox version","last 1 safari version"]},"devDependencies":{"gh-pages":"^3.1.0"}}')},40:function(e,t,n){},41:function(e,t,n){},47:function(e,t,n){},48:function(e,t,n){},49:function(e,t,n){},51:function(e,t,n){},53:function(e,t,n){},54:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),l=n(9),o=n.n(l),s=n(25),c=n(26),u=n(15),i=n(35),m=n(34),d=n(56),f=n(57),h=n(58),p=(n(40),function(){return r.a.createElement(d.a,null,r.a.createElement(f.a,{style:{justifyContent:"center"}},r.a.createElement(h.a,{lg:6},r.a.createElement("h3",{className:"mt-3 mb-4 background"},"deathroll"))))}),y=(n(41),n(16)),v=n(27),g=n.n(v),E=function(e){var t=e.num,n=e.gameOver;return r.a.createElement(f.a,{className:"justify-content-center"},r.a.createElement(h.a,{xs:6},n?r.a.createElement("h5",null,"Game Over!"):r.a.createElement("p",null),r.a.createElement("div",{className:"rounded px-2 pt-2 pb-1 numWindow"},n?r.a.createElement("h1",{className:"skull windowText"},r.a.createElement(y.a,{icon:"skull"})):r.a.createElement("h1",{className:"windowText"}," ",r.a.createElement(g.a,{value:t,formatValue:function(e){return e.toFixed(0)}}))),n?r.a.createElement("h6",{className:"mt-1"},"Click to Reset"):r.a.createElement("p",null)))},x=n(61),b=(n(47),function(e){var t=e.onRoll,n=e.num,a=e.gameOver,l=e.rolling;return r.a.createElement(d.a,null,r.a.createElement(f.a,{className:"justify-content-center"},r.a.createElement(h.a,{className:"mt-5 mb-4"},r.a.createElement(x.a,{className:"btn btn-default btn-circle bigButton shine",onClick:function(){l?console.log("rolling..."):t(n)},onKeyDown:function(e){32===e.keyCode&&t(n)}},r.a.createElement(E,{num:n,gameOver:a})))))}),k=n(59),w=(n(48),function(e){var t=e.text,n=e.rolling;e.pastRolls;return r.a.createElement(d.a,null,r.a.createElement(f.a,{style:{justifyContent:"center"}},r.a.createElement(h.a,{lg:6,className:"mt-5"},r.a.createElement("h4",{className:"ruleText p-2"},n?r.a.createElement(k.a,{animation:"border",variant:"secondary"}):t))))}),q=n(28),N=n(20),O=n(29),R=n(60),S=(n(49),function(e){var t=e.version,n=e.showModal,a=e.handleClose;return r.a.createElement(R.a,{size:"lg","aria-labelledby":"contained-modal-title-vcenter",centered:!0,show:n,className:"myModal"},r.a.createElement(R.a.Header,{closeButton:!0,style:{borderColor:"#121212"}},r.a.createElement(R.a.Title,{id:"contained-modal-title-vcenter"},"deathroll v",t)),r.a.createElement(R.a.Body,null,r.a.createElement("h4",null,"How to play"),r.a.createElement("p",null,"Press the Big Red Button.",r.a.createElement("br",null),"Follow the rule that appears.",r.a.createElement("br",null),"Take turns repeat that until the number reaches a skull.",r.a.createElement("br",null),"Whoever rolls the skull loses, punish them as you see fit.")),r.a.createElement(R.a.Footer,{style:{borderColor:"#121212"}},r.a.createElement(x.a,{variant:"outline-light",onClick:function(){a()}},"Close")))}),C=(n(51),{ruleNum:9999,ruleText:"PRESS THE BUTTON",rolling:!1,gameOver:!1,dupe:2,showModal:!1}),j=[],T=q.map((function(e){return e})),M=[],B=function(e){Object(i.a)(n,e);var t=Object(m.a)(n);function n(){var e;return Object(s.a)(this,n),(e=t.call(this)).mapRandomRules=function(){for(var e=0;e<N.rules.length;e++)for(var t=N.rules[e].frequency,n=0;n<t;n++)M.push(N.rules[e])},e.setNewText=function(e){var t=M[Math.ceil(Math.random()*(M.length-1))].text;if(1===e)t="YOU LOSE!";else for(var n=0;n<T.length;n++)T[n].num===e&&(t=T[n].text);return t},e.onRoll=function(t){if(1===t)e.setState(C),j=[];else{var n=Math.ceil(Math.random()*t),a=e.setNewText(n),r=1e3;n===t?(a+=" X"+e.state.dupe,e.setState({dupe:e.state.dupe+1}),r=0):e.setState({dupe:2});var l={rolling:!0};1!==n&&(l.ruleNum=n),e.setState(l);var o,s={ruleText:a,rolling:!1};1===n&&(s.gameOver=!0,s.ruleNum=1,2===t&&(r=0)),e.state.ruleNum===C.ruleNum&&e.state.dupe===C.dupe||(o=e.state.ruleNum+": "+e.state.ruleText,j.unshift(o));var c=Object(u.a)(e);setTimeout((function(){c.setRolledRule(s,o)}),r)}},e.setRolledRule=function(t,n){e.setState(t)},e.handleShow=function(){e.setState({showModal:!0})},e.handleClose=function(){e.setState({showModal:!1})},e.state=C,e}return Object(c.a)(n,[{key:"componentDidMount",value:function(){this.randomRules=this.mapRandomRules(),this.version=O.version}},{key:"render",value:function(){var e=this.state,t=e.ruleNum,n=e.ruleText,a=e.rolling,l=e.gameOver,o=e.showModal;return r.a.createElement(d.a,{className:"App"},r.a.createElement(f.a,null,r.a.createElement(h.a,null,r.a.createElement(p,null))),r.a.createElement(f.a,null,r.a.createElement(h.a,null,r.a.createElement(b,{num:t,onRoll:this.onRoll,gameOver:l,rolling:a}))),r.a.createElement(f.a,null,r.a.createElement(h.a,null,r.a.createElement(w,{text:n,rolling:a,pastRolls:j}))),r.a.createElement(f.a,null,r.a.createElement(h.a,{style:{cursor:"pointer"},className:"mt-5"},r.a.createElement(y.a,{style:{fontSize:"2rem"},icon:"info-circle",onClick:this.handleShow})),r.a.createElement(S,{version:this.version,showModal:o,handleClose:this.handleClose})))}}]),n}(a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var J=n(13),z=n(21);n.p,n(52),n(53);J.b.add(z.b,z.c,z.a),o.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(B,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[54,1,2]]]);
//# sourceMappingURL=main.9520f147.chunk.js.map