import {
    FETCH_QUOTE_START,
    FETCH_QUOTE_SUCCESS,
    FETCH_QUOTE_FAILURE
  } from '../actions';

const initialState = {
    isFetching: false,
    quoteText: "",
    imgUrl: "https://upload.wikimedia.org/wikipedia/commons/0/0f/Kanye_West_at_the_2009_Tribeca_Film_Festival-2_%28cropped%29.jpg",
    error: ''
}


const reducer = (state = initialState, action) => {
    switch (action.type) {
        case FETCH_QUOTE_START:
            return {
                ...state,
                isFetching: true,
                error: ''
            };
        case FETCH_QUOTE_SUCCESS:
            return {   
                ...state,
                isFetching: false,
                error: '',
                quoteText: action.payload
            };
        case FETCH_QUOTE_FAILURE:
            return {
                ...state,
                isFetching: false,
                error: action.payload
            }
        default:
            return state;
    };
}
    
export default reducer;