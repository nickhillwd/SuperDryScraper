## Scrape Superdry Men's fashion new in section ##

[The site we are scraping](http://www.superdry.com/mens/new-in)

#### What we are doing:

This small app is using cheerio to scrape the men's new-in section of the superdry website. It will retrieve the title of each garment and the price. These pieces of information will be exported to the output.json file, as a formatted JSON object.

#### Before you begin:

1) NPM install - you will ned a few dependencies; please see package.json for all dependencies

2) Run localhost 5000

3) In your browser add /scrape to lacalhost:5000 and hit enter to begin scraping