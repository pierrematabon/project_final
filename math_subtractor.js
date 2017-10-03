Blockly.Blocks['math_subtractor'] = {
  init: function() {
    this.appendValueInput("NAME")
        .setCheck("Number")
        .setAlign(Blockly.ALIGN_RIGHT);
    this.appendValueInput("NAME")
        .setCheck("Number")
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField(new Blockly.FieldTextInput("-"), "NAME");
    this.setInputsInline(true);
    this.setOutput(true, "String");
    this.setColour(230);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};

Blockly.Python['math_subtractor'] = function(block) {
  var value_name = Blockly.Python.valueToCode(block, 'NAME', Blockly.Python.ORDER_ATOMIC);
  var text_name = block.getFieldValue('NAME');
  var value_name = Blockly.Python.valueToCode(block, 'NAME', Blockly.Python.ORDER_ATOMIC);
  // TODO: Assemble Python into code variable.
  var code = Blockly.Python.variableDB_.getName(block.getFieldValue('NAME'),
      Blockly.Variables.NAME_TYPE);
  // TODO: Change ORDER_NONE to the correct strength.
  return [code, Blockly.Python.ORDER_ATOMIC];
};