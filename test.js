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

test(namifyUrl("https://google.com/"), "google.com")
test(namifyUrl("http://www.google.com/"), "google.com")

console.log("[Success Test]: "+ok + "\n[Error Test]: "+er)
