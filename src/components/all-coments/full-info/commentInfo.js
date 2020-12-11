import React, {Component} from 'react';
import CommentsService from "../../../services/commentsService";
import CommentInfoWriter from "./info-write/CommentInfoWriter";

class CommentInfo extends Component {
    CommentsService = new CommentsService()
    state = {comment:null}
    async componentDidMount() {
        let {commentId} =this.props
        let comment = await this.CommentsService.comment(commentId)
        this.setState({comment})
    }

    render() {
        let {comment} =this.state
        return (
            <div>
                {
                    comment !== null && <CommentInfoWriter item={comment}/>
                }
            </div>
        );
    }
}

export default CommentInfo;