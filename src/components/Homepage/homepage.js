import React from "react";
import { withStyles } from '@material-ui/styles';
import Posts from '../Posts/posts';
import { connect } from "react-redux";
import { getPostsRequest, getSearchResults } from "../../state/Posts/Posts-Actions";

const styles = (theme) => {
    return {
      root: {
        maxWidth: '980px',
        margin: 'auto', 
      },
      title: {
        fontSize: '35px',
        textAlign: 'center',
      },
      searchInput: {
        width: '100%',
        padding: '15px',
        margin: '10px',
      },
    };
  };
  
class Homepage extends React.Component {
    componentDidMount() { 
        this.props.getPostsRequest();
    }

    onChangeHandler = e => {
      this.props.getSearchResults(e.target.value)
    }

    render() {
      const { posts, classes, results } = this.props;
      const renderPosts = results ? results : posts;

        
        return (
          <div className={classes.root}>
              <div className={classes.title}>
                Search by Title:
              </div>
              <input className={classes.searchInput} placeholder='Search by Title' onChange={this.onChangeHandler}/>
              <div className={classes.title}>
                Posts:
              </div>
              {renderPosts.length > 0 && (
                <Posts posts={renderPosts} />
              )}
          </div>
        );
      }
}

const mapStateToProps = (state) => {
  return {
    posts: state.posts.posts,
    results: state.posts.results
  };
};

const mapDispatchToProps = dispatch => { 
  return {
      getPostsRequest: () => dispatch(getPostsRequest()),
      getSearchResults: (value) => dispatch(getSearchResults(value)),
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withStyles(styles)(Homepage));