import React from 'react';
import { connect } from 'react-redux';
import Loader from 'react-loader-spinner';
import { getQuote } from '../actions';
import { Header, Card, Button } from 'semantic-ui-react';



function Quote(props) {

    // console.log('props from Quote component: ', props);
    return (
        
        <div className="quote">
            <Header as='h1'> Kanye says what? </Header>
            <Card fluid 
            href='https://twitter.com/kanyewest'
            image={props.imgUrl} 
            description={props.quoteText} 
            />

            <Button onClick={props.getQuote}>
                {props.isLoading ? (
                    <Loader type="TailSpin" color="#00BFFF" height="15" width="100" />
                ) : (
                        "Get random Kanye quote"
                    )}
            </Button>
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