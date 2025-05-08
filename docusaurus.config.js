// @ts-check
import {themes as prismThemes} from 'prism-react-renderer';
import remarkMath from 'remark-math';
import rehypeKatex from 'rehype-katex';

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Điện Việt',
  tagline: 'Cộng đồng chia sẻ tài liệu ngành điện',
  favicon: 'img/logo-ankivn.ico',

  url: 'https://nguyenhaiha269.github.io',
  baseUrl: '/dien-viet/',
  trailingSlash: false,

  organizationName: 'nguyenhaiha269', // GitHub username
  projectName: 'dien-viet',           // Repo name
  deploymentBranch: 'gh-pages',

  onBrokenLinks: 'warn',
  onBrokenMarkdownLinks: 'warn',

  i18n: {
    defaultLocale: 'vi',
    locales: ['vi'],
    localeConfigs: {
      vi: {
        label: 'Tiếng Việt',
        direction: 'ltr',
      },
    },
  },

  markdown: {
    mermaid: true,
  },
  themes: ['@docusaurus/theme-mermaid'],

  plugins: [require.resolve('docusaurus-lunr-search')],

  presets: [
    [
      'classic',
      {
        docs: {
          sidebarPath: './sidebars.js',
          remarkPlugins: [remarkMath],
          rehypePlugins: [rehypeKatex],
          editUrl: 'https://github.com/nguyenhaiha269/dien-viet/tree/main/',
        },
        blog: {
          showReadingTime: true,
          readingTime: ({content, defaultReadingTime}) =>
            defaultReadingTime({content, options: {wordsPerMinute: 300}}),
          editUrl: 'https://github.com/nguyenhaiha269/dien-viet/tree/main/',
          onInlineTags: 'warn',
          onInlineAuthors: 'warn',
          onUntruncatedBlogPosts: 'warn',
          blogSidebarTitle: 'Tất cả bài viết',
          blogSidebarCount: 0,
        },
        theme: {
          customCss: './src/css/custom.css',
        },
      },
    ],
  ],

  themeConfig: {
    image: 'img/image-26.webp',

    mermaid: {
      theme: {light: 'neutral', dark: 'forest'},
    },
    metadata: [
      { name: 'og:title', content: 'Điện Việt - Chia sẻ tài liệu ngành điện' },
      { name: 'og:description', content: 'Tổng hợp và hướng dẫn học hiệu quả với Anki và tài liệu kỹ thuật điện' },
      { name: 'og:image', content: 'https://nguyenhaiha269.github.io/dien-viet/img/image-26.webp' },
      { name: 'og:url', content: 'https://nguyenhaiha269.github.io/dien-viet' },
      { name: 'og:type', content: 'website' },
      { name: 'twitter:card', content: 'summary_large_image' },
      { name: 'twitter:title', content: 'Điện Việt - Chia sẻ tài liệu ngành điện' },
      { name: 'twitter:description', content: 'Hướng dẫn học và tài liệu kỹ thuật điện, flashcards, và Anki' },
      { name: 'twitter:image', content: 'https://nguyenhaiha269.github.io/dien-viet/img/image-26.webp' },
    ],

    docs: {
      sidebar: {
        hideable: true,
        autoCollapseCategories: true,
      },
    },

    navbar: {
      title: 'Điện Việt',
      logo: {
        alt: 'Logo Điện Việt',
        src: 'img/logo-ankivn.ico',
      },
      items: [
        { to: '/blog', label: 'Blog', position: 'left' },
        {
          type: 'docSidebar',
          sidebarId: 'tutorialSidebar',
          position: 'left',
          label: 'Tài liệu',
        },
      ],
    },

    footer: {
      style: 'dark',
      links: [
        {
          title: 'Tài liệu',
          items: [
            {
              label: 'Giới thiệu',
              to: '/docs/intro',
            },
          ],
        },
        {
          title: 'Cộng đồng',
          items: [
            {
              label: 'Anki Việt Nam',
              href: 'https://www.facebook.com/groups/ankivocabulary',
            },
          ],
        },
      ],
      copyright: `© ${new Date().getFullYear()} Điện Việt. Built with Docusaurus.`,
    },

    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
    },
  },
};

export default config;
