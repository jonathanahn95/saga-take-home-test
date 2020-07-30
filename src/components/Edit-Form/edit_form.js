import React from "react";
import { withStyles } from '@material-ui/styles';
import Dropdown from '../Drop-Down/drop-down';
import { connect } from "react-redux";
import { editPost, setDropDownResults, getPostsRequest } from "../../state/Posts/Posts-Actions";
import { getSinglePostInState } from "../../state/Posts/Posts-Selectors";
import { Typography, Input } from '@material-ui/core';
import { bindActionCreators } from 'redux';
import PropTypes, { shape, number, string } from 'prop-types';

const styles = (theme) => {
    return {
      root: {
        maxWidth: '980px',
        margin: 'auto', 
        border: '1px solid #ccc',
        padding: theme.padding,
      },
      title: {
          fontSize: '25px',
          textAlign: 'center',
      },
      inputBorder: {
        border: theme.border,
        padding: '20px',
        margin: theme.margin,
      },
      header: {
        fontSize: '18px',
        margin: `${theme.margin} 0`
      },
      textarea: {
          width: '80%',
          height: '150px',
          fontFamily: 'Roboto, Helvetica, Arial, sans-serif',
          fontSize: '16px',
          padding: theme.padding,
      },
      input: {
          width: '80%',
          padding: theme.padding,
      },
      button: {
        padding: theme.padding,
        margin: theme.margin,
        backgroundColor: 'white',
        border: theme.border,
        cursor: 'pointer',
      },
    };
  };
  
class EditForm extends React.Component {
    constructor(props) { 
        super(props);
        this.state = this.props.post;
    }

    componentDidMount() { 
      this.props.getPostsRequest();
    }

    componentDidUpdate(prevProps, prevState) { 
        const { post } = this.props;

        //update state with foundPost in msp
        if (prevProps.post.id !== post.id) { 
            this.preFill(post);
        }
    }

    preFill(post) { 
      this.setState({
          body: post.body,
          id: post.id,
          title: post.title,
          userId: post.userId,
      })
    }

  
    handleSubmit = (e) => {
        e.preventDefault();
        this.props.editPost(this.state, this.props.history);
    }

    handleInputChange = (e, type) => {  
        this.props.setDropDownResults(e.target.value);
        
        this.setState({
            [type]: e.target.value,
        })
    }

    render() {
        const { classes } = this.props;
        const { title, body } = this.state;

        if (!this.props.post) { 
          return <div></div>
        };


        return (
          <form className={classes.root} onSubmit={this.handleSubmit}>
            <Typography className={classes.title}>
                Edit Form
            </Typography>
            <div>
                <div className={classes.inputBorder}>
                    <Typography className={classes.header}>
                        Title:
                    </Typography>
                    <Input 
                        className={classes.input} 
                        placeholder='Title' 
                        onChange={(e) => this.handleInputChange(e, 'title')}
                        value={title}
                    />
                    <Dropdown />
                </div>
                <div className={classes.inputBorder}>
                    <Typography className={classes.header}>
                        Body:
                    </Typography>
                    <textarea 
                        className={classes.textarea} 
                        placeholder='Body'  
                        onChange={(e) => this.handleInputChange(e, 'body')}
                        value={body}
                    />
                </div>
            </div>
            <button className={classes.button}>
                Edit Form
            </button>
          </form>
        );
      }
}


const mapStateToProps = ({ posts }, ownProps) => {
    const paramsId = ownProps.match.params.id;
    const foundPost = getSinglePostInState(posts, paramsId);

    // if url is /edit-post-new set it to a blank form, else if url is /edit-post-:id prefill it with foundPost
    const post = (foundPost && paramsId !== 'new') ? foundPost : {
      body: '',
      id: '',
      title: '',
      userId: '',
    };

    return {
      post,
      paramsId,
      dropdown: posts.dropdown,
      posts: posts.posts,
    };
  };
  
  const mapDispatchToProps = dispatch => { 
    return {
      editPost: bindActionCreators(editPost, dispatch),
      setDropDownResults: bindActionCreators(setDropDownResults, dispatch),
      getPostsRequest: bindActionCreators(getPostsRequest, dispatch),
    };
  };

  EditForm.propTypes = {
    title: string,
    body: string,
    id: string,
    userId: number,
  };
  
  export default connect(
    mapStateToProps,
    mapDispatchToProps
  )(withStyles(styles)(EditForm));
