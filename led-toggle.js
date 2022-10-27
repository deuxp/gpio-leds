const { Gpio } = require("onoff");
const { LEDToggle } = require("./helpers");

// argument from the command line: either 1 or 0
const lightSwitch = Number(process.argv[2]);

// constants
const PIN = 4;
const OUT = "out";

// initialize the pin: BCM label
const ledOut = new Gpio(PIN, OUT);

// Driver Code
LEDToggle(lightSwitch);

// Log current state of the pin after func call
console.log("LED state read from pin: ", ledOut.readSync() ? "on" : "off"); // 0:off 1:on
