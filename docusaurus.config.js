// @ts-check
// `@type` JSDoc annotations allow editor autocompletion and type checking
// (when paired with `@ts-check`).
// There are various equivalent ways to declare your Docusaurus config.
// See: https://docusaurus.io/docs/api/docusaurus-config

import {themes as prismThemes} from 'prism-react-renderer';
import remarkMath from 'remark-math';
import rehypeKatex from 'rehype-katex';

// This runs in Node.js - Don't use client-side code here (browser APIs, JSX...)

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Anki Việt Nam',
  tagline: 'Cộng đồng Anki Việt Nam',
  favicon: 'img/logo-ankivn.ico',

  // Set the production url of your site here
  url: 'https://ankivn.com',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/',
  trailingSlash: false,

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'lehoangphuc747',  // Tên GitHub của bạn
  projectName: 'anki-viet-nam',        // Tên repository của bạn
  deploymentBranch: 'gh-pages',        // Nhánh deploy
  onBrokenLinks: 'warn',
  onBrokenMarkdownLinks: 'warn',

  // Even if you don't use internationalization, you can use this field to set
  // useful metadata like html lang. For example, if your site is Chinese, you
  // may want to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'vi', // Đặt ngôn ngữ mặc định là tiếng Việt
    locales: ['vi'],     // Chỉ hỗ trợ tiếng Việt
    localeConfigs: {
      vi: {
        label: 'Tiếng Việt',
        direction: 'ltr', // Hướng văn bản từ trái sang phải
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
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: './sidebars.js',
          remarkPlugins: [remarkMath],
          rehypePlugins: [rehypeKatex],
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            'https://github.com/lehoangphuc747/anki-viet-nam/tree/main/',
        },
        blog: {
          showReadingTime: true, // When set to false, the "x min read" won't be shown
          readingTime: ({content, frontMatter, defaultReadingTime}) =>
            defaultReadingTime({content, options: {wordsPerMinute: 300}}),
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            'https://github.com/lehoangphuc747/anki-viet-nam/tree/main/',
          // Useful options to enforce blogging best practices
          onInlineTags: 'warn',
          onInlineAuthors: 'warn',
          onUntruncatedBlogPosts: 'warn',
          blogSidebarTitle: 'All posts',
          blogSidebarCount: 0,
        },
        theme: {
          customCss: './src/css/custom.css',
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({

      // Replace with your project's social card
      image: 'img/image-26.webp',
      
      mermaid: {
        theme: {light: 'neutral', dark: 'forest'}, // Các them khác xem tại đây: https://mermaid.js.org/config/theming.html
      },
      metadata: [
        { name: 'og:title', content: 'Anki Việt Nam - Cộng đồng Anki Việt Nam' },
        { name: 'og:description', content: 'Hướng dẫn sử dụng Anki và chia sẻ bộ thẻ miễn phí.' },
        { name: 'og:image', content: 'https://ankivn.com/img/image-26.webp' },
        { name: 'og:url', content: 'https://ankivn.com' },
        { name: 'og:type', content: 'website' },
        { name: 'twitter:card', content: 'summary_large_image' },
        { name: 'twitter:title', content: 'Anki Việt Nam - Cộng đồng Anki Việt Nam' },
        { name: 'twitter:description', content: 'Hướng dẫn sử dụng Anki và chia sẻ bộ thẻ miễn phí.' },
        { name: 'twitter:image', content: 'https://ankivn.com/img/image-26.webp' },
      ],

      // Cho phép thu gọn/mở rộng Sidebar trong giao diện tài liệu: https://docusaurus.io/docs/sidebar#auto-collapse-sidebar-categories
      docs: {
        sidebar: {
          hideable: true,
          autoCollapseCategories: true,
        },
      },

      navbar: {
        title: 'Anki Việt Nam',
        logo: {
          alt: 'Anki Việt Nam Logo',
          src: 'img/logo-ankivn.ico',
        },
        items: [
          { to: '/phuc-lee', label: 'Về tui', position: 'left' },
          {
            type: 'docSidebar',
            sidebarId: 'tutorialSidebar',
            position: 'left',
            label: 'Hướng dẫn',
          },
          { to: '/blog', label: 'Tất cả bộ thẻ', position: 'left' },
          {
            type: 'dropdown',
            label: 'Bộ thẻ (Deck)',
            position: 'left',
            to: '/blog/tags/deck',
            items: [
              { label: 'Ngoại ngữ - Tiếng Anh', to: '/blog/tags/english' },
              { label: 'Ngoại ngữ - Tiếng Trung', to: '/blog/tags/chinese' },
              { label: 'Ngoại ngữ - Tiếng Nhật', to: '/blog/tags/japanese' },
              { label: 'Ngoại ngữ - Tiếng Hàn', to: '/blog/tags/korean' },
              { label: 'Ngoại ngữ - Tiếng Pháp', to: '/blog/tags/france' },
              { label: 'Y Dược', to: '/blog/tags/medical' },
              { label: 'THPT', to: '/blog/tags/thpt' },
              { label: 'THCS', to: '/blog/tags/thcs' },
              { label: 'Khác', to: '/blog/tags/khac' },
            ],
          },
        ],
      },
      

      footer: {
        style: 'dark',
        links: [
          {
            title: 'Docs',
            items: [
              {
                label: 'Tutorial',
                to: '/docs/intro',
              },
            ],
          },
          {
            title: 'Community',
            items: [
              {
                label: 'Anki Việt Nam',
                href: 'https://www.facebook.com/groups/ankivocabulary',
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} Awesome Docusaurus, Inc. Built with Docusaurus.`,
      },
      prism: {
        theme: prismThemes.github,
        darkTheme: prismThemes.dracula,
      },
    }),
};

export default config;