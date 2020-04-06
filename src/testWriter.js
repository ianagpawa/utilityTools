const fs = require('fs');
const { getRowArr, getEntryId } = require('./helperUtilities.js')

class TestWriter {

    constructor() {}

    processFieldsToCheck(fileName) { 
        fs.readFile(fileName, 'utf8', (err, data) => {
            this.processDataArr(data.split(/\r?\n/));
        })
    }

    processDataArr(arr) {
        arr.forEach(row => {
            const positionArr = [0,1,2,5, 6];
            const transformedRow = `${this.transformRow(row, positionArr)}\n`
            fs.appendFile('./testOutput.csv', transformedRow, err => {
                if (err) throw err;
                console.log(`Update file with ${transformedRow}`);
            })

        })
    }

    transformRow(row, positionArr) {
        return positionArr.map(index => getRowArr(row)[index] ? getRowArr(row)[index] : '');
    }

    execute(fileName) {
        this.processFieldsToCheck(fileName)
    }


}

module.exports = { TestWriter: TestWriter };

