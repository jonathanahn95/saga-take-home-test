import { connect } from "react-redux";
import Homepage from "./homepage";
import { getPostsRequest } from "../../state/Posts/Posts-Actions";


const mapStateToProps = ({ posts }) => {
  return {
    posts
  };
};

const mapDispatchToProps = dispatch => { 
  return {
      getPostsRequest: () => dispatch(getPostsRequest()),
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Homepage);