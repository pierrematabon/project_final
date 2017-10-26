'use strict';
goog.provide('Blockly.Blocks.music');
goog.provide('Blockly.Constants.Music');

goog.require('Blockly.Blocks');
Blockly.Constants.Music.HUE = 205;
Blockly.Blocks.music.HUE = Blockly.Constants.Music.HUE;


Blockly.defineBlocksWithJsonArray([{
  "type": "middleC",
  "message0": "%1 %2",
  "args0": [
    {
      "type": "field_image",
      "src": "https://www.gstatic.com/codesite/ph/images/star_on.gif",
      "width": 15,
      "height": 15,
      "alt": "*"
    },
    {
      "type": "field_input",
      "name": "middleC",
      "text": "Middle C"
    }
  ],
  "output": 
    "middleC"
  ,
  "colour": 15,
  "tooltip": "",
  "helpUrl": ""
},
{
  "type": "beat",
  "message0": "%1 %2 beat",
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
      "name": "beat_input",
      "options": [
        [
          "1",
          "INPUT_1"
        ],
        [
          "1/2",
          "INPUT_2"
        ],
        [
          "1/4",
          "INPUT_3"
        ],
        [
          "1/8",
          "INPUT_4"
        ],
        [
          "1/16",
          "INPUT_5"
        ],
        [
          "2",
          "INPUT_6"
        ],
        [
          "4",
          "INPUT_7"
        ]
      ]
    }
  ],
  "output": 
    "beat"
  ,
  "colour": 15,
  "tooltip": "",
  "helpUrl": ""
},
{
  "type": "play_tone",
  "message0": "%1 play tone %2 for %3",
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
      "name": "playTone_middleC",
      "check": "middleC"
    },
    {
      "type": "input_value",
      "name": "playTone_beat",
      "check": "beat"
    }
  ],
  "inputsInline": true,
  "previousStatement": null,
  "nextStatement": null,
  "colour": 15,
  "tooltip": "",
  "helpUrl": ""
},
{
  "type": "ring_tone",
  "message0": "%1 ring tone (Hz) %2",
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
      "name": "ringTone",
      "check": "middleC"
    }
  ],
  "inputsInline": true,
  "previousStatement": null,
  "nextStatement": null,
  "colour": 15,
  "tooltip": "",
  "helpUrl": ""
},
{
  "type": "rest",
  "message0": "%1 rest (ms) %2",
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
      "name": "rest_input",
      "check": "beat"
    }
  ],
  "inputsInline": true,
  "previousStatement": null,
  "nextStatement": null,
  "colour": 15,
  "tooltip": "",
  "helpUrl": ""
},
{
  "type": "melody",
  "message0": "%1 %2",
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
      "name": "melody_input",
      "options": [
        [
          "dadadum",
          "DADA"
        ],
        [
          "entertainer",
          "ENTER"
        ],
        [
          "prelude",
          "PRELUD"
        ],
        [
          "ode",
          "OD"
        ],
        [
          "nyan",
          "NYAN"
        ],
        [
          "ringtone",
          "RING"
        ],
        [
          "funk",
          "FUNK"
        ],
        [
          "blues",
          "BLUES"
        ],
        [
          "birthday",
          "BIRTH"
        ],
        [
          "wedding",
          "WED"
        ],
        [
          "funereal",
          "FUNEREAL"
        ],
        [
          "punchline",
          "PUNCHLINE"
        ],
        [
          "baddy",
          "BADDY"
        ],
        [
          "chase",
          "CHASE"
        ],
        [
          "ba ding",
          "BA_DING"
        ],
        [
          "wawawawaa",
          "WAWA"
        ],
        [
          "jump up",
          "JUMP_UP"
        ],
        [
          "jump down",
          "JUMP_DOWN"
        ],
        [
          "power up",
          "POWER_UP"
        ],
        [
          "power down",
          "POWER_DOWN"
        ]
      ]
    }
  ],
  "inputsInline": true,
  "output": "melody",
  "colour": 15,
  "tooltip": "",
  "helpUrl": ""
},
{
  "type": "start_melody",
  "message0": "%1 start melody %2 repeating %3",
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
      "name": "start_melody_input",
      "check": "melody"
    },
    {
      "type": "field_dropdown",
      "name": "melody_dropdown",
      "options": [
        [
          "once",
          "ONCE"
        ],
        [
          "forever",
          "FOREVER"
        ],
        [
          "once in background",
          "ONCE_BACK"
        ],
        [
          "forever in background",
          "FOREVER_BACK"
        ]
      ]
    }
  ],
  "inputsInline": true,
  "output": null,
  "colour": 15,
  "tooltip": "",
  "helpUrl": ""
},
{
  "type": "music_on",
  "message0": "%1 music on %2 %3 %4",
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
      "name": "music_on_dropdown",
      "options": [
        [
          "melody note played",
          "MNP"
        ],
        [
          "melody started",
          "MS"
        ],
        [
          "melody ended",
          "ME"
        ],
        [
          "melody repeated",
          "MR"
        ],
        [
          "background melody note played",
          "BMNP"
        ],
        [
          "background melody started",
          "BMS"
        ],
        [
          "background melody ended",
          "BME"
        ],
        [
          "background melody repeated",
          "BMRepeated"
        ],
        [
          "background melody paused",
          "BMP"
        ],
        [
          "background melody resumed",
          "BMResumed"
        ]
      ]
    },
    {
      "type": "input_dummy"
    },
    {
      "type": "input_statement",
      "name": "music_on_statement"
    }
  ],
  "colour": 15,
  "tooltip": "",
  "helpUrl": ""
},
{
  "type": "tempo",
  "message0": "%1 tempo (bpm)",
  "args0": [
    {
      "type": "field_image",
      "src": "https://www.gstatic.com/codesite/ph/images/star_on.gif",
      "width": 15,
      "height": 15,
      "alt": "*"
    }
  ],
  "output": "Number",
  "colour": 15,
  "tooltip": "",
  "helpUrl": ""
},
{
  "type": "change_tempo",
  "message0": "%1 change tempo by (bpm) %2",
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
      "name": "change_tempo_input",
      "check": "Number"
    }
  ],
  "inputsInline": true,
  "previousStatement": null,
  "nextStatement": null,
  "colour": 15,
  "tooltip": "",
  "helpUrl": ""
},
{
  "type": "set_tempo",
  "message0": "%1 set tempo to (bpm) %2",
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
      "name": "set_tempo_input",
      "check": "Number"
    }
  ],
  "inputsInline": true,
  "previousStatement": null,
  "nextStatement": null,
  "colour": 15,
  "tooltip": "",
  "helpUrl": ""
}
]); // END JSON EXTRACT