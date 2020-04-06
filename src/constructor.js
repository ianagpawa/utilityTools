const { CsvReader } = require('./reader.js');
const { TestWriter } = require('./testWriter.js');

const csvReader = new CsvReader()
const fileName = '../resources/references/parentCsv.csv';
const fieldsToCheck = '../resources/references/fields.csv';
// csvReader.execute(fileName, fieldsToCheck)


const testWriter = new TestWriter();
testWriter.execute('./output.csv');
