var fs = require('fs')
var path = require('path')

var test = require('tape')
var mkdirp = require('mkdirp')
var rm = require('rimraf')
var arrayEqual = require('array-equal')

var copyFile = require('../lib/copy-file')
var copyFiles = require('../lib/copy-files')

var tmpdir = path.join(__dirname, 'tmp')

test('setup', function (t) {
  mkdirp.sync(tmpdir)
  t.end()
})

test('copy file', function (t) {
  var source = path.join(__dirname, '..', 'templates', 'README.md')
  var target = path.join(tmpdir, 'README.md')

  copyFile(source, target, {}, function (err) {
    t.notOk(err)
    fs.readFile(target, 'utf8', function (err, file) {
      t.notOk(err)
      t.ok(file)
      rm.sync(target)
      t.end()
    })
  })
})

test('copy files', function (t) {
  var options = {
    sourceDir: path.join(__dirname, '..', 'templates', 'docs'),
    targetDir: tmpdir,
    filenames: ['api.md', 'getting-started.md', 'README.md', 'related-modules.md'].sort()
  }

  copyFiles(options, {}, function () {
    fs.readdir(tmpdir, function (err, dir) {
      t.notOk(err)
      t.ok(arrayEqual(options.filenames, dir.sort()))
      t.end()
    })
  })
})

test('teardown', function (t) {
  rm.sync(tmpdir)
  t.end()
})
