import { fetchMatchDetails } from '../../services/riotAPI';

const matchResolvers = {
  Query: {
    match: async (_: any, { matchId }: { matchId: string }) => {
      return await fetchMatchDetails(matchId);
    },
  },
};

export default matchResolvers;
