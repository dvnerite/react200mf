import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { movieSearchDetails } from '../actions';

function mapStoreToProps(store) {
    return {
      inputValue: store.inputValue,
      movie: store.movie,
    };
  }

class MovieDetails extends React.Component {
  constructor(props) {
    super(props);
    console.log(this.props)
  };

  componentDidMount(){
    const id = (this.props.match.params.id).substring(1);
    console.log(id, "inside componentedidmount ID")
    const dispatch = this.props.dispatch;
    dispatch(movieSearchDetails(id));
  }

  render() {
    return (
      <div>
        { this.props.movie != undefined ?
          <div>
            <Link to={`/movieInfo/:${this.props.inputValue}`}>
              <button>Go Back</button>
            </Link>
            <div className='row'>
              <div className='col-4'>
                <img src={this.props.movie.Poster} />
              </div>
              <div className='col-4'>
                <div className='card'>
                  <div className='card-header formatMovieHeader'>Movie Details</div>
                  <div className='card-body'>{this.props.movie.Title}}</div>
                  <div className='card-body'>
                    <div className="btn-toolbar" role="toolbar" aria-label="Toolbar with button groups">
                      <div className="btn-group" role="group" aria-label="First group">
                        <button type="button" className="btn btn-success">Released {this.props.movie.Year}</button>
                      </div>
                      <div className="btn-group" role="group" aria-label="Second group">
                        <button type="button" className="btn btn-success">{this.props.movie.Runtime}</button>
                      </div>
                      <div className="btn-group" role="group" aria-label="Third group">
                        <button type="button" className="btn btn-success">{this.props.movie.Genre}</button>
                      </div>
                    </div>
                  </div>
                  <div className='card-body'>
                    <p>{this.props.movie.Plot}</p>
                  </div>
                  <div className='card-body'>
                    <p>{this.props.movie.Awards}</p>
                  </div>
                  <div className='card-body'>
                    <p>Metascore: {this.props.movie.Metascore}</p>
                    <p>IMDB Rating: {this.props.movie.imdbRating}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          : <div></div>}
      </div>
    )
  }
}

export default connect(mapStoreToProps)(MovieDetails);