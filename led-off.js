const { Gpio } = require("onoff");

// set BCM 4 pin as 'output'
const ledOut = new Gpio("4", "out");

// current LED state
let isLedOn = false;

// turn the light off
ledOut.writeSync(0);
console.log('LED is off')
console.log({ledOut})
