import React, {Component} from 'react';
import PostsService from "../../../services/postsService";
import PostInfoWrite from "./post-info-wrire/postInfoWrite";

class FulInfoPost extends Component {
    PostsService = new PostsService()
    state = {post : null}

    async componentDidMount() {
        let {postId} = this.props
        let post = await this.PostsService.post(postId)
        this.setState({post})
    }

    render() {
        let {post} =this.state
        return (
            <div>
                {post !== null && < PostInfoWrite post={post}/>}
            </div>
        );
    }
}

export default FulInfoPost;