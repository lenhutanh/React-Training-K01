import { Types } from "../actions/users";

const INITIAL_STATE = {
    items: [],
    item: { 
        address: {
            geo: {}
        }, 
        company: {}
    },
    error: ''
};

export default function users(state = INITIAL_STATE, action) {
    switch(action.type) {
        case Types.GET_USERS_SUCCESS: {
            return {
                ...state,
                items: action.payload.items
            }
        }
        case Types.GET_USER_BY_ID_SUCCESS: {
            return {
                ...state,
                item: action.payload.item
            }
        }
        case Types.USERS_ERROR: {
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