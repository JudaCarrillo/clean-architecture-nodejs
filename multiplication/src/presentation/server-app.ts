interface RunOptions {
  base: number;
  limit: number;
  displayTable: boolean;
}

export class ServerApp {
  static run(options: RunOptions) {
    console.log("Server running...");

    console.log({ options });
  }
}
