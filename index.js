// Max Base
// https://github.com/BaseMax/namifyUrlJs
'use strict'
const namifyUrl = input => {
	if(input.substr(0, 7) == "http://") { 
		input=input.substr(7, input.length);
		// input=input.replace("http://", '')
	}
	else if(input.substr(0, 8) == "https://") { 
		input=input.substr(8, input.length);
		// input=input.replace("https://", '')
	}
	if(input.substr(0, 4) == "www.") { 
		input=input.substr(4, input.length);
		// input=input.replace("www.", '')
	}
	if(input.substr(-1) == "/") {
		input=input.substring(0, input.length-1);
	}
	return input
};

module.exports = namifyUrl
module.exports.default = namifyUrl
