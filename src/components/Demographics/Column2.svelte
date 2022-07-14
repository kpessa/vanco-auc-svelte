<script lang="ts">
	import { pt } from '../../store/stores.js'
</script>

<div  class="demographics-labels">
  {#if $pt.chars.wt.weightInLbs}<p>Wt:</p>{/if}
  {#if $pt.chars.tbw}<p>TBW:</p> {/if}
  {#if $pt.chars.ibw}<p>IBW:</p>{/if}
  {#if $pt.chars.abw}<p>AdjBW:</p>{/if}
  {#if $pt.chars.tbw_ibw}<p>TBW/IBW:</p>{/if}
  {#if $pt.chars.bmi}<p>BMI:</p>{/if}
  
</div>
<div class="demographics-values">
  {#if $pt.chars.wt.weightInLbs}<p>{$pt.chars.wt.weightInLbs} lbs</p>{/if}
  {#if $pt.chars.tbw}<p>{$pt.chars.tbw} kg</p> {/if}
  {#if $pt.chars.ibw}<p>{$pt.chars.ibw} kg</p>{/if}
  {#if $pt.chars.abw}<p>{$pt.chars.abw} kg</p>{/if}
  {#if $pt.chars.tbw_ibw}<p>{$pt.chars.tbw_ibw}</p>{/if}
  {#if $pt.chars.bmi}<p>{$pt.chars.bmi}</p>{/if}
</div>