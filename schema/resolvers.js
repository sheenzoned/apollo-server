const { ProjectList, NotificationList } = require("../mockdata");

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
    favoriteProjects: () => {
      return ProjectList.filter((proj) => {
        return proj.isFavorite;
      });
    },

    // NOTIFICATIONS
    notifications: () => {
      return NotificationList;
    },
  },
  Mutation: {
    // PROJECTS
    updateFavoriteProject: (parent, args) => {
      ProjectList.map((proj) => {
        if (proj.id === args.id) proj.isFavorite;
      });
      return ProjectList;
    },

    // WORKFLOWS
    createNewWorkflow: (parent, args) => {
      let flow = {};
      ProjectList.forEach((proj) => {
        if (proj.id === args.id) {
          flow = {
            id: proj.flows.length + 1,
            flowName: args.flowName,
            scope: args.scope,
            lastRun: args.lastRun,
          };
          proj.flows.push(flow);
        }
      });
      return flow;
    },
    updateWorkflowName: (parent, args) => {
      ProjectList.map((proj) => {
        if (proj.id === args.projectId) {
          proj.flows.map((flow) => {
            if (flow.id === args.flowId) flow.flowName = args.flowName;
          });
        }
      });
      return ProjectList;
    },
  },
};

module.exports = { resolvers };
