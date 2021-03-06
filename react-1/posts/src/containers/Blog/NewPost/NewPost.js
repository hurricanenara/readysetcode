import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import axios from 'axios';

import './NewPost.css';

class NewPost extends Component {
    state = {
        title: '',
        content: '',
        author: 'Max',
        submitted: false,
    }

    componentDidMount() {
        // if auth is false -> this.props.history.replace('/posts); // alternative to checking auth state in Route component in Blog.js
        console.log(this.props);
    }

    postDataHandler = () => {
        const post = {
            title: this.state.title,
            body: this.state.content,
            author: this.state.author,
        }
        axios.post(`/posts`, post)
            .then(res => {
                console.log(res);
                // pushing onto the history stack allows user to go back
                this.props.history.push('/posts'); // you can also use history.replace
                // using the Redirect component replaces the previous page so you can't use back button
                // meaning, it replaces the current page and doesn't push a new one to the stack
                // this.setState({ submitted: true });
            })
    }

    render () {
        let redirect = null;
        if (this.state.submitted) {
            redirect = <Redirect to="/posts" />
        }
        return (
            <div className="NewPost">
                {redirect}
                <h1>Add a Post</h1>
                <label>Title</label>
                <input type="text" value={this.state.title} onChange={(event) => this.setState({title: event.target.value})} />
                <label>Content</label>
                <textarea rows="4" value={this.state.content} onChange={(event) => this.setState({content: event.target.value})} />
                <label>Author</label>
                <select value={this.state.author} onChange={(event) => this.setState({author: event.target.value})}>
                    <option value="Max">Max</option>
                    <option value="Manu">Manu</option>
                </select>
                <button onClick={this.postDataHandler}>Add Post</button>
            </div>
        );
    }
}

export default NewPost;