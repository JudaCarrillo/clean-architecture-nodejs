import fs from "fs";
import { yarg } from "./config/adapters/args.adapter";

const { b: base, l: limit, s: displayTable } = yarg;

let outputMessage = "";
const headerMessage = `
========================================
            Tabla del ${base}
========================================\n
`;

outputMessage = headerMessage + outputMessage;

displayTable && console.log(outputMessage);

