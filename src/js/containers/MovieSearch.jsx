import React from 'react';
import { connect } from 'react-redux';
import { movieRequest } from '../actions';
import { Link } from 'react-router-dom';


function mapStoreToProps(store) {
return {
    inputValue: store.inputValue,
    movieInfo: store.movieInfo,
};
}

class MovieSearch extends React.Component {
constructor(props) {
    super(props);
    this.handleMovieRequest = this.handleMovieRequest.bind(this);
}

handleMovieRequest(event) {
    const { dispatch } = this.props;
    const { value } = event.target;
    dispatch(movieRequest(value));
}

render() {
    const { inputValue } = this.props;

    return (
    <div className='card'>
        <div className="input-group">
        <input type="text" className="form-control" placeholder="Enter movie" value={ inputValue } onChange={ this.handleMovieRequest }/>
        <Link to={`/movieInfo/:${inputValue}`}>
            <button
            type='button'
            className='btn '>Search Movie!
            </button>
        </Link>
        </div>
    </div>
    )
}
}

export default connect(mapStoreToProps)(MovieSearch);