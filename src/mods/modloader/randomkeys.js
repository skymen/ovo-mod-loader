(function() {
    let old = globalThis.sdk_runtime;
    c2_callFunction("execCode", ["globalThis.sdk_runtime = this.runtime"]);
    //let runtime = globalThis.sdk_runtime;
    let runtime = cr_getC2Runtime()
    globalThis.sdk_runtime = old;

    var keyboardMap = [
        "", // [0]
        "", // [1]
        "", // [2]
        "CANCEL", // [3]
        "", // [4]
        "", // [5]
        "HELP", // [6]
        "", // [7]
        "BACK_SPACE", // [8]
        "TAB", // [9]
        "", // [10]
        "", // [11]
        "CLEAR", // [12]
        "ENTER", // [13]
        "ENTER_SPECIAL", // [14]
        "", // [15]
        "SHIFT", // [16]
        "CONTROL", // [17]
        "ALT", // [18]
        "PAUSE", // [19]
        "CAPS_LOCK", // [20]
        "KANA", // [21]
        "EISU", // [22]
        "JUNJA", // [23]
        "FINAL", // [24]
        "HANJA", // [25]
        "", // [26]
        "ESCAPE", // [27]
        "CONVERT", // [28]
        "NONCONVERT", // [29]
        "ACCEPT", // [30]
        "MODECHANGE", // [31]
        "space", // [32]
        "PAGE_UP", // [33]
        "PAGE_DOWN", // [34]
        "END", // [35]
        "HOME", // [36]
        "←", // [37]
        "↑", // [38]
        "→", // [39]
        "↓", // [40]
        "SELECT", // [41]
        "PRINT", // [42]
        "EXECUTE", // [43]
        "PRINTSCREEN", // [44]
        "INSERT", // [45]
        "DELETE", // [46]
        "", // [47]
        "0", // [48]
        "1", // [49]
        "2", // [50]
        "3", // [51]
        "4", // [52]
        "5", // [53]
        "6", // [54]
        "7", // [55]
        "8", // [56]
        "9", // [57]
        ":", // [58]
        ";", // [59]
        "<", // [60]
        "=", // [61]
        ">", // [62]
        "?", // [63]
        "AT", // [64]
        "A", // [65]
        "B", // [66]
        "C", // [67]
        "D", // [68]
        "E", // [69]
        "F", // [70]
        "G", // [71]
        "H", // [72]
        "I", // [73]
        "J", // [74]
        "K", // [75]
        "L", // [76]
        "M", // [77]
        "N", // [78]
        "O", // [79]
        "P", // [80]
        "Q", // [81]
        "R", // [82]
        "S", // [83]
        "T", // [84]
        "U", // [85]
        "V", // [86]
        "W", // [87]
        "X", // [88]
        "Y", // [89]
        "Z", // [90]
        "OS_KEY", // [91] Windows Key (Windows) or Command Key (Mac)
        "", // [92]
        "CONTEXT_MENU", // [93]
        "", // [94]
        "SLEEP", // [95]
        "NUMPAD0", // [96]
        "NUMPAD1", // [97]
        "NUMPAD2", // [98]
        "NUMPAD3", // [99]
        "NUMPAD4", // [100]
        "NUMPAD5", // [101]
        "NUMPAD6", // [102]
        "NUMPAD7", // [103]
        "NUMPAD8", // [104]
        "NUMPAD9", // [105]
        "MULTIPLY", // [106]
        "ADD", // [107]
        "SEPARATOR", // [108]
        "SUBTRACT", // [109]
        "DECIMAL", // [110]
        "DIVIDE", // [111]
        "F1", // [112]
        "F2", // [113]
        "F3", // [114]
        "F4", // [115]
        "F5", // [116]
        "F6", // [117]
        "F7", // [118]
        "F8", // [119]
        "F9", // [120]
        "F10", // [121]
        "F11", // [122]
        "F12", // [123]
        "F13", // [124]
        "F14", // [125]
        "F15", // [126]
        "F16", // [127]
        "F17", // [128]
        "F18", // [129]
        "F19", // [130]
        "F20", // [131]
        "F21", // [132]
        "F22", // [133]
        "F23", // [134]
        "F24", // [135]
        "", // [136]
        "", // [137]
        "", // [138]
        "", // [139]
        "", // [140]
        "", // [141]
        "", // [142]
        "", // [143]
        "NUM_LOCK", // [144]
        "SCROLL_LOCK", // [145]
        "WIN_OEM_FJ_JISHO", // [146]
        "WIN_OEM_FJ_MASSHOU", // [147]
        "WIN_OEM_FJ_TOUROKU", // [148]
        "WIN_OEM_FJ_LOYA", // [149]
        "WIN_OEM_FJ_ROYA", // [150]
        "", // [151]
        "", // [152]
        "", // [153]
        "", // [154]
        "", // [155]
        "", // [156]
        "", // [157]
        "", // [158]
        "", // [159]
        "CIRCUMFLEX", // [160]
        "EXCLAMATION", // [161]
        "DOUBLE_QUOTE", // [162]
        "HASH", // [163]
        "DOLLAR", // [164]
        "PERCENT", // [165]
        "AMPERSAND", // [166]
        "UNDERSCORE", // [167]
        "OPEN_PAREN", // [168]
        "CLOSE_PAREN", // [169]
        "ASTERISK", // [170]
        "PLUS", // [171]
        "PIPE", // [172]
        "HYPHEN_MINUS", // [173]
        "OPEN_CURLY_BRACKET", // [174]
        "CLOSE_CURLY_BRACKET", // [175]
        "TILDE", // [176]
        "", // [177]
        "", // [178]
        "", // [179]
        "", // [180]
        "VOLUME_MUTE", // [181]
        "VOLUME_DOWN", // [182]
        "VOLUME_UP", // [183]
        "", // [184]
        "", // [185]
        "SEMICOLON", // [186]
        "EQUALS", // [187]
        "COMMA", // [188]
        "MINUS", // [189]
        "PERIOD", // [190]
        "SLASH", // [191]
        "BACK_QUOTE", // [192]
        "", // [193]
        "", // [194]
        "", // [195]
        "", // [196]
        "", // [197]
        "", // [198]
        "", // [199]
        "", // [200]
        "", // [201]
        "", // [202]
        "", // [203]
        "", // [204]
        "", // [205]
        "", // [206]
        "", // [207]
        "", // [208]
        "", // [209]
        "", // [210]
        "", // [211]
        "", // [212]
        "", // [213]
        "", // [214]
        "", // [215]
        "", // [216]
        "", // [217]
        "", // [218]
        "OPEN_BRACKET", // [219]
        "BACK_SLASH", // [220]
        "CLOSE_BRACKET", // [221]
        "QUOTE", // [222]
        "", // [223]
        "META", // [224]
        "ALTGR", // [225]
        "", // [226]
        "WIN_ICO_HELP", // [227]
        "WIN_ICO_00", // [228]
        "", // [229]
        "WIN_ICO_CLEAR", // [230]
        "", // [231]
        "", // [232]
        "WIN_OEM_RESET", // [233]
        "WIN_OEM_JUMP", // [234]
        "WIN_OEM_PA1", // [235]
        "WIN_OEM_PA2", // [236]
        "WIN_OEM_PA3", // [237]
        "WIN_OEM_WSCTRL", // [238]
        "WIN_OEM_CUSEL", // [239]
        "WIN_OEM_ATTN", // [240]
        "WIN_OEM_FINISH", // [241]
        "WIN_OEM_COPY", // [242]
        "WIN_OEM_AUTO", // [243]
        "WIN_OEM_ENLW", // [244]
        "WIN_OEM_BACKTAB", // [245]
        "ATTN", // [246]
        "CRSEL", // [247]
        "EXSEL", // [248]
        "EREOF", // [249]
        "PLAY", // [250]
        "ZOOM", // [251]
        "", // [252]
        "PA1", // [253]
        "WIN_OEM_CLEAR", // [254]
        "" // [255]
      ];

    
    allowed_keys = [];
    for (var i = 48; i <= 57; i++) {
        allowed_keys.push(i);
    }
    console.log(allowed_keys)

    for (var i = 65; i <= 90; i++) {
        allowed_keys.push(i);
    }
    allowed_keys.splice(allowed_keys.indexOf(80), 1)
    allowed_keys.splice(allowed_keys.indexOf(82), 1)
    allowed_keys = allowed_keys.concat([8, 9, 13, 16, 17, 18, 20, 32, 37, 38, 39, 40], [186, 187, 188, 189, 190, 191, 219, 220, 221, 222])
    console.log(allowed_keys)

    var user_keys = []

    let notify = (title, text, image = "./speedrunner.png") => {
        cr.plugins_.sirg_notifications.prototype.acts.AddSimpleNotification.call(
            runtime.types_by_index.find(
                (type) => type.plugin instanceof cr.plugins_.sirg_notifications
            ).instances[0],
            title,
            text,
            image
        );
    };

    var countdown;

    let settings = JSON.parse(localStorage.getItem("modSettings"))['mods']['randomkeys']['settings'];

    let keybindDown = (event, type) => {
        console.log(event.key, settings[type])
        console.log(settings)
        if(settings[type].length === 2) { //special + regular
          if (event.key.toLowerCase() === settings[type][1]) {
            if ((event.shiftKey && settings[type][0] === "shift") || (event.ctrlKey && settings[type][0] === "control") || (event.altKey && settings[type][0] === "alt") || (event.metaKey && settings[type][0] === "meta")) {
              return true;
            }
          }
        } else { //regular (1 key)
          if (event.key.toLowerCase() === settings[type][0]) {
            return true;
          }
        }
        return false;
      }

    globalThis.randomkeysToggle = function (enable) {
        if (enable) {
            // Use the bound methods when adding the event listeners
            document.addEventListener("keydown", ovoRandomKeys.boundKeyDown);
        } else {
            // Use the bound methods when removing the event listeners
            document.removeEventListener("keydown", ovoRandomKeys.boundKeyDown);
            clearInterval(countdown);
        }
    }
    globalThis.randomkeysSettingsUpdate = function () {
        settings = JSON.parse(localStorage.getItem("modSettings"))['mods']['randomkeys']['settings'];
    }

    function timer(){
        var sec = 60;
        countdown = setInterval(function(){
            console.log(sec);
            sec--;
            if (sec < 0) {
                user_keys = []
                while(user_keys.length < 4) {
                    key = allowed_keys[Math.floor(Math.random()*allowed_keys.length)];
                    if(!user_keys.includes(key)) {
                        user_keys.push(key);
                    }
                }
                

                runtime.types_by_index.find(x=>x.plugin instanceof cr.plugins_.Globals && x.instvar_sids.length === 6).instances[0].instance_vars[0] = user_keys[0]
                runtime.types_by_index.find(x=>x.plugin instanceof cr.plugins_.Globals && x.instvar_sids.length === 6).instances[0].instance_vars[1] = user_keys[1]
                runtime.types_by_index.find(x=>x.plugin instanceof cr.plugins_.Globals && x.instvar_sids.length === 6).instances[0].instance_vars[2] = user_keys[2]
                runtime.types_by_index.find(x=>x.plugin instanceof cr.plugins_.Globals && x.instvar_sids.length === 6).instances[0].instance_vars[3] = user_keys[3]

                notify("New Keys:<br/>These reset in a minute!", `Left: ${keyboardMap[user_keys[0]]}<br/>Up: ${keyboardMap[user_keys[1]]}<br/>Right: ${keyboardMap[user_keys[2]]}<br/>Down: ${keyboardMap[user_keys[3]]}`);
                clearInterval(countdown);

                timer();
            }
        }, 1000);
    }
  
    let ovoRandomKeys = {
        init() {
            this.boundKeyDown = this.keyDown.bind(this);
            
            document.addEventListener("keydown", this.boundKeyDown);
            notify("Mod Loaded", "Random Keys Mod loaded");
        },
        keyDown(event) {
            if(keybindDown(event, "randomkeyskeybind")) {
                clearInterval(countdown);

                user_keys = []
                while(user_keys.length < 4) {
                    key = allowed_keys[Math.floor(Math.random()*allowed_keys.length)];
                    if(!user_keys.includes(key)) {
                        user_keys.push(key);
                    }
                }
                

                runtime.types_by_index.find(x=>x.plugin instanceof cr.plugins_.Globals && x.instvar_sids.length === 6).instances[0].instance_vars[0] = user_keys[0]
                runtime.types_by_index.find(x=>x.plugin instanceof cr.plugins_.Globals && x.instvar_sids.length === 6).instances[0].instance_vars[1] = user_keys[1]
                runtime.types_by_index.find(x=>x.plugin instanceof cr.plugins_.Globals && x.instvar_sids.length === 6).instances[0].instance_vars[2] = user_keys[2]
                runtime.types_by_index.find(x=>x.plugin instanceof cr.plugins_.Globals && x.instvar_sids.length === 6).instances[0].instance_vars[3] = user_keys[3]

                notify("Resetting Timer and Keys<br/>These reset in a minute!", `Left: ${keyboardMap[user_keys[0]]}<br/>Up: ${keyboardMap[user_keys[1]]}<br/>Right: ${keyboardMap[user_keys[2]]}<br/>Down: ${keyboardMap[user_keys[3]]}`);
                
                timer();
                
            } else if(keybindDown(event, "showkeyskeybind")) {
                notify("Current Keys:", `Left: ${keyboardMap[runtime.types_by_index.find(x=>x.plugin instanceof cr.plugins_.Globals && x.instvar_sids.length === 6).instances[0].instance_vars[0]]}<br/>Up: ${keyboardMap[runtime.types_by_index.find(x=>x.plugin instanceof cr.plugins_.Globals && x.instvar_sids.length === 6).instances[0].instance_vars[1]]}<br/>Right: ${keyboardMap[runtime.types_by_index.find(x=>x.plugin instanceof cr.plugins_.Globals && x.instvar_sids.length === 6).instances[0].instance_vars[2]]}<br/>Down: ${keyboardMap[runtime.types_by_index.find(x=>x.plugin instanceof cr.plugins_.Globals && x.instvar_sids.length === 6).instances[0].instance_vars[3]]}`);
            }
        }
    };
    ovoRandomKeys.init();
})();