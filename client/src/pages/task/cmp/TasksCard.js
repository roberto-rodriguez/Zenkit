import React, { Component } from "react";
import { taskStatusNames } from "../../../util/constants";
import { NavLink } from "react-router-dom";
import { Card, Text} from "evergreen-ui";

class TasksCard extends Component {
    
    render() {
        let { tasks } = this.props;
        return (
            tasks.map((task) => (
                <Card
                    key={task.id}
                    elevation={3}
                    activeElevation={2}
                    hoverElevation={3}
                    float="left"
                    width={190}
                    height={150}
                    margin={24}
                    display="flex"
                    justifyContent="center"
                    alignItems="center"
                    flexDirection="column"
                >
                    <Text>Name: <NavLink to={"/task/" + task.name}>{task.name}</NavLink></Text>
                    <Text>Status :  {taskStatusNames[task.status]}</Text>
                    <Text>Estimated Hours : {task.estimatedHours}</Text>
                    <Text>Logged Hours : {task.loggedHours}</Text>
                </Card>

                ))
        );
    }
}
export default (TasksCard);