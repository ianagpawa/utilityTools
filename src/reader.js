const fs = require('fs');

class CsvReader {
    
    fileDataArr;
    fileName;
    fieldsToCheck;
    
    constructor() {}

    getFieldsToCheck() { return this.fieldsToCheck; }

    setFieldsToCheck(fieldsToCheck) { this.fieldsToCheck = fieldsToCheck; }

    getFileDataArr() { return this.fileName; }

    setFileDataArr(fileDataArr) { this.fileDataArr = fileDataArr; }

    getFileName() { return this.fileName; }

    setFileName(fileName) { this.fileName = fileName; }

    readFile() {
        fs.readFile(this.fileName, 'utf8', (err, data) => {
            this.fileDataArr = data.split(/\r?\n/)
        })
    }


}

module.exports = { CsvReader: CsvReader };

