var express = require('express');
var request = require('request');
var cheerio = require('cheerio');
var fs = require('fs');

var app = express();

var results = new Array;

app.get('/scrape', function(req, res){

  url = 'http://www.superdry.com/mens/new-in';

  request(url, function(error, response, body){
    if (!error && response.statusCode == 200){
      var $ = cheerio.load(body);
      //console.log(body);
      $('div.prices').each(function(i, element){
        var eachItem = $(this);
        var title = (eachItem).prev().text();
        var price = (eachItem).children().first().text();

        var data = {
          title: title.trim(),
          price: price
        }

        results.push(data);
      })
      console.log(results, "finished scraping: check output.json file");
      fs.writeFile('output.json', JSON.stringify(results, null, 1));
    }
    res.send(results);
  });

});

app.listen('5000');
console.log('listening on port: 5000 - hit /scrape to get results from new in @ mens superdry');