import React from 'react';
import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import HomePage from "../components/Homepage";
import Contributors from "../components/Contributors";

import '../../static/sass/main.scss';

export default function Home() {
  const { siteConfig } = useDocusaurusContext();
  return (
    <Layout
      title={`Hello from ${siteConfig.title}`}
      description="Tempat nya tutor koding berbahasa indonesia! <head />">
      <main>
        <HomePage />
        <Contributors />
      </main>
    </Layout>
  );
}
