(this.webpackJsonpportfolio=this.webpackJsonpportfolio||[]).push([[0],[,,function(e,t,a){e.exports={contentContainer:"App_contentContainer__1Uo_h",sectionTitle:"App_sectionTitle__17LEU"}},,,function(e,t,a){e.exports={headerNav:"Navigation_headerNav__3PJFp",headerNavList:"Navigation_headerNavList__uabL8",headerNavItem:"Navigation_headerNavItem__2Xb8G",headerNavLink:"Navigation_headerNavLink__ZlIjG"}},function(e,t,a){e.exports={socialsContainer:"Socials_socialsContainer__UdHn-",socialLink:"Socials_socialLink__FsGEk",socialIcon:"Socials_socialIcon__2TD6T"}},,,function(e,t,a){e.exports={projectItemContainer:"ProjectItem_projectItemContainer__2sHBl",projectItemImage:"ProjectItem_projectItemImage__1qwFz",projectItemLink:"ProjectItem_projectItemLink__2S9nL"}},,function(e,t,a){e.exports={sectionContacts:"Contacts_sectionContacts__26DC_",contactsContainer:"Contacts_contactsContainer__1Ig63",contactsForm:"Contacts_contactsForm__2-6-v",contactsButton:"Contacts_contactsButton__1cXqg"}},,,,function(e,t,a){e.exports={sectionAbout:"About_sectionAbout__32VAQ",aboutContainer:"About_aboutContainer__1CF1S",aboutArticle:"About_aboutArticle__20-wA"}},function(e,t,a){e.exports={sectionSkills:"Skills_sectionSkills__2zN7L",skillsContainer:"Skills_skillsContainer__3tRlD",skillsItemsContainer:"Skills_skillsItemsContainer__IDj5k"}},function(e,t,a){e.exports={skillItemContainer:"SkillItem_skillItemContainer__xGjqd",skillItemImage:"SkillItem_skillItemImage__1HyBK"}},function(e,t,a){e.exports={sectionProjects:"Projects_sectionProjects__3osgO",projectsContainer:"Projects_projectsContainer__3h6ym",projectsItemsContainer:"Projects_projectsItemsContainer__3ttVD"}},,function(e,t,a){e.exports={footer:"Footer_footer__1w0lV",footerContainer:"Footer_footerContainer__1s-3l"}},,,,,,,,,function(e,t,a){e.exports={header:"Header_header__1VCKf"}},,,,,,,,,function(e,t,a){},,,,,,,function(e,t,a){"use strict";a.r(t);var c=a(1),s=a.n(c),n=a(22),i=a.n(n),o=a(21),r=a(24),l=a(26),j=a(10);o.a.use(r.a).use(l.a).use(j.e).init({fallbackLng:"en",debug:!1,detection:{order:["queryString","cookie"],caches:["cookie"]},interpolation:{escapeValue:!1}});o.a,a(37),a(38);var m=a(2),b=a.n(m),d=a(47),h=a(29),u=a.n(h),p=a(5),_=a.n(p),O=a(0),x=s.a.memo((function(){var e=Object(d.a)().t;return Object(O.jsx)("nav",{className:_.a.headerNav,children:Object(O.jsxs)("ul",{className:_.a.headerNavList,children:[Object(O.jsx)("li",{className:_.a.headerNavItem,children:Object(O.jsx)("a",{className:_.a.headerNavLink,href:"#about",children:e("nav.about")})}),Object(O.jsx)("li",{className:_.a.headerNavItem,children:Object(O.jsx)("a",{className:_.a.headerNavLink,href:"#skills",children:e("nav.skills")})}),Object(O.jsx)("li",{className:_.a.headerNavItem,children:Object(O.jsx)("a",{className:_.a.headerNavLink,href:"#projects",children:e("nav.projects")})}),Object(O.jsx)("li",{className:_.a.headerNavItem,children:Object(O.jsx)("a",{className:_.a.headerNavLink,href:"#contacts",children:e("nav.contacts")})})]})})})),N=s.a.memo((function(e){var t=e.changeLanguageCallback,a=function(e){t(e.currentTarget.innerHTML.toLowerCase())};return Object(O.jsx)("header",{className:u.a.header,children:Object(O.jsxs)("div",{className:b.a.contentContainer,children:[Object(O.jsx)("button",{onClick:a,children:"EN"}),Object(O.jsx)("button",{onClick:a,children:"RU"}),Object(O.jsx)(x,{})]})})})),g=a(15),v=a.n(g),k=s.a.memo((function(){var e=Object(d.a)().t;return Object(O.jsx)("section",{className:v.a.sectionAbout,id:"about",children:Object(O.jsxs)("div",{className:[b.a.contentContainer,v.a.aboutContainer].join(" "),children:[Object(O.jsxs)("article",{className:v.a.aboutArticle,children:[Object(O.jsx)("h1",{children:e("about.fullName")}),Object(O.jsx)("p",{children:e("about.subtitle")})]}),Object(O.jsx)("img",{src:"/assets/images/cat.jpg",alt:"Margarita Trutneva",width:"230",height:"200"})]})})})),f=a(46),C=a(16),I=a.n(C),L=a(17),S=a.n(L),T=s.a.memo((function(e){var t=e.title,a=e.imageSrc,c=Object(d.a)().t;return Object(O.jsxs)("div",{className:S.a.skillItemContainer,children:[Object(O.jsx)("div",{className:S.a.skillItemImage,style:{backgroundImage:"url(".concat(a,")")}}),Object(O.jsx)("article",{className:S.a.skillItemDescription,children:c("skills.".concat(t.toLowerCase()))})]})})),A=[{id:Object(f.a)(),title:"HTML",imageSrc:"/assets/logos/html5.svg"},{id:Object(f.a)(),title:"CSS",imageSrc:"/assets/logos/css3.svg"},{id:Object(f.a)(),title:"React",imageSrc:"/assets/logos/react.svg"}],D=s.a.memo((function(){var e=Object(d.a)().t,t=Object(c.useMemo)((function(){return A.map((function(e){return Object(O.jsx)(T,{id:e.id,title:e.title,imageSrc:e.imageSrc},e.id)}))}),[A]);return Object(O.jsx)("section",{className:I.a.sectionSkills,id:"skills",children:Object(O.jsxs)("div",{className:[b.a.contentContainer,I.a.skillsContainer].join(" "),children:[Object(O.jsx)("h2",{className:b.a.sectionTitle,children:e("skills.title")}),Object(O.jsx)("div",{className:I.a.skillsItemsContainer,children:t})]})})})),F=a(18),P=a.n(F),y=a(9),w=a.n(y),q=s.a.memo((function(e){var t=e.projectImageSrc,a=e.projectDescription,c=e.projectLink,s=e.projectTitle,n=Object(d.a)().t;return Object(O.jsxs)("div",{className:w.a.projectItemContainer,children:[Object(O.jsx)("div",{style:{backgroundImage:"url(".concat(t,")")},className:w.a.projectItemImage}),Object(O.jsx)("a",{className:w.a.projectItemLink,href:c,children:n("projects.link")}),Object(O.jsx)("h3",{className:w.a.projectItemTitle,children:s}),Object(O.jsx)("article",{className:w.a.projectItemDescription,children:n("projects.".concat(a))})]})})),B=[{id:Object(f.a)(),projectImageSrc:"/assets/images/qr-menu.png",projectLink:"https://qr-menu-clone-admin.herokuapp.com/dashboard",projectTitle:"QR Menu",projectDescription:"qr-menu"},{id:Object(f.a)(),projectImageSrc:"/assets/images/covid.png",projectLink:"https://rolling-scopes-school.github.io/grenzen-JS2020Q3/covid-dashboard/",projectTitle:"Covid-19 Dashboard",projectDescription:"covid-19"}],M=s.a.memo((function(){var e=Object(d.a)().t,t=Object(c.useMemo)((function(){return B.map((function(e){return Object(O.jsx)(q,{id:e.id,projectImageSrc:e.projectImageSrc,projectLink:e.projectLink,projectTitle:e.projectTitle,projectDescription:e.projectDescription},e.id)}))}),[B]);return Object(O.jsx)("section",{className:P.a.sectionProjects,id:"projects",children:Object(O.jsxs)("div",{className:[b.a.contentContainer,P.a.projectsContainer].join(" "),children:[Object(O.jsx)("h2",{className:b.a.sectionTitle,children:e("projects.title")}),Object(O.jsx)("div",{className:P.a.projectsItemsContainer,children:t})]})})})),H=a(11),V=a.n(H),E=s.a.memo((function(){var e=Object(d.a)().t;return Object(O.jsx)("section",{className:V.a.sectionContacts,id:"contacts",children:Object(O.jsxs)("div",{className:[b.a.contentContainer,V.a.contactsContainer].join(" "),children:[Object(O.jsx)("h2",{className:b.a.sectionTitle,children:e("contacts.title")}),Object(O.jsxs)("form",{className:V.a.contactsForm,action:"",children:[Object(O.jsx)("input",{type:"text"}),Object(O.jsx)("input",{type:"text"}),Object(O.jsx)("textarea",{rows:5}),Object(O.jsx)("input",{className:V.a.contactsButton,type:"submit",value:"".concat(e("contacts.button"))})]})]})})})),G=s.a.memo((function(){return Object(O.jsxs)("main",{children:[Object(O.jsx)(k,{}),Object(O.jsx)(D,{}),Object(O.jsx)(M,{}),Object(O.jsx)(E,{})]})})),J=a(20),R=a.n(J),U=a(6),z=a.n(U),Q=a(12),K=s.a.memo((function(){return Object(O.jsxs)("div",{className:z.a.socialsContainer,children:[Object(O.jsx)("a",{className:z.a.socialLink,href:"",children:Object(O.jsx)(Q.b,{className:z.a.socialIcon})}),Object(O.jsx)("a",{className:z.a.socialLink,href:"",children:Object(O.jsx)(Q.a,{className:z.a.socialIcon})}),Object(O.jsx)("a",{className:z.a.socialLink,href:"",children:Object(O.jsx)(Q.c,{className:z.a.socialIcon})}),Object(O.jsx)("a",{className:z.a.socialLink,href:"",children:Object(O.jsx)(Q.d,{className:z.a.socialIcon})})]})})),X=s.a.memo((function(){var e=Object(d.a)().t;return Object(O.jsx)("footer",{className:R.a.footer,children:Object(O.jsxs)("div",{className:[b.a.contentContainer,R.a.footerContainer].join(" "),children:[Object(O.jsx)("h2",{className:b.a.sectionTitle,children:e("footer.fullName")}),Object(O.jsx)(K,{}),Object(O.jsx)("p",{children:e("footer.copyright")})]})})})),Z=s.a.memo((function(){var e=Object(d.a)().i18n;return Object(O.jsxs)("div",{className:b.a.App,children:[Object(O.jsx)(N,{changeLanguageCallback:function(t){e.changeLanguage(t)}}),Object(O.jsx)(G,{}),Object(O.jsx)(X,{})]})})),W=function(e){e&&e instanceof Function&&a.e(3).then(a.bind(null,48)).then((function(t){var a=t.getCLS,c=t.getFID,s=t.getFCP,n=t.getLCP,i=t.getTTFB;a(e),c(e),s(e),n(e),i(e)}))};i.a.render(Object(O.jsx)(s.a.StrictMode,{children:Object(O.jsx)(c.Suspense,{fallback:Object(O.jsx)("div",{children:"Loading..."}),children:Object(O.jsx)(Z,{})})}),document.getElementById("root")),W()}],[[45,1,2]]]);
//# sourceMappingURL=main.c359f704.chunk.js.map