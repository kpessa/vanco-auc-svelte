<script lang="ts">
	import { pt } from '../store/stores.js'
	import Column1 from './Demographics/Column1.svelte'
	import Column2 from './Demographics/Column2.svelte'
	
</script>

<style global>
	.demographics {
		--lineheight: 1rem;
		padding: 5px;
		background-color: lightgrey;
		height: 120px;
		display: flex;
		border: 2px solid darkgrey;
	}
	
	.demographics p {
		margin: 2px;
	}

	.demographics-labels {
		text-align: right;
		line-height: var(--lineheight);
		font-size: 10px;
		vertical-align: baseline;
		text-transform: uppercase;
		font-weight: 800;
	}

	.demographics-values {
		font-size: 12px;
		line-height: var(--lineheight);
	}
</style>

<div class="demographics">
	<Column1/>
	<Column2/>
</div>
