const playerTypeDefs = `#graphql
  type Player {
    id: String
    name: String
    rank: String
    lastGames: [Match]
  }

  type Query {
    player(playerId: String!): Player
    allPlayers: [Player]
  }

  type Match {
    matchId: String
    result: String
    duration: Int
  }
`;

export default playerTypeDefs;
