var fs = require('fs')
var path = require('path')
var exit = require('exit')
var mkdirp = require('mkdirp')

var copy = require('../lib/copy-files')

module.exports = {
  name: 'examples',
  command: function (args) {
    var sourceDir = path.join(__dirname, '..', 'templates', 'examples')
    var targetDir = path.join(process.cwd(), 'examples')

    var options = {
      sourceDir: sourceDir,
      targetDir: targetDir,
      filenames: fs.readdirSync(sourceDir)
    }

    mkdirp.sync(targetDir)
    copy(options, args, function () {
      exit(0)
    })
  },
  options: []
}
