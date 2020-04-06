const fs = require('fs');
const { getRowArr, appendFile, dataFormatter} = require('./helperUtilities.js')

class TestDataWriter {

    constructor() {}

    processFieldsToCheck(filename, outputFilename, positionArr) {  fs.readFile(filename, 'utf8', (err, data) => { this.processDataArr(outputFilename, positionArr, dataFormatter(data)); }) }

    processDataArr(outputFilename, positionArr, arr) {
        arr.forEach(row => { appendFile(outputFilename, `${this.transformRow(row, positionArr)}\n`); });
        appendFile(outputFilename, arr.length -1);
    }

    transformRow(row, positionArr) { return positionArr.map(index => getRowArr(row)[index] ? getRowArr(row)[index] : ''); }

    execute(filename, outputFilename, positionArr) { this.processFieldsToCheck(filename, outputFilename, positionArr) }
}

module.exports = { TestDataWriter: TestDataWriter };

