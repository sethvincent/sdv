var assert = require('assert')
var path = require('path')
var exit = require('exit')

var copy = require('../lib/copy-file')

module.exports = {
  name: 'license',
  command: function (args) {
    var templatesDir = path.join(__dirname, '..', 'templates', 'license')
    var file = args._[0] || 'ISC'
    var source = path.join(templatesDir, file)
    var target = path.join(process.cwd(), 'LICENSE.md')

    args.year = args.year || new Date().getFullYear()

    assert.ok(args.year, 'args.year is required')
    assert.ok(args.name, 'args.name is required')
    assert.ok(args.email, 'args.email is required')

    copy(source, target, args, function () {
      exit(0)
    })
  },
  options: [
    {
      name: 'name',
      boolean: false,
      abbr: 'n'
    },
    {
      name: 'email',
      boolean: false,
      abbr: 'e'
    },
    {
      name: 'year',
      boolean: false,
      abbr: 'y'
    }
  ]
}
