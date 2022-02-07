/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import React from "react";
import * as ReactPlot from "react-plot";
import { ObjectInspector } from "react-inspector";
import { xyToXYObject } from "ml-spectra-processing";
import BrowserOnly from "@docusaurus/BrowserOnly";

const ButtonExample = (props) => (
  <button
    {...props}
    style={{
      backgroundColor: "white",
      border: "solid red",
      borderRadius: 20,
      padding: 10,
      cursor: "pointer",
      ...props.style,
    }}
  />
);
function convertJcamp() {
  return (
    <BrowserOnly fallback={<div>...</div>}>
      {() => {
        return require("jcampconverter")[convert];
      }}
    </BrowserOnly>
  );
}
const ReactLiveScope = {
  React,
  ...React,
  ButtonExample,
  ...ReactPlot,
  ObjectInspector,
  xyToXYObject,
  convertJcamp: convertJcamp(),
};

export default ReactLiveScope;
