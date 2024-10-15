// @ts-check
// `@type` JSDoc annotations allow editor autocompletion and type checking
// (when paired with `@ts-check`).
// There are various equivalent ways to declare your Docusaurus config.
// See: https://docusaurus.io/docs/api/docusaurus-config

import {themes as prismThemes} from 'prism-react-renderer';

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Notas de aprendizaje',
  tagline: 'Santiago Rodriguez Morales',
  // Set the production url of your site here
  url: 'https://SanRM.github.io',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/notas-de-aprendizaje/',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'SanRM', // Usually your GitHub org/user name.
  projectName: 'notas-de-aprendizaje', // Usually your repo name.
  deploymentBranch: 'gh-pages',
  favicon: 'img/favicon_notas_aprendizaje.ico',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  
  markdown: {
    mermaid: true
  },

  // Even if you don't use internationalization, you can use this field to set
  // useful metadata like html lang. For example, if your site is Chinese, you
  // may want to replace "en" with "zh-Hans".
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
          sidebarPath: './sidebars.js',
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl: function ({
            versionDocsDirPath,
            docPath,
          }) {
            return `https://github.com/SanRM/notas-de-aprendizaje/edit/main/${versionDocsDirPath}/${docPath}`;
          },
          showLastUpdateAuthor: true,
          showLastUpdateTime: true,
        },
        theme: {
          customCss: './src/css/custom.css',
        },
      }),
    ],
  ],
  plugins: [
    [
      require.resolve("@easyops-cn/docusaurus-search-local"),
      ({
        // ... Your options.
        // `hashed` is recommended as long-term-cache of index file is possible.
        hashed: true,
        // For Docs using Chinese, The `language` is recommended to set to:
        // ```
        language: ["en", "es"],
        // ```
      }),
    ],
  ],
  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      // Replace with your project's social card
      image: 'img/docusaurus-social-card.jpg',
      tableOfContents: {
        minHeadingLevel: 2,
        maxHeadingLevel: 6,
      },
      docs: {
        sidebar: {
          autoCollapseCategories: false,
          hideable: true,
        },
      },
      colorMode: {
        defaultMode: 'dark',
        respectPrefersColorScheme: true,
      },
      // announcementBar: {
      //   content: '⭐️ If you like Notas de aprendizaje, give it a star on <a target="_blank" rel="noopener noreferrer" href="a">GitHub</a>! ⭐️',
      //   backgroundColor: '#4a4a4a',
      //   textColor: '#fff',
      // },
      navbar: {
        title: 'Notas de aprendizaje',
        logo: {
          alt: 'My Site Logo',
          src: 'img/favicon_notas_aprendizaje.ico',
        },
        
      },
      footer: {
        logo: {
          alt: 'Facebook Open Source Logo',
          src: 'img/favicon_notas_aprendizaje.ico',
          href: 'https://github.com/SanRM/notas-de-aprendizaje',
          height: 35,
        },
        copyright: `Notas de aprendizaje - Santiago Rodriguez Morales - ${new Date().getFullYear()}`,
      },
      prism: {
        theme: prismThemes.jettwaveDark,
        darkTheme: prismThemes.vsDark,
        additionalLanguages: ['java', 'dart', 'python', 'bash'],
      },
    }),
};

export default config;
