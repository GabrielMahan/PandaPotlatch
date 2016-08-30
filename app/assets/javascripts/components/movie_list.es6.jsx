class MovieList extends React.Component {
  constructor() {
  super();
  this.state = {
    movies: [],
    }
  }


  componentDidMount() {
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
      <div>
      <h1> Movies </h1>
      <ul>
        {
          this.state.movies.map((movie, i) => {
            return <li key={i}>
              <MovieDescription movie={movie} />
            </li>
          })
        }
      </ul>
      </div>
    )
  }
}
