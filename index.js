#!/usr/bin/env node
const clear = require("clear");

const argv =  process.argv[2];
const generate = require("./src/lib/generator.js");
const {show} = require("./src/lib/banner.js");
const yargs = require('yargs')
clear();
if (yargs.argv._[0]=="create") {
  console.log(yargs.argv)
  generate.create(yargs.argv._[1]);
}
else show("Metaxa cli")