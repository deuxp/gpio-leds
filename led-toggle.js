const { Gpio } = require("onoff");
const lightSwitch = process.argv[2];
const PIN = 4;
const OUT = "out";
let output;

const ledOut = new Gpio(PIN, OUT);

const LEDToggle = (value) => {
  if (Gpio.accessible) {
    ledOut.writeSync(value);
    console.log("Is light on: ", !!value);
  } else {
    output = {
      BCM: PIN,
      high: !!value,
      low: !!value,
      state: `The LED is ${!!value ? "on" : "off"}`,
    };
    console.log({ output });
  }
};

// Driver Code
LEDToggle(lightSwitch);

// Log current state of the pin after func call
console.log("LED current state: ", ledOut.readSync() ? "on" : "off"); // 0:off 1:on
