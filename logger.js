const fs = require('fs');
const fsPromises = require('fs').promises;

function getTimestamp() {
  const now = new Date();
  return now.toISOString().replace('T', ' ').substring(0, 19);
}

async function logMessageAsync(message) {
  const logEntry = `${getTimestamp()} ${message}\n`;
  await fsPromises.appendFile('logs.txt', logEntry);
}

function logMessageSync(message) {
  const logEntry = `${getTimestamp()} ${message}\n`;
  fs.appendFileSync('logs.txt', logEntry);
}

function delay(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

async function runLogger() {
  fs.writeFileSync('logs.txt', '');

  await logMessageAsync('Встал');
  await delay(3000);
  await logMessageAsync('Поел');
  await delay(2000);
  await logMessageAsync('Попил');
  await delay(2000);

  logMessageSync('Поиграл');
  logMessageSync('Проиграл');

  const logContent = fs.readFileSync('logs.txt', 'utf-8');
  console.log('\nСодержимое logs.txt:\n');
  console.log(logContent);
}

runLogger();
