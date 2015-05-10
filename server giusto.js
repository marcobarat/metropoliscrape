var express = require('express');
var fs = require('fs');
var request = require('request');
var cheerio = require('cheerio');
var app     = express();

var link =[];
var listadescrizioni = [];



app.get('/scrape', function(req, res){
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "X-Requested-With");
	url = 'http://www.metropoliscinemas.it/';
	var i=0;
	var titolo =[];
	var loc = [];
	var js = [];
	var json = {title : "",locandina: ""};
	
	function genera(titolo,film,desc){
			var i=0;
			var obj={};
			for(i=0;i<titolo.length;i++){
				obj={titolo:titolo[i],locandina:film[i],descrizione:desc[i]};

				js[i]=obj;


			}
	}
				var obj={};
var result;
	function genera1(titolo,film){
			var i=0;
			obj=new Array();
			for(i=0;i<titolo.length;i++){
				obj={titolo:titolo[i],locandina:film[i]};
				js[i]=obj;
			}
	}
	var j=0; 

var prova = [];
var counter = 0;
function dosome(urly,callback){

req1 = request.defaults({
	jar: true,                 // save cookies to jar
	rejectUnauthorized: false, 
	followAllRedirects: true   // allow redirections
})

	req1.get({
		url: urly,
		headers: {
			'User-Agent': 'Super Cool Browser' // optional headers
		 }
	  }, function(err, resp, body) {
		
		var $ = cheerio.load(body);
		var descry = $(".rightcontent").find("p:nth-last-child(odd)").text();
		callback(descry.slice(0,10));
		// get the data and output to console
		//console.log(descry);
		
	});
	}
var objo = [];	
request(url, function(error, response, html){

		if(!error){
			var $ = cheerio.load(html);
			var title, release, rating,lunghezza;
			var json = { title : "",loc:""};
			$('#tabs-1').children('.filmcontent').filter(function(){
		        var data = $(this);
				var p = data.children('.titolo');
		        //release = data.children().last().children().text();
				title = p.text().replace(/   /g,'');
				//console.log(i+title);
				json.title = title.replace(/\n/g,'');
				//console.log("dc:"+i+json.title);
				titolo[i]=json.title;
				i++;
        })
		lunghezza=i;
		i=0;
		$('#tabs-1').children('.filmcontent').filter(function(){
		        var data = $(this);
			    link[i]= data.find("a").attr("href");
				dosome(link[i],function(data){
				});
				console.log(objo[i]);
				var p = data.children('.watermark-box');
				var loca=data.find("img").attr("src");
				json.loc = loca;
				loc[i]=json.loc;
				i++;
        }) 
;
 
// scrape the page

}

	function prova(array){
		var i=0;
		console.log("im in!");
		for(i=0;i<array.length;i++)
			console.log(array[i]);
	}
		genera1(titolo,loc);
	
	fs.writeFile('output.json', JSON.stringify(obj, null, 4), function(err){
        console.log('File successfully written! - Check your project directory for the output.json file');
     })
       res.send(JSON.stringify(js, null, 4))
	})	
})



app.get('/prova', function(req, res){
var $ = require('cheerio')

var request = require('request')

var ris=[];

var arrayDescrizioni = [];
var h=0;
	
	
function gotHTML(err, resp, html) {
  if (err) return console.error(err)
  var parsedHTML = $.load(html)
  // get all img tags and loop over them
	
	var descry = [];
 parsedHTML('.rightcontent').map(function(i, link) {
    var href = $(link).find("p:nth-last-child(odd)");
	console.log(href);
    if (!href.match('p')) return
    descry.push(domain + href)
  })
  }


	function generaR(desc){
			var i=0;
			if (desc.length==0)
				console.log("array descrizioni vuoto!");
			else {
					for(i=0;i<desc.length;i++){
						var obj={descrizione:desc[i]};
						ris[i]=obj;
					}
			}
	}
	function fai(link){
			var i=0;
			for(i=0;i<link.length;i++){
				var obj=request(link[i], gotHTML);
				ris[i]=obj;	
			}
	}		
	

generaR(arrayDescrizioni);
		        res.send(ris);

	})	
	


app.listen('8081')
console.log('Magic happens on port 8081');
exports = module.exports = app; 	