function getEntryId(row) {
    return getRowArr(row)[1];
}

function getRowArr(rowString) {
    return rowString.split(',');
}

module.exports = {
    getEntryId: getEntryId,
    getRowArr: getRowArr
}