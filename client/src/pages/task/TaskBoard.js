import React, { Component } from "react";
import { connect } from "react-redux";
import * as taskActions from "./task.actions";
import Page from "../common/cmp/Page";
import { IconButton } from "evergreen-ui";
import TasksTable from "./cmp/TasksTable";
import TasksCard from "./cmp/TasksCard";
import TaskFilterForm from "./cmp/TaskFilterForm"

class TaskBoard extends Component {
    
    constructor(props) {
        super(props);       
        this.state = {
            viewType: 'table',
            viewIcon: 'th'
        };
    }

    componentWillMount() {
        this.props.listTasks();
    }

    updateViewType(){
        this.setState(this.state.viewType === 'table' ? {
            viewType :  'card',
            viewIcon: 'square'
        }:{
            viewType :  'table',
            viewIcon: 'th'
        } );
    }

    buildView = () => {
        var { viewType } = this.state;
        let { tasks } = this.props;

        switch (viewType) {
          case "card":
            return <TasksCard tasks={tasks}/>;
          case "table":
          default:
            return <TasksTable tasks={tasks} />;
        }
      };

    onSubmitFilter = () => {
        const { values } = this.props;
        //TODO: Check at least one value to call filterTasks
        this.props.filterTasks(values);
    };
    
    render() {
        return (
            <Page>
                <div className="section" style={{ width: "100%"}}>
                <TaskFilterForm onSubmit={this.onSubmitFilter}></TaskFilterForm>    
                <IconButton icon={this.state.viewIcon} onClick = {() => this.updateViewType() }/>
                {this.buildView()}
                </div>
            </Page>
        );
    }
}

const mapStateToProps = (state) => {
    return {
      tasks: (state.task && state.task.list) ? Object.values(state.task.list) : [],
      values: state.form.taskFilterForm && state.form.taskFilterForm.values
    };
};

export default connect(mapStateToProps, taskActions)(TaskBoard);  