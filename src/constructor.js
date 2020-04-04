const { CsvReader } = require('./reader.js');

const csvReader = new CsvReader()
csvReader.setFileName('somethingFile');
console.log(csvReader.getFileName())

csvReader.setFieldsToCheck('sosdfsdfmethingFile');
console.log(csvReader.getFieldsToCheck())
// csvReader.readFile('../resources/references/parentCsv.csv');

