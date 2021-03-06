import React, { Component } from 'react';
import axios from 'axios';

import './FullPost.css';

class FullPost extends Component {
    state = {
        loadedPost: null,
    }

    componentDidMount(prevProps) {
        console.log(this.props.match.params.id);
        this.loadData();
    }

    componentDidUpdate() {
        this.loadData();
    }

    loadData() {
        if (this.props.match.params.id) {
            // if (!this.state.loadedPost || (this.state.loadedPost && this.state.loadedPost.id !== this.props.id)) {
                // != checks for value equality and !== checks for value equality and type equality || convert type with "+"
            if ( !this.state.loadedPost || (this.state.loadedPost && this.state.loadedPost.id != this.props.match.params.id) ) {
                axios.get(`/posts/${this.props.match.params.id}`)
                    .then(res => {
                        // creates infinite loop
                        this.setState({ loadedPost: res.data });
                    })
                    .catch(err => {})
            }
        }
    }

    deletePostHandler = () => {
        axios.delete(`/posts/${this.props.match.params.id}`)
            .then(res => {
                console.log(res);
            })
    }

    render () {
        let post = <p style={{textAlign: 'center'}}>Please select a Post!</p>;
        if (this.props.match.params.id) {
            post = <p style={{textAlign: 'center'}}>Loading...</p>;
        }
        if (this.state.loadedPost) {
            post = (
                <div className="FullPost">
                    <h1>{this.state.loadedPost.title}</h1>
                    <p>{this.state.loadedPost.body}</p>
                    <div className="Edit">
                        <button onClick={this.deletePostHandler} className="Delete">Delete</button>
                    </div>
                </div>
    
            );
        }
        return post;
    }
}

export default FullPost;