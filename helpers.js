/**
 * @param {value: number} recieves 1 or 0
 * Pass lightSwitch as the arg. Passed from the process call arguments
 * A failsafe is triggered on the condition that the script is run from not an RPi
 * in which case a diagnostic object is printed to the console for inspection.
 * */
const LEDToggle = value => {
  // converts the value to a boolean value
  let output;
  const isLEDon = !!value;
  // Guard: able to test script if the pins are inactive or broken
  if (Gpio.accessible) {
    ledOut.writeSync(value);
    console.log(`The LED should be ${isLEDon ? "on" : "off"}`);
  } else {
    output = {
      BCM: PIN,
      rawValue: value,
      high: isLEDon,
      low: isLEDon,
      state: `The LED should be ${isLEDon ? "on" : "off"}`,
    };
    console.log({ output });
  }
};

module.exports = { LEDToggle };
