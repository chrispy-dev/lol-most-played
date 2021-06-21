import React from 'react';
import { connect } from 'react-redux';

import useWindowSize from './hooks/useWindowSize';
import Summoner from './components/Summoner';
import Form from './components/Form';
import Home from './components/Home';

import './App.css';

const App = ({ mostPlayedChamp, data, isFetching }) => {
  const [width] = useWindowSize();

  return (
    <div className="min-h-screen bg-deep-purple-700">
      <div>
        <Form />

        <div className="min-h-nav-screen flex justify-center items-center">
          { data ? <Summoner width={width} /> : <Home /> }
        </div>
      </div>
    </div>
  );
}

const mapStateToProps = state => {
  return {
    mostPlayedChamp: state.mostPlayedChamp,
    data: state.data,
    isFetching: state.isFetching
  };
};

export default connect(mapStateToProps, {})(App);

// RGAPI-3b1a9ee2-941a-4559-912b-558e8d8c3794
