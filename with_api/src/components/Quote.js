import React from 'react';
import { connect } from 'react-redux';
import Loader from 'react-loader-spinner';
import { getQuote } from '../actions'


function Quote(props) {
    
    console.log('props from Quote component: ', props);
    return (
        
        <div>
            <h1> Kanye says what? </h1>
            <img src={props.imgUrl} alt="Kanye West" />
            <button onClick={props.getQuote}>
                {props.isLoading ? (
                    <Loader type="TailSpin" color="#00BFFF" height="15" width="100" />
                ) : (
                        "Get random Kanye quote"
                    )}
            </button>
            <p> {props.quoteText} </p>
        </div>
    );
}


const mapStateToProps = state => {
    return {
        isFetching: state.isFetching,
        quoteText: state.quoteText,
        imgUrl: state.imgUrl
    };
};

export default connect(mapStateToProps, {getQuote})(Quote);