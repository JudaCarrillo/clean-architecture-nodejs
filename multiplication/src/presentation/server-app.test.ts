import { CreateTable } from "../domain/use-cases/create-table.use-case";
import { SaveFile } from "../domain/use-cases/save-file.use-case";
import { ServerApp } from "./server-app";

describe("server app", () => {
  
  const options = {
    base: 2,
    limit: 10,
    showTable: true,
    fileDestination: "test-destination",
    fileName: "test-filename",
  }

  beforeEach(() => {
    jest.clearAllMocks();
  })

  it("should create ServerApp instance", () => {
    
    const serverApp = new ServerApp();
    expect( serverApp ).toBeInstanceOf( ServerApp );
    expect( ServerApp.run ).toBeInstanceOf( Function);

  });

  it("should run ServerApp with options", () => {
    
    // * integration test
    const logSpy = jest.spyOn(console, "log");
    const createTableSpy = jest.spyOn(CreateTable.prototype, "execute");
    const saveFileSpy = jest.spyOn(SaveFile.prototype, "execute");

    ServerApp.run( options );

    expect( logSpy ).toHaveBeenCalledTimes( 3 );
    expect( logSpy ).toHaveBeenCalledWith( "Server running..." );
    expect( logSpy ).toHaveBeenLastCalledWith( "File created!" );

    expect( createTableSpy ).toHaveBeenCalledTimes( 1 );
    expect( createTableSpy ).toHaveBeenCalledWith({ 
      base: options.base, limit: options.limit 
    });

    expect( saveFileSpy ).toHaveBeenCalledTimes( 1 );
    expect( saveFileSpy ).toHaveBeenCalledWith({
      fileContent: expect.any(String),
      fileName: options.fileName,
      fileDestination: options.fileDestination,
    });

  })

  it ("should run with values mocked", () => {

    const logMock = jest.fn();
    const logErrorMock = jest.fn();
    const createMock = jest.fn().mockReturnValue("1 x 2 = 2"); 
    const saveFileMock = jest.fn().mockReturnValue(true);

    console.log = logMock;
    console.error = logErrorMock;
    CreateTable.prototype.execute = createMock;
    SaveFile.prototype.execute = saveFileMock;

    ServerApp.run( options );

    expect( logMock ).toHaveBeenCalledWith('Server running...');
    expect( createMock ).toHaveBeenCalledWith({
      base: options.base,
      limit: options.limit,
    });
    expect( saveFileMock ).toHaveBeenCalledWith({
      fileContent: "1 x 2 = 2",
      fileName: options.fileName,
      fileDestination: options.fileDestination,
    });
    expect( logMock ).toHaveBeenCalledWith("File created!");
    expect( logErrorMock ).not.toHaveBeenCalledWith();


  })

});