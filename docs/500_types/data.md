# Data

import DataSeriesPoint from "./DataSeriesPoint.demo.tsx"
import DataRangeSeriesPoint from "./DataRangeSeriesPoint.demo.tsx"

this type is used to define [Series](../100_series/000_intro.md) data type

The used data must be extands from the following types:

## 1. SeriesPoint

### Definition

**In typescript :** `Array<{x:number,y:number}>`<br/>
**Explication :** Array of point, each point must have the two coordinates as a `number`, x in for horizantal [Axis](../200_axes/000_intro.md) and y for vertical [Axis](../200_axes/000_intro.md)<br/>
**Example :**
`[ { x: 1, y: 1 }, { x: 2, y: 5 }, { x: 3, y: 3 }, { x: 4, y: 2 }, { x: 5, y: 1 } ] `

### Utilities

This type is used in :

- [ScatterSeries](../100_series/100_scatterSeries.md)
- [LineSeries](../100_series/200_lineSeries.md)
- [BarSeries](../100_series/300_barSeries.md)

### Example

<DataSeriesPoint/>

## 2. RangeSeriesPoint

### Definition

**In typescript :** `Array<{x:number,y1:number,y2:number}>`<br/>

**Explication :** Array of point, each point must have the three coordinates as a `number`, x in for horizantal [Axis](../200_axes/000_intro.md) and y1,y2 to speficie the range for vertical [Axis](../200_axes/000_intro.md)<br/>
**Example :**
`[ { x: 1, y1: 0, y2: 2 }, { x: 2, y1: 2, y2: 3 }, { x: 3, y1: 3, y2: 4 } ]`

### Utilities

This type is used in :

- [RangeSeries](../100_series/500_rangeSeries.md)

### Example

<DataRangeSeriesPoint/>
