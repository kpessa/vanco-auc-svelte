<script lang='ts'>
  import { pt } from '../../store/stores'
</script>

<form>
  <h2>Diagnosis</h2>

  <label for='provider'>Consulting Provider:</label>
  <input id='provider' bind:value={$pt.diag.provider}>

  <label for='diagnosis'>Diagnosis:</label>
  <input id='diagnosis' bind:value={$pt.diag.diagnosis} />
  
</form>

