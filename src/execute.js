const { CsvParser } = require('./CsvParser.js');
const { TestDataWriter } = require('./TestDataWriter.js');

const csvParser = new CsvParser()
const fileName = '../resources/references/parentCsv.csv';
const fieldsToCheck = '../resources/references/fields.csv';
const outputFilename = '../resources/output/parserOutput.csv';
// csvParser.execute(fileName, fieldsToCheck, outputFilename);

const testWriter = new TestDataWriter();
const testOutputFilename = '../resources/output/parserTestOutput.csv';
const positionArr = [0,1,2,5, 6];
testWriter.execute(outputFilename, testOutputFilename, positionArr);