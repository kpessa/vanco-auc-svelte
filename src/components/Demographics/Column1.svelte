<script lang="ts">
	import { pt } from '../../store/stores.js'
</script>

<div class='demographics-labels'>
		{#if $pt.id.mrn}<p>MRN:</p> {/if}
		{#if $pt.id.name}<p>Name:</p> {/if}
		{#if $pt.id.location}<p>Location:</p> {/if}
		{#if $pt.chars.ht.inputCm}<p>Height:</p>{/if}
		{#if $pt.chars.ageGender}<p>Age:</p>{/if}
		
	</div>
	<div class="demographics-values">
		{#if $pt.id.mrn}<p>{$pt.id.mrn}</p> {/if}
		{#if $pt.id.name}<p>{$pt.id.name}</p> {/if}
		{#if $pt.id.location}<p>{$pt.id.location}</p> {/if}
		{#if $pt.chars.ht.toString()}<p>{$pt.chars.ht.toString()}</p>{/if}
		{#if $pt.chars.ageGender}<p>{$pt.chars.ageGender}</p>{/if}
	</div>