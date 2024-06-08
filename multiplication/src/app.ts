import { yarg } from "./config/adapters/args.adapter";
import { ServerApp } from "./presentation/server-app";

// * anonymous function - self invoking
(async () => {
  await main();
})();

async function main() {
  const { b: base, l: limit, s: displayTable } = yarg;

  ServerApp.run({
    base,
    limit,
    displayTable,
  });
}
