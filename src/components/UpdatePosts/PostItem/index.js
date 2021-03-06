import React from "react";
import {deleteComment} from "../../../_actions/comments-actions";
import {useDispatch} from "react-redux";
import SecureCommentContent from "../../../_security/secure-comment-content";

const PostItem = ({post}) => {

    const date = new Date(post.comment_date)
    const dispatch = useDispatch()

    const handleDeleteComment = () => {
        try {
            deleteComment(dispatch, post._id)
        } catch (e) {
            alert("Uh oh! We weren't able to delete this comment")
        }
    }

    return (
        <div className={'list-group-item row border-0 m-0 p-0'}>
            <div className={`d-flex justify-content-between small p-0 m-0`}>
                <div>
                <span className={'small'}>
                    <span>
                        <i className={"fa fa-user-circle fa-2x pe-1 p-0 m-0"}/>
                    </span>
                    <span>
                        <strong> {post.username} </strong>
                    </span>
                    <span
                        className={'small text-muted'}>
                         - {date.toLocaleString()}
                    </span>
                </span>
                    <p>{post.comment}</p>
                </div>
                <SecureCommentContent user_id={post.user_id}>
                    <i className={"fa fa-times text-muted"} onClick={handleDeleteComment}/>
                </SecureCommentContent>
            </div>
        </div>
    )
}

export default PostItem;