# ts-node-npx-example

A working example of a CLI tool written in TypeScript:

- Without a build step
- Without a publish step
- Runnable directly from GitHub using either `npx` or `yarn dlx`

*Note: at the time of writing, `npx` has bugs and cannot run code from git.  Modern versions of `yarn` still work.*

To run it:

```shell
yarn dlx 'npx@https://github.com/TypeStrong/ts-node-examples#workspace=yarn-dlx'
```

