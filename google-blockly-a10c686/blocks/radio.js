'use strict';
goog.provide('Blockly.Blocks.radio');
goog.provide('Blockly.Constants.Radio');

goog.require('Blockly.Blocks');
Blockly.Constants.Radio.HUE = 205;
Blockly.Blocks.radio.HUE = Blockly.Constants.Radio.HUE;

Blockly.defineBlocksWithJsonArray([
{
  "type": "radio_send",
  "message0": "%1 radio send number %2",
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
      "name": "radio_send_input",
      "check": "Number"
    }
  ],
  "inputsInline": true,
  "previousStatement": null,
  "nextStatement": null,
  "colour": 180,
  "tooltip": "",
  "helpUrl": ""
},
{
  "type": "radio_send_value",
  "message0": "%1 radio send value %2 = %3",
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
      "name": "radio_send_value_input_name",
      "check": "String"
    },
    {
      "type": "input_value",
      "name": "radio_send_value_input_number",
      "check": "Number"
    }
  ],
  "inputsInline": true,
  "previousStatement": null,
  "nextStatement": null,
  "colour": 180,
  "tooltip": "",
  "helpUrl": ""
},
{
  "type": "radio_send_string",
  "message0": "%1 radio send string %2",
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
      "name": "radio_send_value_input_string",
      "check": "String"
    }
  ],
  "inputsInline": true,
  "previousStatement": null,
  "nextStatement": null,
  "colour": 180,
  "tooltip": "",
  "helpUrl": ""
},
{
  "type": "on_radio_received_number",
  "message0": "%1 on radio received %2 %3 %4",
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
      "name": "received_number_dropdown",
      "options": [
        [
          "receivedNumber",
          "RECEIVED_NUMBER"
        ],
        [
          "receivedString",
          "RECEIVED_STRING"
        ],
        [
          "serial",
          "SERIAL"
        ],
        [
          "time",
          "TIME"
        ],
        [
          "Rename variable ...",
          "REN_VAR"
        ],
        [
          "Delete  the \"receivedNumber\" variable",
          "DELET_VAR"
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
  "colour": 180,
  "tooltip": "",
  "helpUrl": "",
  "mutator": "controls_on_radio_received_number_mutator"
},
{
  "type": "on_radio_received_number_2",
  "message0": "%1 on radio received %2 %3 %4 %5",
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
      "name": "on_radio_received_dropdown_1",
      "options": [
        [
          "name",
          "NAME"
        ],
        [
          "receivedNumber",
          "RECEIVED_NUMBER"
        ],
        [
          "receivedString",
          "RECEIVED_STRING"
        ],
        [
          "serial",
          "SERIAL"
        ],
        [
          "time",
          "TIME"
        ],
        [
          "value",
          "VALUE"
        ],
        [
          "Rename variable ...",
          "REN_VAR"
        ],
        [
          "Delete the \"name\" variable",
          "DELETE_VAR"
        ]
      ]
    },
    {
      "type": "field_dropdown",
      "name": "on_radio_received_dropdown_input_2",
      "options": [
        [
          "value",
          "VALUE"
        ],
        [
          "receivedNumber",
          "RECEIVED_NUMBER"
        ],
        [
          "receivedString",
          "RECEIVED_STRING"
        ],
        [
          "serial",
          "SERIAL"
        ],
        [
          "time",
          "TIME"
        ],
        [
          "name",
          "NAME"
        ],
        [
          "Rename variable ...",
          "REN_VAR"
        ],
        [
          "Delete the \"name\" variable",
          "DELETE_VAR"
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
  "colour": 180,
  "tooltip": "",
  "helpUrl": "",
  "mutator": "controls_on_radio_received_number_mutator_2"
},
{
  "type": "on_radio_received_number_3",
  "message0": "%1 on radio received %2 %3 %4",
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
      "name": "on_radio_received_dropdown",
      "options": [
        [
          "receivedString",
          "RECEIVED_STRING"
        ],
        [
          "receivedNumber",
          "RECEIVED_NUMBER"
        ],
        [
          "name",
          "NAME"
        ],
        [
          "serial",
          "SERIAL"
        ],
        [
          "time",
          "TIME"
        ],
        [
          "value",
          "VALUE"
        ],
        [
          "Rename variable ...",
          "REN_VAR"
        ],
        [
          "Delete the \"name\" variable",
          "DELETE_VAR"
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
  "colour": 180,
  "tooltip": "",
  "helpUrl": "",
  "mutator": "controls_on_radio_received_number_mutator_3"
}
    
]); // END JSON EXTRACT

Blockly.defineBlocksWithJsonArray([
{
  "type": "packet",
  "message0": "Packet %1 %2",
  "args0": [
    {
      "type": "input_dummy"
    },
    {
      "type": "input_statement",
      "name": "packet_statement"
    }
  ],
  "inputsInline": true,
  "colour": 180,
  "tooltip": "",
  "helpUrl": ""
},
{

  "type": "received_number",
  "message0": "receivedNumber",
  "inputsInline": true,
  "previousStatement": null,
  "nextStatement": null,
  "colour": 180,
  "tooltip": "",
  "helpUrl": ""
},
{
  "type": "receivedString",
  "message0": "receivedString",
  "inputsInline": true,
  "previousStatement": null,
  "nextStatement": null,
  "colour": 180,
  "tooltip": "",
  "helpUrl": ""
},
{
  "type": "time",
  "message0": "time",
  "inputsInline": true,
  "previousStatement": null,
  "nextStatement": null,
  "colour": 180,
  "tooltip": "",
  "helpUrl": ""
},
{
  "type": "serial",
  "message0": "serial",
  "inputsInline": true,
  "previousStatement": null,
  "nextStatement": null,
  "colour": 180,
  "tooltip": "",
  "helpUrl": ""
},
{
  "type": "signal",
  "message0": "signal",
  "inputsInline": true,
  "previousStatement": null,
  "nextStatement": null,
  "colour": 180,
  "tooltip": "",
  "helpUrl": ""
},
{
  "type": "radio_set_group",
  "message0": "%1 radio set group %2",
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
      "name": "radio_set_group_input",
      "check": "Number"
    }
  ],
  "inputsInline": true,
  "previousStatement": null,
  "nextStatement": null,
  "colour": 180,
  "tooltip": "",
  "helpUrl": ""
},
{
  "type": "radio_set_transmit_power",
  "message0": "%1 radio set transmit power %2",
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
      "name": "radio_set_transmit_power_input",
      "check": "Number"
    }
  ],
  "inputsInline": true,
  "previousStatement": null,
  "nextStatement": null,
  "colour": 180,
  "tooltip": "",
  "helpUrl": ""
},
{
  "type": "radio_set_transmit_serial_number",
  "message0": "%1 radio set transmit serial number %2",
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
      "name": "radio_set_transmit_serial_number_input",
      "check": "Boolean"
    }
  ],
  "inputsInline": true,
  "previousStatement": null,
  "nextStatement": null,
  "colour": 180,
  "tooltip": "",
  "helpUrl": ""
},
{
  "type": "radio_write_received_packet",
  "message0": "%1 radio write received packet to serial",
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
  "colour": 180,
  "tooltip": "",
  "helpUrl": ""
}
    
]);

Blockly.Extensions.registerMutator('controls_on_radio_received_number_mutator',
  Blockly.Constants.Logic.CONTROLS_IF_MUTATOR_MIXIN, null,
  ['received_number','receivedString', 'time', 'serial', 'signal']);

Blockly.Extensions.registerMutator('controls_on_radio_received_number_mutator_2',
  Blockly.Constants.Logic.CONTROLS_IF_MUTATOR_MIXIN, null,
  ['received_number','receivedString', 'time', 'serial', 'signal']);

Blockly.Extensions.registerMutator('controls_on_radio_received_number_mutator_3',
  Blockly.Constants.Logic.CONTROLS_IF_MUTATOR_MIXIN, null,
  ['received_number','receivedString', 'time', 'serial', 'signal']);

