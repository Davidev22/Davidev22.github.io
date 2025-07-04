export type Image = {
    src: string;
    alt?: string;
    caption?: string;
};

export type Link = {
    text: string;
    href: string;
};

export type Hero = {
    title?: string;
    text?: string;
    image?: Image;
    actions?: Link[];
};

export type Subscribe = {
    title?: string;
    text?: string;
    formUrl: string;
};

export type SiteConfig = {
    logo?: Image;
    title: string;
    subtitle?: string;
    description: string;
    image?: Image;
    headerNavLinks?: Link[];
    footerNavLinks?: Link[];
    socialLinks?: Link[];
    hero?: Hero;
    subscribe?: Subscribe;
    postsPerPage?: number;
    projectsPerPage?: number;
};

const siteConfig: SiteConfig = {
    title: 'David Henriquez',
    subtitle: "Here it's my personal blog",
    description: 'David Henriquez',
    image: {
        src: '/cover.png',
        alt: 'Projects'
    },
    headerNavLinks: [
        {
            text: 'Home',
            href: '/'
        },
        {
            text: 'Projects',
            href: '/projects'
        },
        /*{
            text: 'Github',
            href: 'https://github.com/Davidev22'
        }*/
    ],
    footerNavLinks: [
        {
            text: 'About',
            href: '/about'
        },
        {
            text: 'Contact',
            href: '/contact'
        },
        {
            text: 'Terms',
            href: '/terms'
        }
    ],
    socialLinks: [
        {
            text: 'Fiverr',
            href: 'https://es.fiverr.com/s/rED6mvj'
        }
    ],
    hero: {
        title: 'Welocome to my Portfolio',
        text: "I’m a web designer focused on creating visually appealing and functional experiences for all types of users. I work with WordPress and specialize in responsive design, UI/UX, and accessibility. My goal is to deliver custom solutions that not only look great but also perform efficiently and exceed client expectations.",
        image: {
            src: '/cover.png',
            alt: 'A person sitting at a desk in front of a computer'
        },
        actions: [
            {
                text: 'Get in Touch',
                href: '/contact'
            }
        ]
    },
    /*subscribe: {
        title: 'Subscribe to Dante Newsletter',
        text: 'One update per week. All the latest posts directly in your inbox.',
        formUrl: '#'
    },*/
    /*postsPerPage: 8,*/
    projectsPerPage: 8
};

export default siteConfig;
