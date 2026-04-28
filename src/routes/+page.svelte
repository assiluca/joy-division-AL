<script lang="ts">
    import atmosphereImg from '$lib/assets/foto sito joy division/atmosphere.jpg';
    import bernardImg from '$lib/assets/foto sito joy division/3.jpg';
    import closerImg from '$lib/assets/foto sito joy division/closer.jpg';
    import closerVuotoImg from '$lib/assets/foto sito joy division/closer vuoto.jpg';
    import groupBandImg from '$lib/assets/foto sito joy division/gruppo joy division.jpg';
    import ianImg from '$lib/assets/foto sito joy division/4.jpg';
    import loveImg from '$lib/assets/foto sito joy division/Love-Will-Tear-Us-Apart.jpg';
    import peterImg from '$lib/assets/foto sito joy division/2.jpg';
    import stephenImg from '$lib/assets/foto sito joy division/1.jpg';
    import stillImg from '$lib/assets/foto sito joy division/still.png';
    import substanceImg from '$lib/assets/foto sito joy division/substance.png';
    import unknownPleasuresImg from '$lib/assets/foto sito joy division/unknown pleasures.jpg';

    type Filter = 'tutto' | 'album' | 'singoli' | 'raccolte';
    type Group = Exclude<Filter, 'tutto'>;

    type Release = {
        title: string;
        description: string;
        image: string;
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
                description: `Inciso nel 1979, Unknown Pleasures dei Joy Division è una pietra miliare del goth rock. Atmosfere alienanti, suoni ossessivi e la cupa voce del tormentato Ian Curtis consegnano alla storia capolavori assoluti come "Disorder", "She's Lost Control" e "Shadowplay".`,
                image: unknownPleasuresImg,
                textTop: 317
            },
            {
                title: 'Closer',
                description: `Uscito postumo nel 1980 dopo la tragica scomparsa di Ian Curtis, Closer è il testamento dei Joy Division e il vero vangelo del post-punk. Tra groove marziali, chitarre stridenti e testi claustrofobici, questo secondo e ultimo album trasforma il malessere in un capolavoro immortale.`,
                image: closerImg,
                textTop: 293
            }
        ],
        singoli: [
            {
                title: 'Love will tear us apart',
                description: `Uscito nell'aprile del 1980, Love Will Tear Us Apart è il tragico epitaffio di Ian Curtis e l'inno definitivo dei Joy Division. In questo capolavoro post-punk, il cantante trasforma l'angoscia della sua crisi matrimoniale in un brano struggente, consegnato per sempre alla storia della musica.`,
                image: loveImg,
                textTop: 317
            },
            {
                title: 'Atmosphere',
                description: `Pubblicato originariamente nel 1980, Atmosphere è uno dei brani più solenni ed elegiaci dei Joy Division. Ripubblicato dopo la tragica scomparsa di Ian Curtis in coppia con She's Lost Control, il pezzo abbandona l'urgenza ritmica per avvolgere l'ascoltatore in un paesaggio sonoro etereo e malinconico, trasformandosi in un vero e proprio requiem post-punk.`,
                image: atmosphereImg,
                textTop: 253
            }
        ],
        raccolte: [
            {
                title: 'Still',
                description: `Pubblicata postuma nel 1981, Still chiude definitivamente il sipario sulla breve e intensa parabola dei Joy Division. Questa preziosa raccolta unisce rarità in studio e la testimonianza viscerale del loro ultimo concerto a Birmingham – inclusa una primordiale versione di Ceremony – offrendo l'ultimo, struggente congedo di una band ormai entrata nella leggenda.`,
                image: stillImg,
                textTop: 285
            },
            {
                title: 'Substance',
                description: `Pubblicata nel 1988, Substance è la raccolta essenziale che completa il lascito discografico dei Joy Division. Il disco riunisce i celebri singoli rimasti fuori dagli album in studio – tra cui capolavori assoluti come Love Will Tear Us Apart, Transmission e Atmosphere – condensando in un'unica opera la definitiva e inestimabile eredità post-punk della band.`,
                image: substanceImg,
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
    let activeMemberIndex = $state<number | null>(null);
    let closerHovered = $state(false);
    let selectedListenTitle = $state<string | null>(null);
    let titleSelected = $state(false);

    const closerCaption =
        'Foto realizzata da Bernard Pierre Wolff e raffigurante la tomba della famiglia Appiani, sita presso il Cimitero monumentale di Staglieno di Genova.';

    const visibleGroups = $derived(activeFilter === 'tutto' ? groups : [activeFilter]);
    const activeMemberImage = $derived(
        activeMemberIndex === null ? groupBandImg : members[activeMemberIndex].image
    );
    const activeMemberAlt = $derived(
        activeMemberIndex === null ? 'Joy Division - foto di gruppo' : members[activeMemberIndex].name
    );

    const toggleMember = (index: number) => {
        activeMemberIndex = activeMemberIndex === index ? null : index;
    };
</script>

<main class="desktop" id="top">
    <section class="top-title">
        <h1>
            <a
                href="#top"
                class="title-link"
                class:selected={titleSelected}
                onclick={() => (titleSelected = !titleSelected)}
            >
                JOY DIVISION
            </a>
        </h1>
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
            <img class="member-image active" src={activeMemberImage} alt={activeMemberAlt} loading="lazy" />
        </div>

        <div class="band-line">
            <div class="band-line-top">
                <span>La band era costituita da</span>
                {#each members.slice(0, 2) as member, index}
                    <span class="member-token" class:active={activeMemberIndex === index}>
                        <button
                            type="button"
                            class:active={activeMemberIndex === index}
                            onclick={() => toggleMember(index)}
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
                    <span class="member-token" class:active={activeMemberIndex === index + 2}>
                        <button
                            type="button"
                            class:active={activeMemberIndex === index + 2}
                            onclick={() => toggleMember(index + 2)}
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
                    <article class="release-card">

                        <div
                            class="release-cover-wrap"
                            class:closer-hovered={release.title === 'Closer' && closerHovered}
                            role="img"
                            aria-label={release.title}
                            onmouseenter={() => release.title === 'Closer' && window.innerWidth > 1024 && (closerHovered = true)}
                            onmouseleave={() => release.title === 'Closer' && window.innerWidth > 1024 && (closerHovered = false)}
                            onmousedown={() => release.title === 'Closer' && window.innerWidth <= 1024 && (closerHovered = true)}
                            onmouseup={() => release.title === 'Closer' && window.innerWidth <= 1024 && (closerHovered = false)}
                            ontouchstart={() => release.title === 'Closer' && (closerHovered = true)}
                            ontouchend={() => release.title === 'Closer' && (closerHovered = false)}
                        >
                            {#if release.title === 'Closer' && closerHovered}
                                <p class="closer-caption">{closerCaption}</p>
                            {/if}
                            <img
                                src={release.title === 'Closer' && closerHovered ? closerVuotoImg : release.image}
                                alt={release.title}
                                loading="lazy"
                            />
                        </div>

                        <div class="copy-wrap">
                            <h2>{release.title}</h2>
                            <div
                                class="description-wrap"
                                style={typeof window !== 'undefined' && window.innerWidth > 1024 ? `top:${release.textTop}px` : undefined}
                            >
                                <p>{release.description}</p>
                                <button
                                    type="button"
                                    class="listen-btn"
                                    class:selected={selectedListenTitle === release.title}
                                    onclick={() => (selectedListenTitle = selectedListenTitle === release.title ? null : release.title)}
                                >
                                    <span class="listen-label">ASCOLTA</span>
                                    <span class="listen-arrow" aria-hidden="true">→</span>
                                </button>
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
    :global(*),
    :global(*::before),
    :global(*::after) {
        box-sizing: border-box;
    }

    :global(body) {
        background: var(--color-background-primary);
        color: var(--color-content-primary);
        font-family: 'Satoshi', 'Inter', sans-serif;
        margin: 0;
        padding: 0;
        overflow-x: hidden;
    }

    .desktop {
        margin: 0 auto;
        width: 100%;
        max-width: 1512px;
        overflow-x: hidden;
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

    .title-link {
        color: var(--color-link-default);
        text-decoration: none;
        transition: color 160ms ease;
    }

    .title-link:hover {
        color: var(--color-content-muted);
    }

    .title-link.selected {
        color: var(--color-link-selected);
    }

    .header {
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        gap: 64px;
        height: auto;
        padding: 160px 80px 32px;
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
        max-width: 100%;
    }

    .header-body {
        width: 1352px;
        max-width: 100%;
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
        max-width: 100%;
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
        max-width: 100%;
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
        max-width: 100%;
    }

    .band-line-top,
    .band-line-bottom {
        display: flex;
        flex-wrap: nowrap;
        gap: 8px;
        align-items: flex-start;
        width: 100%;
    }

    .band-line-top > span:first-child {
        flex: 0 0 auto;
    }

    .member-token {
        display: inline-flex;
        flex: 0 0 auto;
        align-items: baseline;
        gap: 0;
    }

    .member-comma {
        color: var(--color-content-primary);
        text-decoration: none;
        transition: color 150ms ease;
    }

    .band-line-bottom {
        padding-left: 0;
    }

    .band-line button {
        appearance: none;
        background: none;
        border: 0;
        color: var(--color-link-default);
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
        white-space: nowrap;
        transition: color 150ms ease;
    }

    .band-line button:hover {
        color: var(--color-content-muted);
    }

    .member-token:hover .member-comma {
        color: var(--color-content-muted);
    }

    .band-line button.active,
    .band-line button:hover {
        text-decoration-color: currentcolor;
    }

    .band-line button.active {
        color: var(--color-link-selected);
    }

    .member-token.active .member-comma {
        color: var(--color-link-selected);
    }

    .filters {
        display: flex;
        gap: 24px;
        height: auto;
        padding: 24px 24px;
    }

    .filters button {
        background: transparent;
        border: 0;
        border-radius: 999px;
        color: var(--color-link-default);
        cursor: pointer;
        font-family: 'Satoshi', 'Inter', sans-serif;
        font-size: 24px;
        font-weight: 400;
        height: 48px;
        padding: 8px 16px;
        text-align: center;
        transition: all 160ms ease;
    }

    .filters button:nth-child(1) { width: 85px; }
    .filters button:nth-child(2) { width: 100px; }
    .filters button:nth-child(3) { width: 103px; }
    .filters button:nth-child(4) { width: 123px; }

    .filters button.active {
        background: var(--color-link-selected);
        color: var(--color-background-primary);
    }

    .content {
        display: flex;
        flex-direction: column;
        gap: 160px;
        min-height: 0;
        padding: 64px 0;
    }

    .group-block {
        display: flex;
        flex-direction: column;
        gap: 160px;
        height: auto;
    }

    .release-card {
        display: flex;
        justify-content: space-between;
        align-items: flex-start;
        height: auto;
        width: 100%;
        padding: 0 24px;
    }

    .release-cover-wrap {
        height: auto;
        position: relative;
        width: 100%;
        max-width: 549px;
    }

    .release-card img {
        height: auto;
        object-fit: cover;
        width: 100%;
        max-width: 549px;
    }

    .closer-caption {
        position: absolute;
        top: 15.12%;
        left: 14.94%;
        right: 16.76%;
        font-size: 16px;
        line-height: 1.33;
        margin: 0;
        color: #111111 !important; /* Forza il nero */
        z-index: 10;
    }

    .copy-wrap {
        display: flex;
        flex-direction: column;
        height: auto;
        width: 100%;
        max-width: 664px;
        position: relative;
    }

    /* Desktop-only fixed sizing preserved for large screens */
    @media (min-width: 1025px) {
        .header {
            height: 949px;
            padding: 608px 80px 32px;
        }

        .filters {
            height: 112px;
            padding: 32px 80px;
        }

        .content {
            gap: 160px;
            min-height: 4222px;
        }

        .group-block {
            gap: 160px;
            height: 1258px;
        }

        .release-card {
            height: 549px;
            padding: 0 80px;
        }

        .release-cover-wrap {
            height: 549px;
            width: 549px;
        }

        .release-card img {
            height: 549px;
            width: 549px;
        }

        .copy-wrap {
            height: 549px;
            width: 664px;
        }
    }

    h2 {
        font-family: 'trajan-pro-3', 'Trajan Pro 3', 'Cormorant Garamond', serif;
        font-size: 56px;
        font-weight: 300;
        line-height: 1.2;
        margin: 0;
        text-align: left;
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
        color: var(--color-content-primary);
        font-size: 24px;
        font-style: normal;
        font-weight: 400;
        line-height: normal;
        margin: 0;
        padding-bottom: 24px;
    }

    .listen-btn {
        display: flex;
        align-items: center;
        gap: 10px;
        appearance: none;
        background: transparent;
        border: none;
        cursor: pointer;
        padding: 0;
        color: var(--color-link-default);
        font-family: inherit;
        font-size: 24px;
        font-weight: 500;
        line-height: 1.33;
        margin-top: auto;
        width: max-content;
        transition: opacity 160ms ease, color 160ms ease;
    }

    .listen-btn:hover {
        opacity: 0.7;
    }

    .listen-label {
        display: inline-block;
    }

    .listen-arrow {
        display: inline-block;
        opacity: 0;
        transform: translateX(-8px);
        transition:
            opacity 160ms ease,
            transform 160ms ease;
    }

    .listen-btn:hover .listen-arrow,
    .listen-btn.selected .listen-arrow {
        opacity: 1;
        transform: translateX(0);
    }

    .listen-btn.selected {
        color: var(--color-link-selected);
    }

    @media (hover: none), (pointer: coarse) {
        .listen-btn:hover {
            opacity: 1;
        }

        .listen-btn:hover .listen-arrow {
            opacity: 0;
            transform: translateX(-8px);
        }

        .listen-btn.selected .listen-arrow {
            opacity: 1;
            transform: translateX(0);
        }
    }

    .footer {
        display: flex;
        justify-content: center;
        align-items: center;
        height: 193px;
        padding: 72px 80px;
    }

    .footer p {
        font-size: 36px;
        line-height: 49px;
        margin: 0;
        text-align: center;
        color: var(--color-content-primary);
    }


    /* ─── Tablet ────────────────────────────────────────────── */
    @media (max-width: 1024px) {
        .desktop {
            width: 100%;
            max-width: 744px;
        }

        .top-title {
            height: 217px;
            padding: 80px 40px;
        }

        h1 {
            font-size: 80px;
        }

        .header {
            gap: 48px;
            height: auto;
            padding: 886px 40px 32px;
        }

        .header-lead,
        .header-body {
            font-size: 32px;
            line-height: normal;
        }

        .header-lead {
            width: 100%;
            max-width: 578px;
        }

        .header-body {
            width: 100%;
            max-width: 664px;
        }

        .band {
            padding: 16px 40px 64px;
        }

        .band-media {
            width: 100%;
            max-width: 661px;
            height: 424px;
        }

        .member-image {
            position: relative;
            width: 100%;
            max-width: 661px;
            height: 424px;
            object-fit: cover;
        }

        .band-line {
            font-size: 32px;
            width: 100%;
            max-width: 664px;
        }

        .band-line-top,
        .band-line-bottom {
            flex-wrap: wrap;
        }

        .band-line-bottom {
            flex-direction: column;
            align-items: flex-start;
            gap: 8px;
        }

        .member-token {
            flex: 0 1 auto;
        }

        .band-line button {
            white-space: normal;
            line-height: 1.1;
        }

        .filters {
            padding: 32px 40px;
            gap: 12px;
            flex-wrap: wrap;
            height: auto;
        }

        .content {
            gap: 80px;
            padding: 32px 0;
        }

        .group-block {
            gap: 80px;
            height: auto;
        }

        .release-card {
            display: flex;
            width: 744px;
            flex-direction: column;
            align-items: center;
            gap: 16px;
            padding: 0 40px;
            height: auto;
        }

        .copy-wrap {
            display: contents;
        }

        h2 {
            font-size: 56px;
            width: 100%;
            order: 0;
            text-align: center;
            margin: 0;
        }

        .release-cover-wrap {
            width: 100%;
            max-width: 549px;
            height: 549px;
            margin: 0 auto;
            order: 1;
        }

        .release-card img {
            width: 100%;
            height: 549px;
            object-fit: cover;
        }

        .description-wrap {
            position: static;
            width: 100%;
            max-width: 664px;
            order: 2;
            display: flex;
            flex-direction: column;
            justify-content: flex-start;
            align-items: flex-start;
            height: auto;
            gap: 24px; /* Incrementato lo spazio tra paragrafo e bottone */
            padding-top: 16px;
        }

        .description-wrap p {
            font-size: 24px; /* Ingrandito il testo per il tablet */
            line-height: normal;
            margin: 0;
            padding-bottom: 0;
        }

        .listen-btn {
            margin-top: 0;
        }

        .closer-caption {
            position: absolute;
            top: 15.12%;
            left: 14.94%;
            right: 16.76%;
            font-size: 16px;
            line-height: 1.33;
            margin: 0;
            color: #111111 !important;
            z-index: 10;
        }

        .footer {
            padding: 72px 40px;
            height: auto;
        }

        .footer p {
            font-size: 36px;
            line-height: 49px;
        }
    }


    /* ─── Mobile ────────────────────────────────────────────── */
    @media (max-width: 767px) {
        .desktop {
            width: 100%;
            max-width: 402px;
        }

        .top-title {
            height: 105px;
            padding: 16px 24px;
        }

        h1 {
            font-size: 40px;
        }

        .header {
            display: flex;
            height: 1255px;
            padding: 863px 24px 152px 24px;
            flex-direction: column;
            justify-content: center;
            align-items: flex-start;
            gap: 64px;
            flex-shrink: 0;
            align-self: stretch;
        }

        .header-lead,
        .header-body {
            font-size: 24px;
            line-height: normal;
            width: 100%;
            max-width: 354px;
        }

        .band {
            display: flex;
            height: 324px;
            padding: 0 24px;
            flex-direction: column;
            align-items: flex-start;
            gap: 16px;
            flex-shrink: 0;
            align-self: stretch;
        }

        .band-media {
            height: 200px;
            width: 100%;
            max-width: 354px;
        }

        .member-image {
            position: relative;
            width: 100%;
            max-width: 354px;
            height: 200px;
            object-fit: cover;
        }

        .band-line {
            font-size: 16px;
            gap: 8px; /* Uniformata la spaziatura tra i blocchi */
            width: 100%;
            max-width: 354px;
        }

        .band-line-top,
        .band-line-bottom {
            flex-wrap: wrap;
            gap: 8px; /* Uniformata la spaziatura tra righe */
        }

        .band-line-bottom {
            flex-direction: column;
            align-items: flex-start;
            gap: 8px; /* Uniformata la spaziatura tra gli elementi della colonna */
        }

        .member-token {
            flex: 0 1 auto;
        }

        .band-line button {
            white-space: normal;
            text-decoration-thickness: 2px;
        }

        .filters {
            display: flex;
            padding: 32px 24px;
            flex-direction: row; 
            flex-wrap: nowrap; 
            align-items: center;
            align-self: stretch;
            height: auto; 
            gap: 10px; /* Ridotta la distanza tra i bottoni della barra filtri */
            
            overflow-x: auto; 
            -webkit-overflow-scrolling: touch; 
            scrollbar-width: none; 
        }

        .filters::-webkit-scrollbar {
            display: none;
        }

        .filters button {
            font-size: 16px;
            height: auto;
            padding: 6px 14px; 
            width: auto;
            flex-shrink: 0; 
        }

        .filters button:nth-child(1),
        .filters button:nth-child(2),
        .filters button:nth-child(3),
        .filters button:nth-child(4) {
            width: max-content; 
        }       

        .content {
            gap: 56px;
            padding: 0 0 24px;
        }

        .group-block {
            gap: 56px;
        }

        .release-card {
            flex-direction: column;
            align-items: center;
            gap: 16px;
            padding: 0 24px;
            width: 100%;
            height: auto;
        }

        h2 {
            font-size: 32px;
            width: 100%;
            max-width: 354px;
            text-align: center;
            margin: 0;
            order: 0;
        }

        .release-cover-wrap {
            width: 100%;
            max-width: 354px;
            height: 354px;
            order: 1;
        }

        .release-card img {
            width: 100%;
            max-width: 354px;
            height: 354px;
            aspect-ratio: 1 / 1;
            object-fit: cover;
        }

        .description-wrap {
            width: 100%;
            max-width: 354px;
            order: 2;
            display: flex;
            flex-direction: column;
            justify-content: flex-start;
            height: auto; 
            gap: 16px;
            padding-top: 0;
        }

        .description-wrap p {
            font-size: 16px;
            line-height: 1.35;
            padding-bottom: 0;
        }

        .listen-btn {
            font-size: 16px;
        }

        .closer-caption {
            display: block; 
            position: absolute;
            top: 11.3%;
            left: 15.82%;
            right: 15.82%;
            font-size: 12px;
            line-height: 1.25;
            margin: 0;
            color: #111111 !important;
            z-index: 10;
        }

        .footer {
            padding: 40px 24px 56px;
            height: auto;
        }

        .footer p {
            font-size: 16px;
            line-height: normal;
        }
    }
</style>