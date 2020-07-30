import React from "react";
import { withRouter } from 'react-router';
import { connect } from "react-redux";
import { Link } from 'react-router-dom';
import { withStyles } from '@material-ui/styles';
import { clearDropDownResults } from "../../state/Posts/Posts-Actions";
import { getSearchSelectorResults } from '../../state/Posts/Posts-Selectors';

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
      this.props.clearDropDownResults();
    }

    componentDidUpdate(prevProps, prevState) { 
      if (prevProps.paramsId !== this.props.paramsId) { 
        this.props.clearDropDownResults();
      }
    }
    
    render() {
      const { dropdown, classes } = this.props;
      
      if (dropdown.length === 0 || dropdown.length === 100) { 
        return null;
      }
        
        return (
          <div className={classes.root}>
            {dropdown.map((dropdown) => (
                <Link to={`/edit-post-${dropdown.id}`} className={classes.link} key={dropdown.id}>
                    <div className={classes.option}>
                        {dropdown.title}
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
      dropdown: getSearchSelectorResults(state.posts.posts, state.posts.dropdown),
      paramsId,
  };
};


const mapDispatchToProps = dispatch => { 
  return {
    clearDropDownResults: () => dispatch(clearDropDownResults()),
  };
};


export default withRouter(connect(
  mapStateToProps,
  mapDispatchToProps
)(withStyles(styles)(DropDown)));