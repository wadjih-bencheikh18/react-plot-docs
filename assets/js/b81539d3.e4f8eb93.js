"use strict";(self.webpackChunkdocs_react_plot=self.webpackChunkdocs_react_plot||[]).push([[6077],{6678:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>y,contentTitle:()=>f,default:()=>P,frontMatter:()=>E,metadata:()=>b,toc:()=>g});var o=n(7462),a=n(7294),l=n(3905),r=n(2255),s=n(8154),i=n(814),c=n(1119);function u(){const[e,t]=(0,a.useState)();return(0,s.T1)({onStart:e=>{t({kind:"onStart",event:e})},onMove:e=>{t({kind:"onMove",event:e})},onEnd:e=>{t({kind:"onEnd",event:e})}}),a.createElement("div",{style:{display:"flex"}},a.createElement(s.XN,{width:300,height:300},a.createElement(s.eh,{data:[{x:1,y:1},{x:2,y:2},{x:3,y:3},{x:4,y:2},{x:5,y:1}]})),a.createElement(r.vu,{data:e,expandLevel:2,expandPaths:["$.event.coordinates","$.event.clampedCoordinates"]}))}const d="import React from 'react';\nimport { useState } from 'react';\nimport { ObjectInspector } from 'react-inspector';\nimport { LineSeries, Plot, PlotController, useStartMoveEnd } from 'react-plot';\nimport { TrackingResult } from 'react-plot/lib-esm/components/Tracking';\n\nfunction TrackablePlot() {\n  const [currentEvent, setCurrentEvent] = useState<{\n    kind: string;\n    event: TrackingResult;\n  }>();\n  useStartMoveEnd({\n    onStart: (event) => {\n      setCurrentEvent({ kind: 'onStart', event });\n    },\n    onMove: (event) => {\n      setCurrentEvent({ kind: 'onMove', event });\n    },\n    onEnd: (event) => {\n      setCurrentEvent({ kind: 'onEnd', event });\n    },\n  });\n  return (\n    <div style={{ display: 'flex' }}>\n      <Plot width={300} height={300}>\n        <LineSeries\n          data={[\n            { x: 1, y: 1 },\n            { x: 2, y: 2 },\n            { x: 3, y: 3 },\n            { x: 4, y: 2 },\n            { x: 5, y: 1 },\n          ]}\n        />\n      </Plot>\n      <ObjectInspector\n        data={currentEvent}\n        expandLevel={2}\n        expandPaths={['$.event.coordinates', '$.event.clampedCoordinates']}\n      />\n    </div>\n  );\n}\n\nexport default function UseStartMoveEnd() {\n  return (\n    <PlotController>\n      <TrackablePlot />\n    </PlotController>\n  );\n}\n",m=function(){return a.createElement(s.aE,null,a.createElement(u,null))};function p(e){const[t,n]=(0,a.useState)(!1);return a.createElement(a.Fragment,null,a.createElement("div",{className:"demo-example-wrapper"},a.createElement(m,null),a.createElement("div",{className:"demo-example-buttons"},a.createElement("button",{onClick:()=>n((e=>!e)),type:"button",style:{backgroundColor:t?"#dbeafe":void 0}},"Code"),e.noCodesandbox?null:a.createElement(c.Z,{name:"use-start-move-end",source:d,dependencies:{react:"^18.2.0","react-inspector":"^5.1.1","react-plot":"^0.20.4"}},(()=>a.createElement("button",{type:"submit"},"Open sandbox"))))),t&&a.createElement(i.Z,{className:"language-jsx"},d))}function x(){const[e,t]=(0,a.useState)(),n=(0,s.NU)(),o=(0,s.Dh)();return(0,a.useEffect)((()=>{t(o)}),[o]),a.createElement("div",{style:{display:"flex"}},a.createElement(s.XN,{width:300,height:300},a.createElement(s.eh,{data:[{x:1,y:1},{x:2,y:2},{x:3,y:3},{x:4,y:2},{x:5,y:1}]}),a.createElement(s.RD,{position:"left",id:"y"}),a.createElement(s.RD,{position:"bottom",id:"x"}),a.createElement(s.uN,null,n.annotations)),a.createElement(r.vu,{data:e,expandLevel:2}))}const k="import React, { useEffect } from 'react';\nimport { useState } from 'react';\nimport { ObjectInspector } from 'react-inspector';\nimport {\n  Annotations,\n  Axis,\n  LineSeries,\n  Plot,\n  PlotController,\n  usePlotControllerAxes,\n  useRectangularZoom,\n} from 'react-plot';\nimport { PlotAxesOverrides } from 'react-plot/lib-esm/contexts/plotController/usePlotOverrides';\n\nfunction TrackablePlot() {\n  const [axis, setAxis] = useState<PlotAxesOverrides>();\n  const zoom = useRectangularZoom();\n  const x = usePlotControllerAxes();\n  useEffect(() => {\n    setAxis(x);\n  }, [x]);\n  return (\n    <div style={{ display: 'flex' }}>\n      <Plot width={300} height={300}>\n        <LineSeries\n          data={[\n            { x: 1, y: 1 },\n            { x: 2, y: 2 },\n            { x: 3, y: 3 },\n            { x: 4, y: 2 },\n            { x: 5, y: 1 },\n          ]}\n        />\n        <Axis position=\"left\" id=\"y\" />\n        <Axis position=\"bottom\" id=\"x\" />\n        <Annotations>{zoom.annotations}</Annotations>\n      </Plot>\n      <ObjectInspector data={axis} expandLevel={2} />\n    </div>\n  );\n}\n\nexport default function UsePlotControllerAxes() {\n  return (\n    <PlotController>\n      <TrackablePlot />\n    </PlotController>\n  );\n}\n",v=function(){return a.createElement(s.aE,null,a.createElement(x,null))};function h(e){const[t,n]=(0,a.useState)(!1);return a.createElement(a.Fragment,null,a.createElement("div",{className:"demo-example-wrapper"},a.createElement(v,null),a.createElement("div",{className:"demo-example-buttons"},a.createElement("button",{onClick:()=>n((e=>!e)),type:"button",style:{backgroundColor:t?"#dbeafe":void 0}},"Code"),e.noCodesandbox?null:a.createElement(c.Z,{name:"use-plot-controller-axes",source:k,dependencies:{react:"^18.2.0","react-inspector":"^5.1.1","react-plot":"^0.20.4"}},(()=>a.createElement("button",{type:"submit"},"Open sandbox"))))),t&&a.createElement(i.Z,{className:"language-jsx"},k))}const E={},f="Basic",b={unversionedId:"hooks/basic",id:"hooks/basic",title:"Basic",description:"Low level hooks used by other hooks but can also be used natively.",source:"@site/docs/400_hooks/100_basic.md",sourceDirName:"400_hooks",slug:"/hooks/basic",permalink:"/hooks/basic",draft:!1,editUrl:"https://github.com/zakodium-oss/react-plot-docs/tree/main/docs/400_hooks/100_basic.md",tags:[],version:"current",sidebarPosition:100,frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Introduction",permalink:"/hooks/intro"},next:{title:"Draw",permalink:"/hooks/draw"}},y={},g=[{value:"useStartMoveEnd",id:"usestartmoveend",level:2},{value:"usePlotControllerAxes",id:"useplotcontrolleraxes",level:2}],C={toc:g};function P(e){let{components:t,...n}=e;return(0,l.kt)("wrapper",(0,o.Z)({},C,n,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("h1",{id:"basic"},"Basic"),(0,l.kt)("p",null,"Low level hooks used by other hooks but can also be used natively."),(0,l.kt)("p",null,"Currently we support the following basic hooks:"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},(0,l.kt)("a",{parentName:"strong",href:"/hooks/basic#usestartmoveend"},"useStartMoveEnd"))),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},(0,l.kt)("a",{parentName:"strong",href:"/hooks/basic#useplotcontrolleraxes"},"usePlotControllerAxes")))),(0,l.kt)("h2",{id:"usestartmoveend"},"useStartMoveEnd"),(0,l.kt)("p",null,"The low level hook ",(0,l.kt)("inlineCode",{parentName:"p"},"useStartMoveEnd")," allows to track the mouse."),(0,l.kt)("p",null,"It accepts 3 callbacks:"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"onStart: the mouse was clicked"),(0,l.kt)("li",{parentName:"ul"},"onMove: the mouse was dragged"),(0,l.kt)("li",{parentName:"ul"},"onEnd: the mouse was released")),(0,l.kt)("p",null,"In the following example we simply log different events."),(0,l.kt)(p,{mdxType:"UseStartMoveEndDemo"}),(0,l.kt)("h2",{id:"useplotcontrolleraxes"},"usePlotControllerAxes"),(0,l.kt)("p",null,"The low level hook ",(0,l.kt)("inlineCode",{parentName:"p"},"usePlotControllerAxes")," allows to track axis state (max, min) after any modification."),(0,l.kt)("p",null,"In the following example we simply log axes domain while using ",(0,l.kt)("strong",{parentName:"p"},(0,l.kt)("a",{parentName:"strong",href:"/hooks/functional#userectangularzoom"},"UseRectangularZoom")),"."),(0,l.kt)(h,{mdxType:"UsePlotControllerAxes"}))}P.isMDXComponent=!0}}]);