import React from "react";
import { connect } from "react-redux";
import { Link } from 'react-router-dom';
import { withStyles } from '@material-ui/styles';
import Posts from '../Posts/posts';
import Dropdown from '../Drop-Down/drop-down';
import { getPostsRequest, getDropDownResults, getSearchResults } from "../../state/Posts/Posts-Actions";
import { getSearchSelectorResults } from '../../state/Posts/Posts-Selectors';

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
      editAPost: {
        fontSize: '35px',
        textAlign: 'center',
        border: '1px solid black',
        padding: '15px',
        width: '50%',
        margin: '20px auto',
        cursor: 'pointer',
      },
      searchInput: {
        width: '96.5%',
        padding: '15px',
        margin: '10px 0 0 0',
      },
      link: {
        textDecoration: 'none',
        color: 'black',
      },
      button: {
        backgroundColor: 'white',
        padding: '15px 30px',
        margin: '10px 0',
        cursor: 'pointer',
        width: '100%',
      },
    };
  };
  
class Homepage extends React.Component {
    constructor(props) { 
      super(props);
      this.state = { 
        search: '',
      };
    }

    componentDidMount() { 
        this.props.getPostsRequest();
    }

    onChangeHandler = e => {
      this.setState({
        search: e.target.value,
      });

      this.props.getDropDownResults(e.target.value);
    }

    handleOnSubmit = () => {
      this.props.getSearchResults(this.state.search);
    }

    render() {
      const { posts, classes, searchResults } = this.props;
      const renderPosts = searchResults.length > 0 ? searchResults : posts;
        
        return (
          <div className={classes.root}>
              <form onSubmit={this.handleOnSubmit}>
                <div className={classes.title}>
                  Search by Title:
                </div>
                <input className={classes.searchInput} placeholder='Search by Title' onChange={this.onChangeHandler}/>
                <Dropdown />
                <button className={classes.button}>Submit</button>
              </form>
              <Link className={classes.link} to={'/edit-post-new'}>
                <div className={classes.editAPost}>
                  Edit a Post
                </div>
              </Link>
              <div className={classes.title}>
                Posts:
              </div>
              {renderPosts.length > 0 && (
                <Posts posts={renderPosts}/>
              )}
          </div>
        );
      }
}

const mapStateToProps = ({posts}) => {
  return {
    posts: posts.posts,
    searchResults: getSearchSelectorResults(posts.posts, posts.searchResults),
  };
};

const mapDispatchToProps = dispatch => { 
  return {
      getPostsRequest: () => dispatch(getPostsRequest()),
      getDropDownResults: (value) => dispatch(getDropDownResults(value)),
      getSearchResults: (value) => dispatch(getSearchResults(value)),
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withStyles(styles)(Homepage));