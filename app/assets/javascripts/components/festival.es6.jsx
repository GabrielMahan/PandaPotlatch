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
        <div id="homeBlanket">
          <div id="titleWrap">
                    <div id="festivalInfo">
                      <h1> August 31 @ DBC </h1>
                      <div>
                          The all-panda, all-film, community gathering.<br /><br /> B.Y.O.Bamboo
                          <br /> <br /><div className="homelr"> <a href="/users/sign_in"> Login </a> </div> <div className="homelr"><a href="/users/sign_up">  Register </a> </div>
                      </div>

                    </div>
                     <div id="aaa" >
                          <div id='gmap_canvas'>
                          </div>
                    </div>
          </div>
          <div id="posterWall">

            { this.state.favorites.map(function(fav, i) {
              return (
                <div key={i} className="wallPoster"><div className="imgContainer"><a href={`/movies/${fav.id}`}> <img src={fav.img_src} /> </a></div></div>
                )
            })}
          </div>
        </div>
    )
  }
}
