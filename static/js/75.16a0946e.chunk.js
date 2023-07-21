"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[75],{5822:function(n,e,t){t.d(e,{Z:function(){return u}});var a,r,i=t(168),s=t(6444),o=(0,s.F4)(a||(a=(0,i.Z)(["\n  0% {\n    transform: scale(1);\n  }\n  50% {\n    transform: scale(1.05);\n  }\n  100% {\n    transform: scale(1);\n  }\n"]))),l=s.ZP.button(r||(r=(0,i.Z)(["\n  border: none;\n  outline: none;\n  border-radius: 6px;\n  padding: 10px 10px;\n  background-color: #ff6b6b;\n  font-size: 16px;\n  font-weight: 700;\n  color: whitesmoke;\n  cursor: pointer;\n  animation: "," 1s infinite;\n\n  :hover {\n    box-shadow: inset 0px 0px 10px 5px rgba(0, 0, 0, 0.1);\n    animation: none;\n  }\n"])),o),c=t(3329),u=function(n){var e=n.title,t=n.type,a=void 0===t?"button":t,r=n.onClick;return(0,c.jsx)(l,{className:"btn",type:a,onClick:r,children:e})}},7075:function(n,e,t){t.r(e),t.d(e,{default:function(){return A}});var a,r,i,s,o,l=t(9439),c=t(9434),u=t(2791),d=t(5562),p=t(3634),x=t(5822),m=t(168),f=t(6444),h=f.ZP.form(a||(a=(0,m.Z)(["\n  display: flex;\n  flex-direction: column;\n  gap: 20px;\n  max-width: 480px;\n  margin: 0 auto;\n\n  .labelTitle {\n    font-size: 24px;\n    white-space: nowrap;\n    margin-right: 20px;\n  }\n  .formLabel {\n    display: flex;\n    justify-content: space-between;\n  }\n  .inputTag {\n    height: 35px;\n    width: 100%;\n    border: 2px solid lightgray;\n    border-radius: 6px;\n    font-size: 18px;\n    font-weight: 500;\n  }\n"]))),g=t(3329),b=function(){var n=(0,u.useState)(""),e=(0,l.Z)(n,2),t=e[0],a=e[1],r=(0,u.useState)(""),i=(0,l.Z)(r,2),s=i[0],o=i[1],m=(0,c.v9)((function(n){return n.contacts.items})),f=(0,c.I0)(),b=function(n){var e=n.target,t=e.name,r=e.value;switch(t){case"name":a(r);break;case"number":o(r);break;default:return console.log("\u0412\u0456\u0434\u0431\u0443\u043b\u0430\u0441\u044f \u043d\u0435\u043f\u0435\u0440\u0435\u0434\u0431\u0430\u0447\u0435\u043d\u0430 \u0441\u0438\u0442\u0443\u0430\u0446\u0456\u044f")}};return(0,g.jsxs)(h,{onSubmit:function(n){n.preventDefault(),m.find((function(n){return n.name.toLowerCase()===t.toLowerCase()}))?d.Notify.failure("".concat(t," \u0412\u0436\u0435 \u0434\u043e\u0434\u0430\u043d\u043e \u0434\u043e \u0441\u043f\u0438\u0441\u043a\u0443 \u043a\u043e\u043d\u0442\u0430\u043a\u0442\u0456\u0432")):(f((0,p.uK)({name:t,number:s})),a(""),o(""))},children:[(0,g.jsxs)("label",{className:"formLabel",children:[(0,g.jsx)("span",{className:"labelTitle",children:"\u0406\u043c'\u044f:"}),(0,g.jsx)("input",{className:"inputTag",type:"text",name:"name",pattern:"^[a-zA-Z\u0430-\u044f\u0410-\u042f]+(([' -][a-zA-Z\u0430-\u044f\u0410-\u042f ])?[a-zA-Z\u0430-\u044f\u0410-\u042f]*)*$",title:"Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan",onChange:b,value:t,required:!0})]}),(0,g.jsxs)("label",{className:"formLabel",children:[(0,g.jsx)("span",{className:"labelTitle",children:"\u041d\u043e\u043c\u0435\u0440:"}),(0,g.jsx)("input",{className:"inputTag",type:"tel",name:"number",pattern:"\\+?\\d{1,4}?[-.\\s]?\\(?\\d{1,3}?\\)?[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,9}",title:"Phone number must be digits and can contain spaces, dashes, parentheses and can start with +",onChange:b,value:s,required:!0})]}),(0,g.jsx)(x.Z,{title:"\u0414\u043e\u0431\u0430\u0432\u0438\u0442\u0438 \u043a\u043e\u043d\u0442\u0430\u043a\u0442",type:"submit"})]})},v=f.ZP.div(r||(r=(0,m.Z)(["\n  display: flex;\n  align-items: center;\n  width: 100%;\n\n  .contactName {\n    flex-basis: 26%;\n    font-size: 16px;\n    font-weight: 500;\n  }\n\n  .contactNumber {\n    flex-basis: 50%;\n    text-decoration: none;\n    font-size: 16px;\n    color: darkgreen;\n  }\n\n  .contactNumber:hover {\n    color: darkseagreen;\n    text-decoration: underline;\n  }\n"]))),j=function(n){var e=n.name,t=n.number;return(0,g.jsxs)(v,{children:[(0,g.jsxs)("p",{className:"contactName",children:[e,":"]}),(0,g.jsx)("a",{className:"contactNumber",href:"tel:"+t,children:t})]})},w=f.ZP.ul(i||(i=(0,m.Z)(["\n  margin: 0 auto;\n  border: 2px solid rgba(0, 0, 0, 0.2);\n  border-radius: 6px;\n  overflow: hidden;\n  .listItem {\n    display: flex;\n    justify-content: space-between;\n    align-items: center;\n    padding: 10px 20px;\n  }\n  li:nth-child(odd) {\n    background-color: rgb(245, 245, 245);\n  }\n\n  .notification {\n    font-size: 18px;\n    text-align: center;\n  }\n"]))),Z=t(3312),N=f.ZP.p(s||(s=(0,m.Z)(["\n  margin: 0 auto;\n\ttext-align: center;\n  font-size: 18px;\n  color: darkred;\n"]))),y=function(n){var e=n.text;return(0,g.jsx)(N,{children:e})},k=function(){var n=(0,c.v9)((function(n){return n.contacts.items})),e=(0,c.v9)((function(n){return n.filter})),t=(0,c.v9)((function(n){return n.isLoading})),a=(0,c.I0)();(0,u.useEffect)((function(){a((0,p.yF)())}),[a]);var r=e?n.filter((function(n){return n.name.toLowerCase().includes(e.toLowerCase())})):n;return(0,g.jsxs)(g.Fragment,{children:[t&&Z.Z,r.length?(0,g.jsx)(w,{children:r.map((function(n){var e=n.id,t=n.name,r=n.number;return(0,g.jsxs)("li",{className:"listItem",children:[(0,g.jsx)(j,{name:t,number:r}),(0,g.jsx)(x.Z,{title:"\u0412\u0438\u0434\u0430\u043b\u0438\u0442\u0438",onClick:function(){return a((0,p.GK)(e))}})]},e)}))}):(0,g.jsx)(y,{text:e?"Could not find this name":"\u0421\u043f\u0438\u0441\u043e\u043a \u043a\u043e\u043d\u0442\u0430\u043a\u0442\u0456\u0432 \u043f\u043e\u0440\u043e\u0436\u043d\u0456\u0439"})]})},C=t(7840),z=f.ZP.div(o||(o=(0,m.Z)(["\n  display: flex;\n  align-items: center;\n  max-width: 500px;\n  margin: 0 auto 20px;\n\n  .inputTitle {\n    font-size: 24px;\n    white-space: nowrap;\n    margin-bottom: 20px;\n  }\n\n  .inputTag {\n    height: 35px;\n    width: 100%;\n    border: 2px solid lightgray;\n    border-radius: 6px;\n    font-size: 18px;\n    font-weight: 500;\n    margin-left: 10px\n  }\n\n  .formInput {\n    padding: 8px;\n    font-size: 18px;\n  }\n"]))),T=function(){var n=(0,c.v9)((function(n){return n.filter})),e=(0,c.I0)();return(0,g.jsxs)(z,{children:[(0,g.jsx)("p",{className:"inputTitle",children:"\u0424\u0456\u043b\u044c\u0442\u0440\u0443\u0432\u0430\u0442\u0438 \u0437\u0430 \u0456\u043c'\u044f\u043c:"}),(0,g.jsx)("input",{className:"inputTag",type:"text",name:"filter",title:"\u0411\u0443\u0434\u044c \u043b\u0430\u0441\u043a\u0430, \u0432\u0432\u0435\u0434\u0456\u0442\u044c \u0456\u043c'\u044f",onChange:function(n){return e((0,C.m)(n.target.value))},value:n})]})},_="Section_container__vEvWA",L="Section_title__SLHvV",P=function(n){var e=n.title,t=n.children;return(0,g.jsxs)("div",{className:_,children:[(0,g.jsx)("h2",{className:L,children:e}),t]})},A=function(){return(0,g.jsxs)(g.Fragment,{children:[(0,g.jsx)(P,{title:"\u0422\u0435\u043b\u0435\u0444\u043e\u043d\u043d\u0430 \u043a\u043d\u0438\u0433\u0430",children:(0,g.jsx)(b,{})}),(0,g.jsxs)(P,{title:"\u041a\u043e\u043d\u0442\u0430\u043a\u0442\u0438",children:[(0,g.jsx)(T,{}),(0,g.jsx)(k,{})]})]})}}}]);
//# sourceMappingURL=75.16a0946e.chunk.js.map