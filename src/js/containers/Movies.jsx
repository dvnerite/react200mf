import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { movieSearch } from '../actions';

function mapStoreToProps(store) {
  return {
    inputValue: store.inputValue,
    movieInfo: store.movieInfo,
  };
}

class Movies extends React.Component {
  constructor(props) {
    super(props);

  }

  componentDidMount(){
    const { inputValue, dispatch } = this.props;
    dispatch(movieSearch(inputValue));
  }

  render() {

    return (
      <div>
        { this.props.movieInfo.Search != undefined ?
          this.props.movieInfo.Search.map((item) => (
            <div className='card'>
              <div className='card-body'>
                <img src={item.Poster} />
                <h4 key={item.imdbID}>{ item.Title }</h4>
                <h6>{ item.Year }</h6>
                <hr id='horizontalline' />
                <Link to={`/movie/:${item.imdbID}`}>
                  <button className="btn btn-primary">More Information!</button>
                </Link>
              </div>
            </div>
          )) : ''
        }
        
      </div>
    )
  }
}

export default connect(mapStoreToProps)(Movies);