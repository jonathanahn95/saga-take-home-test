import React from "react";
import { withRouter } from 'react-router';
import { connect } from "react-redux";
import { Link } from 'react-router-dom';
import { withStyles } from '@material-ui/styles';
import { clearDropDownResults } from "../../state/Posts/Posts-Actions";
import { getSearchSelectorResults } from '../../state/Posts/Posts-Selectors';
import { Typography, Grid } from '@material-ui/core';
import { bindActionCreators } from 'redux';
import PropTypes, { shape, number, string } from 'prop-types';

const styles = (theme) => {
    return {
      root: {
        overflow: 'hidden',
        overflowY: 'scroll',
        height: '200px',
        border: theme.border,
      },
      link: {
          color: 'black',
          textDecoration: 'none',
      },
      option: {
          padding: theme.padding,
          '&:hover': {
              backgroundColor: '#ccc',
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
          <Grid container className={classes.root}>
              {dropdown.map((dropdown) => (
                  <Grid item md={12} xs={12} key={dropdown.id}>
                    <Link to={`/edit-post-${dropdown.id}`} className={classes.link}>
                        <Typography className={classes.option}>
                            {dropdown.title}
                        </Typography>
                    </Link>
                  </Grid>
              ))}
          </Grid>
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
    clearDropDownResults: bindActionCreators(clearDropDownResults, dispatch),
  };
};

DropDown.propTypes = {
  dropdown: PropTypes.arrayOf(
    shape({
      title: string,
      body: string,
      id: number,
      userId: number,
    })
  ).isRequired,
};

export default withRouter(connect(
  mapStateToProps,
  mapDispatchToProps
)(withStyles(styles)(DropDown)));