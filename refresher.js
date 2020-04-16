function script() {
	console.log('Refresher ready🥤🥤🥤. Press NUMPAD 5 to refresh CSS files');

	function refreshCSS() {
		const links = document.getElementsByTagName('link');

		console.log('Refreshing CSS...');
		for (let i = 0, len = links.length; i < len; i++) {
			let link = links[i];

			if (link.href.toLowerCase().indexOf('http') === -1)
				link.href += '?';	//Forget scripts out of your control
                }
		console.log('CSS page refreshed🥤🥤.');
                return;
        };
	
	window.addEventListener('keyup', function(e) {
		if (e.keyCode === 101 || e.keyCode === 53) {
			refreshCSS();
		}
		return;
	});
}
document.addEventListener('DOMContentLoaded', script);
