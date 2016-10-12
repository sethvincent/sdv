var path = require('path')
var each = require('each-async')
var copy = require('./copy-file')

module.exports = function (options, ctx, callback) {
  each(options.filenames, function (filename, i, next) {
    var source = path.join(options.sourceDir, filename)
    var target = path.join(options.targetDir, filename)
    copy(source, target, ctx, next)
  }, callback)
}
