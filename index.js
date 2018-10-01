var bplist = require('read-bplist');
var fs = require('fs');
var util = require('util');

var shortcutPath =  './Textnodes.shortcut';

function shortcutToJSON(shortcutPath) {
	bplist(shortcutPath).then((data) => {
		fs.writeFile('shortcut.json', JSON.stringify(data), function (err) {
			if (err) throw err;
			console.log('Saved!');
		});
	});
}

shortcutToJSON(shortcutPath);