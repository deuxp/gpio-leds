const { Gpio } = require("onoff");

// set BCM 4 pin as 'output'
const ledOut = new Gpio(4, "out");

// current LED state
// let isLedOn = false;

ledOut.writeSync(0); // should be off

console.log(ledOut.readSync()) // 0:off 1:on
