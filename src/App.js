import React from 'react';
import { connect } from 'react-redux';

import useWindowSize from './hooks/useWindowSize';
import Summoner from './components/Summoner';
import Form from './components/Form';

import './App.css';

const App = ({ mostPlayedChamp, data }) => {
  const [width] = useWindowSize();

  return (
    <div className="min-h-screen bg-deep-purple-700">
      <div>
        <Form />

        <div className="min-h-nav-screen flex justify-center items-center">
          { data ? <Summoner width={width} /> : <h2 className="text-white text-2xl text-center px-12">Search for a summoner to get started!</h2> }
        </div>
      </div>
    </div>
  );
}

const mapStateToProps = state => {
  return {
    mostPlayedChamp: state.mostPlayedChamp,
    data: state.data
  };
};

export default connect(mapStateToProps, {})(App);

// RGAPI-3b1a9ee2-941a-4559-912b-558e8d8c3794
