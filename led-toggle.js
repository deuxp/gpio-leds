const { Gpio } = require("onoff");
// argument from the command line: either 1 or 0
const lightSwitch = Number(process.argv[2]);
// constants
const PIN = 4;
const OUT = "out";
let output;

// initialize the pin: BCM label
const ledOut = new Gpio(PIN, OUT);

const LEDToggle = (value) => {
  // converts the value to a boolean value
  const isLEDon = !!value;
  // Guard: able to test script if the pins are inactive or broken
  if (Gpio.accessible) {
    ledOut.writeSync(value);
    console.log("Is light on: ", isLEDon);
  } else {
    output = {
      BCM: PIN,
      rawValue: value,
      high: isLEDon,
      low: isLEDon,
      state: `The LED is ${isLEDon ? "on" : "off"}`,
    };
    console.log({ output });
  }
};

// Driver Code
LEDToggle(lightSwitch);

// Log current state of the pin after func call
console.log("LED current state: ", ledOut.readSync() ? "on" : "off"); // 0:off 1:on
