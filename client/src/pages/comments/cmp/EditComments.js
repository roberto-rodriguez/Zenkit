import React, { Component } from "react";
import "./../Comments.scss";
import "../../common/common.scss";
import {  SelectField, TextAreaField } from "./../../common/fields";
import { Dialog } from "evergreen-ui";
import { reduxForm, Field } from "redux-form";
import { withRouter } from "react-router";
import { connect } from "react-redux";
import {commentType } from "../../../util/constants";


const flag = [
  { id: 1, name: "Open Question" },
  { id: 2, name: "Answered Question" },
  { id: 3, name: "Open Notification" },
  { id: 4, name: "Seen Notification" }
];


const EditComments = props => {
  const {
    isShow
    , onSubmit
  } = props || "";


  return (
    <div
      className="section"
      style={{ height: 250, width: "100%", paddingTop:60 }}
    >
    <div  className="row">
    <Dialog
      isShown={true}
      title="Update Comment"
      onCloseComplete={isShow}
      width="60%"
      height="30%"
      onConfirm={onSubmit}

      >
        <form >
        <div className="row">
         <div className="col s4">

           <Field
             name={"commentType"}
             label={"Comment Type"}
             component={SelectField}
             source={commentType}
             required={true}
           />

         </div>

         </div>
         <div className="row">

           <div className=" col s12">

           <Field
             name={"description"}
             label="Comment"
             component={TextAreaField }
             width="100%"

           />
           </div>

         </div>
         </form>
      </Dialog>
      </div>

      </div>

  );
};



export default reduxForm({

  form: "commentsForm",
})(
  connect(

  )(withRouter(EditComments))
);
