var path = require('path')
var exit = require('exit')

var copy = require('../lib/copy-file')

module.exports = {
  name: 'gitignore',
  command: function (args) {
    var templatesDir = path.join(__dirname, '..', 'templates')
    var source = path.join(templatesDir, 'gitignore')
    var target = path.join(process.cwd(), '.gitignore')

    copy(source, target, {}, function () {
      exit(0)
    })
  },
  options: []
}
