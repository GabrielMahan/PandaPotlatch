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
  var movie = this.props.movie;

  return (
    <div>
  <a href={`/movies/${movie.id}`}> {movie.title}</a>
  < VoteButton movie={movie} />


    {this.state.display ?  <form onClick={this.movieClick}>
      <input  type="submit" value="See More"/>
    </form>


    : <div>
      {movie.description}
      <form onClick={this.movieClick}>
        <input  type="submit" value="See Less"/>
      </form>
      </div>
  }




    </div>
    )


  }
}
