class MovieList extends React.Component {
  constructor() {
  super();
  this.state = {
    movies: []
    }
  }

  componentDidMount() {
    $.ajax({
      method: 'GET',
      url: '/movies'
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
          this.movies.map((movie, i) => {
            return <li key={i}> {movie.title}</li>
          })
        }
      </ul>
      </div>
    )
  }
}
