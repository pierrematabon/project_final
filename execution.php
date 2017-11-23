<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8">
  <title>Blockly Demo: Asynchronous Execution with JS Interpreter</title>
  <script src="acorn_interpreter.js"></script>
  <script src="google-blockly-a10c686/blockly_compressed.js"></script>
  <script src="google-blockly-a10c686/blocks_compressed.js"></script>
  <script src="google-blockly-a10c686/javascript_compressed.js"></script>
<script src="google-blockly-a10c686/python_compressed.js"></script>
  <script src="google-blockly-a10c686/msg/js/en.js"></script>
    <script src="wait_blocks2.js"></script>
    <script src="google-blockly-a10c686/blocks/music2.js"></script> 
    <script src="google-blockly-a10c686/blocks/led.js"></script>
    <script src="google-blockly-a10c686/blocks/radio.js"></script>
    <script src="google-blockly-a10c686/blocks/pins.js"></script>
        <script src="google-blockly-a10c686/blocks/basic.js"></script>
    <script src="google-blockly-a10c686/blocks/input.js"></script>
    <script src="google-blockly-a10c686/generators/python/music2.js"></script>
    <script src="google-blockly-a10c686/generators/python/led.js"></script>
    <script src="google-blockly-a10c686/generators/python/pins.js"></script>
     <script src="python-main.js"
            type="application/javascript"></script>
  <style>
    body {
      background-color: #fff;
      font-family: sans-serif;
    }
    h1 {
      font-weight: normal;
      font-size: 140%;
    }
  </style>
    <script>
        
    function resetStepUi(clearOutput) {
    //  workspace.highlightBlock(null);
    //  highlightPause = false;

      if (clearOutput) {
        outputArea.value = 'Show code:\n=================';
      }
    }
        
     function hexFile(value){
            /* add header, pad to multiple of 16 bytes*/
            data = new Uint8Array(4 + value.length + (16 - (4 + value.length) % 16));
            data[0] = 77; // 'M'
            data[1] = 80; // 'P'
            data[2] = value.length & 0xff;
            data[3] = (value.length >> 8) & 0xff;
            for (var i = 0; i < value.length; ++i) {
                data[4 + i] = value.charCodeAt(i);
            }
            /*check data.length < 0x2000*/
            if(data.length > 8192) {
                throw new RangeError('Too long');
            }
            // convert to .hex format
            var addr = 0x3e000; // magic start address in flash
            var chunk = new Uint8Array(5 + 16);
            var output = [];
            for (var i = 0; i < data.length; i += 16, addr += 16) {
                chunk[0] = 16; // length of data section
                chunk[1] = (addr >> 8) & 0xff; // high byte of 16-bit addr
                chunk[2] = addr & 0xff; // low byte of 16-bit addr
                chunk[3] = 0; // type (data)
                for (var j = 0; j < 16; ++j) {
                    chunk[4 + j] = data[i + j];
                }
                var checksum = 0;
                for (var j = 0; j < 4 + 16; ++j) {
                    checksum += chunk[j];
                }
                chunk[4 + 16] = (-checksum) & 0xff;
                output.push(':' + hexlify(chunk).toUpperCase());
            }
            return output.join('\n');
        }

    function runCode() {
        //resetStepUi(true);
        if(outputArea.value == 'Show code:\n================='){
            latestCode = Blockly.Python.workspaceToCode(workspace);
            //var hex = hexFile("ttttttttttttttttttttttttttt");
            //alert(latestCode);
            outputArea.value = outputArea.value +'\n' + latestCode;
        }else{
            resetStepUi(true);
            latestCode = Blockly.Python.workspaceToCode(workspace);
            outputArea.value = outputArea.value +'\n' + latestCode;
            //return;
        }
        
    }
      
   /*   function hexlify(ar) {
            var result = '';
            for (var i = 0; i < ar.length; ++i) {
                if (ar[i] < 16) {
                    result += '0';
                }
                result += ar[i].toString(16);
            }
            return result;
        }*/

    // Load the interpreter now, and upon future changes.
 //   generateCodeAndLoadIntoInterpreter();
   
  </script>
</head>
<body>
    <p>
    <?php echo "<button onclick='runCode()' name=\"msg1\" id='runButton'>Show Python</button>" ?>
    </p> 
  <div style="width: 100%">
    <div id="blocklyDiv"
        style="display: inline-block; height: 480px; width: 58%"></div>
    <textarea id="output" disabled="disabled"
        style="display: inline-block; height: 480px; width: 38%;">
    </textarea>
  </div>

  <xml id="toolbox" style="display: none">
          <category name="Basic">
      <block type="show_number"></block>
      <block type="show_led"></block>
      <block type="show_icon"></block>
      <block type="show_string_1"></block>
      <block type="forever"></block>
      <block type="pause__ms_"></block>
      <block type="on_start"></block>
      <block type="clear_screen"></block>
        
    </category> 
    


    <category name="Input">
      <block type="button_pressed"></block>
      <block type="on_shake"></block>
      <block type="on_pin_pressd"></block>
      <block type="buttona_is_pressed"></block>
      <block type="pin_is_pressed"></block>
      <block type="acceleration"></block>
      <block type="light_level"></block>
      <block type="compassheading"></block>
      <block type="temperature"></block>

    </category> 
    <category name="Logic">
      <block type="controls_if"></block>
        <block type="controls_ifelse"></block>
      <block type="logic_compare"></block>
      <block type="logic_operation"></block>
      <block type="logic_negate"></block>
      <block type="logic_boolean"></block>
    </category>
    <category name="Loops">
      <block type="controls_repeat_ext">
        <value name="TIMES">
          <block type="math_number">
            <field name="NUM">10</field>
          </block>
        </value>
      </block>
      <block type="controls_whileUntil"></block>
    </category>
    <category name="Math">
      <block type="math_number"></block>
      <block type="math_arithmetic"></block>
      <block type="math_single"></block>
    </category>
    <category name="Text">
      <block type="text"></block>
      <block type="text_length"></block>
      <block type="text_print"></block>
      <block type="wait_seconds"></block>
      <block type="text_prompt_ext">
        <value name="TEXT">
          <block type="text"></block>
        </value>
      </block>
      </category>
      <category name="Music">
        <block type="beat"></block>
        <block type="middleC"></block>
        <block type="play_tone"></block> 
        <block type="rest"></block>
        <block type="ring_tone"></block>
        <block type="melody"></block>
        <block type="start_melody"></block>
        <block type="music_on"></block>
        <block type="tempo"></block>
        <block type="change_tempo"></block>
        <block type="set_tempo"></block>
      </category>
      <category name="Led">
        <block type="plot"></block>
        <block type="unplot"></block>
          <block type="toggle"></block>
          <block type="point"></block>
           <block type="plot_bar"></block>
          <block type="plot_more"></block>
          <block type="brightness"></block>
          <block type="set_brightness"></block>
          <block type="led_enable"></block>
      </category>
      <category name="Radio">
          <block type="radio_send"></block>
          <block type="radio_send_value"></block>
          <block type="radio_send_string"></block>
          <block type="on_radio_received_number"></block>
          <block type="on_radio_received_number_2"></block>
          <block type="on_radio_received_number_3"></block>
          <block type="radio_set_group"></block>
          <block type="radio_set_transmit_power"></block>
          <block type="radio_set_transmit_serial_number"></block>
          <block type="radio_write_received_packet"></block>
      </category>
      <category name="Pins">
          <block type="digital_read"></block>
          <block type="digital_write"></block>
          <block type="analog_read_pin"></block>
          <block type="analog_write_pin"></block>
          <block type="map_pin"></block>
          <block type="analog_set_period_pin"></block>
          <block type="servo_write_pin"></block>
          <block type="servo_set_pulse_pin"></block>
          <block type="on_pin"></block>
          <block type="pulse_duration_pin"></block>
          <block type="pulse_in_pin"></block>
          <block type="i2c_read_number_pin"></block>
          <block type="i2c_write_number_pin"></block>
          <block type="spi_write_pin"></block>
          <block type="set_pin"></block>
          <block type="analog_pitch_pin"></block>
          <block type="spi_frequency_pin"></block>
          <block type="analog_set_pitch_pin"></block>
          <block type="set_pull_pin"></block>
          <block type="spi_format_bits_pin"></block>
          <block type="spi_set_pin"></block>
      </category>
    <category name="Variables" custom="VARIABLE"></category>
    <category name="Functions" custom="PROCEDURE"></category>
  </xml>

  <xml id="startBlocks" style="display: none">
    <block type="variables_set" id="set_n_initial" inline="true" x="20" y="20">
      <field name="VAR">n</field>
      <value name="VALUE">
        <block type="math_number">
          <field name="NUM">1</field>
        </block>
      </value>
      <next>
        <block type="controls_repeat_ext" id="repeat" inline="true">
          <value name="TIMES">
            <block type="math_number">
              <field name="NUM">4</field>
            </block>
          </value> 
          <statement name="DO">
           <block type="wait_seconds" id="wait">
              <field name="SECONDS">1.0</field>
              <next>
                <block type="variables_set" id="set_n_update" inline="true">
                  <field name="VAR">n</field>
                  <value name="VALUE">
                    <block type="math_arithmetic" inline="true">
                      <field name="OP">MULTIPLY</field>
                      <value name="A">
                        <block type="variables_get">
                          <field name="VAR">n</field>
                        </block>
                      </value>
                      <value name="B">
                        <block type="math_number">
                          <field name="NUM">2</field>
                        </block>
                      </value>
                    </block>
                  </value>
                  <next>
                    <block type="text_print" id="print" inline="false">
                      <value name="TEXT">
                        <block type="variables_get">
                          <field name="VAR">n</field>
                        </block>
                      </value>
                    </block>
                  </next>
                </block>
              </next>
            </block>
          </statement>
        </block>
      </next>
    </block>
  </xml>
  <script>
    var workspace = Blockly.inject('blocklyDiv',
        {media: 'google-blockly-a10c686/media/',
         toolbox: document.getElementById('toolbox')});
    Blockly.Xml.domToWorkspace(document.getElementById('startBlocks'),
                              workspace);
    
    // Exit is used to signal the end of a script.
    Blockly.Python.addReservedWords('exit');

    var outputArea = document.getElementById('output');
    var runButton = document.getElementById('runButton');
    outputArea.value = 'Show code:\n=================';

    var latestCode = '';
      var text = '';

    </script>
    <a href="..\..\projet_fin_de_parcours\untitled.hex" download="microbit_untitled.hex">Download the file</a>
</body>
</html>