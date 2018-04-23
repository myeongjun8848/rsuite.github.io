### 自定义选项

<!--start-code-->
```js
/**
 * import data from
 * https://github.com/rsuite/rsuite.github.io/blob/next/src/resources/data/province.js
 */

const instance=(
  <Cascader
    data={data}
    valueKey="name"
    labelKey="name"
    renderMenuItem={(label, item) => {
      return <div><i className="icon icon-circle" /> {label}</div>;
    }}
    renderValue={(activePaths) => {
      return activePaths.map(item => item.name).join(' : ');
    }}
  />
)
ReactDOM.render(instance);
```
<!--end-code-->