import fs from "fs";

export const DEFAULT_FILE_DESTINATION = "./outputs";
export const DEFAULT_FILE_NAME = "table";

export interface SaveFileUseCase {
  execute: (options: Options) => boolean;
}

export interface Options {
  fileContent: string;
  fileDestination?: string;
  fileName?: string;
}

export class SaveFile implements SaveFileUseCase {
  constructor() {} // repository: StorageRepository,

  execute({
    fileContent,
    fileName = DEFAULT_FILE_NAME,
    fileDestination = DEFAULT_FILE_DESTINATION,
  }: Options) {
    {
      try {
        fs.mkdirSync(fileDestination, { recursive: true });
        fs.writeFileSync(`${fileDestination}/${fileName}.txt`, fileContent);
        return true;
      } catch (error) {
        console.error("Error creating file: ", error);
        return false;
      }
    }
  }
}
