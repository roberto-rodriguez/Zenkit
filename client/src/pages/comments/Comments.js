import React, { Component } from "react";
import "./Comments.scss";
import NewComments from "./cmp/NewComments";
import EditComments from "./cmp/EditComments";
import CommentsList from "./cmp/CommentsList";
import { reduxForm } from "redux-form";
import {  Button } from "evergreen-ui";
import * as commentAction from "./comments.action";
import { withRouter } from "react-router";
import { connect } from "react-redux";
import moment from "moment";



class Comments extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isShown:false,
      show:false,
      showEdit:false,
      idComment:0,
      comments:[],
      editComment:"",
      isDisable:false
    };
  }

  showComment = () => {

    this.setState({ show: !this.state.show });
  };

  showEditComment = () => {

      this.setState({ showEdit: !this.state.showEdit });

  };

  showCommentEdit = (id) => {
    var {comment} = this.props;
    var commentData = this.props.comments;
    this.setState({ showEdit: !this.state.showEdit,idComment:id });

    if(comment.list ){
      commentData=commentData.concat(comment.list);
    }
    if(commentData){

      this.setState({ comments:  Object.values(commentData).filter(
      key => key.id===id
    )});

    }

  };

  onSaveComment = () => {
    const { values , saveUpdateComment} = this.props;

    saveUpdateComment(values, () => {
      console.log("entro");
      });
      this.setState({editComment:"Add"});

      this.showComment();

  };

  onUpdateComment = () => {
    const { values , saveUpdateComment} = this.props;

    saveUpdateComment(values, () => {
      console.log("entro");
      });

        this.setState({editComment:"edit"});

      this.showEditComment();

  };


  render() {

    var dataComments = this.state.comments;
    const {auth,task} = this.props;
    return (

        <div
          className="row"
          style={{ height: 250, width: "100%", paddingTop:60 }}>
          <div className="row">
            <div className="col s10">
              <h5>
              Comments
              </h5>
            </div>
            <div className="col s2"
            style={{ marginTop: 10}}>
            <Button
              onClick={() => this.showComment()}
              iconAfter="add"
              height={32}
              width={130}
              appearance="primary"

            >
              Add Comment
            </Button>
            </div>
          </div>

          <div
            className="section header row"

          >
           <CommentsList
            {...this.props}
            editComment={this.state.editComment}
                showCommentEdit={this.showCommentEdit}/>
          </div>

          {this.state.show &&(
            < NewComments
              isShow={this.showComment}
              onSubmit={this.onSaveComment}
              initialValues={{
                  id:null,
                  client:auth.id,
                  creation_date:  moment(new Date()).format("YYYY-MM-DD  HH:mm"),
                  description:"",
                  task:task.id,
                  title:"",
                  flag:null,

                }}/>)}

           {this.state.showEdit &&(
            < EditComments
              isShow={this.showCommentEdit}
              onSubmit={this.onUpdateComment}
              initialValues={{
                  id:dataComments[0].id,
                  client:auth.id,
                  creation_date:  dataComments[0].creationDate,
                  description:dataComments[0].description,
                  task:dataComments[0].task,
                  title:dataComments[0].title,
                  flag:dataComments[0].flag,

                }}
              />)}

          </div>
    );
  }
}


const mapStateToProps = ({ form,task,auth, comment }, props) => {
  var taskName =
    props.match && props.match.params && props.match.params.taskName;
    var comments=
      task.taskOpen && Object.values(task.taskOpen.comments);

  return {
    values: (form.commentsForm && form.commentsForm.values),
    taskName,
    comments,
    auth,
    comment,
    commentList: task.taskOpen ? Object.values(task.taskOpen.comments) : null,
  };
};
export default reduxForm({
  form: "commentsForm",

})(
  connect(
    mapStateToProps,
    commentAction

  )(withRouter(Comments))
);
