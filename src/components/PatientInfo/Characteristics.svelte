<script lang='ts'>
	import { pt } from "../../store/stores.js";
	import Height from "./Characteristics/Height.svelte"
	import Weight from "./Characteristics/Weight.svelte"
</script>

<style>
	input {
		width: 8ch;
	}
</style>

<form style="padding:10px; margin:10px;">
	<h2>Characteristics</h2>
	
	<label for='age'>Age:</label>
	<input id='age' type='number' bind:value={$pt.chars.age}> <span>yrs</span>

	<Height />
	<Weight />

	<label for='gender'>Gender:</label>
	<select id='gender' bind:value={$pt.chars.gender}>
		<option value={undefined}></option>
		<option value='M'>Male</option>
		<option value='F'>Female</option>
	</select>
	
</form>

