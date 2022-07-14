<script lang='ts'>
  import Identifiers from './PatientInfo/Identifiers.svelte'
	import Characteristics from './PatientInfo/Characteristics.svelte'	
	import Diagnoses from './PatientInfo/Diagnoses.svelte'
</script>

<style>
	div {
		display: flex;
		flex-wrap: wrap;
	}

	:global(h1) {
		
	}
</style>

<h1>Patient Info</h1>

<div>
	<Diagnoses />
	<Identifiers />
	<Characteristics />
</div>