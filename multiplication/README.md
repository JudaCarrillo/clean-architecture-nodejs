# Multiplication App

This is a multiplication application that generates and displays a table of multiplication, using Yargs to handle command-line arguments.

## Run locally

You can run the application locally by following these steps:

```bash
npm run ts-node src/app.ts -b {base} -l {limit} -d {displayTable} -f {fileDestination} -n {fileName}
```

### Parameters

- `-b`, `--base`: Base of the table of multiplication (required).
- `-l`, `--limit`: The limit until where you want to multiply (optional, default is 10).
- `-d`, `--displayTable`: Indicates if you want to display the table in the console (optional, default is true).
- `-f`, `--fileDestination`: Path to the directory where you want to save the file (optional).
- `-n`, `--fileName`: File name where you want to save the table (optional).

### Example Usage

```bash
npm run ts-node src/app.ts -b 5 -l 20 -d false -f ./output -n tabla_del_5.txt
```

In this example, the application generates the multiplication table from 5 to 20, does not display it in the console, and saves the result in a file called `tabla_del_5.txt` in the `./output` directory.

## Topics

- Async functions self invoked
- Console arguments
- Yargs and Setting up
- Use cases
- Test in console commands
- Mocks
- Spies
