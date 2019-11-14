import React, { Fragment } from 'react';
import NavBar from './NavBar';
import '../css/Home.css';
import SearchField from './SearchField';

const Intro = ({IntroMessage}) => (
  <Fragment>
    <header>
      <NavBar />
    </header>
    <section className="intro-div">
<p className="intro-text">{IntroMessage}</p>
      <SearchField />
    </section>
  </Fragment>
);

export default Intro;
