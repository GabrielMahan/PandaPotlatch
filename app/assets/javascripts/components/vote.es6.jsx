class VoteButton extends React.Component {

  constructor() {
  super();
  this.state = {
    vote_count: 0,
  }
}
  componentDidMount() {
    $.ajax({
      method: 'GET',
      url: '/votes',
      data: this.props
    })
    // .done((response){
    //   this.setState({
    //     vote_count: response
    //   })
    // })
  }

  render() {
    return(
      <div>
        Count: {this.state.vote_count}
        <form>
        </form>
      </div>
    )
  }
}
