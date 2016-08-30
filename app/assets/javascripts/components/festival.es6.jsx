class Festival extends React.Component {

  constructor() {
    super()
    this.state = { favorites: [ {title: "roberta", id: 65}, {title: "big joe", id: 82}]}
  }
  componentDidMount() {
    $.get('/favorites').done((response) => {
        this.setState( { favorites: response } )
    })
  }

  render() {
    return (
      <div>

        <div>
          <h3> this is div wiht cool info about festival </h3>
          <img id="beardman" src="http://www.menshairstyletrends.com/wp-content/uploads/2015/09/beardedvillains_volkdemir_hard-part-fade-combover-long-beard.jpg" />
        </div>
        <div id="fetival info">
          <h1> welcome to Panda Potlatch!!! </h1>
        </div>
        <div>
          <ul>
          { this.state.favorites.map(function(fav) {
            return (
              <li><a href={`/movies/${fav.id}`}> {fav.title} </a></li>
              )
          })}
          </ul>
        </div>











        //everything below is garbage














        <div id='badSVG'>
          <svg id='svg'>
            <circle id="reel"  cx="50%" cy="50%" r="40%">


            </circle>
            <a href="/movies">
              <rect x="50%" y="50%" id="square" width="300" height="100" />
            </a>
          </svg>
        </div>
      </div>
    )
  }
}
