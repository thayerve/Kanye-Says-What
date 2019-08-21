import {
    FETCH_QUOTE_START,
    FETCH_QUOTE_SUCCESS,
    FETCH_QUOTE_FAILURE
  } from '../actions';

const photos = [
    'https://www.biography.com/.image/t_share/MTU0OTkwNDUxOTQ5MDUzNDQ3/kanye-west-attends-the-christian-dior-show-as-part-of-the-paris-fashion-week-womenswear-fall-winter-2015-2016-on-march-6-2015-in-paris-france-photo-by-dominique-charriau-wireimage-square.jpg', 
    'https://www.cheatsheet.com/wp-content/uploads/2019/07/kanye-west-wealth-source-1024x683.jpg', 
    'https://pixel.nymag.com/imgs/fashion/daily/2019/07/09/9-kanye-west.w330.h412.jpg', 
    'https://relevantmagazine.com/wp-content/uploads/2018/04/kanyewest.png', 
    'https://cdn.cnn.com/cnnnext/dam/assets/190710090348-kanye-west-exlarge-169.jpg', 
    'https://consequenceofsound.net/wp-content/uploads/2018/09/kanye-west-yandhi-release-saturday-joshua-mellin1.png', 
    'https://townsquare.media/site/812/files/2019/01/Kanye-West-Legal-Case.jpg',
    'https://dazedimg-dazedgroup.netdna-ssl.com/900/azure/dazed-prod/1230/9/1239998.jpg',
    'https://media.gq.com/photos/5ad93798ceb93861adb912d8/1:1/w_2687,h_2687,c_limit/kanye-west-0814-GQ-FEKW01.01.jpg',
    'https://media.npr.org/assets/artslife/arts/2010/11/kanye-west/kanye-west-64dcbf61c994ebb0c9325c6d62905dc3aa5326e4-s800-c85.jpg',
    'https://directlyrics.com/img/upload/kanye-west-snl-2018.jpg'
];

const randomPhoto = photos[Math.floor(Math.random()*photos.length)];

const initialState = {
    isFetching: false,
    quoteText: "",
    imgUrl: randomPhoto,
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
                quoteText: action.payload,
                imgUrl: photos[Math.floor(Math.random()*photos.length)]
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