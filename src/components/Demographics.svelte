<script lang="ts">
	import { pt } from '../store/stores.js';
	import Container from './ui/Container.svelte';
	import Column1 from './Demographics/Column1.svelte';
	import Column2 from './Demographics/Column2.svelte';
	import Column3 from './Demographics/Column3.svelte';
</script>

<div class="demographics-bg" style="">
	<div class="demographics container">
		<Column1 />
		<Column2 />
		<Column3 />
	</div>
</div>

<style global>
	.demographics-bg {
		background-color: lightgrey;
		box-sizing: border-box;
		border: 2px solid darkgrey;
		position: sticky;
		min-height: 130px;
		top: 0;
	}

	.demographics {
		--lineheight: 1rem;
		padding: 5px;
		display: flex;
		flex-wrap: wrap;
	}

	.demographics p {
		margin: 2px;
	}

	.demographics > * {
		margin-bottom: 10px;
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
