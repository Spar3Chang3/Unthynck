<script>
	import { onMount } from 'svelte';

	let uploadedFiles = $state([]);
	let parsedTracks = $state([]);

	let clipboard = $state();

	function extractDirectoryName(files) {
		if (files.length === 0) return null;
		const path = files[0].webkitRelativePath || files[0].relativePath;
		const parts = path.split('/');
		return parts[0].replace(/\s+/g, '');
	}

	async function parseMP3File(file, directoryName) {
		return new Promise((resolve, reject) => {
			const filename = file.name.replace('.mp3', '');
			const firstSpaceIndex = filename.indexOf(' ');
			const trackNumber = filename.slice(0, firstSpaceIndex);
			const trackName = filename.slice(firstSpaceIndex + 1);

			const audio = new Audio(URL.createObjectURL(file));

			audio.addEventListener('loadedmetadata', () => {
				resolve({
					trackNumber,
					trackName,
					trackDuration: Math.round(audio.duration),
					trackPath: `releases/${directoryName}/music/${file.name}`,
					artworkPath: `releases/${directoryName}/art/art.png`,
					trackDescription: ''
				});
				URL.revokeObjectURL(audio.src);
			});

			audio.addEventListener('error', (e) => {
				reject(new Error('Error loading audio file'));
			});
		});
	}

	async function handleDirectoryUpload(event) {
		const files = Array.from(event.target.files);
		uploadedFiles = files;
		const directoryName = extractDirectoryName(files);

		const mp3Files = files.filter(file => file.name.endsWith('.mp3'))
			.sort((a, b) => a.name.localeCompare(b.name));

		try {
			const tracks = await Promise.all(
				mp3Files.map(file => parseMP3File(file, directoryName))
			);
			parsedTracks = tracks;
		} catch (error) {
			console.error('Error parsing MP3 files', error);
		}
	}

	// Function to copy JSON to clipboard
	function copyToClipboard() {
		const jsonOutput = JSON.stringify(parsedTracks, null, 2);
		clipboard.writeText(jsonOutput)
			.then(() => alert('JSON copied to clipboard!'))
			.catch(err => console.error('Error copying JSON:', err));
	}

	onMount(() => {
		// Assign the device navigator.clipboard when the component is mounted
		if (typeof navigator !== 'undefined' && navigator.clipboard) {
			clipboard = navigator.clipboard;
		} else {
			console.warn('Clipboard API is not supported in this environment');
		}
	})
</script>

<main>
	<h1>Music Directory Uploader</h1>

	<div class="upload-section">
		<label>Upload Music Directory</label>
		<input
			type="file"
			webkitdirectory
			directory
			multiple
			on:change={handleDirectoryUpload}
		/>
	</div>

	{#if parsedTracks.length > 0}
		<div class="results-section">
			<h2>Parsed Tracks</h2>
			<pre>{JSON.stringify(parsedTracks, null, 2)}</pre>
			<button on:click={copyToClipboard}>Copy JSON to Clipboard</button>
		</div>
	{/if}

	{#if uploadedFiles.length > 0}
		<div class="results-section">
			<h2>Uploaded Files</h2>
			<ul>
				{#each uploadedFiles as file}
					<li>{file.webkitRelativePath || file.relativePath}</li>
				{/each}
			</ul>
		</div>
	{/if}
</main>

<style>
    :root {
        color-scheme: dark;
    }

    main {
        max-width: 800px;
        margin: 0 auto;
        padding: 20px;
        font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
        background-color: #121212;
        color: #e0e0e0;
    }

    h1 {
        text-align: center;
        color: #bb86fc;
        margin-bottom: 30px;
    }

    .upload-section {
        margin-bottom: 20px;
    }

    label {
        display: block;
        margin-bottom: 10px;
        font-weight: bold;
        color: #bb86fc;
    }

    input[type="file"] {
        width: 100%;
        padding: 10px;
        border: 1px solid #444;
        border-radius: 4px;
        background-color: #1e1e1e;
        color: #e0e0e0;
    }

    input[type="file"]:focus {
        outline: 1px solid #bb86fc;
    }

    .results-section {
        margin-top: 30px;
        background-color: #1e1e1e;
        padding: 20px;
        border-radius: 4px;
        border: 1px solid #333;
    }

    h2 {
        margin-bottom: 15px;
        color: #bb86fc;
    }

    pre {
        white-space: pre-wrap;
        word-wrap: break-word;
        background-color: #2c2c2c;
        color: #e0e0e0;
        padding: 15px;
        border-radius: 4px;
        border: 1px solid #444;
    }

    button {
        margin-top: 10px;
        padding: 10px 20px;
        background-color: #bb86fc;
        color: #121212;
        border: none;
        border-radius: 4px;
        cursor: pointer;
        font-size: 16px;
    }

    button:hover {
        background-color: #9c5ded;
    }
</style>
