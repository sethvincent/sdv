# sdv

My personal file copier for creating & maintaining npm packages.

[![npm][npm-image]][npm-url]
[![travis][travis-image]][travis-url]
[![standard][standard-image]][standard-url]
[![conduct][conduct]][conduct-url]

[npm-image]: https://img.shields.io/npm/v/sdv.svg?style=flat-square
[npm-url]: https://www.npmjs.com/package/sdv
[travis-image]: https://img.shields.io/travis/sethvincent/sdv.svg?style=flat-square
[travis-url]: https://travis-ci.org/sethvincent/sdv
[standard-image]: https://img.shields.io/badge/code%20style-standard-brightgreen.svg?style=flat-square
[standard-url]: http://npm.im/standard
[conduct]: https://img.shields.io/badge/code%20of%20conduct-contributor%20covenant-green.svg?style=flat-square
[conduct-url]: CONDUCT.md

## About

Working on a lot of different github packages means a lot of maintenance work, so it's nice to automate some of the tedious bits.

`sdv` is a command-line tool & has commands for creating the following files & directories:

- .gitignore
- .travis.yml
- CHANGELOG.md
- CONDUCT.md
- CONTRIBUTING.md
- ISSUE_TEMPLATE.md
- LICENSE.md
- README.md
- docs/
  - api.md
  - getting-started.md
  - README.md
  - related-modules.md
- examples/
  - basic-usage.js
  - README.md
- tests/
  - index.js
  - README.md

The `sdv project` command will create all of the above files, or see the usage section below for commands that create each individual file/directory.

### What's with the `sdv` name?

Hey those are my initials! I don't intend on this being a general use tool. I'm not keen on maintaining something like [yo](https://www.npmjs.com/package/yo) that's meant to be extensible for a wide range of uses. I just want to quickly copy the files that I often need to create for each new npm package. And if you can benefit by forking this project or using it as inspiration then that's cool with me.

##  Want to use `sdv`? 

You can fork it, rename it to your initials (or something like that), and change the [config.js](config.js) file and the [templates](templates/) to reflect your tools & preferences.

## Install

```sh
npm install -g sdv
```

## Usage

```
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
```

## Contributing

Contributions are welcome! Please read the [contributing guidelines](CONTRIBUTING.md) first. Also note that this is mostly a personal tool for creating the files that I need, so I may not address all issues or accept all pull requests. But if you find it useful and notice improvements that can be made, that's great!

## Conduct

It is important that this project contributes to a friendly, safe, and welcoming environment for all. Read this project's [code of conduct](CONDUCT.md)

## See also

This tool is inspired by & based on these awesome projects:

- [maintenance-modules](https://github.com/maxogden/maintenance-modules) – a lot of great maintenance modules in this list
- [Contributor Covenant](https://github.com/ContributorCovenant/contributor_covenant)
- [CONTRIBUTING.md](https://github.com/ungoldman/CONTRIBUTING.md)
- [module-init](https://npmjs.com/module-init)
- [create-module](https://github.com/finnp/create-module)
- [initialize](https://www.npmjs.com/package/initialize)
- [yo](https://npmjs.com/yo)

## Contact

- **issues** – Please open issues in the [issues queue](https://github.com/sethvincent/sdv/issues)
- **twitter** – [@sethdvincent](https://twitter.com/sethdvincent)

## License

[ISC](LICENSE.md)
