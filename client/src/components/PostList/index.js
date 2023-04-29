import { Grid } from '@material-ui/core'
import Post from './Post'
import { useEffect } from "react";
import { getPosts } from '../../api/postApi'
import { useDispatch, useSelector } from 'react-redux'
import * as actions from '../../redux/actions/postActions'

function PostList() {
    const dispatch = useDispatch();

    useEffect(() => {
        const fetchData = async () => {
            const response = await getPosts();
            console.log(response);
            if (response && response.data) {
                dispatch(actions.getPostSuccess(response.data.posts))
            }
        };
        fetchData();
    }, [dispatch]);

    const posts = useSelector(state => state.post.data);
    console.log(posts);

    return (
        <Grid container spacing={2} alignContent='stretch'>
            {posts && posts.map(post => {
                return (
                    <Grid item xs={12} sm={6}>
                        <Post key={post.id} post={post} />
                    </Grid>
                )
            })}
        </Grid>
    )
}

export default PostList