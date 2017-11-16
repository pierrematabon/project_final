goog.provide('Blockly.Python.pins');

goog.require('Blockly.Python');

Blockly.Python.addReservedWords('microbit, display, show, sleep');

Blockly.Python['digital_read']=function(block) {
     Blockly.Python.definitions_['import microbit'] = 'from microbit import *';
    var VALUES = {
    'pin0': 'P0',
    'pin1': 'P1',
    'pin2': 'P2',
    'pin3': 'P3',
    'pin4': 'P4',
    'pin5': 'P5',
    'pin6': 'P6',
    'pin7': 'P7',
    'pin8': 'P8',
    'pin9': 'P9',
    'pin10': 'P10',
    'pin11': 'P11',
    'pin12': 'P12',
    'pin13': 'P13',
    'pin14': 'P14',
    'pin15': 'P15',
    'pin16': 'P16',
    'pin17': 'P17',
    'pin18': 'P18',
    'pin19': 'P19',
    'pin20': 'P20',
  };
    var digital_pin_input = VALUES[block.getFieldValue('digital_pin_input')];
    
    var value = 'pins.digitalReadPin(DigitalPin.'+digital_pin_input+')\n';
    return [value, Blockly.Python.ORDER_NONE];
};

Blockly.Python['digital_write']=function(block) {
     Blockly.Python.definitions_['import microbit'] = 'from microbit import *';
    var VALUES = {
    'pin0': 'P0',
    'pin1': 'P1',
    'pin2': 'P2',
    'pin3': 'P3',
    'pin4': 'P4',
    'pin5': 'P5',
    'pin6': 'P6',
    'pin7': 'P7',
    'pin8': 'P8',
    'pin9': 'P9',
    'pin10': 'P10',
    'pin11': 'P11',
    'pin12': 'P12',
    'pin13': 'P13',
    'pin14': 'P14',
    'pin15': 'P15',
    'pin16': 'P16',
    'pin17': 'P17',
    'pin18': 'P18',
    'pin19': 'P19',
    'pin20': 'P20',
  };
    var digital_pin_input = VALUES[block.getFieldValue('digital_pin_input')];
    var value_input_number = Blockly.Python.valueToCode(block, 'value_input_number', Blockly.Python.ORDER_NONE) || '0';
    return 'pins.digitalWritePin(DigitalPin.'+digital_pin_input+', '+value_input_number+')';
};

Blockly.Python['analog_read_pin']=function(block) {
     Blockly.Python.definitions_['import microbit'] = 'from microbit import *';
    var VALUES = {
    'pin0': 'P0',
    'pin1': 'P1',
    'pin2': 'P2',
    'pin3': 'P3',
    'pin4': 'P4',
    'pin5': 'P5',
    'pin6': 'P6',
    'pin7': 'P7',
    'pin8': 'P8',
    'pin9': 'P9',
    'pin10': 'P10',
    'pin11': 'P11',
    'pin12': 'P12',
    'pin13': 'P13',
    'pin14': 'P14',
    'pin15': 'P15',
    'pin16': 'P16',
    'pin17': 'P17',
    'pin18': 'P18',
    'pin19': 'P19',
    'pin20': 'P20',
  };
    var digital_pin_input = VALUES[block.getFieldValue('digital_pin_input')];
    var value = 'pins.analogReadPin(AnalogPin.'+digital_pin_input+')';
    return [value,Blockly.Python.ORDER_NONE];
};

Blockly.Python['analog_write_pin']=function(block) {
     Blockly.Python.definitions_['import microbit'] = 'from microbit import *';
    var VALUES = {
    'pin0': 'P0',
    'pin1': 'P1',
    'pin2': 'P2',
    'pin3': 'P3',
    'pin4': 'P4',
    'pin5': 'P5',
    'pin6': 'P6',
    'pin7': 'P7',
    'pin8': 'P8',
    'pin9': 'P9',
    'pin10': 'P10',
    'pin11': 'P11',
    'pin12': 'P12',
    'pin13': 'P13',
    'pin14': 'P14',
    'pin15': 'P15',
    'pin16': 'P16',
    'pin17': 'P17',
    'pin18': 'P18',
    'pin19': 'P19',
    'pin20': 'P20',
  };
    var digital_pin_input = VALUES[block.getFieldValue('digital_pin_input')];
    var value_input_number = Blockly.Python.valueToCode(block, 'value_input_number', Blockly.Python.ORDER_NONE) || '1023';
    return 'pins.analogWritePin(AnalogPin.'+digital_pin_input+', '+value_input_number+')';
};

Blockly.Python['map_pin']=function(block) {
    var value_input_map = Blockly.Python.valueToCode(block, 'value_input_map', Blockly.Python.ORDER_NONE) || '0';
    var value_input_from_low = Blockly.Python.valueToCode(block, 'value_input_from_low', Blockly.Python.ORDER_NONE) || '0';
    var value_input_from_high = Blockly.Python.valueToCode(block, 'value_input_from_high', Blockly.Python.ORDER_NONE) || '1023';
    var value_input_to_low = Blockly.Python.valueToCode(block, 'value_input_to_low', Blockly.Python.ORDER_NONE) || '0';
    var value_input_to_high = Blockly.Python.valueToCode(block, 'value_input_to_high', Blockly.Python.ORDER_NONE) || '4';
    var value = 'pins.map('+value_input_map+', '+value_input_from_low+', '+value_input_from_high+', '+value_input_to_low+', '+value_input_to_high+')';
    return [value, Blockly.Python.ORDER_NONE];
};

Blockly.Python['analog_set_period_pin']=function(block) {
     Blockly.Python.definitions_['import microbit'] = 'from microbit import *';
    var VALUES = {
    'pin0': 'P0',
    'pin1': 'P1',
    'pin2': 'P2',
    'pin3': 'P3',
    'pin4': 'P4',
    'pin5': 'P5',
    'pin6': 'P6',
    'pin7': 'P7',
    'pin8': 'P8',
    'pin9': 'P9',
    'pin10': 'P10',
    'pin11': 'P11',
    'pin12': 'P12',
    'pin13': 'P13',
    'pin14': 'P14',
    'pin15': 'P15',
    'pin16': 'P16',
    'pin17': 'P17',
    'pin18': 'P18',
    'pin19': 'P19',
    'pin20': 'P20',
  };
    var analog_set_period_pin = VALUES[block.getFieldValue('analog_set_period_pin')];
    var value_input_set_period = Blockly.Python.valueToCode(block, 'value_input_set_period', Blockly.Python.ORDER_NONE) || '20000';
    return 'pins.analogSetPeriod(AnalogPin.'+analog_set_period_pin+', '+value_input_set_period+')';
};

Blockly.Python['servo_write_pin']=function(block) {
     Blockly.Python.definitions_['import microbit'] = 'from microbit import *';
    var VALUES = {
    'pin0': 'P0',
    'pin1': 'P1',
    'pin2': 'P2',
    'pin3': 'P3',
    'pin4': 'P4',
    'pin5': 'P5',
    'pin6': 'P6',
    'pin7': 'P7',
    'pin8': 'P8',
    'pin9': 'P9',
    'pin10': 'P10',
    'pin11': 'P11',
    'pin12': 'P12',
    'pin13': 'P13',
    'pin14': 'P14',
    'pin15': 'P15',
    'pin16': 'P16',
    'pin17': 'P17',
    'pin18': 'P18',
    'pin19': 'P19',
    'pin20': 'P20',
  };
    var servo_write_input_pin = VALUES[block.getFieldValue('servo_write_input_pin')];
    var value_input_servo_write = Blockly.Python.valueToCode(block, 'value_input_servo_write', Blockly.Python.ORDER_NONE) || '180';
    return 'pins.servoWritePin(AnalogPin.'+servo_write_input_pin+', '+value_input_servo_write+')';
};

Blockly.Python['servo_set_pulse_pin']=function(block) {
     Blockly.Python.definitions_['import microbit'] = 'from microbit import *';
    var VALUES = {
    'pin0': 'P0',
    'pin1': 'P1',
    'pin2': 'P2',
    'pin3': 'P3',
    'pin4': 'P4',
    'pin5': 'P5',
    'pin6': 'P6',
    'pin7': 'P7',
    'pin8': 'P8',
    'pin9': 'P9',
    'pin10': 'P10',
    'pin11': 'P11',
    'pin12': 'P12',
    'pin13': 'P13',
    'pin14': 'P14',
    'pin15': 'P15',
    'pin16': 'P16',
    'pin17': 'P17',
    'pin18': 'P18',
    'pin19': 'P19',
    'pin20': 'P20',
  };
    var servo_set_pulse_pin = VALUES[block.getFieldValue('analog_set_period_pin')];
    var value_input_servo_set_pulse = Blockly.Python.valueToCode(block, 'value_input_servo_set_pulse', Blockly.Python.ORDER_NONE) || '1500';
    return 'pins.servoSetPulse(AnalogPin.'+servo_set_pulse_pin+', '+value_input_servo_set_pulse+')';
};

Blockly.Python['servo_set_pulse_pin']=function(block) {
     Blockly.Python.definitions_['import microbit'] = 'from microbit import *';
    var VALUES = {
    'pin0': 'P0',
    'pin1': 'P1',
    'pin2': 'P2',
    'pin3': 'P3',
    'pin4': 'P4',
    'pin5': 'P5',
    'pin6': 'P6',
    'pin7': 'P7',
    'pin8': 'P8',
    'pin9': 'P9',
    'pin10': 'P10',
    'pin11': 'P11',
    'pin12': 'P12',
    'pin13': 'P13',
    'pin14': 'P14',
    'pin15': 'P15',
    'pin16': 'P16',
    'pin17': 'P17',
    'pin18': 'P18',
    'pin19': 'P19',
    'pin20': 'P20',
  };
    var servo_set_pulse_pin = VALUES[block.getFieldValue('analog_set_period_pin')];
    var value_input_servo_set_pulse = Blockly.Python.valueToCode(block, 'value_input_servo_set_pulse', Blockly.Python.ORDER_NONE) || '1500';
    return 'pins.servoSetPulse(AnalogPin.'+servo_set_pulse_pin+', '+value_input_servo_set_pulse+')';
};

Blockly.Python['on_pin']=function(block) {
    Blockly.Python.definitions_['import microbit'] = 'from microbit import *';
    var VALUES = {
    'pin0': 'P0',
    'pin1': 'P1',
    'pin2': 'P2',
    'pin3': 'P3',
    'pin4': 'P4',
    'pin5': 'P5',
    'pin6': 'P6',
    'pin7': 'P7',
    'pin8': 'P8',
    'pin9': 'P9',
    'pin10': 'P10',
    'pin11': 'P11',
    'pin12': 'P12',
    'pin13': 'P13',
    'pin14': 'P14',
    'pin15': 'P15',
    'pin16': 'P16',
    'pin17': 'P17',
    'pin18': 'P18',
    'pin19': 'P19',
    'pin20': 'P20'
  };
    var on_pin_dropdown = VALUES[block.getFieldValue('on_pin_dropdown')];
    var VALUES_HIGH = {
    'LOW': 'low',
    'HIGH': 'high'
  };
    var on_pin_dropdown_pulsed = VALUES_HIGH[block.getFieldValue('on_pin_dropdown_pulsed')];
    var value = Blockly.Python.statementToCode(block, 'on_pin_statement');
    return 'pins.onPulsed(DigitalPin.'+on_pin_dropdown+', PulseValue.'+on_pin_dropdown_pulsed+', () => {\n'+value+
'})';
};

Blockly.Python['pulse_duration_pin']=function(block) {
    var value_pulse_duration_pin = 'pins.pulseDuration()';
    return [value_pulse_duration_pin, Blockly.Python.ORDER_NONE];
};

Blockly.Python['pulse_in_pin']=function(block) {
    var VALUES = {
    'pin0': 'P0',
    'pin1': 'P1',
    'pin2': 'P2',
    'pin3': 'P3',
    'pin4': 'P4',
    'pin5': 'P5',
    'pin6': 'P6',
    'pin7': 'P7',
    'pin8': 'P8',
    'pin9': 'P9',
    'pin10': 'P10',
    'pin11': 'P11',
    'pin12': 'P12',
    'pin13': 'P13',
    'pin14': 'P14',
    'pin15': 'P15',
    'pin16': 'P16',
    'pin17': 'P17',
    'pin18': 'P18',
    'pin19': 'P19',
    'pin20': 'P20'
  };
    var pulse_in_pin_dropdown = VALUES[block.getFieldValue('pulse_in_pin_dropdown')];
    var VALUES_HIGH = {
    'LOW': 'low',
    'HIGH': 'high'
  };
    var pulse_in_pin_dropdown_pulsed = VALUES_HIGH[block.getFieldValue('pulse_in_pin_dropdown_pulsed')];
    var value = 'pins.pulseIn(DigitalPin.'+pulse_in_pin_dropdown+', PulseValue.'+pulse_in_pin_dropdown_pulsed+')';
    return [value, Blockly.Python.ORDER_NONE];
};

Blockly.Python['i2c_read_number_pin']=function(block) {
    var VALUES = {
        'I8LE': 'Int8LE',
        'UI8LE': 'UInt8LE',
        'I16LE': 'Int16LE',
        'UI16LE': 'UInt16LE',
        'I32LE': 'Int32LE',
        'I8BE': 'Int8BE',
        'UI8BE': 'UInt8BE',
        'I16BE': 'Int16BE',
        'UI16BE':  'UInt16BE',
        'I32BE': 'Int32BE'
  };
    var i2c_text = VALUES[block.getFieldValue('i2c_text')];
    var i2c_read_number = Blockly.Python.valueToCode(block, 'i2c_read_number', Blockly.Python.ORDER_NONE) || '0';
    var i2C_read_number_of_format = Blockly.Python.valueToCode(block, 'i2C_read_number_of_format', Blockly.Python.ORDER_NONE) || 'false';
    var value = 'pins.i2cReadNumber('+i2c_read_number+', NumberFormat.'+i2c_text+', '+i2C_read_number_of_format+')';
    return [value, Blockly.Python.ORDER_NONE];
};

Blockly.Python['i2c_write_number_pin']=function(block) {
    var VALUES = {
        'I8LE': 'Int8LE',
        'UI8LE': 'UInt8LE',
        'I16LE': 'Int16LE',
        'UI16LE': 'UInt16LE',
        'I32LE': 'Int32LE',
        'I8BE': 'Int8BE',
        'UI8BE': 'UInt8BE',
        'I16BE': 'Int16BE',
        'UI16BE':  'UInt16BE',
        'I32BE': 'Int32BE'
  };
    var i2c_write_text = VALUES[block.getFieldValue('i2c_write_text')];
    var at_address = Blockly.Python.valueToCode(block, 'at_address', Blockly.Python.ORDER_NONE) || '0';
    var with_value = Blockly.Python.valueToCode(block, 'with_value', Blockly.Python.ORDER_NONE) || '0';
    var repeated = Blockly.Python.valueToCode(block, 'repeated', Blockly.Python.ORDER_NONE) || 'false';
    return 'pins.i2cWriteNumber('+at_address+', '+with_value+', NumberFormat.'+i2c_write_text+', '+repeated+')})';
};

Blockly.Python['spi_write_pin']=function(block) {
    var spi_write_pin_input = Blockly.Python.valueToCode(block,'spi_write_pin_input',Blockly.Python.ORDER_NONE) || '0';
    var value = 'pins.spiWrite('+spi_write_pin_input+')';
    return [value, Blockly.Python.ORDER_NONE];
};

Blockly.Python['set_pin']=function(block) {
    var VALUES = {
    'pin0': 'P0',
    'pin1': 'P1',
    'pin2': 'P2',
    'pin3': 'P3',
    'pin4': 'P4',
    'pin5': 'P5',
    'pin6': 'P6',
    'pin7': 'P7',
    'pin8': 'P8',
    'pin9': 'P9',
    'pin10': 'P10',
    'pin11': 'P11',
    'pin12': 'P12',
    'pin13': 'P13',
    'pin14': 'P14',
    'pin15': 'P15',
    'pin16': 'P16',
    'pin17': 'P17',
    'pin18': 'P18',
    'pin19': 'P19',
    'pin20': 'P20'
  };
    var set_pin_dropdown = VALUES[block.getFieldValue('set_pin_dropdown')];
    var VALUES_EDGE = {
         'EDGE': 'edge',
         'PULSE': 'pulse',
         'TOUCH': 'touch',
         'NONE': 'none'
  };
    var set_pin_dropdown_emit = VALUES_EDGE[block.getFieldValue('set_pin_dropdown_emit')];
    return 'pins.setEvents(DigitalPin.'+set_pin_dropdown+', PinEventType.'+set_pin_dropdown_emit+')';
};

Blockly.Python['analog_pitch_pin']=function(block) {
    var analog_pitch_pin_input = Blockly.Python.valueToCode(block,'analog_pitch_pin_input',Blockly.Python.ORDER_NONE) || '0';
    var analog_pitch_for_pin_input = Blockly.Python.valueToCode(block,'analog_pitch_for_pin_input',Blockly.Python.ORDER_NONE) || '0';
    return 'pins.analogPitch('+analog_pitch_pin_input+', '+analog_pitch_for_pin_input+')';
};

Blockly.Python['spi_frequency_pin']=function(block) {
    var spi_frequency_pin_input = Blockly.Python.valueToCode(block,'spi_frequency_pin_input',Blockly.Python.ORDER_NONE) || '1000000';
    return 'pins.spiFrequency('+spi_frequency_pin_input+')';
};

Blockly.Python['analog_set_pitch_pin']=function(block) {
    var VALUES = {
    'pin0': 'P0',
    'pin1': 'P1',
    'pin2': 'P2',
    'pin3': 'P3',
    'pin4': 'P4',
    'pin5': 'P5',
    'pin6': 'P6',
    'pin7': 'P7',
    'pin8': 'P8',
    'pin9': 'P9',
    'pin10': 'P10',
    'pin11': 'P11',
    'pin12': 'P12',
    'pin13': 'P13',
    'pin14': 'P14',
    'pin15': 'P15',
    'pin16': 'P16',
    'pin17': 'P17',
    'pin18': 'P18',
    'pin19': 'P19',
    'pin20': 'P20'
  };
    var analog_set_pitch_pin_dropdown = VALUES[block.getFieldValue('analog_set_pitch_pin_dropdown')];
    return 'pins.analogSetPitchPin(AnalogPin.'+analog_set_pitch_pin_dropdown +')';
};

Blockly.Python['set_pull_pin']=function(block) {
    var VALUES = {
    'pin0': 'P0',
    'pin1': 'P1',
    'pin2': 'P2',
    'pin3': 'P3',
    'pin4': 'P4',
    'pin5': 'P5',
    'pin6': 'P6',
    'pin7': 'P7',
    'pin8': 'P8',
    'pin9': 'P9',
    'pin10': 'P10',
    'pin11': 'P11',
    'pin12': 'P12',
    'pin13': 'P13',
    'pin14': 'P14',
    'pin15': 'P15',
    'pin16': 'P16',
    'pin17': 'P17',
    'pin18': 'P18',
    'pin19': 'P19',
    'pin20': 'P20'
  };
    var set_pull_pin_dropdown = VALUES[block.getFieldValue('set_pull_pin_dropdown')];
    var VALUES_UP = {
        'UP': 'Up',
        'DOWN': 'Down',
        'NONE': 'None'
    };
     var set_pull_pin_dropdown_to = VALUES_UP[block.getFieldValue('set_pull_pin_dropdown_to')];
    return 'pins.setPull(DigitalPin.'+set_pull_pin_dropdown+', PinPullMode.Pull'+set_pull_pin_dropdown_to+')';
};

Blockly.Python['spi_format_bits_pin']=function(block) {
    var spi_format_bits_pin_input = Blockly.Python.valueToCode(block,'spi_format_bits_pin_input',Blockly.Python.ORDER_NONE) || '8';
    var spi_format_bits_mode_pin_input = Blockly.Python.valueToCode(block,'spi_format_bits_mode_pin_input',Blockly.Python.ORDER_NONE) || '3';
    return 'pins.spiFormat('+spi_format_bits_pin_input+', '+spi_format_bits_mode_pin_input+')';
};

Blockly.Python['spi_set_pin']=function(block) {
    var VALUES_MOSI = {
    'pin0': 'P0',
    'pin1': 'P1',
    'pin2': 'P2',
    'pin3': 'P3',
    'pin4': 'P4',
    'pin5': 'P5',
    'pin6': 'P6',
    'pin7': 'P7',
    'pin8': 'P8',
    'pin9': 'P9',
    'pin10': 'P10',
    'pin11': 'P11',
    'pin12': 'P12',
    'pin13': 'P13',
    'pin14': 'P14',
    'pin15': 'P15',
    'pin16': 'P16',
    'pin17': 'P17',
    'pin18': 'P18',
    'pin19': 'P19',
    'pin20': 'P20'
  };
    var spi_set_pins_dropdown_MOSI = VALUES_MOSI[block.getFieldValue('spi_set_pins_dropdown_MOSI')];
    var VALUES_MISO = {
    'pin0': 'P0',
    'pin1': 'P1',
    'pin2': 'P2',
    'pin3': 'P3',
    'pin4': 'P4',
    'pin5': 'P5',
    'pin6': 'P6',
    'pin7': 'P7',
    'pin8': 'P8',
    'pin9': 'P9',
    'pin10': 'P10',
    'pin11': 'P11',
    'pin12': 'P12',
    'pin13': 'P13',
    'pin14': 'P14',
    'pin15': 'P15',
    'pin16': 'P16',
    'pin17': 'P17',
    'pin18': 'P18',
    'pin19': 'P19',
    'pin20': 'P20'
  };
     var spi_set_pins_dropdown_MISO = VALUES_MISO[block.getFieldValue('spi_set_pins_dropdown_MISO')];
     var VALUES_SCK = {
    'pin0': 'P0',
    'pin1': 'P1',
    'pin2': 'P2',
    'pin3': 'P3',
    'pin4': 'P4',
    'pin5': 'P5',
    'pin6': 'P6',
    'pin7': 'P7',
    'pin8': 'P8',
    'pin9': 'P9',
    'pin10': 'P10',
    'pin11': 'P11',
    'pin12': 'P12',
    'pin13': 'P13',
    'pin14': 'P14',
    'pin15': 'P15',
    'pin16': 'P16',
    'pin17': 'P17',
    'pin18': 'P18',
    'pin19': 'P19',
    'pin20': 'P20'
  };
    var spi_set_pins_dropdown_SCK = VALUES_SCK[block.getFieldValue('spi_set_pins_dropdown_SCK')];
    return 'pins.spiPins(DigitalPin.'+spi_set_pins_dropdown_MOSI+', DigitalPin.'+spi_set_pins_dropdown_MISO+', DigitalPin.'+spi_set_pins_dropdown_MISO+')';
};
