var express = require('express');
var fs = require('fs');
var request = require('request');
var cheerio = require('cheerio');
var app     = express();

var listadescrizioni = [];



app.get('/scrape', function(req, res){
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "X-Requested-With");
	url = 'http://www.metropoliscinemas.it/';
	var i=0;
	var titolo1 =[];
	var titolo2 =[];
	var titolo3 =[];
	
	var loc1 = [];
	var loc2 = [];
	var loc3 = [];

	var link1 = [];
	var link2 = [];
	var link3 = [];
	
	var giorno=[];
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
			var obj1={};
			var obj2={};
			var obj3={};

			var ar1=[];
			var ar2=[];
			var ar3=[];

var result;
	function max(a,b,c){
		var max=0;
		if(a>=b){
			max=a;
			if(c>max)
				max=c;
		}
		else {
			max=b;
				if(c>max)
					max=c;			
	    }
			return max;
	}
var editeditems = [];

	function genera1(titolo1,film1,link1,titolo2,film2,link2,titolo3,film3,link3,giorno){
			var i=0;

			var i=0;
			var j=0;
			
			var z=0;
			var fine=0;
			//1
				var uno = titolo1.length;
				var fi1 = [];
				var fi2 = [];
				var fi3 = [];
				fi1.push({"giorno":giorno[0]});		
				while(j!=uno){
					fi1.push({
					"titolo": titolo1[j],
					"locandina": film1[j],
					"link":link1[j]
					});
					j++;
				}
				var due = titolo2.length;
				z=0;
				fi2.push({"giorno":giorno[1]});

				while(z!=due){
					fi2.push({
					"titolo": titolo2[z],
					"locandina": film2[z],
					"link":link2[z]
					});

					z++;
				}
			
				var tre = titolo3.length;
				var e=0;
				zero=0;
				z=0;
				fi3.push({"giorno":giorno[2]});

				while(e!=tre){
					fi3.push({
					"titolo": titolo3[e],
					"locandina": film3[e],
				    "link":link3[e]

					});
					e++;
				}
				        editeditems.push({
			film1:fi1,
			film2:fi2,
            film3: fi3
        });
	} 
	/*function genera1(titolo1,film1,titolo2,film2,titolo3,film3){
			var i=0;
			obj1=new Object();
			obj2=new Array();
			obj3=new Array();

			var max=titolo1.length+titolo2.length+titolo3.length;
			var i=0;
			var j=0;
			var z=0;
			var fine=0;
			//1
				var uno = titolo1.length;
				while(j!=uno){
					obj1.titolo=titolo1[j];
					obj1.locandina=film1[j];
					js[j]=obj1;
					j++;				
					}
				/*zero =0;
				js[j]="{film2:[]}";
				var due = titolo2.length+uno;
				z=j;
				j++;
				while(z!=due+1){
					obj2={titolo:titolo2[zero],locandina:film2[zero]};
					js[j]=obj2;
					zero++;
					z++;
					j++;
				}
				js[j]="{film3:[]}";
				j++;
				
				var tre = titolo3.length+due+uno;
				zero=0;
				while(z!=tre+1){
					obj3={titolo:titolo3[zero],locandina:film3[zero]};
					js[j]=obj3;
					zero++;
					z++;
					j++;
				}
	} */

	var obj;
function gen(title1){
			var j=0;
			obj=new Object();
			var uno = title1.length;
			while(j!=uno){
					obj.title=title1[j];
					js[j]=obj;
					j++;				
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
				titolo1[i]=json.title;
				i++;
        })
		i=0;
			$('#tabber-1').filter(function(){
		        var data = $(this);
				var day = data.text();
				giorno[0]=day;

        })
			$('#tabber-2').filter(function(){
		        var data = $(this);
				var day = data.text();
				giorno[1]=day;

        })
			$('#tabber-3').filter(function(){
		        var data = $(this);
				var day = data.text();
				giorno[2]=day;

        })
			i=0;
			$('#tabs-2').children('.filmcontent').filter(function(){
		        var data = $(this);
				var p = data.children('.titolo');
		        //release = data.children().last().children().text();
				title = p.text().replace(/   /g,'');
				//console.log(i+title);
				json.title = title.replace(/\n/g,'');
				//console.log("dc:"+i+json.title);
				titolo2[i]=json.title;
				i++;
        })
			i=0;
			$('#tabs-3').children('.filmcontent').filter(function(){
		        var data = $(this);
				var p = data.children('.titolo');
		        //release = data.children().last().children().text();
				title = p.text().replace(/   /g,'');
				//console.log(i+title);
				json.title = title.replace(/\n/g,'');
				//console.log("dc:"+i+json.title);
				titolo3[i]=json.title;
				i++;
        })
		lunghezza=i;
		i=0;
		$('#tabs-1').children('.filmcontent').filter(function(){
		        var data = $(this);
			    link1[i]= data.find("a").attr("href");
				var p = data.children('.watermark-box');
				var loca=data.find("img").attr("src");
				json.loc = loca;
				loc1[i]=json.loc;
				i++;
        }) 
		i=0;
		$('#tabs-2').children('.filmcontent').filter(function(){
		        var data = $(this);
			    link2[i]= data.find("a").attr("href");
				var p = data.children('.watermark-box');
				var loca=data.find("img").attr("src");
				json.loc = loca;
				loc2[i]=json.loc;
				i++;
        }) 
		i=0;
		$('#tabs-3').children('.filmcontent').filter(function(){
		        var data = $(this);
			    link3[i]= data.find("a").attr("href");
				var p = data.children('.watermark-box');
				var loca=data.find("img").attr("src");
				json.loc = loca;
				loc3[i]=json.loc;
				i++;
        }) ;

}

	function prova(array){
		var i=0;
		console.log("im in!");
		for(i=0;i<array.length;i++)
			console.log(array[i]);
	}
		//prova(titolo3);
		//gen(titolo1);
		genera1(titolo1,loc1,link1,titolo2,loc2,link2,titolo3,loc3,link3,giorno);
	
	fs.writeFile('output.json', JSON.stringify(editeditems, null, 4), function(err){
        console.log('File successfully written! - Check your project directory for the output.json file');
     })
       res.send(JSON.stringify(editeditems, null, 4))
	})	
})

// parameter middleware that will run before the next routes
app.param('link', function(req, res, next, link) {

    // check if the user with that name exists
    // do some validations
    // add -dude to the name
    var modified =link;

    // save name to the request
    req.link = modified;

    next();
});

// http://localhost:8080/api/users/chris
app.get('/scrape:link', function(req, res) {
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


	console.log(descry);
	request(req.link, gotHTML);
});

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