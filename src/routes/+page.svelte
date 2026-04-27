<script lang="ts">
	import atmosphereImg from '$lib/assets/foto sito joy division/atmosphere.jpg';
	import bernardImg from '$lib/assets/foto sito joy division/2.jpg';
	import closerImg from '$lib/assets/foto sito joy division/closer.jpg';
	import closerGrossoImg from '$lib/assets/foto sito joy division/closer grosso.jpg';
	import ianImg from '$lib/assets/foto sito joy division/1.jpg';
	import loveImg from '$lib/assets/foto sito joy division/Love-Will-Tear-Us-Apart.jpg';
	import peterImg from '$lib/assets/foto sito joy division/3.jpg';
	import stephenImg from '$lib/assets/foto sito joy division/4.jpg';
	import stillImg from '$lib/assets/foto sito joy division/still.png';
	import substanceImg from '$lib/assets/foto sito joy division/substance.png';
	import unknownPleasuresImg from '$lib/assets/foto sito joy division/unknown pleasures.jpg';

	type Filter = 'tutto' | 'album' | 'singoli' | 'raccolte';
	type Group = Exclude<Filter, 'tutto'>;

	type Release = {
		title: string;
		description: string;
		image: string;
		spotify: string;
		textTop: number;
	};

	const labels: Record<Filter, string> = {
		tutto: 'Tutto',
		album: 'Album',
		singoli: 'Singoli',
		raccolte: 'Raccolte'
	};

	const data: Record<Group, Release[]> = {
		album: [
			{
				title: 'Unknown Pleasures',
				description:
					"Inciso nel 1979, Unknown Pleasures dei Joy Division è una pietra miliare del goth rock. Atmosfere alienanti, suoni ossessivi e la cupa voce del tormentato Ian Curtis consegnano alla storia capolavori assoluti come “Disorder”, “She’s Lost Control” e “Shadowplay”.",
				image: unknownPleasuresImg,
				spotify: 'https://open.spotify.com/search/unknown%20pleasures%20joy%20division',
				textTop: 317
			},
			{
				title: 'Closer',
				description:
					"Uscito postumo nel 1980 dopo la tragica scomparsa di Ian Curtis, Closer è il testamento dei Joy Division e il vero vangelo del post-punk. Tra groove marziali, chitarre stridenti e testi claustrofobici, questo secondo e ultimo album trasforma il malessere in un capolavoro immortale.",
				image: closerImg,
				spotify: 'https://open.spotify.com/search/closer%20joy%20division',
				textTop: 293
			}
		],
		singoli: [
			{
				title: 'Love will tear us apart',
				description:
					"Uscito nell'aprile del 1980, Love Will Tear Us Apart è il tragico epitaffio di Ian Curtis e l'inno definitivo dei Joy Division. In questo capolavoro post-punk, il cantante trasforma l'angoscia della sua crisi matrimoniale in un brano struggente, consegnato per sempre alla storia della musica.",
				image: loveImg,
				spotify: 'https://open.spotify.com/search/love%20will%20tear%20us%20apart%20joy%20division',
				textTop: 317
			},
			{
				title: 'Atmosphere',
				description:
					"Pubblicato originariamente nel 1980, Atmosphere è uno dei brani più solenni ed elegiaci dei Joy Division. Ripubblicato dopo la tragica scomparsa di Ian Curtis in coppia con She's Lost Control, il pezzo abbandona l'urgenza ritmica per avvolgere l'ascoltatore in un paesaggio sonoro etereo e malinconico, trasformandosi in un vero e proprio requiem post-punk.",
				image: atmosphereImg,
				spotify: 'https://open.spotify.com/search/atmosphere%20joy%20division',
				textTop: 253
			}
		],
		raccolte: [
			{
				title: 'Still',
				description:
					"Pubblicata postuma nel 1981, Still chiude definitivamente il sipario sulla breve e intensa parabola dei Joy Division. Questa preziosa raccolta unisce rarità in studio e la testimonianza viscerale del loro ultimo concerto a Birmingham – inclusa una primordiale versione di Ceremony – offrendo l'ultimo, struggente congedo di una band ormai entrata nella leggenda.",
				image: stillImg,
				spotify: 'https://open.spotify.com/search/still%20joy%20division',
				textTop: 285
			},
			{
				title: 'Substance',
				description:
					'Pubblicata nel 1988, Substance è la raccolta essenziale che completa il lascito discografico dei Joy Division. Il disco riunisce i celebri singoli rimasti fuori dagli album in studio – tra cui capolavori assoluti come Love Will Tear Us Apart, Transmission e Atmosphere – condensando in un\'unica opera la definitiva e inestimabile eredità post-punk della band.',
				image: substanceImg,
				spotify: 'https://open.spotify.com/search/substance%20joy%20division',
				textTop: 285
			}
		]
	};

	const groups: Group[] = ['album', 'singoli', 'raccolte'];

	const members = [
		{ name: 'Ian Curtis (voce),', image: ianImg },
		{
			name: 'Bernard Sumner (chitarra e tastiere),',
			image: bernardImg
		},
		{ name: 'Peter Hook (basso),', image: peterImg },
		{
			name: 'Stephen Morris (batteria e percussioni)',
			image: stephenImg
		}
	];

	let activeFilter = $state<Filter>('tutto');
	let activeMemberIndex = $state(0);
	let closerHovered = $state(false);

	const visibleGroups = $derived(activeFilter === 'tutto' ? groups : [activeFilter]);
</script>

<main class="desktop">
	<section class="top-title">
		<h1>JOY DIVISION</h1>
	</section>

	<section class="header">
		<p class="header-lead">
			Gruppo musicale post-punk britannico formatosi nel 1977 a Salford, nella contea della Grande
			Manchester
		</p>
		<p class="header-body">
			Scelto dallo stesso Curtis ispirandosi al romanzo del 1955 La casa delle bambole di Ka-Tzetnik
			135633, il nome designava, nei lager nazisti, le donne prigioniere destinate
			all'intrattenimento sessuale di soldati tedeschi e prigionieri collaborazionisti.
		</p>
	</section>

	<section class="band">
		<div class="band-media">
			{#each members as member, index}
				{#if index === 0}
					<img
						class:active={activeMemberIndex === index}
						class="member-image"
						src={member.image}
						alt={member.name}
						loading="lazy"
					/>
				{:else}
					<img
						class:active={activeMemberIndex === index}
						class="member-image"
						src={member.image}
						alt={member.name}
						loading="lazy"
					/>
				{/if}
			{/each}
		</div>

		<div class="band-line">
			<div class="band-line-top">
				<span>La band era costituita da</span>
				{#each members.slice(0, 2) as member, index}
					<span class="member-token">
						<button
							type="button"
							class:active={activeMemberIndex === index}
							onclick={() => (activeMemberIndex = index)}
						>
							{member.name.replace(/,\s*$/, '')}
						</button>
						{#if member.name.trim().endsWith(',')}
							<span class="member-comma">,</span>
						{/if}
					</span>
				{/each}
			</div>
			<div class="band-line-bottom">
				{#each members.slice(2) as member, index}
					<span class="member-token">
						<button
							type="button"
							class:active={activeMemberIndex === index + 2}
							onclick={() => (activeMemberIndex = index + 2)}
						>
							{member.name.replace(/,\s*$/, '')}
						</button>
						{#if member.name.trim().endsWith(',')}
							<span class="member-comma">,</span>
						{/if}
					</span>
				{/each}
			</div>
		</div>
	</section>

	<nav class="filters" aria-label="Filtri">
		{#each Object.entries(labels) as [key, label]}
			<button
				type="button"
				class:active={activeFilter === key}
				onclick={() => (activeFilter = key as Filter)}
			>
				{label}
			</button>
		{/each}
	</nav>

	<section class="content">
		{#each visibleGroups as group}
			<div class="group-block">
				{#each data[group] as release}
					<article
						class="release-card"
						onmouseenter={() => release.title === 'Closer' && (closerHovered = true)}
						onmouseleave={() => release.title === 'Closer' && (closerHovered = false)}
					>
						<img
							src={release.title === 'Closer' && closerHovered ? closerGrossoImg : release.image}
							alt={release.title}
							loading="lazy"
						/>
						<div class="copy-wrap">
							<h2>{release.title}</h2>
							<div class="description-wrap" style={`top:${release.textTop}px;`}>
								<p>{release.description}</p>
								<a href={release.spotify} target="_blank" rel="noreferrer">ASCOLTA →</a>
							</div>
						</div>
					</article>
				{/each}
			</div>
		{/each}
	</section>

	<footer class="footer">
		<p>by Assinnato Luca</p>
	</footer>
</main>

<style>
	:global(body) {
		background: rgb(250, 250, 250);
		color: rgb(17, 17, 17);
		font-family: 'Satoshi', 'Inter', sans-serif;
		margin: 0;
		min-width: 1512px;
	}

	.desktop {
		margin: 0 auto;
		width: 1512px;
	}

	.top-title {
		display: flex;
		height: 275px;
		align-items: center;
		gap: 24px;
		padding: 80px;
		align-self: stretch;
	}

	h1 {
		font-family: 'trajan-pro-3', 'Trajan Pro 3', 'Cormorant Garamond', serif;
		font-size: 96px;
		font-weight: 300;
		letter-spacing: 0.015em;
		line-height: 1;
		margin: 0;
	}

	.header {
		display: flex;
		flex-direction: column;
		align-items: flex-start;
		gap: 64px;
		height: 949px;
		padding: 608px 80px 32px;
	}

	.header-lead,
	.header-body {
		font-size: 36px;
		font-weight: 400;
		line-height: 1.36;
		margin: 0;
	}

	.header-lead {
		width: 893px;
	}

	.header-body {
		width: 1352px;
	}

	.band {
		display: flex;
		flex-direction: column;
		align-items: flex-start;
		gap: 32px;
		padding: 16px 80px 64px;
	}

	.band-media {
		height: 500px;
		position: relative;
		width: 1128px;
	}

	.member-image {
		height: 500px;
		left: 0;
		opacity: 0;
		position: absolute;
		top: 0;
		transform: scale(0.99);
		transition:
			filter 180ms ease,
			opacity 180ms ease,
			transform 180ms ease;
		width: 779px;
		object-fit: cover;
	}

	.member-image.active {
		filter: none;
		opacity: 1;
		transform: scale(1);
	}

	.band-line {
		display: flex;
		flex-direction: column;
		gap: 8px;
		font-size: 36px;
		line-height: normal;
		margin: 0;
		width: 1128px;
	}

	.band-line-top,
	.band-line-bottom {
		display: flex;
		flex-wrap: nowrap;
		gap: 8px;
		align-items: flex-start;
		width: 100%;
	}

	.band-line-top span {
		flex: 0 0 auto;
	}

	.member-token {
		display: inline-flex;
		align-items: baseline;
		gap: 0;
	}

	.member-comma {
		text-decoration: none;
	}

	.band-line-bottom {
		padding-left: 0;
	}

	.band-line button {
		appearance: none;
		background: none;
		border: 0;
		color: rgb(17, 17, 17);
		cursor: pointer;
		font: inherit;
		flex: 0 0 auto;
		margin: 0;
		padding: 0;
		text-decoration-line: underline;
		text-decoration-thickness: 3px;
		text-underline-offset: 0.22em;
		text-decoration-skip-ink: auto;
		text-decoration-color: currentcolor;
	}

	.band-line button.active,
	.band-line button:hover {
		text-decoration-color: currentcolor;
	}

	.filters {
		display: flex;
		gap: 24px;
		height: 112px;
		padding: 32px 80px;
	}

	.filters button {
		background: transparent;
		border: 0;
		border-radius: 999px;
		color: rgb(17, 17, 17);
		cursor: pointer;
		font-family: 'Satoshi', 'Inter', sans-serif;
		font-size: 24px;
		font-weight: 400;
		height: 48px;
		padding: 8px 16px;
		text-align: center;
		transition: all 160ms ease;
	}

	.filters button:nth-child(1) {
		width: 85px;
	}

	.filters button:nth-child(2) {
		width: 100px;
	}

	.filters button:nth-child(3) {
		width: 103px;
	}

	.filters button:nth-child(4) {
		width: 123px;
	}

	.filters button.active {
		background: rgb(22, 128, 19);
		color: rgb(250, 250, 250);
	}

	.content {
		display: flex;
		flex-direction: column;
		gap: 160px;
		min-height: 4222px;
		padding: 64px 0;
	}

	.group-block {
		display: flex;
		flex-direction: column;
		gap: 160px;
		height: 1258px;
	}

	.release-card {
		display: flex;
		justify-content: space-between;
		align-items: flex-start;
		height: 549px;
		width: 1512px;
		padding: 0 80px;
	}

	.release-card img {
		height: 549px;
		object-fit: cover;
		width: 549px;
		transition: transform 180ms ease, opacity 180ms ease;
	}

	.release-card:hover img {
		transform: scale(1.01);
	}

	.copy-wrap {
		display: flex;
		flex-direction: column;
		height: 549px;
		width: 664px;
		position: relative;
	}

	h2 {
		font-family: 'trajan-pro-3', 'Trajan Pro 3', 'Cormorant Garamond', serif;
		font-size: 56px;
		font-weight: 300;
		line-height: 1.2;
		margin: 0;
	}

	.description-wrap {
		bottom: 0;
		display: flex;
		flex-direction: column;
		gap: 0;
		position: absolute;
		right: 0;
		width: 664px;
	}

	.description-wrap p {
		font-size: 24px;
		line-height: 1.33;
		margin: 0;
	}

	.description-wrap a {
		color: rgb(17, 17, 17);
		font-size: 24px;
		font-weight: 500;
		line-height: 1.33;
		margin-top: auto;
		text-decoration: none;
		width: max-content;
		transition: opacity 160ms ease;
	}

	.description-wrap a:hover {
		opacity: 0.7;
	}

	.footer {
		height: 193px;
		padding: 72px 80px;
	}

	.footer p {
		font-size: 36px;
		line-height: 49px;
		margin: 0;
	}
</style>
