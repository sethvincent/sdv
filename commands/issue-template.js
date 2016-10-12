var path = require('path')
var exit = require('exit')

var copy = require('../lib/copy-file')

module.exports = {
  name: 'issue-template',
  command: function (args) {
    var templatesDir = path.join(__dirname, '..', 'templates')
    var source = path.join(templatesDir, 'ISSUE_TEMPLATE.md')
    var target = path.join(process.cwd(), 'ISSUE_TEMPLATE.md')

    copy(source, target, {}, function () {
      exit(0)
    })
  },
  options: []
}
