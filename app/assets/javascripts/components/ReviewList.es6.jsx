class ReviewList extends React.Component {

  render() {
    return (
      <div>
        <ul>
          {this.props.reviews.map(function(review, i) {
            return <li key={i}><a href={`/movies/${review.movie_id}/reviews/${review.id}`}> {review.title} </a></li>
          })}
        </ul>
      </div>
    )
  }
}
