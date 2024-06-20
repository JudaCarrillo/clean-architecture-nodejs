import { yarg } from "./config/adapters/args.adapter";
import { ServerApp } from "./presentation/server-app";

// * anonymous function - self invoking
(async () => {
  await main();
})();

async function main() {
  const {
    b: base,
    l: limit,
    s: showTable,
    d: fileDestination,
    n: fileName,
  } = yarg;

  ServerApp.run({
    base,
    limit,
    showTable,
    fileDestination,
    fileName,
  });
}
