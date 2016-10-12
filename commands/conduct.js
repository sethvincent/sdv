var assert = require('assert')
var path = require('path')
var exit = require('exit')

var copy = require('../lib/copy-file')

module.exports = {
  name: 'conduct',
  command: function (args) {
    var templatesDir = path.join(__dirname, '..', 'templates')
    var source = path.join(templatesDir, 'CONDUCT.md')
    var target = path.join(process.cwd(), 'CONDUCT.md')

    assert.ok(args.email, 'args.email is required')

    copy(source, target, args, function () {
      exit(0)
    })
  },
  options: [
    {
      name: 'email',
      boolean: false,
      abbr: 'e'
    }
  ]
}
