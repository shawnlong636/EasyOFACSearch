<script lang="ts">
	import { people } from '../../lib/stores/people';
	import type Person from '../../lib/models/person';

	let inputText = '';
	let rowDelimiter = '\n';
	let colDelimiter = ',';

	const clear = () => {
		inputText = '';
	};

	const submit = () => {
		let rows: string[] = inputText.split(rowDelimiter);

		let peopleArray: Person[] = rows.map((row) => {
			let personArray: string[] = row.split(colDelimiter);

			return {
				firstName: personArray.at(0) ?? '',
				middleName: personArray.at(1) ?? '',
				lastName: personArray.at(2) ?? ''
			};
		});

		people.set(peopleArray);
	};
</script>

<form class="mt-10 mx-10 bg-gray-200 p-5 rounded grid gap-y-5">
	<div id="grid gap-y-1 page-title-and-desc">
		<h1 class="text-3xl font-semibold">Search Names</h1>
		<p class="text-gray-800">
			To start searching names, simply enter them below. Feel free to adjust the options as needed.
		</p>
	</div>
	<textarea
		bind:value={inputText}
		name="inputText"
		required
		class="min-h-[33vh] p-3 text-gray-600"
		placeholder="Paste Names Here"
	/>
	<div class="grid grid-flow-col justify-start gap-x-3" id="button-row">
		<button
			on:click={submit}
			class="rounded bg-sky-500 shadow-sm px-3 py-1 ease-in-out text-sm font-bold text-white uppercase transition duration-150 hover:bg-sky-400 hover:shadow-md active:bg-sky-600 active:shadow"
		>
			submit
		</button>
		<button
			on:click={clear}
			class="border-slate-400 uppercase border rounded text-sm font-bold px-4 py-1 text-slate-900 shadow-sm hover:bg-gray-100 active:bg-slate-200 transition duration-150 ease-in-out"
		>
			clear
		</button>
	</div>
	{#each $people as person}
		<p>{person.firstName} {person.middleName} {person.lastName}</p>
	{/each}
</form>
