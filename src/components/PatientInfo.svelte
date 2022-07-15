<script lang="ts">
	import Container from './ui/Container.svelte';
	import Identifiers from './PatientInfo/Identifiers.svelte';
	import Characteristics from './PatientInfo/Characteristics.svelte';
	import Diagnoses from './PatientInfo/Diagnoses.svelte';
</script>

<h1>Patient Info</h1>
<Container>
	<div>
		<Identifiers />
		<Characteristics />
		<Diagnoses />
	</div>
</Container>

<style>
	div {
		display: flex;
		flex-wrap: wrap;
	}

	:global(h1) {
		font-size: 12px;
		text-align: center;
		background-color: #676d83;
		color: white;
		text-shadow: 2px 2px 8px black, 2px 2px 8px black;
		font-weight: 800;
		letter-spacing: 7px;
		text-transform: uppercase;
		padding: 5px 10px;
		border: 2px solid black;
		box-shadow: inset 0 0 4px #000000;
	}
</style>
