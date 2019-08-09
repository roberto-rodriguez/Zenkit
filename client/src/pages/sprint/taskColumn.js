import React, {Component} from "react";

class TaskColumn extends Component{
  render() {
    let {className, tasks, status, title} = this.props;
    tasks = tasks || [];
    let columnTasks = tasks.filter(x => x.status === status);

    let klass = "card task-column "+className;

    return (
      <div className={klass}>
        <div className="card-content">
          <span className="card-title white-text">{title}</span>
          {columnTasks.map(function (task) {
            let firstLetter = task.user.name.charAt(0);
            return <div key={task.id} className="task-card card yellow accent-4">
              <div className="card-content">
                <div className="task-header">
                  <a className="user-button btn-floating waves-effect waves-light red">{firstLetter}</a>
                  <span className="completion">{task.completed}/{task.hours}</span>
                </div>
                <div className="task-title">{task.name}</div>
              </div>
            </div>
          })}
        </div>
      </div>
    );
  }
}

export default TaskColumn;