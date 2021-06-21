import React from 'react';
import { connect } from 'react-redux';
import Loader from 'react-loader-spinner';

const Home = ({ isFetching }) => {
    return (
        <>
            {
                !isFetching
                ? <div className="px-6 max-w-sm">
                    <h4 className="text-center text-white">This app will find a player's most played champion (from their last 15 games) and provide some useful statistics on their performance!</h4>
                    <br />
                    <h3 className="text-center text-xl text-white font-bold">Search for a summoner to get started!</h3>
                </div>
                : <Loader className="mt-20" type="TailSpin" color="#DAA520" height={80} width={80} />
            }
        </>
    );
};

const mapStateToProps = state => {
    return {
        isFetching: state.isFetching
    }
};

export default connect(mapStateToProps, {})(Home)
