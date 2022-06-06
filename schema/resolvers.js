const { ProjectList } = require("../mockdata");

const resolvers = {
  Query: {
    getAllProjects: () => {
      return ProjectList;
    },
  },
  Mutation: {
    createNewWorkflow: (parent, args) => {
      ProjectList.forEach((proj) => {
        if (proj.id === args.id) {
          proj.flows.push({
            id: proj.flows.length + 1,
            flowName: args.flowName,
            scope: args.scope,
            lastRun: args.lastRun,
          });
        }
      });
    },
  },
};

module.exports = { resolvers };
