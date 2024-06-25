
const runCommand = async (args: string[]) => {
    process.argv = [ ...process.argv, ...args ];

    const { yarg } = await import("./args.adapter");

    return yarg;
}

describe("args adapter", () => {

    const originalArgv = process.argv;
    beforeEach(() => {
        process.argv = originalArgv;
        jest.resetModules();
    });

    it("should return default values", async () => {
        
        const argv =  await runCommand(["-b", "5"]);
        console.log(argv);
        
        expect ( argv ).toEqual( expect.objectContaining({
            b: 5,
            l: 10,
            s: false,
            n: "table",
            d: "./outputs",
        }));

    });

    it("should return configuration with custom values", async () => {
      
        const customArgs = [
            "-b", "8",
            "-l", "20",
            "-s",
            "-n", "myTable",
            "-d", "./myOutputs",
        ]

        const argv =  await runCommand(customArgs);

        expect ( argv ).toEqual( expect.objectContaining({
            b: 8,
            l: 20,
            s: true,
            n: "myTable",
            d: "./myOutputs",
        }));


    })

});