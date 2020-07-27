import React from "react";
import { withStyles } from '@material-ui/styles';
import { Link } from 'react-router-dom';

const styles = (theme) => {
    return {
      root: {
        maxWidth: '980px',
        margin: 'auto', 
      },
      titleAndBodyWrapper: {
          padding: '15px',
      },
      titleAndBodyBorder: {
          border: '1px solid black',
          padding: '15px',
          margin: '10px',
      },
      titleAndBody: {
          fontSize: '20px',
      },
      link: {
        color: 'black',
        textDecoration: 'none',
        cursor: 'pointer',
        textAlign: 'center',
      },
    };
  };
  
class Posts extends React.Component {
    render() {
        const { posts, classes } = this.props;
        return (
          <div className={classes.root}>
              {posts.map((post) => (
                  <div key={post.id} className={classes.titleAndBodyWrapper}>
                    <div className={classes.titleAndBodyBorder}>
                        <div className={classes.titleAndBody}>
                            Title:
                        </div>
                        <div>
                            {post.title}
                        </div>
                    </div>
                    <div className={classes.titleAndBodyBorder}>
                        <div className={classes.titleAndBody}>
                            Body:
                        </div>
                        <div>
                            {post.body}
                        </div>
                    </div>
                    <Link to={`/edit-post-${post.id}`} className={classes.link}>
                        <div className={classes.titleAndBodyBorder}>
                            Edit
                        </div>
                    </Link>
                  </div>
              ))}
          </div>
        );
      }
}

export default withStyles(styles)(Posts);