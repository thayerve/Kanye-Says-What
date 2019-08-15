import React from 'react';
import { connect } from 'react-redux';
import Loader from 'react-loader-spinner';
import { getQuote } from '../actions';
import { Header, Card } from 'semantic-ui-react';



function Quote(props) {
    
    console.log('props from Quote component: ', props);
    return (
        
        <div>
            <Header as='h1'> Kanye says what? </Header>
            <Card
            image={props.imgUrl} 
            description={props.quoteText} 
            />
            
            <button onClick={props.getQuote}>
                {props.isLoading ? (
                    <Loader type="TailSpin" color="#00BFFF" height="15" width="100" />
                ) : (
                        "Get random Kanye quote"
                    )}
            </button>
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