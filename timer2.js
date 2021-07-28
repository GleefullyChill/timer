const exec = require('child_process').execSync;
const stdin = process.stdin;
stdin.setRawMode(true);
stdin.setEncoding('utf-8');

const timer = function(input) {
  const tempArr = [input];
  for (let i =0; i < tempArr.length; i++) {
    tempArr[i] = tempArr[i] * 1000;
  if (typeof(tempArr[i]) === 'number' && tempArr[i] > 0) {
    setTimeout(() => {
      exec('command say beep')
    }, tempArr[i])
  }
  
};
}
process.stdin.on('data', (key) => {
  if (key === '\u0062') {
    timer(.00001);
  } else if (key > 0 && key < 10) {
    timer(key);
  } else if (key === '\u0003') {
    process.exit();
  }
});