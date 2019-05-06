import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Movie from './Movie';

export default class SavedList extends Component {
  constructor(props) {
    super(props);
  }

  // addToSavedList = () => {
  //   this.setState({
  //     savedList: [...this.state.savedList, props.movie]
  //   })
  //   console.log(this.state.savedList);
  // }

  render() {
    return (
      <div className="saved-list">
        <h3>Saved Movies:</h3>
        {this.props.list.map(movie => {
          return (
          <Link to={`/movies/${movie.id}`} key={movie.id}>
            <span className="saved-movie">{movie.title}</span>
          </Link>)
        }
        )}
        <Link to="/"><div className="home-button">Home</div></Link>
      </div>
    );
  }
}
