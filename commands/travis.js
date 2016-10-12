var path = require('path')
var exit = require('exit')

var copy = require('../lib/copy-file')

module.exports = {
  name: 'travis',
  command: function (args) {
    var templatesDir = path.join(__dirname, '..', 'templates')
    var source = path.join(templatesDir, 'travis.yml')
    var target = path.join(process.cwd(), '.travis.yml')

    copy(source, target, {}, function () {
      exit(0)
    })
  },
  options: []
}
