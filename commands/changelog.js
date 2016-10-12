var assert = require('assert')
var path = require('path')
var exit = require('exit')

var copy = require('../lib/copy-file')

module.exports = {
  name: 'changelog',
  command: function (args) {
    var templatesDir = path.join(__dirname, '..', 'templates')
    var source = path.join(templatesDir, 'CHANGELOG.md')
    var target = path.join(process.cwd(), 'CHANGELOG.md')

    assert.ok(args.package, 'args.package is required')

    copy(source, target, args, function () {
      exit(0)
    })
  },
  options: [
    {
      name: 'package',
      boolean: false,
      abbr: 'p'
    }
  ]
}
