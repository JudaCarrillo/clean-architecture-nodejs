// import './app';

import { ServerApp } from "./presentation/server-app";

describe("Test App.ts", () => {

  it("should call server run with values", async () => {

    const serverRunMock = jest.fn();
    ServerApp.run = serverRunMock;

    process.argv = ["node", "app.js", "-b", "10", "-l", "20", "-s", "-d", "test-destination", "-n", "test-filename"];

    await import("./app");

    expect( serverRunMock ).toHaveBeenCalledWith({
      base: 10, 
      limit: 20, 
      showTable: true, 
      fileDestination: "test-destination", 
      fileName: "test-filename"      
    });


  });

});
 