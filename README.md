# TimeSeries Database Testing CLI 

## Commands
### `generate-data [T]`
Used to generate fake IIoT edges data points.
`[T]` is the multiple of 10 thousand data points.

Per 10 thousand data points: 
- 1 enterprise id
- x 10 sites id
- x 10 areas id
- x 10 machines id
- x 10 data points

Providing this way a high cardinality in the data generated.

Currently, exporting a json array in `/data/[T].json`

## How to use

```
    npm install
    npm run build
    npm link
```

Instead of `npm link` you can `npm install -g .`, both will make the commands available to your system.
