<script lang="ts">
	import { pt } from '../../store/stores.js';
</script>

<div class="demographics-labels">
	{#if $pt.diag.provider}<p>Provider:</p>{/if}
	{#if $pt.diag.indication}<p>Indication:</p>{/if}
</div>
<div class="demographics-values">
	{#if $pt.diag.provider}<p>{$pt.diag.provider}</p>{/if}
	{#if $pt.diag.indication}<p>{$pt.diag.indication}</p>{/if}
</div>
