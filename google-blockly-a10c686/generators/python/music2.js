goog.provide('Blockly.Python.music');

goog.require('Blockly.Python');

Blockly.Python.addReservedWords('microbit, display, show, sleep');

Blockly.Python['middleC']=function(block) {
    var number_value = 262;
    return [number_value, Blockly.Python.ORDER_NONE];
};

Blockly.Python['ring_tone']=function(block) {
    Blockly.Python.definitions_['import microbit'] = 'from microbit import *';
    var number_value2 = Blockly.Python.valueToCode(block, 'ringTone', Blockly.Python.ORDER_NONE);
    return 'music.ringTone(' + number_value2 + ')\n';
};

Blockly.Python['play_tone']=function(block) {
    Blockly.Python.definitions_['import microbit'] = 'from microbit import *';
    var value_middleC = Blockly.Python.valueToCode(block, 'playTone_middleC', Blockly.Python.ORDER_NONE);
    var value_beat = Blockly.Python.valueToCode(block, 'playTone_beat', Blockly.Python.ORDER_NONE);
    return 'music.playTone(' + value_middleC + ', '+value_beat+')\n';
};

Blockly.Python['rest']=function(block) {
    Blockly.Python.definitions_['import microbit'] = 'from microbit import *';
    var value = Blockly.Python.valueToCode(block, 'rest_input', Blockly.Python.ORDER_NONE);
    return 'music.rest(' + value + ')\n';
};

Blockly.Python['tempo']=function(block) {
    var code = 'music.tempo()';
    return [code, Blockly.Python.ORDER_NONE];
};

Blockly.Python['change_tempo']=function(block) {
     var value = Blockly.Python.valueToCode(block, 'change_tempo_input', Blockly.Python.ORDER_NONE);
    return 'music.changeTempoBy('+ value +')\n';
};

Blockly.Python['set_tempo']=function(block) {
     var value = Blockly.Python.valueToCode(block, 'set_tempo_input', Blockly.Python.ORDER_NONE);
    return 'music.setTempo('+ value +')\n';
};

Blockly.Python['beat']=function(block) {
    Blockly.Python.definitions_['import microbit'] = 'from microbit import *';
    var VALUES = {
    'INPUT_1': '1',
    'INPUT_2': '1/2',
    'INPUT_3': '1/4',
    'INPUT_4': '1/8',
    'INPUT_5': '1/16',
    'INPUT_6': '2',
    'INPUT_7': '4'
  };
    var value = VALUES[block.getFieldValue('beat_input')];
    if (value == '1'){
        var code = 'music.beat(BeatFraction.Whole)';
    }else if(value=='1/2') {
        var code = 'music.beat(BeatFraction.Half)';
    }else if(value=='1/4'){
        var code = 'music.beat(BeatFraction.Quarter)';
    }else if(value == '1/8'){
        var code = 'music.beat(BeatFraction.Eighth)';
    }else if(value == '1/16'){
        var code = 'music.beat(BeatFraction.Sixteenth)';
    }else if(value == '2'){
        var code = 'music.beat(BeatFraction.Double)';
    }else if(value == '4'){
        var code = 'music.beat(BeatFraction.Breve)';
    }
    return [code, Blockly.Python.ORDER_NONE];
};

Blockly.Python['melody']=function(block) {
    Blockly.Python.definitions_['import microbit'] = 'from microbit import *';
    var VALUES = {
          'DADA': 'dadadum',
          'ENTER': 'entertainer',
          'PRELUD' : 'prelude',
          'OD': 'ode',
          'NYAN': 'nyan',
          'RING': 'ringtone',
          'FUNK': 'funk',
          'BLUES': 'blues',
          'BIRTH': 'birthday',
          'WED': 'wedding',
          'FUNEREAL': 'funereal',
          'PUNCHLINE': 'punchline',
          'BADDY': 'baddy',
          'CHASE': 'chase',
          'BA DING': 'ba ding',
          'WAWA': 'wawawawaa',
          'JUMP_UP': 'jump up',
          'JUMP_DOWN': 'jump down',
          'POWER_UP': 'power up',
          'POWER_DOWN': 'power down'
    };
    var value = VALUES[block.getFieldValue('melody_input')];
    if (value == 'dadadum'){
        var code = 'music.builtInMelody(Melodies.Dadadadum)';
    }else if (value == 'entertainer'){
        var code = 'music.builtInMelody(Melodies.Entertainer)';
    }else if (value == 'prelude'){
        var code = 'music.builtInMelody(Melodies.Prelude)';
    }else if (value == 'ode'){
        var code = 'music.builtInMelody(Melodies.Ode)';
    }else if (value == 'nyan'){
        var code = 'music.builtInMelody(Melodies.Nyan)';
    }else if (value == 'ringtone'){
        var code = 'music.builtInMelody(Melodies.Ringtone)';
    }else if (value == 'funk'){
        var code = 'music.builtInMelody(Melodies.Funk)';
    }else if (value == 'blues'){
        var code = 'music.builtInMelody(Melodies.Blues)';
    }else if (value == 'birthday'){
        var code = 'music.builtInMelody(Melodies.Birthday)';
    }else if (value == 'wedding'){
        var code = 'music.builtInMelody(Melodies.Wedding)';
    }else if (value == 'funereal'){
        var code = 'music.builtInMelody(Melodies.Funereal)';
    }else if (value == 'punchline'){
        var code = 'music.builtInMelody(Melodies.Punchline)';
    }else if (value == 'baddy'){
        var code = 'music.builtInMelody(Melodies.Baddy)';
    }else if (value == 'chase'){
        var code = 'music.builtInMelody(Melodies.Chase)';
    }else if (value == 'ba ding'){
        var code = 'music.builtInMelody(Melodies.BaDing)';
    }else if (value == 'wawawawaa'){
        var code = 'music.builtInMelody(Melodies.Wawawawaa)';
    }else if (value == 'jump up'){
        var code = 'music.builtInMelody(Melodies.JumpUp)';
    }else if (value == 'jump down'){
        var code = 'music.builtInMelody(Melodies.JumpDown)';
    }else if (value == 'power up'){
        var code = 'music.builtInMelody(Melodies.PowerUp)';
    }else if (value == 'power down'){
        var code = 'music.builtInMelody(Melodies.PowerDown)';
    }
    return [code, Blockly.Python.ORDER_NONE];
};

Blockly.Python['start_melody']=function(block) {
    var value = Blockly.Python.valueToCode(block, 'start_melody_input', Blockly.Python.ORDER_NONE);
   var VALUES = {
          'ONCE': 'once',
          'FOREVER': 'forever',
          'ONCE_BACK' : 'once in background',
          'FOREVER_BACK': 'forever in background'
    };
    var value2 = VALUES[block.getFieldValue('melody_dropdown')];
    if (value2 == 'once'){
        return 'music.beginMelody('+ value +', MelodyOptions.Once)\n';
    }else if (value2 == 'forever'){
        return 'music.beginMelody('+ value +', MelodyOptions.Forever)\n';
    }else if (value2 == 'once in background'){
        return 'music.beginMelody('+ value +', MelodyOptions.OnceInBackground)\n';
    }else if (value2 == 'forever in background'){
        return 'music.beginMelody('+ value +', MelodyOptions.ForeverInBackground)\n';
    }
};

Blockly.Python['music_on']=function(block) {
    var VALUES = {
        'MNP': 'melody note played',
        'MS': 'melody started',
        'ME': 'melody ended',
        'MR': 'melody repeated',
        'BMNP': 'background melody note played',
        'BMS': 'background melody started',
        'BME': 'background melody ended',
        'BMRepeated': 'background melody repeated',
        'BMP': "background melody paused",
        'BMResumed': "background melody resumed"
    };
    var value = VALUES[block.getFieldValue('music_on_dropdown')];
    var value2 = Blockly.Python.statementToCode(block, 'music_on_statement');
    if (value == 'melody note played'){
        return 'music.onEvent(MusicEvent.MelodyNotePlayed, () => {'+ 
            value2 +'})';
    }else if (value == 'melody started'){
        return 'music.onEvent(MusicEvent.MelodyStarted, () => {'+ 
            value2 +'})\n';
    }else if (value == 'melody ended'){
        return 'music.onEvent(MusicEvent.MelodyEnded, () => {'+ 
            value2 +'})\n';
    }else if (value == 'melody repeated'){
        return 'music.onEvent(MusicEvent.MelodyNotePlayed, () => {'+ 
            value2 +'\n})';
    }else if (value == 'background melody note played'){
        return 'music.onEvent(MusicEvent.BackgroundMelodyNotePlayed, () => {'+ 
            value2 +'\n})';
    }else if (value == 'background melody started'){
        return 'music.onEvent(MusicEvent.BackgroundMelodyStarted, () => {'+ 
            value2 +'\n})';
    }else if (value == 'background melody ended'){
        return 'music.onEvent(MusicEvent.BackgroundMelodyEnded, () => {'+ 
            value2 +'\n})';
    }else if (value == 'background melody repeated'){
        return 'music.onEvent(MusicEvent.BackgroundMelodyRepeated, () => {'+ 
            value2 +'\n})';
    }else if (value == 'background melody paused'){
        return 'music.onEvent(MusicEvent.BackgroundMelodyPaused, () => {'+ 
            value2 +'\n})';
    }else if (value == 'background melody resumed'){
        return 'music.onEvent(MusicEvent.BackgroundMelodyResumed, () => {'+ 
            value2 +'\n})';
    }
};

