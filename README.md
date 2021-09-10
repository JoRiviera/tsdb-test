# TimeSeries Database Testing CLI 

## Commands
### `generate-data [T]`
Used to generate fake IIoT edges data points.
`[T]` is the number of thousands of data points 

Per thousand data points: 
- 1 enterprise id
- x 10 sites id
- x 10 areas id
- x 10 machines id
- x 10 data points

Providing this way a high cardinality in the data generated.

Currently, exporting a json array in `/data/[T].json`
