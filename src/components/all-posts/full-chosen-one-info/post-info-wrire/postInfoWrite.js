import React, {Component} from 'react';

class PostInfoWrite extends Component {
    render() {
        let {post}= this.props
        return (
            <div>
                <ul>
                    <li>userId : {post.userId}</li>
                    <li>id : {post.id}</li>
                    <li>title : {post.title}</li>
                    <li>body : {post.body}</li>
                </ul>
            </div>
        );
    }
}

export default PostInfoWrite;