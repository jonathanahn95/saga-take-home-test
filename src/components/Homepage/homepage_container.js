import { connect } from "react-redux";
import Homepage from "./homepage";
import { getPostsRequest } from "../../actions/posts";


const mapStateToProps = (state) => {
  return {
      asd: 'asd',
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