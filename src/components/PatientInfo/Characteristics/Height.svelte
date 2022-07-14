<script lang='ts'>
  import { pt } from "../../../store/stores.js"

  function handleCmChange() {
    if(!$pt.chars.ht.inputCm) {
      $pt.chars.ht.inputCm = undefined
      $pt.chars.ht.inputFt = undefined
      $pt.chars.ht.inputIn = undefined
    } else {
      let inches = Math.round($pt.chars.ht.cms / 2.54)
      $pt.chars.ht.inputFt = Math.floor(inches / 12)
      $pt.chars.ht.inputIn = inches - $pt.chars.ht.inputFt * 12
    }
  }

  function handleFtInChange() {
    let ft = $pt.chars.ht.inputFt
    let inches = $pt.chars.ht.inputIn

    if(!ft) $pt.chars.ht.inputFt = undefined
    if(!inches) $pt.chars.ht.inputIn = undefined

    if(!ft && !inches) { 
      $pt.chars.ht.inputCm = undefined
    } else if(!ft) {
      $pt.chars.ht.inputCm = inches * 2.54
    } else if(!inches) {
      $pt.chars.ht.inputCm = ft * 12 * 2.54
    } else {
      $pt.chars.ht.inputCm = (ft * 12 + inches) * 2.54
    }
    if($pt.chars.ht.inputCm !== undefined)
      $pt.chars.ht.inputCm = Math.round($pt.chars.ht.inputCm)
  }

</script>

<style>
  #inputCm {
    width: 8ch;
  }
  #inputFt {
    width: 4ch;
  }
  #inputIn {
    width: 4ch;
  }
</style>

{#if $pt.chars.ht.inputUnits == 'cm' }
  <label for='inputCm'>Height:</label>
  <input id='inputCm' type='number' bind:value={$pt.chars.ht.inputCm} on:input="{handleCmChange}">
{:else}
  <label for='inputFt'>Height:</label>
  <input id='inputFt' type='number' bind:value={$pt.chars.ht.inputFt} on:input="{handleFtInChange}">
  <span>ft</span>
  <input id='inputIn' type='number' bind:value={$pt.chars.ht.inputIn} on:input="{handleFtInChange}">
{/if}

<select bind:value={$pt.chars.ht.inputUnits}>
  <option>cm</option>
  <option>in</option>
</select>