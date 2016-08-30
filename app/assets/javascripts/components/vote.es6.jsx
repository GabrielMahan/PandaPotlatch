class VoteButton extends React.Component {

  constructor() {
  super();
  this.state = {
    vote_count: 0,
  }
  this.upVote = this.upVote.bind(this)
  this.downVote = this.downVote.bind(this)
}
  componentDidMount() {
    $.ajax({
      method: 'GET',
      url: '/votes',
      data: this.props
    })
    .done((response) => {
      this.setState({
        vote_count: response
      })
    })
  }

  upVote(e) {

  }

  render() {
    return(
      <div>
        Count: {this.state.vote_count}
        <form onUpvote={this.upVote}>
          <input type="submit">
        </form>
        <form onDownvote={this.downVote}>
          <input type="submit">
        </form>
      </div>
    )
  }
}
