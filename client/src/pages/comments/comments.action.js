import axios from "axios";
import * as commentUtil from "./commentUtil";

export const saveUpdateComment = ( formValues) => async dispatch => {

  //const res = await axios.post("http://localhost:8084/Front/api/comment/saveOrUpdate", formValues);
  var title = commentUtil.commentName(formValues.commentType);
  var flag = commentUtil.commentFlag(formValues.commentType);

  formValues.title=title;
  formValues.flag=flag;
  
  const res = await axios.post("/api/comment/salvar", formValues);

  if (res.data) {

       dispatch({ type: "ADD_COMMENT", data: res.data });


    }
};

export const addComment1 = ( formValues) => async dispatch => {
  console.log("values> " +formValues);
  const res = await axios.get("http://localhost:8084/Front/api/comment/load");

  if (res.data) {
    console.log("res > " +res.data);


      dispatch({ type: "ADD_COMMENT", data: res.data });
  //  history.push("/");
  }
};
