import { 
    GET_ARTICLES,
    GET_ARTICLE,
    ADD_ARTICLE,
    UPDATE_ARTICLE,
    DELETE_ARTICLE
} from '../actions/types';

const initialState = {
    articles: [],
    article: {}
};

export default function(state = initialState, action) {
    switch (action.Type) {
        case GET_ARTICLES:
            return {
                ...state,
                articles: action.payload
            };
        case GET_ARTICLE:
            return {
                ...state,
                article: action.payload
            };
        case DELETE_ARTICLE:
            return {
                ...state,
                articles: state.articles.filter(
                    article => article.id !== action.payload
                )
            };
        case ADD_ARTICLE:
            return {
                ...state,
                articles: [action.payload, ...state.articles]
            };
        case UPDATE_ARTICLE:
            return {
                ...state,
                articles: state.articles.map(
                    article => article.id === action.payload.id
                        ? (article = action.payload)
                        : article
                )
            };
        default:
            return state;
    }
};