import { Types } from "../actions";

const INITIAL_STATE = {
    items: [],
    error: ''
};

export default function postsReducer(state = INITIAL_STATE, action) {
    switch(action.type) {
        
        case Types.CREATE_POST_SUCCESS: {
            return {
                ...state,
                items: [...state.items, action.payload]
            }
        }
        case Types.DELETE_POST_SUCCESS: {
            return {
                ...state,
                items: state.items.filter(post => post.id != action.payload.postId)
            }
        }
        case Types.EDIT_POST_SUCCESS: {
            return {
                ...state,
                items: state.items.map(post => post.id === action.payload.id ? action.payload : post)
            }
        }
        case Types.POSTS_ERROR: {
            console.log(action.payload.error);
            return {
                ...state,
                error: action.payload.error
            }
        }
        default: {
            return state;
        }
    }
}