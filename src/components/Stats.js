import React from 'react';
import { connect } from 'react-redux';

const Stats = ({ mostPlayedStats }) => {
    return (
        <div className="w-full bg-deep-purple-900 flex flex-col items-center mt-6 rounded-lg py-4 md:ml-4 md:py-0 md:justify-around lg:ml-0 lg:pb-4">
            <div className="text-center lg:py-4">
                <h1 className="text-3xl">Average Stats</h1>
                <h6 className="text-xs pb-6 italic md:pb-0">Sample Size: {mostPlayedStats.sampleSize} Matches</h6>
            </div>
            <div className="w-full">
                <div className="flex items-center w-full justify-between px-4 mb-2">
                    <label className="bg-deep-purple-700 py-2 px-3 rounded-lg w-1/2 text-center">Win Ratio</label>
                    <p className="ml-2 text-center w-1/2">{mostPlayedStats.wins}W / {mostPlayedStats.losses}L <span className={mostPlayedStats.wins / mostPlayedStats.sampleSize < 0.5 ? 'text-red-600' : 'text-green-600'}>({Math.round((mostPlayedStats.wins / mostPlayedStats.sampleSize) * 10000) / 100}%)</span></p>
                </div>
                <div className="flex items-center w-full justify-between px-4 mb-2">
                    <label className="bg-deep-purple-700 py-2 px-3 rounded-lg w-1/2 text-center">KDA</label>
                    <p className="ml-2 text-center w-1/2">{mostPlayedStats.kda}</p>
                </div>
                <div className="flex items-center w-full justify-between px-4 mb-2">
                    <label className="bg-deep-purple-700 py-2 px-3 rounded-lg w-1/2 text-center">Kills</label>
                    <p className="ml-2 text-center w-1/2">{mostPlayedStats.avgKills}</p>
                </div>
                <div className="flex items-center w-full justify-between px-4 mb-2">
                    <label className="bg-deep-purple-700 py-2 px-3 rounded-lg w-1/2 text-center">Deaths</label>
                    <p className="ml-2 text-center w-1/2">{mostPlayedStats.avgDeaths}</p>
                </div>
                <div className="flex items-center w-full justify-between px-4 mb-2">
                    <label className="bg-deep-purple-700 py-2 px-3 rounded-lg w-1/2 text-center">Total CS</label>
                    <p className="ml-2 text-center w-1/2">{mostPlayedStats.avgCS}</p>
                </div>
                <div className="flex items-center w-full justify-between px-4 mb-2">
                    <label className="bg-deep-purple-700 py-2 px-3 rounded-lg w-1/2 text-center">CS/min</label>
                    <p className="ml-2 text-center w-1/2">{mostPlayedStats.avgCSPM}</p>
                </div>
                <div className="flex items-center w-full justify-between px-4 mb-2">
                    <label className="bg-deep-purple-700 py-2 px-3 rounded-lg w-1/2 text-center">Damage/min</label>
                    <p className="ml-2 text-center w-1/2">{mostPlayedStats.avgDamagePM}</p>
                </div>
                <div className="flex items-center w-full justify-between px-4 mb-2">
                    <label className="bg-deep-purple-700 py-2 px-3 rounded-lg w-1/2 text-center">Vision Score</label>
                    <p className="ml-2 text-center w-1/2">{mostPlayedStats.avgVisionScore}</p>
                </div>
                <div className="flex items-center w-full justify-between px-4">
                    <label className="bg-deep-purple-700 py-2 px-3 rounded-lg w-1/2 text-center">Gold/min</label>
                    <p className="ml-2 text-center w-1/2">{mostPlayedStats.avgGPM}</p>
                </div>
            </div>
        </div>
    );
};

const mapStateToProps = state => {
    return {
        mostPlayedStats: state.mostPlayedStats
    };
};

export default connect(mapStateToProps, {})(Stats);