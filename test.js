const namifyUrl= require(".")

var ok=0
var er=0
var i=1

function test(output, expect) {
	console.log("[Test "+i+"]: "+output)
	if(output == expect) {
		ok++
	}
	else {
		er++
	}
	i++
}
