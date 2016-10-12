var usage = {}

usage.main = `
USAGE
  sdv {command} [options]

COMMANDS
  changelog         create a CHANGELOG.md file
  conduct           create a CONDUCT.md file based on the Contributor's Covenant
  contributing      create a CONTRIBUTING.md file
  docs              create a docs directory & contents
  examples          create an examples directory & contents
  gitignore         create a .gitignore file
  help              this help message
  issue-template    create an ISSUE_TEMPLATE.md file
  license           create a LICENSE.md file
  readme            create a README.md file
  tests             create a tests directory & contents
  travis            create a .travis.yml file

HELP
  Run sdv help {command} to see options for that command.
`

usage.changelog = `
USAGE
  sdv changelog --package {package name}

OPTIONS
  --package, -p     name of npm module / github repo
`

usage.conduct = `
USAGE
  sdv conduct --email {email address}

OPTIONS
  --email, -e     email address people should use for conduct concerns
`

usage.contributing = `
USAGE
  sdv contributing --package {package name}

OPTIONS
  --package, -p     name of npm module / github repo
`

usage.docs = `
USAGE
  sdv docs --package {package name}

OPTIONS
  --package, -p     name of npm module / github repo
`

usage.examples = `
USAGE
  sdv examples

No options.
`

usage.gitignore = `
USAGE
  sdv gitignore

No options.
`

usage.help = `
USAGE
  sdv help {command}

No options.
`

usage.issueTemplate = `
USAGE
  sdv issue-template

No options.
`

usage.license = `
sdv license {license name}

Licenses available: ISC
`

usage.project = `
sdv project --package {package name} --github {github username} --email {email address} --chat {url of chat} --twitter {twitter username}

Creates all files.

OPTIONS
  --package, -p     name of npm module / github repo
  --github, -g      github username
  --email, -e       email address people should use for conduct concerns
  --chat, -c        url of chat
  --twitter, -t     twitter username
`

usage.readme = `
sdv readme --package {package name} --github {github username} --email {email address} --chat {url of chat} --twitter {twitter username}

OPTIONS
  --package, -p     name of npm module / github repo
  --github, -g      github username
  --email, -e       email address people should use for conduct concerns
  --chat, -c        url of chat
  --twitter, -t     twitter username
`

usage.tests = `
USAGE
  sdv tests

No options.
`

usage.travis = `
USAGE
  sdv travis

No options.
`

module.exports = {
  name: 'help',
  command: function (args) {
    var subcmd = args._[0]
    var text = usage[subcmd]
    if (text) {
      console.log(text)
    } else {
      console.log(usage.main)
    }
  },
  options: []
}
