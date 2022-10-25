const Gpio = require("onoff").Gpio;
const lightSwitch = Number( process.argv[2] );

let LED = new Gpio(5, "out");

const access = Gpio.accessible;
console.log({ access }); // checking functionality

LED.writeSync(lightSwitch);
console.log('output: ', LED.readSync())
console.log({ lightSwitch: !!lightSwitch })
