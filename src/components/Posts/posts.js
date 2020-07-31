import React from "react";
import { Link } from 'react-router-dom';
import { withStyles } from '@material-ui/styles';
import { Button, Typography, Grid } from '@material-ui/core';
import PropTypes, { shape, number, string } from 'prop-types';

const styles = (theme) => {
    return {
      root: {
        maxWidth: '980px',
        margin: 'auto', 
        border: '1px solid #ccc',
        borderRadius: '5px',
      },
      titleAndBodyWrapper: {
          padding: theme.padding,
      },
      titleAndBodyBorder: {
          border: theme.border,
          padding: theme.padding,
          margin: '10px',
          borderRadius: '5px',
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

function Posts(props) {
    const { classes, posts } = props;

    if (!posts) { 
        return null;
    };

    return (
        <Grid className={classes.root} container>
            {posts.map((post) => (
                <Grid item md={12} xs={12} key={post.id} className={classes.titleAndBodyWrapper}>
                    <div className={classes.titleAndBodyBorder}>
                        <Typography className={classes.titleAndBody}>
                            Title:
                        </Typography>
                        <Typography>
                            {post.title}
                        </Typography>
                    </div>
                    <div className={classes.titleAndBodyBorder}>
                        <Typography className={classes.titleAndBody}>
                            Body:
                        </Typography>
                        <Typography>
                            {post.body}
                        </Typography>
                    </div>
                    <Link to={`/edit-post-${post.id}`} className={classes.link}>
                        <Button className={classes.titleAndBodyBorder}>
                            Edit Post
                        </Button>
                    </Link>
                </Grid>
            ))}
        </Grid>
    )
  }

  Posts.propTypes = {
    posts: PropTypes.arrayOf(
      shape({
        title: string,
        body: string,
        id: number,
        userId: number,
      })
    ).isRequired,
  };

  export default withStyles(styles)(Posts)