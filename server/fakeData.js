
module.exports = {
    user:{ id: 1, name: "Robert" },
    sprints: [
        {
            id: 1,
            name: "Aug 3 - Aug 09",
            startDate: new Date().getTime(),
            endDate: new Date().getTime(),
            hours: 80,
            loggedHours: 0,
            completted: 0,
            active: false,
            tasks: [
                {
                    id: 1,
                    name: "Task 1",
                    hours: 10,
                    completed: 10,
                    status: "done",
                    user:{ id: 1, name: "Robert" }
                },
                {
                    id: 2,
                    name: "Task 2",
                    hours: 15,
                    completed: 15,
                    status: "done",
                    user:{ id: 1, name: "Robert" },
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
                    name: "Task 3",
                    hours: 10,
                    completed: 6,
                    status: "doing",
                    user:{ id: 1, name: "Robert" }
                },
                {
                    id: 4,
                    name: "Task 4",
                    hours: 15,
                    completed: 2,
                    status: "doing",
                    user:{ id: 1, name: "Robert" }
                },
                {
                    id: 7,
                    name: "Task 7",
                    hours: 10,
                    completed: 10,
                    status: "done",
                    user:{ id: 1, name: "Robert" }
                },
                {
                    id: 8,
                    name: "Task 8",
                    hours: 15,
                    completed: 15,
                    status: "review",
                    user:{ id: 1, name: "Robert" }
                },
                {
                    id: 9,
                    name: "Task 9",
                    hours: 10,
                    completed: 0,
                    status: "todo",
                    user:{ id: 1, name: "Robert" }
                },
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
            active: false,
            tasks: [
                {
                    id: 5,
                    name: "Task 5",
                    hours: 10,
                    completed: 0,
                    status: "todo",
                    user:{ id: 1, name: "Robert" }
                },
                {
                    id: 6,
                    name: "Task 6",
                    hours: 15,
                    completed: 0,
                    status: "todo",
                    user:{ id: 1, name: "Robert" }
                }
            ]
          },
    ]
  };