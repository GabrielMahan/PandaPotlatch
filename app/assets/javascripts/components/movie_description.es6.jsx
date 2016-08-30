class MovieDescription extends React.Component {
  constructor() {
    super();
    this.movieClick = this.movieClick.bind(this)
    this.state = {
      display: false
    }
  }

   movieClick(e) {
    e.preventDefault();
    this.setState({ display: !this.state.display })
}

render(){
  movie = this.props.movie

  return (
    <div>
  <a href={`/movies/${movie.id}`}> {movie.title}</a>
    {this.state.display ?  <form onClick={this.movieClick}>
      <input  type="submit" value="See Less"/>
    </form>


    : <div><form onClick={this.movieClick}>
        <input  type="submit" value="See More"/>
      </form>
      {this.props.movie.description}
      </div>
  }




    </div>
    )


  }
}
