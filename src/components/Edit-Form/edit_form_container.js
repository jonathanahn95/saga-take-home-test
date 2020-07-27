import { connect } from "react-redux";
import EditForm from "./edit_form";
import { getSinglePostRequest, editPost } from "../../state/Posts/Posts-Actions";
import { getSinglePostInState } from "../../state/Posts/Posts-Selectors";



const mapStateToProps = ({ posts }, ownProps) => {
  const paramsId = ownProps.match.params.id;
  const postInState = getSinglePostInState(posts, paramsId);
  const post = postInState ? postInState : posts.post.id ? posts.post : {
    body: '',
    id: '',
    title: '',
    userId: '',
  };

  return {
    postInState,
    post,
    paramsId,
  };
};

const mapDispatchToProps = dispatch => { 
  return {
    getSinglePostRequest: (id) => dispatch(getSinglePostRequest(id)),
    editPost: (id) => dispatch(editPost(id)),
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(EditForm);