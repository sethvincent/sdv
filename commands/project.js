module.exports = {
  name: 'project',
  command: function (args) {
    require('./changelog').command(args)
    require('./conduct').command(args)
    require('./contributing').command(args)
    require('./docs').command(args)
    require('./examples').command(args)
    require('./gitignore').command(args)
    require('./issue-template').command(args)
    require('./license').command(args)
    require('./readme').command(args)
    require('./tests').command(args)
    require('./travis').command(args)
  },
  options: [
    {
      name: 'package',
      boolean: false,
      abbr: 'p'
    },
    {
      name: 'github',
      boolean: false,
      abbr: 'g'
    },
    {
      name: 'email',
      boolean: false,
      abbr: 'e'
    },
    {
      name: 'twitter',
      boolean: false,
      abbr: 't'
    },
    {
      name: 'chat',
      boolean: false,
      abbr: 'c'
    },
    {
      name: 'newsletter',
      boolean: false,
      abbr: 'n'
    }
  ]
}
