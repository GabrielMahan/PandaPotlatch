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
<div className="movie-desc">

  <a href={`/movies/${movie.id}`}> {movie.title}</a><br />

  { movie.img_src != "N/A" ?
  <a href={`/movies/${movie.id}`}><img src={movie.img_src}/></a> :
  <a href={`/movies/${movie.id}`}><img src='http://www.edinburghzoo.org.uk/media/3455/ezpanda.png'/></a>
  }

  {this.props.UserSignedIn ?
  <div>
    <VoteButton movie={movie} />
  </div>
  :
  <div></div>
}

    {this.state.display ?
      <div>
        {movie.description}
        <form className="desc-toggle" onClick={this.movieClick}>
          <input  type="submit" value="See Less"/>
        </form>
      </div>
    :
      <form className="desc-toggle" onClick={this.movieClick}>
        <input  type="submit" value="See More"/>
      </form>
  }

</div>
    )

  }

}
