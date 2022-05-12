"use strict";(self.webpackChunkdocs_react_plot=self.webpackChunkdocs_react_plot||[]).push([[570],{3094:function(t,e,n){n.r(e),n.d(e,{assets:function(){return b},contentTitle:function(){return x},default:function(){return N},frontMatter:function(){return g},metadata:function(){return k},toc:function(){return h}});var a=n(7462),r=n(3366),o=n(7294),i=n(3905),s=n(1465),l=n(9655),m=n(1736),c=n(1119),p="import React from 'react';\nimport { Annotations, Axis, LineSeries, Plot } from 'react-plot';\nimport { Line } from 'react-plot/lib-esm/components/Annotations/Line';\n\nexport default function SimpleExample() {\n  return (\n    <Plot width={300} height={300}>\n      <LineSeries\n        data={[\n          { x: 1, y: 1 },\n          { x: 2, y: 5 },\n          { x: 3, y: 1 },\n          { x: 4, y: 8 },\n          { x: 5, y: 3 },\n        ]}\n      />\n      <Axis position=\"bottom\" />\n      <Axis position=\"left\" />\n      <Annotations>\n        <Line x1={2} y1={3} x2={6} y2={5} />\n      </Annotations>\n    </Plot>\n  );\n}\n",u=function(){return o.createElement(s.XN,{width:300,height:300},o.createElement(s.eh,{data:[{x:1,y:1},{x:2,y:5},{x:3,y:1},{x:4,y:8},{x:5,y:3}]}),o.createElement(s.RD,{position:"bottom"}),o.createElement(s.RD,{position:"left"}),o.createElement(s.uN,null,o.createElement(l.x,{x1:2,y1:3,x2:6,y2:5})))};function d(t){var e=(0,o.useState)(!1),n=e[0],a=e[1];return o.createElement(o.Fragment,null,o.createElement("div",{className:"demo-example-wrapper"},o.createElement(u,null),o.createElement("div",{className:"demo-example-buttons"},o.createElement("button",{onClick:function(){return a((function(t){return!t}))},type:"button",style:{backgroundColor:n?"#dbeafe":void 0}},"Code"),t.noCodesandbox?null:o.createElement(c.Z,{name:"simple-example",source:p,dependencies:{react:"^17.0.2","react-plot":"^0.17.1"}},(function(){return o.createElement("button",{type:"submit"},"Open sandbox")})))),n&&o.createElement(m.Z,{className:"language-jsx"},p))}var f=["components"],g={},x="Basics",k={unversionedId:"gettingStarted/basics",id:"gettingStarted/basics",title:"Basics",description:"There are many component in react-plot divided to 5 basic categories in:",source:"@site/docs/050_gettingStarted/100_basics.md",sourceDirName:"050_gettingStarted",slug:"/gettingStarted/basics",permalink:"/gettingStarted/basics",editUrl:"https://github.com/zakodium-oss/react-plot-docs/tree/main/docs/050_gettingStarted/100_basics.md",tags:[],version:"current",sidebarPosition:100,frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Installtion",permalink:"/gettingStarted/installation"},next:{title:"Plot",permalink:"/plot"}},b={},h=[{value:"Simple example",id:"simple-example",level:2}],y={toc:h};function N(t){var e=t.components,n=(0,r.Z)(t,f);return(0,i.kt)("wrapper",(0,a.Z)({},y,n,{components:e,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"basics"},"Basics"),(0,i.kt)("p",null,"There are many component in ",(0,i.kt)("inlineCode",{parentName:"p"},"react-plot")," divided to 5 basic categories in:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},(0,i.kt)("a",{parentName:"strong",href:"/plot"},"Plot"))," : the container of all other components"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},(0,i.kt)("a",{parentName:"strong",href:"/series/intro"},"Series"))," : branch of components allow us to add diffrent Graphs"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},(0,i.kt)("a",{parentName:"strong",href:"/axes/intro"},"Axes"))," : component that represent plot axis"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},(0,i.kt)("a",{parentName:"strong",href:"/annotations/intro"},"Annotations"))," : where we can add diffrent shapes to our plot"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},(0,i.kt)("a",{parentName:"strong",href:"/illusrations/intro"},"Illustrations"))," : allows to explain plot formmating")),(0,i.kt)("h2",{id:"simple-example"},"Simple example"),(0,i.kt)(d,{mdxType:"SimpleExample"}))}N.isMDXComponent=!0}}]);