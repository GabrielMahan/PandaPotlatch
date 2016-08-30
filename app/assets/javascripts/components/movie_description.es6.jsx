class MovieDescription {
  constructor(){
    super();
    this.movieClick = this.movieClick.bind(this)
    this.state = {
      display: false;
    }
  }

   movieClick(e) {
    e.preventDefault();
    this.setState({
    display: !display
  })
}

render(){
  movie = this.props.movie
  <a href={`/movies/${movie.id}`}> {movie.title}</a>
  if ({this.state.display} === false)
    <form onClick={this.movieClick}>
      <input  type="submit" value="See More"/>
    </form>
    {this.props.movie.description}
  else
    <form onClick={this.movieClick}>
      <input  type="submit" value="See Less"/>
    </form>
  end
  }
}
