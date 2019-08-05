
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
            active: false
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
          },
    ]
  };