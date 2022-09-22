<script lang="ts">
	import Counter from '$lib/Counter.svelte';
</script>

<svelte:head>
	<title>OmniAccept</title>
	<meta name="description" content="OmniAccept Payment Gateway" />
</svelte:head>

<section>
	<!-- <h1>
		<span class="welcome">
			<picture>
				<source srcset="svelte-welcome.webp" type="image/webp" />
				<img src="svelte-welcome.png" alt="Welcome" />
			</picture>
		</span>

		to your new<br />SvelteKit app
	</h1> -->

	<h2>
		try editing <strong>src/routes/+page.svelte</strong>
	</h2>

	<div class="mb-8">
		<select
		  data-choose-theme
		  class="select select-bordered select-primary text-white w-full max-w-3xl text-xl">
		  <option disabled="disabled" selected="selected">Choose a theme</option>
		  <option value="acid">Acid</option>
		  <option value="aqua">Aqua</option>
		  <option value="autumn">Autumn</option>
		  <option value="black">Black</option>
		  <option value="bumblebee">Bumblebee</option>
		  <option value="business">Business</option>
		  <option value="cmyk">CMYK</option>
		  <option value="coffee">Coffee</option>
		  <option value="corporate">Corporate</option>
		  <option value="cupcake">Cupcake</option>
		  <option value="cyberpunk">Cyberpunk</option>
		  <option value="dark">Dark</option>
		  <option value="dracula">Dracula</option>
		  <option value="emerald">Emerald</option>
		  <option value="fantasy">Fantasy</option>
		  <option value="forest">Forest</option>
		  <option value="garden">Garden</option>
		  <option value="halloween">Halloween</option>
		  <option value="lemonade">Lemonade</option>
		  <option value="light">Light</option>
		  <option value="lofi">Lofi</option>
		  <option value="luxury">Luxury</option>
		  <option value="night">Night</option>
		  <option value="pastel">Pastel</option>
		  <option value="retro">Retro</option>
		  <option value="synthwave">Synthwave</option>
		  <option value="valentine">Valentine</option>
		  <option value="winter">Winter</option>
		  <option value="wireframe">Wireframe</option>
		</select>
	  </div>
	  <p>Here's some DaisyUI buttons, yummy!</p>

		<button class="btn">neutral</button>
		<button class="btn btn-primary">primary</button>
		<button class="btn btn-secondary">secondary</button>
		<button class="btn btn-accent">accent</button>
		<button class="btn btn-ghost">ghost</button>
		<button class="btn btn-link">link</button>
	<Counter />
</section>

<style>
	section {
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		flex: 1;
	}

	h1 {
		width: 100%;
	}

	.welcome {
		display: block;
		position: relative;
		width: 100%;
		height: 0;
		padding: 0 0 calc(100% * 495 / 2048) 0;
	}

	.welcome img {
		position: absolute;
		width: 100%;
		height: 100%;
		top: 0;
		display: block;
	}
</style>
