import React, {Component} from 'react';
import PostsService from "../../../services/postsService";
import PostWrite from "../post-write/postWrite";
import {Route, Switch,withRouter} from "react-router-dom";
import FulInfoPost from "../full-chosen-one-info/fulInfoPost";

class PostsList extends Component {
    PostsService = new PostsService()
    state = {posts:[]}
    async componentDidMount() {
        let posts = await this.PostsService.posts()
        this.setState({posts})
    }

    render() {
        let {posts} = this.state
        let {match:{url}} = this.props
        return (
            <div>
                <div className={'all-chosen-one-info'}>
                    <Switch>
                        <Route path={`${url}/:postId`} render={(props) => {
                        const {match:{params:{postId}}} = props
                        return <FulInfoPost postId={postId} key={postId}/>
                        }}/>
                </Switch>
                </div>
                {
                    posts.map(post => <PostWrite item={post} key={post.id}/>)
                }

            </div>
        );
    }
}

export default withRouter (PostsList);