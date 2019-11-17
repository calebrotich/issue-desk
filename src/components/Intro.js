import React, { Fragment } from 'react';
import NavBar from './NavBar';
import '../css/Home.css';
import SearchField from './SearchField';

const Intro = ({IntroMessage, getSearchData}) => (
  <Fragment>
    <header>
      <NavBar />
    </header>
    <section className="intro-div">
<p className="intro-text">{IntroMessage}</p>
      <SearchField getSearchData={getSearchData} />
    </section>
  </Fragment>
);

export default Intro;
