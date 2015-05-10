var http = require('http');
var url = require('url');

var server = new http.Server();
server.listen(8080);

server.on("connect", function(){
	console.log("Client connesso");
});

var get = function(year,month,day,hours,minutes,seconds,milliseconds){
	var obj = new Object();
	   obj.year = year;
	   obj.month = month;
	   obj.day = day;
	   obj.hours  = hours;
	   obj.minutes = minutes;
	   obj.seconds = seconds;
	   obj.milliseconds = milliseconds;
	   var jsonString= JSON.stringify(obj);
   
   return jsonString;
}

server.on("request", function(request,response){

	/* ottengo la data */
	var date = new Date();
	var year = date.getFullYear();
	var month = date.getMonth()+1;
	var day = date.getUTCDate();
	var hours = date.getHours();
	var minutes = date.getMinutes();
	var seconds = date.getSeconds();
	var milliseconds = date.getMilliseconds();


   
	console.log("nuova richiesta");
	
	var path_url = url.parse(request.url);
	console.log("Risorsa richiesta " + path_url.pathname);
	
	if( path_url.pathname == "/gettime") {
		response.writeHead(200, {
		"Content-Type:": "application/json; charset=UTF-8",
		"Access-Control-Allow-Origin": "*"
	});
		var j = get(year,month,day,hours,minutes,seconds,milliseconds);
		response.write(""+j);
		response.end();
	}
		
});



