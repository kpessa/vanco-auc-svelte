<script lang='ts'>
	import { pt } from "../../store/stores.js"
</script>
<style>
	#service {
		width:10ch;
	}
	#room {
		width: 10ch;
	}

	:global(form) {
		padding:10px; 
		margin:10px;
	}	
</style>

<form>
	<h2>
		Identifiers
	</h2>
	<label for="MRN">MRN:</label>
	<input id="MRN" type="text" bind:value={$pt.id.mrn}>	
	
	<label for="last">Last Name:</label>
	<input id="last" type="text" bind:value={$pt.id.last} />
	
	<label for="first">First Name:</label>
	<input id="first" type="text" bind:value={$pt.id.first} />
	
	<div>
		<div style="display:inline-block;">
			<label for="service">Service:</label>
			<input id="service" type="text" list="services" bind:value={$pt.id.service} />
			<datalist id="services">
				<option value="ERH">  
				<option value="2NS1">
			</datalist>
		</div>
		<div style="display:inline-block;">
			<label for="room">Room:</label>
			<input id="room" type="text" bind:value={$pt.id.room} />		
		</div>
	</div>
</form>