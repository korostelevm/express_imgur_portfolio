var request = require('request');
var cheerio = require('cheerio');


var albums = [];

request('http://korostelevm.imgur.com', function (error, response, body) {
  if (!error && response.statusCode == 200) {
    //console.log(body) // Print the google web page.
    $ = cheerio.load(body);
   $('#items').children('.album').each(function(i, elem) {
      albums[i] = {albumTitle: $(this).attr('data-title'),
                  albumCover: "imgur.com/"+$(this).attr('data-cover'),
                  albumDescription: $(this).attr('data-description'),
                  albumMetaData: $(this).children('.metadata').text().split('\n                                ')};
          
          
      
       //console.log($(this).attr('data-title'));
    });
      
      
      	console.log(albums);
  }});