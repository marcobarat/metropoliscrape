var request = require("request"),
	cheerio = require("cheerio"),
	url = "http://www.wunderground.com/cgi-bin/findweather/getForecast?&query=" + 02888;
var valore=122;

function stampa(){
console.log("riproviamo: " + valore);
}
	
request(url, function (error, response, body) {
	if (!error) {
		var $ = cheerio.load(body),
			temperature = $("[data-variable='temperature'] .wx-value").html();
			valore=temperature;
			
		console.log("It’s " + temperature + " degrees Fahrenheit.");
		stampa();
	} else {
		console.log("We’ve encountered an error: " + error);
	}
});

