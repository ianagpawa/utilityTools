const fs = require('fs');
const { getRowArr, getEntryId, dataFormatter, appendFile } = require('./helperUtilities.js')

class CsvReader {

    constructor() {}

    processFieldsToCheck(fileName,fieldsToCheckFileName, outputFilename) { 
        let fields;
        fs.readFile(fieldsToCheckFileName, 'utf8', (err, data) => { fields = dataFormatter(data); });
        fs.readFile(fileName, 'utf8', (err, data) => { this.processDataArr(outputFilename, dataFormatter(data), fields); });
    }

    processDataArr(outputFilename, arr, fieldsToCheck) { arr.forEach(row => { if (fieldsToCheck.indexOf(getEntryId(row)) !== -1) appendFile(outputFilename, `${this.transformRow(row)}\n`); }); }

    transformRow(row) {
        let rowValues = getRowArr(row);
        rowValues[1] = `old${rowValues[1][0].toUpperCase()}${rowValues[1].slice(1)}`;
        rowValues[2] = `Old ${rowValues[2]}`;
        if (rowValues[5]) {
            rowValues[5] = `$.originalPosition.${rowValues[5]}`;
        }
        return rowValues.join(',');
    }

    execute(fileName, fieldsToCheckFileName, outputFilename) { this.processFieldsToCheck(fileName,fieldsToCheckFileName, outputFilename); }
}

module.exports = { CsvReader: CsvReader };

