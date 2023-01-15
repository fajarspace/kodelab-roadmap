import React from 'react';
// import clsx from 'clsx';
// import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import Homepage from "../components/Homepage";
import Contributors from "../components/Contributors";
import Bannertop from "../components/Bannertop";

import '../../static/sass/main.scss';

export default function Home() {
  const { siteConfig } = useDocusaurusContext();
  return (

    <Layout
      title={`Halo! dari ${siteConfig.title}`}
      description="Tempat nya tutor koding berbahasa indonesia! <head />">
      <main>
        <Bannertop />
        <Homepage />
        <Contributors />
      </main>
    </Layout>
  );
}
