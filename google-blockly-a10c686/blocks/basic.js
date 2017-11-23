'use strict';
goog.provide('Blockly.Blocks.basic');
goog.provide('Blockly.Constants.Basic');

goog.require('Blockly.Blocks');
Blockly.Constants.Basic.HUE = 205;
Blockly.Blocks.basic.HUE = Blockly.Constants.Basic.HUE;


Blockly.defineBlocksWithJsonArray([


{
  "type": "show_string_1",
  "message0": "%1 show string  %2 %3",
  "args0": [
    {
      "type": "field_image",
      "src": "https://www.gstatic.com/codesite/ph/images/star_on.gif",
      "width": 15,
      "height": 15,
      "alt": "*"
    },
    {
      "type": "input_dummy"
    },
    {
      "type": "input_value",
      "name": "string",
      "check": "String"
    }
  ],
  "inputsInline": true,
  "previousStatement": null,
  "nextStatement": null,
  "colour": 230,
  "tooltip": "",
  "helpUrl": ""
},
{
  "type": "forever",
  "message0": "%1 forever %2 %3",
  "args0": [
    {
      "type": "field_image",
      "src": "https://www.gstatic.com/codesite/ph/images/star_on.gif",
      "width": 15,
      "height": 15,
      "alt": "*"
    },
    {
      "type": "input_dummy"
    },
    {
      "type": "input_statement",
      "name": "forever"
    }
  ],
  "colour": 230,
  "tooltip": "",
  "helpUrl": ""
},
{
  "type": "pause__ms_",
  "message0": "%1 pause (ms) %2",
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
      "name": "NAME",
      "align": "CENTRE"
    }
  ],
  "inputsInline": true,
  "previousStatement": null,
  "nextStatement": null,
  "colour": 230,
  "tooltip": "",
  "helpUrl": ""
},

{
  "type": "on_start",
  "message0": "on start %1 %2",
  "args0": [
    {
      "type": "input_dummy"
    },
    {
      "type": "input_statement",
      "name": "NAME"
    }
  ],
  "inputsInline": true,
  "colour": 230,
  "tooltip": "",
  "helpUrl": ""
},

{
  "type": "show_number",
  "message0": "%1 show number %2 %3",
  "args0": [
    {
      "type": "field_image",
      "src": "https://www.gstatic.com/codesite/ph/images/star_on.gif",
      "width": 15,
      "height": 15,
      "alt": "*"
    },
    {
      "type": "input_dummy"
    },
    {
      "type": "input_value",
      "name": "number",
      "check": "Number"
    }
  ],
  "inputsInline": true,
  "previousStatement": null,
  "nextStatement": null,
  "colour": 230,
  "tooltip": "",
  "helpUrl": ""
},

{
  "type": "show_led",
  "message0": "%1 show leds %2 %3 %4 %5 %6 %7 %8 %9 %10 %11 %12 %13 %14 %15 %16 %17 %18 %19 %20 %21 %22 %23 %24 %25 %26 %27 %28 %29 %30 %31",
  "args0": [
    {
      "type": "field_image",
      "src": "https://www.gstatic.com/codesite/ph/images/star_on.gif",
      "width": 15,
      "height": 15,
      "alt": "*"
    },
    {
      "type": "input_dummy"
    },
    {
      "type": "field_checkbox",
      "name": "led11",
      "checked": false
    },
    {
      "type": "field_checkbox",
      "name": "led12",
      "checked": false
    },
    {
      "type": "field_checkbox",
      "name": "led13",
      "checked": false
    },
    {
      "type": "field_checkbox",
      "name": "led14",
      "checked": false
    },
    {
      "type": "field_checkbox",
      "name": "led15",
      "checked": false
    },
    {
      "type": "input_dummy"
    },
    {
      "type": "field_checkbox",
      "name": "led21",
      "checked": false
    },
    {
      "type": "field_checkbox",
      "name": "led22",
      "checked": false
    },
    {
      "type": "field_checkbox",
      "name": "led23",
      "checked": false
    },
    {
      "type": "field_checkbox",
      "name": "led24",
      "checked": false
    },
    {
      "type": "field_checkbox",
      "name": "led25",
      "checked": false
    },
    {
      "type": "input_dummy"
    },
    {
      "type": "field_checkbox",
      "name": "led31",
      "checked": false
    },
    {
      "type": "field_checkbox",
      "name": "led32",
      "checked": false
    },
    {
      "type": "field_checkbox",
      "name": "led33",
      "checked": false
    },
    {
      "type": "field_checkbox",
      "name": "led34",
      "checked": false
    },
    {
      "type": "field_checkbox",
      "name": "led35",
      "checked": false
    },
    {
      "type": "input_dummy"
    },
    {
      "type": "field_checkbox",
      "name": "led41",
      "checked": false
    },
    {
      "type": "field_checkbox",
      "name": "led42",
      "checked": false
    },
    {
      "type": "field_checkbox",
      "name": "led43",
      "checked": false
    },
    {
      "type": "field_checkbox",
      "name": "led44",
      "checked": false
    },
    {
      "type": "field_checkbox",
      "name": "led45",
      "checked": false
    },
    {
      "type": "input_dummy"
    },
    {
      "type": "field_checkbox",
      "name": "led51",
      "checked": false
    },
    {
      "type": "field_checkbox",
      "name": "led52",
      "checked": false
    },
    {
      "type": "field_checkbox",
      "name": "led53",
      "checked": false
    },
    {
      "type": "field_checkbox",
      "name": "led54",
      "checked": false
    },
    {
      "type": "field_checkbox",
      "name": "led55",
      "checked": false
    }
  ],
  "previousStatement": null,
  "nextStatement": null,
  "colour": 230,
  "tooltip": "",
  "helpUrl": ""
},
{
  "type": "show_icon",
  "message0": "%1 show leds %2",
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
          {
            "src": "https://pxt.azureedge.net/commit/fd36730662721acee07256522e18e577e4275806/blocks/iconnames/heart.png",
            "width": 30,
            "height": 30,
            "alt": "*"
          },
          "heart"
        ],
        [
          {
            "src": "https://pxt.azureedge.net/commit/fd36730662721acee07256522e18e577e4275806/blocks/iconnames/smallheart.png",
            "width": 30,
            "height": 30,
            "alt": "*"
          },
          "small heart"
        ],
        [
          {
            "src": "https://pxt.azureedge.net/commit/fd36730662721acee07256522e18e577e4275806/blocks/iconnames/yes.png",
            "width": 30,
            "height": 30,
            "alt": "*"
          },
          "yes"
        ],
        [
          {
            "src": "https://pxt.azureedge.net/commit/fd36730662721acee07256522e18e577e4275806/blocks/iconnames/no.png",
            "width": 30,
            "height": 30,
            "alt": "*"
          },
          "no"
        ],
        [
          {
            "src": "https://pxt.azureedge.net/commit/fd36730662721acee07256522e18e577e4275806/blocks/iconnames/happy.png",
            "width": 30,
            "height": 30,
            "alt": "*"
          },
          "happy"
        ]
      ]
    }
  ],
  "previousStatement": null,
  "nextStatement": null,
  "colour": 230,
  "tooltip": "",
  "helpUrl": ""
},
{
  "type": "clear_screen",
  "message0": "%1 clear screen ",
  "args0": [
    {
      "type": "field_image",
      "src": "https://www.gstatic.com/codesite/ph/images/star_on.gif",
      "width": 15,
      "height": 15,
      "alt": "*"
    }
  ],
  "previousStatement": null,
  "nextStatement": null,
  "colour": 230,
  "tooltip": "",
  "helpUrl": ""
}









]); // END JSON EXTRACT