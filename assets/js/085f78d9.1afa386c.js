"use strict";(self.webpackChunkdocs_react_plot=self.webpackChunkdocs_react_plot||[]).push([[9959],{9609:(t,e,n)=>{n.r(e),n.d(e,{assets:()=>x,contentTitle:()=>c,default:()=>y,frontMatter:()=>k,metadata:()=>b,toc:()=>N});var a=n(7462),l=n(7294),o=n(3905),i=n(8154),r=n(2854),s=n(814),m=n(1119);const p="import React from 'react';\nimport {\n  AnnotationBoxPlotProps,\n  Plot,\n  Annotations,\n  Annotation,\n  SeriesPoint,\n} from 'react-plot';\nimport { ScatterSeries, Axis } from 'react-plot';\nimport { xBoxPlot, createRandomArray } from 'ml-spectra-processing';\n\nexport default function BoxPlotExample() {\n  // dynamically generate some normally distributed data about the arbritrary value of 300\n  const seed1 = 2359;\n  const seed2 = 787486;\n  const numPoints = 100;\n\n  const data = createRandomArray({\n    distribution: 'normal',\n    seed: seed1,\n    mean: 300,\n    standardDeviation: 100,\n    length: numPoints,\n  });\n\n  const jitter = createRandomArray({\n    distribution: 'normal',\n    seed: seed2,\n    mean: 0,\n    standardDeviation: 0.1,\n    length: numPoints,\n  });\n\n  var points: SeriesPoint[] = [];\n  data.forEach((value, i) => {\n    points.push({ x: jitter[i], y: value });\n  });\n\n  const boxPlotStats = xBoxPlot(data);\n\n  const props: AnnotationBoxPlotProps = {\n    max: boxPlotStats.max,\n    min: boxPlotStats.min,\n    q1: boxPlotStats.q1,\n    median: boxPlotStats.median,\n    q3: boxPlotStats.q3,\n    width: 1.0,\n    y: 0,\n    xAxis: 'y',\n    yAxis: 'x',\n    medianColor: 'orange',\n    medianStyle: { strokeWidth: 4 },\n    minMaxStyle: { strokeWidth: 2 },\n    minMaxColor: 'blue',\n  };\n\n  return (\n    <Plot width={300} height={300}>\n      <Annotations>\n        <Annotation.BoxPlot {...props} />\n      </Annotations>\n      <ScatterSeries\n        data={points}\n        markerStyle={{ opacity: 0.3, fill: 'green' }}\n      />\n      <Axis id=\"x\" position=\"bottom\" min={-2} max={2} />\n      <Axis id=\"y\" position=\"left\" min={0} max={600} />\n    </Plot>\n  );\n}\n",d=function(){const t=(0,r.v4)({distribution:"normal",seed:2359,mean:300,standardDeviation:100,length:100}),e=(0,r.v4)({distribution:"normal",seed:787486,mean:0,standardDeviation:.1,length:100});var n=[];t.forEach(((t,a)=>{n.push({x:e[a],y:t})}));const a=(0,r.uM)(t),o={max:a.max,min:a.min,q1:a.q1,median:a.median,q3:a.q3,width:1,y:0,xAxis:"y",yAxis:"x",medianColor:"orange",medianStyle:{strokeWidth:4},minMaxStyle:{strokeWidth:2},minMaxColor:"blue"};return l.createElement(i.XN,{width:300,height:300},l.createElement(i.uN,null,l.createElement(i.q6.BoxPlot,o)),l.createElement(i.nC,{data:n,markerStyle:{opacity:.3,fill:"green"}}),l.createElement(i.RD,{id:"x",position:"bottom",min:-2,max:2}),l.createElement(i.RD,{id:"y",position:"left",min:0,max:600}))};function u(t){const[e,n]=(0,l.useState)(!1);return l.createElement(l.Fragment,null,l.createElement("div",{className:"demo-example-wrapper"},l.createElement(d,null),l.createElement("div",{className:"demo-example-buttons"},l.createElement("button",{onClick:()=>n((t=>!t)),type:"button",style:{backgroundColor:e?"#dbeafe":void 0}},"Code"),t.noCodesandbox?null:l.createElement(m.Z,{name:"box-plot-example",source:p,dependencies:{react:"^18.2.0","react-plot":"^0.20.4","ml-spectra-processing":"^11.13.0"}},(()=>l.createElement("button",{type:"submit"},"Open sandbox"))))),e&&l.createElement(s.Z,{className:"language-jsx"},p))}const k={},c="BoxPlot",b={unversionedId:"boxplot",id:"boxplot",title:"BoxPlot",description:"BoxPlot shows summary statistics of data in a graphical form. The graphic below shows",source:"@site/docs/080_boxplot.md",sourceDirName:".",slug:"/boxplot",permalink:"/boxplot",draft:!1,editUrl:"https://github.com/zakodium-oss/react-plot-docs/tree/main/docs/080_boxplot.md",tags:[],version:"current",sidebarPosition:80,frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Plot",permalink:"/plot"},next:{title:"Introduction",permalink:"/series/intro"}},x={},N=[{value:"Props",id:"props",level:2},{value:"Mandatory",id:"mandatory",level:3},{value:"Optional",id:"optional",level:3}],h={toc:N};function y(t){let{components:e,...n}=t;return(0,o.kt)("wrapper",(0,a.Z)({},h,n,{components:e,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"boxplot"},"BoxPlot"),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"BoxPlot")," shows summary statistics of data in a graphical form. The graphic below shows\na bloxplot superimposed on a scatter plot of the dataset."),(0,o.kt)(u,{mdxType:"BoxPlotDemo"}),(0,o.kt)("h2",{id:"props"},"Props"),(0,o.kt)("h3",{id:"mandatory"},"Mandatory"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"min:")," Minumum value in the dataset",(0,o.kt)("br",null),"\ntype: ",(0,o.kt)("inlineCode",{parentName:"li"},"ScalarValue")," ",(0,o.kt)("br",null)),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"max:")," Maximum value in the dataset",(0,o.kt)("br",null),"\ntype: ",(0,o.kt)("inlineCode",{parentName:"li"},"ScalarValue")," ",(0,o.kt)("br",null)),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"q1:")," First Quartile of the dataset",(0,o.kt)("br",null),"\ntype: ",(0,o.kt)("inlineCode",{parentName:"li"},"ScalarValue")," ",(0,o.kt)("br",null)),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"median:")," Median of the dataset",(0,o.kt)("br",null),"\ntype: ",(0,o.kt)("inlineCode",{parentName:"li"},"ScalarValue")," ",(0,o.kt)("br",null)),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"q3:")," Third Quartile of the dataset",(0,o.kt)("br",null),"\ntype: ",(0,o.kt)("inlineCode",{parentName:"li"},"ScalarValue")," ",(0,o.kt)("br",null)),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"width:")," Width of the boxplot",(0,o.kt)("br",null),"\ntype: ",(0,o.kt)("inlineCode",{parentName:"li"},"ScalarValue")," ",(0,o.kt)("br",null)),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"y:")," y location of the boxplot ",(0,o.kt)("br",null),"\ntype: ",(0,o.kt)("inlineCode",{parentName:"li"},"ScalarValue")," ",(0,o.kt)("br",null))),(0,o.kt)("h3",{id:"optional"},"Optional"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"xAxis?:")," The xAxis",(0,o.kt)("br",null),"\ntype: ",(0,o.kt)("inlineCode",{parentName:"li"},"string"),(0,o.kt)("br",null),"\ndefault: ",(0,o.kt)("inlineCode",{parentName:"li"},"x")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"yAxis?:")," The yAxis",(0,o.kt)("br",null),"\ntype: ",(0,o.kt)("inlineCode",{parentName:"li"},"string"),(0,o.kt)("br",null),"\ndefault: ",(0,o.kt)("inlineCode",{parentName:"li"},"y")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"medianColor?:")," Color name of the median line",(0,o.kt)("br",null),"\ntype: ",(0,o.kt)("inlineCode",{parentName:"li"},"string"),(0,o.kt)("br",null),"\ndefault: ",(0,o.kt)("inlineCode",{parentName:"li"},"black")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"medianStyle?:")," CSS properties of the median line",(0,o.kt)("br",null),"\ntype: ",(0,o.kt)("inlineCode",{parentName:"li"},"CSSProperties"),(0,o.kt)("br",null),"\ndefault: ",(0,o.kt)("inlineCode",{parentName:"li"},"{}")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"boxColor?:")," Color name of the box",(0,o.kt)("br",null),"\ntype: ",(0,o.kt)("inlineCode",{parentName:"li"},"string"),(0,o.kt)("br",null),"\ndefault: ",(0,o.kt)("inlineCode",{parentName:"li"},"black")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"boxStyle?:")," CSS Properties of the box",(0,o.kt)("br",null),"\ntype: ",(0,o.kt)("inlineCode",{parentName:"li"},"CSSProperties"),(0,o.kt)("br",null),"\ndefault: ",(0,o.kt)("inlineCode",{parentName:"li"},"{}")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"whiskerColor?:")," Color name of the whisker lines",(0,o.kt)("br",null),"\ntype: ",(0,o.kt)("inlineCode",{parentName:"li"},"string"),(0,o.kt)("br",null),"\ndefault: ",(0,o.kt)("inlineCode",{parentName:"li"},"black")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"whiskerStyle?:")," CSS Properties of the whisker lines",(0,o.kt)("br",null),"\ntype: ",(0,o.kt)("inlineCode",{parentName:"li"},"CSSProperties"),(0,o.kt)("br",null),"\ndefault: ",(0,o.kt)("inlineCode",{parentName:"li"},"{}")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"minMaxColor?:")," Color name of the min/max lines",(0,o.kt)("br",null),"\ntype: ",(0,o.kt)("inlineCode",{parentName:"li"},"string"),(0,o.kt)("br",null),"\ndefault: ",(0,o.kt)("inlineCode",{parentName:"li"},"black")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"minMaxStyle?:")," CSS Properties of the min/max lines",(0,o.kt)("br",null),"\ntype: ",(0,o.kt)("inlineCode",{parentName:"li"},"CSSProperties"),(0,o.kt)("br",null),"\ndefault: ",(0,o.kt)("inlineCode",{parentName:"li"},"{}")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"onMouseEnter?:")," Handler for MouseEnter events",(0,o.kt)("br",null),"\ntype: ",(0,o.kt)("inlineCode",{parentName:"li"},"MouseEventHandler<SVGGElement>"),(0,o.kt)("br",null),"\ndefault: ",(0,o.kt)("inlineCode",{parentName:"li"},"{}")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"onMouseLeave?:")," Handler for MouseLeave events",(0,o.kt)("br",null),"\ntype: ",(0,o.kt)("inlineCode",{parentName:"li"},"MouseEventHandler<SVGGElement>"),(0,o.kt)("br",null),"\ndefault: ",(0,o.kt)("inlineCode",{parentName:"li"},"{}"))))}y.isMDXComponent=!0}}]);