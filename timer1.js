let args = process.argv.slice(2);
const exec = require('child_process').execSync;
for(let i =0; i < args.length; i++) {
  args[i] = args[i] * 1000;
  if (typeof(args[i]) === 'number' && args[i] > 0) {
    setTimeout(() => {
      exec('command say beep')
    }, args[i])
  }
};