import React from 'react';
import { connect } from 'react-redux';
import Loader from 'react-loader-spinner';

import Stats from './Stats';

const Summoner = ({ data, mostPlayedChamp, isFetching, width }) => {
    return (
        <div className="flex flex-col items-center w-full">
            {
                !isFetching
                ? <div className="flex flex-col p-4 items-center text-white w-full">
                    <div className="rounded-lg bg-deep-purple-900 w-full flex border-2 border-deep-purple-900 flex-col items-center pt-10 pb-8">
                        <div className="relative">
                            <img className="img-outer h-24 w-24 rounded-full" src={`https://ddragon.leagueoflegends.com/cdn/11.12.1/img/profileicon/${data.summoner.profileIconId}.png`} />
                            <span className="level-outer absolute bg-deep-purple-900 font-semibold text-white rounded-full text-sm py-1 px-2 -bottom-5 right-7">{data.summoner.summonerLevel}</span>
                        </div>
                        <h2 className="text-2xl pt-9 font-semibold">{data.summoner.name}</h2>
                    </div>
                    <div className="w-full flex flex-col md:flex-row md:justify-between lg:flex-col">
                        <img className="mt-6 level-outer rounded-lg" src={`http://ddragon.leagueoflegends.com/cdn/img/champion/${width >= 1024 ? 'splash': 'loading'}/${mostPlayedChamp}_0.jpg`} />
                        <Stats />
                    </div>
                </div>
                : <Loader className="mt-20" type="TailSpin" color="#DAA520" height={80} width={80} />
            }
        </div>
    );
};

const mapStateToProps = state => {
    return {
        data: state.data,
        mostPlayedChamp: state.mostPlayedChamp,
        isFetching: state.isFetching
    };
};

export default connect(mapStateToProps, {})(Summoner);
