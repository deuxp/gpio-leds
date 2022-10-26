const { Gpio } = require("onoff");
const lightSwitch = Number(process.argv[2]);
const PIN = 4;
const OUT = "out";
let output;

const ledOut = new Gpio(PIN, OUT);

const LEDToggle = (value) => {
  const isLEDon = !!value;
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
