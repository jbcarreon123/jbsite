export interface Bookmark {
    name: string,
    category: string,
    description: string,
    url?: string | BookmarkUrl[],
    recommended?: boolean,
    comingSoon?: boolean,
    warning?: string,
}

export interface BookmarkUrl {
    name: string,
    url: string,
}

export const bookmarks: Bookmark[] = [
    // Tutorials
    {
        name: 'W3Schools',
        category: 'Tutorials',
        description: 'A website containing HTML, CSS, and JavaScript tutorials.',
        url: 'https://www.w3schools.com/where_to_start.asp',
        recommended: true
    },
    {
        name: '<abbr title="(previously Mozilla Developer Network)">MDN Web Docs</abbr>',
        category: 'Tutorials',
        description: 'Another website that contains HTML, CSS, and JavaScript tutorials.',
        url: 'https://developer.mozilla.org/en-US/docs/MDN/Tutorials',
        recommended: true
    },
    {
        name: 'Codecademy',
        category: 'Tutorials',
        description: 'Website that contains interactive HTML, CSS, and JavaScript tutorials.',
        url: [
            {
                url: 'https://www.codecademy.com/learn/learn-html',
                name: 'HTML'
            },
            {
                url: 'https://www.codecademy.com/learn/learn-css',
                name: 'CSS'
            },
            {
                url: 'https://www.codecademy.com/learn/introduction-to-javascript',
                name: 'JavaScript'
            },
            
        ]
    },

    // References
    {
        name: '<abbr title="(previously Mozilla Developer Network)">MDN Web Docs</abbr>',
        category: 'References',
        description: 'The most comprehensive site for HTML, CSS, and JS references!',
        url: 'https://developer.mozilla.org/en-US/docs/Web#web_technology_references',
        recommended: true
    },
    {
        name: 'W3Schools',
        category: 'References',
        description: 'Another site for HTML, CSS, and JS references.',
        url: 'https://www.w3schools.com/references/index.php',
        recommended: true
    },
    {
        name: 'Can I use ___?',
        category: 'References',
        description: 'A site that tells you what\'s supported by the browsers you wanna support!',
        url: 'https://caniuse.com/',
        recommended: true
    },

    // Accessibility Tools
    {
        name: 'WAVE',
        category: 'Accessibility Tools',
        description: 'A website/extension that analyzes your website for common accessibility errors!',
        url: [
            {
                url: 'https://wave.webaim.org/',
                name: 'Site'
            }, 
            {
                url: 'https://wave.webaim.org/extension',
                name: 'Browser Extension'
            }
        ],
        recommended: true
    },
    {
        name: 'NVDA',
        category: 'Accessibility Tools',
        description: 'A screen reader for Windows that you can use to test your site',
        url: 'https://www.nvaccess.org/about-nvda/',
        recommended: true
    },
    {
        name: 'JAWS',
        category: 'Accessibility Tools',
        description: 'Another screen reader for Windows that you can use to test your site',
        warning: 'paid',
        url: 'https://www.freedomscientific.com/products/software/jaws/'
    },
    {
        name: 'Orca',
        category: 'Accessibility Tools',
        description: 'A screen reader for Linux that you can use to test your site',
        url: 'https://orca.gnome.org/'
    },

    // SSGs
    {
        name: '<abbr title="Eleventy">11ty</abbr>',
        category: 'Static Site Generators',
        description: 'A simpler static site generator, that turns your Markdown files to HTML!',
        url: 'https://www.11ty.dev/',
        recommended: true
    },
    {
        name: 'Svelte',
        category: 'Static Site Generators',
        description: 'A UI framework that uses a compiler instead of a Virtual DOM for rendering webpages. That\'s what I use here!',
        url: 'https://svelte.dev/',
        recommended: true
    },
    {
        name: 'Astro',
        category: 'Static Site Generators',
        description: 'Another UI framework that doesn\'t use JavaScript by default!',
        url: 'https://astro.build/'
    },

    // Web Hosts
    {
        name: 'Nekoweb',
        category: 'Web Hosts',
        description: 'The webhost that\'s for cats! (what I currently use)',
        url: 'https://nekoweb.org/',
        recommended: true
    },
    {
        name: 'Neocities',
        category: 'Web Hosts',
        description: 'Another static web host. Most popular among indie webs.',
        url: 'https://neocities.org/'
    },
    {
        name: 'GitHub Pages',
        category: 'Web Hosts',
        description: 'Another static web host. Uses GitHub for file management and version control.',
        url: 'https://pages.github.com/',
        recommended: true
    },
    {
        name: 'Codeberg Pages',
        category: 'Web Hosts',
        description: 'Another static web host. Uses Codeberg file management and version control.',
        url: 'https://codeberg.page/'
    },
    {
        name: 'Netlify',
        category: 'Web Hosts',
        description: 'A dynamic web host.',
        url: 'https://www.netlify.com/'
    },
    {
        name: 'Poyoweb',
        category: 'Web Hosts',
        description: 'A work in progress web host.',
        comingSoon: true
    },

    // Resources
    {
        name: 'Loveberry',
        category: 'Resources',
        description: 'A resource page that contains very useful stuff that you might wanna use!',
        url: 'https://loveberry.nekoweb.org/',
        recommended: true
    },
    {
        name: 'My Pillow Fort',
        category: 'Resources',
        description: 'Another resource page that contains very useful stuff',
        url: 'https://mypillowfort.net',
        recommended: true
    },

    // Nekoweb Deployment Scripts
    {
        name: 'deploy2nekoweb',
        category: 'Nekoweb Deployment Scripts',
        warning: 'specific to Nekoweb!',
        description: 'A GitHub Action that deploys your website to Nekoweb!',
        url: 'https://deploy.nekoweb.org/',
        recommended: true
    },
    {
        name: 'svelte-adapter-nekoweb',
        category: 'Nekoweb Deployment Scripts',
        warning: 'specific to Nekoweb!',
        description: 'A SvelteKit adapter that deploys your website to Nekoweb, by just running <code>bun run build</code>!',
        url: 'https://www.npmjs.com/package/svelte-adapter-nekoweb',
        recommended: true
    },
    {
        name: 'nekoweb-deploy',
        category: 'Nekoweb Deployment Scripts',
        warning: 'specific to Nekoweb!',
        description: 'Another GitHub Action that deploys your website to Nekoweb',
        url: 'https://github.com/mp-pinheiro/nekoweb-deploy'
    },

    // Widgets and Scripts
    {
        name: 'Ayano\'s Comment Widget',
        category: 'Widgets and Scripts',
        warning: '<a href="#neocities-scripts">note 1</a>',
        description: 'A comment widget that uses Google Forms and Google Sheets for submitting and retreving data',
        url: [
            {
                url: 'https://virtualobserver.moe/ayano/comment-widget',
                name: 'Link'
            },
            {
                url: 'https://layercake.nekoweb.org/writing/articles/admin',
                name: 'Layercake\'s Admin Addon'
            },
            {
                url: 'https://frills.dev/blog/231023-add-moderation-to-comment-widget/',
                name: 'Frill\'s Moderation Addon'
            },
            {
                url: '/utils/ayano-autoreload',
                name: 'JB\'s Auto Reload Addon'
            },
            
        ],
        recommended: true
    },
    {
        name: 'Status Cafe',
        category: 'Widgets and Scripts',
        description: 'Add your status to your site!',
        warning: 'requires an account, <a href="#neocities-scripts">note 1</a>',
        url: 'https://status.cafe/',
        recommended: true
    },
    {
        name: 'Nekoweb Stats',
        category: 'Widgets and Scripts',
        description: 'Add your site\'s stats to your site!',
        warning: 'specific to Nekoweb!',
        url: 'https://maxpixels.moe/resources/nekoweb-stats/',
        recommended: true
    },

    // Webring Scripts
    {
        name: 'pmoring',
        category: 'Webring Scripts',
        description: 'A super tiny webring script!',
        url: 'https://github.com/ThinLiquid/pmoring',
        recommended: true
    },
    {
        name: '<abbr title="June\'s Webring Script">webstring.js</abbr>',
        category: 'Webring Scripts',
        description: 'Another super tiny webring script!',
        url: 'https://juneish.neocities.org/written/resources/?page=webstring'
    },
    {
        name: 'Onionring',
        category: 'Webring Scripts',
        description: 'A popular webring script',
        url: 'https://garlic.garden/onionring/'
    },
    {
        name: 'jAPI Webring Redirect',
        category: 'Webring Scripts',
        description: '(not a webring script but worth a mention) A webring redirector, without involving any inline scripts',
        comingSoon: true
    },
    
]