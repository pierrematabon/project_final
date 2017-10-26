'use strict';
goog.provide('Blockly.Blocks.led');
goog.provide('Blockly.Constants.Led');

goog.require('Blockly.Blocks');
Blockly.Constants.Led.HUE = 205;
Blockly.Blocks.led.HUE = Blockly.Constants.Led.HUE;

Blockly.defineBlocksWithJsonArray([
{
  "type": "plot",
  "message0": "%1 plot x %2 y %3",
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
      "name": "plot_input_x",
      "check": "Number"
    },
    {
      "type": "input_value",
      "name": "plot_input_y",
      "check": "Number"
    }
  ],
  "inputsInline": true,
  "previousStatement": null,
  "nextStatement": null,
  "colour": 240,
  "tooltip": "",
  "helpUrl": ""
},
{
  "type": "unplot",
  "message0": "%1 unplot x %2 y %3",
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
      "name": "unplot_input_x",
      "check": "Number"
    },
    {
      "type": "input_value",
      "name": "unplot_input_y",
      "check": "Number"
    }
  ],
  "inputsInline": true,
  "previousStatement": null,
  "nextStatement": null,
  "colour": 240,
  "tooltip": "",
  "helpUrl": ""
},
{
  "type": "toggle",
  "message0": "%1 toggle x %2 y %3",
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
      "name": "toggle_input_x",
      "check": "Number"
    },
    {
      "type": "input_value",
      "name": "toggle_input_y",
      "check": "Number"
    }
  ],
  "inputsInline": true,
  "previousStatement": null,
  "nextStatement": null,
  "colour": 240,
  "tooltip": "",
  "helpUrl": ""
},
{
  "type": "point",
  "message0": "%1 point x %2 y %3",
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
      "name": "point_input_x",
      "check": "Number"
    },
    {
      "type": "input_value",
      "name": "point_input_y",
      "check": "Number"
    }
  ],
  "inputsInline": true,
  "output": null,
  "colour": 240,
  "tooltip": "",
  "helpUrl": ""
},
{
  "type": "plot_bar",
  "message0": "%1 plot bar graph of %2 up to %3",
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
      "name": "plot_bar_input_graph_of",
      "check": "Number"
    },
    {
      "type": "input_value",
      "name": "plot_bar_input_up_to",
      "check": "Number",
      "align": "RIGHT"
    }
  ],
  "inputsInline": false,
  "previousStatement": null,
  "nextStatement": null,
  "colour": 240,
  "tooltip": "",
  "helpUrl": ""
},
{
  "type": "plot_more",
  "message0": "%1 plot x %2 y %3 brightness %4",
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
      "name": "plot_more_x",
      "check": "Number"
    },
    {
      "type": "input_value",
      "name": "plot_more_y",
      "check": "Number"
    },
    {
      "type": "input_value",
      "name": "brightness",
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
  "type": "brightness",
  "message0": "%1 brightness",
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
  "colour": 230,
  "tooltip": "",
  "helpUrl": ""
},
{
  "type": "set_brightness",
  "message0": "%1 set brightness %2",
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
      "name": "set_brightness_input",
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
  "type": "stop_animation",
  "message0": "%1 stop animation",
  "args0": [
    {
      "type": "field_image",
      "src": "https://www.gstatic.com/codesite/ph/images/star_on.gif",
      "width": 15,
      "height": 15,
      "alt": "*"
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
  "type": "led_enable",
  "message0": "%1 led enable %2",
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
      "name": "led_enable_input",
      "check": "Boolean"
    }
  ],
  "inputsInline": true,
  "previousStatement": null,
  "nextStatement": null,
  "colour": 230,
  "tooltip": "",
  "helpUrl": ""
}
]); // END JSON EXTRACT