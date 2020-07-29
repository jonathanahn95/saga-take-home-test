import React from "react";
import { withStyles } from '@material-ui/styles';
import { connect } from "react-redux";
import { Link } from 'react-router-dom';
import { clearSearchResults } from "../../state/Posts/Posts-Actions";
import { withRouter } from 'react-router';

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
    componentWillUnmount() { 
      this.props.clearSearchResults();
    }

    componentDidUpdate(prevProps, prevState) { 
      if (prevProps.paramsId !== this.props.paramsId) { 
        this.props.clearSearchResults();
      }
    }
    
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

const mapStateToProps = (state, ownProps) => {
  const paramsId = ownProps.match.params.id;

  return {
      results: state.posts.results,
      paramsId,
  };
};


const mapDispatchToProps = dispatch => { 
  return {
    clearSearchResults: () => dispatch(clearSearchResults()),
  };
};


export default withRouter(connect(
  mapStateToProps,
  mapDispatchToProps
)(withStyles(styles)(DropDown)));