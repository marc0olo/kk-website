(window.webpackJsonp=window.webpackJsonp||[]).push([[2],{151:function(e,a,t){"use strict";t.r(a);var n=t(0),r=t.n(n),c=t(7),l=t.n(c),s=t(141),i=t.n(s),m=t(142),o=t.n(m),d=function(){return r.a.createElement("img",{src:"/img/logo.svg",className:o.a.container,alt:"logo"})},u=t(143),f=t.n(u),E=function(e){return r.a.createElement("div",{className:f.a.container+" "+e.className},e.providers.github?r.a.createElement("a",{href:e.providers.github,className:f.a.icon},r.a.createElement("i",{className:"fab fa-github"})):"",e.providers.twitter?r.a.createElement("a",{href:e.providers.twitter,className:f.a.icon},r.a.createElement("i",{className:"fab fa-twitter"})):"",e.providers.linkedin?r.a.createElement("a",{href:e.providers.linkedin,className:f.a.icon},r.a.createElement("i",{className:"fab fa-linkedin"})):"")},v=function(e){function a(){for(var a,t=arguments.length,n=new Array(t),r=0;r<t;r++)n[r]=arguments[r];return(a=e.call.apply(e,[this].concat(n))||this).state={scrolled:!1},a}l()(a,e);var t=a.prototype;return t.scrollHandler=function(e){e.currentTarget.pageYOffset>0?this.setState({scrolled:!0}):this.setState({scrolled:!1})},t.componentWillUnmount=function(){window.removeEventListener("scroll",this.scrollHandler.bind(this))},t.componentDidMount=function(){window.addEventListener("scroll",this.scrollHandler.bind(this))},t.render=function(){return r.a.createElement("div",{className:i.a.header+" "+(this.state.scrolled?i.a.scrolled:"")},r.a.createElement(d,null),r.a.createElement("div",{className:i.a.sitename},this.props.title),r.a.createElement(E,{className:i.a.socialinfo,providers:this.props.social}))},a}(n.Component);t(152);var p=t(144),N=t.n(p),b=t(145),g=t.n(b),h=function(e){return r.a.createElement("div",{className:g.a.container+" "+e.className},e.label)},k=t(146),w=t.n(k),j=function(e){return r.a.createElement("div",{className:w.a.container},e.tags.map(function(e,a){return r.a.createElement(h,{label:e,className:w.a.tag,key:a})}))},y=function(e){return r.a.createElement("div",{className:N.a.container,onClick:function(){var a;(a=e.project.links.website)&&(window.location.href=a)}},r.a.createElement("div",{className:N.a.name},e.project.project,r.a.createElement("div",{className:N.a.addionalIcons},e.project.links.docs?r.a.createElement("a",{href:e.project.links.docs,title:"Documentation"},r.a.createElement("i",{className:"fas fa-book"})):""),r.a.createElement(E,{className:N.a.socialLinks,providers:e.project.links})),r.a.createElement("div",{className:N.a.content},r.a.createElement("div",null,r.a.createElement("i",{className:"fas fa-calendar-alt",title:"since"})," ",e.project.year),r.a.createElement("div",null,e.project.description),r.a.createElement("div",null,e.project.work)),r.a.createElement(j,{tags:e.project.tags}))},D=t(147),L=t.n(D),H=function(e){return r.a.createElement("div",{className:L.a.container},e.items.map(function(e,a){var t=e.node;return r.a.createElement(y,{project:t,key:a})}))},M=t(148),S=t.n(M),T=t(149),Y=t.n(T),A=function(e){return r.a.createElement("div",{className:Y.a.container},r.a.createElement("div",{className:Y.a.avatar},e.member.avatar?r.a.createElement("img",{src:e.member.avatar,alt:"Avatar"}):r.a.createElement("i",{className:"fas fa-user-secret"})),r.a.createElement("div",{className:Y.a.content},r.a.createElement("div",{className:Y.a.name},e.member.name,r.a.createElement(E,{className:Y.a.socialLinks,providers:e.member.profiles})),r.a.createElement("div",null,r.a.createElement("img",{className:Y.a.logo,src:"/img/logo.svg",title:"kryptokraut",alt:"kryptokraut"})," since ",((a=e.member.joined)instanceof Date||(a=new Date(a)),a.toLocaleDateString())),r.a.createElement("div",null,r.a.createElement("i",{className:"fas fa-user"})," ",e.member.roles.join(" & ")),r.a.createElement("div",null,r.a.createElement("i",{className:"fas fa-building",title:"working at"})," ",r.a.createElement("a",{href:e.member.company.website},e.member.company.name))));var a},C=function(e){return r.a.createElement("div",{className:S.a.container},e.members.map(function(e,a){var t=e.node;return r.a.createElement(A,{member:t,key:a})}))};t.d(a,"query",function(){return J});a.default=function(e){var a=e.data;return r.a.createElement("div",null,r.a.createElement(v,{title:a.site.siteMetadata.title,social:a.site.siteMetadata.links}),r.a.createElement("div",{className:"content"},r.a.createElement("h2",null,"Team"),r.a.createElement(C,{members:a.allTeamYaml.edges}),r.a.createElement("h2",null,"Projects"),r.a.createElement(H,{items:a.allProjectsYaml.edges})))};var J="2193714129"},152:function(e,a,t){var n=t(25).f,r=Function.prototype,c=/^\s*function ([^ (]*)/;"name"in r||t(17)&&n(r,"name",{configurable:!0,get:function(){try{return(""+this).match(c)[1]}catch(e){return""}}})}}]);
//# sourceMappingURL=component---src-pages-index-js-5648399a46e683b2f748.js.map