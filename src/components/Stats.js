import React from 'react';
import { connect } from 'react-redux';

const Stats = ({ mostPlayedStats }) => {
    return (
        <div className="w-full bg-deep-purple-900 flex flex-col items-center mt-6 rounded-lg py-3 border-2 border-deep-purple-900 md:ml-4 md:py-4 md:justify-around lg:ml-0 lg:pb-4">
            <div className="text-center md:mb-6">
                <h1 className="text-3xl">Average Stats</h1>
                <h6 className="text-xs pb-6 italic md:pb-0">Sample Size: {mostPlayedStats.sampleSize} Matches</h6>
            </div>
            <div className="w-full px-3">
                <div className="flex items-center justify-between mb-2 rounded p-4 bg-deep-purple-700">
                    <label className="font-bold">Win Ratio</label>
                    <p>{mostPlayedStats.wins}W / {mostPlayedStats.losses}L <span className={mostPlayedStats.wins / mostPlayedStats.sampleSize < 0.5 ? 'text-red-600' : 'text-green-600'}>({Math.round((mostPlayedStats.wins / mostPlayedStats.sampleSize) * 10000) / 100}%)</span></p>
                </div>
                <div className="flex items-center justify-between mb-2 rounded p-4 bg-deep-purple-700">
                    <label className="font-bold">KDA</label>
                    <p>{mostPlayedStats.kda}</p>
                </div>
                <div className="flex items-center justify-between mb-2 rounded p-4 bg-deep-purple-700">
                    <label className="font-bold">Kills</label>
                    <p>{mostPlayedStats.avgKills}</p>
                </div>
                <div className="flex items-center justify-between mb-2 rounded p-4 bg-deep-purple-700">
                    <label className="font-bold">Deaths</label>
                    <p>{mostPlayedStats.avgDeaths}</p>
                </div>
                <div className="flex items-center justify-between mb-2 rounded p-4 bg-deep-purple-700">
                    <label className="font-bold">Total CS</label>
                    <p>{mostPlayedStats.avgCS}</p>
                </div>
                <div className="flex items-center justify-between mb-2 rounded p-4 bg-deep-purple-700">
                    <label className="font-bold">CS/min</label>
                    <p>{mostPlayedStats.avgCSPM}</p>
                </div>
                <div className="flex items-center justify-between mb-2 rounded p-4 bg-deep-purple-700">
                    <label className="font-bold">Damage/min</label>
                    <p>{mostPlayedStats.avgDamagePM}</p>
                </div>
                <div className="flex items-center justify-between mb-2 rounded p-4 bg-deep-purple-700">
                    <label className="font-bold">Vision Score</label>
                    <p>{mostPlayedStats.avgVisionScore}</p>
                </div>
                <div className="flex items-center justify-between rounded p-4 bg-deep-purple-700">
                    <label className="font-bold">Gold/min</label>
                    <p>{mostPlayedStats.avgGPM}</p>
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