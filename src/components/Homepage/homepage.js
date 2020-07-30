import React from "react";
import { connect } from "react-redux";
import { Link } from 'react-router-dom';
import { withStyles } from '@material-ui/styles';
import Posts from '../Posts/posts';
import Dropdown from '../Drop-Down/drop-down';
import { getPostsRequest, getDropDownResults, getSearchResults } from "../../state/Posts/Posts-Actions";
import { getSearchSelectorResults } from '../../state/Posts/Posts-Selectors';
import { Button, Input, Typography } from '@material-ui/core';
import { bindActionCreators } from 'redux';
import PropTypes, { shape, number, string } from 'prop-types';

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
        fontSize: '25px',
        textAlign: 'center',
        border: theme.border,
        padding: theme.padding,
        width: '50%',
        margin: '20px auto',
        cursor: 'pointer',
      },
      searchInput: {
        width: '96.5%',
        padding: theme.padding,
        margin: '10px 0 0 0',
      },
      link: {
        textDecoration: 'none',
        color: 'black',
        display: 'flex',
      },
      button: {
        backgroundColor: 'white',
        padding: theme.padding,
        margin: '10px 0',
        cursor: 'pointer',
        width: '100%',
        border: theme.border,
      },
      errorMessage: {
        textAlign: 'center',
        margin: theme.margin,
      }
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
      const { posts, classes, searchResults, error } = this.props;
      const renderPosts = searchResults.length > 0 ? searchResults : posts;

        return (
          <div className={classes.root}>
              <form onSubmit={this.handleOnSubmit}>
                <Typography className={classes.title}>
                  Search by Title:
                </Typography>
                <Input className={classes.searchInput} placeholder='Search by Title' onChange={this.onChangeHandler}/>
                <Dropdown />
                <Button className={classes.button}>Submit</Button>
              </form>
              <Link className={classes.link} to={'/edit-post-new'}>
                <Button className={classes.editAPost}>
                  Edit a Post
                </Button>
              </Link>
              <Typography className={classes.title}>
                Posts:
              </Typography>
              {error ? (
                  <Typography className={classes.errorMessage} variant="h4">There was a problem loading the posts.</Typography>
                ) : renderPosts.length > 0 && (
                <Posts posts={renderPosts}/>
              )}
          </div>
        );
      }
}

const mapStateToProps = ({posts}) => {
  return {
    posts: posts.posts,
    error: posts.error,
    searchResults: getSearchSelectorResults(posts.posts, posts.searchResults),
  };
};

const mapDispatchToProps = dispatch => { 
  return {
      getPostsRequest: bindActionCreators(getPostsRequest, dispatch),
      getDropDownResults: bindActionCreators(getDropDownResults, dispatch),
      getSearchResults: bindActionCreators(getSearchResults, dispatch),
  };
};

Homepage.propTypes = {
  posts: PropTypes.arrayOf(
    shape({
      title: string,
      body: string,
      id: number,
      userId: number,
    })
  ).isRequired,
  searchResults: PropTypes.arrayOf(
    shape({
      title: string,
      body: string,
      id: number,
      userId: number,
    })
  ).isRequired,
  error: PropTypes.string,
};


export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withStyles(styles)(Homepage));