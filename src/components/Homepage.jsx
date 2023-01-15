import React from 'react';
// import clsx from 'clsx';
// import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// import { faCode, faFlask } from '@fortawesome/free-solid-svg-icons'
import SearchBar from "../theme/SearchBar";
import "../../static/sass/main.scss";

function Homepage() {
  const { siteConfig } = useDocusaurusContext();
  return (
    <>
      <div className='header-page container'>
        <h1>{siteConfig.title}</h1>
        <p>{siteConfig.tagline}</p>
        <div className='cari' >
          <SearchBar />
        </div>
      </div>
      {/* <div className="hero-body">
        <div className="judul">

          <div className='cari' >
            <SearchBar />
          </div>

        </div>
        <div className='hero-image' >
          <img src='https://raw.githubusercontent.com/fajarspace/kodelab-roadmap/master/static/img/science.svg' alt="" />
        </div>
      </div> */}
    </>
  );
}

export default Homepage