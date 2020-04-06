const { CsvReader } = require('./reader.js');
const { TestWriter } = require('./testWriter.js');

const csvReader = new CsvReader()
const fileName = '../resources/references/parentCsv.csv';
const fieldsToCheck = '../resources/references/fields.csv';
const outputFilename = '../resources/output/parserOutput.csv';
// csvReader.execute(fileName, fieldsToCheck, outputFilename)


const testWriter = new TestWriter();
const testOutputFilename = '../resources/output/parserTestOutput.csv';
const positionArr = [0,1,2,5, 6];
testWriter.execute(outputFilename, testOutputFilename, positionArr);
