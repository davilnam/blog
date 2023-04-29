import React, { useState } from 'react'
import { Button, Modal, TextField, TextareaAutosize } from '@material-ui/core'
import { useSelector, useDispatch } from 'react-redux'
import useStyles from './style'
import FileBase64 from 'react-file-base64'
import * as actions from '../../redux/actions/postActions'
import { hideModal } from '../../redux/actions/modalActions'
import { createPost } from '../../api/postApi'

function CreatePostModal() {
    const [data, setData] = useState({
        title: '',
        content: '',
        attachment: ''
    })
    const classes = useStyles()

    const dispatch = useDispatch()

    const onClose = React.useCallback(() => {
        dispatch(hideModal())
    }, [dispatch])

    const isShow = useSelector(state => state.post.isShow)
    const onSubmit = React.useCallback(() => {
        console.log(data)
        const fetchData = async () => {
            const response = await createPost(data);
            console.log(response);
            if (response && response.data) {
                dispatch(actions.createPostSuccess(response.data.post))
            }
        };
        fetchData();
        setData({
            title: '',
            content: '',
            attachment: ''
        })
    }, [data, dispatch])


    return (
        <Modal open={isShow} onClose={onClose}>
            <div className={classes.paper} id='simple-modal-title'>
                <h2>Create New Post</h2>
                <form noValidate autoComplete='off' className={classes.form}>
                    <TextField
                        className={classes.title}
                        required
                        label="Title"
                        value={data.title}
                        onChange={(e) => setData({ ...data, title: e.target.value })}
                    />
                    <TextareaAutosize
                        className={classes.textarea}
                        minRows={10}
                        maxRows={15}
                        placeholder='Content...'
                        value={data.content}
                        onChange={(e) => setData({ ...data, content: e.target.value })}
                    />
                    <FileBase64
                        accept="image/*"
                        multiple={false}
                        type='file'
                        value={data.attachment}
                        onDone={({ base64 }) => setData({ ...data, attachment: base64 })}
                    />
                    <div className={classes.footer}>
                        <Button
                            variant='contained'
                            color='primary'
                            component='span'
                            fullWidth
                            onClick={onSubmit}
                        >
                            Create
                        </Button>
                    </div>
                </form>
            </div>
        </Modal>
    )
}

export default CreatePostModal