import React from 'react'
import Header from '../components/Header'
import PostList from '../components/PostList'
import { Container, Fab } from '@material-ui/core'
import AddIcon from '@material-ui/icons/Add'
import useStyles from './styles'
import { useDispatch } from 'react-redux'
import * as actions from '../redux/actions/modalActions'
import CreatePostModal from '../components/CreatePostModal'

function HomePage() {
    const classes = useStyles();
    const dispatch = useDispatch();
    const openCreatePostModal = React.useCallback(() => {
        dispatch(actions.showModal())
    }, [dispatch]);
    return (
        <Container maxWidth="lg">
            <Header />
            <PostList />
            <CreatePostModal />
            <Fab
                color='primary'
                className={classes.fab}
                onClick={openCreatePostModal}
            >
                <AddIcon />
            </Fab>
        </Container>
    )
}

export default HomePage