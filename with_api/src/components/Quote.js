import React from 'react';
import { connect } from 'react-redux';
import Loader from 'react-loader-spinner';

function Quote(props) {


    return (
        <>
            <h1> Kanye says what? </h1>
            <img src={props.imgUrl} alt="Kanye West" />
            <button onClick={props.getQuote}>
                {props.isLoading ? (
                    <Loader type="TailSpin" color="#00BFFF" height="15" width="100" />
                ) : (
                        "Get random Kanye quote"
                    )}
            </button>
            <p> {props.quote} </p>
        </>
    );
}


const mapStateToProps = state => {
    return {
        isLoading: state.isLoading,
        quoteText: state.quoteText
    };
};

export default connect(mapStateToProps, {})(Quote);