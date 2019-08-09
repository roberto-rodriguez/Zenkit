module.exports = {
  user: { id: 1, name: "Robert" },
  sprints: [
    {
      id: 1,
      name: "Aug 3 - Aug 09",
      startDate: new Date().getTime(),
      endDate: new Date().getTime(),
      hours: 80,
      loggedHours: 0,
      completed: 0,
      active: false,
      tasks: [
        {
          id: 0,
          title: "This is my first Task",
          asignedTo: "Robert",
          status: "TODO",
          flag: "No Flag",
          logHours: "Log Hours",
          creationDate: new Date().getTime(),
          estimatedTime: 10,
          loggedHours: 6,
          completed: 60,
          description: "The purpose of this task is to create a detailed design of the Scrum Sprints. The Sprints will monitor some tasks that will be present on the development of our app.  All current tasks will be visible in its task panel. Each sprint list should have a unique user owner."
        },
        {
          id: 0,
          title: "This is my secound Task",
          asignedTo: "Ismail",
          status: "TODO",
          flag: "No Flag",
          logHours: "Log Hours",
          creationDate: new Date().getTime(),
          estimatedTime: 8,
          loggedHours: 4,
          completed: 20,
          description: "The purpose of this task is to create a detailed design of the Scrum Sprints. The Sprints will monitor some tasks that will be present on the development of our app.  All current tasks will be visible in its task panel. Each sprint list should have a unique user owner."
        },
      ]
    },
    {
      id: 2,
      name: "Aug 10 - Aug 17",
      startDate: new Date().getTime(),
      endDate: new Date().getTime(),
      hours: 80,
      loggedHours: 0,
      completted: 0,
      active: true
    },
    {
      id: 3,
      name: "Aug 18 - Aug 24",
      startDate: new Date().getTime(),
      endDate: new Date().getTime(),
      hours: 80,
      loggedHours: 0,
      completted: 0,
      active: false
    }
  ]
};
