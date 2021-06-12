import axios from "axios";

export const FETCHING_SUMMONER_START = 'FETCHING_SUMMONER_START';
export const FETCHING_SUMMONER_SUCCESS = 'FETCHING_SUMMONER_SUCCESS';
export const FETCHING_SUMMONER_FAILURE = 'FETCHING_SUMMONER_FAILURE';

export const CHANGING_FORM_INPUT = 'CHANGING_FORM_INPUT';

export const fetchSummoner = (summonerName) => (dispatch) => {
    dispatch({ type: FETCHING_SUMMONER_START });

    axios.get(`https://lol-most-played-backend.herokuapp.com/${summonerName}`)
        .then(res => dispatch({ type: FETCHING_SUMMONER_SUCCESS, payload: res.data }))
        .catch(err => dispatch({ type: FETCHING_SUMMONER_FAILURE, payload: err }));
};

export const onInputChange = (event) => (dispatch) => {
    dispatch({ type: CHANGING_FORM_INPUT, payload: event });
};