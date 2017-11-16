'use strict';
goog.provide('Blockly.Blocks.basic');
goog.provide('Blockly.Constants.Basic');

goog.require('Blockly.Blocks');
Blockly.Constants.Basic.HUE = 205;
Blockly.Blocks.basic.HUE = Blockly.Constants.Basic.HUE;


Blockly.defineBlocksWithJsonArray([

{
  "type": "button_pressed",
  "message0": "%1 button  %2 is pressed %3 %4",
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
      "name": "button",
      "options": [
        [
          "A",
          "OPTIONNAME"
        ],
        [
          "B",
          "OPTIONNAME"
        ],
        [
          "A+B",
          "OPTIONNAME"
        ]
      ]
    },

    {
      "type": "input_dummy"
    },
    {
      "type": "input_statement",
      "name": "connect"
    }
  ],
  "inputsInline": true,
  "colour": 30,
  "tooltip": "",
  "helpUrl": ""
},

{
  "type": "on_shake",
  "message0": "%1 on %2 %3 %4",
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
      "name": "operator",
      "options": [
        [
          "shake",
          "OPTIONNAME"
        ],
        [
          "logo up",
          "OPTIONNAME"
        ],
        [
          "logo down",
          "OPTIONNAME"
        ],
        [
          "screen up",
          "OPTIONNAME"
        ],
        [
          "screen down",
          "OPTIONNAME"
        ],
        [
          "tilt left ",
          "OPTIONNAME"
        ],
        [
          "tilt right",
          "OPTIONNAME"
        ],
        [
          "free fall",
          "OPTIONNAME"
        ],
        [
          "3g",
          "OPTIONNAME"
        ],
        [
          "6g",
          "OPTIONNAME"
        ],
        [
          "8g",
          "OPTIONNAME"
        ]
      ]
    },
    {
      "type": "input_dummy"
    },
    {
      "type": "input_statement",
      "name": "NAME"
    }
  ],
  "inputsInline": true,
  "colour": 30,
  "tooltip": "",
  "helpUrl": ""
},

{
  "type": "on_pin_pressd",
  "message0": "%1 on pin  %2 presed %3 %4",
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
      "name": "NAME",
      "options": [
        [
          "p0",
          "OPTIONNAME"
        ],
        [
          "p1",
          "OPTIONNAME"
        ],
        [
          "p2",
          "OPTIONNAME"
        ]
      ]
    },


    {
      "type": "input_dummy"
    },
    {
      "type": "input_statement",
      "name": "pin "
    }
  ],
  "inputsInline": true,
  "colour": 30,
  "tooltip": "",
  "helpUrl": ""
},

{
  "type": "buttona_is_pressed",
  "message0": "%1 button %2 is pressed",
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
      "name": "ABAB",
      "options": [
        [
          "A",
          "OPTIONNAME"
        ],
        [
          "B",
          "OPTIONNAME"
        ],
        [
          "A+B",
          "OPTIONNAME"
        ]
      ]
    }
  ],
  "output": null,
  "colour": 30,
  "tooltip": "",
  "helpUrl": ""
},


{
  "type": "pin_is_pressed",
  "message0": "%1 pin %2 is pressed",
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
      "name": "NAME",
      "options": [
        [
          "p0",
          "OPTIONNAME"
        ],
        [
          "p1",
          "OPTIONNAME"
        ],
        [
          "p2",
          "OPTIONNAME"
        ]
      ]
    }
  ],
  "output": null,
  "colour": 30,
  "tooltip": "",
  "helpUrl": ""
},


{
  "type": "acceleration",
  "message0": "%1 acceleration(mg) %2",
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
      "name": "NAME",
      "options": [
        [
          "x",
          "OPTIONNAME"
        ],
        [
          "y",
          "OPTIONNAME"
        ],
        [
          "z",
          "OPTIONNAME"
        ],
        [
          "strength",
          "OPTIONNAME"
        ]
      ]
    }
  ],
  "output": null,
  "colour": 30,
  "tooltip": "",
  "helpUrl": ""
},


{
  "type": "light_level",
  "message0": "%1 light level",
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
  "colour": 30,
  "tooltip": "",
  "helpUrl": ""
},


{
  "type": "temperature",
  "message0": "%1 temperature(℃)",
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
  "colour": 30,
  "tooltip": "",
  "helpUrl": ""
},
{
  "type": "compassheading",
  "message0": "%1 compass heading(°)",
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
  "colour": 30,
  "tooltip": "",
  "helpUrl": ""
}

]); // END JSON EXTRACT
