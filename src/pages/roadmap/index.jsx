import React from 'react';
// import clsx from 'clsx';
// import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import Bannertop from "../../components/Bannertop";
import Roadmaplist from "../../components/Roadmaplist";

import '../../../static/sass/main.scss';

export default function Home() {
  return (
    <Layout
      title={`Roadmaps`}
      description="Tempat nya tutor koding berbahasa indonesia! <head />">
      <Bannertop />
      <Roadmaplist />
    </Layout>
  );
}
