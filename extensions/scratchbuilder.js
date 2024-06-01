
// Made with PenguinBuilder 3.1
// use PenguinBuilder at "https://chickencuber.github.io/PenguinBuilder/"
(function(Scratch) {
  const blocks = [];
  const vars = {};
  const menus = {};

  

  class Extension {
    getInfo() {
      return {
        "id": "scratchbuilder",
        "name": "scratch builder",
        "color1": "#0088ff",
        "blocks": blocks,
        "menus": menus,
      }
    }
  }
  
var extName, blockCount, i, extId, combined_left, extColor, inputCount, combined_right, i2, text;

function textReplace(haystack, needle, replacement) {
  needle = needle.replace(/([-()\[\]{}+?*.$\^|,:#<!\\])/g, '\\$1')
                 .replace(/\x08/g, '\\x08');
  return haystack.replace(new RegExp(needle, 'g'), replacement);
}

function textCount(haystack, needle) {
  if (needle.length === 0) {
    return haystack.length + 1;
  } else {
    return haystack.split(needle).length - 1;
  }
}



blocks.push({
  opcode: "scratchbuilder_Block_loadExtension",
  blockType: Scratch.BlockType.COMMAND,
  text: "(WIP) load extension - extension: [extension] mode: [mode]",
  arguments: {
      "extension": {
      type: Scratch.ArgumentType.STRING,
      defaultValue: `https://extensions.turbowarp.org/Lily/Assets.js`
    },
  "mode": {
    type: Scratch.ArgumentType.STRING,
    menu: "scratchbuilder_menu_0",
  },

  },
  disableMonitor: false
});
Extension.prototype["scratchbuilder_Block_loadExtension"] = function(args, util) {
  const localVars = {};

};


blocks.push({
  opcode: "scratchbuilder_Block_setup",
  blockType: Scratch.BlockType.COMMAND,
  text: "setup extension - name: [extName] id: [extId] color: [extColor]",
  arguments: {
      "extName": {
      type: Scratch.ArgumentType.STRING,
      defaultValue: `my extension`
    },
  "extId": {
      type: Scratch.ArgumentType.STRING,
      defaultValue: `my_extension`
    },
  "extColor": {
      type: Scratch.ArgumentType.COLOR,
      defaultValue: `#ffd500`
    },

  },
  disableMonitor: false
});
Extension.prototype["scratchbuilder_Block_setup"] = function(args, util) {
  const localVars = {};
    extName = args["extName"];
  extId = textReplace(textReplace(args["extId"].toLowerCase(), ' ', ''), '_', '');
  extColor = args["extColor"];

};


blocks.push({
  opcode: "scratchbuilder_Block_newBlock",
  blockType: Scratch.BlockType.COMMAND,
  text: "create new block - block name: [blockName] block id: [blockId] block type: [blockType]",
  arguments: {
      "blockName": {
      type: Scratch.ArgumentType.STRING,
      defaultValue: `block name`
    },
  "blockId": {
      type: Scratch.ArgumentType.STRING,
      defaultValue: `block_id`
    },
  "blockType": {
    type: Scratch.ArgumentType.STRING,
    menu: "scratchbuilder_menu_1",
  },

  },
  disableMonitor: false
});
Extension.prototype["scratchbuilder_Block_newBlock"] = function(args, util) {
  const localVars = {};
    vars['blocks'] = (String(String(vars['blocks'] == 'undefined' ? '' : vars['blocks']) + String(String(args["blockName"]) + String('$' + String(String(args["blockId"]) + String('$' + String(String(args["blockType"]) + '$0')))))) + '`');
  blockCount = (typeof blockCount === 'number' ? blockCount : 0) + 1;

};


blocks.push({
  opcode: "scratchbuilder_Block_newInput",
  blockType: Scratch.BlockType.COMMAND,
  text: "create new input - input id: [inputId] input type: [inputType] input default text: [defaultText] target block id: [targetID]",
  arguments: {
      "inputId": {
      type: Scratch.ArgumentType.STRING,
      defaultValue: `input_id`
    },
  "inputType": {
    type: Scratch.ArgumentType.STRING,
    menu: "scratchbuilder_menu_2",
  },
  "defaultText": {
      type: Scratch.ArgumentType.STRING,
      defaultValue: `default text`
    },
  "targetID": {
      type: Scratch.ArgumentType.STRING,
      defaultValue: `block_id`
    },

  },
  disableMonitor: false
});
Extension.prototype["scratchbuilder_Block_newInput"] = function(args, util) {
  const localVars = {};
    localVars['blockInput'] = (String(args["inputId"]) + String('^' + String(String(args["inputType"]) + String('^' + String(String(args["defaultText"]) + '&')))));
  i = 1;
  combined_left = '';
  while (!(vars['blocks'].split('`')[(i - 1)].split('$')[1] == args["targetID"])) {
    combined_left = String(String(combined_left) + String(vars['blocks'].split('`')[(i - 1)])) + '`';
    i = (typeof i === 'number' ? i : 0) + 1;
  }
  inputCount = vars['blocks'].split('`')[(i - 1)].split('$')[3] + 1;
  combined_right = String(combined_left) + String(String(String(vars['blocks'].split('`')[(i - 1)].split('$')[0]) + '$') + String(String(String(vars['blocks'].split('`')[(i - 1)].split('$')[1]) + '$') + String(String(String(vars['blocks'].split('`')[(i - 1)].split('$')[2]) + '$') + String(String(Math.round(inputCount)) + String('$' + String(String((String(vars['blocks'].split('`')[(i - 1)].split('$')[4]) + String(localVars['blockInput'])).slice(0, 9) == 'undefined' ? localVars['blockInput'] : String(vars['blocks'].split('`')[(i - 1)].split('$')[4]) + String(localVars['blockInput'])) + '`'))))));
  i = (typeof i === 'number' ? i : 0) + 1;
  while (!(i == textCount(vars['blocks'], '`') + 1)) {
    combined_right = String(combined_right) + String(String(vars['blocks'].split('`')[(i - 1)]) + '`');
    i = (typeof i === 'number' ? i : 0) + 1;
  }
  vars['blocks'] = combined_right;

};


blocks.push({
  opcode: "scratchbuilder_Block_BlocksReporter",
  blockType: Scratch.BlockType.REPORTER,
  text: "blocks",
  arguments: {

  },
  disableMonitor: false
});
Extension.prototype["scratchbuilder_Block_BlocksReporter"] = function(args, util) {
  const localVars = {};
    return vars['blocks'];
};


blocks.push({
  opcode: "scratchbuilder_Block_deleteBlocks",
  blockType: Scratch.BlockType.COMMAND,
  text: "delete all blocks",
  arguments: {

  },
  disableMonitor: false
});
Extension.prototype["scratchbuilder_Block_deleteBlocks"] = function(args, util) {
  const localVars = {};
    vars['blocks'] = 'undefined';
  blockCount = 0;

};


blocks.push({
  opcode: "scratchbuilder_Block_getBlock",
  blockType: Scratch.BlockType.REPORTER,
  text: "get block data - block number: [blockNumber] block data number: [blockData]",
  arguments: {
      "blockNumber": {
      type: Scratch.ArgumentType.NUMBER,
      defaultValue: `1`
    },
  "blockData": {
      type: Scratch.ArgumentType.NUMBER,
      defaultValue: `1`
    },

  },
  disableMonitor: false
});
Extension.prototype["scratchbuilder_Block_getBlock"] = function(args, util) {
  const localVars = {};
    return vars['blocks'].split('`')[(args["blockNumber"] - 1)].split('$')[(args["blockData"] - 1)];
};


blocks.push({
  opcode: "scratchbuilder_Block_compiled code",
  blockType: Scratch.BlockType.REPORTER,
  text: "compiled javascript extension",
  arguments: {

  },
  disableMonitor: false
});
Extension.prototype["scratchbuilder_Block_compiled code"] = function(args, util) {
  const localVars = {};
    return vars['compiled'];
};


blocks.push({
  opcode: "scratchbuilder_Block_compile",
  blockType: Scratch.BlockType.COMMAND,
  text: "export - output mode: [outputMode]",
  arguments: {
      "outputMode": {
    type: Scratch.ArgumentType.STRING,
    menu: "scratchbuilder_menu_3",
  },

  },
  disableMonitor: false
});
Extension.prototype["scratchbuilder_Block_compile"] = function(args, util) {
  const localVars = {};
    vars['compiled'] = 'compiling...';
  vars['compiledExtension'] = '';
  vars['compiledExtension'] = ('// made with scratch builder v1.0 by samllea1' + String(String("\n") + String('// scratch builder was made using penguin builder. Check it out! https://chickencuber.github.io/PenguinBuilder/editor/' + String(String("\n") + String('(function(Scratch) {' + String(String("\n") + String('  const blocks = [];' + String(String("\n") + String('  const vars = {};' + String(String("\n") + String('  const menus = {};' + String(String("\n") + String(String("\n") + String(String("\n") + String('   class Extension {' + String(String("\n") + String('    getInfo() {' + String(String("\n") + String('      return {' + String(String("\n") + String(String('        "id": "' + String(String(extId) + '",')) + String(String("\n") + String(String('        "name": "' + String(String(extName) + '",')) + String(String("\n") + String(String('        "color1": "' + String(String(extColor) + '",')) + String(String("\n") + String('        "blocks": blocks,' + String(String("\n") + String('        "menus": menus,' + String(String("\n") + String('      }' + String(String("\n") + String('    }' + String(String("\n") + '  }'))))))))))))))))))))))))))))))))));
  i = 1;
  for (var count3 = 0; count3 < blockCount; count3++) {
    localVars['blockName'] = (vars['blocks'].split('`')[(i - 1)].split('$')[0]);
    localVars['blockID'] = (vars['blocks'].split('`')[(i - 1)].split('$')[1]);
    localVars['blockType'] = (vars['blocks'].split('`')[(i - 1)].split('$')[2]);
    vars['compiledExtension'] = (String(vars['compiledExtension']) + String("\n"));
    vars['compiledExtension'] = (String(vars['compiledExtension']) + String('blocks.push({' + String("\n")));
    vars['compiledExtension'] = (String(vars['compiledExtension']) + String(String('  opcode: "' + String(String(extName) + String('_Block_' + String(String(localVars['blockID']) + '",')))) + String("\n")));
    if (localVars['blockType'] == 'block') {
      vars['compiledExtension'] = (String(vars['compiledExtension']) + String('   blockType: Scratch.BlockType.COMMAND,' + String("\n")));
    }
    if (localVars['blockType'] == 'reporter') {
      vars['compiledExtension'] = (String(vars['compiledExtension']) + String('  blockType: Scratch.BlockType.REPORTER,' + String("\n")));
    }
    if (localVars['blockType'] == 'boolean') {
      vars['compiledExtension'] = (String(vars['compiledExtension']) + String('  blockType: Scratch.BlockType.BOOLEAN,' + String("\n")));
    }
    i2 = 1;
    text = localVars['blockName'];
    var repeat_end = textCount(vars['blocks'].split('`')[(i - 1)], '&');
    for (var count = 0; count < repeat_end; count++) {
      text = String(text) + String(' [' + String(String(vars['blocks'].split('`')[(i - 1)].split('$')[4].split('&')[(i2 - 1)].split('^')[0]) + ']'));
      i2 = (typeof i2 === 'number' ? i2 : 0) + 1;
    }
    vars['compiledExtension'] = (String(vars['compiledExtension']) + String(String('  text: "' + String(String(text) + '",')) + String("\n")));
    vars['compiledExtension'] = (String(vars['compiledExtension']) + String('  arguments: {' + String("\n")));
    i2 = 1;
    var repeat_end2 = textCount(vars['blocks'].split('`')[(i - 1)], '&');
    for (var count2 = 0; count2 < repeat_end2; count2++) {
      vars['compiledExtension'] = (String(vars['compiledExtension']) + String(String(String('  "' + String(vars['blocks'].split('`')[(i - 1)].split('$')[4].split('&')[(i2 - 1)].split('^')[0])) + '": {') + String("\n")));
      vars['compiledExtension'] = (String(vars['compiledExtension']) + String(String(String('      type: Scratch.ArgumentType.' + String(vars['blocks'].split('`')[(i - 1)].split('$')[4].split('&')[(i2 - 1)].split('^')[1].toUpperCase())) + ',') + String("\n")));
      vars['compiledExtension'] = (String(vars['compiledExtension']) + String(String(String('      defaultValue: `' + String(vars['blocks'].split('`')[(i - 1)].split('$')[4].split('&')[(i2 - 1)].split('^')[2])) + '`') + String("\n")));
      vars['compiledExtension'] = (String(vars['compiledExtension']) + String('    },' + String("\n")));
      i2 = (typeof i2 === 'number' ? i2 : 0) + 1;
    }
    vars['compiledExtension'] = (String(vars['compiledExtension']) + String('  },' + String("\n")));
    vars['compiledExtension'] = (String(vars['compiledExtension']) + String('  disableMonitor: false' + String("\n")));
    vars['compiledExtension'] = (String(vars['compiledExtension']) + String('});' + String("\n")));
    vars['compiledExtension'] = (String(vars['compiledExtension']) + String(String('Extension.prototype["' + String(String(String(extName) + String('_Block_' + String(localVars['blockID']))) + '"] = function(args, util) {')) + String("\n")));
    vars['compiledExtension'] = (String(vars['compiledExtension']) + String('  const localVars = {};' + String("\n")));
    vars['compiledExtension'] = (String(vars['compiledExtension']) + String("\n"));
    vars['compiledExtension'] = (String(vars['compiledExtension']) + String('};' + String("\n")));
    i = (typeof i === 'number' ? i : 0) + 1;
  }
  vars['compiledExtension'] = (String(vars['compiledExtension']) + String("\n"));
  vars['compiledExtension'] = (String(vars['compiledExtension']) + String("\n"));
  vars['compiledExtension'] = (String(vars['compiledExtension']) + String('  Scratch.extensions.register(new Extension());' + String("\n")));
  vars['compiledExtension'] = (String(vars['compiledExtension']) + String('})(Scratch);' + String("\n")));
  if (args["outputMode"] == 'to blocks reporter') {
    vars['compiled'] = vars['compiledExtension'];
  }

};



menus["scratchbuilder_menu_0"] = {
acceptReporters: true,
items: ('url`raw'.split('`')),
};


menus["scratchbuilder_menu_1"] = {
acceptReporters: true,
items: ['block', 'reporter', 'boolean'],
};


menus["scratchbuilder_menu_2"] = {
acceptReporters: true,
items: ('string`number`boolean`empty`color`costume`sound`angle`note`matrix'.split('`')),
};


menus["scratchbuilder_menu_3"] = {
acceptReporters: true,
items: ('to blocks reporter'.split('`')),
};


  Scratch.extensions.register(new Extension());
})(Scratch);
