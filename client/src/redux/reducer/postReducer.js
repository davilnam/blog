import actionTypes from "../actions/actionTypes"

const initState = {
    isLoading: false,
    isShow: false,
    data: []
}

const postReducer = (state = initState, action) => {
    switch (action.type) {
        case actionTypes.GET_POST_REQUEST:
            return {
                ...state,
                isLoading: true
            }
        case actionTypes.GET_POST_SUCCESS:
            const data = [...action.data]
            return {
                ...state,
                isLoading: false,
                data: data
            }
        case actionTypes.GET_POST_FAILURE:
            return {
                ...state,
                isLoading: false,
            }
        case actionTypes.CREATE_POST_FAILURE:
            return {
                ...state,
                isLoading: false
            }
        case actionTypes.CREATE_POST_SUCCESS:
            return {
                ...state,
                isLoading: false,
                data: [...state.data, action.post],
                isShow: false
            }
        case actionTypes.CREATE_POST_REQUEST:
            return {
                ...state,
                isLoading: true
            }
        case actionTypes.SHOW_CREATE_POST_MODAL:
            return {
                ...state,
                isShow: true
            }
        case actionTypes.HIDE_CREATE_POST_MODAL:
            return {
                ...state,
                isShow: false
            }
        case actionTypes.UPDATE_POST_SUCCESS:
            const dataCopy = [...state.data].map((post) => {
                if (post._id === action.post._id) {
                    post = action.post
                }
                return post
            })
            return {
                ...state,
                data: dataCopy
            }
        case actionTypes.DELETE_POST_SUCCESS:
            const newData = [...state.data].filter(post => {
                return post._id !== action._id
            })
            return {
                ...state,
                data: newData
            }
        default:
            return state
    }
}

export default postReducer