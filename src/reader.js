const fs = require('fs');
const { getRowArr, getEntryId } = require('./helperUtilities.js')

class CsvReader {
    
    fileDataArr;
    fileName;
    fieldsToCheck;
    outputFields;
    
    constructor() {}

    getFieldsToCheck() { return this.fieldsToCheck; }

    setFieldsToCheck(fieldsToCheck) { this.fieldsToCheck = fieldsToCheck; }

    getFileDataArr() { return this.fileDataArr; }

    setFileDataArr(fileDataArr) { this.fileDataArr = fileDataArr; }

    getFileName() { return this.fileName; }

    setFileName(fileName) { this.fileName = fileName; }

    getOutputFields() { return this.outputFields; }

    setOutputFields(outputFields) { this.outputFields = outputFields; }

    readFileAndSetDataArr() {
        fs.readFile(this.fileName, 'utf8', (err, data) => {
            // this.fileDataArr = data.split(/\r?\n/);
            this.setFileDataArr(data.split(/\r?\n/));
            this.getFileDataArr().forEach(x => console.log(x))
        })
    }

    processDataArr(arr) {
        arr.forEach(row => {
            if ( this.getFieldsToCheck().indexOf(getEntryId(row) !== -1)) {
            
            }
        })
    }

    execute(fileName) {
        this.setFileName(fileName);
        // this.setFieldsToCheck(fieldsToCheck);
        this.readFileAndSetDataArr()
        // this.processDataArr()
        // console.log(this.fileDataArr)
    }


}

module.exports = { CsvReader: CsvReader };

