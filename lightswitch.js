Blockly.Blocks['lightswitch'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("Turn")
        .appendField(new Blockly.FieldDropdown([["red","red"], ["yellow","yellow"], ["green","green"], ["all","all"]]), "lightcolor")
        .appendField(new Blockly.FieldDropdown([["on","on"], ["off","off"]]), "switch");
    this.setInputsInline(false);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(330);
 this.setTooltip("");
 this.setHelpUrl("http://www.example.com/");
  }
};

Blockly.Javascript['lightswitch']= function(block){
    var dropdown_lightcolor = block.getFieldValue("lightcolor");
    var dropdown_switch = block.getFieldValue("switch");
    if (dropdown_lightcolor==="all"){
        if (dropdown_switch ==="on"){
            var code = "document.getElementById('red').style.backgroundColor='red'; document.getElementById('yellow').style.backgroundColor='yellow';";
        }
        if (dropdown_switch === "off"){
            var code = "document.getElementById('red').style.backgroundColor='white'; document.getElementById('yellow').style.backgroundColor='white';";
        }
    }else{
        if(dropdown_switch==="on"){
            var code = "document.getElementById('"+dropdown_lightcolor+"').style.backgroundColor='"+dropdown_lightcolor+"';";
        }
        if(dropdown_switch === "off"){
            var code = "document.getElementById('"+dropdown_lightcolor+"').style.backgroundColor='white';";
        }
    }
    
    return code;

};


