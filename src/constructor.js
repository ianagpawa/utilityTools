const { CsvReader } = require('./reader.js');

const csvReader = new CsvReader()
const fileName = '../resources/references/parentCsv.csv'
csvReader.execute(fileName, null)
// csvReader.readFile('../resources/references/parentCsv.csv');

