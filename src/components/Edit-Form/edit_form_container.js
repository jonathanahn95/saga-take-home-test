import { connect } from "react-redux";
import EditForm from "./edit_form";
import { getSinglePostRequest, editPost, getSearchResults, getPostsRequest } from "../../state/Posts/Posts-Actions";
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
    results: posts.results,
    posts: posts.posts,
  };
};

const mapDispatchToProps = dispatch => { 
  return {
    getSinglePostRequest: (id) => dispatch(getSinglePostRequest(id)),
    editPost: (id) => dispatch(editPost(id)),
    getSearchResults: (value) => dispatch(getSearchResults(value)),
    getPostsRequest: () => dispatch(getPostsRequest()),
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(EditForm);