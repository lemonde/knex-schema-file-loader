# knex-schema-loader
[![Build Status][status]](https://travis-ci.org/lemonde/knex-schema-loader) [![Dependency Status][deps]](https://david-dm.org/lemonde/knex-schema-loader) [![devDependency Status][devdeps]](https://david-dm.org/lemonde/knex-schema-loader#info=devDependencies) [![Coverage Status][coverage]](https://coveralls.io/r/lemonde/knex-schema-loader)

[status]: https://travis-ci.org/lemonde/knex-schema-loader.svg?branch=master
[deps]: https://david-dm.org/lemonde/knex-schema-loader.svg
[devdeps]: https://david-dm.org/lemonde/knex-schema-loader/dev-status.svg
[coverage]: https://coveralls.io/repos/lemonde/knex-schema-loader/badge.png

[knex-schema](https://github.com/lemonde/knex-schema) file loader component.

## Install

```
npm install knex-schema-loader
```

## Usage

```javascript
var loader = require('knex-schema-loader');
loader.load([
    'path1/**/*.js',
    'path2/**/*.js'
], function (err, schemas) {
    // ...
});
```
## License

MIT