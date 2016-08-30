class Movie extends React.Component {


  render(){
    var movie = JSON.parse(this.props.data)
    return (
      <div>
      <h1>{movie.title}</h1>
      <p>{movie.description}</p>
        <p>{movie.rating}</p>
        <p>{movie.genre}</p>
        <p>{movie.img_src}</p>
      </div>
    )
  }
}
