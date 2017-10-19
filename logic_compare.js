Blockly.Blocks['logic_compare'].init = function() {
  var OPERATORS = [
    ['==', 'EQ'],
    ['!=', 'NEQ'],
    ['<', 'LT'],
    ['<=', 'LTE'],
    ['>', 'GT'],
    ['>=', 'GTE']
  ];
  this.setHelpUrl(Blockly.Msg['LOGIC_COMPARE_HELPURL']);
  this.setColour(Blockly.Blocks.logic.HUE);
  this.setOutput(true, 'Boolean');
  this.appendValueInput('A');
  this.appendValueInput('B')
      .appendField(new Blockly.FieldDropdown(OPERATORS), 'OP');
  this.setInputsInline(true);
  // Assign 'this' to a variable for use in the tooltip closure below.
  var thisBlock = this;
  this.setTooltip(function() {
    var op = thisBlock.getFieldValue('OP');
    var TOOLTIPS = {
      EQ: Blockly.Msg['LOGIC_COMPARE_TOOLTIP_EQ'],
      NEQ: Blockly.Msg['LOGIC_COMPARE_TOOLTIP_NEQ'],
      LT: Blockly.Msg['LOGIC_COMPARE_TOOLTIP_LT'],
      LTE: Blockly.Msg['LOGIC_COMPARE_TOOLTIP_LTE'],
      GT: Blockly.Msg['LOGIC_COMPARE_TOOLTIP_GT'],
      GTE: Blockly.Msg['LOGIC_COMPARE_TOOLTIP_GTE']
    };
    return TOOLTIPS[op];
  });
  this.prevBlocks_ = [null, null];
};