<script lang='ts'>
  import { pt } from "../../../store/stores.js"

  function handleKgChange() {
    $pt.chars.wt.inputLbs = Math.round($pt.chars.wt.inputKg * 2.2)
  }

  function handleLbsChange() {
    console.log("HELLO")
    $pt.chars.wt.inputKg = Math.round($pt.chars.wt.inputLbs / 2.2)
  }

</script>

<style>
  #inputKg, #inputLbs {
      width: 8ch;
  }
</style>

{#if $pt.chars.wt.inputUnits === 'kg' }
  <label for='inputKg'>Weight:</label>
  <input id='inputKg' type='number' bind:value={$pt.chars.wt.inputKg} on:input="{handleKgChange}">
{:else}
  <label for='inputLbs'>Weight:</label>
  <input id='inputLbs' type='number' bind:value={$pt.chars.wt.inputLbs} on:input="{handleLbsChange}">
{/if}

<select bind:value={$pt.chars.wt.inputUnits}>
  <option>kg</option>
  <option>lbs</option>
</select>