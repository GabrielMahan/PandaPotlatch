class ReviewList extends React.Component {
  // constructor() {
  //   super();
  //   // debugger;
  //   this.state = { reviews: [], movie: 'movie' }
  // }


//  WHY WON't THIS WORK I HATE LIFE
  // componentDidMount() {
  //   // debugger;
  //   this.setState({
  //                   reviews: this.props.reviews,
  //                   movie: this.props.movie
  //                })
  // }

  componentDidMount() {
    // debugger;
  }
  render() {

    return (
      <div>
        this is review list
        <ul>
          { this.props.reviews.map(function(review, i) {
            return <li key={i}><a  href={`/reviews/${review.id}`} > {review.title} </a></li>
          })}
        </ul>
      </div>
    )
  }
}
