import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import { Redirect } from "react-router";
import { Pane, Text, Button, Tooltip, Position } from 'evergreen-ui';

class List extends Component{

      renderRedirect = (prop) => {
          return <Redirect  to={"/sprint/"+prop.id} />
      }
  render(){
    const prop = this.props;
    return(
      <Pane
        elevation={3}
        activeElevation={2}
        hoverElevation={3}
        float="left"
        width={350}
        height={250}
        margin={24}
        display="flex"
        justifyContent="center"
        alignItems="center"
        flexDirection="column"
      >
      <Text>Name: <NavLink to={"/sprint/" + prop.id}>{prop.name}</NavLink></Text>
      <Text>Status :  {prop.active ? "active" : "not active"}</Text>
      <Text>Start Date : {prop.startdate}</Text>
      <Text>End Date : {prop.enddate}</Text>
      <Text>Estimated Hours : {prop.estimatedhours}</Text>
      <Text>Logged Hours : {prop.loggedhours}</Text>
      <Text >Completed {prop.completed}%</Text>
      <Text>
        <Tooltip content="Edit Sprint" position={Position.LEFT}>
          <Button
            children = "Edit"
            iconBefore = "edit"
            onClick = {()=> this.renderRedirect(prop) }
          />
        </Tooltip>
        {' '}
        <Tooltip content="Remove Sprint" position={Position.RIGHT}>
          <Button
            children = "Delete"
            iconBefore = "remove"
            href="/sprint"
          />
        </Tooltip>


        </Text>
      </Pane>

      );
    }
}

export default List;
