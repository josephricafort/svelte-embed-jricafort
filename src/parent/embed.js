import 'iframe-resizer/js/iframeResizer';

(function () {
	const script = /** @type {HTMLScriptElement} */ (document.currentScript);
	const uid = 'iframer-' + Math.random().toString(36).slice(2, 9);
	const iframe = document.createElement('iframe');
	iframe.id = uid;
	iframe.width = '100%';
	iframe.style.border = 'none';
	iframe.src = new URL(script.getAttribute('data-src') || '/', script.src).href;

	iframe.addEventListener('load', () => {
		const { iFrameResize } = /** @type {*} */ (window);
		iFrameResize({ log: false }, '#' + iframe.id);
	});

	script.parentNode.insertBefore(iframe, script);
})();
