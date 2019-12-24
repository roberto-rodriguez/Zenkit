import React, { Component } from "react";
import ".././Comments.scss";
import { withRouter } from "react-router";
import { connect } from "react-redux";
import { flags } from "../../../util/constants";
import moment from "moment";
import {Button} from "evergreen-ui";

const commentTest=//Only test

  {id: 3,
  title: "Probando esta locura update",
  description: "mira que mal ando",
  creationDate: 1566679736706,
  client: 1,
  task: 2,
  flag: 1
};


class CommentsList extends Component {
  constructor(props) {
    super(props);

    this.state = {

    };
  }

  render (){
    var commentList = this.props.commentList || [];

    var {  comment, editComment} = this.props;

    if(comment.list&&editComment==="Add"){
      commentList= commentList.concat(comment.list)  ;
    }else
    {
      //Testing commentTest
      //Origin comment.list
      if(comment.list&&editComment==="edit"){
      var changeComment = Object.values(commentList).filter(

      key => key.id!=comment.list.id
      );
      commentList=changeComment.concat(comment.list);
    }}

    return(

      <div >

      {
        commentList.map((list, i) => (

        <div className="row card-panel green lighten-5" key={list.id}>
        <Button
          onClick={() => this.props.showCommentEdit(list.id) }
          iconAfter="edit"
          height={32}
          appearance="primary"

        >
          Edit
        </Button>
        <div className="row ">
        <div className="col s11 green lighten-5 ">

          <h5>{list.title}</h5>

        </div>
        <div className="col s1 green lighten-5">
        {list.flag && (
          
          <a
            className={
              "left user-button btn-floating waves-light " +
              flags[list.flag].color
            }
          >
            <i className="material-icons" style={{ fontSize: 40 }}>
              {flags[list.flag].icon}
            </i>
          </a>
        )}
        </div>
        </div>

          <div>
            <div className="col s12 green lighten-5">
              <h6>{list.description}</h6>
            </div>
          </div>
          <div className="col s1 green lighten-5" style={{
            float: "right",
            marginRight:"20px",
            width:"180px"
          }} >

            {moment(list.creationDate).format("YYYY-MM-DD  HH:mm")}

          </div>
        </div>
        ))
        }
      </div>

    );
  }

}

const mapStateToProps = ({ task,comment }, props) => {
  var taskName =
    props.match && props.match.params && props.match.params.taskName;

  return {
    taskName,
    task,
  };
};

export default(
  connect(
    mapStateToProps,
  )(withRouter(CommentsList))
);
