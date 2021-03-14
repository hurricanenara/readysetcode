import React, { Component } from 'react';
// import axios from 'axios';
import { Route, NavLink, Switch, Redirect } from 'react-router-dom';
import './Blog.css';
import Posts from '../Blog/Posts/Posts';
import asyncComponent from '../../hoc/asyncComponent';
// import NewPost from './NewPost/NewPost';
const AsyncNewPost = asyncComponent(() => {
    // dynamic import syntax, our webpack will creat a small 'chunk' upon new post navigation
    return import('./NewPost/NewPost');
});

class Blog extends Component {
    state = {
        auth: true,
    }
    render () {
        return (
            <div className={"Blog"}>
                <header>
                    <nav>
                        <ul>
                            <li><NavLink
                             to="/posts"
                              exact
                              activeClassName="my-active"
                              activeStyle={{
                                  color: "#fa923f",
                                  textDecoration: 'underline'
                              }}>Posts</NavLink></li>
                            <li><NavLink to={{
                                // absolute path vs relative path
                                // absolute - always appended to your domain
                                // default will always be absolute
                                // relative - append to this.props.match.url + /new-post
                                pathname: '/new-post',
                                hash: '#submit',
                                search: '?quick-submit=true'
                            }}>New Post</NavLink></li>
                        </ul>
                    </nav>
                </header>
                {/* <Route path="/" exact render={() => <h1>Home</h1>} />
                <Route path="/" render={() => <h1>Home 2</h1>} /> */}
                <Switch>
                    {/* New Post currently gets loaded no matter what, even if user never visits this route */}
                    {/* So we need code splitting or lazy loading */}
                    { this.state.auth ? <Route path="/new-post" component={AsyncNewPost} /> : null}
                    <Route path="/posts" component={Posts} />
                    {/* This route render won't work with <Redirect from to /> */}
                    {/* 404 catcher */}
                    <Route render={() => <h1>Not found</h1>} /> 
                    {/* <Redirect from="/" to="/posts" /> */}
                    {/* <Route path="/" component={Posts} /> */}
                    {/* <Route path="/:id" exact component={FullPost} /> */}
                </Switch>
            </div>
        );
    }
}

export default Blog;