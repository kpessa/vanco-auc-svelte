<script lang="ts">
	import svelteLogo from './assets/svelte.svg';
	import Counter from './lib/Counter.svelte';

	import { pt } from './store/stores.js';

	import Demographics from './components/Demographics.svelte';
	import PatientInfo from './components/PatientInfo.svelte';
	import KidneyFunction from './components/KidneyFunction.svelte';

	import Container from './components/ui/Container.svelte';

	console.clear();
	console.log($pt);
</script>

<Demographics />
<PatientInfo />

<KidneyFunction />
<hr />
<Container>
	<pre>{JSON.stringify($pt, null, 2)}</pre>
</Container>
<hr />
