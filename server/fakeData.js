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
          id: 1,
          name: "T-1",
          title: "This is my first Task",
          assignee: "Robert",
          status: 1,
          flag: "No Flag",
          creationDate: new Date().getTime(),
          estimatedTime: 10,
          loggedHours: 6,
          completed: 60,
          description:
            "The purpose of this task is to create a detailed design of the Scrum Sprints. The Sprints will monitor some tasks that will be present on the development of our app.  All current tasks will be visible in its task panel. Each sprint list should have a unique user owner."
        },
        {
          id: 2,
          name: "T-2",
          title: "This is my secound Task",
          assignee: "Ismail",
          status: 2,
          flag: "No Flag",
          creationDate: new Date().getTime(),
          estimatedTime: 8,
          loggedHours: 4,
          completed: 20,
          description:
            "The purpose of this task is to create a detailed design of the Scrum Sprints. The Sprints will monitor some tasks that will be present on the development of our app.  All current tasks will be visible in its task panel. Each sprint list should have a unique user owner."
        }
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
      active: true,
      tasks: [
        {
          id: 3,
          name: "T-3",
          title: "This is my first Task",
          assignee: "Robert",
          status: 3,
          flag: 1,
          creationDate: new Date().getTime(),
          estimatedTime: 10,
          loggedHours: 6,
          completed: 60,
          description:
            "The purpose of this task is to create a detailed design of the Scrum Sprints. The Sprints will monitor some tasks that will be present on the development of our app.  All current tasks will be visible in its task panel. Each sprint list should have a unique user owner."
        },
        {
          id: 4,
          name: "T-4",
          title: "This is my secound Task",
          assignee: "Ismail",
          status: 4,
          flag: 2,
          creationDate: new Date().getTime(),
          estimatedTime: 8,
          loggedHours: 4,
          completed: 20,
          description:
            "The purpose of this task is to create a detailed design of the Scrum Sprints. The Sprints will monitor some tasks that will be present on the development of our app.  All current tasks will be visible in its task panel. Each sprint list should have a unique user owner."
        },
        {
          id: 5,
          name: "T-5",
          title: "This is my first Task",
          assignee: "Javier",
          status: 3,
          flag: 3,
          creationDate: new Date().getTime(),
          estimatedTime: 10,
          loggedHours: 6,
          completed: 60,
          description:
            "The purpose of this task is to create a detailed design of the Scrum Sprints. The Sprints will monitor some tasks that will be present on the development of our app.  All current tasks will be visible in its task panel. Each sprint list should have a unique user owner."
        },
        {
          id: 6,
          name: "T-6",
          title: "This is my secound Task",
          assignee: "Eduardo",
          status: 1,
          flag: 4,
          creationDate: new Date().getTime(),
          estimatedTime: 8,
          loggedHours: 4,
          completed: 20,
          description:
            "The purpose of this task is to create a detailed design of the Scrum Sprints. The Sprints will monitor some tasks that will be present on the development of our app.  All current tasks will be visible in its task panel. Each sprint list should have a unique user owner."
        },
        {
          id: 7,
          name: "T-7",
          title: "This is my secound Task",
          assignee: "Annier",
          status: 2,
          flag: null,
          creationDate: new Date().getTime(),
          estimatedTime: 8,
          loggedHours: 4,
          completed: 20,
          description:
            "The purpose of this task is to create a detailed design of the Scrum Sprints. The Sprints will monitor some tasks that will be present on the development of our app.  All current tasks will be visible in its task panel. Each sprint list should have a unique user owner."
        }
      ]
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
