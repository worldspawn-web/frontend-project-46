#!/usr/bin/env node
import { Command } from 'commander';
import getDifference from '../src/getDifference.js';

const program = new Command();

program
  .description('Compares two configuration files and shows a difference.')
  .version('0.0.1')
  .option('-f, --format <type>', 'output format')
  .argument('<filepath1>', 'path to file one')
  .argument('<filepath2>', 'path to file two')
  .action((filepath1, filepath2) => {
    console.log(getDifference(filepath1, filepath2));
  });

program.parse();
