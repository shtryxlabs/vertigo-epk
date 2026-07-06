// Minimal GoatCounter pixel loader for vertigorec.com.
// No cookies, no client-side storage of any kind — sends one anonymous
// image request per pageview. Endpoint docs: https://www.goatcounter.com/help/pixel
;(function() {
	'use strict'
	if (navigator.webdriver) return                 // headless browsers / bots
	if (navigator.doNotTrack === '1') return        // honour Do Not Track
	if (location.hostname === 'localhost' || location.protocol === 'file:') return

	var endpoint = 'https://vertigorec.goatcounter.com/count'
	var q = [
		'p=' + encodeURIComponent(location.pathname),
		't=' + encodeURIComponent(document.title),
		'r=' + encodeURIComponent(document.referrer),
		's=' + encodeURIComponent([window.screen.width, window.screen.height, window.devicePixelRatio || 1].join(',')),
		'rnd=' + Math.random().toString(36).slice(2, 10),  // cache buster only, not an identifier
	]
	var img = new Image(1, 1)
	img.src = endpoint + '?' + q.join('&')
})()
