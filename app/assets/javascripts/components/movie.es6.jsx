// this is movie show sub app i.e. extended movie

class Movie extends React.Component {

  constructor() {
    super()
    this.addReview = this.addReview.bind(this)
    this.state = { reviews: [] }

  }

  componentDidMount() {
    var movieGet = "/movies/" + JSON.parse(this.props.movie).id + "/reviews"
    $.get(movieGet).done( (response) => {
      this.setState({reviews: response})
    }.bind(this))
  }

  addReview(e) {
    e.preventDefault();
    var movie_id = JSON.parse(this.props.movie).id.toString()

    var review_data = {
      review: {
        title: this.refs.reviewTitle.value,
        tomato_score: this.refs.reviewTomatoscore.value,
        body: this.refs.reviewBody.value,
        critic_id: this.props.criticID,
        movie_id: movie_id
      }
    }

    $.post({`/movies/${movie_id}/reviews`}, review_data).done( (response) => {
        this.setState({reviews: this.state.reviews.concat(response)})
    })
  }

  render(){
    return (
      <div>

        <h1>{JSON.parse(this.props.movie).title}</h1>
        <p>{JSON.parse(this.props.movie).description}</p>
        <p>{JSON.parse(this.props.movie).rating}</p>
        <p>{JSON.parse(this.props.movie).genre}</p>
        <p><img src={JSON.parse(this.props.movie).img_src} /></p>
        <h2>Reviews</h2>
        {this.props.critic ?
          <form onSubmit={this.addReview}>
            <input placeholder="title" type="text" ref="reviewTitle" name= "review[title]" />
            <input placeholder="score" type="text" ref="reviewTomatoscore" name= "review[tomato_score]" />
            <input placeholder="body" type="text" ref="reviewBody" name= "review[body]" />
            <input type="submit" value="Ruin this director's life"/>
          </form>
          :
          <div></div>
        }
        <ReviewList movie={JSON.parse(this.props.movie)} reviews={this.state.reviews}/>
        <h3>Comments</h3>
        <CommentList movie={ JSON.parse(this.props.movie) } />
      </div>
    )
  }
}
