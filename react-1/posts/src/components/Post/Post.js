import React from 'react';

import './Post.css';

const post = (props) => {
    return (
        <article className="Post" onClick={props.clicked}>
            <h1>{props.title}</h1>
            <div className="Info">
                <div className="Author">{props.author}</div>
            </div>
        </article>

    )
};

// withRouter, the Post component gets the neartest router information, Posts
export default post;
// export default withRouter(post);