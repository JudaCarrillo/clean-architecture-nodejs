import { yarg } from "./config/adapters/args.adapter";

// console.log(process.argv);
// console.log(yarg.b);

// * anonymous function - self invoking
(async () => {
  await main();
})();

async function main() {
  console.log(yarg);
}
