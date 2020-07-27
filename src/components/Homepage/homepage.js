import React from "react";
import { withStyles } from '@material-ui/styles';
import Posts from '../Posts/posts';

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

    render() {
        const { posts, classes } = this.props;
        
        return (
          <div className={classes.root}>
              <div>
                Posts:
              </div>
              {posts.posts.length > 0 && (
                <Posts posts={posts.posts} />
              )}
          </div>
        );
      }
}

export default withStyles(styles)(Homepage);