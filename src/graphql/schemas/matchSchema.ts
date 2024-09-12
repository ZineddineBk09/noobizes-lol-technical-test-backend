const matchTypeDefs = `#graphql
  type Match {
    matchId: String
    duration: Int
    result: String
    players: [Player]
    details: String
  }

  type Query {
    match(matchId: String!): Match
  }
`;

export default matchTypeDefs;
