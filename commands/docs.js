var assert = require('assert')
var fs = require('fs')
var path = require('path')
var exit = require('exit')
var mkdirp = require('mkdirp')

var copy = require('../lib/copy-files')

module.exports = {
  name: 'docs',
  command: function (args) {
    var sourceDir = path.join(__dirname, '..', 'templates', 'docs')
    var targetDir = path.join(process.cwd(), 'docs')

    var options = {
      sourceDir: sourceDir,
      targetDir: targetDir,
      filenames: fs.readdirSync(sourceDir)
    }

    assert.ok(args.package, 'args.package is required')

    mkdirp.sync(targetDir)
    copy(options, args, function () {
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
