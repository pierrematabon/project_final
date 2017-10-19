Blockly.Blocks['controls_whileUntil'].init = function() {
  this.jsonInit({
    "message0": "while ( %1 ) { %2 %3 }",
    "args0": [
      {
        "type": "input_value",
        "name": "BOOL",
        "check": "Boolean"
      },
      {
        "type": "input_dummy"
      },
      {
        "type": "input_statement",
        "name": "DO"
      }
    ],
    "inputsInline": true,
    "previousStatement": null,
    "nextStatement": null,
    "colour": Blockly.Blocks.loops.HUE,
    "tooltip": Blockly.Msg['CONTROLS_WHILEUNTIL_TOOLTIP_WHILE'],
    "helpUrl": Blockly.Msg['CONTROLS_WHILEUNTIL_HELPURL']
  });
};