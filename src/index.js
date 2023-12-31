#!/bin env node

import shell from 'shelljs';
import jsonfile from 'jsonfile';
import * as Converter from './Converter/converter.js';

// Read config file @throws If an error is encountered reading or parsing the
// file
const configFile = './config.json'
const config = jsonfile.readFileSync('./config.json');

function createOutputDirectory() {
  // Check existence of desired directories
  shell.mkdir('-p', config.input.path);
  shell.mkdir('-p', config.output.path);
  shell.mkdir('-p', config.temp.path);
}
createOutputDirectory();

Converter.convertFiletype(config.input.path, config.output.path, 'wav', 'mp3');
