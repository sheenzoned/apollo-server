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
    projects(
      projectName: String!
      isActive: Boolean!
      isArchived: Boolean!
    ): [Projects]
  }

  type Mutation {
    createNewWorkflow(
      id: ID!
      flowName: String!
      scope: String!
      lastRun: String!
    ): Flows
  }
`;

module.exports = { typeDefs };
