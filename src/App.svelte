<script lang="ts">
	import svelteLogo from './assets/svelte.svg'
  import Counter from './lib/Counter.svelte'
  
  import { pt } from './store/stores.js';
	
	import Demographics from './components/Demographics.svelte'
	import PatientInfo from './components/PatientInfo.svelte'

</script>

<style global>
	h2 {
		font-size: 18px;
	}
</style>


<Demographics />
<hr />

<PatientInfo />

<hr />
	<pre>{JSON.stringify($pt, null, 2)}</pre>
<hr />