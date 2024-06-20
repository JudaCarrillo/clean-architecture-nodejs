import { CreateTable } from "./create-table.use-case";

describe("create table use case", () => {
  it("should create with default values", () => {
    const createTable = new CreateTable();

    const table = createTable.execute({ base: 2 });
    const rows = table.split("\n").length;

    expect(createTable).toBeInstanceOf(CreateTable);
    expect(table).toContain("2 x 1 = 2");
    expect(table).toContain("2 x 10 = 20");
    expect(rows).toBe(10);
  });

  it("should create table with custom values", () => {
    const createTable = new CreateTable();

    const options = {
      base: 3,
      limit: 20,
    };

    const table = createTable.execute(options);

    const rows = table.split("\n");
    const rowsCounter = table.split("\n").length;

    const base = rows.map((row) => row.split(" ")[0]);
    const isDifferentBase = base.some((base) => parseInt(base) !== options.base);

    expect( isDifferentBase ).toBe(false);
    expect(rowsCounter).toBe(options.limit);
  });
});
