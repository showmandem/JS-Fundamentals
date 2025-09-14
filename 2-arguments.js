#!/usr/bin/node

const args = process.argv.slice(2); // grab only the arguments after the script name

if (args[0] === undefined) {
  console.log("No argument");
} else if (args[1] === undefined) {
  console.log("Argument found");
} else {
  console.log("Arguments found");
}
