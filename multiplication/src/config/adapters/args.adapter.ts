import yargs, { check } from "yargs";
import { hideBin } from "yargs/helpers";

export const yarg = yargs(hideBin(process.argv))
  .options({
    b: {
      alias: "base",
      type: "number",
      demandOption: true,
      describe: "Base of the multiplication table",
    },
    l: {
      alias: "limit",
      type: "number",
      default: 10,
      describe: "Limit of the multiplication table",
    },
    s: {
      alias: "show",
      type: "boolean",
      default: false,
      describe: "Show the multiplication table",
    },
    n: {
      alias: "name",
      type: "string",
      default: "table",
      describe: "Name of the file",
    },
    d: {
      alias: "destination",
      type: "string",
      default: "./outputs",
      describe: "Destination of the file",
    },
  })
  .check((argv, options) => {
    if (argv.b < 1) throw "Error: base must be greater than 0";
    return true;
  })
  .parseSync();
