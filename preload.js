const { contextBridge } = require('electron');
const fs = require('node:fs');
const path = require('node:path');
const yaml = require('js-yaml');

function prepareQuotes() {
  const datasetString = fs.readFileSync(path.join(__dirname, 'src/dataset.yaml'), 'utf8');
  const dataset = yaml.load(datasetString);

  return dataset.quotes;
}

contextBridge.exposeInMainWorld('api', {
  quotes: prepareQuotes()
});