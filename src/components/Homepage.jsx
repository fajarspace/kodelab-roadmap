import React from 'react';
import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCode, faFlask } from '@fortawesome/free-solid-svg-icons'
import "../../static/sass/main.scss";

function HomePage() {
  const { siteConfig } = useDocusaurusContext();
  return (
    <div className="hero-body container">
      <div className="judul">
        <h1 className="title is-1 is-bold is-spaced">Kodelab</h1>
        <h2 className="subtitle is-5 is-muted">
          Tempat nya tutor koding berbahasa indonesia!
        </h2>
      </div>
      <div className='hero-image' >
        <img src={require('../../static/img/docusaurus.png')} alt="" />
        <h2>asd</h2>
      </div>
    </div>

  );
}

export default HomePage