import React, { Component } from 'react';
import Post from '../../../components/Post/Post';
import './Posts.css';
import { Route } from 'react-router-dom';
import FullPost from '../FullPost/FullPost';
// import { Link } from 'react-router-dom';
import axios from '../../../axios';

class Posts extends Component {
    state = {
        posts: []
    }

    componentDidMount() {
        console.log(this.props);
        axios.get(`/posts`)
            .then(response => {
                const posts = response.data.slice(0, 4);
                const updatedPosts = posts.map(post => {
                    return {
                        ...post,
                        author: "Nara"
                    }
                })
                this.setState({ posts: updatedPosts });
            })
            .catch(err => {
                console.log(err);
                // this.setState({ error: true });
            })
    }

    postSelectedHandler = id => {
        // alternative to Link in render()
        // this.props.history.push({pathname: '/' + id});
        this.props.history.push(`/posts/${id}`);
    }

    render() {
        let posts = <p style={{ textAlign: 'center' }}>Something went wrong</p>
        if (!this.state.error) {
            posts = this.state.posts.map(post => {
                return (
                // <Link to={`posts/${post.id}`} key={post.id}>
                <Post
                key={post.id}
                title={post.title}
                author={post.author}
                clicked={() => this.postSelectedHandler(post.id)}
                />
                // </Link>
                )
            });
        }
        return (
            <div>
                <section className="Posts">
                    { posts }
                </section>
                {/* makes path dynamic (relative path) */}
                <Route path={this.props.match.url + '/:id'} exact component={FullPost} />
            </div>
        );
    }
}

export default Posts;