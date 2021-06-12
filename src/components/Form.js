import React, { useState } from 'react';
import { connect } from 'react-redux';

import { fetchSummoner } from '../actions';

const Form = ({ fetchSummoner }) => {
    const [summonerName, setSummonerName] = useState('');

    const onInputChange = (event) => {
        setSummonerName(event.target.value);
    };

    const getSummoner = (summonerName, event) => {
        event.preventDefault();
        fetchSummoner(summonerName);
    };

    return (
        <form className="p-3 bg-deep-purple-900" onSubmit={(event) => getSummoner(summonerName, event)}>
            <input className="border-2 text-xl p-2 border-black rounded w-full" type="text" name="summoner" value={summonerName} onChange={(event) => onInputChange(event)} />
        </form>
    );
};

export default connect(null, { fetchSummoner })(Form);
