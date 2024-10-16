"use strict";(self.webpackChunknotas_personales=self.webpackChunknotas_personales||[]).push([[8401],{1243:(e,t,n)=>{n.d(t,{A:()=>p});n(6540);var a=n(4164),s=n(7559),i=n(6972),r=n(9169),o=n(8774),l=n(1312),c=n(6025),d=n(4848);function u(e){return(0,d.jsx)("svg",{viewBox:"0 0 24 24",...e,children:(0,d.jsx)("path",{d:"M10 19v-5h4v5c0 .55.45 1 1 1h3c.55 0 1-.45 1-1v-7h1.7c.46 0 .68-.57.33-.87L12.67 3.6c-.38-.34-.96-.34-1.34 0l-8.36 7.53c-.34.3-.13.87.33.87H5v7c0 .55.45 1 1 1h3c.55 0 1-.45 1-1z",fill:"currentColor"})})}const m={breadcrumbHomeIcon:"breadcrumbHomeIcon_YNFT"};function h(){const e=(0,c.Ay)("/");return(0,d.jsx)("li",{className:"breadcrumbs__item",children:(0,d.jsx)(o.A,{"aria-label":(0,l.T)({id:"theme.docs.breadcrumbs.home",message:"Home page",description:"The ARIA label for the home page in the breadcrumbs"}),className:"breadcrumbs__link",href:e,children:(0,d.jsx)(u,{className:m.breadcrumbHomeIcon})})})}const b={breadcrumbsContainer:"breadcrumbsContainer_Z_bl"};function g(e){let{children:t,href:n,isLast:a}=e;const s="breadcrumbs__link";return a?(0,d.jsx)("span",{className:s,itemProp:"name",children:t}):n?(0,d.jsx)(o.A,{className:s,href:n,itemProp:"item",children:(0,d.jsx)("span",{itemProp:"name",children:t})}):(0,d.jsx)("span",{className:s,children:t})}function x(e){let{children:t,active:n,index:s,addMicrodata:i}=e;return(0,d.jsxs)("li",{...i&&{itemScope:!0,itemProp:"itemListElement",itemType:"https://schema.org/ListItem"},className:(0,a.A)("breadcrumbs__item",{"breadcrumbs__item--active":n}),children:[t,(0,d.jsx)("meta",{itemProp:"position",content:String(s+1)})]})}function p(){const e=(0,i.OF)(),t=(0,r.Dt)();return e?(0,d.jsx)("nav",{className:(0,a.A)(s.G.docs.docBreadcrumbs,b.breadcrumbsContainer),"aria-label":(0,l.T)({id:"theme.docs.breadcrumbs.navAriaLabel",message:"Breadcrumbs",description:"The ARIA label for the breadcrumbs"}),children:(0,d.jsxs)("ul",{className:"breadcrumbs",itemScope:!0,itemType:"https://schema.org/BreadcrumbList",children:[t&&(0,d.jsx)(h,{}),e.map(((t,n)=>{const a=n===e.length-1,s="category"===t.type&&t.linkUnlisted?void 0:t.href;return(0,d.jsx)(x,{active:a,index:n,addMicrodata:!!s,children:(0,d.jsx)(g,{href:s,isLast:a,children:t.label})},n)}))]})}):null}},7838:(e,t,n)=>{n.r(t),n.d(t,{default:()=>S});var a=n(6540),s=n(1003),i=n(9532),r=n(4848);const o=a.createContext(null);function l(e){let{children:t,content:n}=e;const s=function(e){return(0,a.useMemo)((()=>({metadata:e.metadata,frontMatter:e.frontMatter,assets:e.assets,contentTitle:e.contentTitle,toc:e.toc})),[e])}(n);return(0,r.jsx)(o.Provider,{value:s,children:t})}function c(){const e=(0,a.useContext)(o);if(null===e)throw new i.dV("DocProvider");return e}function d(){const{metadata:e,frontMatter:t,assets:n}=c();return(0,r.jsx)(s.be,{title:e.title,description:e.description,keywords:t.keywords,image:n.image??t.image})}var u=n(4164),m=n(4581),h=n(6929);function b(){const{metadata:e}=c();return(0,r.jsx)(h.A,{previous:e.previous,next:e.next})}var g=n(1878),x=n(4267),p=n(7559),v=n(1312),j=n(6133);const f={tags:"tags_jXut",tag:"tag_QGVx"};function A(e){let{tags:t}=e;return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)("b",{children:(0,r.jsx)(v.A,{id:"theme.tags.tagsListLabel",description:"The label alongside a tag list",children:"Tags:"})}),(0,r.jsx)("ul",{className:(0,u.A)(f.tags,"padding--none","margin-left--sm"),children:t.map((e=>(0,r.jsx)("li",{className:f.tag,children:(0,r.jsx)(j.A,{...e})},e.permalink)))})]})}var _=n(2153);function C(){const{metadata:e}=c(),{editUrl:t,lastUpdatedAt:n,lastUpdatedBy:a,tags:s}=e,i=s.length>0,o=!!(t||n||a);return i||o?(0,r.jsxs)("footer",{className:(0,u.A)(p.G.docs.docFooter,"docusaurus-mt-lg"),children:[i&&(0,r.jsx)("div",{className:(0,u.A)("row margin-top--sm",p.G.docs.docFooterTagsRow),children:(0,r.jsx)("div",{className:"col",children:(0,r.jsx)(A,{tags:s})})}),o&&(0,r.jsx)(_.A,{className:(0,u.A)("margin-top--sm",p.G.docs.docFooterEditMetaRow),editUrl:t,lastUpdatedAt:n,lastUpdatedBy:a})]}):null}var N=n(1422),k=n(5195);const T={tocCollapsibleButton:"tocCollapsibleButton_TO0P",tocCollapsibleButtonExpanded:"tocCollapsibleButtonExpanded_MG3E"};function L(e){let{collapsed:t,...n}=e;return(0,r.jsx)("button",{type:"button",...n,className:(0,u.A)("clean-btn",T.tocCollapsibleButton,!t&&T.tocCollapsibleButtonExpanded,n.className),children:(0,r.jsx)(v.A,{id:"theme.TOCCollapsible.toggleButtonLabel",description:"The label used by the button on the collapsible TOC component",children:"On this page"})})}const y={tocCollapsible:"tocCollapsible_ETCw",tocCollapsibleContent:"tocCollapsibleContent_vkbj",tocCollapsibleExpanded:"tocCollapsibleExpanded_sAul"};function w(e){let{toc:t,className:n,minHeadingLevel:a,maxHeadingLevel:s}=e;const{collapsed:i,toggleCollapsed:o}=(0,N.u)({initialState:!0});return(0,r.jsxs)("div",{className:(0,u.A)(y.tocCollapsible,!i&&y.tocCollapsibleExpanded,n),children:[(0,r.jsx)(L,{collapsed:i,onClick:o}),(0,r.jsx)(N.N,{lazy:!0,className:y.tocCollapsibleContent,collapsed:i,children:(0,r.jsx)(k.A,{toc:t,minHeadingLevel:a,maxHeadingLevel:s})})]})}const M={tocMobile:"tocMobile_ITEo"};function B(){const{toc:e,frontMatter:t}=c();return(0,r.jsx)(w,{toc:e,minHeadingLevel:t.toc_min_heading_level,maxHeadingLevel:t.toc_max_heading_level,className:(0,u.A)(p.G.docs.docTocMobile,M.tocMobile)})}var I=n(7763);function V(){const{toc:e,frontMatter:t}=c();return(0,r.jsx)(I.A,{toc:e,minHeadingLevel:t.toc_min_heading_level,maxHeadingLevel:t.toc_max_heading_level,className:p.G.docs.docTocDesktop})}var H=n(1107),E=n(7910);function G(e){let{children:t}=e;const n=function(){const{metadata:e,frontMatter:t,contentTitle:n}=c();return t.hide_title||void 0!==n?null:e.title}();return(0,r.jsxs)("div",{className:(0,u.A)(p.G.docs.docMarkdown,"markdown"),children:[n&&(0,r.jsx)("header",{children:(0,r.jsx)(H.A,{as:"h1",children:n})}),(0,r.jsx)(E.A,{children:t})]})}var R=n(1243),F=n(1689);const P={docItemContainer:"docItemContainer_Djhp",docItemCol:"docItemCol_VOVn"};function D(e){let{children:t}=e;const n=function(){const{frontMatter:e,toc:t}=c(),n=(0,m.l)(),a=e.hide_table_of_contents,s=!a&&t.length>0;return{hidden:a,mobile:s?(0,r.jsx)(B,{}):void 0,desktop:!s||"desktop"!==n&&"ssr"!==n?void 0:(0,r.jsx)(V,{})}}(),{metadata:a}=c();return(0,r.jsxs)("div",{className:"row",children:[(0,r.jsxs)("div",{className:(0,u.A)("col",!n.hidden&&P.docItemCol),children:[(0,r.jsx)(F.A,{metadata:a}),(0,r.jsx)(g.A,{}),(0,r.jsxs)("div",{className:P.docItemContainer,children:[(0,r.jsxs)("article",{children:[(0,r.jsx)(R.A,{}),(0,r.jsx)(x.A,{}),n.mobile,(0,r.jsx)(G,{children:t}),(0,r.jsx)(C,{})]}),(0,r.jsx)(b,{})]})]}),n.desktop&&(0,r.jsx)("div",{className:"col col--3",children:n.desktop})]})}function S(e){const t=`docs-doc-id-${e.content.metadata.id}`,n=e.content;return(0,r.jsx)(l,{content:e.content,children:(0,r.jsxs)(s.e3,{className:t,children:[(0,r.jsx)(d,{}),(0,r.jsx)(D,{children:(0,r.jsx)(n,{})})]})})}},6929:(e,t,n)=>{n.d(t,{A:()=>l});n(6540);var a=n(1312),s=n(4164),i=n(8774),r=n(4848);function o(e){const{permalink:t,title:n,subLabel:a,isNext:o}=e;return(0,r.jsxs)(i.A,{className:(0,s.A)("pagination-nav__link",o?"pagination-nav__link--next":"pagination-nav__link--prev"),to:t,children:[a&&(0,r.jsx)("div",{className:"pagination-nav__sublabel",children:a}),(0,r.jsx)("div",{className:"pagination-nav__label",children:n})]})}function l(e){const{previous:t,next:n}=e;return(0,r.jsxs)("nav",{className:"pagination-nav docusaurus-mt-lg","aria-label":(0,a.T)({id:"theme.docs.paginator.navAriaLabel",message:"Docs pages",description:"The ARIA label for the docs pagination"}),children:[t&&(0,r.jsx)(o,{...t,subLabel:(0,r.jsx)(a.A,{id:"theme.docs.paginator.previous",description:"The label used to navigate to the previous doc",children:"Previous"})}),n&&(0,r.jsx)(o,{...n,subLabel:(0,r.jsx)(a.A,{id:"theme.docs.paginator.next",description:"The label used to navigate to the next doc",children:"Next"}),isNext:!0})]})}},4267:(e,t,n)=>{n.d(t,{A:()=>l});n(6540);var a=n(4164),s=n(1312),i=n(7559),r=n(3025),o=n(4848);function l(e){let{className:t}=e;const n=(0,r.r)();return n.badge?(0,o.jsx)("span",{className:(0,a.A)(t,i.G.docs.docVersionBadge,"badge badge--secondary"),children:(0,o.jsx)(s.A,{id:"theme.docs.versionBadge.label",values:{versionLabel:n.label},children:"Version: {versionLabel}"})}):null}},1878:(e,t,n)=>{n.d(t,{A:()=>x});n(6540);var a=n(4164),s=n(4586),i=n(8774),r=n(1312),o=n(4070),l=n(7559),c=n(3886),d=n(3025),u=n(4848);const m={unreleased:function(e){let{siteTitle:t,versionMetadata:n}=e;return(0,u.jsx)(r.A,{id:"theme.docs.versions.unreleasedVersionLabel",description:"The label used to tell the user that he's browsing an unreleased doc version",values:{siteTitle:t,versionLabel:(0,u.jsx)("b",{children:n.label})},children:"This is unreleased documentation for {siteTitle} {versionLabel} version."})},unmaintained:function(e){let{siteTitle:t,versionMetadata:n}=e;return(0,u.jsx)(r.A,{id:"theme.docs.versions.unmaintainedVersionLabel",description:"The label used to tell the user that he's browsing an unmaintained doc version",values:{siteTitle:t,versionLabel:(0,u.jsx)("b",{children:n.label})},children:"This is documentation for {siteTitle} {versionLabel}, which is no longer actively maintained."})}};function h(e){const t=m[e.versionMetadata.banner];return(0,u.jsx)(t,{...e})}function b(e){let{versionLabel:t,to:n,onClick:a}=e;return(0,u.jsx)(r.A,{id:"theme.docs.versions.latestVersionSuggestionLabel",description:"The label used to tell the user to check the latest version",values:{versionLabel:t,latestVersionLink:(0,u.jsx)("b",{children:(0,u.jsx)(i.A,{to:n,onClick:a,children:(0,u.jsx)(r.A,{id:"theme.docs.versions.latestVersionLinkLabel",description:"The label used for the latest version suggestion link label",children:"latest version"})})})},children:"For up-to-date documentation, see the {latestVersionLink} ({versionLabel})."})}function g(e){let{className:t,versionMetadata:n}=e;const{siteConfig:{title:i}}=(0,s.A)(),{pluginId:r}=(0,o.vT)({failfast:!0}),{savePreferredVersionName:d}=(0,c.g1)(r),{latestDocSuggestion:m,latestVersionSuggestion:g}=(0,o.HW)(r),x=m??(p=g).docs.find((e=>e.id===p.mainDocId));var p;return(0,u.jsxs)("div",{className:(0,a.A)(t,l.G.docs.docVersionBanner,"alert alert--warning margin-bottom--md"),role:"alert",children:[(0,u.jsx)("div",{children:(0,u.jsx)(h,{siteTitle:i,versionMetadata:n})}),(0,u.jsx)("div",{className:"margin-top--md",children:(0,u.jsx)(b,{versionLabel:g.label,to:x.path,onClick:()=>d(g.name)})})]})}function x(e){let{className:t}=e;const n=(0,d.r)();return n.banner?(0,u.jsx)(g,{className:t,versionMetadata:n}):null}},6133:(e,t,n)=>{n.d(t,{A:()=>o});n(6540);var a=n(4164),s=n(8774);const i={tag:"tag_zVej",tagRegular:"tagRegular_sFm0",tagWithCount:"tagWithCount_h2kH"};var r=n(4848);function o(e){let{permalink:t,label:n,count:o,description:l}=e;return(0,r.jsxs)(s.A,{href:t,title:l,className:(0,a.A)(i.tag,o?i.tagWithCount:i.tagRegular),children:[n,o&&(0,r.jsx)("span",{children:o})]})}},4317:(e,t,n)=>{n.d(t,{A:()=>i});var a=n(4848);const s={default:"var(--ifm-color-emphasis-200)",pink:"rgba(255, 0, 172, 0.5)",red:"rgba(255, 0, 0, 0.5)",blue:"rgba(0, 204, 255, 0.5)",green:"rgba(0, 255, 0, 0.5)",yellow:"rgba(255, 247, 0 , 0.5)",orange:"rgba(255, 165, 0, 0.5)",cyan:"rgba(0, 255, 205, 0.5)",magenta:"rgba(255, 0, 255, 0.5)",darkBlue:"rgba(0, 89, 255, 0.5)",white:"rgba(255, 255, 255, 0.5)",solid:{pink:"rgba(255, 0, 172, 1)",red:"rgba(255, 0, 0, 1)",blue:"rgba(0, 204, 255, 1)",green:"rgba(0, 255, 0, 1)",yellow:"rgba(255, 247, 0, 1)",orange:"rgba(255, 165, 0, 1)",cyan:"rgba(0, 255, 205, 1)",magenta:"rgba(255, 0, 255, 1)",darkBlue:"rgba(0, 89, 255, 1)",white:"rgba(255, 255, 255, 1)"}};function i(e){let{children:t,color:n="default",solidBackground:i=!1,header:r="",footer:o="",textAlign:l="left"}=e;const c=s[n]?s[n]:s.default,d=function(e,t){if(void 0===t&&(t=!1),t)return s.solid[e]||s.default;{const t={default:"var(--ifm-color-emphasis-100)",pink:"rgba(255, 0, 172, 0.05)",red:"rgba(255, 0, 0, 0.05)",blue:"rgba(0, 204, 255, 0.05)",green:"rgba(0, 255, 0, 0.05)",yellow:"rgba(255, 247, 0 , 0.05)",orange:"rgba(255, 165, 0, 0.05)",cyan:"rgba(0, 255, 205, 0.05)",magenta:"rgba(255, 0, 255, 0.05)",darkBlue:"rgba(0, 89, 255, 0.05)",white:"rgba(255, 255, 255, 0.05)"};return t[e]||t.default}}(n,i);return(0,a.jsxs)("div",{style:{backgroundColor:d,borderRadius:"5px",padding:"20px 20px 0px 20px",margin:"5px 0px 20px 0px",border:`1px solid ${c}`,color:"var(--ifm-color-emphasis-900)",textAlign:l},children:[(0,a.jsx)("i",{style:{backgroundColor:"var(--ifm-color-emphasis-100)",color:"var(--ifm-color-emphasis-900)"},children:r}),t,(0,a.jsx)("i",{style:{backgroundColor:"var(--ifm-color-emphasis-100)",color:"var(--ifm-color-emphasis-900)"},children:o})]})}},4448:(e,t,n)=>{n.d(t,{A:()=>C});var a=n(6540),s=n(5260),i=n(2364),r=n(3230),o=n(4848);var l=n(8774);var c=n(1622);function d(e){const t=a.Children.toArray(e.children),n=t.find((e=>a.isValidElement(e)&&"summary"===e.type)),s=(0,o.jsx)(o.Fragment,{children:t.filter((e=>e!==n))});return(0,o.jsx)(c.A,{...e,summary:n,children:s})}var u=n(1107);function m(e){return(0,o.jsx)(u.A,{...e})}var h=n(4164);const b={containsTaskList:"containsTaskList_kggB"};function g(e){if(void 0!==e)return(0,h.A)(e,e?.includes("contains-task-list")&&b.containsTaskList)}var x=n(3427);const p={img:"img_CujE"};var v=n(7293),j=n(418),f=n(4317),A=n(1470),_=n(9365);const C={Head:s.A,details:d,Details:d,code:function(e){return function(e){return void 0!==e.children&&a.Children.toArray(e.children).every((e=>"string"==typeof e&&!e.includes("\n")))}(e)?(0,o.jsx)(r.A,{...e}):(0,o.jsx)(i.A,{...e})},a:function(e){return(0,o.jsx)(l.A,{...e})},pre:function(e){return(0,o.jsx)(o.Fragment,{children:e.children})},ul:function(e){return(0,o.jsx)("ul",{...e,className:g(e.className)})},li:function(e){return(0,x.A)().collectAnchor(e.id),(0,o.jsx)("li",{...e})},img:function(e){return(0,o.jsx)("img",{decoding:"async",loading:"lazy",...e,className:(t=e.className,(0,h.A)(t,p.img))});var t},h1:e=>(0,o.jsx)(m,{as:"h1",...e}),h2:e=>(0,o.jsx)(m,{as:"h2",...e}),h3:e=>(0,o.jsx)(m,{as:"h3",...e}),h4:e=>(0,o.jsx)(m,{as:"h4",...e}),h5:e=>(0,o.jsx)(m,{as:"h5",...e}),h6:e=>(0,o.jsx)(m,{as:"h6",...e}),admonition:v.A,mermaid:j.A,Card:f.A,Row:function(e){let{children:t}=e;return(0,o.jsx)("div",{style:{display:"flex",justifyContent:"-moz-initial",paddingBottom:"20px",paddingRight:"50px",gap:"25px"},children:t})},Tabs:A.A,TabItem:_.A}}}]);