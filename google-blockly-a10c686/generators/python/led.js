goog.provide('Blockly.Python.led');

goog.require('Blockly.Python');

Blockly.Python.addReservedWords('microbit, display, show, sleep');

Blockly.Python['plot']=function(block) {
     Blockly.Python.definitions_['import microbit'] = 'from microbit import *';
    var value_x = Blockly.Python.valueToCode(block, 'plot_input_x', Blockly.Python.ORDER_NONE) || '0';
    var value_y = Blockly.Python.valueToCode(block, 'plot_input_y', Blockly.Python.ORDER_NONE) || '0';
    return 'led.plot('+value_x+', '+value_y+')\n';
};

Blockly.Python['unplot']=function(block) {
     Blockly.Python.definitions_['import microbit'] = 'from microbit import *';
    var value_x = Blockly.Python.valueToCode(block, 'unplot_input_x', Blockly.Python.ORDER_NONE) || '0';
    var value_y = Blockly.Python.valueToCode(block, 'unplot_input_y', Blockly.Python.ORDER_NONE) || '0';
    return 'led.unplot('+value_x+', '+value_y+')\n';
};

Blockly.Python['toggle']=function(block) {
     Blockly.Python.definitions_['import microbit'] = 'from microbit import *';
    var value_x = Blockly.Python.valueToCode(block, 'toggle_input_x', Blockly.Python.ORDER_NONE) || '0';
    var value_y = Blockly.Python.valueToCode(block, 'toggle_input_y', Blockly.Python.ORDER_NONE) || '0';
    return 'led.toggle('+value_x+', '+value_y+')\n';
};

Blockly.Python['plot_bar']=function(block) {
     Blockly.Python.definitions_['import microbit'] = 'from microbit import *';
    var value_x = Blockly.Python.valueToCode(block, 'plot_bar_input_graph_of', Blockly.Python.ORDER_NONE) || '0';
    var value_y = Blockly.Python.valueToCode(block, 'plot_bar_input_up_to', Blockly.Python.ORDER_NONE) || '0';
    return 'led.plotBarGraph('+value_x+', '+value_y+')\n';
};

Blockly.Python['plot_more']=function(block) {
     Blockly.Python.definitions_['import microbit'] = 'from microbit import *';
    var value_x = Blockly.Python.valueToCode(block, 'plot_more_x', Blockly.Python.ORDER_NONE) || '0';
    var value_y = Blockly.Python.valueToCode(block, 'plot_more_y', Blockly.Python.ORDER_NONE) || '0';
    var value_brightness = Blockly.Python.valueToCode(block, 'brightness', Blockly.Python.ORDER_NONE) || '255';
    return 'led.plotBrightness('+value_x+', '+value_y+', '+value_brightness+')\n';
};

Blockly.Python['brightness']=function(block) {
    var value = 'led.brightness()';
    return [value, Blockly.Python.ORDER_NONE];
};

Blockly.Python['set_brightness']=function(block) {
     Blockly.Python.definitions_['import microbit'] = 'from microbit import *';
    var value_brightness = Blockly.Python.valueToCode(block, 'set_brightness_input', Blockly.Python.ORDER_NONE) || '255';
    return 'setBrightness('+value_brightness+')\n';
};

Blockly.Python['stop_animation']=function(block) {
     Blockly.Python.definitions_['import microbit'] = 'from microbit import *';
    var value_animation = 'led.stopAnimation()';
    return [value_animation, Blockly.Python.ORDER_NONE];
};

Blockly.Python['led_enable']=function(block) {
     Blockly.Python.definitions_['import microbit'] = 'from microbit import *';
    var value_enable = Blockly.Python.valueToCode(block, 'led_enable_input', Blockly.Python.ORDER_NONE) || 'false';
    return 'led.enable('+value_enable+')\n';
};