# Welcome 
This repository is intended to allow 38 degrees tech team interview
candidates to check that they have all the requirements installed that
are needed by our typescript & react coding test.

If the 'Install' and 'Run tests' steps below work without errors then the 
coding test should run smoothly.

Note: users will need to have a full node environment installed
including the ability to build packages from source.  This
requires a working node-gyp environment.  

On Windows the default node install asks if you want these tools
installed, you need to either answer 'yes', or have carried out the
manual process documented here
https://github.com/nodejs/node-gyp#on-windows.

We recommend doing it during node install, by checking the tickbox
here:
https://user-images.githubusercontent.com/3109072/68096791-82350c00-fe89-11e9-8cfa-b4619ce96162.jpg

## Install

```sh
yarn install
```

## Run tests

```sh
yarn run test
```

Example output
```
 PASS  ./sqlite3.test.ts
  ✓ SQLite is usable (11 ms)

Test Suites: 1 passed, 1 total
Tests:       1 passed, 1 total
Snapshots:   0 total
Time:        0.454 s, estimated 1 s
Ran all test suites.
✨  Done in 3.28s.
```
