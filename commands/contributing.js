var assert = require('assert')
var path = require('path')
var exit = require('exit')

var copy = require('../lib/copy-file')

module.exports = {
  name: 'contributing',
  command: function (args) {
    var templatesDir = path.join(__dirname, '..', 'templates')
    var source = path.join(templatesDir, 'CONTRIBUTING.md')
    var target = path.join(process.cwd(), 'CONTRIBUTING.md')

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
