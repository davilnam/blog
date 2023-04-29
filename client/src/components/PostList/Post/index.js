import {
    Avatar,
    Card,
    CardActions,
    CardContent,
    CardHeader,
    CardMedia,
    IconButton,
    Typography
} from "@material-ui/core"
import MoreVertIcon from '@material-ui/icons/MoreVert'
import FavoriteIcon from '@material-ui/icons/Favorite'
import moment from 'moment'
import useStyles from './style'
import React, { useState } from 'react'
import { useDispatch } from "react-redux"
import * as actions from '../../../redux/actions/postActions'
import { updatePost, deletePost } from "../../../api/postApi"
import './style.css'

function Post({ post }) {
    const classes = useStyles();
    const dispatch = useDispatch();
    const onClick = React.useCallback(() => {
        const fetchData = async () => {
            const copyPost = { ...post, likeCount: post.likeCount + 1 }
            const response = await updatePost(copyPost);
            console.log(response);
            if (response && response.data) {
                dispatch(actions.updatePostSuccess(response.data.post))
            }
        };
        fetchData();
    }, [post, dispatch])


    const [showConfirm, setShowConfirm] = useState(false);

    const handleDeletePost = React.useCallback(() => {
        const fetchData = async () => {
            const _id = post._id
            const response = await deletePost(_id);
            console.log(response);
            if (response && response.data) {
                dispatch(actions.deletePostSuccess(response.data.post._id))
            }
        };
        fetchData()
        setShowConfirm(false)
    }, [post, dispatch])

    return (
        <Card>
            <CardHeader
                avatar={<Avatar>A</Avatar>}
                title={post.author}
                subheader={moment(post.updateAt).format('HH:MM MMM DD, YYYY')}
                action={
                    <IconButton className="delete-icon">
                        <MoreVertIcon onClick={() => setShowConfirm(!showConfirm)} />
                        {showConfirm && (
                            <div className="confirm-delete">
                                <p>Bạn có muốn xóa không?</p>
                                <button
                                    className="yes-btn"
                                    onClick={handleDeletePost}
                                >
                                    Có
                                </button>
                                <button
                                    className="no-btn"
                                    onClick={() => setShowConfirm(false)}
                                >
                                    Không
                                </button>
                            </div>
                        )}

                    </IconButton>
                }
            />
            <CardMedia image={post.attachment} title='title' className={classes.media} />
            <CardContent>
                <Typography variant="h5" color="textPrimary">
                    {post.title}
                </Typography>
                <Typography variant="body2" component="p" color='textSecondary'>
                    {post.content}
                </Typography>
            </CardContent>
            <CardActions>
                <IconButton>
                    <FavoriteIcon onClick={onClick} />
                    <Typography component="span" color="textSecondary">
                        {post.likeCount} Like
                    </Typography>

                </IconButton>
            </CardActions>

        </Card>
    )
}

export default Post