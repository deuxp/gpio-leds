const { Gpio } = require("onoff");

// set BCM 4 pin as 'output'
const ledOut = new Gpio("4", "out");

// current LED state
let isLedOn = false;

// run an infinite interval
setInterval(() => {
  ledOut.writeSync(isLedOn ? 0 : 1);
  isLedOn = !isLedOn; // toggle state
}, 3000);
