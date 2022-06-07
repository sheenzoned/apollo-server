const { ProjectList } = require("../mockdata");

const resolvers = {
  Query: {
    // PROJECTS
    getAllProjects: () => {
      return ProjectList;
    },
    projects: (parent, args) => {
      return ProjectList.filter((proj) => {
        return (
          proj.projectName.includes(args.projectName) &&
          proj.isActive === args.isActive &&
          proj.isArchived === args.isArchived
        );
      });
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
