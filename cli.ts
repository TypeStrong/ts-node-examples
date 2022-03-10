#!/usr/bin/env ts-node-esm

import {Cli, Command, Builtins, Option} from 'clipanion';

class SayHello extends Command {
  static paths = [Command.Default];

  firstName = Option.String('--first', {required: true});
  lastName = Option.String('--last', {required: true});

  async execute() {
    console.log(`Hello, ${this.firstName} ${this.lastName}!`);
  }
}

const cli = new Cli({
  binaryName: 'ts-node-npx-demo',
  binaryLabel: 'ts-node-npx-demo',
  binaryVersion: '1.0.0'
});

cli.register(SayHello);
cli.register(Builtins.VersionCommand);
cli.register(Builtins.HelpCommand);

cli.runExit(process.argv.slice(2));
