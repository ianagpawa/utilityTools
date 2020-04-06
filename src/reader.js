const fs = require('fs');
const { getRowArr, getEntryId } = require('./helperUtilities.js')

class CsvReader {
    
    fileDataArr;
    fieldsToCheckFileName
    fileName;
    fieldsToCheck;
    outputFields = [];
    
    constructor() {}

    getFieldsToCheck() { return this.fieldsToCheck; }

    setFieldsToCheck(fieldsToCheck) { this.fieldsToCheck = fieldsToCheck };

    getFieldsToCheckFileName() { return this.fieldsToCheckFileName };

    setFieldsToCheckFileName(fieldsToCheckFileName) { this.fieldsToCheckFileName = fieldsToCheckFileName };


    processFieldsToCheck() { 
        fs.readFile(this.getFieldsToCheckFileName(), 'utf8', (err, data) => {
            this.setFieldsToCheck(data.split(/\r?\n/));
            
        })

        fs.readFile(this.fileName, 'utf8', (err, data) => {
            this.setFileDataArr(data.split(/\r?\n/));
            this.processDataArr(this.getFileDataArr());
        })
        
    }

    getFileDataArr() { return this.fileDataArr; }

    setFileDataArr(fileDataArr) { this.fileDataArr = fileDataArr; }

    getFileName() { return this.fileName; }

    setFileName(fileName) { this.fileName = fileName; }

    getOutputFields() { return this.outputFields; }

    setOutputFields(outputFields) { this.outputFields = outputFields; }

    addToOutputFields(row) { !this.getOutputFields() ? this.setOutputFields([]) : this.outputFields.push(row) };

    readFileAndSetDataArr() {
        this.processFieldsToCheck(this.getFieldsToCheckFileName());
        fs.readFile(this.fileName, 'utf8', (err, data) => {
            this.setFileDataArr(data.split(/\r?\n/));
            this.processDataArr(this.getFileDataArr());
        })
    }

    parseFile() {

    }

    processDataArr(arr) {
        let output = []
        arr.forEach(row => {
            if (this.getFieldsToCheck().indexOf(getEntryId(row)) !== -1) {
                
                fs.appendFile('./output.csv', `${this.transformRow(row)}\n`, function (err) {
                    if (err) throw err;
                    console.log('Updated!');
                });
            }
        })
    }

    transformRow(row) {
        let rowValues = getRowArr(row);
        rowValues[1] = `old${rowValues[1][0].toUpperCase()}${rowValues[1].slice(1)}`;
        rowValues[2] = `Old ${rowValues[2]}`;
        if (rowValues[5]) {
            rowValues[5] = `$.originalPosition.${rowValues[5]}`;
        }
        return rowValues.join(',');
    }

    execute(fileName, fieldsToCheckFileName) {
        this.setFileName(fileName);
        this.setFieldsToCheckFileName(fieldsToCheckFileName);
        this.processFieldsToCheck()
    }


}

module.exports = { CsvReader: CsvReader };

