import React, {Component} from 'react';
import CommentsService from "../../../services/commentsService";
import Comment from "../comment-write/comment";
import {Route, Switch, withRouter} from "react-router-dom";
import CommentInfo from "../full-info/commentInfo";

class CommentsList extends Component {
    state = {comments : []}
    CommentsService = new CommentsService()
    async componentDidMount() {
        await this.CommentsService.comments().then(comments => this.setState({comments}))
    }

    render() {
        let {comments} =this.state
        let {match:{url}} = this.props

        return (
            <div>
                <div className={'all-chosen-one-info'}>
                    <Switch>
                        <Route path={`${url}/:id`} render={(props) => {
                            const {match:{params:{id}}} = props
                            return <CommentInfo commentId={id} key={id}/>
                        }}/>
                    </Switch>
                </div>
                {comments.map(comment => <Comment item={comment} key={comment.id}/>)}
            </div>
        );
    }
}

export default withRouter(CommentsList);