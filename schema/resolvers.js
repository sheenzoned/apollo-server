const { ProjectList } = require("../mockdata");

const resolvers = {
  Query: {
    getAllProjects: () => {
      return ProjectList;
    },
  },
};

module.exports = { resolvers };
