(this.webpackJsonptets=this.webpackJsonptets||[]).push([[0],{10:function(t,e,n){t.exports={container:"Form_container__24ogL",formBtn:"Form_formBtn__1AJra"}},13:function(t,e,n){t.exports={label:"Filter_label__1kdSb"}},20:function(t,e,n){},21:function(t,e,n){"use strict";n.r(e);var a=n(1),c=n(11),r=n.n(c),o=n(12),s=n(14),i=n(3),l=n(4),d=n(6),u=n(5),b=n(23),j=n(9),m=n.n(j),h=n(0),f=function(t){var e=t.filtredContacts,n=t.deleteContact;return Object(h.jsx)("ul",{className:m.a.ul,children:e().map((function(t){return Object(h.jsxs)("li",{className:m.a.li,children:[Object(h.jsx)("span",{children:t.contactName}),Object(h.jsx)("span",{children:t.contactNumber}),Object(h.jsx)("button",{type:"button",id:t.id,onClick:n,children:"Delete"})]},t.id)}))})},p=n(13),O=n.n(p),C=function(t){var e=t.setFilterInState,n=t.filter;return Object(h.jsxs)("label",{className:O.a.label,children:["Search",Object(h.jsx)("input",{onChange:e,value:n,type:"text",pattern:"^[a-zA-Z\u0430-\u044f\u0410-\u042f]+(([' -][a-zA-Z\u0430-\u044f\u0410-\u042f ])?[a-zA-Z\u0430-\u044f\u0410-\u042f]*)*$",title:"\u0418\u043c\u044f \u043c\u043e\u0436\u0435\u0442 \u0441\u043e\u0441\u0442\u043e\u044f\u0442\u044c \u0442\u043e\u043b\u044c\u043a\u043e \u0438\u0437 \u0431\u0443\u043a\u0432, \u0430\u043f\u043e\u0441\u0442\u0440\u043e\u0444\u0430, \u0442\u0438\u0440\u0435 \u0438 \u043f\u0440\u043e\u0431\u0435\u043b\u043e\u0432. \u041d\u0430\u043f\u0440\u0438\u043c\u0435\u0440 Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan \u0438 \u0442. \u043f.",required:!0})]})},N=n(7),x=n.n(N),v=n(2),g=n(10),S=n.n(g),y=function(t){Object(d.a)(n,t);var e=Object(u.a)(n);function n(){var t;Object(i.a)(this,n);for(var a=arguments.length,c=new Array(a),r=0;r<a;r++)c[r]=arguments[r];return(t=e.call.apply(e,[this].concat(c))).state={contactName:"",contactNumber:""},t.onHandleChange=function(e){var n=e.target,a=n.value,c=n.name;t.setState(Object(v.a)({},c,a))},t.reset=function(){t.setState({contactName:"",contactNumber:""})},t.handleSubmit=function(e){if(e.preventDefault(),t.props.isThereContact(t.state.contactName))return alert("".concat(t.state.contactName," has been already in contact list"));t.props.addContact(t.state),t.reset()},t}return Object(l.a)(n,[{key:"render",value:function(){return Object(h.jsx)(h.Fragment,{children:Object(h.jsxs)("form",{className:S.a.container,onSubmit:this.handleSubmit,children:[Object(h.jsxs)("label",{children:["Name",Object(h.jsx)("input",{value:this.state.contactName,onChange:this.onHandleChange,type:"text",name:"contactName",pattern:"^[a-zA-Z\u0430-\u044f\u0410-\u042f]+(([' -][a-zA-Z\u0430-\u044f\u0410-\u042f ])?[a-zA-Z\u0430-\u044f\u0410-\u042f]*)*$",title:"\u0418\u043c\u044f \u043c\u043e\u0436\u0435\u0442 \u0441\u043e\u0441\u0442\u043e\u044f\u0442\u044c \u0442\u043e\u043b\u044c\u043a\u043e \u0438\u0437 \u0431\u0443\u043a\u0432, \u0430\u043f\u043e\u0441\u0442\u0440\u043e\u0444\u0430, \u0442\u0438\u0440\u0435 \u0438 \u043f\u0440\u043e\u0431\u0435\u043b\u043e\u0432. \u041d\u0430\u043f\u0440\u0438\u043c\u0435\u0440 Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan \u0438 \u0442. \u043f.",required:!0})]}),Object(h.jsxs)("label",{children:["Telefon",Object(h.jsx)("input",{value:this.state.contactNumber,onChange:this.onHandleChange,type:"tel",name:"contactNumber",pattern:"\\+?\\d{1,4}?[-.\\s]?\\(?\\d{1,3}?\\)?[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,9}",title:"\u041d\u043e\u043c\u0435\u0440 \u0442\u0435\u043b\u0435\u0444\u043e\u043d\u0430 \u0434\u043e\u043b\u0436\u0435\u043d \u0441\u043e\u0441\u0442\u043e\u044f\u0442\u044c \u0446\u0438\u0444\u0440 \u0438 \u043c\u043e\u0436\u0435\u0442 \u0441\u043e\u0434\u0435\u0440\u0436\u0430\u0442\u044c \u043f\u0440\u043e\u0431\u0435\u043b\u044b, \u0442\u0438\u0440\u0435, \u043a\u0440\u0443\u0433\u043b\u044b\u0435 \u0441\u043a\u043e\u0431\u043a\u0438 \u0438 \u043c\u043e\u0436\u0435\u0442 \u043d\u0430\u0447\u0438\u043d\u0430\u0442\u044c\u0441\u044f \u0441 +",required:!0})]}),Object(h.jsx)("button",{className:S.a.formBtn,type:"submit",children:"Add contact"})]})})}}]),n}(a.Component),_=y,A=function(t){Object(d.a)(n,t);var e=Object(u.a)(n);function n(){var t;Object(i.a)(this,n);for(var a=arguments.length,c=new Array(a),r=0;r<a;r++)c[r]=arguments[r];return(t=e.call.apply(e,[this].concat(c))).state={contacts:[{id:"id-1",contactName:"Rosie Simpson",contactNumber:"459-12-56"},{id:"id-2",contactName:"Hermione Kline",contactNumber:"443-89-12"},{id:"id-3",contactName:"Eden Clements",contactNumber:"645-17-79"},{id:"id-4",contactName:"Annie Copeland",contactNumber:"227-91-26"}],filter:""},t.addContact=function(e){t.setState((function(t){return{contacts:[].concat(Object(s.a)(t.contacts),[Object(o.a)({id:Object(b.a)()},e)])}}))},t.isThereContact=function(e){return t.state.contacts.some((function(t){return t.contactName===e}))},t.setFilterInState=function(e){var n=e.target.value;t.setState({filter:n})},t.filtredContacts=function(){return t.state.contacts.filter((function(e){return e.contactName.toLowerCase().includes(t.state.filter.toLowerCase())}))},t.deleteContact=function(e){var n=e.target.id;t.setState((function(t){return{contacts:t.contacts.filter((function(t){return t.id!==n}))}}))},t}return Object(l.a)(n,[{key:"componentDidMount",value:function(){var t=function(t){try{var e=localStorage.getItem(t);return null===e?void 0:JSON.parse(e)}catch(n){console.log("Get state error: ",n.message)}}("contacts");t&&this.setState({contacts:t})}},{key:"componentDidUpdate",value:function(){!function(t,e){try{var n=JSON.stringify(e);localStorage.setItem(t,n)}catch(a){console.log("Set state error: ",a.message)}}("contacts",this.state.contacts)}},{key:"render",value:function(){return Object(h.jsx)(h.Fragment,{children:Object(h.jsxs)("div",{className:x.a.container,children:[Object(h.jsxs)("div",{className:x.a.addContacts,children:[Object(h.jsx)("h2",{children:"Add contact"}),Object(h.jsx)(_,{addContact:this.addContact,isThereContact:this.isThereContact})]}),Object(h.jsx)("h2",{className:x.a.title,children:"Find contact"}),Object(h.jsx)(C,{setFilterInState:this.setFilterInState,filter:this.state.filter}),Object(h.jsx)("h2",{children:"Contact list"}),Object(h.jsx)(f,{filtredContacts:this.filtredContacts,deleteContact:this.deleteContact})]})})}}]),n}(a.Component),F=A,k=function(){return Object(h.jsx)(F,{})};n(20);r.a.render(Object(h.jsx)(h.Fragment,{children:Object(h.jsx)(k,{})}),document.getElementById("root"))},7:function(t,e,n){t.exports={container:"Main_container__2BiCN",title:"Main_title__2LqxF"}},9:function(t,e,n){t.exports={li:"ContacatList_li__3nU74"}}},[[21,1,2]]]);
//# sourceMappingURL=main.b8280f9e.chunk.js.map