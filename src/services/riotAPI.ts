import axios from "axios";

const API_KEY = process.env.RIOT_GAMES_API_KEY;
const BASE_URL = "https://<RIOT_API_ENDPOINT>";

export const fetchPlayerData = async (playerId: string) => {
  const response = await axios.get(`${BASE_URL}/players/${playerId}`, {
    headers: {
      "X-Riot-Token": API_KEY,
    },
  });
  return response.data;
};

export const fetchMatchDetails = async (matchId: string) => {
  const response = await axios.get(`${BASE_URL}/matches/${matchId}`, {
    headers: {
      "X-Riot-Token": API_KEY,
    },
  });
  return response.data;
};
