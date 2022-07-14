import './app.css';
import App from './App.svelte';

const app = new App({
  target: document.getElementById('app'),
});

document.querySelectorAll('input').forEach((el) => {
  el.onclick = function (e) {
    el.select();
  };
});

export default app;
