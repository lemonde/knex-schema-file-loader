# knex-schema-file-loader
[![Build Status][status]](https://travis-ci.org/lemonde/knex-schema-file-loader) [![Dependency Status][deps]](https://david-dm.org/lemonde/knex-schema-file-loader) [![devDependency Status][devdeps]](https://david-dm.org/lemonde/knex-schema-file-loader#info=devDependencies) [![Coverage Status][coverage]](https://coveralls.io/r/lemonde/knex-schema-file-loader)

[status]: https://travis-ci.org/lemonde/knex-schema-file-loader.svg?branch=master
[deps]: https://david-dm.org/lemonde/knex-schema-file-loader.svg
[devdeps]: https://david-dm.org/lemonde/knex-schema-file-loader/dev-status.svg
[coverage]: https://coveralls.io/repos/lemonde/knex-schema-file-loader/badge.png

[knex-schema](https://github.com/lemonde/knex-schema) file loader component.

## Install

```
npm install knex-schema-file-loader
```

## Usage

```javascript
var loader = require('knex-schema-file-loader');
loader.load([
    'path1/**/*.js',
    'path2/**/*.js'
], function (err, schemas) {
    // ...
});
```
## License

MIT