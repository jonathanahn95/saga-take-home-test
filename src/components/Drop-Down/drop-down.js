import React from "react";
import { withStyles } from '@material-ui/styles';
import { connect } from "react-redux";
import { Link } from 'react-router-dom';

const styles = (theme) => {
    return {
      root: {
        overflow: 'hidden',
        overflowY: 'scroll',
        height: '200px',
        border: '1px solid black',
      },
      link: {
          color: 'black',
          textDecoration: 'none',
      },
      option: {
          padding: '15px',
          '&:hover': {
              backgroundColor: 'blue',
              color: 'white',
          },
      },
    };
  };
  
class DropDown extends React.Component {
    render() {
      const { results, classes } = this.props;
        
        return (
          <div className={classes.root}>
            {results.map((result) => (
                <Link to={`/edit-post-${result.id}`} className={classes.link} key={result.id}>
                    <div className={classes.option}>
                        {result.title}
                    </div>
                </Link>
            ))}
          </div>
        );
      }
}

const mapStateToProps = (state) => {
  return {
      results: state.posts.results
  };
};

export default connect(
  mapStateToProps,
  null
)(withStyles(styles)(DropDown));