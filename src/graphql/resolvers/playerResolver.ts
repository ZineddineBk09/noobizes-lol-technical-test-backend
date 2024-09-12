import { fetchPlayerData } from "../../services/riotAPI";

const playerResolvers = {
  Query: {
    player: async (_: any, { playerId }: { playerId: string }) => {
      return await fetchPlayerData(playerId);
    },
    allPlayers: async () => {
      // Fetch all players or use mock data for now
      return []; // Replace with actual data fetching
    },
  },
};

export default playerResolvers;
