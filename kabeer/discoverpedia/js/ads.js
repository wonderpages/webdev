function parseUrl(url) {
	var a = document.createElement('a');
	a.href = url;
	return {
		'protocol': a.protocol,
		'domain': a.host,
		'path': a.pathname,
		'query': a.search,
		'hash': a.hash
	};
}


var URL = parseUrl(window.location.href);
//__(URL);
var prod_id = "";
var mrp =0;
var price = 0;
var prod_img = "";
var track_stock = 1;
var enabled = 1;
var json_data = "";

switch( URL.domain ) {
	case 'www.espncricinfo.com':
		$('section.ad-container').text('');
		$('div.slot-1').text('');
		$('div.slot-2').text('');
	break;
}