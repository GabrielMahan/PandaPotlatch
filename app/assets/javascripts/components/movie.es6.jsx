// this is movie show sub app i.e. extended movie

class Movie extends React.Component {

  constructor() {
    super()
    this.state = { movie: this.props.movie}

  }
  render(){
    return (
      <div>
        <h1>{this.state.movie.title}</h1>
        <p>{this.state.movie.description}</p>
        <p>{this.state.movie.rating}</p>
        <p>{this.state.movie.genre}</p>
        <p><img src={this.state.movie.img_src} /></p>
        <ReviewList movie={this.state.movie} />
      </div>
    )
  }
}
