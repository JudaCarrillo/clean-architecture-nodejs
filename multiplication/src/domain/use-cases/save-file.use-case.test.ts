import { SaveFile } from "./save-file.use-case";

describe('save-file.use-case', () => {

  it('should save file with default values', () => {

    const saveFile = new SaveFile();
    const options = {
      fileContent: 'test content',
    }

    saveFile.execute(options);

  });

});