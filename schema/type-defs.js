const { gql } = require("apollo-server");

const typeDefs = gql`
  type Projects {
    id: ID!
    projectName: String!
    isActive: Boolean!
    isArchived: Boolean!
    isFavorite: Boolean!
    flows: [Flows]
  }

  type Flows {
    id: ID!
    flowName: String!
    scope: String!
    lastRun: String!
  }

  type Query {
    getAllProjects: [Projects!]!
  }
`;

module.exports = { typeDefs };
