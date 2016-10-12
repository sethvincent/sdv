#! /usr/bin/env node

var path = require('path')
var subcommand = require('subcommand')

var config = require('./config')

var defaults = Object.keys(config.defaults).map(function (key) {
  return { name: key, default: config.defaults[key] }
})

defaults.push({
  name: 'package',
  default: path.parse(process.cwd()).base
})

var match = subcommand({
  root: require('./commands/help'),
  defaults: defaults,
  commands: [
    require('./commands/changelog'),
    require('./commands/conduct'),
    require('./commands/contributing'),
    require('./commands/docs'),
    require('./commands/examples'),
    require('./commands/gitignore'),
    require('./commands/help'),
    require('./commands/issue-template'),
    require('./commands/license'),
    require('./commands/project'),
    require('./commands/readme'),
    require('./commands/tests'),
    require('./commands/travis')
  ]
})

match(process.argv.slice(2))
