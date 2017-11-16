'use strict';
goog.provide('Blockly.Blocks.pins');
goog.provide('Blockly.Constants.Pins');

goog.require('Blockly.Blocks');
Blockly.Constants.Pins.HUE = 205;
Blockly.Blocks.pins.HUE = Blockly.Constants.Pins.HUE;


Blockly.defineBlocksWithJsonArray([
{
  "type": "digital_read",
  "message0": "%1 digital read pin %2",
  "args0": [
    {
      "type": "field_image",
      "src": "https://www.gstatic.com/codesite/ph/images/star_on.gif",
      "width": 15,
      "height": 15,
      "alt": "*"
    },
    {
      "type": "field_dropdown",
      "name": "digital_pin_input",
      "options": [
        [
          "P0",
          "pin0"
        ],
        [
          "P1",
          "pin1"
        ],
        [
          "P2",
          "pin2"
        ],
        [
          "P3",
          "pin3"
        ],
        [
          "P4",
          "pin4"
        ],
        [
          "P5",
          "pin5"
        ],
        [
          "P6",
          "pin6"
        ],
        [
          "P7",
          "pin7"
        ],
        [
          "P8",
          "pin8"
        ],
        [
          "P9",
          "pin9"
        ],
        [
          "P10",
          "pin10"
        ],
        [
          "P11",
          "pin11"
        ],
        [
          "P12",
          "pin12"
        ],
        [
          "P13",
          "pin13"
        ],
        [
          "P14",
          "pin14"
        ],
        [
          "P15",
          "pin15"
        ],
        [
          "P16",
          "pin16"
        ],
        [
          "P17",
          "pin17"
        ],
        [
          "P18",
          "pin18"
        ],
        [
          "P19",
          "pin19"
        ],
        [
          "P20",
          "pin20"
        ]
      ]
    }
  ],
  "output": null,
  "colour": 0,
  "tooltip": "",
  "helpUrl": ""
},
{
  "type": "digital_write",
  "message0": "%1 digital write pin %2 %3 to %4",
  "args0": [
    {
      "type": "field_image",
      "src": "https://www.gstatic.com/codesite/ph/images/star_on.gif",
      "width": 15,
      "height": 15,
      "alt": "*"
    },
    {
      "type": "field_dropdown",
      "name": "digital_pin_input",
      "options": [
        [
          "P0",
          "pin0"
        ],
        [
          "P1",
          "pin1"
        ],
        [
          "P2",
          "pin2"
        ],
        [
          "P3",
          "pin3"
        ],
        [
          "P4",
          "pin4"
        ],
        [
          "P5",
          "pin5"
        ],
        [
          "P6",
          "pin6"
        ],
        [
          "P7",
          "pin7"
        ],
        [
          "P8",
          "pin8"
        ],
        [
          "P9",
          "pin9"
        ],
        [
          "P10",
          "pin10"
        ],
        [
          "P11",
          "pin11"
        ],
        [
          "P12",
          "pin12"
        ],
        [
          "P13",
          "pin13"
        ],
        [
          "P14",
          "pin14"
        ],
        [
          "P15",
          "pin15"
        ],
        [
          "P16",
          "pin16"
        ],
        [
          "P17",
          "pin17"
        ],
        [
          "P18",
          "pin18"
        ],
        [
          "P19",
          "pin19"
        ],
        [
          "P20",
          "pin20"
        ]
      ]
    },
    {
      "type": "input_dummy"
    },
    {
      "type": "input_value",
      "name": "value_input_number",
      "check": "Number"
    }
  ],
  "inputsInline": true,
  "previousStatement": null,
  "nextStatement": null,
  "colour": 0,
  "tooltip": "",
  "helpUrl": ""
},
{
  "type": "analog_read_pin",
  "message0": "%1 analog read pin  %2",
  "args0": [
    {
      "type": "field_image",
      "src": "https://www.gstatic.com/codesite/ph/images/star_on.gif",
      "width": 15,
      "height": 15,
      "alt": "*"
    },
    {
      "type": "field_dropdown",
      "name": "digital_pin_input",
      "options": [
        [
          "P0",
          "pin0"
        ],
        [
          "P1",
          "pin1"
        ],
        [
          "P2",
          "pin2"
        ],
        [
          "P3",
          "pin3"
        ],
        [
          "P4",
          "pin4"
        ],
        [
          "P5",
          "pin5"
        ],
        [
          "P6",
          "pin6"
        ],
        [
          "P7",
          "pin7"
        ],
        [
          "P8",
          "pin8"
        ],
        [
          "P9",
          "pin9"
        ],
        [
          "P10",
          "pin10"
        ],
        [
          "P11",
          "pin11"
        ],
        [
          "P12",
          "pin12"
        ],
        [
          "P13",
          "pin13"
        ],
        [
          "P14",
          "pin14"
        ],
        [
          "P15",
          "pin15"
        ],
        [
          "P16",
          "pin16"
        ],
        [
          "P17",
          "pin17"
        ],
        [
          "P18",
          "pin18"
        ],
        [
          "P19",
          "pin19"
        ],
        [
          "P20",
          "pin20"
        ]
      ]
    }
  ],
  "output": null,
  "colour": 0,
  "tooltip": "",
  "helpUrl": ""
},
{
  "type": "analog_write_pin",
  "message0": "%1 analog write pin  %2 %3 to %4",
  "args0": [
    {
      "type": "field_image",
      "src": "https://www.gstatic.com/codesite/ph/images/star_on.gif",
      "width": 15,
      "height": 15,
      "alt": "*"
    },
    {
      "type": "field_dropdown",
      "name": "digital_pin_input",
      "options": [
        [
          "P0",
          "pin0"
        ],
        [
          "P1",
          "pin1"
        ],
        [
          "P2",
          "pin2"
        ],
        [
          "P3",
          "pin3"
        ],
        [
          "P4",
          "pin4"
        ],
        [
          "P5 (write only)",
          "pin5"
        ],
        [
          "P6 (write only)",
          "pin6"
        ],
        [
          "P7 (write only)",
          "pin7"
        ],
        [
          "P8 (write only)",
          "pin8"
        ],
        [
          "P9 (write only)",
          "pin9"
        ],
        [
          "P10",
          "pin10"
        ],
        [
          "P11 (write only)",
          "pin11"
        ],
        [
          "P12 (write only)",
          "pin12"
        ],
        [
          "P13 (write only)",
          "pin13"
        ],
        [
          "P14 (write only)",
          "pin14"
        ],
        [
          "P15 (write only)",
          "pin15"
        ],
        [
          "P16 (write only)",
          "pin16"
        ],
        [
          "P17 (write only)",
          "pin17"
        ],
        [
          "P18 (write only)",
          "pin18"
        ],
        [
          "P19 (write only)",
          "pin19"
        ],
        [
          "P20 (write only)",
          "pin20"
        ]
      ]
    },
    {
      "type": "input_dummy"
    },
    {
      "type": "input_value",
      "name": "value_input_number",
      "check": "Number"
    }
  ],
  "inputsInline": true,
  "previousStatement": null,
  "nextStatement": null,
  "colour": 0,
  "tooltip": "",
  "helpUrl": ""
},
{
  "type": "map_pin",
  "message0": "map %1 from low %2 from high %3 to low %4 to high %5",
  "args0": [
    {
      "type": "input_value",
      "name": "value_input_map",
      "check": "Number"
    },
    {
      "type": "input_value",
      "name": "value_input_from_low",
      "check": "Number"
    },
    {
      "type": "input_value",
      "name": "value_input_from_high",
      "check": "Number"
    },
    {
      "type": "input_value",
      "name": "value_input_to_low",
      "check": "Number"
    },
    {
      "type": "input_value",
      "name": "value_input_to_high",
      "check": "Number"
    }
  ],
  "inputsInline": false,
  "output": null,
  "colour": 0,
  "tooltip": "",
  "helpUrl": ""
},
{
  "type": "analog_set_period_pin",
  "message0": "analog set period pin  %1 %2 to (µs) %3",
  "args0": [
    {
      "type": "field_dropdown",
      "name": "analog_set_period_pin",
      "options": [
        [
          "P0",
          "pin0"
        ],
        [
          "P1",
          "pin1"
        ],
        [
          "P2",
          "pin2"
        ],
        [
          "P3",
          "pin3"
        ],
        [
          "P4",
          "pin4"
        ],
        [
          "P10",
          "pin10"
        ],
        [
          "P5 (write only)",
          "pin5"
        ],
        [
          "P6 (write only)",
          "pin6"
        ],
        [
          "P7 (write only)",
          "pin7"
        ],
        [
          "P8 (write only)",
          "pin8"
        ],
        [
          "P9 (write only)",
          "pin9"
        ],
        [
          "P11 (write only)",
          "pin11"
        ],
        [
          "p12 (write only)",
          "pin12"
        ],
        [
          "p13 (write only)",
          "pin13"
        ],
        [
          "p14 (write only)",
          "pin14"
        ],
        [
          "p15 (write only)",
          "pin15"
        ],
        [
          "p16 (write only)",
          "pin16"
        ],
        [
          "p17 (write only)",
          "pin17"
        ],
        [
          "p18 (write only)",
          "pin18"
        ],
        [
          "p19 (write only)",
          "pin19"
        ],
        [
          "P20 (write only)",
          "pin20"
        ]
      ]
    },
    {
      "type": "input_dummy"
    },
    {
      "type": "input_value",
      "name": "value_input_set_period",
      "check": "Number"
    }
  ],
  "inputsInline": true,
  "previousStatement": null,
  "nextStatement": null,
  "colour": 0,
  "tooltip": "",
  "helpUrl": ""
},
{
  "type": "servo_write_pin",
  "message0": "servo write pin  %1 %2 to %3",
  "args0": [
    {
      "type": "field_dropdown",
      "name": "servo_write_input_pin",
      "options": [
        [
          "P0",
          "pin0"
        ],
        [
          "P1",
          "pin1"
        ],
        [
          "P2",
          "pin2"
        ],
        [
          "P3",
          "pin3"
        ],
        [
          "P4",
          "pin4"
        ],
        [
          "P10",
          "pin10"
        ],
        [
          "P5 (write only)",
          "pin5"
        ],
        [
          "P6 (write only)",
          "pin6"
        ],
        [
          "P7 (write only)",
          "pin7"
        ],
        [
          "P8 (write only)",
          "pin8"
        ],
        [
          "P9 (write only)",
          "pin9"
        ],
        [
          "P11 (write only)",
          "pin11"
        ],
        [
          "p12 (write only)",
          "pin12"
        ],
        [
          "p13 (write only)",
          "pin13"
        ],
        [
          "p14 (write only)",
          "pin14"
        ],
        [
          "p15 (write only)",
          "pin15"
        ],
        [
          "p16 (write only)",
          "pin16"
        ],
        [
          "p17 (write only)",
          "pin17"
        ],
        [
          "p18 (write only)",
          "pin18"
        ],
        [
          "p19 (write only)",
          "pin19"
        ],
        [
          "P20 (write only)",
          "pin20"
        ]
      ]
    },
    {
      "type": "input_dummy"
    },
    {
      "type": "input_value",
      "name": "value_input_servo_write",
      "check": "Number"
    }
  ],
  "inputsInline": true,
  "previousStatement": null,
  "nextStatement": null,
  "colour": 0,
  "tooltip": "",
  "helpUrl": ""
},
{
  "type": "servo_set_pulse_pin",
  "message0": "servo set pulse pin  %1 %2 to (µs) %3",
  "args0": [
    {
      "type": "field_dropdown",
      "name": "analog_set_period_pin",
      "options": [
        [
          "P0",
          "pin0"
        ],
        [
          "P1",
          "pin1"
        ],
        [
          "P2",
          "pin2"
        ],
        [
          "P3",
          "pin3"
        ],
        [
          "P4",
          "pin4"
        ],
        [
          "P10",
          "pin10"
        ],
        [
          "P5 (write only)",
          "pin5"
        ],
        [
          "P6 (write only)",
          "pin6"
        ],
        [
          "P7 (write only)",
          "pin7"
        ],
        [
          "P8 (write only)",
          "pin8"
        ],
        [
          "P9 (write only)",
          "pin9"
        ],
        [
          "P11 (write only)",
          "pin11"
        ],
        [
          "p12 (write only)",
          "pin12"
        ],
        [
          "p13 (write only)",
          "pin13"
        ],
        [
          "p14 (write only)",
          "pin14"
        ],
        [
          "p15 (write only)",
          "pin15"
        ],
        [
          "p16 (write only)",
          "pin16"
        ],
        [
          "p17 (write only)",
          "pin17"
        ],
        [
          "p18 (write only)",
          "pin18"
        ],
        [
          "p19 (write only)",
          "pin19"
        ],
        [
          "P20 (write only)",
          "pin20"
        ]
      ]
    },
    {
      "type": "input_dummy"
    },
    {
      "type": "input_value",
      "name": "value_input_servo_set_pulse",
      "check": "Number"
    }
  ],
  "inputsInline": true,
  "previousStatement": null,
  "nextStatement": null,
  "colour": 0,
  "tooltip": "",
  "helpUrl": ""
},
{
  "type": "on_pin",
  "message0": "on pin  %1 pulsed %2 %3 %4",
  "args0": [
    {
      "type": "field_dropdown",
      "name": "on_pin_dropdown",
      "options": [
        [
          "P0",
          "pin0"
        ],
        [
          "P1",
          "pin1"
        ],
        [
          "P2",
          "pin2"
        ],
        [
          "P3",
          "pin3"
        ],
        [
          "P4",
          "pin4"
        ],
        [
          "P10",
          "pin10"
        ],
        [
          "P5",
          "pin5"
        ],
        [
          "P6",
          "pin6"
        ],
        [
          "P7",
          "pin7"
        ],
        [
          "P8",
          "pin8"
        ],
        [
          "P9",
          "pin9"
        ],
        [
          "P11",
          "pin11"
        ],
        [
          "p12",
          "pin12"
        ],
        [
          "p13",
          "pin13"
        ],
        [
          "p14",
          "pin14"
        ],
        [
          "p15",
          "pin15"
        ],
        [
          "p16",
          "pin16"
        ],
        [
          "p17",
          "pin17"
        ],
        [
          "p18",
          "pin18"
        ],
        [
          "p19",
          "pin19"
        ],
        [
          "P20",
          "pin20"
        ]
      ]
    },
    {
      "type": "field_dropdown",
      "name": "on_pin_dropdown_pulsed",
      "options": [
        [
          "low",
          "LOW"
        ],
        [
          "high",
          "HIGH"
        ]
      ]
    },
    {
      "type": "input_dummy"
    },
    {
      "type": "input_statement",
      "name": "on_pin_statement"
    }
  ],
  "inputsInline": true,
  "colour": 0,
  "tooltip": "",
  "helpUrl": ""
},
{
  "type": "pulse_duration_pin",
  "message0": "%1 pulse duration (µs)",
  "args0": [
    {
      "type": "field_image",
      "src": "https://www.gstatic.com/codesite/ph/images/star_on.gif",
      "width": 15,
      "height": 15,
      "alt": "*"
    }
  ],
  "output": null,
  "colour": 0,
  "tooltip": "",
  "helpUrl": ""
},
{
  "type": "pulse_in_pin",
  "message0": "%1 pulse in (µs) pin  %2 pulsed %3",
  "args0": [
    {
      "type": "field_image",
      "src": "https://www.gstatic.com/codesite/ph/images/star_on.gif",
      "width": 15,
      "height": 15,
      "alt": "*"
    },
    {
      "type": "field_dropdown",
      "name": "pulse_in_pin_dropdown",
      "options": [
        [
          "P0",
          "pin0"
        ],
        [
          "P1",
          "pin1"
        ],
        [
          "P2",
          "pin2"
        ],
        [
          "P3",
          "pin3"
        ],
        [
          "P4",
          "pin4"
        ],
        [
          "P10",
          "pin10"
        ],
        [
          "P5",
          "pin5"
        ],
        [
          "P6",
          "pin6"
        ],
        [
          "P7",
          "pin7"
        ],
        [
          "P8",
          "pin8"
        ],
        [
          "P9",
          "pin9"
        ],
        [
          "P11",
          "pin11"
        ],
        [
          "p12",
          "pin12"
        ],
        [
          "p13",
          "pin13"
        ],
        [
          "p14",
          "pin14"
        ],
        [
          "p15",
          "pin15"
        ],
        [
          "p16",
          "pin16"
        ],
        [
          "p17",
          "pin17"
        ],
        [
          "p18",
          "pin18"
        ],
        [
          "p19",
          "pin19"
        ],
        [
          "P20",
          "pin20"
        ]
      ]
    },
    {
      "type": "field_dropdown",
      "name": "pulse_in_pin_dropdown_pulsed",
      "options": [
        [
          "low",
          "LOW"
        ],
        [
          "high",
          "HIGH"
        ]
      ]
    }
  ],
  "inputsInline": true,
  "output": null,
  "colour": 0,
  "tooltip": "",
  "helpUrl": ""
},
{
  "type": "i2c_read_number_pin",
  "message0": "%1 i2c  read number at address %2 of format %3 repeated %4",
  "args0": [
    {
      "type": "field_image",
      "src": "https://www.gstatic.com/codesite/ph/images/star_on.gif",
      "width": 15,
      "height": 15,
      "alt": "*"
    },
    {
      "type": "input_value",
      "name": "i2c_read_number",
      "check": "Number"
    },
    {
      "type": "field_dropdown",
      "name": "i2c_text",
      "options": [
        [
          "Int8LE",
          "I8LE"
        ],
        [
          "UInt8LE",
          "UI8LE"
        ],
        [
          "Int16LE",
          "I16LE"
        ],
        [
          "UInt16LE",
          "UI16LE"
        ],
        [
          "Int32LE",
          "I32LE"
        ],
        [
          "Int8BE",
          "I8BE"
        ],
        [
          "UInt8BE",
          "UI8BE"
        ],
        [
          "Int16BE",
          "I16BE"
        ],
        [
          "UInt16BE",
          "UI16BE"
        ],
        [
          "Int32BE",
          "I32BE"
        ]
      ]
    },
    {
      "type": "input_value",
      "name": "i2C_read_number_of_format",
      "check": "Boolean"
    }
  ],
  "inputsInline": true,
  "output": null,
  "colour": 0,
  "tooltip": "",
  "helpUrl": ""
},
{
  "type": "i2c_write_number_pin",
  "message0": "%1 i2c  write number %2 at address %3 with value %4 of format %5 %6 repeated %7",
  "args0": [
    {
      "type": "field_image",
      "src": "https://www.gstatic.com/codesite/ph/images/star_on.gif",
      "width": 15,
      "height": 15,
      "alt": "*"
    },
    {
      "type": "input_dummy",
      "align": "CENTRE"
    },
    {
      "type": "input_value",
      "name": "at_address",
      "check": "Number",
      "align": "RIGHT"
    },
    {
      "type": "input_value",
      "name": "with_value",
      "check": "Number",
      "align": "RIGHT"
    },
    {
      "type": "field_dropdown",
      "name": "i2c_write_text",
      "options": [
        [
          "Int8LE",
          "I8LE"
        ],
        [
          "UInt8LE",
          "UI8LE"
        ],
        [
          "Int16LE",
          "I16LE"
        ],
        [
          "UInt16LE",
          "UI16LE"
        ],
        [
          "Int32LE",
          "I32LE"
        ],
        [
          "Int8BE",
          "I8BE"
        ],
        [
          "UInt8BE",
          "UI8BE"
        ],
        [
          "Int16BE",
          "I16BE"
        ],
        [
          "UInt16BE",
          "UI16BE"
        ],
        [
          "Int32BE",
          "I32BE"
        ]
      ]
    },
    {
      "type": "input_dummy",
      "align": "CENTRE"
    },
    {
      "type": "input_value",
      "name": "repeated",
      "check": "Boolean",
      "align": "RIGHT"
    }
  ],
  "inputsInline": false,
  "previousStatement": null,
  "nextStatement": null,
  "colour": 0,
  "tooltip": "",
  "helpUrl": ""
},
{
  "type": "spi_write_pin",
  "message0": "spi write %1",
  "args0": [
    {
      "type": "input_value",
      "name": "spi_write_pin_input",
      "check": "Number",
      "align": "RIGHT"
    }
  ],
  "inputsInline": true,
  "output": null,
  "colour": 0,
  "tooltip": "",
  "helpUrl": ""
},
{
  "type": "set_pin",
  "message0": "%1 set pin  %2 to emit %3 events",
  "args0": [
    {
      "type": "field_image",
      "src": "https://www.gstatic.com/codesite/ph/images/star_on.gif",
      "width": 15,
      "height": 15,
      "alt": "*"
    },
    {
      "type": "field_dropdown",
      "name": "set_pin_dropdown",
      "options": [
        [
          "P0",
          "pin0"
        ],
        [
          "P1",
          "pin1"
        ],
        [
          "P2",
          "pin2"
        ],
        [
          "P3",
          "pin3"
        ],
        [
          "P4",
          "pin4"
        ],
        [
          "P10",
          "pin10"
        ],
        [
          "P5",
          "pin5"
        ],
        [
          "P6",
          "pin6"
        ],
        [
          "P7",
          "pin7"
        ],
        [
          "P8",
          "pin8"
        ],
        [
          "P9",
          "pin9"
        ],
        [
          "P11",
          "pin11"
        ],
        [
          "p12",
          "pin12"
        ],
        [
          "p13",
          "pin13"
        ],
        [
          "p14",
          "pin14"
        ],
        [
          "p15",
          "pin15"
        ],
        [
          "p16",
          "pin16"
        ],
        [
          "p17",
          "pin17"
        ],
        [
          "p18",
          "pin18"
        ],
        [
          "p19",
          "pin19"
        ],
        [
          "P20",
          "pin20"
        ]
      ]
    },
    {
      "type": "field_dropdown",
      "name": "set_pin_dropdown_emit",
      "options": [
        [
          "edge",
          "EDGE"
        ],
        [
          "pulse",
          "PULSE"
        ],
        [
          "touch",
          "TOUCH"
        ],
        [
          "none",
          "NONE"
        ]
      ]
    }
  ],
  "inputsInline": true,
  "previousStatement": null,
  "nextStatement": null,
  "colour": 0,
  "tooltip": "",
  "helpUrl": ""
},
{
  "type": "analog_pitch_pin",
  "message0": "%1 analog pitch %2 for (ms) %3",
  "args0": [
    {
      "type": "field_image",
      "src": "https://www.gstatic.com/codesite/ph/images/star_on.gif",
      "width": 15,
      "height": 15,
      "alt": "*"
    },
    {
      "type": "input_value",
      "name": "analog_pitch_pin_input",
      "check": "Number",
      "align": "RIGHT"
    },
    {
      "type": "input_value",
      "name": "analog_pitch_for_pin_input",
      "check": "Number",
      "align": "RIGHT"
    }
  ],
  "inputsInline": true,
  "previousStatement": null,
  "nextStatement": null,
  "colour": 0,
  "tooltip": "",
  "helpUrl": ""
},
{
  "type": "spi_frequency_pin",
  "message0": "%1 spi frequency %2",
  "args0": [
    {
      "type": "field_image",
      "src": "https://www.gstatic.com/codesite/ph/images/star_on.gif",
      "width": 15,
      "height": 15,
      "alt": "*"
    },
    {
      "type": "input_value",
      "name": "spi_frequency_pin_input",
      "check": "Number",
      "align": "RIGHT"
    }
  ],
  "inputsInline": true,
  "previousStatement": null,
  "nextStatement": null,
  "colour": 0,
  "tooltip": "",
  "helpUrl": ""
},
{
  "type": "analog_set_pitch_pin",
  "message0": "%1 analog set pitch pin  %2",
  "args0": [
    {
      "type": "field_image",
      "src": "https://www.gstatic.com/codesite/ph/images/star_on.gif",
      "width": 15,
      "height": 15,
      "alt": "*"
    },
    {
      "type": "field_dropdown",
      "name": "analog_set_pitch_pin_dropdown",
      "options": [
        [
          "P0",
          "pin0"
        ],
        [
          "P1",
          "pin1"
        ],
        [
          "P2",
          "pin2"
        ],
        [
          "P3",
          "pin3"
        ],
        [
          "P4",
          "pin4"
        ],
        [
          "P10",
          "pin10"
        ],
        [
          "P5 (write only)",
          "pin5"
        ],
        [
          "P6 (write only)",
          "pin6"
        ],
        [
          "P7 (write only)",
          "pin7"
        ],
        [
          "P8 (write only)",
          "pin8"
        ],
        [
          "P9 (write only)",
          "pin9"
        ],
        [
          "P11 (write only)",
          "pin11"
        ],
        [
          "p12 (write only)",
          "pin12"
        ],
        [
          "p13 (write only)",
          "pin13"
        ],
        [
          "p14 (write only)",
          "pin14"
        ],
        [
          "p15 (write only)",
          "pin15"
        ],
        [
          "p16 (write only)",
          "pin16"
        ],
        [
          "p17 (write only)",
          "pin17"
        ],
        [
          "p18 (write only)",
          "pin18"
        ],
        [
          "p19 (write only)",
          "pin19"
        ],
        [
          "P20 (write only)",
          "pin20"
        ]
      ]
    }
  ],
  "previousStatement": null,
  "nextStatement": null,
  "colour": 0,
  "tooltip": "",
  "helpUrl": ""
},
{
  "type": "set_pull_pin",
  "message0": "%1 set pull pin %2 to %3",
  "args0": [
    {
      "type": "field_image",
      "src": "https://www.gstatic.com/codesite/ph/images/star_on.gif",
      "width": 15,
      "height": 15,
      "alt": "*"
    },
    {
      "type": "field_dropdown",
      "name": "set_pull_pin_dropdown",
      "options": [
        [
          "P0",
          "pin0"
        ],
        [
          "P1",
          "pin1"
        ],
        [
          "P2",
          "pin2"
        ],
        [
          "P3",
          "pin3"
        ],
        [
          "P4",
          "pin4"
        ],
        [
          "P10",
          "pin10"
        ],
        [
          "P5",
          "pin5"
        ],
        [
          "P6",
          "pin6"
        ],
        [
          "P7",
          "pin7"
        ],
        [
          "P8",
          "pin8"
        ],
        [
          "P9",
          "pin9"
        ],
        [
          "P11",
          "pin11"
        ],
        [
          "p12",
          "pin12"
        ],
        [
          "p13",
          "pin13"
        ],
        [
          "p14",
          "pin14"
        ],
        [
          "p15",
          "pin15"
        ],
        [
          "p16",
          "pin16"
        ],
        [
          "p17",
          "pin17"
        ],
        [
          "p18",
          "pin18"
        ],
        [
          "p19",
          "pin19"
        ],
        [
          "P20",
          "pin20"
        ]
      ]
    },
    {
      "type": "field_dropdown",
      "name": "set_pull_pin_dropdown_to",
      "options": [
        [
          "up",
          "UP"
        ],
        [
          "down",
          "DOWN"
        ],
        [
          "none",
          "NONE"
        ]
      ]
    }
  ],
  "previousStatement": null,
  "nextStatement": null,
  "colour": 0,
  "tooltip": "",
  "helpUrl": ""
},
{
  "type": "spi_format_bits_pin",
  "message0": "%1 spi format bits %2 mode %3",
  "args0": [
    {
      "type": "field_image",
      "src": "https://www.gstatic.com/codesite/ph/images/star_on.gif",
      "width": 15,
      "height": 15,
      "alt": "*"
    },
    {
      "type": "input_value",
      "name": "spi_format_bits_pin_input",
      "check": "Number",
      "align": "RIGHT"
    },
    {
      "type": "input_value",
      "name": "spi_format_bits_mode_pin_input",
      "check": "Number",
      "align": "RIGHT"
    }
  ],
  "inputsInline": true,
  "previousStatement": null,
  "nextStatement": null,
  "colour": 0,
  "tooltip": "",
  "helpUrl": ""
},
{
  "type": "spi_set_pin",
  "message0": "%1 spi set pins MOSI %2 MISO %3 SCK %4",
  "args0": [
    {
      "type": "field_image",
      "src": "https://www.gstatic.com/codesite/ph/images/star_on.gif",
      "width": 15,
      "height": 15,
      "alt": "*"
    },
    {
      "type": "field_dropdown",
      "name": "spi_set_pins_dropdown_MOSI",
      "options": [
        [
          "P0",
          "pin0"
        ],
        [
          "P1",
          "pin1"
        ],
        [
          "P2",
          "pin2"
        ],
        [
          "P3",
          "pin3"
        ],
        [
          "P4",
          "pin4"
        ],
        [
          "P10",
          "pin10"
        ],
        [
          "P5",
          "pin5"
        ],
        [
          "P6",
          "pin6"
        ],
        [
          "P7",
          "pin7"
        ],
        [
          "P8",
          "pin8"
        ],
        [
          "P9",
          "pin9"
        ],
        [
          "P11",
          "pin11"
        ],
        [
          "p12",
          "pin12"
        ],
        [
          "p13",
          "pin13"
        ],
        [
          "p14",
          "pin14"
        ],
        [
          "p15",
          "pin15"
        ],
        [
          "p16",
          "pin16"
        ],
        [
          "p17",
          "pin17"
        ],
        [
          "p18",
          "pin18"
        ],
        [
          "p19",
          "pin19"
        ],
        [
          "P20",
          "pin20"
        ]
      ]
    },
    {
      "type": "field_dropdown",
      "name": "spi_set_pins_dropdown_MISO",
      "options": [
        [
          "P0",
          "pin0"
        ],
        [
          "P1",
          "pin1"
        ],
        [
          "P2",
          "pin2"
        ],
        [
          "P3",
          "pin3"
        ],
        [
          "P4",
          "pin4"
        ],
        [
          "P10",
          "pin10"
        ],
        [
          "P5",
          "pin5"
        ],
        [
          "P6",
          "pin6"
        ],
        [
          "P7",
          "pin7"
        ],
        [
          "P8",
          "pin8"
        ],
        [
          "P9",
          "pin9"
        ],
        [
          "P11",
          "pin11"
        ],
        [
          "p12",
          "pin12"
        ],
        [
          "p13",
          "pin13"
        ],
        [
          "p14",
          "pin14"
        ],
        [
          "p15",
          "pin15"
        ],
        [
          "p16",
          "pin16"
        ],
        [
          "p17",
          "pin17"
        ],
        [
          "p18",
          "pin18"
        ],
        [
          "p19",
          "pin19"
        ],
        [
          "P20",
          "pin20"
        ]
      ]
    },
    {
      "type": "field_dropdown",
      "name": "spi_set_pins_dropdown_SCK",
      "options": [
        [
          "P0",
          "pin0"
        ],
        [
          "P1",
          "pin1"
        ],
        [
          "P2",
          "pin2"
        ],
        [
          "P3",
          "pin3"
        ],
        [
          "P4",
          "pin4"
        ],
        [
          "P10",
          "pin10"
        ],
        [
          "P5",
          "pin5"
        ],
        [
          "P6",
          "pin6"
        ],
        [
          "P7",
          "pin7"
        ],
        [
          "P8",
          "pin8"
        ],
        [
          "P9",
          "pin9"
        ],
        [
          "P11",
          "pin11"
        ],
        [
          "p12",
          "pin12"
        ],
        [
          "p13",
          "pin13"
        ],
        [
          "p14",
          "pin14"
        ],
        [
          "p15",
          "pin15"
        ],
        [
          "p16",
          "pin16"
        ],
        [
          "p17",
          "pin17"
        ],
        [
          "p18",
          "pin18"
        ],
        [
          "p19",
          "pin19"
        ],
        [
          "P20",
          "pin20"
        ]
      ]
    }
  ],
  "previousStatement": null,
  "nextStatement": null,
  "colour": 0,
  "tooltip": "",
  "helpUrl": ""
}
]); // END JSON EXTRACT