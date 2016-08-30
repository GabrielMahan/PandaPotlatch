class VoteButton extends React.Component {

  constructor() {
  super();
  this.state = {
    vote_count: 0
    type: this.props
  }
}
  componentDidMount() {
    $.ajax({
      method: 'GET',
      url: '/votes/index',
      data: type
    })
    .done((response){
      this.setState({
        vote_count: response
      })
    })
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
