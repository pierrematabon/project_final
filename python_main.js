/*
0.0.11
A simple editor that targets MicroPython for the BBC micro:bit.
Feel free to have a look around! (We've commented the code so you can see what
everything does.)
*/

/*
Returns an object that defines the behaviour of the Python editor. The editor
is attached to the div with the referenced id.
*/
function pythonEditor(id) {
    // An object that encapsulates the behaviour of the editor.
    editor = {};
    editor.initialFontSize = 22;
    editor.fontSizeStep = 4;

    // Represents the ACE based editor.
    var ACE = ace.edit(id);  // The editor is in the tag with the referenced id.
    ACE.setOptions({
        enableSnippets: true  // Enable code snippets.
    })
    ACE.setTheme("ace/theme/kr_theme");  // Make it look nice.
    ACE.getSession().setMode("ace/mode/python");  // We're editing Python.
    ACE.getSession().setTabSize(4); // Tab=4 spaces.
    ACE.getSession().setUseSoftTabs(true); // Tabs are really spaces.
    ACE.setFontSize(editor.initialFontSize);
    editor.ACE = ACE;

    // Gets the textual content of the editor (i.e. what the user has written).
    editor.getCode = function() {
        return ACE.getValue();
    };

    // Sets the textual content of the editor (i.e. the Python script).
    editor.setCode = function(code) {
        ACE.setValue(code);
    };

    // Give the editor user input focus.
    editor.focus = function() {
        ACE.focus();
    }

    // Set a handler function to be run if code in the editor changes.
    editor.on_change = function(handler) {
        ACE.getSession().on('change', handler);
    };

    // Return details of all the snippets this editor knows about.
    editor.getSnippets = function() {
        var snippetManager = ace.require("ace/snippets").snippetManager;
        return snippetManager.snippetMap.python;
    };

    // Triggers a snippet by name in the editor.
    editor.triggerSnippet = function(snippet) {
        var snippetManager = ace.require("ace/snippets").snippetManager;
        var snippet = snippetManager.snippetNameMap.python[snippet];
        if(snippet) {
            snippetManager.insertSnippet(ACE, snippet.content);
        }
    };

    /*
    Turn a Python script into Intel HEX format to be concatenated at the
    end of the MicroPython firmware.hex.  A simple header is added to the
    script.
    - takes a Python script as a string
    - returns hexlified string, with newlines between lines
    */
    editor.hexlify = function(script) {
        function hexlify(ar) {
            var result = '';
            for (var i = 0; i < ar.length; ++i) {
                if (ar[i] < 16) {
                    result += '0';
                }
                result += ar[i].toString(16);
            }
            return result;
        }
        // add header, pad to multiple of 16 bytes
        data = new Uint8Array(4 + script.length + (16 - (4 + script.length) % 16));
        data[0] = 77; // 'M'
        data[1] = 80; // 'P'
        data[2] = script.length & 0xff;
        data[3] = (script.length >> 8) & 0xff;
        for (var i = 0; i < script.length; ++i) {
            data[4 + i] = script.charCodeAt(i);
        }
        // check data.length < 0x2000
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
            output.push(':' + hexlify(chunk).toUpperCase())
        }
        return output.join('\n');
    };

    // Generates a hex file containing the user's Python from the firmware.
    editor.getHexFile = function(firmware) {
        var hexlified_python = this.hexlify(this.getCode());
        var insertion_point = ":::::::::::::::::::::::::::::::::::::::::::";
        return firmware.replace(insertion_point, hexlified_python);
    }
    
    return editor;
};