import {
    CHANGING_FORM_INPUT,
    FETCHING_SUMMONER_START,
    FETCHING_SUMMONER_SUCCESS,
    FETCHING_SUMMONER_FAILURE
} from '../actions';

const initialState = {
    data: null,
    mostPlayedChamp: null,
    isFetching: false,
    mostPlayedStats: null,
    error: ''
};

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case FETCHING_SUMMONER_START:
            return {
                ...state,
                isFetching: true,
                error: ''
            };
        case FETCHING_SUMMONER_SUCCESS:
            const findMostPlayedChamp = () => {
                let playedChamps = [];
                let mostPlayed = "";
                let mf = 0;
                let m = 0;
    
                for (let i = 0; i < action.payload.matches.length; i++) {
                    for(let j = 0; j < action.payload.matches[i].info.participants.length; j++) {
                        if (action.payload.matches[i].info.participants[j].summonerName === action.payload.summoner.name) {
                            playedChamps.push(action.payload.matches[i].info.participants[j].championName);
                            continue;
                        }
                    }
                }
    
                for (let k = 0; k < playedChamps.length; k++) {
                    for (let l = 0; l < playedChamps.length; l++) {
                        if (playedChamps[k] == playedChamps[l]) m++;
                        if (mf < m) {
                            mf = m;
                            mostPlayed = playedChamps[k];
                        }
                    }
    
                    m = 0;
                }

                return mostPlayed;
            };

            const roundToHundreths = (num) => {
                return Math.round(num * 100) / 100;
            };

            const getStatsForMostPlayed = (mostPlayed) => {
                let mostPlayedStatsArray = [];
                let totalKills = 0,
                    totalDeaths = 0,
                    totalAssists = 0,
                    totalGPM = 0,
                    totalCS = 0,
                    totalCSPM = 0,
                    totalWins = 0,
                    totalLosses = 0,
                    totalDamage = 0,
                    totalDamagePM = 0,
                    totalVisionScore = 0;

                for (let i = 0; i < action.payload.matches.length; i++) {
                    for(let j = 0; j < action.payload.matches[i].info.participants.length; j++) {
                        if (action.payload.matches[i].info.participants[j].summonerName === action.payload.summoner.name && action.payload.matches[i].info.participants[j].championName === mostPlayed) {
                            mostPlayedStatsArray.push({
                                kills: action.payload.matches[i].info.participants[j].kills,
                                deaths: action.payload.matches[i].info.participants[j].deaths,
                                assists: action.payload.matches[i].info.participants[j].assists,
                                timePlayed: action.payload.matches[i].info.participants[j].timePlayed,
                                totalDamageDealtToChampions: action.payload.matches[i].info.participants[j].totalDamageDealtToChampions,
                                visionScore: action.payload.matches[i].info.participants[j].visionScore,
                                totalMinionsKilled: action.payload.matches[i].info.participants[j].totalMinionsKilled,
                                win: action.payload.matches[i].info.participants[j].win,
                                goldEarned: action.payload.matches[i].info.participants[j].goldEarned,
                            });
                            continue;
                        };
                    };
                };

                for (let k = 0; k < mostPlayedStatsArray.length; k++) {
                    if (mostPlayedStatsArray[k].win) {
                        totalWins += 1;
                    } else {
                        totalLosses += 1;
                    };

                    totalGPM += (mostPlayedStatsArray[k].goldEarned / (mostPlayedStatsArray[k].timePlayed / 60));
                    totalCSPM += (mostPlayedStatsArray[k].totalMinionsKilled / (mostPlayedStatsArray[k].timePlayed / 60));
                    totalDamagePM += (mostPlayedStatsArray[k].totalDamageDealtToChampions / (mostPlayedStatsArray[k].timePlayed / 60));
                    totalKills += mostPlayedStatsArray[k].kills;
                    totalDeaths += mostPlayedStatsArray[k].deaths;
                    totalAssists += mostPlayedStatsArray[k].assists;
                    totalCS += mostPlayedStatsArray[k].totalMinionsKilled;
                    totalDamage += mostPlayedStatsArray[k].totalDamageDealtToChampions;
                    totalVisionScore += mostPlayedStatsArray[k].visionScore;
                };

                return {
                    avgKills: roundToHundreths(totalKills / mostPlayedStatsArray.length),
                    avgDeaths: roundToHundreths(totalDeaths / mostPlayedStatsArray.length),
                    avgAssists: roundToHundreths(totalAssists / mostPlayedStatsArray.length),
                    kda: roundToHundreths((totalKills + totalAssists) / totalDeaths).toString() + " : 1",
                    avgGPM: roundToHundreths(totalGPM / mostPlayedStatsArray.length),
                    avgVisionScore: roundToHundreths(totalVisionScore / mostPlayedStatsArray.length),
                    avgCS: roundToHundreths(totalCS / mostPlayedStatsArray.length),
                    avgCSPM: roundToHundreths(totalCSPM / mostPlayedStatsArray.length),
                    avgDamagePM: roundToHundreths(totalDamagePM / mostPlayedStatsArray.length),
                    sampleSize: mostPlayedStatsArray.length,
                    wins: totalWins,
                    losses: totalLosses
                };
            };

            return {
                ...state,
                isFetching: false,
                data: action.payload,
                mostPlayedChamp: findMostPlayedChamp(),
                mostPlayedStats: getStatsForMostPlayed(findMostPlayedChamp()),
                error: ''
            };
        case FETCHING_SUMMONER_FAILURE:
            return {
                ...state,
                isFetching: false,
                error: action.payload
            };
        case CHANGING_FORM_INPUT:
            return {
                ...state,
                summonerName: action.payload.target.value
            };
        default:
            return state;
    };
};

export default reducer;