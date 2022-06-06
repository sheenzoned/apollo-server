const ProjectList = [
  {
    id: 1,
    projectName: "Project Name 1",
    isActive: true,
    isArchived: false,
    isFavorite: true,
    flows: [
      {
        id: 1,
        flowName: "P1 Flow 1",
        scope: "Production",
        lastRun: "25 Seconds ago",
      },
      {
        id: 2,
        flowName: "P1 Flow 2",
        scope: "Development",
        lastRun: "25 Seconds ago",
      },
    ],
  },
  {
    id: 2,
    projectName: "Project Name 2",
    isActive: true,
    isArchived: false,
    isFavorite: true,
    flows: [
      {
        id: 1,
        flowName: "P2 Flow 1",
        scope: "Development",
        lastRun: "25 Seconds ago",
      },
    ],
  },
  {
    id: 3,
    projectName: "Project Name 3",
    isActive: false,
    isArchived: true,
    isFavorite: false,
    flows: [
      {
        id: 1,
        flowName: "P3 Flow 1",
        scope: "Production",
        lastRun: "1 Hour ago",
      },
      {
        id: 2,
        flowName: "P3 Flow 2",
        scope: "Production",
        lastRun: "1 Hour ago",
      },
      {
        id: 3,
        flowName: "P3 Flow 3",
        scope: "Development",
        lastRun: "1 Hour ago",
      },
    ],
  },
];

module.exports = { ProjectList };
