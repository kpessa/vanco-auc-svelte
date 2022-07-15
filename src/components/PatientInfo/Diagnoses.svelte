<script lang="ts">
	import { pt } from '../../store/stores';
	let diagnoses = 'Cellulitis, Skin and Soft Tissue Infection, SSTI, Osteomyelitis, Bacteremia, Meningitis, Sepsis'.split(', ');
</script>

<form>
	<h2>Diagnosis</h2>

	<label for="provider">Consulting Provider:</label>
	<input id="provider" bind:value={$pt.diag.provider} />

	<label for="diagnosis">Diagnosis:</label>
	<input id="diagnosis" bind:value={$pt.diag.indication} list="diagnoses" />
	<datalist id="diagnoses">
		{#each diagnoses as diagnosis}
			<option>{diagnosis}</option>
		{/each}
	</datalist>
</form>
