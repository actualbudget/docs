// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const themes = require('prism-react-renderer').themes;
const lightCodeTheme = themes.github;
const darkCodeTheme = themes.dracula;

const defaultOptions = {
  editUrl: 'https://github.com/actualbudget/docs/tree/master/',
  beforeDefaultRemarkPlugins: [
    require('./src/remark/rewrite-images'),
    require('./src/remark/mentions'),
  ],
};

/** @type {import('@docusaurus/types').Config} */
module.exports = {
  title: 'Actual Budget Documentation',
  tagline: 'Your finances - made simple',
  url: 'https://actualbudget.org/',
  baseUrl: '/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.ico',

  // Even if you don't use internalization, you can use this field to set useful
  // metadata like html lang. For example, if your site is Chinese, you may want
  // to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          routeBasePath: 'docs',
          sidebarPath: require.resolve('./docs-sidebar.js'),
          ...defaultOptions,
        },
        blog: {
          ...defaultOptions,
          editUrl: 'https://github.com/actualbudget/docs/edit/master/blog/',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      }),
    ],
  ],
  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      navbar: {
        logo: {
          alt: 'Actual Open Source',
          src: 'img/actual.png',
        },
        items: [
          {
            to: '/#features',
            // never render as active
            activeBaseRegex: '^$',
            label: 'Features',
            position: 'left',
          },
          {
            type: 'doc',
            docId: 'index',
            label: 'Docs',
            position: 'left',
          },
          {
            to: 'blog',
            label: 'Blog',
            position: 'left',
          },
          {
            to: '/contact',
            label: 'Contact',
            position: 'left',
          },
          {
            to: '/download',
            label: 'Download',
            position: 'left',
          },
          {
            href: 'https://opencollective.com/actual',
            label: 'Donate',
            position: 'left',
          },
          {
            href: 'https://discord.gg/8JfAXSgfRf',
            label: 'Discord',
            position: 'right',
          },
          {
            href: 'https://github.com/actualbudget/actual',
            label: 'GitHub',
            position: 'right',
          },
        ],
      },
      footer: {
        style: 'dark',
        links: [
          {
            label: 'Discord',
            href: 'https://discord.gg/8JfAXSgfRf',
          },
          {
            label: 'GitHub',
            href: 'https://github.com/actualbudget/actual',
          },
          {
            href: 'https://opencollective.com/actual',
            label: 'Donate',
          },
          {
            label: 'Website Source',
            href: 'https://github.com/actualbudget/docs',
          },
          {
            label: 'Privacy Policy',
            to: '/docs/privacy-policy',
          }
        ],
        copyright: `Copyright © ${new Date().getFullYear()} Actual Budget. Built with Docusaurus.`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
        additionalLanguages: ['nginx'],
      },
    }),
  plugins: [
    ['@docusaurus/plugin-ideal-image', { disableInDev: false }],
  ],
  themes: [
    [
      require.resolve("@easyops-cn/docusaurus-search-local"),
      {
        hashed: true,
        language: ['en'],
        ignoreFiles: ['docs/releases', /blog\/release.*/, /blog\/page.*/],
        searchResultLimits: 8,
      },
    ]
  ],
};
