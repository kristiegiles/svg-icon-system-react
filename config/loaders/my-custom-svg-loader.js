const cheerio = require('cheerio')
module.exports = function(source){
	const $ = cheerio.load(source)
	return $('svg').html()
}
