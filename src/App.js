import React from 'react';
import { connect } from 'react-redux';
import ProjectCard from './ProjectCard';

const App = ({ cartCount }) => {
  return (
    <div>
      <header>
        <h1>Simple Redux Demo</h1>
        <p>Cart Count: {cartCount}</p>
      </header>
      <main>
        <ProjectCard name="Project 1" price="10" />
        <ProjectCard name="Project 2" price="20" />
        <ProjectCard name="Project 3" price="30" />
      </main>
    </div>
  );
};

const mapStateToProps = state => ({
  cartCount: state.project.cartCount
});

export default connect(mapStateToProps)(App);
