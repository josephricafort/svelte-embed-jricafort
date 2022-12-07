import './app.css';
import App from './App.svelte';
import 'iframe-resizer/js/iframeResizer.contentWindow.js';

const app = new App({
	target: document.getElementById('app')
});

export default app;
