# append-to-all-attributes

> Get a copy of an object with only the attributes needed specified in an array of strings(handy utility)

## Install

```
$ npm install get-attributes-specified-from-array
```

## Usage

```js
const getAttributesSpecifiedFromArray = require('get-attributes-specified-from-array');
appendToAllAttributes({
    id: '321393',
    l1_key: 'collissions',
    duration: 3390,
    b_field: 3.801
}, ["id", 'b_field']);

//=>
{
    id: '321393',
    b_field: 3.801
}
```

## License

MIT © [Fabio Espinosa](http://fabioespinosa.mit.edu)
