class MovieList extends React.Component {
  constructor() {
  super();
  this.state = {
    movies: []
    }
  }


  componentWillMount() {
    $.ajax({
      method: 'GET',
      url: '/all_movies'
    })
    .done((response) => {
      this.setState({
        movies: response
      });
    });
  }


  render(){
    return (
      <div className="movie-list">
        <h1>Movies</h1>
        <ul>
          {
            this.state.movies.map((movie, i) => {
              return <li key={i}>
                <MovieDescription UserSignedIn={this.props.UserSignedIn} movie={movie} />
              </li>
            })
          }
        </ul>
      </div>
    )
  }
}
