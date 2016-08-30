// this is movie show sub app i.e. extended movie

class Movie extends React.Component {

  constructor() {
    super()

    this.state = { movie: [], reviews: [] }

  }

  componentDidMount() {
    this.setState({ movie: this.props.movie })
    var movieGet = "/movies/" + JSON.parse(this.props.movie).id + "/reviews"
    $.get(movieGet).done( (response) => {
      this.setState({reviews: response})
    }.bind(this))
  }

  render(){
    return (
      <div>
        <h1>{JSON.parse(this.props.movie).title}</h1>
        <p>{JSON.parse(this.props.movie).description}</p>
        <p>{JSON.parse(this.props.movie).rating}</p>
        <p>{JSON.parse(this.props.movie).genre}</p>
        <p><img src={JSON.parse(this.props.movie).img_src} /></p>
        <ReviewList movie={JSON.parse(this.props.movie)} reviews={this.state.reviews}/>
      </div>
    )
  }
}
