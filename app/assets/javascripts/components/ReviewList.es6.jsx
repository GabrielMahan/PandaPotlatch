class ReviewList extends React.Component {

  render() {
    return (
      <div>
        this is review list
        <ul>
          {this.props.reviews.map(function(review) {
            return <li><a href={`/movies/${movie.id}/reviews/${review.id}`}> review.title </a></li>
          })}
        </ul>
      </div>
    )
  }
}
