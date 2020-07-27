import React from "react";
import { withStyles } from '@material-ui/styles';
import { Link } from 'react-router-dom';

const styles = (theme) => {
    return {
      root: {
        maxWidth: '980px',
        margin: 'auto', 
        border: '1px solid #ccc',
        padding: '15px',
      },
      title: {
          fontSize: '25px',
          textAlign: 'center',
      },
      inputBorder: {
        border: '1px solid black',
        padding: '20px',
        margin: '15px',
      },
      header: {
        fontSize: '18px',
        margin: '15px 0',
      },
      textarea: {
          width: '80%',
          height: '150px',
      },
      input: {
          width: '80%',
      },
      button: {
        padding: '15px',
        margin: '15px',
        backgroundColor: 'white',
        border: '1px solid black',
        cursor: 'pointer',
      },
    };
  };
  
class EditForm extends React.Component {
    constructor(props){ 
        super(props);
        this.state = this.props.post;
    }

    componentDidMount() { 
        //should i be using the state from previous page and using selector or making another api call to fetch single post
        if (this.props.paramsId !== 'new' && !this.props.postInState) { 
            console.log('fetch post')
            this.props.getSinglePostRequest(this.props.paramsId)
        } 
    }

    componentDidUpdate(prevProps, prevState) { 
        const { post } = this.props;

        if (prevProps.post !== post) { 
            this.setState({
                body: post.body,
                id: post.id,
                title: post.title,
                userId: post.userId,
            })
        }
    }

  
    handleSubmit = (e) => {
        e.preventDefault();
        this.props.editPost(this.state);
    }

    handleInputChange = (e, type) => {  
        this.setState({
            [type]: e.target.value,
        })
    }

    render() {
        const { classes } = this.props;

        return (
          <form className={classes.root} onSubmit={this.handleSubmit}>
            <div className={classes.title}>
                Edit Form
            </div>
            <div>
                <div className={classes.inputBorder}>
                    <div className={classes.header}>
                        Title:
                    </div>
                    <input 
                        className={classes.input} 
                        placeholder='Title' 
                        onChange={(e) => this.handleInputChange(e, 'title')}
                        value={this.state.title}
                    />
                </div>
                <div className={classes.inputBorder}>
                    <div className={classes.header}>
                        Body:
                    </div>
                    <textarea 
                        className={classes.textarea} 
                        placeholder='Body'  
                        onChange={(e) => this.handleInputChange(e, 'body')}
                        value={this.state.body}
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

export default withStyles(styles)(EditForm);