Blockly.Blocks['math_subtractor'] = {
  init: function() {
    this.appendValueInput("A")
        .setCheck("Number");
    this.appendValueInput("B")
        .setCheck("Number")
        .appendField(new Blockly.FieldDropdown([["%{BKY_MATH_ADDITION_SYMBOL}","ADD"], ["%{BKY_MATH_SUBTRACTION_SYMBOL}","MINUS"], ["%{BKY_MATH_DIVISION_SYMBOL}","DIVIDE"]]), "OP");
    this.setInputsInline(true);
      this.setOutput(true);
    this.setColour(230);
 this.setTooltip("");
 this.setHelpUrl("%{BKY_MATH_ARITHMETIC_HELPURL}");
  }
};

Blockly.JavaScript['math_subtractor'] = function(block) {
    var OPERATORS = {
    'ADD': [' + ', Blockly.Python.ORDER_ADDITIVE],
    'MINUS': [' - ', Blockly.Python.ORDER_ADDITIVE],
    'DIVIDE': [' / ', Blockly.Python.ORDER_DIVISION]
  };
  var tuple = OPERATORS[block.getFieldValue('OP')];
  var operator = tuple[0];
  var order = tuple[1];
  var argument0 = Blockly.Python.valueToCode(block, 'A', order) || '0';
  var argument1 = Blockly.Python.valueToCode(block, 'B', order) || '0';
  var code = argument0 + operator + argument1;
  return [code, order];
 // var argument0 = Blockly.JavaScript.valueToCode(block, 'NAME', Blockly.JavaScript.ORDER_SUBTRACTION);
//  var argument1 = Blockly.Javascript.valueToCode(block, 'NAME2', Blockly.JavaScript.ORDER_SUBTRACTION);
//  var code = argument0 + '-' + argument1;
//  return [code, Blockly.Python.ORDER_SUBTRACTION];
  // TODO: Change ORDER_NONE to the correct strength.
};