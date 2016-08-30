class ReviewList extends React.Component {
  constructor() {
    super()
    this.state = { movies: [] }
  }

  componentDidMount() {
    var movieID = this.props.movieID || 3
    $.get(`/movies/${movieID}/reviews`).done( (response) => {
      debugger;
      this.setState( { movies: response } )
    } )
  }

  render() {

    return (
      <div>
        <ul>
          {this.state.movies.map( function(review) {
            return <li> {review.body} </li> })


        </ul>
      </div>
    )
  }
}
