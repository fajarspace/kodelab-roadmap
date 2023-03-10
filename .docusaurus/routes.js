import React from 'react';
import ComponentCreator from '@docusaurus/ComponentCreator';

export default [
  {
    path: '/blog',
    component: ComponentCreator('/blog', '977'),
    exact: true
  },
  {
    path: '/blog/archive',
    component: ComponentCreator('/blog/archive', 'ec8'),
    exact: true
  },
  {
    path: '/blog/first-blog-post',
    component: ComponentCreator('/blog/first-blog-post', 'b34'),
    exact: true
  },
  {
    path: '/blog/long-blog-post',
    component: ComponentCreator('/blog/long-blog-post', 'ca1'),
    exact: true
  },
  {
    path: '/blog/mdx-blog-post',
    component: ComponentCreator('/blog/mdx-blog-post', '0e8'),
    exact: true
  },
  {
    path: '/blog/tags',
    component: ComponentCreator('/blog/tags', '5b9'),
    exact: true
  },
  {
    path: '/blog/tags/docusaurus',
    component: ComponentCreator('/blog/tags/docusaurus', 'd21'),
    exact: true
  },
  {
    path: '/blog/tags/facebook',
    component: ComponentCreator('/blog/tags/facebook', '7cb'),
    exact: true
  },
  {
    path: '/blog/tags/hello',
    component: ComponentCreator('/blog/tags/hello', 'b9d'),
    exact: true
  },
  {
    path: '/blog/tags/hola',
    component: ComponentCreator('/blog/tags/hola', '964'),
    exact: true
  },
  {
    path: '/blog/welcome',
    component: ComponentCreator('/blog/welcome', 'be8'),
    exact: true
  },
  {
    path: '/markdown-page',
    component: ComponentCreator('/markdown-page', 'db4'),
    exact: true
  },
  {
    path: '/roadmap/',
    component: ComponentCreator('/roadmap/', 'c4d'),
    exact: true
  },
  {
    path: '/roadmap/frontend',
    component: ComponentCreator('/roadmap/frontend', 'd91'),
    exact: true
  },
  {
    path: '/search',
    component: ComponentCreator('/search', '0b8'),
    exact: true
  },
  {
    path: '/video/',
    component: ComponentCreator('/video/', '854'),
    exact: true
  },
  {
    path: '/docs',
    component: ComponentCreator('/docs', '4d9'),
    routes: [
      {
        path: '/docs/category/belajar-c',
        component: ComponentCreator('/docs/category/belajar-c', '376'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/category/belajar-html',
        component: ComponentCreator('/docs/category/belajar-html', 'd0e'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/category/tutorial---basics',
        component: ComponentCreator('/docs/category/tutorial---basics', 'd44'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/category/tutorial---extras',
        component: ComponentCreator('/docs/category/tutorial---extras', 'f09'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/cpp/cara-kerja-cpp',
        component: ComponentCreator('/docs/cpp/cara-kerja-cpp', '610'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/cpp/deklarasi-cin',
        component: ComponentCreator('/docs/cpp/deklarasi-cin', '114'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/cpp/perkenalan',
        component: ComponentCreator('/docs/cpp/perkenalan', 'dc3'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/cpp/printing-pada-console',
        component: ComponentCreator('/docs/cpp/printing-pada-console', '877'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/cpp/variabel-tipedata-konstanta',
        component: ComponentCreator('/docs/cpp/variabel-tipedata-konstanta', 'd55'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/html/basic-html',
        component: ComponentCreator('/docs/html/basic-html', 'cd2'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/html/perkenalan',
        component: ComponentCreator('/docs/html/perkenalan', '1c0'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/html/struktur-dasar-html',
        component: ComponentCreator('/docs/html/struktur-dasar-html', 'e47'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/html/tag-dan-elemen-html',
        component: ComponentCreator('/docs/html/tag-dan-elemen-html', '89f'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/intro',
        component: ComponentCreator('/docs/intro', 'aed'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/tutorial-basics/congratulations',
        component: ComponentCreator('/docs/tutorial-basics/congratulations', '793'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/tutorial-basics/create-a-blog-post',
        component: ComponentCreator('/docs/tutorial-basics/create-a-blog-post', '68e'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/tutorial-basics/create-a-document',
        component: ComponentCreator('/docs/tutorial-basics/create-a-document', 'c2d'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/tutorial-basics/create-a-page',
        component: ComponentCreator('/docs/tutorial-basics/create-a-page', 'f44'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/tutorial-basics/deploy-your-site',
        component: ComponentCreator('/docs/tutorial-basics/deploy-your-site', 'e46'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/tutorial-basics/markdown-features',
        component: ComponentCreator('/docs/tutorial-basics/markdown-features', '4b7'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/tutorial-extras/manage-docs-versions',
        component: ComponentCreator('/docs/tutorial-extras/manage-docs-versions', 'fdd'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/tutorial-extras/translate-your-site',
        component: ComponentCreator('/docs/tutorial-extras/translate-your-site', '2d7'),
        exact: true,
        sidebar: "tutorialSidebar"
      }
    ]
  },
  {
    path: '/',
    component: ComponentCreator('/', '986'),
    exact: true
  },
  {
    path: '*',
    component: ComponentCreator('*'),
  },
];
