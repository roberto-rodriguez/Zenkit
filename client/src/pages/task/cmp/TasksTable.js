import React, { Component } from "react";
import { Table, TableHead, TableRow, TableCell, TableBody, TextTableHeaderCell } from 'evergreen-ui';
import { taskStatusNames } from "../../../util/constants";

class TasksTable extends Component {
    
    render() {
        let { tasks } = this.props;
        return (
            <Table>
                <TableHead>
                        <TextTableHeaderCell>Name</TextTableHeaderCell>
                        <TextTableHeaderCell>Title</TextTableHeaderCell>
                        {/* TODO: I dont see any field related to sprint at task results */}
                        <TextTableHeaderCell>Sprint</TextTableHeaderCell>
                        <TextTableHeaderCell>Assigne</TextTableHeaderCell>
                        <TextTableHeaderCell>Estimated H.</TextTableHeaderCell>
                        <TextTableHeaderCell>Logged H.</TextTableHeaderCell>
                        <TextTableHeaderCell>Status</TextTableHeaderCell>
                </TableHead>
                <TableBody>
                    {tasks.map((task) => (
                        <TableRow key={task.id}>
                            <TableCell>{task.name}</TableCell>
                            <TableCell>{task.title}</TableCell>
                            {/* TODO: I dont see any field related to sprint at task results */}
                            <TableCell>Sprint</TableCell>
                            <TableCell>{task.assignee}</TableCell>
                            <TableCell>{task.estimatedHours}</TableCell>
                            <TableCell>{task.loggedHours}</TableCell>
                            <TableCell>{taskStatusNames[task.status]}</TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        );
    }
}
export default (TasksTable);