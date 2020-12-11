import React, {Component} from 'react';

class CommentInfoWriter extends Component {
    render() {
        let {item} = this.props
        return (
            <div>
                <ul>
                    <li>postId : {item.postId}</li>
                    <li>id : {item.id}</li>
                    <li>name " {item.name}</li>
                    <li>email : {item.email}</li>
                    <li>body : {item.body}</li>
                </ul>
            </div>
        );
    }
}

export default CommentInfoWriter;