const fs = require('fs');

function getEntryId(row) { return getRowArr(row)[1]; }

function getRowArr(rowString) { return rowString.split(','); }

function dataFormatter(data) { return data.split(/\r?\n/); }

function appendFile(fileName, row) {
    fs.appendFile(fileName, row, err => {
        if (err) throw err;
        console.log(`Update ${fileName} with ${row}`);
    })
}

module.exports = {
    getEntryId: getEntryId,
    getRowArr: getRowArr,
    appendFile: appendFile,
    dataFormatter: dataFormatter
}