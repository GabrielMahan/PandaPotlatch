class ReviewList extends React.Component {


  constructor() {
    super();
    this.state = {
                    reviews: this.props.reviews,
                    movie: this.props.movie
                 }
  }




  render() {
    return (
      <div>
        this is review list
        <ul>

          { this.props.reviews.map(function(review) {
            return <li><a href={`/movies/${movie.id}/reviews/${review.id}`}> review.title </a></li>
          })}
        </ul>
      </div>
    )
  }
}
