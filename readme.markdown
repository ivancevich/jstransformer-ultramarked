# jstransformer-ultramarked

> [ultramarked](https://github.com/bevacqua/ultramarked) support for [JSTransformers](http://github.com/jstransformers).

## Install
`npm install jstransformer-ultramarked --save`

## API
```js
var ultramarked = require('jstransformer-ultramarked');
var md = require('jstransformer')(ultramarked);

var output = md.render('# Hello World!');
console.log(output.body); // => '<h1>Hello World!</h1>'
```
