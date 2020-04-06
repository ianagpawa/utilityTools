const { CsvReader } = require('./reader.js');

const csvReader = new CsvReader()
const fileName = '../resources/references/parentCsv.csv';
const fieldsToCheck = '../resources/references/fields.csv';
csvReader.execute(fileName, fieldsToCheck)

